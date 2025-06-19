System.register("chunks:///_virtual/GomokuAI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GomokuGameMgr.ts', './RoomMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component, GomokuGameEvent, GomokuGameMgr, RoomMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      GomokuGameEvent = module.GomokuGameEvent;
      GomokuGameMgr = module.GomokuGameMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2d187RL2/lGubUmBRydfnd/", "GomokuAI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GomokuAI = exports('GomokuAI', (_dec = ccclass('GomokuAI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GomokuAI, _Component);
        function GomokuAI() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = GomokuAI.prototype;
        _proto.start = function start() {
          director.on(GomokuGameEvent.TURN_PLAYER_CHANGED, this.onEvent_TurnPlayerChanged, this);
          director.on(GomokuGameEvent.PLACE_PIECE, this.onCheckResult, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(GomokuGameEvent.TURN_PLAYER_CHANGED, this.onEvent_TurnPlayerChanged, this);
          director.off(GomokuGameEvent.PLACE_PIECE, this.onCheckResult, this);
        };
        _proto.onEvent_TurnPlayerChanged = function onEvent_TurnPlayerChanged() {
          var aiThinkingTime = 1.0;
          this.scheduleOnce(this.onAIPlay.bind(this), aiThinkingTime);
        };
        _proto.onAIPlay = function onAIPlay() {
          if (GomokuGameMgr.inst.gameData.currentPlayer == 'ai') {
            var aigrid = GomokuGameMgr.inst.boardMgr.getBestPlaceGrid(2);
            var playerGrid = GomokuGameMgr.inst.boardMgr.getBestPlaceGrid(1);
            var info = aigrid;
            if (playerGrid.score >= aigrid.score) {
              //防守
              info = playerGrid;
            }
            GomokuGameMgr.inst.boardMgr.setGrid(info.gridX, info.gridY, 2);
            var msg = {
              uid: GomokuGameMgr.inst.gameData.currentPlayer,
              gridX: info.gridX,
              gridY: info.gridY,
              value: 2
            };
            director.emit(GomokuGameEvent.PLACE_PIECE, msg);
            GomokuGameMgr.inst.changeTurnPlayer();
          }
        };
        _proto.onCheckResult = function onCheckResult(data) {
          var v = GomokuGameMgr.inst.boardMgr.getGridData(data.gridX, data.gridY);
          var isWin = GomokuGameMgr.inst.boardMgr.checkWin(data.gridX, data.gridY, v);
          if (isWin) {
            var fnAlertClick = function fnAlertClick(bOK) {
              if (bOK) {
                GomokuGameMgr.inst.initAIMode();
                tgx.SceneUtil.reloadScene();
              } else {
                RoomMgr.inst.exitRoom();
              }
            };
            if (v == 1) {
              tgx.UIAlert.show('你赢了! 再来一局？', true).onClick(fnAlertClick);
            } else {
              tgx.UIAlert.show('你输了! 再来一局？', true).onClick(fnAlertClick);
            }
          }
        };
        _proto.update = function update(deltaTime) {};
        return GomokuAI;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GomokuDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "516d96/ohRAxKwxPD7qtEvH", "GomokuDef", undefined);
      var ConstantDef = exports('ConstantDef', function ConstantDef() {
        this.GRID_SIZE = 1.25;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GomokuGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './GomokuGameMgr.ts', './GamePlayerInfo.ts', './UIChat.ts', './RoomMgr.ts', './NetGameServer.ts', './SubGameMessage.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Button, Node, director, Component, Sprite, instantiate, UserMgr, SceneDef, GomokuGameMgr, GomokuGameEvent, GamePlayerInfo, UIChat, RoomMgr, GameMode, RoomEvent, gameNet, SubGameMessage;
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
      GomokuGameMgr = module.GomokuGameMgr;
      GomokuGameEvent = module.GomokuGameEvent;
    }, function (module) {
      GamePlayerInfo = module.GamePlayerInfo;
    }, function (module) {
      UIChat = module.UIChat;
    }, function (module) {
      RoomMgr = module.RoomMgr;
      GameMode = module.GameMode;
      RoomEvent = module.RoomEvent;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "98a35l9iWNL3rj2I9KJ7/07", "GomokuGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GomokuGameHUD = exports('GomokuGameHUD', (_dec = ccclass('GomokuGameHUD'), _dec2 = property(GamePlayerInfo), _dec3 = property(GamePlayerInfo), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GomokuGameHUD, _Component);
        function GomokuGameHUD() {
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
        var _proto = GomokuGameHUD.prototype;
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
        };
        _proto.reStart = function reStart() {
          RoomMgr.inst.rpc_ClientReady();
        };
        _proto.onRoomBackByRoomMgr = function onRoomBackByRoomMgr() {
          if (RoomMgr.inst.isOnline) {
            this.lblRoomId.string = RoomMgr.inst.data.displayId || '';
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
        //#endregion

        //#region 用户信息初始化
        ;

        _proto.initUser = function initUser() {
          if (RoomMgr.inst.isOnline) {
            this.leftPlayer.setUserId(GomokuGameMgr.inst.leftUserId);
            this.rightPlayer.setUserId(GomokuGameMgr.inst.rightUserId);
            var u = RoomMgr.inst.selfUser;
            this.btnReady.node.active = u && u.playerId && !u.ready;
          } else {
            this.btnReady.node.active = false;
            this.leftPlayer.setUserId(UserMgr.inst.uid);
            if (RoomMgr.inst.gameMode == GameMode.AI) {
              this.rightPlayer.setAILevel(0);
            } else {
              this.rightPlayer.node.active = false;
            }
          }
        }
        //#endregion

        //#region 开始注册监听事件
        ;

        _proto.initEventListener = function initEventListener() {
          director.on(GomokuGameEvent.TURN_PLAYER_CHANGED, this.updateCtrlUI, this);
          director.on(RoomEvent.NEW_USER_COMES, this.onNewUserComes, this);
          director.on(RoomEvent.USER_DATA_CHANGED, this.onUserDataChanged, this);
          director.on(RoomEvent.USER_LEAVES, this.onUserLeaves, this);
          director.on(RoomEvent.WATCHER_LIST_CHANGED, this.initWatcherList, this);
          director.on(GomokuGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
          director.on(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(GomokuGameEvent.TURN_PLAYER_CHANGED, this.updateCtrlUI, this);
          director.off(RoomEvent.NEW_USER_COMES, this.onNewUserComes, this);
          director.off(RoomEvent.USER_DATA_CHANGED, this.onUserDataChanged, this);
          director.off(RoomEvent.USER_LEAVES, this.onUserLeaves, this);
          director.off(RoomEvent.WATCHER_LIST_CHANGED, this.initWatcherList, this);
          director.off(GomokuGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
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
        _proto.onUserDataChanged = function onUserDataChanged(data) {
          this.initUser();
          if (data.isPlayer !== undefined) {
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
          } else if (RoomMgr.inst.isWatcher) {
            this.tips.string = '观战中...';
          } else if (RoomMgr.inst.data.playerNum < 2) {
            this.tips.string = '等待对手加入...';
          } else if (GomokuGameMgr.inst.isMyTurn) {
            this.tips.string = '该你落子...';
          } else {
            this.tips.string = '对手落子...';
          }
        };
        _proto.onBtnExitClicked = /*#__PURE__*/function () {
          var _onBtnExitClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!RoomMgr.inst.isOnline) {
                    tgx.UIAlert.show('球局未结束，确定离开吗？', true).onClick(function (ok) {
                      if (ok) {
                        RoomMgr.inst.exitRoom();
                      }
                    });
                  } else {
                    if (RoomMgr.inst.isPlayer && RoomMgr.inst.isPlaying) {
                      tgx.UIAlert.show('确定要认输并退出吗？', true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ok) {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              if (ok) {
                                RoomMgr.inst.exitRoom();
                              }
                            case 1:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      })));
                    } else {
                      RoomMgr.inst.exitRoom();
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
        return GomokuGameHUD;
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

System.register("chunks:///_virtual/GomokuGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './UserMgr.ts', './GomokuBoardMgr.ts', './NetGameServer.ts', './RoomMgr.ts', './SubGameDef.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, GameMode, GameMgr, SubGameMgr, UserMgr, GomokuBoardMgr, gameNet, RoomMgr, SubGameDef, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      GameMode = module.GameMode;
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      GomokuBoardMgr = module.GomokuBoardMgr;
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
      cclegacy._RF.push({}, "a9a43PJJlBKa4KibaJGYZGJ", "GomokuGameMgr", undefined);
      var GomokuGameEvent = exports('GomokuGameEvent', function GomokuGameEvent() {});
      GomokuGameEvent.ROOM_PUSH = 'GomokuGameEvent.ROOM_PUSH';
      GomokuGameEvent.TURN_PLAYER_CHANGED = 'GomokuGameEvent.TURN_PLAYER_CHANGED';
      GomokuGameEvent.PLAYER_COMES = 'GomokuGameEvent.PLAYER_COMES';
      GomokuGameEvent.PLAYER_LEAVES = 'GomokuGameEvent.PLAYER_LEAVES';
      GomokuGameEvent.GAME_BEGIN = 'GomokuGameEvent.GAME_BEGIN';
      GomokuGameEvent.GAME_OVER = 'GomokuGameEvent.GAME_OVER';
      GomokuGameEvent.PLACE_PIECE = 'GomokuGameEvent.PLACE_PIECE';
      var GomokuGameMgr = exports('GomokuGameMgr', /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(GomokuGameMgr, _GameMgr);
        function GomokuGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameData = void 0;
          _this._boardMgr = new GomokuBoardMgr();
          _this._gameType = SubGameDef.GOMOKU;
          _this._entryScene = {
            name: 'lobby_gomoku',
            bundle: ModuleDef.GOMOKU
          };
          _this._gameScene = {
            name: 'game_gomoku',
            bundle: ModuleDef.GOMOKU
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = GomokuGameMgr.prototype;
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg("gomoku/GameDataSyncPush", this.onNet_GameDataSyncPush, this);
          gameNet.listenMsg("gomoku/GameDataChangedPush", this.onNet_GameDataChangedPush, this);
          gameNet.listenMsg("gomoku/PlayerComesPush", this.onNet_PlayerComesPush, this);
          gameNet.listenMsg("gomoku/PlayerDataChangedPush", this.onNet_PlayerDataChangedPush, this);
          gameNet.listenMsg("gomoku/PlayerLeavesPush", this.onNet_PlayerLeavesPush, this);
          gameNet.listenMsg("gomoku/GameBeginPush", this.onNet_GameBeginPush, this);
          gameNet.listenMsg("gomoku/GameOverPush", this.onNet_GameOverPush, this);
          gameNet.listenMsg("gomoku/PlacePiecePush", this.onNet_PlacePiecePush, this);
        };
        _proto.reset = function reset() {
          _GameMgr.prototype.reset.call(this);
        };
        _proto.initAIMode = function initAIMode() {
          SubGameMgr.gameMgr = this;
          RoomMgr.inst.initAIMode('gomoku', [{
            uid: UserMgr.inst.uid,
            ready: true,
            playerId: 1
          }, {
            uid: 'ai',
            ready: true,
            playerId: 2
          }]);
          this._gameData = {
            players: [{
              uid: UserMgr.inst.uid,
              color: 'black'
            }, {
              uid: 'ai',
              color: 'white'
            }],
            currentPlayer: UserMgr.inst.uid
          };
          this._boardMgr.reset();
        };
        _proto.changeTurnPlayer = function changeTurnPlayer() {
          if (RoomMgr.inst.gameMode != GameMode.AI) {
            return;
          }
          if (this._gameData.currentPlayer == this._gameData.players[0].uid) {
            this._gameData.currentPlayer = this.gameData.players[1].uid;
          } else {
            this._gameData.currentPlayer = this.gameData.players[0].uid;
          }
          director.emit(GomokuGameEvent.TURN_PLAYER_CHANGED, this._gameData.currentPlayer);
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
        _proto.rpc_PlacePiece = /*#__PURE__*/function () {
          var _rpc_PlacePiece = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(gridX, gridY) {
            var v, msg;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(RoomMgr.inst.gameMode == GameMode.AI)) {
                    _context.next = 9;
                    break;
                  }
                  v = 1;
                  this._boardMgr.setGrid(gridX, gridY, v);
                  msg = {
                    uid: GomokuGameMgr.inst.gameData.currentPlayer,
                    gridX: gridX,
                    gridY: gridY,
                    value: v
                  };
                  director.emit(GomokuGameEvent.PLACE_PIECE, msg);
                  this.changeTurnPlayer();
                  return _context.abrupt("return", {
                    isSucc: true,
                    err: null
                  });
                case 9:
                  _context.next = 11;
                  return gameNet.callApi("gomoku/PlacePiece", {
                    gridX: gridX,
                    gridY: gridY
                  });
                case 11:
                  return _context.abrupt("return", _context.sent);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function rpc_PlacePiece(_x, _x2) {
            return _rpc_PlacePiece.apply(this, arguments);
          }
          return rpc_PlacePiece;
        }() // ============= MESSAGE HANDLER ============
        /**
         * This message will arrive before login result.
         * 这个消息会在登录成功返回之前收到。
        */;

        _proto.onNet_GameDataSyncPush = function onNet_GameDataSyncPush(msg) {
          this._gameData = msg.data;
          this._boardMgr.gridData = this._gameData.boardData;
          director.emit(GomokuGameEvent.ROOM_PUSH);
        };
        _proto.onNet_GameDataChangedPush = function onNet_GameDataChangedPush(msg) {
          if (!this._gameData) {
            return;
          }
          if (msg.currentPlayer !== undefined) {
            this._gameData.currentPlayer = msg.currentPlayer;
            director.emit(GomokuGameEvent.TURN_PLAYER_CHANGED, msg.currentPlayer);
          }
          if (msg.boardData !== undefined) {
            this._gameData.boardData = msg.boardData;
          }
        };
        _proto.onNet_PlayerComesPush = function onNet_PlayerComesPush(msg) {
          this._gameData.players.push(msg.player);
          director.emit(GomokuGameEvent.PLAYER_COMES, msg.player);
        };
        _proto.onNet_PlayerDataChangedPush = function onNet_PlayerDataChangedPush(msg) {
          var p = this.getPlayer(msg.uid);
          if (!p) {
            return;
          }
          if (msg.color != undefined) {
            p.color = msg.color;
          }
        };
        _proto.onNet_PlayerLeavesPush = function onNet_PlayerLeavesPush(msg) {
          for (var i = 0; i < this._gameData.players.length; ++i) {
            var p = this._gameData.players[i];
            if (p.uid == msg.uid) {
              this._gameData.players.splice(i, 1);
              director.emit(GomokuGameEvent.PLAYER_LEAVES, msg.uid);
              break;
            }
          }
        };
        _proto.onNet_GameBeginPush = function onNet_GameBeginPush(msg) {
          if (!this._gameData) {
            return;
          }
          this._boardMgr.reset();
          this._gameData.players.forEach(function (v) {
            v.color = '';
          });
          director.emit(GomokuGameEvent.GAME_BEGIN);
        };
        _proto.onNet_GameOverPush = function onNet_GameOverPush(msg) {
          director.emit(GomokuGameEvent.GAME_OVER, msg);
        };
        _proto.onNet_PlacePiecePush = function onNet_PlacePiecePush(msg) {
          this._boardMgr.setGrid(msg.gridX, msg.gridY, msg.value);
          director.emit(GomokuGameEvent.PLACE_PIECE, msg);
        };
        _createClass(GomokuGameMgr, [{
          key: "gameData",
          get: function get() {
            return this._gameData;
          }
        }, {
          key: "boardMgr",
          get: function get() {
            return this._boardMgr;
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
              this._inst = new GomokuGameMgr();
            }
            return this._inst;
          }
        }]);
        return GomokuGameMgr;
      }(GameMgr));
      GomokuGameMgr._inst = void 0;
      SubGameMgr.inst.registerGameMgr(GomokuGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GomokuGameplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EasyController.ts', './GomokuGameMgr.ts', './UserMgr.ts', './SceneUtils.ts', './GameMgr.ts', './GomokuAI.ts', './RoomMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v2, geometry, Node, Material, instantiate, MeshRenderer, director, Component, find, Camera, v3, EasyController, EasyControllerEvent, GomokuGameEvent, GomokuGameMgr, UserMgr, SceneUtil, GameMode, GomokuAI, RoomMgr;
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
      v2 = module.v2;
      geometry = module.geometry;
      Node = module.Node;
      Material = module.Material;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
      director = module.director;
      Component = module.Component;
      find = module.find;
      Camera = module.Camera;
      v3 = module.v3;
    }, function (module) {
      EasyController = module.EasyController;
      EasyControllerEvent = module.EasyControllerEvent;
    }, function (module) {
      GomokuGameEvent = module.GomokuGameEvent;
      GomokuGameMgr = module.GomokuGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneUtil = module.SceneUtil;
    }, function (module) {
      GameMode = module.GameMode;
    }, function (module) {
      GomokuAI = module.GomokuAI;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "9b3c1bgJFRPYoUClvsBL/sy", "GomokuGameplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tmpV2 = v2();
      var tmpRay = new geometry.Ray();
      var gridPlane = new geometry.Plane(0, 1, 0, -0.2);
      var GomokuGamePlay = exports('GomokuGamePlay', (_dec = ccclass('GomokuGamePlay'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Material), _dec6 = property(Material), _dec7 = property(Material), _dec8 = property(Material), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GomokuGamePlay, _Component);
        function GomokuGamePlay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._piecePool = [];
          _initializerDefineProperty(_this, "white", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "black", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pieceRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "matWhite", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "matWhiteHighlight", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "matBlack", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "matBlackHighlight", _descriptor7, _assertThisInitialized(_this));
          _this._touchStartTime = 0;
          _this._currentSide = 'black';
          _this._touchStartPoint = v2();
          _this._lastNewPiece = null;
          _this._lastNewPieceValue = 0;
          return _this;
        }
        var _proto = GomokuGamePlay.prototype;
        _proto.getFromPool = function getFromPool(v) {
          var node = this._piecePool.pop();
          if (!node) {
            node = instantiate(this.white);
          }
          var meshRenderer = node.getComponent(MeshRenderer);
          var mat = this.matBlack;
          if (v == 2) {
            mat = this.matWhite;
          }
          meshRenderer.setMaterial(mat, 0);
          return node;
        };
        _proto.putToPool = function putToPool(node) {
          if (!node) {
            return;
          }
          node.removeFromParent();
          this._piecePool.push(node);
        };
        _proto.start = function start() {
          this.putToPool(this.white);
          this.putToPool(this.black);
          EasyController.on(EasyControllerEvent.SCREEN_TOUCH_START, this.onTouchStart, this);
          EasyController.on(EasyControllerEvent.SCREEN_TOUCH_END, this.onTouchEnd, this);
          director.on(GomokuGameEvent.PLACE_PIECE, this.onPlacePiece, this);
          director.on(GomokuGameEvent.GAME_BEGIN, this.onGameBegin, this);
          director.on(GomokuGameEvent.GAME_OVER, this.onGameOver, this);
          director.on(GomokuGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
          this.cleanBoard();
          if (RoomMgr.inst.gameMode == GameMode.AI) {
            this.node.addComponent(GomokuAI);
          }
        };
        _proto.onDestroy = function onDestroy() {
          EasyController.off(EasyControllerEvent.SCREEN_TOUCH_START, this.onTouchStart, this);
          EasyController.off(EasyControllerEvent.SCREEN_TOUCH_END, this.onTouchEnd, this);
          director.off(GomokuGameEvent.PLACE_PIECE, this.onPlacePiece, this);
          director.off(GomokuGameEvent.GAME_BEGIN, this.onGameBegin, this);
          director.off(GomokuGameEvent.GAME_OVER, this.onGameOver, this);
          director.off(GomokuGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
        };
        _proto.onRoomBackByRoomMgr = function onRoomBackByRoomMgr() {
          this.initBoard();
        };
        _proto.onGameBegin = /*#__PURE__*/function () {
          var _onGameBegin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return SceneUtil.reloadScene();
                case 2:
                  this.scheduleOnce(function () {
                    tgx.UIAlert.show("游戏开始！");
                  }, 0.1);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onGameBegin() {
            return _onGameBegin.apply(this, arguments);
          }
          return onGameBegin;
        }();
        _proto.onGameOver = /*#__PURE__*/function () {
          var _onGameOver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
            var userInfo;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!RoomMgr.inst.isPlayer) {
                    _context2.next = 4;
                    break;
                  }
                  if (data.reason == 1) {
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
                  _context2.next = 8;
                  break;
                case 4:
                  _context2.next = 6;
                  return UserMgr.inst.rpc_GetUserInfo(data.winner);
                case 6:
                  userInfo = _context2.sent;
                  if (data.reason == 1) {
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
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function onGameOver(_x) {
            return _onGameOver.apply(this, arguments);
          }
          return onGameOver;
        }();
        _proto.initBoard = function initBoard() {
          this.cleanBoard();
          var sizeInGrid = GomokuGameMgr.inst.boardMgr.sizeInGrid;
          for (var i = 0; i < sizeInGrid; ++i) {
            for (var j = 0; j < sizeInGrid; ++j) {
              var v = GomokuGameMgr.inst.boardMgr.getGridData(i, j);
              if (v) {
                this.placePiece(i, j, v);
              }
            }
          }
        };
        _proto.onTouchStart = function onTouchStart(evt) {
          this._touchStartTime = Date.now();
          this._touchStartPoint.set(evt.touch.getLocation());
        };
        _proto.onTouchEnd = /*#__PURE__*/function () {
          var _onTouchEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(evt) {
            var dx, dy, camera, dist, point, grid, v, placeV, placer, pos, ret;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (RoomMgr.inst.data.isPlaying) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  dx = this._touchStartPoint.x - evt.touch.getLocationX();
                  dy = this._touchStartPoint.y - evt.touch.getLocationY();
                  /**
                   * @en if touch point has been moved or held more than 200 ms, ignore this to avoid mis-operation.
                   * @zh 如果触点有移动，或者按下时间超过200ms 则不走着子流程，防止误触
                  **/
                  if (!(dx * dx + dy * dy > 1 || Date.now() - this._touchStartTime > 200)) {
                    _context3.next = 6;
                    break;
                  }
                  return _context3.abrupt("return");
                case 6:
                  if (GomokuGameMgr.inst.isMyTurn) {
                    _context3.next = 8;
                    break;
                  }
                  return _context3.abrupt("return");
                case 8:
                  evt.getLocation(tmpV2);
                  console.log(tmpV2);
                  camera = find('Main Camera').getComponent(Camera);
                  camera.screenPointToRay(tmpV2.x, tmpV2.y, tmpRay);
                  dist = geometry.intersect.rayPlane(tmpRay, gridPlane);
                  point = v3();
                  tmpRay.computeHit(point, dist);

                  //let pos = GomokuGridMgr.inst.getNearestGridCenter(point.x, point.z);
                  grid = GomokuGameMgr.inst.boardMgr.posToGrid(point.x, point.z);
                  v = GomokuGameMgr.inst.boardMgr.getGridData(grid.x, grid.y);
                  if (!v) {
                    _context3.next = 19;
                    break;
                  }
                  return _context3.abrupt("return");
                case 19:
                  placeV = GomokuGameMgr.inst.selfPlayer.color == 'black' ? 1 : 2;
                  placer = this.getFromPool(placeV);
                  pos = GomokuGameMgr.inst.boardMgr.gridToPos(grid.x, grid.y);
                  placer.setPosition(pos.x, 0, pos.y);
                  _context3.next = 25;
                  return GomokuGameMgr.inst.rpc_PlacePiece(grid.x, grid.y);
                case 25:
                  ret = _context3.sent;
                  if (!ret.isSucc) {
                    tgx.UIAlert.show(ret.err.message);
                  }
                  this.putToPool(placer);
                case 28:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onTouchEnd(_x2) {
            return _onTouchEnd.apply(this, arguments);
          }
          return onTouchEnd;
        }();
        _proto.onPlacePiece = function onPlacePiece(data) {
          var v = GomokuGameMgr.inst.boardMgr.getGridData(data.gridX, data.gridY);
          var newPiece = this.placePiece(data.gridX, data.gridY, v);
          if (this._lastNewPiece) {
            var normalMat = this._lastNewPieceValue == 1 ? this.matBlack : this.matWhite;
            this._lastNewPiece.getComponent(MeshRenderer).setMaterial(normalMat, 0);
          }
          var highlightMat = v == 1 ? this.matBlackHighlight : this.matWhiteHighlight;
          newPiece.getComponent(MeshRenderer).setMaterial(highlightMat, 0);
          this._lastNewPiece = newPiece;
          this._lastNewPieceValue = v;
        };
        _proto.cleanBoard = function cleanBoard() {
          for (var i = this.pieceRoot.children.length - 1; i >= 0; --i) {
            this.putToPool(this.pieceRoot.children[i]);
          }
          this._lastNewPiece = null;
        };
        _proto.placePiece = function placePiece(gridX, gridY, v) {
          var node = this.getFromPool(v);
          var pos = GomokuGameMgr.inst.boardMgr.gridToPos(gridX, gridY);
          node.setPosition(pos.x, 0, pos.y);
          this.pieceRoot.addChild(node);
          return node;
        };
        _proto.randomLayPieceTest = function randomLayPieceTest() {
          for (var i = 0; i < 64; ++i) {
            for (var j = 0; j < 64; ++j) {
              var v = Math.floor(Math.random() * 3);
              GomokuGameMgr.inst.boardMgr.setGrid(i, j, v);
            }
          }
          for (var _i = 0; _i < 64; ++_i) {
            for (var _j = 0; _j < 64; ++_j) {
              var pos = GomokuGameMgr.inst.boardMgr.gridToPos(_i, _j);
              var _v = GomokuGameMgr.inst.boardMgr.getGridData(_i, _j);
              console.log(_v);
              if (_v != 0) {
                var prefab = this.black;
                if (_v == 2) {
                  prefab = this.white;
                }
                var node = instantiate(prefab);
                node.setPosition(pos.x, 0, pos.y);
                this.node.addChild(node);
              }
            }
          }
        };
        _proto.update = function update(deltaTime) {};
        return GomokuGamePlay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "white", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "black", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pieceRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "matWhite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "matWhiteHighlight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "matBlack", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "matBlackHighlight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GomokuLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneUtils.ts', './UserMgr.ts', './UI_SearchingRival.ts', './SceneDef.ts', './GomokuGameMgr.ts', './UICreateRoom.ts', './UIChat.ts', './UIAnnouncement.ts', './NetGameServer.ts', './UIRoomList.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, SceneUtil, UserMgr, UI_SearchingRival, SceneDef, GomokuGameMgr, UICreateRoom, UIChat, UIAnnouncement, lobbyNet, UIRoomList;
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
      GomokuGameMgr = module.GomokuGameMgr;
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
      cclegacy._RF.push({}, "fb4a3JxT6xEGoxXIHC0S17U", "GomokuLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GomokuLobbyScene = exports('GomokuLobbyScene', (_dec = ccclass('GomokuLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GomokuLobbyScene, _Component);
        function GomokuLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GomokuLobbyScene.prototype;
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
              ui.startMatch('gomoku');
            }, 1.5);
          });
        };
        _proto.onBtnRoomListClicked = function onBtnRoomListClicked() {
          tgx.UIMgr.inst.showUI(UIRoomList);
        };
        _proto.onBtnTraningModeClicked = function onBtnTraningModeClicked() {
          GomokuGameMgr.inst.initAIMode();
          tgx.SceneUtil.loadScene(GomokuGameMgr.inst.gameScene);
        };
        _proto.onBtnCreate = function onBtnCreate() {
          tgx.UIMgr.inst.showUI(UICreateRoom);
        };
        _proto.update = function update(deltaTime) {};
        return GomokuLobbyScene;
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

System.register("chunks:///_virtual/GomokuViewPlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "dea0dykKiFAi4nJsgTQdTc3", "GomokuViewPlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GomokuViewPlayer = exports('GomokuViewPlayer', (_dec = ccclass('GomokuViewPlayer'), _dec2 = property(tgx.CharacterMovement), _dec3 = property(tgx.ThirdPersonCameraCtrl), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GomokuViewPlayer, _Component);
        function GomokuViewPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "movement", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cameraCtrl", _descriptor2, _assertThisInitialized(_this));
          _this._originVelocity = 0;
          _this._originLen = 0;
          return _this;
        }
        var _proto = GomokuViewPlayer.prototype;
        _proto.start = function start() {
          this._originVelocity = this.movement.velocity;
          this._originLen = this.cameraCtrl.len;
        };
        _proto.update = function update(deltaTime) {
          this.movement.velocity = this.cameraCtrl.len / this._originLen * this._originVelocity;
        };
        return GomokuViewPlayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "movement", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cameraCtrl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_gomoku", ['./GomokuAI.ts', './GomokuGameHUD.ts', './GomokuGameplay.ts', './GomokuLobbyScene.ts', './GomokuViewPlayer.ts', './GomokuDef.ts', './GomokuGameMgr.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_gomoku', 'chunks:///_virtual/module_gomoku'); 
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