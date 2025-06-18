"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetAnnouncement = ApiGetAnnouncement;
const DBAnnouncement_1 = require("../../db/DBAnnouncement");
/**
 * @en normally stored in database, and controlled by management system.
 * @zh 正式项目中，一般存放在数据库，并通过管理后台修改
 * TODO remove this
*/
const announcementMap = {};
announcementMap['lobby'] = '欢迎玩家登录明星游戏';
announcementMap['billiards'] = '欢迎玩家登录明星游戏，联机台球已实现多端同步';
announcementMap['gomoku'] = '欢迎玩家登录明星游戏，五子棋拥有联机对战和 AI 模式';
announcementMap['tank'] = '欢迎进入坦克大战 IO 游戏，出海、多人联机、小游戏、H5平台等轻量休闲竞技的绝佳品类';
async function ApiGetAnnouncement(call) {
    let a = await DBAnnouncement_1.dbAnnouncement.getAnnouncement(call.req.type);
    let content = (a === null || a === void 0 ? void 0 : a.content) || '';
    call.succ({ content: content });
}
