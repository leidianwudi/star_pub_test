import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ReportGameLogUtc } from '../entities/En_ReportGameLogUtc';
import { In_SelReportGameLogUtc } from '../in/In_SelReportGameLogUtc';
export declare class RepReportGameLogUtc_ extends RepositorySuper<En_ReportGameLogUtc> {
    readonly db: Repository<En_ReportGameLogUtc>;
    constructor(db: Repository<En_ReportGameLogUtc>);
    findAndCount(queryParams: In_SelReportGameLogUtc): Promise<{
        list: En_ReportGameLogUtc[];
        total: number;
    }>;
}
