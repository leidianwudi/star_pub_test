import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankWeekWin } from '../entities/En_RankWeekWin';
import { In_SelRankWeekWin } from '../in/In_SelRankWeekWin';
export declare class RepRankWeekWin_ extends RepositorySuper<En_RankWeekWin> {
    readonly db: Repository<En_RankWeekWin>;
    constructor(db: Repository<En_RankWeekWin>);
    findAndCount(queryParams: In_SelRankWeekWin): Promise<{
        list: En_RankWeekWin[];
        total: number;
    }>;
}
