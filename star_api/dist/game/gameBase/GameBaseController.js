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
exports.GameBaseController = void 0;
const common_1 = require("@nestjs/common");
const GameBaseService_1 = require("./GameBaseService");
const swagger_1 = require("@nestjs/swagger");
const GameBaseController_1 = require("./GameBaseController_");
let GameBaseController = class GameBaseController extends GameBaseController_1.GameBaseController_ {
    constructor(service) { super(service); }
    async getAll() {
        const res = await this.service.getAll();
        return { list: res, total: res.length };
    }
};
exports.GameBaseController = GameBaseController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameBaseController.prototype, "getAll", null);
exports.GameBaseController = GameBaseController = __decorate([
    (0, swagger_1.ApiTags)('GameBaseController'),
    (0, common_1.Controller)('game_base'),
    __metadata("design:paramtypes", [GameBaseService_1.GameBaseService])
], GameBaseController);
//# sourceMappingURL=GameBaseController.js.map