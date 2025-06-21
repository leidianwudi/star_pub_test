import { RankSettingAiService } from './RankSettingAiService';
import { Out_RankSettingAi } from './out/Out_RankSettingAi';
import { In_InsRankSettingAi } from './in/In_InsRankSettingAi';
import { In_SelRankSettingAi } from './in/In_SelRankSettingAi';
import { En_RankSettingAi } from './entities/En_RankSettingAi';
export declare class RankSettingAiController_ {
    protected readonly service: RankSettingAiService;
    constructor(service: RankSettingAiService);
    select(queryParams: In_SelRankSettingAi): Promise<import("./out/Out_SelRankSettingAi").Out_SelRankSettingAi>;
    selectById(body: {
        id: number;
    }): Promise<En_RankSettingAi>;
    insert(dto: In_InsRankSettingAi): Promise<Out_RankSettingAi>;
    update(body: In_InsRankSettingAi): Promise<Out_RankSettingAi>;
    delete(body: {
        ids: number[];
    }): Promise<Out_RankSettingAi>;
}
