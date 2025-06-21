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
exports.In_InsReportGameLogUtc = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsReportGameLogUtc {
}
exports.In_InsReportGameLogUtc = In_InsReportGameLogUtc;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsReportGameLogUtc.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时区" }),
    __metadata("design:type", String)
], In_InsReportGameLogUtc.prototype, "utc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号，和来源slots_log.sn一样" }),
    __metadata("design:type", String)
], In_InsReportGameLogUtc.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "用户账户" }),
    __metadata("design:type", String)
], In_InsReportGameLogUtc.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型" }),
    __metadata("design:type", String)
], In_InsReportGameLogUtc.prototype, "game_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    __metadata("design:type", String)
], In_InsReportGameLogUtc.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费，为负数" }),
    __metadata("design:type", Number)
], In_InsReportGameLogUtc.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    __metadata("design:type", Number)
], In_InsReportGameLogUtc.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最终(spend+win)" }),
    __metadata("design:type", Number)
], In_InsReportGameLogUtc.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间" }),
    __metadata("design:type", Date)
], In_InsReportGameLogUtc.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    __metadata("design:type", String)
], In_InsReportGameLogUtc.prototype, "desc", void 0);
//# sourceMappingURL=In_InsReportGameLogUtc.js.map