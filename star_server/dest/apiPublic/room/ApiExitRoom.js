"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiExitRoom = ApiExitRoom;
async function ApiExitRoom(call) {
    const conn = call.conn;
    if (conn.curRoom) {
        let err = await conn.curRoom.onRPC_Leave(conn);
        if (err) {
            call.error(err);
        }
        conn.curRoom = undefined;
    }
    call.succ({});
}
