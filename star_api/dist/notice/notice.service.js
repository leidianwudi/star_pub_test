"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeService = void 0;
const common_1 = require("@nestjs/common");
let NoticeService = class NoticeService {
    create(createNoticeDto) {
        return 'This action adds a new notice';
    }
    findAll() {
        const List = [
            {
                email: '@email',
                image: 'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
                notice: 'Github开源地址：<a target="_blank" href="https://github.com/zxwk1998/vue-admin-better">点我</a>',
            },
            {
                email: '@email',
                image: 'https://i.gtimg.cn/club/item/face/img/0/15640_100.gif',
                notice: 'Admin Pro：<a target="_blank" href="https://vuejs-core.cn/admin-pro">点我</a>',
            },
            {
                email: '@email',
                image: 'https://i.gtimg.cn/club/item/face/img/9/15919_100.gif',
                notice: 'Admin Plus：<a target="_blank" href="https://vuejs-core.cn/admin-plus">点我</a>',
            },
            {
                email: '@email',
                image: 'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
                notice: 'Shop Vite：<a target="_blank" href="https://vuejs-core.cn/shop-vite">点我</a>',
            },
        ];
        return List;
    }
    findOne(id) {
        return `This action returns a #${id} notice`;
    }
    update(id, updateNoticeDto) {
        return `This action updates a #${id} notice`;
    }
    remove(id) {
        return `This action removes a #${id} notice`;
    }
};
exports.NoticeService = NoticeService;
exports.NoticeService = NoticeService = __decorate([
    (0, common_1.Injectable)()
], NoticeService);
//# sourceMappingURL=notice.service.js.map