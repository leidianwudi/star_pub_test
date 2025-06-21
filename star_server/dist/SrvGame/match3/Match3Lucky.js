"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match3Lucky = void 0;
const GameConfig_1 = require("../slots/GameConfig");
class Match3Lucky {
    constructor(game, isLucky, isFree, ignoreRows, ignorePoints, baseFreeCount) {
        this.game = game;
        this.isFree = isFree;
        this.ignoreRows = ignoreRows;
        this.ignorePoints = ignorePoints;
        this.freeCount = 0;
        if (baseFreeCount != undefined) {
            this.baseFreeCount = baseFreeCount;
        }
        else {
            this.baseFreeCount = 12;
        }
    }
    //判断是否忽略此位置的符号
    checkIgnorePoints(c) {
        if (this.ignoreRows) {
            if (this.ignoreRows.includes(c.row)) {
                return true;
            }
        }
        if (this.ignorePoints) {
            let p = this.ignorePoints.find((p) => p.row == c.row && p.reel == c.reel);
            if (p != undefined) {
                return true;
            }
        }
        return false;
    }
    //支付免费次数
    pay(bet, genResult, verifyResult, pay, isLastRound) {
        if (!pay) {
            throw new Error("pay is null");
        }
        console.log("Match3Lucky pay");
        let luckyCount = 0;
        for (let sym of genResult.symbols) {
            if (this.checkIgnorePoints(sym.coordinate)) {
                continue;
            }
            let slotSym = (0, GameConfig_1.findSlotSymbol)(this.game, sym.id);
            if (!slotSym) {
                throw new Error("can't find slot symbol");
            }
            if (slotSym.isLucky) {
                luckyCount += 1;
            }
        }
        if (luckyCount >= 3) {
            let freeCount = (luckyCount - 3) * 2 + this.baseFreeCount;
            freeCount -= this.freeCount;
            if (pay.freeCount) {
                pay.freeCount += freeCount;
            }
            else {
                pay.freeCount = freeCount;
            }
            this.freeCount += freeCount;
        }
        console.log("lucky symbol count:", luckyCount, " pay free count:", pay.freeCount);
        return pay;
    }
}
exports.Match3Lucky = Match3Lucky;
