import { ActSignWeekLogService } from './ActSignWeekLogService';
import { Out_ActSignWeekLog } from './out/Out_ActSignWeekLog';
import { In_InsActSignWeekLog } from './in/In_InsActSignWeekLog';
import { In_SelActSignWeekLog } from './in/In_SelActSignWeekLog';
import { En_ActSignWeekLog } from './entities/En_ActSignWeekLog';
export declare class ActSignWeekLogController_ {
    protected readonly service: ActSignWeekLogService;
    constructor(service: ActSignWeekLogService);
    select(queryParams: In_SelActSignWeekLog): Promise<import("./out/Out_SelActSignWeekLog").Out_SelActSignWeekLog>;
    selectById(body: {
        id: number;
    }): Promise<En_ActSignWeekLog>;
    insert(dto: In_InsActSignWeekLog): Promise<Out_ActSignWeekLog>;
    update(body: In_InsActSignWeekLog): Promise<Out_ActSignWeekLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ActSignWeekLog>;
}
