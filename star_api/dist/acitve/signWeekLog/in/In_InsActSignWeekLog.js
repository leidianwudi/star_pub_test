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
exports.In_InsActSignWeekLog = void 0;
const swagger_1 = require("@nestjs/swagger");
class In_InsActSignWeekLog {
}
exports.In_InsActSignWeekLog = In_InsActSignWeekLog;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id" }),
    __metadata("design:type", Number)
], In_InsActSignWeekLog.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "序列号" }),
    __metadata("design:type", String)
], In_InsActSignWeekLog.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "玩家账户" }),
    __metadata("design:type", String)
], In_InsActSignWeekLog.prototype, "account", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "日期，精确到天" }),
    __metadata("design:type", Date)
], In_InsActSignWeekLog.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "星期几" }),
    __metadata("design:type", Number)
], In_InsActSignWeekLog.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "道具类型" }),
    __metadata("design:type", String)
], In_InsActSignWeekLog.prototype, "item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "奖励" }),
    __metadata("design:type", Number)
], In_InsActSignWeekLog.prototype, "reward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "签到时间" }),
    __metadata("design:type", Date)
], In_InsActSignWeekLog.prototype, "creator_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "说明，填道具名称" }),
    __metadata("design:type", String)
], In_InsActSignWeekLog.prototype, "desc", void 0);
//# sourceMappingURL=In_InsActSignWeekLog.js.map