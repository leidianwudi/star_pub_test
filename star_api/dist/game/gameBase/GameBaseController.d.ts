import { GameBaseService } from './GameBaseService';
import { GameBaseController_ } from './GameBaseController_';
export declare class GameBaseController extends GameBaseController_ {
    constructor(service: GameBaseService);
    getAll(): Promise<{
        list: import("./entities/En_GameBase").En_GameBase[];
        total: number;
    }>;
}
