import { ActItemService } from './ActItemService';
import { ActItemController_ } from './ActItemController_';
export declare class ActItemController extends ActItemController_ {
    constructor(service: ActItemService);
    getAll(): Promise<{
        list: import("./entities/En_ActItem").En_ActItem[];
        total: number;
    }>;
}
