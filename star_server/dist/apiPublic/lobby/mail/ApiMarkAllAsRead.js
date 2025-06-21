"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMarkAllAsRead = ApiMarkAllAsRead;
const DBMgr_1 = require("../../../db/DBMgr");
async function ApiMarkAllAsRead(call) {
    let req = call.req;
    let uid = call.conn.uid;
    let dbData = await DBMgr_1.dbUser.getUserInfoByUid(uid);
    let mails = await DBMgr_1.dbMail.markAsReadMany((dbData === null || dbData === void 0 ? void 0 : dbData.mails) || []);
    call.succ({ mails: mails });
}
