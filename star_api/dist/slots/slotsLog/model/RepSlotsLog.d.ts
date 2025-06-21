import { Repository } from "typeorm";
import { En_SlotsLog } from '../entities/En_SlotsLog';
import { RepSlotsLog_ } from './RepSlotsLog_';
export declare class RepSlotsLog extends RepSlotsLog_ {
    readonly db: Repository<En_SlotsLog>;
    constructor(db: Repository<En_SlotsLog>);
}
