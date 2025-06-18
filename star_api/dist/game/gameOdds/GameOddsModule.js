"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOddsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const GameOddsService_1 = require("./GameOddsService");
const GameOddsController_1 = require("./GameOddsController");
const En_GameOdds_1 = require("./entities/En_GameOdds");
let GameOddsModule = class GameOddsModule {
};
exports.GameOddsModule = GameOddsModule;
exports.GameOddsModule = GameOddsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_GameOdds_1.En_GameOdds])],
        controllers: [GameOddsController_1.GameOddsController],
        providers: [GameOddsService_1.GameOddsService],
        exports: [GameOddsService_1.GameOddsService],
    })
], GameOddsModule);
//# sourceMappingURL=GameOddsModule.js.map