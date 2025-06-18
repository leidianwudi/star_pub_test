"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbRule = exports.dbSlot = exports.sqlDBMail = exports.sqlDBUser = exports.dbMail = exports.dbUser = void 0;
exports.dbInitialize = dbInitialize;
const ServerGloabls_1 = require("../common/ServerGloabls");
const DataSource_1 = require("./DataSource");
const DBUser_1 = require("./DBUser");
const DBMail_1 = require("./DBMail");
const DBSlot_1 = require("./DBSlot");
const DBRule_1 = require("./DBRule");
async function dbInitialize() {
    console.log('/////dbInitialize//////');
    exports.dbRule = new DBRule_1.DBRule();
    exports.sqlDBUser = new DBUser_1.SQLDB_User();
    exports.sqlDBMail = new DBMail_1.SQLDB_Mail();
    exports.dbSlot = new DBSlot_1.DBSlot();
    exports.dbUser = exports.sqlDBUser;
    exports.dbMail = exports.sqlDBMail;
    console.log(exports.dbUser, exports.dbMail);
    //bug https://github.com/typeorm/typeorm/issues/9060
    DataSource_1.AppDataSource.setOptions(ServerGloabls_1.ServerGlobals.mysql);
    Object.assign(DataSource_1.AppDataSource.driver.options, ServerGloabls_1.ServerGlobals.mysql);
    console.log("app datasource mysql driver options:", DataSource_1.AppDataSource.driver.options);
    await DataSource_1.AppDataSource.initialize();
}
