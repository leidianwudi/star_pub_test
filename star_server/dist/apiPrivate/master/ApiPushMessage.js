"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPushMessage = ApiPushMessage;
const Constants_1 = require("../../common/Constants");
const MasterSrv_1 = require("../../SrvMaster/MasterSrv");
const GameSrvRPC_1 = require("../../SrvGame/GameSrvRPC");
const LobbySrvRPC_1 = require("../../SrvLobby/LobbySrvRPC");
async function ApiPushMessage(call) {
    if (call.req.game == Constants_1.LOBBY) {
        let keys = Object.keys(MasterSrv_1.masterSrv.lobbyServerMap);
        let ps = keys.map(async (key) => {
            let server = MasterSrv_1.masterSrv.lobbyServerMap[key];
            if (!server.interalUrl) {
                return Promise.resolve();
            }
            const lobbySrvRPC = LobbySrvRPC_1.LobbySrvRPC.get(server.interalUrl);
            await lobbySrvRPC.httpClient.callApi("lobby/PushMessage", call.req);
        });
        await Promise.all(ps);
    }
    else {
        let keys = Object.keys(MasterSrv_1.masterSrv.gameServerMap);
        let ps = keys.map(async (key) => {
            let server = MasterSrv_1.masterSrv.gameServerMap[key];
            if (!server.interalUrl) {
                return Promise.resolve();
            }
            const gameSrvRPC = GameSrvRPC_1.GameSrvRPC.get(server.interalUrl);
            await gameSrvRPC.httpClient.callApi("game/PushMessage", call.req);
        });
        await Promise.all(ps);
    }
    call.succ({});
}
