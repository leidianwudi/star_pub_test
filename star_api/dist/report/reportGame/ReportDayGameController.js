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
exports.ReportDayGameController = void 0;
const common_1 = require("@nestjs/common");
const ReportDayGameService_1 = require("./ReportDayGameService");
const swagger_1 = require("@nestjs/swagger");
const ReportDayGameController_1 = require("./ReportDayGameController_");
let ReportDayGameController = class ReportDayGameController extends ReportDayGameController_1.ReportDayGameController_ {
    constructor(service) { super(service); }
    async getAll(body) {
        const res = await this.service.getAll(body.data);
        return { list: res, total: res.length };
    }
};
exports.ReportDayGameController = ReportDayGameController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('getAll'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportDayGameController.prototype, "getAll", null);
exports.ReportDayGameController = ReportDayGameController = __decorate([
    (0, swagger_1.ApiTags)('ReportDayGameController'),
    (0, common_1.Controller)('report_day_game'),
    __metadata("design:paramtypes", [ReportDayGameService_1.ReportDayGameService])
], ReportDayGameController);
//# sourceMappingURL=ReportDayGameController.js.map