import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankDayCoin } from '../entities/En_RankDayCoin';
import { In_SelRankDayCoin } from '../in/In_SelRankDayCoin';
export declare class RepRankDayCoin_ extends RepositorySuper<En_RankDayCoin> {
    readonly db: Repository<En_RankDayCoin>;
    constructor(db: Repository<En_RankDayCoin>);
    findAndCount(queryParams: In_SelRankDayCoin): Promise<{
        list: En_RankDayCoin[];
        total: number;
    }>;
}
