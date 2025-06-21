import { ActItemService } from './ActItemService';
import { Out_ActItem } from './out/Out_ActItem';
import { In_InsActItem } from './in/In_InsActItem';
import { In_SelActItem } from './in/In_SelActItem';
import { En_ActItem } from './entities/En_ActItem';
export declare class ActItemController_ {
    protected readonly service: ActItemService;
    constructor(service: ActItemService);
    select(queryParams: In_SelActItem): Promise<import("./out/Out_SelActItem").Out_SelActItem>;
    selectById(body: {
        id: number;
    }): Promise<En_ActItem>;
    insert(dto: In_InsActItem): Promise<Out_ActItem>;
    update(body: In_InsActItem): Promise<Out_ActItem>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ActItem>;
}
