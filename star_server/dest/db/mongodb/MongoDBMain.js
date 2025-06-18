"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbMain = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ServerGloabls_1 = require("../../common/ServerGloabls");
/**
 * 数据库连接
 */
class MongoDBMain {
    async start() {
        let dbConfig = ServerGloabls_1.ServerGlobals.mongodb;
        let connectionString = `mongodb://${dbConfig.usr}:${dbConfig.pwd}@${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`;
        //mongoose.Promise = require('bluebird');
        let ret = await mongoose_1.default.connect(connectionString); //, options
        const db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'mongoose connection error:'));
        db.once('open', function () {
            return console.log('mongoose open success');
        });
    }
}
exports.mongodbMain = new MongoDBMain();
