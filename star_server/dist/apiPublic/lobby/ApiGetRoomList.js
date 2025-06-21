"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetRoomList = ApiGetRoomList;
const MatchSrvRPC_1 = require("../../SrvMatch/MatchSrvRPC");
async function ApiGetRoomList(call) {
    let ret = await MatchSrvRPC_1.MatchSrvRPC.get().getRoomList(call.req.type);
    if (!ret.isSucc) {
        return call.error(ret.err);
    }
    let roomList = ret.res.roomList;
    let curPage = call.req.curPage;
    let pageItemNum = call.req.pageItemNum;
    if (pageItemNum <= 0) {
        pageItemNum = 1;
    }
    else if (pageItemNum > 20) {
        pageItemNum = 20;
    }
    let pageNum = Math.ceil(roomList.length / pageItemNum);
    if (curPage < 0) {
        curPage = 0;
    }
    if (curPage >= pageNum) {
        curPage = pageNum - 1;
    }
    if (roomList.length <= pageItemNum) {
        curPage = 0;
        roomList = roomList;
    }
    else {
        let fromIndex = curPage * pageItemNum;
        if (fromIndex >= roomList.length) {
            fromIndex = roomList.length - pageItemNum;
            curPage = pageNum - 1;
        }
        roomList = roomList.slice(fromIndex, fromIndex + pageItemNum);
    }
    let pageItems = new Array(roomList.length);
    for (let i = 0; i < roomList.length; ++i) {
        let v = roomList[i];
        pageItems[i] = {
            roomId: v.id,
            displayId: v.displayId,
            gameType: v.gameType,
            name: v.name,
            userNum: v.userNum,
            maxUserNum: v.maxUserNum,
            playerNum: v.playerNum,
            maxPlayerNum: v.maxPlayerNum,
            needPassword: !!v.password
        };
    }
    /**
     * @en test data for rooms list paging.
     * @zh 测试数据，用于房间列表分页
     */
    /*
    for (let i = 0; i < 43; ++i) {
        let id = TokenUtils.genID(6, true);
        roomStateCache.push({
            roomId: id,
            displayId: id,
            gameType: id,
            name: call.req.type + '_' + i,
            userNum: 2,
            maxUserNum: 50,
            playerNum: 2,
            maxPlayerNum: 2,
            needPassword: false,
        });
    }
    */
    call.succ({
        curPage: curPage,
        pageNum: pageNum,
        rooms: pageItems
    });
}
