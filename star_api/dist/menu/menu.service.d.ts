import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
export declare class MenuService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    create(createMenuDto: CreateMenuDto): Promise<string>;
    findAll(): {
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
    };
    findOne(id: number): string;
    findMenu(path: string): Promise<Menu>;
    update(updateMenuDto: UpdateMenuDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getMenus(paths: string[]): Promise<Menu[]>;
}
