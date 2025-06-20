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
exports.UserInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserInfoDto {
}
exports.UserInfoDto = UserInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用户名: admin', example: 'admin' }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色列表: ["Admin"]', example: ['Admin'] }),
    __metadata("design:type", Array)
], UserInfoDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '权限列表: ["read:system", "write:system"]', example: ['read:system', 'write:system'] }),
    __metadata("design:type", Array)
], UserInfoDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '头像 URL: ["https://i.gtimg.cn/club/item/face/img/2/16022_100.gif"] ', example: 'https://i.gtimg.cn/club/item/face/img/2/16022_100.gif' }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "avatar", void 0);
//# sourceMappingURL=user-info.dto.js.map