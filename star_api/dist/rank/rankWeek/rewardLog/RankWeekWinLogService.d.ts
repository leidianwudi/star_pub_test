import { Repository } from 'typeorm';
import { En_RankWeekWinLog } from './entities/En_RankWeekWinLog';
import { RankWeekWinLogService_ } from './RankWeekWinLogService_';
export declare class RankWeekWinLogService extends RankWeekWinLogService_ {
    constructor(En_RankWeekWinLogRep: Repository<En_RankWeekWinLog>);
}
