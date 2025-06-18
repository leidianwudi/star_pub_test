"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKickUser = ApiKickUser;
const GameSrv_1 = require("../../SrvGame/GameSrv");
async function ApiKickUser(call) {
    if (!call.req.uid) {
        return call.error('uid is required');
    }
    if (!GameSrv_1.gameSrv.websocketServer) {
        return;
    }
    let conn = GameSrv_1.gameSrv.websocketServer.userId2Conn.get(call.req.uid);
    if (conn) {
        if (conn.state == 'ready') {
            await GameSrv_1.gameSrv.websocketServer.kickUserById(call.req.uid, call.req.reason);
            return call.succ({});
        }
        else {
            return call.error('user is not ready');
        }
    }
    call.succ({});
}
