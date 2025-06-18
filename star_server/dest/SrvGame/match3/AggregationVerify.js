"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregationVerify = void 0;
const GameConfig_1 = require("../slots/GameConfig");
const Constants_1 = require("../../common/Constants");
//寻龙探宝
//聚集模式
class AggregationVerify {
    constructor(game, logger) {
        this.game = game;
        this.round = 0;
        this.logger = logger;
    }
    verify(bet, genResult) {
        var _a;
        let game = this.game;
        let slotSymbols = new Array(game.rows * game.reels);
        for (let s of genResult.symbols) {
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
            let slotSym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
            if (!slotSym) {
                throw new Error("can't find symbol");
            }
            slotSymbols[coIndex] = { symbol: slotSym, playSymbol: s };
        }
        let playPaySymbols = [];
        for (let row = 1; row <= game.rows; row++) {
            for (let reel = 1; reel <= game.reels; reel++) {
                let centerIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                let centerSym = slotSymbols[centerIndex];
                if (!centerSym) {
                    continue;
                }
                let matchSymbols = [];
                let visited = new Set();
                let stack = [];
                stack.push({ ...centerSym, coordinate: { row, reel } });
                matchSymbols.push(centerSym.playSymbol);
                visited.add((0, GameConfig_1.getCoordinateIndex)(game, { row, reel }));
                while (stack.length > 0) {
                    let point = stack.pop();
                    let { row, reel } = point.coordinate;
                    //以当前位置为中心，向四周寻找到所有与当前位置相同的符号（或者通配符）
                    //向上
                    for (let rowPlus = row + 1; rowPlus <= game.rows; rowPlus++) {
                        let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row: rowPlus, reel });
                        let sym = slotSymbols[coIndex];
                        if (!sym) {
                            break;
                        }
                        if (visited.has(coIndex)) {
                            break;
                        }
                        if (!this.isMatch(centerSym.symbol, sym.symbol)) {
                            break;
                        }
                        matchSymbols.push(sym.playSymbol);
                        stack.push({ coordinate: { row: rowPlus, reel } });
                        visited.add(coIndex);
                    }
                    //向下
                    for (let rowMinus = row - 1; rowMinus >= 1; rowMinus--) {
                        let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row: rowMinus, reel });
                        let sym = slotSymbols[coIndex];
                        if (!sym) {
                            break;
                        }
                        if (visited.has(coIndex)) {
                            break;
                        }
                        if (!this.isMatch(centerSym.symbol, sym.symbol)) {
                            break;
                        }
                        matchSymbols.push(sym.playSymbol);
                        stack.push({ coordinate: { row: rowMinus, reel } });
                        visited.add(coIndex);
                    }
                    //向右
                    for (let reelPlus = reel + 1; reelPlus <= game.reels; reelPlus++) {
                        let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel: reelPlus });
                        let sym = slotSymbols[coIndex];
                        if (!sym) {
                            break;
                        }
                        if (visited.has(coIndex)) {
                            break;
                        }
                        if (!this.isMatch(centerSym.symbol, sym.symbol)) {
                            break;
                        }
                        matchSymbols.push(sym.playSymbol);
                        stack.push({ coordinate: { row: row, reel: reelPlus } });
                        visited.add(coIndex);
                    }
                    //向左
                    for (let reelMinus = reel - 1; reelMinus >= 1; reelMinus--) {
                        let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel: reelMinus });
                        let sym = slotSymbols[coIndex];
                        if (!sym) {
                            break;
                        }
                        if (visited.has(coIndex)) {
                            break;
                        }
                        if (!this.isMatch(centerSym.symbol, sym.symbol)) {
                            break;
                        }
                        matchSymbols.push(sym.playSymbol);
                        stack.push({ coordinate: { row: row, reel: reelMinus } });
                        visited.add(coIndex);
                    }
                }
                let matchCount = matchSymbols.length;
                let odds = (_a = centerSym.symbol.oddsForCount) === null || _a === void 0 ? void 0 : _a.find((odds) => odds.count == matchCount);
                if (!odds) {
                    continue;
                }
                //中奖
                let points = matchSymbols.map((s) => s.coordinate);
                playPaySymbols.push({ id: centerSym.symbol.id, points: points, odds: odds.odds });
                this.logger.log("center symbol:", centerSym, { row, reel }, " pay symbol:", { id: centerSym.symbol.id, points: points, odds: odds.odds });
                for (let s of matchSymbols) {
                    let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
                    let slotSym = slotSymbols[coIndex];
                    if (slotSym.symbol.id == centerSym.symbol.id) {
                        //避免生成重复的结果
                        slotSymbols[coIndex] = undefined;
                    }
                }
            }
        }
        let winning = playPaySymbols.length > 0;
        if (winning) {
            if (this.round > Constants_1.SLOT_ROUND_LIMIT) {
                this.logger.warn("dragon hatch round overlimit");
                return { isContinue: false, isValid: true, paySymbols: playPaySymbols };
            }
            else {
                return { isContinue: true, isValid: true, paySymbols: playPaySymbols };
            }
        }
        else {
            return { isContinue: false, isValid: true, paySymbols: playPaySymbols };
        }
    }
    isMatch(centerSym, sym) {
        if (centerSym.id == sym.id) {
            return true;
        }
        else if (sym.isWild) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.AggregationVerify = AggregationVerify;
