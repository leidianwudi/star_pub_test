"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepRankDayWinLog_ = void 0;
const RepositorySuper_1 = require("../../../../common/RepositorySuper");
class RepRankDayWinLog_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.account !== undefined) {
            where['account'] = queryParams.account;
        }
        if (queryParams.sn !== undefined) {
            where['sn'] = queryParams.sn;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepRankDayWinLog_ = RepRankDayWinLog_;
//# sourceMappingURL=RepRankDayWinLog_.js.map