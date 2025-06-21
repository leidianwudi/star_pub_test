"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActSignWeekLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ActSignWeekLogService_1 = require("./ActSignWeekLogService");
const ActSignWeekLogController_1 = require("./ActSignWeekLogController");
const En_ActSignWeekLog_1 = require("./entities/En_ActSignWeekLog");
let ActSignWeekLogModule = class ActSignWeekLogModule {
};
exports.ActSignWeekLogModule = ActSignWeekLogModule;
exports.ActSignWeekLogModule = ActSignWeekLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_ActSignWeekLog_1.En_ActSignWeekLog])],
        controllers: [ActSignWeekLogController_1.ActSignWeekLogController],
        providers: [ActSignWeekLogService_1.ActSignWeekLogService],
        exports: [ActSignWeekLogService_1.ActSignWeekLogService],
    })
], ActSignWeekLogModule);
//# sourceMappingURL=ActSignWeekLogModule.js.map