import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankDayRecharge } from '../entities/En_RankDayRecharge';
import { In_SelRankDayRecharge } from '../in/In_SelRankDayRecharge';
export declare class RepRankDayRecharge_ extends RepositorySuper<En_RankDayRecharge> {
    readonly db: Repository<En_RankDayRecharge>;
    constructor(db: Repository<En_RankDayRecharge>);
    findAndCount(queryParams: In_SelRankDayRecharge): Promise<{
        list: En_RankDayRecharge[];
        total: number;
    }>;
}
