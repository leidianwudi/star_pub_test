import { Repository } from 'typeorm';
import { En_RankWeekCoin } from './entities/En_RankWeekCoin';
import { In_InsRankWeekCoin } from './in/In_InsRankWeekCoin';
import { In_SelRankWeekCoin } from './in/In_SelRankWeekCoin';
import { Out_SelRankWeekCoin } from './out/Out_SelRankWeekCoin';
import { RepRankWeekCoin } from './model/RepRankWeekCoin';
export declare class RankWeekCoinService_ {
    protected En_RankWeekCoinRep: Repository<En_RankWeekCoin>;
    protected rep: RepRankWeekCoin;
    constructor(En_RankWeekCoinRep: Repository<En_RankWeekCoin>);
    select(queryParams: In_SelRankWeekCoin): Promise<Out_SelRankWeekCoin>;
    selectById(id: number): Promise<En_RankWeekCoin>;
    insert(dto: In_InsRankWeekCoin): Promise<any>;
    update(dto: In_InsRankWeekCoin): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
