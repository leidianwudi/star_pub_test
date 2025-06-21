"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankDayRechargeLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankDayRechargeLogService_1 = require("./RankDayRechargeLogService");
const RankDayRechargeLogController_1 = require("./RankDayRechargeLogController");
const En_RankDayRechargeLog_1 = require("./entities/En_RankDayRechargeLog");
let RankDayRechargeLogModule = class RankDayRechargeLogModule {
};
exports.RankDayRechargeLogModule = RankDayRechargeLogModule;
exports.RankDayRechargeLogModule = RankDayRechargeLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankDayRechargeLog_1.En_RankDayRechargeLog])],
        controllers: [RankDayRechargeLogController_1.RankDayRechargeLogController],
        providers: [RankDayRechargeLogService_1.RankDayRechargeLogService],
        exports: [RankDayRechargeLogService_1.RankDayRechargeLogService],
    })
], RankDayRechargeLogModule);
//# sourceMappingURL=RankDayRechargeLogModule.js.map