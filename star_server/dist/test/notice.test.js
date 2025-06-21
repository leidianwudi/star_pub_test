"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBNotice_1 = require("../db/DBNotice");
describe("notice", () => {
    //{title:'文本通知',content:'TGX 联机游戏中心，是一个基于 OpenTGX 的联机游戏解决方案。\n主要针对多人休闲互动、多人休闲竞技、多人休闲益智等游戏类型提供基础保障。\n它可以使你大大缩短开发周期，节省平台研发成本。',contentType:'text'},
    //{title:'图片公告',content:'https://download.cocos.com/CocosPortal/image/ef247c12bcd34db0879354474bba80a1/ef247c12bcd34db0879354474bba80a1.jpg', image:"https://download.cocos.com/CocosPortal/image/ef247c12bcd34db0879354474bba80a1/ef247c12bcd34db0879354474bba80a1.jpg", contentType:'image'},
    it("test notice", async () => {
        const db = new DBNotice_1.DBNotice();
        await db.insertNotice("文本通知", 'TGX 联机游戏中心，是一个基于 OpenTGX 的联机游戏解决方案。\n主要针对多人休闲互动、多人休闲竞技、多人休闲益智等游戏类型提供基础保障。\n它可以使你大大缩短开发周期，节省平台研发成本。');
        await db.insertNotice("图片公告", undefined, "https://download.cocos.com/CocosPortal/image/ef247c12bcd34db0879354474bba80a1/ef247c12bcd34db0879354474bba80a1.jpg");
        const notices = await db.getNotices();
        console.log("notices:", notices);
    });
});
