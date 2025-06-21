"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSlotsLog = exports.DBSlotsLog = void 0;
const SlotsLog_1 = require("./entity/SlotsLog");
const DataSource_1 = require("./DataSource");
class DBSlotsLog {
    async insertSlotsLog(r) {
        let repo = DataSource_1.AppDataSource.getRepository(SlotsLog_1.SlotsLog);
        await repo.insert(r);
    }
}
exports.DBSlotsLog = DBSlotsLog;
exports.dbSlotsLog = new DBSlotsLog();
