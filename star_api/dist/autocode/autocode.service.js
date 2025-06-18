"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocodeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const DbTable_1 = require("./factory/DbTable");
const EntityCode_1 = require("./factory/entities/EntityCode");
const AutoParamArr_1 = require("./params/AutoParamArr");
const ControllerCode_1 = require("./factory/ControllerCode");
const In_insCode_1 = require("./factory/in/In_insCode");
const In_selCode_1 = require("./factory/in/In_selCode");
const ServiceCode_1 = require("./factory/ServiceCode");
const ModuleCode_1 = require("./factory/ModuleCode");
const Out_selCommonCode_1 = require("./factory/out/Out_selCommonCode");
const Out_CommonCode_1 = require("./factory/out/Out_CommonCode");
const RepCommonCode_1 = require("./factory/model/RepCommonCode");
const ControllerParentCode_1 = require("./factory/ControllerParentCode");
const ServiceParentCode_1 = require("./factory/ServiceParentCode");
const RepCommonParentCode_1 = require("./factory/model/RepCommonParentCode");
let AutocodeService = class AutocodeService {
    constructor(connection) {
        this.connection = connection;
    }
    async generate() {
        let list = [];
        for (let i = 0; i < AutoParamArr_1.AutoParamArr.list.length; i++) {
            list.push(await this.createCode(i));
        }
        return list;
    }
    async createCode(index) {
        const tabSql = `
      SELECT 
        TABLE_NAME as tableName,
        TABLE_COMMENT as tableComment
        FROM INFORMATION_SCHEMA.TABLES 
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME =?
    `;
        const colSql = `
      SELECT 
        COLUMN_NAME AS columnName,
        DATA_TYPE AS dataType,
        COLUMN_TYPE AS columnType,
        IS_NULLABLE AS isNullable,
        COLUMN_DEFAULT AS columnDefault,
        COLUMN_COMMENT AS columnComment,
        COLUMN_KEY AS columnKey
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = DATABASE() 
        AND TABLE_NAME = ?
      ORDER BY ORDINAL_POSITION;
    `;
        let tabName = AutoParamArr_1.AutoParamArr.list[index].tableName;
        let tabRes = await this.connection.manager.query(tabSql, [tabName]);
        let colRes = await this.connection.manager.query(colSql, [tabName]);
        let tableEn = new DbTable_1.DbTable(AutoParamArr_1.AutoParamArr.list[index], tabRes[0].tableComment, colRes);
        let entityCode = new EntityCode_1.EntityCode(tableEn);
        entityCode.outCode();
        let in_insCode = new In_insCode_1.In_insCode(tableEn);
        in_insCode.outCode();
        let in_selCode = new In_selCode_1.In_selCode(tableEn);
        in_selCode.outCode();
        let out_selCode = new Out_selCommonCode_1.Out_selCommonCode(tableEn);
        out_selCode.outCode();
        let out_commonResp = new Out_CommonCode_1.Out_CommonCode(tableEn);
        out_commonResp.outCode();
        let model_repCommonParent = new RepCommonParentCode_1.RepCommonParentCode(tableEn);
        model_repCommonParent.outCode();
        let model_commonRep = new RepCommonCode_1.RepCommonCode(tableEn);
        model_commonRep.outCode();
        let serviceParentCode = new ServiceParentCode_1.ServiceParentCode(tableEn);
        serviceParentCode.outCode();
        let serviceCode = new ServiceCode_1.ServiceCode(tableEn);
        serviceCode.outCode();
        let controllerParentCode = new ControllerParentCode_1.ControllerParentCode(tableEn);
        controllerParentCode.outCode();
        let controllerCode = new ControllerCode_1.ControllerCode(tableEn);
        controllerCode.outCode();
        let moduleCode = new ModuleCode_1.ModuleCode(tableEn);
        moduleCode.outCode();
        return tableEn;
    }
};
exports.AutocodeService = AutocodeService;
exports.AutocodeService = AutocodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AutocodeService);
//# sourceMappingURL=autocode.service.js.map