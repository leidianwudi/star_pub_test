System.register("chunks:///_virtual/animManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, SpriteAtlas, UITransform, AnimationClip, Node, Sprite, Animation, ResourceMgr, ModuleDef;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteAtlas = module.SpriteAtlas;
      UITransform = module.UITransform;
      AnimationClip = module.AnimationClip;
      Node = module.Node;
      Sprite = module.Sprite;
      Animation = module.Animation;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2ea04XkwfpHPLrtOLb0Jrk2", "animManager", undefined);
      var animManager = /*#__PURE__*/function () {
        function animManager() {
          this.cache = {};
        }
        var _proto = animManager.prototype;
        _proto.loadAnimRes = function loadAnimRes(url) {
          var _this = this;
          if (this.cache[url]) return this.cache[url];
          return new Promise(function (resolve, reject) {
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, "resources/effect/" + url, SpriteAtlas, function (err, SpriteAtlas) {
              if (err) {
                console.error("资源错误", err);
                reject("error");
                return;
              }
              var fs = SpriteAtlas.getSpriteFrames();
              _this.cache[url] = fs;
              resolve(fs);
            });
          });
        }
        /**清除缓存 */;
        _proto.clearCache = function clearCache() {
          this.cache = {};
        };
        _proto.createAnimNode = /*#__PURE__*/function () {
          var _createAnimNode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, speed, isLoop) {
            var node, anim, sps, uiTransform, originalSize, clip;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (speed === void 0) {
                    speed = 1;
                  }
                  if (isLoop === void 0) {
                    isLoop = false;
                  }
                  node = new Node();
                  node.addComponent(Sprite);
                  anim = node.addComponent(Animation);
                  _context.next = 7;
                  return this.loadAnimRes(url);
                case 7:
                  sps = _context.sent;
                  if (sps.length > 0) {
                    // 获取 UITransform 组件来设置节点大小
                    uiTransform = node.addComponent(UITransform);
                    originalSize = sps[0].getOriginalSize();
                    uiTransform.setContentSize(originalSize.width, originalSize.height);
                  }

                  /** 创建clip */
                  clip = AnimationClip.createWithSpriteFrames(sps, sps.length);
                  /** 设置clip属性 */
                  sps.forEach(function (spr, index) {
                    var x = spr['_offset']['x'];
                    var y = spr['_offset']['y'];
                    clip.events.push({
                      frame: speed / sps.length * index,
                      func: "setOffSet",
                      params: [x + "", y + "", index + ""]
                    });
                  });
                  clip.name = "anim_desk";
                  clip.speed = speed;
                  clip.wrapMode = isLoop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
                  /** 将clip添加到animation上 */
                  anim.defaultClip = clip;
                  anim.addClip(clip);
                  /** 播放设置默认的动画 */
                  return _context.abrupt("return", node);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function createAnimNode(_x, _x2, _x3) {
            return _createAnimNode.apply(this, arguments);
          }
          return createAnimNode;
        }();
        _createClass(animManager, null, [{
          key: "ins",
          get: function get() {
            if (this.sing == null) {
              this.sing = new animManager();
            }
            return this.sing;
          }
        }]);
        return animManager;
      }();
      animManager.sing = null;
      var AnimManager = exports('AnimManager', animManager.ins);
      var AnimUrl = exports('AnimUrl', {
        type: "type_",
        win: "win",
        lose: "lose",
        match: "match",
        time: "time"
      });
      var Sleep = exports('Sleep', function Sleep(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bezier.ts", ['cc'], function (exports) {
  var cclegacy, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a7659ruwepMK6BOOnkOa+Rf", "Bezier", undefined);
      var Bezier = exports('Bezier', /*#__PURE__*/function () {
        function Bezier() {}
        //    /**二阶贝塞尔曲线（t为占总时间比例）*/
        Bezier.twoBezier = function twoBezier(p0, p1, p2, t) {
          var x = Math.pow(1 - t, 2) * p0.x + 2 * t * (1 - t) * p1.x + Math.pow(t, 2) * p2.x;
          var y = Math.pow(1 - t, 2) * p0.y + 2 * t * (1 - t) * p1.y + Math.pow(t, 2) * p2.y;
          return new Vec2(x, y);
        };
        return Bezier;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/C_Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts', './C_Player.ts', './C_Tip.ts', './GameMain.ts', './Message.ts', './configMgr2.ts', './NetGameServer.ts', './PokerManager.ts', './PokerDefine.ts', './RoomMgr.ts', './define.ts', './ModuleDef.ts', './LanguageData.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, director, UiMgr, uiPanel, layerIndex, C_Player, C_Tip, GameMain, Message, configMgr, gameNet, PokerManager, PokerEventMessage, ROOM_STATUS, RoomMgr, Aclip, ModuleDef, LanguageData;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      UiMgr = module.UiMgr;
      uiPanel = module.uiPanel;
      layerIndex = module.layerIndex;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      C_Tip = module.C_Tip;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      configMgr = module.configMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      PokerEventMessage = module.PokerEventMessage;
      ROOM_STATUS = module.ROOM_STATUS;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "404d3zPEkdMMJI3uVeEgDf+", "C_Game", undefined); // /**房间状态 */
      var e_room_status = exports('e_room_status', {
        Normal: 0,
        Waiting: 1,
        Ready: 2,
        Play: 3,
        Settle: 4
      });
      var e_scene = exports('e_scene', {
        Login: 0,
        Game: 1
      });
      var C_Game = exports('C_Game', /*#__PURE__*/function () {
        function C_Game() {
          //下注范围
          this.minBet = 1;
          //1倍大盲注~250倍大盲注
          this.maxBet = 250;
          this._isMatch = false;
          this._isFriend = false;
          this.readyArr = void 0;
          this.roomMaster = void 0;
          this._sceneId = 0;
          //    /**匹配时间 */
          this.matchTime = void 0;
          //    /**操作时间 */
          this.opTime = void 0;
          //    /**操作时间戳 */
          this.timestamp = void 0;
          //    /**房间id */
          this.roomId = void 0;
          //    /**房间状态 */
          this.roomStatus = void 0;
          this.tempTime = void 0;
          this.histroyLogs = [];
          this.histroyUser = null;
          this.histroyInfo = [];
          this.historyBn = void 0;
          this.setScoreBn = void 0;
          this.readyBn = void 0;
          this.startGameBn = void 0;
          this.kickPlayerBn = void 0;
          this.playBn = void 0;
          this.actionTime = void 0;
          this.sbBet = void 0;
          this.bbBet = void 0;
          this.dealCardsNum = void 0;
          this.dealCards = void 0;
          this.dealType = void 0;
          this.dealTime = void 0;
          this.cardType = void 0;
          //    // action:S_OnAction;
          this.round = void 0;
          this.canPass = void 0;
          this.bet = void 0;
          this.call = void 0;
          this.min_raise = void 0;
          this.game_bet = void 0;
          this.cur_seat = void 0;
          //当前轮到出牌的人的位置
          this.pot = void 0;
          this.seat = void 0;
          //出牌人位置
          this.round_bet = void 0;
          this.action = void 0;
          //出牌行为 e_action
          this.hand_card = void 0;
          this.can_bet = void 0;
          this.allInArr = [];
          this.can_call = void 0;
          this.can_raise = void 0;
          this.gameOverPlayers = void 0;
          this.comm_ids = void 0;
          this.resumeBn = void 0;
          this.resumeData = void 0;
        }
        var _proto = C_Game.prototype;
        _proto.init = function init() {
          // this.playBn = false;
          this.opTime = null;
          this.timestamp = null;
          this.roomId = null;
          this.roomStatus = null;
          this.round = -1;
          this.resumeBn = false;
          gameNet.listenMsg("holdem/RoomHoldem", this.onRoomBack, this);
          gameNet.listenMsg("holdem/Action", this.onAction, this);
          gameNet.listenMsg("holdem/Deal", this.onDeal, this);
          gameNet.listenMsg("holdem/GameStart", this.onStartGameBack, this);
          gameNet.listenMsg("holdem/GameOver", this.onGameOver, this);
          gameNet.listenMsg("holdem/PlayResult", this.onPlayResult, this);
          gameNet.listenMsg("holdem/Resume", this.onResume, this);
          director.on(PokerEventMessage.POKER_USER_LEAVE_ROOM, this.onUserLeaveRoom, this);
          director.on(PokerEventMessage.POKER_USER_ENTER_ROOM, this.onUserEnterRoom, this);
          director.on(PokerEventMessage.POKER_USER_STATUS_CHANGE, this.onUserStatusChange, this);
        };
        _proto.uinit = function uinit() {
          gameNet.unlistenMsgAllByThis(this);
          director.off(PokerEventMessage.POKER_USER_LEAVE_ROOM, this.onUserLeaveRoom, this);
          director.off(PokerEventMessage.POKER_USER_ENTER_ROOM, this.onUserEnterRoom, this);
          director.off(PokerEventMessage.POKER_USER_STATUS_CHANGE, this.onUserStatusChange, this);
        };
        _proto.setScore = function setScore(num) {
          console.log("设置底分 点击");
          if (!C_Game.instance.roomId) {
            console.log("roomId null");
            return;
          }
          if (this.setScoreBn) {
            return;
          }
          console.log("设置底分 锁死");
          this.setScoreBn = true;
          console.log("设置底分 发送");
          // network.sendMsg(clientCmd.connector_main_setFriendBaseScore, { room_id: C_Game.instance.roomId, baseScore: num });
        };

        _proto.setScoreBack = function setScoreBack(msg) {
          this.setScoreBn = false;
          console.log("设置底分 开锁");
          if (msg.code == 0) {
            C_Player.instance.score = msg.baseScore;
            GameMain.evt.emit(Message.updateScore);
          } else {
            C_Tip.instance.showTip(msg.info);
          }
        };
        _proto.onFriendBaseScoreChange = function onFriendBaseScoreChange(msg) {
          C_Player.instance.score = msg.baseScore;
          GameMain.evt.emit(Message.updateScore);
        };
        _proto.ready = function ready(bn) {
          console.log("准备 点击");
          if (!C_Game.instance.roomId) {
            console.log("roomId null");
            return;
          }
          if (this.readyBn) {
            return;
          }
          console.log("准备 锁死");
          this.readyBn = true;
          console.log("准备 发送");
          // network.sendMsg(clientCmd.connector_main_ready, { room_id: C_Game.instance.roomId, isReady: bn });
        };

        _proto.readyBack = function readyBack(msg) {
          this.readyBn = false;
          console.log("准备 开锁");
          if (msg.code == 0) ;else {
            C_Tip.instance.showTip(msg.info);
          }
        };
        _proto.startGame = function startGame() {
          console.log("开始 点击");
          if (!C_Game.instance.roomId) {
            console.log("roomId null");
            return;
          }
          if (this.startGameBn) {
            return;
          }
          this.startGameBn = true;
          console.log("开始 锁死");
          console.log("房主开始游戏");
          // network.sendMsg(clientCmd.connector_main_startGame, { room_id: C_Game.instance.roomId });
          console.log("开始 发送");
        };
        _proto.startGameBack = function startGameBack(msg) {
          this.startGameBn = false;
          console.log("开始 开锁");
          if (msg.code == 0) ;else {
            C_Tip.instance.showTip(msg.info);
          }
        };
        _proto.kickPlayer = function kickPlayer(uid) {
          console.log("踢人 点击");
          if (!C_Game.instance.roomId) {
            console.log("roomId null");
            return;
          }
          if (this.kickPlayerBn) {
            return;
          }
          this.kickPlayerBn = true;
          console.log("踢人 锁死");
          console.log("房主踢人");
          // network.sendMsg(clientCmd.connector_main_kickPlayer, { room_id: C_Game.instance.roomId, kickUid: uid });
          console.log("踢人 发送");
        };
        _proto.kickPlayerBack = function kickPlayerBack(msg) {
          this.kickPlayerBn = false;
          console.log("踢人 开锁");
          if (msg.code == 0) ;else {
            C_Tip.instance.showTip(msg.info);
          }
        };
        _proto.cancelMatch = function cancelMatch() {
          console.log("取消匹配");
          // network.sendMsg(clientCmd.connector_main_cancelMatch, { room_id: C_Game.instance.roomId, uid: C_Player.instance.myPlayer.uid });
        };

        _proto.cancelMatchBack = function cancelMatchBack(msg) {
          if (msg.code == 0) {
            console.log("取消匹配成功");
            UiMgr.showMainView(uiPanel.LOGIN);
            C_Player.instance.score = 0;
          } else {
            C_Tip.instance.showTip(msg.info);
          }
        };
        _proto.leave = function leave() {
          tgx.UIAlert.show(LanguageData.getLangByID("dezhou_exit_game"), true, 'd3ddff', '206882', 'b9cef8', '0d2832').onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ok) {
                    tgx.AudioMgr.inst.audio.clearAll();
                    RoomMgr.inst.exitRoom();
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.leaveBack = function leaveBack(msg) {
          if (msg.code == 0) {
            console.log("退出游戏成功");
            UiMgr.closeLayerPanel(layerIndex.tips);
            UiMgr.showMainView(uiPanel.LOGIN);
            C_Game.instance.roomId = null;
          } else {
            C_Tip.instance.showTip(msg.info);
          }
        };
        /**bet加注的金额 */
        _proto.play = function play(seat, action, bet) {
          if (bet === void 0) {
            bet = 0;
          }
          console.log("加注 点击");
          if (this.playBn) {
            return;
          }
          this.playBn = true;
          console.log("加注 锁死");
          console.log("玩家操作seat:" + seat + ",action:" + action + ",bet:" + bet);
          var msg = {};
          msg.seat = seat;
          msg.action = action;
          msg.bet = bet;
          gameNet.sendMsg('holdem/Play', msg);
          console.log("加注 发送");
        }

        //    //---------------------------onPlayerKick----------------------------------
        ;

        _proto.onPlayerKick = function onPlayerKick(msg) {
          C_Tip.instance.showTip(msg.info);
          UiMgr.showMainView(uiPanel.LOGIN);
        };
        _proto.onRoomBack = function onRoomBack(msg) {
          var playerList = [];
          for (var i = 0; i < PokerManager.inst.roomData.userList.length; i++) {
            var userInfo = PokerManager.inst.roomData.userList[i];
            var player = {};
            player.uid = userInfo.userID;
            player.nickname = userInfo.nickname;
            player.gold = userInfo.gold;
            player.seat = userInfo.chairID;
            player.head = userInfo.head;
            player.isReady = userInfo.isReady;
            playerList.push(player);
          }
          this.sbBet = msg.sb_bet;
          this.bbBet = msg.bb_bet;
          C_Player.instance.score = msg.bb_bet;
          C_Player.instance.init(playerList);
          console.error("广播onPlayerMatch", JSON.stringify(msg));
          C_Game.instance.timestamp = gameNet.serverTimestamp;
          if (PokerManager.inst.roomData.roomStatus == ROOM_STATUS.PLAYING) {
            C_Game.instance.roomStatus = e_room_status.Play;
          } else {
            C_Game.instance.roomStatus = e_room_status.Waiting;
          }
          var date = new Date();
          C_Game.instance.tempTime = date.getTime();
          console.log(msg);
          GameMain.evt.emit(Message.bind_match);
          GameMain.evt.emit(Message.updateScore);
          console.log("game bind_match");
        };
        _proto.onStartGameBack = function onStartGameBack(msg) {
          console.error("广播onStartGameBack", JSON.stringify(msg));
          this.roomStatus = msg.room_status;
          C_Game.instance.roomId = msg.room_id;
          this.actionTime = msg.action_time;
          console.log(msg);
          GameMain.evt.emit(Message.startGame, msg);
        };
        _proto.onDeal = function onDeal(msg) {
          console.error("发牌 onDeal", JSON.stringify(msg));
          this.dealCardsNum = msg.card_ids;
          this.dealCards = configMgr.instance.idToICard(msg.card_ids);
          this.dealType = msg.type;
          this.dealTime = msg.op_time;
          this.cardType = msg.card_type;
          GameMain.evt.emit(Message.deal);
          console.log(msg);
        };
        _proto.onAction = function onAction(msg) {
          console.error("操作 onAction", JSON.stringify(msg));
          this.canPass = msg.can_check == 1;
          console.log("canPass:" + this.canPass);
          this.bet = msg.min_bet;
          this.call = msg.call;
          this.min_raise = msg.min_raise;
          this.game_bet = msg.game_bet;
          this.cur_seat = msg.cur_seat;
          if (msg.cur_seat != -1) {
            this.allInArr.push({
              seat: msg.seat
            });
          }
          this.pot = msg.pot;
          this.round = msg.round;
          this.seat = msg.seat;
          this.round_bet = msg.round_bet;
          this.action = msg.action;
          this.hand_card = msg.hand_card;
          this.can_bet = msg.can_bet;
          this.can_call = Boolean(msg.can_call);
          this.can_raise = Boolean(msg.can_raise);
          C_Game.instance.opTime = msg.op_time;
          var date = new Date();
          this.tempTime = date.getTime();
          console.log(msg);
          GameMain.evt.emit(Message.action);
        };
        _proto.onGameOver = function onGameOver(msg) {
          console.error("游戏结束 onGameOver", JSON.stringify(msg));
          tgx.AudioMgr.inst.audio.playEffect(Aclip.fly_chip, ModuleDef.POKER_DEZHOU);
          this.opTime = 0;
          // this.awards = msg.awards;
          var date = new Date();
          this.tempTime = date.getTime();
          console.log(this.tempTime);
          console.log(msg);
          this.gameOverPlayers = msg.players;
          C_Game.instance.roomId = String(msg.room_id);
          C_Game.instance.comm_ids = msg.comm_ids;
          if (C_Game.instance.isFriend) {
            C_Player.instance.score = 0;
          }
          GameMain.evt.emit(Message.gameOver);
        };
        _proto.onPlayResult = function onPlayResult(msg) {
          this.playBn = false;
          console.log("加注 开锁");
          if (msg.isSuccess) {
            console.log("playSuccess");
            GameMain.evt.emit(Message.playSuccess);
          } else {
            if (msg.error) C_Tip.instance.showTip(msg.error);
          }
        };
        _proto.onResume = function onResume(msg) {
          console.error("重连 onResume", JSON.stringify(msg));
          this.doResume(msg);
        };
        _proto.doResume = /*#__PURE__*/function () {
          var _doResume = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(msg) {
            var playerList, i, userInfo, player, j, date;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(msg.room_status == e_room_status.Settle)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this.canPass = msg.can_check == 1;
                  this.can_bet = msg.can_bet;
                  this.call = msg.call;
                  this.resumeData = msg;
                  this.round = msg.round_status;
                  this.bet = msg.min_bet;
                  this.min_raise = msg.min_raise;
                  this.game_bet = msg.players[C_Player.instance.myPlayer.seat].bet;
                  this.cur_seat = msg.op_seat;
                  this.resumeBn = true;
                  this.roomId = String(msg.room_id);
                  this.opTime = msg.op_time;
                  this.can_call = Boolean(msg.can_call);
                  this.can_raise = Boolean(msg.can_raise);
                  if (PokerManager.inst.roomData.roomStatus == ROOM_STATUS.PLAYING) {
                    C_Game.instance.roomStatus = e_room_status.Play;
                  } else {
                    C_Game.instance.roomStatus = e_room_status.Waiting;
                  }
                  playerList = [];
                  for (i = 0; i < PokerManager.inst.roomData.userList.length; i++) {
                    userInfo = PokerManager.inst.roomData.userList[i];
                    player = {};
                    player.uid = userInfo.userID;
                    player.nickname = userInfo.nickname;
                    player.gold = userInfo.gold;
                    player.seat = userInfo.chairID;
                    player.head = userInfo.head;
                    player.isReady = userInfo.isReady;
                    for (j = 0; j < msg.players.length; j++) {
                      if (userInfo.userID == msg.players[j].uid) {
                        player.bet = msg.players[j].bet;
                        player.hand_ids = msg.players[j].hand_ids;
                        player.allin_round == msg.players[j].allin_round;
                        player.seat_type = msg.players[j].seat_type;
                        player.last_action = msg.players[j].last_action ? msg.players[j].last_action : 0;
                        player.round_bet = msg.players[j].round_bet;
                      }
                    }
                    playerList.push(player);
                  }
                  date = new Date();
                  this.tempTime = date.getTime();
                  C_Player.instance.init(playerList);
                  GameMain.evt.emit(Message.resume);
                case 23:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doResume(_x2) {
            return _doResume.apply(this, arguments);
          }
          return doResume;
        }();
        _proto.onUserLeaveRoom = function onUserLeaveRoom(userInfo) {
          C_Player.instance.playerLeave(userInfo.userID);
          GameMain.evt.emit(Message.delPlayer, userInfo.userID);
        };
        _proto.onUserEnterRoom = function onUserEnterRoom(userInfo) {
          var player = {};
          player.uid = userInfo.userID;
          player.nickname = userInfo.nickname;
          player.gold = userInfo.gold;
          player.seat = userInfo.chairID;
          player.head = userInfo.head;
          player.isReady = userInfo.isReady;
          C_Player.instance.playerEnter(player);
          GameMain.evt.emit(Message.addPlayer, player.uid);
        };
        _proto.onUserStatusChange = function onUserStatusChange(userInfo) {
          var player = C_Player.instance.getPlayerByID(userInfo.userID);
          if (!player) return;
          player.isReady = userInfo.isReady;
          GameMain.evt.emit(Message.playerStatusChange, player.uid);
        };
        _createClass(C_Game, [{
          key: "isMatch",
          get: function get() {
            return this._isMatch;
          },
          set: function set(bn) {
            this._isMatch = bn;
            if (this._isMatch) {
              console.log("开始匹配。。。。。。");
            } else {
              console.log("停止匹配。。。。。。");
            }
          }
        }, {
          key: "isFriend",
          get: function get() {
            return this._isFriend;
          },
          set: function set(bn) {
            this._isFriend = bn;
            if (this._isFriend) {
              console.log("亲友场");
            } else {
              console.log("普通场");
            }
          }
        }, {
          key: "sceneId",
          get:
          //    /**当前场景ID */
          function get() {
            return this._sceneId;
          }
          //    /**设置当前场景ID */
          ,

          set: function set(num) {
            this._sceneId = num;
            // console.log("当前场景ID:" + this._sceneId);
          }
        }], [{
          key: "instance",
          get:
          //1倍大盲注~250倍大盲注
          function get() {
            if (!this._instance) {
              this._instance = new C_Game();
            }
            return this._instance;
          }
        }]);
        return C_Game;
      }());
      C_Game._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/C_Loading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts'], function (exports) {
  var _createClass, cclegacy, UiMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UiMgr = module.UiMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "741b86maZFBdLlXaEFr/2Zv", "C_Loading", undefined);
      var C_Loading = exports('C_Loading', /*#__PURE__*/function () {
        function C_Loading() {
          this.showBn = false;
        }
        var _proto = C_Loading.prototype;
        _proto.showLoading = function showLoading() {
          if (this.showBn) {
            return;
          }
          UiMgr.showLoadingView();
          this.showBn = true;
          console.log("showLoading");
        };
        _proto.hideLoading = function hideLoading() {
          UiMgr.hideLoadingView();
          this.showBn = false;
          console.log("hideLoading");
        };
        _createClass(C_Loading, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new C_Loading();
            }
            return this._instance;
          }
        }]);
        return C_Loading;
      }());
      C_Loading._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/C_Main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0599bYGBBREsJiA1Ae+R3NZ", "C_Main", undefined);
      var C_Main = exports('C_Main', /*#__PURE__*/function () {
        function C_Main() {
          this.host = "192.168.1.16";
          this.port = 4001;
          this.isLogining = false;
          this.isLocal = 0;
          //    /**重连 */
          this.doReconnectBn = void 0;
          this.reconnectCount = void 0;
          this.reconnectSec = void 0;
          //    /**重连间隔时间（s） */
          this.reconnectTime = 5;
          //    /**后台超时时间（s） */
          this.backStageTime = 20;
          this.friendBaseScoreList = void 0;
          this.kickBn = void 0;
          this.showPingBn = false;
          this.ping = 0;
          this.sendTime = void 0;
          this.doMainHeartID = void 0;
          this.doTimeOutID = void 0;
        }
        var _proto = C_Main.prototype;
        _proto.init = function init() {
          // this.kickBn = false;
          // this.doReconnectBn = false;
          // C_Player.instance.uid = Number(this.getQueryString("uid"));
          // C_Player.instance.token = this.getQueryString("token");
          // WebUtil.addr = this.getQueryString("houtai") ? "http://" + this.getQueryString("houtai") : WebUtil.addrStr;
          // this.host = this.getQueryString("host") ? this.getQueryString("host") : this.host;
          // this.port = Number(this.getQueryString("port")) ? Number(this.getQueryString("port")) : this.port;
          // C_Player.instance.host = this.host;
          // C_Player.instance.port = this.port;
          //        // this.isLocal = Number(this.getQueryString("local")) == 0 ? Number(this.getQueryString("local")) : this.isLocal;
          // let local = Number(this.getQueryString("local"))
          // this.isLocal = local != 0 ? local : this.isLocal;
          // cc.log("uid: " + C_Player.instance.uid, "token: " + C_Player.instance.token, "host: " + this.host, "port: " + this.port)

          // this.getUidToken();
        };
        _proto.addHandler = function addHandler() {
          // network.addHandler(clientCmd.connector_main_isNeedResume, this.svr_isNeedResume, this);
          // network.addHandler(clientCmd.connector_main_login, this.svr_onMainLogin, this);
          // network.addHandler(clientCmd.onKickUser, this.svr_onKickUser, this);
          // network.addHandler(clientCmd.connector_main_heart, this.svr_mainHeart, this);
        };
        _proto.getQueryString = function getQueryString(name) {
          // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          // var r = window.location.search.substring(1).match(reg);
          //        /* 添加了中间这段代码*/
          // if (window.location.search.indexOf("amp;")) {
          // var reg01 = new RegExp("amp;", "g");
          // var url = window.location.search.replace(reg01, "");
          // r = url.substring(1).match(reg);
          // }
          //        /* 添加了中间这段代码*/
          // if (r != null) {
          // return decodeURI(r[2]);
          // } else {
          // return null;
          // }
        };
        _proto.centerBackLog = function centerBackLog(msg) {
          // let obj = {
          // 10000: "请求成功！",
          // 10001: "无法连接到服务器，请检查网络！",
          // 10002: "服务器维护中，请稍后重试！ ",
          // 10003: "您的金币不足，无法开始游戏，请前往充值",
          // 10004: "游戏正在进行中，中途退出视为弃牌，是否确定中途退出",
          // 10005: "您的金币不足，无法继续游戏，请充值",
          // 10006: "您的金币不足，无法加注 ",
          // 10007: "用户不存在 ",
          // 99999: "Token错误"
          // }
          // console.log("中控返回:" + obj[msg.status]);
        };
        _proto.getUidToken = function getUidToken() {
          // if (!C_Player.instance.uid && this.getIdToLocal() && this.isLocal == 0) {
          // C_Player.instance.uid = this.getIdToLocal().uid
          // } else {
          // cc.sys.localStorage.removeItem("ID_For_Creator")
          // }
          // let token = this.getQueryString("token");
          // WebUtil.GET("/user/main.php?m=api_user&a=set_user&uid=" + C_Player.instance.uid + "&token=" + token, {}, (msg: any) => {
          // this.centerBackLog(msg)
          // if (msg.status == 10000) {
          // C_Player.instance.uid = Number(msg.content.uid)
          // this.setIdToLocal(C_Player.instance.uid)
          // C_Player.instance.token = msg.content.token
          // console.log(msg.content.token);
          // this.login()
          // }
          // });
        }
        //    /** 从本地读取 */
        ;

        _proto.getIdToLocal = function getIdToLocal() {
          // let objStr = cc.sys.localStorage.getItem("ID_For_Creator");
          // if (!objStr) {
          // return null;
          // }
          // return JSON.parse(objStr);
        };
        _proto.setIdToLocal = function setIdToLocal(id) {
          // let info = {
          // uid: id,
          // }
          // cc.sys.localStorage.setItem("ID_For_Creator", JSON.stringify(info));
        };
        _proto.login = function login() {
          // if (this.isLogining) {
          // return;
          // }

          // this.isLogining = true;
          // this.setNowNetBack();
          // network.connect(this.host, this.port);
        };
        _proto.setNowNetBack = function setNowNetBack() {
          // let svr_onConOpen = () => {
          // console.log("socket open")
          // C_Game.instance.init();
          // C_Login.instance.init();

          // this.addHandler();
          // network.sendMsg(clientCmd.connector_main_login, { "uid": C_Player.instance.uid, "token": C_Player.instance.token });
          // }

          // let svr_onConClose = () => {
          // console.log("socket close")
          // this.doReconnect();
          // }
          // network.onOpen(svr_onConOpen, this);
          // network.onClose(svr_onConClose, this);
        };
        _proto.doReconnect = function doReconnect() {
          // if (this.doReconnectBn) {
          // return;
          // }
          // this.doReconnectBn = true;
          // setTimeout(() => {
          // this.doReconnectBn = false;
          // }, this.reconnectTime * 1000)
          // console.log("是否被踢出：" + this.kickBn)
          // if (this.kickBn) {
          // return;
          // }
          // this.isLogining = false;
          // this.reconnect();
        };
        _proto.reconnect = function reconnect() {
          // console.log("reconnect");
          // network.disconnect();
          // this.login();
        };
        //    // 登入回调
        _proto.svr_onMainLogin = function svr_onMainLogin(msg) {
          // if (msg.token != C_Player.instance.token) {
          // return;
          // }
          // if (msg.code !== 0) {
          // C_Tip.instance.showTip(msg.info);
          // network.disconnect();
          // return;
          // }
          // this.reconnectTime = msg.reconnectTimeout / 1000;
          // this.backStageTime = msg.backStageTimeout / 1000;
          // console.log("svr_onMainLogin登录成功");
          // this.reconnectCount = 0;
          // C_Tip.instance.hideTip();
          // C_Loading.instance.hideLoading();
          // C_Game.instance.isMatch = false;
          // this.friendBaseScoreList = msg.friendBaseScoreList;
          // GameMain.evt.emit(Message.login_success);
          // this.mainHeart();
          // C_Player.instance.myPlayer.init(msg.uid, msg.nickname, msg.money, msg.head, msg.pic,0,0,0,0,[],msg.deskIndex);
          // console.log("nickname:" + C_Player.instance.myPlayer.nickname)
          // GameMain.evt.emit(Message.bind_role);
        };
        _proto.sendIsNeedResume = function sendIsNeedResume() {
          // console.log("sendIsNeedResume发送");
          // network.sendMsg(clientCmd.connector_main_isNeedResume);
        };
        _proto.svr_onKickUser = function svr_onKickUser(msg) {} // this.kickBn = true;
        // C_Tip.instance.showTip(LanguageData.getLangByID(13), true);
        ;

        _proto.mainHeart = function mainHeart() {
          // let date: Date = new Date();
          // this.sendTime = date.getTime();
          // network.sendMsg(clientCmd.connector_main_heart);
          // this.doTimeOut();
        };
        _proto.doMainHeart = function doMainHeart() {
          // if (this.doMainHeartID) {
          // clearTimeout(this.doMainHeartID);
          // }
          // this.doMainHeartID = setTimeout(() => {
          // this.mainHeart();
          // }, 100)
        };
        _proto.doTimeOut = function doTimeOut() {
          // if (this.doTimeOutID) {
          // clearTimeout(this.doTimeOutID);
          // }
          // this.doTimeOutID = setTimeout(() => {
          // this.isTimeOut();
          // }, 1000)
        };
        _proto.closeAllTimeOut = function closeAllTimeOut() {
          // clearTimeout(this.doTimeOutID);
          // clearTimeout(this.doMainHeartID);
        };
        _proto.isTimeOut = function isTimeOut() {
          // let date: Date = new Date();
          // let timeOut = date.getTime() - this.sendTime;
          // if (timeOut > 1000 && configMgr.instance.loaderOver) {
          // if (this.reconnectCount) {
          // this.reconnectCount++;
          // } else {
          // this.reconnectCount = 1;
          // }
          // let num = this.reconnectTime+1;
          // if (this.reconnectCount > this.reconnectTime) {
          // if (this.reconnectCount < 2*num) {
          // UiMgr.showLoadingView();
          // } else if (this.reconnectCount < (4*num)) {
          // UiMgr.hideLoadingView();
          // let count = Math.ceil((this.reconnectCount-this.reconnectTime*2)/num);
          // let time = (this.reconnectCount-num)%num;
          // let str = LanguageData.getLangByID(10)+count+LanguageData.getLangByID(26) +"(" + time + ")";
          // C_Tip.instance.showTip(str, true);
          // } else {
          // C_Tip.instance.showTip(LanguageData.getLangByID(27), true);
          // }
          // }
          // let temp = this.reconnectCount%this.reconnectTime;
          // if(temp == 0){
          // console.log("超时重连")
          // let date: Date = new Date();
          // this.sendTime = date.getTime();
          // C_Main.instance.doReconnect();
          // }
          // }
          // this.doTimeOut();
        };
        _proto.svr_mainHeart = function svr_mainHeart(msg) {} // let date: Date = new Date();
        // this.ping = date.getTime() - this.sendTime;
        // GameMain.evt.emit(Message.bind_ping);
        // if (this.ping > this.reconnectTime * 1000 && configMgr.instance.loaderOver) {
        // console.log("心跳超时")
        // this.doReconnect();
        // }
        // this.doMainHeart();
        ;

        _proto.svr_isNeedResume = function svr_isNeedResume(msg) {} //        //如果游戏界面无需重连，退回到主界面
        // console.log("退回到主界面" + msg)
        // if (msg.code !== 0) {
        // if(C_Player.instance.myPlayer.deskIndex!=-1){
        // C_Login.instance.match(0, 0 ,C_Player.instance.myPlayer.deskIndex);
        // }else{
        // UiMgr.hidePopupView();
        // UiMgr.showMainView(uiPanel.LOGIN);
        // }

        // }
        ;

        _createClass(C_Main, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new C_Main();
            }
            return this._instance;
          }
        }]);
        return C_Main;
      }());
      C_Main._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/C_Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './D_Player.ts', './UserMgr.ts'], function (exports) {
  var _createClass, cclegacy, D_Player, UserMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      D_Player = module.D_Player;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fb292F9wO5Bg7x6+oyojxM9", "C_Player", undefined);
      var C_Player = exports('C_Player', /*#__PURE__*/function () {
        function C_Player() {
          this.uid = 0;
          this._token = 0;
          this.host = "";
          this.port = 0;
          this.score = 0;
          //    /**玩家信息 */
          this._myPlayer = void 0;
          this.players = void 0;
        }
        var _proto = C_Player.prototype;
        _proto.init = function init(players) {
          C_Player.instance.myPlayer.uid = UserMgr.inst.uid;
          console.log("游戏中玩家信息初始化");
          C_Player.instance.players = [];
          for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var temp = new D_Player();
            temp.init(player.uid, player.nickname, player.gold, player.head, player.pic, player.seat, player.seat_type, player.bet, player.allin_round, player.hand_ids, 0, player.isReady, player.last_action, player.round_bet);
            C_Player.instance.players.push(temp);
            console.log("uid:" + player.uid);
            console.log("seat:" + player.seat);
            if (player.uid == UserMgr.inst.uid) {
              C_Player.instance.myPlayer = temp;
            }
          }
        };
        _proto.playerLeave = function playerLeave(id) {
          for (var i = 0; i < C_Player.instance.players.length; i++) {
            if (this.players[i].uid == id) {
              this.players.splice(i, 1);
              break;
            }
          }
        };
        _proto.playerEnter = function playerEnter(player) {
          var temp = new D_Player();
          temp.init(player.uid, player.nickname, player.gold, player.head, player.pic, player.seat, player.seat_type, player.bet, player.allin_round, player.hand_ids, 0, player.isReady);
          C_Player.instance.players.push(temp);
        };
        _proto.getPlayerBySeat = function getPlayerBySeat(seat) {
          if (this.players) {
            for (var i = 0; i < this.players.length; i++) {
              var player = this.players[i];
              if (player.seat == seat) {
                return player;
              }
            }
          }
          return null;
        };
        _proto.getPlayerByID = function getPlayerByID(id) {
          if (this.players) {
            for (var i = 0; i < this.players.length; i++) {
              var player = this.players[i];
              if (player.uid == id) {
                return player;
              }
            }
          }
          return null;
        };
        _proto.clearPlayers = function clearPlayers() {
          console.log("清空上局游戏中玩家数据");
          C_Player.instance.players = [];
        };
        _createClass(C_Player, [{
          key: "token",
          get: function get() {
            console.log("get token:" + this._token);
            return this._token;
          },
          set: function set(num) {
            // this._token = num;
            console.log("set token:" + this._token);
          }
        }, {
          key: "myPlayer",
          get: function get() {
            if (!this._myPlayer) {
              this._myPlayer = new D_Player();
            }
            return this._myPlayer;
          },
          set: function set(value) {
            this._myPlayer = value;
          }
        }, {
          key: "gamePlayer",
          get: function get() {
            if (this.players) {
              for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                if (player.isMe) {
                  return player;
                }
              }
            }
            return null;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new C_Player();
            }
            return this._instance;
          }
        }]);
        return C_Player;
      }());
      C_Player._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/C_Tip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts', './V_Tip.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, UiMgr, uiPanel, layerIndex, V_Tip;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UiMgr = module.UiMgr;
      uiPanel = module.uiPanel;
      layerIndex = module.layerIndex;
    }, function (module) {
      V_Tip = module.V_Tip;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd1203BdRxF252aW2uutc4l", "C_Tip", undefined);
      var C_Tip = exports('C_Tip', /*#__PURE__*/function () {
        function C_Tip() {}
        var _proto = C_Tip.prototype;
        _proto.showTip = function showTip(info, showAways, showCloseBtn, yesCb) {
          if (showAways === void 0) {
            showAways = false;
          }
          if (showCloseBtn === void 0) {
            showCloseBtn = false;
          }
          console.log("showTip");
          UiMgr.showTipsView(uiPanel.TIP, function (node) {
            node.getComponent(V_Tip).init(info, showCloseBtn, yesCb, showAways);
          });
        };
        _proto.hideTip = /*#__PURE__*/function () {
          var _hideTip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  UiMgr.closeLayerPanel(layerIndex.tips);
                  console.log("hideTip");
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function hideTip() {
            return _hideTip.apply(this, arguments);
          }
          return hideTip;
        }();
        _createClass(C_Tip, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new C_Tip();
            }
            return this._instance;
          }
        }]);
        return C_Tip;
      }());
      C_Tip._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cmdClient.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d5b67oINURLsIZigH25zfFd", "cmdClient", undefined);
      var clientCmd = exports('clientCmd', {
        connector_main_heart: "connector.main.heart",
        connector_main_isNeedResume: "connector.main.isNeedResume",
        connector_main_login: "connector.main.login",
        connector_main_match: "connector.main.match",
        connector_main_cancelMatch: "connector.main.cancelMatch",
        connector_main_robotMatch: "connector.main.robotMatch",
        connector_main_chat: "connector.main.chat",
        connector_main_online: "connector.main.online",
        connector_main_play: "connector.main.play",
        connector_main_tables: "connector.main.tables",
        connector_main_join: "connector.main.join",
        connector_main_ready: "connector.main.ready",
        connector_main_startGame: "connector.main.startGame",
        connector_main_setFriendBaseScore: "connector.main.setFriendBaseScore",
        connector_main_kickPlayer: "connector.main.kickPlayer",
        connector_main_leave: "connector.main.leave",
        callRobotByUid: "callRobotByUid",
        onPlayerKick: "onPlayerKick",
        onFriendBaseScoreChange: "onFriendBaseScoreChange",
        onKickUser: "onKickUser",
        onChat: "onChat",
        onPlayerMatch: "onPlayerMatch",
        onCancelMatch: "onCancelMatch",
        onStartGame: "onStartGame",
        onResume: "onResume",
        onDeal: "onDeal",
        onAction: "onAction",
        onGameOver: "onGameOver"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Coin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Bezier.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Vec3, Component, Bezier;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Bezier = module.Bezier;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7a99cypxh5NH47BEcDd7diU", "Coin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Coin = exports('Coin', (_dec = ccclass('Coin'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coin, _Component);
        function Coin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._p0 = void 0;
          _this._p1 = void 0;
          _this._p2 = void 0;
          _this._playBn = void 0;
          _this._t = void 0;
          return _this;
        }
        var _proto = Coin.prototype;
        _proto.setPos = function setPos(p0, p1, p2) {
          this._p0 = p0;
          this._p1 = p1;
          this._p2 = p2;
          this._playBn = false;
        };
        _createClass(Coin, [{
          key: "t",
          get: function get() {
            return this._t;
          },
          set: function set(t) {
            this._t = t;
            var pos = Bezier.twoBezier(this._p0, this._p1, this._p2, t);
            this.node.setPosition(new Vec3(pos.x, pos.y));
            if (t == 1) {
              this.node.parent = null;
            }
          }
        }]);
        return Coin;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/coinEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Coin.ts'], function (exports) {
  var _createClass, cclegacy, instantiate, tween, Vec2, Coin;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      tween = module.tween;
      Vec2 = module.Vec2;
    }, function (module) {
      Coin = module.Coin;
    }],
    execute: function () {
      cclegacy._RF.push({}, "57981FxGVZLz4fF64+rOp8Z", "coinEffect", undefined);
      var coinEffect = exports('coinEffect', /*#__PURE__*/function () {
        function coinEffect() {
          this.coin = null;
          this.parentNode = void 0;
          //    /**生产金币个数 */
          this.num = 20;
          //    /**金币创建时间区间 */
          this.createTime = 500;
          //    /**金币飞行时间 */
          this.flyTime = 800;
          //    /**贝塞尔曲线y轴浮动 */
          this.change = 100;
          //     /**起始位置浮动 */
          this.changePos = 10;
          this._timeOutArr = [];
          this.y = void 0;
        }
        var _proto = coinEffect.prototype;
        _proto.create = function create(sPos, ePos) {
          var _this = this;
          for (var i = 0; i < this.num; i++) {
            var time = this.createTime * Math.random();
            this._timeOutArr.push(setTimeout(function () {
              var coin = instantiate(_this.coin).getComponent(Coin);
              var sCPos = _this.sCPos(sPos);
              var cPos = _this.centerPos(sCPos, ePos);
              coin.setPos(sCPos, cPos, ePos);
              coin.t = 0;
              coin.node.parent = _this.parentNode;
              tween(coin).to(_this.flyTime / 1000, {
                t: 1
              }, {}).start();
            }, time));
            // console.log("XXXXXXXXXXXXXX："+this._timeOutArr.length)
          }
        };

        _proto.sCPos = function sCPos(pos) {
          var temp = new Vec2();
          temp.x = pos.x - this.changePos + 2 * this.changePos * Math.random();
          temp.y = pos.y - this.changePos + 2 * this.changePos * Math.random();
          return temp;
        };
        _proto.centerPos = function centerPos(p1, p2) {
          var pos = new Vec2();
          pos.x = p2.x - this.change + 2 * this.change * Math.random();
          pos.y = (p2.y - p1.y) / 2 + p1.y - this.change + 2 * this.change * Math.random();
          return pos;
        };
        _createClass(coinEffect, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new coinEffect();
            }
            return this._instance;
          }
        }]);
        return coinEffect;
      }());
      coinEffect._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/configMgr2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './animManager.ts', './GameMain.ts', './Message.ts', './uiMgr2.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var _createClass, cclegacy, JsonAsset, isValid, SpriteFrame, Prefab, Font, SpriteAtlas, sp, AnimUrl, GameMain, Message, uiPanel, ResourceMgr, ModuleDef;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
      isValid = module.isValid;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Font = module.Font;
      SpriteAtlas = module.SpriteAtlas;
      sp = module.sp;
    }, function (module) {
      AnimUrl = module.AnimUrl;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      uiPanel = module.uiPanel;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c31bDncw1FQKi6tXn5Y3VT", "configMgr", undefined);
      var configMgr = exports('configMgr', /*#__PURE__*/function () {
        function configMgr() {
          this._cards = void 0;
          this.loaderOver = void 0;
          this.total = void 0;
          this.count = void 0;
        }
        var _proto = configMgr.prototype;
        _proto.onloadConfig = function onloadConfig() {
          this.total = 0;
          this.count = 0;
          this.loaderOver = false;
          this.loadChat();
          this.loadCards();
          for (var key in uiPanel) {
            this.loadPanel(uiPanel[key]);
          }
          this.loadPic("resources/imgs/sBg");
          this.loadPic("resources/imgs/fBg");
          this.loadFont("resources/font/success/successFont");
          this.loadFont("resources/font/fail/failFont");
          this.loadPic("resources/imgs/btnGrey");
          this.loadPic("resources/imgs/btnNo");
          this.loadPic("resources/imgs/btnFlow");
          this.loadPic("resources/imgs/btnPass");
          this.loadPic("resources/imgs/btnAdd");
          this.loadPic("resources/imgs/card/back");
          for (var i = 1; i < 5; i++) {
            for (var j = 2; j < 15; j++) {
              this.loadPic("resources/imgs/card/" + i + "-" + j);
            }
          }
          for (var _i = 1; _i <= 10; _i++) {
            this.loadEffect("type_" + _i);
          }
          for (var _i2 = 1; _i2 <= 6; _i2++) {
            this.loadPic("resources/imgs/head/head_" + _i2);
          }
          this.loadEffect(AnimUrl.match);
          this.loadEffect(AnimUrl.time);
          this.loadRoomEffect("res/room/chuji/ChuJi");
          this.loadRoomEffect("res/room/zhongji/zhongji");
          this.loadRoomEffect("res/room/gaoji/gaoji");
        }
        //    /**加载聊天配置 */
        ;

        _proto.loadChat = function loadChat() {
          this.total++;
          this.doLoadChat();
        };
        _proto.doLoadChat = function doLoadChat() {
          var _this = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, "resources/json/chat", JsonAsset, function (err, asset) {
            if (err || !isValid(_this)) {
              _this.doLoadChat();
              return console.error(err);
            }
            configMgr.ChatTextArr = asset.json.chatList;
            _this.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }

        //    /**加载语言配置 */
        ;

        _proto.loadCards = function loadCards() {
          this.total++;
          this.doLoadCards();
        };
        _proto.doLoadCards = function doLoadCards() {
          var _this2 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, "resources/json/cards", JsonAsset, function (err, asset) {
            if (err) {
              // this.doLoadCards();
              return console.error(err);
            }
            _this2._cards = asset.json;
            _this2.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }
        //    /**加载图片 */
        ;

        _proto.loadPic = function loadPic(url) {
          this.total++;
          this.doLoadPic(url);
        };
        _proto.doLoadPic = function doLoadPic(url) {
          var _this3 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, url + "/spriteFrame", SpriteFrame, function (err, atlas) {
            if (err || !isValid(_this3)) {
              // this.doLoadPic(url);
              return console.error(err);
            }
            _this3.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        };
        _proto.loadPanel = function loadPanel(url) {
          this.total++;
          this.doLoadPanel(url);
        };
        _proto.doLoadPanel = function doLoadPanel(url) {
          var _this4 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, "resources/uiPanel/" + url, Prefab, function (err, atlas) {
            if (err || !isValid(_this4)) {
              // this.doLoadPanel(url);
              return console.error(err);
            }
            _this4.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }
        //    /**加载字体 */
        ;

        _proto.loadFont = function loadFont(url) {
          this.total++;
          this.doLoadFont(url);
        };
        _proto.doLoadFont = function doLoadFont(url) {
          var _this5 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, url, Font, function (err, atlas) {
            if (err || !isValid(_this5)) {
              // this.doLoadFont(url);
              return console.error(err);
            }
            _this5.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }
        //    /**加载特效 */
        ;

        _proto.loadEffect = function loadEffect(url) {
          this.total++;
          this.doLoadEffect(url);
        };
        _proto.doLoadEffect = function doLoadEffect(url) {
          var _this6 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, "resources/effect/" + url, SpriteAtlas, function (err, atlas) {
            if (err) {
              // this.doLoadEffect(url);
              return console.error(err);
            }
            _this6.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }
        /**加载特效 */;
        _proto.loadRoomEffect = function loadRoomEffect(url) {
          this.total++;
          this.doLoadRoomEffect(url);
        };
        _proto.doLoadRoomEffect = function doLoadRoomEffect(url) {
          var _this7 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, url, sp.SkeletonData, function (err, atlas) {
            if (err) {
              return console.error(err);
            }
            _this7.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        };
        _proto.getIcardById = function getIcardById(id) {
          return configMgr.instance.cards[id - 1];
        };
        _proto.getIdByIcard = function getIdByIcard(iCard) {
          for (var i = 0; i < configMgr.instance.cards.length; i++) {
            var temp = configMgr.instance.cards[i];
            if (temp.color == iCard.color && temp.score == iCard.score) {
              return temp.id;
            }
          }
          return null;
        };
        _proto.idToICard = function idToICard(arr) {
          var temp = [];
          for (var i = 0; i < arr.length; i++) {
            var id = arr[i];
            var card = this.getIcardById(id);
            if (!card) {
              console.log("card id error id=" + id);
            }
            temp.push(card);
          }
          return temp;
        };
        _proto.iCardToId = function iCardToId(arr) {
          var temp = [];
          for (var i = 0; i < arr.length; i++) {
            var iCard = arr[i];
            var id = this.getIdByIcard(iCard);
            if (!id) {
              console.log("card id error id=" + id);
            }
            temp.push(id);
          }
          return temp;
        };
        _createClass(configMgr, [{
          key: "cards",
          get: function get() {
            return this._cards;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new configMgr();
            }
            return this._instance;
          }
        }]);
        return configMgr;
      }());
      configMgr.ChatTextArr = [];
      configMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/D_Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Player.ts'], function (exports) {
  var _createClass, cclegacy, C_Player;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      C_Player = module.C_Player;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f3d3diEB8dDgrWKeRxnSwBR", "D_Player", undefined);
      var D_Player = exports('D_Player', /*#__PURE__*/function () {
        function D_Player() {
          //    /**uid */
          this.uid = void 0;
          //    /**昵称 */
          this.nickname = void 0;
          //    /**金币 */
          this.money = void 0;
          //    /**代金卷 */
          this.voucher = void 0;
          //    /**头像 */
          this.head = void 0;
          //    /**座位号 */
          this.seat = void 0;
          //    /**座位类型 0普通座位 1庄家 2小盲 3大盲 4弃牌 5allin*/
          this.seatType = void 0;
          //    /**第几回合allin */
          this.allin_round = void 0;
          //    /**allin 回合结束展示手牌 */
          this.hand_ids = void 0;
          //    /**下注 */
          this.bet = void 0;
          //    /**当前金币扣除下注 */
          this.curMoney = void 0;
          //    /**入场金额 */
          this.initGold = void 0;
          /**是否准备 */
          this.isReady = void 0;
          /**当前回合最后操作 */
          this.last_action = void 0;
          /**本回合下的钱 */
          this.round_bet = void 0;
          this.game_bet = void 0;
          this._pic = void 0;
          //    /**已进入亲友场桌号 */
          this._deskIndex = void 0;
        }
        var _proto = D_Player.prototype;
        _proto.init = function init(uid, nickname, money, head, pic, seat, seatType, bet, allin_round, hand_ids, deskIndex, isReady, last_action, round_bet) {
          if (seat === void 0) {
            seat = 0;
          }
          if (seatType === void 0) {
            seatType = -1;
          }
          if (bet === void 0) {
            bet = 0;
          }
          if (allin_round === void 0) {
            allin_round = 0;
          }
          if (hand_ids === void 0) {
            hand_ids = [];
          }
          if (deskIndex === void 0) {
            deskIndex = 0;
          }
          if (isReady === void 0) {
            isReady = false;
          }
          if (last_action === void 0) {
            last_action = 0;
          }
          if (round_bet === void 0) {
            round_bet = 0;
          }
          this.uid = uid;
          this.nickname = nickname;
          this.money = money;
          this.initGold = money;
          this.curMoney = this.money;
          this.head = head;
          this.pic = pic;
          this.seat = seat;
          this.seatType = seatType;
          this.bet = bet;
          this.game_bet = 0;
          this.allin_round = allin_round;
          this.hand_ids = hand_ids;
          this.deskIndex = deskIndex;
          this.isReady = isReady;
          this.last_action = last_action;
          this.round_bet = round_bet;
        }
        //    /**是否是玩家本人 */
        ;

        _createClass(D_Player, [{
          key: "deskIndex",
          get: function get() {
            return Number(this._deskIndex);
          },
          set: function set(a) {
            this._deskIndex = a;
          }
        }, {
          key: "pic",
          get: function get() {
            return Number(this._pic);
          },
          set: function set(num) {
            this._pic = num;
          }
        }, {
          key: "isMe",
          get: function get() {
            return C_Player.instance.myPlayer.uid == this.uid;
          }
        }]);
        return D_Player;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/define.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7571aavQKdBK4zRpI2S+1rT", "define", undefined);
      var Aclip = exports('Aclip', {
        bgm: "resources/audio/bgm",
        win: "resources/audio/win",
        lose: "resources/audio/lose",
        giveUpMan: "resources/audio/avatar4_fold",
        giveup: "resources/audio/giveup",
        allInMan: "resources/audio/avatar4_allin",
        allIn: "resources/audio/allin_chip",
        followMan: "resources/audio/avatar4_call",
        follow: "resources/audio/follow_chip",
        addMan: "resources/audio/avatar4_raise",
        add: "resources/audio/addchip",
        fapai: "resources/audio/fanpai",
        clock: "resources/audio/naozhong",
        click: "resources/audio/click",
        fly_chip: "resources/audio/fly_chip"
      }); // 筹码飞行动画
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Define2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49418ueMkdA2Kp5/jfvIgeD", "Define", undefined);
      var CARD_RANK = exports('CARD_RANK', /*#__PURE__*/function (CARD_RANK) {
        CARD_RANK[CARD_RANK["ACE"] = 1] = "ACE";
        CARD_RANK[CARD_RANK["TWO"] = 2] = "TWO";
        CARD_RANK[CARD_RANK["THREE"] = 3] = "THREE";
        CARD_RANK[CARD_RANK["FOUR"] = 4] = "FOUR";
        CARD_RANK[CARD_RANK["FIVE"] = 5] = "FIVE";
        CARD_RANK[CARD_RANK["SIX"] = 6] = "SIX";
        CARD_RANK[CARD_RANK["SEVEN"] = 7] = "SEVEN";
        CARD_RANK[CARD_RANK["EIGHT"] = 8] = "EIGHT";
        CARD_RANK[CARD_RANK["NINE"] = 9] = "NINE";
        CARD_RANK[CARD_RANK["TEN"] = 10] = "TEN";
        CARD_RANK[CARD_RANK["JACK"] = 11] = "JACK";
        CARD_RANK[CARD_RANK["QUEEN"] = 12] = "QUEEN";
        CARD_RANK[CARD_RANK["KING"] = 13] = "KING";
        CARD_RANK[CARD_RANK["JokerSmall"] = 14] = "JokerSmall";
        CARD_RANK[CARD_RANK["JokerBig"] = 15] = "JokerBig";
        return CARD_RANK;
      }({}));
      var CARD_COLOR = exports('CARD_COLOR', /*#__PURE__*/function (CARD_COLOR) {
        CARD_COLOR[CARD_COLOR["Diamond"] = 0] = "Diamond";
        CARD_COLOR[CARD_COLOR["HEART"] = 1] = "HEART";
        CARD_COLOR[CARD_COLOR["CLUB"] = 2] = "CLUB";
        CARD_COLOR[CARD_COLOR["SPADE"] = 3] = "SPADE";
        return CARD_COLOR;
      }({})); //黑桃
      var EventMessage = exports('EventMessage', function EventMessage() {});
      //房间信息
      EventMessage.POKER_ROOM_INFO = 'POKER_ROOM_INFO';
      //游戏开始
      EventMessage.POKER_GAME_START = 'POKER_GAME_START';
      //玩家出牌
      EventMessage.POKER_USER_PLAY = 'POKER_USER_PLAY';
      //玩家过牌
      EventMessage.POKER_USER_PASS = 'POKER_USER_PASS';
      //游戏结算
      EventMessage.POKER_GAME_END = 'POKER_GAME_END';
      //房间玩家金币变更
      EventMessage.POKER_ROOM_GOLD_CHANGE = 'POKER_ROOM_GOLD_CHANGE';
      //炸弹斩杀
      EventMessage.POKER_BOMB_SCORE = 'POKER_BOMB_SCORE';
      //玩家托管状态变更
      EventMessage.POKER_USER_TRUSTEESHIP_STATUS = 'POKER_USER_TRUSTEESHIP_STATUS';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DezhouGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts', './PokerManager.ts', './animManager.ts', './configMgr2.ts', './C_Main.ts', './GameMain.ts', './Message.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, GameMgr, SubGameDef, SubGameMgr, ModuleDef, PokerManager, AnimManager, configMgr, C_Main, GameMain, Message;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      AnimManager = module.AnimManager;
    }, function (module) {
      configMgr = module.configMgr;
    }, function (module) {
      C_Main = module.C_Main;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "801c2s3GS9BTZRElHM6goE/", "DezhouGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DezhouGameMgr = exports('DezhouGameMgr', (_dec = ccclass('DezhouGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(DezhouGameMgr, _GameMgr);
        function DezhouGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameType = SubGameDef.POKER_DEZHOU;
          _this._entryScene = {
            name: 'lobby_dezhou',
            bundle: ModuleDef.POKER_DEZHOU
          };
          _this._gameScene = {
            name: 'game_dezhou',
            bundle: ModuleDef.POKER_DEZHOU
          };
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          return _this;
        }
        var _proto = DezhouGameMgr.prototype;
        _proto.init = function init() {
          PokerManager.inst.init();
        };
        _proto.uinit = function uinit() {
          PokerManager.inst.uinit();
          AnimManager.clearCache();
        }
        /**
        * 加载资源
        */;
        _proto.preLoadRes = /*#__PURE__*/
        function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(processFun) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    function loadUpdate() {
                      var total = configMgr.instance.total;
                      var count = configMgr.instance.count;
                      if (count >= total) {
                        processFun(1);
                        resolve(true);
                        GameMain.evt.off(Message.loadUpdate, loadUpdate, this);
                        return;
                      }
                      processFun(count / total);
                    }
                    GameMain.evt.on(Message.loadUpdate, loadUpdate, _this2);
                    configMgr.instance.onloadConfig();
                    C_Main.instance.init();
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function preLoadRes(_x) {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }() // 进入游戏
        ;

        _proto.enterGame = /*#__PURE__*/
        function () {
          var _enterGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  SubGameMgr.inst.MatchRoom(this.gameType, true);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function enterGame() {
            return _enterGame.apply(this, arguments);
          }
          return enterGame;
        }();
        _createClass(DezhouGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new DezhouGameMgr();
            }
            return this._inst;
          }
        }]);
        return DezhouGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(DezhouGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameGlobal.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0b74doQQEBHPL4CWsIrX3DT", "GameGlobal", undefined);
      var GameGlobal = exports('GameGlobal', function GameGlobal() {});
      GameGlobal.roomLevel = [];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMain.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4be7aGBLnBIy7i+IfBBLXWA", "GameMain", undefined);
      var Sleep = exports('Sleep', function Sleep(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      });
      var e_card_color = exports('e_card_color', {
        fangkuai1: 1,
        meihua2: 2,
        hongtao3: 3,
        heitao4: 4,
        xiaowang: 5,
        dawang: 6
      }); //大王-红
      var e_card_score = exports('e_card_score', {
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
        c6: 6,
        c7: 7,
        c8: 8,
        c9: 9,
        c10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
        jipai: 15,
        little_king: 16,
        big_king: 17
      });
      var e_card_type = exports('e_card_type', /*#__PURE__*/function (e_card_type) {
        e_card_type[e_card_type["error"] = 0] = "error";
        e_card_type[e_card_type["High_Card"] = 1] = "High_Card";
        e_card_type[e_card_type["One_Pair"] = 2] = "One_Pair";
        e_card_type[e_card_type["Two_Pair"] = 3] = "Two_Pair";
        e_card_type[e_card_type["Three_of_a_Kind"] = 4] = "Three_of_a_Kind";
        e_card_type[e_card_type["Straight"] = 5] = "Straight";
        e_card_type[e_card_type["Flush"] = 6] = "Flush";
        e_card_type[e_card_type["Full_House"] = 7] = "Full_House";
        e_card_type[e_card_type["Four_of_a_Kind"] = 8] = "Four_of_a_Kind";
        e_card_type[e_card_type["Straight_Flush"] = 9] = "Straight_Flush";
        e_card_type[e_card_type["Royal_Flush"] = 10] = "Royal_Flush";
        return e_card_type;
      }({}));
      var e_room_round = exports('e_room_round', {
        Normal: 0,
        Preflop: 1,
        Flop: 2,
        Turn: 3,
        River: 4,
        Showdown: 5
      });
      var GameMain = exports('GameMain', function GameMain() {});
      //    /**事件*/
      GameMain.evt = new EventTarget();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerManager.ts', './UserMgr.ts', './NetGameServer.ts', './C_Game.ts', './C_Player.ts'], function (exports) {
  var _createClass, cclegacy, _decorator, PokerManager, UserMgr, gameNet, C_Game, C_Player;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      C_Player = module.C_Player;
    }],
    execute: function () {
      cclegacy._RF.push({}, "71d65RLXXhGZaESNfQJ0+2m", "GameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameManager = exports('GameManager', /*#__PURE__*/function () {
        function GameManager() {}
        var _proto = GameManager.prototype;
        _proto.init = function init() {
          //注册各种消息  
          // gameNet.listenMsg("tienlen/GameStart", this.onGameStart, this);
          // gameNet.listenMsg("tienlen/RoomInfo", this.onRoomBack, this);
          // gameNet.listenMsg("tienlen/TurnPlayer", this.onUserPlay, this);
          // gameNet.listenMsg("tienlen/PassPlayer", this.onUserPass, this);
          // gameNet.listenMsg("tienlen/TrusteeshipStatus", this.onUserTrusteeshipStatus, this);
          // gameNet.listenMsg("tienlen/GameEnd", this.onGameEnd, this);
          // gameNet.listenMsg("tienlen/RoomScore", this.onRoomGoldChange, this);
          // gameNet.listenMsg("tienlen/BombScore", this.onRoomBombScore, this);
        };
        _proto.uinit = function uinit() {
          this.end();
        }
        /**
         * 结束
         */;
        _proto.end = function end() {
          //移除消息
          gameNet.unlistenMsgAllByThis(this);
        };
        _proto.onPlayerMatch = function onPlayerMatch(msg) {
          console.error("广播onPlayerMatch", JSON.stringify(msg));
          C_Game.instance.isMatch = false;
          C_Game.instance.timestamp = msg.timestamp;
          // console.log("timestamp:"+C_Game.instance.timestamp);
          C_Game.instance.matchTime = msg.op_time;
          C_Game.instance.roomId = msg.room_id;
          C_Game.instance.roomStatus = msg.room_status;
          C_Player.instance.init(msg.players);
          var date = new Date();
          C_Game.instance.tempTime = date.getTime();
          C_Game.instance.isFriend = msg.isFriend;
          if (msg.isFriend) {
            C_Game.instance.readyArr = msg.readyArr;
            C_Game.instance.roomMaster = msg.roomMaster;
          }
          console.log(msg);
          // GameMain.evt.emit(Message.bind_match);
          console.log("game bind_match");
        };
        _createClass(GameManager, [{
          key: "roomData",
          get: function get() {
            return PokerManager.inst.roomData;
          }
        }, {
          key: "myChairID",
          get: function get() {
            return PokerManager.inst.myChairID;
          }
        }, {
          key: "myUserID",
          get: function get() {
            return UserMgr.inst.uid;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new GameManager();
            }
            return this._inst;
          }
        }]);
        return GameManager;
      }());
      GameManager._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/levelItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, resources, SpriteFrame, Component, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "1d2e8wX0tBPNY2K1Okk6fkv", "levelItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var levelItem = exports('default', (_dec = ccclass('LevelItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(levelItem, _Component);
        function levelItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "difen", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "renshu", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lvicon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lv", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tagr", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "takeMoney", _descriptor6, _assertThisInitialized(_this));
          _this.score = 0;
          _initializerDefineProperty(_this, "bet", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = levelItem.prototype;
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(index, child) {
            var icon, lv;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.score = Number(child.lowScore);
                  _context.next = 3;
                  return this.getItemSprite("level_" + index);
                case 3:
                  icon = _context.sent;
                  this.lvicon.spriteFrame = icon;
                  _context.next = 7;
                  return this.getItemSprite("level_bg_" + index);
                case 7:
                  lv = _context.sent;
                  this.lv.spriteFrame = lv;
                  // if (index == 0) {
                  //     this.difen.node.color = new cc.Color().fromHEX("#75D5B4");
                  // } else if (index == 1) {
                  //     this.difen.node.color = new cc.Color().fromHEX("#A8D3F3");
                  // } else if (index == 2) {
                  //     this.difen.node.color = new cc.Color().fromHEX("#EAA4F0");
                  // } else if (index == 3) {
                  //     this.difen.node.color = new cc.Color().fromHEX("#FFA29B");
                  // }
                  // if (this.score) {
                  //     this.difen.string = LanguageData.getLangByID(7) + this.score;
                  // } else {
                  this.difen.string = "";
                  // }
                  this.renshu.string = "" + child.onLineNum;
                  if (!child.tagr[1]) {
                    this.tagr.string = LanguageData.getLangByID("dezhou_20") + child.tagr[0];
                  } else {
                    this.tagr.string = LanguageData.getLangByID("dezhou_20") + child.tagr[0] + "~" + child.tagr[1];
                  }
                  this.takeMoney.string = LanguageData.getLangByID("dezhou_22") + child.takeMoney;
                  this.bet.string = LanguageData.getLangByID("dezhou_23") + ":" + child.lowScore / 2 + "/" + child.lowScore;
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x, _x2) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.getItemSprite = function getItemSprite(url) {
          return new Promise(function (resolve, reject) {
            resources.load("imgs/level/" + url, function (err, asset) {
              if (err) {
                console.error(err);
                return;
              }
              var spriteFrame = new SpriteFrame();
              spriteFrame.texture = asset;
              resolve(spriteFrame);
            });
          });
        };
        return levelItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "difen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "renshu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lvicon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lv", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tagr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "takeMoney", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Message.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e10c7K/qZH7JOusfE2g6un", "Message", undefined);
      var Message = exports('Message', {
        login_success: "login_success",
        bind_ping: "bind_ping",
        bind_role: "bind_role",
        bind_room_level: "bind_room_level",
        bind_match: "bind_match",
        startGame: "startGame",
        deal: "deal",
        action: "action",
        gameOver: "gameOver",
        reStart: "reStart",
        resume: "resume",
        hisplayer: "hisplayer",
        hisstep: "hisstep",
        updateLoading: "updateLoading",
        closeAdd: "closeAdd",
        playSuccess: "playSuccess",
        bind_online: "bind_online",
        getTables: "getTables",
        getTablesError: "getTablesError",
        loadUpdate: "loadUpdate",
        updateScore: "updateScore",
        addPlayer: "addPlayer",
        delPlayer: "delPlayer",
        playerStatusChange: "playerStatusChange"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_poker_dezhou", ['./DezhouGameMgr.ts', './Bezier.ts', './Coin.ts', './GameGlobal.ts', './GameMain.ts', './Message.ts', './animManager.ts', './cmdClient.ts', './coinEffect.ts', './configMgr2.ts', './define.ts', './uiMgr2.ts', './C_Game.ts', './SetScore.ts', './V_Add.ts', './V_Clock.ts', './V_Game.ts', './V_GameOver.ts', './V_Girl.ts', './V_Operate.ts', './V_Seat.ts', './otherPlayer.ts', './C_Loading.ts', './V_Login.ts', './levelItem.ts', './tableItem.ts', './C_Main.ts', './V_GameScene.ts', './V_LobbyScene.ts', './Define2.ts', './GameManager.ts', './C_Player.ts', './D_Player.ts', './V_Rule.ts', './V_Setting.ts', './C_Tip.ts', './V_Tip.ts', './S_Login.ts', './S_OnAction.ts', './S_OnGameOver.ts', './S_OnPlayerMatch.ts', './S_OnResume.ts', './S_OnStartGame.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/otherPlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Label, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "3d059DCHltBTIhdWlxl0EQG", "otherPlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var otherPlayer = exports('otherPlayer', (_dec = ccclass('OtherPlayer'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(otherPlayer, _Component);
        function otherPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "man", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nickname", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "farm", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards", _descriptor5, _assertThisInitialized(_this));
          //    /**座位号 */
          _this._seat = void 0;
          return _this;
        }
        var _proto = otherPlayer.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.init = function init() {};
        _createClass(otherPlayer, [{
          key: "seat",
          get: function get() {
            return this._seat;
          },
          set: function set(num) {
            this._seat = num;
          }
        }]);
        return otherPlayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "man", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nickname", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "farm", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cards", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_Login.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3222aLEXlNCvZAJPe6GrR71", "S_Login", undefined);
      var S_Login = exports('S_Login', function S_Login() {
        this.code = void 0;
        this.info = void 0;
        this.nickname = void 0;
        this.money = void 0;
        this.token = void 0;
        this.head = void 0;
        this.uid = void 0;
        this.room = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_OnAction.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eca08laU+xAILerRIdizqBn", "S_OnAction", undefined);
      var e_action = exports('e_action', /*#__PURE__*/function (e_action) {
        e_action[e_action["normal"] = 0] = "normal";
        e_action[e_action["bet"] = 1] = "bet";
        e_action[e_action["call"] = 2] = "call";
        e_action[e_action["raise"] = 3] = "raise";
        e_action[e_action["allin"] = 4] = "allin";
        e_action[e_action["check"] = 5] = "check";
        e_action[e_action["fold"] = 6] = "fold";
        return e_action;
      }({}));
      var S_OnAction = exports('S_OnAction', function S_OnAction() {
        //    /**操作的玩家座位*/
        this.seat = void 0;
        //    /**操作 1下注 4allin 5过牌 6弃牌 */
        this.action = void 0;
        //    /**是否可以下注 */
        this.can_bet = void 0;
        //    /**是否可过牌 */
        this.can_check = void 0;
        //    /**跟注金额 */
        this.call = void 0;
        //    /**底池大小 */
        this.pot = void 0;
        //    /**当前操作的玩家座位 */
        this.cur_seat = void 0;
        //    /**跟注金额(当前玩家最小的跟注金额, 如果没有上一个操作玩家，则做为盲注表现，如果跟住金额为0，表示前面的玩家都选择过牌，当前操作玩家可以选择过牌操作) */
        this.bet = void 0;
        //    /**上家本轮的累计下注 */
        this.round_bet = void 0;
        //    /**上家本局游戏的累计下注 */
        this.game_bet = void 0;
        //    /**上家手牌 */
        this.hand_card = void 0;
        //    /**最小加注金额(当前玩家最小的加注金额为上一家的下注金额-上上家的下注金额)*/
        this.min_raise = void 0;
        //    /**操作时间 */
        this.op_time = void 0;
        //    /**轮次 */
        this.round = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_OnGameOver.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8bed239qpFE0IZ3fNwP0Tcr", "S_OnGameOver", undefined);
      var S_OnGameOver = exports('S_OnGameOver', function S_OnGameOver() {
        this.players = void 0;
        this.cur_gold = void 0;
        this.room_id = void 0;
        this.comm_ids = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_OnPlayerMatch.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "069e5GBugRCP4lluXExo94c", "S_OnPlayerMatch", undefined);
      var S_OnPlayerMatch = exports('S_OnPlayerMatch', function S_OnPlayerMatch() {
        //    /**操作时间戳 */
        this.timestamp = void 0;
        //    /**操作时间 */
        this.op_time = void 0;
        //    /**操作人的位置 一般是0123456, -1表示 */
        this.op_seat = void 0;
        //    /**房间id */
        this.room_id = void 0;
        //    /**房间状态 */
        this.room_status = void 0;
        //    /**下注倍数列表 [1,2,3,4,5]' */
        this.bet_list = void 0;
        //    /**抢庄倍数列表 [1,2,3,4,5] */
        this.zhuang_list = void 0;
        //    /**第一个抢庄的玩家的可选倍数 */
        this.used_zhuang = void 0;
        //    /**抢的倍数0不抢 */
        this.scale = void 0;
        //    /**抢庄位置 */
        this.seat = void 0;
        //    /**庄家位置 */
        this.z_seat = void 0;
        //    /**庄的倍数 */
        this.z_scale = void 0;
        //    /**庄家的倍数,在倍数列表中的数据 */
        this.players = void 0;
        //    /**玩家牌型 */
        this.cards = void 0;
        //    /**玩家结算信息 */
        this.awards = void 0;
        //    /**是否是亲友场 */
        this.isFriend = void 0;
        //    /**准备数组seat 从0开始 */
        this.readyArr = void 0;
        //    /**房主seat */
        this.roomMaster = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_OnResume.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "29956rQ8GJPx5YUYRD0tm4f", "S_OnResume", undefined);
      var S_OnResume = exports('S_OnResume', function S_OnResume() {
        //    /**房间状态 */
        this.room_status = void 0;
        //    /**轮次信息 */
        this.round_status = void 0;
        //    /**房间ID */
        this.room_id = void 0;
        //    /**房间盲注大小 */
        this.bet = void 0;
        //    /**是否可以下注 */
        this.can_bet = void 0;
        //    /**是否可过牌 */
        this.can_check = void 0;
        //    /**跟注金额 */
        this.call = void 0;
        //    /**公共牌 */
        this.comm_ids = void 0;
        //    /**玩家的手牌 */
        this.hand_ids = void 0;
        //    /**牌型 */
        this.card_type = void 0;
        //    /**底池 */
        this.main_pot = void 0;
        //    /**玩家信息*/
        this.players = void 0;
        //    /**当前操作玩家座位*/
        this.op_seat = void 0;
        //    /**当前操作剩余毫秒*/
        this.op_time = void 0;
        //    /**本轮累计下注*/
        this.round_bets = void 0;
        this.min_raise = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_OnStartGame.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd0c2l/37tJaKJkIa7hwEQQ", "S_OnStartGame", undefined);
      var S_OnStartGame = exports('S_OnStartGame', function S_OnStartGame() {
        //    /**房间状态 */
        this.room_status = void 0;
        //    /**房间ID */
        this.room_id = void 0;
        //    /**发牌时间 */
        this.licensing_time = void 0;
        //    /**操作时间 */
        this.action_time = void 0;
        //    /**庄家位 */
        this.button_seat = void 0;
        //    /**小盲注 */
        this.sb_bet = void 0;
        //    /**大盲注*/
        this.bb_bet = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SetScore.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Main.ts', './C_Game.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Component, C_Main, C_Game;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      C_Main = module.C_Main;
    }, function (module) {
      C_Game = module.C_Game;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bb0bfcyXVVIBpMQcCk0SmbQ", "SetScore", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Score = exports('V_Score', (_dec = ccclass('SetScore'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Score, _Component);
        function V_Score() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor2, _assertThisInitialized(_this));
          _this.btnArr = void 0;
          return _this;
        }
        var _proto = V_Score.prototype;
        _proto.start = function start() {
          // let arr = C_Main.instance.friendBaseScoreList;
          // this.btnArr = [];
          // for(let i=0;i<arr.length;i++){
          //     let node:Node;
          //     if(i==0){
          //         node = this.btn;
          //         node.name = "btn0"
          //     }else{
          //         node = instantiate(this.btn);
          //         node.name = "btn"+i;
          //         node.parent = this.panel;
          //     }
          //     let label:Label = this.getLabel(node);
          //     label.string = "" + arr[i] + LanguageData.getLangByID(29);
          //     this.btnArr.push(node);
          // }
          // this.panel.active = false;
        };
        _proto.getLabel = function getLabel(node) {
          var label;
          label = node.getChildByName("Background").getChildByName("Label").getComponent(Label);
          return label;
        };
        _proto.onPanelClick = function onPanelClick(e) {
          this.panel.active = !this.panel.active;
        };
        _proto.onBtnClick = function onBtnClick(e) {
          var target = e.target;
          var index = 0;
          for (var i = 0; i < this.btnArr.length; i++) {
            var btn = this.btnArr[i];
            if (btn.name == target.name) {
              index = i;
            }
          }
          C_Game.instance.setScore(C_Main.instance.friendBaseScoreList[index]);
          this.panel.active = false;
        };
        _createClass(V_Score, [{
          key: "show",
          set: function set(bn) {
            this.node.active = bn;
          }
        }]);
        return V_Score;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tableItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "70594Bvk11E5IvvFsi73Pf8", "tableItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tableItem = exports('default', (_dec = ccclass('TableItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tableItem, _Component);
        function tableItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "one", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "two", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "three", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "four", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "five", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "six", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oneNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "twoNode", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "threeNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fourNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fiveNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sixNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomID", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waitNode", _descriptor15, _assertThisInitialized(_this));
          _this.roomIdNum = void 0;
          _this.index = void 0;
          return _this;
        }
        var _proto = tableItem.prototype;
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(index) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function init(_x) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        return tableItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "one", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "two", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "three", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "four", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "five", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "six", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "oneNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "twoNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "threeNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "fourNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "fiveNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sixNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "roomID", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "waitNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/uiMgr2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMain.ts', './Message.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, SpriteFrame, isValid, Prefab, instantiate, Component, GameMain, Message, ResourceMgr, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "a2fe55oWp1H6ZGhBE9hp+YQ", "uiMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // /** 值越大层级越高 */
      var layerIndex = exports('layerIndex', {
        main: 0,
        popup: 1,
        tips: 2,
        loading: 3
      });
      var uiPanel = exports('uiPanel', /*#__PURE__*/function (uiPanel) {
        uiPanel["LOGIN"] = "login/V_Login";
        uiPanel["TIP"] = "tip/V_Tip";
        uiPanel["SETTING"] = "setting/V_Setting";
        uiPanel["RULE"] = "rule/V_Rule";
        uiPanel["GAME"] = "game/V_Game";
        uiPanel["LOADING"] = "loading/V_Loading";
        uiPanel["GAMEOVER"] = "game/V_GameOver";
        return uiPanel;
      }({}));
      var UiMgr = exports('UiMgr', (_dec = ccclass('UiMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UiMgr, _Component);
        function UiMgr() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UiMgr.prototype;
        _proto.onLoad = function onLoad() {
          UiMgr.node = this.node;
        };
        UiMgr.loadPic = function loadPic(sp, url) {
          var _this2 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, "resources/" + url + "/spriteFrame", SpriteFrame, function (err, img) {
            if (err || !isValid(_this2)) {
              return;
            }
            sp.spriteFrame = img;
          });
        }
        //    // 加载界面
        ;

        UiMgr.showPanel = function showPanel(url, zIndex, cb) {
          var parent = this.parentNode(zIndex);
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, "resources/uiPanel/" + url, Prefab, function (err, res) {
            if (err) {
              console.log(url);
              console.error(err);
              return cb && cb(null);
            }
            var node = instantiate(res);
            parent.addChild(node);
            if (parent.children.length > 1) {
              parent.children[0].removeFromParent();
            }
            cb && cb(node);
            if (zIndex == layerIndex.loading) {
              GameMain.evt.emit(Message.updateLoading);
            }
          });
        };
        UiMgr.hidePanel = function hidePanel(zIndex) {
          var parent = this.parentNode(zIndex);
          parent.removeAllChildren();
        }
        //    // 关闭界面
        ;

        UiMgr.closePanel = function closePanel(_this, cb) {
          if (_this.node) {
            _this.node.removeFromParent();
            _this.node.destroy();
          }
        }
        //    /**清空图层 */
        ;

        UiMgr.closeLayerPanel = function closeLayerPanel(zIndex, cb) {
          var parent = this.parentNode(zIndex);
          parent.removeAllChildren();
        }
        //    // Main场景
        ;

        UiMgr.showMainView = function showMainView(url, cb) {
          UiMgr.currentMainView = url;
          this.showPanel(url, layerIndex.main, cb);
        };
        UiMgr.hideMainView = function hideMainView(url, cb) {
          this.showPanel(url, layerIndex.main, cb);
        }
        //    // 弹窗场景
        ;

        UiMgr.showPopupView = function showPopupView(url, cb) {
          this.showPanel(url, layerIndex.popup, cb);
        }
        //    // 关闭弹窗场景
        ;

        UiMgr.hidePopupView = function hidePopupView() {
          this.hidePanel(layerIndex.popup);
        }
        //    // Tip场景
        ;

        UiMgr.showTipsView = function showTipsView(url, cb) {
          this.showPanel(url, layerIndex.tips, cb);
        }
        //    // Loading场景
        ;

        UiMgr.showLoadingView = function showLoadingView() {
          var parent = this.parentNode(layerIndex.loading);
          parent.active = true;
        };
        UiMgr.hideLoadingView = function hideLoadingView() {
          var parent = this.parentNode(layerIndex.loading);
          parent.active = false;
        };
        UiMgr.parentNode = function parentNode(zIndex) {
          var parent = null;
          switch (zIndex) {
            case layerIndex.main:
              parent = UiMgr.node.getChildByName("mainlayer");
              break;
            case layerIndex.popup:
              parent = UiMgr.node.getChildByName("popuplayer");
              break;
            case layerIndex.tips:
              parent = UiMgr.node.getChildByName("tiplayer");
              break;
            case layerIndex.loading:
              parent = UiMgr.node.getChildByName("lodinglayer");
              break;
          }
          return parent;
        };
        return UiMgr;
      }(Component), _class2.node = null, _class2.currentMainView = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Add.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMain.ts', './Message.ts', './C_Player.ts', './C_Tip.ts', './S_OnAction.ts', './C_Game.ts', './define.ts', './ModuleDef.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, instantiate, Vec3, UITransform, Label, Component, GameMain, Message, C_Player, C_Tip, e_action, C_Game, Aclip, ModuleDef, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      C_Tip = module.C_Tip;
    }, function (module) {
      e_action = module.e_action;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "28491/GKeRCr710pVklAYjL", "V_Add", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Add = exports('V_Add', (_dec = ccclass('VAdd'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Add, _Component);
        function V_Add() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "addOne", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addBarBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reduceNode", _descriptor4, _assertThisInitialized(_this));
          _this.arr = void 0;
          _this._nowDate = void 0;
          _this._touchBn = false;
          _this._type = void 0;
          _this._date = 0;
          _this._count = void 0;
          _this._label = void 0;
          return _this;
        }
        var _proto = V_Add.prototype;
        _proto.start = function start() {
          this.addBarBg.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.addBarBg.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.addBarBg.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.addNode.on(Node.EventType.TOUCH_START, this.addtouchStart, this);
          this.addNode.on(Node.EventType.TOUCH_CANCEL, this.addtouchEnd, this);
          this.addNode.on(Node.EventType.TOUCH_END, this.addtouchEnd, this);
          this.reduceNode.on(Node.EventType.TOUCH_START, this.subtouchStart, this);
          this.reduceNode.on(Node.EventType.TOUCH_CANCEL, this.subtouchEnd, this);
          this.reduceNode.on(Node.EventType.TOUCH_END, this.subtouchEnd, this);
        };
        _proto.init = function init() {
          this.addOne.active = false;
          this.arr = [this.addOne];
          for (var i = 1; i < 20; i++) {
            var node = instantiate(this.addOne);
            node.setPosition(0, 18 * i, 0);
            node.parent = this.addOne.parent;
            this.arr.push(node);
          }
        };
        _proto.update = function update(dt) {
          if (this._type != 0) {
            var date = new Date();
            this._nowDate = date.getTime();
          }
          if (this._nowDate - this._date > 100) {
            if (this._type == 1) {
              this.add();
            } else if (this._type == 2) {
              this.sub();
            }
            var _date = new Date();
            this._date = _date.getTime();
          }
        };
        _proto.touchStart = function touchStart(e) {
          this._touchBn = true;
        };
        _proto.touchMove = function touchMove(e) {
          var _this$node$getCompone;
          var touchPos = e.getUILocation();
          var pos = new Vec3();
          (_this$node$getCompone = this.node.getComponent(UITransform)) == null || _this$node$getCompone.convertToNodeSpaceAR(new Vec3(touchPos.x, touchPos.y), pos);
          if (this.addBarBg && this.addBarBg.getComponent(UITransform)) {
            var _this$node$getCompone2;
            var addBarBgTransform = this.addBarBg.getComponent(UITransform);
            var bgPos = new Vec3();
            this.addBarBg.getWorldPosition(bgPos);
            var localBgPos = new Vec3();
            (_this$node$getCompone2 = this.node.getComponent(UITransform)) == null || _this$node$getCompone2.convertToNodeSpaceAR(bgPos, localBgPos);
            console.log('pos:', pos.y);
            console.log('localBgPos:', localBgPos.y);
            var aa = Math.floor((pos.y - localBgPos.y) / addBarBgTransform.height * 20);
            console.log('aa:', aa);
            this.count = aa;
            console.log('count:', this.count);
          }
        };
        _proto.touchEnd = function touchEnd(e) {
          this._touchBn = false;
        };
        _proto.addtouchStart = function addtouchStart(e) {
          this._type = 1;
          var date = new Date();
          this._date = date.getTime();
        };
        _proto.addtouchEnd = function addtouchEnd(e) {
          if (this._type == 1) {
            this.add();
          } else if (this._type == 2) {
            this.sub();
          }
          this._type = 0;
        };
        _proto.subtouchStart = function subtouchStart(e) {
          this._type = 2;
          var date = new Date();
          this._date = date.getTime();
        };
        _proto.subtouchEnd = function subtouchEnd(e) {
          if (this._type == 1) {
            this.add();
          } else if (this._type == 2) {
            this.sub();
          }
          this._type = 0;
        };
        // showBlock(num:number){
        //     let temp = Math.floor(num/this.dis*20)
        //     if(temp>20){
        //         temp = 20;
        //     }
        //     this.count = temp;
        // }
        _proto.bindBlock = function bindBlock() {
          for (var i = 0; i < 20; i++) {
            var node = this.arr[i];
            node.active = i < this.count;
          }
        };
        _proto.bindLabel = function bindLabel() {
          var num = Math.floor(this._count * this.oneNum + C_Game.instance.min_raise);
          // 添加最大金额限制
          if (num > C_Game.instance.maxBet * C_Player.instance.score) {
            num = C_Game.instance.maxBet * C_Player.instance.score;
          }
          this.label.string = num + "";
        };
        _proto.max = function max(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          C_Game.instance.play(C_Game.instance.cur_seat, e_action.allin, this.lastMoney);
          GameMain.evt.emit(Message.closeAdd);
        };
        _proto.allPool = function allPool(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          if (C_Game.instance.pot < this.lastMoney) {
            C_Game.instance.play(C_Game.instance.cur_seat, e_action.raise, C_Game.instance.pot);
            GameMain.evt.emit(Message.closeAdd);
          } else {
            C_Tip.instance.showTip(LanguageData.getLangByID("dezhou_18"));
          }
        };
        _proto.three = function three(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          var num = 3 * C_Player.instance.score + C_Game.instance.call;
          if (num < this.lastMoney) {
            C_Game.instance.play(C_Game.instance.cur_seat, e_action.raise, num);
            GameMain.evt.emit(Message.closeAdd);
          } else {
            C_Tip.instance.showTip(LanguageData.getLangByID("dezhou_18"));
          }
        };
        _proto.add = function add() {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          var num = Number(this.label.string) + 2;
          if (num > this.lastMoney) {
            num = this.lastMoney;
          }
          //最大--250倍大盲注
          if (num > C_Game.instance.maxBet * C_Player.instance.score) {
            num = C_Game.instance.maxBet * C_Player.instance.score;
          }
          this.label.string = num + "";
        };
        _proto.sub = function sub() {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          var num = Number(this.label.string) - 2;
          if (num < 0) {
            num = 0;
          }
          this.label.string = num + "";
        };
        _proto.sure = function sure(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          if (this.bet >= 0) {
            if (this.bet < this.lastMoney) {
              C_Game.instance.play(C_Game.instance.cur_seat, e_action.raise, this.bet);
              GameMain.evt.emit(Message.closeAdd);
            } else {
              this.max(null);
            }
          } else {
            C_Tip.instance.showTip(LanguageData.getLangByID("dezhou_19"));
          }
        };
        _proto.closeAdd = function closeAdd(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          this.node.active = false;
        };
        _createClass(V_Add, [{
          key: "dis",
          get: function get() {
            var play = C_Player.instance.gamePlayer;
            var maxCount = play.curMoney;
            if (play.curMoney > C_Game.instance.maxBet * C_Player.instance.score) {
              maxCount = C_Game.instance.maxBet * C_Player.instance.score;
            }
            var result = maxCount - C_Game.instance.min_raise;
            return result;
          }
        }, {
          key: "oneNum",
          get: function get() {
            var num = this.dis / 20;
            return num;
          }
        }, {
          key: "count",
          get: function get() {
            return this._count;
          },
          set: function set(num) {
            this._count = num;
            if (this._count > 20) {
              this._count = 20;
            }
            if (this._count < 0) {
              this._count = 0;
            }
            this.bindBlock();
            this.bindLabel();
          }
        }, {
          key: "label",
          get: function get() {
            if (!this._label) {
              this._label = this.node.getChildByName("label").getComponent(Label);
            }
            return this._label;
          }
        }, {
          key: "lastMoney",
          get: function get() {
            return C_Player.instance.gamePlayer.money - C_Game.instance.game_bet;
          }
        }, {
          key: "bet",
          get: function get() {
            var num = Number(this.label.string);
            return num;
          }
        }]);
        return V_Add;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "addOne", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "addBarBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "addNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "reduceNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Clock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './animManager.ts', './C_Game.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, sp, Component, Animation, AnimManager, AnimUrl, e_room_status;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      sp = module.sp;
      Component = module.Component;
      Animation = module.Animation;
    }, function (module) {
      AnimManager = module.AnimManager;
      AnimUrl = module.AnimUrl;
    }, function (module) {
      e_room_status = module.e_room_status;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8b519Ba1zNCHLZaEKfhjWtM", "V_Clock", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Clock = exports('V_Clock', (_dec = ccclass('VClock'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Clock, _Component);
        function V_Clock() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "time", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clockBg", _descriptor3, _assertThisInitialized(_this));
          _this._state = void 0;
          return _this;
        }
        var _proto = V_Clock.prototype;
        _proto.setTime = function setTime(num) {
          this.clockBgBn = num > 3;
          this.clockSpBn = num <= 3;
          this.timeBn = num > 0;
          this.time.string = "" + num;
        };
        _proto.showMatch = /*#__PURE__*/function () {
          var _showMatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var match, node, effect;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  match = this.stateNode.getChildByName("match");
                  match.removeAllChildren();
                  _context.next = 4;
                  return AnimManager.createAnimNode(AnimUrl.match, 1, true);
                case 4:
                  node = _context.sent;
                  effect = node.getComponent(Animation);
                  node.parent = match;
                  node.active = true;
                  effect.play("anim_desk");
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showMatch() {
            return _showMatch.apply(this, arguments);
          }
          return showMatch;
        }();
        _proto.hideState = function hideState() {
          this.stateNode.active = false;
        };
        _createClass(V_Clock, [{
          key: "stateNode",
          get: function get() {
            if (!this.start) {
              this._state = this.node.getChildByName("state");
            }
            return this._state;
          }
        }, {
          key: "clockBgBn",
          set: function set(bn) {
            this.clock.active = bn;
            this.timeBn = bn;
          }
        }, {
          key: "clockSpBn",
          set: function set(bn) {
            this.clockBg.node.active = bn;
          }
        }, {
          key: "timeBn",
          set: function set(bn) {
            this.time.node.active = bn;
          }
        }, {
          key: "state",
          set: function set(num) {
            console.log("XXXXXXXXXXXXXXXX" + num);
            var match = this.stateNode.getChildByName("match");
            var start = this.stateNode.getChildByName("start");
            this.stateNode.active = true;
            if (num == e_room_status.Waiting) {
              if (match.active) {
                return;
              }
              match.active = true;
              start.active = false;
              this.showMatch();
            } else if (num == e_room_status.Ready) {
              match.active = false;
              start.active = true;
            } else {
              match.active = false;
              start.active = false;
            }
          }
        }]);
        return V_Clock;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "clockBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './animManager.ts', './coinEffect.ts', './configMgr2.ts', './GameMain.ts', './Message.ts', './uiMgr2.ts', './C_Main.ts', './C_Player.ts', './S_OnAction.ts', './C_Game.ts', './V_Clock.ts', './V_Girl.ts', './V_Operate.ts', './V_Seat.ts', './AudioMgr.ts', './define.ts', './PokerManager.ts', './ModuleDef.ts', './RoomMgr.ts', './SubGameMessage.ts', './UserMgr.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Prefab, director, find, Sprite, UITransform, tween, Vec3, sp, instantiate, Component, Vec2, Animation, AnimManager, AnimUrl, coinEffect, configMgr, GameMain, e_card_score, Message, UiMgr, uiPanel, C_Main, C_Player, e_action, C_Game, e_scene, e_room_status, V_Clock, V_Girl, V_Operate, V_Seat, AudioMgr, Aclip, PokerManager, ModuleDef, RoomMgr, SubGameMessage, UserMgr, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Prefab = module.Prefab;
      director = module.director;
      find = module.find;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      sp = module.sp;
      instantiate = module.instantiate;
      Component = module.Component;
      Vec2 = module.Vec2;
      Animation = module.Animation;
    }, function (module) {
      AnimManager = module.AnimManager;
      AnimUrl = module.AnimUrl;
    }, function (module) {
      coinEffect = module.coinEffect;
    }, function (module) {
      configMgr = module.configMgr;
    }, function (module) {
      GameMain = module.GameMain;
      e_card_score = module.e_card_score;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      UiMgr = module.UiMgr;
      uiPanel = module.uiPanel;
    }, function (module) {
      C_Main = module.C_Main;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      e_action = module.e_action;
    }, function (module) {
      C_Game = module.C_Game;
      e_scene = module.e_scene;
      e_room_status = module.e_room_status;
    }, function (module) {
      V_Clock = module.V_Clock;
    }, function (module) {
      V_Girl = module.V_Girl;
    }, function (module) {
      V_Operate = module.V_Operate;
    }, function (module) {
      V_Seat = module.V_Seat;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "53cdfw747dO6ZjlGX4V22AJ", "V_Game", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Game = exports('V_Game', (_dec = ccclass('VGame'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Game, _Component);
        function V_Game() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "goldNum", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "daiNum", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ping", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardType", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinEffect", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "poolNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "setScore", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableNum", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "readyBtn", _descriptor10, _assertThisInitialized(_this));
          //准备按钮
          _initializerDefineProperty(_this, "tipLabel", _descriptor11, _assertThisInitialized(_this));
          //提示
          _initializerDefineProperty(_this, "startEfect", _descriptor12, _assertThisInitialized(_this));
          //    /**玩家座位 */
          _this.seatArr = void 0;
          _initializerDefineProperty(_this, "cardPool", _descriptor13, _assertThisInitialized(_this));
          _this.clock = void 0;
          _this.operate = void 0;
          _this.girl = void 0;
          _this._pause = void 0;
          _this._speed = void 0;
          _this.isStart = void 0;
          _this.preTime = 0;
          _this.nowTime = 0;
          // 当前倒计时
          _this.timedist = void 0;
          _this.alldist = 2;
          _this.count = void 0;
          _this._txtScore = void 0;
          _this._allinCard = void 0;
          _this._doStartCountdown = false;
          _this._canOutMatch = true;
          _this.closeLogBn = void 0;
          _this._comCards = void 0;
          // private playFlyCards() {
          //     for (let i = 0; i < C_Player.instance.players.length; i++) {
          //         let player = C_Player.instance.players[i];
          //         if (player.isMe) {
          //         } else {
          //             let vSeat: V_Seat = this.getVSeat(player.seat);
          //             vSeat.flyToSeat([this.cardClone, this.cardClone]);
          //         }
          //     }
          // }
          _this._pool = void 0;
          _this.comCardsArr = void 0;
          _this._round = void 0;
          _this._doFarmCountdown = false;
          _this._playClockBn = void 0;
          _this._playClockAudioBn = void 0;
          _this._GameOverWait = void 0;
          _this._goldChange = void 0;
          _this._timeOutArr = [];
          return _this;
        }
        var _proto = V_Game.prototype;
        _proto.onLoad = function onLoad() {
          this.ping.node.active = C_Main.instance.showPingBn;
          C_Game.instance.sceneId = e_scene.Game;
          GameMain.evt.on(Message.bind_match, this.bindMatch, this);
          GameMain.evt.on(Message.updateScore, this.bindScore, this);
          GameMain.evt.on(Message.startGame, this.startGame, this);
          GameMain.evt.on(Message.deal, this.deal, this);
          GameMain.evt.on(Message.action, this.action, this);
          GameMain.evt.on(Message.gameOver, this.gameOver, this);
          GameMain.evt.on(Message.resume, this.resume, this);
          GameMain.evt.on(Message.bind_role, this.bindRole, this);
          GameMain.evt.on(Message.addPlayer, this.addPlayer, this);
          GameMain.evt.on(Message.delPlayer, this.delPlayer, this);
          GameMain.evt.on(Message.playerStatusChange, this.playerStatusChange, this);
          director.on(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
          // GameMain.evt.on(Message.bind_ping, this.bindPing, this);
          // cc.game.on(cc.game.EVENT_SHOW, this.onEventShow, this);
          this.init();
          this.pause.active = false;
          this.speed.active = false;
          // if (C_Game.instance.historyBn) {
          //     this.showHistory();
          //     this.pause.active = true;
          //     this.speed.active = true;
          // } else {
          //     this.pause.active = false;
          //     this.speed.active = false;
          //     this.bindMatch();
          //     this.resume();
          // }
        };

        _proto.showHistory = function showHistory() {
          // let players: I_Player[] = [];
          // let histroyInfo: H_GameInfo[] = C_Game.instance.histroyInfo;
          // this.score = C_Player.instance.score;
          // for (let i: number = 0; i < histroyInfo.length; i++) {
          //     let temp: H_GameInfo = histroyInfo[i];
          //     players.push({ uid: temp.user_id, gold: Number(temp.init_money), seat: Number(temp.seat), nickname: temp.username, head: null, pic: Number(temp.pic) })
          // }
          // C_Player.instance.init(players);
          // this.bindMatch();
          // for (let i: number = 0; i < histroyInfo.length; i++) {
          //     let info = histroyInfo[i];
          //     let vSeat: V_Seat = this.getVSeat(Number(info.seat));
          //     vSeat.isFrame = (info.role == "1");
          //     vSeat.isSb = (info.role == "2");
          //     vSeat.isBb = (info.role == "3");
          // }
          // this.preTime = null;
          // let lab: string = LanguageData.getLangByID(302);
          // this.pause.getComponentInChildren(Label).string = lab;
          // lab = LanguageData.getLangByID(304);
          // this.speed.getComponentInChildren(Label).string = lab;
          // this.timedist = this.alldist;
          // this.isStart = true;
          // this.count = 0;
        };
        _proto.updataHistory = function updataHistory() {
          if (this.count >= C_Game.instance.histroyLogs.length) {
            return;
          }
          var log = C_Game.instance.histroyLogs[this.count];
          var action;
          var type = Number(log.operate_type);
          switch (type) {
            case 1:
              var cards = JSON.parse(log.hand_card);
              for (var i = 0; i < cards.length; i++) {
                var temp = cards[i];
                var _vSeat = this.getVSeatByUid(temp.uid);
                _vSeat.setCards(temp.card, true);
                _vSeat.setCardType(Number(temp.cardType));
              }
              break;
            case 2:
            case 3:
            case 4:
              cards = JSON.parse(log.hand_card);
              for (var _i = 0; _i < this.seatArr.length; _i++) {
                var seat = this.seatArr[_i];
                seat.hideRecord();
              }
              var comCards = JSON.parse(log.poker_logs);
              this.bindComCards(comCards);
              for (var _i2 = 0; _i2 < cards.length; _i2++) {
                var _temp = cards[_i2];
                var _vSeat2 = this.getVSeatByUid(_temp.uid);
                _vSeat2.setCardType(Number(_temp.cardType));
              }
              break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 11:
              if (type == 6) {
                action = e_action.call;
              } else if (type == 7) {
                action = e_action.fold;
              } else if (type == 8) {
                action = e_action.check;
              } else if (type == 9) {
                action = e_action.raise;
              } else if (type == 11) {
                action = e_action.allin;
              }
              var vSeat = this.getVSeatByUid(log.user_id);
              vSeat.setRecord(Number(log.stake), action);
              if (action == e_action.allin) {
                AudioMgr.inst.playOneShot(Aclip.allInMan, 1, ModuleDef.POKER_DEZHOU);
                AudioMgr.inst.playOneShot(Aclip.allIn, 1, ModuleDef.POKER_DEZHOU);
              } else if (action == e_action.fold) {
                AudioMgr.inst.playOneShot(Aclip.giveUpMan, 1, ModuleDef.POKER_DEZHOU);
                AudioMgr.inst.playOneShot(Aclip.giveup, 1, ModuleDef.POKER_DEZHOU);
              } else if (action == e_action.call) {
                AudioMgr.inst.playOneShot(Aclip.followMan, 1, ModuleDef.POKER_DEZHOU);
                AudioMgr.inst.playOneShot(Aclip.follow, 1, ModuleDef.POKER_DEZHOU);
              } else if (action == e_action.raise) {
                AudioMgr.inst.playOneShot(Aclip.addMan, 1, ModuleDef.POKER_DEZHOU);
                AudioMgr.inst.playOneShot(Aclip.add, 1, ModuleDef.POKER_DEZHOU);
              }
              vSeat.subGold(Number(log.stake));
              this.pool.string = Math.floor((Number(this.pool.string) + Number(log.stake)) * 100) / 100 + "";
              break;
          }
          this.count++;
        };
        _proto.start = function start() {
          C_Game.instance.init();
          PokerManager.inst.start();
          this.tipLabel.string = LanguageData.getLangByID("dezhou_40");
        };
        _proto.onDestroy = function onDestroy() {
          C_Game.instance.uinit();
          this.unscheduleAllCallbacks();
        };
        _proto.update = function update(dt) {
          if (this._doStartCountdown) {
            this.doStartCountdown();
          }
          if (this._doFarmCountdown) {
            this.doFarmCountdown();
          }
          if (!this.isStart) return;
          this.nowTime += dt * 1;
          if (!this.preTime) {
            this.preTime = this.nowTime;
            return;
          }
          if (this.nowTime - this.preTime >= this.timedist) {
            this.preTime = this.nowTime;
            this.updataHistory();
          }
        };
        _proto.btn_Pause = function btn_Pause() {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          this.isStart = !this.isStart;
          var lab = this.isStart ? LanguageData.getLangByID("dezhou_302") : LanguageData.getLangByID("dezhou_301");
          this.pause.getComponentInChildren(Label).string = lab;
        };
        _proto.btn_speedUp = function btn_speedUp() {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          this.timedist = this.timedist == this.alldist ? this.alldist / 2 : this.alldist;
          var lab = this.timedist == this.alldist ? LanguageData.getLangByID("dezhou_304") : LanguageData.getLangByID("dezhou_303");
          this.speed.getComponentInChildren(Label).string = lab;
        };
        _proto.onDisable = function onDisable() {
          GameMain.evt.off(Message.bind_match, this.bindMatch, this);
          GameMain.evt.off(Message.updateScore, this.bindScore, this);
          GameMain.evt.off(Message.startGame, this.startGame, this);
          GameMain.evt.off(Message.deal, this.deal, this);
          GameMain.evt.off(Message.action, this.action, this);
          GameMain.evt.off(Message.gameOver, this.gameOver, this);
          GameMain.evt.off(Message.resume, this.resume, this);
          GameMain.evt.off(Message.bind_role, this.bindRole, this);
          GameMain.evt.off(Message.addPlayer, this.addPlayer, this);
          GameMain.evt.off(Message.delPlayer, this.delPlayer, this);
          GameMain.evt.off(Message.playerStatusChange, this.playerStatusChange, this);
          director.off(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
          // GameMain.evt.off(Message.bind_ping, this.bindPing, this);
          // cc.game.off(cc.game.EVENT_SHOW, this.onEventShow, this);
          this.clearAllTimeOut();
        }
        //    // private onEventShow() {
        //    //     console.log("后台切回");
        //    //     if (!this._canOutMatch) {
        //    //         C_Main.instance.doReconnect();
        //    //     }
        //    // }
        //绑定房间座位信息
        ;

        _proto.bindMatch = function bindMatch() {
          console.log("bindMatch:" + JSON.stringify(C_Player.instance.players));
          this.bindSeat();
          this.setScore.active = false;
          // if (C_Game.instance.isFriend) {
          //     // this.tableNum.string = LanguageData.getLangByID(30);
          //     let masterVSeat: V_Seat;
          //     let isMaster = this.mySeat.seat == C_Game.instance.roomMaster;
          //     this.setScore.active = isMaster;
          //     for (let i = 0; i < this.seatArr.length; i++) {
          //         let vSeat = this.seatArr[i];
          //         if (vSeat.player) {
          //             if (C_Game.instance.roomMaster == vSeat.seat) {
          //                 vSeat.showMaster();
          //                 masterVSeat = vSeat;
          //             } else {
          //                 vSeat.hideMaster();
          //             }
          //             if (isMaster) {
          //                 vSeat.hideReady();
          //                 vSeat.hideReadyState();
          //                 if (C_Game.instance.roomMaster == vSeat.seat) {
          //                     vSeat.showStart();
          //                     vSeat.hideKick();

          //                 } else {
          //                 vSeat.showKick();
          //                 let isReady: boolean = C_Game.instance.readyArr[vSeat.seat];
          //                 vSeat.isReady = isReady;
          //                 }
          //             } else {
          //                 vSeat.hideKick();
          //                 if (C_Game.instance.roomMaster != vSeat.seat && this.mySeat.seat == vSeat.seat) {
          //                     vSeat.showReady();
          //                 } else {
          //                     vSeat.hideReady();
          //                 }
          //                 let isReady: boolean = C_Game.instance.readyArr[vSeat.seat];
          //                 vSeat.isReady = isReady;
          //             }
          //         } else {
          //             vSeat.hideReady();
          //             vSeat.hideMaster();
          //             vSeat.hideStart();
          //             vSeat.hideKick();
          //         }
          //     }
          //     let count: number = 0;
          //     for (let i = 0; i < C_Game.instance.readyArr.length; i++) {
          //         let bn = C_Game.instance.readyArr[i];
          //         if (bn) {
          //             count++;
          //         }
          //     }
          //     masterVSeat.canStart = ((count == (C_Game.instance.readyArr.length-1)) && count>0);
          // }else{
          //     this.tableNum.string = "";
          // }
          this.tableNum.string = "";
        };
        _proto.delPlayer = function delPlayer(uid) {
          for (var j = 0; j < this.seatArr.length; j++) {
            if (this.seatArr[j].player && this.seatArr[j].player.uid == uid) {
              this.seatArr[j].bind(null);
              this.seatArr[j].node.active = false;
            }
          }
        };
        _proto.addPlayer = function addPlayer(uid) {
          this.tipLabel.string = LanguageData.getLangByID("dezhou_41");
          var player = C_Player.instance.getPlayerByID(uid);
          for (var j = 0; j < this.seatArr.length; j++) {
            if (this.seatArr[j].seat == player.seat) {
              this.seatArr[j].bind(player);
              this.seatArr[j].node.active = true;
            }
          }
        };
        _proto.playerStatusChange = function playerStatusChange(uid) {
          var player = C_Player.instance.getPlayerByID(uid);
          if (player == null) return;
          if (uid == UserMgr.inst.uid) {
            // this.readyBtn.active = !player.isReady;
            !player.isReady && this.onReady(null);
          }
          for (var j = 0; j < this.seatArr.length; j++) {
            if (this.seatArr[j].seat == player.seat) {
              this.seatArr[j].isReady = player.isReady;
            }
          }
        };
        _proto.bindPing = function bindPing() {
          this.ping.string = "roomId:" + C_Game.instance.roomId + ", ping:" + C_Main.instance.ping + "ms";
        };
        _proto.reStart = function reStart() {
          this.init();
          RoomMgr.inst.rpc_ClientReady();
        };
        //断线重连 初始化
        _proto.resume = function resume() {
          console.log("do resume:" + C_Game.instance.resumeBn);
          if (C_Game.instance.resumeBn) {
            this.tipLabel.string = LanguageData.getLangByID("dezhou_42");
            this._canOutMatch = false;
            this.init();
            this.bindSeat();
            for (var _i3 = 0; _i3 < C_Player.instance.players.length; _i3++) {
              var player = C_Player.instance.players[_i3];
              var _vSeat3 = this.getVSeat(player.seat);
              _vSeat3.setGold(player.curMoney - player.bet);
              console.log("player:" + JSON.stringify(player));
              _vSeat3.setRecord(player.round_bet, player.last_action, true);
            }
            var data = C_Game.instance.resumeData;
            C_Player.instance.score = data.bet;
            this.score = data.bet;
            /**底池 */
            this.pool.string = Math.floor(C_Game.instance.resumeData.main_pot * 100) / 100 + "";
            var vSeat = this.getVSeat(C_Player.instance.gamePlayer.seat);
            vSeat.setCards(configMgr.instance.idToICard(data.hand_ids), false);
            this.comCardsArr = [].concat(this.comCardsArr, data.comm_ids);
            this.bindComCards(configMgr.instance.idToICard(data.comm_ids));
            vSeat.setCardType(data.card_type);

            // let roundBets: number[] = C_Game.instance.resumeData.round_bets;
            // for (let i = 0; i < roundBets.length; i++) {
            //     if (roundBets[i] > 0) {
            //         let tempSeat: V_Seat = this.getVSeat(i);
            //         tempSeat.countNode.active = true;
            //         tempSeat.countLabel.node.active = true;
            //         tempSeat.countLabel.string = Math.floor(roundBets[i] * 100) / 100 + "";
            //         tempSeat.showRecord();
            //         }
            // }

            var vSeat1 = this.getVSeat(data.op_seat);
            if (vSeat1) {
              vSeat1.hatBn = true;
            }
            if (data.op_seat == this.mySeat.seat && data.round_status != 0) {
              this.operate.show = true;
              this.operate.bind();
            } else {
              this.operate.show = false;
            }
            this._allinCard = [];
            for (var i = 0; i < this.seatArr.length; i++) {
              var seat = this.seatArr[i];
              var _player = seat.player;
              if (!seat.isMe) {
                if (seat.node.active) {
                  seat.showCardsBack = true;
                }
              }
              if (_player && _player.seatType == 5) {
                if (_player.allin_round < C_Game.instance.round) {
                  seat.setCardsResume();
                } else {
                  this._allinCard.push({
                    seat: _player.seat,
                    hand_ids: _player.hand_ids
                  });
                }
              }
            }
            this.farmCountdown();
            C_Game.instance.resumeBn = false;
            if (C_Game.instance.roomStatus == e_room_status.Play) {
              this.clearMatchState();
            }
          }
        }
        //绑定角色金币
        ;

        _proto.bindRole = function bindRole() {
          // if (C_Player.instance.myPlayer.money) {
          //     this.goldNum.string = Math.floor(C_Player.instance.myPlayer.money * 100) / 100 + "";
          //     this.daiNum.string = Number(C_Player.instance.myPlayer.voucher) + "";
          // } else {
          //     // C_Login.instance.getInfo();
          // }
        };
        _proto.init = function init() {
          // console.log("game init");
          // this.bindPing();
          this.bindRole();
          this.coinEffect.removeAllChildren();
          coinEffect.instance.coin = this.coin;
          coinEffect.instance.parentNode = this.coinEffect;
          this.seatArr = [];
          for (var i = 1; i < 7; i++) {
            var vSeat = find("player" + i, this.node).getComponent(V_Seat);
            this.seatArr.push(vSeat);
            vSeat.hideCards();
            vSeat.index = i;
            vSeat.node.active = false;
          }
          this.clock = find("clock", this.node).getComponent(V_Clock);
          this.clock.node.active = !C_Game.instance.historyBn;
          this.clock.clockBgBn = false;
          this.clock.clockSpBn = false;
          this.clock.timeBn = false;
          this.clock.hideState();
          this.operate = find("operate", this.node).getComponent(V_Operate);
          this.operate.show = false;
          this.girl = find("girl", this.node).getComponent(V_Girl);
          this.girl.init();
          this.score = C_Player.instance.score;
          this.comCards.active = true;
          for (var _i4 = 0; _i4 < 5; _i4++) {
            this.getComCard(_i4).node.active = false;
            var grey = this.getComCardGrey(_i4);
            grey.node.active = false;
          }
          this.operate.init();
          this.pool.string = "0";
          this._allinCard = [];
          this.cardType.removeAllChildren();
          this.cardType.active = false;
          this.comCardsArr = [];
          // C_Login.instance.getInfo();
        };

        _proto.bindScore = function bindScore() {
          this.score = C_Player.instance.score;
        }
        //绑定座位信息
        ;

        _proto.bindSeat = function bindSeat() {
          // console.log("game bindSeat");
          this.Countdown();
          this.seatArr[0].seat = this.findMe().seat;
          this.seatArr[0].init();
          console.log("my seat:" + this.seatArr[0].seat);
          C_Player.instance.gamePlayer.seat = this.seatArr[0].seat;
          this.seatArr[0].hatBn = false;
          console.log("座位号：" + this.seatArr[0].seat);
          for (var _i5 = 1; _i5 < 6; _i5++) {
            this.seatArr[_i5].seat = (this.seatArr[_i5 - 1].seat + 1) % 6;
            this.seatArr[_i5].init();
            this.seatArr[_i5].hatBn = false;
            // console.log("座位号："+this.seatArr[i].seat);
          }

          for (var i = 0; i < C_Player.instance.players.length; i++) {
            for (var j = 0; j < this.seatArr.length; j++) {
              if (this.seatArr[j].seat == C_Player.instance.players[i].seat) {
                this.seatArr[j].bind(C_Player.instance.players[i]);
                this.seatArr[j].node.active = true;
                if (this.seatArr[j].player && this.seatArr[j].player.uid == UserMgr.inst.uid) {
                  // this.readyBtn.active = !this.seatArr[j].player.isReady;
                  !this.seatArr[j].player.isReady && this.onReady(null);
                }
              }
            }
          }
          this.operate.vSeat = this.seatArr[0];
          if (C_Game.instance.roomStatus) {
            this.clock.state = C_Game.instance.roomStatus;
          } else {
            this.clock.state = e_room_status.Waiting;
          }
        };
        _proto.Countdown = function Countdown() {
          // console.log("game Countdown"+C_Game.instance.matchTime);
          if (!(C_Game.instance.timestamp && C_Game.instance.matchTime)) {
            return;
          }
          this._doStartCountdown = true;
          this.doStartCountdown();
        };
        _proto.doStartCountdown = /*#__PURE__*/function () {
          var _doStartCountdown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var date, timer, num, lastTime;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (C_Game.instance.matchTime) {
                    _context.next = 4;
                    break;
                  }
                  this.clock.clockBgBn = false;
                  this.clock.clockSpBn = false;
                  return _context.abrupt("return");
                case 4:
                  date = new Date();
                  timer = date.getTime();
                  num = Math.floor(timer - C_Game.instance.tempTime);
                  this.clock.clockBgBn = true;
                  lastTime = C_Game.instance.matchTime - num; // console.log("倒计时"+lastTime);
                  if (C_Game.instance.roomStatus && C_Game.instance.roomStatus > e_room_status.Ready) {
                    this._canOutMatch = false;
                    this.closeLogBn = true;
                  } else {
                    if (lastTime > 2000) {
                      this._canOutMatch = true;
                      this.clock.state = e_room_status.Waiting;
                      this.closeLogBn = false;
                    } else {
                      this.clock.state = e_room_status.Ready;
                      this._canOutMatch = false;
                      this.closeLogBn = true;
                    }
                  }
                  if (!(lastTime <= 0)) {
                    _context.next = 15;
                    break;
                  }
                  this.clock.setTime(Math.ceil(lastTime / 1000));
                  // this.clock.state = C_Game.instance.roomStatus;
                  this.clock.hideState();
                  this.scheduleOnce(function () {
                    _this2._doStartCountdown = false;
                    _this2.clock.clockBgBn = false;
                    _this2.clock.clockSpBn = false;
                  }, 1);
                  return _context.abrupt("return");
                case 15:
                  this.clock.setTime(Math.ceil(lastTime / 1000));
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doStartCountdown() {
            return _doStartCountdown.apply(this, arguments);
          }
          return doStartCountdown;
        }();
        _proto.findMe = function findMe() {
          if (C_Player.instance.players) {
            var players = C_Player.instance.players;
            for (var i = 0; i < players.length; i++) {
              var player = players[i];
              if (player.isMe) {
                console.log("本人uid:" + player.uid);
                return player;
              }
            }
          }
          return null;
        }
        //    /**游戏开始 */
        ;

        _proto.startGame = function startGame(msg) {
          this.tipLabel.string = LanguageData.getLangByID("dezhou_44");
          this.playStartEffect();
          console.log("房间状态：" + C_Game.instance.roomStatus);
          this.clearMatchState();
          this.clock.state = C_Game.instance.roomStatus;
          //todo
          this.doPlayBigSmallEffect(msg);

          // if (C_Player.instance.players.length >= 3) {
          //     let vSeat: V_Seat = this.getVSeat(C_Game.instance.buttonSeat);
          //     vSeat.isFrame = true;
          //     vSeat = this.getVSeat((C_Game.instance.buttonSeat - 1 + C_Player.instance.players.length) % C_Player.instance.players.length);
          //     vSeat.isSb = true;
          //     vSeat.setRecord(C_Game.instance.sbBet, 1);
          //     vSeat.setGold(vSeat.player.money - C_Game.instance.sbBet);
          //     vSeat = this.getVSeat((C_Game.instance.buttonSeat - 2 + C_Player.instance.players.length) % C_Player.instance.players.length);
          //     vSeat.isBb = true;
          //     vSeat.setRecord(C_Game.instance.bbBet, 1);
          //     vSeat.setGold(vSeat.player.money - C_Game.instance.bbBet);
          // } else {
          //     let vSeat: V_Seat = this.getVSeat(C_Game.instance.buttonSeat);
          //     // vSeat.isFrame = true;
          //     vSeat = this.getVSeat((C_Game.instance.buttonSeat - 1 + C_Player.instance.players.length) % C_Player.instance.players.length);
          //     vSeat.isSb = true;
          //     vSeat.setRecord(C_Game.instance.sbBet, 1);
          //     vSeat.setGold(vSeat.player.money - C_Game.instance.sbBet);
          //     vSeat = this.getVSeat((C_Game.instance.buttonSeat - 2 + C_Player.instance.players.length) % C_Player.instance.players.length);
          //     vSeat.isBb = true;
          //     vSeat.setRecord(C_Game.instance.bbBet, 1);
          //     vSeat.setGold(vSeat.player.money - C_Game.instance.bbBet);
          // }
        };

        _proto.clearMatchState = function clearMatchState() {
          this.tableNum.string = "";
          this.setScore.active = false;
          for (var i = 0; i < this.seatArr.length; i++) {
            this.seatArr[i].clearMatchState();
          }
        };
        _proto.getComCard = function getComCard(index) {
          return this.comCards.getChildByName("c" + index).getComponent(Sprite);
        };
        _proto.getComCardGrey = function getComCardGrey(index) {
          return this.comCards.getChildByName("g" + index).getComponent(Sprite);
        };
        //发牌
        _proto.deal = function deal() {
          AudioMgr.inst.playOneShot(Aclip.fapai, 1, ModuleDef.POKER_DEZHOU);
          if (C_Game.instance.dealType == 0) {
            // this.girl.playAction(C_Player.instance.players.length);
            // ffff
            this.playFlyCards();
          } else {
            for (var i = 0; i < this.seatArr.length; i++) {
              var vSeat = this.seatArr[i];
              if (vSeat.node.active) {
                if (vSeat.isMe) {
                  vSeat.setCardType(C_Game.instance.cardType);
                } else {
                  vSeat.setCardType(0);
                }
              }
            }
            this.comCardsArr = [].concat(this.comCardsArr, C_Game.instance.dealCardsNum);
            this.bindComCards(C_Game.instance.dealCards);
          }
        }

        //发牌
        ;

        _proto.playFlyCards = function playFlyCards() {
          var _this3 = this;
          this.cardPool.removeAllChildren();
          var renShu = PokerManager.inst.roomData.userList.length;
          for (var _i6 = 0; _i6 < 2 * renShu; _i6++) {
            var card = this.cardClone;
            card.setParent(this.cardPool);
            card.setPosition(0, 0);
            card.active = true;
          }
          //分牌
          var i = this.cardPool.children.length - 1;
          var intervalId = setInterval(function () {
            var card = _this3.cardPool.children[i];
            var vSeat = _this3.seatArr[i % renShu];
            var toNode = _this3.seatArr[i % renShu].cards;
            var isSelf = vSeat.isMe;
            var newVec2 = toNode.getWorldPosition();
            var vec2 = _this3.cardPool.getComponent(UITransform).convertToNodeSpaceAR(newVec2);
            var scale = isSelf ? 1 : 0.4;
            tween(card).delay(0.05).to(0.3, {
              position: vec2,
              scale: new Vec3(scale, scale, scale)
            }).call(function () {
              card.active = false;
            }).start();
            i--;
            if (i < 0) {
              clearInterval(intervalId);
              //发牌结束
              _this3.onPlayFlyCardsEnd();
            }
          }, 10);
        };
        _proto.onPlayFlyCardsEnd = function onPlayFlyCardsEnd() {
          for (var i = 0; i < this.seatArr.length; i++) {
            var vSeat = this.seatArr[i];
            if (vSeat.isMe) {
              vSeat.setCards(C_Game.instance.dealCards, true);
              vSeat.setCardType(C_Game.instance.cardType);
            } else {
              if (vSeat.node.active) {
                vSeat.showCardsBack = true;
                vSeat.setCardType(0);
              }
            }
          }
        };
        _proto.bindComCards = function bindComCards(arr) {
          console.log("绑定公共牌:" + JSON.stringify(arr));
          for (var i = 0; i < arr.length; i++) {
            var iCard = arr[i];
            for (var j = 0; j < 5; j++) {
              var card = this.getComCard(j);
              if (card.node.active == false) {
                var url = void 0;
                if (iCard) {
                  var color = iCard.color;
                  var score = iCard.score;
                  if (score === e_card_score.little_king || score === e_card_score.big_king) {
                    url = "imgs/card/" + score;
                  } else {
                    url = "imgs/card/" + color + "-" + score;
                  }
                } else {
                  url = "imgs/card/back";
                }
                UiMgr.loadPic(card, url);
                card.node.active = true;
                break;
              }
            }
          }
        };
        _proto.bindEndComCards = function bindEndComCards(arr) {
          console.log("绑定公共牌:" + JSON.stringify(arr));
          for (var i = 0; i < 5; i++) {
            var card = this.getComCard(i);
            var iCard = void 0;
            if (i < arr.length) {
              iCard = arr[i];
            }
            if (iCard) {
              var url = void 0;
              if (iCard) {
                var color = iCard.color;
                var score = iCard.score;
                if (score === e_card_score.little_king || score === e_card_score.big_king) {
                  url = "imgs/card/" + score;
                } else {
                  url = "imgs/card/" + color + "-" + score;
                }
              } else {
                url = "imgs/card/back";
              }
              UiMgr.loadPic(card, url);
              card.node.active = true;
            } else {
              card.node.active = false;
            }
          }
        };
        _proto.hideComCards = function hideComCards(arr) {
          if (arr.length != 5) {
            return;
          }
          // console.log("XXXXXXXXXXXXXXXXX:"+JSON.stringify(this.comCardsArr))
          for (var i = 0; i < 5; i++) {
            var cardId = this.comCardsArr[i];
            var index = arr.indexOf(cardId);
            var grey = this.getComCardGrey(i);
            grey.node.active = index == -1;
            // console.log("XXXXXXXXXXXXXXXXX:"+index)
          }
        };

        _proto.hideTimeEffect = function hideTimeEffect() {
          for (var i = 0; i < this.seatArr.length; i++) {
            this.seatArr[i].hideTimeEffect();
          }
        }
        //出牌
        ;

        _proto.action = function action() {
          this.hideTimeEffect();
          this.round = C_Game.instance.round;
          /**上家出牌 */
          if (C_Game.instance.seat != -1) {
            var _vSeat4 = this.getVSeat(C_Game.instance.seat);
            var action = C_Game.instance.action;
            _vSeat4.setRecord(C_Game.instance.round_bet, action);
            if (action == e_action.allin) {
              AudioMgr.inst.playOneShot(Aclip.allInMan, 1, ModuleDef.POKER_DEZHOU);
              AudioMgr.inst.playOneShot(Aclip.allIn, 1, ModuleDef.POKER_DEZHOU);
            } else if (action == e_action.fold) {
              AudioMgr.inst.playOneShot(Aclip.giveUpMan, 1, ModuleDef.POKER_DEZHOU);
              AudioMgr.inst.playOneShot(Aclip.giveup, 1, ModuleDef.POKER_DEZHOU);
            } else if (action == e_action.call) {
              AudioMgr.inst.playOneShot(Aclip.followMan, 1, ModuleDef.POKER_DEZHOU);
              AudioMgr.inst.playOneShot(Aclip.follow, 1, ModuleDef.POKER_DEZHOU);
            } else if (action == e_action.raise) {
              AudioMgr.inst.playOneShot(Aclip.addMan, 1, ModuleDef.POKER_DEZHOU);
              AudioMgr.inst.playOneShot(Aclip.add, 1, ModuleDef.POKER_DEZHOU);
            }
            var player = C_Player.instance.getPlayerBySeat(C_Game.instance.seat);
            _vSeat4.setGold(player.money - C_Game.instance.game_bet);
            _vSeat4.player.game_bet = C_Game.instance.game_bet;
            if (player.uid == C_Player.instance.myPlayer.uid) ;
            if (C_Game.instance.hand_card && C_Game.instance.hand_card.length > 0) {
              this._allinCard.push({
                seat: player.seat,
                hand_ids: C_Game.instance.hand_card
              });
              // vSeat.setCards(configMgr.instance.idToICard(C_Game.instance.hand_card), true);
              // vSeat.setCardType(C_Game.instance.cardType);
            }
          } else {
            //当前回合的第一手,清除记录
            for (var j = 0; j < this.seatArr.length; j++) {
              this.seatArr[j].clearRoundRecord();
            }
          }
          if (C_Game.instance.cur_seat == -1) {
            for (var i = 0; i < this._allinCard.length; i++) {
              var _vSeat5 = this.getVSeat(this._allinCard[i].seat);
              _vSeat5.setCards(configMgr.instance.idToICard(this._allinCard[i].hand_ids), true);
            }
          }
          /**底池 */
          this.pool.string = Math.floor(C_Game.instance.pot * 100) / 100 + "";
          /**当前操作的玩家 */
          var vSeat = this.getVSeat(C_Game.instance.seat);
          if (vSeat) {
            vSeat.hatBn = false;
          }
          var vSeat1 = this.getVSeat(C_Game.instance.cur_seat);
          if (vSeat1) {
            vSeat1.hatBn = true;
          }
          if (C_Game.instance.cur_seat == this.mySeat.seat) {
            this.tipLabel.string = LanguageData.getLangByID("dezhou_43");
            this.operate.show = true;
            var _vSeat6 = this.getVSeat(C_Game.instance.cur_seat);
            if (_vSeat6) {
              _vSeat6.headBgS = true;
            }
            this.operate.bind();
          } else {
            this.operate.show = false;
            this.tipLabel.string = LanguageData.getLangByID("dezhou_42");
          }
          this.farmCountdown();
        };
        _proto.farmCountdown = function farmCountdown() {
          if (!(C_Game.instance.tempTime && C_Game.instance.opTime)) {
            return;
          }
          this._doFarmCountdown = true;
          this._playClockBn = true;
          this._playClockAudioBn = true;
          this.doFarmCountdown();
        };
        _proto.doFarmCountdown = /*#__PURE__*/function () {
          var _doFarmCountdown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var date, timer, num, lastTime, vSeat, _vSeat7;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (C_Game.instance.opTime) {
                    _context2.next = 4;
                    break;
                  }
                  this.clock.clockBgBn = false;
                  this.clock.clockSpBn = false;
                  return _context2.abrupt("return");
                case 4:
                  date = new Date();
                  timer = date.getTime();
                  num = Math.floor(timer - C_Game.instance.tempTime);
                  this.clock.clockBgBn = true;
                  lastTime = C_Game.instance.opTime - num; // console.log("倒计时"+lastTime);
                  if (lastTime < 5000) {
                    if (this._playClockAudioBn) {
                      AudioMgr.inst.playOneShot(Aclip.clock, 1, ModuleDef.POKER_DEZHOU);
                      this._playClockAudioBn = false;
                    }
                  }
                  if (lastTime < 15000) {
                    if (this._playClockBn) {
                      this._playClockBn = false;
                      if (C_Game.instance.cur_seat != -1) {
                        vSeat = this.getVSeat(C_Game.instance.cur_seat);
                        vSeat.showTimeEffect();
                      }
                    }
                  }
                  if (!(lastTime <= 0)) {
                    _context2.next = 19;
                    break;
                  }
                  this.clock.setTime(Math.ceil(lastTime / 1000));
                  this.clock.clockBgBn = false;
                  this.clock.clockSpBn = false;
                  this._doFarmCountdown = false;
                  _vSeat7 = this.getVSeatTimeEffect();
                  if (_vSeat7) {
                    _vSeat7.hideTimeEffect();
                  }
                  return _context2.abrupt("return");
                case 19:
                  this.clock.setTime(Math.ceil(lastTime / 1000));
                case 20:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doFarmCountdown() {
            return _doFarmCountdown.apply(this, arguments);
          }
          return doFarmCountdown;
        }() //    /**清除记录 */
        ;

        _proto.clearFarmRecord = function clearFarmRecord() {
          for (var i = 0; i < 7; i++) {
            if (!this.seatArr[i].isFrame) {
              this.seatArr[i].clearRecord();
            }
          }
        };
        //游戏结束
        _proto.gameOver = function gameOver() {
          this._canOutMatch = true;
          this.showHands();
        }
        //显示手牌
        ;

        _proto.showHands = /*#__PURE__*/
        function () {
          var _showHands = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this4 = this;
            var iCards, arr, i, gameOverPlayer, vSeat, _vSeat8, cards, j, settleCards;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // this.bindPing();
                  this.comCardsArr = C_Game.instance.comm_ids;
                  iCards = configMgr.instance.idToICard(this.comCardsArr);
                  this.bindEndComCards(iCards);
                  arr = C_Game.instance.gameOverPlayers;
                  for (i = 0; i < arr.length; i++) {
                    gameOverPlayer = arr[i];
                    vSeat = this.getVSeat(gameOverPlayer.seat);
                    vSeat.clearRecord();
                    vSeat.goldChange = gameOverPlayer.gold;
                    if (gameOverPlayer.uid != C_Player.instance.myPlayer.uid) {
                      _vSeat8 = this.getVSeat(gameOverPlayer.seat);
                      if (_vSeat8.typeNum != 6) {
                        cards = configMgr.instance.idToICard(gameOverPlayer.hand_card);
                        _vSeat8.setCards(cards, true);
                      }
                    }
                    vSeat.hideAllHandCards();
                    for (j = 0; j < gameOverPlayer.maxCardPlayers.length; j++) {
                      if (gameOverPlayer.maxCardPlayers[j] == gameOverPlayer.seat) {
                        C_Player.instance.gamePlayer.money = vSeat.player.initGold + gameOverPlayer.gold;
                        settleCards = gameOverPlayer.settlement_card;
                        this.hideComCards(settleCards);
                        vSeat.hideHandsCards(settleCards);
                        // console.log("XXXXXXXXXXXXXX:"+JSON.stringify(settleCards) );
                      }
                    }

                    vSeat.setGold(Number(vSeat.player.initGold) + Number(gameOverPlayer.gold));
                    if (gameOverPlayer.gold > 0) {
                      gameOverPlayer.card_type;
                      vSeat.setCardType(gameOverPlayer.card_type);
                      vSeat.isWin = true;
                      coinEffect.instance.create(new Vec2(this.poolNode.position.x, this.poolNode.position.y), vSeat.headPos);
                    } else {
                      vSeat.isWin = false;
                    }
                  }
                  // if(type){
                  //     this.playCardType(type);
                  // }
                  //显示游戏结束界面
                  this._timeOutArr.push(setTimeout(function () {
                    _this4.cardType.active = false;
                    UiMgr.showTipsView(uiPanel.GAMEOVER);
                  }, 2000));
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function showHands() {
            return _showHands.apply(this, arguments);
          }
          return showHands;
        }();
        _proto.clearAllTimeOut = function clearAllTimeOut() {
          if (this._timeOutArr) {
            for (var i = 0; i < this._timeOutArr.length; i++) {
              var id = this._timeOutArr[i];
              clearTimeout(id);
            }
          }
          this._timeOutArr = [];
        };
        _proto.playCardType = /*#__PURE__*/function () {
          var _playCardType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(type) {
            var node, effect;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.cardType.active = true;
                  this.cardType.removeAllChildren();
                  _context4.next = 4;
                  return AnimManager.createAnimNode(AnimUrl.type + type, 1, false);
                case 4:
                  node = _context4.sent;
                  effect = node.getComponent(Animation);
                  node.parent = this.cardType;
                  node.active = true;
                  effect.play("anim_desk");
                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function playCardType(_x) {
            return _playCardType.apply(this, arguments);
          }
          return playCardType;
        }();
        _proto.getVSeat = function getVSeat(seat) {
          for (var i = 0; i < this.seatArr.length; i++) {
            if (this.seatArr[i].seat == seat) {
              return this.seatArr[i];
            }
          }
          return null;
        };
        _proto.getVSeatTimeEffect = function getVSeatTimeEffect() {
          for (var i = 0; i < this.seatArr.length; i++) {
            if (this.seatArr[i].playTimeEffectBn) {
              return this.seatArr[i];
            }
          }
          return null;
        };
        _proto.getVSeatByUid = function getVSeatByUid(uid) {
          for (var i = 0; i < this.seatArr.length; i++) {
            if (this.seatArr[i].player) {
              if (this.seatArr[i].player.uid == uid) {
                return this.seatArr[i];
              }
            }
          }
          return null;
        };
        _proto.onClose = function onClose(e) {
          // if (C_Game.instance.historyBn) {
          //     // C_Login.instance.getInfo();
          //     UiMgr.showMainView(uiPanel.LOGIN);
          //     C_Game.instance.historyBn = false;
          //     return;
          // }
          // if (this.closeLogBn) {
          //     C_Tip.instance.showTip(LanguageData.getLangByID(401));
          // }
          // if (this._canOutMatch) {
          //     C_Game.instance.cancelMatch();
          // }
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          C_Game.instance.leave();
        };
        _proto.onRule = function onRule(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          UiMgr.showPopupView(uiPanel.RULE);
        };
        _proto.onSet = function onSet(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          UiMgr.showPopupView(uiPanel.SETTING);
        };
        _proto.onReady = function onReady(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          PokerManager.inst.onReady();
        }

        //播放游戏开始特效
        ;

        _proto.playStartEffect = function playStartEffect() {
          var dragonSke = this.startEfect.getComponent(sp.Skeleton);
          dragonSke.node.active = true;
          dragonSke.setCompleteListener(function (event) {
            dragonSke.node.active = false;
          });
        }
        /**选择大小盲 */;
        _proto.doPlayBigSmallEffect = function doPlayBigSmallEffect(msg) {
          var _this5 = this;
          var _loop = function _loop(i) {
            _this5.seatArr[i].playChooseEffect();
            if (_this5.seatArr[i].seat != msg.bb_seat && _this5.seatArr[i].seat != msg.sb_seat) {
              //不是大小盲的话 1秒消失
              _this5.scheduleOnce(function () {
                _this5.seatArr[i].hideChoose();
              }, 1);
            } else {
              //大小盲 2秒消失
              _this5.scheduleOnce(function () {
                _this5.seatArr[i].hideChoose();
              }, 2);
            }
          };
          for (var i = 0; i < this.seatArr.length; i++) {
            _loop(i);
          }
          this.scheduleOnce(function () {
            var vSeat_bb = _this5.getVSeat(msg.bb_seat);
            vSeat_bb.isFrame = true;
            vSeat_bb.isBb = true;
            vSeat_bb.setRecord(C_Game.instance.bbBet, 1);
            vSeat_bb.setGold(vSeat_bb.player.money - C_Game.instance.bbBet);
            var vSeat_sb = _this5.getVSeat(msg.sb_seat);
            vSeat_sb.isFrame = true;
            vSeat_sb.isSb = true;
            vSeat_sb.setRecord(C_Game.instance.sbBet, 1);
            vSeat_sb.setGold(vSeat_sb.player.money - C_Game.instance.sbBet);
          }, 2);
        };
        _createClass(V_Game, [{
          key: "mySeat",
          get: function get() {
            if (this.seatArr && this.seatArr.length > 0) {
              return this.seatArr[0];
            }
            return null;
          }
        }, {
          key: "preSeat",
          get: function get() {
            if (this.seatArr && this.seatArr.length > 0) {
              return this.seatArr[6];
            }
            return null;
          }
        }, {
          key: "pause",
          get: function get() {
            if (!this._pause) {
              this._pause = this.node.getChildByName("pause");
            }
            return this._pause;
          }
        }, {
          key: "speed",
          get: function get() {
            if (!this._speed) {
              this._speed = this.node.getChildByName("speed");
            }
            return this._speed;
          }
        }, {
          key: "score",
          set: function set(num) {
            if (!this._txtScore) {
              this._txtScore = this.node.getChildByName("score").getChildByName("txtScore").getComponent(Label);
            }
            // this._txtScore.string = LanguageData.getLangByID(7) + num;
            this._txtScore.string = LanguageData.getLangByID("dezhou_23") + ":" + num / 2 + "/" + num;
          }
        }, {
          key: "comCards",
          get: function get() {
            if (!this._comCards) {
              this._comCards = this.node.getChildByName("comCards");
            }
            return this._comCards;
          }
        }, {
          key: "cardClone",
          get: function get() {
            var c0 = this.getComCard(0);
            var r = instantiate(c0.node);
            var s = r.getComponent(Sprite);
            r.parent = this.node;
            r.setPosition(new Vec3(0, 0));
            r.active = true;
            var url = "imgs/card/back";
            UiMgr.loadPic(s, url);
            return r;
          }
        }, {
          key: "pool",
          get: function get() {
            if (!this._pool) {
              this._pool = this.comCards.getChildByName("Label").getComponent(Label);
            }
            return this._pool;
          }
        }, {
          key: "round",
          set: function set(num) {
            if (this._round != num && this._round) {
              for (var i = 0; i < this.seatArr.length; i++) {
                var seat = this.seatArr[i];
                // seat.hideRecord();
              }
            }

            this._round = num;
          }
        }]);
        return V_Game;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "daiNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ping", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cardType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "coinEffect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "poolNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "setScore", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tableNum", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "readyBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "startEfect", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "cardPool", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_GameOver.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts', './C_Player.ts', './C_Game.ts', './AudioMgr.ts', './define.ts', './ModuleDef.ts', './SubGameMgr.ts', './ResourceMgr.ts', './UserMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Sprite, Label, Color, SpriteFrame, isValid, Component, UiMgr, C_Player, C_Game, AudioMgr, Aclip, ModuleDef, SubGameMgr, ResourceMgr, UserMgr, SubGameDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Label = module.Label;
      Color = module.Color;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      UiMgr = module.UiMgr;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "8d212+Z1+BJiJVdrE2BCIor", "V_GameOver", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_GameOver = exports('V_GameOver', (_dec = ccclass('VGameOver'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_GameOver, _Component);
        function V_GameOver() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txtGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txtName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "titleLabel", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_GameOver.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          // this.itemParent.setScale(new Vec3(0, 0));
        };

        _proto.init = function init() {
          var _this2 = this;
          var goldStr = 0;
          var arr = C_Game.instance.gameOverPlayers;
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].uid == UserMgr.inst.uid) {
              goldStr = Math.floor(arr[i].gold * 100) / 100;
            }
          }
          var url;
          if (goldStr > 0) {
            url = "resources/imgs/sBg/spriteFrame";
            AudioMgr.inst.playOneShot(Aclip.win, 1, ModuleDef.POKER_DEZHOU);
            this.txtGold.string = "+" + Math.floor(goldStr * 100) / 100;
            this.titleLabel.string = 'Victory';
            this.titleLabel.color = new Color().fromHEX("#183365");
            this.titleLabel.outlineColor = new Color().fromHEX("#FF9C00");
            // fontUrl = "resources/font/success/successFont";
            // ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU,fontUrl, Font, (err, font: Font) => {
            //     if (err || !isValid(this)) {
            //         return;
            //     }
            //     // this.txtGold.font = font;
            //     this.txtGold.string = "+"+Math.floor(goldStr*100)/100;
            // })
          } else {
            url = "resources/imgs/fBg/spriteFrame";
            AudioMgr.inst.playOneShot(Aclip.lose, 1, ModuleDef.POKER_DEZHOU);
            this.txtGold.string = "" + Math.floor(goldStr * 100) / 100;
            this.titleLabel.string = 'Fail';
            this.titleLabel.color = new Color().fromHEX("#3e3e3e");
            this.titleLabel.outlineColor = new Color().fromHEX("#a2a2a2");
            // fontUrl = "resources/font/fail/failFont";
            // ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU,fontUrl, Font, (err, font: Font) => {
            //     if (err || !isValid(this)) {
            //         return;
            //     }
            //     // this.txtGold.font = font;
            //     this.txtGold.string = ""+Math.floor(goldStr*100)/100;
            // })
          }

          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, url, SpriteFrame, function (err, img) {
            if (err || !isValid(_this2)) {
              return;
            }
            _this2.bg.spriteFrame = img;
          });
          this.txtName.string = C_Player.instance.myPlayer.nickname;
        };
        _proto.onClose = function onClose() {
          // var currentScale = this.itemParent.getScale();
          // if(currentScale.x == 0){
          //     tween(this.itemParent).to(0.3, { scale: new Vec3(1,1) }, { easing: "sineInOut" }).call(() => {
          // }).start()
          // }else if(currentScale.x == 1){
          //     tween(this.itemParent).to(0.3, { scale: new Vec3(0,0)}, { easing: "sineInOut" }).call(() => {
          // }).start()
          // }
          UiMgr.closePanel(this);
        };
        _proto.onOut = function onOut() {
          // C_Login.instance.getInfo();
          // UiMgr.closePanel(this);
          // UiMgr.showMainView(uiPanel.LOGIN);
          C_Game.instance.leave();
        };
        _proto.onRestart = /*#__PURE__*/function () {
          var _onRestart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var matchGameAgainRet;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return SubGameMgr.inst.MatchGameAgain(SubGameDef.POKER_DEZHOU, SubGameMgr.gameMgr.subType);
                case 2:
                  matchGameAgainRet = _context.sent;
                  if (matchGameAgainRet.isSucc) {
                    UiMgr.closePanel(this);
                  }
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onRestart() {
            return _onRestart.apply(this, arguments);
          }
          return onRestart;
        }();
        return V_GameOver;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtGold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_GameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "149eeAjeHlPtKu0VRcr5s4D", "V_GameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Main = exports('V_Main', (_dec = ccclass('VMain'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Main, _Component);
        function V_Main() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_Main.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          tgx.UIMgr.inst.closeAll();
        };
        _proto.update = function update(dt) {};
        return V_Main;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Girl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "877daN50b9IPJpeZodNywps", "V_Girl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Girl = exports('V_Girl', (_dec = ccclass('VGirl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Girl, _Component);
        function V_Girl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "stop", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "play", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "girlSp", _descriptor3, _assertThisInitialized(_this));
          _this.count = void 0;
          return _this;
        }
        var _proto = V_Girl.prototype;
        _proto.init = function init() {};
        _proto.onDisable = function onDisable() {};
        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
        };
        _proto.playAction = function playAction(num) {
          this.count = num;
          this.doAction();
        };
        _proto.doAction = /*#__PURE__*/function () {
          var _doAction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.stop.active = true;
                  this.play.active = false;
                  this.girlSp.setAnimation(0, 'animation', false);
                  if (this.count > 0) {
                    // this.stop.active = !this.stop.active;
                    // this.play.active = !this.stop.active;
                    this.count--;
                    this.scheduleOnce(this.doAction, 0.4);
                  }
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doAction() {
            return _doAction.apply(this, arguments);
          }
          return doAction;
        }();
        return V_Girl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "play", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "girlSp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_LobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts', './configMgr2.ts', './define.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, Component, UiMgr, uiPanel, configMgr, Aclip, ModuleDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }, function (module) {
      UiMgr = module.UiMgr;
      uiPanel = module.uiPanel;
    }, function (module) {
      configMgr = module.configMgr;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1412fWtqvlC9qJqlI72cE2D", "V_LobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Main = exports('V_Main', (_dec = ccclass('VMain'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Main, _Component);
        function V_Main() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_Main.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          tgx.UIMgr.inst.closeAll();
          tgx.AudioMgr.inst.audio.playMusicLoop(Aclip.bgm, ModuleDef.POKER_DEZHOU);
        };
        _proto.complete = function complete() {
          configMgr.instance.loaderOver = true;
          tgx.AudioMgr.inst.audio.playMusicLoop(Aclip.bgm, ModuleDef.POKER_DEZHOU);
          UiMgr.showMainView(uiPanel.LOGIN);
        };
        _proto.update = function update(dt) {};
        return V_Main;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Login.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts', './C_Game.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, UiMgr, uiPanel, C_Game, e_scene, SubGameMgr, SubGameDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      UiMgr = module.UiMgr;
      uiPanel = module.uiPanel;
    }, function (module) {
      C_Game = module.C_Game;
      e_scene = module.e_scene;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f585eQ3dflMYLwgprk7nMpD", "V_Login", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Login = exports('V_Login', (_dec = ccclass('VLogin'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Login, _Component);
        function V_Login() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "level", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_Login.prototype;
        _proto.onLoad = function onLoad() {
          C_Game.instance.sceneId = e_scene.Login;
        };
        _proto.start = function start() {};
        _proto.onNormal = function onNormal(e) {
          //进入房间
          SubGameMgr.inst.MatchRoom(SubGameDef.POKER_DEZHOU, true);
        };
        _proto.onMatch = function onMatch(e) {
          return;
        };
        _proto.onRule = function onRule(e) {
          UiMgr.showPopupView(uiPanel.RULE);
        };
        return V_Login;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Operate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMain.ts', './Message.ts', './C_Player.ts', './C_Tip.ts', './S_OnAction.ts', './C_Game.ts', './V_Add.ts', './define.ts', './ModuleDef.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Button, find, Sprite, Label, Component, GameMain, Message, C_Player, C_Tip, e_action, C_Game, V_Add, Aclip, ModuleDef, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      find = module.find;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      C_Tip = module.C_Tip;
    }, function (module) {
      e_action = module.e_action;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      V_Add = module.V_Add;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "7fe003IC7hKoryf9vVl4BKt", "V_Operate", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var e_botton_str = exports('e_botton_str', {
        bet: 10,
        pass: 11,
        giveUp: 12,
        flow: 14,
        add: 15,
        allIn: 16
      });
      var V_Operate = exports('V_Operate', (_dec = ccclass('VOperate'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Operate, _Component);
        function V_Operate() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btn1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn3", _descriptor3, _assertThisInitialized(_this));
          _this.vSeat = void 0;
          _this._btn1bg = void 0;
          _this._btn2bg = void 0;
          _this._btn3bg = void 0;
          _this._btn1Label = void 0;
          _this._btn2Label = void 0;
          _this._btn3Label = void 0;
          _this.add = void 0;
          _this.btn3Str = void 0;
          _this.buttonTypeArr = void 0;
          return _this;
        }
        var _proto = V_Operate.prototype;
        _proto.init = function init() {
          this.add = find("add", this.node).getComponent(V_Add);
          this.add.init();
          GameMain.evt.on(Message.closeAdd, this.closeAdd, this);
        };
        _proto.onDisable = function onDisable() {
          GameMain.evt.off(Message.closeAdd, this.closeAdd, this);
        };
        _proto.closeAdd = function closeAdd() {
          this.btn3Label.string = this.btn3Str;
        };
        _proto.bind = function bind() {
          this.add.count = 0;
          this.add.node.active = false;
          this.buttonTypeArr = [];
          var call = C_Game.instance.call;
          console.log("Gold:" + this.vSeat.getGold());
          console.log("call:" + call);
          this.buttonTypeArr.push(e_botton_str.giveUp);
          if (this.vSeat.getGold() <= call) {
            this.buttonTypeArr.push(e_botton_str.allIn);
          } else {
            if (C_Game.instance.canPass) {
              this.buttonTypeArr.push(e_botton_str.pass);
            }
            if (C_Game.instance.can_call) {
              this.buttonTypeArr.push(e_botton_str.flow);
            }
            if (C_Game.instance.can_bet) {
              this.buttonTypeArr.push(e_botton_str.bet);
            } else {
              this.buttonTypeArr.push(e_botton_str.add);
            }
          }
          console.log(this.buttonTypeArr);
          this.btn2.node.active = true;
          this.btn3.node.active = true;
          this.btn1.node.active = true;
          this.btn3bg.grayscale = false;
          if (this.buttonTypeArr.length < 3) {
            this.btn1.node.active = false;
            this.bindButton(this.buttonTypeArr[0], this.btn2bg, this.btn2Label);
            this.bindButton(this.buttonTypeArr[1], this.btn3bg, this.btn3Label);
          } else {
            this.bindButton(this.buttonTypeArr[0], this.btn1bg, this.btn1Label);
            this.bindButton(this.buttonTypeArr[1], this.btn2bg, this.btn2Label);
            this.bindButton(this.buttonTypeArr[2], this.btn3bg, this.btn3Label);
            if (!C_Game.instance.can_bet && !C_Game.instance.can_raise) {
              this.btn3bg.grayscale = true;
            }
          }
        };
        _proto.bindButton = function bindButton(num, bg, lab) {
          lab.string = LanguageData.getLangByID("dezhou_" + num);
          console.log(lab.string);
          console.log(num);
          this.setBg(num, bg);
        };
        _proto.setBg = function setBg(index, sp) {
          // if (index == 0) {
          //     url = "imgs/btnGrey";
          // }
          // if (index == e_botton_str.giveUp) {
          //     url = "imgs/btnNo";
          // }
          // if (index == e_botton_str.flow) {
          //     url = "imgs/btnFlow";
          // }
          // if (index == e_botton_str.pass) {
          //     url = "imgs/btnPass";
          // }
          // if (index == e_botton_str.add || index == e_botton_str.allIn) {
          //     url = "imgs/btnAdd";
          // }

          // UiMgr.loadPic(sp, url);
        };
        _proto.onBtn1 = function onBtn1(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          if (this.buttonTypeArr[0]) {
            this.clickButton(this.buttonTypeArr[0]);
          }
        };
        _proto.onBtn2 = function onBtn2(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          if (this.buttonTypeArr[this.buttonTypeArr.length - 2]) {
            this.clickButton(this.buttonTypeArr[this.buttonTypeArr.length - 2]);
          }
        };
        _proto.onBtn3 = function onBtn3(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_DEZHOU);
          if (this.buttonTypeArr[this.buttonTypeArr.length - 1]) {
            this.clickButton(this.buttonTypeArr[this.buttonTypeArr.length - 1]);
          }
        };
        _proto.clickButton = function clickButton(num) {
          switch (num) {
            case e_botton_str.pass:
              this.pass(); //跳过
              break;
            case e_botton_str.giveUp:
              this.giveUp(); //弃牌
              break;
            case e_botton_str.flow:
              this.flow(); //跟
              break;
            case e_botton_str.bet:
              this.bet(); //下注
              break;
            case e_botton_str.add:
              if (!C_Game.instance.can_raise) {
                return;
              }
              this.toAdd(); //加注
              break;
            case e_botton_str.allIn:
              this.allIn(); //all in
              break;
          }
        };
        _proto.giveUp = function giveUp() {
          C_Game.instance.play(C_Game.instance.cur_seat, e_action.fold);
        };
        _proto.pass = function pass() {
          C_Game.instance.play(C_Game.instance.cur_seat, e_action.check);
        };
        _proto.flow = function flow() {
          var play = C_Player.instance.gamePlayer;
          var call = C_Game.instance.call;
          if (play.money >= call) {
            C_Game.instance.play(C_Game.instance.cur_seat, e_action.call, call);
          } else {
            C_Tip.instance.showTip(LanguageData.getLangByID("dezhou_18"));
          }
        };
        _proto.bet = function bet() {
          var play = C_Player.instance.gamePlayer;
          var bet = C_Game.instance.bet;
          if (play.money >= bet) {
            C_Game.instance.play(C_Game.instance.cur_seat, e_action.bet, bet);
          } else {
            C_Tip.instance.showTip(LanguageData.getLangByID("dezhou_18"));
          }
        };
        _proto.toAdd = function toAdd() {
          var play = C_Player.instance.gamePlayer;
          var add = C_Game.instance.min_raise;
          if (play.money >= add) {
            C_Game.instance.play(C_Game.instance.cur_seat, e_action.raise, add);
          } else {
            C_Tip.instance.showTip(LanguageData.getLangByID("dezhou_18"));
          }
        };
        _proto.openAdd = function openAdd() {
          this.add.node.active = !this.add.node.active;
        };
        _proto.allIn = function allIn() {
          C_Game.instance.play(C_Game.instance.cur_seat, e_action.allin);
        };
        _createClass(V_Operate, [{
          key: "btn1bg",
          get: function get() {
            if (!this._btn1bg) {
              this._btn1bg = this.btn1.node.getChildByName("Background").getComponent(Sprite);
            }
            return this._btn1bg;
          }
        }, {
          key: "btn2bg",
          get: function get() {
            if (!this._btn2bg) {
              this._btn2bg = this.btn2.node.getChildByName("Background").getComponent(Sprite);
            }
            return this._btn2bg;
          }
        }, {
          key: "btn3bg",
          get: function get() {
            if (!this._btn3bg) {
              this._btn3bg = this.btn3.node.getChildByName("Background").getComponent(Sprite);
            }
            return this._btn3bg;
          }
        }, {
          key: "btn1Label",
          get: function get() {
            if (!this._btn1Label) {
              this._btn1Label = this.btn1bg.node.getChildByName("Label").getComponent(Label);
            }
            return this._btn1Label;
          }
        }, {
          key: "btn2Label",
          get: function get() {
            if (!this._btn2Label) {
              this._btn2Label = this.btn2bg.node.getChildByName("Label").getComponent(Label);
            }
            return this._btn2Label;
          }
        }, {
          key: "btn3Label",
          get: function get() {
            if (!this._btn3Label) {
              this._btn3Label = this.btn3bg.node.getChildByName("Label").getComponent(Label);
            }
            return this._btn3Label;
          }
        }, {
          key: "show",
          set: function set(bn) {
            this.node.active = bn;
          }
        }]);
        return V_Operate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Rule.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts', './ExtendButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, tween, Component, UiMgr, ExtendButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      UiMgr = module.UiMgr;
    }, function (module) {
      ExtendButton = module.ExtendButton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1455bT0E0VM7YhLDOV2PGCQ", "V_Rule", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Rule = exports('V_Rule', (_dec = ccclass('VRule'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Rule, _Component);
        function V_Rule() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toogleIcon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "desc1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "desc2", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_Rule.prototype;
        _proto.onToggle = function onToggle(e) {
          var bt = e.target.getComponent(ExtendButton);
          var pos = new Vec3(-30, 0, 0);
          this.desc1.active = !bt.isChecked;
          this.desc2.active = bt.isChecked;
          if (bt.isChecked) {
            pos = new Vec3(30, 0, 0);
          }
          tween(this.toogleIcon).to(0.2, {
            position: pos
          }).start();
        };
        _proto.btn_close = function btn_close() {
          UiMgr.closePanel(this);
        };
        return V_Rule;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toogleIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "desc1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "desc2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Seat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './animManager.ts', './configMgr2.ts', './GameMain.ts', './uiMgr2.ts', './C_Player.ts', './C_Game.ts', './ModuleDef.ts', './LanguageData.ts', './RoomMgr.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Node, Label, SpriteFrame, Vec3, Color, tween, UIOpacity, Button, Font, isValid, Vec2, Component, Animation, ResourceMgr, AnimManager, AnimUrl, configMgr, e_card_score, UiMgr, C_Player, C_Game, ModuleDef, LanguageData, RoomMgr, UserMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Vec3 = module.Vec3;
      Color = module.Color;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Button = module.Button;
      Font = module.Font;
      isValid = module.isValid;
      Vec2 = module.Vec2;
      Component = module.Component;
      Animation = module.Animation;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      AnimManager = module.AnimManager;
      AnimUrl = module.AnimUrl;
    }, function (module) {
      configMgr = module.configMgr;
    }, function (module) {
      e_card_score = module.e_card_score;
    }, function (module) {
      UiMgr = module.UiMgr;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "af64fQmXjFMdKi11LWxmWdL", "V_Seat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Seat = exports('V_Seat', (_dec = ccclass('VSeat'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Sprite), _dec25 = property([SpriteFrame]), _dec26 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Seat, _Component);
        function V_Seat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "man", _descriptor, _assertThisInitialized(_this));
          // 头像
          _initializerDefineProperty(_this, "man_bg", _descriptor2, _assertThisInitialized(_this));
          // 头像
          _initializerDefineProperty(_this, "farm", _descriptor3, _assertThisInitialized(_this));
          // 地主图标
          _initializerDefineProperty(_this, "sb", _descriptor4, _assertThisInitialized(_this));
          // 小盲
          _initializerDefineProperty(_this, "bb", _descriptor5, _assertThisInitialized(_this));
          // 大盲
          _initializerDefineProperty(_this, "giveUpNode", _descriptor6, _assertThisInitialized(_this));
          // 弃牌
          _initializerDefineProperty(_this, "allIn", _descriptor7, _assertThisInitialized(_this));
          // allIn
          _initializerDefineProperty(_this, "grey", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nickname", _descriptor9, _assertThisInitialized(_this));
          // 昵称
          _initializerDefineProperty(_this, "gold", _descriptor10, _assertThisInitialized(_this));
          // 金币
          _initializerDefineProperty(_this, "cards", _descriptor11, _assertThisInitialized(_this));
          // 牌区 
          _initializerDefineProperty(_this, "record", _descriptor12, _assertThisInitialized(_this));
          // 叫分记录
          _initializerDefineProperty(_this, "type", _descriptor13, _assertThisInitialized(_this));
          // 牌型
          _initializerDefineProperty(_this, "cardsBack", _descriptor14, _assertThisInitialized(_this));
          // 牌背
          _initializerDefineProperty(_this, "timeEffect", _descriptor15, _assertThisInitialized(_this));
          // 倒计时动画
          _initializerDefineProperty(_this, "goldChangeLabel", _descriptor16, _assertThisInitialized(_this));
          // 金币变更
          _initializerDefineProperty(_this, "roomMaster", _descriptor17, _assertThisInitialized(_this));
          //房主
          _initializerDefineProperty(_this, "readyBtn", _descriptor18, _assertThisInitialized(_this));
          //准备按钮
          _initializerDefineProperty(_this, "readyLabel", _descriptor19, _assertThisInitialized(_this));
          //准备文本
          _initializerDefineProperty(_this, "kickBtn", _descriptor20, _assertThisInitialized(_this));
          //踢人按钮
          _initializerDefineProperty(_this, "startBtn", _descriptor21, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "ready", _descriptor22, _assertThisInitialized(_this));
          //已准备
          _initializerDefineProperty(_this, "headBg", _descriptor23, _assertThisInitialized(_this));
          //头像背景
          _initializerDefineProperty(_this, "headBgArr", _descriptor24, _assertThisInitialized(_this));
          //头像背景图
          _initializerDefineProperty(_this, "choose", _descriptor25, _assertThisInitialized(_this));
          // 选中框
          _this.cardArr = void 0;
          _this.greyArr = void 0;
          _this._player = void 0;
          _this.seat = void 0;
          _this._index = void 0;
          _this.playBn = false;
          _this._playTime = 0;
          _this._tempTime = 0;
          _this._playIndex = 0;
          _this.playServer = 0;
          _this.posxArr = void 0;
          _this.bindBn = void 0;
          _this.handCards = void 0;
          _this.playTimeEffectBn = void 0;
          /**轮到谁出牌的UI */
          _this._hatNode = void 0;
          _this.sPosY = 55;
          _this.ePosY = 90;
          _this.moveStep = 1;
          _this.goldPlayBn = void 0;
          _this._countNode = void 0;
          _this._countLabel = void 0;
          //    /**操作 1下注 4allin 5过牌 6弃牌 */
          _this.typeNum = void 0;
          _this._bet = void 0;
          _this._no = void 0;
          _this.flyCount = void 0;
          _this.flyCardsArr = void 0;
          _this._isWin = void 0;
          _this._isReady = void 0;
          _this._canStart = void 0;
          return _this;
        }
        var _proto = V_Seat.prototype;
        _proto.onLoad = function onLoad() {
          this.hideChoose();
        };
        _proto.bind = function bind(player) {
          this._player = player;
          if (this._player == null) {
            return;
          }
          this.man.grayscale = false;
          this.man_bg.grayscale = false;
          this.nickname.string = player.nickname;
          this.gold.string = "" + Math.floor(player.money * 100) / 100;
          this.isFrame = this.player.seatType == 1;
          this.isSb = this.player.seatType == 2;
          this.isBb = this.player.seatType == 3;
          // this.giveUpNode.active = this.player.seatType == 4;
          // this.grey.active = this.player.seatType == 4;
          this.allIn.active = this.player.seatType == 5;
          var roomPlayerData = RoomMgr.inst.getPlayData(player.uid);
          if (roomPlayerData) {
            UserMgr.inst.loadHeadIcon(roomPlayerData.visualId, this.man);
          }
          this.isReady = player.isReady;
          if (this.player.seatType == 1) {
            this.roomMaster.active = true;
          }
        };
        _proto.setNickName = function setNickName(str) {
          this.nickname.string = str;
        };
        _proto.setGold = function setGold(num) {
          if (this.gold) {
            if (num) {
              this.gold.string = Math.floor(num * 100) / 100 + "";
            } else {
              this.gold.string = "0";
            }
            this.player.curMoney = Number(this.gold.string);
          }
        };
        _proto.subGold = function subGold(num) {
          var last = Number(this.gold.string);
          var cur = last - num;
          cur = cur > 0 ? cur : 0;
          this.gold.string = Math.floor(cur * 100) / 100 + "";
        };
        _proto.getGold = function getGold() {
          return Number(this.gold.string);
        };
        _proto.update = function update(dt) {
          if (this.goldPlayBn) {
            if (this.goldChangeLabel.node.position.y > this.ePosY) {
              this.goldPlayBn = false;
            }
            this.goldChangeLabel.node.setPosition(new Vec3(this.goldChangeLabel.node.position.x, this.goldChangeLabel.node.position.y + this.moveStep));
          }
        };
        _proto.init = function init() {
          this.record.getComponent(Sprite).color = new Color().fromHEX("#ed5230");
          this.record.getChildByName("counter").getComponent(Sprite).grayscale = false;
          this.playTimeEffectBn = false;
          this.bindBn = false;
          this._player = null;
          this.nickname.string = "";
          this.cardArr = [];
          if (!this.posxArr) {
            this.posxArr = [];
          }
          for (var i = 0; i < 2; i++) {
            this.cardArr.push(this.cards.getChildByName("c" + i).getComponent(Sprite));
          }
          this.greyArr = [];
          for (var _i = 0; _i < 2; _i++) {
            var sp = this.cards.getChildByName("g" + _i).getComponent(Sprite);
            sp.node.active = false;
            this.greyArr.push(sp);
          }
          this.cards.active = false;
          this.record.active = false;
          this.goldChangeLabel.string = "";
          this.countNode.active = true;
          this.hideType();
          this.showCardsBack = false;
          // this.grey.active = false;
          this.roomMaster.active = false;
          this.clearMatchState();
        };
        _proto.clearMatchState = function clearMatchState() {
          this.hideReadyState();
          this.hideReady();
          this.hideMaster();
          this.hideStart();
          this.hideKick();
        };
        _proto.hideType = function hideType() {
          this.typeStr = "";
        };
        _proto.hideCards = function hideCards() {
          this.cards.active = false;
          this.showCardsBack = true;
        };
        _proto.showCards = function showCards() {
          this.cards.active = true;
          this.showCardsBack = false;
        };
        //    /**绑定牌型 */
        _proto.setCards = function setCards(cards, playBn) {
          if (cards === void 0) {
            cards = null;
          }
          if (playBn === void 0) {
            playBn = false;
          }
          if (this.bindBn) {
            return;
          }
          this.handCards = configMgr.instance.iCardToId(cards);
          this.bindBn = true;
          this.showCards();
          for (var i = 0; i < this.cardArr.length; i++) {
            this.bindCard(this.cardArr[i], cards[i], playBn);
          }
        };
        _proto.hideHandsCards = function hideHandsCards(arr) {
          for (var i = 0; i < this.handCards.length; i++) {
            var id = this.handCards[i];
            var index = arr.indexOf(id);
            var grey = this.greyArr[i];
            grey.node.active = index == -1;
          }
        };
        _proto.hideAllHandCards = function hideAllHandCards() {
          for (var i = 0; i < this.greyArr.length; i++) {
            this.greyArr[i].node.active = true;
          }
        }
        //    /**resume绑定牌型 */
        ;

        _proto.setCardsResume = function setCardsResume() {
          this.showCards();
          var cards = configMgr.instance.idToICard(this.player.hand_ids);
          for (var i = 0; i < this.cardArr.length; i++) {
            this.bindCard(this.cardArr[i], cards[i], false);
          }
        };
        _proto.setCardType = function setCardType(type) {
          if (type) {
            this.typeStr = LanguageData.getLangByID("dezhou_" + Number(100 + type));
          }
        };
        _proto.bindCard = function bindCard(sp, info, playBn) {
          if (info === void 0) {
            info = null;
          }
          if (playBn === void 0) {
            playBn = false;
          }
          var url = null;
          if (info) {
            var color = info.color;
            var score = info.score;
            if (score === e_card_score.little_king || score === e_card_score.big_king) {
              url = "imgs/card/" + score;
            } else {
              url = "imgs/card/" + color + "-" + score;
            }
          } else {
            url = "imgs/card/back";
          }
          UiMgr.loadPic(sp, url);
          if (playBn) {
            var originalScale = sp.node.getScale();
            tween(sp.node).to(0.2, {
              scale: new Vec3(0.1, originalScale.y)
            }, {}).call(function () {
              tween(sp.node).to(0.2, {
                scale: new Vec3(1, originalScale.y)
              }, {}).call(function () {}).start();
            }).start();
          }
        };
        _proto.showTimeEffect = /*#__PURE__*/function () {
          var _showTimeEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var node, effect, state;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.playTimeEffectBn) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  this.playTimeEffectBn = true;
                  this.timeEffect.removeAllChildren();
                  _context.next = 6;
                  return AnimManager.createAnimNode(AnimUrl.time, 1, false);
                case 6:
                  node = _context.sent;
                  effect = node.getComponent(Animation);
                  node.parent = this.timeEffect;
                  node.active = true;
                  effect.play("anim_desk");
                  state = effect.getState('anim_desk');
                  if (state) {
                    // 设置动画播放速度
                    state.speed = 0.051;
                  }
                  state.speed = 0.051;
                  node.setScale(new Vec3(1.3, 1.3, 1.3));
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showTimeEffect() {
            return _showTimeEffect.apply(this, arguments);
          }
          return showTimeEffect;
        }();
        _proto.hideTimeEffect = function hideTimeEffect() {
          this.playTimeEffectBn = false;
          this.timeEffect.removeAllChildren();
        };
        _proto.clearRecord = function clearRecord() {
          this.record.active = false;
          this.bet = 0;
        };
        _proto.setRecord = function setRecord(num, type, isResume) {
          if (isResume === void 0) {
            isResume = false;
          }
          this.typeNum = type;
          this.record.active = true;
          if (type == 5) {
            // this.countNode.active = false;
            this.countLabel.node.active = false;
            this.no.node.active = true;
            this.no.string = LanguageData.getLangByID("dezhou_11");
            this.bet = 0;
          } else if (type == 6) {
            // this.countNode.active = false;
            this.countLabel.node.active = false;
            this.no.node.active = true;
            this.no.string = LanguageData.getLangByID("dezhou_12");
            if (!isResume) this.giveUp();
            this.bet = 0;
            this.record.getComponent(Sprite).color = new Color().fromHEX("#797979");
            this.record.getChildByName("counter").getComponent(Sprite).grayscale = true;
            this.man.grayscale = true;
            this.man_bg.grayscale = true;
          } else if (type == 0) {
            this.hideRecord();
          } else {
            // this.countNode.active = true;
            this.countLabel.node.active = true;
            this.no.node.active = false;
            this.countLabel.string = Math.floor(num * 100) / 100 + "";
            this.bet = num;
          }
        }
        //新的回合 清除数据
        ;

        _proto.clearRoundRecord = function clearRoundRecord() {
          if (this.player.seatType != 4) {
            //非弃牌
            this.clearRecord();
          }
        };
        _proto.showRecord = function showRecord() {
          this.record.active = true;
        };
        _proto.hideRecord = function hideRecord() {
          this.record.active = false;
        };
        _proto.flyToSeat = function flyToSeat(arr) {
          if (this.flyCardsArr) {
            for (var i = 0; i < this.flyCardsArr.length; i++) {
              this.flyCardsArr[i].parent = null;
            }
          }
          this.flyCardsArr = arr;
          this.flyCount = this.flyCardsArr.length;
          this.doFlyCard();
        };
        _proto.doFlyCard = /*#__PURE__*/function () {
          var _doFlyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var card, targetPos, opacityCom;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.flyCount > 0) {
                    this.flyCount--;
                    card = this.flyCardsArr[this.flyCount];
                    targetPos = new Vec3(this.node.position.x, this.node.position.y);
                    tween(card).to(0.5, {
                      position: targetPos
                    }).start();
                    opacityCom = card.getComponent(UIOpacity);
                    tween(opacityCom).to(0.5, {
                      opacity: 0
                    }).start();
                    this.scheduleOnce(this.doFlyCard, 0.2);
                  }
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doFlyCard() {
            return _doFlyCard.apply(this, arguments);
          }
          return doFlyCard;
        }();
        _proto.giveUp = function giveUp() {
          this.player.seatType = 4;
          // this.giveUpNode.active = this.player.seatType == 4;
          // this.grey.active = this.player.seatType == 4;
          if (this.flyCardsArr) {
            for (var i = 0; i < this.flyCardsArr.length; i++) {
              var node = this.flyCardsArr[i];
              node.getComponent(UIOpacity).opacity = 255;
              if (this.index == 1 || this.index == 2) {
                var targetPos = new Vec3(this.node.position.x, this.node.position.y + 200);
                tween(node).to(0.5, {
                  position: targetPos
                }, {}).start();
                var opacityCom = node.getComponent(UIOpacity);
                tween(opacityCom).to(0.5, {
                  opacity: 0
                }).start();
              }
              if (this.index == 3) {
                var targetPos = new Vec3(this.node.position.x - 200, this.node.position.y);
                tween(node).to(0.5, {
                  position: targetPos
                }, {}).start();
                var opacityCom = node.getComponent(UIOpacity);
                tween(opacityCom).to(0.5, {
                  opacity: 0
                }).start();
              }
              if (this.index == 4 || this.index == 5) {
                var targetPos = new Vec3(this.node.position.x, this.node.position.y - 200);
                tween(node).to(0.5, {
                  position: targetPos
                }, {}).start();
                var opacityCom = node.getComponent(UIOpacity);
                tween(opacityCom).to(0.5, {
                  opacity: 0
                }).start();
              }
              if (this.index == 6) {
                var targetPos = new Vec3(this.node.position.x + 200, this.node.position.y);
                tween(node).to(0.5, {
                  position: targetPos
                }, {}).start();
                var opacityCom = node.getComponent(UIOpacity);
                tween(opacityCom).to(0.5, {
                  opacity: 0
                }).start();
              }
            }
          }
        };
        _proto.showReady = function showReady() {
          this.readyBtn.active = true;
        };
        _proto.hideReady = function hideReady() {
          this.readyBtn.active = false;
        };
        _proto.showReadyState = function showReadyState() {
          // this.ready.active = true;
        };
        _proto.hideReadyState = function hideReadyState() {
          // this.ready.active = false;
        };
        _proto.showKick = function showKick() {
          this.kickBtn.active = true;
        };
        _proto.hideKick = function hideKick() {
          this.kickBtn.active = false;
        };
        _proto.showMaster = function showMaster() {
          this.roomMaster.active = true;
        };
        _proto.hideMaster = function hideMaster() {
          this.roomMaster.active = false;
        };
        _proto.showStart = function showStart() {
          this.startBtn.active = true;
        };
        _proto.hideStart = function hideStart() {
          this.startBtn.active = false;
        };
        _proto.startGrey = function startGrey() {
          var grey = this.startBtn.getChildByName("grey");
          return grey;
        };
        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
        };
        _proto.onReady = function onReady(e) {
          if (this.player.isMe) {
            C_Game.instance.ready(!this.isReady);
          }
        };
        _proto.onKickPlayer = function onKickPlayer(e) {
          C_Game.instance.kickPlayer(this.player.uid);
        };
        _proto.onStartGame = function onStartGame(e) {
          if (this.isRoomMaster && this.canStart) {
            C_Game.instance.startGame();
          }
        };
        _proto.hideChoose = function hideChoose() {
          this.choose.removeAllChildren();
          this.choose.active = false;
        };
        _proto.showChoose = function showChoose() {
          this.choose.active = true;
        };
        _proto.playChooseEffect = /*#__PURE__*/function () {
          var _playChooseEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var node, effect;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.showChoose();
                  this.choose.removeAllChildren();
                  _context3.next = 4;
                  return AnimManager.createAnimNode("choose", 1, true);
                case 4:
                  node = _context3.sent;
                  node.scale = new Vec3(0.6, 0.6);
                  effect = node.getComponent(Animation);
                  node.parent = this.choose;
                  node.active = true;
                  node.layer = this.choose.layer;
                  effect.play("anim_desk");
                case 11:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function playChooseEffect() {
            return _playChooseEffect.apply(this, arguments);
          }
          return playChooseEffect;
        }();
        _createClass(V_Seat, [{
          key: "index",
          get: function get() {
            return this._index;
          },
          set: function set(num) {
            this._index = num;
          }
        }, {
          key: "player",
          get: function get() {
            return this._player;
          }
        }, {
          key: "isMe",
          get: function get() {
            if (this._player) {
              return this._player.uid == C_Player.instance.myPlayer.uid;
            } else {
              return false;
            }
          }
        }, {
          key: "head",
          get: function get() {
            var meInfo = this.node.getChildByName("meInfo");
            var head = meInfo.getChildByName("head");
            var button = head.getComponent(Button);
            return button;
          }
        }, {
          key: "showCardsBack",
          set: function set(bn) {
            this.cardsBack.active = bn;
          }
        }, {
          key: "isFrame",
          get: function get() {
            return this.farm.node.active;
          },
          set: function set(bn) {
            this.farm.node.active = bn;
          }
        }, {
          key: "isSb",
          set: function set(bn) {
            this.sb.node.active = bn;
          }
        }, {
          key: "isBb",
          set: function set(bn) {
            this.bb.node.active = bn;
          }
        }, {
          key: "typeStr",
          set: function set(str) {
            if (!this.type) return;
            this.type.string = str;
            this.type.node.active = this.type.string != "";
          }
        }, {
          key: "hatNode",
          get: function get() {
            if (!this._hatNode) {
              this._hatNode = this.node.getChildByName("meInfo").getChildByName("hat");
            }
            return this._hatNode;
          }
        }, {
          key: "hatBn",
          set: function set(bn) {
            this.hatNode.active = bn;
            this.headBg.spriteFrame = this.headBgArr[bn ? 1 : 0];
          }
        }, {
          key: "headBgS",
          set: function set(bn) {
            this.headBg.spriteFrame = this.headBgArr[bn ? 1 : 0];
          }
        }, {
          key: "goldChange",
          set: function set(num) {
            var _this2 = this;
            num = Math.floor(num * 100) / 100;
            var url;
            if (num > 0) {
              url = "resources/font/success/successFont";
              ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, url, Font, function (err, font) {
                if (err || !isValid(_this2)) {
                  return;
                }
                _this2.goldChangeLabel.font = font;
                _this2.goldChangeLabel.string = "+" + num;
              });
            } else {
              url = "resources/font/fail/failFont";
              ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_DEZHOU, url, Font, function (err, font) {
                if (err || !isValid(_this2)) {
                  return;
                }
                _this2.goldChangeLabel.font = font;
                _this2.goldChangeLabel.string = "" + num;
              });
            }
            var opacityCom = this.goldChangeLabel.node.getComponent(UIOpacity);
            opacityCom.opacity = 255;
            if (C_Game.instance.historyBn) {
              this.goldChangeLabel.node.position = new Vec3(this.goldChangeLabel.node.position.x, this.ePosY);
              this.goldPlayBn = false;
            } else {
              this.goldChangeLabel.node.position = new Vec3(this.goldChangeLabel.node.position.x, this.ePosY);
              this.goldPlayBn = true;
            }
          }
        }, {
          key: "countNode",
          get: function get() {
            if (!this._countNode) {
              this._countNode = this.record.getChildByName("counter");
            }
            return this._countNode;
          }
        }, {
          key: "countLabel",
          get: function get() {
            if (!this._countLabel) {
              this._countLabel = this.record.getChildByName("Label").getComponent(Label);
            }
            return this._countLabel;
          }
        }, {
          key: "bet",
          get: function get() {
            return this._bet;
          },
          set: function set(num) {
            this._bet = num;
          }
        }, {
          key: "no",
          get: function get() {
            if (!this._no) {
              this._no = this.record.getChildByName("noLabel").getComponent(Label);
            }
            return this._no;
          }
        }, {
          key: "headPos",
          get: function get() {
            var meInfo = this.node.getChildByName("meInfo");
            var head = meInfo.getChildByName("head");
            var pos = new Vec2();
            pos.x = this.node.position.x + meInfo.position.x + head.position.x;
            pos.y = this.node.position.y + meInfo.position.y + head.position.y;
            return pos;
          }
        }, {
          key: "isWin",
          get: function get() {
            return this._isWin;
          },
          set: function set(bn) {
            this._isWin = bn;
            // for (let i = 0; i < this.greyArr.length; i++) {
            //     this.greyArr[i].node.active = !bn;
            // }
          }
        }, {
          key: "isRoomMaster",
          get: function get() {
            return this.roomMaster.active;
          }
        }, {
          key: "isReady",
          get:
          //    /**是否准备 true：准备 false：取消准备*/
          function get() {
            return this._isReady;
          },
          set: function set(bn) {
            this._isReady = bn;
            //_isReady true:取消准备 false：准备
            if (bn) {
              this.showReadyState();
            } else {
              this.hideReadyState();
            }
            this.readyLabel.string = bn ? LanguageData.getLangByID("dezhou_25") : LanguageData.getLangByID("dezhou_24");
          }
        }, {
          key: "canStart",
          get: function get() {
            return this._canStart;
          },
          set: function set(bn) {
            this._canStart = bn;
            this.startGrey().active = !bn;
          }
        }]);
        return V_Seat;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "man", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "man_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "farm", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "giveUpNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "allIn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "grey", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nickname", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "cards", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "record", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "cardsBack", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "timeEffect", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "goldChangeLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "roomMaster", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "readyBtn", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "readyLabel", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "kickBtn", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "ready", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "headBg", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "headBgArr", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "choose", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Setting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ProgressBar, Slider, Component, UiMgr, AudioMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      Slider = module.Slider;
      Component = module.Component;
    }, function (module) {
      UiMgr = module.UiMgr;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "cc6a3zhS4hEQ5z2TtTXQ32z", "V_Setting", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Setting = exports('V_Setting', (_dec = ccclass('VSetting'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Setting, _Component);
        function V_Setting() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "effectSlider", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicSlider", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectBar", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicBar", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_Setting.prototype;
        _proto.start = function start() {
          this.effectSlider.on("slide", this.onSilder, this);
          this.musicSlider.on("slide", this.onSilder, this);
          this.init();
        };
        _proto.init = function init() {
          this.effectBar.getComponent(ProgressBar).progress = this.effectSlider.getComponent(Slider).progress = AudioMgr.inst.volumeEffect;
          this.musicBar.getComponent(ProgressBar).progress = this.musicSlider.getComponent(Slider).progress = AudioMgr.inst.volumeMusic;
        };
        _proto.onSilder = function onSilder(e) {
          var progress = e.progress;
          var node = e.node.name == "effectSlider" ? this.effectBar : this.musicBar;
          node.getComponent(ProgressBar).progress = progress;
          if (e.node.name == "effectSlider") {
            AudioMgr.inst.volumeEffect = progress;
          } else {
            AudioMgr.inst.volumeMusic = progress;
          }
        };
        _proto.btn_close = function btn_close() {
          UiMgr.closePanel(this);
        };
        return V_Setting;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effectSlider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "musicSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "musicBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Tip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, find, Component, UiMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      UiMgr = module.UiMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6af72ztz9dB5aYl2DUs4MFl", "V_Tip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Tip = exports('V_Tip', (_dec = ccclass('VTip'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Tip, _Component);
        function V_Tip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "msg", _descriptor, _assertThisInitialized(_this));
          _this.showCloseBtn = true;
          _this.yesCb = null;
          _this._time = void 0;
          _this._cout = 0;
          return _this;
        }
        var _proto = V_Tip.prototype;
        _proto.init = function init(info, showCloseBtn, yesCb, showAways) {
          if (showCloseBtn === void 0) {
            showCloseBtn = true;
          }
          if (showAways === void 0) {
            showAways = true;
          }
          this.msg.string = info;
          this.showCloseBtn = showCloseBtn;
          this.yesCb = yesCb;
          if (!showCloseBtn) {
            find("bg2/btn_close", this.node).active = false;
          }
          if (!this.yesCb) {
            find("bg2/btn_yes", this.node).active = false;
          }
          if (!showAways) {
            var date = new Date();
            this._time = date.getTime();
            this._cout = 1000;
          }
        };
        _proto.update = function update(dt) {
          if (this._cout > 0) {
            var date = new Date();
            var timer = date.getTime();
            var num = Math.floor(timer - this._time);
            if (num > this._cout) {
              this._cout = 1000;
              this.onClose();
            }
          }
        };
        _proto.btn_close = function btn_close() {
          if (this.showCloseBtn) {
            this.onClose();
          }
        };
        _proto.btn_yes = function btn_yes() {
          this.onClose();
          if (this.yesCb) {
            this.yesCb();
          }
        };
        _proto.onClose = function onClose() {
          UiMgr.closePanel(this);
        };
        return V_Tip;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "msg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_poker_dezhou', 'chunks:///_virtual/module_poker_dezhou'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map