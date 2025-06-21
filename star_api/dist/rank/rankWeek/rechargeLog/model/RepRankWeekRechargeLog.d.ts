import { Repository } from "typeorm";
import { En_RankWeekRechargeLog } from '../entities/En_RankWeekRechargeLog';
import { RepRankWeekRechargeLog_ } from './RepRankWeekRechargeLog_';
export declare class RepRankWeekRechargeLog extends RepRankWeekRechargeLog_ {
    readonly db: Repository<En_RankWeekRechargeLog>;
    constructor(db: Repository<En_RankWeekRechargeLog>);
}
