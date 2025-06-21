import { RankDayRechargeLogService } from './RankDayRechargeLogService';
import { Out_RankDayRechargeLog } from './out/Out_RankDayRechargeLog';
import { In_InsRankDayRechargeLog } from './in/In_InsRankDayRechargeLog';
import { In_SelRankDayRechargeLog } from './in/In_SelRankDayRechargeLog';
import { En_RankDayRechargeLog } from './entities/En_RankDayRechargeLog';
export declare class RankDayRechargeLogController_ {
    protected readonly service: RankDayRechargeLogService;
    constructor(service: RankDayRechargeLogService);
    select(queryParams: In_SelRankDayRechargeLog): Promise<import("./out/Out_SelRankDayRechargeLog").Out_SelRankDayRechargeLog>;
    selectById(body: {
        id: number;
    }): Promise<En_RankDayRechargeLog>;
    insert(dto: In_InsRankDayRechargeLog): Promise<Out_RankDayRechargeLog>;
    update(body: In_InsRankDayRechargeLog): Promise<Out_RankDayRechargeLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankDayRechargeLog>;
}
