import { Repository } from "typeorm";
import { En_SystemTask } from '../entities/En_SystemTask';
import { RepSystemTask_ } from './RepSystemTask_';
export declare class RepSystemTask extends RepSystemTask_ {
    readonly db: Repository<En_SystemTask>;
    constructor(db: Repository<En_SystemTask>);
}
