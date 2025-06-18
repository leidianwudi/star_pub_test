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
exports.En_PokerRoom = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const En_GameBase_1 = require("../../gameBase/entities/En_GameBase");
let En_PokerRoom = class En_PokerRoom {
};
exports.En_PokerRoom = En_PokerRoom;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_PokerRoom.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "游戏编号" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_PokerRoom.prototype, "game_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "房间类型id" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '0' }),
    __metadata("design:type", String)
], En_PokerRoom.prototype, "game_code_sub", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "底分" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_PokerRoom.prototype, "bet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "需要的最小金币" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_PokerRoom.prototype, "min_gold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "最大金币" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_PokerRoom.prototype, "max_gold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "名字" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_PokerRoom.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否关闭;0:关闭；1:开启" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_PokerRoom.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_PokerRoom.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => En_GameBase_1.En_GameBase, (gameBase) => gameBase.pokerRoom),
    (0, typeorm_1.JoinColumn)({ name: 'game_code', referencedColumnName: 'code' }),
    __metadata("design:type", En_GameBase_1.En_GameBase)
], En_PokerRoom.prototype, "gameBase", void 0);
exports.En_PokerRoom = En_PokerRoom = __decorate([
    (0, typeorm_1.Entity)('poker_room')
], En_PokerRoom);
//# sourceMappingURL=En_PokerRoom.js.map