"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerCode = void 0;
const ToolFile_1 = require("../../common/ToolFile");
const ToolStr_1 = require("../../common/ToolStr");
class ControllerCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.controllerName = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\${this.m_table.controllerName}111.ts`;
    }
    outCode() {
        const isFile = ToolFile_1.ToolFile.fileExists(this.m_path);
        if (isFile) {
            console.log(`文件已存在: ${this.m_path}`);
            console.log(`请删除后重新生成: ${this.m_path}`);
            return;
        }
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const className = this.m_table.controllerName;
        const serviceName = this.m_table.serviceName;
        const importEn = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        const code = `// 此代码为AutoCode框架生成，可以手动修改\n` +
            `import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';\n` +
            `import { ${importEn}Service } from './${importEn}Service';\n` +
            `import { ApiTags } from '@nestjs/swagger';\n` +
            `import { ${className}_ } from './${className}_';\n` +
            `@ApiTags('${className}')\n` +
            `@Controller('${this.m_table.param.tableName}')\n` +
            `export class ${className} extends ${className}_ {\n` +
            `  constructor(service: ${importEn}Service) { super(service) }\n\n` +
            `}`;
        ToolFile_1.ToolFile.line(code, this.m_path);
    }
    getClassName() {
        return ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName) + "Controller";
    }
}
exports.ControllerCode = ControllerCode;
//# sourceMappingURL=ControllerCode.js.map