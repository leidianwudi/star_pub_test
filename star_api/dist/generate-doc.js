"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
async function generateSwaggerDoc() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Star API')
        .setDescription('The star API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    (0, fs_1.writeFileSync)('./swagger.json', JSON.stringify(document, null, 2));
    await app.close();
    console.log('✅ Swagger JSON 生成成功');
    process.exit(0);
}
generateSwaggerDoc();
//# sourceMappingURL=generate-doc.js.map