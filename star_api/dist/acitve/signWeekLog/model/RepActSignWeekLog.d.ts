import { Repository } from "typeorm";
import { En_ActSignWeekLog } from '../entities/En_ActSignWeekLog';
import { RepActSignWeekLog_ } from './RepActSignWeekLog_';
export declare class RepActSignWeekLog extends RepActSignWeekLog_ {
    readonly db: Repository<En_ActSignWeekLog>;
    constructor(db: Repository<En_ActSignWeekLog>);
}
