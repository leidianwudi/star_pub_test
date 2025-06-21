import { RankDayCoinService } from './RankDayCoinService';
import { Out_RankDayCoin } from './out/Out_RankDayCoin';
import { In_InsRankDayCoin } from './in/In_InsRankDayCoin';
import { In_SelRankDayCoin } from './in/In_SelRankDayCoin';
import { En_RankDayCoin } from './entities/En_RankDayCoin';
export declare class RankDayCoinController_ {
    protected readonly service: RankDayCoinService;
    constructor(service: RankDayCoinService);
    select(queryParams: In_SelRankDayCoin): Promise<import("./out/Out_SelRankDayCoin").Out_SelRankDayCoin>;
    selectById(body: {
        id: number;
    }): Promise<En_RankDayCoin>;
    insert(dto: In_InsRankDayCoin): Promise<Out_RankDayCoin>;
    update(body: In_InsRankDayCoin): Promise<Out_RankDayCoin>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankDayCoin>;
}
