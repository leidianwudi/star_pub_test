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
exports.Out_PokerRoom = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_PokerRoom {
}
exports.Out_PokerRoom = Out_PokerRoom;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_PokerRoom.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编号" }),
    __metadata("design:type", String)
], Out_PokerRoom.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "房间类型id" }),
    __metadata("design:type", String)
], Out_PokerRoom.prototype, "game_code_sub", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "底分" }),
    __metadata("design:type", Number)
], Out_PokerRoom.prototype, "bet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "需要的最小金币" }),
    __metadata("design:type", Number)
], Out_PokerRoom.prototype, "min_gold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最大金币" }),
    __metadata("design:type", Number)
], Out_PokerRoom.prototype, "max_gold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "名字" }),
    __metadata("design:type", String)
], Out_PokerRoom.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否关闭;0:关闭；1:开启" }),
    __metadata("design:type", Number)
], Out_PokerRoom.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    __metadata("design:type", String)
], Out_PokerRoom.prototype, "desc", void 0);
//# sourceMappingURL=Out_PokerRoom.js.map