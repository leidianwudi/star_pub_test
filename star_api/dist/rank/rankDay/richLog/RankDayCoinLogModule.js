"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankDayCoinLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankDayCoinLogService_1 = require("./RankDayCoinLogService");
const RankDayCoinLogController_1 = require("./RankDayCoinLogController");
const En_RankDayCoinLog_1 = require("./entities/En_RankDayCoinLog");
let RankDayCoinLogModule = class RankDayCoinLogModule {
};
exports.RankDayCoinLogModule = RankDayCoinLogModule;
exports.RankDayCoinLogModule = RankDayCoinLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankDayCoinLog_1.En_RankDayCoinLog])],
        controllers: [RankDayCoinLogController_1.RankDayCoinLogController],
        providers: [RankDayCoinLogService_1.RankDayCoinLogService],
        exports: [RankDayCoinLogService_1.RankDayCoinLogService],
    })
], RankDayCoinLogModule);
//# sourceMappingURL=RankDayCoinLogModule.js.map