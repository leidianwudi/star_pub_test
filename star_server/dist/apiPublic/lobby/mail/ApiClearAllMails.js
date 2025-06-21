"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClearAllMails = ApiClearAllMails;
const DBMgr_1 = require("../../../db/DBMgr");
async function ApiClearAllMails(call) {
    let req = call.req;
    let uid = call.conn.uid;
    let dbData = await DBMgr_1.dbUser.getUserInfoByUid(uid);
    if (dbData && dbData.mails) {
        DBMgr_1.dbMail.deleteMailMany(dbData.mails);
        DBMgr_1.dbUser.updateUserInfoByUid(uid, { mails: [] });
    }
    call.succ({});
}
