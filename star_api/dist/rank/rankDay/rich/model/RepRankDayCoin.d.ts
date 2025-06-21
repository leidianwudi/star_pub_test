import { Repository } from "typeorm";
import { En_RankDayCoin } from '../entities/En_RankDayCoin';
import { RepRankDayCoin_ } from './RepRankDayCoin_';
export declare class RepRankDayCoin extends RepRankDayCoin_ {
    readonly db: Repository<En_RankDayCoin>;
    constructor(db: Repository<En_RankDayCoin>);
}
