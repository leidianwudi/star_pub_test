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
exports.ReportGameLogController = void 0;
const common_1 = require("@nestjs/common");
const ReportGameLogService_1 = require("./ReportGameLogService");
const swagger_1 = require("@nestjs/swagger");
const ReportGameLogController_1 = require("./ReportGameLogController_");
let ReportGameLogController = class ReportGameLogController extends ReportGameLogController_1.ReportGameLogController_ {
    constructor(service) { super(service); }
    async selectTotal() {
        return await this.service.selectTotal();
    }
};
exports.ReportGameLogController = ReportGameLogController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('selectTotal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportGameLogController.prototype, "selectTotal", null);
exports.ReportGameLogController = ReportGameLogController = __decorate([
    (0, swagger_1.ApiTags)('ReportGameLogController'),
    (0, common_1.Controller)('report_game_log'),
    __metadata("design:paramtypes", [ReportGameLogService_1.ReportGameLogService])
], ReportGameLogController);
//# sourceMappingURL=ReportGameLogController.js.map