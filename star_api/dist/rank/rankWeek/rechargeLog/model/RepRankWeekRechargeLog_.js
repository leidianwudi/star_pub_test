"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepRankWeekRechargeLog_ = void 0;
const RepositorySuper_1 = require("../../../../common/RepositorySuper");
class RepRankWeekRechargeLog_ extends RepositorySuper_1.RepositorySuper {
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
exports.RepRankWeekRechargeLog_ = RepRankWeekRechargeLog_;
//# sourceMappingURL=RepRankWeekRechargeLog_.js.map