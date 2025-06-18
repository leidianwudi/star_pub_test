import { GameBaseService } from './GameBaseService';
import { Out_GameBase } from './out/Out_GameBase';
import { In_InsGameBase } from './in/In_InsGameBase';
import { In_SelGameBase } from './in/In_SelGameBase';
import { En_GameBase } from './entities/En_GameBase';
export declare class GameBaseController_ {
    protected readonly service: GameBaseService;
    constructor(service: GameBaseService);
    select(queryParams: In_SelGameBase): Promise<import("./out/Out_SelGameBase").Out_SelGameBase>;
    selectById(body: {
        id: number;
    }): Promise<En_GameBase>;
    insert(dto: In_InsGameBase): Promise<Out_GameBase>;
    update(body: In_InsGameBase): Promise<Out_GameBase>;
    delete(body: {
        ids: number[];
    }): Promise<Out_GameBase>;
}
