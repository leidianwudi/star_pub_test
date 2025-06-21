import { Repository } from "typeorm";
import { En_RankWeekCoinLog } from '../entities/En_RankWeekCoinLog';
import { RepRankWeekCoinLog_ } from './RepRankWeekCoinLog_';
export declare class RepRankWeekCoinLog extends RepRankWeekCoinLog_ {
    readonly db: Repository<En_RankWeekCoinLog>;
    constructor(db: Repository<En_RankWeekCoinLog>);
}
