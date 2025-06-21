System.register("chunks:///_virtual/advertise.ts", ['cc', './wxManager.ts'], function (exports) {
  var cclegacy, sys, WxMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      WxMgr = module.WxMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d7442HqVwxNSb0myN0lLnRZ", "advertise", undefined);
      var Ads = exports('Ads', /*#__PURE__*/function () {
        // 插屏r广告id
        function Ads() {
          this.bannerAdv = null;
          //banner广告
          this.videoAdv = null;
          //激励式视频广告
          this.interstitialAd = null;
          //插屏广告
          this.bannerId = "adunit-f6703c590ddf0256";
          // banner广告id
          this.videoId = "adunit-f57876a79b9b8840";
          // 激励式视频广告id
          this.interstitialId = "adunit-8abcfe05f1ccfe37";
          this.init();
        }
        var _proto = Ads.prototype;
        _proto.init = function init() {
          if (sys.platform != sys.Platform.WECHAT_GAME) return;
          console.log('--------------init ads-----------------');
          // @ts-ignore
          var winSize = wx.getSystemInfoSync(); //获取像素size
          // 创建 Banner 广告实例，提前初始化
          var bannerWidth = 300;
          var bannerHeight = 80;
          // @ts-ignore
          var bannerAdv = wx.createBannerAd({
            adUnitId: this.bannerId,
            //传入自己的id，此处为banner广告位ID
            adIntervals: 30,
            //定时刷新，最低30S
            style: {
              left: (winSize.windowWidth - bannerWidth) / 2,
              top: winSize.windowHeight - bannerHeight,
              width: bannerWidth
            }
          });
          this.bannerAdv = bannerAdv;
          //重新定banner位置
          bannerAdv.onResize(function (res) {
            bannerAdv.style.top = winSize.windowHeight - bannerAdv.style.realHeight - 1;
          });
          // // 在适合的场景显示 Banner 广告
          // bannerAdv.show();//不建议直接显示
          //拉取失败处理
          bannerAdv.onError(function (err) {
            console.log(err);
          });

          // @ts-ignore 创建激励视频广告实例，提前初始化
          var videoAdv = wx.createRewardedVideoAd({
            adUnitId: this.videoId //传入自己的id，此处为视频广告位ID
          });

          videoAdv.onError(function (err) {
            console.log(err);
          });
          this.videoAdv = videoAdv;
          // 创建插屏广告实例，提前初始化
          // @ts-ignore
          if (wx.createInterstitialAd) {
            // @ts-ignore
            var interstitialAd = wx.createInterstitialAd({
              adUnitId: this.interstitialId //传入自己的id，此处为插屏广告位ID
            });

            this.interstitialAd = interstitialAd;
          }
        }
        //显示banner广告
        ;

        _proto.showBannerAds = function showBannerAds() {
          if (sys.platform != sys.Platform.WECHAT_GAME) return;
          // 在适合的场景显示 Banner 广告
          // @ts-ignore
          this.bannerAdv.show();
        }

        // 隐藏banner广告
        ;

        _proto.hideBannerAds = function hideBannerAds() {
          if (sys.platform != sys.Platform.WECHAT_GAME) return;
          // @ts-ignore
          this.bannerAdv.hide();
        }

        //显示视频广告
        ;

        _proto.showVideoAds = function showVideoAds() {
          if (sys.platform != sys.Platform.WECHAT_GAME) {
            // App.view.showMsgTips("请在小程序上测试");
            return;
          }
          // 在适合的场景显示 Video 广告
          // @ts-ignore
          var videoAdv = this.videoAdv;
          // 用户触发广告后，显示激励视频广告
          // @ts-ignore
          videoAdv.show()["catch"](function () {
            // 失败重试
            // @ts-ignore
            videoAdv.load()
            // @ts-ignore
            .then(function () {
              return videoAdv.show();
            })["catch"](function (err) {
              console.log('激励视频 广告显示失败');
            });
          });
          // @ts-ignore
          //拉取异常处理
          videoAdv.onError(function (err) {
            console.log(err);
          });

          // @ts-ignore
          videoAdv.onClose(function (res) {
            if (!videoAdv) return;
            // @ts-ignore
            videoAdv.offClose(); //需要清除回调，否则第N次广告会一次性给N个奖励
            //关闭
            if (res && res.isEnded || res === undefined) {
              //正常播放结束，需要下发奖励
              WxMgr.pushReward();
            }
          });
        }

        // 显示插件广告
        ;

        _proto.showInterstitialAds = function showInterstitialAds() {
          if (sys.platform != sys.Platform.WECHAT_GAME) return;
          var interstitialAd = this.interstitialAd;
          // 在适合的场景显示插屏广告
          if (interstitialAd) {
            // @ts-ignore
            interstitialAd.show()["catch"](function (err) {
              console.error(err);
            });
          }
        };
        return Ads;
      }());
      var Advertise = exports('Advertise', new Ads());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/app.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singletonClass.ts', './i18nManager.ts', './eventManager3.ts', './viewManager.ts', './audioManager2.ts', './subGameManager.ts', './userInfo2.ts', './noticeManager.ts', './storageHelper.ts', './timeManager.ts', './gameLogic.ts', './wxManager.ts', './viewNameConst.ts', './levelConfig.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, sys, SingletonClass, I18nManager, EventManager, ViewManager, AudioManager, SubGameManager, UserInfo, NoticeManager, StorageHelper, TimeManager, GameLogic, WxMgr, ViewName, LevelConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }, function (module) {
      I18nManager = module.I18nManager;
    }, function (module) {
      EventManager = module.EventManager;
    }, function (module) {
      ViewManager = module.ViewManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      SubGameManager = module.SubGameManager;
    }, function (module) {
      UserInfo = module.UserInfo;
    }, function (module) {
      NoticeManager = module.NoticeManager;
    }, function (module) {
      StorageHelper = module.StorageHelper;
    }, function (module) {
      TimeManager = module.default;
    }, function (module) {
      GameLogic = module.GameLogic;
    }, function (module) {
      WxMgr = module.WxMgr;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      LevelConfig = module.LevelConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4ce7alO+7RBO5WbUuJ1gzr2", "app", undefined);
      /**
       * App管理
       */
      var GameApp = /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(GameApp, _SingletonClass);
        function GameApp() {
          return _SingletonClass.apply(this, arguments) || this;
        }
        var _proto = GameApp.prototype;
        _proto.onInit = /*#__PURE__*/function () {
          var _onInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(canvas) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // this.net.init();
                  // this.i18n.init();
                  // this.subGame.init();
                  // this.platform.init();
                  App.user.init();
                  this.audio.init(canvas);
                  this.view.init(canvas);
                  this.timer.init();
                  this.gameLogic.init();
                  StorageHelper.initData();
                  LevelConfig.initData();
                  // this.addEvent();
                  if (sys.platform == sys.Platform.WECHAT_GAME) {
                    WxMgr.init();
                  }
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onInit(_x) {
            return _onInit.apply(this, arguments);
          }
          return onInit;
        }();
        _proto.addEvent = function addEvent() {
          // view.setResizeCallback(this.evtResizeCallback.bind(this));
        };
        _proto.backHome = function backHome() {
          App.gameLogic.clearData();
          App.view.closeView(ViewName.Single.eFeedView);
          App.view.closeView(ViewName.Single.eGameView);
          App.view.openView(ViewName.Single.eHomeView);
        };
        _proto.setBackLobby = function setBackLobby() {}

        //窗口大小变化监听
        ;

        _proto.evtResizeCallback = function evtResizeCallback() {
          // App.event.emit(EventName.Lobby.SCROLLING);
        };
        _createClass(GameApp, [{
          key: "user",
          get: function get() {
            return UserInfo.getInstance(UserInfo);
          }
        }, {
          key: "subGame",
          get: function get() {
            return SubGameManager.getInstance(SubGameManager);
          }
        }, {
          key: "view",
          get: function get() {
            return ViewManager.getInstance(ViewManager);
          }
        }, {
          key: "event",
          get: function get() {
            return EventManager.getInstance(EventManager);
          }
          // get net() { return NetManager.getInstance<NetManager>(NetManager); }
        }, {
          key: "audio",
          get: function get() {
            return AudioManager.getInstance(AudioManager);
          }
        }, {
          key: "i18n",
          get: function get() {
            return I18nManager.getInstance(I18nManager);
          }
        }, {
          key: "notice",
          get: function get() {
            return NoticeManager.getInstance(NoticeManager);
          }
        }, {
          key: "timer",
          get: function get() {
            return TimeManager.getInstance(TimeManager);
          }
        }, {
          key: "gameLogic",
          get: function get() {
            return GameLogic.getInstance(GameLogic);
          }
        }]);
        return GameApp;
      }(SingletonClass);
      var App = exports('App', GameApp.getInstance(GameApp));
      // 原生调js需要
      window["JsApp"] = App;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/audioManager2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './resLoadHelper.ts', './storageHelper.ts', './app.ts', './singletonClass.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, AudioSource, js, ResLoadHelper, StorageHelper, StorageHelperKey, App, SingletonClass, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioSource = module.AudioSource;
      js = module.js;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }, function (module) {
      App = module.App;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eae15ASC5VJp5ccv+3GN6+u", "audioManager", undefined);

      /** 配置属性 */

      /** 声音类型 */
      var SoundType = exports('SoundType', /*#__PURE__*/function (SoundType) {
        SoundType[SoundType["Music"] = 1] = "Music";
        SoundType[SoundType["Effect"] = 2] = "Effect";
        return SoundType;
      }({}));

      /**
       * 声音管理
       */
      var AudioManager = exports('AudioManager', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(AudioManager, _SingletonClass);
        function AudioManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SingletonClass.call.apply(_SingletonClass, [this].concat(args)) || this;
          _this._audioVol = 1.0;
          _this._isHide = false;
          // 储存AudioClip
          _this._commonClipCache = js.createMap();
          _this._bgAudio = undefined;
          _this._effectCtrlAudio = undefined;
          return _this;
        }
        var _proto = AudioManager.prototype;
        // 灵活控制音效
        _proto.onInit = function onInit(bindNode) {
          var _this2 = this;
          this._audioVol = StorageHelper.getData(StorageHelperKey.Audio_Volume, 1.0);
          this._isHide = !this._audioVol;
          this._bgAudio = bindNode.getComponent(AudioSource) || bindNode.addComponent(AudioSource);
          this._bgAudio.volume = this._audioVol;
          this._effectCtrlAudio = bindNode.addComponent(AudioSource);
          this._commonClipCache = js.createMap();
          App.event.off('hide', this);
          App.event.off('show', this);
          App.event.on('hide', function () {
            _this2._isHide = true;
            _this2._bgAudio.stop();
          }, this);
          App.event.on('show', function () {
            _this2._isHide = false;
            _this2._audioVol > 0 && _this2._bgAudio.play();
          }, this);
        };
        _proto.onDestroy = function onDestroy() {
          this._bgAudio.destroy();
          delete this._bgAudio;
          this._effectCtrlAudio.destroy();
          delete this._effectCtrlAudio;
        };
        _proto.keepPlay = function keepPlay() {
          if (this._bgAudio) {
            this._audioVol > 0 && !this._bgAudio.playing && this._bgAudio.play();
          }
        }

        /**
         * 播放声音
         * @param soundKey 
         * @param isInterrupt 是否可中断
         * @returns 
         */;
        _proto.play = /*#__PURE__*/
        function () {
          var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(soundKey, type, isLoop, isInterrupt) {
            var clip;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (type === void 0) {
                    type = SoundType.Effect;
                  }
                  if (isLoop === void 0) {
                    isLoop = false;
                  }
                  if (isInterrupt === void 0) {
                    isInterrupt = false;
                  }
                  // if (this._isHide) return;
                  clip = this._commonClipCache[soundKey];
                  if (clip) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 7;
                  return ResLoadHelper.loadCommonAudioClip(soundKey);
                case 7:
                  clip = _context.sent;
                  this._commonClipCache[soundKey] = clip;
                case 9:
                  if (clip) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return");
                case 11:
                  this.playClip(soundKey, type, clip, isLoop, isInterrupt);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function play(_x, _x2, _x3, _x4) {
            return _play.apply(this, arguments);
          }
          return play;
        }();
        _proto.playClip = function playClip(soundCfg, type, clip, isLoop, isInterrupt) {
          // 背景音乐先保存下来
          if (isLoop) {
            this._bgAudio.stop();
            this._bgAudio.clip = clip;
            this._bgAudio.loop = true;
          }

          // 音乐开关
          var isOpenMusic = StorageHelper.getBooleanData(StorageHelperKey.Music_Status);
          if (type == SoundType.Music && !isOpenMusic) {
            return;
          }
          var isOpenEff = StorageHelper.getBooleanData(StorageHelperKey.Music_Eff_Status);
          if (type == SoundType.Effect && !isOpenEff) {
            return;
          }
          Logger.trace("  播放声音 = " + soundCfg);
          if (isLoop) {
            this._bgAudio.play();
          } else {
            // 可随时中断的音效
            this._effectCtrlAudio.clip = clip;
            this._effectCtrlAudio.loop = false;
            this._effectCtrlAudio.play();
          }
        }

        /**
         * 设置声音是否启用
         */;
        _proto.setMusicOpen = function setMusicOpen(isOpen) {
          var vol = isOpen ? 1 : 0;
          this.setVolume(vol);
        };
        _proto.resumeMusic = function resumeMusic() {
          this.setMusicOpen(true);
          this._bgAudio.play();
        };
        _proto.stopMusic = function stopMusic() {
          this.setMusicOpen(false);
          this._bgAudio.stop();
          this.stopEffect();
        }

        /**
         * 需要及时停止的音效单独处理
         */;
        _proto.stopEffect = function stopEffect() {
          this._effectCtrlAudio.stop();
        };
        /**
         * 设置音乐（效）音量
         * @param vol 音量
         */
        _proto.setVolume = function setVolume(vol) {
          this._bgAudio.volume = vol;
          this._audioVol = vol;
          StorageHelper.setData(StorageHelperKey.Audio_Volume, this._audioVol);
        };
        _createClass(AudioManager, [{
          key: "isOpen",
          get: function get() {
            return this._audioVol > 0;
          }
        }, {
          key: "volumes",
          get:
          /**
           * 获取音量，包括音乐和音效
           */
          function get() {
            return this._audioVol;
          }
        }]);
        return AudioManager;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/baseNodeCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocosHelper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, EditBox, Component, CocosHelper;
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
      Node = module.Node;
      EditBox = module.EditBox;
      Component = module.Component;
    }, function (module) {
      CocosHelper = module.CocosHelper;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "90094idqPxATKI/FUpezPN8", "baseNodeCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 点击按钮等待时间 */
      var CLICK_WAIT_TIME = 0;
      /**
       * 处理基本节点
       */
      var BaseNodeCmpt = exports('BaseNodeCmpt', (_dec = ccclass("baseNodeCmpt"), _dec2 = property({
        displayName: '是否遍历所有节点'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseNodeCmpt, _Component);
        function BaseNodeCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isSelectNode", _descriptor, _assertThisInitialized(_this));
          /** 当前所有的节点 */
          _this.viewList = new Map();
          return _this;
        }
        var _proto = BaseNodeCmpt.prototype;
        /**
         * 组件加载时调用
         */
        _proto.onLoad = function onLoad() {
          // 如果需要遍历所有节点，则调用 selectChild 方法
          if (this.isSelectNode) {
            this.selectChild(this.node);
          }
          this.addEvent();
        };
        _proto.addEvent = function addEvent() {};
        _proto.onDestroy = function onDestroy() {
          this.node.destroy();
        }

        /**
         * 根据节点名称获取节点
         * @param name 节点名称
         * @returns 返回指定名称的节点，如果不存在则返回 null
         */;
        _proto.getNodeByName = function getNodeByName(name) {
          return this.viewList.get(name) || null;
        }

        /**
         * 遍历所有子节点，将节点存储到 viewList 中
         * @param node 当前节点
         * @param pName 当前节点的路径
         */;
        _proto.selectChild = function selectChild(node, pName) {
          if (pName === void 0) {
            pName = '';
          }
          // 使用一个栈来遍历所有节点，避免递归调用带来的性能问题。
          var stack = [[node, pName]];
          while (stack.length > 0) {
            var _ref = stack.pop(),
              curNode = _ref[0],
              curPath = _ref[1];
            // 将节点存储到 viewList 中，以当前节点的路径作为键
            this.viewList.set(curPath, curNode);
            // 绑定按钮事件
            this._bingButton(curNode);
            // 绑定输入框事件
            this._bingEditBox(curNode);
            var children = curNode.children;
            // 遍历当前节点的所有子节点，并将其添加到栈中
            for (var i = children.length - 1; i >= 0; i--) {
              var childNode = children[i];
              var childPath = curPath ? curPath + "/" + childNode.name : childNode.name;
              // 将子节点添加到栈中
              stack.push([childNode, childPath]);
            }
          }
        }

        /**
         * 为按钮绑定事件
         * @param node 节点
         * @returns 
         */;
        _proto._bingButton = function _bingButton(node) {
          if (!node.getComponent(Button)) return;
          // App.audio.play('button_click')
          var btn = node.getComponent(Button);
          btn.transition = Button.Transition.SCALE;
          btn.zoomScale = 0.95;
          if (this['onClick_' + node.name + "_Start"]) {
            CocosHelper.addButtonLister(node, Node.EventType.TOUCH_START, this['onClick_' + node.name + "_Start"].bind(this, node), this, CLICK_WAIT_TIME);
          }
          if (this['onClick_' + node.name + "_End"]) {
            CocosHelper.addButtonLister(node, Node.EventType.TOUCH_END, this['onClick_' + node.name + "_End"].bind(this, node), this, CLICK_WAIT_TIME);
          }
          if (this['onClick_' + node.name]) {
            CocosHelper.addButtonLister(node, Node.EventType.TOUCH_END, this['onClick_' + node.name].bind(this, node), this, CLICK_WAIT_TIME);
          }
        }

        /**
         * 为输入框绑定回调事件
         * @param node 节点
         * @returns 
         */;
        _proto._bingEditBox = function _bingEditBox(node) {
          if (!node.getComponent(EditBox)) return;
          if (this['onEditEnd_' + node.name]) {
            CocosHelper.addEditBoxLister(node, this['onEditEnd_' + node.name].bind(this, node.getComponent(EditBox)), this, CLICK_WAIT_TIME, "editing-did-ended");
          }
          if (this['onEditChange_' + node.name]) {
            CocosHelper.addEditBoxLister(node, this['onEditChange_' + node.name].bind(this, node.getComponent(EditBox)), this, CLICK_WAIT_TIME, "text-changed");
          }
        };
        return BaseNodeCmpt;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "isSelectNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/baseViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './enumConst.ts', './app.ts', './cocosHelper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, Widget, BlockInputEvents, Node, Layers, UITransform, view, v3, tween, easing, Sprite, Color, Button, EditBox, Component, WindowType, WindowOpenType, App, CocosHelper;
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
      Enum = module.Enum;
      Widget = module.Widget;
      BlockInputEvents = module.BlockInputEvents;
      Node = module.Node;
      Layers = module.Layers;
      UITransform = module.UITransform;
      view = module.view;
      v3 = module.v3;
      tween = module.tween;
      easing = module.easing;
      Sprite = module.Sprite;
      Color = module.Color;
      Button = module.Button;
      EditBox = module.EditBox;
      Component = module.Component;
    }, function (module) {
      WindowType = module.WindowType;
      WindowOpenType = module.WindowOpenType;
    }, function (module) {
      App = module.App;
    }, function (module) {
      CocosHelper = module.CocosHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "c1d62bgGM9HkauYhtJLePWO", "baseViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 点击按钮等待时间 */
      var CLICK_WAIT_TIME = 0;
      /**
       * 处理基本窗口
       */
      var BaseViewCmpt = exports('BaseViewCmpt', (_dec = ccclass("baseViewCmpt"), _dec2 = property({
        displayName: '是否遍历所有节点'
      }), _dec3 = property({
        type: Enum(WindowType),
        displayName: '窗口类型'
      }), _dec4 = property({
        type: Enum(WindowOpenType),
        displayName: '打开类型'
      }), _dec5 = property({
        displayName: '是否添加全屏Widget'
      }), _dec6 = property({
        displayName: '是否遮罩'
      }), _dec7 = property({
        displayName: '点击空白地方是否关闭窗口'
      }), _dec8 = property({
        displayName: '是否播放打开界面动画,animNode为播放动画的节点'
      }), _dec9 = property({
        displayName: '是否截屏模糊背景'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseViewCmpt, _Component);
        function BaseViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isSelectNode", _descriptor, _assertThisInitialized(_this));
          /** 当前所有的节点 */
          _this.viewList = new Map();
          _initializerDefineProperty(_this, "viewType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "viewOpenType", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isAddFullWidget", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isMask", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isTouchSpaceClose", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isPlayOpenAnim", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isScreeShoot", _descriptor8, _assertThisInitialized(_this));
          _this.maskPanel = void 0;
          _this.closeCallBack = void 0;
          _this.extraData = void 0;
          /** 是否在小游戏中 */
          _this.isInGame = false;
          return _this;
        }
        var _proto = BaseViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          // 如果需要遍历所有节点，则调用 selectChild 方法
          if (this.isSelectNode) {
            this.selectChild(this.node);
          }
          if (this.isPlayOpenAnim) {
            this.openAnim();
          }
          this.addEvents();
          if (this.isAddFullWidget) {
            // 适配
            var widget = this.node.addComponent(Widget);
            widget.isAlignTop = true;
            widget.top = 0;
            widget.isAlignBottom = true;
            widget.bottom = 0;
            widget.isAlignLeft = true;
            widget.left = 0;
            widget.isAlignRight = true;
            widget.right = 0;
          }
          if (this.isMask) {
            // 添加遮罩
            this.addMask();
          }
          if (this.isTouchSpaceClose) {
            this.addSpaceEvent();
          }
          if (this.isScreeShoot) {
            this.screeShot();
          }
        }

        /** 加载额外的数据 */;
        _proto.loadExtraData = function loadExtraData() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          this.extraData = args;
        };
        _proto.addEvents = function addEvents() {}

        /** 设置屏蔽层显示 */;
        _proto.setMaskVis = function setMaskVis(visible) {
          if (!this.maskPanel) return;
          this.maskPanel.active = visible;
        }

        /** 取消屏蔽事件 */;
        _proto.cancelBlockInput = function cancelBlockInput() {
          if (!this.maskPanel) return;
          this.maskPanel.getComponent(BlockInputEvents) && this.maskPanel.removeComponent(BlockInputEvents);
        }

        /** 设置关闭回调 */;
        _proto.setCloseFunc = function setCloseFunc(callback) {
          this.closeCallBack = callback;
        };
        _proto.onClose = function onClose() {
          this.closeCallBack && this.closeCallBack.bind(this)(this);
          if (this.node) {
            this.node.removeFromParent();
            this.destroy();
          }
        }

        /** 添加空白点击事件 */;
        _proto.addSpaceEvent = function addSpaceEvent() {
          var _this2 = this;
          var maskNode = new Node();
          maskNode.layer = Layers.Enum.UI_2D;
          maskNode.addComponent(UITransform);
          var trans = maskNode.getComponent(UITransform);
          trans.setContentSize(view.getVisibleSize());
          this.node.addChild(maskNode);
          maskNode.setSiblingIndex(-1);
          maskNode.on(Node.EventType.TOUCH_END, function (event) {
            event.target == maskNode && _this2.onTouchSpace();
          });
        }

        /** 点击空白地方 */;
        _proto.onTouchSpace = function onTouchSpace() {
          this.onClick_closeBtn();
        }

        /** 默认关闭按钮 */;
        _proto.onClick_closeBtn = function onClick_closeBtn() {
          var viewName = this.node["viewName"];
          if (viewName) {
            App.view.closeView(viewName);
          } else {
            this.onClose();
          }
        };
        _proto.onDestroy = function onDestroy() {
          App.event.offAll(this);
        };
        _proto.openAnim = function openAnim(cb) {
          var animNode = this.viewList.get('animNode');
          if (animNode) {
            animNode.scale = v3(0, 0, 0);
            tween(animNode).to(0.2, {
              scale: v3(1, 1, 1)
            }, {
              easing: easing.backOut
            }).call(function () {
              cb && cb();
            }).start();
            // const scaleTo = scaleTo(0.2, 1).easing(easeBackOut());
            // tween(animNode).then(scaleTo).call(() => { cb && cb() }).start();
          }
        }

        /** 截屏模糊遮罩 */;
        _proto.screeShot = /*#__PURE__*/
        function () {
          var _screeShot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function screeShot() {
            return _screeShot.apply(this, arguments);
          }
          return screeShot;
        }();
        _proto.addMask = function addMask() {
          var maskNode = new Node();
          maskNode.layer = Layers.Enum.UI_2D;
          maskNode.addComponent(UITransform);
          var maskSprite = maskNode.addComponent(Sprite);
          maskSprite.type = Sprite.Type.SLICED;
          maskSprite.sizeMode = Sprite.SizeMode.CUSTOM;
          var trans = maskNode.getComponent(UITransform);
          trans.setContentSize(view.getVisibleSize());
          maskSprite.color = new Color(0, 0, 0, 180);
          this.node.addChild(maskNode);
          maskNode.setSiblingIndex(-2);
          this.maskPanel = maskNode;
          CocosHelper.updateCommonSpriteSync(maskNode, 'popbg/common');
          maskNode.addComponent(BlockInputEvents);
        }

        /**
         * 遍历所有子节点，将节点存储到 viewList 中
         * @param node 当前节点
         * @param pName 当前节点的路径
         */;
        _proto.selectChild = function selectChild(node, pName) {
          if (pName === void 0) {
            pName = '';
          }
          // 使用一个栈来遍历所有节点，避免递归调用带来的性能问题。
          var stack = [[node, pName]];
          while (stack.length > 0) {
            var _ref = stack.pop(),
              curNode = _ref[0],
              curPath = _ref[1];
            // 将节点存储到 viewList 中，以当前节点的路径作为键
            this.viewList.set(curPath, curNode);
            // 绑定按钮事件
            this._bingButton(curNode);
            // 绑定输入框事件
            this._bingEditBox(curNode);
            var children = curNode.children;
            // 遍历当前节点的所有子节点，并将其添加到栈中
            for (var i = children.length - 1; i >= 0; i--) {
              var childNode = children[i];
              var childPath = curPath ? curPath + "/" + childNode.name : childNode.name;
              // 将子节点添加到栈中
              stack.push([childNode, childPath]);
            }
          }
        }

        /**
         * 为按钮绑定事件
         * @param node 节点
         * @returns 
         */;
        _proto._bingButton = function _bingButton(node) {
          if (!node.getComponent(Button)) return;
          var btn = node.getComponent(Button);
          btn.transition = Button.Transition.SCALE;
          btn.zoomScale = 0.95;
          if (this['onClick_' + node.name + "_Start"]) {
            CocosHelper.addButtonLister(node, Node.EventType.TOUCH_START, this['onClick_' + node.name + "_Start"].bind(this, node), this, CLICK_WAIT_TIME);
          }
          if (this['onClick_' + node.name + "_End"]) {
            CocosHelper.addButtonLister(node, Node.EventType.TOUCH_END, this['onClick_' + node.name + "_End"].bind(this, node), this, CLICK_WAIT_TIME);
          }
          if (this['onClick_' + node.name]) {
            CocosHelper.addButtonLister(node, Node.EventType.TOUCH_END, this['onClick_' + node.name].bind(this, node), this, CLICK_WAIT_TIME);
          }
        }

        /**
         * 为输入框绑定回调事件
         * @param node 节点
         * @returns 
         */;
        _proto._bingEditBox = function _bingEditBox(node) {
          if (!node.getComponent(EditBox)) return;
          if (this['onEditEnd_' + node.name]) {
            CocosHelper.addEditBoxLister(node, this['onEditEnd_' + node.name].bind(this, node.getComponent(EditBox)), this, CLICK_WAIT_TIME, "editing-did-ended");
          }
          if (this['onEditChange_' + node.name]) {
            CocosHelper.addEditBoxLister(node, this['onEditChange_' + node.name].bind(this, node.getComponent(EditBox)), this, CLICK_WAIT_TIME, "text-changed");
          }
        };
        return BaseViewCmpt;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isSelectNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "viewType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return WindowType.eView;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "viewOpenType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return WindowOpenType.eSingle;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isAddFullWidget", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isMask", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isTouchSpaceClose", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isPlayOpenAnim", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "isScreeShoot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bulletCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './util.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, view, Collider2D, CircleCollider2D, Contact2DType, RigidBody2D, v3, Component, getQuadrantDegree, deg2Rad;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      Collider2D = module.Collider2D;
      CircleCollider2D = module.CircleCollider2D;
      Contact2DType = module.Contact2DType;
      RigidBody2D = module.RigidBody2D;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      getQuadrantDegree = module.getQuadrantDegree;
      deg2Rad = module.deg2Rad;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "40e67jvbiNBNZhqs52pa0qJ", "bulletCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var bulletCmpt = exports('bulletCmpt', (_dec = ccclass('bulletCmpt'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(bulletCmpt, _Component);
        function bulletCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.speed = 15;
          _this.speedX = 0;
          _this.speedY = 0;
          _this.bulletId = 0;
          _this.halfSW = 0;
          _this.halfSH = 0;
          _this.collider = null;
          _this.isDistoried = false;
          _this._bulletLev = 0;
          return _this;
        }
        var _proto = bulletCmpt.prototype;
        _proto.onLoad = function onLoad() {
          this.initColliderAndShader();
          var winSize = view.getVisibleSize();
          this.halfSW = winSize.width / 2;
          this.halfSH = winSize.height / 2;
        };
        _proto.showOne = function showOne() {
          var len = this.node.children.length;
          var idx = Math.floor(Math.random() * len);
          this.node.children.forEach(function (item) {
            return item.active = false;
          });
          this.node.children[idx].active = true;
        };
        _proto.initColliderAndShader = function initColliderAndShader() {
          this.collider = this.node.getComponent(Collider2D);
          if (!this.collider) {
            this.collider = this.node.getComponent(CircleCollider2D);
          }
          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this.collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        };
        _proto.chgColliderState = function chgColliderState(state) {
          if (this.collider) {
            this.collider.enabled = state;
            this.node.getComponent(RigidBody2D).enabledContactListener = state;
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
        };
        _proto.onDisable = function onDisable() {};
        _proto.onEndContact = function onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          // console.log('onEndContact');
        }

        //开始移动
        ;

        _proto.startMove = function startMove(spawnV, aimV) {
          var deg = getQuadrantDegree(spawnV, aimV);
          //一四象限
          if (deg >= 0) {
            deg = -deg;
          } else {
            //二三象限
            deg = -deg - 180;
          }
          this.node.angle = -deg - 90;
          //计算初始速度
          var rad = deg2Rad(deg);
          this.speedX = Math.cos(rad) * this.speed;
          this.speedY = Math.sin(rad) * this.speed;
          var absSpx = Math.abs(this.speedX);
          var absSpy = Math.abs(this.speedY);
          if (aimV.x > spawnV.x) {
            this.speedX = absSpx;
          } else {
            this.speedX = -absSpx;
          }
          if (aimV.y > spawnV.y) {
            this.speedY = absSpy;
          } else {
            this.speedY = -absSpy;
          }
        };
        _proto.update = function update() {
          if (this.isDistoried) return;
          this.move();
        };
        _proto.move = function move() {
          var curX = this.node.position.x;
          var curY = this.node.position.y;
          var pos = v3(this.node.position.x, this.node.position.y, this.node.position.z);
          if (curX + this.speedX < -this.halfSW) {
            pos.x = -this.halfSW;
            this.speedX = -this.speedX;
            //console.log("角度变化");
            this.node.angle = -this.node.angle;
          } else if (curX + this.speedX > this.halfSW) {
            pos.x = this.halfSW;
            this.speedX = -this.speedX;
            this.node.angle = -this.node.angle;
          } else if (curY + this.speedY > this.halfSH) {
            pos.y = this.halfSH;
            this.speedY = -this.speedY;
            this.node.angle = -(180 + this.node.angle) % 360;
          } else if (curY + this.speedY < -this.halfSH) {
            pos.y = -this.halfSH;
            this.speedY = -this.speedY;
            this.node.angle = -(180 + this.node.angle) % 360;
          } else {
            pos.x = curX + this.speedX;
            pos.y = curY + this.speedY;
          }
          this.node.setPosition(pos);
        };
        _createClass(bulletCmpt, [{
          key: "bulletLev",
          get: function get() {
            return this._bulletLev;
          },
          set: function set(data) {
            this._bulletLev = data;
            var index = this._bulletLev;
            this.node.children.forEach(function (item) {
              return item.active = false;
            });
            this.node.getChildByName("" + index).active = true;
          }
        }]);
        return bulletCmpt;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bulletMgrCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './enumConst.ts', './eventName.ts', './app.ts', './resLoadHelper.ts', './bulletCmpt.ts', './NetGameServer.ts', './SubGameMgr.ts', './FishWhaleGameMgr.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, instantiate, v2, view, Vec3, Component, Constant, EventName, App, ResLoadHelper, bulletCmpt, gameNet, SubGameMgr, FishWhaleGameMgr, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      v2 = module.v2;
      view = module.view;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Constant = module.Constant;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      bulletCmpt = module.bulletCmpt;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      FishWhaleGameMgr = module.FishWhaleGameMgr;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _class2;
      cclegacy._RF.push({}, "852b6O9EZRCHb6flkjbZPJf", "bulletMgrCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
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
      var bulletMgrCmpt = exports('bulletMgrCmpt', (_dec = ccclass('bulletMgrCmpt'), _dec(_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(bulletMgrCmpt, _Component);
        function bulletMgrCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.bulletPre = null;
          _this.bulletList = [];
          _this._bulletID = 0;
          _this._fireTime = 0;
          _this._fireTimeNew = void 0;
          _this._waitBackBulletMap = new Map();
          return _this;
        }
        var _proto = bulletMgrCmpt.prototype;
        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  App.event.on(EventName.Game.BulletDied, this.evtBulletDied, this);
                  App.event.on(EventName.Game.HitFish, this.evtBulletHitFish, this);
                  App.event.on(EventName.Game.CreateOldBullet, this.createOldBullet, this);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onLoad() {
            return _onLoad.apply(this, arguments);
          }
          return onLoad;
        }();
        _proto.onEnable = function onEnable() {};
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var initData, bulletList, lastBulletId;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return ResLoadHelper.loadBullet();
                case 2:
                  this.bulletPre = _context2.sent;
                  if (SubGameMgr.gameMgr) {
                    initData = SubGameMgr.gameMgr.getInitData();
                    bulletList = initData[2];
                    lastBulletId = initData[3];
                    this.createOldBullet(bulletList, lastBulletId);
                  }
                  this.initNetMsgHandlers();
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.onDestroy = function onDestroy() {
          App.event.off(EventName.Game.BulletDied, this);
          App.event.off(EventName.Game.HitFish, this);
          App.event.off(EventName.Game.CreateOldBullet, this);
          gameNet.unlistenMsgAllByThis(this);
        };
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg("fish/FireResult", this.onNet_FireResult, this);
        };
        _proto.evtBulletDied = function evtBulletDied() {
          this.bulletList.shift();
        };
        _proto.getOneBullet = function getOneBullet() {
          var bullet = instantiate(this.bulletPre);
          this.node.addChild(bullet);
          return bullet;
        };
        _proto.shoot = function shoot(startPos, aimV) {
          var needCoin = FishWhaleGameMgr.inst.getBulletCoin(App.gameLogic.paoLevel);
          if (needCoin == -1) {
            Logger.trace("等待配置返回");
            return;
          }
          this._fireTimeNew = new Date().getTime();
          if (this._fireTimeNew - this._fireTime < 100) {
            return;
          }
          if (this.bulletList.length > Constant.SceneTotalBullet) {
            App.view.showMsgTips("子弹突破上限啦!");
            return;
          }
          if (needCoin > App.gameLogic.gold) {
            App.view.showMsgTips("金币不足");
            return;
          }
          var bulletID = this.generateBulletID();
          this._waitBackBulletMap.set(bulletID, new waitBackBullet(bulletID, App.gameLogic.paoLevel, startPos, aimV));
          this.sendFire(App.gameLogic.paoLevel, bulletID);
        };
        _proto.createBullet = function createBullet(data) {
          var bulletID = data.bulletID;
          var bullet = this.getOneBullet();
          bullet.active = true;
          bullet.setPosition(data.startPos);
          var bScript = bullet.getComponent(bulletCmpt);
          bScript.bulletId = bulletID;
          bScript.bulletLev = data.bulletLevel;
          bScript.startMove(v2(data.startPos.x, data.startPos.y), v2(data.endPos.x, data.endPos.y));
          this.bulletList.push(bullet);
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
          console.log("sendFire bulletId:" + bulletId);
          gameNet.sendMsg('fish/Fire', msg);
        };
        _proto.evtBulletHitFish = function evtBulletHitFish(bulletId, bulletLevel, fishID) {
          var msg = {};
          msg.fishId = fishID.toString();
          msg.bulletId = bulletId.toString();
          msg.bulletLevel = bulletLevel;
          gameNet.sendMsg('fish/HitFish', msg);
        };
        _proto.createOldBullet = function createOldBullet(oldBullets, lastBulletId) {
          //生成旧的子弹 随机
          for (var i = 0; i < oldBullets.length; i++) {
            // 随机初始点
            var startPos = this.getRandomPosition();
            // 随机终点，确保和起点不同
            var endPos = this.getRandomPosition();
            while (this.isSamePosition(startPos, endPos)) {
              endPos = this.getRandomPosition();
            }
            var bullet = this.getOneBullet();
            bullet.active = true;
            bullet.setPosition(startPos);
            var bScript = bullet.getComponent(bulletCmpt);
            bScript.bulletId = Number(oldBullets[i].id);
            bScript.bulletLev = Number(oldBullets[i].bulletLevel);
            bScript.startMove(v2(startPos.x, startPos.y), v2(endPos.x, endPos.y));
            this.bulletList.push(bullet);
          }
          if (isNaN(lastBulletId)) {
            this._bulletID = 0;
          } else {
            this._bulletID = lastBulletId;
          }
        };
        _proto.getRandomPosition = function getRandomPosition() {
          var designResolution = view.getDesignResolutionSize();
          var x = (Math.random() - 0.5) * designResolution.width;
          var y = (Math.random() - 0.5) * designResolution.height;
          return new Vec3(x, y, 0);
        };
        _proto.isSamePosition = function isSamePosition(pos1, pos2) {
          return pos1.x === pos2.x && pos1.y === pos2.y;
        };
        _proto.onNet_FireResult = function onNet_FireResult(msg) {
          if (msg.isSuccess) {
            console.log("FireResult bulletId:" + msg.bulletId);
            App.gameLogic.gold = Number(msg.coins);
            App.event.emit(EventName.Game.UPDATE_COIN);
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
        return bulletMgrCmpt;
      }(Component)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cameraCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseNodeCmpt.ts', './app.ts', './eventName.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec3, BaseNodeCmpt, App, EventName;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }, function (module) {
      BaseNodeCmpt = module.BaseNodeCmpt;
    }, function (module) {
      App = module.App;
    }, function (module) {
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a392fnTBrVBKrqfvcG1BR0z", "cameraCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var cameraCmpt = exports('cameraCmpt', (_dec = ccclass('cameraCmpt'), _dec(_class = /*#__PURE__*/function (_BaseNodeCmpt) {
        _inheritsLoose(cameraCmpt, _BaseNodeCmpt);
        function cameraCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseNodeCmpt.call.apply(_BaseNodeCmpt, [this].concat(args)) || this;
          _this.originPos = null;
          _this.offset = 5;
          return _this;
        }
        var _proto = cameraCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseNodeCmpt.prototype.onLoad.call(this);
          App.event.on(EventName.UI.MoveCarmera, this.evtMoveCarmera, this);
          this.originPos = this.node.getPosition();
          this.scheduleOnce(function () {
            // App.gameLogic.cameraCp = this.node.getComponent(Camera);
          }, 3);
        };
        _proto.onDestroy = function onDestroy() {
          App.event.off(EventName.UI.MoveCarmera, this);
        };
        _proto.evtMoveCarmera = function evtMoveCarmera(percent) {
          var y = percent * this.offset;
          var v3 = new Vec3(this.originPos.x, this.originPos.y - y, this.originPos.z);
          this.node.setPosition(v3);
        };
        return cameraCmpt;
      }(BaseNodeCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cocosHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './resLoadHelper.ts', './toolsHelper.ts', './Logger.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, Component, isValid, Node, Label, EditBox, RichText, UITransform, Vec3, SpriteFrame, Sprite, App, ResLoadHelper, ToolsHelper, Logger;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      isValid = module.isValid;
      Node = module.Node;
      Label = module.Label;
      EditBox = module.EditBox;
      RichText = module.RichText;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
    }, function (module) {
      App = module.App;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      ToolsHelper = module.ToolsHelper;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "76d63wAte9KcKwHTdtTPtdB", "cocosHelper", undefined);
      // /**
      //  * cocos相关方法
      //  */
      var Helper = /*#__PURE__*/function () {
        function Helper() {}
        var _proto = Helper.prototype;
        /** 添加按钮点击事件 */
        _proto.addButtonLister = function addButtonLister(n, event, callback, target, waitTimeSec) {
          if (waitTimeSec === void 0) {
            waitTimeSec = 0;
          }
          for (var _len = arguments.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
            args[_key - 5] = arguments[_key];
          }
          n.off(event);
          n.on(event, function () {
            if (waitTimeSec) {
              // 防止连点，冷却时间
              var clickTime = n['clickTime'] || new Date().getTime();
              var nowTime = new Date().getTime();
              var offsetTime = (nowTime - clickTime) / 1000;
              if (offsetTime && offsetTime < waitTimeSec) return;
              n.attr({
                clickTime: nowTime
              });
            }
            //需要自定义音效的按钮，末尾加入Audio字符串
            if (n.name.indexOf('Audio') < 0) ;
            callback.call.apply(callback, [target, n].concat(args));
          });
        }

        /** 添加输入框回调事件 */;
        _proto.addEditBoxLister = function addEditBoxLister(n, callback, target, waitTimeSec, eventName) {
          if (waitTimeSec === void 0) {
            waitTimeSec = 0;
          }
          if (eventName === void 0) {
            eventName = "editing-did-ended";
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
            args[_key2 - 5] = arguments[_key2];
          }
          n.off(eventName);
          n.on(eventName, function () {
            if (waitTimeSec) {
              // 防止连点，冷却时间
              var clickTime = n['clickTime'] || new Date().getTime();
              var nowTime = new Date().getTime();
              var offsetTime = (nowTime - clickTime) / 1000;
              if (offsetTime && offsetTime < waitTimeSec) return;
              n.attr({
                clickTime: nowTime
              });
            }
            callback.call.apply(callback, [target, n].concat(args));
          });
        }

        /** 动态添加事件 */;
        _proto.addEventHandler = function addEventHandler(n, className, callFuncName, customData) {
          if (customData === void 0) {
            customData = '';
          }
          var handler = new Component.EventHandler();
          handler.target = n;
          handler.component = className;
          handler.handler = callFuncName;
          handler.customEventData = customData;
          return handler;
        }

        /** 更新通用资源 */;
        _proto.updateCommonSpriteSync = /*#__PURE__*/
        function () {
          var _updateCommonSpriteSync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(node, url) {
            var sprite, sf;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (isValid(node)) {
                    _context.next = 3;
                    break;
                  }
                  Logger.error("updateCommonSpriteSync not node = " + url);
                  return _context.abrupt("return");
                case 3:
                  sprite = node.getComponent(Sprite);
                  if (sprite) {
                    _context.next = 7;
                    break;
                  }
                  Logger.error("updateCommonSpriteSync not sprite = " + url);
                  return _context.abrupt("return");
                case 7:
                  _context.next = 9;
                  return ResLoadHelper.loadCommonAssetSync(url, SpriteFrame);
                case 9:
                  sf = _context.sent;
                  if (sf) {
                    _context.next = 13;
                    break;
                  }
                  Logger.error("updateCommonSpriteSync not SpriteFrame = " + url);
                  return _context.abrupt("return");
                case 13:
                  sprite.spriteFrame = sf;
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function updateCommonSpriteSync(_x, _x2) {
            return _updateCommonSpriteSync.apply(this, arguments);
          }
          return updateCommonSpriteSync;
        }()
        /**
        * 更新label文字
        * **/;

        _proto.updateLabelText = function updateLabelText(node, strKey, isI18n) {
          if (isI18n === void 0) {
            isI18n = false;
          }
          if (!isValid(node)) {
            Logger.error("LabelText not node = " + strKey);
            return;
          }
          var label = node instanceof Node ? node.getComponent(Label) : node;
          if (!label) {
            Logger.error("LabelText not label = " + strKey);
            return;
          }
          strKey = "" + strKey;
          var newText = isI18n ? App.i18n.getString(strKey) : strKey;
          label.string = newText;
        }

        /**
        * 更新EditBox文字
        * **/;
        _proto.updateEditBoxText = function updateEditBoxText(node, strKey, isI18n) {
          if (isI18n === void 0) {
            isI18n = true;
          }
          if (!isValid(node)) {
            Logger.error("LabelText not node = " + strKey);
            return;
          }
          var label = node instanceof Node ? node.getComponent(EditBox) : node;
          if (!label) {
            Logger.error("LabelText not label = " + strKey);
            return;
          }
          var newText = isI18n ? App.i18n.getString(strKey) : strKey;
          label.string = newText;
        }

        /**
        * 更新RichText文字
        * **/;
        _proto.updateRichText = function updateRichText(node, strKey, isI18n) {
          if (isI18n === void 0) {
            isI18n = true;
          }
          if (!isValid(node)) {
            Logger.error("LabelText not node = " + strKey);
            return;
          }
          var label = node instanceof Node ? node.getComponent(RichText) : node;
          if (!label) {
            Logger.error("LabelText not label = " + strKey);
            return;
          }
          var newText = isI18n ? App.i18n.getString(strKey) : strKey;
          label.string = newText;
          // @ts-ignore
          // label._forceUpdateRenderData(true);
        }

        /** 更新金额相关的label */;
        _proto.updateMoneyLab = function updateMoneyLab(node, num) {
          var moneyStr = ToolsHelper.moneyToThousands(num);
          this.updateLabelText(node, moneyStr, false);
        }

        /** 同步更新图片 */;
        _proto.updateSpriteSync = /*#__PURE__*/
        function () {
          var _updateSpriteSync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(node, url) {
            var sprite, sf;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (isValid(node)) {
                    _context2.next = 3;
                    break;
                  }
                  Logger.error("updateSpriteSync not node = " + url);
                  return _context2.abrupt("return");
                case 3:
                  sprite = node.getComponent(Sprite);
                  if (sprite) {
                    _context2.next = 7;
                    break;
                  }
                  Logger.error("updateSpriteSync not sprite = " + url);
                  return _context2.abrupt("return");
                case 7:
                  _context2.next = 9;
                  return ResLoadHelper.loadAssetSync(url, SpriteFrame);
                case 9:
                  sf = _context2.sent;
                  if (sf) {
                    _context2.next = 13;
                    break;
                  }
                  Logger.error("updateSpriteSync not SpriteFrame = " + url);
                  return _context2.abrupt("return");
                case 13:
                  sprite.spriteFrame = sf;
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function updateSpriteSync(_x3, _x4) {
            return _updateSpriteSync.apply(this, arguments);
          }
          return updateSpriteSync;
        }() //     /** 更新骨骼动画 */
        //     updateSpineSync(node: Node, url: string, animName: string, isLoop = false, callback?: Function) {
        //         if (!isValid(node)) {
        //             PrintError(`updateSpineSync not node = ${url}`);
        //             return;
        //         }
        //         let spine: sp.Skeleton = node.getComponent(sp.Skeleton);
        //         if (!spine) {
        //             PrintError(`updateSpineSync not spine = ${url}`);
        //             return;
        //         }
        //         ResLoadHelper.loadAssetAsync(url, sp.SkeletonData, (skeletonData: sp.SkeletonData) => {
        //             if (!skeletonData || !isValid(node)) {
        //                 PrintError(`updateSpineSync not SkeletonData = ${url}`);
        //                 return;
        //             }
        //             spine.skeletonData = skeletonData;
        //             this.chgSpineAction(spine, animName, isLoop, callback);
        //         })
        //     }
        //     /** 切换动作 */
        //     chgSpineAction(spine: sp.Skeleton, actionName: string, isLoop = false, callback?: Function) {
        //         if (!spine.findAnimation(actionName)) {
        //             PrintError(` chgSpineAc not action =${actionName}`);
        //             callback && callback();
        //             return;
        //         }
        //         spine.setAnimation(0, actionName, isLoop);
        //         if (callback) {
        //             // 注册动画的结束回调
        //             spine.setCompleteListener((track, loop) => {
        //                 callback && callback(spine.node, track);
        //             });
        //         }
        //     }
        //     /** 同步切换动作 等待结束 */
        //     chgSpineActionSync(spine: sp.Skeleton, actionName: string, isLoop = false) {
        //         return new Promise((resolve, reject) => {
        //             this.chgSpineAction(spine, actionName, isLoop, resolve)
        //         })
        //     }
        //     /** 播放动画 */
        //     playAnimation(node: Node, clipName: string, isReverse = false) {
        //         if (!isValid(node)) {
        //             PrintError(`playAnimation not node`);
        //             return;
        //         }
        //         let anim = node.getComponent(Animation);
        //         if (!anim) {
        //             PrintError(`playAnimation not animation `);
        //             return;
        //         }
        //         let animState = anim.play(clipName);
        //         animState.speed = isReverse ? -1 : 1;
        //     }
        //     /** 设置图片灰度 */
        //     setSpriteGray(node: Node, isGray: boolean) {
        //         if (!isValid(node)) {
        //             return;
        //         }
        //         if (node.getComponent(Sprite)) {
        //             let material = Material.getBuiltinMaterial((isGray ? Material.BUILTIN_NAME.GRAY_SPRITE : Material.BUILTIN_NAME.SPRITE).toString())
        //             node.getComponent(Sprite).setMaterial(0, material);
        //         }
        //         // 子节点都设置灰度
        //         if (node.childrenCount) {
        //             node.children.forEach(child => {
        //                 this.setSpriteGray(child, isGray)
        //             });
        //         }
        //     }
        //     /**
        //      * Q弹动画
        //      * @param node
        //      * @param times 次数
        //      * @param time 时间
        //      * @param rate 幅度
        //      * @param normalX X原始大小
        //      * @param normalY Y原始大小
        //      * @returns
        //      */
        //     getTweenQ(node: Node, times = 2, time = 0.1, rate = 0.05, normalX = 1, normalY = 1) {
        //         if (!isValid(node)) {
        //             return;
        //         }
        //         let maxTimesX = normalX / rate < times ? normalX / rate : times;
        //         let maxTimesY = normalY / rate < times ? normalY / rate : times;
        //         let maxTime = maxTimesX < maxTimesY ? maxTimesX : maxTimesY;
        //         let t = tween(node)
        //         for (let i = maxTime; i > 0; i--) {
        //             t.then(tween().to(time, { scaleX: normalX + rate * i, scaleY: normalY - rate * i }))
        //                 .then(tween().to(time, { scaleX: normalX - rate * i, scaleY: normalY + rate * i }))
        //         }
        //         t.then(tween().to(0.1, { scaleX: normalX, scaleY: normalY }))
        //         return t;
        //     }
        //     /**
        //      * 抖动效果
        //      * @param node
        //      * @param duration 持续时间
        //      * @param rate 幅度
        //      */
        //     async shake(node: Node, duration: number = 0, rate: number = 5) {
        //         this.repeatShake(node, rate);
        //         if (duration) {
        //             await ToolsHelper.delayTime(duration);
        //             this.stopShake(node);
        //         }
        //     }
        //     /** 重复抖动 */
        //     private repeatShake(node: Node, rate: number) {
        //         let originalPos: Vec3 = Vec3.ZERO;
        //         if (node["originalPos"]) {
        //             originalPos = node["originalPos"];
        //         } else {
        //             node.getPosition(originalPos);
        //             node.attr({ originalPos });
        //         }
        //         node.setPosition(originalPos);
        //         let rangeX = ToolsHelper.getRandom(-rate, rate);
        //         let rangeY = ToolsHelper.getRandom(-rate, rate);
        //         tween(node)
        //             .to(0.1, { position: originalPos.add(v3(rangeX, rangeY, 0)) })
        //             .call(this.repeatShake.bind(this, node, rate))
        //             .start()
        //     }
        //     stopShake(node: Node) {
        //         Tween.stopAllByTarget(node);
        //         if (node["originalPos"]) {
        //             let originalPos = node["originalPos"];
        //             node.setPosition(originalPos);
        //         }
        //     }
        /**
        * 坐标转换
        * @param curNode 当前节点
        * @param targetNode 目标节点
        * @returns
        */;

        _proto.convertToNodeSpaceAR = function convertToNodeSpaceAR(curNode, targetNode) {
          return targetNode.getComponent(UITransform).convertToNodeSpaceAR(curNode.parent.getComponent(UITransform).convertToWorldSpaceAR(curNode.getPosition()));
        }

        /**
         * 通过当前坐标转化为目标节点坐标
         * @param nodePos 节点当前坐标
         * @param nodeParent 节点父亲
         * @param targetNode 目标节点
         * @returns
         */;
        _proto.convertToPosSpaceAR = function convertToPosSpaceAR(nodePos, nodeParent, targetNode) {
          return targetNode.getComponent(UITransform).convertToNodeSpaceAR(nodeParent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(nodePos.x, nodePos.y, 0)));
        }

        /** 空间坐标转屏幕坐标
         * 
         */;
        _proto.wordToScree = function wordToScree(camera, wordPos) {
          return camera.worldToScreen(wordPos);
        }

        //     /**
        //      * 延迟时间
        //      * @param cmpt
        //      * @param time (0表示下一帧执行)
        //      */
        //     async delayTime(cmpt: Component, time: number) {
        //         await new Promise(t => cmpt.scheduleOnce(t, time));
        //     }

        //     /** slot开始时回弹 */
        //     async playBeginScrollBack(node: Node) {
        //         Tween.stopAllByTarget(node);
        //         let costTime = 0.2
        //         let dis = 40
        //         return new Promise(r => {
        //             tween(node)
        //                 .by(costTime, { position: new Vec3(0, dis, 0) }, { easing: "sineOut" })
        //                 .call(r)
        //                 .start();
        //         })
        //     }

        //     /** 滚动回弹效果 */
        //     async playScrollBack(node: Node, isBegin: boolean) {
        //         if (isBegin) {
        //             await this.playBeginScrollBack(node);
        //         } else {
        //             await this.playEndScrollBack(node);
        //         }
        //     }

        //     /** slot结束时回弹 */
        //     async playEndScrollBack(node: Node) {
        //         Tween.stopAllByTarget(node);
        //         let costTime = 0.1
        //         let dis = 20
        //         return new Promise(r => {
        //             tween(node)
        //                 .by(costTime, { position: new Vec3(0, -dis, 0) })
        //                 .by(costTime * 0.5, { position: new Vec3(0, dis, 0) })
        //                 .call(r)
        //                 .start();
        //         })
        //     }

        //     playScaleBack(node: Node) {
        //         Tween.stopAllByTarget(node);
        //         node.setScale(1, 1, 1);
        //         tween(node)
        //             .to(0.5, { scale: 1.2 }, { easing: "elasticOut" })
        //             .to(0.2, { scale: 1 })
        //             .start();
        //     }

        //     /**
        //      * 设置按钮是否可以点击
        //      * @param node 按钮所在节点
        //      * @param isOn 是否启用
        //      * @returns
        //      */
        //     setBtnInteract(node: Node, isOn: boolean) {
        //         if (!node) return;
        //         let btn = node.getComponent(Button);
        //         if (!btn) return;
        //         btn.interactable = isOn;
        //         CocosHelper.setSpriteGray(node, !isOn);
        //         node.children.forEach(child => {
        //             CocosHelper.setSpriteGray(child, !isOn);
        //         });
        //     }

        //     /** 筹码飞入下注区域动作 */
        //     flyAreaAction(chips: Node, areaPos: Vec2, callback?: Function) {
        //         tween(chips)
        //             .to(0.5, { position: v3(areaPos.x, areaPos.y, 0), scale: 1.1 }, { easing: "sineOut" })
        //             .call(() => {
        //                 chips.scale = 1;
        //                 callback && callback();
        //             })
        //             .start();
        //     }

        //     /** 筹码飞向玩家的动作 */
        //     flyPlayerAction(chips: Node, playerPos: Vec2, callback?: Function) {
        //         tween(chips)
        //             .to(0.1, { scale: 1.2 })
        //             .to(0.8, { position: v3(playerPos.x, playerPos.y,), scale: 1, opacity: 200 }, { easing: "backIn" })
        //             .delay(0.08)
        //             .removeSelf()
        //             .call(() => {
        //                 chips.opacity = 255;
        //                 callback && callback();
        //             })
        //             .start();
        //     }
        ;

        return Helper;
      }();
      var CocosHelper = exports('CocosHelper', new Helper());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataviewUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8496boolPFNjJIoSqiaOBqe", "dataviewUtils", undefined);
      /* 二进制数据处理 */
      var DataViewUtils = exports('default', /*#__PURE__*/function () {
        function DataViewUtils() {}
        /**
         * 获取消息头数据id,serverType,other
         * @param dataview 
         */
        DataViewUtils.getHeadData = function getHeadData(dataview) {
          /* 约定，消息头共8个字节，两个字节保存id,连个字节保存服务器类型，四个字节保存其他 */
          var id = dataview.getInt16(0);
          var server = dataview.getInt16(2);
          var router = dataview.getInt32(4);
          var head = {
            id: id,
            serverType: server,
            router: String(router)
          };
          return head;
        }

        /**
         * 获取二进制数据消息体
         * @param dataview 
         * @param byteLength 
         */;
        DataViewUtils.decoding = function decoding(dataview, byteLength) {
          var result = "";
          /* 约定，每个字符给两个字节空间存储数据 */
          var count = 0;
          for (var i = 0; i < byteLength; i++) {
            if (count + 8 >= byteLength) {
              break;
            }
            var hh = dataview.getInt16(count + 8);
            count += 2;
            result += String.fromCharCode(hh);
          }
          // console.log(result);
          return JSON.parse(result);
        }

        /**
         * 封装二进制数据
         * @param id  唯一标示Id
         * @param serverType 服务器类型
         * @param other 其他
         * @param body 消息体（JSON格式）
         */;
        DataViewUtils.encoding = function encoding(id, serverType, other, body) {
          var bodyObj = JSON.stringify(body);
          /* 考虑到中文，每个字符给两个字节空间存储数据 */
          var buffer = new ArrayBuffer(bodyObj.length * 2 + 8);
          var dataview = new DataView(buffer);
          /* 唯一标识id */
          dataview.setInt16(0, id);
          /* 服务器类型 */
          dataview.setInt16(2, serverType);
          /* 其他，可做验证，先留着 */
          dataview.setInt32(4, other);
          /* body消息体 */
          var count = 0;
          for (var i = 0; i < bodyObj.length; i++) {
            var code = bodyObj.charCodeAt(i);
            dataview.setInt16(count + 8, code);
            count += 2;
          }
          return dataview.buffer;
        };
        return DataViewUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DyManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f50f23XRS1EvqA0kkrjmZ5J", "DyManager", undefined);
      var SdkManager = exports('SdkManager', /*#__PURE__*/function () {
        function SdkManager() {
          // 激励视频
          this.videoId = '';
          this.videoAd = null;
          // 插屏
          this.interstitialId = '';
          this.interstitialAd = null;
          // 横幅
          this.bannerId = '';
          this.bannerAd = null;
        }
        var _proto = SdkManager.prototype;
        // 获取平台
        _proto.getPlatform = function getPlatform() {
          var platform = null;
          return platform;
        }

        // 初始化横幅
        ;

        _proto.initBannerAd = function initBannerAd() {
          var _this = this;
          var platform = this.getPlatform();
          if (!platform) {
            console.log('banner ad init...');
            return;
          }
          if (this.bannerId == '') {
            return;
          }
          var winSize = platform.getSystemInfoSync();
          if (this.bannerAd == null) {
            this.bannerAd = platform.createBannerAd({
              adUnitId: this.bannerId,
              adIntervals: 30,
              style: {
                height: winSize.windowHeight - 80,
                left: 0,
                top: 500,
                width: winSize.windowWidth
              }
            });
            this.bannerAd.onResize(function (res) {
              _this.bannerAd.style.top = winSize.windowHeight - _this.bannerAd.style.realHeight;
              _this.bannerAd.style.left = winSize.windowWidth / 2 - _this.bannerAd.style.realWidth / 2;
            });
            this.bannerAd.onError(function (err) {
              console.log('初始化异常', err);
            });
          }
        }

        // 横幅展示
        ;

        _proto.toggleBannerAd = function toggleBannerAd(isShow) {
          var platform = this.getPlatform();
          if (!platform) {
            console.log("\u3010\u6D41\u91CF\u4E3B\u6A2A\u5E45:" + isShow + "\u3011");
            return;
          }
          if (this.bannerAd) {
            isShow ? this.bannerAd.show() : this.bannerAd.hide();
          }
        }

        // 初始化插屏
        ;

        _proto.initInterstitialAd = function initInterstitialAd() {
          var platform = this.getPlatform();
          if (!platform) {
            console.log('inter ad init...');
            return;
          }
          if (this.interstitialId == '') {
            return;
          }
          if (this.interstitialAd == null) {
            this.interstitialAd = platform.createInterstitialAd({
              adUnitId: this.interstitialId
            });
            this.interstitialAd.onError(function (err) {});
          }
        }

        // 插屏展示
        ;

        _proto.showInterstitialAd = function showInterstitialAd() {
          var platform = this.getPlatform();
          if (!platform) {
            console.log('【流量主插屏】');
            return;
          }
          if (this.interstitialAd) {
            this.interstitialAd.show()["catch"](function (err) {});
          }
        }

        // 初始化激励
        ;

        _proto.initVideoAd = function initVideoAd() {
          var platform = this.getPlatform();
          if (!platform) {
            console.log('video ad init...');
            return;
          }
          if (this.videoId == '') {
            return;
          }
          if (this.videoAd == null) {
            this.videoAd = platform.createRewardedVideoAd({
              adUnitId: this.videoId
            });
            this.videoAd.onError(function (err) {});
          }
        }

        // 激励展示
        ;

        _proto.showVideoAd = function showVideoAd(success, fail) {
          var _this2 = this;
          var platform = this.getPlatform();
          if (!platform) {
            console.log('激励模拟成功');
            return success && success('模拟成功，激励奖励已发放');
          }
          if (this.videoAd) {
            this.videoAd.offClose();
            this.videoAd.onClose(function (res) {
              _this2.videoAd.offClose();
              if (res && res.isEnded || res === undefined) {
                return success && success('激励奖励已发放');
              } else {
                return fail && fail('视频播放中断');
              }
            });
            this.videoAd.show()["catch"](function () {
              _this2.videoAd.load().then(function () {
                return _this2.videoAd.show();
              })["catch"](function (err) {
                console.log('广告展示失败');
              });
            });
          } else {
            // console.log('激励模拟成功')
            return fail && fail('该功能尚未开放');
          }
        };
        _createClass(SdkManager, null, [{
          key: "instance",
          get: function get() {
            if (null == this._instance) {
              this._instance = new SdkManager();
            }
            return this._instance;
          }
        }]);
        return SdkManager;
      }());
      SdkManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/enumConst.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "735c9mnir1AaJ4lKk2U+DGZ", "enumConst", undefined);
      //----------------------------------------大厅

      /** 窗口类型 */
      var WindowType = exports('WindowType', /*#__PURE__*/function (WindowType) {
        WindowType[WindowType["eMap"] = 1] = "eMap";
        WindowType[WindowType["eView"] = 2] = "eView";
        WindowType[WindowType["eTips"] = 3] = "eTips";
        WindowType[WindowType["eMarquee"] = 4] = "eMarquee";
        WindowType[WindowType["eToast"] = 5] = "eToast";
        WindowType[WindowType["eNetwork"] = 6] = "eNetwork";
        return WindowType;
      }({}));

      /** 窗口打开类型 */
      var WindowOpenType = exports('WindowOpenType', /*#__PURE__*/function (WindowOpenType) {
        WindowOpenType[WindowOpenType["eSingle"] = 1] = "eSingle";
        WindowOpenType[WindowOpenType["eMultiple"] = 2] = "eMultiple";
        return WindowOpenType;
      }({}));

      //-----------------------------------------游戏
      /** 语言 */
      var Language = exports('Language', {
        Portuguese: 0,
        English: 1,
        Chinese: 2
      });

      /** 语言枚举 */
      var LanguageText = exports('LanguageText', {
        "0": "葡萄牙语",
        "1": "英语",
        "2": "中文"
      });
      var LanguageKey = exports('LanguageKey', {
        "0": "po",
        "1": "en",
        "2": "cn"
      });

      /** 游戏运行环境 */
      var PlatFormType = exports('PlatFormType', /*#__PURE__*/function (PlatFormType) {
        PlatFormType[PlatFormType["android"] = 1] = "android";
        PlatFormType[PlatFormType["ios"] = 2] = "ios";
        PlatFormType[PlatFormType["web"] = 3] = "web";
        return PlatFormType;
      }({}));

      /** 分享 */

      /** 方块枚举 */
      var TitleType = exports('TitleType', /*#__PURE__*/function (TitleType) {
        TitleType[TitleType["low"] = 0] = "low";
        TitleType[TitleType["medium"] = 1] = "medium";
        TitleType[TitleType["high"] = 2] = "high";
        return TitleType;
      }({}));

      /** 方块小中大 */
      var Title = exports('Title', {
        /** 小方块 */
        tileLow: "tileLow_",
        /** 中方块 */
        tileMedium: "tileMedium_",
        /** 大方块 */
        tileHigh: "tileHigh_"
      });

      /** 三元消除方向 */
      var Direction = exports('Direction', /*#__PURE__*/function (Direction) {
        Direction[Direction["left"] = 0] = "left";
        Direction[Direction["right"] = 1] = "right";
        Direction[Direction["up"] = 2] = "up";
        Direction[Direction["down"] = 3] = "down";
        return Direction;
      }({}));

      /** 全局常量 */
      var Constant = exports('Constant', {
        /**  鱼最大数量 */
        SceneTotalFish: 40,
        /**  子弹最大数量 */
        SceneTotalBullet: 20,
        TotalFishCount: 42,
        FinishTag: "完成"
      });

      /** 移动方向 */
      var MoveDirection = exports('MoveDirection', /*#__PURE__*/function (MoveDirection) {
        MoveDirection[MoveDirection["add"] = 0] = "add";
        MoveDirection[MoveDirection["sub"] = 1] = "sub";
        return MoveDirection;
      }({}));

      /**
       *  关卡配置
       */

      /** 领取金币类型 */
      var GoldType = exports('GoldType', /*#__PURE__*/function (GoldType) {
        GoldType[GoldType["share"] = 0] = "share";
        GoldType[GoldType["level"] = 1] = "level";
        GoldType[GoldType["star"] = 2] = "star";
        return GoldType;
      }({}));

      /** 排行数据 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/err.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e3376SPCTlOIauH5nLs8SBQ", "err", undefined);
      var ErrEnum = exports('ErrEnum', {
        OK: 200
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventManager3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singletonClass.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, Component, Node, SingletonClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Node = module.Node;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cb230EqBJpL37IE3+YhxKSt", "eventManager", undefined);
      /**
       * 事件管理
       */
      var EventManager = exports('EventManager', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(EventManager, _SingletonClass);
        function EventManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SingletonClass.call.apply(_SingletonClass, [this].concat(args)) || this;
          _this._mapListener = new Map();
          return _this;
        }
        var _proto = EventManager.prototype;
        _proto.onDestroy = function onDestroy() {
          this._mapListener.clear();
        };
        _proto.on = function on(eventName, handler, target) {
          var _this2 = this;
          if (this._isNull(target)) return;
          var it = {
            handler: handler,
            target: target
          };
          var listener = this._mapListener.get(eventName) || [];
          if (listener.length < 1) {
            this._mapListener.set(eventName, [it]);
            return 1;
          }
          this._mapListener.set(eventName, listener.filter(function (it) {
            if (it.target instanceof Component) {
              return !_this2._isNull(it.target.node.parent);
            } else if (it.target instanceof Node) {
              return !_this2._isNull(it.target["parent"]);
            } else {
              return it.target;
            }
          }));
          this._mapListener.get(eventName).push(it);
          return this._mapListener.get(eventName).length;
        };
        _proto.emit = function emit(eventName) {
          var _this3 = this;
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          var listener = this._mapListener.get(eventName) || [];
          if (listener.length < 1) return;
          this._mapListener.set(eventName, listener.filter(function (it) {
            if (it.target instanceof Component) {
              return !_this3._isNull(it.target.node.parent);
            } else if (it.target instanceof Node) {
              return !_this3._isNull(it.target["parent"]);
            } else {
              return it.target;
            }
          }));
          this._mapListener.get(eventName).forEach(function (it) {
            it.handler.apply(it.target, args);
          });
        };
        _proto.off = function off(eventName, target) {
          var list = this._mapListener.get(eventName) || [];
          this._mapListener.set(eventName, list.filter(function (it) {
            return it.target !== target;
          }));
        };
        _proto.offAll = function offAll(target) {
          if (this._isNull(target)) return;
          for (var _iterator = _createForOfIteratorHelperLoose(this._mapListener), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              key = _step$value[0],
              list = _step$value[1];
            this._mapListener.set(key, list.filter(function (it) {
              return it.target !== target;
            }));
          }
        };
        _proto._isNull = function _isNull(obj) {
          return obj === undefined || obj === null;
        };
        return EventManager;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EventName', void 0);
      cclegacy._RF.push({}, "e73c1Rm9CxJXYN0CoqZN265", "eventName", undefined);
      /**
       * 游戏事件ID定义
       */
      var EventName;
      (function (_EventName) {
        var Game = /*#__PURE__*/function (Game) {
          Game["Move"] = "Move";
          Game["EndMove"] = "EndMove";
          Game["TouchTile"] = "TouchTile";
          Game["Restart"] = "Restart";
          Game["RefreshCurLevel"] = "RefreshCurLevel";
          Game["NextLevel"] = "NextLevel";
          Game["LoadMap"] = "LoadMap";
          Game["BackHome"] = "BackHome";
          Game["AddStarScore"] = "AddStarScore";
          Game["UpdataGold"] = "UpdataGold";
          Game["ToolRefreshGrid"] = "ToolRefreshGrid";
          Game["RefreshTools"] = "RefreshTools";
          Game["ToolReturn"] = "ToolReturn";
          Game["ToolCountRefresh"] = "ToolCountRefresh";
          Game["Share"] = "Share";
          Game["LayoutFinish"] = "LayoutFinish";
          Game["ClickedTile"] = "ClickedTile";
          Game["Connected"] = "Connected";
          Game["TouchStart"] = "TouchStart";
          Game["TouchMove"] = "TouchMove";
          Game["TouchEnd"] = "TouchEnd";
          Game["IsSuitable"] = "IsSuitable";
          Game["CheckRusult"] = "CheckRusult";
          Game["FlyFlower"] = "FlyFlower";
          Game["GuildEvent"] = "GuildEvent";
          Game["rePlayGame"] = "rePlayGame";
          Game["TIMER_DOWN"] = "TIMER_DOWN";
          Game["UPDATE_COIN"] = "UPDATE_COIN";
          Game["FLY_COIN"] = "FLY_COIN";
          Game["FishDied"] = "FishDied";
          Game["BulletDied"] = "BulletDied";
          Game["ChangePaotai"] = "ChangePaotai";
          Game["HitFish"] = "HitFish";
          Game["CreateOldBullet"] = "CreateOldBullet";
          return Game;
        }({});
        _EventName.Game = Game;
        var UI = /*#__PURE__*/function (UI) {
          UI["RotateTile"] = "RotateTile";
          UI["MoveCarmera"] = "MoveCarmera";
          return UI;
        }({});
        _EventName.UI = UI;
      })(EventName || (EventName = exports('EventName', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/feedViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './eventName.ts', './viewNameConst.ts', './app.ts', './fishRoute.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, BaseViewCmpt, EventName, ViewName, App, BYFishRoute;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      BYFishRoute = module.BYFishRoute;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7bb89zUbuRLcoA44escI6Qn", "feedViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var feedViewCmpt = exports('feedViewCmpt', (_dec = ccclass('feedViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(feedViewCmpt, _BaseViewCmpt);
        function feedViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseViewCmpt.call.apply(_BaseViewCmpt, [this].concat(args)) || this;
          _this.noFishTips = null;
          _this.fishManager = null;
          _this.isHide = false;
          return _this;
        }
        var _proto = feedViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseViewCmpt.prototype.onLoad.call(this);
          this.noFishTips = this.viewList.get("center/noFishTips");
          var rand = 2; //Math.ceil(Math.random() * 4);
          this.viewList.get("bg").children.forEach(function (item) {
            item.active = +item.name == rand;
          });
        };
        _proto.addEvents = function addEvents() {
          App.event.on(EventName.Game.TouchStart, this.evtTouchStart.bind(this), this);
          App.event.on(EventName.Game.TouchMove, this.evtTouchMove.bind(this), this);
          App.event.on(EventName.Game.TouchEnd, this.evtTouchEnd.bind(this), this);
          // App.event.on(EventName.Game.UpdataGold, this.evtUpdateGold, this);
        };

        _proto.onDisable = function onDisable() {
          App.event.off(EventName.Game.TouchStart, this);
          App.event.off(EventName.Game.TouchMove, this);
          App.event.off(EventName.Game.TouchEnd, this);
        }

        /** 初始化 */;
        _proto.loadExtraData = /*#__PURE__*/
        function () {
          var _loadExtraData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.initFish();
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadExtraData() {
            return _loadExtraData.apply(this, arguments);
          }
          return loadExtraData;
        }();
        _proto.initFish = function initFish() {
          var _this2 = this;
          var fishIdList = App.gameLogic.getMyFeedFish();
          this.noFishTips.active = false;
          if (fishIdList.length < 1) {
            this.noFishTips.active = true;
            return;
          }
          /** 每种鱼养3条先 */
          var count = 0;
          this.schedule( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var rount, routeId, fId;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  rount = BYFishRoute.anchor;
                  routeId = rount[Math.floor(Math.random() * (rount.length - 1))];
                  fId = fishIdList[count]; //fishIdList[Math.floor(Math.random() * (fishIdList.length))];
                  _context2.next = 5;
                  return App.gameLogic.createFish(fId, routeId.id, 0, fId, _this2.viewList.get('bg'));
                case 5:
                  _context2.sent;
                  count++;
                  if (count > fishIdList.length - 1) {
                    count = 0;
                  }
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })), 1, fishIdList.length * 3);
        };
        _proto.evtTouchStart = function evtTouchStart(pos) {};
        _proto.evtTouchMove = function evtTouchMove(pos) {};
        _proto.evtTouchEnd = function evtTouchEnd() {}

        /** 退出 */;
        _proto.onClick_backBtn = function onClick_backBtn() {
          App.backHome();
        };
        _proto.onClick_catchBtn = function onClick_catchBtn() {
          App.view.openView(ViewName.Single.eGameView);
          this.onClick_closeBtn();
        };
        _proto.onClick_hideBtn = function onClick_hideBtn() {
          var _this3 = this;
          this.isHide = !this.isHide;
          this.viewList.get("ui/right/hideBtn").scale = this.isHide ? v3(1, -1, 1) : v3(1, 1, 1);
          this.viewList.get("ui/right").children.forEach(function (item) {
            if (item.name != "hideBtn") {
              item.active = !_this3.isHide;
            }
          });
        };
        return feedViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fireCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventName.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, EventName, App;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      App = module.App;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ebba1VRYPtI0oQGhPIyeSWB", "fireCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fireCmpt = exports('fireCmpt', (_dec = ccclass('fireCmpt'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fireCmpt, _Component);
        function fireCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.index = -1;
          _this.count = 0;
          _this.isFire = false;
          return _this;
        }
        var _proto = fireCmpt.prototype;
        _proto.onLoad = function onLoad() {
          this.evtChangePaotai();
          App.event.on(EventName.Game.ChangePaotai, this.evtChangePaotai, this);
        };
        _proto.evtChangePaotai = function evtChangePaotai() {
          this.index = App.gameLogic.paoLevel;
          this.node.children.forEach(function (item) {
            return item.active = false;
          });
          this.node.getChildByName("" + this.index).active = true;
        };
        _proto.update = function update(deltaTime) {
          if (this.index == -1) return;
          if (!this.isFire) {
            this.node.getChildByName("" + this.index).active = false;
            return;
          }
          this.count++;
          if (this.count > 5) {
            this.node.getChildByName("" + this.index).active = true;
            this.count = 0;
            return;
          }
          this.node.getChildByName("" + this.index).active = false;
        };
        _proto.playFire = function playFire() {
          this.isFire = true;
        };
        _proto.pause = function pause() {
          this.isFire = false;
        };
        _proto.onDisable = function onDisable() {
          App.event.off(EventName.Game.ChangePaotai, this);
        };
        return fireCmpt;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fishCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventName.ts', './app.ts', './util.ts', './globalFuncHelper.ts', './fishRoute.ts', './bulletCmpt.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, sp, Collider2D, BoxCollider2D, Contact2DType, RigidBody2D, Label, v2, v3, tween, Component, EventName, App, getQuadrantDegree, GlobalFuncHelper, BYFishRoute, bulletCmpt;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Collider2D = module.Collider2D;
      BoxCollider2D = module.BoxCollider2D;
      Contact2DType = module.Contact2DType;
      RigidBody2D = module.RigidBody2D;
      Label = module.Label;
      v2 = module.v2;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      getQuadrantDegree = module.getQuadrantDegree;
    }, function (module) {
      GlobalFuncHelper = module.GlobalFuncHelper;
    }, function (module) {
      BYFishRoute = module.BYFishRoute;
    }, function (module) {
      bulletCmpt = module.bulletCmpt;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "03487ztkl9M9pYQ8MbhbWYR", "fishCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BYFish = exports('BYFish', (_dec = ccclass('BYFish'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BYFish, _Component);
        function BYFish() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isDieing = false;
          _this.fishId = 0;
          _this.fishFormationId = -1;
          _this.rootIdx = -1;
          _this.typeId = 0;
          _this.collider = null;
          _this.ice = null;
          _this.lastPos = undefined;
          _this.skelen = null;
          _this.tweenTarget = void 0;
          _this.index = 0;
          _this.count = 0;
          return _this;
        }
        var _proto = BYFish.prototype;
        _proto.onLoad = function onLoad() {
          this.skelen = this.node.getComponent(sp.Skeleton);
          this.initColliderAndShader();
          this.showBtn();
          this.ice = this.node.getChildByName("ice");
          var lb = this.node.getChildByName("lb");
          if (lb) {
            lb.active = false;
          }
        };
        _proto.update = function update() {
          if (this.rootIdx != -1) {
            this.updateRotation();
          }
        };
        _proto.showBtn = function showBtn() {
          if (this.node.getChildByName("btn")) this.node.getChildByName("btn").active = App.gameLogic.isLock;
        };
        _proto.initColliderAndShader = function initColliderAndShader() {
          this.collider = this.node.getComponent(Collider2D);
          if (!this.collider) {
            this.collider = this.node.getComponent(BoxCollider2D);
          }
          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this.collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          if (otherCollider.node.name == "bullet" && !this.isDieing) {
            this.showFishNet();
            var bulletCmpt1 = otherCollider.node.getComponent(bulletCmpt);
            if (!bulletCmpt1.isDistoried) {
              App.event.emit(EventName.Game.HitFish, bulletCmpt1.bulletId, bulletCmpt1.bulletLev, this.fishId);
              bulletCmpt1.isDistoried = true;
              bulletCmpt1.chgColliderState(false);
              this.scheduleOnce(function () {
                App.event.emit(EventName.Game.BulletDied);
                bulletCmpt1.node.destroy();
              }, 0.01);
            }
          }
        };
        _proto.onEndContact = function onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          // console.log('onEndContact');
        };
        _proto.chgColliderState = function chgColliderState(state) {
          if (this.collider) {
            this.collider.enabled = state;
            this.node.getComponent(RigidBody2D).enabledContactListener = state;
          }
        };
        _proto.chgIceState = function chgIceState(state) {
          if (this.ice) {
            this.ice.active = state;
          }
        };
        _proto.chgSpineState = function chgSpineState(state) {};
        _proto.showTest = function showTest() {
          var lb = this.node.getChildByName("lb");
          if (lb) {
            lb.active = false;
            if (App.gameLogic.isTest) {
              lb.active = true;
              lb.getComponent(Label).string = "" + this.rootIdx;
            }
          }
        };
        _proto.move = function move(offset, startPosNum, firstTime) {
          this.showTest();
          //记录第一个坐标
          this.lastPos = v2(BYFishRoute.anchor[this.rootIdx].points[0][0] + offset.x, BYFishRoute.anchor[this.rootIdx].points[0][1] + offset.y);
          if ((this.lastPos.x > 0 || this.rootIdx == 57) && this.rootIdx != 58) {
            this.node.setScale(v3(-1, 1));
          } else {
            this.node.setScale(v3(1, 1));
          }
          var lineCount = BYFishRoute.anchor[this.rootIdx].points.length / 2;
          var actionArr = [];
          this.node.setPosition(v3(BYFishRoute.anchor[this.rootIdx].points[0][0] + offset.x, BYFishRoute.anchor[this.rootIdx].points[0][1] + offset.y, 1));
          for (var i = startPosNum; i < lineCount; i++) {
            var c1 = v3(BYFishRoute.control[this.rootIdx].points[i * 2][0] + offset.x, BYFishRoute.control[this.rootIdx].points[i * 2][1] + offset.y, 1);
            var c2 = v3(BYFishRoute.control[this.rootIdx].points[i * 2 + 1][0] + offset.x, BYFishRoute.control[this.rootIdx].points[i * 2 + 1][1] + offset.y, 1);
            var a2 = v3(BYFishRoute.anchor[this.rootIdx].points[(i + 1) * 2 - 1][0] + offset.x, BYFishRoute.anchor[this.rootIdx].points[(i + 1) * 2 - 1][1] + offset.y, 1);
            // let bezierTo = GlobalFuncHelper.bezierTo(this.node, BYFishRoute.anchor[this.rootIdx].curveTime, c1, c1, a2);
            var bezierTo = tween(this.node).to(BYFishRoute.anchor[this.rootIdx].curveTime, {
              position: a2
            });
            actionArr.push(bezierTo);
          }
          // for (let i = startPosNum; i < Math.floor(lineCount); i++) {
          //     let c1 = v3(BYFishRoute.control[this.rootIdx].points[i * 2][0] + offset.x, BYFishRoute.control[this.rootIdx].points[i * 2][1] + offset.y, 1);
          //     let c2 = v3(BYFishRoute.control[this.rootIdx].points[i * 2 + 1][0] + offset.x, BYFishRoute.control[this.rootIdx].points[i * 2 + 1][1] + offset.y, 1);
          //     let a2 = v3(BYFishRoute.anchor[this.rootIdx].points[(i + 1) * 2 - 1][0] + offset.x, BYFishRoute.anchor[this.rootIdx].points[(i + 1) * 2 - 1][1] + offset.y, 1);
          //     console.log(c1.x, c1.y, c2.x, c2.y);
          //     let bezier = [c1, c2, a2];
          //     let bezierTo = this.bezierTo(this.node, BYFishRoute.anchor[this.rootIdx].curveTime, c1, c2, a2);
          //     actionArr.push(bezierTo);
          // }

          this.startMove(actionArr);
        };
        _proto.startMove = function startMove(arr) {
          var _this2 = this;
          this.tweenTarget = arr[this.index];
          arr[this.index].call(function () {
            _this2.index++;
            if (_this2.index < arr.length) {
              _this2.startMove(arr);
            } else {
              // this.node.destroy();
              _this2.index = 0;
              var rount = BYFishRoute.anchor;
              var routeId = Math.floor(Math.random() * (rount.length - 1));
              _this2.rootIdx = routeId;
              _this2.move(v2(), 0, 0);
            }
          }).start();
        };
        _proto.updateRotation = function updateRotation() {
          // if ((this.typeId == BYFishMgr.jellyfishType) || this.typeId == BYFishMgr.seahorseType || this.typeId == BYFishMgr.bombType) {
          //     // this.node.angle = 0;
          //     return;
          // }
          var curPoint = v2(this.node.position.x, this.node.position.y); //获取鱼当前坐标
          if (this.lastPos == undefined) {
            return;
          }
          if (curPoint.x == this.lastPos.x || curPoint.y == this.lastPos.y) {
            return;
          }
          var deg = getQuadrantDegree(this.lastPos, curPoint);
          this.node.angle = deg; //待修改 角度有问题

          this.lastPos = curPoint; //保存当前的坐标给下一轮刷新使用
        };
        /** 点击鱼 */
        _proto.onClick_btn = function onClick_btn() {
          this.count++;
          // if (this.count % 2 != 0) {
          //     this.pauseMove();
          // }
          // else {
          //     this.resumeMove();
          // }
        };

        _proto.pauseMove = function pauseMove() {
          if (this.tweenTarget) this.tweenTarget.stop();
        };
        _proto.resumeMove = function resumeMove() {
          if (this.tweenTarget) this.tweenTarget.start();
        };
        _proto.playWalk = function playWalk() {
          this.skelen.setAnimation(1, "walk", true);
        };
        _proto.showFishNet = /*#__PURE__*/function () {
          var _showFishNet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var net;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return GlobalFuncHelper.loadFishNet();
                case 2:
                  net = _context.sent;
                  net.setPosition(this.node.position);
                  this.node.parent.parent.addChild(net);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showFishNet() {
            return _showFishNet.apply(this, arguments);
          }
          return showFishNet;
        }();
        _proto.playDie = /*#__PURE__*/function () {
          var _playDie = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.pauseMove();
                  this.skelen.setAnimation(1, "died", true);
                  this.isDieing = true;
                  this.scheduleOnce(function () {
                    App.event.emit(EventName.Game.FishDied, _this3.fishId);
                    _this3.destroyFish();
                  }, 1);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playDie() {
            return _playDie.apply(this, arguments);
          }
          return playDie;
        }();
        _proto.destroyFish = function destroyFish() {
          this.node.removeFromParent();
          this.node.parent = null;
          this.node.destroy();
        };
        _proto.stopAction = function stopAction() {
          this.skelen.paused = true;
        };
        return BYFish;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fishMgrCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventName.ts', './levelConfig.ts', './app.ts', './resLoadHelper.ts', './fishCmpt.ts', './fishRoute.ts', './NetGameServer.ts', './SubGameMgr.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Vec3, Component, v2, v3, instantiate, EventName, LevelConfig, App, ResLoadHelper, BYFish, BYFishRoute, gameNet, SubGameMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
      v2 = module.v2;
      v3 = module.v3;
      instantiate = module.instantiate;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      LevelConfig = module.LevelConfig;
    }, function (module) {
      App = module.App;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      BYFish = module.BYFish;
    }, function (module) {
      BYFishRoute = module.BYFishRoute;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }],
    execute: function () {
      var _dec, _class2;
      cclegacy._RF.push({}, "617e5exgAlID6muxTxDTVF/", "fishMgrCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishLive = exports('FishLive', function FishLive(fish, cliveTimestamp) {
        this.fish = void 0;
        this.cliveTimestamp = void 0;
        // 将传入的参数赋值给类的属性
        this.fish = fish;
        this.cliveTimestamp = cliveTimestamp;
      });
      var fishMgrCmpt = exports('fishMgrCmpt', (_dec = ccclass('fishMgrCmpt'), _dec(_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fishMgrCmpt, _Component);
        function fishMgrCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.fishPreMap = new Map();
          _this.data = null;
          _this._fishList = void 0;
          return _this;
        }
        var _proto = fishMgrCmpt.prototype;
        //鱼 生成时间map
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this._fishList = new Map();
          this.initNetMsgHandlers();
          App.event.on(EventName.Game.FishDied, this.evtFishDied, this);
          if (SubGameMgr.gameMgr) {
            var initData = SubGameMgr.gameMgr.getInitData();
            var fishList = initData[0];
            for (var i = 0; i < fishList.length; i++) {
              this.onNet_NewFish(fishList[i]);
            }
          }
        };
        _proto.onEnable = function onEnable() {
          this.refreshFishData();
        };
        _proto.onDisable = function onDisable() {};
        _proto.onDestroy = function onDestroy() {
          App.event.off(EventName.Game.FishDied, this);
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
                this._fishList.get(key).fish.destroyFish();
              }
              this._fishList["delete"](key);
            }
          }
        };
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg("fish/NewFish", this.onNet_NewFish, this);
          gameNet.listenMsg("fish/FishDead", this.onNet_FishDead, this);
          gameNet.listenMsg("fish/RoomFish", this.onNet_RoomFish, this);
        };
        _proto.refreshFishData = function refreshFishData() {
          var data = LevelConfig.getDefaultData();
          this.data = data;
        }

        /** 创建鱼接口 */;
        _proto.createFishById = /*#__PURE__*/
        function () {
          var _createFishById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fishType, fishID, liveTimestamp) {
            var rount, routeId, fish;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  rount = BYFishRoute.anchor;
                  routeId = rount[Math.floor(Math.random() * (rount.length - 1))];
                  _context.next = 4;
                  return this.createFish(fishType, routeId.id, 0, fishID, this.node);
                case 4:
                  fish = _context.sent;
                  if (fish) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return");
                case 7:
                  this._fishList.set(fishID, new FishLive(fish, liveTimestamp));
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function createFishById(_x, _x2, _x3) {
            return _createFishById.apply(this, arguments);
          }
          return createFishById;
        }()
        /**
         * 创建一条普通鱼          
         * @param fishType 类型
         * @param rootIdx 路线ID
         * @param offsetID 偏移ID
         * @param fishId 该鱼的ID
         * @param startPosNum 
         * @param firstTime 
         */;

        _proto.createFish = /*#__PURE__*/
        function () {
          var _createFish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fishType, rootIdx, offsetID, fishId, parentNode) {
            var i, pos, fish, fishNode, point, xstartPosNum, curveTimex, xfirstTime;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (fishId) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  i = 0;
                case 3:
                  if (!(i < BYFishRoute.anchor.length)) {
                    _context2.next = 10;
                    break;
                  }
                  if (!(BYFishRoute.anchor[i].id == rootIdx)) {
                    _context2.next = 7;
                    break;
                  }
                  rootIdx = i;
                  return _context2.abrupt("break", 10);
                case 7:
                  i++;
                  _context2.next = 3;
                  break;
                case 10:
                  if (!(rootIdx == undefined)) {
                    _context2.next = 13;
                    break;
                  }
                  console.log("rootIdx  is  undifen");
                  return _context2.abrupt("return");
                case 13:
                  //初始位置
                  pos = v3(BYFishRoute.anchor[rootIdx].points[0][0] + BYFishRoute.offset[offsetID].x, BYFishRoute.anchor[rootIdx].points[0][1] + BYFishRoute.offset[offsetID].y);
                  _context2.next = 16;
                  return this.createOneFishByFishType(fishType, pos, parentNode);
                case 16:
                  fish = _context2.sent;
                  if (!(fish === undefined)) {
                    _context2.next = 21;
                    break;
                  }
                  console.log('fishType = ', fishType);
                  console.log("fish =  undefined");
                  return _context2.abrupt("return");
                case 21:
                  fishNode = fish.node;
                  fishNode.name = fishId.toString(); //tag->name
                  fish.fishFormationId = -1;
                  fish.rootIdx = rootIdx;
                  fish.typeId = fishType;
                  fish.fishId = fishId;
                  point = v2(BYFishRoute.offset[offsetID].x, BYFishRoute.offset[offsetID].y);
                  xstartPosNum = 0;
                  curveTimex = BYFishRoute.anchor[rootIdx].curveTime;
                  xfirstTime = curveTimex;
                  fish.move(point, xstartPosNum, xfirstTime);
                  return _context2.abrupt("return", fish);
                case 33:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function createFish(_x4, _x5, _x6, _x7, _x8) {
            return _createFish.apply(this, arguments);
          }
          return createFish;
        }() // 创建鱼
        ;

        _proto.createOneFishByFishType = /*#__PURE__*/
        function () {
          var _createOneFishByFishType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fishType, pos, parentNode) {
            var pre, fishPre, fishNode, fish;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  pre = this.fishPreMap.get(fishType);
                  _context3.t0 = pre;
                  if (_context3.t0) {
                    _context3.next = 6;
                    break;
                  }
                  _context3.next = 5;
                  return ResLoadHelper.loadFish(fishType);
                case 5:
                  _context3.t0 = _context3.sent;
                case 6:
                  fishPre = _context3.t0;
                  if (!pre) {
                    this.fishPreMap.set(fishType, fishPre);
                  }
                  if (!fishPre) {
                    _context3.next = 21;
                    break;
                  }
                  fishNode = instantiate(fishPre);
                  parentNode.addChild(fishNode);
                  fishNode.setPosition(pos);
                  fish = fishNode.getComponent(BYFish);
                  if (!fish) {
                    fish = fishNode.addComponent(BYFish);
                  }
                  fish.enabled = true;
                  fish.chgColliderState(true);
                  fish.fishId = fishType;
                  fish.isDieing = false;
                  fish.chgIceState(false);
                  fish.chgSpineState(true);
                  return _context3.abrupt("return", fish);
                case 21:
                  return _context3.abrupt("return", null);
                case 22:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function createOneFishByFishType(_x9, _x10, _x11) {
            return _createOneFishByFishType.apply(this, arguments);
          }
          return createOneFishByFishType;
        }() /** 将死鱼移除 */;
        _proto.evtFishDied = function evtFishDied(id) {
          var fishItemComp = this._fishList.get(id);
          if (fishItemComp) {
            fishItemComp.fish = null;
          }
        };
        _proto.handleFishLock = function handleFishLock() {
          // for (let i = 0; i < this.fishList.length; i++) {
          //     this.fishList[i].showBtn();
          // }
        };
        _proto.onNet_NewFish = function onNet_NewFish(msg) {
          this.createFishById(msg.type, Number(msg.id), msg.liveTimestamp);
        };
        _proto.onNet_FishDead = function onNet_FishDead(msg) {
          var fishItemComp = this._fishList.get(Number(msg.id));
          if (fishItemComp) {
            if (fishItemComp.fish) {
              fishItemComp.fish.playDie();
              App.gameLogic.gold = msg.coins;
              App.event.emit(EventName.Game.UPDATE_COIN);
              var fishPosCache = new Vec3();
              fishItemComp.fish.node.getPosition(fishPosCache);
              var vec3 = new Vec3(fishPosCache.x, fishPosCache.y);
              App.event.emit(EventName.Game.FLY_COIN, msg.incrementCoins, vec3);
            }
          }
        };
        _proto.onNet_RoomFish = function onNet_RoomFish(msg) {
          for (var i = 0; i < msg.fishes.length; i++) {
            if (this._fishList.get(Number(msg.fishes[i].id))) {
              continue;
            }
            this.onNet_NewFish(msg.fishes[i]);
          }
          if (msg.bullets) {
            App.event.emit(EventName.Game.CreateOldBullet, msg.bullets, msg.lastBulletId);
          }
        };
        return fishMgrCmpt;
      }(Component)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fishNetCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "800f0YczxtPO4I44utNjVcq", "fishNetCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fishNetCmpt = exports('fishNetCmpt', (_dec = ccclass('fishNetCmpt'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fishNetCmpt, _Component);
        function fishNetCmpt() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = fishNetCmpt.prototype;
        _proto.onLoad = function onLoad() {
          var _this = this;
          this.showOne();
          this.node.setScale(v3());
          tween(this.node).to(0.3, {
            scale: v3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).call(function () {
            tween(_this.node).to(0.3, {
              scale: v3()
            }, {
              easing: 'backOut'
            }).start();
          }).start();
        };
        _proto.showOne = function showOne() {
          var len = this.node.children.length;
          var idx = Math.floor(Math.random() * len);
          this.node.children.forEach(function (item) {
            return item.active = false;
          });
          this.node.children[idx].active = true;
        };
        return fishNetCmpt;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fishRoute.ts", ['cc'], function (exports) {
  var cclegacy, v2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "89638cA6A9BsbPV3CYS6w7k", "fishRoute", undefined);
      var BYFishRoute = exports('BYFishRoute', function BYFishRoute() {});
      BYFishRoute.fishName = {
        11: "小飞鱼",
        12: "小丑鱼",
        13: "旗鱼",
        14: "小乌贼",
        15: "斑马鱼",
        16: "蓝吊",
        17: "球迷鱼",
        18: "河豚",
        21: "斑点鱼",
        22: "海马",
        23: "绿齿鱼",
        24: "霓裳",
        25: "沙丁鱼群",
        26: "金鲤鱼群",
        27: "灯笼鱼",
        31: "剑鱼",
        32: "小龙虾",
        33: "锦绣龙虾",
        34: "白鳍豚",
        35: "鳄鱼",
        41: "大白鲨",
        42: "锯齿鲨",
        43: "虎头鲸",
        44: "招财金龟",
        45: "七彩海星",
        51: "金头鲸",
        52: "金钱鲤",
        53: "招财金蟾",
        54: "撼海蓝鲸",
        55: "拨海玄龟",
        61: "人鱼公主",
        62: "四海龙王",
        63: "霸王乌贼",
        71: "基多拉第一形态",
        72: "基多拉第二形态",
        81: "倍增河豚",
        82: "炸弹蟹",
        83: "闪电水母",
        84: "连珠鱼",
        85: "电磁蟹",
        86: "冰冻鱼",
        87: "钻头蟹"
      };
      BYFishRoute.spineName = {
        11: "小飞鱼",
        12: "小丑鱼",
        13: "旗鱼",
        14: "小乌贼",
        15: "斑马鱼",
        16: "蓝吊",
        17: "球迷鱼",
        18: "河豚",
        21: "斑点鱼",
        22: "海马",
        23: "绿齿鱼",
        24: "霓裳",
        25: "沙丁鱼群",
        26: "金鲤鱼群",
        27: "灯笼鱼",
        31: "剑鱼",
        32: "小龙虾",
        33: "锦绣龙虾",
        34: "白鳍豚",
        35: "鳄鱼",
        41: "大白鲨",
        42: "锯齿鲨",
        43: "虎头鲸",
        44: "招财金龟",
        45: "七彩海星",
        51: "金头鲸",
        52: "金钱鲤",
        53: "招财金蟾",
        54: "撼海蓝鲸",
        55: "拨海玄龟",
        61: "人鱼公主",
        62: "霸王乌贼",
        63: "金头鲸",
        71: "基多拉第一形态",
        72: "基多拉第二形态",
        81: "倍增河豚",
        82: "炸弹蟹",
        83: "闪电水母",
        84: "连珠鱼",
        85: "电磁蟹",
        86: "冰冻鱼",
        87: "钻头蟹"
      };
      BYFishRoute.fiveBzeirArr = [[v2(0, 0), v2(775 - 568, 769 - 320), v2(1270 - 568, 292 - 320), v2(1108 - 568, 521 - 320)], [v2(0, 0), v2(228 - 568, 654 - 320), v2(786 - 568, 872 - 320), v2(504 - 568, 894 - 320)], [v2(0, 0), v2(71 - 568, 43 - 320), v2(40 - 568, 824 - 320), v2(-8 - 568, 638 - 320)], [v2(0, 0), v2(700 - 568, -193 - 320), v2(-63 - 568, -77 - 320), v2(83 - 568, -181 - 320)], [v2(0, 0), v2(950 - 568, 307 - 320), v2(826 - 568, -260 - 320), v2(983 - 568, -46 - 320)]];
      BYFishRoute.anchor = [{
        id: 0,
        bodyType: [1],
        curveTime: 9,
        points: [[980, -291], [256, 145], [256, 145], [-107, -46], [-107, -46], [-779, 144]]
      }, {
        id: 1,
        bodyType: [1],
        curveTime: 10,
        points: [[-829, 90], [-328, -147], [-328, -147], [8, -4], [8, -4], [438.4, 110.6], [438.4, 110.6], [763.4, 178.4]]
      }, {
        id: 11,
        bodyType: [2],
        curveTime: 10,
        points: [[-915, 207], [-486, 185], [-486, 185], [-284, -73], [-284, -73], [211, 11], [211, 11], [578, -72], [578, -72], [793, -172]]
      }, {
        id: 10,
        bodyType: [2],
        curveTime: 10,
        points: [[-805, 276], [-603, 122], [-603, 122], [-289.9, 132.1], [-289.9, 132.1], [92, 146], [92, 146], [444, -24], [444, -24], [829, -66]]
      }, {
        id: 13,
        bodyType: [2],
        curveTime: 10,
        points: [[673, 379], [329, -119], [329, -119], [103, 109], [103, 109], [-96, 99], [-96, 99], [-277, -129], [-277, -129], [-606, -185], [-606, -185], [-917, -212]]
      }, {
        id: 12,
        bodyType: [2],
        curveTime: 10,
        points: [[-826, 325], [-394, 244], [-394, 244], [-75, -53], [-75, -53], [334, -188], [334, -188], [800, -185]]
      }, {
        id: 14,
        bodyType: [2],
        curveTime: 10,
        points: [[837, -187], [37, -30], [37, -30], [-494.1, 58.2], [-494.1, 58.2], [-896, 127]]
      }, {
        id: 15,
        bodyType: [2],
        curveTime: 10,
        points: [[583, -375], [145, -107], [145, -107], [-483, 72], [-483, 72], [-787, 251]]
      }, {
        id: 16,
        bodyType: [2],
        curveTime: 10,
        points: [[778, -74], [195, -62], [195, -62], [-229, 58], [-229, 58], [-545, 138], [-545, 138], [-797, 262]]
      }, {
        id: 18,
        bodyType: [3],
        curveTime: 12,
        points: [[833, 126], [86, -35], [86, -35], [-356, 34], [-356, 34], [-646, -370]]
      }, {
        id: 17,
        bodyType: [3],
        curveTime: 12,
        points: [[-802, -393], [-549, -198], [-549, -198], [-228.4, -181.2], [-228.4, -181.2], [153, 80], [153, 80], [485, 406]]
      }, {
        id: 19,
        bodyType: [3],
        curveTime: 9,
        points: [[781, -146], [114, 13], [114, 13], [-503, 91], [-503, 91], [-846, -164]]
      }, {
        id: 2,
        bodyType: [1],
        curveTime: 10,
        points: [[795, -276], [235, -49], [235, -49], [-97, 9], [-97, 9], [-437, 36], [-437, 36], [-780, 34]]
      }, {
        id: 20,
        bodyType: [3],
        curveTime: 12,
        points: [[764, -255], [430.9, -5.1], [430.9, -5.1], [-25, 135], [-25, 135], [-319, -19], [-319, -19], [-853, -84]]
      }, {
        id: 21,
        bodyType: [3],
        curveTime: 12,
        points: [[-655, -408], [-175, -74], [-175, -74], [111.4, 253.2], [111.4, 253.2], [458, 365]]
      }, {
        id: 22,
        bodyType: [3],
        curveTime: 12,
        points: [[-825, -35], [-371, 1], [-371, 1], [143, -22], [143, -22], [816, -10]]
      }, {
        id: 23,
        bodyType: [3],
        curveTime: 12,
        points: [[778, -283], [218, 84], [218, 84], [-461, 87], [-461, 87], [-827, -242]]
      }, {
        id: 24,
        bodyType: [3],
        curveTime: 12,
        points: [[-841, 395], [-169, -15], [-169, -15], [208.9, -163.7], [208.9, -163.7], [492, -394]]
      }, {
        id: 25,
        bodyType: [3],
        curveTime: 12,
        points: [[839, -52], [35, 17], [35, 17], [-399.1, 124.3], [-399.1, 124.3], [-810, 259]]
      }, {
        id: 26,
        bodyType: [3],
        curveTime: 12,
        points: [[-877, -253], [-361, -113], [-361, -113], [-6, 76], [-6, 76], [680, 264]]
      }, {
        id: 27,
        bodyType: [4],
        curveTime: 12,
        points: [[751, -227], [138, -85], [138, -85], [-435, 245], [-435, 245], [-906, 109]]
      }, {
        id: 28,
        bodyType: [4],
        curveTime: 12,
        points: [[-924, -146], [-143, -92], [-143, -92], [264, 138.4], [264, 138.4], [718, 316]]
      }, {
        id: 29,
        bodyType: [4],
        curveTime: 12,
        points: [[929, -76], [214, 85], [214, 85], [-375.7, 9.8], [-375.7, 9.8], [-852, -168]]
      }, {
        id: 3,
        bodyType: [1],
        curveTime: 10,
        points: [[-782, 182], [-391, 198], [-391, 198], [-50, 63], [-50, 63], [274, -19], [274, -19], [780, 289]]
      }, {
        id: 30,
        bodyType: [4],
        curveTime: 12,
        points: [[766, 287], [262, 137], [262, 137], [-264, 120], [-264, 120], [-483, -203], [-483, -203], [-870, -195]]
      }, {
        id: 31,
        bodyType: [4],
        curveTime: 12,
        points: [[-841, -133], [-315, 59], [-315, 59], [218, 89], [218, 89], [828, 189]]
      }, {
        id: 32,
        bodyType: [4],
        curveTime: 12,
        points: [[-883, 268], [-466, 104], [-466, 104], [-4, 138], [-4, 138], [289, -22], [289, -22], [741.7, -227.3]]
      }, {
        id: 33,
        bodyType: [4],
        curveTime: 12,
        points: [[833, -192], [102, -101], [102, -101], [-280.3, 3.6], [-280.3, 3.6], [-561, -177], [-561, -177], [-892, -69]]
      }, {
        id: 34,
        bodyType: [4],
        curveTime: 12,
        points: [[779, 366], [239, 98], [239, 98], [-370, 144], [-370, 144], [-916, -170]]
      }, {
        id: 35,
        bodyType: [4],
        curveTime: 9,
        points: [[-638, 366], [-182, 167], [-182, 167], [285, -85], [285, -85], [842, -247]]
      }, {
        id: 36,
        bodyType: [4],
        curveTime: 12,
        points: [[-841, 312], [-344, 159], [-344, 159], [326.7, -61.9], [326.7, -61.9], [792, 28]]
      }, {
        id: 37,
        bodyType: [5],
        curveTime: 12,
        points: [[853, 281], [120, -178], [120, -178], [-463, 120], [-463, 120], [-888, 84]]
      }, {
        id: 38,
        bodyType: [5],
        curveTime: 14,
        points: [[822, -148], [108, -4], [108, -4], [-377, 20.8], [-377, 20.8], [-644, 96], [-644, 96], [-919, 90]]
      }, {
        id: 39,
        bodyType: [5],
        curveTime: 14,
        points: [[807, 237], [207, 63], [207, 63], [-276, -88], [-276, -88], [-593, -97], [-593, -97], [-901.1, -129.4]]
      }, {
        id: 4,
        bodyType: [1],
        curveTime: 10,
        points: [[-867, -309], [-506, -159], [-506, -159], [-140, -70], [-140, -70], [188, 37], [188, 37], [560, 370]]
      }, {
        id: 40,
        bodyType: [5],
        curveTime: 14,
        points: [[-876, 61], [-242, -81], [-242, -81], [232, 102], [232, 102], [745, -103.7]]
      }, {
        id: 41,
        bodyType: [5],
        curveTime: 14,
        points: [[-878, 68], [-460, 50], [-460, 50], [-161, -47], [-161, -47], [164, -132], [164, -132], [886, -163]]
      }, {
        id: 42,
        bodyType: [5],
        curveTime: 13,
        points: [[-895, 164], [-402, -29], [-402, -29], [140, -189], [140, -189], [815, 33]]
      }, {
        id: 43,
        bodyType: [6],
        curveTime: 23,
        points: [[-996, 60], [-613.3, -122.9], [-613.3, -122.9], [-287, -52], [-287, -52], [17.5, 59.7], [17.5, 59.7], [398.4, 40.7], [398.4, 40.7], [959, 220]]
      }, {
        id: 44,
        bodyType: [6],
        curveTime: 23,
        points: [[-582, 464], [-72, -58], [-72, -58], [491, -242.2], [491, -242.2], [916, -223]]
      }, {
        id: 45,
        bodyType: [6],
        curveTime: 23,
        points: [[-928, 261], [-103, 70], [-103, 70], [367.3, -92.7], [367.3, -92.7], [979, -266]]
      }, {
        id: 46,
        bodyType: [6],
        curveTime: 23,
        points: [[902, 168], [327, -214], [327, -214], [-265, 93], [-265, 93], [-619, -50], [-619, -50], [-992, -119]]
      }, {
        id: 47,
        bodyType: [6],
        curveTime: 14,
        points: [[759, 127], [241, -228], [241, -228], [-253.5, 32.8], [-253.5, 32.8], [-601, -124], [-601, -124], [-890, -81]]
      }, {
        id: 48,
        bodyType: [6],
        curveTime: 14,
        points: [[841, -191], [229, -163], [229, -163], [-338, 218], [-338, 218], [-854, -257]]
      }, {
        id: 5,
        bodyType: [1],
        curveTime: 10,
        points: [[-744, 287], [-557, -23], [-557, -23], [-231, 7], [-231, 7], [183, -91], [183, -91], [798, 252]]
      }, {
        id: 6,
        bodyType: [1],
        curveTime: 10,
        points: [[808, -278], [298, -216], [298, -216], [98.9, -160.1], [98.9, -160.1], [-99.2, -62], [-99.2, -62], [-400, 98], [-400, 98], [-798, 267]]
      }, {
        id: 7,
        bodyType: [2],
        curveTime: 10,
        points: [[-819, 111], [-531, 184], [-531, 184], [-294, 239], [-294, 239], [9, 143], [9, 143], [330, 36], [330, 36], [796, -234]]
      }, {
        id: 8,
        bodyType: [2],
        curveTime: 10,
        points: [[-808, -177], [-355, -80], [-355, -80], [10, -187], [10, -187], [353.4, -30.5], [353.4, -30.5], [769.2, 164.5]]
      }, {
        id: 9,
        bodyType: [2],
        curveTime: 10,
        points: [[-828, 255], [-538, 198], [-538, 198], [-310, -120], [-310, -120], [134, 42], [134, 42], [530.2, -35.4], [530.2, -35.4], [783, 46]]
      }, {
        id: 101,
        bodyType: [24],
        curveTime: 10,
        points: [[-780, 163], [-243, 198], [-243, 198], [231, 191], [231, 191], [791, 223]]
      }, {
        id: 102,
        bodyType: [24],
        curveTime: 8,
        points: [[-786, 255], [-422, 214], [-422, 214], [14, 193], [14, 193], [483, 193], [483, 193], [804, 140]]
      }, {
        id: 103,
        bodyType: [13],
        curveTime: 10,
        points: [[-784, -210], [-276, -169], [-276, -169], [203, -187], [203, -187], [796, -136]]
      }, {
        id: 104,
        bodyType: [13],
        curveTime: 8,
        points: [[-801, -121], [-472, -154], [-472, -154], [19, -163], [19, -163], [458, -156], [458, -156], [791, -220]]
      }, {
        id: 105,
        bodyType: [64],
        curveTime: 12,
        points: [[-839, 29], [-389, 24], [-389, 24], [222, 4], [222, 4], [910, 23]]
      }, {
        id: 110,
        bodyType: [1],
        curveTime: 9,
        points: [[-712, -159], [-500, 50], [-500, 50], [-200, 50], [-200, 50], [100, 50], [100, 50], [400, 50], [400, 50], [700, 50]]
      }, {
        id: 111,
        bodyType: [1],
        curveTime: 9,
        points: [[-712, 159], [-500, -50], [-500, -50], [-200, -50], [-200, -50], [100, -50], [100, -50], [400, -50], [400, -50], [700, -50]]
      }, {
        id: 112,
        bodyType: [1],
        curveTime: 9,
        points: [[-700, 0], [700, 0]]
      }, {
        id: 113,
        bodyType: [1],
        curveTime: 9,
        points: [[-100, -380], [-750, 300]]
      }, {
        id: 114,
        bodyType: [1],
        curveTime: 9,
        points: [[100, -380], [750, 300]]
      }, {
        id: 115,
        bodyType: [1],
        curveTime: 9,
        points: [[-50, -400], [-50, 400]]
      }, {
        id: 116,
        bodyType: [1],
        curveTime: 9,
        points: [[50, -400], [50, 400]]
      }];
      BYFishRoute.control = [{
        points: [[690, -248], [438, -286], [206.4, 273.3], [43.7, 108.9], [-570, -530], [-954, -47]]
      }, {
        points: [[-689.5, 106.19999999999999], [-607, -226], [-173.3, -112.9], [-61, 30], [122.5, -56.7], [379.3, 74.1], [557.4, 183.5], [658.4, 88.3]]
      }, {
        points: [[-705, 110], [-751, 257], [-271, 71], [-417, 78], [-171, -194], [33.2, -23], [434, 56], [523.9, 26.7], [656, -207], [778.7, -138.2]]
      }, {
        points: [[-713, 270], [-765, 131], [-475, 111], [-461.9, 198.1], [-177.29999999999998, 85.3], [-90.8, 245.5], [255.6, 59.9], [266, 135], [590, -160.4], [699, -173]]
      }, {
        points: [[668, 215], [434.9, -163.2], [204, -76], [240.4, 169.1], [9, 65], [-2, 128], [-262, 45], [-203, -79], [-457, -240], [-491, -111], [-771, -301], [-832, -209]]
      }, {
        points: [[-677, 202], [-560, 312], [-194.5, 171.5], [-328, 108], [73.80000000000001, -162.3], [239, -63.5], [460, -356], [732, -267]]
      }, {
        points: [[643.4, -242.7], [314, 152], [-213.5, -187.4], [-327.9, 90.3], [-699.2, 22.3], [-799.4000000000001, 92.6]]
      }, {
        points: [[451, -337], [491, -80], [-111, -133], [-135.3, 151.1], [-613.9, 43], [-798, 109]]
      }, {
        points: [[702, -417], [446, 67], [-84, -208.4], [-93.19999999999999, 12.599999999999994], [-292.2000000000001, 87.00000000000007], [-417.5, 127], [-663, 148], [-654, 263]]
      }, {
        points: [[499, 20], [321.4, 170.6], [-119, -215], [-76.4, 119.2], [-531, -7.3], [-526, -217]]
      }, {
        points: [[-790, -359], [-674, -218], [-380, -169], [-381.6, -224.3], [-46.4, -135.3], [-66, 23], [335, 127.7], [385, 171]]
      }, {
        points: [[599, -101], [403, 6], [-270, 22], [-229, 299], [-592.2, 28.3], [-674, 2]]
      }, {
        points: [[462, -334], [546, 35], [82.5, -92.4], [-32.9, -59.9], [-199, 127], [-341.9, 119.6], [-575, -80], [-693.4, -77.89999999999998]]
      }, {
        points: [[746, -101], [728, 83], [160.2, -91.3], [255.8, 84.30000000000001], [-164.6, 161.5], [-180, 70], [-481, -130], [-748, -194]]
      }, {
        points: [[-258, -301], [-313, -176.6], [1, 57], [-25.6, 182.1], [256.8, 334.5], [325, 273]]
      }, {
        points: [[-766, 125], [-442.7, 104.2], [-202, -231], [-6, -178], [428, 296], [683, 229]]
      }, {
        points: [[621.8, -163.2], [354.4, -2.000000000000014], [61.3, 196.59999999999997], [-347.7, 188.6], [-620, -43], [-669, -198]]
      }, {
        points: [[-537.5, 235.5], [-308, 83], [-71.7, -91.7], [118.2, -27.6], [287.2, -268.7], [489.8, -265.6]]
      }, {
        points: [[577.4, -328.5], [175.5, 72], [-116.9, -40], [-227.9, 135.5], [-549.1000000000007, 112.8], [-587, 286.4]]
      }, {
        points: [[-742, -157], [-434.8, -224.1], [-282.9, 2.2], [-105.1, 13.5], [191, 197], [580, 218]]
      }, {
        points: [[522, -83], [440, -168], [-136.2, -16.1], [-244.5, 220], [-583.5, 262.5], [-738.8, 217.89999999999998]]
      }, {
        points: [[-754, -351], [-322, -341], [-28.4, 67.9], [176.6, 14.1], [362.4, 278.4], [601, 277]]
      }, {
        points: [[701, -297], [403.7, 191.2], [-167, -119], [-254.5, 82.1], [-555, -89], [-634, 27]]
      }, {
        points: [[-743, 310], [-487, 333], [-323.7, 115.4], [-247.9, -30.5], [94.70000000000005, 133.9], [114, -44], [417.9, -8.4], [617, 304]]
      }, {
        points: [[415, 202], [344, 252], [108.99999999999955, -72.99999999999994], [-100, 151], [-387.7, 92.6], [-311, -139.7], [-662.2, -273.4], [-668, -169]]
      }, {
        points: [[-782, -55], [-416, 11], [-210, 107], [-101, 202], [325, 54], [530, -110]]
      }, {
        points: [[-661.4, 256], [-672, 11], [-296, 173], [-98.2, 242.6], [61.5, 61.6], [221, 88], [335.4, -104.6], [632.5, -190.3]]
      }, {
        points: [[464, -160], [236, -30], [-4.6, -163.1], [-153.5, -11.7], [-422.8, 32.4], [-452, -137], [-694.6, -235.1], [-715, -90]]
      }, {
        points: [[561, 288], [531, 131], [71, 71], [-158, 325], [-459.8, 73.7], [-772, -166]]
      }, {
        points: [[-424, 383], [-414, 229], [25, 115], [61.6, -80.7], [596, -106], [548, -275]]
      }, {
        points: [[-746, 267], [-555, 142], [-120, 176.2], [3.7, -223.3], [383.8, -33.4], [558, 33]]
      }, {
        points: [[853, 220], [500.7, -357.4], [-101, -70], [-208.2, 205.8], [-636.8, 60], [-795, 14]]
      }, {
        points: [[587, -159], [341, 145], [-62, -111.9], [-167, 108], [-496.5, -28.8], [-564.3, 158.7], [-790.2, -7.3], [-796.1, 103.7]]
      }, {
        points: [[446, 89], [312, 180], [63, -93], [54, 64], [-433.9, -158.9], [-470.7, -7.9], [-720.4, -192], [-741, -93.7]]
      }, {
        points: [[-869, -234], [-583.9, -267.6], [-386, -3], [-254.8, -219.8], [-75.19999999999999, 20.19999999999999], [79, 2], [319.1, 78.5], [581.4000000000001, 168.6]]
      }, {
        points: [[-561, 145], [-588, -169], [9.400000000000006, 10.700000000000017], [125.2, 165.5], [444.8, -18.1], [471, 180.3]]
      }, {
        points: [[-654, 55], [-668, -1], [-324.6, 79], [-365.99999999999994, 5], [-55.30000000000001, -79.19999999999999], [32.700000000000045, -35.400000000000006], [324, -275], [700, -203]]
      }, {
        points: [[-607, 175], [-585.2, -115.8], [-267.5, 30.200000000000003], [-2.5, -112.9], [375, -316.2], [596, -115]]
      }, {
        points: [[-796, -8.999999999999979], [-756.3, -113.9], [-465.3, -138.7], [-489, -78.4], [-180.8, -32.8], [-171.50000000000006, 44.7], [289.2, 99.6], [253.2, 35.4], [723.3999999999999, 61.699999999999996], [770, 205.00000000000003]]
      }, {
        points: [[-372, 421], [-299, 2], [165.1, -127], [255.4, -288.7], [655.6, -205.7], [740.1, -255]]
      }, {
        points: [[-750, 165], [-332, 198], [171.2, -91.3], [175, 8], [523.4, -173.8], [896.8, -170]]
      }, {
        points: [[723, 107], [638, -159], [16.30000000000001, -262.2], [-29.8, 75.5], [-369, 96], [-440, -47.3], [-851, -29], [-913, -86]]
      }, {
        points: [[603, -207], [370.5, -170], [55.89999999999998, -304.1], [-2.5, 39.5], [-367.6, 31.7], [-451, 82], [-697.8, -263.8], [-787.9999999999999, -132.99999999999991]]
      }, {
        points: [[565, -233], [514, -36], [20.4, -222.3], [-86.1, 218.1], [-489, 218], [-651, -264]]
      }, {
        points: [[-717, 21], [-617, 133], [-514.4, -136.3], [-378, -116], [-85, 118], [93.8, -64.1], [357.1, -159], [731, 312]]
      }, {
        points: [[723, -6], [396, -122.9], [227, -293], [139.3, -256.4], [59.3, -61.8], [-43.3, -131], [-245.6, 113.7], [-309, 132.7], [-502.5, 61.7], [-731, 214]]
      }, {
        points: [[-745, 113], [-713, 289], [-402, 112.5], [-396.5, 194], [-214.4, 282.3], [-35.599999999999994, 168.8], [107.3, 81.5], [266.5, 92.2], [424, -47.2], [737, -99]]
      }, {
        points: [[-510, -266], [-581, -84], [-179.1, -76.4], [-169, -191], [216, -176], [192.1, -65.4], [473.29999999999995, -6.299999999999997], [655, 213.9]]
      }, {
        points: [[-648, 170], [-670.7, 283.3], [-401, 116], [-495, -11], [-191, -193], [-26.3, 136.1], [248.8, -26.8], [392.6, 64.8], [594.2, -86.7], [612, 135]]
      }, {
        points: [[-422, 408], [-414, 19], [-46, 367], [-11, 33], [390, 401], [404, -42]]
      }, {
        points: [[-605, 171], [-561, 61], [-260, 409], [-204, -12], [152, 412], [187, -42], [505, 358], [674, 128]]
      }, {
        points: [[-448, 73], [-415, -346], [-26, 37], [2, -335], [416, 36], [451, -423]]
      }, {
        points: [[-672, -149], [-586, -293], [-246, 42], [-214, -388], [175, 38], [202, -392], [518, -28], [678, -203]]
      }, {
        points: [[-747, -26], [-706, -94], [-110, 127], [-121, -140], [550, 128], [553, -141]]
      }, {
        points: [[-674, -269], [-563, -366], [-447, 380], [-222, 348], [-202, -342], [93, -343], [174, 360], [350, 328], [411, -347], [681, -354]]
      }, {
        points: [[-674, 269], [-563, 266], [-447, -330], [-222, -330], [-202, 350], [93, 350], [174, -350], [350, -350], [411, 350], [681, 350]]
      }, {
        points: [[-662, 0], [218, 0]]
      }, {
        points: [[-100, -270], [-450, 300]]
      }, {
        points: [[100, -270], [450, 300]]
      }, {
        points: [[-50, -290], [-50, 350]]
      }, {
        points: [[50, -290], [50, 350]]
      }];
      BYFishRoute.offset = [{
        id: 0,
        x: 0,
        y: 0
      }, {
        id: 1,
        x: 0,
        y: 0
      }, {
        id: 2,
        x: 0,
        y: 0
      }, {
        id: 3,
        x: 0,
        y: 0
      }, {
        id: 4,
        x: 0,
        y: 0
      }, {
        id: 5,
        x: 0,
        y: 0
      }, {
        id: 6,
        x: 0,
        y: 0
      }, {
        id: 7,
        x: 0,
        y: 0
      }, {
        id: 8,
        x: 0,
        y: 0
      }, {
        id: 9,
        x: 0,
        y: 0
      }, {
        id: 10,
        x: -150 + 16,
        y: 150 - 16 * 1
      }, {
        id: 11,
        x: -150 + 16 * 3,
        y: 150 - 16 * 1
      }, {
        id: 12,
        x: -150 + 16 * 5,
        y: 150 - 16 * 1
      }, {
        id: 13,
        x: -150 + 16,
        y: 150 - 16 * 3
      }, {
        id: 14,
        x: -150 + 16 * 3,
        y: 150 - 16 * 3
      }, {
        id: 15,
        x: -150 + 16 * 5,
        y: 150 - 16 * 3
      }, {
        id: 16,
        x: -150 + 16,
        y: 150 - 16 * 5
      }, {
        id: 17,
        x: -150 + 16 * 3,
        y: 150 - 16 * 5
      }, {
        id: 18,
        x: -150 + 16 * 5,
        y: 150 - 16 * 3
      }, {
        id: 19,
        x: -150 + 16 * 5,
        y: 150 - 16 * 3
      }, {
        id: 20,
        x: -150 + 16,
        y: 150 - 16 * 7
      }, {
        id: 21,
        x: -150 + 16 * 3,
        y: 150 - 16 * 7
      }, {
        id: 22,
        x: -150 + 16 * 5,
        y: 150 - 16 * 7
      }, {
        id: 23,
        x: -150 + 16,
        y: 150 - 16 * 9
      }, {
        id: 24,
        x: -150 + 16 * 3,
        y: 150 - 16 * 9
      }, {
        id: 25,
        x: -150 + 16 * 5,
        y: 150 - 16 * 9
      }, {
        id: 26,
        x: -150 + 16,
        y: 150 - 16 * 11
      }, {
        id: 27,
        x: -150 + 16 * 3,
        y: 150 - 16 * 11
      }, {
        id: 28,
        x: -150 + 16 * 5,
        y: 150 - 16 * 11
      }, {
        id: 29,
        x: -150 + 16 * 5,
        y: 150 - 16 * 11
      }, {
        id: 30,
        x: -150 + 16,
        y: 150 - 16 * 13
      }, {
        id: 31,
        x: -150 + 16 * 3,
        y: 150 - 16 * 13
      }, {
        id: 32,
        x: -150 + 16 * 5,
        y: 150 - 16 * 13
      }, {
        id: 33,
        x: -150 + 16,
        y: 150 - 16 * 15
      }, {
        id: 34,
        x: -150 + 16 * 3,
        y: 150 - 16 * 15
      }, {
        id: 35,
        x: -150 + 16 * 5,
        y: 150 - 16 * 15
      }, {
        id: 36,
        x: -150 + 16,
        y: 150 - 16 * 17
      }, {
        id: 37,
        x: -150 + 16 * 3,
        y: 150 - 16 * 17
      }, {
        id: 38,
        x: -150 + 16 * 5,
        y: 150 - 16 * 17
      }, {
        id: 39,
        x: -150 + 16 * 5,
        y: 150 - 16 * 17
      }, {
        id: 40,
        x: -150 + 16 * 7,
        y: 150 - 16 * 1
      }, {
        id: 41,
        x: -150 + 16 * 9,
        y: 150 - 16 * 1
      }, {
        id: 42,
        x: -150 + 16 * 11,
        y: 150 - 16 * 1
      }, {
        id: 43,
        x: -150 + 16 * 7,
        y: 150 - 16 * 3
      }, {
        id: 44,
        x: -150 + 16 * 9,
        y: 150 - 16 * 3
      }, {
        id: 45,
        x: -150 + 16 * 11,
        y: 150 - 16 * 3
      }, {
        id: 46,
        x: -150 + 16 * 7,
        y: 150 - 16 * 5
      }, {
        id: 47,
        x: -150 + 16 * 9,
        y: 150 - 16 * 5
      }, {
        id: 48,
        x: -150 + 16 * 11,
        y: 150 - 16 * 5
      }, {
        id: 49,
        x: -150 + 16 * 11,
        y: 150 - 16 * 5
      }, {
        id: 50,
        x: -150 + 16 * 7,
        y: 150 - 16 * 7
      }, {
        id: 51,
        x: -150 + 16 * 9,
        y: 150 - 16 * 7
      }, {
        id: 52,
        x: -150 + 16 * 11,
        y: 150 - 16 * 7
      }, {
        id: 53,
        x: -150 + 16 * 7,
        y: 150 - 16 * 9
      }, {
        id: 54,
        x: -150 + 16 * 9,
        y: 150 - 16 * 9
      }, {
        id: 55,
        x: -150 + 16 * 11,
        y: 150 - 16 * 9
      }, {
        id: 56,
        x: -150 + 16 * 7,
        y: 150 - 16 * 11
      }, {
        id: 57,
        x: -150 + 16 * 9,
        y: 150 - 16 * 11
      }, {
        id: 58,
        x: -150 + 16 * 11,
        y: 150 - 16 * 11
      }, {
        id: 59,
        x: -150 + 16 * 11,
        y: 150 - 16 * 11
      }, {
        id: 60,
        x: -150 + 16 * 7,
        y: 150 - 16 * 13
      }, {
        id: 61,
        x: -150 + 16 * 9,
        y: 150 - 16 * 13
      }, {
        id: 62,
        x: -150 + 16 * 11,
        y: 150 - 16 * 13
      }, {
        id: 63,
        x: -150 + 16 * 7,
        y: 150 - 16 * 15
      }, {
        id: 64,
        x: -150 + 16 * 9,
        y: 150 - 16 * 15
      }, {
        id: 65,
        x: -150 + 16 * 11,
        y: 150 - 16 * 15
      }, {
        id: 66,
        x: -150 + 16 * 7,
        y: 150 - 16 * 17
      }, {
        id: 67,
        x: -150 + 16 * 9,
        y: 150 - 16 * 17
      }, {
        id: 68,
        x: -150 + 16 * 11,
        y: 150 - 16 * 17
      }, {
        id: 69,
        x: -150 + 16 * 11,
        y: 150 - 16 * 17
      }, {
        id: 70,
        x: -150 + 16 * 13,
        y: 150 - 16 * 1
      }, {
        id: 71,
        x: -150 + 16 * 15,
        y: 150 - 16 * 1
      }, {
        id: 72,
        x: -150 + 16 * 17,
        y: 150 - 16 * 1
      }, {
        id: 73,
        x: -150 + 16 * 13,
        y: 150 - 16 * 3
      }, {
        id: 74,
        x: -150 + 16 * 15,
        y: 150 - 16 * 3
      }, {
        id: 75,
        x: -150 + 16 * 17,
        y: 150 - 16 * 3
      }, {
        id: 76,
        x: -150 + 16 * 13,
        y: 150 - 16 * 5
      }, {
        id: 77,
        x: -150 + 16 * 15,
        y: 150 - 16 * 5
      }, {
        id: 78,
        x: -150 + 16 * 17,
        y: 150 - 16 * 5
      }, {
        id: 79,
        x: -150 + 16 * 17,
        y: 150 - 16 * 5
      }, {
        id: 80,
        x: -150 + 16 * 13,
        y: 150 - 16 * 7
      }, {
        id: 81,
        x: -150 + 16 * 15,
        y: 150 - 16 * 7
      }, {
        id: 82,
        x: -150 + 16 * 17,
        y: 150 - 16 * 7
      }, {
        id: 83,
        x: -150 + 16 * 13,
        y: 150 - 16 * 9
      }, {
        id: 84,
        x: -150 + 16 * 15,
        y: 150 - 16 * 9
      }, {
        id: 85,
        x: -150 + 16 * 17,
        y: 150 - 16 * 9
      }, {
        id: 86,
        x: -150 + 16 * 13,
        y: 150 - 16 * 11
      }, {
        id: 87,
        x: -150 + 16 * 15,
        y: 150 - 16 * 11
      }, {
        id: 88,
        x: -150 + 16 * 17,
        y: 150 - 16 * 11
      }, {
        id: 89,
        x: -150 + 16 * 17,
        y: 150 - 16 * 11
      }, {
        id: 90,
        x: -150 + 16 * 13,
        y: 150 - 16 * 13
      }, {
        id: 91,
        x: -150 + 16 * 15,
        y: 150 - 16 * 13
      }, {
        id: 92,
        x: -150 + 16 * 17,
        y: 150 - 16 * 13
      }, {
        id: 93,
        x: -150 + 16 * 13,
        y: 150 - 16 * 15
      }, {
        id: 94,
        x: -150 + 16 * 15,
        y: 150 - 16 * 15
      }, {
        id: 95,
        x: -150 + 16 * 17,
        y: 150 - 16 * 15
      }, {
        id: 96,
        x: -150 + 16 * 13,
        y: 150 - 16 * 17
      }, {
        id: 97,
        x: -150 + 16 * 15,
        y: 150 - 16 * 17
      }, {
        id: 98,
        x: -150 + 16 * 17,
        y: 150 - 16 * 17
      }, {
        id: 99,
        x: -150 + 16 * 17,
        y: 150 - 16 * 17
      }];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishWhaleGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts', './NetGameServer.ts', './resLoadHelper.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, assetManager, GameMgr, SubGameDef, SubGameMgr, ModuleDef, gameNet, ResLoadHelper, Logger;
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
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "1d7edM5/YdJubQeGddnzhF6", "FishWhaleGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishWhaleGameMgr = exports('FishWhaleGameMgr', (_dec = ccclass('FishWhaleGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(FishWhaleGameMgr, _GameMgr);
        function FishWhaleGameMgr() {
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
          _this._preloadResIndex = 0;
          _this._preloadResTotal = void 0;
          _this._gameType = SubGameDef.FISH_WHALE;
          _this._getData = false;
          _this._gameScene = {
            name: 'game_fish_whale',
            bundle: ModuleDef.FISH_WHALE
          };
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          return _this;
        }
        var _proto = FishWhaleGameMgr.prototype;
        _proto.init = function init() {
          ResLoadHelper.setBundle(assetManager.getBundle(ModuleDef.FISH_WHALE));
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
                  this._preloadResIndex = 0;
                  this._preloadResTotal = 6;
                  processFun(0);
                  _context.next = 5;
                  return this.loadResource(processFun);
                case 5:
                  _context.next = 7;
                  return this.preLoadGameScene(processFun);
                case 7:
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
        }();
        _proto.loadResource = /*#__PURE__*/function () {
          var _loadResource = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(processFun) {
            var url1, url2, url3, url4;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  Logger.trace("load preload resource start:" + SubGameDef.FISH_WHALE);
                  url1 = ["./prefab/ui/gameView"];
                  _context2.next = 4;
                  return new Promise(function (resolve, reject) {
                    ResLoadHelper.preloadPath(url1, null, function () {
                      // 加载成功，调用 resolve 通知 Promise 操作完成
                      resolve(true);
                    }, function (err) {
                      // 加载出错，调用 reject 并传递错误信息
                      reject(err);
                    });
                  });
                case 4:
                  this._preloadResIndex++;
                  processFun(this._preloadResIndex / this._preloadResTotal);
                  url2 = ["./prefab/pao/bullet"];
                  _context2.next = 9;
                  return new Promise(function (resolve, reject) {
                    ResLoadHelper.preloadPath(url2, null, function () {
                      // 加载成功，调用 resolve 通知 Promise 操作完成
                      resolve(true);
                    }, function (err) {
                      // 加载出错，调用 reject 并传递错误信息
                      reject(err);
                    });
                  });
                case 9:
                  this._preloadResIndex++;
                  processFun(this._preloadResIndex / this._preloadResTotal);
                  url3 = ["./prefab/pao/pao"];
                  _context2.next = 14;
                  return new Promise(function (resolve, reject) {
                    ResLoadHelper.preloadPath(url3, null, function () {
                      // 加载成功，调用 resolve 通知 Promise 操作完成
                      resolve(true);
                    }, function (err) {
                      // 加载出错，调用 reject 并传递错误信息
                      reject(err);
                    });
                  });
                case 14:
                  this._preloadResIndex++;
                  processFun(this._preloadResIndex / this._preloadResTotal);
                  url4 = ["./prefab/pao/fishNet"];
                  _context2.next = 19;
                  return new Promise(function (resolve, reject) {
                    ResLoadHelper.preloadPath(url4, null, function () {
                      // 加载成功，调用 resolve 通知 Promise 操作完成
                      resolve(true);
                    }, function (err) {
                      // 加载出错，调用 reject 并传递错误信息
                      reject(err);
                    });
                  });
                case 19:
                  this._preloadResIndex++;
                  processFun(this._preloadResIndex / this._preloadResTotal);
                  _context2.next = 23;
                  return ResLoadHelper.loadBullet();
                case 23:
                  this._preloadResIndex++;
                  processFun(this._preloadResIndex / this._preloadResTotal);
                  Logger.trace("load preload resource end:" + SubGameDef.FISH_WHALE);
                  return _context2.abrupt("return", true);
                case 27:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadResource(_x2) {
            return _loadResource.apply(this, arguments);
          }
          return loadResource;
        }();
        _proto.preLoadGameScene = /*#__PURE__*/function () {
          var _preLoadGameScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(processFun) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    var bundle = assetManager.getBundle(ModuleDef.FISH_WHALE);
                    if (bundle) {
                      bundle.preloadScene(SubGameMgr.gameMgr.gameScene.name, null, function () {
                        processFun(1);
                        resolve(true);
                      }.bind(_this2)); //7
                    } else {
                      resolve(false);
                    }
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function preLoadGameScene(_x3) {
            return _preLoadGameScene.apply(this, arguments);
          }
          return preLoadGameScene;
        }()
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
        _createClass(FishWhaleGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new FishWhaleGameMgr();
            }
            return this._inst;
          }
        }]);
        return FishWhaleGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(FishWhaleGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlyCoinsItem2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "acbbfmdbxpMcoHg2CrQHzd9", "FlyCoinsItem", undefined);
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

