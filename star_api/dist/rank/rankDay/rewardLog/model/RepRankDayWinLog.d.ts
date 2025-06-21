import { Repository } from "typeorm";
import { En_RankDayWinLog } from '../entities/En_RankDayWinLog';
import { RepRankDayWinLog_ } from './RepRankDayWinLog_';
export declare class RepRankDayWinLog extends RepRankDayWinLog_ {
    readonly db: Repository<En_RankDayWinLog>;
    constructor(db: Repository<En_RankDayWinLog>);
}
