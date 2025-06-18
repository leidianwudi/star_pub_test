"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EM_USER_BEHAVIOR = exports.Rank_Limit = exports.Sex1Head = exports.Sex0Head = exports.EM_RANK_PRE = exports.EM_RANK_TYPE = exports.EM_EMAIL_SERI = exports.EM_ROBOT_STATUS = exports.EM_SYSNOTIFY_TYPE = exports.EM_LIMIT_TYPE = exports.EM_REDIS_CLIENT = exports.EM_CONFIG_ID = exports.EM_ITEM_ID = exports.EM_PAY_WAY = exports.EM_CURRENCY = exports.EM_TASK_BIG_TYPE = exports.EM_TASK_SMALL_TYPE = exports.ADD_ANDROID_NUM = exports.LEVEL_2_REWARD_CLUB = exports.LEVEL_1_REWARD_CLUB = exports.EM_TASK_STATE = exports.EM_GL_EVENT = exports.MONGO_OPEN = exports.USER_TYPE_ORM = exports.CONNECT_LIMIT = exports.DBSYNC_TIME = exports.TOKEN_EXPIRETIME = exports.md5Key = exports.APP_SECRET = exports.APP_ID = exports.EM_LOGINTYPE = exports.EM_CLUB_CMD = exports.EM_ROUTE = exports.moduleName = exports.USE_GLOBAL_CHANNEL = exports.MONGO = exports.DB = void 0;
exports.DB = "mysql_client";
exports.MONGO = "mongo_client";
exports.USE_GLOBAL_CHANNEL = false;
exports.moduleName = {
    userMod: "info", //用户资料
    userModGameID: "infoGameID", //用户资料
    signMod: "weekSign", //签到
    club: "club", //俱乐部
};
//服务端下推消息路由
var EM_ROUTE;
(function (EM_ROUTE) {
    EM_ROUTE["eRoute_Attr"] = "onAttr";
    EM_ROUTE["eRoute_Game"] = "onGame";
    EM_ROUTE["eRoute_SitDown"] = "UserSitdown";
    EM_ROUTE["eRoute_Leave"] = "onLeave";
    EM_ROUTE["eRoute_Club"] = "onCLub";
    EM_ROUTE["eRoute_Notify"] = "onNotify";
    EM_ROUTE["eRoute_WebNotice"] = "onWebNotice";
    EM_ROUTE["eRoute_Email"] = "onEmail";
    EM_ROUTE["eRoute_JackPot"] = "onJackPot";
})(EM_ROUTE || (exports.EM_ROUTE = EM_ROUTE = {}));
//俱乐部命令
var EM_CLUB_CMD;
(function (EM_CLUB_CMD) {
    EM_CLUB_CMD["eClubCmd_AddApply"] = "addApply";
    EM_CLUB_CMD["eClubCmd_Dismiss"] = "delete";
    EM_CLUB_CMD["eClubCmd_AddClub"] = "addClub";
    EM_CLUB_CMD["eClubCmd_BoxChange"] = "boxChange";
    EM_CLUB_CMD["eClubCmd_TableChange"] = "tableChange";
    EM_CLUB_CMD["eClubCmd_TableClose"] = "tableClose";
    EM_CLUB_CMD["eClubCmd_ClubInfoChange"] = "clubChange";
})(EM_CLUB_CMD || (exports.EM_CLUB_CMD = EM_CLUB_CMD = {}));
var EM_LOGINTYPE;
(function (EM_LOGINTYPE) {
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_Code"] = 1] = "eLoginType_Code";
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_Token"] = 2] = "eLoginType_Token";
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_Tourist"] = 3] = "eLoginType_Tourist";
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_Userid"] = 4] = "eLoginType_Userid";
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_UseridUUid"] = 5] = "eLoginType_UseridUUid";
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_WxSmall"] = 6] = "eLoginType_WxSmall";
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_FaceBook"] = 7] = "eLoginType_FaceBook";
    EM_LOGINTYPE[EM_LOGINTYPE["eLoginType_MobileCode"] = 8] = "eLoginType_MobileCode";
})(EM_LOGINTYPE || (exports.EM_LOGINTYPE = EM_LOGINTYPE = {}));
exports.APP_ID = "wx31515233ea11a7fa";
exports.APP_SECRET = "a13644b48d2d5a3e984f5a870cf3eabf";
exports.md5Key = "3cc4161f830895e8e91c1a9fe7aceef8";
exports.TOKEN_EXPIRETIME = 30 * 86400; //token时长设置 秒
exports.DBSYNC_TIME = 1000 * 30; //定期同步时间
//单个前端进程负载
exports.CONNECT_LIMIT = 5000;
//开启TYPE_ORM
exports.USER_TYPE_ORM = true;
//开启MONGO
exports.MONGO_OPEN = true;
//全局事件
var EM_GL_EVENT;
(function (EM_GL_EVENT) {
    EM_GL_EVENT["USER_ACROSS_THE_DAY"] = "USER_ACROSS_THE_DAY";
    EM_GL_EVENT["USER_ONLINET_TIME"] = "USER_ONLINET_TIME";
    EM_GL_EVENT["CLUB_BIND_FATHER"] = "CLUB_BIND_FATHER";
})(EM_GL_EVENT || (exports.EM_GL_EVENT = EM_GL_EVENT = {}));
//任务状态
var EM_TASK_STATE;
(function (EM_TASK_STATE) {
    EM_TASK_STATE[EM_TASK_STATE["HasGet"] = 0] = "HasGet";
    EM_TASK_STATE[EM_TASK_STATE["NoFinish"] = 1] = "NoFinish";
    EM_TASK_STATE[EM_TASK_STATE["CanGet"] = 2] = "CanGet";
})(EM_TASK_STATE || (exports.EM_TASK_STATE = EM_TASK_STATE = {}));
exports.LEVEL_1_REWARD_CLUB = 10; //1级推荐奖励
exports.LEVEL_2_REWARD_CLUB = 2; //2级推荐奖励
//启动添加机器人数量
exports.ADD_ANDROID_NUM = 0;
//任务子类型
var EM_TASK_SMALL_TYPE;
(function (EM_TASK_SMALL_TYPE) {
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_1"] = 1] = "task_1";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_2"] = 2] = "task_2";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_3"] = 3] = "task_3";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_4"] = 4] = "task_4";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_5"] = 5] = "task_5";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_6"] = 6] = "task_6";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_7"] = 7] = "task_7";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_8"] = 8] = "task_8";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_9"] = 9] = "task_9";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_10"] = 10] = "task_10";
    EM_TASK_SMALL_TYPE[EM_TASK_SMALL_TYPE["task_11"] = 11] = "task_11";
})(EM_TASK_SMALL_TYPE || (exports.EM_TASK_SMALL_TYPE = EM_TASK_SMALL_TYPE = {}));
/**
 * 任务大类型
 */
