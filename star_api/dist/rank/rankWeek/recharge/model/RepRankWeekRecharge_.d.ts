import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankWeekRecharge } from '../entities/En_RankWeekRecharge';
import { In_SelRankWeekRecharge } from '../in/In_SelRankWeekRecharge';
export declare class RepRankWeekRecharge_ extends RepositorySuper<En_RankWeekRecharge> {
    readonly db: Repository<En_RankWeekRecharge>;
    constructor(db: Repository<En_RankWeekRecharge>);
    findAndCount(queryParams: In_SelRankWeekRecharge): Promise<{
        list: En_RankWeekRecharge[];
        total: number;
    }>;
}
