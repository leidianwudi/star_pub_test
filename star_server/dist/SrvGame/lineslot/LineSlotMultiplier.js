"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineSlotMultiplier = void 0;
class LineSlotMultiplier {
    constructor(game) {
        this.game = game;
    }
    pay(bet, values, verifyRes, pay) {
        if (!pay) {
            throw new Error("pay is undefined");
        }
        let game = this.game;
        let payout = pay.payout;
        let triggerMultiplier = undefined;
        if (payout.isGreaterThan(0) && game.multipliers && game.multipliers.length > 0) {
            let multiplier = this.selectMultiplier(game.multipliers);
            console.log("apply multiple to payout, multiplier:", multiplier, " payout:", payout);
            payout = payout.multiply(multiplier.multiple);
            triggerMultiplier = { id: multiplier.id, multiple: multiplier.multiple };
            pay.payout = payout;
            pay.multiplier = triggerMultiplier;
        }
        return pay;
    }
    selectMultiplier(multipliers) {
        let total = multipliers.reduce((p, c) => p + c.chance, 0);
        let r = Math.floor(Math.random() * total);
        let index = -1;
        for (let j = 0; j < multipliers.length; j++) {
            const m = multipliers[j];
            if (r < m.chance) {
                index = j;
                break;
            }
            r -= m.chance;
        }
        if (index == -1) {
            throw new Error("game multipliers config error");
        }
        let multiplier = multipliers[index];
        return multiplier;
    }
}
exports.LineSlotMultiplier = LineSlotMultiplier;
