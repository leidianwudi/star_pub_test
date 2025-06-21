import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ActItem } from '../entities/En_ActItem';
import { In_SelActItem } from '../in/In_SelActItem';
export declare class RepActItem_ extends RepositorySuper<En_ActItem> {
    readonly db: Repository<En_ActItem>;
    constructor(db: Repository<En_ActItem>);
    findAndCount(queryParams: In_SelActItem): Promise<{
        list: En_ActItem[];
        total: number;
    }>;
}
