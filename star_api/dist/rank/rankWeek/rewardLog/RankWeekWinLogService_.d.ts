import { Repository } from 'typeorm';
import { En_RankWeekWinLog } from './entities/En_RankWeekWinLog';
import { In_InsRankWeekWinLog } from './in/In_InsRankWeekWinLog';
import { In_SelRankWeekWinLog } from './in/In_SelRankWeekWinLog';
import { Out_SelRankWeekWinLog } from './out/Out_SelRankWeekWinLog';
import { RepRankWeekWinLog } from './model/RepRankWeekWinLog';
export declare class RankWeekWinLogService_ {
    protected En_RankWeekWinLogRep: Repository<En_RankWeekWinLog>;
    protected rep: RepRankWeekWinLog;
    constructor(En_RankWeekWinLogRep: Repository<En_RankWeekWinLog>);
    select(queryParams: In_SelRankWeekWinLog): Promise<Out_SelRankWeekWinLog>;
    selectById(id: number): Promise<En_RankWeekWinLog>;
    insert(dto: In_InsRankWeekWinLog): Promise<any>;
    update(dto: In_InsRankWeekWinLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
