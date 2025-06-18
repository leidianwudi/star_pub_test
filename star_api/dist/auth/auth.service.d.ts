import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Role } from './role.enum';
import { Admin } from '../admin/entities/admin.entity';
import { ConfigService } from '@nestjs/config';
export interface AuthUser {
    userid: string;
    username?: string;
    roles: Role[];
    roleId?: string;
}
export declare class AuthService {
    private adminRepository;
    private jwtService;
    private configService;
    constructor(adminRepository: Repository<Admin>, jwtService: JwtService, configService: ConfigService);
    getIpLocation(ip: string): Promise<string>;
    signIn(username: string, pass: string, ip: string): Promise<any>;
}
