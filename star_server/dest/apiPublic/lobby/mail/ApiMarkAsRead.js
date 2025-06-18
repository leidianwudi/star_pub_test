"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMarkAsRead = ApiMarkAsRead;
const DBMgr_1 = require("../../../db/DBMgr");
async function ApiMarkAsRead(call) {
    let req = call.req;
    let uid = call.conn.uid;
    let dbInfo = await DBMgr_1.dbUser.getUserInfoByUid(uid);
    if ((dbInfo === null || dbInfo === void 0 ? void 0 : dbInfo.mails) && dbInfo.mails.indexOf(req.mailId) == -1) {
        call.error('not found');
        return;
    }
    await DBMgr_1.dbMail.markAsRead(req.mailId);
    call.succ({});
}
