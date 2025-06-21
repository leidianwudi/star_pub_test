import { Repository } from 'typeorm';
import { En_RankDayRechargeLog } from './entities/En_RankDayRechargeLog';
import { In_InsRankDayRechargeLog } from './in/In_InsRankDayRechargeLog';
import { In_SelRankDayRechargeLog } from './in/In_SelRankDayRechargeLog';
import { Out_SelRankDayRechargeLog } from './out/Out_SelRankDayRechargeLog';
import { RepRankDayRechargeLog } from './model/RepRankDayRechargeLog';
export declare class RankDayRechargeLogService_ {
    protected En_RankDayRechargeLogRep: Repository<En_RankDayRechargeLog>;
    protected rep: RepRankDayRechargeLog;
    constructor(En_RankDayRechargeLogRep: Repository<En_RankDayRechargeLog>);
    select(queryParams: In_SelRankDayRechargeLog): Promise<Out_SelRankDayRechargeLog>;
    selectById(id: number): Promise<En_RankDayRechargeLog>;
    insert(dto: In_InsRankDayRechargeLog): Promise<any>;
    update(dto: In_InsRankDayRechargeLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
