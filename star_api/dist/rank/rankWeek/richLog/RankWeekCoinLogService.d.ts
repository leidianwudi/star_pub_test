import { Repository } from 'typeorm';
import { En_RankWeekCoinLog } from './entities/En_RankWeekCoinLog';
import { RankWeekCoinLogService_ } from './RankWeekCoinLogService_';
export declare class RankWeekCoinLogService extends RankWeekCoinLogService_ {
    constructor(En_RankWeekCoinLogRep: Repository<En_RankWeekCoinLog>);
}
