"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSendChat = ApiSendChat;
const GameSrv_1 = require("../../SrvGame/GameSrv");
const GameSrvRPC_1 = require("../../SrvGame/GameSrvRPC");
const DBMgr_1 = require("../../db/DBMgr");
async function ApiSendChat(call) {
    const conn = call.conn;
    const uid = conn.uid;
    if (!uid) {
        return call.error('NOT_LOGIN');
    }
    const currentUser = await DBMgr_1.dbUser.getUserInfoByUid(uid);
    if (!currentUser) {
        return call.error('INVALID_UID');
    }
    let msg = {
        time: new Date,
        channel: call.req.channel,
        content: call.req.content,
        user: {
            uid: uid,
            name: currentUser.name,
            gender: currentUser.gender,
        }
    };
    if (msg.channel) {
        GameSrvRPC_1.GameSrvRPC.broadcastChatMsg(msg);
    }
    else if (conn.curRoom) {
        GameSrv_1.gameSrv.broadcastInRoom(conn.curRoom, msg);
    }
    call.succ({});
}
