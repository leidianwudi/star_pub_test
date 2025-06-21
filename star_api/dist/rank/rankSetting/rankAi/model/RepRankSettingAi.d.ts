import { Repository } from "typeorm";
import { En_RankSettingAi } from '../entities/En_RankSettingAi';
import { RepRankSettingAi_ } from './RepRankSettingAi_';
export declare class RepRankSettingAi extends RepRankSettingAi_ {
    readonly db: Repository<En_RankSettingAi>;
    constructor(db: Repository<En_RankSettingAi>);
}
