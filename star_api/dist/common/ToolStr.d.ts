export declare class ToolStr {
    static line2UpLow(str: string): string;
    static snakeToPascal(str: string): string;
    static str2Num(str: string): number;
    static upperFirst(str: string): string;
}
export declare function FormatDate(): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
