import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankWeekCoin } from '../entities/En_RankWeekCoin';
import { In_SelRankWeekCoin } from '../in/In_SelRankWeekCoin';
export declare class RepRankWeekCoin_ extends RepositorySuper<En_RankWeekCoin> {
    readonly db: Repository<En_RankWeekCoin>;
    constructor(db: Repository<En_RankWeekCoin>);
    findAndCount(queryParams: In_SelRankWeekCoin): Promise<{
        list: En_RankWeekCoin[];
        total: number;
    }>;
}
