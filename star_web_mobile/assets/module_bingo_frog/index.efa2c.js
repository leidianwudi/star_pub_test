System.register("chunks:///_virtual/BIngoFrogBuyCardMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BingoFrogData.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, Vec3, UIOpacity, director, Component, BingoFrogData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      BingoFrogData = module.BingoFrogData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e1a2al97ZlEp4y9dN94oOKa", "BIngoFrogBuyCardMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BIngoFrogBuyCardMgr = exports('BIngoFrogBuyCardMgr', (_dec = ccclass('BIngoFrogBuyCardMgr'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BIngoFrogBuyCardMgr, _Component);
        function BIngoFrogBuyCardMgr() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BIngoFrogBuyCardMgr.prototype;
        _proto.onBuyCard = function onBuyCard(event, data) {
          //data 购买了几张卡牌（5为特殊玩法，统一是4张）
          var cardNum = Number(data);
          tween(this.node).to(.2, {
            scale: Vec3.ZERO
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(.2, {
            opacity: 0
          }).call(function () {
            director.emit(BingoFrogData.EventName.buyCardSuccess, cardNum);
          }).start();
        };
        return BIngoFrogBuyCardMgr;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BingoFrogCardGrid.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BingoFrogData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, Label, Sprite, SpriteFrame, Node, director, Vec3, tween, Component, BingoFrogData;
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
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      director = module.director;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      BingoFrogData = module.BingoFrogData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a56d59rN9pH5pTe+YmOEemb", "BingoFrogCardGrid", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ballStatus = /*#__PURE__*/function (ballStatus) {
        ballStatus[ballStatus["COMMON"] = 0] = "COMMON";
        ballStatus[ballStatus["CHECK"] = 1] = "CHECK";
        ballStatus[ballStatus["BINGO"] = 2] = "BINGO";
        ballStatus[ballStatus["TURBO"] = 3] = "TURBO";
        ballStatus[ballStatus["TIP"] = 4] = "TIP";
        ballStatus[ballStatus["MISS"] = 5] = "MISS";
        return ballStatus;
      }(ballStatus || {}); //缺少这个就BINGO的
      var ballColor = [new Color().fromHEX('#ffd28f'), new Color().fromHEX('#fef600'), new Color().fromHEX('#ffd28f'), new Color().fromHEX("#fef600"), Color.RED, new Color().fromHEX('#530101')];
      var BingoFrogCardGrid = exports('BingoFrogCardGrid', (_dec = ccclass('BingoFrogCardGrid'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BingoFrogCardGrid, _Component);
        function BingoFrogCardGrid() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "numLab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballStatusFrames", _descriptor3, _assertThisInitialized(_this));
          _this._ballNumber = 0;
          //当前球的编号
          _this._isHave = false;
          //是否发过这颗球
          _this._ballBlinkTween = null;
          _this._isCheck = false;
          //是否已经有了且已经点击过了
          _this._index = -1;
          //当前数字格子的下标
          _this._cardIndex = -1;
          //当前格子属于那一张卡的下标
          _this._isMiss = false;
          //是否是缺的那一个
          _this._cardMgr = null;
          _this._isBingo = false;
          return _this;
        }
        var _proto = BingoFrogCardGrid.prototype;
        _proto.initGrid = function initGrid(data, index, cardIndex, parent) {
          this._index = index;
          this._cardIndex = cardIndex;
          this._cardMgr = parent;
          this.numLab.string = data.number + '';
          this._ballNumber = data.number;
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          director.on(BingoFrogData.EventName.newBall, this.ballListener, this);
          director.on(BingoFrogData.EventName.frogMissBall, this.missBall, this);
          director.on(BingoFrogData.EventName.bingo, this.bingo, this);
        };
        _proto.onDisable = function onDisable() {
          this.offListener();
          director.off(BingoFrogData.EventName.newBall, this.ballListener, this);
          director.off(BingoFrogData.EventName.frogMissBall, this.missBall, this);
        };
        _proto.offListener = function offListener() {
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          director.off(BingoFrogData.EventName.bingo, this.bingo, this);
        };
        _proto.bingo = function bingo(bingoArr, cardIndex) {
          this.offListener();
          this._isBingo = true;
          this._ballBlinkTween && (this._ballBlinkTween.stop(), this._ballBlinkTween = null);
          this.numLab.node.scale = Vec3.ONE;
          if (bingoArr.includes(this._index) && cardIndex === this._cardIndex) {
            this.numLab.color = ballColor[ballStatus.BINGO];
            this.ballBg.spriteFrame = this.ballStatusFrames[ballStatus.BINGO];
          } else {
            if (this._isHave) {
              //有出现过但是未点击的全部设为已点击
              BingoFrogData.touchLightBalls[this._cardIndex].push(this._index);
              this.numLab.color = ballColor[ballStatus.CHECK];
              this.ballBg.spriteFrame = this.ballStatusFrames[ballStatus.CHECK];
            }
          }
        };
        _proto.missBall = function missBall(msg) {
          if (msg.missBallArr.includes(this._index) && msg.cardIndex === this._cardIndex) {
            if (!this._ballBlinkTween) this.numLab.color = ballColor[ballStatus.MISS];
            this.ballBg.spriteFrame = this.ballStatusFrames[ballStatus.MISS];
            this._isMiss = true;
          }
        };
        _proto.ballListener = function ballListener(data) {
          if (data === this._ballNumber && !this._isHave) {
            this._isHave = true;
            if (this._isBingo) {
              this.check();
            } else {
              this.scheduleOnce(this.ballBlink, 1);
            }
          }
        };
        _proto.ballBlink = function ballBlink() {
          // if (this._isBingo) return;
          if (this._isCheck) return;
          this.numLab.color = ballColor[ballStatus.TIP];
          this._ballBlinkTween && (this._ballBlinkTween.stop(), this._ballBlinkTween = null);
          this._ballBlinkTween = tween(this.numLab.node).to(0.4, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.4, {
            scale: Vec3.ONE
          }).union().repeatForever();
          this._ballBlinkTween.start();
        };
        _proto.onTouchEnd = function onTouchEnd() {
          var _this2 = this;
          if (this._isHave) {
            this.check();
          } else {
            tween(this.numLab).to(0.1, {
              color: Color.BLACK
            }).to(0.1, {
              color: Color.WHITE
            }).union().repeat(3).call(function () {
              if (_this2._isCheck) {
                _this2.numLab.color = ballColor[ballStatus.CHECK];
              } else if (_this2._isMiss) {
                _this2.numLab.color = ballColor[ballStatus.MISS];
              } else {
                _this2.numLab.color = ballColor[ballStatus.COMMON];
              }
            }).start();
          }
        }

        //被点击响应后
        ;

        _proto.check = function check() {
          this._ballBlinkTween && (this._ballBlinkTween.stop(), this._ballBlinkTween = null);
          // Tween.stopAllByTarget(this.numLab)
          this.numLab.node.scale = Vec3.ONE;
          this._isCheck = true;
          this.ballBg.spriteFrame = this.ballStatusFrames[ballStatus.CHECK];
          this.numLab.color = ballColor[ballStatus.CHECK];
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          director.off(BingoFrogData.EventName.newBall, this.ballListener, this);
          BingoFrogData.touchLightBalls[this._cardIndex].push(this._index);
          if (BingoFrogData.touchLightBalls[this._cardIndex].length >= 4) {
            //当前卡片点亮大于等于4的检测是否有却一Bingo的
            var missBallArr = this.isMissingBall();
            if (missBallArr.length > 0) director.emit(BingoFrogData.EventName.frogMissBall, {
              missBallArr: missBallArr,
              cardIndex: this._cardIndex
            });
            if (!this._isBingo) this._cardMgr.testBingo(); //被点击了一个，检测有没有bingo
          }
        }

        //判断是否却少一个bingo，返回缺少那个的下标集合
        ;

        _proto.isMissingBall = function isMissingBall() {
          var data = BingoFrogData.bingoWayRules;
          var missBallArr = [];
          var missBall = [];
          for (var i = 0; i < data.length; i++) {
            if (missBall.length === 1) {
              missBallArr.push(missBall[0]);
            }
            missBall = [];
            for (var k = 0; k < data[i].length; k++) {
              if (!BingoFrogData.touchLightBalls[this._cardIndex].includes(data[i][k])) {
                missBall.push(data[i][k]);
              }
            }
          }
          return missBallArr;
        };
        return BingoFrogCardGrid;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ballBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ballStatusFrames", [_dec4], {
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

System.register("chunks:///_virtual/BingoFrogCardManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BingoFrogCardGrid.ts', './BingoFrogData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Prefab, Node, SpriteFrame, Sprite, sp, instantiate, v3, director, Component, BingoFrogCardGrid, BingoFrogData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Prefab = module.Prefab;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      sp = module.sp;
      instantiate = module.instantiate;
      v3 = module.v3;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      BingoFrogCardGrid = module.BingoFrogCardGrid;
    }, function (module) {
      BingoFrogData = module.BingoFrogData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "0c548TjtG1L9qc3rgt6aWea", "BingoFrogCardManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CardType = exports('CardType', /*#__PURE__*/function (CardType) {
        CardType[CardType["SMALL"] = 0] = "SMALL";
        CardType[CardType["BIG"] = 1] = "BIG";
        return CardType;
      }({}));
      Enum(CardType);
      var BingoFrogCardManager = exports('BingoFrogCardManager', (_dec = ccclass('BingoFrogCardManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property({
        type: CardType,
        tooltip: '大卡或小卡'
      }), _dec5 = property([SpriteFrame]), _dec6 = property({
        type: Sprite,
        tooltip: '展示的bingo节点'
      }), _dec7 = property({
        type: Node,
        tooltip: 'bingo后的遮罩'
      }), _dec8 = property({
        type: sp.Skeleton,
        tooltip: 'bingo后的文字动画展示'
      }), _dec9 = property({
        type: sp.Skeleton,
        tooltip: 'b后的动画展示'
      }), _dec10 = property({
        type: Node,
        tooltip: 'b后的动画展示'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BingoFrogCardManager, _Component);
        function BingoFrogCardManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ballPre", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardType", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardBgFrames", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bingoCom", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bingoMask", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bingoTextAni", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bingoAni", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turboTitle", _descriptor9, _assertThisInitialized(_this));
          _this._cardIndex = 0;
          _this._isBingo = false;
          return _this;
        }
        var _proto = BingoFrogCardManager.prototype;
        _proto.initCard = function initCard(data, cardIndex) {
          this._cardIndex = cardIndex;
          for (var index = 0; index < 25; index++) {
            var item = instantiate(this.ballPre);
            item.parent = this.content;
            item.getComponent(BingoFrogCardGrid).initGrid(data.items[index], index, this._cardIndex, this);
            var offset_y = index % 5;
            var offset_x = Math.floor(index / 5);
            if (this.cardType === CardType.BIG) {
              item.position = v3(-340 + 170 * offset_x, 285 - 167 * offset_y);
            } else {
              item.position = v3(-170 + 85 * offset_x, 145 - 83 * offset_y);
            }
          }
          director.on(BingoFrogData.EventName.Jackpot, this.entryJackpot, this);
          director.on(BingoFrogData.EventName.bingo, this.bingo, this);
        };
        _proto.onDisable = function onDisable() {
          director.off(BingoFrogData.EventName.Jackpot, this.entryJackpot, this);
          director.off(BingoFrogData.EventName.bingo, this.bingo, this);
        }

        //-----------------测试-检测是否达成bingo, 返回是否bingo及bingo的下标--------------------
        ;

        _proto.testBingo = function testBingo() {
          var data = BingoFrogData.bingoWayRules;
          var isBingo = false;
          var bingoBallArr = [];
          var missBall = [];
          for (var i = 0; i < data.length; i++) {
            for (var k = 0; k < data[i].length; k++) {
              if (!BingoFrogData.touchLightBalls[this._cardIndex].includes(data[i][k])) {
                missBall.push(data[i][k]);
              }
            }
            if (missBall.length === 0) {
              bingoBallArr = data[i];
              isBingo = true;
              break;
            }
            missBall = [];
          }
          isBingo && this.currentBingo(bingoBallArr);
          // return { missBallArr: missBallArr, isBingo: isBingo };
        }
        //----------------------------------------------------------------------------------------

        //进入奖池
        ;

        _proto.entryJackpot = function entryJackpot() {
          // if (this._isBingo) {

          // } else {

          // }
          this.bingoMask.active = false;
          this.bingoCom.node.active = false;
          this.turboTitle.active = true;
          this.bingoMask.active = false;
          this.node.getComponent(Sprite).spriteFrame = this.cardBgFrames[1];
        }

        //当前卡牌bingo
        ;

        _proto.currentBingo = function currentBingo(bingoBallArr) {
          var _this2 = this;
          this._isBingo = true;
          this.bingoMask.active = true;
          this.bingoTextAni.node.active = true;
          this.bingoAni.node.active = true;
          this.bingoAni.setAnimation(0, 'animation2', false);
          this.bingoTextAni.setAnimation(0, 'animation', false);
          director.emit(BingoFrogData.EventName.bingo, bingoBallArr, this._cardIndex);
          this.scheduleOnce(function () {
            _this2.bingoTextAni.node.active = false;
            _this2.bingoAni.node.active = false;
            _this2.bingoCom.node.active = true;
          }, 2);
        }

        //其他卡牌bingo处理
        ;

        _proto.bingo = function bingo(bingoArr, cardIndex) {
          if (cardIndex != this._cardIndex) this.bingoMask.active = true;
        };
        return BingoFrogCardManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ballPre", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CardType.BIG;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cardBgFrames", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bingoCom", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bingoMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bingoTextAni", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bingoAni", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "turboTitle", [_dec10], {
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

System.register("chunks:///_virtual/BingoFrogData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "8eb07z+xl1MSqllzuXWgo1V", "BingoFrogData", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EventName = {
        Jackpot: "FrogJackpot",
        bingo: 'FrogBingo',
        frogMissBall: 'FrogMissBall',
        newBall: 'FrogNewNall',
        buyCardSuccess: 'FrogBuyCardSuccess'
      };
      var BingoFrogData = exports('BingoFrogData', (_dec = ccclass('BingoFrogData'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BingoFrogData, _Component);
        function BingoFrogData() {
          return _Component.apply(this, arguments) || this;
        }
        //展示所有中奖的路径下标（-1），竖向
        BingoFrogData.getRandomNumbersInRange = function getRandomNumbersInRange(min, max, n) {
          // 检查参数有效性
          if (n > max - min + 1) {
            return [];
          }
          var numbers = new Set();

          // 生成不重复的随机数
          while (numbers.size < n) {
            var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.add(randomNum);
          }
          return Array.from(numbers);
        };
        return BingoFrogData;
      }(Component), _class2.EventName = EventName, _class2.touchLightBalls = [[], [], [], []], _class2.bingoWayRules = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [0, 6, 12, 18, 24], [4, 8, 12, 16, 20], [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24]], _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BingoFrogGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './RoomMgr.ts', './LanguageData.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, UserMgr, SceneDef, RoomMgr, LanguageData;
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
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1bc9dMiqhhE7pBuallCdt+j", "BingoFrogGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BingoFrogGameHUD = exports('BingoFrogGameHUD', (_dec = ccclass('BingoFrogGameHUD'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BingoFrogGameHUD, _Component);
        function BingoFrogGameHUD() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BingoFrogGameHUD.prototype;
        _proto.start = function start() {
          if (!UserMgr.inst.uid) {
            tgx.SceneUtil.loadScene(SceneDef.START);
            return;
          }
          tgx.UIMgr.inst.closeAll();

          // if (RoomMgr.inst.isOnline) {
          //     // tgx.UIMgr.inst.showUI(UIChat, null, null, gameNet);
          // }
        };

        _proto.onBtnExitClicked = /*#__PURE__*/function () {
          var _onBtnExitClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //this.node.getParent().getChildByName('Machine').getComponent(AudioSource).stop();
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
        return BingoFrogGameHUD;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BingoFrogGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameMgr.ts', './GameMgr.ts', './SubGameDef.ts', './ModuleDef.ts', './RoomMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, SubGameMgr, GameMgr, SubGameDef, ModuleDef, RoomMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "903f7YXL8tPbLxuKEfzPZEz", "BingoFrogGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BingoFrogGameMgr = exports('BingoFrogGameMgr', (_dec = ccclass('BingoFrogGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(BingoFrogGameMgr, _GameMgr);
        function BingoFrogGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._gameType = SubGameDef.BINGO_FROG;
          _this._entryScene = {
            name: 'lobby_bingo_frog',
            bundle: ModuleDef.BINGO_FROG
          };
          _this._gameScene = {
            name: 'game_bingo_frog',
            bundle: ModuleDef.BINGO_FROG
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = BingoFrogGameMgr.prototype;
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {};
        _proto.initSoloMode = function initSoloMode() {
          RoomMgr.inst.reset();
          this.reset();
          SubGameMgr.gameMgr = this;
        };
        _createClass(BingoFrogGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new BingoFrogGameMgr();
            }
            return this._inst;
          }
        }]);
        return BingoFrogGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      // console.error("BingoFrogGameMgr 加载成功");
      SubGameMgr.inst.registerGameMgr(BingoFrogGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BingoFrogLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './BingoFrogGameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, BingoFrogGameMgr, SubGameMgr, SubGameDef;
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
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      UIAnnouncement = module.UIAnnouncement;
    }, function (module) {
      BingoFrogGameMgr = module.BingoFrogGameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "85cbfY1e7hHPLq5bGzLRi53", "BingoFrogLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BingoFrogLobbyScene = exports('BingoFrogLobbyScene', (_dec = ccclass('BingoFrogLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BingoFrogLobbyScene, _Component);
        function BingoFrogLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BingoFrogLobbyScene.prototype;
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
                  BingoFrogGameMgr.inst.initSoloMode();
                  SubGameMgr.inst.CreateRoom(SubGameDef.BINGO_FROG, true);
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
        return BingoFrogLobbyScene;
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

System.register("chunks:///_virtual/BingoFrogMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BingoFrogCardManager.ts', './BingoFrogData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Prefab, Node, Label, NodePool, instantiate, macro, director, UIOpacity, tween, randomRangeInt, v3, find, Sprite, sp, Component, BingoFrogCardManager, BingoFrogData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      macro = module.macro;
      director = module.director;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      randomRangeInt = module.randomRangeInt;
      v3 = module.v3;
      find = module.find;
      Sprite = module.Sprite;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      BingoFrogCardManager = module.BingoFrogCardManager;
    }, function (module) {
      BingoFrogData = module.BingoFrogData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "d51e8nHXBRG0qlEx1OwP+/X", "BingoFrogMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var bingoLab = ['B', 'I', 'N', 'G', 'O']; //发出的球中的字母
      var dripWays = [new Vec3(-90, 53), new Vec3(14, 42), new Vec3(96, -1), new Vec3(143, -63), new Vec3(138, -124)]; //球的每一颗路劲

      var BingoFrogMain = exports('BingoFrogMain', (_dec = ccclass('BingoFrogMain'), _dec2 = property(BingoFrogCardManager), _dec3 = property(Prefab), _dec4 = property({
        type: Prefab,
        tooltip: '卡牌预制体'
      }), _dec5 = property({
        type: [Node],
        tooltip: '卡牌容器'
      }), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property({
        type: Label,
        tooltip: '已发出的球数量'
      }), _dec10 = property({
        type: Label,
        tooltip: '提示该局发出的球数'
      }), _dec11 = property({
        type: Node,
        tooltip: 'bingo信息节点'
      }), _dec12 = property({
        type: Node,
        tooltip: '奖池bingo信息节点'
      }), _dec13 = property({
        type: Node,
        tooltip: 'bingo信息位置节点'
      }), _dec14 = property({
        type: Node,
        tooltip: '奖池bingo信息位置节点'
      }), _dec15 = property({
        type: Node,
        tooltip: '单张牌节点'
      }), _dec16 = property({
        type: Node,
        tooltip: '多张牌节点'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BingoFrogMain, _Component);
        function BingoFrogMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardMgr", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballPre", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardPre", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardContent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballContent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bingoRuleContent", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ruleBlock", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballNumLab", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalBallLab", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bingoInfoNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turboInfoNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bingoInfoPosNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turboInfoPosNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oneCardNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moreCardNode", _descriptor15, _assertThisInitialized(_this));
          _this._ballPool = new NodePool();
          _this._bingoRuleIndex = 0;
          _this._ballArr = [];
          //---------------------------------
          _this._sendBall = [];
          //-------测试模拟发球--------
          _this._sendIndex = 0;
          return _this;
        }
        var _proto = BingoFrogMain.prototype;
        _proto.start = function start() {
          this.createrSendBall();
          this.initGame();
        };
        _proto.initGame = function initGame() {
          if (this.bingoRuleContent.children.length <= 0) {
            for (var i = 0; i < 5; i++) {
              var item = instantiate(this.ruleBlock);
              item.parent = this.bingoRuleContent;
            }
          }
          this.schedule(this.showBingoRule, 2, macro.REPEAT_FOREVER, .1); //开启中奖路线轮播
          this.ballNumLab.node.parent.active = false;
          director.on(BingoFrogData.EventName.buyCardSuccess, this.buyCardSuccess, this);
          //---------------------------------------------------
          // this.cardMgr.initCard(testJson.cards[0]);
          // this.schedule(this.testSendBall, 3, macro.REPEAT_FOREVER, 3);
          this.totalBallLab.string = this._sendBall.length + " BALLS";
          director.on(BingoFrogData.EventName.bingo, this.bingo, this);
        };
        _proto.buyCardSuccess = function buyCardSuccess(cardNumer) {
          var _this2 = this;
          if (cardNumer === 1) {
            this.oneCardNode.active = true;
            this.oneCardNode.scale = Vec3.ZERO;
            this.oneCardNode.getComponent(UIOpacity).opacity = 0;
            tween(this.oneCardNode).to(.2, {
              scale: Vec3.ONE
            }).start();
            tween(this.oneCardNode.getComponent(UIOpacity)).to(.2, {
              opacity: 255
            }).start();

            //---------------------------------------------------
            this.cardMgr.initCard(this.createrTestData(), 0);
          } else {
            this.moreCardNode.active = true;
            var _loop = function _loop(i) {
              if (i < cardNumer) {
                var card = instantiate(_this2.cardPre);
                card.parent = _this2.cardContent[i];
                card.getComponent(BingoFrogCardManager).initCard(_this2.createrTestData(), i);
              }
              _this2.cardContent[i].scale = Vec3.ZERO;
              _this2.cardContent[i].getComponent(UIOpacity).opacity = 0;
              _this2.scheduleOnce(function () {
                tween(_this2.cardContent[i]).to(.2, {
                  scale: Vec3.ONE
                }).start();
                tween(_this2.cardContent[i].getComponent(UIOpacity)).to(.2, {
                  opacity: 255
                }).start();
              }, .2 * i);
            };
            for (var i = 0; i < this.cardContent.length; i++) {
              _loop(i);
            }
          }

          //---------------------------------------------------
          this.schedule(this.testSendBall, 3, macro.REPEAT_FOREVER, 3);
        };
        _proto.testSendBall = function testSendBall() {
          this.addCommonBall(this._sendBall[this._sendIndex]);
          this._ballArr.push(this._sendBall[this._sendIndex]);
          this.ballNumLab.node.parent.active = true;
          this.ballNumLab.string = this._ballArr.length + '';
          director.emit(BingoFrogData.EventName.newBall, this._sendBall[this._sendIndex]);
          this._sendIndex++;
          if (this._sendIndex >= this._sendBall.length) {
            this.unschedule(this.testSendBall);
            this._sendIndex = 0;
          }
        };
        _proto.createrTestData = function createrTestData() {
          var numbers = BingoFrogData.getRandomNumbersInRange(1, 75, 25);
          var data = {
            items: []
          };
          for (var i = 0; i < numbers.length; i++) {
            var item = {
              number: numbers[i]
            };
            data.items.push(item);
          }
          return data;
        };
        _proto.createrSendBall = function createrSendBall() {
          var num = randomRangeInt(45, 73);
          this._sendBall = [];
          for (var i = 0; i < num; i++) {
            var item = BingoFrogData.getRandomNumbersInRange(1, 75, 1);
            this._sendBall.push(item[0]);
          }
        }
        //----------------------------------
        ;

        _proto.bingo = function bingo() {
          var _this3 = this;
          //bingo信息移出屏幕外的终点位置
          var endPos = this.bingoInfoPosNode.position.clone().add3f(1000, 0, 0);
          //奖池信息移出屏幕外的终点位置
          var endTurboPos = this.turboInfoPosNode.position.clone().add3f(1000, 0, 0);
          tween(this.bingoInfoNode).to(2, {
            position: endPos
          }).delay(.1).call(function () {
            _this3.turboInfoNode.setWorldPosition(_this3.bingoInfoNode.worldPosition.clone());
          }).delay(1).call(function () {
            //奖池信息移动至bingo信息未移动的位置
            tween(_this3.turboInfoNode).to(2, {
              worldPosition: _this3.bingoInfoPosNode.worldPosition.clone()
            }).call(function () {
              director.emit(BingoFrogData.EventName.Jackpot);
            }).start();
          }).start();
          tween(this.turboInfoNode).to(2, {
            position: endTurboPos
          }).start();

          //--------------------------------------------------------
          this.unschedule(this.testSendBall);
          this.schedule(this.testSendBall, 1, macro.REPEAT_FOREVER, 6);
        }

        //展示bingo的中奖路线
        ;

        _proto.showBingoRule = function showBingoRule() {
          var data = BingoFrogData.bingoWayRules[this._bingoRuleIndex];
          for (var i = 0; i < data.length; i++) {
            var carryY = data[i] % 5;
            var carryX = Math.floor(data[i] / 5);
            var pos = v3(-39 + 20 * carryX, 39 - 20 * carryY);
            this.bingoRuleContent.children[i].position = pos;
          }
          this._bingoRuleIndex++;
          if (this._bingoRuleIndex > BingoFrogData.bingoWayRules.length - 1) this._bingoRuleIndex = 0;
        };
        _proto.addCommonBall = function addCommonBall(ballNumer) {
          var ball = null;
          if (this._ballPool.size() > 0) {
            ball = this._ballPool.get();
          } else {
            ball = instantiate(this.ballPre);
          }
          ball.parent = this.ballContent;
          this.hideDrip(ball);
          find('label', ball).getComponent(Label).string = ballNumer.toString();
          //取BINGO中的一个字母，每15个数字一个字母
          find('bingo', ball).getComponent(Label).string = bingoLab[Math.floor((ballNumer - 1) / 15)];
          ball.scale = Vec3.ZERO;
          ball.getComponent(UIOpacity).opacity = 0;
          ball.position = v3(-90, 53);
          tween(ball.getComponent(UIOpacity)).to(0.5, {
            opacity: 255
          }).start();
          tween(ball).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }).start();
          this.moveCommonBall();
        };
        _proto.moveCommonBall = function moveCommonBall() {
          var _this4 = this;
          if (this.ballContent.children.length > 1 && this.ballContent.children.length <= 5) {
            var _scale = new Vec3();
            var _loop2 = function _loop2(index) {
              var element = _this4.ballContent.children[index];
              var pos = dripWays[_this4.ballContent.children.length - 1 - index];
              var measure = 1 - 0.2 * (_this4.ballContent.children.length - 1 - index);
              _scale = new Vec3(measure, measure, measure);
              tween(element).to(0.5, {
                scale: _scale,
                position: pos
              }).call(function (ball) {
                if (_this4.ballContent.children.length === 5) {
                  if (index === 0) {
                    _this4.showDrip(ball);
                  }
                }
              }).start();
            };
            for (var index = 0; index < this.ballContent.children.length - 1; index++) {
              _loop2(index);
            }
          }
          // if (this.ballContent.children.length >= 7) {
          //     for (let i = 6; i < this.ballContent.children.length; i++) {
          //         this.ballContent.children[this.ballContent.children.length - 1].removeFromParent();
          //         if (this.ballContent.children.length <= 6) break;
          //     }
          // }
          if (this.ballContent.children.length < 6) return;
          var ball = this.ballContent.children[0];
          tween(ball).to(0.5, {
            position: new Vec3(138, -530)
          }).call(function (node) {
            _this4._ballPool.put(node);
          }).start();
          var scale = new Vec3();
          var _loop3 = function _loop3(i) {
            var ball2 = _this4.ballContent.children[i];
            var pos = dripWays[_this4.ballContent.children.length - 1 - i];
            var measure = 1 - 0.2 * (_this4.ballContent.children.length - 1 - i);
            scale = new Vec3(measure, measure, measure);
            tween(ball2).to(0.5, {
              scale: scale,
              position: pos
            }).call(function (ball) {
              if (i === 1) {
                _this4.showDrip(ball);
              }
            }).start();
          };
          for (var i = 1; i < this.ballContent.children.length - 1; i++) {
            _loop3(i);
          }
        };
        _proto.showDrip = function showDrip(ball, isScale) {
          if (isScale === void 0) {
            isScale = true;
          }
          ball.getComponent(Sprite).enabled = false;
          find('label', ball).active = false;
          find('bingo', ball).active = false;
          // if (Datas_game_903.isEntryJackpot) {
          //     const drip = find('drip', ball);
          //     drip.active = true;
          // } else {
          //     const dripAni = find('dripAni', ball);
          //     dripAni.active = true;
          //     dripAni.getComponent(sp.Skeleton).setAnimation(0, 'animation', false);
          // }
          var dripAni = find('dripAni', ball);
          dripAni.active = true;
          dripAni.getComponent(sp.Skeleton).setAnimation(0, 'animation', false);
          if (isScale) ball.scale = Vec3.ONE;
        };
        _proto.hideDrip = function hideDrip(ball) {
          ball.getComponent(Sprite).enabled = true;
          find('label', ball).active = true;
          find('bingo', ball).active = true;
          find('drip', ball).active = false;
          find('dripAni', ball).active = false;
        };
        return BingoFrogMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardMgr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ballPre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardPre", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cardContent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ballContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bingoRuleContent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ruleBlock", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ballNumLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "totalBallLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bingoInfoNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "turboInfoNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bingoInfoPosNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "turboInfoPosNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "oneCardNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "moreCardNode", [_dec16], {
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

System.register("chunks:///_virtual/module_bingo_frog", ['./BIngoFrogBuyCardMgr.ts', './BingoFrogCardGrid.ts', './BingoFrogCardManager.ts', './BingoFrogData.ts', './BingoFrogGameHUD.ts', './BingoFrogGameMgr.ts', './BingoFrogLobbyScene.ts', './BingoFrogMain.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_bingo_frog', 'chunks:///_virtual/module_bingo_frog'); 
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