"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetAllUserLocations = ApiGetAllUserLocations;
const GameSrv_1 = require("../../SrvGame/GameSrv");
async function ApiGetAllUserLocations(call) {
    let locs = GameSrv_1.gameSrv.getAllUserLocations();
    call.succ({
        locations: locs,
    });
}
