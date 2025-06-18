"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotGenerator = void 0;
const GameConfig_1 = require("./GameConfig");
class SlotGenerator {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isLucky = isLucky;
        this.isFree = isFree;
        this.luckySymbol = (0, GameConfig_1.findLuckSymbol)(game);
    }
    generateGameSymbols() {
        let game = this.game;
        let slotSymbols = new Array(game.rows * game.reels);
        let playSymbols = new Array(game.rows * game.reels);
        return this.generateSlotSymbols(playSymbols, slotSymbols);
    }
    generatePartSymbols(playSymbols, slotSymbols, ignorePoints) {
        this.generateSlotSymbols(playSymbols, slotSymbols, ignorePoints);
    }
    generateSymbols(symbols) {
        let game = this.game;
        let values = new Array(game.rows * game.reels);
        for (let row = 1; row <= game.rows; row++) {
            for (let reel = 1; reel <= game.reels; reel++) {
                let sym = this.generateElementSymbol(row, reel, symbols);
                let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                values[coIndex] = { id: sym.id, coordinate: { row: row, reel: reel } };
            }
        }
        return values;
    }
    generateSymbol(symbols) {
        let total = symbols.reduce((p, c) => c.chance + p, 0);
        let r = Math.floor(Math.random() * total);
        let index = -1;
        for (let j = 0; j < symbols.length; j++) {
            const s = symbols[j];
            if (r < s.chance) {
                index = j;
                break;
            }
            r -= s.chance;
        }
        if (index == -1) {
            throw new Error("random error");
        }
        let sym = symbols[index];
        return { symbol: sym, index: index };
    }
    generateElementSymbol(row, reel, gameSymbols) {
        var _a;
        let game = this.game;
        let ele = (_a = game.elements) === null || _a === void 0 ? void 0 : _a.find((ele) => {
            return ele.coordinate.row == row && ele.coordinate.reel == reel;
        });
        let slotSymbols = [];
        if (!gameSymbols) {
            gameSymbols = game.symbols;
        }
        for (let s of gameSymbols) {
            if (this.isFree && s.freeChance != undefined) {
                //免费期间符号权重不同
                let c = { ...s };
                c.chance = s.freeChance;
                slotSymbols.push(c);
            }
            else {
                slotSymbols.push(s);
            }
        }
        let sym;
        if (ele && ele.placeholder) {
            sym = this.generatePlaceholderSymbol(ele);
        }
        else {
            sym = this.generateEleSymbol(slotSymbols, ele);
        }
        return sym;
    }
    generatePlaceholderSymbol(ele) {
        let game = this.game;
        if (typeof (ele.placeholder) == "string") {
            let sym = (0, GameConfig_1.findSlotSymbol)(game, ele.placeholder);
            if (!sym) {
                console.warn("invalid placeholder:", ele.placeholder);
                throw new Error("invalid placeholder");
            }
            return sym;
        }
        else {
            if (this.game.symbols.length == 0) {
                throw new Error("no symbols");
            }
            return this.game.symbols[0];
        }
    }
    generateEleSymbol(gameSymbols, ele) {
        let symbols = [];
        gameSymbols.forEach((sym) => {
            let eleSym = undefined;
            if (ele) {
                eleSym = ele.symbols.find((s) => s.id == sym.id);
                sym = Object.assign({}, sym, eleSym);
            }
            symbols.push(sym);
        });
        let { index } = this.generateSymbol(symbols);
        let sym = symbols[index];
        return sym;
    }
    /**
     * 生成slots的所有符号
     * @param points 忽略的坐标
     * @returns 整个游戏完整的符号
     */
    generateSlotSymbols(playSymbols, slotSymbols, ignorePoints) {
        let game = this.game;
        for (let row = 1; row <= game.rows; row++) {
            for (let reel = 1; reel <= game.reels; reel++) {
                if (ignorePoints) {
                    let s = ignorePoints.find((p) => p.row == row && p.reel == reel);
                    if (s) {
                        continue;
                    }
                }
                let sym = this.generateElementSymbol(row, reel);
                let playSym = { id: sym.id, coordinate: { row: row, reel: reel } };
                let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                slotSymbols[coIndex] = sym;
                playSymbols[coIndex] = playSym;
            }
        }
        return { symbols: playSymbols, slotSymbols: slotSymbols };
    }
}
exports.SlotGenerator = SlotGenerator;
