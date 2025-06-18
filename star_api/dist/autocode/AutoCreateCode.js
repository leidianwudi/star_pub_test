"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudoCreateCodeFile = void 0;
const fs = require("fs");
const path = require("path");
class AudoCreateCodeFile {
    static createTsFile(className, reference, filePath) {
        const fileContent = `
    ${reference}
    
    export class ${className} {
        constructor() {
        console.log('${className} 实例已创建');
        }
    
        public sayHello() {
        console.log(\`Hello from \${this.constructor.name}\`);
        }
    }
        `;
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, fileContent.trim(), 'utf-8');
        console.log(`文件 ${filePath} 已成功创建`);
    }
    static test() {
        const className = 'MyDynamicClass';
        const reference = `import { SomeDependency } from './someDependency';`;
        const filePath = './src/autocode/dynamicClass.ts';
        AudoCreateCodeFile.createTsFile(className, reference, filePath);
    }
}
exports.AudoCreateCodeFile = AudoCreateCodeFile;
//# sourceMappingURL=AutoCreateCode.js.map