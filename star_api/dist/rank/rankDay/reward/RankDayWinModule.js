"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankDayWinModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankDayWinService_1 = require("./RankDayWinService");
const RankDayWinController_1 = require("./RankDayWinController");
const En_RankDayWin_1 = require("./entities/En_RankDayWin");
let RankDayWinModule = class RankDayWinModule {
};
exports.RankDayWinModule = RankDayWinModule;
exports.RankDayWinModule = RankDayWinModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankDayWin_1.En_RankDayWin])],
        controllers: [RankDayWinController_1.RankDayWinController],
        providers: [RankDayWinService_1.RankDayWinService],
        exports: [RankDayWinService_1.RankDayWinService],
    })
], RankDayWinModule);
//# sourceMappingURL=RankDayWinModule.js.map