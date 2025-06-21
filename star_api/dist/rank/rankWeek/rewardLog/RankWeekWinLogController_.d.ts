import { RankWeekWinLogService } from './RankWeekWinLogService';
import { Out_RankWeekWinLog } from './out/Out_RankWeekWinLog';
import { In_InsRankWeekWinLog } from './in/In_InsRankWeekWinLog';
import { In_SelRankWeekWinLog } from './in/In_SelRankWeekWinLog';
import { En_RankWeekWinLog } from './entities/En_RankWeekWinLog';
export declare class RankWeekWinLogController_ {
    protected readonly service: RankWeekWinLogService;
    constructor(service: RankWeekWinLogService);
    select(queryParams: In_SelRankWeekWinLog): Promise<import("./out/Out_SelRankWeekWinLog").Out_SelRankWeekWinLog>;
    selectById(body: {
        id: number;
    }): Promise<En_RankWeekWinLog>;
    insert(dto: In_InsRankWeekWinLog): Promise<Out_RankWeekWinLog>;
    update(body: In_InsRankWeekWinLog): Promise<Out_RankWeekWinLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankWeekWinLog>;
}
