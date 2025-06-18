import { Repository } from "typeorm";
import { En_ReportDayPerson } from '../entities/En_ReportDayPerson';
import { RepReportDayPerson_ } from './RepReportDayPerson_';
export declare class RepReportDayPerson extends RepReportDayPerson_ {
    readonly db: Repository<En_ReportDayPerson>;
    constructor(db: Repository<En_ReportDayPerson>);
}
