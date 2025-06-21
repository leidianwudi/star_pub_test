"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankSettingAwardModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RankSettingAwardService_1 = require("./RankSettingAwardService");
const RankSettingAwardController_1 = require("./RankSettingAwardController");
const En_RankSettingAward_1 = require("./entities/En_RankSettingAward");
let RankSettingAwardModule = class RankSettingAwardModule {
};
exports.RankSettingAwardModule = RankSettingAwardModule;
exports.RankSettingAwardModule = RankSettingAwardModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_RankSettingAward_1.En_RankSettingAward])],
        controllers: [RankSettingAwardController_1.RankSettingAwardController],
        providers: [RankSettingAwardService_1.RankSettingAwardService],
        exports: [RankSettingAwardService_1.RankSettingAwardService],
    })
], RankSettingAwardModule);
//# sourceMappingURL=RankSettingAwardModule.js.map