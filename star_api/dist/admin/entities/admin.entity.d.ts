import { Role } from '@/role/entities/role.entity';
export declare class Admin {
    id: string;
    token: string;
    account: string;
    password: string;
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
    role: Role;
}
