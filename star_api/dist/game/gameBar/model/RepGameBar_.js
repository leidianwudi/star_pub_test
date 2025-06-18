"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepGameBar_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepGameBar_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.game_code !== undefined) {
            where['game_code'] = queryParams.game_code;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: ['gameBase'],
        });
        return { list, total };
    }
}
exports.RepGameBar_ = RepGameBar_;
//# sourceMappingURL=RepGameBar_.js.map