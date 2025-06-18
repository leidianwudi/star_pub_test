import { Repository } from "typeorm";
import { En_GameBar } from '../entities/En_GameBar';
import { RepGameBar_ } from "./RepGameBar_";
export declare class RepGameBar extends RepGameBar_ {
    readonly db: Repository<En_GameBar>;
    constructor(db: Repository<En_GameBar>);
}
