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
exports.Poker = void 0;
const typeorm_1 = require("typeorm");
//slots游戏配置表
let Poker = class Poker {
};
exports.Poker = Poker;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], Poker.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "game_code" }),
    __metadata("design:type", String)
], Poker.prototype, "game_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "game_code_sub" }),
    __metadata("design:type", String)
], Poker.prototype, "sub_game_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Poker.prototype, "bet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Poker.prototype, "min_gold", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Poker.prototype, "max_gold", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Poker.prototype, "enable", void 0);
exports.Poker = Poker = __decorate([
    (0, typeorm_1.Entity)({ name: "poker_room" })
], Poker);
