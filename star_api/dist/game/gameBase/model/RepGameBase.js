"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepGameBase = void 0;
const RepGameBase_1 = require("./RepGameBase_");
class RepGameBase extends RepGameBase_1.RepGameBase_ {
    constructor(db) {
        super(db);
        this.db = db;
    }
}
exports.RepGameBase = RepGameBase;
//# sourceMappingURL=RepGameBase.js.map