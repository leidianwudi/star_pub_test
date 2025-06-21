"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const node_util_1 = require("node:util");
const DBMgr_1 = require("../db/DBMgr");
const ServerGloabls_1 = require("../common/ServerGloabls");
const console_stamp_1 = __importDefault(require("console-stamp"));
before(async () => {
    (0, console_stamp_1.default)(console);
    node_util_1.inspect.defaultOptions.depth = 12;
    ServerGloabls_1.ServerGlobals.mysql = config_1.mysql;
    await (0, DBMgr_1.dbInitialize)();
});
