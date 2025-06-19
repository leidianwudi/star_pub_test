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
exports.ReportDayPersonController = void 0;
const common_1 = require("@nestjs/common");
const ReportDayPersonService_1 = require("./ReportDayPersonService");
const swagger_1 = require("@nestjs/swagger");
const ReportDayPersonController_1 = require("./ReportDayPersonController_");
const In_SelReportDayPersonSp_1 = require("./in/In_SelReportDayPersonSp");
let ReportDayPersonController = class ReportDayPersonController extends ReportDayPersonController_1.ReportDayPersonController_ {
    constructor(service) { super(service); }
    async select(queryParams) {
        return this.service.select(queryParams);
    }
};
exports.ReportDayPersonController = ReportDayPersonController;
__decorate([
    (0, common_1.Post)('select'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [In_SelReportDayPersonSp_1.In_SelReportDayPersonSp]),
    __metadata("design:returntype", Promise)
], ReportDayPersonController.prototype, "select", null);
exports.ReportDayPersonController = ReportDayPersonController = __decorate([
    (0, swagger_1.ApiTags)('ReportDayPersonController'),
    (0, common_1.Controller)('ReportDayPersonController'),
    __metadata("design:paramtypes", [ReportDayPersonService_1.ReportDayPersonService])
], ReportDayPersonController);
//# sourceMappingURL=ReportDayPersonController.js.map