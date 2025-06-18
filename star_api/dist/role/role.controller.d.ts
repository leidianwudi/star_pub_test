import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { DeleteRoleDto } from './dto/delete-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<string>;
    getList(queryParams: {
        page: number;
        pageNum: number;
    }): Promise<{
        list: import("./entities/role.entity").Role[];
        total: number;
    }>;
    findAll(): Promise<{
        list: import("./entities/role.entity").Role[];
        total: number;
    }>;
    findOne(id: string): Promise<{
        list: import("./entities/role.entity").Role[];
        total: number;
    }>;
    update(updateRoleDto: UpdateRoleDto): Promise<{
        message: string;
    }>;
    remove(deleteRoleDto: DeleteRoleDto): Promise<{
        message: string;
    }>;
    menuList(id: string): Promise<{
        list: import("../menubar/entities/menu.bar.entity").MenuBar[];
        total: number;
    }>;
}
