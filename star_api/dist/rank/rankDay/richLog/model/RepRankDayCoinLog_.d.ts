import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankDayCoinLog } from '../entities/En_RankDayCoinLog';
import { In_SelRankDayCoinLog } from '../in/In_SelRankDayCoinLog';
export declare class RepRankDayCoinLog_ extends RepositorySuper<En_RankDayCoinLog> {
    readonly db: Repository<En_RankDayCoinLog>;
    constructor(db: Repository<En_RankDayCoinLog>);
    findAndCount(queryParams: In_SelRankDayCoinLog): Promise<{
        list: En_RankDayCoinLog[];
        total: number;
    }>;
}
