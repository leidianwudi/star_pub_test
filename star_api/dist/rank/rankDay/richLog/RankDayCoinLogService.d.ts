import { Repository } from 'typeorm';
import { En_RankDayCoinLog } from './entities/En_RankDayCoinLog';
import { RankDayCoinLogService_ } from './RankDayCoinLogService_';
export declare class RankDayCoinLogService extends RankDayCoinLogService_ {
    constructor(En_RankDayCoinLogRep: Repository<En_RankDayCoinLog>);
}
