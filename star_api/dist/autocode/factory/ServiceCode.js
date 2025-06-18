"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCode = void 0;
const ToolFile_1 = require("../../common/ToolFile");
const ToolStr_1 = require("../../common/ToolStr");
class ServiceCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.serviceName = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\${this.m_table.serviceName}.ts`;
    }
    outCode() {
        const isFile = ToolFile_1.ToolFile.fileExists(this.m_path);
        if (isFile) {
            console.log(`文件已存在: ${this.m_path}`);
            return;
        }
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const className = this.m_table.serviceName;
        const importEn = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        const code = `// 此代码为AutoCode框架生成，可以手动修改\n` +
            `import { Injectable } from '@nestjs/common';\n` +
            `import { InjectRepository } from '@nestjs/typeorm';\n` +
            `import { Repository } from 'typeorm';\n` +
            `import { ${this.m_table.en_Name} } from './entities/${this.m_table.en_Name}';\n` +
            `import { ${className}_ } from './${className}_';\n` +
            `@Injectable()\n` +
            `export class ${className} extends ${className}_ {\n` +
            `  constructor(\n` +
            `    @InjectRepository(${this.m_table.en_Name})\n` +
            `    ${this.m_table.en_Name}Rep: Repository<${this.m_table.en_Name}>,\n` +
            `  ) {\n` +
            `    super(${this.m_table.en_Name}Rep);\n` +
            `  }\n\n` +
            `}\n`;
        ToolFile_1.ToolFile.line(code, this.m_path);
    }
    getClassName() {
        return ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName) + "Service";
    }
}
exports.ServiceCode = ServiceCode;
//# sourceMappingURL=ServiceCode.js.map