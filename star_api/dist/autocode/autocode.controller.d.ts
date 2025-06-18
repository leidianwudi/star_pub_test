import { AutocodeService } from './autocode.service';
export declare class AutocodeController {
    private readonly autocodeService;
    constructor(autocodeService: AutocodeService);
    generate(): Promise<import("./factory/DbTable").DbTable[]>;
}
