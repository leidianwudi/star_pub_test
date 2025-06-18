"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleSystem_1 = require("../rule/RuleSystem");
const assert_1 = require("assert");
const DataSource_1 = require("../db/DataSource");
describe("rule", () => {
    const manager = DataSource_1.AppDataSource.manager;
    it("get table field", async () => {
        let coin = await RuleSystem_1.ruleSystem.getTableFieldValue("userT", "coin", "22", manager);
        console.log("get coin:", coin);
    });
    it("set table field", async () => {
        await RuleSystem_1.ruleSystem.setTableField("userT", "max_bet_one_time", "22", 120, manager);
        let coin = await RuleSystem_1.ruleSystem.getTableFieldValue("userT", "coin", "22", manager);
        (0, assert_1.strict)(coin == 120);
    });
    it("run rule", async () => {
        await RuleSystem_1.ruleSystem.setTableField("userT", "total_bet", "22", 10000001, manager);
        let r = await RuleSystem_1.ruleSystem.runRule(RuleSystem_1.RuleId.MAX_BET_ONE_TIME, { srcId: "22", dstId: "22" });
        console.log("run rule:", r);
        let maxBet = await RuleSystem_1.ruleSystem.getTableFieldValue("userT", "max_bet_one_time", "22", manager);
        (0, assert_1.strict)(maxBet == 450000);
    });
    it("multiplier", async () => {
        {
            await RuleSystem_1.ruleSystem.setTableField("user_day_statisticT", "total_bet", "1", 10001, manager);
            let r = await RuleSystem_1.ruleSystem.runRule(RuleSystem_1.RuleId.MULTIPLIER, { srcId: "1", dstId: "22" });
            (0, assert_1.strict)(r);
            let multiplier = await RuleSystem_1.ruleSystem.getTableFieldValue("userT", "multiplier", "22", manager);
            (0, assert_1.strict)(multiplier == 2);
        }
        {
            await RuleSystem_1.ruleSystem.setTableField("user_day_statisticT", "total_bet", "1", 30001, manager);
            let r = await RuleSystem_1.ruleSystem.runRule(RuleSystem_1.RuleId.MULTIPLIER, { srcId: "1", dstId: "22" });
            (0, assert_1.strict)(r);
            let multiplier = await RuleSystem_1.ruleSystem.getTableFieldValue("userT", "multiplier", "22", manager);
            (0, assert_1.strict)(multiplier == 4);
        }
    });
});
