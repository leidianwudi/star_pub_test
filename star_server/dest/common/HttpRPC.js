"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRPC = void 0;
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const tsrpc_1 = require("tsrpc");
const serviceProto_private_1 = require("../privateProtocols/serviceProto_private");
class HttpRPC {
    static getRPCClient(serverUrl, cls) {
        let key = serverUrl + cls.name;
        if (HttpRPC._rpcs[key] == null) {
            HttpRPC._rpcs[key] = new cls(serverUrl);
        }
        return HttpRPC._rpcs[key];
    }
    constructor(serverUrl) {
        this.serverUrl = serverUrl;
        this._httpClient = new tsrpc_1.HttpClient(serviceProto_private_1.serviceProto, {
            server: this.serverUrl,
            agent: new (this.serverUrl.startsWith('https') ? https_1.default : http_1.default).Agent({ keepAlive: true }),
            logLevel: 'warn',
            json: true,
        });
    }
    get httpClient() {
        return this._httpClient;
    }
}
exports.HttpRPC = HttpRPC;
HttpRPC._rpcs = {};
