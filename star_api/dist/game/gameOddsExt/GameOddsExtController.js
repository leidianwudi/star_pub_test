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
exports.GameOddsExtController = void 0;
const common_1 = require("@nestjs/common");
const GameOddsExtService_1 = require("./GameOddsExtService");
const swagger_1 = require("@nestjs/swagger");
const GameOddsExtController_1 = require("./GameOddsExtController_");
let GameOddsExtController = class GameOddsExtController extends GameOddsExtController_1.GameOddsExtController_ {
    constructor(service) { super(service); }
};
exports.GameOddsExtController = GameOddsExtController;
exports.GameOddsExtController = GameOddsExtController = __decorate([
    (0, swagger_1.ApiTags)('GameOddsExtController'),
    (0, common_1.Controller)('game_odds_ext'),
    __metadata("design:paramtypes", [GameOddsExtService_1.GameOddsExtService])
], GameOddsExtController);
//# sourceMappingURL=GameOddsExtController.js.map