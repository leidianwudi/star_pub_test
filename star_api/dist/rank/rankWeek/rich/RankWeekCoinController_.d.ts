import { RankWeekCoinService } from './RankWeekCoinService';
import { Out_RankWeekCoin } from './out/Out_RankWeekCoin';
import { In_InsRankWeekCoin } from './in/In_InsRankWeekCoin';
import { In_SelRankWeekCoin } from './in/In_SelRankWeekCoin';
import { En_RankWeekCoin } from './entities/En_RankWeekCoin';
export declare class RankWeekCoinController_ {
    protected readonly service: RankWeekCoinService;
    constructor(service: RankWeekCoinService);
    select(queryParams: In_SelRankWeekCoin): Promise<import("./out/Out_SelRankWeekCoin").Out_SelRankWeekCoin>;
    selectById(body: {
        id: number;
    }): Promise<En_RankWeekCoin>;
    insert(dto: In_InsRankWeekCoin): Promise<Out_RankWeekCoin>;
    update(body: In_InsRankWeekCoin): Promise<Out_RankWeekCoin>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankWeekCoin>;
}
