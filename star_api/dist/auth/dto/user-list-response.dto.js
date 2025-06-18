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
exports.UserListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_info_dto_1 = require("./user-info.dto");
class UserListResponseDto {
}
exports.UserListResponseDto = UserListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '用户列表',
        type: [user_info_dto_1.UserInfoDto],
        example: [
            {
                username: 'admin',
                roles: ['Admin'],
                permissions: ['read:system', 'write:system'],
                avatar: 'https://i.gtimg.cn/club/item/face/img/2/16022_100.gif',
            },
            {
                username: 'user1',
                roles: ['User'],
                permissions: ['read:system'],
                avatar: 'https://i.gtimg.cn/club/item/face/img/2/16022_101.gif',
            },
        ],
    }),
    __metadata("design:type", Array)
], UserListResponseDto.prototype, "list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '用户总数',
        example: 2,
    }),
    __metadata("design:type", Number)
], UserListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=user-list-response.dto.js.map