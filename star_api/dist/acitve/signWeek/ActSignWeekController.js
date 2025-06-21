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
exports.ActSignWeekController = void 0;
const common_1 = require("@nestjs/common");
const ActSignWeekService_1 = require("./ActSignWeekService");
const swagger_1 = require("@nestjs/swagger");
const ActSignWeekController_1 = require("./ActSignWeekController_");
let ActSignWeekController = class ActSignWeekController extends ActSignWeekController_1.ActSignWeekController_ {
    constructor(service) { super(service); }
};
exports.ActSignWeekController = ActSignWeekController;
exports.ActSignWeekController = ActSignWeekController = __decorate([
    (0, swagger_1.ApiTags)('ActSignWeekController'),
    (0, common_1.Controller)('act_sign_week'),
    __metadata("design:paramtypes", [ActSignWeekService_1.ActSignWeekService])
], ActSignWeekController);
//# sourceMappingURL=ActSignWeekController.js.map