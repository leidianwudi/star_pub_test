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
exports.In_InsReportDayPerson = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsReportDayPerson {
}
exports.In_InsReportDayPerson = In_InsReportDayPerson;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "日期，每人30分钟一条" }),
    __metadata("design:type", Date)
], In_InsReportDayPerson.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "玩家账户" }),
    __metadata("design:type", String)
], In_InsReportDayPerson.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots游戏花费,负数" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "slots_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots奖励" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "slots_win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots结果,奖励+花费" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "slots_final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots玩次数" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "slots_play_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局游戏花费，负数" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "poker_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局奖励" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "poker_win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局结果,奖励+花费" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "poker_final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局玩次数" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "poker_play_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼游戏花费，负数" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "fish_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼奖励" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "fish_win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼结果,奖励+花费" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "fish_final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼玩次数" }),
    __metadata("design:type", Number)
], In_InsReportDayPerson.prototype, "fish_play_num", void 0);
//# sourceMappingURL=In_InsReportDayPerson.js.map