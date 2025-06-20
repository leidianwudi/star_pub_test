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
exports.RemixIconListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RemixIconListDto {
}
exports.RemixIconListDto = RemixIconListDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '图标名称数组',
        example: ['icon-add', 'icon-delete', 'icon-edit'],
    }),
    __metadata("design:type", Array)
], RemixIconListDto.prototype, "list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '图标总数量',
        example: 3,
    }),
    __metadata("design:type", Number)
], RemixIconListDto.prototype, "total", void 0);
//# sourceMappingURL=remix-icon-list.dto.js.map