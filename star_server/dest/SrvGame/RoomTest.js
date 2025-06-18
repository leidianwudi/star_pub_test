"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTest = void 0;
const Room_1 = require("./Room");
class RoomTest {
    constructor(id, gameTpye, displayId, name, password) {
        this.room = new Room_1.Room(id, gameTpye, displayId, name, this, 50, 2, password);
    }
    async onUserEnter(user, conn) {
    }
    onPlayerLeave(user, conn) {
        return '';
    }
    onJoinGame(newPlayer, roleName, isAI) {
        return 0;
    }
    onUserReady(newPlayer) {
        return Promise.resolve();
    }
    onCheckGameBegin() {
    }
    getPlayerNum() {
        return 0;
    }
}
exports.RoomTest = RoomTest;
