import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
export declare class NoticeService {
    create(createNoticeDto: CreateNoticeDto): string;
    findAll(): {
        email: string;
        image: string;
        notice: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateNoticeDto: UpdateNoticeDto): string;
    remove(id: number): string;
}
