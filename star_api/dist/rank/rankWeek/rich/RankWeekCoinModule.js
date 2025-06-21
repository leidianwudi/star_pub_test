"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankWeekCoinModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankWeekCoinService_1 = require("./RankWeekCoinService");
const RankWeekCoinController_1 = require("./RankWeekCoinController");
const En_RankWeekCoin_1 = require("./entities/En_RankWeekCoin");
let RankWeekCoinModule = class RankWeekCoinModule {
};
exports.RankWeekCoinModule = RankWeekCoinModule;
exports.RankWeekCoinModule = RankWeekCoinModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankWeekCoin_1.En_RankWeekCoin])],
        controllers: [RankWeekCoinController_1.RankWeekCoinController],
        providers: [RankWeekCoinService_1.RankWeekCoinService],
        exports: [RankWeekCoinService_1.RankWeekCoinService],
    })
], RankWeekCoinModule);
//# sourceMappingURL=RankWeekCoinModule.js.map