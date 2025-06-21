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
exports.ReportGameLogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const En_ReportGameLog_1 = require("./entities/En_ReportGameLog");
const ReportGameLogService_1 = require("./ReportGameLogService_");
let ReportGameLogService = class ReportGameLogService extends ReportGameLogService_1.ReportGameLogService_ {
    constructor(En_ReportGameLogRep) {
        super(En_ReportGameLogRep);
    }
    async selectTotal() {
        const list = await this.rep.db.find();
        const totals = {};
        list.forEach(item => {
            for (const key in item) {
                if (key === 'spend' || key === 'win' || key === 'final') {
                    totals[key] = (totals[key] || 0) + Number(item[key]);
                }
            }
        });
        return {
            list: [totals]
        };
    }
};
exports.ReportGameLogService = ReportGameLogService;
exports.ReportGameLogService = ReportGameLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(En_ReportGameLog_1.En_ReportGameLog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportGameLogService);
//# sourceMappingURL=ReportGameLogService.js.map