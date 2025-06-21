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
exports.En_ReportGameLog = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_ReportGameLog = class En_ReportGameLog {
};
exports.En_ReportGameLog = En_ReportGameLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_ReportGameLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号，和来源slots_log.sn一样" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "用户账户" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLog.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLog.prototype, "game_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLog.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费，为负数" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportGameLog.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportGameLog.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最终(spend+win)" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], En_ReportGameLog.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间" }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], En_ReportGameLog.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ReportGameLog.prototype, "desc", void 0);
exports.En_ReportGameLog = En_ReportGameLog = __decorate([
    (0, typeorm_1.Entity)('report_game_log')
], En_ReportGameLog);
//# sourceMappingURL=En_ReportGameLog.js.map