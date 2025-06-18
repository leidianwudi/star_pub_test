import { Repository } from 'typeorm';
import { SlotsSettings } from './entities/slots_settings.entity';
import { UpdateSlotsSettingDto } from './dto/update-slots_setting.dto';
import { Redis } from "ioredis";
import { CreateSlotsSettingDto } from './dto/create-slots_setting.dto';
export declare class SlotsService {
    private slotsSettingRep;
    private redisClient;
    private dbSlotsSettings;
    constructor(slotsSettingRep: Repository<SlotsSettings>, redisClient: Redis);
    getList({ pageNo, pageSize }: {
        pageNo: any;
        pageSize: any;
    }): Promise<{
        list: SlotsSettings[];
        total: number;
    }>;
    create(createSlotDto: CreateSlotsSettingDto): Promise<string>;
    findAll(): Promise<Repository<SlotsSettings>>;
    findOne(id: string): Promise<SlotsSettings[]>;
    getSlotsSetting(id: string): Promise<SlotsSettings>;
    update(updateSlotDto: UpdateSlotsSettingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
