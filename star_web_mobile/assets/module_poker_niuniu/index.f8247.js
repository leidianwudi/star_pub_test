System.register("chunks:///_virtual/animManager2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d138a9rKHRHXqoECVs5gpGO", "animManager", undefined);
      var animManager = /*#__PURE__*/function () {
        function animManager() {
          this.cache = {};
        }
        var _proto = animManager.prototype;
        _proto.loadAnimRes = function loadAnimRes(url) {
          var _this = this;
          if (this.cache[url]) return this.cache[url];
          return new Promise(function (resolve, reject) {
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, "effect/" + url, SpriteAtlas, function (err, SpriteAtlas) {
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
        choose: "choose"
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

System.register("chunks:///_virtual/Bezier2.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e23cNpDM1H4bMLrjZjl30Y", "Bezier", undefined);
      var Bezier = exports('Bezier', /*#__PURE__*/function () {
        function Bezier() {}
        //    /**二阶贝塞尔曲线（t为占总时间比例）*/
        Bezier.twoBezier = function twoBezier(p0, p1, p2, t) {
          var x = Math.pow(1 - t, 2) * p0.x + 2 * t * (1 - t) * p1.x + Math.pow(t, 2) * p2.x;
          var y = Math.pow(1 - t, 2) * p0.y + 2 * t * (1 - t) * p1.y + Math.pow(t, 2) * p2.y;
          return new Vec3(x, y);
        };
        return Bezier;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/C_Game2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Player2.ts', './NetGameServer.ts', './PokerDefine.ts', './PokerManager.ts', './GameMain2.ts', './Message2.ts', './RoomMgr.ts', './niuniu.ts', './define3.ts', './LanguageData.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, director, C_Player, gameNet, PokerEventMessage, PokerManager, GameMain, Message, RoomMgr, e_room_status, e_room_status_client, LanguageData;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      PokerEventMessage = module.PokerEventMessage;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      e_room_status = module.e_room_status;
    }, function (module) {
      e_room_status_client = module.e_room_status_client;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4736Py8dtFloCxza6iCS77", "C_Game", undefined);
      var e_scene = exports('e_scene', {
        Login: 0,
        Game: 1
      });
      var C_Game = exports('C_Game', /*#__PURE__*/function () {
        function C_Game() {
          //自动匹配
          this.autoMatch = void 0;
          this._isMatch = false;
          this._sceneId = 0;
          //    /**匹配时间 */
          this.matchTime = 0;
          //    /**操作时间 */
          this.opTime = 0;
          //    /**操作时间戳 */
          this.timestamp = 0;
          //    /**操作人的位置 一般是0123456, -1表示 */
          this.opSeat = 0;
          //    /**房间id */
          this.roomId = "";
          //    /**房间状态 */
          this.roomStatus = e_room_status_client.Normal;
          //    /**下注倍数列表 [1,2,3,4,5] */
          this.betList = [];
          //    /**抢庄倍数列表 [1,2,3,4,5] */
          this.zhuangList = [];
          //    /**庄家的位置 */
          this.zhuangSeat = 0;
          //    /**庄的倍数 */
          this.zhuangScale = 0;
          //    // /**庄家的位置 -1 表示没定庄 */
          //    // public zhuangMax:number;
          //    /**抢庄倍数 */
          this.scale = 0;
          //是否不抢
          this.isGiveUp = false;
          //    /**抢庄位置 */
          this.seat = 0;
          //    /**庄家的倍数,在倍数列表中的数据 */
          this.zhuangScore = 0;
          this.cards = [];
          this.awards = [];
          this.tempTime = 0;
          this.histroyLogs = [];
          this.histroyUser = null;
          this.histroyInfo = [];
          this.historyBn = false;
          /**底分 */
          this.score = 0;
          this.qiangzhuangBn = false;
          this.xiazhuBn = false;
          this.tanpaiBn = false;
          this.qiangZhuangArr = [];
          this.randomZhuangSeat = 0;
          this.ramdomZhuangArr = [];
          this.play_multiple = 0;
          this.play_zhuang = 0;
          this.quan_shu = 0;
          this.show_zhuang_time = 0;
          this.randomZhuangScale = 0;
          this.tanPaiSeat = 0;
          this.resumeBn = false;
        }
        var _proto = C_Game.prototype;
        _proto.init = function init() {
          console.log("C_Game init");
          this.qiangzhuangBn = false;
          this.xiazhuBn = false;
          this.tanpaiBn = false;
          this.opTime = 0;
          this.timestamp = 0;
          this.opSeat = 0;
          this.roomId = "";
          this.roomStatus = 0;
          this.betList = [];
          this.zhuangList = [];
          this.zhuangSeat = 0;
          this.zhuangScore = 0;
          this.cards = [];
          // network.addHandler(clientCmd.connector_main_cancelMatch, this.cancelMatchBack, this);
          // network.addHandler(clientCmd.connector_main_qiangzhuang, this.qiangzhuangBack, this);
          // network.addHandler(clientCmd.connector_main_xiazhu, this.xiazhuBack, this);
          // network.addHandler(clientCmd.connector_main_tanpai, this.tanpaiBack, this);

          /**广播 */
          // network.addHandler(clientCmd.onStartGame, this.onStartGameBack, this);
          // network.addHandler(clientCmd.onQiangZhuang, this.onQiangZhuang, this);
          // network.addHandler(clientCmd.onRandomZhuang, this.onRandomZhuang, this);
          // network.addHandler(clientCmd.onXiaZhu, this.onXiaZhu, this);
          // network.addHandler(clientCmd.onUserXiaZhu, this.onUserXiaZhu, this);
          // network.addHandler(clientCmd.onTanPai, this.onTanPai, this);
          // network.addHandler(clientCmd.onPlayerTanPai, this.onPlayerTanPai, this);
          // network.addHandler(clientCmd.onGameOver, this.onGameOver, this);
          // network.addHandler(clientCmd.onResume, this.onResume, this);

          gameNet.listenMsg("niuniu/RoomNiuNiu", this.onRoomBack, this);
          gameNet.listenMsg("niuniu/PlayerQiangZhuang", this.onPlayerQiangZhuang, this);
          gameNet.listenMsg("niuniu/RandomZhuang", this.onRandomZhuang, this);
          gameNet.listenMsg("niuniu/UserXiaZhu", this.onUserXiaZhu, this);
          gameNet.listenMsg("niuniu/XiaZhu", this.onXiaZhu, this);
          gameNet.listenMsg("niuniu/GameStart", this.onStartGame, this);
          gameNet.listenMsg("niuniu/GameOver", this.onGameOver, this);
          gameNet.listenMsg("niuniu/TanPai", this.onTanPai, this);
          gameNet.listenMsg("niuniu/PlayerTanPai", this.onPlayerTanPai, this);
          gameNet.listenMsg("niuniu/Resume", this.onResume, this);
          gameNet.listenMsg("niuniu/Go", this.onGo, this);
          gameNet.listenMsg("niuniu/Reset", this.onReset, this);
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
        _proto.leave = function leave() {
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
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
        _proto.cancelMatch = function cancelMatch() {
          console.log("取消匹配");
          // network.sendMsg(clientCmd.connector_main_cancelMatch, { room_id: C_Game.instance.roomId, uid: C_Player.instance.myPlayer.uid });
        };

        _proto.cancelMatchBack = function cancelMatchBack(msg) {
          if (msg.code == 0) {
            // UiMgr.showMainView(uiPanel.LOGIN);
            console.log("取消匹配成功");
          }
        };
        _proto.qiangzhuang = function qiangzhuang(score) {
          console.log("抢庄 点击");
          if (this.qiangzhuangBn) {
            return;
          }
          this.qiangzhuangBn = true;
          console.log("抢庄 锁死");
          console.log("抢庄：" + score);
          console.log("seat：" + C_Player.instance.myPlayer.seat);
          var msg = {};
          msg.room_id = C_Game.instance.roomId;
          msg.user_seat = C_Player.instance.myPlayer.seat;
          msg.scale_val = score;
          gameNet.sendMsg('niuniu/QiangZhuang', msg);
          console.log("抢庄 发送");
        };
        _proto.xiazhu = function xiazhu(score) {
          console.log("下注 点击");
          if (this.xiazhuBn) {
            return;
          }
          this.xiazhuBn = true;
          console.log("下注 锁死");
          console.log("下注：" + score);
          console.log("下注座位：" + C_Player.instance.myPlayer.seat);
          var msg = {};
          msg.room_id = C_Game.instance.roomId;
          msg.user_seat = C_Player.instance.myPlayer.seat;
          msg.bet_scale_val = score;
          gameNet.sendMsg('niuniu/Play', msg);
          console.log("下注 发送");
        };
        _proto.xiazhuBack = function xiazhuBack(msg) {
          this.xiazhuBn = false;
          console.log("下注 开锁");
          if (msg.code == 0) {
            console.log("下注成功");
            // GameMain.evt.emit(Message.xiaZhuSuccess);
          }
        };

        _proto.tanpai = function tanpai() {
          console.log("摊牌 点击");
          if (this.tanpaiBn) {
            return;
          }
          this.tanpaiBn = true;
          console.log("摊牌 锁死");
          var msg = {};
          msg.room_id = C_Game.instance.roomId;
          msg.user_seat = C_Player.instance.myPlayer.seat;
          gameNet.sendMsg('niuniu/Showdown', msg);
          console.log("摊牌 发送");
        };
        _proto.tanpaiBack = function tanpaiBack(msg) {
          this.tanpaiBn = false;
          console.log("摊牌 开锁");
          if (msg.code == 0) {
            console.log("摊牌成功");
            // GameMain.evt.emit(Message.tanPaiSuccess);
          }
        };

        _proto.onStartGame = function onStartGame(msg) {
          console.error("广播onStartGameBack", JSON.stringify(msg));
          this.matchTime = 0;
          this.timestamp = msg.timestamp;
          console.log("timestamp:" + this.timestamp);
          this.opTime = msg.op_time;
          this.opSeat = msg.op_seat;
          this.roomStatus = e_room_status_client.QiangZhuang;
          this.betList = msg.bet_list;
          this.zhuangList = msg.used_zhuang;
          C_Game.instance.roomId = msg.room_id;
          var date = new Date();
          this.tempTime = date.getTime();
          console.log(msg);
          GameMain.evt.emit(Message.startGame);
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
          C_Player.instance.init(playerList);
          this.score = msg.room_scale;
          this.roomStatus = e_room_status_client.DengDai;
          GameMain.evt.emit(Message.bind_match);
        };
        _proto.onPlayerQiangZhuang = function onPlayerQiangZhuang(msg) {
          console.error("抢庄 onQiangZhuang", JSON.stringify(msg));
          this.scale = msg.scale;
          this.seat = msg.seat;
          this.timestamp = msg.timestamp;
          this.opSeat = msg.op_seat;
          this.isGiveUp = msg.isGiveUp;
          // this.zhuangList = msg.used_zhuang;
          this.qiangZhuangArr = msg.qiangzhuangArr;
          console.log("opTime:" + this.opTime);
          var date = new Date();
          this.tempTime = date.getTime();
          console.log(msg);
          if (this.seat == PokerManager.inst.myChairID) {
            this.qiangzhuangBn = false;
            console.log("抢庄 开锁");
            GameMain.evt.emit(Message.qiangZhuangSuccess);
          }
          GameMain.evt.emit(Message.qiangZhuang);
        };
        _proto.onRandomZhuang = function onRandomZhuang(msg) {
          console.error("随机庄家 onRandomZhuang", JSON.stringify(msg));
          this.randomZhuangSeat = msg.seat;
          this.ramdomZhuangArr = msg.ramdomZhuangArr;
          this.play_multiple = msg.play_multiple;
          this.play_zhuang = msg.play_zhuang * 1000;
          this.quan_shu = msg.quan_shu;
          this.show_zhuang_time = msg.show_zhuang_time;
          this.randomZhuangScale = msg.zhuangScale;
          this.ramdomZhuangArr.sort(this.compare);
          GameMain.evt.emit(Message.randomZhuang);
        };
        _proto.compare = function compare(a, b) {
          if (a > b) {
            return 1;
          } else {
            return -1;
          }
        };
        _proto.onXiaZhu = function onXiaZhu(msg) {
          console.error("下注 onXiaZhu", JSON.stringify(msg));
          this.timestamp = msg.timestamp;
          this.zhuangSeat = msg.z_seat;
          this.zhuangScale = msg.z_scale;
          this.opTime = msg.op_time;
          this.betList = msg.bet_list;
          this.roomStatus = e_room_status_client.XiaZhu;
          console.log("timestamp:" + this.timestamp);
          console.log("opTime:" + this.opTime);
          var date = new Date();
          this.tempTime = date.getTime();
          console.log(msg);
          GameMain.evt.emit(Message.xiaZhu);
        };
        _proto.onUserXiaZhu = function onUserXiaZhu(msg) {
          console.error("下注结果 onUserXiaZhu", JSON.stringify(msg));
          console.log(msg);
          GameMain.evt.emit(Message.xiaZhuAll, msg);
          if (msg.op_seat == PokerManager.inst.myChairID) {
            this.xiazhuBn = false;
            GameMain.evt.emit(Message.xiaZhuSuccess);
          }
        };
        _proto.onPlayerTanPai = function onPlayerTanPai(msg) {
          console.error("摊牌结果 onPlayerTanPai", JSON.stringify(msg));
          console.log(msg);
          this.tanPaiSeat = msg.seat;
          GameMain.evt.emit(Message.playerTanPai, msg);
        };
        _proto.onTanPai = function onTanPai(msg) {
          console.error("摊牌 onTanPai", JSON.stringify(msg));
          this.timestamp = msg.timestamp;
          console.log("timestamp:" + this.timestamp);
          this.opTime = msg.op_time;
          this.roomStatus = e_room_status_client.TanPai;
          this.cards = [];
          this.cards = msg.cards;
          var date = new Date();
          this.tempTime = date.getTime();
          console.log(msg);
          GameMain.evt.emit(Message.tanPai);
        };
        _proto.onGameOver = function onGameOver(msg) {
          console.error("游戏结束 onGameOver", JSON.stringify(msg));
          this.opTime = 0;
          this.awards = msg.awards;
          var date = new Date();
          this.tempTime = date.getTime();
          console.log(msg);
          GameMain.evt.emit(Message.gameOver);
        };
        _proto.onResume = /*#__PURE__*/function () {
          var _onResume = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(msg) {
            var date, playerList, i, userInfo, player;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  console.error("重连 onResume", JSON.stringify(msg));
                  if (!(msg.room_status == e_room_status.JieSuan)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  this.resumeBn = true;
                  // UiMgr.showMainView(uiPanel.GAME);
                  this.score = msg.room_scale;
                  this.zhuangSeat = msg.z_seat;
                  this.zhuangScale = msg.z_scale;
                  this.opSeat = msg.op_seat;
                  this.roomId = msg.room_id;
                  this.timestamp = msg.timestamp;
                  this.opTime = msg.op_time;
                  _context2.t0 = msg.room_status;
                  _context2.next = _context2.t0 === e_room_status.Normal ? 14 : _context2.t0 === e_room_status.DengDai ? 16 : _context2.t0 === e_room_status.Ready ? 18 : _context2.t0 === e_room_status.QiangZhuang ? 20 : _context2.t0 === e_room_status.ShowRandomZhuang ? 22 : _context2.t0 === e_room_status.XiaZhu ? 24 : _context2.t0 === e_room_status.TanPai ? 26 : 28;
                  break;
                case 14:
                  this.roomStatus = e_room_status_client.Normal;
                  return _context2.abrupt("break", 28);
                case 16:
                  this.roomStatus = e_room_status_client.DengDai;
                  return _context2.abrupt("break", 28);
                case 18:
                  this.roomStatus = e_room_status_client.Ready;
                  return _context2.abrupt("break", 28);
                case 20:
                  this.roomStatus = e_room_status_client.QiangZhuang;
                  return _context2.abrupt("break", 28);
                case 22:
                  this.roomStatus = e_room_status_client.ShowRandomZhuang;
                  return _context2.abrupt("break", 28);
                case 24:
                  this.roomStatus = e_room_status_client.XiaZhu;
                  return _context2.abrupt("break", 28);
                case 26:
                  this.roomStatus = e_room_status_client.TanPai;
                  return _context2.abrupt("break", 28);
                case 28:
                  this.betList = msg.bet_list;
                  this.zhuangList = msg.used_zhuang;
                  this.cards = msg.cards;
                  date = new Date();
                  this.tempTime = date.getTime();
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
                    playerList.push(player);
                  }
                  C_Player.instance.init(playerList);
                  GameMain.evt.emit(Message.resume);
                case 37:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onResume(_x2) {
            return _onResume.apply(this, arguments);
          }
          return onResume;
        }() //开始倒计时
        ;

        _proto.onGo = function onGo(msg) {
          this.timestamp = gameNet.serverTimestamp;
          var date = new Date();
          this.tempTime = date.getTime();
          this.opTime = msg.time;
          this.roomStatus = e_room_status_client.goStart;
          GameMain.evt.emit(Message.goStart);
        }
        //取消开始
        ;

        _proto.onReset = function onReset(msg) {
          this.opTime = 0;
          this.roomStatus = e_room_status_client.DengDai;
          GameMain.evt.emit(Message.resetStart);
        };
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
            console.log("当前场景ID:" + this._sceneId);
          }
        }], [{
          key: "instance",
          get: function get() {
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

System.register("chunks:///_virtual/C_Player2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './D_Player2.ts', './UserMgr.ts'], function (exports) {
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
      cclegacy._RF.push({}, "f1b500SPh5Ma66Vge5+tDJt", "C_Player", undefined);
      var C_Player = exports('C_Player', /*#__PURE__*/function () {
        function C_Player() {
          //    /**玩家信息 */
          this._myPlayer = void 0;
          this.players = void 0;
        }
        var _proto = C_Player.prototype;
        _proto.init = function init(players) {
          console.log("游戏中玩家信息初始化");
          C_Player.instance.players = [];
          for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var temp = new D_Player();
            C_Player.instance.players.push(temp);
            temp.init(player.uid, player.nickname, player.gold, player.head, player.pic, player.seat, player.isReady);
            console.log("uid:" + player.uid);
            console.log("seat:" + player.seat);
            if (player.uid == UserMgr.inst.uid) {
              C_Player.instance.myPlayer = temp;
            }
          }
        };
        _proto.clearPlayers = function clearPlayers() {
          console.log("清空上局游戏中玩家数据");
          C_Player.instance.players = [];
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
          temp.init(player.uid, player.nickname, player.gold, player.head, player.pic, player.seat, player.isReady);
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
        _createClass(C_Player, [{
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

System.register("chunks:///_virtual/Call.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Bezier2.ts', './GameMain2.ts', './Message2.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Vec3, Label, Component, Bezier, GameMain, Message;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      Bezier = module.Bezier;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "beb2bI1IwhL8Klw/NTnSMi3", "Call", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Call = exports('Call', (_dec = ccclass('Call'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Call, _Component);
        function Call() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._p0 = new Vec3();
          _this._p1 = new Vec3();
          _this._p2 = new Vec3();
          _this._t = 0;
          return _this;
        }
        var _proto = Call.prototype;
        _proto.setPos = function setPos(p0, p1, p2) {
          this._p0 = p0;
          this._p1 = p1;
          this._p2 = p2;
        };
        _createClass(Call, [{
          key: "t",
          get: function get() {
            return this._t;
          },
          set: function set(t) {
            this._t = t;
            var pos = Bezier.twoBezier(this._p0, this._p1, this._p2, t);
            this.node.x = pos.x;
            this.node.y = pos.y;
            if (t == 1) {
              var str = this.node.getChildByName("label").getComponent(Label).string;
              GameMain.evt.emit(Message.flyCallOver, str);
              this.node.parent = null;
            }
          }
        }, {
          key: "num",
          set: function set(value) {
            this.node.getChildByName("label").getComponent(Label).string = value.toString() + "X";
          }
        }]);
        return Call;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Coin2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Bezier2.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b06c6oFBwJB6rNlJWwo4/Iy", "Coin", undefined);
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
          _this._p0 = new Vec3();
          _this._p1 = new Vec3();
          _this._p2 = new Vec3();
          _this._playBn = false;
          _this._t = 0;
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
            this.node.x = pos.x;
            this.node.y = pos.y;
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

System.register("chunks:///_virtual/coinEffect2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Call.ts', './Coin2.ts'], function (exports) {
  var _createClass, cclegacy, instantiate, tween, Vec3, Call, Coin;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      Call = module.Call;
    }, function (module) {
      Coin = module.Coin;
    }],
    execute: function () {
      cclegacy._RF.push({}, "94273HhmblFW6y/5dYhGFdt", "coinEffect", undefined);
      var coinEffect = exports('coinEffect', /*#__PURE__*/function () {
        function coinEffect() {
          this.coin = null;
          this.call = null;
          this.parentNode = null;
          //    /**生产金币个数 */
          this.num = 20;
          //    /**金币创建时间区间 */
          this.createTime = 500;
          //    /**金币飞行时间 */
          this.flyTime = 800;
          //    /**倍数飞行时间 */
          this.flyCall = 800;
          //    /**贝塞尔曲线y轴浮动 */
          this.change = 100;
          //    /**起始位置浮动 */
          this.changePos = 10;
          this._timeOutArr = [];
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
          }
        };
        _proto.createCall = function createCall(sPos, num) {
          var ePos = new Vec3(0, 0);
          var cPos = this.centerPos(sPos, ePos);
          var call = instantiate(this.call).getComponent(Call);
          call.setPos(sPos, cPos, ePos);
          call.t = 0;
          call.node.parent = this.parentNode;
          call.num = num;
          tween(call).to(this.flyCall / 1000, {
            t: 1
          }, {}).start();
        };
        _proto.sCPos = function sCPos(pos) {
          var temp = new Vec3();
          temp.x = pos.x - this.changePos + 2 * this.changePos * Math.random();
          temp.y = pos.y - this.changePos + 2 * this.changePos * Math.random();
          return temp;
        };
        _proto.centerPos = function centerPos(p1, p2) {
          var pos = new Vec3();
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

System.register("chunks:///_virtual/configMgr3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './GameMain2.ts', './Message2.ts', './uiMgr3.ts', './ResourceMgr.ts'], function (exports) {
  var _createClass, cclegacy, JsonAsset, isValid, error, SpriteFrame, Prefab, Font, SpriteAtlas, sp, ModuleDef, GameMain, Message, uiPanel, ResourceMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
      isValid = module.isValid;
      error = module.error;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Font = module.Font;
      SpriteAtlas = module.SpriteAtlas;
      sp = module.sp;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      uiPanel = module.uiPanel;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49f917CIApNxJ5oiDM8X97u", "configMgr", undefined);
      var configMgr = exports('configMgr', /*#__PURE__*/function () {
        function configMgr() {
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
          for (var key in uiPanel) {
            this.loadPanel(uiPanel[key]);
          }
          this.loadFont("font/success/successFont");
          this.loadFont("font/fail/failFont");
          this.loadFont("font/cardType/cardTypeFont");
          this.loadFont("font/counters/counters");
          for (var i = 1; i < 5; i++) {
            for (var j = 3; j < 17; j++) {
              if (j == 15) continue;
              this.loadPic("images/poker_" + i + "_" + j);
            }
          }
          for (var _i = 0; _i < 15; _i++) {
            this.loadEffect("type_" + _i);
            this.loadPic("images/type/type_" + _i);
          }
          this.loadRoomEffect("res/room/chuji/ChuJi");
          this.loadRoomEffect("res/room/zhongji/zhongji");
          this.loadRoomEffect("res/room/gaoji/gaoji");
        }

        /**加载聊天配置 */;
        _proto.loadChat = function loadChat() {
          this.total++;
          this.doLoadChat();
        };
        _proto.doLoadChat = function doLoadChat() {
          var _this = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, "json/chat", JsonAsset, function (err, asset) {
            if (err || !isValid(_this)) {
              return error(err);
            }
            configMgr.ChatTextArr = asset.json.chatList;
            _this.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }
        /**加载图片 */;
        _proto.loadPic = function loadPic(url) {
          this.total++;
          this.doLoadPic(url);
        };
        _proto.doLoadPic = function doLoadPic(url) {
          var _this2 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, url + "/spriteFrame", SpriteFrame, function (err, atlas) {
            if (err || !isValid(_this2)) {
              return error(err);
            }
            _this2.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        };
        _proto.loadPanel = function loadPanel(url) {
          this.total++;
          this.doLoadPanel(url);
        };
        _proto.doLoadPanel = function doLoadPanel(url) {
          var _this3 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, "prefab/" + url, Prefab, function (err, atlas) {
            if (err || !isValid(_this3)) {
              return error(err);
            }
            _this3.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }

        /**加载字体 */;
        _proto.loadFont = function loadFont(url) {
          this.total++;
          this.doLoadFont(url);
        };
        _proto.doLoadFont = function doLoadFont(url) {
          var _this4 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, url, Font, function (err, atlas) {
            if (err || !isValid(_this4)) {
              return error(err);
            }
            _this4.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }

        /**加载特效 */;
        _proto.loadEffect = function loadEffect(url) {
          this.total++;
          this.doLoadEffect(url);
        };
        _proto.doLoadEffect = function doLoadEffect(url) {
          var _this5 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, "effect/" + url, SpriteAtlas, function (err, atlas) {
            if (err) {
              return error(err);
            }
            _this5.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        }
        /**加载特效 */;
        _proto.loadRoomEffect = function loadRoomEffect(url) {
          this.total++;
          this.doLoadRoomEffect(url);
        };
        _proto.doLoadRoomEffect = function doLoadRoomEffect(url) {
          var _this6 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, url, sp.SkeletonData, function (err, atlas) {
            if (err) {
              return error(err);
            }
            _this6.count++;
            GameMain.evt.emit(Message.loadUpdate);
          });
        };
        _createClass(configMgr, null, [{
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

System.register("chunks:///_virtual/D_Player2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Game2.ts', './C_Player2.ts'], function (exports) {
  var _createClass, cclegacy, C_Game, C_Player;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      C_Player = module.C_Player;
    }],
    execute: function () {
      cclegacy._RF.push({}, "95b37l5lUhDf5lyrYQc39Jg", "D_Player", undefined);
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
          this._pic = void 0;
          this.isReady = false;
        }
        var _proto = D_Player.prototype;
        _proto.init = function init(uid, nickname, money, head, pic, seat, isReady) {
          if (seat === void 0) {
            seat = 0;
          }
          this.uid = uid;
          this.nickname = nickname;
          this.money = money;
          this.head = head;
          this.pic = pic;
          this.seat = seat;
          this.isReady = isReady;
        }
        //    /**是否是玩家本人 */
        ;
        //    /**是否是庄 */
        _proto.isZhuang = function isZhuang() {
          return C_Game.instance.zhuangSeat == this.seat;
        };
        _createClass(D_Player, [{
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

System.register("chunks:///_virtual/define3.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "35bd7MCFJdEQKAH63danIr3", "define", undefined);
      var Aclip = exports('Aclip', {
        bgm: "audio/bgm",
        win: "audio/win",
        lose: "audio/lose",
        niu0: "audio/niu0",
        niu1: "audio/niu1",
        niu2: "audio/niu2",
        niu3: "audio/niu3",
        niu4: "audio/niu4",
        niu5: "audio/niu5",
        niu6: "audio/niu6",
        niu7: "audio/niu7",
        niu8: "audio/niu8",
        niu9: "audio/niu9",
        niu10: "audio/niu10",
        niu11: "audio/niu11",
        niu12: "audio/niu12",
        niu13: "audio/niu13",
        niu14: "audio/niu14",
        gold: "audio/gold",
        click: "audio/click"
      }); //点击

      /** 房间状态 */
      var e_room_status_client = exports('e_room_status_client', /*#__PURE__*/function (e_room_status_client) {
        e_room_status_client[e_room_status_client["Normal"] = 0] = "Normal";
        e_room_status_client[e_room_status_client["DengDai"] = 1] = "DengDai";
        e_room_status_client[e_room_status_client["Ready"] = 2] = "Ready";
        e_room_status_client[e_room_status_client["QiangZhuang"] = 3] = "QiangZhuang";
        e_room_status_client[e_room_status_client["ShowRandomZhuang"] = 4] = "ShowRandomZhuang";
        e_room_status_client[e_room_status_client["XiaZhu"] = 5] = "XiaZhu";
        e_room_status_client[e_room_status_client["TanPai"] = 6] = "TanPai";
        e_room_status_client[e_room_status_client["JieSuan"] = 7] = "JieSuan";
        e_room_status_client[e_room_status_client["goStart"] = 8] = "goStart";
        return e_room_status_client;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMain2.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b8a4bM2qkFKtKyH0glRSWkU", "GameMain", undefined);
      var GameMain = exports('GameMain', function GameMain() {});
      /**事件*/
      GameMain.evt = new EventTarget();
      var Sleep = exports('Sleep', function Sleep(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Message2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6fb99kpNC5EZ6WmTTWgH+fz", "Message", undefined);
      var Message = exports('Message', {
        login_success: "login_success",
        bind_ping: "bind_ping",
        bind_role: "bind_role",
        bind_room_level: "bind_room_level",
        bind_match: "bind_match",
        startGame: "startGame",
        qiangZhuang: "qiangZhuang",
        randomZhuang: "randomZhuang",
        qiangZhuangSuccess: "qiangZhuangSuccess",
        xiaZhu: "xiaZhu",
        xiaZhuSuccess: "xiaZhuSuccess",
        xiaZhuAll: "xiaZhuAll",
        playerTanPai: "playerTanPai",
        tanPai: "tanPai",
        tanPaiSuccess: "tanPaiSuccess",
        gameOver: "gameOver",
        reStart: "reStart",
        resume: "resume",
        hisplayer: "hisplayer",
        hisstep: "hisstep",
        updateLoading: "updateLoading",
        loadUpdate: "loadUpdate",
        flyCallOver: "flyCallOver",
        addPlayer: "addPlayer",
        delPlayer: "delPlayer",
        playerStatusChange: "playerStatusChange",
        goStart: "goStart",
        resetStart: "resetStart",
        showNiuNiuEffect: "showNiuNiuEffect"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_poker_niuniu", ['./PokerNiuniuGameHUD.ts', './PokerNiuniuGameMgr.ts', './PokerNiuniuLobbyScene.ts', './Bezier2.ts', './GameMain2.ts', './Message2.ts', './animManager2.ts', './configMgr3.ts', './define3.ts', './uiMgr3.ts', './C_Game2.ts', './Call.ts', './Coin2.ts', './V_AutoMatch.ts', './V_Clock2.ts', './V_Game2.ts', './V_GameOver2.ts', './V_Operate2.ts', './V_Seat2.ts', './coinEffect2.ts', './otherPlayer2.ts', './C_Player2.ts', './D_Player2.ts', './V_Rule2.ts', './S_Login2.ts', './S_OnPlayerMatch2.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/otherPlayer2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "7845elm6dFOI494U1p8Q9mY", "otherPlayer", undefined);
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
          /**座位号 */
          _this._seat = 0;
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

System.register("chunks:///_virtual/PokerNiuniuGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoomMgr.ts', './UserMgr.ts', './SceneDef.ts', './LanguageData.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, RoomMgr, UserMgr, SceneDef, LanguageData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a57e2euMpxPh4/4Ig5hQnj3", "PokerNiuniuGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerNiuniuGameHUD = exports('PokerNiuniuGameHUD', (_dec = ccclass('PokerNiuniuGameHUD'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerNiuniuGameHUD, _Component);
        function PokerNiuniuGameHUD() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = PokerNiuniuGameHUD.prototype;
        _proto.start = function start() {
          if (!UserMgr.inst.uid) {
            tgx.SceneUtil.loadScene(SceneDef.START);
            return;
          }
          tgx.UIMgr.inst.closeAll();

          // if (RoomMgr.inst.isOnline) {
          //     // tgx.UIMgr.inst.showUI(UIChat, null, null, gameNet);
          // }
        };

        _proto.update = function update(deltaTime) {};
        _proto.onBtnExitClicked = /*#__PURE__*/function () {
          var _onBtnExitClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //this.node.getParent().getChildByName('Machine').getComponent(AudioSource).stop();
                  tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!ok) {
                            _context.next = 3;
                            break;
                          }
                          _context.next = 3;
                          return RoomMgr.inst.exitRoom();
                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function onBtnExitClicked() {
            return _onBtnExitClicked.apply(this, arguments);
          }
          return onBtnExitClicked;
        }();
        return PokerNiuniuGameHUD;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerNiuniuGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts', './configMgr3.ts', './GameMain2.ts', './Message2.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, GameMgr, SubGameDef, SubGameMgr, ModuleDef, configMgr, GameMain, Message;
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
      configMgr = module.configMgr;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "726fcTg/7xCN5iiwevNcjw8", "PokerNiuniuGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerNiuniuGameMgr = exports('PokerNiuniuGameMgr', (_dec = ccclass('PokerNiuniuGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(PokerNiuniuGameMgr, _GameMgr);
        function PokerNiuniuGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameType = SubGameDef.POKER_NIUNIU;
          _this._entryScene = {
            name: 'lobby_poker_niuniu',
            bundle: ModuleDef.POKER_NIUNIU
          };
          _this._gameScene = {
            name: 'game_poker_niuniu',
            bundle: ModuleDef.POKER_NIUNIU
          };
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          return _this;
        }
        var _proto = PokerNiuniuGameMgr.prototype;
        _proto.uinit = function uinit() {
          GameMain.evt.targetOff(this);
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
        _createClass(PokerNiuniuGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new PokerNiuniuGameMgr();
            }
            return this._inst;
          }
        }]);
        return PokerNiuniuGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(PokerNiuniuGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerNiuniuLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "858cb+Dev1NYrBjiUX7WJeL", "PokerNiuniuLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerNiuniuLobbyScene = exports('PokerNiuniuLobbyScene', (_dec = ccclass('PokerNiuniuLobbyScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerNiuniuLobbyScene, _Component);
        function PokerNiuniuLobbyScene() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = PokerNiuniuLobbyScene.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgx.UIMgr.inst.closeAll();
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        return PokerNiuniuLobbyScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_Login2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6b575dbrF9Ez4NFNrelMxAF", "S_Login", undefined);
      var S_Login = exports('S_Login', function S_Login() {
        this.code = void 0;
        this.info = void 0;
        this.nickname = void 0;
        this.money = void 0;
        this.token = void 0;
        this.head = void 0;
        this.uid = void 0;
        this.room = void 0;
        this.tagr = void 0;
      });

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // export class S_Login {
      // 
      //     public code: number;
      //     public info: string;
      //     public nickname: string;
      //     public money: number;
      //     public token: string;
      //     public head: string;
      //     public uid: number;
      //     public room:object;
      //     public tagr:object;
      // 
      //     constructor() {
      // 
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/S_OnPlayerMatch2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e63a1ifeylCD6ZBJRVvjeY8", "S_OnPlayerMatch", undefined);
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
        // public cards: I_S_Card[];
        //    /**玩家结算信息 */
        // public awards:I_Award[];
        //    /**底分 */
        this.room_scale = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/uiMgr3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMain2.ts', './Message2.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "de351s6Jf9BkasYvb5JAhet", "uiMgr", undefined);
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
        uiPanel["TIP"] = "tip/V_Tip";
        uiPanel["RULE"] = "rule/V_Rule";
        uiPanel["GAME"] = "game/V_Game";
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
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, url + "/spriteFrame", SpriteFrame, function (err, img) {
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
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, "prefab/" + url, Prefab, function (err, res) {
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

System.register("chunks:///_virtual/V_AutoMatch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Game2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, C_Game;
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
      C_Game = module.C_Game;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "aed8cISBIFDw6PYM7/w6r9a", "V_AutoMatch", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_AutoMatch = exports('V_AutoMatch', (_dec = ccclass('V_AutoMatch'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_AutoMatch, _Component);
        function V_AutoMatch() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "image_close", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "image_open", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "image_ball_open", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "image_ball_close", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_AutoMatch.prototype;
        _proto.start = function start() {
          var niuniu_autoMatch = localStorage.getItem("niuniu_autoMatch");
          if (niuniu_autoMatch && niuniu_autoMatch != "") {
            this.setAutoMatch(niuniu_autoMatch == "1");
          } else {
            this.setAutoMatch(true);
          }
        };
        _proto.setAutoMatch = function setAutoMatch(bn) {
          this.image_close.active = !bn;
          this.image_open.active = bn;
          this.image_ball_open.active = bn;
          this.image_ball_close.active = !bn;
          C_Game.instance.autoMatch = bn;
          localStorage.setItem("niuniu_autoMatch", bn ? "1" : "0");
        };
        _proto.onClick = function onClick() {
          this.setAutoMatch(!C_Game.instance.autoMatch);
        };
        return V_AutoMatch;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "image_close", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "image_open", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "image_ball_open", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "image_ball_close", [_dec5], {
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

System.register("chunks:///_virtual/V_Clock2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './define3.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, Animation, AnimationClip, Component, e_room_status_client, LanguageData;
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
      Label = module.Label;
      Node = module.Node;
      Animation = module.Animation;
      AnimationClip = module.AnimationClip;
      Component = module.Component;
    }, function (module) {
      e_room_status_client = module.e_room_status_client;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "018ebpbnaBJ+pesv6B4chgH", "V_Clock", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Clock = exports('V_Clock', (_dec = ccclass('VClock'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Clock, _Component);
        function V_Clock() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "time", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clockBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipsLable", _descriptor3, _assertThisInitialized(_this));
          _this._state = null;
          _this._aniPlay = false;
          return _this;
        }
        var _proto = V_Clock.prototype;
        //动画是否在播放中
        _proto.setTime = function setTime(num) {
          this.clockBgBn = num > 0;
          this.timeBn = num > 0;
          this.time.string = "" + num;
          if (num <= 3) {
            if (!this._aniPlay) {
              var ani = this.clockBg.getComponent(Animation);
              var state = ani.getState(ani.defaultClip.name);
              state.setTime(0);
              ani.play();
              ani.defaultClip.wrapMode = AnimationClip.WrapMode.Loop;
              console.log("clock play");
              this._aniPlay = true;
            }
          } else {
            if (this._aniPlay) {
              var _ani = this.clockBg.getComponent(Animation);
              _ani.stop();
              this.clockBg.setRotationFromEuler(0, 0, 0);
              console.log("clock stop");
              this._aniPlay = false;
            }
          }
        };
        _createClass(V_Clock, [{
          key: "clockBgBn",
          set: function set(bn) {
            this.clockBg.active = bn;
            this.timeBn = bn;
          }
        }, {
          key: "timeBn",
          set: function set(bn) {
            this.time.node.active = bn;
          }
        }, {
          key: "state",
          set: function set(num) {
            // console.log("clock state:" + num)
            if (num == e_room_status_client.DengDai) {
              this.tipsLable.string = LanguageData.getLangByID("niuniu_2");
            }
            if (num == e_room_status_client.QiangZhuang) {
              this.tipsLable.string = LanguageData.getLangByID("niuniu_3");
            }
            if (num == e_room_status_client.XiaZhu) {
              this.tipsLable.string = LanguageData.getLangByID("niuniu_4");
            }
            if (num == e_room_status_client.goStart) {
              this.tipsLable.string = LanguageData.getLangByID("niuniu_5");
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clockBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipsLable", [_dec4], {
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

System.register("chunks:///_virtual/V_Game2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Player2.ts', './C_Game2.ts', './coinEffect2.ts', './V_Clock2.ts', './V_GameOver2.ts', './V_Seat2.ts', './GameMain2.ts', './Message2.ts', './SubGameMessage.ts', './RoomMgr.ts', './UserMgr.ts', './PokerManager.ts', './animManager2.ts', './uiMgr3.ts', './define3.ts', './ModuleDef.ts', './V_Operate2.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Prefab, director, find, sp, instantiate, UITransform, tween, Vec3, Component, Animation, C_Player, C_Game, coinEffect, V_Clock, V_GameOver, V_Seat, GameMain, Message, SubGameMessage, RoomMgr, UserMgr, PokerManager, AnimManager, AnimUrl, UiMgr, uiPanel, Aclip, e_room_status_client, ModuleDef, V_Operate, LanguageData;
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
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      director = module.director;
      find = module.find;
      sp = module.sp;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
      Animation = module.Animation;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      coinEffect = module.coinEffect;
    }, function (module) {
      V_Clock = module.V_Clock;
    }, function (module) {
      V_GameOver = module.V_GameOver;
    }, function (module) {
      V_Seat = module.V_Seat;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      AnimManager = module.AnimManager;
      AnimUrl = module.AnimUrl;
    }, function (module) {
      UiMgr = module.UiMgr;
      uiPanel = module.uiPanel;
    }, function (module) {
      Aclip = module.Aclip;
      e_room_status_client = module.e_room_status_client;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      V_Operate = module.V_Operate;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "3b3870nn4FETJmKNUo42Cdf", "V_Game", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Game = exports('V_Game', (_dec = ccclass('VGame'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Game, _Component);
        function V_Game() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tanPaiNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ping", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "result", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "call", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardPrefab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinEffect", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "niuniuEfect", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startEfect", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardPool", _descriptor10, _assertThisInitialized(_this));
          _this.playerNum = 6;
          //    /**玩家座位 */
          _this.seatArr = [];
          _initializerDefineProperty(_this, "readyBtn", _descriptor11, _assertThisInitialized(_this));
          _this.clock = null;
          _this.operate = null;
          _this._txtScore = null;
          _this._txtCall = null;
          _this._doStartCountdown = false;
          _this._canOutMatch = true;
          _this._doFarmCountdown = false;
          _this.endIndex = 0;
          _this.curIndex = 0;
          _this._timeOutArr = [];
          _this._GameOverWait = 0;
          _this._goldChange = 0;
          _this.tempScale = 0;
          return _this;
        }
        var _proto = V_Game.prototype;
        _proto.onLoad = function onLoad() {
          // C_Game.instance.sceneId = e_scene.Game;
          GameMain.evt.on(Message.bind_match, this.bindSeat, this);
          GameMain.evt.on(Message.startGame, this.startGame, this);
          GameMain.evt.on(Message.qiangZhuang, this.qiangZhuang, this);
          GameMain.evt.on(Message.randomZhuang, this.randomZhuang, this);
          GameMain.evt.on(Message.xiaZhu, this.xiazhu, this);
          GameMain.evt.on(Message.xiaZhuAll, this.xiaZhuAll, this);
          GameMain.evt.on(Message.xiaZhuSuccess, this.xiaZhuSuss, this);
          GameMain.evt.on(Message.tanPai, this.tanPai, this);
          GameMain.evt.on(Message.playerTanPai, this.playerTanPai, this);
          GameMain.evt.on(Message.gameOver, this.gameOver, this);
          GameMain.evt.on(Message.resume, this.resume, this);
          GameMain.evt.on(Message.bind_role, this.bindRole, this);
          GameMain.evt.on(Message.flyCallOver, this.flyCallOver, this);
          GameMain.evt.on(Message.addPlayer, this.addPlayer, this);
          GameMain.evt.on(Message.delPlayer, this.delPlayer, this);
          GameMain.evt.on(Message.playerStatusChange, this.playerStatusChange, this);
          GameMain.evt.on(Message.qiangZhuangSuccess, this.qiangZhuangSuss, this);
          GameMain.evt.on(Message.goStart, this.goStart, this);
          GameMain.evt.on(Message.resetStart, this.resetStart, this);
          director.on(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
          GameMain.evt.on(Message.showNiuNiuEffect, this.playNiuniuEffect, this);
          this.init();
          // if (C_Game.instance.historyBn) {
          //     this.showHistory();
          // } else {
          //     this.bindSeat();
          //     this.resume();
          // }
          tgx.AudioMgr.inst.audio.playMusicLoop(Aclip.bgm, ModuleDef.POKER_NIUNIU);
        };
        _proto.showHistory = function showHistory() {
          var players = [];
          var histroyInfo = C_Game.instance.histroyInfo;
          var score = Number(histroyInfo[0].room_money);
          this.score = score;
          for (var i = 0; i < histroyInfo.length; i++) {
            var temp = histroyInfo[i];
            players.push({
              uid: temp.user_id,
              gold: Number(temp.init_money),
              seat: Number(temp.seat),
              nickname: temp.username,
              head: null,
              pic: Number(temp.pic),
              isReady: true
            });
          }
          C_Player.instance.init(players);
          this.bindSeat();
          for (var _i = 0; _i < histroyInfo.length; _i++) {
            var vSeat = this.getVSeat(Number(histroyInfo[_i].seat));
            vSeat.isFrame = histroyInfo[_i].is_landlord == "1";
            var cash_times = Number(histroyInfo[_i].cash_times);
            if (!vSeat.isFrame) {
              vSeat.setRecord(score * cash_times, 1);
            }
            vSeat.setType(Number(histroyInfo[_i].brand_result));
            vSeat.cardType = Number(histroyInfo[_i].brand_times);
            var cards = JSON.parse(histroyInfo[_i].poker);
            vSeat.setCards(cards);
            var goldChange = Number(histroyInfo[_i].settle_money);
            vSeat.goldChange = goldChange;
          }
        };
        _proto.start = function start() {
          C_Game.instance.init();
          PokerManager.inst.start();
        };
        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
        };
        _proto.update = function update(dt) {
          if (this._doStartCountdown) {
            this.doStartCountdown();
          }
          if (this._doFarmCountdown) {
            this.doFarmCountdown();
          }
          if (this._GameOverWait > 0) {
            this.doGameOverWait();
          }
        };
        _proto.onDisable = function onDisable() {
          this.clearAllTimeOut();
          GameMain.evt.off(Message.bind_match, this.bindSeat, this);
          GameMain.evt.off(Message.startGame, this.startGame, this);
          GameMain.evt.off(Message.qiangZhuang, this.qiangZhuang, this);
          GameMain.evt.off(Message.randomZhuang, this.randomZhuang, this);
          GameMain.evt.off(Message.xiaZhu, this.xiazhu, this);
          GameMain.evt.off(Message.xiaZhuAll, this.xiaZhuAll, this);
          GameMain.evt.off(Message.tanPai, this.tanPai, this);
          GameMain.evt.off(Message.gameOver, this.gameOver, this);
          GameMain.evt.off(Message.resume, this.resume, this);
          GameMain.evt.off(Message.bind_role, this.bindRole, this);
          GameMain.evt.off(Message.flyCallOver, this.flyCallOver, this);
          GameMain.evt.off(Message.addPlayer, this.addPlayer, this);
          GameMain.evt.off(Message.delPlayer, this.delPlayer, this);
          GameMain.evt.off(Message.playerStatusChange, this.playerStatusChange, this);
          GameMain.evt.off(Message.qiangZhuangSuccess, this.qiangZhuangSuss, this);
          GameMain.evt.off(Message.goStart, this.goStart, this);
          GameMain.evt.off(Message.resetStart, this.resetStart, this);
          director.off(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
          GameMain.evt.off(Message.showNiuNiuEffect, this.playNiuniuEffect, this);
        };
        _proto.flyCallOver = function flyCallOver(str) {
          this.callNum = str;
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
          var player = C_Player.instance.getPlayerByID(uid);
          for (var j = 0; j < this.seatArr.length; j++) {
            if (this.seatArr[j].seat == player.seat) {
              this.seatArr[j].bind(player);
              this.seatArr[j].node.active = true;
            }
          }
        };
        _proto.playerStatusChange = function playerStatusChange(uid) {
          // var player:D_Player = C_Player.instance.getPlayerByID(uid);
          // if(player == null) return;
          // if(uid == UserMgr.inst.uid)
          // {
          //     this.readyBtn.active = !player.isReady;
          // }
          // for (var j: number = 0; j < this.seatArr.length; j++) {
          //     if (this.seatArr[j].seat == player.seat) {
          //         this.seatArr[j].isReady = player.isReady;
          //     } 
          // }
        };
        _proto.reStart = function reStart() {
          this.init();
          RoomMgr.inst.rpc_ClientReady();
        };
        _proto.resume = function resume() {
          if (C_Game.instance.resumeBn) {
            C_Game.instance.resumeBn = false;
            this._canOutMatch = false;
            this.init();
            this.bindSeat();
            // if(C_Game.instance.roomStatus == e_room_status_client.Ready || C_Game.instance.roomStatus == e_room_status_client.DengDai){
            //     this.bindSeat();
            // }
            if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
              this.startGame();
            } else if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu || C_Game.instance.roomStatus == e_room_status_client.ShowRandomZhuang) {
              this.xiazhu();
            } else if (C_Game.instance.roomStatus == e_room_status_client.TanPai) {
              this.resumeTanPai();
            }
          }
        };
        _proto.bindRole = function bindRole() {};
        _proto.init = function init() {
          // console.log("game init");
          this.unscheduleAllCallbacks();
          this.coinEffect.removeAllChildren();
          coinEffect.instance.coin = this.coin;
          coinEffect.instance.call = this.call;
          coinEffect.instance.parentNode = this.coinEffect;
          this.seatArr = [];
          for (var i = 0; i < this.playerNum; i++) {
            this.seatArr.push(find("player" + i, this.node).getComponent(V_Seat));
            this.seatArr[i].hideCards();
            this.seatArr[i].index = i;
            this.seatArr[i].node.active = false;
            this.seatArr[i].hideChoose();
          }
          this.clock = find("clock", this.node).getComponent(V_Clock);
          this.clock.node.active = false;
          this.clock.clockBgBn = false;
          this.clock.timeBn = false;
          this.operate = find("operate", this.node).getComponent(V_Operate);
          this.operate.node.active = false;
          this.tanPaiNode.active = false;
          this.niuniuEfect.active = false;
          this.startEfect.active = false;
          this.callNum = "";
        };
        _proto.bindSeat = function bindSeat() {
          // console.log("game bindSeat");
          this.Countdown();
          this.seatArr[0].seat = this.findMe().seat;
          this.score = C_Game.instance.score;
          this.seatArr[0].init();
          C_Player.instance.myPlayer.seat = this.seatArr[0].seat;
          this.seatArr[0].hatBn = false;
          console.log("座位号：" + this.seatArr[0].seat);
          for (var i = 1; i < this.playerNum; i++) {
            this.seatArr[i].seat = (this.seatArr[i - 1].seat + 1) % this.playerNum;
            this.seatArr[i].init();
            this.seatArr[i].hatBn = false;
            // console.log("座位号："+this.seatArr[i].seat);
          }

          for (var i = 0; i < C_Player.instance.players.length; i++) {
            for (var j = 0; j < this.seatArr.length; j++) {
              if (this.seatArr[j].seat == C_Player.instance.players[i].seat) {
                this.seatArr[j].bind(C_Player.instance.players[i]);
                this.seatArr[j].node.active = true;
                if (this.seatArr[j].player && this.seatArr[j].player.uid == UserMgr.inst.uid) {
                  if (!this.seatArr[j].player.isReady) {
                    PokerManager.inst.onReady();
                  }
                }
              }
            }
          }
          this.clock.state = e_room_status_client.DengDai;
          this.clock.node.active = true;
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
            var date, timer, num, lastTime;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (C_Game.instance.matchTime) {
                    _context.next = 3;
                    break;
                  }
                  this.clock.clockBgBn = false;
                  return _context.abrupt("return");
                case 3:
                  date = new Date();
                  timer = date.getTime();
                  num = Math.floor(timer - C_Game.instance.tempTime);
                  this.clock.clockBgBn = true;
                  lastTime = C_Game.instance.matchTime - num; // console.log("倒计时"+lastTime);
                  if (lastTime > 5000) {
                    this.clock.state = e_room_status_client.DengDai;
                    this._canOutMatch = true;
                  } else {
                    this.clock.state = e_room_status_client.Ready;
                    this._canOutMatch = false;
                  }
                  if (!(lastTime <= 0)) {
                    _context.next = 15;
                    break;
                  }
                  this.clock.setTime(Math.ceil(lastTime / 1000));
                  // this.clock.state = C_Game.instance.roomStatus;
                  // await Sleep(1000);
                  this.startGame();
                  this._doStartCountdown = false;
                  this.clock.clockBgBn = false;
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
        /**游戏开始 */;
        _proto.startGame = function startGame() {
          console.log("房间状态：" + C_Game.instance.roomStatus);
          this.clearMatchState();
          this.clock.node.active = true;
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            for (var i = 0; i < this.seatArr.length; i++) {
              this.seatArr[i].hatBn = this.seatArr[i].seat == C_Game.instance.opSeat;
            }
            // if (C_Game.instance.opSeat == this.mySeat.seat) {
            //     this.operate.node.active = true;
            //     this.operate.type = 0
            // } else {
            //     this.operate.node.active = false;
            // }
            this.operate.node.active = true;
            this.operate.type = 0;
            this.farmCountdown();
            this.clock.state = C_Game.instance.roomStatus;
            this.playStartEffect();
          }
        };
        _proto.clearMatchState = function clearMatchState() {
          for (var i = 0; i < this.seatArr.length; i++) {
            this.seatArr[i].clearMatchState();
          }
        };
        _proto.farmCountdown = function farmCountdown() {
          if (!(C_Game.instance.timestamp && C_Game.instance.opTime)) {
            return;
          }
          this._doFarmCountdown = true;
          this.doFarmCountdown();
        };
        _proto.doFarmCountdown = /*#__PURE__*/function () {
          var _doFarmCountdown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var date, timer, num, lastTime;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.clock.node.active == false)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (C_Game.instance.opTime) {
                    _context2.next = 5;
                    break;
                  }
                  this.clock.clockBgBn = false;
                  return _context2.abrupt("return");
                case 5:
                  date = new Date();
                  timer = date.getTime();
                  num = Math.floor(timer - C_Game.instance.tempTime);
                  this.clock.clockBgBn = true;
                  lastTime = C_Game.instance.opTime - num; // console.log("倒计时"+lastTime);
                  if (!(lastTime <= 0)) {
                    _context2.next = 16;
                    break;
                  }
                  this.clock.setTime(Math.ceil(lastTime / 1000));
                  this.operate.node.active = false;
                  this.clock.clockBgBn = false;
                  this._doFarmCountdown = false;
                  // if (C_Game.instance.roomStatus == e_room_status_client.TanPai) {
                  //     this.doTanPai();
                  // }
                  return _context2.abrupt("return");
                case 16:
                  this.clock.setTime(Math.ceil(lastTime / 1000));
                  this.scheduleOnce(function () {
                    _this2.doFarmCountdown();
                  }, 0.1);
                // await Sleep(100);
                case 18:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doFarmCountdown() {
            return _doFarmCountdown.apply(this, arguments);
          }
          return doFarmCountdown;
        }();
        _proto.qiangZhuang = function qiangZhuang() {
          console.log("房间状态：" + C_Game.instance.roomStatus);
          this.clock.state = C_Game.instance.roomStatus;
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            for (var i = 0; i < this.seatArr.length; i++) {
              this.seatArr[i].hatBn = this.seatArr[i].seat == C_Game.instance.opSeat;
            }
            // if (C_Game.instance.opSeat == this.mySeat.seat) {
            //     this.operate.node.active = true;
            //     this.operate.type = 0
            // } else {
            //     this.operate.node.active = false;
            // }
            if (C_Game.instance.seat != null) {
              this.getVSeat(C_Game.instance.seat).setRecord(C_Game.instance.scale, 0, C_Game.instance.isGiveUp);
            }
            if (C_Game.instance.qiangZhuangArr) {
              for (var _i2 = 0; _i2 < C_Game.instance.qiangZhuangArr.length; _i2++) {
                var seat = C_Game.instance.qiangZhuangArr[_i2].seat;
                var vSeat = this.getVSeat(seat);
                vSeat.setRecord(C_Game.instance.qiangZhuangArr[_i2].scale, 0, C_Game.instance.isGiveUp);
              }
            }
            // this.farmCountdown();
          }
        };

        _proto.randomZhuang = function randomZhuang() {
          this.clock.node.active = false;
          this.playRandomZhuang();
        };
        _proto.playRandomZhuang = function playRandomZhuang() {
          this.operate.node.active = false;
          var index = C_Game.instance.ramdomZhuangArr.indexOf(C_Game.instance.randomZhuangSeat);
          this.endIndex = index + 2 * C_Game.instance.ramdomZhuangArr.length;
          this.curIndex = 0;
          this.doPlayRadomZhuang();
        };
        _proto.doPlayRadomZhuang = function doPlayRadomZhuang() {
          var _this3 = this;
          var arr = C_Game.instance.ramdomZhuangArr;
          if (this.curIndex < this.endIndex) {
            var seat = arr[this.curIndex % arr.length];
            for (var i = 0; i < this.seatArr.length; i++) {
              if (this.seatArr[i].seat == seat) {
                this.seatArr[i].showChoose();
              } else {
                this.seatArr[i].hideChoose();
              }
            }
            this.curIndex++;
            this._timeOutArr.push(setTimeout(function () {
              _this3.doPlayRadomZhuang();
            }, C_Game.instance.show_zhuang_time));
          } else {
            var _seat = arr[this.curIndex % arr.length];
            var _loop = function _loop(_i3) {
              if (_this3.seatArr[_i3].seat == _seat) {
                _this3.seatArr[_i3].playChooseEffect();
                _this3._timeOutArr.push(setTimeout(function () {
                  coinEffect.instance.createCall(_this3.seatArr[_i3].headPos, C_Game.instance.randomZhuangScale);
                }, C_Game.instance.play_zhuang));
              } else {
                _this3.seatArr[_i3].hideChoose();
              }
            };
            for (var _i3 = 0; _i3 < this.seatArr.length; _i3++) {
              _loop(_i3);
            }
          }
        };
        _proto.clearAllTimeOut = function clearAllTimeOut() {
          if (this._timeOutArr) {
            for (var i = 0; i < this._timeOutArr.length; i++) {
              var id = this._timeOutArr[i];
              clearTimeout(id);
            }
          }
          this._timeOutArr = [];
        };
        _proto.xiazhu = function xiazhu() {
          console.log("房间状态：" + C_Game.instance.roomStatus);
          this.clock.state = C_Game.instance.roomStatus;
          this.clock.node.active = true;
          if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu) {
            this.showZhuang();
            console.log("专家位置：" + C_Game.instance.zhuangSeat);
            console.log("专家叫分：" + C_Game.instance.zhuangScale);
            /**显示专家倍数 */
            // this.getVSeat(C_Game.instance.zhuangSeat).setRecord(C_Game.instance.zhuangScale);
            var vSeat = this.getVSeat(C_Game.instance.zhuangSeat);
            vSeat.hideZhuangCall();
            this.clearFarmRecord();
            for (var i = 0; i < this.seatArr.length; i++) {
              if (this.seatArr[i].player) {
                this.seatArr[i].hatBn = this.seatArr[i].isFrame;
              }
            }
            if (!this.mySeat.isFrame) {
              this.operate.node.active = true;
              this.operate.type = 1;
            } else {
              this.operate.node.active = false;
            }
          }
          this.farmCountdown();
        };
        _proto.qiangZhuangSuss = function qiangZhuangSuss() {
          this.operate.node.active = false;
        };
        _proto.xiaZhuSuss = function xiaZhuSuss() {
          this.operate.node.active = false;
        };
        _proto.xiaZhuAll = function xiaZhuAll(msg) {
          this.getVSeat(msg.op_seat).setRecord(msg.scale * C_Game.instance.score * C_Game.instance.zhuangScale, 1);
        }
        /**清除记录 */;
        _proto.clearFarmRecord = function clearFarmRecord() {
          for (var i = 0; i < this.playerNum; i++) {
            if (!this.seatArr[i].isFrame) {
              this.seatArr[i].clearRecord();
            }
          }
        };
        _proto.resumeTanPai = function resumeTanPai() {
          this.operate.node.active = false;
          this.tanPaiNode.active = false;
          for (var j = 0; j < C_Game.instance.cards.length; j++) {
            var scards = C_Game.instance.cards[j];
            var cardSeat = scards.seat;
            var vSeat = this.getVSeat(cardSeat);
            vSeat.setType(scards.type);
            vSeat.setCards(scards.cards);
            vSeat.cardType = scards.scale;
            vSeat.play();
          }
        };
        _proto.tanPai = function tanPai() {
          this.operate.node.active = false;
          this.clock.node.active = false;
          this.onDealCards();
          this.farmCountdown();
        };
        _proto.processTanPaiIndex = function processTanPaiIndex(index) {
          var _this4 = this;
          if (index < 0) {
            return;
          }
          if (this.seatArr[index].player) {
            for (var j = 0; j < C_Game.instance.cards.length; j++) {
              var scards = C_Game.instance.cards[j];
              var cardSeat = scards.seat;
              if (cardSeat == this.seatArr[index].player.seat) {
                var vSeat = this.getVSeat(cardSeat);
                vSeat.setType(scards.type);
                vSeat.setCards(scards.cards);
                vSeat.cardType = scards.scale;
                // if (vSeat.isMe) {
                //     vSeat.play();
                // }
                vSeat.play();
                this.scheduleOnce(function () {
                  _this4.processTanPaiIndex(index - 1);
                }, 0.5);
                return;
              }
            }
          } else {
            this.processTanPaiIndex(index - 1);
          }
        }
        //播放牛牛特效
        ;

        _proto.playNiuniuEffect = function playNiuniuEffect() {
          var dragonSke = this.niuniuEfect.getComponent(sp.Skeleton);
          dragonSke.node.active = true;
          dragonSke.setCompleteListener(function (event) {
            dragonSke.node.active = false;
          });
        }
        //播放游戏开始特效
        ;

        _proto.playStartEffect = function playStartEffect() {
          var dragonSke = this.startEfect.getComponent(sp.Skeleton);
          dragonSke.node.active = true;
          dragonSke.setCompleteListener(function (event) {
            dragonSke.node.active = false;
          });
        };
        _proto.goStart = function goStart() {
          this.clock.state = C_Game.instance.roomStatus;
          this.clock.node.active = true;
          this.farmCountdown();
        };
        _proto.resetStart = function resetStart() {
          this.clock.state = C_Game.instance.roomStatus;
          this.clock.node.active = true;
          this.unscheduleAllCallbacks();
        };
        _proto.onTanPai = function onTanPai() {
          C_Game.instance.tanpai();
        };
        _proto.doTanPai = function doTanPai() {
          this.tanPaiNode.active = false;
          C_Game.instance.opTime = 0;
          for (var i = 0; i < this.seatArr.length; i++) {
            var vSeat = this.seatArr[i];
            if (!vSeat.isMe) {
              vSeat.play();
            }
          }
        };
        _proto.tanPaiSuss = function tanPaiSuss() {
          this.tanPaiNode.active = false;
        };
        _proto.playerTanPai = function playerTanPai() {
          var seat = C_Game.instance.tanPaiSeat;
          var vSeat = this.getVSeat(seat);
          vSeat.play();
        };
        _proto.gameOver = /*#__PURE__*/function () {
          var _gameOver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var award, arr, i, seat, _i4, _seat2, win_gold, goldChange, res, node, effect, _node, _effect;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  UiMgr.hidePopupView();
                  arr = [];
                  for (i = 0; i < C_Game.instance.awards.length; i++) {
                    award = C_Game.instance.awards[i];
                    if (this.mySeat.seat == C_Game.instance.awards[i].seat) {
                      C_Player.instance.myPlayer.money = award.gold;
                      this._goldChange = award.win_gold;
                      this.seatArr[0].setGold(C_Player.instance.myPlayer.money);
                    }
                    seat = this.getVSeat(C_Game.instance.awards[i].seat);
                    if (!this.getVSeat(C_Game.instance.awards[i].seat).isFrame) {
                      seat.setRecord(C_Game.instance.awards[i].user_scale * C_Game.instance.score, 1);
                    }
                    seat.goldChange = award.win_gold;
                    if (!seat.isFrame) {
                      arr.push([seat, award.win_gold]);
                    } else {
                      arr.unshift([seat, award.win_gold]);
                    }
                  }
                  for (_i4 = 1; _i4 < arr.length; _i4++) {
                    _seat2 = arr[_i4][0];
                    win_gold = arr[_i4][1];
                    if (Number(win_gold) > 0) {
                      coinEffect.instance.create(arr[0][0].headPos, _seat2.headPos);
                    } else {
                      coinEffect.instance.create(_seat2.headPos, arr[0][0].headPos);
                    }
                  }
                  this.result.removeAllChildren();
                  goldChange = this._goldChange;
                  res = goldChange > 0;
                  if (!res) {
                    _context3.next = 17;
                    break;
                  }
                  _context3.next = 10;
                  return AnimManager.createAnimNode(AnimUrl.win, 1, false);
                case 10:
                  node = _context3.sent;
                  effect = node.getComponent(Animation);
                  node.parent = this.result;
                  node.active = true;
                  effect.play("anim_desk");
                  _context3.next = 24;
                  break;
                case 17:
                  _context3.next = 19;
                  return AnimManager.createAnimNode(AnimUrl.lose, 1, false);
                case 19:
                  _node = _context3.sent;
                  _effect = _node.getComponent(Animation);
                  _node.parent = this.result;
                  _node.active = true;
                  _effect.play("anim_desk");
                case 24:
                  tgx.AudioMgr.inst.audio.playEffect(Aclip.gold, ModuleDef.POKER_NIUNIU);
                  this._GameOverWait = 1000;
                case 26:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function gameOver() {
            return _gameOver.apply(this, arguments);
          }
          return gameOver;
        }();
        _proto.doGameOverWait = function doGameOverWait() {
          var date = new Date();
          var timer = date.getTime();
          var num = Math.floor(timer - C_Game.instance.tempTime);
          if (num > this._GameOverWait) {
            this._GameOverWait = 0;
            this.showGameOver();
          }
        };
        _proto.showGameOver = function showGameOver() {
          var _this5 = this;
          UiMgr.showTipsView(uiPanel.GAMEOVER, function (node) {
            var goldChange = _this5._goldChange;
            var res = goldChange > 0;
            node.getComponent(V_GameOver).init(res, goldChange);
          });
        }
        /**显示庄家 */;
        _proto.showZhuang = function showZhuang() {
          for (var i = 0; i < this.seatArr.length; i++) {
            this.seatArr[i].bindFarm();
            if (this.seatArr[i].isFrame) {
              //是庄家
              this.seatArr[i].count = C_Game.instance.zhuangScale;
              this.callNum = C_Game.instance.zhuangScale + "X";
            }
          }
        };
        _proto.getVSeat = function getVSeat(seat) {
          for (var i = 0; i < this.seatArr.length; i++) {
            if (this.seatArr[i].seat == seat) {
              return this.seatArr[i];
            }
          }
          return null;
        };
        _proto.onClose = function onClose(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_NIUNIU);
          C_Game.instance.leave();
        };
        _proto.onRule = function onRule(e) {
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_NIUNIU);
          UiMgr.showPopupView(uiPanel.RULE);
        };
        _proto.onSet = function onSet(e) {
          // UiMgr.showPopupView(uiPanel.SETTING)
        };
        _proto.onBtn0 = function onBtn0(e) {
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            C_Game.instance.qiangzhuang(0);
          }
          if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu && C_Game.instance.betList && C_Game.instance.betList.length > 0) {
            this.tempScale = C_Game.instance.betList[0];
            C_Game.instance.xiazhu(C_Game.instance.betList[0]);
          }
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_NIUNIU);
        };
        _proto.onBtn1 = function onBtn1(e) {
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            C_Game.instance.qiangzhuang(C_Game.instance.zhuangList[0]);
          }
          if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu && C_Game.instance.betList && C_Game.instance.betList.length > 1) {
            this.tempScale = C_Game.instance.betList[1];
            C_Game.instance.xiazhu(C_Game.instance.betList[1]);
          }
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_NIUNIU);
        };
        _proto.onBtn2 = function onBtn2(e) {
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            C_Game.instance.qiangzhuang(C_Game.instance.zhuangList[1]);
          }
          if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu && C_Game.instance.betList && C_Game.instance.betList.length > 2) {
            this.tempScale = C_Game.instance.betList[2];
            C_Game.instance.xiazhu(C_Game.instance.betList[2]);
          }
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_NIUNIU);
        };
        _proto.onBtn3 = function onBtn3(e) {
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            C_Game.instance.qiangzhuang(C_Game.instance.zhuangList[2]);
          }
          if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu && C_Game.instance.betList && C_Game.instance.betList.length > 3) {
            this.tempScale = C_Game.instance.betList[3];
            C_Game.instance.xiazhu(C_Game.instance.betList[3]);
          }
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_NIUNIU);
        };
        _proto.onBtn4 = function onBtn4(e) {
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            C_Game.instance.qiangzhuang(C_Game.instance.zhuangList[3]);
          }
          if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu && C_Game.instance.betList && C_Game.instance.betList.length > 4) {
            this.tempScale = C_Game.instance.betList[4];
            C_Game.instance.xiazhu(C_Game.instance.betList[4]);
          }
          tgx.AudioMgr.inst.audio.playEffect(Aclip.click, ModuleDef.POKER_NIUNIU);
        };
        _proto.onBtn5 = function onBtn5(e) {
          if (C_Game.instance.roomStatus == e_room_status_client.QiangZhuang) {
            C_Game.instance.qiangzhuang(C_Game.instance.zhuangList[4]);
          }
          if (C_Game.instance.roomStatus == e_room_status_client.XiaZhu && C_Game.instance.betList && C_Game.instance.betList.length > 5) {
            this.tempScale = C_Game.instance.betList[5];
            C_Game.instance.xiazhu(C_Game.instance.betList[5]);
          }
        };
        _proto.onReady = function onReady(e) {
          PokerManager.inst.onReady();
        }
        //发牌
        ;

        _proto.onDealCards = function onDealCards() {
          var _this6 = this;
          this.cardPool.removeAllChildren();
          var renShu = PokerManager.inst.roomData.userList.length;
          for (var _i5 = 0; _i5 < 5 * renShu; _i5++) {
            var card = instantiate(this.cardPrefab);
            card.setParent(this.cardPool);
            card.setPosition(0, 0);
            card.active = true;
          }
          //分牌
          var i = this.cardPool.children.length - 1;
          var intervalId = setInterval(function () {
            var card = _this6.cardPool.children[i];
            var vSeat = _this6.seatArr[i % renShu];
            var toNode = _this6.seatArr[i % renShu].cards;
            var isSelf = vSeat.isMe;
            var newVec2 = toNode.getWorldPosition();
            var vec2 = _this6.cardPool.getComponent(UITransform).convertToNodeSpaceAR(newVec2);
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
              _this6.onToTanPai();
            }
          }, 10);
        };
        _proto.onToTanPai = function onToTanPai() {
          for (var i = 0; i < this.playerNum; i++) {
            this.seatArr[i].showCards();
          }
          //按顺序摊牌 todo
          this.processTanPaiIndex(this.seatArr.length - 1);
        };
        _createClass(V_Game, [{
          key: "mySeat",
          get:
          //准备按钮
          function get() {
            if (this.seatArr && this.seatArr.length > 0) {
              return this.seatArr[0];
            }
            return null;
          }
        }, {
          key: "preSeat",
          get: function get() {
            if (this.seatArr && this.seatArr.length > 0) {
              return this.seatArr[this.playerNum - 1];
            }
            return null;
          }
        }, {
          key: "score",
          set: function set(num) {
            if (!this._txtScore) {
              this._txtScore = this.node.getChildByName("score").getChildByName("txtScore").getComponent(Label);
            }
            this._txtScore.string = LanguageData.getLangByID("niuniu_11", num);
          }
        }, {
          key: "callNum",
          set: function set(str) {
            if (!this._txtCall) {
              this._txtCall = this.node.getChildByName("score").getChildByName("call").getComponent(Label);
            }
            if (str == "") {
              this._txtCall.string = "";
            } else {
              this._txtCall.string = LanguageData.getLangByID("niuniu_12", str);
            }
          }
        }]);
        return V_Game;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tanPaiNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ping", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "call", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "coinEffect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "niuniuEfect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "startEfect", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cardPool", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "readyBtn", [_dec12], {
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

System.register("chunks:///_virtual/V_GameOver2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Game2.ts', './ResourceMgr.ts', './ModuleDef.ts', './AudioMgr.ts', './define3.ts', './uiMgr3.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Sprite, Label, sp, Component, Font, isValid, C_Game, ResourceMgr, ModuleDef, AudioMgr, Aclip, UiMgr, SubGameMgr, SubGameDef;
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
      sp = module.sp;
      Component = module.Component;
      Font = module.Font;
      isValid = module.isValid;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      UiMgr = module.UiMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "bf66fGEFKRNXqUZrzFPK3kU", "V_GameOver", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_GameOver = exports('V_GameOver', (_dec = ccclass('VGameOver'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_GameOver, _Component);
        function V_GameOver() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "failbg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txtGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultEffect", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_GameOver.prototype;
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res, goldStr) {
            var _this2 = this;
            var fontUrl;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.resultEffect.active = false;
                  if (res) {
                    AudioMgr.inst.playOneShot(Aclip.win, 1, ModuleDef.POKER_NIUNIU);
                    fontUrl = "font/success/successFont";
                    ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, fontUrl, Font, function (err, font) {
                      if (err || !isValid(_this2)) {
                        return;
                      }
                      _this2.txtGold.font = font;
                      _this2.txtGold.string = "+" + goldStr;
                    });
                    // this.failbg.active = false;
                  } else {
                    AudioMgr.inst.playOneShot(Aclip.lose, 1, ModuleDef.POKER_NIUNIU);
                    fontUrl = "font/fail/failFont";
                    ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, fontUrl, Font, function (err, font) {
                      if (err || !isValid(_this2)) {
                        return;
                      }
                      _this2.txtGold.font = font;
                      _this2.txtGold.string = "" + goldStr;
                    });
                    // this.bg.active = false;
                  }

                  this.playResultEffect(res);
                  if (C_Game.instance.autoMatch) {
                    //开启了自动匹配
                    this.scheduleOnce(function () {
                      _this2.onRestart();
                    }, 3);
                  }
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x, _x2) {
            return _init.apply(this, arguments);
          }
          return init;
        }() //播放胜利失败动画
        ;

        _proto.playResultEffect = function playResultEffect(result) {
          var dragonSke = this.resultEffect.getComponent(sp.Skeleton);
          dragonSke.node.active = true;
          if (result) {
            dragonSke.setAnimation(0, "Victory", false);
          } else {
            dragonSke.setAnimation(0, "Defeat", false);
          }

          // dragonSke.setCompleteListener((event) => {
          // dragonSke.node.active = false;
          // });
        };

        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
        };
        _proto.onClose = function onClose() {
          UiMgr.closePanel(this);
        };
        _proto.onOut = function onOut() {
          C_Game.instance.leave();
        };
        _proto.onRestart = /*#__PURE__*/function () {
          var _onRestart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var matchGameAgainRet;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.unscheduleAllCallbacks();
                  //重新匹配
                  _context2.next = 3;
                  return SubGameMgr.inst.MatchGameAgain(SubGameDef.POKER_NIUNIU, SubGameMgr.gameMgr.subType);
                case 3:
                  matchGameAgainRet = _context2.sent;
                  if (matchGameAgainRet.isSucc) {
                    UiMgr.closePanel(this);
                  }
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onRestart() {
            return _onRestart.apply(this, arguments);
          }
          return onRestart;
        }();
        return V_GameOver;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "failbg", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resultEffect", [_dec5], {
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

System.register("chunks:///_virtual/V_Operate2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Game2.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Button, Label, Component, C_Game, LanguageData;
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
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "aa11anG9dFKZarLAirQI3i+", "V_Operate", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Operate = exports('V_Operate', (_dec = property(Node), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Operate, _Component);
        function V_Operate() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_operate1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_operate2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn0", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn4", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn5", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBet0", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBet1", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBet2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBet3", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBet4", _descriptor13, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = V_Operate.prototype;
        _proto.getBtn = function getBtn(i) {
          return this.node_operate1.getChildByName("btn" + i);
        };
        _proto.getBetBtn = function getBetBtn(i) {
          return this.node_operate2.getChildByName("operateBetBtn" + i);
        };
        _createClass(V_Operate, [{
          key: "type",
          set: /**type 0叫庄，1下注，2摊牌 */
          function set(num) {
            if (num == 0) {
              this.node_operate1.active = true;
              this.node_operate2.active = false;
            } else {
              this.node_operate1.active = false;
              this.node_operate2.active = true;
            }
            if (num == 0) {
              this.btn0.node.getChildByName("Label").getComponent(Label).string = LanguageData.getLangByID("niuniu_10");
              if (C_Game.instance.zhuangList) {
                var zhuangList = C_Game.instance.zhuangList;
                for (var i = 1; i <= 5; i++) {
                  var btnNode = this.getBtn(i);
                  if (i <= zhuangList.length) {
                    btnNode.active = true;
                    var label = btnNode.getChildByName("Label").getComponent(Label);
                    label.string = zhuangList[i - 1] + "X";
                  } else {
                    btnNode.active = false;
                  }
                }
              }
            }
            if (num == 1) {
              if (C_Game.instance.betList) {
                var betList = C_Game.instance.betList;
                for (var _i = 0; _i <= 4; _i++) {
                  var _btnNode = this.getBetBtn(_i);
                  if (_i < betList.length) {
                    var _label = _btnNode.getChildByName("Label").getComponent(Label);
                    _label.string = betList[_i] + "";
                    _btnNode.active = true;
                  } else {
                    _btnNode.active = false;
                  }
                }
              }
            }
          }
        }]);
        return V_Operate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_operate1", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_operate2", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btn4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn5", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnBet0", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnBet1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnBet2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnBet3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnBet4", [_dec13], {
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

System.register("chunks:///_virtual/V_Rule2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './uiMgr3.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, UiMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UiMgr = module.UiMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "51744ozC5JPy6YplFukrc7z", "V_Rule", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var V_Rule = exports('V_Rule', (_dec = ccclass('V_Rule'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Rule, _Component);
        function V_Rule() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = V_Rule.prototype;
        _proto.btn_close = function btn_close() {
          UiMgr.closePanel(this);
        };
        return V_Rule;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/V_Seat2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './C_Player2.ts', './C_Game2.ts', './card.ts', './ResourceMgr.ts', './ModuleDef.ts', './uiMgr3.ts', './animManager2.ts', './define3.ts', './AudioMgr.ts', './GameMain2.ts', './Message2.ts', './UserMgr.ts', './RoomMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Label, Node, tween, SpriteFrame, isValid, Font, Vec3, Component, Animation, C_Player, C_Game, e_card_score, ResourceMgr, ModuleDef, UiMgr, AnimManager, AnimUrl, Aclip, AudioMgr, GameMain, Message, UserMgr, RoomMgr;
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
      Label = module.Label;
      Node = module.Node;
      tween = module.tween;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
      Font = module.Font;
      Vec3 = module.Vec3;
      Component = module.Component;
      Animation = module.Animation;
    }, function (module) {
      C_Player = module.C_Player;
    }, function (module) {
      C_Game = module.C_Game;
    }, function (module) {
      e_card_score = module.e_card_score;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      UiMgr = module.UiMgr;
    }, function (module) {
      AnimManager = module.AnimManager;
      AnimUrl = module.AnimUrl;
    }, function (module) {
      Aclip = module.Aclip;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "d00dbjexbJCcaWZ8t56ylEO", "V_Seat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // // 牌色
      var e_card_color = exports('e_card_color', {
        rect: 1,
        flower: 2,
        red: 3,
        black: 4,
        kings: 5,
        kingb: 6
      });
      var V_Seat = exports('V_Seat', (_dec = ccclass('VSeat'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Node), _dec11 = property(Sprite), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(V_Seat, _Component);
        function V_Seat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "man", _descriptor, _assertThisInitialized(_this));
          // 头像
          _initializerDefineProperty(_this, "farm", _descriptor2, _assertThisInitialized(_this));
          // 地主图标
          _initializerDefineProperty(_this, "nickname", _descriptor3, _assertThisInitialized(_this));
          // 昵称
          _initializerDefineProperty(_this, "gold", _descriptor4, _assertThisInitialized(_this));
          // 金币
          _initializerDefineProperty(_this, "cards", _descriptor5, _assertThisInitialized(_this));
          // 牌区 
          _initializerDefineProperty(_this, "record", _descriptor6, _assertThisInitialized(_this));
          // 叫分记录
          _initializerDefineProperty(_this, "type", _descriptor7, _assertThisInitialized(_this));
          // 牌型
          _initializerDefineProperty(_this, "typeBg", _descriptor8, _assertThisInitialized(_this));
          // 牌型背景
          _initializerDefineProperty(_this, "coin", _descriptor9, _assertThisInitialized(_this));
          // 金币
          _initializerDefineProperty(_this, "head", _descriptor10, _assertThisInitialized(_this));
          // 头像
          _initializerDefineProperty(_this, "choose", _descriptor11, _assertThisInitialized(_this));
          // 选中框
          _this.cardArr = [];
          _this.cardDataArr = [];
          _this.serverCardDataArr = [];
          _this._player = null;
          _this.seat = 0;
          _this._index = 0;
          _initializerDefineProperty(_this, "ready", _descriptor12, _assertThisInitialized(_this));
          //已准备
          _this._isReady = void 0;
          _initializerDefineProperty(_this, "multipleNode", _descriptor13, _assertThisInitialized(_this));
          _this.playBn = false;
          _this._playTime = 0;
          _this._tempTime = 0;
          _this._playIndex = 0;
          _this.playServer = 0;
          _this.posxArr = [];
          _this._played = false;
          _this._noNode = null;
          _this._callNode = null;
          _this._callLabel = null;
          _this._type = 0;
          _this._hatNode = null;
          _this._goldChangeLabel = null;
          _this.sPosY = 55;
          _this.ePosY = 90;
          _this.moveStep = 1;
          _this.goldPlayBn = false;
          _this.niuArr = [Aclip.niu0, Aclip.niu1, Aclip.niu2, Aclip.niu3, Aclip.niu4, Aclip.niu5, Aclip.niu6, Aclip.niu7, Aclip.niu8, Aclip.niu9, Aclip.niu10, Aclip.niu11, Aclip.niu12, Aclip.niu13, Aclip.niu14];
          return _this;
        }
        var _proto = V_Seat.prototype;
        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
        };
        _proto.bind = function bind(player) {
          this._player = player;
          if (this._player == null) {
            return;
          }
          this.nickname.string = player.nickname;
          var roomPlayerData = RoomMgr.inst.getPlayData(player.uid);
          if (roomPlayerData) {
            UserMgr.inst.loadHeadIcon(roomPlayerData.visualId, this.man);
          }
          this.hideReadyState();
          this.setGold(this._player.money);
          // UiMgr.loadPic(this.man, url);
        };

        _proto.setNickName = function setNickName(str) {
          this.nickname.string = str;
        };
        _proto.setGold = function setGold(num) {
          if (this.gold) {
            this.gold.string = Math.floor(num * 100) / 100 + "";
          }
        };
        _proto.update = function update(dt) {
          if (this.playBn) {
            var date = new Date();
            var time = date.getTime();
            if (time - this._tempTime >= this._playTime) {
              this.playAll();
              this.playType();
              this.playBn = false;
              if (this._type > 0) {
                date = new Date();
                this._tempTime = date.getTime();
                this.playServer = 2000;
              }
              if (this.isMe) {
                //如果是牛牛的话 播放特效
                if (this._type >= 10) {
                  GameMain.evt.emit(Message.showNiuNiuEffect);
                }
              }

              // if (this.isMe) {
              //     date = new Date();
              //     this._tempTime = date.getTime();
              //     this._playTime = 1000;
              //     this.playOne(this._playIndex);
              //     if (this._playIndex == 3) {
              //         this._playIndex = 4;
              //     } else {
              //         this.playType();
              //         this.playBn = false;
              //         if (this._type > 0) {
              //             date = new Date();
              //             this._tempTime = date.getTime();
              //             this.playServer = 2000;
              //         }
              //         //如果是牛牛的话 播放特效
              //         if(this._type >= 10)
              //         {
              //             GameMain.evt.emit(Message.showNiuNiuEffect);
              //         }

              //     }
              // } else {
              //     this.playAll();
              //     this.playType();
              //     this.playBn = false;
              //     if (this._type > 0) {
              //         date = new Date();
              //         this._tempTime = date.getTime();
              //         this.playServer = 2000;
              //     }
              // }
            }
          }
          // if (this.goldPlayBn) {
          //     if (this.goldChangeLabel.node.y > this.ePosY) {
          //         this.goldChangeLabel.string = "";
          //         this.goldPlayBn = false;
          //     }
          //     this.goldChangeLabel.node.y += this.moveStep;
          //     this.goldChangeLabel.node.opacity -= 5;
          // }
          // if (this.playServer > 0) {
          //     let date: Date = new Date();
          //     let time: number = date.getTime();
          //     if ((time - this._tempTime) >= this.playServer) {
          //         this.playServer = 0;
          //         this.playServerCards();
          //     }
          // }
        };

        _proto.init = function init() {
          this._player = null;
          this.nickname.string = "";
          this.farm.node.active = false;
          this.cardArr = [];
          if (!this.posxArr) {
            this.posxArr = [];
          }
          for (var i = 0; i < 5; i++) {
            this.cardArr.push(this.cards.getChildByName("c" + i).getComponent(Sprite));
            if (this.posxArr.length == 5) {
              this.cardArr[i].node.x = this.posxArr[i];
            } else {
              this.posxArr.push(this.cardArr[i].node.x);
            }
            this.bindCard(this.cardArr[i], null);
          }
          this.hideCards();
          this.record.active = false;
          this.goldChangeLabel.string = "";
          // this.cardTypeLabel.string = "";
          this.multipleNode.active = false;
          this.hideType();
        };
        _proto.hideCards = function hideCards() {
          this.cards.active = false;
        };
        _proto.showCards = function showCards() {
          this.cards.active = true;
        }
        /**绑定牌型 */;
        _proto.setCards = function setCards(cards) {
          if (cards === void 0) {
            cards = [];
          }
          this.showCards();
          if (this._type > 0) {
            this.serverCardDataArr = cards;
            this.cardDataArr = this.randomCardArr(cards);
          } else {
            this.cardDataArr = cards;
          }
          for (var i = 0; i < this.cardDataArr.length; i++) {
            console.log("---------" + this.cardDataArr[i]);
          }
          if (this.cardArr && this.cardDataArr && this.cardDataArr.length > 0) {
            if (C_Game.instance.historyBn) {
              this.playAll();
              this.playType();
            } else {
              // if (this.isMe) {
              //     this.playThree();
              //     this._playIndex = 3;
              //     // if (this.isFrame) {
              //     //     this._playTime = 3000;
              //     // } else {
              //     this._playTime = 2000;
              //     // }
              // } else {
              //     // if (this.isFrame) {
              //     //     this._playTime = 3000;
              //     // } else {
              //     this._playTime = 500;
              //     // }
              // }
              this._playTime = 300;
            }
            this._played = false;
          } else {
            for (var _i = 0; _i < this.cardArr.length; _i++) {
              this.bindCard(this.cardArr[_i]);
            }
          }
        };
        _proto.play = function play() {
          if (this._played) {
            return;
          }
          var date = new Date();
          this._tempTime = date.getTime();
          this.playBn = true;
          this._played = true;
        };
        _proto.playServerCards = /*#__PURE__*/function () {
          var _playServerCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var _loop, i;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                    return _regeneratorRuntime().wrap(function _loop$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (i < _this2.serverCardDataArr.length) {
                            _this2.bindCard(_this2.cardArr[i], _this2.serverCardDataArr[i]);
                          } else {
                            _this2.bindCard(_this2.cardArr[i]);
                          }
                          tween(_this2.cardArr[i].node).to(0.2, {
                            scale_x: 0.1
                          }, {}).call(function () {
                            tween(_this2.cardArr[i].node).to(0.2, {
                              scale_x: 1
                            }, {}).call(function () {}).start();
                          }).start();
                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 2:
                  if (!(i < 5)) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.delegateYield(_loop(i), "t0", 4);
                case 4:
                  i++;
                  _context2.next = 2;
                  break;
                case 7:
                  if (this.index == 1 || this.index == 2 || this.index == 3) {
                    this.cardArr[0].node.x -= 30;
                    this.cardArr[1].node.x -= 30;
                    this.cardArr[2].node.x -= 30;
                  } else {
                    this.cardArr[3].node.x += 30;
                    this.cardArr[4].node.x += 30;
                  }
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this);
          }));
          function playServerCards() {
            return _playServerCards.apply(this, arguments);
          }
          return playServerCards;
        }();
        _proto.randomCardArr = function randomCardArr(cards) {
          var arr = [];
          var randomArr = this.randomNum();
          for (var i = 0; i < randomArr.length; i++) {
            arr.push(cards[randomArr[i]]);
          }
          return arr;
        };
        _proto.randomNum = function randomNum() {
          var arr = [0, 1, 2, 3, 4];
          var temp = [];
          for (var i = arr.length - 1; i >= 0; i--) {
            var num = Math.floor((i + 1) * Math.random());
            temp.push(arr.splice(num, 1)[0]);
          }
          return temp;
        };
        _proto.playThree = function playThree() {
          for (var i = 0; i < 3; i++) {
            if (i < this.cardDataArr.length) {
              this.bindCard(this.cardArr[i], this.cardDataArr[i]);
            } else {
              this.bindCard(this.cardArr[i]);
            }
          }
        };
        _proto.playOne = function playOne(i) {
          var _this3 = this;
          this.bindCard(this.cardArr[i], this.cardDataArr[i]);
          tween(this.cardArr[i].node).to(0.2, {
            scale_x: 0.1
          }, {}).call(function () {
            tween(_this3.cardArr[i].node).to(0.2, {
              scale_x: 1
            }, {}).call(function () {}).start();
          }).start();
        };
        _proto.playAll = function playAll() {
          var _this4 = this;
          var _loop2 = function _loop2(i) {
            if (i < _this4.cardDataArr.length) {
              _this4.bindCard(_this4.cardArr[i], _this4.cardDataArr[i]);
            } else {
              _this4.bindCard(_this4.cardArr[i]);
            }
            tween(_this4.cardArr[i].node).to(0.2, {
              scale_x: 0.1
            }, {}).call(function () {
              tween(_this4.cardArr[i].node).to(0.2, {
                scale_x: 1
              }, {}).call(function () {}).start();
            }).start();
          };
          for (var i = 0; i < 5; i++) {
            _loop2(i);
          }
        };
        _proto.bindCard = function bindCard(sp, info) {
          var _this5 = this;
          if (info === void 0) {
            info = null;
          }
          var url = "";
          var _sp = sp;
          if (info) {
            var color = info.color;
            var score = info.score;
            url = score === e_card_score.little_king || score === e_card_score.big_king ? "images/poker_" + score : "images/poker_" + color + "_" + score;
          } else {
            url = "images/poker_back";
          }
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, url + "/spriteFrame", SpriteFrame, function (err, img) {
            if (err || !isValid(_this5)) {
              return;
            }
            _sp.spriteFrame = img;
          });
        };
        _proto.hideZhuangCall = function hideZhuangCall() {
          this.noNode.active = false;
          this.callNode.active = false;
        };
        _proto.setRecord = function setRecord(num, type, isGiveUp) {
          if (type === void 0) {
            type = 0;
          }
          if (isGiveUp === void 0) {
            isGiveUp = false;
          }
          this.record.active = true;
          var noBn = isGiveUp;
          this.noNode.active = noBn;
          if (!noBn) {
            if (type == 0) {
              this.callLabel.string = num + "X";
              this.callLabel.node.active = true;
              this.multipleNode.active = false;
            } else {
              this.count = num;
              this.callLabel.node.active = false;
            }
          } else {
            this.callLabel.node.active = false;
            this.multipleNode.active = false;
          }
        };
        _proto.bindFarm = function bindFarm() {
          this.farm.node.active = C_Game.instance.zhuangSeat == this.seat;
        };
        _proto.clearRecord = function clearRecord() {
          this.record.active = false;
        };
        _proto.setType = function setType(num) {
          this._type = num;
        };
        _proto.playType = /*#__PURE__*/function () {
          var _playType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.showType();
                  if (this._type == 0) {
                    //没牛
                    UiMgr.loadPic(this.typeBg, "images/game/Prepare_page_BG11");
                  } else if (this._type <= 10) {
                    //牛牛
                    UiMgr.loadPic(this.typeBg, "images/game/Prepare_page_BG09");
                  } else {
                    //普通牛
                    UiMgr.loadPic(this.typeBg, "images/game/Prepare_page_BG10");
                  }
                  UiMgr.loadPic(this.type, "images/type/type_" + this._type);
                  // this.type.node.removeAllChildren();
                  // let node: Node = await AnimManager.createAnimNode(AnimUrl.type + this._type, 1, false)
                  // let effect:Animation = node.getComponent(Animation)
                  // node.parent = this.type.node;
                  // node.active = true;
                  // let state = effect.play("anim_desk");
                  // state.speed = 0.1;
                  this.bindCardType();
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee2, this);
          }));
          function playType() {
            return _playType.apply(this, arguments);
          }
          return playType;
        }();
        _proto.showType = function showType() {
          this.type.node.parent.active = true;
        };
        _proto.hideType = function hideType() {
          this.type.node.parent.active = false;
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
            var _this6 = this;
            var node, effect;
            return _regeneratorRuntime().wrap(function _callee3$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.showChoose();
                  this.choose.removeAllChildren();
                  _context4.next = 4;
                  return AnimManager.createAnimNode(AnimUrl.choose, 1, true);
                case 4:
                  node = _context4.sent;
                  node.scale = new Vec3(0.5, 0.5);
                  effect = node.getComponent(Animation);
                  node.parent = this.choose;
                  node.active = true;
                  effect.play("anim_desk");
                  this.scheduleOnce(function () {
                    _this6.hideChoose();
                  }, C_Game.instance.play_zhuang / 1000);
                case 11:
                case "end":
                  return _context4.stop();
              }
            }, _callee3, this);
          }));
          function playChooseEffect() {
            return _playChooseEffect.apply(this, arguments);
          }
          return playChooseEffect;
        }();
        _proto.bindCardType = /*#__PURE__*/function () {
          var _bindCardType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this7 = this;
            return _regeneratorRuntime().wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this.scheduleOnce(function () {
                    if (_this7.isMe) {
                      AudioMgr.inst.playOneShot(_this7.niuArr[_this7._type], 1, ModuleDef.POKER_NIUNIU);
                    }
                  }, 1);
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee4, this);
          }));
          function bindCardType() {
            return _bindCardType.apply(this, arguments);
          }
          return bindCardType;
        }();
        _proto.showReadyState = function showReadyState() {
          this.ready.active = true;
        };
        _proto.hideReadyState = function hideReadyState() {
          this.ready.active = false;
        };
        _proto.clearMatchState = function clearMatchState() {
          this.hideReadyState();
        };
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
          key: "noNode",
          get: function get() {
            if (!this._noNode) {
              this._noNode = this.record.getChildByName("no");
            }
            return this._noNode;
          }
        }, {
          key: "callNode",
          get: function get() {
            if (!this._callNode) {
              this._callNode = this.record.getChildByName("call");
            }
            return this._callNode;
          }
        }, {
          key: "callLabel",
          get: function get() {
            if (!this._callLabel) {
              this._callLabel = this.record.getChildByName("call").getComponent(Label);
            }
            return this._callLabel;
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
            // this.hatNode.active = bn;
            // this.hatNode.active =false;
          }
        }, {
          key: "goldChangeLabel",
          get: function get() {
            if (!this._goldChangeLabel) {
              this._goldChangeLabel = this.node.getChildByName("meInfo").getChildByName("goldChange").getComponent(Label);
            }
            return this._goldChangeLabel;
          }
        }, {
          key: "goldChange",
          set: function set(num) {
            var _this8 = this;
            var url;
            if (num > 0) {
              url = "font/success/successFont";
              ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, url, Font, function (err, font) {
                if (err || !isValid(_this8)) {
                  return;
                }
                _this8.goldChangeLabel.font = font;
                _this8.goldChangeLabel.string = "+" + num;
              });
            } else {
              url = "font/fail/failFont";
              ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_NIUNIU, url, Font, function (err, font) {
                if (err || !isValid(_this8)) {
                  return;
                }
                _this8.goldChangeLabel.font = font;
                _this8.goldChangeLabel.string = "" + num;
              });
            }
            // this.goldChangeLabel.node.opacity = 255;
            // if (C_Game.instance.historyBn) {
            //     this.goldChangeLabel.node.y = this.ePosY;
            //     this.goldPlayBn = false;
            // } else {
            //     this.goldChangeLabel.node.y = this.sPosY;
            //     this.goldPlayBn = true;
            // }
          }
          // private _cardTypeLabel: Label = null!;
          // public get cardTypeLabel(): Label {
          //     if (!this._cardTypeLabel) {
          //     this._cardTypeLabel = ((this.node.getChildByName("typeNode") as Node).getChildByName("cardType") as Node).getComponent(Label) as Label;
          //     }
          //     return this._cardTypeLabel;
          // }
          // private _cardType: number=0;
        }, {
          key: "cardType",
          set: function set(num) {
            // this._cardType = num;
          }
        }, {
          key: "count",
          set: function set(num) {
            this.multipleNode.active = true;
            //判断是不是庄家
            this.multipleNode.getChildByName("multipleBg2").active = false;
            this.multipleNode.getChildByName("multipleBg1").active = false;
            this.multipleNode.getChildByName("Label1").active = false;
            this.multipleNode.getChildByName("Label2").active = false;
            var bgNode;
            var labelNode;
            if (C_Game.instance.zhuangSeat == this.seat) {
              bgNode = this.multipleNode.getChildByName("multipleBg2");
              labelNode = this.multipleNode.getChildByName("Label2");
            } else {
              bgNode = this.multipleNode.getChildByName("multipleBg1");
              labelNode = this.multipleNode.getChildByName("Label1");
            }
            bgNode.active = true;
            labelNode.active = true;
            labelNode.getComponent(Label).string = num + "X";
          }
        }, {
          key: "headPos",
          get: function get() {
            var meInfo = this.node.getChildByName("headPrefab");
            var pos = new Vec3();
            pos.x = this.node.x + meInfo.x;
            pos.y = this.node.y + meInfo.y;
            return pos;
          }

          //    /**是否准备 true：准备 false：取消准备*/
        }, {
          key: "isReady",
          get: function get() {
            return this._isReady;
          },
          set: function set(bn) {
            this._isReady = bn;
            //_isReady true:取消准备 false：准备
            // if(bn){
            //     this.showReadyState();
            // }else{
            //     this.hideReadyState();
            // }
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "farm", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nickname", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec5], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "record", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "typeBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "choose", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "ready", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "multipleNode", [_dec14], {
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

(function(r) {
  r('virtual:///prerequisite-imports/module_poker_niuniu', 'chunks:///_virtual/module_poker_niuniu'); 
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