var EM_TASK_BIG_TYPE;
(function (EM_TASK_BIG_TYPE) {
    EM_TASK_BIG_TYPE[EM_TASK_BIG_TYPE["Day"] = 1] = "Day";
    EM_TASK_BIG_TYPE[EM_TASK_BIG_TYPE["Week"] = 2] = "Week";
})(EM_TASK_BIG_TYPE || (exports.EM_TASK_BIG_TYPE = EM_TASK_BIG_TYPE = {}));
/**
 * 支付币种
 */
var EM_CURRENCY;
(function (EM_CURRENCY) {
    EM_CURRENCY[EM_CURRENCY["US"] = 1] = "US";
    EM_CURRENCY[EM_CURRENCY["VDN"] = 2] = "VDN";
})(EM_CURRENCY || (exports.EM_CURRENCY = EM_CURRENCY = {}));
//支付渠道
var EM_PAY_WAY;
(function (EM_PAY_WAY) {
    EM_PAY_WAY["Google"] = "google_pay";
    EM_PAY_WAY["Apple"] = "appstore_pay";
})(EM_PAY_WAY || (exports.EM_PAY_WAY = EM_PAY_WAY = {}));
/**
 * 固定道具id代表啥
 */
var EM_ITEM_ID;
(function (EM_ITEM_ID) {
    EM_ITEM_ID[EM_ITEM_ID["Diamond"] = 1] = "Diamond";
    EM_ITEM_ID[EM_ITEM_ID["Gold"] = 2] = "Gold";
    EM_ITEM_ID[EM_ITEM_ID["Score"] = 3] = "Score";
    EM_ITEM_ID[EM_ITEM_ID["Thc"] = 4] = "Thc";
    EM_ITEM_ID[EM_ITEM_ID["Card"] = 1001] = "Card";
    EM_ITEM_ID[EM_ITEM_ID["Fragment"] = 1002] = "Fragment";
    EM_ITEM_ID[EM_ITEM_ID["Card_Recorder"] = 1003] = "Card_Recorder";
})(EM_ITEM_ID || (exports.EM_ITEM_ID = EM_ITEM_ID = {}));
/**
 * 全局表字段编号
 */
