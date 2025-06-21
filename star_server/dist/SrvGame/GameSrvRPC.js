"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSrvRPC = void 0;
const MasterSrvRPC_1 = require("../SrvMaster/MasterSrvRPC");
const HttpRPC_1 = require("../common/HttpRPC");
class GameSrvRPC extends HttpRPC_1.HttpRPC {
    static get(serverUrl) {
        return HttpRPC_1.HttpRPC.getRPCClient(serverUrl, GameSrvRPC);
    }
    async kickUser(uid, reason) {
        return await this._httpClient.callApi("game/KickUser", { uid: uid, reason: reason });
    }
    static async broadcastChatMsg(msg) {
        let ret = await MasterSrvRPC_1.MasterSrvRPC.get().getGameServerList();
        if (ret.isSucc) {
            for (let server of ret.res.serverList) {
                let rpc = GameSrvRPC.get(server.interalUrl);
                rpc._httpClient.sendMsg("game/ChatTransform", msg);
            }
        }
    }
    getAllUserLocations() {
        return this._httpClient.callApi("game/GetAllUserLocations", {});
    }
    getRoomStates() {
        return this._httpClient.callApi("game/GetRoomStates", {});
    }
}
exports.GameSrvRPC = GameSrvRPC;
