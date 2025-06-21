import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankWeekWinLog } from '../entities/En_RankWeekWinLog';
import { In_SelRankWeekWinLog } from '../in/In_SelRankWeekWinLog';
export declare class RepRankWeekWinLog_ extends RepositorySuper<En_RankWeekWinLog> {
    readonly db: Repository<En_RankWeekWinLog>;
    constructor(db: Repository<En_RankWeekWinLog>);
    findAndCount(queryParams: In_SelRankWeekWinLog): Promise<{
        list: En_RankWeekWinLog[];
        total: number;
    }>;
}
