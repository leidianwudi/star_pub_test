import { Repository } from 'typeorm';
import { En_GameBar } from './entities/En_GameBar';
import { In_InsGameBar } from './in/In_InsGameBar';
import { In_SelGameBar } from './in/In_SelGameBar';
import { Out_SelGameBar } from './out/Out_SelGameBar';
import { RepGameBar } from './model/RepGameBar';
export declare class GameBarService_ {
    protected En_GameBarRep: Repository<En_GameBar>;
    protected rep: RepGameBar;
    constructor(En_GameBarRep: Repository<En_GameBar>);
    select(queryParams: In_SelGameBar): Promise<Out_SelGameBar>;
    selectById(id: number): Promise<En_GameBar>;
    insert(dto: In_InsGameBar): Promise<any>;
    update(dto: In_InsGameBar): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
