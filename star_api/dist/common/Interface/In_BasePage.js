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
exports.In_BasePage = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class In_BasePage {
    constructor() {
        this.page = 1;
        this.pageNum = 10;
    }
}
exports.In_BasePage = In_BasePage;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '查询第几页',
        required: false,
        default: 1,
        type: Number,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: '页码必须是整数' }),
    (0, class_validator_1.Min)(1, { message: '页码必须大于等于1' }),
    __metadata("design:type", Number)
], In_BasePage.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '查询的每页记录数',
        required: false,
        default: 10,
        type: Number,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: '每页记录数必须是整数' }),
    (0, class_validator_1.Min)(1, { message: '每页记录数必须大于等于1' }),
    __metadata("design:type", Number)
], In_BasePage.prototype, "pageNum", void 0);
//# sourceMappingURL=In_BasePage.js.map