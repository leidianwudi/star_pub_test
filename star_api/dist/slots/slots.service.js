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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const slots_settings_entity_1 = require("./entities/slots_settings.entity");
const ioredis_1 = require("ioredis");
const JSON5 = require("json5");
const DbSlotsSettings_1 = require("./model/DbSlotsSettings");
let SlotsService = class SlotsService {
    constructor(slotsSettingRep, redisClient) {
        this.slotsSettingRep = slotsSettingRep;
        this.redisClient = redisClient;
        this.dbSlotsSettings = new DbSlotsSettings_1.DbSlotsSettings(this.slotsSettingRep);
    }
    async getList({ pageNo, pageSize }) {
        return await this.dbSlotsSettings.findAndCountSp(pageNo, pageSize);
    }
    async create(createSlotDto) {
        try {
            let slotsEn = new slots_settings_entity_1.SlotsSettings();
            slotsEn.game_id = createSlotDto.game_id;
            slotsEn.key = createSlotDto.key;
            slotsEn.name = createSlotDto.name;
            let s = JSON5.parse(createSlotDto.value1);
            slotsEn.value1 = s;
            slotsEn.value2 = createSlotDto.value1;
            slotsEn.desc = createSlotDto.desc;
            await this.slotsSettingRep.insert(slotsEn);
            return slotsEn.id;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 500);
        }
    }
    async findAll() {
        const slots = await this.slotsSettingRep;
        return slots;
    }
    findOne(id) {
        return this.slotsSettingRep.findBy({ id });
    }
    getSlotsSetting(id) {
        return this.slotsSettingRep.findOneBy({ id });
    }
    async update(updateSlotDto) {
        if (updateSlotDto.game_id) {
            let key = "slots_" + updateSlotDto.game_id;
            await this.redisClient.del(key);
        }
        try {
            let slotsEn = new slots_settings_entity_1.SlotsSettings();
            slotsEn.game_id = updateSlotDto.game_id;
            slotsEn.key = updateSlotDto.key;
            slotsEn.name = updateSlotDto.name;
            let s = JSON5.parse(updateSlotDto.value1);
            slotsEn.value1 = s;
            slotsEn.value2 = updateSlotDto.value1;
            slotsEn.desc = updateSlotDto.desc;
            return this.slotsSettingRep.update({ id: updateSlotDto.id }, slotsEn);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 500);
        }
    }
    async remove(id) {
        let s = await this.slotsSettingRep.findOneBy({ id });
        if (s && s.game_id) {
            let key = "slots_" + s.game_id;
            await this.redisClient.del(key);
        }
        return this.slotsSettingRep.delete({ id });
    }
};
exports.SlotsService = SlotsService;
exports.SlotsService = SlotsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(slots_settings_entity_1.SlotsSettings)),
    __param(1, (0, common_1.Inject)("RedisClient")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ioredis_1.Redis])
], SlotsService);
//# sourceMappingURL=slots.service.js.map