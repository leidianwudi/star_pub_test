"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.games = exports.slots = void 0;
exports.slots = [
    //幸运老虎
    {
        id: "slots_tiger", //game id
        gameType: "slots_tiger",
        name: "幸运老虎",
        reels: 3,
        rows: 3, //
        symbols: [
            {
                id: "tiger", //symbol id,最好用有意义的名字，这里是老虎
                index: 6,
                isWild: true,
                odds: 50, //当payline是此symbol时的赔率, 单位是1
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "yuanbao", //元宝
                index: 5,
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "jade_pendant", //玉佩
                index: 4,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 5,
                chance: 100
            },
            {
                id: "blessing_bag", //福袋
                index: 3,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 2,
                chance: 150
            },
            {
                id: "red_envelope", //红包
                index: 2,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1.6,
                chance: 150
            },
            {
                id: "firework", //爆竹
                index: 1,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1,
                chance: 150
            },
            {
                id: "orange", //柑橘
                index: 0,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.6,
                chance: 300
            },
            {
                id: "the_empty",
                index: 7,
                isWild: false,
                odds: 0,
                chance: 0,
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 3, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            }
        ],
        //该次旋转的奖金=赔付线所得奖金*倍数球显示的乘数
        multipliers: [
            {
                id: "1倍",
                multiple: 0.5, //获得奖金的倍数
                chance: 100,
            },
            {
                id: "2倍",
                multiple: 1,
                chance: 200,
            },
            {
                id: "5倍",
                multiple: 5,
                chance: 300,
            },
            {
                id: "10倍",
                multiple: 5,
                chance: 200,
            },
            {
                id: "50倍",
                multiple: 10,
                chance: 99,
            },
            {
                id: "100倍",
                multiple: 500,
                chance: 1,
            }
        ],
        free: {
            //获得免费游戏的可能性，百分比
            probability: 1,
            count: 8,
            maxCount: 8,
        },
        //清一色，代表所有符号都是中奖符号
        allTheSame: {
            multiple: 10, //获得奖金的倍数
        },
        lucky: {
            probability: 0.001,
            //幸运虎幸运模式配置
            //幸运状态触发时，会随机选择一个符号(不包括百搭符号)，随后转轴将只由三种符号：随机选择的符号、百搭符号和空白符号组成。    
            //当所有转轴停止旋转后，如果转轴上出现1个或更多非空白符号，所有转轴将再次旋转，之前出的非空白符号将保留在它们的位置上。
            //在所有转轴停止旋转后，如果转轴上不再出现额外的非空白符号，则幸运状态结束并支付奖金
            tiger: {
                //第一步，从以下符号列表中选择一个符号
                phase1Symbols: [
                    {
                        id: "yuanbao", //元宝
                        chance: 100
                    },
                    {
                        id: "jade_pendant", //玉佩
                        chance: 100
                    },
                    {
                        id: "blessing_bag", //福袋
                        chance: 150
                    },
                    {
                        id: "red_envelope", //红包
                        chance: 150
                    },
                    {
                        id: "firework", //爆竹
                        chance: 150
                    },
                    {
                        id: "orange", //柑橘
                        chance: 300
                    }
                ],
                phase2Symbols: [
                    {
                        //特殊符号id， 代表第一步被选中的符号id
                        id: "the_chosen",
                        chance: 100,
                    },
                    {
                        id: "the_empty",
                        chance: 100,
                    },
                    {
                        id: "tiger",
                        chance: 100,
                    }
                ]
            }
        }
    },
    //幸运龙
    {
        id: "slots_dragon", //game id
        gameType: "slots_dragon",
        name: "幸运龙",
        reels: 3,
        rows: 3, //
        winBet: true, //必胜投注
        symbols: [
            {
                id: "dragon", //symbol id,最好用有意义的名字，这里是龙
                index: 6,
                isWild: true,
                odds: 20, //当payline是此symbol时的赔率, 单位是1
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "yuanbao", //元宝
                index: 5,
                isWild: false,
                odds: 2.5,
                chance: 100
            },
            {
                id: "red_envelope", //红包
                index: 4,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 5,
                chance: 100
            },
            {
                id: "lantern", //灯笼
                index: 3,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 2,
                chance: 150
            },
            {
                id: "firework", //爆竹
                index: 2,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1,
                chance: 150
            },
            {
                id: "chinese_knot", //中国结
                index: 1,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.6,
                chance: 150
            },
            {
                id: "copper_coin", //铜钱
                index: 0,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.4,
                chance: 300
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 3, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            }
        ],
        //该次旋转的奖金=赔付线所得奖金*倍数球显示的乘数
        multipliers: [
            {
                id: "1倍",
                multiple: 1, //获得奖金的倍数
                chance: 100,
            },
            {
                id: "2倍",
                multiple: 2,
                chance: 200,
            },
            {
                id: "5倍",
                multiple: 5,
                chance: 300,
            },
            {
                id: "10倍",
                multiple: 10,
                chance: 200,
            },
            {
                id: "50倍",
                multiple: 50,
                chance: 99,
            },
            {
                id: "100倍",
                multiple: 100,
                chance: 1,
            }
        ],
        lucky: {
            probability: 0.001,
            dragon: {
                //该次旋转的奖金=赔付线所得奖金*倍数球显示的乘数
                multipliers: [
                    {
                        id: "1倍",
                        multiple: 1, //获得奖金的倍数
                        chance: 100,
                    },
                    {
                        id: "2倍",
                        multiple: 2,
                        chance: 200,
                    },
                    {
                        id: "5倍",
                        multiple: 5,
                        chance: 300,
                    },
                    {
                        id: "10倍",
                        multiple: 10,
                        chance: 200,
                    },
                    {
                        id: "50倍",
                        multiple: 50,
                        chance: 99,
                    },
                    {
                        id: "100倍",
                        multiple: 100,
                        chance: 1,
                    }
                ],
                //幸运状态送的免费次数，还可以继续触发新的幸运状态，从而继续获得新的免费次数
                freeCount: 8,
            }
        }
    },
    //幸运牛
    {
        id: "slots_ox", //game id
        gameType: "slots_ox",
        name: "幸运公牛",
        reels: 3,
        rows: 4, //
        symbols: [
            {
                id: "ox", //symbol id,最好用有意义的名字
                index: 6,
                isWild: true,
                odds: 40, //当payline是此symbol时的赔率, 单位是1
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "yuanbao", //元宝
                index: 5,
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "copper_coin", //铜钱
                index: 4,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 10,
                chance: 100
            },
            {
                id: "blessing_bag", //福袋
                index: 3,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 4,
                chance: 150
            },
            {
                id: "red_envelope", //红包
                index: 2,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 2,
                chance: 150
            },
            {
                id: "orange", //柑橘
                index: 1,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1,
                chance: 150
            },
            {
                id: "firework", //爆竹
                index: 0,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.6,
                chance: 300
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [
            {
                coordinate: {
                    row: 4, //行号
                    reel: 1 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [],
                placeholder: true, //只生成占位符
            },
            {
                coordinate: {
                    row: 4, //行号
                    reel: 3 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [],
                placeholder: true,
            }
        ],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 3, reel: 1 },
                    { row: 4, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 2, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 2, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "6",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "7",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "8",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "9",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "10",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            }
        ],
        //该次旋转的奖金=赔付线所得奖金*倍数球显示的乘数
        multipliers: [
            {
                id: "1倍",
                multiple: 1, //获得奖金的倍数
                chance: 100,
            },
            {
                id: "2倍",
                multiple: 2,
                chance: 200,
            },
            {
                id: "5倍",
                multiple: 5,
                chance: 300,
            },
            {
                id: "10倍",
                multiple: 10,
                chance: 200,
            },
            {
                id: "50倍",
                multiple: 50,
                chance: 99,
            },
            {
                id: "100倍",
                multiple: 100,
                chance: 1,
            }
        ],
        free: {
            //获得免费游戏的可能性，百分比
            probability: 1,
            count: 8,
            maxCount: 8,
        },
        //清一色，代表所有符号都是中将符号
        allTheSame: {
            multiple: 10, //获得奖金的倍数
        },
        lucky: {
            probability: 0.001,
            //在幸运状态触发后，第一及第三列转盘只能出现同一个符号，不停自动旋转直至出现赢奖。
            ox: {
                //出现相同符号的列
                reels: [1, 3],
                //幸运状态下，各符号的权重
                symbols: [
                    {
                        id: "ox", //symbol id,最好用有意义的名字
                        chance: 50 ////权重, 越大代表出现概率越高
                    },
                    {
                        id: "yuanbao", //元宝
                        chance: 100
                    },
                    {
                        id: "copper_coin", //铜钱
                        chance: 100
                    },
                    {
                        id: "blessing_bag", //福袋
                        chance: 150
                    },
                    {
                        id: "red_envelope", //红包
                        chance: 150
                    },
                    {
                        id: "orange", //柑橘
                        chance: 150
                    },
                    {
                        id: "firework", //爆竹
                        chance: 300
                    }
                ],
            }
        }
    },
    //幸运老鼠
    {
        id: "slots_mouse", //game id
        gameType: "slots_mouse",
        name: "幸运老鼠",
        reels: 3,
        rows: 3, //
        symbols: [
            {
                id: "mouse", //symbol id,最好用有意义的名字，这里是老鼠
                index: 6,
                isWild: true,
                odds: 60, //当payline是此symbol时的赔率, 单位是0.01
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "spring_festival_couplets", //春联
                index: 5,
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "red_envelope", //红包
                index: 4,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 10,
                chance: 100
            },
            {
                id: "blessing_bag", //福袋
                index: 3,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 6,
                chance: 150
            },
            {
                id: "firework", //爆竹
                index: 2,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 3,
                chance: 150
            },
            {
                id: "orange", //柑橘
                index: 1,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1,
                chance: 150
            },
            {
                id: "peanut", //花生
                index: 0,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.6,
                chance: 300
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [
            {
                coordinate: {
                    row: 1, //行号
                    reel: 2 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [
                    {
                        id: "mouse",
                        chance: 10000,
                    }
                ],
            },
            {
                coordinate: {
                    row: 2, //行号
                    reel: 2 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [
                    {
                        id: "mouse",
                        chance: 10000,
                    }
                ],
            },
            {
                coordinate: {
                    row: 3, //行号
                    reel: 2 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [
                    {
                        id: "mouse",
                        chance: 10000,
                    }
                ],
            },
        ],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 3, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            }
        ],
        //该次旋转的奖金=赔付线所得奖金*倍数球显示的乘数
        multipliers: [
            {
                id: "1倍",
                multiple: 1, //获得奖金的倍数
                chance: 100,
            },
            {
                id: "2倍",
                multiple: 2,
                chance: 200,
            },
            {
                id: "5倍",
                multiple: 5,
                chance: 300,
            },
            {
                id: "10倍",
                multiple: 10,
                chance: 200,
            },
            {
                id: "50倍",
                multiple: 50,
                chance: 99,
            },
            {
                id: "100倍",
                multiple: 100,
                chance: 1,
            }
        ],
        free: {
            //获得免费游戏的可能性，百分比
            probability: 1,
            count: 8,
            maxCount: 8,
        },
        lucky: {
            probability: 0.01,
            mouse: {
                //幸运线， 当出现在幸运线上的符号都是万能符时，服务器自动旋转直到中奖为止
                luckyLine: {
                    points: [
                        { row: 1, reel: 2 },
                        { row: 2, reel: 2 },
                        { row: 3, reel: 2 },
                    ]
                },
            }
        }
    },
    //幸运兔子
    {
        id: "slots_rabbit", //game id
        gameType: "slots_rabbit",
        name: "幸运兔子",
        reels: 3,
        rows: 4, //(第一、三列有三行、第二列有四行)
        pay: {
            //奖励符号出现的最小数目，小于此数目时，不会进行任何奖励
            minSymbolCount: 5,
            //针对单个符号的奖励
            symbols: [
                {
                    id: "0.5倍",
                    //倍率奖励符号的赔率
                    odds: 0.5,
                },
                {
                    id: "1倍",
                    //倍率奖励符号的赔率
                    odds: 1,
                },
                {
                    id: "2倍",
                    //倍率奖励符号的赔率
                    odds: 2,
                },
                {
                    id: "5倍",
                    //倍率奖励符号的赔率
                    odds: 5,
                },
                {
                    id: "10倍",
                    //倍率奖励符号的赔率
                    odds: 10,
                },
                {
                    id: "50倍",
                    //倍率奖励符号的赔率
                    odds: 50,
                },
                {
                    id: "100倍",
                    //倍率奖励符号的赔率
                    odds: 100,
                },
                {
                    id: "500倍",
                    //倍率奖励符号的赔率
                    odds: 500,
                },
                {
                    id: "null",
                    odds: 0,
                }
            ]
        },
        symbols: [
            {
                id: "rabbit", //兔子//symbol id,最好用有意义的名字
                index: 6,
                isWild: true,
                odds: 40, //当payline是此symbol时的赔率, 单位是0.01
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "rabbit_yuanbao", //兔元宝
                index: 5,
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "blessing_bag", //福袋
                index: 4,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 10,
                chance: 150
            },
            {
                id: "red_envelope", //红包
                index: 3,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 2,
                chance: 150
            },
            {
                id: "copper_coin", //铜钱
                index: 2,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1,
                chance: 150
            },
            {
                id: "rocket", //火箭
                index: 1,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.6,
                chance: 200
            },
            {
                id: "carrot", //胡萝卜
                index: 0,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.4,
                chance: 300
            },
            {
                id: "0.5倍", //投注金额的0.5倍
                index: 7,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "1倍", //投注金额的1倍
                index: 8,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "2倍", //投注金额的2倍
                index: 9,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "5倍", //投注金额的5倍
                index: 10,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "10倍", //投注金额的10倍
                index: 11,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "50倍", //投注金额的50倍
                index: 12,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "100倍", //投注金额的100倍
                index: 13,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "500倍", //投注金额的500倍
                index: 14,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "null", //投注金额的500倍
                index: 15,
                isWild: false,
                odds: 0,
                chance: 0 ////权重, 越大代表出现概率越高
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [
            {
                coordinate: {
                    row: 4, //行号
                    reel: 1 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [],
                placeholder: "null", //只生成占位符
            },
            {
                coordinate: {
                    row: 4, //行号
                    reel: 3 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [],
                placeholder: "null",
            }
        ],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 3, reel: 1 },
                    { row: 4, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 2, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 2, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "6",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "7",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "8",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "9",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "10",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            }
        ],
        //该次旋转的奖金=赔付线所得奖金*倍数球显示的乘数
        multipliers: [
            {
                id: "0.5倍",
                multiple: 0.5, //获得奖金的倍数
                chance: 100,
            },
            {
                id: "1倍",
                multiple: 1,
                chance: 200,
            },
            {
                id: "2倍",
                multiple: 2,
                chance: 400,
            },
            {
                id: "5倍",
                multiple: 5,
                chance: 200,
            },
            {
                id: "10倍",
                multiple: 10,
                chance: 99,
            },
            {
                id: "50倍",
                multiple: 50,
                chance: 99,
            },
            {
                id: "100倍",
                multiple: 100,
                chance: 99,
            },
            {
                id: "500倍",
                multiple: 500,
                chance: 1,
            }
        ],
        free: {
            //获得免费游戏的可能性，百分比
            probability: 1,
            count: 8,
            maxCount: 8,
        },
        lucky: {
            probability: 0.01,
            //玩家获得八次免费旋转机会，且此时转盘上仅会出现倍率奖符。
            //幸运状态期间再次触发幸运状态，幸运状态回合数增加8次
            rabbit: {
                freeCount: 8,
            }
        },
    },
    //泼水节
    {
        "id": "slots_songkran",
        "gameType": "slots_songkran",
        "name": "泼水节",
        "reels": 5,
        "rows": 5,
        "match3": {
            "symbols": [
                {
                    "id": "9",
                    "payback": [
                        {
                            "lines": 3, //从头开始连续的列数
                            "odds": 60,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 70,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 100,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "10",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 70,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 80,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "max": 5,
                            "odds": 110,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "J",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 90,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 100,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 120,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "Q",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 95,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 110,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 130,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "K",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 100,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 120,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 140,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "A",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 110,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 130,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 150,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "ball",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 120,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 140,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 160,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "eyewear",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 130,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 150,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 170,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "ladle",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 140,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 160,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 180,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "horse",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 170,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 180,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 200,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "girl",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 170,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 180,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 200,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "man",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 170,
                            "free_count": 0
                        },
                        {
                            "lines": 4,
                            "odds": 180,
                            "free_count": 0
                        },
                        {
                            "lines": 5,
                            "odds": 200,
                            "free_count": 0
                        }
                    ]
                },
                {
                    "id": "scatter",
                    "payback": [
                        {
                            "lines": 3,
                            "odds": 0,
                            "free_count": 12
                        }
                    ]
                },
                {
                    "id": "wildcard",
                    "payback": []
                }
            ]
        },
        "symbols": [
            {
                "id": "9",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3, //从头开始连续的列数
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 5,
                    }
                ]
            },
            {
                "id": "10",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 5,
                    }
                ]
            },
            {
                "id": "J",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 5,
                    }
                ]
            },
            {
                "id": "Q",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 5,
                    }
                ]
            },
            {
                "id": "K",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 5,
                    }
                ]
            },
            {
                "id": "A",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 5,
                    }
                ]
            },
            {
                "id": "ball",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    }
                ]
            },
            {
                "id": "eyewear",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    }
                ]
            },
            {
                "id": "ladle",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 10,
                    },
                    {
                        "reelCount": 4,
                        "odds": 20,
                    },
                    {
                        "reelCount": 5,
                        "odds": 50,
                    }
                ]
            },
            {
                "id": "horse",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 10,
                    },
                    {
                        "reelCount": 4,
                        "odds": 20,
                    },
                    {
                        "reelCount": 5,
                        "odds": 50,
                    }
                ]
            },
            {
                "id": "girl",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 30,
                    },
                    {
                        "reelCount": 4,
                        "odds": 50,
                    },
                    {
                        "reelCount": 5,
                        "odds": 100,
                    }
                ]
            },
            {
                "id": "man",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 50,
                    },
                    {
                        "reelCount": 4,
                        "odds": 100,
                    },
                    {
                        "reelCount": 5,
                        "odds": 200,
                    }
                ]
            },
            {
                "id": "scatter", //泼水图
                "chance": 30,
                "isLucky": true,
                "odds": 0,
            },
            {
                "id": "wildcard", //通配符
                "isWild": true,
                "chance": 30,
                "odds": 0,
            },
            {
                "id": "the_empty", //空白符
                "chance": 0,
                "odds": 0,
            }
        ],
        //不规则slots
        "elements": [
            {
                "coordinate": {
                    row: 1,
                    reel: 1,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 1,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 2,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 4,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 5,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 5,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 5,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
        ],
        "paylines": [],
    },
    //双囍临门
    {
        id: "slots_double_happy", //game id
        gameType: "slots_double_happy",
        name: "双囍临门",
        reels: 5,
        rows: 3, //
        symbols: [
            {
                id: "s_scatter", //symbol id,夺宝符号
                index: 18,
                isWild: false,
                isDouble: false,
                isLucky: true,
                odds: 0, //当payline是此symbol时的赔率, 单位是1
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "slot_symbol", //symbol id,最好用有意义的名字，这里是双囍临门
                index: 17,
                isWild: true,
                isDouble: false,
                odds: 30, //当payline是此symbol时的赔率, 单位是1
                oddsForCount: [
                    { count: 3, odds: 30 },
                    { count: 4, odds: 50 },
                    { count: 5, odds: 300 },
                    { count: 6, odds: 500 },
                    { count: 7, odds: 800 },
                    { count: 8, odds: 1000 },
                    { count: 9, odds: 1500 },
                    { count: 10, odds: 3000 },
                ],
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "h_bracelet", //手镯
                index: 16,
                isWild: false,
                isDouble: false,
                odds: 20,
                oddsForCount: [
                    { count: 3, odds: 20 },
                    { count: 4, odds: 30 },
                    { count: 5, odds: 100 },
                    { count: 6, odds: 150 },
                    { count: 7, odds: 500 },
                    { count: 8, odds: 800 },
                    { count: 9, odds: 1200 },
                    { count: 10, odds: 1500 },
                ],
                chance: 100
            },
            {
                id: "h_angpow", //红包
                index: 15,
                isWild: false,
                isDouble: false,
                odds: 15,
                oddsForCount: [
                    { count: 3, odds: 15 },
                    { count: 4, odds: 25 },
                    { count: 5, odds: 80 },
                    { count: 6, odds: 100 },
                    { count: 7, odds: 300 },
                    { count: 8, odds: 600 },
                    { count: 9, odds: 1000 },
                    { count: 10, odds: 1200 },
                ],
                chance: 100
            },
            {
                id: "h_heel", //高跟鞋
                index: 14,
                isWild: false,
                isDouble: false,
                odds: 12,
                oddsForCount: [
                    { count: 3, odds: 12 },
                    { count: 4, odds: 20 },
                    { count: 5, odds: 60 },
                    { count: 6, odds: 80 },
                    { count: 7, odds: 200 },
                    { count: 8, odds: 500 },
                    { count: 9, odds: 800 },
                    { count: 10, odds: 1000 },
                ],
                chance: 150
            },
            {
                id: "h_biscuit", //饼干
                index: 13,
                isWild: false,
                isDouble: false,
                odds: 10,
                oddsForCount: [
                    { count: 3, odds: 10 },
                    { count: 4, odds: 15 },
                    { count: 5, odds: 50 },
                    { count: 6, odds: 60 },
                    { count: 7, odds: 150 },
                    { count: 8, odds: 300 },
                    { count: 9, odds: 500 },
                    { count: 10, odds: 800 },
                ],
                chance: 150
            },
            {
                id: "l_a", //字母A
                index: 12,
                isWild: false,
                isDouble: false,
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 150
            },
            {
                id: "l_k", //字母K
                index: 11,
                isWild: false,
                isDouble: false,
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 150
            },
            {
                id: "l_q", //字母Q
                index: 10,
                isWild: false,
                isDouble: false,
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 150
            },
            {
                id: "l_j", //字母J
                index: 9,
                isWild: false,
                isDouble: false,
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 300
            },
            {
                id: "slot_symbol_double", //symbol id,双重双囍临门
                index: 8,
                isWild: true,
                isDouble: true, //一个符号计数时为2
                aliasId: "slot_symbol",
                odds: 30, //当payline是此symbol时的赔率, 单位是1
                oddsForCount: [
                    { count: 3, odds: 30 },
                    { count: 4, odds: 50 },
                    { count: 5, odds: 300 },
                    { count: 6, odds: 500 },
                    { count: 7, odds: 800 },
                    { count: 8, odds: 1000 },
                    { count: 9, odds: 1500 },
                    { count: 10, odds: 3000 },
                ],
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "h_bracelet_double", //双重手镯
                index: 7,
                isWild: false,
                isDouble: true,
                aliasId: "h_bracelet_double",
                odds: 20,
                oddsForCount: [
                    { count: 3, odds: 20 },
                    { count: 4, odds: 30 },
                    { count: 5, odds: 100 },
                    { count: 6, odds: 150 },
                    { count: 7, odds: 500 },
                    { count: 8, odds: 800 },
                    { count: 9, odds: 1200 },
                    { count: 10, odds: 1500 },
                ],
                chance: 100
            },
            {
                id: "h_angpow_double", //双重红包
                index: 6,
                isWild: false,
                isDouble: true,
                aliasId: "h_angpow_double",
                odds: 15,
                oddsForCount: [
                    { count: 3, odds: 15 },
                    { count: 4, odds: 25 },
                    { count: 5, odds: 80 },
                    { count: 6, odds: 100 },
                    { count: 7, odds: 300 },
                    { count: 8, odds: 600 },
                    { count: 9, odds: 1000 },
                    { count: 10, odds: 1200 },
                ],
                chance: 100
            },
            {
                id: "h_heel_double", //双重高跟鞋
                index: 5,
                isWild: false,
                isDouble: true,
                aliasId: "h_heel_double",
                odds: 12,
                oddsForCount: [
                    { count: 3, odds: 12 },
                    { count: 4, odds: 20 },
                    { count: 5, odds: 60 },
                    { count: 6, odds: 80 },
                    { count: 7, odds: 200 },
                    { count: 8, odds: 500 },
                    { count: 9, odds: 800 },
                    { count: 10, odds: 1000 },
                ],
                chance: 150
            },
            {
                id: "biscuit_double", //双重饼干
                index: 4,
                isWild: false,
                isDouble: true,
                aliasId: "h_biscuit_double",
                odds: 10,
                oddsForCount: [
                    { count: 3, odds: 10 },
                    { count: 4, odds: 15 },
                    { count: 5, odds: 50 },
                    { count: 6, odds: 60 },
                    { count: 7, odds: 150 },
                    { count: 8, odds: 300 },
                    { count: 9, odds: 500 },
                    { count: 10, odds: 800 },
                ],
                chance: 150
            },
            {
                id: "l_a_double", //双重字母A
                index: 3,
                isWild: false,
                isDouble: true,
                aliasId: "l_a_double",
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 150
            },
            {
                id: "l_k_double", //双重字母K
                index: 2,
                isWild: false,
                isDouble: true,
                aliasId: "l_k_double",
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 150
            },
            {
                id: "l_q_double", //双重字母Q
                index: 1,
                isWild: false,
                isDouble: true,
                aliasId: "l_q_double",
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 150
            },
            {
                id: "l_j_double", //双重字母J
                index: 0,
                isWild: false,
                isDouble: true,
                aliasId: "l_j_double",
                odds: 5,
                oddsForCount: [
                    { count: 3, odds: 5 },
                    { count: 4, odds: 10 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 150 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                ],
                chance: 300
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                    { row: 2, reel: 4 },
                    { row: 2, reel: 5 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                    { row: 3, reel: 4 },
                    { row: 3, reel: 5 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                    { row: 1, reel: 4 },
                    { row: 1, reel: 5 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 3, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                    { row: 2, reel: 4 },
                    { row: 3, reel: 5 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 3, reel: 3 },
                    { row: 2, reel: 4 },
                    { row: 1, reel: 5 },
                ]
            }
        ],
    },
    //寻龙探宝
    {
        "id": "slots_dragonhatch",
        "gameType": "slots_dragonhatch",
        "name": "寻龙探宝",
        "reels": 5,
        "rows": 5,
        "symbols": [
            {
                "id": "giant_dragon", //巨龙
                "chance": 150,
                "odds": 0,
                "isLowValue": false,
                "isHighValue": true,
                "oddsForCount": [
                    { count: 4, odds: 30 },
                    { count: 5, odds: 40 },
                    { count: 6, odds: 70 },
                    { count: 7, odds: 100 },
                    { count: 8, odds: 200 },
                    { count: 9, odds: 300 },
                    { count: 10, odds: 500 },
                    { count: 11, odds: 500 },
                    { count: 12, odds: 500 },
                    { count: 13, odds: 1000 },
                    { count: 14, odds: 1000 },
                    { count: 15, odds: 2000 },
                    { count: 16, odds: 2000 },
                    { count: 17, odds: 2000 },
                    { count: 18, odds: 5000 },
                    { count: 19, odds: 5000 },
                    { count: 20, odds: 5000 },
                    { count: 21, odds: 10000 },
                    { count: 22, odds: 10000 },
                    { count: 23, odds: 10000 },
                    { count: 24, odds: 10000 },
                    { count: 25, odds: 20000 }
                ],
            },
            {
                "id": "fire_dragon", //火龙
                "chance": 100,
                "odds": 0,
                "isLowValue": false,
                "isHighValue": true,
                "oddsForCount": [
                    { count: 4, odds: 20 },
                    { count: 5, odds: 30 },
                    { count: 6, odds: 50 },
                    { count: 7, odds: 80 },
                    { count: 8, odds: 100 },
                    { count: 9, odds: 200 },
                    { count: 10, odds: 300 },
                    { count: 11, odds: 300 },
                    { count: 12, odds: 300 },
                    { count: 13, odds: 600 },
                    { count: 14, odds: 600 },
                    { count: 15, odds: 800 },
                    { count: 16, odds: 800 },
                    { count: 17, odds: 800 },
                    { count: 18, odds: 1000 },
                    { count: 19, odds: 1000 },
                    { count: 20, odds: 1000 },
                    { count: 21, odds: 2000 },
                    { count: 22, odds: 2000 },
                    { count: 23, odds: 2000 },
                    { count: 24, odds: 2000 },
                    { count: 25, odds: 5000 }
                ],
            },
            {
                "id": "water_dragon", //水龙
                "chance": 130,
                "odds": 0,
                "isLowValue": false,
                "isHighValue": true,
                "oddsForCount": [
                    { count: 4, odds: 15 },
                    { count: 5, odds: 20 },
                    { count: 6, odds: 40 },
                    { count: 7, odds: 70 },
                    { count: 8, odds: 80 },
                    { count: 9, odds: 100 },
                    { count: 10, odds: 200 },
                    { count: 11, odds: 200 },
                    { count: 12, odds: 200 },
                    { count: 13, odds: 400 },
                    { count: 14, odds: 400 },
                    { count: 15, odds: 500 },
                    { count: 16, odds: 500 },
                    { count: 17, odds: 500 },
                    { count: 18, odds: 800 },
                    { count: 19, odds: 800 },
                    { count: 20, odds: 800 },
                    { count: 21, odds: 1000 },
                    { count: 22, odds: 1000 },
                    { count: 23, odds: 1000 },
                    { count: 24, odds: 1000 },
                    { count: 25, odds: 1000 }
                ],
            },
            {
                "id": "earth_dragon", //土龙
                "chance": 120,
                "odds": 0,
                "isLowValue": false,
                "isHighValue": true,
                "oddsForCount": [
                    { count: 4, odds: 10 },
                    { count: 5, odds: 15 },
                    { count: 6, odds: 30 },
                    { count: 7, odds: 60 },
                    { count: 8, odds: 70 },
                    { count: 9, odds: 80 },
                    { count: 10, odds: 100 },
                    { count: 11, odds: 100 },
                    { count: 12, odds: 100 },
                    { count: 13, odds: 300 },
                    { count: 14, odds: 300 },
                    { count: 15, odds: 400 },
                    { count: 16, odds: 400 },
                    { count: 17, odds: 400 },
                    { count: 18, odds: 600 },
                    { count: 19, odds: 600 },
                    { count: 20, odds: 600 },
                    { count: 21, odds: 800 },
                    { count: 22, odds: 800 },
                    { count: 23, odds: 800 },
                    { count: 24, odds: 800 },
                    { count: 25, odds: 800 }
                ],
            },
            {
                "id": "spade", //黄桃
                "chance": 110,
                "odds": 0,
                "isLowValue": true,
                "isHighValue": false,
                "oddsForCount": [
                    { count: 4, odds: 5 },
                    { count: 5, odds: 10 },
                    { count: 6, odds: 15 },
                    { count: 7, odds: 20 },
                    { count: 8, odds: 30 },
                    { count: 9, odds: 40 },
                    { count: 10, odds: 50 },
                    { count: 11, odds: 50 },
                    { count: 12, odds: 50 },
                    { count: 13, odds: 60 },
                    { count: 14, odds: 60 },
                    { count: 15, odds: 100 },
                    { count: 16, odds: 100 },
                    { count: 17, odds: 100 },
                    { count: 18, odds: 500 },
                    { count: 19, odds: 500 },
                    { count: 20, odds: 500 },
                    { count: 21, odds: 600 },
                    { count: 22, odds: 600 },
                    { count: 23, odds: 600 },
                    { count: 24, odds: 600 },
                    { count: 25, odds: 600 }
                ],
            },
            {
                "id": "heart", //红心
                "chance": 90,
                "odds": 0,
                "isLowValue": true,
                "isHighValue": false,
                "oddsForCount": [
                    { count: 4, odds: 4 },
                    { count: 5, odds: 6 },
                    { count: 6, odds: 9 },
                    { count: 7, odds: 15 },
                    { count: 8, odds: 20 },
                    { count: 9, odds: 30 },
                    { count: 10, odds: 40 },
                    { count: 11, odds: 40 },
                    { count: 12, odds: 40 },
                    { count: 13, odds: 50 },
                    { count: 14, odds: 50 },
                    { count: 15, odds: 80 },
                    { count: 16, odds: 80 },
                    { count: 17, odds: 80 },
                    { count: 18, odds: 300 },
                    { count: 19, odds: 300 },
                    { count: 20, odds: 300 },
                    { count: 21, odds: 400 },
                    { count: 22, odds: 400 },
                    { count: 23, odds: 400 },
                    { count: 24, odds: 400 },
                    { count: 25, odds: 500 }
                ],
            },
            {
                "id": "club", //梅花
                "chance": 80,
                "odds": 0,
                "isLowValue": true,
                "isHighValue": false,
                "oddsForCount": [
                    { count: 4, odds: 3 },
                    { count: 5, odds: 5 },
                    { count: 6, odds: 6 },
                    { count: 7, odds: 10 },
                    { count: 8, odds: 15 },
                    { count: 9, odds: 20 },
                    { count: 10, odds: 30 },
                    { count: 11, odds: 30 },
                    { count: 12, odds: 30 },
                    { count: 13, odds: 40 },
                    { count: 14, odds: 40 },
                    { count: 15, odds: 60 },
                    { count: 16, odds: 60 },
                    { count: 17, odds: 60 },
                    { count: 18, odds: 200 },
                    { count: 19, odds: 200 },
                    { count: 20, odds: 200 },
                    { count: 21, odds: 300 },
                    { count: 22, odds: 300 },
                    { count: 23, odds: 300 },
                    { count: 24, odds: 300 },
                    { count: 25, odds: 400 }
                ],
            },
            {
                "id": "diamond", //方块
                "chance": 70,
                "odds": 0,
                "isLowValue": true,
                "isHighValue": false,
                "oddsForCount": [
                    { count: 4, odds: 2 },
                    { count: 5, odds: 3 },
                    { count: 6, odds: 4 },
                    { count: 7, odds: 6 },
                    { count: 8, odds: 8 },
                    { count: 9, odds: 10 },
                    { count: 10, odds: 15 },
                    { count: 11, odds: 15 },
                    { count: 12, odds: 15 },
                    { count: 13, odds: 20 },
                    { count: 14, odds: 20 },
                    { count: 15, odds: 40 },
                    { count: 16, odds: 40 },
                    { count: 17, odds: 40 },
                    { count: 18, odds: 100 },
                    { count: 19, odds: 100 },
                    { count: 20, odds: 100 },
                    { count: 21, odds: 200 },
                    { count: 22, odds: 200 },
                    { count: 23, odds: 200 },
                    { count: 24, odds: 200 },
                    { count: 25, odds: 300 }
                ],
            },
            {
                "id": "wildcard", //百搭
                "chance": 70,
                "odds": 0,
                "isWild": true,
                "isLowValue": false,
                "isHighValue": false,
            }
        ],
        elements: [],
        paylines: []
    },
    //亡灵大盗
    {
        "id": "slots_wildBandito",
        "gameType": "slots_wildBandito",
        "name": "亡灵大盗",
        "reels": 5,
        "rows": 4,
        "symbols": [
            {
                "id": "10",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3, //从头开始连续的列数
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 6,
                    }
                ]
            },
            {
                "id": "J",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 6,
                    }
                ]
            },
            {
                "id": "Q",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 2,
                    },
                    {
                        "reelCount": 4,
                        "odds": 4,
                    },
                    {
                        "reelCount": 5,
                        "odds": 10,
                    }
                ]
            },
            {
                "id": "K",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 3,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 12,
                    }
                ]
            },
            {
                "id": "A",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 3,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 12,
                    }
                ]
            },
            {
                "id": "stick",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 15,
                    }
                ]
            },
            {
                "id": "water",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 6,
                    },
                    {
                        "reelCount": 4,
                        "odds": 15,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    }
                ]
            },
            {
                "id": "guitar",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 8,
                    },
                    {
                        "reelCount": 4,
                        "odds": 20,
                    },
                    {
                        "reelCount": 5,
                        "odds": 40,
                    }
                ]
            },
            {
                "id": "skeleton",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 10,
                    },
                    {
                        "reelCount": 4,
                        "odds": 25,
                    },
                    {
                        "reelCount": 5,
                        "odds": 50,
                    }
                ]
            },
            {
                "id": "10_special", //special在此指代金框符号，可按需修改
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 6,
                    }
                ]
            },
            {
                "id": "J_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 6,
                    }
                ]
            },
            {
                "id": "Q_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 2,
                    },
                    {
                        "reelCount": 4,
                        "odds": 4,
                    },
                    {
                        "reelCount": 5,
                        "odds": 10,
                    }
                ]
            },
            {
                "id": "K_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 3,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 12,
                    }
                ]
            },
            {
                "id": "A_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 3,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 12,
                    }
                ]
            },
            {
                "id": "stick_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 15,
                    }
                ]
            },
            {
                "id": "water_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 6,
                    },
                    {
                        "reelCount": 4,
                        "odds": 15,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    }
                ]
            },
            {
                "id": "guitar_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 8,
                    },
                    {
                        "reelCount": 4,
                        "odds": 20,
                    },
                    {
                        "reelCount": 5,
                        "odds": 40,
                    }
                ]
            },
            {
                "id": "skeleton_special",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 10,
                    },
                    {
                        "reelCount": 4,
                        "odds": 25,
                    },
                    {
                        "reelCount": 5,
                        "odds": 50,
                    }
                ]
            },
            {
                "id": "scatter", //幸运符号
                "chance": 50,
                "odds": 0,
                "isLucky": true
            },
            {
                "id": "wildcard", //百搭符号
                "chance": 50,
                "odds": 0,
            }
        ],
        //不规则slots
        "elements": [
            {
                "coordinate": {
                    row: 1,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "10_special",
                        chance: 0,
                    },
                    {
                        id: "J_special",
                        chance: 0,
                    },
                    {
                        id: "Q_special",
                        chance: 0,
                    },
                    {
                        id: "K_special",
                        chance: 0,
                    },
                    {
                        id: "A_special",
                        chance: 0,
                    },
                    {
                        id: "stick_special",
                        chance: 0,
                    },
                    {
                        id: "water_special",
                        chance: 0,
                    },
                    {
                        id: "guitar_special",
                        chance: 0,
                    },
                    {
                        id: "skeleton_special",
                        chance: 0,
                    }
                ],
            },
        ],
        "paylines": [],
    },
    //冰火双娇
    {
        "id": "slots_iceandfire",
        "gameType": "slots_iceandfire",
        "name": "冰火双娇",
        "reels": 6,
        "rows": 4,
        "symbols": [
            {
                "id": "diamond",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3, //从头开始连续的列数
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 20,
                    },
                    {
                        "reelCount": 6,
                        "odds": 30,
                    },
                    {
                        "reelCount": 7,
                        "odds": 40,
                    }
                ]
            },
            {
                "id": "club",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 20,
                    },
                    {
                        "reelCount": 6,
                        "odds": 30,
                    },
                    {
                        "reelCount": 7,
                        "odds": 40,
                    }
                ]
            },
            {
                "id": "heart",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 6,
                    },
                    {
                        "reelCount": 4,
                        "odds": 15,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    },
                    {
                        "reelCount": 6,
                        "odds": 40,
                    },
                    {
                        "reelCount": 7,
                        "odds": 50,
                    }
                ]
            },
            {
                "id": "spade",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 6,
                    },
                    {
                        "reelCount": 4,
                        "odds": 15,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    },
                    {
                        "reelCount": 6,
                        "odds": 40,
                    },
                    {
                        "reelCount": 7,
                        "odds": 50,
                    }
                ]
            },
            {
                "id": "clover",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 20,
                    },
                    {
                        "reelCount": 4,
                        "odds": 30,
                    },
                    {
                        "reelCount": 5,
                        "odds": 40,
                    },
                    {
                        "reelCount": 6,
                        "odds": 50,
                    },
                    {
                        "reelCount": 7,
                        "odds": 80,
                    }
                ]
            },
            {
                "id": "magnet",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 20,
                    },
                    {
                        "reelCount": 4,
                        "odds": 40,
                    },
                    {
                        "reelCount": 5,
                        "odds": 50,
                    },
                    {
                        "reelCount": 6,
                        "odds": 80,
                    },
                    {
                        "reelCount": 7,
                        "odds": 100,
                    }
                ]
            },
            {
                "id": "jar",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 20,
                    },
                    {
                        "reelCount": 6,
                        "odds": 30,
                    },
                    {
                        "reelCount": 7,
                        "odds": 40,
                    }
                ]
            },
            {
                "id": "treasure_chest",
                "chance": 100,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 40,
                    },
                    {
                        "reelCount": 4,
                        "odds": 60,
                    },
                    {
                        "reelCount": 5,
                        "odds": 80,
                    },
                    {
                        "reelCount": 6,
                        "odds": 100,
                    },
                    {
                        "reelCount": 7,
                        "odds": 200,
                    }
                ]
            },
            {
                "id": "scatter", //夺宝符号
                "chance": 180,
                "odds": 0,
                "isLucky": true,
            },
            {
                "id": "wildcard",
                "chance": 100,
                "odds": 0,
                "isWild": true,
            },
            {
                "id": "the_empty",
                "chance": 0,
                "odds": 0,
            }
        ],
        //不规则slots
        "elements": [
            {
                "coordinate": {
                    row: 1,
                    reel: 1,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 1,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 2,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 5,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 6,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 6,
                },
                "placeholder": "the_empty",
                "symbols": [],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 6,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 6,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            }
        ],
        "paylines": [],
        "freeGame": {
            "id": "slots_iceandfire",
            "gameType": "slots_iceandfire",
            "name": "冰火双娇",
            "reels": 7,
            "rows": 4,
            "symbols": [
                {
                    "id": "diamond",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3, //从头开始连续的列数
                            "odds": 5,
                        },
                        {
                            "reelCount": 4,
                            "odds": 10,
                        },
                        {
                            "reelCount": 5,
                            "odds": 20,
                        },
                        {
                            "reelCount": 6,
                            "odds": 30,
                        },
                        {
                            "reelCount": 7,
                            "odds": 40,
                        }
                    ]
                },
                {
                    "id": "club",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3,
                            "odds": 5,
                        },
                        {
                            "reelCount": 4,
                            "odds": 10,
                        },
                        {
                            "reelCount": 5,
                            "odds": 20,
                        },
                        {
                            "reelCount": 6,
                            "odds": 30,
                        },
                        {
                            "reelCount": 7,
                            "odds": 40,
                        }
                    ]
                },
                {
                    "id": "heart",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3,
                            "odds": 6,
                        },
                        {
                            "reelCount": 4,
                            "odds": 15,
                        },
                        {
                            "reelCount": 5,
                            "odds": 30,
                        },
                        {
                            "reelCount": 6,
                            "odds": 40,
                        },
                        {
                            "reelCount": 7,
                            "odds": 50,
                        }
                    ]
                },
                {
                    "id": "spade",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3,
                            "odds": 6,
                        },
                        {
                            "reelCount": 4,
                            "odds": 15,
                        },
                        {
                            "reelCount": 5,
                            "odds": 30,
                        },
                        {
                            "reelCount": 6,
                            "odds": 40,
                        },
                        {
                            "reelCount": 7,
                            "odds": 50,
                        }
                    ]
                },
                {
                    "id": "clover",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3,
                            "odds": 20,
                        },
                        {
                            "reelCount": 4,
                            "odds": 30,
                        },
                        {
                            "reelCount": 5,
                            "odds": 40,
                        },
                        {
                            "reelCount": 6,
                            "odds": 50,
                        },
                        {
                            "reelCount": 7,
                            "odds": 80,
                        }
                    ]
                },
                {
                    "id": "magnet",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3,
                            "odds": 20,
                        },
                        {
                            "reelCount": 4,
                            "odds": 40,
                        },
                        {
                            "reelCount": 5,
                            "odds": 50,
                        },
                        {
                            "reelCount": 6,
                            "odds": 80,
                        },
                        {
                            "reelCount": 7,
                            "odds": 100,
                        }
                    ]
                },
                {
                    "id": "jar",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3,
                            "odds": 5,
                        },
                        {
                            "reelCount": 4,
                            "odds": 10,
                        },
                        {
                            "reelCount": 5,
                            "odds": 20,
                        },
                        {
                            "reelCount": 6,
                            "odds": 30,
                        },
                        {
                            "reelCount": 7,
                            "odds": 40,
                        }
                    ]
                },
                {
                    "id": "treasure_chest",
                    "chance": 100,
                    "odds": 0,
                    "oddsForReel": [
                        {
                            "reelCount": 3,
                            "odds": 40,
                        },
                        {
                            "reelCount": 4,
                            "odds": 60,
                        },
                        {
                            "reelCount": 5,
                            "odds": 80,
                        },
                        {
                            "reelCount": 6,
                            "odds": 100,
                        },
                        {
                            "reelCount": 7,
                            "odds": 200,
                        }
                    ]
                },
                {
                    "id": "scatter", //夺宝符号
                    "chance": 100,
                    "freeChance": 0,
                    "odds": 0,
                    "isLucky": true,
                },
                {
                    "id": "wildcard",
                    "chance": 100,
                    "odds": 0,
                    "isWild": true,
                },
                {
                    "id": "the_empty",
                    "chance": 0,
                    "odds": 0,
                }
            ],
            //不规则slots
            "elements": [
                {
                    "coordinate": {
                        row: 1,
                        reel: 1,
                    },
                    "placeholder": "the_empty",
                    "symbols": [],
                },
                {
                    "coordinate": {
                        row: 2,
                        reel: 1,
                    },
                    "placeholder": "the_empty",
                    "symbols": [],
                },
                {
                    "coordinate": {
                        row: 1,
                        reel: 2,
                    },
                    "placeholder": "the_empty",
                    "symbols": [],
                },
                {
                    "coordinate": {
                        row: 1,
                        reel: 6,
                    },
                    "placeholder": "the_empty",
                    "symbols": [],
                },
                {
                    "coordinate": {
                        row: 1,
                        reel: 7,
                    },
                    "placeholder": "the_empty",
                    "symbols": [],
                },
                {
                    "coordinate": {
                        row: 2,
                        reel: 7,
                    },
                    "placeholder": "the_empty",
                    "symbols": [],
                },
                {
                    "coordinate": {
                        row: 3,
                        reel: 1,
                    },
                    "symbols": [
                        {
                            id: "wildcard",
                            chance: 0,
                        }
                    ],
                },
                {
                    "coordinate": {
                        row: 4,
                        reel: 1,
                    },
                    "symbols": [
                        {
                            id: "wildcard",
                            chance: 0,
                        }
                    ],
                },
                {
                    "coordinate": {
                        row: 3,
                        reel: 7,
                    },
                    "symbols": [
                        {
                            id: "wildcard",
                            chance: 0,
                        }
                    ],
                },
                {
                    "coordinate": {
                        row: 4,
                        reel: 7,
                    },
                    "symbols": [
                        {
                            id: "wildcard",
                            chance: 0,
                        }
                    ],
                }
            ],
            "paylines": [],
        }
    },
    //幸运麒麟
    {
        id: "slots_kylin", //game id
        gameType: "slots_kylin",
        name: "幸运麒麟",
        reels: 3,
        rows: 4, //(第一、三列有三行、第二列有四行)
        pay: {
            //奖励符号出现的最小数目，小于此数目时，不会进行任何奖励
            minSymbolCount: 5,
            //针对单个符号的奖励
            symbols: [
                {
                    id: "0.5倍",
                    //倍率奖励符号的赔率
                    odds: 0.5,
                },
                {
                    id: "1倍",
                    //倍率奖励符号的赔率
                    odds: 1,
                },
                {
                    id: "2倍",
                    //倍率奖励符号的赔率
                    odds: 2,
                },
                {
                    id: "5倍",
                    //倍率奖励符号的赔率
                    odds: 5,
                },
                {
                    id: "10倍",
                    //倍率奖励符号的赔率
                    odds: 10,
                },
                {
                    id: "50倍",
                    //倍率奖励符号的赔率
                    odds: 50,
                },
                {
                    id: "100倍",
                    //倍率奖励符号的赔率
                    odds: 100,
                },
                {
                    id: "500倍",
                    //倍率奖励符号的赔率
                    odds: 500,
                },
                {
                    id: "the_empty", //空
                    //倍率奖励符号的赔率
                    odds: 0,
                },
                {
                    id: "null", //占位符
                    //倍率奖励符号的赔率
                    odds: 0,
                }
            ]
        },
        symbols: [
            {
                id: "kylin", //麒麟//symbol id,最好用有意义的名字
                index: 6,
                isWild: true,
                odds: 40, //当payline是此symbol时的赔率, 单位是0.01
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "seal", //印章
                index: 5,
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "bag", //袋子
                index: 4,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 10,
                chance: 150
            },
            {
                id: "necklace", //颈饰
                index: 3,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 2,
                chance: 150
            },
            {
                id: "grail", //圣杯
                index: 2,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1,
                chance: 150
            },
            {
                id: "ring", //戒指
                index: 1,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.6,
                chance: 200
            },
            {
                id: "token", //令牌
                index: 0,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.4,
                chance: 300
            },
            {
                id: "0.5倍", //投注金额的0.5倍
                index: 7,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "1倍", //投注金额的1倍
                index: 8,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "2倍", //投注金额的2倍
                index: 9,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "5倍", //投注金额的5倍
                index: 10,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "10倍", //投注金额的10倍
                index: 11,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "50倍", //投注金额的50倍
                index: 12,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "100倍", //投注金额的100倍
                index: 13,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "500倍", //投注金额的500倍
                index: 14,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "the_empty", //空
                index: 15,
                isWild: false,
                odds: 0,
                chance: 20 ////权重, 越大代表出现概率越高
            },
            {
                id: "null", //客户端不可见，的占位符
                index: 16,
                isWild: false,
                odds: 0,
                chance: 0 ////权重, 越大代表出现概率越高
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [
            {
                coordinate: {
                    row: 4, //行号
                    reel: 1 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [],
                placeholder: "null", //只生成占位符
            },
            {
                coordinate: {
                    row: 4, //行号
                    reel: 3 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [],
                placeholder: "null", //只生成占位符
            }
        ],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 3, reel: 1 },
                    { row: 4, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 2, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 2, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "6",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "7",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "8",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "9",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "10",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            }
        ],
        lucky: {
            probability: 0.01,
            //玩家获得八次免费旋转机会，且此时转盘上仅会出现倍率奖符。
            //幸运状态期间再次触发幸运状态，幸运状态回合数增加8次
            rabbit: {
                freeCount: 7, //送7次，加上原来的第1次旋转，客户端就会转8次
            }
        },
    },
    //幸运独角兽
    {
        id: "slots_unicorn", //game id
        gameType: "slots_unicorn",
        name: "幸运独角兽",
        reels: 3,
        rows: 3, //
        symbols: [
            {
                id: "unicorn", //symbol id,最好用有意义的名字，这里是独角兽
                index: 6,
                isWild: true,
                odds: 50, //当payline是此symbol时的赔率, 单位是1
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "crown", //王冠
                index: 5,
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "rainbow", //彩虹
                index: 4,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 5,
                chance: 100
            },
            {
                id: "marshmallow", //棉花糖
                index: 3,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 2,
                chance: 150
            },
            {
                id: "flower", //花
                index: 2,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1.6,
                chance: 150
            },
            {
                id: "cloud", //云
                index: 1,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 1,
                chance: 150
            },
            {
                id: "heart", //爱心
                index: 0,
                isWild: false, //wild symbol,可以代表任意symbol
                odds: 0.6,
                chance: 300
            },
            {
                id: "the_empty", //空白符号
                index: 7,
                isWild: false,
                odds: 0,
                chance: 0,
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 3, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            }
        ],
        //清一色，代表所有符号都是中奖符号
        allTheSame: {
            multiple: 10, //获得奖金的倍数
        },
        lucky: {
            probability: 0.001,
            //幸运虎幸运模式配置
            //幸运状态触发时，会随机选择一个符号(不包括百搭符号)，随后转轴将只由三种符号：随机选择的符号、百搭符号和空白符号组成。    
            //当所有转轴停止旋转后，如果转轴上出现1个或更多非空白符号，所有转轴将再次旋转，之前出的非空白符号将保留在它们的位置上。
            //在所有转轴停止旋转后，如果转轴上不再出现额外的非空白符号，则幸运状态结束并支付奖金
            //不过，在幸运独角兽的幸运模式下，并不会出现百搭符号。
            tiger: {
                //第一步，从以下符号列表中选择一个符号
                phase1Symbols: [
                    {
                        id: "crown", //王冠
                        chance: 100
                    },
                    {
                        id: "rainbow", //彩虹
                        chance: 100
                    },
                    {
                        id: "marshmallow", //棉花糖
                        chance: 150
                    },
                    {
                        id: "flower", //花
                        chance: 150
                    },
                    {
                        id: "cloud", //云
                        chance: 150
                    },
                    {
                        id: "heart", //爱心
                        chance: 300
                    }
                ],
                phase2Symbols: [
                    {
                        //特殊符号id， 代表第一步被选中的符号id
                        id: "the_chosen",
                        chance: 100,
                    },
                    {
                        id: "the_empty",
                        chance: 100,
                    }
                ]
            }
        }
    },
    //幸运熊猫
    {
        id: "slots_panda", //game id
        gameType: "slots_panda",
        name: "幸运熊猫",
        reels: 3,
        rows: 4,
        symbols: [
            {
                id: "wild", //symbol id,最好用有意义的名字，这里是百搭
                isWild: true,
                odds: 50, //当payline是此symbol时的赔率, 单位是1
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "panda", //熊猫
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "bamboo", //竹子
                isWild: false,
                odds: 5,
                chance: 100
            },
            {
                id: "ring", //竹环
                isWild: false,
                odds: 2,
                chance: 150
            },
            {
                id: "box", //竹盒
                isWild: false,
                odds: 1.6,
                chance: 150
            },
            {
                id: "plants", //竹盆栽
                isWild: false,
                odds: 1,
                chance: 150
            },
            {
                id: "shoots", //竹笋
                isWild: false,
                odds: 0.6,
                chance: 300
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 4, reel: 1 },
                    { row: 4, reel: 2 },
                    { row: 4, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 4, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 4, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 3, reel: 1 },
                    { row: 4, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 3, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "6",
                points: [
                    { row: 2, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "7",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "8",
                points: [
                    { row: 2, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "9",
                points: [
                    { row: 1, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            },
            {
                id: "10",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            }
        ],
        roulette: [
            { id: "1", odds: 1, chance: 100 },
            { id: "2", odds: 2, chance: 100 },
            { id: "3", odds: 3, chance: 100 },
            { id: "4", odds: 4, chance: 100 },
            { id: "5", odds: 5, chance: 100 },
            { id: "6", odds: 6, chance: 100 },
            { id: "7", odds: 7, chance: 100 },
            { id: "8", odds: 8, chance: 100 },
            { id: "9", odds: 9, chance: 100 },
            { id: "10", odds: 10, chance: 100 },
            { id: "11", odds: 11, chance: 100 },
            { id: "12", odds: 12, chance: 100 },
            { id: "13", odds: 13, chance: 100 },
            { id: "14", odds: 14, chance: 100 }
        ]
    },
    //幸运小龙
    {
        id: "slots_loong", //game id
        gameType: "slots_loong",
        name: "幸运小龙",
        reels: 3,
        rows: 4,
        symbols: [
            {
                id: "loong", //symbol id,最好用有意义的名字，这里是小龙
                isWild: true,
                odds: 50, //当payline是此symbol时的赔率, 单位是1
                chance: 50 ////权重, 越大代表出现概率越高
            },
            {
                id: "crown", //王冠
                isWild: false,
                odds: 20,
                chance: 100
            },
            {
                id: "cup", //奖杯
                isWild: false,
                odds: 5,
                chance: 100
            },
            {
                id: "pot", //宝石壶
                isWild: false,
                odds: 2,
                chance: 150
            },
            {
                id: "heart", //爱心
                isWild: false,
                odds: 1.6,
                chance: 150
            },
            {
                id: "reel", //卷轴
                isWild: false,
                odds: 1,
                chance: 150
            },
            {
                id: "key", //钥匙
                isWild: false,
                odds: 0.6,
                chance: 300
            }
        ],
        //配置针对特定位置的symbol权重
        elements: [],
        //赔付线，每条线有多个点组成
        paylines: [
            {
                id: "1",
                points: [
                    { row: 4, reel: 1 },
                    { row: 4, reel: 2 },
                    { row: 4, reel: 3 },
                ]
            },
            {
                id: "2",
                points: [
                    { row: 4, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 4, reel: 3 },
                ]
            },
            {
                id: "3",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "4",
                points: [
                    { row: 3, reel: 1 },
                    { row: 3, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "5",
                points: [
                    { row: 3, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 3, reel: 3 },
                ]
            },
            {
                id: "6",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "7",
                points: [
                    { row: 2, reel: 1 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 3 },
                ]
            },
            {
                id: "8",
                points: [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 2 },
                    { row: 1, reel: 3 },
                ]
            }
        ],
    },
    //象财神
    {
        "id": "slots_ganeshagold",
        "gameType": "slots_ganeshagold",
        "name": "象财神",
        "reels": 5,
        "rows": 3,
        "symbols": [
            {
                "id": "J",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 8,
                    },
                    {
                        "reelCount": 5,
                        "odds": 15,
                    }
                ]
            },
            {
                "id": "Q",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 8,
                    },
                    {
                        "reelCount": 5,
                        "odds": 15,
                    }
                ]
            },
            {
                "id": "K",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 8,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    }
                ]
            },
            {
                "id": "A",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 8,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    }
                ]
            },
            {
                "id": "rice",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 10,
                    },
                    {
                        "reelCount": 4,
                        "odds": 15,
                    },
                    {
                        "reelCount": 5,
                        "odds": 45,
                    }
                ]
            },
            {
                "id": "basket",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 15,
                    },
                    {
                        "reelCount": 4,
                        "odds": 30,
                    },
                    {
                        "reelCount": 5,
                        "odds": 60,
                    }
                ]
            },
            {
                "id": "light",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 20,
                    },
                    {
                        "reelCount": 4,
                        "odds": 45,
                    },
                    {
                        "reelCount": 5,
                        "odds": 90,
                    }
                ]
            },
            {
                "id": "woman",
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 30,
                    },
                    {
                        "reelCount": 4,
                        "odds": 60,
                    },
                    {
                        "reelCount": 5,
                        "odds": 150,
                    }
                ]
            },
            {
                "id": "scatter", //幸运符号
                "chance": 50,
                "odds": 0,
                "isLucky": true
            },
            {
                "id": "wildcard", //百搭符号
                "chance": 50,
                "odds": 0,
                "isWild": true,
            }
        ],
        //不规则slots
        "elements": [
            {
                "coordinate": {
                    row: 1,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            }
        ],
        "paylines": [],
    },
    //麻将
    {
        "id": "slots_mjways",
        "gameType": "slots_mjways",
        "name": "麻将玩法1",
        "reels": 5,
        "rows": 6,
        "symbols": [
            {
                "id": "11", //两条竖杠
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3, //从头开始连续的列数
                        "odds": 2,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 10,
                    }
                ]
            },
            {
                "id": "00", //两枚铜钱
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 2,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 10,
                    }
                ]
            },
            {
                "id": "11111", //五条竖杠
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 4,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 20,
                    }
                ]
            },
            {
                "id": "00000", //五枚铜钱
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 4,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 20,
                    }
                ]
            },
            {
                "id": "cracks", //八万
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 6,
                    },
                    {
                        "reelCount": 4,
                        "odds": 15,
                    },
                    {
                        "reelCount": 5,
                        "odds": 40,
                    }
                ]
            },
            {
                "id": "square", //方块
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 8,
                    },
                    {
                        "reelCount": 4,
                        "odds": 20,
                    },
                    {
                        "reelCount": 5,
                        "odds": 60,
                    }
                ]
            },
            {
                "id": "red", //红中
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 10,
                    },
                    {
                        "reelCount": 4,
                        "odds": 40,
                    },
                    {
                        "reelCount": 5,
                        "odds": 80,
                    }
                ]
            },
            {
                "id": "green", //绿发
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 15,
                    },
                    {
                        "reelCount": 4,
                        "odds": 60,
                    },
                    {
                        "reelCount": 5,
                        "odds": 100,
                    }
                ]
            },
            {
                "id": "scatter", //幸运符号
                "chance": 50,
                "odds": 0,
                "isLucky": true,
            },
            {
                "id": "wildcard", //百搭符号
                "chance": 50,
                "odds": 0,
                "isWild": true,
            },
            {
                id: "null", //客户端不可见，的占位符
                odds: 0,
                chance: 0 ////权重, 越大代表出现概率越高
            }
        ],
        //不规则slots
        "elements": [
            {
                "coordinate": {
                    row: 1,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 5,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 6,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 1,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 5,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 6,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
        ],
        "paylines": [],
    },
    //麻将2
    {
        "id": "slots_mjways2",
        "gameType": "slots_mjways2",
        "name": "麻将玩法2",
        "reels": 5,
        "rows": 7,
        "symbols": [
            {
                "id": "11", //两条竖杠
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3, //从头开始连续的列数
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 6,
                    }
                ]
            },
            {
                "id": "00", //两枚铜钱
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 1,
                    },
                    {
                        "reelCount": 4,
                        "odds": 3,
                    },
                    {
                        "reelCount": 5,
                        "odds": 6,
                    }
                ]
            },
            {
                "id": "000", //三枚铜钱
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 2,
                    },
                    {
                        "reelCount": 4,
                        "odds": 4,
                    },
                    {
                        "reelCount": 5,
                        "odds": 10,
                    }
                ]
            },
            {
                "id": "11111", //五条竖杠
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 3,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 12,
                    }
                ]
            },
            {
                "id": "00000", //五枚铜钱
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 3,
                    },
                    {
                        "reelCount": 4,
                        "odds": 5,
                    },
                    {
                        "reelCount": 5,
                        "odds": 12,
                    }
                ]
            },
            {
                "id": "cracks", //八万
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 5,
                    },
                    {
                        "reelCount": 4,
                        "odds": 10,
                    },
                    {
                        "reelCount": 5,
                        "odds": 15,
                    }
                ]
            },
            {
                "id": "square", //方块
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 6,
                    },
                    {
                        "reelCount": 4,
                        "odds": 15,
                    },
                    {
                        "reelCount": 5,
                        "odds": 30,
                    }
                ]
            },
            {
                "id": "red", //红中
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 8,
                    },
                    {
                        "reelCount": 4,
                        "odds": 20,
                    },
                    {
                        "reelCount": 5,
                        "odds": 40,
                    }
                ]
            },
            {
                "id": "green", //绿财
                "chance": 150,
                "odds": 0,
                "oddsForReel": [
                    {
                        "reelCount": 3,
                        "odds": 10,
                    },
                    {
                        "reelCount": 4,
                        "odds": 25,
                    },
                    {
                        "reelCount": 5,
                        "odds": 50,
                    }
                ]
            },
            {
                "id": "scatter", //幸运符号
                "chance": 50,
                "freeChance": 10, //免费旋转时的权重
                "odds": 0,
                "isLucky": true,
            },
            {
                "id": "wildcard", //百搭符号
                "chance": 50,
                "odds": 0,
                "isWild": true,
            },
            {
                id: "null", //客户端不可见，的占位符
                odds: 0,
                chance: 0 ////权重, 越大代表出现概率越高
            }
        ],
        //不规则slots
        "elements": [
            {
                coordinate: {
                    row: 1, //行号
                    reel: 1 //列号
                },
                //配置symbol在特定位置的权重。（不同于symbol本身的权重）
                symbols: [],
                placeholder: "null", //只生成占位符
            },
            {
                coordinate: {
                    row: 1,
                    reel: 5
                },
                symbols: [],
                placeholder: "null",
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 5,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 6,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 7,
                    reel: 1,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 2,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 3,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 4,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
            {
                "coordinate": {
                    row: 5,
                    reel: 5,
                },
                "symbols": [
                    {
                        id: "wildcard",
                        chance: 0,
                    }
                ],
            },
        ],
        "paylines": [],
    }
];
exports.games = [
    ...exports.slots,
    //捕鱼达人
    {
        id: "fish_master",
        name: "捕鱼达人",
        gameType: "fish_master",
        maxFishCount: 1000, //鱼的最大数目
        //游戏最大空闲时间，超过这个时间没有用户发射子弹，服务器会主动结束游戏
        maxIdleTime: 180,
        fishTypes: [
            //鱼的种类
            //fishType: string,//鱼类型名
            //type: number,//鱼所属类型
            //hp: number,//鱼的血量
            //golds: number,//打死可获得的银币/金币数量
            //lockGolds: number,//解锁此种鱼需要的金币数量
            //lockLevel: number,//默认游戏等级达到多少级才解锁鱼
            //name: string,
            //desc: string,
            //scale: number //鱼缩放比例
            //speed: number//鱼默认游动速度
            {
                "fishType": "fish_bigred",
                "type": 1,
                "hp": 10,
                "golds": 10,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "红白腹鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 20,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_yellow",
                "type": 2,
                "hp": 10,
                "golds": 10,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "黄金腹鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 18,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_red",
                "type": 3,
                "hp": 20,
                "golds": 20,
                "lockGolds": 20,
                "lockLevel": 2,
                "name": "红纹石斑鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 30,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_denglongyu",
                "type": 4,
                "hp": 40,
                "golds": 40,
                "lockGolds": 40,
                "lockLevel": 3,
                "name": "胖墩灯笼鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.6,
                "speed": 30,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_fuyi",
                "type": 5,
                "hp": 50,
                "golds": 50,
                "lockGolds": 60,
                "lockLevel": 5,
                "name": "金色魔鬼鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.5,
                "speed": 30,
                "ttl": 120,
            },
            {
                "fishType": "fish_gui",
                "type": 6,
                "hp": 50,
                "golds": 60,
                "lockGolds": 100,
                "lockLevel": 6,
                "name": "红色海龟",
                "desc": "击中后可获得$银币",
                "scale": 0.6,
                "speed": 60,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_hailuoshuimu",
                "type": 7,
                "hp": 60,
                "golds": 70,
                "lockGolds": 80,
                "lockLevel": 7,
                "name": "海螺水母",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 20,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_hetun",
                "type": 8,
                "hp": 60,
                "golds": 80,
                "lockGolds": 90,
                "lockLevel": 8,
                "name": "灵动河豚",
                "desc": "击中后可获得$银币",
                "scale": 0.65,
                "speed": 20,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_shuimu",
                "type": 9,
                "hp": 80,
                "golds": 90,
                "lockGolds": 100,
                "lockLevel": 9,
                "name": "多彩水母",
                "desc": "击中后可获得$银币",
                "scale": 0.65,
                "speed": 25,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 10,
                "hp": 300,
                "golds": 100,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "缤纷大蓝鲨",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_jinshayu",
                "type": 11,
                "hp": 400,
                "golds": 100,
                "lockGolds": 400,
                "lockLevel": 21,
                "name": "奇幻大金鲨",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 42,
                "chance": 100,
                "ttl": 120,
            }
        ],
        bulletLevels: [
            {
                //子弹等级
                //cannonType: number,//大炮类型
                //typeIndex: number,//大炮数组下标
                //needGolds: number,//每使用一次此大炮需要消耗的金币数
                //hurtHp: number,//每打中一次鱼掉的血量
                //lockGolds: number,//解锁此种大炮需要的金币数量
                //lockLevel: number,//默认游戏等级达到多少级才解锁大炮
                "cannonType": 1,
                "typeIndex": 0,
                "needGolds": 10,
                "hurtHp": 5,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "1级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 2,
                "typeIndex": 1,
                "needGolds": 15,
                "hurtHp": 15,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "1级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 3,
                "typeIndex": 2,
                "needGolds": 30,
                "hurtHp": 30,
                "lockGolds": 300,
                "lockLevel": 3,
                "name": "3级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 4,
                "typeIndex": 3,
                "needGolds": 30,
                "hurtHp": 40,
                "lockGolds": 400,
                "lockLevel": 4,
                "name": "4级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 5,
                "typeIndex": 4,
                "needGolds": 50,
                "hurtHp": 45,
                "lockGolds": 500,
                "lockLevel": 5,
                "name": "5级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 6,
                "typeIndex": 5,
                "needGolds": 60,
                "hurtHp": 60,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "6级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 7,
                "typeIndex": 6,
                "needGolds": 70,
                "hurtHp": 70,
                "lockGolds": 2000,
                "lockLevel": 7,
                "name": "7级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            }
        ]
    },
    //鲨鱼
    {
        id: "fish_shark",
        name: "鲨鱼",
        gameType: "fish_shark",
        maxFishCount: 1000, //鱼的最大数目
        //游戏最大空闲时间，超过这个时间没有用户发射子弹，服务器会主动结束游戏
        maxIdleTime: 180,
        fishTypes: [
            //鱼的种类
            //fishType: string,//鱼类型名
            //type: number,//鱼所属类型
            //hp: number,//鱼的血量
            //golds: number,//打死可获得的银币/金币数量
            //lockGolds: number,//解锁此种鱼需要的金币数量
            //lockLevel: number,//默认游戏等级达到多少级才解锁鱼
            //name: string,
            //desc: string,
            //scale: number //鱼缩放比例
            //speed: number//鱼默认游动速度
            //ttl： number//鱼最大存活时间，单位秒
            {
                "fishType": "1",
                "type": 1,
                "hp": 2,
                "golds": 2,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "蝴蝶鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 20,
                "chance": 100,
                "ttl": 30,
            },
            {
                "fishType": "2",
                "type": 2,
                "hp": 10,
                "golds": 10,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "鲶鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 18,
                "chance": 100,
                "ttl": 30,
            },
            {
                "fishType": "3",
                "type": 3,
                "hp": 2,
                "golds": 2,
                "lockGolds": 20,
                "lockLevel": 2,
                "name": "狮子鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 30,
                "chance": 100,
                "ttl": 30,
            },
            {
                "fishType": "4",
                "type": 4,
                "hp": 2,
                "golds": 2,
                "lockGolds": 40,
                "lockLevel": 3,
                "name": "条纹鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.6,
                "speed": 30,
                "chance": 100,
                "ttl": 30,
            },
            {
                "fishType": "5",
                "type": 5,
                "hp": 2,
                "golds": 2,
                "lockGolds": 60,
                "lockLevel": 5,
                "name": "沙丁鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.5,
                "speed": 30,
                "ttl": 30,
            },
            {
                "fishType": "fish_gui",
                "type": 6,
                "hp": 50,
                "golds": 60,
                "lockGolds": 100,
                "lockLevel": 6,
                "name": "红色海龟",
                "desc": "击中后可获得$银币",
                "scale": 0.6,
                "speed": 60,
                "chance": 100,
                "ttl": 30000,
            },
            {
                "fishType": "fish_hailuoshuimu",
                "type": 7,
                "hp": 60,
                "golds": 70,
                "lockGolds": 80,
                "lockLevel": 7,
                "name": "海螺水母",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 20,
                "chance": 100,
                "ttl": 30,
            },
            {
                "fishType": "fish_hetun",
                "type": 8,
                "hp": 60,
                "golds": 80,
                "lockGolds": 90,
                "lockLevel": 8,
                "name": "灵动河豚",
                "desc": "击中后可获得$银币",
                "scale": 0.65,
                "speed": 20,
                "chance": 100,
                "ttl": 30000,
            },
            {
                "fishType": "fish_shuimu",
                "type": 9,
                "hp": 80,
                "golds": 90,
                "lockGolds": 100,
                "lockLevel": 9,
                "name": "多彩水母",
                "desc": "击中后可获得$银币",
                "scale": 0.65,
                "speed": 25,
                "chance": 100,
                "ttl": 30,
            },
            {
                "fishType": "fish_shayu",
                "type": 10,
                "hp": 300,
                "golds": 100,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "缤纷大蓝鲨",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 30,
            },
            {
                "fishType": "fish_jinshayu",
                "type": 11,
                "hp": 400,
                "golds": 100,
                "lockGolds": 400,
                "lockLevel": 21,
                "name": "奇幻大金鲨",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 42,
                "chance": 100,
                "ttl": 30,
            }
        ],
        bulletLevels: [
            {
                //子弹等级
                //cannonType: number,//大炮类型
                //typeIndex: number,//大炮数组下标
                //needGolds: number,//每使用一次此大炮需要消耗的金币数
                //hurtHp: number,//每打中一次鱼掉的血量
                //lockGolds: number,//解锁此种大炮需要的金币数量
                //lockLevel: number,//默认游戏等级达到多少级才解锁大炮
                "cannonType": 1,
                "typeIndex": 0,
                "needGolds": 1,
                "hurtHp": 1,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "1级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 2,
                "typeIndex": 1,
                "needGolds": 15,
                "hurtHp": 15,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "1级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 3,
                "typeIndex": 2,
                "needGolds": 30,
                "hurtHp": 30,
                "lockGolds": 300,
                "lockLevel": 3,
                "name": "3级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 4,
                "typeIndex": 3,
                "needGolds": 30,
                "hurtHp": 40,
                "lockGolds": 400,
                "lockLevel": 4,
                "name": "4级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 5,
                "typeIndex": 4,
                "needGolds": 50,
                "hurtHp": 45,
                "lockGolds": 500,
                "lockLevel": 5,
                "name": "5级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 6,
                "typeIndex": 5,
                "needGolds": 60,
                "hurtHp": 60,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "6级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 7,
                "typeIndex": 6,
                "needGolds": 70,
                "hurtHp": 70,
                "lockGolds": 2000,
                "lockLevel": 7,
                "name": "7级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            }
        ]
    },
    //捕鱼 鲸鱼
    {
        id: "fish_whale",
        name: "鲸鱼",
        gameType: "fish_whale",
        bulletTurnAround: true, //子弹碰到边界，会自动转向，直到打中鱼后才会消失        
        maxIdleTime: 180,
        maxFishCount: 1000, //鱼的最大数目
        maxBulletCount: 20, //最大子弹数
        fishTypes: [
            //鱼的种类
            //fishType: string,//鱼类型名
            //type: number,//鱼所属类型
            //hp: number,//鱼的血量
            //golds: number,//打死可获得的银币/金币数量
            //lockGolds: number,//解锁此种鱼需要的金币数量
            //lockLevel: number,//默认游戏等级达到多少级才解锁鱼
            //name: string,
            //desc: string,
            //scale: number //鱼缩放比例
            //speed: number//鱼默认游动速度
            //ttl： number//鱼最大存活时间，单位秒
            {
                "fishType": "fish_bigred",
                "type": 1,
                "hp": 2,
                "golds": 2,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "三文鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 20,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_yellow",
                "type": 2,
                "hp": 2,
                "golds": 1,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "金枪鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 18,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_red",
                "type": 3,
                "hp": 2,
                "golds": 2,
                "lockGolds": 20,
                "lockLevel": 2,
                "name": "鳕鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 30,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_denglongyu",
                "type": 4,
                "hp": 2,
                "golds": 2,
                "lockGolds": 40,
                "lockLevel": 3,
                "name": "沙丁鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.6,
                "speed": 30,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_fuyi",
                "type": 5,
                "hp": 2,
                "golds": 2,
                "lockGolds": 60,
                "lockLevel": 5,
                "name": "马鲛鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.5,
                "speed": 30,
                "ttl": 120,
            },
            {
                "fishType": "fish_gui",
                "type": 6,
                "hp": 2,
                "golds": 2,
                "lockGolds": 100,
                "lockLevel": 6,
                "name": "比目鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.6,
                "speed": 60,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_hailuoshuimu",
                "type": 7,
                "hp": 3,
                "golds": 1.2,
                "lockGolds": 80,
                "lockLevel": 7,
                "name": "多宝鱼",
                "desc": "击中后可获得$银币",
                "scale": 1,
                "speed": 20,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_hetun",
                "type": 8,
                "hp": 3,
                "golds": 2,
                "lockGolds": 90,
                "lockLevel": 8,
                "name": "石斑鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.65,
                "speed": 20,
                "chance": 100,
                "ttl": 30000,
            },
            {
                "fishType": "fish_shuimu",
                "type": 9,
                "hp": 3,
                "golds": 1.2,
                "lockGolds": 100,
                "lockLevel": 9,
                "name": "大黄鱼",
                "desc": "击中后可获得$银币",
                "scale": 0.65,
                "speed": 25,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 10,
                "hp": 4,
                "golds": 1,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "带鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_jinshayu",
                "type": 11,
                "hp": 400,
                "golds": 4,
                "lockGolds": 1.2,
                "lockLevel": 21,
                "name": "秋刀鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 42,
                "chance": 100,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 12,
                "hp": 4,
                "golds": 1.2,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "鲷鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 13,
                "hp": 5,
                "golds": 0.6,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "剥皮鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 14,
                "hp": 5,
                "golds": 2,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "鲣鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 15,
                "hp": 6,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "鳀鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 16,
                "hp": 6,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "灯笼鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 17,
                "hp": 6,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "斧头鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 18,
                "hp": 6,
                "golds": 1.2,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "鮟鱇鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 19,
                "hp": 7,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "皇带鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 20,
                "hp": 7,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "巨口鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 21,
                "hp": 7,
                "golds": 10.6,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "深海龙鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 22,
                "hp": 8,
                "golds": 0.4,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "毒蛇鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 23,
                "hp": 8,
                "golds": 0.7,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "尖牙鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 24,
                "hp": 8,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "银鲛",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 25,
                "hp": 8,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "皱鳃鲨",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 26,
                "hp": 14,
                "golds": 0.4,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "小丑鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 27,
                "hp": 14,
                "golds": 0.3,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "蝴蝶鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 28,
                "hp": 10,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "鹦嘴鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 29,
                "hp": 3,
                "golds": 0.8,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "狮子鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 30,
                "hp": 12,
                "golds": 5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "刺尾鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 31,
                "hp": 10,
                "golds": 5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "雀鲷",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 32,
                "hp": 1,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "隆头鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 33,
                "hp": 0.1,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "海马",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 34,
                "hp": 10,
                "golds": 3,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "蓝唐王鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 35,
                "hp": 20,
                "golds": 6,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "轿箱鲀",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 36,
                "hp": 5,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "曼波鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 37,
                "hp": 8,
                "golds": 2,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "电鳐",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 38,
                "hp": 9,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "石头鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 39,
                "hp": 1,
                "golds": 0.1,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "水母",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 40,
                "hp": 5,
                "golds": 3,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "躄鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 41,
                "hp": 7,
                "golds": 3,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "海蛾鱼",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            },
            {
                "fishType": "fish_shayu",
                "type": 42,
                "hp": 2,
                "golds": 0.5,
                "lockGolds": 300,
                "lockLevel": 20,
                "name": "叶海龙",
                "desc": "击中后可获得$金币",
                "scale": 0.5,
                "speed": 40,
                "ttl": 120,
            }
        ],
        bulletLevels: [
            {
                //子弹等级
                //cannonType: number,//大炮类型
                //typeIndex: number,//大炮数组下标
                //needGolds: number,//每使用一次此大炮需要消耗的金币数
                //hurtHp: number,//每打中一次鱼掉的血量
                //lockGolds: number,//解锁此种大炮需要的金币数量
                //lockLevel: number,//默认游戏等级达到多少级才解锁大炮
                "cannonType": 1,
                "typeIndex": 0,
                "needGolds": 1,
                "hurtHp": 1,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "1级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 2,
                "typeIndex": 1,
                "needGolds": 15,
                "hurtHp": 2,
                "lockGolds": 0,
                "lockLevel": 0,
                "name": "1级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 3,
                "typeIndex": 2,
                "needGolds": 30,
                "hurtHp": 3,
                "lockGolds": 300,
                "lockLevel": 3,
                "name": "3级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 4,
                "typeIndex": 3,
                "needGolds": 30,
                "hurtHp": 4,
                "lockGolds": 400,
                "lockLevel": 4,
                "name": "4级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 5,
                "typeIndex": 4,
                "needGolds": 50,
                "hurtHp": 5,
                "lockGolds": 500,
                "lockLevel": 5,
                "name": "5级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 6,
                "typeIndex": 5,
                "needGolds": 60,
                "hurtHp": 6,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "6级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 7,
                "typeIndex": 6,
                "needGolds": 70,
                "hurtHp": 7,
                "lockGolds": 2000,
                "lockLevel": 7,
                "name": "7级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 8,
                "typeIndex": 7,
                "needGolds": 60,
                "hurtHp": 8,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "8级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 9,
                "typeIndex": 8,
                "needGolds": 60,
                "hurtHp": 9,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "9级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 10,
                "typeIndex": 9,
                "needGolds": 60,
                "hurtHp": 10,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "10级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 11,
                "typeIndex": 10,
                "needGolds": 60,
                "hurtHp": 11,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "11级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 12,
                "typeIndex": 11,
                "needGolds": 60,
                "hurtHp": 12,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "12级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            },
            {
                "cannonType": 13,
                "typeIndex": 12,
                "needGolds": 60,
                "hurtHp": 13,
                "lockGolds": 1000,
                "lockLevel": 6,
                "name": "13级大炮",
                "desc": "发射子弹可造成鱼群$血量伤害"
            }
        ],
        //鱼群配置
        fishGroups: [],
    },
    //德州扑克
    {
        id: "holdem",
        name: "德州扑克 ",
        gameType: "holdem",
        minGold: 100,
        "rules": [
            //预翻牌圈，三人牌局，一号位玩家行为    
            {
                "action": "call",
                "playerCount": 3, //牌局人数
                "playerPosition": 1, //一号位
                //胜率高于33.3%, (0.333, 1)
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "3", //加注三倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 3, //牌局人数
                "playerPosition": 1, //一号位
                //胜率介于26.5%~33.3%, (0.265, 0.333)
                "lowWinRate": 0.265,
                "highWinRate": 0.333,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1",
                "playerCount": 3,
                "playerPosition": 1,
                "lowWinRate": 0.265,
                "highWinRate": 0.333,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 1,
                //胜率低于26.5%, (0, 0.265)
                "lowWinRate": 0,
                "highWinRate": 0.265,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，三人牌局，二号位玩家行为
            {
                "action": "call",
                "playerCount": 3, //牌局人数
                "playerPosition": 2, //二号位
                //胜率高于33.3%, (0.333, 1)
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "3", //加注三倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 3, //牌局人数
                "playerPosition": 2, //二号位
                //胜率介于26.5%~33.3%, (0.265, 0.333)
                "lowWinRate": 0.265,
                "highWinRate": 0.333,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowWinRate": 0.265,
                "highWinRate": 0.333,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                "lowWinRate": 0,
                "highWinRate": 0.265,
                //胜率低于26.5%, (0, 0.265)
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，三人牌局，三号位玩家行为
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.3,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "3", //加注三倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.29,
                "round": "pre_flop",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 3,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.01,
                "round": "pre_flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 3, //三号位
                //胜率介于26.5%~33.3%, (0.265, 0.333)
                "lowWinRate": 0.265,
                "highWinRate": 0.333,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1",
                "playerCount": 3,
                "playerPosition": 3,
                "lowWinRate": 0.265,
                "highWinRate": 0.333,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2",
                "playerCount": 3,
                "playerPosition": 3,
                "lowWinRate": 0.265,
                "highWinRate": 0.333,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                //胜率低于26.5%, (0, 0.265)
                "lowWinRate": 0,
                "highWinRate": 0.265,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，四人牌局，一号位玩家行为
            {
                "action": "call",
                "playerCount": 4, //牌局人数
                "playerPosition": 1, //一号位
                //胜率高于25.0%, (0.250, 1)
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.1,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 4, //牌局人数
                "playerPosition": 1, //一号位
                //胜率介于19.5%~25.0%, (0.195, 0.250)
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 1,
                //胜率低于19.5%, (0, 0.195)
                "lowWinRate": 0,
                "highWinRate": 0.195,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，四人牌局，二号位玩家行为
            {
                "action": "call",
                "playerCount": 4, //牌局人数
                "playerPosition": 2, //二号位
                //胜率高于25.0%, (0.250, 1)
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.1,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 4, //牌局人数
                "playerPosition": 2, //二号位
                //胜率介于19.5%~25.0%, (0.195, 0.250)
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                //胜率低于19.5%, (0, 0.195)
                "lowWinRate": 0,
                "highWinRate": 0.195,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，四人牌局，三号位玩家行为
            {
                "action": "call",
                "playerCount": 4, //牌局人数
                "playerPosition": 3, //三号位
                //胜率高于25.0%, (0.250, 1)
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.3,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 4, //牌局人数
                "playerPosition": 3, //三号位
                //胜率介于19.5%~25.0%, (0.195, 0.250)
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                //胜率低于19.5%, (0, 0.195)
                "lowWinRate": 0,
                "highWinRate": 0.195,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，四人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 4, //四号位
                //胜率高于25.0%, (0.250, 1)
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowWinRate": 0.333,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowWinRate": 0.250,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 4, //四号位
                //胜率介于19.5%~25.0%, (0.195, 0.250)
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowWinRate": 0.195,
                "highWinRate": 0.250,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                //胜率低于19.5%, (0, 0.195)
                "lowWinRate": 0,
                "highWinRate": 0.195,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，五人牌局，一号位玩家行为
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 1, //一号位
                //胜率高于20.0%, (0.200, 1)
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 1, //一号位
                //胜率介于16.5%~20.0%, (0.165, 0.200)
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.8,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 1,
                //胜率低于16.5%, (0, 0.165)
                "lowWinRate": 0,
                "highWinRate": 0.165,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，五人牌局，二号位玩家行为
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 2, //二号位
                //胜率高于20.0%, (0.200, 1)
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 2, //二号位
                //胜率介于16.5%~20.0%, (0.165, 0.200)
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.8,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                //胜率低于16.5%, (0, 0.165)
                "lowWinRate": 0,
                "highWinRate": 0.165,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，五人牌局，三号位玩家行为
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 3, //三号位
                //胜率高于20.0%, (0.200, 1)
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 3, //三号位
                //胜率介于16.5%~20.0%, (0.165, 0.200)
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.8,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                //胜率低于16.5%, (0, 0.165)
                "lowWinRate": 0,
                "highWinRate": 0.165,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，五人牌局，四号位玩家行为
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 4, //四号位
                //胜率高于20.0%, (0.200, 1)
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.3,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 5, //牌局人数
                "playerPosition": 4, //四号位
                //胜率介于16.5%~20.0%, (0.165, 0.200)
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                //胜率低于16.5%, (0, 0.165)
                "lowWinRate": 0,
                "highWinRate": 0.165,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，五人牌局，五号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 5, //五号位
                //胜率高于20.0%, (0.200, 1)
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowWinRate": 0.200,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 5, //五号位
                //胜率介于16.5%~20.0%, (0.165, 0.200)
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowWinRate": 0.165,
                "highWinRate": 0.200,
                "probability": 0.5,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                //胜率低于16.5%, (0, 0.165)
                "lowWinRate": 0,
                "highWinRate": 0.165,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，六人牌局，一号位玩家行为
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 1, //一号位
                //胜率高于16.7%, (0.167, 1)
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 1, //一号位
                //胜率介于13.5%~16.7%, (0.135, 0.167)
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.8,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 1,
                //胜率低于13.5%, (0, 0.135)
                "lowWinRate": 0,
                "highWinRate": 0.135,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，六人牌局，二号位玩家行为
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 2, //二号位
                //胜率高于16.7%, (0.167, 1)
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 2, //二号位
                //胜率介于13.5%~16.7%, (0.135, 0.167)
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.8,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                //胜率低于13.5%, (0, 0.135)
                "lowWinRate": 0,
                "highWinRate": 0.135,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，六人牌局，三号位玩家行为
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 3, //三号位
                //胜率高于16.7%, (0.167, 1)
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 3, //三号位
                //胜率介于13.5%~16.7%, (0.135, 0.167)
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.8,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                //胜率低于13.5%, (0, 0.135)
                "lowWinRate": 0,
                "highWinRate": 0.135,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，六人牌局，四号位玩家行为
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 4, //四号位
                //胜率高于16.7%, (0.167, 1)
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.3,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "3", //加注三倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.1,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 4, //四号位
                //胜率介于13.5%~16.7%, (0.135, 0.167)
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                //胜率低于13.5%, (0, 0.135)
                "lowWinRate": 0,
                "highWinRate": 0.135,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，六人牌局，五号位玩家行为
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 5, //五号位
                //胜率高于16.7%, (0.167, 1)
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.3,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "3", //加注三倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.1,
                "round": "pre_flop",
            },
            {
                "action": "call",
                "playerCount": 6, //牌局人数
                "playerPosition": 5, //五号位
                //胜率介于13.5%~16.7%, (0.135, 0.167)
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.6,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                //胜率低于13.5%, (0, 0.135)
                "lowWinRate": 0,
                "highWinRate": 0.135,
                "probability": 1,
                "round": "pre_flop",
            },
            //预翻牌圈，六人牌局，六号位玩家行为
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "2", //加注二倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "3", //加注三倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowWinRate": 0.167,
                "highWinRate": 1,
                "probability": 0.4,
                "round": "pre_flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 6, //六号位
                //胜率介于13.5%~16.7%, (0.135, 0.167)
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.8,
                "round": "pre_flop",
            },
            {
                "action": "raise",
                "parameters": "1", //加注一倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowWinRate": 0.135,
                "highWinRate": 0.167,
                "probability": 0.2,
                "round": "pre_flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                //胜率低于13.5%, (0, 0.135)
                "lowWinRate": 0,
                "highWinRate": 0.135,
                "probability": 1,
                "round": "pre_flop",
            },
            //翻牌圈
            //翻牌圈，三人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 3, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.8,
                "round": "flop",
            },
            {
                "action": "check",
                "playerCount": 3,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.8,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，三人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 3,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，三人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 3, //三号位
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，四人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 4, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.1,
                "round": "flop",
            },
            {
                "action": "check",
                "playerCount": 4,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.1,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，四人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，四人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，四人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，五人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 5, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.1,
                "round": "flop",
            },
            {
                "action": "check",
                "playerCount": 5,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.1,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，五人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，五人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，五人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，五人牌局，五号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 5, //五号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 5,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，六人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 6, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.1,
                "round": "flop",
            },
            {
                "action": "check",
                "playerCount": 6,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "flop",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.1,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，六人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，六人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，六人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，六人牌局，五号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 5, //五号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 5,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //翻牌圈，六人牌局，六号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 6, //六号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1", //下注一倍或加注一倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2", //下注一倍或加注二倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3", //下注一倍或加注三倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 6,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,1",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,2",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "bet_or_raise",
                "parameters": "1,3",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "flop",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "flop",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "flop",
            },
            //转牌圈
            //转牌圈，三人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 3, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "2", //下注二倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "check",
                "playerCount": 3,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "2", //下注二倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，三人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 3,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，三人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 3, //三号位
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，四人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 4, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "check",
                "playerCount": 4,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，四人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，四人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，四人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，五人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 5, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "check",
                "playerCount": 5,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，五人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，五人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，五人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，五人牌局，五号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 5, //五号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 5,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，六人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 6, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "check",
                "playerCount": 6,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "turn",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.1,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，六人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，六人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，六人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，六人牌局，五号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 5, //五号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 5,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //转牌圈，六人牌局，六号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 6, //六号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 6,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "turn",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "turn",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "turn",
            },
            //河牌圈
            //河牌圈，三人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 3, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "2", //下注二倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "check",
                "playerCount": 3,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "2", //下注二倍
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，三人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 3,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，三人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 3, //牌局人数
                "playerPosition": 3, //三号位
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 3,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，四人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 4, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "check",
                "playerCount": 4,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，四人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，四人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，四人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 4, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 4,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 4,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，五人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 5, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "check",
                "playerCount": 5,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，五人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，五人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，五人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，五人牌局，五号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 5, //牌局人数
                "playerPosition": 5, //五号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 5,
                "playerPosition": 5,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 5,
                "playerPosition": 5,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，六人牌局，一号位玩家行为
            {
                "action": "check",
                "playerCount": 6, //牌局人数
                "playerPosition": 1, //一号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "check",
                "playerCount": 6,
                "playerPosition": 1,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.5,
                "round": "river",
            },
            {
                "action": "bet",
                "parameters": "1", //下注一倍
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.4,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 1,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 1,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，六人牌局，二号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 2, //二号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 2,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 2,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，六人牌局，三号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 3, //三号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 3,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 3,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，六人牌局，四号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 4, //四号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 4,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 4,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，六人牌局，五号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 5, //五号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 5,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 5,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
            //河牌圈，六人牌局，六号位玩家行为
            {
                "action": "call_or_check",
                "playerCount": 6, //牌局人数
                "playerPosition": 6, //六号位
                //得分高于4.9， (4.9, 11.0)
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2", //下注二倍或加注二倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4", //下注二倍或加注四倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6", //下注二倍或加注六倍
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 4.9,
                "highScore": 11.0,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "call_or_check",
                "playerCount": 6,
                "playerPosition": 6,
                //得分介于2.9~4.9， (2.9, 4.9)
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.3,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,2",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,4",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "bet_or_raise",
                "parameters": "2,6",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.2,
                "round": "river",
            },
            {
                "action": "allin",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                "lowScore": 2.9,
                "highScore": 4.9,
                "probability": 0.05,
                "round": "river",
            },
            {
                "action": "fold",
                "playerCount": 6,
                "playerPosition": 6,
                //得分介于0.0~2.9， (0.0, 2.9)
                "lowScore": 0.0,
                "highScore": 2.9,
                "probability": 1,
                "round": "river",
            },
        ]
    },
    {
        id: "niuniu:1",
        name: "牛牛1",
        gameType: "niuniu:1",
        bet: 1,
    }
];
