"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLDB_Mail = void 0;
const typeorm_1 = require("typeorm");
const Mail_1 = require("./entity/Mail");
const DataSource_1 = require("./DataSource");
class SQLDB_Mail {
    /**
     * @en Get a single mail by its ID
     * @zh 通过邮件ID获取单个邮件
     */
    async getMail(mailId) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        const mail = await mailRepository.findOneBy({ id: mailId });
        if (!mail) {
            throw "can't find mail with id:" + mailId;
        }
        const info = {
            mailId: mailId,
            uid: mail.uid,
            from: mail.from,
            time: mail.timestamp,
            title: mail.title,
            content: mail.content,
            state: mail.state,
        };
        return info;
    }
    async getMails(uid) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        let mails = await mailRepository.findBy({ uid: uid, state: (0, typeorm_1.Not)(Mail_1.MailState.DELETED) });
        return mails.map((mail) => {
            return {
                mailId: "" + mail.id,
                uid: mail.uid,
                from: mail.from,
                time: mail.timestamp,
                title: mail.title,
                content: mail.content,
                state: mail.state,
            };
        });
    }
    async getMailMany(mailIds) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        if (!mailIds) {
            return [];
        }
        let ids = mailIds.map((id) => {
            return parseInt(id);
        });
        let mails = await mailRepository.findBy({ id: (0, typeorm_1.In)(ids) });
        return mails.map((mail) => {
            return {
                mailId: "" + mail.id,
                uid: mail.uid,
                from: mail.from,
                time: mail.timestamp,
                title: mail.title,
                content: mail.content,
                state: mail.state,
            };
        });
    }
    async insterNewMail(from, to, title, content) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        let now = new Date();
        let mail = new Mail_1.Mail();
        mail.uid = to;
        mail.from = from;
        mail.title = title;
        mail.content = content;
        mail.time = now;
        mail.state = Mail_1.MailState.UNREAD;
        const r = await mailRepository.insert(mail);
        return {
            mailId: "" + mail.id,
            uid: mail.uid,
            from: mail.from,
            time: mail.timestamp,
            title: mail.title,
            content: mail.content,
            state: mail.state,
        };
    }
    async deleteMail(mailId) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        const m = {
            state: Mail_1.MailState.DELETED
        };
        await mailRepository.update({ id: mailId }, m);
        return true;
    }
    async deleteMailMany(mailIds) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        const m = {
            state: Mail_1.MailState.DELETED
        };
        await mailRepository.update(mailIds, m);
        return true;
    }
    async markAsRead(mailId) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        const m = {
            state: Mail_1.MailState.READED
        };
        await mailRepository.update(mailId, m);
        return true;
    }
    async markAsReadMany(mailIds) {
        const mailRepository = DataSource_1.AppDataSource.getRepository(Mail_1.Mail);
        if (!mailIds) {
            return true;
        }
        const m = {
            state: Mail_1.MailState.READED
        };
        await mailRepository.update(mailIds, m);
        return true;
    }
}
exports.SQLDB_Mail = SQLDB_Mail;
