import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_RankSettingAward } from '../entities/En_RankSettingAward';
import { In_SelRankSettingAward } from '../in/In_SelRankSettingAward';
export declare class RepRankSettingAward_ extends RepositorySuper<En_RankSettingAward> {
    readonly db: Repository<En_RankSettingAward>;
    constructor(db: Repository<En_RankSettingAward>);
    findAndCount(queryParams: In_SelRankSettingAward): Promise<{
        list: En_RankSettingAward[];
        total: number;
    }>;
}
