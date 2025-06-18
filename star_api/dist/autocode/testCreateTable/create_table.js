"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTest = void 0;
const typeorm_1 = require("typeorm");
class CreateTableTest {
    async down(queryRunner) {
        queryRunner.dropTable('test_table');
    }
    async up(queryRunner) {
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
exports.CreateTableTest = CreateTableTest;
//# sourceMappingURL=create_table.js.map