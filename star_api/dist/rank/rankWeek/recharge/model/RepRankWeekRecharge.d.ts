import { Repository } from "typeorm";
import { En_RankWeekRecharge } from '../entities/En_RankWeekRecharge';
import { RepRankWeekRecharge_ } from './RepRankWeekRecharge_';
export declare class RepRankWeekRecharge extends RepRankWeekRecharge_ {
    readonly db: Repository<En_RankWeekRecharge>;
    constructor(db: Repository<En_RankWeekRecharge>);
}
