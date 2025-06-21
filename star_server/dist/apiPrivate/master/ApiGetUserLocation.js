"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetUserLocation = ApiGetUserLocation;
const MasterSrv_1 = require("../../SrvMaster/MasterSrv");
async function ApiGetUserLocation(call) {
    let ret = MasterSrv_1.masterSrv.getUserLocation(call.req.uid);
    call.succ(ret);
}
