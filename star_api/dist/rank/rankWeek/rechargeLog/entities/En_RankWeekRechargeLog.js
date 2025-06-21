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
exports.En_RankWeekRechargeLog = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_RankWeekRechargeLog = class En_RankWeekRechargeLog {
};
exports.En_RankWeekRechargeLog = En_RankWeekRechargeLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_RankWeekRechargeLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankWeekRechargeLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "一年的第几周" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankWeekRechargeLog.prototype, "week", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排名" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankWeekRechargeLog.prototype, "rank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankWeekRechargeLog.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励道具编码,act_item.item_code" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankWeekRechargeLog.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励数量" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankWeekRechargeLog.prototype, "reward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经领将，0:否,1:是" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankWeekRechargeLog.prototype, "is_get_award", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "领将时间" }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], En_RankWeekRechargeLog.prototype, "award_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankWeekRechargeLog.prototype, "desc", void 0);
exports.En_RankWeekRechargeLog = En_RankWeekRechargeLog = __decorate([
    (0, typeorm_1.Entity)('rank_week_recharge_log')
], En_RankWeekRechargeLog);
//# sourceMappingURL=En_RankWeekRechargeLog.js.map