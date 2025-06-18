"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Out_CommonCode = void 0;
const ToolFile_1 = require("../../../common/ToolFile");
const ToolStr_1 = require("../../../common/ToolStr");
const ToolTrans_1 = require("../../../common/ToolTrans");
class Out_CommonCode {
    constructor(table) {
        this.m_table = table;
        const baseName = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        this.m_className = `Out_${baseName}`;
        this.m_path = `src\\${this.m_table.param.modelName}\\out\\${this.m_className}.ts`;
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        let code = `//此代码为AutoCode框架生成，请勿手动修改\n` +
            `import { ApiProperty } from '@nestjs/swagger';\n\n` +
            `export class ${this.m_className} {\n` +
            this.outEntityProperties() +
            `}`;
        this.line(code);
        console.log(`out已生成: ${this.m_path}`);
    }
    line(str) {
        ToolFile_1.ToolFile.line(str, this.m_path);
    }
    outEntityProperties() {
        let propertiesStr = "";
        if (!this.m_table || !this.m_table.columns)
            return propertiesStr;
        for (let i = 0; i < this.m_table.columns.length; i++) {
            const col = this.m_table.columns[i];
            const tsType = ToolTrans_1.ToolTrans.getTsType(col.dataType);
            const comment = col.columnComment || col.columnName;
            propertiesStr += `\t@ApiProperty({ description: "${comment}" })\n`;
            propertiesStr += `\t${col.columnName}?: ${tsType};\n\n`;
        }
        return propertiesStr;
    }
}
exports.Out_CommonCode = Out_CommonCode;
//# sourceMappingURL=Out_CommonCode.js.map