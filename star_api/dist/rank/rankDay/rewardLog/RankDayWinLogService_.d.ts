import { Repository } from 'typeorm';
import { En_RankDayWinLog } from './entities/En_RankDayWinLog';
import { In_InsRankDayWinLog } from './in/In_InsRankDayWinLog';
import { In_SelRankDayWinLog } from './in/In_SelRankDayWinLog';
import { Out_SelRankDayWinLog } from './out/Out_SelRankDayWinLog';
import { RepRankDayWinLog } from './model/RepRankDayWinLog';
export declare class RankDayWinLogService_ {
    protected En_RankDayWinLogRep: Repository<En_RankDayWinLog>;
    protected rep: RepRankDayWinLog;
    constructor(En_RankDayWinLogRep: Repository<En_RankDayWinLog>);
    select(queryParams: In_SelRankDayWinLog): Promise<Out_SelRankDayWinLog>;
    selectById(id: number): Promise<En_RankDayWinLog>;
    insert(dto: In_InsRankDayWinLog): Promise<any>;
    update(dto: In_InsRankDayWinLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
