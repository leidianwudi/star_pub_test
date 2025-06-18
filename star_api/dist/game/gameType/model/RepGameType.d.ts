import { Repository } from "typeorm";
import { En_GameType } from '../entities/En_GameType';
import { RepGameType_ } from "./RepGameType_";
export declare class RepGameType extends RepGameType_ {
    readonly db: Repository<En_GameType>;
    constructor(db: Repository<En_GameType>);
}
