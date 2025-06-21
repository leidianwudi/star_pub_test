"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const Constants_1 = require("../common/Constants");
const room_1 = require("./room");
const Delay_1 = require("../common/Delay");
describe("fish", () => {
    let nextBulletId = 1;
    let fishes = [];
    let begin = Date.now();
    function listenMsg(client) {
        client.listenMsg("fish/NewFish", (msg) => {
            console.log("new fish:", msg);
            fishes.push(msg);
            console.log("fish count:", fishes.length, " used time:", Date.now() - begin);
        });
        client.listenMsg("fish/FishDead", (msg) => {
            console.log("fish dead:", msg);
            let index = fishes.findIndex((f) => f.id == msg.id);
            if (index != -1) {
                console.log("remove fish, fish id:", msg.id, "index:", index);
                fishes.splice(index, 1);
            }
        });
        client.listenMsg("fish/RoomFish", (msg) => {
            console.log("room fishes:", msg);
            fishes = msg.fishes;
        });
        client.listenMsg("fish/FishWave", (msg) => {
            console.log("fish wave comming, clear all fishes");
            fishes = [];
        });
        client.listenMsg("fish/NewFishGroup", (msg) => {
            console.log("new fish group:", msg);
            fishes.push(...msg.fishes);
        });
        client.listenMsg("fish/FireResult", (msg) => {
            console.log("bullet fire result:", msg);
        });
        client.listenMsg("Pong", (msg) => {
            console.log("pong:", msg);
        });
    }
    function unlistenMsg(client) {
        client.unlistenMsgAll("fish/NewFish");
        client.unlistenMsgAll("fish/FishDead");
        client.unlistenMsgAll("fish/RoomFish");
        client.unlistenMsgAll("fish/FireResult");
        client.unlistenMsgAll("Pong");
    }
    async function testClient(client, loopCount) {
        for (let i = 0; i < loopCount; i++) {
            client.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
            const BulletLevel = 7;
            nextBulletId++;
            let bulletId = "" + nextBulletId;
            console.log("fire bullet,  id:", bulletId, " level:", BulletLevel);
            await client.sendMsg("fish/Fire", { bulletId: bulletId, bulletLevel: BulletLevel });
            //1/10的概率触发hit
            if (fishes.length > 0 && Math.random() * 100 < 60) {
                let index = Math.floor(Math.random() * fishes.length);
                let fishId = fishes[index].id;
                await client.sendMsg("fish/HitFish", { fishId: fishId, bulletLevel: 1, bulletId: bulletId });
            }
        }
    }
    it("run master", async () => {
        begin = Date.now();
        let client = await (0, room_1.createRoomClient)(Constants_1.GameType.FISH_MASTER, listenMsg);
        console.log("join game");
        await client.callApi("room/JoinGame", {});
        await client.callApi("room/Ready", {});
        let cfg = await client.callApi("fish/FishConfig", {});
        console.log("fish game config:", cfg);
        await testClient(client, 300);
        unlistenMsg(client);
        await client.callApi("room/ExitRoom", {});
    });
    it("run shark", async () => {
        let client = await (0, room_1.createRoomClient)(Constants_1.GameType.FISH_SHARK, listenMsg);
        console.log("join game");
        await client.callApi("room/JoinGame", {});
        await client.callApi("room/Ready", {});
        await testClient(client, 300);
        const TEST_RECONNECT = true;
        if (TEST_RECONNECT) {
            unlistenMsg(client);
            fishes = [];
            console.log("disconnect client");
            await client.disconnect();
            client = await (0, room_1.reconnectRoom)(listenMsg);
            await testClient(client, 100);
        }
        unlistenMsg(client);
        await client.callApi("room/ExitRoom", {});
    });
    it("run whale", async () => {
        begin = Date.now();
        let client = await (0, room_1.createRoomClient)(Constants_1.GameType.FISH_WHALE, listenMsg);
        console.log("join game");
        await client.callApi("room/JoinGame", {});
        await client.callApi("room/Ready", {});
        await testClient(client, 300);
        unlistenMsg(client);
        await client.callApi("room/ExitRoom", {});
    });
    it("force close", async () => {
        let client = await (0, room_1.createRoomClient)(Constants_1.GameType.FISH_WHALE, listenMsg);
        console.log("join game");
        await client.callApi("room/JoinGame", {});
        await client.callApi("room/Ready", {});
        //客户端超过一定时间没有发射子弹， 服务器会关闭房间， 并断开客户端连接
        client.flows.postDisconnectFlow.push((v) => {
            console.log("client disconnected:", v);
            (0, assert_1.strict)(v.reason == "room_closed");
            return v;
        });
        while (true) {
            if (!client.isConnected) {
                console.log("client is not connected");
                break;
            }
            client.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
        }
        console.log("room idle time:", (Date.now() - begin) / 1000);
        try {
            //can't reconnect this room
            await (0, room_1.reconnectRoom)(listenMsg);
            (0, assert_1.strict)(false);
        }
        catch (e) {
            console.log("reconnect room err:", e);
        }
    });
    beforeEach(() => {
        nextBulletId = 1;
        fishes = [];
        begin = Date.now();
    });
});
