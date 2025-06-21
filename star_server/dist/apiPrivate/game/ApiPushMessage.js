"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPushMessage = ApiPushMessage;
const Constants_1 = require("../../common/Constants");
const GameSrv_1 = require("../../SrvGame/GameSrv");
async function ApiPushMessage(call) {
    let m = { content: call.req.content };
    if (call.req.game != Constants_1.LOBBY) {
        if (call.req.uid) {
            GameSrv_1.gameSrv.pushUserMessage(call.req.uid, m);
        }
        else {
            GameSrv_1.gameSrv.pushGameMessage(call.req.game, m);
        }
    }
    call.succ({});
}
