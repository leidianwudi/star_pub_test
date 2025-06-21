import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_SlotsLog } from '../entities/En_SlotsLog';
import { In_SelSlotsLog } from '../in/In_SelSlotsLog';
export declare class RepSlotsLog_ extends RepositorySuper<En_SlotsLog> {
    readonly db: Repository<En_SlotsLog>;
    constructor(db: Repository<En_SlotsLog>);
    findAndCount(queryParams: In_SelSlotsLog): Promise<{
        list: En_SlotsLog[];
        total: number;
    }>;
}
