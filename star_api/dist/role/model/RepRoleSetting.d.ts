import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { Role } from "../entities/role.entity";
export declare class RepRoleSetting extends RepositorySuper<Role> {
    readonly db: Repository<Role>;
    constructor(db: Repository<Role>);
}
