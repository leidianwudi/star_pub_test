"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTestMgr1745980590414 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableTestMgr1745980590414 {
    async up(queryRunner) {
        queryRunner.dropTable('test_table');
    }
    async down(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'test_table',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                { name: 'name', type: 'varchar' },
            ],
        }));
    }
}
exports.CreateTableTestMgr1745980590414 = CreateTableTestMgr1745980590414;
//# sourceMappingURL=1745980590414-CreateTableTestMgr.js.map