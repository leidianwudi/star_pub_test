import { RouterMetaDto } from './router-meta.dto';
export declare class RouterNodeDto {
    id: string;
    parentId: string;
    path: string;
    component: string;
    meta: RouterMetaDto;
    children?: RouterNodeDto[];
}
