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
const swagger_1 = require("@nestjs/swagger");
const notice_service_1 = require("./notice.service");
const create_notice_dto_1 = require("./dto/create-notice.dto");
const update_notice_dto_1 = require("./dto/update-notice.dto");
const notice_response_dto_1 = require("./dto/notice-response.dto");
const notice_list_response_dto_1 = require("./dto/notice-list-response.dto");
let NoticeController = class NoticeController {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    create(createNoticeDto) {
        return this.noticeService.create(createNoticeDto);
    }
    findAll() {
        return this.noticeService.findAll();
    }
    findOne(id) {
        return this.noticeService.findOne(+id);
    }
    update(id, updateNoticeDto) {
        return this.noticeService.update(+id, updateNoticeDto);
    }
    remove(id) {
        return this.noticeService.remove(+id);
    }
};
exports.NoticeController = NoticeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建通知' }),
    (0, swagger_1.ApiBody)({ type: create_notice_dto_1.CreateNoticeDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: '通知创建成功', type: notice_response_dto_1.NoticeResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notice_dto_1.CreateNoticeDto]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getList"),
    (0, swagger_1.ApiOperation)({ summary: '获取通知列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回所有通知列表', type: notice_list_response_dto_1.NoticeListResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根据ID获取通知' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: '通知ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '返回对应通知', type: notice_response_dto_1.NoticeResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根据ID更新通知' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: '通知ID' }),
    (0, swagger_1.ApiBody)({ type: update_notice_dto_1.UpdateNoticeDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '通知更新成功', type: notice_response_dto_1.NoticeResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_notice_dto_1.UpdateNoticeDto]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根据ID删除通知' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: '通知ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '通知删除成功', type: notice_response_dto_1.NoticeResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "remove", null);
exports.NoticeController = NoticeController = __decorate([
    (0, swagger_1.ApiTags)('通知管理'),
    (0, common_1.Controller)('notice'),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeController);
//# sourceMappingURL=notice.controller.js.map