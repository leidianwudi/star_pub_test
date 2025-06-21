import { Repository } from "typeorm";
import { En_ReportDayGameUtc } from '../entities/En_ReportDayGameUtc';
import { RepReportDayGameUtc_ } from './RepReportDayGameUtc_';
export declare class RepReportDayGameUtc extends RepReportDayGameUtc_ {
    readonly db: Repository<En_ReportDayGameUtc>;
    constructor(db: Repository<En_ReportDayGameUtc>);
}
