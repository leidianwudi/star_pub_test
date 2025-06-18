"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportDayPersonModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ReportDayPersonService_1 = require("./ReportDayPersonService");
const ReportDayPersonController_1 = require("./ReportDayPersonController");
const En_ReportDayPerson_1 = require("./entities/En_ReportDayPerson");
let ReportDayPersonModule = class ReportDayPersonModule {
};
exports.ReportDayPersonModule = ReportDayPersonModule;
exports.ReportDayPersonModule = ReportDayPersonModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_ReportDayPerson_1.En_ReportDayPerson])],
        controllers: [ReportDayPersonController_1.ReportDayPersonController],
        providers: [ReportDayPersonService_1.ReportDayPersonService],
        exports: [ReportDayPersonService_1.ReportDayPersonService],
    })
], ReportDayPersonModule);
//# sourceMappingURL=ReportDayPersonModule.js.map