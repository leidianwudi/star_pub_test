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
exports.En_ReportDayGameUtc = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const En_GameBase_1 = require("../../../game/gameBase/entities/En_GameBase");
const En_GameType_1 = require("../../../game/gameType/entities/En_GameType");
let En_ReportDayGameUtc = class En_ReportDayGameUtc {
};
exports.En_ReportDayGameUtc = En_ReportDayGameUtc;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时区" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '8' }),
    __metadata("design:type", String)
], En_ReportDayGameUtc.prototype, "utc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间，每天一条" }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], En_ReportDayGameUtc.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportDayGameUtc.prototype, "type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportDayGameUtc.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费,负数" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "结果，花费+奖励" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "玩次数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "play_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "玩人数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "room_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "普通rtp=正常奖励/总消耗" }),
    (0, typeorm_1.Column)({ type: 'float', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "rtp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "幸运时刻rtp=幸运时刻奖励/总消耗" }),
    (0, typeorm_1.Column)({ type: 'float', default: 0 }),
    __metadata("design:type", Number)
], En_ReportDayGameUtc.prototype, "rtp_big", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => En_GameBase_1.En_GameBase, (gameBase) => gameBase.reportDayGameUtc),
    (0, typeorm_1.JoinColumn)({ name: 'game_code', referencedColumnName: 'code' }),
    __metadata("design:type", En_GameBase_1.En_GameBase)
], En_ReportDayGameUtc.prototype, "gameBase", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => En_GameType_1.En_GameType, (gameType) => gameType.reportDayGameUtc),
    (0, typeorm_1.JoinColumn)({ name: 'type_code', referencedColumnName: 'type_code' }),
    __metadata("design:type", En_GameType_1.En_GameType)
], En_ReportDayGameUtc.prototype, "gameType", void 0);
exports.En_ReportDayGameUtc = En_ReportDayGameUtc = __decorate([
    (0, typeorm_1.Entity)('report_day_game_utc')
], En_ReportDayGameUtc);
//# sourceMappingURL=En_ReportDayGameUtc.js.map