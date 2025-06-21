"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiReady = ApiReady;
async function ApiReady(call) {
    // TODO
    const conn = call.conn;
    let current = conn.curRoom;
    if (!current) {
        return call.error('NO_TABLE');
    }
    await current.onRPC_UserReady(call);
}
