"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = exports.mysql = void 0;
exports.mysql = {
    host: "localhost",
    port: 3306,
    username: "im",
    password: "123456",
    database: "star",
    synchronize: false,
    logging: true,
};
exports.redis = {
    host: "localhost",
    port: 6379,
    password: "",
};
