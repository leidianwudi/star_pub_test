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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const public_decorator_1 = require("./public.decorator");
const swagger_1 = require("@nestjs/swagger");
const user_info_dto_1 = require("./dto/user-info.dto");
const role2permission = {
    Admin: ['read:system', 'write:system', 'delete:system'],
    Editor: ['read:system', 'write:system'],
    Test: ['read:system'],
};
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signIn(signInDto, req) {
        let ip = req.ip;
        if (req.headers['x-forwarded-for']) {
            ip = req.headers['x-forwarded-for'].split(',')[0].trim();
        }
        if (ip === '::1') {
            ip = '127.0.0.1';
        }
        return this.authService.signIn(signInDto.username, signInDto.password, ip);
    }
    getUserInfo() {
        let roles = ["Admin"];
        const permissions = [
            ...new Set(roles.flatMap((role) => role2permission[role])),
        ];
        return {
            username: "admin",
            roles: roles,
            permissions,
            avatar: 'https://i.gtimg.cn/club/item/face/img/2/16022_100.gif',
        };
    }
    logout() {
        return {};
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: '用户登录', description: '提供用户名与密码进行登录认证' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)("userInfo"),
    (0, swagger_1.ApiOperation)({ summary: '获取用户信息', description: '获取当前用户的基本信息、角色和权限' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回用户信息', type: user_info_dto_1.UserInfoDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Get)("logout"),
    (0, swagger_1.ApiOperation)({ summary: '退出登录', description: '清除当前用户的认证信息' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '退出成功' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('认证管理'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map