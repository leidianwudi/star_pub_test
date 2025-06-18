import { UserService } from './UserService';
import { Out_User } from './out/Out_User';
import { In_InsUser } from './in/In_InsUser';
import { In_SelUser } from './in/In_SelUser';
import { En_User } from './entities/En_User';
export declare class UserController_ {
    protected readonly service: UserService;
    constructor(service: UserService);
    select(queryParams: In_SelUser): Promise<import("./out/Out_SelUser").Out_SelUser>;
    selectById(body: {
        id: number;
    }): Promise<En_User>;
    insert(dto: In_InsUser): Promise<Out_User>;
    update(body: In_InsUser): Promise<Out_User>;
    delete(body: {
        ids: number[];
    }): Promise<Out_User>;
}
