import { Repository } from "typeorm";
import { En_RankDayWin } from '../entities/En_RankDayWin';
import { RepRankDayWin_ } from './RepRankDayWin_';
export declare class RepRankDayWin extends RepRankDayWin_ {
    readonly db: Repository<En_RankDayWin>;
    constructor(db: Repository<En_RankDayWin>);
}
