import { Repository } from "typeorm";
import { En_RankDayCoinLog } from '../entities/En_RankDayCoinLog';
import { RepRankDayCoinLog_ } from './RepRankDayCoinLog_';
export declare class RepRankDayCoinLog extends RepRankDayCoinLog_ {
    readonly db: Repository<En_RankDayCoinLog>;
    constructor(db: Repository<En_RankDayCoinLog>);
}
