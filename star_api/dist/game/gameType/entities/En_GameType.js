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
exports.En_GameType = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const En_GameBase_1 = require("../../gameBase/entities/En_GameBase");
const En_ReportDayGame_1 = require("../../../report/reportGame/entities/En_ReportDayGame");
const En_GameOdds_1 = require("../../gameOdds/entities/En_GameOdds");
const En_GameOddsExt_1 = require("../../gameOddsExt/entities/En_GameOddsExt");
let En_GameType = class En_GameType {
};
exports.En_GameType = En_GameType;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_GameType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "类型编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameType.prototype, "type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "类型名称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameType.prototype, "type_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_GameType.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => En_GameBase_1.En_GameBase, (gameBases) => gameBases.gameType),
    __metadata("design:type", Array)
], En_GameType.prototype, "gameBases", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => En_ReportDayGame_1.En_ReportDayGame, (reportDayGame) => reportDayGame.gameType),
    __metadata("design:type", Array)
], En_GameType.prototype, "reportDayGame", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => En_GameOdds_1.En_GameOdds, (gameOdds) => gameOdds.gameType),
    __metadata("design:type", Array)
], En_GameType.prototype, "gameOdds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => En_GameOddsExt_1.En_GameOddsExt, (gameOddsExt) => gameOddsExt.gameType),
    __metadata("design:type", Array)
], En_GameType.prototype, "gameOddsExt", void 0);
exports.En_GameType = En_GameType = __decorate([
    (0, typeorm_1.Entity)('game_type')
], En_GameType);
//# sourceMappingURL=En_GameType.js.map