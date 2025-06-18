"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MjWasy2Builder = exports.MjWasyBuilder = exports.GaneshaGoldBuilder = exports.IceAndFireBuilder = exports.BanditoBuilder = exports.DragonHatchBuilder = exports.SongkranBuilder = exports.DefaultMatch3Builder = exports.Match3Game = void 0;
const Coin_1 = require("../../db/entity/Coin");
const Constants_1 = require("../../common/Constants");
const SlotMatch3_1 = require("./SlotMatch3");
const Match3Lucky_1 = require("./Match3Lucky");
const Songkran_1 = require("./Songkran");
const Match3Generator_1 = require("./Match3Generator");
const SlotGame_1 = require("../slots/SlotGame");
const DragonHatch_1 = require("./DragonHatch");
const Bandito_1 = require("./Bandito");
const IceAndFire_1 = require("./IceAndFire");
const GaneshaGold_1 = require("./GaneshaGold");
const LuckyGenerator_1 = require("../slots/LuckyGenerator");
const MjWays2_1 = require("./MjWays2");
class Match3Game {
    static createGame(game, gameType, logger, testIsLucky) {
        let builder = undefined;
        if (gameType == Constants_1.GameType.SLOTS_SONGKRAN) { //slots泼水节
            builder = new SongkranBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_DRAGONHATCH) { //寻龙探宝
            builder = new DragonHatchBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_WILDBANDITO) { //亡灵大盗
            builder = new BanditoBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_ICEANDFIRE) { //冰火双娇 
            builder = new IceAndFireBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_GANESHAGOLD) { //象财神
            builder = new GaneshaGoldBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_MJWAYS) {
            builder = new MjWasyBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_MJWAYS2) {
            builder = new MjWasy2Builder();
        }
        else {
            builder = new DefaultMatch3Builder();
        }
        return new Match3Game(game, builder, gameType, logger || console, testIsLucky);
    }
    constructor(game, builder, gameType, logger, testIsLucky) {
        this.game = game;
        this.builder = builder;
        this.testIsLucky = testIsLucky;
        this.gameType = gameType;
        this.slot = new SlotGame_1.SlotGame(game, builder, gameType, logger, testIsLucky);
        if (testIsLucky) {
            console.warn("test slots lucky.");
        }
    }
    get logger() {
        return this.slot.logger;
    }
    //TODO remove
    //每一轮都生成中奖信息 
    payAllRound(bet, rounds, roundPays) {
        this.logger.log("pay all rounds");
        let freeCount = 0;
        let payout = new Coin_1.Coin(0);
        let payResult = undefined;
        let playRounds = [];
        //消消乐每一轮都会中奖
        for (let i = 0; i < rounds.length; i++) {
            let round = rounds[i];
            let verifyRes = round.verifyResult;
            let genResult = round.genResult;
            let pay = undefined;
            let isLastRound = (i == rounds.length - 1);
            for (let i = 0; i < roundPays.length; i++) {
                let p = roundPays[i];
                pay = p.pay(bet, genResult, verifyRes, pay, isLastRound);
                this.logger.log("round:", i, " gen result:", genResult, " verify result:", verifyRes, " pay result:", pay);
            }
            if (!pay) {
                throw new Error("pay result is null");
            }
            payResult = pay;
            if (pay.freeCount) {
                freeCount += pay.freeCount;
            }
            payout = payout.add(pay.payout);
            if (pay.paySymbols) {
                for (let s of genResult.symbols) {
                    let paySym = pay.paySymbols.find((paySym) => paySym.id == s.id && paySym.coordinate.row == s.coordinate.row && paySym.coordinate.reel == s.coordinate.reel);
                    if (paySym && paySym.payout) {
                        s.payout = paySym.payout;
                    }
                }
            }
            let r = {
                symbols: genResult.symbols,
                newSymbols: genResult.newSymbols,
                payout: pay.payout.toString(),
                freeCount: pay.freeCount,
                paySymbols: pay.playPaySymbols || [],
                multipliers: pay.match3Multipliers || [],
                dragons: pay.dragons || [],
            };
            playRounds.push(r);
        }
        if (!payResult) {
            throw new Error("pay result is undefined");
        }
        return { rounds: playRounds, freeCount, payout, payResult };
    }
    pay(bet, genResult, verifyRes, roundPays, isLastRound) {
        this.logger.log("pay match3 round");
        let freeCount = 0;
        let payout = new Coin_1.Coin(0);
        let payResult = undefined;
        //消消乐每一轮都会中奖
        let pay = undefined;
        this.logger.log("gen result:", genResult, " verify result:", verifyRes);
        for (let i = 0; i < roundPays.length; i++) {
            let p = roundPays[i];
            pay = p.pay(bet, genResult, verifyRes, pay, isLastRound);
            this.logger.log(" pay result:", pay);
        }
        if (!pay) {
            throw new Error("pay result is null");
        }
        payResult = pay;
        if (pay.freeCount) {
            freeCount += pay.freeCount;
        }
        payout = payout.add(pay.payout);
        if (pay.paySymbols) {
            for (let s of genResult.symbols) {
                let paySym = pay.paySymbols.find((paySym) => paySym.id == s.id && paySym.coordinate.row == s.coordinate.row && paySym.coordinate.reel == s.coordinate.reel);
                if (paySym && paySym.payout) {
                    s.payout = paySym.payout;
                }
            }
        }
        let r = {
            symbols: genResult.symbols,
            newSymbols: genResult.newSymbols,
            deleteSymbols: genResult.deleteSymbols,
            payout: pay.payout.toString(),
            freeCount: pay.freeCount,
            paySymbols: pay.playPaySymbols || [],
            multipliers: pay.match3Multipliers || [],
            dragons: pay.dragons || [],
            usedDragon: pay.usedDragon,
            addDragon: pay.addDragon,
        };
        return { round: r, freeCount, payout, payResult };
    }
    spin(bet) {
        //开始旋转
        let r = this.slot.spin(bet, undefined, this.pay.bind(this));
        let payout = r.payout;
        let results = r.results;
        //返回数据时，进行类型检查
        let res = results.map((res) => {
            let playRounds = res.rounds;
            return {
                rounds: playRounds,
                leftFreeCount: res.leftFreeCount,
                virtualBigEvents: res.virtualBigEvents,
            };
        });
        return { results: res, payout: payout };
    }
}
exports.Match3Game = Match3Game;
class DefaultMatch3Builder {
    create(game, isLucky, isFree, sureWin, context) {
        let generator = new Match3Generator_1.Match3Generator(game, isLucky, isFree);
        let verify = new SlotMatch3_1.Match3Verify(game);
        let roundPays = [];
        roundPays.push(new SlotMatch3_1.Match3Pay(game));
        return { generator, roundPays, verify, pays: [] };
    }
}
exports.DefaultMatch3Builder = DefaultMatch3Builder;
class SongkranBuilder {
    create(game, isLucky, isFree, sureWin, context) {
        let gen = new Match3Generator_1.Match3Generator(game, isLucky, isFree);
        let generator = new LuckyGenerator_1.LuckyGenerator(game, gen, isLucky);
        let verify = new SlotMatch3_1.Match3Verify(game);
        let roundPays = [];
        roundPays.push(new SlotMatch3_1.Match3Pay(game));
        roundPays.push(new Songkran_1.SongkranMultipler(game, context));
        roundPays.push(new Match3Lucky_1.Match3Lucky(game, isLucky, isFree));
        return { generator, roundPays, verify, pays: [] };
    }
}
exports.SongkranBuilder = SongkranBuilder;
class DragonHatchBuilder {
    create(game, isLucky, isFree, sureWin, context, logger) {
        logger = logger || console;
        let generator = new DragonHatch_1.DragonHatchGenerator(game, logger, isLucky, isFree);
        let verify = new DragonHatch_1.DragonHatchVerify(game, isLucky, logger);
        let roundPays = [];
        roundPays.push(new SlotMatch3_1.Match3Pay(game));
        roundPays.push(new DragonHatch_1.DragonHatchPay(game, logger));
        return { generator, roundPays, verify, pays: [] };
    }
}
exports.DragonHatchBuilder = DragonHatchBuilder;
//亡灵大盗。创建玩一局的结果工厂类
class BanditoBuilder {
    create(game, isLucky, isFree, sureWin, context) {
        let gen = new Bandito_1.BanditoGenerator(game, isLucky, isFree);
        let generator = new LuckyGenerator_1.LuckyGenerator(game, gen, isLucky);
        let verify = new Bandito_1.BanditoVerify(game);
        let roundPays = [];
        roundPays.push(new SlotMatch3_1.Match3Pay(game));
        roundPays.push(new Bandito_1.BanditoPay(game, context));
        roundPays.push(new Match3Lucky_1.Match3Lucky(game, isLucky, isFree));
        return { generator, roundPays, verify, pays: [] };
    }
}
exports.BanditoBuilder = BanditoBuilder;
class IceAndFireBuilder {
    create(game, isLucky, isFree, sureWin, context, logger) {
        if (isFree && game.freeGame) {
            game = game.freeGame;
            console.log("IceAndFireBuilder free game:", game.freeGame);
        }
        let gen = new Match3Generator_1.Match3Generator(game, isLucky, isFree);
        let generator = new LuckyGenerator_1.LuckyGenerator(game, gen, isLucky);
        let verify = new IceAndFire_1.IceAndFireVerify(game);
        let roundPays = [];
        roundPays.push(new IceAndFire_1.IceAndFirePay(game));
        roundPays.push(new IceAndFire_1.IceAndFireLucky(game, isLucky, isFree));
        return { generator, roundPays, verify, pays: [] };
    }
    createDoublePay(game) {
        return new IceAndFire_1.IceAndFireDoublePay(game);
    }
}
exports.IceAndFireBuilder = IceAndFireBuilder;
class GaneshaGoldBuilder {
    create(game, isLucky, isFree, sureWin, context, logger) {
        logger = logger || console;
        let generator = new GaneshaGold_1.GaneshaGoldGenerator(game, isLucky, isFree, logger);
        let verify = new GaneshaGold_1.GaneshaGoldVerify(game, logger);
        let roundPays = [];
        roundPays.push(new SlotMatch3_1.Match3Pay(game));
        roundPays.push(new GaneshaGold_1.GaneshaGoldPay(game, isFree, logger, context));
        roundPays.push(new Match3Lucky_1.Match3Lucky(game, isLucky, isFree));
        return { generator, roundPays, verify, pays: [] };
    }
}
exports.GaneshaGoldBuilder = GaneshaGoldBuilder;
class MjWasyBuilder {
    create(game, isLucky, isFree, sureWin, context) {
        let gen = new MjWays2_1.MjWays2Generator(game, isLucky, isFree);
        let generator = new LuckyGenerator_1.LuckyGenerator(game, gen, isLucky);
        let verify = new SlotMatch3_1.Match3Verify(game);
        let roundPays = [];
        roundPays.push(new SlotMatch3_1.Match3Pay(game));
        roundPays.push(new MjWays2_1.MjWays2Pay(game, context, isFree));
        roundPays.push(new Match3Lucky_1.Match3Lucky(game, isLucky, isFree));
        return { generator, roundPays, verify, pays: [] };
    }
}
exports.MjWasyBuilder = MjWasyBuilder;
class MjWasy2Builder {
    create(game, isLucky, isFree, sureWin, context) {
        let gen = new MjWays2_1.MjWays2Generator(game, isLucky, isFree);
        //最上面一行不能中奖, 左下角， 右小角不能中奖
        let ignoreRows = [1, 7];
        let ignorePoints = [{ row: 2, reel: 1 }, { row: 2, reel: 5 }];
        let generator = new LuckyGenerator_1.LuckyGenerator(game, gen, isLucky, ignoreRows, ignorePoints);
        let verify = new SlotMatch3_1.Match3Verify(game, undefined, ignoreRows, ignorePoints);
        let roundPays = [];
        roundPays.push(new SlotMatch3_1.Match3Pay(game));
        roundPays.push(new MjWays2_1.MjWays2Pay(game, context, isFree));
        roundPays.push(new Match3Lucky_1.Match3Lucky(game, isLucky, isFree, ignoreRows, ignorePoints, 10));
        return { generator, roundPays, verify, pays: [] };
    }
}
exports.MjWasy2Builder = MjWasy2Builder;
