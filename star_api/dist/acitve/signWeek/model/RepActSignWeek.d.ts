import { Repository } from "typeorm";
import { En_ActSignWeek } from '../entities/En_ActSignWeek';
import { RepActSignWeek_ } from './RepActSignWeek_';
export declare class RepActSignWeek extends RepActSignWeek_ {
    readonly db: Repository<En_ActSignWeek>;
    constructor(db: Repository<En_ActSignWeek>);
}
