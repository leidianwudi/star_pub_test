"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanditoPay = exports.BanditoVerify = exports.BanditoGenerator = void 0;
const Match3Generator_1 = require("./Match3Generator");
const GameConfig_1 = require("../slots/GameConfig");
const SlotMatch3_1 = require("./SlotMatch3");
//亡灵大盗
class BanditoGenerator {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isFree = isFree;
        this.generator = new Match3Generator_1.Match3Generator(game, isLucky, isFree);
        this.lastSymbols = undefined;
        this.isLucky = isLucky;
    }
    generateGameSymbols(verifyRes) {
        var _a;
        let genRes = this.generator.generateGameSymbols(verifyRes);
        //加金框
        for (let s of genRes.symbols) {
            let reel = s.coordinate.reel;
            let arr = [2, 3, 4];
            if (arr.includes(reel)) {
                let slotSym = (0, GameConfig_1.findSlotSymbol)(this.game, s.id);
                if (slotSym === null || slotSym === void 0 ? void 0 : slotSym.isWild) {
                    //百搭符号不加金框
                    continue;
                }
                if (slotSym === null || slotSym === void 0 ? void 0 : slotSym.isLucky) {
                    //幸运符号不加金框
                    continue;
                }
                if (this.isFree && reel == 3) {
                    //幸运状态期间，第3列转盘上的所有符号(不包括百搭符号和夺宝符号)都将变为金框符号
                    s.isGoldFrame = true;
                }
                else if (!s.isGoldFrame) {
                    //只对新生成的符号添加金边
                    let isNew = ((_a = genRes.newSymbols) === null || _a === void 0 ? void 0 : _a.find((v) => v.coordinate.row == s.coordinate.row && v.coordinate.reel == s.coordinate.reel)) != undefined;
                    if (isNew) {
                        s.isGoldFrame = this.randomGoldFrame();
                    }
                }
            }
        }
        this.lastSymbols = genRes;
        return genRes;
    }
    randomGoldFrame() {
        //金框符号50%可能性
        return Math.random() < 0.5;
    }
}
exports.BanditoGenerator = BanditoGenerator;
class BanditoVerify {
    constructor(game) {
        this.game = game;
        //最上面一行不能中奖
        this.match3Verify = new SlotMatch3_1.Match3Verify(game, 5);
    }
    verify(bet, genResult) {
        return this.match3Verify.verify(bet, genResult);
    }
}
exports.BanditoVerify = BanditoVerify;
//亡灵大盗，支付
class BanditoPay {
    constructor(game, ctx) {
        this.game = game;
        this.context = ctx;
        if (ctx.match3Multipliers) {
            if (ctx.match3Multipliers.length != 1) {
                throw new Error("multipliers length not equal 3");
            }
            this.multiplier = ctx.match3Multipliers[0];
        }
        else {
            this.multiplier = 1;
        }
    }
    //亡灵大盗，支付乘数
    pay(bet, genResult, verifyResult, pay) {
        if (!pay) {
            throw new Error("pay should't be null");
        }
        this.context.match3Multipliers = [this.multiplier];
        pay.match3Multipliers = [this.multiplier];
        pay.payout = pay.payout.multiply(this.multiplier);
        if (pay.winning) {
            this.multiplier += 1;
        }
        return pay;
    }
}
exports.BanditoPay = BanditoPay;
