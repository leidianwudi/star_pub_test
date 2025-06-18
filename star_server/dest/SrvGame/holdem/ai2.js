"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQ1 = createQ1;
exports.createQ2 = createQ2;
exports.createQ3 = createQ3;
exports.createQ = createQ;
exports.createP = createP;
exports.createPreS = createPreS;
exports.createR = createR;
exports.createAgg = createAgg;
exports.createE = createE;
exports.createI = createI;
exports.createProbability = createProbability;
exports.randomAction = randomAction;
const Random_1 = require("../../common/Random");
const Clamp_1 = require("../../common/Clamp");
//ai version2
/**
 * 即时赔率压力
 * @param p 玩家下注次数*底分
 * @param x 其它玩家本轮下注的金额
 * @returns
 */
function createQ1(p, x) {
    return x / (p + x);
}
/**
 * 加注赔率压力
 * @param raiseCount 本轮对手加注次数
 * @param maxRaiseCount 可允许的最大加注次数
 * @returns
 */
function createQ2(raiseCount, maxRaiseCount) {
    if (maxRaiseCount == 0) {
        return 0;
    }
    return raiseCount / maxRaiseCount;
}
/**
 * 参与人数压力
 * @param activePlayerCount 仍在牌局人数-1（总玩家人数-弃牌人数-1）
 * @param playerCount 玩家总数-1
 */
function createQ3(activePlayerCount, playerCount) {
    return activePlayerCount / playerCount;
}
/**
 * 对手压力
 */
function createQ(q1, q2, q3) {
    let t = 0.5 * q1 + 0.3 * q2 + 0.2 * q3;
    return (0, Clamp_1.clamp)(t, 0, 1);
}
/**
 *
 * @param p 当前玩家的位次（在未弃牌玩家中)
 * @param playerCount 未弃牌玩家数
 * @returns
 */
function createP(p, playerCount) {
    return p / playerCount;
}
/**
 * 预翻牌手牌评分公式
 * @param r1 牌底数(A=14, 2=2)
 * @param r2 牌底数
 * @param isSameSuit 两张牌是否同花
 */
function createPreS(r1, r2, isSameSuit) {
    if (r1 < r2) {
        //swap r1, r2
        let t = r1;
        r1 = r2;
        r2 = t;
    }
    let R1 = (r1 - 2) / 12;
    let R2 = (r2 - 2) / 12;
    let G = (r1 - r2) / 12;
    let S = isSameSuit ? 1 : 0;
    let S_pre = 0.5 * R1 + 0.2 * R2 + 0.2 * S - 0.1 * G;
    return (0, Clamp_1.clamp)(S_pre, 0, 1);
}
/**
 * 加注倍数
  */
function createR(s, i, p) {
    let r = 0.6 * s + 0.3 * i + 0.1 * p;
    let m = 1 + 4 * r;
    m = (0, Clamp_1.clamp)(m, 1, 5);
    return Math.floor(m);
}
function createAgg() {
    //[0.1, 0.9)
    return Math.random() * 0.8 + 0.1;
}
function createE() {
    //[-0.1, 0.1)
    return Math.random() * 0.2 - 0.1;
}
function createI() {
    let agg = createAgg();
    let e = createE();
    let i = agg + e;
    return (0, Clamp_1.clamp)(i, 0, 1);
}
function createProbability(q, s, i, p) {
    let w_fold = Math.max(0, 0.8 * q - 0.6 * s - 0.6 * i - 0.4 * p - 0.1);
    let w_call = Math.max(0, 1.2 * s + 0.7 * i + 1.2 * p - 0.8 * i + 0.3);
    let w_raise = Math.max(0, 2.5 * s + 1.0 * i + 0.5 * p - 0.7 * q - 0.6);
    let t = w_fold + w_call + w_raise;
    return {
        fold: w_fold / t,
        call: w_call / t,
        raise: w_raise / t,
    };
}
function randomAction(foldProbability, callProbability, raiseProbability) {
    let fold = false;
    let call = false;
    let raise = false;
    let index = Random_1.Random.randomIndex([foldProbability, callProbability, raiseProbability]);
    if (index == 0) {
        fold = true;
    }
    else if (index == 1) {
        call = true;
    }
    else if (index == 2) {
        raise = true;
    }
    return { fold, call, raise };
}
