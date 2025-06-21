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
exports.In_InsRankSettingAi = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsRankSettingAi {
}
exports.In_InsRankSettingAi = In_InsRankSettingAi;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsRankSettingAi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    __metadata("design:type", String)
], In_InsRankSettingAi.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "每次增加金币" }),
    __metadata("design:type", Number)
], In_InsRankSettingAi.prototype, "add_coin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "增加金币乘数最小值，可以负数" }),
    __metadata("design:type", Number)
], In_InsRankSettingAi.prototype, "scale_min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "增加金币乘数最大值" }),
    __metadata("design:type", Number)
], In_InsRankSettingAi.prototype, "scale_max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "增加频率，秒" }),
    __metadata("design:type", Number)
], In_InsRankSettingAi.prototype, "speed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效,0:失效，1:生效" }),
    __metadata("design:type", Number)
], In_InsRankSettingAi.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    __metadata("design:type", String)
], In_InsRankSettingAi.prototype, "desc", void 0);
//# sourceMappingURL=In_InsRankSettingAi.js.map