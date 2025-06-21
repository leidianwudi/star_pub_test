import { Repository } from 'typeorm';
import { En_RankDayWin } from './entities/En_RankDayWin';
import { RankDayWinService_ } from './RankDayWinService_';
export declare class RankDayWinService extends RankDayWinService_ {
    constructor(En_RankDayWinRep: Repository<En_RankDayWin>);
}
