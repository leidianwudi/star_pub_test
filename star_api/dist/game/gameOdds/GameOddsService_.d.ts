import { Repository } from 'typeorm';
import { En_GameOdds } from './entities/En_GameOdds';
import { In_InsGameOdds } from './in/In_InsGameOdds';
import { In_SelGameOdds } from './in/In_SelGameOdds';
import { Out_SelGameOdds } from './out/Out_SelGameOdds';
import { RepGameOdds } from './model/RepGameOdds';
export declare class GameOddsService_ {
    protected En_GameOddsRep: Repository<En_GameOdds>;
    protected rep: RepGameOdds;
    constructor(En_GameOddsRep: Repository<En_GameOdds>);
    select(queryParams: In_SelGameOdds): Promise<Out_SelGameOdds>;
    selectById(id: number): Promise<En_GameOdds>;
    insert(dto: In_InsGameOdds): Promise<any>;
    update(dto: In_InsGameOdds): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
