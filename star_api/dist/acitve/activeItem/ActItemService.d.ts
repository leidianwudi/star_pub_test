import { Repository } from 'typeorm';
import { En_ActItem } from './entities/En_ActItem';
import { ActItemService_ } from './ActItemService_';
export declare class ActItemService extends ActItemService_ {
    constructor(En_ActItemRep: Repository<En_ActItem>);
    getAll(): Promise<En_ActItem[]>;
}
