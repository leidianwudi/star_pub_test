import { Repository } from 'typeorm';
import { En_Notice } from './entities/En_Notice';
import { NoticeService_ } from './NoticeService_';
export declare class NoticeService extends NoticeService_ {
    constructor(En_UserRep: Repository<En_Notice>);
}
