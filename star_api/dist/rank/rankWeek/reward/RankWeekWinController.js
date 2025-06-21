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
exports.RankWeekWinController = void 0;
const common_1 = require("@nestjs/common");
const RankWeekWinService_1 = require("./RankWeekWinService");
const swagger_1 = require("@nestjs/swagger");
const RankWeekWinController_1 = require("./RankWeekWinController_");
let RankWeekWinController = class RankWeekWinController extends RankWeekWinController_1.RankWeekWinController_ {
    constructor(service) { super(service); }
};
exports.RankWeekWinController = RankWeekWinController;
exports.RankWeekWinController = RankWeekWinController = __decorate([
    (0, swagger_1.ApiTags)('RankWeekWinController'),
    (0, common_1.Controller)('rank_week_win'),
    __metadata("design:paramtypes", [RankWeekWinService_1.RankWeekWinService])
], RankWeekWinController);
//# sourceMappingURL=RankWeekWinController.js.map