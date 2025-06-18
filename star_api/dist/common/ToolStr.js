"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolStr = void 0;
exports.FormatDate = FormatDate;
const class_transformer_1 = require("@nestjs/class-transformer");
const common_1 = require("@nestjs/common");
class ToolStr {
    static line2UpLow(str) {
        let arr = str.split('_');
        let res = "";
        for (let i = 0; i < arr.length; i++) {
            res += arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
        }
        return res;
    }
    static snakeToPascal(str) {
        return str
            .split('_')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('_');
    }
    static upperFirst(str) {
        if (!str)
            return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
exports.ToolStr = ToolStr;
function FormatDate() {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Transform)(({ value }) => {
        if (value instanceof Date) {
            console.log('-----------------------------');
            return value.toISOString().slice(0, 19).replace('T', ' ');
        }
        return value;
    }));
}
//# sourceMappingURL=ToolStr.js.map