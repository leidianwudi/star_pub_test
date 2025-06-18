"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepSystemTask_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
const typeorm_1 = require("typeorm");
class RepSystemTask_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.code !== undefined) {
            where['code'] = queryParams.code;
        }
        if (queryParams.create_at_min !== undefined) {
            where['create_at'] = (0, typeorm_1.Between)(queryParams.create_at_min, queryParams.create_at_max);
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepSystemTask_ = RepSystemTask_;
//# sourceMappingURL=RepSystemTask_.js.map