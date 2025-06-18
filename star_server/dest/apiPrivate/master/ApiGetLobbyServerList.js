"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const MasterSrv_1 = require("../../SrvMaster/MasterSrv");
async function default_1(call) {
    call.succ({ serverList: MasterSrv_1.masterSrv.lobbyServerList });
}
