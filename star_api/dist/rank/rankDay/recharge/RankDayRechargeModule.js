"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankDayRechargeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankDayRechargeService_1 = require("./RankDayRechargeService");
const RankDayRechargeController_1 = require("./RankDayRechargeController");
const En_RankDayRecharge_1 = require("./entities/En_RankDayRecharge");
let RankDayRechargeModule = class RankDayRechargeModule {
};
exports.RankDayRechargeModule = RankDayRechargeModule;
exports.RankDayRechargeModule = RankDayRechargeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankDayRecharge_1.En_RankDayRecharge])],
        controllers: [RankDayRechargeController_1.RankDayRechargeController],
        providers: [RankDayRechargeService_1.RankDayRechargeService],
        exports: [RankDayRechargeService_1.RankDayRechargeService],
    })
], RankDayRechargeModule);
//# sourceMappingURL=RankDayRechargeModule.js.map