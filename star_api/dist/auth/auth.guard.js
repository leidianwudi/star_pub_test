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
exports.AuthGuard = exports.TokenUtils = void 0;
const crypto = require("node:crypto");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const public_decorator_1 = require("./public.decorator");
const config_1 = require("@nestjs/config");
const role_enum_1 = require("./role.enum");
const UserService_1 = require("../users/UserService");
const ToolStr_1 = require("../common/ToolStr");
class TokenUtils {
    static genGameServerToken(uid, worldServerUrl, roomId, gameType, time, secretKey) {
        let content = uid + worldServerUrl + roomId + gameType + time + secretKey;
        let token = crypto.createHash('md5').update(content).digest('hex');
        return token;
    }
}
exports.TokenUtils = TokenUtils;
let AuthGuard = class AuthGuard {
    constructor(configService, jwtService, reflector, userService) {
        this.configService = configService;
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.userService = userService;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const authHeader = this.extractTokenFromHeader(request);
        if (!authHeader) {
            throw new common_1.UnauthorizedException();
        }
        if (authHeader.type == "Bearer") {
            try {
                const payload = await this.jwtService.verifyAsync(authHeader.token);
                console.log('request user:', payload);
                request['user'] = payload;
            }
            catch (e) {
                console.log('verify jwt err:', e);
                throw new common_1.UnauthorizedException();
            }
            return true;
        }
        else if (authHeader.type == "Basic") {
            try {
                const payload = await this.jwtService.verifyAsync(authHeader.token);
                console.log('request token:', payload);
                let authCfg = this.configService.get("auth");
                let sign = TokenUtils.genGameServerToken(payload.uid, payload.token, "", "", payload.time, authCfg.secretKey);
                if (sign != payload.sign) {
                    return false;
                }
                let userEn = await this.userService.selectById(ToolStr_1.ToolStr.str2Num(payload.uid));
                console.log('request user-----------:', userEn);
                if (!userEn) {
                    return false;
                }
                let user = {
                    userid: payload.uid,
                    account: userEn.account,
                    roles: [role_enum_1.Role.User],
                };
                request['user'] = user;
            }
            catch (e) {
                console.log('verify jwt err:', e);
                throw new common_1.UnauthorizedException();
            }
            return true;
        }
        else {
            return false;
        }
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        console.log('tt-----------------:', type, token);
        if (type == "Bearer") {
            return { type: type, token: token };
        }
        else if (type == "Basic") {
            return { type: type, token: token };
        }
        else {
            return undefined;
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        core_1.Reflector,
        UserService_1.UserService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map