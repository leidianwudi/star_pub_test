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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const role_enum_1 = require("./role.enum");
const admin_entity_1 = require("../admin/entities/admin.entity");
const ipip_ipdb_1 = require("ipip-ipdb");
const path = require("path");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(adminRepository, jwtService, configService) {
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async getIpLocation(ip) {
        try {
            const dbPath = path.join(__dirname, '../../ipipfree.ipdb');
            const db = new ipip_ipdb_1.City(dbPath);
            const info = db.findInfo(ip, 'CN');
            if (info) {
                return info.cityName ?? '未知城市';
            }
            return '未知城市';
        }
        catch (error) {
            console.error('获取 IP 地理位置信息失败:', error);
            return '未知城市';
        }
    }
    async signIn(username, pass, ip) {
        const admin = await this.adminRepository.findOneBy({ account: username });
        if (!admin) {
            throw new common_1.UnauthorizedException('账号不存在！');
        }
        if (admin.locked === 1) {
            throw new common_1.UnauthorizedException('账号已被冻结，无法登录！');
        }
        if (admin.enable === 0) {
            throw new common_1.UnauthorizedException('账号已被禁用，无法登录！');
        }
        if (admin?.password !== pass) {
            admin.failed_attempts -= 1;
            if (admin.failed_attempts < 0) {
                admin.failed_attempts = 0;
                admin.last_attempt_time = new Date();
                admin.lock_until = new Date(Date.now() + 10 * 60 * 1000);
                admin.locked = 1;
            }
            await this.adminRepository.save(admin);
            throw new common_1.UnauthorizedException('密码错误！剩余输入次数：' + admin.failed_attempts);
        }
        admin.failed_attempts = 5;
        admin.ip = ip;
        admin.ip_city = await this.getIpLocation(ip);
        await this.adminRepository.save(admin);
        const payload = {
            userid: admin.id,
            username: admin.account,
            roles: [role_enum_1.Role.Admin],
            roleId: admin.role_id
        };
        let secret = this.configService.get("auth").secret;
        return {
            token: await this.jwtService.signAsync(payload, { secret: secret }),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map