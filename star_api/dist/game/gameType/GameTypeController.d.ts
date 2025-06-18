import { GameTypeService } from './GameTypeService';
import { GameTypeController_ } from './GameTypeController_';
export declare class GameTypeController extends GameTypeController_ {
    constructor(service: GameTypeService);
    getAll(): Promise<{
        list: import("./entities/En_GameType").En_GameType[];
        total: number;
    }>;
}
