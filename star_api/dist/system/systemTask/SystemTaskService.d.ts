import { Repository } from 'typeorm';
import { En_SystemTask } from './entities/En_SystemTask';
import { SystemTaskService_ } from './SystemTaskService_';
export declare class SystemTaskService extends SystemTaskService_ {
    constructor(En_SystemTaskRep: Repository<En_SystemTask>);
}
