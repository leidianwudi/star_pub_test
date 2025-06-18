import { CreateMenuBarDto } from './dto/create-menu-bar.dto';
import { UpdateMenuBarDto } from './dto/update-menu-bar.dto';
import { DeleteMenuBarDto } from './dto/delete-menu-bar.dto';
import { MenuBarService } from './menu.bar.service';
export declare class MenuBarController {
    private readonly menuService;
    constructor(menuService: MenuBarService);
    create(createMenuDto: CreateMenuBarDto): Promise<string>;
    getTree(request: Request): Promise<{
        list: any[];
    }>;
    getList(params: {
        page: number;
        pageNum: number;
    }): Promise<{
        list: import("./entities/menu.bar.entity").MenuBar[];
        total: number;
    }>;
    findAll(): Promise<{
        list: {
            id: string;
            pid: string;
            title: string;
            name: string;
            component: string;
            path: string;
            redirect: string;
            icon: string;
            status: number;
            display: number;
            sort: number;
        }[];
        total: number;
    }>;
    findOne(id: string): Promise<{
        list: import("./entities/menu.bar.entity").MenuBar[];
        total: number;
    }>;
    update(updateMenuDto: UpdateMenuBarDto): Promise<{
        message: string;
    }>;
    remove(deleteMenuDto: DeleteMenuBarDto): Promise<{
        message: string;
    }>;
}
