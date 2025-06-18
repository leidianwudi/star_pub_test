import { GameOddsService } from './GameOddsService';
import { Out_GameOdds } from './out/Out_GameOdds';
import { In_InsGameOdds } from './in/In_InsGameOdds';
import { In_SelGameOdds } from './in/In_SelGameOdds';
import { En_GameOdds } from './entities/En_GameOdds';
export declare class GameOddsController_ {
    protected readonly service: GameOddsService;
    constructor(service: GameOddsService);
    select(queryParams: In_SelGameOdds): Promise<import("./out/Out_SelGameOdds").Out_SelGameOdds>;
    selectById(body: {
        id: number;
    }): Promise<En_GameOdds>;
    insert(dto: In_InsGameOdds): Promise<Out_GameOdds>;
    update(body: In_InsGameOdds): Promise<Out_GameOdds>;
    delete(body: {
        ids: number[];
    }): Promise<Out_GameOdds>;
}
