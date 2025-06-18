"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPokerLog = exports.DBPokerLog = void 0;
const PokerLog_1 = require("./entity/PokerLog");
const DataSource_1 = require("./DataSource");
class DBPokerLog {
    async insertPokerLog(r) {
        let repo = DataSource_1.AppDataSource.getRepository(PokerLog_1.PokerLog);
        await repo.insert(r);
    }
}
exports.DBPokerLog = DBPokerLog;
exports.dbPokerLog = new DBPokerLog();
