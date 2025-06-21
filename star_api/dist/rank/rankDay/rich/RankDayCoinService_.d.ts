import { Repository } from 'typeorm';
import { En_RankDayCoin } from './entities/En_RankDayCoin';
import { In_InsRankDayCoin } from './in/In_InsRankDayCoin';
import { In_SelRankDayCoin } from './in/In_SelRankDayCoin';
import { Out_SelRankDayCoin } from './out/Out_SelRankDayCoin';
import { RepRankDayCoin } from './model/RepRankDayCoin';
export declare class RankDayCoinService_ {
    protected En_RankDayCoinRep: Repository<En_RankDayCoin>;
    protected rep: RepRankDayCoin;
    constructor(En_RankDayCoinRep: Repository<En_RankDayCoin>);
    select(queryParams: In_SelRankDayCoin): Promise<Out_SelRankDayCoin>;
    selectById(id: number): Promise<En_RankDayCoin>;
    insert(dto: In_InsRankDayCoin): Promise<any>;
    update(dto: In_InsRankDayCoin): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
