"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const define_1 = require("./define");
class Player {
    constructor(userId, chairID, totalCount) {
        this.userStatus = define_1.UserStatus.US_FREE; //玩家状态    
        this.gold = 0;
        this.userID = userId;
        this.chairID = chairID;
        this.totalCount = totalCount || 0;
        this.score = 0;
        this.winCnt = 0;
        this.bombCnt = 0;
        this.successiveWinCnt = 0;
        this.currSuccessiveWinCnt = 0;
        this.lastWin = false;
        this.isLeaved = false;
        this.reSet();
    }
    reSet() {
        this.handCard = [];
        this.singleScore = 0;
        this.bombScore = 0;
        this.badScore = 0;
        this.userCard = [];
        this.playRecords = [];
        this.hasPass = false;
        this.enableCardRecorder = false;
        this.canPlayPass = false;
        this.frozen = false;
        this.isWinner = false;
        this.isTrusteeship = false;
    }
    /**
     * 增加金币
     * @param gold 金币数量
     * @returns
     */
    addGold(addGold) {
        if (addGold < 0 && this.gold < -addGold) {
            addGold = -this.gold;
            this.gold = 0;
        }
        else {
            this.gold += addGold;
        }
        //BroadcastCenter.broadcast("GS_UPDATE_USER_GOLD", this);
        return addGold;
    }
    getUserGold() {
        return this.gold;
    }
}
exports.Player = Player;
