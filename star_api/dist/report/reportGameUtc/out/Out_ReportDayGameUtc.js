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
exports.Out_ReportDayGameUtc = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_ReportDayGameUtc {
}
exports.Out_ReportDayGameUtc = Out_ReportDayGameUtc;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时区" }),
    __metadata("design:type", String)
], Out_ReportDayGameUtc.prototype, "utc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间，每天一条" }),
    __metadata("design:type", Date)
], Out_ReportDayGameUtc.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型编码" }),
    __metadata("design:type", String)
], Out_ReportDayGameUtc.prototype, "type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    __metadata("design:type", String)
], Out_ReportDayGameUtc.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费,负数" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "结果，花费+奖励" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "玩次数" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "play_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "玩人数" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "room_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "普通rtp=正常奖励/总消耗" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "rtp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "幸运时刻rtp=幸运时刻奖励/总消耗" }),
    __metadata("design:type", Number)
], Out_ReportDayGameUtc.prototype, "rtp_big", void 0);
//# sourceMappingURL=Out_ReportDayGameUtc.js.map