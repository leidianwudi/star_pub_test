System.register("chunks:///_virtual/autoPanel2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cDragonhatch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, Num, dragonhatch;
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
      Color = module.Color;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "28ea1dMSsxFq6dK2V+jHPoy", "autoPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var autoPanel = exports('autoPanel', (_dec = ccclass('autoPanel'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec3 = property({
        type: Node,
        tooltip: ""
      }), _dec4 = property({
        type: Label,
        tooltip: "用户金币"
      }), _dec5 = property({
        type: Label,
        tooltip: "本局总注"
      }), _dec6 = property({
        type: Label,
        tooltip: "赢钱金额"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(autoPanel, _Component);
        function autoPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundedButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserCoin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurBet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCoin_lab", _descriptor5, _assertThisInitialized(_this));
          _this.autoNum = 0;
          _this.autoChooseColor = [243, 168, 85];
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = autoPanel.prototype;
        _proto.init = function init() {
          dragonhatch.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.money);
          this.lblCurBet.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.betSum);
          this.winCoin_lab.string = dragonhatch.slotCtrl.winCoin_lab.string;
        };
        //选择自动次数
        _proto.onCLick_chooseAutoNum = function onCLick_chooseAutoNum(event, args) {
          this.roundedButton.color = new Color(255, 200, 36);
          this.roundedButton.opacity = 255;
          this.autoNum = parseInt(args);
          var chooseNode = event.target.parent;
          for (var i in chooseNode.children) {
            chooseNode.children[i].children[0].children[0].color = new Color(100, 100, 110);
          }
          event.target.children[0].children[0].color = new Color(this.autoChooseColor[0], this.autoChooseColor[1], this.autoChooseColor[2]);
        }

        //开始自动
        ;

        _proto.onCLick_startAuto = function onCLick_startAuto() {
          if (this.autoNum > 0) {
            this.onClose();
            dragonhatch.main.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // dragonhatch.main.audio.playclickopen();
          this.node.parent.children[0].active = true;
          this.node.active = true;
          this.showPos = this.panel.h / 2;
          this.hidePos = -this.panel.h / 2;
          this.panel.y = this.hidePos;
          tween(this.panel).to(0.2, {
            y: this.showPos
          }).start();
          tween(this.node).delay(0.2).call(function () {
            tween(_this2.panel.children[0]).to(0.2, {
              opacity: 255
            }).start();
          }).start();
        };
        _proto.hidePanel = function hidePanel() {
          var _this3 = this;
          tween(this.panel).to(0.2, {
            y: this.hidePos
          }).call(function () {
            _this3.node.parent.children[0].active = false;
            _this3.node.active = false;
          }).start();
        };
        _proto.onClose = function onClose() {
          // dragonhatch.main.audio.playclickclose();
          this.hidePanel();
        };
        return autoPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roundedButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblUserCoin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblCurBet", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winCoin_lab", [_dec6], {
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

System.register("chunks:///_virtual/betNum3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "80174uUqdhGVrXEvtXUPiA5", "betNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var betNum = exports('betNum', (_dec = ccclass('betNum'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(betNum, _Component);
        function betNum() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.valNum = 0;
          return _this;
        }
        return betNum;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/betPanel3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './betNum3.ts', './cDragonhatch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, Num, betNum, dragonhatch;
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
      Prefab = module.Prefab;
      PageView = module.PageView;
      Label = module.Label;
      instantiate = module.instantiate;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      betNum = module.betNum;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "98cebda7PhDjJiqvHcruzHb", "betPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var betPanel = exports('betPanel', (_dec = ccclass('betPanel'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec3 = property({
        type: Prefab,
        tooltip: ""
      }), _dec4 = property({
        type: Prefab,
        tooltip: ""
      }), _dec5 = property({
        type: PageView,
        tooltip: ""
      }), _dec6 = property({
        type: PageView,
        tooltip: ""
      }), _dec7 = property({
        type: PageView,
        tooltip: ""
      }), _dec8 = property({
        type: Label,
        tooltip: ""
      }), _dec9 = property({
        type: Label,
        tooltip: "用户金币"
      }), _dec10 = property({
        type: Label,
        tooltip: "本局总注"
      }), _dec11 = property({
        type: Label,
        tooltip: "赢钱金额"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(betPanel, _Component);
        function betPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chooseBet_pb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chooseTotalBet_pb", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chooseBet_list1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chooseBet_list2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chooseBet_list3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbLine", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserCoin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurBet", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCoin_lab", _descriptor10, _assertThisInitialized(_this));
          _this.numList = [];
          _this.betList = [];
          _this.line = 0;
          _this.val1 = 0;
          _this.val2 = 0;
          _this.val3 = 0;
          _this.tempi = 0;
          _this.tempj = 0;
          _this.tempindex = 0;
          _this.sumList = [];
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = betPanel.prototype;
        _proto.init = function init() {
          dragonhatch.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = dragonhatch.BETNUM;
          this.betList = dragonhatch.BET;
          this.line = dragonhatch.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.money);
          this.lblCurBet.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.betSum);
          this.winCoin_lab.string = dragonhatch.slotCtrl.winCoin_lab.string;
        };
        _proto.initBetContent = function initBetContent() {
          this.val1 = this.numList[0];
          this.val2 = this.betList[0];
          this.val3 = this.numList[0] * this.betList[0] * this.line;
          this.chooseBet_list1.removeAllPages();
          for (var i = 0; i < this.numList.length; i++) {
            var newNode = instantiate(this.chooseBet_pb);
            newNode.children[0].active = i == 0;
            newNode.children[1].active = i == this.numList.length - 1;
            newNode.getComponent(Label).string = Num.exchangeToThousands(dragonhatch.exchangeRate, this.numList[i]);
            newNode.getComponent(betNum).valNum = this.numList[i];
            this.chooseBet_list1.addPage(newNode);
          }
          this.chooseBet_list2.removeAllPages();
          for (var _i = 0; _i < this.betList.length; _i++) {
            var _newNode = instantiate(this.chooseBet_pb);
            _newNode.children[0].active = false;
            _newNode.children[1].active = false;
            _newNode.getComponent(Label).string = this.betList[_i] + "";
            _newNode.getComponent(betNum).valNum = this.betList[_i];
            this.chooseBet_list2.addPage(_newNode);
          }
          //动态计算第三列的值
          var list = [];
          for (var _i2 = 0; _i2 < this.numList.length; _i2++) {
            for (var j = 0; j < this.betList.length; j++) {
              list.push(this.numList[_i2] * 1000 * this.betList[j] * this.line / 1000);
            }
          }
          var sumList = Array.from(new Set(list));
          sumList.sort(function (a, b) {
            return a - b;
          });
          this.sumList = sumList;
          this.chooseBet_list3.removeAllPages();
          for (var _i3 = 0; _i3 < sumList.length; _i3++) {
            var _newNode2 = instantiate(this.chooseTotalBet_pb);
            _newNode2.children[0].active = _i3 == 0;
            _newNode2.children[1].active = _i3 == sumList.length - 1;
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(dragonhatch.exchangeRate, sumList[_i3]);
            _newNode2.getComponent(betNum).valNum = sumList[_i3];
            this.chooseBet_list3.addPage(_newNode2);
          }
          this.lbLine.string = this.line + "";
          this.chooseBet_list1.node.on('page-turning', this.cb_pt1, this);
          this.chooseBet_list2.node.on('page-turning', this.cb_pt2, this);
          this.chooseBet_list3.node.on('page-turning', this.cb_pt3, this);
        };
        _proto.cb_pt1 = function cb_pt1(pageView) {
          this.val1 = this.numList[pageView.getCurrentPageIndex()];
          //更新指示器位置
          for (var i = 0; i < this.chooseBet_list3.getPages().length; i++) {
            if (this.chooseBet_list3.getPages()[i].getComponent(betNum).valNum == this.val1 * 1000 * this.val2 * this.line / 1000) {
              this.chooseBet_list3.setCurrentPageIndex(i);
              this.val3 = this.chooseBet_list3.getPages()[i].getComponent(betNum).valNum;
              this.tempindex = i;
              break;
            }
          }
          this.tempi = pageView.getCurrentPageIndex();
        };
        _proto.cb_pt2 = function cb_pt2(pageView) {
          this.val2 = this.betList[pageView.getCurrentPageIndex()];
          //更新指示器位置
          for (var i = 0; i < this.chooseBet_list3.getPages().length; i++) {
            if (this.chooseBet_list3.getPages()[i].getComponent(betNum).valNum == this.val1 * 1000 * this.val2 * this.line / 1000) {
              this.chooseBet_list3.setCurrentPageIndex(i);
              this.val3 = this.chooseBet_list3.getPages()[i].getComponent(betNum).valNum;
              this.tempindex = i;
              break;
            }
          }
          this.tempj = pageView.getCurrentPageIndex();
        };
        _proto.cb_pt3 = function cb_pt3(pageView) {
          this.val3 = this.sumList[pageView.getCurrentPageIndex()];
          this.tempindex = pageView.getCurrentPageIndex();
          //更新指示器位置
          for (var i = 0; i < this.chooseBet_list1.getPages().length; i++) {
            for (var j = 0; j < this.chooseBet_list2.getPages().length; j++) {
              if (this.val3 == this.chooseBet_list1.getPages()[i].getComponent(betNum).valNum * 1000 * this.chooseBet_list2.getPages()[j].getComponent(betNum).valNum * this.line / 1000) {
                this.chooseBet_list1.setCurrentPageIndex(i);
                this.chooseBet_list2.setCurrentPageIndex(j);
                this.val1 = this.chooseBet_list1.getPages()[i].getComponent(betNum).valNum;
                this.val2 = this.chooseBet_list2.getPages()[j].getComponent(betNum).valNum;
                this.tempi = i;
                this.tempj = j;
                break;
              }
            }
          }
        }

        //选择最大下注
        ;

        _proto.choose_Max = function choose_Max() {
          this.val3 = this.sumList[this.sumList.length - 1];
          this.tempindex = this.sumList.length - 1;
          //更新指示器位置
          for (var i = 0; i < this.chooseBet_list1.getPages().length; i++) {
            for (var j = 0; j < this.chooseBet_list2.getPages().length; j++) {
              if (this.val3 == this.chooseBet_list1.getPages()[i].getComponent(betNum).valNum * 1000 * this.chooseBet_list2.getPages()[j].getComponent(betNum).valNum * this.line / 1000) {
                this.chooseBet_list1.setCurrentPageIndex(i);
                this.chooseBet_list2.setCurrentPageIndex(j);
                this.val1 = this.chooseBet_list1.getPages()[i].getComponent(betNum).valNum;
                this.val2 = this.chooseBet_list2.getPages()[i].getComponent(betNum).valNum;
                this.tempi = i;
                this.tempj = j;
                break;
              }
            }
          }
        };
        _proto.onConfirm = function onConfirm() {
          dragonhatch.betNum = this.tempi;
          dragonhatch.bet = this.tempj;
          dragonhatch.sumIdx = this.tempindex;
          dragonhatch.betSum = this.sumList[dragonhatch.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.betSum);
          dragonhatch.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(dragonhatch.sumIdx);
          this.val3 = dragonhatch.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // dragonhatch.main.audio.playclickopen();
          this.node.parent.children[0].active = true;
          this.node.active = true;
          this.showPos = this.panel.h / 2;
          this.hidePos = -this.panel.h / 2;
          this.panel.y = this.hidePos;
          this.panel.children[0].opacity = 10;
          this.initBetContent();
          tween(this.panel).to(0.2, {
            y: this.showPos
          }).start();
          tween(this.node).delay(0.2).call(function () {
            tween(_this2.panel.children[0]).to(0.2, {
              opacity: 255
            }).start();
          }).start();
        };
        _proto.hidePanel = function hidePanel() {
          var _this3 = this;
          tween(this.panel).to(0.2, {
            y: this.hidePos
          }).call(function () {
            _this3.node.parent.children[0].active = false;
            _this3.node.active = false;
          }).start();
        };
        _proto.onClose = function onClose() {
          // dragonhatch.main.audio.playclickclose();
          this.hidePanel();
        };
        return betPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chooseBet_pb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "chooseTotalBet_pb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chooseBet_list1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chooseBet_list2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chooseBet_list3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbLine", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblUserCoin", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblCurBet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "winCoin_lab", [_dec11], {
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

System.register("chunks:///_virtual/cDragonhatch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange2.ts'], function (exports) {
  var _createClass, cclegacy, SubGameDef, dataChange;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      dataChange = module.dataChange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "930f5eaDGBFcILWC690ledb", "cDragonhatch", undefined);
      var cDragonhatch = /*#__PURE__*/function () {
        var _proto = cDragonhatch.prototype;
        //是否处于母龙模式
        _proto.getSymbols = function getSymbols() {
          var arr = [];
          var reel = this.reel;
          var r = reel.reelDates;
          for (var i = 0; i < r.length; i++) {
            var symbols = r[i].symbols;
            for (var j = 0; j < symbols.length; j++) {
              var symbol = symbols[j];
              arr.push(symbol);
            }
          }
          return arr;
        };
        function cDragonhatch() {
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          this.detail = void 0;
          this.main = null;
          this.bet = 0;
          this.betNum = 0;
          this.sumIdx = 0;
          /**累计下注计算 */
          this._betSum = void 0;
          /**获奖信息 */
          this.lotteryRes = null;
          /**自动状态 */
          this.auto = false;
          /**自动次数 */
          this.autoTimes = 0;
          /**转动状态0：停止，1：转动，2：开始转 */
          this.status = 0;
          /**中奖数字位置 */
          this.winLinePos = [];
          /**大奖个数 */
          this.bigWinNum = 0;
          /**摇奖计数 */
          this.rollIndex = 0;
          this._rollEnable = true;
          /**龙母*/
          this.motherDragon = null;
          /**龙母提示*/
          this.motherDragonTip = null;
          /**信息栏*/
          this.infoBoard = null;
          /**bigwin*/
          this.bigwin = null;
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
          this.roundIndex = 0;
          this.reel = null;
          this.momModBn = false;
          this._winCoinNodes = [];
        }
        _proto.clear = function clear() {
          var _this$reel;
          (_this$reel = this.reel) == null || _this$reel.clear();
          this.main.node.destroy();
          this.rollEnable = true;
          this.status = ESTATE.stop;
          this.infoBoard = undefined;
          this.bigwin = undefined;
          this.reel = undefined;
          this.detail = undefined;
        };
        _createClass(cDragonhatch, [{
          key: "isNewUser",
          get: function get() {
            this._isNewUser = false;
            return this._isNewUser;
          }
        }, {
          key: "money",
          get: function get() {
            return this._money;
          },
          set: function set(m) {
            this._money = m;
          }
        }, {
          key: "exchangeRate",
          get: function get() {
            this._exchangeRate = 1;
            return this._exchangeRate;
          }
        }, {
          key: "slotCtrl",
          get: function get() {
            return this.main.slotCtrl;
          }
        }, {
          key: "betSum",
          get: function get() {
            if (!this._betSum) {
              this._betSum = Number(localStorage.getItem(SubGameDef.SLOTS_DRAGONHATCH + "betSum"));
            }
            return this._betSum;
          },
          set: function set(v) {
            if (this._betSum != v) {
              localStorage.setItem(SubGameDef.SLOTS_DRAGONHATCH + "betSum", v + "");
            }
            this._betSum = v;
          }
        }, {
          key: "rollEnable",
          get: function get() {
            return this._rollEnable;
          },
          set: function set(v) {
            this._rollEnable = v;
          }
        }, {
          key: "roundData",
          get: function get() {
            return this.lotteryRes.rounds[this.roundIndex];
          }
        }, {
          key: "nextRoundData",
          get: function get() {
            return this.lotteryRes.rounds[this.roundIndex + 1];
          }
        }, {
          key: "dataLen",
          get: function get() {
            return this.lotteryRes.rounds.length;
          }
        }, {
          key: "winCoinNodes",
          get: function get() {
            return this._winCoinNodes;
          },
          set: function set(v) {
            if (!v || v.length == 0) {
              for (var i = 0; i < this._winCoinNodes.length; i++) {
                this._winCoinNodes[i].destroy();
              }
            }
            this._winCoinNodes = v;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cDragonhatch();
            }
            return this._instance;
          }
        }]);
        return cDragonhatch;
      }();
      cDragonhatch._instance = null;
      var dragonhatch = exports('dragonhatch', cDragonhatch.instance);
      var ESTATE = exports('ESTATE', /*#__PURE__*/function (ESTATE) {
        ESTATE[ESTATE["stop"] = 0] = "stop";
        ESTATE[ESTATE["run"] = 1] = "run";
        ESTATE[ESTATE["start"] = 2] = "start";
        return ESTATE;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/coinParticle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, ccenum, CCFloat, _decorator, Prefab, math, Vec3, tween, Tween, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      ccenum = module.ccenum;
      CCFloat = module.CCFloat;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      math = module.math;
      Vec3 = module.Vec3;
      tween = module.tween;
      Tween = module.Tween;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "595614sKdJEpbAMc8WkOagW", "coinParticle", undefined);
      ccenum(CCFloat);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var coinParticle = exports('coinParticle', (_dec = ccclass('coinParticle'), _dec2 = property({
        type: Prefab,
        tooltip: "金币动画"
      }), _dec3 = property({
        type: CCFloat,
        tooltip: "最大数量"
      }), _dec4 = property({
        type: CCFloat,
        tooltip: "当次生成数量"
      }), _dec5 = property({
        type: CCFloat,
        tooltip: "生产间隔时间"
      }), _dec6 = property({
        type: CCFloat,
        tooltip: "起始大小"
      }), _dec7 = property({
        type: CCFloat,
        tooltip: "结束大小"
      }), _dec8 = property({
        type: CCFloat,
        tooltip: "飞行时间"
      }), _dec9 = property({
        type: CCFloat,
        tooltip: "飞行范围w"
      }), _dec10 = property({
        type: CCFloat,
        tooltip: "飞行范围h"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(coinParticle, _Component);
        function coinParticle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxNum", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "createNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disTime", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startScale", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endScale", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyTime", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wRange", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hRange", _descriptor9, _assertThisInitialized(_this));
          _this.createTime = 0;
          _this.pool = [];
          return _this;
        }
        var _proto = coinParticle.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.update = function update() {
          if (this.node.active == false) {
            this.init();
            return;
          }
          var curTime = new Date().getTime();
          if (this.createTime) {
            var dis = curTime - this.createTime;
            if (dis < this.disTime * 1000) {
              return;
            }
          }
          this.create();
          this.createTime = curTime;
        };
        _proto.init = function init() {
          this.createTime = 0;
          for (var i = 0; i < this.node.children.length; i++) {
            var coin = this.node.children[i];
            this.recycle(coin);
          }
        };
        _proto.create = function create() {
          var num = this.createNum * math.random();
          for (var i = 0; i < this.createNum; i++) {
            this.createOne();
          }
        };
        _proto.createOne = function createOne() {
          var _this2 = this;
          if (this.node.children.length >= this.maxNum) {
            return;
          }
          var coin = this.coinFactory();
          coin.scale = new Vec3(this.startScale, this.startScale);
          coin.x = 0;
          coin.y = 0;
          coin.angle = math.random() * 360;
          var r = 360 * math.random();
          var aimPos = new Vec3(this.wRange * Math.cos(r), this.hRange * Math.sin(r));
          var delay = math.random();
          tween(coin).delay(delay).call(function () {
            if (_this2.node) {
              _this2.node.addChild(coin);
            } else {
              Tween.stopAllByTarget(coin);
              coin.destroy();
            }
          }).to(this.flyTime, {
            scale: new Vec3(this.endScale, this.endScale),
            position: aimPos
          }).call(function () {
            if (_this2.node) {
              _this2.recycle(coin);
            } else {
              Tween.stopAllByTarget(coin);
              coin.destroy();
            }
          }).start();
        };
        _proto.coinFactory = function coinFactory() {
          if (this.pool.length > 0) {
            return this.pool.shift();
          } else {
            return instantiate(this.coinPb);
          }
        };
        _proto.recycle = function recycle(coin) {
          coin.parent = null;
          if (this.pool) {
            this.pool.push(coin);
          }
        };
        _proto.onDestroy = function onDestroy() {
          for (var i = 0; i < this.node.children.length; i++) {
            Tween.stopAllByTarget(this.node.children[i]);
          }
        };
        return coinParticle;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "createNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "disTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "startScale", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "endScale", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "flyTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wRange", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hRange", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange2.ts", ['cc', './dragonhatchMain.ts', './dragonHatchSymbol.ts'], function (exports) {
  var cclegacy, EMOD, ESYMBOLID;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EMOD = module.EMOD;
    }, function (module) {
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f4f2coZTeZCco/swm73/5yW", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.curCoin = Number(data.coins);
          res.winCoin = Number(data.payout);
          res.rounds = [];
          var rounds = data.results[0].rounds;
          var momModBn = false;
          for (var i = 0; i < rounds.length; i++) {
            var tempRound = {};
            res.rounds.push(tempRound);
            var round = rounds[i];
            var next = i + 1 >= rounds.length ? null : rounds[i + 1];
            tempRound.winCoin = Number(round.payout);
            tempRound.handCards = [];
            var symbols = round.symbols;
            for (var j = 0; j < symbols.length; j++) {
              var symbol = symbols[j];
              var id = this.transformId(symbol.id);
              if (id != 0) {
                var index = this.posToIndex(symbol.coordinate);
                tempRound.handCards[index] = id;
              }
            }
            tempRound.removeItems = [];
            var paySymbols = round.paySymbols;
            for (var _j = 0; _j < paySymbols.length; _j++) {
              var paySymbol = paySymbols[_j];
              var addCoinBn = false;
              for (var k = 0; k < paySymbol.points.length; k++) {
                var tempRemoveItem = {};
                var point = paySymbol.points[k];
                var _index = this.posToIndex(point);
                tempRound.removeItems[_index] = tempRemoveItem;
                tempRemoveItem.index = _index;
                var curId = tempRound.handCards[_index];
                if (curId != ESYMBOLID.wild && addCoinBn == false) {
                  tempRemoveItem.winCoin = Number(paySymbol.payout);
                  addCoinBn = true;
                }
              }
            }
            tempRound.curProgress = round.multipliers[0];
            tempRound.modType = round.usedDragon == undefined ? EMOD["null"] : round.usedDragon + 1;
            if (tempRound.modType == EMOD.yellow) {
              momModBn = true;
            }
            tempRound.addItems = [];
            tempRound.stompBn = momModBn && paySymbols.length == 0;
            if (tempRound.modType == EMOD.green || tempRound.stompBn && next) {
              tempRound.removeItems = [];
              var deleteSymbols = next.deleteSymbols;
              for (var _j2 = 0; _j2 < deleteSymbols.length; _j2++) {
                var deleteSymbol = deleteSymbols[_j2];
                var _tempRemoveItem = {};
                var _point = deleteSymbol.coordinate;
                var _index2 = this.posToIndex(_point);
                tempRound.removeItems[_index2] = _tempRemoveItem;
                _tempRemoveItem.index = _index2;
              }
            }
            if (next) {
              for (var _j3 = 0; _j3 < next.newSymbols.length; _j3++) {
                var tempAddItem = {};
                tempRound.addItems.push(tempAddItem);
                var newSymbol = next.newSymbols[_j3];
                tempAddItem.rindex = newSymbol.coordinate.reel - 1;
                tempAddItem.id = this.transformId(newSymbol.id);
              }
            }
          }
          return res;
        };
        dataChange.posToIndex = function posToIndex(pos) {
          return (pos.reel - 1) * 5 + pos.row - 1;
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            wildcard: ESYMBOLID.wild,
            giant_dragon: ESYMBOLID.mom,
            fire_dragon: ESYMBOLID.red,
            water_dragon: ESYMBOLID.blue,
            earth_dragon: ESYMBOLID.green,
            spade: ESYMBOLID.spade,
            heart: ESYMBOLID.heart,
            club: ESYMBOLID.club,
            diamond: ESYMBOLID.diamond
          };
          return (_idMap$curid = idMap[curid]) != null ? _idMap$curid : ESYMBOLID["null"];
        };
        return dataChange;
      }());

      //clientRes
      dataChange.BETNUM = [0.03, 0.1, 0.3, 0.9];
      //单注值
      dataChange.LINES = 10;
      //线数
      dataChange.BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      /**
       * [4,9,14,19,24,
       *  3,8,13,18,23,
       *  2,7,12,17,22,
       *  1,6,11,16,21,
       *  0,5,10,15,20]
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragonhatchAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './cDragonhatch.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, ModuleDef, dragonhatch;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "04fd8rEeQ1DoqmkPbSx5M4p", "dragonhatchAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonhatchAudio = exports('dragonhatchAudio', (_dec = ccclass('dragonhatchAudio'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchAudio, _Component);
        function dragonhatchAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.urlArr = ["sound/bgm_mg_main", "sound/bgm_mg_lv_01", "sound/bgm_mg_lv_02", "sound/bgm_mg_lv_03", "sound/bgm_mg_lv_04"];
          _this.bgmIndex = void 0;
          /**滚动结束 */
          _this.playReelEndBn = false;
          _this.momAwakeLoopId = void 0;
          /**bigwin */
          _this.bigwinId = void 0;
          /**bigwin界面退出 */
          _this.windbellId = void 0;
          return _this;
        }
        var _proto = dragonhatchAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.playBgm = function playBgm(index) {
          var _this2 = this;
          if (this.bgmIndex == index) return;
          this.bgmIndex = index;
          tgx.AudioMgr.inst.audio.stopMusic();
          if (index == 4) {
            tgx.AudioMgr.inst.audio.playMusic(EEFFECT.bgm_mg_lv_04_intro, function () {
              tgx.AudioMgr.inst.audio.playMusicLoop(_this2.urlArr[4], ModuleDef.SLOTS_DRAGONHATCH);
            });
            return;
          }
          tgx.AudioMgr.inst.audio.playMusicLoop(this.urlArr[index], ModuleDef.SLOTS_DRAGONHATCH);
        }

        /**滚动开始 */;
        _proto.playReelLoop = function playReelLoop() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinBtn, ModuleDef.SLOTS_DRAGONHATCH);
        };
        _proto.playReelEnd = function playReelEnd(isSpeed) {
          var _this3 = this;
          if (isSpeed === void 0) {
            isSpeed = false;
          }
          if (this.playReelEndBn) return;
          this.playReelEndBn = true;
          this.scheduleOnce(function () {
            _this3.playReelEndBn = false;
          }, 0.01);
          if (isSpeed) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinReelStopQuick, ModuleDef.SLOTS_DRAGONHATCH);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinReelStopNormal, ModuleDef.SLOTS_DRAGONHATCH);
          }
        }
        /**spawn wild */;
        _proto.playSpawnWild = function playSpawnWild() {
          var arr = ["", "01", "02", "03"];
          var index = Math.floor(Math.random() * arr.length);
          index = index > arr.length - 1 ? arr.length - 1 : index;
          var str = EEFFECT.symWild + arr[index];
          tgx.AudioMgr.inst.audio.playEffect(str, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**选中 */;
        _proto.playSelect = function playSelect() {
          if (dragonhatch.momModBn) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.payoutSelect + "02", ModuleDef.SLOTS_DRAGONHATCH);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.payoutSelect + "01", ModuleDef.SLOTS_DRAGONHATCH);
          }
        }
        /**消除*/;
        _proto.playRemove = function playRemove() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symShrink, ModuleDef.SLOTS_DRAGONHATCH);
        }

        /**进度条音效 */;
        _proto.playBar = function playBar(yellowBn) {
          if (yellowBn === void 0) {
            yellowBn = false;
          }
          if (yellowBn) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.barRiseB, ModuleDef.SLOTS_DRAGONHATCH);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.barRiseA, ModuleDef.SLOTS_DRAGONHATCH);
          }
        }
        /**幼龙孵化 */;
        _proto.playhatch = function playhatch() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.barRiseHigher, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**土龙模式 */;
        _proto.playGreenMod = function playGreenMod() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonEarthAppear, ModuleDef.SLOTS_DRAGONHATCH, function () {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonEarthSkill, ModuleDef.SLOTS_DRAGONHATCH);
          });
        }
        /**水龙模式 */;
        _proto.playBlueMod = function playBlueMod() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonWaterAppear, ModuleDef.SLOTS_DRAGONHATCH, function () {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonWaterSkill, ModuleDef.SLOTS_DRAGONHATCH, function () {
              tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonWaterSkillPonk, ModuleDef.SLOTS_DRAGONHATCH);
            });
          });
        }
        /**火龙模式 */;
        _proto.playRedMod = function playRedMod() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonFireAppear, ModuleDef.SLOTS_DRAGONHATCH, function () {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonFireSkill, ModuleDef.SLOTS_DRAGONHATCH);
          });
        }

        /**母龙睡眠待机音效 */;
        _proto.playMomSleepIdle = function playMomSleepIdle(index) {
          var str = EEFFECT.voxMamaIdle + index;
          tgx.AudioMgr.inst.audio.playEffect(str, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**母龙睡眠待机音效 */;
        _proto.playMomUnlock = function playMomUnlock() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonMotherInfobarUnlock, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**龙苏醒Tip显示播放 */;
        _proto.playMomAwakeTip = function playMomAwakeTip() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.uiAlertDragonqueenAwake, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**第四阶段待机 */;
        _proto.playMomAwakeLoop = function playMomAwakeLoop() {
          this.momAwakeLoop();
        };
        _proto.momAwakeLoop = function momAwakeLoop() {
          var _this4 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonMotherAwakeLoop, ModuleDef.SLOTS_DRAGONHATCH, function () {
            _this4.momAwakeLoop();
          }).then(function (value) {
            _this4.momAwakeLoopId = value;
          });
        }

        /**母龙苏醒动画 */;
        _proto.playMomAwake = function playMomAwake() {
          tgx.AudioMgr.inst.audio.stopEffect(this.momAwakeLoopId, EEFFECT.dragonMotherAwakeLoop, ModuleDef.SLOTS_DRAGONHATCH);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonMotherAwake, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**母龙苏醒未达成退出 */;
        _proto.playMomAwakeOut = function playMomAwakeOut() {
          tgx.AudioMgr.inst.audio.stopEffect(this.momAwakeLoopId, EEFFECT.dragonMotherAwakeLoop, ModuleDef.SLOTS_DRAGONHATCH);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonMotherOut, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**母龙模式砸地板 */;
        _proto.playMomStomp = function playMomStomp() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonMotherShuffleStart, ModuleDef.SLOTS_DRAGONHATCH);
        }
        /**母龙模式喷火 */;
        _proto.playMomBreathFire = function playMomBreathFire() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.dragonMotherShuffleStop, ModuleDef.SLOTS_DRAGONHATCH);
        }

        /**共赢得 */;
        _proto.playTotalWin = function playTotalWin(med) {
          if (med === void 0) {
            med = false;
          }
          if (med) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeInfobarTotalwinMed, ModuleDef.SLOTS_DRAGONHATCH);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeInfobarTotalwin, ModuleDef.SLOTS_DRAGONHATCH);
          }
        }
        /**赢得 */;
        _proto.playWin = function playWin(med) {
          if (med === void 0) {
            med = false;
          }
          if (med) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeMedwin, ModuleDef.SLOTS_DRAGONHATCH);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeSmallwin, ModuleDef.SLOTS_DRAGONHATCH);
          }
        };
        _proto.playBigwin = function playBigwin() {
          var _this5 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_DRAGONHATCH).then(function (value) {
            _this5.bigwinId = value;
          });
        }
        /**bigwin金币滚动结束 */;
        _proto.playBigwinEnd = function playBigwinEnd() {
          var _this6 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinId, EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_DRAGONHATCH);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_end, ModuleDef.SLOTS_DRAGONHATCH, function () {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.amb_windbell, ModuleDef.SLOTS_DRAGONHATCH).then(function (value) {
              _this6.windbellId = value;
            });
          });
        };
        _proto.playBigwinOut = function playBigwinOut() {
          tgx.AudioMgr.inst.audio.stopEffect(this.windbellId, EEFFECT.amb_windbell, ModuleDef.SLOTS_DRAGONHATCH);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_out, ModuleDef.SLOTS_DRAGONHATCH);
        };
        return dragonhatchAudio;
      }(Component)) || _class));
      var EEFFECT = exports('EEFFECT', /*#__PURE__*/function (EEFFECT) {
        EEFFECT["barRiseA"] = "sound/dhaudio_extract/barRiseHigher";
        EEFFECT["barRiseB"] = "sound/dhaudio_extract/barRiseB";
        EEFFECT["barRiseHigher"] = "sound/dhaudio_extract/barRiseHigher";
        EEFFECT["dragonEarthAppear"] = "sound/dhaudio_extract/dragonEarthAppear";
        EEFFECT["dragonEarthSkill"] = "sound/dhaudio_extract/dragonEarthSkill";
        EEFFECT["dragonWaterAppear"] = "sound/dhaudio_extract/dragonWaterAppear";
        EEFFECT["dragonWaterSkill"] = "sound/dhaudio_extract/dragonWaterSkill";
        EEFFECT["dragonWaterSkillPonk"] = "sound/dhaudio_extract/dragonWaterSkillPonk";
        EEFFECT["dragonFireAppear"] = "sound/dhaudio_extract/dragonFireAppear";
        EEFFECT["dragonFireSkill"] = "sound/dhaudio_extract/dragonFireSkill";
        EEFFECT["dragonMotherAwake"] = "sound/dhaudio_extract/dragonMotherAwake";
        EEFFECT["dragonMotherAwakeLoop"] = "sound/dhaudio_extract/dragonMotherAwakeLoop";
        EEFFECT["uiAlertDragonqueenAwake"] = "sound/dhaudio_extract/uiAlertDragonqueenAwake";
        EEFFECT["dragonMotherInfobarUnlock"] = "sound/dhaudio_extract/dragonMotherInfobarUnlock";
        EEFFECT["dragonMotherOut"] = "sound/dhaudio_extract/dragonMotherOut";
        EEFFECT["dragonMotherShuffleStart"] = "sound/dhaudio_extract/dragonMotherShuffleStart";
        EEFFECT["dragonMotherShuffleStop"] = "sound/dhaudio_extract/dragonMotherShuffleStop";
        EEFFECT["dragonMotherShuffleSymWin"] = "sound/dhaudio_extract/dragonMotherShuffleSymWin";
        EEFFECT["dragonMotherSigh"] = "sound/dhaudio_extract/dragonMotherSigh";
        EEFFECT["dragonMotherSighEnd"] = "sound/dhaudio_extract/dragonMotherSighEnd";
        EEFFECT["symWild"] = "sound/dhaudio_extract/symWild";
        EEFFECT["payoutSelect"] = "sound/dhaudio_extract/payoutSelect";
        EEFFECT["symShrink"] = "sound/dhaudio_extract/symShrinkA";
        EEFFECT["prizeInfobarTotalwin"] = "sound/dhaudio_extract/prizeInfobarTotalwin";
        EEFFECT["prizeInfobarTotalwinMed"] = "sound/dhaudio_extract/prizeInfobarTotalwinMed";
        EEFFECT["prizeMedwin"] = "sound/dhaudio_extract/prizeMedwin";
        EEFFECT["prizeSmallwin"] = "sound/dhaudio_extract/prizeSmallwin";
        EEFFECT["spinBtn"] = "sound/dhaudio_extract/spinBtnA";
        EEFFECT["spinReelStopNormal"] = "sound/dhaudio_extract/spinReelStopNormalA";
        EEFFECT["spinReelStopQuick"] = "sound/dhaudio_extract/spinReelStopQuick";
        EEFFECT["voxMamaIdle"] = "sound/dhaudio_extract/voxMamaIdle";
        EEFFECT["bgm_bigwin_main"] = "sound/bgm_bigwin_main";
        EEFFECT["bgm_bigwin_end"] = "sound/bgm_bigwin_end";
        EEFFECT["amb_windbell"] = "sound/amb_windbell";
        EEFFECT["bgm_bigwin_out"] = "sound/bgm_bigwin_out";
        EEFFECT["bgm_mg_lv_04_intro"] = "sound/bgm_mg_lv_04_intro";
        return EEFFECT;
      }({})); //bg4入场
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragonhatchBigwin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragonhatch.ts', './Num.ts', './LanguageSprite.ts', './coinParticle.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Node, SpriteFrame, Label, Vec3, macro, Sprite, tween, Component, dragonhatch, Num, LanguageSprite, coinParticle;
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
      Animation = module.Animation;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Vec3 = module.Vec3;
      macro = module.macro;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageSprite = module.LanguageSprite;
    }, function (module) {
      coinParticle = module.coinParticle;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "cea45moBypOdpz7aj6SdjAS", "dragonhatchBigwin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonhatchBigwin = exports('dragonhatchBigwin', (_dec = ccclass('dragonhatchBigwin'), _dec2 = property({
        type: Animation,
        tooltip: "过场动画"
      }), _dec3 = property({
        type: Node,
        tooltip: ""
      }), _dec4 = property({
        type: Node,
        tooltip: "金龙"
      }), _dec5 = property({
        type: Node,
        tooltip: "圆圈"
      }), _dec6 = property({
        type: [SpriteFrame],
        tooltip: ""
      }), _dec7 = property({
        type: Label,
        tooltip: "coin label"
      }), _dec8 = property({
        type: LanguageSprite,
        tooltip: ""
      }), _dec9 = property({
        type: coinParticle,
        tooltip: "金币特效"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchBigwin, _Component);
        function dragonhatchBigwin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fireball", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "circle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "circleSpriteFrames", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinBw", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinParticle", _descriptor8, _assertThisInitialized(_this));
          _this.dragonLev = [2.2, 2.4, 2.8];
          //金龙尺寸档位
          _this.dragonPosLev = [50, 50, 0];
          //金龙位置y档位
          _this.circleLev = [1, 1.2, 1.4];
          //圆圈尺寸档位
          _this.coinLev = [0, 6, 12];
          //大奖数字滚动动画
          _this.aimCoin = 0;
          _this.addcoin = 0;
          _this.addOnce = 0;
          _this._playOverBn = true;
          _this._coin = 0;
          _this.bigBn = false;
          _this.superBn = false;
          _this.megaBn = false;
          return _this;
        }
        var _proto = dragonhatchBigwin.prototype;
        //金币档位
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.fireball.on("finished", this.playBigWinCoin, this);
          this.init();
          dragonhatch.bigwin = this;
        };
        _proto.init = function init() {
          this.coin = 0;
          this.coinLabel.string = "0";
          this.node.active = false;
          this.aniNode.active = false;
          this.bigWinBw.dataID = "bw";
          this.bigWinBw.node.scale = new Vec3(1, 1);
          this.dragon.scale = new Vec3(this.dragonLev[0], this.dragonLev[0]);
          this.circle.scale = new Vec3(this.circleLev[0], this.circleLev[0]);
          this.coinParticle.createNum = this.coinLev[0];
          this.coinParticle.node.removeAllChildren();
        };
        _proto.bigwincoin = function bigwincoin(coin) {
          dragonhatch.main.audio.playBigwin();
          this.node.active = true;
          this.coin = coin;
          this.fireball.play();
        };
        _proto.playBigWinCoin = function playBigWinCoin() {
          var coin = this.coin;
          this.aniNode.active = true;
          dragonhatch.main.unschedule(dragonhatch.main.sendRoll);
          this.node.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.coinLabel.string = Num.exchangeToThousands(dragonhatch.exchangeRate, this.addcoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.closeBigWin, 16);
        };
        _proto.coinOneChange = function coinOneChange() {
          this.addcoin += this.addOnce;
          if (this.addcoin >= this.aimCoin) {
            this.playBigWin(this.aimCoin);
            this.playCoinOver();
          } else {
            this.playBigWin(this.addcoin);
            this.coinLabel.string = Num.exchangeToThousands(dragonhatch.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          dragonhatch.main.audio.playBigwinEnd();
          this.playOverBn = true;
          this.coinLabel.string = Num.exchangeToThousands(dragonhatch.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 5);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= dragonhatch.betSum * 35 && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= dragonhatch.betSum * 15 && coin < dragonhatch.betSum * 35 && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (coin < dragonhatch.betSum * 15 && this.bigBn == false) {
            this.playAnim_BigWin();
            this.bigBn = true;
          }
        };
        _proto.onFastBigWin = function onFastBigWin(e) {
          if (this.playOverBn) {
            this.closeBigWin();
          } else {
            this.playCoinOver();
          }
        }

        //大奖BigWin动画
        ;

        _proto.playAnim_BigWin = function playAnim_BigWin() {
          this.playAni(0);
          this.bigWinBw.dataID = "bw";
          this.circle.getComponent(Sprite).spriteFrame = this.circleSpriteFrames[0];
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin(coin) {
          this.playAni(1);
          this.bigWinBw.dataID = "mw";
          this.circle.getComponent(Sprite).spriteFrame = this.circleSpriteFrames[1];
        }

        //大奖MegaWin动画
        ;

        _proto.playAnim_MegaWin = function playAnim_MegaWin(coin) {
          this.playAni(2);
          this.bigWinBw.dataID = "smw";
          this.circle.getComponent(Sprite).spriteFrame = this.circleSpriteFrames[2];
        };
        _proto.playAni = function playAni(lev) {
          this.coinParticle.createNum = this.coinLev[lev];
          var aniTime = 0.2;
          var add = 0.4;
          var temp = this.dragonLev[0] + add;
          tween(this.dragon).to(aniTime, {
            scale: new Vec3(temp, temp),
            y: this.dragonPosLev[lev]
          }).to(aniTime, {
            scale: new Vec3(this.dragonLev[lev], this.dragonLev[lev])
          }).start();
          temp = this.circleLev[0] + add;
          tween(this.circle).to(aniTime, {
            scale: new Vec3(temp, temp)
          }).to(aniTime, {
            scale: new Vec3(this.circleLev[lev], this.circleLev[lev])
          }).start();
          tween(this.coinLabel.node).to(aniTime, {
            scale: new Vec3(1 + add, 1 + add)
          }).to(aniTime, {
            scale: new Vec3(1, 1)
          }).start();
          tween(this.bigWinBw.node).to(aniTime, {
            scale: new Vec3(1 + add, 1 + add),
            y: 140
          }).to(aniTime, {
            scale: new Vec3(1, 1),
            y: 120
          }).start();
        };
        _proto.closeBigWin = function closeBigWin() {
          this.unschedule(this.closeBigWin);
          if (this.node.active) {
            this.init();
            this.node.active = false;
            dragonhatch.main.audio.playBigwinOut();
          }
          dragonhatch.main.closeBigWin();
        };
        _createClass(dragonhatchBigwin, [{
          key: "playOverBn",
          get: function get() {
            return this._playOverBn;
          },
          set: function set(v) {
            this._playOverBn = v;
          }
        }, {
          key: "coin",
          get: function get() {
            return this._coin;
          },
          set: function set(v) {
            this._coin = v;
          }
        }]);
        return dragonhatchBigwin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fireball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "aniNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dragon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "circle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "circleSpriteFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bigWinBw", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "coinParticle", [_dec9], {
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

System.register("chunks:///_virtual/dragonhatchDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dragonHatchSymbol.ts', './cDragonhatch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, sp, Component, ESYMBOLID, dragonhatch;
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
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      ESYMBOLID = module.ESYMBOLID;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "37267KDbIND0YLPhVkr1u9h", "dragonhatchDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [["2", "3", "4", "300"], ["3", "5", "6", "400"], ["4", "6", "9", "500"], ["5", "10", "15", "600"], ["10", "15", "30", "800"], ["15", "20", "40", "1k"], ["20", "30", "50", "5k"], ["30", "40", "70", "20k"]];
      var dragonhatchDetail = exports('dragonhatchDetail', (_dec = ccclass('dragonhatchDetail'), _dec2 = property({
        type: Node,
        tooltip: "背景板"
      }), _dec3 = property({
        type: Node,
        tooltip: "icons"
      }), _dec4 = property({
        type: Node,
        tooltip: "nums"
      }), _dec5 = property({
        type: [Label],
        tooltip: "中奖分数"
      }), _dec6 = property({
        type: Node,
        tooltip: "specialNode"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchDetail, _Component);
        function dragonhatchDetail() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BGNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotsNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nums", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "specialNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = dragonhatchDetail.prototype;
        _proto.init = function init(symbolId, reelIndex) {
          var idx = symbolId - 1;
          for (var i = 0; i < this.slotsNode.children.length; i++) {
            var slot = this.slotsNode.children[i].getComponent(sp.Skeleton);
            if (i == idx) {
              slot.node.active = true;
              slot.setAnimation(0, "idle", true);
            } else {
              slot.node.active = false;
            }
          }
          if (symbolId == ESYMBOLID.wild) {
            this.BGNode.w = 380;
            this.numNode.active = false;
            this.specialNode.active = true;
          } else {
            this.BGNode.w = 302;
            this.numNode.active = true;
            this.specialNode.active = false;
            var strs = GAME_COMBINATIONS[idx];
            for (var _i = 0; _i < strs.length; _i++) {
              this.nums[_i].string = strs[_i];
            }
          }
          if (reelIndex <= 2) {
            this.BGNode.x = -81;
            this.BGNode.scale_x = 1;
            this.numNode.x = 95;
            this.specialNode.x = 95;
          } else {
            this.BGNode.x = 81;
            this.BGNode.scale_x = -1;
            this.numNode.x = -180;
            this.specialNode.x = -265;
          }
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
          var symbols = dragonhatch.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
          }
        };
        return dragonhatchDetail;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BGNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slotsNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nums", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "specialNode", [_dec6], {
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

System.register("chunks:///_virtual/dragonhatchHatch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dragonhatchProgress.ts', './cDragonhatch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, sp, tween, Component, EHATCHANI, dragonhatch;
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
      sp = module.sp;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      EHATCHANI = module.EHATCHANI;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "76cb10CCHxI97bNQ5S80p4T", "dragonhatchHatch", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonhatchHatch = exports('dragonhatchHatch', (_dec = ccclass('dragonhatchHatch'), _dec2 = property({
        type: [sp.SkeletonData],
        tooltip: "幼龙骨骼动画"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchHatch, _Component);
        function dragonhatchHatch() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hatchDatas", _descriptor, _assertThisInitialized(_this));
          _this._type = EHATCHTYPE.green;
          return _this;
        }
        var _proto = dragonhatchHatch.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.addListener();
        }

        /**动画监听 */;
        _proto.addListener = function addListener() {
          var _this2 = this;
          this.ani.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case EHATCHANI.spawn:
                _this2.playHatchAni(EHATCHANI.idle);
                break;
              case EHATCHANI.exit:
                _this2.node.parent = null;
                break;
            }
          });
        };
        /**幼龙动画 */
        _proto.playHatchAni = function playHatchAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          this.ani.setAnimation(0, aimStr, loopBn);
        };
        _proto.jump = function jump(ePos) {
          dragonhatch.main.audio.playhatch();
          tween(this.node).to(0.5, {
            position: ePos
          }).start();
        };
        _createClass(dragonhatchHatch, [{
          key: "ani",
          get: function get() {
            return this.node.getComponent(sp.Skeleton);
          }
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(v) {
            this._type = v;
            this.ani.skeletonData = this.hatchDatas[v];
            this.playHatchAni(EHATCHANI.spawn, false);
          }
        }]);
        return dragonhatchHatch;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "hatchDatas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      var EHATCHTYPE = exports('EHATCHTYPE', /*#__PURE__*/function (EHATCHTYPE) {
        EHATCHTYPE[EHATCHTYPE["green"] = 0] = "green";
        EHATCHTYPE[EHATCHTYPE["blue"] = 1] = "blue";
        EHATCHTYPE[EHATCHTYPE["red"] = 2] = "red";
        return EHATCHTYPE;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragonhatchLine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dragonHatchSymbol.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, SpriteFrame, tween, Component, ESYMBOLID;
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
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "11eb8rF3ihPupbNpwDU4111", "dragonhatchLine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonhatchLine = exports('dragonhatchLine', (_dec = ccclass('dragonhatchLine'), _dec2 = property({
        type: [Sprite],
        tooltip: ""
      }), _dec3 = property({
        type: [Sprite],
        tooltip: ""
      }), _dec4 = property({
        type: [SpriteFrame],
        tooltip: ""
      }), _dec5 = property({
        type: [SpriteFrame],
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchLine, _Component);
        function dragonhatchLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //从上 顺时针 排布
          _initializerDefineProperty(_this, "lines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rs", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineFrames", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rFrames", _descriptor4, _assertThisInitialized(_this));
          _this._symbolId = ESYMBOLID.diamond;
          return _this;
        }
        var _proto = dragonhatchLine.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          for (var i = 0; i < this.lines.length; i++) {
            this.lines[i].node.active = true;
            this.rs[i].node.active = true;
          }
        };
        /**
         * 设置边角可见性
         * nums:上右下左是否有相连symbol
         *  */
        _proto.setLinesActive = function setLinesActive(nums) {
          if (nums === void 0) {
            nums = [0, 0, 0, 0];
          }
          for (var i = 0; i < nums.length; i++) {
            this.lines[i].node.opacity = 0;
            this.rs[i].node.opacity = 0;
            if (nums[i] == 1) {
              this.lines[i].node.active = false;
              this.rs[i].node.active = false;
              this.rs[(i + 1) % nums.length].node.active = false;
            }
            tween(this.lines[i].node).to(0.5, {
              opacity: 255
            }).start();
            tween(this.rs[i].node).to(0.5, {
              opacity: 255
            }).start();
          }
        };
        _createClass(dragonhatchLine, [{
          key: "symbolId",
          get: function get() {
            return this._symbolId;
          },
          set: function set(v) {
            this._symbolId = v;
            var index = v - 1;
            for (var i = 0; i < this.lines.length; i++) {
              this.lines[i].spriteFrame = this.lineFrames[index];
              this.rs[i].spriteFrame = this.rFrames[index];
            }
          }
        }]);
        return dragonhatchLine;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lines", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lineFrames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rFrames", [_dec5], {
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

System.register("chunks:///_virtual/dragonhatchMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dragonhatchSlotCtrl.ts', './cDragonhatch.ts', './dragonhatchProgress.ts', './dragonhatchHatch.ts', './dragonHatchSymbol.ts', './NetGameServer.ts', './SubGameDef.ts', './dataChange2.ts', './RoomMgr.ts', './UIHelp.ts', './LanguageData.ts', './dragonhatchDetail.ts', './UserMgr.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Sprite, SpriteFrame, Animation, Node, tween, Vec3, Label, Button, instantiate, Component, dragonhatchSlotCtrl, dragonhatch, ESTATE, dragonhatchProgress, EHATCHTYPE, dragonHatchSymbol, gameNet, SubGameDef, dataChange, RoomMgr, UIHelp, UIhelpParam, LanguageData, dragonhatchDetail, UserMgr, Num;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Animation = module.Animation;
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
      Label = module.Label;
      Button = module.Button;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      dragonhatchSlotCtrl = module.dragonhatchSlotCtrl;
    }, function (module) {
      dragonhatch = module.dragonhatch;
      ESTATE = module.ESTATE;
    }, function (module) {
      dragonhatchProgress = module.dragonhatchProgress;
    }, function (module) {
      EHATCHTYPE = module.EHATCHTYPE;
    }, function (module) {
      dragonHatchSymbol = module.dragonHatchSymbol;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      dataChange = module.dataChange;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      dragonhatchDetail = module.dragonhatchDetail;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "ea0dctOBSpCbbxrgOU7Zmll", "dragonhatchMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonhatchMain = exports('dragonhatchMain', (_dec = ccclass('dragonhatchMain'), _dec2 = property({
        type: Prefab,
        tooltip: "火焰"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "角色详情Pb"
      }), _dec4 = property({
        type: Sprite,
        tooltip: "幼龙模式光效"
      }), _dec5 = property({
        type: [SpriteFrame],
        tooltip: "幼龙模式光效图片"
      }), _dec6 = property({
        type: dragonhatchProgress,
        tooltip: "幼龙模式进度条"
      }), _dec7 = property({
        type: [Animation],
        tooltip: "水龙模式"
      }), _dec8 = property({
        type: Node,
        tooltip: ""
      }), _dec9 = property({
        type: Animation,
        tooltip: "母龙退场大火"
      }), _dec10 = property({
        type: Node,
        tooltip: "slotCtrl"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchMain, _Component);
        function dragonhatchMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "firePb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modLight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modLightSpriteFrame", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progress", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waters", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigFire", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor9, _assertThisInitialized(_this));
          _this.audio = null;
          _this.delayClick = false;
          _this.slotCtrl = null;
          _this.rollCallBackBn = false;
          _this.fires = [];
          _this.H_ITEM = 128;
          //子节点高度
          _this.W_ITEM = 150;
          _this.secondFiresBn = false;
          _this.playGreenModEndBn = false;
          _this.playBlueModEndBn = false;
          _this.playRedModEndBn = false;
          return _this;
        }
        var _proto = dragonhatchMain.prototype;
        _proto.onLoad = function onLoad() {
          dragonhatch.main = this;
          this.slotCtrl = this.slotCtrlNode.getComponent(dragonhatchSlotCtrl);
          this.slotCtrl.initBetContent(dragonhatch.BETNUM, dragonhatch.BET, dragonhatch.LINES);
          this.audio = this.node.getComponent('dragonhatchAudio');
          this.modLight.node.active = false;
          this.slotCtrl.node.active = true;
        };
        _proto.start = function start() {
          this.slotCtrl.setSpinAnim(0);
          this.slotCtrl.bindBet();
          this.waters[0].on("finished", this.playBlueBoom, this);
          dragonhatch.money = UserMgr.inst.coin;
          this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.money);
        };
        _proto.onCLick = function onCLick(event, args) {
          switch (args) {
            case "roll":
              this.startRoll();
              break;
            case "add":
              this.add();
              break;
            case "dec":
              this.dec();
              break;
            case "help":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
              break;
            case "pay":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
              break;
            case "lastmoney":
              dragonhatch.lastmoneyPanel.showPanel();
              break;
            case "exitGame":
              this.onBtnExitClicked();
              break;
          }
        };
        _proto.onBtnExitClicked = function onBtnExitClicked() {
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ok) {
                    dragonhatch.clear();
                    RoomMgr.inst.exitRoom();
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.startRoll = function startRoll() {
          var _this2 = this;
          if (this.delayClick || dragonhatch.rollEnable == false) {
            return;
          }
          if (!dragonhatch.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this2.delayClick = false;
            }, 1);
            if (dragonhatch.status == 0) {
              dragonhatch.status = ESTATE.run;
              this.sendRoll();
            } else if (dragonhatch.status == 1) {
              this.slotCtrl.setSpinAnim(3);
              this.stopImmediately(dragonhatch.roundData.handCards);
            }
          }
        };
        _proto.add = function add() {
          if (dragonhatch.auto) {
            return;
          }
          dragonhatch.sumIdx += 1;
          dragonhatch.sumIdx = this.slotCtrl.updateBet(dragonhatch.sumIdx) == 0 ? dragonhatch.sumIdx - 1 : dragonhatch.sumIdx;
          tween(this.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.dec = function dec() {
          if (dragonhatch.auto) {
            return;
          }
          dragonhatch.sumIdx -= 1;
          dragonhatch.sumIdx = this.slotCtrl.updateBet(dragonhatch.sumIdx) == 0 ? dragonhatch.sumIdx + 1 : dragonhatch.sumIdx;
          tween(this.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.startAuto = function startAuto(n) {
          if (this.delayClick) {
            return;
          }
          if (dragonhatch.status == 0) {
            dragonhatch.auto = true;
            dragonhatch.autoTimes = n;
            this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            this.slotCtrl.Btn_stopAuto.children[1].getComponent(Label).string = n + "";
            if (n > 999) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
              this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
              this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
              this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(1, 1, 1);
            }
            this.slotCtrl.Btn_stopAuto.active = dragonhatch.auto;
            this.slotCtrl.Btn_start.active = !this.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1.5);
          }
        };
        _proto.stopAuto = function stopAuto() {
          dragonhatch.auto = false;
          dragonhatch.autoTimes = 0;
        };
        _proto.rollCallBack = function rollCallBack() {
          var _this3 = this;
          if (this.rollCallBackBn) {
            return;
          }
          this.rollCallBackBn = true;
          this.scheduleOnce(function () {
            _this3.rollCallBackBn = false;
          }, 1);
          if (dragonhatch.roundData.winCoin > 0) {
            this.slotCtrl.setSpinAnim(3);
          } else {
            this.slotCtrl.setSpinAnim(2);
          }
          this.scheduleOnce(function () {
            dragonhatch.reel.removeRadom();
            dragonhatch.reel.spawn();
            _this3.rollCallBackNext();
          }, 1);
        }

        /**滚动完成后操作 */;
        _proto.rollCallBackNext = function rollCallBackNext() {
          this.showRemove();
        }

        /**展示消除 */;
        _proto.showRemove = function showRemove() {
          var _this4 = this;
          if (dragonhatch.roundData.modType) {
            this.scheduleOnce(function () {
              _this4.playMod(dragonhatch.roundData.modType);
            }, 1);
            return;
          }
          if (dragonhatch.momModBn) {
            this.playMomMod();
            return;
          }
          var removes = dragonhatch.roundData.removeItems;
          if (removes.length > 0) {
            dragonhatch.main.audio.playSelect();
            for (var i = 0; i < 25; i++) {
              var symbol = dragonhatch.reel.getSymbolByIndex(i);
              if (symbol instanceof dragonHatchSymbol) {
                var remove = removes[i];
                if (remove) {
                  symbol.playWin(remove.winCoin);
                } else {
                  symbol.darkBn = true;
                }
              }
            }
            this.scheduleOnce(this.showDrop, 2);
          } else {
            this.doNext();
          }
        }

        /**展示下落 */;
        _proto.showDrop = function showDrop() {
          var _this5 = this;
          for (var i = 0; i < 25; i++) {
            var symbol = dragonhatch.reel.getSymbolByIndex(i);
            if (symbol instanceof dragonHatchSymbol) symbol.darkBn = false;
          }
          var _loop = function _loop() {
            var winNode = dragonhatch.winCoinNodes[_i];
            winNode.x += winNode.parent.position.x;
            winNode.y += winNode.parent.position.y + dragonhatch.reel.node.parent.y;
            winNode.parent = _this5.node;
            tween(winNode).to(0.5, {
              position: dragonhatch.infoBoard.node.position
            }).call(function () {
              winNode.destroy();
            }).start();
          };
          for (var _i = 0; _i < dragonhatch.winCoinNodes.length; _i++) {
            _loop();
          }
          this.scheduleOnce(this.bindWin, 0.5);
          dragonhatch.reel.drop();
        };
        _proto.bindWin = function bindWin() {
          dragonhatch.infoBoard.playWinAni(dragonhatch.roundData.winCoin, 0.2);
          this.progress.score = dragonhatch.roundData.curProgress;
          dragonhatch.winCoinNodes = [];
          // dragonhatch.infoBoard.
        }

        /**执行下一步操作 */;
        _proto.doNext = function doNext() {
          this.unschedule(this.doNext);
          dragonhatch.roundIndex++;
          if (dragonhatch.roundIndex < dragonhatch.dataLen) {
            this.showRemove();
          } else {
            this.settlement();
          }
        }
        /**单次滚动完成结算 */;
        _proto.playRollOver = function playRollOver() {
          this.rollComplete();
          this.doAuto();
        };
        _proto.doAuto = function doAuto() {
          if (dragonhatch.auto && dragonhatch.autoTimes > 0) {
            this.sendRoll();
          }
        }
        /**滚动完成 */;
        _proto.rollComplete = function rollComplete() {
          dragonhatch.status = ESTATE.stop;
          this.slotCtrl.setSpinAnim(0);
          this.addDetailListener();
        };
        _proto.roll = function roll(list) {
          var _this6 = this;
          if (!dragonhatch.auto) {
            dragonhatch.rollEnable = true;
          }
          dragonhatch.status = 1;
          dragonhatch.reel.loopEnd(list, function () {
            _this6.rollCallBack();
          });
        };
        _proto.sendRoll = function sendRoll() {
          this.initRoll();
          dragonhatch.autoTimes = dragonhatch.autoTimes > 0 ? dragonhatch.autoTimes - 1 : 0;
          if (dragonhatch.autoTimes == 0) {
            dragonhatch.auto = false;
          }
          this.slotCtrl.setSpinAnim(1);
          var autoTimesLab = this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = dragonhatch.autoTimes + "";
          // this.audio.playclickstart();
          if (dragonhatch.autoTimes > 999) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
          } else if (dragonhatch.autoTimes > 99) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
          } else {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
          }
          dragonhatch.reel.loop();
          this.sendLottery();
        };
        _proto.firstSymbolOver = function firstSymbolOver() {
          dragonhatch.reel.spawn();
          this.addDetailListener();
        };
        _proto.addDetailListener = function addDetailListener() {
          var symbols = dragonhatch.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.node.getComponent(Button).interactable = true;
          }
        };
        _proto.removeDetailListener = function removeDetailListener() {
          var symbols = dragonhatch.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
            symbol.node.getComponent(Button).interactable = false;
          }
          var detail = dragonhatch.detail;
          if (detail) detail.node.active = false;
        };
        _proto.addDetail = function addDetail(s) {
          if (!dragonhatch.rollEnable) return;
          var detail = dragonhatch.detail;
          if (!detail) {
            detail = instantiate(this.detailPb).getComponent(dragonhatchDetail);
            detail.node.parent = this.node;
            dragonhatch.detail = detail;
          }
          detail.node.active = true;
          var symbols = dragonhatch.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            if (symbol.poolId != s.poolId) {
              symbol.darkBn = true;
            }
          }
          detail.node.position = s.node.position;
          detail.node.y += dragonhatch.reel.node.parent.y;
          detail.init(s.symbolId, s.reelDate.index);
        }

        /**每次滚动初始化场景 */;
        _proto.initRoll = function initRoll() {
          dragonhatch.motherDragon.init();
          this.progress.init();
          dragonhatch.infoBoard.showInfo();
          this.removeDetailListener();
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.conn.callApi('slots/PlayMatch3', {
                    gameId: SubGameDef.SLOTS_DRAGONHATCH,
                    bet: dragonhatch.betSum.toString()
                  });
                case 2:
                  retSpin = _context2.sent;
                  console.log('retSpin is', retSpin);
                  this.lotteryBack(retSpin);
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function sendLottery() {
            return _sendLottery.apply(this, arguments);
          }
          return sendLottery;
        }();
        _proto.exchange = function exchange(data) {
          var res = dataChange.change(data);
          dragonhatch.lotteryRes = res;
        };
        _proto.lotteryBack = function lotteryBack(data) {
          var _this7 = this;
          if (data && data.isSucc) {
            this.exchange(data.res);
            this.scheduleOnce(function () {
              dragonhatch.roundIndex = 0;
              _this7.roll(dragonhatch.roundData.handCards);
            }, dragonhatch.slotCtrl.isSpeed ? 0.2 : 0.5);
          }
        };
        _proto.stopImmediately = function stopImmediately(arr) {
          var _this8 = this;
          dragonhatch.reel.stopImmediately(arr, function () {
            _this8.rollCallBack();
          });
        };
        _proto.playMod = function playMod(mod) {
          this.progress.playHatchMod(mod);
          switch (mod) {
            case EMOD.green:
              dragonhatch.main.audio.playGreenMod();
              this.playGreenMod();
              this.showModLight(EHATCHTYPE.green);
              break;
            case EMOD.blue:
              dragonhatch.main.audio.playBlueMod();
              this.playBlueMod();
              this.showModLight(EHATCHTYPE.blue);
              break;
            case EMOD.red:
              dragonhatch.main.audio.playRedMod();
              this.playRedMod();
              this.showModLight(EHATCHTYPE.red);
              break;
            case EMOD.yellow:
              this.playYellowMod();
              break;
          }
        };
        _proto.playGreenMod = function playGreenMod() {
          var symbols = dragonhatch.getSymbols();
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.playGreenMod();
          }
        };
        _proto.playBlueMod = function playBlueMod() {
          for (var i = 0; i < this.waters.length; i++) {
            var ani = this.waters[i];
            ani.play();
          }
          var reel = dragonhatch.reel;
          reel.getSymbolByPos(1, 1).playBlueMod();
          reel.getSymbolByPos(1, 3).playBlueMod();
          reel.getSymbolByPos(3, 1).playBlueMod();
          reel.getSymbolByPos(3, 3).playBlueMod();
        };
        _proto.playBlueBoom = function playBlueBoom() {
          var reel = dragonhatch.reel;
          reel.getSymbolByPos(1, 1).hideBlueMod();
          reel.getSymbolByPos(1, 3).hideBlueMod();
          reel.getSymbolByPos(3, 1).hideBlueMod();
          reel.getSymbolByPos(3, 3).hideBlueMod();
        };
        //子节点宽度
        _proto.clearFires = function clearFires() {
          for (var i = 0; i < this.fires.length; i++) {
            this.fires[i].parent = null;
          }
          this.fires = [];
        };
        _proto.playRedMod = function playRedMod() {
          this.firstFires();
        };
        _proto.firstFires = function firstFires() {
          this.clearFires();
          for (var i = 0; i < 3; i++) {
            var fireNode = instantiate(this.firePb);
            fireNode.angle = 180;
            fireNode.x = this.mask.w / 2 + fireNode.w / 2;
            fireNode.y = (i - 1) * 2 * this.H_ITEM;
            fireNode.parent = this.mask;
            this.fires.push(fireNode);
            tween(fireNode).to(0.6, {
              x: -(this.mask.w / 2 + fireNode.w / 2)
            }).call(this.secondFires, this).start();
          }
          var reel = dragonhatch.reel;
          reel.getSymbolByPos(4, 0).playRedMod();
          reel.getSymbolByPos(4, 2).playRedMod();
          reel.getSymbolByPos(4, 4).playRedMod();
          this.scheduleOnce(function () {
            reel.getSymbolByPos(2, 0).playRedMod();
            reel.getSymbolByPos(2, 2).playRedMod();
            reel.getSymbolByPos(2, 4).playRedMod();
          }, 0.3);
          this.scheduleOnce(function () {
            reel.getSymbolByPos(0, 0).playRedMod();
            reel.getSymbolByPos(0, 2).playRedMod();
            reel.getSymbolByPos(0, 4).playRedMod();
          }, 0.6);
        };
        _proto.secondFires = function secondFires() {
          var _this9 = this;
          if (this.secondFiresBn) return;
          this.secondFiresBn = true;
          this.scheduleOnce(function () {
            _this9.secondFiresBn = false;
          }, 2);
          this.clearFires();
          for (var i = 0; i < 2; i++) {
            var fireNode = instantiate(this.firePb);
            fireNode.angle = 270;
            fireNode.x = (i * 2 - 1) * this.W_ITEM;
            fireNode.y = (this.mask.h + fireNode.w) / 2;
            fireNode.parent = this.mask;
            this.fires.push(fireNode);
            tween(fireNode).to(0.4, {
              y: -fireNode.y
            }).call(this.hideRedMod, this).start();
          }
          var reel = dragonhatch.reel;
          reel.getSymbolByPos(1, 3).playRedMod();
          reel.getSymbolByPos(3, 3).playRedMod();
          this.scheduleOnce(function () {
            reel.getSymbolByPos(1, 1).playRedMod();
            reel.getSymbolByPos(3, 1).playRedMod();
          }, 0.2);
        };
        _proto.hideRedMod = function hideRedMod() {
          var _this10 = this;
          this.clearFires();
          tween(this.node).call(function () {
            _this10.hideReds(4);
          }).delay(0.1).call(function () {
            _this10.hideReds(3);
          }).delay(0.1).call(function () {
            _this10.hideReds(2);
          }).delay(0.1).call(function () {
            _this10.hideReds(1);
          }).delay(0.1).call(function () {
            _this10.hideReds(0);
            _this10.scheduleOnce(_this10.playRedModEnd, 1);
          }).start();
        };
        _proto.hideReds = function hideReds(index) {
          var roles = dragonhatch.getSymbols();
          for (var i = 0; i < roles.length; i++) {
            var role = roles[i];
            if (role.index == index) {
              role.hideRedMod();
            }
          }
        }
        /**巨龙模式 */;
        _proto.playYellowMod = function playYellowMod() {
          dragonhatch.momModBn = true;
          dragonhatch.motherDragonTip.showBn = true;
        };
        _proto.playMomMod = function playMomMod() {
          var _this11 = this;
          if (dragonhatch.roundData.stompBn) {
            dragonhatch.reel.removeUnuseAll();
            if (dragonhatch.roundIndex == dragonhatch.lotteryRes.rounds.length - 1) {
              dragonhatch.motherDragon.state = 8;
              return;
            }
            dragonhatch.motherDragon.state = 6;
            this.scheduleOnce(function () {
              var symbols = dragonhatch.getSymbols();
              var removes = dragonhatch.roundData.removeItems;
              for (var i = 0; i < removes.length; i++) {
                var remove = removes[i];
                if (remove) {
                  var symbol = symbols[remove.index];
                  var nums = [0, 0, 0, 0];
                  var indexs = [remove.index + 1, remove.index + 5, remove.index - 1, remove.index - 5];
                  for (var j = 0; j < indexs.length; j++) {
                    var index = indexs[j];
                    if (index >= 0 && index < 25) {
                      var s = symbols[index];
                      if (s.symbolId == symbol.symbolId) {
                        nums[j] = 1;
                      }
                    }
                  }
                  symbol.showLines(nums);
                }
              }
              _this11.scheduleOnce(function () {
                dragonhatch.motherDragon.state = 7;
              }, 2);
              _this11.scheduleOnce(_this11.stopRadom, 3);
            }, 1);
          } else {
            var removes = dragonhatch.roundData.removeItems;
            if (removes.length > 0) {
              for (var i = 0; i < 25; i++) {
                var symbol = dragonhatch.reel.getSymbolByIndex(i);
                if (symbol instanceof dragonHatchSymbol) {
                  var remove = removes[i];
                  if (remove) {
                    symbol.playWin(remove.winCoin);
                  } else {
                    symbol.darkBn = true;
                  }
                }
              }
              this.scheduleOnce(this.showDrop, 2);
            } else {
              this.doNext();
            }
          }
        };
        _proto.settlement = function settlement() {
          var _this12 = this;
          if (dragonhatch.lotteryRes.winCoin > dragonhatch.betSum * 5) {
            dragonhatch.bigwin.bigwincoin(dragonhatch.lotteryRes.winCoin);
          } else {
            dragonhatch.infoBoard.playWinAni(dragonhatch.lotteryRes.winCoin, 1, true);
            this.scheduleOnce(function () {
              if (dragonhatch.motherDragon.sleepBn == false) dragonhatch.motherDragon.state = 0;
              _this12.progress.init();
              _this12.playRollOver();
            }, 1);
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          if (dragonhatch.motherDragon.sleepBn == false) dragonhatch.motherDragon.state = 0;
          this.progress.init();
          dragonhatch.infoBoard.playWinAni(dragonhatch.lotteryRes.winCoin, 0, true);
          this.playRollOver();
        };
        _proto.stopRadom = function stopRadom() {
          var symbols = dragonhatch.getSymbols();
          var removes = dragonhatch.roundData.removeItems;
          var adds = dragonhatch.roundData.addItems;
          var count = 0;
          for (var i = 0; i < removes.length; i++) {
            var remove = removes[i];
            if (remove) {
              var add = adds[count];
              count++;
              var symbol = symbols[remove.index];
              symbol.stopRadom(add.id);
            }
          }
          this.doNext();
        }

        /**幼龙模式光效 */;
        _proto.showModLight = function showModLight(type) {
          this.modLight.node.active = true;
          this.modLight.spriteFrame = this.modLightSpriteFrame[type];
        };
        _proto.hideModLight = function hideModLight() {
          this.modLight.node.active = false;
        };
        /**土龙模式播放完成 */
        _proto.playGreenModEnd = function playGreenModEnd() {
          var _this13 = this;
          if (this.playGreenModEndBn) return;
          this.playGreenModEndBn = true;
          this.scheduleOnce(function () {
            _this13.playGreenModEndBn = false;
          }, 2);
          this.hideModLight();
          var removes = dragonhatch.roundData.removeItems;
          if (removes.length > 0) {
            this.drop();
          } else {
            this.doNext();
          }
        };
        _proto.playBlueModEnd = function playBlueModEnd() {
          var _this14 = this;
          if (this.playBlueModEndBn) return;
          this.playBlueModEndBn = true;
          this.scheduleOnce(function () {
            _this14.playBlueModEndBn = false;
          }, 2);
          this.hideModLight();
          this.doNext();
        };
        _proto.playRedModEnd = function playRedModEnd() {
          var _this15 = this;
          if (this.playRedModEndBn) return;
          this.playRedModEndBn = true;
          this.scheduleOnce(function () {
            _this15.playRedModEndBn = false;
          }, 2);
          this.hideModLight();
          this.doNext();
        };
        _proto.drop = function drop() {
          this.scheduleOnce(function () {
            dragonhatch.reel.drop();
          }, 0.5);
        };
        return dragonhatchMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firePb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "detailPb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "modLight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "modLightSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "waters", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bigFire", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var EMOD = exports('EMOD', /*#__PURE__*/function (EMOD) {
        EMOD[EMOD["null"] = 0] = "null";
        EMOD[EMOD["green"] = 1] = "green";
        EMOD[EMOD["blue"] = 2] = "blue";
        EMOD[EMOD["red"] = 3] = "red";
        EMOD[EMOD["yellow"] = 4] = "yellow";
        return EMOD;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragonhatchProgress.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dragonhatchHatch.ts', './dragonhatchMain.ts', './cDragonhatch.ts', './motherDragon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, ProgressBar, Label, SpriteFrame, Prefab, tween, instantiate, Vec3, sp, Color, Component, dragonhatchHatch, EHATCHTYPE, EMOD, dragonhatch, ESTATE;
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
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      tween = module.tween;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      sp = module.sp;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      dragonhatchHatch = module.dragonhatchHatch;
      EHATCHTYPE = module.EHATCHTYPE;
    }, function (module) {
      EMOD = module.EMOD;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }, function (module) {
      ESTATE = module.ESTATE;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "0430ddzIrpKFren6VSSIRcA", "dragonhatchProgress", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonhatchProgress = exports('dragonhatchProgress', (_dec = ccclass('dragonhatchProgress'), _dec2 = property({
        type: Node,
        tooltip: "进度条背景"
      }), _dec3 = property({
        type: Node,
        tooltip: "进度条框"
      }), _dec4 = property({
        type: Sprite,
        tooltip: ""
      }), _dec5 = property({
        type: ProgressBar,
        tooltip: "进度条"
      }), _dec6 = property({
        type: Label,
        tooltip: "进度文本"
      }), _dec7 = property({
        type: Label,
        tooltip: "进度目标文本"
      }), _dec8 = property({
        type: [SpriteFrame],
        tooltip: "进度条背景"
      }), _dec9 = property({
        type: Node,
        tooltip: "金龙身体"
      }), _dec10 = property({
        type: Node,
        tooltip: "金龙爪子"
      }), _dec11 = property({
        type: Node,
        tooltip: "金龙头"
      }), _dec12 = property({
        type: Node,
        tooltip: "龙蛋"
      }), _dec13 = property({
        type: Node,
        tooltip: "幼龙容器"
      }), _dec14 = property({
        type: Prefab,
        tooltip: "幼龙预制体"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchProgress, _Component);
        function dragonhatchProgress() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "kuan", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "barBG", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressLab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aimLab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "barBgs", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldDragonBody", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldDragonClaw", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldDragonHead", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eggs", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hatchContent", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hatchPB", _descriptor13, _assertThisInitialized(_this));
          _this.bgWidth = [320, 340, 380, 460];
          //进度条背景宽度
          _this.kuanWidth = [340, 360, 400, 480];
          //进度条边款宽度
          _this.barBGWidth = [512, 532, 572, 652];
          //进度条宽度
          _this.barTotal = [340, 390, 460, 570];
          //进度条长度
          _this.bgColor = ["#153A09", "#0D2E54", "#470708", "#4d4006"];
          _this.levs = [10, 30, 50, 70];
          // private progressLevs: number[] = [0.8, 0.5];
          /**当前进度条状态 */
          _this._progressType = ETYPE.green;
          _this._progressLev = 0;
          _this._curScore = 0;
          _this.goldDragonX = void 0;
          _this._score = 0;
          return _this;
        }
        var _proto = dragonhatchProgress.prototype;
        _proto.setGoldDragonPos = function setGoldDragonPos(aimX) {
          this.goldDragonBody.x = aimX;
          this.goldDragonClaw.x = aimX;
          this.goldDragonHead.x = aimX;
        };
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.addListener();
          this.init();
        };
        _proto.init = function init() {
          dragonhatch.momModBn = false;
          dragonhatch.main.audio.playBgm(0);
          if (this.goldDragonX == undefined) this.goldDragonX = this.goldDragonBody.x;
          this.playGoldDragonAni(EGOLDDRAGON.idle);
          this.progressType = ETYPE.green;
          this.score = 0;
          this.hatchContent.removeAllChildren();
          for (var i = 0; i < this.eggs.children.length; i++) {
            var node = this.eggs.children[i];
            node.active = true;
            if (i == 2) {
              this.playEggAni(node, EEGGTYPE.green, EEGG.idle);
            } else {
              this.playEggAni(node, this.getEggType(2 - i), EEGG.idlelineup);
            }
          }
        };
        _proto.update = function update(dt) {
          var aim = this.levs[this.progressType];
          this.progressBar.progress = Number(this.progressLab.string) / aim;
          var num = Number(this.progressLab.string);
          var preAim = this.progressType > 0 ? this.levs[this.progressType - 1] : 0;
          var disProgress = (num - preAim) / (aim - preAim);
          if (disProgress > 1 / 2) {
            this.progressLev = 2;
          } else if (disProgress > 0) {
            this.progressLev = 1;
          }
        }

        //数字滚动动画
        ;

        _proto.playscore = function playscore(score) {
          this.aimLab.string = "/" + this.curAimScore;
          if (score < this.curAimScore) {
            this.doPlayscore(score);
          } else {
            this.doPlayscore(this.curAimScore);
          }
        };
        _proto.doPlayscore = function doPlayscore(v) {
          var _this2 = this;
          tween(this.progressLab).to(0.5, {
            string: v
          }).call(function () {
            var progress = Number(_this2.progressLab.string);
            if (progress == _this2.levs[ETYPE.yellow]) {
              _this2.playGoldDragonAni(EGOLDDRAGON.win, false);
              _this2.addGoldDragonAni(EGOLDDRAGON.winidle);
              _this2.progressBar.totalLength = 654;
              return;
            }
            if (progress == _this2.curAimScore) _this2.eggBorn();
            if (progress != _this2.score) {
              _this2.scheduleOnce(function () {
                _this2.playscore(_this2.score);
              }, 1.1);
            }
          }).start();
        };
        _proto.eggBorn = function eggBorn() {
          var _this3 = this;
          var type = Number(this.progressType);
          dragonhatch.main.audio.playBgm(type + 1);
          switch (this.progressType) {
            //蛋壳破开，幼龙跳出
            case ETYPE.green:
            case ETYPE.blue:
            case ETYPE.red:
              var egg = this.getEgg(type);
              this.playEggAni(egg, this.getEggType(type), EEGG.hatch, false);
              var hatch = instantiate(this.hatchPB).getComponent(dragonhatchHatch);
              hatch.node.parent = this.node;
              hatch.node.position = new Vec3(egg.x, egg.y + 100);
              hatch.type = Number(this.progressType);
              hatch.jump(new Vec3(-70 + this.hatchContent.x, 164));
              hatch.scheduleOnce(function () {
                hatch.node.parent = _this3.hatchContent;
                hatch.node.y -= 40;
              }, 0.6);
              break;
          }
          if (this.progressType < ETYPE.yellow) {
            tween(this.node).delay(1).call(function () {
              _this3.progressType++;
              _this3.progressBar.progress = 0;
            }).delay(0.2).call(function () {
              _this3.score = _this3.score;
            }).start();
          } else {
            dragonhatch.main.audio.playMomUnlock();
          }
        }

        //触发幼龙模式
        ;

        _proto.playHatchMod = function playHatchMod(mod) {
          if (mod == EMOD.yellow) return;
          var hatch = this.getHatch(mod);
          hatch.node.parent = null;
        }

        /**动画监听 */;
        _proto.addListener = function addListener() {
          var _this4 = this;
          var _loop = function _loop(i) {
            var node = _this4.eggs.children[i];
            var ani = node.getComponent(sp.Skeleton);
            ani.setCompleteListener(function (event) {
              switch (event.animation.name) {
                case EEGG.spawn:
                  //睁眼动作过场
                  _this4.playEggAni(_this4.getEgg(i), _this4.getEggType(i), EEGG.idle);
                  break;
                case EEGG.hatch:
                  //蛋消失
                  // ani.node.active = false;
                  break;
              }
            });
          };
          // let ani: sp.Skeleton = this.goldDragonHead.getComponent(sp.Skeleton);
          // ani.setCompleteListener((event) => {
          //     switch (event.animation.name) {
          //         case EGOLDDRAGON.win:
          //             this.playGoldDragonAni(EGOLDDRAGON.winidle)
          //             break;
          //     }
          // })
          for (var i = 0; i < this.eggs.children.length; i++) {
            _loop(i);
          }
        }

        /**金龙动画 */;
        _proto.playGoldDragonAni = function playGoldDragonAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          var bodyAni = this.goldDragonBody.children[0].getComponent(sp.Skeleton);
          var clawAni = this.goldDragonClaw.getComponent(sp.Skeleton);
          var headAni = this.goldDragonHead.getComponent(sp.Skeleton);
          bodyAni.setAnimation(0, aimStr, loopBn);
          clawAni.setAnimation(0, aimStr, loopBn);
          headAni.setAnimation(0, aimStr, loopBn);
        }
        /**金龙动画 */;
        _proto.addGoldDragonAni = function addGoldDragonAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          var bodyAni = this.goldDragonBody.children[0].getComponent(sp.Skeleton);
          var clawAni = this.goldDragonClaw.getComponent(sp.Skeleton);
          var headAni = this.goldDragonHead.getComponent(sp.Skeleton);
          bodyAni.addAnimation(0, aimStr, loopBn);
          clawAni.addAnimation(0, aimStr, loopBn);
          headAni.addAnimation(0, aimStr, loopBn);
        }
        /**龙蛋动画 */;
        _proto.playEggAni = function playEggAni(node, eggType, aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          var ani = node.getComponent(sp.Skeleton);
          ani.setAnimation(0, eggType + aimStr, loopBn);
        };
        _proto.getEggType = function getEggType(index) {
          switch (index) {
            case EHATCHTYPE.green:
              return EEGGTYPE.green;
            case EHATCHTYPE.blue:
              return EEGGTYPE.blue;
            case EHATCHTYPE.red:
              return EEGGTYPE.red;
            default:
              console.log("getEggTypeByIndex error:" + index);
              break;
          }
          return EEGGTYPE.green;
        };
        _proto.getEgg = function getEgg(index) {
          switch (index) {
            case EHATCHTYPE.green:
              return this.eggs.children[2];
            case EHATCHTYPE.blue:
              return this.eggs.children[1];
            case EHATCHTYPE.red:
              return this.eggs.children[0];
            default:
              console.log("getEggByIndex error:" + index);
              break;
          }
          return undefined;
        };
        _proto.getHatch = function getHatch(mod) {
          for (var i = 0; i < this.hatchContent.children.length; i++) {
            var hatch = this.hatchContent.children[i].getComponent(dragonhatchHatch);
            if (hatch.type == mod - 1) {
              return hatch;
            }
          }
          return null;
        };
        _createClass(dragonhatchProgress, [{
          key: "progressType",
          get: function get() {
            return this._progressType;
          },
          set: function set(v) {
            if (this._progressType != v) {
              if (v == ETYPE.yellow) {
                dragonhatch.motherDragon.state = ESTATE.collectIn;
              }
            }
            this._progressType = v;
            this.bg.children[1].w = this.bgWidth[v];
            this.kuan.children[1].w = this.kuanWidth[v];
            for (var i = 0; i < this.bg.children.length; i++) {
              var _sp = this.bg.children[i].getComponent(Sprite);
              _sp.color = new Color(this.bgColor[v]);
            }
            this.barBG.spriteFrame = this.barBgs[v];
            this.barBG.node.w = this.barBGWidth[v];
            this.progressBar.totalLength = this.barTotal[v];
            this.progressBar.node.x = -this.barBGWidth[v] / 2;
            // this.hatchContent.x = this.progressBar.totalLength + this.progressBar.node.x;
            if (v) {
              var temp = (this.kuanWidth[v] - this.kuanWidth[v - 1]) / 2;
              this.eggs.x = temp;
              this.setGoldDragonPos(this.goldDragonX + temp);
            } else {
              this.eggs.x = 0;
              this.setGoldDragonPos(this.goldDragonX);
            }
            this.progressBar.progress = 0;
          }
        }, {
          key: "progressLev",
          get: function get() {
            return this._progressLev;
          }
          /**根据不同挡位播放不同待机动画 */,
          set: function set(v) {
            if (this._progressLev != v && v) {
              var type = Number(this.progressType);
              var temp = "";
              if (v == 1) {
                temp = EEGG.idle2;
              } else if (v == 2) {
                temp = EEGG.idle3;
              }
              if (type < ETYPE.yellow) {
                this.playEggAni(this.getEgg(type), this.getEggType(type), temp);
              } else {
                this.playGoldDragonAni(temp);
              }
            }
            this._progressLev = v;
          }
        }, {
          key: "curAimScore",
          get: function get() {
            return this.levs[this.progressType];
          }
        }, {
          key: "preAimScore",
          get: function get() {
            if (this.progressType) {
              return this.levs[this.progressType - 1];
            }
            return 0;
          }
        }, {
          key: "curScore",
          get: function get() {
            return this._curScore;
          },
          set: function set(v) {
            this._curScore = v;
          }
        }, {
          key: "denominator",
          get: function get() {
            return this.curAimScore - this.preAimScore;
          }
        }, {
          key: "score",
          get: function get() {
            return this._score;
          },
          set: function set(v) {
            if (this._score == v) return;
            dragonhatch.main.audio.playBar(this.progressType == ETYPE.yellow);
            this._score = v;
            if (v >= this.curAimScore) {
              this.playscore(this.curAimScore);
            } else {
              if (this.curScore < v || v == 0) {
                this.playscore(v);
              }
            }
          }
        }]);
        return dragonhatchProgress;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "kuan", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "barBG", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "progressLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "aimLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "barBgs", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "goldDragonBody", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "goldDragonClaw", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "goldDragonHead", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "eggs", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "hatchContent", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "hatchPB", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ETYPE = exports('ETYPE', /*#__PURE__*/function (ETYPE) {
        ETYPE[ETYPE["green"] = 0] = "green";
        ETYPE[ETYPE["blue"] = 1] = "blue";
        ETYPE[ETYPE["red"] = 2] = "red";
        ETYPE[ETYPE["yellow"] = 3] = "yellow";
        return ETYPE;
      }({}));
      var EHATCHANI = exports('EHATCHANI', /*#__PURE__*/function (EHATCHANI) {
        EHATCHANI["spawn"] = "feat_spawn";
        EHATCHANI["idle"] = "feat_idle";
        EHATCHANI["win"] = "feat_win";
        EHATCHANI["exit"] = "feat_exit";
        return EHATCHANI;
      }({})); //退场
      var EGOLDDRAGON = exports('EGOLDDRAGON', /*#__PURE__*/function (EGOLDDRAGON) {
        EGOLDDRAGON["idle"] = "idle";
        EGOLDDRAGON["idle2"] = "idle2";
        EGOLDDRAGON["idle3"] = "idle3";
        EGOLDDRAGON["win"] = "win";
        EGOLDDRAGON["winidle"] = "win_idle";
        return EGOLDDRAGON;
      }({})); //触发待机
      var EEGG = exports('EEGG', /*#__PURE__*/function (EEGG) {
        EEGG["hatch"] = "hatch";
        EEGG["idle"] = "idle";
        EEGG["idle2"] = "idle2";
        EEGG["idle3"] = "idle3";
        EEGG["idlelineup"] = "idle_lineup";
        EEGG["spawn"] = "spawn";
        return EEGG;
      }({})); //睁眼动作
      var EEGGTYPE = exports('EEGGTYPE', /*#__PURE__*/function (EEGGTYPE) {
        EEGGTYPE["green"] = "gr_";
        EEGGTYPE["blue"] = "bl_";
        EEGGTYPE["red"] = "rd_";
        return EEGGTYPE;
      }({})); //红色 火龙
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragonhatchReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './cDragonhatch.ts', './baseSymbol.ts', './dragonHatchSymbol.ts', './Logger.ts', './dragonhatchMain.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodePool, Vec3, tween, ETYPE, baseReel, dragonhatch, baseSymbol, dragonHatchSymbol, Logger, EMOD;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      ETYPE = module.ETYPE;
      baseReel = module.baseReel;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }, function (module) {
      dragonHatchSymbol = module.dragonHatchSymbol;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      EMOD = module.EMOD;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "69f1bWJMDFPJI/YoUN/qOMp", "dragonhatchReel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FIRSTSYMBOL = [9, 4, 7, 6, 8, 3, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 1, 8, 5, 7, 2, 9];
      var dragonhatchReel = exports('dragonhatchReel', (_dec = ccclass('dragonhatchReel'), _dec(_class = /*#__PURE__*/function (_baseReel) {
        _inheritsLoose(dragonhatchReel, _baseReel);
        function dragonhatchReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseReel.call.apply(_baseReel, [this].concat(args)) || this;
          _this.disTime = 0.5;
          return _this;
        }
        var _proto = dragonhatchReel.prototype;
        _proto.start = function start() {
          dragonhatch.reel = this;
          this.radomIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          this.v = 40;
          this.setReelDate();
          // this.scheduleOnce(this.loop, 1);
          // this.scheduleOnce(() => {
          //     this.loopEnd(FIRSTSYMBOL);
          // }, 3);
        }

        /**设置滚轴排布数据 */;
        _proto.setReelDate = function setReelDate() {
          this.reelDates = [{
            index: 0,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(-300, -320),
            vector: 740,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 1,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(-150, -320),
            vector: 740,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 2,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(0, -320),
            vector: 740,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 3,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(150, -320),
            vector: 740,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 4,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(300, -320),
            vector: 740,
            symbols: [],
            "switch": false,
            hierarchy: true
          }];
          this.arrIndex = [0, 5, 10, 15, 20];
          this.bindResult(FIRSTSYMBOL);
          dragonhatch.main.firstSymbolOver();
        };
        /**启动循环播放 */
        _proto.loop = function loop() {
          var _this2 = this;
          dragonhatch.main.audio.playReelLoop();
          var _loop = function _loop(i) {
            var r = _this2.reelDates[i];
            var disTime = dragonhatch.slotCtrl.isSpeed ? 0 : _this2.disTime * Math.abs(r.index - 2);
            _this2.scheduleOnce(function () {
              _this2.reboundMove(_this2.reelDates[i]);
            }, disTime);
          };
          for (var i = 0; i < this.reelDates.length; i++) {
            _loop(i);
          }
        };
        _proto.reboundMove = function reboundMove(r) {
          var _this3 = this;
          this.rebound(r, true, function () {
            _this3.moveOne(r);
          });
        }

        /**停止循环展示结果 */;
        _proto.loopEnd = function loopEnd(arr, callback) {
          var _this4 = this;
          if (callback === void 0) {
            callback = function callback() {};
          }
          if (dragonhatch.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          if (dragonhatch.slotCtrl.isSpeed == false) {
            var _loop2 = function _loop2() {
              var r = _this4.reelDates[i];
              var disTime = _this4.disTime * Math.abs(r.index - 2);
              _this4.scheduleOnce(function () {
                _this4.bindResultOne(r, arr, function () {
                  var cb = function cb() {
                    callback();
                    dragonhatch.main.audio.playReelEnd(false);
                  };
                  _this4.rebound(r, false, cb);
                });
              }, disTime);
            };
            for (var i = 0; i < this.reelDates.length; i++) {
              _loop2();
            }
          } else {
            this.bindResult(arr, function () {
              callback();
              dragonhatch.main.audio.playReelEnd(true);
            });
          }
        }

        /**消除中奖之后执行下落 */;
        _proto.drop = function drop() {
          var mod = dragonhatch.roundData.modType;
          if (mod == EMOD.green) {
            this.doAdd();
            return;
          }
          var removes = dragonhatch.roundData.removeItems;
          if (removes.length > 0) {
            dragonhatch.main.audio.playRemove();
            for (var i = 0; i < removes.length; i++) {
              var remove = removes[i];
              if (remove) {
                var symbol = dragonhatch.reel.getSymbolByIndex(remove.index);
                if (symbol) {
                  symbol.playExit();
                } else {
                  Logger.error("消除位置不存在roundIndex：" + dragonhatch.roundIndex + "index:" + remove.index);
                }
              }
            }
          }
          dragonHatchSymbol.removeCount = 0;
        };
        _proto.doAdd = function doAdd() {
          this.scheduleOnce(this.addItems, 0.1);
        };
        _proto.addItems = function addItems() {
          this.removeUnuseAll();
          var arr = [5, 5, 5, 5, 5];
          var addItems = dragonhatch.roundData.addItems;
          for (var i = 0; i < addItems.length; i++) {
            var addItem = addItems[i];
            var r = this.reelDates[addItem.rindex];
            var symbol = this.pushSymbol(r, addItem.id);
            symbol.aimBn = true;
            symbol.bindAimPos(arr[addItem.rindex]);
            symbol.node.y += 50;
            arr[addItem.rindex]++;
          }
          this.scheduleOnce(this.playDrop, 1);
        };
        _proto.playDrop = function playDrop() {
          var _this5 = this;
          var _loop3 = function _loop3() {
            var r = _this5.reelDates[i];
            var addSymbol = _this5.pushSymbol(r);
            for (var j = 0; j < r.symbols.length; j++) {
              var symbol = r.symbols[j];
              _this5.dropAim(symbol);
            }
            _this5.scheduleOnce(function () {
              addSymbol.recover();
            }, 0.5);
          };
          for (var i = 0; i < this.reelDates.length; i++) {
            _loop3();
          }
          this.scheduleOnce(function () {
            _this5.spawn();
            dragonhatch.main.doNext();
          }, 1);
        };
        _proto.dropAim = function dropAim(symbol) {
          if (Math.abs(symbol.aimPos - symbol.node.y) > 1) {
            tween(symbol.node).delay(Math.random() * 0.1).to(0.2, {
              y: symbol.aimPos
            }).call(function () {
              dragonhatch.main.audio.playReelEnd(false);
            }).by(0.1, {
              y: -this.reboundDis
            }, {
              easing: 'quartOut'
            }).by(0.1, {
              y: this.reboundDis
            }, {
              easing: 'quartIn'
            }).start();
          }
        };
        _proto.getSymbolByPos = function getSymbolByPos(rIdx, idx) {
          return this.reelDates[rIdx].symbols[idx];
        };
        _proto.spawn = function spawn() {
          var symbols = this.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.wildSpawn();
          }
        };
        return dragonhatchReel;
      }(baseReel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragonhatchSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cDragonhatch.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, Num, dragonhatch, LanguageData;
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
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Animation = module.Animation;
      Sprite = module.Sprite;
      find = module.find;
      tween = module.tween;
      Vec3 = module.Vec3;
      macro = module.macro;
      Button = module.Button;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "03cf0vM2RJED7hkmELm136X", "dragonhatchSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var dragonhatchSlotCtrl = exports('dragonhatchSlotCtrl', (_dec = ccclass('dragonhatchSlotCtrl'), _dec2 = property({
        type: Node,
        tooltip: "开始按钮"
      }), _dec3 = property({
        type: SpriteFrame,
        tooltip: "旋转图片"
      }), _dec4 = property({
        type: Node,
        tooltip: "spin_AnimNode"
      }), _dec5 = property({
        type: Node,
        tooltip: "摇奖按钮点击效果"
      }), _dec6 = property({
        type: Node,
        tooltip: "自动次数按钮"
      }), _dec7 = property({
        type: Node,
        tooltip: "停止自动按钮点击效果"
      }), _dec8 = property({
        type: Node,
        tooltip: "加注"
      }), _dec9 = property({
        type: Node,
        tooltip: "减注"
      }), _dec10 = property({
        type: Node,
        tooltip: "自动面板"
      }), _dec11 = property({
        type: Node,
        tooltip: "设置"
      }), _dec12 = property({
        type: Node,
        tooltip: "下注面板"
      }), _dec13 = property({
        type: Node,
        tooltip: "设置面板"
      }), _dec14 = property({
        type: Node,
        tooltip: "金币面板"
      }), _dec15 = property({
        type: Label,
        tooltip: "用户金币"
      }), _dec16 = property({
        type: Label,
        tooltip: "本局总注"
      }), _dec17 = property({
        type: Label,
        tooltip: "赢钱金额"
      }), _dec18 = property({
        type: Label,
        tooltip: "大奖赢钱金额"
      }), _dec19 = property({
        type: Node,
        tooltip: "状态节点"
      }), _dec20 = property({
        type: Node,
        tooltip: "大奖节点"
      }), _dec21 = property({
        type: Node,
        tooltip: "提示文字"
      }), _dec22 = property({
        type: Node,
        tooltip: "音乐"
      }), _dec23 = property({
        type: SpriteFrame,
        tooltip: "sp_settingControl"
      }), _dec24 = property({
        type: Node,
        tooltip: "极速"
      }), _dec25 = property({
        type: SpriteFrame,
        tooltip: "sp_speed"
      }), _dec26 = property({
        type: SpriteFrame,
        tooltip: "sp2_speed"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchSlotCtrl, _Component);
        function dragonhatchSlotCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Btn_start", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spin_Sp", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spin_AnimNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rollClickAni", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_stopAuto", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopRollClickAni", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_add", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_sub", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_auto", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_set", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betting_panel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Setting_panel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin_panel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserCoin", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurBet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCoin_lab", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinCoin_lab", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stateNode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinNode", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicBtn", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_settingControl", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedBtn", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_speed", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp2_speed", _descriptor25, _assertThisInitialized(_this));
          _this.isPanelAnim = false;
          _this.isSpeed = false;
          _this.bFastBigWin = false;
          _this.sumList = [];
          _this.curBetTween = null;
          /**winNode label */
          _this.winAimCoin = 0;
          _this.winAddcoin = 0;
          _this.winAddOnce = 0;
          _this._winPlayOverBn = false;
          //创建提示文字
          _this.tipTween = null;
          return _this;
        }
        var _proto = dragonhatchSlotCtrl.prototype;
        _proto.start = function start() {
          this.Btn_start.on(Node.EventType.MOUSE_ENTER, this.btnRollTouchStart, this);
          this.Btn_start.on(Node.EventType.MOUSE_LEAVE, this.btnRollTouchEnd, this);
          this.Btn_start.on(Node.EventType.TOUCH_START, this.btnRollClick, this);
          this.Btn_stopAuto.on(Node.EventType.MOUSE_ENTER, this.btnStopRollTouchStart, this);
          this.Btn_stopAuto.on(Node.EventType.MOUSE_LEAVE, this.btnStopRollTouchEnd, this);
          this.Btn_stopAuto.on(Node.EventType.TOUCH_START, this.btnStopRollClick, this);
          this.isPanelAnim = false;
          this.isSpeed = false;
          this.bFastBigWin = false;
          this.init();
        };
        _proto.btnRollTouchStart = function btnRollTouchStart() {
          if (!dragonhatch.rollEnable) {
            return;
          }
          if (this.rollClickAni) {
            this.rollClickAni.active = true;
            this.rollClickAni.getComponent(Animation).play();
          }
        };
        _proto.btnRollTouchEnd = function btnRollTouchEnd() {
          if (this.rollClickAni) {
            this.rollClickAni.active = false;
          }
        };
        _proto.btnRollClick = function btnRollClick(e) {
          if (!dragonhatch.rollEnable) {
            return;
          }
          dragonhatch.main.onCLick(e, 'roll');
        };
        _proto.btnStopRollTouchStart = function btnStopRollTouchStart() {
          if (this.stopRollClickAni) {
            this.stopRollClickAni.active = true;
            // this.stopRollClickAni!.getComponent(Animation)!.play();
          }
        };

        _proto.btnStopRollTouchEnd = function btnStopRollTouchEnd() {
          if (this.stopRollClickAni) {
            this.stopRollClickAni.active = false;
          }
        };
        _proto.btnStopRollClick = function btnStopRollClick(e) {
          this.onCLick_stopAuto();
        }

        //停止自动
        ;

        _proto.onCLick_stopAuto = function onCLick_stopAuto() {
          this.Btn_stopAuto.active = false;
          this.Btn_start.active = true;
          dragonhatch.main.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(dragonhatch.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.money);
          this.initSpeed();
        };
        _proto.update = function update() {
          this.initTip();
        };
        //初始化下注弹板数据
        _proto.initBetContent = function initBetContent(numList, betList, line) {
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
          this.sumList = sumList;
          if (!dragonhatch.betNum) {
            dragonhatch.sumIdx = 0;
            dragonhatch.betNum = this.sumList[dragonhatch.sumIdx];
          } else {
            dragonhatch.sumIdx = this.sumList.indexOf(dragonhatch.betNum);
          }
        };
        _proto.settingControlButtonClick_Function = function settingControlButtonClick_Function() {
          if (tgx.AudioMgr.inst["switch"] == true) {
            tgx.AudioMgr.inst["switch"] = false;
            this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[0];
          } else {
            tgx.AudioMgr.inst["switch"] = true;
            this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[1];
          }
        }

        //相关点击
        ;

        _proto.onCLick = function onCLick(event, args) {
          dragonhatch.main.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          dragonhatch.autoPanel.showPanel();
        }

        //打开设置界面
        ;

        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          // dragonhatch.main.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", dragonhatch.main.node);
          if (footer) {
            footer.active = false;
          }
          this.Btn_start.active = false;
          tween(this.betting_panel).to(0.2, {
            position: new Vec3(0, -804, 0),
            opacity: 0
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, -560, 0),
            opacity: 255
          }).start();
        }

        //打开设置界面
        ;

        _proto.onCLickHideSettingPanel = function onCLickHideSettingPanel(event) {
          if (this.Setting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", dragonhatch.main.node);
          if (footer) {
            footer.active = true;
          }
          this.Btn_start.active = true;
          tween(this.betting_panel).to(0.2, {
            position: new Vec3(0, -624, 0),
            opacity: 255
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, -740, 0),
            opacity: 0
          }).start();
        }

        //下注弹板开关
        ;

        _proto.onCLick_betPanel = function onCLick_betPanel(event, args) {
          var _this2 = this;
          var type = parseInt(args);
          if (this.isPanelAnim) {
            return;
          }
          this.isPanelAnim = true;
          this.scheduleOnce(function () {
            _this2.isPanelAnim = false;
          }, 0.5);
          if (type == 0) {
            dragonhatch.betPanel.hidePanel();
          } else {
            dragonhatch.betPanel.showPanel();
            dragonhatch.betPanel.bindBet();
          }
        }

        //声音选项
        ;

        _proto.onCLick_sound = function onCLick_sound(event) {
          this.settingControlButtonClick_Function();
        }

        //选择自动次数
        ;

        _proto.onCLick_chooseAutoNum = function onCLick_chooseAutoNum(event, args) {};
        _proto.initSpeed = function initSpeed() {
          this.isSpeed = false;
          this.tipNode.children[2].active = true;
          this.tipNode.children[3].active = false;
          this.speedBtn.getComponent(Sprite).spriteFrame = this.sp_speed[0];
          this.speedBtn.children[0].getComponent("cc.Sprite").spriteFrame = this.sp2_speed[0];
          this.speedBtn.children[1].active = false;
        }

        //设置极速模式
        ;

        _proto.onCLick_speed = function onCLick_speed() {
          // dragonhatch.main.audio.playclickopen();
          if (this.isSpeed) {
            this.isSpeed = false;
            this.tipNode.children[2].active = true;
            this.tipNode.children[3].active = false;
            this.createTipNode(LanguageData.getLangByID("BXINGAME_33"));
            this.speedBtn.getComponent(Sprite).spriteFrame = this.sp_speed[0];
            this.speedBtn.children[0].getComponent("cc.Sprite").spriteFrame = this.sp2_speed[0];
            this.speedBtn.children[1].active = false;
          } else {
            this.isSpeed = true;
            this.tipNode.children[2].active = false;
            this.tipNode.children[3].active = true;
            this.createTipNode(LanguageData.getLangByID("BXINGAME_34"));
            this.speedBtn.getComponent(Sprite).spriteFrame = this.sp_speed[1];
            this.speedBtn.children[0].getComponent(Sprite).spriteFrame = this.sp2_speed[1];
            this.speedBtn.children[1].active = true;
          }
        };
        _proto.initTip = function initTip() {
          if (this.tipNode.children[2].active || this.tipNode.children[3].active) {
            this.tipNode.children[0].w = this.tipNode.children[1].w + 70;
            this.tipNode.children[1].x = 16;
            this.tipNode.children[2].x = -this.tipNode.children[1].w / 2;
            this.tipNode.children[3].x = -this.tipNode.children[1].w / 2;
          } else {
            this.tipNode.children[1].x = 0;
            this.tipNode.children[0].w = this.tipNode.children[1].w + 30;
          }
        };
        _proto.bindBet = function bindBet() {
          dragonhatch.sumIdx = this.sumList.indexOf(dragonhatch.betSum);
          this.updateBet(dragonhatch.sumIdx);
        }

        //更新下注值
        ;

        _proto.updateBet = function updateBet(idx) {
          if (idx >= this.sumList.length || idx < 0) {
            if (idx >= this.sumList.length) {
              this.tipNode.children[2].active = false;
              this.tipNode.children[3].active = false;
              this.createTipNode(LanguageData.getLangByID("BXINGAME_35"));
            } else {
              this.tipNode.children[2].active = false;
              this.tipNode.children[3].active = false;
              this.createTipNode(LanguageData.getLangByID("BXINGAME_36"));
            }
            return 0;
          }
          if (dragonhatch.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (dragonhatch.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (dragonhatch.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (dragonhatch.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          dragonhatch.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.betSum);
          this.curBetAni();
          return 1;
        };
        _proto.curBetAni = function curBetAni() {
          var _this$curBetTween, _this$curBetTween2;
          (_this$curBetTween = this.curBetTween) == null || _this$curBetTween.stop();
          (_this$curBetTween2 = this.curBetTween) == null || _this$curBetTween2.destroySelf();
          this.curBetTween = tween(this.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.6, 1.6, 1.6)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.playAnimWin = function playAnimWin(type, coin) {
          var t = (type + 1) * 20; //变化次数
          this.winAimCoin = coin;
          this.winAddcoin = 0;
          this.winAddOnce = this.winAimCoin / t;
          this.winPlayOverBn = false;
          if (t == 0) {
            this.bindWinLab(coin);
            return;
          } else {
            this.bindWinLab(this.winAddcoin);
          }
          this.schedule(this.winOneChange, 0.05, macro.REPEAT_FOREVER);
        };
        _proto.bindWinLab = function bindWinLab(coin) {
          // (dragonhatch.main.winNode.children[0].getComponent(Label) as Label).string = Num.exchangeToThousands(dragonhatch.exchangeRate, coin);
          this.winCoin_lab.string = Num.exchangeToThousands(dragonhatch.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.lotteryRes.curCoin - dragonhatch.lotteryRes.winCoin + coin);
        };
        _proto.winOneChange = function winOneChange() {
          this.winAddcoin += this.winAddOnce;
          if (this.winAddcoin >= this.winAimCoin) {
            this.winPlayCoinOver();
            this.bindWinLab(this.winAimCoin);
          } else {
            this.bindWinLab(this.winAddcoin);
          }
        };
        _proto.winPlayCoinOver = function winPlayCoinOver() {
          // this.unschedule(this.winOneChange);
          // this.winPlayOverBn = true;
          // let node: Node = dragonhatch.main.winNode;
          // tween(node)
          //     .to(0.5, { scale: new Vec3(1.2, 1.2) })
          //     .to(0.2, { scale: new Vec3(1, 1) })
          //     .start();
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              dragonhatch.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !dragonhatch.auto && this.setButtonState(true);
              if (dragonhatch.lotteryRes && dragonhatch.lotteryRes.winCoin == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              dragonhatch.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(dragonhatch.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              dragonhatch.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              dragonhatch.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 0;
              break;
          }
        }

        /**开始转动屏蔽变更下注 */;
        _proto.setButtonState = function setButtonState(state) {
          this.Btn_add.opacity = state ? 255 : 100;
          this.Btn_sub.opacity = state ? 255 : 100;
          this.Btn_auto.opacity = state ? 255 : 100;
          this.Btn_set.opacity = state ? 255 : 100;
          this.Btn_add.getComponent(Button).interactable = state;
          this.Btn_sub.getComponent(Button).interactable = state;
          this.Btn_auto.getComponent(Button).interactable = state;
          this.Btn_set.getComponent(Button).interactable = state;
          this.lblCurBet.node.parent.parent.getComponent(Button).interactable = state;
        }

        /** 0:白色 other：绿色*/;
        _proto.changeLabColor = function changeLabColor(type) {
          if (type == 0) {
            this.lblUserCoin.node.color = new Color(255, 255, 255);
            this.lblCurBet.node.color = new Color(255, 255, 255);
            this.winCoin_lab.node.color = new Color(255, 255, 255);
          } else {
            this.lblUserCoin.node.color = new Color(123, 233, 246);
            this.lblCurBet.node.color = new Color(123, 233, 246);
            this.winCoin_lab.node.color = new Color(123, 233, 246);
          }
        };
        _proto.createTipNode = function createTipNode(word) {
          var _this$tipTween,
            _this$tipTween2,
            _this3 = this;
          (_this$tipTween = this.tipTween) == null || _this$tipTween.stop();
          (_this$tipTween2 = this.tipTween) == null || _this$tipTween2.destroySelf();
          this.tipNode.opacity = 0;
          this.tipNode.scale = new Vec3(1, 1, 1);
          this.tipNode.getChildByName("lab").getComponent(Label).string = word;
          this.tipTween = tween(this.tipNode).call(function () {
            _this3.tipNode.opacity = 255;
          }).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).delay(2).to(0.2, {
            opacity: 0
          }).start();
        };
        _createClass(dragonhatchSlotCtrl, [{
          key: "winPlayOverBn",
          get: function get() {
            return this._winPlayOverBn;
          },
          set: function set(v) {
            this._winPlayOverBn = v;
          }
        }]);
        return dragonhatchSlotCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Btn_start", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spin_Sp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spin_AnimNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rollClickAni", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Btn_stopAuto", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "stopRollClickAni", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Btn_add", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Btn_sub", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Btn_auto", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Btn_set", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "betting_panel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Setting_panel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "coin_panel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lblUserCoin", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblCurBet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "winCoin_lab", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bigWinCoin_lab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "stateNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "bigWinNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "musicBtn", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "sp_settingControl", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "speedBtn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "sp_speed", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "sp2_speed", [_dec26], {
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

System.register("chunks:///_virtual/dragonHatchSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragonhatch.ts', './dragonhatchWaterEffect.ts', './baseSymbol.ts', './Num.ts', './dragonhatchLine.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, tween, Vec3, Animation, Label, macro, dragonhatch, dragonhatchWaterEffect, ESHOWTYPE, baseSymbol, Num, dragonhatchLine;
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
      instantiate = module.instantiate;
      tween = module.tween;
      Vec3 = module.Vec3;
      Animation = module.Animation;
      Label = module.Label;
      macro = module.macro;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }, function (module) {
      dragonhatchWaterEffect = module.dragonhatchWaterEffect;
    }, function (module) {
      ESHOWTYPE = module.ESHOWTYPE;
      baseSymbol = module.baseSymbol;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      dragonhatchLine = module.dragonhatchLine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "2d48fpZvc1DJob3RZgnsHS/", "dragonHatchSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonHatchSymbol = exports('dragonHatchSymbol', (_dec = ccclass('dragonHatchSymbol'), _dec2 = property({
        type: Prefab,
        tooltip: "龙母模式连线"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "水龙模式"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "火龙模式"
      }), _dec5 = property({
        type: Prefab,
        tooltip: "龙母模式火焰爆炸效果"
      }), _dec6 = property({
        type: Prefab,
        tooltip: "龙母模式火焰爆炸效果"
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_baseSymbol) {
        _inheritsLoose(dragonHatchSymbol, _baseSymbol);
        function dragonHatchSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseSymbol.call.apply(_baseSymbol, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "linesPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waterEffectPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fireEffectPb", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "momfireBoomPb", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCoinPb", _descriptor5, _assertThisInitialized(_this));
          /**水龙模式表现 */
          _this.waterNode = null;
          /**火龙模式表现 */
          _this.fireNode = null;
          /**播放中奖 */
          _this.winCoin = void 0;
          _this.lines = void 0;
          return _this;
        }
        var _proto = dragonHatchSymbol.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.addListener();
        }

        /**动画监听 */;
        _proto.addListener = function addListener() {
          var _this2 = this;
          this.ske.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case EROLEANI.featureexit:
                _this2.recover();
                dragonhatch.main.playGreenModEnd();
                break;
              case EROLEANI.exit:
                dragonHatchSymbol.removeCount++;
                if (dragonHatchSymbol.removeCount >= dragonhatch.roundData.addItems.length) dragonhatch.reel.doAdd();
                _this2.recover();
                break;
            }
          });
        }

        /**土龙模式表现 */;
        _proto.playGreenMod = function playGreenMod() {
          this.showType = ESHOWTYPE.ske;
          //所有低赔付符号从卷轴中移除
          if (this.symbolId >= ESYMBOLID.diamond && this.symbolId <= ESYMBOLID.spade) {
            this.playAni(EROLEANI.crack1, false);
            this.addAni(EROLEANI.crack2, false);
            this.addAni(EROLEANI.featureexit, false);
          }
        };
        _proto.playBlueMod = function playBlueMod() {
          if (this.waterNode) return;
          var waterEffect = instantiate(this.waterEffectPb).getComponent(dragonhatchWaterEffect);
          this.waterNode = waterEffect.node;
          this.waterNode.parent = this.node.parent;
          this.waterNode.x = this.node.x;
          this.waterNode.y = this.node.y;
        };
        _proto.hideBlueMod = function hideBlueMod() {
          this.symbolId = ESYMBOLID.wild;
          this.wildSpawn();
          if (this.waterNode) {
            this.waterNode.getComponent(dragonhatchWaterEffect).playBoom();
            this.waterNode = null;
          }
        };
        _proto.playRedMod = function playRedMod() {
          if (this.fireNode) return;
          this.fireNode = instantiate(this.fireEffectPb);
          this.fireNode.parent = this.node.parent.parent;
          this.fireNode.x = this.node.x;
          this.fireNode.y = this.node.y;
          // let i: number = this.reelDate.index;
          // let j: number = this.node.getSiblingIndex();
          this.fireNode.opacity = 0;
          tween(this.fireNode).to(0.2, {
            scale: new Vec3(1.2, 1.2),
            opacity: 255
          }).to(0.1, {
            scale: new Vec3(1.1, 1.1)
          }).start();
        }
        /**隐藏火圈 */;
        _proto.hideRedMod = function hideRedMod() {
          if (this.fireNode) {
            this.playMomfireBoom();
          }
        }
        /**母龙火焰爆开 */;
        _proto.playMomfireBoom = function playMomfireBoom() {
          var _this3 = this;
          var fireBoomAni = instantiate(this.momfireBoomPb).getComponent(Animation);
          fireBoomAni.node.parent = this.node;
          fireBoomAni.on("finished", function () {
            if (_this3.symbolId != ESYMBOLID.wild) _this3.symbolId = dragonhatch.nextRoundData.handCards[0];
            fireBoomAni.node.parent = null;
            if (_this3.fireNode) {
              tween(_this3.fireNode).to(0.5, {
                opacity: 0
              }).call(function () {
                _this3.fireNode.parent = null;
                _this3.fireNode = null;
              }).start();
            }
          });
          fireBoomAni.play();
        }

        /**滚动停止调用 播放wild出场动画*/;
        _proto.wildSpawn = function wildSpawn() {
          if (this.symbolId != ESYMBOLID.wild) return;
          dragonhatch.main.audio.playSpawnWild();
          this.showType = ESHOWTYPE.ske;
          this.playAni(EROLEANI.spawn, false);
          this.addAni(EROLEANI.idle, true);
        };
        _proto.playWin = function playWin(coin) {
          this.showType = ESHOWTYPE.ske;
          this.playAni(EROLEANI.win, false);
          if (this.symbolId != ESYMBOLID.wild) {
            this.addAni(EROLEANI.idle, true);
          } else {
            this.addAni(EROLEANI.winidle, true);
          }
          if (coin) {
            var winCoinLab = instantiate(this.winCoinPb).getComponent(Label);
            this.winCoin = winCoinLab.node;
            this.winCoin.parent = this.node;
            winCoinLab.string = Num.exchangeToThousands(dragonhatch.exchangeRate, coin);
            dragonhatch.winCoinNodes.push(this.winCoin);
          }
        }

        /**中奖退场 */;
        _proto.playExit = function playExit() {
          this.playAni(EROLEANI.exit, false);
        };
        _proto.unuse = function unuse() {
          _baseSymbol.prototype.unuse.call(this);
          if (this.lines) {
            this.lines.destroy();
            this.lines = undefined;
          }
        };
        /**
         * 显示边框
         * nums:上右下左是否有相连symbol
         *  */
        _proto.showLines = function showLines(nums) {
          var _this4 = this;
          if (nums === void 0) {
            nums = [0, 0, 0, 0];
          }
          this.lines = instantiate(this.linesPb).getComponent(dragonhatchLine);
          this.lines.node.parent = this.node;
          this.lines.symbolId = this.symbolId;
          this.lines.setLinesActive(nums);
          this.scheduleOnce(function () {
            _this4.scheduleOnce(_this4.playRadom, 0.1);
          }, 0.5);
        }

        /**随机变化 */;
        _proto.playRadom = function playRadom() {
          this.schedule(this.doRadom, 0.1, macro.REPEAT_FOREVER);
        }

        /**随机变化停止 */;
        _proto.stopRadom = function stopRadom(aimId) {
          this.unschedule(this.doRadom);
          this.symbolId = aimId;
          if (this.lines) {
            this.lines.node.destroy();
            this.lines = undefined;
          }
        };
        _proto.doRadom = function doRadom() {
          this.symbolId = this.momModradomId();
        }

        /**随机高阶 */;
        _proto.momModradomId = function momModradomId() {
          var tempIds = [5, 6, 7, 8, 9];
          var index = Math.floor(Math.random() * tempIds.length);
          if (index == tempIds.length) {
            index = tempIds.length - 1;
          }
          var id = tempIds[index];
          return id;
        };
        _proto.onClick = function onClick(e) {
          dragonhatch.main.addDetail(this);
        };
        return dragonHatchSymbol;
      }(baseSymbol), _class3.removeCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "linesPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waterEffectPb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fireEffectPb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "momfireBoomPb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winCoinPb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ESYMBOLID = exports('ESYMBOLID', /*#__PURE__*/function (ESYMBOLID) {
        ESYMBOLID[ESYMBOLID["null"] = 0] = "null";
        ESYMBOLID[ESYMBOLID["diamond"] = 1] = "diamond";
        ESYMBOLID[ESYMBOLID["club"] = 2] = "club";
        ESYMBOLID[ESYMBOLID["heart"] = 3] = "heart";
        ESYMBOLID[ESYMBOLID["spade"] = 4] = "spade";
        ESYMBOLID[ESYMBOLID["green"] = 5] = "green";
        ESYMBOLID[ESYMBOLID["blue"] = 6] = "blue";
        ESYMBOLID[ESYMBOLID["red"] = 7] = "red";
        ESYMBOLID[ESYMBOLID["mom"] = 8] = "mom";
        ESYMBOLID[ESYMBOLID["wild"] = 9] = "wild";
        return ESYMBOLID;
      }({}));
      var EROLEANI = exports('EROLEANI', /*#__PURE__*/function (EROLEANI) {
        EROLEANI["win"] = "win";
        EROLEANI["idle"] = "idle";
        EROLEANI["exit"] = "exit";
        EROLEANI["crack1"] = "crack01";
        EROLEANI["crack2"] = "crack02";
        EROLEANI["featureexit"] = "feature_exit";
        EROLEANI["spawn"] = "spawn";
        EROLEANI["winidle"] = "win_idle";
        return EROLEANI;
      }({})); //wild 中奖状态待机
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragonhatchWaterEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragonhatch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, tween, Component, dragonhatch;
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
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7d33cRzKP5AY5NIsT1zbCIA", "dragonhatchWaterEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonhatchWaterEffect = exports('dragonhatchWaterEffect', (_dec = ccclass('dragonhatchWaterEffect'), _dec2 = property({
        type: Animation,
        tooltip: "爆炸效果"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonhatchWaterEffect, _Component);
        function dragonhatchWaterEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boomAni", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = dragonhatchWaterEffect.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.boomAni.on("finished", this.remove, this);
        };
        _proto.playBoom = function playBoom() {
          this.boomAni.play();
        };
        _proto.closeTween = function closeTween() {
          tween(this.node).to(0.5, {
            opacity: 0
          }).call(this.remove, this).start();
        };
        _proto.remove = function remove() {
          this.node.parent = null;
          dragonhatch.main.playBlueModEnd();
        };
        return dragonhatchWaterEffect;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "boomAni", [_dec2], {
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

System.register("chunks:///_virtual/infoBoard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragonhatch.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Animation, tween, Vec3, find, Label, Component, dragonhatch, Num;
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
      Animation = module.Animation;
      tween = module.tween;
      Vec3 = module.Vec3;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "5676c/+5BtGWJSWZT9frF7C", "infoBoard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var infoBoard = exports('infoBoard', (_dec = ccclass('infoBoard'), _dec2 = property({
        type: Node,
        tooltip: "消息"
      }), _dec3 = property({
        type: Node,
        tooltip: "中奖金额"
      }), _dec4 = property({
        type: Animation,
        tooltip: ""
      }), _dec5 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(infoBoard, _Component);
        function infoBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "infos", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "redLightAni", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "redLight", _descriptor4, _assertThisInitialized(_this));
          _this.initY = 0;
          _this._winLev = EWinLev.a;
          _this._state = EState.info;
          return _this;
        }
        var _proto = infoBoard.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.vibrate = function vibrate() {
          tween(this.node).to(0.1, {
            y: this.initY - 10
          }).to(0.1, {
            y: this.initY + 10
          }).to(0.1, {
            y: this.initY
          }).start();
        };
        _proto.start = function start() {
          var _this2 = this;
          dragonhatch.infoBoard = this;
          this.redLightAni.on("finished", function () {
            _this2.redLight.active = false;
          });
          this.winLev = EWinLev.a;
          this.state = EState.info;
          this.initY = this.node.y;
        };
        /**显示赢得金币 */
        _proto.playWinAni = function playWinAni(coin, t, twBn) {
          if (t === void 0) {
            t = 0;
          }
          if (twBn === void 0) {
            twBn = false;
          }
          this.state = EState.win;
          this.win.getChildByName("info_win").active = !twBn;
          this.win.getChildByName("info_tw").active = twBn;
          var str = Num.exchangeToThousands(dragonhatch.exchangeRate, coin);
          this.lab.string = str;
          tween(this.win).to(t / 2, {
            scale: new Vec3(1.2, 1.2)
          }).to(t / 2, {
            scale: new Vec3(1, 1)
          }).start();
          this.redLight.active = true;
          this.redLightAni.play();
        }

        /**显示消息 */;
        _proto.showInfo = function showInfo() {
          this.state = EState.info;
        };
        /**获奖金额对应不同背景板 */
        _proto.bindLev = function bindLev(coin) {
          if (coin > dragonhatch.betSum * 3 && coin < dragonhatch.betSum * 5) {
            this.winLev = EWinLev.b;
          } else if (coin >= dragonhatch.betSum * 5) {
            this.winLev = EWinLev.c;
          } else {
            this.winLev = EWinLev.a;
          }
        };
        _createClass(infoBoard, [{
          key: "lab",
          get: function get() {
            return find("Label", this.win).getComponent(Label);
          }
        }, {
          key: "curWin",
          get: function get() {
            return find("info_win", this.win);
          }
        }, {
          key: "twWin",
          get: function get() {
            return find("info_tw", this.win);
          }
        }, {
          key: "winLev",
          get: function get() {
            return this._winLev;
          },
          set: function set(v) {
            this._winLev = v;
            find("bga", this.node).active = v == EWinLev.a;
            find("bgb", this.node).active = v == EWinLev.b;
            find("bgc", this.node).active = v == EWinLev.c;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(v) {
            this._state = v;
            this.infos.active = v == EState.info;
            this.win.active = v == EState.win;
            if (this.win.active == false) {
              this.lab.string = "0";
            }
          }
        }]);
        return infoBoard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "infos", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "redLightAni", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "redLight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var EWinLev = exports('EWinLev', /*#__PURE__*/function (EWinLev) {
        EWinLev[EWinLev["a"] = 0] = "a";
        EWinLev[EWinLev["b"] = 1] = "b";
        EWinLev[EWinLev["c"] = 2] = "c";
        return EWinLev;
      }({}));
      var EState = exports('EState', /*#__PURE__*/function (EState) {
        EState[EState["info"] = 0] = "info";
        EState[EState["win"] = 1] = "win";
        return EState;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cDragonhatch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, Num, dragonhatch;
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
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4b4b2+HukVDgq4MGktXhBp1", "lastmoneyPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var lastmoneyPanel = exports('lastmoneyPanel', (_dec = ccclass('lastmoneyPanel'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec3 = property({
        type: Label,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(lastmoneyPanel, _Component);
        function lastmoneyPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserCoin", _descriptor2, _assertThisInitialized(_this));
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = lastmoneyPanel.prototype;
        _proto.init = function init() {
          dragonhatch.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(dragonhatch.exchangeRate, dragonhatch.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // dragonhatch.main.audio.playclickopen();
          this.node.parent.children[0].active = true;
          this.node.active = true;
          this.showPos = this.panel.h / 2;
          this.hidePos = -this.panel.h / 2;
          this.panel.y = this.hidePos;
          tween(this.panel).to(0.2, {
            y: this.showPos
          }).start();
          tween(this.node).delay(0.2).call(function () {
            tween(_this2.panel.children[0]).to(0.2, {
              opacity: 255
            }).start();
          }).start();
        };
        _proto.hidePanel = function hidePanel() {
          var _this3 = this;
          tween(this.panel).to(0.2, {
            y: this.hidePos
          }).call(function () {
            _this3.node.parent.children[0].active = false;
            _this3.node.active = false;
          }).start();
        };
        _proto.onClose = function onClose() {
          // dragonhatch.main.audio.playclickclose();
          this.hidePanel();
        };
        return lastmoneyPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblUserCoin", [_dec3], {
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

System.register("chunks:///_virtual/module_slots_dragonhatch", ['./SlotsDragonhatchGameMgr.ts', './autoPanel2.ts', './betNum3.ts', './betPanel3.ts', './cDragonhatch.ts', './coinParticle.ts', './dataChange2.ts', './dragonHatchSymbol.ts', './dragonhatchAudio.ts', './dragonhatchBigwin.ts', './dragonhatchDetail.ts', './dragonhatchHatch.ts', './dragonhatchLine.ts', './dragonhatchMain.ts', './dragonhatchProgress.ts', './dragonhatchReel.ts', './dragonhatchSlotCtrl.ts', './dragonhatchWaterEffect.ts', './infoBoard.ts', './lastmoneyPanel3.ts', './motherDragon.ts', './motherDragonTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/motherDragon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragonhatch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, sp, macro, Component, dragonhatch;
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
      sp = module.sp;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "69f94RInBNDhZWwLhgVzS7j", "motherDragon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var motherDragon = exports('motherDragon', (_dec = ccclass('motherDragon'), _dec2 = property({
        type: sp.Skeleton,
        tooltip: ""
      }), _dec3 = property({
        type: sp.Skeleton,
        tooltip: "身体"
      }), _dec4 = property({
        type: sp.Skeleton,
        tooltip: "爪子"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(motherDragon, _Component);
        function motherDragon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sleep", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "body", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "claw", _descriptor3, _assertThisInitialized(_this));
          _this._state = ESTATE.sleepIdle;
          /**龙母是否处于睡眠状态 */
          _this._sleepBn = true;
          return _this;
        }
        var _proto = motherDragon.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.addListener();
          this.state = ESTATE.sleepIdle;
          dragonhatch.motherDragon = this;
        };
        _proto.init = function init() {
          if (this.state == ESTATE.collectIdle) this.state = ESTATE.collectOut;
        }

        /**动画监听 */;
        _proto.addListener = function addListener() {
          var _this2 = this;
          this.sleep.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case ESLEEP.collectActivate:
                _this2.state = ESTATE.collectIdle;
                break;
              case ESLEEP.collectExit:
                _this2.state = ESTATE.sleepIdle;
                break;
              case ESLEEP.collectToFeature:
                _this2.sleepBn = false;
                _this2.playAwakeAni(EAWAKE.featureActivate, false);
                break;
            }
          });
          this.body.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case EAWAKE.featureActivate:
              case EAWAKE.stomp:
              case EAWAKE.breathFire:
                if (event.animation.name == EAWAKE.featureActivate) {
                  _this2.scheduleOnce(function () {
                    //触发母龙
                    dragonhatch.main.playMomMod();
                  }, 0.5);
                }
                _this2.state = ESTATE.awakeIdle;
                break;
              case EAWAKE.bigwinPre:
                _this2.state = ESTATE.bigwinIdle;
                break;
              case EAWAKE.bigwinIdle:
                _this2.state = ESTATE.bigwinExit;
                break;
              case EAWAKE.bigwinExit:
                _this2.state = ESTATE.awakeIdle;
                dragonhatch.main.settlement();
                break;
            }
          });
        };
        /**随机待机动画 */
        _proto.radomSleepIdle = function radomSleepIdle() {
          var id = Math.ceil(Math.random() * 5);
          if (id == 0) id = 1;
          if (id == 1) {
            this.playSleepAni(ESLEEP.idle);
          } else {
            dragonhatch.main.audio.playMomSleepIdle(id);
            this.playSleepAni(ESLEEP.idle + id);
          }
        }

        /**随机待机动画 */;
        _proto.radomAwakeIdle = function radomAwakeIdle() {
          var id = Math.ceil(Math.random() * 6);
          if (id == 0) id = 1;
          if (id == 1) {
            this.playAwakeAni(EAWAKE.idle);
          } else {
            this.playAwakeAni(EAWAKE.idle + id);
          }
        };
        /**睡眠动画 */
        _proto.playSleepAni = function playSleepAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          this.sleep.setAnimation(0, aimStr, loopBn);
        }

        /**苏醒动画 */;
        _proto.playAwakeAni = function playAwakeAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          this.body.setAnimation(0, aimStr, loopBn);
          this.claw.setAnimation(0, aimStr, loopBn);
        };
        _createClass(motherDragon, [{
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(v) {
            if (v != ESTATE.sleepIdle && this._state == ESTATE.sleepIdle) {
              this.unschedule(this.radomSleepIdle);
            }
            if (v != ESTATE.awakeIdle && this._state == ESTATE.awakeIdle) {
              this.unschedule(this.radomAwakeIdle);
            }
            if (v == ESTATE.sleepIdle && this.sleepBn == false) {
              dragonhatch.main.bigFire.play();
            }
            this._state = v;
            this.sleepBn = v <= ESTATE.awakeIn;
            if (dragonhatch.main.progress) dragonhatch.main.progress.node.active = this.sleepBn;
            if (v == ESTATE.awakeIn) dragonhatch.main.progress.node.active = false;
            switch (v) {
              case ESTATE.sleepIdle:
                this.radomSleepIdle();
                this.schedule(this.radomSleepIdle, 8, macro.REPEAT_FOREVER);
                break;
              case ESTATE.collectIn:
                this.playSleepAni(ESLEEP.collectActivate, false);
                break;
              case ESTATE.collectIdle:
                dragonhatch.main.audio.playMomAwakeLoop();
                this.playSleepAni(ESLEEP.collectIdle);
                break;
              case ESTATE.collectOut:
                dragonhatch.main.audio.playMomAwakeOut();
                this.playSleepAni(ESLEEP.collectExit, false);
                break;
              case ESTATE.awakeIdle:
                this.radomAwakeIdle();
                this.schedule(this.radomAwakeIdle, 8, macro.REPEAT_FOREVER);
                break;
              case ESTATE.awakeIn:
                dragonhatch.main.audio.playMomAwake();
                this.playSleepAni(ESLEEP.collectToFeature, false);
                break;
              case ESTATE.stomp:
                dragonhatch.main.audio.playMomStomp();
                this.playAwakeAni(EAWAKE.stomp, false);
                this.scheduleOnce(function () {
                  dragonhatch.infoBoard.vibrate();
                }, 0.4);
                break;
              case ESTATE.breathFire:
                dragonhatch.main.audio.playMomBreathFire();
                this.playAwakeAni(EAWAKE.breathFire, false);
                break;
              case ESTATE.bigwinPre:
                this.playAwakeAni(EAWAKE.bigwinPre, false);
                break;
              case ESTATE.bigwinIdle:
                this.playAwakeAni(EAWAKE.bigwinIdle, false);
                break;
              case ESTATE.bigwinExit:
                this.playAwakeAni(EAWAKE.bigwinExit, false);
                break;
            }
          }
        }, {
          key: "sleepBn",
          get: function get() {
            return this._sleepBn;
          },
          set: function set(v) {
            this._sleepBn = v;
            this.sleep.node.active = v;
            this.body.node.active = !v;
            this.claw.node.active = !v;
          }
        }]);
        return motherDragon;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sleep", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "body", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "claw", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ESLEEP = exports('ESLEEP', /*#__PURE__*/function (ESLEEP) {
        ESLEEP["collectActivate"] = "collect_activate";
        ESLEEP["collectExit"] = "collect_exit";
        ESLEEP["collectIdle"] = "collect_idle";
        ESLEEP["collectToFeature"] = "collect_to_feature";
        ESLEEP["idle"] = "idle";
        ESLEEP["idle2"] = "idle2";
        ESLEEP["idle3"] = "idle3";
        ESLEEP["idle4"] = "idle4";
        ESLEEP["idle5"] = "idle5";
        return ESLEEP;
      }({})); //待机
      var EAWAKE = exports('EAWAKE', /*#__PURE__*/function (EAWAKE) {
        EAWAKE["bigwinExit"] = "bigwin_exit";
        EAWAKE["bigwinIdle"] = "bigwin_idle";
        EAWAKE["bigwinPre"] = "bigwin_pre";
        EAWAKE["breathFire"] = "breath_fire";
        EAWAKE["featureActivate"] = "feature_activate";
        EAWAKE["idle"] = "idle";
        EAWAKE["idle2"] = "idle2";
        EAWAKE["idle3"] = "idle3";
        EAWAKE["idle4"] = "idle4";
        EAWAKE["idle5"] = "idle5";
        EAWAKE["idle6"] = "idle6";
        EAWAKE["stomp"] = "stomp";
        return EAWAKE;
      }({})); //砸
      var ESTATE = exports('ESTATE', /*#__PURE__*/function (ESTATE) {
        ESTATE[ESTATE["sleepIdle"] = 0] = "sleepIdle";
        ESTATE[ESTATE["collectIn"] = 1] = "collectIn";
        ESTATE[ESTATE["collectIdle"] = 2] = "collectIdle";
        ESTATE[ESTATE["collectOut"] = 3] = "collectOut";
        ESTATE[ESTATE["awakeIn"] = 4] = "awakeIn";
        ESTATE[ESTATE["awakeIdle"] = 5] = "awakeIdle";
        ESTATE[ESTATE["stomp"] = 6] = "stomp";
        ESTATE[ESTATE["breathFire"] = 7] = "breathFire";
        ESTATE[ESTATE["bigwinPre"] = 8] = "bigwinPre";
        ESTATE[ESTATE["bigwinIdle"] = 9] = "bigwinIdle";
        ESTATE[ESTATE["bigwinExit"] = 10] = "bigwinExit";
        return ESTATE;
      }({})); //大奖关闭
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/motherDragonTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragonhatch.ts', './motherDragon.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, tween, Component, dragonhatch, ESTATE;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      dragonhatch = module.dragonhatch;
    }, function (module) {
      ESTATE = module.ESTATE;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "23204uQ+1JJaK5RXayovj2w", "motherDragonTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var motherDragonTip = exports('motherDragonTip', (_dec = ccclass('motherDragonTip'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(motherDragonTip, _Component);
        function motherDragonTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._showBn = false;
          return _this;
        }
        var _proto = motherDragonTip.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.node.active = false;
          dragonhatch.motherDragonTip = this;
        };
        _createClass(motherDragonTip, [{
          key: "showBn",
          get: function get() {
            return this._showBn;
          },
          set: function set(v) {
            var _this2 = this;
            if (this._showBn == v) return;
            this._showBn = v;
            this.node.active = v;
            this.node.opacity = !v ? 255 : 0;
            tween(this.node).to(1, {
              opacity: v ? 255 : 0
            }).call(function () {
              if (v) {
                _this2.scheduleOnce(function () {
                  _this2.showBn = false;
                }, 4);
              } else {
                dragonhatch.motherDragon.state = ESTATE.awakeIn;
                dragonhatch.main.audio.playMomAwakeTip();
              }
            }).start();
          }
        }]);
        return motherDragonTip;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsDragonhatchGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, GameMgr, SubGameMgr, SubGameDef, RoomMgr, ModuleDef, ResourceMgr, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "f6d36jjjSNFQoRqTo8LaYPZ", "SlotsDragonhatchGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsDragonhatchGameMgr = exports('SlotsDragonhatchGameMgr', (_dec = ccclass('SlotsDragonhatchGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsDragonhatchGameMgr, _GameMgr);
        function SlotsDragonhatchGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_DRAGONHATCH;
          _this.mainName = "dragonhatchMain";
          _this._gameType = SubGameDef.SLOTS_DRAGONHATCH;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_dragonhatch',
            bundle: ModuleDef.SLOTS_DRAGONHATCH
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsDragonhatchGameMgr.prototype;
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {};
        _proto.initSoloMode = function initSoloMode() {
          RoomMgr.inst.reset();
          this.reset();
          SubGameMgr.gameMgr = this;
        }

        /**
            * 加载资源
            */;
        _proto.preLoadRes = /*#__PURE__*/
        function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(porcessFun) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.preLoad(function () {
                      resolve(true);
                    }, porcessFun);
                    return true;
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function preLoadRes(_x) {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }();
        _proto.preLoad = /*#__PURE__*/function () {
          var _preLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(callback, porcessFun) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.nowIndex = 0;
                  this._porcessFun = porcessFun;
                  if (porcessFun) porcessFun(this.nowIndex / this.totalNum);
                  _context2.next = 5;
                  return this.preLoadMain();
                case 5:
                  //1
                  this.finishOneItemLoad();
                  _context2.next = 8;
                  return this.preLoadLanguage();
                case 8:
                  //2
                  this.finishOneItemLoad();
                  callback();
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function preLoad(_x2, _x3) {
            return _preLoad.apply(this, arguments);
          }
          return preLoad;
        }() /**加载主场景预制体 */;
        _proto.preLoadMain = function preLoadMain() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var url = "prefab/" + _this3.mainName;
            ResourceMgr.inst.loadResByModuleBundle(_this3.modName, url, Prefab, function (error, loadedResource) {
              if (error) {
                Logger.error('载入Prefab失败, 原因:' + url);
                return;
              }
              if (!(loadedResource instanceof Prefab)) {
                Logger.error(_this3, '你载入的不是Prefab, 你做了什么事?');
                return;
              }
              resolve();
            });
          });
        }
        /**加载语言包 */;
        _proto.preLoadLanguage = function preLoadLanguage() {
          return new Promise(function (resolve, reject) {
            resolve();
          });
        };
        _proto.finishOneItemLoad = function finishOneItemLoad() {
          this.nowIndex++;
          if (this._porcessFun) {
            this._porcessFun(this.nowIndex / this.totalNum, Math.floor(this.nowIndex / this.totalNum * 100) + "%");
          }
        };
        _createClass(SlotsDragonhatchGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsDragonhatchGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsDragonhatchGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsDragonhatchGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_dragonhatch', 'chunks:///_virtual/module_slots_dragonhatch'); 
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