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
exports.In_InsGameBar = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsGameBar {
}
exports.In_InsGameBar = In_InsGameBar;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsGameBar.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排序" }),
    __metadata("design:type", Number)
], In_InsGameBar.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型编码" }),
    __metadata("design:type", String)
], In_InsGameBar.prototype, "game_type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    __metadata("design:type", String)
], In_InsGameBar.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否显示;0:不显示;1:显示" }),
    __metadata("design:type", Number)
], In_InsGameBar.prototype, "visible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否维护;0:正常;1:维护中" }),
    __metadata("design:type", Number)
], In_InsGameBar.prototype, "repair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "标签;0:普遍;1:热门;2:好玩;3:新游戏" }),
    __metadata("design:type", Number)
], In_InsGameBar.prototype, "tip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    __metadata("design:type", String)
], In_InsGameBar.prototype, "desc", void 0);
//# sourceMappingURL=In_InsGameBar.js.map