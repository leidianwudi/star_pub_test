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
exports.In_InsUser = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class In_InsUser {
}
exports.In_InsUser = In_InsUser;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "token", required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], In_InsUser.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    __metadata("design:type", String)
], In_InsUser.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "密码" }),
    __metadata("design:type", String)
], In_InsUser.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "昵称" }),
    __metadata("design:type", String)
], In_InsUser.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "等级" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "lv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "头像id" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "visualId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "性别;0:保密;1:男;2:女" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "简介", required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], In_InsUser.prototype, "introduction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "金币" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "coin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否删除" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "密码尝试失败次数", required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], In_InsUser.prototype, "failed_attempts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最后一次尝试失败时间", required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], In_InsUser.prototype, "last_attempt_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经锁定" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "locked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "锁定持续到", required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], In_InsUser.prototype, "lock_until", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否可用" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "钻石数" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "diamond", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "消耗金币总量" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "total_bet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "单次最大投注额" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "max_bet_one_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "繁星休息室开关", required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], In_InsUser.prototype, "is_room_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "金宝箱领取次数" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "gold_box_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "转盘游戏开启开关" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "is_roulette_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "转盘游戏玩的次数" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "roulette_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "乐透游戏开启开关" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "is_lotto_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "乘数" }),
    __metadata("design:type", Number)
], In_InsUser.prototype, "multiplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "乘数过期时间", required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], In_InsUser.prototype, "multiplier_expire_time", void 0);
//# sourceMappingURL=In_InsUser.js.map