"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotGame = void 0;
const Coin_1 = require("../../db/entity/Coin");
class SlotGame {
    constructor(game, builder, gameType, logger, testIsLucky) {
        this.game = game;
        this.builder = builder;
        this.testIsLucky = testIsLucky;
        this.gameType = gameType;
        this.logger = logger;
        this.logger.log("LineSlotGame:", game);
        if (testIsLucky) {
            this.logger.warn("test slots lucky.");
        }
    }
    //单局结果生成,一局里还有多轮消除。payLastRound:  最后一轮的支付  payRound: 每一轮的支付。2者不能同时存在
    spinOneTime(bet, isFree, context, payLastRound, payRound) {
        var _a;
        const game = this.game;
        //幸运状态
        let isLucky = false;
        //免费的不触发lucky模式
        if (game.lucky && !isFree) {
            if (Math.random() < game.lucky.probability) {
                isLucky = true;
                this.logger.log("lucky status, game id:", game.id);
            }
        }
        if (this.testIsLucky) {
            this.logger.warn("slot run in lucky mode");
            isLucky = this.testIsLucky;
            this.testIsLucky = false; //test lucky only one time.
        }
        const { generator, pays, verify, roundPays } = this.builder.create(game, isLucky, isFree, bet.sureWin, context, this.logger);
        let rounds = [];
        let chosenSymbolId = undefined; //幸运符号
        let playRounds = [];
        let totalFreeCount = 0;
        let totalPayout = new Coin_1.Coin(0);
        let lastRound = undefined;
        let validRound = 0;
        let roundCount = 0;
        //生成一局里多轮结果
        while (true) {
            //一轮结果生成
            let genResult = generator.generateGameSymbols(lastRound === null || lastRound === void 0 ? void 0 : lastRound.verifyResult, lastRound === null || lastRound === void 0 ? void 0 : lastRound.payResult);
            let verifyRes = verify.verify(bet, genResult);
            if (verifyRes.isValid) {
                rounds.push({
                    genResult: genResult,
                    verifyResult: verifyRes,
                });
                chosenSymbolId = genResult.chosenSymbolId; //幸运符号
                lastRound = { genResult, verifyResult: verifyRes };
                if (payRound) {
                    let isLastRound = !verifyRes.isContinue;
                    let { round, freeCount, payout, payResult } = payRound(bet, genResult, verifyRes, roundPays || [], isLastRound);
                    totalFreeCount += freeCount;
                    totalPayout = totalPayout.add(payout);
                    lastRound.payResult = payResult;
                    playRounds.push(round);
                }
                validRound += 1;
            }
            else {
                lastRound = { genResult, verifyResult: verifyRes };
            }
            if (!verifyRes.isContinue) {
                break;
            }
            roundCount += 1;
            if (roundCount >= 200) {
                this.logger.warn("spin round count overflow:", roundCount);
                break;
            }
            if (validRound >= 50) {
                this.logger.warn("spin valid round count overflow:", roundCount);
                break;
            }
        }
        if (rounds.length == 0 || lastRound == undefined) {
            throw new Error("rounds is empty");
        }
        if (payLastRound) {
            let { rounds: payRounds, freeCount, payout, payResult } = payLastRound(bet, rounds, pays);
            playRounds = payRounds;
            lastRound.payResult = payResult;
            totalFreeCount = freeCount;
            totalPayout = payout;
        }
        if (playRounds.length == 0) {
            throw new Error("rounds is empty");
        }
        if ((_a = lastRound.payResult) === null || _a === void 0 ? void 0 : _a.isLucky) {
            isLucky = true;
        }
        let isVirtualLucky = false;
        if (!isFree && !lastRound.payResult.winning) {
            //只有第一局获得虚拟幸运事件
            //默认10%的概率获得虚拟幸运事件
            let probability = 0.8;
            if (game.virtualLucky) {
                probability = game.virtualLucky.probability;
            }
            if (Math.random() < probability) {
                isVirtualLucky = true;
            }
        }
        this.logger.log("rounds:", playRounds.length);
        return {
            payResult: lastRound.payResult,
            payout: totalPayout,
            freeCount: totalFreeCount,
            rounds: playRounds,
            bigEvents: isLucky,
            virtualBigEvents: isVirtualLucky,
            chosenSymbolId: chosenSymbolId, //幸运符号
        };
    }
    //slots一次下注的完整结果生成
    spin(bet, pay, payRound) {
        var _a;
        const DEFAULT_MAX_FREE_COUNT = 200; //最多200次免费次数
        //单次下注最多获得的免费次数
        let maxFreeCount = ((_a = this.game.free) === null || _a === void 0 ? void 0 : _a.maxCount) || DEFAULT_MAX_FREE_COUNT;
        //本次下注获得的免费次数
        let freeCount = 0;
        let leftFreeCount = 0;
        let spinCount = 1;
        let results = [];
        let isDouble = false;
        let ctx = {};
        {
            //单局生成结果
            let res = this.spinOneTime(bet, false, ctx, pay, payRound);
            let q = maxFreeCount - freeCount;
            let count = Math.min(res.freeCount, q);
            freeCount += count;
            leftFreeCount += count;
            isDouble = res.payResult.isDouble || false;
            results.push({ ...res, leftFreeCount: 0 });
            this.logger.log("add free count:", count, " game free count:", res.freeCount, " is double:", isDouble);
        }
        if (isDouble) {
            this.logger.log("spin double...");
            //双喜临门 幸运状态期间，将增加一个和原转盘相同的转盘，和原转盘一起旋转
            while (leftFreeCount > 0) {
                spinCount += 1;
                if (spinCount >= 30) {
                    this.logger.warn("spin count overflow:", spinCount);
                }
                let handleResult = (res) => {
                    results.push({ ...res, leftFreeCount: leftFreeCount });
                    let q = maxFreeCount - freeCount;
                    let count = Math.min(res.freeCount, q);
                    freeCount += count;
                    leftFreeCount += count;
                    this.logger.log("add free count:", count, " game free count:", res.freeCount);
                };
                {
                    let res1 = this.spinOneTime(bet, true, ctx, pay, payRound);
                    let res2 = this.spinOneTime(bet, true, ctx, pay, payRound);
                    if (this.builder.createDoublePay) {
                        let doublePay = this.builder.createDoublePay(this.game);
                        doublePay.pay(res1.payResult, res2.payResult);
                    }
                    handleResult(res1);
                    handleResult(res2);
                }
                leftFreeCount -= 1;
                this.logger.log(" left free count:", leftFreeCount);
            }
            let payout = new Coin_1.Coin(0);
            results.forEach((r) => {
                payout = payout.add(r.payout);
            });
            return { results: results, payout: payout };
        }
        else {
            while (leftFreeCount > 0) { //送的免费次数生成
                spinCount += 1;
                if (spinCount >= 30) {
                    this.logger.warn("spin count overflow:", spinCount);
                }
                let res = this.spinOneTime(bet, true, ctx, pay, payRound);
                results.push({ ...res, leftFreeCount: leftFreeCount });
                let q = maxFreeCount - freeCount;
                let count = Math.min(res.freeCount, q);
                freeCount += count;
                leftFreeCount += count;
                leftFreeCount -= 1;
                this.logger.log("add free count:", count, " game free count:", res.freeCount, " left free count:", leftFreeCount);
            }
            let payout = new Coin_1.Coin(0);
            results.forEach((r) => {
                payout = payout.add(r.payout);
            });
            return { results: results, payout: payout };
        }
    }
}
exports.SlotGame = SlotGame;
