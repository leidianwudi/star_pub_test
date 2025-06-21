import { Repository } from "typeorm";
import { En_RankWeekWin } from '../entities/En_RankWeekWin';
import { RepRankWeekWin_ } from './RepRankWeekWin_';
export declare class RepRankWeekWin extends RepRankWeekWin_ {
    readonly db: Repository<En_RankWeekWin>;
    constructor(db: Repository<En_RankWeekWin>);
}
