"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepActSignWeek_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepActSignWeek_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.item_code !== undefined) {
            where['item_code'] = queryParams.item_code;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepActSignWeek_ = RepActSignWeek_;
//# sourceMappingURL=RepActSignWeek_.js.map