var EM_CONFIG_ID;
(function (EM_CONFIG_ID) {
    EM_CONFIG_ID[EM_CONFIG_ID["Debug"] = 0] = "Debug";
    EM_CONFIG_ID[EM_CONFIG_ID["AlmsDay"] = 10001] = "AlmsDay";
    EM_CONFIG_ID[EM_CONFIG_ID["AlmsLimit"] = 10002] = "AlmsLimit";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10016"] = 10016] = "e_10016";
    EM_CONFIG_ID[EM_CONFIG_ID["FirstAward"] = 10020] = "FirstAward";
    EM_CONFIG_ID[EM_CONFIG_ID["BigWinDay"] = 10100] = "BigWinDay";
    EM_CONFIG_ID[EM_CONFIG_ID["BigWinTotal"] = 10101] = "BigWinTotal";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10102"] = 10102] = "e_10102";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10103"] = 10103] = "e_10103";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10104"] = 10104] = "e_10104";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10105"] = 10105] = "e_10105";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10106"] = 10106] = "e_10106";
    EM_CONFIG_ID[EM_CONFIG_ID["WinExtraRewardDay"] = 10200] = "WinExtraRewardDay";
    EM_CONFIG_ID[EM_CONFIG_ID["WinExtraRewardTotal"] = 10201] = "WinExtraRewardTotal";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10202"] = 10202] = "e_10202";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10203"] = 10203] = "e_10203";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10204"] = 10204] = "e_10204";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10205"] = 10205] = "e_10205";
    EM_CONFIG_ID[EM_CONFIG_ID["GiveCntNomal"] = 10300] = "GiveCntNomal";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10301"] = 10301] = "e_10301";
    EM_CONFIG_ID[EM_CONFIG_ID["EmailExpire"] = 10310] = "EmailExpire";
    EM_CONFIG_ID[EM_CONFIG_ID["EmailMaxCount"] = 10311] = "EmailMaxCount";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10320"] = 10320] = "e_10320";
    EM_CONFIG_ID[EM_CONFIG_ID["e_10321"] = 10321] = "e_10321";
    EM_CONFIG_ID[EM_CONFIG_ID["SysnotifyItem"] = 10322] = "SysnotifyItem";
    EM_CONFIG_ID[EM_CONFIG_ID["ThcDayExchangeCnt"] = 10323] = "ThcDayExchangeCnt";
    EM_CONFIG_ID[EM_CONFIG_ID["ThcMinNeedGold"] = 10324] = "ThcMinNeedGold";
    // AI配置
    EM_CONFIG_ID[EM_CONFIG_ID["E_AI_BIGTYPE_PROBABILITY"] = 10401] = "E_AI_BIGTYPE_PROBABILITY";
    EM_CONFIG_ID[EM_CONFIG_ID["E_AI_BIGWIN_PROBABILITY"] = 10402] = "E_AI_BIGWIN_PROBABILITY";
    EM_CONFIG_ID[EM_CONFIG_ID["E_AI_GOLD_THRESHOLD"] = 10403] = "E_AI_GOLD_THRESHOLD";
    EM_CONFIG_ID[EM_CONFIG_ID["E_AI_ACTIVE_DAYS"] = 10404] = "E_AI_ACTIVE_DAYS";
})(EM_CONFIG_ID || (exports.EM_CONFIG_ID = EM_CONFIG_ID = {}));
/**
 * redis连接
 */
