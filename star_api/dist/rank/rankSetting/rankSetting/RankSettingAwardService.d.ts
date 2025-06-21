import { Repository } from 'typeorm';
import { En_RankSettingAward } from './entities/En_RankSettingAward';
import { RankSettingAwardService_ } from './RankSettingAwardService_';
export declare class RankSettingAwardService extends RankSettingAwardService_ {
    constructor(En_RankSettingAwardRep: Repository<En_RankSettingAward>);
}
