import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_GameType } from '../entities/En_GameType';
import { In_SelGameType } from '../in/In_SelGameType';
export declare class RepGameType_ extends RepositorySuper<En_GameType> {
    readonly db: Repository<En_GameType>;
    constructor(db: Repository<En_GameType>);
    findAndCount(queryParams: In_SelGameType): Promise<{
        list: En_GameType[];
        total: number;
    }>;
}
