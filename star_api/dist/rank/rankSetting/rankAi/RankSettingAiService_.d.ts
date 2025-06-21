import { Repository } from 'typeorm';
import { En_RankSettingAi } from './entities/En_RankSettingAi';
import { In_InsRankSettingAi } from './in/In_InsRankSettingAi';
import { In_SelRankSettingAi } from './in/In_SelRankSettingAi';
import { Out_SelRankSettingAi } from './out/Out_SelRankSettingAi';
import { RepRankSettingAi } from './model/RepRankSettingAi';
export declare class RankSettingAiService_ {
    protected En_RankSettingAiRep: Repository<En_RankSettingAi>;
    protected rep: RepRankSettingAi;
    constructor(En_RankSettingAiRep: Repository<En_RankSettingAi>);
    select(queryParams: In_SelRankSettingAi): Promise<Out_SelRankSettingAi>;
    selectById(id: number): Promise<En_RankSettingAi>;
    insert(dto: In_InsRankSettingAi): Promise<any>;
    update(dto: In_InsRankSettingAi): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
