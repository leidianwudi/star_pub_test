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
exports.En_ReportGameLogUtc = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_ReportGameLogUtc = class En_ReportGameLogUtc {
};
exports.En_ReportGameLogUtc = En_ReportGameLogUtc;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_ReportGameLogUtc.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时区" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '8' }),
    __metadata("design:type", String)
], En_ReportGameLogUtc.prototype, "utc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号，和来源slots_log.sn一样" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLogUtc.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "用户账户" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLogUtc.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLogUtc.prototype, "game_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLogUtc.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费，为负数" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportGameLogUtc.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportGameLogUtc.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最终(spend+win)" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_ReportGameLogUtc.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间" }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], En_ReportGameLogUtc.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLogUtc.prototype, "desc", void 0);
exports.En_ReportGameLogUtc = En_ReportGameLogUtc = __decorate([
    (0, typeorm_1.Entity)('report_game_log_utc')
], En_ReportGameLogUtc);
//# sourceMappingURL=En_ReportGameLogUtc.js.map