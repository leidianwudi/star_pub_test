"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStartMatch = ApiStartMatch;
const MatchSrv_1 = require("../../SrvMatch/MatchSrv");
async function ApiStartMatch(call) {
    return await MatchSrv_1.matchSrv.addToMatchQueue(call);
}
