import { Repository } from "typeorm";
import { En_ReportGameLogUtc } from '../entities/En_ReportGameLogUtc';
import { RepReportGameLogUtc_ } from './RepReportGameLogUtc_';
export declare class RepReportGameLogUtc extends RepReportGameLogUtc_ {
    readonly db: Repository<En_ReportGameLogUtc>;
    constructor(db: Repository<En_ReportGameLogUtc>);
}
