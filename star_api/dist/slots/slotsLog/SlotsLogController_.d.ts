import { SlotsLogService } from './SlotsLogService';
import { Out_SlotsLog } from './out/Out_SlotsLog';
import { In_InsSlotsLog } from './in/In_InsSlotsLog';
import { In_SelSlotsLog } from './in/In_SelSlotsLog';
import { En_SlotsLog } from './entities/En_SlotsLog';
export declare class SlotsLogController_ {
    protected readonly service: SlotsLogService;
    constructor(service: SlotsLogService);
    select(queryParams: In_SelSlotsLog): Promise<import("./out/Out_SelSlotsLog").Out_SelSlotsLog>;
    selectById(body: {
        id: number;
    }): Promise<En_SlotsLog>;
    insert(dto: In_InsSlotsLog): Promise<Out_SlotsLog>;
    update(body: In_InsSlotsLog): Promise<Out_SlotsLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_SlotsLog>;
}
