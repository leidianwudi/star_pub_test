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
exports.SlotsListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const slots_setting_dto_1 = require("./slots-setting.dto");
class SlotsListResponseDto {
}
exports.SlotsListResponseDto = SlotsListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '总记录数', example: 50 }),
    __metadata("design:type", Number)
], SlotsListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '配置项列表', type: [slots_setting_dto_1.SlotsSettingDto] }),
    __metadata("design:type", Array)
], SlotsListResponseDto.prototype, "list", void 0);
//# sourceMappingURL=slots-list-response.dto.js.map