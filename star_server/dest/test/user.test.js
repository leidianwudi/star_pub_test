"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCK_TIME = void 0;
const DataSource_1 = require("../db/DataSource");
const DBUser_1 = require("../db/DBUser");
const User_1 = require("../db/entity/User");
const assert_1 = require("assert");
const Coin_1 = require("../db/entity/Coin");
exports.LOCK_TIME = 600; //60分钟
describe("user", () => {
    it("insert user with repository", async () => {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        await userRepository.delete({ account: "test1" });
        let newUser = {
            account: "test1",
            password: "111111",
        };
        let r = await userRepository.insert(newUser);
        console.log("insert user result:", r);
    });
    it("insert new user", async () => {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        await userRepository.delete({ account: "test" });
        const db = new DBUser_1.SQLDB_User();
        await db.insterNewUser("test", "111111");
    });
    it("update user", async () => {
        const db = new DBUser_1.SQLDB_User();
        const uid = await db.getUIDWithAccountAndPassword("test", "111111");
        if (uid == "") {
            await db.insterNewUser("test", "111111");
        }
        await db.updateUserInfoByUid(uid, { name: "hello", visualId: 3 });
    });
    it("get user", async () => {
        const db = new DBUser_1.SQLDB_User();
        const uid = await db.getUIDWithAccountAndPassword("test", "111111");
        (0, assert_1.strict)(uid);
        const info = await db.getUserInfoByUid(uid);
        console.log("user info:", info);
    });
    it("coin", async () => {
        const db = new DBUser_1.SQLDB_User();
        const uid = await db.getUIDWithAccountAndPassword("test", "111111");
        if (uid == "") {
            await db.insterNewUser("test", "111111");
        }
        await db.incrementCoins(uid, new Coin_1.Coin(10), "lobby", "", "slots", "");
        await db.decrementCoins(uid, new Coin_1.Coin(10), "lobby", "", "slots", "");
        await db.updateCoins(uid, new Coin_1.Coin(10000000), "lobby", "", "slots", "");
    });
    it("lock user", async () => {
        const db = new DBUser_1.SQLDB_User();
        let user = await db.getUser("test");
        console.log("user:", user);
        (0, assert_1.strict)(user);
        await db.updateFailedAttempt(user.id, 1);
        user = await db.getUser("test");
        (0, assert_1.strict)(user && user.failedAttempts == 1);
        (0, assert_1.strict)(user.failedAttempts);
        await db.lockAccount(user.id, exports.LOCK_TIME);
        user = await db.getUser("test");
        let now = new Date();
        (0, assert_1.strict)(user && user.locked);
        (0, assert_1.strict)(now.getTime() < user.lockUntil.getTime());
        await db.resetSecurityData(user.id);
        user = await db.getUser("test");
        (0, assert_1.strict)(user && !user.locked && user.failedAttempts == 0 && !user.lockUntil && !user.lastAttemptTime);
    });
});
