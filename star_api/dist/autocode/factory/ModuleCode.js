"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleCode = void 0;
const ToolFile_1 = require("../../common/ToolFile");
const ToolStr_1 = require("../../common/ToolStr");
class ModuleCode {
    constructor(table) {
        this.m_table = table;
        const tablename = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        const moduleClassName = tablename + 'Module';
        this.m_path = `src/${this.m_table.param.modelName}/${moduleClassName}.ts`;
    }
    outCode() {
        const tablename = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        const entityName = 'En_' + tablename;
        const serviceName = tablename + 'Service';
        const controllerName = tablename + 'Controller';
        const moduleClassName = tablename + 'Module';
        const code = `// 此代码为 AutoCode 框架生成，请勿手动修改\n` +
            `import { Module } from '@nestjs/common';\n` +
            `import { TypeOrmModule } from '@nestjs/typeorm';\n` +
            `import { ${serviceName} } from './${serviceName}';\n` +
            `import { ${controllerName} } from './${controllerName}';\n` +
            `import { ${entityName} } from './entities/${entityName}';\n\n` +
            `@Module({\n` +
            `  imports: [TypeOrmModule.forFeature([${entityName}])],\n` +
            `  controllers: [${controllerName}],\n` +
            `  providers: [${serviceName}],\n` +
            `  exports: [${serviceName}],\n` +
            `})\n` +
            `export class ${moduleClassName} {}\n`;
        ToolFile_1.ToolFile.clearFile(this.m_path);
        ToolFile_1.ToolFile.line(code, this.m_path);
        console.log(`✅ 模块类已生成: ${this.m_path}`);
    }
}
exports.ModuleCode = ModuleCode;
//# sourceMappingURL=ModuleCode.js.map