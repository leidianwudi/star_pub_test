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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const menu_service_1 = require("./menu.service");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const update_menu_dto_1 = require("./dto/update-menu.dto");
const delete_menu_dto_1 = require("./dto/delete-menu.dto");
const menu_response_dto_1 = require("./dto/menu-response.dto");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    create(createMenuDto) {
        return this.menuService.create(createMenuDto);
    }
    async findAll() {
        return this.menuService.findAll();
    }
    findOne(id) {
        return this.menuService.findOne(+id);
    }
    async update(updateMenuDto) {
        console.log("update menu:", updateMenuDto);
        if (updateMenuDto.id) {
            await this.menuService.update(updateMenuDto);
            return { message: "修改成功" };
        }
        else {
            await this.menuService.create(updateMenuDto);
            return { message: "添加成功" };
        }
    }
    async remove(deleteMenuDto) {
        console.log("do delete:", deleteMenuDto);
        const menu = await this.menuService.findMenu(deleteMenuDto.paths);
        if (!menu) {
            throw new common_1.HttpException("菜单项不存在", common_1.HttpStatus.NOT_FOUND);
        }
        await this.menuService.remove(menu.id);
        return { message: "删除成功" };
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建菜单项' }),
    (0, swagger_1.ApiBody)({ type: create_menu_dto_1.CreateMenuDto }),
    (0, swagger_1.ApiOkResponse)({ description: '返回操作结果消息',
        type: menu_response_dto_1.MenuResponseDto, }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getTree"),
    (0, swagger_1.ApiOperation)({ summary: '获取菜单树形结构' }),
    (0, swagger_1.ApiOkResponse)({ description: '返回操作结果消息',
        type: menu_response_dto_1.MenuResponseDto, }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根据ID获取菜单项' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: '菜单项ID' }),
    (0, swagger_1.ApiOkResponse)({ description: '返回操作结果消息',
        type: menu_response_dto_1.MenuResponseDto, }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "findOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('doEdit'),
    (0, swagger_1.ApiOperation)({ summary: '新增或更新菜单项' }),
    (0, swagger_1.ApiBody)({ type: update_menu_dto_1.UpdateMenuDto }),
    (0, swagger_1.ApiOkResponse)({ description: '返回操作结果消息',
        type: menu_response_dto_1.MenuResponseDto, }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_menu_dto_1.UpdateMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('doDelete'),
    (0, swagger_1.ApiOperation)({ summary: '删除菜单项' }),
    (0, swagger_1.ApiBody)({ type: delete_menu_dto_1.DeleteMenuDto }),
    (0, swagger_1.ApiOkResponse)({ description: '返回操作结果消息',
        type: menu_response_dto_1.MenuResponseDto, }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_menu_dto_1.DeleteMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "remove", null);
exports.MenuController = MenuController = __decorate([
    (0, swagger_1.ApiTags)('菜单管理'),
    (0, common_1.Controller)('menuManagement'),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
//# sourceMappingURL=menu.controller.js.map