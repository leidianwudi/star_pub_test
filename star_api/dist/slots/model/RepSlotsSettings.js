"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSlotsSettings = void 0;
const typeorm_1 = require("typeorm");
class DbSlotsSettings extends typeorm_1.Repository {
    async findAndCountSp11(pageNo, pageSize) {
        const skip = (pageNo - 1) * pageSize;
        const take = pageSize;
        const [list, total] = await super.findAndCount({
            skip,
            take
        });
        return { list, total };
    }
}
exports.DbSlotsSettings = DbSlotsSettings;
//# sourceMappingURL=RepSlotsSettings.js.map