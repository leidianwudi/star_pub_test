"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsModule = void 0;
const common_1 = require("@nestjs/common");
const slots_service_1 = require("./slots.service");
const slots_controller_1 = require("./slots.controller");
const typeorm_1 = require("@nestjs/typeorm");
const slots_settings_entity_1 = require("./entities/slots_settings.entity");
const redis_module_1 = require("../redis/redis.module");
let SlotsModule = class SlotsModule {
};
exports.SlotsModule = SlotsModule;
exports.SlotsModule = SlotsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([slots_settings_entity_1.SlotsSettings]), redis_module_1.RedisModule],
        controllers: [slots_controller_1.SlotsController],
        providers: [slots_service_1.SlotsService],
    })
], SlotsModule);
//# sourceMappingURL=slots.module.js.map