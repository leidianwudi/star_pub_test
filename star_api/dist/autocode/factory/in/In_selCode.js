"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In_selCode = void 0;
const ToolFile_1 = require("../../../common/ToolFile");
const ToolStr_1 = require("../../../common/ToolStr");
const ToolTrans_1 = require("../../../common/ToolTrans");
class In_selCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.in_selName = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\in\\${this.m_table.in_selName}.ts`;
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const selectEntityName = this.m_table.in_selName;
        const tableComment = this.m_table.tableComment;
        const tableName = this.m_table.param.tableName;
        let code = `//此代码为AutoCode框架生成，请勿手动修改\n` +
            `import { In_BasePage } from 'src/common/Interface/In_BasePage';\n` +
            `import { IsOptional, IsInt, IsString, IsBoolean } from 'class-validator';\n` +
            `import { ApiProperty } from '@nestjs/swagger';\n` +
            `import { Type } from 'class-transformer';\n\n` +
            `//${tableComment}(${tableName})实体\n` +
            `export class ${selectEntityName} extends In_BasePage {\n` +
            this.outEntity() +
            `}`;
        this.line(code);
        console.log(`✅ 实体类已生成: ${this.m_path}`);
    }
    getClassName() {
        return `In_Sel` + ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
    }
    outEntity() {
        let str = "";
        const likeCols = this.m_table.param.selColsLike || [];
        const equalCols = this.m_table.param.selCols || [];
        const gapCols = this.m_table.param.selColsGap || [];
        for (let i = 0; i < this.m_table.columns.length; i++) {
            const col = this.m_table.columns[i];
            const tsType = ToolTrans_1.ToolTrans.getTsType(col.dataType);
            const comment = col.columnComment || '';
            const isOptional = true;
            const name = col.columnName;
            const validators = [];
            const isLike = likeCols.includes(name);
            const isEqual = equalCols.includes(name);
            const isGap = gapCols.includes(name);
            if (!isLike && !isEqual && !isGap)
                continue;
            str += `\t@ApiProperty({ description: "${comment}", required: false })\n`;
            if (isOptional)
                str += `\t@IsOptional()\n`;
            if (tsType === 'string') {
                str += `\t@IsString()\n`;
            }
            else if (tsType === 'number') {
                str += `\t@IsInt({ message: "${name}必须是整数" })\n`;
                str += `\t@Type(() => Number)\n`;
            }
            else if (tsType === 'boolean') {
                str += `\t@IsBoolean()\n`;
                str += `\t@Type(() => Boolean)\n`;
            }
            else if (tsType === 'Date') {
                str += `\t@Type(() => Date)\n`;
            }
            str += `\t${name}?: ${tsType};\n\n`;
            if (isGap) {
                str += `\t@ApiProperty({ description: "${comment}（起始）", required: false })\n`;
                str += `\t@IsOptional()\n`;
                str += `\t@Type(() => Date)\n`;
                str += `\t${name}_min?: Date;\n\n`;
                str += `\t@ApiProperty({ description: "${comment}（结束）", required: false })\n`;
                str += `\t@IsOptional()\n`;
                str += `\t@Type(() => Date)\n`;
                str += `\t${name}_max?: Date;\n\n`;
            }
        }
        return str;
    }
    line(str) {
        ToolFile_1.ToolFile.line(str, this.m_path);
    }
}
exports.In_selCode = In_selCode;
//# sourceMappingURL=In_selCode.js.map