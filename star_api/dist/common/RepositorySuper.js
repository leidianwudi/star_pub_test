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
}
exports.RepositorySuper = RepositorySuper;
//# sourceMappingURL=RepositorySuper.js.map