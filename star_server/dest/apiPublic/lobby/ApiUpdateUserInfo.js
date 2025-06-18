"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUpdateUserInfo = ApiUpdateUserInfo;
const DBMgr_1 = require("../../db/DBMgr");
async function ApiUpdateUserInfo(call) {
    let conn = call.conn;
    let req = call.req;
    let dbUserInfo = {};
    if (req.name != undefined) {
        dbUserInfo.name = req.name;
    }
    if (req.visualId != undefined) {
        dbUserInfo.visualId = req.visualId;
    }
    if (req.introduction != undefined) {
        dbUserInfo.introduction = req.introduction;
    }
    if (req.gender != undefined) {
        dbUserInfo.gender = req.gender;
    }
    await DBMgr_1.sqlDBUser.updateUserInfoByUid(conn.uid, dbUserInfo);
    conn.dbUserInfo.name = req.name;
    conn.dbUserInfo.visualId = req.visualId;
    call.succ({});
}
