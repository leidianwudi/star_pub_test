import { RankWeekRechargeService } from './RankWeekRechargeService';
import { Out_RankWeekRecharge } from './out/Out_RankWeekRecharge';
import { In_InsRankWeekRecharge } from './in/In_InsRankWeekRecharge';
import { In_SelRankWeekRecharge } from './in/In_SelRankWeekRecharge';
import { En_RankWeekRecharge } from './entities/En_RankWeekRecharge';
export declare class RankWeekRechargeController_ {
    protected readonly service: RankWeekRechargeService;
    constructor(service: RankWeekRechargeService);
    select(queryParams: In_SelRankWeekRecharge): Promise<import("./out/Out_SelRankWeekRecharge").Out_SelRankWeekRecharge>;
    selectById(body: {
        id: number;
    }): Promise<En_RankWeekRecharge>;
    insert(dto: In_InsRankWeekRecharge): Promise<Out_RankWeekRecharge>;
    update(body: In_InsRankWeekRecharge): Promise<Out_RankWeekRecharge>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankWeekRecharge>;
}
