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
exports.Out_BasePage = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_BasePage {
}
exports.Out_BasePage = Out_BasePage;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '当前页数据' }),
    __metadata("design:type", Array)
], Out_BasePage.prototype, "list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '当前页码' }),
    __metadata("design:type", Number)
], Out_BasePage.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '每页数量' }),
    __metadata("design:type", Number)
], Out_BasePage.prototype, "pageNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '总记录数' }),
    __metadata("design:type", Number)
], Out_BasePage.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '总页数' }),
    __metadata("design:type", Number)
], Out_BasePage.prototype, "totalPages", void 0);
//# sourceMappingURL=Out_BasePage.js.map