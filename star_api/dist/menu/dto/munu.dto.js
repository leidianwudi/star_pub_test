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
exports.MenuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MenuDto {
}
exports.MenuDto = MenuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '菜单项ID', example: 1 }),
    __metadata("design:type", Number)
], MenuDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '菜单名称', example: '系统设置' }),
    __metadata("design:type", String)
], MenuDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '上级菜单ID（顶级为0）', example: 0 }),
    __metadata("design:type", Number)
], MenuDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '路由路径', example: '/system/settings' }),
    __metadata("design:type", String)
], MenuDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '图标', example: 'setting' }),
    __metadata("design:type", String)
], MenuDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '菜单是否启用', example: true }),
    __metadata("design:type", Boolean)
], MenuDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '子菜单项列表', type: () => [MenuDto], required: false }),
    __metadata("design:type", Array)
], MenuDto.prototype, "children", void 0);
//# sourceMappingURL=munu.dto.js.map