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
exports.SuperTask = exports.Task = exports.TaskType = void 0;
const typeorm_1 = require("typeorm");
var TaskType;
(function (TaskType) {
    TaskType["SPIN_COUNT"] = "spin_count";
    TaskType["TOTAL_BET"] = "total_bet";
    TaskType["LEVEL_UP"] = "level_up";
    TaskType["WIN_COIN"] = "win_coin";
    TaskType["BIG_WIN_COUNT"] = "big_win_count";
})(TaskType || (exports.TaskType = TaskType = {}));
class _Task {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], _Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint" }),
    __metadata("design:type", String)
], _Task.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "task_type" }),
    __metadata("design:type", String)
], _Task.prototype, "taskType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "spin_count" }),
    __metadata("design:type", Number)
], _Task.prototype, "spinCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "level_up" }),
    __metadata("design:type", Number)
], _Task.prototype, "levelUp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "win_coins" }),
    __metadata("design:type", Number)
], _Task.prototype, "winCoins", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "big_win_count" }),
    __metadata("design:type", Number)
], _Task.prototype, "bigWinCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_bet" }),
    __metadata("design:type", Number)
], _Task.prototype, "totalBet", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_done", default: false }),
    __metadata("design:type", Boolean)
], _Task.prototype, "isDone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "create_time", readonly: true }),
    __metadata("design:type", Date)
], _Task.prototype, "createTime", void 0);
let Task = class Task extends _Task {
};
exports.Task = Task;
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
let SuperTask = class SuperTask extends _Task {
};
exports.SuperTask = SuperTask;
exports.SuperTask = SuperTask = __decorate([
    (0, typeorm_1.Entity)()
], SuperTask);
