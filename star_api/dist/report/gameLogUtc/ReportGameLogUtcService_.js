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
exports.ReportGameLogUtcService_ = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
const En_ReportGameLogUtc_1 = require("./entities/En_ReportGameLogUtc");
const RepReportGameLogUtc_1 = require("./model/RepReportGameLogUtc");
let ReportGameLogUtcService_ = class ReportGameLogUtcService_ {
    constructor(En_ReportGameLogUtcRep) {
        this.En_ReportGameLogUtcRep = En_ReportGameLogUtcRep;
        this.rep = new RepReportGameLogUtc_1.RepReportGameLogUtc(En_ReportGameLogUtcRep);
    }
    async select(queryParams) {
        const { list, total } = await this.rep.findAndCount(queryParams);
        return {
            list: list,
            page: queryParams.page,
            pageNum: queryParams.pageNum,
            total,
            totalPages: Math.ceil(total / queryParams.pageNum),
        };
    }
    async selectById(id) {
        const record = await this.rep.db.findOne({ where: { id } });
        if (!record) {
            throw new common_2.HttpException('记录未找到', 404);
        }
        return record;
    }
    async insert(dto) {
        return await this.rep.db.insert(dto);
    }
    async update(dto) {
        await this.rep.db.update(dto.id, dto);
        return '操作成功';
    }
    async delete(ids) {
        await this.rep.db.delete(ids);
        return '操作成功';
    }
};
exports.ReportGameLogUtcService_ = ReportGameLogUtcService_;
exports.ReportGameLogUtcService_ = ReportGameLogUtcService_ = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(En_ReportGameLogUtc_1.En_ReportGameLogUtc)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportGameLogUtcService_);
//# sourceMappingURL=ReportGameLogUtcService_.js.map