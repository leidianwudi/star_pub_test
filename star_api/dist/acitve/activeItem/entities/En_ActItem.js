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
exports.En_ActItem = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_ActItem = class En_ActItem {
};
exports.En_ActItem = En_ActItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_ActItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "道具编码; coin :金币;  slots_free :slots免费次数; " }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ActItem.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "道具名称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ActItem.prototype, "item_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "是否起效" }),
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], En_ActItem.prototype, "enable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_ActItem.prototype, "desc", void 0);
exports.En_ActItem = En_ActItem = __decorate([
    (0, typeorm_1.Entity)('act_item')
], En_ActItem);
//# sourceMappingURL=En_ActItem.js.map