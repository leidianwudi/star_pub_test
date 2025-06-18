import { AutoParam } from "../params/AutoParam";
export declare class DbTable {
    param: AutoParam;
    tableComment: string;
    columns: DbColumnEn[];
    serviceName: string;
    moduleName: string;
    controllerName: string;
    repositoryName: string;
    en_Name: string;
    in_insName: string;
    in_selName: string;
    out_selName: string;
    model_name: string;
    model_c_name: string;
    importEn: string;
    constructor(param: AutoParam, tableComment: string, rawColumns: any[]);
}
export declare class DbColumnEn {
    columnName: string;
    dataType: string;
    columnType: string;
    isNullable: string;
    columnDefault: string;
    columnComment: string;
    name: any;
    type: any;
    description: any;
    example: any;
    isPrimaryKey: boolean;
    isAutoIncrement: boolean;
    constructor(columnName: string, dataType: string, columnType: string, isNullable: string, columnDefault: string, columnComment: string, columnKey?: string);
    private mapDbTypeToTsType;
    private generateExampleValue;
}
