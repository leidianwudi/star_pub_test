import { RankDayWinLogService } from './RankDayWinLogService';
import { Out_RankDayWinLog } from './out/Out_RankDayWinLog';
import { In_InsRankDayWinLog } from './in/In_InsRankDayWinLog';
import { In_SelRankDayWinLog } from './in/In_SelRankDayWinLog';
import { En_RankDayWinLog } from './entities/En_RankDayWinLog';
export declare class RankDayWinLogController_ {
    protected readonly service: RankDayWinLogService;
    constructor(service: RankDayWinLogService);
    select(queryParams: In_SelRankDayWinLog): Promise<import("./out/Out_SelRankDayWinLog").Out_SelRankDayWinLog>;
    selectById(body: {
        id: number;
    }): Promise<En_RankDayWinLog>;
    insert(dto: In_InsRankDayWinLog): Promise<Out_RankDayWinLog>;
    update(body: In_InsRankDayWinLog): Promise<Out_RankDayWinLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankDayWinLog>;
}
