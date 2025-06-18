import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { Role } from 'src/role/entities/role.entity';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminService {
    private adminRepository;
    private roleRepository;
    private dbSetting;
    constructor(adminRepository: Repository<Admin>, roleRepository: Repository<Role>);
    create(createUserDto: UpdateAdminDto): Promise<string>;
    getList(query: {
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
    findOne(id: string): Promise<Admin>;
    getUser(username: string): Promise<Admin>;
    update(updateUserDto: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    remove(ids: string[]): Promise<import("typeorm").DeleteResult>;
}
