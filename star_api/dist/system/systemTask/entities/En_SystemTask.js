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
exports.En_SystemTask = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let En_SystemTask = class En_SystemTask {
};
exports.En_SystemTask = En_SystemTask;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], En_SystemTask.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务编码" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SystemTask.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务名称" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SystemTask.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务时间" }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], En_SystemTask.prototype, "create_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "任务说明" }),
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], En_SystemTask.prototype, "desc", void 0);
exports.En_SystemTask = En_SystemTask = __decorate([
    (0, typeorm_1.Entity)('system_task')
], En_SystemTask);
//# sourceMappingURL=En_SystemTask.js.map