import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_Notice } from '../entities/En_Notice';
import { In_SelNotice } from '../in/In_SelNotice';
export declare class RepNotice_ extends RepositorySuper<En_Notice> {
    readonly db: Repository<En_Notice>;
    constructor(db: Repository<En_Notice>);
    findAndCount(queryParams: In_SelNotice): Promise<{
        list: En_Notice[];
        total: number;
    }>;
}
