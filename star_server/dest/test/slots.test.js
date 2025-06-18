"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const LineSlotGame_1 = require("../SrvGame/lineslot/LineSlotGame");
const Constants_1 = require("../common/Constants");
const room_1 = require("./room");
const Coin_1 = require("../db/entity/Coin");
const game_setting_1 = require("./game_setting");
const LineSlotAllTheSame_1 = require("../SrvGame/lineslot/LineSlotAllTheSame");
const LineSlotPayline_1 = require("../SrvGame/lineslot/LineSlotPayline");
const Match3Game_1 = require("../SrvGame/match3/Match3Game");
const AggregationVerify_1 = require("../SrvGame/match3/AggregationVerify");
const GameConfig_1 = require("../SrvGame/slots/GameConfig");
const SlotMatch3_1 = require("../SrvGame/match3/SlotMatch3");
const DragonHatch_1 = require("../SrvGame/match3/DragonHatch");
const SlotMatch3_2 = require("../SrvGame/match3/SlotMatch3");
const Match3Generator_1 = require("../SrvGame/match3/Match3Generator");
const Bandito_1 = require("../SrvGame/match3/Bandito");
describe("slots", () => {
    it("playSlots", async () => {
        var _a;
        let gameTypes = [
            Constants_1.GameType.SLOTS_MOUSE,
            Constants_1.GameType.SLOTS_DRAGON,
            Constants_1.GameType.SLOTS_RABBIT,
            Constants_1.GameType.SLOTS_TIGER,
            Constants_1.GameType.SLOTS_OX,
            Constants_1.GameType.SLOTS_DOUBLE_HAPPY,
            Constants_1.GameType.SLOTS_KYLIN,
            Constants_1.GameType.SLOTS_UNICORN,
            Constants_1.GameType.SLOTS_PANDA,
            Constants_1.GameType.SLOTS_LOONG,
        ];
        gameTypes = [Constants_1.GameType.SLOTS_OX];
        for (let gameType of gameTypes) {
            let gameId = gameType;
            let client = await (0, room_1.createRoomClient)(gameType);
            const playSlotsRes = await client.callApi("slots/PlaySlots", { gameId: gameId, bet: "5.24" });
            (0, assert_1.strict)(playSlotsRes.isSucc);
            console.log(`play slots ${gameId} res:`, playSlotsRes, " count:", (_a = playSlotsRes.res) === null || _a === void 0 ? void 0 : _a.results.length);
        }
    });
    it("playMatch3", async () => {
        var _a, _b;
        let gameTypes = [
            Constants_1.GameType.SLOTS_SONGKRAN,
            Constants_1.GameType.SLOTS_DRAGONHATCH,
            Constants_1.GameType.SLOTS_WILDBANDITO,
            Constants_1.GameType.SLOTS_ICEANDFIRE,
            Constants_1.GameType.SLOTS_GANESHAGOLD,
            Constants_1.GameType.SLOTS_MJWAYS,
            Constants_1.GameType.SLOTS_MJWAYS2,
        ];
        gameTypes = [Constants_1.GameType.SLOTS_ICEANDFIRE];
        for (let gameType of gameTypes) {
            let gameId = gameType;
            let client = await (0, room_1.createRoomClient)(gameType);
            const playSlotsRes = await client.callApi("slots/PlayMatch3", { gameId: gameId, bet: "5.24" });
            console.log(`play slots ${gameId} res:`, playSlotsRes);
            console.log("results:" + ((_a = playSlotsRes.res) === null || _a === void 0 ? void 0 : _a.results.length), " rounds:", (_b = playSlotsRes.res) === null || _b === void 0 ? void 0 : _b.results[0].rounds.length);
            (0, assert_1.strict)(playSlotsRes.isSucc);
        }
    });
    it("match3", async () => {
        const gameType = Constants_1.GameType.SLOTS_GANESHAGOLD;
        const gameId = gameType;
        let setting = game_setting_1.slots.find((s) => s.id == gameId);
        (0, assert_1.strict)(setting);
        let game = Match3Game_1.Match3Game.createGame(setting, gameType);
        let r = game.spin({ coin: new Coin_1.Coin(10), sureWin: true });
        console.log("match3 res:", r);
    });
    it("payline", async () => {
        const gameType = Constants_1.GameType.SLOTS_MOUSE;
        const gameId = gameType;
        let setting = game_setting_1.slots.find((s) => s.id == gameId);
        (0, assert_1.strict)(setting);
        let symbols = [
            { id: 'peanut', coordinate: { row: 1, reel: 1 }, index: 0 },
            { id: 'orange', coordinate: { row: 1, reel: 2 }, index: 1 },
            {
                id: 'red_envelope',
                coordinate: { row: 1, reel: 3 },
                index: 4
            },
            { id: 'orange', coordinate: { row: 3, reel: 1 }, index: 1 },
            {
                id: 'blessing_bag',
                coordinate: { row: 3, reel: 2 },
                index: 3
            },
            { id: 'orange', coordinate: { row: 3, reel: 3 }, index: 1 },
            { id: 'mouse', coordinate: { row: 2, reel: 1 }, index: 6 },
            { id: 'mouse', coordinate: { row: 2, reel: 2 }, index: 6 },
            { id: 'mouse', coordinate: { row: 2, reel: 3 }, index: 6 }
        ];
        let payline = new LineSlotPayline_1.LineSlotPaylineVerify(setting);
        let r = payline.verify({ coin: new Coin_1.Coin(10) }, { symbols: symbols });
        console.log("verify result:", r);
    });
    it("playMouse", async () => {
        let results = [];
        let gameType = Constants_1.GameType.SLOTS_MOUSE;
        let gameId = gameType;
        let client = await (0, room_1.createRoomClient)(gameType);
        for (let i = 0; i < 10; i++) {
            const playSlotsRes = await client.callApi("slots/PlaySlots", { gameId: gameId, bet: "5.24" });
            console.log(`play slots ${gameId} res:`, playSlotsRes);
            (0, assert_1.strict)(playSlotsRes.isSucc);
            playSlotsRes.res.results.forEach((r) => {
                for (let line of r.paylines) {
                    let arr = [];
                    for (let p of line.points) {
                        for (let s of r.symbols) {
                            if (s.coordinate.row == p.row && s.coordinate.reel == p.reel) {
                                arr.push(s.id);
                            }
                        }
                    }
                    results.push({ index: i, line: line, symbols: arr });
                }
            });
        }
        results.forEach((r) => {
            console.log("index:", r.index, " payline:", r.line, " symbols:", r.symbols);
        });
    });
    it("spin", async () => {
        const gameType = Constants_1.GameType.SLOTS_MOUSE;
        const gameId = "slots_mouse";
        let setting = game_setting_1.slots.find((s) => s.id == gameId);
        (0, assert_1.strict)(setting);
        let game = LineSlotGame_1.LineSlotGame.createGame(setting, gameType);
        let winCount = 0;
        for (let i = 0; i < 1000; i++) {
            let r = game.spin({ coin: new Coin_1.Coin(10) });
            console.log("spin res:", r);
            if (r.results[0].winning) {
                winCount += 1;
            }
        }
        console.log("play slots, game id:", gameId, " count:1000, win count:", winCount);
    });
    it("win bet", async () => {
        const gameType = Constants_1.GameType.SLOTS_DRAGON;
        const gameId = gameType;
        let setting = game_setting_1.slots.find((s) => s.id == gameId);
        (0, assert_1.strict)(setting);
        let game = LineSlotGame_1.LineSlotGame.createGame(setting, gameType);
        let r = game.spin({ coin: new Coin_1.Coin(10), sureWin: true });
        console.log("win bet res:", r);
        (0, assert_1.strict)(r.payout.isGreaterThan(0));
    });
    it("all the same", async () => {
        const gameType = Constants_1.GameType.SLOTS_TIGER;
        const gameId = gameType;
        let setting = game_setting_1.slots.find((s) => s.id == gameId);
        (0, assert_1.strict)(setting);
        let game = new LineSlotAllTheSame_1.LineSlotAllTheSame(setting);
        (0, assert_1.strict)(game.game.allTheSame);
        let wildSym = game.game.symbols.find((s) => s.isWild);
        (0, assert_1.strict)(wildSym);
        let sym = game.game.symbols.find((s) => !s.isWild);
        (0, assert_1.strict)(sym);
        let arr = [];
        for (let i = 1; i <= game.game.rows; i++) {
            for (let j = 1; j <= game.game.reels; j++) {
                arr.push({ id: sym.id, coordinate: { row: i, reel: j } });
            }
        }
        let verifyResult = {
            isContinue: false,
            isValid: true,
        };
        let genResult = {
            symbols: arr
        };
        let res = game.pay({ coin: new Coin_1.Coin(100) }, genResult, verifyResult);
        console.log("all the same pay result:", res);
        (0, assert_1.strict)(res.allTheSame);
        (0, assert_1.strict)(res.payout.isEqualTo(10 * game.game.allTheSame.multiple));
    });
    it("test", async () => {
        const gameType = Constants_1.GameType.SLOTS_MOUSE;
        const gameId = "slots_mouse";
        let setting = game_setting_1.slots.find((s) => s.id == gameId);
        (0, assert_1.strict)(setting);
        let game = LineSlotGame_1.LineSlotGame.createGame(setting, gameType);
        let arr = [];
        let totalMoney = 0; // 初始化总金额为0
        let varian = [];
        let s2 = 0;
        let va = 0;
        for (let i = 0; i < 100000; i++) {
            let r = game.spin({ coin: new Coin_1.Coin(10) });
            let results = r.results;
            // 使用 reduce 方法累加 payout
            let money = results.reduce((acc, item) => acc + parseFloat(item.payout), 0);
            totalMoney += money;
            //console.log("spin res:", r);
            arr.push(money / 10);
        }
        console.log("Total money won:", totalMoney);
        console.log("roi", totalMoney / 100000);
        for (let j = 0; j < 100000; j++) {
            varian[j] = (totalMoney / 100000 - arr[j]) * (totalMoney / 100000 - arr[j]);
            s2 += varian[j];
            va = s2 / 100000;
        }
        console.log("varian:", va);
    });
    it("coin", async () => {
        {
            const c1 = new Coin_1.Coin(10);
            const c2 = new Coin_1.Coin(20);
            let c3 = c1.add(c2);
            let c4 = new Coin_1.Coin(30);
            let r = (c3.isEqualTo(c4));
            (0, assert_1.strict)(r);
        }
        {
            let coin = new Coin_1.Coin(10.23456);
            console.log(coin.getValue().toString());
        }
        {
            let coin = new Coin_1.Coin(10.1222);
            let c = new Coin_1.Coin(coin.toString());
            (0, assert_1.strict)(c.isEqualTo(coin));
        }
        {
            let coin = new Coin_1.Coin(10.12223);
            let c = new Coin_1.Coin(coin.toString());
            (0, assert_1.strict)(!c.isEqualTo(coin));
        }
    });
    it("generator", async () => {
        let gameType = Constants_1.GameType.SLOTS_GANESHAGOLD;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let gen = new Match3Generator_1.Match3Generator(game, false, false);
        let res = gen.generateGameSymbols();
        console.log("game symbols:", game.symbols.length, game.symbols[0]);
    });
    it("paySymbol", async () => {
        let symbols = [
            {
                "id": "spade",
                "coordinate": {
                    "row": 1,
                    "reel": 1
                }
            },
            {
                "id": "spade",
                "coordinate": {
                    "row": 1,
                    "reel": 2
                }
            },
            {
                "id": "club",
                "coordinate": {
                    "row": 1,
                    "reel": 3
                }
            },
            {
                "id": "heart",
                "coordinate": {
                    "row": 1,
                    "reel": 4
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 1,
                    "reel": 5
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 2,
                    "reel": 1
                }
            },
            {
                "id": "earth_dragon",
                "coordinate": {
                    "row": 2,
                    "reel": 2
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 2,
                    "reel": 3
                }
            },
            {
                "id": "wildcard",
                "coordinate": {
                    "row": 2,
                    "reel": 4
                }
            },
            {
                "id": "giant_dragon",
                "coordinate": {
                    "row": 2,
                    "reel": 5
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 3,
                    "reel": 1
                }
            },
            {
                "id": "heart",
                "coordinate": {
                    "row": 3,
                    "reel": 2
                }
            },
            {
                "id": "earth_dragon",
                "coordinate": {
                    "row": 3,
                    "reel": 3
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 3,
                    "reel": 4
                }
            },
            {
                "id": "spade",
                "coordinate": {
                    "row": 3,
                    "reel": 5
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 4,
                    "reel": 1
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 4,
                    "reel": 2
                }
            },
            {
                "id": "giant_dragon",
                "coordinate": {
                    "row": 4,
                    "reel": 3
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 4,
                    "reel": 4
                }
            },
            {
                "id": "earth_dragon",
                "coordinate": {
                    "row": 4,
                    "reel": 5
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 5,
                    "reel": 1
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 5,
                    "reel": 2
                }
            },
            {
                "id": "fire_dragon",
                "coordinate": {
                    "row": 5,
                    "reel": 3
                }
            },
            {
                "id": "spade",
                "coordinate": {
                    "row": 5,
                    "reel": 4
                }
            },
            {
                "id": "diamond",
                "coordinate": {
                    "row": 5,
                    "reel": 5
                }
            }
        ];
        let gameType = Constants_1.GameType.SLOTS_DRAGONHATCH;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let wildSym = game.symbols.find((s) => s.isWild);
        if (!wildSym) {
            throw new Error("can't find wildcard symbol");
        }
        let v = new AggregationVerify_1.AggregationVerify(game, console);
        let pay = new SlotMatch3_1.Match3Pay(game);
        let slotSymbols = new Array(game.rows * game.reels);
        for (let s of symbols) {
            let slotSym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
            slotSymbols[coIndex] = slotSym;
        }
        let bet = { coin: new Coin_1.Coin(10) };
        let genRes = { symbols: symbols, slotSymbols };
        let verifyRes = v.verify(bet, genRes);
        let payRes = pay.pay(bet, genRes, verifyRes, undefined);
        console.log("verify res:", verifyRes, " payRes:", payRes);
    });
    it("bandito", async () => {
        let symbols = [
            {
                "id": "scatter",
                "coordinate": {
                    "row": 1,
                    "reel": 1
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 1,
                    "reel": 2
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 1,
                    "reel": 3
                }
            },
            {
                "id": "K",
                "coordinate": {
                    "row": 1,
                    "reel": 4
                },
                "isGoldFrame": false
            },
            {
                "id": "J",
                "coordinate": {
                    "row": 1,
                    "reel": 5
                }
            },
            {
                "id": "water",
                "coordinate": {
                    "row": 2,
                    "reel": 1
                }
            },
            {
                "id": "10",
                "coordinate": {
                    "row": 2,
                    "reel": 2
                },
                "isGoldFrame": true
            },
            {
                "id": "J",
                "coordinate": {
                    "row": 2,
                    "reel": 3
                },
                "isGoldFrame": true
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 2,
                    "reel": 4
                }
            },
            {
                "id": "K",
                "coordinate": {
                    "row": 2,
                    "reel": 5
                }
            },
            {
                "id": "J",
                "coordinate": {
                    "row": 3,
                    "reel": 1
                }
            },
            {
                "id": "guitar",
                "coordinate": {
                    "row": 3,
                    "reel": 2
                },
                "isGoldFrame": false
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 3,
                    "reel": 3
                }
            },
            {
                "id": "guitar",
                "coordinate": {
                    "row": 3,
                    "reel": 4
                },
                "isGoldFrame": true
            },
            {
                "id": "10",
                "coordinate": {
                    "row": 3,
                    "reel": 5
                }
            },
            {
                "id": "J",
                "coordinate": {
                    "row": 4,
                    "reel": 1
                }
            },
            {
                "id": "J",
                "coordinate": {
                    "row": 4,
                    "reel": 2
                },
                "isGoldFrame": false
            },
            {
                "id": "K",
                "coordinate": {
                    "row": 4,
                    "reel": 3
                },
                "isGoldFrame": true
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 4,
                    "reel": 4
                }
            },
            {
                "id": "skeleton",
                "coordinate": {
                    "row": 4,
                    "reel": 5
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 5,
                    "reel": 1
                }
            },
            {
                "id": "J",
                "coordinate": {
                    "row": 5,
                    "reel": 2
                },
                "isGoldFrame": false
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 5,
                    "reel": 3
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 5,
                    "reel": 4
                }
            },
            {
                "id": "stick",
                "coordinate": {
                    "row": 5,
                    "reel": 5
                }
            }
        ];
        let gameType = Constants_1.GameType.SLOTS_WILDBANDITO;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let slotSymbols = new Array(game.rows * game.reels);
        for (let s of symbols) {
            let slotSym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
            slotSymbols[coIndex] = slotSym;
        }
        let bet = { coin: new Coin_1.Coin(10) };
        let genRes = { symbols: symbols, slotSymbols };
        let v = new Bandito_1.BanditoVerify(game);
        let pay = new SlotMatch3_1.Match3Pay(game);
        let verifyRes = v.verify(bet, genRes);
        let payRes = pay.pay(bet, genRes, verifyRes, undefined);
        console.log("verify res:", verifyRes, " payRes:", payRes);
    });
    it("iceandfire", async () => {
        let symbols = [
            {
                "id": "the_empty",
                "coordinate": {
                    "row": 1,
                    "reel": 1
                }
            },
            {
                "id": "the_empty",
                "coordinate": {
                    "row": 1,
                    "reel": 2
                }
            },
            {
                "id": "club",
                "coordinate": {
                    "row": 1,
                    "reel": 3
                }
            },
            {
                "id": "wildcard",
                "coordinate": {
                    "row": 1,
                    "reel": 4
                }
            },
            {
                "id": "the_empty",
                "coordinate": {
                    "row": 1,
                    "reel": 5
                }
            },
            {
                "id": "the_empty",
                "coordinate": {
                    "row": 1,
                    "reel": 6
                }
            },
            {
                "id": "the_empty",
                "coordinate": {
                    "row": 2,
                    "reel": 1
                }
            },
            {
                "id": "magnet",
                "coordinate": {
                    "row": 2,
                    "reel": 2
                }
            },
            {
                "id": "clover",
                "coordinate": {
                    "row": 2,
                    "reel": 3
                }
            },
            {
                "id": "treasure_chest",
                "coordinate": {
                    "row": 2,
                    "reel": 4
                }
            },
            {
                "id": "heart",
                "coordinate": {
                    "row": 2,
                    "reel": 5
                }
            },
            {
                "id": "the_empty",
                "coordinate": {
                    "row": 2,
                    "reel": 6
                }
            },
            {
                "id": "clover",
                "coordinate": {
                    "row": 3,
                    "reel": 1
                }
            },
            {
                "id": "treasure_chest",
                "coordinate": {
                    "row": 3,
                    "reel": 2
                }
            },
            {
                "id": "spade",
                "coordinate": {
                    "row": 3,
                    "reel": 3
                }
            },
            {
                "id": "wildcard",
                "coordinate": {
                    "row": 3,
                    "reel": 4
                }
            },
            {
                "id": "jar",
                "coordinate": {
                    "row": 3,
                    "reel": 5
                }
            },
            {
                "id": "clover",
                "coordinate": {
                    "row": 3,
                    "reel": 6
                }
            },
            {
                "id": "treasure_chest",
                "coordinate": {
                    "row": 4,
                    "reel": 1
                }
            },
            {
                "id": "wildcard",
                "coordinate": {
                    "row": 4,
                    "reel": 2
                }
            },
            {
                "id": "wildcard",
                "coordinate": {
                    "row": 4,
                    "reel": 3
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 4,
                    "reel": 4
                }
            },
            {
                "id": "club",
                "coordinate": {
                    "row": 4,
                    "reel": 5
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 4,
                    "reel": 6
                }
            }
        ];
        let gameType = Constants_1.GameType.SLOTS_ICEANDFIRE;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let slotSymbols = new Array(game.rows * game.reels);
        for (let s of symbols) {
            let slotSym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
            slotSymbols[coIndex] = slotSym;
        }
        let bet = { coin: new Coin_1.Coin(10) };
        let genRes = { symbols: symbols, slotSymbols };
        let v = new SlotMatch3_2.Match3Verify(game);
        let pay = new SlotMatch3_1.Match3Pay(game);
        let verifyRes = v.verify(bet, genRes);
        let payRes = pay.pay(bet, genRes, verifyRes, undefined);
        console.log("verify res:", verifyRes, " payRes:", payRes);
    });
    it("dragon", async () => {
        let gameType = Constants_1.GameType.SLOTS_DRAGONHATCH;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let gen = new DragonHatch_1.DragonHatchGenerator(game, console, false, false);
        console.log("high value symbol:", gen.highValueSymbols);
        let lowValues = game.symbols.filter((s) => s.isLowValue);
        console.log("low values:", lowValues);
    });
    it("mjways2", async () => {
        let symbols = [
            {
                "id": "null",
                "coordinate": {
                    "row": 1,
                    "reel": 1
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 1,
                    "reel": 2
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 1,
                    "reel": 3
                }
            },
            {
                "id": "square",
                "coordinate": {
                    "row": 1,
                    "reel": 4
                }
            },
            {
                "id": "null",
                "coordinate": {
                    "row": 1,
                    "reel": 5
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 2,
                    "reel": 1
                }
            },
            {
                "id": "square",
                "coordinate": {
                    "row": 2,
                    "reel": 2
                }
            },
            {
                "id": "11",
                "coordinate": {
                    "row": 2,
                    "reel": 3
                }
            },
            {
                "id": "green",
                "coordinate": {
                    "row": 2,
                    "reel": 4
                }
            },
            {
                "id": "11",
                "coordinate": {
                    "row": 2,
                    "reel": 5
                }
            },
            {
                "id": "square",
                "coordinate": {
                    "row": 3,
                    "reel": 1
                }
            },
            {
                "id": "green",
                "coordinate": {
                    "row": 3,
                    "reel": 2
                }
            },
            {
                "id": "square",
                "coordinate": {
                    "row": 3,
                    "reel": 3
                }
            },
            {
                "id": "green",
                "coordinate": {
                    "row": 3,
                    "reel": 4
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 3,
                    "reel": 5
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 4,
                    "reel": 1
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 4,
                    "reel": 2
                }
            },
            {
                "id": "00000",
                "coordinate": {
                    "row": 4,
                    "reel": 3
                }
            },
            {
                "id": "00000",
                "coordinate": {
                    "row": 4,
                    "reel": 4
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 4,
                    "reel": 5
                }
            },
            {
                "id": "cracks",
                "coordinate": {
                    "row": 5,
                    "reel": 1
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 5,
                    "reel": 2
                }
            },
            {
                "id": "square",
                "coordinate": {
                    "row": 5,
                    "reel": 3
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 5,
                    "reel": 4
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 5,
                    "reel": 5
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 6,
                    "reel": 1
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 6,
                    "reel": 2
                }
            },
            {
                "id": "11",
                "coordinate": {
                    "row": 6,
                    "reel": 3
                }
            },
            {
                "id": "green",
                "coordinate": {
                    "row": 6,
                    "reel": 4
                }
            },
            {
                "id": "11",
                "coordinate": {
                    "row": 6,
                    "reel": 5
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 7,
                    "reel": 1
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 7,
                    "reel": 2
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 7,
                    "reel": 3
                }
            },
            {
                "id": "scatter",
                "coordinate": {
                    "row": 7,
                    "reel": 4
                }
            },
            {
                "id": "green",
                "coordinate": {
                    "row": 7,
                    "reel": 5
                }
            }
        ];
        let gameType = Constants_1.GameType.SLOTS_MJWAYS2;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let slotSymbols = new Array(game.rows * game.reels);
        for (let s of symbols) {
            let slotSym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
            slotSymbols[coIndex] = slotSym;
        }
        let bet = { coin: new Coin_1.Coin(10) };
        let genRes = { symbols: symbols, slotSymbols };
        let ignoreRows = [1, 7];
        let ignorePoints = [{ row: 2, reel: 1 }, { row: 2, reel: 5 }];
        let v = new SlotMatch3_2.Match3Verify(game, undefined, ignoreRows, ignorePoints);
        let pay = new SlotMatch3_1.Match3Pay(game);
        let verifyRes = v.verify(bet, genRes);
        let payRes = pay.pay(bet, genRes, verifyRes, undefined);
        console.log("verify res:", verifyRes, " payRes:", payRes);
    });
    it("mj2", async () => {
        let results = [
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "0.0000",
                        "freeCount": 12,
                        "paySymbols": [],
                        "multipliers": [
                            1
                        ]
                    }
                ],
                "leftFreeCount": 0,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "240.0000",
                        "paySymbols": [
                            {
                                "id": "00000",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 5
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    },
                                    {
                                        "row": 6,
                                        "reel": 4
                                    }
                                ],
                                "payout": "120.0000"
                            }
                        ],
                        "multipliers": [
                            2
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "80.0000",
                        "paySymbols": [
                            {
                                "id": "000",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    }
                                ],
                                "payout": "20.0000"
                            }
                        ],
                        "multipliers": [
                            4
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            6
                        ]
                    }
                ],
                "leftFreeCount": 12,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "1440.0000",
                        "paySymbols": [
                            {
                                "id": "square",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 2
                                    },
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    }
                                ],
                                "payout": "240.0000"
                            }
                        ],
                        "multipliers": [
                            6
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            }
                        ],
                        "payout": "1000.0000",
                        "paySymbols": [
                            {
                                "id": "00000",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 2,
                                        "reel": 4
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    }
                                ],
                                "payout": "100.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 11,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "8400.0000",
                        "paySymbols": [
                            {
                                "id": "00",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 4
                                    },
                                    {
                                        "row": 3,
                                        "reel": 5
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 5
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    },
                                    {
                                        "row": 6,
                                        "reel": 4
                                    }
                                ],
                                "payout": "240.0000"
                            },
                            {
                                "id": "red",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 2
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 4
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 6,
                                        "reel": 2
                                    }
                                ],
                                "payout": "600.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "2200.0000",
                        "paySymbols": [
                            {
                                "id": "11",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 4,
                                        "reel": 3
                                    }
                                ],
                                "payout": "20.0000"
                            },
                            {
                                "id": "cracks",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 2
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    }
                                ],
                                "payout": "200.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 10,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 9,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "1000.0000",
                        "paySymbols": [
                            {
                                "id": "cracks",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 3,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 3
                                    }
                                ],
                                "payout": "100.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            }
                        ],
                        "payout": "4000.0000",
                        "paySymbols": [
                            {
                                "id": "red",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 3,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 3
                                    },
                                    {
                                        "row": 5,
                                        "reel": 4
                                    }
                                ],
                                "payout": "400.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 8,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 7,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "3200.0000",
                        "paySymbols": [
                            {
                                "id": "00000",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    }
                                ],
                                "payout": "120.0000"
                            },
                            {
                                "id": "green",
                                "points": [
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    },
                                    {
                                        "row": 6,
                                        "reel": 3
                                    }
                                ],
                                "payout": "200.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            }
                        ],
                        "payout": "5600.0000",
                        "paySymbols": [
                            {
                                "id": "00",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 4,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 4
                                    }
                                ],
                                "payout": "120.0000"
                            },
                            {
                                "id": "000",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 4
                                    },
                                    {
                                        "row": 6,
                                        "reel": 3
                                    }
                                ],
                                "payout": "120.0000"
                            },
                            {
                                "id": "red",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 2
                                    },
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 3
                                    }
                                ],
                                "payout": "320.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            }
                        ],
                        "payout": "5700.0000",
                        "paySymbols": [
                            {
                                "id": "11111",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 2
                                    },
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 5,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    }
                                ],
                                "payout": "90.0000"
                            },
                            {
                                "id": "red",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 3
                                    }
                                ],
                                "payout": "480.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            }
                        ],
                        "payout": "2400.0000",
                        "paySymbols": [
                            {
                                "id": "11",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 3,
                                        "reel": 2
                                    },
                                    {
                                        "row": 4,
                                        "reel": 4
                                    },
                                    {
                                        "row": 4,
                                        "reel": 5
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    },
                                    {
                                        "row": 6,
                                        "reel": 5
                                    }
                                ],
                                "payout": "240.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "600.0000",
                        "paySymbols": [
                            {
                                "id": "square",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 6,
                                        "reel": 2
                                    }
                                ],
                                "payout": "60.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 6,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "2000.0000",
                        "paySymbols": [
                            {
                                "id": "11111",
                                "points": [
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 4,
                                        "reel": 4
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    }
                                ],
                                "payout": "200.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 5,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "1200.0000",
                        "paySymbols": [
                            {
                                "id": "square",
                                "points": [
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 6,
                                        "reel": 2
                                    },
                                    {
                                        "row": 6,
                                        "reel": 3
                                    }
                                ],
                                "payout": "120.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 4,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 3,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 2,
                "virtualBigEvents": false
            },
            {
                "rounds": [
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "100.0000",
                        "paySymbols": [
                            {
                                "id": "00",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    }
                                ],
                                "payout": "10.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            }
                        ],
                        "payout": "6000.0000",
                        "paySymbols": [
                            {
                                "id": "cracks",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 2
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 4
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 5
                                    },
                                    {
                                        "row": 6,
                                        "reel": 4
                                    }
                                ],
                                "payout": "600.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "4400.0000",
                        "paySymbols": [
                            {
                                "id": "11",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 4
                                    },
                                    {
                                        "row": 5,
                                        "reel": 5
                                    },
                                    {
                                        "row": 6,
                                        "reel": 2
                                    },
                                    {
                                        "row": 6,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 4
                                    }
                                ],
                                "payout": "240.0000"
                            },
                            {
                                "id": "00000",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 4
                                    },
                                    {
                                        "row": 6,
                                        "reel": 3
                                    },
                                    {
                                        "row": 6,
                                        "reel": 4
                                    }
                                ],
                                "payout": "200.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "4300.0000",
                        "paySymbols": [
                            {
                                "id": "11",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    }
                                ],
                                "payout": "10.0000"
                            },
                            {
                                "id": "00",
                                "points": [
                                    {
                                        "row": 3,
                                        "reel": 1
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 3,
                                        "reel": 5
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 4
                                    },
                                    {
                                        "row": 6,
                                        "reel": 1
                                    }
                                ],
                                "payout": "120.0000"
                            },
                            {
                                "id": "11111",
                                "points": [
                                    {
                                        "row": 2,
                                        "reel": 3
                                    },
                                    {
                                        "row": 2,
                                        "reel": 4
                                    },
                                    {
                                        "row": 3,
                                        "reel": 3
                                    },
                                    {
                                        "row": 4,
                                        "reel": 4
                                    },
                                    {
                                        "row": 5,
                                        "reel": 1
                                    },
                                    {
                                        "row": 5,
                                        "reel": 2
                                    },
                                    {
                                        "row": 5,
                                        "reel": 3
                                    }
                                ],
                                "payout": "300.0000"
                            }
                        ],
                        "multipliers": [
                            10
                        ]
                    },
                    {
                        "dragons": [],
                        "symbols": [
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "null",
                                "coordinate": {
                                    "row": 1,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 4
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 3
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "00000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "000",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "deleteSymbols": [
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 2,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 3
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 3,
                                    "reel": 5
                                }
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "wildcard",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 2
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "00",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            }
                        ],
                        "newSymbols": [
                            {
                                "id": "11111",
                                "coordinate": {
                                    "row": 4,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "green",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 1
                                }
                            },
                            {
                                "id": "square",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 2
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "red",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 3
                                },
                                "isGoldFrame": true
                            },
                            {
                                "id": "cracks",
                                "coordinate": {
                                    "row": 5,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "11",
                                "coordinate": {
                                    "row": 6,
                                    "reel": 4
                                },
                                "isGoldFrame": false
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 4
                                }
                            },
                            {
                                "id": "scatter",
                                "coordinate": {
                                    "row": 7,
                                    "reel": 5
                                }
                            }
                        ],
                        "payout": "0.0000",
                        "paySymbols": [],
                        "multipliers": [
                            10
                        ]
                    }
                ],
                "leftFreeCount": 1,
                "virtualBigEvents": false
            }
        ];
        let gameType = Constants_1.GameType.SLOTS_MJWAYS2;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let luckySym = (0, GameConfig_1.findLuckSymbol)(game);
        (0, assert_1.strict)(luckySym);
        for (let res of results) {
            console.log("================, left free count:", res.leftFreeCount);
            for (let round of res.rounds) {
                let luckyCount = 0;
                for (let s of round.symbols) {
                    if (s.id == luckySym.id) {
                        luckyCount += 1;
                        console.log("lucky symbol:", s);
                    }
                }
                console.log("lucky count:", luckyCount, " free count:", round.freeCount);
            }
        }
    });
    it("ganeshagold", async () => {
        let symbols = [
            { id: 'Q', coordinate: { row: 1, reel: 1 } },
            { id: 'rice', coordinate: { row: 1, reel: 2 } },
            { id: 'J', coordinate: { row: 1, reel: 3 } },
            { id: 'basket', coordinate: { row: 1, reel: 4 } },
            { id: 'woman', coordinate: { row: 1, reel: 5 } },
            { id: 'Q', coordinate: { row: 2, reel: 1 } },
            { id: 'light', coordinate: { row: 2, reel: 2 } },
            { id: 'basket', coordinate: { row: 2, reel: 3 } },
            { id: 'K', coordinate: { row: 2, reel: 4 } },
            { id: 'woman', coordinate: { row: 2, reel: 5 } },
            { id: 'J', coordinate: { row: 3, reel: 1 } },
            { id: 'J', coordinate: { row: 3, reel: 2 } },
            { id: 'K', coordinate: { row: 3, reel: 3 } },
            { id: 'rice', coordinate: { row: 3, reel: 4 } },
            { id: 'A', coordinate: { row: 3, reel: 5 } }
        ];
        let gameType = Constants_1.GameType.SLOTS_GANESHAGOLD;
        let game = game_setting_1.slots.find((g) => g.gameType == gameType);
        (0, assert_1.strict)(game);
        let slotSymbols = new Array(game.rows * game.reels);
        for (let s of symbols) {
            let slotSym = (0, GameConfig_1.findSlotSymbol)(game, s.id);
            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, s.coordinate);
            slotSymbols[coIndex] = slotSym;
        }
        let bet = { coin: new Coin_1.Coin(10) };
        let genRes = { symbols: symbols, slotSymbols };
        let v = new SlotMatch3_2.Match3Verify(game);
        let pay = new SlotMatch3_1.Match3Pay(game);
        let verifyRes = v.verify(bet, genRes);
        let payRes = pay.pay(bet, genRes, verifyRes, undefined);
        console.log("verify res:", verifyRes, " payRes:", payRes);
    });
    /*
        it("test-high-payout", async () => {
            let game = new LineSlotGame(slots[2]);
            let arr = [];
            let totalMoney = 0; // 初始化总金额为0
            let varian=[];
            let s2 = 0 ;
            let va = 0;
            for (let i = 0; i < 100000; i++) {
                let r = game.spin(10);
                // 使用 reduce 方法累加 payout
                let money = r.reduce((acc, item) => acc + parseFloat(item.payout), 0);
                totalMoney += money;
                //console.log("spin res:", r);
                arr.push(money/10);
    
            }
            console.log("Total money won:", totalMoney);
            console.log("roi",totalMoney/100000)
            for (let j=0; j < 100000; j++){
                varian[j]=(totalMoney/100000-arr[j])*(totalMoney/100000-arr[j]);
                s2 += varian[j];
                va =s2/100000;
            }
            console.log("varian:",va);
        });
    */
});
