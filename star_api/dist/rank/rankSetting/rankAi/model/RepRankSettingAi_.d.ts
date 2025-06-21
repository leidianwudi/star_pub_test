import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankSettingAi } from '../entities/En_RankSettingAi';
import { In_SelRankSettingAi } from '../in/In_SelRankSettingAi';
export declare class RepRankSettingAi_ extends RepositorySuper<En_RankSettingAi> {
    readonly db: Repository<En_RankSettingAi>;
    constructor(db: Repository<En_RankSettingAi>);
    findAndCount(queryParams: In_SelRankSettingAi): Promise<{
        list: En_RankSettingAi[];
        total: number;
    }>;
}
