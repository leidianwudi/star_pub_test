import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_PokerRoom } from '../entities/En_PokerRoom';
import { In_SelPokerRoom } from '../in/In_SelPokerRoom';
export declare class RepPokerRoom_ extends RepositorySuper<En_PokerRoom> {
    readonly db: Repository<En_PokerRoom>;
    constructor(db: Repository<En_PokerRoom>);
    findAndCount(queryParams: In_SelPokerRoom): Promise<{
        list: En_PokerRoom[];
        total: number;
    }>;
}
