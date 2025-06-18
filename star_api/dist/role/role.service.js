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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
const role_menu_entity_1 = require("./entities/role_menu.entity");
const menu_bar_service_1 = require("../menubar/menu.bar.service");
const menu_bar_entity_1 = require("../menubar/entities/menu.bar.entity");
const RepRoleSetting_1 = require("./model/RepRoleSetting");
const List = [
    {
        id: '@id',
        role: 'admin',
        btnRolesCheckedList: ['read:system', 'write:system', 'delete:system'],
    },
    {
        id: '@id',
        role: 'editor',
        btnRolesCheckedList: ['read:system', 'write:system'],
    },
];
let RoleService = class RoleService {
    constructor(roleRepository, roleMenuRepository, dataSource, menuBarRepository, menuService) {
        this.roleRepository = roleRepository;
        this.roleMenuRepository = roleMenuRepository;
        this.dataSource = dataSource;
        this.menuBarRepository = menuBarRepository;
        this.menuService = menuService;
        this.dbRole = new RepRoleSetting_1.RepRoleSetting(this.roleRepository);
    }
    async create(createRoleDto) {
        const role = new role_entity_1.Role();
        role.name = createRoleDto.role;
        role.status = createRoleDto.status;
        role.remark = createRoleDto.remark;
        await this.roleRepository.insert(role);
        await this.roleMenuRepository.delete({ role_id: role.id });
        const treeArray = createRoleDto['treeArray:'];
        if (treeArray && treeArray.length > 0) {
            const menus = await this.menuService.getMenus(treeArray);
            console.log('get menus:', menus);
            for (const m of menus) {
                const roleMenu = new role_menu_entity_1.RoleMenu();
                roleMenu.role_id = role.id;
                roleMenu.menu_id = m.id;
                await this.roleMenuRepository.insert(roleMenu);
            }
        }
        return role.id;
    }
    async getList(queryParams) {
        const res = await this.dbRole.findAndCountSp(queryParams.page, queryParams.pageNum);
        res.list.forEach(async (r) => {
            r['role'] = r.name;
            r['remark'] = r.remark;
            r['status'] = r.status;
            r['create_at'] = r.create_at;
            r['btnRolesCheckedList'] = [
                'read:system',
                'write:system',
                'delete:system',
            ];
            delete r.name;
        });
        return { list: res.list, total: res.total };
    }
    async findAll() {
        const list = await this.roleRepository.find({ take: 50 });
        list.forEach(async (r) => {
            r['role'] = r.name;
            r['remark'] = r.remark;
            r['status'] = r.status;
            r['create_at'] = r.create_at;
            r['btnRolesCheckedList'] = [
                'read:system',
                'write:system',
                'delete:system',
            ];
            delete r.name;
        });
        return list;
    }
    async findOne(id) {
        const res = await this.roleRepository.findOneBy({ id: id });
        [res].forEach(async (r) => {
            r['role'] = r.name;
            r['remark'] = r.remark;
            r['status'] = r.status;
            r['create_at'] = r.create_at;
            r['btnRolesCheckedList'] = [
                'read:system',
                'write:system',
                'delete:system',
            ];
            delete r.name;
        });
        return [res];
    }
    async update(updateRoleDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        await this.roleRepository.update({ id: updateRoleDto.id }, { name: updateRoleDto.role, status: updateRoleDto.status, remark: updateRoleDto.remark });
        await this.roleMenuRepository.delete({ role_id: updateRoleDto.id });
        const treeArray = updateRoleDto['treeArray:'];
        if (treeArray && treeArray.length > 0) {
            const menus = await this.menuService.getMenus(treeArray);
            console.log('get menus:', menus);
            for (const m of menus) {
                const roleMenu = new role_menu_entity_1.RoleMenu();
                roleMenu.role_id = updateRoleDto.id;
                roleMenu.menu_id = m.id;
                await this.roleMenuRepository.insert(roleMenu);
            }
        }
        await queryRunner.commitTransaction();
    }
    async remove(ids) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        for (const id of ids) {
            await this.roleRepository.delete({ id: id });
            await this.roleMenuRepository.delete({ role_id: id });
        }
        await queryRunner.commitTransaction();
    }
    async getMenus(roleId) {
        const query = this.menuBarRepository.createQueryBuilder('menu_bar')
            .leftJoin('role_menu', 'r', 'r.menu_id = menu_bar.id')
            .select(['menu_bar.id', 'menu_bar.path', 'menu_bar.name', 'menu_bar.title', 'menu_bar.pid', 'menu_bar.component', 'menu_bar.sort', 'menu_bar.icon', 'menu_bar.display', 'menu_bar.status'])
            .addSelect('r.role_id');
        if (roleId) {
            query.andWhere('r.role_id = :roleId', { roleId });
        }
        query.orderBy('menu_bar.sort', 'ASC');
        return query.getMany();
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(role_menu_entity_1.RoleMenu)),
    __param(3, (0, typeorm_1.InjectRepository)(menu_bar_entity_1.MenuBar)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource,
        typeorm_2.Repository,
        menu_bar_service_1.MenuBarService])
], RoleService);
//# sourceMappingURL=role.service.js.map