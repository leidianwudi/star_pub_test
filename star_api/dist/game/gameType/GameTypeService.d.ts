import { Repository } from 'typeorm';
import { En_GameType } from './entities/En_GameType';
import { GameTypeService_ } from './GameTypeService_';
export declare class GameTypeService extends GameTypeService_ {
    constructor(En_GameTypeRep: Repository<En_GameType>);
    getAll(): Promise<En_GameType[]>;
}
