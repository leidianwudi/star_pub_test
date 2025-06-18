import { DbTable } from 'src/autocode/factory/DbTable';
export declare class Out_selCommonCode {
    private m_table;
    private m_path;
    constructor(table: DbTable);
    outCode(): void;
    private getClassName;
}
