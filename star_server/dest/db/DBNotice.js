"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbNotice = exports.DBNotice = void 0;
const Notice_1 = require("./entity/Notice");
const DataSource_1 = require("./DataSource");
class DBNotice {
    async getNotices() {
        const noticeRepo = DataSource_1.AppDataSource.getRepository(Notice_1.Notice);
        let notices = await noticeRepo.findBy({});
        return notices;
    }
    //called in unittest
    async insertNotice(title, content, image) {
        if (!content && !image) {
            throw "Can't insert empty notice.";
        }
        const noticeRepo = DataSource_1.AppDataSource.getRepository(Notice_1.Notice);
        let notice = new Notice_1.Notice();
        notice.title = title;
        notice.content = content;
        notice.image = image;
        await noticeRepo.insert(notice);
    }
}
exports.DBNotice = DBNotice;
exports.dbNotice = new DBNotice();
