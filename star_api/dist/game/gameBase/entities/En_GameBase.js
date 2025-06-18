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
exports.En_GameBase = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const En_GameBar_1 = require("../../gameBar/entities/En_GameBar");
const En_GameType_1 = require("../../gameType/entities/En_GameType");
const En_ReportDayGame_1 = require("../../../report/reportGame/entities/En_ReportDayGame");
const En_PokerRoom_1 = require("../../pokerRoom/entities/En_PokerRoom");
const En_GameOddsExt_1 = require("../../gameOddsExt/entities/En_GameOddsExt");
let En_GameBase = class En_GameBase {
};
exports.En_GameBase = En_GameBase;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_GameBase.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排序" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_GameBase.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏类型编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameBase.prototype, "type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编号" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameBase.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏名称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameBase.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏图标" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameBase.prototype, "icon_path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameBase.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => En_GameBar_1.En_GameBar, (gameBar) => gameBar.gameBase),
    __metadata("design:type", En_GameBar_1.En_GameBar)
], En_GameBase.prototype, "gameBar", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => En_GameType_1.En_GameType, (gameType) => gameType.gameBases),
    (0, typeorm_1.JoinColumn)({ name: 'type_code', referencedColumnName: 'type_code' }),
    __metadata("design:type", En_GameType_1.En_GameType)
], En_GameBase.prototype, "gameType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => En_ReportDayGame_1.En_ReportDayGame, (reportDayGame) => reportDayGame.gameBase),
    __metadata("design:type", Array)
], En_GameBase.prototype, "reportDayGame", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => En_PokerRoom_1.En_PokerRoom, (pokerRoom) => pokerRoom.gameBase),
    __metadata("design:type", Array)
], En_GameBase.prototype, "pokerRoom", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => En_GameOddsExt_1.En_GameOddsExt, (gameOddsExt) => gameOddsExt.gameBase),
    __metadata("design:type", Array)
], En_GameBase.prototype, "gameOddsExt", void 0);
exports.En_GameBase = En_GameBase = __decorate([
    (0, typeorm_1.Entity)('game_base')
], En_GameBase);
//# sourceMappingURL=En_GameBase.js.map