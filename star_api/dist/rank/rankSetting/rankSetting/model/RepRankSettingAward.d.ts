import { Repository } from "typeorm";
import { En_RankSettingAward } from '../entities/En_RankSettingAward';
import { RepRankSettingAward_ } from './RepRankSettingAward_';
export declare class RepRankSettingAward extends RepRankSettingAward_ {
    readonly db: Repository<En_RankSettingAward>;
    constructor(db: Repository<En_RankSettingAward>);
}
