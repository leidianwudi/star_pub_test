import { Repository } from 'typeorm';
import { En_ReportDayGame } from './entities/En_ReportDayGame';
import { ReportDayGameService_ } from './ReportDayGameService_';
export declare class ReportDayGameService extends ReportDayGameService_ {
    constructor(En_ReportDayGameRep: Repository<En_ReportDayGame>);
    getAll(queryParams: any): Promise<En_ReportDayGame[]>;
}
