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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportDayGameUtcController = void 0;
const common_1 = require("@nestjs/common");
const ReportDayGameUtcService_1 = require("./ReportDayGameUtcService");
const swagger_1 = require("@nestjs/swagger");
const ReportDayGameUtcController_1 = require("./ReportDayGameUtcController_");
let ReportDayGameUtcController = class ReportDayGameUtcController extends ReportDayGameUtcController_1.ReportDayGameUtcController_ {
    constructor(service) { super(service); }
    async selectTotal() {
        return await this.service.selectTotal();
    }
};
exports.ReportDayGameUtcController = ReportDayGameUtcController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('selectTotal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportDayGameUtcController.prototype, "selectTotal", null);
exports.ReportDayGameUtcController = ReportDayGameUtcController = __decorate([
    (0, swagger_1.ApiTags)('ReportDayGameUtcController'),
    (0, common_1.Controller)('report_day_game_utc'),
    __metadata("design:paramtypes", [ReportDayGameUtcService_1.ReportDayGameUtcService])
], ReportDayGameUtcController);
//# sourceMappingURL=ReportDayGameUtcController.js.map