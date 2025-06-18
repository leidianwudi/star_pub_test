import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_GameBase } from '../entities/En_GameBase';
import { In_SelGameBase } from '../in/In_SelGameBase';
export declare class RepGameBase_ extends RepositorySuper<En_GameBase> {
    readonly db: Repository<En_GameBase>;
    constructor(db: Repository<En_GameBase>);
    findAndCount(queryParams: In_SelGameBase): Promise<{
        list: En_GameBase[];
        total: number;
    }>;
}
