"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In_insCode = void 0;
const ToolFile_1 = require("../../../common/ToolFile");
const ToolStr_1 = require("../../../common/ToolStr");
const ToolTrans_1 = require("../../../common/ToolTrans");
class In_insCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.in_insName = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\in\\${this.m_table.in_insName}.ts`;
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const inDtoName = this.m_table.in_insName;
        const tableComment = this.m_table.tableComment || this.m_table.param.tableName;
        const tableName = this.m_table.param.tableName;
        let code = `//此代码为AutoCode框架生成，请勿手动修改\n` +
            `import { ApiProperty } from '@nestjs/swagger';\n` +
            `import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';\n` +
            `//${tableComment}(${tableName})实体\n` +
            `export class ${inDtoName} {\n` +
            this.outEntityProperties() +
            `}`;
        this.line(code);
        console.log(`✅ 实体类已生成222: ${this.m_path}`);
    }
    getClassName() {
        return `In_Ins` + ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
    }
    outEntityProperties() {
        let propertiesStr = "";
        for (let i = 0; i < this.m_table.columns.length; i++) {
            const col = this.m_table.columns[i];
            if ((col.isPrimaryKey && col.isAutoIncrement) ||
                ['create_time', 'created_at', 'update_time', 'updated_at', 'delete_time', 'deleted_at'].includes(col.columnName.toLowerCase())) {
                continue;
            }
            const tsType = ToolTrans_1.ToolTrans.getTsType(col.dataType);
            const comment = col.columnComment || col.columnName;
            const isOptional = col.isNullable === 'YES' || col.isNullable === 'yes';
            propertiesStr += `\t@ApiProperty({ description: "${comment}"${isOptional ? ', required: false' : ''} })\n`;
            if (isOptional) {
                propertiesStr += `\t@IsOptional()\n`;
            }
            else {
            }
            propertiesStr += `\t${col.columnName}${isOptional ? '?' : ''}: ${tsType};\n\n`;
        }
        return propertiesStr;
    }
    line(str) {
        ToolFile_1.ToolFile.line(str, this.m_path);
    }
}
exports.In_insCode = In_insCode;
//# sourceMappingURL=In_insCode.js.map