import { Repository } from 'typeorm';
import { En_RankWeekRechargeLog } from './entities/En_RankWeekRechargeLog';
import { In_InsRankWeekRechargeLog } from './in/In_InsRankWeekRechargeLog';
import { In_SelRankWeekRechargeLog } from './in/In_SelRankWeekRechargeLog';
import { Out_SelRankWeekRechargeLog } from './out/Out_SelRankWeekRechargeLog';
import { RepRankWeekRechargeLog } from './model/RepRankWeekRechargeLog';
export declare class RankWeekRechargeLogService_ {
    protected En_RankWeekRechargeLogRep: Repository<En_RankWeekRechargeLog>;
    protected rep: RepRankWeekRechargeLog;
    constructor(En_RankWeekRechargeLogRep: Repository<En_RankWeekRechargeLog>);
    select(queryParams: In_SelRankWeekRechargeLog): Promise<Out_SelRankWeekRechargeLog>;
    selectById(id: number): Promise<En_RankWeekRechargeLog>;
    insert(dto: In_InsRankWeekRechargeLog): Promise<any>;
    update(dto: In_InsRankWeekRechargeLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
