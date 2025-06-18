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
exports.RouterMetaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RouterMetaDto {
}
exports.RouterMetaDto = RouterMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '路由标题（前端展示）', example: '仪表盘' }),
    __metadata("design:type", String)
], RouterMetaDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '图标名，用于菜单展示', example: 'dashboard' }),
    __metadata("design:type", String)
], RouterMetaDto.prototype, "icon", void 0);
//# sourceMappingURL=router-meta.dto.js.map