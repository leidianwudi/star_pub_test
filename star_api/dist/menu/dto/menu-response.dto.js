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
exports.MenuResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const menu_entity_1 = require("../entities/menu.entity");
class MenuResponseDto {
}
exports.MenuResponseDto = MenuResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '操作结果消息，例如“添加成功”或“修改成功”',
        example: '添加成功'
    }),
    __metadata("design:type", String)
], MenuResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '菜单项的详细信息',
        type: () => menu_entity_1.Menu,
        required: false
    }),
    __metadata("design:type", menu_entity_1.Menu)
], MenuResponseDto.prototype, "data", void 0);
//# sourceMappingURL=menu-response.dto.js.map