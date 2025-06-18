"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findGameChinaName = exports.TienlenTimesCfg = exports.GameCfg = exports.EM_MODULE_ID = exports.EM_CHIP_TYPE = exports.EM_ROOM_TYPE = exports.USE_DEBUG = void 0;
exports.USE_DEBUG = false;
// 创建房间模式
var EM_ROOM_TYPE;
(function (EM_ROOM_TYPE) {
    EM_ROOM_TYPE[EM_ROOM_TYPE["eRoomType_FREE"] = 0] = "eRoomType_FREE";
    EM_ROOM_TYPE[EM_ROOM_TYPE["eRoomType_OWNER"] = 1] = "eRoomType_OWNER";
    EM_ROOM_TYPE[EM_ROOM_TYPE["eRoomType_AA"] = 2] = "eRoomType_AA";
    EM_ROOM_TYPE[EM_ROOM_TYPE["eRoomType_WINNER"] = 3] = "eRoomType_WINNER";
    EM_ROOM_TYPE[EM_ROOM_TYPE["eRoomType_CLUB"] = 4] = "eRoomType_CLUB";
})(EM_ROOM_TYPE || (exports.EM_ROOM_TYPE = EM_ROOM_TYPE = {}));
// 筹码类型
var EM_CHIP_TYPE;
(function (EM_CHIP_TYPE) {
    EM_CHIP_TYPE[EM_CHIP_TYPE["eScore"] = 1] = "eScore";
    EM_CHIP_TYPE[EM_CHIP_TYPE["eGold"] = 2] = "eGold";
})(EM_CHIP_TYPE || (exports.EM_CHIP_TYPE = EM_CHIP_TYPE = {}));
var EM_MODULE_ID;
(function (EM_MODULE_ID) {
    EM_MODULE_ID[EM_MODULE_ID["eModID_510K"] = 1] = "eModID_510K";
    EM_MODULE_ID[EM_MODULE_ID["eModID_FZMJ"] = 2] = "eModID_FZMJ";
    EM_MODULE_ID[EM_MODULE_ID["eModID_GDY"] = 3] = "eModID_GDY";
    EM_MODULE_ID[EM_MODULE_ID["eModID_13SHUI"] = 4] = "eModID_13SHUI";
    EM_MODULE_ID[EM_MODULE_ID["eModID_HZMJ"] = 5] = "eModID_HZMJ";
    EM_MODULE_ID[EM_MODULE_ID["eModID_NIIUNIU"] = 6] = "eModID_NIIUNIU";
    EM_MODULE_ID[EM_MODULE_ID["eModID_SANGONG"] = 7] = "eModID_SANGONG";
    EM_MODULE_ID[EM_MODULE_ID["eModID_DZ"] = 8] = "eModID_DZ";
    EM_MODULE_ID[EM_MODULE_ID["eModID_XUEZHAN"] = 9] = "eModID_XUEZHAN";
    EM_MODULE_ID[EM_MODULE_ID["eModID_XUELIU"] = 10] = "eModID_XUELIU";
    EM_MODULE_ID[EM_MODULE_ID["eModID_XLCHHZ"] = 11] = "eModID_XLCHHZ";
    EM_MODULE_ID[EM_MODULE_ID["eModID_TIENLEN"] = 12] = "eModID_TIENLEN";
})(EM_MODULE_ID || (exports.EM_MODULE_ID = EM_MODULE_ID = {}));
//房间模式(0=所有准备,1=椅子坐满且全准备则开始 ,2=百人游戏),最大桌子数,最大椅子数
exports.GameCfg = {
    "12": {
        "1": {
            roomCard: true, //是否房卡
            moduleID: EM_MODULE_ID.eModID_TIENLEN,
            roomID: 1,
            moduleEnName: 'tienlen',
            moduleName: "跑得快",
            GameMode: 1,
            TableCount: 1000,
            ChairCount: 4,
            // debug 模式下需要配置
            AndroidNum: 0, //单机启动安卓数量
            presetAndroidCount: 0, //预设机器人数量
            androidScoreBase: 100000, //机器人基准分
            defaultTableSetting: {
                createRoomType: EM_ROOM_TYPE.eRoomType_OWNER, // 开房模式
                chipType: EM_CHIP_TYPE.eScore, // 筹码类型
                playerCount: 4,
                createUserID: 1, // 创始人ID
                bet: 1000, // 投注
                roomCode: 111111,
                juShu: 8, // 局数
                settlementType: 1, // 计分方法
                roomID: 1,
                cardRecorder: false, // 默认不开启记牌器
                enterScore: 100000, // 入场限制
                maxScore: 0, // 最大限制
                startConsume: 1000, // 抽水
            },
            verifyTableSetting: {
                playerCount: [2, 3, 4],
                createRoomType: [1, 2, 3],
                juShu: [8, 16, 32],
                settlementType: [1, 2], //1:记牌数, 2:1赢3
                cardRecorder: [true, false, 1, 2, 0]
            }
        },
        "2": {
            roomCard: false, //是否房卡
            moduleID: EM_MODULE_ID.eModID_TIENLEN,
            roomID: 2,
            moduleEnName: 'tienlen',
            moduleName: "跑得快",
            GameMode: 1,
            TableCount: 1000,
            ChairCount: 4,
            // debug 模式下需要配置
            AndroidNum: 0, //单机启动安卓数量
            presetAndroidCount: 300, //预设机器人数量
            enterScore: 0, //进入房间分数
            maxScore: 0, //最大分数
            androidScoreBase: 100000, //机器人基准分
            defaultTableSetting: {
                createRoomType: EM_ROOM_TYPE.eRoomType_FREE, // 开房模式
                chipType: EM_CHIP_TYPE.eGold, // 筹码类型
                playerCount: 4,
                createUserID: 0, // 创始人ID
                roomCode: 0,
                juShu: 0, // 局数
                roomID: 2,
                cardRecorder: false, // 默认不开启记牌器
                bet: 500, // 投注
                settlementType: 1, // 计分方法
                enterScore: 3500, // 入场限制
                maxScore: 8e4, // 最大限制
                startConsume: 500, // 抽水
            }
        }
    }
};
exports.TienlenTimesCfg = {
    "1": {
        "1": {
            spade2: 3,
            club2: 3,
            diamond2: 6,
            heart2: 6,
            pairs3: 9,
            four: 12,
            pairs4: 15,
            frozen: 2
        },
        "2": {
            spade2: 1,
            club2: 1,
            diamond2: 2,
            heart2: 2,
            pairs3: 3,
            four: 4,
            pairs4: 5,
            frozen: 2
        }
    },
    "2": {
        "1": {
            spade2: 3,
            club2: 3,
            diamond2: 6,
            heart2: 6,
            pairs3: 9,
            four: 12,
            pairs4: 15,
            frozen: 2
        },
        "2": {
            spade2: 1,
            club2: 1,
            diamond2: 2,
            heart2: 2,
            pairs3: 3,
            four: 4,
            pairs4: 5,
            frozen: 2
        }
    },
    "3": {
        "1": {
            spade2: 3,
            club2: 3,
            diamond2: 6,
            heart2: 6,
            pairs3: 9,
            four: 12,
            pairs4: 15,
            frozen: 2
        },
        "2": {
            spade2: 1,
            club2: 1,
            diamond2: 2,
            heart2: 2,
            pairs3: 3,
            four: 4,
            pairs4: 5,
            frozen: 2
        }
    }
};
//英文名对应中文名
let findGameChinaName = function (moduleEnName) {
    let cfg = exports.GameCfg;
    for (let moduleID in cfg) {
        let rooms = cfg[moduleID];
        for (let roomID in rooms) {
            if (rooms[roomID].moduleEnName === moduleEnName) {
                return rooms[roomID].moduleName;
            }
        }
    }
    return "无";
};
exports.findGameChinaName = findGameChinaName;
