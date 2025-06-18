import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_User } from '../entities/En_User';
import { In_SelUser } from '../in/In_SelUser';
export declare class RepUser_ extends RepositorySuper<En_User> {
    readonly db: Repository<En_User>;
    constructor(db: Repository<En_User>);
    findAndCount(queryParams: In_SelUser): Promise<{
        list: En_User[];
        total: number;
    }>;
}
