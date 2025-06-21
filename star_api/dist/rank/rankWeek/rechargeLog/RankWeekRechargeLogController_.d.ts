import { RankWeekRechargeLogService } from './RankWeekRechargeLogService';
import { Out_RankWeekRechargeLog } from './out/Out_RankWeekRechargeLog';
import { In_InsRankWeekRechargeLog } from './in/In_InsRankWeekRechargeLog';
import { In_SelRankWeekRechargeLog } from './in/In_SelRankWeekRechargeLog';
import { En_RankWeekRechargeLog } from './entities/En_RankWeekRechargeLog';
export declare class RankWeekRechargeLogController_ {
    protected readonly service: RankWeekRechargeLogService;
    constructor(service: RankWeekRechargeLogService);
    select(queryParams: In_SelRankWeekRechargeLog): Promise<import("./out/Out_SelRankWeekRechargeLog").Out_SelRankWeekRechargeLog>;
    selectById(body: {
        id: number;
    }): Promise<En_RankWeekRechargeLog>;
    insert(dto: In_InsRankWeekRechargeLog): Promise<Out_RankWeekRechargeLog>;
    update(body: In_InsRankWeekRechargeLog): Promise<Out_RankWeekRechargeLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankWeekRechargeLog>;
}
