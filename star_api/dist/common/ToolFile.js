"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolFile = void 0;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const fs = require("fs");
class ToolFile {
    static getTsType(dataType) {
        throw new Error('Method not implemented.');
    }
    static lineTab(tab, content, filePath) {
        let tabStr = '';
        for (let i = 0; i < tab; i++) {
            tabStr += '\t';
        }
        this.line(tabStr + content, filePath);
    }
    static line(content, filePath) {
        this.write(content + '\r\n', filePath);
    }
    static write(content, filePath) {
        let path = ToolFile.getFullPath(filePath);
        this.dirCreator(path);
        (0, fs_1.appendFileSync)(path, content, 'utf-8');
    }
    static clearFile(filePath) {
        let path = ToolFile.getFullPath(filePath);
        (0, promises_1.writeFile)(path, '', 'utf-8');
    }
    static dirCreator(dirPath) {
        dirPath = ToolFile.getDirPath(dirPath);
        (0, fs_1.mkdirSync)(dirPath, { recursive: true });
    }
    static getRootPath() {
        return process.cwd();
    }
    static getFullPath(path) {
        return this.getRootPath() + '\\' + path;
    }
    static getDirPath(filePath) {
        let index = filePath.lastIndexOf('\\');
        return filePath.substring(0, index);
    }
    static fileExists(filePath) {
        return fs.existsSync(filePath);
    }
}
exports.ToolFile = ToolFile;
//# sourceMappingURL=ToolFile.js.map