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
exports.ReportDayPerson = void 0;
const typeorm_1 = require("typeorm");
const Coin_1 = require("./Coin");
const CoinTransformer_1 = require("./CoinTransformer");
//每人每30分钟一条记录
let ReportDayPerson = class ReportDayPerson {
};
exports.ReportDayPerson = ReportDayPerson;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], ReportDayPerson.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ReportDayPerson.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReportDayPerson.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "slotsCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "slotsWin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "slotsFinal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReportDayPerson.prototype, "slotsPlayNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "pokerCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "pokerWin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "pokerFinal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReportDayPerson.prototype, "pokerPlayNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "fishCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "fishWin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], ReportDayPerson.prototype, "fishFinal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReportDayPerson.prototype, "fishPlayNum", void 0);
exports.ReportDayPerson = ReportDayPerson = __decorate([
    (0, typeorm_1.Entity)()
], ReportDayPerson);
