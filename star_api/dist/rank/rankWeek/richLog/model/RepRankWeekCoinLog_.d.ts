import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankWeekCoinLog } from '../entities/En_RankWeekCoinLog';
import { In_SelRankWeekCoinLog } from '../in/In_SelRankWeekCoinLog';
export declare class RepRankWeekCoinLog_ extends RepositorySuper<En_RankWeekCoinLog> {
    readonly db: Repository<En_RankWeekCoinLog>;
    constructor(db: Repository<En_RankWeekCoinLog>);
    findAndCount(queryParams: In_SelRankWeekCoinLog): Promise<{
        list: En_RankWeekCoinLog[];
        total: number;
    }>;
}
