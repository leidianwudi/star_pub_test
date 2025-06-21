import { Repository } from 'typeorm';
import { En_RankSettingAi } from './entities/En_RankSettingAi';
import { RankSettingAiService_ } from './RankSettingAiService_';
export declare class RankSettingAiService extends RankSettingAiService_ {
    constructor(En_RankSettingAiRep: Repository<En_RankSettingAi>);
}
