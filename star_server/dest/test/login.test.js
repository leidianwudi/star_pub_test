"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../common/Constants");
const room_1 = require("./room");
const Delay_1 = require("../common/Delay");
describe("login", () => {
    it("kickout", async () => {
        let gameType = Constants_1.GameType.SLOTS_DRAGON;
        let { client: client0 } = await (0, room_1.createRoom)("test", "111111", gameType);
        for (let i = 0; i < 2; i++) {
            client0.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
        }
        let { client: client1 } = await (0, room_1.createRoom)("test", "111111", gameType);
        for (let i = 0; i < 4; i++) {
            let isconnected = client0.isConnected;
            if (isconnected) {
                client0.sendMsg("Ping", { timestamp: Date.now() });
            }
            console.log("is connected:", isconnected);
            client1.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
        }
    });
});
