import { NoticeService } from './NoticeService';
import { Out_Notice } from './out/Out_Notice';
import { In_InsNotice } from './in/In_InsNotice';
import { In_SelNotice } from './in/In_SelNotice';
import { En_Notice } from './entities/En_Notice';
export declare class NoticeController_ {
    protected readonly service: NoticeService;
    constructor(service: NoticeService);
    select(queryParams: In_SelNotice): Promise<import("./out/Out_SelNotice").Out_SelNotice>;
    selectById(body: {
        id: number;
    }): Promise<En_Notice>;
    insert(dto: In_InsNotice): Promise<Out_Notice>;
    update(body: In_InsNotice): Promise<Out_Notice>;
    delete(body: {
        ids: number[];
    }): Promise<Out_Notice>;
}
