import { RankDayRechargeService } from './RankDayRechargeService';
import { Out_RankDayRecharge } from './out/Out_RankDayRecharge';
import { In_InsRankDayRecharge } from './in/In_InsRankDayRecharge';
import { In_SelRankDayRecharge } from './in/In_SelRankDayRecharge';
import { En_RankDayRecharge } from './entities/En_RankDayRecharge';
export declare class RankDayRechargeController_ {
    protected readonly service: RankDayRechargeService;
    constructor(service: RankDayRechargeService);
    select(queryParams: In_SelRankDayRecharge): Promise<import("./out/Out_SelRankDayRecharge").Out_SelRankDayRecharge>;
    selectById(body: {
        id: number;
    }): Promise<En_RankDayRecharge>;
    insert(dto: In_InsRankDayRecharge): Promise<Out_RankDayRecharge>;
    update(body: In_InsRankDayRecharge): Promise<Out_RankDayRecharge>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankDayRecharge>;
}
