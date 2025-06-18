import { RepositorySuper } from "@/common/RepositorySuper";
import { Admin } from "../entities/admin.entity";
import { Repository } from "typeorm";
export declare class RepAdminSetting extends RepositorySuper<Admin> {
    readonly db: Repository<Admin>;
    constructor(db: Repository<Admin>);
}
