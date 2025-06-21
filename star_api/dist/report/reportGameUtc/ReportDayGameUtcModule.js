"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportDayGameUtcModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ReportDayGameUtcService_1 = require("./ReportDayGameUtcService");
const ReportDayGameUtcController_1 = require("./ReportDayGameUtcController");
const En_ReportDayGameUtc_1 = require("./entities/En_ReportDayGameUtc");
let ReportDayGameUtcModule = class ReportDayGameUtcModule {
};
exports.ReportDayGameUtcModule = ReportDayGameUtcModule;
exports.ReportDayGameUtcModule = ReportDayGameUtcModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_ReportDayGameUtc_1.En_ReportDayGameUtc])],
        controllers: [ReportDayGameUtcController_1.ReportDayGameUtcController],
        providers: [ReportDayGameUtcService_1.ReportDayGameUtcService],
        exports: [ReportDayGameUtcService_1.ReportDayGameUtcService],
    })
], ReportDayGameUtcModule);
//# sourceMappingURL=ReportDayGameUtcModule.js.map