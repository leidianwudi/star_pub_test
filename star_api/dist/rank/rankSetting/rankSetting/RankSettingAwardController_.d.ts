import { RankSettingAwardService } from './RankSettingAwardService';
import { Out_RankSettingAward } from './out/Out_RankSettingAward';
import { In_InsRankSettingAward } from './in/In_InsRankSettingAward';
import { In_SelRankSettingAward } from './in/In_SelRankSettingAward';
import { En_RankSettingAward } from './entities/En_RankSettingAward';
export declare class RankSettingAwardController_ {
    protected readonly service: RankSettingAwardService;
    constructor(service: RankSettingAwardService);
    select(queryParams: In_SelRankSettingAward): Promise<import("./out/Out_SelRankSettingAward").Out_SelRankSettingAward>;
    selectById(body: {
        id: number;
    }): Promise<En_RankSettingAward>;
    insert(dto: In_InsRankSettingAward): Promise<Out_RankSettingAward>;
    update(body: In_InsRankSettingAward): Promise<Out_RankSettingAward>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankSettingAward>;
}
