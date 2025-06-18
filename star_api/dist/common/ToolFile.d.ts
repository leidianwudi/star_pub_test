export declare class ToolFile {
    static getTsType(dataType: string): void;
    static lineTab(tab: number, content: string, filePath: string): void;
    static line(content: string, filePath: string): void;
    static write(content: string, filePath: string): void;
    static clearFile(filePath: string): void;
    static dirCreator(dirPath: string): void;
    static getRootPath(): string;
    static getFullPath(path: string): string;
    static getDirPath(filePath: string): string;
    static fileExists(filePath: string): boolean;
}
