"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoomClient = createRoomClient;
exports.createRoom = createRoom;
exports.reconnectRoom = reconnectRoom;
exports.connectRoom = connectRoom;
exports.startMatch = startMatch;
exports.createLobbyClient = createLobbyClient;
exports.matchRoom = matchRoom;
const assert_1 = require("assert");
const tsrpc_1 = require("tsrpc");
const serviceProto_public_1 = require("../shared/protocols/serviceProto_public");
const HTTP_SERVER = "http://127.0.0.1:3001";
const WS_SERVER = "ws://127.0.0.1:4001";
//测试外网服务器
// const HTTP_SERVER = "http://8.216.89.33:80"
// const WS_SERVER = "ws://8.216.89.33:80";
const ROLE_NAME = ""; //TEST_ROLE_NAME;
async function createRoomClient(gameType, listenMsg) {
    let r = await createRoom("test", "111111", gameType, listenMsg);
    return r.client;
}
async function createRoom(account, password, gameType, listenMsg, subType) {
    const httpClient = new tsrpc_1.HttpClient(serviceProto_public_1.serviceProto, { server: HTTP_SERVER, logMsg: true, json: true });
    let loginRes = await httpClient.callApi("login/Login", { account: account, password: password });
    console.log("login res:", loginRes);
    (0, assert_1.strict)(loginRes.isSucc);
    let client = new tsrpc_1.WsClient(serviceProto_public_1.serviceProto, {
        server: WS_SERVER,
        logMsg: true,
        json: true,
    });
    const connectRes = await client.connect();
    (0, assert_1.strict)(connectRes.isSucc);
    let lobbyRes = await client.callApi("lobby/Auth", { sign: loginRes.res.sign, uid: loginRes.res.uid, token: loginRes.res.token, time: loginRes.res.time });
    (0, assert_1.strict)(lobbyRes.isSucc);
    console.log("user info:", lobbyRes.res);
    let createRes = await client.callApi("lobby/CreateRoom", { token: loginRes.res.token, roomName: "test", gameType: gameType, subType: subType, "password": "111111" });
    console.log("create res:", createRes);
    (0, assert_1.strict)(createRes.isSucc);
    client.disconnect();
    const gameClient = new tsrpc_1.WsClient(serviceProto_public_1.serviceProto, {
        server: createRes.res.enterRoomParams.serverUrl,
        logMsg: true,
        json: true,
    });
    const conRes = await gameClient.connect();
    (0, assert_1.strict)(conRes.isSucc);
    if (listenMsg) {
        listenMsg(gameClient);
    }
    let auth = { sign: createRes.res.enterRoomParams.token, uid: loginRes.res.uid, time: createRes.res.enterRoomParams.time, roomId: createRes.res.enterRoomParams.roomId, gameType: gameType, subType: subType, roleName: ROLE_NAME };
    const authRes = await gameClient.callApi("game/AuthClient", auth);
    console.log("game auth result:", authRes);
    (0, assert_1.strict)(authRes.isSucc);
    return { client: gameClient, roomId: createRes.res.enterRoomParams.roomId, uid: loginRes.res.uid };
}
async function reconnectRoom(listenMsg) {
    var _a;
    const httpClient = new tsrpc_1.HttpClient(serviceProto_public_1.serviceProto, { server: HTTP_SERVER, logMsg: true });
    let loginRes = await httpClient.callApi("login/Login", { account: "test", password: "111111" });
    console.log("login res:", loginRes);
    (0, assert_1.strict)(loginRes.isSucc);
    let client = new tsrpc_1.WsClient(serviceProto_public_1.serviceProto, {
        server: WS_SERVER,
        logMsg: true,
        json: true,
    });
    if (listenMsg) {
        listenMsg(client);
    }
    const connectRes = await client.connect();
    console.log("connect res:", connectRes);
    let lobbyRes = await client.callApi("lobby/Auth", { sign: loginRes.res.sign, uid: loginRes.res.uid, token: loginRes.res.token, time: loginRes.res.time });
    (0, assert_1.strict)(lobbyRes.isSucc);
    console.log("user info:", lobbyRes.res);
    if (!((_a = lobbyRes.res) === null || _a === void 0 ? void 0 : _a.roomId)) {
        throw new Error("no room id");
    }
    let tryEnterRoomRes = await client.callApi("lobby/TryEnterRoom", { token: loginRes.res.token, id: lobbyRes.res.roomId });
    (0, assert_1.strict)(tryEnterRoomRes.isSucc);
    console.log("try enter room res:", tryEnterRoomRes);
    let auth = { sign: tryEnterRoomRes.res.token, uid: loginRes.res.uid, time: tryEnterRoomRes.res.time, roomId: tryEnterRoomRes.res.roomId, gameType: tryEnterRoomRes.res.gameType, roleName: ROLE_NAME };
    const authRes = await client.callApi("game/AuthClient", auth);
    (0, assert_1.strict)(authRes.isSucc);
    console.log("game auth result:", authRes);
    return client;
}
async function connectRoom(account, password, roomId, listenMsg) {
    const httpClient = new tsrpc_1.HttpClient(serviceProto_public_1.serviceProto, { server: HTTP_SERVER, logMsg: true });
    let loginRes = await httpClient.callApi("login/Login", { account: account, password: password });
    console.log("login res:", loginRes);
    (0, assert_1.strict)(loginRes.isSucc);
    let client = new tsrpc_1.WsClient(serviceProto_public_1.serviceProto, {
        server: WS_SERVER,
        logMsg: true,
        json: true,
    });
    if (listenMsg) {
        listenMsg(client);
    }
    const connectRes = await client.connect();
    console.log("connect res:", connectRes);
    let lobbyRes = await client.callApi("lobby/Auth", { sign: loginRes.res.sign, uid: loginRes.res.uid, token: loginRes.res.token, time: loginRes.res.time });
    (0, assert_1.strict)(lobbyRes.isSucc);
    console.log("user info:", lobbyRes.res);
    let tryEnterRoomRes = await client.callApi("lobby/TryEnterRoom", { token: loginRes.res.token, id: roomId, password: "111111" });
    (0, assert_1.strict)(tryEnterRoomRes.isSucc);
    console.log("try enter room res:", tryEnterRoomRes);
    let auth = { sign: tryEnterRoomRes.res.token, uid: loginRes.res.uid, time: tryEnterRoomRes.res.time, roomId: tryEnterRoomRes.res.roomId, gameType: tryEnterRoomRes.res.gameType, roleName: ROLE_NAME };
    const authRes = await client.callApi("game/AuthClient", auth);
    (0, assert_1.strict)(authRes.isSucc);
    console.log("game auth result:", authRes);
    return client;
}
async function startMatch(account, password, gameType, listenMsg) {
    const httpClient = new tsrpc_1.HttpClient(serviceProto_public_1.serviceProto, { server: HTTP_SERVER, logMsg: true, json: true });
    let loginRes = await httpClient.callApi("login/Login", { account: account, password: password });
    console.log("login res:", loginRes);
    (0, assert_1.strict)(loginRes.isSucc);
    let client = new tsrpc_1.WsClient(serviceProto_public_1.serviceProto, {
        server: WS_SERVER,
        logMsg: true,
        json: true,
    });
    if (listenMsg) {
        listenMsg(client);
    }
    const connectRes = await client.connect();
    console.log("connect res:", connectRes);
    let lobbyRes = await client.callApi("lobby/Auth", { sign: loginRes.res.sign, uid: loginRes.res.uid, token: loginRes.res.token, time: loginRes.res.time });
    (0, assert_1.strict)(lobbyRes.isSucc);
    console.log("user info:", lobbyRes.res);
    let matchRes = await client.callApi("lobby/StartMatch", { token: loginRes.res.token, type: gameType });
    console.log("match res:", matchRes);
    return client;
}
async function createLobbyClient(account, password, listenMsg) {
    const httpClient = new tsrpc_1.HttpClient(serviceProto_public_1.serviceProto, { server: HTTP_SERVER, logMsg: true, json: true });
    let loginRes = await httpClient.callApi("login/Login", { account: account, password: password });
    console.log("login res:", loginRes);
    (0, assert_1.strict)(loginRes.isSucc);
    let client = new tsrpc_1.WsClient(serviceProto_public_1.serviceProto, {
        server: WS_SERVER,
        logMsg: true,
        json: true,
    });
    if (listenMsg) {
        listenMsg(client);
    }
    const connectRes = await client.connect();
    console.log("connect res:", connectRes);
    let lobbyRes = await client.callApi("lobby/Auth", { sign: loginRes.res.sign, uid: loginRes.res.uid, token: loginRes.res.token, time: loginRes.res.time });
    (0, assert_1.strict)(lobbyRes.isSucc);
    console.log("user info:", lobbyRes.res);
    client.uid = lobbyRes.res.userInfo.uid;
    return client;
}
async function matchRoom(account, password, gameType, listenMsg) {
    const httpClient = new tsrpc_1.HttpClient(serviceProto_public_1.serviceProto, { server: HTTP_SERVER, logMsg: true, json: true });
    let loginRes = await httpClient.callApi("login/Login", { account: account, password: password });
    console.log("login res:", loginRes);
    (0, assert_1.strict)(loginRes.isSucc);
    let client = new tsrpc_1.WsClient(serviceProto_public_1.serviceProto, {
        server: WS_SERVER,
        logMsg: true,
        json: true,
    });
    if (listenMsg) {
        listenMsg(client);
    }
    const connectRes = await client.connect();
    console.log("connect res:", connectRes);
    let lobbyRes = await client.callApi("lobby/Auth", { sign: loginRes.res.sign, uid: loginRes.res.uid, token: loginRes.res.token, time: loginRes.res.time });
    (0, assert_1.strict)(lobbyRes.isSucc);
    console.log("user info:", lobbyRes.res);
    let matchRes = await client.callApi("lobby/StartMatch", { type: gameType });
    (0, assert_1.strict)(matchRes.isSucc);
    console.log("match result:", matchRes.res);
    let auth = { sign: matchRes.res.token, uid: loginRes.res.uid, time: matchRes.res.time, roomId: matchRes.res.roomId, gameType: gameType, roleName: ROLE_NAME };
    const authRes = await client.callApi("game/AuthClient", auth);
    return client;
}
