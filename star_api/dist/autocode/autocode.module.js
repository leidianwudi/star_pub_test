"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocodeModule = void 0;
const common_1 = require("@nestjs/common");
const autocode_service_1 = require("./autocode.service");
const autocode_controller_1 = require("./autocode.controller");
let AutocodeModule = class AutocodeModule {
};
exports.AutocodeModule = AutocodeModule;
exports.AutocodeModule = AutocodeModule = __decorate([
    (0, common_1.Module)({
        controllers: [autocode_controller_1.AutocodeController],
        providers: [autocode_service_1.AutocodeService],
    })
], AutocodeModule);
//# sourceMappingURL=autocode.module.js.map