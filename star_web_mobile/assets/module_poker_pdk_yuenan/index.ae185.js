System.register("chunks:///_virtual/AudioControl.ts", ['cc', './ModuleDef.ts'], function (exports) {
  var cclegacy, ModuleDef;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2d38fWxj3ZGzI9P7voewDBH", "AudioControl", undefined);

      /*
       * @Author: xz
       * @Date: 2021-12-13 00:00:16
       * @LastEditTime: 2022-01-03 23:48:28
       * @LastEditors: xz
       * @Description: 
       */
      var rootPath = "sound/";

      //by_009:音频控制
      var AudioControl = exports('AudioControl', {
        //by_009:播放点击音效
        playClick: function playClick() {
          var path = rootPath + "click";
          tgx.AudioMgr.inst.audio.playEffect(path, ModuleDef.POKER_PDK_YUENAN);
        },
        //by_009:播放背景音乐
        playBGM: function playBGM() {
          var path = rootPath + "BGM";
          tgx.AudioMgr.inst.audio.playMusicLoop(path, ModuleDef.POKER_PDK_YUENAN);
        },
        //by_009:播放完成
        playFinish: function playFinish() {
          var path = rootPath + "finish";
          tgx.AudioMgr.inst.audio.playEffect(path, ModuleDef.POKER_PDK_YUENAN);
        },
        //播放获得奖励
        playGetReward: function playGetReward() {
          var path = rootPath + "gifteffect";
          tgx.AudioMgr.inst.audio.playEffect(path, ModuleDef.POKER_PDK_YUENAN);
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMgr2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c319471tS5FnquE8Oof+0f9", "AudioMgr", undefined); // /**
      //  * 音效管理器， 对cc.audioEngine的封装
      //  */
      var AudioMgr = exports('AudioMgr', /*#__PURE__*/function () {
        function AudioMgr() {
          this.audioClipMap = {};
          this.bgm_on = true;
          this.effect_on = true;
          this.bgm = null;
          this.bindObj = [];
        } // this.audioClipMap = {} //文件夹下的资源
        // this.bgm_on = (cc.sys.localStorage.getItem("bgm_on") || "true") == "true"
        // this.effect_on = (cc.sys.localStorage.getItem("effect_on") || "true") == "true"
        // this.bgm = null
        // this.bindObj = []
        var _proto = AudioMgr.prototype;
        _proto.onDestroy = function onDestroy() {
          // this.releaseAll()
        }
        //    //背景音乐是否打开
        ;

        _proto.isBgmOpen = function isBgmOpen() {
          return this.bgm_on || false;
        }
        //    //音效是否打开
        ;

        _proto.isEffectOpen = function isEffectOpen() {
          return this.effect_on || false;
        }
        //    //加载dirName下所有的音频 加载完回调
        ;

        _proto.loadAudioDir = function loadAudioDir(dirName, callback) {
          //        // 加载 sound 目录下所有 AudioClip，并且获取它们的路径
          // cc.loader.loadResDir(dirName, cc.AudioClip, (err, assets, urls) => {
          // if (err) {
          // console.error("加载错误")
          // return
          // }
          // for (var i = 0; i < urls.length; ++i) {
          // var url = urls[i]
          // this.audioClipMap[url] = assets[i]

          // }
          // this.openBgm(this.bgm_on)
          // this.openEffect(this.effect_on)
          // callback()
          // });
        }
        //    //释放所有AudioMgr加载的音效
        ;

        _proto.releaseAll = function releaseAll() {
          // this.stopAll()
          // for (let i = 0; i < this.bindObj.length; i++) {
          // onfire.un(this.bindObj[i])
          // }

          // for (const key in this.audioClipMap) {
          // var sound = this.audioClipMap[key]
          // cc.loader.releaseAsset(sound);
          // }
        }
        //    //停止所有音乐
        ;

        _proto.stopAll = function stopAll() {
          // cc.audioEngine.stopMusic();
          // cc.audioEngine.stopAllEffects();
        };
        _proto.getMusicVolume = function getMusicVolume() {
          // return cc.audioEngine.getMusicVolume();
        };
        _proto.setMusicVolume = function setMusicVolume(audioNum) {
          // cc.audioEngine.setMusicVolume(audioNum);
        };
        _proto.getEffectsVolume = function getEffectsVolume() {
          // return cc.audioEngine.getEffectsVolume();
        };
        _proto.setEffectsVolume = function setEffectsVolume(audioNum) {
          // cc.audioEngine.setEffectsVolume(audioNum);
        }
        //    //bgm开关
        ;

        _proto.openBgm = function openBgm(on) {
          // if (on && this.bgm) {
          // cc.audioEngine.playMusic(this.bgm, true);
          // } else {
          // cc.audioEngine.stopMusic();
          // }
          // this.bgm_on = on
          // cc.sys.localStorage.setItem("bgm_on", on);
        }
        //    //音效开关
        ;

        _proto.openEffect = function openEffect(on) {
          // if (!on) {
          // cc.audioEngine.stopAllEffects(); //停止所有
          // }
          // this.effect_on = on
          // cc.sys.localStorage.setItem("effect_on", on);
        }
        //    //播放背景音乐
        //    //music: cc.AudioClip 或者AudioMgr加载的音效资源路径
        ;

        _proto.playMusic = function playMusic(music) {
          // var clip = null
          // if ("string" === typeof music) { //string 路径播放
          // if (this.audioClipMap[music]) {
          // clip = this.audioClipMap[music]
          // } else {
          // console.log("你要播放的音乐不存在：", music)
          // }
          // } else if (music instanceof cc.AudioClip) {
          // clip = music
          // }

          // if (clip) {
          // this.bgm = clip
          // } else {
          // console.log("背景音乐错误null")
          // return
          // }
          // if (!this.isBgmOpen()) return; //背景音乐静音

          // cc.audioEngine.stopMusic(); //怕有很多个music
          // return cc.audioEngine.playMusic(this.bgm, true);
        }
        //    //播放音效 返回effectID
        //    //effect: cc.AudioClip 或者AudioMgr加载的音效资源路径
        ;

        _proto.playEffect = function playEffect(effect) {
          // if (!this.isEffectOpen()) return //音效静音

          // var clip = null
          // if ("string" === typeof effect) { //string 路径播放
          // if (this.audioClipMap[effect]) {
          // clip = this.audioClipMap[effect]
          // }
          // } else if (effect instanceof cc.AudioClip) {
          // clip = effect
          // }

          // if (!clip) {
          // console.log("你要播放的音乐不存在：", effect)
          // return
          // }

          //         //@ts-ignore
          // return cc.audioEngine.playEffect(clip, ...args);
        };
        _proto.stopEffect = function stopEffect() {
          //        //@ts-ignore
          // cc.audioEngine.stopEffect(...args);
        };
        _createClass(AudioMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new AudioMgr();
            }
            return this._inst;
          }
        }]);
        return AudioMgr;
      }());

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /**
      //  * 音效管理器， 对cc.audioEngine的封装
      //  */
      // 
      // export class AudioMgr {
      //     audioClipMap = {}
      //     bgm_on = true
      //     effect_on = true
      //     bgm = null
      //     bindObj = []
      // 
      //     constructor() {
      //         this.audioClipMap = {} //文件夹下的资源
      //         this.bgm_on = (cc.sys.localStorage.getItem("bgm_on") || "true") == "true"
      //         this.effect_on = (cc.sys.localStorage.getItem("effect_on") || "true") == "true"
      //         this.bgm = null
      //         this.bindObj = []
      //     }
      // 
      // 
      //     onDestroy() {
      //         this.releaseAll()
      //     }
      //     //背景音乐是否打开
      //     isBgmOpen() {
      //         return this.bgm_on || false
      //     }
      //     //音效是否打开
      //     isEffectOpen() {
      //         return this.effect_on || false
      //     }
      // 
      //     //加载dirName下所有的音频 加载完回调
      //     loadAudioDir(dirName, callback) {
      //         // 加载 sound 目录下所有 AudioClip，并且获取它们的路径
      //         cc.loader.loadResDir(dirName, cc.AudioClip, (err, assets, urls) => {
      //             if (err) {
      //                 console.error("加载错误")
      //                 return
      //             }
      //             for (var i = 0; i < urls.length; ++i) {
      //                 var url = urls[i]
      //                 this.audioClipMap[url] = assets[i]
      // 
      //             }
      //             this.openBgm(this.bgm_on)
      //             this.openEffect(this.effect_on)
      //             callback()
      //         });
      //     }
      // 
      //     //释放所有AudioMgr加载的音效
      //     releaseAll() {
      //         this.stopAll()
      //         for (let i = 0; i < this.bindObj.length; i++) {
      //             onfire.un(this.bindObj[i])
      //         }
      // 
      //         for (const key in this.audioClipMap) {
      //             var sound = this.audioClipMap[key]
      //             cc.loader.releaseAsset(sound);
      //         }
      // 
      // 
      //     }
      // 
      //     //停止所有音乐
      //     stopAll() {
      //         cc.audioEngine.stopMusic();
      //         cc.audioEngine.stopAllEffects();
      //     }
      // 
      //     getMusicVolume() {
      //         return cc.audioEngine.getMusicVolume();
      //     }
      // 
      //     setMusicVolume(audioNum) {
      //         cc.audioEngine.setMusicVolume(audioNum);
      //     }
      // 
      //     getEffectsVolume() {
      //         return cc.audioEngine.getEffectsVolume();
      //     }
      // 
      //     setEffectsVolume(audioNum) {
      //         cc.audioEngine.setEffectsVolume(audioNum);
      //     }
      // 
      //     //bgm开关
      //     openBgm(on) {
      //         if (on && this.bgm) {
      //             cc.audioEngine.playMusic(this.bgm, true);
      //         } else {
      //             cc.audioEngine.stopMusic();
      //         }
      //         this.bgm_on = on
      //         cc.sys.localStorage.setItem("bgm_on", on);
      // 
      //     }
      // 
      //     //音效开关
      //     openEffect(on) {
      //         if (!on) {
      //             cc.audioEngine.stopAllEffects(); //停止所有
      //         }
      //         this.effect_on = on
      //         cc.sys.localStorage.setItem("effect_on", on);
      //     }
      // 
      //     //播放背景音乐
      //     //music: cc.AudioClip 或者AudioMgr加载的音效资源路径
      //     playMusic(music) {
      //         var clip = null
      //         if ("string" === typeof music) { //string 路径播放
      //             if (this.audioClipMap[music]) {
      //                 clip = this.audioClipMap[music]
      //             } else {
      //                 console.log("你要播放的音乐不存在：", music)
      //             }
      //         } else if (music instanceof cc.AudioClip) {
      //             clip = music
      //         }
      // 
      //         if (clip) {
      //             this.bgm = clip
      //         } else {
      //             console.log("背景音乐错误null")
      //             return
      //         }
      //         if (!this.isBgmOpen()) return; //背景音乐静音
      // 
      //         cc.audioEngine.stopMusic(); //怕有很多个music
      //         return cc.audioEngine.playMusic(this.bgm, true);
      // 
      //     }
      // 
      //     //播放音效 返回effectID
      //     //effect: cc.AudioClip 或者AudioMgr加载的音效资源路径
      //     playEffect(effect, ...args) {
      //         if (!this.isEffectOpen()) return //音效静音
      // 
      // 
      //         var clip = null
      //         if ("string" === typeof effect) { //string 路径播放
      //             if (this.audioClipMap[effect]) {
      //                 clip = this.audioClipMap[effect]
      //             }
      //         } else if (effect instanceof cc.AudioClip) {
      //             clip = effect
      //         }
      // 
      //         if (!clip) {
      //             console.log("你要播放的音乐不存在：", effect)
      //             return
      //         }
      // 
      //          //@ts-ignore
      //         return cc.audioEngine.playEffect(clip, ...args);
      // 
      //     }
      // 
      //     stopEffect(...args) {
      //         //@ts-ignore
      //         cc.audioEngine.stopEffect(...args);
      //     }
      // 
      // }
      AudioMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "9a90ffe0DdLtJNaYvZZZjEh", "Bar", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //遮罩进度条 跟processBar差不多
      var MaskBar = exports('default', (_dec = ccclass('Bar'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MaskBar, _Component);
        function MaskBar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._progress = 1;
          _initializerDefineProperty(_this, "bar", _descriptor, _assertThisInitialized(_this));
          return _this;
        } // @property
        // get progress() {
        // return this._progress
        // };
        // set progress(value) {
        // let _value: number = value;
        // if (value < 0) {
        // _value = 0
        // }
        // if (value > 1) {
        // _value = 1
        // }
        // this.bar.fillRange = _value
        // this._progress = _value
        // };
        // start() {
        // }
        //    // update (dt) {}
        return MaskBar;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /**
      // 遮罩进度条 跟processBar差不多
      //  */
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class MaskBar extends cc.Component {
      // 
      //     _progress = 1;
      // 
      //     @property(cc.Sprite)
      //     bar: cc.Sprite = null;
      // 
      //     @property
      //     get progress() {
      //         return this._progress
      //     };
      // 
      //     set progress(value) {
      // 
      //         let _value: number = value;
      //         if (value < 0) {
      //             _value = 0
      // 
      //         }
      //         if (value > 1) {
      //             _value = 1
      //         }
      // 
      //         this.bar.fillRange = _value
      //         this._progress = _value
      // 
      //     };
      // 
      // 
      // 
      // 
      //     start() {
      // 
      //     }
      // 
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e5b77mxEwhKrKti68L28tEA", "BaseConfigContainer", undefined);
      var ConfigData = exports('ConfigData', function ConfigData() {
        this.TITLES = void 0;
        this.RECORDS = void 0;
      });
      var BaseConfigContainer = exports('BaseConfigContainer', /*#__PURE__*/function () {
        function BaseConfigContainer() {
          this.CONFIG_FILE_DIR = "config/";
          this.mTag = void 0;
        }
        _createClass(BaseConfigContainer, [{
          key: "tag",
          get: function get() {
            return this.mTag;
          },
          set: function set(value) {
            this.mTag = value;
          }
        }]);
        return BaseConfigContainer;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CoinMatchConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './BaseConfigContainer.ts', './ItemConfigContainer.ts', './ModuleDef.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, ResourceMgr, BaseConfigContainer, decodeConfigItemString, ModuleDef, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      decodeConfigItemString = module.decodeConfigItemString;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "440cbHR821LEIMKyJX3Ye58", "CoinMatchConfigContainer", undefined);
      var CoinMatchData = exports('CoinMatchData', function CoinMatchData() {
        this.coin_match_id = void 0;
        this.coin_match_name = void 0;
        this.clearing_type = void 0;
        this.base_coin = void 0;
        this.limit_enter_coin = void 0;
        this.commission = void 0;
        this.stage_integral_win = void 0;
        this.stage_integral_lose = void 0;
        this.win_extra_reward = void 0;
        this.bigwin_reward = void 0;
      });
      var CoinMatchTitle = {
        coin_match_id: 0,
        coin_match_name: 1,
        clearing_type: 2,
        base_coin: 3,
        limit_enter_coin: 4,
        commission: 5,
        stage_integral_win: 6,
        stage_integral_lose: 7,
        win_extra_reward: 8,
        bigwin_reward: 9
      };
      var CoinMatchConfigContainer = exports('CoinMatchConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(CoinMatchConfigContainer, _BaseConfigContainer);
        function CoinMatchConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.configData = null;
          _this.mapConfig = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "coin_match", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load coin_match err");
            } else {
              _this.configData = jsonAsset.json;
              _this.mapConfig = {};
              for (var i = 0; i < _this.configData.RECORDS.length; i++) {
                var record = _this.configData.RECORDS[i];
                var data = new CoinMatchData();
                data.coin_match_id = record[CoinMatchTitle.coin_match_id];
                data.coin_match_name = record[CoinMatchTitle.coin_match_name];
                data.clearing_type = record[CoinMatchTitle.clearing_type];
                data.base_coin = record[CoinMatchTitle.base_coin];
                data.limit_enter_coin = record[CoinMatchTitle.limit_enter_coin];
                data.commission = record[CoinMatchTitle.commission];
                data.stage_integral_win = decodeConfigItemString(record[CoinMatchTitle.stage_integral_win]);
                data.win_extra_reward = decodeConfigItemString(record[CoinMatchTitle.win_extra_reward]);
                data.bigwin_reward = decodeConfigItemString(record[CoinMatchTitle.bigwin_reward]);
                _this.mapConfig[data.coin_match_id] = data;
              }
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }

        /**
         * 
         * @param coin_match_id 
         */
        var _proto = CoinMatchConfigContainer.prototype;
        _proto.getCoinMatchCfgByCoinMatchId = function getCoinMatchCfgByCoinMatchId(coin_match_id) {
          return this.mapConfig[coin_match_id];
        };
        _proto.getCoinItemsByClearingType = function getCoinItemsByClearingType(clearing_type) {
          var arr = [];
          for (var key in this.mapConfig) {
            var element = this.mapConfig[key];
            if (element.clearing_type == clearing_type) {
              arr.push(element);
            }
          }
          return arr;
        };
        return CoinMatchConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigManager.ts", ['cc', './ItemConfigContainer.ts', './LanguageConfigContainer.ts', './CoinMatchConfigContainer.ts', './OpenRoomConfigContainer.ts', './FaceConfigContainer.ts', './DuanjuConfigContainer.ts', './PeiMusicConfigContainer.ts', './GlobalConfigContainer.ts'], function (exports) {
  var cclegacy, ItemConfigContainer, LanguageConfigContainer, CoinMatchConfigContainer, OpenRoomConfigContainer, FaceConfigContainer, DuanjuConfigContainer, PeiMusicConfigContainer, GlobalConfigContainer;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ItemConfigContainer = module.ItemConfigContainer;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      CoinMatchConfigContainer = module.CoinMatchConfigContainer;
    }, function (module) {
      OpenRoomConfigContainer = module.OpenRoomConfigContainer;
    }, function (module) {
      FaceConfigContainer = module.FaceConfigContainer;
    }, function (module) {
      DuanjuConfigContainer = module.DuanjuConfigContainer;
    }, function (module) {
      PeiMusicConfigContainer = module.PeiMusicConfigContainer;
    }, function (module) {
      GlobalConfigContainer = module.GlobalConfigContainer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0fa66r/Mn1AA6wmejl48rFI", "ConfigManager", undefined);
      var ConfigManager = exports('ConfigManager', /*#__PURE__*/function () {
        function ConfigManager() {
          this.configContainerList = [];
          this.curLoadedCount = 0;
          this._isLoaded = false;
        }
        ConfigManager.getInstance = function getInstance() {
          if (this.instance == null) {
            this.instance = new ConfigManager();
          }
          return this.instance;
        };
        var _proto = ConfigManager.prototype;
        _proto.loadAllConfig = function loadAllConfig(callback) {
          if (this._isLoaded) {
            if (callback) {
              callback();
            }
            return;
          }
          this._isLoaded = true;
          this.loadConfig(LanguageConfigContainer, this.callback, callback);
          this.loadConfig(ItemConfigContainer, this.callback, callback);
          this.loadConfig(CoinMatchConfigContainer, this.callback, callback);
          this.loadConfig(OpenRoomConfigContainer, this.callback, callback);
          this.loadConfig(FaceConfigContainer, this.callback, callback);
          this.loadConfig(DuanjuConfigContainer, this.callback, callback);
          this.loadConfig(PeiMusicConfigContainer, this.callback, callback);
          this.loadConfig(GlobalConfigContainer, this.callback, callback);
        };
        _proto.getConfig = function getConfig(configClass) {
          for (var i = 0; i < this.configContainerList.length; ++i) {
            if (this.configContainerList[i].tag == configClass) {
              return this.configContainerList[i];
            }
          }
          return null;
        };
        _proto.loadConfig = function loadConfig(configClass, callback, arg) {
          var config = new configClass(callback, this, arg);
          config.tag = configClass;
          this.configContainerList.push(config);
        };
        _proto.callback = function callback(_callback) {
          //cc.log("callback");

          this.curLoadedCount += 1;
          if (this.configContainerList.length == this.curLoadedCount) {
            if (_callback) {
              _callback();
            }
          }
        };
        return ConfigManager;
      }());
      ConfigManager.instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Define4.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "77684UKoX5PCbhX/25tqR0B", "Define", undefined);
      var CARD_RANK = exports('CARD_RANK', /*#__PURE__*/function (CARD_RANK) {
        CARD_RANK[CARD_RANK["ACE"] = 1] = "ACE";
        CARD_RANK[CARD_RANK["TWO"] = 2] = "TWO";
        CARD_RANK[CARD_RANK["THREE"] = 3] = "THREE";
        CARD_RANK[CARD_RANK["FOUR"] = 4] = "FOUR";
        CARD_RANK[CARD_RANK["FIVE"] = 5] = "FIVE";
        CARD_RANK[CARD_RANK["SIX"] = 6] = "SIX";
        CARD_RANK[CARD_RANK["SEVEN"] = 7] = "SEVEN";
        CARD_RANK[CARD_RANK["EIGHT"] = 8] = "EIGHT";
        CARD_RANK[CARD_RANK["NINE"] = 9] = "NINE";
        CARD_RANK[CARD_RANK["TEN"] = 10] = "TEN";
        CARD_RANK[CARD_RANK["JACK"] = 11] = "JACK";
        CARD_RANK[CARD_RANK["QUEEN"] = 12] = "QUEEN";
        CARD_RANK[CARD_RANK["KING"] = 13] = "KING";
        CARD_RANK[CARD_RANK["JokerSmall"] = 14] = "JokerSmall";
        CARD_RANK[CARD_RANK["JokerBig"] = 15] = "JokerBig";
        return CARD_RANK;
      }({}));
      var CARD_COLOR = exports('CARD_COLOR', /*#__PURE__*/function (CARD_COLOR) {
        CARD_COLOR[CARD_COLOR["Diamond"] = 0] = "Diamond";
        CARD_COLOR[CARD_COLOR["HEART"] = 1] = "HEART";
        CARD_COLOR[CARD_COLOR["CLUB"] = 2] = "CLUB";
        CARD_COLOR[CARD_COLOR["SPADE"] = 3] = "SPADE";
        return CARD_COLOR;
      }({})); //黑桃
      var EventMessage = exports('EventMessage', function EventMessage() {});
      //房间信息
      EventMessage.POKER_ROOM_INFO = 'POKER_ROOM_INFO';
      //游戏开始
      EventMessage.POKER_GAME_START = 'POKER_GAME_START';
      //玩家出牌
      EventMessage.POKER_USER_PLAY = 'POKER_USER_PLAY';
      //玩家过牌
      EventMessage.POKER_USER_PASS = 'POKER_USER_PASS';
      //游戏结算
      EventMessage.POKER_GAME_END = 'POKER_GAME_END';
      //房间玩家金币变更
      EventMessage.POKER_ROOM_GOLD_CHANGE = 'POKER_ROOM_GOLD_CHANGE';
      //炸弹斩杀
      EventMessage.POKER_BOMB_SCORE = 'POKER_BOMB_SCORE';
      //玩家托管状态变更
      EventMessage.POKER_USER_TRUSTEESHIP_STATUS = 'POKER_USER_TRUSTEESHIP_STATUS';
      //聊天
      EventMessage.POKER_USER_CHAT = 'POKER_USER_CHAT';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DuanjuConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './BaseConfigContainer.ts', './ModuleDef.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, ResourceMgr, BaseConfigContainer, ModuleDef, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e769bWqOK5Lp5zkhY55wSaF", "DuanjuConfigContainer", undefined);
      var DuanjuData = exports('DuanjuData', function DuanjuData() {
        this.id = void 0;
        this.text = void 0;
        this.sound = void 0;
      });
      var DuanjuDataTitle = {
        id: 0,
        text: 1,
        pei_music_id: 2
      };
      var DuanjuConfigContainer = exports('DuanjuConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(DuanjuConfigContainer, _BaseConfigContainer);
        function DuanjuConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.configData = null;
          _this.mapConfig = null;
          _this.arrConfig = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "duanju", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load duanju err");
            } else {
              // let encode = object.text;
              // let decode = window.atob(encode);
              // object = JSON.parse(decode);
              // for (var i in object) {
              //     this.monsterConfigData[i] = object[i];
              // }
              // if (callback) {
              //     callback.call(caller, arg);
              // }
              _this.configData = jsonAsset.json;
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }
        var _proto = DuanjuConfigContainer.prototype;
        _proto.generateMapConfig = function generateMapConfig() {
          if (this.mapConfig == null) {
            this.mapConfig = {};
            this.arrConfig = [];
            for (var i = 0; i < this.configData.RECORDS.length; i++) {
              var record = this.configData.RECORDS[i];
              var temp = new DuanjuData();
              temp.id = Number(record[DuanjuDataTitle.id]); // 转成number 查表速度快一些
              temp.text = record[DuanjuDataTitle.text];
              temp.sound = record[DuanjuDataTitle.pei_music_id];
              this.mapConfig[temp.id] = temp;
              this.arrConfig.push(temp);
            }
          }
        };
        _proto.getDataArray = function getDataArray() {
          if (this.mapConfig == null) {
            this.generateMapConfig();
          }
          return this.arrConfig;
        };
        _proto.getDataById = function getDataById(id) {
          var faceData = null;
          if (this.mapConfig == null) {
            this.generateMapConfig();
          }
          var numId = 0;
          if (typeof id == "string") {
            numId = Number(id);
          } else {
            numId = id;
          }
          faceData = this.mapConfig[numId];
          return faceData;
        };
        return DuanjuConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventCenter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, Node;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b065e5BcqlPb702gaxdqP9U", "EventCenter", undefined);
      var EventCenter = exports('default', /*#__PURE__*/function (_Node) {
        _inheritsLoose(EventCenter, _Node);
        function EventCenter() {
          var _this;
          _this = _Node.call(this) || this;
          EventCenter._inst = _assertThisInitialized(_this);
          return _this;
        }
        EventCenter.onEvent = function onEvent(strEvent, callback, caller) {
          this.inst.on(strEvent, callback, caller);
        };
        EventCenter.offEvent = function offEvent(strEvent, callback, caller) {
          this.inst.off(strEvent, callback, caller);
        };
        EventCenter.emitEvent = function emitEvent(strEvent, arg1, arg2, arg3, arg4, arg5) {
          this.inst.emit(strEvent, arg1, arg2, arg3, arg4, arg5);
        };
        _createClass(EventCenter, null, [{
          key: "inst",
          get: function get() {
            return this._inst || new EventCenter();
          }
        }]);
        return EventCenter;
      }(Node));
      EventCenter._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FaceConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './BaseConfigContainer.ts', './ModuleDef.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, ResourceMgr, BaseConfigContainer, ModuleDef, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "21672gYkYtLfaLebYbuZYnR", "FaceConfigContainer", undefined);
      var FaceData = exports('FaceData', function FaceData() {
        this.id = void 0;
        this.isShow = void 0;
        this.icon = void 0;
        this.res = void 0;
        this.num = void 0;
        this.sound = void 0;
      });
      var FaceDataTitle = {
        face_id: 0,
        sort: 1,
        show: 2,
        cycle: 3,
        face_icon: 4,
        face_res: 5,
        face_number: 6,
        pei_music_id: 7
      };
      var FaceConfigContainer = exports('FaceConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(FaceConfigContainer, _BaseConfigContainer);
        function FaceConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.configData = null;
          _this.mapConfig = null;
          _this.arrConfig = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "face", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load face err");
            } else {
              // let encode = object.text;
              // let decode = window.atob(encode);
              // object = JSON.parse(decode);
              // for (var i in object) {
              //     this.monsterConfigData[i] = object[i];
              // }
              // if (callback) {
              //     callback.call(caller, arg);
              // }
              _this.configData = jsonAsset.json;
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }
        var _proto = FaceConfigContainer.prototype;
        _proto.generateMapConfig = function generateMapConfig() {
          if (this.mapConfig == null) {
            this.mapConfig = {};
            this.arrConfig = [];
            for (var i = 0; i < this.configData.RECORDS.length; i++) {
              var record = this.configData.RECORDS[i];
              var temp = new FaceData();
              temp.id = Number(record[FaceDataTitle.face_id]); // 转成number 查表速度快一些
              temp.isShow = record[FaceDataTitle.show] == "1";
              temp.icon = record[FaceDataTitle.face_icon];
              temp.res = record[FaceDataTitle.face_res];
              temp.num = record[FaceDataTitle.face_number];
              temp.sound = record[FaceDataTitle.pei_music_id];
              this.mapConfig[temp.id] = temp;
              this.arrConfig.push(temp);
            }
          }
        };
        _proto.getDataArray = function getDataArray() {
          if (this.mapConfig == null) {
            this.generateMapConfig();
          }
          return this.arrConfig;
        };
        _proto.getFaceDataById = function getFaceDataById(id) {
          var faceData = null;
          if (this.mapConfig == null) {
            this.generateMapConfig();
          }
          var numId = 0;
          if (typeof id == "string") {
            numId = Number(id);
          } else {
            numId = id;
          }
          faceData = this.mapConfig[numId];
          return faceData;
        };
        return FaceConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerManager.ts', './Define4.ts', './PokerDefine.ts', './UserMgr.ts', './NetGameServer.ts', './RoomMgr.ts'], function (exports) {
  var _createClass, cclegacy, _decorator, director, PokerManager, EventMessage, ROOM_STATUS, UserMgr, gameNet, RoomMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      EventMessage = module.EventMessage;
    }, function (module) {
      ROOM_STATUS = module.ROOM_STATUS;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fefccD0JJhJaqMr+sJMQCkH", "GameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameManager = exports('GameManager', /*#__PURE__*/function () {
        function GameManager() {
          this._currentUserID = void 0;
          //当前出牌的玩家id
          this._currentUserChairID = void 0;
          //当前出牌得玩家座位
          this._lastUserID = void 0;
          //最后一次出牌得玩家id
          this._lastUserChairID = void 0;
          //最后一次出牌得玩家座位
          this._gameData = void 0;
        }
        var _proto = GameManager.prototype;
        //获取对应位置的玩家信息
        _proto.getTableUserItem = function getTableUserItem(chairID) {
          for (var i = 0; i < this._gameData.userList.length; i++) {
            if (this._gameData.userList[i].chairID == chairID) {
              return this._gameData.userList[i];
            }
          }
          return null;
        };
        _proto.init = function init() {
          //注册各种消息  
          gameNet.listenMsg("tienlen/GameStart", this.onGameStart, this);
          gameNet.listenMsg("tienlen/RoomInfo", this.onRoomBack, this);
          gameNet.listenMsg("tienlen/TurnPlayer", this.onUserPlay, this);
          gameNet.listenMsg("tienlen/PassPlayer", this.onUserPass, this);
          gameNet.listenMsg("tienlen/TrusteeshipStatus", this.onUserTrusteeshipStatus, this);
          gameNet.listenMsg("tienlen/GameEnd", this.onGameEnd, this);
          gameNet.listenMsg("tienlen/RoomScore", this.onRoomGoldChange, this);
          gameNet.listenMsg("tienlen/BombScore", this.onRoomBombScore, this);
          gameNet.listenMsg("chat/Chat", this.onChat, this);
        };
        _proto.uinit = function uinit() {
          this.end();
        }
        /**
         * 结束
         */;
        _proto.end = function end() {
          //移除消息
          gameNet.unlistenMsgAllByThis(this);
        }
        //准备
        ;

        _proto.onReady = function onReady() {
          RoomMgr.inst.rpc_Ready();
        }
        //取消准备
        ;

        _proto.onCancelReady = function onCancelReady() {
          //gameNet.sendMsg('fish/Fire', msg);
        }
        //出牌
        ;

        _proto.onPlay = function onPlay(cards) {
          var msg = {};
          msg.cards = cards;
          gameNet.sendMsg('tienlen/Play', msg);
        }
        //过牌 不出 跳过
        ;

        _proto.onPass = function onPass() {
          gameNet.sendMsg('tienlen/Pass', {});
        }
        //托管
        ;

        _proto.onTrustship = function onTrustship() {
          var msg = {};
          msg.status = true;
          gameNet.sendMsg('tienlen/Trusteeship', msg);
        }
        //取消托管
        ;

        _proto.onCancelTrustship = function onCancelTrustship() {
          var msg = {};
          msg.status = false;
          gameNet.sendMsg('tienlen/Trusteeship', msg);
        }
        /**聊天 */;
        _proto.chat = function chat(content) {
          var msg = {};
          msg.content = content;
          gameNet.callApi('chat/SendChat', msg);
        }
        /**通过玩家id 获取玩家数据 */;
        _proto.getUserInfoByID = function getUserInfoByID(userID) {
          for (var i = 0; i < this._gameData.userList.length; i++) {
            if (this._gameData.userList[i].userID == userID) {
              return this._gameData.userList[i];
            }
          }
          return null;
        }

        /**通过玩家座号 获取玩家数据 */;
        _proto.getUserInfoByChairID = function getUserInfoByChairID(chairID) {
          for (var i = 0; i < this._gameData.userList.length; i++) {
            if (this._gameData.userList[i].chairID == chairID) {
              return this._gameData.userList[i];
            }
          }
          return null;
        }
        //房间信息下发
        ;

        _proto.onRoomBack = function onRoomBack(msg) {
          console.log("MsgRoomInfo");
          this._gameData = new GameData();
          this._gameData.serialNumber = msg.serialNumber;
          this._gameData.currentUserID = msg.currentUserId;
          this._gameData.currentUserChairID = msg.currentUser;
          this._gameData.currentLeftTime = msg.currentLeftTime;
          this._gameData.round = msg.handRound;
          this._gameData.userList = [];
          if (msg.userCards) {
            for (var i = 0; i < msg.userCards.length; i++) {
              var userGameInfo = new UserGameInfo();
              userGameInfo.userID = msg.userCards[i].userId;
              userGameInfo.chairID = msg.userCards[i].chairId;
              userGameInfo.cards = msg.userCards[i].cards;
              userGameInfo.userCardCount = msg.userCards[i].cardCount;
              this._gameData.userList.push(userGameInfo);
            }
          }
          if (msg.prevCards) {
            var prevCards = new PrevCards();
            prevCards.cards = msg.prevCards.cards;
            prevCards.chairID = msg.prevCards.chairID;
            prevCards.userID = msg.prevCards.userID;
            prevCards.leftCardCount = msg.prevCards.leftCardCount;
            this._gameData.prevCards = prevCards;
          }
          this._currentUserID = this._gameData.currentUserID;
          this._currentUserChairID = this._gameData.currentUserChairID;
          director.emit(EventMessage.POKER_ROOM_INFO, this._gameData);
        }

        //游戏开始
        ;

        _proto.onGameStart = function onGameStart(msg) {
          PokerManager.inst.roomData.roomStatus = ROOM_STATUS.PLAYING;
          var startData = new GameStartData();
          startData.currentUserChairID = msg.currentUser;
          startData.round = msg.round;
          var userCards = [];
          for (var i = 0; i < msg.userCards.length; i++) {
            var userCard = new UserCard();
            userCard.cardCount = msg.userCards[i].cardCount;
            userCard.userID = msg.userCards[i].userId;
            userCard.chairID = msg.userCards[i].chairId;
            userCard.userCard = msg.userCards[i].cards;
            userCards.push(userCard);
          }
          startData.userCards = userCards;
          this._gameData.currentUserChairID = startData.currentUserChairID;
          this._gameData.currentUserID = startData.currentUserID;
          for (var i = 0; i < startData.userCards.length; i++) {
            for (var j = 0; j < this._gameData.userList.length; j++) {
              if (this._gameData.userList[j].chairID == startData.userCards[i].chairID) {
                this._gameData.userList[j].cards = startData.userCards[i].userCard;
              }
            }
          }
          director.emit(EventMessage.POKER_GAME_START, startData);
        }
        //玩家出牌
        ;

        _proto.onUserPlay = function onUserPlay(msg) {
          var gamePlayCard = new GamePlayCard();
          // gamePlayCard.nextUserChairID = msg.nextUserID;
          gamePlayCard.nextUserChairID = msg.currentUser;
          if (msg.prevCards) {
            var prevCards = new PrevCards();
            prevCards.cards = msg.prevCards.cards;
            prevCards.chairID = msg.prevCards.chairID;
            prevCards.userID = msg.prevCards.userID;
            prevCards.leftCardCount = msg.prevCards.leftCardCount;
            gamePlayCard.prevCards = prevCards;
          }
          this._currentUserID = gamePlayCard.nextUserID;
          this._currentUserChairID = gamePlayCard.nextUserChairID;
          if (gamePlayCard.prevCards) {
            if (this._lastUserID != gamePlayCard.prevCards.userID) {
              //不同人出牌了
              var user = this.getUserInfoByID(gamePlayCard.prevCards.userID);
              if (user) {
                for (var i = 0; i < gamePlayCard.prevCards.cards.length; i++) {
                  var index = user.cards.indexOf(gamePlayCard.prevCards.cards[i]);
                  if (index != -1) {
                    user.cards.splice(index, 1);
                  }
                }
              }
            }
            this._lastUserID = gamePlayCard.prevCards.userID;
            this._lastUserChairID = gamePlayCard.prevCards.chairID;
          } else {
            this._lastUserID = "";
            this._lastUserChairID = -1;
          }
          director.emit(EventMessage.POKER_USER_PLAY, gamePlayCard);
        }
        //玩家过牌
        ;

        _proto.onUserPass = function onUserPass(msg) {
          var gamePlayPass = new GamePlayPass();
          gamePlayPass.userID = msg.userId;
          gamePlayPass.chairID = msg.chairId;
          director.emit(EventMessage.POKER_USER_PASS, gamePlayPass);
        }
        //游戏结束 结算
        ;

        _proto.onGameEnd = function onGameEnd(msg) {
          PokerManager.inst.roomData.roomStatus = ROOM_STATUS.IDLE;
          var gameEndData = new GameEndData();
          if (msg.tongPai) {
            var tongPaiData = new TongPaiData();
            tongPaiData.userID = msg.tongPai.userId;
            tongPaiData.chairID = msg.tongPai.chairId;
            tongPaiData.cards = msg.tongPai.cards;
            gameEndData.tongPai = tongPaiData;
          }
          var userDatas = [];
          for (var i = 0; i < msg.userData.length; i++) {
            var userResultData = new UserResultData();
            userResultData.userCard = msg.userData[i].userCard;
            userResultData.userID = msg.userData[i].userId;
            userResultData.chairID = msg.userData[i].chairId;
            userResultData.allGold = msg.userData[i].allGold;
            userResultData.winGold = msg.userData[i].score;
            userResultData.bombGold = msg.userData[i].bombScore;
            userResultData.isWinner = msg.userData[i].isWinner;
            userResultData.playRecords = msg.userData[i].playRecords;
            userResultData.isCreator = msg.userData[i].isCreator;
            var userData = PokerManager.inst.getUserInfoByID(userResultData.userID);
            if (userData) {
              userResultData.nickname = userData.nickname;
              // userResultData.headUrl = userData.headUrl;
            }

            userDatas.push(userResultData);
          }
          gameEndData.userData = userDatas;
          director.emit(EventMessage.POKER_GAME_END, gameEndData);
        };
        _proto.onRoomGoldChange = function onRoomGoldChange(msg) {
          var roomGoldChange = new RoomGoldChange();
          roomGoldChange.userData = [];
          for (var i = 0; i < msg.userData.length; i++) {
            var changeUser = new RoomGoldChangeUser();
            changeUser.userID = msg.userData[i].userId;
            changeUser.gold = msg.userData[i].gold;
            changeUser.chairID = msg.userData[i].chairId;
            roomGoldChange.userData.push(changeUser);
          }
          director.emit(EventMessage.POKER_ROOM_GOLD_CHANGE, roomGoldChange);
        };
        _proto.onRoomBombScore = function onRoomBombScore(msg) {
          director.emit(EventMessage.POKER_BOMB_SCORE, msg);
        };
        _proto.onUserTrusteeshipStatus = function onUserTrusteeshipStatus(msg) {
          for (var i = 0; i < this._gameData.userList.length; i++) {
            if (this._gameData.userList[i].userID == msg.userId) {
              this._gameData.userList[i].trusteeship = msg.status;
              director.emit(EventMessage.POKER_USER_TRUSTEESHIP_STATUS, this._gameData.userList[i]);
            }
          }
        };
        _proto.onChat = function onChat(msg) {
          director.emit(EventMessage.POKER_USER_CHAT, msg);
        };
        _createClass(GameManager, [{
          key: "roomData",
          get: function get() {
            return PokerManager.inst.roomData;
          }
        }, {
          key: "myChairID",
          get: function get() {
            return PokerManager.inst.myChairID;
          }
        }, {
          key: "myUserID",
          get: function get() {
            return UserMgr.inst.uid;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new GameManager();
            }
            return this._inst;
          }
        }]);
        return GameManager;
      }());
      GameManager._inst = void 0;
      var GameData = exports('GameData',
      //玩家信息列表
      function GameData() {
        this.serialNumber = void 0;
        //底分
        this.playerCount = void 0;
        //人数（不同游戏 不同玩法 人数不一样）
        this.prevCards = void 0;
        //上回合的出牌
        this.currentUserID = void 0;
        // 当前出牌玩家的id
        this.currentUserChairID = void 0;
        // 当前出牌玩家的坐位号
        this.currentLeftTime = void 0;
        // 当前玩家出牌倒计时 单位毫秒
        this.round = void 0;
        //第几回合
        this.userList = void 0;
        this.userList = [];
        this.round = 0;
      });
      var UserGameInfo = exports('UserGameInfo',
      //是否托管
      function UserGameInfo() {
        this.userID = void 0;
        // 玩家id
        this.chairID = void 0;
        // 座位
        this.cards = void 0;
        //牌   ----只有自己能给数据 其他玩家不能给这个数据
        this.userCardCount = void 0;
        //手牌数
        this.trusteeship = void 0;
        this.cards = [];
        this.chairID = -1;
      });
      var UserResultData = exports('UserResultData', function UserResultData() {
        this.userID = void 0;
        this.chairID = void 0;
        //座位
        this.userCard = void 0;
        //剩余牌
        this.playRecords = void 0;
        //打牌记录
        this.allGold = void 0;
        //持有金币总量
        this.winGold = void 0;
        //结算赢的金币
        this.isWinner = void 0;
        //是否赢家
        this.bombGold = void 0;
        //炸弹金币
        this.isCreator = void 0;
        //是否房主
        this.nickname = void 0;
        this.head = void 0;
        this.userCard = [];
        this.playRecords = [];
      });

      //通牌数据
      var TongPaiData = exports('TongPaiData', function TongPaiData() {
        this.userID = void 0;
        this.chairID = void 0;
        //座位
        this.cards = void 0;
        this.cards = [];
      });
      var PrevCards = exports('PrevCards',
      // 剩余牌数
      function PrevCards() {
        this.userID = void 0;
        this.chairID = void 0;
        //座位
        this.cards = void 0;
        //出的牌
        this.leftCardCount = void 0;
        this.cards = [];
      });
      var GameStartData = exports('GameStartData',
      //回合数
      function GameStartData() {
        this.userCards = void 0;
        this.currentUserChairID = void 0;
        //当前出牌玩家座位
        this.currentUserID = void 0;
        // 当前出牌玩家的id
        this.round = void 0;
        this.userCards = [];
      });
      var UserCard = exports('UserCard',
      //手牌数
      function UserCard() {
        this.userCard = void 0;
        this.chairID = void 0;
        //座位
        this.userID = void 0;
        this.cardCount = void 0;
        this.userCard = [];
      });

      //出牌
      var GamePlayCard = exports('GamePlayCard', function GamePlayCard() {
        this.nextUserID = void 0;
        // 下一家出牌玩家id
        this.nextUserChairID = void 0;
        // 下一家出牌玩家的坐位号
        this.prevCards = void 0;
      } //上家出的牌
      );
      //过牌
      var GamePlayPass = exports('GamePlayPass', function GamePlayPass() {
        this.userID = void 0;
        this.chairID = void 0;
      } //座位
      );

      var GameEndData = exports('GameEndData', function GameEndData() {
        this.tongPai = void 0;
        //通牌胜利,否则为null
        this.userData = void 0;
      } //本局数据 
      );

      var RoomGoldChange = exports('RoomGoldChange', function RoomGoldChange() {
        this.userData = void 0;
      });
      var RoomGoldChangeUser = exports('RoomGoldChangeUser', function RoomGoldChangeUser() {
        this.userID = void 0;
        this.chairID = void 0;
        this.gold = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameTools.ts", ['cc', './Logger.ts', './ResourceMgr.ts', './ModuleDef.ts', './PokerManager.ts'], function (exports) {
  var cclegacy, Sprite, Label, SpriteFrame, sys, Logger, ResourceMgr, ModuleDef, PokerManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      sys = module.sys;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      PokerManager = module.PokerManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b19c0TqxhVEZ7DKjpphMeLS", "GameTools", undefined);
      var GameTools = exports('default', /*#__PURE__*/function () {
        function GameTools() {}
        /**
         * zpF:格式化时间
         * @param date 时间
         * @param format 如："yyyy-MM-dd"
         * @returns {any} 格式化的字符串
         */
        GameTools.dateFormat = function dateFormat(date, format) {
          if (format === void 0) {
            format = "yyyy-MM-dd hh:mm:ss";
          }
          var o = {
            "M+": date.getMonth() + 1,
            //month
            "d+": date.getDate(),
            //day
            "h+": date.getHours(),
            //hour
            "m+": date.getMinutes(),
            //minute
            "s+": date.getSeconds(),
            //second
            "q+": Math.floor((date.getMonth() + 3) / 3),
            //quarter
            "S": date.getMilliseconds() //millisecond
          };

          if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
          for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
          return format;
        }

        /**
         * zpF:微信登录的回调，一个参数是openid
         * @type (openid)=>{}
         */;
        /**
         * zpF:格式化字符串
         * @param num
         * @param sep
         * @param chars
         * @returns {string}
         */
        GameTools.formatStr = function formatStr(num, sep, chars) {
          var num = (num || 0).toString(),
            result = '';
          while (num.length > chars) {
            result = sep + num.slice(-chars) + result;
            num = num.slice(0, num.length - chars);
          }
          if (num) {
            result = num + result;
          }
          return result;
        }

        /**
         * zpF:一个数字字符串，从右到左每隔3位加入一个逗号(1234567890 --> 1,234,567,890)
         */;
        GameTools.toThousands = function toThousands(src) {
          return GameTools.formatStr(src, ",", 3);
        }

        /**
         * zpF:转换为万字
         */;
        GameTools.to10Thousands = function to10Thousands(src) {
          return GameTools.formatStr(src, " ", 4);
        }

        /**
         * zpF:数字转x.x(万)
         * @param src
         * @returns {number}
         */;
        GameTools.toWan = function toWan(src) {
          return Math.floor(src / 1000) / 10;
        }

        /**
         * zpF:随机数字方法，有区间
         * @param min 最小值
         * @param max 最大值
         * @param isInt 是否整数
         * @returns {number} 随机数
         */;
        GameTools.randNum = function randNum(min, max, isInt) {
          min = min || 0;
          max = max || 0;
          var offset = max - min;
          var num = min + Math.random() * offset;
          return isInt ? Math.floor(num) : num;
        }

        /**
         * zpF:金额小写转大写
         * @param n 金额
         * @returns {*} 返回格式化字符串
         */;
        GameTools.convertMoneyToCapitals = function convertMoneyToCapitals(n) {
          if (n == 0) {
            return "零";
          }
          if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return "数据非法";
          var unit = "万千百拾亿千百拾万千百拾元",
            str = "";
          n += "";
          var p = n.indexOf('.');
          if (p >= 0) return "数据非法";
          unit = unit.substr(unit.length - n.length);
          for (var i = 0; i < n.length; i++) str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
          return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "");
        };
        /**
         * 获取是否旁观玩家
         * @param chairID 椅子号，如果不传，默认是KernelData.chairID
         */
        GameTools.getIsWatcher = function getIsWatcher(chairID) {
          if (chairID === void 0) {
            chairID = null;
          }
          var id = chairID || PokerManager.inst.myChairID;
          return id == 0xFFFF;
        }

        /**
         *  zpF 动态设置精灵中的图片
         * @param node 节点
         * @param atlas 图集
         * @param spriteName 图片的名字
         */;
        GameTools.showSpriteFrame = function showSpriteFrame(node, atlas, spriteName) {
          var frame = atlas.getSpriteFrame(spriteName);
          var sprite = node.getComponent(Sprite);
          if (sprite && frame) {
            sprite.spriteFrame = frame;
          } else {
            Logger.error("showSpriteFrame 错误:" + spriteName);
          }
        };
        /**
         * zpF 获取字节长度，中文两个字节，英文一个字节
         * @param str
         * @returns {number}
         */
        GameTools.getStrInBytes = function getStrInBytes(str) {
          var bytesCount = 0;
          for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c))
              //匹配双字节
              {
                bytesCount += 1;
              } else {
              bytesCount += 2;
            }
          }
          return bytesCount;
        }

        /**
         * zpF 隐藏或显示子节点
         * @param node 父节点
         * @param active 显示或隐藏
         */;
        GameTools.setChildVisible = function setChildVisible(node, active) {
          if (!node || !node.children || node.childrenCount < 1) {
            return;
          }
          node.children.forEach(function (childNode) {
            childNode.active = active;
          });
        }

        /**
         * 测距
         */;
        GameTools.getDistance = function getDistance(gps1, gps2) {
          if (!gps1 || !gps2) return 0;
          console.log("gps", gps1, gps2);
          var arr1 = gps1.split(',');
          var arr2 = gps2.split(',');
          if (arr1 && arr2 && arr1.length === 2 && arr2.length === 2) return GameTools.getFlatternDistance(arr1[0], arr1[1], arr2[0], arr2[1]);
          return 0;
        };
        /**
         * 测距2
         * @param {Object} lat1
         * @param {Object} lng1
         * @param {Object} lat2
         * @param {Object} lng2
         */
        GameTools.getFlatternDistance = function getFlatternDistance(lat1, lng1, lat2, lng2) {
          lat1 = parseFloat(lat1);
          lng1 = parseFloat(lng1);
          lat2 = parseFloat(lat2);
          lng2 = parseFloat(lng2);
          var f = GameTools.rad((lat1 + lat2) / 2);
          var g = GameTools.rad((lat1 - lat2) / 2);
          var l = GameTools.rad((lng1 - lng2) / 2);
          var sg = Math.sin(g);
          var sl = Math.sin(l);
          var sf = Math.sin(f);
          var s, c, w, r, d, h1, h2;
          var a = GameTools.EARTH_RADIUS;
          var fl = 1 / 298.257;
          sg = sg * sg;
          sl = sl * sl;
          sf = sf * sf;
          s = sg * (1 - sl) + (1 - sf) * sl;
          c = (1 - sg) * (1 - sl) + sf * sl;
          w = Math.atan(Math.sqrt(s / c));
          r = Math.sqrt(s * c) / w;
          d = 2 * w * a;
          h1 = (3 * r - 1) / 2 / c;
          h2 = (3 * r + 1) / 2 / s;
          var result = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
          result = Math.round(result);
          console.log("结算结果", result);
          return result;
        };
        //单位M
        GameTools.rad = function rad(d) {
          return d * GameTools.PI / 180.0;
        }

        /**
         * 版本号比较，一般index=1表示比较前2位版本好
         * @static
         * @param {*} versionA
         * @param {*} versionB
         * @param {*} idx   比较大位数索引，-1表示全部比较大小，>0表示从左到右的位数，
         * 如1.2.3 -1表示匹配1.2.3 ，0表示只比较主版本1，1表示比较主版本和次版本即0和1位，2表示比较build版本
         * @returns 大于0表示A高于B的版本
         * @memberof GameTools
         */;
        GameTools.versionCompare = function versionCompare(versionA, versionB, idx) {
          if (idx === void 0) {
            idx = 1;
          }
          var vA = versionA.split('.');
          var vB = versionB.split('.');
          var size = Math.min(vA.length, vB.length);
          // 判断比较的位数
          if (idx >= 0) {
            size = Math.min(idx + 1, size);
          }
          for (var i = 0; i < size; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) {
              continue;
            } else {
              return a - b;
            }
          }
          if (idx == -1 && vB.length > vA.length) {
            return -1;
          } else {
            return 0;
          }
        };
        /**
         * 版本号比较
         * @static
         * @param {*} versionA
         * @param {*} versionB
         * @returns 大于0表示A高于B的版本
         * @memberof GameTools
         */
        GameTools.versionCompareHandle = function versionCompareHandle(versionA, versionB) {
          var vA = versionA.split('.');
          var vB = versionB.split('.');
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) {
              continue;
            } else {
              return a - b;
            }
          }
          if (vB.length > vA.length) {
            return -1;
          } else {
            return 0;
          }
        };
        GameTools.setLabelStr = function setLabelStr(str, targetNode) {
          targetNode.getComponent(Label).string = str;
        };
        GameTools.readLocalImg = function readLocalImg(url, targetNode, trimMode) {
          if (trimMode === void 0) {
            trimMode = 0;
          }
          return new Promise(function (resolve, reject) {
            if (url.indexOf(".jpg") != -1 || url.indexOf(".png") != -1) {
              url = url.substr(0, url.length - 4);
            }
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, url + "/spriteFrame", SpriteFrame, function (err, spriteFrame) {
              if (err) return console.error(err);
              if (!targetNode) return resolve(spriteFrame);
              var sprite = targetNode.getComponent(Sprite);
              if (sprite.spriteFrame != spriteFrame) {
                sprite.spriteFrame = spriteFrame;
              }
              if (trimMode == 1) {
                sprite.sizeMode = Sprite.SizeMode.TRIMMED;
                sprite.trim = true;
              }
              resolve(spriteFrame);
            });
          });
        }

        //替换“aa{0}a{1}aa”
        ;

        GameTools.getStringReplace = function getStringReplace(s) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }
          if (param && param.length) {
            return s.replace(/\{(\d+)\}/g, function (s, i) {
              return param[i];
            });
          } else {
            return s;
          }
        }

        //使用正则替换，每隔三个数加一个','
        ;

        GameTools.getThreeDotNum = function getThreeDotNum(a) {
          var str = a + "";
          var ret = str.replace(/\B(?=(?:\d{3})+\b)/g, ',');
          return ret;
        };
        GameTools.setGray = function setGray(root, isGray) {
          var _this = this;
          if (isGray === void 0) {
            isGray = true;
          }
          if (!root) return;
          // 获取 Sprite 或 Label 组件
          var targetSprite = root.getComponent(Sprite);
          var targetLabel = root.getComponent(Label);
          if (targetSprite) {
            targetSprite.grayscale = isGray;
          }
          // 递归处理子节点
          root.children.forEach(function (child) {
            _this.setGray(child, isGray);
          });
        };
        GameTools.nFormatter = function nFormatter(num, digits) {
          if (digits === void 0) {
            digits = 2;
          }
          var si = [{
            value: 1,
            symbol: ""
          }, {
            value: 1E3,
            symbol: "K"
          }, {
            value: 1E6,
            symbol: "M"
          }, {
            value: 1E9,
            symbol: "B"
          }, {
            value: 1E12,
            symbol: "T"
          }
          // { value: 1E15, symbol: "P" },
          // { value: 1E18, symbol: "E" }
          ];

          var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
          var i;
          for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
              break;
            }
          }
          return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        }

        /**
         * zpF 获取H5版本中的浏览器参数
         * @param name 参数名字
         * @returns {string}
         * @constructor
         */;
        GameTools.GetQueryString = function GetQueryString(name) {
          if (sys.isBrowser) {
            //浏览器就跳转吧
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
          }
        };
        return GameTools;
      }());
      GameTools.wxLoginCallBack = null;
      /**
       * zpF:微信分享的回调
       * @type  (errCode)=>{}
       */
      GameTools.wxShareCallBack = null;
      GameTools.PI = Math.PI;
      GameTools.EARTH_RADIUS = 6378137.0;
      GameTools.MUSIC_ON_OFF_KEY = "MUSIC_ON_OFF";
      GameTools.EFFECT_ON_OFF_KEY = "EFFECT_ON_OFF";
      GameTools.UUID_KEY = "UUID_KEY";
      GameTools.OPEN_ID_KEY = "OPEN_ID_KEY";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GD.ts", ['cc', './ResourceMgr.ts', './ModuleDef.ts', './UITips.ts', './UILoading.ts', './UIMgr.ts', './GameUILayers.ts'], function (exports) {
  var cclegacy, find, Prefab, instantiate, NodeEventType, Widget, director, Canvas, Label, sys, ResourceMgr, ModuleDef, UITips, UILoading, UIMgr, GameUILayers;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      NodeEventType = module.NodeEventType;
      Widget = module.Widget;
      director = module.director;
      Canvas = module.Canvas;
      Label = module.Label;
      sys = module.sys;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      UITips = module.UITips;
    }, function (module) {
      UILoading = module.UILoading;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3889ciWnW1FUZs1y7dIHM5z", "GD", undefined);

      //by_009:全局对象
      var GD = exports('GD', function GD() {
        this.staticclubID = void 0;
        this.staticisAdmin = void 0;
      });
      GD.clubID = void 0;
      GD.isAdmin = void 0;
      //by_009:观战者id（是旁观者就有座位id）
      GD.watcherID = void 0;
      GD.baoxID = void 0;
      //1是，0否
      //by_009:房间配置
      GD.roomConfig = void 0;
      //by_009:游戏配置
      GD.GameConfig = void 0;
      //by_009:牌逻辑
      GD.GameLogic = void 0;
      // GameLogic: new GameLogic(),
      //金币场，历史结算类型
      GD.goldSettlementType = void 0;
      GD.GameConfig = {
        isDebug: true,
        releaseUrl: "api.toyouonline.com",
        debugUrl: "api.toyouonline.com",
        useSSL: true,
        // versionConfigUrl: "https://res.funnytl.com/test/debug/versionConfig.json",  // test_debug
        // versionConfigUrl: "https://res.funnytl.com/release/private/versionConfig.json",  // private_package 私包
        versionConfigUrl: "http://res.cctienlen.com/game/hotUpdatePdkPrivate/versionConfig.json",
        version: "0.0.0",
        //客户端版本号，每次打原生包时更新，打热更新包不更新
        isAudit: false,
        language: 2 //1中文，2越南，3英文
      };

      var GameTool = exports('GameTool', /*#__PURE__*/function () {
        function GameTool() {}
        //by_009:动态创建面板
        GameTool.createPanel = function createPanel(panelName, cb) {
          console.log("create panel : " + panelName);
          GameTool.showWaitLayer(true);
          var canvas = find("Canvas");
          var panelRoot = canvas.getChildByName("panel_root");
          var self = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, panelName, Prefab, function (err, prefab) {
            GameTool.showWaitLayer(false);
            if (err) {
              console.error(err);
              return;
            }
            self.doCreatePanel(panelRoot, prefab, cb);
          });
        }

        // 根据已有预制体创建
        ;

        GameTool.createPanelByPrefab = function createPanelByPrefab(prefab, cb) {
          console.log("create panel : " + prefab.name);
          var canvas = find("Canvas");
          var panelRoot = canvas.getChildByName("panel_root");
          this.doCreatePanel(panelRoot, prefab, cb);
        };
        GameTool.doCreatePanel = function doCreatePanel(panelRoot, prefab, cb) {
          var newNode = instantiate(prefab);
          newNode.parent = panelRoot;
          newNode.setPosition(0, 0);
          newNode.opacity = 255;
          newNode.active = true;
          GameTool.updateWidget(newNode);

          //添加销毁的事件
          var sprite_splash = find("panel/sprite_splash", newNode);
          if (sprite_splash) {
            sprite_splash.once(NodeEventType.TOUCH_END, function () {
              // AudioControl.playClick();
              newNode.destroy();
            }.bind(this), this);
          }
          //添加销毁的事件
          var btn_close = find("panel/btn_close", newNode);
          if (btn_close) {
            btn_close.once(NodeEventType.TOUCH_END, function () {
              // AudioControl.playClick();
              newNode.destroy();
            }.bind(this), this);
          }
          cb && cb(newNode);
          cb = null;
          return newNode;
        }

        /**by_009:更新对齐组件*/;
        GameTool.updateWidget = function updateWidget(targetNode) {
          var widgets = targetNode.getComponentsInChildren(Widget);
          var currentScene = director.getScene();
          if (currentScene) {
            // 在场景中查找 Canvas 组件
            var canvasComponent = currentScene.getComponentInChildren(Canvas);
            if (canvasComponent) {
              // 获取 Canvas 节点
              var canvasNode = canvasComponent.node;
              for (var i = 0; i < widgets.length; i++) {
                widgets[i].target = canvasNode;
                widgets[i].updateAlignment();
              }
            } else {
              console.error('未找到 Canvas 组件');
            }
          }
        }

        //by_009:创建预制
        ;

        GameTool.createPrefab = function createPrefab(panelName, cb) {
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, panelName, Prefab, function (err, prefab) {
            if (err) {
              console.error(err);
              return;
            }
            var newNode = instantiate(prefab);
            if (cb) {
              cb(newNode);
              cb = null;
            }
          });
        }

        //by_009:显示文本提示
        ;

        GameTool.showTextTips = function showTextTips(value) {
          var canvas = find("Canvas");
          var panelRoot = canvas.getChildByName("panel_root");
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, "kernel/PublicPrefab/UITips/UITips", Prefab, function (err, prefab) {
            var ui = GameTool.doCreatePanel(panelRoot, prefab);
            ui.getComponent(UITips).showText(value);
          });
        };
        GameTool.setWaitNode = function setWaitNode(prefab) {
          GameTool._waitNode = instantiate(prefab);
          GameTool._waitNode.active = false;
          var parent = UIMgr.inst.getLayerNode(GameUILayers.LOADING);
          parent.addChild(GameTool._waitNode);
        };
        GameTool.showWaitLayer = function showWaitLayer(isShow) {
          if (GameTool._waitNode) {
            GameTool._waitNode.getComponent(UILoading).showPanel(isShow, "");
          }
        };
        GameTool.destroyWaitLayer = function destroyWaitLayer() {
          if (GameTool._waitNode) {
            GameTool._waitNode.destroy();
            GameTool._waitNode = null;
          }
        }
        //by_009:消息框
        ;

        GameTool.messageBox = function messageBox(text, cb1, cb2) {
          var _this = this;
          GameTool.createPanel("kernel/PublicPrefab/UIDialogBox/UIMessageBox", function (newNode) {
            find("panel/content", newNode).getComponent(Label).string = text || "";
            find("panel/btns/btn_confirm", newNode).on(NodeEventType.TOUCH_END, function () {
              if (cb1) {
                cb1();
              }
              newNode.destroy();
            }, _this);
            find("panel/btns/btn_cancel", newNode).on(NodeEventType.TOUCH_END, function () {
              if (cb2) {
                cb2();
              }
              newNode.destroy();
            }, _this);
            find("panel/btns/btn_cancel", newNode).active = !!cb2;
          });
        }

        // 显示规则提示
        ;

        GameTool.showRuletip = function showRuletip(rule_txt) {
          // if (rule_txt) {
          //     GD.GameTool.createPanel("hall/prefab/panel_rule_tip", (newNode) => {
          //         let panel: panel_rule_tip = newNode.getComponent(panel_rule_tip);
          //         if (panel != null) {
          //             panel.updateView(rule_txt);
          //         }
          //     })
          // }
        }

        //刷新金币场历史结算类型
        ;

        GameTool.updateGoldSettlementType = function updateGoldSettlementType() {
          var gold_settlementType = sys.localStorage.getItem("gold_settlementType");
          if (gold_settlementType) {
            GD.goldSettlementType = gold_settlementType;
          } else {
            GD.goldSettlementType = 1;
          }
        };
        return GameTool;
      }());
      GameTool._waitNode = void 0;
      window["GD"] = GD;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseConfigContainer.ts', './ResourceMgr.ts', './ModuleDef.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, BaseConfigContainer, ResourceMgr, ModuleDef, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cfef9Yyw51FE7lxm6hpUb4G", "GlobalConfigContainer", undefined);
      var GlobalData = exports('GlobalData', function GlobalData() {
        this.config_id = void 0;
        this.data = void 0;
      });
      var GlobalDataTitle = {
        config_id: 0,
        data: 1
      };
      var GlobalConfigContainer = exports('GlobalConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(GlobalConfigContainer, _BaseConfigContainer);
        function GlobalConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.globalConfigData = null;
          _this.mapConfig = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "config", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load language err");
            } else {
              _this.globalConfigData = jsonAsset.json;
              if (_this.mapConfig == null) {
                _this.mapConfig = {};
                for (var i = 0; i < _this.globalConfigData.RECORDS.length; i++) {
                  var record = _this.globalConfigData.RECORDS[i];
                  var temp = new GlobalData();
                  temp.config_id = Number(record[GlobalDataTitle.config_id]); // 
                  var data = Number(record[GlobalDataTitle.data]);
                  if (isNaN(data)) {
                    temp.data = record[GlobalDataTitle.data];
                  } else {
                    temp.data = data;
                  }
                  // 
                  _this.mapConfig[temp.config_id] = temp;
                }
              }
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }
        var _proto = GlobalConfigContainer.prototype;
        _proto.getGlobalConfigData = function getGlobalConfigData() {
          return this.globalConfigData;
        };
        _proto.getDataByConfigId = function getDataByConfigId(config_id) {
          var configData = this.mapConfig[config_id];
          return configData.data;
        };
        return GlobalConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './ConfigManager.ts', './BaseConfigContainer.ts', './LanguageConfigContainer.ts', './ModuleDef.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, ResourceMgr, ConfigManager, BaseConfigContainer, LanguageConfigContainer, ModuleDef, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      exports('decodeConfigItemString', decodeConfigItemString);
      cclegacy._RF.push({}, "d7e82nfZVZMt5EZ6yhfCLd4", "ItemConfigContainer", undefined);
      var ItemData = exports('ItemData', function ItemData() {
        this.item_id = void 0;
        this.name = void 0;
        this.desc = void 0;
        this.icon = void 0;
        this.count = void 0;
      });
      var ItemInfo = exports('ItemInfo', function ItemInfo() {
        this.itemId = void 0;
        this.count = void 0;
      });
      var ItemDataTitle = {
        item_id: 0,
        name: 1,
        desc: 2,
        icon: 3
      };
      function decodeConfigItemString(itemStr) {
        var itemList = [];
        var list = itemStr.split("#");
        for (var i = 0; i < list.length; i++) {
          var data = list[i].split("_");
          var itemId = Number(data[0]);
          var count = Number(data[1]);
          itemList.push({
            itemId: itemId,
            count: count
          });
        }
        return itemList;
      }
      var ItemConfigContainer = exports('ItemConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(ItemConfigContainer, _BaseConfigContainer);
        function ItemConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.itemConfigData = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "item", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load item err");
            } else {
              _this.itemConfigData = jsonAsset.json;
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }
        var _proto = ItemConfigContainer.prototype;
        _proto.getItemConfigData = function getItemConfigData() {
          return this.itemConfigData;
        };
        _proto.getItemDataById = function getItemDataById(itemId) {
          var itemData = new ItemData();
          for (var i = 0; i < this.itemConfigData.RECORDS.length; i++) {
            var record = this.itemConfigData.RECORDS[i];
            if (record[ItemDataTitle.item_id] == itemId) {
              itemData.item_id = itemId;
              itemData.desc = record[ItemDataTitle.desc];
              itemData.name = record[ItemDataTitle.name];
              itemData.icon = record[ItemDataTitle.icon];
              var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
              itemData.name = langConfig.getLang(itemData.name);
              return itemData;
            }
          }
          return null;
        };
        return ItemConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IWait.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0aec9SkbzlOfbkFIgMhaojm", "IWait", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KernelDefine.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5da01nCUNBFI5vIU0xKMiVO", "KernelDefine", undefined);
      //游戏常量定义
      var gameConst = exports('gameConst', {
        //玩家状态
        US_NULL: 0x00,
        //没有状态
        US_FREE: 0x01,
        //站立状态
        US_SIT: 0x02,
        //坐下状态
        US_READY: 0x03,
        //同意状态
        US_PLAYING: 0x05,
        //游戏状态
        //桌子状态
        GAME_STATUS_FREE: 0,
        //空闲状态
        GAME_STATUS_PLAY: 100,
        //游戏状态
        GAME_STATUS_WAIT: 200,
        //等待状态
        //游戏结束原因
        GER_NORMAL: 0x00,
        //常规结束
        GER_DISMISS: 0x01,
        //游戏解散
        GER_USER_LEAVE: 0x02,
        //用户离开
        GER_NETWORK_ERROR: 0x03,
        //网络错误
        //游戏模式
        START_MODE_ALL_READY: 0x00,
        //所有准备
        START_MODE_FULL_READY: 0x01,
        //满人开始
        START_MODE_HUNDRED: 0x02,
        //百人游戏

        //请求失败类型
        KICK_TYPE: 0x01,
        //踢人

        INVALID_CHAIR: 0xFFFF //观战的人的座位号
      });
      //框架消息
      var gameCMD = exports('gameCMD', {
        //登入命令
        MDM_GR_LOGON: 1,
        //登入主命令
        //请求
        SUB_GR_LOGON_ACCOUNTS: 1,
        //帐号登入
        //返回
        SUB_GR_LOGON_SUCCESS: 100,
        //登录成功
        SUB_GR_LOGON_FAILURE: 101,
        //登录失败
        //用户命令
        MDM_GR_USER: 2,
        //用户主命令
        //请求
        SUB_GR_USER_SIT_DOWN: 1,
        //坐下命令
        SUB_GR_USER_STANDUP: 2,
        //起立命令
        //返回
        SUB_GR_USER_STATUS: 100,
        //用户状态
        SUB_GR_USER_ENTER: 101,
        //用户进入
        SUB_GR_USER_SCORE: 102,
        //用户分数
        SUB_GR_USER_ONLINE: 103,
        // 用户上线/掉线
        //游戏命令
        MDM_GF_GAME: 3,
        //游戏主命令
        //框架命令
        MDM_GF_FRAME: 4,
        //框架主命令
        //用户命令
        SUB_GF_GAME_OPTION: 1,
        //游戏配置
        SUB_GF_USER_READY: 2,
        //用户准备
        SUB_GF_USER_CHAT: 3,
        //用户聊天
        SUB_GF_DISMISS_START: 4,
        //解散
        SUB_GF_DISMISS_AGREE: 5,
        //同意/不同意解散
        SUB_GF_DISMISS_END: 6,
        //结束解散
        SUB_GF_CMD_DIALOG: 7,
        //对话框通知命令
        SUB_GF_USE_ITEM: 8,
        //使用道具 item_id item_num chairID
        SUB_GF_CARD_RECORDER: 9,
        // 记牌器数据
        SUB_GF_SYNC_PLAYER_DATA: 10,
        // 玩家数据同步
        SUB_GF_GET_EXTRA_REWARD: 11,
        // 玩家获取额外奖励
        SUB_GF_APPLY_START: 20,
        //申请开始
        SUB_GF_APPLY_START_AGREE: 21,
        //同意开始/不同意开始
        SUB_GF_APPLY_START_END: 22,
        //结束申请开始

        SUB_GF_GAME_STATUS: 100,
        //游戏状态
        SUB_GF_GAME_SCENE: 101,
        //游戏场景
        SUB_GF_ROOM_INFO: 103,
        //房间信息

        SUB_GF_FORCE_CLOSE: 105,
        //强制关闭窗口
        SUB_GF_REQUEST_FAILURE: 106,
        //请求失败

        SUB_GF_TOAST_MSG: 108,
        //tip消息
        SUB_GF_FISH_NOTICE: 111,
        //捕鱼消息， 用于 同房间不同桌子之间的类似公告的通知， 放在框架这占个坑， 防止后面框架用于111
        SUB_GF_DO_DISMISS_GAME: 115,
        //房间已解散消息
        SUB_GF_DISMISS_GAME_FAILED: 116,
        //房间j解散失败

        SUB_GF_SEAT_CHANG: 117 //位置变动
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguageConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './BaseConfigContainer.ts', './ModuleDef.ts', './Logger.ts', './GameTools.ts', './GD.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, ResourceMgr, BaseConfigContainer, ModuleDef, Logger, GameTools, GD;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      GameTools = module.default;
    }, function (module) {
      GD = module.GD;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a40dV6Vy9MnrjE5LobW1n8", "LanguageConfigContainer", undefined);
      var LanguageData = exports('LanguageData', function LanguageData() {
        this.language_id = void 0;
        this.zh = void 0;
        this.vi = void 0;
        this.en = void 0;
      });
      var LanguageTitle = {
        language_id: 0,
        zh: 1,
        vi: 2,
        en: 3
      };
      var LanguageConfigContainer = exports('LanguageConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(LanguageConfigContainer, _BaseConfigContainer);
        function LanguageConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.configData = null;
          _this.mapConfig = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "language", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load language err");
            } else {
              _this.configData = jsonAsset.json;
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }

        /**
         * 获取语言 id格式为"language_1234"
         * @param id 
         */
        var _proto = LanguageConfigContainer.prototype;
        _proto.getLang = function getLang(id) {
          if (id.indexOf("language_") == -1) {
            return id;
          }
          var langId = Number(id.replace("language_", ""));
          if (isNaN(langId)) {
            return id;
          }
          return this.getLangById(langId);
        };
        _proto.formatLang = function formatLang(id, replacementList) {
          if (id.indexOf("language_") == -1) {
            return id;
          }
          var langId = Number(id.replace("language_", ""));
          if (isNaN(langId)) {
            return id;
          }
          return this.formatLangById(langId, replacementList);
        }

        // 返回格式化后的文字
        ;

        _proto.formatLangById = function formatLangById(id) {
          var str = this.getLangById(id);
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }
          var retStr = this.format(str, param);
          return retStr;
        }

        /**
         * 
         * @param id 根据ID获取文字数据
         */;
        _proto.getLangById = function getLangById(id) {
          var lang = GameTools.GetQueryString("language") || GD.GameConfig.language;
          var langId = id.toString();
          if (this.mapConfig == null) {
            this.mapConfig = {};
            for (var i = 0; i < this.configData.RECORDS.length; i++) {
              var record = this.configData.RECORDS[i];
              var data = new LanguageData();
              data.language_id = record[LanguageTitle.language_id];
              data.zh = record[LanguageTitle.zh];
              data.vi = record[LanguageTitle.vi];
              data.en = record[LanguageTitle.en];
              this.mapConfig[data.language_id] = data;
            }
          }
          var temp = this.mapConfig[langId];
          if (temp) {
            switch (Number(lang)) {
              case 1:
                return temp.zh;
              case 2:
                return temp.vi;
              case 3:
                return temp.en;
              default:
                return langId;
            }
          }
          return langId;
        };
        _proto.format = function format(_format, args) {
          var _this2 = this;
          return _format.replace(/{(\d+(:\w*)?)}/g, function (match, i) {
            //0
            var s = match.split(':');
            if (s.length > 1) {
              i = i[0];
              match = s[1].replace('}', ''); //U
            }

            var arg = _this2.parsePattern(match, args[i]);
            return typeof arg != 'undefined' && arg != null ? arg : "";
          });
        };
        _proto.parsePattern = function parsePattern(match, arg) {
          if (arg == null || arg == undefined) return arg;
          switch (match) {
            case 'L':
              arg = arg.toLowerCase();
              break;
            case 'U':
              arg = arg.toUpperCase();
              break;
            case 'd':
              {
                var splitted = arg.split('-');
                if (splitted.length <= 1) return arg;
                var day = splitted[splitted.length - 1];
                var month = splitted[splitted.length - 2];
                var year = splitted[splitted.length - 3];
                day = day.split('T')[0];
                day = day.split(' ')[0];
                arg = day + '.' + month + '.' + year;
              }
              break;
            case 's':
              {
                var _splitted = arg.replace(',', '').split('.');
                if (_splitted.length <= 1) return arg;
                var time = _splitted[_splitted.length - 1].split(' ');
                if (time.length > 1) time = time[time.length - 1];
                var _year = _splitted[_splitted.length - 1].split(' ')[0];
                var _month = _splitted[_splitted.length - 2];
                var _day = _splitted[_splitted.length - 3];
                arg = _year + "-" + _month + "-" + _day;
                if (time.length > 1) arg += "T" + time;else arg += "T" + "00:00:00";
              }
              break;
            case 'n':
              //Tausender Trennzeichen
              {
                if (isNaN(parseInt(arg)) || arg.length <= 3) break;
                arg = arg.toString();
                var mod = arg.length % 3;
                var output = mod > 0 ? arg.substring(0, mod) : "";
                for (var i = 0; i < Math.floor(arg.length / 3); i++) {
                  if (mod == 0 && i == 0) output += arg.substring(mod + 3 * i, mod + 3 * i + 3);else output += '.' + arg.substring(mod + 3 * i, mod + 3 * i + 3);
                }
                arg = output;
              }
              break;
          }
          return arg;
        };
        return LanguageConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lobby_gold_room.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './CoinMatchConfigContainer.ts', './LanguageConfigContainer.ts', './GD.ts', './SubGameMgr.ts', './UserMgr.ts', './SceneDef.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Component, ConfigManager, CoinMatchConfigContainer, LanguageConfigContainer, GameTool, SubGameMgr, UserMgr, SceneDef, SubGameDef;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      CoinMatchConfigContainer = module.CoinMatchConfigContainer;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      GameTool = module.GameTool;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "09147KUr1lBqoEpgmi1mpet", "lobby_gold_room", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var lobby_gold_room = exports('default', (_dec = ccclass('lobby_gold_room'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(lobby_gold_room, _Component);
        function lobby_gold_room() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          //    //金币场 一打三
          _initializerDefineProperty(_this, "txt_quick", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = lobby_gold_room.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          this.item.active = false;
          tgx.UIMgr.inst.closeAll();
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.updateGoodsInfo();
                case 1:
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
        _proto.bindEvent = function bindEvent() {
          // this.bindObj = [];
          // this.bindObj.push(onfire.on("S_USER_PROP_CHANGED", this.onS_USER_PROP_CHANGED.bind(this)));
        };
        _proto.onDestroy = function onDestroy() {
          // for (let i = 0; i < this.bindObj.length; i++) {
          // onfire.un(this.bindObj[i]);
          // }
        };
        _proto.updateGoodsInfo = function updateGoodsInfo() {
          // let coinMatchConfigContainer = ConfigManager.getInstance().getConfig(CoinMatchConfigContainer) as CoinMatchConfigContainer;
          // let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
          // let itemlist = coinMatchConfigContainer.getCoinItemsByClearingType(1);

          // this.content.removeAllChildren();
          // var itemWidth:number = 0;
          // for (let index = 0; index < itemlist.length; index++) {
          //     let data = itemlist[index];

          //     let item = instantiate(this.item);
          //     item.setParent(this.content);
          //     item.setPosition(new Vec3(0));
          //     item.active = true;
          //     let uiTransform = item.getComponent(UITransform);
          //     itemWidth = uiTransform.contentSize.width;

          //     let base_coin = find("base_coin", item);
          //     let base_desc = find("base_desc", item);
          //     let coin_match_name = find("coin_match_name", item);
          //     let limit_enter_coin = find("p/limit_enter_coin", item);
          //     let temparr = data.limit_enter_coin.split("#");
          //     let min = Number(temparr[0]);
          //     let max = Number(temparr[1]);
          //     if (max == -1) {
          //         GameTools.setLabelStr("" + min / 1000 + "k-∞", limit_enter_coin);
          //     } else {
          //         GameTools.setLabelStr(min / 1000 + "k-" + max / 1000 + "k", limit_enter_coin);
          //     }

          //     GameTools.setLabelStr(GameTools.nFormatter(data.base_coin), base_coin);
          //     GameTools.setLabelStr("" + langConfig.getLang(data.coin_match_name), coin_match_name);
          //     GameTools.setLabelStr("" + langConfig.getLangById(10812), base_desc);
          //     item.on(Node.EventType.TOUCH_END, this.onItemClick.bind(this, data), this);
          // }
        };
        _proto.onItemClick = function onItemClick(data) {
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var temparr = data.limit_enter_coin.split("#");
          var min = Number(temparr[0]);
          var max = Number(temparr[1]);
          var isMoreMoney = false;
          if (Number(UserMgr.inst.coin) < min) {
            //金币不足
            GameTool.showTextTips(langConfig.getLangById(10745));
            return;
          }
          if (max != -1) {
            isMoreMoney = Number(UserMgr.inst.coin) > max;
          }
          if (isMoreMoney) {
            //金币太多
            GameTool.messageBox(langConfig.getLangById(23171), function () {
              this.onQuickStart();
            }.bind(this));
          }
          //todo 进入游戏
          SubGameMgr.inst.MatchRoom(SubGameDef.POKER_PDK_YUENAN, true);
          // SceneUtil.loadScene(SubGameMgr.gameMgr.gameScene);
        }
        //获取推荐的场次索引
        ;

        _proto.getBestIndex = function getBestIndex() {
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var coinMatchConfigContainer = ConfigManager.getInstance().getConfig(CoinMatchConfigContainer);
          var itemlist = coinMatchConfigContainer.getCoinItemsByClearingType(1);
          for (var m = 0; m < itemlist.length; m++) {
            var element = itemlist[m];
            var limit_enter_coin = element.limit_enter_coin;
            var arr = limit_enter_coin.split("#");
            var min = Number(arr[0]);
            var max = Number(arr[1]);
            var coin_match_name = langConfig.getLang(element.coin_match_name);
            var data = {
              index: m,
              coin_match_name: coin_match_name,
              coin_match_id: Number(element.coin_match_id)
            };
            if (max == -1) {
              if (UserMgr.inst.coin > min) {
                return data;
              }
            } else {
              if (UserMgr.inst.coin >= min && UserMgr.inst.coin <= max) {
                return data;
              }
            }
          }
          return {
            index: 0,
            coin_match_name: "",
            coin_match_id: 0
          };
        };
        _proto.onQuickStart = function onQuickStart() {
          var bestData = this.getBestIndex();
          var coinMatchConfigContainer = ConfigManager.getInstance().getConfig(CoinMatchConfigContainer);
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var itemlist = coinMatchConfigContainer.getCoinItemsByClearingType(1);
          //进入游戏
          this.onItemClick(itemlist[bestData.index]);
        };
        _proto.leaveGame = function leaveGame() {
          tgx.SceneUtil.loadScene(SceneDef.LOBBY);
        };
        return lobby_gold_room;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_quick", [_dec4], {
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

System.register("chunks:///_virtual/module_poker_pdk_yuenan", ['./PdkYuNanGameMgr.ts', './EventCenter.ts', './GD.ts', './GameTools.ts', './KernelDefine.ts', './OnGameSyncPlayerGold.ts', './Bar.ts', './UIMessageBox.ts', './UILoading.ts', './UITips.ts', './Singleton2.ts', './TouchEffectHelper.ts', './Utils.ts', './AudioControl.ts', './AudioMgr2.ts', './ConfigManager.ts', './BaseConfigContainer.ts', './CoinMatchConfigContainer.ts', './DuanjuConfigContainer.ts', './FaceConfigContainer.ts', './GlobalConfigContainer.ts', './ItemConfigContainer.ts', './LanguageConfigContainer.ts', './OpenRoomConfigContainer.ts', './PeiMusicConfigContainer.ts', './PDK_Card.ts', './PDK_ConstDef.ts', './PDK_DragCard.ts', './PDK_Game.ts', './PDK_GameLogic.ts', './PDK_Player.ts', './PDK_Result.ts', './PDK_Result_BigItem.ts', './PDK_Result_Player.ts', './PDK_RoomConfig.ts', './PDK_Setting.ts', './PDK_define.ts', './PDK_BattleData.ts', './SaoguangTexture.ts', './lobby_gold_room.ts', './Define4.ts', './GameManager2.ts', './PokerUtils.ts', './PDK_CardFan.ts', './PDK_CardFanSlot.ts', './PDK_CardRecorder.ts', './PDK_CardTitle.ts', './PDK_ChatHelper.ts', './PDK_ChatMenu.ts', './PDK_DismissMenu.ts', './PDK_EmojiComp.ts', './PDK_FlyGold.ts', './PDK_GameEndPerformanceHelper.ts', './PDK_GotoHallHelper.ts', './PDK_HeadframeAni.ts', './PDK_PlayerInfo.ts', './PDK_PlayerInfoPropItem.ts', './PDK_PlayerSoundHelper.ts', './PDK_PropItemHelper.ts', './PDK_RewardBtns.ts', './PDK_RewardItem.ts', './PDK_TopEffectLayer.ts', './PDK_Jackpot.ts', './PDK_JackpotInfo.ts', './RollingNumber.ts', './IWait.ts', './WaitTime.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/OnGameSyncPlayerGold.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0aabcbjjw1MDr/iGe9S1ZUy", "OnGameSyncPlayerGold", undefined);
      var OnGameSyncPlayerGold = exports('default', function OnGameSyncPlayerGold() {
        this.chairID = void 0;
        this.data = void 0;
      });
      var OnGameSyncPlayerGoldItem = exports('OnGameSyncPlayerGoldItem', function OnGameSyncPlayerGoldItem() {
        this.gold = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OpenRoomConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './ConfigManager.ts', './BaseConfigContainer.ts', './LanguageConfigContainer.ts', './ModuleDef.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, ResourceMgr, ConfigManager, BaseConfigContainer, LanguageConfigContainer, ModuleDef, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "96ab3qmgGJOV6iV2rdamCtH", "OpenRoomConfigContainer", undefined);
      var SeverOpenConfig = exports('SeverOpenConfig', function SeverOpenConfig() {
        this.moduleID = void 0;
        //12
        this.roomID = void 0;
        //1
        this.chipType = void 0;
        //房间类型
        this.juShu = void 0;
        //局数
        this.playerCount = void 0;
        //人数
        this.settlementType = void 0;
        //结算方式
        this.bet = void 0;
        //投注数量
        this.createRoomType = void 0;
        //支付类型
        this.cardRecorder = void 0;
      } //是否使用记牌器
      );

      var OpenRoomCostType = exports('OpenRoomCostType', /*#__PURE__*/function (OpenRoomCostType) {
        OpenRoomCostType[OpenRoomCostType["Host"] = 1] = "Host";
        OpenRoomCostType[OpenRoomCostType["Average"] = 2] = "Average";
        OpenRoomCostType[OpenRoomCostType["Winer"] = 3] = "Winer";
        return OpenRoomCostType;
      }({})); //赢家支付
      var OpenRoomBetType = exports('OpenRoomBetType', /*#__PURE__*/function (OpenRoomBetType) {
        OpenRoomBetType[OpenRoomBetType["Score"] = 1] = "Score";
        OpenRoomBetType[OpenRoomBetType["Coin"] = 2] = "Coin";
        return OpenRoomBetType;
      }({})); //金币
      var ClearingType = exports('ClearingType', /*#__PURE__*/function (ClearingType) {
        ClearingType[ClearingType["PokerNum"] = 1] = "PokerNum";
        ClearingType[ClearingType["OneBattleThree"] = 2] = "OneBattleThree";
        return ClearingType;
      }({})); //金币

      //每条配置
      var OpenRoomItemData = exports('OpenRoomItemData', function OpenRoomItemData() {
        this.key = void 0;
        //字段值
        this.cfg = void 0;
        //具体配置
        this.title = void 0;
        //名称
        this.childArray = void 0;
      } //子项配置
      );

      //每条配置中子项的配置
      var OpenRoomChildItemData = exports('OpenRoomChildItemData', function OpenRoomChildItemData() {
        this.desc = void 0;
        //描述
        this.value = void 0;
      } //具体值
      );

      var OpenRoomData = exports('OpenRoomData', function OpenRoomData() {
        this.id = void 0;
        this.game_id = void 0;
        //tien len
        this.room_name = void 0;
        //开房名称
        this.play_count = void 0;
        //开房局数
        this.play_number = void 0;
        //开房人数
        this.clearing_type = void 0;
        //游戏结算类型  1=记牌数，2=1打3
        this.bet_type = void 0;
        //投注类型 1=分数 2=金币
        this.number = void 0;
        //投注数量
        this.limit_enter = void 0;
        //进场金币数量限制
        this.cost_type = void 0;
        //支付类型 1=房主支付，2=均摊支付（多人均分向上取整），3=赢家支付
        this.play_cost = void 0;
        //开房消耗（与局数相关联）格式：itemid_number#itemid_number
        this.commission = void 0;
        //抽水佣金（中间用&隔开）
        this.take_notes = void 0;
      } //是否可以使用记牌器1=是，2=否
      );

      var OpenRoomTitle = {
        id: 0,
        game_id: 1,
        room_name: 2,
        play_count: 3,
        play_number: 4,
        clearing_type: 5,
        bet_type: 6,
        number: 7,
        limit_enter: 8,
        cost_type: 9,
        play_cost: 10,
        commission: 11,
        take_notes: 12
      };
      var OpenRoomConfigContainer = exports('OpenRoomConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(OpenRoomConfigContainer, _BaseConfigContainer);
        function OpenRoomConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.configData = null;
          _this.mapConfigArray = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "open_room", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load open_room err");
            } else {
              _this.configData = jsonAsset.json;
              _this.mapConfigArray = [];
              for (var i = 0; i < _this.configData.RECORDS.length; i++) {
                var record = _this.configData.RECORDS[i];
                var data = new OpenRoomData();
                data.id = record[OpenRoomTitle.id];
                data.game_id = record[OpenRoomTitle.game_id];
                data.room_name = record[OpenRoomTitle.room_name];
                data.play_count = record[OpenRoomTitle.play_count];
                data.play_number = record[OpenRoomTitle.play_number];
                data.clearing_type = record[OpenRoomTitle.clearing_type];
                data.bet_type = record[OpenRoomTitle.bet_type];
                data.number = record[OpenRoomTitle.number];
                data.limit_enter = record[OpenRoomTitle.limit_enter];
                data.cost_type = record[OpenRoomTitle.cost_type];
                data.play_cost = record[OpenRoomTitle.play_cost];
                data.commission = record[OpenRoomTitle.commission];
                data.take_notes = record[OpenRoomTitle.take_notes];
                _this.mapConfigArray.push(data);
              }
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }

        /**
         * @param bet_type 
         */
        var _proto = OpenRoomConfigContainer.prototype;
        _proto.getOpenRoomCfgBybetType = function getOpenRoomCfgBybetType(bet_type) {
          for (var m = 0; m < this.mapConfigArray.length; m++) {
            var element = this.mapConfigArray[m];
            if (element.bet_type == bet_type) {
              return element;
            }
          }
          return null;
        }

        /**
         * @param bet_type 
         */;
        _proto.getOpenRoomCfgArrayBybetType = function getOpenRoomCfgArrayBybetType(bet_type) {
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var arr = [];
          for (var m = 0; m < this.mapConfigArray.length; m++) {
            var element = this.mapConfigArray[m];
            if (element.bet_type == bet_type) {
              for (var key in element) {
                var cfg = element[key];
                var o = new OpenRoomItemData();
                o.key = key + "";
                o.cfg = cfg;
                o.title = "";
                o.childArray = [];
                var tempArr = void 0;
                switch (key + "") {
                  case "play_count":
                    o.title = langConfig.getLangById(10804);
                    tempArr = cfg.split("#");
                    for (var _m = 0; _m < tempArr.length; _m++) {
                      var object = tempArr[_m];
                      var childitem = new OpenRoomChildItemData();
                      childitem.value = Number(object);
                      childitem.desc = childitem.value + "";
                      o.childArray.push(childitem);
                    }
                    break;
                  case "play_number":
                    o.title = langConfig.getLangById(10805);
                    tempArr = cfg.split("#");
                    for (var _m2 = 0; _m2 < tempArr.length; _m2++) {
                      var _object = tempArr[_m2];
                      var _childitem = new OpenRoomChildItemData();
                      _childitem.value = Number(_object);
                      _childitem.desc = _childitem.value + "";
                      o.childArray.push(_childitem);
                    }
                    break;
                  case "clearing_type":
                    o.title = langConfig.getLangById(10806);
                    tempArr = cfg.split("#");
                    for (var _m3 = 0; _m3 < tempArr.length; _m3++) {
                      var _object2 = tempArr[_m3];
                      var _childitem2 = new OpenRoomChildItemData();
                      _childitem2.value = Number(_object2);
                      if (_childitem2.value == ClearingType.PokerNum) {
                        _childitem2.desc = langConfig.getLangById(10010);
                      } else if (_childitem2.value == ClearingType.OneBattleThree) {
                        _childitem2.desc = langConfig.getLangById(10009);
                      }
                      o.childArray.push(_childitem2);
                    }
                    break;
                  case "number":
                    o.title = langConfig.getLangById(10812);
                    tempArr = cfg.split("#");
                    for (var _m4 = 0; _m4 < tempArr.length; _m4++) {
                      var _object3 = tempArr[_m4];
                      var _childitem3 = new OpenRoomChildItemData();
                      _childitem3.value = Number(_object3);
                      _childitem3.desc = _childitem3.value / 1000 + "k";
                      o.childArray.push(_childitem3);
                    }
                    break;
                  case "cost_type":
                    o.title = langConfig.getLangById(10851);
                    tempArr = cfg.split("#");
                    for (var _m5 = 0; _m5 < tempArr.length; _m5++) {
                      var _object4 = tempArr[_m5];
                      var _childitem4 = new OpenRoomChildItemData();
                      _childitem4.value = Number(_object4);
                      if (_childitem4.value == OpenRoomCostType.Host) {
                        _childitem4.desc = langConfig.getLangById(10852);
                      } else if (_childitem4.value == OpenRoomCostType.Average) {
                        _childitem4.desc = langConfig.getLangById(10853);
                      } else if (_childitem4.value == OpenRoomCostType.Winer) {
                        _childitem4.desc = langConfig.getLangById(10854);
                      }
                      o.childArray.push(_childitem4);
                    }
                    break;
                  case "take_notes":
                    o.title = langConfig.getLangById(10807);
                    tempArr = cfg.split("#");
                    for (var _m6 = 0; _m6 < tempArr.length; _m6++) {
                      var _object5 = tempArr[_m6];
                      var _childitem5 = new OpenRoomChildItemData();
                      _childitem5.value = Number(_object5);
                      if (_childitem5.value == 1) {
                        _childitem5.desc = langConfig.getLangById(10808);
                      } else {
                        _childitem5.desc = langConfig.getLangById(10809);
                      }
                      o.childArray.push(_childitem5);
                    }
                    break;
                }
                if (bet_type == OpenRoomBetType.Score) {
                  if (key == "play_count" || key == "play_number" || key == "clearing_type" || key == "cost_type" || key == "take_notes") {
                    if (key == "cost_type" && Number(cfg) == 0) ;else {
                      arr.push(o);
                    }
                  }
                } else if (bet_type == OpenRoomBetType.Coin) {
                  if (key == "play_count" || key == "play_number" || key == "number" || key == "clearing_type" || key == "cost_type" || key == "take_notes") {
                    arr.push(o);
                  }
                }
              }
            }
          }
          return arr;
        }

        // 金币场

        // 局数：8#16#32
        // 人数：2#3#4
        // 结算类型：记牌数#1打3
        // 投注数量：1000#2000#5000#10000#20000#50000#100000#200000#500000
        // 支付类型：房主支付#均摊支付#赢家支付
        // 使用记牌器：是#否
        //                             房卡图标X实际数量
        // tips：id=10817

        // 积分场

        // 局数：8#16#32
        // 人数：2#3#4
        // 结算类型：记牌数#1打3
        // 支付类型：房主支付#均摊支付#赢家支付
        // 使用记牌器：是#否
        //                             房卡图标X实际数量
        // tips：id=10817
        ;

        return OpenRoomConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_BattleData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_define.ts', './Singleton2.ts', './EventCenter.ts', './PokerUtils.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, sys, gameEvent, Singleton, EventCenter, PokerUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      gameEvent = module.gameEvent;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      EventCenter = module.default;
    }, function (module) {
      PokerUtils = module.PokerUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22b55zXsChKAZbupFqIQdNu", "PDK_BattleData", undefined);
      var PDK_BattleData = exports('default', /*#__PURE__*/function (_Singleton) {
        _inheritsLoose(PDK_BattleData, _Singleton);
        // {rewardList: string[]}
        function PDK_BattleData() {
          var _this;
          _this = _Singleton.call(this) || this;
          //    // 本地存储
          _this.local_head_auto_record = "local_head_auto_record";
          //    // 是否自动记牌
          _this.m_isAutoRecordCards = undefined;
          //    // 是否已使用记牌器
          _this.m_isUseRecorder = false;
          //    // 已经出的牌
          _this.m_outCards = [];
          //    // 上次出牌的座位号
          _this.lastSeat = -1;
          //    // 上次出牌的牌面值
          _this.lastCardValues = [];
          //    // 是否在战斗中 未开始 已结束的时候为false
          _this.isInBattle = false;
          _this.enableCardRecorder = false;
          _this.extraRewardData = null;
          return _this;
        }
        var _proto = PDK_BattleData.prototype;
        _proto.clear = function clear() {
          PDK_BattleData.firstSitDown = false;
          this.m_isAutoRecordCards = undefined;
          this.m_isUseRecorder = undefined;
          this.m_outCards.length = 0;
          this.lastSeat = -1;
          this.lastCardValues.length = 0;
          this.isInBattle = false;
        }
        //    // 设置上一次出牌数据
        ;

        _proto.setLastChupai = function setLastChupai(seat, cards) {
          // console.log("set last chupai : " + seat);
          this.lastSeat = seat;
          this.lastCardValues.length = 0;
          for (var i = 0; i < cards.length; i++) {
            var value = PokerUtils.getCardRank(cards[i]);
            this.lastCardValues.push(value);
          }
        }
        //    // 获取是否自动记牌
        ;
        //    // 记录已出卡牌
        _proto.recordOutCards = function recordOutCards(cards) {
          for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (this.m_outCards.indexOf(card) == -1) {
              this.m_outCards.push(card);
            }
          }
          EventCenter.emitEvent(gameEvent.EVENT_RECORD_OUT_CARD, cards);
        }
        //    // 获取已出卡牌数据
        ;
        //    // 游戏开始回调
        _proto.onGameStart = function onGameStart() {
          this.clear();
          this.extraRewardData = null;
          this.isInBattle = true;
          EventCenter.emitEvent(gameEvent.EVENT_GAME_ROUND_START);
        };
        _proto.onGameFinish = function onGameFinish() {
          this.clear();
          this.isInBattle = false;
          EventCenter.emitEvent(gameEvent.EVENT_GAME_ROUND_FINISH);
        };
        _proto.onGameExit = function onGameExit() {
          this.clear();
          this.extraRewardData = null;
        };
        _proto.checkUseRecorderItem = function checkUseRecorderItem() {
          // if (!this.enableCardRecorder) return;

          // let item = KernelData.pack[1003];
          // if (item != null && item.cnt != 0) {
          // let data = {
          // item_id: 1003,
          // toChairID: KernelData.chairID
          // }
          // clientKernel.use_item(data);
          // }
        };
        _createClass(PDK_BattleData, [{
          key: "isAutoRecordCards",
          get: function get() {
            if (this.m_isAutoRecordCards == null) {
              var str = sys.localStorage.getItem(this.local_head_auto_record);
              if (str == null) {
                this.m_isAutoRecordCards = true;
                sys.localStorage.setItem(this.local_head_auto_record, true);
              } else {
                this.m_isAutoRecordCards = str == "true";
              }
            }
            return this.m_isAutoRecordCards;
          }
          //    // 设置是否自动记牌
          ,

          set: function set(value) {
            this.m_isAutoRecordCards = value;
            sys.localStorage.setItem(this.local_head_auto_record, value);
          }
        }, {
          key: "outCards",
          get: function get() {
            return this.m_outCards;
          }
          //    // 设置使用记牌器状态
        }, {
          key: "isUseRecorder",
          get: function get() {
            return this.m_isUseRecorder;
          },
          set: function set(value) {
            this.m_isUseRecorder = value;
            EventCenter.emitEvent(gameEvent.EVENT_USE_RECORDER, value);
          }
        }]);
        return PDK_BattleData;
      }(Singleton));
      PDK_BattleData.firstSitDown = false;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_Card.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define4.ts', './PokerUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Node, Label, SpriteAtlas, find, Component, CARD_RANK, PokerUtils;
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
      Node = module.Node;
      Label = module.Label;
      SpriteAtlas = module.SpriteAtlas;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      CARD_RANK = module.CARD_RANK;
    }, function (module) {
      PokerUtils = module.PokerUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "e731dJN3rtM9Z8DCj3eoLWS", "PDK_Card", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Card = exports('default', (_dec = ccclass('PDKCard'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(SpriteAtlas), _dec12 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Card, _Component);
        function PDK_Card() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //by_009:值
          _initializerDefineProperty(_this, "value", _descriptor, _assertThisInitialized(_this));
          //    //by_009:颜色(小)
          _initializerDefineProperty(_this, "color_mini", _descriptor2, _assertThisInitialized(_this));
          //    //by_009:颜色(大)
          _initializerDefineProperty(_this, "color_big", _descriptor3, _assertThisInitialized(_this));
          //    //by_009:大王
          _initializerDefineProperty(_this, "daWang", _descriptor4, _assertThisInitialized(_this));
          //    //by_009:大王值
          _initializerDefineProperty(_this, "daWangValue", _descriptor5, _assertThisInitialized(_this));
          //    //by_009:队节点
          _initializerDefineProperty(_this, "teamNode", _descriptor6, _assertThisInitialized(_this));
          //    //by_009:角标
          _initializerDefineProperty(_this, "jiaoBiao", _descriptor7, _assertThisInitialized(_this));
          //    //by_009:张数统计
          _initializerDefineProperty(_this, "count", _descriptor8, _assertThisInitialized(_this));
          //    //by_009:背面
          _initializerDefineProperty(_this, "bm", _descriptor9, _assertThisInitialized(_this));
          //    //by_009:牌图集
          _initializerDefineProperty(_this, "paiAtlas", _descriptor10, _assertThisInitialized(_this));
          //    //by_009:选中
          _initializerDefineProperty(_this, "select", _descriptor11, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this.m_isSelected = false;
          _this._cardID = 0;
          _this._team = 0;
          //    //by_009:角标值
          _this._jiaoBiaoValue = 0;
          return _this;
        }
        var _proto = PDK_Card.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {}
        //    //by_009:设置牌值
        ;

        _proto.setCard = function setCard(value) {
          if (value == null || value == 0) {
            this.bm.active = true;
            return;
          } else {
            this.bm.active = false;
          }
          var cardRank = PokerUtils.getCardRank(value);
          var cardColor = PDK_Card.getCardColor(value);
          if (cardRank == CARD_RANK.JokerSmall || cardRank == CARD_RANK.JokerBig) {
            //大小王
            this.value.node.active = false;
            this.color_mini.node.active = false;
            this.color_big.node.active = false;
            this.daWang.active = true;
            this.daWangValue.spriteFrame = this.paiAtlas.getSpriteFrame("value_" + cardRank);
          } else {
            this.value.node.active = true;
            this.color_mini.node.active = true;
            this.color_big.node.active = true;
            this.daWang.active = false;
            if (value >= 17 && value <= 29) {
              // 梅花
              this.value.spriteFrame = this.paiAtlas.getSpriteFrame(cardRank + "_1");
            } else if (value >= 49 && value <= 61) {
              // 红桃
              this.value.spriteFrame = this.paiAtlas.getSpriteFrame(cardRank + "_0");
            } else {
              this.value.spriteFrame = this.paiAtlas.getSpriteFrame(cardRank + "_" + cardColor % 2);
            }
            this.color_mini.spriteFrame = this.paiAtlas.getSpriteFrame("mini_" + cardColor);
            switch (cardRank) {
              case 11:
              case 12:
              case 13:
              case 27:
              case 28:
              case 29:
              case 43:
              case 44:
              case 45:
              case 59:
              case 60:
              case 61:
                this.color_big.spriteFrame = this.paiAtlas.getSpriteFrame("big_" + this._cardID);
                break;
              default:
                this.color_big.spriteFrame = this.paiAtlas.getSpriteFrame("big_" + cardColor);
                break;
            }
          }
        }
        //by_009:设置敌友
        ;

        _proto.setTeam = function setTeam(value) {
          if (value === void 0) {
            value = 0;
          }
          if (value == 0) {
            this.teamNode.children[0].active = false;
            this.teamNode.children[1].active = false;
          } else if (value == 1) {
            this.teamNode.children[0].active = true;
            this.teamNode.children[1].active = false;
          } else if (value == 2) {
            this.teamNode.children[0].active = false;
            this.teamNode.children[1].active = true;
          }
        }
        //by_009:设置角标值
        ;

        _proto.setjiaoBiaoValue = function setjiaoBiaoValue(value) {
          if (value == null || value == 0) {
            this.jiaoBiao.active = false;
            return;
          }
          this.jiaoBiao.active = true;
          find("value", this.jiaoBiao).getComponent(Label).string = value + "";
        };
        PDK_Card.getCardColor = function getCardColor(cardData) {
          if (cardData <= 13) {
            // 黑桃
            return 3;
          } else if (cardData >= 17 && cardData <= 29) {
            // 梅花
            return 2;
          } else if (cardData >= 33 && cardData <= 45) {
            // 方块
            return 0;
          } else if (cardData >= 49 && cardData <= 61) {
            // 红桃
            return 1;
          }
          return (cardData & 0xF0) >> 4;
        };
        _createClass(PDK_Card, [{
          key: "cardID",
          get: function get() {
            return this._cardID;
          },
          set: function set(value) {
            this._cardID = value;
            this.setCard(this._cardID);
          }
        }, {
          key: "team",
          get: function get() {
            return this._team;
          },
          set: function set(value) {
            this._team = value;
            this.setTeam(value);
          }
        }, {
          key: "jiaoBiaoValue",
          get: function get() {
            return this._jiaoBiaoValue;
          },
          set: function set(value) {
            this._jiaoBiaoValue = value;
            this.setjiaoBiaoValue(value);
          }

          //    // 选中卡牌上阵状态
        }, {
          key: "isSelected",
          get: function get() {
            return this.m_isSelected;
          },
          set: function set(value) {
            this.m_isSelected = value;
          }
        }]);
        return PDK_Card;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color_mini", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color_big", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "daWang", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "daWangValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "teamNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "jiaoBiao", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bm", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "paiAtlas", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "team", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "team"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_CardFan.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ac7aa5sjERNW5ycYEOeQ/j5", "PDK_CardFan", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_CardFan = exports('default', (_dec = ccclass('PDKCardFan'), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_CardFan, _Component);
        function PDK_CardFan() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardFanSlotPrefab", _descriptor, _assertThisInitialized(_this));
          _this.m_cardSlots = [];
          _this.m_isTouchStart = false;
          _this.m_isTouchEnd = false;
          _this.m_currentTouchCard = 0;
          return _this;
        }
        var _proto = PDK_CardFan.prototype;
        _proto.onLoad = function onLoad() {
          // this.clearSlots();
        };
        _proto.start = function start() {
          // EventCenter.onEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK, this.putAllCardBack, this);
        };
        _proto.onDestroy = function onDestroy() {
          // EventCenter.offEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK, this.putAllCardBack, this);
        };
        _proto.clearSlots = function clearSlots() {
          // for (let i = 0; i < this.m_cardSlots.length; i++) {
          // let slot = this.m_cardSlots[i];
          // if (slot == null) return;
          // this.destoryOneSlot(slot);
          // }
          // this.m_cardSlots.length = 0;
          // this.node.removeAllChildren();
        };
        _proto.insertOneCard = function insertOneCard(index, card) {
          // if (card == null) return;
          // let slot = this.m_cardSlots[index];
          // if (slot == null) return;
          // slot.slot.addChild(card.node);
          // slot.slot.width = card.node.width;
          // slot.slot.height = card.node.height;
          // card.node.setPosition(0, 0);

          // slot.slot.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
          // slot.slot.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          // slot.slot.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
          // slot.slot.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.initSlot = function initSlot(total) {
          // this.clearSlots();
          // let rotates = this.getArrRotate(total);
          // for (let i = 0; i != total; i++) {
          // let item = cc.instantiate(this.cardFanSlotPrefab);
          // item.setParent(this.node);
          // item.setPosition(0, -3000);
          // item.rotation = rotates[i];
          // let slot: PDK_CardFanSlot = item.getComponent(PDK_CardFanSlot);
          // this.m_cardSlots.push(slot);
          // }
        };
        _proto.addOneCard = function addOneCard(cardId) {
          // let item = cc.instantiate(PDK_Game.ins.cardPrefab);
          // let card: PDK_Card = item.getComponent(PDK_Card);
          // card.cardID = cardId;
        };
        _proto.unfold = function unfold() {
          // let arrRotate = this.getArrRotate(this.m_cardSlots.length);
          // if (arrRotate == null) return;
          // for (let i = 0; i < this.m_cardSlots.length; i++) {
          // let rotate = arrRotate[i];
          // let slot = this.m_cardSlots[i];
          // if (rotate == slot.node.rotation) continue;
          // let act = cc.rotateTo(0.2, rotate).easing(cc.easeBackOut());
          // slot.node.stopAllActions();
          // slot.node.runAction(act);
          // }
        };
        _proto.fold = function fold() {
          // for (let i = 0; i < this.m_cardSlots.length; i++) {
          // let slot = this.m_cardSlots[i];
          // if (0 == slot.node.rotation) continue;
          // let act = cc.rotateTo(0.2, 0).easing(cc.easeBackOut());
          // slot.node.stopAllActions();
          // slot.node.runAction(act);
          // }
        };
        _proto.onTouchStart = function onTouchStart(event) {};
        _proto.onTouchMove = function onTouchMove(event) {};
        _proto.onTouchEnd = function onTouchEnd(event) {};
        _proto.destoryOneSlot = function destoryOneSlot(slot) {
          // if (slot == null || !slot.isValid) return;
          // slot.slot.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
          // slot.slot.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          // slot.slot.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
          // slot.slot.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          // slot.destroy();
        };
        _proto.getArrRotate = function getArrRotate(total) {
          // if (total == 0) return null;
          // let arrRotate: number[] = [];
          // for (let i = 0; i != total; i++) {
          // arrRotate.push(0);
          // }
          // if (total > 13) total = 13;
          // if (total % 2 == 1) {
          //            // 先找中间
          // let center = (total - 1) / 2;
          // arrRotate[center] = 0;
          // let rotate = 0;
          // for (let i = center - 1; i >= 0; i--) {
          // arrRotate[i] = ++rotate;
          // }
          // rotate = 0;
          // for (let i = center + 1; i < total; i++) {
          // arrRotate[i] = --rotate;
          // }
          // }
          // else {
          // let centerRight = total / 2;
          // arrRotate[centerRight] = -0.5
          // let rotate = -0.5;
          // for (let i = centerRight - 1; i >= 0; i--) {
          // arrRotate[i] = ++rotate;
          // }
          // rotate = -0.5;
          // for (let i = centerRight + 1; i < total; i++) {
          // arrRotate[i] = --rotate;
          // }
          // }
          // return arrRotate;
          return [];
        };
        _proto.putAllCardBack = function putAllCardBack() {
          // for (let i = 0; i < this.m_cardSlots.length; i++) {
          // let slot = this.m_cardSlots[i];
          // if (slot.card != null && slot.card.isSelected) {
          // slot.card.isSelected = false;
          // slot.card.select.active = false;
          // }

          // if (slot.slot.y != 3000) {
          // let act = cc.moveTo(0.2, 0, 3000).easing(cc.easeBackOut);
          // slot.node.stopAllActions();
          // slot.node.runAction(act);
          // }
          // }
        };
        return PDK_CardFan;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardFanSlotPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import EventCenter from "../../../../main/script/utils/EventCenter";
      // import { gameExpressionEvent } from "../PDK_define";
      // import PDK_Game from "../PDK_Game";
      // import PDK_CardFanSlot from "./PDK_CardFanSlot";
      // import PDK_Card from "../PDK_Card";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_CardFan extends cc.Component {
      // 
      //     @property(cc.Prefab)
      //     cardFanSlotPrefab: cc.Prefab = null;
      // 
      //     private m_cardSlots: PDK_CardFanSlot[] = [];
      //     private m_isTouchStart: boolean = false;
      //     private m_isTouchEnd: boolean = false;
      //     private m_currentTouchCard: number = 0;
      // 
      //     onLoad() {
      //         this.clearSlots();
      //     }
      // 
      //     start() {
      //         EventCenter.onEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK, this.putAllCardBack, this);
      //     }
      // 
      //     onDestroy() {
      //         EventCenter.offEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK, this.putAllCardBack, this);
      //     }
      // 
      //     public clearSlots() {
      //         for (let i = 0; i < this.m_cardSlots.length; i++) {
      //             let slot = this.m_cardSlots[i];
      //             if (slot == null) return;
      //             this.destoryOneSlot(slot);
      //         }
      //         this.m_cardSlots.length = 0;
      //         this.node.removeAllChildren();
      //     }
      // 
      //     public insertOneCard(index: number, card: PDK_Card) {
      //         if (card == null) return;
      //         let slot = this.m_cardSlots[index];
      //         if (slot == null) return;
      //         slot.slot.addChild(card.node);
      //         slot.slot.width = card.node.width;
      //         slot.slot.height = card.node.height;
      //         card.node.setPosition(0, 0);
      //         
      //         slot.slot.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      //         slot.slot.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      //         slot.slot.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      //         slot.slot.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      //     }
      // 
      //     public initSlot(total: number) {
      //         this.clearSlots();
      //         let rotates = this.getArrRotate(total);
      //         for (let i = 0; i != total; i++) {
      //             let item = cc.instantiate(this.cardFanSlotPrefab);
      //             item.setParent(this.node);
      //             item.setPosition(0, -3000);
      //             item.rotation = rotates[i];
      //             let slot: PDK_CardFanSlot = item.getComponent(PDK_CardFanSlot);
      //             this.m_cardSlots.push(slot);
      //         }
      //     }
      // 
      //     public addOneCard(cardId) {
      //         let item = cc.instantiate(PDK_Game.ins.cardPrefab);
      //         let card: PDK_Card = item.getComponent(PDK_Card);
      //         card.cardID = cardId;
      //     }
      //     
      // 
      //     public unfold() {
      //         let arrRotate = this.getArrRotate(this.m_cardSlots.length);
      //         if (arrRotate == null) return;
      //         for (let i = 0; i < this.m_cardSlots.length; i++) {
      //             let rotate = arrRotate[i];
      //             let slot = this.m_cardSlots[i];
      //             if (rotate == slot.node.rotation) continue;
      //             let act = cc.rotateTo(0.2, rotate).easing(cc.easeBackOut());
      //             slot.node.stopAllActions();
      //             slot.node.runAction(act);
      //         }
      //     }
      // 
      //     public fold() {
      //         for (let i = 0; i < this.m_cardSlots.length; i++) {
      //             let slot = this.m_cardSlots[i];
      //             if (0 == slot.node.rotation) continue;
      //             let act = cc.rotateTo(0.2, 0).easing(cc.easeBackOut());
      //             slot.node.stopAllActions();
      //             slot.node.runAction(act);
      //         }
      //     }
      // 
      //     private onTouchStart(event: cc.Touch) {
      // 
      //     }
      // 
      //     private onTouchMove(event: cc.Touch) {
      // 
      //     }
      // 
      //     private onTouchEnd(event: cc.Touch) {
      // 
      //     }
      //     
      //     private destoryOneSlot(slot:PDK_CardFanSlot) {
      //         if (slot == null || !slot.isValid) return;
      //         slot.slot.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      //         slot.slot.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      //         slot.slot.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      //         slot.slot.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      //         slot.destroy();
      //     }
      // 
      //     private getArrRotate(total: number): number[] {
      //         if (total == 0) return null;
      //         let arrRotate: number[] = [];
      //         for (let i = 0; i != total; i++) {
      //             arrRotate.push(0);
      //         }
      //         if (total > 13) total = 13;
      //         if (total % 2 == 1) {
      //             // 先找中间
      //             let center = (total - 1) / 2;
      //             arrRotate[center] = 0;
      //             let rotate = 0;
      //             for (let i = center - 1; i >= 0; i--) {
      //                 arrRotate[i] = ++rotate;
      //             }
      //             rotate = 0;
      //             for (let i = center + 1; i < total; i++) {
      //                 arrRotate[i] = --rotate;
      //             }
      //         }
      //         else {
      //             let centerRight = total / 2;
      //             arrRotate[centerRight] = -0.5
      //             let rotate = -0.5;
      //             for (let i = centerRight - 1; i >= 0; i--) {
      //                 arrRotate[i] = ++rotate;
      //             }
      //             rotate = -0.5;
      //             for (let i = centerRight + 1; i < total; i++) {
      //                 arrRotate[i] = --rotate;
      //             }
      //         }
      //         return arrRotate;
      //     }
      //     
      // 
      //     private putAllCardBack() {
      //         for (let i = 0; i < this.m_cardSlots.length; i++) {
      //             let slot = this.m_cardSlots[i];
      //             if (slot.card != null && slot.card.isSelected) {
      //                 slot.card.isSelected = false;
      //                 slot.card.select.active = false;
      //             }
      // 
      //             if (slot.slot.y != 3000) {
      //                 let act = cc.moveTo(0.2, 0, 3000).easing(cc.easeBackOut);
      //                 slot.node.stopAllActions();
      //                 slot.node.runAction(act);
      //             } 
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_CardFanSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "eee09R3VsdIMptsNHWk7qIl", "PDK_CardFanSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_CardFanSlot = exports('default', (_dec = ccclass('PDKCardFanSlot'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_CardFanSlot, _Component);
        function PDK_CardFanSlot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "slot", _descriptor, _assertThisInitialized(_this));
          _this.cardId = 0;
          _this.card = null;
          return _this;
        }
        return PDK_CardFanSlot;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "slot", [_dec2], {
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

System.register("chunks:///_virtual/PDK_CardRecorder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_ConstDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component;
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
      Component = module.Component;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "20ff04/+G1OIJ0VZTpyTLql", "PDK_CardRecorder", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_CardRecorder = exports('default', (_dec = ccclass('PDKCardRecorder'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_CardRecorder, _Component);
        function PDK_CardRecorder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mark", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRecorder", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAutoUse", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gouAutoUse", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layout", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "num_bg", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblNum", _descriptor8, _assertThisInitialized(_this));
          _this.RECORDER_ITEM_ID = 1003;
          // 记牌器物品ID
          //    // 是否显示记牌器界面
          _this.m_isShow = false;
          //    // 记牌器标记 按A2345678910JQK顺序
          _this.m_marks = null;
          _this.m_battleData = null;
          _this.bindObj = void 0;
          return _this;
        }
        var _proto2 = PDK_CardRecorder.prototype;
        _proto2.onLoad = function onLoad() {
          // this.m_battleData = PDK_BattleData.instance();
          // this.initUI();
          // this.resetMarks();
          // let isAutoUse: boolean = this.m_battleData.isAutoRecordCards;
          // this.gouAutoUse.active = isAutoUse;
          // if (this.m_battleData.isUseRecorder) {
          // this.onUseRecorder(true);
          // }
          // this.initRecordedCards();
          // this.showRecorderNum();

          // this.btnRecorder.on(cc.Node.EventType.TOUCH_END, this.onBtnRecorder, this);
          // this.btnAutoUse.on(cc.Node.EventType.TOUCH_END, this.onBtnAutoUse, this);

          // this.bindEvent();
          // EventCenter.onEvent(gameEvent.EVENT_RECORD_OUT_CARD, this.onRecordCards, this);
          // EventCenter.onEvent(gameEvent.EVENT_USE_RECORDER, this.onUseRecorder, this);
          // EventCenter.onEvent(gameEvent.EVENT_GAME_ROUND_START, this.onGameRoundStart, this);
          // EventCenter.onEvent(gameEvent.EVENT_GAME_ROUND_FINISH, this.onGameRoundFinish, this);
        };
        _proto2.onDestroy = function onDestroy() {
          // this.m_battleData = null;

          // this.unbindEvent();
          // EventCenter.offEvent(gameEvent.EVENT_RECORD_OUT_CARD, this.onRecordCards, this);
          // EventCenter.offEvent(gameEvent.EVENT_USE_RECORDER, this.onUseRecorder, this);
          // EventCenter.offEvent(gameEvent.EVENT_GAME_ROUND_START, this.onGameRoundStart, this);
          // EventCenter.offEvent(gameEvent.EVENT_GAME_ROUND_FINISH, this.onGameRoundFinish, this);
        };
        _proto2.bindEvent = function bindEvent() {
          // this.bindObj = [];
          // this.bindObj.push(onfire.on("onUseItem", this.onUseItem.bind(this)));
        };
        _proto2.unbindEvent = function unbindEvent() {
          // if (this.bindObj) {
          // for (let i = 0; i < this.bindObj.length; i++) {
          // onfire.un(this.bindObj[i]);
          // }
          // }
        };
        _proto2.initUI = function initUI() {
          // this.mark.active = false;
          // this.cards.active = false;
          // this.cards.opacity = 0;
          // this.cards.scaleX = 0;

          // if (this.m_marks == null) {
          // this.m_marks = [];
          // for (let i = 1; i < 14; i++) {
          // let str = null;
          // if (i == 1) {
          // str = 'A';
          // }
          // else if (i == 11) {
          // str = 'J';
          // }
          // else if (i == 12) {
          // str = 'Q';
          // }
          // else if (i == 13) {
          // str = 'K'
          // }
          // else {
          // str = i.toString();
          // }

          // let node = this.layout.getChildByName(str);
          // let markNode: cc.Node = cc.instantiate(this.mark);
          // node.addChild(markNode);
          // markNode.active = true;
          // markNode.setPosition(0, 0);
          // let mark = new RecoderMark();
          // mark.init(markNode);
          // this.m_marks.push(mark);
          // }
          // }
        };
        _proto2.resetMarks = function resetMarks() {
          // for (let i = 0; i < this.m_marks.length; i++) {
          // let mark = this.m_marks[i];
          // mark.reset();
          // }
        };
        _proto2.onGameRoundStart = function onGameRoundStart() {
          // this.resetMarks();
          // if (this.m_battleData.isAutoRecordCards) {
          // this.m_battleData.checkUseRecorderItem();   // 如果是自动使用 就用一个记牌器
          // }
        };
        _proto2.onGameRoundFinish = function onGameRoundFinish() {
          // this.resetMarks();
          // this.m_battleData.isUseRecorder = false;
        };
        _proto2.initRecordedCards = function initRecordedCards() {
          // let cards = this.m_battleData.outCards;
          // for (let i = 0; i < cards.length; i++) {
          // let card = cards[i];
          // this.recordOneCard(card);
          // }
        };
        _proto2.onRecordCards = function onRecordCards(cards) {
          // for (let i = 0; i < cards.length; i++) {
          // let card = cards[i];
          // this.recordOneCard(card);
          // }
        };
        _proto2.recordOneCard = function recordOneCard(card) {
          // let value = PDK_Card.getCardValue(card);
          // let color = PDK_Card.getCardColor(card);
          // let idx = value - 1;
          // let mark: RecoderMark = this.m_marks[idx];
          // if (mark == null) {
          // throw new Error(" mark is null");
          // }
          // mark.setMark(color);
        };
        _proto2.onUseRecorder = function onUseRecorder(isUse) {
          // if (isUse) {
          // clientKernel.getRecordCardsData();
          // if (!this.m_isShow) {
          //                // 检测到用的时候展开一下
          // this.onShowRecorder();
          // }
          // this.showRecorderNum();
          // }
          // else {
          // if (this.m_isShow) {
          //                // 没用的时候收起
          // this.onShowRecorder();
          // }
          // }
        };
        _proto2.onBtnAutoUse = function onBtnAutoUse() {
          // AudioControl.playClick();
          // let isAutoUse: boolean = this.m_battleData.isAutoRecordCards;
          // let nowAutoUse = !isAutoUse;
          // if (nowAutoUse) {
          //            // 如果是自动使用,并且还没有用过 然后身上还有记牌器的话就使用
          // if (!this.m_battleData.isUseRecorder && this.m_battleData.isInBattle) {
          // let item = KernelData.pack[this.RECORDER_ITEM_ID];
          // if (item != null && item.cnt != 0) {
          // this.m_battleData.checkUseRecorderItem();
          // }
          // }
          // }
          // this.m_battleData.isAutoRecordCards = nowAutoUse;
          // this.gouAutoUse.active = nowAutoUse;
        };
        _proto2.onBtnRecorder = function onBtnRecorder() {
          // AudioControl.playClick();

          //        // if (!this.m_battleData.canUse) {
          //        //     this.onShowRecorder();
          //        //     return;
          //        // }
          // if (this.m_battleData.isUseRecorder) {
          // this.onShowRecorder();
          // }
          // else {
          // let item = KernelData.pack[this.RECORDER_ITEM_ID];
          // if (!item || item.cnt <= 0) {
          //                //记牌器不足
          // let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
          // let jpq_text = langConfig.getLangById(12006)
          // let str = GameTools.getStringReplace(langConfig.getLangById(10721), jpq_text, jpq_text);
          // GD.GameTool.showTextTips(str);
          // return;
          // }
          // if (item != null && item.cnt != 0) {
          // this.m_battleData.checkUseRecorderItem();
          // }
          // else {
          // this.onShowRecorder();
          // }
          // }
        };
        _proto2.onUseItem = function onUseItem(data) {
          // if (data != null) {
          // if (data.item_id == this.RECORDER_ITEM_ID && data.to == KernelData.userID) {
          //                // 如果是用的记牌器并且是自己用的
          // this.m_battleData.isUseRecorder = true;
          // }
          // }
        };
        _proto2.showRecorderNum = function showRecorderNum() {
          // let cnt = 0;
          // let item = KernelData.pack[this.RECORDER_ITEM_ID];
          // if (item) {
          // cnt = item.cnt;
          // }
          // this.lblNum.string = cnt.toString();
        };
        _proto2.onShowRecorder = function onShowRecorder() {
          // let isShow = !this.m_isShow;
          // if (isShow) {
          // if (!this.cards.active) {
          // this.cards.active = true;
          // }
          // let scaleTo = cc.scaleTo(0.5, 1, 1);
          // let fadeIn = cc.fadeIn(0.5);
          // this.cards.stopAllActions();
          // this.cards.runAction(cc.spawn(scaleTo, fadeIn));
          // }
          // else {

          // let scaleTo = cc.scaleTo(0.5, 0, 1);
          // let fadeOut = cc.fadeOut(0.5);
          // this.cards.stopAllActions();
          // this.cards.runAction(cc.spawn(scaleTo, fadeOut));
          // }
          // this.m_isShow = isShow;
        };
        return PDK_CardRecorder;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "mark", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "cards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "btnRecorder", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "btnAutoUse", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "gouAutoUse", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "layout", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "num_bg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "lblNum", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import PDK_BattleData from "../data/PDK_BattleData";
      // import EventCenter from "../../../../main/script/utils/EventCenter";
      // import { gameEvent } from "../PDK_define";
      // import PDK_Card from "../PDK_Card";
      // import { CARD_COLOR } from "../PDK_ConstDef";
      // import { ConfigManager } from "../../../../kernel/ConfigManager";
      // import { LanguageConfigContainer } from "../../../../kernel/Conifg/LanguageConfigContainer";
      // import { AudioControl } from "../../../../main/script/AudioControl";
      // import { GD } from "../../../../public/GD";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_CardRecorder extends cc.Component {
      //     @property(cc.Node)
      //     mark: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     cards: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     btnRecorder: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     btnAutoUse: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     gouAutoUse: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     layout: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     num_bg: cc.Node = null;
      // 
      //     @property(cc.Label)
      //     lblNum: cc.Label = null;
      // 
      //     private RECORDER_ITEM_ID: number = 1003;    // 记牌器物品ID
      // 
      //     // 是否显示记牌器界面
      //     private m_isShow: boolean = false;
      // 
      //     // 记牌器标记 按A2345678910JQK顺序
      //     private m_marks: RecoderMark[] = null;
      // 
      //     private m_battleData: PDK_BattleData = null;
      // 
      //     bindObj: any[];
      // 
      //     onLoad() {
      //         this.m_battleData = PDK_BattleData.instance();
      //         this.initUI();
      //         this.resetMarks();
      //         let isAutoUse: boolean = this.m_battleData.isAutoRecordCards;
      //         this.gouAutoUse.active = isAutoUse;
      //         if (this.m_battleData.isUseRecorder) {
      //             this.onUseRecorder(true);
      //         }
      //         this.initRecordedCards();
      //         this.showRecorderNum();
      // 
      //         this.btnRecorder.on(cc.Node.EventType.TOUCH_END, this.onBtnRecorder, this);
      //         this.btnAutoUse.on(cc.Node.EventType.TOUCH_END, this.onBtnAutoUse, this);
      // 
      //         this.bindEvent();
      //         EventCenter.onEvent(gameEvent.EVENT_RECORD_OUT_CARD, this.onRecordCards, this);
      //         EventCenter.onEvent(gameEvent.EVENT_USE_RECORDER, this.onUseRecorder, this);
      //         EventCenter.onEvent(gameEvent.EVENT_GAME_ROUND_START, this.onGameRoundStart, this);
      //         EventCenter.onEvent(gameEvent.EVENT_GAME_ROUND_FINISH, this.onGameRoundFinish, this);
      //     }
      // 
      //     onDestroy() {
      //         this.m_battleData = null;
      // 
      //         this.unbindEvent();
      //         EventCenter.offEvent(gameEvent.EVENT_RECORD_OUT_CARD, this.onRecordCards, this);
      //         EventCenter.offEvent(gameEvent.EVENT_USE_RECORDER, this.onUseRecorder, this);
      //         EventCenter.offEvent(gameEvent.EVENT_GAME_ROUND_START, this.onGameRoundStart, this);
      //         EventCenter.offEvent(gameEvent.EVENT_GAME_ROUND_FINISH, this.onGameRoundFinish, this);
      //     }
      // 
      //     bindEvent() {
      //         this.bindObj = [];
      //         this.bindObj.push(onfire.on("onUseItem", this.onUseItem.bind(this)));
      //     }
      // 
      //     unbindEvent() {
      //         if (this.bindObj) {
      //             for (let i = 0; i < this.bindObj.length; i++) {
      //                 onfire.un(this.bindObj[i]);
      //             }
      //         }
      //         
      //     }
      // 
      //     private initUI() {
      //         this.mark.active = false;
      //         this.cards.active = false;
      //         this.cards.opacity = 0;
      //         this.cards.scaleX = 0;
      // 
      //         if (this.m_marks == null) {
      //             this.m_marks = [];
      //             for (let i = 1; i < 14; i++) {
      //                 let str = null;
      //                 if (i == 1) {
      //                     str = 'A';
      //                 }
      //                 else if (i == 11) {
      //                     str = 'J';
      //                 }
      //                 else if (i == 12) {
      //                     str = 'Q';
      //                 }
      //                 else if (i == 13) {
      //                     str = 'K'
      //                 }
      //                 else {
      //                     str = i.toString();
      //                 }
      // 
      //                 let node = this.layout.getChildByName(str);
      //                 let markNode: cc.Node = cc.instantiate(this.mark);
      //                 node.addChild(markNode);
      //                 markNode.active = true;
      //                 markNode.setPosition(0, 0);
      //                 let mark = new RecoderMark();
      //                 mark.init(markNode);
      //                 this.m_marks.push(mark);
      //             }
      //         }
      //     }
      // 
      //     private resetMarks() {
      //         for (let i = 0; i < this.m_marks.length; i++) {
      //             let mark = this.m_marks[i];
      //             mark.reset();
      //         }
      //     }
      // 
      // 
      //     private onGameRoundStart() {
      //         this.resetMarks();
      //         if (this.m_battleData.isAutoRecordCards) {
      //             this.m_battleData.checkUseRecorderItem();   // 如果是自动使用 就用一个记牌器
      //         }
      //     }
      // 
      //     private onGameRoundFinish() {
      //         this.resetMarks();
      //         this.m_battleData.isUseRecorder = false;
      //     }
      // 
      //     private initRecordedCards() {
      //         let cards = this.m_battleData.outCards;
      //         for (let i = 0; i < cards.length; i++) {
      //             let card = cards[i];
      //             this.recordOneCard(card);
      //         }
      //     }
      // 
      //     private onRecordCards(cards: number[]) {
      //         for (let i = 0; i < cards.length; i++) {
      //             let card = cards[i];
      //             this.recordOneCard(card);
      //         }
      //     }
      // 
      //     private recordOneCard(card: number) {
      //         let value = PDK_Card.getCardValue(card);
      //         let color = PDK_Card.getCardColor(card);
      //         let idx = value - 1;
      //         let mark: RecoderMark = this.m_marks[idx];
      //         if (mark == null) {
      //             throw new Error(" mark is null");
      //         }
      //         mark.setMark(color);
      //     }
      // 
      //     private onUseRecorder(isUse: boolean) {
      //         if (isUse) {
      //             clientKernel.getRecordCardsData();
      //             if (!this.m_isShow) {
      //                 // 检测到用的时候展开一下
      //                 this.onShowRecorder();
      //             }
      //             this.showRecorderNum();
      //         }
      //         else {
      //             if (this.m_isShow) {
      //                 // 没用的时候收起
      //                 this.onShowRecorder();
      //             }
      //         }
      //     }
      // 
      //     private onBtnAutoUse() {
      //         AudioControl.playClick();
      //         let isAutoUse: boolean = this.m_battleData.isAutoRecordCards;
      //         let nowAutoUse = !isAutoUse;
      //         if (nowAutoUse) {
      //             // 如果是自动使用,并且还没有用过 然后身上还有记牌器的话就使用
      //             if (!this.m_battleData.isUseRecorder && this.m_battleData.isInBattle) {
      //                 let item = KernelData.pack[this.RECORDER_ITEM_ID];
      //                 if (item != null && item.cnt != 0) {
      //                     this.m_battleData.checkUseRecorderItem();
      //                 }
      //             }
      //         }
      //         this.m_battleData.isAutoRecordCards = nowAutoUse;
      //         this.gouAutoUse.active = nowAutoUse;
      //     }
      // 
      //     private onBtnRecorder() {
      //         AudioControl.playClick();
      // 
      //         // if (!this.m_battleData.canUse) {
      //         //     this.onShowRecorder();
      //         //     return;
      //         // }
      //         if (this.m_battleData.isUseRecorder) {
      //             this.onShowRecorder();
      //         }
      //         else {
      //             let item = KernelData.pack[this.RECORDER_ITEM_ID];
      //             if (!item || item.cnt <= 0) {
      //                 //记牌器不足
      //                 let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      //                 let jpq_text = langConfig.getLangById(12006)
      //                 let str = GameTools.getStringReplace(langConfig.getLangById(10721), jpq_text, jpq_text);
      //                 GD.GameTool.showTextTips(str);
      //                 return;
      //             }
      //             if (item != null && item.cnt != 0) {
      //                 this.m_battleData.checkUseRecorderItem();
      //             }
      //             else {
      //                 this.onShowRecorder();
      //             }
      //         }
      //     }
      // 
      //     private onUseItem(data) {
      //         if (data != null) {
      //             if (data.item_id == this.RECORDER_ITEM_ID && data.to == KernelData.userID) {
      //                 // 如果是用的记牌器并且是自己用的
      //                 this.m_battleData.isUseRecorder = true;
      //             }
      //         }
      //     }
      // 
      //     private showRecorderNum() {
      //         let cnt = 0;
      //         let item = KernelData.pack[this.RECORDER_ITEM_ID];
      //         if (item) {
      //             cnt = item.cnt;
      //         }
      //         this.lblNum.string = cnt.toString();
      //     }
      // 
      //     private onShowRecorder() {
      //         let isShow = !this.m_isShow;
      //         if (isShow) {
      //             if (!this.cards.active) {
      //                 this.cards.active = true;
      //             }
      //             let scaleTo = cc.scaleTo(0.5, 1, 1);
      //             let fadeIn = cc.fadeIn(0.5);
      //             this.cards.stopAllActions();
      //             this.cards.runAction(cc.spawn(scaleTo, fadeIn));
      //         }
      //         else {
      // 
      //             let scaleTo = cc.scaleTo(0.5, 0, 1);
      //             let fadeOut = cc.fadeOut(0.5);
      //             this.cards.stopAllActions();
      //             this.cards.runAction(cc.spawn(scaleTo, fadeOut));
      //         }
      //         this.m_isShow = isShow;
      //     }
      // }
      // 
      // class RecoderMark {
      //     lblCount: cc.Label = null;
      //     heart: cc.Node = null;
      //     heart1: cc.Node = null;
      //     spade: cc.Node = null;
      //     spade1: cc.Node = null;
      //     club: cc.Node = null;
      //     club1: cc.Node = null;
      //     diamond: cc.Node = null;
      //     diamond1: cc.Node = null;
      // 
      //     public init(node: cc.Node) {
      //         this.lblCount = node.getChildByName("count").getComponent(cc.Label);
      // 
      //         this.heart = node.getChildByName("heart");
      //         this.heart1 = this.heart.getChildByName("heart1");
      // 
      //         this.spade = node.getChildByName("spade");
      //         this.spade1 = this.spade.getChildByName("spade1");
      // 
      //         this.club = node.getChildByName("club");
      //         this.club1 = this.club.getChildByName("club1");
      // 
      //         this.diamond = node.getChildByName("diamond");
      //         this.diamond1 = this.diamond.getChildByName("diamond1");
      // 
      //     }
      // 
      //     public reset() {
      //         this.heart1.active = true;
      //         this.spade1.active = true;
      //         this.club1.active = true;
      //         this.diamond1.active = true;
      //         this.lblCount.string = '4';
      //     }
      // 
      //     public setMark(color: number) {
      //         if (color == CARD_COLOR.Diamond) {
      //             this.diamond1.active = false;
      //         }
      //         else if (color == CARD_COLOR.HEART) {
      //             this.heart1.active = false;
      //         }
      //         else if (color == CARD_COLOR.CLUB) {
      //             this.club1.active = false;
      //         }
      //         else if (color == CARD_COLOR.SPADE) {
      //             this.spade1.active = false;
      //         }
      //         let cnt = 0;
      //         if (this.diamond1.active) {
      //             cnt++;
      //         }
      //         if (this.heart1.active) {
      //             cnt++;
      //         }
      //         if (this.club1.active) {
      //             cnt++;
      //         }
      //         if (this.spade1.active) {
      //             cnt++;
      //         }
      // 
      //         this.lblCount.string = cnt.toString();
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_CardTitle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, tween, Tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "304ff01hdNNqZYYyOAnsnnM", "PDK_CardTitle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_CardTitle = exports('default', (_dec = ccclass('PDKCardTitle'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_CardTitle, _Component);
        function PDK_CardTitle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_4ji = void 0;
          _this.m_lian3dui = void 0;
          _this.m_lian4dui = void 0;
          _this.m_shuang2 = void 0;
          _this.m_chupai = void 0;
          _this.m_seatIdx = 0;
          _this.m_isReady = true;
          return _this;
        }
        var _proto = PDK_CardTitle.prototype;
        _proto.onLoad = function onLoad() {
          this.m_4ji = this.node.getChildByName("four_ji");
          this.m_4ji.active = false;
          this.m_lian3dui = this.node.getChildByName("lian3dui");
          this.m_lian3dui.active = false;
          this.m_lian4dui = this.node.getChildByName("lian4dui");
          this.m_lian4dui.active = false;
          this.m_shuang2 = this.node.getChildByName("shuang2");
          this.m_shuang2.active = false;
          this.m_chupai = this.node.parent.getChildByName("chuPai");
          var name = this.node.parent.name;
          name = name.replace("seat_", "");
          this.m_seatIdx = Number(name);
        };
        _proto.ready = function ready() {
          this.m_isReady = true;
          this.hideAll();
        };
        _proto.getChupaiCenterX = function getChupaiCenterX() {
          var x = 0;
          if (this.m_chupai == null) return x;
          var uiTransform = this.m_chupai.getComponent(UITransform);
          var size = uiTransform.contentSize;
          var scale = this.m_chupai.scale;
          if (this.m_seatIdx == 0) {
            x = this.m_chupai.position.x;
          } else if (this.m_seatIdx == 3) {
            x = this.m_chupai.position.x + size.width / 2 * scale.x;
          } else {
            x = this.m_chupai.position.x - size.width / 2 * scale.x;
          }
          return x;
        };
        _proto.showTitle = function showTitle(title) {
          var _this2 = this;
          if (title == null || !this.m_isReady) return;
          this.m_isReady = false;
          this.scheduleOnce(function () {
            var x = _this2.getChupaiCenterX();
            title.active = true;
            title.opacity = 0;
            var y = _this2.m_chupai.y - 25;
            if (_this2.m_seatIdx == 0) {
              y = _this2.m_chupai.y - 50;
            }
            title.setPosition(x, y);
            // 使用 tween 实现淡入动画
            tween(title).to(0.2, {
              opacity: 255
            }).start();
          });
        };
        _proto.hideTitle = function hideTitle(title) {
          if (title == null) return;
          Tween.stopAllByTarget(title);
          if (title.active) {
            title.active = false;
          }
        };
        _proto.hideAll = function hideAll() {
          this.hideTitle(this.m_4ji);
          this.hideTitle(this.m_lian3dui);
          this.hideTitle(this.m_lian4dui);
          this.hideTitle(this.m_shuang2);
        };
        _proto.show4ji = function show4ji() {
          this.showTitle(this.m_4ji);
        };
        _proto.showLian3Dui = function showLian3Dui() {
          this.showTitle(this.m_lian3dui);
        };
        _proto.showLian4Dui = function showLian4Dui() {
          this.showTitle(this.m_lian4dui);
        };
        _proto.showShuang2 = function showShuang2() {
          this.showTitle(this.m_shuang2);
        };
        return PDK_CardTitle;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_ChatHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_Game.ts', './FaceConfigContainer.ts', './PokerManager.ts', './PDK_PlayerSoundHelper.ts', './DuanjuConfigContainer.ts', './ConfigManager.ts', './LanguageConfigContainer.ts', './PDK_EmojiComp.ts', './ModuleDef.ts', './PokerUtils.ts', './Define4.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, find, director, Animation, assetManager, SpriteFrame, Component, PDK_Game, FaceConfigContainer, PokerManager, PDK_PlayerSoundHelper, DuanjuConfigContainer, ConfigManager, LanguageConfigContainer, PDK_EmojiComp, ModuleDef, PokerUtils, EventMessage;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      director = module.director;
      Animation = module.Animation;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      PDK_Game = module.default;
    }, function (module) {
      FaceConfigContainer = module.FaceConfigContainer;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      PDK_PlayerSoundHelper = module.default;
    }, function (module) {
      DuanjuConfigContainer = module.DuanjuConfigContainer;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      PDK_EmojiComp = module.default;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      PokerUtils = module.PokerUtils;
    }, function (module) {
      EventMessage = module.EventMessage;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "63336cIS11Gcon3m8aPMOhk", "PDK_ChatHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_ChatHelper = exports('default', (_dec = ccclass('PDKChatHelper'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_ChatHelper, _Component);
        function PDK_ChatHelper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameScript = null;
          return _this;
        }
        var _proto = PDK_ChatHelper.prototype;
        _proto.start = function start() {
          this.gameScript = find("Canvas").getComponent(PDK_Game);
          this.bindEvent();
        };
        _proto.bindEvent = function bindEvent() {
          director.on(EventMessage.POKER_USER_CHAT, this.onNewChatMsg, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(EventMessage.POKER_USER_CHAT, this.onNewChatMsg, this);
        };
        _proto.onNewChatMsg = function onNewChatMsg(data) {
          var userInfo = PokerManager.inst.getUserInfoByID(data.user.uid);
          if (!userInfo) return;
          var seatID = PokerUtils.getRelativeSeatID(userInfo.chairID, PokerManager.inst.myChairID);
          var chairData = PokerManager.inst.getTableUserItem(userInfo.chairID);
          if (chairData == null) return;
          var text = null;
          if (data.content.indexOf("chat_face_") != -1) {
            // 表情
            var id = Number(data.content.replace("chat_face_", ""));
            var faceConfig = ConfigManager.getInstance().getConfig(FaceConfigContainer);
            if (!isNaN(id) && faceConfig.getFaceDataById(id) != null) {
              var faceData = faceConfig.getFaceDataById(id);
              this.showEmoji(this.gameScript.playerScript[seatID].chatNode, faceData);
              PDK_PlayerSoundHelper.playerSound(faceData.sound, 1);
              return;
            }
          }
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          if (data.content.indexOf("duanju_") != -1) {
            // 短句
            var _id = Number(data.content.replace("duanju_", ""));
            var duanjuConfig = ConfigManager.getInstance().getConfig(DuanjuConfigContainer);
            if (!isNaN(_id) && duanjuConfig.getDataById(_id) != null) {
              var duanjuData = duanjuConfig.getDataById(_id);
              text = langConfig.getLang(duanjuData.text);
              PDK_PlayerSoundHelper.playerSound(duanjuData.sound, 1);
            }
          }
          if (text == null) {
            text = langConfig.getLang(data.content);
          }
          console.log("气泡文字", text);
          var player = this.gameScript.playerScript[seatID];
          if (player != null) {
            player.chatText.string = text;
            player.chatNode.getComponent(Animation).play();
          }
        };
        _proto.showEmoji = function showEmoji(chatNode, faceData) {
          var _this2 = this;
          var faceNode = chatNode.getChildByName("chat_face");
          var bundle = assetManager.getBundle(ModuleDef.POKER_PDK_YUENAN);
          bundle.loadDir("images/" + faceData.res + "/", SpriteFrame, function (err, assets) {
            if (err == null) {
              _this2.onLoadEmoji(assets, faceNode, faceData);
            }
          });
        };
        _proto.onLoadEmoji = function onLoadEmoji(assets, faceNode, faceData) {
          if (assets == null) return;
          var emoji = faceNode.getComponent(PDK_EmojiComp);
          if (emoji == null) {
            emoji = faceNode.addComponent(PDK_EmojiComp);
          }
          emoji.startFrameAnimation(assets);
        };
        return PDK_ChatHelper;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_ChatMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './LanguageConfigContainer.ts', './AudioControl.ts', './DuanjuConfigContainer.ts', './FaceConfigContainer.ts', './GameTools.ts', './GameManager2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, Label, instantiate, find, Component, ConfigManager, LanguageConfigContainer, AudioControl, DuanjuConfigContainer, FaceConfigContainer, GameTools, GameManager;
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
      EditBox = module.EditBox;
      Label = module.Label;
      instantiate = module.instantiate;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      AudioControl = module.AudioControl;
    }, function (module) {
      DuanjuConfigContainer = module.DuanjuConfigContainer;
    }, function (module) {
      FaceConfigContainer = module.FaceConfigContainer;
    }, function (module) {
      GameTools = module.default;
    }, function (module) {
      GameManager = module.GameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "231aa2nRBZEKrdclEOIf4MQ", "PDK_ChatMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_ChatMenu = exports('default', (_dec = ccclass('PDKChatMenu'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(EditBox), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_ChatMenu, _Component);
        function PDK_ChatMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //by_009:菜单
          _initializerDefineProperty(_this, "menu", _descriptor, _assertThisInitialized(_this));
          //    //by_009:内容
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          //    // 短语item
          _initializerDefineProperty(_this, "phraseItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "faceItem", _descriptor4, _assertThisInitialized(_this));
          //    //by_009:短语节点
          _initializerDefineProperty(_this, "phraseNode", _descriptor5, _assertThisInitialized(_this));
          //    //by_009:表情节点
          _initializerDefineProperty(_this, "faceNode", _descriptor6, _assertThisInitialized(_this));
          //    //by_009:编辑框
          _initializerDefineProperty(_this, "editbox", _descriptor7, _assertThisInitialized(_this));
          //    //by_009:所有按钮
          _initializerDefineProperty(_this, "btnSend", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSend", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label_tip", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PDK_ChatMenu.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          this.faceItem.active = false;
          this.phraseItem.active = false;
        };
        _proto.start = function start() {
          this.createDuanju();
          this.createEmoji();
          this.btnSend.on(Node.EventType.TOUCH_END, this.onBtnSend, this);
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          this.lblSend.string = langConfig.getLangById(10226);
          this.editbox.placeholder = langConfig.getLangById(10747);
        };
        _proto.onTextChange = function onTextChange() {
          this.label_tip.string = this.editbox.string.length + "/40";
        }
        //by_009:点击短语
        ;

        _proto.click_phrase = function click_phrase(event) {
          AudioControl.playClick();
          this.menu.active = false;
          var index = event.currentTarget['duanjuIndex'];
          GameManager.inst.chat(index.toString());
          this.closeMe();
        }
        //by_009:点击表情
        ;

        _proto.click_face = function click_face(event) {
          AudioControl.playClick();
          this.menu.active = false;
          var txt = event.currentTarget.faceIndex;
          GameManager.inst.chat(txt);
          this.closeMe();
        };
        _proto.onBtnSend = function onBtnSend(event) {
          AudioControl.playClick();
          GameManager.inst.chat(this.editbox.string);
          this.editbox.string = "";
          this.closeMe();
        };
        _proto.closeMe = function closeMe() {
          this.node && this.node.destroy();
        };
        _proto.createDuanju = function createDuanju() {
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var duanjuArray = ConfigManager.getInstance().getConfig(DuanjuConfigContainer).getDataArray();
          for (var i = 0; i < duanjuArray.length; i++) {
            var duanjuConfig = duanjuArray[i];
            var langId = duanjuConfig.text;
            var item = instantiate(this.phraseItem);
            item.active = true;
            item.setParent(this.phraseNode);
            var lbl = item.getChildByName("text").getComponent(Label);
            lbl.string = langConfig.getLang(langId);
            item['duanjuIndex'] = "duanju_" + duanjuConfig.id;

            // 监听
            item.on(Node.EventType.TOUCH_END, this.click_phrase, this);
          }
        };
        _proto.createEmoji = function createEmoji() {
          var faceArray = ConfigManager.getInstance().getConfig(FaceConfigContainer).getDataArray();
          for (var i = 0; i < faceArray.length; i++) {
            var data = faceArray[i];
            if (!data.isShow) continue;
            var item = instantiate(this.faceItem);
            var icon = find("icon", item);
            item.active = true;
            item.setParent(this.faceNode);
            item['faceIndex'] = "chat_face_" + data.id;
            GameTools.readLocalImg("images/" + data.icon, icon);
            // 监听
            item.on(Node.EventType.TOUCH_END, this.click_face, this);
          }
        }
        // update (dt) {}
        ;

        return PDK_ChatMenu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "menu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "phraseItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "faceItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "phraseNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "faceNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "editbox", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnSend", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblSend", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "label_tip", [_dec11], {
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

System.register("chunks:///_virtual/PDK_ConstDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f01dc5qSMRGlp2Ms8ycjhuU", "PDK_ConstDef", undefined); // import { DiamondPolicy } from "../../userCenter/Core/DiamondPolicy"
      // 普通牌型定义
      var CARD_TYPE = exports('CARD_TYPE', {
        NULL: 1,
        //错误类型
        SINGLE: 2,
        //单牌
        PAIR: 3,
        //对子
        THREE: 4,
        //三张
        STRAIGHT: 5,
        //顺子
        PAIRS: 6,
        //连对
        FOUR: 7 //四张
      });

      var CARD_RANK = exports('CARD_RANK', {
        ACE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        SIX: 6,
        SEVEN: 7,
        EIGHT: 8,
        NINE: 9,
        TEN: 10,
        JACK: 11,
        QUEEN: 12,
        KING: 13
      });
      var CARD_SUIT = exports('CARD_SUIT', {
        SPADE: 0,
        //黑桃
        CLUB: 1,
        //草花
        Diamond: 2,
        //方块
        HEART: 3 //红桃
      });

      var CARD_COLOR = exports('CARD_COLOR', {
        Diamond: 0,
        //方块
        HEART: 1,
        //红桃
        CLUB: 2,
        //草花
        SPADE: 3 //黑桃
      });

      var EM_TimerID = exports('EM_TimerID', /*#__PURE__*/function (EM_TimerID) {
        EM_TimerID[EM_TimerID["eTimerID_Start"] = 1] = "eTimerID_Start";
        EM_TimerID[EM_TimerID["eTimerID_Action"] = 2] = "eTimerID_Action";
        return EM_TimerID;
      }({})); //操作
      var Timer = exports('Timer', {
        start: 2,
        //开始
        action: 15 //操作
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_define.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44f04NMB3tDMKF9pI+bqpoc", "PDK_define", undefined);
      //游戏常量定义
      var gameConst = exports('gameConst', {
        //玩家状态
        US_NULL: 0x00,
        //没有状态
        US_FREE: 0x01,
        //站立状态
        US_SIT: 0x02,
        //坐下状态
        US_READY: 0x03,
        //同意状态
        US_PLAYING: 0x05,
        //游戏状态
        US_OFFLINE: 0x06,
        //掉线
        //桌子状态
        GAME_STATUS_FREE: 0,
        //空闲状态
        GAME_STATUS_PLAY: 100,
        //游戏状态
        GAME_STATUS_WAIT: 200,
        //等待状态

        //游戏结束原因
        GER_NORMAL: 0x00,
        //常规结束
        GER_DISMISS: 0x01,
        //游戏解散
        GER_USER_LEAVE: 0x02,
        //用户离开
        GER_NETWORK_ERROR: 0x03,
        //网络错误
        //游戏模式
        START_MODE_ALL_READY: 0x00,
        //所有准备
        START_MODE_FULL_READY: 0x01,
        //满人开始
        START_MODE_HUNDRED: 0x02,
        //百人游戏
        START_MODE_FISH: 0x04,
        //捕鱼
        START_MODE_ALL_READY_TABLECONFIG: 0x05,
        //准备到桌子配置的人数  //房卡类的可以配置桌子人数的

        //请求失败类型
        KICK_TYPE: 0x01,
        //踢人
        INVALID_CHAIR: 0xFFFF,
        //观战的人的座位号

        ONLINE_DEF_OFFLINE: 0,
        //下线
        ONLINE_DEF_ONLINE: 1 //上线
      });

      //框架消息
      var gameCMD = exports('gameCMD', {
        //登入命令
        MDM_GR_LOGON: 1,
        //登入主命令
        //请求
        SUB_GR_LOGON_ACCOUNTS: 1,
        //帐号登入
        //返回
        SUB_GR_LOGON_SUCCESS: 100,
        //登录成功
        SUB_GR_LOGON_FAILURE: 101,
        //登录失败
        //用户命令
        MDM_GR_USER: 2,
        //用户主命令
        //请求
        SUB_GR_USER_SIT_DOWN: 1,
        //坐下命令
        SUB_GR_USER_STANDUP: 2,
        //起立命令
        //返回
        SUB_GR_USER_STATUS: 100,
        //用户状态
        SUB_GR_USER_ENTER: 101,
        //用户进入
        SUB_GR_USER_SCORE: 102,
        //用户分数
        SUB_GR_USER_ONLINE: 103,
        // 用户上线/掉线
        //游戏命令
        MDM_GF_GAME: 3,
        //游戏主命令
        //框架命令
        MDM_GF_FRAME: 4,
        //框架主命令
        //用户命令
        SUB_GF_GAME_OPTION: 1,
        //游戏配置
        SUB_GF_USER_READY: 2,
        //用户准备
        SUB_GF_USER_CHAT: 3,
        //用户聊天
        SUB_GF_DISMISS_START: 4,
        //解散
        SUB_GF_DISMISS_AGREE: 5,
        //同意/不同意解散
        SUB_GF_DISMISS_END: 6,
        //结束解散
        SUB_GF_CMD_DIALOG: 7,
        //对话框通知命令
        SUB_GF_USE_ITEM: 8,
        //使用道具 item_id item_num chairID

        SUB_GF_GAME_STATUS: 100,
        //游戏状态
        SUB_GF_GAME_SCENE: 101,
        //游戏场景
        SUB_GF_ROOM_INFO: 103,
        //房间信息

        SUB_GF_FORCE_CLOSE: 105,
        //强制关闭窗口
        SUB_GF_REQUEST_FAILURE: 106,
        //请求失败

        SUB_GF_TOAST_MSG: 108,
        //tip消息
        SUB_GF_FISH_NOTICE: 111,
        //捕鱼消息， 用于 同房间不同桌子之间的类似公告的通知， 放在框架这占个坑， 防止后面框架用于111
        SUB_GF_DO_DISMISS_GAME: 115,
        //房间已解散消息
        SUB_GF_DISMISS_GAME_FAILED: 116,
        //房间j解散失败

        SUB_GF_SEAT_CHANG: 117 //位置变动
      });

      //大厅事件
      var EM_CorresCMD = exports('EM_CorresCMD', /*#__PURE__*/function (EM_CorresCMD) {
        EM_CorresCMD["USER_SIT_DOWN"] = "UserSitDown";
        EM_CorresCMD["USER_STAND_UP"] = "UserStandUp";
        EM_CorresCMD["USER_STATUS"] = "UserStatus";
        EM_CorresCMD["USER_LEAVE"] = "UserLeave";
        EM_CorresCMD["WRITE_SCORE"] = "WriteScore";
        EM_CorresCMD["onUserOffline"] = "onUserOffline";
        EM_CorresCMD["onAdminJiesan"] = "onAdminJiesan";
        EM_CorresCMD["ModifyRoomControl"] = "ModifyRoomControl";
        EM_CorresCMD["GetRoomControl"] = "GetRoomControl";
        return EM_CorresCMD;
      }({})); //获取房间控制配置

      //内部流通的事件
      var gameEvent = exports('gameEvent', {
        EVENT_USER_STATUS: "user_status",
        //玩家状态
        EVENT_USER_SCORE: "user_score",
        //玩家分数
        EVENT_ANDROID: "event_android",
        //机器人事件

        EVENT_GET_RESULT_DATA: "EVENT_GET_RESULT_DATA",
        // 接收到结算数据事件
        EVENT_CLOSE_RESULT: "EVENT_CLOSE_RESULT",
        // 关闭结算事件
        EVENT_GET_GOTO_HALL: "EVENT_GET_GOTO_HALL",
        // 接受到返回大厅事件

        EVENT_GAME_ROUND_START: "EVENT_GAME_ROUND_START",
        // 回合开始事件
        EVENT_GAME_ROUND_FINISH: "EVENT_GAME_ROUND_FINISH",
        // 回合结束事件
        EVENT_RECORD_OUT_CARD: "EVENT_RECORD_OUT_CARD",
        // 记录已出卡牌
        EVENT_USE_RECORDER: "EVENT_USE_RECORDER" // 使用记牌器
      });

      var playerType = exports('playerType', {
        TYPE_INVALID: -1,
        // 无效的类型
        TYPE_DEALER: 0,
        // 庄家
        TYPE_PLAYER: 1,
        // 真人闲家
        TYPE_ANDROID: 2 // 机器人闲家
      });

      var playerState = exports('playerState', {
        STATE_INVALID: -1,
        // 无效状态
        STATE_IDLE: 0,
        // 等待状态
        STATE_PLAYING: 1 // 游戏状态
      });

      //游戏状态
      var gameState = exports('gameState', {
        BEGIN: "begin",
        //游戏开始
        PLAYING: "playing",
        //游戏种
        HUANPAI: "huanpai",
        //换牌
        DINGQUE: "dingque",
        //定缺
        IDLE: "idle" //空闲
      });

      var gameExpressionEvent = exports('gameExpressionEvent', {
        SHOW_BOMB: "SHOW_BOMB",
        // 显示炸弹
        SHOW_RECORDER_MACHINE: "SHOW_RECORDER_MACHINE",
        // 显示记牌器
        SHOW_BIGWIN: "SHOW_BIGWIN",
        // BIG_WIN特效
        SHOW_TONGPAI: "SHOW_TONGPAI",
        //显示通牌效果
        PUT_MY_ALL_CARDS_BACK: "PUT_MY_ALL_CARDS_BACK",
        // 把玩家准备出的手牌放回去
        SHOW_EXTRA_REWARD: "SHOW_EXTRA_REWARD",
        // 显示额外物品奖励
        SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE: "SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE",
        // 显示额外物品奖励飞行完毕
        CHECK_SHOW_EXTRA_REWARD_BTNS: "CHECK_SHOW_EXTRA_REWARD_BTNS",
        // 显示或隐藏额外奖励按钮
        UPDATE_ACCOUNT_MOBILE_CODE_BIND: "UPDATE_ACCOUNT_MOBILE_CODE_BIND",
        // 更新账号手机号绑定
        NEWBIE_EXCHANGE_RED_DOT: "NEWBIE_EXCHANGE_RED_DOT",
        // 新号兑换红点
        NEWBIE_AUTO_POP: "NEWBIE_AUTO_POP",
        // 新手自动弹出

        UPDATE_PLAYER_NEWS: "UPDATE_PLAYER_NEWS" // 跟新用户信息
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_DismissMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "e0cebeDQz1LUaHEYOLrhneH", "PDK_DismissMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_DismissMenu = exports('default', (_dec = ccclass('PDKDismissMenu'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_DismissMenu, _Component);
        function PDK_DismissMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "desc_lbl", _descriptor, _assertThisInitialized(_this));
          //    //菜单
          _initializerDefineProperty(_this, "menu", _descriptor2, _assertThisInitialized(_this));
          //    //接受按钮
          _initializerDefineProperty(_this, "btn_agree", _descriptor3, _assertThisInitialized(_this));
          //    //取消按钮
          _initializerDefineProperty(_this, "btn_cancel", _descriptor4, _assertThisInitialized(_this));
          //    //倒计时-值
          _initializerDefineProperty(_this, "txt_leftTime", _descriptor5, _assertThisInitialized(_this));
          //    //玩家组
          _initializerDefineProperty(_this, "playerGroup", _descriptor6, _assertThisInitialized(_this));
          _this.leftTime = void 0;
          _this.nowTime = void 0;
          _this.bindObj = [];
          return _this;
        }
        var _proto = PDK_DismissMenu.prototype;
        _proto.onLoad = function onLoad() {
          this.hideDismissMenu();
        };
        _proto.onEnable = function onEnable() {
          //剩余时间
          this.leftTime = 60;
          this.txt_leftTime.string = this.leftTime.toString();
          this.nowTime = 0;
        };
        _proto.start = function start() {
          // this.btn_agree.on("click", this.btnOnClick, this);
          // this.btn_cancel.on("click", this.btnOnClick, this);

          // this.bindEvent();
          // this.checkDisMiss()

          // let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
          // let lbl = this.btn_agree.getChildByName("lbl").getComponent(cc.Label);
          // lbl.string = langCfg.getLangById(10835);

          // lbl = this.btn_cancel.getChildByName("lbl").getComponent(cc.Label);
          // lbl.string = langCfg.getLangById(10834);
        }
        //    //检查解散
        ;

        _proto.checkDisMiss = function checkDisMiss() {
          // let dismissData = clientKernel.getDismissData()
          // if (dismissData) {
          // this.updateView(dismissData);
          // console.log("❤发现解散数据 ", dismissData);

          // this.onDismissStart(dismissData)
          // }
        };
        _proto.updateView = function updateView(dismissData) {
          // let { lefTime, starter } = dismissData;
          // this.leftTime = lefTime;
          // this.txt_leftTime.string = this.leftTime.toString();
          // let userItem = clientKernel.getTableUserItem(starter);
          // let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
          // if (this.desc_lbl) {
          // this.desc_lbl.string = GameTools.getStringReplace(langCfg.getLangById(10833), userItem.nickname, this.leftTime);
          // }
        };
        _proto.bindEvent = function bindEvent() {
          // this.bindObj.push(onfire.on("onDismissStart", this.onDismissStart.bind(this)));
          // this.bindObj.push(onfire.on("onUserAgreeDismiss", this.onUserAgreeDismiss.bind(this)));
          // this.bindObj.push(onfire.on("onDismissEnd", this.onDismissEnd.bind(this)));
        };
        _proto.onDestroy = function onDestroy() {
          // for (let i = 0; i < this.bindObj.length; i++) {
          // onfire.un(this.bindObj[i]);
          // }
        };
        _proto.showDismissMenu = function showDismissMenu() {
          // this.menu.active = true;
        };
        _proto.hideDismissMenu = function hideDismissMenu() {
          // this.menu.active = false;
        }
        //    //by_009:解散开始
        ;

        _proto.onDismissStart = function onDismissStart(data) {
          // console.log("❤解散开始", data);

          // if (data.errMsg) {
          // return;
          // }

          //        //如果自己是旁观玩家，不显示解散界面
          // if (GameTools.getIsWatcher()) {
          // this.hideDismissMenu();
          // return;
          // }

          // this.updateView(data);

          // this.showDismissMenu();
          // this.refreshPlayer(data);
        }
        //    //by_009:玩家同意、拒绝解散
        ;

        _proto.onUserAgreeDismiss = function onUserAgreeDismiss(data) {
          // console.log("❤玩家同意、拒绝解散", data);
          //        // let { lefTime, agreeData, starter, agree, chairID } = data;

          // this.refreshPlayer(data);
        }
        //    //by_009:结束解散
        ;

        _proto.onDismissEnd = function onDismissEnd(data) {
          // let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;

          // console.log("结束解散", data);
          // let { success } = data;

          // if (success == 1) {
          // UIHelper.showTips(langCfg.getLangById(10733));
          // this.hideDismissMenu();
          //            // if (GameSink) {
          //            //     clientKernel.gotoHall(); //回去大厅
          //            // }
          // } else if (success == 0) {
          // UIHelper.showTips(langCfg.getLangById(10734));
          // this.scheduleOnce(function () {
          // this.hideDismissMenu();
          // }.bind(this), 2);
          // }
        }
        //    //by_009:刷新玩家数据
        ;

        _proto.refreshPlayer = function refreshPlayer(data) {
          // let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
          // let { lefTime, agreeData, starter } = data;
          // this.leftTime = lefTime;
          // this.txt_leftTime.string = this.leftTime.toString();

          // let len = this.playerGroup.childrenCount;
          // for (let m = 0; m < len; m++) {
          // let player = this.playerGroup.children[m];
          // player.active = false;
          // }

          // let myChairID = clientKernel.getMeChairID();
          // for (let i = 0; i < agreeData.length; i++) {
          // if (agreeData[i] != null) {
          // let player = this.playerGroup.children[i];
          // player.active = true;
          // let userItem = clientKernel.getTableUserItem(i);
          // if (userItem) {
          // player.getChildByName("lbl_nickname").getComponent(cc.Label).string = userItem.nickname;
          // GameTools.loadWxHead(cc.find("head_mask/head_sprite", player), userItem.getHead());
          // }
          // let gou = player.getChildByName("gou");
          // gou.active = false;
          // let lbl = player.getChildByName("lbl_text");
          // lbl.active = false;
          // if (agreeData[i] == -1) {
          // lbl.active = true;
          // lbl.getComponent(cc.Label).string = langCfg.getLangById(10836);
          // }
          // else if (agreeData[i] == 0) {
          // lbl.active = true;
          // lbl.getComponent(cc.Label).string = langCfg.getLangById(10834);
          // }
          // else if (agreeData[i] == 1) {
          // gou.active = true;
          // }

          // if (myChairID == i) {//自己
          // if (agreeData[i] == -1) {
          // this.btn_agree.getComponent(cc.Button).interactable = true;
          // this.btn_cancel.getComponent(cc.Button).interactable = true;
          // } else {
          // this.btn_agree.getComponent(cc.Button).interactable = false;
          // this.btn_cancel.getComponent(cc.Button).interactable = false;
          // let outline = this.btn_agree.getChildByName("lbl").getComponent(cc.LabelOutline);
          // outline.enabled = false;
          // outline = this.btn_cancel.getChildByName("lbl").getComponent(cc.LabelOutline);
          // outline.enabled = false;
          // }
          // }
          // }
          // }
        }
        //    //by_009:玩家数据
        ;

        _proto.showPlayerAgree = function showPlayerAgree(chairID, agree) {
          // let player = this.playerGroup.children[chairID];
          // let userItem = clientKernel.getTableUserItem(chairID);
          // let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
          // if (player && userItem) {
          // player.getChildByName("lbl_nickname").getComponent(cc.Label).string = userItem.nickname;
          // let gou = player.getChildByName("gou");
          // gou.active = false;
          // let lbl = player.getChildByName("lbl_text");
          // lbl.active = false;
          // if (agree == -1) {
          // lbl.active = true;
          // lbl.getComponent(cc.Label).string = langCfg.getLangById(10836);
          // }
          // else if (agree == 0) {
          // lbl.active = true;
          // lbl.getComponent(cc.Label).string = langCfg.getLangById(10834);
          // }
          // else if (agree == 1) {
          // gou.active = true;
          // }
          // }
        }
        //    //by_009:按钮点击同意、拒绝
        ;

        _proto.btnOnClick = function btnOnClick(event) {
          // switch (event.node.name) {
          // case "btn_cancel":
          // clientKernel.sendSocketData(gameCMD.MDM_GF_FRAME, gameCMD.SUB_GF_DISMISS_AGREE, { agree: 0 });
          // break;
          // case "btn_agree":
          // clientKernel.sendSocketData(gameCMD.MDM_GF_FRAME, gameCMD.SUB_GF_DISMISS_AGREE, { agree: 1 });
          // break;
          // }
        };
        _proto.update = function update(dt) {
          // if (this.node.active == true) {
          // this.nowTime += dt;
          // if (this.nowTime >= 1) {
          // this.leftTime -= 1;
          // this.nowTime = 0;
          // this.txt_leftTime.string = this.leftTime.toString();
          // }
          // }
        };
        return PDK_DismissMenu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "desc_lbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "menu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn_agree", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_cancel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playerGroup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import { LanguageConfigContainer } from "../../../../kernel/Conifg/LanguageConfigContainer";
      // import { ConfigManager } from "../../../../kernel/ConfigManager";
      // import { gameCMD } from "../../../../kernel/Core/KernelDefine";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_DismissMenu extends cc.Component {
      // 
      //     @property(cc.Label)
      //     desc_lbl: cc.Label = null;
      // 
      //     //菜单
      //     @property(cc.Node)
      //     menu: cc.Node = null;
      // 
      //     //接受按钮
      //     @property(cc.Node)
      //     btn_agree: cc.Node = null;
      // 
      //     //取消按钮
      //     @property(cc.Node)
      //     btn_cancel: cc.Node = null;
      // 
      //     //倒计时-值
      //     @property(cc.Label)
      //     txt_leftTime: cc.Label = null;
      // 
      //     //玩家组
      //     @property(cc.Node)
      //     playerGroup: cc.Node = null;
      // 
      //     private leftTime: number;
      //     private nowTime: number;
      //     bindObj = [];
      // 
      //     onLoad() {
      //         this.hideDismissMenu();
      //     }
      // 
      //     onEnable() {
      //         //剩余时间
      //         this.leftTime = 60;
      //         this.txt_leftTime.string = this.leftTime.toString();
      // 
      //         this.nowTime = 0;
      // 
      //     }
      // 
      //     start() {
      //         this.btn_agree.on("click", this.btnOnClick, this);
      //         this.btn_cancel.on("click", this.btnOnClick, this);
      // 
      //         this.bindEvent();
      //         this.checkDisMiss()
      // 
      //         let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      //         let lbl = this.btn_agree.getChildByName("lbl").getComponent(cc.Label);
      //         lbl.string = langCfg.getLangById(10835);
      // 
      //         lbl = this.btn_cancel.getChildByName("lbl").getComponent(cc.Label);
      //         lbl.string = langCfg.getLangById(10834);
      // 
      //     }
      // 
      //     //检查解散
      //     checkDisMiss() {
      //         let dismissData = clientKernel.getDismissData()
      //         if (dismissData) {
      //             this.updateView(dismissData);
      //             console.log("❤发现解散数据 ", dismissData);
      // 
      //             this.onDismissStart(dismissData)
      //         }
      //     }
      // 
      //     updateView(dismissData) {
      //         let { lefTime, starter } = dismissData;
      //         this.leftTime = lefTime;
      //         this.txt_leftTime.string = this.leftTime.toString();
      //         let userItem = clientKernel.getTableUserItem(starter);
      //         let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      //         if (this.desc_lbl) {
      //             this.desc_lbl.string = GameTools.getStringReplace(langCfg.getLangById(10833), userItem.nickname, this.leftTime);
      //         }
      //     }
      // 
      //     bindEvent() {
      //         this.bindObj.push(onfire.on("onDismissStart", this.onDismissStart.bind(this)));
      //         this.bindObj.push(onfire.on("onUserAgreeDismiss", this.onUserAgreeDismiss.bind(this)));
      //         this.bindObj.push(onfire.on("onDismissEnd", this.onDismissEnd.bind(this)));
      //     }
      //     onDestroy() {
      //         for (let i = 0; i < this.bindObj.length; i++) {
      //             onfire.un(this.bindObj[i]);
      //         }
      //     }
      // 
      //     showDismissMenu(){
      //         this.menu.active = true;
      //     }
      // 
      //     hideDismissMenu(){
      //         this.menu.active = false;
      //     }
      // 
      //     //by_009:解散开始
      //     onDismissStart(data) {
      //         console.log("❤解散开始", data);
      // 
      //         if (data.errMsg) {
      //             return;
      //         }
      // 
      //         //如果自己是旁观玩家，不显示解散界面
      //         if (GameTools.getIsWatcher()) {
      //             this.hideDismissMenu();
      //             return;
      //         }
      // 
      //         this.updateView(data);
      // 
      //         this.showDismissMenu();
      //         this.refreshPlayer(data);
      //     }
      // 
      // 
      //     //by_009:玩家同意、拒绝解散
      //     onUserAgreeDismiss(data) {
      //         console.log("❤玩家同意、拒绝解散", data);
      //         // let { lefTime, agreeData, starter, agree, chairID } = data;
      // 
      //         this.refreshPlayer(data);
      //     }
      // 
      // 
      //     //by_009:结束解散
      //     onDismissEnd(data) {
      //         let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      // 
      //         console.log("结束解散", data);
      //         let { success } = data;
      // 
      //         if (success == 1) {
      //             UIHelper.showTips(langCfg.getLangById(10733));
      //             this.hideDismissMenu();
      //             // if (GameSink) {
      //             //     clientKernel.gotoHall(); //回去大厅
      //             // }
      //         } else if (success == 0) {
      //             UIHelper.showTips(langCfg.getLangById(10734));
      //             this.scheduleOnce(function () {
      //                 this.hideDismissMenu();
      //             }.bind(this), 2);
      //         }
      //     }
      // 
      // 
      //     //by_009:刷新玩家数据
      //     refreshPlayer(data) {
      //         let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      //         let { lefTime, agreeData, starter } = data;
      //         this.leftTime = lefTime;
      //         this.txt_leftTime.string = this.leftTime.toString();
      // 
      //         let len = this.playerGroup.childrenCount;
      //         for (let m = 0; m < len; m++) {
      //             let player = this.playerGroup.children[m];
      //             player.active = false;
      //         }
      // 
      //         let myChairID = clientKernel.getMeChairID();
      //         for (let i = 0; i < agreeData.length; i++) {
      //             if (agreeData[i] != null) {
      //                 let player = this.playerGroup.children[i];
      //                 player.active = true;
      //                 let userItem = clientKernel.getTableUserItem(i);
      //                 if (userItem) {
      //                     player.getChildByName("lbl_nickname").getComponent(cc.Label).string = userItem.nickname;
      //                     GameTools.loadWxHead(cc.find("head_mask/head_sprite", player), userItem.getHead());
      //                 }
      //                 let gou = player.getChildByName("gou");
      //                 gou.active = false;
      //                 let lbl = player.getChildByName("lbl_text");
      //                 lbl.active = false;
      //                 if (agreeData[i] == -1) {
      //                     lbl.active = true;
      //                     lbl.getComponent(cc.Label).string = langCfg.getLangById(10836);
      //                 }
      //                 else if (agreeData[i] == 0) {
      //                     lbl.active = true;
      //                     lbl.getComponent(cc.Label).string = langCfg.getLangById(10834);
      //                 }
      //                 else if (agreeData[i] == 1) {
      //                     gou.active = true;
      //                 }
      // 
      // 
      //                 if (myChairID == i) {//自己
      //                     if (agreeData[i] == -1) {
      //                         this.btn_agree.getComponent(cc.Button).interactable = true;
      //                         this.btn_cancel.getComponent(cc.Button).interactable = true;
      //                     } else {
      //                         this.btn_agree.getComponent(cc.Button).interactable = false;
      //                         this.btn_cancel.getComponent(cc.Button).interactable = false;
      //                         let outline = this.btn_agree.getChildByName("lbl").getComponent(cc.LabelOutline);
      //                         outline.enabled = false;
      //                         outline = this.btn_cancel.getChildByName("lbl").getComponent(cc.LabelOutline);
      //                         outline.enabled = false;
      //                     }
      //                 }
      //             }
      //         }
      //     }
      // 
      // 
      //     //by_009:玩家数据
      //     showPlayerAgree(chairID, agree) {
      //         let player = this.playerGroup.children[chairID];
      //         let userItem = clientKernel.getTableUserItem(chairID);
      //         let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      //         if (player && userItem) {
      //             player.getChildByName("lbl_nickname").getComponent(cc.Label).string = userItem.nickname;
      //             let gou = player.getChildByName("gou");
      //             gou.active = false;
      //             let lbl = player.getChildByName("lbl_text");
      //             lbl.active = false;
      //             if (agree == -1) {
      //                 lbl.active = true;
      //                 lbl.getComponent(cc.Label).string = langCfg.getLangById(10836);
      //             }
      //             else if (agree == 0) {
      //                 lbl.active = true;
      //                 lbl.getComponent(cc.Label).string = langCfg.getLangById(10834);
      //             }
      //             else if (agree == 1) {
      //                 gou.active = true;
      //             }
      //         }
      //     }
      // 
      // 
      //     //by_009:按钮点击同意、拒绝
      //     btnOnClick(event) {
      //         switch (event.node.name) {
      //             case "btn_cancel":
      //                 clientKernel.sendSocketData(gameCMD.MDM_GF_FRAME, gameCMD.SUB_GF_DISMISS_AGREE, { agree: 0 });
      //                 break;
      //             case "btn_agree":
      //                 clientKernel.sendSocketData(gameCMD.MDM_GF_FRAME, gameCMD.SUB_GF_DISMISS_AGREE, { agree: 1 });
      //                 break;
      //         }
      //     }
      // 
      // 
      //     update(dt) {
      //         if (this.node.active == true) {
      //             this.nowTime += dt;
      //             if (this.nowTime >= 1) {
      //                 this.leftTime -= 1;
      //                 this.nowTime = 0;
      //                 this.txt_leftTime.string = this.leftTime.toString();
      //             }
      //         }
      // 
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_DragCard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_Card.ts', './PDK_define.ts', './PDK_Game.ts', './EventCenter.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Vec2, Vec3, Tween, tween, easing, Component, PDK_Card, gameExpressionEvent, PDK_Game, EventCenter;
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
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      tween = module.tween;
      easing = module.easing;
      Component = module.Component;
    }, function (module) {
      PDK_Card = module.default;
    }, function (module) {
      gameExpressionEvent = module.gameExpressionEvent;
    }, function (module) {
      PDK_Game = module.default;
    }, function (module) {
      EventCenter = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "59152R4K7RC+JsCpy8xnIho", "PDK_DragCard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_DragCard = exports('default', (_dec = ccclass('PDKDragCard'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_DragCard, _Component);
        function PDK_DragCard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //by_009:所有牌的父节点
          _initializerDefineProperty(_this, "poker", _descriptor, _assertThisInitialized(_this));
          //by_009:两牌之间的间隔
          _this.interval = null;
          //by_009:开始触摸的位置
          _this.startTouchLocation = null;
          //by_009:开始触摸的牌
          _this.startTouchPoker = null;
          //by_009:触摸中的位置
          _this.touchingLocation = null;
          return _this;
        }
        var _proto = PDK_DragCard.prototype;
        // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          //注：所有牌的Anchor锚点设置为X=0;Y=0.5
          if (!this.poker) {
            this.poker = this.node;
          }
        };
        _proto.start = function start() {
          var _this2 = this;
          //为了下一帧执行
          this.scheduleOnce(function () {
            if (_this2.poker.children.length >= 2) {
              _this2.interval = _this2.poker.children[1].x - _this2.poker.children[0].x;
            } else {
              _this2.interval = 64;
            }
            console.log("❤interval", _this2.interval);
          });
          console.log("---摸牌监听---");
          //by_009:监听触摸开始
          this.node.on(Node.EventType.TOUCH_START, this.clickPoker, this);
          //by_009:监听触摸过程
          this.node.on(Node.EventType.TOUCH_MOVE, this.slideTouchPoker, this);
          //by_009:监听触摸结束
          this.node.on(Node.EventType.TOUCH_END, this.touchResult, this);
          //by_009:监听触摸取消
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchResult, this);
          EventCenter.onEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK, this.putAllCardBack, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.clickPoker, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.slideTouchPoker, this);
          this.node.off(Node.EventType.TOUCH_END, this.touchResult, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.touchResult, this);
          EventCenter.offEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK, this.putAllCardBack, this);
        }
        //by_009:点击扑克——响应事件
        ;

        _proto.clickPoker = function clickPoker(event) {
          // 获取触摸点在 poker 节点坐标系下的位置
          var uiTransform = this.poker.getComponent(UITransform);
          if (!uiTransform) return;
          var touchWorldPos = event.touch.getUILocation();
          // const touchPos = uiTransform.convertToNodeSpaceAR(new Vec3(touchWorldPos.x, touchWorldPos.y, 0));
          this.startTouchLocation = touchWorldPos;
          // const worldTouchPos = uiTransform.convertToWorldSpaceAR(new Vec3(touchPos.x, touchPos.y, 0));

          for (var i = this.poker.children.length - 1; i >= 0; i--) {
            var childNode = this.poker.children[i];
            var childUiTransform = childNode.getComponent(UITransform);
            if (childUiTransform) {
              var rect = childUiTransform.getBoundingBoxToWorld();
              // const localTouchPos = childUiTransform.convertToNodeSpaceAR(this.startTouchLocation);
              if (rect.contains(new Vec2(touchWorldPos.x, touchWorldPos.y))) {
                this.startTouchPoker = this.poker.children[i];
                this.poker.children[i].getComponent(PDK_Card).select.active = true;
                break;
              }
            }
          }
        }
        //by_009:滑动触摸扑克——响应事件
        ;

        _proto.slideTouchPoker = function slideTouchPoker(event) {
          // console.log("滑动触摸扑克——响应事件");
          if (this.startTouchPoker == null) {
            return;
          }
          var uiTransform = this.poker.getComponent(UITransform);
          if (!uiTransform) return;
          var touchWorldPos = event.getUILocation();
          var touchPos = uiTransform.convertToNodeSpaceAR(new Vec3(touchWorldPos.x, touchWorldPos.y, 0));
          this.touchingLocation = touchPos;
          if (this.touchingLocation.x > this.startTouchPoker.x) {
            var juli = null;
            juli = this.touchingLocation.subtract(new Vec3(this.startTouchPoker.x)).x / this.interval;
            // console.log("几张牌的距离",juli);
            var index = this.startTouchPoker.getSiblingIndex();
            if (index + parseInt(juli) >= this.poker.children.length) {
              return;
            }
            for (var i = 0; i < this.poker.children.length; i++) {
              // this.poker.children[i].opacity = 255;
              // this.poker.children[i].color=new Color(255,255,255,255);
              this.poker.children[i].getComponent(PDK_Card).select.active = false;
            }
            for (var _i = index; _i <= index + parseInt(juli); _i++) {
              // this.poker.children[i].opacity = 180;
              // this.poker.children[i].color=new Color(180,180,180,255);
              this.poker.children[_i].getComponent(PDK_Card).select.active = true;
            }
          } else {
            // console.log("zuo");

            var _juli = null;
            _juli = this.touchingLocation.subtract(new Vec3(this.startTouchPoker.x)).x / this.interval;
            _juli = Math.abs(_juli);
            // console.log("几张牌的距离",juli );
            var index = this.startTouchPoker.getSiblingIndex();
            if (index - parseInt(_juli) <= 0) {
              return;
            }
            // @ts-ignore
            for (var _i2 = index; _i2 >= index - parseInt(Math.ceil(_juli)); _i2--) {
              // this.poker.children[i].opacity = 180;
              // this.poker.children[i].color=new Color(180,180,180,255);
              this.poker.children[_i2].getComponent(PDK_Card).select.active = true;
            }
            // @ts-ignore
            for (var _i3 = index - parseInt(Math.ceil(_juli)) - 1; _i3 >= 0; _i3--) {
              // this.poker.children[i].opacity = 255;
              // this.poker.children[i].color=new Color(255,255,255,255);
              this.poker.children[_i3].getComponent(PDK_Card).select.active = false;
            }
          }
        }
        //by_009:触摸时处理
        ;

        _proto.touchIngDispose = function touchIngDispose(node) {
          // console.log("触摸时处理");

          // if(node.opacity==180){
          //     node.opacity=255;
          // }else {
          //     node.opacity=180;
          // }

          // node.color = new Color(180, 180, 180, 255);
          node.getComponent(PDK_Card).select.active = true;
        }
        //by_009:触摸结束处理
        ;

        _proto.touchResult = function touchResult() {
          // console.log("触摸结果处理");
          for (var i = this.poker.children.length - 1; i >= 0; i--) {
            var pokeNode = this.poker.children[i];
            var poker = pokeNode.getComponent(PDK_Card);
            if (poker.select.active) {
              poker.select.active = false;
              Tween.stopAllByTarget(pokeNode);
              var x = pokeNode.x;
              if (poker.isSelected) {
                poker.isSelected = false;
                // 创建移动动画
                tween(pokeNode).to(0.2, {
                  position: new Vec3(x, 0, 0)
                }, {
                  easing: easing.backOut
                }).start();
              } else {
                poker.isSelected = true;
                // 创建移动动画
                tween(pokeNode).to(0.2, {
                  position: new Vec3(x, 20, 0)
                }, {
                  easing: easing.backOut
                }).start();
              }
            }
          }
          this.checkChupaiBtns();
          this.startTouchPoker = null;
        };
        _proto.putAllCardBack = function putAllCardBack() {
          for (var i = 0; i < this.poker.children.length; i++) {
            var poker = this.poker.children[i].getComponent(PDK_Card);
            if (poker.isSelected) {
              poker.select.active = false;
              poker.node.y = 0;
              poker.isSelected = false;
            }
          }
          this.checkChupaiBtns();
        };
        _proto.checkChupaiBtns = function checkChupaiBtns() {
          PDK_Game.ins.checkChupaiBtnUseable();
        }
        // update (dt) {}
        ;

        return PDK_DragCard;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "poker", [_dec2], {
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

System.register("chunks:///_virtual/PDK_EmojiComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Tween, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "65bd0pOHUNNgKwWtyrtldOU", "PDK_EmojiComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_EmojiComp = exports('default', (_dec = ccclass('PDKEmojiComp'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_EmojiComp, _Component);
        function PDK_EmojiComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_sprite = void 0;
          _this.m_assets = void 0;
          _this.m_totalIndex = 0;
          _this.m_currentIndex = 0;
          _this.m_isAnim = false;
          _this.m_deltaTime = 0;
          _this.SWITCH_IMG_TIME = 0.2;
          return _this;
        }
        var _proto = PDK_EmojiComp.prototype;
        _proto.onLoad = function onLoad() {
          if (this.m_sprite == null) {
            this.m_sprite = this.node.getComponent(Sprite);
          }
        };
        _proto.startFrameAnimation = function startFrameAnimation(assets) {
          this.getSprite();
          if (this.m_sprite == null) return;
          this.m_assets = assets;
          this.m_totalIndex = assets.length;
          this.m_currentIndex = 0;
          this.m_deltaTime = 0;
          this.m_isAnim = true;
          this.m_sprite.spriteFrame = assets[0];
          this.node.active = true;
          this.node.opacity = 0;
          // 停止当前节点上的所有 tween 动画
          Tween.stopAllByTarget(this.node);

          // 创建淡入动画
          tween(this.node).to(0.2, {
            opacity: 255
          }).start();
        };
        _proto.update = function update(dt) {
          if (this.m_isAnim) {
            if (this.m_sprite == null) return;
            this.m_deltaTime += dt;
            if (this.m_deltaTime >= this.SWITCH_IMG_TIME) {
              this.m_deltaTime = 0;
              this.m_currentIndex++;
              if (this.m_currentIndex != this.m_totalIndex) {
                this.m_sprite.spriteFrame = this.m_assets[this.m_currentIndex];
              } else {
                this.onCompleteAnim();
              }
            }
          }
        };
        _proto.onCompleteAnim = function onCompleteAnim() {
          this.node.active = false;
          this.m_isAnim = false;
        };
        _proto.getSprite = function getSprite() {
          if (this.m_sprite == null) {
            this.m_sprite = this.node.getComponent(Sprite);
          }
        };
        return PDK_EmojiComp;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_FlyGold.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Animation, Vec2, AnimationClip, Tween, tween, Vec3, easing, Component, Utils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Animation = module.Animation;
      Vec2 = module.Vec2;
      AnimationClip = module.AnimationClip;
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
      easing = module.easing;
      Component = module.Component;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "56747G6qZhIPbi1wgmkvD8t", "PDK_FlyGold", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_FlyGold = exports('default', (_dec = ccclass('PDKFlyGold'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_FlyGold, _Component);
        function PDK_FlyGold() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_sprite = null;
          _this.m_animation = null;
          _this.m_flySpeed = 1000;
          _this.m_selfPos = null;
          _this.m_targetPos = null;
          return _this;
        }
        var _proto = PDK_FlyGold.prototype;
        _proto.onLoad = function onLoad() {
          this.m_sprite = this.node.getComponent(Sprite);
          this.m_sprite.enabled = false;
          this.m_animation = this.node.getComponent(Animation);
        };
        _proto.init = function init(x, y, targetx, targety) {
          this.m_selfPos = new Vec2();
          this.getRandomPos(x, y, this.m_selfPos);
          this.node.setPosition(x, y);
          this.m_targetPos = new Vec2(targetx, targety);
          var delay = Utils.randomRange(0.01, 0.3);
          this.scheduleOnce(this.startAni, delay);
        };
        _proto.startAni = function startAni() {
          this.m_sprite.enabled = true;
          this.m_animation.defaultClip.wrapMode = AnimationClip.WrapMode.Loop;
          this.readyPosition();
        };
        _proto.readyPosition = function readyPosition() {
          var _this2 = this;
          this.node.opacity = 0;
          // 停止当前节点上的所有 tween 动画
          Tween.stopAllByTarget(this.node);

          // 创建移动动画
          var moveTween = tween(this.node).to(0.5, {
            position: new Vec3(this.m_selfPos.x, this.m_selfPos.y)
          });

          // 创建淡入动画
          var fadeInTween = tween(this.node).to(0.5, {
            opacity: 255
          });

          // 顺序执行移动动画和回调函数
          moveTween.call(function () {
            var flyDelay = Utils.randomRange(0.1, 0.3);
            setTimeout(function () {
              _this2.startFly();
            }, flyDelay * 1000);
          }).start();

          // 同时执行淡入动画
          fadeInTween.start();
        };
        _proto.startFly = function startFly() {
          var _this3 = this;
          this.m_animation.play();
          var distance = Vec2.distance(this.m_targetPos, this.m_selfPos);
          var time = distance / this.m_flySpeed;

          // 创建飞行动画
          tween(this.node).to(time, {
            position: new Vec3(this.m_targetPos.x, this.m_targetPos.y)
          }, {
            easing: easing.quadInOut
          }).call(function () {
            _this3.onFlyComplete();
          }).start();
        };
        _proto.onFlyComplete = function onFlyComplete() {
          if (this.node.isValid) {
            this.node.active = false;
            this.node.destroy();
          }
        };
        _proto.getRandomPos = function getRandomPos(x, y, outVec2) {
          outVec2.x = Utils.randomRange(x - 100, x + 100);
          outVec2.y = Utils.randomRange(y - 100, y + 100);
        };
        return PDK_FlyGold;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerManager.ts', './GD.ts', './PDK_Card.ts', './PDK_define.ts', './PDK_Player.ts', './PDK_GameLogic.ts', './PDK_BattleData.ts', './PDK_PlayerSoundHelper.ts', './PDK_GameEndPerformanceHelper.ts', './PDK_ConstDef.ts', './LanguageConfigContainer.ts', './ConfigManager.ts', './GameTools.ts', './EventCenter.ts', './GlobalConfigContainer.ts', './ResourceMgr.ts', './ModuleDef.ts', './PokerDefine.ts', './UserMgr.ts', './RoomMgr.ts', './AudioControl.ts', './Define4.ts', './GameManager2.ts', './PokerUtils.ts', './SubGameMessage.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Prefab, Label, Color, Button, find, director, Tween, tween, Vec3, easing, instantiate, Animation, AnimationClip, LabelOutline, ProgressBar, UITransform, Component, PokerManager, GameTool, PDK_Card, gameExpressionEvent, PDK_Player, TienlenLogic, PDK_BattleData, PDK_PlayerSoundHelper, PDK_GameEndPerformanceHelper, CARD_TYPE, LanguageConfigContainer, ConfigManager, GameTools, EventCenter, GlobalConfigContainer, ResourceMgr, ModuleDef, PokerEventMessage, ROOM_STATUS, UserMgr, RoomMgr, AudioControl, EventMessage, GameManager, GamePlayCard, PokerUtils, SubGameMessage, LanguageData;
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
      Prefab = module.Prefab;
      Label = module.Label;
      Color = module.Color;
      Button = module.Button;
      find = module.find;
      director = module.director;
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
      easing = module.easing;
      instantiate = module.instantiate;
      Animation = module.Animation;
      AnimationClip = module.AnimationClip;
      LabelOutline = module.LabelOutline;
      ProgressBar = module.ProgressBar;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      GameTool = module.GameTool;
    }, function (module) {
      PDK_Card = module.default;
    }, function (module) {
      gameExpressionEvent = module.gameExpressionEvent;
    }, function (module) {
      PDK_Player = module.default;
    }, function (module) {
      TienlenLogic = module.default;
    }, function (module) {
      PDK_BattleData = module.default;
    }, function (module) {
      PDK_PlayerSoundHelper = module.default;
    }, function (module) {
      PDK_GameEndPerformanceHelper = module.default;
    }, function (module) {
      CARD_TYPE = module.CARD_TYPE;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      GameTools = module.default;
    }, function (module) {
      EventCenter = module.default;
    }, function (module) {
      GlobalConfigContainer = module.GlobalConfigContainer;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      PokerEventMessage = module.PokerEventMessage;
      ROOM_STATUS = module.ROOM_STATUS;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      AudioControl = module.AudioControl;
    }, function (module) {
      EventMessage = module.EventMessage;
    }, function (module) {
      GameManager = module.GameManager;
      GamePlayCard = module.GamePlayCard;
    }, function (module) {
      PokerUtils = module.PokerUtils;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _class3;
      cclegacy._RF.push({}, "1732bzryF9O1JDEl/3NGd3X", "PDK_Game", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Game = exports('default', (_dec = ccclass('PDKGame'), _dec2 = property(PDK_Player), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Label), _dec13 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Game, _Component);
        function PDK_Game() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playerScript", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardPool", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundCountDown", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "operateMenu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleOperateMenu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_ready", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "setting", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelGameResult", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDestTitle", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDeskBg", _descriptor12, _assertThisInitialized(_this));
          _this.sortType = 1;
          _this.GameLogic = new TienlenLogic();
          _this.countDownTime = -1;
          _this.countDownTotal = 15;
          _this.m_btnSort = null;
          _this.m_sorting = false;
          _this.m_gameEndPerformanceHelper = new PDK_GameEndPerformanceHelper();
          _this.m_prevCards = null;
          _this.m_enableColor = new Color(255, 255, 255);
          _this.m_disableColor = new Color(128, 128, 128);
          return _this;
        }
        var _proto = PDK_Game.prototype;
        _proto.onLoad = function onLoad() {
          tgx.UIMgr.inst.closeAll();
          PDK_Game.ins = this;
          this.operateMenu.active = false;
          this.idleOperateMenu.active = false;
          this.m_btnSort = this.node.getChildByName("btn_sort");
          this.m_btnSort.active = false;
          var btns = this.node.getComponentsInChildren(Button);
          for (var i = 0; i < btns.length; i++) {
            btns[i].node.on(Node.EventType.TOUCH_END, this.onBtnClick, this);
          }
          var langCfg = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var lbl = find("btn_buChu/label", this.operateMenu).getComponent(Label);
          lbl.string = langCfg.getLangById(10247);
          lbl = find("btn_buChu_1/label", this.operateMenu).getComponent(Label);
          lbl.string = langCfg.getLangById(10247);
          lbl = find("btn_chuPai/label", this.operateMenu).getComponent(Label);
          lbl.string = langCfg.getLangById(10248);
          lbl = find("btn_ready/label", this.idleOperateMenu).getComponent(Label);
          lbl.string = langCfg.getLangById(10249);

          // let btn_chuPai = this.operateMenu.getChildByName("btn_chuPai");
          // btn_chuPai.getComponent(Button).enableAutoGrayEffect = true;
        };

        _proto.start = function start() {
          // 显示走马灯
          this.showNotice();
          // 显示积分
          //this.showJackpot();

          AudioControl.playBGM();
          director.on(EventMessage.POKER_ROOM_INFO, this.onRoomBack, this);
          director.on(EventMessage.POKER_GAME_START, this.onGameStart, this);
          director.on(PokerEventMessage.POKER_USER_LEAVE_ROOM, this.onEventUserLeave, this);
          director.on(PokerEventMessage.POKER_USER_ENTER_ROOM, this.onEventUserEnter, this);
          director.on(EventMessage.POKER_GAME_END, this.onGameEnd, this);
          director.on(EventMessage.POKER_USER_PLAY, this.onUserPlay, this);
          director.on(EventMessage.POKER_USER_PASS, this.onUserPass, this);
          director.on(EventMessage.POKER_ROOM_GOLD_CHANGE, this.onRoomGoldChange, this);
          director.on(PokerEventMessage.POKER_USER_STATUS_CHANGE, this.onUserStatusChange, this);
          director.on(EventMessage.POKER_BOMB_SCORE, this.onS_BOMB, this);
          director.on(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
          PokerManager.inst.start();
        };
        _proto.init = function init() {
          this.operateMenu.active = false;
          this.idleOperateMenu.active = false;
          this.m_btnSort = this.node.getChildByName("btn_sort");
          this.m_btnSort.active = false;
          for (var i = 0; i < this.playerScript.length; i++) {
            this.playerScript[i].initPlayerInfo(null);
          }
        };
        _proto.onDestroy = function onDestroy() {
          PDK_BattleData.instance().onGameExit();
          this.m_gameEndPerformanceHelper.release();
          this.m_gameEndPerformanceHelper = null;
          director.off(EventMessage.POKER_ROOM_INFO, this.onRoomBack, this);
          director.off(EventMessage.POKER_GAME_START, this.onGameStart, this);
          director.off(PokerEventMessage.POKER_USER_LEAVE_ROOM, this.onEventUserLeave, this);
          director.off(PokerEventMessage.POKER_USER_ENTER_ROOM, this.onEventUserEnter, this);
          director.off(EventMessage.POKER_GAME_END, this.onGameEnd, this);
          director.off(EventMessage.POKER_USER_PLAY, this.onUserPlay, this);
          director.off(EventMessage.POKER_USER_PASS, this.onUserPass, this);
          director.off(EventMessage.POKER_ROOM_GOLD_CHANGE, this.onUserStatusChange, this);
          director.off(PokerEventMessage.POKER_USER_STATUS_CHANGE, this.onUserStatusChange, this);
          director.off(EventMessage.POKER_BOMB_SCORE, this.onS_BOMB, this);
          director.off(SubGameMessage.EnterSubGameRoomSuccess, this.reStart, this);
        };
        _proto.reStart = function reStart() {
          this.init();
          RoomMgr.inst.rpc_ClientReady();
        };
        _proto.onReplay = function onReplay(data) {};
        _proto.onGotRoomInfo = function onGotRoomInfo(data) {
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);

          // 1 算张数 2 1打3
          this.lblDestTitle.string = langConfig.getLangById(10010);

          // 金币场时serialNumber有值
          if (data.serialNumber != undefined) {
            // 金币场或快速开始
            this.lblDeskBg.string = langConfig.getLangById(10812) + ":" + GameTools.nFormatter(data.serialNumber);
          } else {
            var node = find("info/bg", this.node);
            node.active = false;
            this.lblDeskBg.node.active = false;
          }
          // this.createJackpot();
        };

        _proto.getSeatInfo = function getSeatInfo(data) {
          for (var i = 0; i < this.playerScript.length; i++) {
            var user = PokerManager.inst.getTableUserItem(i);
            if (!user) {
              continue;
            }
            var seatID = PokerUtils.getRelativeSeatID(user.chairID, PokerManager.inst.myChairID);
            this.playerScript[seatID].initPlayerInfo(user);
          }
        }

        //    // 炸分
        ;

        _proto.onS_BOMB = function onS_BOMB(data) {
          this.showBombAni(data);
        };
        _proto.deactiveWhenRoundEnd = function deactiveWhenRoundEnd() {
          this.operateMenu.active = false;
          this.idleOperateMenu.active = false;
          this.m_btnSort.active = false;
          this.activeClock(false);
          this.roundCountDown.active = false;
        };
        _proto.showIdleOperateMenu = function showIdleOperateMenu() {
          if (this.idleOperateMenu != null && this.idleOperateMenu.isValid) {
            this.idleOperateMenu.active = true;
          }
        };
        _proto.clearCardPool = function clearCardPool() {
          if (this.cardPool != null && this.cardPool.isValid) {
            this.cardPool.destroyAllChildren();
            this.cardPool.removeAllChildren();
          }
        };
        _proto.playSelfWinLoseSond = function playSelfWinLoseSond(data) {
          var userData = data.userData;
          if (userData == null) return;
          // 胜利音效
          var isSelfWin = false;
          for (var i = 0; i < userData.length; i++) {
            var _data = userData[i];
            if (i == PokerManager.inst.myChairID) {
              isSelfWin = _data.isWinner;
              break;
            }
          }
          if (isSelfWin) {
            // if (data.bigData != null) {
            //     // 总结算
            //     PDK_PlayerSoundHelper.playSoundUrl("sound/fangjian_win");
            // }
            // else {
            //小结算
            PDK_PlayerSoundHelper.playSoundUrl("sound/biwin");
            // }
          } else {
            // if (data.bigData != null) {
            //     // 总结算
            //     PDK_PlayerSoundHelper.playSoundUrl("sound/fangjian_lose");
            // }
            // else {
            //小结算bilose
            PDK_PlayerSoundHelper.playSoundUrl("sound/bilose");
            // }
          }
        };

        _proto.onEventSyncPlayerGold = function onEventSyncPlayerGold(arr) {
          for (var i = 0; i < arr.length; i++) {
            var data = arr[i];
            if (data != null) {
              var seatID = PokerUtils.getRelativeSeatID(data.chairID, PokerManager.inst.myChairID);
              this.playerScript[seatID].syncPlayerData(data);
            }
          }
        };
        _proto.UserOnlineOffline = function UserOnlineOffline(userItem) {};
        _proto.onUserGetExtraReward = function onUserGetExtraReward(rewardData) {
          var rewardList = rewardData.rewardList;
          PDK_BattleData.instance().extraRewardData = rewardData;
        }
        //    // 获取记牌器数据
        // onEventCardRecorder(data: S_CARD_RECORDER) {
        //     if (data != null && data.cards != null) {
        //         PDK_BattleData.instance().recordOutCards(data.cards);
        //     }
        // }
        ;

        _proto.getAllCard = function getAllCard() {
          var p = [];
          var shouPai = this.playerScript[0].shouPai;
          for (var i = 0; i < shouPai.children.length; i++) {
            p.push(shouPai.children[i].getComponent(PDK_Card).cardID);
          }
          return p;
        };
        _proto.getBounceCard = function getBounceCard() {
          var arr = [];
          for (var i = 0; i < this.playerScript[0].shouPai.children.length; i++) {
            var poker = this.playerScript[0].shouPai.children[i].getComponent(PDK_Card);
            if (poker.isSelected) {
              arr.push(poker.cardID);
            }
          }
          return arr;
        };
        _proto.setCountDown = function setCountDown(seatID, time) {
          if (time === void 0) {
            time = 15;
          }
          var player = this.playerScript[seatID];
          if (player == null) return;
          this.activeClock(true, seatID == 0); // 自己需要动画
          this.clock.parent = player.clockPos;
          this.clock.setPosition(0, 0);
          this.countDownTime = time;
          this.countDownTotal = time;
          this.roundCountDown.active = false;
        };
        _proto.showReadyBtn = function showReadyBtn(isShow) {
          if (isShow) {
            var clockPos = this.idleOperateMenu.getChildByName("clockPos");
            clockPos.active = true;
            var globalConfig = ConfigManager.getInstance().getConfig(GlobalConfigContainer);
            var time = globalConfig.getDataByConfigId(10016);
            this.countDownTime = time;
            this.countDownTotal = time;
            this.activeClock(true, true);
            this.clock.parent = clockPos;
            this.clock.setPosition(0, 0);
          } else {
            var _clockPos = this.idleOperateMenu.getChildByName("clockPos");
            _clockPos.active = false;
          }
          this.btn_ready.active = isShow;
        }
        //    // setClock(seatID, time = 15) {
        //    //     this.clock.active = true;
        //    //     let newVec2 = this.playerScript[seatID].clockPos.convertToWorldSpaceAR(v2(0, 0));
        //    //     let Vec2 = this.clock.parent.convertToNodeSpaceAR(newVec2);
        //    //     this.clock.position = Vec2;
        //    //     let clockLabel = this.clock.children[0].getComponent(Label);
        //    //     director.getScheduler().unscheduleAllForTarget(clockLabel);
        //    //     clockLabel.schedule(() => {
        //    //         clockLabel.string = time + "";
        //    //         time--;
        //    //         if (time == -1) {
        //    //             director.getScheduler().unscheduleAllForTarget(clockLabel);
        //    //         }
        //    //     }, 1, time, 0.01)
        //    // }
        ;

        _proto.startBattleSort = function startBattleSort() {
          if (this.m_btnSort != null) {
            this.m_btnSort.active = true;
            this.m_btnSort.opacity = 0;
            Tween.stopAllByTarget(this.m_btnSort);
            this.sortCard();
          }
        };
        _proto.sortCard = function sortCard() {
          var _this2 = this;
          this.m_sorting = true;
          var playerNode = this.playerScript[0];
          if (!playerNode) return;
          var player = playerNode.getComponent(PDK_Player);
          if (!player || player.userId !== UserMgr.inst.uid) return;
          var shouPaiNode = player.shouPai;
          if (!shouPaiNode) return;

          // 停止当前节点上的所有 tween 动画
          Tween.stopAllByTarget(shouPaiNode);

          // 创建缩小动画
          var scaleSmallTween = tween(shouPaiNode).to(0.2, {
            scale: new Vec3(0, 1, 1)
          }, {
            easing: easing.quartIn
          });

          // 创建恢复正常大小动画
          var scaleNormalTween = tween(shouPaiNode).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: easing.backOut
          });

          // 组合动画序列
          tween(shouPaiNode).then(scaleSmallTween).call(function () {
            return _this2.doSortCard();
          }).then(scaleNormalTween).call(function () {
            return _this2.onSortCardComplete();
          }).start();
        };
        _proto.doSortCard = function doSortCard() {
          var allCard = this.getAllCard();
          var sortArr = null;
          if (this.sortType == 2 || this.sortType == 0) {
            this.sortType = 1;
            sortArr = this.GameLogic.sort(allCard);
            console.log(sortArr);
          } else if (this.sortType == 1) {
            this.sortType = 2;
            sortArr = this.GameLogic.sortByCardType(allCard);
            console.log(sortArr);
          }
          if (sortArr != null) {
            this.playerScript[0].fillShouPai(sortArr);
          }
          EventCenter.emitEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK);
        };
        _proto.onSortCardComplete = function onSortCardComplete() {
          this.m_sorting = false;
        };
        _proto.onBtnClick = function onBtnClick(event) {
          AudioControl.playClick();
          var name = event.currentTarget.name;
          switch (name) {
            case "btn_sort":
              // AudioControl.playClick();
              this.sortCard();
              break;
            case "btn_buChu":
            case "btn_buChu_1":
              // AudioControl.playClick();
              // SGNetKernel.instance().sendGameMsg(SubGameMSG.C_PASS, {});
              GameManager.inst.onPass();
              break;
            case "btn_hint":
              //提示
              // console.log("提示hintArray", this.hintArray);
              // if (this.hintArray.length == 0) {
              //     GameTool.showTextTips("没有可出的牌");
              //     SGNetKernel.instance().sendGameMsg(SubGameMSG.SUB_C_PASS_CARD, {});
              //     return
              // }
              // this.assignCardBounce(this.hintArray[this.hintIndex]);
              // this.hintIndex++;
              // if (this.hintIndex == this.hintArray.length) {
              //     this.hintIndex = 0;
              // }
              break;
            case "btn_chuPai":
              //出牌
              var pai = this.getBounceCard();
              if (pai.length > 0) {
                GameManager.inst.onPlay(pai);
              }
              break;
            case "btn_setting":
              var set = instantiate(this.setting);
              director.getScene().children[0].addChild(set);
              set.setPosition(new Vec3(0, 0));
              break;
            case "btn_dissolve":
              //退出
              //SGNetKernel.instance().dismissGame();
              break;
            case "btn_set":
              GameTool.createPanel("gandengyan/panel/panel_set");
              break;
            case "btn_location":
              //定位
              // let GPS_Prefab = instantiate(this.GPS_Prefab);
              // GPS_Prefab.parent = find("Canvas");
              break;
            case "btn_message":
              // AudioControl.playClick();
              GameTool.createPanel("pdk/pdk_chat_menu");
              break;
            case "btn_ready":
              // AudioControl.playClick();
              PokerManager.inst.onReady();
              break;
            case "record_machine_btn":
              EventCenter.emitEvent(gameExpressionEvent.SHOW_RECORDER_MACHINE);
              break;
            case "btn_exit":
              tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (ok) {
                        tgx.AudioMgr.inst.audio.clearAll();
                        RoomMgr.inst.exitRoom();
                      }
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })));
              break;
            default:
              console.error("待处理名：", name);
              break;
          }
        };
        _proto.clearAllChuPai = function clearAllChuPai() {
          for (var i = 0; i < this.playerScript.length; i++) {
            var player = this.playerScript[i];
            if (player != null) {
              player.resetChuPai();
            }
          }
        };
        _proto.clearAllPassMark = function clearAllPassMark() {
          for (var i = 0; i < this.playerScript.length; i++) {
            var player = this.playerScript[i];
            if (player != null) {
              player.showPass(false);
            }
          }
        };
        _proto.createCardRecorder = function createCardRecorder() {
          var _this3 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, "pdk/pdk_card_recorder", Prefab, function (err, prefab) {
            if (err) {
              console.error(err);
              return;
            }
            if (_this3.node.isValid) {
              var node = instantiate(prefab);
              var root = _this3.node.getChildByName("recorder_root");
              root.addChild(node);
              node.active = true;
            }
          });
        };
        _proto.showJackpot = function showJackpot() {
          // NetHelp.getJackpot(this.createJackpot.bind(this));
        };
        _proto.createJackpot = function createJackpot() {
          var _this4 = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, "pdk/pdk_jackpot", Prefab, function (err, prefab) {
            if (err) {
              console.error(err);
              return;
            }
            if (_this4.node.isValid) {
              var node = instantiate(prefab);
              var root = _this4.node.getChildByName("jackpot_root");
              root.addChild(node);
              node.active = true;
            }
          });
        };
        _proto.showNotice = function showNotice() {
          // let noticeRoot = this.node.getChildByName("notice_root");
          // loader.loadRes("hall/prefab/notice_pdk", Prefab, (err, prefab) => {
          // if (err) {
          // console.error(err);
          // return
          // }
          // if (noticeRoot.isValid) {
          // let noticeNode: Node = instantiate(prefab);
          // noticeRoot.addChild(noticeNode);
          // noticeNode.setPosition(0, 0);
          // }
          // });
        };
        _proto.activeClock = function activeClock(isActive, isAni) {
          if (isAni === void 0) {
            isAni = false;
          }
          var ani = this.clock.getComponent(Animation);
          ani.stop();
          Tween.stopAllByTarget(this.clock);
          this.clock.active = isActive;
          this.clock.setRotationFromEuler(0, 0, 0);
          if (isActive && isAni) {
            this.clock.setScale(0, 0, 0);
            this.clock.opacity = 0;
            tween(this.clock).to(0.5, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: easing.backOut
            }).parallel(tween(this.clock).to(0.2, {
              opacity: 255
            })).start();
          } else {
            this.clock.opacity = 255;
            this.clock.setScale(1, 1, 1);
          }
        };
        _proto.shockClock = function shockClock() {
          var ani = this.clock.getComponent(Animation);
          var state = ani.play();
          ani.defaultClip.wrapMode = AnimationClip.WrapMode.Loop;
        };
        _proto.showBombAni = function showBombAni(data) {
          // 显示炸弹特效
          EventCenter.emitEvent(gameExpressionEvent.SHOW_BOMB);
          var scoreRecords = data.scoreRecords;
          // 飞金币
          var dstPlayer = null;
          var srcPlayer = null;
          var addScore = 0;
          var subScore = 0;
          var seat = -1;
          for (var i = 0; i < scoreRecords.length; i++) {
            var record = scoreRecords[i];
            var chairID = record.chairID;
            var score = record.score;
            var seatID = PokerUtils.getRelativeSeatID(chairID, PokerManager.inst.myChairID);
            var player = this.playerScript[seatID];
            if (player == null) continue;
            if (score > 0) {
              dstPlayer = player;
              addScore = score;
              seat = seatID;
            } else {
              srcPlayer = player;
              subScore = score;
            }
          }
          if (dstPlayer != null && srcPlayer != null && seat != -1) {
            dstPlayer.showHeadScoreAni(addScore);
            srcPlayer.showHeadScoreAni(subScore);
            srcPlayer.showGoldFly(seat);
            var soundUrl = "sound/coin_fly"; // 飞金币音效
            PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
            this.scheduleOnce(function () {
              if (dstPlayer != null && dstPlayer.node.isValid && PDK_BattleData.instance().isInBattle) {
                dstPlayer.headAni.showGoldFall();
              }
            }, 2);
            dstPlayer.headAni.hideScoreAni(5);
            srcPlayer.headAni.hideScoreAni(5);
          }
        };
        _proto.playCountDown = function playCountDown(count) {
          var soundUrl = "sound/" + count + "s";
          PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
        };
        _proto.checkChupaiBtnDisplay = function checkChupaiBtnDisplay(data) {
          var prevCards = data.prevCards;
          var myCards = this.getAllCard();
          var btn_chuPai = this.operateMenu.getChildByName("btn_chuPai");
          var bRet = false;
          if (prevCards != null) {
            var canChupai = this.GameLogic.checkCanPlayCards(myCards, prevCards);
            btn_chuPai.active = canChupai;
            bRet = canChupai;
          } else {
            btn_chuPai.active = true;
            bRet = true;
          }
          return bRet;
        };
        _proto.checkChupaiBtnUseable = function checkChupaiBtnUseable() {
          var cards = this.getBounceCard();
          var btn_chuPai = this.operateMenu.getChildByName("btn_chuPai");
          if (btn_chuPai == null || !btn_chuPai.active) return;
          var lbl = btn_chuPai.getChildByName("label");
          var outline = lbl.getComponent(LabelOutline);
          if (this.m_prevCards != null) {
            var valid = this.GameLogic.checkValidCardType(cards, this.m_prevCards) > CARD_TYPE.NULL;
            var canChupai = this.GameLogic.checkCanPlayCards(cards, this.m_prevCards);
            var isBigger = valid && canChupai;
            if (isBigger) {
              btn_chuPai.color = this.m_enableColor;
              lbl.color = this.m_enableColor;
              if (!outline.enabled) {
                outline.enabled = true;
              }
            } else {
              btn_chuPai.color = this.m_disableColor;
              lbl.color = this.m_disableColor;
              if (outline.enabled) {
                outline.enabled = false;
              }
            }
          } else {
            btn_chuPai.color = this.m_enableColor;
            lbl.color = this.m_enableColor;
            if (!outline.enabled) {
              outline.enabled = true;
            }
          }
        };
        _proto.update = function update(dt) {
          if (this.roundCountDown.active) {
            if (this.countDownTime > 0) {
              this.countDownTime -= dt;
              this.roundCountDown.getComponent(ProgressBar).progress = this.countDownTime / this.countDownTotal;
            } else {
              this.countDownTime = this.countDownTotal;
              this.roundCountDown.getComponent(ProgressBar).progress = 1;
            }
          } else if (this.clock.active) {
            if (this.countDownTime > 0) {
              var nowDt = this.countDownTime - dt;
              if (this.countDownTime > 3 && nowDt <= 3) {
                this.shockClock();
                this.playCountDown(3);
              } else if (this.countDownTime > 2 && nowDt <= 2) {
                this.playCountDown(2);
              } else if (this.countDownTime > 1 && nowDt <= 1) {
                this.playCountDown(1);
              }
              this.countDownTime = nowDt;
              this.clock.getChildByName("label").getComponent(Label).string = Math.ceil(this.countDownTime).toString();
            } else {
              this.countDownTime = this.countDownTotal;
              this.clock.getChildByName("label").getComponent(Label).string = '0';
            }
          }
        };
        _proto.onRoomBack = function onRoomBack(data) {
          this.onGotRoomInfo(data);
          this.getSeatInfo(data);
          this.showReadyBtn(false);
          if (GameManager.inst.roomData.roomStatus == ROOM_STATUS.IDLE || GameManager.inst.roomData.roomStatus == ROOM_STATUS.WAITING) {
            // 空闲状态
            console.log('------- 空闲/等待状态 -----------');
            this.idleOperateMenu.active = true;
            var myUserInfo = PokerManager.inst.getUserInfoByID(UserMgr.inst.uid);
            if (myUserInfo) {
              this.showReadyBtn(false);
            }
            PokerManager.inst.onReady();
          } else {
            for (var i = 0; i < data.userList.length; i++) {
              var userSeatID = PokerUtils.getRelativeSeatID(data.userList[i].chairID, PokerManager.inst.myChairID);
              if (userSeatID != 0) {
                // 玩家自己不展示剩余牌数
                this.playerScript[userSeatID].setCardCount(data.userList[i].userCardCount, true);
              } else {
                this.playerScript[0].shouPai.removeAllChildren();
                var myCards = data.userList[i].cards;
                for (var j = 0; j < myCards.length; j++) {
                  var cardTemp = instantiate(this.cardPrefab);
                  cardTemp.setParent(this.playerScript[0].shouPai);
                  cardTemp.setPosition(0, 0);
                  cardTemp.getComponent(PDK_Card).cardID = myCards[j];
                  cardTemp.anchor_x = 0;
                }
              }
            }
            //出牌
            var gamePlayCard = new GamePlayCard();
            gamePlayCard.prevCards = data.prevCards;
            gamePlayCard.nextUserChairID = data.currentUserChairID;
            this.onUserPlay(gamePlayCard, data.currentLeftTime);
          }
        };
        _proto.onGameStart = function onGameStart(data) {
          var _this5 = this;
          // this.operateMenu.active = true;
          this.idleOperateMenu.active = false;
          PDK_BattleData.instance().onGameStart();
          var selfCard;
          for (var _i = 0; _i < data.userCards.length; _i++) {
            var userSeatID = PokerUtils.getRelativeSeatID(data.userCards[_i].chairID, PokerManager.inst.myChairID);
            this.playerScript[userSeatID].reset();
            if (data.userCards[_i].chairID == PokerManager.inst.myChairID) {
              selfCard = data.userCards[_i].userCard;
            }
          }
          selfCard = selfCard.sort(function (a, b) {
            return .5 - Math.random();
          });
          this.sortType = 0;
          var renShu = PokerManager.inst.roomData.playerCount;
          for (var _i2 = 0; _i2 < 13 * renShu; _i2++) {
            var card = instantiate(this.cardPrefab);
            card.setParent(this.cardPool);
            card.setPosition(0, 0);
            card.active = true;
          }
          //分牌
          var i = this.cardPool.children.length - 1;
          var countArr = [0, 0, 0, 0];
          var intervalId = setInterval(function () {
            var isSelf = i % renShu == 0;
            var card = _this5.cardPool.children[i];
            var toNode = isSelf ? _this5.playerScript[i % renShu].shouPai : _this5.playerScript[i % renShu].cardCount;
            var newVec2 = toNode.getWorldPosition();
            var vec2 = _this5.cardPool.getComponent(UITransform).convertToNodeSpaceAR(newVec2);
            var scale = isSelf ? 1 : 0.4;
            tween(card).delay(0.05).to(0.3, {
              position: vec2,
              scale: new Vec3(scale, scale, scale)
            }).call(function () {
              if (isSelf) {
                var cardTemp = instantiate(card);
                cardTemp.setParent(_this5.playerScript[0].shouPai);
                cardTemp.setPosition(new Vec3(0, 0));
                var pdkCard = cardTemp.getComponent(PDK_Card);
                if (pdkCard) {
                  pdkCard.cardID = selfCard[_this5.playerScript[0].shouPai.children.length - 1];
                }
                cardTemp.anchor_x = 0;
              } else {
                var subIndex = card.getSiblingIndex();
                countArr[subIndex % renShu]++;
                _this5.playerScript[subIndex % renShu].setCardCount(countArr[subIndex % renShu], true); // 请替换为实际的组件名
              }

              card.active = false;
            }).start();
            i--;
            if (i < 0) {
              clearInterval(intervalId);
              setTimeout(function () {
                _this5.startBattleSort();
              }, 200);
            }
          }, 10);
          PDK_PlayerSoundHelper.playSoundUrl("sound/fapai");
        };
        _proto.onEventUserEnter = function onEventUserEnter(data) {
          var seatID = PokerUtils.getRelativeSeatID(data.chairID, PokerManager.inst.myChairID);
          this.playerScript[seatID].initPlayerInfo(data);
        };
        _proto.onEventUserLeave = function onEventUserLeave(data) {
          var seatID = PokerUtils.getRelativeSeatID(data.chairID, PokerManager.inst.myChairID);
          this.playerScript[seatID].node.active = false;
        };
        _proto.onGameEnd = function onGameEnd(data) {
          console.log("游戏结束 --- ", data);
          if (this.m_gameEndPerformanceHelper != null) {
            this.m_gameEndPerformanceHelper.showGameEnd(this, data);
          }
          this.deactiveWhenRoundEnd();
          this.clearAllPassMark();
          PDK_BattleData.instance().onGameFinish();

          // if (data.bigData != null) {
          // EventCenter.emitEvent(gameEvent.EVENT_GET_RESULT_DATA);
          // }
        };

        _proto.onUserPlay = function onUserPlay(data, time) {
          if (time === void 0) {
            time = 15;
          }
          var nextPlayChairID = data.nextUserChairID,
            prevCards = data.prevCards;
          this.m_prevCards = prevCards;
          if (PokerManager.inst.myChairID == nextPlayChairID) {
            // 自己出牌
            this.m_btnSort.active = true;
            this.operateMenu.active = true;
            this.operateMenu.opacity = 0;
            Tween.stopAllByTarget(this.operateMenu);
            tween(this.operateMenu).to(0.2, {
              opacity: 255
            }).start();
            var isChupaiDisplay = this.checkChupaiBtnDisplay(data);
            this.checkChupaiBtnUseable();
            var btn_buChu = this.operateMenu.getChildByName("btn_buChu");
            var btn_buChu1 = this.operateMenu.getChildByName("btn_buChu_1");
            // 当前出牌是自己 没有上家 就不显示不出按钮
            var isBuChu = prevCards != null;
            if (isChupaiDisplay) {
              btn_buChu.active = isBuChu;
              btn_buChu1.active = false;
            } else {
              btn_buChu.active = false;
              btn_buChu1.active = isBuChu;
            }
          } else {
            // 当前出牌不是自己
            // this.operateMenu.active = false;// 隐藏出牌按钮
            Tween.stopAllByTarget(this.operateMenu);
            tween(this.operateMenu).to(0.2, {
              opacity: 0
            }).start();
          }
          var seatID = PokerUtils.getRelativeSeatID(nextPlayChairID, PokerManager.inst.myChairID);
          this.setCountDown(seatID, time);
          this.playerScript[seatID].resetChuPai();
          if (prevCards) {
            //有上家出牌
            var cards = prevCards.cards,
              chairID = prevCards.chairID,
              leftCardCount = prevCards.leftCardCount;
            var chu_seatID = PokerUtils.getRelativeSeatID(chairID, PokerManager.inst.myChairID);
            var player = this.playerScript[chu_seatID];
            player.playChuPai(cards);
            if (chu_seatID != 0) {
              // 玩家自己不现实剩余数
              player.leftCardCount(leftCardCount);
            }
            var cardType = this.GameLogic.getCardType(cards);
            player.showCardTitle(cards, cardType);

            // 播放出牌语音
            if (PDK_BattleData.instance().lastSeat != chu_seatID) {
              player.playCardSound(data);
              PDK_BattleData.instance().setLastChupai(chu_seatID, cards);
            } else {
              // 如果上一个出牌的就是这次出牌的 说明上家是过的 只记录 不播放
              PDK_BattleData.instance().setLastChupai(chu_seatID, cards);
            }
            PDK_BattleData.instance().recordOutCards(cards);
          } else {
            // 没有上家出牌 说明是新的一轮 清掉桌面上的牌
            this.clearAllChuPai();
            // 新一轮 清除PASS标记
            this.clearAllPassMark();
            // 清掉上一次出牌
            PDK_BattleData.instance().lastSeat = -1;
          }
        };
        _proto.onUserPass = function onUserPass(data) {
          var seatID = PokerUtils.getRelativeSeatID(data.chairID, PokerManager.inst.myChairID);
          var player = this.playerScript[seatID];
          if (player) {
            player.playPass();
            player.showPass(true);
            if (player.userId == UserMgr.inst.uid) {
              // 自己不出 收起手牌
              EventCenter.emitEvent(gameExpressionEvent.PUT_MY_ALL_CARDS_BACK);
            }
          }
        };
        _proto.onRoomGoldChange = function onRoomGoldChange(data) {
          var userData = data.userData;
          if (userData == null) return;
          for (var i = 0; i < userData.length; i++) {
            var item = userData[i];
            var chairID = item.chairID;
            var gold = item.gold;
            var seatID = PokerUtils.getRelativeSeatID(chairID, PokerManager.inst.myChairID);
            var player = this.playerScript[seatID];
            if (player == null) continue;
            if (isNaN(gold)) continue;
            player.setScore(gold);
          }
        };
        _proto.onUserStatusChange = function onUserStatusChange(data) {
          if (!data.isReady) {
            //设置用户准备
            if (data.chairID == PokerManager.inst.myChairID) {
              this.showReadyBtn(true);
            }
            var seatID = PokerUtils.getRelativeSeatID(data.chairID, PokerManager.inst.myChairID);
            this.playerScript[seatID].setReady(true);
          } else if (data.isReady) {
            var seatID = PokerUtils.getRelativeSeatID(data.chairID, PokerManager.inst.myChairID);
            this.playerScript[seatID].setReady(false);
            if (data.chairID == PokerManager.inst.myChairID) {
              this.showReadyBtn(false);
            }
          }
        };
        return PDK_Game;
      }(Component), _class3.ins = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerScript", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardPool", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "roundCountDown", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "operateMenu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "idleOperateMenu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn_ready", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "setting", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "panelGameResult", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblDestTitle", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblDeskBg", [_dec13], {
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

System.register("chunks:///_virtual/PDK_GameEndPerformanceHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WaitTime.ts', './PokerManager.ts', './PDK_PlayerSoundHelper.ts', './EventCenter.ts', './PDK_define.ts', './PokerUtils.ts', './GD.ts', './PDK_Result.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, WaitTime, PokerManager, PDK_PlayerSoundHelper, EventCenter, gameExpressionEvent, PokerUtils, GameTool, PDK_Result;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      WaitTime = module.default;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      PDK_PlayerSoundHelper = module.default;
    }, function (module) {
      EventCenter = module.default;
    }, function (module) {
      gameExpressionEvent = module.gameExpressionEvent;
    }, function (module) {
      PokerUtils = module.PokerUtils;
    }, function (module) {
      GameTool = module.GameTool;
    }, function (module) {
      PDK_Result = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3e49adVv+NChIBjF/dlRanv", "PDK_GameEndPerformanceHelper", undefined);
      var PDK_GameEndPerformanceHelper = exports('default', /*#__PURE__*/function () {
        function PDK_GameEndPerformanceHelper() {
          this.m_game = null;
          this.m_data = null;
          this.m_winnerSeat = -1;
          this.m_isSelfWin = false;
        }
        var _proto = PDK_GameEndPerformanceHelper.prototype;
        _proto.showGameEnd = function showGameEnd(gameScript, data) {
          this.m_game = gameScript;
          this.m_data = data;

          // 初始化数据
          this.initEndData();

          // 如果之前有显示的分数 先隐藏
          this.hideScoreAni(0);
          this.doShowGameEnd();
        };
        _proto.doShowGameEnd = /*#__PURE__*/function () {
          var _doShowGameEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.m_game == null || this.m_data == null)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  if (!(this.m_data.tongPai != null)) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 5;
                  return this.showTongpai();
                case 5:
                  _context.next = 9;
                  break;
                case 7:
                  _context.next = 9;
                  return this.showNormal();
                case 9:
                  if (!(this.m_game == null || this.m_data == null)) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return");
                case 11:
                  GameTool.showWaitLayer(true);
                  GameTool.createPanelByPrefab(this.m_game.panelGameResult, function (node) {
                    var result = node.getComponent(PDK_Result);
                    result.showGameResult(_this.m_data);
                    GameTool.showWaitLayer(false);
                  });

                  // if (clientKernel.getRoomCard() && GD.roomConfig.chipType == 1) {
                  //    //房卡模式，有单局结算 和总结算，
                  //     UIHelper.showWaitLayer(true)
                  //     GD.GameTool.createPanelByPrefab(this.m_game.panelGameResult, (node) => {
                  //     let result: PDK_Result = node.getComponent(PDK_Result);
                  //     result.showGameResult(this.m_data);
                  //     UIHelper.showWaitLayer(false)
                  // });
                  // }
                  // else {
                  //金币场模式，金币场不需要结算弹窗，无限打
                  //手动点击准备，开始下一把
                  // this.m_game.idleOperateMenu.active = true;
                  // this.m_game.showReadyBtn(true);
                  // }

                  // 重置所有效果
                  // this.resetAllPlayerEffect();
                  // GD.GameTool.getSaveGoldReward();// 救济金界面 确保弹出在结算界面前
                  // this.m_game.showIdleOperateMenu();
                  this.m_game.clearCardPool();
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doShowGameEnd() {
            return _doShowGameEnd.apply(this, arguments);
          }
          return doShowGameEnd;
        }();
        _proto.release = function release() {
          // this.m_game = null;
          // this.m_data = null;
        };
        _proto.initEndData = function initEndData() {
          if (this.m_game == null || this.m_data == null) return;
          this.m_isSelfWin = false;
          this.m_winnerSeat = -1;
          for (var i = 0; i < this.m_data.userData.length; i++) {
            var oneUserData = this.m_data.userData[i];
            var seatID = PokerUtils.getRelativeSeatID(oneUserData.chairID, PokerManager.inst.myChairID);
            var player = this.m_game.playerScript[seatID];
            if (player == null) continue;
            if (oneUserData.isWinner) {
              this.m_winnerSeat = seatID;
              if (player.userId == PokerManager.inst.myUserID) {
                this.m_isSelfWin = true;
              }
              break;
            }
          }
        };
        _proto.showHeadAni = function showHeadAni() {
          console.log("PDK_GameEndPerformanceHelper : showHeadWinLoseAni");
          if (this.m_game == null || this.m_data == null) return;
          var userData = this.m_data.userData;
          for (var i = 0; i < userData.length; i++) {
            var oneUserData = userData[i];
            var seatID = PokerUtils.getRelativeSeatID(oneUserData.chairID, PokerManager.inst.myChairID);
            var player = this.m_game.playerScript[seatID];
            if (player == null) continue;
            player.showHeadWinLoseAni(oneUserData);
          }
        }
        //    // 显示手牌 没有通牌的话全部隐藏 赢得播音效
        ;

        _proto.showHandCard = function showHandCard() {
          console.log("PDK_GameEndPerformanceHelper : showHandCard");
          if (this.m_game == null || this.m_data == null) return;
          var _this$m_data = this.m_data,
            tongPai = _this$m_data.tongPai,
            userData = _this$m_data.userData;
          for (var i = 0; i < userData.length; i++) {
            var oneUserData = userData[i];
            var seatID = PokerUtils.getRelativeSeatID(oneUserData.chairID, PokerManager.inst.myChairID);
            var player = this.m_game.playerScript[seatID];
            if (player == null) continue;
            if (seatID == this.m_winnerSeat) {
              if (tongPai != null) {
                player.playTongpai();
                player.playChuPai(tongPai.cards);
              } else {
                player.playWin();
                if (oneUserData.userCard != null && oneUserData.userCard.length != 0) {
                  player.playChuPai(oneUserData.userCard);
                }
                player.resetShouPai();
              }
            } else {
              if (oneUserData.userCard != null && oneUserData.userCard.length != 0) {
                player.playChuPai(oneUserData.userCard, true);
              }
              player.resetShouPai();
            }
          }
        }
        //    // 重置手牌
        ;

        _proto.resetHandCard = function resetHandCard() {
          console.log("PDK_GameEndPerformanceHelper : resetHandCard");
          if (this.m_game == null || this.m_data == null) return;
          for (var i = 0; i < this.m_data.userData.length; i++) {
            var oneUserData = this.m_data.userData[i];
            var seatID = PokerUtils.getRelativeSeatID(oneUserData.chairID, PokerManager.inst.myChairID);
            var player = this.m_game.playerScript[seatID];
            if (player == null) continue;
            player.resetShouPai();
            player.resetChuPai();
            player.setCardCount(0, false);
          }
        };
        _proto.resetAllPlayerEffect = function resetAllPlayerEffect() {
          console.log("PDK_GameEndPerformanceHelper : resetAllPlayerEffect");
          if (this.m_game == null || this.m_data == null) return;
          for (var i = 0; i < this.m_game.playerScript.length; i++) {
            var player = this.m_game.playerScript[i];
            if (player != null) {
              player.reset();
            }
          }
        }
        //    /** 飞金币动画 */
        ;

        _proto.showGoldFlyAni = /*#__PURE__*/
        function () {
          var _showGoldFlyAni = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(waitTime) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  console.log("PDK_GameEndPerformanceHelper : showGoldFlyAni");
                  if (!(this.m_game == null || this.m_data == null)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  // 通牌展示1秒后妃金币
                  this.m_game.playSelfWinLoseSond(this.m_data);
                  this.doGoldFly();
                  this.showHeadAni();
                  this.showRoundEndScore();
                  _context2.next = 9;
                  return waitTime.wait(this.m_game, 4);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function showGoldFlyAni(_x) {
            return _showGoldFlyAni.apply(this, arguments);
          }
          return showGoldFlyAni;
        }();
        _proto.doGoldFly = function doGoldFly() {
          if (this.m_game == null || this.m_data == null) return;
          // 飞金币特效
          if (this.m_winnerSeat != -1) {
            for (var i = 0; i < this.m_game.playerScript.length; i++) {
              var player = this.m_game.playerScript[i];
              if (player == null) continue;
              if (i != this.m_winnerSeat) {
                player.showGoldFly(this.m_winnerSeat);
              }
            }
          }
          var soundUrl = "sound/coin_fly"; // 飞金币音效
          PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
        };
        _proto.showExtraReward = /*#__PURE__*/function () {
          var _showExtraReward = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(waitTime) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function showExtraReward(_x2) {
            return _showExtraReward.apply(this, arguments);
          }
          return showExtraReward;
        }();
        _proto.showRoundEndScore = function showRoundEndScore() {
          console.log("PDK_GameEndPerformanceHelper : showRoundEndScore");
          for (var i = 0; i < this.m_data.userData.length; i++) {
            var oneUserData = this.m_data.userData[i];
            var seatID = PokerUtils.getRelativeSeatID(oneUserData.chairID, PokerManager.inst.myChairID);
            var player = this.m_game.playerScript[seatID];
            if (player == null || !player.isValid) continue;
            player.showRoundEndScore(oneUserData);
          }
        };
        _proto.hideScoreAni = function hideScoreAni(delay) {
          for (var i = 0; i < this.m_data.userData.length; i++) {
            var oneUserData = this.m_data.userData[i];
            var seatID = PokerUtils.getRelativeSeatID(oneUserData.chairID, PokerManager.inst.myChairID);
            var player = this.m_game.playerScript[seatID];
            if (player == null || !player.isValid) continue;
            player.headAni.hideScoreAni(delay);
          }
        };
        _proto.showTongpaiBigwWin = /*#__PURE__*/function () {
          var _showTongpaiBigwWin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function showTongpaiBigwWin() {
            return _showTongpaiBigwWin.apply(this, arguments);
          }
          return showTongpaiBigwWin;
        }();
        _proto.showTongpai = /*#__PURE__*/function () {
          var _showTongpai = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var waitTime;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(this.m_game == null || this.m_data == null)) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return");
                case 2:
                  waitTime = new WaitTime();
                  _context5.next = 5;
                  return waitTime.wait(this.m_game, 1);
                case 5:
                  // 1秒后展示手牌
                  this.showHandCard();
                  _context5.next = 8;
                  return waitTime.wait(this.m_game, 1);
                case 8:
                  // 开始飞金币
                  this.showGoldFlyAni(waitTime);
                  EventCenter.emitEvent(gameExpressionEvent.SHOW_TONGPAI, this.m_isSelfWin);
                  _context5.next = 12;
                  return waitTime.wait(this.m_game, 4);
                case 12:
                  // 隐藏手牌
                  this.resetHandCard();
                  //  飞碎片
                  _context5.next = 15;
                  return this.showExtraReward(waitTime);
                case 15:
                  this.hideScoreAni(1);
                case 16:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function showTongpai() {
            return _showTongpai.apply(this, arguments);
          }
          return showTongpai;
        }();
        _proto.showBigWin = /*#__PURE__*/function () {
          var _showBigWin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function showBigWin() {
            return _showBigWin.apply(this, arguments);
          }
          return showBigWin;
        }();
        _proto.showNormal = /*#__PURE__*/function () {
          var _showNormal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var waitTime;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(this.m_game == null || this.m_data == null)) {
                    _context7.next = 2;
                    break;
                  }
                  return _context7.abrupt("return");
                case 2:
                  waitTime = new WaitTime();
                  _context7.next = 5;
                  return waitTime.wait(this.m_game, 1);
                case 5:
                  // 1秒后展示手牌
                  this.showHandCard();
                  _context7.next = 8;
                  return waitTime.wait(this.m_game, 1);
                case 8:
                  // 开始飞金币
                  this.showGoldFlyAni(waitTime);
                  _context7.next = 11;
                  return waitTime.wait(this.m_game, 4);
                case 11:
                  // 等一段时间隐藏手牌隐藏手牌
                  this.resetHandCard();
                  //  飞碎片
                  _context7.next = 14;
                  return this.showExtraReward(waitTime);
                case 14:
                  this.hideScoreAni(2);
                case 15:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function showNormal() {
            return _showNormal.apply(this, arguments);
          }
          return showNormal;
        }();
        return PDK_GameEndPerformanceHelper;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_GameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_ConstDef.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, CARD_RANK, CARD_TYPE;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CARD_RANK = module.CARD_RANK;
      CARD_TYPE = module.CARD_TYPE;
    }],
    execute: function () {
      cclegacy._RF.push({}, "72eaek6fZFKKbxrjZG/Kt/Y", "PDK_GameLogic", undefined);
      var TienlenLogic = exports('default', /*#__PURE__*/function () {
        function TienlenLogic() {}
        var _proto = TienlenLogic.prototype;
        /**
         * 检查黑桃3是否在剩余牌里
         * 
         * @param oldCards 旧的数组
         */
        _proto.spade3Check = function spade3Check(deck, playerCount) {
          if (playerCount * 13 >= deck.length) {
            return true;
          }
          var spade3Index = deck.indexOf(0x03);
          if (spade3Index >= playerCount * 13 - 1) {
            // 随机一张牌
            var randomIndex = Math.floor(Math.random() * playerCount * 13);
            deck[spade3Index] = deck[randomIndex];
            deck[randomIndex] = 0x03;
          }
          return true;
        }

        /**
         * 获取牌点数
         *
         * @param card 牌
         */;
        _proto.getCardRank = function getCardRank(card) {
          return card & 0x0F;
        };
        /**
         * 获取牌花色
         *
         * @param card 牌
         */
        _proto.getCardSuit = function getCardSuit(card) {
          return (card & 0xF0) >> 4;
        };
        /**
         * 获取牌权数值
         *
         * @param card 牌
         */
        _proto.getCardWeight = function getCardWeight(card) {
          var rank = this.getCardRank(card);
          if (rank > 2) return rank - 2;
          return rank + 11;
        };
        /**
         * 获取牌颜色
         *
         * @param card 牌
         */
        _proto.getCardColor = function getCardColor(card) {
          return this.getCardSuit(card) > 1 ? 1 : 0;
        };
        /**
         * 初始化数组
         * @param count 数量
         * @param value 值
         */
        _proto.initArray = function initArray(count, value) {
          if (value === void 0) {
            value = 0;
          }
          value = value || 0;
          var arr = [];
          for (var i = 0; i < count; i++) {
            arr.push(value);
          }
          return arr;
        };
        /**
         * 获取排序数值
         *
         * @param card 牌
         */
        _proto.getSortValue = function getSortValue(card) {
          return this.getCardWeight(card) * 4 + this.getCardSuit(card);
        };
        /**
         * 扑克排序
         * @param cardList 牌数组
         */
        _proto.sort = function sort(cardList) {
          var _this = this;
          cardList.sort(function (a, b) {
            return _this.getSortValue(a) - _this.getSortValue(b);
          });
          return cardList;
        };
        /**
         * 扑克排序
         * @param cardList 牌数组
         */
        _proto.sortByCardType = function sortByCardType(cardList) {
          var targetCardList = []; // 目标数据
          var tempCardList = [].concat(cardList);
          for (var i = 0; i < cardList.length; i++) {
            var ret = this.findPromptCards(tempCardList);
            var targetCards = [];
            if (ret.pairs.length > 0) {
              if (ret.four.length > 0) {
                // 如果有四连对
                var hasPairs4 = false;
                for (var _iterator = _createForOfIteratorHelperLoose(ret.pairs), _step; !(_step = _iterator()).done;) {
                  var temp = _step.value;
                  if (temp.cards.length >= 8) {
                    targetCards = temp.cards;
                    hasPairs4 = true;
                    break;
                  }
                }
                if (!hasPairs4) {
                  targetCards = ret.four[0].cards;
                }
              } else {
                targetCards = ret.pairs[0].cards;
              }
            } else if (ret.four.length > 0) {
              targetCards = ret.four[0].cards;
            } else if (ret.straight.length > 0) {
              targetCards = ret.straight[0].cards;
            } else if (ret.three.length > 0) {
              targetCards = ret.three[0].cards;
            } else if (ret.pair.length > 0) {
              targetCards = ret.pair[0].cards;
            } else if (ret.single.length > 0) {
              targetCards = ret.single[0].cards;
            } else {
              console.error("sort cards error.");
              // throw new Error("cards error")
            }

            // 加入目标数组
            targetCardList.push.apply(targetCardList, targetCards);
            // 去除牌
            var playRet = this.playCards(tempCardList, targetCards);
            if (playRet.leftCards.length == 0) {
              break;
            }
            tempCardList = playRet.leftCards;
          }
          for (var _i in cardList) {
            cardList[_i] = targetCardList[_i];
          }
          return targetCardList;
        };
        _proto.greaterThan = function greaterThan(card1, card2) {
          return this.getSortValue(card1) > this.getSortValue(card2);
        }

        /**
         * 检查对子
         * @param card1 牌1
         * @param card2 牌2
         */;
        _proto.checkPair = function checkPair(card1, card2) {
          if (this.getCardRank(card1) == this.getCardRank(card2)) {
            return true;
          }
          return false;
        }

        /**
         * 检查连续
         * @param card1 牌1
         * @param card2 牌2
         */;
        _proto.checkContinuous = function checkContinuous(card1, card2) {
          var rank1 = this.getCardRank(card1);
          var rank2 = this.getCardRank(card2);
          if (rank1 + 1 == rank2 || rank1 == CARD_RANK.KING && rank2 == CARD_RANK.ACE) {
            return true;
          }
          return false;
        }

        /**
         * 检查三张相同
         * @param card1 牌1
         * @param card2 牌2
         * @param card3 牌3
         */;
        _proto.checkThree = function checkThree(card1, card2, card3) {
          if (this.checkPair(card1, card2) && this.checkPair(card2, card3)) {
            return true;
          }
          return false;
        }

        /**
         * 检查四张相同
         * @param card1 牌1
         * @param card2 牌2
         * @param card3 牌3
         * @param card4 牌4
         */;
        _proto.checkFour = function checkFour(card1, card2, card3, card4) {
          if (this.checkPair(card1, card2) && this.checkPair(card2, card3) && this.checkPair(card3, card4)) {
            return true;
          }
          return false;
        }

        /**
         * 获取牌型
         *
         * @param cards 牌数组
         */;
        _proto.getCardType = function getCardType(cards) {
          this.sort(cards);
          var n = cards.length;
          if (n == 1) {
            return CARD_TYPE.SINGLE;
          }
          if (n == 3) {
            if (this.checkThree(cards[0], cards[1], cards[2])) {
              return CARD_TYPE.THREE;
            }
          }
          if (n % 2 == 0) {
            if (n == 2) {
              if (this.checkPair(cards[0], cards[1])) {
                return CARD_TYPE.PAIR;
              } else {
                return CARD_TYPE.NULL;
              }
            }
            if (n == 4) {
              if (this.checkFour(cards[0], cards[1], cards[2], cards[3])) {
                return CARD_TYPE.FOUR;
              }
            }
            if (n >= 6) {
              if (this.checkPairs(cards)) {
                return CARD_TYPE.PAIRS;
              }
            }
          }
          if (this.checkStraight(cards)) {
            return CARD_TYPE.STRAIGHT;
          }
          return CARD_TYPE.NULL;
        };
        /**
         * 检查连对牌型
         *
         * @param cards 牌数组
         */
        _proto.checkPairs = function checkPairs(cards) {
          if (cards.length < 6 || cards.length % 2 != 0) {
            return false;
          }

          // 如果出现2
          if (this.getCardRank(cards[cards.length - 1]) == CARD_RANK.TWO) {
            return false;
          }
          for (var i = 0; i < cards.length - 3; i += 2) {
            // 比较点数
            if (!this.checkPair(cards[i], cards[i + 1]) || !this.checkContinuous(cards[i], cards[i + 2])) {
              return false;
            }
          }

          // 最后两张牌
          if (!this.checkPair(cards[cards.length - 2], cards[cards.length - 1])) {
            return false;
          }
          return true;
        }

        /**
         * 检查顺子牌型
         *
         * @param cards 牌数组
         */;
        _proto.checkStraight = function checkStraight(cards) {
          // 如果出现2
          if (cards.length < 3 || this.getCardRank(cards[cards.length - 1]) == CARD_RANK.TWO) {
            return false;
          }
          for (var i = 0; i < cards.length - 1; i++) {
            if (!this.checkContinuous(cards[i], cards[i + 1])) {
              return false;
            }
          }
          return true;
        }

        /**
         * 检查出牌是否有效
         *
         * @param playCards    玩家出牌
         * @param prevCardType 上轮出牌
         */;
        _proto.checkValidCardType = function checkValidCardType(playCards, prevCardType) {
          this.sort(playCards);
          this.sort(prevCardType.cards);

          // 包含2的出牌
          if (this.getCardRank(prevCardType.cards[prevCardType.cards.length - 1]) == CARD_RANK.TWO) {
            // 出1张2
            if (prevCardType.cards.length <= 2) {
              if (playCards.length == 4) {
                var ret = this.checkFour(playCards[0], playCards[1], playCards[2], playCards[3]);
                if (ret) {
                  return CARD_TYPE.FOUR;
                }
              } else if (playCards.length >= 4 + 2 * prevCardType.cards.length) {
                var ret = this.checkPairs(playCards);
                if (ret) {
                  return CARD_TYPE.PAIRS;
                }
              }
            }
          }
          var cardType = this.getCardType(prevCardType.cards);
          // 4张可以压3连对
          if (cardType == CARD_TYPE.PAIRS) {
            if (playCards.length == 4) {
              var ret = this.checkFour(playCards[0], playCards[1], playCards[2], playCards[3]);
              if (ret) {
                return CARD_TYPE.FOUR;
              } else {
                return CARD_TYPE.NULL;
              }
            }
          }

          // 4连对子压四张
          if (cardType == CARD_TYPE.FOUR) {
            if (playCards.length >= 8) {
              var ret = this.checkPairs(playCards);
              if (ret) {
                return CARD_TYPE.PAIRS;
              } else {
                return CARD_TYPE.NULL;
              }
            }
          }
          var pn = prevCardType.cards.length;
          if (prevCardType.cards.length == playCards.length) {
            if (pn == 1) {
              var ret = this.greaterThan(playCards[0], prevCardType.cards[0]);
              if (ret) {
                return CARD_TYPE.SINGLE;
              }
            } else if (pn == 3) {
              if (cardType == CARD_TYPE.THREE) {
                if (this.checkThree(playCards[0], playCards[1], playCards[2])) {
                  var ret = this.greaterThan(playCards[2], prevCardType.cards[2]);
                  if (ret) {
                    return CARD_TYPE.THREE;
                  }
                }
              }
            } else if (pn % 2 == 0) {
              if (pn == 2) {
                if (cardType == CARD_TYPE.PAIR) {
                  if (this.checkPair(playCards[0], playCards[1])) {
                    var ret = this.greaterThan(playCards[1], prevCardType.cards[1]);
                    if (ret) {
                      return CARD_TYPE.PAIR;
                    }
                  }
                }
              } else if (pn == 4) {
                if (cardType == CARD_TYPE.FOUR) {
                  if (this.checkFour(playCards[0], playCards[1], playCards[2], playCards[3])) {
                    var ret = this.greaterThan(playCards[3], prevCardType.cards[3]);
                    if (ret) {
                      return CARD_TYPE.FOUR;
                    }
                  }
                }
              }
            }
            if (pn > 2 && cardType == CARD_TYPE.STRAIGHT) {
              if (playCards.length == pn && this.checkStraight(playCards)) {
                var ret = this.greaterThan(playCards[pn - 1], prevCardType.cards[pn - 1]);
                if (ret) {
                  return CARD_TYPE.STRAIGHT;
                }
              }
            }
          }
          if (pn >= 6) {
            if (cardType == CARD_TYPE.PAIRS) {
              if (this.checkPairs(playCards)) {
                if (playCards.length > pn || playCards.length == prevCardType.cards.length && this.greaterThan(playCards[pn - 1], prevCardType.cards[pn - 1])) {
                  return CARD_TYPE.PAIRS;
                }
              }
            }
          }
          return CARD_TYPE.NULL;
        }

        /**
         * 检查是否有牌
         *
         * @param handCards 手牌
         * @param playCards 打出的牌
         */;
        _proto.checkPlayCards = function checkPlayCards(handCards, playCards) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(playCards), _step2; !(_step2 = _iterator2()).done;) {
            var card = _step2.value;
            if (handCards.indexOf(card) == -1) {
              return false;
            }
          }
          return true;
        }

        /**
         * 检查是否有牌
         * @param handCards 手牌
         * @param playCards 打出的牌
         */;
        _proto.playCards = function playCards(handCards, _playCards) {
          var tempCards = [].concat(handCards);
          for (var _iterator3 = _createForOfIteratorHelperLoose(_playCards), _step3; !(_step3 = _iterator3()).done;) {
            var card = _step3.value;
            var index = tempCards.indexOf(card);
            if (index == -1) {
              return {
                result: false,
                leftCards: handCards
              };
            } else {
              tempCards.splice(index, 1);
            }
          }
          return {
            result: true,
            leftCards: tempCards
          };
        }

        /**
         * 获取可以出的牌型
         * @param handCards    手牌
         * @param prevCardType 上家出牌
         */;
        _proto.findPromptCards = function findPromptCards(handCards, prevCardType) {
          var ret = {
            single: [],
            pair: [],
            three: [],
            straight: [],
            pairs: [],
            four: []
          };
          if (handCards.length == 0) {
            return ret;
          }
          this.sort(handCards);
          var cardType = 0;
          var pn = 0;
          if (prevCardType) {
            this.sort(prevCardType.cards);
            pn = prevCardType.cards.length;
            cardType = this.getCardType(prevCardType.cards);
          }

          // 单牌
          if (!prevCardType || cardType == CARD_TYPE.SINGLE) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(handCards), _step4; !(_step4 = _iterator4()).done;) {
              var card = _step4.value;
              if (!prevCardType || this.checkValidCardType([card], prevCardType) > CARD_TYPE.NULL) {
                ret.single.push({
                  type: CARD_TYPE.SINGLE,
                  cards: [card]
                });
              }
            }
          }

          // 对子
          if (!prevCardType || cardType == CARD_TYPE.PAIR) {
            for (var i = 0; i < handCards.length - 1; i++) {
              if (this.checkPair(handCards[i], handCards[i + 1]) && (!prevCardType || this.checkValidCardType([handCards[i], handCards[i + 1]], prevCardType) > CARD_TYPE.NULL)) {
                ret.pair.push({
                  type: CARD_TYPE.PAIR,
                  cards: [handCards[i], handCards[i + 1]]
                });
              }
            }
          }

          // 三张
          if (!prevCardType || cardType == CARD_TYPE.THREE) {
            for (var _i2 = 0; _i2 < handCards.length - 2; _i2++) {
              if (this.checkThree(handCards[_i2], handCards[_i2 + 1], handCards[_i2 + 2]) && (!prevCardType || this.checkValidCardType([handCards[_i2], handCards[_i2 + 1], handCards[_i2 + 2]], prevCardType) > CARD_TYPE.NULL)) {
                ret.three.push({
                  type: CARD_TYPE.PAIR,
                  cards: [handCards[_i2], handCards[_i2 + 1], handCards[_i2 + 2]]
                });
              }
            }
          }

          // 顺子
          if (!prevCardType || cardType == CARD_TYPE.STRAIGHT) {
            if (handCards.length >= pn) {
              var straight_list = [];
              for (var _i3 = handCards.length - 1; _i3 > pn - 2; _i3--) {
                if (this.getCardRank(handCards[_i3]) == CARD_RANK.TWO) {
                  continue;
                }
                var straight = [];
                var flag = true;
                for (var j = _i3; j >= 0; j--) {
                  if (straight.length == 0) {
                    if (!prevCardType || this.greaterThan(handCards[j], prevCardType.cards[pn - 1])) {
                      straight.push(handCards[j]);
                    }
                  } else {
                    if (this.getCardRank(handCards[j]) == this.getCardRank(straight[straight.length - 1])) {
                      // 相同点数，则替换
                      if (straight.length > 1) {
                        straight[straight.length - 1] = handCards[j];
                      }
                    } else if (this.checkContinuous(handCards[j], straight[straight.length - 1])) {
                      // 连续点数
                      straight.push(handCards[j]);
                    } else {
                      // 不连续，则不是, 新的起点
                      _i3 = j + 1;
                      flag = false;
                    }
                  }
                  if (!flag || j == 0 || prevCardType && pn == straight.length) {
                    if (straight.length >= 3 && (!prevCardType || this.checkValidCardType(straight, prevCardType) > CARD_TYPE.NULL)) {
                      straight_list.push({
                        type: CARD_TYPE.STRAIGHT,
                        cards: straight.reverse()
                      });
                    }
                    break;
                  }
                }
              }
              if (straight_list.length > 0) {
                for (var _iterator5 = _createForOfIteratorHelperLoose(straight_list.reverse()), _step5; !(_step5 = _iterator5()).done;) {
                  var temp = _step5.value;
                  ret.straight.push(temp);
                }
              }
            }
          }

          // 连对, 特殊：3连对压可压单2， 4连对单2、对2、3连对、四张
          if (!prevCardType || cardType == CARD_TYPE.PAIRS || cardType == CARD_TYPE.SINGLE && this.getCardRank(prevCardType.cards[0]) == CARD_RANK.TWO || cardType == CARD_TYPE.PAIR && this.getCardRank(prevCardType.cards[0]) == CARD_RANK.TWO || cardType == CARD_TYPE.FOUR) {
            if (handCards.length >= 6) {
              var pairs_list = [];
              for (var _i4 = handCards.length - 1; _i4 >= 5; _i4--) {
                var pairs = [];
                var _flag = true;
                for (var _j = _i4; _j >= 0; _j--) {
                  if (pairs.length == 0) {
                    pairs.push(handCards[_j]);
                  } else {
                    if (pairs.length % 2 == 0) {
                      // 检查是否连续 或者 点数相同
                      if (this.checkContinuous(handCards[_j], pairs[pairs.length - 1])) {
                        pairs.push(handCards[_j]);
                      } else if (this.getCardRank(handCards[_j]) == this.getCardRank(pairs[pairs.length - 1])) {
                        pairs[pairs.length - 1] = handCards[_j];
                      } else {
                        // 断开
                        _flag = false;
                      }
                    } else {
                      if (this.getCardRank(handCards[_j]) == this.getCardRank(pairs[pairs.length - 1])) {
                        pairs.push(handCards[_j]);
                      } else {
                        // 断开
                        _flag = false;
                      }
                    }
                  }

                  // 判断长度是否满足
                  if (!_flag || _j == 0) {
                    // 如果是单数，抛出最后一张牌
                    if (pairs.length % 2 == 1) {
                      pairs.pop();
                    }
                    var tempPairs = [].concat(pairs);
                    if (pairs.length >= 6 && (!prevCardType || this.checkValidCardType(tempPairs, prevCardType) > CARD_TYPE.NULL)) {
                      pairs_list.push({
                        type: CARD_TYPE.PAIRS,
                        cards: pairs
                      });
                    }

                    // 下一断
                    _i4 = _j + 1;
                    break;
                  }
                }
              }
              if (pairs_list.length > 0) {
                for (var _iterator6 = _createForOfIteratorHelperLoose(pairs_list.reverse()), _step6; !(_step6 = _iterator6()).done;) {
                  var _temp = _step6.value;
                  _temp.cards.reverse();
                  ret.pairs.push(_temp);
                }
              }
            }
          }

          // 四张, 特殊：可压单2、对2、3连对
          if (!prevCardType || cardType == CARD_TYPE.FOUR || cardType == CARD_TYPE.PAIRS && prevCardType.cards.length == 6 || (cardType == CARD_TYPE.PAIR || cardType == CARD_TYPE.SINGLE) && this.getCardRank(prevCardType.cards[0]) == CARD_RANK.TWO) {
            if (handCards.length >= 4) {
              for (var _i5 = 0; _i5 < handCards.length - 3; _i5++) {
                if (this.checkFour(handCards[_i5], handCards[_i5 + 1], handCards[_i5 + 2], handCards[_i5 + 3]) && (!prevCardType || this.checkValidCardType([handCards[_i5], handCards[_i5 + 1], handCards[_i5 + 2], handCards[_i5 + 3]], prevCardType) > CARD_TYPE.NULL)) {
                  ret.four.push({
                    type: CARD_TYPE.FOUR,
                    cards: [handCards[_i5], handCards[_i5 + 1], handCards[_i5 + 2], handCards[_i5 + 3]]
                  });
                }
              }
            }
          }
          return ret;
        }

        /**
         * 获取可以出的牌型
         * @param handCards    手牌
         * @param prevCardType 上家出牌
         */;
        _proto.getPlayCards = function getPlayCards(handCards, prevCardType) {
          var card_type_list = this.findPromptCards(handCards, prevCardType);
          var single = card_type_list.single,
            pair = card_type_list.pair,
            three = card_type_list.three,
            straight = card_type_list.straight,
            pairs = card_type_list.pairs,
            four = card_type_list.four;
          if (!prevCardType) {
            // 如果就剩1手牌，直接打出
            if (this.getCardType(handCards) > CARD_TYPE.NULL) {
              return handCards;
            }

            // 顺子 -> 三张 -> 对子 -> 单张
            var first_card = handCards[0];
            if (straight.length > 0 && straight[0].cards.includes(first_card)) {
              return straight[0].cards;
            } else if (three.length > 0 && three[0].cards.includes(first_card)) {
              return three[0].cards;
            } else if (pair.length > 0 && pair[0].cards.includes(first_card)) {
              return pair[0].cards;
            } else {
              return single[0].cards;
            }
          } else {
            // 如果就剩1手牌，直接打出
            if (this.checkValidCardType(handCards, prevCardType) > CARD_TYPE.NULL) {
              return handCards;
            }
            var cardType = this.getCardType(prevCardType.cards);

            // 先选合适的牌型
            if (cardType != CARD_TYPE.PAIRS && cardType != CARD_TYPE.FOUR) {
              switch (cardType) {
                case CARD_TYPE.SINGLE:
                  if (single.length > 0) {
                    return single[0].cards;
                  }
                  break;
                case CARD_TYPE.PAIR:
                  if (pair.length > 0) {
                    return pair[0].cards;
                  }
                  break;
                case CARD_TYPE.STRAIGHT:
                  if (straight.length > 0) {
                    return straight[0].cards;
                  }
                  break;
                case CARD_TYPE.THREE:
                  if (three.length > 0) {
                    return three[0].cards;
                  }
                  break;
              }
            }

            // 如果出2则选连对 和 四季
            if (cardType == CARD_TYPE.PAIRS || cardType == CARD_TYPE.FOUR || prevCardType.cards.length <= 2 && this.getCardRank(prevCardType.cards[0]) == CARD_RANK.TWO) {
              if (pairs.length > 0) {
                var cards = pairs[0].cards;
                if (cards.length >= 8) {
                  // 先出四季
                  if (four.length > 0) {
                    return four[0].cards;
                  }
                  return cards;
                }
              }

              // 出四季
              if (four.length > 0) {
                return four[0].cards;
              }
            }
          }
          return [];
        }

        /**
         * 判断是否可以出牌
         * @param handCards    手牌
         * @param prevCardType 上家出牌
         */;
        _proto.checkCanPlayCards = function checkCanPlayCards(handCards, prevCardType) {
          var card_type_list = this.findPromptCards(handCards, prevCardType);
          var single = card_type_list.single,
            pair = card_type_list.pair,
            three = card_type_list.three,
            straight = card_type_list.straight,
            pairs = card_type_list.pairs,
            four = card_type_list.four;
          if (single.length > 0) {
            return true;
          } else if (pair.length > 0) {
            return true;
          } else if (three.length > 0) {
            return true;
          } else if (straight.length > 0) {
            return true;
          } else if (pairs.length > 0) {
            return true;
          } else if (four.length > 0) {
            return true;
          }
          return false;
        }

        /**
         * 判断是否有通牌
         * @param handCards 手牌
         */;
        _proto.getTongPaiCards = function getTongPaiCards(handCards) {
          var card_type_list = this.findPromptCards(handCards);
          var single = card_type_list.single,
            pair = card_type_list.pair,
            three = card_type_list.three,
            straight = card_type_list.straight,
            pairs = card_type_list.pairs,
            four = card_type_list.four;

          // 3~A
          if (straight.length > 0 && straight[straight.length - 1].cards.length == 12) {
            return straight[straight.length - 1].cards;
          }

          // 黑桃3的三连对，或者5连对
          if (pairs.length > 0) {
            for (var _iterator7 = _createForOfIteratorHelperLoose(pairs), _step7; !(_step7 = _iterator7()).done;) {
              var tempCardType = _step7.value;
              if (tempCardType.cards.includes(0x03) || tempCardType.cards.length >= 10) {
                return tempCardType.cards;
              }
            }
          }

          // 四张2
          if (four.length > 0) {
            for (var _iterator8 = _createForOfIteratorHelperLoose(four), _step8; !(_step8 = _iterator8()).done;) {
              var _tempCardType = _step8.value;
              if (this.getCardRank(_tempCardType.cards[0]) == CARD_RANK.TWO) {
                return _tempCardType.cards;
              }
            }
          }

          // 随意6对
          if (pair.length >= 6) {
            var sixPairCards = [];
            for (var _iterator9 = _createForOfIteratorHelperLoose(pair), _step9; !(_step9 = _iterator9()).done;) {
              var _tempCardType2 = _step9.value;
              var isIn = false;
              for (var _iterator10 = _createForOfIteratorHelperLoose(_tempCardType2.cards), _step10; !(_step10 = _iterator10()).done;) {
                var tempCard = _step10.value;
                if (sixPairCards.indexOf(tempCard) != -1) {
                  isIn = true;
                  continue;
                }
              }
              if (!isIn) {
                sixPairCards.push.apply(sixPairCards, _tempCardType2.cards);
              }
            }
            if (sixPairCards.length >= 12) {
              return sixPairCards;
            }
          }
          var blackCards = [];
          var redCards = [];
          var colors = [blackCards, redCards];
          for (var _iterator11 = _createForOfIteratorHelperLoose(handCards), _step11; !(_step11 = _iterator11()).done;) {
            var card = _step11.value;
            colors[this.getCardColor(card)].push(card);
          }
          for (var _i6 = 0, _colors = colors; _i6 < _colors.length; _i6++) {
            var color = _colors[_i6];
            if (color.length >= 12) {
              return color;
            }
          }
          return [];
        }

        /**
         * 计算手牌倍数
         * @param handCards 手牌
         */;
        _proto.calcHandCardTimes = function calcHandCardTimes(handCards, cfg) {
          // 优先找出2的倍数
          var timeList = [];
          var copyCards = [].concat(handCards);
          if (handCards.indexOf(0x02) != -1) {
            //黑桃2
            timeList.push({
              cards: [0x02],
              times: cfg.spade2
            });
            this.playCards(copyCards, [0x02]);
          }
          if (handCards.indexOf(0x12) != -1) {
            //草花2
            timeList.push({
              cards: [0x02],
              times: cfg.club2
            });
            this.playCards(copyCards, [0x12]);
          }
          if (handCards.indexOf(0x22) != -1) {
            //方块2
            timeList.push({
              cards: [0x02],
              times: cfg.diamond2
            });
            this.playCards(copyCards, [0x22]);
          }
          if (handCards.indexOf(0x32) != -1) {
            //红心2
            timeList.push({
              cards: [0x02],
              times: cfg.heart2
            });
            this.playCards(copyCards, [0x32]);
          }
          for (var i = 0; i < handCards.length; i++) {
            var cardTypeList = this.findPromptCards(copyCards);
            var pairs = cardTypeList.pairs,
              four = cardTypeList.four;
            if (pairs.length > 0 && pairs[pairs.length - 1].cards.length >= 8) {
              timeList.push({
                cards: pairs[pairs.length - 1].cards,
                times: cfg.pairs4
              });
              this.playCards(copyCards, pairs[pairs.length - 1].cards);
              continue;
            }
            if (four.length > 0) {
              for (var _iterator12 = _createForOfIteratorHelperLoose(four), _step12; !(_step12 = _iterator12()).done;) {
                var tempCardType = _step12.value;
                timeList.push({
                  cards: tempCardType.cards,
                  times: cfg.four
                });
                this.playCards(copyCards, tempCardType.cards);
              }
              continue;
            }
            if (pairs.length > 0) {
              timeList.push({
                cards: pairs[0].cards,
                times: cfg.pairs3
              });
              this.playCards(copyCards, pairs[0].cards);
              continue;
            }
            break;
          }
          var badTotalTimes = 0;
          for (var _i7 = 0, _timeList = timeList; _i7 < _timeList.length; _i7++) {
            var t = _timeList[_i7];
            badTotalTimes += t.times;
          }
          return {
            badTotalTimes: badTotalTimes,
            timeList: timeList,
            leftCards: copyCards
          };
        };
        return TienlenLogic;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_GotoHallHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "d653b1ntKtECrZ4YVYTkLaq", "PDK_GotoHallHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_GotoHallHelper = exports('default', (_dec = ccclass('PDKGotoHallHelper'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_GotoHallHelper, _Component);
        function PDK_GotoHallHelper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isGetResult = false;
          // 是否有结算数据
          _this.isGotoHall = false;
          return _this;
        }
        var _proto = PDK_GotoHallHelper.prototype;
        // 是否需要去大厅
        _proto.onLoad = function onLoad() {
          // this.isGetResult = false;
          // this.isGotoHall = false;
          // EventCenter.onEvent(gameEvent.EVENT_GET_RESULT_DATA, this.onGetResultData, this);
          // EventCenter.onEvent(gameEvent.EVENT_GET_GOTO_HALL, this.onGoToHall, this);
          // EventCenter.onEvent(gameEvent.EVENT_CLOSE_RESULT, this.onCloseResult, this);
        };
        _proto.onDestroy = function onDestroy() {
          // EventCenter.offEvent(gameEvent.EVENT_GET_RESULT_DATA, this.onGetResultData, this);
          // EventCenter.offEvent(gameEvent.EVENT_GET_GOTO_HALL, this.onGoToHall, this);
          // EventCenter.offEvent(gameEvent.EVENT_CLOSE_RESULT, this.onCloseResult, this);
        };
        _proto.onGetResultData = function onGetResultData() {
          // cc.log("收到大结算数据");
          // this.isGetResult = true;
        };
        _proto.onGoToHall = function onGoToHall() {
          //        //延迟触发，保证结算数据先到位
          // this.scheduleOnce(() => {
          // cc.log("收到返回大厅请求");
          // this.isGotoHall = true;
          // if (!this.isGetResult) {
          // this.gotoHall();
          // }
          // }, 0.2)
        };
        _proto.onCloseResult = function onCloseResult() {
          // cc.log("关闭战斗结算界面");
          // if (this.isGotoHall) {
          // this.gotoHall();
          // }
          // else {
          // this.isGetResult = false;
          // }
        };
        _proto.gotoHall = function gotoHall() {
          // this.isGetResult = false;
          // this.isGotoHall = false;
          // clientKernel.gotoHall();
        };
        return PDK_GotoHallHelper;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /*
      //  * @Author: xz
      //  * @Date: 2021-12-14 23:19:39
      //  * @LastEditTime: 2021-12-23 11:04:26
      //  * @LastEditors: xz
      //  * @Description: 
      //  */
      // import EventCenter from "../../../../main/script/utils/EventCenter";
      // import { gameEvent } from "../PDK_define";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_GotoHallHelper extends cc.Component {
      // 
      //     isGetResult: boolean = false;  // 是否有结算数据
      //     isGotoHall: boolean = false;    // 是否需要去大厅
      // 
      //     onLoad() {
      //         this.isGetResult = false;
      //         this.isGotoHall = false;
      //         EventCenter.onEvent(gameEvent.EVENT_GET_RESULT_DATA, this.onGetResultData, this);
      //         EventCenter.onEvent(gameEvent.EVENT_GET_GOTO_HALL, this.onGoToHall, this);
      //         EventCenter.onEvent(gameEvent.EVENT_CLOSE_RESULT, this.onCloseResult, this);
      //     }
      // 
      //     onDestroy() {
      //         EventCenter.offEvent(gameEvent.EVENT_GET_RESULT_DATA, this.onGetResultData, this);
      //         EventCenter.offEvent(gameEvent.EVENT_GET_GOTO_HALL, this.onGoToHall, this);
      //         EventCenter.offEvent(gameEvent.EVENT_CLOSE_RESULT, this.onCloseResult, this);
      //     }
      // 
      //     onGetResultData() {
      //         cc.log("收到大结算数据");
      //         this.isGetResult = true;
      //     }
      // 
      //     onGoToHall() {
      //         //延迟触发，保证结算数据先到位
      //         this.scheduleOnce(() => {
      //             cc.log("收到返回大厅请求");
      //             this.isGotoHall = true;
      //             if (!this.isGetResult) {
      //                 this.gotoHall();
      //             }
      //         }, 0.2)
      //     }
      // 
      //     onCloseResult() {
      //         cc.log("关闭战斗结算界面");
      //         if (this.isGotoHall) {
      //             this.gotoHall();
      //         }
      //         else {
      //             this.isGetResult = false;
      //         }
      //     }
      // 
      //     gotoHall() {
      //         this.isGetResult = false;
      //         this.isGotoHall = false;
      //         clientKernel.gotoHall();
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_HeadframeAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_FlyGold.ts', './PDK_PlayerSoundHelper.ts', './GameTools.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Node, dragonBones, Prefab, Label, Vec3, Tween, tween, easing, instantiate, AnimationClip, Component, PDK_FlyGold, PDK_PlayerSoundHelper, GameTools, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Node = module.Node;
      dragonBones = module.dragonBones;
      Prefab = module.Prefab;
      Label = module.Label;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      tween = module.tween;
      easing = module.easing;
      instantiate = module.instantiate;
      AnimationClip = module.AnimationClip;
      Component = module.Component;
    }, function (module) {
      PDK_FlyGold = module.default;
    }, function (module) {
      PDK_PlayerSoundHelper = module.default;
    }, function (module) {
      GameTools = module.default;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "308aaPHakNCu4aRZHbd0uzp", "PDK_HeadframeAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_HeadframeAni = exports('default', (_dec = ccclass('PDKHeadframeAni'), _dec2 = property(Animation), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(dragonBones.ArmatureDisplay), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_HeadframeAni, _Component);
        function PDK_HeadframeAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ani", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spWin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spLose", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldFall", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyGoldPrefab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "battleScoreNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seatRoot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seat0", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seat1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seat2", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seat3", _descriptor11, _assertThisInitialized(_this));
          _this.m_lblPosScore = null;
          _this.m_lblNegScore = null;
          _this.m_seatIndex = void 0;
          _this.m_passAni = null;
          return _this;
        }
        var _proto = PDK_HeadframeAni.prototype;
        _proto.onLoad = function onLoad() {
          this.m_passAni = this.node.getChildByName("pass_ani").getComponent(Animation);
          var parentName = this.node.parent.name;
          this.m_seatIndex = Number(parentName.replace("seat_", ""));
          this.m_lblPosScore = this.battleScoreNode.getChildByName("pos").getComponent(Label);
          this.m_lblPosScore.node.active = false;
          this.m_lblNegScore = this.battleScoreNode.getChildByName("neg").getComponent(Label);
          this.m_lblNegScore.node.active = false;
          this.reset();
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.reset = function reset() {
          this.ani.node.active = false;
          this.spWin.active = false;
          this.spLose.active = false;
          if (this.m_passAni != null) {
            this.m_passAni.node.active = false;
          }
        };
        _proto.showWin = function showWin(score) {
          var _this2 = this;
          this.scheduleOnce(function () {
            _this2.doShowWin(score);
          }, 1);
        };
        _proto.doShowWin = function doShowWin(score) {
          var _this3 = this;
          this.ani.node.active = true;
          this.spWin.active = true;
          this.spLose.active = false;
          this.ani.play("win");
          this.scheduleOnce(function () {
            _this3.showGoldFall();
          }, 0.5);
          this.scheduleOnce(function () {
            _this3.showScoreAni(score);
          }, 1.5);
        };
        _proto.showGoldFall = function showGoldFall() {
          this.goldFall.playAnimation("newAnimation", 1);
          var soundUrl = "sound/coin2";
          PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
        };
        _proto.showLose = function showLose(score) {
          var _this4 = this;
          this.ani.node.active = true;
          this.spWin.active = false;
          this.spLose.active = true;
          this.ani.play("win");
          this.scheduleOnce(function () {
            _this4.showScoreAni(score);
          }, 1.5);
        };
        _proto.showScoreAni = function showScoreAni(score) {
          var lbl = null;
          if (score > 0) {
            this.m_lblNegScore.node.active = false;
            this.m_lblPosScore.node.active = true;
            this.m_lblPosScore.string = "+" + GameTools.nFormatter(score);
            lbl = this.m_lblPosScore;
          } else {
            score = -score;
            this.m_lblNegScore.node.active = true;
            this.m_lblPosScore.node.active = false;
            this.m_lblNegScore.string = "-" + GameTools.nFormatter(score);
            lbl = this.m_lblNegScore;
          }
          if (lbl) {
            lbl.node.opacity = 0;
            lbl.node.setScale(new Vec3(0.8, 0.8, 1));

            // 停止当前节点上的所有 tween 动画
            Tween.stopAllByTarget(lbl.node);

            // 创建淡入动画
            var fadeInTween = tween(lbl.node).to(0.5, {
              opacity: 255
            });

            // 创建缩放动画
            var scaleTween = tween(lbl.node).to(2, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: easing.backOut
            });

            // 并行执行淡入和缩放动画
            tween(lbl.node).parallel(fadeInTween, scaleTween).start();
          }
        };
        _proto.hideScoreAni = function hideScoreAni(delay) {
          var _this5 = this;
          if (delay === void 0) {
            delay = 0;
          }
          this.scheduleOnce(function () {
            if (_this5.m_lblNegScore.node.isValid) {
              _this5.m_lblNegScore.node.active = false;
              _this5.m_lblPosScore.node.active = false;
            }
          }, delay);
        };
        _proto.showFlyGold = function showFlyGold(winSeatIndex) {
          if (winSeatIndex == this.m_seatIndex) return;
          var goldCount = Utils.randomRangeInt(20, 30);
          var winSeat = this['seat' + winSeatIndex];
          var selfSeat = this['seat' + this.m_seatIndex];
          if (winSeat == null || selfSeat == null) return;
          for (var i = 0; i < goldCount; i++) {
            var gold = instantiate(this.flyGoldPrefab);
            gold.setParent(this.seatRoot);
            var goldFly = gold.getComponent(PDK_FlyGold);
            goldFly.init(selfSeat.x, selfSeat.y, winSeat.x, winSeat.y);
          }
        };
        _proto.showPass = function showPass(isPass) {
          var _this6 = this;
          if (!this.m_passAni) return;
          if (isPass) {
            this.m_passAni.node.active = true;
            this.m_passAni.defaultClip.wrapMode = AnimationClip.WrapMode.Loop;
            this.m_passAni.play();

            // 停止当前节点上的所有 tween 动画
            Tween.stopAllByTarget(this.m_passAni.node);
            this.m_passAni.node.opacity = 0;

            // 创建淡入动画
            tween(this.m_passAni.node).to(0.3, {
              opacity: 255
            }).start();
          } else {
            if (this.m_passAni.node.active) {
              // 停止当前节点上的所有 tween 动画
              Tween.stopAllByTarget(this.m_passAni.node);

              // 创建淡出动画并在完成后停止动画、隐藏节点
              tween(this.m_passAni.node).to(0.3, {
                opacity: 0
              }).call(function () {
                _this6.m_passAni.stop();
                _this6.m_passAni.node.active = false;
              }).start();
            }
          }
        };
        return PDK_HeadframeAni;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ani", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spLose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "goldFall", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "flyGoldPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "battleScoreNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "seatRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "seat0", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "seat1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "seat2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "seat3", [_dec12], {
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

System.register("chunks:///_virtual/PDK_Jackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "6432dr2EyBEZKJ42wpm2yDW", "PDK_Jackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Jackpot = exports('default', (_dec = ccclass('PDKJackpot'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Jackpot, _Component);
        function PDK_Jackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_arrRollingNums = [];
          _this.m_prefabRollNum = null;
          _this.m_numContainer = null;
          _this.bindObj = void 0;
          return _this;
        }
        var _proto = PDK_Jackpot.prototype;
        _proto.onLoad = function onLoad() {
          // let bg:cc.Node = this.node.getChildByName("jackpot_bg");
          // bg.on(cc.Node.EventType.TOUCH_END, this.onShowInfo, this);
          // this.m_numContainer = bg.getChildByName("container");
          // this.m_prefabRollNum = this.m_numContainer.getChildByName("roll_number");
          // this.m_prefabRollNum.active = false;
          // this.node.opacity = 0;
          // this.bindEvent();
        };
        _proto.onDestroy = function onDestroy() {
          // if (this.bindObj != null) {
          // for (let i = 0; i < this.bindObj.length; i++) {
          // onfire.un(this.bindObj[i]);
          // }
          // }
        };
        _proto.start = function start() {
          // this.onJackpotUpdate();
        };
        _proto.bindEvent = function bindEvent() {
          // this.bindObj = [];
          // this.bindObj.push(onfire.on("ON_JACKPOT_UPDATE", this.onJackpotUpdate.bind(this)));
        };
        _proto.onJackpotUpdate = function onJackpotUpdate() {
          // if (isNaN(KernelData.jackpot)) return;

          // if (this.node.opacity == 0) {
          // let fade = cc.fadeIn(0.2);
          // this.node.runAction(fade);
          // }
          // let score = KernelData.jackpot;
          // this.setScore(score);
        };
        _proto.setScore = function setScore(score) {
          // score = Math.floor(score);
          // let strScore = score.toString();
          // let idx = 0;
          // for (let i = strScore.length - 1; i >= 0; i--) {
          // let str = strScore[i];
          // let rollNum: RollingNumber = null;
          // if (this.m_arrRollingNums.length <= idx) {
          // rollNum = cc.instantiate(this.m_prefabRollNum).getComponent(RollingNumber);
          // rollNum.node.active = true;
          // this.m_numContainer.addChild(rollNum.node);
          // this.m_arrRollingNums.push(rollNum);
          // }
          // else {
          // rollNum = this.m_arrRollingNums[idx];
          // }
          // rollNum.setNum(str);
          // idx++;
          // }
        };
        _proto.onShowInfo = function onShowInfo() {
          // GD.GameTool.createPanel("pdk/pdk_jackpot_info", (newNode: cc.Node) => {
          //            //newNode.getComponent(PDK_PlayerInfo).setData(this.userId, this.chariID)
          // });
        };
        return PDK_Jackpot;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import RollingNumber from "./RollingNumber";
      // import EventCenter from "../../../../../main/script/utils/EventCenter";
      // import { gameExpressionEvent } from "../../PDK_define";
      // import PDK_BattleData from "../../data/PDK_BattleData";
      // import { GD } from "../../../../../public/GD";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_Jackpot extends cc.Component {
      // 
      //     private m_arrRollingNums: RollingNumber[] = [];
      //     private m_prefabRollNum: cc.Node = null;
      //     private m_numContainer: cc.Node = null;
      //     
      //     bindObj: any[];
      // 
      //     onLoad() {
      //         let bg:cc.Node = this.node.getChildByName("jackpot_bg");
      //         bg.on(cc.Node.EventType.TOUCH_END, this.onShowInfo, this);
      //         this.m_numContainer = bg.getChildByName("container");
      //         this.m_prefabRollNum = this.m_numContainer.getChildByName("roll_number");
      //         this.m_prefabRollNum.active = false;
      //         this.node.opacity = 0;
      //         this.bindEvent();
      //     }
      // 
      //     onDestroy() {
      //         if (this.bindObj != null) {
      //             for (let i = 0; i < this.bindObj.length; i++) {
      //                 onfire.un(this.bindObj[i]);
      //             }
      //         }
      //     }
      // 
      //     start() {
      //         this.onJackpotUpdate();
      //     }
      // 
      //     
      //     private bindEvent() {
      //         this.bindObj = [];
      //         this.bindObj.push(onfire.on("ON_JACKPOT_UPDATE", this.onJackpotUpdate.bind(this)));
      // 
      //     }
      // 
      //     private onJackpotUpdate() {
      //         if (isNaN(KernelData.jackpot)) return;
      // 
      //         if (this.node.opacity == 0) {
      //             let fade = cc.fadeIn(0.2);
      //             this.node.runAction(fade);
      //         }
      //         let score = KernelData.jackpot;
      //         this.setScore(score);
      //     }
      // 
      //     private setScore(score: number) {
      //         score = Math.floor(score);
      //         let strScore = score.toString();
      //         let idx = 0;
      //         for (let i = strScore.length - 1; i >= 0; i--) {
      //             let str = strScore[i];
      //             let rollNum: RollingNumber = null;
      //             if (this.m_arrRollingNums.length <= idx) {
      //                 rollNum = cc.instantiate(this.m_prefabRollNum).getComponent(RollingNumber);
      //                 rollNum.node.active = true;
      //                 this.m_numContainer.addChild(rollNum.node);
      //                 this.m_arrRollingNums.push(rollNum);
      //             }
      //             else {
      //                 rollNum = this.m_arrRollingNums[idx];
      //             }
      //             rollNum.setNum(str);
      //             idx++;
      //         }
      //     }
      // 
      //     private onShowInfo() {
      //         GD.GameTool.createPanel("pdk/pdk_jackpot_info", (newNode: cc.Node) => {
      //             //newNode.getComponent(PDK_PlayerInfo).setData(this.userId, this.chariID)
      //         });
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_JackpotInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "6e3b2U08w1EOLpirY6ylrLO", "PDK_JackpotInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_JackpotInfo = exports('default', (_dec = ccclass('PDKJackpotInfo'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_JackpotInfo, _Component);
        function PDK_JackpotInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreContainer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTitle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDesc", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSS", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCQ", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPT", _descriptor8, _assertThisInitialized(_this));
          _this.m_arrScoreItem = [];
          return _this;
        }
        var _proto = PDK_JackpotInfo.prototype;
        _proto.onLoad = function onLoad() {
          // this.scoreItem.active = false;
        };
        _proto.start = function start() {
          // this.showScore();
          // this.showReward();
          // this.btnClose.on(cc.Node.EventType.TOUCH_END, this.closeMe, this);
        };
        _proto.showScore = function showScore() {
          // if (isNaN(KernelData.jackpot)) return;
          // let score = KernelData.jackpot;
          // score = Math.floor(score);
          // let strScore = score.toString();
          // for (let i = 0; i < strScore.length; i++) {
          // let str = strScore[i];
          // let scoreItem: cc.Node = null;
          // if (this.m_arrScoreItem.length <= i) {
          // scoreItem = cc.instantiate(this.scoreItem);
          // scoreItem.active = true;
          // this.scoreContainer.addChild(scoreItem);
          // }
          // else {
          // scoreItem = this.m_arrScoreItem[i];
          // }
          // if (scoreItem != null) {
          // let lbl = scoreItem.getChildByName("score");
          // lbl.getComponent(cc.Label).string = str;
          // }
          // }
        };
        _proto.showReward = function showReward() {
          // let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          // this.lblTitle.string = langConfig.getLangById(13001);
          // this.lblDesc.string = langConfig.getLangById(13002);
          // this.lblSS.string = langConfig.getLangById(13003);
          // this.lblCQ.string = langConfig.getLangById(13004);
          // this.lblPT.string = langConfig.getLangById(13005);

          // let jackpotConfig = ConfigManager.getInstance().getConfig(JackpotDistributeConfigContainer);
          // let lbl = this.lblSS.node.getChildByName("lbl").getComponent(cc.Label);
          //        // 史诗 3
          // let cfg = jackpotConfig.getDataById(3);
          // lbl.string = cfg.percent + "%";

          // lbl = this.lblCQ.node.getChildByName("lbl").getComponent(cc.Label);
          //        // 传奇 2
          // cfg = jackpotConfig.getDataById(2);
          // lbl.string = cfg.percent + "%";

          // lbl = this.lblPT.node.getChildByName("lbl").getComponent(cc.Label);
          //        // 普通 1
          // cfg = jackpotConfig.getDataById(1);
          // lbl.string = cfg.percent + "%";
        };
        _proto.closeMe = function closeMe() {
          // GD.GameTool.destroyBlurBg();
          // this.node && this.node.destroy();
        };
        return PDK_JackpotInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblTitle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblDesc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblSS", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblCQ", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblPT", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import { GD } from "../../../../../public/GD";
      // import PDK_BattleData from "../../data/PDK_BattleData";
      // import { ConfigManager } from "../../../../../kernel/ConfigManager";
      // import { LanguageConfigContainer } from "../../../../../kernel/Conifg/LanguageConfigContainer";
      // import { JackpotDistributeConfigContainer } from "../../../../../kernel/Conifg/JackpotDistributeConfigContainer";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_JackpotInfo extends cc.Component {
      //     @property(cc.Node)
      //     btnClose: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     scoreContainer: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     scoreItem: cc.Node = null;
      //     
      //     @property(cc.Label)
      //     lblTitle: cc.Label = null;
      //     
      //     @property(cc.Label)
      //     lblDesc: cc.Label = null;
      // 
      //     @property(cc.Label)
      //     lblSS: cc.Label = null;
      //     
      //     @property(cc.Label)
      //     lblCQ: cc.Label = null;
      //     
      //     @property(cc.Label)
      //     lblPT: cc.Label = null;
      // 
      //     private m_arrScoreItem:cc.Node[] = [];
      // 
      //     onLoad() {
      //         this.scoreItem.active = false;
      //     }
      // 
      //     start() {
      //         this.showScore();
      //         this.showReward();
      //         this.btnClose.on(cc.Node.EventType.TOUCH_END, this.closeMe, this);
      //     }
      //     
      //     private showScore() {
      //         if (isNaN(KernelData.jackpot)) return;
      //         let score = KernelData.jackpot;
      //         score = Math.floor(score);
      //         let strScore = score.toString();
      //         for (let i = 0; i < strScore.length; i++) {
      //             let str = strScore[i];
      //             let scoreItem: cc.Node = null;
      //             if (this.m_arrScoreItem.length <= i) {
      //                 scoreItem = cc.instantiate(this.scoreItem);
      //                 scoreItem.active = true;
      //                 this.scoreContainer.addChild(scoreItem);
      //             }
      //             else {
      //                 scoreItem = this.m_arrScoreItem[i];
      //             }
      //             if (scoreItem != null) {
      //                 let lbl = scoreItem.getChildByName("score");
      //                 lbl.getComponent(cc.Label).string = str;
      //             }
      //         }
      //     }
      // 
      //     private showReward() {
      //         let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
      //         this.lblTitle.string = langConfig.getLangById(13001);
      //         this.lblDesc.string = langConfig.getLangById(13002);
      //         this.lblSS.string = langConfig.getLangById(13003);
      //         this.lblCQ.string = langConfig.getLangById(13004);
      //         this.lblPT.string = langConfig.getLangById(13005);
      // 
      //         let jackpotConfig = ConfigManager.getInstance().getConfig(JackpotDistributeConfigContainer);
      //         let lbl = this.lblSS.node.getChildByName("lbl").getComponent(cc.Label);
      //         // 史诗 3
      //         let cfg = jackpotConfig.getDataById(3);
      //         lbl.string = cfg.percent + "%";
      // 
      //         lbl = this.lblCQ.node.getChildByName("lbl").getComponent(cc.Label);
      //         // 传奇 2
      //         cfg = jackpotConfig.getDataById(2);
      //         lbl.string = cfg.percent + "%";
      // 
      //         lbl = this.lblPT.node.getChildByName("lbl").getComponent(cc.Label);
      //         // 普通 1
      //         cfg = jackpotConfig.getDataById(1);
      //         lbl.string = cfg.percent + "%";
      //     }
      // 
      //     closeMe() {
      //         GD.GameTool.destroyBlurBg();
      //         this.node && this.node.destroy();
      //     }
      // 
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_Card.ts', './PDK_Game.ts', './PDK_HeadframeAni.ts', './PDK_CardTitle.ts', './PDK_ConstDef.ts', './PDK_PlayerSoundHelper.ts', './PokerManager.ts', './GameTools.ts', './Define4.ts', './PokerUtils.ts', './RoomMgr.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Vec3, Sprite, Tween, tween, easing, Component, instantiate, UITransform, PDK_Card, PDK_Game, PDK_HeadframeAni, PDK_CardTitle, CARD_TYPE, PDK_PlayerSoundHelper, PokerManager, GameTools, CARD_RANK, PokerUtils, RoomMgr, UserMgr;
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
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      easing = module.easing;
      Component = module.Component;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
    }, function (module) {
      PDK_Card = module.default;
    }, function (module) {
      PDK_Game = module.default;
    }, function (module) {
      PDK_HeadframeAni = module.default;
    }, function (module) {
      PDK_CardTitle = module.default;
    }, function (module) {
      CARD_TYPE = module.CARD_TYPE;
    }, function (module) {
      PDK_PlayerSoundHelper = module.default;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      GameTools = module.default;
    }, function (module) {
      CARD_RANK = module.CARD_RANK;
    }, function (module) {
      PokerUtils = module.PokerUtils;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "f15f3WXu79Hy7xlnssJtbEx", "PDK_Player", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Player = exports('default', (_dec = ccclass('PDKPlayer'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(PDK_HeadframeAni), _dec13 = property(Node), _dec14 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Player, _Component);
        function PDK_Player() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nickname", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "id", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon_bank", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shouPai", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chuPai", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardCount", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clockPos", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ready", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "score", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headAni", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatText", _descriptor13, _assertThisInitialized(_this));
          _this.userId = "";
          _this.m_isBind = false;
          _this.chariID = void 0;
          _this.m_cardTitle = null;
          _this.m_scoreNum = 0;
          _this.m_soundHelper = new PDK_PlayerSoundHelper();
          return _this;
        }
        var _proto = PDK_Player.prototype;
        _proto.onLoad = function onLoad() {
          var _this$shouPai;
          this.node.active = false;
          this.id.string = "";
          (_this$shouPai = this.shouPai) == null || _this$shouPai.destroyAllChildren();
          this.chuPai.destroyAllChildren();
          this.setCardCount(0, false);
          this.setReady(false);
          this.score && (this.score.string = "0");
          var chatBubble = this.chatNode.getChildByName("chat_bubble");
          chatBubble.scale = new Vec3(0, 0);
          this.m_cardTitle = this.node.getChildByName("card_title").getComponent(PDK_CardTitle);
        };
        _proto.start = function start() {};
        _proto.onDestroy = function onDestroy() {
          this.m_soundHelper = null;
        }
        /**
        * 初始化玩家信息
        */;
        _proto.initPlayerInfo = function initPlayerInfo(userItem) {
          this.node.active = false;
          this.reset();
          if (userItem) {
            this.node.active = true;
            this.nickname && (this.nickname.string = userItem.nickname);

            // this.head && (GameTools.loadWxHead(this.head, userItem.head));
            // if (!this.m_isBind)
            // {p
            //     this.m_isBind = true;
            //     this.head && (this.head.on(cc.Node.EventType.TOUCH_END, this.onClickHead, this));
            //  }
            // this.setOffline(userItem.online == 0);

            var roomPlayerData = RoomMgr.inst.getPlayData(userItem.userID);
            if (roomPlayerData) {
              UserMgr.inst.loadHeadIcon(roomPlayerData.visualId, this.head.getComponent(Sprite));
            }
            this.setBanker(false);
            this.setReady(false);
            this.chariID = userItem.chairID;
            this.userId = userItem.userID;
            if (userItem.isReady == false) {
              this.setReady(true);
            }

            // 金币
            this.setScore(userItem.gold);
            var seatID = PokerUtils.getRelativeSeatID(userItem.chairID, PokerManager.inst.myChairID);
            if (this.m_soundHelper != null) {
              this.m_soundHelper.init(seatID, 1); //性别 todo
            }
          }
        };

        _proto.setCardCount = function setCardCount(num, isActive) {
          if (isActive === void 0) {
            isActive = true;
          }
          if (this.cardCount.active != isActive) {
            this.cardCount.active = isActive;
          }
          var lbl = this.cardCount.getChildByName("label").getComponent(Label);
          if (lbl != null) {
            lbl.string = num.toString();
          }
        }
        //    //有玩家出牌后，同步减少牌数
        ;

        _proto.leftCardCount = function leftCardCount(reduceNum) {
          this.setCardCount(reduceNum);
          // let node = cc.find("label", this.cardCount);
          // if (node) {
          //     let labelCom = node.getComponent(cc.Label);
          //     let curNum = Number(labelCom.string)
          //     if (curNum) {
          //         this.cardCount.active = true;
          //         labelCom.string = reduceNum + '';
          //     }
          // }
        };

        _proto.fillShouPai = function fillShouPai(arrCardId) {
          if (this.shouPai) {
            for (var i = 0; i < this.shouPai.children.length; i++) {
              if (i < arrCardId.length) {
                var element = this.shouPai.children[i];
                var cardId = arrCardId[i];
                if (element != null) {
                  element.getComponent(PDK_Card).cardID = cardId;
                }
              }
            }
          }
        };
        _proto.playChuPai = function playChuPai(cards, isGray) {
          var _this2 = this;
          if (isGray === void 0) {
            isGray = false;
          }
          // console.log("chu pai : " + this.chariID);
          var isMatch = true;
          if (this.chuPai) {
            if (this.chuPai.children.length !== cards.length) {
              isMatch = false;
            } else {
              for (var i = 0; i < this.chuPai.children.length; i++) {
                var element = this.chuPai.children[i];
                var cardComp = element.getComponent(PDK_Card);
                if (cardComp && cardComp.cardID !== cards[i]) {
                  isMatch = false;
                  break;
                }
              }
            }
          }
          if (isMatch) {
            return;
          }
          if (this.chuPai) {
            this.chuPai.destroyAllChildren();
          }
          var delay = 0;
          var _loop = function _loop() {
            var card = cards[_i];
            if (_this2.chuPai) {
              var cardTemp = instantiate(PDK_Game.ins.cardPrefab);
              cardTemp.setParent(_this2.chuPai);
              cardTemp.setPosition(Vec3.ZERO);
              var _cardComp = cardTemp.getComponent(PDK_Card);
              if (_cardComp) {
                _cardComp.cardID = card;
              }
              // 通过 UITransform 组件设置锚点
              var uiTransform = cardTemp.getComponent(UITransform);
              if (uiTransform) {
                uiTransform.anchorX = 0;
                uiTransform.anchorY = 0.5;
              }
              if (isGray) {
                if (_cardComp) {
                  _cardComp.select.active = true;
                }
              }
              cardTemp.opacity = 0;
              var cardChild = cardTemp.getChildByName("card");
              if (cardChild) {
                cardChild.setScale(Vec3.ZERO);
              }

              // 创建淡入动画
              var fadeInTween = tween(cardTemp).to(0.2, {
                opacity: 255
              });

              // 创建缩放动画
              var scaleTween = cardChild ? tween(cardChild).to(0.2, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: easing.backOut
              }) : null;
              setTimeout(function () {
                if (cardTemp.isValid) {
                  fadeInTween.start();
                  scaleTween == null || scaleTween.start();
                }
              }, delay * 1000);
              delay += 0.05;
            }
            if (_this2.shouPai) {
              for (var j = 0; j < _this2.shouPai.children.length; j++) {
                var _element = _this2.shouPai.children[j];
                var shouPaiCardComp = _element.getComponent(PDK_Card);
                if (shouPaiCardComp && shouPaiCardComp.cardID === card) {
                  _element.destroy();
                  break;
                }
              }
            }
          };
          for (var _i = 0; _i < cards.length; _i++) {
            _loop();
          }
        };
        _proto.showCardTitle = function showCardTitle(cards, type) {
          if (type == CARD_TYPE.NULL || this.m_cardTitle == null) return;
          if (type == CARD_TYPE.PAIR) {
            var card = cards[0];
            if (card && PokerUtils.getCardRank(card) == CARD_RANK.TWO) {
              // 双2
              this.m_cardTitle.showShuang2();
              return;
            }
          }
          if (type == CARD_TYPE.PAIRS) {
            if (cards.length == 6) {
              this.m_cardTitle.showLian3Dui();
              return;
            }
            if (cards.length == 8) {
              this.m_cardTitle.showLian4Dui();
              return;
            }
          }
          if (type == CARD_TYPE.FOUR) {
            // 四季
            this.m_cardTitle.show4ji();
            return;
          }
        };
        _proto.resetChuPai = function resetChuPai(isAni) {
          var _this$m_cardTitle;
          if (isAni === void 0) {
            isAni = false;
          }
          if (this.chuPai) {
            if (isAni) {
              var delay = 0;
              var children = this.chuPai.children;
              var _loop2 = function _loop2() {
                var element = children[i];
                // 停止当前节点上的所有 tween 动画
                Tween.stopAllByTarget(element);
                var fadeOutTween = tween(element).to(0.06, {
                  opacity: 0
                }).call(function () {
                  if (element.isValid) {
                    element.removeFromParent();
                    element.destroy();
                  }
                });
                setTimeout(function () {
                  if (element.isValid) {
                    fadeOutTween.start();
                  }
                }, delay * 1000);
                delay += 0.03;
              };
              for (var i = children.length - 1; i >= 0; i--) {
                _loop2();
              }
            } else {
              var _children = this.chuPai.children;
              var _loop3 = function _loop3() {
                var element = _children[_i2];
                // 停止当前节点上的所有 tween 动画
                Tween.stopAllByTarget(element);
                tween(element).to(0.1, {
                  opacity: 0
                }).call(function () {
                  if (element.isValid) {
                    element.removeFromParent();
                    element.destroy();
                  }
                }).start();
              };
              for (var _i2 = _children.length - 1; _i2 >= 0; _i2--) {
                _loop3();
              }
            }
          }
          (_this$m_cardTitle = this.m_cardTitle) == null || _this$m_cardTitle.ready(); // 请替换为实际的组件名
        };

        _proto.resetShouPai = function resetShouPai() {
          var _this$shouPai2;
          (_this$shouPai2 = this.shouPai) == null || _this$shouPai2.destroyAllChildren();
        };
        _proto.setReady = function setReady(isReady) {
          if (isReady === void 0) {
            isReady = true;
          }
          if (this.ready) {
            if (isReady) {
              this.ready.active = true;
              this.ready.opacity = 0;
              this.ready.setScale(Vec3.ZERO);

              // 停止当前节点上的所有 tween 动画
              Tween.stopAllByTarget(this.ready);

              // 创建淡入动画
              var fadeInTween = tween(this.ready).to(0.1, {
                opacity: 255
              });

              // 创建缩放动画
              var scaleTween = tween(this.ready).to(0.2, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: easing.backOut
              });

              // 并行执行淡入和缩放动画
              tween(this.ready).parallel(fadeInTween, scaleTween).start();
            } else {
              this.ready.active = false;
            }
          }
        };
        _proto.setBanker = function setBanker(isBanker) {
          this.icon_bank && (this.icon_bank.active = !!isBanker);
        };
        _proto.reset = function reset() {
          var _this$shouPai3;
          (_this$shouPai3 = this.shouPai) == null || _this$shouPai3.destroyAllChildren();
          this.chuPai.destroyAllChildren();
          this.setCardCount(0, false);
          this.headAni.reset();
        }
        /**
         * 设置分数
         * @param score 当前分数
         * @returns 与当前分数的差值
         */;
        _proto.setScore = function setScore(score) {
          this.score && (this.score.string = GameTools.nFormatter(score));
          var offset = score - this.m_scoreNum;
          this.m_scoreNum = score;
          return offset;
        };
        _proto.setScoreLayout = function setScoreLayout() {
          var parent = this.score.node.parent;
          if (parent != null) {
            var goldIcon = parent.getChildByName("icon_gold");
            goldIcon && (goldIcon.active = false);
          }
          this.score && this.score.node.setPosition(0, 2);
        };
        _proto.syncPlayerData = function syncPlayerData(playerData) {
          if (playerData.data != null) {
            playerData.data.gold && this.setScore(playerData.data.gold);
          }
        };
        _proto.showHeadWinLoseAni = function showHeadWinLoseAni(data) {
          var score = data.winGold - data.bombGold;
          if (data.isWinner) {
            this.headAni.showWin(score);
          } else {
            this.headAni.showLose(score);
          }
        };
        _proto.showHeadScoreAni = function showHeadScoreAni(score) {
          this.headAni.showScoreAni(score);
        };
        _proto.showRoundEndScore = function showRoundEndScore(data) {
          this.setScore(data.allGold);
        };
        _proto.onClickHead = function onClickHead() {
          // AudioControl.playClick();
          // if (this.userId != KernelData.userID) {
          // GD.GameTool.createPanel("pdk/pdk_player_info", (newNode: cc.Node) => {
          // newNode.getComponent(PDK_PlayerInfo).setData(this.userId, this.chariID)
          // });
          // }
        };
        _proto.showGoldFly = function showGoldFly(winner) {
          this.headAni.showFlyGold(winner);
        };
        _proto.playCardSound = function playCardSound(data) {
          if (this.m_soundHelper) {
            this.m_soundHelper.playCardSound(data);
          }
        };
        _proto.playPass = function playPass() {
          if (this.m_soundHelper) {
            this.m_soundHelper.playPass();
          }
        };
        _proto.playWin = function playWin() {
          if (this.m_soundHelper) {
            this.m_soundHelper.playWin();
          }
        };
        _proto.playTongpai = function playTongpai() {
          var _this3 = this;
          if (this.m_soundHelper) {
            this.m_soundHelper.playTongpai();
            this.scheduleOnce(function () {
              _this3.m_soundHelper.playWin();
            }, 1);
          }
        };
        _proto.showPass = function showPass(isPass) {
          this.headAni.showPass(isPass);
        };
        return PDK_Player;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nickname", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon_bank", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "shouPai", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chuPai", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cardCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "clockPos", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ready", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "headAni", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "chatNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "chatText", [_dec14], {
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

System.register("chunks:///_virtual/PDK_PlayerInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, SpriteAtlas, Component;
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
      Label = module.Label;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "6bf25i8NFJMRJvrN2l/nJuX", "PDK_PlayerInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_PlayerInfo = exports('default', (_dec = ccclass('PDKPlayerInfo'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(SpriteAtlas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_PlayerInfo, _Component);
        function PDK_PlayerInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "series_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "card_box", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblName1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold_box", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cur_series_win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win_f", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sum_count", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tong_num", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblName", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblID", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "container", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sex", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg1", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollview", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "propAtlas", _descriptor19, _assertThisInitialized(_this));
          _this.gameScript = null;
          _this.m_chairID = 0;
          _this.m_gameId = 0;
          return _this;
        }
        var _proto = PDK_PlayerInfo.prototype;
        _proto.onLoad = function onLoad() {
          // this.gameScript = cc.find("Canvas").getComponent(PDK_Game);
          // this.item.active = false;
        };
        _proto.setData = /*#__PURE__*/function () {
          var _setData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userID, chairID) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function setData(_x, _x2) {
            return _setData.apply(this, arguments);
          }
          return setData;
        }();
        _proto.showItemList = function showItemList() {
          // let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;

          // let propNames = [
          // { propName: "baozha", desc: langConfig.getLangById(120003007) },
          // { propName: "beer", desc: langConfig.getLangById(120003008) },
          // { propName: "egg", desc: langConfig.getLangById(120003002) },
          // { propName: "kiss", desc: langConfig.getLangById(120003004) },
          // { propName: "rose", desc: langConfig.getLangById(120003001) },
          // { propName: "slippe", desc: langConfig.getLangById(120003003) },
          // ];
          // for (let i = 0; i < propNames.length; i++) {
          // let element = propNames[i];
          // let propName = element.propName;
          // let desxc = element.desc;
          // let item = cc.instantiate(this.item);
          // item.setParent(this.container);
          // item.active = true;
          // item['propIndex'] = "prop_index_" + propName;

          // let desc_node = cc.find("desc", item);
          // desc_node.getComponent(cc.Label).string = element.desc;

          // let propItem: PDK_PlayerInfoPropItem = item.getComponent(PDK_PlayerInfoPropItem);
          // propItem.setItem(propName, this.propAtlas,);
          // item.on(cc.Node.EventType.TOUCH_END, this.onClickPropItem, this);
          // }
        };
        _proto.onClickPropItem = function onClickPropItem(event) {
          // let propIndex = event.currentTarget.propIndex;
          // let data = {
          // item_id: propIndex,
          // toChairID: this.m_chairID
          // }
          // clientKernel.use_item(data);
          // this.closeMe();
        };
        _proto.closeMe = function closeMe() {
          // GD.GameTool.destroyBlurBg();
          // this.node && this.node.destroy();
        };
        _proto.getCalcInfo = /*#__PURE__*/function () {
          var _getCalcInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userID) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function getCalcInfo(_x3) {
            return _getCalcInfo.apply(this, arguments);
          }
          return getCalcInfo;
        }();
        return PDK_PlayerInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "series_win", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "card_box", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblName1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gold_box", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cur_series_win", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "win_f", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sum_count", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tong_num", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "panelNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblName", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblID", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "container", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "sex", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bg1", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "scrollview", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "propAtlas", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import { ConfigManager } from "../../../../kernel/ConfigManager";
      // import { LanguageConfigContainer } from "../../../../kernel/Conifg/LanguageConfigContainer";
      // import { GD } from "../../../../public/GD";
      // import PDK_Game from "../PDK_Game";
      // import PDK_PlayerInfoPropItem from "./PDK_PlayerInfoPropItem";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_PlayerInfo extends cc.Component {
      //     @property(cc.Node)
      //     series_win: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     card_box: cc.Node = null;
      // 
      //     @property(cc.Label)
      //     lblName1: cc.Label = null;
      // 
      //     @property(cc.Node)
      //     gold_box: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     cur_series_win: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     win_f: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     sum_count: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     tong_num: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     panelNode: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     head: cc.Node = null;
      // 
      //     @property(cc.Label)
      //     lblName: cc.Label = null;
      // 
      //     @property(cc.Label)
      //     lblID: cc.Label = null;
      // 
      //     @property(cc.Node)
      //     container: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     item: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     sex: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     bg: cc.Node = null;
      //     @property(cc.Node)
      //     bg1: cc.Node = null;
      // 
      //     @property(cc.Node)
      //     scrollview: cc.Node = null;
      // 
      //     @property(cc.SpriteAtlas)
      //     propAtlas: cc.SpriteAtlas = null;
      // 
      //     private gameScript: PDK_Game = null;
      //     private m_chairID: number = 0;
      //     private m_gameId: number = 0;
      // 
      //     onLoad() {
      //         this.gameScript = cc.find("Canvas").getComponent(PDK_Game);
      //         this.item.active = false;
      //     }
      // 
      //     async setData(userID: number, chairID: number) {
      //         if (clientKernel.getRoomCard() == false) {
      //             //金币场（匹配服）
      //             this.card_box.active = false;
      //             this.gold_box.active = true;
      //         } else {
      //             //房卡模式（邀请好友）
      //             this.card_box.active = true;
      //             this.gold_box.active = false;
      //         }
      //         this.m_chairID = chairID;
      //         let data = clientKernel.gameUserManager.getUserByUserID(userID);
      //         if (data) {
      //             console.log(data);
      //             GameTools.loadWxHead(this.head, data.getHead());
      //             this.lblName1.string = this.lblName.string = data.nickname;
      //             this.lblID.string = "ID:" + data.gameID;
      // 
      //             this.sex.children[0].active = data.sex == 0;
      //             this.sex.children[1].active = data.sex != 0;
      //         }
      // 
      //         let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      // 
      // 
      // 
      //         // this.title_desc.getComponent(cc.Label).string = langConfig.getLangById(10904);
      //         this.series_win.getComponent(cc.Label).string = langConfig.getLangById(10905);
      //         this.cur_series_win.getComponent(cc.Label).string = langConfig.getLangById(10906);
      //         this.win_f.getComponent(cc.Label).string = langConfig.getLangById(10907);
      //         this.sum_count.getComponent(cc.Label).string = langConfig.getLangById(10908);
      //         this.tong_num.getComponent(cc.Label).string = langConfig.getLangById(10909);
      // 
      //         this.showItemList();
      // 
      //         let calcInfo = await this.getCalcInfo(data.userID) as any;
      //         cc.find("num", this.series_win).getComponent(cc.Label).string = calcInfo.winHistoy + "";
      //         cc.find("num", this.cur_series_win).getComponent(cc.Label).string = calcInfo.winMaxDay + "";
      //         cc.find("num", this.tong_num).getComponent(cc.Label).string = calcInfo.nbWinCnt + "";
      //         let sum = calcInfo.winCnt + calcInfo.loseCnt;
      //         let win_f = '0';
      //         if (sum) {
      //             win_f = (calcInfo.winCnt / sum * 100).toFixed(1);
      //         }
      //         cc.find("num", this.sum_count).getComponent(cc.Label).string = sum + "";
      //         cc.find("num", this.win_f).getComponent(cc.Label).string = win_f + "%";
      // 
      // 
      //         //KernelData.userID
      //     }
      // 
      //     private showItemList() {
      //         let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      // 
      //         let propNames = [
      //             { propName: "baozha", desc: langConfig.getLangById(120003007) },
      //             { propName: "beer", desc: langConfig.getLangById(120003008) },
      //             { propName: "egg", desc: langConfig.getLangById(120003002) },
      //             { propName: "kiss", desc: langConfig.getLangById(120003004) },
      //             { propName: "rose", desc: langConfig.getLangById(120003001) },
      //             { propName: "slippe", desc: langConfig.getLangById(120003003) },
      //         ];
      //         for (let i = 0; i < propNames.length; i++) {
      //             let element = propNames[i];
      //             let propName = element.propName;
      //             let desxc = element.desc;
      //             let item = cc.instantiate(this.item);
      //             item.setParent(this.container);
      //             item.active = true;
      //             item['propIndex'] = "prop_index_" + propName;
      // 
      //             let desc_node = cc.find("desc", item);
      //             desc_node.getComponent(cc.Label).string = element.desc;
      // 
      //             let propItem: PDK_PlayerInfoPropItem = item.getComponent(PDK_PlayerInfoPropItem);
      //             propItem.setItem(propName, this.propAtlas,);
      //             item.on(cc.Node.EventType.TOUCH_END, this.onClickPropItem, this);
      //         }
      //     }
      // 
      //     private onClickPropItem(event) {
      //         let propIndex = event.currentTarget.propIndex;
      //         let data = {
      //             item_id: propIndex,
      //             toChairID: this.m_chairID
      //         }
      //         clientKernel.use_item(data);
      //         this.closeMe();
      // 
      //     }
      // 
      //     closeMe() {
      //         GD.GameTool.destroyBlurBg();
      //         this.node && this.node.destroy();
      //     }
      // 
      //     async getCalcInfo(userID) {
      //         return new Promise((resolve, reject) => {
      //             NetHelp.getCalcInfo(userID, (retData) => {
      //                 if (typeof retData != "object") { retData = JSON.parse(retData) };
      //                 let { code, info } = retData;
      //                 if (code == 0) {
      //                     resolve(info);
      //                 } else {
      //                     // GD.GameTool.showTextTips(info);
      //                 }
      //             })
      //         })
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_PlayerInfoPropItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9a868/TeChHiK7VdfOyQrsZ", "PDK_PlayerInfoPropItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_PlayerInfoPropItem = exports('default', (_dec = ccclass('PDKPlayerInfoPropItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_PlayerInfoPropItem, _Component);
        function PDK_PlayerInfoPropItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl", _descriptor2, _assertThisInitialized(_this));
          _this.m_itemId = null;
          return _this;
        }
        var _proto = PDK_PlayerInfoPropItem.prototype;
        _proto.setItem = function setItem(itemId, atlas) {
          // if (this.m_itemId == null) {
          // this.m_itemId = itemId;
          // this.icon.spriteFrame = atlas.getSpriteFrame(itemId);
          // }
        };
        return PDK_PlayerInfoPropItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_PlayerInfoPropItem extends cc.Component {
      //     @property(cc.Sprite)
      //     icon: cc.Sprite = null;
      //     @property(cc.Label)
      //     lbl: cc.Label = null;
      // 
      //     private m_itemId: string = null;
      //     
      // 
      // 
      //     setItem(itemId: string, atlas: cc.SpriteAtlas) {
      //         if (this.m_itemId == null) {
      //             this.m_itemId = itemId;
      //             this.icon.spriteFrame = atlas.getSpriteFrame(itemId);
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_PlayerSoundHelper.ts", ['cc', './Utils.ts', './ConfigManager.ts', './PeiMusicConfigContainer.ts', './ModuleDef.ts', './PDK_ConstDef.ts', './PDK_Game.ts', './PDK_BattleData.ts', './PDK_Card.ts', './Define4.ts', './PokerUtils.ts'], function (exports) {
  var cclegacy, Utils, ConfigManager, PeiMusicConfigContainer, ModuleDef, CARD_TYPE, PDK_Game, PDK_BattleData, PDK_Card, CARD_COLOR, PokerUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      PeiMusicConfigContainer = module.PeiMusicConfigContainer;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      CARD_TYPE = module.CARD_TYPE;
    }, function (module) {
      PDK_Game = module.default;
    }, function (module) {
      PDK_BattleData = module.default;
    }, function (module) {
      PDK_Card = module.default;
    }, function (module) {
      CARD_COLOR = module.CARD_COLOR;
    }, function (module) {
      PokerUtils = module.PokerUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "15eafBdh2RHuIE9G5UPrt1s", "PDK_PlayerSoundHelper", undefined);
      var PDK_PlayerSoundHelper = exports('default', /*#__PURE__*/function () {
        function PDK_PlayerSoundHelper() {
          this.m_sex = -1;
          this.m_seat = -1;
        }
        var _proto = PDK_PlayerSoundHelper.prototype;
        _proto.init = function init(seat, sex) {
          this.m_seat = seat;
          this.m_sex = sex;
        };
        _proto.playCardSound = function playCardSound(data) {
          var prevCards = data.prevCards;
          var cards = prevCards.cards,
            userID = prevCards.userID,
            leftCardCount = prevCards.leftCardCount;
          // console.log("play card sound : " + cards);
          var cardType = PDK_Game.ins.GameLogic.getCardType(cards);
          if (cardType == CARD_TYPE.NULL) return; // 牌型错误
          var lastSeat = PDK_BattleData.instance().lastSeat;
          var lastCardsValue = PDK_BattleData.instance().lastCardValues;
          // 本轮首次
          var currentRoundFirst = lastSeat == -1 || lastSeat == this.m_seat;
          switch (cardType) {
            case CARD_TYPE.SINGLE:
              {
                var value = PokerUtils.getCardRank(cards[0]);
                this.processSingle(currentRoundFirst, value, lastCardsValue, cards);
              }
              break;
            case CARD_TYPE.PAIR:
              {
                var _value = PokerUtils.getCardRank(cards[0]);
                this.processPair(currentRoundFirst, _value);
              }
              break;
            case CARD_TYPE.THREE:
              {
                // let value = PDK_Card.getCardValue(cards[0]);
                this.processThree(currentRoundFirst);
              }
              break;
            case CARD_TYPE.STRAIGHT:
              {
                this.processStraight(currentRoundFirst, cards);
              }
              break;
            case CARD_TYPE.PAIRS:
              {
                this.processPairs(currentRoundFirst, cards);
              }
              break;
            case CARD_TYPE.FOUR:
              {
                this.processFour(currentRoundFirst);
              }
              break;
          }
        }
        //    // 一张
        ;

        _proto.processSingle = function processSingle(currentRoundFirst, value, lastCardsValue, cards) {
          if (currentRoundFirst) {
            // 本轮首次
            if (value < 3) {
              // 1 2 要说打出去的牌型
              this.playRandom(this.playSingle, value, this.playSoundById, 10080);
            } else {
              this.playSoundById(10080); // 3 - K直接说1张
            }
          } else {
            // 普通大
            // 同值不同花色
            if (value == lastCardsValue[0]) {
              var soundId = 0;
              var color = PDK_Card.getCardColor(cards[0]);
              if (color == CARD_COLOR.Diamond) {
                soundId = 10120;
              } else if (color == CARD_COLOR.HEART) {
                soundId = 10130;
              } else if (color == CARD_COLOR.CLUB) {
                soundId = 10110;
              } else if (color == CARD_COLOR.SPADE) {
                soundId = 10100;
              }
              this.playRandom(this.playSoundById, 10010, this.playSoundById, 10020, this.playSoundById, soundId, this.playSingle, value);
            } else {
              this.playRandom(this.playSoundById, 10010, this.playSoundById, 10020, this.playSingle, value);
            }
          }
        }
        //    // 对子
        ;

        _proto.processPair = function processPair(currentRoundFirst, value) {
          if (currentRoundFirst) {
            // 本轮首次
            this.playRandom(this.playSoundById, 10160, this.playPair, value);
          } else {
            // 普通大
            this.playRandom(this.playSoundById, 10010, this.playSoundById, 10020, this.playSoundById, 10160, this.playPair, value);
          }
        }
        //    // 3张
        ;

        _proto.processThree = function processThree(currentRoundFirst) {
          if (currentRoundFirst) {
            // 本轮首次
            this.playSoundById(10190); // 3张
          } else {
            // 普通大
            this.playRandom(this.playSoundById, 10010, this.playSoundById, 10020, this.playSoundById, 10190);
          }
        }
        //    // 顺子
        ;

        _proto.processStraight = function processStraight(currentRoundFirst, cards) {
          var len = cards.length;
          if (len == 3) {
            // 3顺子
            var value = PokerUtils.getCardRank(cards[0]);
            var soundId = 10210 + value - 3;
            if (currentRoundFirst) {
              // 本轮首次
              this.playRandom(this.playSoundById, 10200, this.playSoundById, soundId);
            } else {
              // 普通大
              this.playRandom(this.playSoundById, 10010, this.playSoundById, 10020, this.playSoundById, 10200, this.playSoundById, soundId);
            }
          } else {
            //4 顺子及以上
            if (currentRoundFirst) {
              // 本轮首次
              this.playSoundById(10200);
            } else {
              // 普通大
              this.playRandom(this.playSoundById, 10010, this.playSoundById, 10020, this.playSoundById, 10200);
            }
          }
        }
        //    // 连对
        ;

        _proto.processPairs = function processPairs(currentRoundFirst, cards) {
          if (cards.length == 6) {
            // 3连对
            if (currentRoundFirst) {
              // 本轮首次
              this.playSoundById(10060);
            } else {
              // 炸弹大
              this.playRandom(this.playSoundById, 10020, this.playSoundById, 10060);
            }
          } else if (cards.length == 8) {
            // 4连对
            if (currentRoundFirst) {
              // 本轮首次
              this.playSoundById(10040);
            } else {
              // 炸弹大
              this.playRandom(this.playSoundById, 10020, this.playSoundById, 10040);
            }
          }
        }
        // 四季
        ;

        _proto.processFour = function processFour(currentRoundFirst) {
          if (currentRoundFirst) {
            // 本轮首次
            this.playSoundById(10050);
          } else {
            // 炸弹大
            this.playRandom(this.playSoundById, 10020, this.playSoundById, 10050);
          }
        };
        _proto.playRandom = function playRandom(fun1, param1, fun2, param2, fun3, param3, fun4, param4) {
          if (param1 === void 0) {
            param1 = null;
          }
          if (fun2 === void 0) {
            fun2 = undefined;
          }
          if (param2 === void 0) {
            param2 = null;
          }
          if (fun3 === void 0) {
            fun3 = undefined;
          }
          if (param3 === void 0) {
            param3 = null;
          }
          if (fun4 === void 0) {
            fun4 = undefined;
          }
          if (param4 === void 0) {
            param4 = null;
          }
          var max = 0;
          if (fun1 != null) {
            max = 0;
          }
          if (fun2 != null) {
            max = 1;
          }
          if (fun3 != null) {
            max = 2;
          }
          if (fun4 != null) {
            max = 3;
          }
          var idx = Utils.randomRangeInt(0, max);
          if (idx == 0) {
            fun1.call(this, param1);
          } else if (idx == 1) {
            fun2.call(this, param2);
          } else if (idx == 2) {
            fun3.call(this, param3);
          } else if (idx == 3) {
            fun4.call(this, param4);
          }
        };
        _proto.playSingle = function playSingle(value) {
          if (value == 1) {
            this.playSoundById(10151);
          } else if (value == 2) {
            this.playSoundById(10152);
          } else {
            var id = 10140 + value - 3;
            this.playSoundById(id);
          }
        };
        _proto.playPair = function playPair(value) {
          if (value == 1) {
            this.playSoundById(10181);
          } else if (value == 2) {
            this.playSoundById(10182);
          } else {
            var id = 10170 + value - 3;
            this.playSoundById(id);
          }
        };
        _proto.playPass = function playPass() {
          this.playSoundById(10000);
        };
        _proto.playWin = function playWin() {
          this.playSoundById(10030);
        };
        _proto.playTongpai = function playTongpai() {
          this.playSoundById(10070);
        };
        _proto.playSoundById = function playSoundById(soundId) {
          if (this) {
            PDK_PlayerSoundHelper.playerSound(soundId, this.m_sex);
          }
        };
        PDK_PlayerSoundHelper.playSoundUrl = function playSoundUrl(url) {
          tgx.AudioMgr.inst.audio.playEffect(url, ModuleDef.POKER_PDK_YUENAN);
        };
        PDK_PlayerSoundHelper.playerSound = function playerSound(soundId, sex) {
          var peiConfig = ConfigManager.getInstance().getConfig(PeiMusicConfigContainer);
          var pei = peiConfig.getDataById(soundId);
          if (pei == null) {
            console.error("could not find play pei sound id : " + soundId);
            return;
          }
          // console.log("play pei sound : " + soundId);
          var idxMax = pei.arrSound.length - 1;
          var idx = Utils.randomRangeInt(0, idxMax);
          var res = pei.arrSound[idx];
          var sexPath = sex == 1 ? "boy/" : "girl/";
          var path = "pdk/sound/" + sexPath + res;
          this.playSoundUrl(path);
        };
        return PDK_PlayerSoundHelper;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_PropItemHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, SpriteAtlas, Component;
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
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "18a99gs5N9CIqdUyVymYZj6", "PDK_PropItemHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_PropItemHelper = exports('default', (_dec = ccclass('PDKPropItemHelper'), _dec2 = property(Prefab), _dec3 = property(SpriteAtlas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_PropItemHelper, _Component);
        function PDK_PropItemHelper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prop", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlas", _descriptor2, _assertThisInitialized(_this));
          _this.bindObj = void 0;
          _this.propPool = [];
          _this.gameScript = null;
          return _this;
        }
        var _proto = PDK_PropItemHelper.prototype;
        _proto.start = function start() {

          // this.bindEvent();
          // this.gameScript = this.node.getComponent(PDK_Game);
        };
        _proto.bindEvent = function bindEvent() {
          // this.bindObj = [];
          // this.bindObj.push(onfire.on("onUseItem", this.onUseItem.bind(this)));
        };
        _proto.onDestroy = function onDestroy() {
          // if (this.bindObj != null) {
          // for (let i = 0; i < this.bindObj.length; i++) {
          // onfire.un(this.bindObj[i]);
          // }
          // }
        };
        _proto.onUseItem = function onUseItem(data) {
          // if (data != null) {

          //            // 如果不是使用互动道具
          // if (typeof data.item_id != "string" || data.item_id.indexOf("prop_index_") == -1) {
          // return;
          // }

          // let res: string = data.item_id.replace("prop_index_", "");
          // if (res == null || res == "") return;
          // let from: cc.Node = null;
          // let to: cc.Node = null;
          // let arr: PDK_Player[] = this.gameScript.playerScript;
          // for (let i = 0; i < arr.length; i++) {
          // let player: PDK_Player = arr[i];
          // if (player.userId == data.to) {
          // to = player.node;
          // }
          // else if (player.userId == data.from) {
          // from = player.node;
          // }
          // }

          // if (from != null && to != null) {
          // this.playThrow(from, to, res);
          // }
          // }
        };
        _proto.playThrow = function playThrow(from, to, res) {
          // let parent = from.parent;
          // let item = cc.instantiate(this.prop);
          // item.setParent(parent);
          // item.setPosition(from.x, from.y);
          // let icon = item.getChildByName("icon").getComponent(cc.Sprite);
          // icon.spriteFrame = this.atlas.getSpriteFrame(res);
          // let start = new cc.Vec2(from.x, from.y);
          // let end  = new cc.Vec2(to.x, to.y + 20);
          // let midx = (end.x + start.x) / 2;
          // let midy = (end.y + start.y) / 2;
          // midy += Math.abs(midy) / 2;
          // let mid = new cc.Vec2(midx, end.y + 100);
          // let bezier = cc.bezierTo(1, [start, mid, end]).easing(cc.easeQuadraticActionInOut());
          // item.runAction(cc.sequence(bezier, cc.callFunc(() => {
          // icon.node.active = false;
          // this.playAni(item, res);
          // }, this)));
        };
        _proto.playAni = function playAni(item, res) {
          // let ani = item.getComponent(dragonBones.ArmatureDisplay);
          // ani.playAnimation(res, 1);
          // ani.on(dragonBones.EventObject.COMPLETE, (event) => {
          // item.destroy();
          // }, this);

          // console.log("item play index:", res);

          // this.playerSound(res);
        };
        _proto.playerSound = function playerSound(res) {
          // let index = 0;
          // switch (res) {
          // case "baozha":
          // index = 0;
          // break;
          // case "egg":
          // index = 1;
          // break;
          // case "kiss":
          // index = 2;
          // break;
          // case "rose":
          // index = 3;
          // break;
          // case "slippe":
          // index = 4;
          // break;
          // case "beer":
          // index = 6;
          // break;

          // default:
          // break;
          // }
          // let path = "hall/sound/props/" + index;

          // PDK_PlayerSoundHelper.playSoundUrl(path);
        };
        return PDK_PropItemHelper;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "atlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /*
      //  * @Author: xz
      //  * @Date: 2021-12-24 00:49:59
      //  * @LastEditTime: 2021-12-25 23:59:46
      //  * @LastEditors: xz
      //  * @Description: 
      //  */
      // import PDK_Game from "../PDK_Game";
      // import PDK_Player from "../PDK_Player";
      // import PDK_PlayerSoundHelper from "./PDK_PlayerSoundHelper";
      // 
      // const { ccclass, property } = cc._decorator;
      // @ccclass
      // export default class PDK_PropItemHelper extends cc.Component {
      // 
      //     @property(cc.Prefab)
      //     prop: cc.Prefab = null;
      // 
      //     @property(cc.SpriteAtlas)
      //     atlas: cc.SpriteAtlas = null;
      // 
      //     bindObj: any[];
      // 
      //     propPool: cc.Node[] = [];
      //     private gameScript: PDK_Game = null;
      // 
      //     start() {
      // 
      //         this.bindEvent();
      //         this.gameScript = this.node.getComponent(PDK_Game);
      //     }
      //     bindEvent() {
      //         this.bindObj = [];
      //         this.bindObj.push(onfire.on("onUseItem", this.onUseItem.bind(this)));
      //     }
      // 
      //     onDestroy() {
      //         if (this.bindObj != null) {
      //             for (let i = 0; i < this.bindObj.length; i++) {
      //                 onfire.un(this.bindObj[i]);
      //             }
      //         }
      //     }
      // 
      //     private onUseItem(data) {
      //         if (data != null) {
      // 
      //             // 如果不是使用互动道具
      //             if (typeof data.item_id != "string" || data.item_id.indexOf("prop_index_") == -1) {
      //                 return;
      //             }
      // 
      //             let res: string = data.item_id.replace("prop_index_", "");
      //             if (res == null || res == "") return;
      //             let from: cc.Node = null;
      //             let to: cc.Node = null;
      //             let arr: PDK_Player[] = this.gameScript.playerScript;
      //             for (let i = 0; i < arr.length; i++) {
      //                 let player: PDK_Player = arr[i];
      //                 if (player.userId == data.to) {
      //                     to = player.node;
      //                 }
      //                 else if (player.userId == data.from) {
      //                     from = player.node;
      //                 }
      //             }
      // 
      //             if (from != null && to != null) {
      //                 this.playThrow(from, to, res);
      //             }
      //         }
      //     }
      // 
      //     private playThrow(from: cc.Node, to: cc.Node, res: string) {
      //         let parent = from.parent;
      //         let item = cc.instantiate(this.prop);
      //         item.setParent(parent);
      //         item.setPosition(from.x, from.y);
      //         let icon = item.getChildByName("icon").getComponent(cc.Sprite);
      //         icon.spriteFrame = this.atlas.getSpriteFrame(res);
      //         let start = new cc.Vec2(from.x, from.y);
      //         let end  = new cc.Vec2(to.x, to.y + 20);
      //         let midx = (end.x + start.x) / 2;
      //         let midy = (end.y + start.y) / 2;
      //         midy += Math.abs(midy) / 2;
      //         let mid = new cc.Vec2(midx, end.y + 100);
      //         let bezier = cc.bezierTo(1, [start, mid, end]).easing(cc.easeQuadraticActionInOut());
      //         item.runAction(cc.sequence(bezier, cc.callFunc(() => {
      //             icon.node.active = false;
      //             this.playAni(item, res);
      //         }, this)));
      //     }
      // 
      //     private playAni(item: cc.Node, res: string) {
      //         let ani = item.getComponent(dragonBones.ArmatureDisplay);
      //         ani.playAnimation(res, 1);
      //         ani.on(dragonBones.EventObject.COMPLETE, (event) => {
      //             item.destroy();
      //         }, this);
      // 
      //         console.log("item play index:", res);
      // 
      //         this.playerSound(res);
      //     }
      // 
      //     public playerSound(res) {
      //         let index = 0;
      //         switch (res) {
      //             case "baozha":
      //                 index = 0;
      //                 break;
      //             case "egg":
      //                 index = 1;
      //                 break;
      //             case "kiss":
      //                 index = 2;
      //                 break;
      //             case "rose":
      //                 index = 3;
      //                 break;
      //             case "slippe":
      //                 index = 4;
      //                 break;
      //             case "beer":
      //                 index = 6;
      //                 break;
      // 
      //             default:
      //                 break;
      //         }
      //         let path = "hall/sound/props/" + index;
      // 
      //         PDK_PlayerSoundHelper.playSoundUrl(path);
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_Result_BigItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "8a62ehTj+BKzrL70F+dYpkV", "PDK_Result_BigItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Result_BigItem = exports('default', (_dec = ccclass('PDKResultBigItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Result_BigItem, _Component);
        function PDK_Result_BigItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "failBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "medal", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblName", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblID", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblScore", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCnt_text", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bombCnt_text", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "successiveWinCnt_text", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCnt", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bombCnt", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "successiveWinCnt", _descriptor13, _assertThisInitialized(_this));
          return _this;
        } // setData(data:BigResultData, isMedal:boolean) {
        // this.lblName.string = data.nickname;
        // this.lblID.string = "ID:" + data.userID;
        // this.lblScore.string = data.score.toString();
        // let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
        // this.winCnt_text.string = langConfig.getLangById(10828);
        // this.bombCnt_text.string = langConfig.getLangById(10829);
        // this.successiveWinCnt_text.string = langConfig.getLangById(10830);
        // this.winCnt.string = data.winCnt + "";
        // this.bombCnt.string = data.bombCnt + "";
        // this.successiveWinCnt.string = data.successiveWinCnt + "";
        // this.medal.active = isMedal;
        // let number_one = cc.find("number_one",this.node);
        // let select_icon = cc.find("select_icon", this.node);
        // if (isMedal) {
        // this.winBg.active = true;
        // number_one.active = true;
        // this.failBg.active = false;
        // }
        // else {
        // number_one.active = false;
        // this.winBg.active = false;
        // this.failBg.active = true;
        // }
        // select_icon.active = false;
        // this.head && (GameTools.loadWxHead(this.head, data.headUrl));
        // }
        return PDK_Result_BigItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "failBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "medal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblID", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblScore", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "winCnt_text", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bombCnt_text", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "successiveWinCnt_text", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "winCnt", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bombCnt", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "successiveWinCnt", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /*
      //  * @Author: xz
      //  * @Date: 2021-12-23 23:14:42
      //  * @LastEditTime: 2022-01-11 00:38:45
      //  * @LastEditors: xz
      //  * @Description: 
      //  */
      // import { ConfigManager } from "../../../kernel/ConfigManager";
      // import { LanguageConfigContainer } from "../../../kernel/Conifg/LanguageConfigContainer";
      // import { BigResultData } from "./PDK_SubGameMSG";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_Result_BigItem extends cc.Component {
      //     @property(cc.Node)
      //     failBg: cc.Node = null;
      //     @property(cc.Node)
      //     winBg: cc.Node = null;
      //     @property(cc.Node)
      //     head: cc.Node = null;
      //     @property(cc.Node)
      //     medal: cc.Node = null;
      //     
      //     @property(cc.Label)
      //     lblName: cc.Label = null;
      //     @property(cc.Label)
      //     lblID: cc.Label = null;
      //     @property(cc.Label)
      //     lblScore: cc.Label = null;
      // 
      //     @property(cc.Label)
      //     winCnt_text: cc.Label = null;
      //     @property(cc.Label)
      //     bombCnt_text: cc.Label = null;
      //     @property(cc.Label)
      //     successiveWinCnt_text: cc.Label = null;
      // 
      //     @property(cc.Label)
      //     winCnt: cc.Label = null;
      //     @property(cc.Label)
      //     bombCnt: cc.Label = null;
      //     @property(cc.Label)
      //     successiveWinCnt: cc.Label = null;
      //     
      // 
      //     setData(data:BigResultData, isMedal:boolean) {
      //         this.lblName.string = data.nickname;
      //         this.lblID.string = "ID:" + data.userID;
      //         this.lblScore.string = data.score.toString();
      // 
      //         let langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
      // 
      //         this.winCnt_text.string = langConfig.getLangById(10828);
      //         this.bombCnt_text.string = langConfig.getLangById(10829);
      //         this.successiveWinCnt_text.string = langConfig.getLangById(10830);
      // 
      //         this.winCnt.string = data.winCnt + "";
      //         this.bombCnt.string = data.bombCnt + "";
      //         this.successiveWinCnt.string = data.successiveWinCnt + "";
      //         
      //         this.medal.active = isMedal;
      // 
      //         let number_one = cc.find("number_one",this.node);
      //         let select_icon = cc.find("select_icon", this.node);
      //         if (isMedal) { 
      //             this.winBg.active = true;
      //             number_one.active = true;
      //             this.failBg.active = false;
      //         }
      //         else {
      //             number_one.active = false;
      //             this.winBg.active = false;
      //             this.failBg.active = true;
      //         }
      //         select_icon.active = false;
      // 
      //         this.head && (GameTools.loadWxHead(this.head, data.headUrl));
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_Result_Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './PokerManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, find, Component, UserMgr, PokerManager;
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
      find = module.find;
      Component = module.Component;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      PokerManager = module.PokerManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "ab52cLafK5EpqKvQ00lIg8I", "PDK_Result_Player", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Result_Player = exports('default', (_dec = ccclass('PDKResultPlayer'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Result_Player, _Component);
        function PDK_Result_Player() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblzha", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblchou", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblScore", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotal", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfMark", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblNickname", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon_creator", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PDK_Result_Player.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.initPlayerInfo = function initPlayerInfo(data, chairID) {
          this.lblScore.string = data.winGold + "";
          // this.lblzha.string = data.bombGold + "";

          var bg = find("bg", this.node);
          if (data.userID == UserMgr.inst.uid) {
            bg.active = false;
            this.selfMark.active = true;
          } else {
            bg.active = true;
            this.selfMark.active = false;
          }
          var tableUser = PokerManager.inst.getTableUserItem(chairID);
          if (tableUser == null) {
            console.error("initPlayerInfo error : tableUser");
            return;
          }
          this.lblNickname.string = data.nickname;
          this.icon_creator.active = data.isCreator;

          // this.head && (GameTools.loadWxHead(this.head, data.headUrl));
        }
        // update (dt) {}
        ;

        return PDK_Result_Player;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblzha", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblchou", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblScore", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblTotal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selfMark", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblNickname", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "icon_creator", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec9], {
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

System.register("chunks:///_virtual/PDK_Result.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageConfigContainer.ts', './ConfigManager.ts', './PDK_Result_Player.ts', './UserMgr.ts', './RoomMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Prefab, find, Button, instantiate, tween, easing, Component, LanguageConfigContainer, ConfigManager, PDK_Result_Player, UserMgr, RoomMgr, SubGameMgr, SubGameDef, LanguageData;
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
      Node = module.Node;
      Prefab = module.Prefab;
      find = module.find;
      Button = module.Button;
      instantiate = module.instantiate;
      tween = module.tween;
      easing = module.easing;
      Component = module.Component;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      PDK_Result_Player = module.default;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "e4966hQdr9PTaofAnqH44R+", "PDK_Result", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Result = exports('default', (_dec = ccclass('PDKResult'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Prefab), _dec13 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Result, _Component);
        function PDK_Result() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "player_name_lbl", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_zha_lbl", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_chou_lbl", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_curscore_lbl", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_sumscore_lbl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundLayout", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundRoot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigLayout", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigRoot", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_continue_node", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundResultItem", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigResultItem", _descriptor12, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PDK_Result.prototype;
        // bigData: any;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          this.bigResultItem.active = false;
          this.roundRoot.active = false;
          this.bigRoot.active = false;
          var langCfg = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var lbl = find("btn_continue/label", this.node).getComponent(Label);
          lbl.string = langCfg.getLangById(10826);
          this.player_name_lbl.string = langCfg.getLangById(10820);
          // this.player_zha_lbl.string = langCfg.getLangById(10821);
          // this.player_chou_lbl.string = langCfg.getLangById(10822);
          this.player_curscore_lbl.string = langCfg.getLangById(10823);
          // this.player_sumscore_lbl.string = langCfg.getLangById(10824);
        };

        _proto.start = function start() {
          var btns = this.node.getComponentsInChildren(Button);
          for (var i = 0; i < btns.length; i++) {
            btns[i].node.on(Node.EventType.TOUCH_END, this.btnOnClick, this);
          }
        }
        //    /**
        //     * 按钮点击事件
        //     * @param event 点击的按钮对象
        //     */
        ;

        _proto.btnOnClick = function btnOnClick(event) {
          var btn_name = event.currentTarget.name;
          switch (btn_name) {
            case "btn_continue":
              //继续
              //重新匹配
              this.onRestart();
              break;
            case "btn_blue_m":
              //退出
              tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (ok) {
                        tgx.AudioMgr.inst.audio.clearAll();
                        RoomMgr.inst.exitRoom();
                      }
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })));
              break;
          }
        };
        _proto.showGameResult = function showGameResult(data) {
          var userData = data.userData;
          // this.bigData = bigData;
          // if (bigData != null) {
          //     this.showBigResult(bigData);
          // }
          // else {

          this.showRoundResult(userData);
          // }
        };

        _proto.showRoundResult = function showRoundResult(userData) {
          var langCfg = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var lbl = find("btn_continue/label", this.node).getComponent(Label);
          lbl.string = langCfg.getLangById(10826);
          this.roundRoot.active = true;
          this.bigRoot.active = false;
          var isWin = false;
          this.roundLayout.removeAllChildren();
          var selfNode = null;
          for (var i = 0; i < userData.length; i++) {
            var data = userData[i];
            var itemNode = instantiate(this.roundResultItem);
            itemNode.parent = this.roundLayout;
            itemNode.getComponent(PDK_Result_Player).initPlayerInfo(data, i);
            if (data.userID == UserMgr.inst.uid) {
              isWin = data.isWinner;
              selfNode = itemNode;
            }
            var originx = itemNode.x;
            itemNode.x = 1500;
            tween(itemNode).delay(0.5 * i).to(0.5, {
              x: originx
            }, {
              easing: easing.backOut
            }).start();
          }
          var selfMark = find("selfMark", selfNode);
          tween(selfMark).delay(1 * (userData.length - 1)).to(0.2, {
            opacity: 0
          }).delay(0.2).to(0.2, {
            opacity: 255
          }).start();
          var winNode = find("result/bg/title_win", this.node);
          var loseNode = find("result/bg/title_lose", this.node);
          winNode.active = isWin;
          loseNode.active = !isWin;
        }
        // private showBigResult(bigResultData: BigResultData[]) {
        // AudioControl.playGetReward();

        // let langCfg: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer) as LanguageConfigContainer;
        // let lbl = cc.find("btn_continue/label", this.node).getComponent(cc.Label);
        // lbl.string = langCfg.getLangById(10831);

        // this.bigRoot.active = true;
        // this.roundRoot.active = false;

        // let caidai = cc.find("p_box", this.bigRoot);//彩带庆祝粒子特效

        // bigResultData.sort((a, b) => {
        // return b.score - a.score;
        // });

        // let isAllZero = true;//是否所有人都没有获得分数或者金币，如果是，默认大家都输

        // for (let index = 0; index < bigResultData.length; index++) {
        // let data: BigResultData = bigResultData[index];
        // if (Number(data.score) != 0) {
        // isAllZero = false;
        // break;
        // }
        // }

        // let isSelfWin: boolean = false;//自己是否赢了

        // let firstData = bigResultData[0];
        // if (Number(firstData.userID) == KernelData.userID && !isAllZero) {
        // isSelfWin = true;
        // }

        // let winNode = cc.find("big_result/title_win", this.node);
        // let loseNode = cc.find("big_result/title_lose", this.node);

        // let winnerNode = null;
        // let selfNode = null;
        // let arr = [winNode, loseNode];
        // for (let i = 0; i < bigResultData.length; i++) {
        // let data: BigResultData = bigResultData[i];
        // let itemNode = cc.instantiate(this.bigResultItem);
        // itemNode.parent = this.bigLayout;
        // itemNode.active = true;
        // arr.push(itemNode);
        // let iswin = i == 0 && !isAllZero;
        // if (iswin) {
        // winnerNode = itemNode;
        // }
        // if(Number(data.userID) == Number(KernelData.userID)){
        // selfNode = itemNode;
        // }
        // itemNode.getComponent(PDK_Result_BigItem).setData(data, iswin);

        // itemNode.setScale(0, 0);
        // cc.tween(itemNode).to(0.3, { scaleX: 1, scaleY: 1 }, { easing: cc.easing.backOut }).start();
        // }

        // if (isSelfWin) {
        // winNode.active = true;
        // loseNode.active = false;
        // caidai.active = true;
        // } else {
        // winNode.active = false;
        // loseNode.active = true;
        // caidai.active = false;
        // }

        //        //放大出现
        // arr.push(this.btn_continue_node);
        // for (let m = 0; m < arr.length; m++) {
        // let element: cc.Node = arr[m];
        // element.setScale(0, 0);
        // cc.tween(element).delay(0.1 * m).to(0.3, { scaleX: 1, scaleY: 1 }, { easing: cc.easing.backOut }).start();
        // }

        //        //选中态闪烁
        // if (selfNode) {
        // let select_icon = cc.find("select_icon", selfNode);
        // select_icon.active = true;
        // select_icon.opacity = 0;
        // let time = 0.2;
        // cc.tween(select_icon).delay(0.4 * (arr.length - 2)).to(time, { opacity: 255 }).to(time, { opacity: 0 }).delay(time).to(time, { opacity: 255 }).start();
        // }
        // }
        //    // update (dt) {}
        ;

        _proto.onRestart = /*#__PURE__*/
        function () {
          var _onRestart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var matchGameAgainRet;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return SubGameMgr.inst.MatchGameAgain(SubGameDef.POKER_PDK_YUENAN, SubGameMgr.gameMgr.subType);
                case 2:
                  matchGameAgainRet = _context2.sent;
                  if (matchGameAgainRet.isSucc) {
                    this.node.destroy();
                  }
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onRestart() {
            return _onRestart.apply(this, arguments);
          }
          return onRestart;
        }();
        return PDK_Result;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player_name_lbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player_zha_lbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "player_chou_lbl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "player_curscore_lbl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "player_sumscore_lbl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "roundLayout", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "roundRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bigLayout", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bigRoot", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btn_continue_node", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "roundResultItem", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bigResultItem", [_dec13], {
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

System.register("chunks:///_virtual/PDK_RewardBtns.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventCenter.ts', './PDK_define.ts', './LanguageConfigContainer.ts', './ConfigManager.ts', './AudioControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, ProgressBar, Component, EventCenter, gameExpressionEvent, LanguageConfigContainer, ConfigManager, AudioControl;
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
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }, function (module) {
      EventCenter = module.default;
    }, function (module) {
      gameExpressionEvent = module.gameExpressionEvent;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      AudioControl = module.AudioControl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "2d7b2eJkgRKc4C223t5Ufuf", "PDK_RewardBtns", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_RewardBtns = exports('default', (_dec = ccclass('PDKRewardBtns'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(ProgressBar), _dec11 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_RewardBtns, _Component);
        function PDK_RewardBtns() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nodeGift", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeFragment", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnGift", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnFragment", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGift", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblFragment", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblFragmentProgress", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblFragment1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressFragment", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fragmentEffect", _descriptor10, _assertThisInitialized(_this));
          _this.m_isGiftOpen = false;
          _this.m_isFragmentOpen = false;
          return _this;
        }
        var _proto = PDK_RewardBtns.prototype;
        _proto.onLoad = function onLoad() {
          this.nodeGift.active = false;
          this.nodeFragment.active = false;
          var langConfig = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          this.lblGift.string = langConfig.getLangById(10234);
          this.lblFragment.string = langConfig.getLangById(120001002);
          this.fragmentEffect.active = false;
          this.updateFragmentText();
          EventCenter.onEvent(gameExpressionEvent.SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE, this.onFlyComplete, this);
          EventCenter.onEvent(gameExpressionEvent.CHECK_SHOW_EXTRA_REWARD_BTNS, this.onCheckShowExtraRewardBtns, this);
          this.onCheckShowExtraRewardBtns();
        };
        _proto.start = function start() {
          this.scheduleOnce(this.showContentWhenStart, 1);
        };
        _proto.onDestroy = function onDestroy() {
          EventCenter.offEvent(gameExpressionEvent.SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE, this.onFlyComplete, this);
          EventCenter.offEvent(gameExpressionEvent.CHECK_SHOW_EXTRA_REWARD_BTNS, this.onCheckShowExtraRewardBtns, this);
        };
        _proto.showContentWhenStart = function showContentWhenStart() {
          // this.showGift();
          this.scheduleOnce(this.showFragment, 0.5);
          this.scheduleOnce(this.hideGift, 3);
          this.scheduleOnce(this.hideFragment, 3.5);
          this.scheduleOnce(this.setBtns, 4);
        };
        _proto.setBtns = function setBtns() {
          this.btnGift.on(Node.EventType.TOUCH_END, this.onBtnGift, this);
          this.btnFragment.on(Node.EventType.TOUCH_END, this.onBtnFragment, this);
        };
        _proto.onBtnGift = function onBtnGift() {
          AudioControl.playClick();
          if (this.m_isGiftOpen) {
            this.hideGift();
          } else {
            this.showGift();
            this.scheduleOnce(this.hideGift, 3);
          }
          this.showScoreExchange();
        };
        _proto.onBtnFragment = function onBtnFragment() {
          AudioControl.playClick();
          if (this.m_isFragmentOpen) {
            this.hideFragment();
          } else {
            this.showFragment();
            this.scheduleOnce(this.hideFragment, 3);
          }
          this.showChipExchange();
          if (this.fragmentEffect.active) {
            this.fragmentEffect.active = false;
          }
        };
        _proto.showScoreExchange = function showScoreExchange() {
          // GameTool.createPanel("hall/panel/panel_exchange", (newNode)=>{
          //     newNode.getComponent(panel_exchange).showScoreExchange();
          // })
        };
        _proto.showChipExchange = function showChipExchange() {
          // GD.GameTool.createPanel("hall/panel/panel_exchange", (newNode)=>{
          // newNode.getComponent(panel_exchange).showChipExchange();
          // })
        };
        _proto.showGift = function showGift() {
          this.m_isGiftOpen = true;
          this.showContent(this.nodeGift);
        };
        _proto.hideGift = function hideGift() {
          this.m_isGiftOpen = false;
          this.hideContent(this.nodeGift);
        };
        _proto.showFragment = function showFragment() {
          this.m_isFragmentOpen = true;
          this.showContent(this.nodeFragment);
        };
        _proto.hideFragment = function hideFragment() {
          this.m_isFragmentOpen = false;
          this.hideContent(this.nodeFragment);
        };
        _proto.showContent = function showContent(node) {
          // if (node == null) return;
          // if (node.active == false) {
          // node.active = true;
          // }
          // node.scaleX = 0;
          // node.opacity = 0;
          // let scaleAct = cc.scaleTo(0.3, 1, 1).easing(cc.easeBackOut());
          // let fadeAct = cc.fadeIn(0.3);
          // node.runAction(cc.spawn(scaleAct, fadeAct));
        };
        _proto.hideContent = function hideContent(node) {
          // let scaleAct = cc.scaleTo(0.3, 0, 1).easing(cc.easeBackIn());
          // let fadeAct = cc.fadeOut(0.3);
          // node.runAction(cc.sequence(cc.spawn(scaleAct, fadeAct), cc.callFunc(() => {
          // if (node != null && node.isValid) {
          // node.active = false;
          // }
          // }, this)));
        };
        _proto.updateFragmentText = function updateFragmentText() {
          // let type = 2;   // 1 积分兑换 2 碎片兑换
          // let exchangeConfigContainer = ConfigManager.getInstance().getConfig(ExchangeConfigContainer) as ExchangeConfigContainer;
          // let exchangeDataList = exchangeConfigContainer.getExchangeListByType(type);

          // let nowCnt = 0;
          // let maxCnt = 0;
          // let rewardInfo = null;
          // let rewardIndex:number = -1
          // for (let i = 0; i < exchangeDataList.length; i++) {
          // let exchangeData = exchangeDataList[i];
          // let priceInfo: ItemInfo = exchangeData.price_item;
          // let priceItem = KernelData.pack[priceInfo.itemId];
          // if (priceItem != null) {
          // nowCnt = priceItem.cnt;
          // }
          // else {
          // nowCnt = 0;
          // }

          // maxCnt = priceInfo.count;
          // rewardInfo = exchangeData.get_reward;
          // rewardIndex = i;
          // if (nowCnt < maxCnt) {
          // break;
          // }
          // }

          // if (maxCnt == 0) return;

          // let rate = nowCnt / maxCnt;
          // if (rate > 1) rate = 1;
          // this.progressFragment.progress = rate;
          // this.lblFragmentProgress.string = `${nowCnt}/${maxCnt}`

          // let langConfig: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          // if (rewardIndex == exchangeDataList.length - 1 && rate == 1) {
          // this.lblFragment1.string = langConfig.getLangById(10740);
          // }
          // else {
          // let itemConfigContainer = ConfigManager.getInstance().getConfig(ItemConfigContainer) as ItemConfigContainer;
          // let rewardItemData = itemConfigContainer.getItemDataById(rewardInfo.itemId);
          // let offset = maxCnt - nowCnt;
          // this.lblFragment1.string = langConfig.formatLangById(10739, offset.toString(), rewardItemData.name);
          // }
        };
        _proto.onFlyComplete = function onFlyComplete() {
          // if (!this.m_isFragmentOpen) {
          // this.showFragment();
          // this.scheduleOnce(this.hideFragment, 3);
          // }
          // this.updateFragmentText();
          // if (this.fragmentEffect.isValid) {
          // this.fragmentEffect.active = true;
          // }
        };
        _proto.onCheckShowExtraRewardBtns = function onCheckShowExtraRewardBtns() {
          // if (clientKernel.getRoomCard()) {
          // this.node.active = true;
          // }
          // else {
          // this.node.active = true;
          // }
        };
        return PDK_RewardBtns;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeGift", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeFragment", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnGift", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnFragment", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblGift", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblFragment", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblFragmentProgress", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblFragment1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "progressFragment", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "fragmentEffect", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import { LanguageConfigContainer } from "../../../../kernel/Conifg/LanguageConfigContainer";
      // import { ConfigManager } from "../../../../kernel/ConfigManager";
      // import { ExchangeConfigContainer } from "../../../../kernel/Conifg/ExchangeConfigContainer";
      // import { ItemInfo, ItemConfigContainer } from "../../../../kernel/Conifg/ItemConfigContainer";
      // import { AudioControl } from "../../../../main/script/AudioControl";
      // import EventCenter from "../../../../main/script/utils/EventCenter";
      // import { gameExpressionEvent } from "../PDK_define";
      // import { GD } from "../../../../public/GD";
      // import panel_exchange from "../../../../main/script/panel_exchange";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_RewardBtns extends cc.Component {
      // 
      //     @property(cc.Node)
      //     nodeGift: cc.Node = null;
      //     
      //     @property(cc.Node)
      //     nodeFragment: cc.Node = null;
      //     
      //     @property(cc.Node)
      //     btnGift: cc.Node = null;
      //     
      //     @property(cc.Node)
      //     btnFragment: cc.Node = null;
      // 
      //     @property(cc.Label)
      //     lblGift: cc.Label = null;
      // 
      //     @property(cc.Label)
      //     lblFragment: cc.Label = null;
      //     
      //     @property(cc.Label)
      //     lblFragmentProgress: cc.Label = null;
      // 
      //     @property(cc.Label)
      //     lblFragment1: cc.Label = null;
      //     
      //     @property(cc.ProgressBar)
      //     progressFragment: cc.ProgressBar = null;
      // 
      //     @property(cc.Node)
      //     fragmentEffect: cc.Node = null;
      // 
      //     private m_isGiftOpen: boolean = false;
      //     private m_isFragmentOpen: boolean = false;
      // 
      //     onLoad() {
      //         this.nodeGift.active = false;
      //         this.nodeFragment.active = false;
      //         let langConfig: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
      //         this.lblGift.string = langConfig.getLangById(10234);
      //         this.lblFragment.string = langConfig.getLangById(120001002);
      //         this.fragmentEffect.active = false;
      // 
      //         this.updateFragmentText();
      //         EventCenter.onEvent(gameExpressionEvent.SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE, this.onFlyComplete, this);
      //         EventCenter.onEvent(gameExpressionEvent.CHECK_SHOW_EXTRA_REWARD_BTNS, this.onCheckShowExtraRewardBtns, this);
      //         this.onCheckShowExtraRewardBtns();
      //     }
      // 
      //     start() {
      //         this.scheduleOnce(this.showContentWhenStart, 1);
      //     }
      // 
      //     onDestroy() {
      //         EventCenter.offEvent(gameExpressionEvent.SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE, this.onFlyComplete, this);
      //         EventCenter.offEvent(gameExpressionEvent.CHECK_SHOW_EXTRA_REWARD_BTNS, this.onCheckShowExtraRewardBtns, this);
      //     }
      //     private showContentWhenStart() {
      //         this.showGift();
      //         this.scheduleOnce(this.showFragment, 0.5);
      //         this.scheduleOnce(this.hideGift, 3);
      //         this.scheduleOnce(this.hideFragment, 3.5);
      //         this.scheduleOnce(this.setBtns, 4);
      //     }
      // 
      //     private setBtns() {
      //         this.btnGift.on(cc.Node.EventType.TOUCH_END, this.onBtnGift, this)
      //         this.btnFragment.on(cc.Node.EventType.TOUCH_END, this.onBtnFragment, this)
      //     }
      // 
      //     private onBtnGift() {
      //         AudioControl.playClick();
      //         if (this.m_isGiftOpen) {
      //             this.hideGift();
      //         }
      //         else {
      //             this.showGift();
      //             this.scheduleOnce(this.hideGift, 3);
      //         }
      // 
      //         this.showScoreExchange();
      //     }
      // 
      //     private onBtnFragment() {
      //         AudioControl.playClick();
      //         if (this.m_isFragmentOpen) {
      //             this.hideFragment();
      //         }
      //         else {
      //             this.showFragment();
      //             this.scheduleOnce(this.hideFragment, 3);
      //         }
      // 
      //         this.showChipExchange();
      // 
      //         if (this.fragmentEffect.active) {
      //             this.fragmentEffect.active = false;
      //         }
      //     }
      // 
      //     private showScoreExchange() {
      //         GD.GameTool.createPanel("hall/panel/panel_exchange", (newNode)=>{
      //             newNode.getComponent(panel_exchange).showScoreExchange();
      //         })
      //     }
      // 
      //     private showChipExchange() {
      //         GD.GameTool.createPanel("hall/panel/panel_exchange", (newNode)=>{
      //             newNode.getComponent(panel_exchange).showChipExchange();
      //         })
      //     }
      // 
      //     private showGift() {
      //         this.m_isGiftOpen = true;
      //         this.showContent(this.nodeGift);
      //     }
      // 
      //     private hideGift() {
      //         this.m_isGiftOpen = false;
      //         this.hideContent(this.nodeGift);
      //     }
      // 
      //     private showFragment() {
      //         this.m_isFragmentOpen = true;
      //         this.showContent(this.nodeFragment);
      //     }
      // 
      //     private hideFragment() {
      //         this.m_isFragmentOpen = false;
      //         this.hideContent(this.nodeFragment);
      //     }
      // 
      //     private showContent(node: cc.Node) {
      //         if (node == null) return;
      //         if (node.active == false) {
      //             node.active = true;
      //         }
      //         node.scaleX = 0;
      //         node.opacity = 0;
      //         let scaleAct = cc.scaleTo(0.3, 1, 1).easing(cc.easeBackOut());
      //         let fadeAct = cc.fadeIn(0.3);
      //         node.runAction(cc.spawn(scaleAct, fadeAct));
      //     }
      // 
      //     private hideContent(node: cc.Node) {
      //         let scaleAct = cc.scaleTo(0.3, 0, 1).easing(cc.easeBackIn());
      //         let fadeAct = cc.fadeOut(0.3);
      //         node.runAction(cc.sequence(cc.spawn(scaleAct, fadeAct), cc.callFunc(() => {
      //             if (node != null && node.isValid) {
      //                 node.active = false;
      //             }
      //         }, this)));
      //     }
      // 
      //     private updateFragmentText() {
      //         let type = 2;   // 1 积分兑换 2 碎片兑换
      //         let exchangeConfigContainer = ConfigManager.getInstance().getConfig(ExchangeConfigContainer) as ExchangeConfigContainer;
      //         let exchangeDataList = exchangeConfigContainer.getExchangeListByType(type);
      // 
      //         let nowCnt = 0;
      //         let maxCnt = 0;
      //         let rewardInfo = null;
      //         let rewardIndex:number = -1
      //         for (let i = 0; i < exchangeDataList.length; i++) {
      //             let exchangeData = exchangeDataList[i];
      //             let priceInfo: ItemInfo = exchangeData.price_item;
      //             let priceItem = KernelData.pack[priceInfo.itemId];
      //             if (priceItem != null) {
      //                 nowCnt = priceItem.cnt;
      //             }
      //             else {
      //                 nowCnt = 0;
      //             }
      //             
      //             maxCnt = priceInfo.count;
      //             rewardInfo = exchangeData.get_reward;
      //             rewardIndex = i;
      //             if (nowCnt < maxCnt) {
      //                 break;
      //             }
      //         }
      // 
      //         if (maxCnt == 0) return;
      //         
      //         let rate = nowCnt / maxCnt;
      //         if (rate > 1) rate = 1;
      //         this.progressFragment.progress = rate;
      //         this.lblFragmentProgress.string = `${nowCnt}/${maxCnt}`
      //         
      //         let langConfig: LanguageConfigContainer = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
      //         if (rewardIndex == exchangeDataList.length - 1 && rate == 1) {
      //             this.lblFragment1.string = langConfig.getLangById(10740);
      //         }
      //         else {
      //             let itemConfigContainer = ConfigManager.getInstance().getConfig(ItemConfigContainer) as ItemConfigContainer;
      //             let rewardItemData = itemConfigContainer.getItemDataById(rewardInfo.itemId);
      //             let offset = maxCnt - nowCnt;
      //             this.lblFragment1.string = langConfig.formatLangById(10739, offset.toString(), rewardItemData.name);
      //         }
      //     }
      // 
      //     private onFlyComplete() {
      //         if (!this.m_isFragmentOpen) {
      //             this.showFragment();
      //             this.scheduleOnce(this.hideFragment, 3);
      //         }
      //         this.updateFragmentText();
      //         if (this.fragmentEffect.isValid) {
      //             this.fragmentEffect.active = true;
      //         }
      //     }
      // 
      //     private onCheckShowExtraRewardBtns() {
      //         if (clientKernel.getRoomCard()) {
      //             this.node.active = true;
      //         }
      //         else {
      //             this.node.active = true;
      //         }
      //     }
      // 
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_RewardItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Animation, Component;
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
      Animation = module.Animation;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "316e3WLW0lCwrawJKwo4lqG", "PDK_RewardItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_RewardItem = exports('default', (_dec = ccclass('PDKRewardItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Animation), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_RewardItem, _Component);
        function PDK_RewardItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemIcon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCount", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ani", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rewardBox", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rootNode", _descriptor5, _assertThisInitialized(_this));
          _this.m_rewardList = null;
          return _this;
        }
        var _proto = PDK_RewardItem.prototype;
        _proto.onLoad = function onLoad() {
          // this.rootNode.active = false;
          // EventCenter.onEvent(gameExpressionEvent.SHOW_EXTRA_REWARD, this.onShowRewardItem, this);
        };
        _proto.onDestroy = function onDestroy() {
          // EventCenter.offEvent(gameExpressionEvent.SHOW_EXTRA_REWARD, this.onShowRewardItem, this);
        };
        _proto.onShowRewardItem = function onShowRewardItem(rewardList) {
          // this.m_rewardList = rewardList;
          // this.checkShowNextReward();
        };
        _proto.showOneRewardItem = function showOneRewardItem(reward) {
          // this.rootNode.active = true;
          // let itemConfigContainer = ConfigManager.getInstance().getConfig(ItemConfigContainer) as ItemConfigContainer;
          // let info: ItemInfo = decodeConfigItemString(reward)[0];
          // let id = info.itemId;
          // let cnt = info.count;
          // let itemData = itemConfigContainer.getItemDataById(id);
          // if (itemData == null) return;
          // GameTools.readLocalImg("images/items/" + itemData.icon, this.itemIcon, 1);
          // this.lblCount.string = "+" + cnt;
          // let state: cc.AnimationState = this.ani.play();
          // state.wrapMode = cc.WrapMode.Loop;

          // this.node.opacity = 0;
          // this.node.setPosition(0, 150);
          // this.node.scale = 0;
          // let fade = cc.fadeIn(0.5);
          // let scale = cc.scaleTo(1.5, 1, 1).easing(cc.easeBackOut());
          // let scaleFade = cc.spawn(scale, fade);
          // if (info.itemId == 5) {
          //             // 积分
          // let move = cc.moveTo(1, 0, -300);
          // move.easing(cc.easeQuinticActionOut());
          // this.node.runAction(cc.sequence(scaleFade, move, cc.callFunc(() => {
          // this.onSeasonScoreFlyComplete();
          // }, this)));
          // }
          // else {
          // let move = cc.moveTo(1, this.rewardBox.x, this.rewardBox.y);
          // move.easing(cc.easeQuinticActionOut());
          // this.node.runAction(cc.sequence(scaleFade, move, cc.callFunc(() => {
          // this.onRewardItemFlyComplete();
          // }, this)));
          // }

          // let soundUrl: string = "hall/sound/gift-castle";
          // PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
        };
        _proto.onRewardItemFlyComplete = function onRewardItemFlyComplete() {
          // let fade = cc.fadeOut(0.2);
          // this.node.runAction(cc.sequence(fade, cc.callFunc(() => {
          // this.rootNode.active = false;
          // }, this)));
          // EventCenter.emitEvent(gameExpressionEvent.SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE);

          // this.checkShowNextReward();
        }
        //    // 赛季积分飞行完毕
        ;

        _proto.onSeasonScoreFlyComplete = function onSeasonScoreFlyComplete() {
          // let fade = cc.fadeOut(0.2);
          // this.node.runAction(cc.sequence(fade, cc.callFunc(() => {
          // this.rootNode.active = false;
          // }, this)));
          // this.checkShowNextReward();
        };
        _proto.checkShowNextReward = function checkShowNextReward() {
          // if (this.m_rewardList.length > 0) {
          // let reward: string = this.m_rewardList[0];
          // this.m_rewardList.splice(0, 1);
          // this.showOneRewardItem(reward);
          // }
        };
        return PDK_RewardItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ani", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rewardBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import EventCenter from "../../../../main/script/utils/EventCenter";
      // import { gameExpressionEvent } from "../PDK_define";
      // import { ConfigManager } from "../../../../kernel/ConfigManager";
      // import { ItemConfigContainer, ItemInfo, decodeConfigItemString } from "../../../../kernel/Conifg/ItemConfigContainer";
      // import PDK_PlayerSoundHelper from "./PDK_PlayerSoundHelper";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class PDK_RewardItem extends cc.Component {
      // 
      //     @property(cc.Node)
      //     itemIcon: cc.Node = null;
      //     @property(cc.Label)
      //     lblCount: cc.Label = null;
      //     @property(cc.Animation)
      //     ani: cc.Animation = null;
      //     @property(cc.Node)
      //     rewardBox: cc.Node = null;
      //     @property(cc.Node)
      //     rootNode: cc.Node = null;
      // 
      //     private m_rewardList:string[] = null;
      //     onLoad () {
      //         this.rootNode.active = false;
      //         EventCenter.onEvent(gameExpressionEvent.SHOW_EXTRA_REWARD, this.onShowRewardItem, this);
      //     }
      // 
      //     onDestroy() {
      //         EventCenter.offEvent(gameExpressionEvent.SHOW_EXTRA_REWARD, this.onShowRewardItem, this);
      //     }
      // 
      //     private onShowRewardItem(rewardList: string[]) {
      //         this.m_rewardList = rewardList;
      //         this.checkShowNextReward();
      //     }
      // 
      //     private showOneRewardItem(reward: string) {
      //         this.rootNode.active = true;
      //         let itemConfigContainer = ConfigManager.getInstance().getConfig(ItemConfigContainer) as ItemConfigContainer;
      //         let info: ItemInfo = decodeConfigItemString(reward)[0];
      //         let id = info.itemId;
      //         let cnt = info.count;
      //         let itemData = itemConfigContainer.getItemDataById(id);
      //         if (itemData == null) return;
      //         GameTools.readLocalImg("images/items/" + itemData.icon, this.itemIcon, 1);
      //         this.lblCount.string = "+" + cnt;
      //         let state: cc.AnimationState = this.ani.play();
      //         state.wrapMode = cc.WrapMode.Loop;
      // 
      //         this.node.opacity = 0;
      //         this.node.setPosition(0, 150);
      //         this.node.scale = 0;
      //         let fade = cc.fadeIn(0.5);
      //         let scale = cc.scaleTo(1.5, 1, 1).easing(cc.easeBackOut());
      //         let scaleFade = cc.spawn(scale, fade);
      //         if (info.itemId == 5) {
      //              // 积分
      //             let move = cc.moveTo(1, 0, -300);
      //             move.easing(cc.easeQuinticActionOut());
      //             this.node.runAction(cc.sequence(scaleFade, move, cc.callFunc(() => {
      //                 this.onSeasonScoreFlyComplete();
      //             }, this)));
      //         }
      //         else {
      //             let move = cc.moveTo(1, this.rewardBox.x, this.rewardBox.y);
      //             move.easing(cc.easeQuinticActionOut());
      //             this.node.runAction(cc.sequence(scaleFade, move, cc.callFunc(() => {
      //                 this.onRewardItemFlyComplete();
      //             }, this)));
      //         }
      //         
      //         let soundUrl: string = "hall/sound/gift-castle";
      //         PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
      //     }
      // 
      //     private onRewardItemFlyComplete() {
      //         let fade = cc.fadeOut(0.2);
      //         this.node.runAction(cc.sequence(fade, cc.callFunc(() => {
      //             this.rootNode.active = false;
      //         }, this)));
      //         EventCenter.emitEvent(gameExpressionEvent.SHOW_EXTRA_REWARD_ITEM_FLY_COMPLETE);
      // 
      //         this.checkShowNextReward();
      //     }
      // 
      //     // 赛季积分飞行完毕
      //     private onSeasonScoreFlyComplete() {
      //         let fade = cc.fadeOut(0.2);
      //         this.node.runAction(cc.sequence(fade, cc.callFunc(() => {
      //             this.rootNode.active = false;
      //         }, this)));
      //         this.checkShowNextReward();
      //     }
      // 
      //     private checkShowNextReward() {
      //         if (this.m_rewardList.length > 0) {
      //             let reward: string = this.m_rewardList[0];
      //             this.m_rewardList.splice(0, 1);
      //             this.showOneRewardItem(reward);
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PDK_RoomConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "ab9a94mh+JMLYmMMzckhhKW", "PDK_RoomConfig", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_RoomConfig = exports('default', (_dec = ccclass('PDKRoomConfig'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_RoomConfig, _Component);
        function PDK_RoomConfig() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roomID", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "juShu", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "juShuTitle", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PDK_RoomConfig.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          // PDK_RoomConfig.ins = this;
          // this.node.active = false;
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return PDK_RoomConfig;
      }(Component), _class3.ins = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "juShu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "juShuTitle", [_dec4], {
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

System.register("chunks:///_virtual/PDK_Setting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageConfigContainer.ts', './ConfigManager.ts', './AudioControl.ts', './RoomMgr.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, find, Label, Button, Component, LanguageConfigContainer, ConfigManager, AudioControl, RoomMgr, LanguageData;
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
      find = module.find;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      LanguageConfigContainer = module.LanguageConfigContainer;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      AudioControl = module.AudioControl;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6a851xBdjpHA4cNQU+z2E48", "PDK_Setting", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_Setting = exports('default', (_dec = ccclass('PDKSetting'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PDK_Setting, _Component);
        function PDK_Setting() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btn_music", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_effect", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PDK_Setting.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          var langCfg = ConfigManager.getInstance().getConfig(LanguageConfigContainer);
          var lbl = find("panel/content/btn_exit/New Label", this.node).getComponent(Label);
          lbl.string = langCfg.getLangById(10251);
          var array = [this.btn_effect, this.btn_music];
          for (var m = 0; m < array.length; m++) {
            var element = array[m];
            var on_lbl = element.getChildByName("bg_on").getChildByName("New Label");
            var off_lbl = element.getChildByName("bg_off").getChildByName("New Label");
            on_lbl.getComponent(Label).string = langCfg.getLangById(11803);
            off_lbl.getComponent(Label).string = langCfg.getLangById(11804);
          }
        };
        _proto.start = function start() {
          var isBgmOpen = tgx.AudioMgr.inst.audio.switchMusic;
          this.btn_music.children[2].active = isBgmOpen;
          this.btn_music.children[1].active = !isBgmOpen;
          var isEffectOpen = tgx.AudioMgr.inst.audio.switchEffect;
          this.btn_effect.children[2].active = isEffectOpen;
          this.btn_effect.children[1].active = !isEffectOpen;
          var btns = this.node.getComponentsInChildren(Button);
          for (var i = 0; i < btns.length; i++) {
            btns[i].node.on(Node.EventType.TOUCH_END, this.onBtnClick, this);
          }
        };
        _proto.clickClose = function clickClose() {
          this.node.destroy();
        };
        _proto.onBtnClick = function onBtnClick(event) {
          AudioControl.playClick();
          var name = event.currentTarget.name;
          switch (name) {
            case "btn_music":
              var isBgmOpen = tgx.AudioMgr.inst.audio.switchMusic;
              event.currentTarget.children[2].active = !isBgmOpen;
              event.currentTarget.children[1].active = isBgmOpen;
              tgx.AudioMgr.inst.audio.switchMusic = !isBgmOpen;
              break;
            case "btn_effect":
              var isEffectOpen = tgx.AudioMgr.inst.audio.switchEffect;
              event.currentTarget.children[2].active = !isEffectOpen;
              event.currentTarget.children[1].active = isEffectOpen;
              tgx.AudioMgr.inst.audio.switchEffect = !isEffectOpen;
              break;
            case "btn_close":
              this.clickClose();
              break;
            case "btn_exit":
              this.clickClose();
              tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (ok) {
                        tgx.AudioMgr.inst.audio.clearAll();
                        RoomMgr.inst.exitRoom();
                      }
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })));
              break;
          }
        }
        // update (dt) {}
        ;

        return PDK_Setting;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn_music", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_effect", [_dec3], {
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

System.register("chunks:///_virtual/PDK_TopEffectLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PDK_define.ts', './PDK_PlayerSoundHelper.ts', './TouchEffectHelper.ts', './GameTools.ts', './EventCenter.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, dragonBones, Node, Animation, find, Label, tween, gameExpressionEvent, PDK_PlayerSoundHelper, TouchEffectHelper, GameTools, EventCenter;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      dragonBones = module.dragonBones;
      Node = module.Node;
      Animation = module.Animation;
      find = module.find;
      Label = module.Label;
      tween = module.tween;
    }, function (module) {
      gameExpressionEvent = module.gameExpressionEvent;
    }, function (module) {
      PDK_PlayerSoundHelper = module.default;
    }, function (module) {
      TouchEffectHelper = module.default;
    }, function (module) {
      GameTools = module.default;
    }, function (module) {
      EventCenter = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "78ca8bhLgdHfKcON7XzN7zd", "PDK_TopEffectLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PDK_TopEffectLayer = exports('default', (_dec = ccclass('PDKTopEffectLayer'), _dec2 = property(dragonBones.ArmatureDisplay), _dec3 = property(Node), _dec4 = property(dragonBones.ArmatureDisplay), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_TouchEffectHelper) {
        _inheritsLoose(PDK_TopEffectLayer, _TouchEffectHelper);
        function PDK_TopEffectLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TouchEffectHelper.call.apply(_TouchEffectHelper, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bomb_effect", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwin_effect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold_explo_effect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tongpai_effect", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PDK_TopEffectLayer.prototype;
        _proto.onEnable = function onEnable() {
          _TouchEffectHelper.prototype.onEnable.call(this);
          this.bomb_effect.node.active = false;
          this.gold_explo_effect.node.active = false;
          this.bigwin_effect.active = false;
          this.tongpai_effect.active = false;
          EventCenter.onEvent(gameExpressionEvent.SHOW_BOMB, this.showBomb, this);
          EventCenter.onEvent(gameExpressionEvent.SHOW_BIGWIN, this.showBigwin, this);
          EventCenter.onEvent(gameExpressionEvent.SHOW_TONGPAI, this.showTongpai, this);
        };
        _proto.onDestroy = function onDestroy() {
          EventCenter.offEvent(gameExpressionEvent.SHOW_BOMB, this.showBomb, this);
          EventCenter.offEvent(gameExpressionEvent.SHOW_BIGWIN, this.showBigwin, this);
          EventCenter.offEvent(gameExpressionEvent.SHOW_TONGPAI, this.showTongpai, this);
        };
        _proto.showBomb = function showBomb() {
          this.bomb_effect.node.active = true;
          this.bomb_effect.playAnimation("newAnimation", 1);
          var soundUrl = "sound/chat";
          PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
        };
        _proto.showBigwin = function showBigwin(isSelfWin, score) {
          var _this2 = this;
          if (isSelfWin) {
            this.gold_explo_effect.node.active = true;
            this.gold_explo_effect.playAnimation("newAnimation", 1);
            var soundUrl = "sound/coin1";
            PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
            this.gold_explo_effect.once(dragonBones.EventObject.COMPLETE, function () {
              _this2.showBigwinText(score);
            }, this);
          } else {
            this.showBigwinText(score);
          }
        };
        _proto.showBigwinText = function showBigwinText(score) {
          var _this3 = this;
          this.bigwin_effect.active = true;
          var ani = this.bigwin_effect.getComponent(Animation);
          if (ani != null) {
            ani.play();
          }
          var lbl = find("score/score_text", this.bigwin_effect);
          if (lbl != null) {
            lbl.getComponent(Label).string = "+" + GameTools.nFormatter(score);
          }
          var soundUrl = "sound/bigwin";
          PDK_PlayerSoundHelper.playSoundUrl(soundUrl);
          this.scheduleOnce(function () {
            ani.stop();
            _this3.bigwin_effect.active = false;
          }, 3);
        };
        _proto.showTongpai = function showTongpai(isSelfWin) {
          var _this4 = this;
          this.tongpai_effect.active = true;
          this.tongpai_effect.opacity = 0;
          // 创建淡入动画
          tween(this.tongpai_effect).to(0.3, {
            opacity: 255
          }).start();
          this.scheduleOnce(function () {
            _this4.tongpai_effect.active = false;
          }, 3);
        };
        return PDK_TopEffectLayer;
      }(TouchEffectHelper), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bomb_effect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bigwin_effect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gold_explo_effect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tongpai_effect", [_dec5], {
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

System.register("chunks:///_virtual/PdkYuNanGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts', './ConfigManager.ts', './ResourceMgr.ts', './GD.ts', './PokerManager.ts', './GameManager2.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, assetManager, Prefab, sp, GameMgr, SubGameDef, SubGameMgr, ModuleDef, ConfigManager, ResourceMgr, GameTool, PokerManager, GameManager;
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
      Prefab = module.Prefab;
      sp = module.sp;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      GameTool = module.GameTool;
    }, function (module) {
      PokerManager = module.PokerManager;
    }, function (module) {
      GameManager = module.GameManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "adaaezBGJxOMov3PPLm3l/l", "PdkYuNanGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PdkYuNanGameMgr = exports('PdkYuNanGameMgr', (_dec = ccclass('PdkYuNanGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(PdkYuNanGameMgr, _GameMgr);
        function PdkYuNanGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._preloadResIndex = 0;
          _this._preloadResTotal = void 0;
          _this._gameType = SubGameDef.POKER_PDK_YUENAN;
          _this._entryScene = {
            name: 'lobby_pdk_yuenan',
            bundle: ModuleDef.POKER_PDK_YUENAN
          };
          _this._gameScene = {
            name: 'game_pdk_yuenan',
            bundle: ModuleDef.POKER_PDK_YUENAN
          };
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          return _this;
        }
        var _proto = PdkYuNanGameMgr.prototype;
        _proto.init = function init() {
          GameManager.inst.init();
          PokerManager.inst.init();
        };
        _proto.uinit = function uinit() {
          GameTool.destroyWaitLayer();
          PokerManager.inst.uinit();
          GameManager.inst.uinit();
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
                  this._preloadResTotal = 9;
                  processFun(0);
                  _context.next = 5;
                  return this.loadResource(processFun);
                case 5:
                  _context.next = 7;
                  return this.preLoadLobbyScene(processFun);
                case 7:
                  _context.next = 9;
                  return this.preLoadGameScene(processFun);
                case 9:
                  processFun(1);
                  return _context.abrupt("return", true);
                case 11:
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
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    function loadConfigComplete() {
                      var loadPrefabCount = 6;
                      var self = this;
                      function loadPrefabComplete() {
                        loadPrefabCount--;
                        self._preloadResIndex++;
                        processFun(self._preloadResIndex / self._preloadResTotal);
                        if (loadPrefabCount == 0) {
                          resolve(true);
                        }
                      }
                      ResourceMgr.inst.preloadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, 'kernel/PublicPrefab/UITips/UITips', Prefab, loadPrefabComplete);
                      ResourceMgr.inst.preloadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, 'kernel/PublicPrefab/UILoading/UILoading', Prefab, loadPrefabComplete);
                      ResourceMgr.inst.preloadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, 'kernel/PublicPrefab/UIDialogBox/UIMessageBox', Prefab, loadPrefabComplete);
                      ResourceMgr.inst.preloadResByModuleBundle(ModuleDef.BASIC, 'res/room/chuji/ChuJi', sp.SkeletonData, loadPrefabComplete);
                      ResourceMgr.inst.preloadResByModuleBundle(ModuleDef.BASIC, 'res/room/zhongji/zhongji', sp.SkeletonData, loadPrefabComplete);
                      ResourceMgr.inst.preloadResByModuleBundle(ModuleDef.BASIC, 'res/room/gaoji/gaoji', sp.SkeletonData, loadPrefabComplete);
                    }
                    ConfigManager.getInstance().loadAllConfig(loadConfigComplete.bind(_this2));
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function loadResource(_x2) {
            return _loadResource.apply(this, arguments);
          }
          return loadResource;
        }();
        _proto.preLoadLobbyScene = /*#__PURE__*/function () {
          var _preLoadLobbyScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(processFun) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    var bundle = assetManager.getBundle(ModuleDef.POKER_PDK_YUENAN);
                    if (bundle) {
                      bundle.preloadScene(SubGameMgr.gameMgr.entryScene.name, null, function () {
                        this._preloadResIndex++;
                        processFun(this._preloadResIndex / this._preloadResTotal);
                        resolve(true);
                      }.bind(_this3)); //7
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
          function preLoadLobbyScene(_x3) {
            return _preLoadLobbyScene.apply(this, arguments);
          }
          return preLoadLobbyScene;
        }();
        _proto.preLoadGameScene = /*#__PURE__*/function () {
          var _preLoadGameScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(processFun) {
            var _this4 = this;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    var bundle = assetManager.getBundle(ModuleDef.FISH);
                    if (bundle) {
                      bundle.preloadScene(SubGameMgr.gameMgr.gameScene.name, null, function () {
                        this._preloadResIndex++;
                        processFun(this._preloadResIndex / this._preloadResTotal);
                        resolve(true);
                      }.bind(_this4)); //7
                    } else {
                      resolve(false);
                    }
                  }));
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function preLoadGameScene(_x4) {
            return _preLoadGameScene.apply(this, arguments);
          }
          return preLoadGameScene;
        }() // 进入游戏
        ;

        _proto.enterGame = /*#__PURE__*/
        function () {
          var _enterGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  SubGameMgr.inst.MatchRoom(this.gameType, true);
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function enterGame() {
            return _enterGame.apply(this, arguments);
          }
          return enterGame;
        }();
        _createClass(PdkYuNanGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new PdkYuNanGameMgr();
            }
            return this._inst;
          }
        }]);
        return PdkYuNanGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(PdkYuNanGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PeiMusicConfigContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './BaseConfigContainer.ts', './ModuleDef.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, JsonAsset, ResourceMgr, BaseConfigContainer, ModuleDef, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      BaseConfigContainer = module.BaseConfigContainer;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "41975pIlmpFAp7Q5jiQJaQn", "PeiMusicConfigContainer", undefined);
      var PeiData = exports('PeiData', function PeiData() {
        this.id = void 0;
        this.sound = void 0;
        this.arrSound = void 0;
      });
      var PeiDataTitle = {
        id: 0,
        pei_music_id: 1
      };
      var PeiMusicConfigContainer = exports('PeiMusicConfigContainer', /*#__PURE__*/function (_BaseConfigContainer) {
        _inheritsLoose(PeiMusicConfigContainer, _BaseConfigContainer);
        function PeiMusicConfigContainer(callback, caller, arg) {
          var _this;
          _this = _BaseConfigContainer.call(this) || this;
          _this.configData = null;
          _this.mapConfig = null;
          _this.arrConfig = null;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.POKER_PDK_YUENAN, _this.CONFIG_FILE_DIR + "pei_music", JsonAsset, function (err, jsonAsset) {
            if (err) {
              Logger.error("load pei_music err");
            } else {
              // let encode = object.text;
              // let decode = window.atob(encode);
              // object = JSON.parse(decode);
              // for (var i in object) {
              //     this.monsterConfigData[i] = object[i];
              // }
              // if (callback) {
              //     callback.call(caller, arg);
              // }
              _this.configData = jsonAsset.json;
              if (callback) {
                callback.call(caller, arg);
              }
            }
          });
          return _this;
        }
        var _proto = PeiMusicConfigContainer.prototype;
        _proto.generateMapConfig = function generateMapConfig() {
          if (this.mapConfig == null) {
            this.mapConfig = {};
            this.arrConfig = [];
            for (var i = 0; i < this.configData.RECORDS.length; i++) {
              var record = this.configData.RECORDS[i];
              var temp = new PeiData();
              temp.id = Number(record[PeiDataTitle.id]); // 转成number 查表速度快一些
              temp.sound = record[PeiDataTitle.pei_music_id];
              temp.arrSound = temp.sound.split('#');
              this.mapConfig[temp.id] = temp;
              this.arrConfig.push(temp);
            }
          }
        };
        _proto.getDataArray = function getDataArray() {
          if (this.mapConfig == null) {
            this.generateMapConfig();
          }
          return this.arrConfig;
        };
        _proto.getDataById = function getDataById(id) {
          var data = null;
          if (this.mapConfig == null) {
            this.generateMapConfig();
          }
          var numId = 0;
          if (typeof id == "string") {
            numId = Number(id);
          } else {
            numId = id;
          }
          data = this.mapConfig[numId];
          return data;
        };
        return PeiMusicConfigContainer;
      }(BaseConfigContainer));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerUtils.ts", ['cc', './PokerManager.ts'], function (exports) {
  var cclegacy, PokerManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      PokerManager = module.PokerManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ea532+UozJKTI/e6S33cLNI", "PokerUtils", undefined);
      var PokerUtils = exports('PokerUtils', /*#__PURE__*/function () {
        function PokerUtils() {}
        var _proto = PokerUtils.prototype;
        /**
        * 检查黑桃3是否在剩余牌里
        * 
        * @param oldCards 旧的数组
        */
        _proto.spade3Check = function spade3Check(deck, playerCount) {
          if (playerCount * 13 >= deck.length) {
            return true;
          }
          var spade3Index = deck.indexOf(0x03);
          if (spade3Index >= playerCount * 13 - 1) {
            // 随机一张牌
            var randomIndex = Math.floor(Math.random() * playerCount * 13);
            deck[spade3Index] = deck[randomIndex];
            deck[randomIndex] = 0x03;
          }
          return true;
        }
        /**
        * 获取牌点数
        *
        * @param card 牌
        */;
        PokerUtils.getCardRank = function getCardRank(card) {
          return card & 0x0F;
        }

        /**
         * 获取牌花色
         *
         * @param card 牌
         */;
        PokerUtils.getCardColor = function getCardColor(card) {
          return (card & 0xF0) >> 4;
        }

        /**
         * 该座位相对与自己座位的值
         * @param chairID 传入需查座位id
         * @param myChairID 自己的座位id
         * @param chairCount 座位总数
         */;
        PokerUtils.getRelativeSeatID = function getRelativeSeatID(chairID, myChairID, chairCount) {
          if (chairCount === void 0) {
            chairCount = 0;
          }
          if (chairCount == 0) {
            chairCount = PokerManager.inst.roomData.playerCount;
          }
          return (chairID + chairCount - myChairID) % chairCount;
        };
        return PokerUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RollingNumber.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "a8b01QDgaFDH6UNN4FQDTDg", "RollingNumber", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RollingNumber = exports('default', (_dec = ccclass('RollingNumber'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RollingNumber, _Component);
        function RollingNumber() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_arrNum = [];
          _this.m_currentNum = "0";
          _this.m_targetNum = null;
          _this.m_currentIndex = 0;
          _this.m_isRolling = false;
          return _this;
        }
        var _proto = RollingNumber.prototype;
        _proto.onLoad = function onLoad() {
          // let lblNode: cc.Node = this.node.getChildByName("lbl")
          // if (lblNode == null) return;
          // this.m_arrNum.push(lblNode);

          // let lblNode1 = cc.instantiate(lblNode);
          // this.m_arrNum.push(lblNode1);
          // this.node.addChild(lblNode1);
          // lblNode1.setPosition(0, 28);

          // let lbl = lblNode.getComponent(cc.Label);
          // lbl.string = this.m_currentNum;
        };
        _proto.checkRoll = function checkRoll() {

          // if (this.m_isRolling || this.m_targetNum == null || !this.node.isValid) return;
          // let targetNum: string = null
          // if (this.m_targetNum != this.m_currentNum) {
          // targetNum = this.m_targetNum;
          // }
          // this.m_targetNum = null;
          // if (targetNum == null) return;

          // this.m_currentNum = targetNum;
          // let nextIndex = this.m_currentIndex == 0 ? 1 : 0;
          // let nextLbl= this.m_arrNum[nextIndex];
          // nextLbl.getComponent(cc.Label).string = targetNum;
          // let rollAct = cc.moveTo(0.2, 0, 0).easing(cc.easeElasticOut(0.3));
          // nextLbl.runAction(rollAct);

          // let lbl = this.m_arrNum[this.m_currentIndex]
          // let rollAct1 = cc.moveTo(0.2, 0, -28).easing(cc.easeElasticOut(0.3));;
          // lbl.runAction(cc.sequence(rollAct1, cc.callFunc(() => {
          // this.onRollComplete();
          // }, this)));
          // this.m_isRolling = true;
        };
        _proto.onRollComplete = function onRollComplete() {
          // if (!this.node.isValid) return;
          // this.m_isRolling = false;
          // let lbl = this.m_arrNum[this.m_currentIndex];
          // lbl.setPosition(0, 28);
          // this.m_currentIndex = this.m_currentIndex == 0 ? 1 : 0;

          // this.checkRoll();
        };
        _proto.setNum = function setNum(num) {
          // if (num == null || num == "") return;
          // this.m_targetNum = num;
          // this.checkRoll();
        };
        return RollingNumber;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class RollingNumber extends cc.Component {
      //     private m_arrNum: cc.Node[] = [];
      //     private m_currentNum: string = "0";
      //     private m_targetNum: string = null;
      //     private m_currentIndex: number = 0;
      //     private m_isRolling: boolean = false;
      // 
      //     onLoad() {
      //         let lblNode: cc.Node = this.node.getChildByName("lbl")
      //         if (lblNode == null) return;
      //         this.m_arrNum.push(lblNode);
      // 
      //         let lblNode1 = cc.instantiate(lblNode);
      //         this.m_arrNum.push(lblNode1);
      //         this.node.addChild(lblNode1);
      //         lblNode1.setPosition(0, 28);
      // 
      //         let lbl = lblNode.getComponent(cc.Label);
      //         lbl.string = this.m_currentNum;
      //     }
      // 
      //     private checkRoll() {
      // 
      //         if (this.m_isRolling || this.m_targetNum == null || !this.node.isValid) return;
      //         let targetNum: string = null
      //         if (this.m_targetNum != this.m_currentNum) {
      //             targetNum = this.m_targetNum;
      //         }
      //         this.m_targetNum = null;
      //         if (targetNum == null) return;
      // 
      //         this.m_currentNum = targetNum;
      //         let nextIndex = this.m_currentIndex == 0 ? 1 : 0;
      //         let nextLbl= this.m_arrNum[nextIndex];
      //         nextLbl.getComponent(cc.Label).string = targetNum;
      //         let rollAct = cc.moveTo(0.2, 0, 0).easing(cc.easeElasticOut(0.3));
      //         nextLbl.runAction(rollAct);
      // 
      //         let lbl = this.m_arrNum[this.m_currentIndex]
      //         let rollAct1 = cc.moveTo(0.2, 0, -28).easing(cc.easeElasticOut(0.3));;
      //         lbl.runAction(cc.sequence(rollAct1, cc.callFunc(() => {
      //             this.onRollComplete();
      //         }, this)));
      //         this.m_isRolling = true;
      //     }
      // 
      //     private onRollComplete() {
      //         if (!this.node.isValid) return;
      //         this.m_isRolling = false;
      //         let lbl = this.m_arrNum[this.m_currentIndex];
      //         lbl.setPosition(0, 28);
      //         this.m_currentIndex = this.m_currentIndex == 0 ? 1 : 0;
      // 
      //         this.checkRoll();
      //     }
      // 
      //     public setNum(num: string) {
      //         if (num == null || num == "") return;
      //         this.m_targetNum = num;
      //         this.checkRoll();
      //     }
      // 
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SaoguangTexture.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "35c82EZ6FBLtZtA1KC59kBj", "SaoguangTexture", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SaoguangTexture = exports('default', (_dec = ccclass('SaoguangTexture'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SaoguangTexture, _Component);
        function SaoguangTexture() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._speed = 0.5;
          _this._time = 0;
          return _this;
        }
        var _proto = SaoguangTexture.prototype;
        _proto.onLoad = function onLoad() {
          //        // 获取材质
          // this._material = this.node.getComponent(cc.Sprite).getMaterial(0);
        };
        _proto.update = function update(dt) {
          // if (this._time > 2) {
          // this._time = 0;
          // }

          // this._material.setProperty("u_time", this._time);
          // this._time += dt * this._speed;
        };
        return SaoguangTexture;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class SaoguangTexture extends cc.Component {
      //     private _speed: number = 0.5;
      //     private _time: number = 0;
      //     private _material: cc.MaterialVariant;
      // 
      //     onLoad() {
      //         // 获取材质
      //         this._material = this.node.getComponent(cc.Sprite).getMaterial(0);
      //     }
      // 
      //     update(dt) {
      //         if (this._time > 2) {
      //             this._time = 0;
      //         }
      // 
      //         this._material.setProperty("u_time", this._time);
      //         this._time += dt * this._speed;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Singleton2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5a05cnz86ZFGYTx/dXC96jq", "Singleton", undefined);
      var Singleton = exports('Singleton', /*#__PURE__*/function () {
        function Singleton() {}
        Singleton.instance = function instance() {
          if (!this.s_inst) {
            this.s_inst = new this();
          }
          return this.s_inst;
        };
        Singleton.destory = function destory() {
          if (this.s_inst) {
            this.s_inst = null;
          }
        };
        return Singleton;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TouchEffectHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, dragonBones, NodeEventType, UITransform, Vec3, Component, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      dragonBones = module.dragonBones;
      NodeEventType = module.NodeEventType;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "954cap8d31NIqytBE5LuU6n", "TouchEffectHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TouchEffectHelper = exports('default', (_dec = ccclass('TouchEffectHelper'), _dec2 = property(dragonBones.ArmatureDisplay), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TouchEffectHelper, _Component);
        function TouchEffectHelper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "touch_effect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TouchEffectHelper.prototype;
        _proto.onEnable = function onEnable() {
          this.node.on(NodeEventType.TOUCH_END, this.onTouch, this);
          this.node.on(NodeEventType.TOUCH_START, this.onTouch_preventSwallow, this);
          this.node.on(NodeEventType.TOUCH_END, this.onTouch_preventSwallow, this);
          this.node.on(NodeEventType.TOUCH_MOVE, this.onTouch_preventSwallow, this);
          this.node.on(NodeEventType.TOUCH_END, this.onTouch_preventSwallow, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.onTouch_preventSwallow, this);
        };
        _proto.onTouch_preventSwallow = function onTouch_preventSwallow(event) {
          event.preventSwallow = true;
        };
        _proto.onTouch = function onTouch(event) {
          var touchPos = event.touch.getUILocation();
          var uiTransform = this.node.getComponent(UITransform);
          if (uiTransform) {
            var localPos = uiTransform.convertToNodeSpaceAR(new Vec3(touchPos.x, touchPos.y));
            console.log('Local position:', localPos);
            this.touch_effect.node.setPosition(localPos);
          }

          // let x = vec2.x - uiTransform.width / 2;
          // let y = vec2.y - uiTransform.height / 2;
          // this.touch_effect.node.setPosition(x, y);

          var idx = Utils.randomRangeInt(1, 4);
          var aniName = "click_" + idx;
          this.touch_effect.playAnimation(aniName, 1);
          event.preventSwallow = true;
        };
        return TouchEffectHelper;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "touch_effect", [_dec2], {
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

System.register("chunks:///_virtual/UILoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, tween, Component;
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
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "362dbOqDXZAaIxXBhmumUGS", "UILoading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UILoading = exports('UILoading', (_dec = ccclass('UILoading'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UILoading, _Component);
        function UILoading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lbl_text", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UILoading.prototype;
        _proto.onLoad = function onLoad() {
          // this.node.active = false 
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.showPanel = function showPanel(show, text, stayTime) {
          var _this2 = this;
          if (stayTime === void 0) {
            stayTime = 5;
          }
          text = text || "";
          this.node.active = !!show;
          this.lbl_text.string = text;
          if (show) {
            // 使用 tween 实现延迟隐藏效果
            tween(this.node).delay(stayTime).call(function () {
              _this2.node.active = false;
            }).start();
          }
        };
        return UILoading;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_text", [_dec2], {
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

System.register("chunks:///_virtual/UIMessageBox.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4923bQ6tWVGWq72aZPia3Wu", "UIMessageBox", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIMessageBox = exports('UIMessageBox', (_dec = ccclass('UIMessageBox'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMessageBox, _Component);
        function UIMessageBox() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_confirm", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_cancel", _descriptor3, _assertThisInitialized(_this));
          _this._yesCB = null;
          _this._cancelCB = null;
          return _this;
        }
        var _proto = UIMessageBox.prototype;
        _proto.start = function start() {
          // this.btn_confirm.on(cc.Node.EventType.TOUCH_END, () => { 
          // this._yesCB && this._yesCB() 
          // this.node.active = false; 
          // }) 
          // this.btn_cancel.on(cc.Node.EventType.TOUCH_END, () => { 
          // this._cancelCB && this._cancelCB() 
          // this.node.active = false; 
          // }); 
        };
        _proto.messageBox = function messageBox(text, cb1, cb2) {
          // this.content.string = text; 
          // this.btn_confirm.active = true; 
          // this._yesCB = cb1 
          // this._cancelCB = cb2 
          // if (cb2) { 
          // this.btn_cancel.active = true; 
          // } else { 
          // this.btn_cancel.active = false; 
          // } 
        };
        return UIMessageBox;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_confirm", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn_cancel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // cc.Class({
      //     extends: cc.Component,
      // 
      //     properties: {
      //         //by_009:内容
      //         content: cc.Label,
      //         //by_009:确认
      //         btn_confirm: cc.Node,
      //         //by_009:取消
      //         btn_cancel: cc.Node,
      //         _yesCB: null,
      //         _cancelCB: null,
      //     },
      // 
      //     // LIFE-CYCLE CALLBACKS:
      // 
      //     // onLoad () {},
      // 
      //     start() {
      //         this.btn_confirm.on(cc.Node.EventType.TOUCH_END, () => {
      //             this._yesCB && this._yesCB()
      //             this.node.active = false;
      //         })
      // 
      //         this.btn_cancel.on(cc.Node.EventType.TOUCH_END, () => {
      //             this._cancelCB && this._cancelCB()
      //             this.node.active = false;
      //         });
      // 
      // 
      //     },
      // 
      // 
      //     messageBox(text = "", cb1, cb2) {
      //         this.content.string = text;
      //         this.btn_confirm.active = true;
      //         this._yesCB = cb1
      //         this._cancelCB = cb2
      //         if (cb2) {
      //             this.btn_cancel.active = true;
      //         } else {
      //             this.btn_cancel.active = false;
      //         }
      //     },
      // 
      // 
      //     // update (dt) {},
      // });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITips.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "85940FfI2NPu5Qdz0SuVKqf", "UITips", undefined);
      var ccclass = _decorator.ccclass;
      var UITips = exports('UITips', (_dec = ccclass('UITips'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UITips, _Component);
        function UITips() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.item = null;
          _this.container = null;
          return _this;
        }
        var _proto = UITips.prototype;
        _proto.onLoad = function onLoad() {
          this.item = this.node.getChildByName("item");
          this.container = this.node.getChildByName("container");
          this.node.active = false;
          console.log("onLoad", this.node.name);
        };
        _proto.showText = function showText(text) {
          var _this2 = this;
          if (!text) return;
          this.node.active = true;
          this.item.active = true;
          var lbl_text = this.item.getChildByName("lbl_text").getComponent(Label);
          lbl_text.string = text;
          if (this.item) {
            // 创建淡入动作，持续时间 0.1 秒
            var fadeInAction = tween(this.item).to(0.1, {
              opacity: 255
            });
            // 创建延迟动作，持续时间 2 秒
            var delayAction = tween().delay(2);
            // 创建淡出动作，持续时间 0.2 秒
            var fadeOutAction = tween(this.item).to(0.2, {
              opacity: 0
            });
            // 创建移除自身动作
            var removeSelfAction = tween(this.item).call(function () {
              _this2.item.destroy();
            });

            // 按顺序组合动作
            var sequenceAction = tween(this.item).then(fadeInAction).then(delayAction).then(fadeOutAction).then(removeSelfAction);

            // 执行组合后的动作
            sequenceAction.start();
          }
        };
        return UITips;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49fa1Q8RbVHCpMreInw5ia5", "Utils", undefined);
      var Utils = exports('default', /*#__PURE__*/function () {
        function Utils() {}
        //    /**左右都为闭区间 */
        Utils.randomRangeInt = function randomRangeInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          // Math.random 返回介于 0（包含） ~ 1（不包含） 之间的一个随机数 所以要 max - min + 1
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        //    // 左右都是闭区间
        ;

        Utils.randomRange = function randomRange(min, max) {
          return Math.random() * (max - min) + min;
        };
        return Utils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaitTime.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "01f4fJmvZBK3LuSVY9IteTx", "WaitTime", undefined);
      var WaitTime = exports('default', /*#__PURE__*/function () {
        function WaitTime() {}
        var _proto = WaitTime.prototype;
        _proto.wait = /*#__PURE__*/function () {
          var _wait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(caller, sec) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("WaitTime : " + sec);
                  if (!(caller == null || !caller.isValid)) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    caller.scheduleOnce(function () {
                      resolve(true);
                    }, sec);
                  }));
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function wait(_x, _x2) {
            return _wait.apply(this, arguments);
          }
          return wait;
        }();
        return WaitTime;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_poker_pdk_yuenan', 'chunks:///_virtual/module_poker_pdk_yuenan'); 
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