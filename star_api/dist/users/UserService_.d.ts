import { Repository } from 'typeorm';
import { En_User } from './entities/En_User';
import { In_InsUser } from './in/In_InsUser';
import { In_SelUser } from './in/In_SelUser';
import { Out_SelUser } from './out/Out_SelUser';
import { RepUser } from './model/RepUser';
export declare class UserService_ {
    protected En_UserRep: Repository<En_User>;
    protected rep: RepUser;
    constructor(En_UserRep: Repository<En_User>);
    select(queryParams: In_SelUser): Promise<Out_SelUser>;
    selectById(id: number): Promise<En_User>;
    insert(dto: In_InsUser): Promise<any>;
    update(dto: In_InsUser): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
