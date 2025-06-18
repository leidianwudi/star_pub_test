export declare class MenuDto {
    id: number;
    name: string;
    parentId: number;
    path: string;
    icon: string;
    isActive: boolean;
    children?: MenuDto[];
}
