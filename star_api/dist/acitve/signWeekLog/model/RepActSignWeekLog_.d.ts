import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ActSignWeekLog } from '../entities/En_ActSignWeekLog';
import { In_SelActSignWeekLog } from '../in/In_SelActSignWeekLog';
export declare class RepActSignWeekLog_ extends RepositorySuper<En_ActSignWeekLog> {
    readonly db: Repository<En_ActSignWeekLog>;
    constructor(db: Repository<En_ActSignWeekLog>);
    findAndCount(queryParams: In_SelActSignWeekLog): Promise<{
        list: En_ActSignWeekLog[];
        total: number;
    }>;
}
