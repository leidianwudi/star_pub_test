import { CreateSearchDto } from './create-search.dto';
declare const UpdateSearchDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSearchDto>>;
export declare class UpdateSearchDto extends UpdateSearchDto_base {
    keyword?: string;
    type?: string;
    isActive?: boolean;
}
export {};
