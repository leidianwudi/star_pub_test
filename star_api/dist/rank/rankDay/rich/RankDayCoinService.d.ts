import { Repository } from 'typeorm';
import { En_RankDayCoin } from './entities/En_RankDayCoin';
import { RankDayCoinService_ } from './RankDayCoinService_';
export declare class RankDayCoinService extends RankDayCoinService_ {
    constructor(En_RankDayCoinRep: Repository<En_RankDayCoin>);
}
