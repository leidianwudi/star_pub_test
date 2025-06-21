import { Repository } from 'typeorm';
import { En_RankWeekWin } from './entities/En_RankWeekWin';
import { In_InsRankWeekWin } from './in/In_InsRankWeekWin';
import { In_SelRankWeekWin } from './in/In_SelRankWeekWin';
import { Out_SelRankWeekWin } from './out/Out_SelRankWeekWin';
import { RepRankWeekWin } from './model/RepRankWeekWin';
export declare class RankWeekWinService_ {
    protected En_RankWeekWinRep: Repository<En_RankWeekWin>;
    protected rep: RepRankWeekWin;
    constructor(En_RankWeekWinRep: Repository<En_RankWeekWin>);
    select(queryParams: In_SelRankWeekWin): Promise<Out_SelRankWeekWin>;
    selectById(id: number): Promise<En_RankWeekWin>;
    insert(dto: In_InsRankWeekWin): Promise<any>;
    update(dto: In_InsRankWeekWin): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
