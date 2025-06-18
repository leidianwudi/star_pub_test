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
exports.CreateSearchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSearchDto {
}
exports.CreateSearchDto = CreateSearchDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '搜索关键词', example: 'NestJS' }),
    __metadata("design:type", String)
], CreateSearchDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '搜索类型，例如文章、视频等', example: 'article' }),
    __metadata("design:type", String)
], CreateSearchDto.prototype, "type", void 0);
//# sourceMappingURL=create-search.dto.js.map