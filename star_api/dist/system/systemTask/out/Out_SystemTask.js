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
exports.Out_SystemTask = void 0;
const swagger_1 = require("@nestjs/swagger");
class Out_SystemTask {
}
exports.Out_SystemTask = Out_SystemTask;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], Out_SystemTask.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务编码" }),
    __metadata("design:type", String)
], Out_SystemTask.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务名称" }),
    __metadata("design:type", String)
], Out_SystemTask.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务时间" }),
    __metadata("design:type", Date)
], Out_SystemTask.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务说明" }),
    __metadata("design:type", String)
], Out_SystemTask.prototype, "desc", void 0);
//# sourceMappingURL=Out_SystemTask.js.map