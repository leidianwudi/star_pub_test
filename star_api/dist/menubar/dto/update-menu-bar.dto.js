"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuBarDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_menu_bar_dto_1 = require("./create-menu-bar.dto");
class UpdateMenuBarDto extends (0, mapped_types_1.PartialType)(create_menu_bar_dto_1.CreateMenuBarDto) {
}
exports.UpdateMenuBarDto = UpdateMenuBarDto;
//# sourceMappingURL=update-menu-bar.dto.js.map