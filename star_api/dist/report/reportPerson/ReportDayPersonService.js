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
exports.ReportDayPersonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const En_ReportDayPerson_1 = require("./entities/En_ReportDayPerson");
const ReportDayPersonService_1 = require("./ReportDayPersonService_");
const ToolGroupBy_1 = require("../../common/ToolGroupBy");
const ToolTime_1 = require("../../common/ToolTime");
let ReportDayPersonService = class ReportDayPersonService extends ReportDayPersonService_1.ReportDayPersonService_ {
    constructor(En_ReportDayPersonRep) {
        super(En_ReportDayPersonRep);
    }
    async select(queryParams) {
        const { list, total } = await this.rep.findAndCount(queryParams);
        console.log(queryParams);
        console.log('传入 utc 值：', queryParams.utc);
        const stringList = (0, ToolTime_1.convertToStringList)(list);
        const groupedList = (0, ToolGroupBy_1.groupByAccountAndDay)(stringList, queryParams.utc ?? 8);
        return {
            list: groupedList,
            total: groupedList.length,
            page: 1,
            pageNum: groupedList.length,
            totalPages: 1,
        };
    }
};
exports.ReportDayPersonService = ReportDayPersonService;
exports.ReportDayPersonService = ReportDayPersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(En_ReportDayPerson_1.En_ReportDayPerson)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportDayPersonService);
//# sourceMappingURL=ReportDayPersonService.js.map