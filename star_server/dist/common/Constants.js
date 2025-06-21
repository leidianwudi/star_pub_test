"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameNames = exports.SLOT_ROUND_LIMIT = exports.TEST_ROLE_NAME = exports.GameType = exports.LOBBY = void 0;
exports.getGameName = getGameName;
//在以下接口lobby服务被当作一种特殊的game服务
//推送消息，获取跑马灯)
exports.LOBBY = "lobby";
var GameType;
(function (GameType) {
    //已被删除
    GameType["SLOT4"] = "slots4";
    GameType["SEAKING"] = "seaking";
    GameType["DRAGON"] = "slots_dragon";
    GameType["BILLIARDS"] = "billiards";
    GameType["TANK"] = "tank";
    GameType["GOMOKU"] = "gomoku";
    GameType["CHINESE_FORTUNE"] = "chinese_fortune";
    GameType["TEST"] = "test";
    //捕鱼达人
    GameType["FISH_MASTER"] = "fish_master";
    //鲨鱼
    GameType["FISH_SHARK"] = "fish_shark";
    //鲸鱼
    GameType["FISH_WHALE"] = "fish_whale";
    GameType["SLOTS_MOUSE"] = "slots_mouse";
    GameType["SLOTS_DRAGON"] = "slots_dragon";
    GameType["SLOTS_OX"] = "slots_ox";
    GameType["SLOTS_TIGER"] = "slots_tiger";
    GameType["SLOTS_RABBIT"] = "slots_rabbit";
    GameType["SLOTS_KYLIN"] = "slots_kylin";
    GameType["SLOTS_UNICORN"] = "slots_unicorn";
    //小龙
    GameType["SLOTS_LOONG"] = "slots_loong";
    //slots泼水节
    GameType["SLOTS_SONGKRAN"] = "slots_songkran";
    GameType["SLOTS_PANDA"] = "slots_panda";
    //冰火双娇
    GameType["SLOTS_ICEANDFIRE"] = "slots_iceandfire";
    //牛牛
    GameType["POKER_NIUNIU"] = "poker_niuniu";
    //越南斗地主
    GameType["POKER_PDK_YUENAN"] = "poker_pdk_yuenan";
    //寻龙探宝
    GameType["SLOTS_DRAGONHATCH"] = "slots_dragonhatch";
    //亡灵大盗
    GameType["SLOTS_WILDBANDITO"] = "slots_wildBandito";
    //双喜临门
    GameType["SLOTS_DOUBLEFORTUNE"] = "slots_doublefortune";
    //象财神
    GameType["SLOTS_GANESHAGOLD"] = "slots_ganeshagold";
    //双喜临门
    GameType["SLOTS_DOUBLE_HAPPY"] = "slots_double_happy";
    //麻将
    GameType["SLOTS_MJWAYS"] = "slots_mjways";
    //麻将2
    GameType["SLOTS_MJWAYS2"] = "slots_mjways2";
    //越南快跑
    GameType["TIENLEN"] = "poker_tienlen_yn";
    //bingo 青蛙
    GameType["BINGO_FROG"] = "bingo_frog";
    //德州扑克
    GameType["HOLDEM"] = "poker_holdem";
    //牛牛扑克
    GameType["NIUNIU"] = "poker_niuniu";
    GameType["NIUNIU_1"] = "poker_niuniu:1";
})(GameType || (exports.GameType = GameType = {}));
exports.TEST_ROLE_NAME = "_dangerous_test_";
exports.SLOT_ROUND_LIMIT = 40;
exports.gameNames = [
    {
        "id": 1,
        "sort": 1,
        "type_code": "slots",
        "code": "slots_dragonhatch",
        "name": "寻龙探宝",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 7,
        "sort": 1,
        "type_code": "slots",
        "code": "slots_dragonhatch",
        "name": "寻龙探宝",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 1,
        "sort": 1,
        "type_code": "slots",
        "code": "slots_mouse",
        "name": "幸运鼠",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 2,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_ox",
        "name": "幸运牛",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 3,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_tiger",
        "name": "幸运虎",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 4,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_rabbit",
        "name": "幸运兔",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 5,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_dragon",
        "name": "幸运龙",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 6,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_songkran",
        "name": "泼水节",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 8,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_wildBandito",
        "name": "亡灵大盗",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 9,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_iceandfire",
        "name": "冰火双娇",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 10,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_double_happy",
        "name": "双喜临门",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 11,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_ganeshagold",
        "name": "象财神",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 12,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_mjways",
        "name": "麻将",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 13,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_mjways2",
        "name": "麻将2",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 14,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_kylin",
        "name": "麒麟",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 15,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_unicorn",
        "name": "独角兽",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 16,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_panda",
        "name": "熊猫大转盘",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 17,
        "sort": 0,
        "type_code": "slots",
        "code": "slots_loong",
        "name": "弹珠龙",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 18,
        "sort": 0,
        "type_code": "poker",
        "code": "poker_niuniu",
        "name": "牛牛",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 19,
        "sort": 0,
        "type_code": "poker",
        "code": "poker_tienlen_yn",
        "name": "越南跑得快",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 20,
        "sort": 0,
        "type_code": "poker",
        "code": "poker_holdem",
        "name": "德州扑克",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 21,
        "sort": 0,
        "type_code": "fish",
        "code": "fish_master",
        "name": "捕鱼达人",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 22,
        "sort": 0,
        "type_code": "fish",
        "code": "fish_shark",
        "name": "深海捕鱼",
        "icon_path": "",
        "desc": ""
    },
    {
        "id": 23,
        "sort": 0,
        "type_code": "fish",
        "code": "fish_whale",
        "name": "龙王捕鱼",
        "icon_path": "",
        "desc": ""
    }
];
function getGameName(typeCode, code) {
    let g = exports.gameNames.find((r) => r.type_code == typeCode && r.code == code);
    if (g) {
        return g.name;
    }
    return undefined;
}
