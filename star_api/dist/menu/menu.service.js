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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_entity_1 = require("./entities/menu.entity");
[
    {
        url: '/menuManagement/getTree',
        type: 'get',
        response() {
            return {
                code: 200,
                msg: 'success',
                data: {
                    total: 999,
                    list: [
                        {
                            id: 'root',
                            label: '全部角色',
                            children: [
                                {
                                    id: '@id',
                                    role: 'admin',
                                    label: 'admin角色',
                                },
                                {
                                    id: '@id',
                                    role: 'editor',
                                    label: 'editor角色',
                                },
                            ],
                        },
                    ],
                },
            };
        },
    },
    {
        url: '/menuManagement/doEdit',
        type: 'post',
        response() {
            return {
                code: 200,
                msg: '模拟保存成功',
            };
        },
    },
    {
        url: '/menuManagement/doDelete',
        type: 'post',
        response() {
            return {
                code: 200,
                msg: '模拟删除成功',
            };
        },
    },
];
let MenuService = class MenuService {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    async create(createMenuDto) {
        let m = new menu_entity_1.Menu();
        m.pid = createMenuDto.parentId;
        m.component = createMenuDto.component;
        m.icon = createMenuDto.meta.icon;
        m.title = createMenuDto.meta.title;
        m.path = createMenuDto.path;
        m.name = createMenuDto.name;
        await this.menuRepository.insert(m);
        return m.id;
    }
    findAll() {
        return {
            total: 999,
            list: [
                {
                    id: 'root',
                    label: '全部角色',
                    children: [
                        {
                            id: '@id',
                            role: 'admin',
                            label: 'admin角色',
                        },
                        {
                            id: '@id',
                            role: 'editor',
                            label: 'editor角色',
                        },
                    ],
                },
            ],
        };
    }
    findOne(id) {
        return `This action returns a #${id} menu`;
    }
    findMenu(path) {
        return this.menuRepository.findOneBy({ path: path });
    }
    update(updateMenuDto) {
        let m = new menu_entity_1.Menu();
        m.pid = updateMenuDto.parentId;
        m.component = updateMenuDto.component;
        m.icon = updateMenuDto.meta.icon;
        m.title = updateMenuDto.meta.title;
        m.path = updateMenuDto.path;
        m.name = updateMenuDto.name;
        console.log("update menu:", updateMenuDto.id, m);
        return this.menuRepository.update({ id: updateMenuDto.id }, m);
    }
    remove(id) {
        return this.menuRepository.delete({ id: id });
    }
    getMenus(paths) {
        return this.menuRepository.find({ where: { path: (0, typeorm_2.In)(paths) } });
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuService);
//# sourceMappingURL=menu.service.js.map