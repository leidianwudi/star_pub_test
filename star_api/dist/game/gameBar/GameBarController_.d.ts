import { GameBarService } from './GameBarService';
import { Out_GameBar } from './out/Out_GameBar';
import { In_InsGameBar } from './in/In_InsGameBar';
import { In_SelGameBar } from './in/In_SelGameBar';
import { En_GameBar } from './entities/En_GameBar';
export declare class GameBarController_ {
    protected readonly service: GameBarService;
    constructor(service: GameBarService);
    select(queryParams: In_SelGameBar): Promise<import("./out/Out_SelGameBar").Out_SelGameBar>;
    selectById(body: {
        id: number;
    }): Promise<En_GameBar>;
    insert(dto: In_InsGameBar): Promise<Out_GameBar>;
    update(body: In_InsGameBar): Promise<Out_GameBar>;
    delete(body: {
        ids: number[];
    }): Promise<Out_GameBar>;
}
