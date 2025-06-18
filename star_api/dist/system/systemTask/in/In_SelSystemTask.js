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
exports.In_SelSystemTask = void 0;
const In_BasePage_1 = require("../../../common/Interface/In_BasePage");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class In_SelSystemTask extends In_BasePage_1.In_BasePage {
}
exports.In_SelSystemTask = In_SelSystemTask;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务编码", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], In_SelSystemTask.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务时间", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], In_SelSystemTask.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务时间（起始）", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], In_SelSystemTask.prototype, "create_at_min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务时间（结束）", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], In_SelSystemTask.prototype, "create_at_max", void 0);
//# sourceMappingURL=In_SelSystemTask.js.map