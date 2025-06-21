import { Repository } from 'typeorm';
import { En_SlotsLog } from './entities/En_SlotsLog';
import { In_InsSlotsLog } from './in/In_InsSlotsLog';
import { In_SelSlotsLog } from './in/In_SelSlotsLog';
import { Out_SelSlotsLog } from './out/Out_SelSlotsLog';
import { RepSlotsLog } from './model/RepSlotsLog';
export declare class SlotsLogService_ {
    protected En_SlotsLogRep: Repository<En_SlotsLog>;
    protected rep: RepSlotsLog;
    constructor(En_SlotsLogRep: Repository<En_SlotsLog>);
    select(queryParams: In_SelSlotsLog): Promise<Out_SelSlotsLog>;
    selectById(id: number): Promise<En_SlotsLog>;
    insert(dto: In_InsSlotsLog): Promise<any>;
    update(dto: In_InsSlotsLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
