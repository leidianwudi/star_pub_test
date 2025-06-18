import { SystemTaskService } from './SystemTaskService';
import { Out_SystemTask } from './out/Out_SystemTask';
import { In_InsSystemTask } from './in/In_InsSystemTask';
import { In_SelSystemTask } from './in/In_SelSystemTask';
import { En_SystemTask } from './entities/En_SystemTask';
export declare class SystemTaskController_ {
    protected readonly service: SystemTaskService;
    constructor(service: SystemTaskService);
    select(queryParams: In_SelSystemTask): Promise<import("./out/Out_SelSystemTask").Out_SelSystemTask>;
    selectById(body: {
        id: number;
    }): Promise<En_SystemTask>;
    insert(dto: In_InsSystemTask): Promise<Out_SystemTask>;
    update(body: In_InsSystemTask): Promise<Out_SystemTask>;
    delete(body: {
        ids: number[];
    }): Promise<Out_SystemTask>;
}
