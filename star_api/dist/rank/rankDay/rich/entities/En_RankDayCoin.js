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
exports.En_RankDayCoin = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_RankDayCoin = class En_RankDayCoin {
};
exports.En_RankDayCoin = En_RankDayCoin;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_RankDayCoin.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "一年的第几天" }),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], En_RankDayCoin.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], En_RankDayCoin.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "已有金币" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_RankDayCoin.prototype, "coin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否ai, 0:不是，1:是" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankDayCoin.prototype, "is_ai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效,0:失效，1:生效" }),
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], En_RankDayCoin.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "排行数字最后变动时间" }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], En_RankDayCoin.prototype, "rank_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经派奖，0:否,1:是" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankDayCoin.prototype, "is_send_award", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否已经领将，0:否,1:是" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankDayCoin.prototype, "is_get_award", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankDayCoin.prototype, "desc", void 0);
exports.En_RankDayCoin = En_RankDayCoin = __decorate([
    (0, typeorm_1.Entity)('rank_day_coin')
], En_RankDayCoin);
//# sourceMappingURL=En_RankDayCoin.js.map