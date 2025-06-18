"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemTaskModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const SystemTaskService_1 = require("./SystemTaskService");
const SystemTaskController_1 = require("./SystemTaskController");
const En_SystemTask_1 = require("./entities/En_SystemTask");
let SystemTaskModule = class SystemTaskModule {
};
exports.SystemTaskModule = SystemTaskModule;
exports.SystemTaskModule = SystemTaskModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_SystemTask_1.En_SystemTask])],
        controllers: [SystemTaskController_1.SystemTaskController],
        providers: [SystemTaskService_1.SystemTaskService],
        exports: [SystemTaskService_1.SystemTaskService],
    })
], SystemTaskModule);
//# sourceMappingURL=SystemTaskModule.js.map