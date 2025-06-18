"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiReportServerState = ApiReportServerState;
const MasterSrv_1 = require("../../SrvMaster/MasterSrv");
async function ApiReportServerState(call) {
    MasterSrv_1.masterSrv.updateServerState(call.req.state);
    call.succ({});
}
