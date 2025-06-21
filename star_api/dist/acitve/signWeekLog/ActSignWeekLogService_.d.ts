import { Repository } from 'typeorm';
import { En_ActSignWeekLog } from './entities/En_ActSignWeekLog';
import { In_InsActSignWeekLog } from './in/In_InsActSignWeekLog';
import { In_SelActSignWeekLog } from './in/In_SelActSignWeekLog';
import { Out_SelActSignWeekLog } from './out/Out_SelActSignWeekLog';
import { RepActSignWeekLog } from './model/RepActSignWeekLog';
export declare class ActSignWeekLogService_ {
    protected En_ActSignWeekLogRep: Repository<En_ActSignWeekLog>;
    protected rep: RepActSignWeekLog;
    constructor(En_ActSignWeekLogRep: Repository<En_ActSignWeekLog>);
    select(queryParams: In_SelActSignWeekLog): Promise<Out_SelActSignWeekLog>;
    selectById(id: number): Promise<En_ActSignWeekLog>;
    insert(dto: In_InsActSignWeekLog): Promise<any>;
    update(dto: In_InsActSignWeekLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
