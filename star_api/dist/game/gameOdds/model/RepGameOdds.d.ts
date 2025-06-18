import { Repository } from "typeorm";
import { En_GameOdds } from '../entities/En_GameOdds';
import { RepGameOdds_ } from './RepGameOdds_';
export declare class RepGameOdds extends RepGameOdds_ {
    readonly db: Repository<En_GameOdds>;
    constructor(db: Repository<En_GameOdds>);
}
