"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepCommonCode = void 0;
const ToolFile_1 = require("../../../common/ToolFile");
const ToolStr_1 = require("../../../common/ToolStr");
class RepCommonCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.model_c_name = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\model\\${this.m_table.model_c_name}.ts`;
    }
    outCode() {
        const isFile = ToolFile_1.ToolFile.fileExists(this.m_path);
        console.log(`生成代码: ${this.m_path}`);
        if (isFile) {
            return;
        }
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const selectEntityName = this.m_table.model_c_name;
        const entityName = this.m_table.en_Name;
        let code = `//此代码为AutoCode框架生成，可以手动修改\n` +
            `import { Repository } from "typeorm";\n` +
            `import { ${entityName} } from '../entities/${entityName}';\n` +
            `import { ${selectEntityName}_ } from './${selectEntityName}_';\n\n` +
            `export class ${selectEntityName} extends ${selectEntityName}_ {\n` +
            `  public readonly db: Repository<${entityName}>;\n` +
            `  constructor(db: Repository<${entityName}>) {\n` +
            `       super(db);\n` +
            `       this.db = db;\n` +
            `  }\n` +
            `}\n`;
        this.line(code);
        console.log(`out已生成: ${this.m_path}`);
    }
    getClassName() {
        return `Rep` + ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
    }
    line(str) {
        ToolFile_1.ToolFile.line(str, this.m_path);
    }
}
exports.RepCommonCode = RepCommonCode;
//# sourceMappingURL=RepCommonCode.js.map