"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const ai_1 = require("../SrvGame/holdem/ai");
const aiRule_1 = require("../SrvGame/holdem/aiRule");
const rule_1 = require("../SrvGame/holdem/rule");
const cardLogic_1 = require("../SrvGame/holdem/cardLogic");
describe("holdem_ai", () => {
    it("run", async () => {
        let winRates = await (0, ai_1.parseWinRate)("holdem.csv");
        console.log("win rates:", winRates);
        {
            //同花 AK
            let hand = [cardLogic_1.card_id[11], cardLogic_1.card_id[12]];
            let key = (0, ai_1.getWinRateKey)(hand);
            let winRate = winRates.get(key);
            (0, assert_1.strict)(winRate.winRate3 == 0.51);
            console.log("hand:", hand, " key:", key, " win rate:", winRate);
        }
        {
            //非同花 KA
            let hand = [cardLogic_1.card_id[11], cardLogic_1.card_id[25]];
            let key = (0, ai_1.getWinRateKey)(hand);
            let winRate = winRates.get(key);
            (0, assert_1.strict)(winRate.winRate3 == 0.49);
            console.log("hand:", hand, " key:", key, " win rate:", winRate);
        }
        {
            let r = rule_1.rules[0];
            let suggest = (0, ai_1.getRuleAction)(r, 2, 100, 1, null);
            console.log("rule:", r, " suggest:", suggest);
        }
    });
    it("rule", async () => {
        {
            let r = (0, ai_1.getAiRule)({ rules: rule_1.rules }, aiRule_1.RuleRound.Preflop, 3, 1, 0.5);
            (0, assert_1.strict)(r);
            let suggest = (0, ai_1.getRuleAction)(r, 2, 100, 1, null);
            console.log("rule:", r, " suggest:", suggest);
        }
        {
            let r = (0, ai_1.getAiRule)({ rules: rule_1.rules }, aiRule_1.RuleRound.Flop, 3, 2, undefined, 5.5);
            (0, assert_1.strict)(r);
            let suggest = (0, ai_1.getRuleAction)(r, 2, 100, 1, null);
            console.log("rule:", r, " suggest:", suggest);
        }
        {
            let r = (0, ai_1.getAiRule)({ rules: rule_1.rules }, aiRule_1.RuleRound.Preflop, 6, 4, undefined);
            (0, assert_1.strict)(r);
            let suggest = (0, ai_1.getRuleAction)(r, 2, 100, 1, null);
            console.log("rule:", r, " suggest:", suggest);
        }
    });
});
