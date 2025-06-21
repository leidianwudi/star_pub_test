import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankDayWinLog } from '../entities/En_RankDayWinLog';
import { In_SelRankDayWinLog } from '../in/In_SelRankDayWinLog';
export declare class RepRankDayWinLog_ extends RepositorySuper<En_RankDayWinLog> {
    readonly db: Repository<En_RankDayWinLog>;
    constructor(db: Repository<En_RankDayWinLog>);
    findAndCount(queryParams: In_SelRankDayWinLog): Promise<{
        list: En_RankDayWinLog[];
        total: number;
    }>;
}
