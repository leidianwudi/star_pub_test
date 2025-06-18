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
exports.SlotsSettings = void 0;
const typeorm_1 = require("typeorm");
let SlotsSettings = class SlotsSettings {
};
exports.SlotsSettings = SlotsSettings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], SlotsSettings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SlotsSettings.prototype, "game_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SlotsSettings.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SlotsSettings.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json" }),
    __metadata("design:type", Object)
], SlotsSettings.prototype, "value1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SlotsSettings.prototype, "value2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SlotsSettings.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ update: false, insert: false }),
    __metadata("design:type", Date)
], SlotsSettings.prototype, "creator_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ update: false, insert: false }),
    __metadata("design:type", Date)
], SlotsSettings.prototype, "update_at", void 0);
exports.SlotsSettings = SlotsSettings = __decorate([
    (0, typeorm_1.Entity)()
], SlotsSettings);
//# sourceMappingURL=slots_settings.entity.js.map