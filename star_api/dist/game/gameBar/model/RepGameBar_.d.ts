import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_GameBar } from '../entities/En_GameBar';
import { In_SelGameBar } from '../in/In_SelGameBar';
export declare class RepGameBar_ extends RepositorySuper<En_GameBar> {
    readonly db: Repository<En_GameBar>;
    constructor(db: Repository<En_GameBar>);
    findAndCount(queryParams: In_SelGameBar): Promise<{
        list: En_GameBar[];
        total: number;
    }>;
}
