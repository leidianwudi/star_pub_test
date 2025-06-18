import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_SystemTask } from '../entities/En_SystemTask';
import { In_SelSystemTask } from '../in/In_SelSystemTask';
export declare class RepSystemTask_ extends RepositorySuper<En_SystemTask> {
    readonly db: Repository<En_SystemTask>;
    constructor(db: Repository<En_SystemTask>);
    findAndCount(queryParams: In_SelSystemTask): Promise<{
        list: En_SystemTask[];
        total: number;
    }>;
}
