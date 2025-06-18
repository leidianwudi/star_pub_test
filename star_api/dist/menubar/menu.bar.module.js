"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBarModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const menu_bar_entity_1 = require("./entities/menu.bar.entity");
const menu_bar_service_1 = require("./menu.bar.service");
const menu_bar_controller_1 = require("./menu.bar.controller");
let MenuBarModule = class MenuBarModule {
};
exports.MenuBarModule = MenuBarModule;
exports.MenuBarModule = MenuBarModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([menu_bar_entity_1.MenuBar])],
        controllers: [menu_bar_controller_1.MenuBarController],
        providers: [menu_bar_service_1.MenuBarService],
        exports: [menu_bar_service_1.MenuBarService],
    })
], MenuBarModule);
//# sourceMappingURL=menu.bar.module.js.map