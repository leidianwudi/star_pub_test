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
exports.GameBaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const En_GameBase_1 = require("./entities/En_GameBase");
const GameBaseService_1 = require("./GameBaseService_");
let GameBaseService = class GameBaseService extends GameBaseService_1.GameBaseService_ {
    constructor(En_GameBaseRep) {
        super(En_GameBaseRep);
    }
    async getAll() {
        return await this.En_GameBaseRep.find();
    }
};
exports.GameBaseService = GameBaseService;
exports.GameBaseService = GameBaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(En_GameBase_1.En_GameBase)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GameBaseService);
//# sourceMappingURL=GameBaseService.js.map