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
exports.Out_RankSettingAward = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_RankSettingAward {
}
exports.Out_RankSettingAward = Out_RankSettingAward;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_RankSettingAward.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排行类型,表的后2个单词，day_coin" }),
    __metadata("design:type", String)
], Out_RankSettingAward.prototype, "rank_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "名次数值最小，第一名为1" }),
    __metadata("design:type", Number)
], Out_RankSettingAward.prototype, "rank_min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "名次数值最大，第2名为2" }),
    __metadata("design:type", Number)
], Out_RankSettingAward.prototype, "rank_max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "道具编码,act_item.item_code" }),
    __metadata("design:type", String)
], Out_RankSettingAward.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励数量" }),
    __metadata("design:type", Number)
], Out_RankSettingAward.prototype, "reward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效" }),
    __metadata("design:type", Number)
], Out_RankSettingAward.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    __metadata("design:type", String)
], Out_RankSettingAward.prototype, "desc", void 0);
//# sourceMappingURL=Out_RankSettingAward.js.map