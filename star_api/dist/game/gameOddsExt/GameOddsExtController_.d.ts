import { GameOddsExtService } from './GameOddsExtService';
import { Out_GameOddsExt } from './out/Out_GameOddsExt';
import { In_InsGameOddsExt } from './in/In_InsGameOddsExt';
import { In_SelGameOddsExt } from './in/In_SelGameOddsExt';
import { En_GameOddsExt } from './entities/En_GameOddsExt';
export declare class GameOddsExtController_ {
    protected readonly service: GameOddsExtService;
    constructor(service: GameOddsExtService);
    select(queryParams: In_SelGameOddsExt): Promise<import("./out/Out_SelGameOddsExt").Out_SelGameOddsExt>;
    selectById(body: {
        id: number;
    }): Promise<En_GameOddsExt>;
    insert(dto: In_InsGameOddsExt): Promise<Out_GameOddsExt>;
    update(body: In_InsGameOddsExt): Promise<Out_GameOddsExt>;
    delete(body: {
        ids: number[];
    }): Promise<Out_GameOddsExt>;
}
