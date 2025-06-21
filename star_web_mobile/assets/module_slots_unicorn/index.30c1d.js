System.register("chunks:///_virtual/GameConst3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Enum, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Component = module.Component;
    }],
    execute: function () {
      exports('SlotUnicornData', void 0);
      cclegacy._RF.push({}, "9b99d1xliVE8Kt7JfJT3tpV", "GameConst", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotUnicornData;
      (function (_SlotUnicornData, _dec, _class, _class2) {
        var GameStatus = /*#__PURE__*/function (GameStatus) {
          GameStatus[GameStatus["start"] = 0] = "start";
          GameStatus[GameStatus["over"] = 1] = "over";
          return GameStatus;
        }({}); //游戏结束
        _SlotUnicornData.GameStatus = GameStatus;
        Enum(GameStatus);
        var MessgeDefine = {
          Request: {
            start: "startgame",
            selected: "selected"
          },
          Response: {
            GameScene: "slot_tiger_game_scene"
          }
        };
        var EventName = {
          "clickGameItem": "clickGameItem"
        };
        var Auto = {
          AutoIndex: [10, 30, 50, 100, 1000]
        };
        var cacheName = {
          betScore: '_betScore'
        };

        /**
         * 游戏静态常量
         */
        var GameConst = (_dec = ccclass('GameConst'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(GameConst, _Component);
          function GameConst() {
            return _Component.apply(this, arguments) || this;
          }
          return GameConst;
        }(Component), _class2.MessgeDefine = MessgeDefine, _class2.EventName = EventName, _class2.cacheName = cacheName, _class2.isEntryMini = false, _class2.Auto = Auto, _class2.autoCountIndex = 0, _class2.leftAutoCount = 0, _class2.reduceLabel = 0, _class2.addLabel = 0, _class2.winLabel = 0, _class2)) || _class);
        _SlotUnicornData.GameConst = GameConst;
      })(SlotUnicornData || (SlotUnicornData = exports('SlotUnicornData', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst3.ts', './UIManager2.ts', './UnicornGameItem.ts', './UnicornAniManager.ts', './UnicornPoolManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, UITransform, input, Input, randomRangeInt, Component, SlotUnicornData, SlotUnicorn$1, UnicornGameItem, UnicornAniManager, UnicornPoolManager;
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
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      input = module.input;
      Input = module.Input;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      SlotUnicornData = module.SlotUnicornData;
    }, function (module) {
      SlotUnicorn$1 = module.SlotUnicorn;
    }, function (module) {
      UnicornGameItem = module.UnicornGameItem;
    }, function (module) {
      UnicornAniManager = module.UnicornAniManager;
    }, function (module) {
      UnicornPoolManager = module.UnicornPoolManager;
    }],
    execute: function () {
      exports('SlotUnicorn', void 0);
      cclegacy._RF.push({}, "9c72fPEhINF2oY7HWqKccb7", "GameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotUnicorn;
      (function (_SlotUnicorn, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3) {
        //五条线的下标
        var AllLine = {
          1: [1, 1, 1],
          2: [0, 0, 0],
          3: [2, 2, 2],
          4: [0, 1, 2],
          5: [2, 1, 0]
        };

        /**
         * 游戏管理类
         */
        var GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property({
          type: UITransform,
          tooltip: "游戏的主节点"
        }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(GameManager, _Component);
          function GameManager() {
            var _this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
            _initializerDefineProperty(_this, "giftPrefab", _descriptor, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "elementPrefab", _descriptor2, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "gameMainTran", _descriptor3, _assertThisInitialized(_this));
            _this.betScore = [];
            _this.elementOdd = [];
            //不除100
            _this.lineCount = 0;
            _this.speed = 1;
            _this.gameStatus = SlotUnicornData.GameStatus.over;
            _this.miniElementId = 0;
            _this.isSpeed = false;
            return _this;
          }
          var _proto = GameManager.prototype;
          _proto.onLoad = function onLoad() {
            if (GameManager._instance) {
              this.node.destroy();
              return;
            }
            GameManager._instance = this;
            this.gameSetup();
          };
          _proto.onDestroy = function onDestroy() {
            GameManager._instance = null;
          };
          _proto.gameSetup = function gameSetup() {
            //适配
            // const v = view.getVisibleSize();
            // const scaleV = v.width / this.gameMainTran.height;
            // this.gameMainTran.node.scale = new Vec3(scaleV, scaleV, 1);
            // this.events.put(SlotUnicornData.GameConst.MessgeDefine.Response.GameScene + store.room.id, this.initGameScene.bind(this));

            input.on(Input.EventType.MOUSE_DOWN, this.touchStart, this);
            UnicornPoolManager.instance.createPool({
              prefab: this.elementPrefab,
              name: UnicornPoolManager.PoolsName.element,
              initCount: 20
            });
            UnicornPoolManager.instance.createPool({
              prefab: this.giftPrefab,
              name: UnicornPoolManager.PoolsName.giftEffect,
              initCount: 20
            });
          };
          _proto.startGame = function startGame() {
            this.initGameScene({
              betScore: [100, 200, 300, 400, 500, 600, 700, 800, 900],
              elementOdd: {
                101: 3,
                102: 5,
                103: 8,
                104: 10,
                105: 25,
                106: 100,
                201: 250
              },
              lineCount: 10,
              fakeMiniRate: 10,
              pointScores: [100, 300, 500, 700, 900, 1100],
              mainWheel: [{
                lineWheel: [101, 102, 103, 104, 105, 106, 105, 104, 103, 102, 101]
              }, {
                lineWheel: [101, 102, 103, 104, 105, 106, 105, 104, 103, 102, 101]
              }, {
                lineWheel: [101, 102, 103, 104, 105, 106, 105, 104, 103, 102, 101]
              }],
              miniWheel: [{
                lineWheel: [302, 302, 302, 302, 302, 302, 302, 302, 302, 302, 302]
              }, {
                lineWheel: [302, 302, 302, 302, 302, 302, 302, 302, 302, 302, 302]
              }, {
                lineWheel: [302, 302, 302, 302, 302, 302, 302, 302, 302, 302, 302]
              }]
            });
          };
          _proto.touchStart = function touchStart() {
            // event.preventSwallow = true;
            UnicornAniManager.instance.resetDowntime();
          };
          _proto.initGameScene = function initGameScene(res) {
            console.log('-----', res);
            this.betScore = res.betScore;
            this.elementOdd = res.elementOdd;
            this.lineCount = res.lineCount;
            SlotUnicorn$1.UIManager.instance.initUI();
          };
          _proto.reconnect = function reconnect() {
            SlotUnicorn$1.UIManager.instance.reconnect();
          }

          /**
           * 判断是否连成线，并且返回所有已连线编号。
           * 如果有已知连成线的编号则忽略该线
           * @param haveElement 竖向，元素编号位置是否已有
           * @param knownNo 已知已经连成线的编号
           */;
          _proto.getAllLineNo = function getAllLineNo(haveElement, knownNo) {
            var lineNo = [];
            for (var key in AllLine) {
              if (Object.prototype.hasOwnProperty.call(AllLine, key)) {
                // if (knownNo.includes(Number(key))) continue;
                var line = AllLine[key];
                var num = 0;
                for (var i = 0; i < line.length; i++) {
                  //i line中的第几列，line[i]第i列的行
                  //第i列的第n个元素是否已掉落
                  if (!haveElement[i][line[i]]) break;
                  num++;
                }
                if (num === 3) lineNo.push(Number(key));
              }
            }
            return lineNo;
          }

          /**
           * 获取连线对应的中奖下标
           * @param lineNo 
           * @returns 
           */;
          _proto.getLineNo = function getLineNo(lineNo) {
            return AllLine[lineNo];
          }

          /**
          * 把0的填充到已点亮下标
          */;
          _proto.zeroToList = function zeroToList(res) {
            var indexList = [];
            for (var k = 0; k < 3; k++) {
              indexList[k] = [];
            }
            for (var i = 0; i < res.length; i++) {
              for (var j = 0; j < res[i].elementIds.length; j++) {
                if (res[i].elementIds[j] === 0) {
                  indexList[i].push(j);
                }
              }
            }

            // console.log(indexList);
            return indexList;
          }

          /**
          * 换牌面
          * @param node 带有精灵的节点
          * @param random 是否随机-1随机
          */;
          _proto.setImage = function setImage(node, random) {
            if (random === void 0) {
              random = -1;
            }
            if (random === 0) {
              node.getComponent(UnicornGameItem).setNull();
              return;
            }
            var id = random;
            //随机取牌面
            if (random === -1) {
              id = randomRangeInt(101, 107);
              if (id > 106) id = 201;
            }
            var gameItem = node.getComponent(UnicornGameItem);
            gameItem.setNull();
            gameItem.initGameItem(id);
            gameItem.resetItem();
            // const path = `textures/turntable/${id}/spriteFrame`;
            // const path = `textures/turntable/element/${id}`;
            // root.game.bundle.load(path, (err: Error, spriteFrame: SpriteFrame) => {
            //     if (err) return console.error("--换面--", err);
            //     node.getComponent(Sprite).spriteFrame = spriteFrame;
            //     node.getComponent(UnicornGameItem).initGameItem(id);
            // });
          };

          _proto.getElementIds = function getElementIds() {
            var elements = [];
            for (var i = 0; i < 3; i++) {
              var item = {
                elementIds: []
              };
              for (var j = 0; j < 3; j++) {
                var id = randomRangeInt(101, 107);
                item.elementIds.push(id);
              }
              elements.push(item);
            }
            return elements;
          };
          _createClass(GameManager, null, [{
            key: "instance",
            get: function get() {
              return this._instance;
            }
          }]);
          return GameManager;
        }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "giftPrefab", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "elementPrefab", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameMainTran", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        })), _class2)) || _class);
        _SlotUnicorn.GameManager = GameManager;
      })(SlotUnicorn || (SlotUnicorn = exports('SlotUnicorn', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_slots_unicorn", ['./UnicornBaseButton.ts', './UnicornPoolManager.ts', './GameConst3.ts', './UnicornUtils.ts', './GameManager3.ts', './SlotUnicornGameMgr.ts', './SlotUnicornScorll.ts', './SlotsUnicornGameHUD.ts', './SlotsUnicornLobbyScene.ts', './UIManager2.ts', './UnicoreAutoManager.ts', './UnicoreResult.ts', './UnicoreResultItem.ts', './UnicornAniManager.ts', './UnicornCashScroll.ts', './UnicoreDetailsManager.ts', './UnicornEndManager.ts', './UnicornGameItem.ts', './UnicornNoticeView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotsUnicornGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts', './RoomMgr.ts', './UserMgr.ts', './SceneDef.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, LanguageData, RoomMgr, UserMgr, SceneDef;
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
      LanguageData = module.LanguageData;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "80aa0oF+bRAFpppS5bTVy/9", "SlotsUnicornGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsUnicornGameHUD = exports('SlotsUnicornGameHUD', (_dec = ccclass('SlotsUnicornGameHUD'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsUnicornGameHUD, _Component);
        function SlotsUnicornGameHUD() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SlotsUnicornGameHUD.prototype;
        _proto.start = function start() {
          if (!UserMgr.inst.uid) {
            tgx.SceneUtil.loadScene(SceneDef.START);
            return;
          }
          tgx.UIMgr.inst.closeAll();
        };
        _proto.update = function update(deltaTime) {};
        _proto.onBtnExitClicked = /*#__PURE__*/function () {
          var _onBtnExitClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
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
        return SlotsUnicornGameHUD;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsUnicornLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './SubGameMgr.ts', './UserMgr.ts', './UIAnnouncement.ts', './SceneDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, SubGameDef, SubGameMgr, UserMgr, UIAnnouncement, SceneDef;
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
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      UIAnnouncement = module.UIAnnouncement;
    }, function (module) {
      SceneDef = module.SceneDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ce45c/18+tDoJaS0q8sLZNy", "SlotsUnicornLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsUnicornLobbyScene = exports('SlotsUnicornLobbyScene', (_dec = ccclass('SlotsUnicornLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsUnicornLobbyScene, _Component);
        function SlotsUnicornLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsUnicornLobbyScene.prototype;
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

                  // if (lobbyNet.type != 'http') {
                  //     tgx.UIMgr.inst.showUI(UIChat, null, null, lobbyNet);
                  // }

                  tgx.UIMgr.inst.showUI(UIAnnouncement, function (ui) {
                    ui.setPosition(_this2.announcementPlacer.position.x, _this2.announcementPlacer.position.y);
                  });
                case 5:
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
        _proto.update = function update(deltaTime) {};
        _proto.onBtnSoloModeClicked = /*#__PURE__*/function () {
          var _onBtnSoloModeClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  // SlotKylinGameMgr.inst.initSoloMode();
                  SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_UNICORN, true);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function onBtnSoloModeClicked() {
            return _onBtnSoloModeClicked.apply(this, arguments);
          }
          return onBtnSoloModeClicked;
        }();
        return SlotsUnicornLobbyScene;
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

System.register("chunks:///_virtual/SlotUnicornGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './RoomMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, assetManager, GameMgr, RoomMgr, SubGameDef, SubGameMgr, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "dcb83j8iM1JBp80J7jlUPdM", "SlotUnicornGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotUnicornGameMgr = exports('SlotUnicornGameMgr', (_dec = ccclass('SlotUnicornGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotUnicornGameMgr, _GameMgr);
        function SlotUnicornGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._porcessFun = void 0;
          _this._gameType = SubGameDef.SLOTS_UNICORN;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_unicorn',
            bundle: ModuleDef.SLOTS_UNICORN
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotUnicornGameMgr.prototype;
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {};
        _proto.initSoloMode = function initSoloMode() {
          RoomMgr.inst.reset();
          this.reset();
          SubGameMgr.gameMgr = this;
        };
        _proto.preLoadRes = /*#__PURE__*/function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(porcessFun) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._porcessFun = porcessFun;
                  if (porcessFun) porcessFun(0);
                  _context.next = 4;
                  return this.preLoadMain();
                case 4:
                  _context.next = 6;
                  return this.preLoadLanguage();
                case 6:
                  if (porcessFun) porcessFun(1);
                  return _context.abrupt("return", true);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function preLoadRes(_x) {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }() /**预加载主场景 */;
        _proto.preLoadMain = function preLoadMain() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var bundle = assetManager.getBundle(_this2._gameScene.bundle);
            if (bundle) {
              bundle.preloadScene(_this2._gameScene.name, function (finished, total) {
                _this2._porcessFun && _this2._porcessFun(finished / total);
              }, function () {
                _this2._porcessFun(1);
                resolve();
              });
            } else {
              resolve();
            }
          });
        }

        /**加载语言包 */;
        _proto.preLoadLanguage = function preLoadLanguage() {
          return new Promise(function (resolve, reject) {
            resolve();
          });
        };
        _createClass(SlotUnicornGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotUnicornGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotUnicornGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotUnicornGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotUnicornScorll.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UnicornGameItem.ts', './GameManager3.ts', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Vec3, tween, easing, randomRangeInt, Component, UnicornGameItem, SlotUnicorn, AudioMgr, ModuleDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      easing = module.easing;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      UnicornGameItem = module.UnicornGameItem;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "93facYbKd5P+JZ1fJwQEk5m", "SlotUnicornScorll", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotUnicornScorll = exports('SlotUnicornScorll', (_dec = ccclass('SlotUnicornScorll'), _dec2 = property({
        type: Prefab,
        displayName: "滚动的对象"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotUnicornScorll, _Component);
        function SlotUnicornScorll() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "item", _descriptor, _assertThisInitialized(_this));
          _this._startTw = [];
          return _this;
        }
        var _proto = SlotUnicornScorll.prototype;
        _proto.addIteem = function addIteem() {
          for (var i = 1; i <= 3; i++) {
            var item = instantiate(this.item);
            item.parent = this.node;
            item.name = (i - 1).toString();
            item.position = new Vec3(0, 638 + i * 319);
            SlotUnicorn.GameManager.instance.setImage(item);
          }
        }

        /**
         * 滚动，每一列的
         * @param repeat 循环次数
         * @param maxPos 最高位置
         * @param distance 单次移动距离(间隔距离)
         */;
        _proto.startScroll = function startScroll(maxPos, distance) {
          var _this2 = this;
          if (maxPos === void 0) {
            maxPos = new Vec3(0, 638);
          }
          if (distance === void 0) {
            distance = 319;
          }
          //加一个新item在最上面
          var element = instantiate(this.item);
          element.parent = this.node;
          element.setSiblingIndex(-1);
          element.position = maxPos;
          SlotUnicorn.GameManager.instance.setImage(element);
          for (var i = 0; i < this.node.children.length; i++) {
            var pos = this.node.children[i].position;
            var pos1 = new Vec3();
            Vec3.add(pos1, pos, new Vec3(0, -distance));
            tween(this.node.children[i]).removeSelf();
            tween(this.node.children[i]).to(.5 * SlotUnicorn.GameManager.instance.speed, {
              position: pos1
            }, {
              easing: easing.backIn
            }).call(function (node) {
              tween(node).removeSelf();
              if (node.position.y < -600) {
                node.position = maxPos;
                node.setSiblingIndex(-1);
                SlotUnicorn.GameManager.instance.setImage(node);
              }
              var tw = tween(node).by(.05 * SlotUnicorn.GameManager.instance.speed, {
                position: new Vec3(0, -distance)
              }).call(function (node) {
                tween(node).removeSelf();
                if (node.position.y < -600) {
                  node.position = maxPos;
                  node.setSiblingIndex(-1);
                  SlotUnicorn.GameManager.instance.setImage(node);
                }
              }).union().repeatForever().tag(1200);
              _this2._startTw.push(tw);
              tw.start();
            }).start();
          }
        }

        /**
         * 开始结束滚动
         * @param faceIds 元素id集合 
         * @param isMini 是否小游戏
         */;
        _proto.endScroll = function endScroll(faceIds, isMini, repeat, callback) {
          var _this3 = this;
          if (callback === void 0) {
            callback = null;
          }
          var maxPos = new Vec3(0, 638); //普通游戏时的最高点
          var distance = 319; //每个元素距离
          for (var i = 0; i < this._startTw.length; i++) {
            this._startTw[i] && this._startTw[i].stop();
            this.node.children[i] && (this.node.children[i].position = new Vec3(0, maxPos.y - i * distance));
          }
          this._startTw = [];
          var _loop = function _loop(_i) {
            var pos = _this3.node.children[_i].position;
            var pos1 = new Vec3();
            Vec3.add(pos1, pos, new Vec3(0, -distance));
            tween(_this3.node.children[_i]).removeSelf();
            tween(_this3.node.children[_i]).to(.05 * SlotUnicorn.GameManager.instance.speed, {
              position: pos1
            }).call(function (node) {
              tween(node).removeSelf();
              if (node.position.y < -600) {
                if (!isMini) {
                  node.destroy();
                } else {
                  node.position = new Vec3(0, 638);
                  node.setSiblingIndex(-1);
                }
              }
              if (_i === _this3.node.children.length - 2) {
                _this3.setEndFace(faceIds, repeat, isMini, callback);
              }
            }).tag(1200).start();
          };
          for (var _i = 0; _i < this.node.children.length; _i++) {
            _loop(_i);
          }
        }

        //最高固定的牌面，顺滑变面
        ;

        _proto.setEndFace = function setEndFace(faceIds, repeats, isMini, callback) {
          var _this4 = this;
          if (callback === void 0) {
            callback = null;
          }
          var distance = 319; //每个元素距离
          if (!isMini) {
            for (var i = 2; i >= 0; i--) {
              var item = instantiate(this.item);
              item.parent = this.node;
              item.setSiblingIndex(-1);
              item.position = new Vec3(0, distance * 2 + i * distance);
              if (isMini) SlotUnicorn.GameManager.instance.setImage(item, SlotUnicorn.GameManager.instance.miniElementId);else SlotUnicorn.GameManager.instance.setImage(item, faceIds[2 - i]);
            }
          } else {
            for (var _i2 = 0; _i2 < this.node.children.length; _i2++) {
              var ran = randomRangeInt(0, 3);
              this.node.children[_i2].active = true;
              SlotUnicorn.GameManager.instance.setImage(this.node.children[_i2], SlotUnicorn.GameManager.instance.miniElementId);
              this.node.children[_i2].position = new Vec3(0, distance * 2 + ran * distance);
              if (_i2 >= 4) this.node.children[_i2].active = false;
            }
          }
          var _loop2 = function _loop2(_i3) {
            tween(_this4.node.children[_i3]).removeSelf();
            tween(_this4.node.children[_i3]).by(.05 * SlotUnicorn.GameManager.instance.speed, {
              position: new Vec3(0, -distance)
            }).call(function (node) {
              tween(node).removeSelf();
              if (node.position.y < -600) {
                if (!isMini) {
                  node.destroy();
                } else {
                  node.position = new Vec3(0, 638);
                  node.setSiblingIndex(-1);
                }
              }
            }).union().repeat(repeats).call(function (node) {
              if (!isMini) {
                _this4.scheduleOnce(function () {
                  AudioMgr.inst.playOneShot('audio/sfx_reel_stop', 1, ModuleDef.SLOTS_UNICORN);
                }, 0.2 * SlotUnicorn.GameManager.instance.speed);
                tween(node).by(.5 * SlotUnicorn.GameManager.instance.speed, {
                  position: new Vec3(0, -distance)
                }, {
                  easing: easing.backOut
                }).call(function (node) {
                  tween(node).removeSelf();
                  if (node.position.y < -600) {
                    node.destroy();
                  } else {
                    node.getComponent(UnicornGameItem).addGift();
                  }
                }).tag(1200).start();
              } else {
                SlotUnicorn.GameManager.instance.setImage(node, SlotUnicorn.GameManager.instance.miniElementId);
                tween(node).to(0.5 * SlotUnicorn.GameManager.instance.speed, {
                  position: new Vec3(0, -1400)
                }, {
                  easing: easing.backOut
                }).call(function (node) {
                  tween(node).removeSelf();
                  if (node.position.y < -600) {
                    node.position = new Vec3(0, 638);
                    node.setSiblingIndex(-1);
                    SlotUnicorn.GameManager.instance.setImage(node, SlotUnicorn.GameManager.instance.miniElementId);
                  }
                  callback && callback(Number(_this4.node.name));
                  for (var j = 0; j < _this4.node.children.length; j++) {
                    _this4.node.children[j].position = new Vec3(0, 638 + _i3 * distance);
                  }
                }).tag(1200).start();
              }
            }).start();
          };
          for (var _i3 = 0; _i3 < this.node.children.length; _i3++) {
            _loop2(_i3);
          }
        };
        return SlotUnicornScorll;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec2], {
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

System.register("chunks:///_virtual/UIManager2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameManager3.ts', './SlotUnicornScorll.ts', './UnicornUtils.ts', './GameConst3.ts', './UnicoreDetailsManager.ts', './UnicornEndManager.ts', './UnicornNoticeView.ts', './UnicoreResult.ts', './UnicornAniManager.ts', './UnicornPoolManager.ts', './UnicornBaseButton.ts', './SubGameDef.ts', './SlotShowPanelMgr.ts', './UserMgr.ts', './Num.ts', './GameUtil.ts', './ResourceMgr.ts', './ModuleDef.ts', './AudioMgr.ts', './RoomMgr.ts', './NetGameServer.ts', './LanguageData.ts', './UIHelp.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, _decorator, Label, Node, Toggle, Prefab, SpriteFrame, ParticleSystem, instantiate, Vec3, Tween, tween, find, Sprite, UIOpacity, easing, macro, sp, Component, SlotUnicorn$1, SlotUnicornScorll, UnicornUtils, SlotUnicornData, UnicoreDetailsManager, UnicornEndManager, UnicornNoticeView, UnicoreResult, UnicornAniManager, UnicornPoolManager, UnicornBaseButton, SubGameDef, showSlotBetPanel, showSlotAutoPenel, showSlotLastMoneyPenel, UserMgr, Num, GameUtil, ResourceMgr, ModuleDef, AudioMgr, RoomMgr, gameNet, LanguageData, UIHelp, UIhelpParam;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Toggle = module.Toggle;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      ParticleSystem = module.ParticleSystem;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      tween = module.tween;
      find = module.find;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      easing = module.easing;
      macro = module.macro;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      SlotUnicorn$1 = module.SlotUnicorn;
    }, function (module) {
      SlotUnicornScorll = module.SlotUnicornScorll;
    }, function (module) {
      UnicornUtils = module.UnicornUtils;
    }, function (module) {
      SlotUnicornData = module.SlotUnicornData;
    }, function (module) {
      UnicoreDetailsManager = module.UnicoreDetailsManager;
    }, function (module) {
      UnicornEndManager = module.UnicornEndManager;
    }, function (module) {
      UnicornNoticeView = module.UnicornNoticeView;
    }, function (module) {
      UnicoreResult = module.UnicoreResult;
    }, function (module) {
      UnicornAniManager = module.UnicornAniManager;
    }, function (module) {
      UnicornPoolManager = module.UnicornPoolManager;
    }, function (module) {
      UnicornBaseButton = module.UnicornBaseButton;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      showSlotBetPanel = module.showSlotBetPanel;
      showSlotAutoPenel = module.showSlotAutoPenel;
      showSlotLastMoneyPenel = module.showSlotLastMoneyPenel;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      GameUtil = module.GameUtil;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }],
    execute: function () {
      exports('SlotUnicorn', void 0);
      cclegacy._RF.push({}, "43c80K/xClCp7a28ltkQfi5", "UIManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameManager = null;
      var SlotUnicorn;
      (function (_SlotUnicorn, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _class3) {
        var UIManager = (_dec = ccclass('UIManager'), _dec2 = property({
          type: Label,
          tooltip: "余额"
        }), _dec3 = property({
          type: Label,
          tooltip: "下注额"
        }), _dec4 = property({
          type: Label,
          tooltip: "赢取金额"
        }), _dec5 = property({
          type: Node,
          tooltip: "其他按钮节点"
        }), _dec6 = property({
          type: UnicornBaseButton,
          tooltip: "减注按钮"
        }), _dec7 = property({
          type: UnicornBaseButton,
          tooltip: "加注按钮"
        }), _dec8 = property({
          type: UnicornBaseButton,
          tooltip: "自动按钮"
        }), _dec9 = property({
          type: UnicornBaseButton,
          tooltip: "开始按钮"
        }), _dec10 = property({
          type: UnicornBaseButton,
          tooltip: "停止按钮"
        }), _dec11 = property({
          type: Toggle,
          tooltip: "更多按钮"
        }), _dec12 = property({
          type: Label,
          tooltip: "自动剩余次数"
        }), _dec13 = property({
          type: Node,
          tooltip: "左边连线亮起球"
        }), _dec14 = property({
          type: Node,
          tooltip: "右边连线亮起球"
        }), _dec15 = property({
          type: Prefab,
          displayName: "滚动的对象"
        }), _dec16 = property({
          type: Label,
          tooltip: "赢取倍数"
        }), _dec17 = property(Label), _dec18 = property([SpriteFrame]), _dec19 = property([SlotUnicornScorll]), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(UnicornNoticeView), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(ParticleSystem), _dec27 = property([Node]), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(UIManager, _Component);
          function UIManager() {
            var _this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
            _initializerDefineProperty(_this, "coinLab", _descriptor, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "betLab", _descriptor2, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "winLab", _descriptor3, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "otherNode", _descriptor4, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnSub", _descriptor5, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnAdd", _descriptor6, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnAuto", _descriptor7, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnStart", _descriptor8, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnStop", _descriptor9, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnMore", _descriptor10, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "autoNumber", _descriptor11, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "leftLightContent", _descriptor12, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "rightLightContent", _descriptor13, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "elementItem", _descriptor14, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "winMult", _descriptor15, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "turboTip", _descriptor16, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "lightFrames", _descriptor17, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "uniScrollList", _descriptor18, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "lineContent", _descriptor19, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "startrefresh", _descriptor20, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "noticeView", _descriptor21, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "giftNode", _descriptor22, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "turboEffect", _descriptor23, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "startLight", _descriptor24, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "startContentLight", _descriptor25, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "entryMiniAniNode", _descriptor26, _assertThisInitialized(_this));
            // 进入小游戏动画节点
            _initializerDefineProperty(_this, "giftBoxNode", _descriptor27, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "tailEffect", _descriptor28, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "contentEffect", _descriptor29, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "uiReward", _descriptor30, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnStartEffect", _descriptor31, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "btnAutoEffect", _descriptor32, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "topEffect", _descriptor33, _assertThisInitialized(_this));
            _initializerDefineProperty(_this, "panelParentNode", _descriptor34, _assertThisInitialized(_this));
            _this.index = 0;
            _this._btnStartTw = null;
            _this._score = 0;
            _this._susscessRes = null;
            _this._betScore = 0;
            _this._betLevel = 1;
            _this._totalLose = 0;
            _this._totalWin = 0;
            _this._singleWin = 0;
            _this._giftEffect = null;
            _this._gearValueArr = [];
            _this._isEntryMini = false;
            _this._rollingId = -1;
            _this._endScrollTime = 0.5;
            _this.isAuto = false;
            return _this;
          }
          var _proto = UIManager.prototype;
          //滚动音效id
          _proto.onLoad = function onLoad() {
            if (UIManager._instance) {
              this.node.destroy();
              return;
            }
            UIManager._instance = this;
            GameManager = SlotUnicorn$1.GameManager;
            this.gameSetup();
          };
          _proto.onDestroy = function onDestroy() {
            UIManager._instance = null;
          };
          _proto.gameSetup = function gameSetup() {
            this.addListener();
            AudioMgr.inst.play("audio/bgm_mg", 1, ModuleDef.SLOTS_UNICORN);
            for (var i = 0; i < this.uniScrollList.length; i++) {
              for (var j = 0; j < 3; j++) {
                var item = instantiate(this.elementItem);
                item.parent = this.uniScrollList[i].node;
                item.name = j.toString();
                item.position = new Vec3(0, 319 - j * 319);
                GameManager.instance.setImage(item);
              }
            }
            this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.noticeView.showNotice();
            GameManager.instance.startGame();
            UnicornUtils.instance.setNodesByComponent(this.node.parent, this.node.parent.parent.angle, this.node.parent.scale.clone());
          };
          _proto.reconnect = function reconnect() {
            var _this2 = this;
            Tween.stopAllByTag(1200);
            Tween.stopAllByTag(3);
            this.uiReward.active = false;
            this._score = UserMgr.inst.coin;
            this.coinLab.string = Num.exchangeToThousands(1, this._score);
            this.winLab.string = "0.00";
            UnicornEndManager.instance.hide();
            this.noticeView.hideScore();
            UnicornAniManager.instance.playStand();
            UnicornAniManager.instance.resetDowntime();
            for (var i = 0; i < this.uniScrollList.length; i++) {
              this.uniScrollList[i].node.removeAllChildren();
              for (var j = 0; j < 3; j++) {
                var item = instantiate(this.elementItem);
                item.parent = this.uniScrollList[i].node;
                item.name = j.toString();
                item.position = new Vec3(0, 319 - j * 319);
                GameManager.instance.setImage(item);
              }
            }
            this.entryMiniGame(Vec3.ONE);
            // this.unschedule(this.scheduleEndScroll);
            this.unscheduleAllCallbacks();
            this.scheduleOnce(function () {
              GameManager.instance.gameStatus = SlotUnicornData.GameStatus.over;
              _this2.setStartAni(3);
              _this2.btnManager(true);
              if (SlotUnicornData.GameConst.leftAutoCount > 0) _this2.updateLabelAutoCount();
            }, 0.5);
          };
          _proto.onTouchEnd = function onTouchEnd() {
            //关闭更多按钮窗口
            if (this.btnMore.isChecked) {
              this.btnMore.isChecked = false;
              tween(this.otherNode).removeSelf();
              tween(this.otherNode).to(.2, {
                scale: new Vec3(0, 1, 1)
              }).start();
            }
          };
          _proto.initUI = function initUI() {
            if (this._betScore != 0) return;
            this.index = 0;
            this.btnSub.interactable = false;
            this.btnAdd.interactable = true;
            this._score = UserMgr.inst.coin;
            this.coinLab.string = Num.exchangeToThousands(1, this._score);
            this.winLab.string = "0.00";
            this.setStartAni(3);
            //设置下注额，初始化下注按钮
            this._gearValueArr = GameUtil.GetBetRange();
            var betSum = localStorage.getItem(SubGameDef.SLOTS_UNICORN + SlotUnicornData.GameConst.cacheName.betScore);
            this._betScore = betSum ? Number(betSum) : this._gearValueArr[0];
            this.index = this._gearValueArr.indexOf(this._betScore);
            this.betLab.string = Num.exchangeToThousands(1, this._betScore);
            this.updateBetGear();

            // console.log('下注档位->', this._gearValueArr);
          };

          _proto.addListener = function addListener() {
            var _this3 = this;
            this.btnStart.node.on(Node.EventType.MOUSE_ENTER, function () {
              _this3.btnStartEffect.active = true;
            }, this);
            this.btnStart.node.on(Node.EventType.MOUSE_LEAVE, function () {
              _this3.btnStartEffect.active = false;
            }, this);
            this.btnStop.node.on(Node.EventType.MOUSE_ENTER, function () {
              _this3.btnAutoEffect.active = true;
            }, this);
            this.btnStop.node.on(Node.EventType.MOUSE_LEAVE, function () {
              _this3.btnAutoEffect.active = false;
            }, this);
          };
          _proto.updateScore = function updateScore(startScore, endScore) {
            var param = {
              timer: 1
            };
            UnicornUtils.instance.IncreaseNumber(this.coinLab, startScore, endScore, param).start();
          };
          _proto.updateWin = function updateWin(winScore) {
            var param = {
              timer: 0.5,
              tag: 3
            };
            UnicornUtils.instance.IncreaseNumber(this.winLab, 0, winScore, param).start();
          };
          _proto.startAuto = function startAuto() {
            if (UserMgr.inst.coin < this._betScore) {
              tgx.UITip.instance.show(LanguageData.getLangByID('BXINGAME_60'));
              return;
            }
            this.isAuto = true;
            this.btnStart.node.active = false;
            this.btnStop.node.active = true;
            this._totalLose = 0;
            this._totalWin = 0;
            this._singleWin = 0;
            // SlotUnicornData.GameConst.leftAutoCount = SlotUnicornData.GameConst.Auto.AutoIndex[SlotUnicornData.GameConst.autoCountIndex]
            this.updateLabelAutoCount();
          };
          _proto.updateLabelAutoCount = function updateLabelAutoCount(delayTime) {
            var _this4 = this;
            if (delayTime === void 0) {
              delayTime = 0;
            }
            this.scheduleOnce(function () {
              SlotUnicornData.GameConst.leftAutoCount--;
              if (SlotUnicornData.GameConst.leftAutoCount > 0) {
                _this4.autoNumber.string = SlotUnicornData.GameConst.leftAutoCount.toString();
              } else {
                _this4.onStop();
              }
              _this4.onStart();
            }, delayTime);
          }

          //重新排序
          ;

          _proto.resetSortScroll = function resetSortScroll() {
            if (!this._susscessRes || this._susscessRes && this._susscessRes.elements.length > 0) return;
            var miniRes = this._susscessRes.mini.miniElements;
            for (var i = 0; i < this.uniScrollList.length; i++) {
              for (var j = 0; j < this.uniScrollList[i].node.children.length; j++) {
                this.uniScrollList[i].node.children[j].destroy();
              }
            }
            for (var _i = 0; _i < miniRes.length; _i++) {
              for (var _j = 0; _j < miniRes[_i].elementIds.length; _j++) {
                if (miniRes[_i].elementIds[_j] === 0) {
                  continue;
                }
                var element = instantiate(this.elementItem);
                element.parent = this.uniScrollList[_i].node;
                element.position = new Vec3(0, 319 - _j * 319);
                GameManager.instance.setImage(element, miniRes[_i].elementIds[_j]);
              }
            }
            for (var _i2 = 0; _i2 < this.uniScrollList.length; _i2++) {
              this.uniScrollList[_i2].addIteem();
            }
          };
          _proto.onStart = /*#__PURE__*/function () {
            var _onStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this5 = this;
              var status, result, res, betScore;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    // console.log("%c -----游戏开始------", "color:#2ba914");
                    status = GameManager.instance.gameStatus;
                    if (!(status === SlotUnicornData.GameStatus.start)) {
                      _context.next = 3;
                      break;
                    }
                    return _context.abrupt("return");
                  case 3:
                    this.initStart();
                    _context.next = 6;
                    return gameNet.playSlots(SubGameDef.SLOTS_UNICORN, this._betScore.toString());
                  case 6:
                    result = _context.sent;
                    res = UnicornUtils.instance.conver(result, this._betScore); // let res = {
                    //     betScore: 0.40,
                    //     code: 200,
                    //     elements: [{ elementIds: [101, 102, 103] }, { elementIds: [105, 104, 106] }, { elementIds: [104, 102, 101] }],
                    //     lines: [{ line: [2, 2, 2], lineNo: 3, lineScore: 0.80 }, { line: [0, 1, 2], lineNo: 4, lineScore: 0.80 }, { line: [2, 1, 0], lineNo: 5, lineScore: 0.80 }],
                    //     mini: { miniElements: [], miniLines: [], miniWinScore: 0, miniElementId: 0 },
                    //     winScore: 2,
                    //     isAllSame: 0
                    // }
                    // console.log("----->", res);
                    if (res.code === 200) {
                      // res = {
                      //     betScore: 40,
                      //     code: 200,
                      //     elements: [],
                      //     lines: [],
                      //     // lines:[],
                      //     mini: {
                      //         miniElements: [{ elementIds: [106, 106, 106] }, { elementIds: [106, 106, 106] }, { elementIds: [106, 106, 106] }], miniLines: [
                      //             { line: [2, 1, 0], lineNo: 5, lineScore: 0 }, { line: [1, 1, 1], lineNo: 1, lineScore: 0 }, { line: [2, 2, 2], lineNo: 3, lineScore: 0 }
                      //             , { line: [0, 1, 2], lineNo: 4, lineScore: 0 }, { line: [0, 0, 0], lineNo: 2, lineScore: 0 }
                      //         ], miniWinScore: 40000, miniElementId: 106
                      //     },
                      //     winScore: 0,
                      //     isAllSame: 106
                      // }
                      // res = {
                      //     betScore: 40,
                      //     code: 200,
                      //     elements: [],
                      //     lines: [],
                      //     // lines:[],
                      //     mini: {
                      //         miniElements: [{ elementIds: [0, 103, 103] }, { elementIds: [103, 103, 0] }, { elementIds: [0, 103, 103] }], miniLines: [{
                      //             line: [2, 2, 2], lineNo: 3, lineScore: 0
                      //         }], miniWinScore: 64, miniElementId: 103
                      //     },
                      //     winScore: 0,
                      //     isAllSame: 0
                      // }
                      betScore = res.betScore ? res.betScore : 0;
                      this._score -= betScore;
                      this._totalLose += betScore;
                      this._totalWin -= betScore;
                      this.coinLab.string = Num.exchangeToThousands(1, this._score);
                      this._susscessRes = res;
                      if (res.elements.length === 0 && res.mini.miniElements.length > 0) {
                        UnicornAniManager.instance.playShake();
                        SlotUnicornData.GameConst.isEntryMini = true;
                        this.entryMiniGame(new Vec3(0.92, 0.92));
                        this._isEntryMini = true;
                        AudioMgr.inst.play("audio/bgm_mg_fast", 1, ModuleDef.SLOTS_UNICORN);
                        this.giftBox(res.mini.miniElementId);
                      }
                      this.sucessStartGame(res);
                    } else {
                      this.scheduleOnce(function () {
                        var elementIds = GameManager.instance.getElementIds();
                        if (GameManager.instance.isSpeed) {
                          for (var i = 0; i < _this5.uniScrollList.length; i++) {
                            _this5.uniScrollList[i].endScroll(elementIds[i].elementIds, false, 2);
                            if (i === 2) {
                              GameManager.instance.gameStatus = SlotUnicornData.GameStatus.over;
                              UnicornAniManager.instance.resetDowntime();
                              _this5.setStartAni(3);
                              _this5.btnManager(true);
                              _this5.onStop();
                              if (!res.code || res.code === 201 || res.code === 202 || res.code === 203 || res.code === 205) ;
                            }
                          }
                        } else {
                          UnicornUtils.instance.startLoad(function (index) {
                            _this5.uniScrollList[index].endScroll(elementIds[index].elementIds, false, 2);
                            if (index === 2) {
                              GameManager.instance.gameStatus = SlotUnicornData.GameStatus.over;
                              UnicornAniManager.instance.resetDowntime();
                              _this5.setStartAni(3);
                              _this5.btnManager(true);
                              _this5.onStop();
                              if (!res.code || res.code === 501 || res.code === 201 || res.code === 202 || res.code === 203 || res.code === 205) ;
                            }
                          }, _this5.uniScrollList.length);
                        }
                      }, 2);
                    }
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
            function onStart() {
              return _onStart.apply(this, arguments);
            }
            return onStart;
          }();
          _proto.initStart = function initStart() {
            var _this6 = this;
            AudioMgr.inst.playOneShot('audio/sfx_reel_spin', 1, ModuleDef.SLOTS_UNICORN);
            if (GameManager.instance.speed === 1) {
              UnicornUtils.instance.delayTime = 0.2;
            } else {
              UnicornUtils.instance.delayTime = 0;
            }
            this._isEntryMini = false;
            this.onTouchEnd();
            UnicoreDetailsManager.instance.hide();
            Tween.stopAllByTag(3);
            Tween.stopAllByTag(1200);
            this.winLab.string = "0.00";
            this.noticeView.hideScore();
            GameManager.instance.gameStatus = SlotUnicornData.GameStatus.start;
            this.setStartAni(0.4);
            this.btnManager(false);
            this.uiReward.active = false;
            SlotUnicornData.GameConst.isEntryMini = false;
            this.winMult.node.active = false;
            UnicornEndManager.instance.isRunMiniScroll = 0;
            UnicornEndManager.instance.hide();
            this.resetSortScroll();
            AudioMgr.inst.playOneShot('audio/sfx_reel_rolling_loop', 1, ModuleDef.SLOTS_UNICORN).then(function (aeid) {
              return _this6._rollingId = aeid;
            });
            if (GameManager.instance.isSpeed) {
              for (var i = 0; i < this.uniScrollList.length; i++) {
                this.uniScrollList[i].startScroll();
              }
            } else {
              UnicornUtils.instance.startLoad(function (index) {
                _this6.uniScrollList[index].startScroll();
              }, this.uniScrollList.length);
            }
            this.startLight.active = true;
            this.startContentLight.node.parent.active = true;
          };
          _proto.entryMiniGame = function entryMiniGame(nodeScale) {
            var scaleAnimation = function scaleAnimation(node, scale) {
              tween(node).removeSelf();
              tween(node).to(0.7, {
                scale: scale
              }).start();
            };

            //对entryMiniAniNode进行动画处理
            this.entryMiniAniNode.forEach(function (node) {
              return scaleAnimation(node, nodeScale);
            });

            //如果nodeScale.x等于，则对effect的子节点进行动画处理
            if (nodeScale.x === 1) {
              var effect = find('effect', this.uiReward);
              effect.children.forEach(function (child) {
                return scaleAnimation(child, new Vec3(1.2, 1.2));
              });
            }
          };
          _proto.notEntryMiniGame = function notEntryMiniGame() {
            var delayTime = GameManager.instance.speed < 1 ? 0.8 : 1;
            this.entryMiniAniNode.forEach(function (node) {
              tween(node).removeSelf();
              tween(node).to(0.6 * delayTime, {
                scale: new Vec3(0.95, 0.95)
              }).delay(0.8 * delayTime).to(0.6 * delayTime, {
                scale: Vec3.ONE
              }).start();
            });
          };
          _proto.giftBox = function giftBox(elementId) {
            var _this7 = this;
            var box = instantiate(this.giftNode);
            box.parent = this.node;

            //隐藏礼物盒和相关元素
            find('liwuhe', box).active = false;
            this.giftNode.active = false;
            AudioMgr.inst.playOneShot('audio/sfx_multipiler_game_start', 1, ModuleDef.SLOTS_UNICORN);
            //移除盒子之前的动画
            tween(box).removeSelf();
            tween(box).delay(0.5 * GameManager.instance.speed).call(function () {
              AudioMgr.inst.playOneShot('audio/sfx_multipiler_balloon', 1, ModuleDef.SLOTS_UNICORN);
            }).to(1 * GameManager.instance.speed, {
              position: new Vec3(0, 480),
              scale: new Vec3(1.5, 1.5)
            }).call(function () {
              var ani = find('loveSp', box);
              ani.active = false;
              var boom = find('boom/glow', box);
              boom.getComponent(ParticleSystem).play();
              boom.children.forEach(function (n) {
                return n.getComponent(ParticleSystem).play();
              });
              AudioMgr.inst.playOneShot('audio/sfx_multipiler_balloon_locate', 1, ModuleDef.SLOTS_UNICORN);

              //调度显示和移除盒子
              _this7.scheduleOnce(function () {
                _this7.showGift(elementId);
              }, 0.7 * GameManager.instance.speed);
              _this7.scheduleOnce(function () {
                box.removeFromParent();
              }, 1.4 * GameManager.instance.speed);
            }).start();
          }

          /**
           * 显示礼物盒动画
           * @param elementId - 礼物元素的ID，用于加载对应的纹理
           */;
          _proto.showGift = function showGift(elementId) {
            var _this8 = this;
            var startPos = new Vec3(0, 480);
            this.giftBoxNode.position = startPos;
            // 设置礼物盒节点的层级索引
            this.giftBoxNode.setSiblingIndex(20);

            // 获取礼物盒内的图标精灵组件
            var targetSprite = find('icon', this.giftBoxNode).getComponent(Sprite);
            var path = "textures/turntable/element/" + elementId;
            this._giftEffect = find(elementId.toString(), this.giftBoxNode);
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.SLOTS_UNICORN, path, SpriteFrame, function (err, spriteFrame) {
              if (err) return console.error("--换面--", err);
              targetSprite.spriteFrame = spriteFrame;
              _this8.giftBoxNode.active = true;
              AudioMgr.inst.playOneShot('audio/sfx_multipiler_balloon_land', 1, ModuleDef.SLOTS_UNICORN);
              AudioMgr.inst.playOneShot('audio/sfx_readyhead', 1, ModuleDef.SLOTS_UNICORN);
              var uiOpacity = _this8.giftBoxNode.getComponent(UIOpacity);
              uiOpacity.opacity = 255;

              // 定义不同元素ID对应的缩放比例映射
              var scaleMap = {
                101: new Vec3(0.5, 0.5),
                102: new Vec3(0.45, 0.45),
                103: new Vec3(0.43, 0.43),
                104: new Vec3(0.43, 0.43),
                105: new Vec3(0.35, 0.35),
                106: new Vec3(0.4, 0.4),
                201: new Vec3(0.5, 0.5)
              };
              // 根据元素ID获取初始缩放比例，如果不存在则使用默认值
              var startScale = scaleMap[elementId] || new Vec3(0.9, 0.9);
              _this8._giftEffect.active = true;
              _this8.scheduleOnce(function () {
                uiOpacity.opacity = 0;
                tween(uiOpacity).removeSelf();
                tween(uiOpacity).to(.5 * GameManager.instance.speed, {
                  opacity: 255
                }).start();
                _this8._giftEffect.active = false;
                tween(_this8.giftBoxNode).removeSelf();
                tween(_this8.giftBoxNode).to(.5 * GameManager.instance.speed, {
                  position: new Vec3(0, 915),
                  scale: new Vec3(0.9, 0.9)
                }).to(0.2 * GameManager.instance.speed, {
                  position: new Vec3(0, 1015)
                }).to(.5 * GameManager.instance.speed, {
                  position: new Vec3(0, 585),
                  scale: new Vec3(0.7, 0.7)
                }, {
                  easing: easing.backOut
                }).call(function () {
                  _this8._giftEffect.active = true;
                  find('effect', _this8.giftBoxNode).active = true;
                  AudioMgr.inst.playOneShot('audio/sfx_multipiler_balloon_land', 1, ModuleDef.SLOTS_UNICORN);
                  _this8.scheduleOnce(function () {
                    _this8.effectMini();
                  }, 1.5 * GameManager.instance.speed);
                }).start();
              }, 1.1 * GameManager.instance.speed);
            });
          };
          _proto.effectMini = function effectMini() {
            var _this9 = this;
            this.giftBoxNode.active = false;
            this._giftEffect.active = false;
            this.tailEffect.active = true;
            this.contentEffect.active = false;
            this.topEffect.active = false;
            var startPos = new Vec3(0, 585);
            AudioMgr.inst.playOneShot('audio/sfx_multipiler_game_trigger', 1, ModuleDef.SLOTS_UNICORN);
            for (var i = 0; i < this.tailEffect.children.length; i++) {
              this.tailEffect.children[i].active = true;
              var endPos = new Vec3(-300 + 300 * i, 500);
              var controlPos = new Vec3((startPos.x + endPos.x) * 1, 1100);
              UnicornUtils.instance.bezierTo(this.tailEffect.children[i], 0.5 * GameManager.instance.speed, startPos, controlPos, endPos).delay(0.1 * GameManager.instance.speed).call(function (node) {
                node.active = false;
              }).start();
            }
            this.scheduleOnce(function () {
              _this9.contentEffect.active = true;
              _this9.topEffect.active = true;
              _this9.showWinMult();
            }, 0.6 * GameManager.instance.speed);
          };
          _proto.sucessStartGame = function sucessStartGame(res) {
            var _this10 = this;
            if (res.elements.length > 0) {
              var random = Math.random();
              if (random < 0.02) {
                this._endScrollTime = 2;
                this.scheduleOnce(function () {
                  UnicornAniManager.instance.playAngry();
                  _this10.notEntryMiniGame();
                }, 1 * GameManager.instance.speed);
              } else {
                if (GameManager.instance.isSpeed) this._endScrollTime = 0.5;else this._endScrollTime = 1;
              }
            }
            this.scheduleOnce(function () {
              _this10.startLight.active = false;
              _this10.startContentLight.stop();
              _this10.startContentLight.node.parent.active = false;
              if (res.elements.length > 0) {
                UnicornUtils.instance.startLoad(function (index) {
                  var unicornElements = res.elements;
                  UnicornEndManager.instance.unicornElements = unicornElements;
                  _this10.uniScrollList[index].endScroll(unicornElements[index].elementIds, res.elements.length <= 0, 2);
                }, _this10.uniScrollList.length);
                _this10.gameStage(res, 1.5 * GameManager.instance.speed);
              } else {
                for (var i = 0; i < 3; i++) {
                  UnicornEndManager.instance.lightIndexList[i] = [];
                }
                GameManager.instance.miniElementId = _this10._susscessRes.mini.miniElementId;
                var ran = Math.random();
                if (ran > 0.5) {
                  UnicornAniManager.instance.playFete();
                } else {
                  UnicornAniManager.instance.playJump();
                }
                UnicornEndManager.instance.lightIndexList = GameManager.instance.zeroToList(_this10._susscessRes.mini.miniElements);
                _this10.schedule(_this10.scheduleEndScroll, 3, macro.REPEAT_FOREVER, 4.7 * GameManager.instance.speed);
              }
            }, this._endScrollTime * GameManager.instance.speed);
          };
          _proto.scheduleEndScroll = function scheduleEndScroll() {
            var _this11 = this;
            var cb = function cb(index) {
              UnicornEndManager.instance.setMiniElement();
            };
            var lightIndexList = UnicornEndManager.instance.lightIndexList;
            var isRun = false;
            for (var i = 0; i < lightIndexList.length; i++) {
              if (lightIndexList[i].length < 3) {
                if (GameManager.instance.isSpeed) {
                  for (var _i3 = 0; _i3 < this.uniScrollList.length; _i3++) {
                    var unicornElements = this._susscessRes.mini.miniElements;
                    UnicornEndManager.instance.unicornElements = unicornElements;
                    this.uniScrollList[_i3].endScroll(unicornElements[_i3].elementIds, this._susscessRes.elements.length <= 0, 25, cb.bind(this));
                  }
                } else {
                  UnicornUtils.instance.startLoad(function (index) {
                    var unicornElements = _this11._susscessRes.mini.miniElements;
                    UnicornEndManager.instance.unicornElements = unicornElements;
                    _this11.uniScrollList[index].endScroll(unicornElements[index].elementIds, _this11._susscessRes.elements.length <= 0, 25, cb.bind(_this11));
                  }, this.uniScrollList.length);
                }
                isRun = true;
                break;
              }
            }
            if (!isRun) {
              var deTime = 0;
              if (!this._susscessRes.isAllSame) {
                if (GameManager.instance.isSpeed) {
                  for (var _i4 = 0; _i4 < this.uniScrollList.length; _i4++) {
                    var _unicornElements = this._susscessRes.mini.miniElements;
                    UnicornEndManager.instance.unicornElements = _unicornElements;
                    this.uniScrollList[_i4].endScroll(_unicornElements[_i4].elementIds, this._susscessRes.elements.length <= 0, 25, cb.bind(this));
                  }
                } else {
                  UnicornUtils.instance.startLoad(function (index) {
                    var unicornElements = _this11._susscessRes.mini.miniElements;
                    UnicornEndManager.instance.unicornElements = unicornElements;
                    _this11.uniScrollList[index].endScroll(unicornElements[index].elementIds, _this11._susscessRes.elements.length <= 0, 25, cb.bind(_this11));
                  }, this.uniScrollList.length);
                }
                deTime = 1.5;
              }
              this.scheduleOnce(function () {
                UnicornAniManager.instance.playHappy();
                UnicornEndManager.instance.setMask();
                _this11.scheduleOnce(function () {
                  //小游戏的结算
                  _this11.noticeView.balanceScore(_this11._susscessRes.betScore, _this11._susscessRes.mini.miniWinScore, true, _this11._susscessRes.isAllSame);
                }, 1);
                _this11.unschedule(_this11.scheduleEndScroll);
              }, deTime);
            }
          };
          _proto.gameStage = function gameStage(res, delayTime) {
            var _this12 = this;
            this.scheduleOnce(function () {
              if (res.lines.length > 0) {
                UnicornEndManager.instance.showTurnble(res.lines);
              }
              if (res.elements.length > 0) {
                _this12.noticeView.balanceScore(res.betScore, res.winScore, false, _this12._susscessRes.isAllSame);
              }
            }, delayTime);
          };
          _proto.gameOver = function gameOver() {
            if (this._isEntryMini || this._susscessRes.isAllSame || this._susscessRes.winScore > this._susscessRes.betScore * 20) AudioMgr.inst.play("audio/bgm_mg", 1, ModuleDef.SLOTS_UNICORN);
            GameManager.instance.gameStatus = SlotUnicornData.GameStatus.over;
            UnicornAniManager.instance.resetDowntime();
            var winScore = this._susscessRes.winScore ? this._susscessRes.winScore : this._susscessRes.mini.miniWinScore ? this._susscessRes.mini.miniWinScore : 0;
            this.updateWin(winScore);
            // this.totalScore(winScore);
            this.setStartAni(3);
            if (!this.isAuto) this.btnManager(true);
            var delayTime = 1;
            if (winScore == 0) delayTime = 0;
            if (SlotUnicornData.GameConst.leftAutoCount > 0) this.updateLabelAutoCount(delayTime);
          };
          _proto.setStartAni = function setStartAni(delayTime) {
            this._btnStartTw && (this._btnStartTw.stop(), this._btnStartTw = null);
            tween(this.startrefresh).removeSelf();
            this._btnStartTw = tween(this.startrefresh).by(delayTime, {
              eulerAngles: new Vec3(0, 0, -360)
            }).repeatForever();
            this._btnStartTw.start();
          }

          /**
           * 管理按钮的可交互状态
           * @param interactable - 一个布尔值，指示按钮是否可交互
           */;
          _proto.btnManager = function btnManager(interactable) {
            // 设置减注、加注和自动按钮的可交互状态
            this.btnSub.interactable = interactable;
            this.btnAdd.interactable = interactable;
            this.btnAuto.interactable = interactable;

            // 如果当前下注档位索引为0，禁用减注按钮
            if (this.index === 0) {
              this.btnSub.interactable = false;
            } else if (this.index >= this._gearValueArr.length - 1) {
              // 如果当前下注档位索引达到最大值，禁用加注按钮
              this.btnAdd.interactable = false;
            }
          };
          _proto.onStop = function onStop() {
            console.log("%c ----停止自动游戏-----", "color:#2ba914");
            this.isAuto = false;
            this.btnStart.node.active = true;
            this.btnStop.node.active = false;
            SlotUnicornData.GameConst.leftAutoCount = 0;
            this.onTouchEnd();
          }

          //添加礼物盒特效
          ;

          _proto.addGiftEffect = function addGiftEffect(startPos) {
            var _this13 = this;
            var gift = UnicornPoolManager.instance.getPoolObj(UnicornPoolManager.PoolsName.giftEffect);
            gift.parent = this.node;
            gift.name = 'GiftEffectTw';
            gift.worldPosition = startPos;
            var endPos = this.giftNode.worldPosition.clone();
            var controlPos = new Vec3((startPos.x + endPos.x) * 0.2, (startPos.y + endPos.y) * 0.5);
            var bezierTw = UnicornUtils.instance.bezierTo2(gift, 0.6, 0.5, startPos, controlPos, endPos);
            var light = find('light/glow-002', this.giftNode);
            var light2 = find('light/glow-002', gift);
            light2.getComponent(ParticleSystem).play();
            light2.children.forEach(function (n) {
              n.getComponent(ParticleSystem).play();
            });
            this.scheduleOnce(function () {
              AudioMgr.inst.playOneShot('audio/sfx_sym_wild_fly', 1, ModuleDef.SLOTS_UNICORN);
            }, 0.5);
            AudioMgr.inst.playOneShot('audio/sfx_sym_wild', 1, ModuleDef.SLOTS_UNICORN);
            tween(gift).removeSelf();
            bezierTw.call(function (node) {
              UnicornPoolManager.instance.putPoolObj(UnicornPoolManager.PoolsName.giftEffect, node);
              light2.getComponent(ParticleSystem).stop();
              light2.children.forEach(function (n) {
                n.getComponent(ParticleSystem).stop();
              });
              UnicornAniManager.instance.playAmazed();
              var ani = find('loveSp', _this13.giftNode).getComponent(sp.Skeleton);
              ani.timeScale = 1;
              light.getComponent(ParticleSystem).play();
              light.children.forEach(function (n) {
                n.getComponent(ParticleSystem).play();
              });
              AudioMgr.inst.playOneShot('audio/sfx_multipiler_trigger', 1, ModuleDef.SLOTS_UNICORN);
              tween(_this13.giftNode).to(0.2, {
                scale: new Vec3(0.8, 0.8, 0.8)
              }).delay(.5).call(function () {
                tween(_this13.giftNode).to(0.2, {
                  scale: new Vec3(1, 1, 1)
                }).call(function () {
                  ani.timeScale = 0.5;
                  light.getComponent(ParticleSystem).stop();
                  light.children.forEach(function (n) {
                    n.getComponent(ParticleSystem).stop();
                  });
                }).start();
              }).start();
            }).start();
          };
          _proto.showWinMult = function showWinMult() {
            var _this14 = this;
            this.winMult.node.active = true;
            //645
            if (SlotUnicornData.GameConst.isEntryMini) this.winMult.node.position = new Vec3(0, 595);else this.winMult.node.position = new Vec3(0, 675);
            this.winMult.node.scale = Vec3.ZERO;
            var effect = find('multEffect', this.winMult.node);
            effect.active = false;
            var pos = this.winMult.node.position.clone();
            Vec3.add(pos, pos, new Vec3(0, -30));
            tween(this.winMult.node).removeSelf();
            tween(this.winMult.node).to(0.4, {
              scale: new Vec3(0.8, 0.8, 0.8)
            }).call(function () {
              effect.active = true;
              _this14.winMult.node.setSiblingIndex(0);
            }).delay(1).to(0.3, {
              position: pos
            }).start();
          };
          _proto.setWinMult = function setWinMult(mult) {
            var _this15 = this;
            var pos = this.winMult.node.position.clone();
            Vec3.add(pos, pos, new Vec3(0, 200));
            tween(this.winMult.node).removeSelf();
            tween(this.winMult.node).to(0.2 * GameManager.instance.speed, {
              position: pos
            }, {
              easing: easing.backOut
            }).call(function () {
              _this15.winMult.node.setSiblingIndex(100);
            }).to(0.3 * GameManager.instance.speed, {
              position: new Vec3(0, 130),
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.3 * GameManager.instance.speed, {
              position: new Vec3(0, -452)
            }).union().call(function () {
              AudioMgr.inst.playOneShot("audio/sfx_multipiler_win", 1, ModuleDef.SLOTS_UNICORN);
              _this15.winMult.node.active = false;
              _this15.noticeView.updateTip();
              if (mult < 10) _this15.resetGame();
              _this15.showReward(mult, _this15._susscessRes.mini.miniWinScore);
            }).start();
          };
          _proto.setScore = function setScore(winNum) {
            if (winNum === 0) return;
            this._score += winNum;
            this.updateScore(this._score - winNum, this._score);
          };
          _proto.showReward = function showReward(mult, winScore) {
            var _this16 = this;
            if (!this._susscessRes.isAllSame) {
              if (mult >= 10) UnicoreResult.instance.show(this._susscessRes.betScore, winScore);
              return;
            }
            this.uiReward.active = true;
            var effect = find('effect', this.uiReward);
            for (var i = 0; i < effect.children.length; i++) {
              effect.children[i].scale = new Vec3(1.2 * 0.92, 1.2 * 0.92);
            }
            AudioMgr.inst.playOneShot('audio/sfx_multipiler_win_crown', 1, ModuleDef.SLOTS_UNICORN);
            var icon = find('icon', this.uiReward).getComponent(Sprite);
            icon.node.scale = Vec3.ZERO;
            var path = "textures/turntable/element/" + this._susscessRes.isAllSame;
            var iconScale = new Vec3();
            switch (this._susscessRes.isAllSame) {
              case 101:
                iconScale = new Vec3(4, 4);
                break;
              case 102:
                iconScale = new Vec3(4, 4);
                break;
              case 103:
                iconScale = new Vec3(3.5, 3.5);
                break;
              case 104:
                iconScale = new Vec3(3.5, 3.5);
                break;
              case 106:
                iconScale = new Vec3(3.2, 3.2);
                break;
              case 105:
                iconScale = new Vec3(3, 3);
                break;
              case 201:
                iconScale = new Vec3(2, 2);
                break;
            }
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.SLOTS_UNICORN, path, SpriteFrame, function (err, spriteFrame) {
              if (err) return console.error("--换面--", err);
              icon.spriteFrame = spriteFrame;
              tween(icon.node).removeSelf();
              tween(icon.node).delay(1).to(0.3, {
                scale: iconScale
              }).call(function () {
                UnicornEndManager.instance.hide();
                if (mult >= 10) UnicoreResult.instance.show(_this16._susscessRes.betScore, winScore);
              }).start();
            });
          }

          //计算所有情况的分数
          ;

          _proto.totalScore = function totalScore(winScore) {
            if (!winScore) winScore = 0;
            this._totalLose -= winScore;
            this._totalWin += winScore;
            this._singleWin = winScore;
            if (SlotUnicornData.GameConst.reduceLabel != 0 && this._totalLose >= SlotUnicornData.GameConst.reduceLabel * 100 || SlotUnicornData.GameConst.addLabel != 0 && this._totalWin >= SlotUnicornData.GameConst.addLabel * 100 || SlotUnicornData.GameConst.winLabel != 0 && this._singleWin >= SlotUnicornData.GameConst.winLabel * 100) {
              this.onStop();
              this.btnManager(true);
            }
          };
          _proto.resetGame = function resetGame() {
            this.entryMiniGame(Vec3.ONE);
            this.giftNode.active = true;
            this.winMult.node.active = false;
            this.tailEffect.active = false;
            this.contentEffect.active = false;
            this.topEffect.active = false;
            this.gameOver();
          };
          _proto.miniScroll = function miniScroll() {};
          _proto.onBetSub = function onBetSub() {
            this.index = Math.ceil(this.index - 1);
            if (this.index <= 0) {
              this.index = 0;
              this.btnSub.interactable = false;
            }
            this.btnAdd.interactable = true;
            this.betLab.string = Num.exchangeToThousands(1, this._gearValueArr[this.index]);
            this._betScore = this._gearValueArr[this.index];
            this._betLevel = 1;
            localStorage.setItem(SubGameDef.SLOTS_UNICORN + SlotUnicornData.GameConst.cacheName.betScore, this._betScore.toString());
            UnicoreDetailsManager.instance.hide();
            this.onTouchEnd();
          };
          _proto.onBetAdd = function onBetAdd() {
            this.index = Math.floor(this.index + 1);
            if (this.index >= this._gearValueArr.length - 1) {
              this.index = this._gearValueArr.length - 1;
              this.btnAdd.interactable = false;
            }
            this.btnSub.interactable = true;
            this.betLab.string = Num.exchangeToThousands(1, this._gearValueArr[this.index]);
            this._betScore = this._gearValueArr[this.index];
            this._betLevel = 1;
            localStorage.setItem(SubGameDef.SLOTS_UNICORN + SlotUnicornData.GameConst.cacheName.betScore, this._betScore.toString());
            UnicoreDetailsManager.instance.hide();
            this.onTouchEnd();
          };
          _proto.onTurbo = function onTurbo() {
            if (!GameManager.instance.isSpeed) {
              GameManager.instance.speed = .5;
              GameManager.instance.isSpeed = true;
              UnicornUtils.instance.delayTime = 0.01;
              this.turboEffect.active = true;
              this.turboTip.string = "TURBO";
            } else {
              this.turboEffect.active = false;
              GameManager.instance.isSpeed = false;
              GameManager.instance.speed = 1;
              UnicornUtils.instance.delayTime = 0.2;
              this.turboTip.string = "OFF";
            }
            this.onTouchEnd();
            UnicoreDetailsManager.instance.hide();
          };
          _proto.onMore = function onMore(event) {
            tween(this.otherNode).removeSelf();
            // AudioMgr.inst.playOneShot('Click');
            if (event.isChecked) {
              tween(this.otherNode).to(.2, {
                scale: new Vec3(1, 1, 1)
              }).start();
            } else {
              tween(this.otherNode).to(.2, {
                scale: new Vec3(0, 1, 1)
              }).start();
            }
            UnicoreDetailsManager.instance.hide();
          };
          _proto.onBet = function onBet() {
            var _this17 = this;
            if (GameManager.instance.gameStatus === SlotUnicornData.GameStatus.start || this.isAuto) return;
            var cb = function cb() {
              for (var _len2 = arguments.length, res = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                res[_key2] = arguments[_key2];
              }
              console.log("bet----", res);
              _this17.index = res[2];
              _this17._betScore = res[3];
              _this17.betLab.string = res[4];
              localStorage.setItem(SubGameDef.SLOTS_UNICORN + SlotUnicornData.GameConst.cacheName.betScore, _this17._betScore.toString());
              _this17.updateBetGear();
            };
            showSlotBetPanel(this.panelParentNode, [0.03, 0.1, 0.3, 0.9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, UserMgr.inst.coin, Number(this.betLab.string), cb.bind(this)).then(function (value) {
              value.bindBet(_this17.index);
            });
            this.onTouchEnd();
            UnicoreDetailsManager.instance.hide();
          };
          _proto.updateBetGear = function updateBetGear() {
            for (var i = 0; i < this._gearValueArr.length; i++) {
              //选中为档位中的
              if (this._gearValueArr[i] === this._betScore) {
                if (i === 0) {
                  this.btnSub.interactable = false;
                  this.btnAdd.interactable = true;
                } else if (i === this._gearValueArr.length - 1) {
                  this.btnSub.interactable = true;
                  this.btnAdd.interactable = false;
                } else {
                  this.btnSub.interactable = true;
                  this.btnAdd.interactable = true;
                }
                this.index = i;
                break;
              }

              //基于档位之间的
              if (i === this._gearValueArr.length - 1) break;
              var value = this._gearValueArr[i + 1];
              if (this._betScore > this._gearValueArr[i] && this._betScore < value) {
                this.index = i + 0.5;
                this.btnAdd.interactable = true;
                this.btnSub.interactable = true;
                break;
              }
            }
          };
          _proto.onAuto = function onAuto() {
            var _this18 = this;
            console.log('%c ----自动-----', "color:#2ba914");
            var cb = function cb(autoNum) {
              SlotUnicornData.GameConst.leftAutoCount = autoNum;
              _this18.startAuto();
            };
            showSlotAutoPenel(this.panelParentNode, UserMgr.inst.coin, Number(this.betLab.string), cb.bind(this));
            UnicoreDetailsManager.instance.hide();
            this.onTouchEnd();
          };
          _proto.onLastMoney = function onLastMoney() {
            //打开钱包
            showSlotLastMoneyPenel(this.panelParentNode, UserMgr.inst.coin);
          };
          _proto.onHelp = function onHelp() {
            tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
          };
          _proto.onPayout = function onPayout() {
            tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
          };
          _proto.onMusic = function onMusic() {
            AudioMgr.inst["switch"] = !AudioMgr.inst["switch"];
          };
          _proto.onHistroy = function onHistroy() {};
          _proto.onExit = function onExit() {
            tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true, 'c4cdc0', '4e4933', 'a3b6a5', '17160f').onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ok) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!ok) {
                      _context2.next = 3;
                      break;
                    }
                    _context2.next = 3;
                    return RoomMgr.inst.exitRoom();
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })));
          }

          //停止音效
          ;

          _proto.stopShot = function stopShot() {
            if (this._rollingId != -1) {
              AudioMgr.inst.stopOneShot(this._rollingId, 'audio/sfx_reel_rolling_loop', ModuleDef.SLOTS_UNICORN);
              this._rollingId = -1;
            }
          };
          _createClass(UIManager, null, [{
            key: "instance",
            get: function get() {
              return this._instance;
            }
          }]);
          return UIManager;
        }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinLab", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betLab", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winLab", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "otherNode", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnSub", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnStart", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnStop", [_dec10], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnMore", [_dec11], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "autoNumber", [_dec12], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "leftLightContent", [_dec13], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "rightLightContent", [_dec14], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "elementItem", [_dec15], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "winMult", [_dec16], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "turboTip", [_dec17], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lightFrames", [_dec18], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "uniScrollList", [_dec19], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "lineContent", [_dec20], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "startrefresh", [_dec21], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "noticeView", [_dec22], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "giftNode", [_dec23], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "turboEffect", [_dec24], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "startLight", [_dec25], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "startContentLight", [_dec26], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "entryMiniAniNode", [_dec27], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "giftBoxNode", [_dec28], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "tailEffect", [_dec29], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "contentEffect", [_dec30], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "uiReward", [_dec31], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "btnStartEffect", [_dec32], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "btnAutoEffect", [_dec33], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "topEffect", [_dec34], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "panelParentNode", [_dec35], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        })), _class2)) || _class);
        _SlotUnicorn.UIManager = UIManager;
      })(SlotUnicorn || (SlotUnicorn = exports('SlotUnicorn', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnicoreAutoManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst3.ts', './UIManager2.ts', './GameManager3.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, ToggleContainer, Slider, Widget, Vec3, UITransform, UIOpacity, tween, Toggle, find, Component, SlotUnicornData, SlotUnicorn$1, SlotUnicorn;
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
      ToggleContainer = module.ToggleContainer;
      Slider = module.Slider;
      Widget = module.Widget;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Toggle = module.Toggle;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      SlotUnicornData = module.SlotUnicornData;
    }, function (module) {
      SlotUnicorn$1 = module.SlotUnicorn;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _class3;
      cclegacy._RF.push({}, "27fffOIZTtBYo5pvDUV6HKe", "UnicoreAutoManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UnicoreAutoManager = exports('UnicoreAutoManager', (_dec = ccclass('UnicoreAutoManager'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(ToggleContainer), _dec7 = property(Slider), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Slider), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Slider), _dec14 = property(Node), _dec15 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicoreAutoManager, _Component);
        function UnicoreAutoManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinLab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betLab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleRound", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reduceSlider", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reduceproBar", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reduceLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addSlider", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addproBar", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addLabel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winSlider", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winproBar", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLabel", _descriptor14, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UnicoreAutoManager.prototype;
        _proto.onLoad = function onLoad() {
          if (UnicoreAutoManager._instance) {
            this.node.destroy();
            return;
          }
          UnicoreAutoManager._instance = this;
          SlotUnicorn.GameManager;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          this.node.active = false;
        };
        _proto.onDisable = function onDisable() {
          UnicoreAutoManager._instance = null;
        };
        _proto.showPanel = function showPanel() {
          this.node.active = true;
          this.reduceSlider.progress = 0;
          this.addSlider.progress = 0;
          this.winSlider.progress = 0;
          this.reduceproBar.getComponent(UITransform).width = 0;
          this.addproBar.getComponent(UITransform).width = 0;
          this.winproBar.getComponent(UITransform).width = 0;
          // this.reduceLabel.string = I18n.ins().t("none");
          // this.addLabel.string = I18n.ins().t("none");
          // this.winLabel.string = I18n.ins().t("none");
          this.coinLab.string = SlotUnicorn$1.UIManager.instance.coinLab.string;
          this.betLab.string = SlotUnicorn$1.UIManager.instance.betLab.string;
          this.winLab.string = SlotUnicorn$1.UIManager.instance.winLab.string;
          SlotUnicornData.GameConst.reduceLabel = 0;
          SlotUnicornData.GameConst.addLabel = 0;
          SlotUnicornData.GameConst.winLabel = 0;
          this.node.scale = Vec3.ZERO;
          this.node.getComponent(UIOpacity).opacity = 0;
          tween(this.node).removeSelf();
          tween(this.node).to(.25, {
            scale: Vec3.ONE
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(.25, {
            opacity: 255
          }).start();
          this.AutoEnable();
        };
        _proto.AutoEnable = function AutoEnable() {
          for (var index = 0; index < this.toggleRound.node.children.length; index++) {
            var tog = this.toggleRound.node.children[index];
            if (index === 0) tog.getComponent(Toggle).isChecked = true;
            tog.name = index.toString();
            SlotUnicornData.GameConst.autoCountIndex = 0;
            find("Background/Label", tog).getComponent(Label).string = SlotUnicornData.GameConst.Auto.AutoIndex[index].toString();
            find("Checkmark/Label", tog).getComponent(Label).string = SlotUnicornData.GameConst.Auto.AutoIndex[index].toString();
          }
        };
        _proto.onSelectRound = function onSelectRound(data) {
          // SlotUnicornData.GameConst.autoCountIndex = tool.convert.toNumber(data.node.name);
        };
        _proto.onBtnConfirm = function onBtnConfirm() {
          this.onBtnClose();
          // emitter.emit(SlotUnicornData.GameConst.eventName.startAutoGame);
          SlotUnicorn$1.UIManager.instance.startAuto();
        };
        _proto.reduce_Label = function reduce_Label(lab) {
          var progress = this.reduceSlider.progress;
          var progressS = (Math.floor(progress * 5) + 5).toFixed(0);
          if (progressS == "0") {
            this.reduceLabel.string = "5";
          } else {
            this.reduceLabel.string = progressS;
          }
          // SlotUnicornData.GameConst.reduceLabel = tool.convert.toNumber(this.reduceLabel.string)
        };

        _proto.add_labbel = function add_labbel(lab) {
          var progress = this.addSlider.progress;
          var progressS = (Math.floor(progress * 4900) + 100).toFixed(0);
          if (progressS == "0") {
            this.addLabel.string = "100";
          } else {
            this.addLabel.string = progressS;
          }
          // SlotUnicornData.GameConst.addLabel = tool.convert.toNumber(this.addLabel.string)
        };

        _proto.win_label = function win_label(lab) {
          var progress = this.winSlider.progress;
          var progressS = (Math.floor(progress * 490) + 10).toFixed(0);
          if (progressS == "0") {
            this.winLabel.string = "10";
          } else {
            this.winLabel.string = progressS;
          }
          // SlotUnicornData.GameConst.winLabel = tool.convert.toNumber(this.winLabel.string)
        };

        _proto.onReduceSlider = function onReduceSlider() {
          var reduceSlider = this.reduceSlider.progress;
          this.reduceproBar.getComponent(UITransform).width = reduceSlider * 1000;
          // let reduceLabel = tool.convert.toNumber((reduceSlider * 10).toFixed(0))
          // this.reduce_Label(reduceLabel);
        };

        _proto.onAddSlider = function onAddSlider() {
          var addSlider = this.addSlider.progress;
          this.addproBar.getComponent(UITransform).width = addSlider * 1000;
          // let addLabel = tool.convert.toNumber((addSlider * 5000).toFixed(0))
          // this.add_labbel(addLabel);
        };

        _proto.onWinSlider = function onWinSlider() {
          var winSlider = this.winSlider.progress;
          this.winproBar.getComponent(UITransform).width = winSlider * 1000;
          // let winLabel = tool.convert.toNumber((winSlider * 500).toFixed(0))
          // this.win_label(winLabel);
        };

        _proto.onBtnClose = function onBtnClose() {
          var _this2 = this;
          // tween(this.content).to(0.25, { position: new Vec3(0, -1800) }).call(() => {
          //     this.node.active = false;
          // }).start();

          tween(this.node).removeSelf();
          tween(this.node).to(.25, {
            scale: Vec3.ZERO
          }).call(function () {
            _this2.node.active = false;
          }).start();
          tween(this.node.getComponent(UIOpacity)).removeSelf();
          tween(this.node.getComponent(UIOpacity)).to(.25, {
            opacity: 0
          }).start();
        };
        _createClass(UnicoreAutoManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UnicoreAutoManager;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "betLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggleRound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "reduceSlider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "reduceproBar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "reduceLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "addSlider", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "addproBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "addLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "winSlider", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "winproBar", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [_dec15], {
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

System.register("chunks:///_virtual/UnicoreDetailsManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameManager3.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, sp, Vec3, find, Label, Component, SlotUnicorn, ResourceMgr, ModuleDef;
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
      sp = module.sp;
      Vec3 = module.Vec3;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "e4b86drnL9G8apIAWRP3URN", "UnicoreDetailsManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UnicoreDetailsManager = exports('UnicoreDetailsManager', (_dec = ccclass('UnicoreDetailsManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicoreDetailsManager, _Component);
        function UnicoreDetailsManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "blackNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightContent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "letfSpNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightSpNode", _descriptor5, _assertThisInitialized(_this));
          _this._twId = void 0;
          return _this;
        }
        var _proto = UnicoreDetailsManager.prototype;
        _proto.onLoad = function onLoad() {
          if (UnicoreDetailsManager._instance) {
            this.node.destroy();
            return;
          }
          UnicoreDetailsManager._instance = this;
          this.leftContent.on(Node.EventType.TOUCH_END, this.hide, this);
          this.rightContent.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.onDestroy = function onDestroy() {
          UnicoreDetailsManager._instance = null;
        };
        _proto.showDetails = function showDetails(faceId, pos, pName) {
          this.hideAllFace();
          var lineLab = null;
          var lineMultLab = null;
          var targetNode = null;
          this.blackNode.active = true;
          var targetSpNode = null;
          if (pName === '2') {
            this.leftContent.active = false;
            this.rightContent.active = true;
            this.rightContent.position = new Vec3(145, pos.y);
            targetNode = this.rightContent;
            targetSpNode = this.rightSpNode;
          } else {
            this.leftContent.active = true;
            this.rightContent.active = false;
            this.leftContent.position = new Vec3(-460 + 290 * Number(pName), pos.y);
            targetNode = this.leftContent;
            targetSpNode = this.letfSpNode;
          }
          lineLab = find('lineNum', targetNode).getComponent(Label);
          lineMultLab = find('lineMult', targetNode).getComponent(Label);
          lineLab.string = "3";
          lineMultLab.string = SlotUnicorn.GameManager.instance.elementOdd[faceId] + "";

          // find(faceId.toString(), targetSpNode).active = true;
          var path = "spine/" + faceId + "/skeleton";
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.SLOTS_UNICORN, path, sp.SkeletonData, function (err, fab) {
            if (err) return console.error("--独角兽动作--", err);
            targetSpNode.skeletonData = fab;
            targetSpNode.setAnimation(0, '1', true);
          });
          this.unscheduleAllCallbacks();
          this.scheduleOnce(this.hide, 3);
        };
        _proto.hideAllFace = function hideAllFace() {
          // for (let i = 0; i < this.letfSpNode.children.length; i++) {
          //     this.letfSpNode.children[i].active = false;
          //     this.rightSpNode.children[i].active = false;
          // }
        };
        _proto.hide = function hide() {
          this.unscheduleAllCallbacks();
          this.leftContent.active = false;
          this.rightContent.active = false;
          this.blackNode.active = false;
        };
        _createClass(UnicoreDetailsManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UnicoreDetailsManager;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leftContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rightContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "letfSpNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rightSpNode", [_dec6], {
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

System.register("chunks:///_virtual/UnicoreResult.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UnicoreResultItem.ts', './UIManager2.ts', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Widget, Vec3, Node, Component, UnicoreResultItem, SlotUnicorn, AudioMgr, ModuleDef;
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
      Widget = module.Widget;
      Vec3 = module.Vec3;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      UnicoreResultItem = module.UnicoreResultItem;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "0f87bjzzYdHRav1zdgy8TLF", "UnicoreResult", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UnicoreResult = exports('UnicoreResult', (_dec = ccclass('UnicoreResult'), _dec2 = property(UnicoreResultItem), _dec3 = property(UnicoreResultItem), _dec4 = property(UnicoreResultItem), _dec5 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicoreResult, _Component);
        function UnicoreResult() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bitWin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mageWin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "superWin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLab", _descriptor4, _assertThisInitialized(_this));
          _this._winScore = 0;
          _this._level = 20;
          _this._betScore = 0;
          _this.isNext = false;
          _this.isBest = false;
          _this._numTw = null;
          _this._bigId = -1;
          //一级音效id
          _this._mageId = -1;
          //二级音效id
          _this._superId = -1;
          //三级音效id
          _this._payoutId = -1;
          return _this;
        }
        var _proto = UnicoreResult.prototype;
        //滚动数字音效id
        _proto.onLoad = function onLoad() {
          if (UnicoreResult._instance) {
            this.node.destroy();
            return;
          }
          UnicoreResult._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          this.node.active = false;
          this.node.on(Node.EventType.TOUCH_END, this.onBtnNext, this);
        };
        _proto.onDestroy = function onDestroy() {
          UnicoreResult._instance = null;
        };
        _proto.show = function show(betScore, winScore) {
          var _this2 = this;
          var mult = winScore / betScore;
          this._level = 20;
          this.isNext = false;
          this.isBest = false;
          this._winScore = winScore ? winScore : 0;
          this._betScore = betScore;
          if (!mult || mult < 10) return;
          AudioMgr.inst.play('audio/bgm_wins', 1, ModuleDef.SLOTS_UNICORN);
          AudioMgr.inst.playOneShot('audio/sfx_wins_payout', 1, ModuleDef.SLOTS_UNICORN).then(function (aeid) {
            return _this2._payoutId = aeid;
          });
          this.node.active = true;
          if (mult >= 10) {
            this.winLab.string = "0.00";
            AudioMgr.inst.playOneShot('audio/sfx_wins_hit_big', 1, ModuleDef.SLOTS_UNICORN).then(function (aeid) {
              return _this2._bigId = aeid;
            });
            this.bitWin.show(betScore, winScore, 0);
          }
        };
        _proto.showNext = function showNext(level, betScore, winScore) {
          var _this3 = this;
          this.isNext = false;
          if (level === 20) {
            this._level = 100;
            this.bitWin.hide();
            AudioMgr.inst.playOneShot('audio/sfx_wins_hit_mega', 1, ModuleDef.SLOTS_UNICORN).then(function (aeid) {
              return _this3._mageId = aeid;
            });
            this.mageWin.show2(betScore, winScore, 20 * betScore);
          } else if (level === 100) {
            this._level = -1;
            this.mageWin.hide();
            AudioMgr.inst.playOneShot('audio/sfx_wins_hit_mega', 1, ModuleDef.SLOTS_UNICORN).then(function (aeid) {
              return _this3._superId = aeid;
            });
            this.superWin.show2(betScore, winScore, 100 * betScore);
          }
        };
        _proto.onBtnNext = function onBtnNext() {
          var maxBet = this._betScore * this._level;
          maxBet = this._winScore >= maxBet ? maxBet : this._winScore;
          if (this._level === -1) maxBet = this._winScore;
          if (this.isNext) {
            this.unschedule(this.toNext);
            this.toNext();
            if (this.isBest) {
              this.hide();
            }
          } else {
            if (this._level === 20) {
              if (this._bigId != -1) AudioMgr.inst.stopOneShot(this._bigId, 'audio/sfx_wins_hit_big', ModuleDef.SLOTS_UNICORN), this._bigId = -1;
              this.bitWin.unAllCallbacks();
            } else if (this._level === 100) {
              if (this._mageId != -1) AudioMgr.inst.stopOneShot(this._mageId, 'audio/sfx_wins_hit_mega', ModuleDef.SLOTS_UNICORN), this._mageId = -1;
              this.mageWin.unAllCallbacks();
            } else if (this._level === -1) {
              if (this._superId != -1) AudioMgr.inst.stopOneShot(this._superId, 'audio/sfx_wins_hit_mega', ModuleDef.SLOTS_UNICORN), this._superId = -1;
              this.isBest = true;
              this.isNext = true;
              this.superWin.unAllCallbacks();
              return;
            }
            this.isNext = true;
            if (this._winScore > maxBet) this.scheduleOnce(this.toNext, 2);else this.isBest = true;
          }
        };
        _proto.toNext = function toNext() {
          this.showNext(this._level, this._betScore, this._winScore);
        };
        _proto.hide = function hide() {
          this.onBtnClose();
          this.isNext = false;
          this.isBest = false;
          this.bitWin.hide();
          this.mageWin.hide();
          this.superWin.hide();
          SlotUnicorn.UIManager.instance.resetGame();
          SlotUnicorn.UIManager.instance.setScore(this._winScore);
        };
        _proto.stopShot = function stopShot(shotName) {
          switch (shotName) {
            case 'big':
              if (this._bigId != -1) AudioMgr.inst.stopOneShot(this._bigId, 'audio/sfx_wins_hit_big', ModuleDef.SLOTS_UNICORN), this._bigId = -1;
              break;
            case 'mage':
              if (this._mageId != -1) AudioMgr.inst.stopOneShot(this._mageId, 'audio/sfx_wins_hit_mega', ModuleDef.SLOTS_UNICORN), this._mageId = -1;
              break;
            case 'super':
              if (this._superId != -1) AudioMgr.inst.stopOneShot(this._superId, 'audio/sfx_wins_hit_mega', ModuleDef.SLOTS_UNICORN), this._superId = -1;
              break;
            case 'payout':
              if (this._payoutId != -1) AudioMgr.inst.stopOneShot(this._payoutId, 'audio/sfx_wins_payout', ModuleDef.SLOTS_UNICORN), this._payoutId = -1;
              break;
          }
        };
        _proto.onBtnClose = function onBtnClose() {
          this.node.active = false;
        };
        _createClass(UnicoreResult, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UnicoreResult;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bitWin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mageWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "superWin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winLab", [_dec5], {
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

System.register("chunks:///_virtual/UnicoreResultItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UnicornUtils.ts', './UnicoreResult.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Vec3, tween, find, sp, Component, UnicornUtils, UnicoreResult, Num;
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
      Label = module.Label;
      Vec3 = module.Vec3;
      tween = module.tween;
      find = module.find;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      UnicornUtils = module.UnicornUtils;
    }, function (module) {
      UnicoreResult = module.UnicoreResult;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "cc145Bf5e1KZYzUbFEVN9t9", "UnicoreResultItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UnicoreResultItem = exports('UnicoreResultItem', (_dec = ccclass('UnicoreResultItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicoreResultItem, _Component);
        function UnicoreResultItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lightEffect1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lightEffect2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelLevel", _descriptor6, _assertThisInitialized(_this));
          //-1最大的页面等级
          _this._tw = null;
          _this._betScore = 0;
          _this._winScore = 0;
          return _this;
        }
        var _proto = UnicoreResultItem.prototype;
        _proto.show = function show(betScore, winScore, startBet) {
          var _this2 = this;
          this._betScore = betScore;
          this._winScore = winScore;
          this.node.active = true;
          this.content.scale = new Vec3(1, 0, 1);
          var maxBet = 0;
          if (this.panelLevel === 20) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === 100) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === -1) {
            maxBet = winScore;
          }
          this.winLab.string = Num.exchangeToThousands(1, startBet);
          tween(this.content).to(0.5, {
            scale: Vec3.ONE
          }).call(function () {
            var _find;
            (_find = find('unicorn', _this2.content)) == null || (_find = _find.getComponent(sp.Skeleton)) == null || _find.setAnimation(0, '1', true);
            if (_this2.panelLevel === 20) {
              startBet = 0;
              maxBet = betScore * _this2.panelLevel;
              maxBet = winScore >= maxBet ? maxBet : winScore;
            } else if (_this2.panelLevel === 100) {
              startBet = betScore * 20;
              maxBet = betScore * _this2.panelLevel;
              maxBet = winScore >= maxBet ? maxBet : winScore;
            } else {
              startBet = betScore * 100;
              maxBet = winScore;
            }
            var cb = function cb() {
              if (winScore > maxBet) {
                UnicoreResult.instance.showNext(_this2.panelLevel, betScore, winScore);
              } else {
                _this2.scheduleOnce(function () {
                  UnicoreResult.instance.hide();
                }, 2);
                UnicoreResult.instance.isNext = true;
                UnicoreResult.instance.isBest = true;
              }
            };
            _this2._tw = UnicornUtils.instance.IncreaseNumber(_this2.winLab, startBet, maxBet, {
              timer: 2.6,
              callback: cb.bind(_this2)
            });
            _this2._tw.start();
          }).start();
        };
        _proto.show2 = function show2(betScore, winScore, startBet) {
          var _this3 = this;
          this._betScore = betScore;
          this._winScore = winScore;
          this.node.active = true;
          this.content.scale = new Vec3(1, 0, 1);
          var maxBet = 0;
          if (this.panelLevel === 20) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === 100) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === -1) {
            maxBet = winScore;
          }
          this.winLab.string = Num.exchangeToThousands(1, startBet);
          if (this.panelLevel === 20) {
            startBet = 0;
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === 100) {
            startBet = betScore * 20;
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else {
            startBet = betScore * 100;
            maxBet = winScore;
          }
          var cb = function cb() {
            if (winScore > maxBet) {
              UnicoreResult.instance.showNext(_this3.panelLevel, betScore, winScore);
            } else {
              _this3.scheduleOnce(function () {
                UnicoreResult.instance.hide();
              }, 2);
              UnicoreResult.instance.stopShot('payout');
              UnicoreResult.instance.isNext = true;
              UnicoreResult.instance.isBest = true;
            }
          };
          this._tw = UnicornUtils.instance.IncreaseNumber(this.winLab, startBet, maxBet, {
            timer: 2.1,
            callback: cb.bind(this)
          });
          this._tw.start();
          tween(this.content).to(0.5, {
            scale: Vec3.ONE
          }).call(function () {}).start();
        };
        _proto.unAllCallbacks = function unAllCallbacks() {
          this.unscheduleAllCallbacks();
          var maxBet = this._betScore * this.panelLevel;
          maxBet = this._winScore >= maxBet ? maxBet : this._winScore;
          if (this.panelLevel === -1) maxBet = this._winScore;
          this.winLab.string = Num.exchangeToThousands(1, maxBet);
          if (this._winScore <= maxBet) {
            UnicoreResult.instance.stopShot('payout');
            this.scheduleOnce(function () {
              UnicoreResult.instance.hide();
            }, 2);
          }
          this._tw && (this._tw.stop(), this._tw = null);
        };
        _proto.onDisable = function onDisable() {
          this.unscheduleAllCallbacks();
          // if (this.panelLevel === 20) {
          //     find('unicorn', this.content).getComponent(sp.Skeleton).setAnimation(0, null);
          // }
          UnicoreResult.instance.stopShot('big');
          UnicoreResult.instance.stopShot('mage');
          this._tw && (this._tw.stop(), this._tw = null);
          this.hide();
          this.lightEffect1.active = false;
          this.lightEffect2.active = false;
        };
        _proto.hide = function hide() {
          this.node.active = false;
        };
        return UnicoreResultItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lightEffect1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lightEffect2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "panelLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnicornAniManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameManager3.ts', './GameConst3.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, macro, Vec3, Component, SlotUnicorn, SlotUnicornData, ResourceMgr, ModuleDef;
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
      Enum = module.Enum;
      sp = module.sp;
      macro = module.macro;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }, function (module) {
      SlotUnicornData = module.SlotUnicornData;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "71df9kE5ylCtKrC88lpGBjo", "UnicornAniManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UnicornAni = /*#__PURE__*/function (UnicornAni) {
        UnicornAni[UnicornAni["common"] = 0] = "common";
        UnicornAni[UnicornAni["stand"] = 1] = "stand";
        UnicornAni[UnicornAni["amazed"] = 2] = "amazed";
        UnicornAni[UnicornAni["jump"] = 3] = "jump";
        UnicornAni[UnicornAni["happy"] = 4] = "happy";
        UnicornAni[UnicornAni["shake"] = 5] = "shake";
        UnicornAni[UnicornAni["leer"] = 6] = "leer";
        UnicornAni[UnicornAni["anger"] = 7] = "anger";
        UnicornAni[UnicornAni["gaze"] = 8] = "gaze";
        UnicornAni[UnicornAni["yawn"] = 9] = "yawn";
        UnicornAni[UnicornAni["fete"] = 10] = "fete";
        return UnicornAni;
      }(UnicornAni || {});
      Enum(UnicornAni);
      var UnicornState = /*#__PURE__*/function (UnicornState) {
        UnicornState[UnicornState["other"] = 0] = "other";
        UnicornState[UnicornState["yawn"] = 1] = "yawn";
        return UnicornState;
      }(UnicornState || {}); //打哈切状态
      Enum(UnicornState);
      var yawn_intervalTime = 30; //打哈欠间隔时间
      var gaze_intervalTime = 18; //注视间隔时间
      /**
       * 独角兽动作管理
       */
      var UnicornAniManager = exports('UnicornAniManager', (_dec = ccclass('UnicornAniManager'), _dec2 = property(sp.Skeleton), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicornAniManager, _Component);
        function UnicornAniManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "unicorn", _descriptor, _assertThisInitialized(_this));
          _this._unicornAni = UnicornAni.common;
          _this._unicornState = UnicornState.other;
          _this._isPlayLoop = false;
          _this._lastPath = '';
          _this.skes = {};
          return _this;
        }
        var _proto = UnicornAniManager.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          if (UnicornAniManager._instance) {
            this.node.destroy();
            return;
          }
          UnicornAniManager._instance = this;
          //开启各类动作计时器
          this.playStand();
          this.schedule(this.playGaze, gaze_intervalTime, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.playYawn, yawn_intervalTime);
          this.unicorn.setCompleteListener(function (ani) {
            if (_this2._isPlayLoop) return;
            if (_this2._unicornAni === UnicornAni.yawn) {
              _this2.scheduleOnce(_this2.playYawn, yawn_intervalTime);
            }
            _this2._unicornAni = UnicornAni.common;
            _this2.playStand();
          });
        };
        _proto.onDestroy = function onDestroy() {
          UnicornAniManager._instance = null;
        };
        //加载独角兽动作
        _proto.loadUnicornAni = function loadUnicornAni(aniName, isLoop) {
          var _this3 = this;
          //只有没在播放其他动作时才播放当前动作
          if (this._unicornAni != UnicornAni.common && this._unicornAni != UnicornAni.stand) return;
          this._isPlayLoop = isLoop;
          var path = "spine/Unicorn@" + aniName + "/skeleton";
          if (aniName === 'fete') this.unicorn.node.position = new Vec3(0, 1015);else this.unicorn.node.position = new Vec3(70, 1015);
          this._unicornAni = UnicornAni[aniName];
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.SLOTS_UNICORN, path, sp.SkeletonData, function (err, fab) {
            if (err) return console.error("--独角兽动作--", err);
            _this3.unicorn.skeletonData = fab;
            _this3.unicorn.setAnimation(0, 'animation', isLoop);
          });
        }

        //重启打哈切计时器
        ;

        _proto.resetDowntime = function resetDowntime() {
          this.unschedule(this.playYawn);
          this.scheduleOnce(this.playYawn, yawn_intervalTime);
          //打断了打哈欠状态
          if (this._unicornState === UnicornState.yawn) {
            this._unicornState = UnicornState.other;
            this.schedule(this.playGaze, gaze_intervalTime, macro.REPEAT_FOREVER);
          }
        }

        //播放待机动作
        ;

        _proto.playStand = function playStand() {
          this.loadUnicornAni('stand', true);
        }

        //播放惊讶动作
        ;

        _proto.playAmazed = function playAmazed() {
          this.loadUnicornAni('amazed', false);
        }

        //播放跳动作
        ;

        _proto.playJump = function playJump() {
          this._unicornAni = UnicornAni.common;
          this.loadUnicornAni('jump', true);
        }

        //播放庆祝动作
        ;

        _proto.playFete = function playFete() {
          this._unicornAni = UnicornAni.common;
          this.loadUnicornAni('fete', true);
        }

        //播放开心动作
        ;

        _proto.playHappy = function playHappy() {
          this._unicornAni = UnicornAni.common;
          this.loadUnicornAni('happy', false);
        }

        //播放开心摇头动作
        ;

        _proto.playShake = function playShake() {
          //强行换动作
          this._unicornAni = UnicornAni.common;
          this.loadUnicornAni('shake', true);
        }

        //播放抛媚眼动作
        ;

        _proto.playLeer = function playLeer() {
          this.loadUnicornAni('leer', false);
        }

        //播放生气动作
        ;

        _proto.playAngry = function playAngry() {
          //文件夹单词错误
          this.loadUnicornAni('anger', false);
        }

        //播放注视动作
        ;

        _proto.playGaze = function playGaze() {
          if (SlotUnicorn.GameManager.instance.gameStatus === SlotUnicornData.GameStatus.start) return;
          this.loadUnicornAni('gaze', false);
        }

        //播放打哈欠动作
        ;

        _proto.playYawn = function playYawn() {
          if (SlotUnicorn.GameManager.instance.gameStatus === SlotUnicornData.GameStatus.start) return;
          this.unscheduleAllCallbacks();
          this._unicornState = UnicornState.yawn;
          this.loadUnicornAni('yawn', false);
        };
        _createClass(UnicornAniManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UnicornAniManager;
      }(Component), _class3._instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "unicorn", [_dec2], {
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

System.register("chunks:///_virtual/UnicornBaseButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, ccenum, CCInteger, SpriteFrame, Sprite, Button, tween, Vec3, color;
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
      ccenum = module.ccenum;
      CCInteger = module.CCInteger;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Button = module.Button;
      tween = module.tween;
      Vec3 = module.Vec3;
      color = module.color;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "2a8c0oLY6FO57ebA43Nzn6F", "UnicornBaseButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EType = /*#__PURE__*/function (EType) {
        EType[EType["DARK"] = 0] = "DARK";
        EType[EType["GRAY"] = 1] = "GRAY";
        return EType;
      }(EType || {});
      ccenum(EType);
      var UnicornBaseButton = exports('UnicornBaseButton', (_dec = ccclass('UnicornBaseButton'), _dec2 = property({
        type: EType,
        displayName: "禁用类型"
      }), _dec3 = property(CCInteger), _dec4 = property({
        displayName: '是否用作复选按钮',
        tooltip: '选中状态图片放0  未选中图片放1'
      }), _dec5 = property({
        displayName: '是否选中',
        tooltip: '复选按钮的选中状态',
        visible: function visible() {
          return this.isToggle;
        }
      }), _dec6 = property({
        type: [SpriteFrame],
        tooltip: '复选按钮要切换的图片',
        visible: function visible() {
          return this.isToggle;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Button) {
        _inheritsLoose(UnicornBaseButton, _Button);
        function UnicornBaseButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Button.call.apply(_Button, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isScale", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interactableType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dark", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isToggle", _descriptor4, _assertThisInitialized(_this));
          _this._isChecked = true;
          _initializerDefineProperty(_this, "toggleFrames", _descriptor5, _assertThisInitialized(_this));
          _this._st = void 0;
          return _this;
        }
        var _proto = UnicornBaseButton.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._st = this.node.getComponent(Sprite);
          this.node.on(Button.EventType.CLICK, function () {
            if (!_this2.interactable) return;
            // root.audio.play('Click');
            if (_this2.isToggle) {
              _this2.isChecked = !_this2.isChecked;
              if (!_this2._st) {
                _this2._st = _this2.node.getComponent(Sprite);
              }
              _this2._st.spriteFrame = _this2.isChecked ? _this2.toggleFrames[0] : _this2.toggleFrames[1];
            }
            if (_this2.transition == 0 && _this2.isScale) {
              tween(_this2.node).to(.1, {
                scale: new Vec3(1.05, 1.05, 1.05)
              }).to(.1, {
                scale: Vec3.ONE
              }).start();
            }
          });
        };
        _createClass(UnicornBaseButton, [{
          key: "isChecked",
          get: function get() {
            return this._isChecked;
          },
          set: function set(v) {
            this._isChecked = v;
            this.node.getComponent(Sprite).spriteFrame = this.isChecked ? this.toggleFrames[0] : this.toggleFrames[1];
          }
        }, {
          key: "interactable",
          get: function get() {
            return this._interactable;
          },
          set: function set(v) {
            if (!this._st) this._st = this.node.getComponent(Sprite);
            if (this._st) {
              if (this.interactableType == EType.DARK) {
                var c = v ? 255 : this.dark;
                this._st.color = color(c, c, c, 255);
              }
              if (this.interactableType == EType.GRAY) {
                this._st.grayscale = !v;
              }
            }
            this._interactable = v;
          }
        }]);
        return UnicornBaseButton;
      }(Button), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "interactableType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EType.DARK;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dark", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 125;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isChecked", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "isChecked"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggleFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnicornCashScroll.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "890a9/oba9Leaw1SXkVjCH6", "UnicornCashScroll", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UnicornCashScroll = exports('UnicornCashScroll', (_dec = ccclass('UnicornCashScroll'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicornCashScroll, _Component);
        function UnicornCashScroll() {
          return _Component.apply(this, arguments) || this;
        }
        return UnicornCashScroll;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnicornEndManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager2.ts', './UnicornGameItem.ts', './GameManager3.ts', './UnicornUtils.ts', './UnicornAniManager.ts', './Num.ts', './ModuleDef.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Prefab, SpriteFrame, instantiate, find, Vec3, Sprite, Mask, macro, randomRangeInt, tween, easing, Label, Component, SlotUnicorn, UnicornGameItem, SlotUnicorn$1, UnicornUtils, UnicornAniManager, Num, ModuleDef, AudioMgr;
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
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      find = module.find;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      Mask = module.Mask;
      macro = module.macro;
      randomRangeInt = module.randomRangeInt;
      tween = module.tween;
      easing = module.easing;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }, function (module) {
      UnicornGameItem = module.UnicornGameItem;
    }, function (module) {
      SlotUnicorn$1 = module.SlotUnicorn;
    }, function (module) {
      UnicornUtils = module.UnicornUtils;
    }, function (module) {
      UnicornAniManager = module.UnicornAniManager;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "2c33416X0FPS5EYHzsxa/0y", "UnicornEndManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 中奖后的展示管理
       */
      var UnicornEndManager = exports('UnicornEndManager', (_dec = ccclass('UnicornEndManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property({
        type: Prefab,
        displayName: "中奖对象"
      }), _dec6 = property([SpriteFrame]), _dec7 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicornEndManager, _Component);
        function UnicornEndManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "blackNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turbleContent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rewardPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lightFrames", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTip", _descriptor6, _assertThisInitialized(_this));
          _this._leftLightContent = null;
          _this._rightLightContent = null;
          _this._unicornElements = [];
          _this._rewardLines = [];
          _this._rewardLineNo = [];
          _this._isElementLight = [];
          _this._playIndex = 0;
          _this.lightIndexList = [];
          _this._data = [];
          _this.isRunMiniScroll = 0;
          return _this;
        }
        var _proto = UnicornEndManager.prototype;
        _proto.onLoad = function onLoad() {
          if (UnicornEndManager._instance) {
            this.node.destroy();
            return;
          }
          UnicornEndManager._instance = this;
          this._leftLightContent = SlotUnicorn.UIManager.instance.leftLightContent;
          this._rightLightContent = SlotUnicorn.UIManager.instance.rightLightContent;
          for (var i = 1; i <= 5; i++) {
            this._rewardLines[i] = [];
          }
          for (var _i = 0; _i < 3; _i++) {
            this._isElementLight[_i] = [false, false, false];
            this.lightIndexList[_i] = [];
            for (var j = 0; j < 3; j++) {
              var item = instantiate(this.rewardPrefab);
              item.parent = find(_i.toString(), this.turbleContent);
              item.name = j.toString();
              item.position = new Vec3(0, 638);
              item.active = false;
            }
          }
        };
        _proto.onDestroy = function onDestroy() {
          UnicornEndManager._instance = null;
        };
        _proto.showTurnble = function showTurnble(data) {
          if (data.length <= 0) return;
          this._data = data;
          AudioMgr.inst.playOneShot('audio/sfx_multipiler', 1, ModuleDef.SLOTS_UNICORN);
          this.blackNode.active = true;
          for (var i = 0; i < data.length; i++) {
            var lineNo = data[i].lineNo.toString();
            var line = find(lineNo, this.lineContent);
            line.active = true;
            this._rewardLines[lineNo].push(line);
            this._rewardLineNo.push(data[i].lineNo);
            find(lineNo, this._leftLightContent).getComponent(Sprite).spriteFrame = this.lightFrames[1];
            find(lineNo, this._rightLightContent).getComponent(Sprite).spriteFrame = this.lightFrames[1];
            for (var j = 0; j < data[i].line.length; j++) {
              var parent = find(j.toString(), this.turbleContent);
              var faceIndex = data[i].line[j];
              var item = find(faceIndex.toString(), parent);
              item.active = true;
              item.position = new Vec3(0, 319 - faceIndex * 319);
              var gameItem = item.getComponent(UnicornGameItem);
              gameItem.setNull();
              gameItem.setAnimation(this._unicornElements[j].elementIds[faceIndex], "2");
              gameItem.showEffect();
              this._rewardLines[lineNo].push(item);
            }
          }
          this.turbleContent.getComponent(Mask).enabled = false;
          this._rewardLineNo.sort(function (a, b) {
            return a - b;
          });
          AudioMgr.inst.playOneShot('audio/sfx_win_line', 1, ModuleDef.SLOTS_UNICORN);
          UnicornAniManager.instance.playLeer();
          if (data.length > 1) {
            this.schedule(this.playReward, 1.5, macro.REPEAT_FOREVER);
          }
        };
        _proto.setMiniElement = function setMiniElement() {
          if (this.isRunMiniScroll >= 1) return;
          this.isRunMiniScroll++;
          SlotUnicorn.UIManager.instance.stopShot();
          var indexList = [];
          //初始数组
          for (var j = 0; j < 3; j++) {
            indexList[j] = [];
          }
          for (var i = 0; i < 3; i++) {
            //取未点亮的标志位
            var index = UnicornUtils.instance.getRandomNumberNotInArray(0, 2, this.lightIndexList[i]);
            if (index === -1) continue;
            indexList[i].push(index);
          }
          var num = 0;
          //计算是否每列都有值被取到
          for (var _j = 0; _j < 3; _j++) {
            if (indexList[_j].length > 0) {
              num++;
            }
          }
          if (num === 3) {
            //每列都有值被取到
            var iList = [];
            var ran = randomRangeInt(1, 3);
            //随机删除n个位置的值
            for (var _i2 = 0; _i2 < ran; _i2++) {
              var _index = UnicornUtils.instance.getRandomNumberNotInArray(1, 2, iList);
              indexList[_index] = [];
              iList.push(_index);
            }
          }
          //每列都没有值被取到，已满
          if (num === 0) return;
          this.showMiniElement(indexList);
        };
        _proto.showMiniElement = function showMiniElement(indexList) {
          var _this2 = this;
          UnicornUtils.instance.startLoad(function (i) {
            if (indexList[i].length === 0) return;
            var randomNum = indexList[i][0];
            if (randomNum != -1) {
              _this2.lightIndexList[i].push(randomNum);
              var parent = find(i.toString(), _this2.turbleContent);
              var item = find(randomNum.toString(), parent);
              item.active = true;
              item.getComponent(UnicornGameItem).closeEffect();
              item.position = new Vec3(0, 638 + (2 - randomNum) * 319);
              SlotUnicorn$1.GameManager.instance.setImage(item, _this2._unicornElements[i].elementIds[randomNum]);
              if (_this2._unicornElements[i].elementIds[randomNum] != 0) {
                _this2._isElementLight[i][randomNum] = true;
              }
              item.scale = new Vec3(0.9, 0.9);
              tween(item).removeSelf();
              tween(item).to(.1, {
                position: new Vec3(0, 319 - randomNum * 319)
              }, {
                easing: easing.backOut
              }).delay(0.1).call(function (cbNode) {
                tween(cbNode).to(0.1, {
                  scale: Vec3.ONE
                }).call(function () {
                  for (var _i3 = 0; _i3 < 3; _i3++) {
                    AudioMgr.inst.playOneShot('audio/sfx_reel_stop', 1, ModuleDef.SLOTS_UNICORN);
                  }
                  var lineNoList = SlotUnicorn$1.GameManager.instance.getAllLineNo(_this2._isElementLight, _this2._rewardLineNo);
                  for (var _i4 = 0; _i4 < lineNoList.length; _i4++) {
                    if (_i4 === 0) AudioMgr.inst.playOneShot('audio/sfx_win_line', 1, ModuleDef.SLOTS_UNICORN);
                    var lineNo = lineNoList[_i4].toString();
                    var line = find(lineNo, _this2.lineContent);
                    line.active = true;
                    _this2._rewardLineNo.push(lineNoList[_i4]);
                    find(lineNo, _this2._leftLightContent).getComponent(Sprite).spriteFrame = _this2.lightFrames[1];
                    find(lineNo, _this2._rightLightContent).getComponent(Sprite).spriteFrame = _this2.lightFrames[1];
                    var lineIndexList = SlotUnicorn$1.GameManager.instance.getLineNo(lineNo);
                    for (var j = 0; j < _this2.turbleContent.children.length; j++) {
                      var element = find(lineIndexList[j].toString(), _this2.turbleContent.children[j]);
                      var gameItem = element.getComponent(UnicornGameItem);
                      gameItem.showEffect();
                    }
                  }
                  _this2.isRunMiniScroll = 0;
                }).tag(1200).start();
              }).tag(1200).start();
            }
          }, indexList.length);
        };
        _proto.playReward = function playReward() {
          AudioMgr.inst.playOneShot('audio/sfx_win_line', 1, ModuleDef.SLOTS_UNICORN);
          if (this._playIndex >= this._rewardLineNo.length) {
            this._playIndex = 0;
            this.winTip.active = false;
            //中奖线全部展示
            for (var i = 0; i < this._rewardLineNo.length; i++) {
              for (var j = 0; j < this._rewardLines[this._rewardLineNo[i]].length; j++) {
                this._rewardLines[this._rewardLineNo[i]][j].active = true;
                this.setLightFrame(i, 1);
              }
            }
          } else {
            for (var _i5 = 0; _i5 < this._rewardLineNo.length; _i5++) {
              for (var _j2 = 0; _j2 < this._rewardLines[this._rewardLineNo[_i5]].length; _j2++) {
                this._rewardLines[this._rewardLineNo[_i5]][_j2].active = false;
                this.setLightFrame(_i5, 0);
              }
            }
            this.winTip.active = true;
            if (this._rewardLineNo[this._playIndex] === 2) {
              this.winTip.position = new Vec3(0, 740);
            } else if (this._rewardLineNo[this._playIndex] === 3) {
              this.winTip.position = new Vec3(0, 100);
            } else {
              this.winTip.position = new Vec3(0, 420);
            }
            var winLabel = find("Label", this.winTip).getComponent(Label);
            winLabel.string = Num.exchangeToThousands(1, this.getLineScore(this._rewardLineNo[this._playIndex]));
            //展示其中的一条
            for (var _i6 = 0; _i6 < this._rewardLines[this._rewardLineNo[this._playIndex]].length; _i6++) {
              this._rewardLines[this._rewardLineNo[this._playIndex]][_i6].active = true;
              this.setLightFrame(this._playIndex, 1);
            }
            this._playIndex++;
          }
        };
        _proto.getLineScore = function getLineScore(no) {
          for (var i = 0; i < this._data.length; i++) {
            if (this._data[i].lineNo === no) {
              return this._data[i].lineScore;
            }
          }
        };
        _proto.setLightFrame = function setLightFrame(index, frameIndex) {
          var right = find(this._rewardLineNo[index].toString(), SlotUnicorn.UIManager.instance.rightLightContent);
          right.getComponent(Sprite).spriteFrame = SlotUnicorn.UIManager.instance.lightFrames[frameIndex];
          var left = find(this._rewardLineNo[index].toString(), SlotUnicorn.UIManager.instance.leftLightContent);
          left.getComponent(Sprite).spriteFrame = SlotUnicorn.UIManager.instance.lightFrames[frameIndex];
        };
        _proto.setMask = function setMask() {
          this.turbleContent.getComponent(Mask).enabled = false;
        };
        _proto.isAllLight = function isAllLight() {
          for (var j = 0; j < this.turbleContent.children.length; j++) {
            var content = this.turbleContent.children[j];
            for (var k = 0; k < content.children.length; k++) {
              if (!content.children[k].activeInHierarchy) {
                return false;
              }
            }
          }
          return true;
        };
        _proto.hide = function hide() {
          this.blackNode.active = false;
          this.winTip.active = false;
          this._data = [];
          this.turbleContent.getComponent(Mask).enabled = true;
          this.unscheduleAllCallbacks();
          for (var i = 0; i < this.lineContent.children.length; i++) {
            this.lineContent.children[i].active = false;
            this._leftLightContent.children[i].getComponent(Sprite).spriteFrame = this.lightFrames[0];
            this._rightLightContent.children[i].getComponent(Sprite).spriteFrame = this.lightFrames[0];
          }
          for (var _i7 = 1; _i7 <= 5; _i7++) {
            this._rewardLines[_i7] = [];
          }
          for (var _i8 = 0; _i8 < 3; _i8++) {
            this._isElementLight[_i8] = [false, false, false];
            this.lightIndexList[_i8] = [];
          }
          this._rewardLineNo = [];
          for (var j = 0; j < this.turbleContent.children.length; j++) {
            var content = this.turbleContent.children[j];
            for (var k = 0; k < content.children.length; k++) {
              content.children[k].position = new Vec3(0, 638);
              content.children[k].active = false;
            }
          }
        };
        _createClass(UnicornEndManager, [{
          key: "unicornElements",
          set: function set(value) {
            this._unicornElements = value;
          }
        }], [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UnicornEndManager;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lineContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "turbleContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rewardPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lightFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "winTip", [_dec7], {
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

System.register("chunks:///_virtual/UnicornGameItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameManager3.ts', './GameConst3.ts', './UnicoreDetailsManager.ts', './UIManager2.ts', './UnicornAniManager.ts', './ResourceMgr.ts', './ModuleDef.ts', './UnicornUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Sprite, sp, Node, SpriteFrame, tween, easing, find, Component, SlotUnicorn$1, SlotUnicornData, UnicoreDetailsManager, SlotUnicorn, UnicornAniManager, ResourceMgr, ModuleDef, UnicornUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      sp = module.sp;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      easing = module.easing;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      SlotUnicorn$1 = module.SlotUnicorn;
    }, function (module) {
      SlotUnicornData = module.SlotUnicornData;
    }, function (module) {
      UnicoreDetailsManager = module.UnicoreDetailsManager;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }, function (module) {
      UnicornAniManager = module.UnicornAniManager;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      UnicornUtils = module.UnicornUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "d5018PezFpL7pxRY7KhzTb4", "UnicornGameItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var skePos = {
        101: new Vec3(-7, -24),
        102: new Vec3(-3, -68),
        103: new Vec3(),
        104: new Vec3(3, -20),
        106: new Vec3(-1, -18),
        105: new Vec3(-6, -12),
        201: new Vec3(0, 0)
      };
      var UnicornGameItem = exports('UnicornGameItem', (_dec = ccclass('UnicornGameItem'), _dec2 = property(Sprite), _dec3 = property(sp.Skeleton), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicornGameItem, _Component);
        function UnicornGameItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ske", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wEffectNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectFrontNode", _descriptor5, _assertThisInitialized(_this));
          _this._faceId = 0;
          _this._lastPath = '';
          _this.skes = {};
          _this.skins = {};
          return _this;
        }
        var _proto = UnicornGameItem.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.ske.setCompleteListener(function (result) {
            if (result.animation.name === "2") {
              _this2.setAnimation(_this2._faceId, "1", true);
            }
          });
          UnicornUtils.instance.setNodesByComponent(this.node.parent);
        };
        _proto.initGameItem = function initGameItem(faceId) {
          this._faceId = faceId;
          this.setElement(faceId);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        };
        _proto.resetItem = function resetItem() {
          this.wEffectNode.active = false;
        };
        _proto.setNull = function setNull() {
          this.ske.skeletonData = null;
          this.icon.spriteFrame = null;
          this.node.off(Node.EventType.TOUCH_END, this.touchEnd, this);
        };
        /**
         * 设置元素的展示
         * @param faceId - ID
         */
        _proto.setElement = function setElement(faceId) {
          var _this3 = this;
          if (faceId === 201) {
            var path = "spine/" + faceId + "/skeleton";
            this.wEffectNode.active = true;
            this.ske.node.scale = new Vec3(0.9, 0.9);
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.SLOTS_UNICORN, path, sp.SkeletonData, function (err, skeData) {
              if (err || !_this3.ske || !_this3.ske.node) return console.error("--换面--", err);
              // this.skes[path] = skeData;

              _this3.ske.node.active = true;
              // this.ske.node.position = skePos[faceId];
              _this3.ske.skeletonData = skeData;
              _this3.ske.setAnimation(0, '1', true);
            });
          } else {
            var _path = "textures/turntable/element/" + faceId;
            this.ske.node.scale = Vec3.ONE;
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.SLOTS_UNICORN, _path, SpriteFrame, function (err, spriteFrame) {
              if (err || !_this3.icon || !_this3.icon.node) return console.error("--换面--", _path);
              _this3.icon.node.active = true;
              _this3.icon.spriteFrame = spriteFrame;
            });
          }
        };
        _proto.addGift = function addGift() {
          var _this4 = this;
          if (this._faceId === 201) {
            tween(this.node).to(0.2, {
              scale: new Vec3(1.1, 1.1)
            }, {
              easing: easing.backIn
            }).call(function () {
              tween(_this4.node).to(0.2, {
                scale: Vec3.ONE
              }, {
                easing: easing.elasticOut
              }).start();
            }).start();
            SlotUnicorn.UIManager.instance.addGiftEffect(this.node.worldPosition.clone());
          }
        }

        /**
         * 关闭除指定 ID 外的所有特效节点
         * @param faceId - 要保留显示特效的节点 ID，默认为 0
         */;
        _proto.closeEffect = function closeEffect(faceId) {
          if (faceId === void 0) {
            faceId = 0;
          }
          for (var i = 0; i < this.effectFrontNode.children.length; i++) {
            if (this.effectFrontNode.children[i].name === faceId.toString()) continue;
            this.effectFrontNode.children[i].active = false;
          }
          this.wEffectNode.active = false;
          for (var _i = 0; _i < this.effectNode.children.length; _i++) {
            if (this.effectNode.children[_i].name === faceId.toString()) continue;
            this.effectNode.children[_i].active = false;
          }
        }

        /**
         * 显示指定 ID 的特效节点
         */;
        _proto.showEffect = function showEffect() {
          this.closeEffect(this._faceId);
          if (this._faceId === 201) {
            this.wEffectNode.active = true;
          } else {
            var effect = find(this._faceId.toString(), this.effectNode);
            effect.active = true;
          }
          this.wEffectNode.active = false;
          find(this._faceId.toString(), this.effectFrontNode).active = true;
        }

        /**
         * 设置指定 ID 的动画
         * @param faceId - ID
         * @param aniName - 动画名称
         * @param isLoop - 是否循环播放动画，默认为 false
         */;
        _proto.setAnimation = function setAnimation(faceId, aniName, isLoop) {
          var _this5 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          this._faceId = faceId;
          var path = "spine/" + this._faceId + "/skeleton";
          this.ske.node.scale = Vec3.ONE;
          if (this._faceId === 201) {
            this.ske.node.scale = new Vec3(0.9, 0.9);
            if (aniName === "2") {
              path = "spine/" + this._faceId + "_click/skeleton";
            }
          }
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.SLOTS_UNICORN, path, sp.SkeletonData, function (err, skeData) {
            if (err || !_this5.ske || !_this5.ske.node) return console.error("--换面--", err);
            _this5.ske.node.active = true;
            // this.ske.node.position = skePos[faceId];
            _this5.ske.skeletonData = skeData;
            _this5.ske.setAnimation(0, aniName, isLoop);
          });
        };
        _proto.touchEnd = function touchEnd() {
          if (SlotUnicorn$1.GameManager.instance.gameStatus === SlotUnicornData.GameStatus.start) return;
          UnicornAniManager.instance.resetDowntime(); //重置倒计时
          UnicoreDetailsManager.instance.showDetails(this._faceId, this.node.position, this.node.parent.name); //显示元素详情
        };

        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_END, this.touchEnd, this);
        };
        return UnicornGameItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ske", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wEffectNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "effectFrontNode", [_dec6], {
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

System.register("chunks:///_virtual/UnicornNoticeView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager2.ts', './Num.ts', './ModuleDef.ts', './AudioMgr.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, RichText, Node, Label, SpriteFrame, tween, Vec3, macro, UITransform, Component, SlotUnicorn, Num, ModuleDef, AudioMgr, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      RichText = module.RichText;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      Vec3 = module.Vec3;
      macro = module.macro;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      SlotUnicorn = module.SlotUnicorn;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "78c5fEk+zpC24GAJ1nQflYw", "UnicornNoticeView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //<img src='101'/>
      var NoticeMsg = ['broadcast1', 'broadcast2', 'broadcast3', "broadcast4"];
      var UnicornNoticeView = exports('UnicornNoticeView', (_dec = ccclass('UnicornNoticeView'), _dec2 = property(Sprite), _dec3 = property(RichText), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property([SpriteFrame]), _dec8 = property([SpriteFrame]), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicornNoticeView, _Component);
        function UnicornNoticeView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "noticeBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "msgLab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winSpr", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winScoreLab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winFrames", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextFrames", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectBg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectBg2", _descriptor9, _assertThisInitialized(_this));
          _this._noticeIndex = 2;
          _this._msgTween = null;
          _this._winScore = 0;
          _this._isShow = false;
          return _this;
        }
        var _proto = UnicornNoticeView.prototype;
        //==============结算分数===================
        _proto.balanceScore = function balanceScore(betScore, winScore, isMini, isAllSame) {
          if (this._isShow) return;
          var mult = winScore / betScore;
          this._winScore = winScore;
          if (!mult) {
            SlotUnicorn.UIManager.instance.resetGame();
            return;
          }
          this._isShow = true;
          if (mult > 0 && mult < 10) {
            this.noticeBg.spriteFrame = this.winFrames[0];
            this.effectBg2.active = true;
          } else if (mult >= 10 && mult < 20) {
            this.noticeBg.spriteFrame = this.winFrames[1];
            this.effectBg.active = true;
          } else if (mult >= 100) {
            this.noticeBg.spriteFrame = this.winFrames[3];
            this.effectBg.active = true;
          }
          if (isAllSame) {
            if (isMini) {
              SlotUnicorn.UIManager.instance.setWinMult(mult);
              this.winScoreLab.string = Num.exchangeToThousands(1, winScore / 10);
            } else {
              SlotUnicorn.UIManager.instance.showReward(mult, winScore);
              this.winScoreLab.string = Num.exchangeToThousands(1, winScore);
            }
          } else {
            SlotUnicorn.UIManager.instance.showReward(mult, winScore);
            this.winScoreLab.string = Num.exchangeToThousands(1, winScore);
          }
          this.msgLab.node.active = false;
          this.scoreNode.active = true;
          AudioMgr.inst.playOneShot("audio/sfx_win_line", 1, ModuleDef.SLOTS_UNICORN);
          tween(this.node).removeSelf();
          tween(this.node).to(.2, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).delay(.1).to(.2, {
            scale: Vec3.ONE
          }).call(function () {
            if (mult < 10) {
              if (!isMini) SlotUnicorn.UIManager.instance.gameOver();else if (isMini && !isAllSame) {
                SlotUnicorn.UIManager.instance.resetGame();
              }
              SlotUnicorn.UIManager.instance.setScore(winScore);
            }
          }).union().start();
        };
        _proto.updateTip = function updateTip() {
          this.winScoreLab.string = Num.exchangeToThousands(1, this._winScore);
        };
        _proto.hideScore = function hideScore() {
          this.effectBg.active = false;
          this.effectBg2.active = false;
          this.scoreNode.active = false;
          this._isShow = false;
          this.msgLab.node.active = true;
          this.noticeBg.spriteFrame = this.winFrames[0];
          this.winSpr.spriteFrame = this.winTextFrames[0];
        }

        //================轮播===================
        ;

        _proto.showNotice = function showNotice() {
          this.schedule(this.setNotice, 7, macro.REPEAT_FOREVER, .1);
        };
        _proto.setNotice = function setNotice() {
          var _this2 = this;
          this._msgTween && (this._msgTween.stop(), this._msgTween = null);
          this.msgLab.string = LanguageData.getLangByID(NoticeMsg[this._noticeIndex]);
          this.scheduleOnce(function () {
            var size = _this2.msgLab.getComponent(UITransform).contentSize;
            if (size.width > 860) {
              _this2.msgLab.node.position = new Vec3((size.width - 860) / 2);
              _this2.scheduleOnce(function () {
                tween(_this2.msgLab.node).removeSelf();
                _this2._msgTween = tween(_this2.msgLab.node).to(5, {
                  position: new Vec3(-size.width, 0)
                });
                _this2._msgTween.start();
              }, 1);
            } else _this2.msgLab.node.position = Vec3.ZERO;
          }, 1 / 60);
          this._noticeIndex++;
          if (this._noticeIndex >= NoticeMsg.length) this._noticeIndex = 0;
        };
        _proto.stopNotice = function stopNotice() {
          this._msgTween && (this._msgTween.stop(), this._msgTween = null);
        };
        return UnicornNoticeView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noticeBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "msgLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winSpr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winScoreLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "winFrames", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "winTextFrames", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effectBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "effectBg2", [_dec10], {
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

System.register("chunks:///_virtual/UnicornPoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, NodePool, instantiate, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "e697elQzDxHhLNfsYfv2JVZ", "UnicornPoolManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PoolsName = {
        element: 'element',
        giftEffect: 'giftEffect'
      };
      var UnicornPoolManager = exports('UnicornPoolManager', (_dec = ccclass('UnicornPoolManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicornPoolManager, _Component);
        function UnicornPoolManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 存放所有的池子信息
           */
          _this.pools = {};
          return _this;
        }
        var _proto = UnicornPoolManager.prototype;
        /**
         * 创建对像池
         * @param  {[PoolParams]} params [{
         *      name:
         *      initCount:
         *      mediator
         *      prefab:
         * 
         * }]
         */
        _proto.createPool = function createPool(params) {
          // return new Promise<void>((resolve, reject) => {
          // console.log(params.prefab, "没有传入对像池的prefab");
          if (this.pools[params.name]) return; //reject();
          // console.log("createPool", params.name, "start");
          var mediator = params.mediator || "";
          var pool = new NodePool(mediator);
          var initCount = params.initCount || 1;
          var nodeName = params.nodeName ? params.nodeName : params.prefab.name;
          for (var i = 0; i < initCount; ++i) {
            var node = instantiate(params.prefab); // 创建节点
            node.name = '[' + params.name + ']' + nodeName;
            pool.put(node); // 通过 putInPool 接口放入对象池
          }

          params.pool = pool;
          this.pools[params['name']] = params;
          //     resolve();
          // });
        }

        /**
        * 创建对像池
        * @param  {[PoolParams]} params [{
        *      name:
        *      initCount:
        *      mediator
        *      prefab:
        * 
        * }]
        */;
        _proto.createPoolAsync = function createPoolAsync(params) {
          // console.log(params.prefab, "没有传入对像池的prefab")
          if (this.pools[params.name]) {
            if (params.cb) params.cb();
            return;
          }
          console.log("createPool", "start");
          var mediator = params.mediator || "";
          var pool = new NodePool(mediator);
          var initCount = params.initCount || 1;
          var num = 0;
          var nodeName = params.name ? params.name : params.prefab.name;
          for (var i = 0; i < initCount; ++i) {
            setTimeout(function () {
              var node = instantiate(params.prefab); // 创建节点
              node.name = '[' + params.name + ']' + nodeName;
              pool.put(node); // 通过 putInPool 接口放入对象池
              num++;
              if (num >= initCount && params.cb) {
                return params.cb();
              }
            }, 0);
          }
          params.pool = pool;
          this.pools[params.name] = params;
          console.log("createPool", "done");
        }

        /**
         * 销毁对象池及其有关信息
         * @param name 池子名
         */;
        _proto.clearPool = function clearPool(name) {
          console.log("clearPool", name);
          console.log(this.pools[name], "该对像池不存在:" + name);
          this.pools[name].pool.clear();
          delete this.pools[name];
        }

        /**
         * 销毁对象池，但对应信息保留
         * @param name 池子名
         */;
        _proto.clearPoolContent = function clearPoolContent(name) {
          console.log("clearPoolContent", name);
          console.log(this.pools[name], "该对像池不存在:" + name);
          this.pools[name].pool.clear();
        }

        /**
         * 获取对象池
         * @param name 池子名
         * @returns NodePool
         */;
        _proto.getPool = function getPool(name) {
          console.log(this.pools[name], "该对像池不存在:" + name);
          return this.pools[name].pool;
        }

        /**
         * 从对像池里取出一个对像
         * @param  {[type]} name [池子名]
         * @param  {[type]} params [池子参数]
         * @return {[type]}  [获取的对象]
         */;
        _proto.getPoolObj = function getPoolObj(name, params) {
          // console.log(this.pools[name], "该对像池不存在:" + name);
          if (this.pools[name].pool.size() == 0) {
            // 通过 size 接口判断对象池中是否有空闲的对象
            // console.log(name, '对象不够。创建新对象');
            var obj = instantiate(this.pools[name].prefab);
            this.pools[name].pool.put(obj);
          }
          return this.pools[name].pool.get(params); //参数会传递到指定mediator的reuse事件
        }

        /**
         * 获取对应信息
         * @param name 池子名
         * @returns {[PoolParams]} PoolParmas
         */;
        _proto.getPoolParams = function getPoolParams(name) {
          // console.log(this.pools[name], "该对像池不存在:" + name);
          return this.pools[name];
        }

        /**
         * 将对像放入对像池
         * @param  {[type]} name [池子名]
         * @param  {[type]} obj  [节点对象]
         */;
        _proto.putPoolObj = function putPoolObj(name, obj) {
          // console.log(this.pools[name], "该对像池不存在:" + name)
          this.pools[name].pool.put(obj);
        };
        _createClass(UnicornPoolManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new UnicornPoolManager();
            }
            return this._instance;
          }
        }]);
        return UnicornPoolManager;
      }(Component), _class2._instance = null, _class2.PoolsName = PoolsName, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnicornUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _inheritsLoose, _regeneratorRuntime, _createClass, _asyncToGenerator, cclegacy, _decorator, Vec3, ParticleSystem, easing, tween, randomRangeInt, v2, Component, Num;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      ParticleSystem = module.ParticleSystem;
      easing = module.easing;
      tween = module.tween;
      randomRangeInt = module.randomRangeInt;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "c209aWHFXVDUJ747c0yvl8Y", "UnicornUtils", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ElementTable = {
        "unicorn": 201,
        "heart": 101,
        "cloud": 102,
        "flower": 103,
        "marshmallow": 104,
        "rainbow": 105,
        "crown": 106
      };
      var LineCount = {
        1: [1, 1, 1],
        2: [0, 0, 0],
        3: [2, 2, 2],
        4: [0, 1, 2],
        5: [2, 1, 0],
        6: [1, 2, 1],
        7: [1, 2, 2],
        8: [2, 2, 1],
        9: [2, 2, 2],
        10: [2, 3, 2]
      };
      var UnicornUtils = exports('UnicornUtils', (_dec = ccclass('UnicornUtils'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnicornUtils, _Component);
        function UnicornUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.numberTween = null;
          //==================================分帧加载===============================================
          _this.delayTime = 0.2;
          return _this;
        }
        var _proto = UnicornUtils.prototype;
        /**
             * 返回的数据转换
             * @param data 
             * @param bet 下注额
             */
        _proto.conver = function conver(data, bet) {
          var result = {
            betScore: 0,
            code: 200,
            elements: [],
            lines: [],
            mini: {
              miniElementId: 0,
              miniElements: [],
              miniLines: [],
              miniWinScore: 0
            },
            winScore: 0,
            isAllSame: 0
          };
          if (data.isSucc) {
            result.code = 200;
            result.betScore = bet;
            result.winScore = Num.toThousandsBack(data.res.payout);
            var res = data.res.results[0];
            if (!res.bigEvents) {
              //连线游戏数据
              for (var i = 0; i < 3; i++) {
                //初始化连线游戏的数据
                result.elements.push({
                  elementIds: []
                });
                for (var j = 0; j < 3; j++) {
                  result.elements[i].elementIds.push(0);
                }
              }
              //所有的元素符号
              for (var _i = res.symbols.length - 1; _i >= 0; _i--) {
                if (res.symbols[_i].id === 'null') continue; //空位置，跳过
                result.elements[res.symbols[_i].coordinate.reel - 1].elementIds[3 - res.symbols[_i].coordinate.row] = ElementTable[res.symbols[_i].id];
              }
              if (res.paylines.length > 0) {
                //所有的中奖线
                for (var _i2 = 0; _i2 < res.paylines.length; _i2++) {
                  var payline = res.paylines[_i2];
                  var lineNo = parseInt(payline.id); //线号
                  var lineScore = Num.toThousandsBack(payline.payout); //线得分
                  result.lines.push({
                    lineNo: lineNo,
                    lineScore: lineScore,
                    line: LineCount[lineNo]
                  });
                }
              }
            } else {
              //幸运游戏数据
              result.mini.miniWinScore = Num.toThousandsBack(data.res.payout); //幸运游戏得分
              result.mini.miniElementId = ElementTable[res.chosenSymbolId ? res.chosenSymbolId : '']; //幸运游戏元素
              for (var _i3 = 0; _i3 < 3; _i3++) {
                //初始化连线游戏的数据
                result.mini.miniElements.push({
                  elementIds: []
                });
                for (var _j = 0; _j < 3; _j++) {
                  result.mini.miniElements[_i3].elementIds.push(0);
                }
              }
              for (var _i4 = res.symbols.length - 1; _i4 >= 0; _i4--) {
                if (res.symbols[_i4].id === 'the_empty') result.mini.miniElements[res.symbols[_i4].coordinate.reel - 1].elementIds[3 - res.symbols[_i4].coordinate.row] = 0; //空位置
                else result.mini.miniElements[res.symbols[_i4].coordinate.reel - 1].elementIds[3 - res.symbols[_i4].coordinate.row] = ElementTable[res.symbols[_i4].id];
              }
              if (res.paylines.length > 0) {
                //所有的中奖线
                for (var _i5 = 0; _i5 < res.paylines.length; _i5++) {
                  var _payline = res.paylines[_i5];
                  var _lineNo = parseInt(_payline.id); //线号
                  var _lineScore = Num.toThousandsBack(_payline.payout); //线得分
                  result.mini.miniLines.push({
                    lineNo: _lineNo,
                    lineScore: _lineScore,
                    line: LineCount[_lineNo]
                  });
                }
              }
              res.allTheSame && res.allTheSame.isTheSame && (result.isAllSame = ElementTable[res.chosenSymbolId]);
            }
          } else {
            result.code = 500;
          }
          return result;
        }

        /**
        * 递归旋转、缩放子节点下粒子组件的节点
        * @param root 要查找的节点
        * @param componentType 组件类型
        */;
        _proto.setNodesByComponent = function setNodesByComponent(root, angle, scale) {
          var _this2 = this;
          if (angle === void 0) {
            angle = 90;
          }
          if (scale === void 0) {
            scale = new Vec3(0.75, 0.75, 0.75);
          }
          // 检查当前节点是否包含指定类型的组件
          var comp = root.getComponent(ParticleSystem);
          if (comp) {
            // const deg = angle * (Math.PI / 180);
            // if (comp.startRotationZ.mode === CurveRange.Mode.Constant) {
            //     comp.startRotationZ.constant = deg;
            // } else if (comp.startRotationZ.mode === CurveRange.Mode.TwoConstants) {
            //     comp.startRotationZ.constantMin += deg;
            //     comp.startRotationZ.constantMax += deg;
            // }
            comp.node.scale = scale.clone().multiply(comp.node.scale.clone());
          }
          root.children.forEach(function (child) {
            return _this2.setNodesByComponent(child, angle, scale);
          });
        }

        /**
         * 数字增长动画
         * @param startNum 开始值
         * @param endNum 目标值
         * @param textCom 文本组件
         * @param param 
         * 时间默认3秒
         * 小数位默认2位
         */;
        _proto.IncreaseNumber = function IncreaseNumber(textCom, startNum, endNum, param) {
          // this.numberTween && this.numberTween.stop();
          if (!param) {
            param = {
              prefix: '',
              //前缀
              timer: 3,
              //缓动时间，默认3秒
              place: 2,
              //小数位， 默认2位
              easing: {
                easing: easing.quintOut
              },
              tag: 1
            };
          }
          var place = param.place ? param.place : 2;
          var timer = param.timer ? param.timer : 3;
          var prefix = param.prefix ? param.prefix : '';
          var tags = param.tag ? param.tag : 1;
          var pEasing = param.easing ? param.easing : {
            easing: easing.quintOut
          };
          var dis = endNum - startNum;
          if (dis < 0) {
            // console.log("起始值比较小", startNum, '-', endNum);
            return this.ReceduNumber(textCom, startNum, endNum, param);
          }
          var length = dis * Math.pow(10, place);
          var obj = {
            number: 0
          };
          textCom.string = prefix + Num.exchangeToThousands(1, startNum);
          this.numberTween = tween(obj).to(timer, {
            number: Math.round(length)
          }, {
            progress: function progress(start, end, current, ratio) {
              textCom.string = prefix + Num.exchangeToThousands(1, (startNum * Math.pow(10, place) + Math.ceil(start + (end - start) * ratio)) / Math.pow(10, place));
              return (startNum * Math.pow(10, place) + start + (end - start) * ratio) / Math.pow(10, place);
            },
            easing: easing.linear
          }).call(function () {
            textCom.string = prefix + Num.exchangeToThousands(1, endNum);
            param.callback && param.callback();
          }).tag(tags);
          return this.numberTween;
        }

        /**
         * 数字减少动画
         * @param startNum 开始值
         * @param endNum 目标值
         * @param textCom 文本组件
         * @param param 
         * 时间默认2秒
         * 小数位默认2位
         */;
        _proto.ReceduNumber = function ReceduNumber(textCom, startNum, endNum, param) {
          this.numberTween && this.numberTween.stop();
          if (!param) {
            param = {
              prefix: '',
              //前缀
              timer: 2,
              //缓动时间，默认2秒
              place: 2 //小数位， 默认2位
            };
          }

          var place = param.place ? param.place : 2;
          var timer = param.timer ? param.timer : 2;
          var prefix = param.prefix ? param.prefix : '';
          var tag = param.tag ? param.tag : 2;
          var dis = Math.abs(endNum - startNum);
          // if (dis < 0) return console.error('结束值必须大于开始值');
          var length = dis * Math.pow(10, place);
          var obj = {
            number: 0
          };
          textCom.string = prefix + Num.exchangeToThousands(1, startNum);
          this.numberTween = tween(obj).to(timer, {
            number: length
          }, {
            progress: function progress(start, end, current, ratio) {
              textCom.string = prefix + Num.exchangeToThousands(1, (startNum * Math.pow(10, place) - Math.ceil(start + (end - start) * ratio)) / Math.pow(10, place));
              return (startNum * Math.pow(10, place) - start + (end - start) * ratio) / Math.pow(10, place);
            },
            easing: easing.quintOut
          }).call(function () {
            textCom.string = prefix + Num.exchangeToThousands(1, endNum);
            param.callback && param.callback();
          }).tag(tag);
          return this.numberTween;
        }

        /**
         * 返回不在数组中的最小（包含）和最大（包含）之间的随机值
         * @argument 没优化，最大最小值不宜隔太大
         * @param min 随机最小值
         * @param max 随机最大值
         * @param arr 参考数组
         * @returns 数组内全包含则返回-1
         */;
        _proto.getRandomNumberNotInArray = function getRandomNumberNotInArray(min, max, arr) {
          //必包含
          var notInArrayNum = [];
          for (var i = min; i <= max; i++) {
            //取所有不在数组中的值
            if (!arr.includes(i)) {
              notInArrayNum.push(i);
            }
          }
          if (notInArrayNum.length <= 0) return -1;
          var index = randomRangeInt(0, notInArrayNum.length);
          return notInArrayNum[index];
        }

        /**
         * @desc 三阶贝塞尔
         * @param {any} target 运动目标
         * @param {number} duration tween时长
         * @param {Vec3} p1 起点坐标
         * @param {Vec3} cp 控制点
         * @param {Vec3} p2 终点坐标
         * @param {object} opts 
         * @returns {any} 返回一个tween动画，启用需要start()
         */;
        _proto.bezierTo = function bezierTo(target, duration, p1, cp, p2, opts) {
          opts = opts || Object.create(null);
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            var z = (1 - t) * (1 - t) * p1.z + 2 * t * (1 - t) * cp.z + t * t * p2.z;
            return new Vec3(x, y, z);
          };
          opts.onUpdate = function (_arg, ratio) {
            //移动前位置
            var beforPos = target.position.clone();
            target.position = twoBezier(ratio, p1, cp, p2);
            //移动后位置
            var targetPos = target.position.clone();
            var dx = beforPos.x - targetPos.x;
            var dy = beforPos.y - targetPos.y;
            var addAngle = 180;
            var dp = v2(0, 0);
            //计算方向
            if (dx < 0) {
              addAngle = 180;
              dp = v2(0, 1);
            } else {
              addAngle = 0;
              dp = v2(0, -1);
            }
            var dir = v2(dx, dy);
            var angle = dir.angle(dp);
            //运动角度
            var degree = angle / Math.PI * 180 + addAngle;
            target.eulerAngles = new Vec3(0, 0, degree);
          };
          return tween(target).to(duration, {}, opts);
        }

        /**
        * @desc 三阶贝塞尔
        * @param {any} target 运动目标
        * @param {number} duration tween时长
        * @param {Vec3} p1 起点坐标
        * @param {Vec3} cp 控制点
        * @param {Vec3} p2 终点坐标
        * @param {object} opts 
        * @returns {any} 返回一个tween动画，启用需要start()
        */;
        _proto.bezierTo2 = function bezierTo2(target, duration, delay, p1, cp, p2, opts) {
          opts = opts || Object.create(null);
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            var z = (1 - t) * (1 - t) * p1.z + 2 * t * (1 - t) * cp.z + t * t * p2.z;
            return new Vec3(x, y, z);
          };
          opts.onUpdate = function (_arg, ratio) {
            //移动前位置
            // const beforPos = target.position.clone();
            target.worldPosition = twoBezier(ratio, p1, cp, p2);
          };
          return tween(target).delay(delay).to(duration, {}, opts);
        };
        _proto.startLoad = function startLoad(callback, length) {
          for (var _len2 = arguments.length, data = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            data[_key2 - 2] = arguments[_key2];
          }
          this.framingLoad(callback, length, data);
        }

        /**
         * 获取生成子节点的Generator
         */;
        _proto._getItemGenerator = /*#__PURE__*/
        _regeneratorRuntime().mark(function _getItemGenerator(callback, length, data) {
          var isSub, i, _i6, _i7;
          return _regeneratorRuntime().wrap(function _getItemGenerator$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(data.length > 0)) {
                  _context.next = 21;
                  break;
                }
                isSub = data[data.length - 1];
                if (!(typeof isSub === "boolean" && isSub)) {
                  _context.next = 12;
                  break;
                }
                i = length - 1;
              case 4:
                if (!(i >= 0)) {
                  _context.next = 10;
                  break;
                }
                _context.next = 7;
                return callback(i, data);
              case 7:
                i--;
                _context.next = 4;
                break;
              case 10:
                _context.next = 19;
                break;
              case 12:
                _i6 = 0;
              case 13:
                if (!(_i6 < length)) {
                  _context.next = 19;
                  break;
                }
                _context.next = 16;
                return callback(_i6, data);
              case 16:
                _i6++;
                _context.next = 13;
                break;
              case 19:
                _context.next = 28;
                break;
              case 21:
                _i7 = 0;
              case 22:
                if (!(_i7 < length)) {
                  _context.next = 28;
                  break;
                }
                _context.next = 25;
                return callback(_i7, data);
              case 25:
                _i7++;
                _context.next = 22;
                break;
              case 28:
              case "end":
                return _context.stop();
            }
          }, _getItemGenerator);
        })
        /**
         * 实现分帧加载
         */;

        _proto.framingLoad = /*#__PURE__*/
        function () {
          var _framingLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback, length, data) {
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.executePreFrame(this._getItemGenerator(callback, length, data), 1);
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this);
          }));
          function framingLoad(_x, _x2, _x3) {
            return _framingLoad.apply(this, arguments);
          }
          return framingLoad;
        }()
        /**
         * 分帧执行 Generator 逻辑
         *
         * @param generator 生成器
         * @param duration 持续时间（ms）
         *          每次执行 Generator 的操作时，最长可持续执行时长。
         *          假设值为8ms，那么表示1帧（总共16ms）下，分出8ms时间给此逻辑执行
         */;

        _proto.executePreFrame = function executePreFrame(generator, duration) {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var gen = generator;
            // 创建执行函数
            var execute = function execute() {
              // 执行之前，先记录开始时间戳
              var startTime = new Date().getTime();
              _this3.scheduleOnce(function () {
                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (var iter = gen.next();; iter = gen.next()) {
                  // 判断是否已经执行完所有 Generator 的小代码段
                  // 如果是的话，那么就表示任务完成
                  if (iter == null || iter.done) {
                    resolve(true);
                    return;
                  }

                  // 每执行完一段小代码段，都检查一下是否
                  // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
                  if (new Date().getTime() - startTime > duration) {
                    // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                    _this3.scheduleOnce(function () {
                      execute();
                    });
                    return;
                  }
                }
              }, _this3.delayTime);
            };

            // 运行执行函数
            execute();
          });
        };
        _createClass(UnicornUtils, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new UnicornUtils();
            }
            return this._instance;
          }
        }]);
        return UnicornUtils;
      }(Component), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_unicorn', 'chunks:///_virtual/module_slots_unicorn'); 
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