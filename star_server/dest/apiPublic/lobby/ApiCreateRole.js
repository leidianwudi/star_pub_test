"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCreateRole = ApiCreateRole;
const DBMgr_1 = require("../../db/DBMgr");
async function ApiCreateRole(call) {
    let conn = call.conn;
    let req = call.req;
    await DBMgr_1.dbUser.updateUserInfo(conn, { name: req.name, visualId: req.visualId });
    conn.dbUserInfo.name = req.name;
    conn.dbUserInfo.visualId = req.visualId;
    call.succ({ name: req.name, visualId: req.visualId });
}
