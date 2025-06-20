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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
const En_User_1 = require("./entities/En_User");
const UserService_1 = require("./UserService_");
let UserService = class UserService extends UserService_1.UserService_ {
    constructor(En_UserRep) {
        super(En_UserRep);
    }
    async actionCoin(param) {
        const coin = param.edit_coin;
        if (coin === 0) {
            return '操作成功';
        }
        if (coin < 0) {
            const user = await this.En_UserRep.findOne({ where: { id: param.id } });
            if (!user || user.coin < Math.abs(coin)) {
                throw new common_2.HttpException('余额不足', 400);
            }
            await this.En_UserRep.decrement({ id: param.id }, 'coin', Math.abs(coin));
            return '操作成功';
        }
        else {
            await this.En_UserRep.increment({ id: param.id }, 'coin', coin);
            return '操作成功';
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(En_User_1.En_User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=UserService.js.map