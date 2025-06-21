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
exports.Out_ReportGameLog = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_ReportGameLog {
}
exports.Out_ReportGameLog = Out_ReportGameLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_ReportGameLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号，和来源slots_log.sn一样" }),
    __metadata("design:type", String)
], Out_ReportGameLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "用户账户" }),
    __metadata("design:type", String)
], Out_ReportGameLog.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型" }),
    __metadata("design:type", String)
], Out_ReportGameLog.prototype, "game_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    __metadata("design:type", String)
], Out_ReportGameLog.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费，为负数" }),
    __metadata("design:type", Number)
], Out_ReportGameLog.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    __metadata("design:type", Number)
], Out_ReportGameLog.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最终(spend+win)" }),
    __metadata("design:type", Number)
], Out_ReportGameLog.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间" }),
    __metadata("design:type", Date)
], Out_ReportGameLog.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    __metadata("design:type", String)
], Out_ReportGameLog.prototype, "desc", void 0);
//# sourceMappingURL=Out_ReportGameLog.js.map