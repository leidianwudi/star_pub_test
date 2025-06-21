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
exports.ReportGameLogUtcController = void 0;
const common_1 = require("@nestjs/common");
const ReportGameLogUtcService_1 = require("./ReportGameLogUtcService");
const swagger_1 = require("@nestjs/swagger");
const ReportGameLogUtcController_1 = require("./ReportGameLogUtcController_");
let ReportGameLogUtcController = class ReportGameLogUtcController extends ReportGameLogUtcController_1.ReportGameLogUtcController_ {
    constructor(service) { super(service); }
    async selectTotal() {
        return await this.service.selectTotal();
    }
};
exports.ReportGameLogUtcController = ReportGameLogUtcController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('selectTotal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportGameLogUtcController.prototype, "selectTotal", null);
exports.ReportGameLogUtcController = ReportGameLogUtcController = __decorate([
    (0, swagger_1.ApiTags)('ReportGameLogUtcController'),
    (0, common_1.Controller)('report_game_log_utc'),
    __metadata("design:paramtypes", [ReportGameLogUtcService_1.ReportGameLogUtcService])
], ReportGameLogUtcController);
//# sourceMappingURL=ReportGameLogUtcController.js.map