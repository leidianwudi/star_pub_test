"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailSystem = void 0;
const DBMgr_1 = require("../db/DBMgr");
class MailSystem {
    async sendMail(from, to, title, content, userInfo) {
        userInfo = userInfo || await DBMgr_1.dbUser.getUserInfoByUid(to);
        if (!userInfo) {
            return;
        }
        let mail = await DBMgr_1.dbMail.insterNewMail(from, to, title, content);
        let mails = userInfo.mails || [];
        mails.push(mail.mailId);
        await DBMgr_1.dbUser.updateUserInfoByUid(userInfo.uid, { mails: mails });
    }
    async deleteMail(mailId) {
        await DBMgr_1.dbMail.deleteMail(mailId);
    }
    async markAsRead(mailId) {
        await DBMgr_1.dbMail.markAsRead(mailId);
    }
    async cleanMails(mailIds) {
        await DBMgr_1.dbMail.deleteMailMany(mailIds);
    }
}
const mailSystem = new MailSystem();
exports.mailSystem = mailSystem;
