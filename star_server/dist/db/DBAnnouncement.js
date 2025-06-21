"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbAnnouncement = exports.DBAnnouncement = void 0;
const Announcement_1 = require("./entity/Announcement");
const DataSource_1 = require("./DataSource");
class DBAnnouncement {
    async getAnnouncement(game) {
        let repo = DataSource_1.AppDataSource.getRepository(Announcement_1.Announcement);
        const a = await repo.findOneBy({ game: game });
        return a;
    }
    async insertAnnouncement(game, content) {
        let repo = DataSource_1.AppDataSource.getRepository(Announcement_1.Announcement);
        let a = new Announcement_1.Announcement();
        a.game = game;
        a.content = content;
        const r = await repo.upsert(a, ["game"]);
        console.log("upsert result:", r);
    }
}
exports.DBAnnouncement = DBAnnouncement;
exports.dbAnnouncement = new DBAnnouncement();
