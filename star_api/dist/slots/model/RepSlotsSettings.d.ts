import { Repository } from 'typeorm';
import { SlotsSettings } from '../entities/slots_settings.entity';
export declare class DbSlotsSettings extends Repository<SlotsSettings> {
    findAndCountSp11(pageNo: number, pageSize: number): Promise<{
        list: SlotsSettings[];
        total: number;
    }>;
}
