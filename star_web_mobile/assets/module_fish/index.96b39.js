System.register("chunks:///_virtual/BackgroundItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameData.ts', './LoaderManager.ts', './GameResPath.ts', './UIManager.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Component, gameData, loaderMgr, GameResPath, uiMgr, LanguageData;
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
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      loaderMgr = module.loaderMgr;
    }, function (module) {
      GameResPath = module.GameResPath;
    }, function (module) {
      uiMgr = module.uiMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "64fe9aBIgZH8pp6qvfOimKR", "BackgroundItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TAG = 'BackgroundItem';
      var BackgroundItem = exports('BackgroundItem', (_dec = ccclass('BackgroundItem'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackgroundItem, _Component);
        function BackgroundItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgNodeSp", _descriptor, _assertThisInitialized(_this));
          _this._curLevel = -1;
          _this._curScoreNum = -1;
          return _this;
        }
        var _proto = BackgroundItem.prototype;
        _proto.start = function start() {
          this._initEvent();
          this._initUIData();
        };
        _proto._initEvent = function _initEvent() {};
        _proto._initUIData = function _initUIData() {
          if (!gameData || !gameData.curPlayerData) {
            return;
          }
        };
        _proto._onUpdateBackgroundTheme = function _onUpdateBackgroundTheme() {
          var _this2 = this;
          if (!this.bgNodeSp || !gameData || !gameData.curPlayerData) {
            return;
          }
          if (this._curLevel >= gameData.curPlayerData.level) {
            return;
          }
          // console.log(TAG, `<_onUpdateBackgroundTheme> level :${this._curLevel} , playerLevel:${gameData.curPlayerData.level} , themeConfigsObjArr: ${JSON.stringify(gameData.themeConfigsObjArr)}`);
          this._curLevel = gameData.curPlayerData.level;
          //等级提升提示
          if (this._curLevel > 1) {
            var levelUpTips = LanguageData.getLangByID("GLK_LevelUp", this._curLevel);
            uiMgr.showToastView(levelUpTips, 1500);
          }
          this._curScoreNum = gameData.curPlayerData.score_num;
          var curScore = gameData.curPlayerData.score_num;
          var level = gameData.curPlayerData.level;
          var findThemeObj = null;
          for (var i = 0; i < gameData.themeConfigsObjArr.length; i++) {
            var themeObj = gameData.themeConfigsObjArr[i];
            if (!themeObj) {
              continue;
            }
            var min_score = themeObj.min_score;
            var max_score = themeObj.max_score;
            if (curScore >= min_score && curScore <= max_score) {
              findThemeObj = themeObj;
              //定时刷新等级机制
              gameData.curPlayerData.level = themeObj.level;
              break;
            }
          }
          if (findThemeObj) {
            var bg_name = findThemeObj.bg_name;
            loaderMgr.loadGameRes(GameResPath.getThemeSpFramePath(bg_name), SpriteFrame).then(function (spriteFrame) {
              if (_this2.bgNodeSp) {
                _this2.bgNodeSp.spriteFrame = spriteFrame;
              }
            })["catch"](function (err) {
              console.error(TAG, "<_onUpdateBackgroundTheme> err : " + err);
            });
          }
        };
        _proto.update = function update(deltaTime) {
          this._onUpdateBackgroundTheme();
        };
        return BackgroundItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNodeSp", [_dec2], {
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

System.register("chunks:///_virtual/BulletItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst2.ts', './BulletNodePool.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Size, view, Vec3, Tween, Component, GameWeaponLevelType, BulletNodePool;
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
      Size = module.Size;
      view = module.view;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      GameWeaponLevelType = module.GameWeaponLevelType;
    }, function (module) {
      BulletNodePool = module.BulletNodePool;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f1f2c00xTZO+JlZEHYR+aRV", "BulletItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BulletItem = exports('BulletItem', (_dec = ccclass('BulletItem'), _dec2 = property([Node]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BulletItem, _Component);
        function BulletItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bulletNodeArr", _descriptor, _assertThisInitialized(_this));
          _this._curWeaponLevelType = 1;
          _this._visibleSize = new Size(960, 640);
          _this._shotMoveSpeed = 500;
          _this._curAngle = 0;
          _this._bulletID = 0;
          return _this;
        }
        var _proto = BulletItem.prototype;
        //子弹ID
        _proto.start = function start() {};
        _proto.initBulletWithData = function initBulletWithData(weaponLevelType, bulletID) {
          this._curWeaponLevelType = weaponLevelType;
          this._visibleSize = view.getVisibleSize();
          this._updateBulletItemByLevelType(this._curWeaponLevelType);
          this._curAngle = -this.node.angle;
          this._bulletID = bulletID;
        };
        /**
         * @Description: 根据武器等级类型切换子弹的类型
         * @Date: 2024-06-13 08:10:55
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} weaponLevelType
         * @return {*}
         */
        _proto._updateBulletItemByLevelType = function _updateBulletItemByLevelType(weaponLevelType) {
          this.node.active = true;
          if (this.bulletNodeArr.length <= 0) {
            this._curWeaponLevelType = Number(GameWeaponLevelType.GWL_LevelType01);
          }
          if (weaponLevelType > 7) {
            this._curWeaponLevelType = Number(GameWeaponLevelType.GWL_LevelType07);
          } else if (weaponLevelType < 1) {
            this._curWeaponLevelType = Number(GameWeaponLevelType.GWL_LevelType01);
          }
          for (var i = 0; i < this.bulletNodeArr.length; i++) {
            var node = this.bulletNodeArr[i];
            if (!node) {
              continue;
            }
            var index = i + 1;
            if (this._curWeaponLevelType == index) {
              node.active = true;
            } else {
              node.active = false;
            }
          }
        }

        /**
         * @Description: 更新子弹位置
         * @Date: 2024-06-13 08:12:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._updateBulletPos = function _updateBulletPos(dt) {
          if (!this.node) {
            return;
          }
          var posX = this.node.position.x;
          var posY = this.node.position.y;
          posX += dt * this._shotMoveSpeed * Math.sin(-this.node.angle * Math.PI / 180);
          posY += dt * this._shotMoveSpeed * Math.cos(-this.node.angle * Math.PI / 180);
          this.node.setPosition(new Vec3(posX, posY));
          if (posX > this._visibleSize.width / 2 + 100 || posX < -this._visibleSize.width / 2 - 100 || posY > this._visibleSize.height / 2 + 100 || posY < -this._visibleSize.height / 2 - 100) {
            Tween.stopAllByTarget(this.node);
            this.node.active = false;
            this.node.removeFromParent();
            this.node.parent = null;
            // this.node.destroy();
            BulletNodePool.put(this.node);
          }
        };
        _proto.update = function update(deltaTime) {
          this._updateBulletPos(deltaTime);
        };
        _createClass(BulletItem, [{
          key: "bulletID",
          get: function get() {
            return this._bulletID;
          }
        }, {
          key: "curWeaponLevelType",
          get: function get() {
            return this._curWeaponLevelType;
          }
        }]);
        return BulletItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletNodeArr", [_dec2], {
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

System.register("chunks:///_virtual/BulletNodePool.ts", ['cc'], function (exports) {
  var cclegacy, NodePool, instantiate, Tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3b51b/o/ORBGKccIiaPKMwO", "BulletNodePool", undefined);
      var BulletNodePool = exports('BulletNodePool', /*#__PURE__*/function () {
        function BulletNodePool() {}
        /**
         * @Description: 首次初始化一定数量的节点备用
         * @Date: 2024-06-13 22:53:58
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Prefab} prefab
         * @return {*}
         */
        BulletNodePool.preInitPool = function preInitPool(prefab) {
          if (prefab === void 0) {
            prefab = null;
          }
          if (!prefab) {
            return;
          }
          for (var i = 0; i < 10; i++) {
            var node = null;
            if (prefab) {
              node = instantiate(prefab);
            }
            this.put(node);
          }
        }

        /**
         * @Description: 从节点池取出node
         * @Date: 2024-06-13 22:53:44
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} prefabNode
         * @return {*}
         */;
        BulletNodePool.get = function get(prefabNode) {
          var node = null;
          if (this._nodePool.size() > 0) {
            node = this._nodePool.get();
          } else {
            node = instantiate(prefabNode);
          }
          node.active = true;
          return node;
        }

        /**
         * @Description: 移除对象重新放入到节点池等待使用
         * @Date: 2024-06-13 22:53:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} node
         * @return {*}
         */;
        BulletNodePool.put = function put(node) {
          if (!node) {
            return;
          }
          Tween.stopAllByTarget(node);
          node.active = false;
          this._nodePool.put(node);
        }

        /**
         * @Description: 清空对象池
         * @Date: 2024-06-13 22:53:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        BulletNodePool.clearNodePool = function clearNodePool() {
          this._nodePool.clear();
        };
        return BulletNodePool;
      }());
      BulletNodePool._nodePool = new NodePool();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CannonItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvents.ts', './GameConst2.ts', './GameData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, Animation, Component, GameEvents, GameCannonChangeCmd, GameWeaponLevelType, gameData;
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
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      GameEvents = module.GameEvents;
    }, function (module) {
      GameCannonChangeCmd = module.GameCannonChangeCmd;
      GameWeaponLevelType = module.GameWeaponLevelType;
    }, function (module) {
      gameData = module.gameData;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f38d691gzRJzp2n9FOzAuc7", "CannonItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CannonItem = exports('CannonItem', (_dec = ccclass('CannonItem'), _dec2 = property([Node]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CannonItem, _Component);
        function CannonItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cannonItemNodeArr", _descriptor, _assertThisInitialized(_this));
          _this._curWeaponLevelType = 1;
          _this._curCannonNode = null;
          _this._curCannonAniComp = null;
          _this._aniFinishAniCallback = null;
          return _this;
        }
        var _proto = CannonItem.prototype;
        _proto.start = function start() {
          this._initEvent();
        };
        _proto._initEvent = function _initEvent() {
          director.on(GameEvents.UI_ChangeCannonType, this._onChangeCannonTypeCallback, this);
        };
        _proto.initUIWithData = function initUIWithData(weaponLevelType) {
          this._updateCannonItem(weaponLevelType);
        };
        _proto.playFireCannonAni = function playFireCannonAni(callback) {
          if (callback) {
            this._aniFinishAniCallback = callback;
          }
          if (this._curCannonNode && this._curCannonAniComp) {
            this._curCannonAniComp.stop();
            this._curCannonAniComp.play();
          }
        };
        _proto._onChangeCannonTypeCallback = function _onChangeCannonTypeCallback(data) {
          if (!data) {
            return;
          }
          var cmd = data.cmd;
          if (cmd == GameCannonChangeCmd.GCC_Add.toString()) {
            this._curWeaponLevelType++;
          } else if (cmd == GameCannonChangeCmd.GCC_Sub.toString()) {
            this._curWeaponLevelType--;
          }
          this._updateCannonItem(this._curWeaponLevelType);
        };
        _proto._updateCannonItem = function _updateCannonItem(weaponLevelType) {
          this._curWeaponLevelType = weaponLevelType;
          if (this.cannonItemNodeArr.length <= 0) {
            this._curWeaponLevelType = Number(GameWeaponLevelType.GWL_LevelType01);
          }
          if (weaponLevelType > 7) {
            this._curWeaponLevelType = Number(GameWeaponLevelType.GWL_LevelType07);
          } else if (weaponLevelType < 1) {
            this._curWeaponLevelType = Number(GameWeaponLevelType.GWL_LevelType01);
          }
          gameData.curWeaponLevelType = this._curWeaponLevelType;
          gameData.curCannonNeedGoldsNum = gameData.getCannonUseGoldsNum(this._curWeaponLevelType);
          this._curCannonNode = null;
          this._curCannonAniComp = null;
          for (var i = 0; i < this.cannonItemNodeArr.length; i++) {
            var node = this.cannonItemNodeArr[i];
            if (!node) {
              continue;
            }
            var index = i + 1;
            if (this._curWeaponLevelType == index) {
              node.active = true;
              this._curCannonNode = node;
              this._curCannonAniComp = this._curCannonNode.getComponent(Animation);
              if (!this._curCannonAniComp) {
                continue;
              }
              this._curCannonAniComp.on(Animation.EventType.FINISHED, this._onAnimationCallback, this);
            } else {
              node.active = false;
            }
          }
        };
        _proto._onAnimationCallback = function _onAnimationCallback(type, state) {
          if (this._aniFinishAniCallback) {
            this._aniFinishAniCallback(this._curWeaponLevelType);
          }
        };
        _proto.onDestroy = function onDestroy() {
          director.off(GameEvents.UI_ChangeCannonType, this._onChangeCannonTypeCallback, this);
        };
        _proto.update = function update(deltaTime) {};
        return CannonItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cannonItemNodeArr", [_dec2], {
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

System.register("chunks:///_virtual/CoinScoreItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameData.ts', './GameUtils.ts', './UIManager.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteAtlas, Sprite, Component, gameData, GameUtils, uiMgr, LanguageData;
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
      Component = module.Component;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      uiMgr = module.uiMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "6938eOzDHtN47OmHq0uJwnj", "CoinScoreItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CoinScoreItem = exports('CoinScoreItem', (_dec = ccclass('CoinScoreItem'), _dec2 = property(SpriteAtlas), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CoinScoreItem, _Component);
        function CoinScoreItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "numSpriteAtlas", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numSpr01", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numSpr02", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numSpr03", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numSpr04", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numSpr05", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numSpr06", _descriptor7, _assertThisInitialized(_this));
          _this._curHaveCoinNum = 200;
          return _this;
        }
        var _proto = CoinScoreItem.prototype;
        _proto.start = function start() {
          this._initUIData();
        };
        _proto._initUIData = function _initUIData() {
          this._curHaveCoinNum = gameData.curPlayerData.gold_num;
          this._updateCoinScoreNum(this._curHaveCoinNum);
        };
        _proto._updateCoinScoreNum = function _updateCoinScoreNum(value) {
          if (!this.numSpriteAtlas || !this.numSpr01 || !this.numSpr02 || !this.numSpr03 || !this.numSpr04 || !this.numSpr05 || !this.numSpr06) {
            return;
          }
          var numStr = GameUtils.prefixInteger(value, 6);
          var numArr = numStr.split('');
          // console.log(TAG, `<_updateCoinScoreNum> gold_num: ${value} ,numStr:${numStr}  ,numArr: ${numArr}`);
          this.numSpr01.spriteFrame = this.numSpriteAtlas.getSpriteFrame("" + numArr[0]);
          this.numSpr02.spriteFrame = this.numSpriteAtlas.getSpriteFrame("" + numArr[1]);
          this.numSpr03.spriteFrame = this.numSpriteAtlas.getSpriteFrame("" + numArr[2]);
          this.numSpr04.spriteFrame = this.numSpriteAtlas.getSpriteFrame("" + numArr[3]);
          this.numSpr05.spriteFrame = this.numSpriteAtlas.getSpriteFrame("" + numArr[4]);
          this.numSpr06.spriteFrame = this.numSpriteAtlas.getSpriteFrame("" + numArr[5]);
          gameData.curPlayerData.gold_num = value;
          gameData.updateLocalCacheUserInfo();
        }

        /**
         * @Description: 新增金币银币数量
         * @Date: 2024-06-14 11:36:06
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} value
         * @return {*}
         */;
        _proto.addCoinsNum = function addCoinsNum(value) {
          this._curHaveCoinNum += value;
          this._updateCoinScoreNum(this._curHaveCoinNum);
        }

        /**
         * @Description: 减金币数量<没使用大炮一次所需消耗>
         * @Date: 2024-06-14 11:39:27
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} needCoinNum
         * @return {*}
         */;
        _proto.subtractCoinsNum = function subtractCoinsNum(needCoinNum) {
          if (this._curHaveCoinNum < needCoinNum) {
            uiMgr.showToastView(LanguageData.getLangByID("GLK_CoinGoldNotEnough"));
            return;
          }
          this._curHaveCoinNum -= needCoinNum;
          this._updateCoinScoreNum(this._curHaveCoinNum);
        }

        /**
         * @Description: 直接获取playerData金币数刷新
         * @Date: 2024-06-14 11:40:42
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.refreshCoinsNum = function refreshCoinsNum() {
          this._curHaveCoinNum = gameData.curPlayerData.gold_num;
          this._updateCoinScoreNum(this._curHaveCoinNum);
        };
        _proto.update = function update(deltaTime) {};
        return CoinScoreItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numSpriteAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numSpr01", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numSpr02", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numSpr03", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numSpr04", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "numSpr05", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "numSpr06", [_dec8], {
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

System.register("chunks:///_virtual/CommonPopView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, NodeEventType, tween, Vec3, Component, GameUtils;
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
      NodeEventType = module.NodeEventType;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      GameUtils = module.GameUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "07fa1I7I1hLd7ccLmlfYqYQ", "CommonPopView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CommonPopView = exports('CommonPopView', (_dec = ccclass('CommonPopView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CommonPopView, _Component);
        function CommonPopView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "titleLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeBtnNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "commonBtnNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "commonBtnLabel", _descriptor6, _assertThisInitialized(_this));
          _this._closeCallback = null;
          _this._commonCallback = null;
          _this._titleStr = "";
          _this._contentStr = "";
          _this._btnDesStr = "";
          return _this;
        }
        var _proto = CommonPopView.prototype;
        _proto.start = function start() {
          this._initUIData();
        };
        _proto._initUIData = function _initUIData() {
          if (this.maskNode) {
            this.maskNode.active = false;
            this.maskNode.on(NodeEventType.TOUCH_END, this.onClickCloseBtnEvent, this);
          }
          if (this.titleLabel) {
            this.titleLabel.node.active = false;
          }
        };
        _proto.initWithData = function initWithData(contentStr, titleStr, btnDesStr, closeCallback, commonCallback) {
          var _this2 = this;
          if (!GameUtils.isCheckStringEmpty(contentStr)) {
            this._contentStr = contentStr;
            if (this.contentLabel) {
              this.contentLabel.string = contentStr;
            }
          }
          if (!GameUtils.isCheckStringEmpty(titleStr)) {
            this._titleStr = titleStr;
            if (this.titleLabel) {
              this.titleLabel.string = titleStr;
              this.titleLabel.node.active = true;
            }
          }
          if (!GameUtils.isCheckStringEmpty(btnDesStr)) {
            this._btnDesStr = btnDesStr;
            if (this.commonBtnLabel) {
              this.commonBtnLabel.string = btnDesStr;
            }
          }
          if (closeCallback) {
            this._closeCallback = closeCallback;
          }
          if (commonCallback) {
            this._commonCallback = commonCallback;
          }
          if (this.commonBtnNode) {
            this.commonBtnNode.active = commonCallback ? true : false;
          }
          tween(this.node).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: "bounceOut"
          }).call(function () {
            if (_this2.maskNode) {
              _this2.maskNode.active = true;
            }
          }).start();
        }

        /**
         * @Description: 通用按钮点击逻辑
         * @Date: 2024-06-09 22:14:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.onClickCommonBtnEvent = function onClickCommonBtnEvent() {
          if (this._commonCallback) {
            this._commonCallback();
          }
          this._closeSelf();
        }

        /**
         * @Description: 关闭界面逻辑
         * @Date: 2024-06-09 22:14:22
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.onClickCloseBtnEvent = function onClickCloseBtnEvent() {
          if (this._closeCallback) {
            this._closeCallback();
          }
          this._closeSelf();
        }

        /**
         * @Description: 自定义关闭函数
         * @Date: 2024-06-09 22:06:46
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._closeSelf = function _closeSelf() {
          var _this3 = this;
          if (this.maskNode) {
            this.maskNode.active = false;
          }
          tween(this.node).to(0.1, {
            scale: new Vec3(0.1, 0.1, 0.1)
          }).call(function () {
            _this3.node.active = false;
            _this3.node.removeFromParent();
            _this3.node.destroy();
          }).start();
        };
        _proto.onDestroy = function onDestroy() {
          this.node.destroy();
        };
        _proto.update = function update(deltaTime) {};
        return CommonPopView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "closeBtnNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "commonBtnNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "commonBtnLabel", [_dec7], {
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

System.register("chunks:///_virtual/crypto-js.min.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);
      var _cjsExports;
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        !function (t, r) {
          "object" == typeof exports$1 ? module.exports = exports$1 = r() : "function" == typeof define && define.amd ? define([], r) : t.CryptoJS = r();
        }(this, function () {
          var t = t || function (t, r) {
            var e = Object.create || function () {
                function t() {}
                return function (r) {
                  var e;
                  return t.prototype = r, e = new t(), t.prototype = null, e;
                };
              }(),
              i = {},
              n = i.lib = {},
              o = n.Base = function () {
                return {
                  extend: function extend(t) {
                    var r = e(this);
                    return t && r.mixIn(t), r.hasOwnProperty("init") && this.init !== r.init || (r.init = function () {
                      r.$super.init.apply(this, arguments);
                    }), r.init.prototype = r, r.$super = this, r;
                  },
                  create: function create() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t;
                  },
                  init: function init() {},
                  mixIn: function mixIn(t) {
                    for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString);
                  },
                  clone: function clone() {
                    return this.init.prototype.extend(this);
                  }
                };
              }(),
              s = n.WordArray = o.extend({
                init: function init(t, e) {
                  t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 4 * t.length;
                },
                toString: function toString(t) {
                  return (t || c).stringify(this);
                },
                concat: function concat(t) {
                  var r = this.words,
                    e = t.words,
                    i = this.sigBytes,
                    n = t.sigBytes;
                  if (this.clamp(), i % 4) for (var o = 0; o < n; o++) {
                    var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    r[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8;
                  } else for (var o = 0; o < n; o += 4) r[i + o >>> 2] = e[o >>> 2];
                  return this.sigBytes += n, this;
                },
                clamp: function clamp() {
                  var r = this.words,
                    e = this.sigBytes;
                  r[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, r.length = t.ceil(e / 4);
                },
                clone: function clone() {
                  var t = o.clone.call(this);
                  return t.words = this.words.slice(0), t;
                },
                random: function random(r) {
                  for (var e, i = [], n = function n(r) {
                      var r = r,
                        e = 987654321,
                        i = 4294967295;
                      return function () {
                        e = 36969 * (65535 & e) + (e >> 16) & i, r = 18e3 * (65535 & r) + (r >> 16) & i;
                        var n = (e << 16) + r & i;
                        return n /= 4294967296, n += .5, n * (t.random() > .5 ? 1 : -1);
                      };
                    }, o = 0; o < r; o += 4) {
                    var a = n(4294967296 * (e || t.random()));
                    e = 987654071 * a(), i.push(4294967296 * a() | 0);
                  }
                  return new s.init(i, r);
                }
              }),
              a = i.enc = {},
              c = a.Hex = {
                stringify: function stringify(t) {
                  for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) {
                    var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
                  }
                  return i.join("");
                },
                parse: function parse(t) {
                  for (var r = t.length, e = [], i = 0; i < r; i += 2) e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                  return new s.init(e, r / 2);
                }
              },
              h = a.Latin1 = {
                stringify: function stringify(t) {
                  for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) {
                    var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push(String.fromCharCode(o));
                  }
                  return i.join("");
                },
                parse: function parse(t) {
                  for (var r = t.length, e = [], i = 0; i < r; i++) e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                  return new s.init(e, r);
                }
              },
              l = a.Utf8 = {
                stringify: function stringify(t) {
                  try {
                    return decodeURIComponent(escape(h.stringify(t)));
                  } catch (t) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function parse(t) {
                  return h.parse(unescape(encodeURIComponent(t)));
                }
              },
              f = n.BufferedBlockAlgorithm = o.extend({
                reset: function reset() {
                  this._data = new s.init(), this._nDataBytes = 0;
                },
                _append: function _append(t) {
                  "string" == typeof t && (t = l.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
                },
                _process: function _process(r) {
                  var e = this._data,
                    i = e.words,
                    n = e.sigBytes,
                    o = this.blockSize,
                    a = 4 * o,
                    c = n / a;
                  c = r ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0);
                  var h = c * o,
                    l = t.min(4 * h, n);
                  if (h) {
                    for (var f = 0; f < h; f += o) this._doProcessBlock(i, f);
                    var u = i.splice(0, h);
                    e.sigBytes -= l;
                  }
                  return new s.init(u, l);
                },
                clone: function clone() {
                  var t = o.clone.call(this);
                  return t._data = this._data.clone(), t;
                },
                _minBufferSize: 0
              }),
              u = (n.Hasher = f.extend({
                cfg: o.extend(),
                init: function init(t) {
                  this.cfg = this.cfg.extend(t), this.reset();
                },
                reset: function reset() {
                  f.reset.call(this), this._doReset();
                },
                update: function update(t) {
                  return this._append(t), this._process(), this;
                },
                finalize: function finalize(t) {
                  t && this._append(t);
                  var r = this._doFinalize();
                  return r;
                },
                blockSize: 16,
                _createHelper: function _createHelper(t) {
                  return function (r, e) {
                    return new t.init(e).finalize(r);
                  };
                },
                _createHmacHelper: function _createHmacHelper(t) {
                  return function (r, e) {
                    return new u.HMAC.init(t, e).finalize(r);
                  };
                }
              }), i.algo = {});
            return i;
          }(Math);
          return function () {
            function r(t, r, e) {
              for (var i = [], o = 0, s = 0; s < r; s++) if (s % 4) {
                var a = e[t.charCodeAt(s - 1)] << s % 4 * 2,
                  c = e[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                i[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++;
              }
              return n.create(i, o);
            }
            var e = t,
              i = e.lib,
              n = i.WordArray,
              o = e.enc;
            o.Base64 = {
              stringify: function stringify(t) {
                var r = t.words,
                  e = t.sigBytes,
                  i = this._map;
                t.clamp();
                for (var n = [], o = 0; o < e; o += 3) for (var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = r[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, c = r[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, h = s << 16 | a << 8 | c, l = 0; l < 4 && o + .75 * l < e; l++) n.push(i.charAt(h >>> 6 * (3 - l) & 63));
                var f = i.charAt(64);
                if (f) for (; n.length % 4;) n.push(f);
                return n.join("");
              },
              parse: function parse(t) {
                var e = t.length,
                  i = this._map,
                  n = this._reverseMap;
                if (!n) {
                  n = this._reverseMap = [];
                  for (var o = 0; o < i.length; o++) n[i.charCodeAt(o)] = o;
                }
                var s = i.charAt(64);
                if (s) {
                  var a = t.indexOf(s);
                  a !== -1 && (e = a);
                }
                return r(t, e, n);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
          }(), function (r) {
            function e(t, r, e, i, n, o, s) {
              var a = t + (r & e | ~r & i) + n + s;
              return (a << o | a >>> 32 - o) + r;
            }
            function i(t, r, e, i, n, o, s) {
              var a = t + (r & i | e & ~i) + n + s;
              return (a << o | a >>> 32 - o) + r;
            }
            function n(t, r, e, i, n, o, s) {
              var a = t + (r ^ e ^ i) + n + s;
              return (a << o | a >>> 32 - o) + r;
            }
            function o(t, r, e, i, n, o, s) {
              var a = t + (e ^ (r | ~i)) + n + s;
              return (a << o | a >>> 32 - o) + r;
            }
            var s = t,
              a = s.lib,
              c = a.WordArray,
              h = a.Hasher,
              l = s.algo,
              f = [];
            !function () {
              for (var t = 0; t < 64; t++) f[t] = 4294967296 * r.abs(r.sin(t + 1)) | 0;
            }();
            var u = l.MD5 = h.extend({
              _doReset: function _doReset() {
                this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function _doProcessBlock(t, r) {
                for (var s = 0; s < 16; s++) {
                  var a = r + s,
                    c = t[a];
                  t[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                }
                var h = this._hash.words,
                  l = t[r + 0],
                  u = t[r + 1],
                  d = t[r + 2],
                  v = t[r + 3],
                  p = t[r + 4],
                  _ = t[r + 5],
                  y = t[r + 6],
                  g = t[r + 7],
                  B = t[r + 8],
                  w = t[r + 9],
                  k = t[r + 10],
                  S = t[r + 11],
                  m = t[r + 12],
                  x = t[r + 13],
                  b = t[r + 14],
                  H = t[r + 15],
                  z = h[0],
                  A = h[1],
                  C = h[2],
                  D = h[3];
                z = e(z, A, C, D, l, 7, f[0]), D = e(D, z, A, C, u, 12, f[1]), C = e(C, D, z, A, d, 17, f[2]), A = e(A, C, D, z, v, 22, f[3]), z = e(z, A, C, D, p, 7, f[4]), D = e(D, z, A, C, _, 12, f[5]), C = e(C, D, z, A, y, 17, f[6]), A = e(A, C, D, z, g, 22, f[7]), z = e(z, A, C, D, B, 7, f[8]), D = e(D, z, A, C, w, 12, f[9]), C = e(C, D, z, A, k, 17, f[10]), A = e(A, C, D, z, S, 22, f[11]), z = e(z, A, C, D, m, 7, f[12]), D = e(D, z, A, C, x, 12, f[13]), C = e(C, D, z, A, b, 17, f[14]), A = e(A, C, D, z, H, 22, f[15]), z = i(z, A, C, D, u, 5, f[16]), D = i(D, z, A, C, y, 9, f[17]), C = i(C, D, z, A, S, 14, f[18]), A = i(A, C, D, z, l, 20, f[19]), z = i(z, A, C, D, _, 5, f[20]), D = i(D, z, A, C, k, 9, f[21]), C = i(C, D, z, A, H, 14, f[22]), A = i(A, C, D, z, p, 20, f[23]), z = i(z, A, C, D, w, 5, f[24]), D = i(D, z, A, C, b, 9, f[25]), C = i(C, D, z, A, v, 14, f[26]), A = i(A, C, D, z, B, 20, f[27]), z = i(z, A, C, D, x, 5, f[28]), D = i(D, z, A, C, d, 9, f[29]), C = i(C, D, z, A, g, 14, f[30]), A = i(A, C, D, z, m, 20, f[31]), z = n(z, A, C, D, _, 4, f[32]), D = n(D, z, A, C, B, 11, f[33]), C = n(C, D, z, A, S, 16, f[34]), A = n(A, C, D, z, b, 23, f[35]), z = n(z, A, C, D, u, 4, f[36]), D = n(D, z, A, C, p, 11, f[37]), C = n(C, D, z, A, g, 16, f[38]), A = n(A, C, D, z, k, 23, f[39]), z = n(z, A, C, D, x, 4, f[40]), D = n(D, z, A, C, l, 11, f[41]), C = n(C, D, z, A, v, 16, f[42]), A = n(A, C, D, z, y, 23, f[43]), z = n(z, A, C, D, w, 4, f[44]), D = n(D, z, A, C, m, 11, f[45]), C = n(C, D, z, A, H, 16, f[46]), A = n(A, C, D, z, d, 23, f[47]), z = o(z, A, C, D, l, 6, f[48]), D = o(D, z, A, C, g, 10, f[49]), C = o(C, D, z, A, b, 15, f[50]), A = o(A, C, D, z, _, 21, f[51]), z = o(z, A, C, D, m, 6, f[52]), D = o(D, z, A, C, v, 10, f[53]), C = o(C, D, z, A, k, 15, f[54]), A = o(A, C, D, z, u, 21, f[55]), z = o(z, A, C, D, B, 6, f[56]), D = o(D, z, A, C, H, 10, f[57]), C = o(C, D, z, A, y, 15, f[58]), A = o(A, C, D, z, x, 21, f[59]), z = o(z, A, C, D, p, 6, f[60]), D = o(D, z, A, C, S, 10, f[61]), C = o(C, D, z, A, d, 15, f[62]), A = o(A, C, D, z, w, 21, f[63]), h[0] = h[0] + z | 0, h[1] = h[1] + A | 0, h[2] = h[2] + C | 0, h[3] = h[3] + D | 0;
              },
              _doFinalize: function _doFinalize() {
                var t = this._data,
                  e = t.words,
                  i = 8 * this._nDataBytes,
                  n = 8 * t.sigBytes;
                e[n >>> 5] |= 128 << 24 - n % 32;
                var o = r.floor(i / 4294967296),
                  s = i;
                e[(n + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e[(n + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();
                for (var a = this._hash, c = a.words, h = 0; h < 4; h++) {
                  var l = c[h];
                  c[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                }
                return a;
              },
              clone: function clone() {
                var t = h.clone.call(this);
                return t._hash = this._hash.clone(), t;
              }
            });
            s.MD5 = h._createHelper(u), s.HmacMD5 = h._createHmacHelper(u);
          }(Math), function () {
            var r = t,
              e = r.lib,
              i = e.WordArray,
              n = e.Hasher,
              o = r.algo,
              s = [],
              a = o.SHA1 = n.extend({
                _doReset: function _doReset() {
                  this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function _doProcessBlock(t, r) {
                  for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], a = e[3], c = e[4], h = 0; h < 80; h++) {
                    if (h < 16) s[h] = 0 | t[r + h];else {
                      var l = s[h - 3] ^ s[h - 8] ^ s[h - 14] ^ s[h - 16];
                      s[h] = l << 1 | l >>> 31;
                    }
                    var f = (i << 5 | i >>> 27) + c + s[h];
                    f += h < 20 ? (n & o | ~n & a) + 1518500249 : h < 40 ? (n ^ o ^ a) + 1859775393 : h < 60 ? (n & o | n & a | o & a) - 1894007588 : (n ^ o ^ a) - 899497514, c = a, a = o, o = n << 30 | n >>> 2, n = i, i = f;
                  }
                  e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + a | 0, e[4] = e[4] + c | 0;
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data,
                    r = t.words,
                    e = 8 * this._nDataBytes,
                    i = 8 * t.sigBytes;
                  return r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 14] = Math.floor(e / 4294967296), r[(i + 64 >>> 9 << 4) + 15] = e, t.sigBytes = 4 * r.length, this._process(), this._hash;
                },
                clone: function clone() {
                  var t = n.clone.call(this);
                  return t._hash = this._hash.clone(), t;
                }
              });
            r.SHA1 = n._createHelper(a), r.HmacSHA1 = n._createHmacHelper(a);
          }(), function (r) {
            var e = t,
              i = e.lib,
              n = i.WordArray,
              o = i.Hasher,
              s = e.algo,
              a = [],
              c = [];
            !function () {
              function t(t) {
                for (var e = r.sqrt(t), i = 2; i <= e; i++) if (!(t % i)) return !1;
                return !0;
              }
              function e(t) {
                return 4294967296 * (t - (0 | t)) | 0;
              }
              for (var i = 2, n = 0; n < 64;) t(i) && (n < 8 && (a[n] = e(r.pow(i, .5))), c[n] = e(r.pow(i, 1 / 3)), n++), i++;
            }();
            var h = [],
              l = s.SHA256 = o.extend({
                _doReset: function _doReset() {
                  this._hash = new n.init(a.slice(0));
                },
                _doProcessBlock: function _doProcessBlock(t, r) {
                  for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], l = e[5], f = e[6], u = e[7], d = 0; d < 64; d++) {
                    if (d < 16) h[d] = 0 | t[r + d];else {
                      var v = h[d - 15],
                        p = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3,
                        _ = h[d - 2],
                        y = (_ << 15 | _ >>> 17) ^ (_ << 13 | _ >>> 19) ^ _ >>> 10;
                      h[d] = p + h[d - 7] + y + h[d - 16];
                    }
                    var g = a & l ^ ~a & f,
                      B = i & n ^ i & o ^ n & o,
                      w = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                      k = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25),
                      S = u + k + g + c[d] + h[d],
                      m = w + B;
                    u = f, f = l, l = a, a = s + S | 0, s = o, o = n, n = i, i = S + m | 0;
                  }
                  e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + s | 0, e[4] = e[4] + a | 0, e[5] = e[5] + l | 0, e[6] = e[6] + f | 0, e[7] = e[7] + u | 0;
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data,
                    e = t.words,
                    i = 8 * this._nDataBytes,
                    n = 8 * t.sigBytes;
                  return e[n >>> 5] |= 128 << 24 - n % 32, e[(n + 64 >>> 9 << 4) + 14] = r.floor(i / 4294967296), e[(n + 64 >>> 9 << 4) + 15] = i, t.sigBytes = 4 * e.length, this._process(), this._hash;
                },
                clone: function clone() {
                  var t = o.clone.call(this);
                  return t._hash = this._hash.clone(), t;
                }
              });
            e.SHA256 = o._createHelper(l), e.HmacSHA256 = o._createHmacHelper(l);
          }(Math), function () {
            function r(t) {
              return t << 8 & 4278255360 | t >>> 8 & 16711935;
            }
            var e = t,
              i = e.lib,
              n = i.WordArray,
              o = e.enc;
            o.Utf16 = o.Utf16BE = {
              stringify: function stringify(t) {
                for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n += 2) {
                  var o = r[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
                  i.push(String.fromCharCode(o));
                }
                return i.join("");
              },
              parse: function parse(t) {
                for (var r = t.length, e = [], i = 0; i < r; i++) e[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16;
                return n.create(e, 2 * r);
              }
            };
            o.Utf16LE = {
              stringify: function stringify(t) {
                for (var e = t.words, i = t.sigBytes, n = [], o = 0; o < i; o += 2) {
                  var s = r(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
                  n.push(String.fromCharCode(s));
                }
                return n.join("");
              },
              parse: function parse(t) {
                for (var e = t.length, i = [], o = 0; o < e; o++) i[o >>> 1] |= r(t.charCodeAt(o) << 16 - o % 2 * 16);
                return n.create(i, 2 * e);
              }
            };
          }(), function () {
            if ("function" == typeof ArrayBuffer) {
              var r = t,
                e = r.lib,
                i = e.WordArray,
                n = i.init,
                o = i.init = function (t) {
                  if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) {
                    for (var r = t.byteLength, e = [], i = 0; i < r; i++) e[i >>> 2] |= t[i] << 24 - i % 4 * 8;
                    n.call(this, e, r);
                  } else n.apply(this, arguments);
                };
              o.prototype = i;
            }
          }(), function (r) {
            function e(t, r, e) {
              return t ^ r ^ e;
            }
            function i(t, r, e) {
              return t & r | ~t & e;
            }
            function n(t, r, e) {
              return (t | ~r) ^ e;
            }
            function o(t, r, e) {
              return t & e | r & ~e;
            }
            function s(t, r, e) {
              return t ^ (r | ~e);
            }
            function a(t, r) {
              return t << r | t >>> 32 - r;
            }
            var c = t,
              h = c.lib,
              l = h.WordArray,
              f = h.Hasher,
              u = c.algo,
              d = l.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
              v = l.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
              p = l.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
              _ = l.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
              y = l.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
              g = l.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
              B = u.RIPEMD160 = f.extend({
                _doReset: function _doReset() {
                  this._hash = l.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function _doProcessBlock(t, r) {
                  for (var c = 0; c < 16; c++) {
                    var h = r + c,
                      l = t[h];
                    t[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                  }
                  var f,
                    u,
                    B,
                    w,
                    k,
                    S,
                    m,
                    x,
                    b,
                    H,
                    z = this._hash.words,
                    A = y.words,
                    C = g.words,
                    D = d.words,
                    R = v.words,
                    E = p.words,
                    M = _.words;
                  S = f = z[0], m = u = z[1], x = B = z[2], b = w = z[3], H = k = z[4];
                  for (var F, c = 0; c < 80; c += 1) F = f + t[r + D[c]] | 0, F += c < 16 ? e(u, B, w) + A[0] : c < 32 ? i(u, B, w) + A[1] : c < 48 ? n(u, B, w) + A[2] : c < 64 ? o(u, B, w) + A[3] : s(u, B, w) + A[4], F |= 0, F = a(F, E[c]), F = F + k | 0, f = k, k = w, w = a(B, 10), B = u, u = F, F = S + t[r + R[c]] | 0, F += c < 16 ? s(m, x, b) + C[0] : c < 32 ? o(m, x, b) + C[1] : c < 48 ? n(m, x, b) + C[2] : c < 64 ? i(m, x, b) + C[3] : e(m, x, b) + C[4], F |= 0, F = a(F, M[c]), F = F + H | 0, S = H, H = b, b = a(x, 10), x = m, m = F;
                  F = z[1] + B + b | 0, z[1] = z[2] + w + H | 0, z[2] = z[3] + k + S | 0, z[3] = z[4] + f + m | 0, z[4] = z[0] + u + x | 0, z[0] = F;
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data,
                    r = t.words,
                    e = 8 * this._nDataBytes,
                    i = 8 * t.sigBytes;
                  r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 14] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8), t.sigBytes = 4 * (r.length + 1), this._process();
                  for (var n = this._hash, o = n.words, s = 0; s < 5; s++) {
                    var a = o[s];
                    o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                  }
                  return n;
                },
                clone: function clone() {
                  var t = f.clone.call(this);
                  return t._hash = this._hash.clone(), t;
                }
              });
            c.RIPEMD160 = f._createHelper(B), c.HmacRIPEMD160 = f._createHmacHelper(B);
          }(), function () {
            var r = t,
              e = r.lib,
              i = e.Base,
              n = r.enc,
              o = n.Utf8,
              s = r.algo;
            s.HMAC = i.extend({
              init: function init(t, r) {
                t = this._hasher = new t.init(), "string" == typeof r && (r = o.parse(r));
                var e = t.blockSize,
                  i = 4 * e;
                r.sigBytes > i && (r = t.finalize(r)), r.clamp();
                for (var n = this._oKey = r.clone(), s = this._iKey = r.clone(), a = n.words, c = s.words, h = 0; h < e; h++) a[h] ^= 1549556828, c[h] ^= 909522486;
                n.sigBytes = s.sigBytes = i, this.reset();
              },
              reset: function reset() {
                var t = this._hasher;
                t.reset(), t.update(this._iKey);
              },
              update: function update(t) {
                return this._hasher.update(t), this;
              },
              finalize: function finalize(t) {
                var r = this._hasher,
                  e = r.finalize(t);
                r.reset();
                var i = r.finalize(this._oKey.clone().concat(e));
                return i;
              }
            });
          }(), function () {
            var r = t,
              e = r.lib,
              i = e.Base,
              n = e.WordArray,
              o = r.algo,
              s = o.SHA1,
              a = o.HMAC,
              c = o.PBKDF2 = i.extend({
                cfg: i.extend({
                  keySize: 4,
                  hasher: s,
                  iterations: 1
                }),
                init: function init(t) {
                  this.cfg = this.cfg.extend(t);
                },
                compute: function compute(t, r) {
                  for (var e = this.cfg, i = a.create(e.hasher, t), o = n.create(), s = n.create([1]), c = o.words, h = s.words, l = e.keySize, f = e.iterations; c.length < l;) {
                    var u = i.update(r).finalize(s);
                    i.reset();
                    for (var d = u.words, v = d.length, p = u, _ = 1; _ < f; _++) {
                      p = i.finalize(p), i.reset();
                      for (var y = p.words, g = 0; g < v; g++) d[g] ^= y[g];
                    }
                    o.concat(u), h[0]++;
                  }
                  return o.sigBytes = 4 * l, o;
                }
              });
            r.PBKDF2 = function (t, r, e) {
              return c.create(e).compute(t, r);
            };
          }(), function () {
            var r = t,
              e = r.lib,
              i = e.Base,
              n = e.WordArray,
              o = r.algo,
              s = o.MD5,
              a = o.EvpKDF = i.extend({
                cfg: i.extend({
                  keySize: 4,
                  hasher: s,
                  iterations: 1
                }),
                init: function init(t) {
                  this.cfg = this.cfg.extend(t);
                },
                compute: function compute(t, r) {
                  for (var e = this.cfg, i = e.hasher.create(), o = n.create(), s = o.words, a = e.keySize, c = e.iterations; s.length < a;) {
                    h && i.update(h);
                    var h = i.update(t).finalize(r);
                    i.reset();
                    for (var l = 1; l < c; l++) h = i.finalize(h), i.reset();
                    o.concat(h);
                  }
                  return o.sigBytes = 4 * a, o;
                }
              });
            r.EvpKDF = function (t, r, e) {
              return a.create(e).compute(t, r);
            };
          }(), function () {
            var r = t,
              e = r.lib,
              i = e.WordArray,
              n = r.algo,
              o = n.SHA256,
              s = n.SHA224 = o.extend({
                _doReset: function _doReset() {
                  this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
                },
                _doFinalize: function _doFinalize() {
                  var t = o._doFinalize.call(this);
                  return t.sigBytes -= 4, t;
                }
              });
            r.SHA224 = o._createHelper(s), r.HmacSHA224 = o._createHmacHelper(s);
          }(), function (r) {
            var e = t,
              i = e.lib,
              n = i.Base,
              o = i.WordArray,
              s = e.x64 = {};
            s.Word = n.extend({
              init: function init(t, r) {
                this.high = t, this.low = r;
              }
            }), s.WordArray = n.extend({
              init: function init(t, e) {
                t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 8 * t.length;
              },
              toX32: function toX32() {
                for (var t = this.words, r = t.length, e = [], i = 0; i < r; i++) {
                  var n = t[i];
                  e.push(n.high), e.push(n.low);
                }
                return o.create(e, this.sigBytes);
              },
              clone: function clone() {
                for (var t = n.clone.call(this), r = t.words = this.words.slice(0), e = r.length, i = 0; i < e; i++) r[i] = r[i].clone();
                return t;
              }
            });
          }(), function (r) {
            var e = t,
              i = e.lib,
              n = i.WordArray,
              o = i.Hasher,
              s = e.x64,
              a = s.Word,
              c = e.algo,
              h = [],
              l = [],
              f = [];
            !function () {
              for (var t = 1, r = 0, e = 0; e < 24; e++) {
                h[t + 5 * r] = (e + 1) * (e + 2) / 2 % 64;
                var i = r % 5,
                  n = (2 * t + 3 * r) % 5;
                t = i, r = n;
              }
              for (var t = 0; t < 5; t++) for (var r = 0; r < 5; r++) l[t + 5 * r] = r + (2 * t + 3 * r) % 5 * 5;
              for (var o = 1, s = 0; s < 24; s++) {
                for (var c = 0, u = 0, d = 0; d < 7; d++) {
                  if (1 & o) {
                    var v = (1 << d) - 1;
                    v < 32 ? u ^= 1 << v : c ^= 1 << v - 32;
                  }
                  128 & o ? o = o << 1 ^ 113 : o <<= 1;
                }
                f[s] = a.create(c, u);
              }
            }();
            var u = [];
            !function () {
              for (var t = 0; t < 25; t++) u[t] = a.create();
            }();
            var d = c.SHA3 = o.extend({
              cfg: o.cfg.extend({
                outputLength: 512
              }),
              _doReset: function _doReset() {
                for (var t = this._state = [], r = 0; r < 25; r++) t[r] = new a.init();
                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
              },
              _doProcessBlock: function _doProcessBlock(t, r) {
                for (var e = this._state, i = this.blockSize / 2, n = 0; n < i; n++) {
                  var o = t[r + 2 * n],
                    s = t[r + 2 * n + 1];
                  o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                  var a = e[n];
                  a.high ^= s, a.low ^= o;
                }
                for (var c = 0; c < 24; c++) {
                  for (var d = 0; d < 5; d++) {
                    for (var v = 0, p = 0, _ = 0; _ < 5; _++) {
                      var a = e[d + 5 * _];
                      v ^= a.high, p ^= a.low;
                    }
                    var y = u[d];
                    y.high = v, y.low = p;
                  }
                  for (var d = 0; d < 5; d++) for (var g = u[(d + 4) % 5], B = u[(d + 1) % 5], w = B.high, k = B.low, v = g.high ^ (w << 1 | k >>> 31), p = g.low ^ (k << 1 | w >>> 31), _ = 0; _ < 5; _++) {
                    var a = e[d + 5 * _];
                    a.high ^= v, a.low ^= p;
                  }
                  for (var S = 1; S < 25; S++) {
                    var a = e[S],
                      m = a.high,
                      x = a.low,
                      b = h[S];
                    if (b < 32) var v = m << b | x >>> 32 - b,
                      p = x << b | m >>> 32 - b;else var v = x << b - 32 | m >>> 64 - b,
                      p = m << b - 32 | x >>> 64 - b;
                    var H = u[l[S]];
                    H.high = v, H.low = p;
                  }
                  var z = u[0],
                    A = e[0];
                  z.high = A.high, z.low = A.low;
                  for (var d = 0; d < 5; d++) for (var _ = 0; _ < 5; _++) {
                    var S = d + 5 * _,
                      a = e[S],
                      C = u[S],
                      D = u[(d + 1) % 5 + 5 * _],
                      R = u[(d + 2) % 5 + 5 * _];
                    a.high = C.high ^ ~D.high & R.high, a.low = C.low ^ ~D.low & R.low;
                  }
                  var a = e[0],
                    E = f[c];
                  a.high ^= E.high, a.low ^= E.low;
                }
              },
              _doFinalize: function _doFinalize() {
                var t = this._data,
                  e = t.words,
                  i = (8 * this._nDataBytes, 8 * t.sigBytes),
                  o = 32 * this.blockSize;
                e[i >>> 5] |= 1 << 24 - i % 32, e[(r.ceil((i + 1) / o) * o >>> 5) - 1] |= 128, t.sigBytes = 4 * e.length, this._process();
                for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, h = [], l = 0; l < c; l++) {
                  var f = s[l],
                    u = f.high,
                    d = f.low;
                  u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), h.push(d), h.push(u);
                }
                return new n.init(h, a);
              },
              clone: function clone() {
                for (var t = o.clone.call(this), r = t._state = this._state.slice(0), e = 0; e < 25; e++) r[e] = r[e].clone();
                return t;
              }
            });
            e.SHA3 = o._createHelper(d), e.HmacSHA3 = o._createHmacHelper(d);
          }(Math), function () {
            function r() {
              return s.create.apply(s, arguments);
            }
            var e = t,
              i = e.lib,
              n = i.Hasher,
              o = e.x64,
              s = o.Word,
              a = o.WordArray,
              c = e.algo,
              h = [r(1116352408, 3609767458), r(1899447441, 602891725), r(3049323471, 3964484399), r(3921009573, 2173295548), r(961987163, 4081628472), r(1508970993, 3053834265), r(2453635748, 2937671579), r(2870763221, 3664609560), r(3624381080, 2734883394), r(310598401, 1164996542), r(607225278, 1323610764), r(1426881987, 3590304994), r(1925078388, 4068182383), r(2162078206, 991336113), r(2614888103, 633803317), r(3248222580, 3479774868), r(3835390401, 2666613458), r(4022224774, 944711139), r(264347078, 2341262773), r(604807628, 2007800933), r(770255983, 1495990901), r(1249150122, 1856431235), r(1555081692, 3175218132), r(1996064986, 2198950837), r(2554220882, 3999719339), r(2821834349, 766784016), r(2952996808, 2566594879), r(3210313671, 3203337956), r(3336571891, 1034457026), r(3584528711, 2466948901), r(113926993, 3758326383), r(338241895, 168717936), r(666307205, 1188179964), r(773529912, 1546045734), r(1294757372, 1522805485), r(1396182291, 2643833823), r(1695183700, 2343527390), r(1986661051, 1014477480), r(2177026350, 1206759142), r(2456956037, 344077627), r(2730485921, 1290863460), r(2820302411, 3158454273), r(3259730800, 3505952657), r(3345764771, 106217008), r(3516065817, 3606008344), r(3600352804, 1432725776), r(4094571909, 1467031594), r(275423344, 851169720), r(430227734, 3100823752), r(506948616, 1363258195), r(659060556, 3750685593), r(883997877, 3785050280), r(958139571, 3318307427), r(1322822218, 3812723403), r(1537002063, 2003034995), r(1747873779, 3602036899), r(1955562222, 1575990012), r(2024104815, 1125592928), r(2227730452, 2716904306), r(2361852424, 442776044), r(2428436474, 593698344), r(2756734187, 3733110249), r(3204031479, 2999351573), r(3329325298, 3815920427), r(3391569614, 3928383900), r(3515267271, 566280711), r(3940187606, 3454069534), r(4118630271, 4000239992), r(116418474, 1914138554), r(174292421, 2731055270), r(289380356, 3203993006), r(460393269, 320620315), r(685471733, 587496836), r(852142971, 1086792851), r(1017036298, 365543100), r(1126000580, 2618297676), r(1288033470, 3409855158), r(1501505948, 4234509866), r(1607167915, 987167468), r(1816402316, 1246189591)],
              l = [];
            !function () {
              for (var t = 0; t < 80; t++) l[t] = r();
            }();
            var f = c.SHA512 = n.extend({
              _doReset: function _doReset() {
                this._hash = new a.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function _doProcessBlock(t, r) {
                for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], c = e[5], f = e[6], u = e[7], d = i.high, v = i.low, p = n.high, _ = n.low, y = o.high, g = o.low, B = s.high, w = s.low, k = a.high, S = a.low, m = c.high, x = c.low, b = f.high, H = f.low, z = u.high, A = u.low, C = d, D = v, R = p, E = _, M = y, F = g, P = B, W = w, O = k, U = S, I = m, K = x, X = b, L = H, j = z, N = A, T = 0; T < 80; T++) {
                  var Z = l[T];
                  if (T < 16) var q = Z.high = 0 | t[r + 2 * T],
                    G = Z.low = 0 | t[r + 2 * T + 1];else {
                    var J = l[T - 15],
                      $ = J.high,
                      Q = J.low,
                      V = ($ >>> 1 | Q << 31) ^ ($ >>> 8 | Q << 24) ^ $ >>> 7,
                      Y = (Q >>> 1 | $ << 31) ^ (Q >>> 8 | $ << 24) ^ (Q >>> 7 | $ << 25),
                      tt = l[T - 2],
                      rt = tt.high,
                      et = tt.low,
                      it = (rt >>> 19 | et << 13) ^ (rt << 3 | et >>> 29) ^ rt >>> 6,
                      nt = (et >>> 19 | rt << 13) ^ (et << 3 | rt >>> 29) ^ (et >>> 6 | rt << 26),
                      ot = l[T - 7],
                      st = ot.high,
                      at = ot.low,
                      ct = l[T - 16],
                      ht = ct.high,
                      lt = ct.low,
                      G = Y + at,
                      q = V + st + (G >>> 0 < Y >>> 0 ? 1 : 0),
                      G = G + nt,
                      q = q + it + (G >>> 0 < nt >>> 0 ? 1 : 0),
                      G = G + lt,
                      q = q + ht + (G >>> 0 < lt >>> 0 ? 1 : 0);
                    Z.high = q, Z.low = G;
                  }
                  var ft = O & I ^ ~O & X,
                    ut = U & K ^ ~U & L,
                    dt = C & R ^ C & M ^ R & M,
                    vt = D & E ^ D & F ^ E & F,
                    pt = (C >>> 28 | D << 4) ^ (C << 30 | D >>> 2) ^ (C << 25 | D >>> 7),
                    _t = (D >>> 28 | C << 4) ^ (D << 30 | C >>> 2) ^ (D << 25 | C >>> 7),
                    yt = (O >>> 14 | U << 18) ^ (O >>> 18 | U << 14) ^ (O << 23 | U >>> 9),
                    gt = (U >>> 14 | O << 18) ^ (U >>> 18 | O << 14) ^ (U << 23 | O >>> 9),
                    Bt = h[T],
                    wt = Bt.high,
                    kt = Bt.low,
                    St = N + gt,
                    mt = j + yt + (St >>> 0 < N >>> 0 ? 1 : 0),
                    St = St + ut,
                    mt = mt + ft + (St >>> 0 < ut >>> 0 ? 1 : 0),
                    St = St + kt,
                    mt = mt + wt + (St >>> 0 < kt >>> 0 ? 1 : 0),
                    St = St + G,
                    mt = mt + q + (St >>> 0 < G >>> 0 ? 1 : 0),
                    xt = _t + vt,
                    bt = pt + dt + (xt >>> 0 < _t >>> 0 ? 1 : 0);
                  j = X, N = L, X = I, L = K, I = O, K = U, U = W + St | 0, O = P + mt + (U >>> 0 < W >>> 0 ? 1 : 0) | 0, P = M, W = F, M = R, F = E, R = C, E = D, D = St + xt | 0, C = mt + bt + (D >>> 0 < St >>> 0 ? 1 : 0) | 0;
                }
                v = i.low = v + D, i.high = d + C + (v >>> 0 < D >>> 0 ? 1 : 0), _ = n.low = _ + E, n.high = p + R + (_ >>> 0 < E >>> 0 ? 1 : 0), g = o.low = g + F, o.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0), w = s.low = w + W, s.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0), S = a.low = S + U, a.high = k + O + (S >>> 0 < U >>> 0 ? 1 : 0), x = c.low = x + K, c.high = m + I + (x >>> 0 < K >>> 0 ? 1 : 0), H = f.low = H + L, f.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0), A = u.low = A + N, u.high = z + j + (A >>> 0 < N >>> 0 ? 1 : 0);
              },
              _doFinalize: function _doFinalize() {
                var t = this._data,
                  r = t.words,
                  e = 8 * this._nDataBytes,
                  i = 8 * t.sigBytes;
                r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 128 >>> 10 << 5) + 30] = Math.floor(e / 4294967296), r[(i + 128 >>> 10 << 5) + 31] = e, t.sigBytes = 4 * r.length, this._process();
                var n = this._hash.toX32();
                return n;
              },
              clone: function clone() {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(), t;
              },
              blockSize: 32
            });
            e.SHA512 = n._createHelper(f), e.HmacSHA512 = n._createHmacHelper(f);
          }(), function () {
            var r = t,
              e = r.x64,
              i = e.Word,
              n = e.WordArray,
              o = r.algo,
              s = o.SHA512,
              a = o.SHA384 = s.extend({
                _doReset: function _doReset() {
                  this._hash = new n.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)]);
                },
                _doFinalize: function _doFinalize() {
                  var t = s._doFinalize.call(this);
                  return t.sigBytes -= 16, t;
                }
              });
            r.SHA384 = s._createHelper(a), r.HmacSHA384 = s._createHmacHelper(a);
          }(), t.lib.Cipher || function (r) {
            var e = t,
              i = e.lib,
              n = i.Base,
              o = i.WordArray,
              s = i.BufferedBlockAlgorithm,
              a = e.enc,
              c = (a.Utf8, a.Base64),
              h = e.algo,
              l = h.EvpKDF,
              f = i.Cipher = s.extend({
                cfg: n.extend(),
                createEncryptor: function createEncryptor(t, r) {
                  return this.create(this._ENC_XFORM_MODE, t, r);
                },
                createDecryptor: function createDecryptor(t, r) {
                  return this.create(this._DEC_XFORM_MODE, t, r);
                },
                init: function init(t, r, e) {
                  this.cfg = this.cfg.extend(e), this._xformMode = t, this._key = r, this.reset();
                },
                reset: function reset() {
                  s.reset.call(this), this._doReset();
                },
                process: function process(t) {
                  return this._append(t), this._process();
                },
                finalize: function finalize(t) {
                  t && this._append(t);
                  var r = this._doFinalize();
                  return r;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                  function t(t) {
                    return "string" == typeof t ? m : w;
                  }
                  return function (r) {
                    return {
                      encrypt: function encrypt(e, i, n) {
                        return t(i).encrypt(r, e, i, n);
                      },
                      decrypt: function decrypt(e, i, n) {
                        return t(i).decrypt(r, e, i, n);
                      }
                    };
                  };
                }()
              }),
              u = (i.StreamCipher = f.extend({
                _doFinalize: function _doFinalize() {
                  var t = this._process(!0);
                  return t;
                },
                blockSize: 1
              }), e.mode = {}),
              d = i.BlockCipherMode = n.extend({
                createEncryptor: function createEncryptor(t, r) {
                  return this.Encryptor.create(t, r);
                },
                createDecryptor: function createDecryptor(t, r) {
                  return this.Decryptor.create(t, r);
                },
                init: function init(t, r) {
                  this._cipher = t, this._iv = r;
                }
              }),
              v = u.CBC = function () {
                function t(t, e, i) {
                  var n = this._iv;
                  if (n) {
                    var o = n;
                    this._iv = r;
                  } else var o = this._prevBlock;
                  for (var s = 0; s < i; s++) t[e + s] ^= o[s];
                }
                var e = d.extend();
                return e.Encryptor = e.extend({
                  processBlock: function processBlock(r, e) {
                    var i = this._cipher,
                      n = i.blockSize;
                    t.call(this, r, e, n), i.encryptBlock(r, e), this._prevBlock = r.slice(e, e + n);
                  }
                }), e.Decryptor = e.extend({
                  processBlock: function processBlock(r, e) {
                    var i = this._cipher,
                      n = i.blockSize,
                      o = r.slice(e, e + n);
                    i.decryptBlock(r, e), t.call(this, r, e, n), this._prevBlock = o;
                  }
                }), e;
              }(),
              p = e.pad = {},
              _ = p.Pkcs7 = {
                pad: function pad(t, r) {
                  for (var e = 4 * r, i = e - t.sigBytes % e, n = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4) s.push(n);
                  var c = o.create(s, i);
                  t.concat(c);
                },
                unpad: function unpad(t) {
                  var r = 255 & t.words[t.sigBytes - 1 >>> 2];
                  t.sigBytes -= r;
                }
              },
              y = (i.BlockCipher = f.extend({
                cfg: f.cfg.extend({
                  mode: v,
                  padding: _
                }),
                reset: function reset() {
                  f.reset.call(this);
                  var t = this.cfg,
                    r = t.iv,
                    e = t.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) var i = e.createEncryptor;else {
                    var i = e.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  this._mode && this._mode.__creator == i ? this._mode.init(this, r && r.words) : (this._mode = i.call(e, this, r && r.words), this._mode.__creator = i);
                },
                _doProcessBlock: function _doProcessBlock(t, r) {
                  this._mode.processBlock(t, r);
                },
                _doFinalize: function _doFinalize() {
                  var t = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    t.pad(this._data, this.blockSize);
                    var r = this._process(!0);
                  } else {
                    var r = this._process(!0);
                    t.unpad(r);
                  }
                  return r;
                },
                blockSize: 4
              }), i.CipherParams = n.extend({
                init: function init(t) {
                  this.mixIn(t);
                },
                toString: function toString(t) {
                  return (t || this.formatter).stringify(this);
                }
              })),
              g = e.format = {},
              B = g.OpenSSL = {
                stringify: function stringify(t) {
                  var r = t.ciphertext,
                    e = t.salt;
                  if (e) var i = o.create([1398893684, 1701076831]).concat(e).concat(r);else var i = r;
                  return i.toString(c);
                },
                parse: function parse(t) {
                  var r = c.parse(t),
                    e = r.words;
                  if (1398893684 == e[0] && 1701076831 == e[1]) {
                    var i = o.create(e.slice(2, 4));
                    e.splice(0, 4), r.sigBytes -= 16;
                  }
                  return y.create({
                    ciphertext: r,
                    salt: i
                  });
                }
              },
              w = i.SerializableCipher = n.extend({
                cfg: n.extend({
                  format: B
                }),
                encrypt: function encrypt(t, r, e, i) {
                  i = this.cfg.extend(i);
                  var n = t.createEncryptor(e, i),
                    o = n.finalize(r),
                    s = n.cfg;
                  return y.create({
                    ciphertext: o,
                    key: e,
                    iv: s.iv,
                    algorithm: t,
                    mode: s.mode,
                    padding: s.padding,
                    blockSize: t.blockSize,
                    formatter: i.format
                  });
                },
                decrypt: function decrypt(t, r, e, i) {
                  i = this.cfg.extend(i), r = this._parse(r, i.format);
                  var n = t.createDecryptor(e, i).finalize(r.ciphertext);
                  return n;
                },
                _parse: function _parse(t, r) {
                  return "string" == typeof t ? r.parse(t, this) : t;
                }
              }),
              k = e.kdf = {},
              S = k.OpenSSL = {
                execute: function execute(t, r, e, i) {
                  i || (i = o.random(8));
                  var n = l.create({
                      keySize: r + e
                    }).compute(t, i),
                    s = o.create(n.words.slice(r), 4 * e);
                  return n.sigBytes = 4 * r, y.create({
                    key: n,
                    iv: s,
                    salt: i
                  });
                }
              },
              m = i.PasswordBasedCipher = w.extend({
                cfg: w.cfg.extend({
                  kdf: S
                }),
                encrypt: function encrypt(t, r, e, i) {
                  i = this.cfg.extend(i);
                  var n = i.kdf.execute(e, t.keySize, t.ivSize);
                  i.iv = n.iv;
                  var o = w.encrypt.call(this, t, r, n.key, i);
                  return o.mixIn(n), o;
                },
                decrypt: function decrypt(t, r, e, i) {
                  i = this.cfg.extend(i), r = this._parse(r, i.format);
                  var n = i.kdf.execute(e, t.keySize, t.ivSize, r.salt);
                  i.iv = n.iv;
                  var o = w.decrypt.call(this, t, r, n.key, i);
                  return o;
                }
              });
          }(), t.mode.CFB = function () {
            function r(t, r, e, i) {
              var n = this._iv;
              if (n) {
                var o = n.slice(0);
                this._iv = void 0;
              } else var o = this._prevBlock;
              i.encryptBlock(o, 0);
              for (var s = 0; s < e; s++) t[r + s] ^= o[s];
            }
            var e = t.lib.BlockCipherMode.extend();
            return e.Encryptor = e.extend({
              processBlock: function processBlock(t, e) {
                var i = this._cipher,
                  n = i.blockSize;
                r.call(this, t, e, n, i), this._prevBlock = t.slice(e, e + n);
              }
            }), e.Decryptor = e.extend({
              processBlock: function processBlock(t, e) {
                var i = this._cipher,
                  n = i.blockSize,
                  o = t.slice(e, e + n);
                r.call(this, t, e, n, i), this._prevBlock = o;
              }
            }), e;
          }(), t.mode.ECB = function () {
            var r = t.lib.BlockCipherMode.extend();
            return r.Encryptor = r.extend({
              processBlock: function processBlock(t, r) {
                this._cipher.encryptBlock(t, r);
              }
            }), r.Decryptor = r.extend({
              processBlock: function processBlock(t, r) {
                this._cipher.decryptBlock(t, r);
              }
            }), r;
          }(), t.pad.AnsiX923 = {
            pad: function pad(t, r) {
              var e = t.sigBytes,
                i = 4 * r,
                n = i - e % i,
                o = e + n - 1;
              t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n;
            },
            unpad: function unpad(t) {
              var r = 255 & t.words[t.sigBytes - 1 >>> 2];
              t.sigBytes -= r;
            }
          }, t.pad.Iso10126 = {
            pad: function pad(r, e) {
              var i = 4 * e,
                n = i - r.sigBytes % i;
              r.concat(t.lib.WordArray.random(n - 1)).concat(t.lib.WordArray.create([n << 24], 1));
            },
            unpad: function unpad(t) {
              var r = 255 & t.words[t.sigBytes - 1 >>> 2];
              t.sigBytes -= r;
            }
          }, t.pad.Iso97971 = {
            pad: function pad(r, e) {
              r.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(r, e);
            },
            unpad: function unpad(r) {
              t.pad.ZeroPadding.unpad(r), r.sigBytes--;
            }
          }, t.mode.OFB = function () {
            var r = t.lib.BlockCipherMode.extend(),
              e = r.Encryptor = r.extend({
                processBlock: function processBlock(t, r) {
                  var e = this._cipher,
                    i = e.blockSize,
                    n = this._iv,
                    o = this._keystream;
                  n && (o = this._keystream = n.slice(0), this._iv = void 0), e.encryptBlock(o, 0);
                  for (var s = 0; s < i; s++) t[r + s] ^= o[s];
                }
              });
            return r.Decryptor = e, r;
          }(), t.pad.NoPadding = {
            pad: function pad() {},
            unpad: function unpad() {}
          }, function (r) {
            var e = t,
              i = e.lib,
              n = i.CipherParams,
              o = e.enc,
              s = o.Hex,
              a = e.format;
            a.Hex = {
              stringify: function stringify(t) {
                return t.ciphertext.toString(s);
              },
              parse: function parse(t) {
                var r = s.parse(t);
                return n.create({
                  ciphertext: r
                });
              }
            };
          }(), function () {
            var r = t,
              e = r.lib,
              i = e.BlockCipher,
              n = r.algo,
              o = [],
              s = [],
              a = [],
              c = [],
              h = [],
              l = [],
              f = [],
              u = [],
              d = [],
              v = [];
            !function () {
              for (var t = [], r = 0; r < 256; r++) r < 128 ? t[r] = r << 1 : t[r] = r << 1 ^ 283;
              for (var e = 0, i = 0, r = 0; r < 256; r++) {
                var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                n = n >>> 8 ^ 255 & n ^ 99, o[e] = n, s[n] = e;
                var p = t[e],
                  _ = t[p],
                  y = t[_],
                  g = 257 * t[n] ^ 16843008 * n;
                a[e] = g << 24 | g >>> 8, c[e] = g << 16 | g >>> 16, h[e] = g << 8 | g >>> 24, l[e] = g;
                var g = 16843009 * y ^ 65537 * _ ^ 257 * p ^ 16843008 * e;
                f[n] = g << 24 | g >>> 8, u[n] = g << 16 | g >>> 16, d[n] = g << 8 | g >>> 24, v[n] = g, e ? (e = p ^ t[t[t[y ^ p]]], i ^= t[t[i]]) : e = i = 1;
              }
            }();
            var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
              _ = n.AES = i.extend({
                _doReset: function _doReset() {
                  if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (var t = this._keyPriorReset = this._key, r = t.words, e = t.sigBytes / 4, i = this._nRounds = e + 6, n = 4 * (i + 1), s = this._keySchedule = [], a = 0; a < n; a++) if (a < e) s[a] = r[a];else {
                      var c = s[a - 1];
                      a % e ? e > 6 && a % e == 4 && (c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c]) : (c = c << 8 | c >>> 24, c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c], c ^= p[a / e | 0] << 24), s[a] = s[a - e] ^ c;
                    }
                    for (var h = this._invKeySchedule = [], l = 0; l < n; l++) {
                      var a = n - l;
                      if (l % 4) var c = s[a];else var c = s[a - 4];
                      l < 4 || a <= 4 ? h[l] = c : h[l] = f[o[c >>> 24]] ^ u[o[c >>> 16 & 255]] ^ d[o[c >>> 8 & 255]] ^ v[o[255 & c]];
                    }
                  }
                },
                encryptBlock: function encryptBlock(t, r) {
                  this._doCryptBlock(t, r, this._keySchedule, a, c, h, l, o);
                },
                decryptBlock: function decryptBlock(t, r) {
                  var e = t[r + 1];
                  t[r + 1] = t[r + 3], t[r + 3] = e, this._doCryptBlock(t, r, this._invKeySchedule, f, u, d, v, s);
                  var e = t[r + 1];
                  t[r + 1] = t[r + 3], t[r + 3] = e;
                },
                _doCryptBlock: function _doCryptBlock(t, r, e, i, n, o, s, a) {
                  for (var c = this._nRounds, h = t[r] ^ e[0], l = t[r + 1] ^ e[1], f = t[r + 2] ^ e[2], u = t[r + 3] ^ e[3], d = 4, v = 1; v < c; v++) {
                    var p = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ e[d++],
                      _ = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ e[d++],
                      y = i[f >>> 24] ^ n[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ e[d++],
                      g = i[u >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ e[d++];
                    h = p, l = _, f = y, u = g;
                  }
                  var p = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ e[d++],
                    _ = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ e[d++],
                    y = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ e[d++],
                    g = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ e[d++];
                  t[r] = p, t[r + 1] = _, t[r + 2] = y, t[r + 3] = g;
                },
                keySize: 8
              });
            r.AES = i._createHelper(_);
          }(), function () {
            function r(t, r) {
              var e = (this._lBlock >>> t ^ this._rBlock) & r;
              this._rBlock ^= e, this._lBlock ^= e << t;
            }
            function e(t, r) {
              var e = (this._rBlock >>> t ^ this._lBlock) & r;
              this._lBlock ^= e, this._rBlock ^= e << t;
            }
            var i = t,
              n = i.lib,
              o = n.WordArray,
              s = n.BlockCipher,
              a = i.algo,
              c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
              h = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
              l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
              f = [{
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
              }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
              }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
              }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
              }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
              }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
              }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
              }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
              }],
              u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
              d = a.DES = s.extend({
                _doReset: function _doReset() {
                  for (var t = this._key, r = t.words, e = [], i = 0; i < 56; i++) {
                    var n = c[i] - 1;
                    e[i] = r[n >>> 5] >>> 31 - n % 32 & 1;
                  }
                  for (var o = this._subKeys = [], s = 0; s < 16; s++) {
                    for (var a = o[s] = [], f = l[s], i = 0; i < 24; i++) a[i / 6 | 0] |= e[(h[i] - 1 + f) % 28] << 31 - i % 6, a[4 + (i / 6 | 0)] |= e[28 + (h[i + 24] - 1 + f) % 28] << 31 - i % 6;
                    a[0] = a[0] << 1 | a[0] >>> 31;
                    for (var i = 1; i < 7; i++) a[i] = a[i] >>> 4 * (i - 1) + 3;
                    a[7] = a[7] << 5 | a[7] >>> 27;
                  }
                  for (var u = this._invSubKeys = [], i = 0; i < 16; i++) u[i] = o[15 - i];
                },
                encryptBlock: function encryptBlock(t, r) {
                  this._doCryptBlock(t, r, this._subKeys);
                },
                decryptBlock: function decryptBlock(t, r) {
                  this._doCryptBlock(t, r, this._invSubKeys);
                },
                _doCryptBlock: function _doCryptBlock(t, i, n) {
                  this._lBlock = t[i], this._rBlock = t[i + 1], r.call(this, 4, 252645135), r.call(this, 16, 65535), e.call(this, 2, 858993459), e.call(this, 8, 16711935), r.call(this, 1, 1431655765);
                  for (var o = 0; o < 16; o++) {
                    for (var s = n[o], a = this._lBlock, c = this._rBlock, h = 0, l = 0; l < 8; l++) h |= f[l][((c ^ s[l]) & u[l]) >>> 0];
                    this._lBlock = c, this._rBlock = a ^ h;
                  }
                  var d = this._lBlock;
                  this._lBlock = this._rBlock, this._rBlock = d, r.call(this, 1, 1431655765), e.call(this, 8, 16711935), e.call(this, 2, 858993459), r.call(this, 16, 65535), r.call(this, 4, 252645135), t[i] = this._lBlock, t[i + 1] = this._rBlock;
                },
                keySize: 2,
                ivSize: 2,
                blockSize: 2
              });
            i.DES = s._createHelper(d);
            var v = a.TripleDES = s.extend({
              _doReset: function _doReset() {
                var t = this._key,
                  r = t.words;
                this._des1 = d.createEncryptor(o.create(r.slice(0, 2))), this._des2 = d.createEncryptor(o.create(r.slice(2, 4))), this._des3 = d.createEncryptor(o.create(r.slice(4, 6)));
              },
              encryptBlock: function encryptBlock(t, r) {
                this._des1.encryptBlock(t, r), this._des2.decryptBlock(t, r), this._des3.encryptBlock(t, r);
              },
              decryptBlock: function decryptBlock(t, r) {
                this._des3.decryptBlock(t, r), this._des2.encryptBlock(t, r), this._des1.decryptBlock(t, r);
              },
              keySize: 6,
              ivSize: 2,
              blockSize: 2
            });
            i.TripleDES = s._createHelper(v);
          }(), function () {
            function r() {
              for (var t = this._S, r = this._i, e = this._j, i = 0, n = 0; n < 4; n++) {
                r = (r + 1) % 256, e = (e + t[r]) % 256;
                var o = t[r];
                t[r] = t[e], t[e] = o, i |= t[(t[r] + t[e]) % 256] << 24 - 8 * n;
              }
              return this._i = r, this._j = e, i;
            }
            var e = t,
              i = e.lib,
              n = i.StreamCipher,
              o = e.algo,
              s = o.RC4 = n.extend({
                _doReset: function _doReset() {
                  for (var t = this._key, r = t.words, e = t.sigBytes, i = this._S = [], n = 0; n < 256; n++) i[n] = n;
                  for (var n = 0, o = 0; n < 256; n++) {
                    var s = n % e,
                      a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                    o = (o + i[n] + a) % 256;
                    var c = i[n];
                    i[n] = i[o], i[o] = c;
                  }
                  this._i = this._j = 0;
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  t[e] ^= r.call(this);
                },
                keySize: 8,
                ivSize: 0
              });
            e.RC4 = n._createHelper(s);
            var a = o.RC4Drop = s.extend({
              cfg: s.cfg.extend({
                drop: 192
              }),
              _doReset: function _doReset() {
                s._doReset.call(this);
                for (var t = this.cfg.drop; t > 0; t--) r.call(this);
              }
            });
            e.RC4Drop = n._createHelper(a);
          }(), t.mode.CTRGladman = function () {
            function r(t) {
              if (255 === (t >> 24 & 255)) {
                var r = t >> 16 & 255,
                  e = t >> 8 & 255,
                  i = 255 & t;
                255 === r ? (r = 0, 255 === e ? (e = 0, 255 === i ? i = 0 : ++i) : ++e) : ++r, t = 0, t += r << 16, t += e << 8, t += i;
              } else t += 1 << 24;
              return t;
            }
            function e(t) {
              return 0 === (t[0] = r(t[0])) && (t[1] = r(t[1])), t;
            }
            var i = t.lib.BlockCipherMode.extend(),
              n = i.Encryptor = i.extend({
                processBlock: function processBlock(t, r) {
                  var i = this._cipher,
                    n = i.blockSize,
                    o = this._iv,
                    s = this._counter;
                  o && (s = this._counter = o.slice(0), this._iv = void 0), e(s);
                  var a = s.slice(0);
                  i.encryptBlock(a, 0);
                  for (var c = 0; c < n; c++) t[r + c] ^= a[c];
                }
              });
            return i.Decryptor = n, i;
          }(), function () {
            function r() {
              for (var t = this._X, r = this._C, e = 0; e < 8; e++) a[e] = r[e];
              r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
              for (var e = 0; e < 8; e++) {
                var i = t[e] + r[e],
                  n = 65535 & i,
                  o = i >>> 16,
                  s = ((n * n >>> 17) + n * o >>> 15) + o * o,
                  h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                c[e] = s ^ h;
              }
              t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
            }
            var e = t,
              i = e.lib,
              n = i.StreamCipher,
              o = e.algo,
              s = [],
              a = [],
              c = [],
              h = o.Rabbit = n.extend({
                _doReset: function _doReset() {
                  for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++) t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8);
                  var n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                    o = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                  this._b = 0;
                  for (var i = 0; i < 4; i++) r.call(this);
                  for (var i = 0; i < 8; i++) o[i] ^= n[i + 4 & 7];
                  if (e) {
                    var s = e.words,
                      a = s[0],
                      c = s[1],
                      h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                      l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8),
                      f = h >>> 16 | 4294901760 & l,
                      u = l << 16 | 65535 & h;
                    o[0] ^= h, o[1] ^= f, o[2] ^= l, o[3] ^= u, o[4] ^= h, o[5] ^= f, o[6] ^= l, o[7] ^= u;
                    for (var i = 0; i < 4; i++) r.call(this);
                  }
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var i = this._X;
                  r.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                  for (var n = 0; n < 4; n++) s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n];
                },
                blockSize: 4,
                ivSize: 2
              });
            e.Rabbit = n._createHelper(h);
          }(), t.mode.CTR = function () {
            var r = t.lib.BlockCipherMode.extend(),
              e = r.Encryptor = r.extend({
                processBlock: function processBlock(t, r) {
                  var e = this._cipher,
                    i = e.blockSize,
                    n = this._iv,
                    o = this._counter;
                  n && (o = this._counter = n.slice(0), this._iv = void 0);
                  var s = o.slice(0);
                  e.encryptBlock(s, 0), o[i - 1] = o[i - 1] + 1 | 0;
                  for (var a = 0; a < i; a++) t[r + a] ^= s[a];
                }
              });
            return r.Decryptor = e, r;
          }(), function () {
            function r() {
              for (var t = this._X, r = this._C, e = 0; e < 8; e++) a[e] = r[e];
              r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
              for (var e = 0; e < 8; e++) {
                var i = t[e] + r[e],
                  n = 65535 & i,
                  o = i >>> 16,
                  s = ((n * n >>> 17) + n * o >>> 15) + o * o,
                  h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                c[e] = s ^ h;
              }
              t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
            }
            var e = t,
              i = e.lib,
              n = i.StreamCipher,
              o = e.algo,
              s = [],
              a = [],
              c = [],
              h = o.RabbitLegacy = n.extend({
                _doReset: function _doReset() {
                  var t = this._key.words,
                    e = this.cfg.iv,
                    i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                    n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                  this._b = 0;
                  for (var o = 0; o < 4; o++) r.call(this);
                  for (var o = 0; o < 8; o++) n[o] ^= i[o + 4 & 7];
                  if (e) {
                    var s = e.words,
                      a = s[0],
                      c = s[1],
                      h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                      l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8),
                      f = h >>> 16 | 4294901760 & l,
                      u = l << 16 | 65535 & h;
                    n[0] ^= h, n[1] ^= f, n[2] ^= l, n[3] ^= u, n[4] ^= h, n[5] ^= f, n[6] ^= l, n[7] ^= u;
                    for (var o = 0; o < 4; o++) r.call(this);
                  }
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var i = this._X;
                  r.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                  for (var n = 0; n < 4; n++) s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n];
                },
                blockSize: 4,
                ivSize: 2
              });
            e.RabbitLegacy = n._createHelper(h);
          }(), t.pad.ZeroPadding = {
            pad: function pad(t, r) {
              var e = 4 * r;
              t.clamp(), t.sigBytes += e - (t.sigBytes % e || e);
            },
            unpad: function unpad(t) {
              for (var r = t.words, e = t.sigBytes - 1; !(r[e >>> 2] >>> 24 - e % 4 * 8 & 255);) e--;
              t.sigBytes = e + 1;
            }
          }, t;
        });

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
      }, {});
    }
  };
});

System.register("chunks:///_virtual/crypto-js.min.mjs_cjs=&original=.js", ['./crypto-js.min.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './crypto-js.min.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./crypto-js.min.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/CryptoUtils.ts", ['cc', './index.js', './crypto-js.min.mjs_cjs=&original=.js', './SecretConfig.ts', './crypto-js.min.js'], function (exports) {
  var cclegacy, CryptoES, Crypto_AESSecretKey, _cjsExports;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CryptoES = module.default;
    }, null, function (module) {
      Crypto_AESSecretKey = module.Crypto_AESSecretKey;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "28b22s6aSJPNbz0HMYPMAze", "CryptoUtils", undefined);
      var CryptoUtils = exports('CryptoUtils', /*#__PURE__*/function () {
        function CryptoUtils() {}
        //自定义<初始化加密库使用>
        /**
         * @Description: 简单aes加密
         * @Date: 2024-04-25 13:37:52
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} enCodeStr
         * @return {*}
         */
        CryptoUtils.easyAES_encrypt = function easyAES_encrypt(enCodeStr) {
          return CryptoES.AES.encrypt(enCodeStr, this._cryptoKey).toString();
        }

        /**
         * @Description: 简单aes解密
         * @Date: 2024-04-25 13:38:04
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} deCodeStr
         * @return {*}
         */;
        CryptoUtils.easyAES_decrypt = function easyAES_decrypt(deCodeStr) {
          return CryptoES.AES.decrypt(deCodeStr, this._cryptoKey).toString(CryptoES.enc.Utf8);
        }

        /**
         * @Description: md5加密
         * @Date: 2024-04-25 13:37:42
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} conentStr
         * @return {*}
         */;
        CryptoUtils.easyMD5 = function easyMD5(conentStr) {
          return CryptoES.MD5(conentStr).toString();
        }

        /**
         * @Description:复杂AES加密 
         * @Date: 2024-04-25 13:35:23
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} msg
         * @param {string} key
         * @param {string} iv
         * @return {*}
         */;
        CryptoUtils.complex_AES_Encrypt = function complex_AES_Encrypt(msg, key, iv) {
          return CryptoES.AES.encrypt(msg, this._cryptoKey, {
            iv: this._cryptoIV,
            format: this.JsonFormatter
          }).toString();
        }

        /**
         * @Description: 复杂AES解密
         * @Date: 2024-04-25 13:35:10
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} str
         * @param {string} key
         * @param {string} iv
         * @return {*}
         */;
        CryptoUtils.complex_AES_Decrypt = function complex_AES_Decrypt(str, key, iv) {
          var decrypted = CryptoES.AES.decrypt(str, this._cryptoKey, {
            iv: this._cryptoIV,
            format: this.JsonFormatter
          });
          return decrypted.toString(CryptoES.enc.Utf8);
        }

        /**
         * @Description: 自定义一个json格式化
         * @Date: 2024-04-25 13:37:18
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        /**
         * @Description: 加密-对称加密算法
         * @Date: 2024-04-25 11:38:49
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} enCodeStr
         * @return {*}
         */
        CryptoUtils.encrypt = function encrypt(enCodeStr) {
          return _cjsExports.AES.encrypt(enCodeStr, Crypto_AESSecretKey).toString();
        }

        /**
         * @Description: 解密-对称加密算法
         * @Date: 2024-04-25 11:38:49
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} enCodeStr
         * @return {*}
         */;
        CryptoUtils.decrypt = function decrypt(deCodeStr) {
          return _cjsExports.AES.decrypt(deCodeStr, Crypto_AESSecretKey).toString(_cjsExports.enc.Utf8);
        };
        return CryptoUtils;
      }());
      CryptoUtils._cryptoKey = Crypto_AESSecretKey;
      //自定义<初始化加密库使用>
      CryptoUtils._cryptoIV = CryptoES.enc.Hex.parse('aes_iv');
      CryptoUtils.JsonFormatter = {
        stringify: function stringify(cipherParams) {
          var jsonObj = {
            ct: cipherParams.ciphertext.toString(CryptoES.enc.Base64)
          };
          if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
          }
          if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
          }
          return JSON.stringify(jsonObj);
        },
        parse: function parse(jsonStr) {
          var jsonObj = JSON.parse(jsonStr);
          var cipherParams = CryptoES.lib.CipherParams.create({
            ciphertext: CryptoES.enc.Base64.parse(jsonObj.ct)
          });
          if (jsonObj.iv) {
            cipherParams.iv = CryptoES.enc.Hex.parse(jsonObj.iv);
          }
          if (jsonObj.s) {
            cipherParams.salt = CryptoES.enc.Hex.parse(jsonObj.s);
          }
          return cipherParams;
        }
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GFSingleClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GFSingleClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GFSingleClass = module.GFSingleClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7bf46HwyqxE4a0BDEAdjgZM", "EventManager", undefined);
      var TAG = 'EventManager';
      var EventManager = /*#__PURE__*/function (_GFSingleClass) {
        _inheritsLoose(EventManager, _GFSingleClass);
        function EventManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GFSingleClass.call.apply(_GFSingleClass, [this].concat(args)) || this;
          _this.listeners = {};
          return _this;
        }
        EventManager.ins = function ins() {
          return _GFSingleClass.ins.call(this);
        }

        /**
         * @Description: 发送订阅消息
         * @Date: 2024-04-21 13:12:11
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} eventName
         * @param {array} params
         * @return {*}
         */;
        var _proto = EventManager.prototype;
        _proto.emit = function emit(eventName) {
          var cbs = this.listeners["" + eventName];
          if (!cbs) {
            return;
          }
          for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            params[_key2 - 1] = arguments[_key2];
          }
          for (var i = 0, len = cbs.length; i < len; i += 2) {
            var cb = cbs[i];
            var host = cbs[i + 1];
            cb.call.apply(cb, [host].concat(params));
          }
        }

        /**
         * @Description:监听事件订阅消息 
         * @Date: 2024-04-21 13:12:21
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} eventName
         * @param {Function} cb
         * @param {any} host
         * @param {*} callNow
         * @param {array} params
         * @return {*}
         */;
        _proto.on = function on(eventName, cb, host, callNow) {
          if (host === void 0) {
            host = null;
          }
          if (callNow === void 0) {
            callNow = false;
          }
          var cbs = this.listeners["" + eventName];
          if (!cbs) {
            this.listeners[eventName] = cbs = [];
          }
          cbs.push(cb, host);
          if (callNow) {
            for (var _len3 = arguments.length, params = new Array(_len3 > 4 ? _len3 - 4 : 0), _key3 = 4; _key3 < _len3; _key3++) {
              params[_key3 - 4] = arguments[_key3];
            }
            cb.call.apply(cb, [host].concat(params));
          }
        }

        /**
         * @Description: 移除对应事件订阅
         * @Date: 2024-04-21 13:12:32
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} eventName
         * @param {Function} cb
         * @return {*}
         */;
        _proto.off = function off(eventName, cb) {
          var cbs = this.listeners["" + eventName];
          if (!cbs) {
            return;
          }
          var index = cbs.indexOf(cb);
          if (index < 0) {
            console.warn(TAG, "EventManager remove " + eventName + " ,but cb not exit");
          }
          cbs.splice(index, 2);
        }

        /**
         * @Description: 移除所有的事件订阅消息
         * @Date: 2024-04-21 13:12:43
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.removeAll = function removeAll() {
          for (var key in this.listeners) {
            this.listeners[key].length = 0;
          }
          this.listeners = {};
        };
        return EventManager;
      }(GFSingleClass);
      var eventMgr = exports('eventMgr', EventManager.ins());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './NetGameServer.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts', './GameData.ts', './GamePlayerData.ts', './UserMgr.ts', './GameResPath.ts', './LoaderManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, assetManager, JsonAsset, GameMgr, gameNet, SubGameDef, SubGameMgr, ModuleDef, gameData, GamePlayerData, UserMgr, GameResPath, loaderMgr;
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
      JsonAsset = module.JsonAsset;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GamePlayerData = module.GamePlayerData;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      GameResPath = module.GameResPath;
    }, function (module) {
      loaderMgr = module.loaderMgr;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "f12931f9u1AH51sag+FpVLr", "FishGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishGameMgr = exports('FishGameMgr', (_dec = ccclass('FishGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(FishGameMgr, _GameMgr);
        function FishGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._fishList = void 0;
          //鱼
          _this._fishGroup = void 0;
          _this._getData = void 0;
          _this._bulletList = void 0;
          _this._lastBulletId = void 0;
          //从服务器获取的配置信息
          _this.fishConfig = void 0;
          _this._gameType = SubGameDef.FISH_MASTER;
          //this._entryScene = { name: 'loading_fish', bundle: ModuleDef.FISH };
          _this._gameScene = {
            name: 'game_fish',
            bundle: ModuleDef.FISH
          };
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          return _this;
        }
        var _proto = FishGameMgr.prototype;
        _proto.init = function init() {
          this._fishList = [];
          this._bulletList = [];
          this._lastBulletId = 0;
          gameNet.listenMsg("fish/NewFish", this.onNet_NewFish, this);
          gameNet.listenMsg("fish/RoomFish", this.onNet_RoomFish, this);
          gameNet.listenMsg("fish/FishWave", this.onNet_FishWave, this);
          gameNet.listenMsg("fish/NewFishGroup", this.onNet_FishGroup, this);
        };
        _proto.uinit = function uinit() {
          this._getData = false;
          gameNet.unlistenMsgAllByThis(this);
        }
        /**获取数据 获取过数据后 清空 为了场景没加载好，漏掉消息*/;
        _proto.getInitData = function getInitData() {
          this._getData = true;
          var result = [this._fishList, this._fishGroup, this._bulletList, this._lastBulletId];
          return result;
        };
        _proto.onNet_NewFish = function onNet_NewFish(msg) {
          if (this._getData) {
            return;
          }
          this._fishList.push(msg);
        };
        _proto.onNet_RoomFish = function onNet_RoomFish(msg) {
          if (this._getData) {
            return;
          }
          for (var i = 0; i < msg.fishes.length; i++) {
            this.onNet_NewFish(msg.fishes[i]);
          }
          if (msg.bullets) {
            for (var j = 0; j < msg.bullets.length; j++) {
              this._bulletList.push(msg.bullets[j]);
            }
          }
          if (msg.lastBulletId) {
            this._lastBulletId = Number(msg.lastBulletId);
          }
        };
        _proto.onNet_FishWave = function onNet_FishWave(msg) {
          if (this._getData) {
            return;
          }
          this._fishGroup = null;
          this._fishList = [];
        };
        _proto.onNet_FishGroup = function onNet_FishGroup(msg) {
          if (this._getData) {
            return;
          }
          this._fishGroup = msg;
        }
        /**
         * 加载资源
         */;
        _proto.preLoadRes = /*#__PURE__*/
        function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(processFun) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.loadResource(processFun);
                case 2:
                  _context.next = 4;
                  return this.preLoadGameScene(processFun);
                case 4:
                  processFun(1);
                  return _context.abrupt("return", true);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function preLoadRes(_x) {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }();
        _proto.preLoadGameScene = /*#__PURE__*/function () {
          var _preLoadGameScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(processFun) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    var bundle = assetManager.getBundle(ModuleDef.FISH);
                    if (bundle) {
                      bundle.preloadScene(SubGameMgr.gameMgr.gameScene.name, null, function () {
                        resolve(true);
                      }.bind(_this2)); //7
                    } else {
                      resolve(false);
                    }
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function preLoadGameScene(_x2) {
            return _preLoadGameScene.apply(this, arguments);
          }
          return preLoadGameScene;
        }();
        _proto.loadResource = /*#__PURE__*/function () {
          var _loadResource = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(processFun) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    var cfgsPathArr = [GameResPath.dataConfigsPath.cannonCfgs, GameResPath.dataConfigsPath.fishCfgs, GameResPath.dataConfigsPath.shopCfgs, GameResPath.dataConfigsPath.traceCfgs, GameResPath.dataConfigsPath.themeCfgs];
                    var curCount = 0;
                    var _loop = function _loop() {
                      var pathName = cfgsPathArr[i];
                      loaderMgr.loadGameRes(GameResPath.getLocalDataCfgPath(pathName), JsonAsset).then(function (jsonAsset) {
                        if (pathName == GameResPath.dataConfigsPath.cannonCfgs) {
                          gameData.cannonConfigsObjArr = jsonAsset.json;
                        } else if (pathName == GameResPath.dataConfigsPath.fishCfgs) {
                          gameData.fishConfigsObjArr = jsonAsset.json;
                        } else if (pathName == GameResPath.dataConfigsPath.shopCfgs) {
                          gameData.shopConfigsObjArr = jsonAsset.json;
                        } else if (pathName == GameResPath.dataConfigsPath.traceCfgs) {
                          gameData.parseTracePostionToArr(jsonAsset.json);
                        } else if (pathName == GameResPath.dataConfigsPath.themeCfgs) {
                          gameData.parseThemeCfgObjToArr(jsonAsset.json);
                        }
                        curCount++;
                        if (processFun) {
                          processFun(curCount / (cfgsPathArr.length + 1));
                        }
                        if (curCount >= cfgsPathArr.length) {
                          _this3.resReady();
                          resolve(true);
                        }
                      })["catch"](function (err) {
                        console.error("loading <_initUIData> err : " + err);
                        reject(false);
                      });
                    };
                    for (var i = 0; i < cfgsPathArr.length; i++) {
                      _loop();
                    }
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadResource(_x3) {
            return _loadResource.apply(this, arguments);
          }
          return loadResource;
        }();
        _proto.resReady = function resReady() {
          if (gameData.isLocalDebug) {
            gameData.isOnlineLogin = true;
            gameData.isWSConnected = true;
            var player = new GamePlayerData();
            player.uid = "test";
            player.uuid = "test";
            player.password = "test";
            player.uname = "test";
            player.normalUName = "test";
            player.score_num = 0;
            player.silver_num = 10000;
            player.gold_num = UserMgr.inst.coin;
            player.level = 10;
            gameData.curPlayerData = player;
            gameData.updateLocalCacheUserInfo(); //test
          }
        }

        /**
         * 请求服务器配置
         * @returns 
         */;
        _proto.requestFishConfig = /*#__PURE__*/
        function () {
          var _requestFishConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var cfg;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return gameNet.callApi("fish/FishConfig", {});
                case 2:
                  cfg = _context4.sent;
                  this.fishConfig = cfg.isSucc ? cfg.res : null;
                  return _context4.abrupt("return", true);
                case 5:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function requestFishConfig() {
            return _requestFishConfig.apply(this, arguments);
          }
          return requestFishConfig;
        }()
        /** 
         * 获取子弹的金币消耗
        */;

        _proto.getBulletCoin = function getBulletCoin(bulletLev) {
          if (this.fishConfig) {
            for (var i = 0; i < this.fishConfig.bullets.length; i++) {
              if (this.fishConfig.bullets[i].bulletLevel == bulletLev) {
                return this.fishConfig.bullets[i].needGolds;
              }
            }
          }
          return -1;
        };
        _createClass(FishGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new FishGameMgr();
            }
            return this._inst;
          }
        }]);
        return FishGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(FishGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst2.ts', './GameData.ts', './GameUtils.ts', './LoaderManager.ts', './GameResPath.ts', './GameEvents.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, view, Vec3, SpriteFrame, Sprite, Tween, UITransform, BoxCollider2D, Animation, Vec2, director, Size, Component, FishLifeState, gameData, GameUtils, loaderMgr, GameResPath, GameEvents;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      Vec3 = module.Vec3;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Tween = module.Tween;
      UITransform = module.UITransform;
      BoxCollider2D = module.BoxCollider2D;
      Animation = module.Animation;
      Vec2 = module.Vec2;
      director = module.director;
      Size = module.Size;
      Component = module.Component;
    }, function (module) {
      FishLifeState = module.FishLifeState;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      loaderMgr = module.loaderMgr;
    }, function (module) {
      GameResPath = module.GameResPath;
    }, function (module) {
      GameEvents = module.GameEvents;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8c7f2zfE25MSqdFMv68PVhu", "FishItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TAG = 'FishItem';
      var FishItem = exports('FishItem', (_dec = ccclass('FishItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishItem, _Component);
        function FishItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //当前鱼类的血条值
          _this._curHPValue = 10;
          //当前鱼的状态
          _this._curFishLifeState = FishLifeState.FLS_WaitReBirth;
          //保存上一次移动坐标,用于更新鱼角度
          _this._lastPosition = Vec3.ZERO;
          //当前鱼身上的属性配置
          _this._curFishCfgObj = null;
          _this._curFishTypeName = "";
          _this._curVisibleSize = new Size(960, 640);
          _this._curFishParentNode = null;
          _this._curFishTypeGroup = void 0;
          _this._fishScalValue = 1;
          _this._fishBaseSwimSpeed = 20;
          _this._fishID = 0;
          return _this;
        }
        var _proto = FishItem.prototype;
        _proto.start = function start() {};
        /**
         * @Description: 初始化生成鱼类
         * @Date: 2024-06-13 17:28:29
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} parentNode
         * @param {string} fishTypeName
         * @return {*}
         */
        _proto.initFishWithData = function initFishWithData(parentNode, fishID, fishGroupType) {
          var _this2 = this;
          this._fishID = fishID;
          this._curFishTypeGroup = fishGroupType;
          if (!parentNode) {
            return;
          }
          this.node.setScale(this._fishScalValue, this._fishScalValue);
          this._curFishParentNode = parentNode;
          var fishCgsLen = gameData.fishConfigsObjArr.length;
          if (fishCgsLen <= 0) {
            return;
          }
          //fishCgsLen = gameData.curPlayerData.lock_fishtype.length;
          // if (fishGroupType == FishTypeGroup.FTC_NormalFish) {
          //     //随机生成普通鱼类
          //     // let randomFishIndex = GameUtils.recursionRandomFunc(fishCgsLen, [9, 10]);
          //     //过滤掉蓝鲨和金鲨
          //     let filterNewTypeArr = gameData.curPlayerData.lock_fishtype.filter((type) => {
          //         if (type != 10 && type != 11) {
          //             return true;
          //         }
          //         return false;
          //     });
          //     let randomFishIndex = Math.floor(Math.random() * filterNewTypeArr.length);
          //     // console.log(TAG, `filterNewTypeArr: ${filterNewTypeArr}  , randomFishIndex: ${randomFishIndex}`);
          //     let type = gameData.curPlayerData.lock_fishtype[randomFishIndex];//1-11类型
          //     this._curFishCfgObj = gameData.fishConfigsObjArr[(type - 1)];
          // } else {
          //     //随机生成鲨鱼
          //     let fishTypeName = gameData.getSharkTypeNameByGroupType(fishGroupType);
          //     this._curFishCfgObj = gameData.getFishConfigObjByFishTypeName(fishTypeName);
          // }

          // let type = gameData.curPlayerData.lock_fishtype[fishGroupType-1];//1-11类型
          this._curFishCfgObj = gameData.fishConfigsObjArr[fishGroupType - 1];
          if (!this._curFishCfgObj) {
            return;
          }
          this._fishBaseSwimSpeed = this.curFishCfgObj.speed;
          this._fishScalValue = this.curFishCfgObj.scale;
          this._curFishTypeName = this._curFishCfgObj.fishType;
          this._curHPValue = this.curFishCfgObj.hp;
          this._curFishLifeState = FishLifeState.FLS_Alive;
          //随机初始位置相关逻辑
          this._curVisibleSize = view.getVisibleSize();
          var randomPos = new Vec3(-Math.random() * 20 - 80 - this._curVisibleSize.width / 2, Math.random() - 0.5 * 2 * 300 + this._curVisibleSize.height / 2);
          this.node.position = randomPos;
          //随机取出鱼要出现的位置
          var bezierIndex = Math.floor(Math.random() * gameData.traceConfigsObjArr.length);
          var bezierPathArr = gameData.traceConfigsObjArr[bezierIndex];
          var startPos = bezierPathArr[0];
          //弧度和角度转换
          var degreeValue = Math.atan(startPos.y / startPos.x);
          this.node.angle = -degreeValue * 180 / Math.PI;
          this.node.active = false;
          //console.log(TAG, `fishTypeName: ${this._curFishTypeName}`);
          loaderMgr.loadGameRes(GameResPath.getFishSpFramePath(this._curFishTypeName, true), SpriteFrame).then(function (spriteFrame) {
            var spComp = _this2.node.getComponent(Sprite);
            if (spComp) {
              _this2.node.setScale(_this2._fishScalValue, _this2._fishScalValue);
              spComp.spriteFrame = spriteFrame;
              _this2._updateCurNodeBoxCollider(_this2.node);
              _this2.scheduleOnce(function () {
                _this2.node.active = true;
                _this2.playSwimmingAction();
              }, 1);
              _this2.node.parent = _this2._curFishParentNode;
              _this2._lastPosition = _this2.node.position;
              _this2.playFishSwimmingBezierAction(bezierPathArr);
            }
          })["catch"](function (err) {
            console.error(TAG, "<initFishWithData> err : " + err);
          });
        }

        /**
         * @Description: 游动动画
         * @Date: 2024-06-13 21:16:44
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.playSwimmingAction = function playSwimmingAction() {
          this._playSwimmingActoin(this._curFishTypeName, FishLifeState.FLS_Alive);
        }

        /**
         * @Description:死亡动画 
         * @Date: 2024-06-13 21:16:51
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.playDieAction = function playDieAction() {
          this._playSwimmingActoin(this._curFishTypeName, FishLifeState.FLS_Dead);
        }

        /**
         * @Description: 让鱼沿着贝塞尔曲线游动
         * @Date: 2024-06-13 21:38:05
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Vec3} bezierTracePathArr
         * @return {*}
         */;
        _proto.playFishSwimmingBezierAction = function playFishSwimmingBezierAction(bezierTracePathArr) {
          if (!this.node || bezierTracePathArr.length < 3) {
            return;
          }
          Tween.stopAllByTarget(this.node);
          // let speed = Math.random() * 10 + 20;
          var speed = Math.random() * 6 + this._fishBaseSwimSpeed;
          GameUtils.qtCustomBezierToAction(this.node, speed, bezierTracePathArr[0], bezierTracePathArr[1], bezierTracePathArr[2], "quadIn", {
            onComplete: function onComplete(target) {}
          }, this._fishScalValue).start();
        }

        /**
         * @Description: 更新设置boxCollider的size
         * @Date: 2024-06-13 18:24:36
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} fishNode
         * @return {*}
         */;
        _proto._updateCurNodeBoxCollider = function _updateCurNodeBoxCollider(fishNode) {
          if (!this.node || !fishNode) {
            return;
          }
          var fishAniNodeUITrans = fishNode.getComponent(UITransform);
          if (fishAniNodeUITrans) {
            var curBoxColliderComp = this.node.getComponent(BoxCollider2D);
            if (curBoxColliderComp) {
              curBoxColliderComp.size = fishAniNodeUITrans.contentSize;
            }
          }
        }

        /**
         * @Description: 播放鱼的游动和死亡动画
         * @Date: 2024-06-13 21:12:42
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} fishTypeName
         * @param {FishLifeState} fishLifeState
         * @return {*}
         */;
        _proto._playSwimmingActoin = function _playSwimmingActoin(fishTypeName, fishLifeState) {
          var fishAniComp = this.node.getComponent(Animation);
          if (fishAniComp) {
            fishAniComp.stop();
            if (fishLifeState === FishLifeState.FLS_Alive) {
              fishAniComp.play(fishTypeName + "_run");
            } else if (fishLifeState === FishLifeState.FLS_Dead) {
              fishAniComp.play(fishTypeName + "_dead");
              fishAniComp.on(Animation.EventType.FINISHED, this._onFishAnimationFinishCallback, this);
            }
          }
        }

        /**
         * @Description: 播放放死亡动画结束监听
         * @Date: 2024-06-13 21:14:32
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Animation} type
         * @param {AnimationState} state
         * @return {*}
         */;
        _proto._onFishAnimationFinishCallback = function _onFishAnimationFinishCallback(type, state) {
          this._removeDestroyNode();
        }

        /**
         * @Description: 实时更新鱼的角度
         * @Date: 2024-06-13 21:49:21
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._updateFishDegree = function _updateFishDegree() {
          if (!this.node) {
            return;
          }
          var currentPos = this.node.position;
          var tartgetPos = this._lastPosition;
          var dx = tartgetPos.x - currentPos.x;
          var dy = tartgetPos.x - currentPos.y;
          var dir = new Vec2(dx, dy);
          var angle = dir.signAngle(new Vec2(1, 0));
          this.node.angle = angle;
          this._lastPosition = currentPos;
        };
        _proto._checkFishIsAlive = function _checkFishIsAlive() {
          if (this._curFishLifeState === FishLifeState.FLS_Alive) {
            return true;
          }
          return false;
        };
        _proto._checkFishIsDie = function _checkFishIsDie() {
          if (this._curFishLifeState === FishLifeState.FLS_Dead) {
            return true;
          }
          return false;
        };
        _proto._destroyRecyclingFish = function _destroyRecyclingFish() {
          if (!this.node) {
            return;
          }
          var posX = this.node.position.x;
          var posY = this.node.position.y;
          if (posX > this._curVisibleSize.width / 2 + 150 || posX < -this._curVisibleSize.width / 2 - 900 || posY > this._curVisibleSize.height / 2 + 100 || posY < -this._curVisibleSize.height / 2 - 100) {
            // console.log(TAG, `<_destroyRecyclingFish>`);
            this._removeDestroyNode();
          }
        };
        _proto._removeDestroyNode = function _removeDestroyNode() {
          if (!this.node) {
            return;
          }
          if (!this.node.active) {
            return;
          }
          director.emit(GameEvents.UI_FishRemove, {
            id: this.fishID
          });
          Tween.stopAllByTarget(this.node);
          this.node.active = false;
          var spComp = this.node.getComponent(Sprite);
          if (spComp) {
            spComp.spriteFrame = null;
          }
          this.node.removeFromParent();
          this.node.parent = null;
          this.node.setScale(this._fishScalValue, this._fishScalValue);
          // FishNodePool.put(this.node);
          this.node.destroy();
        };
        _proto.update = function update(deltaTime) {
          if (this._checkFishIsAlive()) {
            this._updateFishDegree();
            this._destroyRecyclingFish();
          } else {
            if (this._checkFishIsDie()) {
              this._curFishLifeState = FishLifeState.FLS_WaitReBirth;
              Tween.stopAllByTarget(this.node);
              this.playDieAction();
              //TODO 执行播放计分、飞金币等逻辑
            }
          }
        };

        _createClass(FishItem, [{
          key: "fishID",
          get: function get() {
            return this._fishID;
          }
        }, {
          key: "curFishCfgObj",
          get: function get() {
            return this._curFishCfgObj;
          }
        }, {
          key: "curFishTypeGroup",
          get: function get() {
            return this._curFishTypeGroup;
          }
        }, {
          key: "curFishLifeState",
          get: function get() {
            return this._curFishLifeState;
          },
          set: function set(value) {
            this._curFishLifeState = value;
          }
        }, {
          key: "curHPValue",
          get: function get() {
            return this._curHPValue;
          },
          set: function set(value) {
            this._curHPValue = value;
          }
        }]);
        return FishItem;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishItemCollider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst2.ts', './FishItem.ts', './BulletItem.ts', './GameEvents.ts', './BulletNodePool.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, director, Component, GameColliderTags, FishLifeState, FishTypeGroup, FishItem, BulletItem, GameEvents, BulletNodePool;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      GameColliderTags = module.GameColliderTags;
      FishLifeState = module.FishLifeState;
      FishTypeGroup = module.FishTypeGroup;
    }, function (module) {
      FishItem = module.FishItem;
    }, function (module) {
      BulletItem = module.BulletItem;
    }, function (module) {
      GameEvents = module.GameEvents;
    }, function (module) {
      BulletNodePool = module.BulletNodePool;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d321fkxftdNap9gkGRPIKM/", "FishItemCollider", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishItemCollider = exports('FishItemCollider', (_dec = ccclass('FishItemCollider'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishItemCollider, _Component);
        function FishItemCollider() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = FishItemCollider.prototype;
        _proto.start = function start() {
          var collider = this.node.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (selfCollider.tag == GameColliderTags.GCT_Fish) {
            if (otherCollider.tag == GameColliderTags.GCT_Bullet1 || otherCollider.tag == GameColliderTags.GCT_Bullet2 || otherCollider.tag == GameColliderTags.GCT_Bullet3 || otherCollider.tag == GameColliderTags.GCT_Bullet4 || otherCollider.tag == GameColliderTags.GCT_Bullet5 || otherCollider.tag == GameColliderTags.GCT_Bullet6 || otherCollider.tag == GameColliderTags.GCT_Bullet7) {
              var fishItemComp = selfCollider.node.getComponent(FishItem);
              var curBulletComp = otherCollider.node.parent.getComponent(BulletItem);
              if (fishItemComp && curBulletComp) {
                if (fishItemComp.curFishLifeState == FishLifeState.FLS_Alive) {
                  //改走服务器
                  //let bulletHurtHp = gameData.getWeaponHurtHpByWeaponLevelType(curBulletComp.curWeaponLevelType);
                  // //子弹每打中鱼一次就减一次hp
                  // fishItemComp.curHPValue -= bulletHurtHp;
                  // if (fishItemComp.curHPValue <= 0) {
                  //     fishItemComp.curFishLifeState = FishLifeState.FLS_Dead;
                  //     //执行播放计分、飞金币等逻辑
                  //     //打死一条鱼可以获得的金币或者银币数
                  //     let getCoinNum: number = fishItemComp.curFishCfgObj.golds;
                  //     let fishPos = fishItemComp.node.position;
                  //     let isShowGold: boolean = ((fishItemComp.curFishTypeGroup == FishTypeGroup.FTC_NormalFish) ? false : true);
                  //     director.emit(GameEvents.UI_FlyCoinsScoreAni, { position: fishPos, getGoldsNum: getCoinNum, isShowGold: isShowGold });
                  // }
                  //删除子弹

                  var isSharkFish = fishItemComp.curFishTypeGroup == FishTypeGroup.FTC_NormalFish ? false : true;
                  director.emit(GameEvents.UI_BulletHitFishCastNet, {
                    angle: -curBulletComp.node.angle,
                    position: curBulletComp.node.position,
                    weaponLevelType: curBulletComp.curWeaponLevelType,
                    bullet: curBulletComp,
                    isSharkFish: isSharkFish,
                    fish: fishItemComp
                  });
                  curBulletComp.node.active = false;
                  curBulletComp.node.removeFromParent();
                  curBulletComp.node.parent = null;
                  BulletNodePool.put(curBulletComp.node);
                  // curBulletComp.node.destroy();
                }
              }
            }
          }
        };

        _proto.update = function update(deltaTime) {};
        return FishItemCollider;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishNodePool.ts", ['cc'], function (exports) {
  var cclegacy, NodePool, instantiate, Tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0806dntxFRCnoYtNEbwIQdl", "FishNodePool", undefined);
      var FishNodePool = exports('FishNodePool', /*#__PURE__*/function () {
        function FishNodePool() {}
        /**
         * @Description: 首次初始化一定数量的节点备用
         * @Date: 2024-06-13 22:53:58
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Prefab} prefab
         * @return {*}
         */
        FishNodePool.preInitPool = function preInitPool(prefab) {
          if (prefab === void 0) {
            prefab = null;
          }
          if (!prefab) {
            return;
          }
          for (var i = 0; i < 20; i++) {
            var node = null;
            if (prefab) {
              node = instantiate(prefab);
            }
            this.put(node);
          }
        }

        /**
         * @Description: 从节点池取出node
         * @Date: 2024-06-13 22:53:44
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} prefabNode
         * @return {*}
         */;
        FishNodePool.get = function get(prefabNode) {
          var node = null;
          if (this._nodePool.size() > 0) {
            node = this._nodePool.get();
          } else {
            node = instantiate(prefabNode);
          }
          node.active = true;
          return node;
        }

        /**
         * @Description: 移除对象重新放入到节点池等待使用
         * @Date: 2024-06-13 22:53:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} node
         * @return {*}
         */;
        FishNodePool.put = function put(node) {
          if (!node) {
            return;
          }
          Tween.stopAllByTarget(node);
          node.active = false;
          node.parent = null;
          this._nodePool.put(node);
        }

        /**
         * @Description: 清空对象池
         * @Date: 2024-06-13 22:53:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        FishNodePool.clearNodePool = function clearNodePool() {
          this._nodePool.clear();
        };
        return FishNodePool;
      }());
      FishNodePool._nodePool = new NodePool();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlyCoinNodePool.ts", ['cc'], function (exports) {
  var cclegacy, NodePool, instantiate, Tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "da89f24WIhKFLLXOMEHSdyH", "FlyCoinNodePool", undefined);
      var FlyCoinNodePool = exports('FlyCoinNodePool', /*#__PURE__*/function () {
        function FlyCoinNodePool() {}
        /**
         * @Description: 首次初始化一定数量的节点备用
         * @Date: 2024-06-13 22:53:58
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Prefab} prefab
         * @return {*}
         */
        FlyCoinNodePool.preInitPool = function preInitPool(prefab) {
          if (prefab === void 0) {
            prefab = null;
          }
          if (!prefab) {
            return;
          }
          for (var i = 0; i < 10; i++) {
            var node = null;
            if (prefab) {
              node = instantiate(prefab);
            }
            this.put(node);
          }
        }

        /**
         * @Description: 从节点池取出node
         * @Date: 2024-06-13 22:53:44
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} prefabNode
         * @return {*}
         */;
        FlyCoinNodePool.get = function get(prefabNode) {
          var node = null;
          if (this._nodePool.size() > 0) {
            node = this._nodePool.get();
          } else {
            node = instantiate(prefabNode);
          }
          node.active = true;
          return node;
        }

        /**
         * @Description: 移除对象重新放入到节点池等待使用
         * @Date: 2024-06-13 22:53:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} node
         * @return {*}
         */;
        FlyCoinNodePool.put = function put(node) {
          if (!node) {
            return;
          }
          Tween.stopAllByTarget(node);
          node.active = false;
          this._nodePool.put(node);
        }

        /**
         * @Description: 清空对象池
         * @Date: 2024-06-13 22:53:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        FlyCoinNodePool.clearNodePool = function clearNodePool() {
          this._nodePool.clear();
        };
        return FlyCoinNodePool;
      }());
      FlyCoinNodePool._nodePool = new NodePool();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlyCoinsItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Animation, Label, Component;
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
      Animation = module.Animation;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "e33e8yTXiZFppDw9vr6Ylhb", "FlyCoinsItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FlyCoinsItem = exports('FlyCoinsItem', (_dec = ccclass('FlyCoinsItem'), _dec2 = property(Node), _dec3 = property(Animation), _dec4 = property(Animation), _dec5 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlyCoinsItem, _Component);
        function FlyCoinsItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinGoldAni", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinSilverAni", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinNumLabel", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FlyCoinsItem.prototype;
        _proto.start = function start() {};
        _proto.initFlyCoinWithData = function initFlyCoinWithData(coinNum, isShowGold) {
          var _this2 = this;
          if (isShowGold === void 0) {
            isShowGold = true;
          }
          if (!this.aniNode) {
            return;
          }
          if (this.coinGoldAni) {
            this.coinGoldAni.node.active = isShowGold;
          }
          if (this.coinSilverAni) {
            this.coinSilverAni.node.active = !isShowGold;
          }
          this.scheduleOnce(function () {
            if (_this2.coinGoldAni) {
              if (isShowGold) {
                _this2.coinGoldAni.play();
              }
            }
            if (_this2.coinSilverAni) {
              if (!isShowGold) {
                _this2.coinSilverAni.play();
              }
            }
          }, 0.1);
          if (this.coinNumLabel) {
            this.coinNumLabel.string = "+" + coinNum;
          }
        };
        _proto.update = function update(deltaTime) {};
        return FlyCoinsItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinGoldAni", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coinSilverAni", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "coinNumLabel", [_dec5], {
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

System.register("chunks:///_virtual/FlyGoldNodePool.ts", ['cc'], function (exports) {
  var cclegacy, NodePool, instantiate, Tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0ca93o3cElEdLBGXkA510Hc", "FlyGoldNodePool", undefined);
      var FlyGoldNodePool = exports('FlyGoldNodePool', /*#__PURE__*/function () {
        function FlyGoldNodePool() {}
        /**
         * @Description: 首次初始化一定数量的节点备用
         * @Date: 2024-06-13 22:53:58
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Prefab} prefab
         * @return {*}
         */
        FlyGoldNodePool.preInitPool = function preInitPool(prefab) {
          if (prefab === void 0) {
            prefab = null;
          }
          if (!prefab) {
            return;
          }
          for (var i = 0; i < 10; i++) {
            var node = null;
            if (prefab) {
              node = instantiate(prefab);
            }
            this.put(node);
          }
        }

        /**
         * @Description: 从节点池取出node
         * @Date: 2024-06-13 22:53:44
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} prefabNode
         * @return {*}
         */;
        FlyGoldNodePool.get = function get(prefabNode) {
          var node = null;
          if (this._nodePool.size() > 0) {
            node = this._nodePool.get();
          } else {
            node = instantiate(prefabNode);
          }
          node.active = true;
          return node;
        }

        /**
         * @Description: 移除对象重新放入到节点池等待使用
         * @Date: 2024-06-13 22:53:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} node
         * @return {*}
         */;
        FlyGoldNodePool.put = function put(node) {
          if (!node) {
            return;
          }
          Tween.stopAllByTarget(node);
          node.active = false;
          this._nodePool.put(node);
        }

        /**
         * @Description: 清空对象池
         * @Date: 2024-06-13 22:53:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        FlyGoldNodePool.clearNodePool = function clearNodePool() {
          this._nodePool.clear();
        };
        return FlyGoldNodePool;
      }());
      FlyGoldNodePool._nodePool = new NodePool();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySilverNodePool.ts", ['cc'], function (exports) {
  var cclegacy, NodePool, instantiate, Tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4a463cFQe9I5ZFGfhfXmMm0", "FlySilverNodePool", undefined);
      var FlySilverNodePool = exports('FlySilverNodePool', /*#__PURE__*/function () {
        function FlySilverNodePool() {}
        /**
         * @Description: 首次初始化一定数量的节点备用
         * @Date: 2024-06-13 22:53:58
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Prefab} prefab
         * @return {*}
         */
        FlySilverNodePool.preInitPool = function preInitPool(prefab) {
          if (prefab === void 0) {
            prefab = null;
          }
          if (!prefab) {
            return;
          }
          for (var i = 0; i < 10; i++) {
            var node = null;
            if (prefab) {
              node = instantiate(prefab);
            }
            this.put(node);
          }
        }

        /**
         * @Description: 从节点池取出node
         * @Date: 2024-06-13 22:53:44
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} prefabNode
         * @return {*}
         */;
        FlySilverNodePool.get = function get(prefabNode) {
          var node = null;
          if (this._nodePool.size() > 0) {
            node = this._nodePool.get();
          } else {
            node = instantiate(prefabNode);
          }
          node.active = true;
          return node;
        }

        /**
         * @Description: 移除对象重新放入到节点池等待使用
         * @Date: 2024-06-13 22:53:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} node
         * @return {*}
         */;
        FlySilverNodePool.put = function put(node) {
          if (!node) {
            return;
          }
          Tween.stopAllByTarget(node);
          node.active = false;
          this._nodePool.put(node);
        }

        /**
         * @Description: 清空对象池
         * @Date: 2024-06-13 22:53:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        FlySilverNodePool.clearNodePool = function clearNodePool() {
          this._nodePool.clear();
        };
        return FlySilverNodePool;
      }());
      FlySilverNodePool._nodePool = new NodePool();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConst2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6db430tygpMqJJhiChwf7OO", "GameConst", undefined);
      /*
       * @Description: 游戏涉及常量类
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-10 09:13:22
       * @LastEditTime: 2024-06-17 16:08:40
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/game/common/GameConst.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */

      var NetCodeConst = exports('NetCodeConst', /*#__PURE__*/function (NetCodeConst) {
        NetCodeConst[NetCodeConst["CommonErrorCode"] = -1] = "CommonErrorCode";
        NetCodeConst[NetCodeConst["CommonSuccessCode"] = 1] = "CommonSuccessCode";
        NetCodeConst[NetCodeConst["LoginSuccess"] = 100] = "LoginSuccess";
        NetCodeConst[NetCodeConst["RegisterSuccess"] = 101] = "RegisterSuccess";
        NetCodeConst[NetCodeConst["UpdateUserInfoSuccess"] = 102] = "UpdateUserInfoSuccess";
        NetCodeConst[NetCodeConst["QueryUserInfoSuccess"] = 103] = "QueryUserInfoSuccess";
        NetCodeConst[NetCodeConst["ParamsError"] = 1000] = "ParamsError";
        NetCodeConst[NetCodeConst["SqlError"] = 1001] = "SqlError";
        NetCodeConst[NetCodeConst["AccountExistError"] = 1002] = "AccountExistError";
        NetCodeConst[NetCodeConst["AccountIsNotExistError"] = 1003] = "AccountIsNotExistError";
        NetCodeConst[NetCodeConst["UserNameOrPasswordError"] = 1004] = "UserNameOrPasswordError";
        return NetCodeConst;
      }({}));
      var GameLocalDBKey = exports('GameLocalDBKey', {
        GLC_UserInfo: "GLC_UserInfo"
      });
      var GameCannonChangeCmd = exports('GameCannonChangeCmd', /*#__PURE__*/function (GameCannonChangeCmd) {
        GameCannonChangeCmd["GCC_Add"] = "add";
        GameCannonChangeCmd["GCC_Sub"] = "sub";
        return GameCannonChangeCmd;
      }({}));
      var GameWeaponLevelType = exports('GameWeaponLevelType', /*#__PURE__*/function (GameWeaponLevelType) {
        GameWeaponLevelType[GameWeaponLevelType["GWL_LevelType01"] = 1] = "GWL_LevelType01";
        GameWeaponLevelType[GameWeaponLevelType["GWL_LevelType02"] = 2] = "GWL_LevelType02";
        GameWeaponLevelType[GameWeaponLevelType["GWL_LevelType03"] = 3] = "GWL_LevelType03";
        GameWeaponLevelType[GameWeaponLevelType["GWL_LevelType04"] = 4] = "GWL_LevelType04";
        GameWeaponLevelType[GameWeaponLevelType["GWL_LevelType05"] = 5] = "GWL_LevelType05";
        GameWeaponLevelType[GameWeaponLevelType["GWL_LevelType06"] = 6] = "GWL_LevelType06";
        GameWeaponLevelType[GameWeaponLevelType["GWL_LevelType07"] = 7] = "GWL_LevelType07";
        return GameWeaponLevelType;
      }({}));
      var GameColliderTags = exports('GameColliderTags', /*#__PURE__*/function (GameColliderTags) {
        GameColliderTags[GameColliderTags["GCT_Bullet1"] = 101] = "GCT_Bullet1";
        GameColliderTags[GameColliderTags["GCT_Bullet2"] = 102] = "GCT_Bullet2";
        GameColliderTags[GameColliderTags["GCT_Bullet3"] = 103] = "GCT_Bullet3";
        GameColliderTags[GameColliderTags["GCT_Bullet4"] = 104] = "GCT_Bullet4";
        GameColliderTags[GameColliderTags["GCT_Bullet5"] = 105] = "GCT_Bullet5";
        GameColliderTags[GameColliderTags["GCT_Bullet6"] = 106] = "GCT_Bullet6";
        GameColliderTags[GameColliderTags["GCT_Bullet7"] = 107] = "GCT_Bullet7";
        GameColliderTags[GameColliderTags["GCT_Net1"] = 201] = "GCT_Net1";
        GameColliderTags[GameColliderTags["GCT_Net2"] = 202] = "GCT_Net2";
        GameColliderTags[GameColliderTags["GCT_Net3"] = 203] = "GCT_Net3";
        GameColliderTags[GameColliderTags["GCT_Net4"] = 204] = "GCT_Net4";
        GameColliderTags[GameColliderTags["GCT_Net5"] = 205] = "GCT_Net5";
        GameColliderTags[GameColliderTags["GCT_Net6"] = 206] = "GCT_Net6";
        GameColliderTags[GameColliderTags["GCT_Net7"] = 207] = "GCT_Net7";
        GameColliderTags[GameColliderTags["GCT_Fish"] = 300] = "GCT_Fish";
        return GameColliderTags;
      }({}));

      /**
       * @Description: 鱼当前的状态
       * @Date: 2024-06-13 17:11:48
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      var FishLifeState = exports('FishLifeState', /*#__PURE__*/function (FishLifeState) {
        FishLifeState[FishLifeState["FLS_WaitReBirth"] = 0] = "FLS_WaitReBirth";
        FishLifeState[FishLifeState["FLS_Alive"] = 1] = "FLS_Alive";
        FishLifeState[FishLifeState["FLS_Dead"] = 2] = "FLS_Dead";
        FishLifeState[FishLifeState["FLS_Destory"] = 3] = "FLS_Destory";
        return FishLifeState;
      }({}));

      /**
       * @Description: 简单鱼类分组
       * @Date: 2024-06-14 09:35:33
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      var FishTypeGroup = exports('FishTypeGroup', /*#__PURE__*/function (FishTypeGroup) {
        FishTypeGroup[FishTypeGroup["FTC_NormalFish"] = 0] = "FTC_NormalFish";
        FishTypeGroup[FishTypeGroup["FTC_SharkBlue"] = 1] = "FTC_SharkBlue";
        FishTypeGroup[FishTypeGroup["FTC_SharkGold"] = 2] = "FTC_SharkGold";
        return FishTypeGroup;
      }({})); //金鲨
      var GameShopTabType = exports('GameShopTabType', /*#__PURE__*/function (GameShopTabType) {
        GameShopTabType[GameShopTabType["GST_Tab01"] = 1] = "GST_Tab01";
        GameShopTabType[GameShopTabType["GST_Tab02"] = 2] = "GST_Tab02";
        GameShopTabType[GameShopTabType["GST_Tab03"] = 3] = "GST_Tab03";
        return GameShopTabType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GFSingleClass.ts', './GFLocalDBUtils.ts', './GameConst2.ts', './GameUtils.ts', './WSManager.ts', './WSNetCmd.ts'], function (exports) {
  var _inheritsLoose, cclegacy, view, Vec3, GFSingleClass, localDBUtils, GameLocalDBKey, FishTypeGroup, GameUtils, WSManager, WSNetCmd;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      view = module.view;
      Vec3 = module.Vec3;
    }, function (module) {
      GFSingleClass = module.GFSingleClass;
    }, function (module) {
      localDBUtils = module.localDBUtils;
    }, function (module) {
      GameLocalDBKey = module.GameLocalDBKey;
      FishTypeGroup = module.FishTypeGroup;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      WSManager = module.WSManager;
    }, function (module) {
      WSNetCmd = module.WSNetCmd;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b1615lg7IdGaYSjM3Ny61M+", "GameData", undefined);
      var GameData = /*#__PURE__*/function (_GFSingleClass) {
        _inheritsLoose(GameData, _GFSingleClass);
        function GameData() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GFSingleClass.call.apply(_GFSingleClass, [this].concat(args)) || this;
          _this.isLocalDebug = true;
          _this.isOnlineLogin = true;
          _this.isWSConnected = false;
          _this.curWeaponLevelType = 1;
          _this.curCannonNeedGoldsNum = 10;
          _this.curPlayerData = null;
          _this.cannonConfigsObjArr = [];
          _this.fishConfigsObjArr = [];
          _this.shopConfigsObjArr = [];
          _this.traceConfigsObjArr = [];
          _this.themeConfigsObjArr = [];
          return _this;
        }
        GameData.ins = function ins() {
          return _GFSingleClass.ins.call(this);
        };
        var _proto = GameData.prototype;
        /**
         * @Description: 转换鱼群路径
         * @Date: 2024-06-11 18:36:10
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} jsonObj
         * @param {number} traceCount
         * @return {*}
         */
        _proto.parseTracePostionToArr = function parseTracePostionToArr(jsonObj, traceCount) {
          if (!jsonObj) {
            return;
          }
          var visibleSize = view.getVisibleSize();
          var fixWidth = -5 - visibleSize.width / 2;
          this.traceConfigsObjArr = [];
          for (var i = 1; i <= 10; i++) {
            var tracePathName = "path0" + i;
            var pathObj = jsonObj[tracePathName];
            if (!pathObj) {
              continue;
            }
            var oneTracePosArr = [];
            var startPosObj = pathObj.start;
            if (startPosObj) {
              oneTracePosArr.push(new Vec3(fixWidth + startPosObj.x, startPosObj.y));
            }
            var centerPosObj = pathObj.center;
            if (centerPosObj) {
              oneTracePosArr.push(new Vec3(fixWidth + centerPosObj.x, centerPosObj.y));
            }
            var endPosObj = pathObj.end;
            if (endPosObj) {
              oneTracePosArr.push(new Vec3(fixWidth + endPosObj.x, endPosObj.y));
            }
            this.traceConfigsObjArr.push(oneTracePosArr);
          }
          // console.log(TAG, ` <parseTracePostionToArr> this.traceConfigsObjArr ==> ${this.traceConfigsObjArr}`);
        }

        /**
         * @Description: 转换游戏主题机制配置
         * @Date: 2024-06-12 14:46:14
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} jsonObj
         * @param {number} themeCount
         * @return {*}
         */;
        _proto.parseThemeCfgObjToArr = function parseThemeCfgObjToArr(jsonObj, themeCount) {
          if (!jsonObj) {
            return;
          }
          for (var i = 1; i <= 6; i++) {
            var levelName = "level" + i;
            var themeObj = jsonObj[levelName];
            if (!themeObj) {
              continue;
            }
            var iThemeObj = themeObj;
            if (!iThemeObj) {
              continue;
            }
            this.themeConfigsObjArr.push(iThemeObj);
          }
        }

        /**
         * @Description: 根据鱼类型名获取对应配置
         * @Date: 2024-06-13 17:25:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} fishTypeName
         * @return {*}
         */;
        _proto.getFishConfigObjByFishTypeName = function getFishConfigObjByFishTypeName(fishTypeName) {
          if (this.fishConfigsObjArr.length <= 0) {
            return null;
          }
          var targetObj = null;
          this.fishConfigsObjArr.forEach(function (fishCfgObj) {
            if (fishCfgObj.fishType == fishTypeName) {
              targetObj = fishCfgObj;
              return;
            }
          });
          return targetObj;
        }

        /**
         * @Description: 本地存档用户信息
         * @Date: 2024-06-11 18:35:57
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.updateLocalCacheUserInfo = function updateLocalCacheUserInfo() {
          localDBUtils.setString(GameLocalDBKey.GLC_UserInfo, JSON.stringify(this.curPlayerData));
        }

        /**
         * @Description: 根据武器等级获取大炮对
         * @Date: 2024-06-14 09:22:43
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} weaponLevelType  武器等级<大炮/子弹/渔网>
         * @return {*}
         */;
        _proto.getWeaponHurtHpByWeaponLevelType = function getWeaponHurtHpByWeaponLevelType(weaponLevelType) {
          var hurtHp = 10;
          if (this.cannonConfigsObjArr.length <= 0) {
            return hurtHp;
          }
          var targetObj = null;
          this.cannonConfigsObjArr.forEach(function (cfgObj) {
            if (cfgObj.cannonType == weaponLevelType) {
              targetObj = cfgObj;
              return;
            }
          });
          if (targetObj) {
            hurtHp = targetObj.hurtHp;
          }
          return hurtHp;
        }

        /**
         * @Description: 根据鱼群类型获取普通和鲨鱼类型名
         * @Date: 2024-06-14 09:38:00
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {FishTypeGroup} fishGroupType
         * @return {*}
         */;
        _proto.getSharkTypeNameByGroupType = function getSharkTypeNameByGroupType(fishGroupType) {
          var sharkTypeName = "fish_shayu";
          if (fishGroupType == FishTypeGroup.FTC_SharkGold) {
            sharkTypeName = "fish_jinshayu";
          }
          return sharkTypeName;
        };
        _proto.getNewSliverNum = function getNewSliverNum() {
          var silverNum = 0;
          if (!this.curPlayerData) {
            return silverNum;
          }
          silverNum = this.curPlayerData.silver_num;
          var localPlayerData = localDBUtils.getString(GameLocalDBKey.GLC_UserInfo);
          if (GameUtils.isCheckStringEmpty(localPlayerData)) {
            return silverNum;
          }
          var playerData = JSON.parse(localPlayerData);
          if (playerData) {
            this.curPlayerData = playerData;
            if (playerData.silver_num > silverNum) {
              silverNum = playerData.silver_num;
              this.curPlayerData.silver_num = playerData.silver_num;
            }
          }
          return silverNum;
        }

        /**
         * @Description: 根据武器等级获取消耗金币数
         * @Date: 2024-06-14 15:22:04
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} weaponLevelType
         * @return {*}
         */;
        _proto.getCannonUseGoldsNum = function getCannonUseGoldsNum(weaponLevelType) {
          var needGoldNum = 10;
          for (var i = 0; i < this.cannonConfigsObjArr.length; i++) {
            var element = this.cannonConfigsObjArr[i];
            if (element.cannonType == weaponLevelType) {
              needGoldNum = element.needGolds;
              break;
            }
          }
          return needGoldNum;
        }

        /**
         * @Description: 检查鱼属于那种鱼群
         * @Date: 2024-06-14 22:39:48
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} type
         * @return {*}
         */;
        _proto.checkFishTypeGroupByType = function checkFishTypeGroupByType(type) {
          if (type == 10) {
            return FishTypeGroup.FTC_SharkBlue;
          } else if (type == 11) {
            return FishTypeGroup.FTC_SharkGold;
          }
          return FishTypeGroup.FTC_NormalFish;
        }

        /**
         * @Description: 规则==>
         * 1、游戏中金币为最大购买道具,银币其次可以兑换金币
         * 2、银币控制游戏内部玩家计分累计和等级累积<分数和等级累积只针对现有或历史最大银币为准>
         * @Date: 2024-06-14 22:53:23
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.updateCheckUserScoreLevel = function updateCheckUserScoreLevel() {
          if (!this.curPlayerData) {
            return 0;
          }
          if (this.curPlayerData.silver_num > this.curPlayerData.score_num) {
            this.curPlayerData.score_num = this.curPlayerData.silver_num;
          }
          for (var i = 0; i < this.themeConfigsObjArr.length; i++) {
            var themeObj = this.themeConfigsObjArr[i];
            if (!themeObj) {
              continue;
            }
            var min_score = themeObj.min_score;
            var max_score = themeObj.max_score;
            if (this.curPlayerData.score_num >= min_score && this.curPlayerData.score_num <= max_score) {
              //定时刷新等级机制
              gameData.curPlayerData.level = themeObj.level;
              break;
            }
          }
          this.updateLocalCacheUserInfo();
          return gameData.curPlayerData.level;
        }

        /**
         * @Description: 发送最新用户信息更新服务器
         * @Date: 2024-06-17 11:00:14
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.sendUserInfoToServer = function sendUserInfoToServer(callback) {
          if (!gameData || !gameData.isOnlineLogin || !gameData.isWSConnected) {
            if (callback) {
              callback();
            }
            return;
          }
          if (!gameData.curPlayerData) {
            return;
          }
          var uid = gameData.curPlayerData.uid;
          var uname = gameData.curPlayerData.normalUName;
          WSManager.sendMessage(WSNetCmd.WNC_UpdateUserInfo, {
            uid: uid,
            uname: uname,
            userinfo: gameData.curPlayerData
          });
        };
        return GameData;
      }(GFSingleClass);
      var gameData = exports('gameData', GameData.ins());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEvents.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f731afaZ3FDy5t7YZm410r7", "GameEvents", undefined);
      /*
       * @Description: 游戏内部的订阅事件key
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-10 21:30:37
       * @LastEditTime: 2024-06-14 21:49:02
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/game/common/GameEvents.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */

      var GameEvents = exports('GameEvents', function GameEvents() {});
      GameEvents.UI_ChangeCannonType = "UI_ChangeCannonType";
      GameEvents.UI_LoginOrRegisterSuccess = "UI_LoginOrRegisterSuccess";
      GameEvents.UI_BulletHitFishCastNet = "UI_BulletHitFishCastNet";
      GameEvents.UI_FlyCoinsScoreAni = "UI_FlyCoinsScoreAni";
      GameEvents.UI_ShopExchangeRefreshUI = "UI_ShopExchangeRefreshUI";
      GameEvents.UI_FishRemove = "UI_FishRemove";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameHost.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "965f6hZ6l1D/J27h3ZEHnLX", "GameHost", undefined);
      /*
       * @Description: 
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-10 18:47:48
       * @LastEditTime: 2024-06-21 08:39:16
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/game/common/GameHost.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */
      var GameHost = exports('GameHost', function GameHost() {});
      _class = GameHost;
      /**基础路由 */
      GameHost.gameWsPort = "8000";
      GameHost.gameAuthHttpPort = "3000";
      GameHost.gameIp = "192.168.5.57";
      //换成自己的IP地址
      GameHost.gameRouteUrlAuthHttp = "http://" + _class.gameIp + ":" + _class.gameAuthHttpPort;
      GameHost.gameRouteUrlWs = "ws://" + _class.gameIp + ":" + _class.gameWsPort;
      /**业务需求路由 */
      GameHost.gameUserApi = "/api/users";
      GameHost.gameUserLoginUrl = "" + _class.gameRouteUrlAuthHttp + _class.gameUserApi + "/login";
      GameHost.gameUserRegisterUrl = "" + _class.gameRouteUrlAuthHttp + _class.gameUserApi + "/register";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameInterface.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a2966QjNlExoIn+RD08fRU", "GameInterface", undefined);
      /*
       * @Description: 游戏中接口数据结构
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-11 13:57:44
       * @LastEditTime: 2024-06-16 19:13:50
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/game/common/GameInterface.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */
      /**
       * @Description: 大炮配置
       * @Date: 2024-06-16 19:02:42
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      /**
       * @Description: 鱼群配置
       * @Date: 2024-06-16 19:02:32
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      /**
       * @Description: 商店配置
       * @Date: 2024-06-16 19:02:49
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      /**
       * @Description: 主题背景配置相关 涉及游戏内部等级和分数转换
       * @Date: 2024-06-16 19:02:58
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameMgr2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvents.ts', './GameConst2.ts', './CannonItem.ts', './GameData.ts', './BulletItem.ts', './NetItem.ts', './FishItem.ts', './BulletNodePool.ts', './FishNodePool.ts', './NetNodePool.ts', './FlyCoinsItem.ts', './CoinScoreItem.ts', './FlyCoinNodePool.ts', './FlyGoldNodePool.ts', './FlySilverNodePool.ts', './UIManager.ts', './GameUtils.ts', './WSManager.ts', './WSNetCmd.ts', './FishGameMgr.ts', './RoomMgr.ts', './NetGameServer.ts', './SubGameMgr.ts', './Logger.ts', './WebsocketClient.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Prefab, Label, AudioSource, AudioClip, director, Vec3, UITransform, Vec2, tween, Animation, instantiate, Component, GameEvents, GameWeaponLevelType, FishLifeState, CannonItem, gameData, BulletItem, NetItem, FishItem, BulletNodePool, FishNodePool, NetNodePool, FlyCoinsItem, CoinScoreItem, FlyCoinNodePool, FlyGoldNodePool, FlySilverNodePool, uiMgr, GameUtils, WSManager, WSNetCmd, FishGameMgr, RoomMgr, gameNet, SubGameMgr, Logger, WebsocketClient, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      director = module.director;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
      tween = module.tween;
      Animation = module.Animation;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameEvents = module.GameEvents;
    }, function (module) {
      GameWeaponLevelType = module.GameWeaponLevelType;
      FishLifeState = module.FishLifeState;
    }, function (module) {
      CannonItem = module.CannonItem;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      BulletItem = module.BulletItem;
    }, function (module) {
      NetItem = module.NetItem;
    }, function (module) {
      FishItem = module.FishItem;
    }, function (module) {
      BulletNodePool = module.BulletNodePool;
    }, function (module) {
      FishNodePool = module.FishNodePool;
    }, function (module) {
      NetNodePool = module.NetNodePool;
    }, function (module) {
      FlyCoinsItem = module.FlyCoinsItem;
    }, function (module) {
      CoinScoreItem = module.CoinScoreItem;
    }, function (module) {
      FlyCoinNodePool = module.FlyCoinNodePool;
    }, function (module) {
      FlyGoldNodePool = module.FlyGoldNodePool;
    }, function (module) {
      FlySilverNodePool = module.FlySilverNodePool;
    }, function (module) {
      uiMgr = module.uiMgr;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      WSManager = module.WSManager;
    }, function (module) {
      WSNetCmd = module.WSNetCmd;
    }, function (module) {
      FishGameMgr = module.FishGameMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      WebsocketClient = module.WebsocketClient;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class3, _class4, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;
      cclegacy._RF.push({}, "8527e57U7hG6ZILyIlfv2ZX", "gameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishLive = exports('FishLive', function FishLive(fish, cliveTimestamp) {
        this.fish = void 0;
        this.cliveTimestamp = void 0;
        // 将传入的参数赋值给类的属性
        this.fish = fish;
        this.cliveTimestamp = cliveTimestamp;
      });
      var waitBackBullet = exports('waitBackBullet', function waitBackBullet(bulletID, bulletLevel, startPos, endPos) {
        this.bulletID = void 0;
        this.bulletLevel = void 0;
        this.startPos = void 0;
        this.endPos = void 0;
        // 将传入的参数赋值给类的属性
        this.bulletID = bulletID;
        this.bulletLevel = bulletLevel;
        this.startPos = startPos;
        this.endPos = endPos;
      });
      var gameMgr = exports('gameMgr', (_dec = ccclass('gameMgr'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(AudioSource), _dec17 = property(AudioClip), _dec18 = property(AudioClip), _dec19 = property(AudioClip), _dec20 = property(AudioClip), _dec21 = property(AudioClip), _dec22 = property(AudioClip), _dec23 = property(AudioClip), _dec24 = property(AudioClip), _dec(_class3 = (_class4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(gameMgr, _Component);
        function gameMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fishLayerNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameLayerNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cannonItemNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bulletItemPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "netItemPrefab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fishItemPrefab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyCoinsItemPrefab", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinScoreItemNode", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topSilverCoinsNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topSilverIconNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin_goldAniPrefab", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin_silverAniPrefab", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "silverNumLabel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userLevelLabel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioSource", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickSfxClip", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx_cannonbomb01", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx_cannonbomb02", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx_castnet", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx_getgold", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx_redwarn", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx_switchcannon", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx_welcome", _descriptor23, _assertThisInitialized(_this));
          _this._cannonItemComp = null;
          _this._coinScoreItemNodeComp = null;
          _this._bulletID = 0;
          _this._fishList = void 0;
          //鱼 生成时间map
          _this._fireTime = 0;
          _this._fireTimeNew = void 0;
          _this._waitBackBulletMap = new Map();
          return _this;
        }
        var _proto = gameMgr.prototype;
        _proto.start = function start() {
          this._bulletID = 0;
          this._fishList = new Map();
          if (SubGameMgr.gameMgr) {
            var initData = SubGameMgr.gameMgr.getInitData();
            var fishList = initData[0];
            for (var i = 0; i < fishList.length; i++) {
              this.onNet_NewFish(fishList[i]);
            }
            var lastBulletId = initData[3];
            this._bulletID = lastBulletId;
          }
          this.initNetMsgHandlers();
          this._initEvent();
          this._initUIData();
          this.onReConnect();
          RoomMgr.inst.rpc_Ready();
          FishGameMgr.inst.requestFishConfig();
          tgx.UIMgr.inst.closeAll();
        };
        _proto._initEvent = function _initEvent() {
          this.node.on(Node.EventType.TOUCH_START, this._onTouchStartEvent, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMoveEvent, this);
          this.node.on(Node.EventType.TOUCH_END, this._onTouchEndEvent, this);
          director.on(GameEvents.UI_BulletHitFishCastNet, this._onBulletHitFishCastNetCallback, this);
          director.on(GameEvents.UI_FlyCoinsScoreAni, this._onFlyCoinsScoreAniCallback, this);
          director.on(GameEvents.UI_ShopExchangeRefreshUI, this._onShopExchangeRefreshUICallback, this);
          director.on(GameEvents.UI_FishRemove, this._onFishRemove, this);
          director.on(WebsocketClient.EVENT_CONNECTED, this.onReConnect, this); //断线重连
        };

        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg("fish/NewFish", this.onNet_NewFish, this);
          gameNet.listenMsg("fish/FishDead", this.onNet_FishDead, this);
          gameNet.listenMsg("fish/RoomFish", this.onNet_RoomFish, this);
          gameNet.listenMsg("fish/FireResult", this.onNet_FireResult, this);
          // gameNet.listenMsg("Pong",
        };

        _proto.onReConnect = function onReConnect() {
          RoomMgr.inst.rpc_ClientReady();
        };
        _proto._initUIData = function _initUIData() {
          if (this.cannonItemNode) {
            this._cannonItemComp = this.cannonItemNode.getComponent(CannonItem);
            if (this._cannonItemComp) {
              this._cannonItemComp.initUIWithData(Number(GameWeaponLevelType.GWL_LevelType01));
            }
          }
          //预初始化子弹、鱼群、渔网节点池
          if (this.fishItemPrefab) {
            FishNodePool.preInitPool(this.fishItemPrefab);
          }
          if (this.bulletItemPrefab) {
            BulletNodePool.preInitPool(this.bulletItemPrefab);
          }
          if (this.netItemPrefab) {
            NetNodePool.preInitPool(this.netItemPrefab);
          }
          if (this.coinScoreItemNode) {
            this._coinScoreItemNodeComp = this.coinScoreItemNode.getComponent(CoinScoreItem);
          }
          if (this.silverNumLabel) {
            if (gameData && gameData.curPlayerData) {
              var newSilverNum = gameData.getNewSliverNum();
              this.silverNumLabel.string = "" + newSilverNum;
            }
          }
          if (this.userLevelLabel) {
            this._updateUserLevelUI();
          }
          //展示欢迎UI界面
          this._showWelcomeUI();
          //创建鱼群
          //this._createFishFunc();
          //每间隔时间上传最新用户信息
        }

        /**
         * @Description: 展示欢迎UI界面
         * @Date: 2024-06-15 07:28:32
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._showWelcomeUI = function _showWelcomeUI() {
          var _this2 = this;
          GameUtils.playSfx(this.sfx_welcome);
          this.scheduleOnce(function () {
            uiMgr.showToastView(LanguageData.getLangByID("GLK_Welcome_StartGame"), 2000);
          }, 1);
          this.scheduleOnce(function () {
            GameUtils.playSfx(_this2.sfx_redwarn);
            uiMgr.showToastView(LanguageData.getLangByID("GLK_Welcome_FishGroupCome"), 4000);
          }, 3);
        }

        /**
         * @Description: 刷新用户等级UI
         * @Date: 2024-06-14 23:09:22
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {boolean} isSavelLocal
         * @return {*}
         */;
        _proto._updateUserLevelUI = function _updateUserLevelUI(isSavelLocal) {
          if (isSavelLocal === void 0) {
            isSavelLocal = true;
          }
          if (this.userLevelLabel) {
            if (gameData && gameData.curPlayerData) {
              var curLevel = gameData.curPlayerData.level;
              if (isSavelLocal) {
                curLevel = gameData.updateCheckUserScoreLevel();
              }
              this.userLevelLabel.string = LanguageData.getLangByID("GLK_UserLevel", curLevel);
            }
          }
        }

        /**
         * @Description: 创建鱼群函数
         * @Date: 2024-06-14 09:36:23
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._createFishFunc = function _createFishFunc() {
          this.schedule(this._makeNormalNewFish, 2);
          this.schedule(this._makeSharkNewFish, 10);
        }

        /**
         * @Description: 生成普通鱼类
         * @Date: 2024-06-13 22:43:07
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._makeNormalNewFish = function _makeNormalNewFish() {
          // let creatFishNum: number = 3;
          // for (let i = 0; i < creatFishNum; i++) {
          //     if (!this.fishItemPrefab) {
          //         break;
          //     }
          //     let fishNode = instantiate(this.fishItemPrefab);
          //     // let fishNode = FishNodePool.get(this.fishItemPrefab);
          //     if (fishNode) {
          //         let fishNodeComp = fishNode.getComponent(FishItem);
          //         if (fishNodeComp) {
          //             fishNodeComp.initFishWithData(this.fishLayerNode, FishTypeGroup.FTC_NormalFish);
          //         }
          //     }
          // }
          // this.unschedule(this._makeNormalNewFish);
          // let randomSecs = Math.floor(Math.random() * 5 + 2);
          // this.schedule(this._makeNormalNewFish, randomSecs);
          // console.log(TAG, `<_makeNormalNewFish> create normal fish , randomSecs: ${randomSecs}`);
        }

        /**
         * @Description: 生成蓝鲨和金鲨
         * @Date: 2024-06-13 22:43:19
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._makeSharkNewFish = function _makeSharkNewFish() {
          // if (!this.fishItemPrefab) {
          //     return;
          // }
          // let randomSecs = Math.floor(Math.random() * 5 + 10);
          // let lockFishTypeArr = gameData.curPlayerData.lock_fishtype;
          // if (lockFishTypeArr.indexOf(10) == -1 && lockFishTypeArr.indexOf(11) == -1) {
          //     this.unschedule(this._makeSharkNewFish);
          //     this.schedule(this._makeSharkNewFish, randomSecs);
          //     return;
          // }
          // let index = Math.floor(Math.random() * 10);
          // if (index % 2 == 0) {
          //     if (lockFishTypeArr.indexOf(10) != -1) {
          //         // console.log(TAG, `<_makeSharkNewFish> blue shark , randomSecs: ${randomSecs}`);
          //         let fishNode = instantiate(this.fishItemPrefab);
          //         // let fishNode = FishNodePool.get(this.fishItemPrefab);
          //         if (fishNode) {
          //             let fishNodeComp = fishNode.getComponent(FishItem);
          //             if (fishNodeComp) {
          //                 fishNodeComp.initFishWithData(this.fishLayerNode, FishTypeGroup.FTC_SharkBlue);
          //             }
          //         }
          //     }
          // } else {
          //     if (lockFishTypeArr.indexOf(11) != -1) {
          //         // console.log(TAG, `<_makeSharkNewFish> gold shark , randomSecs: ${randomSecs}`);
          //         // let fishNode = instantiate(this.fishItemPrefab);
          //         let fishNode = FishNodePool.get(this.fishItemPrefab);
          //         if (fishNode) {
          //             let fishNodeComp = fishNode.getComponent(FishItem);
          //             if (fishNodeComp) {
          //                 fishNodeComp.initFishWithData(this.fishLayerNode, FishTypeGroup.FTC_SharkGold);
          //             }
          //         }
          //     }
          // }
          // this.unschedule(this._makeSharkNewFish);
          // this.schedule(this._makeSharkNewFish, randomSecs);
        }

        /**
         * @Description: 开始触摸事件
         * @Date: 2024-06-13 08:13:35
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {EventTouch} event
         * @return {*}
         */;
        _proto._onTouchStartEvent = function _onTouchStartEvent(event) {
          var uiPos = event.touch.getUILocation();
          var uiWorldPos = new Vec3(uiPos.x, uiPos.y);
          var convertNodePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(uiWorldPos);
          if (!this.cannonItemNode) {
            return;
          }
          if (convertNodePos.y <= this.cannonItemNode.position.y) {
            return;
          }
          //设置炮塔角度
          this._setCannonAngle(convertNodePos);
        }

        /**
         * @Description: 移动触摸事件
         * @Date: 2024-06-13 08:13:49
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {EventTouch} event
         * @return {*}
         */;
        _proto._onTouchMoveEvent = function _onTouchMoveEvent(event) {
          var uiPos = event.touch.getUILocation();
          var uiWorldPos = new Vec3(uiPos.x, uiPos.y);
          var convertNodePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(uiWorldPos);
          if (!this.cannonItemNode) {
            return;
          }
          if (convertNodePos.y <= this.cannonItemNode.position.y) {
            return;
          }
          //设置炮塔角度
          this._setCannonAngle(convertNodePos);
        }

        /**
         * @Description: 触摸结束事件
         * @Date: 2024-06-13 08:13:58
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {EventTouch} event
         * @return {*}
         */;
        _proto._onTouchEndEvent = function _onTouchEndEvent(event) {
          var needCoin = FishGameMgr.inst.getBulletCoin(gameData.curWeaponLevelType);
          if (needCoin == -1) {
            Logger.trace("等待配置返回");
            return;
          }
          this._fireTimeNew = new Date().getTime();
          if (this._fireTimeNew - this._fireTime < 100) {
            return;
          }
          this._fireTime = this._fireTimeNew;
          var uiPos = event.touch.getUILocation();
          var uiWorldPos = new Vec3(uiPos.x, uiPos.y);
          var convertNodePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(uiWorldPos);
          if (!this.cannonItemNode || !this._cannonItemComp || !this.bulletItemPrefab) {
            return;
          }
          if (convertNodePos.y <= this.cannonItemNode.position.y) {
            return;
          }
          //判断指定大炮是否已解锁
          if (!gameData && !gameData.curPlayerData) {
            return;
          }
          // let weaponLevelType = gameData.curWeaponLevelType;
          // if (gameData.curPlayerData.lock_cannontype.indexOf(weaponLevelType) == -1) {
          //     uiMgr.showToastView(GameLanguageKey.GLK_UnlockCannonType);
          //     return;
          // }
          //判断当前金币是否满足消耗使用需求
          if (gameData.curPlayerData.gold_num < needCoin) {
            uiMgr.showToastView(LanguageData.getLangByID("GLK_CoinGoldNotEnough"));
            return;
          }
          var bulletID = this.generateBulletID();
          this.sendFire(gameData.curWeaponLevelType, bulletID);
          this._waitBackBulletMap.set(bulletID, new waitBackBullet(bulletID, gameData.curWeaponLevelType, this.cannonItemNode.position, convertNodePos));
        };
        _proto.createBullet = function createBullet(data) {
          var _this3 = this;
          //播放大炮发射动画并执行发射子弹逻辑
          this._cannonItemComp.playFireCannonAni(function () {
            if (data.bulletLevel <= 3) {
              GameUtils.playSfx(_this3.sfx_cannonbomb01);
            } else {
              GameUtils.playSfx(_this3.sfx_cannonbomb02);
            }

            // let bulletNode = instantiate(this.bulletItemPrefab);
            var bulletNode = BulletNodePool.get(_this3.bulletItemPrefab);
            if (bulletNode) {
              var bulletNodeComp = bulletNode.getComponent(BulletItem);
              if (bulletNodeComp) {
                bulletNodeComp.initBulletWithData(data.bulletLevel, data.bulletID);
              }
              bulletNode.parent = _this3.gameLayerNode;
              bulletNode.setPosition(data.startPos);
              _this3._setCannonAngle(data.endPos, bulletNode);
            }
          });
        }

        /**
         * @Description: 设置炮塔角度
         * @Date: 2024-06-13 08:14:54
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Vec3} touchPointPos
         * @return {*}
         */;
        _proto._setCannonAngle = function _setCannonAngle(touchPointPos, bulletNode) {
          if (!this.cannonItemNode) {
            return;
          }
          //被转化到节点上的世界坐标点,需要转换到大炮的坐标系下
          var touchPos = touchPointPos;
          //大炮的坐标
          var weaponPos = this.cannonItemNode.position;
          //炮台到触摸点的方向向量
          var dir = touchPos.subtract(weaponPos);
          var signAngleDirVec2 = new Vec2(dir.x, dir.y);
          //计算夹角,这个夹角是一个方向向量<弧度>
          var angle = signAngleDirVec2.signAngle(new Vec2(0, 1));
          //将弧度转换为角度<欧拉角>
          var degree = angle / Math.PI * 180;
          this.cannonItemNode.angle = -degree;
          //设置子弹的旋转角度
          if (bulletNode) {
            bulletNode.angle = -degree;
          }
        }

        /**
         * @Description: 子弹撞到鱼撒网
         * @Date: 2024-06-13 16:58:09
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} data
         * @return {*}
         */;
        _proto._onBulletHitFishCastNetCallback = function _onBulletHitFishCastNetCallback(data) {
          if (!data || !this.netItemPrefab) {
            return;
          }
          GameUtils.playSfx(this.sfx_castnet);
          var hitPos = data.position;
          var weaponLevelType = data.weaponLevelType;
          var angle = data.angle;
          var isSharkFish = data.isSharkFish;
          // let netNode = instantiate(this.netItemPrefab);
          var netNode = NetNodePool.get(this.netItemPrefab);
          if (netNode) {
            var netNodeComp = netNode.getComponent(NetItem);
            if (netNodeComp) {
              netNode.parent = this.gameLayerNode;
              var fixDistance = isSharkFish ? 50 : 20;
              var posX = hitPos.x + fixDistance * Math.sin(angle * Math.PI / 180);
              var posY = hitPos.y + fixDistance * Math.cos(angle * Math.PI / 180);
              netNode.position = new Vec3(posX, posY);
              netNodeComp.playShotNetAni(weaponLevelType);
            }
          }
          var fishItemComp = data.fish;
          var bulletComp = data.bullet;
          this.sendHitFish(fishItemComp.fishID, bulletComp.bulletID, bulletComp.curWeaponLevelType);
        }

        /**
         * @Description: 累计加分及飞起动画
         * @Date: 2024-06-14 14:59:06
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} data
         * @return {*}
         */;
        _proto._onFlyCoinsScoreAniCallback = function _onFlyCoinsScoreAniCallback(data) {
          if (!data || !this.flyCoinsItemPrefab || !this.gameLayerNode) {
            return;
          }
          GameUtils.playSfx(this.sfx_getgold);
          var getGoldsNum = data.getGoldsNum;
          var position = data.position;
          var isShowGold = data.isShowGold;
          // let flyCoinsItemNode = instantiate(this.flyCoinsItemPrefab);
          var flyCoinsItemNode = FlyCoinNodePool.get(this.flyCoinsItemPrefab);
          if (!flyCoinsItemNode) {
            return;
          }
          var flyCoinsItemComp = flyCoinsItemNode.getComponent(FlyCoinsItem);
          if (!flyCoinsItemComp) {
            return;
          }
          flyCoinsItemComp.initFlyCoinWithData(getGoldsNum, isShowGold);
          flyCoinsItemNode.position = position;
          flyCoinsItemNode.parent = this.gameLayerNode;
          tween(flyCoinsItemNode).to(0.3, {
            position: new Vec3(position.x, position.y + 50)
          }).delay(1)
          // .hide()
          .call(function () {
            flyCoinsItemNode.active = false;
            flyCoinsItemNode.removeFromParent();
            flyCoinsItemNode.parent = null;
            FlyCoinNodePool.put(flyCoinsItemNode);
            // flyCoinsItemNode.destroy();
          }).start();
          //播放从A飞到金币栏或者银币栏
          this._flyCoinsToTargetAction(isShowGold, getGoldsNum, position);
        }

        /**
         * @Description: 将金币或者银币获取后执行从A飞向B点然后消失
         * @Date: 2024-06-14 14:08:28
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {boolean} isFlyGold
         * @param {number} coinsNum
         * @param {Vec3} startPos
         * @return {*}
         */;
        _proto._flyCoinsToTargetAction = function _flyCoinsToTargetAction(isFlyGold, coinsNum, startPos) {
          var _this4 = this;
          if (!this.coin_goldAniPrefab || !this.coin_silverAniPrefab || !this.topSilverCoinsNode || !this.topSilverIconNode || !this._coinScoreItemNodeComp) {
            return;
          }
          var flyAniNode = null;
          var scaleNode = null;
          var flyToTargetPos = this.coinScoreItemNode.position;
          if (isFlyGold) {
            flyToTargetPos = this.coinScoreItemNode.position;
            scaleNode = this.coinScoreItemNode;
            flyAniNode = FlyGoldNodePool.get(this.coin_goldAniPrefab);
            // flyAniNode = instantiate(this.coin_goldAniPrefab);
          } else {
            flyToTargetPos = this.topSilverCoinsNode.getComponent(UITransform).convertToWorldSpaceAR(this.topSilverIconNode.position);
            flyToTargetPos = this.gameLayerNode.getComponent(UITransform).convertToNodeSpaceAR(flyToTargetPos);
            scaleNode = this.topSilverIconNode;
            flyAniNode = FlySilverNodePool.get(this.coin_silverAniPrefab);
            // flyAniNode = instantiate(this.coin_silverAniPrefab);
          }

          if (!flyAniNode) {
            return;
          }
          flyAniNode.position = startPos;
          flyAniNode.parent = this.gameLayerNode;
          var aniComp = flyAniNode.getComponent(Animation);
          if (!aniComp) {
            return;
          }
          aniComp.play();
          var lenPos = new Vec3(flyToTargetPos.x - startPos.x, flyToTargetPos.y - startPos.y);
          var distance = Math.sqrt(lenPos.x * lenPos.x + lenPos.y * lenPos.y);
          var duration = distance / 400;
          tween(flyAniNode).to(duration, {
            position: flyToTargetPos
          }).call(function () {
            if (scaleNode) {
              tween(scaleNode).to(0.1, {
                scale: new Vec3(1.5, 1.5, 1.5)
              }, {
                easing: 'bounceInOut'
              }).to(0.1, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'bounceInOut'
              }).call(function () {
                if (isFlyGold) ;else {
                  if (_this4.silverNumLabel) {
                    var curSilverNum = Number(_this4.silverNumLabel.string);
                    curSilverNum += coinsNum;
                    _this4.silverNumLabel.string = "" + curSilverNum;
                    if (gameData && gameData.curPlayerData) {
                      gameData.curPlayerData.silver_num = curSilverNum;
                      gameData.updateLocalCacheUserInfo();
                    }
                  }
                }
                flyAniNode.active = false;
                flyAniNode.removeFromParent();
                flyAniNode.parent = null;
                if (isFlyGold) {
                  FlyGoldNodePool.put(flyAniNode);
                } else {
                  FlySilverNodePool.put(flyAniNode);
                }
                // flyAniNode.destroy();
              }).start();
            }
          }).start();
        }

        /**
         * @Description:商店购买后刷新界面逻辑
         * @Date: 2024-06-14 21:52:10
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._onShopExchangeRefreshUICallback = function _onShopExchangeRefreshUICallback() {
          if (!gameData || !gameData.curPlayerData) {
            return;
          }
          if (this.silverNumLabel) {
            this.silverNumLabel.string = "" + gameData.curPlayerData.silver_num;
          }
          if (this._coinScoreItemNodeComp) {
            this._coinScoreItemNodeComp.refreshCoinsNum();
          }
          //发送最新用户信息更新服务器
          gameData.sendUserInfoToServer();
        }

        /**
         * @Description: 点击进入商店
         * @Date: 2024-06-14 14:22:17
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.onClickGoShopBtnEvent = function onClickGoShopBtnEvent() {
          GameUtils.playSfx(this.clickSfxClip);
          if (!gameData || !gameData.isOnlineLogin || !gameData.isWSConnected) {
            // uiMgr.showToastView(GameLanguageKey.GLK_NetError);
            return;
          }
          if (!gameData.curPlayerData) {
            return;
          }
          var uid = gameData.curPlayerData.uid;
          var uname = gameData.curPlayerData.normalUName;
          WSManager.sendMessage(WSNetCmd.WNC_GetUserInfo, {
            uid: uid,
            uname: uname
          });
        }

        /**
         * @Description: 切换大炮类型
         * @Date: 2024-06-12 17:38:30
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Event} event
         * @param {string} customEventData
         * @return {*}
         */;
        _proto.onClickChangeCannonBtnEvent = function onClickChangeCannonBtnEvent(event, customEventData) {
          GameUtils.playSfx(this.sfx_switchcannon);
          director.emit(GameEvents.UI_ChangeCannonType, {
            cmd: customEventData
          });
        }

        /**
        * @Description: 播放音效
        * @Date: 2024-06-16 16:37:27
        * @Author: GFanStudio-LeeSir-JYJ add
        * @return {*}
        */;
        _proto._playSfx = function _playSfx(sfxClip) {
          if (!this.audioSource || !sfxClip) {
            return;
          }
          this.audioSource.playOneShot(sfxClip);
        };
        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
          director.off(GameEvents.UI_BulletHitFishCastNet, this._onBulletHitFishCastNetCallback, this);
          director.off(GameEvents.UI_FlyCoinsScoreAni, this._onFlyCoinsScoreAniCallback, this);
          director.off(GameEvents.UI_ShopExchangeRefreshUI, this._onShopExchangeRefreshUICallback, this);
          director.off(GameEvents.UI_FishRemove, this._onFishRemove, this);
          director.off(WebsocketClient.EVENT_CONNECTED, this.onReConnect, this); //断线重连
          gameNet.unlistenMsgAllByThis(this);
        };
        _proto.update = function update(deltaTime) {
          //计算鱼是否要从map里删除 依赖服务器生存时间
          //this._updateUserLevelUI();
          if (gameNet.serverTimestamp > 0) {
            var keysToDelete = [];
            for (var _iterator = _createForOfIteratorHelperLoose(this._fishList.keys()), _step; !(_step = _iterator()).done;) {
              var _key2 = _step.value;
              if (this._fishList.get(_key2).cliveTimestamp < gameNet.serverTimestamp) {
                keysToDelete.push(_key2);
              }
            }
            for (var _i = 0, _keysToDelete = keysToDelete; _i < _keysToDelete.length; _i++) {
              var key = _keysToDelete[_i];
              if (this._fishList.get(key).fish) {
                this._fishList.get(key).fish._removeDestroyNode();
              }
              this._fishList["delete"](key);
            }
          }
        };
        _proto.goBackLobby = function goBackLobby() {
          var _this5 = this;
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ok) {
                    _this5.node.getChildByName('Machine').getComponent(AudioSource).stop();
                    RoomMgr.inst.exitRoom();
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto._onFishRemove = function _onFishRemove(data) {
          if (this._fishList.has(data.id)) {
            this._fishList.get(data.id).fish = null;
          }
        }
        //生成子弹ID
        ;

        _proto.generateBulletID = function generateBulletID() {
          this._bulletID++;
          return this._bulletID;
        }
        /**发射子弹 */;
        _proto.sendFire = function sendFire(bulletLevel, bulletId) {
          var msg = {};
          msg.bulletLevel = bulletLevel;
          msg.bulletId = bulletId.toString();
          gameNet.sendMsg('fish/Fire', msg);
        }
        /**鱼被打中 */;
        _proto.sendHitFish = function sendHitFish(fishId, bulletId, bulletLevel) {
          var msg = {};
          msg.fishId = fishId.toString();
          msg.bulletId = bulletId.toString();
          msg.bulletLevel = bulletLevel;
          gameNet.sendMsg('fish/HitFish', msg);
        };
        _proto.onNet_NewFish = function onNet_NewFish(msg) {
          if (!this.fishItemPrefab) {
            return;
          }
          var fishNode = instantiate(this.fishItemPrefab);
          // let fishNode = FishNodePool.get(this.fishItemPrefab);
          if (fishNode) {
            var fishNodeComp = fishNode.getComponent(FishItem);
            if (fishNodeComp) {
              console.log("new fish type:" + msg.type + "|fishID:" + msg.id);
              fishNodeComp.initFishWithData(this.fishLayerNode, Number(msg.id), msg.type);
              this._fishList.set(fishNodeComp.fishID, new FishLive(fishNodeComp, msg.liveTimestamp));
            }
          }
        };
        _proto.onNet_FishDead = function onNet_FishDead(msg) {
          var fishItemComp = this._fishList.get(Number(msg.id));
          if (fishItemComp) {
            gameData.curPlayerData.gold_num = msg.coins - msg.incrementCoins;
            if (this._coinScoreItemNodeComp) {
              this._coinScoreItemNodeComp.refreshCoinsNum();
            }
            if (fishItemComp.fish) fishItemComp.fish.curFishLifeState = FishLifeState.FLS_Dead;
            gameData.curPlayerData.gold_num = Number(msg.coins);
            if (this._coinScoreItemNodeComp) {
              this._coinScoreItemNodeComp.refreshCoinsNum();
            }
            //执行播放计分、飞金币等逻辑
            //打死一条鱼可以获得的金币或者银币数
            var getCoinNum = msg.incrementCoins;
            var fishPos = new Vec3(0, 0, 0);
            if (fishItemComp.fish) {
              fishPos = fishItemComp.fish.node.position;
            }

            // let isShowGold: boolean = ((fishItemComp.curFishTypeGroup == FishTypeGroup.FTC_NormalFish) ? false : true);
            var isShowGold = true;
            director.emit(GameEvents.UI_FlyCoinsScoreAni, {
              position: fishPos,
              getGoldsNum: getCoinNum,
              isShowGold: isShowGold
            });
          }
        };
        _proto.onNet_RoomFish = function onNet_RoomFish(msg) {
          for (var i = 0; i < msg.fishes.length; i++) {
            if (this._fishList.get(Number(msg.fishes[i].id))) {
              continue;
            }
            this.onNet_NewFish(msg.fishes[i]);
          }
        };
        _proto.onNet_FireResult = function onNet_FireResult(msg) {
          if (msg.isSuccess) {
            console.log("FireResult bulletId:" + msg.bulletId);
            gameData.curPlayerData.gold_num = Number(msg.coins);
            if (this._coinScoreItemNodeComp) {
              this._coinScoreItemNodeComp.refreshCoinsNum();
            }
            if (this._waitBackBulletMap.has(Number(msg.bulletId))) {
              this.createBullet(this._waitBackBulletMap.get(Number(msg.bulletId)));
            } else {
              Logger.error("FireResult not found:" + msg.bulletId);
            }
          } else {
            Logger.error("FireResult:" + msg.reason);
          }
          this._waitBackBulletMap["delete"](Number(msg.bulletId));
        };
        return gameMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "fishLayerNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, "gameLayerNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "cannonItemNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, "bulletItemPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class4.prototype, "netItemPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class4.prototype, "fishItemPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class4.prototype, "flyCoinsItemPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class4.prototype, "coinScoreItemNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class4.prototype, "topSilverCoinsNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class4.prototype, "topSilverIconNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class4.prototype, "coin_goldAniPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class4.prototype, "coin_silverAniPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class4.prototype, "silverNumLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class4.prototype, "userLevelLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class4.prototype, "audioSource", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class4.prototype, "clickSfxClip", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class4.prototype, "sfx_cannonbomb01", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class4.prototype, "sfx_cannonbomb02", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class4.prototype, "sfx_castnet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class4.prototype, "sfx_getgold", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class4.prototype, "sfx_redwarn", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class4.prototype, "sfx_switchcannon", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class4.prototype, "sfx_welcome", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class4)) || _class3));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GamePlayerData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b7541BSmmdCdZd2CNWkaTad", "GamePlayerData", undefined);
      /*
       * @Description: 
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-10 18:52:07
       * @LastEditTime: 2024-06-14 22:56:12
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/game/common/GamePlayerData.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */

      var GamePlayerData = exports('GamePlayerData', function GamePlayerData() {
        this.uid = "";
        this.uuid = "";
        this.uname = "";
        //加密的用户名
        this.password = "";
        //密码
        this.normalUName = "";
        //未加密的用户名
        this.ugender = 0;
        this.silver_num = 1000;
        //金币数量
        this.gold_num = 200;
        this.score_num = 0;
        this.level = 0;
        //解锁的鱼种类
        this.lock_fishtype = [1, 2];
        //解锁的大炮类型
        this.lock_cannontype = [1, 2];
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameResPath.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "2fd8bcXwmpL+KpsfRgzRH4W", "GameResPath", undefined);
      /*
       * @Description: 游戏资源路径等
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-10 09:38:13
       * @LastEditTime: 2024-06-16 16:14:32
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/game/common/GameResPath.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */

      var GameResPath = exports('GameResPath', /*#__PURE__*/function () {
        function GameResPath() {}
        GameResPath.getLocalDataCfgPath = function getLocalDataCfgPath(cfgFileName) {
          return "configs/" + cfgFileName;
        }
        /**UI涉及的美术资源 */;
        GameResPath.getThemeSpFramePath = function getThemeSpFramePath(bgImgFileName) {
          return "textures/bgs/" + bgImgFileName + "/spriteFrame";
        };
        /**
         * @Description: 根据鱼类类型名获取spriteFrame路径
         * @Date: 2024-06-13 18:18:57
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} fishTypeName
         * @param {boolean} isRunSp
         * @return {*}
         */
        GameResPath.getFishSpFramePath = function getFishSpFramePath(fishTypeName, isRunSp) {
          if (isRunSp === void 0) {
            isRunSp = true;
          }
          // let fishRootPath: string = `textures/plists/gameTextures01/`;
          var fishRootPath = this.resGameTexturePath.gameTexture01 + "/";
          if (isRunSp) {
            return fishRootPath + fishTypeName + "_run_0";
          } else {
            return fishRootPath + fishTypeName + "_dead_0";
          }
        }

        /**
         * @Description: 获取大炮的图片路径
         * @Date: 2024-06-14 19:03:23
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} cannonType
         * @return {*}
         */;
        GameResPath.getCannonSpFramePath = function getCannonSpFramePath(cannonType) {
          var srcRootPath = this.resGameTexturePath.gameTexture01 + "/weapon_level_" + cannonType + "_0";
          return srcRootPath;
        }

        /**
         * @Description:获取商店item道具背景
         * @Date: 2024-06-14 18:24:50
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} shopTabType
         * @return {*}
         */;
        GameResPath.getShopTabSpFramePath = function getShopTabSpFramePath(shopTabType) {
          var srcRootPath = this.resGameTexturePath.gameTexture02 + "/sp_shop_item_bg0" + shopTabType;
          return srcRootPath;
        }

        /**音频音效 */;
        return GameResPath;
      }());
      _class = GameResPath;
      /**bundle */
      GameResPath.fishBundleName = "fishGame";
      GameResPath.uiPrefabsRootPath = "prefabs/view/";
      /**UI界面 */
      GameResPath.uiItemsOrViews = {
        toastView: _class.uiPrefabsRootPath + "ToastView",
        commonPopView: _class.uiPrefabsRootPath + "CommonPopView",
        netLoadingView: _class.uiPrefabsRootPath + "NetLoadingView",
        shopView: _class.uiPrefabsRootPath + "ShopView"
      };
      /**配置表 */
      GameResPath.dataConfigsPath = {
        shopCfgs: "shopCfgs",
        cannonCfgs: "cannonCfgs",
        fishCfgs: "fishCfgs",
        traceCfgs: "traceCfgs",
        themeCfgs: "themeCfgs"
      };
      GameResPath.resGameTexturePath = {
        gameTexture01: "textures/plists/gameTextures01",
        gameTexture02: "textures/plists/gameTextures02"
      };
      GameResPath.audioRootPath = 'audios';
      GameResPath.gameAudioSfxPaths = {
        sfx_btn_lick: _class.audioRootPath + "/sfx_btn_lick",
        sfx_cannonbomb01: _class.audioRootPath + "/sfx_cannonbomb01",
        sfx_cannonbomb02: _class.audioRootPath + "/sfx_cannonbomb02",
        sfx_castnet: _class.audioRootPath + "/sfx_castnet",
        sfx_getgold: _class.audioRootPath + "/sfx_getgold",
        sfx_redwarn: _class.audioRootPath + "/sfx_redwarn",
        sfx_switchcannon: _class.audioRootPath + "/sfx_switchcannon",
        sfx_welcome: _class.audioRootPath + "/sfx_welcome"
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUtils.ts", ['cc', './WSManager.ts'], function (exports) {
  var cclegacy, director, tween, Vec3, v3, find, AudioSource, WSManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      tween = module.tween;
      Vec3 = module.Vec3;
      v3 = module.v3;
      find = module.find;
      AudioSource = module.AudioSource;
    }, function (module) {
      WSManager = module.WSManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cfa29EPX0pBuLKauFHNK5JK", "GameUtils", undefined);
      var TAG = 'GameUtils';
      var GameUtils = exports('GameUtils', /*#__PURE__*/function () {
        function GameUtils() {}
        /**
         * @Description: 切换场景
         * @Date: 2024-06-10 09:12:16
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {SceneNames} sceneName 场景名
         * @param {boolean} isPreLoad 是否提前预加载场景
         * @return {*}
         */
        GameUtils.switchScene = function switchScene(sceneName, isPreLoad) {
          if (isPreLoad === void 0) {
            isPreLoad = false;
          }
          //标记当前是否正在切换场景过程中
          WSManager.setChangeScene(true);
          if (isPreLoad) {
            director.preloadScene(sceneName, function (error, scene) {
              if (error) {
                console.log(TAG, "<switchScene> error ==> " + error);
                return;
              }
              director.loadScene(sceneName, function () {
                //标记当前是否正在切换场景过程中
                WSManager.setChangeScene(false);
              });
            });
          } else {
            director.loadScene(sceneName, function () {
              //标记当前是否正在切换场景过程中
              WSManager.setChangeScene(false);
            });
          }
        }

        /**
         * @Description: 判断字符串是否为空
         * @Date: 2024-04-20 22:56:15
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} valueStr
         * @return {*}
         */;
        GameUtils.isCheckStringEmpty = function isCheckStringEmpty(valueStr) {
          if (valueStr == null || valueStr == undefined || valueStr == "" || this.isEmptyStr(valueStr)) {
            return true;
          }
          return false;
        }

        /**
         * @Description: 判断字符串是否包含空格或空白
         * @Date: 2024-04-20 22:56:26
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} valueStr
         * @return {*}
         */;
        GameUtils.isEmptyStr = function isEmptyStr(valueStr) {
          if (/^\s*$/.test(valueStr) || valueStr.trim().length == 0) {
            return true;
          }
          return false;
        }

        /**
         * @Description: 递归过滤随机下标方法
         * @Date: 2024-06-13 17:33:45
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} totalCount 数组的总长
         * @param {number} filterNumArr 要过滤掉的index
         * @return {*}
         */;
        GameUtils.recursionRandomFunc = function recursionRandomFunc(totalCount, filterNumArr) {
          if (filterNumArr === void 0) {
            filterNumArr = [9, 10];
          }
          var randomFishIndex = Math.floor(Math.random() * totalCount);
          if (filterNumArr.indexOf(randomFishIndex) != -1) {
            return this.recursionRandomFunc(totalCount, filterNumArr);
          }
          return randomFishIndex;
        }

        /**
         * @Description: 自定义贝塞尔缓动动画
         * @Date: 2024-06-13 21:21:41
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} actionNode
         * @param {number} duration
         * @param {Vec3} startPos
         * @param {Vec3} centertPos
         * @param {Vec3} endPos
         * @param {TweenEasing} tweenEasing
         * @param {ITweenOption} option
         * @param {number} scaleValue
         * @return {*}
         */;
        GameUtils.qtCustomBezierToAction = function qtCustomBezierToAction(actionNode, duration, startPos, centertPos, endPos, tweenEasing, option, scaleValue) {
          var bezierTween = tween(actionNode);
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
          };
          var scaleTween = tween().to(duration, {
            scale: new Vec3(scaleValue ? scaleValue : 1, scaleValue ? scaleValue : 1, 0)
          });
          var mainTween = tween().to(duration, {}, {
            onStart: function onStart(target) {
              option.onStart == null || option.onStart();
            },
            onUpdate: function onUpdate(target, ratio) {
              if (target) {
                target.position = twoBezier(ratio, startPos, centertPos, endPos);
              }
            },
            onComplete: function onComplete(target) {
              option.onComplete == null || option.onComplete(target);
            },
            easing: tweenEasing
          });
          return bezierTween.parallel(scaleTween, mainTween);
        }

        /**
         * @Description: 数字固定长度不够补0
         * @Date: 2024-06-14 11:29:54
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} num
         * @param {number} length
         * @return {*}
         */;
        GameUtils.prefixInteger = function prefixInteger(num, length) {
          return (Array(length).join('0') + num).slice(-length);
        }

        /**
         * @Description: 游戏场景播放音效播放音效
         * @Date: 2024-06-16 16:37:27
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        GameUtils.playSfx = function playSfx(sfxClip) {
          if (!sfxClip) {
            return;
          }
          var bgAudioNode = find('Canvas').getChildByName('bgAudioNode');
          if (bgAudioNode) {
            var audioSourceComp = bgAudioNode.getComponent(AudioSource);
            if (audioSourceComp) {
              audioSourceComp.playOneShot(sfxClip);
            }
          }
        };
        return GameUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GFLocalDBUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GFSingleClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, sys, GFSingleClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      GFSingleClass = module.GFSingleClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d9809zvwQdBarnHxJ5JO9ec", "GFLocalDBUtils", undefined);
      var TAG = 'GFLocalDBUtils';
      var GFLocalDBUtils = /*#__PURE__*/function (_GFSingleClass) {
        _inheritsLoose(GFLocalDBUtils, _GFSingleClass);
        function GFLocalDBUtils() {
          return _GFSingleClass.apply(this, arguments) || this;
        }
        GFLocalDBUtils.ins = function ins() {
          return _GFSingleClass.ins.call(this);
        }

        /**
         * @Description: 存储字符串
         * @Date: 2024-06-11 18:18:11
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {*} key
         * @param {*} value
         * @return {*}
         */;
        var _proto = GFLocalDBUtils.prototype;
        _proto.setString = function setString(key, value) {
          this._writeToLocal(key, value);
        }

        /**
         * @Description: 获取字符串
         * @Date: 2024-06-11 18:18:22
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {*} key
         * @return {*}
         */;
        _proto.getString = function getString(key) {
          return this._readFromLocal(key);
        }

        /**
         * @Description: 存储bool值
         * @Date: 2024-06-11 18:18:30
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {*} key
         * @param {*} value
         * @return {*}
         */;
        _proto.setBool = function setBool(key, value) {
          var writeValue = value === true ? "true" : "false";
          this._writeToLocal(key, writeValue);
        }

        /**
        * @Description: 获取bool值
        * @Date: 2024-06-11 18:18:30
        * @Author: GFanStudio-LeeSir-JYJ add
        * @param {*} key
        * @param {*} value
        * @return {*}
        */;
        _proto.getBool = function getBool(key) {
          var value = this._readFromLocal(key);
          if (value == null || value == undefined) {
            return false;
          }
          return value === "true";
        };
        _proto._writeToLocal = function _writeToLocal(key, value) {
          if (value == null || value == undefined || value == "") {
            throw new Error("[" + TAG + "] value is null or undefined");
          }
          sys.localStorage.setItem(key, value);
        };
        _proto._readFromLocal = function _readFromLocal(key) {
          return sys.localStorage.getItem(key);
        };
        return GFLocalDBUtils;
      }(GFSingleClass);
      var localDBUtils = exports('localDBUtils', GFLocalDBUtils.ins());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GFSingleClass.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0d759HlDpRJLKiugLL51Ex2", "GFSingleClass", undefined);
      /*
       * @Description:游戏单例类
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-09 20:28:01
       * @LastEditTime: 2024-06-10 10:45:56
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/cores/base/GFSingleClass.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */

      var GFSingleClass = exports('GFSingleClass', /*#__PURE__*/function () {
        function GFSingleClass() {}
        GFSingleClass.ins = function ins() {
          if (!this._ins) {
            this._ins = new this();
          }
          return this._ins;
        };
        return GFSingleClass;
      }());
      GFSingleClass._ins = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GFSingleClass.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GFSingleClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GFSingleClass = module.GFSingleClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05900EKSmZKD5xQbdHbgDSr", "HttpManager", undefined);
      var RequestType = /*#__PURE__*/function (RequestType) {
        RequestType["Type_Get"] = "GET";
        RequestType["Type_Post"] = "POST";
        return RequestType;
      }(RequestType || {});
      var TAG = 'HttpManager';
      var HttpManager = /*#__PURE__*/function (_GFSingleClass) {
        _inheritsLoose(HttpManager, _GFSingleClass);
        function HttpManager() {
          return _GFSingleClass.apply(this, arguments) || this;
        }
        HttpManager.ins = function ins() {
          return _GFSingleClass.ins.call(this);
        }

        /**
         * @Description: http的post请求
         * @Date: 2024-06-10 18:46:26
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} routeUrl
         * @param {any} params
         * @return {*}
         */;
        var _proto = HttpManager.prototype;
        _proto.httpPost = /*#__PURE__*/
        function () {
          var _httpPost = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(routeUrl, params) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", fetch(routeUrl, {
                    method: RequestType.Type_Post,
                    body: JSON.stringify(params),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }).then(function (response) {
                    return response.json();
                  })["catch"](function (error) {
                    // uiMgr.showToastView(GameLanguageKey.GLK_NetError);
                    console.log(TAG, "error ==> " + error);
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function httpPost(_x, _x2) {
            return _httpPost.apply(this, arguments);
          }
          return httpPost;
        }();
        return HttpManager;
      }(GFSingleClass);
      var httpMgr = exports('httpMgr', HttpManager.ins());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoaderManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GFSingleClass.ts', './GameResPath.ts', './GameUtils.ts', './ModuleDef.ts', './ResourceMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, assetManager, GFSingleClass, GameResPath, GameUtils, ModuleDef, ResourceMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }, function (module) {
      GFSingleClass = module.GFSingleClass;
    }, function (module) {
      GameResPath = module.GameResPath;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dff8f6kP51BsLpUXw+JJ2EZ", "LoaderManager", undefined);
      var TAG = 'LoaderManager';
      var LoaderManager = exports('LoaderManager', /*#__PURE__*/function (_GFSingleClass) {
        _inheritsLoose(LoaderManager, _GFSingleClass);
        function LoaderManager() {
          return _GFSingleClass.apply(this, arguments) || this;
        }
        LoaderManager.ins = function ins() {
          return _GFSingleClass.ins.call(this);
        }

        /**
         * @Description: 加载游戏bundle
         * @Date: 2024-06-10 10:02:36
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} bundleNameOrPath
         * @return {*}
         */;
        var _proto = LoaderManager.prototype;
        _proto.loadBundle = function loadBundle(bundleNameOrPath) {
          if (bundleNameOrPath === void 0) {
            bundleNameOrPath = GameResPath.fishBundleName;
          }
          return new Promise(function (reslove, reject) {
            if (GameUtils.isCheckStringEmpty(bundleNameOrPath)) {
              return reject(new Error(bundleNameOrPath + " is empty"));
            }
            assetManager.loadBundle(bundleNameOrPath, function (err, bundle) {
              if (err) {
                console.error(TAG, "load bundle <" + GameResPath.fishBundleName + "> error: " + err);
                return reject(err);
              }
              return reslove(bundle);
            });
          });
        }

        /**
         * @Description: 通用根据资源类型加载bundle中游戏资源
         * @Date: 2024-06-10 10:01:38
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} resPath 资源路径
         * @param {*} resType 资源类型
         * @return {*}
         */;
        _proto.loadGameRes = function loadGameRes(resPath, resType) {
          return new Promise(function (reslove, reject) {
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.FISH, "fishGame/" + resPath, resType, function (error, resObj) {
              if (error || !resObj) {
                return reject(error);
              }
              return reslove(resObj);
            });
          });
        };
        return LoaderManager;
      }(GFSingleClass));
      var loaderMgr = exports('loaderMgr', LoaderManager.ins());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loadingMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameData.ts', './EventManager.ts', './GameEvents.ts', './GameUtils.ts', './GameConst2.ts', './WSManager.ts', './GameHost.ts', './WSNetCmd.ts', './UIManager.ts', './GamePlayerData.ts', './SubGameMgr.ts', './SubGameDef.ts', './UserMgr.ts', './FishGameMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, ProgressBar, AudioSource, AudioClip, Component, gameData, eventMgr, GameEvents, GameUtils, NetCodeConst, WSManager, GameHost, getGameProtoIdByWsNetCmd, WSNetCmdType, WSNetCmd, uiMgr, GamePlayerData, SubGameMgr, SubGameDef, UserMgr, FishGameMgr;
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
      ProgressBar = module.ProgressBar;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      eventMgr = module.eventMgr;
    }, function (module) {
      GameEvents = module.GameEvents;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      NetCodeConst = module.NetCodeConst;
    }, function (module) {
      WSManager = module.WSManager;
    }, function (module) {
      GameHost = module.GameHost;
    }, function (module) {
      getGameProtoIdByWsNetCmd = module.getGameProtoIdByWsNetCmd;
      WSNetCmdType = module.WSNetCmdType;
      WSNetCmd = module.WSNetCmd;
    }, function (module) {
      uiMgr = module.uiMgr;
    }, function (module) {
      GamePlayerData = module.GamePlayerData;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      FishGameMgr = module.FishGameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "419cb/5CCNHJKUtCCXuUORI", "loadingMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var loadingMgr = exports('loadingMgr', (_dec = ccclass('loadingMgr'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ProgressBar), _dec6 = property(AudioSource), _dec7 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(loadingMgr, _Component);
        function loadingMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "logicLayerNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loginViewNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startGameBtnNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingProgressBar", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioSource", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickSfxClip", _descriptor6, _assertThisInitialized(_this));
          _this._totalCount = 5;
          _this._curCount = 0;
          _this._addProgressNum = 0.1;
          return _this;
        }
        var _proto = loadingMgr.prototype;
        _proto.start = function start() {
          this._initEvent();
          this._initUIData();
          tgx.UIMgr.inst.closeAll();
        };
        _proto._initEvent = function _initEvent() {
          eventMgr.on(GameEvents.UI_LoginOrRegisterSuccess, this._onLoginOrRegisterSuccess, this);
          eventMgr.on(getGameProtoIdByWsNetCmd(WSNetCmd.WNC_CheckConnect, WSNetCmdType.WNCT_Response), this._onCheckWSConnectCallback, this);
          eventMgr.on(getGameProtoIdByWsNetCmd(WSNetCmd.WNC_GetUserInfo, WSNetCmdType.WNCT_Response), this._onGetUserInfoCallback, this);
        };
        _proto._initUIData = function _initUIData() {
          if (this.startGameBtnNode) {
            this.startGameBtnNode.active = false;
          }
          gameData.isOnlineLogin = false;
          gameData.isWSConnected = false;
          this.loadingProgressBar.node.active = false;
          this.startLoading();
        };
        _proto.startLoading = function startLoading() {
          if (this.loadingProgressBar) {
            this.loadingProgressBar.node.active = true;
            this.loadingProgressBar.progress = 0;
            FishGameMgr.inst.loadResource(function (process) {
              this._updateProgressValue(process);
            }.bind(this));

            // tween(this.loadingProgressBar)
            //     .to(1, { progress: 0.4 }, { easing: "quadOut" })
            //     .call(() => {
            //         this._curCount++;
            //         this._updateProgressValue(this._addProgressNum);
            //         let cfgsPathArr = [
            //             GameResPath.dataConfigsPath.cannonCfgs,
            //             GameResPath.dataConfigsPath.fishCfgs,
            //             GameResPath.dataConfigsPath.shopCfgs,
            //             GameResPath.dataConfigsPath.traceCfgs,
            //             GameResPath.dataConfigsPath.themeCfgs
            //         ];
            //         for (let i = 0; i < cfgsPathArr.length; i++) {
            //             const pathName = cfgsPathArr[i];
            //             loaderMgr.loadGameRes(GameResPath.getLocalDataCfgPath(pathName), JsonAsset)
            //                 .then((jsonAsset: JsonAsset) => {

            //                     if (pathName == GameResPath.dataConfigsPath.cannonCfgs) {
            //                         gameData.cannonConfigsObjArr = <ICannonConfigsObj[]>jsonAsset.json;
            //                     } else if (pathName == GameResPath.dataConfigsPath.fishCfgs) {
            //                         gameData.fishConfigsObjArr = <IFishConfigsObj[]>jsonAsset.json;
            //                     } else if (pathName == GameResPath.dataConfigsPath.shopCfgs) {
            //                         gameData.shopConfigsObjArr = <IShopConfigsObj[]>jsonAsset.json;
            //                     } else if (pathName == GameResPath.dataConfigsPath.traceCfgs) {
            //                         gameData.parseTracePostionToArr(jsonAsset.json);
            //                     } else if (pathName == GameResPath.dataConfigsPath.themeCfgs) {
            //                         gameData.parseThemeCfgObjToArr(jsonAsset.json);
            //                     }
            //                     this._curCount++;
            //                     this._updateProgressValue(this._addProgressNum);
            //                     if (this._curCount >= this._totalCount) {
            //                         if (this.loadingProgressBar) {
            //                             this.loadingProgressBar.node.active = false;
            //                         }
            //                         this.resReady();
            //                     }
            //                 })
            //                 .catch((err) => {
            //                     console.error(TAG, `<_initUIData> err : ${err}`);
            //                 });

            //         }
            //     }).start();
          }
        };

        _proto._updateProgressValue = function _updateProgressValue(value) {
          if (this.loadingProgressBar) {
            this.loadingProgressBar.progress = value;
            // console.log(TAG, `<_updateProgressValue> progress: ${this.loadingProgressBar.progress}`);
          }
        }

        /**
         * @Description: 登录或注册成功失败回调
         * @Date: 2024-06-10 21:39:35
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} data
         * @return {*}
         */;
        _proto._onLoginOrRegisterSuccess = function _onLoginOrRegisterSuccess(data) {
          if (!data) {
            return;
          }
          var result = data.result;
          var msg = data.msg;
          if (result) {
            if (this.startGameBtnNode) {
              this.startGameBtnNode.active = true;
            }
            //链接校验ws服务
            WSManager.wsConnect(GameHost.gameRouteUrlWs);
          } else {
            if (this.startGameBtnNode) {
              this.startGameBtnNode.active = false;
            }
          }
        }

        /**
         * @Description: 处理服务器检测ws链接响应
         * @Date: 2024-06-11 17:47:56
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} data
         * @return {*}
         */;
        _proto._onCheckWSConnectCallback = function _onCheckWSConnectCallback(data) {
          if (!data) {
            return;
          }
          gameData.isWSConnected = true;
        }

        /**
         * @Description: 处理ws服务器获取用户信息响应
         * @Date: 2024-06-11 18:02:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} msgObj
         * @return {*}
         */;
        _proto._onGetUserInfoCallback = function _onGetUserInfoCallback(msgObj) {
          if (!msgObj) {
            return;
          }
          if (!gameData.isOnlineLogin || !gameData.isWSConnected) {
            // uiMgr.showToastView(GameLanguageKey.GLK_NetError);
            return;
          }
          var code = msgObj.code;
          var message = msgObj.message;
          if (code == NetCodeConst.CommonErrorCode) {
            uiMgr.showToastView(message);
            return;
          }
          var userinfoObj = msgObj.data.userinfo;
          if (userinfoObj) {
            gameData.curPlayerData.gold_num = userinfoObj.gold_num;
            gameData.curPlayerData.silver_num = userinfoObj.silver_num;
            gameData.curPlayerData.level = userinfoObj.level;
            gameData.curPlayerData.score_num = userinfoObj.score_num;
            gameData.curPlayerData.lock_cannontype = userinfoObj.lock_cannontype;
            gameData.curPlayerData.lock_fishtype = userinfoObj.lock_fishtype;
          }
          gameData.updateLocalCacheUserInfo();
          GameUtils.switchScene("game_fish");
        }

        /**
         * @Description: 点击登录按钮
         * 登录http---> 检测链接ws服务---> 获取最新玩家的数据信息-->自定登录链接ws服务器
         * @Date: 2024-06-11 17:00:18
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.onClickStartGameBtnEvent = /*#__PURE__*/
        function () {
          var _onClickStartGameBtnEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var player;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (gameData.isLocalDebug) {
                    gameData.isOnlineLogin = true;
                    gameData.isWSConnected = true;
                    player = new GamePlayerData();
                    player.uid = "test";
                    player.uuid = "test";
                    player.password = "test";
                    player.uname = "test";
                    player.normalUName = "test";
                    player.score_num = 0;
                    player.silver_num = 10000;
                    player.gold_num = UserMgr.inst.coin;
                    player.level = 10;
                    gameData.curPlayerData = player;
                    gameData.updateLocalCacheUserInfo(); //test
                  }

                  _context.next = 3;
                  return SubGameMgr.inst.CreateRoom(SubGameDef.FISH_MASTER, true);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onClickStartGameBtnEvent() {
            return _onClickStartGameBtnEvent.apply(this, arguments);
          }
          return onClickStartGameBtnEvent;
        }();
        _proto.resReady = function resReady() {
          if (this.startGameBtnNode) {
            this.startGameBtnNode.active = true;
          }
          GameUtils.playSfx(this.clickSfxClip);
        };
        _proto.enterGame = function enterGame() {
          if (gameData.isLocalDebug) {
            gameData.isOnlineLogin = true;
            gameData.isWSConnected = true;
            var player = new GamePlayerData();
            player.uid = "test";
            player.uuid = "test";
            player.password = "test";
            player.uname = "test";
            player.normalUName = "test";
            player.score_num = 0;
            player.silver_num = 10000;
            player.gold_num = UserMgr.inst.coin;
            player.level = 10;
            gameData.curPlayerData = player;
            gameData.updateLocalCacheUserInfo(); //test
            return;
          }
          if (!gameData.isOnlineLogin || !gameData.isWSConnected) {
            // uiMgr.showToastView(GameLanguageKey.GLK_NetError);
            return;
          }
          if (!gameData.curPlayerData) {
            return;
          }
          var uid = gameData.curPlayerData.uid;
          var uname = gameData.curPlayerData.normalUName;
          WSManager.sendMessage(WSNetCmd.WNC_GetUserInfo, {
            uid: uid,
            uname: uname
          });
        }

        /**
         * @Description: 播放音效
         * @Date: 2024-06-16 16:37:27
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._playSfx = function _playSfx(sfxClip) {
          if (!this.audioSource || !sfxClip) {
            return;
          }
          this.audioSource.playOneShot(sfxClip);
        };
        _proto.onDestroy = function onDestroy() {
          eventMgr.off(GameEvents.UI_LoginOrRegisterSuccess, this._onLoginOrRegisterSuccess);
          eventMgr.off(getGameProtoIdByWsNetCmd(WSNetCmd.WNC_CheckConnect, WSNetCmdType.WNCT_Response), this._onCheckWSConnectCallback);
          eventMgr.off(getGameProtoIdByWsNetCmd(WSNetCmd.WNC_GetUserInfo, WSNetCmdType.WNCT_Response), this._onGetUserInfoCallback);
        };
        _proto.update = function update(deltaTime) {};
        return loadingMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "logicLayerNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loginViewNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startGameBtnNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingProgressBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "clickSfxClip", [_dec7], {
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

System.register("chunks:///_virtual/LoginView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager.ts', './GameUtils.ts', './GameConst2.ts', './jsencrypt.mjs_cjs=&original=.js', './SecretConfig.ts', './HttpManager.ts', './GameHost.ts', './GameData.ts', './GamePlayerData.ts', './EventManager.ts', './GameEvents.ts', './jsencrypt.js'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EditBox, Node, Component, uiMgr, GameUtils, NetCodeConst, JsCrypt_PublicKey, httpMgr, GameHost, gameData, GamePlayerData, eventMgr, GameEvents, _cjsExports;
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
      EditBox = module.EditBox;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      uiMgr = module.uiMgr;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      NetCodeConst = module.NetCodeConst;
    }, null, function (module) {
      JsCrypt_PublicKey = module.JsCrypt_PublicKey;
    }, function (module) {
      httpMgr = module.httpMgr;
    }, function (module) {
      GameHost = module.GameHost;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GamePlayerData = module.GamePlayerData;
    }, function (module) {
      eventMgr = module.eventMgr;
    }, function (module) {
      GameEvents = module.GameEvents;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a3e61CGCBxLc683n3C1NeBw", "LoginView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var crypt = new _cjsExports();
      crypt.setKey(JsCrypt_PublicKey);
      var LoginView = exports('LoginView', (_dec = ccclass('LoginView'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginView, _Component);
        function LoginView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uNameEditBox", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pwdEditBox", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "netLoadingViewNode", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LoginView.prototype;
        _proto.start = function start() {
          this._initEvent();
          this._initUIData();
        };
        _proto._initUIData = function _initUIData() {
          if (this.netLoadingViewNode) {
            this.netLoadingViewNode.active = false;
          }
        };
        _proto._initEvent = function _initEvent() {}

        /**
         * @Description: 点击登录按钮
         * @Date: 2024-06-09 21:28:46
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto.onClickLoginBtnEvent = /*#__PURE__*/
        function () {
          var _onClickLoginBtnEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var originName, originPwd, uname, password, params, res, code, data, message, player;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.uNameEditBox || !this.pwdEditBox || GameUtils.isCheckStringEmpty(this.uNameEditBox.string) || GameUtils.isCheckStringEmpty(this.pwdEditBox.string))) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  originName = this.uNameEditBox.string;
                  originPwd = this.pwdEditBox.string;
                  uname = crypt.encrypt(originName);
                  password = crypt.encrypt(originPwd);
                  params = {
                    uname: uname,
                    password: password
                  };
                  this._showNetLoadingView(true);
                  _context.next = 10;
                  return httpMgr.httpPost(GameHost.gameUserLoginUrl, params);
                case 10:
                  res = _context.sent;
                  this._showNetLoadingView(false);
                  if (res) {
                    _context.next = 14;
                    break;
                  }
                  return _context.abrupt("return");
                case 14:
                  code = res.code;
                  data = res.data;
                  message = res.message;
                  if (code == NetCodeConst.LoginSuccess) {
                    gameData.isOnlineLogin = true;
                    player = new GamePlayerData();
                    player.uid = data.token;
                    player.uuid = data.token;
                    player.password = password;
                    player.uname = uname;
                    player.normalUName = originName;
                    gameData.curPlayerData = player;
                    uiMgr.showToastView(message);
                    this.node.active = false;
                    setTimeout(function () {
                      eventMgr.emit(GameEvents.UI_LoginOrRegisterSuccess, {
                        result: true,
                        msg: message
                      });
                    }, 800);
                  } else {
                    uiMgr.showToastView(message);
                  }
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClickLoginBtnEvent() {
            return _onClickLoginBtnEvent.apply(this, arguments);
          }
          return onClickLoginBtnEvent;
        }()
        /**
         * @Description: 点击注册按钮
         * @Date: 2024-06-09 21:28:37
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;

        _proto.onClickRegisterBtnEvent = /*#__PURE__*/
        function () {
          var _onClickRegisterBtnEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var originName, originPwd, uname, password, params, res, code, data, message, player;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.uNameEditBox || !this.pwdEditBox || GameUtils.isCheckStringEmpty(this.uNameEditBox.string) || GameUtils.isCheckStringEmpty(this.pwdEditBox.string))) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  originName = this.uNameEditBox.string;
                  originPwd = this.pwdEditBox.string;
                  uname = crypt.encrypt(originName);
                  password = crypt.encrypt(originPwd);
                  params = {
                    uname: uname,
                    password: password
                  };
                  this._showNetLoadingView(true);
                  _context2.next = 10;
                  return httpMgr.httpPost(GameHost.gameUserRegisterUrl, params);
                case 10:
                  res = _context2.sent;
                  this._showNetLoadingView(false);
                  if (res) {
                    _context2.next = 14;
                    break;
                  }
                  return _context2.abrupt("return");
                case 14:
                  code = res.code;
                  data = res.data;
                  message = res.message;
                  if (code == NetCodeConst.RegisterSuccess) {
                    gameData.isOnlineLogin = true;
                    player = new GamePlayerData();
                    player.uid = data.token;
                    player.uuid = data.token;
                    player.password = password;
                    player.uname = uname;
                    player.normalUName = originName;
                    gameData.curPlayerData = player;
                    uiMgr.showToastView(message);
                    this.node.active = false;
                    setTimeout(function () {
                      eventMgr.emit(GameEvents.UI_LoginOrRegisterSuccess, {
                        result: true,
                        msg: message
                      });
                    }, 800);
                  } else {
                    uiMgr.showToastView(message);
                  }
                case 18:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onClickRegisterBtnEvent() {
            return _onClickRegisterBtnEvent.apply(this, arguments);
          }
          return onClickRegisterBtnEvent;
        }();
        _proto._showNetLoadingView = function _showNetLoadingView(isShow) {
          if (this.netLoadingViewNode) {
            this.netLoadingViewNode.active = isShow;
          }
        };
        _proto.update = function update(deltaTime) {};
        return LoginView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uNameEditBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pwdEditBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "netLoadingViewNode", [_dec4], {
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

System.register("chunks:///_virtual/module_fish", ['./GFSingleClass.ts', './CryptoUtils.ts', './SecretConfig.ts', './crypto-js.min.mjs_cjs=&original=.js', './EventManager.ts', './HttpManager.ts', './WSManager.ts', './WSNetCmd.ts', './GFLocalDBUtils.ts', './FishGameMgr.ts', './GameConst2.ts', './GameData.ts', './GameEvents.ts', './GameHost.ts', './GameInterface.ts', './GamePlayerData.ts', './GameResPath.ts', './gameMgr2.ts', './loadingMgr.ts', './LoaderManager.ts', './UIManager.ts', './BulletNodePool.ts', './FishNodePool.ts', './FlyCoinNodePool.ts', './FlyGoldNodePool.ts', './FlySilverNodePool.ts', './NetNodePool.ts', './BackgroundItem.ts', './BulletItem.ts', './CannonItem.ts', './CoinScoreItem.ts', './FishItem.ts', './FishItemCollider.ts', './FlyCoinsItem.ts', './NetItem.ts', './NetItemCollider.ts', './ShopItem.ts', './WaveLightComp.ts', './CommonPopView.ts', './LoginView.ts', './NetLoadingView.ts', './ShopView.ts', './ToastView.ts', './GameUtils.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/NetItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetNodePool.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, tween, Vec3, NetNodePool;
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
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      NetNodePool = module.NetNodePool;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5a2cdviPNxIALgi8dzIv/Go", "NetItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NetItem = exports('NetItem', (_dec = ccclass('NetItem'), _dec2 = property([Node]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetItem, _Component);
        function NetItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "netNodeArr", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = NetItem.prototype;
        _proto.start = function start() {};
        _proto.playShotNetAni = function playShotNetAni(weaponLevelType, callback) {
          var _this2 = this;
          var index = weaponLevelType;
          if (index > 7) {
            index = 7;
          } else if (index < 1) {
            index = 1;
          }
          var _loop = function _loop() {
            var node = _this2.netNodeArr[i];
            if (!node) {
              return 1; // continue
            }

            var netIndex = i + 1;
            if (index == netIndex) {
              node.active = true;
              tween(node).to(0.6, {
                scale: new Vec3(0, 0)
              }).call(function () {
                node.active = false;
                node.setScale(1, 1, 1);
                _this2.node.active = false;
                _this2.node.removeFromParent();
                _this2.node.parent = null;
                // this.node.destroy();
                NetNodePool.put(_this2.node);
                if (callback) {
                  callback();
                }
                //TODO
              }).start();
            } else {
              node.active = false;
            }
          };
          for (var i = 0; i < this.netNodeArr.length; i++) {
            if (_loop()) continue;
          }
        };
        _proto.update = function update(deltaTime) {};
        return NetItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "netNodeArr", [_dec2], {
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

System.register("chunks:///_virtual/NetItemCollider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst2.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, GameColliderTags;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      GameColliderTags = module.GameColliderTags;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7dbf8YUSiNKNJgTPIrcfa1H", "NetItemCollider", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NetItemCollider = exports('NetItemCollider', (_dec = ccclass('NetItemCollider'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetItemCollider, _Component);
        function NetItemCollider() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = NetItemCollider.prototype;
        _proto.start = function start() {
          var collider = this.node.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (selfCollider.tag == GameColliderTags.GCT_Net1 || selfCollider.tag == GameColliderTags.GCT_Net2 || selfCollider.tag == GameColliderTags.GCT_Net3 || selfCollider.tag == GameColliderTags.GCT_Net4 || selfCollider.tag == GameColliderTags.GCT_Net5 || selfCollider.tag == GameColliderTags.GCT_Net6 || selfCollider.tag == GameColliderTags.GCT_Net7) {
            if (otherCollider.tag == GameColliderTags.GCT_Fish) ;
          }
        };
        _proto.update = function update(deltaTime) {};
        return NetItemCollider;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetLoadingView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Tween, tween, Component;
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
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "046294Z9WlPDbU7oSA0gz+H", "NetLoadingView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NetLoadingView = exports('NetLoadingView', (_dec = ccclass('NetLoadingView'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetLoadingView, _Component);
        function NetLoadingView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingNode", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = NetLoadingView.prototype;
        _proto.start = function start() {
          this._initUIData();
        };
        _proto._initUIData = function _initUIData() {
          var _this2 = this;
          if (this.loadingNode) {
            Tween.stopAllByTarget(this.loadingNode);
            this.scheduleOnce(function () {
              if (_this2.loadingNode) {
                tween(_this2.loadingNode).by(0.5, {
                  angle: 360
                }).repeatForever().start();
              }
            }, 0.1);
          }
        }

        /**
         * @Description: 自定义关闭函数
         * @Date: 2024-06-10 09:07:54
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._closeSelf = function _closeSelf() {
          if (this.loadingNode) {
            Tween.stopAllByTarget(this.loadingNode);
          }
          this.node.active = false;
          this.node.removeFromParent();
          this.node.destroy();
        }

        // protected onDestroy(): void {
        //     this._closeSelf();
        //     super.onDestroy();
        // }
        ;

        _proto.update = function update(deltaTime) {};
        return NetLoadingView;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingNode", [_dec2], {
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

System.register("chunks:///_virtual/NetNodePool.ts", ['cc'], function (exports) {
  var cclegacy, NodePool, instantiate, Tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9f6dfahGT9GhIMb9zhtF+mm", "NetNodePool", undefined);
      var NetNodePool = exports('NetNodePool', /*#__PURE__*/function () {
        function NetNodePool() {}
        /**
         * @Description: 首次初始化一定数量的节点备用
         * @Date: 2024-06-13 22:53:58
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Prefab} prefab
         * @return {*}
         */
        NetNodePool.preInitPool = function preInitPool(prefab) {
          if (prefab === void 0) {
            prefab = null;
          }
          if (!prefab) {
            return;
          }
          for (var i = 0; i < 10; i++) {
            var node = null;
            if (prefab) {
              node = instantiate(prefab);
            }
            this.put(node);
          }
        }

        /**
         * @Description: 从节点池取出node
         * @Date: 2024-06-13 22:53:44
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {any} prefabNode
         * @return {*}
         */;
        NetNodePool.get = function get(prefabNode) {
          var node = null;
          if (this._nodePool.size() > 0) {
            node = this._nodePool.get();
          } else {
            node = instantiate(prefabNode);
          }
          node.active = true;
          return node;
        }

        /**
         * @Description: 移除对象重新放入到节点池等待使用
         * @Date: 2024-06-13 22:53:20
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} node
         * @return {*}
         */;
        NetNodePool.put = function put(node) {
          if (!node) {
            return;
          }
          Tween.stopAllByTarget(node);
          node.active = false;
          this._nodePool.put(node);
        }

        /**
         * @Description: 清空对象池
         * @Date: 2024-06-13 22:53:08
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        NetNodePool.clearNodePool = function clearNodePool() {
          this._nodePool.clear();
        };
        return NetNodePool;
      }());
      NetNodePool._nodePool = new NodePool();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SecretConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9735dywqIlBepfEWpTDx8qa", "SecretConfig", undefined);
      /*
       * @Description: jsencrypt的加密使用的公私秘钥
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-06-10 14:25:37
       * @LastEditTime: 2024-06-10 14:31:17
       * @FilePath: /LessonFishMasters-Servers/gamesrc/core/configs/SecretConfig.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */

      var JsCrypt_PrivateKey = exports('JsCrypt_PrivateKey', "-----BEGIN PRIVATE KEY-----\nMIIEqQIBADANBgkqhkiG9w0BAQEFAASCBJMwggSPAgEAAoH+ALNepTFZSJcGugwq\na9KBZ90RLMJ1/Bgn7KYbh5iX50RpVQIW8wucSrA0vP5dQ+AZMmX+DwvGRP8ctamu\ndRmIE/4XWFI9m5WR+yEwv30D6YAFFQAKk9OOfnz4mkLce5DAy4PrXiGEF5ChDhkt\nuFYyyy4Qg3VCM6cIao1g8N/r8TX4b5rguqctjcNLZUK7PDPsXmmLlxa5wnWta5AY\nd0UL4Jvb7ZzeE9KqeYfanp3f+VrsgvAhCqOAmk8CoF/j6Wvo5BUCtfsb7G03O9mg\nqNBmiE4ySy58hJ+USih7GuJ6q33icYh20dlrJF/DoNLHbhkGWvUr11lVCZSo9FOW\njycCAwEAAQKB/gCbuxypj98aYNi/H0Wl6nyGzxaRb2aEgoVQYq6Dqb89AkawHcS+\n299sxR0hq0/3DWlYbBAcJPRamk6PF8zLcf4JqbMhFCQ05B2pX22h2PeuErt84bIf\nB6SCVEV6r3sI3prT2lJLvyfGhk57Rdq53DfTsrqv396Asynvva7kezFGXkSoT72c\ng9BOxDUZ2WsZTSvV4zG74P3720tZ/AghWoj1z5PLbpCAAIEcmAEV+5Md9KQZPjJc\nR7vLL7ux+GFIBN4pLr7r0DuuRbsw8T4x1JMyahAN1JI+HVsf/OfKCEiaJq7I1wqd\nJmO3MCraeh7EiT5QN4EYja363/Y6caHhAn8OXeIqnfQO/aJFOuhqPi0ggFoaXQLF\njYmlkiCBm2G11zyVomh80UfTe3tT2KZuWiPsXop2HsoarsPqyRqI7Ehf/2GR4P6d\ngHf2G2MVr1Lx8V7Mo+7PwoRNlJBY+bkzHznP/F9TYJQyai67rzezlWZynoE0nsXe\nogxSk3L4W7mTAn8MfC3GjVzPW6XMZpn5A8tXxXjlD6CKdhbQURsyvH6Lbq/dTFro\n7yOS+/MvMpaiwFXZDxFyfnKW62RjfS03pOJ2Qv8cVOpyN48I6PIzTZJAWJja2VdQ\nQSwqaJFZMkUhHNcmiEmH3Mxq6LJF4vusX5wAR7IwdofgvqhZJZI560CdAn8Jve/X\nJjSQ1bxrZX6kTHUdTOvMZLW0cD2eYHBacprXS5RxgyeHPAKQjXMbcBWrTsR9S75o\nSoiRf2CqnKO5pT+OmQX4fbEp7CtsXzXZRoHgPeQisCcICsbcNJmNPAkxeUMineem\nCh9z8DywWChVRkGqB4FlxSQ3y3q/o+yaLNixAn8CTyFEPLbynveuMze9B4efRyWR\n7+74TNjxVF7cZmJdNW6PVmTl+fyxXanfi9KybTIzgAbxDxPwd77Ma8VmKje8Oa3n\nNolZ8I6izjqlZG5tOjWjHFl6vWMGwOpI/fQtKKFePgyjdSHVkA4QwOddPR2kK554\nOiPtXDXUrw85aRo9An8EBNgzYYHYuJe5NT2w0XF5bDdC/7fxwxrkMm0odVpZacWm\n+9fEy/Pmb9CM4oQ/ut/MM98pYPxo5fYeibBinX3Hq+VLwQUVNy8DIhkTb0rKduKg\njfH1GB1pAAeJ9KTNOx9RiNCkL6nX4kDa80R6PxyF1GcyIORxtfhSm3rFKmho\n-----END PRIVATE KEY-----");
      var JsCrypt_PublicKey = exports('JsCrypt_PublicKey', "-----BEGIN PUBLIC KEY-----\nMIIBHjANBgkqhkiG9w0BAQEFAAOCAQsAMIIBBgKB/gCzXqUxWUiXBroMKmvSgWfd\nESzCdfwYJ+ymG4eYl+dEaVUCFvMLnEqwNLz+XUPgGTJl/g8LxkT/HLWprnUZiBP+\nF1hSPZuVkfshML99A+mABRUACpPTjn58+JpC3HuQwMuD614hhBeQoQ4ZLbhWMssu\nEIN1QjOnCGqNYPDf6/E1+G+a4LqnLY3DS2VCuzwz7F5pi5cWucJ1rWuQGHdFC+Cb\n2+2c3hPSqnmH2p6d3/la7ILwIQqjgJpPAqBf4+lr6OQVArX7G+xtNzvZoKjQZohO\nMksufISflEooexrieqt94nGIdtHZayRfw6DSx24ZBlr1K9dZVQmUqPRTlo8nAgMB\nAAE=\n-----END PUBLIC KEY-----");
      var Crypto_AESSecretKey = exports('Crypto_AESSecretKey', "cocosxx-fish-masterxx");
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShopItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst2.ts', './LoaderManager.ts', './GameResPath.ts', './GameUtils.ts', './GameData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Node, AudioClip, SpriteFrame, Component, GameShopTabType, FishTypeGroup, loaderMgr, GameResPath, GameUtils, gameData;
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
      Label = module.Label;
      Node = module.Node;
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      GameShopTabType = module.GameShopTabType;
      FishTypeGroup = module.FishTypeGroup;
    }, function (module) {
      loaderMgr = module.loaderMgr;
    }, function (module) {
      GameResPath = module.GameResPath;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      gameData = module.gameData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "04622PVcOlIJZXBxnAINAP1", "ShopItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TAG = 'ShopItem';
      var ShopItem = exports('ShopItem', (_dec = ccclass('ShopItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShopItem, _Component);
        function ShopItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgSpr", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemSpr", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nameLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "desLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconGoldNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSilverNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickSfxClip", _descriptor8, _assertThisInitialized(_this));
          _this._curGameShopTabType = GameShopTabType.GST_Tab01;
          _this._curShopPropsObj = null;
          return _this;
        }
        var _proto = ShopItem.prototype;
        _proto.start = function start() {};
        _proto.initShopWithData = function initShopWithData(shopTabType, itemObj) {
          var _this2 = this;
          //解锁大炮、解锁鱼群、解锁银币兑换金币等
          this._curGameShopTabType = shopTabType;
          this._curShopPropsObj = itemObj;
          //设置背景图片
          loaderMgr.loadGameRes(GameResPath.getShopTabSpFramePath(shopTabType), SpriteFrame).then(function (spriteFrame) {
            if (_this2.bgSpr) {
              _this2.bgSpr.spriteFrame = spriteFrame;
            }
          })["catch"](function (err) {
            console.error(TAG, "<initShopWithData> err : " + err);
          });
          var nameStr = "";
          var desStr = "";
          var sprAtlasName = "";
          var isNeedGold = true;
          var lockUseNum = 0; //解锁兑换道具需要的金币或银币数量
          var scaleItemValue = 1;
          if (this._curGameShopTabType == GameShopTabType.GST_Tab01) {
            var obj = itemObj;
            nameStr = obj.name;
            desStr = obj.desc.replace("$", "" + obj.hurtHp);
            lockUseNum = obj.lockGolds;
            sprAtlasName = "" + GameResPath.getCannonSpFramePath(obj.cannonType);
          } else if (this._curGameShopTabType == GameShopTabType.GST_Tab02) {
            var _obj = itemObj;
            nameStr = _obj.name;
            desStr = _obj.desc.replace("$", "" + _obj.golds);
            lockUseNum = _obj.lockGolds;
            sprAtlasName = "" + GameResPath.getFishSpFramePath(_obj.fishType);
            scaleItemValue = 0.5;
            if (FishTypeGroup.FTC_NormalFish == gameData.checkFishTypeGroupByType(_obj.type)) {
              scaleItemValue = 1;
            }
          } else if (this._curGameShopTabType == GameShopTabType.GST_Tab03) {
            var _obj2 = itemObj;
            nameStr = _obj2.name;
            desStr = _obj2.desc.replace("${1}", "" + _obj2.num);
            desStr = desStr.replace("${2}", "" + _obj2.golds);
            sprAtlasName = GameResPath.resGameTexturePath.gameTexture02 + "/" + _obj2.icon;
            isNeedGold = false;
            lockUseNum = _obj2.num;
            scaleItemValue = 0.8;
          }
          if (this.iconGoldNode) {
            this.iconGoldNode.active = isNeedGold;
          }
          if (this.iconSilverNode) {
            this.iconSilverNode.active = !isNeedGold;
          }
          if (this.nameLabel) {
            this.nameLabel.string = nameStr;
          }
          if (this.desLabel) {
            this.desLabel.string = desStr;
          }
          if (this.numLabel) {
            this.numLabel.string = "" + lockUseNum;
          }
          if (!GameUtils.isCheckStringEmpty(sprAtlasName)) {
            loaderMgr.loadGameRes(sprAtlasName, SpriteFrame).then(function (spriteFrame) {
              if (_this2.itemSpr) {
                _this2.itemSpr.spriteFrame = spriteFrame;
                _this2.itemSpr.node.setScale(scaleItemValue, scaleItemValue, scaleItemValue);
                _this2.itemSpr.node.active = true;
              }
            })["catch"](function (err) {
              console.error(TAG, "<initShopWithData> err : " + err);
            });
          }
        };
        _proto.onClickExchangeBtnEvent = function onClickExchangeBtnEvent() {
          // if (!gameData || !gameData.curPlayerData) {
          //     return;
          // }
          // GameUtils.playSfx(this.clickSfxClip);
          // let curHaveSilverNum = gameData.curPlayerData.silver_num;
          // let curHaveGoldNum = gameData.curPlayerData.gold_num;
          // let isUseGold: boolean = true;
          // let lockNeedCoinNum: number = 0;
          // let tipContent: string = "";
          // let getGoldNum: number = 0;
          // let lockType: number = 0;
          // console.log(TAG, `<onClickExchangeBtnEvent> tabtype: ${this._curGameShopTabType}`);
          // if (this._curGameShopTabType === GameShopTabType.GST_Tab01) {
          //     let obj = this._curShopPropsObj as ICannonConfigsObj;
          //     //检测要解锁的大炮类型是否其上一级大炮已经解锁解锁顺序为<1-2-3-4-5-6-7>
          //     let lockCannonType = gameData.curPlayerData.lock_cannontype;
          //     lockCannonType.sort((a, b) => a - b);
          //     //当前要解锁的大炮等级
          //     lockType = obj.cannonType;
          //     //游戏默认解锁1、2级2种大炮
          //     let lastLockType = lockType - 1;
          //     if (lockCannonType.indexOf(lastLockType) == -1) {
          //         // uiMgr.showToastView(GameLanguageKey.GLK_ShopLockCannonTypeErr);
          //         return;
          //     }
          //     // for (let i = 1; i <= lastLockType; i++) {
          //     //     if (lockCannonType.indexOf(lastLockType) == -1) {
          //     //         uiMgr.showToastView(GameLanguageKey.GLK_ShopLockCannonTypeErr);
          //     //         break;
          //     //     }
          //     // }
          //     tipContent = GameLanguageKey.GLK_ShopBuyLockTips.replace("${0}", `${obj.lockGolds}${GameLanguageKey.GLK_Golds}`);
          //     tipContent = tipContent.replace("${1}", `${obj.name}`);
          //     lockNeedCoinNum = obj.lockGolds;
          // } else if (this._curGameShopTabType === GameShopTabType.GST_Tab02) {
          //     let obj = this._curShopPropsObj as IFishConfigsObj;
          //     tipContent = GameLanguageKey.GLK_ShopBuyLockTips.replace("${0}", `${obj.lockGolds}${GameLanguageKey.GLK_Golds}`);
          //     tipContent = tipContent.replace("${1}", `${obj.name}`);
          //     lockNeedCoinNum = obj.lockGolds;
          //     lockType = obj.type;
          // } else if (this._curGameShopTabType === GameShopTabType.GST_Tab03) {
          //     isUseGold = false;
          //     let obj = this._curShopPropsObj as IShopConfigsObj;
          //     tipContent = GameLanguageKey.GLK_ShopBuyLockTips.replace("${0}", `${obj.num}${GameLanguageKey.GLK_Silvers}`);
          //     tipContent = tipContent.replace("${1}", `${obj.name}`);
          //     lockNeedCoinNum = obj.num;
          //     getGoldNum = obj.golds;
          // }
          // // console.log(TAG, `<onClickExchangeBtnEvent> tabtype: ${this._curGameShopTabType} , tipContent :${tipContent}`);
          // if (isUseGold) {
          //     if (curHaveGoldNum < lockNeedCoinNum) {
          //         uiMgr.showToastView(GameLanguageKey.GLK_NoEnoughGolds);
          //         return;
          //     }
          //     uiMgr.showCommonPopView(
          //         tipContent,
          //         null,
          //         GameLanguageKey.GLK_ConfirmLock,
          //         null,
          //         () => {
          //             GameUtils.playSfx(this.clickSfxClip);
          //             gameData.curPlayerData.gold_num -= lockNeedCoinNum;
          //             if (this._curGameShopTabType === GameShopTabType.GST_Tab01) {
          //                 gameData.curPlayerData.lock_cannontype.push(lockType);
          //             } else if (this._curGameShopTabType === GameShopTabType.GST_Tab02) {
          //                 gameData.curPlayerData.lock_fishtype.push(lockType);
          //             }
          //             //通知刷新界面
          //             director.emit(GameEvents.UI_ShopExchangeRefreshUI);
          //             gameData.updateLocalCacheUserInfo();
          //             uiMgr.showToastView(GameLanguageKey.GLK_ShopLockSuccess);
          //         });
          // } else {
          //     if (curHaveSilverNum < lockNeedCoinNum) {
          //         uiMgr.showToastView(GameLanguageKey.GLK_NoEnoughSilvers);
          //         return;
          //     }
          //     uiMgr.showCommonPopView(
          //         tipContent,
          //         null,
          //         GameLanguageKey.GLK_ConfirmExchange,
          //         null,
          //         () => {
          //             GameUtils.playSfx(this.clickSfxClip);
          //             gameData.curPlayerData.silver_num -= lockNeedCoinNum;
          //             gameData.curPlayerData.gold_num += getGoldNum;
          //             //通知刷新界面
          //             director.emit(GameEvents.UI_ShopExchangeRefreshUI);
          //             gameData.updateLocalCacheUserInfo();
          //             uiMgr.showToastView(GameLanguageKey.GLK_ShopExchangeSuccess);
          //         });
          // }
        };
        _proto.update = function update(deltaTime) {};
        return ShopItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "desLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconGoldNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconSilverNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "clickSfxClip", [_dec9], {
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

System.register("chunks:///_virtual/ShopView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst2.ts', './GameData.ts', './ShopItem.ts', './GameEvents.ts', './GameUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ScrollView, Prefab, Node, AudioClip, director, instantiate, Component, GameShopTabType, gameData, ShopItem, GameEvents, GameUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      Node = module.Node;
      AudioClip = module.AudioClip;
      director = module.director;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameShopTabType = module.GameShopTabType;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      ShopItem = module.ShopItem;
    }, function (module) {
      GameEvents = module.GameEvents;
    }, function (module) {
      GameUtils = module.GameUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b878cX4bpFD9bSFpuiUOj54", "ShopView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShopView = exports('ShopView', (_dec = ccclass('ShopView'), _dec2 = property(ScrollView), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShopView, _Component);
        function ShopView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "shopScrollView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shopItemPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptySpNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickSfxClip", _descriptor4, _assertThisInitialized(_this));
          _this._curSelectTabType = GameShopTabType.GST_Tab01;
          return _this;
        }
        var _proto = ShopView.prototype;
        _proto.start = function start() {
          this._initEvent();
          this._initUIData();
        };
        _proto._initEvent = function _initEvent() {
          director.on(GameEvents.UI_ShopExchangeRefreshUI, this._onShopExchangeRefreshUICallback, this);
        };
        _proto._initUIData = function _initUIData() {
          this._updateEmptyNodeVisible(false);
        };
        _proto._updateEmptyNodeVisible = function _updateEmptyNodeVisible(value) {
          if (this.emptySpNode) {
            this.emptySpNode.active = value;
          }
        };
        _proto.updateShopViewWithData = function updateShopViewWithData() {
          if (!this.shopScrollView || !this.shopItemPrefab || !gameData || !gameData.curPlayerData) {
            return;
          }
          this._updateEmptyNodeVisible(false);
          this.shopScrollView.content.removeAllChildren();
          if (this._curSelectTabType === GameShopTabType.GST_Tab01) {
            var lockPropsTypeArr = gameData.curPlayerData.lock_cannontype;
            if (lockPropsTypeArr.length >= gameData.cannonConfigsObjArr.length) {
              this._updateEmptyNodeVisible(true);
              return;
            }
            var unLockObjArr = [];
            for (var i = 0; i < gameData.cannonConfigsObjArr.length; i++) {
              var element = gameData.cannonConfigsObjArr[i];
              if (lockPropsTypeArr.indexOf(element.cannonType) == -1) {
                unLockObjArr.push(element);
              }
            }
            for (var _i = 0; _i < unLockObjArr.length; _i++) {
              var _element = unLockObjArr[_i];
              var shopItemNode = instantiate(this.shopItemPrefab);
              if (!shopItemNode) {
                continue;
              }
              var shopItemComp = shopItemNode.getComponent(ShopItem);
              if (!shopItemComp) {
                continue;
              }
              shopItemComp.initShopWithData(this._curSelectTabType, _element);
              shopItemNode.parent = this.shopScrollView.content;
            }
          } else if (this._curSelectTabType === GameShopTabType.GST_Tab02) {
            var _lockPropsTypeArr = gameData.curPlayerData.lock_fishtype;
            if (_lockPropsTypeArr.length >= gameData.fishConfigsObjArr.length) {
              this._updateEmptyNodeVisible(true);
              return;
            }
            var _unLockObjArr = [];
            for (var _i2 = 0; _i2 < gameData.fishConfigsObjArr.length; _i2++) {
              var _element2 = gameData.fishConfigsObjArr[_i2];
              if (_lockPropsTypeArr.indexOf(_element2.type) == -1) {
                _unLockObjArr.push(_element2);
              }
            }
            for (var _i3 = 0; _i3 < _unLockObjArr.length; _i3++) {
              var _element3 = _unLockObjArr[_i3];
              var _shopItemNode = instantiate(this.shopItemPrefab);
              if (!_shopItemNode) {
                continue;
              }
              var _shopItemComp = _shopItemNode.getComponent(ShopItem);
              if (!_shopItemComp) {
                continue;
              }
              _shopItemComp.initShopWithData(this._curSelectTabType, _element3);
              _shopItemNode.parent = this.shopScrollView.content;
            }
          } else if (this._curSelectTabType === GameShopTabType.GST_Tab03) {
            var _lockPropsTypeArr2 = gameData.shopConfigsObjArr;
            for (var _i4 = 0; _i4 < _lockPropsTypeArr2.length; _i4++) {
              var _element4 = _lockPropsTypeArr2[_i4];
              var _shopItemNode2 = instantiate(this.shopItemPrefab);
              if (!_shopItemNode2) {
                continue;
              }
              var _shopItemComp2 = _shopItemNode2.getComponent(ShopItem);
              if (!_shopItemComp2) {
                continue;
              }
              _shopItemComp2.initShopWithData(this._curSelectTabType, _element4);
              _shopItemNode2.parent = this.shopScrollView.content;
            }
          }
        };
        _proto.onToggleGroupSingleEvent = function onToggleGroupSingleEvent(toggle, customEventData) {
          if (toggle.isChecked) {
            GameUtils.playSfx(this.clickSfxClip);
            if ("1" == customEventData) {
              this._curSelectTabType = GameShopTabType.GST_Tab01;
            } else if ("2" == customEventData) {
              this._curSelectTabType = GameShopTabType.GST_Tab02;
            } else if ("3" == customEventData) {
              this._curSelectTabType = GameShopTabType.GST_Tab03;
            }
            this.updateShopViewWithData();
          }
        }

        /**
         * @Description:商店购买后刷新界面逻辑
         * @Date: 2024-06-14 21:52:10
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._onShopExchangeRefreshUICallback = function _onShopExchangeRefreshUICallback() {
          this.updateShopViewWithData();
        };
        _proto.onClickCloseBtnEvent = function onClickCloseBtnEvent() {
          GameUtils.playSfx(this.clickSfxClip);
          this.node.active = false;
          this.node.removeFromParent();
          this.node.parent = null;
          this.node.destroy();
        };
        _proto.onDestroy = function onDestroy() {
          director.off(GameEvents.UI_ShopExchangeRefreshUI, this._onShopExchangeRefreshUICallback, this);
        };
        _proto.update = function update(deltaTime) {};
        return ShopView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shopScrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shopItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "emptySpNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clickSfxClip", [_dec5], {
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

System.register("chunks:///_virtual/ToastView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ef4dbmYj/xHmadW2yf8kCcr", "ToastView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ToastView = exports('ToastView', (_dec = ccclass('ToastView'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToastView, _Component);
        function ToastView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tipLabel", _descriptor, _assertThisInitialized(_this));
          _this._timeout = void 0;
          return _this;
        }
        var _proto = ToastView.prototype;
        _proto.start = function start() {}

        /**
         * @Description: 对外开发的调用接口
         * @Date: 2024-06-10 09:08:05
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} tipContentStr 提示内容
         * @param {string} afterSecsClose 时间<多少毫秒后自动关闭提示界面>
         * @return {*}
         */;
        _proto.showTip = function showTip(tipContentStr, afterSecsClose) {
          if (afterSecsClose === void 0) {
            afterSecsClose = 500;
          }
          this.node.active = true;
          if (this.tipLabel) {
            this.tipLabel.string = tipContentStr;
          }
          var self = this;
          this._timeout = setTimeout(function () {
            self._closeSelf();
          }, afterSecsClose);
        }

        /**
         * @Description: 自定义关闭函数
         * @Date: 2024-06-10 09:07:54
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        _proto._closeSelf = function _closeSelf() {
          this.node.active = false;
          this.node.removeFromParent();
          this.node.destroy();
        };
        _proto.onDestroy = function onDestroy() {
          clearTimeout(this._timeout);
          _Component.prototype.destroy.call(this);
        };
        _proto.update = function update(deltaTime) {};
        return ToastView;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec2], {
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

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GFSingleClass.ts', './GameResPath.ts', './LoaderManager.ts', './CommonPopView.ts', './ToastView.ts', './GameUtils.ts', './ShopView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Prefab, instantiate, Vec3, find, GFSingleClass, GameResPath, loaderMgr, CommonPopView, ToastView, GameUtils, ShopView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      find = module.find;
    }, function (module) {
      GFSingleClass = module.GFSingleClass;
    }, function (module) {
      GameResPath = module.GameResPath;
    }, function (module) {
      loaderMgr = module.loaderMgr;
    }, function (module) {
      CommonPopView = module.CommonPopView;
    }, function (module) {
      ToastView = module.ToastView;
    }, function (module) {
      GameUtils = module.GameUtils;
    }, function (module) {
      ShopView = module.ShopView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bff4dkVEA1FEbWvXjMU+tAg", "UIManager", undefined);
      var TAG = 'UIManager';
      var UIManager = /*#__PURE__*/function (_GFSingleClass) {
        _inheritsLoose(UIManager, _GFSingleClass);
        function UIManager() {
          return _GFSingleClass.apply(this, arguments) || this;
        }
        UIManager.ins = function ins() {
          return _GFSingleClass.ins.call(this);
        }

        /**
         * @Description: 展示通用弹框界面
         * @Date: 2024-06-10 10:49:23
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} contentStr
         * @param {string} titleStr
         * @param {string} btnDesStr
         * @param {Function} closeCallback
         * @param {Function} commonCallback
         * @param {Node} parentNode
         * @return {*}
         */;
        var _proto = UIManager.prototype;
        _proto.showCommonPopView = function showCommonPopView(contentStr, titleStr, btnDesStr, closeCallback, commonCallback, parentNode) {
          loaderMgr.loadGameRes(GameResPath.uiItemsOrViews.commonPopView, Prefab).then(function (prefab) {
            var popNode = instantiate(prefab);
            if (!popNode) {
              return;
            }
            popNode.setScale(new Vec3(0.1, 0.1, 0.1));
            popNode.name = "CommonPopView";
            var comp = popNode.getComponent(CommonPopView);
            if (!comp) {
              return;
            }
            comp.initWithData(contentStr, titleStr, btnDesStr, closeCallback, commonCallback);
            if (parentNode) {
              popNode.parent = parentNode;
            } else {
              popNode.parent = find('Canvas');
            }
          })["catch"](function (err) {
            console.error(TAG, "<showCommonPopView> err : " + err);
          });
        }

        /**
         * @Description: 显示通用气泡弹框
         * @Date: 2024-06-10 10:51:33
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} tipConentStr
         * @param {string} afterSecsClose 时间<多少毫秒后自动关闭提示界面>
         * @param {Node} parentNode
         * @return {*}
         */;
        _proto.showToastView = function showToastView(tipConentStr, afterSecsClose, parentNode) {
          if (afterSecsClose === void 0) {
            afterSecsClose = 500;
          }
          if (GameUtils.isCheckStringEmpty(tipConentStr)) {
            return;
          }
          loaderMgr.loadGameRes(GameResPath.uiItemsOrViews.toastView, Prefab).then(function (prefab) {
            var popNode = instantiate(prefab);
            if (!popNode) {
              return;
            }
            popNode.name = "ToastView";
            var comp = popNode.getComponent(ToastView);
            if (!comp) {
              return;
            }
            comp.showTip(tipConentStr, afterSecsClose);
            if (parentNode) {
              popNode.parent = parentNode;
            } else {
              popNode.parent = find('Canvas');
            }
          })["catch"](function (err) {
            console.error(TAG, "<showToastView> err : " + err);
          });
        }

        /**
         * @Description: 打开商店
         * @Date: 2024-06-14 21:35:28
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Node} parentNode
         * @return {*}
         */;
        _proto.showShopView = function showShopView(parentNode) {
          loaderMgr.loadGameRes(GameResPath.uiItemsOrViews.shopView, Prefab).then(function (prefab) {
            var popNode = instantiate(prefab);
            if (!popNode) {
              return;
            }
            popNode.name = "ShopView";
            var comp = popNode.getComponent(ShopView);
            if (!comp) {
              return;
            }
            comp.updateShopViewWithData();
            if (parentNode) {
              popNode.parent = parentNode;
            } else {
              popNode.parent = find('Canvas');
            }
          })["catch"](function (err) {
            console.error(TAG, "<showToastView> err : " + err);
          });
        };
        return UIManager;
      }(GFSingleClass);
      var uiMgr = exports('uiMgr', UIManager.ins());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaveLightComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c0622yiKrVLPZAnpvEOvHPI", "WaveLightComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WaveLightComp = exports('WaveLightComp', (_dec = ccclass('WaveLightComp'), _dec2 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WaveLightComp, _Component);
        function WaveLightComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "max", _descriptor, _assertThisInitialized(_this));
          _this._start = 0;
          _this._material = null;
          return _this;
        }
        var _proto = WaveLightComp.prototype;
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          this._material = this.node.getComponent(Sprite).getSharedMaterial(0);
          if (this.node.active && this._material) {
            this._setShaderTime(dt);
          }
        };
        _proto._setShaderTime = function _setShaderTime(dt) {
          var start = this._start;
          if (start > this.max) start = 0;
          start += 0.015;
          this._material.setProperty('timeTest', start);
          this._start = start;
        };
        return WaveLightComp;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "max", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WSManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameData.ts', './GFSingleClass.ts', './CryptoUtils.ts', './EventManager.ts', './WSNetCmd.ts'], function (exports) {
  var _inheritsLoose, cclegacy, gameData, GFSingleClass, CryptoUtils, eventMgr, WSNetCmd, getGameProtoIdByWsNetCmd, WSNetCmdType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GFSingleClass = module.GFSingleClass;
    }, function (module) {
      CryptoUtils = module.CryptoUtils;
    }, function (module) {
      eventMgr = module.eventMgr;
    }, function (module) {
      WSNetCmd = module.WSNetCmd;
      getGameProtoIdByWsNetCmd = module.getGameProtoIdByWsNetCmd;
      WSNetCmdType = module.WSNetCmdType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bf3108mTbZJYrgZC8y0RB1h", "WSManager", undefined);
      var NetState = /*#__PURE__*/function (NetState) {
        NetState[NetState["DisConnect"] = 1] = "DisConnect";
        NetState[NetState["Connecting"] = 2] = "Connecting";
        NetState[NetState["Connected"] = 3] = "Connected";
        return NetState;
      }(NetState || {}); //已连接
      var TAG = 'WSManager';
      var WSManager = exports('WSManager', /*#__PURE__*/function (_GFSingleClass) {
        _inheritsLoose(WSManager, _GFSingleClass);
        function WSManager() {
          return _GFSingleClass.apply(this, arguments) || this;
        }
        //标记当前是否正在切换场景过程中
        WSManager.ins = function ins() {
          return _GFSingleClass.ins.call(this);
        };
        WSManager.setChangeScene = function setChangeScene(isChangeScene) {
          this._isChangeScene = isChangeScene;
        };
        WSManager.wsConnect = function wsConnect(url) {
          var _this = this;
          if (this._netState != NetState.DisConnect) {
            return;
          }
          WSManager._netState = NetState.Connecting;
          WSManager._ws = new WebSocket(url);
          WSManager._ws.binaryType = 'arraybuffer';
          WSManager._ws.onopen = function () {
            _this._netState = NetState.Connected;
            //根据自身游戏逻辑需求而定
            var uid = gameData.curPlayerData.uid;
            var uname = gameData.curPlayerData.uname;
            var normalUName = gameData.curPlayerData.normalUName;
            var password = gameData.curPlayerData.password;
            //根据自身游戏逻辑需求而定-检测校验链接是否成功
            _this.sendMessage(WSNetCmd.WNC_CheckConnect, {
              uid: uid,
              uname: uname,
              password: password,
              normalUName: normalUName
            });
          };
          WSManager._ws.onmessage = function (event) {
            var arraybuffer = event.data;
            var dataUnit8Array = new Uint8Array(arraybuffer);
            var bufferDataStr = _this._arrayBufferToString(dataUnit8Array);
            // let bufferDataObj = JSON.parse(bufferDataStr) as INetMessage;
            //解密
            var deCodeBufferDataStr = CryptoUtils.decrypt(bufferDataStr); //解密方法1
            var bufferDataObj = JSON.parse(deCodeBufferDataStr);
            if (!bufferDataObj) {
              return;
            }
            _this._responseMsgQueue.push(bufferDataObj);
            _this._processNetMessageEmit();
          };
          WSManager._ws.onclose = function () {
            if (_this._netState === NetState.Connected && _this._ws != null) {
              _this._ws.onopen = function () {};
              _this._ws.onmessage = function () {};
              _this._ws.onclose = function () {};
              _this._ws.onerror = function () {};
              _this._ws.close();
              _this._ws = null;
            }
            _this._netState = NetState.DisConnect;
            //根据情况和服务器进行一次断链的消息通知
          };

          WSManager._ws.onerror = function (error) {
            console.log(TAG, " error :" + error);
          };
        }

        /**
         * @Description: 全局发送消息到服务器方法
         * @Date: 2024-04-24 21:50:54
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {WSNetCmd} protoid 自定义消息id
         * @param {any} sendData 传输的json数据结构{}
         * @return {*}
         */;
        WSManager.sendMessage = function sendMessage(protoid, sendData) {
          if (this._netState != NetState.Connected || !this._ws) {
            return;
          }
          var cmdStr = getGameProtoIdByWsNetCmd(protoid, WSNetCmdType.WNCT_Request);
          var msgDataJsonObj = {
            protoid: protoid,
            cmd: cmdStr,
            msg: sendData
          };
          var jsonStr = JSON.stringify(msgDataJsonObj);
          // let arrBuff = this._stringToUint8Array(jsonStr);
          //加密数据
          var encodeJsonStr = CryptoUtils.encrypt(jsonStr); //加密方法1
          var arrBuff = this._stringToUint8Array(encodeJsonStr);
          this._ws.send(arrBuff);
        }

        /**
         * @Description: 处理消息队列
         * @Date: 2024-04-24 21:25:42
         * @Author: GFanStudio-LeeSir-JYJ add
         * @return {*}
         */;
        WSManager._processNetMessageEmit = function _processNetMessageEmit() {
          if (this._responseMsgQueue.length <= 0) {
            return;
          }
          if (this._isChangeScene) {
            return;
          }
          while (1) {
            var packet = this._responseMsgQueue.shift();
            console.log(TAG, "<handle server msg> packet : " + JSON.stringify(packet));
            var protoid = packet.protoid;
            var cmd = packet.cmd;
            var cmdStr = getGameProtoIdByWsNetCmd(protoid, WSNetCmdType.WNCT_Response);
            if (cmd != cmdStr) {
              break;
            }
            var msgObj = packet.msg;
            //分发消息到各自监听的界面
            eventMgr.emit(cmdStr, msgObj);
            if (this._responseMsgQueue.length <= 0) {
              break;
            }
          }
        }

        /**
         * @Description:字符串转字节数组 
         * @Date: 2024-04-24 22:18:50
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {string} jsonStr
         * @param {*} option
         * @return {*}
         */;
        WSManager._stringToUint8Array = function _stringToUint8Array(jsonStr, option) {
          if (option === void 0) {
            option = {
              steam: false
            };
          }
          if (option.steam) {
            throw new Error("failed to encode: the 'steam' option is unsupported.");
          }
          var pos = 0;
          var len = jsonStr.length;
          var at = 0;
          var tlen = Math.max(32, len + (len >> 1) + 7); //1.5x size
          var target = new Uint8Array(tlen >> 3 << 3); //做一个8字节的偏移

          while (pos < len) {
            var value = jsonStr.charCodeAt(pos++);
            if (value > 0xd800 && value <= 0xdc00) {
              if (pos < len) {
                var extra = jsonStr.charCodeAt(pos);
                if ((extra & 0xfc00) === 0xdc00) {
                  ++pos;
                  value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                }
              }
              if (value >= 0xd800 && value <= 0xdbff) {
                continue;
              }
            }
            //如果说不能写入4字节追加字节
            if (at + 4 > target.length) {
              tlen += 8;
              tlen *= 1.0 + pos / jsonStr.length * 2;
              tlen = tlen >> 3 << 3; //做一个8字节的偏移

              var newArr = new Uint8Array(tlen);
              newArr.set(target);
              target = newArr;
            }
            if ((value & 0xffffff80) === 0) {
              //1个字节
              target[at++] = value; //赋值ASCII
              continue;
            } else if ((value & 0xffffff800) === 0) {
              //2个字节
              target[at++] = value >> 6 & 0x1f | 0xc0;
            } else if ((value & 0xffff000) === 0) {
              //3个字节
              target[at++] = value >> 12 & 0x0f | 0xe0;
              target[at++] = value >> 6 & 0x3f | 0x80;
            } else if ((value & 0xffe00000) === 0) {
              //4个字节
              target[at++] = value >> 18 & 0x07 | 0xf0;
              target[at++] = value >> 12 & 0x3f | 0x80;
              target[at++] = value >> 6 & 0x3f | 0x80;
            } else {
              continue;
            }
            target[at++] = value & 0x3f | 0x80;
          }
          return target.slice(0, at);
        }

        /**
         * @Description: 将字节数组转换为字符串
         * @Date: 2024-04-24 21:20:43
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {Uint8Array} arrBuff
         * @return {*}
         */;
        WSManager._arrayBufferToString = function _arrayBufferToString(arrBuff) {
          if (typeof arrBuff === 'string') {
            return arrBuff;
          }
          var finalStr = '';
          var _tempArrBuff = arrBuff;
          for (var i = 0; i < _tempArrBuff.length; i++) {
            var one = _tempArrBuff[i].toString(2);
            var v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
              var bytesLen = v[0].length;
              var store = _tempArrBuff[i].toString(2).slice(7 - bytesLen);
              for (var st = 1; st < bytesLen; st++) {
                store += _tempArrBuff[st + i].toString(2).slice(2);
              }
              finalStr += String.fromCharCode(parseInt(store, 2));
              i += bytesLen - 1;
            } else {
              finalStr += String.fromCharCode(_tempArrBuff[i]);
            }
          }
          return finalStr;
        };
        return WSManager;
      }(GFSingleClass));
      WSManager._netState = NetState.DisConnect;
      WSManager._ws = null;
      WSManager._responseMsgQueue = [];
      //消息队列
      WSManager._isChangeScene = false;
      var wsMgr = exports('wsMgr', WSManager.ins());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WSNetCmd.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _WsNetCmdProtoId;
      cclegacy._RF.push({}, "dfbc95cfFZNd4CQKm+SHISk", "WSNetCmd", undefined);
      /*
       * @Description: 自定义的网络传输协议数据结构
       * @Version: 1.0.0
       * @Autor: GFanStudio-LeeSir
       * @Date: 2024-04-24 20:56:09
       * @LastEditTime: 2024-06-11 17:25:57
       * @FilePath: /LessonFishMasters-Clients/assets/scripts/cores/net/WSNetCmd.ts
       * Copyright (c) 2024 by GFanStudio-LeeSir-JYJ, All Rights Reserved. 
       */

      var WSNetCmdType = exports('WSNetCmdType', /*#__PURE__*/function (WSNetCmdType) {
        WSNetCmdType["WNCT_Request"] = "req";
        WSNetCmdType["WNCT_Response"] = "res";
        return WSNetCmdType;
      }({}));

      /**
       * @Description: 自定义cmd指令类型
       * @Date: 2024-06-11 17:16:15
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      var WSNetCmd = exports('WSNetCmd', /*#__PURE__*/function (WSNetCmd) {
        WSNetCmd[WSNetCmd["WNC_Register"] = 0] = "WNC_Register";
        WSNetCmd[WSNetCmd["WNC_Login"] = 1] = "WNC_Login";
        WSNetCmd[WSNetCmd["WNC_CheckConnect"] = 2] = "WNC_CheckConnect";
        WSNetCmd[WSNetCmd["WNC_GetUserInfo"] = 3] = "WNC_GetUserInfo";
        WSNetCmd[WSNetCmd["WNC_UpdateUserInfo"] = 4] = "WNC_UpdateUserInfo";
        return WSNetCmd;
      }({}));

      /**
       * @Description: 自定义cmd请求和响应命令类型
       * @Date: 2024-06-11 17:15:55
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      var WsNetCmdProtoId = exports('WsNetCmdProtoId', (_WsNetCmdProtoId = {}, _WsNetCmdProtoId[WSNetCmd.WNC_Register] = {
        req: "ws.WNC_RegisterReq",
        res: "ws.WNC_RegisterRes"
      }, _WsNetCmdProtoId[WSNetCmd.WNC_Login] = {
        req: "ws.WNC_LoginReq",
        res: "ws.WNC_LoginRes"
      }, _WsNetCmdProtoId[WSNetCmd.WNC_CheckConnect] = {
        req: "ws.WNC_CheckConnectReq",
        res: "ws.WNC_CheckConnectRes"
      }, _WsNetCmdProtoId[WSNetCmd.WNC_GetUserInfo] = {
        req: "ws.WNC_GetUserInfoReq",
        res: "ws.WNC_GetUserInfoRes"
      }, _WsNetCmdProtoId[WSNetCmd.WNC_UpdateUserInfo] = {
        req: "ws.WNC_UpdateUserInfoReq",
        res: "ws.WNC_UpdateUserInfoRes"
      }, _WsNetCmdProtoId));

      /**
       * @Description: 根据cmd命令类型获取对应的cmd指令
       * @Date: 2024-06-11 17:15:21
       * @Author: GFanStudio-LeeSir-JYJ add
       * @return {*}
       */
      var getGameProtoIdByWsNetCmd = exports('getGameProtoIdByWsNetCmd', function getGameProtoIdByWsNetCmd(name, type) {
        return WsNetCmdProtoId[name][type];
      });
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_fish', 'chunks:///_virtual/module_fish'); 
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