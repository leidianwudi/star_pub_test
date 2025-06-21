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
exports.RankDayCoinLogController = void 0;
const common_1 = require("@nestjs/common");
const RankDayCoinLogService_1 = require("./RankDayCoinLogService");
const swagger_1 = require("@nestjs/swagger");
const RankDayCoinLogController_1 = require("./RankDayCoinLogController_");
let RankDayCoinLogController = class RankDayCoinLogController extends RankDayCoinLogController_1.RankDayCoinLogController_ {
    constructor(service) { super(service); }
};
exports.RankDayCoinLogController = RankDayCoinLogController;
exports.RankDayCoinLogController = RankDayCoinLogController = __decorate([
    (0, swagger_1.ApiTags)('RankDayCoinLogController'),
    (0, common_1.Controller)('rank_day_coin_log'),
    __metadata("design:paramtypes", [RankDayCoinLogService_1.RankDayCoinLogService])
], RankDayCoinLogController);
//# sourceMappingURL=RankDayCoinLogController.js.map