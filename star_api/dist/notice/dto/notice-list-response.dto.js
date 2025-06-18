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
exports.NoticeListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const notice_response_dto_1 = require("./notice-response.dto");
class NoticeListResponseDto {
}
exports.NoticeListResponseDto = NoticeListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '通知列表', type: [notice_response_dto_1.NoticeResponseDto] }),
    __metadata("design:type", Array)
], NoticeListResponseDto.prototype, "list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '总记录数' }),
    __metadata("design:type", Number)
], NoticeListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=notice-list-response.dto.js.map