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
exports.GameTypeController = void 0;
const common_1 = require("@nestjs/common");
const GameTypeService_1 = require("./GameTypeService");
const swagger_1 = require("@nestjs/swagger");
const GameTypeController_1 = require("./GameTypeController_");
let GameTypeController = class GameTypeController extends GameTypeController_1.GameTypeController_ {
    constructor(service) { super(service); }
    async getAll() {
        const res = await this.service.getAll();
        return { list: res, total: res.length };
    }
};
exports.GameTypeController = GameTypeController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameTypeController.prototype, "getAll", null);
exports.GameTypeController = GameTypeController = __decorate([
    (0, swagger_1.ApiTags)('GameTypeController'),
    (0, common_1.Controller)('game_type'),
    __metadata("design:paramtypes", [GameTypeService_1.GameTypeService])
], GameTypeController);
//# sourceMappingURL=GameTypeController.js.map