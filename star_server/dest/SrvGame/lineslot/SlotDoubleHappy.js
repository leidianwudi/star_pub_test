"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleHappyVerify = exports.DoubleHappyPayline = exports.DoubleHappyLucky = exports.DoubleHappyDoublePay = void 0;
const Coin_1 = require("../../db/entity/Coin");
const GameConfig_1 = require("../slots/GameConfig");
class DoubleHappyDoublePay {
    constructor(game) {
        this.game = game;
    }
    pay(pay1, pay2) {
        if (pay1.winning && pay2.winning) {
            //如果两个转盘都有至少一条中奖线获胜，该免费旋转的所赢奖金将乘以8。
            pay1.payout = pay1.payout.multiply(8);
            pay2.payout = pay2.payout.multiply(8);
            console.log("DoubleHappyDoublePay payout multiple 8");
        }
    }
}
exports.DoubleHappyDoublePay = DoubleHappyDoublePay;
class DoubleHappyLucky {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isFree = isFree;
        this.isLucky = isLucky;
    }
    pay(bet, genResult, verifyRes, pay) {
        let game = this.game;
        if (!pay) {
            throw new Error("pay is null");
        }
        let slotSymbols = genResult.slotSymbols;
        if (!slotSymbols) {
            throw new Error("slot symbols is null");
        }
        if (!this.isFree) {
            //首次旋转
            //夺宝符号的个数
            let count = 0;
            let reels = [2, 3, 4];
            for (let row = 1; row <= game.rows; row++) {
                for (let reel = 1; reel <= game.reels; reel++) {
                    let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                    if (slotSymbols[coIndex].isLucky && reels.includes(reel)) {
                        count++;
                    }
                }
            }
            if (count >= 3) {
                //当卷轴2、3和4的任意位置上出现3个夺宝符号时，将触发幸运状态并获得8次免费旋转
                if (pay.freeCount) {
                    pay.freeCount += 8;
                }
                else {
                    pay.freeCount = 8;
                }
                pay.isLucky = true;
                pay.isDouble = true;
            }
        }
        else {
            //免费旋转
            //触发幸运状态后的免费旋转期间，所有转盘上出现的每一个夺宝符号，都将使免费旋转次数+1
            //夺宝符号的个数
            let count = 0;
            for (let row = 1; row <= game.rows; row++) {
                for (let reel = 1; reel <= game.reels; reel++) {
                    let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                    if (slotSymbols[coIndex].isLucky) {
                        count++;
                    }
                }
            }
            if (count > 0) {
                if (pay.freeCount) {
                    pay.freeCount += count;
                }
                else {
                    pay.freeCount = count;
                }
            }
        }
        return pay;
    }
}
exports.DoubleHappyLucky = DoubleHappyLucky;
/**
 * 转盘共有五列三行，合计为5*3=15个转格。游戏规定了三十条固定中奖线。
    游戏内有百搭符号和双重符号和夺宝符号等特殊符号，百搭符号可以替代所有符号，而双重符号会被计为两个相邻的相同符号。
    百搭符号可替代除夺宝符号和双百搭符号外的所有非双重符号。双百搭符号可替代除夺宝符号和百搭符号外的所有符号，且视为两个位于相邻的列的相同符号。当百搭符号同时位于多个不同类符号的中奖组合中，百搭符号仅参与其中价值最高的中奖组合。
    夺宝符号只会出现在第2，第3和第4轴上。当转盘2、3和4的任意位置上出现3个夺宝符号时，将触发免费旋转模式并获得8次免费旋转。
    每条中奖线上，如果从最左边的列开始，有相同的符号位于三个或以上相邻的列，则该中奖线获胜，并根据线上的符号情况支付奖金。
    需注意的是，每次旋转后，此游戏的每条固定中奖线都会进行一次获奖检查。如下图，虽然奖符只占两个格子，但因为处于三条固定中奖线上，所以有三条中奖线有获奖。
 */
class DoubleHappyPayline {
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
            if (!hitSym.oddsForCount) {
                console.warn("oddsforcount is null");
                continue;
            }
            if (!p.activePoints) {
                console.warn("activePoints is null");
                continue;
            }
            if (!p.count) {
                console.warn("count is null");
                continue;
            }
            let odds = hitSym.oddsForCount.find((o) => o.count == p.count);
            if (!odds) {
                console.warn("odds is null");
                continue;
            }
            let linePayout = bet.coin.div(paylineCount).multiply(odds.odds);
            payout = payout.add(linePayout);
            playPayline.push({ id: payline.id, points: payline.points, activePoints: p.activePoints, payout: linePayout.toString() });
            console.log("slots win, papyline:", payline.id, " symbol:", hitSym.id);
        }
        return { winning, payout, playPayline };
    }
}
exports.DoubleHappyPayline = DoubleHappyPayline;
class DoubleHappyVerify {
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
            //连续出现相同符号的个数
            let count = 0;
            let hitSym = undefined;
            let activePoints = [];
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
                let paySym = slotSym;
                if (hitSym == undefined) {
                    //第一个符号
                    hitSym = paySym;
                    if (paySym.isDouble) {
                        count += 2;
                    }
                    else {
                        count++;
                    }
                    activePoints.push(point);
                }
                else {
                    let hitSymId = hitSym.aliasId || hitSym.id;
                    let paySymId = paySym.aliasId || paySym.id;
                    let isSame = false;
                    if (hitSymId == paySymId) {
                        isSame = true;
                    }
                    else if (paySym.isWild) {
                        isSame = true;
                    }
                    else if (hitSym.isWild) {
                        isSame = true;
                        hitSym = paySym;
                    }
                    else {
                        //出现2个不相同的符号，并且2个符号都不是通配符
                        isSame = false;
                        break;
                    }
                    if (isSame) {
                        if (paySym.isDouble) {
                            count += 2;
                        }
                        else {
                            count++;
                        }
                        activePoints.push(point);
                    }
                    else {
                        break;
                    }
                }
            }
            if (hitSym == undefined) {
                throw new Error("hit symbol undefined");
            }
            if (!hitSym.oddsForCount) {
                console.log("symbol oddsForCount is empty, ignore it, hitSym:", hitSym.id);
                continue;
            }
            let odds = hitSym.oddsForCount.find((o) => o.count == count);
            if (!odds) {
                console.log("no odds for count:", count, " hitSym:", hitSym.id);
                continue;
            }
            if (count < DoubleHappyVerify.MIN_COUNT) {
                console.warn("The number of consecutive symbols:", count, " symbol:", hitSym.id);
            }
            //hitting the payline
            winning = true;
            playPayline.push({ payline: payline, symbol: hitSym, count: count, activePoints });
            console.log("slots win, papyline:", payline.id, " symbol:", hitSym.id);
        }
        return { isValid: true, isContinue: false, winning: winning, paylines: playPayline };
    }
}
exports.DoubleHappyVerify = DoubleHappyVerify;
//payline上连续出现的符号最小个数
DoubleHappyVerify.MIN_COUNT = 3;
