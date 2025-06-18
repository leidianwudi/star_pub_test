"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const LobbySrv_1 = require("../../SrvLobby/LobbySrv");
async function default_1(call) {
    if (!call.req.uid) {
        return call.error('uid is required');
    }
    if (!LobbySrv_1.lobbySrv.websocketLobbyServer) {
        return;
    }
    let conn = LobbySrv_1.lobbySrv.websocketLobbyServer.userId2Conn.get(call.req.uid);
    if (conn) {
        await LobbySrv_1.lobbySrv.websocketLobbyServer.kickUserById(call.req.uid, call.req.reason);
        return call.succ({});
    }
    call.succ({});
}
