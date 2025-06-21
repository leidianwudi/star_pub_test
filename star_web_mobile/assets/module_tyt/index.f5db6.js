System.register("chunks:///_virtual/module_tyt", ['./MyUtil.ts', './TYTAudioManager.ts', './TYTGameManager.ts', './TYTGameMgr.ts', './TYTLobbyScene.ts'], function () {
  return {
    setters: [null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MyUtil.ts", ['cc'], function (exports) {
  var cclegacy, Vec2, math, Vec3, assetManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
      math = module.math;
      Vec3 = module.Vec3;
      assetManager = module.assetManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2c882CPqUxEx5s57vVqFiea", "MyUtil", undefined);
      var MyUtil = exports('MyUtil', /*#__PURE__*/function () {
        function MyUtil() {}
        MyUtil.angle2D = function angle2D(a, b) {
          if (b === void 0) {
            b = new Vec2(1, 0);
          }
          var angle = Vec2.angle(a, b);
          if (a.y < b.y) {
            angle = math.TWO_PI - angle;
          }
          return angle;
        };
        MyUtil.angle = function angle(a, b) {
          if (b === void 0) {
            b = Vec3.RIGHT;
          }
          var angle = Vec3.angle(a, b);
          if (a.z < b.z) {
            angle = math.TWO_PI - angle;
          }
          return angle;
        };
        MyUtil.degreesToVector = function degreesToVector(deg) {
          var radians = deg * (Math.PI / 180);
          return {
            x: Math.cos(radians),
            y: Math.sin(radians)
          };
        };
        MyUtil.timeFormat = function timeFormat(value, num) {
          if (num === void 0) {
            num = 3;
          }
          var v = parseFloat(value.toFixed(num));
          var minute = Math.floor(v / 60);
          var seconds = v % 60;
          if (minute) {
            return (minute > 9 ? minute : "0" + minute) + ":" + (seconds < 10 ? "0" + seconds.toFixed(num) : seconds.toFixed(num));
          }
          return "" + (seconds < 10 ? "0" + seconds.toFixed(num) : seconds.toFixed(num));
        };
        MyUtil.nowDayZeroTimeStamp = function nowDayZeroTimeStamp(d) {
          if (d === void 0) {
            d = new Date();
          }
          d.setHours(0);
          d.setMinutes(0);
          d.setSeconds(0);
          return d.getTime();
        }

        // JSON.parse之前检查是否有数据
        ;

        MyUtil.checkValue = function checkValue(v) {
          if (v === '' || v === undefined || v === null) return false;
          return true;
        };
        MyUtil.loadBundle = function loadBundle(name) {
          return new Promise(function (resolve, reject) {
            assetManager.loadBundle(name, function (err, bundle) {
              if (err) {
                return reject(err);
              }
              resolve(bundle);
            });
          });
        };
        MyUtil.numKString = function numKString(num) {
          return num < 1000 ? Math.floor(num).toString() : Math.floor(num / 100) / 10 + "K";
        };
        MyUtil.shuffleArray = function shuffleArray(array) {
          var shuffledArray = array.slice();
          var currentIndex = shuffledArray.length;
          var temporaryValue, randomIndex;

          // 如果还有元素需要排序
          while (0 !== currentIndex) {
            // 随机选择一个未排序的元素
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // 与当前元素交换
            temporaryValue = shuffledArray[currentIndex];
            shuffledArray[currentIndex] = shuffledArray[randomIndex];
            shuffledArray[randomIndex] = temporaryValue;
          }
          return shuffledArray;
        };
        MyUtil.toFixed = function toFixed(num, reserve) {
          if (reserve === void 0) {
            reserve = 2;
          }
          var numStr = num.toFixed(reserve + 1);
          // 去掉最后一位数字
          return Number(numStr.slice(0, numStr.length - 1));
        };
        return MyUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TYTAudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TYTGameManager.ts', './RoomMgr.ts', './ResourceMgr.ts', './ModuleDef.ts', './LanguageData.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, find, AudioClip, Slider, ProgressBar, AudioSource, Component, TYTGameManager, RoomMgr, ResourceMgr, ModuleDef, LanguageData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      AudioClip = module.AudioClip;
      Slider = module.Slider;
      ProgressBar = module.ProgressBar;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }, function (module) {
      TYTGameManager = module.TYTGameManager;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d42083tdwVDYaQTdvyx5DWs", "TYTAudioManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TYTAudioManager = exports('TYTAudioManager', (_dec = ccclass('TYTAudioManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TYTAudioManager, _Component);
        function TYTAudioManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.musicVolume = 1;
          _this.soundVolume = 1;
          _this.musicAudioSource = new AudioSource();
          _this.soundAudioSource = new AudioSource();
          _this.bgmClip = null;
          _this.dieClip = null;
          _this.scoreClip = null;
          _this.exactScoreClip = null;
          _this.storageClip = null;
          _this.birthClip = null;
          _this.gameManager = null;
          _this.settingPopupNode = null;
          return _this;
        }
        var _proto = TYTAudioManager.prototype;
        _proto.onLoad = function onLoad() {
          this.gameManager = find('TYTGameManager').getComponent(TYTGameManager);
          this.settingPopupNode = find('UICanvas/PortraitNode/Mask/ReadyUI/SettingPopup');
        };
        _proto.start = function start() {
          this.updateProgress('sound');
          this.updateProgress('music');
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.loadAssert = function loadAssert() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            // 批量加载prefab
            var loadMap = {
              bgmClip: 'res/music/bgm',
              dieClip: 'res/music/die',
              scoreClip: 'res/music/score',
              exactScoreClip: 'res/music/exact_score',
              storageClip: 'res/music/storage',
              birthClip: 'res/music/birth'
            };
            var loadList = [];
            Object.keys(loadMap).forEach(function (key) {
              var path = loadMap[key];
              loadList.push(new Promise(function (resolve, reject) {
                ResourceMgr.inst.loadResByModuleBundle(ModuleDef.TYT, path, AudioClip, function (err, audioClip) {
                  if (err) {
                    console.log("load err:", err);
                    reject(err);
                    return;
                  }
                  _this2[key] = audioClip;
                  resolve(0);
                });
              }));
            });
            Promise.all([].concat(loadList)).then(function (res) {
              resolve(0);
            });
          });
        };
        _proto.onSliderChange = function onSliderChange(slider, key) {
          if (key === 'sound') {
            this.soundVolume = slider.progress;
          } else if (key === 'music') {
            this.musicVolume = slider.progress;
            this.musicAudioSource.volume = this.musicVolume;
          }
          this.updateProgress(key);
        };
        _proto.updateProgress = function updateProgress(key) {
          if (key === 'sound') {
            this.settingPopupNode.getChildByPath('Content/Sound/Slider').getComponent(Slider).progress = this.soundVolume;
            this.settingPopupNode.getChildByPath('Content/Sound/Slider/ProgressBar').getComponent(ProgressBar).progress = this.soundVolume;
          } else if (key === 'music') {
            this.settingPopupNode.getChildByPath('Content/Music/Slider').getComponent(Slider).progress = this.musicVolume;
            this.settingPopupNode.getChildByPath('Content/Music/Slider/ProgressBar').getComponent(ProgressBar).progress = this.musicVolume;
          }
        };
        _proto.playBGM = function playBGM() {
          if (this.musicAudioSource.playing) {
            return;
          }
          this.musicAudioSource.clip = this.bgmClip;
          this.musicAudioSource.loop = true;
          this.musicAudioSource.volume = this.musicVolume;
          this.musicAudioSource.play();
        };
        _proto.stopBGM = function stopBGM() {
          this.musicAudioSource.stop();
        };
        _proto.stopPlaySound = function stopPlaySound() {
          this.soundAudioSource.stop();
        };
        _proto.playDie = function playDie() {
          this.soundAudioSource.playOneShot(this.dieClip, this.soundVolume);
        };
        _proto.playScore = function playScore() {
          this.soundAudioSource.playOneShot(this.scoreClip, this.soundVolume);
        };
        _proto.playExactScore = function playExactScore() {
          this.soundAudioSource.playOneShot(this.exactScoreClip, this.soundVolume);
        };
        _proto.playStorage = function playStorage() {
          this.soundAudioSource.clip = this.storageClip;
          this.soundAudioSource.volume = this.soundVolume;
          this.soundAudioSource.play();
          // this.soundAudioSource.playOneShot(this.storageClip, this.soundVolume)
        };

        _proto.playBirth = function playBirth() {
          this.soundAudioSource.playOneShot(this.birthClip, this.soundVolume);
        };
        _proto.onSettingOpen = function onSettingOpen() {
          this.settingPopupNode.active = false;
        };
        _proto.onSettingClose = function onSettingClose() {
          this.settingPopupNode.active = false;
        };
        _proto.onBtnExitClicked = /*#__PURE__*/function () {
          var _onBtnExitClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //if (RoomMgr.inst.isPlayer && RoomMgr.inst.isPlaying) {
                  tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (ok) {
                            _this3.stopBGM();
                            _this3.stopPlaySound();
                            tgx.UIMgr.inst.closeAll();
                            tgx.UIMgr.inst.setUiLandscape(); //换回横屏
                            // tgx.SceneUtil.loadScene(SceneDef.LOBBY);
                            RoomMgr.inst.exitRoom();
                            //await RoomMgr.inst.backToLobby();
                            //tgx.SceneUtil.loadScene(Slots4GameMgr.inst.entryScene);
                          }

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));
                //}
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
        _proto.update = function update(deltaTime) {};
        return TYTAudioManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TYTGameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MyUtil.ts', './TYTAudioManager.ts', './ModuleDef.ts', './ResourceMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, find, input, Input, JsonAsset, Prefab, instantiate, Vec3, tween, randomRangeInt, UIOpacity, randomRange, ParticleSystem2D, UITransform, Label, Component, MyUtil, TYTAudioManager, ModuleDef, ResourceMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      input = module.input;
      Input = module.Input;
      JsonAsset = module.JsonAsset;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      randomRangeInt = module.randomRangeInt;
      UIOpacity = module.UIOpacity;
      randomRange = module.randomRange;
      ParticleSystem2D = module.ParticleSystem2D;
      UITransform = module.UITransform;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      MyUtil = module.MyUtil;
    }, function (module) {
      TYTAudioManager = module.TYTAudioManager;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "df283ZnIr9OOpdJHvOlImSt", "TYTGameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameStatus = exports('GameStatus', /*#__PURE__*/function (GameStatus) {
        GameStatus[GameStatus["init"] = 0] = "init";
        GameStatus[GameStatus["ready"] = 1] = "ready";
        GameStatus[GameStatus["running"] = 2] = "running";
        GameStatus[GameStatus["end"] = 3] = "end";
        return GameStatus;
      }({}));
      var TYTGameManager = exports('TYTGameManager', (_dec = ccclass('TYTGameManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TYTGameManager, _Component);
        function TYTGameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameConfig = {};
          _this.gameStatus = GameStatus.init;
          _this._score = 0;
          _this.nowFootholdNode = null;
          _this.nextFootholdNode = null;
          _this.pressFlag = false;
          _this.pressTime = 0;
          _this.jumpFlag = false;
          _this.audioManager = null;
          _this.gameCameraNode = null;
          _this.bgNode = null;
          _this.roleContainerNode = null;
          _this.roleNode = null;
          _this.roleImgNode = null;
          _this.roleImgInitPos = new Vec3();
          _this.roleEffectStorageNode = null;
          _this.roleEffectsNode = null;
          _this.roleEffectsInitPos = new Vec3();
          _this.scoreTextsNode = null;
          _this.readyUINode = null;
          _this.runUINode = null;
          _this.gameOverPopupNode = null;
          _this.footholdsNode = null;
          _this.scoreNode = null;
          _this.rolePrefab = null;
          _this.scoreTextPrefab = null;
          _this.prefabUrlMap = {};
          _this.pressTween = null;
          return _this;
        }
        var _proto = TYTGameManager.prototype;
        _proto.onLoad = function onLoad() {
          var gameCanvas = find('Canvas');
          this.audioManager = find('TYTAudioManager').getComponent(TYTAudioManager);
          this.gameCameraNode = gameCanvas.getChildByPath('GameCamera');
          this.bgNode = gameCanvas.getChildByPath('PortraitNode/BG');
          this.roleContainerNode = gameCanvas.getChildByPath('PortraitNode/Mask/RoleContainer');
          this.footholdsNode = gameCanvas.getChildByPath('PortraitNode/Mask/Footholds');
          this.scoreTextsNode = gameCanvas.getChildByPath('PortraitNode/Mask/ScoreTexts');
          var uiCanvas = find('UICanvas');
          this.readyUINode = uiCanvas.getChildByPath('PortraitNode/Mask/ReadyUI');
          this.readyUINode.active = false;
          this.runUINode = uiCanvas.getChildByPath('PortraitNode/Mask/RunUI');
          this.runUINode.active = false;
          this.gameOverPopupNode = uiCanvas.getChildByPath('PortraitNode/Mask/GameOverPopup');
          this.gameOverPopupNode.active = false;
          this.scoreNode = uiCanvas.getChildByPath('PortraitNode/Mask/RunUI/Score');
          input.on(Input.EventType.TOUCH_START, this.touchStart, this);
          input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
          tgx.UIMgr.inst.closeAll(); //关闭所有UI
          // tgx.UIMgr.inst.setUiPortrait();//切换ui竖屏
        };

        _proto.start = function start() {
          var _this2 = this;
          this.loadGameConfig().then(function () {
            _this2.loadAssert().then(function () {
              _this2.audioManager.playBGM();
              _this2.initData();
            });
          });
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.touchStart, this);
          input.off(Input.EventType.TOUCH_END, this.touchEnd, this);
        };
        _proto.loadGameConfig = function loadGameConfig() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.TYT, 'res/tytGameConfig', JsonAsset, function (err, jsonAsset) {
              if (err) {
                console.log("load gameconfig err:", err);
                reject(err);
                return;
              }
              _this3.gameConfig = jsonAsset.json;
              console.log("load gameconfig succes.");
              resolve(0);
            });
          });
        };
        _proto.loadAssert = function loadAssert() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var loadList = [];
            // 批量加载prefab
            var loadMap = {
              rolePrefab: 'res/prefabs/Role',
              scoreTextPrefab: 'res/prefabs/ScoreText'
            };
            Object.keys(loadMap).forEach(function (key) {
              var path = loadMap[key];
              loadList.push(new Promise(function (resolve, reject) {
                ResourceMgr.inst.loadResByModuleBundle(ModuleDef.TYT, path, Prefab, function (err, prefab) {
                  if (err) {
                    console.log("load err:", err);
                    reject(err);
                    return;
                  }
                  _this4[key] = prefab;
                  resolve(0);
                });
              }));
            });
            // json配置里的prefab提前加载
            var prefabUrls = [];
            Object.keys(_this4.gameConfig['footholds']).forEach(function (key) {
              prefabUrls.push(_this4.gameConfig['footholds'][key]['prefabUrl']);
            });
            prefabUrls.forEach(function (prefabUrl) {
              loadList.push(new Promise(function (resolve, reject) {
                ResourceMgr.inst.loadResByModuleBundle(ModuleDef.TYT, prefabUrl, Prefab, function (err, prefab) {
                  if (err) {
                    console.log("load err:", err);
                    reject(err);
                    return;
                  }
                  _this4.prefabUrlMap[prefabUrl] = prefab;
                  resolve(0);
                });
              }));
            });
            Promise.all([].concat(loadList, [_this4.audioManager.loadAssert()])).then(function (res) {
              resolve(0);
            });
          });
        };
        _proto.setGameStauts = function setGameStauts(stauts) {
          if (stauts === this.gameStatus) return;
          this.gameStatus = stauts;
          if (this.gameStatus === GameStatus.ready) {
            this.readyUINode.active = true;
            this.runUINode.active = false;
            this.gameOverPopupNode.active = false;
          } else if (this.gameStatus === GameStatus.running) {
            this.readyUINode.active = false;
            this.runUINode.active = true;
            this.runUINode.getChildByPath('Tip').active = true;
          } else if (this.gameStatus === GameStatus.end) {
            this.gameOverPopupNode.active = true;
          }
        };
        _proto.initData = function initData() {
          this.setGameStauts(GameStatus.ready);
          this.footholdsNode.children.forEach(function (node) {
            node.destroy();
          });
          this.roleContainerNode.children.forEach(function (node) {
            node.destroy();
          });
          this.scoreTextsNode.children.forEach(function (node) {
            node.destroy();
          });
          this.score = 0;
          // this.gameCameraNode.setWorldPosition(new Vec3(720, 360, 0))
          // this.bgNode.setWorldPosition(new Vec3(720, 360, 0))
          this.nowFootholdNode = this.generateFoothold(true);
          this.roleNode = instantiate(this.rolePrefab);
          this.roleContainerNode.addChild(this.roleNode);
          this.roleImgNode = this.roleNode.getChildByPath('Img');
          this.roleImgInitPos = this.roleImgNode.getPosition();
          this.roleEffectStorageNode = this.roleNode.getChildByPath('Effects/Storage');
          this.roleEffectStorageNode.active = false;
          this.roleEffectsNode = this.roleNode.getChildByPath('Effects');
          this.roleEffectsInitPos = this.roleEffectsNode.getPosition();
          // 角色初始动画
          this.roleNode.setWorldPosition(new Vec3(720, 460, 0));
          tween(this.roleNode).to(0.2, {
            worldPosition: new Vec3(720, 360, 0)
          }).start();
          this.audioManager.playBirth();
        };
        _proto.generateFoothold = function generateFoothold(first) {
          if (first === void 0) {
            first = false;
          }
          // 生成随机落脚点
          var footholdKey = Object.keys(this.gameConfig['footholds'])[randomRangeInt(0, Object.keys(this.gameConfig['footholds']).length)];
          var footholdNode = instantiate(this.prefabUrlMap[this.gameConfig['footholds'][footholdKey]['prefabUrl']]);
          var imgNode = footholdNode.getChildByPath('Img');
          // 为了让动画看着流畅
          var imgInitPos = imgNode.getPosition();
          imgNode.getComponent(UIOpacity).opacity = 0;
          imgNode.setPosition(imgNode.getPosition().add3f(0, 80, 0));
          // 往前插入节点，让覆盖顺序正确（需要在设置位置之前）
          this.footholdsNode.insertChild(footholdNode, 0);
          if (first) {
            footholdNode.setWorldPosition(new Vec3(720, 360));
          } else {
            var deg = this.gameConfig['config']['footholdDeg'][randomRangeInt(0, Object.keys(this.gameConfig['config']['footholdDeg']).length)];
            var distance = randomRange(this.gameConfig['config']['footholdMinDistance'], this.gameConfig['config']['footholdMaxDistance']);
            var direction = MyUtil.degreesToVector(deg);
            // 新的落脚点位置需要在上一个落脚地位置基础上
            footholdNode.setWorldPosition(this.nowFootholdNode.getWorldPosition().add3f(direction.x * distance, direction.y * distance, 0));
          }
          // 生成动画
          tween(imgNode).parallel(tween(imgNode.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }), tween(imgNode).to(0.2, {
            position: imgInitPos
          })).start();
          return footholdNode;
        };
        _proto.touchStart = function touchStart(event) {
          var _this5 = this;
          if (this.gameStatus !== GameStatus.running || this.jumpFlag) return;
          this.pressFlag = true;
          this.pressTime = 0;
          // 角色蓄力粒子效果
          this.roleEffectStorageNode.active = true;
          this.roleEffectStorageNode.getComponent(ParticleSystem2D).enabled = true;
          // 角色图片节点压缩（用角色节点会导致特效节点被压缩）
          var roleTween = tween(this.roleImgNode).to(3, {
            scale: new Vec3(1.5, 0.5, 0)
          });
          // 落脚点压缩
          var footholdHeight = this.nowFootholdNode.getChildByPath('Img').getComponent(UITransform).contentSize.height;
          var foothodldTween = tween(this.nowFootholdNode.getChildByPath('Img')).to(3, {
            scale: new Vec3(1.1, 0.7, 0)
          }, {
            onUpdate: function onUpdate(imgNode, ratio) {
              // 在缩放过程中（角色、落脚点都会缩放），让角色往下移动
              _this5.roleImgNode.setPosition(_this5.roleImgInitPos.clone().subtract3f(0, footholdHeight - imgNode.getScale().y * footholdHeight, 0));
              // 在缩放过程中，让特效节点往下移动，还需考虑角色图片被压缩情况
              _this5.roleEffectsNode.setPosition(_this5.roleEffectsInitPos.clone().subtract3f(0, (footholdHeight - imgNode.getScale().y * footholdHeight) * _this5.roleImgNode.getScale().y, 0));
            }
          });
          this.pressTween = tween(this.roleNode).parallel(roleTween, foothodldTween).start();
          this.audioManager.playStorage();
        };
        _proto.touchEnd = function touchEnd(event) {
          var _this6 = this;
          if (this.gameStatus !== GameStatus.running || this.jumpFlag || this.pressTime === 0) return;
          this.pressFlag = false;
          this.pressTween.stop();
          this.roleEffectStorageNode.active = false;
          this.roleEffectStorageNode.getComponent(ParticleSystem2D).enabled = false;
          this.audioManager.stopPlaySound();
          var touchMaxTime = this.gameConfig['config']['touchMaxTime'];
          var ratio = this.pressTime < touchMaxTime ? this.pressTime / touchMaxTime : 1;
          var distance = this.gameConfig['config']['jumpMaxDistance'] * ratio;
          var rolePos = this.roleNode.getWorldPosition();
          // 计算方向需要朝着下一个落脚点中心位置（为了跳的离中心越近得2分）
          var direction = this.nextFootholdNode.getWorldPosition().subtract(rolePos).normalize();
          var targetPos = new Vec3(rolePos.x + direction.x * distance, rolePos.y + direction.y * distance, 0);
          var deg = MyUtil.angle(direction) * 180 / Math.PI;
          var leftRotateFlag = deg > 90 && deg < 270;
          var jumpAniRunTime = ratio < 0.1 ? 0.25 : 0.35;
          this.pressTime = 0;
          this.jumpFlag = true;
          // 角色点到点移动的动画
          var moveTween = tween(this.roleNode).to(jumpAniRunTime, {
            worldPosition: targetPos
          });
          // 角色跳跃动画（配合点到点动画模拟空中弧线效果）
          var upTween = tween(this.roleImgNode).to(jumpAniRunTime / 2, {
            position: this.roleImgInitPos.clone().add3f(0, 700, 0).multiplyScalar(ratio)
          }).to(jumpAniRunTime / 2, {
            position: this.roleImgInitPos
          });
          // 角色空中旋转动画，需要控制左旋、右旋
          var rotateTween = tween(this.roleImgNode).to(jumpAniRunTime / 2, {
            angle: leftRotateFlag ? 180 : -180
          }).to(jumpAniRunTime / 2, {
            angle: leftRotateFlag ? 360 : -360
          }).to(0, {
            angle: 0
          });
          tween(this.roleNode)
          // 蓄力时的回弹动画
          .parallel(tween(this.roleImgNode).to(0.15, {
            position: this.roleImgInitPos,
            scale: new Vec3(1, 1, 0)
          }), tween(this.roleEffectsNode).to(0.15, {
            position: this.roleEffectsInitPos
          }), tween(this.nowFootholdNode.getChildByPath('Img')).to(0.15, {
            scale: new Vec3(1, 1.2, 0)
          }))
          // 整体跳跃动画
          .parallel(tween(this.nowFootholdNode.getChildByPath('Img')).to(0.05, {
            scale: new Vec3(1, 1, 0)
          }), moveTween, upTween, rotateTween).call(function () {
            _this6.jumpEnd();
          }).start();
        };
        _proto.viewUpdate = function viewUpdate() {
          var _this7 = this;
          var direction = this.nextFootholdNode.getWorldPosition().subtract(this.nowFootholdNode.getWorldPosition()).normalize();
          return new Promise(function (resolve, reject) {
            tween(_this7.gameCameraNode.getWorldPosition()).to(0.4,
            // 相机移动是相反的运动（镜头往上移动，相对物体是显示向下运动）
            _this7.roleNode.getWorldPosition().add3f(0, 20, 0).add(direction.clone().multiplyScalar(80)), {
              easing: "quadOut",
              onUpdate: function onUpdate(target, ratio) {
                // 实时修改摄像机、背景位置
                _this7.gameCameraNode.setWorldPosition(target);
                _this7.bgNode.setWorldPosition(target);
              },
              onComplete: function onComplete(target) {
                resolve(0);
              }
            }).start();
          });
        };
        _proto.jumpEnd = function jumpEnd() {
          var _this8 = this;
          this.runUINode.getChildByPath('Tip').active = false;
          var footholdConfig = this.gameConfig['footholds'][this.nextFootholdNode.name];
          var nowDistance = Vec3.distance(this.roleNode.getWorldPosition(), this.nowFootholdNode.getWorldPosition());
          var nowFootHoldRadius = this.gameConfig['footholds'][this.nowFootholdNode.name]['radius'];
          var nextDistance = Vec3.distance(this.roleNode.getWorldPosition(), this.nextFootholdNode.getWorldPosition());
          var nextFootHoldRadius = this.gameConfig['footholds'][this.nextFootholdNode.name]['radius'];
          // 跳到下一个
          if (nextDistance <= nextFootHoldRadius) {
            if (nextDistance > 3) {
              this.audioManager.playScore();
              this.score += 1;
              this.generateScoreText();
            } else {
              this.audioManager.playExactScore();
              this.score += footholdConfig['exactScore'] || 2;
              this.generateScoreText(footholdConfig['exactScore'] || 2);
              // 精准跳跃特效
              var runtime = 0.6;
              var exactScoreNode = this.roleEffectsNode.getChildByPath('ExactScore');
              var exactScoreOpacity = exactScoreNode.getComponent(UIOpacity);
              exactScoreNode.active = true;
              tween(exactScoreNode).parallel(tween(exactScoreNode).to(runtime, {
                scale: new Vec3(2, 2)
              }), tween(exactScoreOpacity).to(0, {
                opacity: 0
              }).to(runtime * 0.2, {
                opacity: 220
              }).to(runtime * 0.6, {
                opacity: 220
              }).to(runtime * 0.2, {
                opacity: 0
              })).call(function () {
                exactScoreNode.active = false;
                exactScoreNode.setScale(1, 1);
              }).start();
            }
            // 生成下一个落脚点
            this.nowFootholdNode = this.nextFootholdNode;
            this.nextFootholdNode = this.generateFoothold();
            // 视角
            this.viewUpdate().then(function () {
              _this8.jumpFlag = false;
            });
            // 只留x个落脚点
            if (this.footholdsNode.children.length > 8) {
              this.footholdsNode.children[this.footholdsNode.children.length - 1].destroy();
            }
          }
          // 原地挪
          else if (nowDistance <= nowFootHoldRadius) {
            this.viewUpdate().then(function () {
              _this8.jumpFlag = false;
            });
          }
          // 掉落，游戏结束
          else {
            this.audioManager.playDie();
            // 更改角色掉落时的节点顺序，达到正确覆盖效果，判断在落脚点的前面还是后面
            var nextFlag = Vec3.distance(this.roleNode.getWorldPosition(), this.nowFootholdNode.getWorldPosition()) - Vec3.distance(this.nextFootholdNode.getWorldPosition(), this.nowFootholdNode.getWorldPosition()) > 0;
            this.footholdsNode.insertChild(this.roleNode, nextFlag ? 0 : 1);
            // 掉落动画
            tween(this.roleImgNode).to(0.6, {
              position: this.roleImgInitPos.clone().add3f(0, -40, 0)
            }).call(function () {
              _this8.gameOver();
              _this8.jumpFlag = false;
            }).start();
          }
        };
        _proto.generateScoreText = function generateScoreText(score) {
          if (score === void 0) {
            score = 1;
          }
          var textNode = instantiate(this.scoreTextPrefab);
          this.scoreTextsNode.addChild(textNode);
          textNode.getComponent(Label).string = "+" + score;
          //文本节点起始位置在角色头顶上方 + x
          var startPos = this.roleNode.getWorldPosition().add3f(0, this.roleNode.getComponent(UITransform).contentSize.height + 10, 0);
          textNode.setWorldPosition(startPos);
          tween(textNode).parallel(
          // 消失动画
          tween(textNode.getComponent(UIOpacity)).to(0, {
            opacity: 255
          }).to(0.7, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }),
          // 移动动画
          tween(textNode).to(1, {
            worldPosition: startPos.clone().add3f(0, 30, 0)
          })).call(function () {
            textNode.destroy();
          }).start();
        };
        _proto.gameOver = function gameOver() {
          this.setGameStauts(GameStatus.end);
          this.roleNode.destroy();
        };
        _proto.onBeginBtnClick = function onBeginBtnClick() {
          this.setGameStauts(GameStatus.running);
          this.nextFootholdNode = this.generateFoothold();
          this.viewUpdate();
        };
        _proto.onAgainBtnClick = function onAgainBtnClick() {
          this.initData();
        };
        _proto.update = function update(deltaTime) {
          if (this.gameStatus === GameStatus.running) {
            if (this.pressFlag) {
              this.pressTime += deltaTime;
            }
          }
        };
        _createClass(TYTGameManager, [{
          key: "score",
          get: function get() {
            return this._score;
          },
          set: function set(v) {
            this._score = v;
            this.scoreNode.getComponent(Label).string = "\u5F97\u5206\uFF1A" + this.score;
          }
        }]);
        return TYTGameManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TYTGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './ModuleDef.ts', './RoomMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, GameMgr, SubGameMgr, SubGameDef, ModuleDef, RoomMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "ddfdeKcnaxDi7PifP/+KMpj", "TYTGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TYTGameMgr = exports('TYTGameMgr', (_dec = ccclass('TYTGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(TYTGameMgr, _GameMgr);
        function TYTGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameType = SubGameDef.TYT;
          _this._entryScene = {
            name: 'lobby_TYT',
            bundle: ModuleDef.TYT
          };
          _this._gameScene = {
            name: 'tyt',
            bundle: ModuleDef.TYT
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = TYTGameMgr.prototype;
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {};
        _proto.initSoloMode = function initSoloMode() {
          RoomMgr.inst.reset();
          this.reset();
          SubGameMgr.gameMgr = this;
        };
        _createClass(TYTGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new TYTGameMgr();
            }
            return this._inst;
          }
        }]);
        return TYTGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(TYTGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TYTLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TYTGameMgr.ts', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, TYTGameMgr, UserMgr, SceneDef, UIAnnouncement;
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
      TYTGameMgr = module.TYTGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      UIAnnouncement = module.UIAnnouncement;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6f290dDZi1D3raDtBPxYcMI", "TYTLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TYTLobbyScene = exports('TYTLobbyScene', (_dec = ccclass('TYTLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TYTLobbyScene, _Component);
        function TYTLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TYTLobbyScene.prototype;
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
        _proto.onBtnSoloModeClicked = function onBtnSoloModeClicked() {
          TYTGameMgr.inst.initSoloMode();
          tgx.UIWaiting.show();
          tgx.SceneUtil.loadScene(TYTGameMgr.inst.gameScene);
        };
        return TYTLobbyScene;
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

(function(r) {
  r('virtual:///prerequisite-imports/module_tyt', 'chunks:///_virtual/module_tyt'); 
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