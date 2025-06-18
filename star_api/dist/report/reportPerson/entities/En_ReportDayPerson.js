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
exports.En_ReportDayPerson = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_ReportDayPerson = class En_ReportDayPerson {
};
exports.En_ReportDayPerson = En_ReportDayPerson;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "日期，每人30分钟一条" }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], En_ReportDayPerson.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "玩家账户" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportDayPerson.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots游戏花费,负数" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "slots_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots奖励" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "slots_win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots结果,奖励+花费" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "slots_final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "slots玩次数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "slots_play_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局游戏花费，负数" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "poker_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局奖励" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "poker_win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局结果,奖励+花费" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "poker_final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "对局玩次数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "poker_play_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼游戏花费，负数" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "fish_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼奖励" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "fish_win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼结果,奖励+花费" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "fish_final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "捕鱼玩次数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayPerson.prototype, "fish_play_num", void 0);
exports.En_ReportDayPerson = En_ReportDayPerson = __decorate([
    (0, typeorm_1.Entity)('report_day_person')
], En_ReportDayPerson);
//# sourceMappingURL=En_ReportDayPerson.js.map