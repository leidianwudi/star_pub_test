"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepGameOddsExt_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepGameOddsExt_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.game_type_code !== undefined) {
            where['game_type_code'] = queryParams.game_type_code;
        }
        if (queryParams.game_code !== undefined) {
            where['game_code'] = queryParams.game_code;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: ['gameType', 'gameBase'],
        });
        return { list, total };
    }
}
exports.RepGameOddsExt_ = RepGameOddsExt_;
//# sourceMappingURL=RepGameOddsExt_.js.map