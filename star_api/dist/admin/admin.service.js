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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const role_entity_1 = require("../role/entities/role.entity");
const RepAdminSetting_1 = require("./model/RepAdminSetting");
const List = [
    {
        id: '1',
        account: 'admin',
        username: '超级',
        password: 'admin',
        email: 'admin@email',
        roles: ['admin'],
        datatime: '@datetime',
    },
    {
        id: '2',
        account: 'admin',
        username: 'lala',
        password: 'editor',
        email: 'editor@email',
        roles: ['editor'],
        datatime: '@datetime',
    },
    {
        id: '3',
        account: 'test',
        username: '测试',
        password: 'test',
        email: 'test@email',
        roles: ['admin', 'editor'],
        datatime: '@datetime',
    },
];
let AdminService = class AdminService {
    constructor(adminRepository, roleRepository) {
        this.adminRepository = adminRepository;
        this.roleRepository = roleRepository;
        this.dbSetting = new RepAdminSetting_1.RepAdminSetting(this.adminRepository);
    }
    async create(createUserDto) {
        try {
            const adminnEn = new admin_entity_1.Admin();
            adminnEn.account = createUserDto.account;
            adminnEn.password = createUserDto.password;
            adminnEn.token = createUserDto.token;
            adminnEn.nick = createUserDto.nick;
            adminnEn.failed_attempts = createUserDto.failed_attempts;
            adminnEn.last_attempt_time = createUserDto.last_attempt_time;
            adminnEn.locked = createUserDto.locked;
            adminnEn.lock_until = createUserDto.lock_until;
            adminnEn.enable = createUserDto.enable;
            adminnEn.ip = createUserDto.ip;
            adminnEn.ip_city = createUserDto.ip_city;
            adminnEn.role_id = createUserDto.role_id;
            adminnEn.desc = createUserDto.desc;
            await this.adminRepository.insert(adminnEn);
            return adminnEn.id;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 500);
        }
    }
    async getList(query) {
        const pageNum = Number(query.pageNum);
        const safePage = Math.max(1, query.page);
        const page = (safePage - 1) * pageNum;
        const [users, total] = await this.adminRepository
            .createQueryBuilder('admin')
            .leftJoinAndSelect('admin.role', 'role')
            .skip(page)
            .take(pageNum)
            .getManyAndCount();
        const result = users.map((admin) => {
            return {
                id: admin.id,
                account: admin.account,
                password: admin.password,
                token: admin.token,
                nick: admin.nick,
                failed_attempts: admin.failed_attempts,
                last_attempt_time: admin.last_attempt_time,
                locked: admin.locked,
                lock_until: admin.lock_until,
                enable: admin.enable,
                ip: admin.ip,
                ip_city: admin.ip_city,
                role_id: admin.role_id,
                desc: admin.desc,
                role_name: admin.role ? admin.role.name : ''
            };
        });
        return {
            list: result,
            page,
            pageNum,
            total,
            totalPages: Math.ceil(total / pageNum),
        };
    }
    async findOne(id) {
        return await this.adminRepository.findOneBy({ id });
    }
    getUser(username) {
        return this.adminRepository.findOneBy({ account: username });
    }
    update(updateUserDto) {
        const an = new admin_entity_1.Admin();
        an.account = updateUserDto.account;
        an.password = updateUserDto.password;
        an.token = updateUserDto.token;
        an.nick = updateUserDto.nick;
        an.failed_attempts = updateUserDto.failed_attempts;
        an.last_attempt_time = updateUserDto.last_attempt_time;
        an.locked = updateUserDto.locked;
        an.lock_until = updateUserDto.lock_until;
        an.enable = updateUserDto.enable;
        an.ip = updateUserDto.ip;
        an.ip_city = updateUserDto.ip_city;
        an.role_id = updateUserDto.role_id;
        an.desc = updateUserDto.desc;
        console.log('update user:', updateUserDto.id, an);
        return this.adminRepository.update({ id: updateUserDto.id }, an);
    }
    remove(ids) {
        return this.adminRepository.delete(ids);
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=admin.service.js.map