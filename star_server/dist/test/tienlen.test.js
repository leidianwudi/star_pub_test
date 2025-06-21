"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoomTienLen_1 = require("../SrvGame/tienlen/RoomTienLen");
const assert_1 = require("assert");
const Constants_1 = require("../common/Constants");
const room_1 = require("./room");
const Delay_1 = require("../common/Delay");
const GameLogic_1 = require("../SrvGame/tienlen/GameLogic");
const gameCfg_1 = require("../SrvGame/tienlen/gameCfg");
const TienLenGame_1 = require("../SrvGame/tienlen/TienLenGame");
const Player_1 = require("../SrvGame/tienlen/Player");
describe("tienlen", () => {
    let isGameEnd = false;
    let currentUserId = "";
    let currentUserCard = undefined;
    let firstPlay = true;
    let loopCardTypeList = [];
    let isTrusteeship = false;
    let handRound = 0; // 第几手牌
    function listenMsg(client) {
        client.listenMsg("tienlen/GameStart", async (msg) => {
            console.log("game start:", msg);
            currentUserCard = msg.userCards.find((c) => c.userId == currentUserId);
            let s = currentUserCard.cards.map((v) => GameLogic_1.tienlenLogic.showCard(v));
            console.log("user cards:", s);
            setTimeout(() => {
                if (isTrusteeship) {
                    client.sendMsg("tienlen/Trusteeship", { status: true });
                    console.log("send trusteeship to server");
                }
            }, 1000);
        });
        client.listenMsg("tienlen/TurnPlayer", async (msg) => {
            console.log("turn player:", msg);
            if (handRound != msg.handRound) {
                loopCardTypeList = [];
                handRound = msg.handRound;
            }
            if (msg.prevCards) {
                loopCardTypeList.push(msg.prevCards);
            }
            if (msg.userId == currentUserId && !isTrusteeship) {
                setTimeout(() => {
                    if (firstPlay) {
                        let handCards = currentUserCard.cards;
                        // 获取出牌
                        let playCards = GameLogic_1.tienlenLogic.getPlayCards(handCards, loopCardTypeList.length > 0 ? loopCardTypeList[loopCardTypeList.length - 1] : null);
                        if (playCards.length > 0) {
                            console.log("send play msg:", { cards: playCards });
                            client.sendMsg("tienlen/Play", { cards: playCards });
                            firstPlay = false;
                        }
                        else {
                            console.log("send pass msg");
                            client.sendMsg("tienlen/Pass", {});
                        }
                    }
                    else {
                        console.log("send pass msg");
                        client.sendMsg("tienlen/Pass", {});
                    }
                }, 1000);
            }
        });
        client.listenMsg("tienlen/TrusteeshipStatus", async (msg) => {
            console.log("trusteeship status:", msg);
        });
        client.listenMsg("tienlen/PassPlayer", async (msg) => {
            console.log("pass player:", msg);
        });
        client.listenMsg("tienlen/RoomInfo", async (msg) => {
            console.log("room info:", msg);
        });
        client.listenMsg("tienlen/GameEnd", async (msg) => {
            console.log("game end:", msg);
            isGameEnd = true;
        });
        client.listenMsg("tienlen/BombScore", async (msg) => {
            console.log("bomb score:", msg);
        });
        client.listenMsg("tienlen/RoomScore", async (msg) => {
            console.log("room score:", msg);
        });
        client.listenMsg("room/RoomDataSyncPush", async (msg) => {
            console.log("room data sync push:", msg);
        });
        client.listenMsg("room/RoomDataChangedPush", async (msg) => {
            console.log("room data change push:", msg);
        });
        client.listenMsg("room/UserDataChangedPush", async (msg) => {
            console.log("user data change:", msg);
        });
        client.listenMsg("room/UserComesToRoomPush", async (msg) => {
            console.log("user comes to room:", msg);
        });
        client.listenMsg("room/UserLeavesFromRoomPush", async (msg) => {
            console.log("user leave room:", msg);
        });
        client.listenMsg("room/UserReady", async (msg) => {
            console.log("room user ready:", msg);
        });
        client.listenMsg("room/UserJoin", async (msg) => {
            console.log("room user join:", msg);
        });
    }
    function unlistenMsg(client) {
        client.unlistenMsgAll("tienlen/GameStart");
        client.unlistenMsgAll("tienlen/TurnPlayer");
        client.unlistenMsgAll("tienlen/TrusteeshipStatus");
        client.unlistenMsgAll("tienlen/PassPlayer");
        client.unlistenMsgAll("tienlen/RoomInfo");
        client.unlistenMsgAll("tienlen/GameEnd");
        client.unlistenMsgAll("room/RoomDataSyncPush");
        client.unlistenMsgAll("room/RoomDataChangedPush");
        client.unlistenMsgAll("room/UserDataChangedPush");
        client.unlistenMsgAll("room/UserComesToRoomPush");
        client.unlistenMsgAll("room/UserLeavesFromRoomPush");
        client.unlistenMsgAll("room/UserReady");
        client.unlistenMsgAll("room/UserJoin");
        client.unlistenMsgAll("tienlen/BombScore");
        client.unlistenMsgAll("tienlen/RoomScore");
    }
    function createPlayers() {
        let players = [];
        for (let i = 0; i < 4; i++) {
            let p = new Player_1.Player("" + i, i, 4);
            p.gold = 10000;
            p.isTrusteeship = true;
            players.push(p);
        }
        return players;
    }
    it("deal", async () => {
        //发牌
        let m_objConfig = {
            playerCount: 4,
            //游戏结算类型 1=记牌数，2=1打3
            settlementType: 1,
            chipType: gameCfg_1.EM_CHIP_TYPE.eScore,
            bet: 100,
            startConsume: 100,
            deck: undefined,
        };
        {
            let players = createPlayers();
            let game = new TienLenGame_1.TienLenGame(m_objConfig, console);
            let deck = game.deal(players);
            let s = deck.map((v) => GameLogic_1.tienlenLogic.showCard(v));
            console.log("deck:", s);
        }
        {
            m_objConfig.deck = RoomTienLen_1.TEST_DECK;
            let players = createPlayers();
            let game = new TienLenGame_1.TienLenGame(m_objConfig, console);
            (0, assert_1.strict)(game.deck);
            console.log("game deck :", game.deck.map((v) => GameLogic_1.tienlenLogic.showCard(v)));
            let deck = game.deal(players, true);
            let s = deck.map((v) => GameLogic_1.tienlenLogic.showCard(v));
            console.log("test deck:", s);
            for (let i = 0; i < players.length; i++) {
                let s = players[i].userCard.map((v) => GameLogic_1.tienlenLogic.showCard(v));
                console.log("user cards:", s);
            }
        }
    });
    it("play", async () => {
        let m_objConfig = {
            playerCount: 4,
            //游戏结算类型 1=记牌数，2=1打3
            settlementType: 1,
            chipType: gameCfg_1.EM_CHIP_TYPE.eScore,
            bet: 100,
            startConsume: 100,
        };
        let game = new TienLenGame_1.TienLenGame(m_objConfig, console);
        for (let i = 0; i < 10; i++) {
            let players = createPlayers();
            let deck = game.deal(players);
            let firstPlayer = GameLogic_1.tienlenLogic.getFirstPlayer(players);
            let s = players[firstPlayer].userCard.map((v) => GameLogic_1.tienlenLogic.showCard(v));
            console.log("round:", i + 1, " first player:", firstPlay, " user cards:", s);
        }
    });
    it("match", async () => {
        let gameType = Constants_1.GameType.TIENLEN;
        let client0 = await (0, room_1.createLobbyClient)("test", "111111");
        let client1 = await (0, room_1.createLobbyClient)("test1", "111111");
        let client2 = await (0, room_1.createLobbyClient)("test2", "111111");
        let client3 = await (0, room_1.createLobbyClient)("test3", "111111");
        let client4 = await (0, room_1.createLobbyClient)("test4", "111111");
        let matchRes0 = client0.callApi("lobby/StartMatch", { type: gameType });
        // let r0 = await matchRes0;
        // await delay(1000);
        let matchRes1 = client1.callApi("lobby/StartMatch", { type: gameType });
        let matchRes2 = client2.callApi("lobby/StartMatch", { type: gameType });
        let matchRes3 = client3.callApi("lobby/StartMatch", { type: gameType });
        let matchRes4 = client4.callApi("lobby/StartMatch", { type: gameType });
        let ps = Promise.all([matchRes0, matchRes1, matchRes2, matchRes3, matchRes4]);
        let r = await ps;
        console.log([...r]);
    });
    it("match again", async () => {
        let gameType = Constants_1.GameType.TIENLEN;
        {
            let client = await (0, room_1.matchRoom)("test", "111111", gameType, listenMsg);
            client.sendMsg("room/ClientReady", {});
            await client.callApi("room/JoinGame", {});
            await client.callApi("room/Ready", {});
            for (let i = 0; i < 10000; i++) {
                client.sendMsg("Ping", { timestamp: Date.now() });
                await (0, Delay_1.delay)(1000);
                if (isGameEnd) {
                    break;
                }
            }
            await client.callApi("room/ExitRoom", {});
            await client.disconnect();
        }
        {
            //match again
            let client = await (0, room_1.matchRoom)("test", "111111", gameType, listenMsg);
            client.sendMsg("room/ClientReady", {});
            await client.callApi("room/JoinGame", {});
            await client.callApi("room/Ready", {});
            for (let i = 0; i < 2; i++) {
                client.sendMsg("Ping", { timestamp: Date.now() });
                await (0, Delay_1.delay)(1000);
            }
            await client.callApi("room/ExitRoom", {});
            await client.disconnect();
        }
    });
    it("match fail", async () => {
        //游戏过程中退出游戏， 会导致无法匹配新的游戏， 直到上一局游戏结束
        let gameType = Constants_1.GameType.TIENLEN;
        {
            let client = await (0, room_1.matchRoom)("test", "111111", gameType, listenMsg);
            client.sendMsg("room/ClientReady", {});
            await client.callApi("room/JoinGame", {});
            await client.callApi("room/Ready", {});
            for (let i = 0; i < 10; i++) {
                client.sendMsg("Ping", { timestamp: Date.now() });
                await (0, Delay_1.delay)(1000);
            }
            await client.callApi("room/ExitRoom", {});
            await client.disconnect();
        }
        {
            //match again
            let client = await (0, room_1.createLobbyClient)("test", "111111", listenMsg);
            let matchRes = await client.callApi("lobby/StartMatch", { type: gameType });
            console.log("match res:", matchRes);
            (0, assert_1.strict)(matchRes.err);
        }
    });
    it("reconnect", async () => {
        let { client, uid } = await (0, room_1.createRoom)("test", "111111", Constants_1.GameType.TIENLEN, listenMsg);
        currentUserId = uid;
        client.sendMsg("room/ClientReady", {});
        await client.callApi("room/JoinGame", {});
        await client.callApi("room/Ready", {});
        for (let i = 0; i < 1000; i++) {
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
        await client.callApi("room/JoinGame", {});
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
    it("one player", async () => {
        let { client, uid } = await (0, room_1.createRoom)("test", "111111", Constants_1.GameType.TIENLEN, listenMsg);
        currentUserId = uid;
        client.sendMsg("room/ClientReady", {});
        await client.callApi("room/JoinGame", {});
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
    it("run", async () => {
        let { client: client1, roomId } = await (0, room_1.createRoom)("test1", "111111", Constants_1.GameType.TIENLEN, listenMsg);
        console.log("join game, room id:", roomId);
        await client1.callApi("room/JoinGame", {});
        await client1.callApi("room/Ready", {});
        let client2 = await (0, room_1.connectRoom)("test2", "111111", roomId, listenMsg);
        await client2.callApi("room/JoinGame", {});
        await client2.callApi("room/Ready", {});
        console.log("client2 connected");
        let client3 = await (0, room_1.connectRoom)("test3", "111111", roomId, listenMsg);
        await client3.callApi("room/JoinGame", {});
        await client3.callApi("room/Ready", {});
        console.log("client3 connected");
        let client4 = await (0, room_1.connectRoom)("test4", "111111", roomId, listenMsg);
        await client4.callApi("room/JoinGame", {});
        await client4.callApi("room/Ready", {});
        console.log("client4 connected");
        for (let i = 0; i < 1000; i++) {
            client1.sendMsg("Ping", { timestamp: Date.now() });
            client2.sendMsg("Ping", { timestamp: Date.now() });
            client3.sendMsg("Ping", { timestamp: Date.now() });
            client4.sendMsg("Ping", { timestamp: Date.now() });
            await (0, Delay_1.delay)(1000);
        }
        unlistenMsg(client1);
        unlistenMsg(client2);
        unlistenMsg(client3);
        unlistenMsg(client4);
        await client1.callApi("room/ExitRoom", {});
        await client2.callApi("room/ExitRoom", {});
        await client3.callApi("room/ExitRoom", {});
        await client4.callApi("room/ExitRoom", {});
    });
    beforeEach(() => {
        isGameEnd = false;
        currentUserId = "";
        firstPlay = true;
        loopCardTypeList = [];
    });
});
