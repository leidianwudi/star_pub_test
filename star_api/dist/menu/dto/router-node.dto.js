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
exports.RouterNodeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const router_meta_dto_1 = require("./router-meta.dto");
class RouterNodeDto {
}
exports.RouterNodeDto = RouterNodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '菜单 ID:1', example: '1' }),
    __metadata("design:type", String)
], RouterNodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '父级菜单 ID:0', example: '0' }),
    __metadata("design:type", String)
], RouterNodeDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '路由路径:/dashboard', example: '/dashboard' }),
    __metadata("design:type", String)
], RouterNodeDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '组件名（用于前端渲染）:Layout', example: 'Layout' }),
    __metadata("design:type", String)
], RouterNodeDto.prototype, "component", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '元信息，包含标题与图标:title:仪表盘,icon:dashboard' }),
    __metadata("design:type", router_meta_dto_1.RouterMetaDto)
], RouterNodeDto.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '子菜单项列表',
        type: () => [RouterNodeDto],
        required: false
    }),
    __metadata("design:type", Array)
], RouterNodeDto.prototype, "children", void 0);
//# sourceMappingURL=router-node.dto.js.map