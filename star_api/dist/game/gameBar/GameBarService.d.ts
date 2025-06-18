import { Repository } from 'typeorm';
import { En_GameBar } from './entities/En_GameBar';
import { GameBarService_ } from './GameBarService_';
export declare class GameBarService extends GameBarService_ {
    constructor(En_GameBarRep: Repository<En_GameBar>);
}
