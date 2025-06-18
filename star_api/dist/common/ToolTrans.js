"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolTrans = void 0;
class ToolTrans {
    static arr2En(ctor, arr) {
        let t = new ctor();
        let a;
        return t;
    }
    static getTsType(dbType) {
        switch (dbType.toLowerCase()) {
            case 'int':
            case 'bigint':
            case 'float':
            case 'double':
            case 'decimal':
                return 'number';
            case 'datetime':
            case 'timestamp':
            case 'date':
                return 'Date';
            case 'boolean':
            case 'tinyint':
                return 'number';
            default:
                return 'string';
        }
    }
    static getColumnType(col) {
        switch (col.dataType.toLowerCase()) {
            case 'varchar':
                return 'varchar';
            case 'int':
                return 'int';
            case 'bigint':
                return 'bigint';
            case 'float':
                return 'float';
            case 'double':
                return 'double';
            case 'decimal':
                return 'decimal';
            case 'datetime':
            case 'timestamp':
            case 'date':
                return 'date';
            case 'boolean':
                return 'boolean';
            case 'tinyint':
                return 'tinyint';
            default:
                return 'string';
        }
    }
}
exports.ToolTrans = ToolTrans;
//# sourceMappingURL=ToolTrans.js.map