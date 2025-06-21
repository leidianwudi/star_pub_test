"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepRankSettingAward_ = void 0;
const RepositorySuper_1 = require("../../../../common/RepositorySuper");
class RepRankSettingAward_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.rank_type !== undefined) {
            where['rank_type'] = queryParams.rank_type;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepRankSettingAward_ = RepRankSettingAward_;
//# sourceMappingURL=RepRankSettingAward_.js.map