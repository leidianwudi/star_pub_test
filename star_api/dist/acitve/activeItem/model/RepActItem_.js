"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepActItem_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepActItem_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepActItem_ = RepActItem_;
//# sourceMappingURL=RepActItem_.js.map