import { Repository } from "typeorm";
import { En_RankDayRecharge } from '../entities/En_RankDayRecharge';
import { RepRankDayRecharge_ } from './RepRankDayRecharge_';
export declare class RepRankDayRecharge extends RepRankDayRecharge_ {
    readonly db: Repository<En_RankDayRecharge>;
    constructor(db: Repository<En_RankDayRecharge>);
}
