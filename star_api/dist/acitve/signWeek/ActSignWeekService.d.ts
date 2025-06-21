import { Repository } from 'typeorm';
import { En_ActSignWeek } from './entities/En_ActSignWeek';
import { ActSignWeekService_ } from './ActSignWeekService_';
export declare class ActSignWeekService extends ActSignWeekService_ {
    constructor(En_ActSignWeekRep: Repository<En_ActSignWeek>);
}
