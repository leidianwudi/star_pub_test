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
exports.En_RankSettingAi = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_RankSettingAi = class En_RankSettingAi {
};
exports.En_RankSettingAi = En_RankSettingAi;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_RankSettingAi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "账户" }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], En_RankSettingAi.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "每次增加金币" }),
    (0, typeorm_1.Column)({ type: 'decimal', default: 0.0000 }),
    __metadata("design:type", Number)
], En_RankSettingAi.prototype, "add_coin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "增加金币乘数最小值，可以负数" }),
    (0, typeorm_1.Column)({ type: 'float', default: 0 }),
    __metadata("design:type", Number)
], En_RankSettingAi.prototype, "scale_min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "增加金币乘数最大值" }),
    (0, typeorm_1.Column)({ type: 'float', default: 0 }),
    __metadata("design:type", Number)
], En_RankSettingAi.prototype, "scale_max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "增加频率，秒" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_RankSettingAi.prototype, "speed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效,0:失效，1:生效" }),
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], En_RankSettingAi.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_RankSettingAi.prototype, "desc", void 0);
exports.En_RankSettingAi = En_RankSettingAi = __decorate([
    (0, typeorm_1.Entity)('rank_setting_ai')
], En_RankSettingAi);
//# sourceMappingURL=En_RankSettingAi.js.map