"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const Constants_1 = require("../common/Constants");
const room_1 = require("./room");
const Delay_1 = require("../common/Delay");
describe("holdem", () => {
    let isGameEnd = false;
    let currentUserId = "";
    function listenMsg(client) {
        client.listenMsg("room/RoomDataSyncPush", async (msg) => {
            console.log("room data:", msg);
        });
        client.listenMsg("room/UserDataChangedPush", async (msg) => {
            console.log("user data:", msg);
        });
        client.listenMsg("room/UserLeavesFromRoomPush", async (msg) => {
            console.log("user leave:", msg);
        });
        client.listenMsg("holdem/GameStart", async (msg) => {
            console.log("game start:", msg);
        });
        client.listenMsg("holdem/RoomHoldem", async (msg) => {
            console.log("msg room holdem:", msg);
        });
        client.listenMsg("holdem/Deal", async (msg) => {
            console.log("msg deal:", msg);
        });
        client.listenMsg("holdem/Action", async (msg) => {
            console.log("msg action:", msg);
        });
        client.listenMsg("holdem/GameOver", async (msg) => {
            console.log("msg gameover:", msg);
        });
        client.listenMsg("holdem/Resume", async (msg) => {
            console.log("msg resume:", msg);
        });
    }
    function unlistenMsg(client) {
        client.unlistenMsgAll("room/RoomDataSyncPush");
        client.unlistenMsgAll("room/UserDataChangedPush");
        client.unlistenMsgAll("holdem/GameStart");
        client.unlistenMsgAll("holdem/RoomHoldem");
        client.unlistenMsgAll("holdem/Deal");
        client.unlistenMsgAll("holdem/Action");
        client.unlistenMsgAll("holdem/GameOver");
        client.unlistenMsgAll("holdem/Resume");
    }
    it("play", async () => {
        let { client, uid } = await (0, room_1.createRoom)("test", "111111", Constants_1.GameType.HOLDEM, listenMsg, "1");
        currentUserId = uid;
        await client.callApi("room/JoinGame", {});
        client.sendMsg("room/ClientReady", {});
        await client.callApi("room/Ready", {});
        for (let i = 0; i < 1000; i++) {
            client.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
            if (isGameEnd) {
                break;
            }
        }
        await client.callApi("room/ExitRoom", {});
        unlistenMsg(client);
    }).timeout(20 * 60 * 1000);
    it("reconnect", async () => {
        let { client, uid } = await (0, room_1.createRoom)("test", "111111", Constants_1.GameType.HOLDEM, listenMsg);
        currentUserId = uid;
        await client.callApi("room/JoinGame", {});
        client.sendMsg("room/ClientReady", {});
        await client.callApi("room/Ready", {});
        for (let i = 0; i < 20; i++) {
            client.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
            if (isGameEnd) {
                break;
            }
        }
        unlistenMsg(client);
        console.log("disconnect client.........................");
        await client.disconnect();
        client = await (0, room_1.reconnectRoom)(listenMsg);
        client.sendMsg("room/ClientReady", {});
        for (let i = 0; i < 1000; i++) {
            client.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
            if (isGameEnd) {
                break;
            }
        }
        await client.callApi("room/ExitRoom", {});
        unlistenMsg(client);
    });
    it("match", async () => {
        try {
            let client0 = await (0, room_1.createLobbyClient)("test", "111111");
            let matchRes0 = await client0.callApi("lobby/StartMatch", { type: "xxxxxxxxx" });
            console.log("match res:", matchRes0);
            (0, assert_1.strict)(!matchRes0.isSucc);
            await (0, Delay_1.delay)(1000);
        }
        catch (e) {
            console.log("match non exist game type err:", e);
        }
        let gameType = Constants_1.GameType.HOLDEM;
        let client0 = await (0, room_1.createLobbyClient)("test", "111111");
        let matchRes0 = await client0.callApi("lobby/StartMatch", { type: gameType });
        console.log("match res:", matchRes0);
        (0, assert_1.strict)(matchRes0.isSucc);
        await (0, Delay_1.delay)(1000);
    });
    it("match leave", async () => {
        let gameType = Constants_1.GameType.HOLDEM;
        let client0 = await (0, room_1.matchRoom)("test", "111111", gameType, listenMsg);
        let client1 = await (0, room_1.matchRoom)("test1", "111111", gameType, listenMsg);
        let client2 = await (0, room_1.matchRoom)("test2", "111111", gameType, listenMsg);
        await client0.callApi("room/JoinGame", {});
        await client1.callApi("room/JoinGame", {});
        await client2.callApi("room/JoinGame", {});
        await client1.callApi("room/Ready", {});
        for (let i = 0; i < 4; i++) {
            client0.sendMsg("Ping", { timestamp: Date.now() });
            client1.sendMsg("Ping", { timestamp: Date.now() });
            client2.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
        }
        await client0.callApi("room/ExitRoom", {});
        await client0.disconnect();
        await client1.callApi("room/Ready", {});
        await client2.callApi("room/Ready", {});
        for (let i = 0; i < 1000; i++) {
            client1.sendMsg("Ping", { timestamp: Date.now() });
            client2.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
            if (isGameEnd) {
                break;
            }
        }
        await client1.callApi("room/ExitRoom", {});
        await client2.callApi("room/ExitRoom", {});
        unlistenMsg(client1);
        unlistenMsg(client2);
    });
    it("kickout", async () => {
        let gameType = Constants_1.GameType.HOLDEM;
        let client0 = await (0, room_1.matchRoom)("test", "111111", gameType, listenMsg);
        let client1 = await (0, room_1.matchRoom)("test1", "111111", gameType, listenMsg);
        await client0.callApi("room/JoinGame", {});
        await client1.callApi("room/JoinGame", {});
        client0.sendMsg("room/ClientReady", {});
        client1.sendMsg("room/ClientReady", {});
        await client0.disconnect();
        for (let i = 0; i < 40; i++) {
            client1.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
        }
    });
    it("can not match", async () => {
        let gameType = Constants_1.GameType.HOLDEM;
        let { client, uid } = await (0, room_1.createRoom)("test", "111111", gameType, listenMsg);
        currentUserId = uid;
        await client.callApi("room/JoinGame", {});
        client.sendMsg("room/ClientReady", {});
        await client.callApi("room/Ready", {});
        for (let i = 0; i < 20; i++) {
            client.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
        }
        // leave room when playing
        await client.callApi("room/ExitRoom", {});
        unlistenMsg(client);
        client = await (0, room_1.createLobbyClient)("test", "111111", listenMsg);
        let matchRes = await client.callApi("lobby/StartMatch", { type: gameType });
        console.log("match res:", matchRes);
        (0, assert_1.strict)(!matchRes.isSucc);
    });
    beforeEach(() => {
        isGameEnd = false;
        currentUserId = "";
    });
});
