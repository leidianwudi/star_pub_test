"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
async function default_1(call) {
    let conn = call.conn;
    let room = conn.curRoom;
    if (!room) {
        return call.error('ROOM_NOT_EXIST');
    }
    let err2 = await room.onRPC_JoinGame(conn.uid, '');
    if (err2) {
        return call.error(err2);
    }
    call.succ({});
}
