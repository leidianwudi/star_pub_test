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
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const search_service_1 = require("./search.service");
const create_search_dto_1 = require("./dto/create-search.dto");
const update_search_dto_1 = require("./dto/update-search.dto");
const swagger_1 = require("@nestjs/swagger");
const search_response_dto_1 = require("./dto/search-response.dto");
const search_list_response_dto_1 = require("./dto/search-list-response.dto");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    create(createSearchDto) {
        return this.searchService.create(createSearchDto);
    }
    findAll() {
        return this.searchService.findAll();
    }
    findOne(id) {
        return this.searchService.findOne(+id);
    }
    update(id, updateSearchDto) {
        return this.searchService.update(+id, updateSearchDto);
    }
    remove(id) {
        return this.searchService.remove(+id);
    }
};
exports.SearchController = SearchController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建搜索项' }),
    (0, swagger_1.ApiBody)({ type: create_search_dto_1.CreateSearchDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: '创建成功，返回创建的搜索项对象', type: search_response_dto_1.SearchResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_search_dto_1.CreateSearchDto]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getList"),
    (0, swagger_1.ApiOperation)({ summary: '获取搜索项列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '搜索项列表获取成功', type: search_list_response_dto_1.SearchListResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根据ID获取单个搜索项' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '搜索项 ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '获取成功', type: search_response_dto_1.SearchResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根据ID更新搜索项' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '搜索项 ID' }),
    (0, swagger_1.ApiBody)({ type: update_search_dto_1.UpdateSearchDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '更新成功', type: search_response_dto_1.SearchResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_search_dto_1.UpdateSearchDto]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根据ID删除搜索项' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '搜索项 ID' }),
    (0, swagger_1.ApiBody)({ type: update_search_dto_1.UpdateSearchDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '删除成功', schema: { example: { message: '删除成功' } } }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "remove", null);
exports.SearchController = SearchController = __decorate([
    (0, swagger_1.ApiTags)('搜索模块'),
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchController);
//# sourceMappingURL=search.controller.js.map