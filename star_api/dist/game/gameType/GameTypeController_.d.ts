import { GameTypeService } from './GameTypeService';
import { Out_GameType } from './out/Out_GameType';
import { In_InsGameType } from './in/In_InsGameType';
import { In_SelGameType } from './in/In_SelGameType';
import { En_GameType } from './entities/En_GameType';
export declare class GameTypeController_ {
    protected readonly service: GameTypeService;
    constructor(service: GameTypeService);
    select(queryParams: In_SelGameType): Promise<import("./out/Out_SelGameType").Out_SelGameType>;
    selectById(body: {
        id: number;
    }): Promise<En_GameType>;
    insert(dto: In_InsGameType): Promise<Out_GameType>;
    update(body: In_InsGameType): Promise<Out_GameType>;
    delete(body: {
        ids: number[];
    }): Promise<Out_GameType>;
}
