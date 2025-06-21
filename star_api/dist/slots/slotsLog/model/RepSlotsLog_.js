"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepSlotsLog_ = void 0;
const RepositorySuper_1 = require("../../../common/RepositorySuper");
class RepSlotsLog_ extends RepositorySuper_1.RepositorySuper {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async findAndCount(queryParams) {
        const where = {};
        if (queryParams.sn !== undefined) {
            where['sn'] = queryParams.sn;
        }
        if (queryParams.sn_ext !== undefined) {
            where['sn_ext'] = queryParams.sn_ext;
        }
        if (queryParams.user_account !== undefined) {
            where['user_account'] = queryParams.user_account;
        }
        if (queryParams.game_code !== undefined) {
            where['game_code'] = queryParams.game_code;
        }
        if (queryParams.create_at !== undefined) {
            where['create_at'] = queryParams.create_at;
        }
        const { list, total } = await this.findAndCountSp(queryParams.page, queryParams.pageNum, {
            where,
            relations: [],
        });
        return { list, total };
    }
}
exports.RepSlotsLog_ = RepSlotsLog_;
//# sourceMappingURL=RepSlotsLog_.js.map