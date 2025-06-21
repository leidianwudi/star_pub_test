"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match3Verify = exports.Match3Pay = void 0;
const Coin_1 = require("../../db/entity/Coin");
const GameConfig_1 = require("../slots/GameConfig");
const Constants_1 = require("../../common/Constants");
class Match3Pay {
    constructor(game) {
        this.game = game;
    }
    //slots消消乐模式基础支付，主要支付金币
    pay(bet, genResult, verifyResult, pay) {
        if (pay) {
            throw new Error("pay should be null");
        }
        if (!verifyResult.paySymbols) {
            throw new Error("paySymbols of verify result is null");
        }
        let payout = new Coin_1.Coin(0);
        let paySymbols = [];
        for (let paySym of verifyResult.paySymbols) {
            let reelMap = new Map();
            for (let p of paySym.points) {
                if (reelMap.has(p.reel)) {
                    reelMap.set(p.reel, reelMap.get(p.reel) + 1);
                }
                else {
                    reelMap.set(p.reel, 1);
                }
            }
            //假设连续3列出现中奖符号的个数分别为1， 2， 2
            //中奖计算公式: bet*1*2*2*(symbol.odds)
            let m = 1;
            for (let v of reelMap.values()) {
                m *= v;
            }
            let symbolPay = bet.coin.multiply(paySym.odds).multiply(m);
            payout = payout.add(symbolPay);
            paySymbols.push({ id: paySym.id, points: paySym.points, payout: symbolPay.toString() });
        }
        return { winning: payout.isGreaterThan(0), payout: payout, playPayline: [], playPaySymbols: paySymbols };
    }
}
exports.Match3Pay = Match3Pay;
class Match3Verify {
    constructor(game, ignoreRow = undefined, ignoreRows, ignorePoints) {
        this.game = game;
        this.round = 0;
        this.ignoreRow = ignoreRow;
        this.ignorePoints = ignorePoints;
        this.ignoreRows = ignoreRows;
    }
    //判断是否忽略此位置的符号
    checkIgnorePoints(c) {
        if (c.row === this.ignoreRow) {
            return true;
        }
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
    verify(bet, genResult) {
        let game = this.game;
        this.round += 1;
        let payout = new Coin_1.Coin(0);
        let paySymbols = [];
        //每个symbol在每一列出现的次数
        let symbolMap = new Map();
        genResult.symbols.forEach((s) => {
            if (this.checkIgnorePoints(s.coordinate)) {
                return;
            }
            if (s.coordinate.reel == 1) {
                let sym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
                if (sym && sym.isWild) {
                    //第一列一定不会出现通配符
                    console.warn("gen symbols:", genResult.symbols);
                    throw new Error("there is wild symbol in reel 1");
                }
            }
            if (symbolMap.has(s.id)) {
                let m = symbolMap.get(s.id);
                if (m.lines.has(s.coordinate.reel)) {
                    let l = m.lines.get(s.coordinate.reel);
                    m.lines.set(s.coordinate.reel, l + 1);
                }
                else {
                    m.lines.set(s.coordinate.reel, 1);
                }
            }
            else {
                let lines = new Map();
                lines.set(s.coordinate.reel, 1);
                symbolMap.set(s.id, { lines: lines });
            }
        });
        let wildSym = game.symbols.find((s) => s.isWild);
        let wildSymLines = { lines: new Map() };
        if (wildSym && symbolMap.has(wildSym.id)) {
            wildSymLines = symbolMap.get(wildSym.id);
        }
        for (let s of game.symbols) {
            //符号没有中奖赔率
            if (!s.oddsForReel || s.oddsForReel.length == 0) {
                continue;
            }
            let m = symbolMap.get(s.id);
            if (!m) {
                continue;
            }
            //从第一列连续出现的列数
            let lines = 0;
            //每一列出现次数的乘积
            let count = 1;
            for (let reel = 1; reel <= this.game.reels; reel++) {
                let reelCount = 0;
                if (m.lines.has(reel)) {
                    reelCount += m.lines.get(reel);
                }
                if (wildSymLines.lines.has(reel)) {
                    reelCount += wildSymLines.lines.get(reel);
                }
                if (reelCount > 0) {
                    count *= reelCount;
                    lines += 1;
                }
                else {
                    break;
                }
            }
            let payback = [...s.oddsForReel];
            //以lines从大到小排列
            payback.sort((a, b) => b.reelCount - a.reelCount);
            for (let p of payback) {
                if (lines >= p.reelCount) {
                    //中奖
                    payout = payout.add(bet.coin.multiply(p.odds).multiply(count));
                    paySymbols.push({ payback: p, id: s.id, lines: lines });
                    break;
                }
            }
        }
        let playPaySymbols = [];
        for (let i = 0; i < paySymbols.length; i++) {
            let paySym = paySymbols[i];
            let s = paySym.id;
            let points = [];
            for (let sym of genResult.symbols) {
                if (this.checkIgnorePoints(sym.coordinate)) {
                    continue;
                }
                if (sym.id == paySym.id && sym.coordinate.reel <= paySym.lines) {
                    points.push(sym.coordinate);
                }
                else if (sym.id == (wildSym === null || wildSym === void 0 ? void 0 : wildSym.id) && sym.coordinate.reel <= paySym.lines) {
                    points.push(sym.coordinate);
                }
            }
            playPaySymbols.push({ id: s, points: points, odds: paySym.payback.odds });
        }
        let winning = paySymbols.length > 0;
        if (winning) {
            if (this.round > Constants_1.SLOT_ROUND_LIMIT) {
                console.warn("match3 round overlimit");
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
}
exports.Match3Verify = Match3Verify;
