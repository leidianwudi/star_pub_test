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
exports.SlotsSettingResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const slots_setting_dto_1 = require("./slots-setting.dto");
class SlotsSettingResponseDto {
}
exports.SlotsSettingResponseDto = SlotsSettingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '操作结果信息', example: '创建成功' }),
    __metadata("design:type", String)
], SlotsSettingResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建或更新后的配置项', type: slots_setting_dto_1.SlotsSettingDto }),
    __metadata("design:type", slots_setting_dto_1.SlotsSettingDto)
], SlotsSettingResponseDto.prototype, "data", void 0);
//# sourceMappingURL=slots-setting-response.dto.js.map