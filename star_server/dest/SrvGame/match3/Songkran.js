"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongkranMultipler = void 0;
//泼水节
class SongkranMultipler {
    constructor(game, ctx) {
        this.game = game;
        this.context = ctx;
        //0 代表不激活的状态
        if (ctx.match3Multipliers) {
            if (ctx.match3Multipliers.length != 3) {
                throw new Error("multipliers length not equal 3");
            }
            this.multipliers = [...ctx.match3Multipliers];
        }
        else {
            this.multipliers = [0, 0, 0];
        }
    }
    pay(bet, genResult, verifyResult, pay) {
        if (!pay) {
            throw new Error("pay is null");
        }
        if (!verifyResult.paySymbols) {
            throw new Error("paySymbols of verify result is null");
        }
        //记录每一列中奖的符号数量
        let m = new Map();
        for (let paySym of verifyResult.paySymbols) {
            for (let p of paySym.points) {
                if (m.has(p.reel)) {
                    m.set(p.reel, m.get(p.reel) + 1);
                }
                else {
                    m.set(p.reel, 1);
                }
            }
        }
        //第二列倍数
        let index = 0;
        for (let reel of [2, 3, 4]) {
            if (m.has(reel)) {
                this.multipliers[index] = this.multipliers[index] + m.get(reel);
                index += 1;
            }
        }
        let c = this.multipliers.reduce((prev, cur) => { return prev + cur; }, 0);
        pay.payout = pay.payout.multiply(c);
        pay.match3Multipliers = [...this.multipliers];
        this.context.match3Multipliers = [...this.multipliers];
        return pay;
    }
}
exports.SongkranMultipler = SongkranMultipler;
