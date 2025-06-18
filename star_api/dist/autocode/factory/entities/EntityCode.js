"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCode = void 0;
const ToolFile_1 = require("../../../common/ToolFile");
const ToolStr_1 = require("../../../common/ToolStr");
const ToolTrans_1 = require("../../../common/ToolTrans");
class EntityCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.en_Name = 'En_' + this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\entities\\${this.m_table.en_Name}.ts`;
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const entityName = this.m_table.en_Name;
        const tableComment = this.m_table.tableComment;
        const tableName = this.m_table.param.tableName;
        const joinTable = this.m_table.param.joinTable;
        let joinCode = '';
        let joinImport = '';
        if (joinTable) {
            for (let i = 0; i < joinTable.length; i++) {
                const join = joinTable[i];
                const relationType = join.joinType;
                let relationOptions = '';
                if (relationType === 'OneToMany') {
                    relationOptions = `, (${join.joinEnClassPro}) => ${join.joinEnClassPro}.${join.inverseJoinEnClassPro}`;
                }
                else if (relationType === 'OneToOne' || relationType === 'ManyToOne') {
                    relationOptions = `, (${join.joinEnClassPro}) => ${join.joinEnClassPro}.${join.inverseJoinEnClassPro}`;
                }
                else if (relationType === 'ManyToMany') {
                    relationOptions = `, (${join.joinEnClassPro}) => ${join.joinEnClassPro}.${join.inverseJoinEnClassPro}`;
                }
                let joinCol = '';
                if ((relationType === 'OneToOne' || relationType === 'ManyToOne') && join.joinColumn) {
                    joinCol = `\t@JoinColumn({ name: '${join.joinColumn.name}', referencedColumnName: '${join.joinColumn.referencedColumnName}' })\n`;
                }
                joinImport += `import { ${join.joinEnClass} } from '${join.joinEnClass_Url}';\n`;
                joinCode += `\t@${relationType}(() => ${join.joinEnClass}${relationOptions})\n` +
                    (joinCol || '') +
                    `\t${join.joinEnClassPro}: ${join.joinEnClass}${join.isArray ? '[]' : ''};\n\n`;
            }
        }
        let code = `// 此代码为AutoCode框架生成，请勿手动修改\n` +
            `import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany } from "typeorm";\n` +
            `import { ApiProperty } from '@nestjs/swagger';\n` +
            joinImport +
            `// ${tableComment} (${tableName}) 实体\n` +
            `@Entity('${this.m_table.param.tableName}')\n` +
            `export class ${entityName} {\n` +
            this.outEntity() +
            `${joinCode}}`;
        this.line(code);
        console.log(`✅ 实体类已生成: ${this.m_path}`);
    }
    getClassName() {
        return ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
    }
    outEntity() {
        let str = "";
        for (let i = 0; i < this.m_table.columns.length; i++) {
            const col = this.m_table.columns[i];
            const tsType = ToolTrans_1.ToolTrans.getTsType(col.dataType);
            const comment = col.columnComment || '';
            str += `\t@ApiProperty({ description: "${comment}" })\n`;
            if (col.isPrimaryKey) {
                str += `\t@PrimaryGeneratedColumn()\n`;
            }
            else {
                let columnOptionsArray = [`type: '${ToolTrans_1.ToolTrans.getColumnType(col)}'`];
                if (col.isNullable && col.isNullable.toUpperCase() !== 'NO') {
                    columnOptionsArray.push(`nullable: true`);
                }
                if (col.columnDefault !== null && col.columnDefault !== undefined) {
                    const defaultString = String(col.columnDefault);
                    if (tsType === 'string' && !(defaultString.startsWith("'") && defaultString.endsWith("'")) && !(defaultString.startsWith("`") && defaultString.endsWith("`")) && defaultString.toLowerCase() !== 'null') {
                        columnOptionsArray.push(`default: '${defaultString.replace(/'/g, "''")}'`);
                    }
                    else if (tsType === 'number' && isNaN(Number(defaultString))) {
                        columnOptionsArray.push(`default: '${defaultString.replace(/'/g, "''")}'`);
                    }
                    else if (defaultString.toLowerCase() === 'null') {
                        if (!columnOptionsArray.some(opt => opt.startsWith('nullable:'))) {
                            columnOptionsArray.push('nullable: true');
                        }
                        columnOptionsArray.push('default: null');
                    }
                    else {
                        columnOptionsArray.push(`default: ${defaultString}`);
                    }
                }
                str += `\t@Column({ ${columnOptionsArray.join(', ')} })\n`;
            }
            let fieldType = tsType;
            if (col.isNullable && col.isNullable.toUpperCase() !== 'NO' && !col.isPrimaryKey) {
                fieldType += ` | null`;
            }
            str += `\t${col.columnName}: ${fieldType};\n\n`;
        }
        return str;
    }
    line(str) {
        ToolFile_1.ToolFile.line(str, this.m_path);
    }
}
exports.EntityCode = EntityCode;
//# sourceMappingURL=EntityCode.js.map