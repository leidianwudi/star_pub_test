"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUserLoginPrepare = ApiUserLoginPrepare;
const MasterSrv_1 = require("../../SrvMaster/MasterSrv");
const GameSrvRPC_1 = require("../../SrvGame/GameSrvRPC");
const LobbySrvRPC_1 = require("../../SrvLobby/LobbySrvRPC");
async function ApiUserLoginPrepare(call) {
    //通知此用户连接在大厅服务器的其它连接
    let keys = Object.keys(MasterSrv_1.masterSrv.lobbyServerMap);
    let ps = keys.map(async (key) => {
        const server = MasterSrv_1.masterSrv.lobbyServerMap[key];
        if (!server.interalUrl) {
            return Promise.resolve();
        }
        const lobbySrvRPC = LobbySrvRPC_1.LobbySrvRPC.get(server.interalUrl);
        await lobbySrvRPC.kickUser(call.req.uid, "login_to_other");
    });
    await Promise.all(ps);
    let loc = MasterSrv_1.masterSrv.userLocs[call.req.uid];
    if (!loc) {
        return call.succ({});
    }
    let ret = await GameSrvRPC_1.GameSrvRPC.get(loc.serverUrl).kickUser(call.req.uid, 'login_to_other');
    if (ret.isSucc) {
        return call.succ({});
    }
    return call.error(ret.err);
}
