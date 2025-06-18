import { DbTable } from "../DbTable";
export declare class RepCommonParentCode {
    private m_table;
    private m_path;
    private m_code;
    constructor(table: DbTable);
    outCode(): void;
    private getClassName;
    private line;
    private getRelations;
}
