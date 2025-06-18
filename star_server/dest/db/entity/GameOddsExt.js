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
exports.GameOddsExt = void 0;
const typeorm_1 = require("typeorm");
let GameOddsExt = class GameOddsExt {
};
exports.GameOddsExt = GameOddsExt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], GameOddsExt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "game_type_code", readonly: true }),
    __metadata("design:type", String)
], GameOddsExt.prototype, "gameTypeCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "game_code", readonly: true }),
    __metadata("design:type", String)
], GameOddsExt.prototype, "gameCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "odds_key", readonly: true }),
    __metadata("design:type", String)
], GameOddsExt.prototype, "oddsKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "odds_value", readonly: true }),
    __metadata("design:type", Number)
], GameOddsExt.prototype, "oddsValue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], GameOddsExt.prototype, "enable", void 0);
exports.GameOddsExt = GameOddsExt = __decorate([
    (0, typeorm_1.Entity)()
], GameOddsExt);
