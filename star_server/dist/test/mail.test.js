"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBMail_1 = require("../db/DBMail");
const Mail_1 = require("../db/entity/Mail");
const assert_1 = require("assert");
describe("mail", () => {
    it("test mail", async () => {
        const db = new DBMail_1.SQLDB_Mail();
        const m1 = await db.insterNewMail("system", "4", "欢迎登录", "陈婉儿，你好！\n这封邮件会在你每次登录的时候收到。");
        const m2 = await db.insterNewMail("system", "4", "hello", "hello mail2");
        let mail = await db.getMail(m1.mailId);
        (0, assert_1.strict)(mail.mailId == m1.mailId);
        console.log("get mail:", mail);
        const mails = await db.getMails("2");
        console.log("get mails:", mails);
        await db.deleteMail(m1.mailId);
        mail = await db.getMail(m1.mailId);
        (0, assert_1.strict)(mail.state == Mail_1.MailState.DELETED);
        await db.deleteMailMany([m1.mailId, m2.mailId]);
        mail = await db.getMail(m2.mailId);
        (0, assert_1.strict)(mail.state == Mail_1.MailState.DELETED);
        await db.markAsRead(m1.mailId);
        mail = await db.getMail(m1.mailId);
        (0, assert_1.strict)(mail.state == Mail_1.MailState.READED);
        await db.markAsReadMany([m1.mailId, m2.mailId]);
        mail = await db.getMail(m2.mailId);
        (0, assert_1.strict)(mail.state == Mail_1.MailState.READED);
    });
});
