"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActSignWeekLogController = void 0;
const common_1 = require("@nestjs/common");
const ActSignWeekLogService_1 = require("./ActSignWeekLogService");
const swagger_1 = require("@nestjs/swagger");
const ActSignWeekLogController_1 = require("./ActSignWeekLogController_");
let ActSignWeekLogController = class ActSignWeekLogController extends ActSignWeekLogController_1.ActSignWeekLogController_ {
    constructor(service) { super(service); }
};
exports.ActSignWeekLogController = ActSignWeekLogController;
exports.ActSignWeekLogController = ActSignWeekLogController = __decorate([
    (0, swagger_1.ApiTags)('ActSignWeekLogController'),
    (0, common_1.Controller)('act_sign_week_log'),
    __metadata("design:paramtypes", [ActSignWeekLogService_1.ActSignWeekLogService])
], ActSignWeekLogController);
//# sourceMappingURL=ActSignWeekLogController.js.map