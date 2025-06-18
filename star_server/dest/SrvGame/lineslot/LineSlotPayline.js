"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineSlotPaylineVerify = exports.LineSlotPayline = void 0;
const Coin_1 = require("../../db/entity/Coin");
const GameConfig_1 = require("../slots/GameConfig");
class LineSlotPayline {
    constructor(game) {
        this.game = game;
    }
    pay(bet, genResult, verifyRes, pay) {
        if (pay) {
            throw new Error("check payline need to run first");
        }
        if (!verifyRes.paylines) {
            console.warn("verify result paylines is null");
            return { winning: false, payout: new Coin_1.Coin(0), playPayline: [] };
        }
        if (!this.game.paylines) {
            throw new Error("game paylines is null");
        }
        let playPayline = [];
        let winning = false;
        let payout = new Coin_1.Coin(0);
        let paylineCount = this.game.paylines.length;
        if (verifyRes.paylines.length > 0 && paylineCount == 0) {
            throw new Error("payline count is zero");
        }
        for (let p of verifyRes.paylines) {
            //hitting the payline
            let hitSym = p.symbol;
            let payline = p.payline;
            winning = true;
            let odds = hitSym.odds || 0;
            let linePayout = bet.coin.div(paylineCount).multiply(odds);
            payout = payout.add(linePayout);
            playPayline.push({ id: payline.id, points: payline.points, payout: linePayout.toString() });
            console.log("slots win, papyline:", payline.id, " symbol:", hitSym.id);
        }
        return { winning, payout, playPayline };
    }
}
exports.LineSlotPayline = LineSlotPayline;
class LineSlotPaylineVerify {
    constructor(game) {
        this.game = game;
    }
    verify(bet, genResult) {
        const values = genResult.symbols;
        const game = this.game;
        if (!game.paylines) {
            throw new Error("game paylines is null");
        }
        let playPayline = [];
        let winning = false;
        for (let i = 0; i < game.paylines.length; i++) {
            let payline = game.paylines[i];
            let paylineSyms = [];
            //判断payline上的symbol是否相同
            for (let point of payline.points) {
                //point.row
                let playSym = values.find((v) => v.coordinate.row == point.row && v.coordinate.reel == point.reel);
                if (!playSym) {
                    throw new Error("payline error");
                }
                let slotSym = (0, GameConfig_1.findSlotSymbol)(game, playSym.id);
                if (!slotSym) {
                    console.warn("can't find slot symbol, id:", playSym.id, game.symbols);
                    throw new Error("can't find slot symbol");
                }
                paylineSyms.push(slotSym);
            }
            let hitSym = paylineSyms.reduce((pre, currentValue) => {
                if (pre === null) {
                    return null;
                }
                else if (pre === undefined) {
                    return currentValue;
                }
                else if (currentValue.id == pre.id) {
                    return currentValue;
                }
                else {
                    if (currentValue.isWild) {
                        return pre;
                    }
                    else if (pre.isWild) {
                        return currentValue;
                    }
                    else {
                        return null;
                    }
                }
            }, undefined);
            if (hitSym === undefined) {
                throw new Error("hit symbol undefined");
            }
            if (hitSym == null) {
                continue;
            }
            if (hitSym.odds === undefined || hitSym.odds == 0) {
                console.log("symbol odds is zero, ignore it");
                continue;
            }
            //hitting the payline
            winning = true;
            playPayline.push({ payline: payline, symbol: hitSym });
            console.log("slots win, papyline:", payline.id, " symbol:", hitSym.id);
        }
        return { isValid: true, isContinue: false, winning: winning, paylines: playPayline };
    }
}
exports.LineSlotPaylineVerify = LineSlotPaylineVerify;
