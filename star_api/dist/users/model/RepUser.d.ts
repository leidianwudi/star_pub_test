import { Repository } from "typeorm";
import { En_User } from '../entities/En_User';
import { RepUser_ } from "./RepUser_";
export declare class RepUser extends RepUser_ {
    readonly db: Repository<En_User>;
    constructor(db: Repository<En_User>);
}
