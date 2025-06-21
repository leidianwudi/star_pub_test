import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '@/users/UserService';
export declare class TokenUtils {
    static genGameServerToken(uid: string, worldServerUrl: string, roomId: string, gameType: string, time: number, secretKey: string): string;
}
export declare class AuthGuard implements CanActivate {
    private configService;
    private jwtService;
    private reflector;
    private userService;
    constructor(configService: ConfigService, jwtService: JwtService, reflector: Reflector, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
