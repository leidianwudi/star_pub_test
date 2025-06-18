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
exports.SearchResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SearchResponseDto {
}
exports.SearchResponseDto = SearchResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '搜索项ID:0' }),
    __metadata("design:type", Number)
], SearchResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '搜索关键词:string' }),
    __metadata("design:type", String)
], SearchResponseDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '搜索类型，例如 article、doc 等:string' }),
    __metadata("design:type", String)
], SearchResponseDto.prototype, "type", void 0);
//# sourceMappingURL=search-response.dto.js.map