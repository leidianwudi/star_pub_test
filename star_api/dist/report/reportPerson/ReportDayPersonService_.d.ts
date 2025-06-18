import { Repository } from 'typeorm';
import { En_ReportDayPerson } from './entities/En_ReportDayPerson';
import { In_InsReportDayPerson } from './in/In_InsReportDayPerson';
import { In_SelReportDayPerson } from './in/In_SelReportDayPerson';
import { Out_SelReportDayPerson } from './out/Out_SelReportDayPerson';
import { RepReportDayPerson } from './model/RepReportDayPerson';
export declare class ReportDayPersonService_ {
    protected En_ReportDayPersonRep: Repository<En_ReportDayPerson>;
    protected rep: RepReportDayPerson;
    constructor(En_ReportDayPersonRep: Repository<En_ReportDayPerson>);
    select(queryParams: In_SelReportDayPerson): Promise<Out_SelReportDayPerson>;
    selectById(id: number): Promise<En_ReportDayPerson>;
    insert(dto: In_InsReportDayPerson): Promise<any>;
    update(dto: In_InsReportDayPerson): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
