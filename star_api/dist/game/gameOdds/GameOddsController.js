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
exports.GameOddsController = void 0;
const common_1 = require("@nestjs/common");
const GameOddsService_1 = require("./GameOddsService");
const swagger_1 = require("@nestjs/swagger");
const GameOddsController_1 = require("./GameOddsController_");
let GameOddsController = class GameOddsController extends GameOddsController_1.GameOddsController_ {
    constructor(service) { super(service); }
};
exports.GameOddsController = GameOddsController;
exports.GameOddsController = GameOddsController = __decorate([
    (0, swagger_1.ApiTags)('GameOddsController'),
    (0, common_1.Controller)('game_odds'),
    __metadata("design:paramtypes", [GameOddsService_1.GameOddsService])
], GameOddsController);
//# sourceMappingURL=GameOddsController.js.map