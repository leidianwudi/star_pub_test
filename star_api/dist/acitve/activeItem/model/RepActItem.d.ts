import { Repository } from "typeorm";
import { En_ActItem } from '../entities/En_ActItem';
import { RepActItem_ } from './RepActItem_';
export declare class RepActItem extends RepActItem_ {
    readonly db: Repository<En_ActItem>;
    constructor(db: Repository<En_ActItem>);
}
