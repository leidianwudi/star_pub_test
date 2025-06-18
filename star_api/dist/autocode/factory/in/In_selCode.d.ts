import { DbTable } from 'src/autocode/factory/DbTable';
export declare class In_selCode {
    private m_table;
    private m_path;
    constructor(table: DbTable);
    outCode(): void;
    private getClassName;
    private outEntity;
    private line;
}
