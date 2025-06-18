import { Repository } from "typeorm";
import { En_GameOddsExt } from '../entities/En_GameOddsExt';
import { RepGameOddsExt_ } from './RepGameOddsExt_';
export declare class RepGameOddsExt extends RepGameOddsExt_ {
    readonly db: Repository<En_GameOddsExt>;
    constructor(db: Repository<En_GameOddsExt>);
}
