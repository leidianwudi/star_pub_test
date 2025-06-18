import { Repository } from 'typeorm';
import { MenuBar } from './entities/menu.bar.entity';
import { CreateMenuBarDto } from './dto/create-menu-bar.dto';
import { UpdateMenuBarDto } from './dto/update-menu-bar.dto';
export declare class MenuBarService {
    private menuRepository;
    private dbMenu;
    constructor(menuRepository: Repository<MenuBar>);
    create(createMenuDto: CreateMenuBarDto): Promise<string>;
    getList(params: any): Promise<{
        list: MenuBar[];
        total: number;
    }>;
    findAll(): Promise<MenuBar[]>;
    findOne(id: string): Promise<MenuBar>;
    findMenu(id: string): Promise<MenuBar>;
    update(updateMenuDto: UpdateMenuBarDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getMenus(paths: string[]): Promise<MenuBar[]>;
    getTree(roleId: number): Promise<any[]>;
    private getMenuItemsFromDatabase;
    private filterByStatusAndDisplay;
    private createMenuMap;
    private filterMenuItems;
    private addMetaField;
}
