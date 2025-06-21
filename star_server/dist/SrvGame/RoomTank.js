"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTank = void 0;
const Room_1 = require("./Room");
const REVIVIE_CD = 10000;
class TankPlayer {
    constructor() {
        /**
         * @en user id, corresponding to the uid in database
         * @zh 用户 id，对应数据库中的 uid
        */
        this.uid = '';
        /**
         * @zh the color of player‘s tank, used to distinguish different camp
         * @zh 玩家坦克颜色，用于区别不同阵营
        */
        this.color = 0;
        /**
         * @en player id, use playerId instead of uid, because playerId in number type is more bandwidth-saving
         * @zh 玩家唯一 id。游戏逻辑使用 playerId 而不是 uid，因为 playerId 更省带宽
        */
        this.playerId = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.rotation = 0;
        this.hp = 0;
        this.maxHp = 0;
        this.score = 0;
        /**
         * @en <= 0: alive, > 0: dead
         * @zh 复活时间 <= 0 活着 > 0 死亡
        */
        this.reviveTime = 0;
        this.deadTimestamp = 0;
    }
}
class RoomTank {
    constructor(id, gameType, displayId, name, password) {
        this._instIdBase = 1;
        this._gameData = {
            players: [],
        };
        /**
         * @en player id mapping table, used for fast index.
         * @zh 玩家 id 映射表，用于快速索引玩家数据。
         */
        this._playerMap = {};
        this.room = new Room_1.Room(id, gameType, displayId, name, this, 50, 50, password);
    }
    getPlayerNum() {
        return this._gameData.players.length;
    }
    listenMsgs(conn) {
        conn.listenMsg("tank/TankDataChange", call => { this.onMsg_TankDataChange(call); });
        conn.listenMsg("tank/TankShoot", call => { this.onMsg_TankShoot(call); });
        conn.listenMsg("tank/TankAttack", call => { this.onMsg_TankAttack(call); });
    }
    onMsg_TankDataChange(call) {
        let player = this.getPlayerByConn(call.conn);
        if (!player) {
            return;
        }
        player.x = call.msg.x;
        player.y = call.msg.y;
        player.z = call.msg.z;
        player.rotation = call.msg.rotation;
        call.msg.playerId = player.playerId;
        //广播给其他玩家 bradcast to other players
        this.room.broadcastMsg("tank/TankDataChange", call.msg);
    }
    onMsg_TankShoot(call) {
        let player = this.getPlayerByConn(call.conn);
        if (!player) {
            return;
        }
        call.msg.playerId = player.playerId;
        this.room.broadcastMsg("tank/TankShoot", call.msg);
    }
    onMsg_TankAttack(call) {
        let player = this.getPlayerByConn(call.conn);
        if (!player) {
            return;
        }
        let targetTank = this._playerMap[call.msg.targetId];
        if (!targetTank) {
            return;
        }
        let oldHp = targetTank.hp;
        targetTank.hp -= call.msg.damage;
        if (targetTank.hp < 0) {
            targetTank.hp = 0;
        }
        else if (targetTank.hp > targetTank.maxHp) {
            targetTank.hp = targetTank.maxHp;
        }
        let reviveTime = undefined;
        if (targetTank.deadTimestamp == 0 && targetTank.hp <= 0) {
            targetTank.deadTimestamp = Date.now();
            reviveTime = REVIVIE_CD;
        }
        //@en use to notify data update
        //@zh 用于通知进行数据更新
        if (targetTank.hp != oldHp) {
            this.room.broadcastMsg('tank/PlayerDataChangedPush', { hp: targetTank.hp, playerId: targetTank.playerId, reviveTime: reviveTime });
        }
        if (oldHp > 0 && targetTank.hp <= 0) {
            player.score += 10;
            this.room.broadcastMsg('tank/PlayerDataChangedPush', { playerId: player.playerId, score: player.score });
        }
        call.msg.deltaHp = targetTank.hp - oldHp;
        call.msg.attackerId = player.playerId;
        //@en used to notify client to dispaly damage
        //@zh 用于通知客户端进行画面表现（比如伤害值显示等等）
        this.room.broadcastMsg("tank/TankAttack", call.msg);
    }
    unlistenMsgs(conn) {
        conn.unlistenMsgAll("tank/TankDataChange");
        conn.unlistenMsgAll("tank/TankShoot");
    }
    onClientReady(conn) {
        let player = this.getPlayerByConn(conn);
        if (player) {
            this.checkLiveAndDoRevive(player, false);
        }
        conn.sendMsg("tank/GameDataSyncPush", { data: this._gameData });
    }
    async onUserEnter(user, conn) {
    }
    onPlayerLeave(user, conn) {
        for (let i = 0; i < this._gameData.players.length; ++i) {
            let p = this._gameData.players[i];
            if (p.uid == user.uid) {
                this._gameData.players.splice(i, 1);
                delete this._playerMap[p.playerId];
                this.room.broadcastMsg("tank/PlayerLeavesPush", { uid: p.uid });
                break;
            }
        }
        return undefined;
    }
    onJoinGame(newUser) {
        let newPlayer = {
            uid: newUser.uid,
            color: Math.floor(Math.random() * 0xffffff),
            playerId: this._instIdBase++,
            x: 0,
            y: 0,
            z: 0,
            hp: 100,
            maxHp: 100,
            rotation: Math.random() * 360,
            reviveTime: 0,
            deadTimestamp: 0,
            score: 0,
        };
        this.randomPosition(newPlayer);
        //add to player list
        this._gameData.players.push(newPlayer);
        this._playerMap[newPlayer.playerId] = newPlayer;
        this.room.broadcastMsg("tank/PlayerComesPush", { player: newPlayer });
        return newPlayer.playerId;
    }
    onCheckGameBegin() {
        this.room.setPlaying(true);
        this.room.broadcastMsg("tank/GameBeginPush", {});
    }
    onResetGameData() {
        this.room.setPlaying(false);
    }
    /**
     * @en get player by connection.
     * @zh 根据连接获取玩家
     * @param conn connection object / 连接对象
     * @returns player object, null if not found / 玩家对象，如果找不到则返回 null
     */
    getPlayerByConn(conn) {
        let uid = conn.uid;
        if (!uid) {
            return null;
        }
        return this.getPlayer(uid);
    }
    /***
 * @en get player by uid, null if not found.
 * @zh 通过 uid 查找对应的玩家, null 表示不是玩家
 */
    getPlayer(uid) {
        let user = this.room.getUser(uid);
        if (!user || !user.playerId) {
            return;
        }
        return this._playerMap[user.playerId];
    }
    gameOver(winner) {
        this.room.setPlaying(false);
        for (let i = 0; i < this._gameData.players.length; ++i) {
            let p = this._gameData.players[i];
            this.room.getUser(p.uid).ready = false;
        }
        this.room.broadcastMsg("room/RoomDataChangedPush", { isPlaying: this.room.isPlaying });
        this.room.broadcastMsg("tank/GameOverPush", { winner: winner });
    }
    checkLiveAndDoRevive(player, needBroadcast) {
        if (player && player.deadTimestamp > 0) {
            player.reviveTime = player.deadTimestamp + REVIVIE_CD - Date.now();
            if (player.reviveTime <= 0) {
                player.reviveTime = 0;
                player.deadTimestamp = 0;
                player.hp = player.maxHp;
                this.randomPosition(player);
                if (needBroadcast) {
                    this.room.broadcastMsg("tank/TankDataChange", { playerId: player.playerId, x: player.x, y: player.y, z: player.z, rotation: player.rotation, forceSync: true });
                    this.room.broadcastMsg("tank/PlayerDataChangedPush", { playerId: player.playerId, hp: player.hp, reviveTime: player.reviveTime });
                }
            }
        }
    }
    randomPosition(player) {
        player.x = Math.random() * 1000 - 500;
        player.y = Math.random() * 100 - 500;
        player.z = 0;
        player.rotation = Math.random() * 360;
    }
    onUpdate(dt) {
        this._gameData.players.forEach(p => {
            this.checkLiveAndDoRevive(p, true);
        });
    }
    onUserReady(newPlayer) {
        return Promise.resolve();
    }
}
exports.RoomTank = RoomTank;
