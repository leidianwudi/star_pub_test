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
exports.RoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RoleDto {
}
exports.RoleDto = RoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色ID:1', example: '1' }),
    __metadata("design:type", String)
], RoleDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色名称:管理员', example: '管理员' }),
    __metadata("design:type", String)
], RoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色编码（用于权限控制）：ADMIN', example: 'ADMIN' }),
    __metadata("design:type", String)
], RoleDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色描述信息:拥有全部系统权限', example: '拥有全部系统权限' }),
    __metadata("design:type", String)
], RoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间:2024-12-01T12:00:00Z', example: '2024-12-01T12:00:00Z' }),
    __metadata("design:type", String)
], RoleDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '更新时间:2025-01-01T12:00:00Z', example: '2025-01-01T12:00:00Z' }),
    __metadata("design:type", String)
], RoleDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=role.dto.js.map