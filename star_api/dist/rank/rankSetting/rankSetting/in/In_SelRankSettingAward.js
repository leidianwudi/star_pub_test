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
exports.In_SelRankSettingAward = void 0;
const In_BasePage_1 = require("../../../../common/Interface/In_BasePage");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class In_SelRankSettingAward extends In_BasePage_1.In_BasePage {
}
exports.In_SelRankSettingAward = In_SelRankSettingAward;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排行类型,表的后2个单词，day_coin", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], In_SelRankSettingAward.prototype, "rank_type", void 0);
//# sourceMappingURL=In_SelRankSettingAward.js.map