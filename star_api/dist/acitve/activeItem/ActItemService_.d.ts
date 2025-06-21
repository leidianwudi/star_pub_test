import { Repository } from 'typeorm';
import { En_ActItem } from './entities/En_ActItem';
import { In_InsActItem } from './in/In_InsActItem';
import { In_SelActItem } from './in/In_SelActItem';
import { Out_SelActItem } from './out/Out_SelActItem';
import { RepActItem } from './model/RepActItem';
export declare class ActItemService_ {
    protected En_ActItemRep: Repository<En_ActItem>;
    protected rep: RepActItem;
    constructor(En_ActItemRep: Repository<En_ActItem>);
    select(queryParams: In_SelActItem): Promise<Out_SelActItem>;
    selectById(id: number): Promise<En_ActItem>;
    insert(dto: In_InsActItem): Promise<any>;
    update(dto: In_InsActItem): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
