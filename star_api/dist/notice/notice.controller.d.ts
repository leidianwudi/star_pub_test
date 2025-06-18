import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
export declare class NoticeController {
    private readonly noticeService;
    constructor(noticeService: NoticeService);
    create(createNoticeDto: CreateNoticeDto): string;
    findAll(): {
        email: string;
        image: string;
        notice: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateNoticeDto: UpdateNoticeDto): string;
    remove(id: string): string;
}
