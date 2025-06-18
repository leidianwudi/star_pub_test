import { AdminService } from './admin.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly usersService;
    constructor(usersService: AdminService);
    create(createUserDto: UpdateAdminDto): Promise<string>;
    getList(queryParams: {
        page: number;
        pageNum: number;
    }): Promise<{
        list: {
            id: string;
            account: string;
            password: string;
            token: string;
            nick: string;
            failed_attempts: number;
            last_attempt_time: Date;
            locked: number;
            lock_until: Date;
            enable: number;
            ip: string;
            ip_city: string;
            role_id: string;
            desc: string;
            role_name: string;
        }[];
        page: number;
        pageNum: number;
        total: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<{
        list: import("./entities/admin.entity").Admin[];
        total: number;
    }>;
    update(updateUserDto: UpdateAdminDto): Promise<string> | Promise<import("typeorm").UpdateResult>;
    remove(ids: string[]): Promise<import("typeorm").DeleteResult>;
}
