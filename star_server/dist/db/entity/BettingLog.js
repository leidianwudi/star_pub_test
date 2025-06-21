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
exports.BettingLog = void 0;
const typeorm_1 = require("typeorm");
let BettingLog = class BettingLog {
};
exports.BettingLog = BettingLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], BettingLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint" }),
    __metadata("design:type", String)
], BettingLog.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "game_id" }),
    __metadata("design:type", String)
], BettingLog.prototype, "gameId", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Number)
], BettingLog.prototype, "bet", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "win_coins" }),
    __metadata("design:type", Number)
], BettingLog.prototype, "winCoins", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "create_time", readonly: true }),
    __metadata("design:type", Date)
], BettingLog.prototype, "createTime", void 0);
exports.BettingLog = BettingLog = __decorate([
    (0, typeorm_1.Entity)()
], BettingLog);
