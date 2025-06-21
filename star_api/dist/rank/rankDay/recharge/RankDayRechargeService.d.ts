import { Repository } from 'typeorm';
import { En_RankDayRecharge } from './entities/En_RankDayRecharge';
import { RankDayRechargeService_ } from './RankDayRechargeService_';
export declare class RankDayRechargeService extends RankDayRechargeService_ {
    constructor(En_RankDayRechargeRep: Repository<En_RankDayRecharge>);
}
