"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGameLogUtcModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ReportGameLogUtcService_1 = require("./ReportGameLogUtcService");
const ReportGameLogUtcController_1 = require("./ReportGameLogUtcController");
const En_ReportGameLogUtc_1 = require("./entities/En_ReportGameLogUtc");
let ReportGameLogUtcModule = class ReportGameLogUtcModule {
};
exports.ReportGameLogUtcModule = ReportGameLogUtcModule;
exports.ReportGameLogUtcModule = ReportGameLogUtcModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_ReportGameLogUtc_1.En_ReportGameLogUtc])],
        controllers: [ReportGameLogUtcController_1.ReportGameLogUtcController],
        providers: [ReportGameLogUtcService_1.ReportGameLogUtcService],
        exports: [ReportGameLogUtcService_1.ReportGameLogUtcService],
    })
], ReportGameLogUtcModule);
//# sourceMappingURL=ReportGameLogUtcModule.js.map