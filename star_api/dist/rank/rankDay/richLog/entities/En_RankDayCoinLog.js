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
exports.En_RankDayCoinLog = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_RankDayCoinLog = class En_RankDayCoinLog {
};
exports.En_RankDayCoinLog = En_RankDayCoinLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_RankDayCoinLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankDayCoinLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "一年的第几天" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankDayCoinLog.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排名" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankDayCoinLog.prototype, "rank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankDayCoinLog.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励道具编码,act_item.item_code" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankDayCoinLog.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励数量" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankDayCoinLog.prototype, "reward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经领将，0:否,1:是" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankDayCoinLog.prototype, "is_get_award", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "领将时间" }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], En_RankDayCoinLog.prototype, "award_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankDayCoinLog.prototype, "desc", void 0);
exports.En_RankDayCoinLog = En_RankDayCoinLog = __decorate([
    (0, typeorm_1.Entity)('rank_day_coin_log')
], En_RankDayCoinLog);
//# sourceMappingURL=En_RankDayCoinLog.js.map