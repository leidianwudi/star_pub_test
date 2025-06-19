System.register("chunks:///_virtual/AudioEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, AudioSource;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", undefined);
      var ccclass = _decorator.ccclass;

      /** 游戏音效 */
      var AudioEffect = exports('AudioEffect', (_dec = ccclass('AudioEffect'), _dec(_class = /*#__PURE__*/function (_AudioSource) {
        _inheritsLoose(AudioEffect, _AudioSource);
        function AudioEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AudioSource.call.apply(_AudioSource, [this].concat(args)) || this;
          /** 背景音乐播放完成回调 */
          _this.onComplete = null;
          return _this;
        }
        var _proto = AudioEffect.prototype;
        _proto.start = function start() {
          this.node.on(AudioSource.EventType.ENDED, this.onAudioEnded, this);
        };
        _proto.onAudioEnded = function onAudioEnded() {
          this.onComplete && this.onComplete();
        };
        return AudioEffect;
      }(AudioSource)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioEffectPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResLoader.ts', './AudioEffect.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, AudioClip, NodePool, Node, resLoader, AudioEffect;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
      NodePool = module.NodePool;
      Node = module.Node;
    }, function (module) {
      resLoader = module.resLoader;
    }, function (module) {
      AudioEffect = module.AudioEffect;
    }],
    execute: function () {
      cclegacy._RF.push({}, "01278BDjrtCr4CBpmO5DZlN", "AudioEffectPool", undefined);
      var AE_ID_MAX = 30000;

      /** 音效池 */
      var AudioEffectPool = exports('AudioEffectPool', /*#__PURE__*/function () {
        function AudioEffectPool() {
          this._switch = true;
          this._volume = 1;
          /** 音效播放器对象池 */
          this.pool = new NodePool();
          /** 对象池集合 */
          this.effects = new Map();
          /** 用过的音效资源记录 */
          this.res = new Map();
          this._aeId = 0;
        }
        var _proto = AudioEffectPool.prototype;
        /** 获取请求唯一编号 */
        _proto.getAeId = function getAeId() {
          if (this._aeId == AE_ID_MAX) this._aeId = 1;
          this._aeId++;
          return this._aeId;
        }

        /**
         * 加载与播放音效
         * @param url                  音效资源地址与音效资源
         * @param bundleName           资源包名
         * @param onPlayComplete       播放完成回调
         * @returns 
         */;
        _proto.load = /*#__PURE__*/
        function () {
          var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, bundleName, onPlayComplete) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (bundleName === void 0) {
                    bundleName = resLoader.defaultBundleName;
                  }
                  return _context2.abrupt("return", new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                    var aeid, key, clip, ae, node;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (_this["switch"]) {
                            _context.next = 2;
                            break;
                          }
                          return _context.abrupt("return", resolve(-1));
                        case 2:
                          aeid = _this.getAeId();
                          if (url instanceof AudioClip) {
                            key = url.uuid;
                          } else {
                            key = bundleName + "_" + url;
                          }
                          key += "_" + aeid;

                          // 创建音效资源
                          if (!(url instanceof AudioClip)) {
                            _context.next = 9;
                            break;
                          }
                          clip = url;
                          _context.next = 15;
                          break;
                        case 9:
                          clip = resLoader.get(url, AudioClip, bundleName);
                          if (clip) {
                            _context.next = 15;
                            break;
                          }
                          _this.res.set(bundleName, url);
                          _context.next = 14;
                          return resLoader.loadAsync(bundleName, url, AudioClip);
                        case 14:
                          clip = _context.sent;
                        case 15:
                          node = null;
                          if (_this.pool.size() == 0) {
                            node = new Node();
                            node.name = "AudioEffect";
                            node.parent = tgx.AudioMgr.inst.audioMgr;
                            ae = node.addComponent(AudioEffect);
                          } else {
                            node = _this.pool.get();
                            ae = node.getComponent(AudioEffect);
                          }
                          ae.onComplete = function () {
                            _this.put(aeid, url, bundleName); // 播放完回收对象
                            onPlayComplete && onPlayComplete();
                            // console.log(`【音效】回收，池中剩余音效播放器【${this.pool.size()}】`);
                          };

                          // 记录正在播放的音效播放器
                          _this.effects.set(key, ae);
                          ae.volume = _this.volume;
                          ae.clip = clip;
                          ae.play();
                          resolve(aeid);
                        case 23:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }))));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function load(_x, _x2, _x3) {
            return _load.apply(this, arguments);
          }
          return load;
        }()
        /**
         * 回收音效播放器
         * @param aeid          播放器编号
         * @param url           音效路径
         * @param bundleName    资源包名
         */;

        _proto.put = function put(aeid, url, bundleName) {
          if (bundleName === void 0) {
            bundleName = resLoader.defaultBundleName;
          }
          var key;
          if (url instanceof AudioClip) {
            key = url.uuid;
          } else {
            key = bundleName + "_" + url;
          }
          key += "_" + aeid;
          var ae = this.effects.get(key);
          if (ae && ae.clip) {
            this.effects["delete"](key);
            ae.stop();
            this.pool.put(ae.node);
          }
        }

        /**
         * 获取音效播放器
         * @param aeid          播放器编号
         * @param url           音效路径
         * @param bundleName    资源包名
         */;
        _proto.get = function get(aeid, url, bundleName) {
          if (bundleName === void 0) {
            bundleName = resLoader.defaultBundleName;
          }
          var key;
          if (url instanceof AudioClip) {
            key = url.uuid;
          } else {
            key = bundleName + "_" + url;
          }
          key += "_" + aeid;
          var ae = this.effects.get(key);
          if (ae && ae.clip) {
            return ae;
          }
        }

        /** 释放所有音效资源与对象池中播放器 */;
        _proto.release = function release() {
          // 释放正在播放的音效
          this.effects.forEach(function (ae) {
            ae.node.destroy();
          });
          this.effects.clear();

          // 释放音效资源
          this.res.forEach(function (url, bundleName) {
            resLoader.release(bundleName, url);
          });

          // 释放池中播放器
          this.pool.clear();
        }

        /** 停止播放所有音效 */;
        _proto.stop = function stop() {
          this.effects.forEach(function (ae) {
            ae.stop();
          });
        }

        /** 恢复所有音效 */;
        _proto.play = function play() {
          if (!this["switch"]) return;
          this.effects.forEach(function (ae) {
            ae.play();
          });
        }

        /** 暂停所有音效 */;
        _proto.pause = function pause() {
          if (!this["switch"]) return;
          this.effects.forEach(function (ae) {
            ae.pause();
          });
        };
        _createClass(AudioEffectPool, [{
          key: "switch",
          get: /** 音效开关 */
          function get() {
            return this._switch;
          },
          set: function set(value) {
            this._switch = value;
            if (value) this.stop();
          }
        }, {
          key: "volume",
          get: /** 所有音效音量 */
          function get() {
            return this._volume;
          },
          set: function set(value) {
            this._volume = value;
            this.effects.forEach(function (ae) {
              ae.volume = value;
            });
          }
        }]);
        return AudioEffectPool;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioEffectPool.ts', './AudioMusic.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Component, AudioEffectPool, AudioMusic;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      AudioEffectPool = module.AudioEffectPool;
    }, function (module) {
      AudioMusic = module.AudioMusic;
    }],
    execute: function () {
      cclegacy._RF.push({}, "252f0z+vPNL8Y/jsLYmomtw", "AudioManager", undefined);
      var LOCAL_STORE_KEY = "game_audio";

      /**
       * 音频管理
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037893&doc_id=2873565
       * @example
       // 模块功能通过 oops.audio 调用
       oops.audio.playMusic("audios/nocturne");
       */
      var AudioManager = exports('AudioManager', /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);
        function AudioManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 背景音乐管理对象 */
          _this.music = null;
          /** 音效管理对象 */
          _this.effect = new AudioEffectPool();
          /** 音乐管理状态数据 */
          _this.local_data = {};
          return _this;
        }
        var _proto = AudioManager.prototype;
        /**
         * 设置背景音乐播放完成回调
         * @param callback 背景音乐播放完成回调
         */
        _proto.setMusicComplete = function setMusicComplete(callback) {
          if (callback === void 0) {
            callback = null;
          }
          this.music.onComplete = callback;
        }

        /**
         * 播放背景音乐
         * @param url        资源地址
         * @param callback   音乐播放完成事件
         * @param bundleName 资源包名
         */;
        _proto.playMusic = function playMusic(url, callback, bundleName) {
          if (this.music["switch"]) {
            this.music.loop = false;
            this.music.load(url, callback, bundleName).then();
          }
        }

        /** 循环播放背景音乐 */;
        _proto.playMusicLoop = function playMusicLoop(url, bundleName) {
          if (this.music["switch"]) {
            this.music.loop = true;
            this.music.load(url, null, bundleName).then();
          }
        }

        /** 停止背景音乐播放 */;
        _proto.stopMusic = function stopMusic() {
          if (this.music["switch"] && this.music.playing) {
            this.music.stop();
          }
        }

        /**
         * 获取背景音乐播放进度
         */;
        /**
         * 播放音效
         * @param url        资源地址
         * @param bundleName 资源包名
         * @param onPlayComplete 播放完成回调
         */
        _proto.playEffect = function playEffect(url, bundleName, onPlayComplete) {
          return this.effect.load(url, bundleName, onPlayComplete);
        };
        _proto.stopEffect = function stopEffect(aeid, url, bundleName) {
          var au = this.effect.get(aeid, url, bundleName);
          if (au) au.stop();
        }

        /** 回收音效播放器 */;
        _proto.putEffect = function putEffect(aeid, url, bundleName) {
          this.effect.put(aeid, url, bundleName);
        }

        /** 获取音效音量 */;
        /** 恢复当前暂停的音乐与音效播放 */
        _proto.resumeAll = function resumeAll() {
          if (!this.music.playing && this.music.progress > 0) this.music.play();
          this.effect.play();
        }

        /** 暂停当前音乐与音效的播放 */;
        _proto.pauseAll = function pauseAll() {
          if (this.music.playing) this.music.pause();
          this.effect.pause();
        }

        /** 停止当前音乐与音效的播放 */;
        _proto.stopAll = function stopAll() {
          this.music.stop();
          this.effect.stop();
        }

        /**清理音效 */;
        _proto.clearAll = function clearAll() {
          this.music.stop();
          this.effect.stop();
          this.music.release();
          this.effect.release();
        }

        /** 保存音乐音效的音量、开关配置数据到本地 */;
        _proto.save = function save() {
          this.local_data.volume_music = this.music.volume + "";
          this.local_data.volume_effect = this.effect.volume + "";
          this.local_data.switch_music = this.music["switch"] ? "true" : "false";
          this.local_data.switch_effect = this.effect["switch"] ? "true" : "false";
          localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(this.local_data));
        }

        /** 本地加载音乐音效的音量、开关配置数据并设置到游戏中 */;
        _proto.load = function load() {
          this.music = this.getComponent(AudioMusic) || this.addComponent(AudioMusic);
          this.local_data = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
          if (this.local_data) {
            try {
              this.setState();
            } catch (_unused) {
              this.setStateDefault();
            }
          } else {
            this.setStateDefault();
          }
        };
        _proto.setState = function setState() {
          this.music.volume = Number(this.local_data.volume_music);
          this.effect.volume = Number(this.local_data.volume_effect);
          this.music["switch"] = this.local_data.switch_music == "true";
          this.effect["switch"] = this.local_data.switch_effect == "true";
        };
        _proto.setStateDefault = function setStateDefault() {
          this.local_data = {};
          this.music.volume = 1;
          this.effect.volume = 1;
          this.music["switch"] = true;
          this.effect["switch"] = true;
        };
        _createClass(AudioManager, [{
          key: "progressMusic",
          get: function get() {
            return this.music.progress;
          }

          /**
           * 设置背景乐播放进度
           * @param value     播放进度值
           */,
          set: function set(value) {
            this.music.progress = value;
          }

          /**
           * 获取背景音乐音量
           */
        }, {
          key: "volumeMusic",
          get: function get() {
            return this.music.volume;
          }

          /**
           * 设置背景音乐音量
           * @param value     音乐音量值
           */,
          set: function set(value) {
            this.music.volume = value;
          }

          /**
           * 获取背景音乐开关值
           */
        }, {
          key: "switchMusic",
          get: function get() {
            return this.music["switch"];
          }

          /**
           * 设置背景音乐开关值
           * @param value     开关值
           */,
          set: function set(value) {
            this.music["switch"] = value;
          }
        }, {
          key: "volumeEffect",
          get: function get() {
            return this.effect.volume;
          }

          /**
           * 设置获取音效音量
           * @param value     音效音量值
           */,
          set: function set(value) {
            this.effect.volume = value;
          }

          /** 获取音效开关值 */
        }, {
          key: "switchEffect",
          get: function get() {
            return this.effect["switch"];
          }

          /**
           * 设置音效开关值
           * @param value     音效开关值
           */,
          set: function set(value) {
            this.effect["switch"] = value;
          }
        }]);
        return AudioManager;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, Node, director, AudioManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      director = module.director;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d506fCKEkdMY7qkdZWU6ieq", "AudioMgr", undefined);
      /**
       * @en
       * this is a sington class for audio play, can be easily called from anywhere in you project.
       * @zh
       * 这是一个用于播放音频的单件类，可以很方便地在项目的任何地方调用。
       */
      var AudioMgr = exports('AudioMgr', /*#__PURE__*/function () {
        function AudioMgr() {
          this._musicSource = void 0;
          this._soundSource = void 0;
          this._musicVolume = 1.0;
          this._soundVolume = 1.0;
          this.audioMgr = void 0;
          this.audio = void 0;
          // public get audioSource() {
          //     return this._musicSource;
          // }
          // public set musicVolume(v: number) {
          //     this._musicVolume = v;
          //     this._musicSource.volume = this._musicVolume;
          // }
          // public set soundVolume(v: number) {
          //     this._soundVolume = v;
          //     this._soundSource.volume = this.soundVolume;
          // }
          /**背景音开关 */
          this._switchMusic = true;
          /**音效开关 */
          this._switchEffect = true;
          /**总开关 */
          this._switch = true;
          /**背景音量 */
          this._volumeMusic = 1;
          /**音效音量 */
          this._volumeEffect = 1;
          /**总音量 */
          this._volume = 1;
          //@en create a node as audioMgr
          //@zh 创建一个节点作为 audioMgr
          this.audioMgr = new Node();
          this.audioMgr.name = '__audioMgr__';

          //@en add to the scene.
          //@zh 添加节点到场景
          director.getScene().addChild(this.audioMgr);

          //@en make it as a persistent node, so it won't be destroied when scene change.
          //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了
          director.addPersistRootNode(this.audioMgr);

          // //@en use to play background music.
          // //@zh 用于播放背景音乐。
          // let music = new Node();
          // this.audioMgr.addChild(music);
          // this._musicSource = music.addComponent(AudioSource);

          // //@en use to play sound.
          // //@zh 用于播放音效
          // let sound = new Node();
          // this.audioMgr.addChild(sound);
          // this._soundSource = sound.addComponent(AudioSource);
          this.audio = this.audioMgr.addComponent(AudioManager);
          this.audio.load();
        }
        var _proto = AudioMgr.prototype;
        /**同时改变两个音量 */
        _proto.changVolume = function changVolume(volumeMusic, volumeEffect) {
          this.audio.music.volume = volumeMusic;
          this.audio.effect.volume = volumeEffect;
          this.audio.save();
        }
        /**
         * @en
         * play short audio, such as strikes,explosions
         * @zh
         * 播放短音频,比如 打击音效，爆炸音效等
         * @param sound clip or url for the audio
         * @param volume 
         */;
        _proto.playOneShot = /*#__PURE__*/
        function () {
          var _playOneShot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sound, volume, bundleName) {
            var aeid;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (bundleName === void 0) {
                    bundleName = 'resources';
                  }
                  _context.next = 4;
                  return this.audio.playEffect(sound, bundleName);
                case 4:
                  aeid = _context.sent;
                  return _context.abrupt("return", aeid);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playOneShot(_x, _x2, _x3) {
            return _playOneShot.apply(this, arguments);
          }
          return playOneShot;
        }()
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param music AudioClip or url for the music
         * @param volume 
         */;

        _proto.play = function play(music, volume, bundleName) {
          if (bundleName === void 0) {
            bundleName = 'resources';
          }
          // if (music instanceof AudioClip) {
          //     this._musicSource.stop();
          //     this._musicSource.clip = music;
          //     this._musicSource.play();
          //     this._musicSource.volume = this._musicVolume * volume;
          // }
          // else {
          //     let bundle = assetManager.getBundle(bundleName);
          //     bundle.load(music, (err, clip: AudioClip) => {
          //         if (err) {
          //             console.log(err);
          //         }
          //         else {
          //             this._musicSource.stop();
          //             this._musicSource.clip = clip;
          //             this._musicSource.play();
          //             this._musicSource.volume = this._musicVolume * volume;
          //         }
          //     });
          // }
          this.audio.playMusicLoop(music, bundleName);
        }

        /**
         * stop the audio play
         */;
        _proto.stop = function stop() {
          // this._musicSource.stop();
          // this._soundSource.stop();
          this.audio.music.stop();
          this.audio.effect.stop();
        }

        /**
         * pause the audio play
         */;
        _proto.pause = function pause() {
          // this._musicSource.pause();
          // this._soundSource.pause();
          this.audio.music.pause();
          this.audio.effect.pause();
        }

        /**
         * resume the audio play
         */;
        _proto.resume = function resume() {
          // this._musicSource.play();
          // this._soundSource.play();
          this.audio.music.play();
          this.audio.effect.play();
        }

        /**
         * 停止指定音效
         */;
        _proto.stopOneShot = function stopOneShot(aeid, sound, bundleName) {
          if (bundleName === void 0) {
            bundleName = 'resources';
          }
          // this.audio.stopEffect(aeid, sound, bundleName);
          this.audio.putEffect(aeid, sound, bundleName);
        };
        _createClass(AudioMgr, [{
          key: "switchMusic",
          get: function get() {
            return this._switchMusic;
          },
          set: function set(v) {
            if (this._switchMusic != v) {
              if (v == true) {
                this.audio.music.play();
              } else {
                this.audio.music.pause();
              }
            }
            this._switchMusic = v;
            this.audio.switchMusic = v;
            this.audio.save();
          }
        }, {
          key: "switchEffect",
          get: function get() {
            return this._switchEffect;
          },
          set: function set(v) {
            if (this._switchEffect != v) {
              if (v == true) {
                this.audio.effect.play();
              } else {
                this.audio.effect.pause();
              }
            }
            this._switchEffect = v;
            this.audio.switchEffect = v;
            this.audio.save();
          }
        }, {
          key: "switch",
          get: function get() {
            return this._switch;
          },
          set: function set(v) {
            if (this._switch != v) {
              if (v == true) {
                this.resume();
              } else {
                this.pause();
              }
            }
            this._switch = v;
            this.audio.switchMusic = v;
            this.audio.switchEffect = v;
            this.audio.save();
          }
        }, {
          key: "volumeMusic",
          get: function get() {
            return this._volumeMusic;
          },
          set: function set(v) {
            this._volumeMusic = v;
            this.audio.music.volume = v;
            this.audio.save();
          }
        }, {
          key: "volumeEffect",
          get: function get() {
            return this._volumeEffect;
          },
          set: function set(v) {
            this._volumeEffect = v;
            this.audio.effect.volume = v;
            this.audio.save();
          }
        }, {
          key: "volume",
          get: function get() {
            return this._volume;
          },
          set: function set(v) {
            this._volume = v;
            this.audio.music.volume = v;
            this.audio.effect.volume = v;
            this.audio.save();
          }
        }], [{
          key: "inst",
          get: function get() {
            if (this._inst == null) {
              this._inst = new AudioMgr();
            }
            return this._inst;
          }
        }]);
        return AudioMgr;
      }());
      AudioMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMusic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResLoader.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioSource, AudioClip, resLoader;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
    }, function (module) {
      resLoader = module.resLoader;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu;

      /** 
       * 背景音乐 
       * 1、播放一个新背景音乐时，先加载音乐资源，然后停止正在播放的背景资源同时施放当前背景音乐资源，最后播放新的背景音乐
       */
      var AudioMusic = exports('AudioMusic', (_dec = ccclass('AudioMusic'), _dec(_class = /*#__PURE__*/function (_AudioSource) {
        _inheritsLoose(AudioMusic, _AudioSource);
        function AudioMusic() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AudioSource.call.apply(_AudioSource, [this].concat(args)) || this;
          /** 背景音乐开关 */
          _this["switch"] = true;
          /** 背景音乐播放完成回调 */
          _this.onComplete = null;
          _this._progress = 0;
          _this._isLoading = false;
          _this._nextBundleName = null;
          // 下一个音乐资源包
          _this._nextUrl = null;
          return _this;
        }
        var _proto = AudioMusic.prototype;
        // 下一个播放音乐
        _proto.start = function start() {
          // this.node.on(AudioSource.EventType.STARTED, this.onAudioStarted, this);
          this.node.on(AudioSource.EventType.ENDED, this.onAudioEnded, this);
        }

        // private onAudioStarted() { }
        ;

        _proto.onAudioEnded = function onAudioEnded() {
          this.onComplete && this.onComplete();
        }

        /** 获取音乐播放进度 */;
        /**
         * 加载音乐并播放
         * @param url          音乐资源地址
         * @param callback     加载完成回调
         * @param bundleName   资源包名
         */
        _proto.load = /*#__PURE__*/
        function () {
          var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, callback, bundleName) {
            var data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (bundleName === void 0) {
                    bundleName = resLoader.defaultBundleName;
                  }
                  if (!this._isLoading) {
                    _context.next = 5;
                    break;
                  }
                  this._nextBundleName = bundleName;
                  this._nextUrl = url;
                  return _context.abrupt("return");
                case 5:
                  this._isLoading = true;
                  _context.next = 8;
                  return resLoader.loadAsync(bundleName, url, AudioClip);
                case 8:
                  data = _context.sent;
                  if (data) {
                    this._isLoading = false;

                    // 处理等待加载的背景音乐
                    if (this._nextUrl != null) {
                      // 加载等待播放的背景音乐
                      this.load(this._nextUrl, callback, this._nextBundleName);
                      this._nextBundleName = this._nextUrl = null;
                    } else {
                      callback && callback();

                      // 正在播放的时候先关闭
                      if (this.playing) {
                        this.stop();
                      }

                      // 删除当前正在播放的音乐
                      this.release();

                      // 播放背景音乐
                      this.clip = data;
                      this.play();
                    }
                  }
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function load(_x, _x2, _x3) {
            return _load.apply(this, arguments);
          }
          return load;
        }() /** 释放当前背景音乐资源 */;
        _proto.release = function release() {
          if (this.clip) {
            this.stop();
            this.clip.decRef();
            this.clip = null;
          }
        };
        _createClass(AudioMusic, [{
          key: "progress",
          get: function get() {
            if (this.duration > 0) this._progress = this.currentTime / this.duration;
            return this._progress;
          }
          /**
           * 设置音乐当前播放进度
           * @param value     进度百分比0到1之间
           */,
          set: function set(value) {
            this._progress = value;
            this.currentTime = value * this.duration;
          }
        }]);
        return AudioMusic;
      }(AudioSource)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CharacterMovement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EasyController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, v3, Camera, AnimationClip, find, RigidBody, Animation, Collider, Vec3, Component, EasyController, EasyControllerEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Camera = module.Camera;
      AnimationClip = module.AnimationClip;
      find = module.find;
      RigidBody = module.RigidBody;
      Animation = module.Animation;
      Collider = module.Collider;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      EasyController = module.EasyController;
      EasyControllerEvent = module.EasyControllerEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "d197aTs7v1GkpwypdJ1ezJ8", "CharacterMovement", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var v3_1 = v3();
      var CharacterMovement = exports('CharacterMovement', (_dec = ccclass('tgxCharacterMovement'), _dec2 = property(Camera), _dec3 = property(AnimationClip), _dec4 = property(AnimationClip), _dec5 = property(AnimationClip), _dec6 = property(AnimationClip), _dec7 = property(AnimationClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CharacterMovement, _Component);
        function CharacterMovement() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "velocity", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jumpVelocity", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxJumpTimes", _descriptor4, _assertThisInitialized(_this));
          _this._curJumpTimes = 0;
          _initializerDefineProperty(_this, "idleAnimClip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveAnimClip", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jumpBeginAnimClip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jumpLoopAnimClip", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jumpLandAnimClip", _descriptor9, _assertThisInitialized(_this));
          _this._rigidBody = void 0;
          _this._isMoving = false;
          _this._velocityScale = 1.0;
          _this._isInTheAir = false;
          _this._currentVerticalVelocity = 0.0;
          _this._anim = void 0;
          _this._tmp = v3();
          return _this;
        }
        var _proto = CharacterMovement.prototype;
        _proto.start = function start() {
          var _this2 = this;
          if (!this.mainCamera) {
            var _find;
            this.mainCamera = (_find = find('Main Camera')) == null ? void 0 : _find.getComponent(Camera);
          }
          this._rigidBody = this.node.getComponent(RigidBody);
          this._anim = this.node.getComponent(Animation);
          if (this._anim) {
            var clipArr = [this.idleAnimClip, this.moveAnimClip, this.jumpBeginAnimClip, this.jumpLoopAnimClip, this.jumpLandAnimClip];
            for (var i = 0; i < clipArr.length; ++i) {
              var clip = clipArr[i];
              if (clip) {
                if (!this._anim.getState(clip.name)) {
                  this._anim.addClip(clip);
                }
              }
            }
            if (this.idleAnimClip) {
              this._anim.play(this.idleAnimClip.name);
            }
          }
          EasyController.on(EasyControllerEvent.MOVEMENT, this.onMovement, this);
          EasyController.on(EasyControllerEvent.MOVEMENT_STOP, this.onMovementRelease, this);
          EasyController.on(EasyControllerEvent.BUTTON, this.onJump, this);
          var myCollider = this.getComponent(Collider);
          myCollider == null || myCollider.on('onCollisionEnter', function (target) {
            if (target.otherCollider != target.selfCollider) {
              _this2.onLand();
            }
          });
        };
        _proto.onDestroy = function onDestroy() {
          EasyController.off(EasyControllerEvent.MOVEMENT, this.onMovement, this);
          EasyController.off(EasyControllerEvent.MOVEMENT_STOP, this.onMovementRelease, this);
          EasyController.off(EasyControllerEvent.MOVEMENT_STOP, this.onJump, this);
        };
        _proto.update = function update(deltaTime) {
          if (this._isMoving) {
            this._tmp.set(this.node.forward);
            this._tmp.multiplyScalar(-1.0);
            this._tmp.multiplyScalar(this.velocity * this._velocityScale);
            if (this._rigidBody) {
              this._rigidBody.getLinearVelocity(v3_1);
              this._tmp.y = v3_1.y;
              this._rigidBody.setLinearVelocity(this._tmp);
            } else {
              this._tmp.multiplyScalar(deltaTime);
              this._tmp.add(this.node.position);
              this.node.setPosition(this._tmp);
            }
          }
          if (this._isInTheAir) {
            if (this.jumpBeginAnimClip && this._anim) {
              var state = this._anim.getState(this.jumpBeginAnimClip.name);
              if (state.isPlaying && state.current >= state.duration) {
                if (this.jumpLoopAnimClip) {
                  this._anim.crossFade(this.jumpLoopAnimClip.name);
                }
              }
            }
            if (!this._rigidBody) {
              this._currentVerticalVelocity -= 9.8 * deltaTime;
              var oldPos = this.node.position;
              var nextY = oldPos.y + this._currentVerticalVelocity * deltaTime;
              if (nextY <= 0) {
                this.onLand();
                nextY = 0.0;
              }
              this.node.setPosition(oldPos.x, nextY, oldPos.z);
            }
          }
        };
        _proto.onLand = function onLand() {
          this._isInTheAir = false;
          this._currentVerticalVelocity = 0.0;
          this._curJumpTimes = 0;
          if (this.moveAnimClip) {
            if (this._isMoving) {
              this._anim.crossFade(this.moveAnimClip.name, 0.5);
            } else {
              this._anim.crossFade(this.idleAnimClip.name, 0.5);
            }
          }
        };
        _proto.onMovement = function onMovement(degree, offset) {
          var cameraRotationY = 0;
          if (this.mainCamera) {
            cameraRotationY = this.mainCamera.node.eulerAngles.y;
          }
          this._velocityScale = offset;
          //2D界面是 正X 为 0， 3D场景是 正前方为0，所以需要 - 90 度。（顺时针转90度）
          this._tmp.set(0, cameraRotationY + degree - 90 + 180, 0);
          this.node.setRotationFromEuler(this._tmp);
          if (this._anim) {
            if (!this._isMoving && !this._isInTheAir) {
              if (this.moveAnimClip) {
                this._anim.crossFade(this.moveAnimClip.name, 0.1);
              }
            }
            if (this.moveAnimClip) {
              this._anim.getState(this.moveAnimClip.name).speed = this._velocityScale;
            }
          }
          this._isMoving = true;
        };
        _proto.onMovementRelease = function onMovementRelease() {
          if (!this._isInTheAir && this.idleAnimClip) {
            var _this$_anim;
            (_this$_anim = this._anim) == null || _this$_anim.crossFade(this.idleAnimClip.name, 0.5);
          }
          this._isMoving = false;
          if (this._rigidBody) {
            this._rigidBody.setLinearVelocity(Vec3.ZERO);
          }
        };
        _proto.onJump = function onJump(btnName) {
          console.log(btnName);
          if (btnName != 'btn_slot_0') {
            return;
          }
          if (this._curJumpTimes >= this.maxJumpTimes) {
            return;
          }
          if (this._curJumpTimes == 0 || true) {
            if (this.jumpBeginAnimClip) {
              var _this$_anim2;
              (_this$_anim2 = this._anim) == null || _this$_anim2.crossFade(this.jumpBeginAnimClip.name);
            }
          }
          this._curJumpTimes++;
          if (this._rigidBody) {
            this._rigidBody.getLinearVelocity(v3_1);
            v3_1.y = this.jumpVelocity;
            this._rigidBody.setLinearVelocity(v3_1);
          } else {
            this._currentVerticalVelocity = this.jumpVelocity;
          }
          this._isInTheAir = true;
        };
        return CharacterMovement;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "velocity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jumpVelocity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxJumpTimes", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "idleAnimClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moveAnimClip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "jumpBeginAnimClip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "jumpLoopAnimClip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "jumpLandAnimClip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CharacterMovement2D.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EasyController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, v2, Vec2, Component, EasyController, EasyControllerEvent;
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
      v2 = module.v2;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      EasyController = module.EasyController;
      EasyControllerEvent = module.EasyControllerEvent;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6bdfa3YMw1PwobXdjV+aWTX", "CharacterMovement2D", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tempV2 = v2();
      var CharacterMovement2D = exports('CharacterMovement2D', (_dec = ccclass('tgxCharacterMovement2D'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CharacterMovement2D, _Component);
        function CharacterMovement2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "needRotation", _descriptor2, _assertThisInitialized(_this));
          _this._moveFactor = 0;
          _this._moveDir = v2(1, 0);
          _this._rotDegree = 0;
          _this._realDegree = 0;
          _this._precision = 1.0;
          return _this;
        }
        var _proto = CharacterMovement2D.prototype;
        _proto.start = function start() {
          EasyController.on(EasyControllerEvent.MOVEMENT, this.onMovement, this);
          EasyController.on(EasyControllerEvent.MOVEMENT_STOP, this.onMovementStop, this);
        };
        _proto._setDegree = function _setDegree(degree) {
          this._realDegree = degree;
          this._rotDegree = Math.floor(this._realDegree / this._precision) * this._precision;
        };
        _proto.getRealSpeed = function getRealSpeed() {
          return this.moveSpeed * this._moveFactor;
        }

        /**
         * @en 
         * @zh 用于计算真实的移动方向精度。默认为 1.0，网络游戏建议设置为 5.0 到 10.0 之间
        */;
        _proto.setPrecision = function setPrecision(p) {
          if (p < 1) {
            throw Error('precision must be greater than 1');
          }
          this._precision = p;
          this._rotDegree = Math.floor(this._realDegree / this._precision) * this._precision;
        }

        /**
         * @en current moving direction, used for calculating character movement
         * @zh 当前移动方向，用于计算角色移动
        */;
        _proto.onMovement = function onMovement(degree, strengthen) {
          this._setDegree(degree);
          if (this.needRotation) {
            this.node.setRotationFromEuler(0, 0, this._realDegree);
          }
          var angle = this._rotDegree / 180 * Math.PI;
          this._moveDir.set(Math.cos(angle), Math.sin(angle));
          this._moveDir.normalize();
          this._moveFactor = strengthen;
        };
        _proto.onMovementStop = function onMovementStop() {
          this._moveFactor = 0;
        };
        _proto.onDestroy = function onDestroy() {
          EasyController.off(EasyControllerEvent.MOVEMENT, this.onMovement, this);
          EasyController.off(EasyControllerEvent.MOVEMENT_STOP, this.onMovementStop, this);
        };
        _proto.update = function update(deltaTime) {
          if (this._moveFactor) {
            Vec2.multiplyScalar(tempV2, this._moveDir, this.getRealSpeed() * deltaTime);
            var pos = this.node.position;
            this.node.setPosition(pos.x + tempV2.x, pos.y + tempV2.y, pos.z);
          }
        };
        _createClass(CharacterMovement2D, [{
          key: "moveDir",
          get: function get() {
            return this._moveDir;
          }
        }, {
          key: "rotDegree",
          get: function get() {
            return this._rotDegree;
          }

          /**
           * @en current joystick direction, usually not used for calculating movement, used for setting character appearance
           * @zh 真实的摇杆方向，通常不用于逻辑，用于设置角色表现效果
          */
        }, {
          key: "realDegree",
          get: function get() {
            return this._realDegree;
          }
        }]);
        return CharacterMovement2D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "needRotation", [property], {
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

System.register("chunks:///_virtual/DoubleList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "63d59pJTUFM04UKvbFs7rgg", "DoubleList", undefined);
      var DoubleList = exports('DoubleList', /*#__PURE__*/function () {
        function DoubleList() {
          this.head = null;
          this.tail = null;
        }
        var _proto = DoubleList.prototype;
        _proto.addToTail = function addToTail(data) {
          var item = DoubleListItem.getFromPool(data, 'dont_call_this_function_by_your_self');
          this.addItemToTail(item);
          return item;
        };
        _proto.insertToHead = function insertToHead(data) {
          var item = DoubleListItem.getFromPool(data, 'dont_call_this_function_by_your_self');
          this.insertItemToHead(item);
          return item;
        };
        _proto.addItemToTail = function addItemToTail(item) {
          if (!item) {
            return;
          }
          if (item.isLinked) {
            throw Error('item must be unlinked.');
          }
          if (this.head == null) {
            this.head = this.tail = item;
            item.owner = this;
            item.pre = null;
            item.next = null;
            return;
          }
          if (!this.tail) {
            throw Error('tail can not be nil');
          }
          this.tail.next = item;
          item.pre = this.tail;
          this.tail = item;
          item.owner = this;
        };
        _proto.insertItemToHead = function insertItemToHead(item) {
          if (!item) {
            return;
          }
          if (item.isLinked) {
            throw Error('item must be unlinked.');
          }
          if (this.head == null) {
            this.head = this.tail = item;
            item.owner = this;
            item.pre = null;
            item.next = null;
            return;
          }
          this.head.pre = item;
          item.next = this.head;
          item.owner = this;
          this.head = item;
        };
        _proto.forEach = function forEach(cb) {
          if (!cb) {
            return;
          }
          var cur = this.head;
          while (cur) {
            var next = cur.next;
            var needBreak = cb(cur);
            if (needBreak) {
              return;
            }
            cur = next;
          }
        };
        _proto.clear = function clear() {
          this.forEach(function (v) {
            v.dispose();
          });
        };
        _createClass(DoubleList, [{
          key: "isEmpty",
          get: function get() {
            return this.head == null;
          }
        }]);
        return DoubleList;
      }());
      var DoubleListItem = exports('DoubleListItem', /*#__PURE__*/function () {
        DoubleListItem.getFromPool = function getFromPool(data, args) {
          var item = this._itemPool.tail;
          if (item) {
            item.removeSelf();
            item.data = data;
            return item;
          }
          return new DoubleListItem(data, 'dont_call_this_function_by_your_self');
        };
        DoubleListItem.putBackToPool = function putBackToPool(item, args) {
          item.removeSelf();
          this._itemPool.addItemToTail(item);
        };
        function DoubleListItem(data, args) {
          this.owner = null;
          this.pre = null;
          this.next = null;
          this.data = null;
          this.data = data;
        }
        var _proto2 = DoubleListItem.prototype;
        _proto2.dispose = function dispose() {
          DoubleListItem.putBackToPool(this, 'dont_call_this_function_by_your_self');
        };
        _proto2.removeSelf = function removeSelf() {
          if (!this.owner) {
            return;
          }
          if (this.owner.head == this) {
            this.owner.head = this.next;
          }
          if (this.owner.tail == this) {
            this.owner.tail = this.pre;
          }
          if (this.pre) {
            this.pre.next = this.next;
          }
          if (this.next) {
            this.next.pre = this.pre;
          }
          this.owner = null;
          this.pre = null;
          this.next = null;
        };
        _createClass(DoubleListItem, [{
          key: "isLinked",
          get: function get() {
            return this.owner != null;
          }
        }]);
        return DoubleListItem;
      }());
      DoubleListItem._itemPool = new DoubleList();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EasyController.ts", ['cc'], function (exports) {
  var cclegacy, director;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cc933ijiadBG47GZ61xXA52", "EasyController", undefined);
      var EasyControllerEvent = exports('EasyControllerEvent', function EasyControllerEvent() {});
      /**
      * Dispatched when camera rotating
      * @params rx: horizontal rotation
      * @params ry: vertical rotation.
      */
      EasyControllerEvent.CAMERA_ROTATE = 'EasyControllerEvent.CAMERA_ROTATE';
      /**
       * Dispatched when camera zooming
       * @params delta: amount of camera zoom
      */
      EasyControllerEvent.CAMERA_ZOOM = 'EasyControllerEvent.CAMERA_ZOOM';
      /**
       * Dispatched when the movement controller is moving
       * @param degree: direction in degrees, with positive X-axis as 0, increasing in a counter-clockwise direction.
       * @param strength: movement strength, [0.0, 1.0], can be used for fine-tuning the movement speed.
       */
      EasyControllerEvent.MOVEMENT = 'EasyControllerEvent.MOVEMENT';
      /**
       * Dispatched when the movement controller stops moving
       */
      EasyControllerEvent.MOVEMENT_STOP = 'EasyControllerEvent.MOVEMENT_STOP';
      /**
       * Dispatched when one of the buttons is pressed.
       * @param buttonName: string, indicates which button is pressed. 
       */
      EasyControllerEvent.BUTTON = 'EasyControllerEvent.BUTTON';
      /**
       * Dispatched when screen is touched.
       */
      EasyControllerEvent.SCREEN_TOUCH_START = 'EasyControllerEvent.SCREEN_TOUCH_START';
      /**
       * Dispatched when screen is touched end.
       */
      EasyControllerEvent.SCREEN_TOUCH_END = 'EasyControllerEvent.SCREEN_TOUCH_END';
      var EasyController = exports('EasyController', /*#__PURE__*/function () {
        function EasyController() {}
        EasyController.on = function on(type, callback, target) {
          director.on(type, callback, target);
        };
        EasyController.off = function off(type, callback, target) {
          director.off(type, callback, target);
        };
        return EasyController;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnvMgr.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1f41a0D38xLAZpvcmj8plp6", "EnvMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //环境定义模块
      var EnvMgr = exports('EnvMgr', function EnvMgr() {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventDispatcher.ts", ['cc', './DoubleList.ts'], function (exports) {
  var cclegacy, DoubleList;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DoubleList = module.DoubleList;
    }],
    execute: function () {
      cclegacy._RF.push({}, "67acc++wNVNULP/OUgeuOW4", "EventDispatcher", undefined);

      /**
       * @en the classes inherit from class:EventDispatcher will have the ability to dispatch events.
       * @zh 事件派发器，继承自EventDispatcher的类将拥有事件派发能力
       * 
       *  */
      var EventDispatcher = exports('EventDispatcher', /*#__PURE__*/function () {
        function EventDispatcher() {
          this._handlersMap = {};
        }
        var _proto = EventDispatcher.prototype;
        _proto.on = function on(event, cb, thisArg, args, once) {
          if (!event || !cb) {
            return;
          }
          var handlers = this._handlersMap[event];
          if (!handlers) {
            handlers = this._handlersMap[event] = new DoubleList();
          }
          handlers.addToTail({
            event: event,
            cb: cb,
            thisArg: thisArg,
            once: once,
            args: args
          });
        };
        _proto.once = function once(event, cb, thisArg, args) {
          this.on(event, cb, thisArg, args, true);
        };
        _proto.off = function off(event, cb, thisArg, once) {
          var handlers = this._handlersMap[event];
          if (!handlers) {
            return;
          }
          handlers.forEach(function (v) {
            var h = v.data;
            if (h.cb == cb && h.thisArg == thisArg && h.once == once) {
              v.dispose();
              return true;
            }
          });
        };
        _proto.clearAll = function clearAll(event) {
          if (event) {
            var handlers = this._handlersMap[event];
            handlers == null || handlers.clear();
            delete this._handlersMap[event];
          } else {
            for (var k in this._handlersMap) {
              var _handlers = this._handlersMap[k];
              _handlers == null || _handlers.clear();
            }
            this._handlersMap = {};
          }
        };
        _proto.emit = function emit(event, arg0, arg1, arg2, arg3, arg4) {
          var handlers = this._handlersMap[event];
          if (!handlers || handlers.isEmpty) {
            return;
          }
          var args = [arg0, arg1, arg2, arg3, arg4];
          handlers.forEach(function (v) {
            var h = v.data;
            if (h.event == event) {
              h.cb.apply(h.thisArg, args);
            }
          });
        };
        return EventDispatcher;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ExtendButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, ccenum, SpriteFrame, Sprite, Button, tween, Vec3, color;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Button = module.Button;
      tween = module.tween;
      Vec3 = module.Vec3;
      color = module.color;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "8bf85JA/4RGOanuG9bnW0pi", "ExtendButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EButtonType = /*#__PURE__*/function (EButtonType) {
        EButtonType[EButtonType["DARK"] = 0] = "DARK";
        EButtonType[EButtonType["GRAY"] = 1] = "GRAY";
        return EButtonType;
      }(EButtonType || {});
      ccenum(EButtonType);

      /**
       * 扩展按钮
       */
      var ExtendButton = exports('ExtendButton', (_dec = ccclass('ExtendButton'), _dec2 = menu('扩展类/UI/扩展按钮'), _dec3 = property({
        type: EButtonType,
        displayName: "禁用类型"
      }), _dec4 = property({
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
      }), _dec7 = property({
        tooltip: '是否用此节点更换图',
        visible: function visible() {
          return this.isToggle;
        }
      }), _dec8 = property({
        type: Sprite,
        tooltip: '要换图的节点',
        visible: function visible() {
          return !this.isSelfNode;
        }
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Button) {
        _inheritsLoose(ExtendButton, _Button);
        function ExtendButton() {
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
          _initializerDefineProperty(_this, "isSelfNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfSprite", _descriptor7, _assertThisInitialized(_this));
          _this._st = void 0;
          return _this;
        }
        var _proto = ExtendButton.prototype;
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
              if (!_this2.isSelfNode) _this2.selfSprite.spriteFrame = _this2.isChecked ? _this2.toggleFrames[0] : _this2.toggleFrames[1];else _this2._st.spriteFrame = _this2.isChecked ? _this2.toggleFrames[0] : _this2.toggleFrames[1];
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
        _createClass(ExtendButton, [{
          key: "isChecked",
          get: function get() {
            return this._isChecked;
          },
          set: function set(v) {
            this._isChecked = v;
            if (!this.isSelfNode) this.selfSprite.spriteFrame = this.isChecked ? this.toggleFrames[0] : this.toggleFrames[1];else this.node.getComponent(Sprite).spriteFrame = this.isChecked ? this.toggleFrames[0] : this.toggleFrames[1];
          }
        }, {
          key: "interactable",
          get: function get() {
            return this._interactable;
          },
          set: function set(v) {
            if (!this._st) this._st = this.node.getComponent(Sprite);
            if (this._st) {
              if (this.interactableType == EButtonType.DARK) {
                var c = v ? 255 : this.dark;
                this._st.color = color(c, c, c, 255);
              }
              if (this.interactableType == EButtonType.GRAY) {
                this._st.grayscale = !v;
              }
            }
            this._interactable = v;
          }
        }]);
        return ExtendButton;
      }(Button), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "interactableType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EButtonType.DARK;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dark", [property], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isSelfNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "selfSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FollowCamera2D.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, v3, Node, Camera, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Node = module.Node;
      Camera = module.Camera;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "901c88RzPNC+KzYY4c1byNp", "FollowCamera2D", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tmpV3 = v3();
      var FollowCamera2D = exports('FollowCamera2D', (_dec = ccclass('tgxFollowCamera2D'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FollowCamera2D, _Component);
        function FollowCamera2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "offset", _descriptor2, _assertThisInitialized(_this));
          _this._camera = void 0;
          return _this;
        }
        var _proto = FollowCamera2D.prototype;
        _proto.start = function start() {
          this._camera = this.node.getComponent(Camera);
        };
        _proto.lateUpdate = function lateUpdate(deltaTime) {
          this.target.getWorldPosition(tmpV3);
          tmpV3.add(this.offset);
          this.node.worldPosition = tmpV3;
        };
        return FollowCamera2D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FPSCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "35e79Dy4FRKopwoxbqfPUBI", "FPSCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FPSCamera = exports('FPSCamera', (_dec = ccclass('tgxFPSCamera'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FPSCamera, _Component);
        function FPSCamera() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = FPSCamera.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return FPSCamera;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Vec3, Quat, input, Input, game, KeyCode, v2, Component;
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
      Quat = module.Quat;
      input = module.input;
      Input = module.Input;
      game = module.game;
      KeyCode = module.KeyCode;
      v2 = module.v2;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "9cfdbEnosdDcIV51/qKNoBS", "FreeCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var v2_1 = new Vec2();
      var v2_2 = new Vec2();
      var v3_1 = new Vec3();
      var qt_1 = new Quat();
      var forward = new Vec3();
      var right = new Vec3();
      var FreeCamera = exports('FreeCamera', (_dec = ccclass('tgxFreeCamera'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FreeCamera, _Component);
        function FreeCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));
          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          _this._eulerP = new Vec3();
          _this.keys = [];
          // x  -1 left, +1 right   y -1 backword, +1 forward
          _this.moveDir = new Vec3();
          _this.key2dirMap = null;
          return _this;
        }
        var _proto = FreeCamera.prototype;
        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.getPosition());
          Vec3.copy(this._eulerP, this.node.eulerAngles);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.update = function update(dt) {
          var t = Math.min(dt / this.damp, 1);
          // position
          Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
          Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
          this.node.setPosition(v3_1);
          if (this.moveDir.lengthSqr()) {
            Vec3.transformQuat(forward, Vec3.FORWARD, this.node.rotation);
            forward.normalize();
            Vec3.cross(right, forward, Vec3.UP);
            right.normalize();
            Vec3.scaleAndAdd(this._position, this._position, forward, this.moveSpeed * this._speedScale * this.moveDir.z);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);
            Vec3.scaleAndAdd(this._position, this._position, right, this.moveSpeed * this._speedScale * this.moveDir.x);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);
            Vec3.scaleAndAdd(this._position, this._position, Vec3.UP, this.moveSpeed * this._speedScale * this.moveDir.y);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);
          }

          // rotation
          Quat.fromEuler(qt_1, this._eulerP.x, this._eulerP.y, this._eulerP.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.setWorldRotationFromEuler(this._eulerP.x, this._eulerP.y, this._eulerP.z);
        };
        _proto.onMouseWheel = function onMouseWheel(e) {
          var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down
          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        };
        _proto.onTouchStart = function onTouchStart(e) {
          if (game.canvas.requestPointerLock) {
            game.canvas.requestPointerLock();
          }
        };
        _proto.onTouchMove = function onTouchMove(e) {
          e.getStartLocation(v2_1);
          if (v2_1.x > game.canvas.width * 0.4) {
            // rotation
            e.getDelta(v2_2);
            this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          } else {
            // position
            e.getDelta(v2_2);
            this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (document.exitPointerLock) {
            document.exitPointerLock();
          }
          e.getStartLocation(v2_1);
          if (v2_1.x < game.canvas.width * 0.4) {
            // position
            this._velocity.x = 0;
            this._velocity.z = 0;
          }
        };
        _proto.onKeyDown = function onKeyDown(event) {
          var keyCode = event.keyCode;
          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this.keys.indexOf(keyCode) == -1) {
              this.keys.push(keyCode);
              this.updateDirection();
            }
          }
          if (keyCode == KeyCode.KEY_Q) {
            this.moveDir.y = -1;
          } else if (keyCode == KeyCode.KEY_E) {
            this.moveDir.y = 1;
          }
        };
        _proto.onKeyUp = function onKeyUp(event) {
          var keyCode = event.keyCode;
          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            var index = this.keys.indexOf(keyCode);
            if (index != -1) {
              this.keys.splice(index, 1);
              this.updateDirection();
            }
          }
          if (keyCode == KeyCode.KEY_Q || keyCode == KeyCode.KEY_E) {
            this.moveDir.y = 0;
          }
        };
        _proto.updateDirection = function updateDirection() {
          if (this.key2dirMap == null) {
            this.key2dirMap = {};
            this.key2dirMap[0] = v2(0, 0);
            this.key2dirMap[KeyCode.KEY_A] = v2(-1, 0);
            this.key2dirMap[KeyCode.KEY_D] = v2(1, 0);
            this.key2dirMap[KeyCode.KEY_W] = v2(0, 1);
            this.key2dirMap[KeyCode.KEY_S] = v2(0, -1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_A] = v2(-1, 1);
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_D] = v2(1, 1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_A] = v2(-1, -1);
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_D] = v2(1, -1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_D] = this.key2dirMap[KeyCode.KEY_D];
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_A] = this.key2dirMap[KeyCode.KEY_A];
            this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S];
            this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W];
          }
          var keyCode0 = this.keys[this.keys.length - 1] || 0;
          var keyCode1 = this.keys[this.keys.length - 2] || 0;
          var dir = this.key2dirMap[keyCode1 * 1000 + keyCode0];
          this.moveDir.x = dir.x;
          this.moveDir.z = dir.y;
        };
        return FreeCamera;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FullScreenBgAutoFit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Canvas, size, UITransform, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Canvas = module.Canvas;
      size = module.size;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "319759POytNIqL7hZiZjOI8", "FullScreenBgAutoFit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CHECK_INTERVAL = 0.1;
      var FullScreenBgAutoFit = exports('FullScreenBgAutoFit', (_dec = ccclass('FullScreenBgAutoFit'), _dec2 = property(Canvas), _dec3 = property({
        tooltip: '是否选择缩放，而不是改宽高'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FullScreenBgAutoFit, _Component);
        function FullScreenBgAutoFit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "canvasUITrans", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "setNodeScale", _descriptor2, _assertThisInitialized(_this));
          _this._oldSize = size();
          _this._originalSize = void 0;
          _this._uiTransform = void 0;
          _this._sprite = void 0;
          _this.lastCheckTime = 0;
          return _this;
        }
        var _proto = FullScreenBgAutoFit.prototype;
        _proto.start = function start() {
          this._uiTransform = this.getComponent(UITransform);
          this._sprite = this.getComponent(Sprite);
          if (!this._uiTransform) {
            return;
          }
          if (this.setNodeScale) {
            this._originalSize = size(this._uiTransform.width, this._uiTransform.height);
          } else {
            if (!this._sprite) {
              return;
            }
            this._originalSize = this._sprite.spriteFrame.originalSize;
            this._sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          }
          if (!this.canvasUITrans) {
            var parent = this.node.parent;
            while (parent) {
              var canvas = parent.getComponent(Canvas);
              if (canvas) {
                this.canvasUITrans = canvas.getComponent(UITransform);
                break;
              }
              parent = parent.parent;
            }
          }
          this.adjustResolutionPolicy();
        };
        _proto.lateUpdate = function lateUpdate(deltaTime) {
          this.lastCheckTime += deltaTime;
          if (this.lastCheckTime < CHECK_INTERVAL) {
            return;
          }
          this.lastCheckTime = 0;
          this.adjustResolutionPolicy();
        };
        _proto.adjustResolutionPolicy = function adjustResolutionPolicy() {
          var winSize = this.canvasUITrans.contentSize;
          if (!this._oldSize.equals(winSize)) {
            var ratio = winSize.width / winSize.height;
            var imgW2H = this._originalSize.width / this._originalSize.height;
            if (ratio > imgW2H) {
              //wider than desgin.
              this._uiTransform.width = winSize.width;
              this._uiTransform.height = winSize.width / imgW2H;
            } else {
              //higher than desgin.
              this._uiTransform.width = winSize.height * imgW2H;
              this._uiTransform.height = winSize.height;
            }
            if (this.setNodeScale) {
              this.node.setScale(this._uiTransform.width / this._originalSize.width, this._uiTransform.height / this._originalSize.height);
            }
            this._oldSize.set(winSize);
          }
        };
        return FullScreenBgAutoFit;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvasUITrans", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "setNodeScale", [_dec3], {
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

System.register("chunks:///_virtual/Fun.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('Fun', void 0);
      cclegacy._RF.push({}, "7973bXyg7RDmoaZw1X1OoiI", "Fun", undefined);
      //函数类型定义
      var Fun;
      (function (_Fun) {
        //没有参数和返回值的回调函数
        //有1个参数没有返回值的回调函数
        //有2个参数没有返回值的回调函数
        //有一个参数，且参数是number类型
        //有2个参数，第1个是number类型，第2个是Prefab类型。没有返回值
        //有1个node参数，没有返回值的回调
        //有1个number参数，number返回值的函数
        //有1个number参数，cc.Node返回值的函数
        //有2个number参数,1个any参数,没有返回值的函数
        //格子
        var TypeCell = function TypeCell() {
          this.type = void 0;
          //格子类型
          this.index = void 0;
          //第几个格子，从0开始
          this.item = void 0;
        } //格子
        ;

        _Fun.TypeCell = TypeCell; //有1个number参数，TypeCell返回值的函数
      })(Fun || (Fun = exports('Fun', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConst.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e1cc9x2Jv9O6IbrJTBbH63m", "GameConst", undefined);
      var GameConst = exports('GameConst', function GameConst() {});
      //为了方便在控制台输入
      //内网测试地址
      /*
      public static hotUpdate_packageUrl: string = "http://192.168.5.103/game/assets/";//
      public static hotUpdate_manifestUrl: string = "http://192.168.5.103/game/assets/assets/bundle/{0}/project.manifest";
      public static hotUpdate_versionUrl: string = "http://192.168.5.103/game/assets/assets/bundle/{0}/version.manifest";
      */
      //外网地址
      GameConst.hotUpdate_packageUrl = "http://8.216.89.33:8000/assets/";
      //
      GameConst.hotUpdate_manifestUrl = "http://8.216.89.33:8000/assets/assets/bundle/{0}/project.manifest";
      GameConst.hotUpdate_versionUrl = "http://8.216.89.33:8000/assets/assets/bundle/{0}/version.manifest";
      GameConst.hotUpdate_Open = false;
      //热更新是否开启
      //是否开启web的竖屏展示，web版查看竖屏效果使用
      GameConst.isShowWebPortrait = false;
      /**是否开启网络请求log */
      GameConst.openNetworkLog = false;
      GameConst.defaultLanguage = sys.Language.CHINESE;
      /**
       * 当前地区包
       */
      GameConst.curArea = "china";
      window["GameConst"] = GameConst;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUILayers.ts", ['cc'], function (exports) {
  var cclegacy, Label;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a77a1B4SKRKLLPJCc2S/oq0", "GameUILayers", undefined);
      var GameUILayers = exports('GameUILayers', /*#__PURE__*/function (GameUILayers) {
        GameUILayers[GameUILayers["GAME"] = 0] = "GAME";
        GameUILayers[GameUILayers["JOY_STICK"] = 1] = "JOY_STICK";
        GameUILayers[GameUILayers["HUD"] = 2] = "HUD";
        GameUILayers[GameUILayers["POPUP"] = 3] = "POPUP";
        GameUILayers[GameUILayers["POPUP1"] = 4] = "POPUP1";
        GameUILayers[GameUILayers["POPUP2"] = 5] = "POPUP2";
        GameUILayers[GameUILayers["ALERT"] = 6] = "ALERT";
        GameUILayers[GameUILayers["NOTICE"] = 7] = "NOTICE";
        GameUILayers[GameUILayers["LOADING"] = 8] = "LOADING";
        GameUILayers[GameUILayers["OVERLAY"] = 9] = "OVERLAY";
        GameUILayers[GameUILayers["NUM"] = 10] = "NUM";
        return GameUILayers;
      }(GameUILayers || {}));
      var GameUILayerNames = exports('GameUILayerNames', ['game', 'joy_stick', 'hud', 'popup', 'popup1', 'popup2', 'alert', 'notice', 'loading', 'overlay']);

      // 重写 Label 的 updateRenderer 方法输出详细错误
      var originalUpdateRenderer = Label.prototype.updateRenderer;
      Label.prototype.updateRenderer = function () {
        try {
          // 打印当前 Label 的关键信息
          // console.log(
          //     'Updating Label:',
          //     this.node.name,               // 节点名称
          //     this.string,                   // 文本内容
          //     this.font?.name || 'No Font',  // 字体名称
          //     this.node.getPathInHierarchy() // 节点在场景树中的路径
          // );
          originalUpdateRenderer.call(this);
        } catch (e) {
          console.error('Error in Label:', this.node.name, e);
          throw e;
        }
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUtil.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "394ed3stzlNuaqSJ3dRf1Nj", "GameUtil", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BETNUM = [0.03, 0.1, 0.3, 0.9]; //单注值
      var LINES = 10; //线数
      var BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //下注倍数
      /**
       * 游戏公用方法
       */
      var GameUtil = exports('GameUtil', (_dec = ccclass('GameUtil'), _dec(_class = /*#__PURE__*/function () {
        function GameUtil() {}
        /**
         * 获取下注区间
         * @param numList 单注值 
         * @param betList 下注倍数
         * @param line 线数
         */
        GameUtil.GetBetRange = function GetBetRange(numList, betList, line) {
          numList = numList ? numList : BETNUM;
          betList = betList ? betList : BET;
          line = line ? line : LINES;
          //动态计算第三列的值
          var list = [];
          for (var i = 0; i < numList.length; i++) {
            for (var j = 0; j < betList.length; j++) {
              list.push(Math.round(numList[i] * betList[j] * line * 100) / 100);
            }
          }
          var sumList = Array.from(new Set(list));
          sumList.sort(function (a, b) {
            return a - b;
          });
          return sumList;
        };
        return GameUtil;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HotUpateData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3c341pnEe1OzYLc4gBK/buZ", "HotUpateData", undefined);
      var HotUpateData = exports('HotUpateData', function HotUpateData() {
        this.name = void 0;
        this.packageurl = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HotUpdate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HotUpdateEvent.ts', './HotUpdateCtrl.ts', './GameConst.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, game, director, Component, HotUpdateEvent, HotUpdateCtrl;
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
      game = module.game;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      HotUpdateEvent = module.HotUpdateEvent;
    }, function (module) {
      HotUpdateCtrl = module.HotUpdateCtrl;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b71dbyt8j5IKJW3G5BJLgMY", "HotUpdate", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Start = exports('Start', (_dec = ccclass('HotUpdate'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Start, _Component);
        function Start() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txtLoading", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingBar", _descriptor2, _assertThisInitialized(_this));
          _this.hotupdateCtrl = null;
          return _this;
        }
        var _proto = Start.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._enterHall();
                  return _context.abrupt("return");
                case 3:
                  this.loadingBar.setScale(0, 1, 1);
                  director.on(HotUpdateEvent.HotUpdateRate, this.onHotUpdateRate, this);
                  director.on(HotUpdateEvent.HotUpdateFinish, this.onHotUpdateFinish, this);
                  director.on(HotUpdateEvent.CheckVersionResult, this.onCheckVersionResult, this);
                  this.hotupdateCtrl = new HotUpdateCtrl();
                  _context.next = 10;
                  return this.hotupdateCtrl.init("main");
                case 10:
                  this.hotupdateCtrl.checkUpdate();
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }()
        /**
         * 热更新版本检查结果
         */;

        _proto.onCheckVersionResult = function onCheckVersionResult(name, newVersionFoud) {
          console.log("CheckVersionResult: " + name + ", " + newVersionFoud);
          if (newVersionFoud) {
            this.hotupdateCtrl && this.hotupdateCtrl.hotUpdate();
          } else {
            this._enterHall();
          }
        }

        /**
         * 热更进度回调
         */;
        _proto.onHotUpdateRate = function onHotUpdateRate(name, rate) {
          this.txtLoading.string = Math.floor(rate * 100) + "%";
          this.loadingBar.setScale(rate, 1, 1);
        }

        /**
         * 更新完成
         */;
        _proto.onHotUpdateFinish = function onHotUpdateFinish(name, success) {
          if (success) {
            console.log("========onHotUpdateSuccess======", name);
            setTimeout(function () {
              game.restart();
            }, 200);
          } else {
            // 热更失败
            // this._enterHall()
            console.log("========onHotUpdateFail======");
          }
        };
        _proto.update = function update(deltaTime) {};
        _proto._enterHall = function _enterHall() {
          console.log("enterGame");
          if (this.hotupdateCtrl) {
            //存储主包的版本号
            var version = this.hotupdateCtrl.getLocalManifestVersion();
            console.log("mainVersion:", version);
            HotUpdateCtrl.mainVersion = version;
          }
          director.loadScene("start");
        };
        _proto.onDestroy = function onDestroy() {
          director.targetOff(this);
          this.hotupdateCtrl && this.hotupdateCtrl.destory();
          director.on(HotUpdateEvent.HotUpdateRate, this.onHotUpdateRate, this);
          director.on(HotUpdateEvent.HotUpdateFinish, this.onHotUpdateFinish, this);
          director.on(HotUpdateEvent.CheckVersionResult, this.onCheckVersionResult, this);
        };
        return Start;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HotUpdateCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HotUpdateEvent.ts', './HotUpateData.ts', './GameConst.ts', './Str.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, native, director, sys, HotUpdateEvent, HotUpateData, GameConst, Str;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      native = module.native;
      director = module.director;
      sys = module.sys;
    }, function (module) {
      HotUpdateEvent = module.HotUpdateEvent;
    }, function (module) {
      HotUpateData = module.HotUpateData;
    }, function (module) {
      GameConst = module.GameConst;
    }, function (module) {
      Str = module.Str;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ca103Gc+WNFJrPZO8nq8pzb", "HotUpdateCtrl", undefined);
      var HotUpdateCtrl = exports('HotUpdateCtrl', /*#__PURE__*/function () {
        function HotUpdateCtrl() {
          this._name = "";
          /**
           * 更新中
           */
          this._updating = false;
          /** 
           * 是否可以重试
           */
          this._canRetry = false;
          /** 
           * 热更新存储路径
           */
          this._storagePath = "";
          /**
           * 热更资源管理器
           */
          this._am = null;
          /**
           * 更新失败数量
           */
          this._failCount = 0;
          this.inited = false;
        }
        var _proto = HotUpdateCtrl.prototype;
        _proto.log = function log() {
          var _console;
          for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
          }
          (_console = console).log.apply(_console, ["[HotUpdate]"].concat(arg));
        };
        _proto.isSettSearchPaths = /*#__PURE__*/function () {
          var _isSettSearchPaths = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var searchPaths, newPaths, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", false);
                case 2:
                  searchPaths = native.fileUtils.getSearchPaths();
                  newPaths = this._am.getLocalManifest().getSearchPaths();
                  for (i = 0; i < newPaths.length; i++) {
                    if (searchPaths.indexOf(newPaths[i]) == -1) {
                      Array.prototype.unshift.apply(searchPaths, [newPaths[i]]);
                    }
                  }
                  sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
                  native.fileUtils.setSearchPaths(searchPaths);
                  this.log("-----------set search path-----------", JSON.stringify(searchPaths));
                  return _context.abrupt("return", true);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function isSettSearchPaths() {
            return _isSettSearchPaths.apply(this, arguments);
          }
          return isSettSearchPaths;
        }()
        /**
         * 初始化
         */;

        _proto.init = /*#__PURE__*/
        function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name) {
            var _this = this;
            var manifestUrl, localmanifest, versionCompareHandle;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return");
                case 2:
                  if (!this.inited) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return");
                case 4:
                  this._name = name;
                  this._storagePath = native.fileUtils.getWritablePath() + "game-remote-asset/" + this._name;
                  this.log("init name:", name);
                  this.log("init storagePath:", this._storagePath);
                  manifestUrl = 'assets/bundle/' + this._name + '/project.manifest';
                  _context2.next = 11;
                  return this.loadLocalManifest(manifestUrl);
                case 11:
                  localmanifest = _context2.sent;
                  manifestUrl = localmanifest.packageurl;
                  versionCompareHandle = function versionCompareHandle(localVersionName, remoteVersionName) {
                    _this.log("JS Custom Version Compare: version A is " + localVersionName + ', version B is ' + remoteVersionName);
                    var vA = localVersionName.split(".");
                    var vB = remoteVersionName.split(".");
                    for (var i = 0; i < vA.length; ++i) {
                      var a = parseInt(vA[i]);
                      var b = parseInt(vB[i] || "0");
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
                  this.log("localmanifest " + manifestUrl);
                  this.log("this._storagePath: " + this._storagePath);
                  this._am = new native.AssetsManager(manifestUrl, this._storagePath, versionCompareHandle);
                  this._am.setVerifyCallback(function (path, asset) {
                    var compressed = asset.compressed;
                    // 检索正确的md5值。
                    var expectedMD5 = asset.md5;
                    // asset.path 为相对路径，path为绝对路径。
                    var relativePath = asset.path;
                    // 资源文件的大小，但这个值可能不存在。
                    if (compressed) {
                      _this.log("hotupdate verify " + relativePath);
                      return true;
                    } else {
                      _this.log("hotupdate verify " + relativePath + " " + expectedMD5);
                      return true;
                    }
                  });
                  this._am.setMaxConcurrentTask(2);
                  this.log("-----------current version-----------", this._name, this._am.getLocalManifest().getVersion());
                  this.inited = true;
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function init(_x) {
            return _init.apply(this, arguments);
          }
          return init;
        }() /**获取远端版本号 */;
        _proto.getReteManifestVersion = function getReteManifestVersion() {
          if (!this._am) {
            return 0;
          }
          var remoteManifest = this._am.getRemoteManifest();
          if (!remoteManifest) {
            return 0;
          }
          return parseInt(remoteManifest.getVersion());
        }
        /**获取本地版本号 */;
        _proto.getLocalManifestVersion = function getLocalManifestVersion() {
          if (!this._am) {
            return 0;
          }
          var localManifest = this._am.getLocalManifest();
          if (!localManifest) {
            return 0;
          }
          return parseInt(localManifest.getVersion());
        }

        /**
         * 加载Manifest
         */;
        _proto.loadLocalManifest = /*#__PURE__*/
        function () {
          var _loadLocalManifest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(localmanifestUrl) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (res, rej) {
                    if (native.fileUtils.isFileExist(localmanifestUrl)) {
                      var localAsset = new HotUpateData();
                      localAsset.name = _this2._name;
                      localAsset.packageurl = native.fileUtils.fullPathForFilename(localmanifestUrl);
                      res(localAsset);
                    } else {
                      // 本地不存在 manifest 文件
                      !native.fileUtils.isDirectoryExist(_this2._storagePath) && native.fileUtils.createDirectory(_this2._storagePath);
                      var manifestData = {};
                      var localManifestPath = _this2._storagePath + "/project.manifest";
                      if (native.fileUtils.isFileExist(localManifestPath)) {
                        var _localAsset = new HotUpateData();
                        _localAsset.name = _this2._name;
                        _localAsset.packageurl = localManifestPath;
                        res(_localAsset);
                        return;
                      }
                      manifestData = {
                        packageUrl: "",
                        remoteManifestUrl: "",
                        remoteVersionUrl: "",
                        version: "0",
                        assets: {},
                        searchPaths: new Array()
                      };
                      manifestData["packageUrl"] = GameConst.hotUpdate_packageUrl;
                      var manifestUrl = Str.format(GameConst.hotUpdate_manifestUrl, _this2._name);
                      var versionUrl = Str.format(GameConst.hotUpdate_versionUrl, _this2._name);
                      _this2.log("localmanifestUrl is not exist");
                      _this2.log("create manifestUrl:" + manifestUrl);
                      _this2.log("create versionUrl:" + versionUrl);
                      manifestData["remoteManifestUrl"] = manifestUrl;
                      manifestData["remoteVersionUrl"] = versionUrl;
                      native.fileUtils.writeStringToFile(JSON.stringify(manifestData), localManifestPath);
                      console.log("=========resource=========", localManifestPath);
                      var _localAsset2 = new HotUpateData();
                      _localAsset2.name = _this2._name;
                      _localAsset2.packageurl = localManifestPath;
                      res(_localAsset2);
                    }
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadLocalManifest(_x2) {
            return _loadLocalManifest.apply(this, arguments);
          }
          return loadLocalManifest;
        }()
        /**
         * 检查更新
         */;

        _proto.checkUpdate = function checkUpdate() {
          if (this._updating) {
            console.log("already check updating");
            return;
          }
          this.log("checkUpdate:" + this._name);
          if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            this.emit(HotUpdateEvent.CheckVersionResult, false);
            return;
          }
          this._updating = true;
          this._am.setEventCallback(this.checkCallback.bind(this));
          this._am.checkUpdate();
        }

        /**
         * 发现新版本后，调用此方法进行热更新
         */;
        _proto.hotUpdate = function hotUpdate() {
          this.log("hotupdate:" + this._name);
          this.log("hotupdate:" + this._updating);
          if (this._am && !this._updating) {
            this.log("hotupdate:" + this._name);
            this._am.setEventCallback(this.updateCallback.bind(this));
            this._failCount = 0;
            this._updating = true;
            this._am.update();
          }
        }

        /**
         * 版本检查回调
         */;
        _proto.checkCallback = function checkCallback(event) {
          var newVersionFoud = null;
          switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              this.log("checkout hotupdate code: " + event.getEventCode() + " no local Manifest");
              newVersionFoud = false;
              break;
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
              this.log("checkout hotupdate code: " + event.getEventCode() + " download Manifest failed");
              newVersionFoud = false;
              break;
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
              this.log("checkout hotupdate code: " + event.getEventCode() + " parse remote Manifest failed");
              newVersionFoud = false;
              break;
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
              this.log("checkout hotupdate code: " + event.getEventCode() + " already up to date");
              newVersionFoud = false;
              break;
            case native.EventAssetsManager.ERROR_DECOMPRESS:
              this.log("checkout hotupdate code: " + event.getEventCode() + " decompress failed");
              newVersionFoud = false;
              break;
            case native.EventAssetsManager.NEW_VERSION_FOUND:
              this.log("checkout hotupdate code: " + event.getEventCode() + " new version found");
              newVersionFoud = true;
              break;
            case native.EventAssetsManager.UPDATE_PROGRESSION:
              this.log("checkout hotupdate code: " + event.getEventCode() + " update progression");
              break;
            case native.EventAssetsManager.ASSET_UPDATED:
              this.log("checkout hotupdate code: " + event.getEventCode() + " asset updated");
              break;
            case native.EventAssetsManager.ERROR_UPDATING:
              this.log("checkout hotupdate code: " + event.getEventCode() + " error updating");
              break;
            case native.EventAssetsManager.UPDATE_FAILED:
              this.log("checkout hotupdate code: " + event.getEventCode() + " update failed");
              break;
            case native.EventAssetsManager.UPDATE_FINISHED:
              this.log("checkout hotupdate code: " + event.getEventCode() + " update finish");
              //引擎有bug AssetsManagerEx.app 有bug 版本号不一样 内容一样高 会先抛出一个finish 再跑一个 newversion ,这里特殊处理
              newVersionFoud = false;
              break;
            default:
              this.log("checkout hotupdate code: " + event.getEventCode() + " unkown error code");
              break;
          }
          if (newVersionFoud != null) {
            this._am && this._am.setEventCallback(null);
            this._updating = false;
            this.emit(HotUpdateEvent.CheckVersionResult, newVersionFoud);
          }
        }

        /**
         * 热更回调地址
         */;
        _proto.updateCallback = function updateCallback(event) {
          var updateOver = false;
          var failed = false;
          var percent;
          console.log("updateCallback EventCode:", event.getEventCode());
          switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              this.log("hotupdate code: " + event.getEventCode() + " no local Manifest");
              failed = true;
              break;
            case native.EventAssetsManager.UPDATE_PROGRESSION:
              percent = event.getPercent();
              if (isNaN(percent)) return;
              this.log("hotupdate procession: " + percent);
              this.disPatchRateEvent(percent);
              break;
            // 下载失败， 跳过热更新
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
              this.log("download manifest failed! skip to hotupdate");
              failed = false;
              break;
            // 已经是最新的
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
              this.log("already update to date!");
              updateOver = true;
              break;
            // 更新完成
            case native.EventAssetsManager.UPDATE_FINISHED:
              this.disPatchRateEvent(1);
              updateOver = true;
              break;
            // 更新错误
            case native.EventAssetsManager.UPDATE_FAILED:
              this.log("hotupdate code: " + event.getEventCode() + " assert id: " + event.getAssetId() + " msg: " + event.getMessage());
              this._failCount++;
              this._updating = false;
              this._canRetry = true;
              var retryResult = this.retry();
              if (!retryResult) {
                failed = true;
              }
              break;
            // 更新过程出错
            case native.EventAssetsManager.ERROR_UPDATING:
              this.log("hotupdate code: " + event.getEventCode() + " assert id: " + event.getAssetId() + " msg: " + event.getMessage());
              break;
            // 解压错误
            case native.EventAssetsManager.ERROR_DECOMPRESS:
              this.log("hotupdate code: " + event.getEventCode() + " ERROR_DECOMPRESS");
              break;
          }
          if (failed) {
            this._am.setEventCallback(null);
            this._updating = false;
            this.hotUpdateFinish(false);
          }
          if (updateOver) {
            this.isSettSearchPaths();
            this.hotUpdateFinish(true);
          }
        }

        /**
         * 热更完成
         */;
        _proto.hotUpdateFinish = function hotUpdateFinish(result) {
          this.destory();
          this.emit(HotUpdateEvent.HotUpdateFinish, result);
        };
        _proto.destory = function destory() {
          this._am && this._am.setEventCallback(null);
          this._am = null;
        }

        /**
         * 重新下载失败
         */;
        _proto.retry = function retry() {
          if (this._failCount > 3) {
            return false;
          }
          if (!this._updating && this._canRetry) {
            this._canRetry = false;
            this._am.downloadFailedAssets();
            return true;
          }
          return false;
        };
        _proto.unit8ArrayToString = function unit8ArrayToString(array) {
          var out;
          var i;
          var len;
          var c;
          var char2;
          var char3;
          out = "";
          len = array.length;
          i = 0;
          while (i < len) {
            c = array[i++];
            switch (c >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
              case 12:
              case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode((c & 0x1f) << 6 | char2 & 0x3f);
                break;
              case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode((c & 0x0f) << 12 | (char2 & 0x3f) << 6 | (char3 & 0x3f) << 0);
                break;
            }
          }
          return out;
        }

        /**
         * 更新热更进度
         */;
        _proto.disPatchRateEvent = function disPatchRateEvent(percent) {
          this.emit(HotUpdateEvent.HotUpdateRate, percent);
        };
        _proto.emit = function emit(key) {
          for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            arg[_key2 - 1] = arguments[_key2];
          }
          director.emit.apply(director, [key, this._name].concat(arg));
        };
        _proto.getStorePath = function getStorePath() {
          return this._storagePath;
        };
        return HotUpdateCtrl;
      }());
      /**
       * 主包版本号--用于更新子游戏的时候 判断如果版本小于主包版本，则不更新
       */
      HotUpdateCtrl.mainVersion = 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HotUpdateEvent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "98df1F8r/JJ5qYRqXFJJjlw", "HotUpdateEvent", undefined);
      /**
       * 热更事件
       */
      var HotUpdateEvent = exports('HotUpdateEvent', /*#__PURE__*/function (HotUpdateEvent) {
        HotUpdateEvent["CheckVersionResult"] = "CheckVersionResult";
        HotUpdateEvent["HotUpdateRate"] = "HotUpdateRate";
        HotUpdateEvent["HotUpdateFinish"] = "HotUpdateFinish";
        return HotUpdateEvent;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InputMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8fac4mBG8lPo5xB3wRNGThs", "InputMgr", undefined);
      var InputMgr = exports('InputMgr', /*#__PURE__*/function () {
        function InputMgr() {
          this.STATE_NORMAL = 1;
          this.STATE_KEEP = 2;
          this._flags = {};
          this._flagsMeta = {};
        }
        var _proto = InputMgr.prototype;
        _proto.setFlag = function setFlag(flag, keep, meta) {
          this._flags[flag] = keep ? this.STATE_KEEP : this.STATE_NORMAL;
          if (meta != null) {
            this._flagsMeta[flag] = meta;
          }
        };
        _proto.removeFlag = function removeFlag(flag) {
          delete this._flags[flag];
        };
        _proto.hasFlag = function hasFlag(flag) {
          return !!this._flags[flag];
        };
        _proto.getMetaByFlag = function getMetaByFlag(flag) {
          return this._flagsMeta[flag];
        };
        _proto.update = function update() {
          for (var k in this._flags) {
            if (this._flags[k] != this.STATE_KEEP) {
              this._flags[k] = 0;
            }
          }
        };
        _createClass(InputMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new InputMgr();
            }
            return this._inst;
          }
        }]);
        return InputMgr;
      }());
      InputMgr._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonUtil.ts", ['cc', './ResLoader.ts'], function (exports) {
  var cclegacy, JsonAsset, resLoader;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      resLoader = module.resLoader;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ab0f1sf3oxJBpGmIylfUxhe", "JsonUtil", undefined);

      /** 资源路径 */
      var path = "config/game/";

      /** 数据缓存 */
      var data = new Map();

      /** JSON数据表工具 */
      var JsonUtil = exports('JsonUtil', /*#__PURE__*/function () {
        function JsonUtil() {}
        /**
         * 通知资源名从缓存中获取一个Json数据表
         * @param name  资源名
         */
        JsonUtil.get = function get(name) {
          if (data.has(name)) return data.get(name);
        }

        /**
         * 通知资源名加载Json数据表
         * @param name      资源名
         * @param callback  资源加载完成回调
         */;
        JsonUtil.load = function load(name, callback) {
          if (data.has(name)) callback(data.get(name));else {
            var url = path + name;
            resLoader.load(url, JsonAsset, function (err, content) {
              if (err) {
                console.warn(err.message);
                callback(null);
              } else {
                data.set(name, content.json);
                resLoader.release(url);
                callback(content.json);
              }
            });
          }
        }

        /**
         * 异步加载Json数据表
         * @param name 资源名
         */;
        JsonUtil.loadAsync = function loadAsync(name) {
          return new Promise(function (resolve, reject) {
            if (data.has(name)) {
              resolve(data.get(name));
            } else {
              var url = path + name;
              resLoader.load(url, JsonAsset, function (err, content) {
                if (err) {
                  console.warn(err.message);
                  resolve(null);
                } else {
                  data.set(name, content.json);
                  resLoader.release(url);
                  resolve(content.json);
                }
              });
            }
          });
        }

        /** 加载所有配置表数据到缓存中 */;
        JsonUtil.loadDirAsync = function loadDirAsync() {
          return new Promise(function (resolve, reject) {
            resLoader.loadDir(path, function (err, assets) {
              if (err) {
                console.warn(err.message);
                resolve(false);
              } else {
                assets.forEach(function (asset) {
                  data.set(asset.name, asset.json);
                });
                resLoader.releaseDir(path);
                resolve(true);
              }
            });
          });
        }

        /**
         * 通过指定资源名释放资源内存
         * @param name 资源名
         */;
        JsonUtil.release = function release(name) {
          data["delete"](name);
        }

        /** 清理所有数据 */;
        JsonUtil.clear = function clear() {
          data.clear();
        };
        return JsonUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIWaiting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "cf096mKKypBc5BOy11i+5NG", "Layout_UIWaiting", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIWaiting = exports('Layout_UIWaiting', (_dec = ccclass('tgxLayout_UIWaiting'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIWaiting, _Component);
        function Layout_UIWaiting() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingIcon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingTxt", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIWaiting;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Logger.ts", ['cc'], function (exports) {
  var cclegacy, log;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }],
    execute: function () {
      cclegacy._RF.push({}, "479cdJANP5KaJgU+8z0DdSE", "Logger", undefined);

      /** 日志类型 */
      var LogType = exports('LogType', /*#__PURE__*/function (LogType) {
        LogType[LogType["Net"] = 1] = "Net";
        LogType[LogType["Model"] = 2] = "Model";
        LogType[LogType["Business"] = 4] = "Business";
        LogType[LogType["View"] = 8] = "View";
        LogType[LogType["Config"] = 16] = "Config";
        LogType[LogType["Trace"] = 32] = "Trace";
        return LogType;
      }({}));
      var names = {
        "1": "网络日志",
        "2": "数据日志",
        "4": "业务日志",
        "8": "视图日志",
        "16": "配置日志",
        "32": "标准日志"
      };

      /** 
       * 日志管理 
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037904&doc_id=2873565
       * @example
      oops.log.trace("默认标准日志");
      oops.log.logConfig("灰色配置日志");
      oops.log.logNet("橙色网络日志");
      oops.log.logModel("紫色数据日志");
      oops.log.logBusiness("蓝色业务日志");
      oops.log.logView("绿色视图日志");
       */
      var Logger = exports('Logger', /*#__PURE__*/function () {
        function Logger() {}
        Logger.init = function init() {
          this.tags = LogType.Net | LogType.Model | LogType.Business | LogType.View | LogType.Config | LogType.Trace;
        }

        /** 
         * 设置显示的日志类型，默认值为不显示任何类型日志
         * @example
        oops.log.setTags(LogType.View|LogType.Business)
         */;
        Logger.setTags = function setTags(tag) {
          if (tag === void 0) {
            tag = null;
          }
          if (tag) {
            this.tags = tag;
          }
        }

        /**
         * 记录开始计时
         * @param describe  标题描述
         * @example
        oops.log.start();
        ...
        省略N行代码
        ...
        oops.log.end();
         */;
        Logger.start = function start(describe) {
          if (describe === void 0) {
            describe = "Time";
          }
          console.time(describe);
        }

        /**
         * 打印范围内时间消耗
         * @param describe  标题描述
         * @example
        oops.log.start();
        ...
        省略N行代码
        ...
        oops.log.end();
         */;
        Logger.end = function end(describe) {
          if (describe === void 0) {
            describe = "Time";
          }
          console.timeEnd(describe);
        }

        /**
         * 打印表格
         * @param msg       日志消息
         * @param describe  标题描述
         * @example
        var object:any = {uid:1000, name:"oops"};
        oops.log.table(object);
         */;
        Logger.table = function table(msg, describe) {
          if (!this.isOpen(LogType.Trace)) {
            return;
          }
          console.table(msg);
        }

        /**
         * 打印标准日志
         * @param msg       日志消息
         */;
        Logger.trace = function trace(msg, color) {
          if (color === void 0) {
            color = "color:#000000;";
          }
          // 标记没有打开，不打印该日志
          if (!this.isOpen(LogType.Trace)) {
            return;
          }
          var backLog = console.log || log;
          backLog.call(null, "%c%s%s", color, this.getDateString(), msg);
        }

        /**
         * 打印错误日志
         * @param msg       日志消息
         */;
        Logger.error = function error(msg, color) {
          if (color === void 0) {
            color = "color:#ff0000;";
          }
          // 标记没有打开，不打印该日志
          if (!this.isOpen(LogType.Trace)) {
            return;
          }
          var backLog = console.log || log;
          backLog.call(null, "%c%s%s", color, this.getDateString(), msg);
        }

        /**
         * 打印网络层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */;
        Logger.logNet = function logNet(msg, describe) {
          this.orange(LogType.Net, msg, describe);
        }

        /**
         * 打印数据层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */;
        Logger.logModel = function logModel(msg, describe) {
          this.violet(LogType.Model, msg, describe);
        }

        /**
         * 打印业务层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */;
        Logger.logBusiness = function logBusiness(msg, describe) {
          this.blue(LogType.Business, msg, describe);
        }

        /**
         * 打印视图日志
         * @param msg       日志消息
         * @param describe  标题描述
         */;
        Logger.logView = function logView(msg, describe) {
          this.green(LogType.View, msg, describe);
        }

        /** 打印配置日志 */;
        Logger.logConfig = function logConfig(msg, describe) {
          this.gray(LogType.Config, msg, describe);
        }

        // 橙色
        ;

        Logger.orange = function orange(tag, msg, describe) {
          this.print(tag, msg, "color:#ee7700;", describe);
        }

        // 紫色
        ;

        Logger.violet = function violet(tag, msg, describe) {
          this.print(tag, msg, "color:Violet;", describe);
        }

        // 蓝色
        ;

        Logger.blue = function blue(tag, msg, describe) {
          this.print(tag, msg, "color:#3a5fcd;", describe);
        }

        // 绿色
        ;

        Logger.green = function green(tag, msg, describe) {
          this.print(tag, msg, "color:green;", describe);
        }

        // 灰色
        ;

        Logger.gray = function gray(tag, msg, describe) {
          this.print(tag, msg, "color:gray;", describe);
        };
        Logger.isOpen = function isOpen(tag) {
          return (this.tags & tag) != 0;
        }

        /**
         * 输出日志
         * @param tag       日志类型
         * @param msg       日志内容
         * @param color     日志文本颜色
         * @param describe  日志标题描述
         */;
        Logger.print = function print(tag, msg, color, describe) {
          // 标记没有打开，不打印该日志
          if (!this.isOpen(tag)) {
            return;
          }
          var backLog = console.log || log;
          var type = names[tag];
          if (describe) {
            backLog.call(null, "%c%s%s%s:%s%o", color, this.getDateString(), '[' + type + ']', this.stack(5), describe, msg);
          } else {
            backLog.call(null, "%c%s%s%s:%o", color, this.getDateString(), '[' + type + ']', this.stack(5), msg);
          }
        };
        Logger.stack = function stack(index) {
          var e = new Error();
          var lines = e.stack.split("\n");
          var result = [];
          lines.forEach(function (line) {
            line = line.substring(7);
            var lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
              result.push(lineBreak[0]);
            } else {
              var _result$push;
              result.push((_result$push = {}, _result$push[lineBreak[0]] = lineBreak[1], _result$push));
            }
          });
          var list = [];
          var splitList = [];
          if (index < result.length - 1) {
            var value;
            for (var a in result[index]) {
              splitList = a.split(".");
              if (splitList.length == 2) {
                list = splitList.concat();
              } else {
                value = result[index][a];
                var start = value.lastIndexOf("/");
                var end = value.lastIndexOf(".");
                if (start > -1 && end > -1) {
                  var r = value.substring(start + 1, end);
                  list.push(r);
                } else {
                  list.push(value);
                }
              }
            }
          }
          if (list.length == 1) {
            return "[" + list[0] + ".ts]";
          } else if (list.length == 2) {
            return "[" + list[0] + ".ts->" + list[1] + "]";
          }
          return "";
        };
        Logger.getDateString = function getDateString() {
          var d = new Date();
          var str = d.getHours().toString();
          var timeStr = "";
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getMinutes().toString();
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getSeconds().toString();
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getMilliseconds().toString();
          if (str.length == 1) str = "00" + str;
          if (str.length == 2) str = "0" + str;
          timeStr += str;
          timeStr = "[" + timeStr + "]";
          return timeStr;
        };
        return Logger;
      }());

      // @ts-ignore
      Logger.tags = 0;
      Logger.init();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AudioMgr.ts', './DoubleList.ts', './EnvMgr.ts', './ExtendButton.ts', './InputMgr.ts', './ModuleContext.ts', './PortraitMgr.ts', './ResolutionAutoFit.ts', './ResourceMgr.ts', './SafeJSON.ts', './SceneUtils.ts', './URLUtils.ts', './AudioEffect.ts', './AudioEffectPool.ts', './AudioManager.ts', './AudioMusic.ts', './ResLoader.ts', './Logger.ts', './FPSCamera.ts', './FollowCamera2D.ts', './FreeCamera.ts', './ThirdPersonCamera.ts', './CharacterMovement.ts', './CharacterMovement2D.ts', './EasyController.ts', './ThirdPersonCameraCtrl.ts', './UIJoystick.ts', './UI_Joystick.ts', './EventDispatcher.ts', './NodeExt.ts', './UIController.ts', './UILayers.ts', './UIMgr.ts', './UIOrientation.ts', './UIAlert.ts', './UITip.ts', './Layout_UIWaiting.ts', './UIWaiting.ts', './ToolCsv.ts', './ToolPos.ts', './ToolUI.ts', './Fun.ts', './GameUtil.ts', './JsonUtil.ts', './Num.ts', './Singleton.ts', './Str.ts', './tgx.ts', './FullScreenBgAutoFit.ts', './GameConst.ts', './GameUILayers.ts', './ModuleDef.ts', './SceneDef.ts', './HotUpateData.ts', './HotUpdateCtrl.ts', './HotUpdateEvent.ts', './HotUpdate.ts', './Start.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/ModuleContext.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5575a3VV2RD746hi1OU1Xsj", "ModuleContext", undefined);
      var PROP_MODULE = '__module__name__';
      var PROP_IMPL_CLASS = '__impl__class__';
      var defaultModule = 'resources';
      var ModuleContext = exports('ModuleContext', /*#__PURE__*/function () {
        function ModuleContext() {}
        ModuleContext.setDefaultModule = function setDefaultModule(moduleName) {
          defaultModule = moduleName;
        };
        ModuleContext.getDefaultModule = function getDefaultModule() {
          return defaultModule;
        };
        ModuleContext.attachClassModule = function attachClassModule(cls, moduleName) {
          cls[PROP_MODULE] = moduleName;
        };
        ModuleContext.getClassModule = function getClassModule(cls) {
          return cls[PROP_MODULE] || defaultModule;
        };
        ModuleContext.attachImplClass = function attachImplClass(cls, implCls) {
          cls[PROP_IMPL_CLASS] = implCls;
        };
        ModuleContext.attachModuleAndImplClass = function attachModuleAndImplClass(cls, moduleName, implCls) {
          cls[PROP_MODULE] = moduleName;
          cls[PROP_IMPL_CLASS] = implCls;
        };
        ModuleContext.getImplClass = function getImplClass(cls) {
          return cls[PROP_IMPL_CLASS] || cls;
        };
        ModuleContext.createFromModule = function createFromModule(cls) {
          var implCls = this.getImplClass(cls) || cls;
          return new implCls();
        };
        return ModuleContext;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModuleDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6cdc84XjYpIJZs1++qgwn4Z", "ModuleDef", undefined);
      var ModuleDef = exports('ModuleDef', function ModuleDef() {});
      /**
       * @en basic bundle, used for basic scene and common ui
       * @zh 基础 bundle，用于存放基础场景，公共UI
       */
      ModuleDef.BASIC = 'module_basic';
      /**
       * @en billiards bundle, used for billiards scene and common ui
       * @zh 用于存放台球相关的所有素材、场景和代码
       */
      ModuleDef.BILLIARDS = 'module_billiards';
      /**
       * @en gomoku bundle, used for gomoku scene and related ui
       * @zh 用于存放五子棋相关的所有素材
       */
      ModuleDef.GOMOKU = 'module_gomoku';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放坦克大战相关的所有素材
       */
      ModuleDef.TANK = 'module_tank';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（fruit版）相关的所有素材
       */
      ModuleDef.SLOTS1 = 'module_slots1';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（animal版）相关的所有素材
       */
      ModuleDef.SLOTS2 = 'module_slots2';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（sky版）相关的所有素材
       */
      ModuleDef.SLOTS3 = 'module_slots3';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（tiger版）相关的所有素材
       */
      ModuleDef.SLOTS4 = 'module_slots4';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（car版）相关的所有素材
       */
      ModuleDef.SLOTS5 = 'module_slots5';
      /**
         * @en tank bundle, used for tank scene and related ui
         * @zh 用于存放老虎机（海王版）相关的所有素材
         */
      ModuleDef.SLOTS_SEA = 'module_slots_sea';
      /**
         * @en tank bundle, used for tank scene and related ui
         * @zh 用于存放跳一跳相关的所有素材
         */
      ModuleDef.TYT = 'module_tyt';
      /**
        * @en tank bundle, used for tank scene and related ui
        * @zh 用于存放老虎机（龙）相关的所有素材
        */
      ModuleDef.SLOTS_WATER_MARGIN = 'module_slots_water_margin';
      /**
        * @en tank bundle, used for tank scene and related ui
        * @zh 用于存放老虎机（龙）相关的所有素材
        */
      ModuleDef.TASK = 'module_task';
      /**
       * @en test bundle, used for test scene and related ui
       * @zh 用于存放测试子游戏相关的所有素材
       */
      ModuleDef.TEST = 'module_test';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放捕鱼相关的所有素材
       */
      ModuleDef.FISH = 'module_fish';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放捕鱼-鲨鱼相关的所有素材
       */
      ModuleDef.FISH_SHARK = 'module_fish_shark';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放捕鱼-鲸鱼相关的所有素材
       */
      ModuleDef.FISH_WHALE = 'module_fish_whale';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（鼠）相关的所有素材
       */
      ModuleDef.SLOTS_MOUSE = 'module_slots_mouse';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（牛）相关的所有素材
       */
      ModuleDef.SLOTS_OX = 'module_slots_ox';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（虎）相关的所有素材
       */
      ModuleDef.SLOTS_TIGER = 'module_slots_tiger';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（兔）相关的所有素材
       */
      ModuleDef.SLOTS_RABBIT = 'module_slots_rabbit';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（龙）相关的所有素材
       */
      ModuleDef.SLOTS_DRAGON = 'module_slots_dragon';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（泼水节）相关的所有素材
       */
      ModuleDef.SLOTS_SONGKRAN = 'module_slots_songkran';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放老虎机（寻龙探宝）相关的所有素材
       */
      ModuleDef.SLOTS_DRAGONHATCH = 'module_slots_dragonhatch';
      /**
      * @en tank bundle, used for tank scene and related ui
      * @zh 用于存放老虎机（亡灵大盗）相关的所有素材
      */
      ModuleDef.SLOTS_WILDBANDITO = 'module_slots_wildBandito';
      /**
      * @en tank bundle, used for tank scene and related ui
      * @zh 用于存放老虎机（冰火双娇）相关的所有素材
      */
      ModuleDef.SLOTS_ICEANDFIRE = 'module_slots_iceandfire';
      /**
      * @en tank bundle, used for tank scene and related ui
      * @zh 用于存放老虎机（象财神）相关的所有素材
      */
      ModuleDef.SLOTS_GANESHAGOLD = 'module_slots_ganeshagold';
      /**
      * @en tank bundle, used for tank scene and related ui
      * @zh 用于存放老虎机（麻将）相关的所有素材
      */
      ModuleDef.SLOTS_MJWAYS = 'module_slots_mjways';
      /**
      * @en tank bundle, used for tank scene and related ui
      * @zh 用于存放老虎机（麻将）相关的所有素材
      */
      ModuleDef.SLOTS_MJWAYS2 = 'module_slots_mjways2';
      /**
      * @zh 用于存放slots(麒麟) 相关的所有素材
      */
      ModuleDef.SLOTS_KYLIN = 'module_slots_kylin';
      /**
       * @zh 用于存放slots(独角兽) 相关的所有素材
       */
      ModuleDef.SLOTS_UNICORN = 'module_slots_unicorn';
      /**
       * @zh 用于存放slots(熊猫) 相关的所有素材
       */
      ModuleDef.SLOTS_PANDA = 'module_slots_panda';
      /**
       * @zh 用于存放slots(小龙) 相关的所有素材
       */
      ModuleDef.SLOTS_LOONG = 'module_slots_loong';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放扑克（牛牛）相关的所有素材
       */
      ModuleDef.POKER_NIUNIU = 'module_poker_niuniu';
      /**
       * @en tank bundle, used for tank scene and related ui
       * @zh 用于存放捕鱼_鲨鱼相关的所有素材
       */
      ModuleDef.STAR_BASIC = 'star_basic';
      /**
      * @en tank bundle, used for tank scene and related ui
      * @zh 用于存放越南跑得快相关的所有素材
      */
      ModuleDef.POKER_PDK_YUENAN = 'module_poker_pdk_yuenan';
      /**
      * @en tank bundle, used for tank scene and related ui
      * @zh 用于存放德州扑克相关的所有素材
      */
      ModuleDef.POKER_DEZHOU = 'module_poker_dezhou';
      /**
       * @zh 用于存放bingo青蛙 相关的所有素材
       */
      ModuleDef.BINGO_FROG = 'module_bingo_frog';
      ModuleDef.SLOTS_DOUBLE_HAPPY = 'module_slots_double_happy';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NodeExt.ts", ['cc'], function () {
  var cclegacy, Node, Graphics, Label, RichText, Sprite, Button, Canvas, EditBox, Layout, PageView, ProgressBar, ScrollView, Slider, Toggle, Widget, UIOpacity, UITransform, Mask, Size, UIRenderer, Color, v3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Graphics = module.Graphics;
      Label = module.Label;
      RichText = module.RichText;
      Sprite = module.Sprite;
      Button = module.Button;
      Canvas = module.Canvas;
      EditBox = module.EditBox;
      Layout = module.Layout;
      PageView = module.PageView;
      ProgressBar = module.ProgressBar;
      ScrollView = module.ScrollView;
      Slider = module.Slider;
      Toggle = module.Toggle;
      Widget = module.Widget;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Mask = module.Mask;
      Size = module.Size;
      UIRenderer = module.UIRenderer;
      Color = module.Color;
      v3 = module.v3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4e875pWk4RKQpg2QApkPXi4", "NodeExt", undefined);

      // ========= 扩展 cc 提示声明 =========

      /** 扩展节点属性 */
      {
        Object.defineProperty(Node.prototype, "uiGraphics", {
          get: function get() {
            return this.getComponent(Graphics);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiLabel", {
          get: function get() {
            return this.getComponent(Label);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiRichText", {
          get: function get() {
            return this.getComponent(RichText);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiSprite", {
          get: function get() {
            return this.getComponent(Sprite);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiButton", {
          get: function get() {
            return this.getComponent(Button);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiCanvas", {
          get: function get() {
            return this.getComponent(Canvas);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiEditBox", {
          get: function get() {
            return this.getComponent(EditBox);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiLayout", {
          get: function get() {
            return this.getComponent(Layout);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiPageView", {
          get: function get() {
            return this.getComponent(PageView);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiProgressBar", {
          get: function get() {
            return this.getComponent(ProgressBar);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiScrollView", {
          get: function get() {
            return this.getComponent(ScrollView);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiSlider", {
          get: function get() {
            return this.getComponent(Slider);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiToggle", {
          get: function get() {
            return this.getComponent(Toggle);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiWidget", {
          get: function get() {
            return this.getComponent(Widget);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiOpacity", {
          get: function get() {
            return this.getComponent(UIOpacity);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiTransform", {
          get: function get() {
            return this.getComponent(UITransform);
          },
          set: function set(value) {}
        });
        Object.defineProperty(Node.prototype, "uiMask", {
          get: function get() {
            return this.getComponent(Mask);
          },
          set: function set(value) {}
        });

        /** 获取、设置节点的 X 坐标 */
        Object.defineProperty(Node.prototype, "x", {
          get: function get() {
            var self = this;
            return self.position.x;
          },
          set: function set(value) {
            var self = this;
            self.setPosition(value, self.position.y);
          }
        });

        /** 获取、设置节点的 Y 坐标 */
        Object.defineProperty(Node.prototype, "y", {
          get: function get() {
            var self = this;
            return self.position.y;
          },
          set: function set(value) {
            var self = this;
            self.setPosition(self.position.x, value);
          }
        });

        /** 获取、设置节点的 Z 坐标 */
        Object.defineProperty(Node.prototype, "z", {
          get: function get() {
            var self = this;
            return self.position.z;
          },
          set: function set(value) {
            var self = this;
            self.setPosition(self.position.x, self.position.y, value);
          }
        });

        /** 获取、设置节点的宽度 */
        Object.defineProperty(Node.prototype, "w", {
          configurable: true,
          get: function get() {
            var _self$getComponent$wi, _self$getComponent;
            var self = this;
            return (_self$getComponent$wi = (_self$getComponent = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent.width) != null ? _self$getComponent$wi : 0;
          },
          set: function set(value) {
            var self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).width = value;
          }
        });

        /** 获取、设置节点的高度 */
        Object.defineProperty(Node.prototype, "h", {
          configurable: true,
          get: function get() {
            var _self$getComponent$he, _self$getComponent2;
            var self = this;
            return (_self$getComponent$he = (_self$getComponent2 = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent2.height) != null ? _self$getComponent$he : 0;
          },
          set: function set(value) {
            var self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).height = value;
          }
        });

        /** 获取、设置节点的尺寸 */
        Object.defineProperty(Node.prototype, "size", {
          get: function get() {
            var self = this;
            var uiTransform = self.getComponent(UITransform);
            return new Size(uiTransform.width, uiTransform.height);
          },
          set: function set(value) {
            var self = this;
            var uiTransform = self.getComponent(UITransform) || self.addComponent(UITransform);
            uiTransform.width = value.width;
            uiTransform.height = value.height;
          }
        });

        /** 获取、设置节点的透明度 */
        Object.defineProperty(Node.prototype, "opacity", {
          get: function get() {
            var self = this;
            var op = self.getComponent(UIOpacity);
            if (op != null) {
              return op.opacity;
            }
            var render = self.getComponent(UIRenderer);
            if (render) {
              return render.color.a;
            }
            return 255;
          },
          set: function set(value) {
            var self = this;
            var op = self.getComponent(UIOpacity);
            if (op != null) {
              op.opacity = value;
              return;
            }
            var render = self.getComponent(UIRenderer);
            if (render) {
              // 直接通过 color.a 设置透明度会有bug，没能直接生效，需要激活节点才生效
              // (render.color.a as any) = value;

              // 创建一个颜色缓存对象，避免每次都创建新对象
              if (!this.$__color__) {
                this.$__color__ = new Color(render.color.r, render.color.g, render.color.b, value);
              } else {
                this.$__color__.a = value;
              }
              render.color = this.$__color__; // 设置 color 对象则可以立刻生效
            } else {
              self.addComponent(UIOpacity).opacity = value;
            }
          }
        });

        /** 获取、设置节点的颜色 */
        Object.defineProperty(Node.prototype, "color", {
          get: function get() {
            var _self$getComponent3;
            var self = this;
            return (_self$getComponent3 = self.getComponent(UIRenderer)) == null ? void 0 : _self$getComponent3.color;
          },
          set: function set(value) {
            var self = this;
            var render = self.getComponent(UIRenderer);
            render && (render.color = value);
          }
        });

        /** 获取、设置节点的 X 缩放系数 */
        Object.defineProperty(Node.prototype, "scale_x", {
          get: function get() {
            var self = this;
            return self.scale.x;
          },
          set: function set(value) {
            var self = this;
            self.scale = v3(value, self.scale.y, self.scale.z);
          }
        });

        /** 获取、设置节点的 Y 缩放系数 */
        Object.defineProperty(Node.prototype, "scale_y", {
          get: function get() {
            var self = this;
            return self.scale.y;
          },
          set: function set(value) {
            var self = this;
            self.scale = v3(self.scale.x, value, self.scale.z);
          }
        });

        /** 获取、设置节点的 Z 缩放系数 */
        Object.defineProperty(Node.prototype, "scale_z", {
          get: function get() {
            var self = this;
            return self.scale.z;
          },
          set: function set(value) {
            var self = this;
            self.scale = v3(self.scale.x, self.scale.y, value);
          }
        });

        /** 获取、设置节点的水平锚点 */
        Object.defineProperty(Node.prototype, "anchor_x", {
          get: function get() {
            var _self$getComponent$an, _self$getComponent4;
            var self = this;
            return (_self$getComponent$an = (_self$getComponent4 = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent4.anchorX) != null ? _self$getComponent$an : 0.5;
          },
          set: function set(value) {
            var self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).anchorX = value;
          }
        });

        /** 获取、设置节点的垂直锚点 */
        Object.defineProperty(Node.prototype, "anchor_y", {
          get: function get() {
            var _self$getComponent$an2, _self$getComponent5;
            var self = this;
            return (_self$getComponent$an2 = (_self$getComponent5 = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent5.anchorY) != null ? _self$getComponent$an2 : 0.5;
          },
          set: function set(value) {
            var self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).anchorY = value;
          }
        });

        /** 获取、设置节点的 X 欧拉角 */
        Object.defineProperty(Node.prototype, "angle_x", {
          get: function get() {
            var self = this;
            return self.eulerAngles.x;
          },
          set: function set(value) {
            var self = this;
            self.setRotationFromEuler(value, self.eulerAngles.y, self.eulerAngles.z);
          }
        });

        /** 获取、设置节点的 Y 欧拉角 */
        Object.defineProperty(Node.prototype, "angle_y", {
          get: function get() {
            return this.eulerAngles.y;
          },
          set: function set(value) {
            var self = this;
            self.setRotationFromEuler(self.eulerAngles.x, value, self.eulerAngles.z);
          }
        });

        /** 获取、设置节点的 Z 欧拉角 */
        Object.defineProperty(Node.prototype, "angle_z", {
          get: function get() {
            return this.eulerAngles.y;
          },
          set: function set(value) {
            var self = this;
            self.setRotationFromEuler(self.eulerAngles.x, self.eulerAngles.y, value);
          }
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Num.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6790csM9pdH2qM7SsOXuuSu", "Num", undefined);

      /**
       * 数字处理类型
       */
      var Num = exports('Num', /*#__PURE__*/function () {
        function Num() {}
        /**
         * 把字符串转为number类型(TS的number类型实际是float)
         * @param strNum 
         */
        Num.parse = function parse(strNum) {
          var type = typeof strNum;
          if (type == "string") return Number(strNum).valueOf();else return Math.floor(Number(strNum));
        }

        /**
         * 取最大值
         * @param num1 参数1
         * @param num2 参数2
         */;
        Num.max = function max(num1, num2) {
          return Math.max(num1, num2);
        }

        /**
         * 金币展示
         * @param exchangeRate 兑换率
         * @param val          金额
         * @returns 
         */;
        Num.exchangeToThousands = function exchangeToThousands(exchangeRate, val) {
          val = val / exchangeRate;
          if (!isNaN(val)) {
            var source = val.toFixed(2).split("."); //按小数点分成2部分
            source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1."); //只将整数部分进行都好分割
            var strArr = source[0].split(".");
            var str = strArr.join(",") + "." + source[1];
            return str;
          } else {
            return "";
          }
        };
        Num.exchangeToThousands2 = function exchangeToThousands2(exchangeRate, val) {
          val = val / exchangeRate;
          if (!isNaN(val)) {
            var source = (val + "").split("."); //按小数点分成2部分
            source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1."); //只将整数部分进行都好分割
            var strArr = source[0].split(".");
            var str;
            if (source.length > 1) {
              str = strArr.join(",") + "." + source[1];
            } else {
              str = strArr.join(",");
            }
            return str;
          } else {
            return "";
          }
        };
        Num.toThousandsBack = function toThousandsBack(str) {
          var tempArr = str.split(","); //按小数点分成2部分
          var num = Number(tempArr.join(""));
          return num;
        };
        Num.fixNum = function fixNum(exchangeRate, val) {
          var res = "";
          var n = val / exchangeRate;
          res = n.toFixed(2);
          return res;
        };
        /**二阶贝塞尔曲线（t为占总时间比例）*/
        Num.twoBezier = function twoBezier(p0, p1, p2, t) {
          var x = Math.pow(1 - t, 2) * p0.x + 2 * t * (1 - t) * p1.x + Math.pow(t, 2) * p2.x;
          var y = Math.pow(1 - t, 2) * p0.y + 2 * t * (1 - t) * p1.y + Math.pow(t, 2) * p2.y;
          return new Vec3(x, y);
        }

        /**三阶贝塞尔曲线（t为占总时间比例）*/;
        Num.threeBezier = function threeBezier(p0, p1, p2, p3, t) {
          var x = Math.pow(1 - t, 3) * p0.x + 3 * t * Math.pow(1 - t, 2) * p1.x + 3 * Math.pow(t, 2) * (1 - t) * p2.x + Math.pow(t, 3) * p3.x;
          var y = Math.pow(1 - t, 3) * p0.y + 3 * t * Math.pow(1 - t, 2) * p1.y + 3 * Math.pow(t, 2) * (1 - t) * p2.y + Math.pow(t, 3) * p3.y;
          return new Vec3(x, y);
        };
        return Num;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PortraitMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, sys, view, ResolutionPolicy, native, macro, director, Widget, Component, GameConst;
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
      sys = module.sys;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      native = module.native;
      macro = module.macro;
      director = module.director;
      Widget = module.Widget;
      Component = module.Component;
    }, function (module) {
      GameConst = module.GameConst;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f2efaXwiSZLP71lzlBquI8j", "PortraitMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PortraitMgr = exports('default', (_dec = ccclass('PortraitMgr'), _dec2 = property({
        tooltip: '是否只是给UI用的，不改变整个布局，比如solo上的帮助界面这种'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PortraitMgr, _Component);
        function PortraitMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isOnlyUI", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PortraitMgr.prototype;
        _proto.onLoad = function onLoad() {
          //切成竖屏 pc web另外处理
          if (sys.isBrowser && !sys.isMobile && !GameConst.isShowWebPortrait) {
            if (!this.isOnlyUI) {
              var designSize = view.getDesignResolutionSize();
              view.setDesignResolutionSize(designSize.height, designSize.width, ResolutionPolicy.SHOW_ALL);
              this.onWindowResizePC();
              //引擎bug，setDesignResolutionSize 没有生效。进行了一次蛋疼的处理
              view.emit('canvas-resize');
            } else {
              this.onWindowResizePC();
            }
          } else {
            if (!this.isOnlyUI) {
              var _director$getScene;
              if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'setOrientation', '(Ljava/lang/String;)V', "V");
              } else if (sys.os == sys.OS.IOS) ;
              view.setOrientation(macro.ORIENTATION_PORTRAIT);
              var designSize = view.getDesignResolutionSize();
              view.setDesignResolutionSize(designSize.height, designSize.width, ResolutionPolicy.SHOW_ALL);
              this.onWindowResizePC();
              var node = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.getChildByName('Canvas');
              var widget = node.getComponent(Widget);
              if (widget) {
                widget.updateAlignment();
              }
            } else {
              this.onWindowResizePC();
            }
          }
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
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
        _proto.onDisable = function onDisable() {
          //切成横屏 pc web另外处理
          if (sys.isBrowser && !sys.isMobile && !GameConst.isShowWebPortrait) {
            if (!this.isOnlyUI) {
              var designSize = view.getDesignResolutionSize();
              view.setDesignResolutionSize(designSize.height, designSize.width, ResolutionPolicy.SHOW_ALL);
              //引擎bug，setDesignResolutionSize 没有生效。进行了一次蛋疼的处理
              view.emit('canvas-resize');
            }
          } else {
            if (!this.isOnlyUI) {
              if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'setOrientation', '(Ljava/lang/String;)V', "H");
              } else if (sys.os == sys.OS.IOS) ;
              view.setOrientation(macro.ORIENTATION_LANDSCAPE);
              var designSize = view.getDesignResolutionSize();
              view.setDesignResolutionSize(designSize.height, designSize.width, ResolutionPolicy.SHOW_ALL);
            }
          }
        };
        _proto.onWindowResizePC = function onWindowResizePC() {
          var widget = this.node.getComponent(Widget);
          if (!widget) {
            widget = this.node.addComponent(Widget);
          }
          // 设置 Widget 的属性以铺满屏幕
          widget.isAlignTop = true;
          widget.isAlignBottom = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.top = 0;
          widget.bottom = 0;
          widget.left = 0;
          widget.right = 0;

          // 更新 Widget 组件，确保布局生效
          widget.updateAlignment();
        };
        return PortraitMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "isOnlyUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, assetManager, error, warn, Asset, js, resources;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      error = module.error;
      warn = module.warn;
      Asset = module.Asset;
      js = module.js;
      resources = module.resources;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1a2e4jFffpHrYjrpxbnC760", "ResLoader", undefined);
      /** 
       * 游戏资源管理
       * 1、加载默认resources文件夹中资源
       * 2、加载默认bundle远程资源
       * 3、主动传递bundle名时，优先加载传递bundle名资源包中的资源
       * 
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037901&doc_id=2873565
       */
      var ResLoader = exports('ResLoader', /*#__PURE__*/function () {
        function ResLoader() {
          //#region 资源配置数据
          /** 全局默认加载的资源包名 */
          this.defaultBundleName = "resources";
          /** 是否使用远程 CDN 资源 */
          this.cdn = false;
          /** 资源包配置 */
          this.bundles = new Map();
        }
        var _proto = ResLoader.prototype;
        //#endregion
        _proto.init = function init(config) {
          this.cdn = config.enable;
          for (var _bundleName in config.packages) {
            this.bundles.set(_bundleName, config.packages[_bundleName]);
          }
        }

        //#region 加载远程资源
        /**
         * 加载远程资源
         * @param url           资源地址
         * @param options       资源参数，例：{ ext: ".png" }
         * @param onComplete    加载完成回调
         * @example
        var opt: IRemoteOptions = { ext: ".png" };
        var onComplete = (err: Error | null, data: ImageAsset) => {
        const texture = new Texture2D();
        texture.image = data;
        
        const spriteFrame = new SpriteFrame();
        spriteFrame.texture = texture;
        
        var sprite = this.sprite.addComponent(Sprite);
        sprite.spriteFrame = spriteFrame;
        }
        oops.res.loadRemote<ImageAsset>(this.url, opt, onComplete);
         */;
        _proto.loadRemote = function loadRemote(url) {
          var options = null;
          var onComplete = null;
          if ((arguments.length <= 1 ? 0 : arguments.length - 1) == 2) {
            options = arguments.length <= 1 ? undefined : arguments[1];
            onComplete = arguments.length <= 2 ? undefined : arguments[2];
          } else {
            onComplete = arguments.length <= 1 ? undefined : arguments[1];
          }
          assetManager.loadRemote(url, options, onComplete);
        }
        //#endregion

        //#region 资源包管理
        /**
         * 加载资源包
         * @param url       资源地址
         * @param v         资源MD5版本号
         * @example
        var serverUrl = "http://192.168.1.8:8080/";         // 服务器地址
        var md5 = "8e5c0";                                  // Cocos Creator 构建后的MD5字符
        await oops.res.loadBundle(serverUrl,md5);
         */;
        _proto.loadBundle = function loadBundle(url, v) {
          return new Promise(function (resolve, reject) {
            assetManager.loadBundle(url, {
              version: v
            }, function (err, bundle) {
              if (err) {
                return error(err);
              }
              resolve(bundle);
            });
          });
        }

        /**
         * 释放资源包与包中所有资源
         * @param bundleName 资源地址
         */;
        _proto.removeBundle = function removeBundle(bundleName) {
          var bundle = assetManager.bundles.get(bundleName);
          if (bundle) {
            bundle.releaseAll();
            assetManager.removeBundle(bundle);
          }
        }
        //#endregion

        //#region 预加载资源
        /**
         * 加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         */;
        _proto.preload = function preload(bundleName, paths, type, onProgress, onComplete) {
          var args = null;
          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
            args.bundle = this.defaultBundleName;
          }
          args.preload = true;
          this.loadByArgs(args);
        }

        /**
         * 异步加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         */;
        _proto.preloadAsync = function preloadAsync(bundleName, paths, type) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            _this.preload(bundleName, paths, type, function (err, data) {
              if (err) {
                warn(err.message);
              }
              resolve(data);
            });
          });
        }

        /**
         * 预加载文件夹中的资源
         * @param bundleName    远程包名
         * @param dir           文件夹名
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         */;
        _proto.preloadDir = function preloadDir(bundleName, dir, type, onProgress, onComplete) {
          var args = null;
          if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
            args.bundle = this.defaultBundleName;
          }
          args.dir = args.paths;
          args.preload = true;
          this.loadByArgs(args);
        }
        //#endregion

        //#region 资源加载、获取、释放
        /**
         * 加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         * @example
        oops.res.load("spine_path", sp.SkeletonData, (err: Error | null, sd: sp.SkeletonData) => {
        });
         */;
        _proto.load = function load(bundleName, paths, type, onProgress, onComplete) {
          var args = null;
          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
            args.bundle = this.defaultBundleName;
          }
          this.loadByArgs(args);
        }

        /**
         * 异步加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         */;
        _proto.loadAsync = function loadAsync(bundleName, paths, type) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            _this2.load(bundleName, paths, type, function (err, asset) {
              if (err) {
                warn(err.message);
              }
              resolve(asset);
            });
          });
        }

        /**
         * 加载文件夹中的资源
         * @param bundleName    远程包名
         * @param dir           文件夹名
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         * @example
        // 加载进度事件
        var onProgressCallback = (finished: number, total: number, item: any) => {
        console.log("资源加载进度", finished, total);
        }
        // 加载完成事件
        var onCompleteCallback = () => {
        console.log("资源加载完成");
        }
        oops.res.loadDir("game", onProgressCallback, onCompleteCallback);
         */;
        _proto.loadDir = function loadDir(bundleName, dir, type, onProgress, onComplete) {
          var args = null;
          if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
            args.bundle = this.defaultBundleName;
          }
          args.dir = args.paths;
          this.loadByArgs(args);
        }

        /**
         * 通过资源相对路径释放资源
         * @param path          资源路径
         * @param bundleName    远程资源包名
         */;
        _proto.release = function release(path, bundleName) {
          if (bundleName === void 0) {
            bundleName = this.defaultBundleName;
          }
          var bundle = assetManager.getBundle(bundleName);
          if (bundle) {
            var asset = bundle.get(path);
            if (asset) {
              this.releasePrefabtDepsRecursively(asset);
            }
          }
        }

        /**
         * 通过相对文件夹路径删除所有文件夹中资源
         * @param path          资源文件夹路径
         * @param bundleName    远程资源包名
         */;
        _proto.releaseDir = function releaseDir(path, bundleName) {
          var _this3 = this;
          if (bundleName === void 0) {
            bundleName = this.defaultBundleName;
          }
          var bundle = assetManager.getBundle(bundleName);
          if (bundle) {
            var infos = bundle.getDirWithPath(path);
            if (infos) {
              infos.map(function (info) {
                _this3.releasePrefabtDepsRecursively(info.uuid);
              });
            }
            if (path == "" && bundleName != "resources") {
              assetManager.removeBundle(bundle);
            }
          }
        }

        /** 释放预制依赖资源 */;
        _proto.releasePrefabtDepsRecursively = function releasePrefabtDepsRecursively(uuid) {
          if (uuid instanceof Asset) {
            uuid.decRef();
            // assetManager.releaseAsset(uuid);
          } else {
            var asset = assetManager.assets.get(uuid);
            if (asset) {
              asset.decRef();
              // assetManager.releaseAsset(asset);
            }
          }
        }

        /**
         * 获取资源
         * @param path          资源路径
         * @param type          资源类型
         * @param bundleName    远程资源包名
         */;
        _proto.get = function get(path, type, bundleName) {
          if (bundleName === void 0) {
            bundleName = this.defaultBundleName;
          }
          var bundle = assetManager.getBundle(bundleName);
          return bundle.get(path, type);
        }
        //#endregion
        ;

        _proto.parseLoadResArgs = function parseLoadResArgs(paths, type, onProgress, onComplete) {
          var pathsOut = paths;
          var typeOut = type;
          var onProgressOut = onProgress;
          var onCompleteOut = onComplete;
          if (onComplete === undefined) {
            var isValidType = js.isChildClassOf(type, Asset);
            if (onProgress) {
              onCompleteOut = onProgress;
              if (isValidType) {
                onProgressOut = null;
              }
            } else if (onProgress === undefined && !isValidType) {
              onCompleteOut = type;
              onProgressOut = null;
              typeOut = null;
            }
            if (onProgress !== undefined && !isValidType) {
              onProgressOut = type;
              typeOut = null;
            }
          }
          return {
            paths: pathsOut,
            type: typeOut,
            onProgress: onProgressOut,
            onComplete: onCompleteOut
          };
        };
        _proto.loadByBundleAndArgs = function loadByBundleAndArgs(bundle, args) {
          if (args.dir) {
            if (args.preload) {
              bundle.preloadDir(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.loadDir(args.paths, args.type, args.onProgress, args.onComplete);
            }
          } else {
            if (args.preload) {
              bundle.preload(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            }
          }
        };
        _proto.loadByArgs = /*#__PURE__*/function () {
          var _loadByArgs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
            var bundle, v;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!args.bundle) {
                    _context.next = 13;
                    break;
                  }
                  bundle = assetManager.bundles.get(args.bundle); // 获取缓存中的资源包
                  if (!bundle) {
                    _context.next = 6;
                    break;
                  }
                  this.loadByBundleAndArgs(bundle, args);
                  _context.next = 11;
                  break;
                case 6:
                  v = this.cdn ? this.bundles.get(args.bundle) : "";
                  _context.next = 9;
                  return this.loadBundle(args.bundle, v);
                case 9:
                  bundle = _context.sent;
                  if (bundle) this.loadByBundleAndArgs(bundle, args);
                case 11:
                  _context.next = 14;
                  break;
                case 13:
                  this.loadByBundleAndArgs(resources, args);
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadByArgs(_x) {
            return _loadByArgs.apply(this, arguments);
          }
          return loadByArgs;
        }() /** 打印缓存中所有资源信息 */;
        _proto.dump = function dump() {
          assetManager.assets.forEach(function (value, key) {
            console.log(assetManager.assets.get(key));
          });
          console.log("\u5F53\u524D\u8D44\u6E90\u603B\u6570:" + assetManager.assets.count);
        };
        _createClass(ResLoader, [{
          key: "maxConcurrency",
          get: /** 下载时的最大并发数 - 项目设置 -> 项目数据 -> 资源下载并发数，设置默认值；初始值为15 */
          function get() {
            return assetManager.downloader.maxConcurrency;
          },
          set: function set(value) {
            assetManager.downloader.maxConcurrency = value;
          }

          /** 下载时每帧可以启动的最大请求数 - 默认值为15 */
        }, {
          key: "maxRequestsPerFrame",
          get: function get() {
            return assetManager.downloader.maxRequestsPerFrame;
          },
          set: function set(value) {
            assetManager.downloader.maxRequestsPerFrame = value;
          }

          /** 失败重试次数 - 默认值为0 */
        }, {
          key: "maxRetryCount",
          get: function get() {
            return assetManager.downloader.maxRetryCount;
          },
          set: function set(value) {
            assetManager.downloader.maxRetryCount = value;
          }

          /** 重试的间隔时间，单位为毫秒 - 默认值为2000毫秒 */
        }, {
          key: "retryInterval",
          get: function get() {
            return assetManager.downloader.retryInterval;
          },
          set: function set(value) {
            assetManager.downloader.retryInterval = value;
          }
        }]);
        return ResLoader;
      }());
      var resLoader = exports('resLoader', new ResLoader());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResolutionAutoFit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, view, ResolutionPolicy, size, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      size = module.size;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e5d8aIjX9NO3ox3KMWTDbsA", "ResolutionAutoFit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CHECK_INTERVAL = 0.1;
      var ResolutionAutoFit = exports('ResolutionAutoFit', (_dec = ccclass('tgxResolutionAutoFit'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResolutionAutoFit, _Component);
        function ResolutionAutoFit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._oldSize = size();
          _this.lastCheckTime = 0;
          return _this;
        }
        var _proto = ResolutionAutoFit.prototype;
        _proto.start = function start() {
          this.adjustResolutionPolicy();
        };
        _proto.update = function update(deltaTime) {
          this.lastCheckTime += deltaTime;
          if (this.lastCheckTime < CHECK_INTERVAL) {
            return;
          }
          this.lastCheckTime = 0;
          this.adjustResolutionPolicy();
        };
        _proto.adjustResolutionPolicy = function adjustResolutionPolicy() {
          var winSize = view.getVisibleSize();
          if (!this._oldSize.equals(winSize)) {
            var ratio = winSize.width / winSize.height;
            var drs = view.getDesignResolutionSize();
            var drsRatio = drs.width / drs.height;
            if (ratio > drsRatio) {
              //wider than desgin. fixed height
              view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
            } else {
              //
              view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
            }
            this._oldSize.set(winSize);
          }
        };
        return ResolutionAutoFit;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConst.ts'], function (exports) {
  var _createClass, cclegacy, resources, assetManager, GameConst;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      assetManager = module.assetManager;
    }, function (module) {
      GameConst = module.GameConst;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b666cLPxptFbq3Cc9VNNPIW", "ResourceMgr", undefined);
      var ResItem = function ResItem() {
        this.url = void 0;
        this.isLoading = false;
        this.callbackArr = [];
      };
      var ResourceMgr = exports('ResourceMgr', /*#__PURE__*/function () {
        function ResourceMgr() {
          this.loadingQueue = [];
        }
        var _proto = ResourceMgr.prototype;
        _proto.loadRes = function loadRes(url, type, callback) {
          var _this = this;
          var cache = resources.get(url, type);
          if (cache) {
            if (callback) {
              setTimeout(function () {
                callback(null, cache);
              }, 10);
            }
            return;
          }
          var loadingItem = this.loadingQueue[url];
          if (!loadingItem) {
            loadingItem = this.loadingQueue[url] = new ResItem();
            loadingItem.url = url;
          }
          loadingItem.callbackArr.push(callback);
          if (!loadingItem.isLoading) {
            loadingItem.isLoading = true;
            resources.load(url, type, function (err, asset) {
              delete _this.loadingQueue[url];
              for (var k in loadingItem.callbackArr) {
                var cb = loadingItem.callbackArr[k];
                if (cb) {
                  cb(err, asset);
                }
              }
            });
          }
        }
        /**
         * 通过子模块加载资源
         * 
         **@param {string} moduleName 子模块名 --ModuleDef
         * @param {string} resPath 资源路径
         * @param {*} resType 资源类型
         * @return {*}
         * 
         */;
        _proto.loadResByModuleBundle = function loadResByModuleBundle(moduleName, resPath, resType, onComplete) {
          var bundle = assetManager.getBundle(moduleName);
          if (bundle) {
            bundle.load(resPath, resType, onComplete);
          } else {
            if (onComplete) onComplete(new Error("bundle not find:" + moduleName), null);
          }
        };
        _proto.releaseByModuleBundle = function releaseByModuleBundle(moduleName, resPath, resType) {
          var bundle = assetManager.getBundle(moduleName);
          if (bundle) {
            bundle.release(resPath, resType);
          }
        }
        /**
         * 通过子模块预加载加载资源
         * 
         **@param {string} moduleName 子模块名 --ModuleDef
         * @param {string} resPath 资源路径
         * @param {*} resType 资源类型
         * @return {*}
         * 
         */;
        _proto.preloadResByModuleBundle = function preloadResByModuleBundle(moduleName, paths, resType, onComplete) {
          var bundle = assetManager.getBundle(moduleName);
          if (bundle) {
            bundle.preload(paths, resType, onComplete);
          } else {
            if (onComplete) onComplete(new Error("bundle not find:" + moduleName), null);
          }
        }
        /**
         * 加载对应地区的配置  比如area_config/china/xxx.json 只需要传入xxx.json 前缀这里会给拼接
         * @param moduleName
         * @param resPath 
         * @param resType 
         * @param onComplete 
         */;
        _proto.loadAreaConfigByModuleBundle = function loadAreaConfigByModuleBundle(moduleName, resPath, resType, onComplete) {
          resPath = "area_config/" + GameConst.curArea + "/" + resPath;
          ResourceMgr.inst.loadResByModuleBundle(moduleName, resPath, resType, onComplete);
        };
        _createClass(ResourceMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new ResourceMgr();
            }
            return this._inst;
          }
        }]);
        return ResourceMgr;
      }());
      ResourceMgr._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SafeJSON.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2aad8l/WzBPTIhr1W6SB9Pt", "SafeJSON", undefined);
      /**
       * @en call JSON mthods safely.
       * @zh 用于安全操作JSON相关函数
       * */
      var SafeJSON = exports('SafeJSON', /*#__PURE__*/function () {
        function SafeJSON() {}
        SafeJSON.parse = function parse(text, reciver) {
          try {
            return JSON.parse(text, reciver);
          } catch (error) {
            console.log(error);
            return null;
          }
        };
        SafeJSON.stringify = function stringify(value, replacer, space) {
          try {
            return JSON.stringify(value, replacer, space);
          } catch (error) {
            return '';
          }
        };
        return SafeJSON;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneDef.ts", ['cc', './ModuleDef.ts'], function (exports) {
  var cclegacy, ModuleDef;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "402c86/nTlCBZjjfWHP0t76", "SceneDef", undefined);
      var SceneDef = exports('SceneDef', function SceneDef() {});
      /**
       * @en start scene, must be loaded from this scene
       * @zh 首场景，必须从这个场景启动
       */
      SceneDef.START = {
        name: 'start',
        bundle: 'main'
      };
      /**
       * @en login scene 
       * @zh 登录场景
       * */
      SceneDef.LOGIN = {
        name: 'login',
        bundle: ModuleDef.BASIC
      };
      /**
       * @en login scene , after login, will jump to this scene
       * @zh 主大厅场景，登录成功后会首先进入这个场景
      */
      SceneDef.LOBBY = {
        name: 'lobby',
        bundle: ModuleDef.BASIC
      };
      /**
       * @en create role scene, after login, if user has no role, will jump to this scene
       * @zh 创建角色场景，登录成功后如果没有创建过角色，会跳转到此场景
       **/
      SceneDef.CREATE_ROLE = {
        name: 'create_role',
        bundle: ModuleDef.BASIC
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, assetManager, director;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      director = module.director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a97b9Z9/ixN3o1FLVqGpfE9", "SceneUtils", undefined);
      var ISceneInfo = exports('ISceneInfo', function ISceneInfo() {
        this.name = void 0;
        this.bundle = void 0;
      });
      var SceneUtil = exports('SceneUtil', /*#__PURE__*/function () {
        function SceneUtil() {}
        SceneUtil.loadBundleSync = /*#__PURE__*/function () {
          var _loadBundleSync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(bundleName) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    assetManager.loadBundle(bundleName, function (err, bundle) {
                      if (err) {
                        return resolve(false);
                      }
                      return resolve(true);
                    });
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function loadBundleSync(_x) {
            return _loadBundleSync.apply(this, arguments);
          }
          return loadBundleSync;
        }();
        SceneUtil.unloadBundle = /*#__PURE__*/function () {
          var _unloadBundle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bundleName) {
            var bundle;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (bundleName) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  bundle = assetManager.getBundle(bundleName);
                  if (bundle) {
                    bundle.releaseAll();
                    assetManager.removeBundle(bundle);
                  }
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function unloadBundle(_x2) {
            return _unloadBundle.apply(this, arguments);
          }
          return unloadBundle;
        }();
        SceneUtil.reloadScene = /*#__PURE__*/function () {
          var _reloadScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    director.loadScene(director.getScene().name, function () {
                      resolve(true);
                    });
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function reloadScene() {
            return _reloadScene.apply(this, arguments);
          }
          return reloadScene;
        }();
        SceneUtil.loadScene = /*#__PURE__*/function () {
          var _loadScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(scene) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    tgx.AudioMgr.inst.audio.clearAll(); //切换场景关闭所有声音
                    var bundle = assetManager.getBundle(scene.bundle);
                    if (bundle) {
                      director.loadScene(scene.name, function () {
                        resolve(true);
                      });
                    } else {
                      assetManager.loadBundle(scene.bundle, function (err, bundle) {
                        if (bundle) {
                          director.loadScene(scene.name, function () {
                            resolve(true);
                          });
                        }
                      });
                    }
                  }));
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function loadScene(_x3) {
            return _loadScene.apply(this, arguments);
          }
          return loadScene;
        }();
        return SceneUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Singleton.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "90d2f0O319J+ZE51avxrXJS", "Singleton", undefined);
      /**
       * 单例模板
       */
      var Singleton = exports('Singleton', /*#__PURE__*/function () {
        function Singleton() {}
        //返回单例
        Singleton.inst = function inst(c) {
          if (!Singleton.instance) {
            Singleton.instance = new c();
          }
          return Singleton.instance;
        };
        return Singleton;
      }());
      Singleton.instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Start.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './SceneDef.ts', './GameConst.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Prefab, Node, game, assetManager, Component, director, GameUILayers, GameUILayerNames, ModuleDef, SceneDef, GameConst;
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
      Label = module.Label;
      Prefab = module.Prefab;
      Node = module.Node;
      game = module.game;
      assetManager = module.assetManager;
      Component = module.Component;
      director = module.director;
    }, function (module) {
      GameUILayers = module.GameUILayers;
      GameUILayerNames = module.GameUILayerNames;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      GameConst = module.GameConst;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "66e163GxmdDp7kaguqDvTVl", "Start", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // ========== config begin =================
      //the first scene after preloading completes.
      var _FPS = 61;
      var _firstScene = SceneDef.LOGIN;
      var _preloadBundles = [ModuleDef.BASIC];
      var _preloadScenes = [];
      var _preloadRes = [{
        bundle: ModuleDef.BASIC,
        url: 'ui_alert/UI_Alert',
        type: 'prefab'
      }, {
        bundle: ModuleDef.BASIC,
        url: 'ui_waiting/UI_Waiting',
        type: 'prefab'
      }, {
        bundle: ModuleDef.BASIC,
        url: 'ui_login/ui_login',
        type: 'prefab'
      },
      //加载多语言基础包数据
      {
        bundle: ModuleDef.BASIC,
        url: '',
        type: 'language'
      },
      //加载配置
      {
        bundle: ModuleDef.BASIC,
        url: 'config/ruleconfig',
        type: 'config'
      }, {
        bundle: ModuleDef.BASIC,
        url: 'config/headconfig',
        type: 'config'
      }, {
        bundle: ModuleDef.BASIC,
        url: 'roomconfig',
        type: 'areaConfig'
      }, {
        bundle: ModuleDef.BASIC,
        url: 'shopconfig',
        type: 'areaConfig'
      }];

      // ========= config end =====================

      if (_preloadScenes.indexOf(_firstScene) == -1) {
        _preloadScenes.push(_firstScene);
      }
      for (var i = 0; i < _preloadScenes.length; ++i) {
        var sceneInfo = _preloadScenes[i];
        var idx = _preloadBundles.indexOf(sceneInfo.bundle);
        if (idx == -1) {
          _preloadBundles.push(sceneInfo.bundle);
        }
        _preloadRes.push({
          bundle: sceneInfo.bundle,
          url: sceneInfo.name,
          type: 'scene'
        });
      }
      var _loadingText = ['Loading.', 'Loading..', 'Loading...'];
      var _totalNum = _preloadBundles.length + _preloadRes.length;
      var Start = exports('Start', (_dec = ccclass('Start'), _dec2 = property(Label), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Start, _Component);
        function Start() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txtLoading", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiCanvasPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingBar", _descriptor3, _assertThisInitialized(_this));
          _this._percent = '';
          _this._numCurrentLoaded = 0;
          return _this;
        }
        var _proto = Start.prototype;
        _proto.start = function start() {
          var urlParams = this.getUrlParams();
          var netLogParam = urlParams['netlog'];

          // 将参数值转换为布尔值 (支持: true/false, 1/0, yes/no)
          if (netLogParam !== undefined) {
            GameConst.openNetworkLog = ['true', '1', 'yes'].includes(netLogParam.toLowerCase());
          }
          game.frameRate = _FPS;
          tgx.UIMgr.inst.setup(this.uiCanvasPrefab, GameUILayers.NUM, GameUILayerNames);
          this.preloadBundle(0);
        };
        _proto.getUrlParams = function getUrlParams() {
          var params = {};
          var queryString = window.location.search.substring(1);
          var paramPairs = queryString.split('&');
          for (var _iterator = _createForOfIteratorHelperLoose(paramPairs), _step; !(_step = _iterator()).done;) {
            var pair = _step.value;
            var _pair$split = pair.split('='),
              key = _pair$split[0],
              value = _pair$split[1];
            if (key) {
              params[key] = decodeURIComponent(value || '');
            }
          }
          return params;
        };
        _proto.onResLoaded = function onResLoaded() {
          this._numCurrentLoaded++;
          this._percent = ~~(this._numCurrentLoaded / _totalNum * 100) + '%';
        };
        _proto.preloadBundle = function preloadBundle(idx) {
          var _this2 = this;
          assetManager.loadBundle(_preloadBundles[idx], null, function (err, bundle) {
            console.log('module:<' + _preloadBundles[idx] + '>loaded.');
            idx++;
            _this2.onResLoaded();
            if (idx < _preloadBundles.length) {
              _this2.preloadBundle(idx);
            } else {
              _this2.preloadRes(0);
            }
          });
        };
        _proto.preloadRes = function preloadRes(idx) {
          var _this3 = this;
          var res = _preloadRes[idx];
          var onComplete = function onComplete() {
            idx++;
            _this3.onResLoaded();
            if (idx < _preloadRes.length) {
              _this3.preloadRes(idx);
            } else {
              _this3.onPreloadingComplete();
            }
          };
          if (res.bundle == ModuleDef.BASIC) {
            Start.basicPreloadRes(res, onComplete.bind(this));
            return;
          }
          var bundle = assetManager.getBundle(res.bundle);
          if (bundle) {
            if (res.type == 'prefab') {
              bundle.preload(res.url, Prefab, onComplete.bind(this));
            } else if (res.type == 'scene') {
              bundle.preloadScene(res.url, onComplete.bind(this));
            }
          }
        };
        _proto.onPreloadingComplete = /*#__PURE__*/function () {
          var _onPreloadingComplete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  director.loadScene(_firstScene.name, function () {
                    //设置场景的多语言显示
                    // UIMgr.inst.language.setSceneLanguage();
                  });
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onPreloadingComplete() {
            return _onPreloadingComplete.apply(this, arguments);
          }
          return onPreloadingComplete;
        }();
        _proto.update = function update(deltaTime) {
          if (this._percent) {
            this.txtLoading.string = 'Loading...' + this._percent;
          } else {
            var _idx = Math.floor(game.totalTime / 1000) % 3;
            this.txtLoading.string = _loadingText[_idx];
          }
          this.loadingBar.setScale(this._numCurrentLoaded / _totalNum, 1, 1);
        };
        return Start;
      }(Component), _class3.basicPreloadRes = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiCanvasPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Str.ts", ['cc', './Num.ts'], function (exports) {
  var cclegacy, Num;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6138eiAosJOSpKK1yOCcEt8", "Str", undefined);
      var Str = exports('Str', /*#__PURE__*/function () {
        function Str() {}
        /**
         * 字符串format函数,abc{0}{1}{2} 中的0、1、2位置会按顺序放入paramArr参数内容
         * @param content 需要格式化的字符串
         * @param paramArr 放入content的可变参数
         */
        Str.format = function format(content) {
          for (var _len = arguments.length, paramArr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            paramArr[_key - 1] = arguments[_key];
          }
          for (var i = 0; i < paramArr.length; ++i) {
            var reg = Str.getFormatReg(i); //替换的正则表达式
            content = content.replace(reg, paramArr[i].toString());
          }
          return content;
        }

        //返回字符串全文替换的正则表达式
        ;

        Str.getFormatReg = function getFormatReg(i) {
          switch (i) {
            case 0:
              return /\{0\}/g;
            case 1:
              return /\{1\}/g;
            case 2:
              return /\{2\}/g;
            case 3:
              return /\{3\}/g;
            case 4:
              return /\{4\}/g;
            case 5:
              return /\{5\}/g;
            case 6:
              return /\{6\}/g;
            case 7:
              return /\{7\}/g;
            case 8:
              return /\{8\}/g;
            case 9:
              return /\{9\}/g;
            case 10:
              return /\{10\}/g;
            case 11:
              return /\{11\}/g;
            case 12:
              return /\{12\}/g;
          }
          return null;
        }

        /**
         * 字符串分割成数组
         * @param str 字符串
         * @param sep 分割符
         */;
        Str.split = function split(str, sep) {
          return str.split(sep);
        }

        /**
         * 生成随机字符串
         * @param len 长度
         */;
        Str.getRandStr = function getRandStr(len) {
          len = len || 32;
          var $chars = 'ABCDEFGHIJKLMNOPQRSTUCWXYZabcdefghijklmnopqrstuvwxyz12345678p';
          var maxPos = $chars.length;
          var pwd = '';
          for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
          }
          return pwd;
        }

        /**
         * 字符串删除空格后是否为空 true:空字符串
         * @param param 判断字符串
         */;
        Str.isEmpty = function isEmpty(param) {
          if (typeof param == "undefined" || param == null) return true;
          param = Str.delSpace(param); //删除空格
          return param == "";
        }

        /**
         * 是否为网页链接
         * @param param
         */;
        Str.isUrl = function isUrl(param) {
          if (this.isEmpty(param)) return false;
          return this.isContain(param, "http");
        }

        /**
         * 删除字符串中所有空格
         * @param param 字符串
         */;
        Str.delSpace = function delSpace(param) {
          return param.replace(/\s+/g, "");
        }

        /**
         * 删除字符串左右空格
         * @param param 字符串
         */;
        Str.delSpaceLr = function delSpaceLr(param) {
          return param.replace(/^\s+|\s+$/g, "");
        }

        /**
         * 删除字符串种回车、换行
         * @param param 字符串
         */;
        Str.delRn = function delRn(param) {
          return param.replace(/[\r\n]/g, "");
        }

        /**
         * 返回显示的金额类型，默认显示2位小数
         * @param money 金额
         * @param num 显示小数点位数
         */;
        Str.decimal = function decimal(money, num) {
          if (num === void 0) {
            num = 2;
          }
          var param = typeof money == "string" ? parseFloat(money) : money;
          return param.toFixed(num);
        }

        /**
         * 两字符串当成float相加，保留两位小数
         * @param str1  字符串1
         * @param str2  字符串2
         * @param num 显示小数点位数
         * @returns 
         */;
        Str.add2 = function add2(str1, str2, num) {
          if (num === void 0) {
            num = 2;
          }
          // 辅助函数：移除字符串中的逗号并解析为浮点数
          var parseNumber = function parseNumber(str) {
            // 移除所有逗号
            var cleanStr = str.replace(/,/g, '');
            // 解析处理后的字符串
            return parseFloat(cleanStr);
          };
          var f1 = parseNumber(str1);
          var f2 = parseNumber(str2);

          // 使用 Str.decimal 方法格式化结果，保留指定小数位数
          return Str.decimal(f1 + f2, num);
        }

        /**
         * 把number进行格式化(TS的number类型实际是float)
         * @param strNum 
         */;
        Str.parse = function parse(num) {
          return num.toString();
        }

        /**
         * 进行url转码
         * @param url 
         */;
        Str.encodeURI = function (_encodeURI) {
          function encodeURI(_x) {
            return _encodeURI.apply(this, arguments);
          }
          encodeURI.toString = function () {
            return _encodeURI.toString();
          };
          return encodeURI;
        }(function (url) {
          return encodeURI(url);
        }

        /**
         * 加负号
         * @param num 要加符号的数字
         */);
        Str.minus = function minus(strNum) {
          var num = Num.parse(strNum);
          num = -num;
          return num.toString();
        }

        //字符串转ASCII码后，取整型值
        ;

        Str.getASCIINum = function getASCIINum(str) {
          var res = 0;
          var n = str.length;
          for (var i = 0; i < n; ++i) {
            var num = str.charCodeAt(0);
            res += num;
          }
          return res;
        }

        /**
         * tring中查找是否包含某个字符串
         * @param str
         * @param subStr
         */;
        Str.isContain = function isContain(str, subStr) {
          //return (str.search(subStr) != -1);
          var pos = str.indexOf(subStr);
          if (pos != -1) return true;
          return false;
        }

        /**
         * tring中查找是否以某个字符串开始
         * @param str
         * @param subStr
         */;
        Str.isBeg = function isBeg(str, subStr) {
          return str.startsWith(subStr);
        };
        return Str;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tgx.ts", ['cc', './SceneUtils.ts', './AudioMgr.ts', './InputMgr.ts', './ResourceMgr.ts', './SafeJSON.ts', './ResolutionAutoFit.ts', './ModuleContext.ts', './FPSCamera.ts', './FollowCamera2D.ts', './FreeCamera.ts', './ThirdPersonCamera.ts', './CharacterMovement.ts', './CharacterMovement2D.ts', './EasyController.ts', './ThirdPersonCameraCtrl.ts', './UIJoystick.ts', './UIAlert.ts', './Layout_UIWaiting.ts', './UIWaiting.ts', './EventDispatcher.ts', './UIController.ts', './UILayers.ts', './UIMgr.ts', './URLUtils.ts', './UITip.ts'], function () {
  var cclegacy, ISceneInfo, SceneUtil, AudioMgr, InputMgr, ResourceMgr, SafeJSON, ResolutionAutoFit, ModuleContext, FPSCamera, FollowCamera2D, FreeCamera, ThirdPersonCamera, CharacterMovement, CharacterMovement2D, EasyController, EasyControllerEvent, ThirdPersonCameraCtrl, UIJoystick, Layout_UIAlert, UIAlert, Layout_UIWaiting, UIWaiting, EventDispatcher, UIController, UILayers, UILayerNames, UIMgr, URLUtils, UITip;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ISceneInfo = module.ISceneInfo;
      SceneUtil = module.SceneUtil;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      InputMgr = module.InputMgr;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      SafeJSON = module.SafeJSON;
    }, function (module) {
      ResolutionAutoFit = module.ResolutionAutoFit;
    }, function (module) {
      ModuleContext = module.ModuleContext;
    }, function (module) {
      FPSCamera = module.FPSCamera;
    }, function (module) {
      FollowCamera2D = module.FollowCamera2D;
    }, function (module) {
      FreeCamera = module.FreeCamera;
    }, function (module) {
      ThirdPersonCamera = module.ThirdPersonCamera;
    }, function (module) {
      CharacterMovement = module.CharacterMovement;
    }, function (module) {
      CharacterMovement2D = module.CharacterMovement2D;
    }, function (module) {
      EasyController = module.EasyController;
      EasyControllerEvent = module.EasyControllerEvent;
    }, function (module) {
      ThirdPersonCameraCtrl = module.ThirdPersonCameraCtrl;
    }, function (module) {
      UIJoystick = module.UIJoystick;
    }, function (module) {
      Layout_UIAlert = module.Layout_UIAlert;
      UIAlert = module.UIAlert;
    }, function (module) {
      Layout_UIWaiting = module.Layout_UIWaiting;
    }, function (module) {
      UIWaiting = module.UIWaiting;
    }, function (module) {
      EventDispatcher = module.EventDispatcher;
    }, function (module) {
      UIController = module.UIController;
    }, function (module) {
      UILayers = module.UILayers;
      UILayerNames = module.UILayerNames;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      URLUtils = module.URLUtils;
    }, function (module) {
      UITip = module.UITip;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f6affkIabhNnqd5KRuhkVzy", "tgx", undefined);
      var __tgx__ = {
        //base
        ISceneInfo: ISceneInfo,
        SceneUtil: SceneUtil,
        AudioMgr: AudioMgr,
        InputMgr: InputMgr,
        ResourceMgr: ResourceMgr,
        SafeJSON: SafeJSON,
        ResolutionAutoFit: ResolutionAutoFit,
        ModuleContext: ModuleContext,
        //camera
        FPSCamera: FPSCamera,
        FollowCamera2D: FollowCamera2D,
        FreeCamera: FreeCamera,
        ThirdPersonCamera: ThirdPersonCamera,
        //easy controller
        CharacterMovement: CharacterMovement,
        CharacterMovement2D: CharacterMovement2D,
        EasyController: EasyController,
        EasyControllerEvent: EasyControllerEvent,
        ThirdPersonCameraCtrl: ThirdPersonCameraCtrl,
        UIJoystick: UIJoystick,
        //ui framework
        Layout_UIAlert: Layout_UIAlert,
        UIAlert: UIAlert,
        Layout_UIWaiting: Layout_UIWaiting,
        UIWaiting: UIWaiting,
        EventDispatcher: EventDispatcher,
        UIController: UIController,
        UILayers: UILayers,
        UILayerNames: UILayerNames,
        UIMgr: UIMgr,
        URLUtils: URLUtils,
        UITip: UITip
      };
      globalThis['tgx'] = __tgx__;

      //下面是声明，编程时提示。
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ThirdPersonCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, v3, Node, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "0e5acyZ1V5MwY4MXWYmJeO2", "ThirdPersonCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var v3_1 = v3();
      var v3_2 = v3();
      var ROTATION_STRENGTH = 20.0;
      var ThirdPersonCamera = exports('ThirdPersonCamera', (_dec = ccclass('tgxThirdPersonCamera'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ThirdPersonCamera, _Component);
        function ThirdPersonCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lookAtOffset", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomSensitivity", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lenMin", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lenMax", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "len", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateVHSeparately", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tweenTime", _descriptor8, _assertThisInitialized(_this));
          _this._targetLen = 0;
          _this._targetAngles = v3();
          return _this;
        }
        var _proto = ThirdPersonCamera.prototype;
        _proto.start = function start() {
          this._targetLen = this.len;
          this._targetAngles.set(this.node.eulerAngles);
        };
        _proto.setLenFactor = function setLenFactor(factor) {
          var len = (this.lenMax - this.lenMin) * factor + this.lenMin;
          this._targetLen = len;
        };
        _proto.setTargetAngles = function setTargetAngles(x, y, z) {
          this._targetAngles.set(x, y, z);
        };
        _proto.lateUpdate = function lateUpdate(deltaTime) {
          if (!this.target) {
            return;
          }
          var t = Math.min(deltaTime / this.tweenTime, 1.0);
          //rotation
          v3_1.set(this.node.eulerAngles);
          Vec3.lerp(v3_1, v3_1, this._targetAngles, t);
          this.node.setRotationFromEuler(v3_1);

          //lookat
          v3_1.set(this.target.worldPosition);
          v3_1.add(this.lookAtOffset);

          //len and position
          this.len = this.len * (1.0 - t) + this._targetLen * t;
          v3_2.set(this.node.forward);
          v3_2.multiplyScalar(this.len);
          v3_1.subtract(v3_2);
          this.node.setPosition(v3_1);
        };
        _proto.onCameraRotate = function onCameraRotate(deltaX, deltaY) {
          var eulerAngles = this.node.eulerAngles;
          if (this.rotateVHSeparately) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
              deltaY = 0;
            } else {
              deltaX = 0;
            }
          }
          this._targetAngles.set(eulerAngles.x + deltaX * ROTATION_STRENGTH, eulerAngles.y + deltaY * ROTATION_STRENGTH, eulerAngles.z);
        };
        _proto.onCameraZoom = function onCameraZoom(delta) {
          this._targetLen += delta * this.zoomSensitivity;
          if (this._targetLen < this.lenMin) {
            this._targetLen = this.lenMin;
          }
          if (this._targetLen > this.lenMax) {
            this._targetLen = this.lenMax;
          }
        };
        return ThirdPersonCamera;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lookAtOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zoomSensitivity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lenMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lenMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "len", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rotateVHSeparately", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tweenTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ThirdPersonCameraCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ThirdPersonCamera.ts', './EasyController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ThirdPersonCamera, EasyController, EasyControllerEvent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ThirdPersonCamera = module.ThirdPersonCamera;
    }, function (module) {
      EasyController = module.EasyController;
      EasyControllerEvent = module.EasyControllerEvent;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6ea3cEV3klIAZnz+Ay66ut+", "ThirdPersonCameraCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ThirdPersonCameraCtrl = exports('ThirdPersonCameraCtrl', (_dec = ccclass('tgxThirdPersonCameraCtrl'), _dec(_class = /*#__PURE__*/function (_ThirdPersonCamera) {
        _inheritsLoose(ThirdPersonCameraCtrl, _ThirdPersonCamera);
        function ThirdPersonCameraCtrl() {
          return _ThirdPersonCamera.apply(this, arguments) || this;
        }
        var _proto = ThirdPersonCameraCtrl.prototype;
        _proto.start = function start() {
          EasyController.on(EasyControllerEvent.CAMERA_ROTATE, this.onCameraRotate, this);
          EasyController.on(EasyControllerEvent.CAMERA_ZOOM, this.onCameraZoom, this);
          this._targetLen = this.len;
          this._targetAngles.set(this.node.eulerAngles);
        };
        _proto.onDestroy = function onDestroy() {
          EasyController.off(EasyControllerEvent.CAMERA_ROTATE, this.onCameraRotate, this);
          EasyController.off(EasyControllerEvent.CAMERA_ZOOM, this.onCameraZoom, this);
        };
        return ThirdPersonCameraCtrl;
      }(ThirdPersonCamera)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolCsv.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8904biaRSNHqKx1HXFvcpZY", "ToolCsv", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //读取csv文件类
      var ToolCsv = exports('ToolCsv', /*#__PURE__*/function () {
        function ToolCsv() {}
        //解析csv文件
        ToolCsv.parseCSVData = function parseCSVData(csvData) {
          //根据换行符分割数据
          var lines = csvData.split('\n');

          //2维表格
          var tableData = [];
          //循环解析每行数据
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim(); //去掉头尾空格
            if (line === '') {
              continue;
            }
            //使用逗号分割一行数据
            var cells = line.split(',');
            //把一行的所有数据添加到表格
            tableData.push(cells);
          }
          console.log(tableData);
          return tableData;
        };
        return ToolCsv;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolPos.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, v2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v2 = module.v2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d9a42DwE1BEbYjSOdK05f3D", "ToolPos", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 坐标变换工具类
       */
      var ToolPos = exports('ToolPos', /*#__PURE__*/function () {
        function ToolPos() {}
        /**
         * 得到一个节点的世界坐标
         * node的原点在中心
         * @param {*} node
         */
        ToolPos.localConvertWorldPointAR = function localConvertWorldPointAR(node) {
          if (node) {
            return node.convertToWorldSpaceAR(v2(0, 0));
          }
          return null;
        }

        /**
         * 得到一个节点的世界坐标
         * node的原点在左下边
         * @param {*} node
         */;
        ToolPos.localConvertWorldPoint = function localConvertWorldPoint(node) {
          if (node) {
            return node.convertToWorldSpace(v2(0, 0));
          }
          return null;
        }

        /**
         * 把一个世界坐标的点，转换到某个节点下的坐标
         * 原点在node中心
         * @param {*} node
         * @param {*} worldPoint
         */;
        ToolPos.worldConvertLocalPointAR = function worldConvertLocalPointAR(node, worldPoint) {
          if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
          }
          return null;
        }

        /**
         * 把一个世界坐标的点，转换到某个节点下的坐标
         * 原点在node左下角
         * @param {*} node
         * @param {*} worldPoint
         */;
        ToolPos.worldConvertLocalPoint = function worldConvertLocalPoint(node, worldPoint) {
          if (node) {
            return node.convertToNodeSpace(worldPoint);
          }
          return null;
        }

        /**
         * 把一个节点的本地坐标转到另一个节点的本地坐标下
         * 原点在node中心
         * @param {*} node
         * @param {*} targetNode
         */;
        ToolPos.convertOtherNodeSpaceAR = function convertOtherNodeSpaceAR(node, targetNode) {
          if (!node || !targetNode) {
            return null;
          }
          //先转成世界坐标
          var worldPoint = this.localConvertWorldPointAR(node);
          return this.worldConvertLocalPointAR(targetNode, worldPoint);
        }

        /**
         * 把一个节点的本地坐标转到另一个节点的本地坐标下
         * 原点在node左下
         * @param {*} node
         * @param {*} targetNode
         */;
        ToolPos.convertOtherNodeSpace = function convertOtherNodeSpace(node, targetNode) {
          if (!node || !targetNode) {
            return null;
          }
          //先转成世界坐标
          var worldPoint = this.localConvertWorldPoint(node);
          return this.worldConvertLocalPoint(targetNode, worldPoint);
        };
        return ToolPos;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolUI.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "58718JsbuVNXoalFRYw+/WF", "ToolUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //ui工具类
      var toolUI = exports('toolUI', /*#__PURE__*/function () {
        function toolUI() {}
        /**
         * 查找所有子节点，然后回调
         * @param node 被查找的节点
         * @param callback 查找成功一个节点后回调的函数
         */
        toolUI.traverseAllChildren = function traverseAllChildren(node, callback) {
          // 先对当前节点执行回调函数（如果有需要的话）
          callback(node);

          // 获取当前节点的子节点数组
          var children = node.children;
          for (var i = 0; i < children.length; i++) {
            var _child = children[i];
            // 递归调用自身，继续遍历子节点
            toolUI.traverseAllChildren(_child, callback);
          }
        };
        return toolUI;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_Joystick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EasyController.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, KeyCode, UITransform, Input, input, director, isValid, Component, EasyControllerEvent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      KeyCode = module.KeyCode;
      UITransform = module.UITransform;
      Input = module.Input;
      input = module.input;
      director = module.director;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      EasyControllerEvent = module.EasyControllerEvent;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "0d836Ks7otIP4Uli0aFzr2O", "UI_Joystick", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /****
       * split screen into three parts.
       * ---------------------------------------------
       *                                              |
       *           1.camera rotation zone             |
       *                                              |
       *----------------------------------------------|
       *                      |                       |
       * 2.movement ctrl zone  | 3.camera rotation zone|
       *                      |                       |
       * ----------------------------------------------
       * 
       * multi-touch for camera zoom.
       *  */

      var UI_Joystick = exports('UI_Joystick', (_dec = ccclass('tgxUI_Joystick'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UI_Joystick, _Component);
        function UI_Joystick() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._ctrlRoot = null;
          _this._ctrlPointer = null;
          _this._buttons = null;
          _this._cameraSensitivity = 0.1;
          _this._distanceOfTwoTouchPoint = 0;
          _this._movementTouch = null;
          _this._cameraTouchA = null;
          _this._cameraTouchB = null;
          _this._fullscreen = null;
          _this._scene = null;
          _this._key2buttonMap = {};
          _this._keys = [];
          _this._degree = 0;
          _this._key2dirMap = null;
          return _this;
        }
        var _proto = UI_Joystick.prototype;
        _proto.onLoad = function onLoad() {
          UI_Joystick._inst = this;
          this._key2buttonMap[KeyCode.KEY_J] = 'btn_slot_0';
          this._key2buttonMap[KeyCode.KEY_K] = 'btn_slot_1';
          this._key2buttonMap[KeyCode.KEY_L] = 'btn_slot_2';
          this._key2buttonMap[KeyCode.KEY_U] = 'btn_slot_3';
          this._key2buttonMap[KeyCode.KEY_I] = 'btn_slot_4';
          var checkerCamera = this.node.getChildByName('checker_camera').getComponent(UITransform);
          checkerCamera.node.on(Input.EventType.TOUCH_START, this.onTouchStart_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_END, this.onTouchUp_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_CameraCtrl, this);
          var checkerMovement = this.node.getChildByName('checker_movement').getComponent(UITransform);
          checkerMovement.node.on(Input.EventType.TOUCH_START, this.onTouchStart_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_END, this.onTouchUp_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_Movement, this);
          this._fullscreen = this.node.getComponent(UITransform);
          this._ctrlRoot = this.node.getChildByName('ctrl').getComponent(UITransform);
          this._ctrlRoot.node.active = false;
          this._ctrlPointer = this._ctrlRoot.node.getChildByName('pointer');
          this._buttons = this.node.getChildByName('buttons');
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          this._scene = director.getScene();
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          this._scene = null;
          UI_Joystick._inst = null;
        };
        _proto.cleanKeyMap = function cleanKeyMap() {
          this._key2buttonMap = {};
        };
        _proto.bindKeyToButton = function bindKeyToButton(keyCode, btnName) {
          this._key2buttonMap[keyCode] = btnName;
        };
        _proto.setButtonVisible = function setButtonVisible(btnName, visible) {
          var _this$_buttons;
          var node = (_this$_buttons = this._buttons) == null ? void 0 : _this$_buttons.getChildByName(btnName);
          if (node) {
            node.active = visible;
          }
        };
        _proto.getButtonByName = function getButtonByName(btnName) {
          return this._buttons.getChildByName(btnName);
        };
        _proto.onTouchStart_Movement = function onTouchStart_Movement(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var x = touch.getUILocationX();
            var y = touch.getUILocationY();
            if (!this._movementTouch) {
              //we sub halfWidth,halfHeight here.
              //because, the touch event use left bottom as zero point(0,0), ui node use the center of screen as zero point(0,0)
              //this._ctrlRoot.setPosition(x - halfWidth, y - halfHeight, 0);

              var halfWidth = this._fullscreen.width / 2;
              var halfHeight = this._fullscreen.height / 2;
              this._ctrlRoot.node.active = true;
              this._ctrlRoot.node.setPosition(x - halfWidth, y - halfHeight, 0);
              this._ctrlPointer.setPosition(0, 0, 0);
              this._movementTouch = touch;
            }
          }
        };
        _proto.onTouchMove_Movement = function onTouchMove_Movement(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              var halfWidth = this._fullscreen.width / 2;
              var halfHeight = this._fullscreen.height / 2;
              var x = touch.getUILocationX();
              var y = touch.getUILocationY();
              var pos = this._ctrlRoot.node.position;
              var ox = x - halfWidth - pos.x;
              var oy = y - halfHeight - pos.y;
              var len = Math.sqrt(ox * ox + oy * oy);
              if (len <= 0) {
                return;
              }
              var dirX = ox / len;
              var dirY = oy / len;
              var radius = this._ctrlRoot.width / 2;
              if (len > radius) {
                len = radius;
                ox = dirX * radius;
                oy = dirY * radius;
              }
              this._ctrlPointer.setPosition(ox, oy, 0);

              // degree 0 ~ 360 based on x axis.
              var degree = Math.atan(dirY / dirX) / Math.PI * 180;
              if (dirX < 0) {
                degree += 180;
              } else {
                degree += 360;
              }
              this.emitEvent(EasyControllerEvent.MOVEMENT, degree, len / radius);
            }
          }
        };
        _proto.onTouchUp_Movement = function onTouchUp_Movement(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              this.emitEvent(EasyControllerEvent.MOVEMENT_STOP);
              this._movementTouch = null;
              this._ctrlRoot.node.active = false;
            }
          }
        };
        _proto.getDistOfTwoTouchPoints = function getDistOfTwoTouchPoints() {
          var touchA = this._cameraTouchA;
          var touchB = this._cameraTouchB;
          if (!touchA || !touchB) {
            return 0;
          }
          var dx = touchA.getLocationX() - touchB.getLocationX();
          var dy = touchB.getLocationY() - touchB.getLocationY();
          return Math.sqrt(dx * dx + dy * dy);
        };
        _proto.onTouchStart_CameraCtrl = function onTouchStart_CameraCtrl(event) {
          this.emitEvent(EasyControllerEvent.SCREEN_TOUCH_START, event);
          var touches = event.getAllTouches();
          this._cameraTouchA = null;
          this._cameraTouchB = null;
          for (var i = touches.length - 1; i >= 0; i--) {
            var touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              continue;
            }
            if (this._cameraTouchA == null) {
              this._cameraTouchA = touches[i];
            } else if (this._cameraTouchB == null) {
              this._cameraTouchB = touches[i];
              break;
            }
          }
          this._distanceOfTwoTouchPoint = this.getDistOfTwoTouchPoints();
        };
        _proto.onTouchMove_CameraCtrl = function onTouchMove_CameraCtrl(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var touchID = touch.getID();
            //two touches, do camera zoom.
            if (this._cameraTouchA && this._cameraTouchB) {
              console.log(touchID, this._cameraTouchA.getID(), this._cameraTouchB.getID());
              var needZoom = false;
              if (touchID == this._cameraTouchA.getID()) {
                this._cameraTouchA = touch;
                needZoom = true;
              }
              if (touchID == this._cameraTouchB.getID()) {
                this._cameraTouchB = touch;
                needZoom = true;
              }
              if (needZoom) {
                var newDist = this.getDistOfTwoTouchPoints();
                var delta = this._distanceOfTwoTouchPoint - newDist;
                this.emitEvent(EasyControllerEvent.CAMERA_ZOOM, delta);
                this._distanceOfTwoTouchPoint = newDist;
              }
            }
            //only one touch, do camera rotate.
            else if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              var dt = touch.getDelta();
              var rx = dt.y * this._cameraSensitivity;
              var ry = -dt.x * this._cameraSensitivity;
              this.emitEvent(EasyControllerEvent.CAMERA_ROTATE, rx, ry);
            }
          }
        };
        _proto.onTouchUp_CameraCtrl = function onTouchUp_CameraCtrl(event) {
          this.emitEvent(EasyControllerEvent.SCREEN_TOUCH_END, event);
          var touches = event.getAllTouches();
          var hasTouchA = false;
          var hasTouchB = false;
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var touchID = touch.getID();
            if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              hasTouchA = true;
            } else if (this._cameraTouchB && touchID == this._cameraTouchB.getID()) {
              hasTouchB = true;
            }
          }
          if (!hasTouchA) {
            this._cameraTouchA = null;
          }
          if (!hasTouchB) {
            this._cameraTouchB = null;
          }
        };
        _proto.onKeyDown = function onKeyDown(event) {
          var keyCode = event.keyCode;
          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this._keys.indexOf(keyCode) == -1) {
              this._keys.push(keyCode);
              this.updateDirection();
            }
          } else {
            var btnName = this._key2buttonMap[keyCode];
            if (btnName) {
              this.emitEvent(EasyControllerEvent.BUTTON, btnName);
            }
          }
        };
        _proto.onKeyUp = function onKeyUp(event) {
          var keyCode = event.keyCode;
          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            var index = this._keys.indexOf(keyCode);
            if (index != -1) {
              this._keys.splice(index, 1);
              this.updateDirection();
            }
          }
        };
        _proto.onMouseWheel = function onMouseWheel(event) {
          var delta = event.getScrollY() * 0.1;
          //console.log(delta);
          this.emitEvent(EasyControllerEvent.CAMERA_ZOOM, delta);
        };
        _proto.onButtonSlot = function onButtonSlot(event) {
          var btnName = event.target.name;
          this.emitEvent(EasyControllerEvent.BUTTON, btnName);
        };
        _proto.updateDirection = function updateDirection() {
          if (this._key2dirMap == null) {
            this._key2dirMap = {};
            this._key2dirMap[0] = -1;
            this._key2dirMap[KeyCode.KEY_A] = 180;
            this._key2dirMap[KeyCode.KEY_D] = 0;
            this._key2dirMap[KeyCode.KEY_W] = 90;
            this._key2dirMap[KeyCode.KEY_S] = 270;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_A] = 135;
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_D] = 45;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_A] = 225;
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_D] = 315;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_D] = this._key2dirMap[KeyCode.KEY_D];
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_A] = this._key2dirMap[KeyCode.KEY_A];
            this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S];
            this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W];
          }
          var keyCode0 = this._keys[this._keys.length - 1] || 0;
          var keyCode1 = this._keys[this._keys.length - 2] || 0;
          this._degree = this._key2dirMap[keyCode1 * 1000 + keyCode0];
          if (this._degree == null || this._degree < 0) {
            this.emitEvent(EasyControllerEvent.MOVEMENT_STOP);
          } else {
            this.emitEvent(EasyControllerEvent.MOVEMENT, this._degree, 1.0);
          }
        };
        _proto.emitEvent = function emitEvent(type, arg0, arg1, arg2, arg3, arg4) {
          if (isValid(this._scene)) {
            this._scene.emit(type, arg0, arg1, arg2, arg3, arg4);
          } else {
            console.log('oops!');
          }
        };
        _createClass(UI_Joystick, null, [{
          key: "inst",
          get: function get() {
            return this._inst;
          }
        }]);
        return UI_Joystick;
      }(Component), _class2._inst = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIAlert.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIController.ts', './UIMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, RichText, Button, Sprite, Component, Color, UIController, UIMgr;
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
      Label = module.Label;
      RichText = module.RichText;
      Button = module.Button;
      Sprite = module.Sprite;
      Component = module.Component;
      Color = module.Color;
    }, function (module) {
      UIController = module.UIController;
    }, function (module) {
      UIMgr = module.UIMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "7e91f8G1GtMQ4+Lvts9iEeD", "UIAlert", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIAlert = exports('Layout_UIAlert', (_dec = ccclass('tgxLayout_UIAlert'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(RichText), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property({
        type: Sprite,
        tooltip: "背景"
      }), _dec9 = property({
        type: Sprite,
        tooltip: "标题背景"
      }), _dec10 = property({
        type: Sprite,
        tooltip: "内容背景"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIAlert, _Component);
        function Layout_UIAlert() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "title", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentRich", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnOK", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnCancel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "titleBg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentBg", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIAlert;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentRich", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnOK", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnCancel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "titleBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "contentBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var UIAlertOptions = exports('UIAlertOptions', /*#__PURE__*/function () {
        function UIAlertOptions() {
          this._title = void 0;
          this._content = void 0;
          this._showCancel = void 0;
          this._cbClick = void 0;
          this._cbClickThisArg = void 0;
        }
        var _proto = UIAlertOptions.prototype;
        _proto.setTitle = function setTitle(title) {
          this._title = title;
          return this;
        };
        _proto.onClick = function onClick(cb, thisArg) {
          this._cbClick = cb;
          this._cbClickThisArg = thisArg;
          return this;
        };
        return UIAlertOptions;
      }());
      var UIAlert = exports('UIAlert', /*#__PURE__*/function (_UIController) {
        _inheritsLoose(UIAlert, _UIController);
        function UIAlert() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _UIController.call.apply(_UIController, [this].concat(args)) || this;
          _this2._options = void 0;
          return _this2;
        }
        /**
         * 显示一个提示对话框，对话框可以有一个按钮(只有确定按钮)，也可以有两个按钮(确定和取消)。
         * @param content 对话框内容
         * @param showCancel 是否显示取消按钮(true表示显示)
         * @param bgColorHEX 背景颜色
         * @param titleBgColorHEX 确定、标题背景颜色
         * @param contentColorHEX 内容背景颜色
         * @param closeColorHEX 关闭、取消按钮颜色
         * @returns 
         */
        UIAlert.show = function show(content, showCancel, bgColorHEX, titleBgColorHEX, contentColorHEX, closeColorHEX) {
          if (bgColorHEX === void 0) {
            bgColorHEX = "E4D3FF";
          }
          if (titleBgColorHEX === void 0) {
            titleBgColorHEX = "#6043D7";
          }
          if (contentColorHEX === void 0) {
            contentColorHEX = "D3CCEB";
          }
          if (closeColorHEX === void 0) {
            closeColorHEX = 'DF54DF';
          }
          var opts = new UIAlertOptions();
          opts._content = content;
          opts._showCancel = showCancel;
          var bgColor = new Color().fromHEX("#" + bgColorHEX.replace("#", ''));
          var titleBgColor = new Color().fromHEX("#" + titleBgColorHEX.replace("#", ''));
          var contentColor = new Color().fromHEX("#" + contentColorHEX.replace("#", ''));
          var closeColor = new Color().fromHEX("#" + closeColorHEX.replace("#", ''));
          UIMgr.inst.showUI(UIAlert, function (alert) {
            alert.layout.bg.color = bgColor;
            alert.layout.titleBg.color = titleBgColor;
            alert.layout.btnOK.node.getComponent(Sprite).color = titleBgColor;
            alert.layout.btnClose.node.getComponent(Sprite).color = closeColor;
            alert.layout.btnCancel.node.getComponent(Sprite).color = closeColor;
            alert.layout.contentBg.color = contentColor;
            alert.init(opts);
          });
          return opts;
        };
        var _proto2 = UIAlert.prototype;
        _proto2.init = function init(opts) {
          this._options = opts;
          var options = this._options;
          var layout = this._layout;
          if (options.hasOwnProperty('title')) {
            layout.title.string = options._title || '';
          }

          // layout.content.string = options._content || '';
          layout.contentRich.string = options._content || '';
          layout.btnClose.node.active = options._showCancel;
          layout.btnCancel.node.active = options._showCancel;
          if (!options._showCancel) {
            var pos = layout.btnOK.node.position;
            layout.btnOK.node.setPosition(0, pos.y, pos.z);
          }
        };
        _proto2.onCreated = function onCreated() {
          var _this3 = this;
          var layout = this._layout;
          this.onButtonEvent(layout.btnOK, function () {
            _this3.close();
            var options = _this3._options;
            if (options._cbClick) {
              options._cbClick.call(options._cbClickThisArg, true);
            }
          });
          this.onButtonEvent(layout.btnCancel, function () {
            _this3.close();
            var options = _this3._options;
            if (options._cbClick) {
              options._cbClick.call(options._cbClickThisArg, false);
            }
          });
          this.onButtonEvent(layout.btnClose, function () {
            _this3.close();
            var options = _this3._options;
            if (options._cbClick) {
              options._cbClick.call(options._cbClickThisArg, false);
            }
          });
        };
        _createClass(UIAlert, [{
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }]);
        return UIAlert;
      }(UIController));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DoubleList.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Button, Node, find, EventHandler, Toggle, ToggleContainer, Slider, Component, isValid, DoubleList;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      find = module.find;
      EventHandler = module.EventHandler;
      Toggle = module.Toggle;
      ToggleContainer = module.ToggleContainer;
      Slider = module.Slider;
      Component = module.Component;
      isValid = module.isValid;
    }, function (module) {
      DoubleList = module.DoubleList;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "de702l/FU1GyIzhfLW2eNqP", "UIController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /***
       * @en internal class, used for handling node event.
       * @zh 内部类，用于节点事件监听
       * 
       *  */
      var __NodeEventAgent__ = exports('__NodeEventAgent__', (_dec = ccclass('tgxNodeEventAgent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(__NodeEventAgent__, _Component);
        function __NodeEventAgent__() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = __NodeEventAgent__.prototype;
        /***
         * @en recieve button click event and deliver them to the real handlers.
         * @zh 接受按钮事件，并转发给真正的处理函数
         * */
        _proto.onButtonClicked = function onButtonClicked(evt, customEventData) {
          var btn = evt.target.getComponent(Button);
          var clickEvents = btn.clickEvents;
          for (var i = 0; i < clickEvents.length; ++i) {
            var h = clickEvents[i];
            if (h.customEventData == customEventData) {
              var cb = h['$cb$'];
              var target = h['$target$'];
              var args = h['$args$'];
              cb.apply(target, [btn, args]);
            }
          }
        }

        /***
         * @en recieve toggle event and deliver them to the real handlers.
         * @zh 接受Toggle事件，并转发给真正的处理函数
         * */;
        _proto.onToggleEvent = function onToggleEvent(toggle, customEventData) {
          var checkEvents = toggle.checkEvents;
          if (toggle['_toggleContainer']) {
            checkEvents = toggle['_toggleContainer'].checkEvents;
          }
          for (var i = 0; i < checkEvents.length; ++i) {
            var h = checkEvents[i];
            if (h.customEventData == customEventData) {
              var cb = h['$cb$'];
              var target = h['$target$'];
              var args = h['$args$'];
              cb.apply(target, [toggle, args]);
            }
          }
        }

        /***
        * @en recieve slide event and deliver them to the real handlers.
        * @zh 接受 Slide 事件，并转发给真正的处理函数
        * */;
        _proto.onSlideEvent = function onSlideEvent(slider, customEventData) {
          var slideEvents = slider.slideEvents;
          for (var i = 0; i < slideEvents.length; ++i) {
            var h = slideEvents[i];
            if (h.customEventData == customEventData) {
              var cb = h['$cb$'];
              var target = h['$target$'];
              var args = h['$args$'];
              cb.apply(target, [slider, args]);
            }
          }
        };
        return __NodeEventAgent__;
      }(Component)) || _class));

      /**
       * @en base class of UI Panel
       * @zh 各类UI面板基类
       * */
      var UIController = exports('UIController', /*#__PURE__*/function () {
        //关闭的时候 是否自动释放资源

        function UIController(prefab, layer, layoutCls, isAutoReleaseAssets) {
          if (isAutoReleaseAssets === void 0) {
            isAutoReleaseAssets = true;
          }
          this._listItem = null;
          this._instId = 0;
          this._prefab = void 0;
          this._layer = void 0;
          this._layout = void 0;
          this.node = void 0;
          this._destroyed = false;
          this._ingoreCloseAll = false;
          this._isAutoReleaseAssets = void 0;
          this._uiPrefab = null;
          this._prefab = prefab;
          this._layer = layer;
          this._layout = layoutCls;
          this._instId = UIController._idBase++;
          this._listItem = UIController._controllers.addToTail(this);
          this._isAutoReleaseAssets = isAutoReleaseAssets;
        }

        /***
         * @en the instance id to indicate an unique ui panel.
         * @zh 实例ID，用于标记一个唯一面板实例
         *  */
        var _proto2 = UIController.prototype;
        /***
         * @en layout of this ui panel.
         * @zh 本UI所在的UI层级
         *  */
        _proto2.getLayout = function getLayout() {
          return this._layout;
        }
        /**
         * 关闭的时候 是否自动释放资源
         * @returns 
         */;
        _proto2.getIsAutoReleaseAssets = function getIsAutoReleaseAssets() {
          return this._isAutoReleaseAssets;
        }

        /***
         * @en hide and destroy all ui panel.
         * @zh 隐藏并销毁所有UI面板
         *  */;
        UIController.closeAll = function closeAll() {
          this._controllers.forEach(function (v) {
            var c = v.data;
            if (!c._ingoreCloseAll) {
              c.close();
            }
          });
        }

        //update all ui, called by UIMgr.
        ;

        UIController.updateAll = function updateAll(dt) {
          this._controllers.forEach(function (v) {
            var c = v.data;
            if (c.node && isValid(c.node)) {
              c.onUpdate(dt);
            }
          });
        }

        //setup this ui,called by UIMgr.
        ;

        _proto2.setup = function setup(node, params) {
          this.node = node;
          if (this._layout) {
            this._layout = this.node.getComponent(this._layout);
          }
          //notify sub class to handle something.
          //节点创建完毕，调用子类的处理函数。
          this.onCreated(params);
          if (this._destroyed) {
            this.close();
          }
        }

        /**
         * @en hide and destroy this ui panel.
         * @zh 隐藏并销毁此UI面板
         *  */;
        _proto2.close = function close() {
          var _this$_listItem;
          this._destroyed = true;
          (_this$_listItem = this._listItem) == null || _this$_listItem.dispose();
          this._listItem = null;
          if (this.node) {
            this.node.removeFromParent();
            this.onDispose();
            this.node.destroy();
            this.node = null;
          }
          if (this._isAutoReleaseAssets && this._uiPrefab) {
            this._uiPrefab.decRef();
          }
          this._uiPrefab = null;
        };
        _proto2.setPrefab = function setPrefab(uiprefab) {
          this._uiPrefab = uiprefab;
          if (this._isAutoReleaseAssets && this._uiPrefab) {
            this._uiPrefab.addRef();
          }
        }
        /**
         * @en add button event handler
         * @zh 添加按钮事件
         * @param relativeNodePath to indicate a button node, can pass `string`|`Node`|`Button` here.
         * @param cb will be called when event emits. method format:(btn:Button,args:any)=>void
         * @param target the `this` argument of `cb`
         *  */;
        _proto2.onButtonEvent = function onButtonEvent(relativeNodePath, cb, target, args) {
          var buttonNode = null;
          if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
          } else if (relativeNodePath instanceof Button) {
            buttonNode = relativeNodePath.node;
          } else {
            buttonNode = find(relativeNodePath, this.node);
          }
          if (!buttonNode) {
            return null;
          }

          //添加转发器
          var agent = this.node.getComponent(__NodeEventAgent__);
          if (!agent) {
            agent = this.node.addComponent(__NodeEventAgent__);
          }
          var btn = buttonNode.getComponent(Button);
          var clickEvents = btn.clickEvents;
          var handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'tgxNodeEventAgent';
          handler.handler = 'onButtonClicked';
          handler.customEventData = '' + UIController._idBase++;

          //附加额外信息 供事件转发使用
          handler['$cb$'] = cb;
          handler['$target$'] = target;
          handler['$args$'] = args;
          clickEvents.push(handler);
          btn.clickEvents = clickEvents;
        }

        /**
         * @en remove button event handler
         * @zh 移除按钮事件
         * @param relativeNodePath to indicate a button node, can pass `string`|`Node`|`Button` here.
         * @param cb will be called when event emits.
         * @param target the `this` argument of `cb`
         *  */;
        _proto2.offButtonEvent = function offButtonEvent(relativeNodePath, cb, target) {
          var buttonNode = null;
          if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
          } else if (relativeNodePath instanceof Button) {
            buttonNode = relativeNodePath.node;
          } else {
            buttonNode = find(relativeNodePath, this.node);
          }
          if (!buttonNode) {
            return;
          }
          var agent = this.node.getComponent(__NodeEventAgent__);
          if (!agent) {
            return;
          }
          var btn = buttonNode.getComponent(Button);
          if (!btn) {
            return;
          }
          var clickEvents = btn.clickEvents;
          for (var i = 0; i < clickEvents.length; ++i) {
            var h = clickEvents[i];
            if (h['$cb$'] == cb && h['$target$'] == target) {
              clickEvents.splice(i, 1);
              btn.clickEvents = clickEvents;
              break;
            }
          }
        }

        /**
         * @en add toggle event handler
         * @zh 添加Toggle事件
         * @param relativeNodePath to indicate a button node, can pass `string`|`Node`|`Button` here.
         * @param cb will be called when event emits. method format:(btn:Toggle,args:any)=>void
         * @param target the `this` argument of `cb`
         *  */;
        _proto2.onToggleEvent = function onToggleEvent(relativeNodePath, cb, target, args) {
          var buttonNode = null;
          if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
          } else if (relativeNodePath instanceof Toggle) {
            buttonNode = relativeNodePath.node;
          } else if (relativeNodePath instanceof ToggleContainer) {
            buttonNode = relativeNodePath.node;
          } else {
            buttonNode = find(relativeNodePath, this.node);
          }
          if (!buttonNode) {
            return null;
          }

          //添加转发器
          var agent = this.node.getComponent(__NodeEventAgent__);
          if (!agent) {
            agent = this.node.addComponent(__NodeEventAgent__);
          }
          var btn = buttonNode.getComponent(Toggle);
          if (!btn) {
            btn = buttonNode.getComponent(ToggleContainer);
          }
          var checkEvents = btn.checkEvents;
          var handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'tgxNodeEventAgent';
          handler.handler = 'onToggleEvent';
          handler.customEventData = '' + UIController._idBase++;

          //附加额外信息 供事件转发使用
          handler['$cb$'] = cb;
          handler['$target$'] = target;
          handler['$args$'] = args;
          checkEvents.push(handler);
          btn.checkEvents = checkEvents;
        }

        /**
         * @en remove toggle event handler
         * @zh 移除Toggle事件
         * @param relativeNodePath to indicate a button node, can pass `string`|`Node`|`Button` here.
         * @param cb will be called when event emits. method format:(btn:Toggle,args:any)=>void
         * @param target the `this` argument of `cb`
         *  */;
        _proto2.offToggleEvent = function offToggleEvent(relativeNodePath, cb, target) {
          var buttonNode = null;
          if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
          } else if (relativeNodePath instanceof Toggle) {
            buttonNode = relativeNodePath.node;
          } else if (relativeNodePath instanceof ToggleContainer) {
            buttonNode = relativeNodePath.node;
          } else {
            buttonNode = find(relativeNodePath, this.node);
          }
          if (!buttonNode) {
            return null;
          }

          //添加转发器
          var agent = this.node.getComponent(__NodeEventAgent__);
          if (!agent) {
            return;
          }
          var btn = buttonNode.getComponent(Toggle);
          if (!btn) {
            btn = buttonNode.getComponent(ToggleContainer);
          }
          var checkEvents = btn.checkEvents;
          for (var i = 0; i < checkEvents.length; ++i) {
            var h = checkEvents[i];
            if (h['$cb$'] == cb && h['$target$'] == target) {
              checkEvents.splice(i, 1);
              btn.checkEvents = checkEvents;
              break;
            }
          }
        };
        _proto2.onSlideEvent = function onSlideEvent(relativeNodePath, cb, target, args) {
          var sliderNode = null;
          if (relativeNodePath instanceof Node) {
            sliderNode = relativeNodePath;
          } else if (relativeNodePath instanceof Slider) {
            sliderNode = relativeNodePath.node;
          } else {
            sliderNode = find(relativeNodePath, this.node);
          }
          if (!sliderNode) {
            return null;
          }

          //添加转发器
          var agent = this.node.getComponent(__NodeEventAgent__);
          if (!agent) {
            agent = this.node.addComponent(__NodeEventAgent__);
          }
          var slider = sliderNode.getComponent(Slider);
          var slideEvents = slider.slideEvents;
          var handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'tgxNodeEventAgent';
          handler.handler = 'onSlideEvent';
          handler.customEventData = '' + UIController._idBase++;

          //附加额外信息 供事件转发使用
          handler['$cb$'] = cb;
          handler['$target$'] = target;
          handler['$args$'] = args;
          slideEvents.push(handler);
          slider.slideEvents = slideEvents;
        };
        _proto2.offSlideEvent = function offSlideEvent(relativeNodePath, cb, target) {
          var sliderNode = null;
          if (relativeNodePath instanceof Node) {
            sliderNode = relativeNodePath;
          } else if (relativeNodePath instanceof Slider) {
            sliderNode = relativeNodePath.node;
          } else {
            sliderNode = find(relativeNodePath, this.node);
          }
          if (!sliderNode) {
            return null;
          }

          //添加转发器
          var agent = this.node.getComponent(__NodeEventAgent__);
          if (!agent) {
            return;
          }
          var slider = sliderNode.getComponent(Slider);
          var slideEvents = slider.slideEvents;
          for (var i = 0; i < slideEvents.length; ++i) {
            var h = slideEvents[i];
            if (h['$cb$'] == cb && h['$target$'] == target) {
              slideEvents.splice(i, 1);
              slider.slideEvents = slideEvents;
              break;
            }
          }
        }

        /***
         * @en the extra resource needed by this ui panel.the ui will not be created until these res loaded.
         * @zh 本UI使用的依赖资源.UI会等这些资源加载完成后才创建。
         *  */;
        _proto2.getRes = function getRes() {
          return [];
        }

        //子类的所有操作，需要在这个函数之后。
        ;

        _proto2.onCreated = function onCreated(params) {}
        //销毁
        ;

        _proto2.onDispose = function onDispose() {}
        //
        ;

        _proto2.onUpdate = function onUpdate(dt) {};
        _createClass(UIController, [{
          key: "instId",
          get: function get() {
            return this._instId;
          }

          /***
           * @en url of the prefab used by this ui panel.
           * @zh 本UI使用prefab路径
           *  */
        }, {
          key: "prefab",
          get: function get() {
            return this._prefab;
          }

          /***
           * @en layer of this ui panel.
           * @zh 本UI所在的UI层级
           *  */
        }, {
          key: "layer",
          get: function get() {
            return this._layer;
          }
        }]);
        return UIController;
      }());
      UIController._idBase = 1000;
      UIController._controllers = new DoubleList();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIJoystick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EasyController.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, KeyCode, UITransform, Input, input, director, Component, EasyControllerEvent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      KeyCode = module.KeyCode;
      UITransform = module.UITransform;
      Input = module.Input;
      input = module.input;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      EasyControllerEvent = module.EasyControllerEvent;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "0d3fdUMUH1Fq4G13IWj7Lf2", "UIJoystick", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /****
       * split screen into three parts.
       * ---------------------------------------------
       *                                              |
       *           1.camera rotation zone             |
       *                                              |
       *----------------------------------------------|
       *                      |                       |
       * 2.movement ctrl zone  | 3.camera rotation zone|
       *                      |                       |
       * ----------------------------------------------
       * 
       * multi-touch for camera zoom.
       *  */

      var UIJoystick = exports('UIJoystick', (_dec = ccclass('tgxUIJoystick'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIJoystick, _Component);
        function UIJoystick() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._ctrlRoot = null;
          _this._ctrlPointer = null;
          _this._buttons = null;
          _this._cameraSensitivity = 0.1;
          _this._distanceOfTwoTouchPoint = 0;
          _this._movementTouch = null;
          _this._cameraTouchA = null;
          _this._cameraTouchB = null;
          _this._fullscreen = null;
          _this._key2buttonMap = {};
          _this._keys = [];
          _this._degree = 0;
          _this._key2dirMap = null;
          return _this;
        }
        var _proto = UIJoystick.prototype;
        _proto.onLoad = function onLoad() {
          UIJoystick._inst = this;
          this._key2buttonMap[KeyCode.KEY_J] = 'btn_slot_0';
          this._key2buttonMap[KeyCode.KEY_K] = 'btn_slot_1';
          this._key2buttonMap[KeyCode.KEY_L] = 'btn_slot_2';
          this._key2buttonMap[KeyCode.KEY_U] = 'btn_slot_3';
          this._key2buttonMap[KeyCode.KEY_I] = 'btn_slot_4';
          var checkerCamera = this.node.getChildByName('checker_camera').getComponent(UITransform);
          checkerCamera.node.on(Input.EventType.TOUCH_START, this.onTouchStart_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_END, this.onTouchUp_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_CameraCtrl, this);
          var checkerMovement = this.node.getChildByName('checker_movement').getComponent(UITransform);
          checkerMovement.node.on(Input.EventType.TOUCH_START, this.onTouchStart_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_END, this.onTouchUp_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_Movement, this);
          this._fullscreen = this.node.getComponent(UITransform);
          this._ctrlRoot = this.node.getChildByName('ctrl').getComponent(UITransform);
          this._ctrlRoot.node.active = false;
          this._ctrlPointer = this._ctrlRoot.node.getChildByName('pointer');
          this._buttons = this.node.getChildByName('buttons');
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          UIJoystick._inst = null;
        };
        _proto.cleanKeyMap = function cleanKeyMap() {
          this._key2buttonMap = {};
        };
        _proto.bindKeyToButton = function bindKeyToButton(keyCode, btnName) {
          this._key2buttonMap[keyCode] = btnName;
        };
        _proto.setButtonVisible = function setButtonVisible(btnName, visible) {
          var _this$_buttons;
          var node = (_this$_buttons = this._buttons) == null ? void 0 : _this$_buttons.getChildByName(btnName);
          if (node) {
            node.active = visible;
          }
        };
        _proto.getButtonByName = function getButtonByName(btnName) {
          return this._buttons.getChildByName(btnName);
        };
        _proto.onTouchStart_Movement = function onTouchStart_Movement(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var x = touch.getUILocationX();
            var y = touch.getUILocationY();
            if (!this._movementTouch) {
              //we sub halfWidth,halfHeight here.
              //because, the touch event use left bottom as zero point(0,0), ui node use the center of screen as zero point(0,0)
              //this._ctrlRoot.setPosition(x - halfWidth, y - halfHeight, 0);

              var halfWidth = this._fullscreen.width / 2;
              var halfHeight = this._fullscreen.height / 2;
              this._ctrlRoot.node.active = true;
              this._ctrlRoot.node.setPosition(x - halfWidth, y - halfHeight, 0);
              this._ctrlPointer.setPosition(0, 0, 0);
              this._movementTouch = touch;
            }
          }
        };
        _proto.onTouchMove_Movement = function onTouchMove_Movement(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              var halfWidth = this._fullscreen.width / 2;
              var halfHeight = this._fullscreen.height / 2;
              var x = touch.getUILocationX();
              var y = touch.getUILocationY();
              var pos = this._ctrlRoot.node.position;
              var ox = x - halfWidth - pos.x;
              var oy = y - halfHeight - pos.y;
              var len = Math.sqrt(ox * ox + oy * oy);
              if (len <= 0) {
                return;
              }
              var dirX = ox / len;
              var dirY = oy / len;
              var radius = this._ctrlRoot.width / 2;
              if (len > radius) {
                len = radius;
                ox = dirX * radius;
                oy = dirY * radius;
              }
              this._ctrlPointer.setPosition(ox, oy, 0);

              // degree 0 ~ 360 based on x axis.
              var degree = Math.atan(dirY / dirX) / Math.PI * 180;
              if (dirX < 0) {
                degree += 180;
              } else {
                degree += 360;
              }
              this.emitEvent(EasyControllerEvent.MOVEMENT, degree, len / radius);
            }
          }
        };
        _proto.onTouchUp_Movement = function onTouchUp_Movement(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              this.emitEvent(EasyControllerEvent.MOVEMENT_STOP);
              this._movementTouch = null;
              this._ctrlRoot.node.active = false;
            }
          }
        };
        _proto.getDistOfTwoTouchPoints = function getDistOfTwoTouchPoints() {
          var touchA = this._cameraTouchA;
          var touchB = this._cameraTouchB;
          if (!touchA || !touchB) {
            return 0;
          }
          var dx = touchA.getLocationX() - touchB.getLocationX();
          var dy = touchB.getLocationY() - touchB.getLocationY();
          return Math.sqrt(dx * dx + dy * dy);
        };
        _proto.onTouchStart_CameraCtrl = function onTouchStart_CameraCtrl(event) {
          this.emitEvent(EasyControllerEvent.SCREEN_TOUCH_START, event);
          var touches = event.getAllTouches();
          this._cameraTouchA = null;
          this._cameraTouchB = null;
          for (var i = touches.length - 1; i >= 0; i--) {
            var touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              continue;
            }
            if (this._cameraTouchA == null) {
              this._cameraTouchA = touches[i];
            } else if (this._cameraTouchB == null) {
              this._cameraTouchB = touches[i];
              break;
            }
          }
          this._distanceOfTwoTouchPoint = this.getDistOfTwoTouchPoints();
        };
        _proto.onTouchMove_CameraCtrl = function onTouchMove_CameraCtrl(event) {
          var touches = event.getTouches();
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var touchID = touch.getID();
            //two touches, do camera zoom.
            if (this._cameraTouchA && this._cameraTouchB) {
              console.log(touchID, this._cameraTouchA.getID(), this._cameraTouchB.getID());
              var needZoom = false;
              if (touchID == this._cameraTouchA.getID()) {
                this._cameraTouchA = touch;
                needZoom = true;
              }
              if (touchID == this._cameraTouchB.getID()) {
                this._cameraTouchB = touch;
                needZoom = true;
              }
              if (needZoom) {
                var newDist = this.getDistOfTwoTouchPoints();
                var delta = this._distanceOfTwoTouchPoint - newDist;
                this.emitEvent(EasyControllerEvent.CAMERA_ZOOM, delta);
                this._distanceOfTwoTouchPoint = newDist;
              }
            }
            //only one touch, do camera rotate.
            else if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              var dt = touch.getDelta();
              var rx = dt.y * this._cameraSensitivity;
              var ry = -dt.x * this._cameraSensitivity;
              this.emitEvent(EasyControllerEvent.CAMERA_ROTATE, rx, ry);
            }
          }
        };
        _proto.onTouchUp_CameraCtrl = function onTouchUp_CameraCtrl(event) {
          this.emitEvent(EasyControllerEvent.SCREEN_TOUCH_END, event);
          var touches = event.getAllTouches();
          var hasTouchA = false;
          var hasTouchB = false;
          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var touchID = touch.getID();
            if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              hasTouchA = true;
            } else if (this._cameraTouchB && touchID == this._cameraTouchB.getID()) {
              hasTouchB = true;
            }
          }
          if (!hasTouchA) {
            this._cameraTouchA = null;
          }
          if (!hasTouchB) {
            this._cameraTouchB = null;
          }
        };
        _proto.onKeyDown = function onKeyDown(event) {
          var keyCode = event.keyCode;
          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this._keys.indexOf(keyCode) == -1) {
              this._keys.push(keyCode);
              this.updateDirection();
            }
          } else {
            var btnName = this._key2buttonMap[keyCode];
            if (btnName) {
              this.emitEvent(EasyControllerEvent.BUTTON, btnName);
            }
          }
        };
        _proto.onKeyUp = function onKeyUp(event) {
          var keyCode = event.keyCode;
          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            var index = this._keys.indexOf(keyCode);
            if (index != -1) {
              this._keys.splice(index, 1);
              this.updateDirection();
            }
          }
        };
        _proto.onMouseWheel = function onMouseWheel(event) {
          var delta = event.getScrollY() * 0.1;
          //console.log(delta);
          this.emitEvent(EasyControllerEvent.CAMERA_ZOOM, delta);
        };
        _proto.onButtonSlot = function onButtonSlot(event) {
          var btnName = event.target.name;
          this.emitEvent(EasyControllerEvent.BUTTON, btnName);
        };
        _proto.updateDirection = function updateDirection() {
          if (this._key2dirMap == null) {
            this._key2dirMap = {};
            this._key2dirMap[0] = -1;
            this._key2dirMap[KeyCode.KEY_A] = 180;
            this._key2dirMap[KeyCode.KEY_D] = 0;
            this._key2dirMap[KeyCode.KEY_W] = 90;
            this._key2dirMap[KeyCode.KEY_S] = 270;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_A] = 135;
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_D] = 45;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_A] = 225;
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_D] = 315;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_D] = this._key2dirMap[KeyCode.KEY_D];
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_A] = this._key2dirMap[KeyCode.KEY_A];
            this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S];
            this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W];
          }
          var keyCode0 = this._keys[this._keys.length - 1] || 0;
          var keyCode1 = this._keys[this._keys.length - 2] || 0;
          this._degree = this._key2dirMap[keyCode1 * 1000 + keyCode0];
          if (this._degree == null || this._degree < 0) {
            this.emitEvent(EasyControllerEvent.MOVEMENT_STOP);
          } else {
            this.emitEvent(EasyControllerEvent.MOVEMENT, this._degree, 1.0);
          }
        };
        _proto.emitEvent = function emitEvent(type, arg0, arg1, arg2, arg3, arg4) {
          director.emit(type, arg0, arg1, arg2, arg3, arg4);
        };
        _createClass(UIJoystick, null, [{
          key: "inst",
          get: function get() {
            return this._inst;
          }
        }]);
        return UIJoystick;
      }(Component), _class2._inst = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UILayers.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c15e5F/JCxBY7zW+STv7O08", "UILayers", undefined);
      /****
       * @en ui layers.each project can modify it based on needs.
       * @zh UI层级划分,
       * */
      var UILayers = exports('UILayers', /*#__PURE__*/function (UILayers) {
        UILayers[UILayers["GAME"] = 0] = "GAME";
        UILayers[UILayers["JOY_STICK"] = 1] = "JOY_STICK";
        UILayers[UILayers["HUD"] = 2] = "HUD";
        UILayers[UILayers["POPUP"] = 3] = "POPUP";
        UILayers[UILayers["POPUP1"] = 4] = "POPUP1";
        UILayers[UILayers["POPUP2"] = 5] = "POPUP2";
        UILayers[UILayers["ALERT"] = 6] = "ALERT";
        UILayers[UILayers["NOTICE"] = 7] = "NOTICE";
        UILayers[UILayers["LOADING"] = 8] = "LOADING";
        UILayers[UILayers["OVERLAY"] = 9] = "OVERLAY";
        UILayers[UILayers["NUM"] = 10] = "NUM";
        return UILayers;
      }(UILayers || {}));
      var UILayerNames = exports('UILayerNames', ['game', 'joy_stick', 'hud', 'popup', 'popup1', 'popup2', 'alert', 'notice', 'loading', 'overlay']);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIController.ts', './ModuleContext.ts', './ResolutionAutoFit.ts', './UIOrientation.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, UITransform, Node, Widget, error, instantiate, director, assetManager, find, Component, UIController, ModuleContext, ResolutionAutoFit, UIOrientation;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Node = module.Node;
      Widget = module.Widget;
      error = module.error;
      instantiate = module.instantiate;
      director = module.director;
      assetManager = module.assetManager;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      UIController = module.UIController;
    }, function (module) {
      ModuleContext = module.ModuleContext;
    }, function (module) {
      ResolutionAutoFit = module.ResolutionAutoFit;
    }, function (module) {
      UIOrientation = module.UIOrientation;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "82a59QFSGVIYrBkrgAX1U2r", "UIMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIUpdater = (_dec = ccclass('tgxUIMgr.UIUpdater'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIUpdater, _Component);
        function UIUpdater() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UIUpdater.prototype;
        _proto.update = function update(dt) {
          UIController.updateAll(dt);
        };
        return UIUpdater;
      }(Component)) || _class);
      /**
       * @en the `User Interface Manager`, handles some stuffs like the ui loads,ui layers,resizing etc.
       * @zh UI管理器，处理UI加载，层级，窗口变化等
       * 
       * */
      var UIMgr = exports('UIMgr', /*#__PURE__*/function () {
        function UIMgr() {
          this._uiCanvas = void 0;
          this._uiRoot = void 0;
        }
        var _proto2 = UIMgr.prototype;
        _proto2.createFullScreenNode = function createFullScreenNode() {
          var canvas = this._uiCanvas.getComponent(UITransform);
          var node = new Node();
          node.layer = this._uiCanvas.layer;
          var uiTransform = node.addComponent(UITransform);
          uiTransform.width = canvas.width;
          uiTransform.height = canvas.height;
          var widget = node.addComponent(Widget);
          widget.isAlignBottom = true;
          widget.isAlignTop = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.left = 0;
          widget.right = 0;
          widget.top = 0;
          widget.bottom = 0;
          return node;
        }

        /**
         * @en setup this UIMgr,`don't call more than once`.
         * @zh 初始化UIMgr,`不要多次调用`
         *  */;
        _proto2.setup = function setup(uiCanvas, maxLayers, layerNames) {
          if (this._uiCanvas) {
            return;
          }
          if (!uiCanvas) {
            throw error('uiCanvas must be a Node or Prefab');
          }
          if (uiCanvas instanceof Node) {
            this._uiCanvas = uiCanvas;
          } else {
            this._uiCanvas = instantiate(uiCanvas);
            director.getScene().addChild(this._uiCanvas);
          }
          this._uiCanvas.name = '$tgxUICanvas$';
          director.addPersistRootNode(this._uiCanvas);
          if (!this._uiCanvas.getComponent(UIUpdater)) {
            this._uiCanvas.addComponent(UIUpdater);
          }

          //this.resize();
          var canvas = this._uiCanvas.getComponent(UITransform);
          this._uiCanvas.addComponent(ResolutionAutoFit);
          layerNames || (layerNames = []);
          this._uiRoot = this.createFullScreenNode();
          this._uiRoot.name = 'ui_root';
          canvas.node.addChild(this._uiRoot);

          //create layers
          for (var i = 0; i < maxLayers; ++i) {
            var layerNode = this.createFullScreenNode();
            layerNode.name = 'ui_layer_' + (layerNames[i] ? layerNames[i] : i);
            this._uiRoot.addChild(layerNode);
          }
        };
        _proto2.getLayerNode = function getLayerNode(layerIndex) {
          return this._uiRoot.children[layerIndex] || this._uiRoot;
        };
        _proto2.closeAll = function closeAll() {
          UIController.closeAll();
        };
        _proto2.isShowing = function isShowing(uiCls) {
          //@ts-ignore
          var allControllers = UIController._controllers;
          var ret = false;
          allControllers.forEach(function (c) {
            if (c.data instanceof uiCls) {
              ret = true;
              //return true to break forEach.
              return true;
            }
          });
          return ret;
        }

        /***
         * @en show ui by the given parameters.
         * @zh 显示UI
         * @param uiCls the class, must inherits from the class `UIController`.
         * @param cb will be called after ui created.
         * @param thisArg the this argument for param `cb`.
         * @returns the instance of `uiCls`
         *  */;
        _proto2.showUI = function showUI(uiCls, cb, thisArg, params) {
          var _this = this;
          var bundleName = ModuleContext.getClassModule(uiCls);
          if (bundleName) {
            var _bundle = assetManager.getBundle(bundleName);
            if (!_bundle) {
              assetManager.loadBundle(bundleName, null, function (err, loadedBundle) {
                if (err) {
                  console.log(err);
                } else {
                  _this.showUI(uiCls, cb, thisArg, params);
                }
              });
              return;
            }
          }
          var ui = ModuleContext.createFromModule(uiCls);
          var resArr = ui.getRes() || [];
          if (typeof ui.prefab == 'string') {
            resArr.push(ui.prefab);
          }
          var fnLoadAndCreateFromBundle = function fnLoadAndCreateFromBundle(bundle) {
            bundle.load(resArr, function (err, data) {
              if (err) {
                console.log(err);
              }
              var node = null;
              var prefab = ui.prefab;
              if (typeof ui.prefab == 'string') {
                prefab = bundle.get(ui.prefab);
              }
              if (prefab) {
                node = instantiate(prefab);
              } else {
                //special for empty ui
                node = _this.createFullScreenNode();
              }
              var parent = UIMgr.inst.getLayerNode(ui.layer);
              parent.addChild(node);
              ui.setPrefab(prefab);
              ui.setup(node, params);
              if (cb) {
                cb.apply(thisArg, [ui]);
              }
            });
            return ui;
          };
          bundleName = bundleName || 'resources';
          var bundle = assetManager.getBundle(bundleName);
          return fnLoadAndCreateFromBundle(bundle);
        }

        //切换ui横竖屏
        ;

        _proto2.setUiOrientation = function setUiOrientation() {
          var gameCanvas = find('Canvas'); //取画布
          if (!gameCanvas) return;
          var uiOrientation = gameCanvas.getComponent(UIOrientation);
          if (!uiOrientation) return;
          //设置ui成竖屏
          if (uiOrientation.is_Portrait) {
            var camera = this._uiCanvas.getChildByPath("Camera");
            camera.setRotationFromEuler(0, 0, 90);
          }
        }

        //切换竖屏
        ;

        _proto2.setUiPortrait = function setUiPortrait() {
          this._uiRoot.setRotationFromEuler(0, 0, 90);
        }
        //切换横屏
        ;

        _proto2.setUiLandscape = function setUiLandscape() {
          this._uiRoot.setRotationFromEuler(0, 0, 0);
        };
        _createClass(UIMgr, null, [{
          key: "inst",
          get: function get() {
            if (this._inst == null) {
              this._inst = new UIMgr();
            }
            return this._inst;
          }
        }]);
        return UIMgr;
      }());
      UIMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIOrientation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCBoolean, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCBoolean = module.CCBoolean;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "85847FurKNP8KrvJfQIQ+7i", "UIOrientation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //当需要把UIMgr的根节点单独旋转成竖屏时使用,
      //必须把UIOrientation放在场景下第一级节点，且名为Canvas的画布上
      var UIOrientation = exports('UIOrientation', (_dec = ccclass('UIOrientation'), _dec2 = property(CCBoolean), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIOrientation, _Component);
        function UIOrientation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "is_Portrait", _descriptor, _assertThisInitialized(_this));
          return _this;
        } //是否竖屏
        return UIOrientation;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "is_Portrait", [_dec2], {
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

System.register("chunks:///_virtual/UITip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './ModuleDef.ts', './UIMgr.ts'], function (exports) {
  var _createClass, cclegacy, _decorator, Prefab, instantiate, ResourceMgr, ModuleDef, UIMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      UIMgr = module.UIMgr;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "020f3RVnf9N6oOWd0Rch1G8", "UITip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UITip = exports('UITip', (_dec = ccclass('UITip'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function UITip() {
          this._tips = [];
        }
        var _proto = UITip.prototype;
        _proto.show = function show(str) {
          var _this = this;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, 'ui_tip/Tip', Prefab, function (err, prefab) {
            var panel = instantiate(prefab);
            panel.parent = UIMgr.inst.getLayerNode(-1);
            _this.createrTip(panel, str);
          });
        };
        _proto.createrTip = function createrTip(tipNode, str) {
          var _this2 = this;
          var tip = tipNode.getComponent("UITipPanel");
          tip.tipStr = str;
          //放到队列中
          this._tips.push(tip);
          tip.node.once('over', function () {
            tip.node.removeFromParent();
            tip.node.destroy();
            _this2._tips.shift();
            _this2.queue();
          });
          tip.node.once('queue', function () {
            _this2.queue();
          });
          this.queue();
        };
        _proto.queue = function queue(i) {
          if (i === void 0) {
            i = 0;
          }
          if (this._tips.length == 0) return;
          var tip = this._tips[i];
          if (!tip) return;
          if (!(tip != null && tip.isMove)) {
            tip.node.parent = UIMgr.inst.getLayerNode(-1);
            tip.init();
            tip.tip(tip.tipStr, 1);
          } else {
            if (tip.isQueue) {
              this.queue(i + 1);
            }
          }
        };
        _createClass(UITip, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new UITip();
            }
            return this._instance;
          }
        }]);
        return UITip;
      }(), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIWaiting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIController.ts', './UIMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, UIController, UIMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UIController = module.UIController;
    }, function (module) {
      UIMgr = module.UIMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0dda6mQNCdCo5GQ959qF/Db", "UIWaiting", undefined);
      var loadingTxtArr = ['.', '..', '...'];
      var _inst = null;
      var UIWaiting = exports('UIWaiting', /*#__PURE__*/function (_UIController) {
        _inheritsLoose(UIWaiting, _UIController);
        function UIWaiting() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIController.call.apply(_UIController, [this].concat(args)) || this;
          _this._contentStr = 'Loading';
          return _this;
        }
        var _proto = UIWaiting.prototype;
        _proto.onCreated = function onCreated() {};
        UIWaiting.show = function show(contentStr) {
          if (!_inst) {
            _inst = UIMgr.inst.showUI(UIWaiting);
          }
          _inst._contentStr = contentStr || 'Loading';
          return _inst;
        };
        UIWaiting.hide = function hide() {
          if (_inst) {
            _inst.close();
            _inst = null;
          }
        };
        _proto.onUpdate = function onUpdate() {
          var layout = this._layout;
          if (layout.loadingIcon) {
            var euler = layout.loadingIcon.eulerAngles;
            var rot = Date.now() / 1000 * 90;
            layout.loadingIcon.setRotationFromEuler(euler.x, euler.y, rot);
          }
          if (layout.loadingTxt) {
            var idx = Math.floor(Date.now() / 500) % 3;
            layout.loadingTxt.string = this._contentStr + loadingTxtArr[idx];
          }
        };
        _proto.onDispose = function onDispose() {
          _inst = null;
        };
        return UIWaiting;
      }(UIController));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/URLUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bac65L5Qr9DOp7zav7JnYaI", "URLUtils", undefined);
      var URLUtils = exports('URLUtils', /*#__PURE__*/function () {
        function URLUtils() {}
        URLUtils.urlParse = function urlParse(url) {
          var params = {};
          if (!url) {
            return params;
          }
          var name, value;
          var str = url; //取得整个地址栏
          var num = str.indexOf("?");
          str = str.substring(num + 1); //取得所有参数   stringvar.substr(start [, length ]

          var arr = str.split("&"); //各个参数放到数组里
          for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
              name = arr[i].substring(0, num);
              value = arr[i].substr(num + 1);
              params[name] = value;
            }
          }
          return params;
        };
        return URLUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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