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
exports.En_SlotsLog = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_SlotsLog = class En_SlotsLog {
};
exports.En_SlotsLog = En_SlotsLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_SlotsLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "关联订单号" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "sn_ext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "用户" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "user_account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏code" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏名称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "game_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "房间id" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "room_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "类型,0:未中奖;1:中奖;" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_SlotsLog.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否幸运事件0:否；1:是" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_SlotsLog.prototype, "is_lucky", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费,为负数" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_SlotsLog.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_SlotsLog.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最终(spend+win)" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_SlotsLog.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间" }),
    (0, typeorm_1.Column)({ type: 'date', default: Date.now() }),
    __metadata("design:type", Date)
], En_SlotsLog.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "结果内容" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SlotsLog.prototype, "desc", void 0);
exports.En_SlotsLog = En_SlotsLog = __decorate([
    (0, typeorm_1.Entity)('slots_log')
], En_SlotsLog);
//# sourceMappingURL=En_SlotsLog.js.map