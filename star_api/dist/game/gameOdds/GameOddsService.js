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
exports.GameOddsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const En_GameOdds_1 = require("./entities/En_GameOdds");
const GameOddsService_1 = require("./GameOddsService_");
let GameOddsService = class GameOddsService extends GameOddsService_1.GameOddsService_ {
    constructor(En_GameOddsRep) {
        super(En_GameOddsRep);
    }
};
exports.GameOddsService = GameOddsService;
exports.GameOddsService = GameOddsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(En_GameOdds_1.En_GameOdds)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GameOddsService);
//# sourceMappingURL=GameOddsService.js.map