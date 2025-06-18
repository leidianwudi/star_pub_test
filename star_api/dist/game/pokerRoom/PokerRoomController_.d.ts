import { PokerRoomService } from './PokerRoomService';
import { Out_PokerRoom } from './out/Out_PokerRoom';
import { In_InsPokerRoom } from './in/In_InsPokerRoom';
import { In_SelPokerRoom } from './in/In_SelPokerRoom';
import { En_PokerRoom } from './entities/En_PokerRoom';
export declare class PokerRoomController_ {
    protected readonly service: PokerRoomService;
    constructor(service: PokerRoomService);
    select(queryParams: In_SelPokerRoom): Promise<import("./out/Out_SelPokerRoom").Out_SelPokerRoom>;
    selectById(body: {
        id: number;
    }): Promise<En_PokerRoom>;
    insert(dto: In_InsPokerRoom): Promise<Out_PokerRoom>;
    update(body: In_InsPokerRoom): Promise<Out_PokerRoom>;
    delete(body: {
        ids: number[];
    }): Promise<Out_PokerRoom>;
}