System.register("chunks:///_virtual/gameCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './enumConst.ts', './eventName.ts', './viewNameConst.ts', './app.ts', './resLoadHelper.ts', './ModuleDef.ts', './globalFuncHelper.ts', './audioManager2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, PhysicsSystem2D, assetManager, input, Input, Component, Direction, EventName, ViewName, App, ResLoadHelper, ModuleDef, GlobalFuncHelper, SoundType;
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
      PhysicsSystem2D = module.PhysicsSystem2D;
      assetManager = module.assetManager;
      input = module.input;
      Input = module.Input;
      Component = module.Component;
    }, function (module) {
      Direction = module.Direction;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      GlobalFuncHelper = module.GlobalFuncHelper;
    }, function (module) {
      SoundType = module.SoundType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cae81SliudCN5hcpaZhY9Jo", "gameCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var gameCmpt = exports('gameCmpt', (_dec = ccclass('gameCmpt'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(gameCmpt, _Component);
        function gameCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "canvase", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = gameCmpt.prototype;
        _proto.onLoad = function onLoad() {
          // super.onLoad();
          PhysicsSystem2D.instance.enable = true;
          GlobalFuncHelper.clearFishNET();
          ResLoadHelper.setBundle(assetManager.getBundle(ModuleDef.FISH_WHALE));
          App.init(this.canvase);
          this.initView();
          tgx.UIMgr.inst.closeAll();
          App.audio.play('background', SoundType.Music, true);

          // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
          //     EPhysics2DDrawFlags.Pair |
          //     EPhysics2DDrawFlags.CenterOfMass |
          //     EPhysics2DDrawFlags.Joint |
          //     EPhysics2DDrawFlags.Shape;
        };

        _proto.addEvent = function addEvent() {
          input.on(Input.EventType.KEY_DOWN, this.evtKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.evtKeyUp, this);
        };
        _proto.initView = function initView() {
          App.view.openView(ViewName.Single.eGameView);
          // App.view.openView(ViewName.Single.eGameView);
          // App.view.openView(ViewName.Single.eHomeView);
          // LevelConfig.loadConfig();
        };

        _proto.evtKeyDown = function evtKeyDown(key) {
          key.keyCode == 68 && App.event.emit(EventName.Game.Move, Direction.right);
          key.keyCode == 65 && App.event.emit(EventName.Game.Move, Direction.left);
          key.keyCode == 87 && App.event.emit(EventName.Game.Move, Direction.up);
          key.keyCode == 83 && App.event.emit(EventName.Game.Move, Direction.down);
        };
        _proto.evtKeyUp = function evtKeyUp(key) {
          App.event.emit(EventName.Game.EndMove);
        };
        _proto.onClick_restartBtn = function onClick_restartBtn() {
          App.event.emit(EventName.Game.Restart);
        };
        return gameCmpt;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvase", [_dec2], {
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

System.register("chunks:///_virtual/gameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singletonClass.ts', './globalFuncHelper.ts', './resLoadHelper.ts', './storageHelper.ts', './fishCmpt.ts', './fishRoute.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, v2, v3, instantiate, SingletonClass, GlobalFuncHelper, ResLoadHelper, StorageHelper, StorageHelperKey, BYFish, BYFishRoute;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
      v3 = module.v3;
      instantiate = module.instantiate;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }, function (module) {
      GlobalFuncHelper = module.GlobalFuncHelper;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }, function (module) {
      BYFish = module.BYFish;
    }, function (module) {
      BYFishRoute = module.BYFishRoute;
    }],
    execute: function () {
      cclegacy._RF.push({}, "24298e3SlFN7o4tJ6/pxFxx", "gameLogic", undefined);
      var GameLogic = exports('GameLogic', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(GameLogic, _SingletonClass);
        function GameLogic() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SingletonClass.call.apply(_SingletonClass, [this].concat(args)) || this;
          /** 测试 */
          _this.isTest = false;
          /** 审核版本 */
          _this.isShenhe = true;
          /** 自动攻击 */
          _this.isAuto = false;
          /** 锁定攻击 */
          _this.isLock = false;
          /** 游戏结束 */
          _this.isGameOver = false;
          _this.fishPreMap = new Map();
          /** 炮台等级 */
          _this.paoLevel = 1;
          _this.gold = void 0;
          return _this;
        }
        var _proto = GameLogic.prototype;
        //金币
        _proto.onInit = /*#__PURE__*/
        function () {
          var _onInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.paoLevel = GlobalFuncHelper.getPaoLevel();
                  this.fishPreMap.clear();
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onInit() {
            return _onInit.apply(this, arguments);
          }
          return onInit;
        }();
        _proto.clearData = function clearData() {
          this.isAuto = false;
          this.isLock = false;
          this.isGameOver = false;
        }

        /**
         * 创建一条普通鱼          
         * @param fishType 类型
         * @param rootIdx 路线ID
         * @param offsetID 偏移ID
         * @param fishId 该鱼的ID
         * @param startPosNum 
         * @param firstTime 
         */;
        _proto.createFish = /*#__PURE__*/
        function () {
          var _createFish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fishType, rootIdx, offsetID, fishId, parentNode) {
            var i, pos, fish, fishNode, point, xstartPosNum, curveTimex, xfirstTime;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (fishId) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  i = 0;
                case 3:
                  if (!(i < BYFishRoute.anchor.length)) {
                    _context2.next = 10;
                    break;
                  }
                  if (!(BYFishRoute.anchor[i].id == rootIdx)) {
                    _context2.next = 7;
                    break;
                  }
                  rootIdx = i;
                  return _context2.abrupt("break", 10);
                case 7:
                  i++;
                  _context2.next = 3;
                  break;
                case 10:
                  if (this.isTest) {
                    fishId = 13;
                    rootIdx = 58;
                  }
                  if (!(rootIdx == undefined)) {
                    _context2.next = 14;
                    break;
                  }
                  console.log("rootIdx  is  undifen");
                  return _context2.abrupt("return");
                case 14:
                  //初始位置
                  pos = v3(BYFishRoute.anchor[rootIdx].points[0][0] + BYFishRoute.offset[offsetID].x, BYFishRoute.anchor[rootIdx].points[0][1] + BYFishRoute.offset[offsetID].y);
                  _context2.next = 17;
                  return this.createOneFishByFishType(fishType, pos, parentNode);
                case 17:
                  fish = _context2.sent;
                  if (!(fish === undefined)) {
                    _context2.next = 22;
                    break;
                  }
                  console.log('fishType = ', fishType);
                  console.log("fish =  undefined");
                  return _context2.abrupt("return");
                case 22:
                  fishNode = fish.node;
                  fishNode.name = fishId.toString(); //tag->name
                  fish.fishFormationId = -1;
                  fish.rootIdx = rootIdx;
                  fish.typeId = fishType;
                  fish.fishId = fishId;
                  point = v2(BYFishRoute.offset[offsetID].x, BYFishRoute.offset[offsetID].y);
                  xstartPosNum = 0;
                  curveTimex = BYFishRoute.anchor[rootIdx].curveTime;
                  xfirstTime = curveTimex;
                  fish.move(point, xstartPosNum, xfirstTime);
                  return _context2.abrupt("return", fish);
                case 34:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function createFish(_x, _x2, _x3, _x4, _x5) {
            return _createFish.apply(this, arguments);
          }
          return createFish;
        }() // 创建鱼
        ;

        _proto.createOneFishByFishType = /*#__PURE__*/
        function () {
          var _createOneFishByFishType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fishType, pos, parentNode) {
            var pre, fishPre, fishNode, fish;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  pre = this.fishPreMap.get(fishType);
                  _context3.t0 = pre;
                  if (_context3.t0) {
                    _context3.next = 6;
                    break;
                  }
                  _context3.next = 5;
                  return ResLoadHelper.loadFish(fishType);
                case 5:
                  _context3.t0 = _context3.sent;
                case 6:
                  fishPre = _context3.t0;
                  if (!pre) {
                    this.fishPreMap.set(fishType, fishPre);
                  }
                  if (!fishPre) {
                    _context3.next = 21;
                    break;
                  }
                  fishNode = instantiate(fishPre);
                  parentNode.addChild(fishNode);
                  fishNode.setPosition(pos);
                  fish = fishNode.getComponent(BYFish);
                  if (!fish) {
                    fish = fishNode.addComponent(BYFish);
                  }
                  fish.enabled = true;
                  fish.chgColliderState(true);
                  fish.fishId = fishType;
                  fish.isDieing = false;
                  fish.chgIceState(false);
                  fish.chgSpineState(true);
                  return _context3.abrupt("return", fish);
                case 21:
                  return _context3.abrupt("return", null);
                case 22:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function createOneFishByFishType(_x6, _x7, _x8) {
            return _createOneFishByFishType.apply(this, arguments);
          }
          return createOneFishByFishType;
        }() /** 获取养鱼塘中的鱼 */;
        _proto.getMyFeedFish = function getMyFeedFish() {
          var str = StorageHelper.getData(StorageHelperKey.MyFish) || "[]";
          var list = JSON.parse(str);
          console.log("myFish= " + list);
          return list;
        }

        /** 添加养鱼塘中的鱼 */;
        _proto.addMyFeedFish = function addMyFeedFish(fishId) {
          var list = this.getMyFeedFish();
          if (list.indexOf(fishId) > -1) return;
          list.push(fishId);
          StorageHelper.setData(StorageHelperKey.MyFish, JSON.stringify(list));
        };
        return GameLogic;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './enumConst.ts', './eventName.ts', './levelConfig.ts', './viewNameConst.ts', './app.ts', './util.ts', './cocosHelper.ts', './globalFuncHelper.ts', './bulletMgrCmpt.ts', './fishMgrCmpt.ts', './paoCmpt.ts', './RoomMgr.ts', './UserMgr.ts', './FlyCoinsItem2.ts', './FishWhaleGameMgr.ts', './WebsocketClient.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Vec3, Label, director, UITransform, v3, Sprite, instantiate, tween, Animation, BaseViewCmpt, Constant, EventName, LevelConfig, ViewName, App, rad2Deg, CocosHelper, GlobalFuncHelper, bulletMgrCmpt, fishMgrCmpt, paoCmpt, RoomMgr, UserMgr, FlyCoinsItem, FishWhaleGameMgr, WebsocketClient, LanguageData;
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
      Vec3 = module.Vec3;
      Label = module.Label;
      director = module.director;
      UITransform = module.UITransform;
      v3 = module.v3;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      tween = module.tween;
      Animation = module.Animation;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      Constant = module.Constant;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      LevelConfig = module.LevelConfig;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      rad2Deg = module.rad2Deg;
    }, function (module) {
      CocosHelper = module.CocosHelper;
    }, function (module) {
      GlobalFuncHelper = module.GlobalFuncHelper;
    }, function (module) {
      bulletMgrCmpt = module.bulletMgrCmpt;
    }, function (module) {
      fishMgrCmpt = module.fishMgrCmpt;
    }, function (module) {
      paoCmpt = module.paoCmpt;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      FlyCoinsItem = module.FlyCoinsItem;
    }, function (module) {
      FishWhaleGameMgr = module.FishWhaleGameMgr;
    }, function (module) {
      WebsocketClient = module.WebsocketClient;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "788ecy1oGVHD78Wq0TSW6N5", "gameViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameViewCmpt = exports('GameViewCmpt', (_dec = ccclass('gameViewCmpt'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(GameViewCmpt, _BaseViewCmpt);
        function GameViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseViewCmpt.call.apply(_BaseViewCmpt, [this].concat(args)) || this;
          _this.list = [];
          _this.target = null;
          _this.lbLevel = null;
          _this.lbPaoLevel = null;
          _this.center = null;
          _this.paotai = null;
          _this.pao = null;
          _this.bulletPos = null;
          _this.bulletManager = null;
          _this.fishManager = null;
          _this.count = 10;
          _this.isFiring = false;
          _this.firePos = new Vec3();
          _this.lbGold = null;
          _this.scoreNode = null;
          _this.data = null;
          _this.coinLayer = null;
          _initializerDefineProperty(_this, "flyCoinsItemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin_goldAniPrefab", _descriptor2, _assertThisInitialized(_this));
          _this.isHide = false;
          return _this;
        }
        var _proto = GameViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseViewCmpt.prototype.onLoad.call(this);
          this.list = this.viewList.get('center/target').children;
          this.target = this.viewList.get('center/target');
          this.center = this.viewList.get("center");
          this.lbLevel = this.viewList.get('center/lbLevel');
          this.paotai = this.viewList.get("center/pao/paotai");
          this.lbPaoLevel = this.viewList.get("center/pao/lbPaoLevel");
          this.pao = this.viewList.get("center/pao/paotai/pao").getComponent(paoCmpt);
          this.bulletManager = this.viewList.get("center/bulletManager").getComponent(bulletMgrCmpt);
          this.fishManager = this.viewList.get("center/fishManager").getComponent(fishMgrCmpt);
          this.lbGold = this.viewList.get('center/jn_bg/txtScore').getComponent(Label);
          this.scoreNode = this.viewList.get('center/jn_bg');
          this.coinLayer = this.viewList.get("ui/coin");

          // let rand = Math.ceil(Math.random() * 4);
          var rand = 4;
          this.viewList.get("bg").children.forEach(function (item) {
            item.active = +item.name == rand;
          });
          App.gameLogic.gold = UserMgr.inst.coin;
          this.updateCoinsNum();
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  RoomMgr.inst.rpc_ClientReady();
                  RoomMgr.inst.rpc_Ready();
                  FishWhaleGameMgr.inst.requestFishConfig();
                case 3:
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
        _proto.addEvents = function addEvents() {
          App.event.on(EventName.Game.TouchStart, this.evtTouchStart.bind(this), this);
          App.event.on(EventName.Game.TouchMove, this.evtTouchMove.bind(this), this);
          App.event.on(EventName.Game.TouchEnd, this.evtTouchEnd.bind(this), this);
          App.event.on(EventName.Game.FishDied, this.evtFishDied, this);
          App.event.on(EventName.Game.NextLevel, this.evtNextLevel, this);
          App.event.on(EventName.Game.FLY_COIN, this.flyCoins, this);
          App.event.on(EventName.Game.UPDATE_COIN, this.updateCoinsNum, this);
          director.on(WebsocketClient.EVENT_CONNECTED, this.onReConnect, this); //断线重连
          // App.event.on(EventName.Game.UpdataGold, this.evtUpdateGold, this);
        };

        _proto.onDisable = function onDisable() {
          App.event.off(EventName.Game.TouchStart, this);
          App.event.off(EventName.Game.TouchMove, this);
          App.event.off(EventName.Game.TouchEnd, this);
          App.event.off(EventName.Game.FishDied, this);
          App.event.off(EventName.Game.NextLevel, this);
          App.event.off(EventName.Game.FLY_COIN, this);
          App.event.off(EventName.Game.UPDATE_COIN, this);
          director.on(WebsocketClient.EVENT_CONNECTED, this.onReConnect, this); //断线重连
        };

        _proto.onReConnect = function onReConnect() {
          RoomMgr.inst.rpc_ClientReady();
        };
        _proto.evtTouchStart = function evtTouchStart(pos) {
          this.isFiring = true;
          /** 炮台旋转角度 */
          this.handlePaoRotate(pos);
          /** 发射子弹 */
          // this.startShoot();
        };

        _proto.evtTouchMove = function evtTouchMove(pos) {
          /** 炮台旋转角度 */
          this.handlePaoRotate(pos);
        };
        _proto.handlePaoRotate = function handlePaoRotate(pos) {
          var p = this.center.getComponent(UITransform).convertToNodeSpaceAR(this.paotai.worldPosition);
          var p2 = this.center.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 1));
          var angle = Math.atan2(p2.y - p.y, p2.x - p.x);
          this.paotai.angle = rad2Deg(angle) - 90;
          this.firePos = p2;
        };
        _proto.startShoot = function startShoot() {
          this.pao.playFire();
          this.bulletPos = this.viewList.get("center/pao/paotai/bulletPos").worldPosition;
          var startPos = this.center.getComponent(UITransform).convertToNodeSpaceAR(this.bulletPos);
          var p2 = this.firePos;
          this.bulletManager.shoot(startPos, p2);
        };
        _proto.evtTouchEnd = function evtTouchEnd() {
          if (App.gameLogic.isAuto) return;
          this.pao.pause();
          this.isFiring = false;
        };
        _proto.update = function update() {
          if (!this.isFiring) return;
          this.count++;
          if (this.count > 10) {
            this.count = 0;
            this.startShoot();
          }
        }

        /** 初始化 */;
        _proto.loadExtraData = /*#__PURE__*/
        function () {
          var _loadExtraData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var data;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //App.view.openView(ViewName.Single.eTargetView);
                  data = LevelConfig.getDefaultData();
                  this.data = data;

                  //this.list.forEach(item => item.active = false);
                  // for (let i = 0; i < data.targetList.length; i++) {
                  //     let name = data.targetList[i];
                  //     let item = this.target.getChildByName(name);
                  //     item.active = true;
                  //     item.getComponent(BoxCollider2D).enabled = false;
                  //     item.getComponent(RigidBody2D).enabled = false;
                  //     // data.num = 1;
                  //     item.getChildByName('lb').getComponent(Label).string = data.num + "";
                  // }
                  this.fishManager.refreshFishData();
                  //CocosHelper.updateLabelText(this.lbLevel, `第${data.id}关`);
                  this.updatePaoLevel();
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadExtraData() {
            return _loadExtraData.apply(this, arguments);
          }
          return loadExtraData;
        }();
        _proto.updatePaoLevel = function updatePaoLevel() {
          CocosHelper.updateLabelText(this.lbPaoLevel, App.gameLogic.paoLevel);
        }

        /** 下一个 */;
        _proto.evtNextLevel = function evtNextLevel() {
          this.loadExtraData();
        }

        /** 鱼儿死亡事件接收 */;
        _proto.evtFishDied = function evtFishDied(fishIndex, fishName) {
          // if (!App.gameLogic.isGameOver) {
          //     this.updateTargetFishCount(fishName);
          //     this.checkGameOver();
          // }
          // else {
          //     let view = App.view.getViewByName(ViewName.Single.eResultView);
          //     if (!view) {
          //         this.showResult(true);
          //     }
          // }
        }

        /** 刷新鱼的数量 */;
        _proto.updateTargetFishCount = function updateTargetFishCount(fishName) {
          this.list.forEach(function (item) {
            if (item.name == fishName && item.active) {
              var lb = item.getChildByName('lb').getComponent(Label);
              var count = +lb.string;
              if (count) {
                count--;
                if (count <= 0) {
                  CocosHelper.updateLabelText(lb, Constant.FinishTag);
                } else {
                  CocosHelper.updateLabelText(lb, count);
                }
              }
            }
          });
        }

        /** 检测游戏结束 */;
        _proto.checkGameOver = function checkGameOver() {
          var bool = true;
          this.list.forEach(function (item) {
            if (item.active) {
              var lb = item.getChildByName('lb').getComponent(Label);
              if (lb.string != Constant.FinishTag) {
                bool = false;
              }
            }
          });
          if (bool) {
            this.showResult(true);
          }
        };
        _proto.showResult = function showResult(bool) {
          var view = App.view.getViewByName(ViewName.Single.eResultView);
          if (view) return;
          App.view.openView(ViewName.Single.eResultView, bool, 0);
        }

        /** 退出 */;
        _proto.onClick_backBtn = function onClick_backBtn() {
          // App.view.openView(ViewName.Single.esettingGameView);
          //this.node.getChildByName('Machine').getComponent(AudioSource).stop();
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(ok) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (ok) {
                    RoomMgr.inst.exitRoom();
                  }
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));
        }

        /** 自动 */;
        _proto.onClick_autoBtn = function onClick_autoBtn(node) {
          App.gameLogic.isAuto = !App.gameLogic.isAuto;
          node.parent.getComponent(Sprite).enabled = App.gameLogic.isAuto;
          this.isFiring = App.gameLogic.isAuto;
          if (this.isFiring) {
            this.pao.playFire();
          } else {
            this.evtTouchEnd();
          }
        }

        /** 锁定 */;
        _proto.onClick_lockBtn = function onClick_lockBtn(node) {
          App.gameLogic.isLock = !App.gameLogic.isLock;
          node.parent.getComponent(Sprite).enabled = App.gameLogic.isLock;
          this.fishManager.handleFishLock();
        };
        _proto.onClick_hideBtn = function onClick_hideBtn() {
          var _this2 = this;
          this.isHide = !this.isHide;
          this.viewList.get("ui/right/hideBtn").scale = this.isHide ? v3(1, -1, 1) : v3(1, 1, 1);
          this.viewList.get("ui/right").children.forEach(function (item) {
            if (item.name != "hideBtn") {
              item.active = !_this2.isHide;
            }
          });
        };
        _proto.onClick_jiaBtn = function onClick_jiaBtn() {
          GlobalFuncHelper.setPaoLevel(true);
          this.updatePaoLevel();
        };
        _proto.onClick_jianBtn = function onClick_jianBtn() {
          GlobalFuncHelper.setPaoLevel(false);
          this.updatePaoLevel();
        };
        _proto.flyCoins = function flyCoins(addCoin, position) {
          var flyCoinsItemNode = instantiate(this.flyCoinsItemPrefab);
          var flyCoinsItemComp = flyCoinsItemNode.getComponent(FlyCoinsItem);
          if (!flyCoinsItemComp) {
            return;
          }
          flyCoinsItemComp.initFlyCoinWithData(addCoin, true);
          flyCoinsItemNode.position = position;
          flyCoinsItemNode.parent = this.coinLayer;
          tween(flyCoinsItemNode).to(0.3, {
            position: new Vec3(position.x, position.y + 50)
          }).call(function () {
            flyCoinsItemNode.active = false;
            flyCoinsItemNode.removeFromParent();
            flyCoinsItemNode.parent = null;
          }).start();
          //播放从A飞到金币栏或者银币栏
          this._flyCoinsToTargetAction(addCoin, position);
        }

        /**
         * @Description: 将金币或者银币获取后执行从A飞向B点然后消失
         * @Date: 2024-06-14 14:08:28
         * @Author: GFanStudio-LeeSir-JYJ add
         * @param {number} coinsNum
         * @param {Vec3} startPos
         * @return {*}
         */;
        _proto._flyCoinsToTargetAction = function _flyCoinsToTargetAction(coinsNum, startPos) {
          if (!this.coin_goldAniPrefab) {
            return;
          }
          var flyAniNode = null;
          var flyToTargetPos = this.lbGold.node.position;
          flyToTargetPos = this.scoreNode.position;
          flyAniNode = instantiate(this.coin_goldAniPrefab);
          if (!flyAniNode) {
            return;
          }
          flyAniNode.position = startPos;
          flyAniNode.parent = this.coinLayer;
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
            // this.addCoinsNum(coinsNum);

            flyAniNode.active = false;
            flyAniNode.removeFromParent();
            flyAniNode.parent = null;
            flyAniNode.destroy();
          }).start();
        };
        _proto.addCoinsNum = function addCoinsNum(coinsNum) {
          App.gameLogic.gold += coinsNum;
          this.updateCoinsNum();
        };
        _proto.updateCoinsNum = function updateCoinsNum() {
          this.lbGold.string = App.gameLogic.gold + "";
        };
        return GameViewCmpt;
      }(BaseViewCmpt), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "flyCoinsItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coin_goldAniPrefab", [_dec3], {
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

System.register("chunks:///_virtual/globalFuncHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventName.ts', './viewNameConst.ts', './app.ts', './resLoadHelper.ts', './storageHelper.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, v3, tween, instantiate, EventName, ViewName, App, ResLoadHelper, StorageHelper, StorageHelperKey;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "30cc2NATc1Mm48jbsPt4OZS", "globalFuncHelper", undefined);

      /**
       * 全局函数，复用多的功能函数独立出来
       */
      var Helper = /*#__PURE__*/function () {
        function Helper() {
          this.debugInfo = [];
          this.index = 0;
          this.fishNetPre = null;
        }
        var _proto = Helper.prototype;
        /** debug info */
        _proto.pushDebugInfo = function pushDebugInfo(str) {
          this.debugInfo.push(str);
          if (this.debugInfo.length > 10000) {
            this.debugInfo.shift();
          }
        };
        _proto.getDebugInfo = function getDebugInfo() {
          return this.debugInfo;
        };
        _proto.clearDebugInfo = function clearDebugInfo() {
          this.debugInfo.splice(0);
        }

        /** create and get index */;
        _proto.getTileIndex = function getTileIndex() {
          return this.index++;
        };
        _proto.getGold = function getGold() {
          return +StorageHelper.getData(StorageHelperKey.Gold);
        };
        _proto.setGold = function setGold(gold) {
          var curent = +this.getGold();
          StorageHelper.setData(StorageHelperKey.Gold, gold + curent + "");
        }
        /** 显示失败界面 */;
        _proto.showLoseView = function showLoseView() {
          App.view.openView(ViewName.Single.eResultView, false);
        };
        _proto.bezierTo = function bezierTo(target, duration, c1, c2, to, opts) {
          opts = opts || Object.create(null);
          /*
          * @desc 二阶贝塞尔
          * @param {number} t 当前百分比
          * @param {} p1 起点坐标
          * @param {} cp 控制点
          * @param {} p2 终点坐标
          * @returns {any}
          */
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 1);
          };
          opts.onUpdate = function (arg, ratio) {
            target.position = twoBezier(ratio, c1, c2, to);
          };
          return tween(target).to(duration, {}, opts);
        };
        /** 渔网 */
        _proto.loadFishNet = /*#__PURE__*/
        function () {
          var _loadFishNet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var net;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.fishNetPre) {
                    _context.next = 4;
                    break;
                  }
                  _context.next = 3;
                  return ResLoadHelper.loadFishNet();
                case 3:
                  this.fishNetPre = _context.sent;
                case 4:
                  net = instantiate(this.fishNetPre);
                  return _context.abrupt("return", net);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadFishNet() {
            return _loadFishNet.apply(this, arguments);
          }
          return loadFishNet;
        }();
        _proto.clearFishNET = function clearFishNET() {
          if (this.fishNetPre) this.fishNetPre = null;
        }
        /** 获取炮台等级 */;
        _proto.getPaoLevel = function getPaoLevel() {
          return +StorageHelper.getData(StorageHelperKey.PaoLevel, 1);
        };
        _proto.setPaoLevel = function setPaoLevel(isAdd) {
          var lv = this.getPaoLevel();
          if (isAdd) {
            lv++;
            if (lv > 13) {
              lv = 1;
            }
          } else {
            lv--;
            if (lv < 1) {
              lv = 13;
            }
          }
          StorageHelper.setData(StorageHelperKey.PaoLevel, lv);
          App.gameLogic.paoLevel = lv;
          App.event.emit(EventName.Game.ChangePaotai);
        };
        return Helper;
      }();
      var GlobalFuncHelper = exports('GlobalFuncHelper', new Helper());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/globalUtils.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9675cmWlm1NgLiawbkdCV/5", "globalUtils", undefined);
      /**
       * 消息格式
       */
      /**
       * 协议头信息
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/helpViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseViewCmpt;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "abf50j/7vVOHK6Mu8FRBXYW", "helpViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var helpViewCmpt = exports('helpViewCmpt', (_dec = ccclass('helpViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(helpViewCmpt, _BaseViewCmpt);
        function helpViewCmpt() {
          return _BaseViewCmpt.apply(this, arguments) || this;
        }
        return helpViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/homeViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './enumConst.ts', './eventName.ts', './viewNameConst.ts', './app.ts', './advertise.ts', './fishRoute.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseViewCmpt, Constant, EventName, ViewName, App, Advertise, BYFishRoute, SubGameMgr, SubGameDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      Constant = module.Constant;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      Advertise = module.Advertise;
    }, function (module) {
      BYFishRoute = module.BYFishRoute;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "dce1ezTsDVBIbtvkkKPn7oJ", "homeViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var homeViewCmpt = exports('homeViewCmpt', (_dec = ccclass('homeViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(homeViewCmpt, _BaseViewCmpt);
        function homeViewCmpt() {
          return _BaseViewCmpt.apply(this, arguments) || this;
        }
        var _proto = homeViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseViewCmpt.prototype.onLoad.call(this);
          this.initData();
          App.event.on(EventName.Game.UpdataGold, this.initData, this);
          this.viewList.get("bottom").active = !App.gameLogic.isShenhe;
        };
        _proto.onDestroy = function onDestroy() {
          App.event.off(EventName.Game.UpdataGold, this);
        };
        _proto.initData = function initData(bool) {
          Advertise.showBannerAds();
          this.initFish();
          // let guid = StorageHelper.getBooleanData(StorageHelperKey.GuidFirst);
          // if (!guid) {
          //     StorageHelper.setBooleanData(StorageHelperKey.GuidFirst, true);
          //     App.view.openView(ViewName.Single.eHelpView);
          // }
        };

        _proto.initFish = function initFish() {
          var _this = this;
          this.schedule( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var rount, routeId, fId;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  rount = BYFishRoute.anchor;
                  routeId = rount[Math.floor(Math.random() * (rount.length - 1))];
                  fId = Math.ceil(Math.random() * (Constant.TotalFishCount - 30));
                  _context.next = 5;
                  return App.gameLogic.createFish(fId, routeId.id, 0, fId, _this.viewList.get('bg'));
                case 5:
                  _context.sent;
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), 1, 5);
        }
        /* *************************** main ****************************** */;
        _proto.onClick_settingBtn = function onClick_settingBtn() {
          App.audio.play('button_click');
          App.view.openView(ViewName.Single.eSettingView);
        };
        _proto.onClick_playBtn = function onClick_playBtn() {
          App.audio.play('button_click');
          //App.view.openView(ViewName.Single.eGameView);
          //this.onClick_closeBtn();
          SubGameMgr.inst.CreateRoom(SubGameDef.FISH_WHALE, true);
        };
        _proto.onClick_feedBtn = function onClick_feedBtn() {
          App.audio.play('button_click');
          App.view.openView(ViewName.Single.eFeedView);
          this.onClick_closeBtn();
        };
        _proto.onClick_shopBtn = function onClick_shopBtn() {
          App.audio.play('button_click');
          App.view.openView(ViewName.Single.eBuyView);
        }

        /** 购买 */;
        _proto.onClick_add = function onClick_add() {
          App.audio.play('button_click');
          Advertise.showVideoAds();
          App.view.openView(ViewName.Single.eBuyView);
        };
        _proto.onClick_luckSpinBtn = function onClick_luckSpinBtn() {
          App.audio.play('button_click');
          App.view.openView(ViewName.Single.eLuckSpinView);
        };
        _proto.onClick_signBtn = function onClick_signBtn() {
          App.audio.play('button_click');
          App.view.openView(ViewName.Single.eSiginView);
        };
        _proto.onClick_onlineBtn = function onClick_onlineBtn() {
          App.audio.play('button_click');
          App.view.openView(ViewName.Single.eOnlineRewardView);
        };
        _proto.onClick_helpBtn = function onClick_helpBtn() {
          // App.audio.play('button_click');
          // App.view.openView(ViewName.Single.eHelpView);
        };
        return homeViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/i18nLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, App;
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
    }, function (module) {
      App = module.App;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "72823QIvrVMdbnG1sP5lN1F", "i18nLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var i18nLabel = exports('default', (_dec = property({
        tooltip: '语言文件中的key'
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(i18nLabel, _Component);
        function i18nLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "i18nKey", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = i18nLabel.prototype;
        _proto.onLoad = function onLoad() {
          App.i18n.register(this);
          this.reset();
        };
        _proto.onDestroy = function onDestroy() {
          App.i18n.unregister(this);
        };
        _proto.setText = function setText(value) {
          this.i18nKey = value;
          App.i18n.setText(this.getComponent(Label), this.i18nKey);
        };
        _proto.reset = function reset() {
          this.setText(this.i18nKey);
        };
        return i18nLabel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "i18nKey", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/i18nManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './i18nLabel.ts', './i18nSprite.ts', './resLoadHelper.ts', './singletonClass.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, isValid, Label, JsonAsset, SpriteFrame, i18nLabel, i18nSprite, ResLoadHelper, SingletonClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      Label = module.Label;
      JsonAsset = module.JsonAsset;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      i18nLabel = module.default;
    }, function (module) {
      i18nSprite = module.default;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e51239DgeNLz4Jdkvw+nGLs", "i18nManager", undefined);

      /**
       * 多语言管理
       */
      var I18nManager = exports('I18nManager', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(I18nManager, _SingletonClass);
        function I18nManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SingletonClass.call.apply(_SingletonClass, [this].concat(args)) || this;
          _this.curLang = 'cn';
          // 这里初始化,这个值编辑器里面使用，可以设置任意值，实际不会影响游戏运行时的语言，
          _this.textComponent = [];
          _this.imgComponent = [];
          _this.textConfig = null;
          // 文字配置
          /** 多语言，字符串替换参数数组，策划配置的参数按照这个顺序来逐个替换 
           * eg:str = "aaaaaaadata1bbbbbdata2ccccc"
           * m = getString(str,999,888)
           * m =  aaaaaaa999bbbbb888ccccc
           * */
          _this.replaceArr = ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8"];
          return _this;
        }
        var _proto = I18nManager.prototype;
        _proto.onInit = /*#__PURE__*/function () {
          var _onInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(lang) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onInit(_x) {
            return _onInit.apply(this, arguments);
          }
          return onInit;
        }();
        _proto.setLanguage = function setLanguage(lan) {
          this.curLang = lan;
          this.updateLanguage();
        }

        /** 多语言测试调通，先留着 */;
        _proto.loadLuanguageCfg = /*#__PURE__*/
        function () {
          var _loadLuanguageCfg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
                    var language;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return ResLoadHelper.loadCommonAssetSync("config/language", JsonAsset);
                        case 2:
                          language = _context2.sent;
                          PrintLog(language.json);
                          _this2.textConfig = new Map(language.json);
                          _this2.updateLanguage();
                          resolve("");
                        case 7:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }))));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadLuanguageCfg() {
            return _loadLuanguageCfg.apply(this, arguments);
          }
          return loadLuanguageCfg;
        }();
        _proto.onDestroy = function onDestroy() {
          this.textComponent.length = 0;
          this.imgComponent.length = 0;
          this.textConfig.clear();
        };
        _proto.updateLanguage = function updateLanguage() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.textComponent), _step; !(_step = _iterator()).done;) {
            var it = _step.value;
            var cmpt = it.getComponent(i18nLabel);
            isValid(cmpt) && isValid(cmpt.node) && cmpt.reset();
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.imgComponent), _step2; !(_step2 = _iterator2()).done;) {
            var _it = _step2.value;
            var _cmpt = _it.getComponent(i18nSprite);
            isValid(_cmpt) && isValid(_cmpt.node) && _cmpt.reset();
          }
        };
        _proto.register = function register(target) {
          if (!isValid(target)) return;
          var arr = !!target.getComponent(Label) ? this.textComponent : this.imgComponent;
          arr.indexOf(target) === -1 && arr.push(target);
        };
        _proto.unregister = function unregister(target) {
          if (!isValid(target)) return;
          var arr = target instanceof Label ? this.textComponent : this.imgComponent;
          var idx = arr.indexOf(target);
          idx !== -1 && arr.splice(idx, 1);
        };
        _proto.getString = function getString(key) {
          var _this3 = this;
          if (!this.textConfig) return '';
          var obj = this.textConfig.get(key);
          if (!obj) {
            console.warn("i18nMgr.getString(" + key + ") is error.");
            return '';
          }
          var text = obj[this.curLang];
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          args.forEach(function (param, i) {
            text = text.replace(_this3.replaceArr[i], param);
          });
          return text;
        };
        _proto.setText = /*#__PURE__*/function () {
          var _setText = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(component, key) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (this.textConfig) {
                    _context4.next = 3;
                    break;
                  }
                  _context4.next = 3;
                  return this.loadLuanguageCfg();
                case 3:
                  component && (component.string = this.getString(key));
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function setText(_x3, _x4) {
            return _setText.apply(this, arguments);
          }
          return setText;
        }();
        _proto.setSprite = /*#__PURE__*/function () {
          var _setSprite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url, cb) {
            var path, sf;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  path = "i18n/" + url;
                  _context5.next = 3;
                  return ResLoadHelper.loadCommonAssetSync(path, SpriteFrame);
                case 3:
                  sf = _context5.sent;
                  if (sf) {
                    _context5.next = 7;
                    break;
                  }
                  PrintError("i18n not SpriteFrame = " + path);
                  return _context5.abrupt("return");
                case 7:
                  cb(sf);
                case 8:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function setSprite(_x5, _x6) {
            return _setSprite.apply(this, arguments);
          }
          return setSprite;
        }();
        _proto.getLanguage = function getLanguage() {
          return this.curLang;
        };
        return I18nManager;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/i18nSprite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Component, App;
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
      Component = module.Component;
    }, function (module) {
      App = module.App;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ed5b9yRf65BYrlBYyt6wEwZ", "i18nSprite", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var i18nSprite = exports('default', (_dec = property({
        tooltip: '资源路径'
      }), _dec2 = property({
        tooltip: '是否都合并到一起'
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(i18nSprite, _Component);
        function i18nSprite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "url", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mergeI18n", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = i18nSprite.prototype;
        _proto.onLoad = function onLoad() {
          App.i18n.register(this);
          this.reset();
          // 所有i18n图片合并到一起显示，当前的就需要屏蔽
          this.node.active = !this.isMerge;
        };
        _proto.onDestroy = function onDestroy() {
          App.i18n.unregister(this);
        };
        _proto.setPath = function setPath(url) {
          this.url = url;
          var sprite = this.getComponent(Sprite);
          sprite && App.i18n.setSprite(url, function (frame) {
            frame && (sprite.spriteFrame = frame);
          });
        };
        _proto.reset = function reset() {
          this.setPath(this.url);
        };
        _createClass(i18nSprite, [{
          key: "isMerge",
          get: function get() {
            return this.mergeI18n;
          }
        }]);
        return i18nSprite;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "url", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mergeI18n", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/levelConfig.ts", ['cc', './storageHelper.ts'], function (exports) {
  var cclegacy, StorageHelper, StorageHelperKey;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6a5afnhfjdG+bGgTJol9IOX", "levelConfig", undefined);
      var config = /*#__PURE__*/function () {
        function config() {}
        var _proto = config.prototype;
        _proto.initData = function initData() {}

        /** 下一关，并本地缓存已通过关卡 */;
        _proto.nextLevel = function nextLevel() {
          var lv = +this.getCurLevel();
          StorageHelper.setData(StorageHelperKey.LevelId, lv + 1);
        };
        _proto.getCurLevel = function getCurLevel() {
          return +StorageHelper.getData(StorageHelperKey.LevelId, 1);
        };
        _proto.getDefaultData = function getDefaultData() {
          return this.loadConfig();
        };
        _proto.loadConfig = function loadConfig() {
          var list = [[1, 1, 12, 4, '1,2'], [2, 2, 15, 6, '4,3,2'], [3, 3, 54, 8, '1,2,3'], [4, 4, 72, 8, '1,2,3,4'], [5, 5, 57, 11, '6,5'], [6, 6, 108, 10, '7,8'], [7, 7, 57, 12, '9,11,10'], [8, 8, 63, 20, '12,13,14'], [9, 9, 63, 20, '15,16'], [10, 10, 63, 20, '17,16'], [11, 11, 63, 20, '15,17'], [12, 12, 63, 22, '18,19,20'], [13, 13, 63, 12, '9,11,10'], [14, 14, 63, 22, '12,13,14'], [15, 15, 63, 22, '15,16'], [16, 16, 63, 22, '17,16'], [17, 17, 63, 22, '15,17'], [18, 18, 63, 22, '18,19,20'], [19, 19, 63, 22, '1,2'], [20, 20, 63, 22, '1,2,3'], [21, 21, 63, 22, '1,2,3,4'], [22, 22, 63, 22, '6,5'], [23, 23, 63, 22, '7,8'], [24, 24, 66, 22, '9,11,10'], [25, 25, 66, 22, '12,13,14'], [26, 26, 66, 22, '15,16'], [27, 27, 66, 22, '17,16'], [28, 28, 66, 22, '15,17'], [29, 29, 66, 22, '18,19,20'], [30, 30, 66, 22, '9,11,10'], [31, 31, 66, 22, '12,13,14'], [32, 32, 66, 22, '15,16'], [33, 33, 66, 22, '17,16'], [34, 34, 69, 22, '15,17'], [35, 35, 69, 22, '18,19,20'], [36, 36, 69, 22, '1,2,3,4'], [37, 37, 69, 22, '6,5'], [38, 38, 69, 22, '7,8'], [39, 39, 69, 22, '9,11,10'], [40, 40, 69, 22, '12,13,14'], [41, 41, 69, 22, '15,16'], [42, 42, 69, 22, '17,16'], [43, 43, 72, 22, '15,17'], [44, 44, 72, 22, '18,19,20'], [45, 45, 72, 22, '9,11,10'], [46, 46, 72, 22, '12,13,14'], [47, 47, 72, 22, '15,16'], [48, 48, 72, 22, '17,16'], [49, 49, 72, 22, '15,17'], [50, 50, 72, 22, '18,19,20'], [51, 51, 72, 22, '1,2'], [52, 52, 72, 22, '1,2,3'], [53, 53, 72, 22, '1,2,3,4'], [54, 54, 75, 22, '6,5'], [55, 55, 75, 22, '7,8'], [56, 56, 75, 22, '9,11,10'], [57, 57, 75, 22, '12,13,14'], [58, 58, 75, 22, '15,16'], [59, 59, 75, 22, '17,16'], [60, 60, 75, 22, '15,17'], [61, 61, 75, 22, '18,19,20'], [62, 62, 75, 22, '9,11,10'], [63, 63, 75, 22, '12,13,14'], [64, 64, 75, 22, '15,16'], [65, 65, 75, 22, '17,16'], [66, 66, 75, 22, '15,17'], [67, 67, 75, 22, '18,19,20'], [68, 68, 78, 22, '1,2,3,4'], [69, 69, 78, 22, '6,5'], [70, 70, 78, 22, '7,8'], [71, 71, 78, 22, '9,11,10'], [72, 72, 78, 22, '12,13,14'], [73, 73, 78, 22, '15,16'], [74, 74, 78, 22, '17,16'], [75, 75, 81, 22, '15,17'], [76, 76, 81, 22, '18,19,20'], [77, 77, 81, 22, '9,11,10'], [78, 78, 81, 22, '12,13,14'], [79, 79, 81, 22, '15,16'], [80, 80, 81, 22, '17,16'], [81, 81, 81, 22, '15,17'], [82, 82, 81, 22, '18,19,20'], [83, 83, 84, 22, '1,2'], [84, 84, 84, 22, '1,2,3'], [85, 85, 84, 22, '1,2,3,4'], [86, 86, 84, 22, '6,5'], [87, 87, 84, 22, '7,8'], [88, 88, 84, 22, '9,11,10'], [89, 89, 84, 22, '12,13,14'], [90, 90, 84, 22, '15,16'], [91, 91, 87, 22, '17,16'], [92, 92, 87, 22, '15,17'], [93, 93, 87, 22, '18,19,20'], [94, 94, 87, 22, '9,11,10'], [95, 95, 87, 22, '12,13,14'], [96, 96, 87, 22, '15,16'], [97, 97, 87, 22, '17,16'], [98, 98, 87, 22, '15,17'], [99, 99, 90, 22, '18,19,20'], [100, 100, 90, 22, '15,16'], [101, 101, 90, 22, '17,16'], [102, 102, 90, 22, '15,17'], [103, 103, 90, 22, '18,19,20'], [104, 104, 90, 22, '9,11,10'], [105, 105, 90, 22, '12,13,14'], [106, 106, 90, 22, '15,16'], [107, 107, 90, 22, '17,16'], [108, 108, 90, 22, '15,17'], [109, 109, 90, 22, '18,19,20'], [110, 110, 90, 22, '15,16'], [111, 111, 93, 22, '17,16'], [112, 112, 93, 22, '15,17'], [113, 113, 93, 22, '18,19,20'], [114, 114, 93, 22, '9,11,10'], [115, 115, 93, 22, '12,13,14'], [116, 116, 93, 22, '15,16'], [117, 117, 93, 22, '17,16'], [118, 118, 93, 22, '15,17'], [119, 119, 93, 22, '18,19,20'], [120, 120, 93, 22, '5,6,7,19']];
          var lv = this.getCurLevel();
          if (lv > list.length - 1) lv = list.length - 1;
          var temp = list[lv - 1];
          var res = {
            id: +temp[0],
            num: +temp[2],
            kinds: +temp[3],
            targetList: String(temp[4]).split(",")
          };
          console.log(res);
          return res;
        };
        return config;
      }();
      var LevelConfig = exports('LevelConfig', new config());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loadingViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './viewNameConst.ts', './app.ts', './audioManager2.ts', './cocosHelper.ts', './resLoadHelper.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, UITransform, BaseViewCmpt, ViewName, App, SoundType, CocosHelper, ResLoadHelper;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      SoundType = module.SoundType;
    }, function (module) {
      CocosHelper = module.CocosHelper;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6e08ewpp+dDfJKiZzTsPKh3", "loadingViewCmpt", undefined);
      var ccclass = _decorator.ccclass;
      var loadingViewCmpt = exports('loadingViewCmpt', (_dec = ccclass('loadingViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(loadingViewCmpt, _BaseViewCmpt);
        function loadingViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseViewCmpt.call.apply(_BaseViewCmpt, [this].concat(args)) || this;
          _this.spPro = null;
          _this.spProWidth = 0;
          _this.lbPro = null;
          return _this;
        }
        var _proto = loadingViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseViewCmpt.prototype.onLoad.call(this);
          this.lbPro = this.viewList.get('lbPro');
          this.spPro = this.viewList.get('spPro');
          this.spProWidth = this.spPro.getComponent(UITransform).width;
          this.spPro.getComponent(UITransform).width = 0;
          CocosHelper.updateLabelText(this.lbPro, "加载中... 0.00%", false);
          this.startLoadResources();
          App.audio.play('background', SoundType.Music, true);
        };
        _proto.startLoadResources = function startLoadResources() {
          var _this2 = this;
          var url = ["./prefab/ui/homeView", "./prefab/ui/feedView", "./prefab/ui/gameView", "./prefab/pao/bullet", "./prefab/pao/pao", "./prefab/pao/fishNet"];
          ResLoadHelper.preloadPath(url, function (finish, total, item) {
            var per = (finish / total * 100).toFixed(2) + "%";
            if (_this2.spPro) {
              _this2.spPro.getComponent(UITransform).width = finish / total * _this2.spProWidth;
              CocosHelper.updateLabelText(_this2.lbPro, "加载中... " + per, false);
            }
          }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _this2.scheduleOnce(function () {
                    App.view.openView(ViewName.Single.eHomeView);
                    _this2.onClick_closeBtn();
                  }, 1);
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        };
        return loadingViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mainCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './enumConst.ts', './eventName.ts', './viewNameConst.ts', './app.ts', './net.ts', './routers.ts', './resLoadHelper.ts', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, PhysicsSystem2D, assetManager, input, Input, sys, Component, Direction, EventName, ViewName, App, Net, Router, ResLoadHelper, ModuleDef;
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
      PhysicsSystem2D = module.PhysicsSystem2D;
      assetManager = module.assetManager;
      input = module.input;
      Input = module.Input;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      Direction = module.Direction;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      Net = module.Net;
    }, function (module) {
      Router = module.Router;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d77436CXCBN8qV/PO2/BFVK", "mainCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mainCmpt = exports('mainCmpt', (_dec = ccclass('mainCmpt'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mainCmpt, _Component);
        function mainCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "canvase", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = mainCmpt.prototype;
        _proto.onLoad = function onLoad() {
          // super.onLoad();
          PhysicsSystem2D.instance.enable = true;
          ResLoadHelper.setBundle(assetManager.getBundle(ModuleDef.FISH_WHALE));
          App.init(this.canvase);
          //this.connectServer();
          this.initView();
          tgx.UIMgr.inst.closeAll();

          // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
          //     EPhysics2DDrawFlags.Pair |
          //     EPhysics2DDrawFlags.CenterOfMass |
          //     EPhysics2DDrawFlags.Joint |
          //     EPhysics2DDrawFlags.Shape;
        };

        _proto.addEvent = function addEvent() {
          input.on(Input.EventType.KEY_DOWN, this.evtKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.evtKeyUp, this);
        };
        _proto.initView = function initView() {
          App.view.openView(ViewName.Single.eLoadingView);
          // App.view.openView(ViewName.Single.eGameView);
          // App.view.openView(ViewName.Single.eHomeView);
          // LevelConfig.loadConfig();
        };

        _proto.evtKeyDown = function evtKeyDown(key) {
          key.keyCode == 68 && App.event.emit(EventName.Game.Move, Direction.right);
          key.keyCode == 65 && App.event.emit(EventName.Game.Move, Direction.left);
          key.keyCode == 87 && App.event.emit(EventName.Game.Move, Direction.up);
          key.keyCode == 83 && App.event.emit(EventName.Game.Move, Direction.down);
        };
        _proto.evtKeyUp = function evtKeyUp(key) {
          App.event.emit(EventName.Game.EndMove);
        };
        _proto.onClick_restartBtn = function onClick_restartBtn() {
          App.event.emit(EventName.Game.Restart);
        };
        _proto.connectServer = function connectServer() {
          if (sys.platform != sys.Platform.WECHAT_GAME) {
            Net.init(function () {
              var data = {
                name: "大胜",
                icon: "https://s1.aigei.com/src/img/jpg/93/931733ea940d4128a094cba710545805.jpg?imageMogr2/auto-orient/thumbnail/!160x201r/gravity/Center/crop/160x201/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:b8vgKEpgaD7X1HtBVvsv8KF0IMM="
              };
              Net.sendMsg(data, Router.rut_login);
              App.user.rankData.name = data.name;
              App.user.rankData.icon = data.icon;
            });
          }
        };
        return mainCmpt;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvase", [_dec2], {
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

System.register("chunks:///_virtual/meshTouchCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec4, MeshRenderer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec4 = module.Vec4;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f7767dCAMRK9JASb2iA/OIA", "meshTouchCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var meshTouchCtrl = exports('meshTouchCtrl', (_dec = ccclass('meshTouchCtrl'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(meshTouchCtrl, _Component);
        function meshTouchCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "waveDis", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveSpeed", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveStr", _descriptor3, _assertThisInitialized(_this));
          _this.waveProp = new Vec4();
          _this._pass = void 0;
          _this._handle = void 0;
          return _this;
        }
        var _proto = meshTouchCtrl.prototype;
        _proto.start = function start() {
          this._pass = this.node.getComponent(MeshRenderer).material.passes[0];
          this.waveProp.w = 100;
          this.waveProp.z = this.waveStr;
          this._handle = this._pass.getHandle("waveFactor");
        };
        _proto.update = function update(dt) {
          if (this.waveProp.w < 100) {
            this.waveProp.w += dt * this.waveSpeed;
            if (this.waveProp.w > this.waveDis) {
              this.waveProp.w = 100;
            }
            this._pass.setUniform(this._handle, this.waveProp);
          }
        };
        return meshTouchCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "waveDis", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "waveStr", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/meshTouchExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './meshTouchCtrl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Vec3, Vec4, Mat4, Quat, Camera, geometry, input, Input, MeshRenderer, Component, meshTouchCtrl;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      Mat4 = module.Mat4;
      Quat = module.Quat;
      Camera = module.Camera;
      geometry = module.geometry;
      input = module.input;
      Input = module.Input;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      meshTouchCtrl = module.meshTouchCtrl;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "aef946pOZBLlKAP48gTMYK2", "meshTouchExample", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var v3_0 = new Vec3();
      var v3_1 = new Vec3();
      var v4_0 = new Vec4();
      var m4_0 = new Mat4();
      var q_0 = new Quat();
      var meshTouchExample = exports('meshTouchExample', (_dec = ccclass('meshTouchExample'), _dec2 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(meshTouchExample, _Component);
        function meshTouchExample() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cameraCom", _descriptor, _assertThisInitialized(_this));
          _this.meshes = void 0;
          _this._ray = new geometry.Ray();
          _this._mesh = void 0;
          return _this;
        }
        var _proto = meshTouchExample.prototype;
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.meshes = this.node.getComponentsInChildren(MeshRenderer);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          var touch = event.touch;
          this.cameraCom.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);
          this.rayHit();
        }

        /* check model hit */;
        _proto.rayHit = function rayHit() {
          var distance = 300;
          var mesh;
          for (var _iterator = _createForOfIteratorHelperLoose(this.meshes), _step; !(_step = _iterator()).done;) {
            var v = _step.value;
            var dis = geometry.intersect.rayModel(this._ray, v.model);
            if (dis && dis < distance) {
              distance = dis;
              mesh = v;
            }
          }
          if (mesh) {
            this._ray.computeHit(v3_0, distance);
            var node = mesh.node;
            var halfSize = mesh.model.modelBounds.halfExtents;

            /* convert world pos to a node's local pos by invert the node's worldmat and mul with the world pos */
            m4_0.set(node.worldMatrix);
            m4_0.invert();
            Vec3.transformMat4(v3_0, v3_0, m4_0);
            if (halfSize.y == 0) {
              /* the plane */
              var x = halfSize.x;
              var z = halfSize.z;
              v4_0.x = (x + v3_0.x) / (x * 2);
              v4_0.y = (z + v3_0.z) / (z * 2);
            } else {
              /* the quad */
              var _x = halfSize.x;
              var y = halfSize.y;
              v4_0.x = (_x + v3_0.x) / (_x * 2);
              v4_0.y = (y - v3_0.y) / (y * 2);
            }
            v4_0.w = 0.1;

            /* get the script in mesh node */

            var meshCtrl = node.getComponent(meshTouchCtrl);
            meshCtrl && meshCtrl.waveProp.set(v4_0);
          }
        };
        return meshTouchExample;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraCom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/modleNameConst.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ModleNameConst', void 0);
      cclegacy._RF.push({}, "3b8168Bp4tLiJOWyyhLQpSH", "modleNameConst", undefined);
      /** 所有模型名字 */
      var ModleNameConst;
      (function (_ModleNameConst) {
        var modle = /*#__PURE__*/function (modle) {
          modle["map"] = "map";
          modle["t3dNode"] = "3d";
          return modle;
        }({});
        _ModleNameConst.modle = modle;
      })(ModleNameConst || (ModleNameConst = exports('ModleNameConst', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_fish_whale", ['./FishWhaleGameMgr.ts', './SpineRunner.ts', './baseNodeCmpt.ts', './baseViewCmpt.ts', './i18nLabel.ts', './i18nSprite.ts', './prefabPool.ts', './rotateSelf.ts', './scrollItemCmpt.ts', './scrollViewCmpt.ts', './cameraCmpt.ts', './enumConst.ts', './eventName.ts', './levelConfig.ts', './modleNameConst.ts', './rankConfig.ts', './viewNameConst.ts', './app.ts', './audioManager2.ts', './eventManager3.ts', './i18nManager.ts', './noticeManager.ts', './singletonClass.ts', './subGameManager.ts', './timeManager.ts', './userInfo2.ts', './viewManager.ts', './DyManager.ts', './screenRayCmpt.ts', './bulletCmpt.ts', './bulletMgrCmpt.ts', './fireCmpt.ts', './fishCmpt.ts', './fishMgrCmpt.ts', './fishNetCmpt.ts', './fishRoute.ts', './paoCmpt.ts', './gameCmpt.ts', './FlyCoinsItem2.ts', './gameLogic.ts', './mainCmpt.ts', './feedViewCmpt.ts', './gameViewCmpt.ts', './helpViewCmpt.ts', './homeViewCmpt.ts', './loadingViewCmpt.ts', './resultViewCmpt.ts', './settingViewCmpt.ts', './targetViewCmpt.ts', './tipsViewCmpt.ts', './dataviewUtils.ts', './err.ts', './globalUtils.ts', './net.ts', './routers.ts', './util.ts', './test.ts', './cocosHelper.ts', './globalFuncHelper.ts', './resLoadHelper.ts', './storageHelper.ts', './toolsHelper.ts', './meshTouchCtrl.ts', './meshTouchExample.ts', './spTouchExample.ts', './advertise.ts', './wxManager.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/net.ts", ['cc', './dataviewUtils.ts', './routers.ts', './util.ts', './app.ts', './eventName.ts'], function (exports) {
  var cclegacy, DataViewUtils, Router, App;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DataViewUtils = module.default;
    }, function (module) {
      Router = module.Router;
    }, null, function (module) {
      App = module.App;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "0f807Aev9dEYZPT86jjSz6L", "net", undefined);
      var LLKNet = exports('default', /*#__PURE__*/function () {
        function LLKNet() {
          this.socket = null;
          this.id = 0;
          this.serverType = 0;
          this.isConnected = false;
          this._isConnecting = false;
        }
        var _proto = LLKNet.prototype;
        /**
         * 初始化连接服务器
         * @param cb 
         */
        _proto.init = function init(cb) {
          return;
        }

        /**
         * 主动断开与服务器间的链接
         */;
        _proto.breakConnect = function breakConnect() {
          // this.socket.close();
        }

        /**
         * 接收数据，将数据派发出去
         * @param head 
         * @param body 
         */;
        _proto.handleRecvdate = function handleRecvdate(head, body) {
          App.event.emit(head.router, body);
        }

        /**
         * 向服务器发送数据
         * @param data 
         * @param router 
         */;
        _proto.sendMsg = function sendMsg(data, router) {
          console.log("------------------sendData------------------");
          console.log(data, router);
          var dt = DataViewUtils.encoding(this.id, this.serverType, Number(router), data);
          this.socket.send(dt);
        }

        /**
         * 断线重连
         */;
        _proto.reconnect = function reconnect(cb) {
          this.init(function () {
            var data = {
              name: App.user.rankData.name
            };
            Net.sendMsg(data, Router.rut_login);
          });
        };
        return LLKNet;
      }());
      var Net = exports('Net', new LLKNet());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/noticeManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singletonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, SingletonClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b82e02aUeRK3olcbikDGuqv", "noticeManager", undefined);

      /**
       * 推送数据管理
       */
      var NoticeManager = exports('NoticeManager', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(NoticeManager, _SingletonClass);
        function NoticeManager() {
          return _SingletonClass.apply(this, arguments) || this;
        }
        return NoticeManager;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/paoCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventName.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sp, Component, EventName, App;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      App = module.App;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2232amPphZCFY+cdGGUtBmu", "paoCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var paoCmpt = exports('paoCmpt', (_dec = ccclass('paoCmpt'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(paoCmpt, _Component);
        function paoCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.index = -1;
          _this.skelen = void 0;
          return _this;
        }
        var _proto = paoCmpt.prototype;
        _proto.onLoad = function onLoad() {
          this.evtChangePaotai();
          App.event.on(EventName.Game.ChangePaotai, this.evtChangePaotai, this);
        };
        _proto.evtChangePaotai = function evtChangePaotai() {
          this.index = App.gameLogic.paoLevel; //Math.floor(Math.random() * this.node.children.length);
          this.node.children.forEach(function (item) {
            return item.active = false;
          });
          this.node.getChildByName("" + this.index).active = true;
          this.skelen = this.node.getChildByName("" + this.index).getComponent(sp.Skeleton);
          this.skelen.paused = true;
        };
        _proto.playFire = function playFire() {
          if (!this.skelen) return;
          this.skelen.paused = false;
          this.skelen.setAnimation(1, "shoot", true);
        };
        _proto.pause = function pause() {
          if (!this.skelen) return;
          this.skelen.paused = true;
        };
        _proto.onDisable = function onDisable() {
          App.event.off(EventName.Game.ChangePaotai, this);
        };
        return paoCmpt;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prefabPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './resLoadHelper.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, NodePool, instantiate, ResLoadHelper;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "95009wXWIlFf4m2ggINQca5", "prefabPool", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * 预制体对象池
       */
      var PrefabPool = exports('PrefabPool', ccclass(_class = /*#__PURE__*/function () {
        function PrefabPool() {
          // 是否启用组件事件
          this.cmpt = void 0;
          this._poolSize = 10;
          this._pool = void 0;
          this._preUrl = void 0;
          this._preNode = void 0;
          this._nodeName = void 0;
          this._init = false;
        }
        var _proto = PrefabPool.prototype;
        _proto.initPool = /*#__PURE__*/function () {
          var _initPool = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(preUrl, size, cmpt) {
            var prefab;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.clean();
                  this._preUrl = preUrl;
                  _context.next = 4;
                  return ResLoadHelper.loadPrefabSync(preUrl);
                case 4:
                  prefab = _context.sent;
                  if (prefab) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return");
                case 7:
                  prefab.addRef();
                  this._preNode = prefab;
                  this._nodeName = prefab.name;
                  cmpt && (this.cmpt = cmpt);
                  this.initPoolSize(size);
                  this._init = true;
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initPool(_x, _x2, _x3) {
            return _initPool.apply(this, arguments);
          }
          return initPool;
        }()
        /**
         * 初始化对象池
         * @param size 数量
         */;

        _proto.initPoolSize = function initPoolSize(size) {
          if (size > 0) {
            this._poolSize = size;
          }
          //对象池
          if (this.cmpt) {
            this._pool = new NodePool(this.cmpt);
          } else {
            this._pool = new NodePool();
          }
          for (var i = 0; i < this._poolSize; i++) {
            var obj = this.buildNode();
            this._pool.put(obj);
          }
        }

        /**
         * 获取
         */;
        _proto.getNode = /*#__PURE__*/
        function () {
          var _getNode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._init) {
                    _context2.next = 3;
                    break;
                  }
                  _context2.next = 3;
                  return ResLoadHelper.loadPrefabSync(this._preUrl);
                case 3:
                  return _context2.abrupt("return", this.syncGetNode());
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function getNode() {
            return _getNode.apply(this, arguments);
          }
          return getNode;
        }() /** 同步获取 */;
        _proto.syncGetNode = function syncGetNode() {
          var obj;
          if (this._pool.size() <= 0) {
            var newObj = this.buildNode();
            this.putNode(newObj);
          }
          if (this._pool.size() > 0) {
            var _this$_pool;
            obj = (_this$_pool = this._pool).get.apply(_this$_pool, arguments);
            // 会调用cmpt中reuse方法,参数args
            // PrintLog(` 直接获取，size :${this._pool.size()}`);
          }

          if (!obj) {
            // PrintError(" 获取失败 ");
            return null;
          }
          return obj;
        }

        /**
         * 回收
         * @param obj 回收对象
         */;
        _proto.putNode = function putNode(obj) {
          this._pool.put(obj);
          // 会调用cmpt中unuse方法
          // PrintLog(` 回收成功，size:${this._pool.size()}`);
        };

        _proto.poolSize = function poolSize() {
          return this._pool.size();
        }

        /**
         * 清空对象池
         */;
        _proto.clean = function clean() {
          if (this._pool) {
            this._pool.clear();
          }
          //释放资源
          if (this._preNode) {
            this._preNode.decRef();
            this._preNode = null;
          }
        }

        /**
         * 生成Node
         */;
        _proto.buildNode = function buildNode() {
          var node = instantiate(this._preNode);
          return node;
        }

        /**
         * 获取组件名字
         */;
        _proto.getNodeName = function getNodeName() {
          return this._nodeName;
        };
        return PrefabPool;
      }()) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rankConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "da5eer+RFBMrpOXdqjyKOet", "rankConfig", undefined);
      var config = function config() {
        this.data = [{
          "id": 1,
          "name": "专业挖墙角",
          "level": 11,
          "gold": 14,
          "star": 3,
          "icon": "https://p9.itc.cn/q_70/images03/20211125/796235655f5f4a2aa4177071820a9925.jpeg"
        }, {
          "id": 2,
          "name": "兎孒菈菈℡",
          "level": 12,
          "gold": 15,
          "star": 14,
          "icon": "http://img.mp.itc.cn/upload/20161218/a96e41772b3c49878cfdf4025b4868bf_th.jpg"
        }, {
          "id": 3,
          "name": "不爱了丶一切解释都是多余",
          "level": 13,
          "gold": 16,
          "star": 15,
          "icon": "https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=11fde279c1fc1e17fdea84377aa0da3b/6609c93d70cf3bc7cd699883df00baa1cd112a77.jpg"
        }, {
          "id": 4,
          "name": "天涯残月",
          "level": 14,
          "gold": 17,
          "star": 16,
          "icon": "http://5b0988e595225.cdn.sohucs.com/images/20181106/ac15c52ae1744d2d99230d274380eeec.jpeg"
        }, {
          "id": 5,
          "name": "将妓就计",
          "level": 15,
          "gold": 18,
          "star": 17,
          "icon": "https://s1.chu0.com/src/img/png/4b/4b5e2e13126341f881370020c9006f9e.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:UxUsU0Cz9tRa--swSy4uzaEyvlw="
        }, {
          "id": 6,
          "name": "情如薄纱",
          "level": 16,
          "gold": 19,
          "star": 18,
          "icon": "https://s1.chu0.com/src/img/png/5e/5ea98a47cd1e4283b9d82808ecc79214.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:1_2i1b-ZTdtO4V4SXt0Ji-MJa_A="
        }, {
          "id": 7,
          "name": "熊孩子他爹",
          "level": 17,
          "gold": 20,
          "star": 19,
          "icon": "https://s1.chu0.com/src/img/png/41/41bab6f142934b14a019281a2ed9f49f.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:E0L1SfFJXSueheLe5WNyrx1FIZ8="
        }, {
          "id": 8,
          "name": "輿你相遇更美年華",
          "level": 18,
          "gold": 21,
          "star": 110,
          "icon": "https://s1.chu0.com/src/img/png/2c/2ce4e83cf4664959b116d54e241d0bb7.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:g52DywF1cNENi0JOdmjE4S6qd-Q="
        }, {
          "id": 9,
          "name": "蝶恋花つ",
          "level": 19,
          "gold": 22,
          "star": 111,
          "icon": "https://s1.aigei.com/src/img/png/de/de542454a1f14e1aab1f59fd3bd5adee.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Gm5MmRn5yxiooKg1R7oT99ASeac="
        }, {
          "id": 10,
          "name": "不美不萌照样拽",
          "level": 20,
          "gold": 23,
          "star": 112,
          "icon": "https://s1.chu0.com/src/img/png/e8/e87bff8134d84968b863e9cc5a6f97a3.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:k2JEi7KxKm3fZspuZe51-wHonxE="
        }, {
          "id": 11,
          "name": "好男人,爸妈造",
          "level": 21,
          "gold": 24,
          "star": 113,
          "icon": "https://s1.chu0.com/src/img/png/32/329023e28b56442398b0bd554c1b0cca.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:DBdhmnNQp78zOdlf8KBxIBUfo9o="
        }, {
          "id": 12,
          "name": "缺烟缺酒缺女人ぃ",
          "level": 22,
          "gold": 25,
          "star": 114,
          "icon": "https://s1.aigei.com/src/img/png/03/031b9f0fe0204814a535e379e27d7bd1.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:o4txufVpCPAz291gg9MWBeiLkKY="
        }, {
          "id": 13,
          "name": "走路太妖〃小心闪腰",
          "level": 23,
          "gold": 26,
          "star": 115,
          "icon": "https://s1.chu0.com/src/img/png/e8/e87bff8134d84968b863e9cc5a6f97a3.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:k2JEi7KxKm3fZspuZe51-wHonxE="
        }, {
          "id": 14,
          "name": "君生我未生",
          "level": 24,
          "gold": 27,
          "star": 116,
          "icon": "https://img-user-qn.hdb.com/upload/_oss/uePasteUpload/201812/1211/1544586497625.jpg"
        }, {
          "id": 15,
          "name": "尕糖饾△",
          "level": 25,
          "gold": 28,
          "star": 117,
          "icon": "http://i3.sinaimg.cn/edu/2013/0401/U3835P42DT20130401141712.jpg"
        }, {
          "id": 16,
          "name": "风声雨声叫床声",
          "level": 26,
          "gold": 29,
          "star": 118,
          "icon": "https://i01piccdn.sogoucdn.com/515c963583c21b00"
        }, {
          "id": 17,
          "name": "若爱只如初见",
          "level": 27,
          "gold": 30,
          "star": 119,
          "icon": "https://s1.aigei.com/src/img/png/de/de542454a1f14e1aab1f59fd3bd5adee.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Gm5MmRn5yxiooKg1R7oT99ASeac="
        }, {
          "id": 18,
          "name": "别留我孤身一人",
          "level": 28,
          "gold": 31,
          "star": 120,
          "icon": "https://s1.aigei.com/src/img/png/ab/ab70f8a103034a719a7754b25f3f9200.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:U2RV2e2jgkStAYALktyE6bv_pes="
        }, {
          "id": 19,
          "name": "好名儿都叫狗起了",
          "level": 29,
          "gold": 32,
          "star": 121,
          "icon": "https://s1.aigei.com/src/img/png/d6/d689cd0225ba42fcbbafda590afe5753.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_o68iW8oLQwi96b8q_bWdKuau0g="
        }, {
          "id": 20,
          "name": "弓虽女干",
          "level": 30,
          "gold": 22,
          "star": 122,
          "icon": "https://s1.chu0.com/src/img/png/07/074f9587ef214b0ca9608738fe85257b.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:XzbJ4NPFBxHm7EUAJdFK0SIhCdU="
        }, {
          "id": 21,
          "name": "你不配",
          "level": 31,
          "gold": 23,
          "star": 123,
          "icon": "https://s1.aigei.com/src/img/png/f5/f5149112b2704e35a8ce4f91755ff263.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:lFVgNP76JDzOHCT8EbOmqWtMoAY="
        }, {
          "id": 22,
          "name": "来包辣条压压惊丶",
          "level": 32,
          "gold": 24,
          "star": 124,
          "icon": "https://s1.chu0.com/src/img/png/5e/5ea98a47cd1e4283b9d82808ecc79214.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:1_2i1b-ZTdtO4V4SXt0Ji-MJa_A="
        }, {
          "id": 23,
          "name": "浮光浅夏ζ",
          "level": 33,
          "gold": 25,
          "star": 125,
          "icon": "https://s1.chu0.com/src/img/png/41/41bab6f142934b14a019281a2ed9f49f.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:E0L1SfFJXSueheLe5WNyrx1FIZ8="
        }, {
          "id": 24,
          "name": "孤街浪途",
          "level": 34,
          "gold": 26,
          "star": 126,
          "icon": "https://s1.chu0.com/src/img/png/2c/2ce4e83cf4664959b116d54e241d0bb7.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:g52DywF1cNENi0JOdmjE4S6qd-Q="
        }, {
          "id": 25,
          "name": "做我枕边人",
          "level": 35,
          "gold": 27,
          "star": 127,
          "icon": "https://s1.aigei.com/src/img/png/de/de542454a1f14e1aab1f59fd3bd5adee.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Gm5MmRn5yxiooKg1R7oT99ASeac="
        }, {
          "id": 26,
          "name": "好看好听的网络游戏名字",
          "level": 36,
          "gold": 28,
          "star": 128,
          "icon": "https://s1.aigei.com/src/img/png/ab/ab70f8a103034a719a7754b25f3f9200.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:U2RV2e2jgkStAYALktyE6bv_pes="
        }, {
          "id": 27,
          "name": "21克的爱情",
          "level": 37,
          "gold": 29,
          "star": 129,
          "icon": "https://s1.aigei.com/src/img/png/d6/d689cd0225ba42fcbbafda590afe5753.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_o68iW8oLQwi96b8q_bWdKuau0g="
        }, {
          "id": 28,
          "name": "空谷幽兰",
          "level": 38,
          "gold": 30,
          "star": 17,
          "icon": "https://s1.chu0.com/src/img/png/07/074f9587ef214b0ca9608738fe85257b.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:XzbJ4NPFBxHm7EUAJdFK0SIhCdU="
        }, {
          "id": 29,
          "name": "南城忆潇湘",
          "level": 39,
          "gold": 31,
          "star": 17,
          "icon": "https://s1.aigei.com/src/img/png/f5/f5149112b2704e35a8ce4f91755ff263.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:lFVgNP76JDzOHCT8EbOmqWtMoAY="
        }, {
          "id": 30,
          "name": "赱ぬ洎巳の璐",
          "level": 11,
          "gold": 32,
          "star": 18,
          "icon": "https://s1.aigei.com/src/img/png/ca/ca93b456b8454f6d8fc3041f86b023fe.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:LoxIUiTN-0czqsHbAIbtZIoMiaM="
        }, {
          "id": 31,
          "name": "脚踏棺材看日落",
          "level": 11,
          "gold": 33,
          "star": 19,
          "icon": "https://s1.aigei.com/src/img/png/13/1334938886ea473dbf3904d590dc7a1f.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:apbJ8ETEXZmGCNsbKLufG0B6_5w="
        }, {
          "id": 32,
          "name": "骑着蜗牛拽天下",
          "level": 11,
          "gold": 34,
          "star": 10,
          "icon": "https://s1.chu0.com/src/img/png/fe/fe5545b1f6114933b2e1ec403cea77a0.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:pXarfe5qAAA5XIhYHa30IhlkwaI="
        }, {
          "id": 33,
          "name": "各自安好ぃ",
          "level": 11,
          "gold": 35,
          "star": 11,
          "icon": "https://s1.aigei.com/src/img/png/52/52a79f59d7e14af1b18c1cd4f01053f4.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:WXR1pYK9EkiQxmJ3gX_mRe3yzT8="
        }, {
          "id": 34,
          "name": "兂法觸岌の啈冨",
          "level": 12,
          "gold": 36,
          "star": 12,
          "icon": "https://s1.aigei.com/src/img/png/f1/f1c29ff1ec984ca4a516950db98f1685.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:jGXMAB9jgPQ9k6PcE2s1pxe7Eak="
        }, {
          "id": 35,
          "name": "離人涙",
          "level": 13,
          "gold": 37,
          "star": 13,
          "icon": "https://s1.chu0.com/src/img/png/8c/8ca489d9cfc4459c9b28436174ad4a1b.png?imageMogr2/auto-orient/thumbnail/!120x120r/gravity/Center/crop/120x120/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:lBgbetBCi-OeO55X_Ui1k7ElLOM="
        }, {
          "id": 36,
          "name": "清明雨上",
          "level": 14,
          "gold": 38,
          "star": 14,
          "icon": "https://s1.aigei.com/src/img/png/fe/fe5165a77c1941eb855d3b5036b9ca10.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:NDr2zA8uZ5uDSKhpUNz9NJeOkOM="
        }, {
          "id": 37,
          "name": "夏初染ぃ夜清浅",
          "level": 15,
          "gold": 15,
          "star": 15,
          "icon": "https://s1.chu0.com/src/img/png/32/329023e28b56442398b0bd554c1b0cca.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:DBdhmnNQp78zOdlf8KBxIBUfo9o="
        }, {
          "id": 38,
          "name": "墨染琉璃殇",
          "level": 16,
          "gold": 16,
          "star": 16,
          "icon": "https://s1.aigei.com/src/img/png/03/031b9f0fe0204814a535e379e27d7bd1.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:o4txufVpCPAz291gg9MWBeiLkKY="
        }, {
          "id": 39,
          "name": "此菇凉、你惹不起",
          "level": 17,
          "gold": 17,
          "star": 17,
          "icon": "https://s1.chu0.com/src/img/png/e8/e87bff8134d84968b863e9cc5a6f97a3.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:k2JEi7KxKm3fZspuZe51-wHonxE="
        }, {
          "id": 40,
          "name": "蠢呆笨傻丑",
          "level": 18,
          "gold": 18,
          "star": 18,
          "icon": "https://s1.chu0.com/src/img/png/32/329023e28b56442398b0bd554c1b0cca.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:DBdhmnNQp78zOdlf8KBxIBUfo9o="
        }, {
          "id": 41,
          "name": "饮一盅浊酒",
          "level": 19,
          "gold": 19,
          "star": 19,
          "icon": "https://s1.aigei.com/src/img/png/03/031b9f0fe0204814a535e379e27d7bd1.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:o4txufVpCPAz291gg9MWBeiLkKY="
        }, {
          "id": 42,
          "name": "好看好听的网络游戏名字",
          "level": 20,
          "gold": 20,
          "star": 20,
          "icon": "https://s1.chu0.com/src/img/png/e8/e87bff8134d84968b863e9cc5a6f97a3.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:k2JEi7KxKm3fZspuZe51-wHonxE="
        }, {
          "id": 43,
          "name": "女子",
          "level": 21,
          "gold": 21,
          "star": 21,
          "icon": "https://s1.chu0.com/src/img/png/4b/4b5e2e13126341f881370020c9006f9e.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:UxUsU0Cz9tRa--swSy4uzaEyvlw="
        }, {
          "id": 44,
          "name": "閉嘴←-╯",
          "level": 22,
          "gold": 22,
          "star": 22,
          "icon": "https://s1.chu0.com/src/img/png/5e/5ea98a47cd1e4283b9d82808ecc79214.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:1_2i1b-ZTdtO4V4SXt0Ji-MJa_A="
        }, {
          "id": 45,
          "name": "芙蓉姐夫(╰_╯)",
          "level": 23,
          "gold": 23,
          "star": 23,
          "icon": "https://s1.chu0.com/src/img/png/41/41bab6f142934b14a019281a2ed9f49f.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:E0L1SfFJXSueheLe5WNyrx1FIZ8="
        }, {
          "id": 46,
          "name": "花开の彼岸",
          "level": 24,
          "gold": 24,
          "star": 24,
          "icon": "https://s1.chu0.com/src/img/png/2c/2ce4e83cf4664959b116d54e241d0bb7.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:g52DywF1cNENi0JOdmjE4S6qd-Q="
        }, {
          "id": 47,
          "name": "茈籹子、舆尓無関",
          "level": 25,
          "gold": 25,
          "star": 25,
          "icon": "https://s1.aigei.com/src/img/png/de/de542454a1f14e1aab1f59fd3bd5adee.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Gm5MmRn5yxiooKg1R7oT99ASeac="
        }, {
          "id": 48,
          "name": "除了你，什么都不重要",
          "level": 26,
          "gold": 26,
          "star": 26,
          "icon": "https://s1.aigei.com/src/img/png/ab/ab70f8a103034a719a7754b25f3f9200.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:U2RV2e2jgkStAYALktyE6bv_pes="
        }, {
          "id": 49,
          "name": "氵孚夸ㄨ",
          "level": 27,
          "gold": 27,
          "star": 27,
          "icon": "https://s1.aigei.com/src/img/png/d6/d689cd0225ba42fcbbafda590afe5753.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_o68iW8oLQwi96b8q_bWdKuau0g="
        }, {
          "id": 50,
          "name": "专业挖墙角",
          "level": 28,
          "gold": 28,
          "star": 28,
          "icon": "https://s1.chu0.com/src/img/png/07/074f9587ef214b0ca9608738fe85257b.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:XzbJ4NPFBxHm7EUAJdFK0SIhCdU="
        }, {
          "id": 51,
          "name": "輸過敗過但不曾怕過",
          "level": 29,
          "gold": 29,
          "star": 29,
          "icon": "https://s1.aigei.com/src/img/png/f5/f5149112b2704e35a8ce4f91755ff263.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:lFVgNP76JDzOHCT8EbOmqWtMoAY="
        }, {
          "id": 52,
          "name": "ㄍ皒只是路过迩的爱情",
          "level": 30,
          "gold": 30,
          "star": 8,
          "icon": "https://s1.aigei.com/src/img/png/ca/ca93b456b8454f6d8fc3041f86b023fe.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:LoxIUiTN-0czqsHbAIbtZIoMiaM="
        }, {
          "id": 53,
          "name": "先森°下个路口见",
          "level": 31,
          "gold": 31,
          "star": 8,
          "icon": "https://s1.aigei.com/src/img/png/13/1334938886ea473dbf3904d590dc7a1f.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:apbJ8ETEXZmGCNsbKLufG0B6_5w="
        }, {
          "id": 54,
          "name": "怀抱清风",
          "level": 100,
          "gold": 31,
          "star": 100,
          "icon": "https://s1.chu0.com/src/img/png/4b/4b5e2e13126341f881370020c9006f9e.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:UxUsU0Cz9tRa--swSy4uzaEyvlw="
        }, {
          "id": 55,
          "name": "一个很有粪量的人",
          "level": 80,
          "gold": 32,
          "star": 80,
          "icon": "https://s1.chu0.com/src/img/png/5e/5ea98a47cd1e4283b9d82808ecc79214.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:1_2i1b-ZTdtO4V4SXt0Ji-MJa_A="
        }, {
          "id": 56,
          "name": "墨云压城っ",
          "level": 44,
          "gold": 33,
          "star": 44,
          "icon": "https://s1.chu0.com/src/img/png/41/41bab6f142934b14a019281a2ed9f49f.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:E0L1SfFJXSueheLe5WNyrx1FIZ8="
        }, {
          "id": 57,
          "name": "咖啡少年不加糖っ°",
          "level": 62,
          "gold": 34,
          "star": 62,
          "icon": "https://s1.chu0.com/src/img/png/2c/2ce4e83cf4664959b116d54e241d0bb7.png?imageMogr2/auto-orient/thumbnail/!99x99r/gravity/Center/crop/99x99/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:g52DywF1cNENi0JOdmjE4S6qd-Q="
        }, {
          "id": 58,
          "name": "香疏影",
          "level": 35,
          "gold": 35,
          "star": 35,
          "icon": "https://s1.aigei.com/src/img/png/de/de542454a1f14e1aab1f59fd3bd5adee.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Gm5MmRn5yxiooKg1R7oT99ASeac="
        }, {
          "id": 59,
          "name": "颜如玉",
          "level": 40,
          "gold": 36,
          "star": 40,
          "icon": "https://s1.aigei.com/src/img/png/ab/ab70f8a103034a719a7754b25f3f9200.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:U2RV2e2jgkStAYALktyE6bv_pes="
        }, {
          "id": 60,
          "name": "该梦归何处",
          "level": 170,
          "gold": 37,
          "star": 170,
          "icon": "https://s1.aigei.com/src/img/png/d6/d689cd0225ba42fcbbafda590afe5753.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_o68iW8oLQwi96b8q_bWdKuau0g="
        }, {
          "id": 61,
          "name": "ゞ今年欢笑乄复明年ぁ",
          "level": 211,
          "gold": 38,
          "star": 211,
          "icon": "https://s1.chu0.com/src/img/png/07/074f9587ef214b0ca9608738fe85257b.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:XzbJ4NPFBxHm7EUAJdFK0SIhCdU="
        }, {
          "id": 62,
          "name": "华陀也医不好我的相思病",
          "level": 210,
          "gold": 15,
          "star": 210,
          "icon": "https://s1.aigei.com/src/img/png/f5/f5149112b2704e35a8ce4f91755ff263.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:lFVgNP76JDzOHCT8EbOmqWtMoAY="
        }, {
          "id": 63,
          "name": "时隔亿光年。",
          "level": 99,
          "gold": 16,
          "star": 99,
          "icon": "https://s1.aigei.com/src/img/png/ca/ca93b456b8454f6d8fc3041f86b023fe.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:LoxIUiTN-0czqsHbAIbtZIoMiaM="
        }, {
          "id": 64,
          "name": "╬═☆解读青春",
          "level": 72,
          "gold": 17,
          "star": 72,
          "icon": "https://s1.aigei.com/src/img/png/13/1334938886ea473dbf3904d590dc7a1f.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:apbJ8ETEXZmGCNsbKLufG0B6_5w="
        }, {
          "id": 65,
          "name": "南鱼在流浪",
          "level": 37,
          "gold": 18,
          "star": 37,
          "icon": "https://s1.chu0.com/src/img/png/fe/fe5545b1f6114933b2e1ec403cea77a0.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:pXarfe5qAAA5XIhYHa30IhlkwaI="
        }, {
          "id": 66,
          "name": "时光与猫~",
          "level": 88,
          "gold": 19,
          "star": 88,
          "icon": "https://s1.aigei.com/src/img/png/52/52a79f59d7e14af1b18c1cd4f01053f4.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:WXR1pYK9EkiQxmJ3gX_mRe3yzT8="
        }, {
          "id": 67,
          "name": "落落清欢",
          "level": 82,
          "gold": 20,
          "star": 82,
          "icon": "https://s1.aigei.com/src/img/png/f1/f1c29ff1ec984ca4a516950db98f1685.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:jGXMAB9jgPQ9k6PcE2s1pxe7Eak="
        }, {
          "id": 68,
          "name": "づ墨小白",
          "level": 31,
          "gold": 21,
          "star": 31,
          "icon": "https://s1.chu0.com/src/img/png/8c/8ca489d9cfc4459c9b28436174ad4a1b.png?imageMogr2/auto-orient/thumbnail/!120x120r/gravity/Center/crop/120x120/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:lBgbetBCi-OeO55X_Ui1k7ElLOM="
        }, {
          "id": 69,
          "name": "时光时光你慢慢走",
          "level": 57,
          "gold": 22,
          "star": 57,
          "icon": "https://s1.aigei.com/src/img/png/fe/fe5165a77c1941eb855d3b5036b9ca10.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:NDr2zA8uZ5uDSKhpUNz9NJeOkOM="
        }, {
          "id": 70,
          "name": "心软是病,不治要命",
          "level": 78,
          "gold": 23,
          "star": 78,
          "icon": "https://s1.chu0.com/src/img/png/32/329023e28b56442398b0bd554c1b0cca.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:DBdhmnNQp78zOdlf8KBxIBUfo9o="
        }, {
          "id": 71,
          "name": "谁放肆了寂寞",
          "level": 165,
          "gold": 24,
          "star": 165,
          "icon": "https://s1.aigei.com/src/img/png/03/031b9f0fe0204814a535e379e27d7bd1.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:o4txufVpCPAz291gg9MWBeiLkKY="
        }, {
          "id": 72,
          "name": "笑而不语痛而不言╮",
          "level": 76,
          "gold": 25,
          "star": 76,
          "icon": "https://s1.chu0.com/src/img/png/e8/e87bff8134d84968b863e9cc5a6f97a3.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:k2JEi7KxKm3fZspuZe51-wHonxE="
        }, {
          "id": 73,
          "name": "心软命",
          "level": 38,
          "gold": 26,
          "star": 38,
          "icon": "https://s1.chu0.com/src/img/png/32/329023e28b56442398b0bd554c1b0cca.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:DBdhmnNQp78zOdlf8KBxIBUfo9o="
        }, {
          "id": 74,
          "name": "寂寞",
          "level": 65,
          "gold": 27,
          "star": 65,
          "icon": "https://s1.aigei.com/src/img/png/03/031b9f0fe0204814a535e379e27d7bd1.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:o4txufVpCPAz291gg9MWBeiLkKY="
        }, {
          "id": null,
          "name": "不语不言╮",
          "level": 176,
          "gold": 28,
          "star": 176,
          "icon": "https://s1.chu0.com/src/img/png/e8/e87bff8134d84968b863e9cc5a6f97a3.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:k2JEi7KxKm3fZspuZe51-wHonxE="
        }];
      };
      var RankConfig = exports('RankConfig', new config());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resLoadHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, resources, error, assetManager, SpriteFrame, Texture2D, Prefab, AudioClip, Logger;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      error = module.error;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d82ef1RPtJgrWD8FefRXfc", "resLoadHelper", undefined);
      /**
       * 加载资源
       */
      var Helper = /*#__PURE__*/function () {
        function Helper() {
          this.resBundle = resources;
        }
        var _proto = Helper.prototype;
        _proto.setBundle = function setBundle(bundle) {
          this.resBundle = bundle || resources;
        }

        /** 预加载资源 */;
        _proto.preloadAsset = function preloadAsset(url, type) {
          this.resBundle.preload(url, type);
        }

        /** 预加载文件夹 */;
        _proto.preloadDir = function preloadDir(url, onProgress, call) {
          this.resBundle.preloadDir(url, function (finish, total, item) {
            onProgress && onProgress(finish, total, item);
          }, function (err, items) {
            if (err) {
              error("preloadDir \u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
              return null;
            }
            call && call(items);
          });
        }
        /** 预加载文件 */;
        _proto.preloadPath = function preloadPath(url, onProgress, call, faild) {
          this.resBundle.preload(url, function (finish, total, item) {
            onProgress && onProgress(finish, total, item);
          }, function (err, items) {
            if (err) {
              faild && faild(err);
              error("preload \u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
              return null;
            }
            call && call(items);
          });
        }

        /** 加载3D模型 */;
        _proto.loadModle = /*#__PURE__*/
        function () {
          var _loadModle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.loadCommonAssetSync("modle/" + name, Prefab);
                case 2:
                  return _context.abrupt("return", _context.sent);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadModle(_x) {
            return _loadModle.apply(this, arguments);
          }
          return loadModle;
        }() /** 加载3D模型 */;
        _proto.loadFish = /*#__PURE__*/
        function () {
          var _loadFish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fishType) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.loadCommonAssetSync("fish/" + fishType, Prefab);
                case 2:
                  return _context2.abrupt("return", _context2.sent);
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadFish(_x2) {
            return _loadFish.apply(this, arguments);
          }
          return loadFish;
        }() /** 加载3D模型 */;
        _proto.loadBullet = /*#__PURE__*/
        function () {
          var _loadBullet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.loadCommonAssetSync("pao/bullet", Prefab);
                case 2:
                  return _context3.abrupt("return", _context3.sent);
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadBullet() {
            return _loadBullet.apply(this, arguments);
          }
          return loadBullet;
        }() /** 加载3D模型 */;
        _proto.loadFishNet = /*#__PURE__*/
        function () {
          var _loadFishNet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.loadCommonAssetSync("pao/fishNet", Prefab);
                case 2:
                  return _context4.abrupt("return", _context4.sent);
                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function loadFishNet() {
            return _loadFishNet.apply(this, arguments);
          }
          return loadFishNet;
        }() /** 加载3D模型 */;
        _proto.loadPieces = /*#__PURE__*/
        function () {
          var _loadPieces = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(name) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.loadCommonAssetSync("pieces/" + name, Prefab);
                case 2:
                  return _context5.abrupt("return", _context5.sent);
                case 3:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function loadPieces(_x3) {
            return _loadPieces.apply(this, arguments);
          }
          return loadPieces;
        }() // 加载通用资源
        ;

        _proto.loadCommonAssetSync = function loadCommonAssetSync(url, type) {
          var _this = this;
          return new Promise(function (resolve) {
            url = type == Prefab ? "prefab/" + url : url;
            if (type == SpriteFrame) {
              url += "/spriteFrame";
            }
            _this.resBundle.load(url, type, function (err, assets) {
              if (err) {
                Logger.error("loadCommonAssetSync \u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
                resolve(null);
              } else {
                Logger.trace(url);
                resolve(assets);
              }
            });
          });
        }

        /** 同步加载资源 */;
        _proto.loadAssetSync = function loadAssetSync(url, type) {
          var _this2 = this;
          return new Promise(function (resolve) {
            _this2.resBundle.load(url, type, function (err, assets) {
              if (err) {
                Logger.error("loadAssetSync \u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
                resolve(null);
              } else {
                resolve(assets);
              }
            });
          });
        }

        /** 异步加载资源 */;
        _proto.loadAssetAsync = function loadAssetAsync(url, type, call, isRemote, isCommon) {
          if (isRemote === void 0) {
            isRemote = false;
          }
          if (isCommon === void 0) {
            isCommon = false;
          }
          if (isRemote) {
            assetManager.loadRemote(url, {
              ext: '.png'
            }, function (err, texture) {
              if (err) {
                Logger.error("loadAssetAsync remote png \u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
                assetManager.loadRemote(url, {
                  ext: '.jpg'
                }, function (err, texture) {
                  if (err) {
                    Logger.error("loadAssetAsync remote jpg \u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
                    return null;
                  }
                  var spr = new SpriteFrame();
                  var texture2d = new Texture2D();
                  texture2d.image = texture;
                  spr.texture = texture2d;
                  call && call(spr);
                });
                return null;
              }
              var spr = new SpriteFrame();
              var texture2d = new Texture2D();
              texture2d.image = texture;
              spr.texture = texture2d;
              call && call(spr);
            });
          } else {
            var bundle = isCommon ? resources : this.resBundle;
            bundle.load(url, type, function (err, asset) {
              if (err) {
                Logger.error("loadAssetAsync \u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
                return null;
              }
              call && call(asset);
            });
          }
        }

        /** 同步加载prefab文件 */;
        _proto.loadPrefabSync = /*#__PURE__*/
        function () {
          var _loadPrefabSync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  return _context6.abrupt("return", this.loadAssetSync("prefab/" + url, Prefab));
                case 1:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function loadPrefabSync(_x4) {
            return _loadPrefabSync.apply(this, arguments);
          }
          return loadPrefabSync;
        }() /** 加载声音文件 */;
        _proto.loadAudioClipSync = /*#__PURE__*/
        function () {
          var _loadAudioClipSync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(soundFile) {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  return _context7.abrupt("return", this.loadAssetSync("sound/" + soundFile, AudioClip));
                case 1:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function loadAudioClipSync(_x5) {
            return _loadAudioClipSync.apply(this, arguments);
          }
          return loadAudioClipSync;
        }() /** 加载通用声音文件 */;
        _proto.loadCommonAudioClip = /*#__PURE__*/
        function () {
          var _loadCommonAudioClip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(soundFile) {
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  return _context8.abrupt("return", this.loadCommonAssetSync("sound/" + soundFile, AudioClip));
                case 1:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function loadCommonAudioClip(_x6) {
            return _loadCommonAudioClip.apply(this, arguments);
          }
          return loadCommonAudioClip;
        }() /** 释放资源 */;
        _proto.releaseAsset = function releaseAsset(url, type) {
          this.resBundle.release(url, type);
        };
        return Helper;
      }();
      var ResLoadHelper = exports('ResLoadHelper', new Helper());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resultViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './eventName.ts', './levelConfig.ts', './viewNameConst.ts', './app.ts', './cocosHelper.ts', './globalFuncHelper.ts', './storageHelper.ts', './toolsHelper.ts', './advertise.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, instantiate, v3, tween, BaseViewCmpt, EventName, LevelConfig, ViewName, App, CocosHelper, GlobalFuncHelper, StorageHelper, StorageHelperKey, ToolsHelper, Advertise;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      LevelConfig = module.LevelConfig;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      CocosHelper = module.CocosHelper;
    }, function (module) {
      GlobalFuncHelper = module.GlobalFuncHelper;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }, function (module) {
      ToolsHelper = module.ToolsHelper;
    }, function (module) {
      Advertise = module.Advertise;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0f90fAEI/tN8ZvgDVfbMKdZ", "resultViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResultViewCmpt = exports('ResultViewCmpt', (_dec = ccclass('resultViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(ResultViewCmpt, _BaseViewCmpt);
        function ResultViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseViewCmpt.call.apply(_BaseViewCmpt, [this].concat(args)) || this;
          _this.lbRefresh = null;
          _this.lbGold = null;
          return _this;
        }
        var _proto = ResultViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseViewCmpt.prototype.onLoad.call(this);
          this.lbRefresh = this.viewList.get('animNode/lose/lbRefresh');
          this.lbGold = this.viewList.get('animNode/win/t/lbGold');
        };
        _proto.loadExtraData = function loadExtraData(isWin, starScore) {
          this.viewList.get('animNode/win').active = isWin;
          this.viewList.get('animNode/lose').active = !isWin;
          if (isWin) {
            var data = LevelConfig.getDefaultData();
            for (var i = 0; i < data.targetList.length; i++) {
              App.gameLogic.addMyFeedFish(+data.targetList[i]);
            }
            LevelConfig.nextLevel();
            var _count = +StorageHelper.getData(StorageHelperKey.StarScore, 0);
            StorageHelper.setData(StorageHelperKey.StarScore, _count + starScore);
            this.playF();
          }
          this.scheduleOnce(function () {
            if (isWin) {
              App.audio.play('win');
            } else {
              App.audio.play('lose');
            }
          }, 0.2);
          var count = +StorageHelper.getData(StorageHelperKey.RefreshTools, 0);
          CocosHelper.updateLabelText(this.lbRefresh, count);
        };
        _proto.onClick_videoBtn = function onClick_videoBtn() {
          Advertise.showVideoAds();
        };
        _proto.onClick_nextBtn = function onClick_nextBtn() {
          this.onClick_closeBtn();
          App.event.emit(EventName.Game.NextLevel);
          var id = LevelConfig.getCurLevel();
          if (id > 2) {
            Advertise.showVideoAds();
          }
        };
        _proto.onClick_homeBtn = function onClick_homeBtn() {
          App.view.openView(ViewName.Single.eFeedView);
          this.onClick_closeBtn();
        };
        _proto.onClick_replayBtn = function onClick_replayBtn() {
          var count = +StorageHelper.getData(StorageHelperKey.RefreshTools, 0);
          if (count < 1) {
            var lv = LevelConfig.getCurLevel();
            App.event.emit(EventName.Game.Share, lv);
            App.view.showMsgTips("次数不足，分享可获取次数");
            return;
          }
          this.onClick_nextBtn();
          Advertise.showVideoAds();
        };
        _proto.playF = /*#__PURE__*/function () {
          var _playF = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return ToolsHelper.delayTime(0.2);
                case 2:
                  for (i = 0; i < 10; i++) {
                    this.playFlyCoin(0.5 + (i + 1.5) / 5);
                  }
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playF() {
            return _playF.apply(this, arguments);
          }
          return playF;
        }();
        _proto.playFlyCoin = function playFlyCoin(time) {
          var _this2 = this;
          var coin = instantiate(this.viewList.get('animNode/win/spCoin'));
          coin.active = true;
          this.viewList.get("animNode/win").addChild(coin);
          var p = this.viewList.get('animNode/win/pos1').position;
          coin.setPosition(v3(-50 + Math.random() * 100 + p.x, -50 + Math.random() * 100 + p.y, p.z));
          var endPos = this.viewList.get('animNode/win/pos2').position;
          tween(coin).to(time, {
            position: endPos
          }, {
            easing: 'backIn'
          }).call(function () {
            GlobalFuncHelper.setGold(10);
            CocosHelper.updateLabelText(_this2.lbGold, GlobalFuncHelper.getGold());
            coin.destroy();
            App.event.emit(EventName.Game.UpdataGold);
          }).start();
        };
        return ResultViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rotateSelf.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "26798zR015DGLmi4WYgoZGU", "rotateSelf", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var rotateSelf = exports('rotateSelf', (_dec = ccclass('rotateSelf'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rotateSelf, _Component);
        function rotateSelf() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = rotateSelf.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {
          this.node.angle--;
        };
        return rotateSelf;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/routers.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0cebfu+MAFOT7tgFDkR1Kxz", "routers", undefined);
      var Router = exports('Router', {
        /** 创建房间 */
        rut_login: "1001",
        /** 用户列表 */
        rut_list: "1002",
        /** 刷新数据 */
        rut_update: "1003"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/screenRayCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseNodeCmpt.ts', './eventName.ts', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, input, Input, BaseNodeCmpt, EventName, App;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      input = module.input;
      Input = module.Input;
    }, function (module) {
      BaseNodeCmpt = module.BaseNodeCmpt;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      App = module.App;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "af448ZFLpFJHqF7Ke94yyTx", "screenRayCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * 射线碰撞检测
       */
      var screenRayCmpt = exports('screenRayCmpt', (_dec = ccclass('screenRayCmpt'), _dec(_class = /*#__PURE__*/function (_BaseNodeCmpt) {
        _inheritsLoose(screenRayCmpt, _BaseNodeCmpt);
        function screenRayCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseNodeCmpt.call.apply(_BaseNodeCmpt, [this].concat(args)) || this;
          _this.isCanDo = false;
          return _this;
        }
        var _proto = screenRayCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseNodeCmpt.prototype.onLoad.call(this);
        };
        _proto.start = function start() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          if (this.isCanDo) return;
          this.isCanDo = true;
          App.event.emit(EventName.Game.TouchStart, event.getUILocation());
        };
        _proto.onTouchMove = function onTouchMove(event) {
          if (!this.isCanDo) {
            this.isCanDo = true;
            return;
          }
          App.event.emit(EventName.Game.TouchMove, event.getUILocation());
        };
        _proto.onTouchEnd = function onTouchEnd(event) {
          this.isCanDo = false;
          App.event.emit(EventName.Game.TouchEnd, event.getUILocation());
        };
        return screenRayCmpt;
      }(BaseNodeCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scrollItemCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseNodeCmpt.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseNodeCmpt;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseNodeCmpt = module.BaseNodeCmpt;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9782fuZH11LWoU9aufDR7CZ", "scrollItemCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScrollItemCmpt = exports('default', (_dec = ccclass("scrollItemCmpt"), _dec(_class = /*#__PURE__*/function (_BaseNodeCmpt) {
        _inheritsLoose(ScrollItemCmpt, _BaseNodeCmpt);
        function ScrollItemCmpt() {
          return _BaseNodeCmpt.apply(this, arguments) || this;
        }
        var _proto = ScrollItemCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseNodeCmpt.prototype.onLoad.call(this);
          this.addEvent();
        };
        _proto.initData = function initData() {};
        _proto.addEvent = function addEvent() {};
        _proto.delEvent = function delEvent() {};
        return ScrollItemCmpt;
      }(BaseNodeCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scrollViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './scrollItemCmpt.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, UITransform, size, instantiate, Vec3, ScrollView, ScrollItemCmpt;
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
      Widget = module.Widget;
      UITransform = module.UITransform;
      size = module.size;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      ScrollView = module.ScrollView;
    }, function (module) {
      ScrollItemCmpt = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "03df9SdzGdMcbQGDTRJhBGo", "scrollViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScrollViewCmpt = exports('ScrollViewCmpt', (_dec = ccclass("scrollViewCmpt"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_ScrollView) {
        _inheritsLoose(ScrollViewCmpt, _ScrollView);
        function ScrollViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ScrollView.call.apply(_ScrollView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollItem", _descriptor, _assertThisInitialized(_this));
          _this.gap = 5;
          _this.loopCount = 0;
          _this.itemArr = [];
          _this.posArr = [];
          _this.bottomY = -100000;
          _this.m_data = null;
          return _this;
        }
        var _proto = ScrollViewCmpt.prototype;
        _proto.start = function start() {
          _ScrollView.prototype.start.call(this);
          this.node.on("scrolling", this.scrolling, this);
          this.scrollItem.active = false;
        };
        _proto.resetContentSize = function resetContentSize(datalist) {
          var widget = this.node.getComponent(Widget);
          if (widget) {
            widget.updateAlignment();
          }
          var itemH = this.scrollItem.getComponent(UITransform).height;
          var height = datalist.length * (itemH + this.gap);
          this.content.getComponent(UITransform).setContentSize(size(this.node.getComponent(UITransform).width, height));
          var len1 = Math.ceil(this.node.getComponent(UITransform).height / (itemH + this.gap));
          var len2 = datalist.length;
          this.loopCount = len2 > len1 ? len1 : len2;
        };
        _proto.initData = function initData(dataObj) {
          var datalist = dataObj.list;
          this.m_data = dataObj;
          this.resetContentSize(datalist);
          if (this.itemArr.length > 0) {
            this.itemArr.forEach(function (item) {
              item.active = false;
            });
          }
          var itemH = this.scrollItem.getComponent(UITransform).height;
          this.posArr = [];
          for (var i = 0; i < datalist.length; i++) {
            var posY = -(itemH + this.gap) * i - (itemH / 2 + this.gap);
            this.posArr.push(posY);
            if (i <= this.loopCount) {
              var node = this.itemArr[i];
              if (!node) {
                node = instantiate(this.scrollItem);
                this.content.addChild(node);
                this.itemArr.push(node);
              }
              var script = node.getComponent(ScrollItemCmpt);
              node.active = true;
              if (script) {
                script.initData(datalist[i], this.m_data.target);
              }
              node.setPosition(new Vec3(0, posY, 0));
            }
          }
        };
        _proto.updateItemInfo = function updateItemInfo(item, idx) {
          var script = item.getComponent(ScrollItemCmpt);
          if (script && this.m_data.list[idx]) {
            script.initData(this.m_data.list[idx], this.m_data.target);
          }
        };
        _proto.scrolling = function scrolling() {
          if (!this.itemArr[0]) return;
          for (var i = 0; i < this.itemArr.length; i++) {
            var item = this.itemArr[i];
            var pos = item.getPosition();
            var worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(pos);
            var thisPos = this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(this.node.getPosition());
            var gap = this.node.getComponent(UITransform).height / 2;
            if (worldPos.y >= thisPos.y + gap + this.scrollItem.getComponent(UITransform).height) {
              var index = this.posArr.indexOf(pos.y);
              if (index + this.loopCount + 1 > this.posArr.length - 1) return;
              var newPos = item.getPosition();
              newPos.y = this.posArr[index + this.loopCount + 1];
              item.setPosition(newPos);
              this.updateItemInfo(item, index + this.loopCount + 1);
            }
            if (worldPos.y < this.bottomY) {
              var _index = this.posArr.indexOf(pos.y);
              if (_index - this.loopCount - 1 >= 0) {
                var _newPos = item.getPosition();
                _newPos.y = this.posArr[_index - this.loopCount - 1];
                item.setPosition(_newPos);
                this.updateItemInfo(item, _index - this.loopCount - 1);
              }
            }
            item = this.itemArr[this.itemArr.length - 1];
            pos = item.getPosition();
            worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(pos);
            if (this.bottomY == -100000) {
              this.bottomY = thisPos.y - gap - this.scrollItem.getComponent(UITransform).height;
            }
          }
        };
        return ScrollViewCmpt;
      }(ScrollView), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollItem", [_dec2], {
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

System.register("chunks:///_virtual/settingViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './app.ts', './cocosHelper.ts', './storageHelper.ts', './advertise.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseViewCmpt, App, CocosHelper, StorageHelper, StorageHelperKey, Advertise;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      App = module.App;
    }, function (module) {
      CocosHelper = module.CocosHelper;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }, function (module) {
      Advertise = module.Advertise;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5851b+QnKRAfo5M6KhGfdnW", "settingViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var settingViewCmpt = exports('settingViewCmpt', (_dec = ccclass('settingViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(settingViewCmpt, _BaseViewCmpt);
        function settingViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseViewCmpt.call.apply(_BaseViewCmpt, [this].concat(args)) || this;
          _this.lbRefresh = null;
          return _this;
        }
        var _proto = settingViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseViewCmpt.prototype.onLoad.call(this);
          this.updateOperateStatus();
        };
        _proto.updateOperateStatus = function updateOperateStatus() {
          this.viewList.get('animNode/content/btnSound/off').active = !StorageHelper.getBooleanData(StorageHelperKey.Music_Eff_Status);
          this.viewList.get('animNode/content/btnMusic/off').active = !StorageHelper.getBooleanData(StorageHelperKey.Music_Status);
          this.viewList.get('animNode/content/btnVibration/off').active = !StorageHelper.getBooleanData(StorageHelperKey.Zhen_Dong_Status);
          this.lbRefresh = this.viewList.get('animNode/content/p/lbRefresh');
        };
        _proto.loadExtraData = function loadExtraData() {
          if (this.lbRefresh) {
            var count = +StorageHelper.getData(StorageHelperKey.RefreshTools, 0);
            CocosHelper.updateLabelText(this.lbRefresh, "X" + count);
          }
        };
        _proto.onClick_btnSound = function onClick_btnSound() {
          App.audio.play('button_click');
          StorageHelper.setBooleanData(StorageHelperKey.Music_Eff_Status, !StorageHelper.getBooleanData(StorageHelperKey.Music_Eff_Status));
          this.updateOperateStatus();
        };
        _proto.onClick_btnMusic = function onClick_btnMusic() {
          App.audio.play('button_click');
          StorageHelper.setBooleanData(StorageHelperKey.Music_Status, !StorageHelper.getBooleanData(StorageHelperKey.Music_Status));
          this.updateOperateStatus();
        };
        _proto.onClick_btnVibration = function onClick_btnVibration() {
          App.audio.play('button_click');
          StorageHelper.setBooleanData(StorageHelperKey.Zhen_Dong_Status, !StorageHelper.getBooleanData(StorageHelperKey.Zhen_Dong_Status));
          this.updateOperateStatus();
        };
        _proto.onClick_closeBtn = function onClick_closeBtn() {
          App.audio.play('button_click');
          _BaseViewCmpt.prototype.onClick_closeBtn.call(this);
        };
        _proto.onClick_homeBtn = function onClick_homeBtn() {
          this.onClick_closeBtn();
          App.backHome();
        };
        _proto.onClick_continueBtn = function onClick_continueBtn() {
          this.onClick_closeBtn();
          Advertise.showVideoAds();
        };
        _proto.onClick_btnVideo = function onClick_btnVideo() {
          Advertise.showVideoAds();
          this.onClick_closeBtn();
        };
        return settingViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/singletonClass.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2bc1bhYp31C8I5yjunTi037", "singletonClass", undefined);
      /**
       * 单件基类，所有单件对象（一般管理器类使用）
       */
      var SingletonClass = exports('SingletonClass', /*#__PURE__*/function () {
        function SingletonClass() {
          this._instance = null;
          this._isValid = false;
        }
        SingletonClass.getInstance = function getInstance(o) {
          if (this.prototype._instance == null) {
            this.prototype._instance = new o();
          }
          return this.prototype._instance;
        };
        var _proto = SingletonClass.prototype;
        _proto.init = function init() {
          this.onInit.apply(this, arguments);
          this._isValid = true;
        };
        _proto.destroy = function destroy() {
          if (!this._isValid) return;
          this.onDestroy();
          this._isValid = false;
          this._instance = null;
        }

        // 子类实现
        ;

        _proto.onInit = function onInit() {}

        // 子类实现
        ;

        _proto.onDestroy = function onDestroy() {};
        _createClass(SingletonClass, [{
          key: "valid",
          get:
          // 该对象是否有效
          function get() {
            return this._isValid;
          }
        }]);
        return SingletonClass;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineRunner.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eee724jWyJOMZUDJnK7pdlf", "SpineRunner", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spTouchExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Vec3, Vec4, UITransform, Sprite, Node, Component;
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
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1743eh4PHtJ5o5mzvfG9Hqg", "spTouchExample", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var v2_0 = new Vec2();
      var v3_0 = new Vec3();
      var v4_0 = new Vec4();
      var spTouchExample = exports('spTouchExample', (_dec = ccclass('spTouchExample'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(spTouchExample, _Component);
        function spTouchExample() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "waveDis", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveSpeed", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveStr", _descriptor3, _assertThisInitialized(_this));
          _this.waveProp = new Vec4();
          _this._trans = void 0;
          _this._pass = void 0;
          _this._handle = void 0;
          return _this;
        }
        var _proto = spTouchExample.prototype;
        _proto.start = function start() {
          this._trans = this.node.getComponent(UITransform);
          this.waveProp.w = 100;
          this.waveProp.z = this.waveStr;
          this._pass = this.node.getComponent(Sprite).material.passes[0];

          /* get the handle of FBO in advance */

          this._handle = this._pass.getHandle("waveFactor");
        };
        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          var touch = event.touch;
          touch.getUILocation(v2_0);
          v3_0.set(v2_0.x, v2_0.y);

          /* convert the wolrd ui pos to node's local pos */

          this._trans.convertToNodeSpaceAR(v3_0, v3_0);

          /* cal the UV in sprite */

          var size = this._trans.contentSize;
          var x = size.x;
          var y = size.y;
          v4_0.x = (x * 0.5 + v3_0.x) / x;
          v4_0.y = 1 - (y * 0.5 + v3_0.y) / y;
          v4_0.w = 0;
          this.waveProp.set(v4_0);
        };
        _proto.update = function update(dt) {
          if (this.waveProp.w < 100) {
            this.waveProp.w += dt * this.waveSpeed;
            if (this.waveProp.w > this.waveDis) {
              this.waveProp.w = 100;
            }
            /* since the handle has been got in advance, which can be recon in a frequent update case*/
            this._pass.setUniform(this._handle, this.waveProp);
          }
        };
        return spTouchExample;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "waveDis", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "waveStr", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/storageHelper.ts", ['cc', './app.ts', './Logger.ts'], function (exports) {
  var cclegacy, sys, App, Logger;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      App = module.App;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2e5d77HtUNEkpzK/zlWCR4y", "storageHelper", undefined);

      /** 本地储存key */
      var StorageKey = function StorageKey() {
        this.Audio_Open = 'Audio_Open';
        this.Audio_Volume = 'Audio_Volume';
        /** 背景音乐开关 */
        this.Music_Status = "Music_Status";
        /** 音效开关 */
        this.Music_Eff_Status = "Music_Eff_Status";
        /** 震动开关 */
        this.Zhen_Dong_Status = "Zhen_Dong_Status";
        /** (收集模式)当前关卡ID */
        this.LevelId = "LevelId";
        /** 星数 */
        this.StarScore = "StarScore";
        /** 等级奖励 */
        this.LevelReward = "LevelReward";
        /** 金币 */
        this.Gold = "Gold";
        /** 刷新道具  */
        this.RefreshTools = "RefreshTools";
        /** 提示道具  */
        this.TipsTool = "TipsTool";
        /** 撤回道具  */
        this.ReplaceTool = "ReplaceTool";
        this.Date = "Date";
        /** 抽奖次数 */
        this.LuckSpinTimes = "LuckSpinTimes";
        /** 抽奖5次奖励 */
        this.isGotLuckBox = "isGotLuckBox";
        /** 签到次数 */
        this.SignTimes = "SignTimes";
        /** 是否已领取签到奖励 */
        this.isGotSignReward = "isGotSignReward";
        /** 我的鱼糖鱼 */
        this.MyFish = "MyFish";
        /** 炮台等级 */
        this.PaoLevel = "PaoLevel";
        this.GuidFirst = "GuidFirst";
      };
      var Helper = /*#__PURE__*/function () {
        function Helper() {}
        var _proto = Helper.prototype;
        /** 初始化一些必要的设置 */
        _proto.initData = function initData() {
          //背景音乐
          if (!this.getData(StorageHelperKey.Music_Status)) {
            this.setBooleanData(StorageHelperKey.Music_Status, true);
          }
          //音效
          if (!this.getData(StorageHelperKey.Music_Eff_Status)) {
            this.setBooleanData(StorageHelperKey.Music_Eff_Status, true);
          }
          //震动
          if (!this.getData(StorageHelperKey.Zhen_Dong_Status)) {
            this.setBooleanData(StorageHelperKey.Zhen_Dong_Status, true);
          }
          // 默认关卡 1
          if (!this.getData(StorageHelperKey.LevelId)) {
            this.setData(StorageHelperKey.LevelId, 1);
          }
          // 金币
          if (!this.getData(StorageHelperKey.Gold)) {
            this.setData(StorageHelperKey.Gold, 500);
          }
          // 提示道具
          if (!this.getData(StorageHelperKey.RefreshTools)) {
            this.setData(StorageHelperKey.RefreshTools, 10);
          }
          if (!this.getData(StorageHelperKey.TipsTool)) {
            this.setData(StorageHelperKey.TipsTool, 10);
          }
          // 撤回道具
          if (!this.getData(StorageHelperKey.ReplaceTool)) {
            this.setData(StorageHelperKey.ReplaceTool, 10);
          }

          // 记录
          if (!this.getData(StorageHelperKey.StarScore)) {
            this.setData(StorageHelperKey.StarScore, 0);
          }
          if (!this.getData(StorageHelperKey.PaoLevel)) {
            this.setData(StorageHelperKey.PaoLevel, 1);
          }
        };
        _proto.getBooleanData = function getBooleanData(key, defData) {
          var data = this.getData(key, defData);
          if (!data) {
            return false;
          }
          return !!+data;
        };
        _proto.setBooleanData = function setBooleanData(key, defData) {
          // '1'表示true, '0'表示false
          var data = defData ? '1' : '0';
          this.setData(key, data);
          if (key == StorageHelperKey.Music_Status) {
            if (defData) {
              App.audio.resumeMusic();
            } else {
              App.audio.stopMusic();
            }
          }
        };
        _proto.getData = function getData(key, defData) {
          if (!key) {
            Logger.error("StorageHelper 存储的key不能为空");
            return;
          }
          var data = sys.localStorage.getItem(key);
          if (!data) {
            return defData;
          }
          var pObject;
          try {
            pObject = JSON.parse(data);
          } catch (e) {
            Logger.error("\u89E3\u6790\u5931\u8D25, data=" + data);
            pObject = null;
          }
          if (pObject) {
            return pObject;
          }
          return data;
        };
        _proto.setData = function setData(key, data) {
          if (!key) {
            Logger.error("StorageHelper 存储的key不能为空");
            return;
          }
          if (!data && data != 0) {
            Logger.error("StorageHelper not data");
            return;
          }
          var dataStr = '';
          try {
            dataStr = JSON.stringify(data);
          } catch (e) {
            Logger.error("\u89E3\u6790\u5931\u8D25, data=" + data);
            dataStr = null;
          }
          if (dataStr) {
            data = dataStr;
          }
          sys.localStorage.setItem(key, data);
        };
        return Helper;
      }();
      var StorageHelper = exports('StorageHelper', new Helper());
      var StorageHelperKey = exports('StorageHelperKey', new StorageKey());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/subGameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singletonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, SingletonClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "148e8M9suxL7IQJo5WYysGm", "subGameManager", undefined);

      // /** 游戏配置 */
      // export interface ISubGameConfig {
      //     isPortrait: boolean;
      //     name: string;
      //     isHundred: boolean;
      // }

      // /** 游戏分类 */
      // export enum GameType {
      //     eSlots,
      //     eHundred,
      // }

      // /** 子游戏管理 */
      var SubGameManager = exports('SubGameManager', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(SubGameManager, _SingletonClass);
        function SubGameManager() {
          return _SingletonClass.apply(this, arguments) || this;
        }
        return SubGameManager;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/targetViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './levelConfig.ts', './toolsHelper.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, tween, UIOpacity, Label, BaseViewCmpt, LevelConfig, ToolsHelper;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      LevelConfig = module.LevelConfig;
    }, function (module) {
      ToolsHelper = module.ToolsHelper;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "49e39Y5TmhNFpwExtOXpLMf", "targetViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var targetViewCmpt = exports('targetViewCmpt', (_dec = ccclass('targetViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(targetViewCmpt, _BaseViewCmpt);
        function targetViewCmpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseViewCmpt.call.apply(_BaseViewCmpt, [this].concat(args)) || this;
          _this.list = [];
          _this.target = null;
          return _this;
        }
        var _proto = targetViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          _BaseViewCmpt.prototype.onLoad.call(this);
          this.list = this.viewList.get('target').children;
          this.target = this.viewList.get('target');
          this.scheduleOnce(function () {
            tween(_this2.node.getComponent(UIOpacity)).to(1, {
              opacity: 0
            }).call(function () {
              _this2.onClick_closeBtn();
            }).start();
          }, 3);
        }

        /** 初始化 */;
        _proto.loadExtraData = /*#__PURE__*/
        function () {
          var _loadExtraData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var data, i, name, item;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  data = LevelConfig.getDefaultData();
                  this.list.forEach(function (item) {
                    return item.active = false;
                  });
                  _context.next = 4;
                  return ToolsHelper.delayTime(0.3);
                case 4:
                  for (i = 0; i < data.targetList.length; i++) {
                    name = data.targetList[i];
                    item = this.target.getChildByName(name + "");
                    console.log("name = " + name);
                    item.active = true;
                    item.getChildByName('lb').getComponent(Label).string = data.num + "";
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadExtraData() {
            return _loadExtraData.apply(this, arguments);
          }
          return loadExtraData;
        }();
        return targetViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7c1283fzuNFXInbKYxSC/jv", "test", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var test = exports('test', (_dec = ccclass('test'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(test, _Component);
        function test() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.index = 0;
          return _this;
        }
        var _proto = test.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.scheduleOnce(function () {
            // let arr = [this.bezierTo(this.node.getChildByName('11'), 5, v3(), v3(100, 100, 1), v3(200, 0, 1))]
            var arr = [_this2.bezierTo(_this2.node.getChildByName('11'), 5, v3(), v3(100, 100, 1), v3(200, 0, 1)), _this2.bezierTo(_this2.node.getChildByName('11'), 5, v3(200, 0, 1), v3(100, -100, 1), v3(-200, 0, 1)), _this2.bezierTo(_this2.node.getChildByName('11'), 5, v3(-200, 0, 1), v3(100, -300, 1), v3())];
            _this2.startMove(arr);
          }, 2);
        };
        _proto.startMove = function startMove(arr) {
          var _this3 = this;
          arr[this.index].call(function () {
            _this3.index++;
            if (_this3.index < arr.length) {
              _this3.startMove(arr);
            }
          }).start();
        };
        _proto.bezierTo = function bezierTo(target, duration, c1, c2, to, opts) {
          opts = opts || Object.create(null);
          /*
          * @desc 二阶贝塞尔
          * @param {number} t 当前百分比
          * @param {} p1 起点坐标
          * @param {} cp 控制点
          * @param {} p2 终点坐标
          * @returns {any}
          */
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
          };
          opts.onUpdate = function (arg, ratio) {
            target.position = twoBezier(ratio, c1, c2, to);
          };
          return tween(target).to(duration, {}, opts);
        };
        return test;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/timeManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventName.ts', './app.ts', './singletonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, EventName, App, SingletonClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a8272OhvdVIV53O/161g+FV", "timeManager", undefined);

      /**
       * 全局定时器管理
       */
      var TimeManager = exports('default', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(TimeManager, _SingletonClass);
        function TimeManager() {
          var _this;
          _this = _SingletonClass.call(this) || this;
          /** 客户聊天，时间间隔60秒 */
          _this.SpinTimeConst = 180;
          _this.SpinTime = 0;
          /** 在线时长*/
          _this.OnlineTimeConst = 5 * 60;
          _this.OnlineTime = 5 * 60;
          _this._isDoing = true;
          return _this;
        }
        var _proto = TimeManager.prototype;
        _proto.onInit = function onInit() {
          setInterval(this.updateSecound.bind(this), 1000);
        }

        /** 全局计时器，每秒一次,只执行加、减，不加多余逻辑 */;
        _proto.updateSecound = function updateSecound() {
          if (!this._isDoing) return;
          this.SpinTime--;
          this.OnlineTime--;
          App.event.emit(EventName.Game.TIMER_DOWN);
        };
        _proto.stopAll = function stopAll() {
          this._isDoing = false;
        };
        _proto.reStart = function reStart() {
          this._isDoing = true;
        };
        return TimeManager;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tipsViewCmpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './cocosHelper.ts', './toolsHelper.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Vec3, tween, BaseViewCmpt, CocosHelper, ToolsHelper;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      CocosHelper = module.CocosHelper;
    }, function (module) {
      ToolsHelper = module.ToolsHelper;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fb0d4eQ+5lBVbkohQEjgq1L", "tipsViewCmpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tipsViewCmpt = exports('tipsViewCmpt', (_dec = ccclass('tipsViewCmpt'), _dec(_class = /*#__PURE__*/function (_BaseViewCmpt) {
        _inheritsLoose(tipsViewCmpt, _BaseViewCmpt);
        function tipsViewCmpt() {
          return _BaseViewCmpt.apply(this, arguments) || this;
        }
        var _proto = tipsViewCmpt.prototype;
        _proto.onLoad = function onLoad() {
          _BaseViewCmpt.prototype.onLoad.call(this);
        };
        _proto.setTips = function setTips(str) {
          CocosHelper.updateLabelText(this.viewList.get('animNode/lb'), str, false);
        };
        _proto.setCloseFunc = /*#__PURE__*/function () {
          var _setCloseFunc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cb) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return ToolsHelper.delayTime(2);
                case 2:
                  tween(this.node).to(0.5, {
                    position: new Vec3(0, 1000)
                  }).call(function () {
                    cb && cb();
                  }).start();
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setCloseFunc(_x) {
            return _setCloseFunc.apply(this, arguments);
          }
          return setCloseFunc;
        }();
        _proto.upMove = function upMove() {
          var pos = this.node.position;
          var v3p = new Vec3(pos.x, pos.y + 100, pos.z);
          this.node.setPosition(v3p);
        };
        return tipsViewCmpt;
      }(BaseViewCmpt)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toolsHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './storageHelper.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, sys, StorageHelper, StorageHelperKey;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ce45ac17OxKSZ//ADHhu2f1", "toolsHelper", undefined);
      var Helper = /*#__PURE__*/function () {
        function Helper() {
          /** 计时器管理 */
          this._timeoutIdTab = new Map();
        }
        var _proto = Helper.prototype;
        /** 数组内随机一个 */
        _proto.arrayRandomItem = function arrayRandomItem(array) {
          if (!Array.isArray(array)) {
            return array;
          }
          return array[Math.ceil(Math.random() * array.length) - 1];
        }

        /** 获取随机字符 */;
        _proto.getRandomCode = function getRandomCode() {
          var random = ToolsHelper.getRandom(0, 10);
          var code;
          if (random < 3) {
            /** a-z */
            code = String.fromCodePoint(ToolsHelper.getRandom(97, 122));
          } else if (random < 6) {
            /** A-Z */
            code = String.fromCodePoint(ToolsHelper.getRandom(65, 90));
          } else {
            /** 0~9 */
            code = String.fromCodePoint(ToolsHelper.getRandom(48, 57));
          }
          return code;
        };
        _proto.weightedRandom = function weightedRandom(weights, values) {
          var totalWeight = weights.reduce(function (sum, weight) {
            return sum + weight;
          }, 0);
          var randomValue = Math.random() * totalWeight;
          var cumulativeWeight = 0;
          for (var i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            if (randomValue <= cumulativeWeight) {
              return values[i];
            }
          }
          return null;
        }

        /**
         * 根据金额获取对应的筹码金额集合
         * @param money 金额
         * @param chipsRange 筹码金额范围
         * @returns 
         */;
        _proto.getChipsByMoney = function getChipsByMoney(money, chipsRange) {
          var chips = [];
          for (var i = chipsRange.length - 1; i >= 0; i--) {
            var tempChips = chipsRange[i];
            if (tempChips > money) {
              continue;
            }
            var count = Math.floor(money / tempChips);
            if (count < 1) {
              continue;
            }
            while (count-- > 0) {
              chips.push(chipsRange[i]);
            }
            money = money % tempChips;
            if (money === 0) {
              break;
            }
          }
          return chips;
        }

        /**
         * 获取随机区间
         * @param min 
         * @param max 
         * @param isClosed 是否闭区间 [min, max]
         * @returns 
         */;
        _proto.getRandom = function getRandom(min, max, isClosed) {
          if (isClosed === void 0) {
            isClosed = true;
          }
          var differ = isClosed ? max - min + 1 : max - min;
          var random = Math.random() * differ;
          return Math.floor(random + min);
        }

        /** 随机小数 */;
        _proto.getRandf = function getRandf(min, max) {
          var r = Math.random();
          var a = r * (Math.round(Math.random()) ? -1 : 1);
          return (a / 2 + 0.5) * (max - min) + min;
        }

        /** 将时间转位时分秒 00:00:00*/;
        _proto.toSecBySeconds = function toSecBySeconds(s) {
          if (s <= 0) {
            return "00:00:00";
          }
          var t = this.toMinBySeconds(s);
          t += ":";
          var sec = Math.floor(s % 60);
          if (sec < 10) {
            t += "0";
          }
          t += sec.toFixed(0);
          return t;
        }

        /** 将时间转位时分 00:00*/;
        _proto.toMinBySeconds = function toMinBySeconds(s) {
          if (s <= 0) {
            return "00:00";
          }
          var t = '';
          var hour = Math.floor(s / 3600);
          var min = Math.floor(s / 60) % 60;
          if (hour < 10) {
            if (hour > 0) {
              t = '0' + hour + ":";
            } else {
              t = '00:';
            }
          } else {
            t = hour + ":";
          }
          if (min < 10) {
            t += "0";
          }
          t += min;
          return t;
        }
        /** 将时间转位时分 00:00*/;
        _proto.toMinBySeconds2 = function toMinBySeconds2(s) {
          if (s <= 0) {
            return "00:00";
          }
          var t = '';
          var min = Math.floor(s / 60) % 60;
          if (min < 10) {
            if (min > 0) {
              t = '0' + min + ":";
            } else {
              t = '00:';
            }
          } else {
            t = min + ":";
          }
          var sec = Math.floor(s % 60);
          if (sec < 10) {
            t += "0";
          }
          t += sec.toFixed(0);
          return t;
        }

        /** 得到时间的天/时/分/秒 */;
        _proto.toDayHourBySeconds = function toDayHourBySeconds(seconds) {
          var res = {
            day: 0,
            h: 0,
            m: 0,
            s: 0
          };
          if (seconds < 0) return res;
          var days = Math.floor(seconds / 86400);
          seconds %= 86400;
          var hours = Math.floor(seconds / 3600);
          seconds %= 3600;
          var minutes = Math.floor(seconds / 60);
          seconds %= 60;
          res = {
            day: days,
            h: hours,
            m: minutes,
            s: seconds
          };
          return res;
        }

        /** 年月日时分秒 */;
        _proto.toFullTimeData = function toFullTimeData(seconds) {
          var dt = new Date(seconds * 1000);
          return {
            y: dt.getFullYear(),
            m1: dt.getMonth() + 1,
            d: dt.getDate(),
            h: dt.getHours(),
            m2: dt.getMinutes(),
            s: dt.getSeconds()
          };
        }

        /** 复制Map */;
        _proto.cloneMap = function cloneMap(oldMap) {
          if (!(oldMap instanceof Map)) return null;
          var newMap = new Map();
          for (var _iterator = _createForOfIteratorHelperLoose(oldMap), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              k = _step$value[0],
              v = _step$value[1];
            var newV = void 0;
            if (v instanceof Map) {
              newV = this.cloneMap(v);
            } else {
              newV = v;
            }
            newMap.set(k, newV);
          }
          return newMap;
        }

        /** 复制对象 */;
        _proto.cloneObject = function cloneObject(oldObj) {
          return JSON.parse(JSON.stringify(oldObj));
        }

        /**
         * 金额显示千分位格式化
         * @param num 金额需要除以100转成元
         * @returns 
         */;
        _proto.moneyToThousands = function moneyToThousands(num) {
          num = num / 100;
          var numStr = parseFloat((num + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";
          var l = numStr.split(".")[0].split("").reverse();
          var r = numStr.split(".")[1];
          var t = "";
          for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
          }
          return t.split("").reverse().join("") + "." + r;
        }
        /**
         * 金额显示万分位格式化
         * @param num 金额需要除以10000转成元
         * @returns 
         */;
        _proto.moneyToMillion = function moneyToMillion(num) {
          num = num / 10000;
          var numStr = parseFloat((num + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";
          var l = numStr.split(".")[0].split("").reverse();
          var r = numStr.split(".")[1];
          var t = "";
          for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
          }
          return t.split("").reverse().join("") + "." + r;
        };
        _proto.getCurTime = function getCurTime() {
          var date = new Date();
          var Y = date.getFullYear() + '-';
          var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          var D = date.getDate() + ' ';
          var h = date.getHours() + ':';
          var m = date.getMinutes() + ':';
          var s = date.getSeconds();
          return Y + M + D + h + m + s + ":>>";
        };
        /** 延迟执行 */
        _proto.delayTime = /*#__PURE__*/
        function () {
          var _delayTime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(time, cmptID) {
            var idArr, timeoutId, idx;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (time === void 0) {
                    time = 0;
                  }
                  if (cmptID === void 0) {
                    cmptID = 0;
                  }
                  if (!this._timeoutIdTab.has(cmptID)) {
                    this._timeoutIdTab.set(cmptID, []);
                  }
                  idArr = this._timeoutIdTab.get(cmptID);
                  _context.next = 6;
                  return new Promise(function (r) {
                    timeoutId = setTimeout(r, time * 1000);
                    idArr.push(timeoutId);
                  });
                case 6:
                  // 清除计时器
                  idx = idArr.indexOf(timeoutId);
                  ~idx && idArr.splice(idx, 1);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function delayTime(_x, _x2) {
            return _delayTime.apply(this, arguments);
          }
          return delayTime;
        }();
        _proto.clearDelayTime = function clearDelayTime(cmptID) {
          if (cmptID === void 0) {
            cmptID = 0;
          }
          if (!this._timeoutIdTab.has(cmptID)) return;
          var idArr = this._timeoutIdTab.get(cmptID);
          idArr.forEach(function (timeId) {
            clearTimeout(timeId);
          });
        }

        /** 创建唯一token */;
        _proto.getUUid = function getUUid() {
          // let uuid: string = StorageHelper.getData(StorageHelperKey.DeviceUUID);
          // if (uuid) return uuid;
          // return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          //     let r = Math.random() * 16 | 0;
          //     return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
          // });
          return "";
        }

        /** 匹配汉字 */;
        _proto.matchChinese = function matchChinese(str) {
          var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
          return reg.test(str);
        }

        /** 匹配字符串中的字母和数字 */;
        _proto.matchLetterNumber = function matchLetterNumber(str) {
          var reg = /[a-zA-Z0-9]*/g;
          var arr = str.match(reg);
          return arr;
        }

        /** 匹配html元素，<开头，>结尾 的所有内容 */;
        _proto.matchHtmlElement = function matchHtmlElement(str) {
          var reg1 = /<([^>]+)>/g;
          var arr = str.match(reg1);
          return arr;
        }

        /** 检查账号是否存在 */;
        _proto.checkAccountExist = function checkAccountExist() {
          // let data: { account: string, pwd: string } = StorageHelper.getData(StorageHelperKey.Account_Password);
          // if (data && !js.isEmptyObject(data)) {
          //     return data;
          // }
          return null;
        }

        /** 匹配字符串中的html元素 */;
        _proto.matchHtmlContent = function matchHtmlContent(str) {
          var regex = /<([a-zA-Z]+)[^>]*>([^<]*)<\/\1>/g;
          var m = str;
          return m.match(regex) ? true : false;
        }

        /** 显示/隐藏清除按钮 */;
        _proto.showClearEditContentBtn = function showClearEditContentBtn(str, btn) {
          if (str.trim() != "") {
            btn.active = true;
          } else {
            btn.active = false;
          }
        }

        /** 匹配剪贴板中的特定内容 */;
        _proto.matchClipboardContent = function matchClipboardContent(str) {
          var reg = /Nuggets-Share=.*?/;
          if (reg.test(str)) {
            return str;
          }
          return "";
        }

        /** 匹配数字 */;
        _proto.matchNumber = function matchNumber(str) {
          var reg = /\d+/g;
          return str.match(reg);
        }

        /** 格式化时间，返回格式 2023/06/19  12:25:20 */;
        _proto.getFullTime = function getFullTime(time) {
          var fullDate = this.toFullTimeData(time);
          var m1 = fullDate.m1 > 9 ? fullDate.m1 : "0" + fullDate.m1;
          var d = fullDate.d > 9 ? fullDate.d : "0" + fullDate.d;
          var h = fullDate.h > 9 ? fullDate.h : "0" + fullDate.h;
          var m2 = fullDate.m2 > 9 ? fullDate.m2 : "0" + fullDate.m2;
          var s = fullDate.s > 9 ? fullDate.s : "0" + fullDate.s;
          var timeStr = fullDate.y + "/" + m1 + "/" + d + " " + h + ":" + m2 + ":" + s;
          return timeStr;
        }

        /** 多语言货币单位 */;
        _proto.getMoneyByContry = function getMoneyByContry(gold) {
          var money = ToolsHelper.moneyToThousands(gold);
          var moneyType = this.getMoneyType();
          return moneyType + money;
        }

        /** 获取货币单位 */;
        _proto.getMoneyType = function getMoneyType() {
          var moneyType = "R$";
          // switch (App.i18n.getLanguage()) {
          //     case LanguageKey['0']:
          //         moneyType = "R$";
          //         break
          //     case LanguageKey['1']:
          //         moneyType = "$";
          //         break
          //     case LanguageKey['2']:
          //         moneyType = "￥";
          //         break
          // }
          return moneyType;
        }

        /** 打开外部网页链接 */;
        _proto.openUrl = function openUrl(url) {
          sys.openURL(url);
        }

        /** 转化角色名称，4个字符以后显示*** */;
        _proto.convertRoleName = function convertRoleName(name) {
          var prefixStr = '';
          var prefixLen = 4;
          if (name.length > prefixLen) {
            prefixStr = name.substring(0, prefixLen);
          } else {
            prefixStr = name.substring(0, Math.floor(name.length * 0.5));
          }
          return prefixStr + "***";
        }
        /** 转化角色名称，指定个字符以后显示*** */;
        _proto.convertRoleName2 = function convertRoleName2(name, count) {
          if (count === void 0) {
            count = 4;
          }
          var prefixStr = name;
          var prefixLen = count;
          if (name.length > prefixLen) {
            prefixStr = name.substring(0, prefixLen) + "***";
          }
          return prefixStr;
        }

        /** 检查2维数组 */;
        _proto.reSet2DArray = function reSet2DArray(arr) {
          var res = arr;
          if (!Array.isArray(arr[0])) {
            var temp = arr[0];
            res = [temp];
          }
          return res;
        }

        /** 是否是同一天 */;
        _proto.checkIsSameDay = function checkIsSameDay(type) {
          var isFirst = false;
          var curDay = StorageHelper.getData(StorageHelperKey.Date + type + "");
          var dt = +new Date();
          if (!curDay) {
            isFirst = true;
          } else {
            var dt1 = new Date(+curDay);
            var dt2 = new Date();
            if (dt1.getDate() != dt2.getDate()) {
              isFirst = true;
            }
          }
          if (!isFirst) return true;
          StorageHelper.setData(StorageHelperKey.Date + type + "", dt);
          StorageHelper.setBooleanData(StorageHelperKey.isGotSignReward, false);
          return false;
        };
        return Helper;
      }();
      var ToolsHelper = exports('ToolsHelper', new Helper());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/userInfo2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './routers.ts', './app.ts', './singletonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Router, App, SingletonClass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Router = module.Router;
    }, function (module) {
      App = module.App;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }],
    execute: function () {
      cclegacy._RF.push({}, "92568tI/dFNWIkbntDk95QM", "userInfo", undefined);

      /**
       * 用户管理
       */
      var UserInfo = exports('UserInfo', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(UserInfo, _SingletonClass);
        function UserInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SingletonClass.call.apply(_SingletonClass, [this].concat(args)) || this;
          /** 排行数据 */
          _this.rankData = {
            star: 0,
            id: 0,
            level: 0,
            icon: "https://p9.itc.cn/q_70/images03/20211125/796235655f5f4a2aa4177071820a9925.jpeg",
            name: "",
            gold: 0,
            rank: 0,
            time: ""
          };
          _this.pid = 0;
          return _this;
        }
        var _proto = UserInfo.prototype;
        _proto.updateRankData = function updateRankData(data) {
          this.rankData = data;
        };
        _proto.init = function init() {
          this.rankData.name = "Happy Barry";
          App.event.on(Router.rut_login, this.evtLogin, this);
        };
        _proto.evtLogin = function evtLogin(data) {
          this.pid = data.msg.user.pid;
          console.log('-------------------- pid -------------------');
          console.log('-------------------- pid -------------------');
          console.log('-------------------- pid -------------------');
          console.log(this.pid);
        };
        return UserInfo;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/util.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, sys, Vec3, Texture2D, ImageAsset, SpriteFrame;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      Vec3 = module.Vec3;
      Texture2D = module.Texture2D;
      ImageAsset = module.ImageAsset;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      exports({
        copyVec3Array: copyVec3Array,
        deg2Rad: deg2Rad,
        getBase64Data: getBase64Data,
        getBase64SpriteFrame: getBase64SpriteFrame,
        getDay: getDay,
        getIp: getIp,
        getQuadrantDegree: getQuadrantDegree,
        rad2Deg: rad2Deg,
        shuffle: shuffle,
        unitVec3: unitVec3
      });
      cclegacy._RF.push({}, "0c812zqnDNP3JmNG/3OWpKo", "util", undefined);
      var IpType = exports('IpType', /*#__PURE__*/function (IpType) {
        IpType[IpType["local"] = 0] = "local";
        IpType[IpType["remote"] = 1] = "remote";
        return IpType;
      }({}));
      var ServerType = exports('ServerType', /*#__PURE__*/function (ServerType) {
        ServerType[ServerType["connectorServer"] = 100] = "connectorServer";
        ServerType[ServerType["gameServer"] = 101] = "gameServer";
        ServerType[ServerType["userServer"] = 102] = "userServer";
        return ServerType;
      }({}));
      var ServerPort = exports('ServerPort', /*#__PURE__*/function (ServerPort) {
        ServerPort[ServerPort["gameServer"] = 9000] = "gameServer";
        ServerPort[ServerPort["userServer"] = 9001] = "userServer";
        ServerPort[ServerPort["connector"] = 8999] = "connector";
        return ServerPort;
      }({}));
      function getIp(type) {
        if (sys.platform == sys.Platform.WECHAT_GAME) ;else if (sys.platform == sys.Platform.BYTEDANCE_MINI_GAME) ;
        return "";
      }

      /**
       * 将V3 Math.floor
       * @param v3 
       */
      function unitVec3(v3) {
        var re = new Vec3(Math.floor(v3.x), Math.floor(v3.y), Math.floor(v3.z));
        return re;
      }

      /**
       * 复制Vec3数组
       * @param arr 
       * @returns Vec3[]
       */
      function copyVec3Array(arr) {
        var copy = [];
        for (var i = 0; i < arr.length; i++) {
          var v3 = new Vec3(arr[i].x, arr[i].y, arr[i].z);
          copy.push(v3);
        }
        return copy;
      }

      /**
       * 数组乱序
       * @param arr 
       */
      function shuffle(arr) {
        for (var i = 1; i < arr.length; i++) {
          var rand = Math.floor(Math.random() * (i + 1));
          var t = arr[rand];
          arr[rand] = arr[i];
          arr[i] = t;
        }
        return arr;
      }

      /**
       * 获取当天是一年中的第几天
       */
      function getDay() {
        var currentYear = new Date().getFullYear().toString();
        // 今天减今年的第一天（xxxx年01月01日）
        var hasTimestamp = new Date().getTime() - new Date(currentYear).getTime();
        // 86400000 = 24 * 60 * 60 * 1000
        var hasDays = Math.ceil(hasTimestamp / 86400000) + 1;
        console.log('今天是%s年中的第%s天', currentYear, hasDays);
        return hasDays;
      }

      /**
       * 图片转base64
       */
      function getBase64Data(_x) {
        return _getBase64Data.apply(this, arguments);
      }

      /**
       * base64转图片
       */
      function _getBase64Data() {
        _getBase64Data = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sp) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  var texture = sp.spriteFrame.texture;
                  var base64 = "";
                  var img = new Image();
                  img.src = texture;
                  img.onload = function () {
                    //图片转base64编码
                    var canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    base64 = canvas.toDataURL("image/png");
                    console.log(base64);
                    resolve(base64);
                  };
                }));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _getBase64Data.apply(this, arguments);
      }
      function getBase64SpriteFrame(_x2) {
        return _getBase64SpriteFrame.apply(this, arguments);
      }
      function _getBase64SpriteFrame() {
        _getBase64SpriteFrame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(base64) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  var texture = new Texture2D();
                  var img = new Image();
                  img.src = base64;
                  img.onload = function () {
                    texture.image = new ImageAsset(img);
                    var spFrame = new SpriteFrame();
                    spFrame.texture = texture;
                    resolve(spFrame);
                  };
                }));
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return _getBase64SpriteFrame.apply(this, arguments);
      }
      function getQuadrantDegree(v0, v1) {
        if (v0 == undefined) return 0;
        var y = v1.y - v0.y;
        var x = v1.x - v0.x;
        var rad = Math.atan(y / x);
        var degree = rad2Deg(rad);
        return degree;
      }

      /**
       * 弧度转角度
       */
      function rad2Deg(rad) {
        return rad * 180 / Math.PI;
      }

      /**
       * 角度转弧度
       */
      function deg2Rad(deg) {
        return deg * Math.PI / 180;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/viewManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseViewCmpt.ts', './prefabPool.ts', './enumConst.ts', './viewNameConst.ts', './tipsViewCmpt.ts', './resLoadHelper.ts', './singletonClass.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, isValid, director, instantiate, Prefab, Vec3, BaseViewCmpt, PrefabPool, WindowType, WindowOpenType, ViewName, tipsViewCmpt, ResLoadHelper, SingletonClass, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      director = module.director;
      instantiate = module.instantiate;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
    }, function (module) {
      BaseViewCmpt = module.BaseViewCmpt;
    }, function (module) {
      PrefabPool = module.PrefabPool;
    }, function (module) {
      WindowType = module.WindowType;
      WindowOpenType = module.WindowOpenType;
    }, function (module) {
      ViewName = module.ViewName;
    }, function (module) {
      tipsViewCmpt = module.tipsViewCmpt;
    }, function (module) {
      ResLoadHelper = module.ResLoadHelper;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "efbecumL1BMJZnaWgzpVnaD", "viewManager", undefined);

      /**
       * 窗口管理
       */
      var ViewManager = exports('ViewManager', /*#__PURE__*/function (_SingletonClass) {
        _inheritsLoose(ViewManager, _SingletonClass);
        function ViewManager() {
          var _this;
          _this = _SingletonClass.call(this) || this;
          _this.sceneNode = void 0;
          /** 所有独立窗口 */
          _this.allView = new Map();
          /** 能同时存在的多个窗口 */
          _this.multiView = [];
          _this.curMultiView = void 0;
          _this.isExistMultiView = false;
          /** 窗口加载中,防止连续打开 */
          _this.isViewOpening = false;
          _this.waitOpenViewList = [];
          /** 消息框对象池 */
          _this.msgPool = void 0;
          _this.msgCmptArr = [];
          /** 遮罩层 */
          _this.isShowMask = void 0;
          _this.netMaskTips = void 0;
          //大厅常驻节点
          _this.foreverNodeArr = [
            // ViewName.Single.eMarquee,
          ];
          _this.msgPool = new PrefabPool();
          _this.msgPool.initPool("" + ViewName.Multiple.eMsg, 10);
          return _this;
        }
        var _proto = ViewManager.prototype;
        _proto.onInit = function onInit(canvas) {
          this.sceneNode = canvas;
          this.clearView();
        }

        /** 打开窗口 */;
        _proto.openView = /*#__PURE__*/
        function () {
          var _openView = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(viewName) {
            var _len,
              args,
              _key,
              viewCmpt,
              prefabView,
              viewNode,
              _viewCmpt,
              root,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = _args[_key];
                  }
                  if (!this.isViewOpening) {
                    _context.next = 4;
                    break;
                  }
                  this.waitOpenViewList.push({
                    name: viewName,
                    data: args
                  });
                  return _context.abrupt("return");
                case 4:
                  if (this.getViewByName(viewName)) {
                    _context.next = 22;
                    break;
                  }
                  this.isViewOpening = true;
                  _context.next = 8;
                  return ResLoadHelper.loadPrefabSync("" + viewName);
                case 8:
                  prefabView = _context.sent;
                  if (prefabView) {
                    _context.next = 18;
                    break;
                  }
                  _context.next = 12;
                  return ResLoadHelper.loadCommonAssetSync("" + viewName, Prefab);
                case 12:
                  prefabView = _context.sent;
                  if (prefabView) {
                    _context.next = 18;
                    break;
                  }
                  Logger.error("ViewManager openView not prefab = " + viewName);
                  this.isViewOpening = false;
                  this.openWaitView();
                  return _context.abrupt("return");
                case 18:
                  viewNode = instantiate(prefabView);
                  viewCmpt = viewNode.getComponent(BaseViewCmpt);
                  _context.next = 23;
                  break;
                case 22:
                  viewCmpt = this.getViewByName(viewName);
                // 暂时去掉置顶操作
                // viewCmpt.node.zIndex = this.allView.size;
                case 23:
                  if (viewCmpt) {
                    _context.next = 26;
                    break;
                  }
                  Logger.error("ViewManager openView not Cmpt = " + viewName);
                  return _context.abrupt("return");
                case 26:
                  // 判断是立即打开，还是加入待打开窗口列表
                  if (viewCmpt.viewOpenType == WindowOpenType.eSingle) {
                    if (!this.getViewByName(viewName)) {
                      root = this.getRootView(viewCmpt.viewType);
                      root.addChild(viewCmpt.node);
                      viewCmpt.node.attr({
                        viewName: viewName
                      });
                      this.allView.set(viewName, viewCmpt);
                    } else {
                      Logger.trace(' open repeat view !!!');
                    }
                    (_viewCmpt = viewCmpt).loadExtraData.apply(_viewCmpt, args);
                  } else {
                    viewCmpt.node.attr({
                      viewName: viewName
                    });
                    this.setMultiView.apply(this, [viewCmpt].concat(args));
                  }
                  Logger.trace(" openView = " + viewName);
                  this.isViewOpening = false;
                  this.openWaitView();
                  return _context.abrupt("return", viewCmpt.node);
                case 31:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function openView(_x) {
            return _openView.apply(this, arguments);
          }
          return openView;
        }() /** 切换场景 */;
        _proto.runScene = /*#__PURE__*/
        function () {
          var _runScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sceneName, callback) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(sceneName == director.getScene().name)) {
                    _context2.next = 3;
                    break;
                  }
                  Logger.error(" runScene same Scene ");
                  return _context2.abrupt("return");
                case 3:
                  _context2.next = 5;
                  return new Promise(function (r) {
                    director.preloadScene(sceneName, r);
                  });
                case 5:
                  // 先移除掉目前场景内的任何界面
                  this.clearView();
                  director.loadScene(sceneName);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function runScene(_x2, _x3) {
            return _runScene.apply(this, arguments);
          }
          return runScene;
        }();
        _proto.clearView = function clearView() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.allView), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              key = _step$value[0];
            this.closeView(key);
          }
          this.allView.clear();
          this.netMaskTips && this.netMaskTips.removeFromParent();
          this.netMaskTips = null;
        }

        /** 显示提示框 */;
        _proto.showAlertText = function showAlertText(text, confirmText, cancelText, isRich, okCb, cancelCb) {} // let data: AlertArgs = {
        //     text: text,
        //     confirmText: confirmText,
        //     cancelText: cancelText,
        //     confirmCb: okCb,
        //     cancelCb: cancelCb,
        // }
        // this.openView(ViewName.Multiple.eAlert, data);

        /** 显示消息 */;
        _proto.showMsgTips = /*#__PURE__*/
        function () {
          var _showMsgTips = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(text) {
            var _this2 = this;
            var msgNode, msgCmpt, i, cmpt;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.msgPool.getNode();
                case 2:
                  msgNode = _context3.sent;
                  msgNode.setPosition(new Vec3());
                  this.sceneNode.getChildByName('toast').addChild(msgNode);
                  // this.getRootView(WindowType.eToast).addChild(msgNode);
                  msgCmpt = msgNode.getComponent(tipsViewCmpt);
                  msgCmpt.setTips(text);
                  msgCmpt.setCloseFunc(function () {
                    _this2.msgCmptArr.shift();
                    _this2.msgPool.putNode(msgNode);
                  });

                  // 将之前的消息都往上移动点
                  for (i = 0; i < this.msgCmptArr.length; i++) {
                    cmpt = this.msgCmptArr[i];
                    cmpt.upMove();
                  }
                  this.msgCmptArr.push(msgCmpt);
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function showMsgTips(_x4) {
            return _showMsgTips.apply(this, arguments);
          }
          return showMsgTips;
        }() // /** 网络连接遮罩 */
        // async showNetworkMask(text: string) {
        //     if (!this.sceneNode) return;
        //     if (this.isShowMask) return;
        //     this.isShowMask = true;
        //     if (!this.netMaskTips) {
        //         let prefab = await ResLoadHelper.loadCommonAssetSync(`${ViewName.Single.eNetwork}`, Prefab);
        //         let tips = instantiate(prefab);
        //         this.getRootView(WindowType.eNetwork).addChild(tips);
        //         tips.zIndex = NETWORK_ZINDEX;
        //         this.netMaskTips = tips;
        //         if (text) {
        //             let lb = tips.getChildByName("text").getComponent(Label);
        //             CocosHelper.updateLabelText(lb, text, false);
        //         }
        //     }
        //     this.netMaskTips.active = this.isShowMask;
        // }
        // hideNetworkMask() {
        //     this.isShowMask = false;
        //     this.netMaskTips && (this.netMaskTips.active = false);
        // }
        /** 关闭窗口 */;

        _proto.closeView = function closeView(viewName) {
          var viewCmpt = this.getViewByName(viewName);
          if (!viewCmpt) {
            Logger.trace("closeView not found = " + viewName);
            return;
          }
          Logger.trace(" closeView = " + viewName);
          this.delViewByName(viewName);
          viewCmpt.onClose();
        }

        /** 关闭最上层的窗口 */;
        _proto.closeTopView = function closeTopView() {
          var count = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.allView), _step2; !(_step2 = _iterator2()).done;) {
            var _step2$value = _step2.value,
              key = _step2$value[0],
              cmpt = _step2$value[1];
            count += 1;
            if (count == this.allView.size) {
              this.closeView(key);
            }
          }
        };
        _proto.isForeverNode = function isForeverNode(viewName) {
          var idx = this.foreverNodeArr.indexOf(viewName);
          return idx > -1 ? true : false;
        }

        /** 返回大厅 */;
        _proto.backLobbyView = function backLobbyView() {
          var _this3 = this;
          this.allView.forEach(function (cmpt) {
            var vName = cmpt.node["viewName"];
            if (!_this3.isForeverNode(vName)) {
              _this3.closeView(vName);
            }
          });
          this.multiView.length = 0;
          this.multiView = [];
        }

        /** 获取当前窗口名字 */;
        _proto.getCurName = function getCurName() {
          var viewCount = 0;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.allView), _step3; !(_step3 = _iterator3()).done;) {
            var _step3$value = _step3.value,
              key = _step3$value[0],
              cmpt = _step3$value[1];
            viewCount += 1;
            if (viewCount == this.allView.size) {
              return key;
            }
          }
          return null;
        }

        /** 当前窗口是否存在 */;
        _proto.isExistView = function isExistView(name) {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.allView), _step4; !(_step4 = _iterator4()).done;) {
            var _step4$value = _step4.value,
              key = _step4$value[0],
              cmpt = _step4$value[1];
            var vName = cmpt.node["viewName"];
            if (vName == name) {
              return true;
            }
          }
          return false;
        };
        _proto.getViews = function getViews() {
          return this.allView.keys;
        };
        _proto.getViewByName = function getViewByName(viewName) {
          if (this.curMultiView && isValid(this.curMultiView.node)) {
            // 先判断最上层的共存窗口
            if (viewName == this.curMultiView.node["viewName"]) {
              return this.curMultiView;
            }
          }
          if (this.allView.has(viewName)) {
            return this.allView.get(viewName);
          }
          return null;
        };
        _proto.delViewByName = function delViewByName(viewName) {
          var view = this.getViewByName(viewName);
          view && this.allView["delete"](viewName);
        }

        /** 打开正在等待的窗口 */;
        _proto.openWaitView = function openWaitView() {
          if (!this.waitOpenViewList || !this.waitOpenViewList.length) {
            // PrintLog(` openWaitView not `);
            return;
          }
          var waitView = this.waitOpenViewList.shift();
          this.openView.apply(this, [waitView.name].concat(waitView.data));
        };
        _proto.getRootView = function getRootView(viewType) {
          if (!this.sceneNode) {
            return director.getScene().getChildByName('Canvas') || director.getScene();
          }
          var root;
          switch (viewType) {
            case WindowType.eMap:
              root = this.sceneNode.getChildByName('map');
              break;
            case WindowType.eView:
              root = this.sceneNode.getChildByName('view');
              break;
            case WindowType.eTips:
              root = this.sceneNode.getChildByName('tips');
              break;
            case WindowType.eMarquee:
              root = this.sceneNode.getChildByName('marquee');
              break;
            case WindowType.eToast:
              root = this.sceneNode.getChildByName('toast');
              break;
            case WindowType.eNetwork:
              root = this.sceneNode.getChildByName('network');
              break;
          }
          !root && (root = director.getScene().getChildByName('Canvas')) || director.getScene();
          return root;
        };
        _proto.addChildToTipsLayer = function addChildToTipsLayer(node, pos) {
          // let parent = this.getRootView(WindowType.eTips);
          // let tempPos = new Vec3();
          // App.gameLogic.cameraCp.convertToUINode(pos, parent, tempPos)
          // console.log(tempPos);
          // node.setPosition(tempPos);
          // parent.addChild(node);
        }

        /** 设置多个窗口打开先后顺序 */;
        _proto.setMultiView = function setMultiView(viewCmpt) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          if (!this.multiView.length && !this.isExistMultiView) {
            this.multiView.push({
              cmpt: viewCmpt,
              data: args
            });
            this.nextMultiView();
          } else {
            this.multiView.push({
              cmpt: viewCmpt,
              data: args
            });
            // 按层级升序
            this.multiView.sort(function (a, b) {
              return a.cmpt.viewType - b.cmpt.viewType;
            });
          }
        }

        /** 展示下一个窗口 */;
        _proto.nextMultiView = /*#__PURE__*/
        function () {
          var _nextMultiView = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _cmptData$cmpt;
            var cmptData, root;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (this.multiView.length) {
                    _context4.next = 3;
                    break;
                  }
                  // PrintLog(" nextMultiView 多个窗口也全部关闭 ");
                  this.isExistMultiView = false;
                  return _context4.abrupt("return");
                case 3:
                  this.isExistMultiView = true;
                  cmptData = this.multiView.shift();
                  this.curMultiView = cmptData.cmpt;
                  root = this.getRootView(cmptData.cmpt.viewType);
                  root.addChild(cmptData.cmpt.node);
                  (_cmptData$cmpt = cmptData.cmpt).loadExtraData.apply(_cmptData$cmpt, cmptData.data);
                  // 关闭当前就立即打开下一个
                  _context4.next = 11;
                  return new Promise(function (r) {
                    cmptData.cmpt.setCloseFunc(r);
                  });
                case 11:
                  this.nextMultiView();
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function nextMultiView() {
            return _nextMultiView.apply(this, arguments);
          }
          return nextMultiView;
        }() /** 跑马灯 */;
        _proto.showMarquee = function showMarquee(info) {
          // let hrView = this.getViewByName(ViewName.Single.eMarquee)
          // if (!hrView) {
          //     this.openView(ViewName.Single.eMarquee, info);
          //     return;
          // }
          // if (info) {
          //     hrView.getComponent(BaseViewCmpt).loadExtraData(info);
          // }
        }

        /** 获取通用物品道具 */;
        _proto.getCommonGoodsItem = /*#__PURE__*/
        function () {
          var _getCommonGoodsItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
            var prefabItem;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return ResLoadHelper.loadCommonAssetSync("common/goodsItem", Prefab);
                case 2:
                  prefabItem = _context5.sent;
                  if (!prefabItem) {
                    _context5.next = 5;
                    break;
                  }
                  return _context5.abrupt("return", instantiate(prefabItem));
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function getCommonGoodsItem(_x5) {
            return _getCommonGoodsItem.apply(this, arguments);
          }
          return getCommonGoodsItem;
        }();
        return ViewManager;
      }(SingletonClass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/viewNameConst.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ViewName', void 0);
      cclegacy._RF.push({}, "f5e413VR6pGubT+2JeS4qCY", "viewNameConst", undefined);
      /** 所有窗口名字 */
      var ViewName;
      (function (_ViewName) {
        var Single = /*#__PURE__*/function (Single) {
          Single["eTest"] = "ui/testView";
          Single["eHomeView"] = "ui/homeView";
          Single["eGameView"] = "ui/gameView";
          Single["eResultView"] = "ui/resultView";
          Single["eSettingView"] = "ui/settingView";
          Single["ePaurseView"] = "ui/paurseView";
          Single["eLoadingView"] = "ui/loadingView";
          Single["eGoldRewrdView"] = "ui/goldRewrdView";
          Single["eShareView"] = "ui/shareView";
          Single["eBuyView"] = "ui/buyView";
          Single["eLevelTargetView"] = "ui/levelTargetView";
          Single["esettingGameView"] = "ui/settingGameView";
          Single["eLuckSpinView"] = "ui/luckSpinView";
          Single["eRewardView"] = "ui/rewardView";
          Single["eSiginView"] = "ui/siginView";
          Single["eOnlineRewardView"] = "ui/onlineRewardView";
          Single["eTargetView"] = "ui/targetView";
          Single["eFeedView"] = "ui/feedView";
          Single["eHelpView"] = "ui/helpView";
          return Single;
        }({});
        _ViewName.Single = Single;
        var Multiple = /*#__PURE__*/function (Multiple) {
          Multiple["eAlert"] = "common/alertView";
          Multiple["eMsg"] = "ui/tipsView";
          return Multiple;
        }({});
        _ViewName.Multiple = Multiple;
        var Pieces = /*#__PURE__*/function (Pieces) {
          Pieces["particle"] = "particle";
          Pieces["grid"] = "grid";
          Pieces["score"] = "score";
          return Pieces;
        }({});
        _ViewName.Pieces = Pieces;
      })(ViewName || (ViewName = exports('ViewName', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/wxManager.ts", ['cc', './eventName.ts', './app.ts', './globalFuncHelper.ts', './storageHelper.ts', './advertise.ts'], function (exports) {
  var cclegacy, sys, EventName, App, GlobalFuncHelper, StorageHelper, StorageHelperKey, Advertise;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      App = module.App;
    }, function (module) {
      GlobalFuncHelper = module.GlobalFuncHelper;
    }, function (module) {
      StorageHelper = module.StorageHelper;
      StorageHelperKey = module.StorageHelperKey;
    }, function (module) {
      Advertise = module.Advertise;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9df71uc0lBP/rbf21UKe0qM", "wxManager", undefined);
      var IsGetInfo = exports('IsGetInfo', false);
      var WxManager = exports('WxManager', /*#__PURE__*/function () {
        function WxManager() {
          this.wxCode = '';
        }
        var _proto = WxManager.prototype;
        _proto.init = function init() {
          App.event.on(EventName.Game.Share, this._evtShareToOthers, this);
          this._wxLogin();
        }

        /**
         * 登录接口
         */;
        _proto._wxLogin = function _wxLogin() {
          if (sys.platform != sys.Platform.WECHAT_GAME) return;
          console.log('start_login');
          var self = this;
          // @ts-ignore
          wx.login({
            success: function (res) {
              console.log('loginSuccess');
              self.wxCode = res.code;
              self._wxGetUserState();
            }.bind(this)
          });
        }

        /**
         * 用户状态
         */;
        _proto._wxGetUserState = function _wxGetUserState() {
          console.log('_wxGetUserState');
          var self = this;
          // @ts-ignore
          wx.getSetting({
            fail: function (res) {
              console.log('_wxGetUserState1');
              self._wxPrivacy();
            }.bind(this),
            success: function (res) {
              console.log('_wxGetUserState2');
              if (res.authSetting['scope.userInfo']) {
                console.log('获取用户状态成功');
                // self.getUserInfo();
                // self._wxPrivacy();
                self._requirePrivaceAuthorize();
              } else {
                self._wxPrivacy();
              }
            }.bind(this)
          });
        }

        /** 新版隐私权限请求 */;
        _proto._wxPrivacy = function _wxPrivacy() {
          var self = this;

          // wx.openPrivacyContract({
          //     success: function () {
          self._requirePrivaceAuthorize();
          //     }, // 打开成功
          //     fail: function () {
          //     }, // 打开失败
          //     complete: function () { }
          // })
        };

        _proto._requirePrivaceAuthorize = function _requirePrivaceAuthorize() {
          var self = this;
          // @ts-ignore
          wx.requirePrivacyAuthorize({
            success: function success(res) {
              console.log("-------- privacy --------");
              console.log(res);
              // 非标准API的方式处理用户个人信息
              self._wxGetUserInfo();
            },
            fail: function fail() {},
            complete: function complete() {}
          });
        }

        /**
         * 授权获取玩家信息
         */;
        _proto._wxGetUserInfo = function _wxGetUserInfo() {
          console.log('手动授权 wxgetuserInfo');
          var self = this;
          // @ts-ignore
          var WXInfoButton = wx.createUserInfoButton({
            type: 'text',
            text: 'click',
            style: {
              left: 0,
              top: 0,
              width: 750,
              height: 1443,
              backgroundColor: '',
              borderColor: '#FFFFFF',
              borderWidth: 0,
              borderRadius: 0,
              color: '#FFFFFF',
              textAlign: 'center',
              fontSize: 1,
              lineHeight: 1400
            }
          });
          WXInfoButton.onTap(function (res) {
            if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
              // 处理用户拒绝授权的情况
              self._guideActive();
            } else {
              self._setUserData(res);
            }
            WXInfoButton.hide();
          });
          WXInfoButton.show();
        };
        _proto._guideActive = function _guideActive() {
          var self = this;
          // @ts-ignore
          wx.showModal({
            title: '警告',
            content: '拒绝授权将无法正常游戏',
            cancelText: '取消',
            showCancel: true,
            confirmText: '设置',
            success: function (res) {
              if (res.confirm) {
                // @ts-ignore
                wx.openSetting({
                  success: function (res) {
                    if (res.authSetting['scope.userInfo'] === true) {
                      self.getUserInfo();
                    }
                  }.bind(this)
                });
              }
            }.bind(this)
          });
        }

        /**
         * 获取用户数据
         */;
        _proto.getUserInfo = function getUserInfo() {
          console.log('getUserInfo1');
          var self = this;
          // @ts-ignore
          wx.getUserProfile({
            fail: function (res) {
              console.log('getUserInfo3');
              console.log(res);
              if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
                // 处理用户拒绝授权的情况
                self._guideActive();
              }
            }.bind(this),
            success: function (res) {
              console.log('getUserInfo2');
              self._setUserData(res);
            }.bind(this)
          });
        }

        /**
         * 被动分享
         */;
        _proto._shareFunc = function _shareFunc() {
          // @ts-ignore
          wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          });
          // @ts-ignore
          var imgUrl = canvas.toTempFilePathSync({
            x: 10,
            y: 10,
            width: 700,
            height: 1100,
            destWidth: 400,
            destHeight: 300
          });
          // @ts-ignore
          wx.onShareAppMessage(function () {
            return {
              title: '小姐姐在小木屋挑战闯关，快来救救小姐姐',
              imageUrl: imgUrl
            };
          });
          // @ts-ignore
          wx.onShareTimeline(function () {
            return {
              title: '小姐姐在小木屋挑战，快来救救小姐姐',
              //分享标题
              imageUrl: imgUrl
            };
          });
        }

        /**
        * 主动拉起分享
        */;
        _proto._evtShareToOthers = function _evtShareToOthers(lv) {
          var _this = this;
          if (sys.platform == sys.Platform.WECHAT_GAME) {
            // @ts-ignore
            var tempFilePath = canvas.toTempFilePathSync({
              x: 10,
              y: 10,
              width: 700,
              height: 1100,
              destWidth: 400,
              destHeight: 300
            });
            // @ts-ignore
            wx.shareAppMessage({
              title: "\u5C0F\u59D0\u59D0\u5728\u5C0F\u6728\u5C4B\u6311\u6218\u5DF2\u7ECF\u95EF\u8FC7" + lv + "\u5173\uFF0C\u5FEB\u6765\u6311\u6218\u5C0F\u59D0\u59D0\u5427",
              imageUrl: tempFilePath
            });
          }
          //主动拉起分享每天限制送三次金币，一次一百
          setTimeout(function () {
            _this.pushReward();
          }, 2000);
        };
        _proto.pushReward = function pushReward() {
          GlobalFuncHelper.setGold(100);
          // let count = +StorageHelper.getData(StorageHelperKey.ToolTime, 0);
          // StorageHelper.setData(StorageHelperKey.ToolTime, count + 1);
          var count = +StorageHelper.getData(StorageHelperKey.RefreshTools, 0);
          StorageHelper.setData(StorageHelperKey.RefreshTools, count + 1);
          count = +StorageHelper.getData(StorageHelperKey.TipsTool, 0);
          StorageHelper.setData(StorageHelperKey.TipsTool, count + 1);
          count = +StorageHelper.getData(StorageHelperKey.ReplaceTool, 0);
          StorageHelper.setData(StorageHelperKey.ReplaceTool, count + 1);
          // count = +StorageHelper.getData(StorageHelperKey.ToolReturn, 0);
          // StorageHelper.setData(StorageHelperKey.ToolReturn, count + 1);
          App.event.emit(EventName.Game.ToolCountRefresh);
          App.event.emit(EventName.Game.UpdataGold);
          App.view.showMsgTips("已获得奖励");
        };
        _proto.ShareToOthers = function ShareToOthers(lv) {
          if (sys.platform == sys.Platform.WECHAT_GAME) {
            // @ts-ignore
            var tempFilePath = canvas.toTempFilePathSync({
              x: 10,
              y: 10,
              width: 700,
              height: 1100,
              destWidth: 400,
              destHeight: 300
            });
            // @ts-ignore
            wx.shareAppMessage({
              title: "\u6211\u4EE5\u95EF\u8FC7" + lv + "\u5173\uFF0C\u9080\u60A8\u6765\u6311\u6218",
              imageUrl: tempFilePath
            });
          }
        };
        _proto._setUserData = function _setUserData(res) {
          console.log("------------------res------------");
          console.log(res);
          var self = this;
          var info = res.userInfo;
          /* 初始化右上角分享 */
          self._shareFunc();
          console.log(' 开始链接服务器 ');
          if (info && info.nickName) {
            var data = {
              name: info.nickName,
              icon: info.avatarUrl
            };
            console.log(data);
            App.user.rankData.name = info.nickName;
            App.user.rankData.icon = info.avatarUrl;
            Advertise.init(); // 初始化广告
          }
          // Net.init(() => {
          //     console.log(' 服务器连接成功 ');
          //     let data = { name: info.nickName, icon: info.avatarUrl };
          //     console.log(data);
          //     Net.sendMsg(data, Router.rut_login);
          // });
        };

        _proto.setWxCloudRankData = function setWxCloudRankData(lv) {
          // @ts-ignore
          wx.setUserCloudStorage({
            KVDataList: [{
              key: 'level',
              value: lv
            }],
            //KVDataList: K表示Key V表示Value DateList表示用户数据列表 用户要修改的 KV 数据列表 , 即存入用户信息到//微信云存储上 , 在下面的子域中将获取这个值进行排序，
            success: function success() {
              console.log('setwxcloudrankdata success');
            }
          });
        };
        return WxManager;
      }());
      var WxMgr = exports('WxMgr', new WxManager());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_fish_whale', 'chunks:///_virtual/module_fish_whale'); 
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