"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProto = void 0;
exports.serviceProto = {
    "version": 119,
    "services": [
        {
            "id": 0,
            "name": "billiards/AdjustCue",
            "type": "msg"
        },
        {
            "id": 1,
            "name": "billiards/BallsDataSync",
            "type": "msg"
        },
        {
            "id": 2,
            "name": "billiards/GameBeginPush",
            "type": "msg"
        },
        {
            "id": 3,
            "name": "billiards/GameDataChangedPush",
            "type": "msg"
        },
        {
            "id": 4,
            "name": "billiards/GameDataSyncPush",
            "type": "msg"
        },
        {
            "id": 5,
            "name": "billiards/GameOverPush",
            "type": "msg"
        },
        {
            "id": 6,
            "name": "billiards/HitBall",
            "type": "msg"
        },
        {
            "id": 7,
            "name": "billiards/HitBallComplete",
            "type": "msg"
        },
        {
            "id": 8,
            "name": "billiards/PlayerComesPush",
            "type": "msg"
        },
        {
            "id": 9,
            "name": "billiards/PlayerDataChangedPush",
            "type": "msg"
        },
        {
            "id": 10,
            "name": "billiards/PlayerLeavesPush",
            "type": "msg"
        },
        {
            "id": 11,
            "name": "chat/Chat",
            "type": "msg"
        },
        {
            "id": 12,
            "name": "chat/SendChat",
            "type": "api",
            "conf": {}
        },
        {
            "id": 101,
            "name": "fish/Fire",
            "type": "msg"
        },
        {
            "id": 104,
            "name": "fish/FireResult",
            "type": "msg"
        },
        {
            "id": 95,
            "name": "fish/FishDead",
            "type": "msg"
        },
        {
            "id": 102,
            "name": "fish/FishWave",
            "type": "msg"
        },
        {
            "id": 96,
            "name": "fish/HitFish",
            "type": "msg"
        },
        {
            "id": 97,
            "name": "fish/NewFish",
            "type": "msg"
        },
        {
            "id": 103,
            "name": "fish/NewFishGroup",
            "type": "msg"
        },
        {
            "id": 99,
            "name": "fish/RoomFish",
            "type": "msg"
        },
        {
            "id": 105,
            "name": "fish/FishConfig",
            "type": "api"
        },
        {
            "id": 92,
            "name": "game/Push",
            "type": "msg"
        },
        {
            "id": 89,
            "name": "game/AuthClient",
            "type": "api"
        },
        {
            "id": 13,
            "name": "gomoku/GameBeginPush",
            "type": "msg"
        },
        {
            "id": 14,
            "name": "gomoku/GameDataChangedPush",
            "type": "msg"
        },
        {
            "id": 15,
            "name": "gomoku/GameDataSyncPush",
            "type": "msg"
        },
        {
            "id": 16,
            "name": "gomoku/GameOverPush",
            "type": "msg"
        },
        {
            "id": 17,
            "name": "gomoku/PlacePiecePush",
            "type": "msg"
        },
        {
            "id": 18,
            "name": "gomoku/PlayerComesPush",
            "type": "msg"
        },
        {
            "id": 19,
            "name": "gomoku/PlayerDataChangedPush",
            "type": "msg"
        },
        {
            "id": 20,
            "name": "gomoku/PlayerLeavesPush",
            "type": "msg"
        },
        {
            "id": 21,
            "name": "gomoku/PlacePiece",
            "type": "api",
            "conf": {}
        },
        {
            "id": 122,
            "name": "holdem/Action",
            "type": "msg"
        },
        {
            "id": 123,
            "name": "holdem/Deal",
            "type": "msg"
        },
        {
            "id": 126,
            "name": "holdem/GameOver",
            "type": "msg"
        },
        {
            "id": 129,
            "name": "holdem/GameStart",
            "type": "msg"
        },
        {
            "id": 127,
            "name": "holdem/Play",
            "type": "msg"
        },
        {
            "id": 131,
            "name": "holdem/PlayResult",
            "type": "msg"
        },
        {
            "id": 130,
            "name": "holdem/Resume",
            "type": "msg"
        },
        {
            "id": 128,
            "name": "holdem/RoomHoldem",
            "type": "msg"
        },
        {
            "id": 22,
            "name": "lobby/mail/ClearAllMails",
            "type": "api"
        },
        {
            "id": 23,
            "name": "lobby/mail/DeleteMail",
            "type": "api"
        },
        {
            "id": 24,
            "name": "lobby/mail/GetMails",
            "type": "api"
        },
        {
            "id": 25,
            "name": "lobby/mail/MarkAllAsRead",
            "type": "api"
        },
        {
            "id": 26,
            "name": "lobby/mail/MarkAsRead",
            "type": "api"
        },
        {
            "id": 75,
            "name": "lobby/Auth",
            "type": "api"
        },
        {
            "id": 28,
            "name": "lobby/CancelMatch",
            "type": "api"
        },
        {
            "id": 76,
            "name": "lobby/CreateRole",
            "type": "api"
        },
        {
            "id": 65,
            "name": "lobby/CreateRoom",
            "type": "api"
        },
        {
            "id": 31,
            "name": "lobby/GetAnnouncement",
            "type": "api"
        },
        {
            "id": 77,
            "name": "lobby/GetBasicConfig",
            "type": "api",
            "conf": {}
        },
        {
            "id": 32,
            "name": "lobby/GetNotice",
            "type": "api"
        },
        {
            "id": 66,
            "name": "lobby/GetRoomList",
            "type": "api"
        },
        {
            "id": 33,
            "name": "lobby/GetUserInfo",
            "type": "api"
        },
        {
            "id": 36,
            "name": "lobby/ModifyUserInfo",
            "type": "api"
        },
        {
            "id": 37,
            "name": "lobby/StartMatch",
            "type": "api"
        },
        {
            "id": 72,
            "name": "lobby/TryEnterRoom",
            "type": "api"
        },
        {
            "id": 148,
            "name": "lobby/UpdateUserInfo",
            "type": "api"
        },
        {
            "id": 39,
            "name": "login/Login",
            "type": "api"
        },
        {
            "id": 40,
            "name": "login/Register",
            "type": "api"
        },
        {
            "id": 62,
            "name": "Ping",
            "type": "msg"
        },
        {
            "id": 78,
            "name": "Pong",
            "type": "msg"
        },
        {
            "id": 132,
            "name": "niuniu/GameOver",
            "type": "msg"
        },
        {
            "id": 141,
            "name": "niuniu/GameStart",
            "type": "msg"
        },
        {
            "id": 146,
            "name": "niuniu/Go",
            "type": "msg"
        },
        {
            "id": 133,
            "name": "niuniu/Play",
            "type": "msg"
        },
        {
            "id": 144,
            "name": "niuniu/PlayerQiangZhuang",
            "type": "msg"
        },
        {
            "id": 142,
            "name": "niuniu/PlayerTanPai",
            "type": "msg"
        },
        {
            "id": 134,
            "name": "niuniu/QiangZhuang",
            "type": "msg"
        },
        {
            "id": 135,
            "name": "niuniu/RandomZhuang",
            "type": "msg"
        },
        {
            "id": 147,
            "name": "niuniu/Reset",
            "type": "msg"
        },
        {
            "id": 136,
            "name": "niuniu/Resume",
            "type": "msg"
        },
        {
            "id": 143,
            "name": "niuniu/RoomNiuNiu",
            "type": "msg"
        },
        {
            "id": 145,
            "name": "niuniu/Showdown",
            "type": "msg"
        },
        {
            "id": 137,
            "name": "niuniu/TanPai",
            "type": "msg"
        },
        {
            "id": 139,
            "name": "niuniu/UserXiaZhu",
            "type": "msg"
        },
        {
            "id": 140,
            "name": "niuniu/XiaZhu",
            "type": "msg"
        },
        {
            "id": 120,
            "name": "room/ClientReady",
            "type": "msg"
        },
        {
            "id": 79,
            "name": "room/RoomClosed",
            "type": "msg"
        },
        {
            "id": 80,
            "name": "room/RoomDataChangedPush",
            "type": "msg"
        },
        {
            "id": 81,
            "name": "room/RoomDataSyncPush",
            "type": "msg"
        },
        {
            "id": 82,
            "name": "room/RoomDismissedPush",
            "type": "msg"
        },
        {
            "id": 83,
            "name": "room/UserComesToRoomPush",
            "type": "msg"
        },
        {
            "id": 84,
            "name": "room/UserDataChangedPush",
            "type": "msg"
        },
        {
            "id": 85,
            "name": "room/UserInfoChangedPush",
            "type": "msg"
        },
        {
            "id": 118,
            "name": "room/UserJoin",
            "type": "msg"
        },
        {
            "id": 86,
            "name": "room/UserLeavesFromRoomPush",
            "type": "msg"
        },
        {
            "id": 119,
            "name": "room/UserReady",
            "type": "msg"
        },
        {
            "id": 87,
            "name": "room/ExitRoom",
            "type": "api",
            "conf": {}
        },
        {
            "id": 91,
            "name": "room/JoinGame",
            "type": "api"
        },
        {
            "id": 88,
            "name": "room/Ready",
            "type": "api",
            "conf": {}
        },
        {
            "id": 121,
            "name": "slots/PlayMatch3",
            "type": "api"
        },
        {
            "id": 93,
            "name": "slots/PlaySlots",
            "type": "api"
        },
        {
            "id": 51,
            "name": "tank/GameBeginPush",
            "type": "msg"
        },
        {
            "id": 52,
            "name": "tank/GameDataChangedPush",
            "type": "msg"
        },
        {
            "id": 53,
            "name": "tank/GameDataSyncPush",
            "type": "msg"
        },
        {
            "id": 54,
            "name": "tank/GameOverPush",
            "type": "msg"
        },
        {
            "id": 55,
            "name": "tank/PlayerComesPush",
            "type": "msg"
        },
        {
            "id": 56,
            "name": "tank/PlayerDataChangedPush",
            "type": "msg"
        },
        {
            "id": 57,
            "name": "tank/PlayerLeavesPush",
            "type": "msg"
        },
        {
            "id": 58,
            "name": "tank/TankAttack",
            "type": "msg"
        },
        {
            "id": 59,
            "name": "tank/TankDataChange",
            "type": "msg"
        },
        {
            "id": 60,
            "name": "tank/TankShoot",
            "type": "msg"
        },
        {
            "id": 116,
            "name": "tienlen/BombScore",
            "type": "msg"
        },
        {
            "id": 114,
            "name": "tienlen/GameEnd",
            "type": "msg"
        },
        {
            "id": 113,
            "name": "tienlen/GameStart",
            "type": "msg"
        },
        {
            "id": 111,
            "name": "tienlen/Pass",
            "type": "msg"
        },
        {
            "id": 112,
            "name": "tienlen/PassPlayer",
            "type": "msg"
        },
        {
            "id": 107,
            "name": "tienlen/Play",
            "type": "msg"
        },
        {
            "id": 115,
            "name": "tienlen/RoomInfo",
            "type": "msg"
        },
        {
            "id": 117,
            "name": "tienlen/RoomScore",
            "type": "msg"
        },
        {
            "id": 108,
            "name": "tienlen/Trusteeship",
            "type": "msg"
        },
        {
            "id": 109,
            "name": "tienlen/TrusteeshipStatus",
            "type": "msg"
        },
        {
            "id": 110,
            "name": "tienlen/TurnPlayer",
            "type": "msg"
        }
    ],
    "types": {
        "billiards/MsgAdjustCue/MsgAdjustCue": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "power",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "z",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "direction",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "z",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "billiards/MsgBallsDataSync/MsgBallsDataSync": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ballsData",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "ballsPosData",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Number"
                                    }
                                }
                            },
                            {
                                "id": 1,
                                "name": "ballsQuatData",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Number"
                                    }
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "newPocketedBalls",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "gameOver",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "billiards/MsgGameBeginPush/MsgGameBeginPush": {
            "type": "Interface"
        },
        "billiards/MsgGameDataChangedPush/MsgGameDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "currentPlayer",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "ballsData",
                    "type": {
                        "type": "Reference",
                        "target": "billiards/BilliardsTypeDef/IBilliardsBallsData"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "order",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "cueDir",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "z",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "billiards/BilliardsTypeDef/IBilliardsBallsData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ballsPosData",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "ballsQuatData",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "billiards/MsgGameDataSyncPush/MsgGameDataSyncPush": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "billiards/BilliardsTypeDef/IBilliardsGameData"
                    }
                }
            ]
        },
        "billiards/BilliardsTypeDef/IBilliardsGameData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "billiards/BilliardsTypeDef/IBilliardsPlayer"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "currentPlayer",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "ballsData",
                    "type": {
                        "type": "Reference",
                        "target": "billiards/BilliardsTypeDef/IBilliardsBallsData"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "curDirection",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "z",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "billiards/BilliardsTypeDef/IBilliardsPlayer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "pocketedBalls",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "billiards/MsgGameOverPush/MsgGameOverPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "winner",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "reason",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "billiards/MsgHitBall/MsgHitBall": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ballsData",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "ballsPosData",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Number"
                                    }
                                }
                            },
                            {
                                "id": 1,
                                "name": "ballsQuatData",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Number"
                                    }
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "hitImpulse",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "z",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "order",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "billiards/MsgHitBallComplete/MsgHitBallComplete": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ballsData",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "ballsPosData",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Number"
                                    }
                                }
                            },
                            {
                                "id": 1,
                                "name": "ballsQuatData",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Number"
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "hitImpulse",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "order",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "nextPlayer",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "gameOver",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "billiards/MsgPlayerComesPush/MsgPlayerComesPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "player",
                    "type": {
                        "type": "Reference",
                        "target": "billiards/BilliardsTypeDef/IBilliardsPlayer"
                    }
                }
            ]
        },
        "billiards/MsgPlayerDataChangedPush/MsgPlayerDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "pocketedBalls",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    },
                    "optional": true
                }
            ]
        },
        "billiards/MsgPlayerLeavesPush/MsgPlayerLeavesPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "chat/MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../../types/UserInfo/UserInfo"
                    }
                },
                {
                    "id": 2,
                    "name": "channel",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../../types/UserInfo/UserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "visualId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "gender",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "introduction",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "coin",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "chat/PtlSendChat/ReqSendChat": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "channel",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../base/BaseRequest": {
            "type": "Interface"
        },
        "chat/PtlSendChat/ResSendChat": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseResponse"
                    }
                }
            ]
        },
        "../base/BaseResponse": {
            "type": "Interface"
        },
        "fish/MsgFire/MsgFire": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bulletId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "bulletLevel",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "fish/MsgFireResult/MsgFireResult": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bulletId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "bulletLevel",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "isSuccess",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "coins",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "spentCoins",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "reason",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "fish/MsgFishDead/MsgFishDead": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "coins",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "incrementCoins",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "fish/MsgFishWave/MsgFishWave": {
            "type": "Interface"
        },
        "fish/MsgHitFish/MsgHitFish": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "fishId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "bulletId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "bulletLevel",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "fish/MsgNewFish/MsgNewFish": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "liveTimestamp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "fish/MsgNewFishGroup/MsgNewFishGroup": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "groupId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "startId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "fishCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "liveTimestamp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "fishes",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "fish/Fish/Fish"
                        }
                    }
                }
            ]
        },
        "fish/Fish/Fish": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "liveTimestamp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "fish/MsgRoomFish/MsgRoomFish": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "fishes",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "fish/Fish/Fish"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "bullets",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "fish/Fish/Bullet"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "lastBulletId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "fish/Fish/Bullet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "bulletLevel",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "fish/PtlFishConfig/ReqFishConfig": {
            "type": "Interface"
        },
        "fish/PtlFishConfig/ResFishConfig": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bullets",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "fish/PtlFishConfig/BulletConfig"
                        }
                    }
                }
            ]
        },
        "fish/PtlFishConfig/BulletConfig": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bulletLevel",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "needGolds",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "game/MsgPush/MsgPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "game/PtlAuthClient/ReqAuthClient": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "sign",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "gameType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "roleName",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "subType",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "game/PtlAuthClient/ResAuthClient": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../../types/UserInfo/UserInfo"
                    }
                }
            ]
        },
        "gomoku/MsgGameBeginPush/MsgGameBeginPush": {
            "type": "Interface"
        },
        "gomoku/MsgGameDataChangedPush/MsgGameDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "currentPlayer",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "isPlaying",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "boardData",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint32Array"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "gridData",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "gridX",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "gridY",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "value",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "gomoku/MsgGameDataSyncPush/MsgGameDataSyncPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Reference",
                        "target": "gomoku/GomokuTypeDef/IGomokuGameData"
                    }
                }
            ]
        },
        "gomoku/GomokuTypeDef/IGomokuGameData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "gomoku/GomokuTypeDef/IGomokuPlayer"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "currentPlayer",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "boardData",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint32Array"
                    },
                    "optional": true
                }
            ]
        },
        "gomoku/GomokuTypeDef/IGomokuPlayer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "color",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "gomoku/MsgGameOverPush/MsgGameOverPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "winner",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "gomoku/MsgPlacePiecePush/MsgPlacePiecePush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "gridX",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "gridY",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "value",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "gomoku/MsgPlayerComesPush/MsgPlayerComesPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "player",
                    "type": {
                        "type": "Reference",
                        "target": "gomoku/GomokuTypeDef/IGomokuPlayer"
                    }
                }
            ]
        },
        "gomoku/MsgPlayerDataChangedPush/MsgPlayerDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "color",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "gomoku/MsgPlayerLeavesPush/MsgPlayerLeavesPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "gomoku/PtlPlacePiece/ReqPlacePiece": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "gridX",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "gridY",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "gomoku/PtlPlacePiece/ResPlacePiece": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseResponse"
                    }
                }
            ]
        },
        "holdem/MsgAction/MsgAction": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "round",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "pot",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "action",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "round_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "game_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "hand_card",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "cur_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "can_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 14,
                    "name": "min_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 10,
                    "name": "can_check",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 15,
                    "name": "can_call",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 11,
                    "name": "call",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 16,
                    "name": "can_raise",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 12,
                    "name": "min_raise",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 13,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 17,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "holdem/MsgDeal/MsgDeal": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "card_ids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "card_type",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "holdem/MsgGameOver/MsgGameOver": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "cur_gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 0,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "holdem/MsgGameOver/Player"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "comm_ids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "holdem/MsgGameOver/Player": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "head",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "hand_card",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "maxCardPlayers",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "settlement_card",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 8,
                    "name": "card_type",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "holdem/MsgGameStart/MsgGameStart": {
            "type": "Reference",
            "target": "holdem/holdem/i_sg"
        },
        "holdem/holdem/i_sg": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "room_status",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "licensing_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "action_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "allin_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "button_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "sb_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "bb_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "sb_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "bb_bet",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "holdem/MsgPlay/MsgPlay": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "action",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "bet",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "holdem/MsgPlayResult/MsgPlayResult": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "isSuccess",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "error",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "holdem/MsgResume/MsgResume": {
            "type": "Reference",
            "target": "holdem/holdem/i_resume"
        },
        "holdem/holdem/i_resume": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "room_status",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "round_status",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "comm_ids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "hand_ids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "card_type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "main_pot",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "holdem/holdem/i_player"
                        }
                    }
                },
                {
                    "id": 8,
                    "name": "op_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 10,
                    "name": "round_bets",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 11,
                    "name": "bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 12,
                    "name": "can_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 16,
                    "name": "min_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 13,
                    "name": "can_check",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 17,
                    "name": "can_call",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 14,
                    "name": "call",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 18,
                    "name": "can_raise",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 15,
                    "name": "min_raise",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "holdem/holdem/i_player": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "seat_type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "head",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "pic",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 12,
                    "name": "round_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 13,
                    "name": "last_action",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "status",
                    "type": {
                        "type": "Reference",
                        "target": "holdem/holdem/e_role_status"
                    }
                },
                {
                    "id": 9,
                    "name": "hand_ids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 10,
                    "name": "card_type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 11,
                    "name": "allin_round",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "holdem/holdem/e_role_status": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                }
            ]
        },
        "holdem/MsgRoomHoldem/MsgRoomHoldem": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "room_status",
                    "type": {
                        "type": "Reference",
                        "target": "holdem/holdem/e_room_status"
                    }
                },
                {
                    "id": 3,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "holdem/MsgRoomHoldem/i_player_simple"
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "sb_bet",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "bb_bet",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "holdem/holdem/e_room_status": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                }
            ]
        },
        "holdem/MsgRoomHoldem/i_player_simple": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "head",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/mail/PtlClearAllMails/ReqClearAllMails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/mail/PtlClearAllMails/ResClearAllMails": {
            "type": "Interface"
        },
        "lobby/mail/PtlDeleteMail/ReqDeleteMail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "mailId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/mail/PtlDeleteMail/ResDeleteMail": {
            "type": "Interface"
        },
        "lobby/mail/PtlGetMails/ReqGetMails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/mail/PtlGetMails/ResGetMails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "mails",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "mailId",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "uid",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "from",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "time",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "title",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 5,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 6,
                                    "name": "state",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "lobby/mail/PtlMarkAllAsRead/ReqMarkAllAsRead": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/mail/PtlMarkAllAsRead/ResMarkAllAsRead": {
            "type": "Interface"
        },
        "lobby/mail/PtlMarkAsRead/ReqMarkAsRead": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "mailId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/mail/PtlMarkAsRead/ResMarkAsRead": {
            "type": "Interface"
        },
        "lobby/PtlAuth/ReqAuth": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sign",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/PtlAuth/ResAuth": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userInfo",
                    "type": {
                        "type": "Reference",
                        "target": "../../types/UserInfo/UserInfo"
                    }
                },
                {
                    "id": 1,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/PtlCancelMatch/ReqCancelMatch": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlCancelMatch/ResCancelMatch": {
            "type": "Interface"
        },
        "lobby/PtlCreateRole/ReqCreateRole": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "visualId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "lobby/PtlCreateRole/ResCreateRole": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "visualId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "lobby/PtlCreateRoom/ReqCreateRoom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 6,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "roomName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "gameType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "subType",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlCreateRoom/ResCreateRoom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "enterRoomParams",
                    "type": {
                        "type": "Reference",
                        "target": "../../types/GameServerAuthParams/GameServerAuthParams"
                    }
                }
            ]
        },
        "../../types/GameServerAuthParams/GameServerAuthParams": {
            "type": "Interface",
            "properties": [
                {
                    "id": 5,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "gameType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "subType",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "serverUrl",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/PtlGetAnnouncement/ReqGetAnnouncement": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/PtlGetAnnouncement/ResGetAnnouncement": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "lobby/PtlGetBasicConfig/ReqGetBasicConfig": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlGetBasicConfig/ResGetBasicConfig": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../../configs/BasicConfig/BasicConfig"
                    }
                }
            ]
        },
        "../../configs/BasicConfig/BasicConfig": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userInfoModifyCost",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "lobby/PtlGetNotice/ReqGetNotice": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlGetNotice/ResGetNotice": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "noticeList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "title",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "contentType",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "lobby/PtlGetRoomList/ReqGetRoomList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 4,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "curPage",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "pageItemNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "lobby/PtlGetRoomList/ResGetRoomList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "curPage",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "pageNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "rooms",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "lobby/PtlGetRoomList/IRoomInfoBrief"
                        }
                    }
                }
            ]
        },
        "lobby/PtlGetRoomList/IRoomInfoBrief": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "displayId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "gameType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "userNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 5,
                    "name": "maxUserNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 6,
                    "name": "playerNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 7,
                    "name": "maxPlayerNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 8,
                    "name": "needPassword",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "lobby/PtlGetUserInfo/ReqGetUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "uids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlGetUserInfo/ResGetUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "infos",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../../types/UserInfo/UserInfo"
                        }
                    }
                }
            ]
        },
        "lobby/PtlModifyUserInfo/ReqModifyUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "gender",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "introduction",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlModifyUserInfo/ResModifyUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "gender",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "introduction",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlStartMatch/ReqStartMatch": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "subType",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "immediate",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlStartMatch/ResStartMatch": {
            "type": "Interface",
            "extends": [
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../../types/GameServerAuthParams/GameServerAuthParams"
                    }
                }
            ]
        },
        "lobby/PtlTryEnterRoom/ReqTryEnterRoom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlTryEnterRoom/ResTryEnterRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../../types/GameServerAuthParams/GameServerAuthParams"
                    }
                }
            ]
        },
        "lobby/PtlUpdateUserInfo/ReqUpdateUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "visualId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "gender",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "introduction",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "lobby/PtlUpdateUserInfo/ResUpdateUserInfo": {
            "type": "Interface"
        },
        "login/PtlLogin/ReqLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "account",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "login/PtlLogin/ResLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 4,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "sign",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 8,
                    "name": "lobbyUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 9,
                    "name": "apiUrl",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 10,
                    "name": "apiToken",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "login/PtlRegister/ReqRegister": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "account",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "login/PtlRegister/ResRegister": {
            "type": "Interface"
        },
        "MsgPing/MsgPing": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "MsgPong/MsgPong": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "serverTimestamp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgGameOver/MsgGameOver": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "zhuang_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "zhuang_scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "awards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "niuniu/niuniu/i_gov"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "z_uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "niuniu/niuniu/i_gov": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "is_win",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "win_gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "user_scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "card",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "niuniu/card/I_card"
                        }
                    }
                }
            ]
        },
        "niuniu/card/I_card": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "color",
                    "type": {
                        "type": "Reference",
                        "target": "niuniu/card/e_card_color"
                    }
                },
                {
                    "id": 2,
                    "name": "score",
                    "type": {
                        "type": "Reference",
                        "target": "niuniu/card/e_card_score"
                    }
                }
            ]
        },
        "niuniu/card/e_card_color": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                }
            ]
        },
        "niuniu/card/e_card_score": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 3
                },
                {
                    "id": 2,
                    "value": 4
                },
                {
                    "id": 3,
                    "value": 5
                },
                {
                    "id": 4,
                    "value": 6
                },
                {
                    "id": 5,
                    "value": 7
                },
                {
                    "id": 6,
                    "value": 8
                },
                {
                    "id": 7,
                    "value": 9
                },
                {
                    "id": 8,
                    "value": 10
                },
                {
                    "id": 9,
                    "value": 11
                },
                {
                    "id": 10,
                    "value": 12
                },
                {
                    "id": 11,
                    "value": 13
                },
                {
                    "id": 12,
                    "value": 14
                },
                {
                    "id": 13,
                    "value": 16
                },
                {
                    "id": 14,
                    "value": 18
                },
                {
                    "id": 15,
                    "value": 19
                }
            ]
        },
        "niuniu/MsgGameStart/MsgGameStart": {
            "type": "Reference",
            "target": "niuniu/niuniu/i_sg"
        },
        "niuniu/niuniu/i_sg": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "op_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "used_zhuang",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "room_status",
                    "type": {
                        "type": "Reference",
                        "target": "niuniu/niuniu/e_room_status"
                    }
                },
                {
                    "id": 5,
                    "name": "bet_list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "z_list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "z_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "niuniu/niuniu/i_player"
                        }
                    }
                },
                {
                    "id": 9,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 10,
                    "name": "z_scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 11,
                    "name": "cards",
                    "type": {
                        "type": "Any"
                    }
                },
                {
                    "id": 12,
                    "name": "room_scale",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "niuniu/niuniu/e_room_status": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                }
            ]
        },
        "niuniu/niuniu/i_player": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "gold",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "head",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "pic",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgGo/MsgGo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgPlay/MsgPlay": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "bet_scale_val",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "user_seat",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgPlayerQiangZhuang/MsgPlayerQiangZhuang": {
            "type": "Reference",
            "target": "niuniu/niuniu/i_qz"
        },
        "niuniu/niuniu/i_qz": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 10,
                    "name": "isGiveUp",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "op_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "qiangzhuangArr",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "uid",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "seat",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "scale",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "isGiveUp",
                                    "type": {
                                        "type": "Boolean"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "room_status",
                    "type": {
                        "type": "Reference",
                        "target": "niuniu/niuniu/e_room_status"
                    }
                },
                {
                    "id": 6,
                    "name": "used_zhuang",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "z_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "z_scale",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgPlayerTanPai/MsgPlayerTanPai": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgQiangZhuang/MsgQiangZhuang": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "user_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "scale_val",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgRandomZhuang/MsgRandomZhuang": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "zhuangScale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "ramdomZhuangArr",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "room_status",
                    "type": {
                        "type": "Reference",
                        "target": "niuniu/niuniu/e_room_status"
                    }
                },
                {
                    "id": 4,
                    "name": "play_multiple",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "play_zhuang",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "quan_shu",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "show_zhuang_time",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgReset/MsgReset": {
            "type": "Interface"
        },
        "niuniu/MsgResume/MsgResume": {
            "type": "Reference",
            "target": "niuniu/niuniu/i_sg"
        },
        "niuniu/MsgRoomNiuNiu/MsgRoomNiuNiu": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "room_scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "room_status",
                    "type": {
                        "type": "Reference",
                        "target": "niuniu/niuniu/e_room_status"
                    }
                },
                {
                    "id": 2,
                    "name": "waitTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgShowdown/MsgShowdown": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "room_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "user_seat",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgTanPai/MsgTanPai": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "room_status",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "cards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "niuniu/MsgTanPai/UserCard"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgTanPai/UserCard": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "cards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "niuniu/card/I_card"
                        }
                    }
                }
            ]
        },
        "niuniu/MsgUserXiaZhu/MsgUserXiaZhu": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "op_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "scale",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "niuniu/MsgXiaZhu/MsgXiaZhu": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bet_list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Any"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "z_scale",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "z_seat",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "op_time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "room_status",
                    "type": {
                        "type": "Reference",
                        "target": "niuniu/niuniu/e_room_status"
                    }
                },
                {
                    "id": 5,
                    "name": "timestamp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "room/MsgClientReady/MsgClientReady": {
            "type": "Interface"
        },
        "room/MsgRoomClosed/MsgRoomClosed": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "gameType",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/MsgRoomDataChangedPush/MsgRoomDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "maxUser",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "userList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../../types/RoomData/IUserData"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "maxPlayer",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "numPlayer",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "isPlaying",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "../../types/RoomData/IUserData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "visualId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "gender",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "ready",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "isOnline",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "coin",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 9,
                    "name": "disconnectTime",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 11,
                    "name": "joinTime",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 10,
                    "name": "isAI",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "room/MsgRoomDataSyncPush/MsgRoomDataSyncPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Reference",
                        "target": "../../types/RoomData/IRoomData"
                    }
                }
            ]
        },
        "../../types/RoomData/IRoomData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "displayId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 9,
                    "name": "gameType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "maxUser",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 4,
                    "name": "userList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../../types/RoomData/IUserData"
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "maxPlayerNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "playerNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "isPlaying",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 11,
                    "name": "isReady",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 10,
                    "name": "isEnd",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 8,
                    "name": "messages",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "channel",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                },
                                {
                                    "id": 1,
                                    "name": "user",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../../types/UserInfo/UserInfo"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "room/MsgRoomDismissedPush/MsgRoomDismissedPush": {
            "type": "Interface"
        },
        "room/MsgUserComesToRoomPush/MsgUserComesToRoomPush": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../../types/RoomData/IUserData"
                    }
                }
            ]
        },
        "room/MsgUserDataChangedPush/MsgUserDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "ready",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "isOnline",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "room/MsgUserInfoChangedPush/MsgUserInfoChangedPush": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../../types/UserInfo/UserInfo"
                    }
                }
            ]
        },
        "room/MsgUserJoin/MsgUserJoin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/MsgUserLeavesFromRoomPush/MsgUserLeavesFromRoomPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/MsgUserReady/MsgUserReady": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/PtlExitRoom/ReqExitRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseRequest"
                    }
                }
            ]
        },
        "room/PtlExitRoom/ResExitRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseResponse"
                    }
                }
            ]
        },
        "room/PtlJoinGame/ReqJoinGame": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseRequest"
                    }
                }
            ]
        },
        "room/PtlJoinGame/ResJoinGame": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseResponse"
                    }
                }
            ]
        },
        "room/PtlReady/ReqReady": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseRequest"
                    }
                }
            ]
        },
        "room/PtlReady/ResReady": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseResponse"
                    }
                }
            ]
        },
        "slots/PtlPlayMatch3/ReqPlayMatch3": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "gameId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "bet",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "slots/PtlPlayMatch3/ResPlayMatch3": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "results",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/PtlPlayMatch3/PlayMatch3Result"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "payout",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "coins",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "slots/PtlPlayMatch3/PlayMatch3Result": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "rounds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/PtlPlayMatch3/PlaySlotRound"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "leftFreeCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "virtualBigEvents",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "slots/PtlPlayMatch3/PlaySlotRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsDragonHatch/DragonHatchRound"
                    }
                }
            ]
        },
        "slots/SlotsDragonHatch/DragonHatchRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Match3/PlaySlotRound"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "dragons",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/SlotsDragonHatch/Dragon"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "addDragon",
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsDragonHatch/Dragon"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "usedDragon",
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsDragonHatch/Dragon"
                    },
                    "optional": true
                }
            ]
        },
        "slots/Match3/PlaySlotRound": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "symbols",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotSymbol"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "deleteSymbols",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotSymbol"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "newSymbols",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotSymbol"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "payout",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "freeCount",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "paySymbols",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Match3/PlayPaySymbol"
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "multipliers",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "slots/Slots/PlaySlotSymbol": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "coordinate",
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/PlaySlotCoordinate"
                    }
                },
                {
                    "id": 3,
                    "name": "payout",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "isGoldFrame",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "slots/Slots/PlaySlotCoordinate": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "row",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "reel",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "slots/Match3/PlayPaySymbol": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "points",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotCoordinate"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "payout",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "slots/SlotsDragonHatch/Dragon": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                }
            ]
        },
        "slots/PtlPlaySlots/ReqPlaySlots": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "gameId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "bet",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "sureWin",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "slots/PtlPlaySlots/ResPlaySlots": {
            "type": "Interface",
            "properties": [
                {
                    "id": 5,
                    "name": "results",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/PtlPlaySlots/PlaySlotsResult"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "payout",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "coins",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "slots/PtlPlaySlots/PlaySlotsResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsMouse/SlotsMouseResult"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsDragon/SlotsDragonResult"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsTiger/SlotsTigerResult"
                    }
                },
                {
                    "id": 3,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsOx/SlotsOxResult"
                    }
                },
                {
                    "id": 4,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsRabbit/SlotsRabbitResult"
                    }
                },
                {
                    "id": 5,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsLoong/SlotsLoongResult"
                    }
                },
                {
                    "id": 6,
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsPanda/SlotsPandaResult"
                    }
                }
            ]
        },
        "slots/SlotsMouse/SlotsMouseResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/LineSlotsResult"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "freeCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "bigEvents",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "multiplier",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "multiple",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "rounds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotRound"
                        }
                    }
                }
            ]
        },
        "slots/Slots/LineSlotsResult": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "winning",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "symbols",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotSymbol"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "payout",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 0,
                    "name": "paylines",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotPayline"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "leftFreeCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "virtualBigEvents",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "slots/Slots/PlaySlotPayline": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "points",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotCoordinate"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "payout",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "activePoints",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotCoordinate"
                        }
                    },
                    "optional": true
                }
            ]
        },
        "slots/Slots/PlaySlotRound": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "symbols",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotSymbol"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "paylines",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotPayline"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "newSymbols",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotSymbol"
                        }
                    },
                    "optional": true
                }
            ]
        },
        "slots/SlotsDragon/SlotsDragonResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/LineSlotsResult"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "freeCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "bigEvents",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "multipliers",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "multiple",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    },
                    "optional": true
                }
            ]
        },
        "slots/SlotsTiger/SlotsTigerResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/LineSlotsResult"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "bigEvents",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "multiplier",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "multiple",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "allTheSame",
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/AllTheSame"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "rounds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotRound"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "chosenSymbolId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "slots/Slots/AllTheSame": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "isTheSame",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "slots/SlotsOx/SlotsOxResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/LineSlotsResult"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "bigEvents",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "freeCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "allTheSame",
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/AllTheSame"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "rounds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "slots/Slots/PlaySlotRound"
                        }
                    }
                }
            ]
        },
        "slots/SlotsRabbit/SlotsRabbitResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/LineSlotsResult"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "bigEvents",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "freeCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "slots/SlotsLoong/SlotsLoongResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/LineSlotsResult"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "pinball",
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsLoong/Pinball"
                    },
                    "optional": true
                }
            ]
        },
        "slots/SlotsLoong/Pinball": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "data",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "zipData",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint8Array"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "multiple",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "slots/SlotsPanda/SlotsPandaResult": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "slots/Slots/LineSlotsResult"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "roulette",
                    "type": {
                        "type": "Reference",
                        "target": "slots/SlotsPanda/Roulette"
                    },
                    "optional": true
                }
            ]
        },
        "slots/SlotsPanda/Roulette": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "multiple",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tank/MsgGameBeginPush/MsgGameBeginPush": {
            "type": "Interface"
        },
        "tank/MsgGameDataChangedPush/MsgGameDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "isPlaying",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "tank/MsgGameDataSyncPush/MsgGameDataSyncPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Reference",
                        "target": "tank/TankTypeDef/ITankGameData"
                    }
                }
            ]
        },
        "tank/TankTypeDef/ITankGameData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tank/TankTypeDef/ITankPlayer"
                        }
                    }
                }
            ]
        },
        "tank/TankTypeDef/ITankPlayer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "color",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "rotation",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "hp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "maxHp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 10,
                    "name": "reviveTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tank/MsgGameOverPush/MsgGameOverPush": {
            "type": "Interface"
        },
        "tank/MsgPlayerComesPush/MsgPlayerComesPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "player",
                    "type": {
                        "type": "Reference",
                        "target": "tank/TankTypeDef/ITankPlayer"
                    }
                }
            ]
        },
        "tank/MsgPlayerDataChangedPush/MsgPlayerDataChangedPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "hp",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "maxHp",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "reviveTime",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "tank/MsgPlayerLeavesPush/MsgPlayerLeavesPush": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "tank/MsgTankAttack/MsgTankAttack": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "attackerId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "targetId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "damage",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "deltaHp",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "attackPoint",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "z",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "tank/MsgTankDataChange/MsgTankDataChange": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "rotation",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "forceSync",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "tank/MsgTankShoot/MsgTankShoot": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "rx",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "ry",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "rz",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "speed",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "lifeTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgBombScore/MsgBombScore": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "scoreRecords",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tienlen/MsgBombScore/ScoreRecord"
                        }
                    }
                }
            ]
        },
        "tienlen/MsgBombScore/ScoreRecord": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userID",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "chairID",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgGameEnd/MsgGameEnd": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bigWin",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "tongPai",
                    "type": {
                        "type": "Reference",
                        "target": "tienlen/MsgGameEnd/TongPai"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "userData",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tienlen/MsgGameEnd/UserData"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "bigData",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tienlen/MsgGameEnd/UserBigData"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "reason",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgGameEnd/TongPai": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "cards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "tienlen/MsgGameEnd/UserData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "userCard",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "playRecords",
                    "type": {
                        "type": "Any"
                    }
                },
                {
                    "id": 4,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "bombScore",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "badScore",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "allScore",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "allGold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "frozen",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 10,
                    "name": "isWinner",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 11,
                    "name": "isCreator",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "tienlen/MsgGameEnd/UserBigData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "winCnt",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "bombCnt",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "successiveWinCnt",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgGameStart/MsgGameStart": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bankUser",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "userCard",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Array",
                            "elementType": {
                                "type": "Number"
                            }
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "round",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "currentUser",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "userCards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tienlen/MsgGameStart/UserCard"
                        }
                    }
                }
            ]
        },
        "tienlen/MsgGameStart/UserCard": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "cards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "cardCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgPass/MsgPass": {
            "type": "Interface"
        },
        "tienlen/MsgPassPlayer/MsgPassPlayer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgPlay/MsgPlay": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "cards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "tienlen/MsgRoomInfo/MsgRoomInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "gameStatus",
                    "type": {
                        "type": "Reference",
                        "target": "tienlen/MsgRoomInfo/GameStatus"
                    }
                },
                {
                    "id": 2,
                    "name": "serialNumber",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "playerCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "userCards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tienlen/MsgGameStart/UserCard"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 10,
                    "name": "handRound",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tienlen/MsgRoomInfo/Player"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "prevCards",
                    "type": {
                        "type": "Reference",
                        "target": "tienlen/MsgTurnPlayer/CARD_TYPE_INFO"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "currentUserId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "currentUser",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "currentLeftTime",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "tienlen/MsgRoomInfo/GameStatus": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 100
                },
                {
                    "id": 2,
                    "value": 200
                },
                {
                    "id": 3,
                    "value": 300
                }
            ]
        },
        "tienlen/MsgRoomInfo/Player": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "visualId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgTurnPlayer/CARD_TYPE_INFO": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userID",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "chairID",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "type",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "cards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "leftCardCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgRoomScore/MsgRoomScore": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userData",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "tienlen/MsgRoomScore/UserData"
                        }
                    }
                }
            ]
        },
        "tienlen/MsgRoomScore/UserData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "tienlen/MsgTrusteeship/MsgTrusteeship": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "status",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "tienlen/MsgTrusteeshipStatus/MsgTrusteeshipStatus": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "chairId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "status",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "tienlen/MsgTurnPlayer/MsgTurnPlayer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "currentUser",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "prevCards",
                    "type": {
                        "type": "Reference",
                        "target": "tienlen/MsgTurnPlayer/CARD_TYPE_INFO"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "handRound",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        }
    }
};
