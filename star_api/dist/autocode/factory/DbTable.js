"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbColumnEn = exports.DbTable = void 0;
const ToolStr_1 = require("../../common/ToolStr");
const AutoParam_1 = require("../params/AutoParam");
class DbTable {
    constructor(param, tableComment, rawColumns) {
        this.param = param;
        this.tableComment = tableComment;
        this.columns = rawColumns.map(col => new DbColumnEn(col.columnName, col.dataType, col.columnType, col.isNullable, col.columnDefault, col.columnComment, col.columnKey));
        const name = ToolStr_1.ToolStr.line2UpLow(param.tableName);
        this.serviceName = `${name}Service`;
        this.controllerName = `${name}Controller`;
        this.moduleName = `${name}Module`;
        this.repositoryName = `${name}Repository`;
        this.en_Name = `En_${name}`;
        this.in_insName = `In_${name}Dto`;
        this.in_selName = `In_${name}SelDto`;
        this.out_selName = `Out_${name}SelDto`;
        this.model_name = `Rep${name}_`;
        this.model_c_name = `Rep${name}`;
        const joinTableArr = param.joinTable;
        if (joinTableArr) {
            for (let i = 0; i < joinTableArr.length; i++) {
                const type = joinTableArr[i].joinType;
                if (type === AutoParam_1.JoinType.ManyToMany || type === AutoParam_1.JoinType.OneToMany) {
                    this.param.joinTable[i].isArray = true;
                }
                else {
                    this.param.joinTable[i].isArray = false;
                }
            }
        }
    }
}
exports.DbTable = DbTable;
class DbColumnEn {
    constructor(columnName, dataType, columnType, isNullable, columnDefault, columnComment, columnKey) {
        this.columnName = columnName;
        this.dataType = dataType;
        this.columnType = columnType;
        this.isNullable = isNullable;
        this.columnDefault = columnDefault;
        this.columnComment = columnComment;
        this.name = columnName;
        this.type = this.mapDbTypeToTsType(dataType);
        this.description = columnComment;
        this.example = this.generateExampleValue(dataType);
        this.isPrimaryKey = !!(columnKey && columnKey.toUpperCase() === 'PRI');
    }
    mapDbTypeToTsType(dbType) {
        if (dbType.includes('int') || dbType.includes('decimal') || dbType.includes('float') || dbType.includes('double')) {
            return 'number';
        }
        if (dbType.includes('char') || dbType.includes('text') || dbType.includes('json')) {
            return 'string';
        }
        if (dbType.includes('date') || dbType.includes('time') || dbType.includes('timestamp')) {
            return 'Date';
        }
        if (dbType.includes('bool')) {
            return 'boolean';
        }
        return 'any';
    }
    generateExampleValue(dbType) {
        if (dbType.includes('int') || dbType.includes('decimal') || dbType.includes('float') || dbType.includes('double')) {
            return 1;
        }
        if (dbType.includes('char') || dbType.includes('text')) {
            return '示例文本';
        }
        if (dbType.includes('date') || dbType.includes('time') || dbType.includes('timestamp')) {
            return new Date().toISOString();
        }
        if (dbType.includes('bool')) {
            return true;
        }
        return null;
    }
}
exports.DbColumnEn = DbColumnEn;
//# sourceMappingURL=DbTable.js.map