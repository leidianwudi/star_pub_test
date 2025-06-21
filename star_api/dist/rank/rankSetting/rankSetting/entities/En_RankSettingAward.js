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
exports.En_RankSettingAward = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_RankSettingAward = class En_RankSettingAward {
};
exports.En_RankSettingAward = En_RankSettingAward;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_RankSettingAward.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排行类型,表的后2个单词，day_coin" }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], En_RankSettingAward.prototype, "rank_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "名次数值最小，第一名为1" }),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], En_RankSettingAward.prototype, "rank_min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "名次数值最大，第2名为2" }),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], En_RankSettingAward.prototype, "rank_max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "道具编码,act_item.item_code" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankSettingAward.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励数量" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankSettingAward.prototype, "reward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankSettingAward.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankSettingAward.prototype, "desc", void 0);
exports.En_RankSettingAward = En_RankSettingAward = __decorate([
    (0, typeorm_1.Entity)('rank_setting_award')
], En_RankSettingAward);
//# sourceMappingURL=En_RankSettingAward.js.map