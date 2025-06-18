import { DbColumnEn } from "@/autocode/factory/DbTable";
export declare class ToolTrans {
    static arr2En<T>(ctor: new () => T, arr: string[]): T;
    static getTsType(dbType: string): string;
    static getColumnType(col: DbColumnEn): string;
}
