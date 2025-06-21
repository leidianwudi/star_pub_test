"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUpdateUserLocation = ApiUpdateUserLocation;
const MasterSrv_1 = require("../../SrvMaster/MasterSrv");
async function ApiUpdateUserLocation(call) {
    MasterSrv_1.masterSrv.updateUserLocation(call.req.uids, call.req.serverUrl, call.req.roomId, call.req.gameType, call.req.isLeaved);
    call.succ({});
}
