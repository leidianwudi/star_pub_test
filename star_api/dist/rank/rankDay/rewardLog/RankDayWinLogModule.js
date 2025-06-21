"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankDayWinLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankDayWinLogService_1 = require("./RankDayWinLogService");
const RankDayWinLogController_1 = require("./RankDayWinLogController");
const En_RankDayWinLog_1 = require("./entities/En_RankDayWinLog");
let RankDayWinLogModule = class RankDayWinLogModule {
};
exports.RankDayWinLogModule = RankDayWinLogModule;
exports.RankDayWinLogModule = RankDayWinLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankDayWinLog_1.En_RankDayWinLog])],
        controllers: [RankDayWinLogController_1.RankDayWinLogController],
        providers: [RankDayWinLogService_1.RankDayWinLogService],
        exports: [RankDayWinLogService_1.RankDayWinLogService],
    })
], RankDayWinLogModule);
//# sourceMappingURL=RankDayWinLogModule.js.map