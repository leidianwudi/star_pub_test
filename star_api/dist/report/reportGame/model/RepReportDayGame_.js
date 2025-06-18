"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepReportDayGame_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
const typeorm_1 = require("typeorm");
class RepReportDayGame_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.game_code !== undefined) {
            where['game_code'] = queryParams.game_code;
        }
        if (queryParams.type_code !== undefined) {
            where['type_code'] = queryParams.type_code;
        }
        if (queryParams.day_min !== undefined) {
            where['day'] = (0, typeorm_1.Between)(queryParams.day_min, queryParams.day_max);
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: ['gameBase', 'gameType'],
        });
        return { list, total };
    }
}
exports.RepReportDayGame_ = RepReportDayGame_;
//# sourceMappingURL=RepReportDayGame_.js.map