"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBarModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const GameBarService_1 = require("./GameBarService");
const GameBarController_1 = require("./GameBarController");
const En_GameBar_1 = require("./entities/En_GameBar");
let GameBarModule = class GameBarModule {
};
exports.GameBarModule = GameBarModule;
exports.GameBarModule = GameBarModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_GameBar_1.En_GameBar])],
        controllers: [GameBarController_1.GameBarController],
        providers: [GameBarService_1.GameBarService],
        exports: [GameBarService_1.GameBarService],
    })
], GameBarModule);
//# sourceMappingURL=GamebarModule.js.map