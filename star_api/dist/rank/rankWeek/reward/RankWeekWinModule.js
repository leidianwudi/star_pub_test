"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankWeekWinModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankWeekWinService_1 = require("./RankWeekWinService");
const RankWeekWinController_1 = require("./RankWeekWinController");
const En_RankWeekWin_1 = require("./entities/En_RankWeekWin");
let RankWeekWinModule = class RankWeekWinModule {
};
exports.RankWeekWinModule = RankWeekWinModule;
exports.RankWeekWinModule = RankWeekWinModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankWeekWin_1.En_RankWeekWin])],
        controllers: [RankWeekWinController_1.RankWeekWinController],
        providers: [RankWeekWinService_1.RankWeekWinService],
        exports: [RankWeekWinService_1.RankWeekWinService],
    })
], RankWeekWinModule);
//# sourceMappingURL=RankWeekWinModule.js.map