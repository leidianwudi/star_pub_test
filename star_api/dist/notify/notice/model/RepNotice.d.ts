import { Repository } from "typeorm";
import { En_Notice } from '../entities/En_Notice';
import { RepNotice_ } from './RepNotice_';
export declare class RepNotice extends RepNotice_ {
    readonly db: Repository<En_Notice>;
    constructor(db: Repository<En_Notice>);
}
