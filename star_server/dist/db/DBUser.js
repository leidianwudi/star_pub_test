"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLDB_User = void 0;
const User_1 = require("./entity/User");
const DataSource_1 = require("./DataSource");
const TokenUtils_1 = require("../common/TokenUtils");
const Coin_1 = require("./entity/Coin");
const CoinLog_1 = require("./entity/CoinLog");
class SQLDB_User {
    async getUIDWithAccountAndPassword(account, password) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        const u = await userRepository.findOneBy({ account: account });
        if (!u) {
            return '';
        }
        let psd = TokenUtils_1.TokenUtils.encodePassword(password);
        if (u.password != psd) {
            return '';
        }
        return u.id + "";
    }
    async hasUser(account) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        const u = await userRepository.findOneBy({ account: account });
        return !!u;
    }
    async insterNewUser(account, password) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        let pswd = TokenUtils_1.TokenUtils.encodePassword(password);
        let newUser = {
            account: account,
            name: '',
            password: pswd,
            gender: 0,
            introduction: '',
        };
        await userRepository.insert(newUser);
    }
    async getUserInfo(key) {
        if (!key) {
            return undefined;
        }
        if (key.uid) {
            return this.getUserInfoByUid(key.uid);
        }
        else if (key.token) {
            return this.getUserInfoByToken(key.token);
        }
        ;
        return undefined;
    }
    async updateUserInfoByUid(uid, info) {
        await this.updateUserInfo({ uid: uid }, info);
    }
    async updateUserInfoByToken(token, info) {
        await this.updateUserInfo({ token: token }, info);
    }
    async updateUserInfo(key, info) {
        if (!key) {
            return;
        }
        if (info.hasOwnProperty("coin")) {
            throw new Error("can't update user coin");
        }
        const u = {};
        if (info.hasOwnProperty("name")) {
            u.name = info.name || "";
        }
        if (info.hasOwnProperty("visualId")) {
            u.visualId = info.visualId;
        }
        if (info.hasOwnProperty("token")) {
            u.token = info.token;
        }
        if (info.hasOwnProperty("gender")) {
            u.gender = info.gender;
        }
        if (info.hasOwnProperty("introduction")) {
            u.introduction = info.introduction;
        }
        if (Object.keys(u).length == 0) {
            return;
        }
        if (key.uid) {
            const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
            await userRepository.update({ id: key.uid }, u);
        }
        else if (key.token) {
            const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
            await userRepository.update({ token: key.token }, u);
        }
    }
    async getUserInfoByUid(uid) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        const u = await userRepository.findOneBy({ id: uid });
        if (!u) {
            return undefined;
        }
        const info = {
            uid: "" + u.id,
            account: u.account,
            token: u.token,
            name: u.name,
            visualId: u.visualId,
            gender: u.gender,
            introduction: u.introduction,
            coin: u.coin.toNumber(),
        };
        return info;
    }
    async getUserInfoByToken(token) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        const u = await userRepository.findOneBy({ token: token });
        if (!u) {
            return undefined;
        }
        const info = {
            uid: "" + u.id,
            account: u.account,
            token: u.token,
            name: u.name,
            visualId: u.visualId,
            gender: u.gender,
            introduction: u.introduction,
            coin: u.coin.toNumber(),
        };
        return info;
    }
    async getUser(account) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        const u = await userRepository.findOneBy({ account: account });
        return u;
    }
    async getUserByUid(uid) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        const u = await userRepository.findOneBy({ id: uid });
        return u;
    }
    async lockAccount(uid, lockTime) {
        let now = new Date();
        let lockUntil = new Date(now.getTime() + lockTime * 1000);
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        await userRepository.update({ id: uid }, { locked: true, lockUntil: lockUntil });
    }
    async updateFailedAttempt(uid, failedAttempts) {
        let now = new Date();
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        await userRepository.update({ id: uid }, { failedAttempts: failedAttempts, lastAttemptTime: now });
    }
    async resetSecurityData(uid) {
        const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
        await userRepository.update({ id: uid }, { failedAttempts: 0, lastAttemptTime: null, locked: false, lockUntil: null });
    }
    async updateCoins(uid, coins, gameId, sn, type, snExt, reason) {
        await DataSource_1.AppDataSource.transaction(async (manager) => {
            const userRepository = manager.getRepository(User_1.User);
            let u = await userRepository.createQueryBuilder()
                .setLock("pessimistic_write")
                .where("id = :id", { id: uid })
                .getOne();
            if (!u) {
                throw new Error("can't update coins, user nonexists");
            }
            let delta = coins.sub(u.coin);
            await userRepository.update({ id: uid }, { coin: coins });
            let coinLogRepo = manager.getRepository(CoinLog_1.CoinLog);
            await coinLogRepo.insert({
                uid: uid,
                source: gameId,
                coin: u.coin,
                delta: delta,
                desc: reason || "",
                account: u.account,
                sn: sn,
                type: type,
                snExt: snExt
            });
        });
    }
    async incrementCoins(uid, addCoins, gameId, sn, type, snExt, reason) {
        await DataSource_1.AppDataSource.transaction(async (manager) => {
            manager.createQueryBuilder();
            const userRepository = manager.getRepository(User_1.User);
            let u = await userRepository.createQueryBuilder()
                .setLock("pessimistic_write")
                .where("id = :id", { id: uid })
                .getOne();
            if (!u) {
                throw new Error("can't update coins, user nonexists");
            }
            await userRepository.increment({ id: uid }, "coin", addCoins.toString());
            let coinLogRepo = manager.getRepository(CoinLog_1.CoinLog);
            await coinLogRepo.insert({
                uid: uid,
                source: gameId,
                coin: u.coin,
                delta: addCoins,
                desc: reason || "",
                account: u.account,
                sn: sn,
                type: type,
                snExt: snExt
            });
        });
    }
    async decrementCoins(uid, subCoins, gameId, sn, type, snExt, reason) {
        await DataSource_1.AppDataSource.transaction(async (manager) => {
            const userRepository = manager.getRepository(User_1.User);
            let u = await userRepository.createQueryBuilder()
                .setLock("pessimistic_write")
                .where("id = :id", { id: uid })
                .getOne();
            if (!u) {
                throw new Error("can't update coins, user nonexists");
            }
            await userRepository.decrement({ id: uid }, "coin", subCoins.toString());
            let delta = new Coin_1.Coin(0).sub(subCoins);
            let coinLogRepo = manager.getRepository(CoinLog_1.CoinLog);
            await coinLogRepo.insert({
                uid: uid,
                source: gameId,
                coin: u.coin,
                delta: delta,
                desc: reason || "",
                account: u.account,
                sn: sn,
                type: type,
                snExt: snExt
            });
        });
    }
}
exports.SQLDB_User = SQLDB_User;
