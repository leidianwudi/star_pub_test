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
exports.AdminListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const admin_response_dto_1 = require("./admin-response.dto");
class AdminListResponseDto {
}
exports.AdminListResponseDto = AdminListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [admin_response_dto_1.AdminResponseDto],
        description: '用户列表',
        example: [
            {
                id: '1',
                username: 'user1',
                role: 'Admin',
            },
            {
                id: '2',
                username: 'user2',
                role: 'User',
            },
        ],
    }),
    __metadata("design:type", Array)
], AdminListResponseDto.prototype, "list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: '总数'
    }),
    __metadata("design:type", Number)
], AdminListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=admin-list-response.dto.js.map