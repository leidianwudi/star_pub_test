"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineSlotPaySymbol = void 0;
//幸运兔
//倍率奖励符号
class LineSlotPaySymbol {
    constructor(game) {
        this.game = game;
    }
    pay(bet, genResult, verifyRes, pay) {
        if (!pay) {
            throw new Error("pay is null");
        }
        let game = this.game;
        let gamePay = game.pay;
        if (!gamePay) {
            console.warn("slot game no paysymbol config, game id:", this.game.id);
            return pay;
        }
        let count = 0;
        let paySymbols = [];
        genResult.symbols.forEach((s) => {
            let sym = gamePay.symbols.find((sym) => sym.id == s.id);
            if (sym && sym.odds > 0) { //赔率大于0才添加
                count++;
                paySymbols.push({ id: s.id, coordinate: s.coordinate, odds: sym.odds });
            }
        });
        if (count >= gamePay.minSymbolCount) {
            paySymbols.forEach((s) => {
                pay.payout = pay.payout.add(bet.coin.multiply(s.odds));
            });
            pay.winning = true;
            pay.paySymbols = paySymbols.map((s) => {
                return { id: s.id, coordinate: s.coordinate, payout: bet.coin.multiply(s.odds).toString() };
            });
        }
        return pay;
    }
}
exports.LineSlotPaySymbol = LineSlotPaySymbol;
