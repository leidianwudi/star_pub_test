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
exports.En_ActSignWeek = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_ActSignWeek = class En_ActSignWeek {
};
exports.En_ActSignWeek = En_ActSignWeek;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_ActSignWeek.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "第几天" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ActSignWeek.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "名称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ActSignWeek.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "客户端提示" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ActSignWeek.prototype, "tip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "道具类型" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ActSignWeek.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励数量" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ActSignWeek.prototype, "reward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ActSignWeek.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明，填道具名称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ActSignWeek.prototype, "desc", void 0);
exports.En_ActSignWeek = En_ActSignWeek = __decorate([
    (0, typeorm_1.Entity)('act_sign_week')
], En_ActSignWeek);
//# sourceMappingURL=En_ActSignWeek.js.map