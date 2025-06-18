import { Repository } from 'typeorm';
import { SlotsSettings } from '../entities/slots_settings.entity';
export declare class DbSlotsSettings {
    readonly db: Repository<SlotsSettings>;
    constructor(db: Repository<SlotsSettings>);
    findAndCountSp(pageNo: number, pageSize: number): Promise<{
        list: SlotsSettings[];
        total: number;
    }>;
}
