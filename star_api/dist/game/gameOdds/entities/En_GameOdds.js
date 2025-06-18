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
exports.En_GameOdds = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const En_GameType_1 = require("../../gameType/entities/En_GameType");
let En_GameOdds = class En_GameOdds {
};
exports.En_GameOdds = En_GameOdds;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_GameOdds.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排序" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_GameOdds.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameOdds.prototype, "game_type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "概率key" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameOdds.prototype, "odds_key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "概率值" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_GameOdds.prototype, "odds_value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_GameOdds.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "备注" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameOdds.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => En_GameType_1.En_GameType, (gameType) => gameType.gameOdds),
    (0, typeorm_1.JoinColumn)({ name: 'game_type_code', referencedColumnName: 'type_code' }),
    __metadata("design:type", En_GameType_1.En_GameType)
], En_GameOdds.prototype, "gameType", void 0);
exports.En_GameOdds = En_GameOdds = __decorate([
    (0, typeorm_1.Entity)('game_odds')
], En_GameOdds);
//# sourceMappingURL=En_GameOdds.js.map