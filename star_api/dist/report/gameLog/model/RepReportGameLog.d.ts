import { Repository } from "typeorm";
import { En_ReportGameLog } from '../entities/En_ReportGameLog';
import { RepReportGameLog_ } from './RepReportGameLog_';
export declare class RepReportGameLog extends RepReportGameLog_ {
    readonly db: Repository<En_ReportGameLog>;
    constructor(db: Repository<En_ReportGameLog>);
}
