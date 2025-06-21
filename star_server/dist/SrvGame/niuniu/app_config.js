"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e_svr_status = exports.svr_config = void 0;
exports.svr_config = {
    /** 结算抽水0.05的百分比 */
    lost_percent: 0.95,
    /** 房间允许的最大人数 */
    room_max_players: 7,
    /** 可下注的倍数列表 */
    cash_scale_list: [1, 2, 3, 4, 5],
    /** 可抢庄的倍数列表 */
    zhuang_scale_list: [1, 2, 3, 4, 5],
    /** 房间的倍数 */
    room_scale: [10, 20, 50, 100],
    /** 牌型的最大倍数 */
    card_type_max_scale: 4,
    /** 开始游戏时候的动画播放时间 */
    start_game_ani: 2,
    /** 下注倒计时 */
    start_bet_time_down: 6,
    /** 抢庄每个人的操作等待时间 */
    zhuang_select_scale_time_down: 5,
    /** 摊牌阶段倒计时 */
    tan_pai_wait_time: 5,
    /** 五小牛倍数 */
    scale_wu_xiao_niu: 5,
    /** 炸弹的倍数 */
    scale_zha_dan: 4,
    /** 牛牛的倍数 */
    scale_niu_niu: 3,
    /** 牛7~牛9倍数 */
    scale_da_niu: 2,
    /** 没牛到牛6倍数 */
    scale_xiao_niu: 1,
    /** 服务器状态, 0服务器正在启动,1正常运行,2,服务器即将维护 */
    svr_runing_status: 0,
    /** 游戏匹配房间不能退出的倒计时 */
    room_wait_unquiet_time: 3,
    /** 游戏开始等待倒计时 */
    room_wait_time: 5,
    /** 入场限制金币数 */
    join_limit: [100, 200, 500, 1000],
    /** 游戏结束前摊牌时间  */
    show_time: 5,
    /** 下注倍数展示时间 */
    show_bet_time: 2,
    /** 跑马灯变换时间（ms） */
    show_zhuang_time: 100,
    /** 跑马灯展示圈数 */
    quan_shu: 2,
    /** 庄家动画时间 */
    play_zhuang: 1,
    /** 倍数展示时间（ms） */
    play_multiple: 800,
    /** 断线重连时间阈值 */
    Reconnect_Timeout: 7000,
    /** 切后台触发断线重连时间 */
    BackStage_Timeout: 7000
};
var e_svr_status;
(function (e_svr_status) {
    e_svr_status[e_svr_status["qidongzhong"] = 0] = "qidongzhong";
    e_svr_status[e_svr_status["runing"] = 1] = "runing";
    e_svr_status[e_svr_status["jiangweihu"] = 2] = "jiangweihu";
})(e_svr_status || (exports.e_svr_status = e_svr_status = {}));
