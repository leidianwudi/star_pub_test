import { DbTable } from 'src/autocode/factory/DbTable';
export declare class Out_CommonCode {
    private m_table;
    private m_path;
    private m_className;
    constructor(table: DbTable);
    outCode(): void;
    private line;
    private outEntityProperties;
}
