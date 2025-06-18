"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerInfo {
    constructor() {
        /** uid */
        this.uid = "";
        /** 昵称 */
        this.nickname = "";
        /** 身上的ji */
        this.gold = 0;
        /** 下注的倍数,在svr_config.cash_scale_list中取的值,如果是庄家就表示抢庄倍数 */
        this.bets_scale = -1;
        /** 是否庄家 */
        this.isZhuang = false;
        /** 座位号, 从0开始， 必须连续 */
        this.chairId = 0;
        //客户端的座位号， 从0开始，中间可能不连续
        this.seatId = 0;
        /** 手中的id牌组 */
        this.cards = [];
        /** 牌的类型 */
        this.cardType = 0;
        /** 牌的倍数 */
        this.card_scale = 0;
        /** 玩家类型,0普通玩家,1机器人 */
        this.userType = 0;
        /** 头像 */
        this.head = "";
        /** 头像序号 */
        this.pic = 0;
        //ai玩家 意图因子
        // I = Agg + ε
        // 其中：
        // Agg ∈ [0,1] 是基础激进度（性格参数）
        // ε ∈ [-0.15, +0.15] 是小范围扰动，模拟偶发情绪/环境波动
        this.I = 0;
        this.isLeaved = false;
    }
    /** 下发其他玩家的基础信息 */
    endBaseInfo(uid) {
        return {
            uid: this.uid,
            gold: this.gold.toFixed(2),
            seat: this.chairId,
            nickname: this.nickname,
            head: this.head,
            pic: this.pic
        };
    }
    endUserCards(uid) {
        return {
            uid: this.uid,
            seat: this.chairId,
            cards: uid == this.uid ? this.cards : [],
            scale: uid == this.uid ? this.card_scale : 0,
            type: uid == this.uid ? this.cardType : 0,
        };
    }
    addMoney(num, room_id) {
        // 处理js的浮点型运算bug
        num = Math.round(num * 100) / 100;
        this.gold += num;
        // let user = userMgr.take(this.uid);
        // if (user) {
        //     user.status = e_role_status.Normal;
        //     user.money = this.gold
        // }
        // CenterUserApi.ApiUserUpdateMoney(this.uid, num, room_id, (res: { status: number }) => {
        //     if (res.status == 10000) {
        //         Logger.info(`中控修改${this.uid}的金币成功`, res);
        //     } else {
        //         Logger.info(`中控修改${this.uid}的金币错误, status:${res.status}`);
        //     }
        // });
    }
    /** 发送数据到中控 */
    sendResultToCenter(roomid, room_base_money, is_win, dtGold) {
        // add_room_info({
        //     roomid: roomid,
        //     user_gold: this.gold,
        //     userid: this.uid,
        //     poker: this.cards,//牌 1
        //     initMoney: room_base_money,//房间底金,就是房间的底
        //     seat: this.chairId,//位置  1
        //     isLandlord: this.isZhuang,//是否庄 1
        //     pourMoney: room_base_money,//下注金额就是房间底
        //     settleMoney: dtGold,//输赢的金额
        //     isWin: is_win,//是否赢了
        //     bet_scale: this.bets_scale,
        //     brand_result: this.cardType,
        //     brand_times: this.card_scale,
        // });
    }
}
exports.default = PlayerInfo;
