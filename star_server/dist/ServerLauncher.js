"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ServerApp_1 = require("./ServerApp");
function getServerName() {
    const args = require('minimist')(process.argv.slice(2));
    return args['server_name'];
}
/**
 * When debugging in vscode, you can use process.env to get the parameters passed by command line
 * When starting with command, you can use node xxx.js --server_name=xxx to pass the server_name parameter
 *
 *VSCODE 中调试启动时，使用 process.env 获取参数
 *命令启动时 使用 node xxx.js --server_name=xxx 传递 server_name 参数
*/
let serverName = process.env['server_name'] || getServerName();
if (!serverName) {
    throw Error('server_name is not defined');
}
/**
 * @en get server config from config file
 * @zh 从配置文件加载启动参数
*/
let configFilePath = path_1.default.join(__dirname, './ecosystem.config.js');
const fileStat = fs_1.default.existsSync(configFilePath);
if (!fileStat) {
    configFilePath = path_1.default.join(__dirname, '../ecosystem.config.js');
}
const config = require(configFilePath);
const apps = config.apps;
for (let i = 0; i < apps.length; i++) {
    let app = apps[i];
    if (app.name == serverName) {
        for (let key in app.env) {
            process.env[key] = app.env[key];
        }
        ServerApp_1.ServerApp.main();
        break;
    }
}
