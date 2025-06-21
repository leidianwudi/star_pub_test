import { Repository } from "typeorm";
import { En_RankDayRechargeLog } from '../entities/En_RankDayRechargeLog';
import { RepRankDayRechargeLog_ } from './RepRankDayRechargeLog_';
export declare class RepRankDayRechargeLog extends RepRankDayRechargeLog_ {
    readonly db: Repository<En_RankDayRechargeLog>;
    constructor(db: Repository<En_RankDayRechargeLog>);
}
