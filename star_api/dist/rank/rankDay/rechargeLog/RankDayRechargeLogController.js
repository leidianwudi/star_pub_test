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
exports.RankDayRechargeLogController = void 0;
const common_1 = require("@nestjs/common");
const RankDayRechargeLogService_1 = require("./RankDayRechargeLogService");
const swagger_1 = require("@nestjs/swagger");
const RankDayRechargeLogController_1 = require("./RankDayRechargeLogController_");
let RankDayRechargeLogController = class RankDayRechargeLogController extends RankDayRechargeLogController_1.RankDayRechargeLogController_ {
    constructor(service) { super(service); }
};
exports.RankDayRechargeLogController = RankDayRechargeLogController;
exports.RankDayRechargeLogController = RankDayRechargeLogController = __decorate([
    (0, swagger_1.ApiTags)('RankDayRechargeLogController'),
    (0, common_1.Controller)('rank_day_recharge_log'),
    __metadata("design:paramtypes", [RankDayRechargeLogService_1.RankDayRechargeLogService])
], RankDayRechargeLogController);
//# sourceMappingURL=RankDayRechargeLogController.js.map