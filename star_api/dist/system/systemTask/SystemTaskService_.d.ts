import { Repository } from 'typeorm';
import { En_SystemTask } from './entities/En_SystemTask';
import { In_InsSystemTask } from './in/In_InsSystemTask';
import { In_SelSystemTask } from './in/In_SelSystemTask';
import { Out_SelSystemTask } from './out/Out_SelSystemTask';
import { RepSystemTask } from './model/RepSystemTask';
export declare class SystemTaskService_ {
    protected En_SystemTaskRep: Repository<En_SystemTask>;
    protected rep: RepSystemTask;
    constructor(En_SystemTaskRep: Repository<En_SystemTask>);
    select(queryParams: In_SelSystemTask): Promise<Out_SelSystemTask>;
    selectById(id: number): Promise<En_SystemTask>;
    insert(dto: In_InsSystemTask): Promise<any>;
    update(dto: In_InsSystemTask): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
