"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineSlotAllTheSame = void 0;
const GameConfig_1 = require("../slots/GameConfig");
//幸运公牛，幸运老虎
class LineSlotAllTheSame {
    constructor(game) {
        this.game = game;
    }
    pay(bet, genResult, verifyRes, pay) {
        if (!pay) {
            throw new Error("pay all the same can't run first.");
        }
        if (!this.game.allTheSame) {
            throw new Error("no allTheSame config");
        }
        let allTheSame = true;
        let sym = undefined;
        for (let i = 0; i < genResult.symbols.length; i++) {
            let s = genResult.symbols[i];
            let sm = (0, GameConfig_1.findSlotSymbol)(this.game, s.id);
            if (!sm) {
                throw new Error("invalid symbol id");
            }
            if (sm.isWild) {
                continue;
            }
            if (!sym) {
                sym = s;
            }
            else if (sym.id != s.id) {
                allTheSame = false;
            }
        }
        if (allTheSame) {
            console.log("slot all the same.");
            pay.payout = pay.payout.multiply(this.game.allTheSame.multiple);
            pay.allTheSame = { id: sym.id, isTheSame: true }; //返回青一色具体id
        }
        return pay;
    }
}
exports.LineSlotAllTheSame = LineSlotAllTheSame;
