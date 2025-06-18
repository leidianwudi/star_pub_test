import { Repository } from 'typeorm';
import { En_GameBase } from './entities/En_GameBase';
import { GameBaseService_ } from './GameBaseService_';
export declare class GameBaseService extends GameBaseService_ {
    constructor(En_GameBaseRep: Repository<En_GameBase>);
    getAll(): Promise<En_GameBase[]>;
}
