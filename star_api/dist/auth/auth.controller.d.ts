import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>, req: any): Promise<any>;
    getUserInfo(): {
        username: string;
        roles: string[];
        permissions: any[];
        avatar: string;
    };
    logout(): {};
}
