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
exports.GenerateCodeResultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GenerateCodeResultDto {
}
exports.GenerateCodeResultDto = GenerateCodeResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: '生成状态' }),
    __metadata("design:type", String)
], GenerateCodeResultDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '代码生成成功', description: '返回信息' }),
    __metadata("design:type", String)
], GenerateCodeResultDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['user.entity.ts', 'user.controller.ts'],
        description: '生成的文件列表',
        isArray: true,
    }),
    __metadata("design:type", Array)
], GenerateCodeResultDto.prototype, "files", void 0);
//# sourceMappingURL=generate-code-result.dto.js.map