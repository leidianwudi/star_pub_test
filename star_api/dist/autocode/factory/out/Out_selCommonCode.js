"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Out_selCommonCode = void 0;
const ToolFile_1 = require("../../../common/ToolFile");
const ToolStr_1 = require("../../../common/ToolStr");
class Out_selCommonCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.out_selName = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\out\\${this.m_table.out_selName}.ts`;
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const entityName = this.m_table.en_Name;
        const className = this.m_table.out_selName;
        let code = `//此代码为AutoCode框架生成，请勿手动修改\n` +
            `import { ApiProperty } from '@nestjs/swagger';\n` +
            `import { Out_BasePage } from 'src/common/Interface/Out_BasePage';\n` +
            `import { ${entityName} } from '../entities/${entityName}';\n\n` +
            `export class ${className} extends Out_BasePage<${entityName}> {}\n`;
        ToolFile_1.ToolFile.line(code, this.m_path);
        console.log(`out已生成: ${this.m_path}`);
    }
    getClassName() {
        return `Out_Sel` + ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
    }
}
exports.Out_selCommonCode = Out_selCommonCode;
//# sourceMappingURL=Out_selCommonCode.js.map