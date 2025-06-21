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
exports.In_InsRankWeekWin = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsRankWeekWin {
}
exports.In_InsRankWeekWin = In_InsRankWeekWin;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsRankWeekWin.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "一年的第几天" }),
    __metadata("design:type", Number)
], In_InsRankWeekWin.prototype, "week", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    __metadata("design:type", String)
], In_InsRankWeekWin.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "赢得" }),
    __metadata("design:type", Number)
], In_InsRankWeekWin.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否ai, 0:不是，1:是" }),
    __metadata("design:type", Number)
], In_InsRankWeekWin.prototype, "is_ai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效,0:失效，1:生效" }),
    __metadata("design:type", Number)
], In_InsRankWeekWin.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排行数字最后变动时间" }),
    __metadata("design:type", Date)
], In_InsRankWeekWin.prototype, "rank_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经派奖，0:否,1:是" }),
    __metadata("design:type", Number)
], In_InsRankWeekWin.prototype, "is_send_award", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经领将，0:否,1:是" }),
    __metadata("design:type", Number)
], In_InsRankWeekWin.prototype, "is_get_award", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    __metadata("design:type", String)
], In_InsRankWeekWin.prototype, "desc", void 0);
//# sourceMappingURL=In_InsRankWeekWin.js.map