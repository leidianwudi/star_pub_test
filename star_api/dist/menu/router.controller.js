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
exports.RouterController = void 0;
const common_1 = require("@nestjs/common");
const router_service_1 = require("./router.service");
const router_tree_response_dto_1 = require("./dto/router-tree-response.dto");
const swagger_1 = require("@nestjs/swagger");
let RouterController = class RouterController {
    constructor(routerService) {
        this.routerService = routerService;
    }
    async findAll() {
        const list = await this.routerService.findAll();
        const map = new Map();
        list.forEach((m) => {
            m["parentId"] = m.pid;
            m["meta"] = { "title": m.title, "icon": m.icon };
            delete (m.title);
            delete (m.icon);
        });
        list.forEach((m) => {
            if (m.pid == "0") {
                m["children"] = [];
                map.set(m.id, m);
            }
        });
        list.forEach((m) => {
            if (m.pid != "0") {
                let p = map.get(m.pid);
                if (p != undefined) {
                    p.children.push(m);
                }
            }
        });
        return { list: Array.from(map.values()) };
    }
};
exports.RouterController = RouterController;
__decorate([
    (0, common_1.Get)("getList"),
    (0, swagger_1.ApiOperation)({ summary: '获取路由菜单树（根据父子级构建）' }),
    (0, swagger_1.ApiOkResponse)({
        description: '返回构造好的路由树结构',
        type: router_tree_response_dto_1.RouterTreeResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RouterController.prototype, "findAll", null);
exports.RouterController = RouterController = __decorate([
    (0, swagger_1.ApiTags)('路由管理'),
    (0, common_1.Controller)('router'),
    __metadata("design:paramtypes", [router_service_1.RouterService])
], RouterController);
//# sourceMappingURL=router.controller.js.map