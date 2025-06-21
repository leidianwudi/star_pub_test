System.register("chunks:///_virtual/module_slots_panda", ['./PandaAuto.ts', './PandaBigWinPop.ts', './PandaTipsPop.ts', './PandaWinIcon.ts', './PandaAnimation.ts', './PandaGameLogic.ts', './PandaMainControl.ts', './SlotPandaGameMgr.ts', './PandaGameData.ts', './PandaGameEvent.ts', './PandaGameRes.ts', './PandaInterface.ts', './PandaGameMainView.ts', './PandaGameMiniGame.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PandaAnimation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaInterface.ts', './PandaGameMainView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sp, Component, EPandaAni, PandaGameMainView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      EPandaAni = module.EPandaAni;
    }, function (module) {
      PandaGameMainView = module.PandaGameMainView;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9a321QIvgBKfbs6LNZMy1vj", "PandaAnimation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PandaAnimation = exports('PandaAnimation', (_dec = ccclass('PandaAnimation'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaAnimation, _Component);
        function PandaAnimation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._ske = void 0;
          _this._callback = void 0;
          _this.aniSate = 0;
          return _this;
        }
        var _proto = PandaAnimation.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this._ske = this.getComponent(sp.Skeleton);
          this._ske.setCompleteListener(function () {
            if (_this2._callback) {
              _this2._callback();
              // console.log("动画完成");
              _this2._callback = null;
            }
          });
        };
        _proto.play = function play(type, isLoop, callback) {
          var _this3 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          this.aniSate = type;
          this._ske.paused = true;
          // console.log("播放的type：", type, isLoop, callback);
          this.scheduleOnce(function () {
            _this3._ske.skeletonData = PandaGameMainView.ins.anis[type];
            if (type != EPandaAni.Drowsy) {
              _this3._ske.node.active = true;
              _this3._ske.paused = false;
              _this3._ske.setAnimation(0, "animation", isLoop);
            }
          }, 0.005);
          callback && (this._callback = callback);
        }
        //瞌睡动画单独处理
        ;

        _proto.playDrowsy = function playDrowsy(type, isLoop) {
          var _this4 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          this._ske.node.active = true;
          this.scheduleOnce(function () {
            _this4._ske.paused = false;
            _this4._ske.setAnimation(0, type.toString(), isLoop);
          }, 0.005);
        }
        /**
         * 进入小游戏举起金币一系列动作
         * @param type 1:举起 2:待机 3:放回金币
         */;
        _proto.playMiniGold = function playMiniGold(type, isLoop) {
          var _this5 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          this._ske.node.active = true;
          this.scheduleOnce(function () {
            _this5._ske.paused = false;
            _this5._ske.setAnimation(0, type.toString(), isLoop);
          }, 0.005);
        };
        return PandaAnimation;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameData.ts', './PandaGameLogic.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, ToggleContainer, Slider, Label, Widget, Vec3, UITransform, color, UIOpacity, tween, Toggle, find, Component, PandaGameData, PandaGameLogic;
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
      color = module.color;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Toggle = module.Toggle;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      PandaGameData = module.PandaGameData;
    }, function (module) {
      PandaGameLogic = module.PandaGameLogic;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _class3;
      cclegacy._RF.push({}, "396fdWR1dZPDZ9wq/OrPfUt", "PandaAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameData = PandaGameData.data;
      var PandaAuto = exports('PandaAuto', (_dec = ccclass('PandaAuto'), _dec2 = property(Node), _dec3 = property(ToggleContainer), _dec4 = property(Slider), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Slider), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Slider), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaAuto, _Component);
        function PandaAuto() {
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
          _initializerDefineProperty(_this, "mainLogic", _descriptor12, _assertThisInitialized(_this));
          _this._mainLogic = void 0;
          return _this;
        }
        var _proto = PandaAuto.prototype;
        _proto.onLoad = function onLoad() {
          if (PandaAuto._instance) {
            this.node.destroy();
            return;
          }
          this._mainLogic = this.mainLogic.getComponent(PandaGameLogic);
          PandaAuto._instance = this;
          var widget = this.node.getComponent(Widget);
          widget.left = 0;
          widget.right = 0;
          this.node.position = Vec3.ZERO;
          this.node.active = false;
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

          this.reduceLabel.color = this.addLabel.color = this.winLabel.color = color(108, 141, 97);
          GameData.reduceLabel = 0;
          GameData.addLabel = 0;
          GameData.winLabel = 0;
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
            GameData.autoCountIndex = 0;
            find("Background/Label", tog).getComponent(Label).string = GameData.autoArr[index].toString();
            find("Checkmark/Label", tog).getComponent(Label).string = GameData.autoArr[index].toString();
          }
        };
        _proto.onSelectRound = function onSelectRound(data) {
          // GameData.autoCountIndex = tool.convert.toNumber(data.node.name);
        };
        _proto.onBtnConfirm = function onBtnConfirm() {
          this.onBtnClose();
          // if (store.user.score < this._mainLogic.betScore) {
          // root.game.control.tips.tip(I18n.ins().t("206"));
          // return;
          // }
          this._mainLogic.startAuto();
        };
        _proto.reduce_Label = function reduce_Label(lab) {
          var progress = this.reduceSlider.progress;
          var progressS = (Math.floor(progress * 5) + 5).toFixed(0);
          if (progressS == "0") {
            this.reduceLabel.string = "5";
          } else {
            this.reduceLabel.string = progressS;
          }
          this.reduceLabel.color = color(228, 215, 19);
          // GameData.reduceLabel = tool.convert.toNumber(this.reduceLabel.string)
        };

        _proto.add_labbel = function add_labbel(lab) {
          var progress = this.addSlider.progress;
          var progressS = (Math.floor(progress * 4900) + 100).toFixed(0);
          if (progressS == "0") {
            this.addLabel.string = "100";
          } else {
            this.addLabel.string = progressS;
          }
          this.addLabel.color = color(228, 215, 19);
          // GameData.addLabel = tool.convert.toNumber(this.addLabel.string)
        };

        _proto.win_label = function win_label(lab) {
          var progress = this.winSlider.progress;
          var progressS = (Math.floor(progress * 490) + 10).toFixed(0);
          if (progressS == "0") {
            this.winLabel.string = "10";
          } else {
            this.winLabel.string = progressS;
          }
          this.winLabel.color = color(228, 215, 19);
          // GameData.winLabel = tool.convert.toNumber(this.winLabel.string)
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

        _proto.onHide = function onHide() {
          this.node.active = false;
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
        _createClass(PandaAuto, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return PandaAuto;
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "mainLogic", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaBigWinPop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameData.ts', './PandaGameEvent.ts', './Num.ts', './AudioMgr.ts', './PandaGameRes.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, sp, ParticleSystem, Input, director, UIOpacity, tween, Component, PandaGameData, PandaGameEvent, Num, AudioMgr, PandaGameRes, ModuleDef;
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
      sp = module.sp;
      ParticleSystem = module.ParticleSystem;
      Input = module.Input;
      director = module.director;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      PandaGameData = module.PandaGameData;
    }, function (module) {
      PandaGameEvent = module.default;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      PandaGameRes = module.default;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b4984LdjklHx6EUs259EmbO", "PandaBigWinPop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameData = PandaGameData.data;
      var PandaBigWinPop = exports('PandaBigWinPop', (_dec = ccclass('PandaBigWinPop'), _dec2 = property(Label), _dec3 = property(sp.Skeleton), _dec4 = property(sp.SkeletonData), _dec5 = property(ParticleSystem), _dec6 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaBigWinPop, _Component);
        function PandaBigWinPop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "winScoreTxt", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pandaAni", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniDataGroup", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinEffGroup", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldAni", _descriptor5, _assertThisInitialized(_this));
          _this.isClick = false;
          _this.isClickHide = false;
          return _this;
        }
        var _proto = PandaBigWinPop.prototype;
        _proto.start = function start() {
          var _this2 = this;
          var canHide = false;
          PandaGameData.setNodesByComponent(this.node);
          this.node.on(Input.EventType.TOUCH_START, function () {
            var winScore = GameData.gameData.mini ? GameData.gameData.mini.winScore : GameData.gameData.main.winScore;
            if (_this2.isClick && canHide && !_this2.isClickHide) {
              _this2.isClickHide = true;
              director.emit(PandaGameEvent.event.bigWinPopHide, 0);
            } else if (!_this2.isClick) {
              canHide = false;
              _this2.pandaAni.paused = true;
              // root.audio.stop(PandaGameRes.res.bigWinRollNumber);
              director.emit(PandaGameEvent.event.stopAudio);
              _this2.scheduleOnce(function () {
                var mul = winScore / GameData.gameData.betScore;
                var index = 0;
                if (mul >= 100) {
                  index = 2;
                } else if (mul >= 20) {
                  index = 1;
                } else {
                  index = 0;
                }
                _this2.pandaAni.skeletonData = _this2.aniDataGroup[index];
                _this2.playAni(index, true);
                director.emit(PandaGameEvent.event.bigWinPopHide, 3);
                _this2.isClick = true;
              }, 0.001);
              _this2.winScoreTxt.string = Num.exchangeToThousands(1, winScore);
              var timer = function timer() {
                canHide = true;
              };
              _this2.scheduleOnce(timer, 0.7);
            }
          });
        };
        _proto.playAni = function playAni(type, isClick) {
          var _this3 = this;
          if (isClick === void 0) {
            isClick = false;
          }
          if (this.isClick) return;
          this.goldAni.node.active = true;
          !isClick && AudioMgr.inst.playOneShot(PandaGameRes.res['bigWin' + (type + 1)], 1, ModuleDef.SLOTS_PANDA);
          if (this && this.node) this.node.active = true;
          this.pandaAni.paused = false;
          this.pandaAni.skeletonData = this.aniDataGroup[type];
          this.bigWinEffGroup.forEach(function (v) {
            if (v && v.node) v.node.active = false;
          });
          if (this.bigWinEffGroup[type] && this.bigWinEffGroup[type].node) this.bigWinEffGroup[type].node.active = true;
          this.bigWinEffGroup[type].stop();
          this.bigWinEffGroup[type].play();
          this.scheduleOnce(function () {
            if (!type && !_this3.isClick) {
              _this3.goldAni.setAnimation(0, "animation", false);
            }
            if (_this3.pandaAni && _this3.pandaAni.node) _this3.pandaAni.node.active = true;
            _this3.pandaAni.setAnimation(0, "animation", true);
          }, 0.001);
        };
        _proto.hide = function hide() {
          var _this4 = this;
          this.scheduleOnce(function () {
            var bigWinPopUIO = _this4.node.getComponent(UIOpacity);
            // root.audio.stop(PandaGameRes.res.bigWinRollNumber);
            director.emit(PandaGameEvent.event.stopAudio);
            _this4.goldAni.node.active = false;
            bigWinPopUIO.opacity = 255;
            tween(bigWinPopUIO).to(0.2, {
              opacity: 0
            }).call(function () {
              _this4.pandaAni.paused = true;
              if (!_this4.node.active) return;
              _this4.node.active = false;
              _this4.bigWinEffGroup.forEach(function (v) {
                if (v && v.node) v.node.active = false;
              });
            }).start();
          }, 0.01);
        };
        _proto.resetData = function resetData() {
          this.pandaAni.skeletonData = this.aniDataGroup[0];
          this.isClick = false;
        };
        return PandaBigWinPop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winScoreTxt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pandaAni", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "aniDataGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bigWinEffGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "goldAni", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaGameData.ts", ['cc', './Num.ts'], function (exports) {
  var cclegacy, Vec3, ParticleSystem, Num;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      ParticleSystem = module.ParticleSystem;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d978dZUUuJMZ4mwVObrZneq", "PandaGameData", undefined);
      var _data = {
        sceneData: null,
        gameData: null,
        autoArr: [10, 30, 50, 100, 1000],
        autoCountIndex: 0,
        leftAutoCount: 0,
        reduceLabel: 0,
        addLabel: 0,
        winLabel: 0
      };
      var cacheName = {
        betScore: '_betScore'
      };
      var ElementTable = {
        "wild": 201,
        "shoots": 101,
        "plants": 102,
        "box": 103,
        "ring": 104,
        "bamboo": 105,
        "panda": 106
      };
      var LineCount = {
        1: [0, 0, 0],
        2: [1, 1, 1],
        3: [2, 2, 2],
        4: [3, 2, 3],
        5: [0, 1, 0],
        6: [1, 2, 1],
        7: [2, 3, 2],
        8: [3, 3, 3],
        9: [1, 0, 1],
        10: [2, 1, 2]
      };
      var PandaGameData = exports('PandaGameData', /*#__PURE__*/function () {
        function PandaGameData() {}
        /**
        * 递归旋转、缩放子节点下粒子组件的节点
        * @param root 要查找的节点
        * @param componentType 组件类型
        */
        PandaGameData.setNodesByComponent = function setNodesByComponent(root, angle, scale) {
          var _this = this;
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
            return _this.setNodesByComponent(child, angle, scale);
          });
        }

        /**
        * 返回的数据转换
        * @param data 
        * @param bet 下注额
        */;
        PandaGameData.conver = function conver(data, bet) {
          var result = {
            betScore: 0,
            code: 200,
            main: {
              colums: [],
              hitType: 0,
              isAllSame: 0,
              lines: [],
              winScore: 0,
              wheelIndex: []
            },
            mini: {
              winScore: 0,
              list: [],
              elementId: 0,
              multiple: 0
            }
          };
          if (data.isSucc) {
            result.code = 200;
            result.betScore = bet;
            // result.winScore = Num.toThousandsBack(data.res.payout);
            var res = data.res.results[0];

            //连线游戏数据
            for (var i = 0; i < 3; i++) {
              //初始化连线游戏的数据
              result.main.colums.push({
                elementId: []
              });
              for (var j = 0; j < 4; j++) {
                result.main.colums[i].elementId.push(0);
              }
            }
            //所有的元素符号
            for (var _i = res.symbols.length - 1; _i >= 0; _i--) {
              if (res.symbols[_i].id === 'null') continue; //空位置，跳过
              result.main.colums[res.symbols[_i].coordinate.reel - 1].elementId[4 - res.symbols[_i].coordinate.row] = ElementTable[res.symbols[_i].id];
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
            }
            if (!res.bigEvents) {
              result.mini = null;
            } else {
              //幸运游戏数据
              result.mini.list.push(result.main);
              result.main = null;
              result.mini.multiple = res.roulette ? res.roulette.multiple : 0; //倍数
              result.mini.winScore = Num.toThousandsBack(res.payout);
            }
          } else {
            result.code = 500;
          }
          return result;
        };
        return PandaGameData;
      }());
      PandaGameData.data = _data;
      PandaGameData.cacheName = cacheName;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaGameEvent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4ecefsib/xMMqLKlWEWdH4B", "PandaGameEvent", undefined);
      var _event = {
        scene: "slot_panda_game_scene",
        //场景推送
        init: "init",
        //场景初始化
        start: "startgame",
        //开始游戏
        bigWinPopHide: "bigWinPopHide",
        //BIGWIN框隐藏
        exitMiniGame: "exitMiniGame",
        //离开轮盘小游戏
        enterMiniGame: "enterMiniGame",
        //进入轮盘小游戏弹框
        stopAudio: "stopAudio" //停止音效
      };

      var PandaGameEvent = exports('default', function PandaGameEvent() {});
      PandaGameEvent.event = _event;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaGameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameMainView.ts', './PandaGameEvent.ts', './PandaInterface.ts', './PandaGameData.ts', './PandaWinIcon.ts', './PandaGameRes.ts', './PandaAuto.ts', './BaseSlot.ts', './Num.ts', './UserMgr.ts', './GameUtil.ts', './SubGameDef.ts', './SlotShowPanelMgr.ts', './ModuleDef.ts', './AudioMgr.ts', './NetGameServer.ts', './PandaMainControl.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, NodeEventType, director, instantiate, v3, UITransform, randomRangeInt, tween, UIOpacity, view, Input, Sprite, ParticleSystem, sp, color, Vec3, v2, Component, Button, PandaGameMainView, PandaGameEvent, EPandaAni, PandaGameData, PandaWinIcon, PandaGameRes, PandaAuto, SlotStopType, SlotEaseType, Num, UserMgr, GameUtil, SubGameDef, showSlotAutoPenel, showSlotBetPanel, showSlotLastMoneyPenel, ModuleDef, AudioMgr, gameNet, PandaMainControl;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      randomRangeInt = module.randomRangeInt;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      view = module.view;
      Input = module.Input;
      Sprite = module.Sprite;
      ParticleSystem = module.ParticleSystem;
      sp = module.sp;
      color = module.color;
      Vec3 = module.Vec3;
      v2 = module.v2;
      Component = module.Component;
      Button = module.Button;
    }, function (module) {
      PandaGameMainView = module.PandaGameMainView;
    }, function (module) {
      PandaGameEvent = module.default;
    }, function (module) {
      EPandaAni = module.EPandaAni;
    }, function (module) {
      PandaGameData = module.PandaGameData;
    }, function (module) {
      PandaWinIcon = module.PandaWinIcon;
    }, function (module) {
      PandaGameRes = module.default;
    }, function (module) {
      PandaAuto = module.PandaAuto;
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
      showSlotAutoPenel = module.showSlotAutoPenel;
      showSlotBetPanel = module.showSlotBetPanel;
      showSlotLastMoneyPenel = module.showSlotLastMoneyPenel;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      PandaMainControl = module.PandaMainControl;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "81151fLQW5HUZwV1QxAst76", "PandaGameLogic", undefined);
      var ccclass = _decorator.ccclass;
      var GameEvent = PandaGameEvent.event;
      var GameData = PandaGameData.data;

      //找wix
      var GearList = [[0, 1], [0, 2], [0, 4], [1, 1], [2, 1], [1, 3], [1, 5], [3, 4], [4, 2], [6, 1], [6, 4], [6, 10]];
      var PandaGameLogic = exports('PandaGameLogic', (_dec = ccclass('PandaGameLogic'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaGameLogic, _Component);
        function PandaGameLogic() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainView = void 0;
          _this.betIndex = 0;
          _this.isAuto = false;
          _this.timeScale = 1;
          _this.isFast = false;
          _this.betLength = 1;
          _this._isStart = false;
          // private _allTimer = [];
          _this.betScore = 0;
          _this._betLevel = 1;
          _this._gearValueArr = [];
          _this._miniIndex = 0;
          _this._clickIconTimer = void 0;
          _this._totalLose = 0;
          _this._totalWin = 0;
          _this._singleWin = 0;
          _this._lineStep = void 0;
          _this._isFakeMini = false;
          _this._isFirstPlayLine = true;
          _this._beforeIsMainGame = true;
          _this._lookSoundIndex = 0;
          _this._isInit = false;
          _this._playedAmazed = false;
          _this._isFirstInit = true;
          _this._isEnterMini = false;
          _this.bgmCurrentTime = 0;
          _this._startSpinId = -1;
          _this._bigWinRollId = -1;
          _this._removeWinIcon = void 0;
          return _this;
        }
        var _proto = PandaGameLogic.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this._mainView = this.node.getComponent(PandaGameMainView);
          var elementIds = ['101', '102', '103', '104', '105', '106', '201'];
          this._mainView.centerRollGroup.setup(elementIds);
          this._mainView.winTxt.string = "0.00";
          this._mainView.tipsPop.playTipsTxt();
          this.scheduleOnce(function () {
            _this2._mainView.tipsPop.playTipsTxt();
          }, 10);
          this.scheduleOnce(function () {
            _this2.randomPandaAni();
          }, 5);
          this.scheduleOnce(function () {
            _this2.playPandaDrowsy();
          }, 13);
          this._mainView.winLineGroup.active = false;
          this._mainView.winIconGroup.active = false;
          this._mainView.missWildIconGroup.active = false;
          this.playMiniGameCoinAni();
          this.initBottomPos();
          this.onEvent();
          AudioMgr.inst.playOneShot(PandaGameRes.res.opening, 1, ModuleDef.SLOTS_PANDA);
          this._mainView.bottomNode.active = false;
          console.log("音乐继续播放时间", this.bgmCurrentTime);
          // root.audio.playBgm(PandaGameRes.res.mainGameBGM, "", false, 0, this.bgmCurrentTime);
          AudioMgr.inst.play(PandaGameRes.res.mainGameBGM, 1, ModuleDef.SLOTS_PANDA);
          this.betLength = GearList.length;
          PandaMainControl.startGame();
          PandaGameData.setNodesByComponent(this.node, this.node.parent.angle, this.node.scale.clone());
        };
        _proto.onEvent = function onEvent() {
          var _this3 = this;
          var clickIconPop = this._mainView.clickIconPop;
          var clickIconMask = this._mainView.clickIconMask;
          var price = clickIconPop.getChildByName("price");
          var priceLab = price.getComponent(Label);
          //增加详情框自身点击消失
          clickIconPop.on(NodeEventType.TOUCH_END, function () {
            _this3.unschedule(_this3._clickIconTimer);
            clickIconMask.active = false;
            clickIconPop.active = false;
            clickIconPop.children.forEach(function (v) {
              if (v.name == "clickIcon") {
                v.removeFromParent();
                v = null;
              }
            });
          });
          director.on(GameEvent.init, this.init, this);
          director.on(GameEvent.exitMiniGame, this.exitMiniGame, this);
          //断线重新进入游戏
          director.on("reconnectToGame", this.reconnect, this);
          this._mainView.centerRollGroup.node.children.forEach(function (v, i) {
            v.children.forEach(function (item) {
              item.on("click", function (e) {
                if (e.column > 3) return;
                clickIconPop.children.forEach(function (v) {
                  if (v.name == "clickIcon") {
                    v.removeFromParent();
                    v = null;
                  }
                });
                var icon = instantiate(_this3._mainView.winIcon);
                icon.parent = clickIconPop;
                icon.scale = v3(0.7, 0.7, 1);
                icon.position = v3(237.5, 252);
                icon.name = "clickIcon";
                var iconPre = icon.getComponent(PandaWinIcon);
                var itemPrice = GameData.sceneData.elementOdd[Number(e.sprite.spriteFrame.name)];
                _this3.unschedule(_this3._clickIconTimer);
                clickIconPop.active = true;
                _this3._mainView.clickIconMask.active = true;
                var canvasView = _this3.node.getComponent(UITransform);
                var wPos = item.worldPosition.clone();
                // v3(item.getWorldPosition().x - canvasView.width / 2,
                // item.getWorldPosition().y - canvasView.height / 2);
                var index = e.layer;
                price.position = v3(index != 2 ? 113.357 : -113.357);
                icon.position = v3(index != 2 ? -113.357 : 113.357);
                priceLab.string = itemPrice;
                iconPre.setSpData(Number(e.sprite.spriteFrame.name));
                iconPre.playClickIcon();
                clickIconPop.worldPosition = v3(index != 2 ? wPos.x + 20 : wPos.x - 20, wPos.y);
                _this3.scheduleOnce(_this3._clickIconTimer, 3);
              });
            });
            _this3._clickIconTimer = function () {
              clickIconMask.active = false;
              clickIconPop.active = false;
              clickIconPop.children.forEach(function (v) {
                if (v.name == "clickIcon") {
                  v.removeFromParent();
                  v = null;
                }
              });
            };
          });
          director.on(PandaGameEvent.event.bigWinPopHide, this.bigWinPopHide, this);
          director.on(PandaGameEvent.event.enterMiniGame, this.enterMiniGameListener, this);
          director.on(PandaGameEvent.event.stopAudio, this.stopAudio, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(GameEvent.init, this.init, this);
          director.off(GameEvent.exitMiniGame, this.exitMiniGame, this);
          director.off("reconnectToGame", this.reconnect, this);
          director.off(PandaGameEvent.event.bigWinPopHide, this.bigWinPopHide, this);
          director.off(PandaGameEvent.event.enterMiniGame, this.enterMiniGameListener, this);
          director.off(PandaGameEvent.event.stopAudio, this.stopAudio, this);
        };
        _proto.init = function init(isScene) {
          this._mainView.updateBalanceTxt();
          this._isInit = true;
          if (this.isFast) {
            this._mainView.centerRollGroup.stopType = SlotStopType.立即停止;
            this._mainView.centerRollGroup.easingIn = SlotEaseType.Linear;
            this._mainView.centerRollGroup.easingOut = SlotEaseType.Linear;
          } else {
            this._mainView.centerRollGroup.stopType = SlotStopType.立即陆续;
            this._mainView.centerRollGroup.easingIn = SlotEaseType.Back;
            this._mainView.centerRollGroup.easingOut = SlotEaseType.Elastic;
          }
          this._miniIndex = 0;
          this._isStart = false;
          this._mainView.iconResistMask.active = false;
          this._mainView.miniMask.active = false;
          this._mainView.miniGameGuangzhu.active = false;
          this._mainView.miniGameTitle.active = false;
          this._mainView.touchPlayLoopEff.node.active = false;
          this._mainView.touchPlayEff.node.active = false;
          this._mainView.clickIconMask.active = false;
          this._mainView.clickIconPop.active = false;
          this._mainView.btnPlay.interactable = true;
          this._mainView.btnAuto.interactable = true;
          this._isFakeMini = false;
          if (isScene && this._isFirstInit) {
            this._mainView.bottomNode.active = true;
            this._mainView.updateBetTxt(GameData.sceneData.betScore[this.betIndex]);
            this._gearValueArr = [];
            this.betScore = GameData.sceneData.betScore[0] * GameData.sceneData.lineCount;
            this._mainView.betTxt.string = Num.exchangeToThousands(1, GameData.sceneData.betScore[0]);

            // for (let i = 0; i < GearList.length; i++) {
            //     const value = GameData.sceneData.betScore[GearList[i][0]] * GearList[i][1] * GameData.sceneData.lineCount;
            //     this._gearValueArr.push(value);
            // }
            // this.betScore = this._gearValueArr[this.betIndex];
            // this._mainView.betTxt.string = Num.exchangeToThousands(1, this._gearValueArr[this.betIndex]);
            //设置下注额，初始化下注按钮
            this._gearValueArr = GameUtil.GetBetRange();
            var betSum = localStorage.getItem(SubGameDef.SLOTS_PANDA + PandaGameData.cacheName.betScore);
            this.betScore = betSum ? Number(betSum) : this._gearValueArr[0];
            this.betIndex = this._gearValueArr.indexOf(this.betScore);
            this._mainView.betTxt.string = Num.exchangeToThousands(1, this._gearValueArr[this.betIndex]);
            this.updateBetGear();
            this._mainView.centerRollGroup.setWheels(GameData.sceneData.mainWheel.map(function (v) {
              return v.lineWheel;
            }), 0);
          }
          this._isFirstInit = false;
        };
        _proto.reconnect = function reconnect() {
          this._isInit = true;
          this._mainView.btnPlay.interactable = true;
          localStorage.setItem("autoCount", GameData.leftAutoCount.toString());
          var autoCount = Number(localStorage.getItem("autoCount"));
          GameData.leftAutoCount = Number(autoCount);
          // console.log("自动次数", GameData.leftAutoCount);

          if (GameData.leftAutoCount > 0 && !this._isEnterMini) {
            if (this._mainView.bigWinPop.node.active) {
              director.emit(PandaGameEvent.event.bigWinPopHide);
            }
            this.updateLabelAutoCount();
          } else {
            PandaAuto.instance.onHide();
            this._mainView.tweenRotateStand();
          }
        };
        _proto.bigWinPopHide = function bigWinPopHide(delay) {
          var _this4 = this;
          // console.log("-----------接收到了-------------");
          this.unscheduleAllCallbacks();
          this.scheduleOnce(function () {
            _this4._mainView.bigWinPop.hide();
            console.log("音乐继续播放时间", _this4.bgmCurrentTime);
            // root.audio.playBgm(PandaGameRes.res.mainGameBGM, "", false, 0, this.bgmCurrentTime);
            AudioMgr.inst.play(PandaGameRes.res.mainGameBGM, 1, ModuleDef.SLOTS_PANDA);
            _this4.zoomBgGroup(0, 1);
            if (_this4.isAuto) {
              _this4.scheduleOnce(function () {
                _this4.updateLabelAutoCount();
              }, 0.5);
            } else {
              _this4.gameOver();
            }
          }, delay);
        };
        _proto.enterMiniGameListener = function enterMiniGameListener() {
          this._mainView.enterMiniGamePop.getChildByName("btnOK").active = false;
        };
        _proto.stopAudio = function stopAudio() {
          if (this._bigWinRollId != -1) AudioMgr.inst.stopOneShot(this._bigWinRollId, PandaGameRes.res.bigWinRollNumber, ModuleDef.SLOTS_PANDA), this._bigWinRollId = -1;
        };
        _proto.initBottomPos = function initBottomPos() {
          // let _bottom = this._mainView.bottomNode;
          // let viewSize = view.getVisibleSize();
          // _bottom.position = v3(0, _bottom.position.y - (viewSize.height / 2 - _bottom.getComponent(UITransform).height / 2) / 2);
        };
        _proto.touchPlay = /*#__PURE__*/function () {
          var _touchPlay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this5 = this;
            var _portObj, missWildIconGroup, result, data, info;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this._isInit) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _portObj = {
                    betScore: this.betScore / GameData.sceneData.lineCount / this._betLevel,
                    betLevel: this._betLevel
                  };
                  this.unscheduleAllCallbacks();
                  this.stopLineStep();
                  missWildIconGroup = this._mainView.missWildIconGroup;
                  missWildIconGroup.removeAllChildren();
                  this._mainView.centerRollGroup.rollVirtually();
                  this._mainView.btnPlay.interactable = false;
                  if (UserMgr.inst.coin >= this.betScore) {
                    this._mainView.balanceTxt.string = Num.exchangeToThousands(1, UserMgr.inst.coin - this.betScore);
                  }
                  _context.next = 12;
                  return gameNet.playSlots(SubGameDef.SLOTS_PANDA, this.betScore.toString());
                case 12:
                  result = _context.sent;
                  data = PandaGameData.conver(result, this.betScore); // const data: SlotPandaStartGameResp = {
                  //     code: 200, betScore: 40, main: {
                  //         winScore: 100060, wheelIndex: [1], isAllSame: 101, hitType: 1, colums: [{ elementId: [105, 105, 105, 105] }, { elementId: [105, 105, 105, 105] }, { elementId: [105, 105, 105, 105] }]
                  //         , lines: [{ line: [0, 0, 0], lineNo: 1, lineScore: 10 }, { line: [1, 1, 1], lineNo: 2, lineScore: 10 }, { line: [2, 2, 2], lineNo: 3, lineScore: 10 }
                  //             , { line: [3, 2, 3], lineNo: 4, lineScore: 10 }, { line: [0, 1, 0], lineNo: 5, lineScore: 10 }, { line: [1, 2, 1], lineNo: 6, lineScore: 10 }
                  //             , { line: [2, 3, 2], lineNo: 7, lineScore: 10 }, { line: [3, 3, 3], lineNo: 8, lineScore: 10 }, { line: [1, 0, 1], lineNo: 9, lineScore: 10 }, { line: [2, 1, 2], lineNo: 10, lineScore: 10 }]
                  //     }, mini: null
                  // }
                  // const data: SlotPandaStartGameResp = {
                  //     code: 200, betScore: 40, main: null, mini: {
                  //         winScore: 60, elementId: 105, multiple: 1, list: [{
                  //             winScore: 60, wheelIndex: [1], isAllSame: 101, hitType: 1, colums: [{ elementId: [105, 105, 105, 105] }, { elementId: [105, 105, 105, 105] }, { elementId: [105, 105, 105, 105] }]
                  //             , lines: [{ line: [0, 0, 0], lineNo: 1, lineScore: 10 }, { line: [1, 1, 1], lineNo: 2, lineScore: 10 }, { line: [2, 2, 2], lineNo: 3, lineScore: 10 }
                  //                 , { line: [3, 2, 3], lineNo: 4, lineScore: 10 }, { line: [0, 1, 0], lineNo: 5, lineScore: 10 }, { line: [1, 2, 1], lineNo: 6, lineScore: 10 }
                  //                 , { line: [2, 3, 2], lineNo: 7, lineScore: 10 }, { line: [3, 3, 3], lineNo: 8, lineScore: 10 }, { line: [1, 0, 1], lineNo: 9, lineScore: 10 }, { line: [2, 1, 2], lineNo: 10, lineScore: 10 }]
                  //         }]
                  //     }
                  // }
                  if (data.code == 200) {
                    this._playedAmazed = false;
                    this._mainView.setFastClick(true);
                    if (this.isFast) {
                      this._mainView.centerRollGroup.stopType = SlotStopType.立即停止;
                      this._mainView.centerRollGroup.easingIn = SlotEaseType.Linear;
                      this._mainView.centerRollGroup.easingOut = SlotEaseType.Linear;
                    } else {
                      this._mainView.centerRollGroup.stopType = SlotStopType.立即陆续;
                      this._mainView.centerRollGroup.easingIn = SlotEaseType.Back;
                      this._mainView.centerRollGroup.easingOut = SlotEaseType.Elastic;
                    }
                    this.startRollBalance();
                    this._miniIndex = 0;
                    this._mainView.centerRollGroup.node.active = true;
                    this._isStart = true;
                    this._isFakeMini = false;
                    this._isFirstPlayLine = true;
                    this._mainView.winLineGroup.active = false;
                    this._mainView.winIconGroup.active = false;
                    this._mainView.missWildIconGroup.active = false;
                    this._mainView.iconResistMask.active = true;
                    this._mainView.clickIconPop.active = false;
                    this._mainView.clickIconMask.active = false;
                    this.unschedule(this._clickIconTimer);
                    this._mainView.tipsPop.hideTipsPop();
                    this._mainView.tipsPop.resetBg();
                    this._totalLose += data.betScore;
                    this._totalWin -= data.betScore;
                    this._mainView.btnSub.interactable = false;
                    this._mainView.btnAdd.interactable = false;
                    this._mainView.btnAuto.interactable = false;
                    this._mainView.betTxt.node.parent.getComponent(Button).interactable = false;
                    this._mainView.setBtnAlpha(this._mainView.btnSub);
                    this._mainView.setBtnAlpha(this._mainView.btnAdd);
                    this._mainView.setBtnAlpha(this._mainView.btnAuto);
                    this._mainView.tweenRotatePlay();
                    GameData.gameData = data;
                    this.rollIcons(data);
                  } else {
                    if (data.code == 210) ;else if (data.code == 202) {
                      console.warn("参数错误：", _portObj);
                    }
                    this.init();
                    this._mainView.onGameOver();
                    if (this.isAuto) {
                      this.isAuto = false;
                      this._mainView.btnPlay.node.active = true;
                      this._mainView.btnStop.node.active = false;
                    }
                    info = this.getRandomElementIds();
                    this._mainView.centerRollGroup.roll(info, function () {});
                    this.scheduleOnce(function () {
                      _this5._mainView.centerRollGroup.stop();
                    }, 0.5);
                    this._isInit = true;
                    this._mainView.btnPlay.interactable = true;
                    this._mainView.touchPlayLoopEff.node.active = false;
                    console.warn("start sever fail error code:" + data.code);
                  }
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function touchPlay() {
            return _touchPlay.apply(this, arguments);
          }
          return touchPlay;
        }() //获取随机元素
        ;

        _proto.getRandomElementIds = function getRandomElementIds() {
          var rollInfo = [];
          var column = [4, 4, 4];
          var elementIds = ['101', '102', '103', '104', '105', '106', '201'];
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
              rollInfo[i].push({
                name: elementId.toString(),
                text: "0"
              });
            }
          }
          return rollInfo;
        };
        _proto.roundEnd = function roundEnd() {
          var _this6 = this;
          var winScore = GameData.gameData.mini ? GameData.gameData.mini.winScore : GameData.gameData.main.winScore;
          this.recoverLineNumberGroup();
          var missWildIconGroup = this._mainView.missWildIconGroup;
          missWildIconGroup.removeAllChildren();
          this._miniIndex++;
          this.totalScore(winScore);
          if (!winScore || winScore / GameData.gameData.betScore < 10) {
            if (this.isAuto) {
              this.scheduleOnce(function () {
                _this6.updateLabelAutoCount();
              }, 1.25);
            } else {
              this.gameOver();
            }
          }
        };
        _proto.zoomBgGroup = function zoomBgGroup(duration, scaleNum) {
          var bgGroup = this._mainView.bgGroup;
          var winIconGroup = this._mainView.winIconGroup;
          var baseIconGroup = this._mainView.baseIconGroup;
          var missWildIconGroup = this._mainView.missWildIconGroup;
          var isRecover = scaleNum == 1;
          tween(bgGroup).to(duration, {
            scale: v3(scaleNum, scaleNum, 1),
            position: v3(0, isRecover ? 76.199 : 23.111)
          }).call(function () {
            winIconGroup.position = bgGroup.position;
            baseIconGroup.scale = bgGroup.scale;
            baseIconGroup.position = bgGroup.position;
            missWildIconGroup.scale = bgGroup.scale;
            missWildIconGroup.position = bgGroup.position;
          }).start();
        };
        _proto.miniGameOver = function miniGameOver() {};
        _proto.gameOver = function gameOver() {
          var _this7 = this;
          this.miniGameOver();
          this.init();
          this.scheduleOnce(function () {
            _this7._mainView.onGameOver();
          }, this.isAuto ? 0 : 0.3);
          if (GameData.gameData.main && GameData.gameData.main.lines.length > 0) {
            this.playLineStep(GameData.gameData.main.lines, -1);
          }
          if (GameData.gameData.mini) {
            var mul = GameData.gameData.mini.winScore / GameData.gameData.betScore;
            if (mul < 10) {
              console.log("音乐继续播放时间", this.bgmCurrentTime);
              // root.audio.playBgm(PandaGameRes.res.mainGameBGM, "", false, 0, this.bgmCurrentTime);
              AudioMgr.inst.play(PandaGameRes.res.mainGameBGM, 1, ModuleDef.SLOTS_PANDA);
            }
          }
        };
        _proto.playLineStep = function playLineStep(arr, num) {
          var _this8 = this;
          this._lineStep = function () {
            num++;
            if (num == arr.length) {
              num = -1;
            }
            _this8.playLineStep(arr, num);
          };
          this.hideAllLines();
          this.recoverLineNumberGroup();
          this.resetBaseWinAni();
          if (num == -1) {
            //重新播放一次所有线路
            AudioMgr.inst.playOneShot(PandaGameRes.res.allLines, 1, ModuleDef.SLOTS_PANDA);
            arr.forEach(function (v) {
              _this8.playOneLine(v, arr.length == 1);
            });
          } else {
            AudioMgr.inst.playOneShot(PandaGameRes.res.singleLine, 1, ModuleDef.SLOTS_PANDA);
            this.playOneLine(arr[num], true);
          }
          this.scheduleOnce(this._lineStep, 2);
        };
        _proto.stopLineStep = function stopLineStep() {
          this.unschedule(this._lineStep);
          this.hideAllLines();
          this.recoverLineNumberGroup();
          this.removeWinIcon();
          this._mainView.winIconGroup.active = false;
          this._mainView.winLineGroup.active = false;
          this.resetRollItem();
        };
        _proto.resetRollItem = function resetRollItem() {
          this._mainView.centerRollGroup.columnFlat.forEach(function (v) {
            v && (v.active = true);
          });
        };
        _proto.rollIcons = function rollIcons(data) {
          var _this9 = this;
          var self = this;
          this._isFakeMini = Math.floor(Math.random() * 10000) < GameData.sceneData.fakeMiniRate;
          var callBack = function callBack() {
            if (_this9._removeWinIcon) _this9.unschedule(_this9._removeWinIcon);
            if (GameData.gameData.main && GameData.gameData.main.lines && GameData.gameData.main.lines.length > 0) {
              self.playBaseWinAni();
            } else {
              _this9.roundEnd();
            }
          };
          if (data.main) {
            if (!this._beforeIsMainGame) {
              this._mainView.centerRollGroup.setWheels(GameData.sceneData.mainWheel.map(function (v) {
                return v.lineWheel;
              }), 0);
              this._beforeIsMainGame = true;
            }
            this.baseStopIcon();
            AudioMgr.inst.playOneShot(PandaGameRes.res.startSpin, 1, ModuleDef.SLOTS_PANDA).then(function (aeid) {
              return _this9._startSpinId = aeid;
            });
            this._mainView.centerRollGroup.roll(this.getMainIcons(data), callBack.bind(this));
          } else {
            this._mainView.miniGameGuangzhu.active = false;
            this._mainView.miniMask.getChildByName("guang").active = false;
            this._mainView.miniMask.getChildByName("x10").active = false;
            this.enterMiniGame();
            // if (this._beforeIsMainGame) {
            //     this._mainView.centerRollGroup.setWheels(GameData.sceneData.miniWheel.map(v => v.lineWheel), 0);
            //     this._beforeIsMainGame = false;
            // }
          }
        };

        _proto.baseStopIcon = function baseStopIcon() {
          var _this10 = this;
          var baseTime = 1.8;
          var fakeMiniDelay = 4.5;
          var delay = (this.isFast ? 0.4 : baseTime) * this.timeScale;
          var isAllSame = GameData.gameData.mini && GameData.gameData.mini.list[this._miniIndex].isAllSame;
          var baseColumsArr = GameData.gameData.mini ? GameData.gameData.mini.list[this._miniIndex] : GameData.gameData.main;
          var stopDelay = 0.62;
          var isMiniGameEnd = GameData.gameData.mini && this._miniIndex == GameData.gameData.mini.list.length - 1;
          if (!GameData.gameData.mini) {
            this._isFakeMini && this.enterFakeMiniGame();
            var rollTime = this.timeScale == 1 ? 0.06 : 0.06;
            var timer = function timer() {
              _this10._mainView.centerRollGroup.stop();
              if (!_this10.isFast) {
                _this10.scheduleOnce(function () {
                  _this10.playBaseStopAni(baseColumsArr, 0);
                }, stopDelay);
                _this10.scheduleOnce(function () {
                  _this10.playBaseStopAni(baseColumsArr, 1);
                }, stopDelay * 2);
                _this10.scheduleOnce(function () {
                  _this10.playBaseStopAni(baseColumsArr, 2);
                }, stopDelay * 3);
                _this10.scheduleOnce(function () {
                  AudioMgr.inst.playOneShot(PandaGameRes.res.stopSpin, 1, ModuleDef.SLOTS_PANDA);
                }, 0.22 + 0.31);
                _this10.scheduleOnce(function () {
                  AudioMgr.inst.playOneShot(PandaGameRes.res.stopSpin, 1, ModuleDef.SLOTS_PANDA);
                }, (0.25 + 0.31) * 2);
                _this10.scheduleOnce(function () {
                  AudioMgr.inst.playOneShot(PandaGameRes.res.stopSpin, 1, ModuleDef.SLOTS_PANDA);
                  if (_this10._startSpinId != -1) AudioMgr.inst.stopOneShot(_this10._startSpinId, PandaGameRes.res.startSpin, ModuleDef.SLOTS_PANDA), _this10._startSpinId = -1;
                }, (0.24 + 0.31) * 3);
              } else {
                _this10.scheduleOnce(function () {
                  _this10.playBaseStopAni(baseColumsArr, 0);
                  _this10.playBaseStopAni(baseColumsArr, 1);
                  _this10.playBaseStopAni(baseColumsArr, 2);
                }, stopDelay);
                _this10.scheduleOnce(function () {
                  AudioMgr.inst.playOneShot(PandaGameRes.res.stopSpin, 1, ModuleDef.SLOTS_PANDA);
                  if (_this10._startSpinId != -1) AudioMgr.inst.stopOneShot(_this10._startSpinId, PandaGameRes.res.startSpin, ModuleDef.SLOTS_PANDA), _this10._startSpinId = -1;
                }, 0.24);
              }
            };
            this.scheduleOnce(timer, this._isFakeMini ? fakeMiniDelay : rollTime);
          }

          //fake mini game 4s   6s
          //base game 1s        2s
          //mini game 9s        18s
          var rollBalanceDelay = delay + 0.7;
          this._mainView.bigWinPop.resetData();
          if (GameData.gameData.main) {
            this.rewardRollBalance(GameData.gameData.main.winScore, this._isFakeMini ? fakeMiniDelay + 1 : rollBalanceDelay, true, false, GameData.gameData.main.isAllSame > 0);
          }
        };
        _proto.rewardRollBalance = function rewardRollBalance(end, delay, isFirst, isMiniEnd, isAllSame) {
          var _this11 = this;
          if (isFirst === void 0) {
            isFirst = true;
          }
          if (isAllSame === void 0) {
            isAllSame = false;
          }
          this._mainView.bigWinPop.winScoreTxt.string = "0";
          var timer = function timer() {
            var mul = end / GameData.gameData.betScore;
            if (isFirst && GameData.gameData.main) {
              //基础游戏金币滚动
              _this11.scrollToValue(0, GameData.gameData.main.isAllSame ? end / 10 : end, isFirst ? 0.2 : 0.5, _this11._mainView.winTxt);
              _this11._mainView.tipsPop.playTipsWinPop(GameData.gameData.main.isAllSame ? end / 10 : end);
            }
            if (GameData.gameData.mini) {
              if (end > 0 && !_this11._isFakeMini) {
                var _isAllSame = false;
                _this11._mainView.tipsPop.playTipsWinPop(_isAllSame ? end / 10 : end);
                _this11.scrollToValue(0, end, 0.5, _this11._mainView.winTxt, false, _isAllSame);
              }
            } else if (!_this11._isFakeMini && !GameData.gameData.mini && end > 0) {
              _this11.scheduleOnce(function () {
                AudioMgr.inst.playOneShot(GameData.gameData.main.isAllSame ? PandaGameRes.res.pandaCelebrate2 : PandaGameRes.res.pandaCelebrate1, 1, ModuleDef.SLOTS_PANDA);
              }, 0.03);
              _this11._mainView.panda.play(GameData.gameData.main.isAllSame ? EPandaAni.CelebrationLv2 : EPandaAni.CelebrationLv1, false, function () {
                _this11._mainView.panda.play(EPandaAni.Idle, true);
              });
            }
            if (mul < 10) return;
            _this11._mainView.bigWinPop.isClickHide = false;
            _this11.scheduleOnce(function () {
              AudioMgr.inst.playOneShot(PandaGameRes.res.bigWinRollNumber, 1, ModuleDef.SLOTS_PANDA).then(function (eaid) {
                return _this11._bigWinRollId = eaid;
              });
              // root.audio.stopBgm((currentTime: number) => {
              //     this.bgmCurrentTime = currentTime;
              //     console.log("停止BGM", this.bgmCurrentTime, currentTime);
              //     root.audio.playBgm(PandaGameRes.res.bigWinBGM, "");
              // });
              AudioMgr.inst.play(PandaGameRes.res.bigWinBGM, 1, ModuleDef.SLOTS_PANDA);
              var bigWinPopUIO = _this11._mainView.bigWinPop.getComponent(UIOpacity);
              bigWinPopUIO.opacity = 0;
              tween(bigWinPopUIO).to(0.2, {
                opacity: 255
              }).start();
              _this11._mainView.bigWinPop.playAni(0);
              _this11._mainView.bigWinPop.winScoreTxt.string = "0";
              _this11.scheduleOnce(function () {
                _this11.scrollToValue(0, end, isAllSame ? 6.5 + 2.3 - (1.5 + 2.3) - 0.3 : 6.5 - 1.5 - 0.3, _this11._mainView.bigWinPop.winScoreTxt, true);
              }, 0.3);
            }, isAllSame ? 1.5 + 2.3 : 1.5);
            if (mul >= 20) {
              _this11.scheduleOnce(function () {
                _this11._mainView.bigWinPop.playAni(1);
              }, isAllSame ? 3 + 2.3 : 3);
            }
            if (mul >= 100) {
              _this11.scheduleOnce(function () {
                _this11._mainView.bigWinPop.playAni(2);
              }, isAllSame ? 4.5 + 2.3 : 4.5);
            }
          };
          this.scheduleOnce(timer, delay);
        };
        _proto.startRollBalance = function startRollBalance() {
          var winTxt = this._mainView.winTxt.string;
          if (winTxt.indexOf(",") > -1) {
            winTxt = winTxt.replace(",", ".");
          }
          this.scrollToValue(Number(winTxt), 0, 0.5, this._mainView.winTxt);
        };
        _proto.getMainIcons = function getMainIcons(data) {
          var info = [];
          GameData.gameData.main.lines.sort(function (a, b) {
            return a.lineNo - b.lineNo;
          });
          data.main.colums.forEach(function (value, index) {
            info.push([]);
            value.elementId.forEach(function (value2, index2) {
              info[index][index2] = {
                name: value2 + ""
              };
            });
          });
          return info;
        };
        _proto.getMiniIcons = function getMiniIcons(data) {
          var _this12 = this;
          var info = [];
          //按照从小到大的lineNo顺序排序
          GameData.gameData.mini.list[GameData.gameData.mini.list.length - 1].lines.sort(function (a, b) {
            return a.lineNo - b.lineNo;
          });
          data.mini.list[this._miniIndex].colums.forEach(function (value2, index2) {
            info.push([]);
            value2.elementId.forEach(function (value3, index3) {
              info[index2][index3] = {
                name: value3 + ""
              };
            });
            GameData.gameData.mini.winScore = data.mini.list[_this12._miniIndex].winScore;
          });
          return info;
        };
        _proto.scrollToValue = function scrollToValue(start, end, duration, lab, isBigWin, isALlSame) {
          var _this13 = this;
          if (start === void 0) {
            start = 0;
          }
          if (isBigWin === void 0) {
            isBigWin = false;
          }
          if (isALlSame === void 0) {
            isALlSame = false;
          }
          var startTime = Date.now();
          var endTime = startTime + duration * 1000;
          var update = function update() {
            if (_this13._mainView.bigWinPop.isClick) {
              lab.string = Num.exchangeToThousands(1, end);
              return;
            }
            var now = Date.now();
            var elapsed = (now - startTime) / (duration * 1000);
            var value = start + (end - start) * Math.min(elapsed, 1);
            lab.string = isALlSame ? (value / 10).toFixed(2) : value.toFixed(2);
            if (now < endTime) {
              _this13.scheduleOnce(update, 0.001);
            } else {
              if (isBigWin) {
                if (_this13._bigWinRollId != -1) AudioMgr.inst.stopOneShot(_this13._bigWinRollId, PandaGameRes.res.bigWinRollNumber, ModuleDef.SLOTS_PANDA), _this13._bigWinRollId = -1;
                director.emit(PandaGameEvent.event.bigWinPopHide, 3);
              }
              lab.string = Num.exchangeToThousands(1, isALlSame ? end / 10 : end);
            }
          };
          update();
        };
        _proto.exitMiniGame = function exitMiniGame() {
          this._isEnterMini = false;
          this._mainView.bigWinPop.resetData();
          this._mainView.btnPlay.interactable = true;
          this.rewardRollBalance(GameData.gameData.mini.winScore, 0, false, true, false);
          this.roundEnd();
        };
        _proto.enterMiniGame = function enterMiniGame() {
          var _this14 = this;
          //进入小游戏
          this._isEnterMini = true;
          var info = this.getRandomElementIds();
          this._mainView.centerRollGroup.roll(info, function () {
            _this14._mainView.btnPlay.interactable = false;
            AudioMgr.inst.playOneShot(PandaGameRes.res.enterMiniGame, 1, ModuleDef.SLOTS_PANDA);

            // root.audio.stopBgm((currentTime: number) => {
            //     this.bgmCurrentTime = currentTime;
            //     root.audio.playBgm(PandaGameRes.res.miniGameBGM, "", true, 0.5, this.bgmCurrentTime);
            // });
            AudioMgr.inst.play(PandaGameRes.res.mainGameBGM, 1, ModuleDef.SLOTS_PANDA);
            _this14._mainView.enterMiniGamePop.active = true;
            var btnOk = _this14._mainView.enterMiniGamePop.getChildByName("btnOK");
            btnOk.active = !_this14.isAuto;
            var uio = _this14._mainView.enterMiniGamePop.getComponent(UIOpacity);
            uio.opacity = 0;
            tween(uio).to(0.5, {
              opacity: 255
            }).start();
            if (_this14.isAuto) {
              _this14.scheduleOnce(function () {
                _this14._mainView.miniGame.onTouchOK();
              }, 1.5);
            }
          });
          this.scheduleOnce(function () {
            _this14._mainView.centerRollGroup.stop();
          }, 0.5);
        };
        _proto.createFakeList = function createFakeList() {
          var randomCount = Math.floor(Math.random() * 3);
          function create() {
            var isSame = Math.random() * 10 == 0;
            // let isSame = Math.random() * 10 < 9;

            var randomIcon = 100 + Math.floor(Math.random() * 6) + 1;
            var randomIcon2 = 100 + Math.floor(Math.random() * 6) + 1;
            var columsArr = [];
            var numArr = [];
            var midNumArr = [];
            do {
              randomIcon2 = 100 + Math.floor(Math.random() * 6) + 1;
            } while (randomIcon === randomIcon2);
            for (var k = 0; k < 4; k++) {
              if (!isSame) {
                do {
                  randomIcon2 = 100 + Math.floor(Math.random() * 6) + 1;
                } while (randomIcon === randomIcon2);
              }
              numArr.push(randomIcon);
              midNumArr.push(randomIcon2);
            }
            var cellArr2 = {
              elementId: midNumArr
            };
            var cellArr = {
              elementId: numArr
            };
            columsArr[0] = cellArr;
            columsArr[2] = cellArr;
            columsArr[1] = cellArr2;
            var newColnums = {
              winScore: 0,
              colums: columsArr,
              lines: [],
              hitType: 0,
              isAllSame: 0,
              wheelIndex: []
            };
            GameData.gameData.mini.list.unshift(newColnums);
          }
          for (var i = 0; i < randomCount; i++) {
            create();
          }
        };
        _proto.enterFakeMiniGame = function enterFakeMiniGame() {
          var _this15 = this;
          //进入假小游戏
          this._mainView.miniGameCoin.node.parent.active = false;
          this._mainView.panda.playMiniGold(1);
          var timer = function timer() {
            _this15.zoomBgGroup(1, 1);
          };
          var timer2 = function timer2() {
            //假进小游戏回到主游戏时候生气
            _this15._mainView.panda._ske.paused = true;
            _this15._mainView.panda.playMiniGold(3);
          };
          this.scheduleOnce(timer, 3.5);
          this.scheduleOnce(timer2, 2.5);
        };
        _proto.onOpenAuto = function onOpenAuto() {
          var _this16 = this;
          var cb = function cb(autoNum) {
            GameData.leftAutoCount = autoNum;
            _this16.startAuto();
          };
          showSlotAutoPenel(this._mainView.panelParentNode, UserMgr.inst.coin, Number(this._mainView.betTxt.string), cb.bind(this));
        };
        _proto.onBet = function onBet() {
          var _this17 = this;
          if (this.isAuto) return;
          // cashScroll({
          //     betArr: GameData.sceneData.betScore, line: GameData.sceneData.lineCount, betScore: this.betScore / 100,
          //     gearList: GearList[this.betIndex]
          // }, (res: ICallback) => {
          //     this.betScore = res.betScore * 100;
          //     this._mainView.betTxt.string = tool.convert.changeString(res.betScore.toFixed(2));
          //     this._betLevel = res.betLevel;
          //     this.updateBetGear();
          // })
          // cashScrollSetBG(1230);
          var cb = function cb() {
            for (var _len2 = arguments.length, res = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              res[_key2] = arguments[_key2];
            }
            console.log("bet----", res);
            _this17.betIndex = res[2];
            _this17.betScore = res[3];
            _this17._mainView.betTxt.string = res[4];
            localStorage.setItem(SubGameDef.SLOTS_PANDA + PandaGameData.cacheName.betScore, _this17.betScore.toString());
            _this17.updateBetGear();
          };
          showSlotBetPanel(this._mainView.panelParentNode, [0.03, 0.1, 0.3, 0.9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, UserMgr.inst.coin, Number(this._mainView.betTxt.string), cb.bind(this)).then(function (value) {
            value.bindBet(_this17.betIndex);
          });
        };
        _proto.onBetAdd = function onBetAdd() {
          this.betIndex = Math.floor(this.betIndex + 1);
          if (this.betIndex >= this._gearValueArr.length - 1) {
            this.betIndex = this._gearValueArr.length - 1;
            this._mainView.btnAdd.interactable = false;
            this._mainView.setBtnAlpha(this._mainView.btnAdd);
          }
          this._mainView.setBtnAlpha(this._mainView.btnSub, true);
          this._mainView.btnSub.interactable = true;
          this._mainView.betTxt.string = Num.exchangeToThousands(1, this._gearValueArr[this.betIndex]);
          this.betScore = this._gearValueArr[this.betIndex];
          localStorage.setItem(SubGameDef.SLOTS_PANDA + PandaGameData.cacheName.betScore, this.betScore.toString());
          this._betLevel = 1;
        };
        _proto.onBetSub = function onBetSub() {
          this.betIndex = Math.ceil(this.betIndex - 1);
          if (this.betIndex <= 0) {
            this.betIndex = 0;
            this._mainView.btnSub.interactable = false;
            this._mainView.setBtnAlpha(this._mainView.btnSub);
          }
          this._mainView.setBtnAlpha(this._mainView.btnAdd, true);
          this._mainView.btnAdd.interactable = true;
          this._mainView.betTxt.string = Num.exchangeToThousands(1, this._gearValueArr[this.betIndex]);
          this.betScore = this._gearValueArr[this.betIndex];
          localStorage.setItem(SubGameDef.SLOTS_PANDA + PandaGameData.cacheName.betScore, this.betScore.toString());
          this._betLevel = 1;
        };
        _proto.onLastMoney = function onLastMoney() {
          //打开钱包
          showSlotLastMoneyPenel(this._mainView.panelParentNode, UserMgr.inst.coin);
        };
        _proto.playBaseWinAni = function playBaseWinAni() {
          var _this18 = this;
          var winLinesArr = GameData.gameData.main.lines;
          this.scheduleOnce(function () {
            _this18.resetBaseWinAni();
            AudioMgr.inst.playOneShot(PandaGameRes.res.allLines, 1, ModuleDef.SLOTS_PANDA);
            winLinesArr.forEach(function (v) {
              _this18.playOneLine(v, winLinesArr.length == 1);
            });
            if (GameData.gameData.main && GameData.gameData.main.isAllSame) {
              _this18.playAllSameImgAni();
            }
          }, 0.25);
          var timer4 = function timer4() {
            _this18.roundEnd();
          };
          this.scheduleOnce(timer4, GameData.gameData.mini ? 1.2 : 0.25);
        };
        _proto.resetBaseWinAni = function resetBaseWinAni() {
          var _this19 = this;
          var winLineGroup = this._mainView.winLineGroup;
          var winIconGroup = this._mainView.winIconGroup;
          var winLineGroupAlpha = winLineGroup.getComponent(UIOpacity);
          var winIconGroupAlpaha = winIconGroup.getComponent(UIOpacity);
          winLineGroupAlpha.opacity = 0;
          winIconGroupAlpaha.opacity = 0;
          this.resetRollItem();
          winLineGroup.active = true;
          winIconGroup.active = true;
          tween(winLineGroupAlpha).to(0.1, {
            opacity: 255
          }).start();
          tween(winIconGroupAlpaha).to(0.1, {
            opacity: 255
          }).start();
          this._removeWinIcon = function () {
            _this19.removeWinIcon();
          };
          this.scheduleOnce(this._removeWinIcon, 1.5);
        };
        _proto.playOneLine = function playOneLine(v, canShowPrice) {
          var _this20 = this;
          if (canShowPrice === void 0) {
            canShowPrice = false;
          }
          if (!v || !v.line) {
            console.warn("v::", v, "丢失");
          }
          var viewSize = view.getVisibleSize();
          var bgGroup = this._mainView.bgGroup;
          var winIconGroup = this._mainView.winIconGroup;
          v.line.forEach(function (row, col) {
            var oldIcon = _this20._mainView.centerRollGroup.node.children[col].children[row];
            var wPos = oldIcon.getWorldPosition();
            var _x = wPos.x - viewSize.width / 2 - 3;
            var _y = wPos.y - viewSize.height / 2 - bgGroup.position.y + 3;
            var pos = v3(_x, _y);
            oldIcon.active = false;
            var winIcon = instantiate(_this20._mainView.winIcon).getComponent(PandaWinIcon);
            var clickIconPop = _this20._mainView.clickIconPop;
            var clickIconMask = _this20._mainView.clickIconMask;
            var price = clickIconPop.getChildByName("price");
            var priceLab = price.getComponent(Label);
            winIcon.node.on(Input.EventType.TOUCH_START, function () {
              clickIconPop.children.forEach(function (v) {
                if (v.name == "clickIcon") {
                  v.destroy();
                  v.removeFromParent();
                  v = null;
                }
              });
              var icon = instantiate(_this20._mainView.winIcon);
              icon.parent = clickIconPop;
              icon.scale = v3(0.7, 0.7, 1);
              icon.position = v3(237.5, 252);
              icon.name = "clickIcon";
              var iconPre = icon.getComponent(PandaWinIcon);
              var itemPrice = GameData.sceneData.elementOdd[Number(oldIcon.getComponent(Sprite).spriteFrame.name)];
              _this20.unschedule(_this20._clickIconTimer);
              clickIconPop.active = true;
              _this20._mainView.clickIconMask.active = true;
              var wPos = v3(winIcon.node.getWorldPosition().x - view.getVisibleSize().width / 2, winIcon.node.getWorldPosition().y - view.getVisibleSize().height / 2);
              var index = col;
              price.position = v3(index != 2 ? 113.357 : -113.357);
              icon.position = v3(index != 2 ? -113.357 : 113.357);
              iconPre.setSpData(Number(oldIcon.getComponent(Sprite).spriteFrame.name));
              iconPre.iconSP.paused = false;
              iconPre.playClickIcon();
              priceLab.string = itemPrice;
              clickIconPop.position = v3(index != 2 ? wPos.x + 80 : wPos.x - 80, wPos.y);
              _this20.scheduleOnce(_this20._clickIconTimer, 3);
            });
            var iconWinBgEffNode;
            for (var i = 0; i < winIconGroup.children.length; i++) {
              var _v = winIconGroup.children[i];
              if (_v.name == "iconWinEff" + (row + 1) + (col + 1)) {
                iconWinBgEffNode = _v;
                iconWinBgEffNode.active = false;
                iconWinBgEffNode.active = true;
                iconWinBgEffNode.parent = winIconGroup;
                iconWinBgEffNode.children.forEach(function (v) {
                  v.active = false;
                  v.active = true;
                  var eff = v.getComponent(ParticleSystem);
                  // eff.loop = true;
                  eff.stop();
                  eff.play();
                });
                iconWinBgEffNode.worldPosition = wPos;
                break;
              }
            }
            winIcon.node.parent = winIconGroup;
            if (winIcon && winIcon.node) winIcon.node.active = false;
            winIcon.node.scale = bgGroup.scale;
            winIcon.name = "winIcon";
            winIcon.setSpData(Number(oldIcon.getComponent(Sprite).spriteFrame.name));
            if (winIcon.wildEff.node && winIcon.wildEff) winIcon.wildEff.node.active = false;
            if (Number(oldIcon.getComponent(Sprite).spriteFrame.name) == 201) {
              pos = v3(pos.x - 1, pos.y - 28, pos.z);
              if (winIcon.wildTxtEff.node && winIcon.wildTxtEff) winIcon.wildTxtEff.node.active = true;
              winIcon.wildTxtEff.stop();
              winIcon.wildTxtEff.play();
            }
            if (col == 1) {
              if (winIcon.priceTxt.node.parent && winIcon.priceTxt.node) winIcon.priceTxt.node.parent.active = canShowPrice;
              winIcon.priceTxt.string = Num.exchangeToThousands(1, v.lineScore);
            } else {
              if (winIcon.priceTxt.node && winIcon.priceTxt.node.parent) winIcon.priceTxt.node.parent.active = false;
            }
            // winIcon.setPos(pos);
            winIcon.node.worldPosition = wPos;
            var timer = function timer() {
              //正式-----
              winIcon.playAni(true);
              //正式-----
              if (winIcon && winIcon.node) winIcon.node.active = true;
            };
            timer();
            var timer2 = function timer2() {
              if (oldIcon) oldIcon.active = true;
            };
            _this20.scheduleOnce(timer2, 1.7);
          });
          this.scheduleOnce(function () {
            _this20.playRewardLines(v.lineNo);
          }, 0.01);
          this._isFirstPlayLine = false;
        };
        _proto.removeWinIconEff = function removeWinIconEff() {
          var _this21 = this;
          this._mainView.winIconGroup.children.forEach(function (v) {
            for (var i = 0; i < _this21._mainView.winIconGroup.children.length; i++) {
              var item = _this21._mainView.winIconGroup.children[i];
              if (v.name.indexOf("iconWinEff") > -1 && v.uuid != item.uuid && item.name == v.name) {
                item.removeFromParent();
                item = null;
                i--;
              }
            }
          });
        };
        _proto.playBaseStopAni = function playBaseStopAni(v, colIndex) {
          var _this22 = this;
          if (!v || !v.colums) {
            console.log("v::", v, "丢失");
            return;
          }
          var viewSize = view.getVisibleSize();
          var bgGroup = this._mainView.bgGroup;
          var missWildIconGroup = this._mainView.missWildIconGroup;
          missWildIconGroup.active = true;
          var missWildIconGroupUIO = missWildIconGroup.getComponent(UIOpacity);
          missWildIconGroupUIO.opacity = 255;
          v.colums.forEach(function (colums, col) {
            if (col != colIndex) {
              return;
            }
            colums.elementId.forEach(function (colum, row) {
              var oldIcon = _this22._mainView.centerRollGroup.node.children[col].children[row];
              if (Number(oldIcon.getComponent(Sprite).spriteFrame.name) != 201) return;
              var wPos = oldIcon.getWorldPosition();
              var _x = wPos.x - viewSize.width / 2 - 3;
              var _y = wPos.y - viewSize.height / 2 - bgGroup.position.y - 3;
              var pos = v3(_x, _y);
              oldIcon.active = true;
              var winLinesArr = GameData.gameData.main.lines;
              var winIcon = instantiate(_this22._mainView.winIcon).getComponent(PandaWinIcon);
              winIcon.node.parent = missWildIconGroup;
              winIcon.node.active = false;
              winIcon.node.scale = bgGroup.scale;
              winIcon.setSpData(Number(oldIcon.getComponent(Sprite).spriteFrame.name));
              winIcon.priceTxt.node.parent.active = false;
              if (Number(oldIcon.getComponent(Sprite).spriteFrame.name) == 201) {
                winIcon.name = "baseWild";
                if (!winLinesArr.length) {
                  if (!_this22.isFast) pos = v3(pos.x + 2, pos.y - 40, pos.z);
                  if (winIcon.wildEff && winIcon.wildEff.node) winIcon.wildEff.node.active = true;
                  winIcon.wildEff.stop();
                  winIcon.wildEff.play();
                  AudioMgr.inst.playOneShot(PandaGameRes.res.riseEff, 1, ModuleDef.SLOTS_PANDA);
                  _this22.scheduleOnce(function () {
                    var eff = instantiate(_this22._mainView.WildTuowei.node);
                    eff.position = pos;
                    eff.active = true;
                    eff.parent = _this22._mainView.miniGameCoin.node.parent.parent;
                    var endPos = _this22._mainView.miniGameCoin.node.parent.position;
                    _this22.bezierTo(eff, 0.6, pos, v3(endPos.x + Math.random() * 1 > 0.5 ? -300 : 300, endPos.y + 150, pos.z), endPos).call(function () {
                      _this22._mainView.miniCoinEffGroup.forEach(function (v) {
                        if (v && v.node) {
                          v.node.parent.active = true;
                          v.node.active = true;
                          v.stop();
                          v.play();
                        }
                      });
                    }).delay(0.2).call(function (node) {
                      eff.removeFromParent();
                      eff = null;
                    }).start();
                    _this22.playPandaAmazed();
                  }, 0.5);
                }
              } else {
                winIcon.name = "baseIcon";
              }
              _this22.scheduleOnce(function () {
                winIcon.node.removeFromParent();
                winIcon.node = null;
              }, 0.46);

              // winIcon.setPos(pos);
              winIcon.node.worldPosition = wPos;
              winIcon.getComponent(sp.Skeleton).enabled = !oldIcon.active;
              winIcon.node.active = true;
              if (!_this22.isFast) {
                //正式-----
                winIcon.playAni(false);
              }
              //正式-----
              _this22.scheduleOnce(function () {
                oldIcon && (oldIcon.active = true);
                if (winIcon && winIcon.node) winIcon.node.active = false;
              }, 0.55);
            });
          });
        }
        //基础Wild并且没有中任何线的时候播放
        ;

        _proto.playBaseWildAni = function playBaseWildAni() {
          var _this23 = this;
          var missWildIconGroup = this._mainView.missWildIconGroup;
          missWildIconGroup.active = true;
          var winLinesArr = GameData.gameData.main.lines;
          missWildIconGroup.children.forEach(function (v) {
            if (v.getComponent(PandaWinIcon).name == "baseWild" && !winLinesArr.length) {
              var winIcon = v.getComponent(PandaWinIcon);
              v.active = true;
              if (winIcon.wildEff && winIcon.wildEff.node) winIcon.wildEff.node.active = true;
              winIcon.wildEff.stop();
              winIcon.wildEff.play();
              var timer = function timer() {
                var missWildIconGroup = _this23._mainView.missWildIconGroup;
                missWildIconGroup.removeAllChildren();
              };
              _this23.scheduleOnce(timer, winIcon.wildEff.duration);
            }
          });
        };
        _proto.playRewardLines = function playRewardLines(lineNumber) {
          var lineGroup = this._mainView.lineGroup;
          var lineNumberGroup = this._mainView.lineNumbersGroup;
          var leftGroup = lineNumberGroup.getChildByName("left").getChildByName("labelContent");
          var rightGroup = lineNumberGroup.getChildByName("right").getChildByName("labelContent");
          lineGroup.children.forEach(function (v, i) {
            i == lineNumber - 1 && (v.active = true);
          });
          leftGroup.children.forEach(function (v) {
            Number(v.name) == lineNumber && (v.getComponent(Label).color = color(255, 255, 51));
          });
          rightGroup.children.forEach(function (v) {
            Number(v.name) == lineNumber && (v.getComponent(Label).color = color(255, 255, 51));
          });
        };
        _proto.recoverLineNumberGroup = function recoverLineNumberGroup() {
          var lineNumberGroup = this._mainView.lineNumbersGroup;
          var leftGroup = lineNumberGroup.getChildByName("left").getChildByName("labelContent");
          var rightGroup = lineNumberGroup.getChildByName("right").getChildByName("labelContent");
          leftGroup.children.forEach(function (v) {
            v.getComponent(Label).color = color(62, 101, 34);
          });
          rightGroup.children.forEach(function (v) {
            v.getComponent(Label).color = color(62, 101, 34);
          });
        };
        _proto.hideAllLines = function hideAllLines() {
          var lineGroup = this._mainView.lineGroup;
          lineGroup.children.forEach(function (v, i) {
            if (v) v.active = false;
          });
        };
        _proto.removeWinIcon = function removeWinIcon() {
          var _this24 = this;
          var winLineGroup = this._mainView.winLineGroup;
          var winIconGroup = this._mainView.winIconGroup;
          this.scheduleOnce(function () {
            for (var i = 0; i < winIconGroup.children.length; i++) {
              var v = winIconGroup.children[i];
              if (v.name.indexOf("iconWinEff") > -1) {
                v.active && (v.active = false);
              } else {
                var parts = v.getComponentsInChildren(ParticleSystem);
                parts.forEach(function (ele) {
                  ele.clear();
                  ele.stop();
                  ele.destroy();
                  ele = null;
                });
                v.destroy();
                v.removeFromParent();
                v = null;
                i--;
              }
            }
          }, 0.2);
          var winLineGroupAlpha = winLineGroup.getComponent(UIOpacity);
          tween(winLineGroupAlpha).to(0.3, {
            opacity: 0
          }).start();
          var winwinIconGroupAlpha = winIconGroup.getComponent(UIOpacity);
          tween(winwinIconGroupAlpha).to(0.3, {
            opacity: 0
          }).call(function () {
            _this24.recoverLineNumberGroup();
          }).start();
        };
        _proto.updateBetGear = function updateBetGear() {
          for (var i = 0; i < this._gearValueArr.length; i++) {
            //选中为档位中的
            if (this._gearValueArr[i] === this.betScore) {
              if (i === 0) {
                this._mainView.btnSub.interactable = false;
                this._mainView.btnAdd.interactable = true;
              } else if (i === this._gearValueArr.length - 1) {
                this._mainView.btnSub.interactable = true;
                this._mainView.btnAdd.interactable = false;
              } else {
                this._mainView.btnSub.interactable = true;
                this._mainView.btnAdd.interactable = true;
              }
              this.betIndex = i;
              break;
            }

            //基于档位之间的
            if (i === this._gearValueArr.length - 1) break;
            var value = this._gearValueArr[i + 1];
            if (this.betScore > this._gearValueArr[i] && this.betScore < value) {
              this.betIndex = i + 0.5;
              this._mainView.btnAdd.interactable = true;
              this._mainView.btnSub.interactable = true;
              break;
            }
          }
          this._mainView.setBtnAlpha(this._mainView.btnAdd, this._mainView.btnAdd.interactable);
          this._mainView.setBtnAlpha(this._mainView.btnSub, this._mainView.btnSub.interactable);
        };
        _proto.startAuto = function startAuto() {
          this.isAuto = true;
          this._mainView.btnPlay.node.active = false;
          this._mainView.btnStop.node.active = true;
          this._totalLose = 0;
          this._totalWin = 0;
          this._singleWin = 0;
          // GameData.leftAutoCount = GameData.autoArr[GameData.autoCountIndex];
          this.updateLabelAutoCount();
        };
        _proto.updateLabelAutoCount = function updateLabelAutoCount(delayTime) {
          var _this25 = this;
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this.scheduleOnce(function () {
            GameData.leftAutoCount--;
            if (GameData.leftAutoCount > 0) {
              _this25._mainView.autoCountLab.string = GameData.leftAutoCount.toString();
            } else {
              _this25.touchStopAuto();
            }
            _this25.touchPlay();
          }, delayTime);
        };
        _proto.touchStopAuto = function touchStopAuto() {
          // console.log("%c ----停止自动游戏-----", "color:#2ba914");
          this.isAuto = false;
          this._mainView.btnPlay.node.active = true;
          this._mainView.btnStop.node.active = false;
          this._mainView.setBtnAlpha(this._mainView.btnAuto, true);
          GameData.leftAutoCount = 0;
        }
        //计算所有情况的分数
        ;

        _proto.totalScore = function totalScore(winScore) {
          if (!winScore) winScore = 0;
          this._totalLose -= winScore;
          this._totalWin += winScore;
          this._singleWin = winScore;
          if (GameData.reduceLabel != 0 && this._totalLose >= GameData.reduceLabel * 100 || GameData.addLabel != 0 && this._totalWin >= GameData.addLabel * 100 || GameData.winLabel != 0 && this._singleWin >= GameData.winLabel * 100) {
            this.touchStopAuto();
          }
        };
        _proto.randomPandaAni = function randomPandaAni() {
          var _this26 = this;
          if (this._isStart || this.isAuto) {
            return;
          }
          var aniArr = [EPandaAni.Eat, EPandaAni.Look];
          var randomNum = Math.floor(Math.random() * aniArr.length);
          var lookArr = [PandaGameRes.res.pandaLook1, PandaGameRes.res.pandaLook2, PandaGameRes.res.pandaLook3];
          var num = 0;
          if (this._mainView.panda.aniSate == EPandaAni.Idle) {
            if (randomNum) {
              do {
                num = Math.floor(Math.random() * lookArr.length);
              } while (this._lookSoundIndex == num);
              this._lookSoundIndex = num;
              AudioMgr.inst.playOneShot(lookArr[this._lookSoundIndex], 1, ModuleDef.SLOTS_PANDA);
            } else {
              this.scheduleOnce(function () {
                AudioMgr.inst.playOneShot(PandaGameRes.res.pandaEat, 1, ModuleDef.SLOTS_PANDA);
              }, 0.4);
            }
            this._mainView.panda.play(aniArr[randomNum], false, function () {
              _this26._mainView.panda.play(EPandaAni.Idle, true);
            });
          }
        };
        _proto.playPandaDrowsy = function playPandaDrowsy() {
          var _this27 = this;
          if (this._isStart || this.isAuto) {
            return;
          }
          if (this._mainView.panda.aniSate == EPandaAni.Idle) {
            AudioMgr.inst.playOneShot(PandaGameRes.res.pandaSleep, 1, ModuleDef.SLOTS_PANDA);
            this._mainView.panda.play(EPandaAni.Drowsy, false, function () {
              _this27._mainView.panda.play(EPandaAni.Idle, true);
            });
            this._mainView.panda.playDrowsy(4);
          }
        };
        _proto.playPandaAmazed = function playPandaAmazed() {
          var _this28 = this;
          var winLinesArr = GameData.gameData.main.lines;
          if (!this._isFakeMini && !winLinesArr.length) {
            for (var i = 0; i < GameData.gameData.main.colums.length; i++) {
              var isWild = false;
              for (var k = 0; k < GameData.gameData.main.colums[i].elementId.length; k++) {
                var v = GameData.gameData.main.colums[i].elementId[k];
                if (v == 201 && !this._playedAmazed) {
                  isWild = true;
                  // if (this._isFirstPlayLine) {
                  this._playedAmazed = true;
                  AudioMgr.inst.playOneShot(PandaGameRes.res.pandaAmazed, 1, ModuleDef.SLOTS_PANDA);
                  this._mainView.panda.play(EPandaAni.Amazed, false, function () {
                    _this28._mainView.panda.play(EPandaAni.Idle, true);
                  });
                  break;
                }
              }
              if (isWild) break;
            }
          }
        };
        _proto.playMiniGameCoinAni = function playMiniGameCoinAni() {
          var _this29 = this;
          tween(this._mainView.miniGameCoin.node.parent).to(2, {
            position: v3(0, 650.299, 1)
          }).to(1.8, {
            position: v3(0, 716.588, 1)
          }).call(function () {
            _this29.playMiniGameCoinAni();
          }).start();
        };
        _proto.cameraShake = function cameraShake(duration) {
          var self = this;
          var canPlay = true;
          function play() {
            var range = 20;
            var _x = Math.random() * range - (range - 12.5);
            var _y = Math.random() * range - (range - 12.5);
            self.node.position = v3(_x, _y);
            if (canPlay) {
              self.scheduleOnce(function () {
                play();
              }, 0.03);
            } else {
              self.node.position = v3(0, 0);
            }
          }
          play();
          this.scheduleOnce(function () {
            canPlay = false;
            self.node.position = v3(0, 0);
          }, duration);
        };
        _proto.playMiniAllSameImgAni = function playMiniAllSameImgAni(delay) {
          var _this30 = this;
          if (delay === void 0) {
            delay = 0;
          }
          var img = this._mainView.allSameImg;
          img.active = true;
          img.position = v3(0, 5);
          img.scale = v3(0.9, 0.9, 1);
          var uio = img.getComponent(UIOpacity);
          uio.opacity = 255;
          var winScore = GameData.gameData.mini.winScore;
          tween(img).delay(delay).call(function () {
            AudioMgr.inst.playOneShot(PandaGameRes.res.allSameX10Eff, 1, ModuleDef.SLOTS_PANDA);
          }).to(1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            uio.opacity = 255;
          }).delay(0.5).to(0.2, {
            position: v3(0, -523.089),
            scale: v3(0.8, 0.8, 1)
          }).call(function () {
            tween(uio).to(0.15, {
              opacity: 0
            }).start();
            _this30._mainView.tipsPop.playTipsWinPop(winScore);
            _this30.scrollToValue(0, winScore, 0.1, _this30._mainView.winTxt);
          }).start();
        };
        _proto.playAllSameImgAni = function playAllSameImgAni() {
          var _this31 = this;
          var ani = this._mainView.baseAllSameCoinAni;
          var coinEff = this._mainView.baseAllSameEff;
          var x10 = this._mainView.baseAllSameImg;
          ani.node.active = true;
          ani.node.scale = v3(0.8, 0.8, 1);
          ani.node.position = v3(1.512, 685.057);
          // x10.scale = v3(1.2, 1.2, 1);
          x10.scale = v3(0.8, 0.8, 1);
          var winScore = GameData.gameData.main.winScore;
          this._mainView.miniGameCoin.node.active = false;
          ani.setAnimation(0, "animation", false);
          // AudioMgr.inst.playOneShot(PandaGameRes.res.baseX10Eff, "", 0, false, true, 0.2);
          tween(ani.node).delay(1.8).call(function () {
            ani.node.active = false;
            coinEff.node.active = true;
            coinEff.stop();
            coinEff.play();
            coinEff.node.children.forEach(function (v) {
              var eff = v.getComponent(ParticleSystem);
              eff.node.active = true;
              eff.stop();
              eff.play();
            });
            _this31.scheduleOnce(function () {
              coinEff.node.active = false;
              coinEff.clear();
              coinEff.node.children.forEach(function (v) {
                var eff = v.getComponent(ParticleSystem);
                eff.node.active = false;
                eff.clear();
              });
            }, coinEff.duration);
            x10.position = v3(0, 731.613);
            tween(x10).delay(0.1).call(function () {
              x10.active = true;
              x10.scale = v3(0.3, 0.3, 1);
              tween(x10).to(0.3, {
                scale: v3(0.7, 0.7)
              }).delay(0.9).to(0.5, {
                scale: v3(0.3, 0.3)
              }).start();
              _this31.bezierToNoAngle(x10, 1.7, x10.position, v3(Math.random() * 1 > 0.5 ? 0 : 0, x10.position.y + 300, 0), v3(0, -523)).call(function (node) {
                x10.active = false;
                _this31._mainView.tipsPop.playTipsWinPop(winScore);
                _this31.scrollToValue(0, winScore, 0.1, _this31._mainView.winTxt);
                _this31._mainView.miniGameCoin.node.active = true;
              }).start();
            }).start();
          }).start();
        }

        //============================可通用====================================
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
         * @desc 三阶贝塞尔无角度朝向
         * @param {any} target 运动目标
         * @param {number} duration tween时长
         * @param {Vec3} p1 起点坐标
         * @param {Vec3} cp 控制点
         * @param {Vec3} p2 终点坐标
         * @param {object} opts 
         * @returns {any} 返回一个tween动画，启用需要start()
         */;
        _proto.bezierToNoAngle = function bezierToNoAngle(target, duration, p1, cp, p2, opts) {
          opts = opts || Object.create(null);
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            var z = (1 - t) * (1 - t) * p1.z + 2 * t * (1 - t) * cp.z + t * t * p2.z;
            return new Vec3(x, y, z);
          };
          opts.onUpdate = function (_arg, ratio) {
            target.position = twoBezier(ratio, p1, cp, p2);
          };
          return tween(target).to(duration, {}, opts);
        };
        return PandaGameLogic;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaGameMainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameLogic.ts', './PandaGameData.ts', './PandaTipsPop.ts', './PandaBigWinPop.ts', './PandaAnimation.ts', './PandaGameMiniGame.ts', './BaseSlot.ts', './Num.ts', './UserMgr.ts', './RoomMgr.ts', './ModuleDef.ts', './AudioMgr.ts', './PandaGameRes.ts', './LanguageData.ts', './UIHelp.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Button, Node, Sprite, Prefab, sp, ParticleSystem2D, ParticleSystem, Tween, tween, v3, UIOpacity, Component, PandaGameLogic, PandaTipsPop, PandaBigWinPop, PandaAnimation, PandaGameMiniGame, BaseSlot, SlotEaseType, SlotStopType, Num, UserMgr, RoomMgr, ModuleDef, AudioMgr, PandaGameRes, LanguageData, UIHelp, UIhelpParam;
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
      Sprite = module.Sprite;
      Prefab = module.Prefab;
      sp = module.sp;
      ParticleSystem2D = module.ParticleSystem2D;
      ParticleSystem = module.ParticleSystem;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      PandaGameLogic = module.PandaGameLogic;
    }, null, function (module) {
      PandaTipsPop = module.PandaTipsPop;
    }, function (module) {
      PandaBigWinPop = module.PandaBigWinPop;
    }, function (module) {
      PandaAnimation = module.PandaAnimation;
    }, function (module) {
      PandaGameMiniGame = module.PandaGameMiniGame;
    }, function (module) {
      BaseSlot = module.BaseSlot;
      SlotEaseType = module.SlotEaseType;
      SlotStopType = module.SlotStopType;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      PandaGameRes = module.default;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _class3;
      cclegacy._RF.push({}, "7bd7ezIh7dNOKEyvCrdUsWD", "PandaGameMainView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PandaGameMainView = exports('PandaGameMainView', (_dec = ccclass('PandaGameMainView'), _dec2 = property(BaseSlot), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Node), _dec13 = property(Sprite), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Prefab), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Button), _dec27 = property(Label), _dec28 = property(PandaTipsPop), _dec29 = property(PandaBigWinPop), _dec30 = property(PandaAnimation), _dec31 = property(Node), _dec32 = property([sp.SkeletonData]), _dec33 = property(sp.Skeleton), _dec34 = property(ParticleSystem2D), _dec35 = property(ParticleSystem), _dec36 = property(ParticleSystem), _dec37 = property(ParticleSystem), _dec38 = property(Node), _dec39 = property(ParticleSystem), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(sp.Skeleton), _dec48 = property(ParticleSystem), _dec49 = property(Node), _dec50 = property(Node), _dec51 = property(Node), _dec52 = property(Node), _dec53 = property(Button), _dec54 = property(Button), _dec55 = property(Node), _dec56 = property(Node), _dec57 = property(PandaGameMiniGame), _dec58 = property({
        type: Node,
        tooltip: '放置所有二级界面'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaGameMainView, _Component);
        function PandaGameMainView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "centerRollGroup", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betTxt", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTxt", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balanceTxt", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAdd", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSub", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnPlay", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAuto", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSpeedCut", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSpeedUp", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotatePlay", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnPlayGrayGroup", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickIconPop", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickIconMask", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconResistMask", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineGroup", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineNumbersGroup", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLineGroup", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winIcon", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgGroup", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winIconGroup", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseIconGroup", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "missWildIconGroup", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoPop", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnStop", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoCountLab", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipsPop", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinPop", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panda", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniGameTitle", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "anis", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniGameCoin", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WildTuowei", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchPlayEff", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchPlayLoopEff", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniCoinEffGroup", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconWinBgEffNode", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bambooEffGroup", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniMask", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomNode", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingClose", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniGameGuangzhu", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "allSameImg", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnFirstClick", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnFastClick", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseAllSameCoinAni", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseAllSameEff", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseAllSameImg", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "videoClose", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "videoOpen", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openningMask", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetAdd", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetSub", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniGamePop", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enterMiniGamePop", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniGame", _descriptor56, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelParentNode", _descriptor57, _assertThisInitialized(_this));
          _this._mainLogic = void 0;
          _this.isFirstTouchSpeedUp = false;
          _this.isOpenVideo = false;
          return _this;
        }
        var _proto = PandaGameMainView.prototype;
        _proto.start = function start() {
          var _this2 = this;
          PandaGameMainView.ins = this;
          this._mainLogic = this.node.getComponent(PandaGameLogic);
          this.setBtnAlpha(this.btnSub);
          this.tweenRotateStand();
          this.openningMask.active = false;
          this.centerRollGroup.easingIn = SlotEaseType.Back;
          this.centerRollGroup.easingOut = SlotEaseType.Elastic;
          var currentTime = localStorage.getItem("Panda_currentTime");
          if (!currentTime || currentTime === '') {
            this.isOpenVideo = true;
          }
          this.scheduleOnce(function () {
            if (_this2.isOpenVideo) ;else {
              _this2.openningMask.active = false;
            }
            _this2.miniGamePop.active = false;
          }, 0.001);
          this.videoClose.active = !this.isOpenVideo;
          this.videoOpen.active = this.isOpenVideo;
        }
        //视频时间
        ;

        _proto.onVideoEvent = function onVideoEvent() {
          console.log("视频播放完成");
          if (this.isOpenVideo) {
            console.log("关闭视频按钮");
            this.isOpenVideo = false;
            // localStorage.setItem("Panda_currentTime", tool.date.formatDate());
            this.videoClose.active = !this.isOpenVideo;
            this.videoOpen.active = this.isOpenVideo;
            this.openningMask.active = false;
          }
        };
        _proto.init = function init() {};
        _proto.onTouchPlay = function onTouchPlay() {
          this._mainLogic.touchPlay();
          this.touchPlayEff.node.active = true;
          this.touchPlayEff.stop();
          this.touchPlayEff.play();
          this.touchPlayLoopEff.node.active = true;
          this.touchPlayLoopEff.stop();
          this.touchPlayLoopEff.play();
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.recoverSpeed = function recoverSpeed() {
          this.btnFirstClick.active = true;
          this.btnFastClick.active = true;
          this.centerRollGroup.easingIn = SlotEaseType.Back;
          this.centerRollGroup.easingOut = SlotEaseType.Elastic;
          this.centerRollGroup.stopType = SlotStopType.立即陆续;
          this._mainLogic.isFast = false;
          this._mainLogic.timeScale = 1;
        };
        _proto.tweenRotatePlay = function tweenRotatePlay() {
          var _this3 = this;
          Tween.stopAllByTarget(this.rotatePlay);
          var rotate = this.rotatePlay.eulerAngles.z;
          tween(this.rotatePlay).tag(11).to(0.5, {
            eulerAngles: v3(0, 0, rotate - 360)
          }).call(function () {
            _this3.tweenRotatePlay();
          }).start();
        };
        _proto.tweenRotateStand = function tweenRotateStand() {
          var _this4 = this;
          Tween.stopAllByTarget(this.rotatePlay);
          var rotate = this.rotatePlay.eulerAngles.z;
          tween(this.rotatePlay).tag(12).to(8, {
            eulerAngles: v3(0, 0, rotate - 360)
          }).call(function () {
            _this4.tweenRotateStand();
          }).start();
        };
        _proto.onGameOver = function onGameOver() {
          var _this5 = this;
          this.setFastClick(false);
          this.btnSub.interactable = this._mainLogic.betIndex > 0;
          this.btnAdd.interactable = this._mainLogic.betIndex < this._mainLogic.betLength - 1;
          this.setBtnAlpha(this.btnSub, this._mainLogic.betIndex > 0);
          this.setBtnAlpha(this.btnAdd, this._mainLogic.betIndex < this._mainLogic.betLength - 1);
          this.betTxt.node.parent.getComponent(Button).interactable = true;
          Tween.stopAllByTarget(this.rotatePlay);
          this.setSpriteGrayscale(this.rotatePlay, false);
          this.btnPlayGrayGroup.forEach(function (v) {
            _this5.setSpriteGrayscale(v.node, false);
          });
          this.tweenRotateStand();
          this.setBtnAlpha(this.btnAuto, !this._mainLogic.isAuto);
        };
        _proto.onTouchSpeedUp = function onTouchSpeedUp() {
          if (this.isFirstTouchSpeedUp) {
            this.btnSpeedUp.node.active = false;
            this.btnSpeedCut.node.active = true;
            this.centerRollGroup.easingIn = SlotEaseType.Back;
            this.centerRollGroup.easingOut = SlotEaseType.Elastic;
            this.centerRollGroup.stopType = SlotStopType.立即陆续;
            this._mainLogic.isFast = false;
            this._mainLogic.timeScale = 1;
          } else {
            this.centerRollGroup.stopType = SlotStopType.立即停止;
            this.centerRollGroup.easingIn = SlotEaseType.Linear;
            this.centerRollGroup.easingOut = SlotEaseType.Linear;
            this._mainLogic.isFast = true;
            this._mainLogic.timeScale = 0.5;
          }
          this.isFirstTouchSpeedUp = true;
          this.btnSpeedUp.node.getChildByName("eff").active = this.isFirstTouchSpeedUp;
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchSpeedCut = function onTouchSpeedCut() {
          this.btnSpeedUp.node.getChildByName("eff").active = true;
          this.btnSpeedUp.node.active = true;
          this.btnSpeedCut.node.active = false;
          this.centerRollGroup.stopType = SlotStopType.立即停止;
          this.centerRollGroup.easingIn = SlotEaseType.Linear;
          this.centerRollGroup.easingOut = SlotEaseType.Linear;
          this._mainLogic.timeScale = 0.5;
          this._mainLogic.isFast = true;
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchFastClick = function onTouchFastClick() {
          this.btnFastClick.active = false;
          this.centerRollGroup.stopType = SlotStopType.立即停止;
          this.centerRollGroup.easingIn = SlotEaseType.Linear;
          this.centerRollGroup.easingOut = SlotEaseType.Linear;
          this._mainLogic.timeScale = 0.5;
          this._mainLogic.isFast = true;
        };
        _proto.onTouchFirstClick = function onTouchFirstClick() {
          return;
        };
        _proto.setFastClick = function setFastClick(flag) {
          if (flag === void 0) {
            flag = false;
          }
          if (this._mainLogic.isAuto) return;
          this.btnFirstClick.active = flag;
          this.btnFastClick.active = flag;
        };
        _proto.onTouchLastMoney = function onTouchLastMoney() {
          //打开钱包
          this._mainLogic.onLastMoney();
        };
        _proto.onTouchBetSub = function onTouchBetSub() {
          this._mainLogic.onBetSub();
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchBetAdd = function onTouchBetAdd() {
          this._mainLogic.onBetAdd();
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchBetTxt = function onTouchBetTxt() {
          this._mainLogic.onBet();
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchAuto = function onTouchAuto() {
          this._mainLogic.onOpenAuto();
          // this.autoPop.getComponent(PandaAuto).showPanel();
          // this._mainLogic.touchStopAuto();

          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchSettingOpen = function onTouchSettingOpen() {
          this.settingClose.active = true;
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchSettingClose = function onTouchSettingClose() {
          this.settingClose.active = false;
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onHelp = function onHelp() {
          // console.log("---帮助---")
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
          tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
        };
        _proto.onPayout = function onPayout() {
          // console.log("---帮助---")
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
          tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
        };
        _proto.onMusic = function onMusic() {
          // AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
          AudioMgr.inst["switch"] = !AudioMgr.inst["switch"];
        };
        _proto.onMenu = function onMenu() {
          // console.log("---积分明细---")
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.onTouchAutoStop = function onTouchAutoStop() {
          this.btnStop.node.active = false;
          this.btnPlay.node.active = true;
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
          this._mainLogic.touchStopAuto();
        };
        _proto.onTouchVideo = function onTouchVideo() {
          // if (this.isOpenVideo) {
          //     localStorage.setItem("Panda_currentTime", tool.date.formatDate());
          // } else {
          //     localStorage.removeItem("Panda_currentTime");
          // }
          // this.isOpenVideo = !this.isOpenVideo;
          // this.videoClose.active = !this.isOpenVideo;
          // this.videoOpen.active = this.isOpenVideo;
          // root.game.control.tips.tip(I18n.ins().t(this.isOpenVideo ? "openSplashVideo" : "closeSplashVideo"));
        };
        _proto.onExit = function onExit() {
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true, '#e9f7a8', '#8ebc35', 'f0ffd3', '13433a').onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
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
        _proto.updateBetTxt = function updateBetTxt(num) {
          var toNum = Number(num);
          this.betTxt.string = Num.exchangeToThousands(1, toNum);
        };
        _proto.updateWinTxt = function updateWinTxt(num) {
          var toNum = Number(num);
          this.winTxt.string = Num.exchangeToThousands(1, toNum);
        };
        _proto.updateBalanceTxt = function updateBalanceTxt() {
          this.balanceTxt.string = Num.exchangeToThousands(1, UserMgr.inst.coin);
        };
        _proto.setSpriteGrayscale = function setSpriteGrayscale(node, bool) {
          node.getComponent(Sprite).grayscale = bool;
        };
        _proto.setBtnAlpha = function setBtnAlpha(btn, isShow) {
          if (isShow === void 0) {
            isShow = false;
          }
          btn.getComponent(UIOpacity).opacity = isShow ? 255 : 255 / 2;
        };
        return PandaGameMainView;
      }(Component), _class3.ins = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "centerRollGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "balanceTxt", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnSub", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnPlay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnSpeedCut", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnSpeedUp", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rotatePlay", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnPlayGrayGroup", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "clickIconPop", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "clickIconMask", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "iconResistMask", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lineGroup", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lineNumbersGroup", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "winLineGroup", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "winIcon", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bgGroup", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "winIconGroup", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "baseIconGroup", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "missWildIconGroup", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "autoPop", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "btnStop", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "autoCountLab", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "tipsPop", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bigWinPop", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "panda", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "miniGameTitle", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "anis", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "miniGameCoin", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "WildTuowei", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "touchPlayEff", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "touchPlayLoopEff", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "miniCoinEffGroup", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "iconWinBgEffNode", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "bambooEffGroup", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "miniMask", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "bottomNode", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "settingClose", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "miniGameGuangzhu", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "allSameImg", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "btnFirstClick", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "btnFastClick", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "baseAllSameCoinAni", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "baseAllSameEff", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "baseAllSameImg", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "videoClose", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "videoOpen", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "openningMask", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "btnBetAdd", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "btnBetSub", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "miniGamePop", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "enterMiniGamePop", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "miniGame", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "panelParentNode", [_dec58], {
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

System.register("chunks:///_virtual/PandaGameMiniGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameData.ts', './PandaGameEvent.ts', './PandaGameRes.ts', './ModuleDef.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, SpriteFrame, sp, Vec3, Vec2, v3, Label, tween, Sprite, math, view, UITransform, easing, UIOpacity, director, Component, PandaGameData, PandaGameEvent, PandaGameRes, ModuleDef, AudioMgr;
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
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      v3 = module.v3;
      Label = module.Label;
      tween = module.tween;
      Sprite = module.Sprite;
      math = module.math;
      view = module.view;
      UITransform = module.UITransform;
      easing = module.easing;
      UIOpacity = module.UIOpacity;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      PandaGameData = module.PandaGameData;
    }, function (module) {
      PandaGameEvent = module.default;
    }, function (module) {
      PandaGameRes = module.default;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "f1793dYWDZLMIyoSSY5f+c9", "PandaGameMiniGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameData = PandaGameData.data;
      var GameEvent = PandaGameEvent.event;
      var PandaGameMiniGame = exports('PandaGameMiniGame', (_dec = ccclass('PandaGameMiniGame'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(SpriteFrame), _dec10 = property(sp.Skeleton), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaGameMiniGame, _Component);
        function PandaGameMiniGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "outerRing", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "innerRing", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "marble", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulNumGroup", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnStart", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainBtnPlay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAuto", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSFGroup", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pandaAni", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enterMiniGamePop", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "innerSpinEffNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "innerWinEff", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "innerWinEffGroup", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "outerWinEffGroup", _descriptor14, _assertThisInitialized(_this));
          _this.rotationSpeed = 400;
          // 旋转速度（角度/秒）
          _this.centerPoint = new Vec3(0, -50, 0);
          // 旋转的轴心坐标（目标点）
          _this.mulWinIndex = 0;
          _this.radius = 450;
          // 圆的半径，表示从轴心到节点的距离
          _this.angle = 0;
          // 当前角度
          _this.randomIndex = 0;
          _this.canRotation = false;
          _this.timeArr = [1.04, 1.2, 1.36, 1.5, 1.64, 1.78];
          _this.winNodeWordPos = void 0;
          _this.ballTracking = false;
          _this._angle = 0;
          _this._isStart = false;
          _this.isOutRingStop = false;
          _this.isInnerRingStop = true;
          _this.outRingIndex = 0;
          _this.nowPlayingSound = "";
          _this.soundGroup = [];
          _this.ballBeforePoint = Vec2.ZERO;
          _this.ballHitCount = 0;
          _this._spinEffId = -1;
          _this.testFlag = true;
          return _this;
        }
        var _proto = PandaGameMiniGame.prototype;
        _proto.init = function init() {
          var _this2 = this;
          this.canRotation = false;
          this.testFlag = true;
          this.marble.parent = this.node;
          this.marble.active = false;
          this.ballTracking = false;
          this.btnStart.node.position = this.mainBtnPlay.node.position;
          this.isOutRingStop = false;
          this.isInnerRingStop = true;
          this.btnStart.node.active = false;
          this.btnAuto.node.active = false;
          this.ballHitCount = 0;
          this.creatIcons();
          this.pandaAni.node.active = true;
          this.pandaAni.paused = false;
          this.innerWinEffGroup.children.forEach(function (v) {
            v.active = false;
          });
          this.outerWinEffGroup.children.forEach(function (v) {
            v.active = false;
          });
          this.innerWinEff.active = false;
          this.innerSpinEffNode.active = false;
          if (this._spinEffId != -1) AudioMgr.inst.stopOneShot(this._spinEffId, PandaGameRes.res.spinEff, ModuleDef.SLOTS_PANDA), this._spinEffId = -1;
          this.scheduleOnce(function () {
            _this2.onTouchStart();
          }, 0.45);
          this.innerRing.angle = 0;
          this.outerRing.angle = 0;
          this.angle = 0;
          this._angle = 0;
          this.marble.position = v3(0, 408.7);
        };
        _proto.tweenPonit1 = function tweenPonit1() {
          var _this3 = this;
          var danzhu = this.marble;
          var pointA = Vec3.ZERO;
          var pointB = Vec3.ZERO;
          this.mulWinIndex = Math.floor(Math.random() * this.mulNumGroup.children.length);
          this.mulNumGroup.children[this.mulWinIndex].getComponent(Label).string = "X" + GameData.gameData.mini.multiple + "";
          var winNode = this.mulNumGroup.children[this.mulWinIndex];
          switch (this.randomIndex) {
            case 0:
              //撞击正下方撞针
              pointA = v3(36.948, -450.75);
              pointB = v3(7.779, -75.723);
              break;
            case 1:
              //撞击左下方撞针
              pointA = v3(-316.217, -250.153);
              pointB = v3(-24.724, -69.889);
              break;
            case 2:
              //左上方撞针
              pointA = v3(-359.502, 113.263);
              pointB = v3(-27.025, -36.913);
              break;
            case 3:
              //正上方撞针
              pointA = v3(-20.605, 326.264);
              pointB = v3(-3.477, -15.177);
              break;
            case 4:
              //右上方撞针
              pointA = v3(310.056, 168.527);
              pointB = v3(27.316, -26.951);
              break;
            case 5:
              //右下方撞针
              pointA = v3(333.124, -204.141);
              pointB = v3(27.929, -50.895);
              break;
          }
          tween(danzhu).to(0.2, {
            position: pointA
          }).call(function () {
            _this3.playBallHit();
            tween(danzhu).to(1, {
              position: pointB
            }).call(function () {
              _this3.ballTracking = true;
              _this3.playBallHit();
            }).delay(0.4).call(function () {}).start();
          }).start();
        };
        _proto.creatIcons = function creatIcons() {
          var iconGroup = this.outerRing.children;
          for (var i = 0; i < iconGroup.length; i++) {
            var v = iconGroup[i].getComponent(Sprite);
            v.spriteFrame = this.iconSFGroup[i];
            if (this.iconSFGroup[i].name == GameData.gameData.mini.elementId + "") {
              this.outRingIndex = i;
            }
          }
          var mulArr = [];
          mulArr = [].concat(GameData.sceneData.miniMultiple, GameData.sceneData.miniMultiple);
          for (var k = 0; k < this.mulNumGroup.children.length; k++) {
            var str = this.mulNumGroup.children[k].getComponent(Label);
            var random = Math.floor(Math.random() * mulArr.length);
            var mulNum = mulArr[random];
            str.string = "X" + mulNum + "";
            mulArr.splice(random, 1);
          }
        };
        _proto.update = function update(deltaTime) {
          if (this.canRotation) {
            // 根据旋转速度计算角度变化
            this.angle -= this.rotationSpeed * deltaTime;

            // 将角度转换为弧度
            var radian = math.toRadian(this.angle);

            // 计算新的坐标
            var newX = this.centerPoint.x + this.radius * Math.cos(radian);
            var newY = this.centerPoint.y + this.radius * Math.sin(radian);

            // 更新节点位置
            this.marble.setPosition(new Vec3(newX, newY, this.centerPoint.z));
          }
          this.ringRoation(this.outerRing, 3.6);
          this.innerRingRotaion();
          if (this.ballTracking) {
            this.ballHitCount++;
            var danzhu = this.marble;
            var danzhuPos = danzhu.position;
            var endPoint = v3(this.winNodeWordPos.x - view.getVisibleSize().width / 2 + 10, this.winNodeWordPos.y - view.getVisibleSize().height / 2 + this.innerRing.getComponent(UITransform).height / 4 - 130);
            this._angle += 0.007;
            var speed = 5;
            var isHit = this.isPointInCircleAround(danzhuPos.toVec2(), this.centerPoint.toVec2(), 180) && Vec2.distance(danzhuPos.toVec2(), this.ballBeforePoint) <= 5 && !this.isInnerRingStop && this.ballHitCount % 8 == 0;
            this.ballBeforePoint = danzhuPos.clone().toVec2();
            if (isHit) {
              this.playBallHit();
            }
            if (danzhuPos.x > endPoint.x + speed) {
              danzhu.position = v3(danzhu.position.x - speed + Math.cos(this._angle), danzhuPos.y, danzhuPos.z);
            }
            if (danzhuPos.x < endPoint.x - speed) {
              danzhu.position = v3(danzhu.position.x + speed + Math.cos(this._angle), danzhuPos.y, danzhuPos.z);
            }
            if (danzhuPos.y > endPoint.y + speed) {
              danzhu.position = v3(danzhuPos.x, danzhu.position.y - speed + Math.sin(this._angle), danzhuPos.z);
            }
            if (danzhuPos.y < endPoint.y - speed) {
              danzhu.position = v3(danzhuPos.x, danzhu.position.y + speed + Math.sin(this._angle), danzhuPos.z);
            }
          }
        };
        _proto.onTouchStart = function onTouchStart() {
          var _this4 = this;
          console.log("进了几次");
          this.testFlag = false;
          this.isInnerRingStop = false;
          this.innerSpinEffNode.active = true;
          AudioMgr.inst.playOneShot(PandaGameRes.res.spinEff, 1, ModuleDef.SLOTS_PANDA).then(function (aeid) {
            return _this4._spinEffId = aeid;
          });
          this.btnStart.node.active = false;
          this.soundGroup.length = 0;
          this._isStart = true;
          this.marble.active = true;
          this.canRotation = true;
          AudioMgr.inst.playOneShot(PandaGameRes.res.dropBall, 1, ModuleDef.SLOTS_PANDA);

          // root.audio.playPatch(PandaGameRes.res.ballSpin, 1, true, (uuid: string) => {
          //     this.soundGroup.push({ uuid: uuid, res: PandaGameRes.res.ballSpin });
          // });
          // root.audio.playPatch(PandaGameRes.res.xiaoQuan, 0.4, true, (uuid: string) => {
          //     this.soundGroup.push({ uuid: uuid, res: PandaGameRes.res.xiaoQuan });
          // });
          // root.audio.playPatch(PandaGameRes.res.daQuan, 0.4, true, (uuid: string) => {
          //     this.soundGroup.push({ uuid: uuid, res: PandaGameRes.res.daQuan });
          // });

          this.randomIndex = Math.floor(Math.random() * this.timeArr.length);
          this.scheduleOnce(function () {
            _this4.canRotation = false;
            _this4.tweenPonit1();
          }, this.timeArr[this.randomIndex]);
          this.scheduleOnce(function () {
            _this4.testFlag = true;
            _this4._isStart = false;
          }, 7);
          this.scheduleOnce(function () {
            _this4.isOutRingStop = true;
          }, 5);
        };
        _proto.stopCorona = function stopCorona() {
          this.isOutRingStop = true;
        };
        _proto.ringRoation = function ringRoation(target, rotation) {
          if (this.testFlag) return;
        };
        _proto.innerRingRotaion = function innerRingRotaion() {
          var _this5 = this;
          this.winNodeWordPos = this.mulNumGroup.children[this.mulWinIndex].getWorldPosition();
          var outWordPos = this.outerRing.children[this.outRingIndex].getWorldPosition();
          !this.isInnerRingStop && (this.innerRing.angle -= 1.8);
          var angle = this.getAngleBetweenVectors(this.winNodeWordPos, outWordPos) * 180 / Math.PI;
          var _distance = Vec3.distance(this.winNodeWordPos, outWordPos);
          if (angle < 30 && _distance < 135 && this.isOutRingStop && !this.isInnerRingStop) {
            this.isInnerRingStop = true;

            // root.audio.stopPatch(this.stopSound(PandaGameRes.res.ballSpin));
            // root.audio.stopPatch(this.stopSound(PandaGameRes.res.xiaoQuan));
            // root.audio.stopPatch(this.stopSound(PandaGameRes.res.daQuan));
            tween(this.innerRing).to(0.45, {
              angle: this.innerRing.angle - 5
            }, {
              easing: easing.quadOut
            }).call(function () {
              _this5.innerWinEffGroup.children[_this5.mulWinIndex].active = true;
              _this5.outerWinEffGroup.children[_this5.outRingIndex].active = true;
              // AudioMgr.inst.playOneShot(PandaGameRes.res.guangQuanEff, "");
              _this5.innerWinEff.active = true;
              _this5.innerSpinEffNode.active = false;
              _this5.marble.active = false;
              _this5.ballTracking = false;
              if (_this5._spinEffId != -1) AudioMgr.inst.stopOneShot(_this5._spinEffId, PandaGameRes.res.spinEff, ModuleDef.SLOTS_PANDA), _this5._spinEffId = -1;
            }).start();
            var uio2 = this.node.getComponent(UIOpacity);
            uio2.opacity = 255;
            tween(uio2).delay(3.45).to(0.2, {
              opacity: 0
            }).call(function () {
              _this5.ballTracking = false;
              _this5.node.active = false;
              director.emit(GameEvent.exitMiniGame);
            }).start();
          }
        };
        _proto.stopSound = function stopSound(res) {
          var _this$soundGroup$find;
          return (_this$soundGroup$find = this.soundGroup.find(function (v) {
            return v.res == res;
          })) == null ? void 0 : _this$soundGroup$find.uuid;
        };
        _proto.onTouchOK = function onTouchOK() {
          var _this6 = this;
          console.log("点了OK");
          director.emit(PandaGameEvent.event.enterMiniGame, "");
          var uio = this.enterMiniGamePop.getComponent(UIOpacity);
          AudioMgr.inst.playOneShot(PandaGameRes.res.click, 1, ModuleDef.SLOTS_PANDA);
          this.marble.position = v3(0, 408.7);
          this.innerRing.angle = 0;
          this.outerRing.angle = 0;
          this.angle = 0;
          this._angle = 0;
          this.init();
          tween(uio).to(0.2, {
            opacity: 0
          }).call(function () {
            // root.audio.stop(PandaGameRes.res.miniSpin);
            _this6.node.active = true;
            _this6.pandaAni.setAnimation(0, "animation", false);
            var uio2 = _this6.node.getComponent(UIOpacity);
            uio2.opacity = 0;
            tween(uio2).to(0.2, {
              opacity: 255
            }).start();
            _this6.enterMiniGamePop.active = false;
          }).start();
        };
        _proto.playBallHit = function playBallHit() {
          var _this7 = this;
          var audioArr = [PandaGameRes.res.ballHit1, PandaGameRes.res.ballHit2, PandaGameRes.res.ballHit3];
          audioArr.forEach(function (v, i) {
            if (v.indexOf(_this7.nowPlayingSound) > -1) {
              audioArr.splice(i, 1);
            }
          });
          var sound = audioArr[Math.floor(Math.random() * audioArr.length)];
          this.nowPlayingSound = sound;
          AudioMgr.inst.playOneShot(this.nowPlayingSound, 1, ModuleDef.SLOTS_PANDA);
        };
        _proto.isPointInCircleAround = function isPointInCircleAround(point, center, radius, threshold) {
          if (threshold === void 0) {
            threshold = 0.92;
          }
          // 计算点到圆心的距离
          var distance = Vec2.distance(point, center);
          // 判断距离是否小于等于半径加上阈值
          return distance > radius * threshold;
        }

        /**
         * 
         * @param vec1 
         * @param vec2 
         * @returns 两点夹角弧度
         */;
        _proto.getAngleBetweenVectors = function getAngleBetweenVectors(vec1, vec2) {
          // 计算向量的点积
          var dotProduct = vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
          // 计算向量的模长
          var magnitude1 = Math.sqrt(vec1.x * vec1.x + vec1.y * vec1.y + vec1.z * vec1.z);
          var magnitude2 = Math.sqrt(vec2.x * vec2.x + vec2.y * vec2.y + vec2.z * vec2.z);
          // 计算夹角的余弦值
          var cosineTheta = dotProduct / (magnitude1 * magnitude2);
          // 使用反余弦函数计算夹角的弧度值
          var angleInRadians = Math.acos(cosineTheta);
          return angleInRadians;
        };
        return PandaGameMiniGame;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "outerRing", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "innerRing", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "marble", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mulNumGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnStart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mainBtnPlay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconSFGroup", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pandaAni", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "enterMiniGamePop", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "innerSpinEffNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "innerWinEff", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "innerWinEffGroup", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "outerWinEffGroup", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaGameRes.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "14a2fnhGOxI1LMHs8e66sMJ", "PandaGameRes", undefined);
      var _res = {
        mainGameBGM: "sound/AC_sound_8003_music_interface_001",
        miniGameBGM: "sound/AC_sound_8003_music_interface_002",
        bigWinBGM: "sound/AC_sound_8003_music_interface_003",
        click: "sound/AC_sound_8003_panda_UI_button_001",
        startSpin: "sound/AC_sound_8003_panda_turntable_glitter",
        stopSpin: "sound/AC_sound_8003_panda_turntable_stop",
        singleLine: "sound/AC_sound_8003_panda_connect_single",
        allLines: "sound/AC_sound_8003_panda_connect_multiple",
        tipsPopWin: "sound/AC_sound_8003_panda_card_integral",
        bigWinRollNumber: "sound/AC_sound_8003_panda_number_collect",
        bigWin1: "sound/AC_sound_8003_panda_score_treasure_001",
        bigWin2: "sound/AC_sound_8003_panda_score_treasure_002",
        bigWin3: "sound/AC_sound_8003_panda_score_treasure_003",
        fakeMini: "sound/AC_sound_8003_panda_change_error",
        enterMiniGame: "sound/AC_sound_8003_panda_change",
        miniSpin: "sound/AC_sound_8003_panda_card_roll",
        riseEff: "sound/AC_sound_8003_panda_score_collect_rise",
        X10Eff: "sound/AC_sound_8003_panda_minigame_score10",
        allSameX10Eff: "sound/AC_sound_8003_panda_minigame_score10_001",
        pandaEat: "sound/AC_sound_8003_panda_eat",
        pandaSleep: "sound/AC_sound_8003_panda_sleep",
        pandaLook1: "sound/AC_sound_8003_panda_look_01",
        pandaLook2: "sound/AC_sound_8003_panda_look_02",
        pandaLook3: "sound/AC_sound_8003_panda_look_03",
        pandaAngry: "sound/AC_sound_8003_panda_angry",
        pandaAmazed: "sound/AC_sound_8003_panda_amazed",
        pandaCelebrate1: "sound/AC_sound_8003_panda_celebrate_001",
        pandaCelebrate2: "sound/AC_sound_8003_panda_celebrate_002",
        opening: "sound/AC_sound_8003_panda_opening",
        baseX10Eff: "sound/AC_sound_8003_panda_score10_appear",
        //--------------miniGame------------//
        dropBall: "sound/AC_sound_8003_panda_ball_downfall_001",
        ballSpin: "sound/AC_sound_8003_panda_ball_roll_loop",
        xiaoQuan: "sound/AC_sound_8003_panda_ball_roll_rotate_loop_001",
        daQuan: "sound/AC_sound_8003_panda_ball_turntable",
        //循环资源  同时播放   需要加速和减速
        ballHit1: "sound/AC_sound_8003_panda_ball_impact_001",
        ballHit2: "sound/AC_sound_8003_panda_ball_impact_002",
        ballHit3: "sound/AC_sound_8003_panda_ball_impact_003",
        spinEff: "sound/AC_sound_8003_panda_ball_chime_appear",
        guangQuanEff: "sound/AC_sound_8003_panda_ball_roll_light"
      };
      var PandaGameRes = exports('default', function PandaGameRes() {});
      PandaGameRes.res = _res;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaInterface.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e1b71/FCYNKzYsIJAdEppeG", "PandaInterface", undefined);
      var EPandaAni = exports('EPandaAni', /*#__PURE__*/function (EPandaAni) {
        EPandaAni[EPandaAni["Idle"] = 0] = "Idle";
        EPandaAni[EPandaAni["CelebrationLv1"] = 1] = "CelebrationLv1";
        EPandaAni[EPandaAni["CelebrationLv2"] = 2] = "CelebrationLv2";
        EPandaAni[EPandaAni["Eat"] = 3] = "Eat";
        EPandaAni[EPandaAni["Look"] = 4] = "Look";
        EPandaAni[EPandaAni["Drowsy"] = 5] = "Drowsy";
        EPandaAni[EPandaAni["Level1"] = 6] = "Level1";
        EPandaAni[EPandaAni["Amazed"] = 7] = "Amazed";
        return EPandaAni;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaMainControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameEvent.ts', './PandaGameData.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, director, Component, PandaGameEvent, PandaGameData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      PandaGameEvent = module.default;
    }, function (module) {
      PandaGameData = module.PandaGameData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "928bcOcYBBHFJ3e84eyKbJ/", "PandaMainControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameEvent = PandaGameEvent.event;
      var GameData = PandaGameData.data;
      var PandaMainControl = exports('PandaMainControl', (_dec = ccclass('PandaMainControl'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaMainControl, _Component);
        function PandaMainControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameMainTran = null;
          return _this;
        }
        var _proto = PandaMainControl.prototype;
        _proto.onLoad = function onLoad() {
          this.gameMainTran = this.node.getComponent(UITransform);
          // this.events.put(GameEvent.scene + root.game.id, (data: SlotPandaGameScene) => {
          //     console.log("sceneData:", data);
          //     GameData.sceneData = data;
          //     emitter.emit(GameEvent.init);
          // });
          //适配
          // const v = view.getVisibleSize();
          // const scaleV = v.height / this.gameMainTran.height;
          // this.node.scale = new Vec3(scaleV, scaleV, 1);
        };

        PandaMainControl.startGame = function startGame() {
          this.setData({
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
            fakeMiniRate: 10,
            lineCount: 10,
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
            }],
            miniMultiple: [1, 2, 3, 4, 5, 6, 7, 8]
          });
        };
        PandaMainControl.setData = function setData(res) {
          GameData.sceneData = res;
          director.emit(GameEvent.init, true);
        };
        return PandaMainControl;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PandaTipsPop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameData.ts', './PandaGameRes.ts', './Num.ts', './AudioMgr.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Label, ParticleSystem, Sprite, UIOpacity, v3, UITransform, tween, Vec3, Component, Tween, PandaGameData, PandaGameRes, Num, AudioMgr, ModuleDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      ParticleSystem = module.ParticleSystem;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
      Tween = module.Tween;
    }, function (module) {
      PandaGameData = module.PandaGameData;
    }, function (module) {
      PandaGameRes = module.default;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0267eZ7IyRIDqeoimWWHFKZ", "PandaTipsPop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameData = PandaGameData.data;
      var PandaTipsPop = exports('PandaTipsPop', (_dec = ccclass('PandaTipsPop'), _dec2 = property(SpriteFrame), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(ParticleSystem), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaTipsPop, _Component);
        function PandaTipsPop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tipsPopSFGroup", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreTxt", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipTxt", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effGroup", _descriptor4, _assertThisInitialized(_this));
          _this.playIndex = 0;
          return _this;
        }
        var _proto = PandaTipsPop.prototype;
        _proto.start = function start() {};
        _proto.resetBg = function resetBg() {
          this.node.getComponent(Sprite).spriteFrame = this.tipsPopSFGroup[0];
          this.effGroup.forEach(function (v) {
            v.node.active = false;
          });
        };
        _proto.setBg = function setBg(type) {
          this.node.getComponent(Sprite).spriteFrame = this.tipsPopSFGroup[type - 1];
          this.effGroup[type - 2].node.active = false;
          this.effGroup[type - 2].node.active = true;
          this.effGroup[type - 2].stop();
          this.effGroup[type - 2].play();
          this.effGroup[type - 2].node.children.forEach(function (v) {
            v.active = false;
            v.active = true;
            var eff = v.getComponent(ParticleSystem);
            eff.stop();
            eff.play();
          });
        };
        _proto.playTipsWinPop = function playTipsWinPop(num) {
          var _this2 = this;
          if (!num) return;
          var mul = num / GameData.gameData.betScore;
          this.tipTxt.node.active = false;
          this.scoreTxt.node.parent.active = true;
          var tipsPopGroup = this.scoreTxt.node.parent;
          var winTxt = this.scoreTxt.node;
          var winNode = this.scoreTxt.node.parent.getChildByName("winNode");
          var tipsPopUIO = tipsPopGroup.getComponent(UIOpacity);
          tipsPopGroup.scale = v3(1.2, 1.2, 1.2);
          this.scoreTxt.string = Num.exchangeToThousands(1, num);
          this.scheduleOnce(function () {
            winNode.position = v3(-winTxt.getComponent(UITransform).width / 2);
            winTxt.position = v3(winNode.position.x + winNode.getComponent(UITransform).width * winNode.scale.x / 2 + 10, 5);
            if (mul >= 10 && mul <= 20) {
              _this2.setBg(2);
            } else if (mul > 20 && mul <= 100) {
              _this2.setBg(3);
            } else if (mul > 100) {
              _this2.setBg(4);
            }
            AudioMgr.inst.playOneShot(PandaGameRes.res.tipsPopWin, 1, ModuleDef.SLOTS_PANDA);
            tween(tipsPopGroup).to(1, {
              scale: Vec3.ONE
            }, {
              easing: "bounceOut"
            }).start();
            tween(tipsPopUIO).to(0.05, {
              opacity: 255
            }).start();
          }, 0.001);
        };
        _proto.hideTipsPop = function hideTipsPop() {
          var _this3 = this;
          var tipsPopGroup = this.scoreTxt.node.parent;
          var tipsPopUIO = tipsPopGroup.getComponent(UIOpacity);
          var tipUIO = this.tipTxt.node.getComponent(UIOpacity);
          tipsPopUIO.opacity = 255;
          // this.tipTxt.string = I18n.ins().t("slotPanda_tip" + (this.playIndex + 1));
          tween(tipsPopUIO).to(0.05, {
            opacity: 0
          }).call(function () {
            _this3.scoreTxt.node.parent.active = false;
            _this3.resetBg();
            _this3.tipTxt.node.active = true;
            tipUIO.opacity = 255;
          }).start();
        };
        _proto.playTipsTxt = function playTipsTxt() {
          var _this4 = this;
          if (this.scoreTxt.node.parent.active) return;
          this.tipTxt.node.active = true;
          // this.tipTxt.string = I18n.ins().t("slotPanda_tip" + (this.playIndex + 1));
          var tipUIO = this.tipTxt.node.getComponent(UIOpacity);
          tipUIO.opacity = 0;
          var timer = function timer() {
            Tween.stopAllByTarget(_this4.tipTxt.node);
            Tween.stopAllByTarget(_this4.tipTxt.node.getComponent(UIOpacity));
            tween(tipUIO).to(0.25, {
              opacity: 255
            }).start();
            _this4.tipTxt.node.position = v3(_this4.tipTxt.node.getComponent(UITransform).width > _this4.tipTxt.node.parent.getComponent(UITransform).width ? -_this4.tipTxt.node.getComponent(UITransform).width / 2 + (_this4.tipTxt.node.getComponent(UITransform).width - _this4.tipTxt.node.parent.getComponent(UITransform).width) / 2 : -_this4.tipTxt.node.getComponent(UITransform).width / 2, 3.579);
            _this4.playIndex == 2 && tween(_this4.tipTxt.node).delay(3).to(7, {
              position: v3(-1779.265, 3.579)
            }).start();
            tween(tipUIO).to(0.25, {
              opacity: 255
            }).start();
            tween(tipUIO).delay(9.5).to(0.25, {
              opacity: 0
            }).start();
            _this4.playIndex = _this4.playIndex >= 2 ? 0 : _this4.playIndex + 1;
          };
          this.scheduleOnce(timer, 0.001);
        };
        return PandaTipsPop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipsPopSFGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "effGroup", [_dec5], {
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

System.register("chunks:///_virtual/PandaWinIcon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PandaGameData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, sp, Label, ParticleSystem, Sprite, Component, PandaGameData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Label = module.Label;
      ParticleSystem = module.ParticleSystem;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      PandaGameData = module.PandaGameData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "fe179fi8uVIsaLxs7QqzVoN", "PandaWinIcon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PandaWinIcon = exports('PandaWinIcon', (_dec = ccclass('PandaWinIcon'), _dec2 = property(SpriteFrame), _dec3 = property(sp.SkeletonData), _dec4 = property(Label), _dec5 = property(ParticleSystem), _dec6 = property(ParticleSystem), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PandaWinIcon, _Component);
        function PandaWinIcon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //测试
          _initializerDefineProperty(_this, "iconSFGroup", _descriptor, _assertThisInitialized(_this));
          //正式
          _initializerDefineProperty(_this, "iconSPGroup", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "priceTxt", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildEff", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildTxtEff", _descriptor5, _assertThisInitialized(_this));
          _this._isHit = false;
          _this.iconSP = void 0;
          return _this;
        }
        var _proto = PandaWinIcon.prototype;
        _proto.start = function start() {
          this.iconSP = this.node.getComponent(sp.Skeleton);
          PandaGameData.setNodesByComponent(this.node);
        }
        //传入icon对应编号 测试-------------
        ;

        _proto.setSkin = function setSkin(number) {
          var index = 0;
          index = number < 200 ? number % 100 : 6;
          // console.log(index);
          //测试
          this.node.getComponent(Sprite).spriteFrame = this.iconSFGroup[index];

          //正式
          // this.node.getComponent(sp.Skeleton).skeletonData = this.iconSPGroup[index];
        };

        _proto.setPos = function setPos(v3) {
          this.node.position = v3;
        }
        //传入SpData对应编号 正式
        ;

        _proto.setSpData = function setSpData(number) {
          this.iconSP = this.node.getComponent(sp.Skeleton);
          var index = 0;
          index = number < 200 ? number % 100 - 1 : 6;
          if (index >= this.iconSPGroup.length - 1) {
            // console.log(index, this.iconSPGroup.length, "暂时没这个东西");
            this.iconSP.premultipliedAlpha = true;
          } else {
            // console.log(index);
            this.iconSP.premultipliedAlpha = false;
          }
          this.iconSP.skeletonData = this.iconSPGroup[index];
        }
        //正式
        ;

        _proto.playAni = function playAni(isHit) {
          var _this2 = this;
          this._isHit = isHit;
          this.node.active = true;
          if (isHit) {
            var ani = this.iconSP.setAnimation(0, "2", false);
            var delay = this.iconSP.getState().tracks[0].animation.duration;
            // console.log("动画连线成功持续时间:", this.iconSP, ani, + delay);
            this.scheduleOnce(function () {
              _this2.iconSP.setAnimation(0, "3", false);
            }, delay);
          } else {
            this.iconSP.setAnimation(0, "3", false);
          }
        };
        _proto.playClickIcon = function playClickIcon() {
          this.playAni(true);
        };
        _proto.update = function update(deltaTime) {};
        return PandaWinIcon;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSFGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconSPGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "priceTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wildEff", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wildTxtEff", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotPandaGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './RoomMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d1ccaXa4BdJTZqeaOnkQDTa", "SlotPandaGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotPandaGameMgr = exports('SlotPandaGameMgr', (_dec = ccclass('SlotPandaGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotPandaGameMgr, _GameMgr);
        function SlotPandaGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._porcessFun = void 0;
          _this._gameType = SubGameDef.SLOTS_PANDA;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_panda',
            bundle: ModuleDef.SLOTS_PANDA
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotPandaGameMgr.prototype;
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
        _createClass(SlotPandaGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotPandaGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotPandaGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotPandaGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_panda', 'chunks:///_virtual/module_slots_panda'); 
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