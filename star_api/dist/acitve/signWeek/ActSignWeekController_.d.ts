import { ActSignWeekService } from './ActSignWeekService';
import { Out_ActSignWeek } from './out/Out_ActSignWeek';
import { In_InsActSignWeek } from './in/In_InsActSignWeek';
import { In_SelActSignWeek } from './in/In_SelActSignWeek';
import { En_ActSignWeek } from './entities/En_ActSignWeek';
export declare class ActSignWeekController_ {
    protected readonly service: ActSignWeekService;
    constructor(service: ActSignWeekService);
    select(queryParams: In_SelActSignWeek): Promise<import("./out/Out_SelActSignWeek").Out_SelActSignWeek>;
    selectById(body: {
        id: number;
    }): Promise<En_ActSignWeek>;
    insert(dto: In_InsActSignWeek): Promise<Out_ActSignWeek>;
    update(body: In_InsActSignWeek): Promise<Out_ActSignWeek>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ActSignWeek>;
}
