System.register("chunks:///_virtual/DragonElementDetailsManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDragonSceneManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Vec3, find, Label, Component, SlotDragonSceneManager;
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
      Vec3 = module.Vec3;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SlotDragonSceneManager = module.SlotDragonSceneManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "61d6fl52UpKSrPmQDDDo+tY", "DragonElementDetailsManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DragonElementDetailsManager = exports('DragonElementDetailsManager', (_dec = ccclass('DragonElementDetailsManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DragonElementDetailsManager, _Component);
        function DragonElementDetailsManager() {
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
        var _proto = DragonElementDetailsManager.prototype;
        _proto.onLoad = function onLoad() {
          if (DragonElementDetailsManager._instance) {
            this.node.destroy();
            return;
          }
          DragonElementDetailsManager._instance = this;
          this.leftContent.on(Node.EventType.TOUCH_END, this.hide, this);
          this.rightContent.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.onDestroy = function onDestroy() {
          DragonElementDetailsManager._instance = null;
        };
        _proto.showDetails = function showDetails(faceId, pos, pName, index) {
          this.hideAllFace();
          var lineLab = null;
          var lineMultLab = null;
          var targetNode = null;
          this.blackNode.active = true;
          var targetSpNode = null;
          if (pName === '2') {
            this.leftContent.active = false;
            this.rightContent.active = true;
            this.rightContent.position = new Vec3(175, pos.y + 870 + 10 * index);
            targetNode = this.rightContent;
            targetSpNode = this.rightSpNode;
          } else {
            this.leftContent.active = true;
            this.rightContent.active = false;
            var column = Number(pName);
            this.leftContent.position = new Vec3(-490 + 290 * column, pos.y + 870 + 10 * index);
            targetNode = this.leftContent;
            targetSpNode = this.letfSpNode;
          }
          lineLab = find('lineNum', targetNode).getComponent(Label);
          lineMultLab = find('lineMult', targetNode).getComponent(Label);
          lineLab.string = "3";
          lineMultLab.string = SlotDragonSceneManager.instance.elementOdd[faceId] + "";
          find(faceId.toString(), targetSpNode).active = true;
          this.unscheduleAllCallbacks();
          this.scheduleOnce(this.hide, 3);
        };
        _proto.hideAllFace = function hideAllFace() {
          for (var i = 0; i < this.letfSpNode.children.length; i++) {
            this.letfSpNode.children[i].active = false;
            this.rightSpNode.children[i].active = false;
          }
        };
        _proto.hide = function hide() {
          this.unscheduleAllCallbacks();
          this.leftContent.active = false;
          this.rightContent.active = false;
          this.blackNode.active = false;
        };
        _createClass(DragonElementDetailsManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return DragonElementDetailsManager;
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

System.register("chunks:///_virtual/module_slots_loong", ['./SlotDragonUtils.ts', './SlotDragonGameData.ts', './SlotDragonGameVariable.ts', './DragonElementDetailsManager.ts', './SlotDragonAnimation.ts', './SlotDragonGameElement.ts', './SlotDragonGameManager.ts', './SlotDragonNoticeManager.ts', './SlotDragonPrizeManager.ts', './SlotDragonSceneManager.ts', './SlotLoongGameMgr.ts', './UIDGMiniGame.ts', './UIDGMiniGameTip.ts', './UIDragonResult.ts', './UIDragonResultItem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotDragonAnimation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDragonGameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, Node, macro, Vec3, Component, SlotDragonGameManager;
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
      Node = module.Node;
      macro = module.macro;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      SlotDragonGameManager = module.SlotDragonGameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "a8695Zk2cVAXIuJAePJGFyZ", "SlotDragonAnimation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DragonAniName = {
        idle: 'idle',
        cute: 'cute',
        //卖萌
        celebrate: 'celebrate',
        //庆祝
        ball1: 'ball1',
        //抛球1
        ball2: 'ball2' //抛球2
      };

      var DragonAniStatus = /*#__PURE__*/function (DragonAniStatus) {
        DragonAniStatus[DragonAniStatus["idle"] = 0] = "idle";
        DragonAniStatus[DragonAniStatus["cute"] = 1] = "cute";
        DragonAniStatus[DragonAniStatus["celebrate"] = 2] = "celebrate";
        DragonAniStatus[DragonAniStatus["ball1"] = 3] = "ball1";
        DragonAniStatus[DragonAniStatus["ball2"] = 4] = "ball2";
        return DragonAniStatus;
      }(DragonAniStatus || {});
      Enum(DragonAniStatus);
      var SlotDragonAnimation = exports('SlotDragonAnimation', (_dec = ccclass('SlotDragonAnimation'), _dec2 = property([sp.SkeletonData]), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonAnimation, _Component);
        function SlotDragonAnimation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effect", _descriptor2, _assertThisInitialized(_this));
          _this.DragonAniName = DragonAniName;
          _this._status = DragonAniStatus.idle;
          _this._animation = null;
          _this._isPlayLoop = true;
          return _this;
        }
        var _proto = SlotDragonAnimation.prototype;
        _proto.onLoad = function onLoad() {
          if (SlotDragonAnimation._instance) {
            this.node.destroy();
            return;
          }
          SlotDragonAnimation._instance = this;
          this.gameSetup();
        };
        _proto.onDestroy = function onDestroy() {
          SlotDragonAnimation._instance = null;
        };
        _proto.gameSetup = function gameSetup() {
          var _this2 = this;
          this._animation = this.node.getComponent(sp.Skeleton);
          this._animation.setCompleteListener(function (ani) {
            if (!_this2.node.activeInHierarchy || _this2._isPlayLoop) return;
            if (_this2._status === DragonAniStatus.ball1) {
              _this2._isPlayLoop = true;
              _this2._animation.setAnimation(0, "1", true);
              SlotDragonGameManager.instance.freeMiniGame();
              return;
            }
            if (_this2._status !== DragonAniStatus.cute) _this2.openAniDownTime();
            _this2.playAni(DragonAniName.idle, true);
          });
          this.openAniDownTime();
        };
        _proto.playAni = function playAni(aniName, isLoop) {
          var _this3 = this;
          if (this._status === DragonAniStatus[aniName] || !this.node.activeInHierarchy) return;
          if (aniName !== DragonAniName.idle && aniName !== DragonAniName.cute) {
            this.unschedule(this.playCute);
          }
          if (aniName === DragonAniName.ball1) this.effect.active = false;
          if (aniName === DragonAniName.ball2) this.effect.active = true;
          this._isPlayLoop = isLoop;
          this._status = DragonAniStatus[aniName];
          this._animation.paused = true;
          this.scheduleOnce(function () {
            _this3._animation.paused = false;
            _this3._animation.skeletonData = _this3.aniData[_this3._status];
            _this3._animation.setAnimation(0, "animation", isLoop);
          }, 1 / 60);
        };
        _proto.openAniDownTime = function openAniDownTime() {
          this.schedule(this.playCute, 10, macro.REPEAT_FOREVER);
        };
        _proto.resetBallParet = function resetBallParet(parent) {
          this.node.parent = parent;
          this.node.setSiblingIndex(2);
          this.node.position = new Vec3(54, 932);
        };
        _proto.resetPlay = function resetPlay() {
          this.openAniDownTime();
          this.playAni(DragonAniName.ball2, false);
        };
        _proto.isShow = function isShow(_isShow) {
          if (_isShow === void 0) {
            _isShow = true;
          }
          this.node.active = _isShow;
        };
        _proto.playCute = function playCute() {
          this.playAni(DragonAniName.cute, false);
        };
        _createClass(SlotDragonAnimation, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return SlotDragonAnimation;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec3], {
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

System.register("chunks:///_virtual/SlotDragonGameData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "7b015hdj8NG6bmJuXMTp0RX", "SlotDragonGameData", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MessgeDefine = {
        Request: {
          start: "startgame",
          selected: "selected",
          route: "getminiroute"
        },
        Response: {
          GameScene: "slot_dragon_game_scene"
        }
      };
      var EventName = {
        "clickGameItem": "clickGameItem"
      };
      var Auto = {
        AutoIndex: [10, 30, 50, 100, 1000]
      };

      /**
       * 缓存的名字
       * @param betScore 下注额
       */
      var cacheName = {
        betScore: '_betScore'
      };
      var DragonGameStatus = exports('DragonGameStatus', /*#__PURE__*/function (DragonGameStatus) {
        DragonGameStatus[DragonGameStatus["start"] = 0] = "start";
        DragonGameStatus[DragonGameStatus["over"] = 1] = "over";
        DragonGameStatus[DragonGameStatus["mini"] = 2] = "mini";
        return DragonGameStatus;
      }({})); //进入小游戏
      Enum(DragonGameStatus);
      var SlotDragonGameData = exports('SlotDragonGameData', (_dec = ccclass('SlotDragonGameData'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonGameData, _Component);
        function SlotDragonGameData() {
          return _Component.apply(this, arguments) || this;
        }
        return SlotDragonGameData;
      }(Component), _class2.MessgeDefine = MessgeDefine, _class2.EventName = EventName, _class2.Auto = Auto, _class2.cacheName = cacheName, _class2.autoCountIndex = 0, _class2.leftAutoCount = 0, _class2.reduceLabel = 0, _class2.addLabel = 0, _class2.winLabel = 0, _class2)) || _class));

      /**
       * 开始游戏返回数据格式
       */

      /**
       * 主游戏格式
       */

      /**
       * 元素格式
       */

      /**
       * 小游戏返回格式
       */

      /**
       * 中奖线格式
       */

      /**
       * 小游戏的json格式
       */

      /**
       * 弹珠的运动的格式
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotDragonGameElement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DragonElementDetailsManager.ts', './SlotDragonGameManager.ts', './SlotDragonUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteAtlas, Sprite, sp, Node, Vec3, find, Component, DragonElementDetailsManager, SlotDragonGameManager, SlotDragonUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      Sprite = module.Sprite;
      sp = module.sp;
      Node = module.Node;
      Vec3 = module.Vec3;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      DragonElementDetailsManager = module.DragonElementDetailsManager;
    }, function (module) {
      SlotDragonGameManager = module.SlotDragonGameManager;
    }, function (module) {
      SlotDragonUtils = module.SlotDragonUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "9d2e8E9NfRCraMj9Yorql3M", "SlotDragonGameElement", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var spineName = {
        101: 0,
        102: 1,
        103: 2,
        104: 3,
        105: 4,
        106: 5,
        201: 6
      };
      var SlotDragonGameElement = exports('SlotDragonGameElement', (_dec = ccclass('SlotDragonGameElement'), _dec2 = property(SpriteAtlas), _dec3 = property(Sprite), _dec4 = property(sp.Skeleton), _dec5 = property([sp.SkeletonData]), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonGameElement, _Component);
        function SlotDragonGameElement() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "elementAtlas", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "elementSprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "elementSpine", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "elementSpineDatas", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeEffectNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "commonParticle", _descriptor6, _assertThisInitialized(_this));
          _this._faceId = "";
          _this._score = '';
          return _this;
        }
        var _proto = SlotDragonGameElement.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.elementSpine.setCompleteListener(function (ani) {
            if (ani.animation.name === '1') {
              _this2.elementSpine.setAnimation(0, '2', true);
            }
          });
          SlotDragonUtils.instance.setNodesByComponent(this.node);
        };
        _proto.onTouchEnd = function onTouchEnd() {
          if (this._faceId === "301" || this._faceId === "302") return;
          DragonElementDetailsManager.instance.showDetails(Number(this._faceId), this.node.position, this.node.parent.name, Number(this.node.name));
        };
        _proto.initElement = function initElement(faceId, score, ani) {
          if (score === void 0) {
            score = "";
          }
          if (ani === void 0) {
            ani = '';
          }
          this._faceId = faceId;
          this._score = score ? score : "0";
          this.elementSpine.node.active = false;
          this.resetElement();
          this.setFace(faceId, ani);
          if (ani === '3') this.setSpine(ani, false);
        };
        _proto.resetElement = function resetElement() {
          this.elementSprite.spriteFrame = null;
          for (var i = 0; i < this.prizeEffectNode.children.length; i++) {
            this.prizeEffectNode.children[i].active = false;
          }
          this.commonParticle.active = false;
        };
        _proto.setFace = function setFace(faceId, ani) {
          this.elementSprite.node.active = true;
          this.elementSprite.spriteFrame = this.elementAtlas.getSpriteFrame(faceId);
        };
        _proto.showSpine = function showSpine(faceId, startAni, isEnd) {
          if (startAni === void 0) {
            startAni = '1';
          }
          if (faceId === '201' || startAni === '') {
            this.elementSprite.node.active = false;
            this.elementSpine.node.active = true;
            this.elementSpine.skeletonData = this.elementSpineDatas[spineName[faceId]];
            this.elementSpine.setAnimation(0, "2", true);
            this.elementSpine.node.position = new Vec3(0, -65);
            // find('201', this.prizeEffectNode).active = true;
            return;
          }
          this.elementSprite.node.active = false;
          this.elementSpine.node.active = true;
          this.elementSpine.node.position = new Vec3(0, 0);
          this.elementSpine.skeletonData = this.elementSpineDatas[spineName[faceId]];
          this.elementSpine.setAnimation(0, startAni, false);
        };
        _proto.prizeEffect = function prizeEffect() {
          this.commonParticle.active = true;
          if (this._faceId === '201') return;
          find(this._faceId, this.prizeEffectNode).active = true;
        };
        _proto.setSpine = function setSpine(ani, isEnd, betScore) {
          if (betScore === void 0) {
            betScore = 0;
          }
          if (this._faceId === '201') {
            betScore > 0 && SlotDragonGameManager.instance.showTail(this.node.worldPosition.clone());
            ani != '3' && isEnd && this.showSpine(this._faceId, '', isEnd);
          } else {
            if (ani === '') return;
            this.showSpine(this._faceId, ani);
          }
        };
        return SlotDragonGameElement;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "elementAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "elementSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "elementSpine", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "elementSpineDatas", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "prizeEffectNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "commonParticle", [_dec7], {
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

System.register("chunks:///_virtual/SlotDragonGameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDragonGameVariable.ts', './SlotDragonSceneManager.ts', './SlotDragonGameData.ts', './SlotDragonPrizeManager.ts', './SlotDragonNoticeManager.ts', './DragonElementDetailsManager.ts', './UIDragonResult.ts', './UIDGMiniGameTip.ts', './SlotDragonAnimation.ts', './SlotDragonUtils.ts', './BaseSlot.ts', './Num.ts', './UserMgr.ts', './GameUtil.ts', './SubGameDef.ts', './RoomMgr.ts', './SlotShowPanelMgr.ts', './LanguageData.ts', './AudioMgr.ts', './ModuleDef.ts', './NetGameServer.ts', './UIHelp.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, _decorator, Node, Vec3, UIOpacity, tween, easing, Label, randomRangeInt, Tween, Sprite, instantiate, ParticleSystem, Component, find, SlotDragonGameVariable, SlotDragonSceneManager, DragonGameStatus, SlotDragonGameData, SlotDragonPrizeManager, SlotDragonNoticeManager, DragonElementDetailsManager, UIDragonResult, UIDGMiniGameTip, SlotDragonAnimation, SlotDragonUtils, SlotStopType, SlotEaseType, Num, UserMgr, GameUtil, SubGameDef, RoomMgr, showSlotBetPanel, showSlotAutoPenel, showSlotLastMoneyPenel, LanguageData, AudioMgr, ModuleDef, gameNet, UIHelp, UIhelpParam;
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
      Node = module.Node;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      easing = module.easing;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Tween = module.Tween;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      ParticleSystem = module.ParticleSystem;
      Component = module.Component;
      find = module.find;
    }, function (module) {
      SlotDragonGameVariable = module.SlotDragonGameVariable;
    }, function (module) {
      SlotDragonSceneManager = module.SlotDragonSceneManager;
    }, function (module) {
      DragonGameStatus = module.DragonGameStatus;
      SlotDragonGameData = module.SlotDragonGameData;
    }, function (module) {
      SlotDragonPrizeManager = module.SlotDragonPrizeManager;
    }, function (module) {
      SlotDragonNoticeManager = module.SlotDragonNoticeManager;
    }, function (module) {
      DragonElementDetailsManager = module.DragonElementDetailsManager;
    }, function (module) {
      UIDragonResult = module.UIDragonResult;
    }, function (module) {
      UIDGMiniGameTip = module.UIDGMiniGameTip;
    }, function (module) {
      SlotDragonAnimation = module.SlotDragonAnimation;
    }, function (module) {
      SlotDragonUtils = module.SlotDragonUtils;
    }, function (module) {
      SlotStopType = module.SlotStopType;
      SlotEaseType = module.SlotEaseType;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      GameUtil = module.GameUtil;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      showSlotBetPanel = module.showSlotBetPanel;
      showSlotAutoPenel = module.showSlotAutoPenel;
      showSlotLastMoneyPenel = module.showSlotLastMoneyPenel;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "9bd26M1KRlMt4snZxu1UaOm", "SlotDragonGameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotDragonGameManager = exports('SlotDragonGameManager', (_dec = ccclass('SlotDragonGameManager'), _dec2 = property({
        type: SlotDragonGameVariable,
        displayName: '暴露变量'
      }), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonGameManager, _Component);
        function SlotDragonGameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "variable", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickNode", _descriptor2, _assertThisInitialized(_this));
          _this.isAuto = false;
          _this.gameStatus = DragonGameStatus.over;
          _this.index = 0;
          _this._score = 0;
          _this._betScore = 0;
          _this._gearValueArr = [];
          _this._betLevel = 1;
          _this._isSpeed = false;
          _this._isOpenSetting = false;
          _this._isEntryMiniGame = false;
          _this._gameInfo = null;
          _this._isFreeGame = false;
          //是否有免费游戏
          _this.isDialog = false;
          _this._freeGameCallback = null;
          _this._totalLose = 0;
          _this._totalWin = 0;
          _this._singleWin = 0;
          _this._id1 = -1;
          _this._id2 = -1;
          _this._id3 = -1;
          _this._tailNum = 0;
          _this._isStartLaser = false;
          _this._laserSpeed = 5;
          _this._laserAddSpeed = 5;
          _this._isStartLaserStop = false;
          return _this;
        }
        var _proto = SlotDragonGameManager.prototype;
        _proto.onLoad = function onLoad() {
          if (SlotDragonGameManager._instance) {
            this.node.destroy();
            return;
          }
          SlotDragonGameManager._instance = this;
          this.gameSetup();
        };
        _proto.onDestroy = function onDestroy() {
          SlotDragonGameManager._instance = null;
        };
        _proto.gameSetup = function gameSetup() {
          AudioMgr.inst.play("audio/AC_sound_8004_music_interface_001", 1, ModuleDef.SLOTS_LOONG);
          var elementIds = ['101', '102', '103', '104', '105', '106', '201'];
          this.variable.scroll.setup(elementIds);
          this.variable.scroll.node.active = false;
          this.variable.otherNode.scale = new Vec3(1, 0, 1);
          this.variable.otherNode.getComponent(UIOpacity).opacity = 0;
          this.variable.setStartAni(3);

          // emitter.on(root.game.Event.ON_TOUCH, this.onEventEnd, this);
          this.clickNode.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          SlotDragonSceneManager.instance.startGame();
          SlotDragonUtils.instance.setNodesByComponent(this.node.parent, this.node.parent.parent.angle, this.node.parent.scale.clone());
        };
        _proto.onEventEnd = function onEventEnd() {
          DragonElementDetailsManager.instance.hide();
        };
        _proto.reconnect = function reconnect() {
          var _this2 = this;
          if (this.isEntryMiniGame || this._isFreeGame || this._gameInfo != null) return;
          var elementIds = this.variable.scroll.getRandomElementIds();
          this.variable.scroll.roll(elementIds, function () {
            _this2.variable.scroll.node.active = false;
            SlotDragonPrizeManager.instance.showPrize(elementIds, 0, 0, null, _this2.gameResult.bind(_this2));
          }, function (i) {});
          this.scheduleOnce(function () {
            _this2.variable.scroll.stop();
          }, 0.5);
        };
        _proto.laserStartScroll = function laserStartScroll() {
          var laserChild = this.variable.laserNode.children;
          var multi = SlotDragonSceneManager.instance.multi;
          for (var i = 0; i < laserChild.length; i++) {
            var pos = new Vec3(-245 + i * 160, 0, 0);
            tween(laserChild[i]).to(0.5, {
              position: pos
            }, {
              easing: easing.backOut
            }).call(function (target) {
              if (target.position.x < -244) {
                target.position = new Vec3(245, 0, 0);
                target.setSiblingIndex(10);
                target.getComponent(Label).string = 'x' + multi[randomRangeInt(0, multi.length)];
              }
            }).tag(1241).start();
          }
        };
        _proto.laserBigEndScroll = function laserBigEndScroll(multi, callback) {
          var _this3 = this;
          var laserChild = this.variable.laserCenterNode.children;
          Tween.stopAllByTag(1241);
          for (var i = 0; i < laserChild.length; i++) {
            if (laserChild[i].position.x >= 230) {
              var x = -laserChild[i].position.x;
              laserChild[i].getComponent(Label).string = 'x' + multi;
              var _loop = function _loop(j) {
                tween(laserChild[j]).by(0.8, {
                  position: new Vec3(x, 0, 0)
                }).call(function () {
                  if (j == 2) {
                    _this3.scheduleOnce(function () {
                      callback && callback();
                    }, .5);
                  }
                }).start();
              };
              for (var j = 0; j < laserChild.length; j++) {
                _loop(j);
              }
              break;
            }
          }
        };
        _proto.initUI = function initUI() {
          this._score = UserMgr.inst.coin;
          this.variable.scoreText.string = Num.exchangeToThousands(1, this._score);
          this.variable.winText.string = "0.00";
          this.variable.scroll.setWheels(SlotDragonSceneManager.instance.wheelData, 0);
          //设置下注额，初始化下注按钮
          this._gearValueArr = GameUtil.GetBetRange();
          var betSum = localStorage.getItem(SubGameDef.SLOTS_LOONG + SlotDragonGameData.cacheName.betScore);
          this._betScore = betSum ? Number(betSum) : this._gearValueArr[0];
          this.index = this._gearValueArr.indexOf(this._betScore);
          this.variable.betText.string = Num.exchangeToThousands(1, this._betScore);
          this.updateBetGear();
          this.variable.resetBigLaser(SlotDragonSceneManager.instance.multi);
          // this.openInteractable();
          this.btnManager(true);
          // console.log('下注档位->', this._gearValueArr);
        };

        _proto.openInteractable = function openInteractable() {
          this.variable.btnAdd.interactable = true;
          this.variable.btnSub.interactable = false;
          this.variable.btnStart.interactable = true;
          this.variable.btnAuto.interactable = true;
          this.variable.btnTurbo.interactable = true;
          this.variable.btnBet.interactable = true;
        };
        _proto.fakeMiniGame = function fakeMiniGame() {
          for (var i = 0; i < this.variable.entryMiniAniNode.length; i++) {
            tween(this.variable.entryMiniAniNode[i]).to(1.5, {
              scale: new Vec3(0.92, 0.92)
            }).delay(1).to(0.5, {
              scale: Vec3.ONE
            }).start();
          }
        }

        //获取普通游戏的所有的元素
        ;

        _proto.getElementIds = function getElementIds(res) {
          var rollInfo = [];
          for (var i = 0; i < res.length; i++) {
            rollInfo.push([]);
            for (var j = 0; j < res[i].elementId.length; j++) {
              var elementId = res[i].elementId[j];
              rollInfo[i].push({
                name: elementId.toString(),
                text: "0.00"
              });
            }
          }
          return rollInfo;
        };
        _proto.getFrameIds = function getFrameIds() {
          var column = this.variable.scroll.column;
          var rollInfo = [];
          for (var i = 0; i < column.length; i++) {
            rollInfo[i] = [];
            for (var j = 0; j < column[i].length; j++) {
              rollInfo[i].push({
                name: column[i][j].getComponent(Sprite).spriteFrame.name,
                text: ''
              });
            }
          }
          return rollInfo;
        };
        _proto.setScore = function setScore(winNum) {
          if (winNum === 0) return;
          this._score += winNum;
          this.variable.updateScore(this._score - winNum, this._score);
        };
        _proto.btnManager = function btnManager(interactable) {
          this.variable.btnSub.interactable = interactable;
          this.variable.btnAdd.interactable = interactable;
          this.variable.btnAuto.interactable = interactable;
          this.variable.btnStart.interactable = interactable;
          if (this.index === 0) {
            this.variable.btnSub.interactable = false;
          } else if (this.index >= this._gearValueArr.length - 1) {
            this.variable.btnAdd.interactable = false;
          }
          if (interactable) {
            this.variable.setStartAni(3);
          } else {
            this.variable.setStartAni(0.5);
          }
        }

        //=============按钮=================
        ;

        _proto.onStart = /*#__PURE__*/
        function () {
          var _onStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this4 = this;
            var _find, startPat, result, res, elementIds;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.gameStatus != DragonGameStatus.over)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  if (!this.isAuto) ;
                  SlotDragonNoticeManager.instance.hideScoreNode();
                  this.btnManager(false);
                  SlotDragonPrizeManager.instance.hideEndContet();
                  this.variable.winText.string = "0.00";
                  this.variable.scroll.node.active = true;
                  this.variable.scroll.showAllLayer();
                  if (!this.isAuto) {
                    AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_UI_button", 1, ModuleDef.SLOTS_LOONG);
                    this.variable.btnStartEffect.active = true;
                    startPat = (_find = find('1', this.variable.btnStartEffect)) == null ? void 0 : _find.getComponent(ParticleSystem);
                    startPat.stop();
                    startPat.play();
                  }
                  AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_turntable_glitter", 1, ModuleDef.SLOTS_LOONG).then(function (id) {
                    _this4._id1 = id;
                  });
                  this.variable.scroll.rollVirtually();
                  if (this._isEntryMiniGame) {
                    this.variable.scroll.toggle(0, null);
                  }
                  this.gameStatus = DragonGameStatus.start;
                  this.variable.effectStart.stop();
                  this.variable.effectStart.play();
                  // this.variable.laserScroll(SlotDragonSceneManager.instance.multi);
                  _context.next = 18;
                  return gameNet.playSlots(SubGameDef.SLOTS_LOONG, this._betScore.toString());
                case 18:
                  result = _context.sent;
                  _context.next = 21;
                  return SlotDragonUtils.instance.conver(result, this._betScore);
                case 21:
                  res = _context.sent;
                  this._gameInfo = res;
                  if (res.code === 200) {
                    this.successStart(res);
                  } else {
                    this._gameInfo = null;
                    elementIds = this.variable.scroll.getRandomElementIds();
                    this.variable.scroll.roll(elementIds, function () {
                      _this4.isAuto = false;
                      _this4.variable.scroll.node.active = false;
                      _this4.stopAuto();
                      SlotDragonPrizeManager.instance.showPrize(elementIds, 0, 0, null, _this4.gameResult.bind(_this4));
                      _this4.btnManager(true);
                    }, function (i) {});
                    if (!res.code || res.code === 501 || res.code === 201 || res.code === 202 || res.code === 203 || res.code === 205) ;
                    this.scheduleOnce(function () {
                      _this4.variable.scroll.stop();
                    }, 2);
                  }
                case 24:
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
        _proto.successStart = function successStart(res) {
          var _this5 = this;
          var betScore = res.betScore ? res.betScore : 0;
          this._score -= betScore;
          this._totalLose += betScore;
          this._totalWin -= betScore;
          this.variable.scoreTw && this.variable.scoreTw.stop();
          this.variable.scoreText.string = Num.exchangeToThousands(1, this._score);
          var elementIds = [];
          this._isFreeGame = res.free ? true : false;
          if (res.mini) {
            //小游戏
            this._isEntryMiniGame = true;
            // if (!res.mini.finished) {
            //     this.getMiniRoute(res.mini.routeId, res.mini.routeLength);
            // } else {
            elementIds = this.getElementIds(res.main.colums);
            this.variable.scroll.roll(elementIds, function () {
              _this5.variable.scroll.node.active = false;
              SlotDragonPrizeManager.instance.showPrize(elementIds, 0, res.betScore);

              // SlotDragonPrizeManager.instance.endContent.active = true;
              // SlotDragonPrizeManager.instance.showEndContent(false);

              UIDGMiniGameTip.instance.show(res.mini);
            }, function (i) {});
            this.scheduleOnce(function () {
              _this5.variable.scroll.stop();
            }, 1);
            // }
          } else if (res.main && res.main.colums.length > 0) {
            //正常游戏
            this._isEntryMiniGame = false;
            elementIds = this.getElementIds(res.main.colums);
            SlotDragonPrizeManager.instance.endContent.active = true;
            SlotDragonPrizeManager.instance.showEndContent(false);
            this.variable.scroll.roll(elementIds, function () {
              _this5.variable.scroll.node.active = false;
              SlotDragonPrizeManager.instance.showPrize(elementIds, res.main.hitType, res.betScore, res.main, _this5.gameOver.bind(_this5));
            }, function (i) {});
            var delayTime = 0.06;
            var random = Math.random();
            //fakeMiniRate万分比
            if (random < SlotDragonSceneManager.instance.fakeMiniRate / 10000) {
              //假装要进小游戏
              delayTime = 4;
              this.fakeMiniGame();
            }
            this.scheduleOnce(function () {
              if (_this5.variable.scroll.stopType === SlotStopType.立即停止) {
                if (_this5._id1 != -1) AudioMgr.inst.stopOneShot(_this5._id1, 'audio/AC_sound_8004_dragon_turntable_glitter', ModuleDef.SLOTS_LOONG), _this5._id1 = -1;
                if (!_this5.isDialog) AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_turntable_stop", 1, ModuleDef.SLOTS_LOONG).then(function (id) {
                  _this5._id2 = id;
                });
              } else {
                for (var i = 0; i < 3; i++) {
                  var interval = 0;
                  if (i === 1) {
                    interval = 0.4;
                  } else if (i === 2) {
                    interval = 1.02;
                  }
                  _this5.scheduleOnce(function () {
                    if (!_this5.isDialog) AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_turntable_stop", 1, ModuleDef.SLOTS_LOONG).then(function (id) {
                      _this5._id2 = id;
                    });
                  }, interval);
                }
              }
            }, delayTime + 0.4);
            this.scheduleOnce(function () {
              if (!_this5._isSpeed) {
                _this5.scheduleOnce(function () {
                  if (_this5._id1 != -1) AudioMgr.inst.stopOneShot(_this5._id1, 'audio/AC_sound_8004_dragon_turntable_glitter', ModuleDef.SLOTS_LOONG), _this5._id1 = -1;
                }, 1.05);
              }
              _this5.variable.scroll.stop();
            }, delayTime);
          }
        };
        _proto.showTail = function showTail(currentPos) {
          var _this6 = this;
          if (this._tailNum === 0 && !this.isDialog) AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_light_up", 1, ModuleDef.SLOTS_LOONG).then(function (id) {
            _this6._id3 = id;
          });
          this._tailNum++;
          var item = instantiate(this.variable.tailPrefab);
          item.parent = this.variable.effectParent;
          item.worldPosition = currentPos;
          var boomPos = this.variable.ballBoomEffect.worldPosition.clone();
          var endPos = new Vec3(boomPos.x, currentPos.y);
          SlotDragonUtils.instance.bezierTo(item, 0.3, 0, currentPos, endPos, boomPos).call(function (node) {
            node.removeFromParent();
            _this6.variable.ballBoomEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).stop();
              v.getComponent(ParticleSystem).play();
            });
          }).start();
        };
        _proto.getMiniRoute = function getMiniRoute(id, length) {
          // console.log('参数：', { route: id, offset: length });
          // socket.gameReq(SlotDragonGameData.MessgeDefine.Request.route,
          //     { routeId: id, offset: length }, (res: SlotDragonMiniRouteResp) => {
          //         console.log("---route-->", res);
          //         if (res.code === 200) {
          //             this._gameInfo.mini.route += res.route;
          //             if (!res.finished) {
          //                 this.getMiniRoute(res.routeId, res.routeLength);
          //             } else {
          //                 UIDGMiniGameTip.instance.show(this._gameInfo.mini);

          //                 const elementIds = this.getElementIds(this._gameInfo.main.colums);

          //                 SlotDragonPrizeManager.instance.endContent.active = true;
          //                 SlotDragonPrizeManager.instance.showEndContent(false);
          //                 this.variable.scroll.roll(elementIds, () => {
          //                     this.variable.scroll.node.active = false;
          //                     SlotDragonPrizeManager.instance.showPrize(elementIds, 0, this._gameInfo.betScore);
          //                 }, (i) => {

          //                 });
          //                 this.scheduleOnce(() => {
          //                     this.variable.scroll.stop();
          //                 }, 1);
          //             }
          //         }
          //     });
        };
        _proto.stopAllAudio = function stopAllAudio() {
          if (this._id1 != -1) AudioMgr.inst.stopOneShot(this._id1, 'audio/AC_sound_8004_dragon_turntable_glitter', ModuleDef.SLOTS_LOONG), this._id1 = -1;
          if (this._id2 != -1) AudioMgr.inst.stopOneShot(this._id2, 'audio/AC_sound_8004_dragon_turntable_stop', ModuleDef.SLOTS_LOONG), this._id2 = -1;
          if (this._id3 != -1) AudioMgr.inst.stopOneShot(this._id3, 'audio/AC_sound_8004_dragon_light_up', ModuleDef.SLOTS_LOONG), this._id3 = -1;
        };
        _proto.gameOver = function gameOver() {
          var _this7 = this;
          if (this._isFreeGame) {
            var cb = function cb() {
              _this7.scheduleOnce(function () {
                AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_ball_rotate", 1, ModuleDef.SLOTS_LOONG);
              }, .2);
              SlotDragonAnimation.instance.playAni(SlotDragonAnimation.instance.DragonAniName.ball1, false);
              _this7.variable.ball.node.active = true;
              _this7.variable.ball.setAnimation(0, "animation", false);
            };
            UIDGMiniGameTip.instance.showFreeTip(cb.bind(this));
          } else {
            this.gameResult();
          }
        };
        _proto.freeMiniGame = function freeMiniGame() {
          var _this8 = this;
          this.variable.laserCenterNode.active = true;
          this.variable.dragonBallEffect.active = true;
          this.variable.effectBlack.active = true;
          this.variable.ballEffectBg.active = true;
          var cb = function cb() {
            var _this8$_gameInfo;
            var resultCb = function resultCb() {
              _this8.gameResult();
              _this8.isDialog = false;
              _this8.variable.ball.node.active = false;
              _this8.variable.dragonBallEffect.active = false;
              _this8.variable.effectBlack.active = false;
              _this8.variable.ballEffectBg.active = false;
              _this8.variable.resetBigLaser(SlotDragonSceneManager.instance.multi);
              SlotDragonAnimation.instance.playAni(SlotDragonAnimation.instance.DragonAniName.ball2, false);
            };
            UIDragonResult.instance.showFreeResult((_this8$_gameInfo = _this8._gameInfo) == null ? void 0 : _this8$_gameInfo.free.winScore, resultCb.bind(_this8));
          };
          this.stopAllAudio();
          this.isDialog = true;
          this._laserSpeed = 5;
          this._laserAddSpeed = 45;
          this._isStartLaser = true;
          this._isStartLaserStop = false;
          this.scheduleOnce(function () {
            _this8._isStartLaserStop = true;
            console.log("-----球开始停了:", _this8._gameInfo.free.multi);
            _this8._freeGameCallback = cb.bind(_this8);
          }, 3);
        };
        _proto.gameResult = function gameResult() {
          var _this9 = this;
          var betScore = this._gameInfo ? this._gameInfo.betScore ? this._gameInfo.betScore : 0 : 0;
          var winScore = this._gameInfo ? this._gameInfo.winScore ? this._gameInfo.winScore : 0 : 0;
          var cb = function cb() {
            _this9.gameStatus = DragonGameStatus.over;
            _this9.variable.mainBtn.active = true;
            if (SlotDragonGameData.leftAutoCount <= 0) _this9.btnManager(true);
            _this9.setScore(winScore);
            _this9.totalScore(winScore);
            if (winScore > 0) _this9.variable.updateWin(winScore);
            var delayTime = 1;
            if (winScore === 0) delayTime = 0.2;
            if (SlotDragonGameData.leftAutoCount > 0) _this9.updateLabelAutoCount(delayTime);else if (SlotDragonGameData.leftAutoCount <= 0) _this9.isAuto = false;
            _this9._isFreeGame = false;
            _this9._isEntryMiniGame = false;
            _this9._gameInfo = null;
            _this9._tailNum = 0;
          };
          if (betScore === 0 || this._isEntryMiniGame || this._isFreeGame) {
            SlotDragonNoticeManager.instance.balanceScore(betScore, winScore, cb.bind(this));
            return;
          }
          var mult = winScore / betScore;
          if (mult && mult >= 10) {
            this.scheduleOnce(function () {
              SlotDragonNoticeManager.instance.balanceScore(betScore, winScore);
              UIDragonResult.instance.showResult(winScore, betScore, cb.bind(_this9));
            }, 1);
          } else {
            if (mult > 1 && mult < 2) {
              AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_voice_yeah_001", 1, ModuleDef.SLOTS_LOONG);
            } else if (mult >= 2 && mult < 5) {
              AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_voice_great_001", 1, ModuleDef.SLOTS_LOONG);
            } else if (mult >= 5 && mult < 10) {
              AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_voice_prefect_001", 1, ModuleDef.SLOTS_LOONG);
            }
            SlotDragonNoticeManager.instance.balanceScore(betScore, winScore, cb.bind(this));
          }
        };
        _proto.setScroll = function setScroll(isMini) {
          if (isMini) {
            this.variable.scroll.easingIn = SlotEaseType.Back;
            this.variable.scroll.easingOut = SlotEaseType.Back;
          } else {
            if (this._isSpeed) {
              this.variable.scroll.easingIn = SlotEaseType.Linear;
              this.variable.scroll.easingOut = SlotEaseType.Linear;
            } else {
              this.variable.scroll.easingIn = SlotEaseType.Back;
              this.variable.scroll.easingOut = SlotEaseType.Elastic;
            }
          }
        };
        _proto.onBetSub = function onBetSub() {
          this.index = Math.ceil(this.index - 1);
          if (this.index <= 0) {
            this.index = 0;
            this.variable.btnSub.interactable = false;
          }
          this.variable.btnAdd.interactable = true;
          this.variable.betText.string = this._gearValueArr[this.index] + '';
          this._betScore = this._gearValueArr[this.index];
          localStorage.setItem(SubGameDef.SLOTS_KYLIN + SlotDragonGameData.cacheName.betScore, this._betScore.toString());
          this._betLevel = 1;
        };
        _proto.onBetAdd = function onBetAdd() {
          this.index = Math.floor(this.index + 1);
          if (this.index >= this._gearValueArr.length - 1) {
            this.index = this._gearValueArr.length - 1;
            this.variable.btnAdd.interactable = false;
          }
          this.variable.btnSub.interactable = true;
          this.variable.betText.string = this._gearValueArr[this.index] + '';
          this._betScore = this._gearValueArr[this.index];
          localStorage.setItem(SubGameDef.SLOTS_KYLIN + SlotDragonGameData.cacheName.betScore, this._betScore.toString());
          this._betLevel = 1;
        };
        _proto.onTurbo = function onTurbo() {
          if (!this._isSpeed) {
            this._isSpeed = true;
            this.variable.scroll.stopType = SlotStopType.立即停止;
            this.variable.scroll.easingIn = SlotEaseType.Linear;
            this.variable.scroll.easingOut = SlotEaseType.Linear;
            this.variable.turboTip.string = LanguageData.getLangByID("Turbo");
            this.variable.turboEffect.active = true;
          } else {
            this._isSpeed = false;
            this.variable.scroll.stopType = SlotStopType.立即陆续;
            this.variable.scroll.easingIn = SlotEaseType.Back;
            this.variable.scroll.easingOut = SlotEaseType.Elastic;
            this.variable.turboTip.string = LanguageData.getLangByID("Off");
            this.variable.turboEffect.active = false;
          }
        };
        _proto.onMore = function onMore() {
          if (!this._isOpenSetting) {
            this._isOpenSetting = true;
            this.clickNode.active = true;
            tween(this.variable.otherNode.getComponent(UIOpacity)).to(.2, {
              opacity: 255
            }).start();
            tween(this.variable.otherNode).to(.2, {
              scale: new Vec3(1, 1, 1)
            }).start();
          } else {
            this._isOpenSetting = false;
            this.clickNode.active = false;
            tween(this.variable.otherNode.getComponent(UIOpacity)).to(.2, {
              opacity: 0
            }).start();
            tween(this.variable.otherNode).to(.2, {
              scale: new Vec3(1, 0, 1)
            }).start();
          }
        };
        _proto.onBet = function onBet() {
          var _this10 = this;
          if (this.gameStatus != DragonGameStatus.over || this.isAuto) return;
          var cb = function cb() {
            _this10.index = arguments.length <= 2 ? undefined : arguments[2];
            _this10._betScore = arguments.length <= 3 ? undefined : arguments[3];
            _this10.variable.betText.string = arguments.length <= 4 ? undefined : arguments[4];
            localStorage.setItem(SubGameDef.SLOTS_KYLIN + SlotDragonGameData.cacheName.betScore, _this10._betScore.toString());
            _this10.updateBetGear();
          };
          showSlotBetPanel(this.variable.panelParentNode, [0.03, 0.1, 0.3, 0.9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, UserMgr.inst.coin, Number(this.variable.betText.string), cb.bind(this)).then(function (value) {
            value.bindBet(_this10.index);
          });
          this.onTouchEnd();
        };
        _proto.updateBetGear = function updateBetGear() {
          for (var i = 0; i < this._gearValueArr.length; i++) {
            //选中为档位中的
            if (this._gearValueArr[i] === this._betScore) {
              if (i === 0) {
                this.variable.btnSub.interactable = false;
                this.variable.btnAdd.interactable = true;
              } else if (i === this._gearValueArr.length - 1) {
                this.variable.btnSub.interactable = true;
                this.variable.btnAdd.interactable = false;
              } else {
                this.variable.btnSub.interactable = true;
                this.variable.btnAdd.interactable = true;
              }
              this.index = i;
              break;
            }

            //基于档位之间的
            if (i === this._gearValueArr.length - 1) break;
            var value = this._gearValueArr[i + 1];
            if (this._betScore > this._gearValueArr[i] && this._betScore < value) {
              this.index = i + 0.5;
              this.variable.btnAdd.interactable = true;
              this.variable.btnSub.interactable = true;
              break;
            }
          }
        };
        _proto.onAuto = function onAuto() {
          var _this11 = this;
          console.log('%c ----自动-----', "color:#2ba914");
          var cb = function cb(autoNum) {
            SlotDragonGameData.leftAutoCount = autoNum;
            _this11.startAuto();
          };
          showSlotAutoPenel(this.variable.panelParentNode, UserMgr.inst.coin, Number(this.variable.betText.string), cb.bind(this));
          this.onTouchEnd();
        };
        _proto.startAuto = function startAuto() {
          if (UserMgr.inst.coin < this._betScore) {
            tgx.UITip.instance.show(LanguageData.getLangByID("206"));
            return;
          }
          this.isAuto = true;
          this.variable.btnStart.node.active = false;
          this.variable.btnStop.node.active = true;
          this._totalLose = 0;
          this._totalWin = 0;
          this._singleWin = 0;
          // SlotDragonGameData.leftAutoCount = SlotDragonGameData.Auto.AutoIndex[SlotDragonGameData.autoCountIndex];
          this.updateLabelAutoCount();
        };
        _proto.updateLabelAutoCount = function updateLabelAutoCount(delayTime) {
          var _this12 = this;
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this.scheduleOnce(function () {
            SlotDragonGameData.leftAutoCount--;
            if (SlotDragonGameData.leftAutoCount > 0) {
              _this12.variable.autoText.string = SlotDragonGameData.leftAutoCount.toString();
            } else {
              _this12.stopAuto();
            }
            _this12.onStart();
          }, delayTime);
        }

        //计算所有情况的分数
        ;

        _proto.totalScore = function totalScore(winScore) {
          if (!winScore) winScore = 0;
          this._totalLose -= winScore;
          this._totalWin += winScore;
          this._singleWin = winScore;
          if (SlotDragonGameData.reduceLabel != 0 && this._totalLose >= SlotDragonGameData.reduceLabel * 100 || SlotDragonGameData.addLabel != 0 && this._totalWin >= SlotDragonGameData.addLabel * 100 || SlotDragonGameData.winLabel != 0 && this._singleWin >= SlotDragonGameData.winLabel * 100) {
            this.stopAuto();
            this.btnManager(true);
          }
        };
        _proto.onStop = function onStop() {
          this.stopAuto();
        };
        _proto.stopAuto = function stopAuto() {
          console.log("%c ----停止自动游戏-----", "color:#2ba914");
          this.variable.btnStart.node.active = true;
          this.variable.btnStop.node.active = false;
          SlotDragonGameData.leftAutoCount = 0;
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
        _proto.onLastMoney = function onLastMoney() {
          //打开钱包
          showSlotLastMoneyPenel(this.variable.panelParentNode, UserMgr.inst.coin);
        };
        _proto.onExit = function onExit() {
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true, 'e4d3ff', '6347d8', 'd3cceb', '554b6b').onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ok) {
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
        };
        _proto.onTouchEnd = function onTouchEnd() {
          if (this._isOpenSetting) {
            this._isOpenSetting = false;
            this.clickNode.active = false;
            tween(this.variable.otherNode.getComponent(UIOpacity)).to(.2, {
              opacity: 0
            }).start();
            tween(this.variable.otherNode).to(.2, {
              scale: new Vec3(1, 0, 1)
            }).start();
          }
        };
        _proto.update = function update(dt) {
          var _this13 = this;
          if (!this._isStartLaser) return;
          var laserChild = this.variable.laserCenterNode.children;
          this._laserSpeed += this._laserAddSpeed * dt;
          if (this._laserSpeed >= 70) {
            this._laserSpeed = 70;
            this._laserAddSpeed = -30;
          }
          if (this._laserSpeed <= 15 && this._laserAddSpeed === -30) this._laserSpeed = 15;
          for (var i = 0; i < laserChild.length; i++) {
            var pos = laserChild[i].position.clone();
            pos.subtract3f(this._laserSpeed, 0, 0);
            laserChild[i].position = pos;
            if (this._isStartLaserStop && pos.x >= -10 && pos.x <= 10 && laserChild[i].name === this._gameInfo.free.multi.toString()) {
              this._isStartLaser = false;
              AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_ball_rotate_001", 1, ModuleDef.SLOTS_LOONG);
              this.scheduleOnce(function () {
                _this13._freeGameCallback && (_this13._freeGameCallback(), _this13._freeGameCallback = null);
              }, .5);
            }
            if (pos.x <= -690) {
              var l = SlotDragonSceneManager.instance.multi.length - 1;
              laserChild[i].position = new Vec3(-240 + l * 450, 0, 0);
            }
          }
        };
        _createClass(SlotDragonGameManager, [{
          key: "isEntryMiniGame",
          get: function get() {
            return this._isEntryMiniGame;
          }
        }], [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return SlotDragonGameManager;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "variable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SlotDragonGameVariable();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickNode", [_dec3], {
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

System.register("chunks:///_virtual/SlotDragonGameVariable.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDragonUtils.ts', './ExtendButton.ts', './BaseSlot.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Label, Node, Sprite, UITransform, sp, ParticleSystem, Prefab, tween, Vec3, randomRangeInt, SlotDragonUtils, ExtendButton, BaseSlot;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      sp = module.sp;
      ParticleSystem = module.ParticleSystem;
      Prefab = module.Prefab;
      tween = module.tween;
      Vec3 = module.Vec3;
      randomRangeInt = module.randomRangeInt;
    }, function (module) {
      SlotDragonUtils = module.SlotDragonUtils;
    }, function (module) {
      ExtendButton = module.ExtendButton;
    }, function (module) {
      BaseSlot = module.BaseSlot;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "895f2eiqXVHYZKmtwHx1i3c", "SlotDragonGameVariable", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotDragonGameVariable = exports('SlotDragonGameVariable', (_dec = ccclass('SlotDragonGameVariable'), _dec2 = property({
        type: ExtendButton,
        displayName: '开始按钮'
      }), _dec3 = property({
        type: ExtendButton,
        displayName: '加速按钮'
      }), _dec4 = property({
        type: ExtendButton,
        displayName: '减按钮'
      }), _dec5 = property({
        type: ExtendButton,
        displayName: '加按钮'
      }), _dec6 = property({
        type: ExtendButton,
        displayName: '自动按钮'
      }), _dec7 = property({
        type: ExtendButton,
        displayName: '停止自动按钮'
      }), _dec8 = property({
        type: ExtendButton,
        displayName: '下注按钮'
      }), _dec9 = property(Label), _dec10 = property({
        type: Label,
        displayName: '积分'
      }), _dec11 = property({
        type: Label,
        displayName: '下注额'
      }), _dec12 = property({
        type: Label,
        displayName: '赢的分数'
      }), _dec13 = property({
        type: Label,
        tooltip: '加速按钮提示'
      }), _dec14 = property({
        type: Node,
        tooltip: '放置所有二级界面'
      }), _dec15 = property(BaseSlot), _dec16 = property(Node), _dec17 = property([Node]), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Sprite), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(UITransform), _dec26 = property(sp.Skeleton), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(ParticleSystem), _dec35 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function SlotDragonGameVariable() {
          _initializerDefineProperty(this, "btnStart", _descriptor, this);
          _initializerDefineProperty(this, "btnTurbo", _descriptor2, this);
          _initializerDefineProperty(this, "btnSub", _descriptor3, this);
          _initializerDefineProperty(this, "btnAdd", _descriptor4, this);
          _initializerDefineProperty(this, "btnAuto", _descriptor5, this);
          _initializerDefineProperty(this, "btnStop", _descriptor6, this);
          _initializerDefineProperty(this, "btnBet", _descriptor7, this);
          _initializerDefineProperty(this, "autoText", _descriptor8, this);
          _initializerDefineProperty(this, "scoreText", _descriptor9, this);
          _initializerDefineProperty(this, "betText", _descriptor10, this);
          _initializerDefineProperty(this, "winText", _descriptor11, this);
          _initializerDefineProperty(this, "turboTip", _descriptor12, this);
          _initializerDefineProperty(this, "panelParentNode", _descriptor13, this);
          _initializerDefineProperty(this, "scroll", _descriptor14, this);
          _initializerDefineProperty(this, "otherNode", _descriptor15, this);
          _initializerDefineProperty(this, "entryMiniAniNode", _descriptor16, this);
          _initializerDefineProperty(this, "mainBtn", _descriptor17, this);
          _initializerDefineProperty(this, "startRefresh", _descriptor18, this);
          //开始按钮旋转处
          _initializerDefineProperty(this, "turntableBg", _descriptor19, this);
          _initializerDefineProperty(this, "laserNode", _descriptor20, this);
          _initializerDefineProperty(this, "laserCenterNode", _descriptor21, this);
          _initializerDefineProperty(this, "laserMultiple", _descriptor22, this);
          _initializerDefineProperty(this, "decorateNode", _descriptor23, this);
          _initializerDefineProperty(this, "bottomBg", _descriptor24, this);
          _initializerDefineProperty(this, "ball", _descriptor25, this);
          //=======特效==========
          _initializerDefineProperty(this, "effectBlack", _descriptor26, this);
          _initializerDefineProperty(this, "turboEffect", _descriptor27, this);
          _initializerDefineProperty(this, "btnStartEffect", _descriptor28, this);
          _initializerDefineProperty(this, "dragonBallEffect", _descriptor29, this);
          _initializerDefineProperty(this, "ballEffectBg", _descriptor30, this);
          _initializerDefineProperty(this, "ballBoomEffect", _descriptor31, this);
          _initializerDefineProperty(this, "effectParent", _descriptor32, this);
          _initializerDefineProperty(this, "effectStart", _descriptor33, this);
          //======预制体=========
          _initializerDefineProperty(this, "tailPrefab", _descriptor34, this);
          this._btnStartTw = null;
          this.winTw = null;
          this.scoreTw = null;
        }
        var _proto = SlotDragonGameVariable.prototype;
        _proto.setStartAni = function setStartAni(delayTime) {
          this._btnStartTw && (this._btnStartTw.stop(), this._btnStartTw = null);
          this._btnStartTw = tween(this.startRefresh).by(delayTime, {
            eulerAngles: new Vec3(0, 0, 360)
          }).repeatForever();
          this._btnStartTw.start();
        };
        _proto.updateScore = function updateScore(startNum, endNum) {
          var _this$scoreTw;
          var param = {
            timer: 1
          };
          (_this$scoreTw = this.scoreTw) == null || _this$scoreTw.removeSelf();
          this.scoreTw = SlotDragonUtils.instance.IncreaseNumber(this.scoreText, startNum, endNum, param);
          this.scoreTw.start();
        };
        _proto.updateWin = function updateWin(winScore) {
          var _this$winTw;
          var param = {
            timer: 0.5,
            tag: 3
          };
          (_this$winTw = this.winTw) == null || _this$winTw.removeSelf();
          this.winTw = SlotDragonUtils.instance.IncreaseNumber(this.winText, 0, winScore, param);
          this.winTw.start();
        };
        _proto.resetLaser = function resetLaser() {
          this.laserNode.active = true;
          var laserChild = this.laserNode.children;
          for (var i = 0; i < laserChild.length; i++) {
            laserChild[i].position = new Vec3(-85 + i * 160, 0, 0);
          }
        };
        _proto.laserScroll = function laserScroll(multi) {
          var laserChild = this.laserNode.children;
          for (var i = 0; i < laserChild.length; i++) {
            laserChild[i].position = new Vec3(-85 + i * 160, 0, 0);
          }
          for (var _i = 0; _i < laserChild.length; _i++) {
            tween(laserChild[_i]).by(.2, {
              position: new Vec3(-160, 0, 0)
            }).call(function (target) {
              if (target.position.x < -244) {
                target.position = new Vec3(235, 0, 0);
                target.setSiblingIndex(10);
                target.getComponent(Label).string = 'x' + multi[randomRangeInt(0, multi.length)];
              }
            }).union().repeatForever().tag(1241).start();
            tween(laserChild[_i]).to(.1, {
              scale: new Vec3(1.3, 1.3, 1.3)
            }).to(.1, {
              scale: Vec3.ONE
            }).union().repeatForever().tag(1241).start();
          }
        };
        _proto.laserRScroll = function laserRScroll(multi) {
          var laserChild = this.laserNode.children;
          for (var i = 0; i < laserChild.length; i++) {
            tween(laserChild[i]).by(.5, {
              position: new Vec3(-450, 0, 0)
            }).call(function (target) {
              if (target.position.x > 234) {
                target.position = new Vec3(-245, 0, 0);
                target.setSiblingIndex(0);
                target.getComponent(Label).string = 'x' + multi[randomRangeInt(0, multi.length)];
              }
            }).union().repeatForever().tag(1241).start();
            tween(laserChild[i]).to(.25, {
              scale: new Vec3(1.3, 1.3, 1.3)
            }).to(.25, {
              scale: Vec3.ONE
            }).union().repeatForever().tag(1241).start();
          }
        };
        _proto.resetBigLaser = function resetBigLaser(multi) {
          var laserChild = this.laserCenterNode.children;
          for (var i = 0; i < laserChild.length; i++) {
            var pos = new Vec3(-240 + i * 450, 0, 0);
            laserChild[i].active = true;
            laserChild[i].position = pos;
            laserChild[i].getComponent(Label).string = "x" + multi[i];
            laserChild[i].name = "" + multi[i];
          }
          this.laserCenterNode.active = false;
        };
        _proto.laserBigScroll = function laserBigScroll(multi, runTimer) {
          if (runTimer === void 0) {
            runTimer = .3;
          }
          var laserChild = this.laserCenterNode.children;
          for (var i = 0; i < laserChild.length; i++) {
            tween(laserChild[i]).by(runTimer, {
              position: new Vec3(-450, 0, 0)
            }).call(function (target) {
              if (target.position.x <= -689) {
                target.position = new Vec3(660, 0, 0);
                target.setSiblingIndex(10);
                target.getComponent(Label).string = 'x' + multi[randomRangeInt(0, multi.length)];
              }
            }).union().repeatForever().tag(1241).start();
            tween(laserChild[i]).to(runTimer / 2, {
              scale: new Vec3(1.3, 1.3, 1.3)
            }).to(runTimer / 2, {
              scale: Vec3.ONE
            }).union().repeatForever().tag(1241).start();
          }
        };
        return SlotDragonGameVariable;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnTurbo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnSub", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnStop", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnBet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "autoText", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scoreText", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "betText", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "winText", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "turboTip", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "panelParentNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "otherNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "entryMiniAniNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "mainBtn", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "startRefresh", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "turntableBg", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "laserNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "laserCenterNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "laserMultiple", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "decorateNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bottomBg", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "effectBlack", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "turboEffect", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "btnStartEffect", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "dragonBallEffect", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "ballEffectBg", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "ballBoomEffect", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "effectParent", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "effectStart", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "tailPrefab", [_dec35], {
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

System.register("chunks:///_virtual/SlotDragonNoticeManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDragonUtils.ts', './AudioMgr.ts', './ModuleDef.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, RichText, UITransform, Node, Label, SpriteFrame, ParticleSystem, tween, Vec3, macro, Component, SlotDragonUtils, AudioMgr, ModuleDef, LanguageData;
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
      RichText = module.RichText;
      UITransform = module.UITransform;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      ParticleSystem = module.ParticleSystem;
      tween = module.tween;
      Vec3 = module.Vec3;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      SlotDragonUtils = module.SlotDragonUtils;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;
      cclegacy._RF.push({}, "3ede0Fy7SVJJJ5/WGXX+xcB", "SlotDragonNoticeManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NoticeMsg = ['slotDragon_tip1', 'slotDragon_tip2'];
      var SlotDragonNoticeManager = exports('SlotDragonNoticeManager', (_dec = ccclass('SlotDragonNoticeManager'), _dec2 = property(Sprite), _dec3 = property(RichText), _dec4 = property(UITransform), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property([SpriteFrame]), _dec9 = property([SpriteFrame]), _dec10 = property([Node]), _dec11 = property([Node]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonNoticeManager, _Component);
        function SlotDragonNoticeManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "noticeBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "msgLab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskTrans", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winSpr", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winScoreLab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winFrames", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextFrames", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigPrizeEffectList", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeEffectList", _descriptor10, _assertThisInitialized(_this));
          _this._noticeIndex = 1;
          _this._msgTween = null;
          _this._miniWinScore = 0;
          return _this;
        }
        var _proto = SlotDragonNoticeManager.prototype;
        _proto.onLoad = function onLoad() {
          if (SlotDragonNoticeManager._instance) {
            this.node.destroy();
            return;
          }
          SlotDragonNoticeManager._instance = this;
          this.showNotice();
        };
        _proto.onDestroy = function onDestroy() {
          SlotDragonNoticeManager._instance = null;
        }

        //==============结算分数===================
        ;

        _proto.balanceScore = function balanceScore(betScore, winScore, callback) {
          if (callback === void 0) {
            callback = null;
          }
          if (winScore === 0 || betScore === 0) {
            callback && callback();
            return;
          }
          this.scoreNode.active = true;
          this.msgLab.node.active = false;
          AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_hoodle_score_collect", 1, ModuleDef.SLOTS_LOONG);
          var mult = winScore / betScore;
          if (mult > 10) {
            if (mult <= 100) {
              this.bigPrizeEffectList[1].children.forEach(function (node) {
                node.getComponent(ParticleSystem).stop();
                node.getComponent(ParticleSystem).play();
              });
              this.prizeEffectList[1].children.forEach(function (node) {
                node.getComponent(ParticleSystem).stop();
                node.getComponent(ParticleSystem).play();
              });
              this.noticeBg.spriteFrame = this.winFrames[1];
            } else {
              this.bigPrizeEffectList[2].children.forEach(function (node) {
                node.getComponent(ParticleSystem).stop();
                node.getComponent(ParticleSystem).play();
              });
              this.prizeEffectList[2].children.forEach(function (node) {
                node.getComponent(ParticleSystem).stop();
                node.getComponent(ParticleSystem).play();
              });
              this.noticeBg.spriteFrame = this.winFrames[2];
            }
          } else {
            this.noticeBg.spriteFrame = this.winFrames[0];
            this.bigPrizeEffectList[0].children.forEach(function (node) {
              node.getComponent(ParticleSystem).stop();
              node.getComponent(ParticleSystem).play();
            });
            this.prizeEffectList[0].children.forEach(function (node) {
              node.getComponent(ParticleSystem).stop();
              node.getComponent(ParticleSystem).play();
            });
          }
          if (mult >= 5) SlotDragonUtils.instance.IncreaseNumber(this.winScoreLab, 0, winScore, {
            prefix: 'win ',
            timer: 1
          }).start();else this.winScoreLab.string = 'win ' + winScore;
          tween(this.node).to(.2, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).delay(.1).to(.2, {
            scale: Vec3.ONE
          }).call(function () {
            callback && callback();
          }).union().start();
        };
        _proto.resetNoticeBg = function resetNoticeBg() {
          this.noticeBg.spriteFrame = this.winFrames[0];
        };
        _proto.hideScoreNode = function hideScoreNode() {
          this._miniWinScore = 0;
          this.scoreNode.active = false;
          this.msgLab.node.active = true;
          this.resetNoticeBg();
        }

        //================轮播===================
        ;

        _proto.showNotice = function showNotice() {
          this.schedule(this.setNotice, 8, macro.REPEAT_FOREVER, .1);
        };
        _proto.setNotice = function setNotice() {
          var _this2 = this;
          this._msgTween && (this._msgTween.stop(), this._msgTween = null);
          this.msgLab.string = LanguageData.getLangByID(NoticeMsg[this._noticeIndex]);
          this.scheduleOnce(function () {
            var size = _this2.msgLab.getComponent(UITransform).contentSize;
            var maskWidth = _this2.maskTrans.contentSize.width;
            if (size.width > maskWidth) {
              _this2.msgLab.node.position = new Vec3((size.width - maskWidth) / 2);
              _this2.scheduleOnce(function () {
                tween(_this2.msgLab.node).removeSelf();
                _this2._msgTween = tween(_this2.msgLab.node).to(7, {
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
        _createClass(SlotDragonNoticeManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return SlotDragonNoticeManager;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noticeBg", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maskTrans", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winSpr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "winScoreLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "winFrames", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "winTextFrames", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bigPrizeEffectList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "prizeEffectList", [_dec11], {
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

System.register("chunks:///_virtual/SlotDragonPrizeManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDragonGameManager.ts', './SlotDragonGameElement.ts', './SlotDragonAnimation.ts', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Vec3, Node, Prefab, Label, Font, instantiate, macro, find, Color, Component, SlotDragonGameManager, SlotDragonGameElement, SlotDragonAnimation, AudioMgr, ModuleDef;
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
      Vec3 = module.Vec3;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      Font = module.Font;
      instantiate = module.instantiate;
      macro = module.macro;
      find = module.find;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      SlotDragonGameManager = module.SlotDragonGameManager;
    }, function (module) {
      SlotDragonGameElement = module.SlotDragonGameElement;
    }, function (module) {
      SlotDragonAnimation = module.SlotDragonAnimation;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;
      cclegacy._RF.push({}, "8ed95Iuv21O85qYrS1mFN+J", "SlotDragonPrizeManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var column = [4, 4, 4];
      var posInterval = [230, 230, 230];
      var lineScorePos = [new Vec3(0, 712), new Vec3(0, 477), new Vec3(0, 246), new Vec3(0, 26)];
      //最终奖品管理
      var SlotDragonPrizeManager = exports('SlotDragonPrizeManager', (_dec = ccclass('SlotDragonPrizeManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property([Font]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonPrizeManager, _Component);
        function SlotDragonPrizeManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maskNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "letfLightNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightLightNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endContent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeContent", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "elementItem", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineScoreNode", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineScoreText", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineFont", _descriptor10, _assertThisInitialized(_this));
          _this._lineIndex = 0;
          //线路中奖时轮播下标
          _this._lines = [];
          //所有中奖的线
          _this._scoreElements = [];
          return _this;
        }
        var _proto = SlotDragonPrizeManager.prototype;
        _proto.onLoad = function onLoad() {
          if (SlotDragonPrizeManager._instance) {
            this.node.destroy();
            return;
          }
          SlotDragonPrizeManager._instance = this;
          this.gameSetup();
        };
        _proto.onDestroy = function onDestroy() {
          SlotDragonPrizeManager._instance = null;
        };
        _proto.gameSetup = function gameSetup() {
          for (var i = 0; i < this.endContent.children.length; i++) {
            for (var j = 0; j < column[i]; j++) {
              var element = instantiate(this.elementItem);
              element.parent = this.endContent.children[i];
              element.position = new Vec3(0, -112 - posInterval[i] * j);
              element.name = j.toString();
            }
            for (var _j = 0; _j < column[i]; _j++) {
              var _element = instantiate(this.elementItem);
              _element.parent = this.prizeContent.children[i];
              _element.position = new Vec3(0, -112 + posInterval[i] + posInterval[i] * _j);
              _element.name = _j.toString();
              _element.active = false;
            }
          }
          this.endContent.active = false;
          this.prizeContent.active = false;
          this.showPrize(SlotDragonGameManager.instance.getFrameIds(), 0, 0);
        };
        _proto.showPrize = function showPrize(res, prizeType, betScore, mainRes, callback) {
          var _mainRes;
          if (mainRes === void 0) {
            mainRes = null;
          }
          if (callback === void 0) {
            callback = null;
          }
          this._lines = (_mainRes = mainRes) == null ? void 0 : _mainRes.lines;
          this.endContent.active = true;
          for (var i = 0; i < res.length; i++) {
            for (var j = 0; j < res[i].length; j++) {
              var element = this.endContent.children[i].children[j].getComponent(SlotDragonGameElement);
              element.initElement(res[i][j].name, res[i][j].text);
              element.node.active = true;
              element.setSpine('', true, betScore);
              var element2 = this.prizeContent.children[i].children[j].getComponent(SlotDragonGameElement);
              element2.initElement(res[i][j].name, res[i][j].text);
              element2.showSpine(res[i][j].name);
            }
          }
          if (prizeType === 1) {
            //线路中奖
            SlotDragonAnimation.instance.playAni(SlotDragonAnimation.instance.DragonAniName.celebrate, false);
            this.linePrize();
            callback && callback();
          } else if (prizeType === 2) ;else {
            callback && callback();
          }
        }

        //线路中奖
        ;

        _proto.linePrize = function linePrize() {
          this.prizeContent.active = true;
          this.closeAllLine();
          this._lineIndex = this._lines.length;
          this.maskNode.active = true;
          this._lines.sort(function (a, b) {
            return a.lineNo - b.lineNo;
          });
          this.schedule(this.carouselLine.bind(this), 1.5, macro.REPEAT_FOREVER, .1);
        }

        //轮播中奖线路
        ;

        _proto.carouselLine = function carouselLine() {
          this.resetPrizeElement();
          this.closeAllLine();
          if (this._lines.length === 1) this._lineIndex = 0;
          this.showEndContent();
          if (this._lineIndex === this._lines.length) {
            //显示所有线路
            if (!SlotDragonGameManager.instance.isDialog) AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_connect_multiple", 1, ModuleDef.SLOTS_LOONG);
            this.lineScoreNode.active = false;
            for (var i = 0; i < this._lines.length; i++) {
              var singleLine = this._lines[i];
              find(singleLine.lineNo.toString(), this.lineNode).active = true;
              var leftLab = find(singleLine.lineNo.toString(), this.letfLightNode).getComponent(Label);
              var rightLab = find(singleLine.lineNo.toString(), this.rightLightNode).getComponent(Label);
              leftLab.color = new Color().fromHEX("#FFEF39");
              rightLab.color = new Color().fromHEX("#FFEF39");
              leftLab.enableOutline = true;
              rightLab.enableOutline = true;
              leftLab.outlineColor = new Color().fromHEX("#743F03");
              rightLab.outlineColor = new Color().fromHEX("#743F03");
              leftLab.outlineWidth = 2;
              rightLab.outlineWidth = 2;
              for (var j = 0; j < singleLine.line.length; j++) {
                var element = this.prizeContent.children[j].children[singleLine.line[j]];
                var element2 = this.endContent.children[j].children[singleLine.line[j]];
                element2.active = false;
                element.active = true;
                element.position = new Vec3(0, -112 - posInterval[j] * singleLine.line[j]);
                element.getComponent(SlotDragonGameElement).prizeEffect();
                element.getComponent(SlotDragonGameElement).setSpine('1', false);
              }
            }
          } else {
            if (!SlotDragonGameManager.instance.isDialog) AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_connect_single", 1, ModuleDef.SLOTS_LOONG);
            var _singleLine = this._lines[this._lineIndex];
            find(_singleLine.lineNo.toString(), this.lineNode).active = true;
            var _leftLab = find(_singleLine.lineNo.toString(), this.letfLightNode).getComponent(Label);
            var _rightLab = find(_singleLine.lineNo.toString(), this.rightLightNode).getComponent(Label);
            _leftLab.color = new Color().fromHEX("#FFEF39");
            _rightLab.color = new Color().fromHEX("#FFEF39");
            _leftLab.enableOutline = true;
            _rightLab.enableOutline = true;
            _leftLab.outlineColor = new Color().fromHEX("#743F03");
            _rightLab.outlineColor = new Color().fromHEX("#743F03");
            _leftLab.outlineWidth = 2;
            _rightLab.outlineWidth = 2;
            this.lineScoreNode.active = true;
            this.lineScoreText.string = _singleLine.lineScore + '';
            this.lineScoreNode.position = lineScorePos[_singleLine.line[1]];
            for (var _j2 = 0; _j2 < _singleLine.line.length; _j2++) {
              var _element2 = this.prizeContent.children[_j2].children[_singleLine.line[_j2]];
              var _element3 = this.endContent.children[_j2].children[_singleLine.line[_j2]];
              _element3.active = false;
              _element2.active = true;
              _element2.position = new Vec3(0, -112 - posInterval[_j2] * _singleLine.line[_j2]);
              _element2.getComponent(SlotDragonGameElement).prizeEffect();
              _element2.getComponent(SlotDragonGameElement).setSpine('1', false);
            }
          }
          this._lineIndex++;
          if (this._lineIndex > this._lines.length) this._lineIndex = 0;
        };
        _proto.showElementSpine = function showElementSpine(info, index, j) {
          var element = this.endContent.children[index].children[j].getComponent(SlotDragonGameElement);
          element.node.active = true;
          element.node.position = new Vec3(0, -112 - posInterval[index] * j);
          element.initElement(info.name, info.text, '3');
        };
        _proto.showEndContent = function showEndContent(isActive) {
          if (isActive === void 0) {
            isActive = true;
          }
          for (var i = 0; i < this.endContent.children.length; i++) {
            for (var j = 0; j < column[i]; j++) {
              var element = this.endContent.children[i].children[j];
              element.getComponent(SlotDragonGameElement).setSpine('', false);
              element.active = isActive;
            }
          }
        }

        //重设中奖元素位置
        ;

        _proto.resetPrizeElement = function resetPrizeElement() {
          for (var i = 0; i < this.prizeContent.children.length; i++) {
            for (var j = 0; j < column[i]; j++) {
              var element = this.prizeContent.children[i].children[j];
              element.position = new Vec3(0, -112 + posInterval[i] + posInterval[i] * j);
              element.active = false;
            }
          }
        };
        _proto.closeAllLine = function closeAllLine() {
          for (var i = 0; i < this.lineNode.children.length; i++) {
            this.lineNode.children[i].active = false;
          }
          for (var _i = 0; _i < this.letfLightNode.children.length; _i++) {
            var leftLab = this.letfLightNode.children[_i].getComponent(Label);
            var rightLab = this.rightLightNode.children[_i].getComponent(Label);
            leftLab.color = new Color().fromHEX("#7B6F5F");
            rightLab.color = new Color().fromHEX("#7B6F5F");
            leftLab.enableOutline = false;
            rightLab.enableOutline = false;
          }
        };
        _proto.hideEndContet = function hideEndContet() {
          this.resetPrizeElement();
          this.closeAllLine();
          this.lineScoreNode.active = false;
          this.endContent.active = false;
          this.prizeContent.active = false;
          this.maskNode.active = false;
          this.unscheduleAllCallbacks();
        };
        _createClass(SlotDragonPrizeManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return SlotDragonPrizeManager;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "letfLightNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rightLightNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lineNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "endContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prizeContent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "elementItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lineScoreNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lineScoreText", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lineFont", [_dec11], {
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

System.register("chunks:///_virtual/SlotDragonSceneManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDragonGameManager.ts', './SlotDragonUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, UITransform, Component, SlotDragonGameManager, SlotDragonUtils;
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
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      SlotDragonGameManager = module.SlotDragonGameManager;
    }, function (module) {
      SlotDragonUtils = module.SlotDragonUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "db255q5JplA84oxID2ik+Xs", "SlotDragonSceneManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotDragonSceneManager = exports('SlotDragonSceneManager', (_dec = ccclass('SlotDragonSceneManager'), _dec2 = property({
        type: UITransform,
        tooltip: "游戏的主节点"
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonSceneManager, _Component);
        function SlotDragonSceneManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gameMainTran", _descriptor, _assertThisInitialized(_this));
          _this.betScore = [];
          _this.elementOdd = [];
          //不除100
          _this.lineCount = 0;
          _this.fakeMiniRate = 0;
          //假装要进小游戏的概率，万分比，/10000
          _this.pointScores = [];
          _this.wheel = [];
          _this.wheelData = [];
          _this.miniWheelData = [];
          _this.isOpenVideo = true;
          _this.isFirstEnty = true;
          _this.multi = [];
          _this._isFirst = true;
          return _this;
        }
        var _proto = SlotDragonSceneManager.prototype;
        _proto.onLoad = function onLoad() {
          if (SlotDragonSceneManager._instance) {
            this.node.destroy();
            return;
          }
          SlotDragonSceneManager._instance = this;
          this.gameSetup();
        };
        _proto.onDestroy = function onDestroy() {
          SlotDragonSceneManager._instance = null;
          SlotDragonUtils.instance = null;
        };
        _proto.gameSetup = function gameSetup() {
          //适配
          // const v = view.getVisibleSize();
          // const scaleV = v.width / this.gameMainTran.height;
          // this.gameMainTran.node.scale = new Vec3(scaleV, scaleV, 1);

          // this.events.put(SlotDragonGameData.MessgeDefine.Response.GameScene + store.room.id, this.initGameScene.bind(this));
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
            wheel: [{
              lineWheel: [101, 102, 103, 104, 105, 106, 105, 104, 103, 102, 101]
            }, {
              lineWheel: [101, 102, 103, 104, 105, 106, 105, 104, 103, 102, 101]
            }, {
              lineWheel: [101, 102, 103, 104, 105, 106, 105, 104, 103, 102, 101]
            }],
            multi: [2, 5, 10, 20, 30, 50, 100]
          });
        };
        _proto.initGameScene = function initGameScene(res) {
          console.log('---龙--', res);
          this.betScore = res.betScore;
          this.elementOdd = res.elementOdd;
          this.lineCount = res.lineCount;
          this.fakeMiniRate = res.fakeMiniRate ? res.fakeMiniRate : 0;
          this.pointScores = res.pointScores;
          this.wheel = res.wheel;
          this.multi = res.multi;
          this.multi.sort(function (a, b) {
            return a - b;
          });
          this.setWheelData();
          if (this._isFirst) {
            this._isFirst = false;
            SlotDragonGameManager.instance.initUI();
          }
        };
        _proto.reconnect = function reconnect() {
          SlotDragonGameManager.instance.reconnect();
        };
        _proto.setWheelData = function setWheelData() {
          for (var i = 0; i < this.wheel.length; i++) {
            this.wheelData[i] = this.wheel[i].lineWheel;
          }
        };
        _createClass(SlotDragonSceneManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return SlotDragonSceneManager;
      }(Component), _class3._instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameMainTran", [_dec2], {
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

System.register("chunks:///_virtual/SlotDragonUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Vec3, ParticleSystem, easing, tween, randomRangeInt, Component, Num;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      ParticleSystem = module.ParticleSystem;
      easing = module.easing;
      tween = module.tween;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "7ba04JDLxpAUJ3DpyzFzKSc", "SlotDragonUtils", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ElementTable = {
        "loong": 201,
        "key": 101,
        "reel": 102,
        "heart": 103,
        "pot": 104,
        "cup": 105,
        "crown": 106
      };
      var LineCount = {
        1: [0, 1, 1],
        2: [1, 1, 0],
        3: [0, 0, 0],
        4: [1, 2, 2],
        5: [2, 2, 1],
        6: [1, 1, 1],
        7: [2, 2, 2],
        8: [3, 3, 3],
        9: [2, 2, 2],
        10: [2, 3, 2]
      };
      var SlotDragonUtils = exports('SlotDragonUtils', (_dec = ccclass('SlotDragonUtils'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDragonUtils, _Component);
        function SlotDragonUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.numberTween = null;
          return _this;
        }
        var _proto = SlotDragonUtils.prototype;
        /**
                 * 返回的数据转换
                 * @param data 
                 * @param bet 下注额
                 */
        _proto.conver = /*#__PURE__*/
        function () {
          var _conver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, bet) {
            var result, res, i, j, _i, _i2, payline, lineNo, lineScore, _res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  result = {
                    betScore: 0,
                    code: 200,
                    main: {
                      colums: [],
                      hitType: 0,
                      isAllSame: 0,
                      lines: [],
                      winScore: 0,
                      multi: []
                    },
                    mini: {
                      winScore: 0,
                      multi: 0,
                      route: "",
                      routeId: 0,
                      routeLength: 0,
                      finished: 1
                    },
                    winScore: 0,
                    free: {
                      winScore: 0,
                      multi: 0
                    }
                  };
                  if (!data.isSucc) {
                    _context.next = 30;
                    break;
                  }
                  result.code = 200;
                  result.betScore = bet;
                  result.winScore = Num.toThousandsBack(data.res.payout);
                  res = data.res.results[0]; //连线游戏数据
                  for (i = 0; i < 3; i++) {
                    //初始化连线游戏的数据
                    result.main.colums.push({
                      elementId: []
                    });
                    for (j = 0; j < 4; j++) {
                      result.main.colums[i].elementId.push(0);
                    }
                  }
                  //所有的元素符号
                  _i = res.symbols.length - 1;
                case 8:
                  if (!(_i >= 0)) {
                    _context.next = 15;
                    break;
                  }
                  if (!(res.symbols[_i].id === 'null')) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("continue", 12);
                case 11:
                  //空位置，跳过
                  result.main.colums[res.symbols[_i].coordinate.reel - 1].elementId[4 - res.symbols[_i].coordinate.row] = ElementTable[res.symbols[_i].id];
                case 12:
                  _i--;
                  _context.next = 8;
                  break;
                case 15:
                  if (res.paylines.length > 0) {
                    result.main.hitType = 1; //线路中奖
                    //所有的中奖线
                    for (_i2 = 0; _i2 < res.paylines.length; _i2++) {
                      payline = res.paylines[_i2];
                      lineNo = parseInt(payline.id); //线号
                      lineScore = Num.toThousandsBack(payline.payout); //线得分
                      result.main.lines.push({
                        lineNo: lineNo,
                        lineScore: lineScore,
                        line: LineCount[lineNo]
                      });
                    }
                  }
                  if (res.bigEvents) {
                    _context.next = 21;
                    break;
                  }
                  result.mini = null;
                  result.free = null;
                  _context.next = 28;
                  break;
                case 21:
                  //幸运游戏数据
                  result.free = null;
                  _res = data.res.results[0];
                  result.mini.winScore = Num.toThousandsBack(_res.payout);
                  result.mini.multi = _res.pinball ? _res.pinball.multiple : 0;
                  // result.mini.route = res.pinball ? res.pinball.data : "";
                  _context.next = 27;
                  return this.unzipData(_res.pinball ? _res.pinball.zipData ? _res.pinball.zipData : null : null);
                case 27:
                  result.mini.route = _context.sent;
                case 28:
                  _context.next = 31;
                  break;
                case 30:
                  result.code = 500;
                case 31:
                  return _context.abrupt("return", result);
                case 32:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function conver(_x, _x2) {
            return _conver.apply(this, arguments);
          }
          return conver;
        }();
        _proto.unzipData = /*#__PURE__*/function () {
          var _unzipData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(zipData) {
            var zip, loadedZip, _i3, _Object$entries, _Object$entries$_i, file, content, contentStr;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  //@ts-ignore
                  zip = new window.JSZip();
                  _context2.next = 4;
                  return zip.loadAsync(zipData);
                case 4:
                  loadedZip = _context2.sent;
                  _i3 = 0, _Object$entries = Object.entries(loadedZip.files);
                case 6:
                  if (!(_i3 < _Object$entries.length)) {
                    _context2.next = 17;
                    break;
                  }
                  _Object$entries$_i = _Object$entries[_i3], _Object$entries$_i[0], file = _Object$entries$_i[1];
                  if (file.dir) {
                    _context2.next = 14;
                    break;
                  }
                  _context2.next = 11;
                  return file.async('uint8array');
                case 11:
                  content = _context2.sent;
                  contentStr = new TextDecoder().decode(content);
                  return _context2.abrupt("return", contentStr);
                case 14:
                  _i3++;
                  _context2.next = 6;
                  break;
                case 17:
                  _context2.next = 22;
                  break;
                case 19:
                  _context2.prev = 19;
                  _context2.t0 = _context2["catch"](0);
                  console.error('解压 ZIP 文件时出错:', _context2.t0);
                case 22:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 19]]);
          }));
          function unzipData(_x3) {
            return _unzipData.apply(this, arguments);
          }
          return unzipData;
        }()
        /**
         * 递归查找子节点下指定类型的组件，并将其添加到结果数组中
         * @param root 要查找的节点
         * @param componentType 组件类型
         * @param results 结果数组，默认为空数组
         * @returns 
         */;

        _proto.findNodesByComponent = function findNodesByComponent(root, componentType, results) {
          var _this2 = this;
          if (results === void 0) {
            results = [];
          }
          // 检查当前节点是否包含指定类型的组件
          // 如果包含，则将该节点添加到结果数组中
          if (root.getComponent(componentType)) results.push(root);
          // 递归遍历当前节点的所有子节点
          // 对每个子节点调用该方法，继续查找包含指定类型组件的节点
          root.children.forEach(function (child) {
            return _this2.findNodesByComponent(child, componentType, results);
          });
          // 返回包含所有找到节点的结果数组
          return results;
        }

        /**
         * 递归旋转、缩放子节点下粒子组件的节点
         * @param root 要查找的节点
         * @param componentType 组件类型
         */;
        _proto.setNodesByComponent = function setNodesByComponent(root, angle, scale) {
          var _this3 = this;
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
            return _this3.setNodesByComponent(child, angle, scale);
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
              //startNum + start + (end - start) * ratio
              // textCom.string = prefix + (Math.floor(current * Math.pow(10, place)) / Math.pow(10, place));
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
          textCom.string = prefix + startNum;
          this.numberTween = tween(obj).to(timer, {
            number: length
          }, {
            progress: function progress(start, end, current, ratio) {
              //startNum + start + (end - start) * ratio
              // textCom.string = prefix + (Math.floor(current * Math.pow(10, place)) / Math.pow(10, place));
              textCom.string = prefix + (startNum * Math.pow(10, place) - Math.ceil(start + (end - start) * ratio)) / Math.pow(10, place);
              return (startNum * Math.pow(10, place) - start + (end - start) * ratio) / Math.pow(10, place);
            },
            easing: easing.quintOut
          }).call(function () {
            textCom.string = prefix + endNum;
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
          // if (max - min + 1 === arr.length) return -1;
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
         * @desc 三阶贝塞尔-世界坐标
         * @param {any} target 运动目标
         * @param {number} duration tween时长
         * @param {Vec3} p1 起点坐标
         * @param {Vec3} cp 控制点
         * @param {Vec3} p2 终点坐标
         * @param {object} opts 
         * @returns {any} 返回一个tween动画，启用需要start()
         */;
        _proto.bezierTo = function bezierTo(target, duration, delay, p1, cp, p2, opts) {
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
        }

        /**
         * @desc 三阶贝塞尔-本地坐标
         * @param {any} target 运动目标
         * @param {number} duration tween时长
         * @param {Vec3} p1 起点坐标
         * @param {Vec3} cp 控制点
         * @param {Vec3} p2 终点坐标
         * @param {object} opts 
         * @returns {any} 返回一个tween动画，启用需要start()
         */;
        _proto.bezierPostionTo = function bezierPostionTo(target, duration, delay, p1, cp, p2, opts) {
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
            target.position = twoBezier(ratio, p1, cp, p2);
          };
          return tween(target).delay(delay).to(duration, {}, opts);
        };
        _createClass(SlotDragonUtils, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new SlotDragonUtils();
            }
            return this._instance;
          },
          set: function set(v) {
            this._instance = v;
          }
        }]);
        return SlotDragonUtils;
      }(Component), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotLoongGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './RoomMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "4e5fcf/sCVA3qGFIkLbyPzK", "SlotLoongGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotLoongGameMgr = exports('SlotLoongGameMgr', (_dec = ccclass('SlotLoongGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotLoongGameMgr, _GameMgr);
        function SlotLoongGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._porcessFun = void 0;
          _this._gameType = SubGameDef.SLOTS_LOONG;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_loong',
            bundle: ModuleDef.SLOTS_LOONG
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotLoongGameMgr.prototype;
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
        _createClass(SlotLoongGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotLoongGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotLoongGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotLoongGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIDGMiniGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDragonResult.ts', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Button, Widget, Vec3, tween, easing, Label, Color, ParticleSystem, randomRangeInt, Component, UIDragonResult, AudioMgr, ModuleDef;
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
      Widget = module.Widget;
      Vec3 = module.Vec3;
      tween = module.tween;
      easing = module.easing;
      Label = module.Label;
      Color = module.Color;
      ParticleSystem = module.ParticleSystem;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      UIDragonResult = module.UIDragonResult;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "51270pP3KxGAaud1XFsk7YA", "UIDGMiniGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var floorIndex = {
        150: 0,
        10: 1,
        5: 2,
        3: 3,
        20: 4,
        50: 5
      };
      var collectAudio = ['001', '002', '003'];
      var UIDGMiniGame = exports('UIDGMiniGame', (_dec = ccclass('UIDGMiniGame'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([Node]), _dec5 = property([Node]), _dec6 = property(Button), _dec7 = property([Node]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIDGMiniGame, _Component);
        function UIDGMiniGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ball", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "springNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nailList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fanList", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnFire", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "floorList", _descriptor6, _assertThisInitialized(_this));
          _this._data = null;
          _this._isEnd = false;
          _this._isFirst = true;
          _this._lastColloctAudio1 = {
            value: ""
          };
          _this._lastColloctAudio2 = {
            value: ""
          };
          _this._lastColloctAudio3 = {
            value: ""
          };
          _this._lastColloctAudio4 = {
            value: ""
          };
          _this._isPlayAudio1 = false;
          _this._isPlayAudio2 = false;
          _this._isPlayAudio3 = false;
          _this._isPlayAudio4 = false;
          _this._jsonAsset = null;
          _this._startRun = false;
          _this._index = 0;
          return _this;
        }
        var _proto = UIDGMiniGame.prototype;
        _proto.onLoad = function onLoad() {
          if (UIDGMiniGame._instance) {
            this.node.destroy();
            return;
          }
          UIDGMiniGame._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          this.node.active = false;
        };
        _proto.onDestroy = function onDestroy() {
          UIDGMiniGame._instance = null;
        };
        _proto.initMiniGame = function initMiniGame(data) {
          var _this2 = this;
          AudioMgr.inst.play("audio/AC_sound_8004_music_interface_002", 1, ModuleDef.SLOTS_LOONG);
          this.node.active = true;
          this._isEnd = false;
          this._data = data;
          this._jsonAsset = JSON.parse(data.route);
          this.btnFire.interactable = true;
          this.btnFire.node.active = false;
          this._isPlayAudio1 = false;
          this._isPlayAudio2 = false;
          this._isPlayAudio3 = false;
          this._isPlayAudio4 = false;
          this.scheduleOnce(function () {
            _this2.onBtnRun();
          }, 1);
        };
        _proto.onBtnRun = function onBtnRun() {
          this.startRun();
          this.btnFire.interactable = false;
        };
        _proto.startRun = function startRun() {
          var _this3 = this;
          tween(this.springNode).to(0.1, {
            scale: new Vec3(1, 0.6, 1)
          }).delay(0.1).to(1, {
            scale: Vec3.ONE
          }, {
            easing: easing.elasticOut
          }).start();
          tween(this.ball).to(0.1, {
            position: new Vec3(395, -387)
          }).delay(0.1).to(0.05, {
            position: new Vec3(395, -328)
          }).call(function () {
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_hoodle_catapult", 1, ModuleDef.SLOTS_LOONG);
            _this3.run();
          }).start();
        };
        _proto.run = function run() {
          // console.log("开始运行", this.jsonAsset.json.data);
          this._index = 0;
          this._startRun = true;
        };
        _proto.update = function update(deltaTime) {
          var _this4 = this;
          if (!this._startRun) return;
          //模拟每帧弹珠的位置，旋转
          this.ball.position = this._jsonAsset.data[this._index].p;
          this.ball.rotation = this._jsonAsset.data[this._index].r;
          for (var i = 0; i < this.fanList.length; i++) {
            this.fanList[i].rotation = this._jsonAsset.fanList[this._index];
          }
          switch (this._jsonAsset.data[this._index].c) {
            case 2:
              if (!this._isPlayAudio4) {
                this.getAudioName(this._lastColloctAudio4, "AC_sound_8004_dragon_hoodle_crash_springback_004_").then(function (audioName) {
                  _this4._isPlayAudio4 = true;
                  _this4.scheduleOnce(function () {
                    _this4._isPlayAudio4 = false;
                  }, 0.2);
                })["catch"](function (err) {});
              }
              for (var _i = 0; _i < this.nailList.length; _i++) {
                var nail = this.nailList[_i].position.clone();
                var pos = this.ball.position.clone();
                var isCir = this.isPointInCircle(pos, nail, 90);
                if (isCir) {
                  tween(this.nailList[_i]).to(.1, {
                    scale: new Vec3(1.2, 1.2, 1.2)
                  }).delay(.1).to(.5, {
                    scale: Vec3.ONE
                  }, {
                    easing: easing.elasticOut
                  }).start();
                  break;
                }
              }
              break;
            case 2 << 3:
              if (!this._isEnd) {
                AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_hoodle_score_light", 1, ModuleDef.SLOTS_LOONG);
                this._isEnd = true;
                var floorNode = this.floorList[floorIndex[this._data.multi]];
                floorNode.active = true;
                floorNode.parent.getComponent(Label).color = Color.YELLOW;
                floorNode.children.forEach(function (item) {
                  var pati = item.getComponent(ParticleSystem);
                  pati.stop();
                  pati.play();
                });
              }
              break;
            case 2 << 5:
              if (!this._isPlayAudio1) {
                this.getAudioName(this._lastColloctAudio1, "AC_sound_8004_dragon_hoodle_crash_001_").then(function (audioName) {
                  _this4._isPlayAudio1 = true;
                  _this4.scheduleOnce(function () {
                    _this4._isPlayAudio1 = false;
                  }, .2);
                })["catch"](function (err) {});
              }
              break;
            case 2 << 6:
              if (!this._isPlayAudio2) {
                this.getAudioName(this._lastColloctAudio2, "AC_sound_8004_dragon_hoodle_crash_002_").then(function (audioName) {
                  _this4._isPlayAudio2 = true;
                  _this4.scheduleOnce(function () {
                    _this4._isPlayAudio2 = false;
                  }, 0.2);
                })["catch"](function (err) {});
              }
              break;
            case 2 << 7:
              if (!this._isPlayAudio3) {
                this.getAudioName(this._lastColloctAudio3, "AC_sound_8004_dragon_hoodle_crash_fan blade_003_").then(function (audioName) {
                  _this4._isPlayAudio3 = true;
                  _this4.scheduleOnce(function () {
                    _this4._isPlayAudio3 = false;
                  }, 0.2);
                })["catch"](function (err) {});
              }
              break;
          }
          this._index++;
          if (this._index === this._jsonAsset.data.length) {
            this._startRun = false;
            console.log("结束");
            this.scheduleOnce(function () {
              UIDragonResult.instance.showMiniResult(_this4._data.winScore);
            }, 1);
          }
        }

        /**
         * 获取跟上次播放不同的音效
         * @param lastAudio 
         * @param prefix 
         * @returns 
         */;
        _proto.getAudioName = function getAudioName(lastAudio, prefix) {
          return new Promise(function (resolve, reject) {
            var index = randomRangeInt(0, collectAudio.length);
            var addIndex = 0;
            while (lastAudio.value === collectAudio[index]) {
              index = randomRangeInt(0, collectAudio.length);
              addIndex++;
              //防止半死循环
              if (addIndex >= 5) {
                lastAudio.value = collectAudio[index];
                AudioMgr.inst.playOneShot("audio/" + prefix + collectAudio[index], 1, ModuleDef.SLOTS_LOONG);
                return reject(collectAudio[index]);
              }
            }
            lastAudio.value = collectAudio[index];
            var audioName = prefix + collectAudio[index];
            AudioMgr.inst.playOneShot("audio/" + audioName, 1, ModuleDef.SLOTS_LOONG);
            return resolve(audioName);
          });
        }

        /**
         * 判断点是否在圆内
         * @param targetPoint 目标位置
         * @param centerPoint 中心位置
         * @param ridus 半径
         * @returns 
         */;
        _proto.isPointInCircle = function isPointInCircle(targetPoint, centerPoint, radius) {
          var C = new Vec3();
          Vec3.subtract(C, targetPoint, centerPoint);
          var distance = C.length();
          if (distance > radius) return false;
          return true;
        };
        _proto.hide = function hide() {
          for (var i = 0; i < this.floorList.length; i++) {
            this.floorList[i].active = false;
            this.floorList[i].parent.getComponent(Label).color = Color.WHITE;
          }
          this._startRun = false;
          this.ball.position = new Vec3(395, -328);
          this.node.active = false;
          if (this._isFirst) {
            this._isFirst = false;
            return;
          }
        };
        _createClass(UIDGMiniGame, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UIDGMiniGame;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "springNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nailList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fanList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnFire", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "floorList", [_dec7], {
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

System.register("chunks:///_virtual/UIDGMiniGameTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDGMiniGame.ts', './SlotDragonGameManager.ts', './SlotDragonAnimation.ts', './ModuleDef.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, SpriteFrame, Widget, Vec3, Component, UIDGMiniGame, SlotDragonGameManager, SlotDragonAnimation, ModuleDef, AudioMgr;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Widget = module.Widget;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      UIDGMiniGame = module.UIDGMiniGame;
    }, function (module) {
      SlotDragonGameManager = module.SlotDragonGameManager;
    }, function (module) {
      SlotDragonAnimation = module.SlotDragonAnimation;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3;
      cclegacy._RF.push({}, "5802aCs9jxNDYAH9HixI7pN", "UIDGMiniGameTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDGMiniGameTip = exports('UIDGMiniGameTip', (_dec = ccclass('UIDGMiniGameTip'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property([SpriteFrame]), _dec6 = property(Sprite), _dec7 = property([SpriteFrame]), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIDGMiniGameTip, _Component);
        function UIDGMiniGameTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnFreeSure", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMiniSure", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipSpr", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipFrames", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgSpr", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgFrames", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniDragon", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeDragon", _descriptor8, _assertThisInitialized(_this));
          _this._data = null;
          _this._callback = null;
          return _this;
        }
        var _proto = UIDGMiniGameTip.prototype;
        _proto.onLoad = function onLoad() {
          if (UIDGMiniGameTip._instance) {
            this.node.destroy();
            return;
          }
          UIDGMiniGameTip._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          this.node.active = false;
        };
        _proto.onDestroy = function onDestroy() {
          UIDGMiniGameTip._instance = null;
        };
        _proto.showFreeTip = function showFreeTip(callback) {
          var _this2 = this;
          SlotDragonGameManager.instance.stopAllAudio();
          AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_hoodle_window_appear", 1, ModuleDef.SLOTS_LOONG);
          SlotDragonGameManager.instance.isDialog = true;
          this._callback = callback;
          this.tipSpr.spriteFrame = this.tipFrames[1];
          this.bgSpr.spriteFrame = this.bgFrames[1];
          this.btnFreeSure.active = true;
          this.btnMiniSure.active = false;
          this.miniDragon.active = false;
          this.freeDragon.active = true;
          this.node.active = true;
          if (SlotDragonGameManager.instance.isAuto) {
            this.scheduleOnce(function () {
              _this2.onBtnSureFree();
            }, 2);
          }
        };
        _proto.show = function show(data) {
          var _this3 = this;
          SlotDragonGameManager.instance.stopAllAudio();
          SlotDragonGameManager.instance.isDialog = true;
          AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_hoodle_window_appear", 1, ModuleDef.SLOTS_LOONG);
          this.tipSpr.spriteFrame = this.tipFrames[0];
          this.bgSpr.spriteFrame = this.bgFrames[0];
          this._data = data;
          this.btnFreeSure.active = false;
          this.btnMiniSure.active = true;
          this.miniDragon.active = true;
          this.freeDragon.active = false;
          this.node.active = true;
          if (SlotDragonGameManager.instance.isAuto) {
            this.scheduleOnce(function () {
              _this3.onBtnSure();
            }, 2);
          }
        };
        _proto.onBtnSureFree = function onBtnSureFree() {
          this._callback && this._callback();
          this.unscheduleAllCallbacks();
          SlotDragonGameManager.instance.isDialog = false;
          this.node.active = false;
        };
        _proto.onBtnSure = function onBtnSure() {
          UIDGMiniGame.instance.initMiniGame(this._data);
          SlotDragonAnimation.instance.isShow(false);
          this.unscheduleAllCallbacks();
          SlotDragonGameManager.instance.isDialog = false;
          this.node.active = false;
        };
        _createClass(UIDGMiniGameTip, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UIDGMiniGameTip;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnFreeSure", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnMiniSure", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipFrames", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgSpr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgFrames", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "miniDragon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "freeDragon", [_dec9], {
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

System.register("chunks:///_virtual/UIDragonResult.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDragonResultItem.ts', './UIDGMiniGame.ts', './SlotDragonGameManager.ts', './SlotDragonAnimation.ts', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Widget, Vec3, Component, UIDragonResultItem, UIDGMiniGame, SlotDragonGameManager, SlotDragonAnimation, AudioMgr, ModuleDef;
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
      Widget = module.Widget;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      UIDragonResultItem = module.UIDragonResultItem;
    }, function (module) {
      UIDGMiniGame = module.UIDGMiniGame;
    }, function (module) {
      SlotDragonGameManager = module.SlotDragonGameManager;
    }, function (module) {
      SlotDragonAnimation = module.SlotDragonAnimation;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "ff3e0lnaPBOII79WL2zjIcl", "UIDragonResult", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDragonResult = exports('UIDragonResult', (_dec = ccclass('UIDragonResult'), _dec2 = property(UIDragonResultItem), _dec3 = property(UIDragonResultItem), _dec4 = property(UIDragonResultItem), _dec5 = property(UIDragonResultItem), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIDragonResult, _Component);
        function UIDragonResult() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bitWin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mageWin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "superWin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalWin", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnFreeClose", _descriptor6, _assertThisInitialized(_this));
          _this._winScore = 0;
          _this._level = 20;
          _this._betScore = 0;
          _this._isFirst = true;
          _this.isNext = false;
          _this.isBest = false;
          _this._callback = null;
          _this._mult = 0;
          return _this;
        }
        var _proto = UIDragonResult.prototype;
        _proto.onLoad = function onLoad() {
          if (UIDragonResult._instance) {
            this.node.destroy();
            return;
          }
          UIDragonResult._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          this.node.active = false;
        };
        _proto.onDestroy = function onDestroy() {
          UIDragonResult._instance = null;
        };
        _proto.showResult = function showResult(winScore, betScore, callback) {
          this._mult = winScore / betScore;
          this._callback = callback;
          this._level = 20;
          this.isNext = false;
          this.isBest = false;
          this._winScore = winScore ? winScore : 0;
          this._betScore = betScore;
          if (!this._mult || this._mult < 10) return this._callback && (this._callback(), this._callback = null);
          SlotDragonGameManager.instance.stopAllAudio();
          SlotDragonGameManager.instance.isDialog = true;
          AudioMgr.inst.play("audio/AC_sound_8004_music_interface_003", 1, ModuleDef.SLOTS_LOONG);
          this.node.on(Node.EventType.TOUCH_END, this.onBtnNext, this);
          this.node.active = true;
          if (this._mult >= 10) {
            this.bitWin.show(betScore, winScore, 0);
          }
        }

        /**
         * 展示小游戏的结算页
         * @param winScore 
         */;
        _proto.showMiniResult = function showMiniResult(winScore) {
          SlotDragonGameManager.instance.stopAllAudio();
          SlotDragonGameManager.instance.isDialog = true;
          AudioMgr.inst.play("audio/AC_sound_8004_music_interface_003", 1, ModuleDef.SLOTS_LOONG);
          this.node.active = true;
          if (!SlotDragonGameManager.instance.isAuto) this.node.on(Node.EventType.TOUCH_END, this.onBtnResult, this);
          this._winScore = winScore;
          this.totalWin.showMini(winScore);
        }

        /**
         * 展示免费游戏的结算页
         * @param winScore 
         * @param callback 
         */;
        _proto.showFreeResult = function showFreeResult(winScore, callback) {
          SlotDragonGameManager.instance.stopAllAudio();
          SlotDragonGameManager.instance.isDialog = true;
          AudioMgr.inst.play("audio/AC_sound_8004_music_interface_003", 1, ModuleDef.SLOTS_LOONG);
          this.node.active = true;
          this._callback = callback;
          if (!SlotDragonGameManager.instance.isAuto) this.node.on(Node.EventType.TOUCH_END, this.onBtnFreeResult, this);
          this._winScore = winScore;
          this.totalWin.showFree(winScore);
        };
        _proto.showNext = function showNext(level, betScore, winScore) {
          this.isNext = false;
          if (level === 20) {
            this._level = 100;
            this.bitWin.hide();
            this.mageWin.show2(betScore, winScore, 20 * betScore);
          } else if (level === 100) {
            this._level = -1;
            this.mageWin.hide();
            this.superWin.show2(betScore, winScore, 100 * betScore);
          }
        };
        _proto.onBtnResult = function onBtnResult() {
          this.offListener();
          this.totalWin.setWinMiniScore();
          this.btnClose.active = true;
          this.btnFreeClose.active = false;
        };
        _proto.onBtnFreeResult = function onBtnFreeResult() {
          this.offListener();
          this.totalWin.setWinMiniScore();
          this.btnClose.active = false;
          this.btnFreeClose.active = true;
        };
        _proto.onBtnNext = function onBtnNext() {
          var _this2 = this;
          if (this.isBest) {
            this.onBtnClose();
            return;
          }
          this.bitWin.unAllCallbacks();
          this.mageWin.unAllCallbacks();
          this.superWin.unAllCallbacks();
          this.bitWin.hide();
          this.mageWin.hide();
          this.superWin.hide();
          if (this._mult >= 10 && this._mult <= 20) {
            this.bitWin.setWinScore(this._winScore);
          } else if (this._mult > 20 && this._mult <= 100) {
            this.mageWin.setWinScore(this._winScore);
          } else {
            this.superWin.setWinScore(this._winScore);
          }
          this.isBest = true;
          this.scheduleOnce(function () {
            _this2.onBtnClose();
          }, 2);
        };
        _proto.toNext = function toNext() {
          this.showNext(this._level, this._betScore, this._winScore);
        };
        _proto.onDisable = function onDisable() {
          this.hide();
        };
        _proto.hide = function hide() {
          this.node.off(Node.EventType.TOUCH_END, this.onBtnNext, this);
          this.offListener();
          this.unscheduleAllCallbacks();
          this.onBtnClose();
          this.isNext = false;
          this.isBest = false;
          this.bitWin.hide();
          this.mageWin.hide();
          this.superWin.hide();
          this.totalWin.hide();
          this.btnClose.active = false;
          this.btnFreeClose.active = false;
          this._callback && (this._callback(), this._callback = null);
          SlotDragonGameManager.instance.isDialog = false;
          if (this._isFirst) {
            this._isFirst = false;
            return;
          }
          AudioMgr.inst.play("audio/AC_sound_8004_music_interface_001", 1, ModuleDef.SLOTS_LOONG);
        };
        _proto.offListener = function offListener() {
          this.node.off(Node.EventType.TOUCH_END, this.onBtnResult, this);
          this.node.off(Node.EventType.TOUCH_END, this.onBtnFreeResult, this);
        };
        _proto.onBtnClose = function onBtnClose() {
          this.node.active = false;
        };
        _proto.onBtnBack = function onBtnBack() {
          SlotDragonAnimation.instance.isShow();
          UIDGMiniGame.instance.hide();
          SlotDragonGameManager.instance.gameOver();
          this.node.active = false;
        };
        _createClass(UIDragonResult, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UIDragonResult;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalWin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnFreeClose", [_dec7], {
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

System.register("chunks:///_virtual/UIDragonResultItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDragonResult.ts', './SlotDragonUtils.ts', './SlotDragonGameManager.ts', './AudioMgr.ts', './ModuleDef.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, UIOpacity, Vec3, Component, UIDragonResult, SlotDragonUtils, SlotDragonGameManager, AudioMgr, ModuleDef, Num;
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
      Node = module.Node;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      UIDragonResult = module.UIDragonResult;
    }, function (module) {
      SlotDragonUtils = module.SlotDragonUtils;
    }, function (module) {
      SlotDragonGameManager = module.SlotDragonGameManager;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "141c3TZ3yRDwbCi7VebJVay", "UIDragonResultItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDragonResultItem = exports('UIDragonResultItem', (_dec = ccclass('UIDragonResultItem'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIDragonResultItem, _Component);
        function UIDragonResultItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "winLab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelLevel", _descriptor3, _assertThisInitialized(_this));
          //-1最大的页面等级
          _this._tw = null;
          _this._betScore = 0;
          _this._winScore = 0;
          _this._collectId = -1;
          return _this;
        }
        var _proto = UIDragonResultItem.prototype;
        //collect 音效id
        _proto.showMini = function showMini(winScore) {
          var _this2 = this;
          this._winScore = winScore;
          this.node.active = true;
          this.winLab.string = "0.00";
          tween(this.node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).call(function () {
            var cb = function cb() {
              _this2.stopCollectAudio();
              if (SlotDragonGameManager.instance.isAuto) {
                _this2.scheduleOnce(function () {
                  UIDragonResult.instance.onBtnBack();
                }, 1);
              } else {
                UIDragonResult.instance.btnClose.active = true;
                UIDragonResult.instance.offListener();
              }
            };
            _this2._tw = SlotDragonUtils.instance.IncreaseNumber(_this2.winLab, 0, winScore, {
              timer: 2,
              callback: cb
            });
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_bigwin_003", 1, ModuleDef.SLOTS_LOONG);
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_number_collect", 1, ModuleDef.SLOTS_LOONG).then(function (id) {
              return _this2._collectId = id;
            });
            _this2._tw.start();
          }).start();
          tween(this.node).to(0.3, {
            scale: Vec3.ONE
          }).start();
        };
        _proto.showFree = function showFree(winScore) {
          var _this3 = this;
          this._winScore = winScore;
          this.node.active = true;
          this.winLab.string = "0.00";
          tween(this.node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).call(function () {
            var cb = function cb() {
              _this3.stopCollectAudio();
              if (SlotDragonGameManager.instance.isAuto) {
                _this3.scheduleOnce(function () {
                  UIDragonResult.instance.onBtnClose();
                }, 1);
              } else {
                UIDragonResult.instance.btnFreeClose.active = true;
                UIDragonResult.instance.offListener();
              }
            };
            _this3._tw = SlotDragonUtils.instance.IncreaseNumber(_this3.winLab, 0, winScore, {
              timer: 2,
              callback: cb
            });
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_bigwin_003", 1, ModuleDef.SLOTS_LOONG);
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_number_collect", 1, ModuleDef.SLOTS_LOONG).then(function (id) {
              return _this3._collectId = id;
            });
            _this3._tw.start();
          }).start();
          tween(this.node).to(0.3, {
            scale: Vec3.ONE
          }).start();
        };
        _proto.show = function show(betScore, winScore, startBet) {
          var _this4 = this;
          this._betScore = betScore;
          this._winScore = winScore;
          this.node.active = true;
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
            _this4.stopCollectAudio();
            if (winScore > maxBet) {
              UIDragonResult.instance.showNext(_this4.panelLevel, betScore, winScore);
            } else {
              UIDragonResult.instance.isBest = true;
              _this4.scheduleOnce(function () {
                UIDragonResult.instance.onBtnClose();
              }, 2);
            }
            UIDragonResult.instance.isNext = true;
          };
          this.node.getComponent(UIOpacity).opacity = 0;
          this.node.scale = new Vec3(1, 0, 1);
          tween(this.node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).call(function () {
            _this4._tw = SlotDragonUtils.instance.IncreaseNumber(_this4.winLab, startBet, maxBet, {
              timer: 2.6,
              callback: cb.bind(_this4)
            });
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_bigwin_001", 1, ModuleDef.SLOTS_LOONG);
            _this4._tw.start();
          }).start();
          tween(this.node).to(0.3, {
            scale: Vec3.ONE
          }).start();
        };
        _proto.show2 = function show2(betScore, winScore, startBet) {
          var _this5 = this;
          this._betScore = betScore;
          this._winScore = winScore;
          this.node.active = true;
          var maxBet = 0;
          if (this.panelLevel === 20) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === 100) {
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_bigwin_002", 1, ModuleDef.SLOTS_LOONG);
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === -1) {
            AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_bigwin_003", 1, ModuleDef.SLOTS_LOONG);
            maxBet = winScore;
          }
          this.winLab.string = startBet + '';
          if (this.panelLevel === 20) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === 100) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else {
            maxBet = winScore;
          }
          var cb = function cb() {
            _this5.stopCollectAudio();
            if (winScore > maxBet) {
              UIDragonResult.instance.showNext(_this5.panelLevel, betScore, winScore);
            } else {
              UIDragonResult.instance.isBest = true;
              _this5.scheduleOnce(function () {
                UIDragonResult.instance.onBtnClose();
              }, 2);
            }
            UIDragonResult.instance.isNext = true;
          };
          this.effectNode.getComponent(UIOpacity).opacity = 0;
          this.effectNode.scale = new Vec3(1, 0, 1);
          tween(this.effectNode.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).start();
          tween(this.effectNode).to(0.3, {
            scale: Vec3.ONE
          }).start();
          AudioMgr.inst.playOneShot("audio/AC_sound_8004_dragon_number_collect", 1, ModuleDef.SLOTS_LOONG).then(function (id) {
            return _this5._collectId = id;
          });
          this._tw = SlotDragonUtils.instance.IncreaseNumber(this.winLab, startBet, maxBet, {
            timer: 2.1,
            callback: cb.bind(this)
          });
          this._tw.start();
        };
        _proto.setWinScore = function setWinScore(winScore) {
          this.node.active = true;
          this.winLab.string = winScore + '';
        };
        _proto.setWinMiniScore = function setWinMiniScore() {
          this._tw && (this._tw.stop(), this._tw = null, this.stopCollectAudio());
          this.winLab.string = this._winScore + '';
        };
        _proto.unAllCallbacks = function unAllCallbacks() {
          this.unscheduleAllCallbacks();
          var maxBet = this._betScore * this.panelLevel;
          maxBet = this._winScore >= maxBet ? maxBet : this._winScore;
          if (this.panelLevel === -1) maxBet = this._winScore;
          this.winLab.string = maxBet + '';
          if (this._winScore <= maxBet) {
            this.scheduleOnce(function () {
              UIDragonResult.instance.onBtnClose();
            }, 2);
          }
          this._tw && (this._tw.stop(), this._tw = null, this.stopCollectAudio());
        };
        _proto.hide = function hide() {
          this.unscheduleAllCallbacks();
          this._tw && (this._tw.stop(), this._tw = null, this.stopCollectAudio());
          this.node.active = false;
        };
        _proto.stopCollectAudio = function stopCollectAudio() {
          if (this._collectId !== -1) {
            AudioMgr.inst.stopOneShot(this._collectId, "AC_sound_8004_dragon_number_collect", ModuleDef.SLOTS_LOONG);
            this._collectId = -1;
          }
        };
        return UIDragonResultItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "panelLevel", [property], {
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

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_loong', 'chunks:///_virtual/module_slots_loong'); 
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