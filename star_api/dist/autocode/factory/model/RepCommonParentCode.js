"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepCommonParentCode = void 0;
const ToolFile_1 = require("../../../common/ToolFile");
const ToolStr_1 = require("../../../common/ToolStr");
class RepCommonParentCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.model_name = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\model\\${this.m_table.model_name}.ts`;
        this.m_code = '';
        if (table.param.selCols) {
            for (let i = 0; i < table.param.selCols.length; i++) {
                const col = table.param.selCols[i];
                this.m_code += `    if (queryParams.${col} !== undefined) {\n` +
                    `      where['${col}'] = queryParams.${col};\n` +
                    `    }\n\n`;
            }
        }
        if (table.param.selColsLike) {
            for (let i = 0; i < table.param.selColsLike.length; i++) {
                const col = table.param.selColsLike[i];
                this.m_code += `    if (queryParams.${col} !== undefined) {\n` +
                    `      where['${col}'] = Like(\`%$\{queryParams.${col}}%\`);\n` +
                    `    }\n\n`;
            }
        }
        if (table.param.selColsGap) {
            for (let i = 0; i < table.param.selColsGap.length; i++) {
                const col = table.param.selColsGap[i];
                this.m_code += `    if (queryParams.${col}_min !== undefined) {\n` +
                    `      where['${col}'] = Between(queryParams.${col}_min, queryParams.${col}_max);\n` +
                    `    }\n\n`;
            }
        }
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const selectEntityName = this.m_table.model_name;
        const entityName = this.m_table.en_Name;
        const modelName = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        let code = `//此代码为AutoCode框架生成，可以手动修改\n` +
            `import { RepositorySuper } from "src/common/RepositorySuper";\n` +
            `import { Between, FindOptionsWhere, Like, Repository } from "typeorm";\n` +
            `import { ${entityName} } from '../entities/${entityName}';\n` +
            `import { In_Sel${modelName} } from '../in/In_Sel${modelName}';\n\n` +
            `export class ${selectEntityName} extends RepositorySuper<${entityName}> {\n` +
            `  public readonly db: Repository<${entityName}>;\n` +
            `  constructor(db: Repository<${entityName}>) {\n` +
            `       super(db);\n` +
            `       this.db = db;\n` +
            `  }\n` +
            `  public async findAndCount(queryParams: In_Sel${modelName}) {\n` +
            `    const where: FindOptionsWhere<${entityName}> = {};\n` +
            `    // 可根据实际字段完善查询条件\n` + this.m_code +
            `    const { list, total } = await this.findAndCountSp(\n` +
            `      queryParams.page,\n` +
            `      queryParams.pageNum,\n` +
            `      {\n` +
            `        where,\n` +
            `        relations: ${this.getRelations()}, //关联的属性名\n` +
            `      }\n` +
            `    );\n\n` +
            `    return { list, total };\n` +
            `  }\n` +
            `}\n`;
        this.line(code);
        console.log(`out已生成: ${this.m_path}`);
    }
    getClassName() {
        return `Rep` + ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName) + '_';
    }
    line(str) {
        ToolFile_1.ToolFile.line(str, this.m_path);
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
exports.RepCommonParentCode = RepCommonParentCode;
//# sourceMappingURL=RepCommonParentCode.js.map