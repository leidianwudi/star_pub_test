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
exports.SlotsSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SlotsSettingDto {
}
exports.SlotsSettingDto = SlotsSettingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '配置项ID: 12345', example: '12345' }),
    __metadata("design:type", String)
], SlotsSettingDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '游戏配置名称：老虎机难度设置', example: '老虎机难度设置' }),
    __metadata("design:type", String)
], SlotsSettingDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '配置值：{"difficulty":"hard"}', example: '{"difficulty":"hard"}' }),
    __metadata("design:type", String)
], SlotsSettingDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间: 2024-12-01T12:00:00Z', example: '2024-12-01T12:00:00Z' }),
    __metadata("design:type", String)
], SlotsSettingDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '更新时间: 2025-01-01T12:00:00Z', example: '2025-01-01T12:00:00Z' }),
    __metadata("design:type", String)
], SlotsSettingDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=slots-setting.dto.js.map