import { Repository } from 'typeorm';
import { En_ReportDayPerson } from './entities/En_ReportDayPerson';
import { ReportDayPersonService_ } from './ReportDayPersonService_';
export declare class ReportDayPersonService extends ReportDayPersonService_ {
    constructor(En_ReportDayPersonRep: Repository<En_ReportDayPerson>);
}
