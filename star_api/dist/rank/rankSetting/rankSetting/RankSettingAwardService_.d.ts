import { Repository } from 'typeorm';
import { En_RankSettingAward } from './entities/En_RankSettingAward';
import { In_InsRankSettingAward } from './in/In_InsRankSettingAward';
import { In_SelRankSettingAward } from './in/In_SelRankSettingAward';
import { Out_SelRankSettingAward } from './out/Out_SelRankSettingAward';
import { RepRankSettingAward } from './model/RepRankSettingAward';
export declare class RankSettingAwardService_ {
    protected En_RankSettingAwardRep: Repository<En_RankSettingAward>;
    protected rep: RepRankSettingAward;
    constructor(En_RankSettingAwardRep: Repository<En_RankSettingAward>);
    select(queryParams: In_SelRankSettingAward): Promise<Out_SelRankSettingAward>;
    selectById(id: number): Promise<En_RankSettingAward>;
    insert(dto: In_InsRankSettingAward): Promise<any>;
    update(dto: In_InsRankSettingAward): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
