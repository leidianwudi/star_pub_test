import { DbTable } from './DbTable';
export declare class ServiceCode {
    private m_table;
    private m_path;
    constructor(table: DbTable);
    outCode(): void;
    private getClassName;
}
