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
exports.MenuBarController = void 0;
const common_1 = require("@nestjs/common");
const create_menu_bar_dto_1 = require("./dto/create-menu-bar.dto");
const update_menu_bar_dto_1 = require("./dto/update-menu-bar.dto");
const delete_menu_bar_dto_1 = require("./dto/delete-menu-bar.dto");
const menu_bar_service_1 = require("./menu.bar.service");
let MenuBarController = class MenuBarController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    create(createMenuDto) {
        return this.menuService.create(createMenuDto);
    }
    async getTree(request) {
        const roleId = request['user'].roleId;
        const list = await this.menuService.getTree(roleId);
        const res = list.map((item) => {
            return { ...item };
        });
        return { list: res };
    }
    async getList(params) {
        const list = await this.menuService.getList(params);
        return list;
    }
    async findAll() {
        const list = await this.menuService.findAll();
        const res = list.map((item) => {
            return { ...item };
        });
        return { list: res, total: res.length };
    }
    async findOne(id) {
        console.log('findOne:', id);
        const list = await this.menuService.findOne(id);
        console.log('findOneData:', list);
        return { list: [list], total: 1 };
    }
    async update(updateMenuDto) {
        console.log('update menu:', updateMenuDto);
        if (updateMenuDto.id) {
            await this.menuService.update(updateMenuDto);
            return { message: '修改成功' };
        }
        else {
            await this.menuService.create(updateMenuDto);
            return { message: '添加成功' };
        }
    }
    async remove(deleteMenuDto) {
        console.log('do delete:', deleteMenuDto);
        const menu = await this.menuService.findMenu(deleteMenuDto.ids);
        if (!menu) {
            throw new common_1.HttpException('菜单项不存在', common_1.HttpStatus.NOT_FOUND);
        }
        await this.menuService.remove(menu.id);
        return { message: '删除成功' };
    }
};
exports.MenuBarController = MenuBarController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_bar_dto_1.CreateMenuBarDto]),
    __metadata("design:returntype", void 0)
], MenuBarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getTree'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], MenuBarController.prototype, "getTree", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('getList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuBarController.prototype, "getList", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuBarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuBarController.prototype, "findOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('doEdit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_menu_bar_dto_1.UpdateMenuBarDto]),
    __metadata("design:returntype", Promise)
], MenuBarController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('doDelete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_menu_bar_dto_1.DeleteMenuBarDto]),
    __metadata("design:returntype", Promise)
], MenuBarController.prototype, "remove", null);
exports.MenuBarController = MenuBarController = __decorate([
    (0, common_1.Controller)('menuBarManagement'),
    __metadata("design:paramtypes", [menu_bar_service_1.MenuBarService])
], MenuBarController);
//# sourceMappingURL=menu.bar.controller.js.map