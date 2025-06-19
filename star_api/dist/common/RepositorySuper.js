"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorySuper = void 0;
class RepositorySuper {
    constructor(db) {
        this.db = db;
    }
    async findAndCountSp(pageNo, pageSize, options) {
        const skip = (pageNo - 1) * pageSize;
        const take = pageSize;
        const [list, total] = await this.db.findAndCount({
            ...options,
            skip,
            take
        });
        return { list, total };
    }
    async findAndCountGroupBySp(builder, pageNo, pageSize) {
        const skip = (pageNo - 1) * pageSize;
        const take = pageSize;
        const paged = builder.clone().skip(skip).take(take);
        const totalBuilder = builder.clone().offset(undefined).limit(undefined);
        const list = await paged.getRawMany();
        const total = (await totalBuilder.getRawMany()).length;
        return {
            list,
            total,
            totalPages: Math.ceil(total / pageSize),
        };
    }
}
exports.RepositorySuper = RepositorySuper;
//# sourceMappingURL=RepositorySuper.js.map