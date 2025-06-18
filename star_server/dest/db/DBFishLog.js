"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbFishLog = exports.DBFishLog = void 0;
const FishLog_1 = require("./entity/FishLog");
const DataSource_1 = require("./DataSource");
class DBFishLog {
    async insertFishLog(r) {
        let repo = DataSource_1.AppDataSource.getRepository(FishLog_1.FishLog);
        await repo.insert(r);
    }
}
exports.DBFishLog = DBFishLog;
exports.dbFishLog = new DBFishLog();
