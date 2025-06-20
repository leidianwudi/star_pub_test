"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTableModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const test_table_entity_1 = require("./test_table.entity");
let TestTableModule = class TestTableModule {
};
exports.TestTableModule = TestTableModule;
exports.TestTableModule = TestTableModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '123456',
                database: 'star',
                synchronize: true,
                entities: [test_table_entity_1.TestTableEntity],
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([test_table_entity_1.TestTableEntity]),
        ],
    })
], TestTableModule);
//# sourceMappingURL=test.module.js.map