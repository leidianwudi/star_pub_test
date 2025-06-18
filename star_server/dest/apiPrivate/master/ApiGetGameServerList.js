"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetGameServerList = ApiGetGameServerList;
const MasterSrv_1 = require("../../SrvMaster/MasterSrv");
async function ApiGetGameServerList(call) {
    call.succ({ serverList: MasterSrv_1.masterSrv.gameServerList });
}
