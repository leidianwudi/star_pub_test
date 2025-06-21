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
exports.RankDayWinController = void 0;
const common_1 = require("@nestjs/common");
const RankDayWinService_1 = require("./RankDayWinService");
const swagger_1 = require("@nestjs/swagger");
const RankDayWinController_1 = require("./RankDayWinController_");
let RankDayWinController = class RankDayWinController extends RankDayWinController_1.RankDayWinController_ {
    constructor(service) { super(service); }
};
exports.RankDayWinController = RankDayWinController;
exports.RankDayWinController = RankDayWinController = __decorate([
    (0, swagger_1.ApiTags)('RankDayWinController'),
    (0, common_1.Controller)('rank_day_win'),
    __metadata("design:paramtypes", [RankDayWinService_1.RankDayWinService])
], RankDayWinController);
//# sourceMappingURL=RankDayWinController.js.map