import { Repository } from "typeorm";
import { En_RankWeekWinLog } from '../entities/En_RankWeekWinLog';
import { RepRankWeekWinLog_ } from './RepRankWeekWinLog_';
export declare class RepRankWeekWinLog extends RepRankWeekWinLog_ {
    readonly db: Repository<En_RankWeekWinLog>;
    constructor(db: Repository<En_RankWeekWinLog>);
}
