import { Repository } from 'typeorm';
import { En_RankDayWinLog } from './entities/En_RankDayWinLog';
import { RankDayWinLogService_ } from './RankDayWinLogService_';
export declare class RankDayWinLogService extends RankDayWinLogService_ {
    constructor(En_RankDayWinLogRep: Repository<En_RankDayWinLog>);
}
