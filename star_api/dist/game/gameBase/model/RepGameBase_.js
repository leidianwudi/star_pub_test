"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepGameBase_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepGameBase_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.code !== undefined) {
            where['code'] = queryParams.code;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: ['gameBar', 'gameType', 'reportDayGame', 'pokerRoom', 'gameOddsExt', 'reportDayGameUtc'],
        });
        return { list, total };
    }
}
exports.RepGameBase_ = RepGameBase_;
//# sourceMappingURL=RepGameBase_.js.map