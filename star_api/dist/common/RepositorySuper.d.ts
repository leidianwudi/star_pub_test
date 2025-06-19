import { SelectQueryBuilder, FindManyOptions, Repository } from 'typeorm';
export declare class RepositorySuper<T> {
    readonly db: Repository<T>;
    constructor(db: Repository<T>);
    findAndCountSp(pageNo: number, pageSize: number, options?: FindManyOptions<T>): Promise<{
        list: T[];
        total: number;
    }>;
    findAndCountGroupBySp(builder: SelectQueryBuilder<T>, pageNo: number, pageSize: number): Promise<{
        list: any[];
        total: number;
        totalPages: number;
    }>;
}
