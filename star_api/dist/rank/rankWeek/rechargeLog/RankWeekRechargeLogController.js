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
exports.RankWeekRechargeLogController = void 0;
const common_1 = require("@nestjs/common");
const RankWeekRechargeLogService_1 = require("./RankWeekRechargeLogService");
const swagger_1 = require("@nestjs/swagger");
const RankWeekRechargeLogController_1 = require("./RankWeekRechargeLogController_");
let RankWeekRechargeLogController = class RankWeekRechargeLogController extends RankWeekRechargeLogController_1.RankWeekRechargeLogController_ {
    constructor(service) { super(service); }
};
exports.RankWeekRechargeLogController = RankWeekRechargeLogController;
exports.RankWeekRechargeLogController = RankWeekRechargeLogController = __decorate([
    (0, swagger_1.ApiTags)('RankWeekRechargeLogController'),
    (0, common_1.Controller)('rank_week_recharge_log'),
    __metadata("design:paramtypes", [RankWeekRechargeLogService_1.RankWeekRechargeLogService])
], RankWeekRechargeLogController);
//# sourceMappingURL=RankWeekRechargeLogController.js.map