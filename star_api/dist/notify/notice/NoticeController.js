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
exports.NoticeController = void 0;
const common_1 = require("@nestjs/common");
const NoticeService_1 = require("./NoticeService");
const swagger_1 = require("@nestjs/swagger");
const Out_CreateMenuResp_1 = require("./out/Out_CreateMenuResp");
const In_InsNotice_1 = require("./in/In_InsNotice");
let NoticeController = class NoticeController {
    constructor(service) {
        this.service = service;
    }
    selectById(body) {
        return this.service.selectById(body.id);
    }
    insert(dto) {
        const result = this.service.insert(dto);
        return Promise.resolve({
            message: '操作成功',
            data: typeof result === 'string' ? { value: result } : result,
        });
    }
    update(body) {
        return Promise.resolve({
            message: '操作成功',
            data: { value: '1' },
        });
    }
    delete(body) {
        const result = this.service.delete(body.id);
        return Promise.resolve({
            message: '操作成功',
            data: typeof result === 'string' ? { value: result } : result,
        });
    }
    ;
};
exports.NoticeController = NoticeController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '根据ID查询' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: '通知ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回全部数据', type: Out_CreateMenuResp_1.Out_CreateMenuResp }),
    (0, common_1.Post)('selectById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "selectById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '新增记录' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回操作结果消息', type: Out_CreateMenuResp_1.Out_CreateMenuResp }),
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [In_InsNotice_1.In_InsNotice]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "insert", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '更新记录' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回操作结果消息', type: Out_CreateMenuResp_1.Out_CreateMenuResp }),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '删除记录' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回操作结果消息', type: Out_CreateMenuResp_1.Out_CreateMenuResp }),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "delete", null);
exports.NoticeController = NoticeController = __decorate([
    (0, swagger_1.ApiTags)('NoticeController'),
    (0, common_1.Controller)('Notice'),
    __metadata("design:paramtypes", [NoticeService_1.NoticeService])
], NoticeController);
//# sourceMappingURL=NoticeController.js.map