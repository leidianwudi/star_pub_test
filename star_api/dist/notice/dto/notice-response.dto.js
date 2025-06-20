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
exports.NoticeResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NoticeResponseDto {
}
exports.NoticeResponseDto = NoticeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '通知ID:0' }),
    __metadata("design:type", Number)
], NoticeResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '通知标题:string' }),
    __metadata("design:type", String)
], NoticeResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '通知内容:string' }),
    __metadata("design:type", String)
], NoticeResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间（ISO格式）:string' }),
    __metadata("design:type", String)
], NoticeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '更新时间（ISO格式）:string' }),
    __metadata("design:type", String)
], NoticeResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=notice-response.dto.js.map