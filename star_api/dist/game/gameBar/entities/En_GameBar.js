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
exports.En_GameBar = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const En_GameBase_1 = require("../../gameBase/entities/En_GameBase");
let En_GameBar = class En_GameBar {
};
exports.En_GameBar = En_GameBar;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_GameBar.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排序" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_GameBar.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_GameBar.prototype, "game_type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameBar.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否显示;0:不显示;1:显示" }),
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], En_GameBar.prototype, "visible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否维护;0:正常;1:维护中" }),
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], En_GameBar.prototype, "repair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "标签;0:普遍;1:热门;2:好玩;3:新游戏" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_GameBar.prototype, "tip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameBar.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => En_GameBase_1.En_GameBase, (gameBase) => gameBase.gameBar),
    (0, typeorm_1.JoinColumn)({ name: 'game_code', referencedColumnName: 'code' }),
    __metadata("design:type", En_GameBase_1.En_GameBase)
], En_GameBar.prototype, "gameBase", void 0);
exports.En_GameBar = En_GameBar = __decorate([
    (0, typeorm_1.Entity)('game_bar')
], En_GameBar);
//# sourceMappingURL=En_GameBar.js.map