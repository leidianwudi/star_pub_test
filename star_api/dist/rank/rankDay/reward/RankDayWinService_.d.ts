import { Repository } from 'typeorm';
import { En_RankDayWin } from './entities/En_RankDayWin';
import { In_InsRankDayWin } from './in/In_InsRankDayWin';
import { In_SelRankDayWin } from './in/In_SelRankDayWin';
import { Out_SelRankDayWin } from './out/Out_SelRankDayWin';
import { RepRankDayWin } from './model/RepRankDayWin';
export declare class RankDayWinService_ {
    protected En_RankDayWinRep: Repository<En_RankDayWin>;
    protected rep: RepRankDayWin;
    constructor(En_RankDayWinRep: Repository<En_RankDayWin>);
    select(queryParams: In_SelRankDayWin): Promise<Out_SelRankDayWin>;
    selectById(id: number): Promise<En_RankDayWin>;
    insert(dto: In_InsRankDayWin): Promise<any>;
    update(dto: In_InsRankDayWin): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
