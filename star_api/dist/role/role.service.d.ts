import { Repository, DataSource } from 'typeorm';
import { Role } from './entities/role.entity';
import { RoleMenu } from './entities/role_menu.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { MenuBarService } from 'src/menubar/menu.bar.service';
import { MenuBar } from 'src/menubar/entities/menu.bar.entity';
export declare class RoleService {
    private roleRepository;
    private roleMenuRepository;
    private dataSource;
    private menuBarRepository;
    private menuService;
    private dbRole;
    constructor(roleRepository: Repository<Role>, roleMenuRepository: Repository<RoleMenu>, dataSource: DataSource, menuBarRepository: Repository<MenuBar>, menuService: MenuBarService);
    create(createRoleDto: CreateRoleDto): Promise<string>;
    getList(queryParams: any): Promise<{
        list: Role[];
        total: number;
    }>;
    findAll(): Promise<Role[]>;
    findOne(id: string): Promise<Role[]>;
    update(updateRoleDto: UpdateRoleDto): Promise<void>;
    remove(ids: string[]): Promise<void>;
    getMenus(roleId: number): Promise<MenuBar[]>;
}
