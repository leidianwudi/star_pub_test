System.register("chunks:///_virtual/KylinAnimationManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Enum, randomRangeInt, find, sp, tween, Vec3, Component, AudioMgr, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      randomRangeInt = module.randomRangeInt;
      find = module.find;
      sp = module.sp;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "03f14Al1ShF0Y7K9YNJHjOd", "KylinAnimationManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KylinAniStatus = /*#__PURE__*/function (KylinAniStatus) {
        KylinAniStatus[KylinAniStatus["appear"] = 0] = "appear";
        KylinAniStatus[KylinAniStatus["idle"] = 1] = "idle";
        KylinAniStatus[KylinAniStatus["happy"] = 2] = "happy";
        KylinAniStatus[KylinAniStatus["leave"] = 3] = "leave";
        KylinAniStatus[KylinAniStatus["performance"] = 4] = "performance";
        KylinAniStatus[KylinAniStatus["shake"] = 5] = "shake";
        return KylinAniStatus;
      }(KylinAniStatus || {});
      Enum(KylinAniStatus);
      var KylinAniName = {
        appear: 'appear',
        idle: 'idle',
        happy: 'happy',
        leave: 'leave',
        performance: 'performance',
        shake: 'shake'
      };

      /**
       * 麒麟动画管理类
       */
      var KylinAnimationManager = exports('KylinAnimationManager', (_dec = ccclass('KylinAnimationManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinAnimationManager, _Component);
        function KylinAnimationManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.KylinAniName = KylinAniName;
          _this._status = KylinAniStatus.idle;
          _this.aniListeners = {};
          _this._isPlayLoop = false;
          _this._lastVoice = 0;
          _this._playNum = 0;
          _this._playRanNum = 0;
          return _this;
        }
        var _proto = KylinAnimationManager.prototype;
        _proto.onLoad = function onLoad() {
          if (KylinAnimationManager._instance) {
            this.node.destroy();
            return;
          }
          this._playRanNum = randomRangeInt(3, 6);
          KylinAnimationManager._instance = this;
          this.gameSetup();
        };
        _proto.gameSetup = function gameSetup() {
          // root.game.bundle.preloadDir('prefabs/kylin', Prefab, (err: Error) => {
          //     if (err) return console.error(err);
          // });
        };
        _proto.onDestroy = function onDestroy() {
          KylinAnimationManager._instance = null;
        };
        _proto.playAni = function playAni(aniName, isLoop) {
          if (this._status === KylinAniStatus[aniName]) return;
          if (aniName === KylinAniName.performance) this.node.setSiblingIndex(3);else this.node.setSiblingIndex(1);
          this.closeAllAni();
          this._isPlayLoop = isLoop;
          this._status = KylinAniStatus[aniName];
          var aniNode = find(aniName, this.node);
          if (!aniNode) {
            // root.game.bundle.load('prefabs/kylin/' + aniName, Prefab, (err: Error, prefab: Prefab) => {
            //     if (err) console.error(`加载${aniName}失败。`, err);
            //     aniNode = instantiate(prefab);
            //     aniNode.parent = this.node;
            //     aniNode.getComponent(sp.Skeleton).setAnimation(0, 'animation', isLoop);
            //     if (!this.aniListeners[aniName] && aniName != KylinAniName.performance) {
            //         this.aniListeners[aniName] = aniName;
            //         this.aniListener(aniNode.getComponent(sp.Skeleton));
            //     }
            // });
            return;
          }
          if (aniName === 'appear') {
            this.scheduleOnce(function () {
              AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_voice_001", 1, ModuleDef.SLOTS_KYLIN);
            }, 1.7);
          } else if (aniName != "idle") {
            if (this._playNum >= this._playRanNum) {
              this._playNum = 0;
              this._playRanNum = randomRangeInt(3, 6);
            } else {
              this._playNum++;
              var voice = randomRangeInt(2, 7);
              while (this._lastVoice === voice) {
                voice = randomRangeInt(2, 7);
              }
              var path = "audio/AC_sound_8001_slotqilin_voice_00" + voice;
              AudioMgr.inst.playOneShot(path, 1, ModuleDef.SLOTS_KYLIN);
            }
          }
          aniNode.active = true;
          aniNode.getComponent(sp.Skeleton).setAnimation(0, 'animation', isLoop);
          if (!this.aniListeners[aniName] && aniName != KylinAniName.performance) {
            this.aniListeners[aniName] = aniName;
            this.aniListener(aniNode.getComponent(sp.Skeleton));
          }
        };
        _proto.aniListener = function aniListener(ani) {
          var _this2 = this;
          ani.setCompleteListener(function (ani) {
            if (_this2._isPlayLoop) return;
            _this2.playAni(KylinAniName.idle, true);
          });
        };
        _proto.setAniPosition = function setAniPosition(isBig) {
          if (isBig) {
            tween(this.node).to(1.5, {
              position: new Vec3(223, 543)
            }).start();
          } else {
            tween(this.node).to(1.5, {
              position: new Vec3(217, 474)
            }).start();
          }
        };
        _proto.setAniPositon2 = function setAniPositon2(pos) {
          this.node.position = pos;
          // tween(this.node).to(0.2, { position: pos }).start();
        };

        _proto.fakeMiniGame = function fakeMiniGame() {
          tween(this.node).to(1.5, {
            position: new Vec3(217, 474)
          }).delay(1).to(1.5, {
            position: new Vec3(223, 543)
          }).start();
        };
        _proto.closeAllAni = function closeAllAni() {
          for (var i = 0; i < this.node.children.length; i++) {
            this.node.children[i].active = false;
          }
        };
        _createClass(KylinAnimationManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return KylinAnimationManager;
      }(Component), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KylinBaseScroll.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Prefab, UITransform, instantiate, Vec3, tween, easing, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      easing = module.easing;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class4, _class5, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "a2657hwn5tN2J0j8G1hYFUW", "KylinBaseScroll", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KylinScrollParam = (_dec = ccclass('KylinScrollParam'), _dec2 = property({
        type: Node,
        displayName: '单列元素的父节点'
      }), _dec3 = property({
        type: Node,
        tooltip: '展示结果的列'
      }), _dec4 = property({
        displayName: '元素数量'
      }), _dec5 = property({
        displayName: '可视范围最高点'
      }), _dec6 = property({
        displayName: '元素距离'
      }), _dec7 = property({
        tooltip: "元素循环出现次数"
      }), _dec8 = property({
        tooltip: '速度'
      }), _dec9 = property({
        tooltip: '节点的高'
      }), _dec(_class = (_class2 = function KylinScrollParam() {
        _initializerDefineProperty(this, "parentNode", _descriptor, this);
        _initializerDefineProperty(this, "endNode", _descriptor2, this);
        _initializerDefineProperty(this, "element", _descriptor3, this);
        _initializerDefineProperty(this, "maxY", _descriptor4, this);
        _initializerDefineProperty(this, "distance", _descriptor5, this);
        _initializerDefineProperty(this, "repeatNum", _descriptor6, this);
        _initializerDefineProperty(this, "speed", _descriptor7, this);
        _initializerDefineProperty(this, "contentHeight", _descriptor8, this);
        this.minY = 0;
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "parentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "endNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "element", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxY", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 319;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "repeatNum", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "contentHeight", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class);
      var KylinBaseScroll = exports('KylinBaseScroll', (_dec10 = ccclass('KylinBaseScroll'), _dec11 = property(Prefab), _dec12 = property({
        tooltip: '父节点的宽'
      }), _dec13 = property({
        tooltip: '是否开启缓动'
      }), _dec14 = property({
        tooltip: '正常速度是每列的启动间隔'
      }), _dec15 = property({
        type: [KylinScrollParam]
      }), _dec16 = property({
        tooltip: '最大速度'
      }), _dec17 = property({
        type: Node,
        tooltip: "结束是节点"
      }), _dec10(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinBaseScroll, _Component);
        function KylinBaseScroll() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "elementPrefab", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentWidth", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isEasing", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "intervalTime", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paramList", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxSpeed", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endContent", _descriptor15, _assertThisInitialized(_this));
          _this._isSpeed = false;
          _this._isMini = false;
          _this._addSpeed = 1;
          //加速度
          _this._isFirst = true;
          _this._isStart = false;
          _this._isStop = [];
          _this._repeat = [];
          _this._time = 0;
          _this._isStopScroll = false;
          _this._isStartMove = false;
          //开始 结束内容转动
          _this._isEndMove = [];
          //结束 结束内容转动
          _this._faceCb = null;
          //换牌面回调
          _this._singleEndMove = false;
          //不加速时的 结束 结束内容转动
          _this._intervalTime = 0;
          _this._endCb = null;
          _this._index = 0;
          _this._twNum = 0;
          return _this;
        }
        var _proto = KylinBaseScroll.prototype;
        _proto.addElement = function addElement(cb) {
          for (var i = 0; i < this.paramList.length; i++) {
            var param = this.paramList[i];
            // const height = this.elementHeight * param.element + (param.distance - this.elementHeight) * param.element;
            param.parentNode.getComponent(UITransform).setContentSize(this.contentWidth, param.contentHeight);
            param.endNode.getComponent(UITransform).setContentSize(this.contentWidth, param.contentHeight);
            param.minY = -(param.maxY + param.distance);
            for (var j = 0; j < param.element + 1; j++) {
              var element = instantiate(this.elementPrefab);
              element.parent = param.parentNode;
              element.position = new Vec3(0, param.maxY + param.distance + param.distance * j);
              // let elementNum = j - 1;
              // if (elementNum < 0) elementNum = param.element;
              element.name = j.toString();
              cb && cb(element);
            }
            for (var k = param.element - 1; k >= 0; k--) {
              var _element = instantiate(this.elementPrefab);
              _element.parent = param.endNode;
              _element.position = new Vec3(0, param.maxY - param.distance * k);
              _element.name = k.toString();
              cb && cb(_element);
            }
          }
        };
        _proto.startScroll = function startScroll(faceCb, endCb) {
          this._faceCb = faceCb;
          this._endCb = endCb;
          this.resetScroll();
          if (this.isSpeed) this._intervalTime = 0;else this._intervalTime = this.intervalTime;
          this._time = 0;
          this._index = 0;
          this._isStart = true;
          this._isStartMove = true;
          this._isStopScroll = false;
          this._isStop = [];
          this._repeat = [];
          this._twNum = 0;
          this._isEndMove = [];
          for (var i = 0; i < this.paramList.length; i++) {
            this._isStop.push(false);
            this._repeat.push(0);
            this._isEndMove.push(false);
          }
        };
        _proto.stopScroll = function stopScroll() {
          this._isStopScroll = true;
        };
        _proto.resetScroll = function resetScroll() {
          if (this._isFirst) {
            this._isFirst = false;
            return;
          }
          for (var i = 0; i < this.paramList.length; i++) {
            var param = this.paramList[i];
            param.speed = -1;
            for (var j = 0; j < param.parentNode.children.length; j++) {
              var element = param.parentNode.children[j];
              // const index = Number(element.name);
              // element.position = new Vec3(0, -param.minY + param.distance * index);
              element.position = new Vec3(0, -param.minY + param.distance * j);
            }
          }
        };
        _proto.update = function update(deltaTime) {
          this.commonGame(deltaTime);
        };
        _proto.commonGame = function commonGame(deltaTime) {
          this.moveEndElement2(deltaTime);
          if (!this._isStart) return;
          var isStop = true;
          this._time += deltaTime;
          this.moveStartElement(deltaTime);
          for (var i = 0; i < this.paramList.length; i++) {
            var param = this.paramList[i];
            if (this._time < i * this._intervalTime) continue;
            param.speed += this._addSpeed * deltaTime * 10;
            if (param.speed >= this.maxSpeed) param.speed = this.maxSpeed;
            for (var j = 0; j < param.parentNode.children.length; j++) {
              var element = param.parentNode.children[j];
              if (Math.abs(element.position.clone().y + param.minY) < 1 && this._isStop[i]) {
                continue;
              }
              isStop = false;
              var _y = element.position.clone().y - deltaTime * param.speed * 1000;
              element.position = new Vec3(0, _y);
              if (_y < param.minY) {
                element.position = new Vec3(0, -param.minY);
                this._faceCb && this._faceCb(element);
                if (j === 0 && this._isStopScroll) {
                  this._repeat[i]++;
                  if (this._repeat[i] > param.repeatNum) {
                    this._isStop[i] = true;
                    this._isEndMove[i] = true;
                    this._singleEndMove = true;
                  }
                }
              }
            }
          }
          if (isStop) this._isStart = false;
        };
        _proto.miniGame = function miniGame(deltaTime) {
          this.moveEndElement(deltaTime);
          if (!this._isStart) return;
          var isStop = true;
          this._time += deltaTime;
          for (var i = 0; i < this.paramList.length; i++) {
            var param = this.paramList[i];
            if (this._time < i * this.intervalTime) continue;
            param.speed += this._addSpeed * deltaTime * 10;
            if (param.speed >= this.maxSpeed) param.speed = this.maxSpeed;
            for (var j = 0; j < param.parentNode.children.length; j++) {
              var element = param.parentNode.children[j];
              if (Math.abs(element.position.clone().y + param.minY) < 1 && this._isStop[i]) {
                continue;
              }
              isStop = false;
              var _y = element.position.clone().y - deltaTime * param.speed * 1000;
              element.position = new Vec3(0, _y);
              if (_y < param.minY) {
                element.position = new Vec3(0, -param.minY);
                if (j === 0) {
                  this._repeat[i]++;
                  // if (this._repeat[i] > this.repeatNum) {
                  if (this._repeat[i] > param.repeatNum) {
                    this._isStop[i] = true;
                    // this._isEndMove = true;
                  }
                }
              }
            }
          }

          if (isStop) this._isStart = false;
        }

        //结束内容开始转动
        ;

        _proto.moveStartElement = function moveStartElement(deltaTime) {
          if (!this._isStartMove) return;
          var isStop = false;
          var num = 0;
          for (var i = 0; i < this.paramList.length; i++) {
            var param = this.paramList[i];
            if (this._time < i * this._intervalTime) continue;
            var elementNum = 0;
            for (var j = 0; j < param.endNode.children.length; j++) {
              var element = param.endNode.children[j];
              if (element.position.clone().y > param.maxY + 150) {
                elementNum++;
                continue;
              }
              var _y = element.position.clone().y - deltaTime * param.speed * 1000;
              element.position = new Vec3(0, _y);
              if (_y < param.minY) {
                element.position = new Vec3(0, -param.minY + Number(element.name) * param.distance + param.distance * 2);
              }
            }
            if (elementNum === param.element) {
              num++;
            }
            if (num === this.paramList.length) isStop = true;
          }
          if (isStop) this._isStartMove = false;
        };
        _proto.moveEndElement2 = function moveEndElement2(deltaTime) {
          if (this.isSpeed) {
            if (!this._isEndMove[this._index]) return;
            this._isEndMove[this._index] = false;
          } else {
            if (!this._singleEndMove) return;
            this._singleEndMove = false;
          }
          this.endScroll();
          this._index++;
        }

        //结束内容出结果转动
        ;

        _proto.moveEndElement = function moveEndElement(deltaTime) {
          if (!this._isEndMove) return;
          var num = 0;
          for (var i = 0; i < this.paramList.length; i++) {
            var param = this.paramList[i];
            if (!this._isStop[i]) continue;
            var elementNum = 0;
            for (var j = 0; j < param.endNode.children.length; j++) {
              var element = param.endNode.children[j];
              if (Math.abs(element.position.clone().y - (param.maxY - j * param.distance)) < 50) {
                elementNum++;
                continue;
              }
              var _y = element.position.clone().y - deltaTime * param.speed * 1000;
              element.position = new Vec3(0, _y);
            }
            if (elementNum === param.element) {
              num++;
            }
            if (num === this.paramList.length) ;
          }

          // if (isStop) this._isEndMove = false;
        };

        _proto.endScroll = function endScroll() {
          var _this2 = this;
          var param = this.paramList[this._index];
          for (var j = 0; j < param.endNode.children.length; j++) {
            var element = param.endNode.children[j];
            var pos = new Vec3(0, param.maxY - param.distance * j);
            tween(element).to(0.7, {
              position: pos
            }, {
              easing: easing.backOut
            }).call(function () {
              _this2._twNum++;
              if (_this2._twNum === 10) {
                _this2._endCb && _this2._endCb();
              }
            }).start();
          }
        };
        _createClass(KylinBaseScroll, [{
          key: "isSpeed",
          get: function get() {
            return this._isSpeed;
          },
          set: function set(value) {
            this._index = 0;
            this._twNum = 0;
            this._singleEndMove = false;
            this._isEndMove = [];
            for (var i = 0; i < this.paramList.length; i++) {
              this._isEndMove.push(false);
            }
            this._isSpeed = value;
          }
        }, {
          key: "isMini",
          get:
          //是否小游戏
          function get() {
            return this._isMini;
          },
          set: function set(value) {
            this._isMini = value;
          }
        }]);
        return KylinBaseScroll;
      }(Component), (_descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "elementPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "contentWidth", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "isEasing", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "intervalTime", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "paramList", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "maxSpeed", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "endContent", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KylinElementDetailsManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinSceneManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteAtlas, Vec3, find, Label, Component, KylinSceneManager;
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
      SpriteAtlas = module.SpriteAtlas;
      Vec3 = module.Vec3;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      KylinSceneManager = module.KylinSceneManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "c21a315SGZG37NhWzOtWvlh", "KylinElementDetailsManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var initHeight = [760, 870];
      var heightInterval = [30, 10];

      /**
       * 麒麟元素详细信息类
       */
      var KylinElementDetailsManager = exports('KylinElementDetailsManager', (_dec = ccclass('KylinElementDetailsManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteAtlas), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinElementDetailsManager, _Component);
        function KylinElementDetailsManager() {
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
          _initializerDefineProperty(_this, "atlasFrames", _descriptor6, _assertThisInitialized(_this));
          _this._twId = void 0;
          return _this;
        }
        var _proto = KylinElementDetailsManager.prototype;
        _proto.onLoad = function onLoad() {
          if (KylinElementDetailsManager._instance) {
            this.node.destroy();
            return;
          }
          KylinElementDetailsManager._instance = this;
          this.leftContent.on(Node.EventType.TOUCH_END, this.hide, this);
          this.rightContent.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.showDetails = function showDetails(faceId, pos, pName, index) {
          // let targetSprite: Sprite = null;
          this.hideAllFace();
          var lineLab = null;
          var lineMultLab = null;
          var targetNode = null;
          this.blackNode.active = true;
          var targetSpNode = null;
          if (pName === '2') {
            this.leftContent.active = false;
            this.rightContent.active = true;
            this.rightContent.position = new Vec3(175, pos.y + 760 + 30 * index);
            targetNode = this.rightContent;
            targetSpNode = this.rightSpNode;
          } else {
            this.leftContent.active = true;
            this.rightContent.active = false;
            var column = Number(pName);
            this.leftContent.position = new Vec3(-490 + 290 * column, pos.y + initHeight[column] + heightInterval[column] * index);
            targetNode = this.leftContent;
            targetSpNode = this.letfSpNode;
          }

          // targetSprite = find('icon', targetNode).getComponent(Sprite);
          lineLab = find('lineNum', targetNode).getComponent(Label);
          lineMultLab = find('lineMult', targetNode).getComponent(Label);
          lineLab.string = "3";
          lineMultLab.string = KylinSceneManager.instance.elementOdd[faceId] + "";
          // targetSprite.spriteFrame = this.atlasFrames.getSpriteFrame(faceId.toString());
          find(faceId.toString(), targetSpNode).active = true;
          this.unscheduleAllCallbacks();
          this.scheduleOnce(this.hide, 3);
        };
        _proto.onDestroy = function onDestroy() {
          KylinElementDetailsManager._instance = null;
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
        _createClass(KylinElementDetailsManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return KylinElementDetailsManager;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "atlasFrames", [_dec7], {
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

System.register("chunks:///_virtual/KylinGameData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "ef0b3eNPhNBYIE6ZLK8gVa2", "KylinGameData", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MessgeDefine = {
        Request: {
          start: "startgame",
          selected: "selected"
        },
        Response: {
          GameScene: "slot_kirin_game_scene"
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
      var GameStatus = exports('GameStatus', /*#__PURE__*/function (GameStatus) {
        GameStatus[GameStatus["start"] = 0] = "start";
        GameStatus[GameStatus["over"] = 1] = "over";
        GameStatus[GameStatus["mini"] = 2] = "mini";
        return GameStatus;
      }({})); //进入小游戏
      Enum(GameStatus);
      var KylinGameData = exports('KylinGameData', (_dec = ccclass('KylinGameData'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinGameData, _Component);
        function KylinGameData() {
          return _Component.apply(this, arguments) || this;
        }
        return KylinGameData;
      }(Component), _class2.MessgeDefine = MessgeDefine, _class2.EventName = EventName, _class2.cacheName = cacheName, _class2.Auto = Auto, _class2.autoCountIndex = 0, _class2.leftAutoCount = 0, _class2.reduceLabel = 0, _class2.addLabel = 0, _class2.winLabel = 0, _class2.miniRes = {
        betScore: 50,
        code: 200,
        main: null,
        mini: {
          list: [{
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }, {
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }, {
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }, {
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }, {
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }, {
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }, {
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }, {
            colums: [{
              elements: [{
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 301,
                cardScore: 100
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }, {
              elements: [{
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }, {
                elementId: 302,
                cardScore: 0
              }]
            }],
            hitType: 2,
            lines: [],
            winScore: 300
          }],
          winScore: 300
        },
        winScore: 0
      }, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KylinGameElement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinUtils.ts', './KylinElementDetailsManager.ts', './KylinPoolManager.ts', './KylinNoticeManager.ts', './KylinGameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteAtlas, Sprite, Label, Node, Vec3, find, sp, randomRangeInt, ParticleSystem, Component, KylinUtils, KylinElementDetailsManager, KylinPoolManager, KylinNoticeManager, KylinGameManager;
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
      Label = module.Label;
      Node = module.Node;
      Vec3 = module.Vec3;
      find = module.find;
      sp = module.sp;
      randomRangeInt = module.randomRangeInt;
      ParticleSystem = module.ParticleSystem;
      Component = module.Component;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }, function (module) {
      KylinElementDetailsManager = module.KylinElementDetailsManager;
    }, function (module) {
      KylinPoolManager = module.KylinPoolManager;
    }, function (module) {
      KylinNoticeManager = module.KylinNoticeManager;
    }, function (module) {
      KylinGameManager = module.KylinGameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "bdf62DaT9NBCaS0bLR/rOFt", "KylinGameElement", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KylinGameElement = exports('KylinGameElement', (_dec = ccclass('KylinGameElement'), _dec2 = property(SpriteAtlas), _dec3 = property(SpriteAtlas), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinGameElement, _Component);
        function KylinGameElement() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "elementAtlas", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgAtlas", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "elementSprite", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgSpr", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreText", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spineNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniPrizeEffect1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniPrizeEffect2", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "commonPrizeEffect", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "commonPrizeEffect2", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreEffect", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeEffectNode", _descriptor12, _assertThisInitialized(_this));
          _this._faceId = "";
          _this._score = '';
          _this._aniListener = {};
          _this._startScale = new Vec3();
          return _this;
        }
        var _proto = KylinGameElement.prototype;
        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          KylinUtils.instance.setNodesByComponent(this.node);
          this._startScale = this.miniPrizeEffect2.children[0].scale;
        };
        _proto.onTouchEnd = function onTouchEnd() {
          if (this._faceId === "301" || this._faceId === "302") return;
          KylinElementDetailsManager.instance.showDetails(Number(this._faceId), this.node.position, this.node.parent.name, Number(this.node.name));
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
          this.resetElement();
          this.setFace(faceId, ani);
          if (ani === '3') this.setSpine(ani, false);
        }

        /**
        * 重置元素的状态，将所有相关的视觉元素和动画效果设置为初始状态。
        */;
        _proto.resetElement = function resetElement() {
          this.elementSprite.spriteFrame = null;
          this.bgSpr.node.active = false;
          this.scoreText.node.active = false;
          this.closeAllSpine();
          this.miniPrizeEffect1.active = false;
          this.miniPrizeEffect2.active = false;
          this.commonPrizeEffect.active = false;
          this.commonPrizeEffect2.active = false;
          for (var i = 0; i < this.prizeEffectNode.children.length; i++) {
            this.prizeEffectNode.children[i].active = false;
          }
          this.scoreEffect.active = false;
        };
        _proto.closeAllSpine = function closeAllSpine() {
          for (var i = 0; i < this.spineNode.children.length; i++) {
            this.spineNode.children[i].active = false;
          }
        };
        _proto.showSpine = function showSpine(faceId, startAni, isEnd) {
          var _this2 = this;
          if (startAni === void 0) {
            startAni = '1';
          }
          if (isEnd === void 0) {
            isEnd = false;
          }
          if (faceId === '301' || faceId === '302') return;
          this.bgSpr.node.active = false;
          this.elementSprite.node.active = false;
          this.scoreText.node.active = false;
          var spine = find(faceId, this.spineNode);
          if (isEnd) spine = find('202', this.spineNode);
          spine.active = true;
          if (faceId === '201' || startAni === '') {
            spine.getComponent(sp.Skeleton).setAnimation(0, 'animation', true);
            find('201', this.prizeEffectNode).active = true;
            return;
          }
          var spAni = spine.getComponent(sp.Skeleton);
          spAni.setAnimation(0, startAni, false);
          if (!this._aniListener[faceId]) {
            this._aniListener[faceId] = spAni;
            spAni.setCompleteListener(function (ani) {
              if (ani.animation.name === '1') {
                _this2._aniListener[faceId].setAnimation(0, '2', true);
              }
            });
          }
        };
        _proto.addText = function addText(parent, betScore, callback) {
          var item = KylinPoolManager.instance.getPoolObj(KylinPoolManager.PoolsName.prizeText);
          item.parent = parent;
          item.getComponent(Label).string = KylinUtils.instance.changeString(this._score);
          item.worldPosition = this.scoreText.node.worldPosition;
          KylinNoticeManager.instance.addText(item, KylinUtils.instance.toNumber(this._score), betScore, callback);
        };
        _proto.setScoreFace = function setScoreFace() {
          this._faceId = '301';
          var betRect = KylinGameManager.instance.betPoint;
          var ran = randomRangeInt(0, betRect.length);
          this.bgSpr.node.active = true;
          this.bgSpr.spriteFrame = this.bgAtlas.getSpriteFrame('301');
          this.scoreText.node.active = true;
          this.scoreText.string = KylinUtils.instance.changeString(betRect[ran].text);
          this.elementSprite.node.active = false;
          this.closeAllSpine();
        };
        _proto.setFace = function setFace(faceId, ani) {
          if (faceId === "301" || faceId === "302") {
            this.bgSpr.node.active = true;
            this.bgSpr.spriteFrame = this.bgAtlas.getSpriteFrame(faceId);
            if (faceId === "301") {
              this.scoreText.node.active = true;
              this.scoreText.string = KylinUtils.instance.changeString(this._score);
            }
          } else if (faceId) {
            this.elementSprite.node.active = true;
            this.elementSprite.spriteFrame = this.elementAtlas.getSpriteFrame(faceId);
          }
        };
        _proto.setSpine = function setSpine(ani, isEnd) {
          if (this._faceId === '201') {
            ani != '3' && isEnd && this.showSpine(this._faceId, '', isEnd);
          } else {
            if (ani === '') return;
            this.showSpine(this._faceId, ani);
          }
        };
        _proto.prizeEffect = function prizeEffect(isMini) {
          var _this3 = this;
          if (isMini) {
            if (KylinGameManager.instance.isEntryMiniGame) {
              this.miniPrizeEffect2.children.forEach(function (v) {
                v.scale = v.scale.clone().multiplyScalar(0.92);
              });
            } else {
              this.miniPrizeEffect2.children.forEach(function (v) {
                v.scale = _this3._startScale.clone();
              });
            }
            this.miniPrizeEffect1.active = true;
            this.miniPrizeEffect2.active = true;
          } else {
            this.commonPrizeEffect.active = true;
            this.commonPrizeEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).stop();
              v.getComponent(ParticleSystem).play();
            });
            this.commonPrizeEffect2.active = true;
            this.commonPrizeEffect2.children.forEach(function (v) {
              v.getComponent(ParticleSystem).stop();
              v.getComponent(ParticleSystem).play();
            });
          }
        };
        _proto.showScoreEffect = function showScoreEffect() {
          var _this4 = this;
          this.scoreEffect.active = true;
          this.scheduleOnce(function () {
            KylinGameManager.instance.showScoreEffect(_this4.node.worldPosition.clone());
          }, 0.2);
        };
        return KylinGameElement;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "elementAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgAtlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "elementSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgSpr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scoreText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spineNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "miniPrizeEffect1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "miniPrizeEffect2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "commonPrizeEffect", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "commonPrizeEffect2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scoreEffect", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "prizeEffectNode", [_dec13], {
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

System.register("chunks:///_virtual/KylinGameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinGameVariable.ts', './KylinSceneManager.ts', './KylinGameData.ts', './UIKylinEntryMini.ts', './KylinPrizeManager.ts', './KylinElementDetailsManager.ts', './KylinNoticeManager.ts', './UIKylinResult.ts', './KylinAnimationManager.ts', './KylinPoolManager.ts', './KylinUtils.ts', './Slot2.ts', './SlotShowPanelMgr.ts', './UserMgr.ts', './Num.ts', './NetGameServer.ts', './SubGameDef.ts', './GameUtil.ts', './AudioMgr.ts', './ModuleDef.ts', './RoomMgr.ts', './LanguageData.ts', './UIHelp.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, _decorator, Vec3, UIOpacity, macro, randomRangeInt, Sprite, random, tween, ParticleSystem, Label, instantiate, Component, KylinGameVariable, KylinSceneManager, GameStatus, KylinGameData, UIKylinEntryMini, KylinPrizeManager, KylinElementDetailsManager, KylinNoticeManager, UIKylinResult, KylinAnimationManager, KylinPoolManager, KylinUtils, StopType, EaseType, showSlotBetPanel, showSlotAutoPenel, showSlotLastMoneyPenel, UserMgr, Num, gameNet, SubGameDef, GameUtil, AudioMgr, ModuleDef, RoomMgr, LanguageData, UIHelp, UIhelpParam;
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
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      macro = module.macro;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      random = module.random;
      tween = module.tween;
      ParticleSystem = module.ParticleSystem;
      Label = module.Label;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      KylinGameVariable = module.KylinGameVariable;
    }, function (module) {
      KylinSceneManager = module.KylinSceneManager;
    }, function (module) {
      GameStatus = module.GameStatus;
      KylinGameData = module.KylinGameData;
    }, function (module) {
      UIKylinEntryMini = module.UIKylinEntryMini;
    }, function (module) {
      KylinPrizeManager = module.KylinPrizeManager;
    }, function (module) {
      KylinElementDetailsManager = module.KylinElementDetailsManager;
    }, function (module) {
      KylinNoticeManager = module.KylinNoticeManager;
    }, function (module) {
      UIKylinResult = module.UIKylinResult;
    }, function (module) {
      KylinAnimationManager = module.KylinAnimationManager;
    }, function (module) {
      KylinPoolManager = module.KylinPoolManager;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }, function (module) {
      StopType = module.StopType;
      EaseType = module.EaseType;
    }, function (module) {
      showSlotBetPanel = module.showSlotBetPanel;
      showSlotAutoPenel = module.showSlotAutoPenel;
      showSlotLastMoneyPenel = module.showSlotLastMoneyPenel;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      GameUtil = module.GameUtil;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "a2fb2BWz0JP7KbQJBh0VW+Q", "KylinGameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KylinGameManager = exports('KylinGameManager', (_dec = ccclass('KylinGameManager'), _dec2 = property({
        type: KylinGameVariable,
        displayName: '暴露变量'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinGameManager, _Component);
        function KylinGameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "variable", _descriptor, _assertThisInitialized(_this));
          _this.isAuto = false;
          _this.gameStatus = GameStatus.over;
          _this.index = 0;
          _this._score = 0;
          _this._betScore = 0;
          _this._gearValueArr = [];
          _this._betLevel = 0;
          _this._isSpeed = false;
          _this._isOpenSetting = false;
          _this._gameInfo = null;
          _this._miniIndex = 0;
          _this._isEntryMiniGame = false;
          _this.isShowResult = false;
          _this.glitterId = -1;
          //  glitter音效id
          _this._totalLose = 0;
          _this._totalWin = 0;
          _this._singleWin = 0;
          _this._betPoint = [];
          _this._scoreCount = 0;
          return _this;
        }
        var _proto = KylinGameManager.prototype;
        _proto.onLoad = function onLoad() {
          if (KylinGameManager._instance) {
            this.node.destroy();
            return;
          }
          KylinGameManager._instance = this;
          this.gameSetup();
        };
        _proto.gameSetup = function gameSetup() {
          var _this2 = this;
          AudioMgr.inst.play("audio/AC_sound_8001_music_slotqilin_interface_001", 1, ModuleDef.SLOTS_KYLIN);
          //计算底部图大小
          // const v = view.getVisibleSize();
          // const sub = (v.height - initViewHeight) / 2 + initBgHeight;
          // const bottomHeight = sub + initBgHeight;
          // const bgHeight = bottomHeight / 2
          // this.variable.bottomBg.setContentSize(v.width, bgHeight);
          // this.variable.bottomBg2.setContentSize(v.width, bgHeight);
          // this.variable.bottomBg2.node.getComponent(Widget).bottom = bgHeight - 30
          //================================================================

          KylinAnimationManager.instance.playAni(KylinAnimationManager.instance.KylinAniName.appear, false);
          //初始化元素
          var elementIds = ['101', '102', '103', '104', '105', '106', '201'];
          this.variable.scroll.setup(elementIds);
          this.variable.scroll.node.active = false;
          //背景元素的初始化
          this.variable.bgScroll.setup(['1011']);
          this._isOpenSetting = false;
          this.variable.otherNode.scale = new Vec3(1, 0, 1);
          this.variable.otherNode.getComponent(UIOpacity).opacity = 0;
          this.variable.diceSpeedUp.setCompleteListener(function (ani) {
            if (ani.animation.name === '1') {
              _this2.variable.diceSpeedUp.setAnimation(0, '2', true);
            }
          });
          this.variable.diceSpeedUp.node.active = false;
          this.variable.setStartAni(3);
          //设置背景云层动画及流星动画
          this.variable.initCloud();
          this.schedule(this.createrCloud, 40, macro.REPEAT_FOREVER, 40);
          this.schedule(this.createrLiuxing, 20, macro.REPEAT_FOREVER, 2);
          KylinSceneManager.instance.startGame();
          KylinUtils.instance.setNodesByComponent(this.node.parent, this.node.parent.parent.angle, this.node.parent.scale.clone());
        };
        _proto.createrLiuxing = function createrLiuxing() {
          var _this3 = this;
          var cloudCount = randomRangeInt(3, 6);
          var _loop = function _loop(i) {
            var dT = i * (0.2 + Math.random() * 0.5);
            _this3.scheduleOnce(function () {
              var cloud = KylinPoolManager.instance.getPoolObj(KylinPoolManager.PoolsName.liuxing);
              cloud.parent = _this3.variable.topBg;
              cloud.setSiblingIndex(0);
              cloud.children.forEach(function (v) {
                v.getComponent(ParticleSystem).stop();
                v.getComponent(ParticleSystem).play();
              });
              var _x = i * (-100 - Math.random() * 150);
              cloud.setPosition(_x, 100);
              _this3.scheduleOnce(function () {
                KylinPoolManager.instance.putPoolObj(KylinPoolManager.PoolsName.liuxing, cloud);
              }, 5);
            }, dT);
          };
          for (var i = 0; i < cloudCount; i++) {
            _loop(i);
          }
        };
        _proto.createrCloud = function createrCloud() {
          var cloudCount = randomRangeInt(3, 6);
          for (var i = 0; i < cloudCount; i++) {
            var cloud = KylinPoolManager.instance.getPoolObj(KylinPoolManager.PoolsName.cloud);
            cloud.parent = this.variable.topBg;
            cloud.getComponent(Sprite).spriteFrame = this.variable.cloudFrames[randomRangeInt(0, 5)];
            // const _x = -800 * Math.pow(-1, randomRangeInt(1, 3));
            var _x = -900 - Math.random() * 100;
            var _y = 870 + random() * 920;
            cloud.setPosition(_x, _y);
            tween(cloud).to(randomRangeInt(60, 80), {
              position: new Vec3(1000 * _x / Math.abs(_x) * -1, _y)
            }).call(function (node) {
              KylinPoolManager.instance.putPoolObj(KylinPoolManager.PoolsName.cloud, node);
            }).start();
          }
        };
        _proto.onDisable = function onDisable() {
          KylinGameManager._instance = null;
        }

        //重连
        ;

        _proto.reconnect = function reconnect() {
          var _this4 = this;
          var elementIds = this.getRandomElementIds();
          this.variable.bgScroll.roll([[{
            name: "1011"
          }, {
            name: "1011"
          }, {
            name: "1011"
          }], [{
            name: "1011"
          }, {
            name: "1011"
          }, {
            name: "1011"
          }, {
            name: "1011"
          }], [{
            name: "1011"
          }, {
            name: "1011"
          }, {
            name: "1011"
          }]], function () {});
          this.variable.scroll.roll(elementIds, function () {
            if (_this4.glitterId != -1) AudioMgr.inst.stopOneShot(_this4.glitterId, "audio/AC_sound_8001_slotqilin_turntable_glitter", ModuleDef.SLOTS_KYLIN), _this4.glitterId = -1;
            _this4.variable.scroll.node.active = false;
            KylinPrizeManager.instance.showPrize(elementIds, 0, 0, null, _this4.gameOver.bind(_this4));
          }, function (i) {
            // AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
          });
          this.scheduleOnce(function () {
            _this4.variable.scroll.stop();
            _this4.variable.bgScroll.stop();
          }, 2);
        };
        _proto.initUI = function initUI() {
          this.variable.btnSub.interactable = false;
          this._score = UserMgr.inst.coin;
          this.variable.scoreText.string = Num.exchangeToThousands(1, UserMgr.inst.coin);
          this.variable.winText.string = "0.00";
          this.variable.scroll.setWheels(KylinSceneManager.instance.wheelData, 0);
          this.variable.bgScroll.setWheels([[1011], [1011], [1011]], 0);
          this.variable.scroll.setWheels(KylinSceneManager.instance.miniWheelData, 1);
          this._gearValueArr = [];

          //根据服务端下发的下注积分设置下注挡位
          // const betScoreList = KylinSceneManager.instance.betScore;
          // for (let i = 0; i < GearList.length; i++) {
          //     const value = betScoreList[GearList[i][0]] * GearList[i][1] * KylinSceneManager.instance.lineCount;
          //     this._gearValueArr.push(value);
          // }
          //设置下注额，初始化下注按钮
          this._gearValueArr = GameUtil.GetBetRange();
          var betSum = localStorage.getItem(SubGameDef.SLOTS_KYLIN + KylinGameData.cacheName.betScore);
          this._betScore = betSum ? Number(betSum) : this._gearValueArr[0];
          this.index = this._gearValueArr.indexOf(this._betScore);
          this._betPoint = this.getBetPoint();
          this.variable.betText.string = Num.exchangeToThousands(1, this._betScore);
          this.updateBetGear();
          this.scheduleOnce(this.playDoorEffect, 1);
          // console.log('下注档位->', this._gearValueArr);
        };

        _proto.playDoorEffect = function playDoorEffect() {
          var _this5 = this;
          var showRan = Math.random();
          var ran = 0;
          this.variable.doorEffectNodes[ran].active = true;
          this.variable.doorEffectNodes[ran].children.forEach(function (v) {
            v.getComponent(ParticleSystem).stop();
            v.getComponent(ParticleSystem).play();
          });
          var delayTime = 7;
          if (showRan < 0.5) {
            delayTime = 14;
          }
          tween(this.node).delay(delayTime).call(function () {
            _this5.playDoorEffect();
          }).start();
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
        };
        _proto.startAuto = function startAuto() {
          if (UserMgr.inst.coin < this._betScore) {
            //LanguageData.getLangByID('206')
            tgx.UITip.instance.show(LanguageData.getLangByID('BXINGAME_60'));
            return;
          }
          this.isAuto = true;
          this.variable.btnStart.node.active = false;
          this.variable.btnStop.node.active = true;
          this.variable.btnIdleEffect.active = false;
          this._totalLose = 0;
          this._totalWin = 0;
          this._singleWin = 0;
          // KylinGameData.leftAutoCount = KylinGameData.Auto.AutoIndex[KylinGameData.autoCountIndex]
          this.updateLabelAutoCount();
        };
        _proto.updateLabelAutoCount = function updateLabelAutoCount(delayTime) {
          var _this6 = this;
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this.scheduleOnce(function () {
            KylinGameData.leftAutoCount--;
            if (KylinGameData.leftAutoCount > 0) {
              _this6.variable.autoText.string = KylinGameData.leftAutoCount.toString();
              if (KylinGameData.leftAutoCount > 9) {
                _this6.variable.autoText.verticalAlign = Label.VerticalAlign.CENTER;
              } else {
                _this6.variable.autoText.verticalAlign = Label.VerticalAlign.TOP;
              }
            } else {
              _this6.stopAuto();
            }
            _this6.onStart();
          }, delayTime);
        };
        _proto.stopAuto = function stopAuto() {
          console.log("%c ----停止自动游戏-----", "color:#2ba914");
          this.isAuto = false;
          this.variable.btnStart.node.active = true;
          this.variable.btnStop.node.active = false;
          this.variable.btnIdleEffect.active = true;
          KylinGameData.leftAutoCount = 0;
          this.onTouchEnd();
        }

        //计算所有情况的分数
        ;

        _proto.totalScore = function totalScore(winScore) {
          if (!winScore) winScore = 0;
          this._totalLose -= winScore;
          this._totalWin += winScore;
          this._singleWin = winScore;
          if (KylinGameData.reduceLabel != 0 && this._totalLose >= KylinGameData.reduceLabel * 100 || KylinGameData.addLabel != 0 && this._totalWin >= KylinGameData.addLabel * 100 || KylinGameData.winLabel != 0 && this._singleWin >= KylinGameData.winLabel * 100) {
            this.stopAuto();
            this.btnManager(true);
          }
        };
        _proto.setScore = function setScore(winNum) {
          if (winNum === 0) return;
          this._score += winNum;
          this.variable.updateScore(this._score - winNum, this._score);
        }
        //视频时间
        ;

        _proto.onVideoEvent = function onVideoEvent() {
          this.variable.videoMask.active = false;
          if (KylinSceneManager.instance.isOpenVideo) {
            KylinSceneManager.instance.isOpenVideo = false;
            KylinSceneManager.instance.isFirstEnty = false;
            // localStorage.setItem("Kylin_currentTime", tool.date.formatDate());
            this.variable.btnVideo.spriteFrame = this.variable.videoFrames[1];
          }
          KylinAnimationManager.instance.playAni(KylinAnimationManager.instance.KylinAniName.appear, false);
        }
        //==================点击事件===========================
        ;

        _proto.onStart = function onStart() {
          var _this7 = this;
          this.onTouchEnd();
          if (this.gameStatus != GameStatus.over) return;
          if (!this.isAuto) {
            AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_UI_button_001", 1, ModuleDef.SLOTS_KYLIN);
            this.variable.playStartEffect();
          }
          KylinAnimationManager.instance.playAni(KylinAnimationManager.instance.KylinAniName.shake, false);
          KylinNoticeManager.instance.hideScoreNode();
          this.btnManager(false);
          KylinElementDetailsManager.instance.hide();
          this.variable.entryMiniGame(false);
          KylinPrizeManager.instance.hideEndContet();
          this.variable.winTw && this.variable.winTw.stop();
          this.variable.winText.string = KylinUtils.instance.changeString("0.00");
          this.variable.scroll.node.active = true;
          this.variable.scroll.showAllLayer();
          AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_glitter", 1, ModuleDef.SLOTS_KYLIN).then(function (aeid) {
            return _this7.glitterId = aeid;
          });
          var cb = function cb(i) {
            _this7.variable.startFrameList[i].active = true;
          };
          this.variable.scroll.rollVirtually(this._betPoint, cb.bind(this));
          this.variable.bgScroll.rollVirtually(this._betPoint, null);
          if (this._isEntryMiniGame) {
            this.variable.scroll.toggle(0, this._betPoint);
          }
          this.gameStatus = GameStatus.start;
          gameNet.playSlots(SubGameDef.SLOTS_KYLIN, this._betScore.toString()).then(function (result) {
            // const res = {
            //     betScore: 50,
            //     code: 200,
            //     main: {
            //         colums: [{ elements: [{ elementId: 105, cardScore: 0 }, { elementId: 201, cardScore: 0 }, { elementId: 105, cardScore: 0 }] }
            //             , { elements: [{ elementId: 105, cardScore: 0 }, { elementId: 201, cardScore: 0 }, { elementId: 105, cardScore: 0 }, { elementId: 105, cardScore: 0 }] }
            //             , { elements: [{ elementId: 105, cardScore: 0 }, { elementId: 105, cardScore: 0 }, { elementId: 105, cardScore: 0 }] }],
            //         hitType: 1,
            //         lines: [{ line: [0, 0, 0], lineNo: 1, lineScore: 25 }, { line: [0, 1, 0], lineNo: 2, lineScore: 25 }, { line: [0, 1, 1], lineNo: 3, lineScore: 25 }
            //             , { line: [1, 1, 0], lineNo: 4, lineScore: 25 }, { line: [1, 1, 1], lineNo: 5, lineScore: 25 }, { line: [1, 2, 1], lineNo: 6, lineScore: 25 }
            //             , { line: [1, 2, 2], lineNo: 7, lineScore: 25 }, { line: [2, 2, 1], lineNo: 8, lineScore: 25 }, { line: [2, 2, 2], lineNo: 9, lineScore: 25 }, { line: [2, 3, 2], lineNo: 10, lineScore: 10 }],
            //         winScore: 30000
            //     },
            //     mini: null,
            //     winScore: 0
            // }
            var res = KylinUtils.instance.conver(result, _this7._betScore);
            _this7._gameInfo = res;
            if (res.code === 200) {
              _this7.successStart(res);
            } else {
              //返回失败时的处理
              var elementIds = _this7.getRandomElementIds();
              _this7.variable.bgScroll.roll([[{
                name: "1011"
              }, {
                name: "1011"
              }, {
                name: "1011"
              }], [{
                name: "1011"
              }, {
                name: "1011"
              }, {
                name: "1011"
              }, {
                name: "1011"
              }], [{
                name: "1011"
              }, {
                name: "1011"
              }, {
                name: "1011"
              }]], function () {});
              _this7.variable.scroll.roll(elementIds, function () {
                if (_this7.glitterId != -1) AudioMgr.inst.stopOneShot(_this7.glitterId, "audio/AC_sound_8001_slotqilin_turntable_glitter", ModuleDef.SLOTS_KYLIN), _this7.glitterId = -1;
                _this7.variable.scroll.node.active = false;
                _this7.stopAuto();
                KylinPrizeManager.instance.showPrize(elementIds, 0, 0, null, _this7.gameOver.bind(_this7));
                _this7.btnManager(true);
              }, function (i) {
                // AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
              });
              if (!res.code || res.code === 501 || res.code === 201 || res.code === 202 || res.code === 203 || res.code === 205) ;
              _this7.scheduleOnce(function () {
                _this7.variable.scroll.stop();
                _this7.variable.bgScroll.stop();
              }, 2);
            }
          });
        };
        _proto.successStart = function successStart(res) {
          var _this8 = this;
          var betScore = res.betScore ? res.betScore : 0;
          this._score -= betScore;
          this._totalLose += betScore;
          this._totalWin -= betScore;
          this.variable.scoreTw && this.variable.scoreTw.stop();
          this.variable.scoreText.string = KylinUtils.instance.changeString(this._score.toFixed(2));
          var elementIds = [];
          if (res.main && res.main.colums.length > 0) {
            //正常游戏
            this._isEntryMiniGame = false;
            elementIds = this.getElementIds(res.main.colums);
            KylinPrizeManager.instance.endContent.active = true;
            KylinPrizeManager.instance.showEndContent(false);
            this.variable.bgScroll.roll([[{
              name: "1011"
            }, {
              name: "1011"
            }, {
              name: "1011"
            }], [{
              name: "1011"
            }, {
              name: "1011"
            }, {
              name: "1011"
            }, {
              name: "1011"
            }], [{
              name: "1011"
            }, {
              name: "1011"
            }, {
              name: "1011"
            }]], function () {});
            this.variable.scroll.roll(elementIds, function () {
              _this8.variable.scroll.node.active = false;
              KylinPrizeManager.instance.showPrize(elementIds, res.main.hitType, res.betScore, res.main, _this8.gameOver.bind(_this8));
            }, function (i) {
              // AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
              for (var j = 0; j < _this8.variable.scroll.column[i].length; j++) {
                _this8.variable.scroll.column[i][j].active = false;
                KylinPrizeManager.instance.showElementSpine(elementIds[i][j], i, j);
              }
            });
            var delayTime = 0.06;
            // if (this._isSpeed) delayTime = 0.1;
            var _random = Math.random();
            //fakeMiniRate万分比
            if (_random < KylinSceneManager.instance.fakeMiniRate / 10000) {
              //假装要进小游戏
              delayTime = 4;
              this.fakeMiniGame();
            }
            this.scheduleOnce(function () {
              if (_this8.variable.scroll.stopType === StopType.立即停止) {
                if (_this8.glitterId != -1) AudioMgr.inst.stopOneShot(_this8.glitterId, "audio/AC_sound_8001_slotqilin_turntable_glitter", ModuleDef.SLOTS_KYLIN), _this8.glitterId = -1;
                AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
              } else {
                for (var i = 0; i < 3; i++) {
                  var interval = 0;
                  if (i === 1) {
                    interval = 0.4;
                  } else if (i === 2) {
                    interval = 0.72;
                  }
                  _this8.scheduleOnce(function () {
                    AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
                  }, interval);
                }
              }
            }, delayTime + 0.4);
            this.scheduleOnce(function () {
              if (!_this8._isSpeed) {
                _this8.scheduleOnce(function () {
                  if (_this8.glitterId != -1) AudioMgr.inst.stopOneShot(_this8.glitterId, "audio/AC_sound_8001_slotqilin_turntable_glitter", ModuleDef.SLOTS_KYLIN), _this8.glitterId = -1;
                }, 1.05);
              }
              _this8.variable.scroll.stop();
              _this8.variable.bgScroll.stop();
              for (var i = 0; i < _this8.variable.startFrameList.length; i++) {
                _this8.variable.startFrameList[i].active = false;
              }
            }, delayTime);
          } else if (res.mini && res.mini.list.length > 0) {
            //小游戏
            this._isEntryMiniGame = true;
            this.entryMiniGame(new Vec3(0.92, 0.92));
            this.scheduleOnce(function () {
              _this8.setScroll(true);
              _this8.variable.entryMiniGame(true);
              _this8.variable.diceSpeedUp.node.active = true;
              _this8.variable.diceSpeedUp.setAnimation(0, '1', false);
              _this8.variable.dice.node.active = false;
              _this8.variable.diceNode.active = false;
              _this8.scheduleOnce(function () {
                //====播特效======
                _this8.variable.entryMiniGameEffect.active = true;
                _this8.variable.miniGameBgEffect.active = true;
                UIKylinEntryMini.instance.entryMiniGame();
              }, 1.5);
              UIKylinEntryMini.instance.showFakeMiniGame();
              AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_change", 1, ModuleDef.SLOTS_KYLIN);
              _this8.gameStatus = GameStatus.mini;
              KylinNoticeManager.instance.miniWinScore = 0;
              _this8._miniIndex = -1;
              _this8.scrollMini();
              _this8.scheduleOnce(function () {
                AudioMgr.inst.play("audio/AC_sound_8001_music_slotqilin_interface_002", 1, ModuleDef.SLOTS_KYLIN);
              }, 2);
              _this8.scheduleOnce(function () {
                _this8.scheduleOnce(function () {
                  _this8.variable.scroll.toggle(1, _this8._betPoint);
                }, 3.5);
                for (var i = 0; i < _this8.variable.startFrameList.length; i++) {
                  _this8.variable.startFrameList[i].active = false;
                }
                UIKylinEntryMini.instance.hideRound();
                _this8.variable.roundNode.active = true;
                _this8.variable.mainBtn.active = false;
                _this8.variable.roundText.string = (res.mini.list.length - 1).toString();
              }, 5);
            }, 1);
          }
        };
        _proto.setScroll = function setScroll(isMini) {
          if (isMini) {
            this.variable.scroll.easingIn = EaseType.Back;
            this.variable.bgScroll.easingIn = EaseType.Back;
            this.variable.scroll.easingOut = EaseType.Elastic;
            this.variable.bgScroll.easingOut = EaseType.Elastic;
          } else {
            if (this._isSpeed) {
              this.variable.scroll.easingIn = EaseType.Linear;
              this.variable.bgScroll.easingIn = EaseType.Linear;
              this.variable.scroll.easingOut = EaseType.Linear;
              this.variable.bgScroll.easingOut = EaseType.Linear;
            } else {
              this.variable.scroll.easingIn = EaseType.Back;
              this.variable.bgScroll.easingIn = EaseType.Back;
              this.variable.scroll.easingOut = EaseType.Elastic;
              this.variable.bgScroll.easingOut = EaseType.Elastic;
            }
          }
        };
        _proto.scrollMini = function scrollMini() {
          var _this9 = this;
          var delayTime = 10;
          if (this._miniIndex >= 0) delayTime = 3;
          this._miniIndex++;
          var res = this._gameInfo;
          if (this._miniIndex === res.mini.list.length) {
            this.gameOver();
            return;
          }
          this.variable.scroll.node.active = true;
          KylinPrizeManager.instance.hideEndContet();
          this.variable.roundText.string = (res.mini.list.length - this._miniIndex - 1).toString();
          var elementIds = this.getMiniElementIds(res.mini.list[this._miniIndex]);
          var scrollEndCb = function scrollEndCb() {
            _this9.variable.scroll.node.active = false;
            UIKylinEntryMini.instance.hideRound();
            KylinPrizeManager.instance.showPrize(elementIds, 2, res.betScore, res.mini.list[_this9._miniIndex], _this9.scrollMini.bind(_this9));
          };
          if (this._miniIndex > 1) AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_card_roll", 1, ModuleDef.SLOTS_KYLIN);else AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_glitter", 1, ModuleDef.SLOTS_KYLIN).then(function (aeid) {
            return _this9.glitterId = aeid;
          });
          this.variable.scroll.roll(elementIds, scrollEndCb.bind(this), function (i) {
            // AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
          });
          this.scheduleOnce(function () {
            if (_this9.variable.scroll.stopType === StopType.立即停止) {
              AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
            } else {
              for (var i = 0; i < 3; i++) {
                var interval = 0;
                if (i === 1) {
                  interval = 0.32;
                } else if (i === 2) {
                  interval = 0.65;
                }
                _this9.scheduleOnce(function () {
                  AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_turntable_stop", 1, ModuleDef.SLOTS_KYLIN);
                }, interval);
              }
            }
          }, delayTime + 0.4);
          this.scheduleOnce(function () {
            _this9.variable.scroll.stop();
          }, delayTime);
        };
        _proto.fakeMiniGame = function fakeMiniGame() {
          var _this10 = this;
          var _aeid = -1;
          AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_change", 1, ModuleDef.SLOTS_KYLIN).then(function (aeid) {
            return _aeid = aeid;
          });
          this.variable.diceSpeedUp.node.active = true;
          this.variable.diceSpeedUp.setAnimation(0, '1', false);
          this.variable.dice.node.active = false;
          this.variable.diceNode.active = false;
          UIKylinEntryMini.instance.showFakeMiniGame();
          KylinAnimationManager.instance.fakeMiniGame();
          this.scheduleOnce(function () {
            _this10.variable.entryMiniGame(true);
          }, 1);
          for (var i = 0; i < this.variable.entryMiniAniNode.length; i++) {
            tween(this.variable.entryMiniAniNode[i]).to(1.5, {
              scale: new Vec3(0.92, 0.92)
            }).delay(1).to(0.5, {
              scale: Vec3.ONE
            }).call(function () {
              if (_aeid != -1) AudioMgr.inst.stopOneShot(_aeid, "audio/AC_sound_8001_slotqilin_change", ModuleDef.SLOTS_KYLIN), _aeid = -1;
              _this10.variable.diceSpeedUp.node.active = false;
              _this10.variable.dice.node.active = true;
              _this10.variable.diceNode.active = true;
              _this10.variable.entryMiniGame(false);
              UIKylinEntryMini.instance.hide();
            }).start();
          }
        };
        _proto.entryMiniGame = function entryMiniGame(scale) {
          KylinAnimationManager.instance.setAniPosition(scale.x === 1);
          for (var i = 0; i < this.variable.entryMiniAniNode.length; i++) {
            tween(this.variable.entryMiniAniNode[i]).to(1.5, {
              scale: scale
            }).start();
          }
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
        _proto.getBetPoint = function getBetPoint() {
          var rollRect = [];
          for (var index = 0; index < KylinSceneManager.instance.pointScores.length; index++) {
            var element = KylinSceneManager.instance.pointScores[index];
            rollRect.push({
              name: "301",
              text: KylinUtils.instance.changeString(element * this._betScore)
            });
          }
          return rollRect;
        }

        //获取普通游戏的所有的元素
        ;

        _proto.getElementIds = function getElementIds(res) {
          var rollInfo = [];
          for (var i = 0; i < res.length; i++) {
            rollInfo.push([]);
            for (var j = 0; j < res[i].elements.length; j++) {
              var elementId = res[i].elements[j].elementId ? res[i].elements[j].elementId : 302;
              var cardScore = res[i].elements[j].cardScore ? res[i].elements[j].cardScore : 0;
              rollInfo[i].push({
                name: elementId.toString(),
                text: KylinUtils.instance.changeString(cardScore)
              });
            }
          }
          return rollInfo;
        }

        //获取小游戏的所有的元素
        ;

        _proto.getMiniElementIds = function getMiniElementIds(res) {
          var rollInfo = [];
          for (var i = 0; i < res.colums.length; i++) {
            rollInfo.push([]);
            for (var j = 0; j < res.colums[i].elements.length; j++) {
              var elementId = res.colums[i].elements[j].elementId ? res.colums[i].elements[j].elementId : 302;
              var cardScore = res.colums[i].elements[j].cardScore ? res.colums[i].elements[j].cardScore : 0;
              rollInfo[i].push({
                name: elementId.toString(),
                text: KylinUtils.instance.changeString(cardScore)
              });
            }
          }
          return rollInfo;
        }

        //获取随机元素
        ;

        _proto.getRandomElementIds = function getRandomElementIds() {
          var rollInfo = [];
          var column = [3, 4, 3];
          for (var i = 0; i < 3; i++) {
            rollInfo.push([]);
            for (var j = 0; j < column[i]; j++) {
              var elementId = randomRangeInt(101, 107);
              var cardScore = 0;
              rollInfo[i].push({
                name: elementId.toString(),
                text: KylinUtils.instance.changeString(cardScore)
              });
            }
          }
          return rollInfo;
        };
        _proto.gameOver = function gameOver() {
          var _this$_gameInfo,
            _this$_gameInfo2,
            _this$_gameInfo3,
            _this$_gameInfo4,
            _this$_gameInfo5,
            _this11 = this;
          var betScore = (_this$_gameInfo = this._gameInfo) == null ? void 0 : _this$_gameInfo.betScore;
          var winScore = (_this$_gameInfo2 = this._gameInfo) != null && (_this$_gameInfo2 = _this$_gameInfo2.main) != null && _this$_gameInfo2.winScore ? (_this$_gameInfo3 = this._gameInfo) == null ? void 0 : _this$_gameInfo3.main.winScore : (_this$_gameInfo4 = this._gameInfo) != null && (_this$_gameInfo4 = _this$_gameInfo4.mini) != null && _this$_gameInfo4.winScore ? (_this$_gameInfo5 = this._gameInfo) == null ? void 0 : _this$_gameInfo5.mini.winScore : 0;
          var cb = function cb() {
            _this11.setScroll(false);
            _this11._scoreCount = 0;
            _this11.variable.diceSpeedUp.node.active = false;
            _this11.variable.dice.node.active = true;
            _this11.variable.diceNode.active = true;
            _this11.variable.miniGameBgEffect.active = false;
            _this11.gameStatus = GameStatus.over;
            _this11.variable.mainBtn.active = true;
            _this11.variable.roundNode.active = false;
            _this11.variable.miniTip.active = false;
            if (KylinGameData.leftAutoCount <= 0) _this11.btnManager(true);
            _this11.setScore(winScore);
            // this.totalScore(winScore);
            if (winScore > 0) _this11.variable.updateWin(winScore);
            if (_this11._isEntryMiniGame) {
              _this11.entryMiniGame(Vec3.ONE);
              AudioMgr.inst.play("audio/AC_sound_8001_music_slotqilin_interface_001", 1, ModuleDef.SLOTS_KYLIN);
              KylinAnimationManager.instance.setAniPositon2(new Vec3(223, 543));
              KylinAnimationManager.instance.playAni(KylinAnimationManager.instance.KylinAniName.appear, false);
            }
            if (_this11.isShowResult && !_this11._isEntryMiniGame) {
              AudioMgr.inst.play("audio/AC_sound_8001_music_slotqilin_interface_001", 1, ModuleDef.SLOTS_KYLIN);
            }
            _this11.isShowResult = false;
            var delayTime = 1;
            if (winScore == 0) delayTime = 0.5;
            if (KylinGameData.leftAutoCount > 0) _this11.updateLabelAutoCount(delayTime);
          };
          if (!betScore) {
            cb && cb();
            return;
          }
          var mult = winScore / betScore;
          if (mult && mult >= 10) {
            this.scheduleOnce(function () {
              KylinNoticeManager.instance.balanceScore(betScore, winScore);
              _this11.isShowResult = true;
              UIKylinResult.instance.showResult(winScore, betScore, cb.bind(_this11));
            }, 1);
          } else {
            // cb && cb();
            KylinNoticeManager.instance.balanceScore(betScore, winScore, cb.bind(this));
          }
        };
        //积分牌特效
        _proto.showScoreEffect = function showScoreEffect(currentPos) {
          var _this12 = this;
          var item = instantiate(KylinSceneManager.instance.scoreEffectPre);
          item.parent = this.variable.effectParent;
          item.worldPosition = currentPos;
          var dicePos = this.variable.dice.node.worldPosition.clone();
          var endPos = new Vec3(dicePos.x, currentPos.y);
          if (this._scoreCount === 0) {
            AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_score_collect_rise", 1, ModuleDef.SLOTS_KYLIN);
          }
          this._scoreCount++;
          KylinUtils.instance.bezierTo(item, 0.3, 0, currentPos, endPos, dicePos).call(function (node) {
            KylinPoolManager.instance.putPoolObj(KylinPoolManager.PoolsName.scoreEffect, node);
            _this12.variable.diceEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).stop();
              v.getComponent(ParticleSystem).play();
            });
          }).start();
        };
        _proto.endScroll = function endScroll() {
          this.gameStatus = GameStatus.over;
        };
        _proto.onBetSub = function onBetSub() {
          this.index = Math.ceil(this.index - 1);
          if (this.index <= 0) {
            this.index = 0;
            this.variable.btnSub.interactable = false;
          }
          this.variable.btnAdd.interactable = true;
          this.variable.betText.string = KylinUtils.instance.changeString(this._gearValueArr[this.index].toFixed(2));
          this._betScore = this._gearValueArr[this.index];
          localStorage.setItem(SubGameDef.SLOTS_KYLIN + KylinGameData.cacheName.betScore, this._betScore.toString());
          this._betLevel = 1;
          KylinElementDetailsManager.instance.hide();
          this.onTouchEnd();
        };
        _proto.onBetAdd = function onBetAdd() {
          this.index = Math.floor(this.index + 1);
          if (this.index >= this._gearValueArr.length - 1) {
            this.index = this._gearValueArr.length - 1;
            this.variable.btnAdd.interactable = false;
          }
          this.variable.btnSub.interactable = true;
          this.variable.betText.string = KylinUtils.instance.changeString(this._gearValueArr[this.index].toFixed(2));
          this._betScore = this._gearValueArr[this.index];
          localStorage.setItem(SubGameDef.SLOTS_KYLIN + KylinGameData.cacheName.betScore, this._betScore.toString());
          this._betLevel = 1;
          KylinElementDetailsManager.instance.hide();
          this.onTouchEnd();
        };
        _proto.onTurbo = function onTurbo() {
          if (!this._isSpeed) {
            this._isSpeed = true;
            this.variable.scroll.stopType = StopType.立即停止;
            this.variable.bgScroll.stopType = StopType.立即停止;
            this.variable.scroll.easingIn = EaseType.Linear;
            this.variable.bgScroll.easingIn = EaseType.Linear;
            this.variable.scroll.easingOut = EaseType.Linear;
            this.variable.bgScroll.easingOut = EaseType.Linear;
            this.variable.turboTip.string = "TURBO";
          } else {
            this._isSpeed = false;
            this.variable.scroll.stopType = StopType.立即陆续;
            this.variable.bgScroll.stopType = StopType.立即陆续;
            this.variable.scroll.easingIn = EaseType.Back;
            this.variable.bgScroll.easingIn = EaseType.Back;
            this.variable.scroll.easingOut = EaseType.Elastic;
            this.variable.bgScroll.easingOut = EaseType.Elastic;
            this.variable.turboTip.string = "OFF";
          }
          this.variable.turboEffectNode.active = this._isSpeed;
          this.onTouchEnd();
          KylinElementDetailsManager.instance.hide();
        };
        _proto.onMore = function onMore() {
          // AudioMgr.inst.playOneShot('Click');
          if (!this._isOpenSetting) {
            this._isOpenSetting = true;
            tween(this.variable.otherNode.getComponent(UIOpacity)).to(.2, {
              opacity: 255
            }).start();
            tween(this.variable.otherNode).to(.2, {
              scale: new Vec3(1, 1, 1)
            }).start();
          } else {
            this._isOpenSetting = false;
            tween(this.variable.otherNode.getComponent(UIOpacity)).to(.2, {
              opacity: 0
            }).start();
            tween(this.variable.otherNode).to(.2, {
              scale: new Vec3(1, 0, 1)
            }).start();
          }
          KylinElementDetailsManager.instance.hide();
        };
        _proto.onBet = function onBet() {
          var _this13 = this;
          if (this.gameStatus != GameStatus.over || this.isAuto) return;
          var cb = function cb() {
            for (var _len2 = arguments.length, res = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              res[_key2] = arguments[_key2];
            }
            console.log("bet----", res);
            _this13.index = res[2];
            _this13._betScore = res[3];
            _this13.variable.betText.string = res[4];
            localStorage.setItem(SubGameDef.SLOTS_KYLIN + KylinGameData.cacheName.betScore, _this13._betScore.toString());
            _this13.updateBetGear();
          };
          showSlotBetPanel(this.variable.panelParentNode, [0.03, 0.1, 0.3, 0.9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, UserMgr.inst.coin, Number(this.variable.betText.string), cb.bind(this)).then(function (value) {
            value.bindBet(_this13.index);
          });
          this.onTouchEnd();
          KylinElementDetailsManager.instance.hide();
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
          var _this14 = this;
          console.log('%c ----自动-----', "color:#2ba914");
          // UIKylinAuto.instance.showPanel();
          var cb = function cb(autoNum) {
            KylinGameData.leftAutoCount = autoNum;
            _this14.startAuto();
          };
          showSlotAutoPenel(this.variable.panelParentNode, UserMgr.inst.coin, Number(this.variable.betText.string), cb.bind(this));
          KylinElementDetailsManager.instance.hide();
          this.onTouchEnd();
        };
        _proto.onStop = function onStop() {
          this.stopAuto();
        };
        _proto.onLastMoney = function onLastMoney() {
          //打开钱包
          showSlotLastMoneyPenel(this.variable.panelParentNode, UserMgr.inst.coin);
        };
        _proto.onHelp = function onHelp() {
          tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
        };
        _proto.onPayout = function onPayout() {
          tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
        };
        _proto.onMusic = function onMusic() {
          // tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message4"));
          // tgx.UITip.instance.show("----");
          AudioMgr.inst["switch"] = !AudioMgr.inst["switch"];
        };
        _proto.onHistroy = function onHistroy() {};
        _proto.onExit = function onExit() {
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true, 'ffd3eb', 'd33c5b', 'ebccd5', '77434e').onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
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
        };
        _proto.onTouchEnd = function onTouchEnd() {
          if (this._isOpenSetting) {
            this._isOpenSetting = false;
            tween(this.variable.otherNode.getComponent(UIOpacity)).to(.2, {
              opacity: 0
            }).start();
            tween(this.variable.otherNode).to(.2, {
              scale: new Vec3(1, 0, 1)
            }).start();
          }
        };
        _createClass(KylinGameManager, [{
          key: "isEntryMiniGame",
          get: function get() {
            return this._isEntryMiniGame;
          }
        }, {
          key: "betPoint",
          get: function get() {
            return this._betPoint;
          }
        }], [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return KylinGameManager;
      }(Component), _class3._instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "variable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new KylinGameVariable();
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KylinGameVariable.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinUtils.ts', './KylinPoolManager.ts', './Slot2.ts', './PubButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Label, Node, UITransform, Sprite, SpriteFrame, sp, ParticleSystem, tween, Vec3, randomRangeInt, random, KylinUtils, KylinPoolManager, Slot, PubButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      ParticleSystem = module.ParticleSystem;
      tween = module.tween;
      Vec3 = module.Vec3;
      randomRangeInt = module.randomRangeInt;
      random = module.random;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }, function (module) {
      KylinPoolManager = module.KylinPoolManager;
    }, function (module) {
      Slot = module.Slot;
    }, function (module) {
      PubButton = module.PubButton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44;
      cclegacy._RF.push({}, "af8b8ULyYRL3KhY4i6zqYMh", "KylinGameVariable", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        type = _decorator.type;
      var KylinGameVariable = exports('KylinGameVariable', (_dec = ccclass('KylinGameVariable'), _dec2 = property({
        type: PubButton,
        displayName: '开始按钮'
      }), _dec3 = property({
        type: PubButton,
        displayName: '加速按钮'
      }), _dec4 = property({
        type: PubButton,
        displayName: '减按钮'
      }), _dec5 = property({
        type: PubButton,
        displayName: '加按钮'
      }), _dec6 = property({
        type: PubButton,
        displayName: '自动按钮'
      }), _dec7 = property({
        type: PubButton,
        displayName: '停止自动按钮'
      }), _dec8 = property(Label), _dec9 = property({
        type: Label,
        displayName: '积分'
      }), _dec10 = property({
        type: Label,
        displayName: '下注额'
      }), _dec11 = property({
        type: Label,
        displayName: '赢的分数'
      }), _dec12 = property({
        type: Label,
        tooltip: '加速按钮提示'
      }), _dec13 = property({
        type: Node,
        tooltip: '放置所有二级界面'
      }), _dec14 = property(Slot), _dec15 = property(Slot), _dec16 = property(Node), _dec17 = property(UITransform), _dec18 = property(UITransform), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property([Node]), _dec22 = property(Node), _dec23 = property(Label), _dec24 = property(Sprite), _dec25 = property(Node), _dec26 = property([SpriteFrame]), _dec27 = property(Node), _dec28 = property(sp.Skeleton), _dec29 = property(sp.Skeleton), _dec30 = property(Node), _dec31 = property(Sprite), _dec32 = property([SpriteFrame]), _dec33 = property([SpriteFrame]), _dec34 = property(Node), _dec35 = property([Node]), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(ParticleSystem), _dec41 = property(ParticleSystem), _dec42 = property({
        type: Node,
        tooltip: '两边数字特效'
      }), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property([Node]), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function KylinGameVariable() {
          _initializerDefineProperty(this, "btnStart", _descriptor, this);
          _initializerDefineProperty(this, "btnTurbo", _descriptor2, this);
          _initializerDefineProperty(this, "btnSub", _descriptor3, this);
          _initializerDefineProperty(this, "btnAdd", _descriptor4, this);
          _initializerDefineProperty(this, "btnAuto", _descriptor5, this);
          _initializerDefineProperty(this, "btnStop", _descriptor6, this);
          _initializerDefineProperty(this, "autoText", _descriptor7, this);
          _initializerDefineProperty(this, "scoreText", _descriptor8, this);
          _initializerDefineProperty(this, "betText", _descriptor9, this);
          _initializerDefineProperty(this, "winText", _descriptor10, this);
          _initializerDefineProperty(this, "turboTip", _descriptor11, this);
          _initializerDefineProperty(this, "panelParentNode", _descriptor12, this);
          _initializerDefineProperty(this, "scroll", _descriptor13, this);
          _initializerDefineProperty(this, "bgScroll", _descriptor14, this);
          _initializerDefineProperty(this, "otherNode", _descriptor15, this);
          _initializerDefineProperty(this, "bottomBg", _descriptor16, this);
          _initializerDefineProperty(this, "bottomBg2", _descriptor17, this);
          _initializerDefineProperty(this, "mainBtn", _descriptor18, this);
          _initializerDefineProperty(this, "startRefresh", _descriptor19, this);
          //开始按钮旋转处
          _initializerDefineProperty(this, "entryMiniAniNode", _descriptor20, this);
          _initializerDefineProperty(this, "roundNode", _descriptor21, this);
          _initializerDefineProperty(this, "roundText", _descriptor22, this);
          _initializerDefineProperty(this, "turntableBg", _descriptor23, this);
          _initializerDefineProperty(this, "miniTip", _descriptor24, this);
          _initializerDefineProperty(this, "turntableFrames", _descriptor25, this);
          _initializerDefineProperty(this, "diceNode", _descriptor26, this);
          _initializerDefineProperty(this, "dice", _descriptor27, this);
          _initializerDefineProperty(this, "diceSpeedUp", _descriptor28, this);
          _initializerDefineProperty(this, "topBg", _descriptor29, this);
          _initializerDefineProperty(this, "btnVideo", _descriptor30, this);
          _initializerDefineProperty(this, "cloudFrames", _descriptor31, this);
          _initializerDefineProperty(this, "videoFrames", _descriptor32, this);
          _initializerDefineProperty(this, "videoMask", _descriptor33, this);
          //=======特效============
          _initializerDefineProperty(this, "startFrameList", _descriptor34, this);
          _initializerDefineProperty(this, "entryMiniGameEffect", _descriptor35, this);
          _initializerDefineProperty(this, "miniGameBgEffect", _descriptor36, this);
          _initializerDefineProperty(this, "diceEffect", _descriptor37, this);
          _initializerDefineProperty(this, "effectParent", _descriptor38, this);
          _initializerDefineProperty(this, "startEffectFront", _descriptor39, this);
          _initializerDefineProperty(this, "startEffectAfter", _descriptor40, this);
          _initializerDefineProperty(this, "numberEffect", _descriptor41, this);
          _initializerDefineProperty(this, "btnIdleEffect", _descriptor42, this);
          _initializerDefineProperty(this, "turboEffectNode", _descriptor43, this);
          _initializerDefineProperty(this, "doorEffectNodes", _descriptor44, this);
          this._btnStartTw = null;
          this.winTw = null;
          this.scoreTw = null;
        }
        var _proto = KylinGameVariable.prototype;
        _proto.setStartAni = function setStartAni(delayTime) {
          this._btnStartTw && (this._btnStartTw.stop(), this._btnStartTw = null);
          this._btnStartTw = tween(this.startRefresh).by(delayTime, {
            eulerAngles: new Vec3(0, 0, -360)
          }).repeatForever();
          this._btnStartTw.start();
        };
        _proto.updateScore = function updateScore(startNum, endNum) {
          var _this$scoreTw;
          var param = {
            timer: 1
          };
          (_this$scoreTw = this.scoreTw) == null || _this$scoreTw.removeSelf();
          this.scoreTw = KylinUtils.instance.IncreaseNumber(this.scoreText, startNum, endNum, param);
          this.scoreTw.start();
        };
        _proto.updateWin = function updateWin(winScore) {
          var _this$winTw;
          var param = {
            timer: 0.5,
            tag: 3
          };
          (_this$winTw = this.winTw) == null || _this$winTw.removeSelf();
          this.winTw = KylinUtils.instance.IncreaseNumber(this.winText, 0, winScore, param);
          this.winTw.start();
        };
        _proto.entryMiniGame = function entryMiniGame(isMini) {
          if (isMini) this.turntableBg.spriteFrame = this.turntableFrames[1];else this.turntableBg.spriteFrame = this.turntableFrames[0];
        }

        //初始化云朵
        ;

        _proto.initCloud = function initCloud() {
          var cloudCount = randomRangeInt(3, 8);
          for (var i = 0; i < cloudCount; i++) {
            var cloud = KylinPoolManager.instance.getPoolObj(KylinPoolManager.PoolsName.cloud);
            cloud.parent = this.topBg;
            cloud.getComponent(Sprite).spriteFrame = this.cloudFrames[randomRangeInt(0, 5)];
            // const _x = -500 + random() * 1000;
            var _x = -500 - Math.random() * 100;
            var _y = 870 + random() * 920;
            cloud.setPosition(_x, _y);
            tween(cloud).to(randomRangeInt(60, 80), {
              position: new Vec3(1000 * _x / Math.abs(_x) * -1, _y)
            }).call(function (node) {
              KylinPoolManager.instance.putPoolObj(KylinPoolManager.PoolsName.cloud, node);
            }).start();
          }
        };
        _proto.playStartEffect = function playStartEffect() {
          this.startEffectAfter.play();
          this.startEffectFront.play();
        };
        return KylinGameVariable;
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "autoText", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scoreText", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "betText", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "winText", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "turboTip", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "panelParentNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bgScroll", [_dec15], {
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
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bottomBg", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bottomBg2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "mainBtn", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "startRefresh", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "entryMiniAniNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "roundNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "roundText", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "turntableBg", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "miniTip", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "turntableFrames", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "diceNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "dice", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "diceSpeedUp", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "topBg", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "btnVideo", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "cloudFrames", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "videoFrames", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "videoMask", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "startFrameList", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "entryMiniGameEffect", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "miniGameBgEffect", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "diceEffect", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "effectParent", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "startEffectFront", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "startEffectAfter", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "numberEffect", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "btnIdleEffect", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "turboEffectNode", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "doorEffectNodes", [_dec45], {
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

System.register("chunks:///_virtual/KylinNoticeManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinUtils.ts', './KylinPoolManager.ts', './AudioMgr.ts', './ModuleDef.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, RichText, UITransform, Node, Label, SpriteFrame, ParticleSystem, tween, Vec3, macro, Component, KylinUtils, KylinPoolManager, AudioMgr, ModuleDef, LanguageData;
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
      KylinUtils = module.KylinUtils;
    }, function (module) {
      KylinPoolManager = module.KylinPoolManager;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;
      cclegacy._RF.push({}, "d14b0LKXXZGw78xogywiGfl", "KylinNoticeManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //<img src='101'/>
      var NoticeMsg = ['ql_broadcast1', 'ql_broadcast2', 'ql_broadcast3'];
      var KylinNoticeManager = exports('KylinNoticeManager', (_dec = ccclass('KylinNoticeManager'), _dec2 = property(Sprite), _dec3 = property(RichText), _dec4 = property(UITransform), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property([SpriteFrame]), _dec9 = property([SpriteFrame]), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinNoticeManager, _Component);
        function KylinNoticeManager() {
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
          _initializerDefineProperty(_this, "bigPrizeEffect", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeEffect", _descriptor10, _assertThisInitialized(_this));
          _this._noticeIndex = 2;
          _this._msgTween = null;
          _this._winScore = 0;
          _this._isShow = false;
          _this._miniWinScore = 0;
          return _this;
        }
        var _proto = KylinNoticeManager.prototype;
        _proto.onLoad = function onLoad() {
          if (KylinNoticeManager._instance) {
            this.node.destroy();
            return;
          }
          KylinNoticeManager._instance = this;
          this.showNotice();
        }

        //==============结算分数===================
        ;

        _proto.balanceScore = function balanceScore(betScore, winScore, callback) {
          if (callback === void 0) {
            callback = null;
          }
          if (!winScore) {
            callback && callback();
            return;
          }
          this.scoreNode.active = true;
          this.msgLab.node.active = false;
          AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_card_integral", 1, ModuleDef.SLOTS_KYLIN);
          var mult = winScore / betScore;
          if (mult > 10) {
            this.bigPrizeEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).stop();
            });
            this.bigPrizeEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).play();
            });
            if (mult < 100) {
              this.noticeBg.spriteFrame = this.winFrames[1];
            } else {
              this.noticeBg.spriteFrame = this.winFrames[2];
            }
          } else {
            this.noticeBg.spriteFrame = this.winFrames[0];
            this.prizeEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).stop();
            });
            this.prizeEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).play();
            });
          }
          if (mult >= 5) KylinUtils.instance.IncreaseNumber(this.winScoreLab, 0, winScore, {
            prefix: 'win ',
            timer: 1
          }).start();else this.winScoreLab.string = 'win ' + KylinUtils.instance.changeString(winScore.toFixed(2));
          tween(this.node).to(.2, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).delay(.1).to(.2, {
            scale: Vec3.ONE
          }).call(function () {
            callback && callback();
          }).union().start();
        };
        _proto.onDestroy = function onDestroy() {
          KylinNoticeManager._instance = null;
        };
        _proto.addText = function addText(twNode, score, betScore, callback) {
          var _this2 = this;
          var cPos = new Vec3();
          var txtPos = twNode.position.clone();
          if (txtPos.x < 0) cPos = twNode.worldPosition.clone().add3f(this.winScoreLab.node.worldPosition.clone().x / 2, -100, 0);else cPos = twNode.worldPosition.clone().subtract3f(this.winScoreLab.node.worldPosition.clone().x / 2, 100, 0);
          this.scheduleOnce(function () {
            AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_card_integral", 1, ModuleDef.SLOTS_KYLIN);
          }, 0.2);
          KylinUtils.instance.bezierTo(twNode, 0.5, 0.1, twNode.worldPosition.clone(), cPos, this.winScoreLab.node.worldPosition.clone()).call(function () {
            _this2.scoreNode.active = true;
            _this2.msgLab.node.active = false;
            KylinPoolManager.instance.putPoolObj(KylinPoolManager.PoolsName.prizeText, twNode);
            _this2._miniWinScore += score;
            _this2.prizeEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).stop();
            });
            _this2.prizeEffect.children.forEach(function (v) {
              v.getComponent(ParticleSystem).play();
            });
            _this2.winScoreLab.string = 'win ' + KylinUtils.instance.changeString(_this2._miniWinScore.toFixed(2));
            var mult = _this2._miniWinScore * 100 / betScore;
            if (mult >= 0 && mult <= 10) {
              _this2.noticeBg.spriteFrame = _this2.winFrames[0];
            } else if (mult > 10 && mult <= 100) {
              _this2.noticeBg.spriteFrame = _this2.winFrames[1];
            } else {
              _this2.noticeBg.spriteFrame = _this2.winFrames[2];
            }
            tween(_this2.scoreNode).to(0.2, {
              scale: new Vec3(1.2, 1.2)
            }).to(0.2, {
              scale: Vec3.ONE
            }).call(function () {
              callback && callback();
            }).start();
          }).start();
        };
        _proto.resetNoticeBg = function resetNoticeBg() {
          this.noticeBg.spriteFrame = this.winFrames[0];
        }

        //================轮播===================
        ;

        _proto.showNotice = function showNotice() {
          this.schedule(this.setNotice, 7, macro.REPEAT_FOREVER, .1);
        };
        _proto.setNotice = function setNotice() {
          var _this3 = this;
          this._msgTween && (this._msgTween.stop(), this._msgTween = null);
          this.msgLab.string = LanguageData.getLangByID(NoticeMsg[this._noticeIndex]);
          this.scheduleOnce(function () {
            var size = _this3.msgLab.getComponent(UITransform).contentSize;
            var maskWidth = _this3.maskTrans.contentSize.width;
            if (size.width > maskWidth) {
              _this3.msgLab.node.position = new Vec3((size.width - maskWidth) / 2);
              _this3.scheduleOnce(function () {
                tween(_this3.msgLab.node).removeSelf();
                _this3._msgTween = tween(_this3.msgLab.node).to(7, {
                  position: new Vec3(-size.width, 0)
                });
                _this3._msgTween.start();
              }, 1);
            } else _this3.msgLab.node.position = Vec3.ZERO;
          }, 1 / 60);
          this._noticeIndex++;
          if (this._noticeIndex >= NoticeMsg.length) this._noticeIndex = 0;
        };
        _proto.stopNotice = function stopNotice() {
          this._msgTween && (this._msgTween.stop(), this._msgTween = null);
        };
        _proto.hideScoreNode = function hideScoreNode() {
          this._miniWinScore = 0;
          this.scoreNode.active = false;
          this.msgLab.node.active = true;
          this.resetNoticeBg();
        };
        _createClass(KylinNoticeManager, [{
          key: "miniWinScore",
          set: function set(value) {
            this._miniWinScore = value;
          }
        }], [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return KylinNoticeManager;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bigPrizeEffect", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "prizeEffect", [_dec11], {
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

System.register("chunks:///_virtual/KylinPoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "094b22pZ0dLb4emG4avNuju", "KylinPoolManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PoolsName = {
        prizeText: 'prizeText',
        gameElement: 'gameElement',
        scoreEffect: 'scoreEffect',
        cloud: 'cloud',
        liuxing: 'liuxing'
      };
      var KylinPoolManager = exports('KylinPoolManager', (_dec = ccclass('KylinPoolManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinPoolManager, _Component);
        function KylinPoolManager() {
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
        var _proto = KylinPoolManager.prototype;
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
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            // console.log(params.prefab, "没有传入对像池的prefab");
            if (_this2.pools[params.name]) return reject();
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
            _this2.pools[params['name']] = params;
            resolve();
          });
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
        _createClass(KylinPoolManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new KylinPoolManager();
            }
            return this._instance;
          },
          set: function set(v) {
            this._instance = v;
          }
        }]);
        return KylinPoolManager;
      }(Component), _class2._instance = null, _class2.PoolsName = PoolsName, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KylinPrizeManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinGameElement.ts', './KylinGameManager.ts', './KylinAnimationManager.ts', './KylinUtils.ts', './ModuleDef.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Vec3, Node, Prefab, Label, Font, instantiate, macro, find, Component, tween, KylinGameElement, KylinGameManager, KylinAnimationManager, KylinUtils, ModuleDef, AudioMgr;
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
      Component = module.Component;
      tween = module.tween;
    }, function (module) {
      KylinGameElement = module.KylinGameElement;
    }, function (module) {
      KylinGameManager = module.KylinGameManager;
    }, function (module) {
      KylinAnimationManager = module.KylinAnimationManager;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _class3;
      cclegacy._RF.push({}, "371e39J/3dEqLX+3ZyaIO95", "KylinPrizeManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var column = [3, 4, 3];
      var maxPos = [-112, -112, -112];
      var posInterval = [232, 219, 232];
      //232
      var lineScorePos = [new Vec3(0, 780), new Vec3(0, 555), new Vec3(0, 330), new Vec3(0, 105)];
      //最终奖品管理
      var KylinPrizeManager = exports('KylinPrizeManager', (_dec = ccclass('KylinPrizeManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property([Font]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinPrizeManager, _Component);
        function KylinPrizeManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maskNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "letfLightNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightLightNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "letfEffectNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightEffectNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endContent", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeContent", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "elementItem", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineScoreNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineScoreText", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeTextContent", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineFont", _descriptor13, _assertThisInitialized(_this));
          _this._lineIndex = 0;
          //线路中奖时轮播下标
          _this._lines = [];
          //所有中奖的线
          _this._scoreElements = [];
          return _this;
        }
        var _proto = KylinPrizeManager.prototype;
        _proto.onLoad = function onLoad() {
          if (KylinPrizeManager._instance) {
            this.node.destroy();
            return;
          }
          KylinPrizeManager._instance = this;
          this.gameSetup();
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
          this.showPrize(KylinGameManager.instance.getFrameIds(), 0, 0);
        };
        _proto.onDestroy = function onDestroy() {
          KylinPrizeManager._instance = null;
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
              var element = this.endContent.children[i].children[j].getComponent(KylinGameElement);
              element.initElement(res[i][j].name, res[i][j].text);
              element.node.active = true;
              element.getComponent(KylinGameElement).setSpine('', true);
              if (res[i][j].name === '301' && !KylinGameManager.instance.isAuto && !KylinGameManager.instance.isEntryMiniGame) element.showScoreEffect();
              var element2 = this.prizeContent.children[i].children[j].getComponent(KylinGameElement);
              element2.initElement(res[i][j].name, res[i][j].text);
              element2.showSpine(res[i][j].name);
            }
          }
          if (prizeType === 1) {
            //线路中奖
            this.linePrize();
            callback && callback();
          } else if (prizeType === 2) {
            //积分中奖
            this.scorePrize(mainRes, betScore, callback);
          } else {
            callback && callback();
          }
        };
        _proto.showElementSpine = function showElementSpine(info, index, j) {
          var element = this.endContent.children[index].children[j].getComponent(KylinGameElement);
          element.node.active = true;
          element.node.position = new Vec3(0, -112 - posInterval[index] * j);
          element.initElement(info.name, info.text, '3');
        }

        //线路中奖
        ;

        _proto.linePrize = function linePrize() {
          this.prizeContent.active = true;
          this.closeAllLine();
          this._lineIndex = this._lines.length;
          this.maskNode.active = true;
          if (this._lines.length === 1) AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_connect_single", 1, ModuleDef.SLOTS_KYLIN);else AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_connect_multiple", 1, ModuleDef.SLOTS_KYLIN);
          this.schedule(this.carouselLine.bind(this), 1.5, macro.REPEAT_FOREVER, .1);
        }

        //积分中奖
        ;

        _proto.scorePrize = function scorePrize(res, betScore, callback) {
          var _this2 = this;
          if (callback === void 0) {
            callback = null;
          }
          if (!res.winScore) {
            callback && callback();
            return;
          }
          this._scoreElements = [];
          this.prizeContent.active = true;
          this.closeAllLine();
          this.maskNode.active = true;
          for (var i = 0; i < res.colums.length; i++) {
            for (var j = 0; j < res.colums[i].elements.length; j++) {
              var data = res.colums[i].elements[j];
              if (data.cardScore) {
                var element = this.prizeContent.children[i].children[j];
                element.active = true;
                element.position = new Vec3(0, maxPos[i] - posInterval[i] * j);
                this._scoreElements.push(element);
              }
            }
          }
          AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_card_lightmore", 1, ModuleDef.SLOTS_KYLIN);
          if (this._scoreElements.length > 0 && !KylinGameManager.instance.isEntryMiniGame) {
            KylinAnimationManager.instance.playAni(KylinAnimationManager.instance.KylinAniName.happy, false);
          }
          var _loop = function _loop(_i) {
            _this2._scoreElements[_i].getComponent(KylinGameElement).prizeEffect(true);
            tween(_this2._scoreElements[_i]).delay(0.2 + _i * 0.5).call(function (node) {
              if (_i === _this2._scoreElements.length - 1) node.getComponent(KylinGameElement).addText(_this2.prizeTextContent, betScore, callback);else node.getComponent(KylinGameElement).addText(_this2.prizeTextContent, betScore);
            })
            //     .to(0.1, { scale: new Vec3(1.2, 1.2) })
            .start();
          };
          for (var _i = 0; _i < this._scoreElements.length; _i++) {
            _loop(_i);
          }
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
            if (!KylinGameManager.instance.isShowResult) AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_connect_multiple", 1, ModuleDef.SLOTS_KYLIN);
            this.lineScoreNode.active = false;
            for (var i = 0; i < this._lines.length; i++) {
              var singleLine = this._lines[i];
              find(singleLine.lineNo.toString(), this.lineNode).active = true;
              var leftLab = find(singleLine.lineNo.toString(), this.letfLightNode).getComponent(Label);
              var rightLab = find(singleLine.lineNo.toString(), this.rightLightNode).getComponent(Label);
              leftLab.font = this.lineFont[0];
              rightLab.font = this.lineFont[0];
              leftLab.spacingX = 0;
              rightLab.spacingX = 0;
              // find(singleLine.lineNo.toString(), this.letfEffectNode).active = true;
              // find(singleLine.lineNo.toString(), this.rightEffectNode).active = true;
              for (var j = 0; j < singleLine.line.length; j++) {
                var element = this.prizeContent.children[j].children[singleLine.line[j]];
                var element2 = this.endContent.children[j].children[singleLine.line[j]];
                element2.active = false;
                element.active = true;
                element.position = new Vec3(0, maxPos[j] - posInterval[j] * singleLine.line[j]);
                element.getComponent(KylinGameElement).prizeEffect(false);
                element.getComponent(KylinGameElement).setSpine('1', false);
              }
            }
          } else {
            if (!KylinGameManager.instance.isShowResult) AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_connect_single", 1, ModuleDef.SLOTS_KYLIN);
            var _singleLine = this._lines[this._lineIndex];
            find(_singleLine.lineNo.toString(), this.lineNode).active = true;
            var _leftLab = find(_singleLine.lineNo.toString(), this.letfLightNode).getComponent(Label);
            var _rightLab = find(_singleLine.lineNo.toString(), this.rightLightNode).getComponent(Label);
            _leftLab.font = this.lineFont[0];
            _rightLab.font = this.lineFont[0];
            _leftLab.spacingX = 0;
            _rightLab.spacingX = 0;
            // find(singleLine.lineNo.toString(), this.letfEffectNode).active = true;
            // find(singleLine.lineNo.toString(), this.rightEffectNode).active = true;
            this.lineScoreNode.active = true;
            this.lineScoreText.string = KylinUtils.instance.changeString(_singleLine.lineScore.toFixed(2));
            this.lineScoreNode.position = lineScorePos[_singleLine.line[1]];
            for (var _j2 = 0; _j2 < _singleLine.line.length; _j2++) {
              var _element2 = this.prizeContent.children[_j2].children[_singleLine.line[_j2]];
              var _element3 = this.endContent.children[_j2].children[_singleLine.line[_j2]];
              _element3.active = false;
              _element2.active = true;
              _element2.position = new Vec3(0, maxPos[_j2] - posInterval[_j2] * _singleLine.line[_j2]);
              _element2.getComponent(KylinGameElement).prizeEffect(false);
              _element2.getComponent(KylinGameElement).setSpine('1', false);
            }
          }
          this._lineIndex++;
          if (this._lineIndex > this._lines.length) this._lineIndex = 0;
        };
        _proto.showEndContent = function showEndContent(isActive) {
          if (isActive === void 0) {
            isActive = true;
          }
          for (var i = 0; i < this.endContent.children.length; i++) {
            for (var j = 0; j < column[i]; j++) {
              var element = this.endContent.children[i].children[j];
              element.getComponent(KylinGameElement).setSpine('', false);
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
              element.position = new Vec3(0, maxPos[i] + posInterval[i] + posInterval[i] * j);
              element.active = false;
            }
          }
        };
        _proto.closeAllLine = function closeAllLine() {
          for (var i = 0; i < this.lineNode.children.length; i++) {
            this.lineNode.children[i].active = false;
          }
          for (var _i2 = 0; _i2 < this.letfLightNode.children.length; _i2++) {
            var leftLab = this.letfLightNode.children[_i2].getComponent(Label);
            var rightLab = this.rightLightNode.children[_i2].getComponent(Label);
            leftLab.font = this.lineFont[1];
            rightLab.font = this.lineFont[1];
            leftLab.spacingX = -15;
            rightLab.spacingX = -15;
            // this.letfEffectNode.children[i].active = false;
            // this.rightEffectNode.children[i].active = false;
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
        _createClass(KylinPrizeManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return KylinPrizeManager;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "letfEffectNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rightEffectNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lineNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "endContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prizeContent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "elementItem", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lineScoreNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lineScoreText", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "prizeTextContent", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lineFont", [_dec14], {
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

System.register("chunks:///_virtual/KylinSceneManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinGameManager.ts', './KylinPoolManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, UITransform, Component, KylinGameManager, KylinPoolManager;
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
      Component = module.Component;
    }, function (module) {
      KylinGameManager = module.KylinGameManager;
    }, function (module) {
      KylinPoolManager = module.KylinPoolManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "47283ICX4pNgZmAidz7lOXA", "KylinSceneManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KylinSceneManager = exports('KylinSceneManager', (_dec = ccclass('KylinSceneManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property({
        type: UITransform,
        tooltip: "游戏的主节点"
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinSceneManager, _Component);
        function KylinSceneManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prizeTextPre", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameElementPre", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreEffectPre", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cloudPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "liuxing", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameMainTran", _descriptor6, _assertThisInitialized(_this));
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
          _this._isFirst = true;
          return _this;
        }
        var _proto = KylinSceneManager.prototype;
        _proto.onLoad = function onLoad() {
          if (KylinSceneManager._instance) {
            this.node.destroy();
            return;
          }
          KylinSceneManager._instance = this;
          this.gameSetup();
        };
        _proto.reconnect = function reconnect() {
          KylinGameManager.instance.reconnect();
        };
        _proto.onDisable = function onDisable() {
          KylinPoolManager.instance = null;
          KylinSceneManager._instance = null;
        };
        _proto.gameSetup = function gameSetup() {
          //适配
          // const v = view.getVisibleSize();
          // const scaleV = v.width / this.gameMainTran.height;
          // this.gameMainTran.node.scale = new Vec3(scaleV, scaleV, 1);

          KylinPoolManager.instance.createPool({
            name: KylinPoolManager.PoolsName.prizeText,
            prefab: this.prizeTextPre,
            initCount: 12
          }).then(function () {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.prizeText + "\u5B8C\u6210");
          })["catch"](function (e) {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.prizeText + "\u5931\u8D25");
          });
          KylinPoolManager.instance.createPool({
            name: KylinPoolManager.PoolsName.gameElement,
            prefab: this.gameElementPre,
            initCount: 12
          }).then(function () {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.gameElement + "\u5B8C\u6210");
          })["catch"](function (e) {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.gameElement + "\u5931\u8D25");
          });
          KylinPoolManager.instance.createPool({
            name: KylinPoolManager.PoolsName.scoreEffect,
            prefab: this.scoreEffectPre,
            initCount: 12
          }).then(function () {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.scoreEffect + "\u5B8C\u6210");
          })["catch"](function (e) {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.scoreEffect + "\u5931\u8D25");
          });
          KylinPoolManager.instance.createPool({
            name: KylinPoolManager.PoolsName.cloud,
            prefab: this.cloudPrefab,
            initCount: 10
          }).then(function () {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.cloud + "\u5B8C\u6210");
          })["catch"](function (e) {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.cloud + "\u5931\u8D25");
          });
          KylinPoolManager.instance.createPool({
            name: KylinPoolManager.PoolsName.liuxing,
            prefab: this.liuxing,
            initCount: 10
          }).then(function () {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.liuxing + "\u5B8C\u6210");
          })["catch"](function (e) {
            console.log("\u521B\u5EFA\u5BF9\u8C61\u6C60" + KylinPoolManager.PoolsName.liuxing + "\u5931\u8D25");
          });

          // this.events.put(KylinGameData.MessgeDefine.Response.GameScene + store.room.id, this.initGameScene.bind(this));
        };

        _proto.startGame = function startGame() {
          this.initGameScene({
            betScore: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            elementOdd: {
              101: 100,
              102: 50,
              103: 10,
              104: 5,
              105: 3,
              106: 2,
              301: 2,
              201: 200
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
        _proto.initGameScene = function initGameScene(res) {
          console.log('---麒麟--', res);
          this.betScore = res.betScore;
          this.elementOdd = res.elementOdd;
          this.lineCount = res.lineCount;
          this.fakeMiniRate = res.fakeMiniRate;
          this.pointScores = res.pointScores;
          this.wheel = res.mainWheel;
          this.setWheelData(res.miniWheel);
          if (this._isFirst) {
            this._isFirst = false;
            KylinGameManager.instance.initUI();
          }
        };
        _proto.setWheelData = function setWheelData(miniWheel) {
          for (var i = 0; i < this.wheel.length; i++) {
            this.wheelData[i] = this.wheel[i].lineWheel;
          }
          for (var _i = 0; _i < miniWheel.length; _i++) {
            this.miniWheelData[_i] = [];
            for (var j = 0; j < miniWheel[_i].lineWheel.length; j++) {
              var id = miniWheel[_i].lineWheel[j] ? miniWheel[_i].lineWheel[j] : 302;
              this.miniWheelData[_i].push(id);
            }
          }
        };
        _createClass(KylinSceneManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return KylinSceneManager;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prizeTextPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameElementPre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreEffectPre", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cloudPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "liuxing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameMainTran", [_dec7], {
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

System.register("chunks:///_virtual/KylinUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _inheritsLoose, _regeneratorRuntime, _createClass, _asyncToGenerator, cclegacy, _decorator, Vec3, ParticleSystem, easing, tween, randomRangeInt, Component, Num;
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
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "915058nZCdNwaUNIYAM3A6M", "KylinUtils", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ElementTable = {
        "kylin": 201,
        "seal": 101,
        "boat": 102,
        "frog": 103,
        "jar": 104,
        "crown": 105,
        "token": 106
      };
      var LineCount = {
        1: [0, 0, 0],
        2: [0, 1, 0],
        3: [0, 1, 1],
        4: [1, 1, 0],
        5: [1, 1, 1],
        6: [1, 2, 1],
        7: [1, 2, 2],
        8: [2, 2, 1],
        9: [2, 2, 2],
        10: [2, 3, 2]
      };
      var KylinUtils = exports('KylinUtils', (_dec = ccclass('KylinUtils'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinUtils, _Component);
        function KylinUtils() {
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
        var _proto = KylinUtils.prototype;
        /**
         * 返回的数据转换
         * @param data 
         * @param bet 下注额
         */
        _proto.conver = function conver(data, bet) {
          var result = {
            betScore: 0,
            code: 200,
            main: {
              colums: [],
              hitType: 0,
              lines: [],
              winScore: 0
            },
            mini: {
              list: [],
              winScore: 0
            },
            winScore: 0
          };
          if (data.isSucc) {
            result.code = 200;
            result.betScore = bet;
            result.winScore = Num.toThousandsBack(data.res.payout);
            if (data.res.results && data.res.results.length < 8) {
              //连线游戏数据
              result.mini = null;
              result.main.winScore = Num.toThousandsBack(data.res.payout);
              for (var i = 0; i < 3; i++) {
                //初始化连线游戏的数据
                result.main.colums.push({
                  elements: []
                });
                var columsCount = 3;
                if (i === 1) {
                  columsCount = 4;
                }
                for (var j = 0; j < columsCount; j++) {
                  result.main.colums[i].elements.push({
                    elementId: 302,
                    cardScore: 0
                  }); //初始化空位置
                }
              }

              var res = data.res.results[0];
              result.main.winScore = Num.toThousandsBack(res.payout);
              var scoreNum = 0; //积分个数
              //所有的元素符号
              for (var _i = res.symbols.length - 1; _i >= 0; _i--) {
                if (res.symbols[_i].id === 'null') continue; //空位置，跳过
                //不存在在表格中，视为积分牌
                var reel = res.symbols[_i].coordinate.reel - 1; //列号
                var row = 0; //行号
                if (reel === 1) row = 4 - res.symbols[_i].coordinate.row; //第二列的行号
                else row = 3 - res.symbols[_i].coordinate.row;
                if (!ElementTable[res.symbols[_i].id]) {
                  //移除所有的 '倍' 字符
                  var mult = res.symbols[_i].id.replace('倍', '');
                  //在对应的列中存入数据
                  var payout = res.symbols[_i].payout ? Num.toThousandsBack(res.symbols[_i].payout) : Num.toThousandsBack(mult) * bet;
                  result.main.colums[reel].elements[row] = {
                    elementId: 301,
                    cardScore: payout
                  };
                  scoreNum++;
                } else {
                  result.main.colums[reel].elements[row] = {
                    elementId: ElementTable[res.symbols[_i].id],
                    cardScore: 0
                  };
                }
              }
              if (res.paylines.length > 0) {
                result.main.hitType = 1; //线路中奖
                //所有的中奖线
                for (var _i2 = 0; _i2 < res.paylines.length; _i2++) {
                  var payline = res.paylines[_i2];
                  var lineNo = parseInt(payline.id); //线号
                  var lineScore = Num.toThousandsBack(payline.payout); //线得分
                  result.main.lines.push({
                    lineNo: lineNo,
                    lineScore: lineScore,
                    line: LineCount[lineNo]
                  });
                }
              } else {
                result.main.hitType = 0; //没有中奖
              }

              if (scoreNum >= 5) {
                result.main.hitType = 2; //有5个积分牌,积分中奖
              }
            } else {
              //幸运游戏数据
              result.main = null;
              for (var _i3 = 0; _i3 < data.res.results.length; _i3++) {
                var _res = data.res.results[_i3];
                var colums = [];
                for (var k = 0; k < 3; k++) {
                  colums.push({
                    elements: []
                  });
                  var _columsCount = 3;
                  if (k === 1) {
                    _columsCount = 4;
                  }
                  for (var l = 0; l < _columsCount; l++) {
                    colums[k].elements.push({
                      elementId: 302,
                      cardScore: 0
                    }); //初始化空位置
                  }
                }

                var _payout = _res.payout ? Num.toThousandsBack(_res.payout) : 0;
                for (var _j = _res.symbols.length - 1; _j >= 0; _j--) {
                  if (_res.symbols[_j].id === 'null' || _res.symbols[_j].id === 'empty') continue; //空位置，跳过

                  var _reel = _res.symbols[_j].coordinate.reel - 1; //列号
                  var _row = 0; //行号
                  if (_reel === 1) _row = 4 - _res.symbols[_j].coordinate.row; //第二列的行号
                  else _row = 3 - _res.symbols[_j].coordinate.row; //第一列的行号

                  var _mult = _res.symbols[_j].id.replace('倍', '');
                  //在对应的列中存入数据
                  var cardScore = _res.symbols[_j].payout ? Num.toThousandsBack(_res.symbols[_j].payout) : Num.toThousandsBack(_mult) * bet;
                  colums[_reel].elements[_row] = {
                    elementId: 301,
                    cardScore: cardScore
                  };
                }
                var miniList = {
                  colums: colums,
                  hitType: 2,
                  lines: [],
                  winScore: _payout
                };
                result.mini.list.push(miniList);
                result.mini.winScore = Num.toThousandsBack(data.res.payout);
              }
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
          var _this3 = this;
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
          textCom.string = prefix + this.changeString(startNum.toFixed(2));
          this.numberTween = tween(obj).to(timer, {
            number: length
          }, {
            progress: function progress(start, end, current, ratio) {
              //startNum + start + (end - start) * ratio
              // textCom.string = prefix + (Math.floor(current * Math.pow(10, place)) / Math.pow(10, place));
              textCom.string = prefix + _this3.changeString(((startNum * Math.pow(10, place) - Math.ceil(start + (end - start) * ratio)) / Math.pow(10, place)).toFixed(2));
              return (startNum * Math.pow(10, place) - start + (end - start) * ratio) / Math.pow(10, place);
            },
            easing: easing.quintOut
          }).call(function () {
            textCom.string = prefix + _this3.changeString(endNum.toFixed(2));
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
         * 数额转换小数点转换为逗号（.=>,）
         * @param str 要转换的字符串
         * @returns 转换后的字符串
         */;
        _proto.changeString = function changeString(str, language) {
          if (language === void 0) {
            language = 'en';
          }
          var conStr = ''; //转换后的数额
          switch (language) {
            case 'pt':
              conStr = str.toString().replace(".", ",");
              break;
            case 'PT':
              conStr = str.toString().replace(".", ",");
              break;
            case 'en':
              conStr = str.toString();
            case 'EN':
              conStr = str.toString();
              break;
          }
          return conStr;
        }

        //字符串转换位number，
        ;

        _proto.toNumber = function toNumber(str, language) {
          if (language === void 0) {
            language = 'en';
          }
          var conStr = ''; //转换后的数额
          switch (language) {
            case 'pt':
              conStr = str.toString().replace(",", ".");
              break;
            case 'en':
              conStr = str.toString();
              break;
          }
          return Number(conStr);
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
          var isSub, i, _i4, _i5;
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
                _i4 = 0;
              case 13:
                if (!(_i4 < length)) {
                  _context.next = 19;
                  break;
                }
                _context.next = 16;
                return callback(_i4, data);
              case 16:
                _i4++;
                _context.next = 13;
                break;
              case 19:
                _context.next = 28;
                break;
              case 21:
                _i5 = 0;
              case 22:
                if (!(_i5 < length)) {
                  _context.next = 28;
                  break;
                }
                _context.next = 25;
                return callback(_i5, data);
              case 25:
                _i5++;
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
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var gen = generator;
            // 创建执行函数
            var execute = function execute() {
              // 执行之前，先记录开始时间戳
              var startTime = new Date().getTime();
              _this4.scheduleOnce(function () {
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
                    _this4.scheduleOnce(function () {
                      execute();
                    });
                    return;
                  }
                }
              }, _this4.delayTime);
            };

            // 运行执行函数
            execute();
          });
        };
        _createClass(KylinUtils, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new KylinUtils();
            }
            return this._instance;
          }
        }]);
        return KylinUtils;
      }(Component), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KylinVideoManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "3b149qItwdAioQioVvVqohj", "KylinVideoManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KylinVideoManager = exports('KylinVideoManager', (_dec = ccclass('KylinVideoManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KylinVideoManager, _Component);
        function KylinVideoManager() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = KylinVideoManager.prototype;
        // @property(VideoPlayer)
        // kylinVideo: VideoPlayer = null;
        _proto.start = function start() {
          // this.kylinVideo.onCompleted = () => {
          //     console.log("ok");
          // }
        }

        // private onVideoEvent(video: VideoPlayer, videoType) {
        // if(videoType === "completed") {
        //     director.loadScene('slot_kylinMain');
        // }
        // }
        ;

        return KylinVideoManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_slots_kylin", ['./Slot2.ts', './SlotItem2.ts', './SlotLayer%20copy.ts', './SlotLayer2.ts', './TweenFun2.ts', './KylinBaseScroll.ts', './KylinPoolManager.ts', './KylinUtils.ts', './PubButton.ts', './KylinGameData.ts', './KylinGameVariable.ts', './KylinAnimationManager.ts', './KylinElementDetailsManager.ts', './KylinGameElement.ts', './KylinGameManager.ts', './KylinNoticeManager.ts', './KylinPrizeManager.ts', './KylinSceneManager.ts', './KylinVideoManager.ts', './SlotKylinGameMgr.ts', './SlotsKylinGameHUD.ts', './SlotsKylinLobbyScene.ts', './UIKylinAuto.ts', './UIKylinEntryMini.ts', './UIKylinResult.ts', './UIKylinResultItem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PubButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, ccenum, CCInteger, Sprite, Button, tween, v3, color;
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
      Sprite = module.Sprite;
      Button = module.Button;
      tween = module.tween;
      v3 = module.v3;
      color = module.color;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8972fm54S9PrLMg5mB/IMUv", "PubButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EType = /*#__PURE__*/function (EType) {
        EType[EType["DARK"] = 0] = "DARK";
        EType[EType["GRAY"] = 1] = "GRAY";
        return EType;
      }(EType || {});
      ccenum(EType);
      var PubButton = exports('PubButton', (_dec = ccclass('PubButton'), _dec2 = property({
        type: EType,
        displayName: "禁用类型"
      }), _dec3 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Button) {
        _inheritsLoose(PubButton, _Button);
        function PubButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Button.call.apply(_Button, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isScale", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interactableType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dark", _descriptor3, _assertThisInitialized(_this));
          _this._st = void 0;
          return _this;
        }
        var _proto = PubButton.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._st = this.node.getComponent(Sprite);
          this.node.on(Button.EventType.CLICK, function () {
            if (!_this2.interactable) return;
            // root.audio.play('Click');
            if (_this2.transition == 0 && _this2.isScale) {
              tween(_this2.node).to(.1, {
                scale: v3(1.05, 1.05, 1.05)
              }).to(.1, {
                scale: v3(1, 1, 1)
              }).start();
            }
          });
        };
        _createClass(PubButton, [{
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
        return PubButton;
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Slot2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotLayer2.ts', './KylinUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, SpriteAtlas, Font, SpriteFrame, Material, randomRangeInt, Component, Vec3, SlotLayer, KylinUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      SpriteAtlas = module.SpriteAtlas;
      Font = module.Font;
      SpriteFrame = module.SpriteFrame;
      Material = module.Material;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
      Vec3 = module.Vec3;
    }, function (module) {
      SlotLayer = module.SlotLayer;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "c0467T7W0lM442eB/v8lsdP", "Slot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StopType = exports('StopType', /*#__PURE__*/function (StopType) {
        StopType[StopType["\u7ACB\u5373\u505C\u6B62"] = 0] = "\u7ACB\u5373\u505C\u6B62";
        StopType[StopType["\u9646\u7EED\u505C\u6B62"] = 1] = "\u9646\u7EED\u505C\u6B62";
        StopType[StopType["\u7ACB\u5373\u9646\u7EED"] = 2] = "\u7ACB\u5373\u9646\u7EED";
        return StopType;
      }({}));
      var RankType = exports('RankType', /*#__PURE__*/function (RankType) {
        RankType[RankType["\u7AD6\u6392"] = 0] = "\u7AD6\u6392";
        RankType[RankType["\u6A2A\u6392"] = 1] = "\u6A2A\u6392";
        return RankType;
      }({}));
      var EaseType = exports('EaseType', /*#__PURE__*/function (EaseType) {
        EaseType[EaseType["Linear"] = 0] = "Linear";
        EaseType[EaseType["Back"] = 1] = "Back";
        EaseType[EaseType["Bounce"] = 2] = "Bounce";
        EaseType[EaseType["Circ"] = 3] = "Circ";
        EaseType[EaseType["Cubic"] = 4] = "Cubic";
        EaseType[EaseType["Elastic"] = 5] = "Elastic";
        EaseType[EaseType["Expo"] = 6] = "Expo";
        EaseType[EaseType["Quad"] = 7] = "Quad";
        EaseType[EaseType["Quart"] = 8] = "Quart";
        EaseType[EaseType["Quint"] = 9] = "Quint";
        EaseType[EaseType["Sine"] = 10] = "Sine";
        return EaseType;
      }({}));
      Enum(StopType);
      Enum(EaseType);
      Enum(RankType);
      var Slot = exports('Slot', (_dec = ccclass('Slot'), _dec2 = property({
        type: [SpriteAtlas],
        displayName: "图片库"
      }), _dec3 = property({
        displayName: "自动高度"
      }), _dec4 = property({
        type: StopType,
        displayName: "停止类型"
      }), _dec5 = property({
        displayName: "间隔时间",
        visible: function visible() {
          return this.stopType == StopType.陆续停止 || this.stopType == StopType.立即陆续;
        }
      }), _dec6 = property({
        displayName: "速度"
      }), _dec7 = property({
        type: EaseType,
        displayName: "缓入类型"
      }), _dec8 = property({
        type: EaseType,
        displayName: "缓出类型"
      }), _dec9 = property({
        displayName: "文本位置"
      }), _dec10 = property({
        type: Font,
        displayName: "字体"
      }), _dec11 = property({
        displayName: "字体大小"
      }), _dec12 = property({
        displayName: "运动模糊"
      }), _dec13 = property({
        tooltip: '是否使用背景'
      }), _dec14 = property({
        type: SpriteFrame,
        displayName: "背景图片",
        visible: function visible() {
          return this.isUseBg;
        }
      }), _dec15 = property({
        type: RankType
      }), _dec16 = property({
        type: Material,
        visible: function visible() {
          return this.isBlur;
        }
      }), _dec17 = property({
        displayName: "运行",
        group: {
          id: "1",
          name: "渲染面板"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Slot, _Component);
        function Slot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "libs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoHeight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopType", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interval", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_speed", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_easingIn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_easingOut", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontVec", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "font", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "size", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isBlur", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isUseBg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgFrame", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rank", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "material", _descriptor15, _assertThisInitialized(_this));
          _this._layers = [];
          _this._elementIds = [];
          return _this;
        }
        var _proto = Slot.prototype;
        //roll点
        _proto.roll = function roll(arr, callback, callbackColumn) {
          var _this2 = this;
          var now = 0;
          this._layers.forEach(function (v, i) {
            var interval = i * (_this2.stopType == StopType.立即停止 || _this2.stopType == StopType.立即陆续 ? 0 : _this2.interval);
            _this2.scheduleOnce(function () {
              v.roll(arr[i], function () {
                now++;
                if (callbackColumn) callbackColumn(i);
                if (now == _this2._layers.length) {
                  callback && callback();
                }
              });
            }, interval);
          });
        };
        _proto.showAllLayer = function showAllLayer() {
          for (var i = 0; i < this.columnFlat.length; i++) {
            this.columnFlat[i].active = true;
          }
        }
        //虚拟roll，按钮点击后，无视网络马上开始
        ;

        _proto.rollVirtually = function rollVirtually(txtSkins, callback) {
          var _this3 = this;
          this._layers.forEach(function (v, i) {
            //顺序延时开始
            var interval = i * (_this3.stopType == StopType.立即停止 ? 0 : _this3.interval);
            _this3.scheduleOnce(function () {
              v.rollVirtually(txtSkins);
              callback && callback(i);
            }, interval);
          });
        }
        //停止转动
        ;

        _proto.stop = function stop() {
          if (this.stopType == StopType.立即停止) {
            this._layers.forEach(function (v, i) {
              v.stop();
            });
          } else {
            // this._layers.forEach((v, i) => {
            //     console.log(this.speed%i)
            //     this.scheduleOnce(() => {
            //         v.stop();
            //     },i*this.interval);
            // });
            this.stepStop(0);
          }
        }

        //逐渐停止转动
        ;

        _proto.stopSlow = function stopSlow() {}
        //图库切换
        ;

        _proto.toggle = function toggle(num, arr) {
          this._layers.forEach(function (v) {
            v.txtSkins = arr;
            v.libCount = num;
            // console.log(arr,',,,,,,,,,,,,,,,')
          });
        };

        _proto.stepStop = function stepStop(i) {
          var _this4 = this;
          this.scheduleOnce(function () {
            _this4._layers[i].stop(function () {
              if (i + 1 == _this4._layers.length) return;
              _this4.scheduleOnce(function () {
                _this4.stepStop(i + 1);
              }, _this4.interval);
            });
          }, this.interval);
        }
        //获取点位,二维格式
        ;
        //设置预制wheel,libCount:第几套图库
        _proto.setWheels = function setWheels(wheels, libCount) {
          this._layers.forEach(function (v, i) {
            v.setWheel(wheels[i], libCount);
          });
        }

        /**获取随机元素
         * @param column 每列数量
        */;
        _proto.getRandomElementIds = function getRandomElementIds(column) {
          var rollInfo = [];
          column = column || [4, 4, 4];
          // const column = [4, 4, 4];
          var elementIds = [].concat(this._elementIds);
          for (var i = 0; i < 3; i++) {
            rollInfo.push([]);
            var randomElement = [];
            for (var k = 0; k < 2; k++) {
              var idIndex = randomRangeInt(0, elementIds.length);
              randomElement.push(elementIds[idIndex]);
              elementIds.splice(idIndex, 1);
            }
            for (var j = 0; j < column[i]; j++) {
              var ran = randomRangeInt(0, 2);
              var elementId = randomElement[ran];
              var cardScore = 0;
              rollInfo[i].push({
                name: elementId.toString(),
                text: KylinUtils.instance.changeString(cardScore)
              });
            }
          }
          return rollInfo;
        };
        _proto.setup = /*#__PURE__*/function () {
          var _setup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(arr) {
            var i, some, layer;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._elementIds = arr;
                  for (i = 0; i < this.node.children.length; i++) {
                    some = this.node.children[i];
                    layer = some.getComponent(SlotLayer);
                    layer.index = i;
                    layer.rank = this.rank;
                    layer.easingIn = EaseType[this.easingIn];
                    layer.easingOut = EaseType[this.easingOut];
                    layer.isUseBg = this.isUseBg;
                    layer.bgFrame = this.bgFrame;
                    layer.material = this.material;
                    layer.font = this.font;
                    layer.size = this.size;
                    layer.fontVec = this.fontVec;
                    layer.lib = this.libs;
                    layer.speed = this.speed;
                    this._layers.push(layer);
                    layer.autoHeight = this.autoHeight;
                    layer.setup(arr);
                  }
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setup(_x) {
            return _setup.apply(this, arguments);
          }
          return setup;
        }();
        _createClass(Slot, [{
          key: "speed",
          get: function get() {
            return this._speed;
          },
          set: function set(v) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.layers), _step; !(_step = _iterator()).done;) {
              var layer = _step.value;
              layer.speed = v;
            }
            this._speed = v;
          }
        }, {
          key: "easingIn",
          get: function get() {
            return this._easingIn;
          },
          set: function set(v) {
            this._easingIn = v;
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.layers), _step2; !(_step2 = _iterator2()).done;) {
              var layer = _step2.value;
              layer.easingIn = EaseType[this.easingIn];
            }
          }
        }, {
          key: "easingOut",
          get: function get() {
            return this._easingOut;
          },
          set: function set(v) {
            this._easingOut = v;
            for (var _iterator3 = _createForOfIteratorHelperLoose(this.layers), _step3; !(_step3 = _iterator3()).done;) {
              var layer = _step3.value;
              layer.easingOut = EaseType[this.easingOut];
            }
          }
        }, {
          key: "go",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.setup(["101", "102", "103"]);
          }
        }, {
          key: "layers",
          get: function get() {
            return this._layers;
          }
        }, {
          key: "column",
          get: function get() {
            var res = [];
            this._layers.forEach(function (v) {
              res.push(v.column);
            });
            return res;
          }
          //获取点位，平铺格式
        }, {
          key: "columnFlat",
          get: function get() {
            var res = [];
            this._layers.forEach(function (v) {
              res.push.apply(res, v.column);
            });
            return res;
          }
        }]);
        return Slot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "libs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stopType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return StopType.立即停止;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_easingIn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EaseType.Back;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "easingIn", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "easingIn"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_easingOut", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EaseType.Back;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "easingOut", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "easingOut"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fontVec", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "font", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "isBlur", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "isUseBg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bgFrame", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "rank", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RankType.竖排;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "go", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "go"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotItem2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, NodeEventType, Sprite, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3bd2d8pPHpCwoEm0pmtjiKC", "SlotItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotItem = exports('SlotItem', (_dec = ccclass('SlotItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotItem, _Component);
        function SlotItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._st = void 0;
          _this._bg = void 0;
          //当前slot中第几个元素
          _this.column = void 0;
          //当前第几个layer
          _this.layer = void 0;
          return _this;
        }
        var _proto = SlotItem.prototype;
        _proto.setSharedMaterial = function setSharedMaterial(v, i) {
          this._st.setSharedMaterial(v, i);
        };
        _proto.start = function start() {
          var _this2 = this;
          this.node.on(NodeEventType.TOUCH_END, function () {
            var info = {
              layer: _this2.layer,
              column: _this2.column,
              sprite: _this2._st
            };
            _this2.node.emit("click", info);
            console.log(info);
          });
        };
        _createClass(SlotItem, [{
          key: "spriteFrame",
          get: function get() {
            return this._st.spriteFrame;
          },
          set: function set(v) {
            if (!this._st) this._st = this.node.addComponent(Sprite);
            this._st.spriteFrame = v;
          }
        }, {
          key: "bgSpriteFrame",
          get: function get() {
            return this._bg.spriteFrame;
          },
          set: function set(v) {
            if (!this._bg) {
              this._bg = this.node.addComponent(Sprite);
              this._bg.name = "bg";
              this._bg.node.setSiblingIndex(0);
            }
            this._bg.spriteFrame = v;
          }
        }, {
          key: "sharedMaterial",
          get: function get() {
            return this._st.sharedMaterial;
          }
        }, {
          key: "material",
          get: function get() {
            return this._st.material;
          },
          set: function set(v) {
            this._st.material = v;
          }
        }]);
        return SlotItem;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotKylinGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './RoomMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "f51a1W0QkpD86SKxlpPVfro", "SlotKylinGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotKylinGameMgr = exports('SlotKylinGameMgr', (_dec = ccclass('SlotKylinGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotKylinGameMgr, _GameMgr);
        function SlotKylinGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._porcessFun = void 0;
          _this._gameType = SubGameDef.SLOTS_KYLIN;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_kylin',
            bundle: ModuleDef.SLOTS_KYLIN
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotKylinGameMgr.prototype;
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
        _createClass(SlotKylinGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotKylinGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotKylinGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      // console.error("SlotKylinGameMgr 加载成功");
      SubGameMgr.inst.registerGameMgr(SlotKylinGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotLayer%20copy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TweenFun2.ts', './Slot2.ts', './SlotItem2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteAtlas, Node, v3, Mask, UITransform, Label, tween, Component, TweenFun, RankType, SlotItem;
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
      SpriteAtlas = module.SpriteAtlas;
      Node = module.Node;
      v3 = module.v3;
      Mask = module.Mask;
      UITransform = module.UITransform;
      Label = module.Label;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      TweenFun = module.TweenFun;
    }, function (module) {
      RankType = module.RankType;
    }, function (module) {
      SlotItem = module.SlotItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b264al1dwlNtqymz19sInBZ", "SlotLayer%20copy", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotLayerCopy = exports('SlotLayerCopy', (_dec = ccclass('SlotLayer'), _dec2 = property({
        displayName: "宽度"
      }), _dec3 = property({
        displayName: "高度"
      }), _dec4 = property({
        displayName: "间隔"
      }), _dec5 = property({
        displayName: "显示数量"
      }), _dec6 = property({
        type: [SpriteAtlas],
        displayName: "图片库",
        visible: false
      }), _dec7 = property({
        displayName: "运行",
        group: {
          id: "1",
          name: "渲染面板"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotLayerCopy, _Component);
        function SlotLayerCopy() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "width", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "height", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "space", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "count", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lib", _descriptor5, _assertThisInitialized(_this));
          _this.rank = RankType.竖排;
          _this._wheels = [];
          _this._wheelCopy = [];
          _this.isUseBg = false;
          _this.bgFrame = null;
          _this.material = void 0;
          _this.font = void 0;
          _this.size = void 0;
          _this.fontVec = void 0;
          _this.libCount = 0;
          _this.autoHeight = true;
          _this.speed = 20;
          _this._txtSkins = void 0;
          _this._normalMaterial = void 0;
          _this._isMove = false;
          _this._isStop = false;
          _this._isSlow = false;
          _this._isVirtually = false;
          _this._childs = [];
          _this._tolHeight = 0;
          _this._tolY = 0;
          _this._minY = 0;
          _this._time = 0;
          _this._h = void 0;
          _this._moves = [];
          _this._resets = [];
          _this._blurs = [];
          _this._points = [];
          _this._txts = [];
          _this._juli = 0;
          _this._over = 0;
          _this._rolls = void 0;
          _this._callback = void 0;
          _this._stopCall = void 0;
          _this._lin = void 0;
          _this._infos = {
            pos: 0
          };
          _this._inStr = void 0;
          _this._outStr = void 0;
          _this._easingIn = TweenFun.Quad.easeIn;
          _this._easingOut = "backOut";
          _this.index = void 0;
          return _this;
        }
        var _proto = SlotLayerCopy.prototype;
        _proto.setWheel = function setWheel(v, libCount) {
          this._wheels[libCount] = v;
          this.copyWheel();
        };
        _proto.copyWheel = function copyWheel() {
          this._wheelCopy = JSON.parse(JSON.stringify(this._wheels));
        };
        _proto.setup = function setup(arr) {
          if (!arr) {
            console.error("没有传入初始数组");
            return;
          }
          this._lin = arr;
          this.node.removeAllChildren();
          this._childs = [];
          if (this.lib == null) return;
          var count = this.count + 1;
          var height = 0;
          var isShu = this.rank == RankType.竖排;
          var target = isShu ? this.height : this.width;
          this._h = target / 2 + this.space;
          for (var i = 0; i < count; i++) {
            var stf = this.getRndSftByArr(arr);
            var node = new Node();
            // const l=node.addComponent(Label);
            // l.string=i.toString();
            node.layer = this.node.layer;
            node.name = "item";
            var st = node.addComponent(SlotItem);
            st.column = i;
            st.layer = this.index;
            st.spriteFrame = stf;
            this.node.addChild(node);
            if (this.isUseBg) {
              st.bgSpriteFrame = this.bgFrame;
            }
            var y = isShu ? -(i * this._h) + target / 2 : i * this._h + target / 2;
            height += this._h;
            var pos = isShu ? v3(0, y, 0) : v3(y, -this.height / 2, 0);
            node.setPosition(pos);
            this._childs.push(st);
            this._points[i] = pos;
            this._moves[i] = true;
            this._normalMaterial = st.sharedMaterial;
            var txt = this.getTxt();
            txt.useSystemFont = false;
            txt.font = this.font;
            txt.fontSize = this.size;
            txt.node.layer = node.layer;
            txt.node.active = false;
            node.addChild(txt.node);
            this._txts[i] = txt;
            if (i == 0) this._minY = y;
          }
          this.getComponent(Mask) || this.addComponent(Mask);
          var ui = this.getComponent(UITransform);
          ui.anchorX = isShu ? 0.5 : 0;
          if (this.autoHeight) {
            if (isShu) {
              ui.width = this.width;
              ui.height = height - this._h;
            } else {
              ui.width = height - this._h;
              ui.height = this.height;
            }
          }
          ui.anchorY = 1;
          this._tolHeight = isShu ? ui.height : ui.width;
          this._tolY = isShu ? -(this._tolHeight + target / 2) : this._tolHeight + target / 2;
        };
        _proto.getTxt = function getTxt() {
          var node = new Node();
          var txt = node.addComponent(Label);
          txt.string = "0";
          node.position = this.fontVec;
          return txt;
        }
        //开始转动，传入roll数组
        ;

        _proto.roll = function roll(arr, callback) {
          var _this2 = this;
          if (this._isMove && !this._isVirtually) return;
          this._rolls = arr;
          if (!this._isVirtually) this.init();
          this._isVirtually = false;
          this._callback = callback;
          tween(this._infos).to(1, {
            pos: this._infos.pos + this._childs.length * 2
          }, {
            easing: TweenFun.Elastic.easeOut
          }).call(function () {
            _this2._isMove = false;
            _this2._callback();
          }).start();
        }
        //虚拟转盘，传入slot名字集合和积分集合
        ;

        _proto.rollVirtually = function rollVirtually(txtSkins) {
          if (this._isMove) return;
          this._isVirtually = true;
          this._txtSkins = txtSkins;
          this.init();
        }
        //停止转动
        ;

        _proto.stop = function stop(stopCall) {
          this._isStop = true;
          this._isSlow = false;
          this._stopCall = stopCall;
        }
        //逐渐停止转动
        ;

        _proto.stopSlow = function stopSlow(stopCall) {
          this._time = 0;
          this._juli = this.speed;
          this._isSlow = true;
          this._stopCall = stopCall;
        }
        //获取当前点位列
        ;

        _proto.init = function init() {
          this._juli = 0;
          this._over = 0;
          this._isMove = true;
          this._isStop = false;
          this._isSlow = false;
          this._time = 0;
          this.childInit();
          // this._moves.forEach(v=>v=true);
        };

        _proto.childInit = function childInit() {
          var isShu = this.rank == RankType.竖排;
          var target = isShu ? this.height : this.width;
          for (var i = 0; i < this._moves.length; i++) {
            this._moves[i] = true;
            this._resets[i] = false;
            this._blurs[i] = false;
            var y = isShu ? -(i * this._h) + target / 2 : i * this._h + target / 2;
            var pos = v3(isShu ? 0 : y, isShu ? y : 0, 0);
            this._childs[i].node.active = true;
            this._childs[i].node.setPosition(pos);
          }
        };
        _proto.update = function update() {
          if (!this._isMove) return;
          this._time += 1;
          for (var i = 0; i < this._childs.length; i++) {
            var one = this._childs[i];
            var isShu = this.rank == RankType.竖排;
            var h = this._h;
            var prevy = one.node.position.y;
            var y = -(this._infos.pos + i) % this._childs.length * h + this.height / 2;
            one.node.setPosition(v3(0, y, 0));
            var ty = isShu ? Math.abs(prevy - this._tolY) <= 5 : one.node.position.x >= this._tolY;
            if (ty && one.node.position.y >= 0) {
              if (i > 0) {
                var last = this._rolls[i - 1];
                one.spriteFrame = this.lib[this.libCount].getSpriteFrame(last ? last.name.toString() : "1102");
              } else {
                one.spriteFrame = this.getRndSft();
              }
              // const txt = isRe ? this._rolls[i].text : this.getRndTxt();
              // this.setTxt(i, txt);
            }
          }
        };

        _proto.rollOver = function rollOver() {
          this._over++;
          if (this._over == this.count + 1) {
            this._isMove = false;
            this._childs[this._childs.length - 1].node.active = false;
            this._callback();
          }
        };
        _proto.getRndTxt = function getRndTxt() {
          var rect = this._txtSkins;
          if (!rect) return '';
          return rect[Math.floor(Math.random() * rect.length)].text;
        };
        _proto.setTxt = function setTxt(i, txt) {
          var _this$_txtSkins,
            _this3 = this;
          var index = (_this$_txtSkins = this._txtSkins) == null ? void 0 : _this$_txtSkins.findIndex(function (v) {
            return v.name == _this3._childs[i].spriteFrame.name;
          });
          this._txts[i].node.active = index > -1;
          if (index > -1) {
            this._txts[i].string = txt;
          }
        };
        _proto.getRndSft = function getRndSft() {
          if (this._wheelCopy[this.libCount]) {
            if (this._wheelCopy[this.libCount].length == 0) {
              this.copyWheel();
            }
            return this.lib[this.libCount].getSpriteFrame(this._wheelCopy[this.libCount].shift().toString());
          } else {
            var list = this.lib[this.libCount].getSpriteFrames();
            var st = list[Math.floor(Math.random() * list.length)];
            return st;
          }
        };
        _proto.getRndSftByArr = function getRndSftByArr(arr) {
          var st = arr[Math.floor(Math.random() * arr.length)];
          return this.lib[this.libCount].getSpriteFrame(st);
        };
        _createClass(SlotLayerCopy, [{
          key: "go",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.setup(this._lin);
          }
        }, {
          key: "txtSkins",
          set: function set(v) {
            this._txtSkins = v;
          }
        }, {
          key: "easingOut",
          set: function set(v) {
            this._outStr = v;
            this._easingOut = v == "Linear" ? "linear" : v.toLocaleLowerCase() + "Out";
          }
        }, {
          key: "easingIn",
          set: function set(v) {
            this._inStr = v;
            this._easingIn = v == "Linear" ? TweenFun.Linear : TweenFun[v].easeIn;
          }
        }, {
          key: "column",
          get: function get() {
            var res = [];
            for (var i = 0; i < this._childs.length - 1; i++) {
              res.push(this._childs[i].node);
            }
            return res;
          }
        }]);
        return SlotLayerCopy;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "space", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lib", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "go", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "go"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotLayer2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TweenFun2.ts', './Slot2.ts', './SlotItem2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteAtlas, Node, v3, Mask, UITransform, Label, tween, easing, Vec3, Component, TweenFun, RankType, SlotItem;
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
      SpriteAtlas = module.SpriteAtlas;
      Node = module.Node;
      v3 = module.v3;
      Mask = module.Mask;
      UITransform = module.UITransform;
      Label = module.Label;
      tween = module.tween;
      easing = module.easing;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      TweenFun = module.TweenFun;
    }, function (module) {
      RankType = module.RankType;
    }, function (module) {
      SlotItem = module.SlotItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "4bc2fGoCLBM86NtKna4SEKc", "SlotLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotLayer = exports('SlotLayer', (_dec = ccclass('SlotLayer'), _dec2 = property({
        displayName: "宽度"
      }), _dec3 = property({
        displayName: "高度"
      }), _dec4 = property({
        displayName: "间隔"
      }), _dec5 = property({
        displayName: "显示数量"
      }), _dec6 = property({
        type: [SpriteAtlas],
        displayName: "图片库",
        visible: false
      }), _dec7 = property({
        displayName: "运行",
        group: {
          id: "1",
          name: "渲染面板"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotLayer, _Component);
        function SlotLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "width", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "height", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "space", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "count", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lib", _descriptor5, _assertThisInitialized(_this));
          _this.rank = RankType.竖排;
          _this._wheels = [];
          _this._wheelCopy = [];
          _this.isUseBg = false;
          _this.bgFrame = null;
          _this.material = void 0;
          _this.font = void 0;
          _this.size = void 0;
          _this.fontVec = void 0;
          _this.libCount = 0;
          _this.autoHeight = true;
          _this.speed = 20;
          _this._txtSkins = void 0;
          _this._normalMaterial = void 0;
          _this._isMove = false;
          _this._isStop = false;
          _this._isSlow = false;
          _this._slowInfo = {
            pos: 0
          };
          _this._isReset = false;
          _this._isVirtually = false;
          _this._childs = [];
          _this._tolHeight = 0;
          _this._tolY = 0;
          _this._time = 0;
          _this._h = void 0;
          _this._moves = [];
          _this._resets = [];
          _this._blurs = [];
          _this._points = [];
          _this._txts = [];
          _this._juli = 0;
          _this._over = 0;
          _this._rolls = void 0;
          _this._callback = void 0;
          _this._stopCall = void 0;
          _this._lin = void 0;
          _this._inStr = void 0;
          _this._outStr = void 0;
          _this._easingIn = TweenFun.Quad.easeIn;
          _this._easingOut = "backOut";
          _this.index = void 0;
          return _this;
        }
        var _proto = SlotLayer.prototype;
        _proto.setWheel = function setWheel(v, libCount) {
          this._wheels[libCount] = v;
          this.copyWheel();
        };
        _proto.copyWheel = function copyWheel() {
          this._wheelCopy = JSON.parse(JSON.stringify(this._wheels));
        };
        _proto.setup = function setup(arr) {
          if (!arr) {
            console.error("没有传入初始数组");
            return;
          }
          this._lin = arr;
          this.node.removeAllChildren();
          this._childs = [];
          if (this.lib == null) return;
          var count = this.count + 1;
          var height = 0;
          var isShu = this.rank == RankType.竖排;
          var target = isShu ? this.height : this.width;
          this._h = target / 2 + this.space;
          for (var i = 0; i < count; i++) {
            var stf = this.getRndSftByArr(arr);
            var node = new Node();
            // const l=node.addComponent(Label);
            // l.string=i.toString();
            node.layer = this.node.layer;
            node.name = "item";
            var st = node.addComponent(SlotItem);
            st.column = i;
            st.layer = this.index;
            st.spriteFrame = stf;
            this.node.addChild(node);
            if (this.isUseBg) {
              st.bgSpriteFrame = this.bgFrame;
            }
            var y = isShu ? -(i * this._h + target / 2) : i * this._h + target / 2;
            height += this._h;
            var pos = isShu ? v3(0, y, 0) : v3(y, -this.height / 2, 0);
            node.setPosition(pos);
            this._childs.push(st);
            this._points[i] = pos;
            this._moves[i] = true;
            this._normalMaterial = st.sharedMaterial;
            var txt = this.getTxt();
            txt.useSystemFont = false;
            txt.font = this.font;
            txt.fontSize = this.size;
            txt.node.layer = node.layer;
            txt.node.active = false;
            node.addChild(txt.node);
            this._txts[i] = txt;
          }
          this.getComponent(Mask) || this.addComponent(Mask);
          var ui = this.getComponent(UITransform);
          ui.anchorX = isShu ? 0.5 : 0;
          if (this.autoHeight) {
            if (isShu) {
              ui.width = this.width;
              ui.height = height - this._h;
            } else {
              ui.width = height - this._h;
              ui.height = this.height;
            }
          }
          ui.anchorY = 1;
          this._tolHeight = isShu ? ui.height : ui.width;
          this._tolY = isShu ? -(this._tolHeight + target / 2) : this._tolHeight + target / 2;
        };
        _proto.getTxt = function getTxt() {
          var node = new Node();
          var txt = node.addComponent(Label);
          txt.string = "0";
          node.position = this.fontVec;
          return txt;
        }
        //开始转动，传入roll数组
        ;

        _proto.roll = function roll(arr, callback) {
          if (this._isMove && !this._isVirtually) return;
          this._rolls = arr;
          if (!this._isVirtually) this.init();
          this._isVirtually = false;
          this._callback = callback;
        }
        //虚拟转盘，传入slot名字集合和积分集合
        ;

        _proto.rollVirtually = function rollVirtually(txtSkins) {
          this._txtSkins = txtSkins;
          if (this._isMove) return;
          this._isVirtually = true;
          this.init();
        }
        //停止转动
        ;

        _proto.stop = function stop(stopCall) {
          this._isStop = true;
          this._stopCall = stopCall;
        }
        //逐渐停止转动
        ;

        _proto.stopSlow = function stopSlow(stopCall) {
          var _this2 = this;
          this._time = 0;
          this._juli = this.speed;
          this._isSlow = true;
          this._stopCall = stopCall;
          this._isMove = true;
          this._slowInfo.pos = 0;
          tween(this._slowInfo).to(2, {
            pos: this._childs.length * 2
          }, {
            easing: easing.circOut
          }).call(function () {
            _this2._isSlow = false;
            _this2._isMove = false;
            _this2._callback();
          }).start();
        }
        //获取当前点位列
        ;

        _proto.init = function init() {
          this._juli = 0;
          this._over = 0;
          this._isMove = true;
          this._isStop = false;
          this._isSlow = false;
          this._isReset = false;
          this._time = 0;
          this.childInit();
          // this._moves.forEach(v=>v=true);
        };

        _proto.childInit = function childInit() {
          var isShu = this.rank == RankType.竖排;
          var target = isShu ? this.height : this.width;
          for (var i = 0; i < this._moves.length; i++) {
            this._moves[i] = true;
            this._resets[i] = false;
            this._blurs[i] = false;
            var y = isShu ? -(i * this._h + target / 2) : i * this._h + target / 2;
            var pos = v3(isShu ? 0 : y, isShu ? y : 0, 0);
            this._childs[i].node.active = true;
            this._childs[i].node.setPosition(pos);
          }
        };
        _proto.update = function update() {
          if (!this._isMove) return;
          this._time += 1;
          for (var i = 0; i < this._childs.length; i++) {
            var isShu = this.rank == RankType.竖排;
            var one = this._childs[i];
            if (this._isSlow) {
              var index = (this._slowInfo.pos + i) % this._childs.length - 1;
              var y = -(index * this._h + this.height / 2);
              one.node.setPosition(v3(0, y, 0));
            } else {
              this.updateFast(one, i);
            }
            var ty = isShu ? one.node.position.y <= this._tolY : one.node.position.x >= this._tolY;
            if (ty) {
              var ly = Math.abs(this._tolY - (isShu ? one.node.position.y : one.node.position.x));
              var j = isShu ? this.space - ly : -this.space;
              var rpos = v3(isShu ? 0 : j, isShu ? j : 0, 0);
              one.node.setPosition(rpos);
              if (this._isStop) {
                if (i == this.count - 1) {
                  this._isReset = true;
                  this._resets[this._resets.length - 1] = true;
                  if (this._stopCall) this._stopCall();
                }
              }
              if (this._isReset) {
                this._resets[i] = true;
                one.node.position.add(v3(0, -this._juli, 0));
              }
              var isRe = this._isReset && i < this.count;
              if (isRe) {
                one.spriteFrame = this.lib[this.libCount].getSpriteFrame(this._rolls[i] ? this._rolls[i].name.toString() : "1102");
              } else {
                if (!this._isStop) one.spriteFrame = this.getRndSft();
              }
              var txt = isRe ? this._rolls[i].text : this.getRndTxt();
              this.setTxt(i, txt);
            }
          }
        };
        _proto.updateFast = function updateFast(one, i) {
          var _this3 = this;
          var isShu = this.rank == RankType.竖排;
          if (this._inStr == "Linear") {
            this._juli = this.speed;
          } else {
            this._juli = this._easingIn(this._time, 0, this.speed, 1, 1.2) * 0.2;
          }
          if (this._juli >= this.speed) {
            this._juli = this.speed;
          }
          if (this._moves[i]) {
            if (this.material) {
              if (this._juli > 20 && !this._blurs[i]) {
                this._blurs[i] = true;
                one.setSharedMaterial(this.material, 0);
              }
            }
            // this._isStop = true;
            one.node.setPosition(v3(isShu ? 0 : one.node.position.x + this._juli, isShu ? one.node.position.y - this._juli : -this.height / 2, 0));
            if (this._resets[i]) {
              var cha = Vec3.distance(this._points[i], one.node.position);
              if (cha <= this._juli * 2 && this._moves[i]) {
                one.setSharedMaterial(this._normalMaterial, 0);
                this._moves[i] = false;
                // one.node.setPosition(one.node["pos"]);
                tween(one.node).to(this._outStr == "Linear" ? 1 / 100 : this.speed / 130, {
                  position: this._points[i]
                }, {
                  easing: this._outStr == "Back" ? TweenFun.Back.easeOut : this._easingOut
                }).call(function () {
                  _this3.rollOver();
                }).start();
              }
            }
          }
        };
        _proto.rollOver = function rollOver() {
          this._over++;
          if (this._over == this.count + 1) {
            this._isMove = false;
            this._childs[this._childs.length - 1].node.active = false;
            this._callback();
          }
        };
        _proto.getRndTxt = function getRndTxt() {
          var rect = this._txtSkins;
          if (!rect) return '';
          return rect[Math.floor(Math.random() * rect.length)].text;
        };
        _proto.setTxt = function setTxt(i, txt) {
          var _this$_txtSkins,
            _this4 = this;
          var index = (_this$_txtSkins = this._txtSkins) == null ? void 0 : _this$_txtSkins.findIndex(function (v) {
            return v.name == _this4._childs[i].spriteFrame.name;
          });
          this._txts[i].node.active = index > -1;
          if (index > -1) {
            this._txts[i].string = txt;
          }
        };
        _proto.getRndSft = function getRndSft() {
          if (this._wheelCopy[this.libCount]) {
            if (this._wheelCopy[this.libCount].length == 0) {
              this.copyWheel();
            }
            return this.lib[this.libCount].getSpriteFrame(this._wheelCopy[this.libCount].shift().toString());
          } else {
            var list = this.lib[this.libCount].getSpriteFrames();
            var st = list[Math.floor(Math.random() * list.length)];
            return st;
          }
          // const list = this.lib[this.libCount].getSpriteFrames();
          // const st = list[Math.floor(Math.random() * list.length)];
          // return st;
        };

        _proto.getRndSftByArr = function getRndSftByArr(arr) {
          var st = arr[Math.floor(Math.random() * arr.length)];
          return this.lib[this.libCount].getSpriteFrame(st);
        };
        _createClass(SlotLayer, [{
          key: "go",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.setup(this._lin);
          }
        }, {
          key: "txtSkins",
          set: function set(v) {
            this._txtSkins = v;
          }
        }, {
          key: "easingOut",
          set: function set(v) {
            this._outStr = v;
            this._easingOut = v == "Linear" ? "linear" : v.toLocaleLowerCase() + "Out";
          }
        }, {
          key: "easingIn",
          set: function set(v) {
            this._inStr = v;
            this._easingIn = v == "Linear" ? TweenFun.Linear : TweenFun[v].easeIn;
          }
        }, {
          key: "column",
          get: function get() {
            var res = [];
            for (var i = 0; i < this._childs.length - 1; i++) {
              res.push(this._childs[i].node);
            }
            return res;
          }
        }]);
        return SlotLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "space", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lib", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "go", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "go"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsKylinGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts', './RoomMgr.ts', './UserMgr.ts', './SceneDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "2df6bscAK1Jx6BcqqL+Rky3", "SlotsKylinGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsKylinGameHUD = exports('SlotsKylinGameHUD', (_dec = ccclass('SlotsKylinGameHUD'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsKylinGameHUD, _Component);
        function SlotsKylinGameHUD() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SlotsKylinGameHUD.prototype;
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
        return SlotsKylinGameHUD;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsKylinLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './SubGameMgr.ts', './UserMgr.ts', './UIAnnouncement.ts', './SceneDef.ts', './SlotKylinGameMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, SubGameDef, SubGameMgr, UserMgr, UIAnnouncement, SceneDef, SlotKylinGameMgr;
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
    }, function (module) {
      SlotKylinGameMgr = module.SlotKylinGameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5af6dgAy85APps1GmXAAhJR", "SlotsKylinLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsKylinLobbyScene = exports('SlotsKylinLobbyScene', (_dec = ccclass('SlotsKylinLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsKylinLobbyScene, _Component);
        function SlotsKylinLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsKylinLobbyScene.prototype;
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
                  SlotKylinGameMgr.inst.initSoloMode();
                  SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_KYLIN, true);
                case 2:
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
        return SlotsKylinLobbyScene;
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

System.register("chunks:///_virtual/TweenFun2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e3683He3GVPIqAsRprw3CfW", "TweenFun", undefined);
      /*
       * TweenFun.js
       * t: current time（当前时间）
       * b: beginning value（初始值）
       * c: change in value（变化量）
       * d: duration（持续时间）
      */
      var TweenFun = exports('TweenFun', {
        Linear: function Linear(t, b, c, d) {
          return c * t / d + b;
        },
        Quad: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * (--t * (t - 2) - 1) + b;
          }
        },
        Cubic: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
          }
        },
        Quart: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
          }
        },
        Quint: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
          }
        },
        Sine: {
          easeIn: function easeIn(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
          }
        },
        Expo: {
          easeIn: function easeIn(t, b, c, d) {
            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
        },
        Circ: {
          easeIn: function easeIn(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
          }
        },
        Elastic: {
          easeIn: function easeIn(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
              s = p / 4;
              a = c;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
          },
          easeOut: function easeOut(x) {
            var c4 = 2 * Math.PI / 3;
            return x == 0 ? 0 : x == 1 ? 1 : Math.pow(3, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
          },
          easeOut2: function easeOut2(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
          },
          easeInOut: function easeInOut(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
          }
        },
        Back: {
          easeIn: function easeIn(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          },
          easeOut2: function easeOut2(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          },
          easeOut: function easeOut(time1) {
            var overshoot = 1.00158;
            time1 = time1 - 1;
            return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1;
          },
          easeInOut: function easeInOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
          }
        },
        Backcopy: {
          easeIn: function easeIn(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          },
          easeOut: function easeOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
          }
        },
        Bounce: {
          easeIn: function easeIn(t, b, c, d) {
            return c - TweenFun.Bounce.easeOut(d - t, 0, c, d) + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            if ((t /= d) < 1 / 2.75) {
              return c * (7.5625 * t * t) + b;
            } else if (t < 2 / 2.75) {
              return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
            } else if (t < 2.5 / 2.75) {
              return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
            } else {
              return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
            }
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if (t < d / 2) {
              return TweenFun.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
              return TweenFun.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
          }
        },
        Strong: {
          easeOut: function easeOut(t, b, c, d) {
            //减减速曲线
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIKylinAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinGameData.ts', './KylinGameManager.ts', './KylinUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, ToggleContainer, Slider, Label, Widget, Vec3, UITransform, UIOpacity, tween, Toggle, find, Component, KylinGameData, KylinGameManager, KylinUtils;
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
      ToggleContainer = module.ToggleContainer;
      Slider = module.Slider;
      Label = module.Label;
      Widget = module.Widget;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Toggle = module.Toggle;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      KylinGameData = module.KylinGameData;
    }, function (module) {
      KylinGameManager = module.KylinGameManager;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3;
      cclegacy._RF.push({}, "560c3Xg969EwZjE5j3IsnJu", "UIKylinAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIKylinAuto = exports('UIKylinAuto', (_dec = ccclass('UIKylinAuto'), _dec2 = property(Node), _dec3 = property(ToggleContainer), _dec4 = property(Slider), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Slider), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Slider), _dec11 = property(Node), _dec12 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIKylinAuto, _Component);
        function UIKylinAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleRound", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reduceSlider", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reduceproBar", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reduceLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addSlider", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addproBar", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winSlider", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winproBar", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLabel", _descriptor11, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIKylinAuto.prototype;
        _proto.onLoad = function onLoad() {
          if (UIKylinAuto._instance) {
            this.node.destroy();
            return;
          }
          UIKylinAuto._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          this.node.active = false;
        };
        _proto.onDestroy = function onDestroy() {
          UIKylinAuto._instance = null;
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

          KylinGameData.reduceLabel = 0;
          KylinGameData.addLabel = 0;
          KylinGameData.winLabel = 0;
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
            KylinGameData.autoCountIndex = 0;
            find("Background/Label", tog).getComponent(Label).string = KylinGameData.Auto.AutoIndex[index].toString();
            find("Checkmark/Label", tog).getComponent(Label).string = KylinGameData.Auto.AutoIndex[index].toString();
          }
        };
        _proto.onSelectRound = function onSelectRound(data) {
          KylinGameData.autoCountIndex = KylinUtils.instance.toNumber(data.node.name);
        };
        _proto.onBtnConfirm = function onBtnConfirm() {
          this.onBtnClose();
          KylinGameManager.instance.startAuto();
        };
        _proto.reduce_Label = function reduce_Label(lab) {
          var progress = this.reduceSlider.progress;
          var progressS = (Math.floor(progress * 5) + 5).toFixed(0);
          if (progressS == "0") {
            this.reduceLabel.string = "5";
          } else {
            this.reduceLabel.string = progressS;
          }
          KylinGameData.reduceLabel = KylinUtils.instance.toNumber(this.reduceLabel.string);
        };
        _proto.add_labbel = function add_labbel(lab) {
          var progress = this.addSlider.progress;
          var progressS = (Math.floor(progress * 4900) + 100).toFixed(0);
          if (progressS == "0") {
            this.addLabel.string = "100";
          } else {
            this.addLabel.string = progressS;
          }
          KylinGameData.addLabel = KylinUtils.instance.toNumber(this.addLabel.string);
        };
        _proto.win_label = function win_label(lab) {
          var progress = this.winSlider.progress;
          var progressS = (Math.floor(progress * 490) + 10).toFixed(0);
          if (progressS == "0") {
            this.winLabel.string = "10";
          } else {
            this.winLabel.string = progressS;
          }
          KylinGameData.winLabel = KylinUtils.instance.toNumber(this.winLabel.string);
        };
        _proto.onReduceSlider = function onReduceSlider() {
          var reduceSlider = this.reduceSlider.progress;
          this.reduceproBar.getComponent(UITransform).width = reduceSlider * 1000;
          var reduceLabel = KylinUtils.instance.toNumber((reduceSlider * 10).toFixed(0));
          this.reduce_Label(reduceLabel);
        };
        _proto.onAddSlider = function onAddSlider() {
          var addSlider = this.addSlider.progress;
          this.addproBar.getComponent(UITransform).width = addSlider * 1000;
          var addLabel = KylinUtils.instance.toNumber((addSlider * 5000).toFixed(0));
          this.add_labbel(addLabel);
        };
        _proto.onWinSlider = function onWinSlider() {
          var winSlider = this.winSlider.progress;
          this.winproBar.getComponent(UITransform).width = winSlider * 1000;
          var winLabel = KylinUtils.instance.toNumber((winSlider * 500).toFixed(0));
          this.win_label(winLabel);
        };
        _proto.onBtnClose = function onBtnClose() {
          var _this2 = this;
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
        _createClass(UIKylinAuto, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UIKylinAuto;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleRound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "reduceSlider", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "reduceproBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "reduceLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "addSlider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "addproBar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "addLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "winSlider", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "winproBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [_dec12], {
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

System.register("chunks:///_virtual/UIKylinEntryMini.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinPoolManager.ts', './KylinUtils.ts', './KylinGameElement.ts', './KylinAnimationManager.ts', './KylinGameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, sp, Widget, Vec3, find, UIOpacity, randomRangeInt, tween, Component, KylinPoolManager, KylinUtils, KylinGameElement, KylinAnimationManager, KylinGameManager;
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
      sp = module.sp;
      Widget = module.Widget;
      Vec3 = module.Vec3;
      find = module.find;
      UIOpacity = module.UIOpacity;
      randomRangeInt = module.randomRangeInt;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      KylinPoolManager = module.KylinPoolManager;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }, function (module) {
      KylinGameElement = module.KylinGameElement;
    }, function (module) {
      KylinAnimationManager = module.KylinAnimationManager;
    }, function (module) {
      KylinGameManager = module.KylinGameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3;
      cclegacy._RF.push({}, "e7dfejsrQJCWak+lvKQ7sj3", "UIKylinEntryMini", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIKylinEntryMini = exports('UIKylinEntryMini', (_dec = ccclass('UIKylinEntryMini'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(sp.Skeleton), _dec8 = property(Node), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIKylinEntryMini, _Component);
        function UIKylinEntryMini() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fakeNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundTip", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundText", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyScoreNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyContentNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "kylinSp", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lightNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dice", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highLightNode", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIKylinEntryMini.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          if (UIKylinEntryMini._instance) {
            this.node.destroy();
            return;
          }
          UIKylinEntryMini._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = widget.right = widget.top = widget.bottom = 0;
          this.node.position = Vec3.ZERO;
          this.kylinSp.setCompleteListener(function () {
            _this2.showRound();
          });
          this.kylinSp.node.active = false;
          this.dice.node.active = false;
          this.node.active = false;
        }

        //假装进入小游戏
        ;

        _proto.showFakeMiniGame = function showFakeMiniGame() {
          this.node.active = true;
          this.lightNode.active = true;
          this.fakeNode.active = true;
        };
        _proto.entryMiniGame = function entryMiniGame() {
          var _this3 = this;
          KylinAnimationManager.instance.closeAllAni();
          this.kylinSp.node.active = true;
          this.scheduleOnce(function () {
            _this3.dice.node.active = true;
            _this3.dice.setAnimation(0, 'animation', false);
            KylinGameManager.instance.variable.dice.node.active = false;
            KylinGameManager.instance.variable.diceSpeedUp.node.active = false;
          }, 0.5);
          this.kylinSp.node.parent = this.node;
          this.kylinSp.node.setSiblingIndex(10);
          this.kylinSp.node.position = new Vec3(223, 543);
          this.kylinSp.setAnimation(0, 'animation', false);
        };
        _proto.onDestroy = function onDestroy() {
          UIKylinEntryMini._instance = null;
        };
        _proto.showRound = function showRound() {
          var _this4 = this;
          this.node.active = true;
          KylinGameManager.instance.variable.miniTip.active = true;
          this.fakeNode.active = false;
          this.roundTip.active = true;
          var bg = find('bg', this.roundTip);
          bg.scale = Vec3.ONE;
          bg.getComponent(UIOpacity).opacity = 255;
          this.kylinSp.node.parent = this.roundTip;
          this.kylinSp.node.position = new Vec3(223, 563);
          this.kylinSp.node.setSiblingIndex(1);
          this.scheduleOnce(function () {
            _this4.showFlyScore();
          }, 2);
        }

        //进入小游戏时积分牌飞舞
        ;

        _proto.showFlyScore = function showFlyScore() {
          var _this5 = this;
          this.flyScoreNode.active = true;
          var ranNum = 10;
          var ranTime = 0.3 + Math.random() * 0.2;
          this.schedule(this.createFlyObj, ranTime, ranNum, 0.1);
          this.scheduleOnce(function () {
            _this5.hide();
          }, ranTime * ranNum + 1);
        }

        //创建要飞舞的牌
        ;

        _proto.createFlyObj = function createFlyObj() {
          //生成的牌随机在哪一列
          var parentIndex = randomRangeInt(0, 4);
          var element = KylinPoolManager.instance.getPoolObj(KylinPoolManager.PoolsName.gameElement);
          element.parent = this.flyContentNode.children[parentIndex === 0 ? 0 : 1];
          element.getComponent(KylinGameElement).setScoreFace();
          var endPos = new Vec3();
          if (parentIndex === 0) {
            element.position = new Vec3(0, -253);
            endPos = new Vec3(0, -1025);
          } else {
            element.position = new Vec3(0, -157);
            var pow = randomRangeInt(1, 3);
            endPos = new Vec3(318 * Math.pow(-1, pow), -870);
          }
          element.scale = Vec3.ZERO;
          var uIOpacity = element.getComponent(UIOpacity);
          uIOpacity.opacity = 0;
          var ranScale = 1 + Math.random() * 0.3;
          tween(uIOpacity).to(0.3, {
            opacity: 255
          }).start();
          tween(element).to(0.3, {
            scale: new Vec3(ranScale, ranScale)
          }).call(function () {
            tween(element).to(0.3, {
              scale: Vec3.ONE
            }).start();
            KylinUtils.instance.bezierPostionTo(element, 0.3, 0, element.position.clone(), new Vec3(endPos.x, element.position.y), endPos).call(function () {
              KylinPoolManager.instance.putPoolObj(KylinPoolManager.PoolsName.gameElement, element);
            }).start();
          }).start();
        };
        _proto.hideRound = function hideRound() {
          var _this6 = this;
          this.kylinSp.node.active = false;
          this.dice.node.active = false;
          // this.roundTip.active = false;
          this.fakeNode.active = false;
          this.lightNode.active = false;
          KylinGameManager.instance.variable.entryMiniGameEffect.active = false;
          var bg = find('bg', this.roundTip);
          if (this.roundTip.activeInHierarchy) this.highLightNode.active = true;
          tween(bg).to(1, {
            scale: new Vec3(0.8, 0.8)
          }).call(function () {
            tween(bg.getComponent(UIOpacity)).to(1, {
              opacity: 0
            }).call(function () {
              _this6.scheduleOnce(function () {
                _this6.highLightNode.active = false;
                _this6.roundTip.active = false;
              }, 2);
            }).start();
          }).start();
        };
        _proto.hide = function hide() {
          this.roundTip.active = false;
          this.fakeNode.active = false;
          this.flyScoreNode.active = false;
          this.node.active = false;
        };
        _createClass(UIKylinEntryMini, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UIKylinEntryMini;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fakeNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roundTip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roundText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "flyScoreNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "flyContentNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "kylinSp", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lightNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "dice", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "highLightNode", [_dec10], {
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

System.register("chunks:///_virtual/UIKylinResult.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KylinUtils.ts', './UIKylinResultItem.ts', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Widget, Vec3, Node, Component, KylinUtils, UIKylinResultItem, AudioMgr, ModuleDef;
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
      KylinUtils = module.KylinUtils;
    }, function (module) {
      UIKylinResultItem = module.UIKylinResultItem;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "e9815RcRjhNTa/ToADCZZ6T", "UIKylinResult", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIKylinResult = exports('UIKylinResult', (_dec = ccclass('UIKylinResult'), _dec2 = property(UIKylinResultItem), _dec3 = property(UIKylinResultItem), _dec4 = property(UIKylinResultItem), _dec5 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIKylinResult, _Component);
        function UIKylinResult() {
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
          _this._callback = null;
          _this._mult = 0;
          _this._collectId = -1;
          return _this;
        }
        var _proto = UIKylinResult.prototype;
        //collect音效id
        _proto.onLoad = function onLoad() {
          if (UIKylinResult._instance) {
            this.node.destroy();
            return;
          }
          UIKylinResult._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          // this.node.active = false;
          this.node.on(Node.EventType.TOUCH_END, this.onBtnNext, this);
          this.hide();
        };
        _proto.onDestroy = function onDestroy() {
          UIKylinResult._instance = null;
        };
        _proto.showResult = function showResult(winScore, betScore, callback) {
          var _this2 = this;
          //展示结算界面
          this._mult = winScore / betScore;
          this._callback = callback;
          this._level = 20;
          this.isNext = false;
          this.isBest = false;
          this._winScore = winScore ? winScore : 0;
          this._betScore = betScore;
          if (!this._mult || this._mult < 10) return this._callback && (this._callback(), this._callback = null);
          this.node.active = true;
          AudioMgr.inst.play("audio/AC_sound_8001_music_slotqilin_interface_003", 1, ModuleDef.SLOTS_KYLIN);
          AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_number_collect", 1, ModuleDef.SLOTS_KYLIN).then(function (aeid) {
            return _this2._collectId = aeid;
          });
          if (this._mult >= 10) {
            this.winLab.string = KylinUtils.instance.changeString("0.00");
            this.bitWin.show(betScore, winScore, 0);
          }
        };
        _proto.showNext = function showNext(level, betScore, winScore) {
          //展示下一个等级界面界面
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
        _proto.onBtnNext = function onBtnNext() {
          var _this3 = this;
          //点击展示下一个等级界面，或者点击后直接展示当前等级的最终滚动值
          if (this.isBest) {
            this.hide();
            return;
          }
          if (this._collectId != -1) AudioMgr.inst.stopOneShot(this._collectId, "audio/AC_sound_8001_slotqilin_number_collect", ModuleDef.SLOTS_KYLIN), this._collectId = -1;
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
            _this3.hide();
          }, 2);
        };
        _proto.toNext = function toNext() {
          this.showNext(this._level, this._betScore, this._winScore);
        };
        _proto.onDisable = function onDisable() {
          this.hide();
        };
        _proto.hide = function hide() {
          if (this._collectId != -1) AudioMgr.inst.stopOneShot(this._collectId, "audio/AC_sound_8001_slotqilin_number_collect", ModuleDef.SLOTS_KYLIN), this._collectId = -1;
          this.unscheduleAllCallbacks();
          this.onBtnClose();
          this.isNext = false;
          this.isBest = false;
          this.bitWin.hide();
          this.mageWin.hide();
          this.superWin.hide();
          this._callback && (this._callback(), this._callback = null);
          // SlotUnicorn.UIManager.instance.resetGame();
          // SlotUnicorn.UIManager.instance.setScore(this._winScore);
        };

        _proto.stopOneShot = function stopOneShot() {
          if (this._collectId != -1) AudioMgr.inst.stopOneShot(this._collectId, "audio/AC_sound_8001_slotqilin_number_collect", ModuleDef.SLOTS_KYLIN), this._collectId = -1;
        };
        _proto.onBtnClose = function onBtnClose() {
          this.node.active = false;
        };
        _createClass(UIKylinResult, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return UIKylinResult;
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

System.register("chunks:///_virtual/UIKylinResultItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIKylinResult.ts', './KylinUtils.ts', './ModuleDef.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Node, UIOpacity, Vec3, tween, Component, UIKylinResult, KylinUtils, ModuleDef, AudioMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Label = module.Label;
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      UIKylinResult = module.UIKylinResult;
    }, function (module) {
      KylinUtils = module.KylinUtils;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "66e24mecUpOXJ0lWPrHcKWm", "UIKylinResultItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIKylinResultItem = exports('UIKylinResultItem', (_dec = ccclass('UIKylinResultItem'), _dec2 = property(sp.Skeleton), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIKylinResultItem, _Component);
        function UIKylinResultItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boxSp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelLevel", _descriptor4, _assertThisInitialized(_this));
          //-1最大的页面等级
          _this._tw = null;
          _this._betScore = 0;
          _this._winScore = 0;
          return _this;
        }
        var _proto = UIKylinResultItem.prototype;
        _proto.show = function show(betScore, winScore, startBet) {
          var _this2 = this;
          AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_score_treasure_001", 1, ModuleDef.SLOTS_KYLIN);
          this.boxSp.setAnimation(0, 'animation', true);
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
          this.winLab.string = KylinUtils.instance.changeString(startBet.toFixed(2));
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
              UIKylinResult.instance.showNext(_this2.panelLevel, betScore, winScore);
            } else {
              _this2.scheduleOnce(function () {
                UIKylinResult.instance.hide();
              }, 2);
              UIKylinResult.instance.stopOneShot();
              UIKylinResult.instance.isNext = true;
              UIKylinResult.instance.isBest = true;
            }
          };
          this.node.getComponent(UIOpacity).opacity = 0;
          this.node.scale = new Vec3(1, 0, 1);
          tween(this.node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).call(function () {
            _this2._tw = KylinUtils.instance.IncreaseNumber(_this2.winLab, startBet, maxBet, {
              timer: 2.6,
              callback: cb.bind(_this2)
            });
            _this2._tw.start();
          }).start();
          tween(this.node).to(0.3, {
            scale: Vec3.ONE
          }).start();
        };
        _proto.show2 = function show2(betScore, winScore, startBet) {
          var _this3 = this;
          this.boxSp.setAnimation(0, 'animation', true);
          this._betScore = betScore;
          this._winScore = winScore;
          this.node.active = true;
          var maxBet = 0;
          if (this.panelLevel === 20) {
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === 100) {
            AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_score_treasure_002", 1, ModuleDef.SLOTS_KYLIN);
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === -1) {
            AudioMgr.inst.playOneShot("audio/AC_sound_8001_slotqilin_score_treasure_003", 1, ModuleDef.SLOTS_KYLIN);
            maxBet = winScore;
          }
          this.winLab.string = KylinUtils.instance.changeString(startBet.toFixed(2));
          if (this.panelLevel === 20) {
            // startBet = 0;
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else if (this.panelLevel === 100) {
            // startBet = betScore * 20;
            maxBet = betScore * this.panelLevel;
            maxBet = winScore >= maxBet ? maxBet : winScore;
          } else {
            // startBet = betScore * 100;
            maxBet = winScore;
          }
          var cb = function cb() {
            if (winScore > maxBet) {
              UIKylinResult.instance.showNext(_this3.panelLevel, betScore, winScore);
            } else {
              _this3.scheduleOnce(function () {
                UIKylinResult.instance.hide();
              }, 2);
              UIKylinResult.instance.stopOneShot();
              UIKylinResult.instance.isNext = true;
              UIKylinResult.instance.isBest = true;
            }
          };
          this.effectNode.getComponent(UIOpacity).opacity = 0;
          this.effectNode.scale = new Vec3(1, 0, 1);
          tween(this.effectNode.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).start();
          tween(this.effectNode).to(0.3, {
            scale: Vec3.ONE
          }).start();
          this._tw = KylinUtils.instance.IncreaseNumber(this.winLab, startBet, maxBet, {
            timer: 2.1,
            callback: cb.bind(this)
          });
          this._tw.start();
        };
        _proto.setWinScore = function setWinScore(winScore) {
          this.boxSp.setAnimation(0, 'animation', true);
          this.node.active = true;
          this.winLab.string = KylinUtils.instance.changeString(winScore.toFixed(2));
        };
        _proto.unAllCallbacks = function unAllCallbacks() {
          this.unscheduleAllCallbacks();
          var maxBet = this._betScore * this.panelLevel;
          maxBet = this._winScore >= maxBet ? maxBet : this._winScore;
          if (this.panelLevel === -1) maxBet = this._winScore;
          this.winLab.string = KylinUtils.instance.changeString(maxBet.toFixed(2));
          if (this._winScore <= maxBet) {
            this.scheduleOnce(function () {
              UIKylinResult.instance.hide();
            }, 2);
          }
          this._tw && (this._tw.stop(), this._tw = null);
        };
        _proto.hide = function hide() {
          this.unscheduleAllCallbacks();
          this._tw && (this._tw.stop(), this._tw = null);
          this.node.active = false;
        };
        return UIKylinResultItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxSp", [_dec2], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "panelLevel", [property], {
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
  r('virtual:///prerequisite-imports/module_slots_kylin', 'chunks:///_virtual/module_slots_kylin'); 
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