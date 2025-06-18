import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
export declare class RouterService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    findAll(): Promise<Menu[]>;
}
