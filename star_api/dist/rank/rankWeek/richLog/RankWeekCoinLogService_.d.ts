import { Repository } from 'typeorm';
import { En_RankWeekCoinLog } from './entities/En_RankWeekCoinLog';
import { In_InsRankWeekCoinLog } from './in/In_InsRankWeekCoinLog';
import { In_SelRankWeekCoinLog } from './in/In_SelRankWeekCoinLog';
import { Out_SelRankWeekCoinLog } from './out/Out_SelRankWeekCoinLog';
import { RepRankWeekCoinLog } from './model/RepRankWeekCoinLog';
export declare class RankWeekCoinLogService_ {
    protected En_RankWeekCoinLogRep: Repository<En_RankWeekCoinLog>;
    protected rep: RepRankWeekCoinLog;
    constructor(En_RankWeekCoinLogRep: Repository<En_RankWeekCoinLog>);
    select(queryParams: In_SelRankWeekCoinLog): Promise<Out_SelRankWeekCoinLog>;
    selectById(id: number): Promise<En_RankWeekCoinLog>;
    insert(dto: In_InsRankWeekCoinLog): Promise<any>;
    update(dto: In_InsRankWeekCoinLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
