"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const List = [
    {
        url: 'https://www.bing.com/search?q=vue+admin+plus%e5%ae%98%e7%bd%91&qs=HS&pq=vue+admin+plus&sk=HS1&sc=10-14&cvid=B01F4326D6724F76B568CBF127648BB8&FORM=QBRE&sp=2&lq=0&rdr=1&rdrig=7414F5AB9CF241C78B8CC476818B3569',
        value: '官网',
    },
];
let SearchService = class SearchService {
    create(createSearchDto) {
        return 'This action adds a new search';
    }
    findAll() {
        return List;
    }
    findOne(id) {
        return `This action returns a #${id} search`;
    }
    update(id, updateSearchDto) {
        return `This action updates a #${id} search`;
    }
    remove(id) {
        return `This action removes a #${id} search`;
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)()
], SearchService);
//# sourceMappingURL=search.service.js.map