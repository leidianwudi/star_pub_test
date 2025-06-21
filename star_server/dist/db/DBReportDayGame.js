"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbReportDayGame = exports.DBReportDayGame = void 0;
const ReportDayGame_1 = require("./entity/ReportDayGame");
const DataSource_1 = require("./DataSource");
class DBReportDayGame {
    async insertReportDayGame(r) {
        let repo = DataSource_1.AppDataSource.getRepository(ReportDayGame_1.ReportDayGame);
        await repo.insert(r);
    }
}
exports.DBReportDayGame = DBReportDayGame;
exports.dbReportDayGame = new DBReportDayGame();
