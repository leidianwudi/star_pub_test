"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbReportDayPerson = exports.DBReportDayPerson = void 0;
const ReportDayPerson_1 = require("./entity/ReportDayPerson");
const DataSource_1 = require("./DataSource");
class DBReportDayPerson {
    async insertReportDayPerson(r) {
        let repo = DataSource_1.AppDataSource.getRepository(ReportDayPerson_1.ReportDayPerson);
        await repo.insert(r);
    }
}
exports.DBReportDayPerson = DBReportDayPerson;
exports.dbReportDayPerson = new DBReportDayPerson();
