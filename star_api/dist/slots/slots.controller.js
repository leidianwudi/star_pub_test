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
exports.SlotsController = void 0;
const common_1 = require("@nestjs/common");
const slots_service_1 = require("./slots.service");
const update_slots_setting_dto_1 = require("./dto/update-slots_setting.dto");
const public_decorator_1 = require("../auth/public.decorator");
const swagger_1 = require("@nestjs/swagger");
const create_slots_setting_dto_1 = require("./dto/create-slots_setting.dto");
const console_1 = require("console");
const slots_list_response_dto_1 = require("./dto/slots-list-response.dto");
const slots_setting_response_dto_1 = require("./dto/slots-setting-response.dto");
const slots_delete_response_dto_1 = require("./dto/slots-delete-response.dto");
let SlotsController = class SlotsController {
    constructor(slotsService) {
        this.slotsService = slotsService;
    }
    create(createSlotDto) {
        return this.slotsService.create(createSlotDto);
    }
    async findAll(query) {
        const { pageNo = 1, pageSize = 10 } = query;
        common_1.Logger.verbose("Received pageNo:", pageNo);
        common_1.Logger.verbose('Application starting...');
        common_1.Logger.verbose("Received pageSize:", pageSize);
        const { list, total } = await this.slotsService.getList({ pageNo, pageSize });
        const res = list.map((item) => {
            return { ...item, value1: item.value2 };
        });
        return { list: res, total };
    }
    async update(updateSlotDto) {
        if (updateSlotDto.id == null) {
            return (0, console_1.error)("ID不能为空");
        }
        else {
            return this.slotsService.update(updateSlotDto);
        }
    }
    remove(id) {
        return this.slotsService.remove(id);
    }
    async findOne(id) {
        const list = await this.slotsService.findOne(id);
        const res = list.map((item) => {
            return { ...item, value1: item.value2 };
        });
        return { list: res, total: res.length };
    }
};
exports.SlotsController = SlotsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '添加游戏配置数据', description: '用于添加游戏配置数据' }),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOkResponse)({ description: '创建配置成功', type: slots_setting_response_dto_1.SlotsSettingResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_slots_setting_dto_1.CreateSlotsSettingDto]),
    __metadata("design:returntype", void 0)
], SlotsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '查询游戏配置数据', description: '查询游戏配置数据，有分页功能' }),
    (0, swagger_1.ApiQuery)({ name: 'pageNo', required: false, description: '页码，默认1' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false, description: '每页数量，默认10' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)("/findAll"),
    (0, swagger_1.ApiOkResponse)({ description: '分页返回游戏配置列表', type: slots_list_response_dto_1.SlotsListResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SlotsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '更新或修改游戏配置数据', description: '如果 id 存在则更新，否则创建' }),
    (0, swagger_1.ApiBody)({ type: update_slots_setting_dto_1.UpdateSlotsSettingDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("/update"),
    (0, swagger_1.ApiOkResponse)({ description: '更新配置成功', type: slots_setting_response_dto_1.SlotsSettingResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_slots_setting_dto_1.UpdateSlotsSettingDto]),
    __metadata("design:returntype", Promise)
], SlotsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '删除游戏配置数据', description: '通过 ID 删除对应的游戏设置' }),
    (0, swagger_1.ApiBody)({ schema: { type: 'object', properties: { id: { type: 'string', description: '数据 ID' } } } }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("/remove"),
    (0, swagger_1.ApiOkResponse)({ description: '删除配置成功', type: slots_delete_response_dto_1.SlotsDeleteResponseDto }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SlotsController.prototype, "remove", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('findOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SlotsController.prototype, "findOne", null);
exports.SlotsController = SlotsController = __decorate([
    (0, swagger_1.ApiTags)('游戏配置管理'),
    (0, common_1.Controller)('slots'),
    __metadata("design:paramtypes", [slots_service_1.SlotsService])
], SlotsController);
//# sourceMappingURL=slots.controller.js.map