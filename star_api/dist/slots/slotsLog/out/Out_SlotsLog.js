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
exports.Out_SlotsLog = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_SlotsLog {
}
exports.Out_SlotsLog = Out_SlotsLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_SlotsLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "关联订单号" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "sn_ext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "用户" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "user_account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏code" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏名称" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "game_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "房间id" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "room_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "类型,0:未中奖;1:中奖;" }),
    __metadata("design:type", Number)
], Out_SlotsLog.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否幸运事件0:否；1:是" }),
    __metadata("design:type", Number)
], Out_SlotsLog.prototype, "is_lucky", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "花费,为负数" }),
    __metadata("design:type", Number)
], Out_SlotsLog.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    __metadata("design:type", Number)
], Out_SlotsLog.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最终(spend+win)" }),
    __metadata("design:type", Number)
], Out_SlotsLog.prototype, "final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "时间" }),
    __metadata("design:type", Date)
], Out_SlotsLog.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "结果内容" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    __metadata("design:type", String)
], Out_SlotsLog.prototype, "desc", void 0);
//# sourceMappingURL=Out_SlotsLog.js.map