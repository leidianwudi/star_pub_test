import { Repository } from 'typeorm';
import { En_GameOddsExt } from './entities/En_GameOddsExt';
import { GameOddsExtService_ } from './GameOddsExtService_';
export declare class GameOddsExtService extends GameOddsExtService_ {
    constructor(En_GameOddsExtRep: Repository<En_GameOddsExt>);
}
