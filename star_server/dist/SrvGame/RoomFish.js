"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomFish = void 0;
const Room_1 = require("./Room");
const FishGame_1 = require("./fish/FishGame");
const Delay_1 = require("../common/Delay");
const Coin_1 = require("../db/entity/Coin");
const DBMgr_1 = require("../db/DBMgr");
const SN_1 = require("../common/SN");
const DBFishLog_1 = require("../db/DBFishLog");
const GameType_1 = require("../common/GameType");
const Constants_1 = require("../common/Constants");
//子弹保存时间
const BULLET_TTL = 2 * 60; //120秒
class RoomFish {
    constructor(id, gameType, gameSetting, displayId, name, password) {
        this._instIdBase = 1;
        this.fishes = new Map();
        this.bullets = new Map();
        //按照发射时间排序，由远到近
        this.bulletIds = [];
        this.lastBulletId = undefined;
        this.coins = new Coin_1.Coin(0);
        this.costCoin = new Coin_1.Coin(0);
        this.winCoin = new Coin_1.Coin(0);
        this.coinsIsSaving = false;
        this.coinLogs = [];
        this.lastFireTimestamp = 0;
        this.beginTimestamp = 0;
        this.playerCount = 0;
        this.fishGenerator = new FishGame_1.FishGame(gameSetting);
        const emptyTime = this.fishGenerator.getMaxIdleTime() * 1000;
        this.room = new Room_1.Room(id, gameType, displayId, name, this, 50, 1, password, emptyTime);
        this.logger.log("RoomFish constructor");
    }
    get logger() {
        return this.room.logger;
    }
    addCoins(coins, bulletId, fishId) {
        this.updateCoins(this.coins.add(coins), { delta: new Coin_1.Coin(coins), sn: (0, SN_1.createSN)(), desc: "hit fish" });
    }
    subCoins(coins, cannonType, bulletId) {
        this.updateCoins(this.coins.sub(coins), { delta: new Coin_1.Coin(-coins), sn: (0, SN_1.createSN)(), desc: "fire bullet" });
    }
    updateCoins(coins, coinLog) {
        this.coins = coins;
        if (coinLog != undefined) {
            this.coinLogs.push(coinLog);
        }
    }
    onDisconnected(conn) {
        this.logger.log("save coins on disconnected");
        this.saveUserCoins();
    }
    listenMsgs(conn) {
        conn.listenMsg("fish/HitFish", call => { this.onMsg_HitFish(call); });
        conn.listenMsg("fish/Fire", call => { this.onMsg_Fire(call); });
    }
    unlistenMsgs(conn) {
        conn.unlistenMsgAll("fish/HitFish");
        conn.unlistenMsgAll("fish/Fire");
    }
    onMsg_Fire(call) {
        let bullet = call.msg;
        if (!bullet.bulletId) {
            call.logger.warn("bullet id is empty");
            call.conn.sendMsg("fish/FireResult", { bulletId: call.msg.bulletId, bulletLevel: call.msg.bulletLevel, isSuccess: false, reason: "invalid bellet id" });
            return;
        }
        if (this.bullets.has(bullet.bulletId)) {
            call.logger.warn("fire bullet more than one time, bullet id:", bullet.bulletId);
            call.conn.sendMsg("fish/FireResult", { bulletId: call.msg.bulletId, bulletLevel: call.msg.bulletLevel, isSuccess: false, reason: "bullet id exists" });
            return;
        }
        let bulletLevel = this.fishGenerator.getBulletLevel(call.msg.bulletLevel);
        if (!bulletLevel) {
            call.logger.warn("can't fire bullet, invalid bullet level:", call.msg.bulletLevel, " id:", call.msg.bulletId);
            call.conn.sendMsg("fish/FireResult", { bulletId: call.msg.bulletId, bulletLevel: call.msg.bulletLevel, isSuccess: false, reason: "invalid bullet level" });
            return;
        }
        if (this.coins.isLessThan(bulletLevel.needGolds)) {
            call.logger.warn("can't fire bullet, no enough coins, bullet level:", call.msg.bulletLevel, " id:", call.msg.bulletId);
            call.conn.sendMsg("fish/FireResult", { bulletId: call.msg.bulletId, bulletLevel: call.msg.bulletLevel, isSuccess: false, reason: "no enough coins" });
            return;
        }
        if (this.bullets.size >= this.fishGenerator.getMaxBulletCount()) {
            call.logger.warn("can't fire bullet, too many bullets, max bullet count:", this.fishGenerator.getMaxBulletCount());
            call.conn.sendMsg("fish/FireResult", { bulletId: call.msg.bulletId, bulletLevel: call.msg.bulletLevel, isSuccess: false, reason: "bullets oversize" });
            return;
        }
        //子弹发射成功
        this.costCoin = this.costCoin.add(bulletLevel.needGolds);
        this.subCoins(bulletLevel.needGolds, bulletLevel.cannonType, bullet.bulletId);
        let liveTimestamp = Date.now() + BULLET_TTL * 1000;
        if (this.fishGenerator.isBulletTurnAround()) {
            //100days
            liveTimestamp = Date.now() + 100 * 24 * 3600 * 1000;
        }
        this.bullets.set(bullet.bulletId, { id: bullet.bulletId, level: bullet.bulletLevel, liveTimestamp: liveTimestamp });
        this.bulletIds.push(bullet.bulletId);
        this.lastFireTimestamp = Date.now();
        this.lastBulletId = bullet.bulletId;
        call.conn.sendMsg("fish/FireResult", { bulletId: call.msg.bulletId, bulletLevel: call.msg.bulletLevel, isSuccess: true, coins: this.coins.toString(), spentCoins: "" + bulletLevel.needGolds, reason: "" });
        call.logger.debug("fire bullet, id:", bullet.bulletId);
    }
    onMsg_HitFish(call) {
        call.logger.log("hit fish:", call.msg);
        if (!this.fishes.has(call.msg.fishId)) {
            call.logger.warn("fish id:" + call.msg.fishId + " not exists");
            return;
        }
        if (!this.bullets.has(call.msg.bulletId)) {
            //非法的子弹id
            call.logger.warn("bullet is't exists, bullet id:", call.msg.bulletId);
            return;
        }
        let bullet = this.bullets.get(call.msg.bulletId);
        this.bullets.delete(call.msg.bulletId);
        let bulletLevel = this.fishGenerator.getBulletLevel(bullet.level);
        if (!bulletLevel) {
            call.logger.warn("invalid bullet level");
            return;
        }
        let fish = this.fishes.get(call.msg.fishId);
        fish.hp = Math.max(0, fish.hp - bulletLevel.hurtHp);
        call.logger.log(`fish id:${fish.id} hp:${fish.hp}, hp loss:${bulletLevel.hurtHp}`);
        if (fish.hp == 0) {
            //fish is dead now
            this.fishes.delete(fish.id);
            let score = this.fishGenerator.getFishScore(fish.type);
            this.winCoin = this.winCoin.add(score);
            this.addCoins(score, bullet.id, fish.id);
            this.room.broadcastMsg("fish/FishDead", { id: fish.id, coins: this.coins.toNumber(), incrementCoins: score });
            call.logger.log("fish is dead:", fish.id);
        }
    }
    onCheckGameBegin() {
        if (this.room.isPlaying) {
            return;
        }
        this.logger.log("fish begin");
        this.room.setPlaying(true);
        this.beginTimestamp = Date.now();
        this.runGenerateFishLoop();
        this.runGameLoop();
    }
    async runGameLoop() {
        while (true) {
            await (0, Delay_1.delay)(4 * 1000);
            if (!this.room.isPlaying) {
                break;
            }
            await this.saveUserCoins();
        }
        await this.saveUserCoins();
        this.cleanBullets();
        let sn = (0, SN_1.createSN)();
        let u = await DBMgr_1.sqlDBUser.getUserByUid(this.uid);
        if (u != null) {
            let r = (0, GameType_1.parseGameType)(this.room.gameType);
            let name = (0, Constants_1.getGameName)("fish", r.major) || "";
            let f = this.winCoin.sub(this.costCoin);
            await DBFishLog_1.dbFishLog.insertFishLog({ sn: sn, userAccount: u.account, gameCode: r.major, gameName: name, roomId: this.room.id, spend: this.costCoin.negated(), win: this.winCoin, final: f });
        }
        this.logger.log("save coin loop exit.");
    }
    async saveUserCoins() {
        if (this.coinsIsSaving) {
            this.logger.log("coins is saving, skip");
            return;
        }
        if (!this.uid) {
            this.logger.warn("uid is undefined");
            return;
        }
        if (this.coinLogs.length > 0) {
            this.coinsIsSaving = true;
            let coinLogs = [...this.coinLogs];
            this.coinLogs = [];
            for (let coinLog of coinLogs) {
                let coinSN = (0, SN_1.createSN)();
                if (coinLog.delta.isEqualTo(0)) {
                    await DBMgr_1.sqlDBUser.incrementCoins(this.uid, coinLog.delta, this.room.gameType, coinSN, "fish", coinLog.sn, coinLog.desc);
                }
                else {
                    await DBMgr_1.sqlDBUser.decrementCoins(this.uid, coinLog.delta.negated(), this.room.gameType, coinSN, "fish", coinLog.sn, coinLog.desc);
                }
            }
            this.coinsIsSaving = false;
        }
    }
    async runGenerateFishLoop() {
        //上一次生成鱼群的时间戳, 每3分钟生成一次鱼群
        let lastFishGroupTimestamp = Date.now();
        const fishGroupInterval = 1 * 60 * 1000;
        const fishGroupPrepareTime = 3 * 1000;
        let speed = 0.2;
        let loopCount = 0;
        while (true) {
            if (loopCount++ >= 12) {
                speed = 1.0;
            }
            let d = Math.floor(Math.random() * 4000) + 1000;
            d *= speed;
            await (0, Delay_1.delay)(d); // 每隔1-5秒生成一条鱼
            if (!this.room.isPlaying) {
                break;
            }
            //生成鱼群
            if (this.fishGenerator.isFishGroupEnabled() && Date.now() - lastFishGroupTimestamp > fishGroupInterval) {
                lastFishGroupTimestamp = Date.now();
                this.logger.log("fish wave comming");
                this.room.broadcastMsg("fish/FishWave", {});
                await (0, Delay_1.delay)(fishGroupPrepareTime);
                //生成鱼群
                let group = this.fishGenerator.generateGroupFish();
                if (group) {
                    this.logger.log("generated fish group:", group);
                    this.fishes.clear();
                    group.fishes.forEach((f) => {
                        this.fishes.set(f.id, f);
                    });
                    this.room.broadcastMsg("fish/NewFishGroup", { groupId: group.id, startId: group.startId, fishCount: group.fishes.length, liveTimestamp: group.fishes[0].liveTimestamp, fishes: group.fishes });
                }
                continue;
            }
            if (this.fishes.size >= this.fishGenerator.getMaxFishCount()) {
                continue;
            }
            let fish = this.fishGenerator.generateFish();
            this.fishes.set(fish.id, fish);
            this.logger.log(`Fish ${fish.id} (type: ${fish.type}) generated`);
            this.room.broadcastMsg("fish/NewFish", { id: fish.id, type: fish.type, liveTimestamp: fish.liveTimestamp });
        }
        this.logger.log("generate fish loop exit.");
    }
    //移除过期的子弹
    cleanBullets() {
        //有效时间内的子弹index,此index之前的子弹全部过期
        let index = undefined;
        for (let i = 0; i < this.bulletIds.length; i++) {
            let bulletId = this.bulletIds[i];
            let bullet = this.bullets.get(bulletId);
            if (bullet && bullet.liveTimestamp > Date.now()) {
                index = i;
                break;
            }
        }
        if (index === undefined) {
            return;
        }
        for (let i = 0; i < index; i++) {
            let bulletId = this.bulletIds[i];
            this.bullets.delete(bulletId);
            this.logger.log("remove bullet id:", bulletId);
        }
        this.bulletIds.splice(0, index);
    }
    //检查房间是否处于idle状态， 返回true 表示房间空闲
    checkRoomIdle() {
        let lastActiveTime = this.lastFireTimestamp || this.beginTimestamp;
        let now = Date.now();
        let maxIdleTime = this.fishGenerator.getMaxIdleTime() * 1000;
        if (lastActiveTime > 0 && now - lastActiveTime > maxIdleTime) {
            this.logger.log("fish room is idle, now:", now, " last fire time:", this.lastFireTimestamp, " begin time:", this.beginTimestamp, " max idle time:", maxIdleTime);
            return true;
        }
        return this.room.checkEmptyTime();
    }
    onJoinGame(newPlayer, roleName, isAI = false) {
        if (this.playerCount >= this.room.maxPlayerNum) {
            this.logger.warn("The number of players exceeds the limit.");
            return 0;
        }
        this.playerCount += 1;
        let playerId = this._instIdBase++;
        return playerId;
    }
    async onUserReady(newPlayer) {
        if (this.uid && this.uid != newPlayer.uid) {
            this.logger.warn("more than one user enter this room, room id:", this.room.id, "old uid:", this.uid, " new uid:", newPlayer.uid);
            return;
        }
        this.onPlayerReady(newPlayer);
    }
    onPlayerLeave(user, conn) {
        this.room.setPlaying(false);
        this.room.isEnd = true;
        this.playerCount -= 1;
        this.saveUserCoins();
        return undefined;
    }
    getPlayerNum() {
        return this.playerCount;
    }
    onClientReady(conn) {
        let values = [...this.fishes.values()];
        let fishes = values.map((f) => {
            return { id: f.id, type: f.type, liveTimestamp: f.liveTimestamp };
        });
        let bullets = [...this.bullets.values()].map((b) => {
            return { id: b.id, bulletLevel: b.level };
        });
        conn.sendMsg("fish/RoomFish", { fishes: fishes, bullets: bullets, timestamp: Date.now(), lastBulletId: this.lastBulletId });
    }
    async onUserEnter(u, conn) {
        if (!conn) {
            this.logger.warn("user connection is undefined");
            return;
        }
        if (conn.uid === undefined) {
            this.logger.warn("connection uid is undefined");
            return;
        }
        let user = this.room.getUser(conn.uid);
        if (!user) {
            return;
        }
        if (user.playerId && user.isOnline && user.ready) {
            //玩家断线重连
            this.logger.log("play reconnect, uid:", user.uid, " player id:", user.playerId);
            await this.onPlayerReady(user);
        }
    }
    async onPlayerReady(newPlayer) {
        let userInfo = await DBMgr_1.sqlDBUser.getUserInfoByUid(newPlayer.uid);
        let userCoins = (userInfo === null || userInfo === void 0 ? void 0 : userInfo.coin) || 0;
        this.coins = new Coin_1.Coin(userCoins);
        this.uid = newPlayer.uid;
        this.logger.log("user ready, uid:", newPlayer.uid, " coins:", this.coins);
    }
}
exports.RoomFish = RoomFish;
