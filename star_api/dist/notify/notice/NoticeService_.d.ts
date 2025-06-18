import { Repository } from 'typeorm';
import { En_Notice } from './entities/En_Notice';
import { In_InsNotice } from './in/In_InsNotice';
import { In_SelNotice } from './in/In_SelNotice';
import { Out_SelNotice } from './out/Out_SelNotice';
import { RepNotice } from './model/RepNotice';
export declare class NoticeService_ {
    protected En_NoticeRep: Repository<En_Notice>;
    protected rep: RepNotice;
    constructor(En_NoticeRep: Repository<En_Notice>);
    select(queryParams: In_SelNotice): Promise<Out_SelNotice>;
    selectById(id: number): Promise<En_Notice>;
    insert(dto: In_InsNotice): Promise<any>;
    update(dto: In_InsNotice): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
