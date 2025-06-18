import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { DeleteMenuDto } from './dto/delete-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(createMenuDto: CreateMenuDto): Promise<string>;
    findAll(): Promise<{
        total: number;
        list: {
            id: string;
            label: string;
            children: {
                id: string;
                role: string;
                label: string;
            }[];
        }[];
    }>;
    findOne(id: string): string;
    update(updateMenuDto: UpdateMenuDto): Promise<{
        message: string;
    }>;
    remove(deleteMenuDto: DeleteMenuDto): Promise<{
        message: string;
    }>;
}
