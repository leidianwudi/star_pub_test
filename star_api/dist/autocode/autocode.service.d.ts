import { DataSource } from 'typeorm';
import { DbTable } from './factory/DbTable';
export declare class AutocodeService {
    private readonly connection;
    constructor(connection: DataSource);
    generate(): Promise<DbTable[]>;
    createCode(index: number): Promise<DbTable>;
}
