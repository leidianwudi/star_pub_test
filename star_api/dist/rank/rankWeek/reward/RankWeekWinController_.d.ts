import { RankWeekWinService } from './RankWeekWinService';
import { Out_RankWeekWin } from './out/Out_RankWeekWin';
import { In_InsRankWeekWin } from './in/In_InsRankWeekWin';
import { In_SelRankWeekWin } from './in/In_SelRankWeekWin';
import { En_RankWeekWin } from './entities/En_RankWeekWin';
export declare class RankWeekWinController_ {
    protected readonly service: RankWeekWinService;
    constructor(service: RankWeekWinService);
    select(queryParams: In_SelRankWeekWin): Promise<import("./out/Out_SelRankWeekWin").Out_SelRankWeekWin>;
    selectById(body: {
        id: number;
    }): Promise<En_RankWeekWin>;
    insert(dto: In_InsRankWeekWin): Promise<Out_RankWeekWin>;
    update(body: In_InsRankWeekWin): Promise<Out_RankWeekWin>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankWeekWin>;
}
