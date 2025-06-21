import { Repository } from 'typeorm';
import { En_RankWeekWin } from './entities/En_RankWeekWin';
import { RankWeekWinService_ } from './RankWeekWinService_';
export declare class RankWeekWinService extends RankWeekWinService_ {
    constructor(En_RankWeekWinRep: Repository<En_RankWeekWin>);
}
