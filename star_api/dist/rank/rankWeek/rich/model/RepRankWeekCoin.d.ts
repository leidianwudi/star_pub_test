import { Repository } from "typeorm";
import { En_RankWeekCoin } from '../entities/En_RankWeekCoin';
import { RepRankWeekCoin_ } from './RepRankWeekCoin_';
export declare class RepRankWeekCoin extends RepRankWeekCoin_ {
    readonly db: Repository<En_RankWeekCoin>;
    constructor(db: Repository<En_RankWeekCoin>);
}
