import { RouterService } from './router.service';
export declare class RouterController {
    private readonly routerService;
    constructor(routerService: RouterService);
    findAll(): Promise<{
        list: any[];
    }>;
}
