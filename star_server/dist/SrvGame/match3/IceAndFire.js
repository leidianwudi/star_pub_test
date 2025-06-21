"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceAndFireVerify = exports.IceAndFirePay = exports.IceAndFireLucky = exports.IceAndFireDoublePay = void 0;
const GameConfig_1 = require("../slots/GameConfig");
const SlotMatch3_1 = require("./SlotMatch3");
const Coin_1 = require("../../db/entity/Coin");
class IceAndFireDoublePay {
    constructor(game) {
        this.game = game;
    }
    pay(pay1, pay2) {
        if (pay1.winning && pay2.winning) {
            //如果两个转盘都有至少一条中奖线获胜，该免费旋转的所赢奖金将乘以5。
            pay1.payout = pay1.payout.multiply(5);
            pay2.payout = pay2.payout.multiply(5);
            if (pay1.match3Multipliers) {
                pay1.match3Multipliers.push(5);
            }
            else {
                pay1.match3Multipliers = [5];
            }
            if (pay2.match3Multipliers) {
                pay2.match3Multipliers.push(5);
            }
            else {
                pay2.match3Multipliers = [5];
            }
            console.log("DoubleHappyDoublePay payout multiple 8");
        }
    }
}
exports.IceAndFireDoublePay = IceAndFireDoublePay;
class IceAndFireLucky {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isLucky = isLucky;
        this.isFree = isFree;
    }
    pay(bet, genResult, verifyResult, pay, isLastRound) {
        if (!pay) {
            throw new Error("pay is null");
        }
        //只在最后一轮判断幸运符号（夺宝符号）出现的个数
        if (!isLastRound) {
            return pay;
        }
        console.log("IceAndFireLucky pay last round");
        let luckyCount = 0;
        for (let sym of genResult.symbols) {
            let slotSym = (0, GameConfig_1.findSlotSymbol)(this.game, sym.id);
            if (!slotSym) {
                throw new Error("can't find slot symbol");
            }
            if (slotSym.isLucky) {
                luckyCount += 1;
            }
        }
        let freeMap = new Map();
        freeMap.set(3, 10);
        freeMap.set(4, 14);
        freeMap.set(5, 20);
        freeMap.set(6, 25);
        let freeCount = 0;
        if (!this.isFree) {
            if (luckyCount >= 3) {
                freeCount = 10 + (luckyCount - 3) * 5;
                pay.isLucky = true;
                pay.isDouble = true;
            }
            else if (this.isLucky) {
                freeCount = 8;
                pay.isLucky = true;
                pay.isDouble = true;
            }
        }
        else {
            freeCount = luckyCount;
        }
        if (freeCount > 0) {
            if (pay.freeCount) {
                pay.freeCount += freeCount;
            }
            else {
                pay.freeCount = freeCount;
            }
        }
        console.log("lucky symbol count:", luckyCount, " is lucky:", this.isLucky, " pay free count:", pay.freeCount);
        return pay;
    }
}
exports.IceAndFireLucky = IceAndFireLucky;
class IceAndFirePay {
    constructor(game) {
        this.game = game;
        this.match3Pay = new SlotMatch3_1.Match3Pay(game);
    }
    pay(bet, genResult, verifyResult, pay) {
        if (!genResult.slotSymbols) {
            throw new Error("slotsymbols is null");
        }
        let res = this.match3Pay.pay(bet, genResult, verifyResult, pay);
        if (!res.playPaySymbols || res.playPaySymbols.length == 0) {
            return res;
        }
        let includeWild = false;
        for (let paySym of res.playPaySymbols) {
            for (let p of paySym.points) {
                let coIndex = (0, GameConfig_1.getCoordinateIndex)(this.game, p);
                let slotSym = genResult.slotSymbols[coIndex];
                if (slotSym.isWild) {
                    //在任何旋转中，任何中奖包含了1个或更多的百搭符号时，所有赢奖都将乘以2
                    paySym.payout = new Coin_1.Coin(paySym.payout).multiply(2).toString();
                    includeWild = true;
                    break;
                }
            }
        }
        if (includeWild) {
            res.match3Multipliers = [2];
            console.log("IceAndFirePay wildcard exists");
        }
        return res;
    }
}
exports.IceAndFirePay = IceAndFirePay;
class IceAndFireVerify {
    constructor(game) {
        this.game = game;
        this.verifier = new SlotMatch3_1.Match3Verify(game);
    }
    verify(bet, genResult) {
        //每局只有一轮
        let res = this.verifier.verify(bet, genResult);
        if (!res.isValid) {
            throw new Error("IceAndFireVerify first round is not valid");
        }
        res.isContinue = false;
        return res;
    }
}
exports.IceAndFireVerify = IceAndFireVerify;
