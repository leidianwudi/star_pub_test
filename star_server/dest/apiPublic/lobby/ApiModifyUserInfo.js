"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModifyUserInfo = ApiModifyUserInfo;
const DBMgr_1 = require("../../db/DBMgr");
async function ApiModifyUserInfo(call) {
    let req = call.req;
    let uid = call.conn.uid;
    let userInfo = await DBMgr_1.dbUser.getUserInfoByUid(uid);
    if (!userInfo) {
        return call.error('用户不存在');
    }
    await DBMgr_1.dbUser.updateUserInfoByUid(uid, { gender: req.gender, introduction: req.introduction });
    call.succ({ gender: req.gender, introduction: req.introduction });
}