var EM_REDIS_CLIENT;
(function (EM_REDIS_CLIENT) {
    EM_REDIS_CLIENT["Default"] = "default";
    EM_REDIS_CLIENT["Rank"] = "rank";
})(EM_REDIS_CLIENT || (exports.EM_REDIS_CLIENT = EM_REDIS_CLIENT = {}));
/**
 * 限制类型
 */
var EM_LIMIT_TYPE;
(function (EM_LIMIT_TYPE) {
    EM_LIMIT_TYPE[EM_LIMIT_TYPE["Day"] = 1] = "Day";
    EM_LIMIT_TYPE[EM_LIMIT_TYPE["Total"] = 2] = "Total";
})(EM_LIMIT_TYPE || (exports.EM_LIMIT_TYPE = EM_LIMIT_TYPE = {}));
//走马灯类型
var EM_SYSNOTIFY_TYPE;
(function (EM_SYSNOTIFY_TYPE) {
    EM_SYSNOTIFY_TYPE[EM_SYSNOTIFY_TYPE["Sys"] = 1] = "Sys";
    EM_SYSNOTIFY_TYPE[EM_SYSNOTIFY_TYPE["User"] = 2] = "User";
})(EM_SYSNOTIFY_TYPE || (exports.EM_SYSNOTIFY_TYPE = EM_SYSNOTIFY_TYPE = {}));
/**
 * 机器人状态
 */
var EM_ROBOT_STATUS;
(function (EM_ROBOT_STATUS) {
    EM_ROBOT_STATUS[EM_ROBOT_STATUS["Free"] = 0] = "Free";
    EM_ROBOT_STATUS[EM_ROBOT_STATUS["Used"] = 1] = "Used";
    EM_ROBOT_STATUS[EM_ROBOT_STATUS["Siting"] = 2] = "Siting";
})(EM_ROBOT_STATUS || (exports.EM_ROBOT_STATUS = EM_ROBOT_STATUS = {}));
/**
 * 邮件编号
 */
var EM_EMAIL_SERI;
(function (EM_EMAIL_SERI) {
    EM_EMAIL_SERI[EM_EMAIL_SERI["GiveGold"] = 10001] = "GiveGold";
    EM_EMAIL_SERI[EM_EMAIL_SERI["RankUseCard"] = 10002] = "RankUseCard";
    EM_EMAIL_SERI[EM_EMAIL_SERI["Exchange"] = 10003] = "Exchange";
})(EM_EMAIL_SERI || (exports.EM_EMAIL_SERI = EM_EMAIL_SERI = {}));
var EM_RANK_TYPE;
(function (EM_RANK_TYPE) {
    EM_RANK_TYPE[EM_RANK_TYPE["useCardCnt"] = 0] = "useCardCnt";
})(EM_RANK_TYPE || (exports.EM_RANK_TYPE = EM_RANK_TYPE = {}));
/**
 * 排行版redis前缀
 */
var EM_RANK_PRE;
(function (EM_RANK_PRE) {
    EM_RANK_PRE["RankSeason"] = "RankSeason_";
})(EM_RANK_PRE || (exports.EM_RANK_PRE = EM_RANK_PRE = {}));
exports.Sex0Head = "https://res.funnytl.com/robotHead/head_nv.png";
exports.Sex1Head = "https://res.funnytl.com/robotHead/head_nan.png";
exports.Rank_Limit = 100;
// 玩家行为日志
var EM_USER_BEHAVIOR;
(function (EM_USER_BEHAVIOR) {
    EM_USER_BEHAVIOR[EM_USER_BEHAVIOR["login"] = 10] = "login";
    EM_USER_BEHAVIOR[EM_USER_BEHAVIOR["logout"] = 20] = "logout";
})(EM_USER_BEHAVIOR || (exports.EM_USER_BEHAVIOR = EM_USER_BEHAVIOR = {}));
