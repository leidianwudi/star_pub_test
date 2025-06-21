"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoulettePay = void 0;
//轮盘游戏
class RoulettePay {
    constructor(game) {
        this.game = game;
    }
    pay(bet, genResult, verifyRes, pay) {
        let game = this.game;
        if (!pay) {
            throw new Error("pay is null");
        }
        if (!game.roulette || game.roulette.length == 0) {
            throw new Error("roulette config is null");
        }
        let roulette = game.roulette;
        let total = roulette.reduce((p, c) => c.chance + p, 0);
        let r = Math.floor(Math.random() * total);
        let index = -1;
        for (let j = 0; j < roulette.length; j++) {
            const s = roulette[j];
            if (r < s.chance) {
                index = j;
                break;
            }
            r -= s.chance;
        }
        if (index == -1) {
            throw new Error("random error");
        }
        let rl = roulette[index];
        pay.roulette = {
            id: rl.id,
            multiple: rl.odds
        };
        let payout = bet.coin.multiply(rl.odds);
        console.log("roulette payout:", payout);
        pay.payout = pay.payout.add(payout);
        return pay;
    }
}
exports.RoulettePay = RoulettePay;
