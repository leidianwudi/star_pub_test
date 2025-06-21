"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActItemModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ActItemService_1 = require("./ActItemService");
const ActItemController_1 = require("./ActItemController");
const En_ActItem_1 = require("./entities/En_ActItem");
let ActItemModule = class ActItemModule {
};
exports.ActItemModule = ActItemModule;
exports.ActItemModule = ActItemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([En_ActItem_1.En_ActItem])],
        controllers: [ActItemController_1.ActItemController],
        providers: [ActItemService_1.ActItemService],
        exports: [ActItemService_1.ActItemService],
    })
], ActItemModule);
//# sourceMappingURL=ActItemModule.js.map