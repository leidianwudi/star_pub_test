"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketPublicServer = exports.WebsocketGameServer = void 0;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const tsrpc_1 = require("tsrpc");
const serviceProto_public_1 = require("../shared/protocols/serviceProto_public");
const ServerGloabls_1 = require("./ServerGloabls");
const Constants_1 = require("../shared/configs/Constants");
const Logger_1 = require("./Logger");
class WebsocketGameServer {
    constructor() {
        /**
         * @en if this flag is true, the system won't create new room and match users for this RoomServer (still could join in by roomId).
         * @zh 如果此标记为 true, 则此 RoomServer 会再创建新的房间和匹配新的玩家（依然可以通过房间号进入）。
         */
        this.disabled = false;
        this.userNum = 0;
        this.userId2Conn = new Map();
    }
    addAnonymousConn(conn) {
        conn.lastTickTime = Date.now();
        this.userId2Conn.set(`_anony_${conn.id}`, conn);
    }
    removeAnonyousCoon(conn) {
        this.userId2Conn.delete(`_anony_${conn.id}`);
    }
    authed(conn) {
        this.userId2Conn.set(conn.uid, conn);
        this.removeAnonyousCoon(conn);
    }
    async init(port) {
        this.server = new tsrpc_1.WsServer(serviceProto_public_1.serviceProto, {
            port: port,
            // Remove this to use binary mode (remove from the client too)
            json: true,
            logMsg: false,
            logger: Logger_1.tsrpcLogger,
        });
        this.logger = this.server.logger;
        this.server.flows.postConnectFlow.push(call => {
            this.addAnonymousConn(call);
            this.userNum++;
            return call;
        });
        const servicesMap = ServerGloabls_1.ServerGlobals.options.servicesMap;
        this.server.flows.preApiCallFlow.push(call => {
            var _a, _b;
            let conn = call.conn;
            //@en login related API only can be called by HTTP
            //@zh 登录相关只能走 HTTP 服务
            let err = '';
            if (((_a = call.service.name) === null || _a === void 0 ? void 0 : _a.indexOf('login/')) == 0) {
                err = 'INVALID_CALL';
            }
            else if (((_b = call.service.name) === null || _b === void 0 ? void 0 : _b.indexOf('lobby/')) == 0) {
                //@en if lobby use HTTP service, or this process has no lobby service, kick the user
                //@zh 如果大厅使用HTTP服务，或者本进程没有大厅服务，则踢掉用户
                if (Constants_1.LOBBY_USE_HTTP || !servicesMap['lobby']) {
                    err = 'INVALID_CALL';
                }
            }
            else {
                //@en check whether user permission is valid
                //@zh 检查用户权限是否合法
                let validErr = this.checkValid(call.service.name, call.conn);
                if (validErr) {
                    err = validErr;
                }
            }
            if (err) {
                call.error(err);
                this.kickUser(conn, err);
                return;
            }
            return call;
        });
        this.server.flows.preMsgCallFlow.push(call => {
            //@en check whether user permission is valid
            //@zh 检查用户权限是否合法
            let err = this.checkValid(call.service.name, call.conn);
            if (err) {
                this.kickUser(call.conn, err);
                return;
            }
            return call;
        });
        this.server.flows.postDisconnectFlow.push(v => {
            let conn = v.conn;
            this.userNum--;
            this.removeConnection(conn);
            return v;
        });
        this.server.listenMsg("Ping", call => {
            call.conn.lastTickTime = Date.now();
            call.conn.sendMsg("Pong", { timestamp: call.msg.timestamp, serverTimestamp: Date.now() });
        });
        //@en check connection alive every 3 seconds
        //@zh 每3秒检测一次链接活跃度
        setInterval(() => {
            this.checkConnectionState();
        }, 3000);
        await this.server.autoImplementApi(path_1.default.resolve(__dirname, '../apiPublic'));
    }
    checkValid(callName, conn) {
        if (callName != 'Ping' && callName != 'game/AuthClient') {
            if (!conn.uid) {
                return 'not_login';
            }
        }
    }
    async start() {
        if (!this.server) {
            return;
        }
        await this.server.start();
        this.logger.warn(chalk_1.default.green(`[Public] Websocket Service started at ${this.server.options.port}`));
    }
    async checkConnectionState() {
        this.userId2Conn.forEach(async (conn) => {
            let tickTimeout = ServerGloabls_1.ServerGlobals.connectionTickTimeout || 30000;
            if (Date.now() - conn.lastTickTime > tickTimeout) {
                await this.kickUser(conn, 'tick_timeout');
            }
        });
    }
    async kickUserById(uid, reason) {
        let conn = this.userId2Conn.get(uid);
        await this.kickUser(conn, reason);
    }
    async kickUser(conn, reason) {
        if (conn) {
            this.logger.log("kick user, reason:", reason);
            conn.close(reason);
            this.removeConnection(conn);
        }
    }
    removeConnection(conn) {
        if (conn.uid) {
            let c = this.userId2Conn.get(conn.uid);
            //避免删除用户新的链接
            if (c === conn) {
                this.userId2Conn.delete(conn.uid);
            }
        }
        // 退出已加入的子世界
        if (conn.curRoom) {
            conn.curRoom.onDisconnected(conn);
        }
        conn.uid = undefined;
        this.removeAnonyousCoon(conn);
    }
}
exports.WebsocketGameServer = WebsocketGameServer;
exports.websocketPublicServer = new WebsocketGameServer();
