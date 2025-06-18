export declare class CreatAdminDto {
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
}
