"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match3Generator = void 0;
const SlotGenerator_1 = require("../slots/SlotGenerator");
const GameConfig_1 = require("../slots/GameConfig");
//消消乐
class Match3Generator {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
    }
    /**
     *
     * @param lastSymbols 上一轮生成的结果
     * @param points 要生成新符号的位置
     * @returns
     */
    generate(lastSymbols, points) {
        let game = this.game;
        //中奖元素集合
        let paySymbols = new Set();
        points.forEach((p) => {
            paySymbols.add((0, GameConfig_1.getCoordinateIndex)(game, p));
        });
        let deleteSymbols = [];
        let wildSym = game.symbols.find((s) => s.isWild);
        let arr = new Array(game.reels * game.rows);
        for (let i = 0; i < lastSymbols.symbols.length; i++) {
            let sym = lastSymbols.symbols[i];
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, sym.coordinate);
            if (!paySymbols.has(coIndex)) {
                //将未中奖的元素放入下一轮
                arr[coIndex] = Object.assign({}, sym);
            }
            else if (sym.isGoldFrame && wildSym) {
                //金框符号变成百搭符号
                arr[coIndex] = { ...sym, id: wildSym.id, isGoldFrame: false };
            }
            else {
                deleteSymbols.push({ id: sym.id, coordinate: sym.coordinate });
            }
        }
        let newSymbols = [];
        //遍历整个网格每个元素
        for (let reel = 1; reel <= game.reels; reel++) {
            //从底部向上遍历
            for (let row = 1; row <= game.rows; row++) {
                let index = (0, GameConfig_1.getCoordinateIndex)(game, { row: row, reel: reel });
                if (arr[index]) {
                    //此位置已经有元素
                    continue;
                }
                //将此列上方(row更小)的元素放到当前位置
                for (let i = row + 1; i <= game.rows; i++) {
                    let upIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row: i, reel: reel });
                    if (arr[upIndex]) {
                        let ele = arr[upIndex];
                        ele.coordinate = { row: row, reel: reel };
                        //元素被移动到新坐标
                        arr[index] = ele;
                        arr[upIndex] = undefined;
                        break;
                    }
                }
                //生成新的元素
                if (!arr[index]) {
                    let s = this.generator.generateElementSymbol(row, reel);
                    let slotSym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
                    if (!slotSym) {
                        throw new Error("invalid symbol id");
                    }
                    console.log("new symbol:", slotSym, "coordinate:", { row: row, reel: reel });
                    let ss = { id: s.id, coordinate: { row: row, reel: reel }, index: slotSym.index };
                    newSymbols.push(ss);
                    arr[index] = ss;
                }
            }
        }
        let symbols = arr;
        let slotSymbols = new Array(game.rows * game.reels);
        symbols.forEach((sym) => {
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, sym.coordinate);
            slotSymbols[coIndex] = (0, GameConfig_1.findSlotSymbol)(game, sym.id);
        });
        return { symbols: symbols, slotSymbols: slotSymbols, newSymbols: newSymbols, deleteSymbols: deleteSymbols };
    }
    generateGameSymbols(verifyRes) {
        if (this.lastSymbols) {
            if (!verifyRes) {
                throw new Error("no last round verify result");
            }
            if (!verifyRes.paySymbols || verifyRes.paySymbols.length == 0) {
                console.warn("play pay symbol is empty.");
            }
            let verifyPaySymbols = verifyRes.paySymbols || [];
            //中奖元素集合
            let points = [];
            verifyPaySymbols.forEach((sys) => {
                sys.points.forEach((p) => {
                    points.push(p);
                });
            });
            let res = this.generate(this.lastSymbols, points);
            this.lastSymbols = res;
            return res;
        }
        else {
            let symbols = this.generator.generateGameSymbols();
            this.lastSymbols = symbols;
            return symbols;
        }
    }
}
exports.Match3Generator = Match3Generator;
