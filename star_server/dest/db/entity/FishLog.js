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
exports.FishLog = void 0;
const typeorm_1 = require("typeorm");
const Coin_1 = require("./Coin");
const CoinTransformer_1 = require("./CoinTransformer");
let FishLog = class FishLog {
};
exports.FishLog = FishLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], FishLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FishLog.prototype, "sn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_account" }),
    __metadata("design:type", String)
], FishLog.prototype, "userAccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "game_code" }),
    __metadata("design:type", String)
], FishLog.prototype, "gameCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "game_name" }),
    __metadata("design:type", String)
], FishLog.prototype, "gameName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "room_id" }),
    __metadata("design:type", String)
], FishLog.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], FishLog.prototype, "spend", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], FishLog.prototype, "win", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], FishLog.prototype, "final", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "create_at", readonly: true }),
    __metadata("design:type", Date)
], FishLog.prototype, "createTime", void 0);
exports.FishLog = FishLog = __decorate([
    (0, typeorm_1.Entity)()
], FishLog);
