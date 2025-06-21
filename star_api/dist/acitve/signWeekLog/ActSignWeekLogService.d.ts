import { Repository } from 'typeorm';
import { En_ActSignWeekLog } from './entities/En_ActSignWeekLog';
import { ActSignWeekLogService_ } from './ActSignWeekLogService_';
export declare class ActSignWeekLogService extends ActSignWeekLogService_ {
    constructor(En_ActSignWeekLogRep: Repository<En_ActSignWeekLog>);
}
