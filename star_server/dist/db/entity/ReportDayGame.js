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
exports.ReportDayGame = void 0;
const typeorm_1 = require("typeorm");
const Coin_1 = require("./Coin");
const CoinTransformer_1 = require("./CoinTransformer");
//每种游戏每天一条记录
let ReportDayGame = class ReportDayGame {
};
exports.ReportDayGame = ReportDayGame;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], ReportDayGame.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ReportDayGame.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReportDayGame.prototype, "typeCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayGame.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayGame.prototype, "win", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "play_num" }),
    __metadata("design:type", Number)
], ReportDayGame.prototype, "playNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "room_num" }),
    __metadata("design:type", Number)
], ReportDayGame.prototype, "roomNum", void 0);
exports.ReportDayGame = ReportDayGame = __decorate([
    (0, typeorm_1.Entity)()
], ReportDayGame);
