import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class TokenUtils {
    static genGameServerToken(uid: string, worldServerUrl: string, roomId: string, gameType: string, time: number, secretKey: string): string;
}
export declare class AuthGuard implements CanActivate {
    private configService;
    private jwtService;
    private reflector;
    constructor(configService: ConfigService, jwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
