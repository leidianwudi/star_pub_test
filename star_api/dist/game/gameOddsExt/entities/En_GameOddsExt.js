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
exports.En_GameOddsExt = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const En_GameType_1 = require("../../gameType/entities/En_GameType");
const En_GameBase_1 = require("../../gameBase/entities/En_GameBase");
let En_GameOddsExt = class En_GameOddsExt {
};
exports.En_GameOddsExt = En_GameOddsExt;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_GameOddsExt.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排序" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_GameOddsExt.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameOddsExt.prototype, "game_type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameOddsExt.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "几率key" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_GameOddsExt.prototype, "odds_key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "几率值" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameOddsExt.prototype, "odds_value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_GameOddsExt.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_GameOddsExt.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => En_GameType_1.En_GameType, (gameType) => gameType.gameOddsExt),
    (0, typeorm_1.JoinColumn)({ name: 'game_type_code', referencedColumnName: 'type_code' }),
    __metadata("design:type", En_GameType_1.En_GameType)
], En_GameOddsExt.prototype, "gameType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => En_GameBase_1.En_GameBase, (gameBase) => gameBase.gameOddsExt),
    (0, typeorm_1.JoinColumn)({ name: 'game_code', referencedColumnName: 'code' }),
    __metadata("design:type", En_GameBase_1.En_GameBase)
], En_GameOddsExt.prototype, "gameBase", void 0);
exports.En_GameOddsExt = En_GameOddsExt = __decorate([
    (0, typeorm_1.Entity)('game_odds_ext')
], En_GameOddsExt);
//# sourceMappingURL=En_GameOddsExt.js.map