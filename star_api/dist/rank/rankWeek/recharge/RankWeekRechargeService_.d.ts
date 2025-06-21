import { Repository } from 'typeorm';
import { En_RankWeekRecharge } from './entities/En_RankWeekRecharge';
import { In_InsRankWeekRecharge } from './in/In_InsRankWeekRecharge';
import { In_SelRankWeekRecharge } from './in/In_SelRankWeekRecharge';
import { Out_SelRankWeekRecharge } from './out/Out_SelRankWeekRecharge';
import { RepRankWeekRecharge } from './model/RepRankWeekRecharge';
export declare class RankWeekRechargeService_ {
    protected En_RankWeekRechargeRep: Repository<En_RankWeekRecharge>;
    protected rep: RepRankWeekRecharge;
    constructor(En_RankWeekRechargeRep: Repository<En_RankWeekRecharge>);
    select(queryParams: In_SelRankWeekRecharge): Promise<Out_SelRankWeekRecharge>;
    selectById(id: number): Promise<En_RankWeekRecharge>;
    insert(dto: In_InsRankWeekRecharge): Promise<any>;
    update(dto: In_InsRankWeekRecharge): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
