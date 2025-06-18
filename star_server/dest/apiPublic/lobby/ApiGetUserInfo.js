"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetUserInfo = ApiGetUserInfo;
const DBMgr_1 = require("../../db/DBMgr");
async function ApiGetUserInfo(call) {
    let infos = [];
    if (call.req.uid) {
        let info = await DBMgr_1.dbUser.getUserInfoByUid(call.req.uid);
        if (info) {
            infos.push({ uid: info.uid, name: info.name, visualId: info.visualId, gender: info.gender, introduction: info.introduction });
        }
    }
    if (call.req.uids) {
        for (let i = 0; i < call.req.uids.length; ++i) {
            let info = await DBMgr_1.dbUser.getUserInfoByUid(call.req.uids[i]);
            if (info) {
                infos.push({ uid: info.uid, name: info.name, visualId: info.visualId, gender: info.gender, introduction: info.introduction });
            }
        }
    }
    call.succ({ infos });
}
