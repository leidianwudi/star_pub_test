"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepReportDayPerson_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
const typeorm_1 = require("typeorm");
class RepReportDayPerson_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.account !== undefined) {
            where['account'] = queryParams.account;
        }
        if (queryParams.day_min !== undefined) {
            where['day'] = (0, typeorm_1.Between)(queryParams.day_min, queryParams.day_max);
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepReportDayPerson_ = RepReportDayPerson_;
//# sourceMappingURL=RepReportDayPerson_.js.map