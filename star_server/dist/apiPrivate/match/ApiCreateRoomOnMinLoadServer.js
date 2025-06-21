"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCreateRoomOnMinLoadServer = ApiCreateRoomOnMinLoadServer;
const MatchSrv_1 = require("../../SrvMatch/MatchSrv");
async function ApiCreateRoomOnMinLoadServer(call) {
    let ret = await MatchSrv_1.matchSrv.createRoom(call);
    if (ret.isSucc) {
        call.succ(ret.res);
    }
    else {
        call.error(ret.err);
    }
}
