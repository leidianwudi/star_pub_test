import { SlotsService } from './slots.service';
import { UpdateSlotsSettingDto } from './dto/update-slots\_setting.dto';
import { CreateSlotsSettingDto } from './dto/create-slots_setting.dto';
export declare class SlotsController {
    private readonly slotsService;
    constructor(slotsService: SlotsService);
    create(createSlotDto: CreateSlotsSettingDto): Promise<string>;
    findAll(query: {
        pageNo: number;
        pageSize: number;
    }): Promise<{
        list: {
            value1: string;
            id: string;
            game_id: string;
            key: string;
            name: string;
            value2: string;
            desc: string;
            creator_at: Date;
            update_at: Date;
        }[];
        total: number;
    }>;
    update(updateSlotDto: UpdateSlotsSettingDto): Promise<void | import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findOne(id: string): Promise<{
        list: {
            value1: string;
            id: string;
            game_id: string;
            key: string;
            name: string;
            value2: string;
            desc: string;
            creator_at: Date;
            update_at: Date;
        }[];
        total: number;
    }>;
}
