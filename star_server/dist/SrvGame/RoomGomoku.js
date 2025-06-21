"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomGomoku = void 0;
const Room_1 = require("./Room");
const GomokuBoardMgr_1 = require("../shared/GomokuBoardMgr");
class RoomGomoku {
    constructor(id, gameTpye, displayId, name, password) {
        this._instIdBase = 1;
        this._gameData = {
            players: [],
            currentPlayer: '',
            boardData: undefined,
        };
        this._boardMgr = new GomokuBoardMgr_1.GomokuBoardMgr();
        this.room = new Room_1.Room(id, gameTpye, displayId, name, this, 50, 2, password);
        this._gameData.boardData = this._boardMgr.gridData;
    }
    getPlayerNum() {
        return this._gameData.players.length;
    }
    onClientReady(conn) {
        conn.sendMsg("gomoku/GameDataSyncPush", { data: this._gameData });
    }
    async onUserEnter(user, conn) {
    }
    onPlayerLeave(user, conn) {
        for (let i = 0; i < this._gameData.players.length; ++i) {
            let p = this._gameData.players[i];
            if (p.uid == user.uid) {
                this._gameData.players.splice(i, 1);
                this.room.broadcastMsg("gomoku/PlayerLeavesPush", { uid: p.uid });
                if (this._gameData.players.length == 0) {
                    this._gameData.currentPlayer = '';
                    this.room.broadcastMsg("gomoku/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer });
                }
                break;
            }
        }
        if (this.room.isPlaying) {
            this.room.broadcastMsg("gomoku/GameOverPush", { winner: this._gameData.players[0].uid });
            this.room.setPlaying(false);
            this.room.broadcastMsg("room/RoomDataChangedPush", { isPlaying: this.room.isPlaying });
        }
        return '';
    }
    onJoinGame(newUser) {
        let playerId = this._instIdBase++;
        let newPlayer = {
            uid: newUser.uid,
            color: this._gameData.players.length ? 'white' : 'black',
        };
        //add to player list
        this._gameData.players.push(newPlayer);
        this.room.broadcastMsg("gomoku/PlayerComesPush", { player: newPlayer });
        //notify to remove from watcher list.
        //set as current player
        if (!this._gameData.currentPlayer) {
            this._gameData.currentPlayer = newPlayer.uid;
            //
            this.room.broadcastMsg("gomoku/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer });
        }
        //返回 playerId，由于没使用，返回 1 即可。
        return playerId;
    }
    onCheckGameBegin() {
        if (this.room.playerNum < this.room.maxPlayerNum) {
            return;
        }
        let readyCnt = 0;
        this._gameData.players.forEach(v => {
            var _a;
            if ((_a = this.room.getUser(v.uid)) === null || _a === void 0 ? void 0 : _a.ready) {
                readyCnt++;
            }
        });
        if (readyCnt == this.room.maxPlayerNum) {
            this.onResetGameData();
            this.room.setPlaying(true);
            this.room.broadcastMsg("room/RoomDataChangedPush", { isPlaying: this.room.isPlaying });
            let p = this._gameData.players[Math.floor(Math.random() * 2)];
            this._gameData.currentPlayer = p.uid;
            this.room.broadcastMsg("gomoku/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer, boardData: this._gameData.boardData });
            this.room.broadcastMsg("gomoku/GameBeginPush", {});
        }
    }
    onResetGameData() {
        this._gameData.currentPlayer = '';
        this.room.setPlaying(false);
        this._boardMgr.reset();
    }
    /***
     * @en get player by connnection, null means not a player.
     * @zh 通过链接查找对应的玩家, null 表示不是玩家
     */
    getPlayer(uid) {
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
        this.room.broadcastMsg("gomoku/GameOverPush", { winner: winner });
    }
    onRPC_PlacePiece(call) {
        const conn = call.conn;
        let uid = conn.uid;
        if (!uid) {
            return call.error('INVALID_USER');
        }
        let user = this.room.getUser(uid);
        if (!user) {
            return call.error('INVALID_USER_DATA');
        }
        if (this._gameData.currentPlayer != user.uid) {
            return;
        }
        let req = call.req;
        let sg = this._boardMgr.sizeInGrid;
        if (req.gridX < 0 || req.gridX >= sg || req.gridY < 0 || req.gridY >= sg) {
            return call.error('INVALID_GRID');
        }
        let v = this._boardMgr.getGridData(req.gridX, req.gridY);
        if (v) {
            return call.error('INVALID_GRID');
        }
        let p = this.getPlayer(user.uid);
        v = (p === null || p === void 0 ? void 0 : p.color) == 'black' ? 1 : 2;
        this._boardMgr.setGrid(req.gridX, req.gridY, v);
        call.succ({});
        this.room.broadcastMsg("gomoku/PlacePiecePush", { uid: user.uid, gridX: req.gridX, gridY: req.gridY, value: v });
        if (this.room.isPlaying) {
            //
            let win = this._boardMgr.checkWin(req.gridX, req.gridY, v);
            if (win) {
                this.gameOver(this._gameData.currentPlayer);
            }
            else {
                for (let i = 0; i < this._gameData.players.length; ++i) {
                    let p = this._gameData.players[i];
                    if (this._gameData.currentPlayer == p.uid) {
                        let nextTurn = (i + 1) % this._gameData.players.length;
                        this._gameData.currentPlayer = this._gameData.players[nextTurn].uid;
                        break;
                    }
                }
                this.room.broadcastMsg("gomoku/GameDataChangedPush", { currentPlayer: this._gameData.currentPlayer });
            }
        }
    }
    onUserReady(newPlayer) {
        return Promise.resolve();
    }
}
exports.RoomGomoku = RoomGomoku;
