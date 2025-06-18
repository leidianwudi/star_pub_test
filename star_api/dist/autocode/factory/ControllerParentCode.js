"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerParentCode = void 0;
const ToolFile_1 = require("../../common/ToolFile");
const ToolStr_1 = require("../../common/ToolStr");
class ControllerParentCode {
    constructor(table) {
        this.m_table = table;
        this.m_table.controllerName = this.getClassName();
        this.m_path = `src\\${this.m_table.param.modelName}\\${this.m_table.controllerName}_.ts`;
    }
    outCode() {
        ToolFile_1.ToolFile.clearFile(this.m_path);
        const className = this.m_table.controllerName;
        const serviceName = this.m_table.serviceName;
        const importEn = ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName);
        const code = `// 此代码为AutoCode框架生成，请勿手动修改\n` +
            `import { Controller, Get, Post, Put, Body, Param, Query, Delete, HttpCode, HttpStatus } from '@nestjs/common';\n` +
            `import { ${importEn}Service } from './${importEn}Service';\n` +
            `import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';\n` +
            `import { Out_${importEn} } from './out/Out_${importEn}';\n` +
            `import { In_Ins${importEn} } from './in/In_Ins${importEn}';\n` +
            `import { In_Sel${importEn} } from './in/In_Sel${importEn}';\n\n` +
            `import { ${this.m_table.en_Name} } from './entities/${this.m_table.en_Name}';\n` +
            `@ApiTags('${className}_')\n` +
            `export class ${className}_ {\n` +
            `  constructor(protected readonly service: ${importEn}Service) {}\n\n` +
            `  @ApiOperation({ summary: '查询全部 (支持分页)' })\n` +
            `  @ApiResponse({ status: 200, description: '返回分页数据', type: Out_${importEn} }) /* TODO: 考虑使用通用的分页输出 DTO */\n` +
            `  @HttpCode(HttpStatus.OK)\n` +
            `  @Post('select')\n` +
            `  async select(@Body() queryParams: In_Sel${importEn}) {\n` +
            `    return await this.service.select(queryParams);\n` +
            `  }\n\n` +
            `  @ApiOperation({ summary: '根据ID查询' })\n` +
            `  @ApiParam({ name: 'id', type: Number, description: '通知ID' })\n` +
            `  @ApiResponse({ status: 200, description: '返回全部数据', type: Out_${importEn} })\n` +
            `  @HttpCode(HttpStatus.OK)\n` +
            `  @Post('selectById')\n` +
            `  async selectById(@Body() body: { id: number }): Promise<${this.m_table.en_Name}> {\n` +
            `    return await this.service.selectById(body.id);\n` +
            `  }\n\n` +
            `  @ApiOperation({ summary: '新增记录' })\n` +
            `  @ApiResponse({ status: 200, description: '返回操作结果消息', type: Out_${importEn} })\n` +
            `  @HttpCode(HttpStatus.OK)\n` +
            `  @Post('insert')\n` +
            `  async insert(@Body() dto: In_Ins${importEn}): Promise<Out_${importEn}> {\n` +
            `    const result = await this.service.insert(dto);\n` +
            `    const resp = new Out_${importEn}();\n` +
            `    Object.assign(resp, result);\n` +
            `    return resp;\n` +
            `  }\n\n` +
            `  @ApiOperation({ summary: '更新记录' })\n` +
            `  @ApiResponse({ status: 200, description: '返回操作结果消息', type: Out_${importEn} })\n` +
            `  @HttpCode(HttpStatus.OK)\n` +
            `  @Post('update')\n` +
            `  async update(@Body() body: In_Ins${importEn} ): Promise<Out_${importEn}> {\n` +
            `    let result = null;\n` +
            `    if(!body.id){\n` +
            `      result = await this.service.insert(body);\n` +
            `    } else {\n` +
            `      result = await this.service.update(body);\n` +
            `    }\n` +
            `    const resp = new Out_${importEn}();\n` +
            `    Object.assign(resp, result);\n` +
            `    return resp;\n` +
            `  }\n\n` +
            `  @ApiOperation({ summary: '删除记录' })\n` +
            `  @ApiResponse({ status: 200, description: '返回操作结果消息', type: Out_${importEn} })\n` +
            `  @HttpCode(HttpStatus.OK)\n` +
            `  @Post('delete')\n` +
            `  async delete(@Body() body: { ids: number[] }): Promise<Out_${importEn}> {\n` +
            `    const result = await this.service.delete(body.ids);\n` +
            `    const resp = new Out_${importEn}();\n` +
            `    Object.assign(resp, { message: '操作成功', data: typeof result === 'string' ? { value: result } : result });\n` +
            `    return resp;\n` +
            `  };\n` +
            `}`;
        ToolFile_1.ToolFile.line(code, this.m_path);
    }
    getClassName() {
        return ToolStr_1.ToolStr.line2UpLow(this.m_table.param.tableName) + "Controller";
    }
}
exports.ControllerParentCode = ControllerParentCode;
//# sourceMappingURL=ControllerParentCode.js.map