import { Repository } from 'typeorm';
import { En_ReportDayPerson } from './entities/En_ReportDayPerson';
import { In_SelReportDayPersonSp } from './in/In_SelReportDayPersonSp';
import { Out_SelReportDayPerson } from './out/Out_SelReportDayPerson';
import { ReportDayPersonService_ } from './ReportDayPersonService_';
export declare class ReportDayPersonService extends ReportDayPersonService_ {
    constructor(En_ReportDayPersonRep: Repository<En_ReportDayPerson>);
    select(queryParams: In_SelReportDayPersonSp): Promise<Out_SelReportDayPerson>;
}
