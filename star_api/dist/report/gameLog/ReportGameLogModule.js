"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGameLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ReportGameLogService_1 = require("./ReportGameLogService");
const ReportGameLogController_1 = require("./ReportGameLogController");
const En_ReportGameLog_1 = require("./entities/En_ReportGameLog");
let ReportGameLogModule = class ReportGameLogModule {
};
exports.ReportGameLogModule = ReportGameLogModule;
exports.ReportGameLogModule = ReportGameLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_ReportGameLog_1.En_ReportGameLog])],
        controllers: [ReportGameLogController_1.ReportGameLogController],
        providers: [ReportGameLogService_1.ReportGameLogService],
        exports: [ReportGameLogService_1.ReportGameLogService],
    })
], ReportGameLogModule);
//# sourceMappingURL=ReportGameLogModule.js.map