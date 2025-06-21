import { Repository } from 'typeorm';
import { En_User } from './entities/En_User';
import { UserService_ } from './UserService_';
export declare class UserService extends UserService_ {
    constructor(En_UserRep: Repository<En_User>);
    actionCoin(param: any): Promise<string>;
}
