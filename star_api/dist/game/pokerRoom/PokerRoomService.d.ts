import { Repository } from 'typeorm';
import { En_PokerRoom } from './entities/En_PokerRoom';
import { PokerRoomService_ } from './PokerRoomService_';
export declare class PokerRoomService extends PokerRoomService_ {
    constructor(En_PokerRoomRep: Repository<En_PokerRoom>);
}
