import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_GameOddsExt } from '../entities/En_GameOddsExt';
import { In_SelGameOddsExt } from '../in/In_SelGameOddsExt';
export declare class RepGameOddsExt_ extends RepositorySuper<En_GameOddsExt> {
    readonly db: Repository<En_GameOddsExt>;
    constructor(db: Repository<En_GameOddsExt>);
    findAndCount(queryParams: In_SelGameOddsExt): Promise<{
        list: En_GameOddsExt[];
        total: number;
    }>;
}
