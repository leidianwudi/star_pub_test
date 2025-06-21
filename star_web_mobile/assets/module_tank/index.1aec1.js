System.register("chunks:///_virtual/DamageLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "ed1f693B5ZAzr48dUvNXANX", "DamageLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DamageLabel = exports('DamageLabel', (_dec = ccclass('DamageLabel'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DamageLabel, _Component);
        function DamageLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._floatSpeed = 20;
          _this._lifeTime = 1.0;
          _this._elapsedTime = 0;
          return _this;
        }
        var _proto = DamageLabel.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {
          this._elapsedTime += deltaTime;
          var p = this.node.position;
          this.node.setPosition(p.x, p.y + deltaTime * this._floatSpeed, p.z);
          if (this._elapsedTime > this._lifeTime) {
            this.node.destroy();
          }
        };
        return DamageLabel;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Effect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f87e5eLbipGubz+5Or5RWXQ", "Effect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Effect = exports('Effect', (_dec = ccclass('Effect'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Effect, _Component);
        function Effect() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Effect.prototype;
        _proto.start = function start() {
          var _this = this;
          this.scheduleOnce(function () {
            var uiOpacity = _this.node.getComponent(UIOpacity);
            tween(uiOpacity).to(1.0, {
              opacity: 0
            }).start();
          }, 3.0);
        };
        _proto.update = function update(deltaTime) {};
        return Effect;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FollowTarget.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, isValid, Component;
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
      isValid = module.isValid;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f705fWwQU9LILordSGQJXqx", "FollowTarget", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FollowTarget = exports('FollowTarget', (_dec = ccclass('FollowTarget'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FollowTarget, _Component);
        function FollowTarget() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FollowTarget.prototype;
        _proto.start = function start() {};
        _proto.lateUpdate = function lateUpdate(deltaTime) {
          if (isValid(this.target)) {
            var tp = this.target.worldPosition;
            var sp = this.node.worldPosition;
            this.node.setWorldPosition(tp.x, tp.y, sp.z);
          }
        };
        return FollowTarget;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UITankGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "35614TjkZNLVaErJuPNDP8I", "Layout_UITankGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        type = _decorator.type;
      var Layout_UITankGameHUD = exports('Layout_UITankGameHUD', (_dec = ccclass('Layout_UITankGameHUD'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UITankGameHUD, _Component);
        function Layout_UITankGameHUD() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnExit", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRoomId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPos", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPlayerNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeRoot", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UITankGameHUD;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnExit", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblRoomId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblPlayerNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "noticeRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UITankGameMask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fcac0v/YIFJvbTaRrmsNHhF", "Layout_UITankGameMask", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UITankGameMask = exports('Layout_UITankGameMask', (_dec = ccclass('Layout_UITankGameMask'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UITankGameMask, _Component);
        function Layout_UITankGameMask() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprGrayScreen", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFogOfWar", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UITankGameMask;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprGrayScreen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprFogOfWar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UITankGameRank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3ed57uSugVEA4kvUM0JVxfQ", "Layout_UITankGameRank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UITankGameRank = exports('Layout_UITankGameRank', (_dec = ccclass('Layout_UITankGameRank'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UITankGameRank, _Component);
        function Layout_UITankGameRank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listRoot", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UITankGameRank;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UITankJoystick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "08c9fBAccJNS4nsaO4D33pI", "Layout_UITankJoystick", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UITankJoystick = exports('Layout_UITankJoystick', (_dec = ccclass('Layout_UITankJoystick'), _dec2 = property([Sprite]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UITankJoystick, _Component);
        function Layout_UITankJoystick() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cdSprites", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UITankJoystick;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cdSprites", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UITankRevive.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Component;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "03340R2AB9Mcou6uF8cFrnG", "Layout_UITankRevive", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UITankRevive = exports('Layout_UITankRevive', (_dec = ccclass('Layout_UITankRevive'), _dec2 = property(Label), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UITankRevive, _Component);
        function Layout_UITankRevive() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblTime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprScreen", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UITankRevive;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprScreen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_tank", ['./Effect.ts', './DamageLabel.ts', './FollowTarget.ts', './NameHP.ts', './Tank.ts', './TankBullet.ts', './TankController.ts', './TankGameAudioMgr.ts', './TankGameHUD.ts', './TankGameMgr.ts', './TankGameScene.ts', './TankLobbyScene.ts', './TankMgr.ts', './TankMovement2D.ts', './Layout_UITankGameHUD.ts', './NoticeLabel.ts', './UITankGameHUD.ts', './Layout_UITankGameMask.ts', './UITankGameMask.ts', './Layout_UITankGameRank.ts', './TankGameRankItem.ts', './UITankGameRank.ts', './Layout_UITankJoystick.ts', './UITankJoystick.ts', './Layout_UITankRevive.ts', './UITankRevive.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/NameHP.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, Component;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "70dbarSbilHfrVZ77CvDOBA", "NameHP", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NameHP = exports('NameHP', (_dec = ccclass('NameHP'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NameHP, _Component);
        function NameHP() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hpBar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblName", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        _createClass(NameHP, [{
          key: "hpPercent",
          set: function set(v) {
            this.hpBar.setScale(v, 1);
          }
        }, {
          key: "name",
          set: function set(v) {
            this.lblName.string = v;
          }
        }, {
          key: "color",
          set: function set(c) {
            this.hpBar.getComponent(Sprite).color = c;
            this.lblName.color = c;
          }
        }]);
        return NameHP;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NoticeLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Color, Label, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2ba45UN5ndEx4xJpBV7Ogz8", "NoticeLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tmpColor = new Color();
      var NoticeLabel = exports('NoticeLabel', (_dec = ccclass('NoticeLabel'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NoticeLabel, _Component);
        function NoticeLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._label = void 0;
          return _this;
        }
        var _proto = NoticeLabel.prototype;
        _proto.onLoad = function onLoad() {
          this._label = this.getComponent(Label);
        };
        _createClass(NoticeLabel, [{
          key: "alpha",
          get: function get() {
            return this._label.color.a;
          },
          set: function set(value) {
            tmpColor.set(this._label.color);
            tmpColor.a = value;
            this._label.color = tmpColor;
          }
        }, {
          key: "string",
          get: function get() {
            return this._label.string;
          },
          set: function set(str) {
            this._label.string = str;
          }
        }]);
        return NoticeLabel;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TankBullet.ts', './TankGameAudioMgr.ts', './TankGameMgr.ts', './TankMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Prefab, Node, Sprite, Color, tween, v3, instantiate, Component, TankBullet, TankGameAudioMgr, TankGameMgr, TankMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Prefab = module.Prefab;
      Node = module.Node;
      Sprite = module.Sprite;
      Color = module.Color;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      TankBullet = module.TankBullet;
    }, function (module) {
      TankGameAudioMgr = module.TankGameAudioMgr;
    }, function (module) {
      TankGameMgr = module.TankGameMgr;
    }, function (module) {
      TankMgr = module.TankMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "d1b03Z5TBtCJYploSlGTOkK", "Tank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tempV2 = new Vec2();
      var Tank = exports('Tank', (_dec = ccclass('Tank'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Tank, _Component);
        function Tank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bullet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "firePoint", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "barrel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lid", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalState", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "destroyedState", _descriptor6, _assertThisInitialized(_this));
          _this.player = void 0;
          _this.nameBar = void 0;
          _this._isFiring = false;
          return _this;
        }
        var _proto = Tank.prototype;
        _proto.start = function start() {
          TankMgr.inst.addTank(this);
        };
        _proto.setState = function setState(state) {
          if (state == 'normal') {
            this.normalState.active = true;
            this.destroyedState.active = false;
          } else if (state == 'destroyed') {
            this.normalState.active = false;
            this.destroyedState.active = true;
          }
        };
        _proto.setColor = function setColor(colorVal) {
          var c = new Color();
          Color.fromUint32(c, colorVal | 0xff000000);
          this.lid.color = c;
          this.nameBar.color = c;
        };
        _proto.onDestroy = function onDestroy() {
          TankMgr.inst.removeTank(this);
          if (this.nameBar) {
            this.nameBar.node.removeFromParent();
            this.nameBar.node.destroy();
            this.nameBar = null;
          }
        };
        _proto.beAttack = function beAttack(attackerId, damage, attackPoint) {
          TankGameMgr.inst.sendMsg_TankAttack(attackerId, this.player.playerId, damage, attackPoint);
        };
        _proto.shootAnim = function shootAnim(cb) {
          var volume = TankGameAudioMgr.getVolumeByDist(this.node.worldPosition, TankGameMgr.inst.selfPlayer);
          TankGameAudioMgr.playOneShot('sounds/sfx_shoot', volume);

          //animation
          var oldPosX = this.barrel.position.x;
          tween(this.barrel).to(0.05, {
            position: v3(oldPosX - 20, 0, 0)
          }).then(tween(this.barrel).to(0.1, {
            position: v3(oldPosX, 0, 0)
          })).call(function () {
            if (cb) {
              cb();
            }
          }).start();
        };
        _proto.fireBullet = function fireBullet(pos, rotationDegrees) {
          var bullet = instantiate(this.bullet);
          this.node.parent.addChild(bullet);
          bullet.setWorldPosition(pos.x, pos.y, pos.z);
          bullet.setRotationFromEuler(0, 0, rotationDegrees);
          var rotationAngle = rotationDegrees / 180 * Math.PI;
          var dir = tempV2.set(Math.cos(rotationAngle), Math.sin(rotationAngle));
          bullet.getComponent(TankBullet).moveDir = dir;
          return bullet;
        };
        _proto.shoot = function shoot() {
          var _this2 = this;
          if (this._isFiring) {
            return;
          }
          this._isFiring = true;
          var pos = this.firePoint.worldPosition;
          var bullet = this.fireBullet(pos, this.player.rotation);
          this.shootAnim(function () {
            _this2._isFiring = false;
          });
          var p = bullet.worldPosition;
          var r = bullet.eulerAngles;
          var b = bullet.getComponent(TankBullet);
          b.player = this.player;
          TankGameMgr.inst.sendMsg_TankShoot(p.x, p.y, p.z, r.z, b.moveSpeed, b.lifeTime);
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          if (this.nameBar) {
            var sp = this.node.worldPosition;
            this.nameBar.node.setWorldPosition(sp);
          }
        };
        return Tank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "firePoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "barrel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lid", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "normalState", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "destroyedState", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankBullet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TankGameAudioMgr.ts', './TankGameMgr.ts', './TankMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, v2, instantiate, find, Component, TankGameAudioMgr, TankGameMgr, TankMgr;
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
      v2 = module.v2;
      instantiate = module.instantiate;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      TankGameAudioMgr = module.TankGameAudioMgr;
    }, function (module) {
      TankGameMgr = module.TankGameMgr;
    }, function (module) {
      TankMgr = module.TankMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a53885kGXFApaKZHdvb+kXu", "TankBullet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TankBullet = exports('TankBullet', (_dec = ccclass('TankBullet'), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TankBullet, _Component);
        function TankBullet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lifeTime", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "efx", _descriptor3, _assertThisInitialized(_this));
          /**
           * @en the bullet belongs to which player
           * @zh 子弹所属的玩家 id
          */
          _this.player = void 0;
          _this.damage = 10;
          _this._lifeStart = 0;
          _this._moveDir = v2();
          return _this;
        }
        var _proto = TankBullet.prototype;
        _proto.start = function start() {
          this._lifeStart = Date.now();
          this.damage = Math.floor(Math.random() * 15 + 10);
        };
        _proto.update = function update(deltaTime) {
          if (this._lifeStart + this.lifeTime < Date.now()) {
            this.lifeEnd();
            return;
          }
          var dist = this.moveSpeed * deltaTime;
          var dx = this._moveDir.x * dist;
          var dy = this._moveDir.y * dist;
          var pos = this.node.position;
          this.node.setPosition(pos.x + dx, pos.y + dy, pos.z);
        };
        _proto.lifeEnd = function lifeEnd() {
          var efx = instantiate(this.efx);
          find('SceneRoot2D/ground_effects').addChild(efx);
          efx.setWorldPosition(this.node.worldPosition);
          efx.setWorldRotation(this.node.worldRotation);
          var volume = TankGameAudioMgr.getVolumeByDist(this.node.worldPosition, TankGameMgr.inst.selfPlayer);
          TankGameAudioMgr.playOneShot('sounds/sfx_boom', volume);
          this.node.destroy();
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var tankBodyRadius = 50;
          var tankList = TankMgr.inst.tankList;
          for (var i = 0; i < tankList.length; i++) {
            var tank = tankList[i];
            var bp = this.node.worldPosition;
            var tp = tank.node.worldPosition;
            var dx = bp.x - tp.x;
            var dy = bp.y - tp.y;
            if (dx * dx + dy * dy < tankBodyRadius * tankBodyRadius) {
              if (this.player != tank.player) {
                this.lifeEnd();
              }

              /**
               * @en if this bullet belongs to other player, then this.player is null, no damage calculation
               * @zh 如果是其他玩家的子弹，this.player 为 null，不做伤害计算
              */
              if (this.player && this.player.color != tank.player.color) {
                tank.beAttack(this.player.playerId, this.damage, this.node.worldPosition);
              }
              break;
            }
          }
        };
        _createClass(TankBullet, [{
          key: "moveDir",
          set: function set(v) {
            this._moveDir.set(v);
          }
        }]);
        return TankBullet;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 400;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lifeTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3000;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "efx", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TankGameMgr.ts', './Tank.ts', './TankMovement2D.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, v2, Prefab, Node, Component, TankGameMgr, TankSkill, Tank, TankMovement2D;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v2 = module.v2;
      Prefab = module.Prefab;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      TankGameMgr = module.TankGameMgr;
      TankSkill = module.TankSkill;
    }, function (module) {
      Tank = module.Tank;
    }, function (module) {
      TankMovement2D = module.TankMovement2D;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "2fdf4eFjt5A7bR0Vxi5rMNk", "TankController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tempV2 = v2();
      var TankController = exports('TankController', (_dec = ccclass('TankController'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TankController, _Component);
        function TankController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bullet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "firePoint", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "barrel", _descriptor3, _assertThisInitialized(_this));
          _this._movement2d = void 0;
          _this._tank = void 0;
          return _this;
        }
        var _proto = TankController.prototype;
        _proto.start = function start() {
          this._tank = this.node.getComponent(Tank);
          tgx.EasyController.on(tgx.EasyControllerEvent.BUTTON, this.onButtonHit, this);
          this._movement2d = this.node.getComponent(TankMovement2D);
        };
        _proto.onButtonHit = function onButtonHit(btnSlot) {
          if (TankGameMgr.inst.selfPlayer.hp <= 0) {
            return;
          }
          if (btnSlot == 'btn_skill_1') {
            if (TankGameMgr.inst.castSkill(TankSkill.SKILL_1)) {
              this._tank.shoot();
            }
          }
          if (btnSlot == 'btn_skill_2') {
            if (TankGameMgr.inst.castSkill(TankSkill.SKILL_2)) {
              this._movement2d.tempSpeedUp(2.0, 3000);
            }
          }
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var _this$_movement2d;
          if (((_this$_movement2d = this._movement2d) == null ? void 0 : _this$_movement2d.getRealSpeed()) > 0) {
            var pos = this.node.worldPosition;
            var rotation = this.node.eulerAngles;
            TankGameMgr.inst.sendMsg_TankDataChange(pos.x, pos.y, pos.z, rotation.z);
          }
        };
        _proto.onDestroy = function onDestroy() {
          tgx.EasyController.off(tgx.EasyControllerEvent.BUTTON, this.onButtonHit, this);
        };
        return TankController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "firePoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "barrel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankGameAudioMgr.ts", ['cc', './ModuleDef.ts'], function (exports) {
  var cclegacy, ModuleDef;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8c418KJR+pDVoV/UJg+x4Is", "TankGameAudioMgr", undefined);
      var BundleName = ModuleDef.TANK;
      var TankGameAudioMgr = exports('TankGameAudioMgr', /*#__PURE__*/function () {
        function TankGameAudioMgr() {}
        /**
        * @en
        * play short audio, such as strikes,explosions
        * @zh
        * 播放短音频,比如 打击音效，爆炸音效等
        * @param sound clip or url for the audio
        * @param volume 
        */
        TankGameAudioMgr.playOneShot = function playOneShot(sound, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }
          tgx.AudioMgr.inst.playOneShot(sound, volume, BundleName);
        }

        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param music AudioClip or url for the music
         * @param volume 
         */;
        TankGameAudioMgr.play = function play(music, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }
          tgx.AudioMgr.inst.play(music, volume, BundleName);
        }

        /**
        * stop the audio play
        */;
        TankGameAudioMgr.stop = function stop() {
          tgx.AudioMgr.inst.stop();
        }

        /**
         * pause the audio play
         */;
        TankGameAudioMgr.pause = function pause() {
          tgx.AudioMgr.inst.pause();
        }

        /**
         * resume the audio play
         */;
        TankGameAudioMgr.resume = function resume() {
          tgx.AudioMgr.inst.resume();
        };
        TankGameAudioMgr.getVolumeByDist = function getVolumeByDist(soundPos, earPos, maxDist) {
          if (maxDist === void 0) {
            maxDist = 50.0;
          }
          var dx = soundPos.x - earPos.x;
          var dy = soundPos.y - earPos.y;
          var dz = 0;
          var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 1.0) {
            return 1.0;
          }
          var factor = 1.0 / (dist / maxDist);
          if (factor > 1.0) {
            factor = 1.0;
          }
          return factor;
        };
        return TankGameAudioMgr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "87ccfNn2vhCsqxKSoO6giwh", "TankGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TankGameHUD = exports('TankGameHUD', (_dec = ccclass('TankGameHUD'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TankGameHUD, _Component);
        function TankGameHUD() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = TankGameHUD.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return TankGameHUD;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './UserMgr.ts', './NetGameServer.ts', './RoomMgr.ts', './SubGameDef.ts', './ModuleDef.ts'], function (exports) {
  var _createClass, _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, GameMgr, SubGameMgr, UserMgr, gameNet, RoomMgr, SubGameDef, ModuleDef;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
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
      cclegacy._RF.push({}, "0bff2AUaPhJer3S0eIIrZEE", "TankGameMgr", undefined);
      var TankGameEvent = exports('TankGameEvent', function TankGameEvent() {});
      TankGameEvent.ROOM_PUSH = 'TankGameEvent.ROOM_PUSH';
      TankGameEvent.PLAYER_COMES = 'TankGameEvent.PLAYER_COMES';
      TankGameEvent.PLAYER_LEAVES = 'TankGameEvent.PLAYER_LEAVES';
      TankGameEvent.PLAYER_DATA_CHANGED = 'TankGameEvent.PLAYER_DATA_CHANGED';
      TankGameEvent.GAME_BEGIN = 'TankGameEvent.GAME_BEGIN';
      TankGameEvent.GAME_OVER = 'TankGameEvent.GAME_OVER';
      TankGameEvent.TANK_DATA_CHANGED = 'TankGameEvent.TANK_DATA_CHANGED';
      TankGameEvent.TANK_SHOOT = 'TankGameEvent.TANK_SHOOT';
      TankGameEvent.TANK_ATTACK = 'TankGameEvent.TANK_ATTACK';
      TankGameEvent.PLAYER_DIE = 'TankGameEvent.PLAYER_DIE';
      TankGameEvent.PLAYER_REVIVE = 'TankGameEvent.PLAYER_REVIVE';
      var TankSkill = exports('TankSkill', function TankSkill() {
        this.id = void 0;
        this.cd = void 0;
      });
      TankSkill.SKILL_1 = 1000;
      TankSkill.SKILL_2 = 1001;
      var TankSillCastInfo = exports('TankSillCastInfo', /*#__PURE__*/function () {
        function TankSillCastInfo() {
          this.skill = void 0;
          this.lastCastTime = void 0;
        }
        _createClass(TankSillCastInfo, [{
          key: "isInCD",
          get: function get() {
            var cdTime = this.lastCastTime + this.skill.cd - Date.now();
            return cdTime > 0;
          }
        }, {
          key: "cdPercent",
          get: function get() {
            var cdTime = this.lastCastTime + this.skill.cd - Date.now();
            if (cdTime <= 0) {
              return 0.0;
            }
            return cdTime / this.skill.cd;
          }
        }]);
        return TankSillCastInfo;
      }());
      var skillMap = {};
      skillMap[TankSkill.SKILL_1] = {
        id: TankSkill.SKILL_1,
        cd: 2000
      };
      skillMap[TankSkill.SKILL_2] = {
        id: TankSkill.SKILL_1,
        cd: 30000
      };
      var TankGameMgr = exports('TankGameMgr', /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(TankGameMgr, _GameMgr);
        function TankGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameData = void 0;
          _this._playerMap = {};
          _this._skillCdMap = {};
          _this._selfPlayer = void 0;
          _this._gameType = SubGameDef.TANK;
          _this._entryScene = {
            name: 'lobby_tank',
            bundle: ModuleDef.TANK
          };
          _this._gameScene = {
            name: 'game_tank',
            bundle: ModuleDef.TANK
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = TankGameMgr.prototype;
        _proto.castSkill = function castSkill(skillId) {
          var skill = skillMap[skillId];
          if (!skill) {
            return false;
          }
          var cdInfo = this._skillCdMap[skillId];
          if (!cdInfo) {
            cdInfo = new TankSillCastInfo();
            cdInfo.skill = skill;
            cdInfo.lastCastTime = 0;
            this._skillCdMap[skillId] = cdInfo;
          }
          if (cdInfo.isInCD) {
            return false;
          }
          cdInfo.lastCastTime = Date.now();
          return true;
        };
        _proto.getSkillCd = function getSkillCd(skillId) {
          return this._skillCdMap[skillId];
        };
        _proto.beforeLoadScene = /*#__PURE__*/function () {
          var _beforeLoadScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return RoomMgr.inst.rpc_JoinGame();
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function beforeLoadScene() {
            return _beforeLoadScene.apply(this, arguments);
          }
          return beforeLoadScene;
        }();
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg("tank/GameDataSyncPush", this.onNet_GameDataSyncPush, this);
          gameNet.listenMsg("tank/GameDataChangedPush", this.onNet_GameDataChangedPush, this);
          gameNet.listenMsg("tank/PlayerComesPush", this.onNet_PlayerComesPush, this);
          gameNet.listenMsg("tank/PlayerDataChangedPush", this.onNet_PlayerDataChangedPush, this);
          gameNet.listenMsg("tank/PlayerLeavesPush", this.onNet_PlayerLeavesPush, this);
          gameNet.listenMsg("tank/GameBeginPush", this.onNet_GameBeginPush, this);
          gameNet.listenMsg("tank/GameOverPush", this.onNet_GameOverPush, this);
          gameNet.listenMsg('tank/TankDataChange', this.onNet_TankDataChange, this);
          gameNet.listenMsg('tank/TankShoot', this.onNet_TankShoot, this);
          gameNet.listenMsg('tank/TankAttack', this.onNet_TankAttack, this);
        };
        _proto.sendMsg_TankDataChange = function sendMsg_TankDataChange(x, y, z, rotation) {
          gameNet.sendMsg('tank/TankDataChange', {
            x: x,
            y: y,
            z: z,
            rotation: rotation
          });
        };
        _proto.sendMsg_TankShoot = function sendMsg_TankShoot(x, y, z, rotation, speed, lifeTime) {
          gameNet.sendMsg('tank/TankShoot', {
            x: x,
            y: y,
            z: z,
            rz: rotation,
            speed: speed,
            lifeTime: lifeTime
          });
        };
        _proto.sendMsg_TankAttack = function sendMsg_TankAttack(attackerId, targetId, damage, attackPoint) {
          gameNet.sendMsg('tank/TankAttack', {
            attackerId: attackerId,
            targetId: targetId,
            damage: damage,
            attackPoint: attackPoint
          });
        };
        _proto.reset = function reset() {
          _GameMgr.prototype.reset.call(this);
        };
        _proto.initAIMode = function initAIMode() {};
        _proto.getPlayer = function getPlayer(playerId) {
          if (!this._gameData || !this._gameData.players) {
            return null;
          }
          for (var i = 0; i < this._gameData.players.length; ++i) {
            var p = this._gameData.players[i];
            if (p.playerId == playerId) {
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
        }

        // ============= MESSAGE HANDLER ============
        /**
         * This message will arrive before login result.
         * 这个消息会在登录成功返回之前收到。
        */;
        _proto.onNet_GameDataSyncPush = function onNet_GameDataSyncPush(msg) {
          var _this2 = this;
          this._gameData = msg.data;
          this._gameData.players.forEach(function (v) {
            _this2._playerMap[v.playerId] = v;
            if (v.uid == UserMgr.inst.uid) {
              _this2._selfPlayer = v;
            }
          });
          director.emit(TankGameEvent.ROOM_PUSH);
        };
        _proto.onNet_GameDataChangedPush = function onNet_GameDataChangedPush(msg) {
          if (!this._gameData) {
            return;
          }
        };
        _proto.onNet_PlayerComesPush = function onNet_PlayerComesPush(msg) {
          this._gameData.players.push(msg.player);
          this._playerMap[msg.player.playerId] = msg.player;
          if (msg.player.uid == UserMgr.inst.uid) {
            this._selfPlayer = msg.player;
          }
          director.emit(TankGameEvent.PLAYER_COMES, msg.player);
        };
        _proto.onNet_PlayerDataChangedPush = function onNet_PlayerDataChangedPush(msg) {
          var p = this.getPlayer(msg.playerId);
          if (!p) {
            return;
          }
          if (msg.hp != undefined) {
            p.hp = msg.hp;
          }
          if (msg.maxHp != undefined) {
            p.maxHp = msg.maxHp;
          }
          if (msg.score != undefined) {
            p.score = msg.score;
          }
          if (msg.reviveTime != undefined) {
            p.reviveTime = msg.reviveTime;
            if (msg.reviveTime > 0) {
              director.emit(TankGameEvent.PLAYER_DIE, p);
            } else {
              director.emit(TankGameEvent.PLAYER_REVIVE, p);
            }
          }
          director.emit(TankGameEvent.PLAYER_DATA_CHANGED, msg);
        };
        _proto.onNet_PlayerLeavesPush = function onNet_PlayerLeavesPush(msg) {
          for (var i = 0; i < this._gameData.players.length; ++i) {
            var p = this._gameData.players[i];
            if (p.uid == msg.uid) {
              this._gameData.players.splice(i, 1);
              delete this._playerMap[p.playerId];
              director.emit(TankGameEvent.PLAYER_LEAVES, p);
              break;
            }
          }
        };
        _proto.onNet_GameBeginPush = function onNet_GameBeginPush(msg) {
          if (!this._gameData) {
            return;
          }
          this._gameData.players.forEach(function (v) {
            //v.color = '';
          });
          director.emit(TankGameEvent.GAME_BEGIN);
        };
        _proto.onNet_GameOverPush = function onNet_GameOverPush(msg) {
          director.emit(TankGameEvent.GAME_OVER, msg);
        };
        _proto.onNet_TankDataChange = function onNet_TankDataChange(msg) {
          var p = this.getPlayer(msg.playerId);
          p.x = msg.x;
          p.y = msg.y;
          p.z = msg.z;
          p.rotation = msg.rotation;
          director.emit(TankGameEvent.TANK_DATA_CHANGED, msg);
        };
        _proto.onNet_TankShoot = function onNet_TankShoot(msg) {
          director.emit(TankGameEvent.TANK_SHOOT, msg);
        };
        _proto.onNet_TankAttack = function onNet_TankAttack(msg) {
          director.emit(TankGameEvent.TANK_ATTACK, msg);
        };
        _createClass(TankGameMgr, [{
          key: "selfPlayer",
          get: function get() {
            return this._selfPlayer;
          }
        }, {
          key: "gameData",
          get: function get() {
            return this._gameData;
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
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new TankGameMgr();
            }
            return this._inst;
          }
        }]);
        return TankGameMgr;
      }(GameMgr));
      TankGameMgr._inst = void 0;
      SubGameMgr.inst.registerGameMgr(TankGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankGameRankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, Label, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Label = module.Label;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1a1a5F986JHO5elKqXPPAbc", "TankGameRankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TOP_RANK_COLORS = [new Color(255, 0, 0, 50), new Color(255, 0, 255, 50), new Color(0, 255, 0, 50), new Color(0, 0, 0, 50)];
      var TankGameRankItem = exports('TankGameRankItem', (_dec = ccclass('TankGameRankItem'), _dec2 = property(Label), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TankGameRankItem, _Component);
        function TankGameRankItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblInfo", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprBg", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TankGameRankItem.prototype;
        _proto.setInfo = function setInfo(rank, name, score) {
          this.lblInfo.string = rank + "." + name + " (" + score + ")";
          if (rank <= 3) {
            this.sprBg.color = TOP_RANK_COLORS[rank - 1];
          } else {
            this.sprBg.color = TOP_RANK_COLORS[3];
          }
        };
        return TankGameRankItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TankGameMgr.ts', './UserMgr.ts', './FollowTarget.ts', './TankController.ts', './Tank.ts', './UITankGameHUD.ts', './NameHP.ts', './UITankRevive.ts', './TankMovement2D.ts', './UITankGameMask.ts', './UITankJoystick.ts', './UITankGameRank.ts', './RoomMgr.ts', './SubGameMessage.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, director, instantiate, Label, Component, TankGameEvent, TankGameMgr, UserMgr, FollowTarget, TankController, Tank, UITankGameHUD, NameHP, UITankRevive, TankMovement2D, UITankGameMask, UITankJoystick, UITankGameRank, RoomMgr, SubGameMessage;
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
      Prefab = module.Prefab;
      Node = module.Node;
      director = module.director;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      TankGameEvent = module.TankGameEvent;
      TankGameMgr = module.TankGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      FollowTarget = module.FollowTarget;
    }, function (module) {
      TankController = module.TankController;
    }, function (module) {
      Tank = module.Tank;
    }, function (module) {
      UITankGameHUD = module.UITankGameHUD;
    }, function (module) {
      NameHP = module.NameHP;
    }, function (module) {
      UITankRevive = module.UITankRevive;
    }, function (module) {
      TankMovement2D = module.TankMovement2D;
    }, function (module) {
      UITankGameMask = module.UITankGameMask;
    }, function (module) {
      UITankJoystick = module.UITankJoystick;
    }, function (module) {
      UITankGameRank = module.UITankGameRank;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "93845hnoKZPF4LEX3faqKr5", "TankGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TankGameScene = exports('TankGameScene', (_dec = ccclass('TankGameScene'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(FollowTarget), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TankGameScene, _Component);
        function TankGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tankPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "namePrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "damageLabelPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectsRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "groundEffect", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "namesRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "damageRoot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "followTarget", _descriptor8, _assertThisInitialized(_this));
          _this._tankMap = {};
          _this._UITankGameMask = void 0;
          _this._UITankJoystick = void 0;
          _this._UITankGameHUD = void 0;
          _this._UITankGameRank = void 0;
          return _this;
        }
        var _proto = TankGameScene.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgx.UIMgr.inst.closeAll();
                  director.on(TankGameEvent.PLAYER_COMES, this.onPlayerComes, this);
                  director.on(TankGameEvent.PLAYER_LEAVES, this.onPlayerLeaves, this);
                  director.on(TankGameEvent.PLAYER_DATA_CHANGED, this.onPlayerDataChanged, this);
                  director.on(TankGameEvent.TANK_DATA_CHANGED, this.onTankDataChanged, this);
                  director.on(TankGameEvent.TANK_SHOOT, this.onTankShoot, this);
                  director.on(TankGameEvent.TANK_ATTACK, this.onTankAttack, this);
                  director.on(TankGameEvent.PLAYER_REVIVE, this.onPlayerRevive, this);
                  director.on(TankGameEvent.PLAYER_DIE, this.onPlayerDie, this);
                  director.on(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
                  director.on(TankGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
                  RoomMgr.inst.rpc_Ready();
                  this.reStart();
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.onDestroy = function onDestroy() {
          director.off(TankGameEvent.PLAYER_COMES, this.onPlayerComes, this);
          director.off(TankGameEvent.PLAYER_LEAVES, this.onPlayerLeaves, this);
          director.off(TankGameEvent.PLAYER_DATA_CHANGED, this.onPlayerDataChanged, this);
          director.off(TankGameEvent.TANK_DATA_CHANGED, this.onTankDataChanged, this);
          director.off(TankGameEvent.TANK_SHOOT, this.onTankShoot, this);
          director.off(TankGameEvent.TANK_ATTACK, this.onTankAttack, this);
          director.off(TankGameEvent.PLAYER_REVIVE, this.onPlayerRevive, this);
          director.off(TankGameEvent.PLAYER_DIE, this.onPlayerDie, this);
          director.off(TankGameEvent.ROOM_PUSH, this.onRoomBackByRoomMgr, this);
          director.off(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
        };
        _proto.reStart = function reStart() {
          RoomMgr.inst.rpc_ClientReady();
          this.objectsRoot.removeAllChildren();
          this.groundEffect.removeAllChildren();
          if (this._UITankGameMask) {
            this._UITankGameMask.close();
            this._UITankGameMask = null;
          }
          if (this._UITankJoystick) {
            this._UITankJoystick.close();
            this._UITankJoystick = null;
          }
          if (this._UITankGameHUD) {
            this._UITankGameHUD.close();
            this._UITankGameHUD = null;
          }
          if (this._UITankGameRank) {
            this._UITankGameRank.close();
            this._UITankGameRank = null;
          }
        };
        _proto.onRoomBackByRoomMgr = function onRoomBackByRoomMgr() {
          var _this2 = this;
          // tgx.UIMgr.inst.
          this._UITankGameMask = tgx.UIMgr.inst.showUI(UITankGameMask);
          this._UITankJoystick = tgx.UIMgr.inst.showUI(UITankJoystick);
          this._UITankGameHUD = tgx.UIMgr.inst.showUI(UITankGameHUD);
          this._UITankGameRank = tgx.UIMgr.inst.showUI(UITankGameRank);
          TankGameMgr.inst.gameData.players.forEach(function (player) {
            _this2.createTank(player);
          });
        };
        _proto.onPlayerComes = function onPlayerComes(player) {
          this.createTank(player);
        };
        _proto.onPlayerLeaves = function onPlayerLeaves(player) {
          var tank = this._tankMap[player.playerId];
          if (!tank) {
            return;
          }
          tank.node.removeFromParent();
          tank.node.destroy();
          delete this._tankMap[player.playerId];
        };
        _proto.onPlayerDataChanged = function onPlayerDataChanged(msg) {
          if (msg.hp != undefined || msg.maxHp != undefined) {
            var tank = this._tankMap[msg.playerId];
            if (!tank) {
              return;
            }
            tank.nameBar.hpPercent = tank.player.hp / tank.player.maxHp;
          }
        };
        _proto.onTankDataChanged = function onTankDataChanged(msg) {
          if (msg.playerId == TankGameMgr.inst.selfPlayer.playerId && !msg.forceSync) {
            return;
          }
          var tank = this._tankMap[msg.playerId];
          if (!tank) {
            return;
          }
          tank.node.setWorldPosition(msg.x, msg.y, msg.z);
          tank.node.setWorldRotationFromEuler(0, 0, msg.rotation);
        };
        _proto.onTankShoot = function onTankShoot(msg) {
          if (msg.playerId == TankGameMgr.inst.selfPlayer.playerId) {
            return;
          }
          var tank = this._tankMap[msg.playerId];
          if (!tank) {
            return;
          }
          var bullet = tank.fireBullet(msg, msg.rz);
          tank.shootAnim();
        };
        _proto.onTankAttack = function onTankAttack(msg) {
          var tank = this._tankMap[msg.targetId];
          if (!tank) {
            return;
          }
          if (!msg.deltaHp) {
            return;
          }
          var damageLabel = instantiate(this.damageLabelPrefab);
          this.damageRoot.addChild(damageLabel);
          var p = msg.attackPoint;
          damageLabel.setWorldPosition(p.x, p.y, p.z);
          damageLabel.getComponent(Label).string = msg.damage + '';
        };
        _proto.onPlayerRevive = function onPlayerRevive(player) {
          var tank = this._tankMap[player.playerId];
          if (!tank) {
            return;
          }
          tank.setState(player.hp <= 0 ? 'destroyed' : 'normal');
        };
        _proto.onPlayerDie = function onPlayerDie(player) {
          var tank = this._tankMap[player.playerId];
          if (!tank) {
            return;
          }
          tank.setState(player.hp <= 0 ? 'destroyed' : 'normal');
          if (player.playerId == TankGameMgr.inst.selfPlayer.playerId) {
            tgx.UIMgr.inst.showUI(UITankRevive);
          }
        };
        _proto.createTank = /*#__PURE__*/function () {
          var _createTank = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(player) {
            var newTank, mv2d, tank, nameBar;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  newTank = instantiate(this.tankPrefab);
                  this.objectsRoot.addChild(newTank);
                  newTank.setWorldPosition(player.x, player.y, player.z);
                  newTank.setWorldRotationFromEuler(0, 0, player.rotation);
                  if (player.uid == UserMgr.inst.uid) {
                    mv2d = newTank.addComponent(TankMovement2D);
                    mv2d.needRotation = true;
                    mv2d.moveSpeed = 200;
                    this.followTarget.target = newTank;
                    newTank.addComponent(TankController);
                  }
                  tank = newTank.getComponent(Tank);
                  tank.player = player;
                  this._tankMap[player.playerId] = tank;
                  nameBar = instantiate(this.namePrefab);
                  this.namesRoot.addChild(nameBar);
                  tank.nameBar = nameBar.getComponent(NameHP);
                  tank.nameBar.hpPercent = player.hp / player.maxHp;
                  _context2.next = 14;
                  return UserMgr.inst.rpc_GetUserInfo(player.uid);
                case 14:
                  _context2.t0 = _context2.sent.name;
                  if (_context2.t0) {
                    _context2.next = 17;
                    break;
                  }
                  _context2.t0 = '';
                case 17:
                  tank.nameBar.name = _context2.t0;
                  tank.setColor(player.color);
                  tank.setState(player.hp <= 0 ? 'destroyed' : 'normal');
                case 20:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function createTank(_x) {
            return _createTank.apply(this, arguments);
          }
          return createTank;
        }();
        _proto.update = function update(deltaTime) {
          var _TankGameMgr$inst$sel;
          if (((_TankGameMgr$inst$sel = TankGameMgr.inst.selfPlayer) == null ? void 0 : _TankGameMgr$inst$sel.hp) <= 0) ;
        };
        return TankGameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tankPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "namePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damageLabelPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objectsRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "groundEffect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "namesRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "damageRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "followTarget", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneUtils.ts', './UserMgr.ts', './UI_SearchingRival.ts', './SceneDef.ts', './UICreateRoom.ts', './UIChat.ts', './UIAnnouncement.ts', './NetGameServer.ts', './RoomMgr.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, UITransform, Component, SceneUtil, UserMgr, UI_SearchingRival, SceneDef, UICreateRoom, UIChat, UIAnnouncement, lobbyNet, RoomMgr, LanguageData;
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
      UITransform = module.UITransform;
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
      UICreateRoom = module.UICreateRoom;
    }, function (module) {
      UIChat = module.UIChat;
    }, function (module) {
      UIAnnouncement = module.UIAnnouncement;
    }, function (module) {
      lobbyNet = module.lobbyNet;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e51dcDra1xLD7v4fpQrvbt8", "TankLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TankLobbyScene = exports('TankLobbyScene', (_dec = ccclass('TankLobbyScene'), _dec2 = property(UITransform), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TankLobbyScene, _Component);
        function TankLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TankLobbyScene.prototype;
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
                    ui.setPosition(_this2.announcementPlacer.node.position.x, _this2.announcementPlacer.node.position.y, 0.3, 0.05);
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
              ui.startMatch('tank');
            }, 1.5);
          });
        };
        _proto.onBtnExit = /*#__PURE__*/function () {
          var _onBtnExit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ok) {
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
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function onBtnExit() {
            return _onBtnExit.apply(this, arguments);
          }
          return onBtnExit;
        }();
        _proto.onBtnTraningModeClicked = function onBtnTraningModeClicked() {
          tgx.UIAlert.show('开发中，敬请期待！');
          //TankGameMgr.inst.initAIMode();
          //tgxSceneUtil.loadScene(SceneDef.TANK);
        };

        _proto.onBtnCreate = function onBtnCreate() {
          tgx.UIMgr.inst.showUI(UICreateRoom);
        };
        _proto.update = function update(deltaTime) {};
        return TankLobbyScene;
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

System.register("chunks:///_virtual/TankMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3c7bcO3f85NK40HPRjCTaYs", "TankMgr", undefined);
      var TankMgr = exports('TankMgr', /*#__PURE__*/function () {
        function TankMgr() {
          this._tankList = [];
        }
        var _proto = TankMgr.prototype;
        _proto.addTank = function addTank(tank) {
          this._tankList.push(tank);
        };
        _proto.removeTank = function removeTank(tank) {
          this._tankList.splice(this._tankList.indexOf(tank), 1);
        };
        _createClass(TankMgr, [{
          key: "tankList",
          get: function get() {
            return this._tankList;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (this._inst == null) {
              this._inst = new TankMgr();
            }
            return this._inst;
          }
        }]);
        return TankMgr;
      }());
      TankMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankMovement2D.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TankGameMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec3, director, TankGameEvent, TankGameMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      director = module.director;
    }, function (module) {
      TankGameEvent = module.TankGameEvent;
      TankGameMgr = module.TankGameMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e6382VpSK5LSZMkbi5VXWW0", "TankMovement2D", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tempV3 = new Vec3();
      var TankMovement2D = exports('TankMovement2D', (_dec = ccclass('TankMovement2D'), _dec(_class = /*#__PURE__*/function (_tgx$CharacterMovemen) {
        _inheritsLoose(TankMovement2D, _tgx$CharacterMovemen);
        function TankMovement2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _tgx$CharacterMovemen.call.apply(_tgx$CharacterMovemen, [this].concat(args)) || this;
          _this._tmpSpeedFactor = 1.0;
          _this._speedUpEndTime = 0;
          return _this;
        }
        var _proto = TankMovement2D.prototype;
        _proto.start = function start() {
          _tgx$CharacterMovemen.prototype.start.call(this);
          director.on(TankGameEvent.PLAYER_DIE, this.onEvent_PlayerDie, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(TankGameEvent.PLAYER_DIE, this.onEvent_PlayerDie, this);
        };
        _proto.onEvent_PlayerDie = function onEvent_PlayerDie(player) {
          //if player dies, stop movement
          //如果玩家死亡，则停止移动
          if (player.playerId == TankGameMgr.inst.selfPlayer.playerId) {
            this.onMovementStop();
          }
        };
        _proto.tempSpeedUp = function tempSpeedUp(factor, time) {
          this._tmpSpeedFactor = factor;
          this._speedUpEndTime = Date.now() + time;
        };
        _proto.onMovement = function onMovement(degree, strengthen) {
          if (TankGameMgr.inst.selfPlayer.hp <= 0) {
            return;
          }
          _tgx$CharacterMovemen.prototype.onMovement.call(this, degree, strengthen);
        };
        _proto.getRealSpeed = function getRealSpeed() {
          return _tgx$CharacterMovemen.prototype.getRealSpeed.call(this) * this._tmpSpeedFactor;
        };
        _proto.update = function update(deltaTime) {
          _tgx$CharacterMovemen.prototype.update.call(this, deltaTime);
          if (this.getRealSpeed() > 0) {
            this.node.getWorldPosition(tempV3);
            if (tempV3.lengthSqr() > 1500 * 1500) {
              var len = tempV3.length();
              var dx = tempV3.x / len;
              var dy = tempV3.y / len;
              tempV3.x = dx * 1500;
              tempV3.y = dy * 1500;
              this.node.setWorldPosition(tempV3);
            }
          }
          if (this._speedUpEndTime > 0 && Date.now() >= this._speedUpEndTime) {
            this._tmpSpeedFactor = 1.0;
            this._speedUpEndTime = 0;
          }
        };
        return TankMovement2D;
      }(tgx.CharacterMovement2D)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITankGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UITankGameHUD.ts', './TankGameMgr.ts', './ModuleDef.ts', './UserMgr.ts', './NoticeLabel.ts', './RoomMgr.ts', './LanguageData.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, instantiate, director, tween, GameUILayers, Layout_UITankGameHUD, TankGameEvent, TankGameMgr, ModuleDef, UserMgr, NoticeLabel, RoomMgr, LanguageData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      director = module.director;
      tween = module.tween;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UITankGameHUD = module.Layout_UITankGameHUD;
    }, function (module) {
      TankGameEvent = module.TankGameEvent;
      TankGameMgr = module.TankGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      NoticeLabel = module.NoticeLabel;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c68163UPphBq4oTIeMXvb13", "UITankGameHUD", undefined);
      var UITankGameHUD = exports('UITankGameHUD', (_dec = tgx_class(ModuleDef.TANK), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UITankGameHUD, _tgx$UIController);
        function UITankGameHUD() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_tank_game_hud/ui_tank_game_hud', GameUILayers.HUD, Layout_UITankGameHUD) || this;
          _this._noticeItemPrefab = void 0;
          _this._noticeItemPool = [];
          return _this;
        }
        var _proto = UITankGameHUD.prototype;
        _proto.getNoticeItemFromPool = function getNoticeItemFromPool() {
          var item = this._noticeItemPool.pop();
          if (!item) {
            var node = instantiate(this._noticeItemPrefab);
            item = node.getComponent(NoticeLabel);
          }
          item.node.parent = this._layout.noticeRoot;
          return item;
        };
        _proto.putNoticeItemToPool = function putNoticeItemToPool(item) {
          item.node.removeFromParent();
          this._noticeItemPool.push(item);
        };
        _proto.onCreated = function onCreated() {
          var layout = this._layout;
          this._noticeItemPrefab = layout.noticeRoot.children[0];
          layout.noticeRoot.removeAllChildren();
          this.onButtonEvent(layout.btnExit, function () {
            tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(b) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(b == false)) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt("return");
                  case 2:
                    RoomMgr.inst.exitRoom();
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
          });
          layout.lblRoomId.string = RoomMgr.inst.data.displayId;
          this.refreshPlayerNumLabel();
          director.on(TankGameEvent.PLAYER_COMES, this.onEvent_PlyaerComes, this);
          director.on(TankGameEvent.PLAYER_LEAVES, this.onEvent_PlayerLeaves, this);
          director.on(TankGameEvent.TANK_ATTACK, this.onEvent_TankAttack, this);
        };
        _proto.onDispose = function onDispose() {
          director.off(TankGameEvent.PLAYER_COMES, this.onEvent_PlyaerComes, this);
          director.off(TankGameEvent.PLAYER_LEAVES, this.onEvent_PlayerLeaves, this);
          director.off(TankGameEvent.TANK_ATTACK, this.onEvent_TankAttack, this);
        };
        _proto.onEvent_PlyaerComes = /*#__PURE__*/function () {
          var _onEvent_PlyaerComes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(p) {
            var info;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.refreshPlayerNumLabel();
                  _context2.next = 3;
                  return UserMgr.inst.rpc_GetUserInfo(p.uid);
                case 3:
                  info = _context2.sent;
                  if (info) {
                    this.addNotice(info.name + ' 加入了游戏');
                  }
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onEvent_PlyaerComes(_x2) {
            return _onEvent_PlyaerComes.apply(this, arguments);
          }
          return onEvent_PlyaerComes;
        }();
        _proto.onEvent_PlayerLeaves = /*#__PURE__*/function () {
          var _onEvent_PlayerLeaves = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(p) {
            var info;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.refreshPlayerNumLabel();
                  _context3.next = 3;
                  return UserMgr.inst.rpc_GetUserInfo(p.uid);
                case 3:
                  info = _context3.sent;
                  if (info) {
                    this.addNotice(info.name + ' 离开了游戏');
                  }
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onEvent_PlayerLeaves(_x3) {
            return _onEvent_PlayerLeaves.apply(this, arguments);
          }
          return onEvent_PlayerLeaves;
        }();
        _proto.onEvent_TankAttack = /*#__PURE__*/function () {
          var _onEvent_TankAttack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(msg) {
            var target, _TankGameMgr$inst$sel, _TankGameMgr$inst$sel2, attacker, attackerName, _yield$UserMgr$inst$r, targetName, _yield$UserMgr$inst$r2;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  target = TankGameMgr.inst.getPlayer(msg.targetId);
                  if (!(target.hp <= 0 && msg.deltaHp)) {
                    _context4.next = 26;
                    break;
                  }
                  attacker = TankGameMgr.inst.getPlayer(msg.attackerId);
                  attackerName = '你';
                  if (!(attacker.playerId != ((_TankGameMgr$inst$sel = TankGameMgr.inst.selfPlayer) == null ? void 0 : _TankGameMgr$inst$sel.playerId))) {
                    _context4.next = 14;
                    break;
                  }
                  _context4.next = 7;
                  return UserMgr.inst.rpc_GetUserInfo(attacker.uid);
                case 7:
                  _context4.t0 = _yield$UserMgr$inst$r = _context4.sent;
                  if (!(_context4.t0 == null)) {
                    _context4.next = 12;
                    break;
                  }
                  _context4.t1 = void 0;
                  _context4.next = 13;
                  break;
                case 12:
                  _context4.t1 = _yield$UserMgr$inst$r.name;
                case 13:
                  attackerName = _context4.t1;
                case 14:
                  targetName = '你';
                  if (!(target.playerId != ((_TankGameMgr$inst$sel2 = TankGameMgr.inst.selfPlayer) == null ? void 0 : _TankGameMgr$inst$sel2.playerId))) {
                    _context4.next = 25;
                    break;
                  }
                  _context4.next = 18;
                  return UserMgr.inst.rpc_GetUserInfo(target.uid);
                case 18:
                  _context4.t2 = _yield$UserMgr$inst$r2 = _context4.sent;
                  if (!(_context4.t2 == null)) {
                    _context4.next = 23;
                    break;
                  }
                  _context4.t3 = void 0;
                  _context4.next = 24;
                  break;
                case 23:
                  _context4.t3 = _yield$UserMgr$inst$r2.name;
                case 24:
                  targetName = _context4.t3;
                case 25:
                  this.addNotice(attackerName + ' 击败了 ' + targetName);
                case 26:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function onEvent_TankAttack(_x4) {
            return _onEvent_TankAttack.apply(this, arguments);
          }
          return onEvent_TankAttack;
        }();
        _proto.addNotice = function addNotice(msg) {
          var _this2 = this;
          var notice = this.getNoticeItemFromPool();
          notice.string = msg;
          notice.alpha = 255;
          tween(notice).to(3.0, {
            alpha: 0
          }).call(function () {
            _this2.putNoticeItemToPool(notice);
          }).start();
        };
        _proto.refreshPlayerNumLabel = function refreshPlayerNumLabel() {
          var layout = this._layout;
          layout.lblPlayerNum.string = '人数：' + RoomMgr.inst.data.playerNum + '/' + RoomMgr.inst.data.maxPlayerNum;
        };
        _proto.onUpdate = function onUpdate(dt) {
          var selfPlayer = TankGameMgr.inst.selfPlayer;
          if (selfPlayer == null) return;
          var layout = this._layout;
          layout.lblPos.string = 'x:' + ~~selfPlayer.x + ', y:' + ~~selfPlayer.y;
        };
        return UITankGameHUD;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITankGameMask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './GameUILayers.ts', './Layout_UITankGameMask.ts', './TankGameMgr.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Vec4, find, Camera, UITransform, director, screen, RenderTexture, SpriteFrame, ModuleDef, GameUILayers, Layout_UITankGameMask, TankGameEvent, TankGameMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec4 = module.Vec4;
      find = module.find;
      Camera = module.Camera;
      UITransform = module.UITransform;
      director = module.director;
      screen = module.screen;
      RenderTexture = module.RenderTexture;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UITankGameMask = module.Layout_UITankGameMask;
    }, function (module) {
      TankGameEvent = module.TankGameEvent;
      TankGameMgr = module.TankGameMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "025709R/91MHoEIgAMmLjfq", "UITankGameMask", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tempV4 = new Vec4();
      /**
       * @en game mask, used for war fog and death effect
       * @zh 游戏蒙板，用来处理死亡效果和战争迷雾
      */
      var UITankGameMask = exports('UITankGameMask', (_dec = tgx_class(ModuleDef.TANK), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UITankGameMask, _tgx$UIController);
        function UITankGameMask() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_tank_game_mask/ui_tank_game_mask', GameUILayers.GAME, Layout_UITankGameMask) || this;
          /**
           * @en used for storing scene render camera
           * @zh 保存用于场景渲染的摄像机 
           */
          _this._camera = void 0;
          /**
           * @en render scene content to this texture, used for death effect
           * @zh 渲染场景到此纹理，用于处理死亡时的变灰效果
           */
          _this._rt = void 0;
          /**
           * @en used for setting shader parameters with low performance cost
           * @zh 用于在 update 函数中，高效设置 shader 参数
          */
          _this._handle = void 0;
          _this._fogOfWarTrans = void 0;
          _this._pass = void 0;
          /**
           * @en the radius of war fog, this radius is transparent, and fade out after this radius
           * @zh 战争迷雾的中心半径，此半径内为透明，超出此半径后渐变
          */
          _this._fogOfWarCenterRadius = 200.0;
          /**
           * @en the range of war fog fade out
           * @zh 战雾渐变范围
          */
          _this._fogOfWarFadeOutRange = 400.0;
          director.on(TankGameEvent.PLAYER_DIE, _this.onPlayerDie, _assertThisInitialized(_this));
          director.on(TankGameEvent.PLAYER_REVIVE, _this.onPlayerRevive, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UITankGameMask.prototype;
        _proto.onCreated = function onCreated() {
          this._camera = find('SceneRoot2D/Camera').getComponent(Camera);
          var layout = this._layout;
          this._fogOfWarTrans = layout.sprFogOfWar.getComponent(UITransform);
          layout.sprGrayScreen.node.active = false;
          this._pass = layout.sprFogOfWar.customMaterial.passes[0];
          this._handle = this._pass.getHandle('fogOfWarParams');
        };
        _proto.onUpdate = function onUpdate(dt) {
          tempV4.set(this._fogOfWarTrans.width, this._fogOfWarTrans.height, this._fogOfWarCenterRadius, this._fogOfWarFadeOutRange);
          this._pass.setUniform(this._handle, tempV4);
        };
        _proto.onDispose = function onDispose() {
          var _this$_rt;
          director.off(TankGameEvent.PLAYER_DIE, this.onPlayerDie, this);
          director.off(TankGameEvent.PLAYER_REVIVE, this.onPlayerRevive, this);
          this.normalScreen();
          (_this$_rt = this._rt) == null || _this$_rt.destroy();
        };
        _proto.grayScreen = function grayScreen() {
          var layout = this._layout;
          layout.sprGrayScreen.node.active = true;
          if (!this._rt) {
            var size = screen.windowSize;
            var dpr = screen.devicePixelRatio;
            if (dpr > 1.5) {
              dpr = 1.5;
            }
            var width = Math.floor(size.width * dpr);
            var height = Math.floor(size.height * dpr);
            var w2h = width / height;
            if (width > 2048) {
              width = 2048;
              height = Math.floor(width / w2h);
            }
            if (height > 2048) {
              height = 2048;
              width = Math.floor(height * w2h);
            }
            this._rt = new RenderTexture();
            this._rt.initialize({
              width: width,
              height: height
            });
            var spriteFrame = new SpriteFrame();
            spriteFrame.texture = this._rt;
            layout.sprGrayScreen.spriteFrame = spriteFrame;
            layout.sprGrayScreen.grayscale = true;
          }
          this._camera.targetTexture = this._rt;
        };
        _proto.normalScreen = function normalScreen() {
          var layout = this._layout;
          layout.sprGrayScreen.node.active = false;
          this._camera.targetTexture = null;
        };
        _proto.onPlayerDie = function onPlayerDie(player) {
          if (player.playerId == TankGameMgr.inst.selfPlayer.playerId) {
            this.grayScreen();
          }
        };
        _proto.onPlayerRevive = function onPlayerRevive(player) {
          if (player.playerId == TankGameMgr.inst.selfPlayer.playerId) {
            this.normalScreen();
          }
        };
        return UITankGameMask;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITankGameRank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UITankGameRank.ts', './TankGameMgr.ts', './TankGameRankItem.ts', './UserMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, instantiate, GameUILayers, Layout_UITankGameRank, TankGameEvent, TankGameMgr, TankGameRankItem, UserMgr, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      instantiate = module.instantiate;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UITankGameRank = module.Layout_UITankGameRank;
    }, function (module) {
      TankGameEvent = module.TankGameEvent;
      TankGameMgr = module.TankGameMgr;
    }, function (module) {
      TankGameRankItem = module.TankGameRankItem;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1b839BYiPBEj5VQ46lrZgs/", "UITankGameRank", undefined);
      var UITankGameRank = exports('UITankGameRank', (_dec = tgx_class(ModuleDef.TANK), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UITankGameRank, _tgx$UIController);
        function UITankGameRank() {
          return _tgx$UIController.call(this, 'ui_tank_game_rank/ui_tank_game_rank', GameUILayers.HUD, Layout_UITankGameRank) || this;
        }
        var _proto = UITankGameRank.prototype;
        _proto.onCreated = function onCreated() {
          this.refreshRank();
          director.on(TankGameEvent.PLAYER_COMES, this.refreshRank, this);
          director.on(TankGameEvent.PLAYER_LEAVES, this.refreshRank, this);
          director.on(TankGameEvent.PLAYER_DATA_CHANGED, this.onEvent_PlayerDataChanged, this);
        };
        _proto.onDispose = function onDispose() {
          director.off(TankGameEvent.PLAYER_COMES, this.refreshRank, this);
          director.off(TankGameEvent.PLAYER_LEAVES, this.refreshRank, this);
          director.off(TankGameEvent.PLAYER_DATA_CHANGED, this.onEvent_PlayerDataChanged, this);
        };
        _proto.onEvent_PlayerDataChanged = function onEvent_PlayerDataChanged(msg) {
          if (msg.score != undefined) {
            this.refreshRank();
          }
        };
        _proto.refreshRank = /*#__PURE__*/function () {
          var _refreshRank = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var players, layout, i, p, node, item, name;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  players = TankGameMgr.inst.gameData.players;
                  players.sort(function (a, b) {
                    return b.score - a.score;
                  });
                  layout = this._layout;
                  layout.listRoot.children.forEach(function (node) {
                    node.active = false;
                  });
                  i = 0;
                case 5:
                  if (!(i < 10)) {
                    _context.next = 20;
                    break;
                  }
                  p = players[i];
                  if (p) {
                    _context.next = 9;
                    break;
                  }
                  return _context.abrupt("break", 20);
                case 9:
                  node = layout.listRoot.children[i];
                  if (!node) {
                    node = instantiate(layout.listRoot.children[0]);
                    layout.listRoot.addChild(node);
                  }
                  node.active = true;
                  item = node.getComponent(TankGameRankItem);
                  _context.next = 15;
                  return UserMgr.inst.rpc_GetUserInfo(p.uid);
                case 15:
                  name = _context.sent.name;
                  item.setInfo(i + 1, name, p.score);
                case 17:
                  ++i;
                  _context.next = 5;
                  break;
                case 20:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function refreshRank() {
            return _refreshRank.apply(this, arguments);
          }
          return refreshRank;
        }();
        return UITankGameRank;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITankJoystick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UITankJoystick.ts', './TankGameMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, KeyCode, GameUILayers, Layout_UITankJoystick, TankGameMgr, TankSkill, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      KeyCode = module.KeyCode;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UITankJoystick = module.Layout_UITankJoystick;
    }, function (module) {
      TankGameMgr = module.TankGameMgr;
      TankSkill = module.TankSkill;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "894c0mvZI1CgpoKn3zhM4+1", "UITankJoystick", undefined);
      var activeSkillIds = [TankSkill.SKILL_1, TankSkill.SKILL_2];
      var UITankJoystick = exports('UITankJoystick', (_dec = tgx_class(ModuleDef.TANK), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UITankJoystick, _tgx$UIController);
        function UITankJoystick() {
          return _tgx$UIController.call(this, 'ui_tank_joystick/ui_tank_joystick', GameUILayers.JOY_STICK, Layout_UITankJoystick) || this;
        }
        var _proto = UITankJoystick.prototype;
        _proto.onCreated = function onCreated() {
          tgx.UIJoystick.inst.cleanKeyMap();
          tgx.UIJoystick.inst.bindKeyToButton(KeyCode.KEY_J, 'btn_skill_1');
          tgx.UIJoystick.inst.bindKeyToButton(KeyCode.KEY_K, 'btn_skill_2');
        };
        _proto.onUpdate = function onUpdate(dt) {
          var layout = this._layout;
          activeSkillIds.forEach(function (skillId) {
            var cdPercent = 0;
            var cdInfo = TankGameMgr.inst.getSkillCd(skillId);
            if (cdInfo) {
              cdPercent = cdInfo.cdPercent;
            }
            layout.cdSprites[skillId - TankSkill.SKILL_1].fillRange = cdPercent;
          });
        };
        return UITankJoystick;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITankRevive.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './GameUILayers.ts', './Layout_UITankRevive.ts', './TankGameMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ModuleDef, GameUILayers, Layout_UITankRevive, TankGameMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UITankRevive = module.Layout_UITankRevive;
    }, function (module) {
      TankGameMgr = module.TankGameMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e60d8lbwGpPRrIAt6ZuAnvU", "UITankRevive", undefined);
      var UITankRevive = exports('UITankRevive', (_dec = tgx_class(ModuleDef.TANK), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UITankRevive, _tgx$UIController);
        function UITankRevive() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_tank_revive/ui_tank_revive', GameUILayers.POPUP, Layout_UITankRevive) || this;
          // + 500ms 用于延迟显示，用于消除网络延时带来的视觉误差
          // + 500ms used to delay display, to eliminate visual error caused by network latency
          _this._endTime = 0;
          _this._endTime = Date.now() + TankGameMgr.inst.selfPlayer.reviveTime + 500;
          return _this;
        }
        var _proto = UITankRevive.prototype;
        _proto.onCreated = function onCreated() {};
        _proto.onUpdate = function onUpdate(dt) {
          var _TankGameMgr$inst$sel;
          if (((_TankGameMgr$inst$sel = TankGameMgr.inst.selfPlayer) == null ? void 0 : _TankGameMgr$inst$sel.hp) > 0) {
            this.close();
            return;
          }
          var layout = this._layout;
          var remainingTime = Math.ceil((this._endTime - Date.now()) / 1000);
          if (remainingTime < 0) {
            remainingTime = 0;
          }
          if (remainingTime < 60) {
            layout.lblTime.string = remainingTime + 's';
          } else {
            var s = remainingTime % 60;
            var m = Math.floor(remainingTime / 60);
            layout.lblTime.string = m + 'm' + s + 's';
          }
        };
        return UITankRevive;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_tank', 'chunks:///_virtual/module_tank'); 
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