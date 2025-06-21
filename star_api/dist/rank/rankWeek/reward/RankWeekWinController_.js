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
exports.RankWeekWinController_ = void 0;
const common_1 = require("@nestjs/common");
const RankWeekWinService_1 = require("./RankWeekWinService");
const swagger_1 = require("@nestjs/swagger");
const Out_RankWeekWin_1 = require("./out/Out_RankWeekWin");
const In_InsRankWeekWin_1 = require("./in/In_InsRankWeekWin");
const In_SelRankWeekWin_1 = require("./in/In_SelRankWeekWin");
let RankWeekWinController_ = class RankWeekWinController_ {
    constructor(service) {
        this.service = service;
    }
    async select(queryParams) {
        return await this.service.select(queryParams);
    }
    async selectById(body) {
        return await this.service.selectById(body.id);
    }
    async insert(dto) {
        const result = await this.service.insert(dto);
        const resp = new Out_RankWeekWin_1.Out_RankWeekWin();
        Object.assign(resp, result);
        return resp;
    }
    async update(body) {
        let result = null;
        if (!body.id) {
            result = await this.service.insert(body);
        }
        else {
            result = await this.service.update(body);
        }
        const resp = new Out_RankWeekWin_1.Out_RankWeekWin();
        Object.assign(resp, result);
        return resp;
    }
    async delete(body) {
        const result = await this.service.delete(body.ids);
        const resp = new Out_RankWeekWin_1.Out_RankWeekWin();
        Object.assign(resp, { message: '操作成功', data: typeof result === 'string' ? { value: result } : result });
        return resp;
    }
    ;
};
exports.RankWeekWinController_ = RankWeekWinController_;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '查询全部 (支持分页)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回分页数据', type: Out_RankWeekWin_1.Out_RankWeekWin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('select'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [In_SelRankWeekWin_1.In_SelRankWeekWin]),
    __metadata("design:returntype", Promise)
], RankWeekWinController_.prototype, "select", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '根据ID查询' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: '通知ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回全部数据', type: Out_RankWeekWin_1.Out_RankWeekWin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('selectById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RankWeekWinController_.prototype, "selectById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '新增记录' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回操作结果消息', type: Out_RankWeekWin_1.Out_RankWeekWin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [In_InsRankWeekWin_1.In_InsRankWeekWin]),
    __metadata("design:returntype", Promise)
], RankWeekWinController_.prototype, "insert", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '更新记录' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回操作结果消息', type: Out_RankWeekWin_1.Out_RankWeekWin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [In_InsRankWeekWin_1.In_InsRankWeekWin]),
    __metadata("design:returntype", Promise)
], RankWeekWinController_.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '删除记录' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回操作结果消息', type: Out_RankWeekWin_1.Out_RankWeekWin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RankWeekWinController_.prototype, "delete", null);
exports.RankWeekWinController_ = RankWeekWinController_ = __decorate([
    (0, swagger_1.ApiTags)('RankWeekWinController_'),
    __metadata("design:paramtypes", [RankWeekWinService_1.RankWeekWinService])
], RankWeekWinController_);
//# sourceMappingURL=RankWeekWinController_.js.map