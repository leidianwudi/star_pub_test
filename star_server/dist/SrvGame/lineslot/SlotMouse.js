"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseVerify = exports.MouseGenerator = void 0;
const SlotGenerator_1 = require("../slots/SlotGenerator");
const GameConfig_1 = require("../slots/GameConfig");
const GameConfig_2 = require("../slots/GameConfig");
const LineSlotPayline_1 = require("./LineSlotPayline");
const Constants_1 = require("../../common/Constants");
//幸运线， 幸运线上的符号固定为万能符，并且服务器自动旋转直到中奖为止
class MouseGenerator {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isLucky = isLucky;
        this.generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
    }
    generateGameSymbols() {
        const game = this.game;
        const wildSym = (0, GameConfig_1.findWildSymbol)(game);
        if (!wildSym) {
            throw new Error("slot mouse no wild symbol");
        }
        if (!game.lucky || !game.lucky.mouse) {
            throw new Error("slot mouse no lucky config");
        }
        if (this.isLucky) {
            const luckySymbols = game.lucky.mouse.luckyLine.points.map((p) => {
                return { id: wildSym.id, coordinate: { row: p.row, reel: p.reel }, index: wildSym.index };
            });
            let ignorePoints = luckySymbols.map((s) => s.coordinate);
            let slotSymbols = new Array(game.rows * game.reels);
            let playSymbols = new Array(game.rows * game.reels);
            this.generator.generatePartSymbols(playSymbols, slotSymbols, ignorePoints);
            luckySymbols.forEach((s) => {
                let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
                slotSymbols[coIndex] = wildSym;
                playSymbols[coIndex] = s;
            });
            return {
                symbols: playSymbols,
                slotSymbols: slotSymbols,
            };
        }
        else {
            return this.generator.generateGameSymbols();
        }
    }
}
exports.MouseGenerator = MouseGenerator;
class MouseVerify {
    constructor(game, isLucky) {
        this.game = game;
        this.round = 0;
        this.isLucky = isLucky;
        this.paylineVerify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
    }
    checkLuckyLine(values) {
        var _a, _b, _c, _d, _e;
        let game = this.game;
        let isLucky = false;
        let wildCount = 0;
        let count = 0;
        let luckySymbols = [];
        if (!((_b = (_a = game.lucky) === null || _a === void 0 ? void 0 : _a.mouse) === null || _b === void 0 ? void 0 : _b.luckyLine) || ((_d = (_c = game.lucky) === null || _c === void 0 ? void 0 : _c.mouse) === null || _d === void 0 ? void 0 : _d.luckyLine.points.length) == 0) {
            return { isLucky, luckySymbols };
        }
        for (let i = 0; i < game.lucky.mouse.luckyLine.points.length; i++) {
            let point = (_e = game.lucky) === null || _e === void 0 ? void 0 : _e.mouse.luckyLine.points[i];
            let playSym = values.find((v) => v.coordinate.row == point.row && v.coordinate.reel == point.reel);
            if (!playSym) {
                throw new Error("payline error");
            }
            let slotSym = (0, GameConfig_2.findSlotSymbol)(game, playSym.id);
            if (!slotSym) {
                throw new Error("can't find slot symbol");
            }
            if (slotSym.isWild) {
                wildCount++;
                luckySymbols.push(playSym);
            }
            count++;
        }
        if (wildCount > 0 && wildCount == count) {
            isLucky = true;
        }
        return { isLucky, luckySymbols };
    }
    verify(bet, gen) {
        var _a, _b;
        let values = gen.symbols;
        const game = this.game;
        let verifyRes = this.paylineVerify.verify(bet, gen);
        const winning = verifyRes.winning;
        this.round += 1;
        if (!winning && ((_b = (_a = game.lucky) === null || _a === void 0 ? void 0 : _a.mouse) === null || _b === void 0 ? void 0 : _b.luckyLine) && this.isLucky) {
            let r = this.checkLuckyLine(values);
            if (r.isLucky) {
                let isContinue = true;
                if (this.round > Constants_1.SLOT_ROUND_LIMIT) {
                    isContinue = false;
                    console.warn("mouse round overlimit");
                }
                return { ...verifyRes, isValid: true, isContinue: isContinue };
            }
        }
        return { ...verifyRes, isValid: true, isContinue: false };
    }
}
exports.MouseVerify = MouseVerify;
