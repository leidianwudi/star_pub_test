import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTableTest implements MigrationInterface {
    name?: string;
    transaction?: boolean;
    down(queryRunner: QueryRunner): Promise<any>;
    up(queryRunner: QueryRunner): Promise<void>;
}
