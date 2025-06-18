import { Repository } from "typeorm";
import { En_GameBase } from '../entities/En_GameBase';
import { RepGameBase_ } from "./RepGameBase_";
export declare class RepGameBase extends RepGameBase_ {
    readonly db: Repository<En_GameBase>;
    constructor(db: Repository<En_GameBase>);
}
