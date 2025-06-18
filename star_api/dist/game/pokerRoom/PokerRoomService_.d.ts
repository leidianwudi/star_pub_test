import { Repository } from 'typeorm';
import { En_PokerRoom } from './entities/En_PokerRoom';
import { In_InsPokerRoom } from './in/In_InsPokerRoom';
import { In_SelPokerRoom } from './in/In_SelPokerRoom';
import { Out_SelPokerRoom } from './out/Out_SelPokerRoom';
import { RepPokerRoom } from './model/RepPokerRoom';
export declare class PokerRoomService_ {
    protected En_PokerRoomRep: Repository<En_PokerRoom>;
    protected rep: RepPokerRoom;
    constructor(En_PokerRoomRep: Repository<En_PokerRoom>);
    select(queryParams: In_SelPokerRoom): Promise<Out_SelPokerRoom>;
    selectById(id: number): Promise<En_PokerRoom>;
    insert(dto: In_InsPokerRoom): Promise<any>;
    update(dto: In_InsPokerRoom): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
