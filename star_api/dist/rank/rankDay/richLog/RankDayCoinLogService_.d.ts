import { Repository } from 'typeorm';
import { En_RankDayCoinLog } from './entities/En_RankDayCoinLog';
import { In_InsRankDayCoinLog } from './in/In_InsRankDayCoinLog';
import { In_SelRankDayCoinLog } from './in/In_SelRankDayCoinLog';
import { Out_SelRankDayCoinLog } from './out/Out_SelRankDayCoinLog';
import { RepRankDayCoinLog } from './model/RepRankDayCoinLog';
export declare class RankDayCoinLogService_ {
    protected En_RankDayCoinLogRep: Repository<En_RankDayCoinLog>;
    protected rep: RepRankDayCoinLog;
    constructor(En_RankDayCoinLogRep: Repository<En_RankDayCoinLog>);
    select(queryParams: In_SelRankDayCoinLog): Promise<Out_SelRankDayCoinLog>;
    selectById(id: number): Promise<En_RankDayCoinLog>;
    insert(dto: In_InsRankDayCoinLog): Promise<any>;
    update(dto: In_InsRankDayCoinLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
