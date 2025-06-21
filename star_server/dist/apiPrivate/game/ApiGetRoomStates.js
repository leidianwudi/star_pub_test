"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetRoomStates = ApiGetRoomStates;
const GameSrv_1 = require("../../SrvGame/GameSrv");
async function ApiGetRoomStates(call) {
    let ret = GameSrv_1.gameSrv.getAllRoomStates();
    call.succ(ret);
}
