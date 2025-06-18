"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSlots = void 0;
const Room_1 = require("./Room");
const tsrpc_1 = require("tsrpc");
const LineSlotGame_1 = require("./lineslot/LineSlotGame");
const Match3Game_1 = require("./match3/Match3Game");
const Coin_1 = require("../db/entity/Coin");
const DBMgr_1 = require("../db/DBMgr");
const Constants_1 = require("../common/Constants");
const err = __importStar(require("../shared/protocols/Error"));
const ServerGloabls_1 = require("../common/ServerGloabls");
const DBSlotsLog_1 = require("../db/DBSlotsLog");
const SN_1 = require("../common/SN");
class RoomSlots {
    constructor(id, gameTpye, displayId, name, password) {
        this.room = new Room_1.Room(id, gameTpye, displayId, name, this, 1, 1, password);
        this.playerCount = 0;
    }
    get logger() {
        return this.room.logger;
    }
    async onRPC_PlayMatch3(call) {
        let conn = call.conn;
        let dbUserInfo = conn.dbUserInfo;
        let uid = conn.uid;
        let { bet, slot, user } = await this.playGame(conn, call.req.gameId, call.req.bet);
        let testIsLucky = false;
        if (conn.roleName == Constants_1.TEST_ROLE_NAME && ServerGloabls_1.ServerGlobals.dev) {
            testIsLucky = true;
            this.logger.warn("dev server, test slot lucky");
        }
        let game = Match3Game_1.Match3Game.createGame(slot, this.room.gameType, this.logger, testIsLucky);
        let res = game.spin({ coin: bet }); //开始生成结果
        let payout = res.payout;
        let logSn = "";
        for (let i = 0; i < res.results.length; i++) {
            let r = res.results[i];
            let sn = (0, SN_1.createSN)();
            let spend = new Coin_1.Coin(0);
            let win = r.rounds.reduce((prev, cur) => prev.add(new Coin_1.Coin(cur.payout)), new Coin_1.Coin(0));
            if (i == 0) {
                logSn = sn;
                spend = bet.negated();
            }
            await DBSlotsLog_1.dbSlotsLog.insertSlotsLog({
                sn: sn,
                snExt: logSn,
                userAccount: dbUserInfo.account,
                gameCode: this.room.gameType,
                gameName: "",
                roomId: this.room.id,
                type: res.payout.isGreaterThan(0) ? 1 : 0,
                isLucky: false,
                spend: spend,
                win: win,
                final: win.add(spend),
            });
        }
        let coinSn = (0, SN_1.createSN)();
        if (bet.isGreaterThan(payout)) {
            console.log("decrementCoins", uid, " coins:", user.coin, bet.sub(payout));
            await DBMgr_1.sqlDBUser.decrementCoins(uid, bet.sub(payout), this.room.gameType, coinSn, "slots", logSn);
        }
        else if (payout.isGreaterThan(bet)) {
            console.log("incrementCoins", uid, " coins:", user.coin, payout.sub(bet));
            await DBMgr_1.sqlDBUser.incrementCoins(uid, payout.sub(bet), this.room.gameType, coinSn, "slots", logSn);
        }
        let coins = user.coin;
        coins = coins.sub(bet).add(payout);
        this.logger.log("bet:", bet, " payout:", payout, " coins:", coins);
        call.succ({ results: res.results, payout: payout.toString(), coins: coins.toString() });
    }
    async onRPC_PlaySlots(call) {
        let conn = call.conn;
        let dbUserInfo = conn.dbUserInfo;
        let sureWin = call.req.sureWin;
        let uid = conn.uid;
        let { bet, slot, user } = await this.playGame(conn, call.req.gameId, call.req.bet, call.req.sureWin);
        let testIsLucky = false;
        if (conn.roleName == Constants_1.TEST_ROLE_NAME && ServerGloabls_1.ServerGlobals.dev) {
            testIsLucky = true;
            this.logger.warn("dev server, test slot lucky");
        }
        let game = LineSlotGame_1.LineSlotGame.createGame(slot, this.room.gameType, this.logger, testIsLucky);
        let res = game.spin({ coin: bet, sureWin: sureWin });
        let payout = res.payout;
        let logSn = "";
        let isLucky = res.results[0].bigEvents;
        for (let i = 0; i < res.results.length; i++) {
            let r = res.results[i];
            let sn = (0, SN_1.createSN)();
            let spend = new Coin_1.Coin(0);
            let win = new Coin_1.Coin(r.payout);
            if (i == 0) {
                logSn = sn;
                spend = bet.negated();
            }
            await DBSlotsLog_1.dbSlotsLog.insertSlotsLog({
                sn: sn,
                userAccount: dbUserInfo.account,
                gameCode: this.room.gameType,
                gameName: "",
                roomId: this.room.id,
                type: res.payout.isGreaterThan(0) ? 1 : 0,
                isLucky: isLucky,
                spend: spend,
                win: win,
                final: win.add(spend),
            });
        }
        let coinSn = (0, SN_1.createSN)();
        if (bet.isGreaterThan(payout)) {
            console.log("decrementCoins", uid, " coins:", user.coin, bet.sub(payout));
            await DBMgr_1.sqlDBUser.decrementCoins(uid, bet.sub(payout), this.room.gameType, coinSn, "slots", logSn);
        }
        else if (payout.isGreaterThan(bet)) {
            console.log("incrementCoins", uid, " coins:", user.coin, payout.sub(bet));
            await DBMgr_1.sqlDBUser.incrementCoins(uid, payout.sub(bet), this.room.gameType, coinSn, "slots", logSn);
        }
        let coins = user.coin;
        coins = coins.sub(bet).add(payout);
        this.logger.log("bet:", bet, " sure win:", sureWin, " payout:", payout, " coins:", coins);
        call.succ({ results: res.results, payout: payout.toString(), coins: coins.toString() });
    }
    async playGame(conn, gameId, reqBet, sureWin) {
        let uid = conn.uid;
        if (!uid) {
            throw new tsrpc_1.TsrpcError('INVALID_USER', { code: err.ERR_NOT_LOGIN });
        }
        let user = this.room.getUser(uid);
        if (!user) {
            throw new tsrpc_1.TsrpcError('INVALID_USER_DATA', { code: err.ERR_NOT_LOGIN });
        }
        let u = await DBMgr_1.sqlDBUser.getUserByUid(uid);
        if (!u) {
            throw new tsrpc_1.TsrpcError('INVALID_USER_DATA', { code: err.ERR_NOT_LOGIN });
        }
        let bet = new Coin_1.Coin(reqBet);
        if (bet.isLessThanOrEqualTo(0) || !bet.multiply(100).isInteger()) {
            throw new tsrpc_1.TsrpcError('INVALID_BET', { code: err.ERR_BET });
        }
        if (sureWin) {
            bet = bet.multiply(5);
            this.logger.log("win bet, bet*5:", bet);
        }
        if (u.coin.isLessThan(bet)) {
            throw new tsrpc_1.TsrpcError('INSUFFICIENT_COINS', { code: err.ERR_NO_ENOUGH_COINS });
        }
        const slot = await DBMgr_1.dbSlot.getGameSetting(gameId);
        if (!slot) {
            throw new tsrpc_1.TsrpcError('INVALID_SLOT', { code: err.ERR_NO_GAME_CONFIG });
        }
        let bigEventsOdds = await DBMgr_1.dbSlot.getSlotsBigEventsOdds(gameId);
        if (bigEventsOdds != null) {
            if (slot.lucky) {
                slot.lucky.probability = bigEventsOdds;
            }
            else {
                slot.lucky = { probability: bigEventsOdds };
            }
        }
        if (gameId == Constants_1.GameType.SLOTS_DRAGONHATCH) {
            if (slot.lucky && slot.lucky.dragon) {
                let p = await DBMgr_1.dbSlot.getDragonHatchBigEventsOdds(gameId);
                if (p.water != null) {
                    slot.lucky.dragon.water = p.water;
                }
                if (p.earth != null) {
                    slot.lucky.dragon.earth = p.earth;
                }
                if (p.fire != null) {
                    slot.lucky.dragon.fire = p.fire;
                }
                if (p.dragon != null) {
                    slot.lucky.dragon.dragon = p.dragon;
                }
            }
        }
        return { bet, slot, user: u };
    }
    async onUserEnter(user, conn) {
        return;
    }
    onPlayerLeave(user, conn) {
        this.room.setPlaying(false);
        this.room.isEnd = true;
        this.playerCount -= 1;
        return '';
    }
    onJoinGame(newPlayer, roleName, isAI) {
        if (this.getPlayerNum() >= this.room.maxPlayerNum) {
            this.logger.warn("The number of players exceeds the limit.");
            return 0;
        }
        this.playerCount = 1;
        return 1;
    }
    onUserReady(newPlayer) {
        return Promise.resolve();
    }
    onCheckGameBegin() {
        if (this.room.isPlaying) {
            return;
        }
        this.room.setPlaying(true);
    }
    getPlayerNum() {
        return this.playerCount;
    }
}
exports.RoomSlots = RoomSlots;
