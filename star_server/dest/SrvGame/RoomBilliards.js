"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomBilliards = void 0;
const Room_1 = require("./Room");
class RoomBilliards {
    constructor(id, gameType, displayId, name, password) {
        this._instIdBase = 1;
        this._gameData = {
            players: [],
            currentPlayer: '',
            ballsData: undefined,
            curDirection: undefined
        };
        this.room = new Room_1.Room(id, gameType, displayId, name, this, 50, 2, password);
    }
    getPlayerNum() {
        return this._gameData.players.length;
    }
    listenMsgs(conn) {
        conn.listenMsg("billiards/AdjustCue", call => { this.onMsg_AdjustCue(call); });
        conn.listenMsg("billiards/HitBall", call => { this.onMsg_HitBall(call); });
        conn.listenMsg("billiards/HitBallComplete", call => { this.onMsg_HitBallComplete(call); });
        conn.listenMsg("billiards/BallsDataSync", call => { this.onMsg_BallsDataSync(call); });
    }
    unlistenMsgs(conn) {
        conn.unlistenMsgAll("billiards/AdjustCue");
        conn.unlistenMsgAll("billiards/HitBall");
        conn.unlistenMsgAll("billiards/HitBallComplete");
        conn.unlistenMsgAll("billiards/BallsDataSync");
    }
    onDisconnected(conn) {
        let uid = conn.uid;
        if (!uid) {
            return;
        }
        if (this.room.isPlaying) {
            if (uid == this._gameData.currentPlayer) {
                if (this._gameData.currentPlayer == this._gameData.players[0].uid) {
                    this._gameData.currentPlayer = this._gameData.players[1].uid;
                }
                else {
                    this._gameData.currentPlayer = this._gameData.players[0].uid;
                }
                this.room.broadcastMsg("billiards/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer });
            }
        }
    }
    onClientReady(conn) {
        conn.sendMsg("billiards/GameDataSyncPush", this._gameData);
    }
    async onUserEnter(user, conn) {
    }
    onPlayerLeave(user, conn) {
        for (let i = 0; i < this._gameData.players.length; ++i) {
            let p = this._gameData.players[i];
            if (p.uid == user.uid) {
                this._gameData.players.splice(i, 1);
                this.room.broadcastMsg("billiards/PlayerLeavesPush", { uid: p.uid });
                if (this._gameData.players.length == 0) {
                    this._gameData.currentPlayer = '';
                    this.room.broadcastMsg("billiards/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer });
                }
                break;
            }
        }
        if (this.room.isPlaying) {
            this.room.broadcastMsg("billiards/GameOverPush", { winner: this._gameData.players[0].uid, reason: 'RIVAL_LEFT' });
            this.room.setPlaying(false);
            this.room.broadcastMsg("room/RoomDataChangedPush", { isPlaying: this.room.isPlaying });
        }
        return '';
    }
    onJoinGame(newUser) {
        let playerId = this._instIdBase++;
        let newPlayer = {
            uid: newUser.uid,
            pocketedBalls: []
        };
        //add to player list
        this._gameData.players.push(newPlayer);
        this.room.broadcastMsg("billiards/PlayerComesPush", { player: newPlayer });
        //notify to remove from watcher list.
        //set as current player
        if (!this._gameData.currentPlayer) {
            this._gameData.currentPlayer = newPlayer.uid;
            //
            this.room.broadcastMsg("billiards/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer });
        }
        return playerId;
    }
    onCheckGameBegin() {
        if (this.room.playerNum < this.room.maxPlayerNum) {
            return;
        }
        let readyCnt = 0;
        this._gameData.players.forEach(v => {
            let user = this.room.getUser(v.uid);
            if (user === null || user === void 0 ? void 0 : user.ready) {
                readyCnt++;
            }
        });
        if (readyCnt == 2) {
            this.onResetGameData();
            this.room.setPlaying(true);
            this.room.broadcastMsg("room/RoomDataChangedPush", { isPlaying: this.room.isPlaying });
            let p = this._gameData.players[Math.floor(Math.random() * 2)];
            this._gameData.currentPlayer = p.uid;
            this.room.broadcastMsg("billiards/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer });
            this.room.broadcastMsg("billiards/GameBeginPush", {});
        }
    }
    onResetGameData() {
        this.room.setPlaying(false);
        this._gameData.currentPlayer = '';
        this._gameData.ballsData = undefined;
        this._gameData.curDirection = undefined;
        this._gameData.players.forEach(v => {
            v.pocketedBalls = [];
        });
    }
    /***
 * @en get player by connnection, null means not a player.
 * @zh 通过链接查找对应的玩家, null 表示不是玩家
 */
    getTablePlayer(conn) {
        let uid = conn.uid;
        if (!uid) {
            return null;
        }
        for (let i = 0; i < this._gameData.players.length; ++i) {
            let p = this._gameData.players[i];
            if (p.uid == uid) {
                return p;
            }
        }
        return null;
    }
    gameOver(winner) {
        this.room.setPlaying(false);
        for (let i = 0; i < this._gameData.players.length; ++i) {
            let p = this._gameData.players[i];
            this.room.getUser(p.uid).ready = false;
        }
        this.room.broadcastMsg("room/RoomDataChangedPush", { isPlaying: this.room.isPlaying });
        this.room.broadcastMsg("billiards/GameOverPush", { winner: winner });
    }
    //gameplay network methods.
    onMsg_AdjustCue(call) {
        let tablePlayer = this.getTablePlayer(call.conn);
        if (!tablePlayer) {
            return;
        }
        if (tablePlayer.uid != this._gameData.currentPlayer) {
            return;
        }
        this._gameData.curDirection = call.msg.direction;
        this.room.broadcastMsg("billiards/AdjustCue", call.msg);
    }
    onMsg_HitBall(call) {
        let tablePlayer = this.getTablePlayer(call.conn);
        if (!tablePlayer) {
            return;
        }
        if (tablePlayer.uid != this._gameData.currentPlayer) {
            return;
        }
        let data = call.msg;
        this._gameData.ballsData = data.ballsData;
        this.room.broadcastMsg("billiards/GameDataChangedPush", { ballsData: this._gameData.ballsData });
        this.room.broadcastMsg("billiards/HitBall", { hitImpulse: data.hitImpulse, order: data.order });
    }
    onMsg_HitBallComplete(call) {
        let tablePlayer = this.getTablePlayer(call.conn);
        if (!tablePlayer) {
            return;
        }
        if (tablePlayer.uid != this._gameData.currentPlayer) {
            return;
        }
        let data = call.msg;
        this._gameData.ballsData = data.ballsData;
        this._gameData.currentPlayer = data.nextPlayer;
        data.nextPlayer = '';
        this.room.broadcastMsg("billiards/HitBallComplete", data);
        this.room.broadcastMsg("billiards/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer, ballsData: data.ballsData });
    }
    onMsg_BallsDataSync(call) {
        let tablePlayer = this.getTablePlayer(call.conn);
        if (!tablePlayer) {
            return;
        }
        if (tablePlayer.uid != this._gameData.currentPlayer) {
            return;
        }
        this._gameData.ballsData = call.msg.ballsData;
        let hasAdded = false;
        if (call.msg.newPocketedBalls) {
            for (let i = 0; i < call.msg.newPocketedBalls.length; ++i) {
                let ballId = call.msg.newPocketedBalls[i];
                if (tablePlayer.pocketedBalls.indexOf(ballId) == -1) {
                    tablePlayer.pocketedBalls.push(ballId);
                    hasAdded = true;
                }
            }
            if (hasAdded) {
                this.room.broadcastMsg("billiards/PlayerDataChangedPush", { uid: this._gameData.currentPlayer, pocketedBalls: tablePlayer.pocketedBalls });
            }
        }
        this.room.broadcastMsg("billiards/GameDataChangedPush", { ballsData: this._gameData.ballsData });
        if (call.msg.gameOver) {
            this.room.broadcastMsg("billiards/GameOverPush", { winner: tablePlayer.uid });
        }
    }
    onUserReady(newPlayer) {
        return Promise.resolve();
    }
}
exports.RoomBilliards = RoomBilliards;
