"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerGlobals = void 0;
class ServerGlobals {
}
exports.ServerGlobals = ServerGlobals;
/**
 * @en master service address
 * @zh master 服务地址
*/
ServerGlobals.masterUrl = '';
/**
 * @en math service address
 * @zh 匹配服务地址
*/
ServerGlobals.matchUrl = '';
/**
 * @en the database type, default is kvdb
 * @zh 数据库类型，默认使用 kvdb
*/
ServerGlobals.dbType = 'kvdb';
/**
 * @en key usd for token signature verification
 * @zh TOKEN 签名验证密钥
*/
ServerGlobals.secretKey = '';
ServerGlobals.jwtSecretKey = '';
ServerGlobals.apiServerUrl = '';
/**
 * 运行在开发模式
 */
ServerGlobals.dev = false;
//日志目录
ServerGlobals.logDir = '';
//游戏类型数组
ServerGlobals.gameTypes = [];
