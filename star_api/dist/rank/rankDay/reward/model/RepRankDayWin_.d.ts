import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankDayWin } from '../entities/En_RankDayWin';
import { In_SelRankDayWin } from '../in/In_SelRankDayWin';
export declare class RepRankDayWin_ extends RepositorySuper<En_RankDayWin> {
    readonly db: Repository<En_RankDayWin>;
    constructor(db: Repository<En_RankDayWin>);
    findAndCount(queryParams: In_SelRankDayWin): Promise<{
        list: En_RankDayWin[];
        total: number;
    }>;
}
