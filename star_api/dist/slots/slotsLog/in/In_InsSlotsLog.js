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
exports.In_InsSlotsLog = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsSlotsLog {
}
exports.In_InsSlotsLog = In_InsSlotsLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsSlotsLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "关联订单号" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "sn_ext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "用户" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "user_account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏code" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏名称" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "game_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "房间id" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "room_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "类型,0:未中奖;1:中奖;" }),
    __metadata("design:type", Number)
], In_InsSlotsLog.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否幸运事件0:否；1:是" }),
    __metadata("design:type", Number)
], In_InsSlotsLog.prototype, "is_lucky", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费,为负数" }),
    __metadata("design:type", Number)
], In_InsSlotsLog.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    __metadata("design:type", Number)
], In_InsSlotsLog.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最终(spend+win)" }),
    __metadata("design:type", Number)
], In_InsSlotsLog.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间" }),
    __metadata("design:type", Date)
], In_InsSlotsLog.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "结果内容" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    __metadata("design:type", String)
], In_InsSlotsLog.prototype, "desc", void 0);
//# sourceMappingURL=In_InsSlotsLog.js.map