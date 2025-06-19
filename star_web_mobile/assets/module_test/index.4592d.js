System.register("chunks:///_virtual/module_test", ['./TestGameMgr.ts', './TestGameScene.ts', './TestLobbyScene.ts', './UITestHUD.ts'], function () {
  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TestGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameMgr, SubGameDef, SubGameMgr, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34d6evPvsBDybQIVrly4lc3", "TestGameMgr", undefined);
      var TestGameMgr = exports('TestGameMgr', /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(TestGameMgr, _GameMgr);
        function TestGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameType = SubGameDef.TEST;
          _this._entryScene = {
            name: 'lobby_gametest',
            bundle: ModuleDef.TEST
          };
          _this._gameScene = {
            name: 'game_gametest',
            bundle: ModuleDef.TEST
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = TestGameMgr.prototype;
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {};
        _createClass(TestGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new TestGameMgr();
            }
            return this._inst;
          }
        }]);
        return TestGameMgr;
      }(GameMgr));
      TestGameMgr._inst = void 0;
      SubGameMgr.inst.registerGameMgr(TestGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UITestHUD.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, UITestHUD;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UITestHUD = module.UITestHUD;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fd4a64OF1xFKoLPYqBQmgeD", "TestGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestGameScene = exports('TestGameScene', (_dec = ccclass('TestGameScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestGameScene, _Component);
        function TestGameScene() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = TestGameScene.prototype;
        _proto.start = function start() {
          tgx.UIMgr.inst.closeAll();
          tgx.UIMgr.inst.showUI(UITestHUD);
        };
        _proto.update = function update(deltaTime) {};
        return TestGameScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserHead.ts', './UserMgr.ts', './SceneDef.ts', './NetGameServer.ts', './UIChat.ts', './UIAnnouncement.ts', './UI_SearchingRival.ts', './RoomMgr.ts', './GameMgr.ts', './TestGameMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, UserHead, UserMgr, SceneDef, lobbyNet, UIChat, UIAnnouncement, UI_SearchingRival, RoomMgr, GameMode, TestGameMgr;
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
      UserHead = module.UserHead;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      lobbyNet = module.lobbyNet;
    }, function (module) {
      UIChat = module.UIChat;
    }, function (module) {
      UIAnnouncement = module.UIAnnouncement;
    }, function (module) {
      UI_SearchingRival = module.UI_SearchingRival;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      GameMode = module.GameMode;
    }, function (module) {
      TestGameMgr = module.TestGameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "782668DBJlO/pL6A5RpS/J5", "TestLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestLobbyScene = exports('TestLobbyScene', (_dec = ccclass('TestLobbyScene'), _dec2 = property(UserHead), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestLobbyScene, _Component);
        function TestLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TestLobbyScene.prototype;
        _proto.start = function start() {
          var _this2 = this;
          //@en 
          //@zh 如果 uid 为空，表示直接打开了此场景，强行使用 START 场景开始。
          if (!UserMgr.inst.uid) {
            tgx.SceneUtil.loadScene(SceneDef.START);
            return;
          }

          //清理所有 UI
          tgx.UIMgr.inst.closeAll();

          //如果为 socket 模式，则开启大厅聊天
          if (lobbyNet.type != 'http') {
            tgx.UIMgr.inst.showUI(UIChat, null, null, lobbyNet);
          }

          //@en 
          //@zh 显示滚动公告
          tgx.UIMgr.inst.showUI(UIAnnouncement, function (ui) {
            //设置位置
            var pos = _this2.announcementPlacer.position;
            ui.setPosition(pos.x, pos.y);
          });
        };
        _proto.onBtnQuickPlayClicked = function onBtnQuickPlayClicked() {
          var _this3 = this;
          tgx.UIMgr.inst.showUI(UI_SearchingRival, function (ui) {
            _this3.scheduleOnce(function () {
              ui.startMatch('test');
            }, 1.5);
          });
        };
        _proto.onBtnSoloModeClicked = function onBtnSoloModeClicked() {
          RoomMgr.inst.gameMode = GameMode.SOLO;
          tgx.SceneUtil.loadScene(TestGameMgr.inst.gameScene);
        };
        _proto.update = function update(deltaTime) {};
        return TestLobbyScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userHead", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "announcementPlacer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITestHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './RoomMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component, GameUILayers, ModuleDef, RoomMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _dec3, _class4;
      cclegacy._RF.push({}, "7b177rZAQpJfr/7YkYZWTWs", "UITestHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UITestHUD = exports('Layout_UITestHUD', (_dec = ccclass('Layout_UITestHUD'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UITestHUD, _Component);
        function Layout_UITestHUD() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnBack", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UITestHUD;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      var UITestHUD = exports('UITestHUD', (_dec3 = tgx_class(ModuleDef.TEST), _dec3(_class4 = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UITestHUD, _tgx$UIController);
        function UITestHUD() {
          return _tgx$UIController.call(this, "ui_test_hud/ui_test_hud", GameUILayers.HUD, Layout_UITestHUD) || this;
        }
        var _proto = UITestHUD.prototype;
        _proto.onCreated = function onCreated(params) {
          this.onButtonEvent(this.layout.btnBack, function () {
            tgx.UIAlert.show("确定要退出游戏吗？", true).onClick(function (isOK) {
              if (isOK) {
                RoomMgr.inst.exitRoom();
              }
            });
          });
        };
        _createClass(UITestHUD, [{
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }]);
        return UITestHUD;
      }(tgx.UIController)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_test', 'chunks:///_virtual/module_test'); 
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