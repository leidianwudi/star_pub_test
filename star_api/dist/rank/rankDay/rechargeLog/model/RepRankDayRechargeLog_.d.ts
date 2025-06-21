import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankDayRechargeLog } from '../entities/En_RankDayRechargeLog';
import { In_SelRankDayRechargeLog } from '../in/In_SelRankDayRechargeLog';
export declare class RepRankDayRechargeLog_ extends RepositorySuper<En_RankDayRechargeLog> {
    readonly db: Repository<En_RankDayRechargeLog>;
    constructor(db: Repository<En_RankDayRechargeLog>);
    findAndCount(queryParams: In_SelRankDayRechargeLog): Promise<{
        list: En_RankDayRechargeLog[];
        total: number;
    }>;
}
