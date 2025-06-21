import { Repository } from 'typeorm';
import { En_RankWeekCoin } from './entities/En_RankWeekCoin';
import { RankWeekCoinService_ } from './RankWeekCoinService_';
export declare class RankWeekCoinService extends RankWeekCoinService_ {
    constructor(En_RankWeekCoinRep: Repository<En_RankWeekCoin>);
}
