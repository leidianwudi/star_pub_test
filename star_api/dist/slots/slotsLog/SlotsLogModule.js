"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const SlotsLogService_1 = require("./SlotsLogService");
const SlotsLogController_1 = require("./SlotsLogController");
const En_SlotsLog_1 = require("./entities/En_SlotsLog");
let SlotsLogModule = class SlotsLogModule {
};
exports.SlotsLogModule = SlotsLogModule;
exports.SlotsLogModule = SlotsLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_SlotsLog_1.En_SlotsLog])],
        controllers: [SlotsLogController_1.SlotsLogController],
        providers: [SlotsLogService_1.SlotsLogService],
        exports: [SlotsLogService_1.SlotsLogService],
    })
], SlotsLogModule);
//# sourceMappingURL=SlotsLogModule.js.map