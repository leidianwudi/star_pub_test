"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const MatchSrv_1 = require("../../SrvMatch/MatchSrv");
async function default_1(call) {
    MatchSrv_1.matchSrv.updateRoomStates(call.req);
    call.succ({});
}
