"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetRoomServerState = ApiGetRoomServerState;
const MatchSrv_1 = require("../../SrvMatch/MatchSrv");
async function ApiGetRoomServerState(call) {
    let info = MatchSrv_1.matchSrv.getRoomState(call.req.roomId);
    call.succ({
        state: info
    });
}
