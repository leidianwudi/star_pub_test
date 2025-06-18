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
exports.AutocodeController = void 0;
const common_1 = require("@nestjs/common");
const autocode_service_1 = require("./autocode.service");
const swagger_1 = require("@nestjs/swagger");
const generate_code_result_dto_1 = require("./dto/generate-code-result.dto");
const public_decorator_1 = require("../auth/public.decorator");
let AutocodeController = class AutocodeController {
    constructor(autocodeService) {
        this.autocodeService = autocodeService;
    }
    async generate() {
        let res = await this.autocodeService.generate();
        return res;
    }
};
exports.AutocodeController = AutocodeController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)("generate"),
    (0, swagger_1.ApiOperation)({ summary: '自动生成代码（公开接口）' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '生成代码成功后返回生成结果',
        type: generate_code_result_dto_1.GenerateCodeResultDto,
        schema: {
            example: {
                status: 'success',
                message: '代码生成成功',
                files: ['user.entity.ts', 'user.controller.ts', 'user.service.ts'],
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AutocodeController.prototype, "generate", null);
exports.AutocodeController = AutocodeController = __decorate([
    (0, swagger_1.ApiTags)('代码生成'),
    (0, common_1.Controller)('autocode'),
    __metadata("design:paramtypes", [autocode_service_1.AutocodeService])
], AutocodeController);
//# sourceMappingURL=autocode.controller.js.map