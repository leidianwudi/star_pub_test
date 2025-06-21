import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ReportDayGameUtc } from '../entities/En_ReportDayGameUtc';
import { In_SelReportDayGameUtc } from '../in/In_SelReportDayGameUtc';
export declare class RepReportDayGameUtc_ extends RepositorySuper<En_ReportDayGameUtc> {
    readonly db: Repository<En_ReportDayGameUtc>;
    constructor(db: Repository<En_ReportDayGameUtc>);
    findAndCount(queryParams: In_SelReportDayGameUtc): Promise<{
        list: En_ReportDayGameUtc[];
        total: number;
    }>;
}
