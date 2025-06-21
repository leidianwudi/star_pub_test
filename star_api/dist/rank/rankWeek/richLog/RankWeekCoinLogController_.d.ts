import { RankWeekCoinLogService } from './RankWeekCoinLogService';
import { Out_RankWeekCoinLog } from './out/Out_RankWeekCoinLog';
import { In_InsRankWeekCoinLog } from './in/In_InsRankWeekCoinLog';
import { In_SelRankWeekCoinLog } from './in/In_SelRankWeekCoinLog';
import { En_RankWeekCoinLog } from './entities/En_RankWeekCoinLog';
export declare class RankWeekCoinLogController_ {
    protected readonly service: RankWeekCoinLogService;
    constructor(service: RankWeekCoinLogService);
    select(queryParams: In_SelRankWeekCoinLog): Promise<import("./out/Out_SelRankWeekCoinLog").Out_SelRankWeekCoinLog>;
    selectById(body: {
        id: number;
    }): Promise<En_RankWeekCoinLog>;
    insert(dto: In_InsRankWeekCoinLog): Promise<Out_RankWeekCoinLog>;
    update(body: In_InsRankWeekCoinLog): Promise<Out_RankWeekCoinLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankWeekCoinLog>;
}
