"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBAnnouncement_1 = require("../db/DBAnnouncement");
const assert_1 = require("assert");
describe("announcement", () => {
    it("test announcement", async () => {
        const db = new DBAnnouncement_1.DBAnnouncement();
        await db.insertAnnouncement("lobby", "欢迎玩家登录明星游戏(sql)2");
        await db.insertAnnouncement("lobby", "欢迎玩家登录明星游戏(sql)");
        await db.insertAnnouncement("billiards", "欢迎玩家登录明星游戏，联机台球已实现多端同步");
        await db.insertAnnouncement("gomoku", "欢迎玩家登录明星游戏，五子棋拥有联机对战和 AI 模式");
        await db.insertAnnouncement("tank", "欢迎进入坦克大战 IO 游戏，出海、多人联机、小游戏、H5平台等轻量休闲竞技的绝佳品类");
        const ann = await db.getAnnouncement("lobby");
        console.log("lobby announcement:", ann);
        (0, assert_1.strict)((ann === null || ann === void 0 ? void 0 : ann.content) == "欢迎玩家登录明星游戏(sql)");
    });
});
