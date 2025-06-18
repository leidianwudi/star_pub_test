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
exports.Out_GameOddsExt = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_GameOddsExt {
}
exports.Out_GameOddsExt = Out_GameOddsExt;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_GameOddsExt.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排序" }),
    __metadata("design:type", Number)
], Out_GameOddsExt.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型编码" }),
    __metadata("design:type", String)
], Out_GameOddsExt.prototype, "game_type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    __metadata("design:type", String)
], Out_GameOddsExt.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "几率key" }),
    __metadata("design:type", String)
], Out_GameOddsExt.prototype, "odds_key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "几率值" }),
    __metadata("design:type", String)
], Out_GameOddsExt.prototype, "odds_value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效" }),
    __metadata("design:type", Number)
], Out_GameOddsExt.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    __metadata("design:type", String)
], Out_GameOddsExt.prototype, "desc", void 0);
//# sourceMappingURL=Out_GameOddsExt.js.map