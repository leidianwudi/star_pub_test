"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepGameOdds_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepGameOdds_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.game_type_code !== undefined) {
            where['game_type_code'] = queryParams.game_type_code;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: ['gameType'],
        });
        return { list, total };
    }
}
exports.RepGameOdds_ = RepGameOdds_;
//# sourceMappingURL=RepGameOdds_.js.map