"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepGameType_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepGameType_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.type_code !== undefined) {
            where['type_code'] = queryParams.type_code;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: ['gameBases', 'reportDayGame', 'gameOdds', 'gameOddsExt'],
        });
        return { list, total };
    }
}
exports.RepGameType_ = RepGameType_;
//# sourceMappingURL=RepGameType_.js.map