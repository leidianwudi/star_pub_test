"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceParentCode = void 0;
const ToolFile_1 = require("../../common/ToolFile");
const ToolStr_1 = require("../../common/ToolStr");
class ServiceParentCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.serviceName = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\${this.m_table.serviceName}_.ts`;
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const className = this.m_table.serviceName;
        const importEn = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        const code = `// 此代码为AutoCode框架生成，请勿手动修改\n` +
            `import { Injectable } from '@nestjs/common';\n` +
            `import { InjectRepository } from '@nestjs/typeorm';\n` +
            `import { Repository, Like, FindOptionsWhere, Between, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';\n` +
            `import { HttpException } from '@nestjs/common';\n` +
            `import { ${this.m_table.en_Name} } from './entities/${this.m_table.en_Name}';\n` +
            `import { In_Ins${importEn} } from './in/In_Ins${importEn}';\n` +
            `import { In_Sel${importEn} } from './in/In_Sel${importEn}';\n` +
            `import { Out_Sel${importEn} } from './out/Out_Sel${importEn}';\n` +
            `import { Rep${importEn} } from './model/Rep${importEn}';\n` +
            `@Injectable()\n` +
            `export class ${className}_ {\n` +
            `  protected rep: Rep${importEn};\n` +
            `  constructor(\n` +
            `    @InjectRepository(${this.m_table.en_Name})\n` +
            `    protected ${this.m_table.en_Name}Rep: Repository<${this.m_table.en_Name}>,\n` +
            `  ) {\n` +
            `    this.rep = new Rep${importEn}(${this.m_table.en_Name}Rep);\n` +
            `  }\n\n` +
            `  async select(queryParams: In_Sel${importEn}): Promise<Out_Sel${importEn}> {\n` +
            `    const { list, total} = await this.rep.findAndCount(queryParams);\n` +
            `    return {\n` +
            `      list: list,\n` +
            `      page: queryParams.page,\n` +
            `      pageNum: queryParams.pageNum,\n` +
            `      total,\n` +
            `      totalPages: Math.ceil(total / queryParams.pageNum),\n` +
            `    };\n` +
            `  }\n\n` +
            `  async selectById(id: number): Promise<${this.m_table.en_Name}> {\n` +
            `    const record = await this.rep.db.findOne({ where: { id } });\n` +
            `    if (!record) {\n` +
            `      throw new HttpException('记录未找到', 404);\n` +
            `    }\n` +
            `    return record;\n` +
            `  }\n\n` +
            `  async insert(dto: In_Ins${importEn}): Promise<any> {\n` +
            `    return await this.rep.db.insert(dto);\n` +
            `  }\n\n` +
            `  async update(dto: In_Ins${importEn}): Promise<any> {\n` +
            `    await this.rep.db.update(dto.id, dto);\n` +
            `    return '操作成功';\n` +
            `  }\n\n` +
            `  async delete(ids: number[]): Promise<any> {\n` +
            `    await this.rep.db.delete(ids);\n` +
            `    return '操作成功';\n` +
            `  }\n` +
            `}\n`;
        ToolFile_1.ToolFile.line(code, this.m_path);
    }
    getClassName() {
        return ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName) + "Service";
    }
    getRelations() {
        console.log('JoinTable config:', JSON.stringify(this.m_table.param.joinTable, null, 2));
        if (!this.m_table.param.joinTable || this.m_table.param.joinTable.length === 0) {
            return '[]';
        }
        console.log('JoinTable properties:', this.m_table.param.joinTable.map(j => j.joinEnClassPro));
        const relationNames = this.m_table.param.joinTable
            .map(join => {
            const prop = join.joinEnClassPro;
            console.log('Processing join:', { join, property: prop });
            return `'${prop}'`;
        })
            .filter(Boolean);
        console.log('Generated relation names:', relationNames);
        return `[${relationNames.join(', ')}]`;
    }
}
exports.ServiceParentCode = ServiceParentCode;
//# sourceMappingURL=ServiceParentCode.js.map