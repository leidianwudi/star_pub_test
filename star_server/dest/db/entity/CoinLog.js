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
exports.CoinLog = void 0;
const typeorm_1 = require("typeorm");
const CoinTransformer_1 = require("./CoinTransformer");
const Coin_1 = require("./Coin");
let CoinLog = class CoinLog {
};
exports.CoinLog = CoinLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], CoinLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint" }),
    __metadata("design:type", String)
], CoinLog.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CoinLog.prototype, "sn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CoinLog.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sn_ext" }),
    __metadata("design:type", String)
], CoinLog.prototype, "snExt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CoinLog.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], CoinLog.prototype, "coin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], CoinLog.prototype, "delta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CoinLog.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CoinLog.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "create_at", readonly: true }),
    __metadata("design:type", Date)
], CoinLog.prototype, "createTime", void 0);
exports.CoinLog = CoinLog = __decorate([
    (0, typeorm_1.Entity)()
], CoinLog);
