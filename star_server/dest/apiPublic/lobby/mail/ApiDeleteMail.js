"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDeleteMail = ApiDeleteMail;
const DBMgr_1 = require("../../../db/DBMgr");
async function ApiDeleteMail(call) {
    let req = call.req;
    let uid = call.conn.uid;
    let dbData = await DBMgr_1.dbUser.getUserInfoByUid(uid);
    if (!dbData) {
        return;
    }
    let index = (dbData.mails && dbData.mails.length) ? dbData.mails.indexOf(req.mailId) : -1;
    if (index != -1) {
        DBMgr_1.dbMail.deleteMail(req.mailId);
        dbData.mails.splice(index, 1);
        DBMgr_1.dbUser.updateUserInfoByUid(uid, { mails: dbData.mails });
        call.succ({});
    }
    else {
        return call.error('do_not_have_this_mail');
    }
}
