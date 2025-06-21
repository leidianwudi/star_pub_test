"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCancelMatch = ApiCancelMatch;
const MatchSrv_1 = require("../../SrvMatch/MatchSrv");
async function ApiCancelMatch(call) {
    return await MatchSrv_1.matchSrv.removeFromMatchQueue(call);
}
