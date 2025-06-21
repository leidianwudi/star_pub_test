"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PandaBuilder = exports.LoongBuilder = exports.UnicornBuilder = exports.KylinBuilder = exports.DoubleHappyBuilder = exports.RabbitBuilder = exports.OxGameBuilder = exports.DragonGameBuilder = exports.TigerGameBuilder = exports.MouseGameBuilder = exports.DefaultGameBuilder = exports.LineSlotGame = void 0;
const Coin_1 = require("../../db/entity/Coin");
const Constants_1 = require("../../common/Constants");
const SlotGame_1 = require("../slots/SlotGame");
const SlotMouse_1 = require("./SlotMouse");
const SlotOx_1 = require("./SlotOx");
const SlotRabbit_1 = require("./SlotRabbit");
const SlotTiger_1 = require("./SlotTiger");
const SlotDoubleHappy_1 = require("./SlotDoubleHappy");
const LineSlotFree_1 = require("./LineSlotFree");
const SlotDragon_1 = require("./SlotDragon");
const LineSlotAllTheSame_1 = require("./LineSlotAllTheSame");
const LineSlotMultiplier_1 = require("./LineSlotMultiplier");
const LineSlotPayline_1 = require("./LineSlotPayline");
const SlotGenerator_1 = require("../slots/SlotGenerator");
const LineSlotPaySymbol_1 = require("./LineSlotPaySymbol");
const PinballPay_1 = require("./PinballPay");
const RoulettePay_1 = require("./RoulettePay");
const LuckyGenerator_1 = require("../slots/LuckyGenerator");
const RandomIndex_1 = require("../../common/RandomIndex");
class LineSlotGame {
    static createGame(game, gameType, logger, testIsLucky) {
        let builder = undefined;
        if (gameType == Constants_1.GameType.SLOTS_MOUSE) {
            builder = new MouseGameBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_TIGER) {
            builder = new TigerGameBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_DRAGON) {
            builder = new DragonGameBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_OX) {
            builder = new OxGameBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_RABBIT) {
            builder = new RabbitBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_DOUBLE_HAPPY) {
            builder = new DoubleHappyBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_KYLIN) {
            builder = new KylinBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_UNICORN) {
            builder = new UnicornBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_LOONG) {
            builder = new LoongBuilder();
        }
        else if (gameType == Constants_1.GameType.SLOTS_PANDA) {
            builder = new PandaBuilder();
        }
        else {
            builder = new DefaultGameBuilder();
        }
        return new LineSlotGame(game, builder, gameType, logger || console, testIsLucky);
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
    //生成最后一轮的中奖信息
    payLastRound(bet, rounds, pays) {
        console.log("pay last round");
        let freeCount = 0;
        let payout = new Coin_1.Coin(0);
        let payResult = undefined;
        let playRounds = [];
        for (let i = 0; i < rounds.length - 1; i++) {
            let round = rounds[i];
            let r = {
                symbols: round.genResult.symbols,
                newSymbols: round.genResult.newSymbols,
                paylines: [],
            };
            if (round.verifyResult.paylines) {
                r.paylines = round.verifyResult.paylines.map((p) => {
                    return { id: p.payline.id, points: p.payline.points, payout: "0" };
                });
            }
            playRounds.push(r);
        }
        //只需要判断最后一轮是否中奖
        let round = rounds[rounds.length - 1];
        let verifyRes = round.verifyResult;
        let genResult = round.genResult;
        let pay = undefined;
        for (let i = 0; i < pays.length; i++) {
            let p = pays[i];
            pay = p.pay(bet, genResult, verifyRes, pay);
            console.log("gen result:", genResult, " verify result:", verifyRes, " pay result:", pay);
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
            paylines: pay.playPayline || [],
        };
        playRounds.push(r);
        if (!payResult) {
            throw new Error("pay result is undefined");
        }
        return { rounds: playRounds, freeCount, payout, payResult };
    }
    pay(bet, rounds, pays) {
        if (pays.length > 0) {
            return this.payLastRound(bet, rounds, pays);
        }
        else {
            throw new Error("pay error");
        }
    }
    spin(bet) {
        let r = this.slot.spin(bet, this.pay.bind(this));
        let payout = r.payout;
        let results = r.results;
        let res = results.map((res) => {
            let payResult = res.payResult;
            let playRounds = res.rounds;
            let triggerMultiplier = payResult.multiplier;
            let multipliers = payResult.multipliers;
            let allTheSame = payResult.allTheSame;
            let r = {
                winning: payResult.winning,
                symbols: playRounds[playRounds.length - 1].symbols,
                rounds: playRounds,
                payout: res.payout.toString(),
                paylines: payResult.playPayline || [],
                freeCount: res.freeCount,
                multiplier: triggerMultiplier,
                multipliers: multipliers,
                allTheSame: allTheSame,
                bigEvents: res.bigEvents,
                virtualBigEvents: res.virtualBigEvents,
                chosenSymbolId: res.chosenSymbolId, //幸运符号   
                match3Multipler3: payResult.match3Multipliers,
                leftFreeCount: res.leftFreeCount,
                pinball: payResult.pinball,
                roulette: payResult.roulette,
            };
            //类型检测，r必须包含所有属性
            r;
            r;
            r;
            r;
            r;
            r;
            r;
            return r;
        });
        return { results: res, payout: payout };
    }
}
exports.LineSlotGame = LineSlotGame;
class DefaultGameBuilder {
    create(game, isLucky, isFree, sureWin, context) {
        let generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
        let verify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
        let pays = [];
        //LineSlotPayline必须在首位        
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        return { generator, pays, verify };
    }
}
exports.DefaultGameBuilder = DefaultGameBuilder;
class MouseGameBuilder {
    create(game, isLucky, isFree) {
        let generator = new SlotMouse_1.MouseGenerator(game, isLucky, isFree);
        let verify = new SlotMouse_1.MouseVerify(game, isLucky);
        let pays = [];
        //LineSlotPayline必须在首位
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        pays.push(new LineSlotMultiplier_1.LineSlotMultiplier(game));
        pays.push(new LineSlotFree_1.LineSlotFree(game, isLucky));
        return { generator, pays, verify };
    }
}
exports.MouseGameBuilder = MouseGameBuilder;
class TigerGameBuilder {
    create(game, isLucky, isFree) {
        let generator = new SlotTiger_1.TigerGenerator(game, isLucky, isFree);
        let verify = new SlotTiger_1.TigerVerify(game, isLucky);
        let pays = [];
        //LineSlotPayline必须在首位
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        pays.push(new LineSlotMultiplier_1.LineSlotMultiplier(game));
        pays.push(new LineSlotAllTheSame_1.LineSlotAllTheSame(game));
        pays.push(new LineSlotFree_1.LineSlotFree(game, isLucky));
        return { generator, pays, verify };
    }
}
exports.TigerGameBuilder = TigerGameBuilder;
class DragonGameBuilder {
    create(game, isLucky, isFree) {
        let generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
        let verify = new SlotDragon_1.DragonVerify(game);
        let pays = [];
        //LineSlotPayline必须在首位
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        pays.push(new SlotDragon_1.LineSlotDragonMultiplier(game, isLucky, isFree));
        pays.push(new LineSlotFree_1.LineSlotFree(game, isLucky));
        return { generator, pays, verify };
    }
}
exports.DragonGameBuilder = DragonGameBuilder;
class OxGameBuilder {
    create(game, isLucky, isFree) {
        let generator = new SlotOx_1.OxGenerator(game, isLucky, isFree);
        let verify = new SlotOx_1.OxVerify(game, isLucky);
        let pays = [];
        //LineSlotPayline必须在首位
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        pays.push(new LineSlotAllTheSame_1.LineSlotAllTheSame(game));
        pays.push(new LineSlotFree_1.LineSlotFree(game, isLucky));
        return { generator, pays, verify };
    }
}
exports.OxGameBuilder = OxGameBuilder;
class RabbitBuilder {
    create(game, isLucky, isFree) {
        let generator = new SlotRabbit_1.RabbitGenerator(game, isLucky, isFree);
        let verify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
        let pays = [];
        //LineSlotPayline必须在首位
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        pays.push(new LineSlotPaySymbol_1.LineSlotPaySymbol(game));
        pays.push(new LineSlotFree_1.LineSlotFree(game, isLucky));
        return { generator, pays, verify };
    }
}
exports.RabbitBuilder = RabbitBuilder;
class DoubleHappyBuilder {
    create(game, isLucky, isFree) {
        let gen = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
        function randomIndex(game, count) {
            //2, 3, 4列
            let rand = new RandomIndex_1.RandomIndex(game.rows, 4, 1, 2);
            let indexArr = rand.generateMultiple(count); //3个幸运符号
            return indexArr;
        }
        let generator = new LuckyGenerator_1.LuckyGenerator(game, gen, isLucky, undefined, undefined, randomIndex);
        let verify = new SlotDoubleHappy_1.DoubleHappyVerify(game);
        let pays = [];
        //LineSlotPayline必须在首位
        pays.push(new SlotDoubleHappy_1.DoubleHappyPayline(game));
        pays.push(new SlotDoubleHappy_1.DoubleHappyLucky(game, isLucky, isFree));
        return { generator, pays, verify };
    }
    createDoublePay(game) {
        return new SlotDoubleHappy_1.DoubleHappyDoublePay(game);
    }
}
exports.DoubleHappyBuilder = DoubleHappyBuilder;
class KylinBuilder extends RabbitBuilder {
}
exports.KylinBuilder = KylinBuilder;
;
class UnicornBuilder extends TigerGameBuilder {
}
exports.UnicornBuilder = UnicornBuilder;
;
class LoongBuilder {
    create(game, isLucky, isFree) {
        let generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
        let verify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
        let pays = [];
        //LineSlotPayline必须在首位        
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        pays.push(new PinballPay_1.PinballPay(game));
        return { generator, pays, verify };
    }
}
exports.LoongBuilder = LoongBuilder;
class PandaBuilder {
    create(game, isLucky, isFree) {
        let generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
        let verify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
        let pays = [];
        //LineSlotPayline必须在首位        
        pays.push(new LineSlotPayline_1.LineSlotPayline(game));
        pays.push(new RoulettePay_1.RoulettePay(game));
        return { generator, pays, verify };
    }
}
exports.PandaBuilder = PandaBuilder;
