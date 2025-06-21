"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GaneshaGoldPay = exports.GaneshaGoldVerify = exports.GaneshaGoldGenerator = void 0;
const node_assert_1 = __importDefault(require("node:assert"));
const RandomIndex_1 = require("../../common/RandomIndex");
const GameConfig_1 = require("../slots/GameConfig");
const SlotGenerator_1 = require("../slots/SlotGenerator");
const SlotMatch3_1 = require("./SlotMatch3");
class GaneshaGoldGenerator {
    constructor(game, isLucky, isFree, logger) {
        this.game = game;
        this.logger = logger;
        this.isLucky = isLucky;
        this.isFree = isFree;
        this.generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
    }
    generateGameSymbols(verifyRes) {
        let game = this.game;
        if (!this.isFree) {
            this.logger.log("ganeshagold generate...");
            let res = this.generator.generateGameSymbols();
            if (this.isLucky) {
                this.setLuckSymbols(res);
            }
            return res;
        }
        else {
            //幸运模式下不会出现幸运符号
            let gameSymbols = this.game.symbols.filter((s) => !s.isLucky);
            let symbols = this.generator.generateSymbols(gameSymbols);
            let slotSymbols = new Array(game.rows * game.reels);
            for (let s of symbols) {
                let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
                slotSymbols[coIndex] = (0, GameConfig_1.findSlotSymbol)(game, s.id);
            }
            return { symbols, slotSymbols };
        }
    }
    //设置结果为幸运模式, 3个格子强制改为幸运符号
    setLuckSymbols(genRes) {
        let reels = this.game.reels; //几列
        let row = this.game.rows; //几行
        let rand = new RandomIndex_1.RandomIndex(row, reels, 0, 1); //第一列不能是幸运符号
        let indexArr = rand.generateMultiple(3); //3个幸运符号
        let coor;
        for (let i = 0; i < indexArr.length; i++) {
            //得到坐标
            let index = (0, GameConfig_1.getCoordinateIndex)(this.game, { row: indexArr[i][0], reel: indexArr[i][1] });
            let luckSymbol = (0, GameConfig_1.findLuckSymbol)(this.game); //找到幸运符号
            //替换符号为幸运符号
            if (genRes.slotSymbols) {
                genRes.slotSymbols[index] = luckSymbol;
                for (let j = 0; j < genRes.symbols.length; j++) {
                    if (genRes.symbols[j].coordinate.row == indexArr[i][0]
                        && genRes.symbols[j].coordinate.reel == indexArr[i][1]) {
                        genRes.symbols[j].id = luckSymbol.id; //替换为幸运符号id
                    }
                }
            }
        }
    }
}
exports.GaneshaGoldGenerator = GaneshaGoldGenerator;
//象财神
class GaneshaGoldVerify {
    constructor(game, logger) {
        this.game = game;
        this.match3Verify = new SlotMatch3_1.Match3Verify(game);
        this.logger = logger;
    }
    verify(bet, values) {
        //只有一轮
        let res = this.match3Verify.verify(bet, values);
        (0, node_assert_1.default)(res.isValid);
        res.isContinue = false;
        return res;
    }
}
exports.GaneshaGoldVerify = GaneshaGoldVerify;
class GaneshaGoldPay {
    constructor(game, isFree, logger, ctx) {
        this.game = game;
        this.logger = logger;
        this.isFree = isFree;
        this.context = ctx;
        if (ctx.match3Multipliers) {
            //上一局的乘数
            if (ctx.match3Multipliers.length != 2) {
                throw new Error("multipliers length not equal 2");
            }
            this.multiplier = ctx.match3Multipliers[0];
            this.wildCount = ctx.match3Multipliers[1];
        }
        else if (this.isFree) {
            //幸运模式下会出现一个额外的乘数，初始为×2
            this.multiplier = 2;
            this.wildCount = 0;
        }
        else {
            this.multiplier = 1;
            this.wildCount = 0;
        }
    }
    pay(bet, genResult, verifyResult, pay, isLastRound) {
        if (!pay) {
            throw new Error("pay is null");
        }
        if (!genResult.slotSymbols) {
            throw new Error("slot symbols is null");
        }
        let game = this.game;
        if (this.isFree) {
            let wildCount = 0;
            //免费旋转期间出现的所有百搭符号都会被统计，每当统计到的百搭符号大于等于三个时，会使得乘数值+2，并使统计的百搭符号数量-3。乘数最大为×20
            for (let row = 1; row <= game.rows; row++) {
                for (let reel = 1; reel <= game.reels; reel++) {
                    let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                    let slotSymbol = genResult.slotSymbols[coIndex];
                    if (slotSymbol.isWild) {
                        wildCount += 1;
                    }
                }
            }
            this.wildCount += wildCount;
            while (this.wildCount >= 3) {
                this.multiplier += 2;
                this.wildCount -= 3;
            }
            //将当前乘数和百搭符号个数放到context中
            this.context.match3Multipliers = [this.multiplier, this.wildCount];
            pay.payout = pay.payout.multiply(this.multiplier);
            pay.match3Multipliers = [this.multiplier, this.wildCount];
        }
        return pay;
    }
}
exports.GaneshaGoldPay = GaneshaGoldPay;
