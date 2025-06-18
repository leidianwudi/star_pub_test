import { Repository } from 'typeorm';
import { En_GameOdds } from './entities/En_GameOdds';
import { GameOddsService_ } from './GameOddsService_';
export declare class GameOddsService extends GameOddsService_ {
    constructor(En_GameOddsRep: Repository<En_GameOdds>);
}
