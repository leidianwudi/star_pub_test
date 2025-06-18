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
exports.En_User = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_User = class En_User {
};
exports.En_User = En_User;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "token" }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: '' }),
    __metadata("design:type", String)
], En_User.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], En_User.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "密码" }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], En_User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "昵称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "等级" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "lv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "头像id" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "visualId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "性别;0:保密;1:男;2:女" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "简介" }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: '' }),
    __metadata("design:type", String)
], En_User.prototype, "introduction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "金币" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 100000.0000 }),
    __metadata("design:type", Number)
], En_User.prototype, "coin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否删除" }),
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "密码尝试失败次数" }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "failed_attempts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最后一次尝试失败时间" }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], En_User.prototype, "last_attempt_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经锁定" }),
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "locked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "锁定持续到" }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], En_User.prototype, "lock_until", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否可用" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "钻石数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "diamond", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "消耗金币总量" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "total_bet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "单次最大投注额" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "max_bet_one_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "繁星休息室开关" }),
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "is_room_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "金宝箱领取次数" }),
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "gold_box_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "转盘游戏开启开关" }),
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "is_roulette_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "转盘游戏玩的次数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "roulette_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "乐透游戏开启开关" }),
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], En_User.prototype, "is_lotto_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "乘数" }),
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], En_User.prototype, "multiplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "乘数过期时间" }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], En_User.prototype, "multiplier_expire_time", void 0);
exports.En_User = En_User = __decorate([
    (0, typeorm_1.Entity)('user')
], En_User);
//# sourceMappingURL=En_User.js.map