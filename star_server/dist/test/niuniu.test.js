"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../common/Constants");
const room_1 = require("./room");
const Delay_1 = require("../common/Delay");
const RoomNiuNiu_1 = require("../SrvGame/niuniu/RoomNiuNiu");
describe("niuniu", () => {
    let isGameEnd = false;
    let currentUserId = "";
    let chairId = -1;
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
        client.listenMsg("niuniu/GameStart", async (msg) => {
            console.log("game start:", msg);
            let p = msg.players.find((p) => {
                return p.uid == currentUserId;
            });
            chairId = p.seat;
        });
        client.listenMsg("niuniu/RoomNiuNiu", async (msg) => {
            console.log("msg room niuniu:", msg);
        });
        client.listenMsg("niuniu/GameOver", async (msg) => {
            console.log("msg gameover:", msg);
            isGameEnd = true;
        });
        client.listenMsg("niuniu/Resume", async (msg) => {
            console.log("msg resume:", msg);
        });
        client.listenMsg("niuniu/PlayerTanPai", async (msg) => {
            console.log("msg player tanpai:", msg);
        });
        client.listenMsg("niuniu/RandomZhuang", async (msg) => {
            console.log("msg random zhuang:", msg);
        });
        client.listenMsg("niuniu/UserXiaZhu", async (msg) => {
            console.log("user xiazhu:", msg);
        });
        client.listenMsg("niuniu/XiaZhu", async (msg) => {
            console.log("xiazhu:", msg);
        });
        client.listenMsg("niuniu/TanPai", async (msg) => {
            console.log("tanpai:", msg);
        });
        client.listenMsg("niuniu/PlayerQiangZhuang", async (msg) => {
            console.log("player qiangzhuang:", msg);
        });
        client.listenMsg("niuniu/Go", async (msg) => {
            console.log("game ready go:", msg);
        });
        client.listenMsg("niuniu/Reset", async (msg) => {
            console.log("reset game");
        });
    }
    function unlistenMsg(client) {
        client.unlistenMsgAll("room/RoomDataSyncPush");
        client.unlistenMsgAll("room/UserDataChangedPush");
        client.unlistenMsgAll("room/UserLeavesFromRoomPush");
        client.unlistenMsgAll("niuniu/GameStart");
        client.unlistenMsgAll("niuniu/RoomNiuNiu");
        client.unlistenMsgAll("niuniu/GameOver");
        client.unlistenMsgAll("niuniu/Resume");
        client.unlistenMsgAll("niuniu/UserXiaZhu");
        client.unlistenMsgAll("niuniu/XiaZhu");
        client.unlistenMsgAll("niuniu/TanPai");
        client.unlistenMsgAll("niuniu/PlayerTanPai");
        client.unlistenMsgAll("niuniu/RandomZhuang");
        client.unlistenMsgAll("niuniu/PlayerQiangZhuang");
        client.unlistenMsgAll("niuniu/Go");
        client.unlistenMsgAll("niuniu/Reset");
    }
    it("play", async () => {
        let { client, uid } = await (0, room_1.createRoom)("test", "111111", Constants_1.GameType.NIUNIU, listenMsg, "1");
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
    });
    it("ai", async () => {
        let room = new RoomNiuNiu_1.RoomNiuNiu("1", Constants_1.GameType.NIUNIU, "", "", "");
        for (let i = 0; i < 100000; i++) {
            //保证后续计算不能出现NAN
            let agg = Math.random(); //[0.15, 0.85]
            agg *= 0.7;
            agg += 0.15;
            let e = (Math.random() * 0.3) - 0.15; //[-0.15, 0.15]
            let player = { I: agg + e };
            if (player.I < 0.01) {
                player.I = 0.01;
            }
            if (player.I > 0.99) {
                player.I = 0.99;
            }
            let actionChance = [
                1 - player.I, //不抢
                0.3 * (1 - player.I), //1倍
                0.2 * player.I, //2倍
                0.3 * player.I, //3倍
                0.5 * Math.pow(player.I, 1.2), //4倍
                0.7 * Math.pow(player.I, 1.5), //5倍
            ];
            let actions = [0, 1, 2, 3, 4, 5];
            let actionIndex = room.randomAction(actionChance);
            console.log("action index:", actionIndex, " action:", actions[actionIndex]);
        }
    });
    beforeEach(() => {
        isGameEnd = false;
        currentUserId = "";
    });
});
