"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e_role_status = exports.UserInfo = void 0;
class UserInfo {
    constructor() {
        /** 风控标记 */
        this.fengKong = 0;
        /** 用户状态 0默认*/
        this.status = 0;
        /** uid */
        this.uid = 0;
        /** token */
        this.token = "";
        /** 0普通用户1是机器人 */
        this.userType = 0;
        /** 金币 */
        this.money = 0;
        /** 头像 */
        this.headImg = "";
        /** 头像序号 */
        this.pic = 0;
        /** 昵称 */
        this.nickname = "";
        /** token超时时间 */
        this.tokeOut = 0;
        /** 匹配的房间id */
        this.roomID = 0;
    }
    // checkFengKong(cb: () => void) {
    //     CenterUserApi.ApiUserRisk(this.uid, (tips: number) => {
    //         this.fengKong = tips;
    //         cb();
    //         Logger.info(`玩家 ${this.uid} 是否为风控用户 ${this.isFengKong()}`)
    //     });
    // }
    isFengKong() {
        return (this.fengKong == 1);
    }
}
exports.UserInfo = UserInfo;
var e_role_status;
(function (e_role_status) {
    e_role_status[e_role_status["Normal"] = 0] = "Normal";
    e_role_status[e_role_status["Match"] = 1] = "Match";
    e_role_status[e_role_status["Play"] = 2] = "Play";
})(e_role_status || (exports.e_role_status = e_role_status = {}));
