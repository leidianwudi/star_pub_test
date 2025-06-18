import { NoticeService } from './NoticeService';
import { Out_CreateMenuResp } from './out/Out_CreateMenuResp';
import { In_InsNotice } from './in/In_InsNotice';
import { En_Notice } from './entities/En_Notice';
export declare class NoticeController {
    private readonly service;
    constructor(service: NoticeService);
    selectById(body: {
        id: number;
    }): Promise<En_Notice>;
    insert(dto: In_InsNotice): Promise<Out_CreateMenuResp>;
    update(body: {
        id: number;
        dto: In_InsNotice;
    }): Promise<Out_CreateMenuResp>;
    delete(body: {
        id: number[];
    }): Promise<Out_CreateMenuResp>;
}
