"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameState = exports.playerState = exports.playerType = exports.gameEvent = exports.EM_CorresCMD = exports.gameCMD = exports.GameStatus = exports.UserStatus = exports.gameConst = void 0;
//游戏常量定义
exports.gameConst = {
    //玩家状态
    US_NULL: 0x00, //没有状态
    US_FREE: 0x01, //站立状态
    US_SIT: 0x02, //坐下状态
    US_READY: 0x03, //同意状态
    US_PLAYING: 0x05, //游戏状态
    US_OFFLINE: 0x06, //掉线
    //桌子状态
    GAME_STATUS_FREE: 0, //空闲状态
    GAME_STATUS_PLAY: 100, //游戏状态
    GAME_STATUS_WAIT: 200, //等待状态
    //游戏结束原因
    GER_NORMAL: 0x00, //常规结束
    GER_DISMISS: 0x01, //游戏解散
    GER_USER_LEAVE: 0x02, //用户离开
    GER_NETWORK_ERROR: 0x03, //网络错误
    //游戏模式
    START_MODE_ALL_READY: 0x00, //所有准备
    START_MODE_FULL_READY: 0x01, //满人开始
    START_MODE_HUNDRED: 0x02, //百人游戏
    START_MODE_FISH: 0x04, //捕鱼
    START_MODE_ALL_READY_TABLECONFIG: 0x05, //准备到桌子配置的人数  //房卡类的可以配置桌子人数的
    //请求失败类型
    KICK_TYPE: 0x01, //踢人
    INVALID_CHAIR: 0xFFFF, //观战的人的座位号
    ONLINE_DEF_OFFLINE: 0, //下线
    ONLINE_DEF_ONLINE: 1, //上线
};
var UserStatus;
(function (UserStatus) {
    //玩家状态
    UserStatus[UserStatus["US_NULL"] = 0] = "US_NULL";
    UserStatus[UserStatus["US_FREE"] = 1] = "US_FREE";
    UserStatus[UserStatus["US_SIT"] = 2] = "US_SIT";
    UserStatus[UserStatus["US_READY"] = 3] = "US_READY";
    UserStatus[UserStatus["US_PLAYING"] = 5] = "US_PLAYING";
    UserStatus[UserStatus["US_OFFLINE"] = 6] = "US_OFFLINE";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["GAME_STATUS_FREE"] = 0] = "GAME_STATUS_FREE";
    GameStatus[GameStatus["GAME_STATUS_PLAY"] = 100] = "GAME_STATUS_PLAY";
    GameStatus[GameStatus["GAME_STATUS_WAIT"] = 200] = "GAME_STATUS_WAIT";
    GameStatus[GameStatus["GAME_STATUS_END"] = 300] = "GAME_STATUS_END";
})(GameStatus || (exports.GameStatus = GameStatus = {}));
//框架消息
exports.gameCMD = {
    //登入命令
    MDM_GR_LOGON: 1, //登入主命令
    //请求
    SUB_GR_LOGON_ACCOUNTS: 1, //帐号登入
    //返回
    SUB_GR_LOGON_SUCCESS: 100, //登录成功
    SUB_GR_LOGON_FAILURE: 101, //登录失败
    //用户命令
    MDM_GR_USER: 2, //用户主命令
    //请求
    SUB_GR_USER_SIT_DOWN: 1, //坐下命令
    SUB_GR_USER_STANDUP: 2, //起立命令
    //返回
    SUB_GR_USER_STATUS: 100, //用户状态
    SUB_GR_USER_ENTER: 101, //用户进入
    SUB_GR_USER_SCORE: 102, //用户分数
    SUB_GR_USER_ONLINE: 103, // 用户上线/掉线
    SUB_GR_USER_GOLD: 104, //用户金币
    //游戏命令
    MDM_GF_GAME: 3, //游戏主命令
    //框架命令
    MDM_GF_FRAME: 4, //框架主命令
    //用户命令
    SUB_GF_GAME_OPTION: 1, //游戏配置
    SUB_GF_USER_READY: 2, //用户准备
    SUB_GF_USER_CHAT: 3, //用户聊天
    SUB_GF_DISMISS_START: 4, //解散
    SUB_GF_DISMISS_AGREE: 5, //同意/不同意解散
    SUB_GF_DISMISS_END: 6, //结束解散
    SUB_GF_CMD_DIALOG: 7, //对话框通知命令
    SUB_GF_USE_ITEM: 8, //使用道具 item_id item_num chairID
    SUB_GF_CARD_RECORDER: 9, //获取记牌器数据
    SUB_GF_SYNC_USER_DATA: 10, //同步玩家数据
    SUB_GF_WIN_EXTRA_REWARD: 11, //胜利额外奖励(碎片) chairID reward
    SUB_GF_GAME_STATUS: 100, //游戏状态
    SUB_GF_GAME_SCENE: 101, //游戏场景
    SUB_GF_ROOM_INFO: 103, //房间信息
    SUB_GF_FORCE_CLOSE: 105, //强制关闭窗口
    SUB_GF_REQUEST_FAILURE: 106, //请求失败
    SUB_GF_TOAST_MSG: 108, //tip消息
    SUB_GF_FISH_NOTICE: 111, //捕鱼消息， 用于 同房间不同桌子之间的类似公告的通知， 放在框架这占个坑， 防止后面框架用于111
    SUB_GF_DO_DISMISS_GAME: 115, //房间已解散消息
    SUB_GF_DISMISS_GAME_FAILED: 116, //房间j解散失败
    SUB_GF_SEAT_CHANG: 117, //位置变动
};
//大厅事件
var EM_CorresCMD;
(function (EM_CorresCMD) {
    EM_CorresCMD["USER_SIT_DOWN"] = "UserSitDown";
    EM_CorresCMD["USER_STAND_UP"] = "UserStandUp";
    EM_CorresCMD["USER_STATUS"] = "UserStatus";
    EM_CorresCMD["USER_LEAVE"] = "UserLeave";
    EM_CorresCMD["WRITE_SCORE"] = "WriteScore";
    EM_CorresCMD["onUserOffline"] = "onUserOffline";
    EM_CorresCMD["onAdminJiesan"] = "onAdminJiesan";
    EM_CorresCMD["ModifyRoomControl"] = "ModifyRoomControl";
    EM_CorresCMD["GetRoomControl"] = "GetRoomControl";
    EM_CorresCMD["Recharge"] = "Recharge";
    // onUserRelogin = "onUserRelogin", //}
})(EM_CorresCMD || (exports.EM_CorresCMD = EM_CorresCMD = {}));
;
//内部流通的事件
exports.gameEvent = {
    EVENT_USER_STATUS: "user_status", //玩家状态
    EVENT_USER_SCORE: "user_score", //玩家分数
    EVENT_USER_GOLD: "user_gold", //玩家金币
    EVENT_ANDROID: "event_android" //机器人事件
};
exports.playerType = {
    TYPE_INVALID: -1, // 无效的类型
    TYPE_DEALER: 0, // 庄家
    TYPE_PLAYER: 1, // 真人闲家
    TYPE_ANDROID: 2 // 机器人闲家
};
exports.playerState = {
    STATE_INVALID: -1, // 无效状态
    STATE_IDLE: 0, // 等待状态
    STATE_PLAYING: 1, // 游戏状态
};
//游戏状态
exports.gameState = {
    BEGIN: "begin", //游戏开始
    PLAYING: "playing", //游戏种
    HUANPAI: "huanpai", //换牌
    DINGQUE: "dingque", //定缺
    IDLE: "idle", //空闲
};
