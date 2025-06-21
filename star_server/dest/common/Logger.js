"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.tsrpcLogger = exports.winstonLogger = void 0;
exports.addFileTransport = addFileTransport;
exports.removeConsoleTransport = removeConsoleTransport;
const winston_1 = __importStar(require("winston"));
const node_util_1 = __importDefault(require("node:util"));
function createLogger() {
    let logger = winston_1.default.createLogger({
        level: 'info',
        format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.timestamp({
            format: () => {
                return new Date().toString();
            }
        }), winston_1.format.simple()),
        transports: [],
    });
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
    return logger;
}
function createTsRpcLogger(logger) {
    let l = {
        debug(...args) {
            let [msg, ...other] = args;
            msg += this.format(...other);
            logger.debug(msg);
        },
        log(...args) {
            let [msg, ...other] = args;
            msg += this.format(...other);
            logger.info(msg);
        },
        warn(...args) {
            let [msg, ...other] = args;
            msg += this.format(...other);
            logger.warn(msg);
        },
        error(...args) {
            let [msg, ...other] = args;
            msg += this.format(...other);
            logger.error(msg);
        },
        format(...args) {
            let r = "";
            for (let arg of args) {
                r += node_util_1.default.format(" %o", arg);
            }
            return r;
        },
    };
    return l;
}
exports.winstonLogger = createLogger();
exports.tsrpcLogger = createTsRpcLogger(exports.winstonLogger);
exports.logger = exports.tsrpcLogger;
function addFileTransport(logDir) {
    exports.winstonLogger.add(new winston_1.default.transports.File({ dirname: logDir, filename: "gameserver.log", maxsize: 1024 * 1024 * 1024, maxFiles: 3 }));
}
function removeConsoleTransport() {
    if (exports.winstonLogger.transports.length > 0) {
        let t = exports.winstonLogger.transports[0];
        exports.winstonLogger.remove(t);
    }
}
