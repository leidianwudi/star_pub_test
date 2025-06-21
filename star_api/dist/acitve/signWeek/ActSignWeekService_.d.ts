import { Repository } from 'typeorm';
import { En_ActSignWeek } from './entities/En_ActSignWeek';
import { In_InsActSignWeek } from './in/In_InsActSignWeek';
import { In_SelActSignWeek } from './in/In_SelActSignWeek';
import { Out_SelActSignWeek } from './out/Out_SelActSignWeek';
import { RepActSignWeek } from './model/RepActSignWeek';
export declare class ActSignWeekService_ {
    protected En_ActSignWeekRep: Repository<En_ActSignWeek>;
    protected rep: RepActSignWeek;
    constructor(En_ActSignWeekRep: Repository<En_ActSignWeek>);
    select(queryParams: In_SelActSignWeek): Promise<Out_SelActSignWeek>;
    selectById(id: number): Promise<En_ActSignWeek>;
    insert(dto: In_InsActSignWeek): Promise<any>;
    update(dto: In_InsActSignWeek): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
