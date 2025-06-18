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
exports.In_InsGameType = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsGameType {
}
exports.In_InsGameType = In_InsGameType;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsGameType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "类型编码" }),
    __metadata("design:type", String)
], In_InsGameType.prototype, "type_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "类型名称" }),
    __metadata("design:type", String)
], In_InsGameType.prototype, "type_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明" }),
    __metadata("design:type", String)
], In_InsGameType.prototype, "desc", void 0);
//# sourceMappingURL=In_InsGameType.js.map