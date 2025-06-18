import { Repository } from "typeorm";
import { En_PokerRoom } from '../entities/En_PokerRoom';
import { RepPokerRoom_ } from './RepPokerRoom_';
export declare class RepPokerRoom extends RepPokerRoom_ {
    readonly db: Repository<En_PokerRoom>;
    constructor(db: Repository<En_PokerRoom>);
}
