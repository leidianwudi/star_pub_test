import { Repository } from 'typeorm';
import { En_GameBase } from './entities/En_GameBase';
import { In_InsGameBase } from './in/In_InsGameBase';
import { In_SelGameBase } from './in/In_SelGameBase';
import { Out_SelGameBase } from './out/Out_SelGameBase';
import { RepGameBase } from './model/RepGameBase';
export declare class GameBaseService_ {
    protected En_GameBaseRep: Repository<En_GameBase>;
    protected rep: RepGameBase;
    constructor(En_GameBaseRep: Repository<En_GameBase>);
    select(queryParams: In_SelGameBase): Promise<Out_SelGameBase>;
    selectById(id: number): Promise<En_GameBase>;
    insert(dto: In_InsGameBase): Promise<any>;
    update(dto: In_InsGameBase): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
