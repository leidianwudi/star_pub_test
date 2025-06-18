import { Repository } from 'typeorm';
import { En_GameOddsExt } from './entities/En_GameOddsExt';
import { In_InsGameOddsExt } from './in/In_InsGameOddsExt';
import { In_SelGameOddsExt } from './in/In_SelGameOddsExt';
import { Out_SelGameOddsExt } from './out/Out_SelGameOddsExt';
import { RepGameOddsExt } from './model/RepGameOddsExt';
export declare class GameOddsExtService_ {
    protected En_GameOddsExtRep: Repository<En_GameOddsExt>;
    protected rep: RepGameOddsExt;
    constructor(En_GameOddsExtRep: Repository<En_GameOddsExt>);
    select(queryParams: In_SelGameOddsExt): Promise<Out_SelGameOddsExt>;
    selectById(id: number): Promise<En_GameOddsExt>;
    insert(dto: In_InsGameOddsExt): Promise<any>;
    update(dto: In_InsGameOddsExt): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
