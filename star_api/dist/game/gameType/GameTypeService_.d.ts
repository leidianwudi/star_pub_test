import { Repository } from 'typeorm';
import { En_GameType } from './entities/En_GameType';
import { In_InsGameType } from './in/In_InsGameType';
import { In_SelGameType } from './in/In_SelGameType';
import { Out_SelGameType } from './out/Out_SelGameType';
import { RepGameType } from './model/RepGameType';
export declare class GameTypeService_ {
    protected En_GameTypeRep: Repository<En_GameType>;
    protected rep: RepGameType;
    constructor(En_GameTypeRep: Repository<En_GameType>);
    select(queryParams: In_SelGameType): Promise<Out_SelGameType>;
    selectById(id: number): Promise<En_GameType>;
    insert(dto: In_InsGameType): Promise<any>;
    update(dto: In_InsGameType): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
