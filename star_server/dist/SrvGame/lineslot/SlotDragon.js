"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonVerify = exports.LineSlotDragonMultiplier = void 0;
const LineSlotMultiplier_1 = require("./LineSlotMultiplier");
const LineSlotPayline_1 = require("./LineSlotPayline");
//slots 龙的乘数
class LineSlotDragonMultiplier {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isLucky = isLucky;
        this.isFree = isFree;
        this.multiplier = new LineSlotMultiplier_1.LineSlotMultiplier(game);
    }
    pay(bet, values, verifyRes, pay) {
        if (!pay) {
            throw new Error("pay is undefined");
        }
        if (!this.game.lucky || !this.game.lucky.dragon) {
            throw new Error("slot dragon no lucky config");
        }
        let payout = pay.payout;
        if (this.isLucky || this.isFree) {
            let luckyDragon = this.game.lucky.dragon;
            if (luckyDragon.multipliers.length == 0) {
                console.warn("slot dragon no lucky multiplier config");
                return pay;
            }
            //2个或者3个乘数
            let multiplierCounts = [2, 3];
            let index = Math.floor(Math.random() * multiplierCounts.length);
            let count = multiplierCounts[index];
            let ms = [];
            let multiple = 0;
            for (let i = 0; i < count; i++) {
                let multiplier = this.multiplier.selectMultiplier(luckyDragon.multipliers);
                ms.push({ id: multiplier.id, multiple: multiplier.multiple });
                multiple += multiplier.multiple;
                console.log("apply multiple to payout, multiplier:", multiplier, " payout:", payout);
            }
            pay.multipliers = ms; //幸运模式，没有中奖也要返回成数
            pay.payout = pay.payout.multiply(multiple);
            return pay;
        }
        else {
            if (!this.game.multipliers || this.game.multipliers.length == 0) {
                console.warn("slot dragon no multipliers config");
                return pay;
            }
            let multiplier = this.multiplier.selectMultiplier(this.game.multipliers);
            //1倍的乘数不返回给客户端
            if (multiplier.multiple != 1) {
                let ms = [];
                ms.push({ id: multiplier.id, multiple: multiplier.multiple });
                pay.multipliers = ms;
                pay.payout = payout.multiply(multiplier.multiple);
                console.log("apply multiple to payout, multiplier:", multiplier, " payout:", payout);
            }
            return pay;
        }
    }
}
exports.LineSlotDragonMultiplier = LineSlotDragonMultiplier;
class DragonVerify {
    constructor(game) {
        this.game = game;
        this.round = 0;
        this.paylineVerify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
    }
    verify(bet, values) {
        this.round += 1;
        let r = this.paylineVerify.verify(bet, values);
        if (bet.sureWin && this.game.winBet) {
            console.log("dragon win bet, round:", this.round);
            if (r.winning) {
                //必胜投注，只返回最后一次赢的结果
                return {
                    ...r, isContinue: false, isValid: true
                };
            }
            else {
                return { ...r, isContinue: true, isValid: false };
            }
        }
        return { ...r, isContinue: false, isValid: true };
    }
}
exports.DragonVerify = DragonVerify;
