"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbySrvRPC = void 0;
const HttpRPC_1 = require("../common/HttpRPC");
class LobbySrvRPC extends HttpRPC_1.HttpRPC {
    static get(serverUrl) {
        return HttpRPC_1.HttpRPC.getRPCClient(serverUrl, LobbySrvRPC);
    }
    async kickUser(uid, reason) {
        return await this._httpClient.callApi("lobby/KickUser", { uid: uid, reason: reason });
    }
}
exports.LobbySrvRPC = LobbySrvRPC;
