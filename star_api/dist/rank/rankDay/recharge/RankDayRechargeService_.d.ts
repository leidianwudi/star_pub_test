import { Repository } from 'typeorm';
import { En_RankDayRecharge } from './entities/En_RankDayRecharge';
import { In_InsRankDayRecharge } from './in/In_InsRankDayRecharge';
import { In_SelRankDayRecharge } from './in/In_SelRankDayRecharge';
import { Out_SelRankDayRecharge } from './out/Out_SelRankDayRecharge';
import { RepRankDayRecharge } from './model/RepRankDayRecharge';
export declare class RankDayRechargeService_ {
    protected En_RankDayRechargeRep: Repository<En_RankDayRecharge>;
    protected rep: RepRankDayRecharge;
    constructor(En_RankDayRechargeRep: Repository<En_RankDayRecharge>);
    select(queryParams: In_SelRankDayRecharge): Promise<Out_SelRankDayRecharge>;
    selectById(id: number): Promise<En_RankDayRecharge>;
    insert(dto: In_InsRankDayRecharge): Promise<any>;
    update(dto: In_InsRankDayRecharge): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
