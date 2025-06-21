"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepRankSettingAi_ = void 0;
const RepositorySuper_1 = require("../../../../common/RepositorySuper");
class RepRankSettingAi_ extends RepositorySuper_1.RepositorySuper {
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
exports.RepRankSettingAi_ = RepRankSettingAi_;
//# sourceMappingURL=RepRankSettingAi_.js.map