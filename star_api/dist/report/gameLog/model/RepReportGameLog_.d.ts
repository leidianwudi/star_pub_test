import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ReportGameLog } from '../entities/En_ReportGameLog';
import { In_SelReportGameLog } from '../in/In_SelReportGameLog';
export declare class RepReportGameLog_ extends RepositorySuper<En_ReportGameLog> {
    readonly db: Repository<En_ReportGameLog>;
    constructor(db: Repository<En_ReportGameLog>);
    findAndCount(queryParams: In_SelReportGameLog): Promise<{
        list: En_ReportGameLog[];
        total: number;
    }>;
}
