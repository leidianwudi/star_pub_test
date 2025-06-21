import { Repository } from 'typeorm';
import { En_RankDayRechargeLog } from './entities/En_RankDayRechargeLog';
import { RankDayRechargeLogService_ } from './RankDayRechargeLogService_';
export declare class RankDayRechargeLogService extends RankDayRechargeLogService_ {
    constructor(En_RankDayRechargeLogRep: Repository<En_RankDayRechargeLog>);
}
