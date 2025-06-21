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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Coin_1 = require("./Coin");
const CoinTransformer_1 = require("./CoinTransformer");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "visualId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "introduction", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: Coin_1.COIN_PRECISION, scale: Coin_1.COIN_SCALE, transformer: new CoinTransformer_1.CoinTransformer() }),
    __metadata("design:type", Coin_1.Coin)
], User.prototype, "coin", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Number)
], User.prototype, "diamond", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "max_bet_one_time" }),
    __metadata("design:type", Number)
], User.prototype, "maxBetOneTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_bet" }),
    __metadata("design:type", Number)
], User.prototype, "totalBet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: "failed_attempts" }),
    __metadata("design:type", Number)
], User.prototype, "failedAttempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "datetime", name: "last_attempt_time" }),
    __metadata("design:type", Object)
], User.prototype, "lastAttemptTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], User.prototype, "locked", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "datetime", name: "lock_until" }),
    __metadata("design:type", Object)
], User.prototype, "lockUntil", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_room_open" }),
    __metadata("design:type", Boolean)
], User.prototype, "isRoomOpen", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "gold_box_count" }),
    __metadata("design:type", Number)
], User.prototype, "goldBoxCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_roulette_open" }),
    __metadata("design:type", Number)
], User.prototype, "isRouletteOpen", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "roulette_count" }),
    __metadata("design:type", Number)
], User.prototype, "rouletteCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_lotto_open" }),
    __metadata("design:type", Boolean)
], User.prototype, "isLottoOpen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "multiplier", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "multiplier_expire_time" }),
    __metadata("design:type", Date)
], User.prototype, "multiplierExpireTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ update: false, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "deleted", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
