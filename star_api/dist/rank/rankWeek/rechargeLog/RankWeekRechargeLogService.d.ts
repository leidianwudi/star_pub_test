import { Repository } from 'typeorm';
import { En_RankWeekRechargeLog } from './entities/En_RankWeekRechargeLog';
import { RankWeekRechargeLogService_ } from './RankWeekRechargeLogService_';
export declare class RankWeekRechargeLogService extends RankWeekRechargeLogService_ {
    constructor(En_RankWeekRechargeLogRep: Repository<En_RankWeekRechargeLog>);
}
