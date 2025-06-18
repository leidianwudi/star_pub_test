import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_GameOdds } from '../entities/En_GameOdds';
import { In_SelGameOdds } from '../in/In_SelGameOdds';
export declare class RepGameOdds_ extends RepositorySuper<En_GameOdds> {
    readonly db: Repository<En_GameOdds>;
    constructor(db: Repository<En_GameOdds>);
    findAndCount(queryParams: In_SelGameOdds): Promise<{
        list: En_GameOdds[];
        total: number;
    }>;
}
