"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCancelMatch = ApiCancelMatch;
const MatchSrvRPC_1 = require("../../SrvMatch/MatchSrvRPC");
async function ApiCancelMatch(call) {
    let conn = call.conn;
    let ret = await MatchSrvRPC_1.MatchSrvRPC.get().cancelMatch(conn.uid);
    if (ret.isSucc) {
        call.succ(ret.res);
    }
    else {
        call.error(ret.err);
    }
}
