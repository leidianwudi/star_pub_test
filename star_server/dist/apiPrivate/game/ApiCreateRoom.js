"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCreateRoom = ApiCreateRoom;
const GameSrv_1 = require("../../SrvGame/GameSrv");
const Error_1 = require("../../shared/protocols/Error");
async function ApiCreateRoom(call) {
    let room = await GameSrv_1.gameSrv.createRoom(call.req.roomId, call.req.displayId, call.req.roomName, call.req.gameType, call.req.password);
    if (!room) {
        return call.error('INVALID_CONFIG_ID', { code: Error_1.ERR_NO_GAME_CONFIG });
    }
    call.succ({
        state: room.state
    });
}
