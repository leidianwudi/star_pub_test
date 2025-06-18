"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepNotice_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
const typeorm_1 = require("typeorm");
class RepNotice_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.title !== undefined) {
            where['title'] = queryParams.title;
        }
        if (queryParams.content !== undefined) {
            where['content'] = (0, typeorm_1.Like)(`%${queryParams.content}%`);
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepNotice_ = RepNotice_;
//# sourceMappingURL=RepNotice_.js.map