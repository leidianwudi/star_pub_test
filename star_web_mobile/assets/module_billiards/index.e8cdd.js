System.register("chunks:///_virtual/AudioPlayer.ts", ['cc', './ModuleDef.ts'], function (exports) {
  var cclegacy, ModuleDef;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f38ftaf7VAoKxMHygl0tll", "AudioPlayer", undefined);
      var AudioPlayer = exports('AudioPlayer', /*#__PURE__*/function () {
        function AudioPlayer() {}
        AudioPlayer.playOneShot = function playOneShot(sound, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }
          tgx.AudioMgr.inst.playOneShot(sound, volume, ModuleDef.BILLIARDS);
        };
        AudioPlayer.play = function play(sound, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }
          tgx.AudioMgr.inst.play(sound, volume, ModuleDef.BILLIARDS);
        };
        AudioPlayer.stop = function stop() {
          tgx.AudioMgr.inst.stop();
        };
        AudioPlayer.pause = function pause() {
          tgx.AudioMgr.inst.pause();
        };
        return AudioPlayer;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BallCollision.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, Collider, RigidBody, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Collider = module.Collider;
      RigidBody = module.RigidBody;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "22421B5BOZP34cyF50mHnVi", "BallCollision", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tmp_V1 = v3();
      var tmp_V2 = v3();
      var BallCollision = exports('BallCollision', (_dec = ccclass('BallCollision'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BallCollision, _Component);
        function BallCollision() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BallCollision.prototype;
        _proto.start = function start() {
          this.getComponent(Collider).on("onCollisionEnter", this.onCollisionEnter);
        };
        _proto.onCollisionEnter = function onCollisionEnter(event) {
          var name = event.otherCollider.node.name;
          if (name == 'TablePlane' || name == 'table_side' || name == 'table') {
            return;
          }
          event.selfCollider.node.getComponent(RigidBody).getLinearVelocity(tmp_V1);
          event.otherCollider.node.getComponent(RigidBody).getLinearVelocity(tmp_V2);
          var max = tmp_V1.length() + tmp_V2.length();
          if (max > BallCollision.collideWithBalls) {
            BallCollision.collideWithBalls = max;
          }
        };
        return BallCollision;
      }(Component), _class2.collideWithBalls = 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BallUVSetter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, MeshRenderer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "fd564k5LIpGa4bP2/uZ8c2P", "BallUVSetter", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var atlasWith = 512;
      var altasHeight = 512;
      var paddingLeft = 10;
      var paddingTop = 10;
      var gap = 4;
      var texWidth = 120;
      var texHeight = 60;
      var maxCols = 3;
      var scaleU = texWidth / atlasWith;
      var scaleV = texHeight / altasHeight;
      var BallUVSetter = exports('BallUVSetter', (_dec = ccclass('BallUVSetter'), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BallUVSetter, _Component);
        function BallUVSetter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ballId", _descriptor, _assertThisInitialized(_this));
          _this._lastBallId = -1;
          return _this;
        }
        var _proto = BallUVSetter.prototype;
        _proto.start = function start() {
          this.setTilingOffset(this.ballId);
        };
        _proto.setTilingOffset = function setTilingOffset(ballId) {
          var col = ballId % maxCols;
          var row = Math.floor(ballId / maxCols);
          var tx = paddingLeft + col * (texWidth + gap);
          var ty = paddingTop + row * (texHeight + gap);
          var offsetU = tx / atlasWith;
          var offsetV = ty / altasHeight;
          var meshRenderer = this.node.getComponent(MeshRenderer);
          meshRenderer.setInstancedAttribute('a_tilingOffset', [scaleU, scaleV, offsetU, offsetV]);
        };
        _proto.update = function update(deltaTime) {
          if (this._lastBallId != this.ballId) {
            this.setTilingOffset(this.ballId);
            this._lastBallId = this.ballId;
          }
        };
        return BallUVSetter;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ballId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BilliardsGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './GamePlayerInfo.ts', './BilliardsGameMgr.ts', './UIChat.ts', './RoomMgr.ts', './NetGameServer.ts', './SubGameMessage.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Button, Node, director, Component, Sprite, instantiate, UserMgr, SceneDef, GamePlayerInfo, BilliardsGameMgr, BilliardsGameEvent, UIChat, RoomMgr, RoomEvent, GameMode, gameNet, SubGameMessage;
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
      Button = module.Button;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      GamePlayerInfo = module.GamePlayerInfo;
    }, function (module) {
      BilliardsGameMgr = module.BilliardsGameMgr;
      BilliardsGameEvent = module.BilliardsGameEvent;
    }, function (module) {
      UIChat = module.UIChat;
    }, function (module) {
      RoomMgr = module.RoomMgr;
      RoomEvent = module.RoomEvent;
      GameMode = module.GameMode;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "f80e8HF1llD6ovoBb5vjtrE", "BilliardsGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BilliardsGameHUD = exports('BilliardsGameHUD', (_dec = ccclass('BilliardsGameHUD'), _dec2 = property(GamePlayerInfo), _dec3 = property(GamePlayerInfo), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BilliardsGameHUD, _Component);
        function BilliardsGameHUD() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "leftPlayer", _descriptor, _assertThisInitialized(_this));
          //#endregion
          _initializerDefineProperty(_this, "rightPlayer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tips", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnReady", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "watcherList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRoomId", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BilliardsGameHUD.prototype;
        //#endregion
        //#region 组件第一次激活前执行，也就是第一次执行 update 之前触发
        _proto.start = function start() {
          if (!UserMgr.inst.uid) {
            tgx.SceneUtil.loadScene(SceneDef.START);
            return;
          }
          tgx.UIMgr.inst.closeAll();
          this.initEventListener();
          if (RoomMgr.inst.isOnline) {
            RoomMgr.inst.rpc_Ready();
            this.reStart();
          } else {
            this.onRoomBackByRoomMgr();
          }
        }
        //#endregion
        ;

        _proto.reStart = function reStart() {
          RoomMgr.inst.rpc_ClientReady();
        };
        _proto.onRoomBackByRoomMgr = function onRoomBackByRoomMgr() {
          if (RoomMgr.inst.isOnline) {
            this.lblRoomId.string = RoomMgr.inst.data.displayId;
          } else {
            this.lblRoomId.string = '';
          }
          this.initUser();
          this.initWatcherList();
          this.updateCtrlUI();
          if (RoomMgr.inst.isOnline) {
            tgx.UIMgr.inst.showUI(UIChat, null, null, gameNet);
          }
        }
        //#region 用户信息初始化
        ;

        _proto.initUser = function initUser() {
          if (RoomMgr.inst.isOnline) {
            this.leftPlayer.setUserId(BilliardsGameMgr.inst.leftUserId);
            this.rightPlayer.setUserId(BilliardsGameMgr.inst.rightUserId);
            var u = RoomMgr.inst.selfUser;
            this.btnReady.node.active = u && u.playerId && !u.ready;
          } else {
            this.btnReady.node.active = false;
            this.rightPlayer.node.active = false;
            this.leftPlayer.setUserId(UserMgr.inst.uid);
          }
        }
        //#endregion

        //#region 开始注册监听事件
        ;

        _proto.initEventListener = function initEventListener() {
          director.on(BilliardsGameEvent.TURN_PLAYER_CHANGED, this.updateCtrlUI, this);
          director.on(RoomEvent.NEW_USER_COMES, this.onNewUserComes, this);
          director.on(RoomEvent.USER_LEAVES, this.onUserLeaves, this);
          director.on(RoomEvent.WATCHER_LIST_CHANGED, this.initWatcherList, this);
          director.on(BilliardsGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
          director.on(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(BilliardsGameEvent.TURN_PLAYER_CHANGED, this.updateCtrlUI, this);
          director.off(RoomEvent.NEW_USER_COMES, this.onNewUserComes, this);
          director.off(RoomEvent.USER_LEAVES, this.onUserLeaves, this);
          director.off(RoomEvent.WATCHER_LIST_CHANGED, this.initWatcherList, this);
          director.off(BilliardsGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
          director.off(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
        }
        //#endregion
        ;

        _proto.onNewUserComes = function onNewUserComes(data) {
          if (data.isPlayer) {
            this.initUser();
          } else {
            this.initWatcherList();
          }
        };
        _proto.onUserLeaves = function onUserLeaves(data) {
          if (data.isPlayer) {
            this.initUser();
          } else {
            this.initWatcherList();
          }
        };
        _proto.initWatcherList = /*#__PURE__*/function () {
          var _initWatcherList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _RoomMgr$inst$data;
            var usersData, i, userIds, c, _i, u, newNode, _i2, _c, icon;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.watcherList.parent.active = false;
                  usersData = (_RoomMgr$inst$data = RoomMgr.inst.data) == null ? void 0 : _RoomMgr$inst$data.userList;
                  if (!(!RoomMgr.inst.isOnline || !usersData.length)) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return");
                case 4:
                  this.watcherList.parent.active = true;
                  for (i = 0; i < this.watcherList.children.length; ++i) {
                    this.watcherList.children[i].active = false;
                  }
                  userIds = [];
                  c = this.watcherList.children[0];
                  for (_i = 0; _i < usersData.length; ++_i) {
                    u = usersData[_i];
                    if (!u.playerId) {
                      newNode = instantiate(c);
                      this.watcherList.addChild(newNode);
                      userIds.push(u.uid);
                    }
                  }
                  _context.next = 11;
                  return UserMgr.inst.rpc_GetUserInfos(userIds);
                case 11:
                  for (_i2 = 0; _i2 < userIds.length; ++_i2) {
                    _c = this.watcherList.children[_i2];
                    _c.active = true;
                    icon = _c.children[0].getComponent(Sprite);
                    UserMgr.inst.setUserIconAndName(userIds[_i2], icon);
                  }
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initWatcherList() {
            return _initWatcherList.apply(this, arguments);
          }
          return initWatcherList;
        }();
        _proto.updateCtrlUI = function updateCtrlUI() {
          if (RoomMgr.inst.gameMode == GameMode.SOLO) {
            this.tips.string = '单人练习';
          } else if (RoomMgr.inst.gameMode == GameMode.AI) {
            this.tips.string = '人机对决';
          } else if (RoomMgr.inst.isWatcher) {
            this.tips.string = '观战中...';
          } else if (RoomMgr.inst.data.playerNum < 2) {
            this.tips.string = '等待对手加入...';
          } else if (BilliardsGameMgr.inst.isMyTurn) {
            this.tips.string = '该你击球...';
          } else {
            this.tips.string = '对手击球...';
          }
        };
        _proto.onBtnReadyClicked = function onBtnReadyClicked() {
          RoomMgr.inst.rpc_Ready();
        };
        _proto.onBtnExitClicked = /*#__PURE__*/function () {
          var _onBtnExitClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!RoomMgr.inst.isOnline) {
                    tgx.UIAlert.show('球局未结束，确定离开吗？', true).onClick(function (ok) {
                      if (ok) {
                        tgx.SceneUtil.loadScene(BilliardsGameMgr.inst.entryScene);
                      }
                    });
                  } else {
                    if (RoomMgr.inst.isPlayer && RoomMgr.inst.isPlaying) {
                      tgx.UIAlert.show('确定要认输并退出吗？', true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ok) {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              if (ok) {
                                RoomMgr.inst.exitRoom(); //返回大厅
                              }

                            case 1:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      })));
                    } else {
                      RoomMgr.inst.exitRoom(); //返回大厅
                    }
                  }

                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function onBtnExitClicked() {
            return _onBtnExitClicked.apply(this, arguments);
          }
          return onBtnExitClicked;
        }();
        return BilliardsGameHUD;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnReady", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "watcherList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblRoomId", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BilliardsGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './UserMgr.ts', './NetGameServer.ts', './RoomMgr.ts', './SubGameDef.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, director, Vec3, GameMgr, SubGameMgr, UserMgr, gameNet, RoomMgr, SubGameDef, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Vec3 = module.Vec3;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "145a74dL2hBz7d0oAV4Twlf", "BilliardsGameMgr", undefined);
      var BilliardsGameEvent = exports('BilliardsGameEvent', function BilliardsGameEvent() {});
      BilliardsGameEvent.ROOM_PUSH = 'BilliardsGameEvent.ROOM_PUSH';
      BilliardsGameEvent.HIT_BALL = 'BilliardsGameEvent.HIT_BALL';
      BilliardsGameEvent.HIT_BALL_COMPLETE = 'BilliardsGameEvent.HIT_BALL_COMPLETE';
      BilliardsGameEvent.CUE_CHANGED = 'BilliardsGameEvent.CUE_CHANGED';
      BilliardsGameEvent.BALL_SYNC = 'BilliardsGameEvent.BALL_SYNC';
      BilliardsGameEvent.TURN_PLAYER_CHANGED = 'BilliardsGameEvent.TURN_PLAYER_CHANGED';
      BilliardsGameEvent.PLAYER_DATA_CHANGED = 'BilliardsGameEvent.PLAYER_DATA_CHANGED';
      BilliardsGameEvent.GAME_BEGIN = 'BilliardsGameEvent.GAME_BEBIN';
      BilliardsGameEvent.GAME_OVER = 'BilliardsGameEvent.GAME_OVER';
      BilliardsGameEvent.PLAYER_COMES = 'BilliardsGameEvent.PLAYER_COMES';
      BilliardsGameEvent.PLAYER_LEAVES = 'BilliardsGameEvent.PLAYER_LEAVES';
      var BilliardsGameMgr = exports('BilliardsGameMgr', /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(BilliardsGameMgr, _GameMgr);
        function BilliardsGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameData = void 0;
          _this.order = void 0;
          _this.cueDir = void 0;
          _this._gameType = SubGameDef.BILLIARDS;
          _this._entryScene = {
            name: 'lobby_billiards',
            bundle: ModuleDef.BILLIARDS
          };
          _this._gameScene = {
            name: 'game_billiards',
            bundle: ModuleDef.BILLIARDS
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = BilliardsGameMgr.prototype;
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg("billiards/GameDataSyncPush", this.onNet_GameDataSyncPush, this);
          gameNet.listenMsg("billiards/GameDataChangedPush", this.onNet_GameDataChangedPush, this);
          gameNet.listenMsg("billiards/PlayerComesPush", this.onNet_PlayerComesPush, this);
          gameNet.listenMsg("billiards/PlayerDataChangedPush", this.onNet_PlayerDataChangedPush, this);
          gameNet.listenMsg("billiards/PlayerLeavesPush", this.onNet_PlayerLeavesPush, this);
          gameNet.listenMsg("billiards/GameBeginPush", this.onNet_GameBeginPush, this);
          gameNet.listenMsg("billiards/GameOverPush", this.onNet_GameOverPush, this);
          gameNet.listenMsg("billiards/HitBall", this.onNet_HitBallPush, this);
          gameNet.listenMsg("billiards/HitBallComplete", this.onNet_HitBallCompletePush, this);
          gameNet.listenMsg("billiards/AdjustCue", this.onNet_AdjustCuePush, this);
        };
        _proto.reset = function reset() {
          _GameMgr.prototype.reset.call(this);
          this._gameData = null;
          this.cueDir = null;
          this.cueDir = null;
        };
        _proto.initSoloMode = function initSoloMode() {
          RoomMgr.inst.reset();
          this.reset();
          SubGameMgr.gameMgr = this;
        };
        _proto.getPlayer = function getPlayer(userId) {
          if (!this._gameData || !this._gameData.players) {
            return null;
          }
          for (var i = 0; i < this._gameData.players.length; ++i) {
            var p = this._gameData.players[i];
            if (p.uid == userId) {
              return p;
            }
          }
          return null;
        };
        _proto.getPlayerIndex = function getPlayerIndex(userId) {
          for (var i = 0; i < this._gameData.players.length; ++i) {
            if (this._gameData.players[i].uid == userId) {
              return i;
            }
          }
          return -1;
        };
        _proto.isPocketed = function isPocketed(ballId) {
          if (!this._gameData || !this._gameData.players) {
            return false;
          }
          for (var i = 0; i < this._gameData.players.length; ++i) {
            var p = this._gameData.players[i];
            if (p.pocketedBalls && p.pocketedBalls.indexOf(ballId) != -1) {
              return true;
            }
          }
          return false;
        };
        _proto.sendMsg_HitBall = function sendMsg_HitBall(msg) {
          gameNet.sendMsg("billiards/HitBall", msg);
        };
        _proto.sendMsg_HitBallComplete = function sendMsg_HitBallComplete(msg) {
          gameNet.sendMsg("billiards/HitBallComplete", msg);
        };
        _proto.sendMsg_AdjustCue = function sendMsg_AdjustCue(msg) {
          gameNet.sendMsg("billiards/AdjustCue", msg);
        };
        _proto.sendMsg_BallsDataSync = function sendMsg_BallsDataSync(msg) {
          gameNet.sendMsg("billiards/BallsDataSync", msg);
        }

        // ============= MESSAGE HANDLER ============
        /**
         * This message will arrive before login result.
         * 这个消息会在登录成功返回之前收到。
        */;
        _proto.onNet_GameDataSyncPush = function onNet_GameDataSyncPush(msg) {
          this._gameData = msg;
          console.log('game data', msg);
          director.emit(BilliardsGameEvent.ROOM_PUSH);
        };
        _proto.onNet_GameDataChangedPush = function onNet_GameDataChangedPush(msg) {
          if (!this._gameData) {
            return;
          }
          if (msg.ballsData !== undefined) {
            this._gameData.ballsData = msg.ballsData;
            if (!this.isMyTurn) {
              director.emit(BilliardsGameEvent.BALL_SYNC, msg.ballsData);
            }
          }
          if (msg.order !== undefined) {
            this.order = msg.order;
          }
          if (msg.cueDir !== undefined) {
            if (!this.cueDir) {
              this.cueDir = new Vec3();
            }
            this.cueDir.set(msg.cueDir.x, msg.cueDir.y, msg.cueDir.z);
          }
          if (msg.currentPlayer !== undefined) {
            this._gameData.currentPlayer = msg.currentPlayer;
            director.emit(BilliardsGameEvent.TURN_PLAYER_CHANGED, msg.currentPlayer);
          }
        };
        _proto.onNet_PlayerComesPush = function onNet_PlayerComesPush(msg) {
          this._gameData.players.push(msg.player);
          director.emit(BilliardsGameEvent.PLAYER_COMES, msg.player);
        };
        _proto.onNet_PlayerDataChangedPush = function onNet_PlayerDataChangedPush(msg) {
          var p = this.getPlayer(msg.uid);
          if (!p) {
            return;
          }
          if (msg.pocketedBalls != undefined) {
            p.pocketedBalls = msg.pocketedBalls;
          }
          director.emit(BilliardsGameEvent.PLAYER_DATA_CHANGED, msg);
        };
        _proto.onNet_PlayerLeavesPush = function onNet_PlayerLeavesPush(msg) {
          for (var i = 0; i < this._gameData.players.length; ++i) {
            var p = this._gameData.players[i];
            if (p.uid == msg.uid) {
              this._gameData.players.splice(i, 1);
              director.emit(BilliardsGameEvent.PLAYER_LEAVES, msg.uid);
              break;
            }
          }
        };
        _proto.onNet_GameBeginPush = function onNet_GameBeginPush(msg) {
          if (!this._gameData) {
            return;
          }
          this._gameData.ballsData = null;
          this._gameData.players.forEach(function (v) {
            v.pocketedBalls = [];
          });
          director.emit(BilliardsGameEvent.GAME_BEGIN);
        };
        _proto.onNet_GameOverPush = function onNet_GameOverPush(msg) {
          director.emit(BilliardsGameEvent.GAME_OVER, msg);
        };
        _proto.onNet_HitBallPush = function onNet_HitBallPush(msg) {
          if (!this._gameData) {
            return;
          }
          if (!this.isMyTurn) {
            director.emit(BilliardsGameEvent.HIT_BALL, msg.hitImpulse, msg.order);
          }
        };
        _proto.onNet_HitBallCompletePush = function onNet_HitBallCompletePush(msg) {
          if (!this._gameData) {
            return;
          }
          director.emit(BilliardsGameEvent.HIT_BALL_COMPLETE);
        };
        _proto.onNet_AdjustCuePush = function onNet_AdjustCuePush(msg) {
          if (!this._gameData) {
            return;
          }
          if (msg.direction) {
            if (!this.cueDir) {
              this.cueDir = new Vec3();
            }
            this.cueDir.set(msg.direction.x, msg.direction.y, msg.direction.z);
          }
          if (!this.isMyTurn) {
            director.emit(BilliardsGameEvent.CUE_CHANGED, msg);
          }
        };
        _createClass(BilliardsGameMgr, [{
          key: "gameData",
          get: function get() {
            return this._gameData;
          }
        }, {
          key: "selfPlayer",
          get: function get() {
            return this.getPlayer(UserMgr.inst.uid);
          }
        }, {
          key: "selfPlayerIndex",
          get: function get() {
            return this.getPlayerIndex(UserMgr.inst.uid);
          }
        }, {
          key: "leftUserId",
          get: function get() {
            if (!this._gameData || this._gameData.players.length == 0) {
              return '';
            }
            if (RoomMgr.inst.isPlayer) {
              return UserMgr.inst.uid;
            } else {
              return this._gameData.players[0].uid;
            }
          }
        }, {
          key: "rightUserId",
          get: function get() {
            if (!this._gameData || this._gameData.players.length == 0) {
              return '';
            }
            if (RoomMgr.inst.isPlayer) {
              if (this._gameData.players[0].uid != UserMgr.inst.uid) {
                return this._gameData.players[0].uid;
              } else {
                var p = this._gameData.players[1];
                return p ? p.uid : '';
              }
            } else {
              var _p = this._gameData.players[1];
              return _p ? _p.uid : '';
            }
          }
        }, {
          key: "isMyTurn",
          get: function get() {
            if (!this._gameData) {
              return false;
            }
            if (!RoomMgr.inst.isPlayer) {
              return false;
            }
            if (!this._gameData.currentPlayer) {
              return false;
            }
            return this._gameData.currentPlayer == UserMgr.inst.uid;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new BilliardsGameMgr();
            }
            return this._inst;
          }
        }]);
        return BilliardsGameMgr;
      }(GameMgr));
      BilliardsGameMgr._inst = void 0;
      SubGameMgr.inst.registerGameMgr(BilliardsGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BilliardsLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneUtils.ts', './UserMgr.ts', './UI_SearchingRival.ts', './SceneDef.ts', './BilliardsGameMgr.ts', './UICreateRoom.ts', './UIChat.ts', './UIAnnouncement.ts', './NetGameServer.ts', './UIRoomList.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, SceneUtil, UserMgr, UI_SearchingRival, SceneDef, BilliardsGameMgr, UICreateRoom, UIChat, UIAnnouncement, lobbyNet, UIRoomList;
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
      Component = module.Component;
    }, function (module) {
      SceneUtil = module.SceneUtil;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      UI_SearchingRival = module.UI_SearchingRival;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      BilliardsGameMgr = module.BilliardsGameMgr;
    }, function (module) {
      UICreateRoom = module.UICreateRoom;
    }, function (module) {
      UIChat = module.UIChat;
    }, function (module) {
      UIAnnouncement = module.UIAnnouncement;
    }, function (module) {
      lobbyNet = module.lobbyNet;
    }, function (module) {
      UIRoomList = module.UIRoomList;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "26761xan0FF2J62SjTdMxFQ", "BilliardsLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BilliardsLobbyScene = exports('BilliardsLobbyScene', (_dec = ccclass('BilliardsLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BilliardsLobbyScene, _Component);
        function BilliardsLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BilliardsLobbyScene.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserMgr.inst.uid) {
                    _context.next = 3;
                    break;
                  }
                  tgx.SceneUtil.loadScene(SceneDef.START);
                  return _context.abrupt("return");
                case 3:
                  tgx.UIMgr.inst.closeAll();
                  if (lobbyNet.type != 'http') {
                    tgx.UIMgr.inst.showUI(UIChat, null, null, lobbyNet);
                  }
                  tgx.UIMgr.inst.showUI(UIAnnouncement, function (ui) {
                    ui.setPosition(_this2.announcementPlacer.position.x, _this2.announcementPlacer.position.y);
                  });
                case 6:
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
        _proto.onBtnLobby = function onBtnLobby() {
          SceneUtil.loadScene(SceneDef.LOBBY);
        };
        _proto.onBtnQuickPlayClicked = function onBtnQuickPlayClicked() {
          var _this3 = this;
          tgx.UIMgr.inst.showUI(UI_SearchingRival, function (ui) {
            _this3.scheduleOnce(function () {
              ui.startMatch('billiards');
            }, 1.5);
          });
        };
        _proto.onBtnRoomListClicked = function onBtnRoomListClicked() {
          tgx.UIMgr.inst.showUI(UIRoomList);
        };
        _proto.onBtnTraningModeClicked = function onBtnTraningModeClicked() {
          BilliardsGameMgr.inst.initSoloMode();
          tgx.UIWaiting.show();
          tgx.SceneUtil.loadScene(BilliardsGameMgr.inst.gameScene);
        };
        _proto.onBtnCreate = function onBtnCreate() {
          tgx.UIMgr.inst.showUI(UICreateRoom);
        };
        _proto.update = function update(deltaTime) {};
        return BilliardsLobbyScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "announcementPlacer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BilliardTableControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HitIndicator.ts', './UserMgr.ts', './AudioPlayer.ts', './BilliardsGameMgr.ts', './FixedPhysics.ts', './BallCollision.ts', './PocketTrigger.ts', './PocktedBalls.ts', './GConst.ts', './RoomMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, geometry, Slider, Button, Node, Prefab, Vec3, instantiate, MeshRenderer, PhysicsSystem, director, Director, misc, SphereCollider, tween, RigidBody, Component, Input, HitIndicator, UserMgr, AudioPlayer, BilliardsGameMgr, BilliardsGameEvent, FixedPhysics, BallCollision, PocketTrigger, PocktedBalls, GameConst, RoomMgr;
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
      v3 = module.v3;
      geometry = module.geometry;
      Slider = module.Slider;
      Button = module.Button;
      Node = module.Node;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
      PhysicsSystem = module.PhysicsSystem;
      director = module.director;
      Director = module.Director;
      misc = module.misc;
      SphereCollider = module.SphereCollider;
      tween = module.tween;
      RigidBody = module.RigidBody;
      Component = module.Component;
      Input = module.Input;
    }, function (module) {
      HitIndicator = module.HitIndicator;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      AudioPlayer = module.AudioPlayer;
    }, function (module) {
      BilliardsGameMgr = module.BilliardsGameMgr;
      BilliardsGameEvent = module.BilliardsGameEvent;
    }, function (module) {
      FixedPhysics = module.FixedPhysics;
    }, function (module) {
      BallCollision = module.BallCollision;
    }, function (module) {
      PocketTrigger = module.PocketTrigger;
    }, function (module) {
      PocktedBalls = module.PocktedBalls;
    }, function (module) {
      GameConst = module.default;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "44fadAVcvRIbKqBjrglNpm/", "BilliardTableControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MAX_HIT_STRENGTH = 120;
      var MAX_BALL_NUM = 16;
      var BALL_RADIUS = 0.7;
      var tmpV3_1 = v3();
      var tmpV3_2 = v3();
      var tmpV3_3 = v3();
      var planes = [new geometry.Plane(1, 0, 0, -23.84), new geometry.Plane(-1, 0, 0, -23.84), new geometry.Plane(0, 0, 1, -11.11), new geometry.Plane(0, 0, -1, -11.11)];
      var hitRay = new geometry.Ray();
      var BilliardTableControl = exports('BilliardTableControl', (_dec = ccclass('BilliardTableControl'), _dec2 = property(Slider), _dec3 = property(Slider), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Node), _dec12 = property(HitIndicator), _dec13 = property(PocktedBalls), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BilliardTableControl, _Component);
        function BilliardTableControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region 编辑器序列化变量
          _initializerDefineProperty(_this, "powerSlider", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "directionSlider", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hitButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cue", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "whiteBall", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "indicatorWhiteBall", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "beHitBalls", _descriptor7, _assertThisInitialized(_this));
          //#endregion
          _initializerDefineProperty(_this, "ballPrefab", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tablePrefab", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "table", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hitIndicator", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pocketedBalls", _descriptor12, _assertThisInitialized(_this));
          _this._allBalls = new Array(MAX_BALL_NUM);
          //#region 私有变量
          _this._impulse = new Vec3();
          _this._cueRot = v3();
          _this._cueOffset = new Vec3();
          _this._hitOffset = new Vec3();
          _this._whiteballOrignalPos = v3();
          _this._ballsPosData = new Array(MAX_BALL_NUM * 3);
          _this._ballsQuatData = new Array(MAX_BALL_NUM * 4);
          //#endregion
          _this._needUpdatePhysics = false;
          _this._cueSyncData = null;
          _this._lastProgress = 0.5;
          _this._lastSlideTime = 0;
          _this._slideLen = 0;
          _this._newPocketedBallIds = [];
          _this._hasPocketed = false;
          //#endregion
          //#region 击球
          // *击球时要隐藏 UI 界面
          // *击球时要把所有球的坐标和旋转向其它客户端同步，保证所有客户端的物理世界数据一致
          // *击球之后要立即调用固定频率、固定时长的定时器对物理世界和节点树进行同步刷新
          _this._isBallMoveByHit = false;
          _this._currentHitOrder = 0;
          //#endregion
          _this._lastSyncTime = 0;
          _this._isGameOver = false;
          _this._fixedDt = Math.floor(1.0 / GameConst.MAX_FPS * 10000) / 10000;
          return _this;
        }
        var _proto = BilliardTableControl.prototype;
        //#region 组件第一次激活前执行，也就是第一次执行 update 之前触发
        _proto.start = function start() {
          this.cue.getPosition(this._cueOffset);
          this._hitOffset.set(this._cueOffset);
          this._hitOffset.x = -7.65;
          this.cue.parent.setPosition(this.whiteBall.position);
          if (BilliardsGameMgr.inst.gameData && BilliardsGameMgr.inst.gameData.curDirection) {
            var curDir = BilliardsGameMgr.inst.gameData.curDirection;
            if (curDir) {
              this.cue.parent.setRotationFromEuler(curDir.x, curDir.y, curDir.z);
            }
          }
          this.indicatorWhiteBall.active = false;
          this._currentHitOrder = 0;
          if (BilliardsGameMgr.inst.gameData) {
            this._currentHitOrder = BilliardsGameMgr.inst.order;
          }
          for (var i = 0; i < MAX_BALL_NUM; ++i) {
            if (i == 0) {
              this._allBalls[i] = this.whiteBall;
            } else {
              this._allBalls[i] = this.beHitBalls.children[i - 1];
            }
          }
          this._whiteballOrignalPos.set(this._allBalls[0].worldPosition);
          if (RoomMgr.inst.isOnline) {
            var ballsData = null;
            if (BilliardsGameMgr.inst.gameData && BilliardsGameMgr.inst.gameData.ballsData) {
              ballsData = BilliardsGameMgr.inst.gameData.ballsData;
            } else {
              ballsData = this.getSyncData(false).ballsData;
            }
            this.doBallsDataSync(ballsData);
          }
          var data = this.getSyncData(false);
          this.resetBalls(data.ballsData);
          this.onTurnPlayerChanged();
          this.initEventListener();
        };
        _proto.resetBalls = function resetBalls(data) {
          if (!data) {
            return;
          }
          for (var i = this._allBalls.length - 1; i >= 0; --i) {
            this._allBalls[i].destroy();
          }
          var atlasWith = 512;
          var altasHeight = 512;
          var paddingLeft = 10;
          var paddingTop = 10;
          var gap = 4;
          var texWidth = 120;
          var texHeight = 60;
          var maxCols = 3;
          var scaleU = texWidth / atlasWith;
          var scaleV = texHeight / altasHeight;
          for (var _i = 0; _i < MAX_BALL_NUM; ++_i) {
            var ball = instantiate(this.ballPrefab);
            ball.addComponent(BallCollision);
            this._allBalls[_i] = ball;
            if (_i == 0) {
              this.whiteBall = ball;
              ball.name = GameConst.hitBallNodeName;
              this.beHitBalls.parent.addChild(ball);
            } else {
              ball.name = 'ball-' + _i;
              this.beHitBalls.addChild(ball);
            }
            this.setBallData(_i, data);
            if (BilliardsGameMgr.inst.isPocketed(_i)) {
              ball.active = false;
            }
            var col = _i % maxCols;
            var row = Math.floor(_i / maxCols);
            var tx = paddingLeft + col * (texWidth + gap);
            var ty = paddingTop + row * (texHeight + gap);
            var offsetU = tx / atlasWith;
            var offsetV = ty / altasHeight;
            var meshRenderer = ball.getComponent(MeshRenderer);
            meshRenderer.setInstancedAttribute('a_tilingOffset', [scaleU, scaleV, offsetU, offsetV]);
          }
          PhysicsSystem.instance.physicsWorld.syncSceneToPhysics();
        }

        //#region 初始化物理刷新事件监听
        ;

        _proto.initEventListener = /*#__PURE__*/
        function () {
          var _initEventListener = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  director.on(BilliardsGameEvent.CUE_CHANGED, this.onEvent_CueChanged, this);
                  director.on(BilliardsGameEvent.HIT_BALL, this.onEvent_HitBall, this);
                  director.on(BilliardsGameEvent.TURN_PLAYER_CHANGED, this.onTurnPlayerChanged, this);
                  director.on(BilliardsGameEvent.BALL_SYNC, this.onEvent_BallSync, this);
                  director.on(FixedPhysics.EVENT_UPDATE_FINISHED, this.onEvent_FixedPhysicsUpdateFinished, this);
                  director.on(PocketTrigger.EVENT_HIT_POCKET, this.onPocket, this);
                  this.powerSlider.handle.node.on(Input.EventType.TOUCH_END, this.onEvent_TouchEnd, this);
                  this.powerSlider.handle.node.on(Input.EventType.TOUCH_CANCEL, this.onEvent_TouchEnd, this);
                  this.directionSlider.handle.node.on(Input.EventType.TOUCH_END, this.onDirectionSliderTouchEnd, this);
                  this.directionSlider.handle.node.on(Input.EventType.TOUCH_CANCEL, this.onDirectionSliderTouchEnd, this);
                  director.on(Director.EVENT_AFTER_UPDATE, this.onEvent_PostUpdate, this);
                  director.on(BilliardsGameEvent.GAME_BEGIN, this.onGameBegin, this);
                  director.on(BilliardsGameEvent.GAME_OVER, this.onGameOver, this);
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initEventListener() {
            return _initEventListener.apply(this, arguments);
          }
          return initEventListener;
        }();
        _proto.onDirectionSliderTouchEnd = function onDirectionSliderTouchEnd() {
          this._lastProgress = 0.5;
          this.directionSlider.enabled = false;
          this.directionSlider.progress = 0.5;
          this.directionSlider.enabled = true;
          this._lastSlideTime = 0;
        };
        _proto.onDestroy = function onDestroy() {
          director.off(Director.EVENT_AFTER_UPDATE, this.onEvent_PostUpdate, this);
          director.off(BilliardsGameEvent.CUE_CHANGED, this.onEvent_CueChanged, this);
          director.off(BilliardsGameEvent.HIT_BALL, this.onEvent_HitBall, this);
          director.off(BilliardsGameEvent.TURN_PLAYER_CHANGED, this.onTurnPlayerChanged, this);
          director.off(BilliardsGameEvent.BALL_SYNC, this.onEvent_BallSync, this);
          director.off(FixedPhysics.EVENT_UPDATE_FINISHED, this.onEvent_FixedPhysicsUpdateFinished, this);
          director.off(PocketTrigger.EVENT_HIT_POCKET, this.onPocket, this);
          director.off(BilliardsGameEvent.GAME_BEGIN, this.onGameBegin, this);
          director.off(BilliardsGameEvent.GAME_OVER, this.onGameOver, this);
        };
        _proto.onEvent_BallSync = function onEvent_BallSync(data) {
          if (BilliardsGameMgr.inst.isMyTurn) {
            return;
          }
          this.doBallsDataSync(data);
        };
        _proto.hideIndicator = function hideIndicator() {
          this.hitIndicator.hideAll();
          this.indicatorWhiteBall.active = false;
        };
        _proto.dirToDegree = function dirToDegree(d) {
          d.y = 0;
          d.normalize();
          //console.log(d);
          var degree = Math.atan(-d.z / d.x) / Math.PI * 180;
          //console.log(degree);
          if (d.x < 0) {
            degree += 180;
          } else {
            degree += 360;
          }
          return degree;
        };
        _proto.checkBorders = function checkBorders(ray) {
          var mint = -1;
          var hitPlane = null;
          for (var i = 0; i < planes.length; ++i) {
            var t = geometry.intersect.rayPlane(ray, planes[i]);
            //console.log('t', t);
            if (t > 0 && (mint < 0 || t < mint)) {
              mint = t;
              hitPlane = planes[i];
            }
          }
          return {
            mint: mint,
            hitPlane: hitPlane
          };
        };
        _proto.computeLen = function computeLen(pos, d, len) {
          hitRay.o.set(pos.x, 0, pos.z);
          hitRay.d.set(d.x, 0, d.z);
          var mint = this.checkBorders(hitRay).mint;
          if (mint > 0 && mint < len) {
            len = mint;
          }
          return len;
        };
        _proto.adjustIndicator = function adjustIndicator() {
          this.hitIndicator.hideAll();
          var o = this.whiteBall.position;
          var d = tmpV3_1.set(1, 0, 0);
          var radian = misc.degreesToRadians(this.cue.parent.eulerAngles.y);
          Vec3.rotateY(d, d, this.whiteBall.getComponent(SphereCollider).center, radian);
          hitRay.o.set(o.x, o.y, o.z);
          hitRay.d.set(d.x, d.y, d.z);
          d.normalize();
          //console.log(d);
          var mint = -1;
          var targetBall = null;
          for (var i = 1; i < this._allBalls.length; ++i) {
            var pb = this._allBalls[i];
            if (pb.active) {
              var t = this.predict(o, d, pb.position);
              if (t >= 0 && (mint < 0 || t < mint)) {
                mint = t;
                targetBall = pb;
                //console.log(t, pb.name);
              }
            }
          }

          if (mint >= 0) {
            var pos = this.indicatorWhiteBall.position;
            this.indicatorWhiteBall.active = true;
            this.indicatorWhiteBall.setPosition(o.x + d.x * mint, pos.y, o.z + d.z * mint);
            this.hitIndicator.setHitLine(this.cue.parent.eulerAngles.y, o, mint);
            var d2 = tmpV3_2;
            d2.normalize();
            Vec3.subtract(d2, targetBall.position, this.indicatorWhiteBall.position);
            var degree = this.dirToDegree(d2);
            var len = this.computeLen(targetBall.position, d2, 20);
            this.hitIndicator.setBallLine(degree, targetBall.position, len + BALL_RADIUS);

            //
            var up = tmpV3_3;
            Vec3.cross(up, d, d2);
            Vec3.cross(d, d2, up);
            d.normalize();
            len = this.computeLen(this.indicatorWhiteBall.position, d, 10);
            degree = this.dirToDegree(d);
            this.hitIndicator.setWhiteLine(degree, this.indicatorWhiteBall.position, len + BALL_RADIUS);
          } else {
            //check borders
            var ret = this.checkBorders(hitRay);
            var _mint = ret.mint;
            var hitPlane = ret.hitPlane;
            if (_mint > 0) {
              var _pos = tmpV3_2.set(this.indicatorWhiteBall.position);
              _pos.x = o.x + d.x * _mint;
              _pos.z = o.z + d.z * _mint;
              this.indicatorWhiteBall.setPosition(_pos);
              this.hitIndicator.setHitLine(this.cue.parent.eulerAngles.y, o, _mint);
              var isInPocket = false;
              //check whether it reaches the pocket.
              for (var _i2 = 0; _i2 < this.table.children.length; ++_i2) {
                var pocket = this.table.children[_i2];
                var r = pocket.worldScale.x / 2;
                var dx = pocket.worldPosition.x - (_pos.x + d.x * BALL_RADIUS);
                var dz = pocket.worldPosition.z - (_pos.z + d.z * BALL_RADIUS);
                if (dx * dx + dz * dz < r * r) {
                  isInPocket = true;
                  break;
                }
              }
              this.indicatorWhiteBall.active = !isInPocket;

              //compute reflection direction.
              if (!isInPocket) {
                //R = V - 2*dot(V,N)*N
                var dot = -2 * Vec3.dot(d, hitPlane.n);
                var _r = tmpV3_3;
                _r.x = d.x + dot * hitPlane.n.x;
                _r.y = 0; //-d.y - dot * hitPlane.n.y;
                _r.z = d.z + dot * hitPlane.n.z;
                _r.normalize();
                var _len2 = this.computeLen(_pos, _r, 20);
                var _degree = this.dirToDegree(_r);
                this.hitIndicator.setBallLine(_degree, _pos, _len2 + BALL_RADIUS);
              }
            } else {
              this.indicatorWhiteBall.active = false;
            }
          }
        };
        _proto.predict = function predict(o, d, Pb) {
          /**
           * 设球 A 的位置为 Pa(x,y,z)，球 B 的位置为 Pb(x,y,z)
           * 当两个球相交时，有
           * dx = Pa.x - Pb.x
           * dz = Pa.z - Pb.z;
           * dx*dx + dz*dz = (2r)^2
           * => (Pa.x - Pb.x)^2 + (Pa.z - Pb.z)^ = 4r^2
           * 由于 Pa(o.x+d.x*t,_,o.z+d.z*t)
           * => (o.x+d.x*t - Pb.x)^2 + (o.z+d.z*t - Pb.z)^2 = 4r^2
           * 设 M = o.x - Pb.x, N = o.z - Pb.z
           * => (M + d.x*t)^2 + (N + d.z*t)^2 = 4r^2
           * => M^2 + d.x^2 * t^2 + 2*M*d.x*t + N^2 + d.z^2t^2 + 2*N*d.z*t - 4r^2 = 0;
           * => (d.x^2 + d.z^2)*t^2 + (2*M*d.x + 2*N*d.z)*t + M^2+N^2-4r^2
           * 若一元二次方程有解，则相交。
           * a = d.x^2 + d.z^2
           * b = 2*M*d.x + 2*N*d.z
           * c = M^2+N^2-4r^2
          */
          var M = o.x - Pb.x;
          var N = o.z - Pb.z;
          var r = BALL_RADIUS;
          var a = d.x * d.x + d.z * d.z;
          var b = 2 * M * d.x + 2 * N * d.z;
          var c = M * M + N * N - 4 * r * r;
          if (a != 0) {
            var v = b * b - 4 * a * c;
            if (v >= 0) {
              var t1 = (-b + Math.sqrt(v)) / (2 * a);
              var t2 = (-b - Math.sqrt(v)) / (2 * a);
              if (t1 * t2 <= 0) {
                return Math.max(t1, t2);
              } else {
                return Math.min(t1, t2);
              }
            }
          } else if (b != 0) {
            return -c / b;
          } else ;
          return -1;
        }
        //#endregion
        ;

        _proto.onGameBegin = /*#__PURE__*/
        function () {
          var _onGameBegin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return tgx.SceneUtil.loadScene(BilliardsGameMgr.inst.gameScene);
                case 2:
                  this.scheduleOnce(function () {
                    tgx.UIAlert.show('游戏开始');
                  }, 1);
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onGameBegin() {
            return _onGameBegin.apply(this, arguments);
          }
          return onGameBegin;
        }();
        _proto.onGameOver = /*#__PURE__*/function () {
          var _onGameOver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
            var userInfo;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!RoomMgr.inst.isPlayer) {
                    _context3.next = 4;
                    break;
                  }
                  if (data.reason == 'RIVAL_LEFT') {
                    tgx.UIAlert.show('对手认输，你赢了！').onClick(function () {
                      RoomMgr.inst.exitRoom();
                    });
                  } else {
                    if (data.winner == UserMgr.inst.uid) {
                      tgx.UIAlert.show('你赢了！').onClick(function () {
                        RoomMgr.inst.exitRoom();
                      });
                    } else {
                      tgx.UIAlert.show('你输了！').onClick(function () {
                        RoomMgr.inst.exitRoom();
                      });
                    }
                  }
                  _context3.next = 8;
                  break;
                case 4:
                  _context3.next = 6;
                  return UserMgr.inst.rpc_GetUserInfo(data.winner);
                case 6:
                  userInfo = _context3.sent;
                  if (data.reason == 'RIVAL_LEFT') {
                    tgx.UIAlert.show('对手认输，玩家[' + userInfo.name + '] 获胜！').onClick(function () {
                      RoomMgr.inst.exitRoom();
                    });
                  } else {
                    tgx.UIAlert.show('玩家[' + userInfo.name + '] 获胜！').onClick(function () {
                      RoomMgr.inst.exitRoom();
                    });
                  }
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function onGameOver(_x) {
            return _onGameOver.apply(this, arguments);
          }
          return onGameOver;
        }();
        _proto.onPocket = function onPocket(node) {
          for (var i = 0; i < this._allBalls.length; ++i) {
            if (i != 0 && this._allBalls[i] == node) {
              this._newPocketedBallIds.push(i);
              this._hasPocketed = true;
              if (BilliardsGameMgr.inst.gameData) {
                this.pocketedBalls.onPocket(BilliardsGameMgr.inst.gameData.currentPlayer, i);
              } else {
                this.pocketedBalls.onPocket(UserMgr.inst.uid, i);
              }
              break;
            }
          }
          node.active = false;
          AudioPlayer.playOneShot('sounds/pocket');
        };
        _proto.onEvent_TouchEnd = function onEvent_TouchEnd() {
          if (this.powerSlider.progress > 0.0) {
            this.onBtnHitBallClicked();
          }
        };
        _proto.isOutOfTable = function isOutOfTable(ball) {
          if (!ball) {
            return false;
          }
          if (ball.active == false) {
            return true;
          }
          var pos = ball.position;
          if (pos.y < 8.4) {
            return true;
          }
          //return ball.active == false;
          return false;
        }

        //#region 物理刷新结束的回调
        ;

        _proto.onEvent_FixedPhysicsUpdateFinished = function onEvent_FixedPhysicsUpdateFinished() {
          this.clearPhysicsState();
          this._needUpdatePhysics = false;
          if (this.isOutOfTable(this.whiteBall)) {
            this.whiteBall.active = true;
            this.whiteBall.setWorldPosition(this._whiteballOrignalPos);
            PhysicsSystem.instance.syncSceneToPhysics();
          }

          //only need to sync when hit by player self.
          if (this._isBallMoveByHit) {
            this.syncActionToServer(false);
          }
          this._newPocketedBallIds = [];
          this._hasPocketed = false;
          this._isBallMoveByHit = false;
          if (!RoomMgr.inst.isOnline) {
            this.onTurnPlayerChanged();
          }
        }
        //#endregion

        //#region 控制球杆击球力度
        ;

        _proto.onPowerChanged = function onPowerChanged(slider) {
          this.hideIndicator();
          var addPosX = this._cueOffset.x * slider.progress * 0.5;
          var addPosY = this._cueOffset.y * slider.progress * 0.5;
          var newCuePos = new Vec3(this._cueOffset.x + addPosX, this._cueOffset.y + addPosY, this._cueOffset.z);
          this.cue.setPosition(newCuePos);
          if (RoomMgr.inst.isOnline) {
            if (!this._cueSyncData) {
              this._cueSyncData = {};
            }
            this._cueSyncData.power = {
              x: newCuePos.x,
              y: newCuePos.y,
              z: newCuePos.z
            };
          }
        }
        //#endregion

        //#region 控制球杆击球方向
        ;

        _proto.onDirectionChanged = function onDirectionChanged(slider) {
          if (!this._lastSlideTime || slider.progress == this._lastProgress) {
            this._lastSlideTime = Date.now();
            this._slideLen = 0;
          }
          var deltaProgress = slider.progress - this._lastProgress;
          this._slideLen += Math.abs(deltaProgress);
          var dt = Date.now() - this._lastSlideTime;
          var factor = 1.0;
          if (dt > 0) {
            var slideSpeed = this._slideLen / dt;
            //console.log(slideSpeed);
            factor = Math.max(1.0, slideSpeed / 0.0005);
          }
          var addtionalY = deltaProgress * 45 * factor;
          this._lastProgress = slider.progress;
          //var addRotationY = 720 * (slider.progress - 0.5) * 0.6;
          var curRot = this.cue.parent.eulerAngles;
          var newHitBallRot = new Vec3(curRot.x, curRot.y + addtionalY, curRot.z);
          this.cue.parent.eulerAngles = newHitBallRot;
          this.adjustIndicator();
          if (RoomMgr.inst.isOnline) {
            if (!this._cueSyncData) {
              this._cueSyncData = {};
            }
            this._cueSyncData.direction = {
              x: newHitBallRot.x,
              y: newHitBallRot.y,
              z: newHitBallRot.z
            };
          }
        };
        _proto.onBtnHitBallClicked = function onBtnHitBallClicked() {
          var _this2 = this;
          if (this._isBallMoveByHit) {
            return;
          }
          //TODO: 把对 active 的修改变为对 position 的修改性能会更好
          //TODO: 击球后球杆消失动画需要补充
          this._currentHitOrder++;
          this.indicatorWhiteBall.active = false;
          this._isBallMoveByHit = true;
          this._impulse = new Vec3(MAX_HIT_STRENGTH * this.powerSlider.progress, 0, 0);
          this._cueRot.set(this.cue.parent.eulerAngles);
          var radian = misc.degreesToRadians(this._cueRot.y);
          Vec3.rotateY(this._impulse, this._impulse, this.whiteBall.getComponent(SphereCollider).center, radian);
          this.syncActionToServer(true);
          this.clearPhysicsState();
          var hit = tween(this.cue).call(function () {
            _this2.doHitBall(_this2._impulse);
          });
          tween(this.cue).to(0.1, {
            position: this._hitOffset
          }, {
            easing: 'cubicIn'
          }).then(hit).start();
        }
        //#endregion
        ;

        _proto.getSyncData = function getSyncData(needImpulse) {
          for (var i = 0; i < this._allBalls.length; i++) {
            var cur = this._allBalls[i];
            var wPos = cur.worldPosition;
            var wRot = cur.worldRotation;
            this._ballsPosData[i * 3 + 0] = wPos.x;
            this._ballsPosData[i * 3 + 1] = wPos.y;
            this._ballsPosData[i * 3 + 2] = wPos.z;
            this._ballsQuatData[i * 4 + 0] = wRot.x;
            this._ballsQuatData[i * 4 + 1] = wRot.y;
            this._ballsQuatData[i * 4 + 2] = wRot.z;
            this._ballsQuatData[i * 4 + 3] = wRot.w;
          }
          var ballsData = {
            ballsPosData: this._ballsPosData,
            ballsQuatData: this._ballsQuatData
          };
          var syncBallData = {
            ballsData: ballsData
          };
          if (needImpulse) {
            syncBallData["hitImpulse"] = {
              x: this._impulse.x,
              y: this._impulse.y,
              z: this._impulse.z
            };
          }
          return syncBallData;
        }

        //#region 向其它客户端同步小球的坐标和旋转角度
        ;

        _proto.syncActionToServer = function syncActionToServer(isHit) {
          if (!RoomMgr.inst.isOnline) {
            return;
          }
          var needImpulse = isHit;
          var data = this.getSyncData(needImpulse);
          data['order'] = this._currentHitOrder;
          if (needImpulse) {
            BilliardsGameMgr.inst.sendMsg_HitBall(data);
          } else {
            var completeData = data;
            if (this._currentHitOrder <= BilliardsGameMgr.inst.order) {
              return;
            }
            if (this._hasPocketed) {
              completeData.nextPlayer = BilliardsGameMgr.inst.gameData.currentPlayer;
            } else {
              completeData.nextPlayer = this.getNextTurnPlayer();
            }
            BilliardsGameMgr.inst.sendMsg_HitBallComplete(completeData);
          }
        };
        _proto.onEvent_HitComplete = function onEvent_HitComplete() {
          this.onTurnPlayerChanged();
        };
        _proto.onTurnPlayerChanged = function onTurnPlayerChanged() {
          var isSelfTurn = BilliardsGameMgr.inst.isMyTurn || !RoomMgr.inst.isOnline;
          if (isSelfTurn) {
            this.adjustIndicator();
          }
          this.cue.active = true;
          this.powerSlider.node.active = isSelfTurn;
          this.powerSlider.progress = 0.0;
          this.cue.parent.setPosition(this.whiteBall.position);
          this.cue.setPosition(this._cueOffset.x, this._cueOffset.y, this._cueOffset.z);
          if (BilliardsGameMgr.inst.gameData && BilliardsGameMgr.inst.cueDir) {
            this._cueRot.set(BilliardsGameMgr.inst.cueDir);
            this.cue.parent.eulerAngles = this._cueRot;
          } else {
            this._cueRot.set(this.cue.parent.eulerAngles);
          }
          this.directionSlider.node.active = isSelfTurn;
          this.directionSlider.progress = 0.5;
          //this.hitButton.node.active = isSelfTurn;
        };

        _proto.onEvent_HitBall = function onEvent_HitBall(hitImpulse, order) {
          var _this3 = this;
          if (BilliardsGameMgr.inst.isMyTurn) {
            return;
          }
          this._currentHitOrder = order;
          this.clearPhysicsState();
          var hit = tween(this.cue).call(function () {
            _this3.doHitBall(hitImpulse);
          });
          tween(this.cue).to(0.1, {
            position: this._hitOffset
          }, {
            easing: 'cubicIn'
          }).then(hit).start();
        };
        _proto.getNextTurnPlayer = function getNextTurnPlayer() {
          var playerList = BilliardsGameMgr.inst.gameData.players;
          for (var i = 0; i < playerList.length; ++i) {
            var p = playerList[i];
            if (p.uid == BilliardsGameMgr.inst.gameData.currentPlayer) {
              var nextIdx = (i + 1) % playerList.length;
              var _p = playerList[nextIdx];
              return _p.uid;
            }
          }
          return playerList[0].uid;
        };
        _proto.doHitBall = function doHitBall(hitImpulse) {
          /*
          //we should reset the physics engine and rebuild the physics objects in online mode.
          if (BilliardsGameMgr.inst.gameData) {
              let t = Date.now();
              let cur = physics.selector.id;
              physics.selector.switchTo('builtin');
              physics.selector.switchTo(cur);
              let cost = Date.now() - t;
              console.log('restart physics engine:' + cost + 'ms');
                t = Date.now();
              this.resetBalls(BilliardsGameMgr.inst.gameData.ballsData);
              this.table.destroy();
              this.table = instantiate(this.tablePrefab);
              director.getScene().addChild(this.table);
              cost = Date.now() - t;
              console.log('recreate physics objects:' + cost + 'ms');
          }
          */
          if (RoomMgr.inst.isOnline) {
            this.doBallsDataSync(BilliardsGameMgr.inst.gameData.ballsData);
          }
          this.cue.active = false;
          this.powerSlider.node.active = false;
          this.directionSlider.node.active = false;
          var impulse = new Vec3(hitImpulse.x, 0, hitImpulse.z);
          if (!RoomMgr.inst.isOnline || BilliardsGameMgr.inst.isMyTurn) {
            this.whiteBall.getComponent(RigidBody).applyImpulse(impulse);
            FixedPhysics.reset();
            this._needUpdatePhysics = true;
          }
          var volume = impulse.length() / MAX_HIT_STRENGTH;
          AudioPlayer.playOneShot('sounds/cue_hit', volume);
        };
        _proto.checkGameOver = function checkGameOver() {
          var pocketedNum = 0;
          for (var i = 1; i < this._allBalls.length; ++i) {
            if (this._allBalls[i].active == false) {
              pocketedNum++;
            }
          }
          return pocketedNum >= MAX_BALL_NUM - 1;
        };
        _proto.clearPhysicsState = function clearPhysicsState() {
          this.whiteBall.getComponent(RigidBody).clearState();
          for (var i = 0; i < this.beHitBalls.children.length; ++i) {
            var rg = this.beHitBalls.children[i].getComponent(RigidBody).clearState();
          }
          PhysicsSystem.instance.physicsWorld.syncSceneToPhysics();
        };
        _proto.setBallData = function setBallData(i, data) {
          var ball = this._allBalls[i];
          var x = data.ballsPosData[i * 3];
          var y = data.ballsPosData[i * 3 + 1];
          var z = data.ballsPosData[i * 3 + 2];
          ball.setWorldPosition(x, y, z);
          var rx = data.ballsQuatData[i * 4];
          var ry = data.ballsQuatData[i * 4 + 1];
          var rz = data.ballsQuatData[i * 4 + 2];
          var rw = data.ballsQuatData[i * 4 + 3];
          ball.setWorldRotation(rx, ry, rz, rw);
          if (BilliardsGameMgr.inst.isPocketed(i)) {
            ball.active = false;
          }
        };
        _proto.doBallsDataSync = function doBallsDataSync(data) {
          for (var i = 0; i < MAX_BALL_NUM; ++i) {
            this.setBallData(i, data);
          }
        }

        //#region 同步球杆的位置和方向
        ;

        _proto.onEvent_CueChanged = function onEvent_CueChanged(data) {
          if (BilliardsGameMgr.inst.isMyTurn) {
            return;
          }
          if (data.power) {
            this.cue.setPosition(data.power);
          }
          if (data.direction) {
            this.cue.parent.eulerAngles = data.direction;
          }
        };
        _proto.update = function update(dt) {
          this._lastSyncTime += dt;
          if (this._lastSyncTime > 0.1) {
            if (this._cueSyncData) {
              BilliardsGameMgr.inst.sendMsg_AdjustCue(this._cueSyncData);
              this._cueSyncData = null;
            }
            this._lastSyncTime = 0;
          }
        };
        _proto.onEvent_PostUpdate = function onEvent_PostUpdate() {
          if (this._needUpdatePhysics) {
            FixedPhysics.fixedUpdate(this._fixedDt);
            if (!this._isGameOver) {
              var isGameOver = this.checkGameOver();
              if (RoomMgr.inst.isOnline) {
                var data = this.getSyncData(false);
                data.newPocketedBalls = this._newPocketedBallIds;
                this._newPocketedBallIds = [];
                if (isGameOver) {
                  data.gameOver = true;
                }
                BilliardsGameMgr.inst.sendMsg_BallsDataSync(data);
              } else if (isGameOver) {
                tgx.UIAlert.show('你赢了，再来一局？', true).onClick(function (b) {
                  if (b) {
                    tgx.SceneUtil.reloadScene();
                  } else {
                    RoomMgr.inst.exitRoom();
                  }
                });
              }
              this._isGameOver = isGameOver;
            }
          }
          if (BallCollision.collideWithBalls > 0) {
            AudioPlayer.playOneShot('sounds/ball_hit_ball', BallCollision.collideWithBalls / 100.0);
          }
          BallCollision.collideWithBalls = 0.0;
        };
        return BilliardTableControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "powerSlider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "directionSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hitButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "whiteBall", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "indicatorWhiteBall", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "beHitBalls", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ballPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tablePrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "table", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "hitIndicator", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pocketedBalls", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FixedPhysics.ts", ['cc'], function (exports) {
  var cclegacy, PhysicsSystem, director, Director;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      PhysicsSystem = module.PhysicsSystem;
      director = module.director;
      Director = module.Director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ffe25vEeDFNrLQL+yqVEDRl", "FixedPhysics", undefined);
      var subStepCount = 0;
      var accumulator = 0;
      var postUpdateStepCount = 0;
      var maxSubSteps = 5;
      var MAX_STEPS = 600;
      var FixedPhysics = exports('FixedPhysics', /*#__PURE__*/function () {
        function FixedPhysics() {}
        FixedPhysics.reset = function reset() {
          subStepCount = 0;
          accumulator = 0;
          postUpdateStepCount = 0;
          PhysicsSystem.instance.autoSimulation = false;
          PhysicsSystem.instance.fixedTimeStep = 0.01;
          PhysicsSystem.instance.maxSubSteps = 5;
        };
        FixedPhysics.fixedUpdate = function fixedUpdate(dt) {
          if (!PhysicsSystem.instance.physicsWorld) return;
          if (!PhysicsSystem.instance.enable) {
            PhysicsSystem.instance.physicsWorld.syncSceneToPhysics();
            return;
          }
          subStepCount = 0;
          accumulator += dt;
          director.emit(Director.EVENT_BEFORE_PHYSICS);
          while (subStepCount < maxSubSteps) {
            if (postUpdateStepCount < MAX_STEPS && accumulator >= PhysicsSystem.instance.fixedTimeStep) {
              PhysicsSystem.instance.physicsWorld.syncSceneToPhysics();
              PhysicsSystem.instance.physicsWorld.step(PhysicsSystem.instance.fixedTimeStep);
              PhysicsSystem.instance.physicsWorld.emitEvents();
              PhysicsSystem.instance.physicsWorld.syncAfterEvents();
              accumulator -= PhysicsSystem.instance.fixedTimeStep;
              subStepCount++;
              postUpdateStepCount++;
            } else {
              PhysicsSystem.instance.physicsWorld.syncSceneToPhysics();
              break;
            }
          }
          if (postUpdateStepCount === MAX_STEPS) {
            director.emit(FixedPhysics.EVENT_UPDATE_FINISHED);
          }
          director.emit(Director.EVENT_AFTER_PHYSICS);
        };
        return FixedPhysics;
      }());
      FixedPhysics.EVENT_UPDATE_FINISHED = 'FixedPhysics.EVENT_UPDATE_FINISHED';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GConst.ts", ['cc'], function (exports) {
  var cclegacy, Color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4b213dcoDhOaJRjAaCSeBSA", "GConst", undefined);

      //储存与 ui 布局相关的常量，比如资源路径、节点路径、颜色配置
      var GameConst = exports('default', {
        MAX_FPS: 45,
        //预制体资源路径
        resUrl: {
          joinRoom: 'prefabs/joinRoom',
          userCenter: "prefabs/userCenter",
          gameRoom: "prefabs/gameRoom"
        },
        loginMgrChildUrl: {
          title: 'Label Title',
          tips: 'Label Tips',
          inputUserName: 'Input UserName',
          inputPassWord: 'Input PassWord',
          switchTypeBtnLabel: 'Btn SwitchType/Background/Label'
        },
        hallMgrChildUrl: {
          hallMgr: 'HallMgr',
          title: 'Label Title',
          roomBtns: 'RoomBtns'
        },
        joinRoomMgrChildUrl: {
          joinMgr: 'JoinMgr',
          inputRoom: 'Input RoomNumber'
        },
        //颜色配置数组
        colorList: [Color.CYAN, Color.GREEN, Color.MAGENTA, Color.GRAY, Color.RED, Color.YELLOW],
        hitBallNodeName: "whiteball"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GEnum.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17b7eBYTPtJSqCYsrbFDEBM", "GEnum", undefined);
      var GameEnum = exports('default', {
        pageFlag: Enum({
          common_Problem: 0,
          tchnical_Proposal: 1,
          tools_Techniques: 2
        }),
        level: Enum({
          normal: 0,
          hight: 1
        }),
        viewType: Enum({
          icon: 0,
          table: 1
        }),
        userActionType: Enum({
          register: 0,
          login: 1
        }),
        ColliderGroup: Enum({
          DEFAULT: 0,
          HOLE: 2,
          BALL: 4
        })
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HitIndicator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "25780MKWLJFppktuJjAvyGk", "HitIndicator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HitIndicator = exports('HitIndicator', (_dec = ccclass('HitIndicator'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HitIndicator, _Component);
        function HitIndicator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hitLine", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballLine", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "whiteLine", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HitIndicator.prototype;
        _proto.onLoad = function onLoad() {
          this.hideAll();
        };
        _proto.hideAll = function hideAll() {
          this.hitLine.active = false;
          this.ballLine.active = false;
          this.whiteLine.active = false;
        };
        _proto.setHitLine = function setHitLine(rotY, start, len) {
          this.setLine(this.hitLine, rotY, start, len);
        };
        _proto.setBallLine = function setBallLine(rotY, start, len) {
          this.setLine(this.ballLine, rotY, start, len);
        };
        _proto.setWhiteLine = function setWhiteLine(rotY, start, len) {
          this.setLine(this.whiteLine, rotY, start, len);
        };
        _proto.setLine = function setLine(node, rotY, start, len) {
          node.active = true;
          node.setRotationFromEuler(0, rotY, 0);
          node.setPosition(start);
          var c = node.children[0];
          c.setScale(len, 1, 1);
          c.setPosition(len / 2 - 0.5, 0, 0);
        };
        _proto.update = function update(deltaTime) {};
        return HitIndicator;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hitLine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ballLine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "whiteLine", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_billiards", ['./BallCollision.ts', './BilliardTableControl.ts', './HitIndicator.ts', './PocketTrigger.ts', './PocktedBalls.ts', './AudioPlayer.ts', './BallUVSetter.ts', './BilliardsGameHUD.ts', './BilliardsGameMgr.ts', './BilliardsLobbyScene.ts', './FixedPhysics.ts', './GConst.ts', './GEnum.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PocketTrigger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GEnum.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider, director, Component, GameEnum;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider = module.Collider;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      GameEnum = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "144bdjqVxpE/4B70yUNwsaP", "PocketTrigger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PocketTrigger = exports('PocketTrigger', (_dec = ccclass('PocketTrigger'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PocketTrigger, _Component);
        function PocketTrigger() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = PocketTrigger.prototype;
        //#region 组件第一次激活前执行，也就是第一次执行 update 之前触发
        _proto.start = function start() {
          this.initListener();
        }
        //#endregion

        //#region 初始化碰撞发生的监听
        ;

        _proto.initListener = function initListener() {
          this.getComponent(Collider).on("onTriggerEnter", this.onTriggerEnter);
        }
        //#endregion

        //#region 碰撞发生时执行的回调
        ;

        _proto.onTriggerEnter = function onTriggerEnter(triggerEvent) {
          console.log("adfsadf");
          if (triggerEvent.otherCollider.getGroup() === GameEnum.ColliderGroup.BALL) {
            var ballCollider = triggerEvent.otherCollider;
            director.emit(PocketTrigger.EVENT_HIT_POCKET, ballCollider.node);
          }
        };
        return PocketTrigger;
      }(Component), _class2.EVENT_HIT_POCKET = 'PocketTrigger.hit_pocket', _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PocktedBalls.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BilliardsGameMgr.ts', './BallUVSetter.ts', './UserMgr.ts', './RoomMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, instantiate, Component, BilliardsGameMgr, BilliardsGameEvent, BallUVSetter, UserMgr, RoomMgr;
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
      director = module.director;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      BilliardsGameMgr = module.BilliardsGameMgr;
      BilliardsGameEvent = module.BilliardsGameEvent;
    }, function (module) {
      BallUVSetter = module.BallUVSetter;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "de46e7gvhxGm4KRfQY/XOEt", "PocktedBalls", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PocktedBalls = exports('PocktedBalls', (_dec = ccclass('PocktedBalls'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PocktedBalls, _Component);
        function PocktedBalls() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "leftPlayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightPlayer", _descriptor2, _assertThisInitialized(_this));
          _this._prefab = void 0;
          return _this;
        }
        var _proto = PocktedBalls.prototype;
        _proto.start = function start() {
          this._prefab = this.leftPlayer.children[0];
          this.leftPlayer.active = false;
          this.rightPlayer.active = false;
          if (RoomMgr.inst.isOnline && BilliardsGameMgr.inst.gameData) {
            if (BilliardsGameMgr.inst.leftUserId) {
              this.initPocketedBalls(BilliardsGameMgr.inst.leftUserId, this.leftPlayer, false);
            }
            if (BilliardsGameMgr.inst.rightUserId) {
              this.initPocketedBalls(BilliardsGameMgr.inst.rightUserId, this.rightPlayer, true);
            }
          } else {
            this.initPocketedBalls(UserMgr.inst.uid, this.leftPlayer, false);
          }
          director.on(BilliardsGameEvent.PLAYER_DATA_CHANGED, this.onEvent_PlayerDataChanged, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(BilliardsGameEvent.PLAYER_DATA_CHANGED, this.onEvent_PlayerDataChanged, this);
        };
        _proto.onEvent_PlayerDataChanged = function onEvent_PlayerDataChanged(msg) {
          var player = BilliardsGameMgr.inst.getPlayer(msg.uid);
          if (player && player.pocketedBalls) {
            var root = this.leftPlayer;
            var isRight = msg.uid == BilliardsGameMgr.inst.rightUserId;
            if (isRight) {
              root = this.rightPlayer;
            }
            for (var i = root.children.length; i < player.pocketedBalls.length; ++i) {
              this.addPocketedBall(player.pocketedBalls[i], root, isRight);
            }
          }
        };
        _proto.onPocket = function onPocket(uid, ballId) {
          if (uid == BilliardsGameMgr.inst.leftUserId || uid == UserMgr.inst.uid) {
            this.addPocketedBall(ballId, this.leftPlayer, false);
          } else {
            this.addPocketedBall(ballId, this.rightPlayer, true);
          }
        };
        _proto.initPocketedBalls = function initPocketedBalls(uid, root, isRight) {
          root.active = true;
          root.removeAllChildren();
          var player = BilliardsGameMgr.inst.getPlayer(uid);
          if (player && player.pocketedBalls) {
            for (var i = 0; i < player.pocketedBalls.length; ++i) {
              this.addPocketedBall(player.pocketedBalls[i], root, isRight);
            }
          }
        };
        _proto.addPocketedBall = function addPocketedBall(ballId, root, isRight) {
          var size = this._prefab.worldScale.x;
          var gap = size / 10;
          var signX = isRight ? -1 : 1;
          var pocketedBall = instantiate(this._prefab);
          var index = root.children.length;
          root.addChild(pocketedBall);
          pocketedBall.getComponent(BallUVSetter).ballId = ballId;
          pocketedBall.setPosition(signX * (size * index + gap * index), 0, 0);
        };
        _proto.update = function update(deltaTime) {};
        return PocktedBalls;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_billiards', 'chunks:///_virtual/module_billiards'); 
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