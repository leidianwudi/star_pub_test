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
exports.MenuBarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_bar_entity_1 = require("./entities/menu.bar.entity");
const RepMenuBar_1 = require("./model/RepMenuBar");
let MenuBarService = class MenuBarService {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
        this.dbMenu = new RepMenuBar_1.RepMenuBar(this.menuRepository);
    }
    async create(createMenuDto) {
        const m = new menu_bar_entity_1.MenuBar();
        m.pid = createMenuDto.pid;
        m.component = createMenuDto.component;
        createMenuDto.redirect && (m.redirect = createMenuDto.redirect);
        m.path = createMenuDto.path;
        m.name = createMenuDto.name;
        m.sort = createMenuDto.sort;
        m.icon = createMenuDto.icon;
        m.display = createMenuDto.display;
        m.status = createMenuDto.status;
        m.title = createMenuDto.title;
        await this.menuRepository.insert(m);
        return m.id;
    }
    async getList(params) {
        const res = await this.dbMenu.findAndCountSp(params.page, params.pageNum, { order: { sort: 'ASC' } });
        return res;
    }
    async findAll() {
        return await this.menuRepository.find({ order: { sort: 'ASC' } });
    }
    async findOne(id) {
        const res = await this.menuRepository.findOneBy({ id: id });
        return res;
    }
    findMenu(id) {
        return this.menuRepository.findOneBy({ id: id });
    }
    update(updateMenuDto) {
        const m = new menu_bar_entity_1.MenuBar();
        m.pid = updateMenuDto.pid;
        m.component = updateMenuDto.component;
        updateMenuDto.redirect && (m.redirect = updateMenuDto.redirect);
        m.path = updateMenuDto.path;
        m.name = updateMenuDto.name;
        m.sort = updateMenuDto.sort;
        m.icon = updateMenuDto.icon;
        m.display = updateMenuDto.display;
        m.status = updateMenuDto.status;
        m.title = updateMenuDto.title;
        console.log('update menu:', updateMenuDto.id, m);
        return this.menuRepository.update({ id: updateMenuDto.id }, m);
    }
    remove(id) {
        return this.menuRepository.delete({ id: id });
    }
    getMenus(paths) {
        return this.menuRepository.find({ where: { path: (0, typeorm_2.In)(paths) } });
    }
    async getTree(roleId) {
        const menuItems = await this.getMenuItemsFromDatabase(roleId);
        const filteredMenuItems = this.filterByStatusAndDisplay(menuItems);
        const menuMap = this.createMenuMap(filteredMenuItems);
        const finalMenuItems = this.filterMenuItems(filteredMenuItems, menuMap);
        return this.addMetaField(finalMenuItems);
    }
    getMenuItemsFromDatabase(roleId) {
        const query = this.menuRepository.createQueryBuilder('menu_bar')
            .innerJoinAndSelect('role_menu', 'r', 'r.menu_id = menu_bar.id')
            .select([
            'menu_bar.id',
            'menu_bar.path',
            'menu_bar.name',
            'menu_bar.title',
            'menu_bar.pid',
            'menu_bar.component',
            'menu_bar.sort',
            'menu_bar.icon',
            'menu_bar.display',
            'menu_bar.status'
        ])
            .addSelect('r.role_id')
            .orderBy('menu_bar.sort', 'ASC');
        if (roleId) {
            query.andWhere('r.role_id = :roleId', { roleId });
        }
        return query.getMany();
    }
    filterByStatusAndDisplay(menuItems) {
        return menuItems.filter(item => item.status === 1 && item.display === 1);
    }
    createMenuMap(menuItems) {
        return new Map(menuItems.map(item => [
            item.id,
            {
                ...item,
                meta: {
                    title: item.title,
                    icon: item.icon
                }
            }
        ]));
    }
    filterMenuItems(menuItems, menuMap) {
        return menuItems.filter(item => {
            const { pid, id } = item;
            if (pid === '0') {
                const children = menuItems.filter(child => child.pid === id);
                return children.length > 0 && !children.every(child => child.display === 0 && child.status === 0);
            }
            const parentMenu = menuMap.get(pid);
            if (!parentMenu || parentMenu.display !== 1 || parentMenu.status !== 1) {
                return false;
            }
            return menuItems.some(child => child.pid === pid);
        });
    }
    addMetaField(menuItems) {
        return menuItems.map(item => ({
            ...item,
            meta: {
                title: item.title,
                icon: item.icon
            }
        }));
    }
};
exports.MenuBarService = MenuBarService;
exports.MenuBarService = MenuBarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_bar_entity_1.MenuBar)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuBarService);
//# sourceMappingURL=menu.bar.service.js.map