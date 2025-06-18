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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const remix_icon_list_dto_1 = require("./remix-icon-list.dto");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const remixIcon_1 = require("./mock/remixIcon");
const public_decorator_1 = require("./auth/public.decorator");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getRemixIcon() {
        return { list: remixIcon_1.List, total: remixIcon_1.List.length };
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '欢迎信息', description: '返回系统欢迎信息或状态描述' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '欢迎信息返回成功', schema: { example: 'Hello World!' } }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '获取 RemixIcon 图标列表', description: '返回所有可用 Remix 图标数据' }),
    (0, swagger_1.ApiResponse)({
        description: '图标列表获取成功',
        type: remix_icon_list_dto_1.RemixIconListDto,
    }),
    (0, common_1.Get)("remixIcon/getList"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRemixIcon", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('系统接口'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map