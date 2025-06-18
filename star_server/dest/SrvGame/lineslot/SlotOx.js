"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OxVerify = exports.OxGenerator = void 0;
const SlotGenerator_1 = require("../slots/SlotGenerator");
const LineSlotPayline_1 = require("./LineSlotPayline");
//在幸运状态触发后，第一及第三列转盘只会出现同一个符号，并且第二列转盘将不停重新旋转，直至出现赢奖。
class OxGenerator {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isLucky = isLucky;
        this.generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
    }
    generateGameSymbols() {
        let game = this.game;
        if (!game.lucky || !game.lucky.ox) {
            throw new Error("slot ox no lucky config");
        }
        let luckyOx = game.lucky.ox;
        if (this.isLucky) {
            let symbols = [];
            let { symbol: fixSym } = this.generator.generateSymbol(luckyOx.symbols);
            for (let row = 1; row <= game.rows; row++) {
                for (let reel = 1; reel <= game.reels; reel++) {
                    if (luckyOx.reels.includes(reel)) {
                        let s = { id: fixSym.id, coordinate: { row: row, reel: reel } };
                        symbols.push(s);
                    }
                    else {
                        let { symbol: s } = this.generator.generateSymbol(luckyOx.symbols);
                        symbols.push({ id: s.id, coordinate: { row: row, reel: reel } });
                    }
                }
            }
            return { symbols };
        }
        else {
            return this.generator.generateGameSymbols();
        }
    }
}
exports.OxGenerator = OxGenerator;
class OxVerify {
    constructor(game, isLucky) {
        this.game = game;
        this.round = 0;
        this.isLucky = isLucky;
        this.paylineVerify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
    }
    verify(bet, genResult) {
        this.round += 1;
        let r = this.paylineVerify.verify(bet, genResult);
        if (this.isLucky) {
            const MAX_ROUND_COUNT = 4;
            if (r.winning) {
                return { ...r, isValid: true, isContinue: false };
            }
            else {
                let isValid = this.round < MAX_ROUND_COUNT;
                return { ...r, isValid: isValid, isContinue: true };
            }
        }
        else {
            return { ...r, isValid: true, isContinue: false };
        }
    }
}
exports.OxVerify = OxVerify;
