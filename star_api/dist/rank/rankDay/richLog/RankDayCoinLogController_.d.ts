import { RankDayCoinLogService } from './RankDayCoinLogService';
import { Out_RankDayCoinLog } from './out/Out_RankDayCoinLog';
import { In_InsRankDayCoinLog } from './in/In_InsRankDayCoinLog';
import { In_SelRankDayCoinLog } from './in/In_SelRankDayCoinLog';
import { En_RankDayCoinLog } from './entities/En_RankDayCoinLog';
export declare class RankDayCoinLogController_ {
    protected readonly service: RankDayCoinLogService;
    constructor(service: RankDayCoinLogService);
    select(queryParams: In_SelRankDayCoinLog): Promise<import("./out/Out_SelRankDayCoinLog").Out_SelRankDayCoinLog>;
    selectById(body: {
        id: number;
    }): Promise<En_RankDayCoinLog>;
    insert(dto: In_InsRankDayCoinLog): Promise<Out_RankDayCoinLog>;
    update(body: In_InsRankDayCoinLog): Promise<Out_RankDayCoinLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankDayCoinLog>;
}
