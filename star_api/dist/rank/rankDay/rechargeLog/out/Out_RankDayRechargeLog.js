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
exports.Out_RankDayRechargeLog = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_RankDayRechargeLog {
}
exports.Out_RankDayRechargeLog = Out_RankDayRechargeLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_RankDayRechargeLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "订单号" }),
    __metadata("design:type", String)
], Out_RankDayRechargeLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "一年的第几天" }),
    __metadata("design:type", Number)
], Out_RankDayRechargeLog.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排名" }),
    __metadata("design:type", Number)
], Out_RankDayRechargeLog.prototype, "rank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    __metadata("design:type", String)
], Out_RankDayRechargeLog.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励道具编码,act_item.item_code" }),
    __metadata("design:type", String)
], Out_RankDayRechargeLog.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励数量" }),
    __metadata("design:type", Number)
], Out_RankDayRechargeLog.prototype, "reward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经领将，0:否,1:是" }),
    __metadata("design:type", Number)
], Out_RankDayRechargeLog.prototype, "is_get_award", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "领将时间" }),
    __metadata("design:type", Date)
], Out_RankDayRechargeLog.prototype, "award_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    __metadata("design:type", String)
], Out_RankDayRechargeLog.prototype, "desc", void 0);
//# sourceMappingURL=Out_RankDayRechargeLog.js.map