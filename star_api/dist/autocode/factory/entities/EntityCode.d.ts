import { DbTable } from '../DbTable';
export declare class EntityCode {
    private m_table;
    private m_path;
    constructor(table: DbTable);
    outCode(): void;
    private getClassName;
    private outEntity;
    private line;
}
