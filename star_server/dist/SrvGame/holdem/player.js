"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerInfo {
    constructor() {
        /** uid */
        this.uid = "";
        /** 昵称 */
        this.nickname = "";
        /** 带到房间里的gold */
        this.gold = 0;
        /** 用户总共拥有的gold */
        this.userGold = 0;
        /** 座位号，从0开始连续的数字 */
        this.chairId = 0;
        /** 初始牌组 */
        this.base_cards = [];
        /** 玩家座位类型 */
        this.opType = 0;
        /** 下注金额 */
        this.bet = 0;
        /** 头像 */
        this.headImg = "";
        /** 头像序号 */
        this.pic = 0;
        //是否离开了房间
        this.isLeaved = false;
        //客户端的座位号， 从0开始，中间可能不连续
        this.seatId = 0;
    }
    /** 下发其他玩家的基础信息 */
    endBaseInfo() {
        return {
            uid: this.uid,
            gold: this.gold,
            seat: this.seatId,
            nickname: this.nickname,
            head: this.headImg,
            pic: this.pic
        };
    }
    addMoney(num, room_id) {
        // // 处理js的浮点型运算bug
        num = Math.round(num * 100) / 100;
        this.gold += num;
        // //TODO 需要对于接口返回进行判断,失败情况的处理
        // let result = await CenterUserApi.ApiUserUpdateMoney(this.uid, num, room_id);
        // const user = await userMgr.getInGameUser(this.uid);
        // if (result.status == CenterErrorCode.Success || result.status == CenterErrorCode.Success1) {
        //     if (user) {
        //         user.status = e_role_status.Normal;
        //         user.money = result.content.money;
        //         console.log(`=====游戏结束：roomid ${room_id}，num: ${num}, current: ${user.money}`);
        //         // 更新玩家状态(空闲)
        //         await CenterUserApi.ApiUserStatus(this.uid, user.token, 0)
        //     }
        // } else {
        //     const errMsg = `结算接口报错：房间id ${room_id}，更新金额: ${num},返回数据:${JSON.stringify(result)}`
        //     console.log(errMsg);
        //     // 更新玩家状态(结算异常)
        //     if (user) {
        //         await CenterUserApi.ApiUserStatus(this.uid, user.token, 2, JSON.stringify({ ...result.content, res: undefined }), { ...result.content, req: undefined })
        //     }
        // }
    }
}
exports.default = PlayerInfo;
