import { RankDayWinService } from './RankDayWinService';
import { Out_RankDayWin } from './out/Out_RankDayWin';
import { In_InsRankDayWin } from './in/In_InsRankDayWin';
import { In_SelRankDayWin } from './in/In_SelRankDayWin';
import { En_RankDayWin } from './entities/En_RankDayWin';
export declare class RankDayWinController_ {
    protected readonly service: RankDayWinService;
    constructor(service: RankDayWinService);
    select(queryParams: In_SelRankDayWin): Promise<import("./out/Out_SelRankDayWin").Out_SelRankDayWin>;
    selectById(body: {
        id: number;
    }): Promise<En_RankDayWin>;
    insert(dto: In_InsRankDayWin): Promise<Out_RankDayWin>;
    update(body: In_InsRankDayWin): Promise<Out_RankDayWin>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankDayWin>;
}
