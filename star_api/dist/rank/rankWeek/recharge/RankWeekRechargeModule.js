"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankWeekRechargeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankWeekRechargeService_1 = require("./RankWeekRechargeService");
const RankWeekRechargeController_1 = require("./RankWeekRechargeController");
const En_RankWeekRecharge_1 = require("./entities/En_RankWeekRecharge");
let RankWeekRechargeModule = class RankWeekRechargeModule {
};
exports.RankWeekRechargeModule = RankWeekRechargeModule;
exports.RankWeekRechargeModule = RankWeekRechargeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankWeekRecharge_1.En_RankWeekRecharge])],
        controllers: [RankWeekRechargeController_1.RankWeekRechargeController],
        providers: [RankWeekRechargeService_1.RankWeekRechargeService],
        exports: [RankWeekRechargeService_1.RankWeekRechargeService],
    })
], RankWeekRechargeModule);
//# sourceMappingURL=RankWeekRechargeModule.js.map