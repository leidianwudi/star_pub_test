"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepActSignWeekLog_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
const typeorm_1 = require("typeorm");
class RepActSignWeekLog_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.item_code !== undefined) {
            where['item_code'] = queryParams.item_code;
        }
        if (queryParams.account !== undefined) {
            where['account'] = queryParams.account;
        }
        if (queryParams.sn !== undefined) {
            where['sn'] = queryParams.sn;
        }
        if (queryParams.date_min !== undefined) {
            where['date'] = (0, typeorm_1.Between)(queryParams.date_min, queryParams.date_max);
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepActSignWeekLog_ = RepActSignWeekLog_;
//# sourceMappingURL=RepActSignWeekLog_.js.map