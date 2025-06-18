"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSlotsSettings = void 0;
class DbSlotsSettings {
    constructor(db) {
        this.db = db;
    }
    async findAndCountSp(pageNo, pageSize) {
        const skip = (pageNo - 1) * pageSize;
        const take = pageSize;
        const [list, total] = await this.db.findAndCount({
            skip,
            take
        });
        return { list, total };
    }
}
exports.DbSlotsSettings = DbSlotsSettings;
//# sourceMappingURL=DbSlotsSettings.js.map