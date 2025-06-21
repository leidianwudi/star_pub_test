"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepRankDayCoin_ = void 0;
const RepositorySuper_1 = require("../../../../common/RepositorySuper");
class RepRankDayCoin_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.account !== undefined) {
            where['account'] = queryParams.account;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepRankDayCoin_ = RepRankDayCoin_;
//# sourceMappingURL=RepRankDayCoin_.js.map