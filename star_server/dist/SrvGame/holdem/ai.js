"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseWinRate = parseWinRate;
exports.getWinRateKey = getWinRateKey;
exports.getCardScore = getCardScore;
exports.getAiRule = getAiRule;
exports.getRuleAction = getRuleAction;
const promises_1 = __importDefault(require("node:fs/promises"));
const csv_1 = require("csv");
const cardLogic_1 = require("./cardLogic");
const aiRule_1 = require("./aiRule");
//加载胜率表
async function parseWinRate(filename) {
    try {
        let content = await promises_1.default.readFile(filename, "utf-8");
        const parser = (0, csv_1.parse)(content, { bom: true, fromLine: 3 });
        let records = await parser.toArray();
        let winRates = new Map();
        for (let rec of records) {
            let winRate = {
                winRate3: parseInt(rec[1]) / 1000,
                winRate4: parseInt(rec[2]) / 1000,
                winRate5: parseInt(rec[3]) / 1000,
                winRate6: parseInt(rec[4]) / 1000
            };
            winRates.set(rec[0], winRate);
        }
        return winRates;
    }
    catch (e) {
        console.error("read win rate file:", filename, " err:", e);
        return new Map();
    }
}
function getCardStr(c) {
    return cardLogic_1.cardStr[c.score] == "10" ? "T" : cardLogic_1.cardStr[c.score];
}
function getWinRateKey(hand) {
    let res = "";
    let isPair = cardLogic_1.Logic.isOnePair(hand);
    if (isPair) {
        for (let c of hand) {
            res += getCardStr(c);
        }
    }
    else {
        //同花牌， 大的牌放在前面
        let card1;
        let card2;
        let isFlush = hand[0].color == hand[1].color;
        if (hand[0].score < hand[1].score) {
            if (isFlush) {
                card1 = hand[1];
                card2 = hand[0];
            }
            else {
                card1 = hand[0];
                card2 = hand[1];
            }
        }
        else {
            if (isFlush) {
                card1 = hand[0];
                card2 = hand[1];
            }
            else {
                card1 = hand[1];
                card2 = hand[0];
            }
        }
        res += getCardStr(card1);
        res += getCardStr(card2);
    }
    return res;
}
function getCardScore(hand) {
    let cardType = cardLogic_1.Logic.getCardType(hand);
    let score = cardType;
    let totalScore = hand.reduce((prev, cur) => prev += cur.score, 0);
    score += totalScore / 100;
    score = (score - 1) / 10; //(0, 1)
    return score;
}
function getAiRule(holdemAi, round, playerCount, playerPosition, winRate, score) {
    let rules = [];
    for (let r of holdemAi.rules) {
        if (r.round != round) {
            continue;
        }
        if (r.playerCount != undefined && r.playerCount != playerCount) {
            continue;
        }
        if (r.playerPosition != undefined && r.playerPosition != playerPosition) {
            continue;
        }
        if (r.lowWinRate != undefined) {
            if (winRate == undefined || winRate <= r.lowWinRate) {
                continue;
            }
        }
        if (r.highWinRate != undefined) {
            if (winRate == undefined || winRate >= r.highWinRate) {
                continue;
            }
        }
        if (r.lowScore != undefined) {
            if (score == undefined || score <= r.lowScore) {
                continue;
            }
        }
        if (r.highScore != undefined) {
            if (score == undefined || score >= r.highScore) {
                continue;
            }
        }
        rules.push(r);
    }
    console.log("get ai rules:", rules);
    if (rules.length == 0) {
        return undefined;
    }
    let t = rules.reduce((prev, cur) => prev + cur.probability, 0);
    let p = Math.random() * t;
    let b = 0;
    for (let r of rules) {
        let e = b + r.probability;
        if (p < e && p >= b) {
            return r;
        }
        b = e;
    }
}
/**
 *
 * @param aiRule
 * @param baseScore 房间底分
 * @param roundMaxBet 本轮玩家最大下注金额
 * @param roundBet 当前玩家本轮下注金额
 */
function getRuleAction(aiRule, baseScore, roundMaxBet, roundBet, lastLog) {
    if (aiRule.action == aiRule_1.RuleAction.AllIn) {
        return {
            action: 4 /* e_player_action.allin */,
            bet: 0
        };
    }
    else if (aiRule.action == aiRule_1.RuleAction.Bet) {
        let param = parseFloat(aiRule.parameters);
        return {
            action: 1 /* e_player_action.bet */,
            bet: param * baseScore
        };
    }
    else if (aiRule.action == aiRule_1.RuleAction.Call) {
        return {
            action: 2 /* e_player_action.call */,
            bet: roundMaxBet - roundBet,
        };
    }
    else if (aiRule.action == aiRule_1.RuleAction.Check) {
        return {
            action: 5 /* e_player_action.check */,
            bet: 0
        };
    }
    else if (aiRule.action == aiRule_1.RuleAction.Fold) {
        return {
            action: 6 /* e_player_action.fold */,
            bet: 0,
        };
    }
    else if (aiRule.action == aiRule_1.RuleAction.Raise) {
        let param = parseFloat(aiRule.parameters);
        return {
            action: 3 /* e_player_action.raise */,
            bet: roundMaxBet + param * baseScore - roundBet
        };
    }
    else if (aiRule.action == aiRule_1.RuleAction.CallOrCheck) {
        if (!lastLog || lastLog.action == 5 /* e_player_action.check */) {
            return {
                action: 5 /* e_player_action.check */,
                bet: 0,
            };
        }
        else {
            return {
                action: 2 /* e_player_action.call */,
                bet: roundMaxBet - roundBet,
            };
        }
    }
    else if (aiRule.action == aiRule_1.RuleAction.BetOrRaise) {
        let [p1, p2] = aiRule.parameters.split(",");
        if (!lastLog || lastLog.action == 5 /* e_player_action.check */) {
            let param = parseFloat(p1);
            return {
                action: 1 /* e_player_action.bet */,
                bet: baseScore * param
            };
        }
        else {
            let param = parseFloat(p2);
            return {
                action: 1 /* e_player_action.bet */,
                bet: roundMaxBet + param * baseScore - roundBet
            };
        }
    }
    else {
        throw new Error("invalid ai rule");
    }
}
