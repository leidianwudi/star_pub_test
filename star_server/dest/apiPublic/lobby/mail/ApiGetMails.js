"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetMails = ApiGetMails;
const DBMgr_1 = require("../../../db/DBMgr");
async function ApiGetMails(call) {
    let req = call.req;
    let uid = call.conn.uid;
    if (!uid) {
        return call.error('NOT_LOGIN');
    }
    let dbData = await DBMgr_1.dbUser.getUserInfoByUid(uid);
    if (!dbData) {
        return call.error('INVALID_UID');
    }
    const mails = await DBMgr_1.sqlDBMail.getMails(uid);
    call.succ({ mails: mails });
}
