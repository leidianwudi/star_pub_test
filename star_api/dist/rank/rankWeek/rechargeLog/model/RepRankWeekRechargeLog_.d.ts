import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankWeekRechargeLog } from '../entities/En_RankWeekRechargeLog';
import { In_SelRankWeekRechargeLog } from '../in/In_SelRankWeekRechargeLog';
export declare class RepRankWeekRechargeLog_ extends RepositorySuper<En_RankWeekRechargeLog> {
    readonly db: Repository<En_RankWeekRechargeLog>;
    constructor(db: Repository<En_RankWeekRechargeLog>);
    findAndCount(queryParams: In_SelRankWeekRechargeLog): Promise<{
        list: En_RankWeekRechargeLog[];
        total: number;
    }>;
}
