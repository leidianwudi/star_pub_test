import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ActSignWeek } from '../entities/En_ActSignWeek';
import { In_SelActSignWeek } from '../in/In_SelActSignWeek';
export declare class RepActSignWeek_ extends RepositorySuper<En_ActSignWeek> {
    readonly db: Repository<En_ActSignWeek>;
    constructor(db: Repository<En_ActSignWeek>);
    findAndCount(queryParams: In_SelActSignWeek): Promise<{
        list: En_ActSignWeek[];
        total: number;
    }>;
}
