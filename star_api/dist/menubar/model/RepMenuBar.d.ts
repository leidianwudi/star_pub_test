import { RepositorySuper } from "@/common/RepositorySuper";
import { MenuBar } from "../entities/menu.bar.entity";
import { Repository } from "typeorm";
export declare class RepMenuBar extends RepositorySuper<MenuBar> {
    readonly db: Repository<MenuBar>;
    constructor(db: Repository<MenuBar>);
}
