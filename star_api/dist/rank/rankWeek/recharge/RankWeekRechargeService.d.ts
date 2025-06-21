import { Repository } from 'typeorm';
import { En_RankWeekRecharge } from './entities/En_RankWeekRecharge';
import { RankWeekRechargeService_ } from './RankWeekRechargeService_';
export declare class RankWeekRechargeService extends RankWeekRechargeService_ {
    constructor(En_RankWeekRechargeRep: Repository<En_RankWeekRecharge>);
}
