"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankWeekWinLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankWeekWinLogService_1 = require("./RankWeekWinLogService");
const RankWeekWinLogController_1 = require("./RankWeekWinLogController");
const En_RankWeekWinLog_1 = require("./entities/En_RankWeekWinLog");
let RankWeekWinLogModule = class RankWeekWinLogModule {
};
exports.RankWeekWinLogModule = RankWeekWinLogModule;
exports.RankWeekWinLogModule = RankWeekWinLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankWeekWinLog_1.En_RankWeekWinLog])],
        controllers: [RankWeekWinLogController_1.RankWeekWinLogController],
        providers: [RankWeekWinLogService_1.RankWeekWinLogService],
        exports: [RankWeekWinLogService_1.RankWeekWinLogService],
    })
], RankWeekWinLogModule);
//# sourceMappingURL=RankWeekWinLogModule.js.map