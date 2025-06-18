"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpPublicServer = exports.internalRPCHttpService = exports.HttpGameServer = void 0;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const tsrpc_1 = require("tsrpc");
const serviceProto_private_1 = require("../privateProtocols/serviceProto_private");
const serviceProto_public_1 = require("../shared/protocols/serviceProto_public");
class HttpGameServer {
    constructor() {
        this._serviceName = '';
    }
    get asPrivate() {
        return this.server;
    }
    get asPublic() {
        return this.server;
    }
    async init(port, autoImplementApi) {
        if (autoImplementApi == '../apiPrivate') {
            this.server = new tsrpc_1.HttpServer(serviceProto_private_1.serviceProto, {
                port: port,
                keepAliveTimeout: 30000,
                logLevel: "warn",
                // Remove this to use binary mode (remove from the client too)
                json: true
            });
            this._serviceName = '[Private] HTTP Service';
        }
        else {
            this.server = new tsrpc_1.HttpServer(serviceProto_public_1.serviceProto, {
                port: port,
                keepAliveTimeout: 30000,
                logLevel: "warn",
                // Remove this to use binary mode (remove from the client too)
                json: true
            });
            this._serviceName = '[Public] HTTP Service';
        }
        this.logger = this.server.logger;
        //useAdminToken(this.server);
        await this.server.autoImplementApi(path_1.default.resolve(__dirname, autoImplementApi));
    }
    async start() {
        if (!this.server) {
            return;
        }
        await this.server.start();
        this.logger.warn(chalk_1.default.greenBright(`${this._serviceName} started a ${this.server.options.port}`));
        // 定时 log 播报子世界状态
        setInterval(() => {
            this.update();
        }, 15000);
    }
    update() {
    }
}
exports.HttpGameServer = HttpGameServer;
exports.internalRPCHttpService = new HttpGameServer();
exports.httpPublicServer = new HttpGameServer();
