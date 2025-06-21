System.register("chunks:///_virtual/autoPanel4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cIceAndFire.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, Num, iceAndFire;
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
      iceAndFire = module.iceAndFire;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "c66fddILixFQoLYG0IybWtd", "autoPanel", undefined);
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
          iceAndFire.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.money);
          this.lblCurBet.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.betSum);
          this.winCoin_lab.string = iceAndFire.slotCtrl.winLab.string;
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
            iceAndFire.main.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // iceAndFire.main.audio.playclickopen();
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
          // iceAndFire.main.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "503d9ukm9tBc5CpVnUgbqyJ", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './betNum5.ts', './cIceAndFire.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, Num, betNum, iceAndFire;
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
      iceAndFire = module.iceAndFire;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "4419cf7gsRDMbcAHjhXvvzj", "betPanel", undefined);
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
          iceAndFire.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = iceAndFire.BETNUM;
          this.betList = iceAndFire.BET;
          this.line = iceAndFire.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.money);
          this.lblCurBet.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.betSum);
          this.winCoin_lab.string = iceAndFire.slotCtrl.winLab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(iceAndFire.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(iceAndFire.exchangeRate, sumList[_i3]);
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
          iceAndFire.betNum = this.tempi;
          iceAndFire.bet = this.tempj;
          iceAndFire.sumIdx = this.tempindex;
          iceAndFire.betSum = this.sumList[iceAndFire.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.betSum);
          iceAndFire.slotCtrl.betLab.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(iceAndFire.sumIdx);
          this.val3 = iceAndFire.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // iceAndFire.main.audio.playclickopen();
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
          // iceAndFire.main.audio.playclickclose();
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

System.register("chunks:///_virtual/cIceAndFire.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange4.ts'], function (exports) {
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
      cclegacy._RF.push({}, "1404cUArINHLLZaBaOXMiwo", "cIceAndFire", undefined);
      var cIceAndFire = /*#__PURE__*/function () {
        function cIceAndFire() {
          this.moneyTween = void 0;
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this.isWinning = false;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          this.audio = null;
          this.main = null;
          this.bg = null;
          this.slotCtrl = null;
          this.detail = null;
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
          /**摇奖计数 */
          this.rollIndex = 0;
          this._rollEnable = true;
          /**信息栏*/
          this.infoBoard = null;
          this.normalReel = null;
          this.topReel = null;
          this.downReel = null;
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
          this._roundIndex = void 0;
        }
        var _proto = cIceAndFire.prototype;
        _proto.clear = function clear() {
          var _this$normalReel, _this$topReel, _this$downReel;
          (_this$normalReel = this.normalReel) == null || _this$normalReel.clear();
          (_this$topReel = this.topReel) == null || _this$topReel.clear();
          (_this$downReel = this.downReel) == null || _this$downReel.clear();
          this.rollEnable = true;
          this.status = ESTATE.stop;
          this.slotCtrl = undefined;
          this.infoBoard = undefined;
          this.normalReel = undefined;
          this.topReel = undefined;
          this.downReel = undefined;
          this.detail = undefined;
        };
        _createClass(cIceAndFire, [{
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
          key: "roundIndex",
          get: function get() {
            return this._roundIndex;
          },
          set: function set(v) {
            this._roundIndex = v;
          }
        }, {
          key: "roundData",
          get: function get() {
            return this.lotteryRes.rounds[this.roundIndex];
          }
        }, {
          key: "roundWin",
          get: function get() {
            var num = 0;
            if (!this.roundData) return 0;
            var arr = this.roundData.reelInfo;
            for (var i = 0; i < arr.length; i++) {
              num += arr[i].payout;
            }
            return num;
          }
        }, {
          key: "freeBn",
          get: function get() {
            return this.lotteryRes.rounds.length > 1;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cIceAndFire();
            }
            return this._instance;
          }
        }]);
        return cIceAndFire;
      }();
      cIceAndFire._instance = null;
      var iceAndFire = exports('iceAndFire', cIceAndFire.instance);
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

System.register("chunks:///_virtual/dataChange4.ts", ['cc', './Logger.ts', './iceAndFireSymbol.ts'], function (exports) {
  var cclegacy, Logger, ESYMBOLID;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5a4b4AuMnVJ2ZZYaaBNvssj", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.userscore = Number(data.coins);
          res.winscore = Number(data.payout);
          res.rounds = [];
          var results = data.results;
          for (var i = 0; i < results.length; i++) {
            if (i % 2 == 0 && i != 0) continue;
            var cur = results[i];
            var next = i + 1 < results.length ? results[i + 1] : undefined;
            var temp = {};
            res.rounds.push(temp);
            temp.leftFreeCount = cur.leftFreeCount;
            temp.reelInfo = [];
            temp.reelInfo.push(this.reelInfoChange(cur.rounds[0], i != 0));
            if (i % 2 == 1) {
              if (!next) Logger.error("server data error");
              temp.reelInfo.push(this.reelInfoChange(next.rounds[0], true));
            }
          }
          console.log(res);
          return res;
        };
        dataChange.reelInfoChange = function reelInfoChange(info, freeBn) {
          var res = {};
          res.symbols = this.symbolsChange(info.symbols, freeBn);
          res.removeItems = this.removeChange(info.paySymbols, freeBn);
          res.freeCount = info.freeCount;
          res.multiplier = 1;
          if (info.multipliers && info.multipliers.length > 0) {
            for (var i = 0; i < info.multipliers.length; i++) {
              res.multiplier *= info.multipliers[i];
            }
          }
          res.payout = Number(info.payout);
          return res;
        };
        dataChange.symbolsChange = function symbolsChange(symbols, freeBn) {
          var res = [];
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var id = this.transformId(symbol.id);
            if (id != 0) {
              var index = this.posToIndex(symbol.coordinate, freeBn);
              res[index] = id;
            }
          }
          return res;
        };
        dataChange.removeChange = function removeChange(paySymbols, freeBn) {
          var res = [];
          var allIndexs = [];
          for (var j = 0; j < paySymbols.length; j++) {
            var paySymbol = paySymbols[j];
            var temp = {};
            res.push(temp);
            temp.winCoin = Number(paySymbol.payout);
            temp.indexs = [];
            for (var k = 0; k < paySymbol.points.length; k++) {
              var point = paySymbol.points[k];
              var index = this.posToIndex(point, freeBn);
              temp.indexs.push(index);
            }
            allIndexs = [].concat(allIndexs, temp.indexs);
          }
          var all = {};
          all.winCoin = 0;
          all.indexs = Array.from(new Set(allIndexs));
          res.unshift(all);
          return res;
        }

        //例子，左下角1,1开始，收到服务器数据
        // [4,1    4,2    4,3   4,4   4,5      4,6]        [4,1    4,2    4,3    4,4    4,5    4,6      4,7]                        
        // [3,1    3,2    3,3   3,4   3,5      3,6]        [3,1    3,2    3,3    3,4    3,5    3,6      3,7]                         
        // [empty  2,2    2,3   2,4   2,5    empty]        [empty  2,2    2,3    2,4    2,5    2,6    empty]    
        // [empty  empty  1,3   1,4   empty  empty]        [empty  empty  1,3    1,4    1,5    empty  empty]                          
        ;

        dataChange.posToIndex = function posToIndex(pos, freeBn) {
          if (freeBn === void 0) {
            freeBn = false;
          }
          var numArr = [2, 3, 4, 4, 3, 2];
          if (freeBn) {
            numArr = [2, 3, 4, 4, 4, 3, 2];
          }
          var count = 0;
          for (var i = 0; i < pos.reel - 1; i++) {
            count += numArr[i];
          }
          var temp = pos.row - (4 - numArr[pos.reel - 1]) - 1;
          // if (temp < 0) {
          //     Logger.error("PlaySlotCoordinate empty");
          // }
          var index = count + temp;
          return index;
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            diamond: ESYMBOLID.diamond,
            club: ESYMBOLID.club,
            heart: ESYMBOLID.heart,
            spade: ESYMBOLID.spade,
            clover: ESYMBOLID.clover,
            magnet: ESYMBOLID.horseShoe,
            jar: ESYMBOLID.coinjar,
            treasure_chest: ESYMBOLID.chest,
            scatter: ESYMBOLID.scatter,
            wildcard: ESYMBOLID.wild
          };
          return (_idMap$curid = idMap[curid]) != null ? _idMap$curid : 0;
        };
        return dataChange;
      }());

      //clientRes
      dataChange.BETNUM = [0.03, 0.1, 0.3, 0.9];
      //单注值
      dataChange.LINES = 10;
      //线数
      dataChange.BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fortuneEnd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cIceAndFire.ts', './iceAndFireBg.ts', './labNumShow.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Vec3, tween, Component, iceAndFire, EMOD, labNumShow;
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
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }, function (module) {
      EMOD = module.EMOD;
    }, function (module) {
      labNumShow = module.labNumShow;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "73ed3JuNptMJYOBYm8lZlKj", "fortuneEnd", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fortuneEnd = exports('fortuneEnd', (_dec = ccclass('fortuneEnd'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec3 = property({
        type: Node,
        tooltip: ""
      }), _dec4 = property({
        type: Label,
        tooltip: ""
      }), _dec5 = property({
        type: labNumShow,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fortuneEnd, _Component);
        function fortuneEnd() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "count", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNum", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = fortuneEnd.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.show = function show(count, coin) {
          var _this2 = this;
          this.content.scale = new Vec3(0, 0);
          tween(this.content).to(0.5, {
            scale: new Vec3(1, 1)
          }).start();
          this.btn.active = false;
          this.count.string = count + "";
          this.winNum.num = 0;
          tween(this.winNum).to(2, {
            num: coin * 100
          }).call(function () {
            tween(_this2.content).to(0.2, {
              scale: new Vec3(1.2, 1.2)
            }).to(0.2, {
              scale: new Vec3(1, 1)
            }).start();
            _this2.btn.active = true;
            tween(_this2.btn).to(0.2, {
              scale: new Vec3(1.2, 1.2)
            }).to(0.2, {
              scale: new Vec3(1, 1)
            }).start();
          }).start();
          this.scheduleOnce(this.remove, 5);
        };
        _proto.remove = function remove() {
          iceAndFire.main.playRollOver();
          iceAndFire.bg.mod = EMOD.N;
          this.node.destroy();
        };
        _proto.onClik = function onClik() {
          this.remove();
        };
        return fortuneEnd;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winNum", [_dec5], {
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

System.register("chunks:///_virtual/fortuneStart.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cIceAndFire.ts', './iceAndFireBg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Label, Component, iceAndFire, EMOD;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }, function (module) {
      EMOD = module.EMOD;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a5763oeJIZEM5Wgtx6S3Es6", "fortuneStart", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fortuneStart = exports('fortuneStart', (_dec = ccclass('fortuneStart'), _dec2 = property({
        type: Animation,
        tooltip: ""
      }), _dec3 = property({
        type: Label,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fortuneStart, _Component);
        function fortuneStart() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ani", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeLab", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = fortuneStart.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.show = function show() {
          var freeCount = iceAndFire.roundData.reelInfo[0].freeCount;
          this.freeLab.string = freeCount + '';
          iceAndFire.slotCtrl.lastNum = freeCount;
          iceAndFire.bg.mod = EMOD.F;
          this.ani.play();
          this.scheduleOnce(this.remove, 5);
        };
        _proto.remove = function remove() {
          iceAndFire.bg.cutScenes();
          this.node.destroy();
        };
        _proto.onClick = function onClick() {
          this.remove();
        };
        return fortuneStart;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ani", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "freeLab", [_dec3], {
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

System.register("chunks:///_virtual/iceAndFireAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "514f6Xh8IFIzaElOuT9AsEu", "iceAndFireAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var iceAndFireAudio = exports('iceAndFireAudio', (_dec = ccclass('iceAndFireAudio'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(iceAndFireAudio, _Component);
        function iceAndFireAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.urlArr = ["sound/bgm_mg", "sound/bgm_fs"];
          _this.bgmIndex = void 0;
          /**滚动结束 */
          _this.playReelEndBn = false;
          /**bigwin */
          _this.bigwinId = void 0;
          /**bigwin end */
          _this.bigwinEndId = void 0;
          /**totalwin end */
          _this.totalId = void 0;
          /**totalwin end */
          _this.totalEndId = void 0;
          return _this;
        }
        var _proto = iceAndFireAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.playBgm = function playBgm(index) {
          if (this.bgmIndex == index) return;
          this.bgmIndex = index;
          tgx.AudioMgr.inst.audio.stopMusic();
          tgx.AudioMgr.inst.audio.playMusicLoop(this.urlArr[index], ModuleDef.SLOTS_ICEANDFIRE);
        }

        /**滚动开始 */;
        _proto.playReelLoop = function playReelLoop() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinBtn, ModuleDef.SLOTS_ICEANDFIRE);
        };
        _proto.playReelEnd = function playReelEnd(isSpeed) {
          var _this2 = this;
          if (isSpeed === void 0) {
            isSpeed = false;
          }
          if (this.playReelEndBn) return;
          this.playReelEndBn = true;
          this.scheduleOnce(function () {
            _this2.playReelEndBn = false;
          }, 0.01);
          if (isSpeed) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelStopQuick, ModuleDef.SLOTS_ICEANDFIRE);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelStopNormal, ModuleDef.SLOTS_ICEANDFIRE);
          }
        }
        /**spawn wild */;
        _proto.playFly = function playFly() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeFlyToInfobar, ModuleDef.SLOTS_ICEANDFIRE);
        }
        /**spawn wild */;
        _proto.playSpawnWild = function playSpawnWild() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symWild, ModuleDef.SLOTS_ICEANDFIRE);
        }
        /**spawn Scatter */;
        _proto.playSpawnScatter = function playSpawnScatter() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symScatter, ModuleDef.SLOTS_ICEANDFIRE);
        };
        _proto.playBigwin = function playBigwin() {
          var _this3 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_ICEANDFIRE).then(function (value) {
            _this3.bigwinId = value;
          });
        };
        _proto.playBigwinEnd = function playBigwinEnd() {
          var _this4 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinId, EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_ICEANDFIRE);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_end, ModuleDef.SLOTS_ICEANDFIRE).then(function (value) {
            _this4.bigwinEndId = value;
          });
        };
        _proto.stopBigwinEnd = function stopBigwinEnd() {
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinEndId, EEFFECT.bgm_bigwin_end, ModuleDef.SLOTS_ICEANDFIRE);
        };
        _proto.playTotalwin = function playTotalwin() {
          var _this5 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_totalwin_main, ModuleDef.SLOTS_ICEANDFIRE).then(function (value) {
            _this5.totalId = value;
          });
        };
        _proto.playTotalwinEnd = function playTotalwinEnd() {
          var _this6 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.totalId, EEFFECT.bgm_totalwin_main, ModuleDef.SLOTS_ICEANDFIRE);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_totalwin_end, ModuleDef.SLOTS_ICEANDFIRE).then(function (value) {
            _this6.totalEndId = value;
          });
        };
        _proto.stopTotalwinEnd = function stopTotalwinEnd() {
          tgx.AudioMgr.inst.audio.stopEffect(this.totalEndId, EEFFECT.bgm_totalwin_end, ModuleDef.SLOTS_ICEANDFIRE);
        };
        return iceAndFireAudio;
      }(Component)) || _class));
      var EEFFECT = exports('EEFFECT', /*#__PURE__*/function (EEFFECT) {
        EEFFECT["fastspin"] = "sound/mainSfxGame_extract/fastspin";
        EEFFECT["fastspinScreenShakeLoop"] = "sound/mainSfxGame_extract/fastspinScreenShakeLoop";
        EEFFECT["prizeFlyToInfobar"] = "sound/sfxGame_extract/prizeFlyToInfobar";
        EEFFECT["prizeInfobarwinTotal"] = "sound/sfxGame_extract/prizeInfobarwinTotal";
        EEFFECT["spinBtn"] = "sound/sfxGame_extract/spinBtn";
        EEFFECT["reelStopNormal"] = "sound/sfxGame_extract/reelStopNormal";
        EEFFECT["reelStopQuick"] = "sound/sfxGame_extract/reelStopQuick";
        EEFFECT["symWild"] = "sound/sfxGame_extract/symWild";
        EEFFECT["symScatter"] = "sound/sfxGame_extract/symFs";
        EEFFECT["bgm_bigwin_main"] = "sound/bgm_bigwin_main";
        EEFFECT["bgm_bigwin_end"] = "sound/bgm_bigwin_end";
        EEFFECT["bgm_totalwin_main"] = "sound/bgm_totalwin_main";
        EEFFECT["bgm_totalwin_end"] = "sound/bgm_totalwin_end";
        return EEFFECT;
      }({})); //共赢得结束
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/iceAndFireBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cIceAndFire.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, find, Vec3, tween, macro, Animation, Label, Component, iceAndFire;
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
      Node = module.Node;
      find = module.find;
      Vec3 = module.Vec3;
      tween = module.tween;
      macro = module.macro;
      Animation = module.Animation;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "d289fbMNidFCpdjv9R8xs8f", "iceAndFireBg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var iceAndFireBg = exports('iceAndFireBg', (_dec = ccclass('iceAndFireBg'), _dec2 = property({
        type: Prefab,
        tooltip: ""
      }), _dec3 = property({
        type: Prefab,
        tooltip: ""
      }), _dec4 = property({
        type: Node,
        tooltip: "普通模式"
      }), _dec5 = property({
        type: Node,
        tooltip: "财富模式"
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec7 = property({
        type: Node,
        tooltip: ""
      }), _dec8 = property({
        type: Node,
        tooltip: ""
      }), _dec9 = property({
        type: Node,
        tooltip: ""
      }), _dec10 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(iceAndFireBg, _Component);
        function iceAndFireBg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinNumPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulNumPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normal", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fortune", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reelContent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reelTop", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reelDown", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "redLight", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bornEffect", _descriptor9, _assertThisInitialized(_this));
          /**当前模式 */
          _this._mod = void 0;
          _this.startY = 190;
          _this.topAimY = 396;
          _this.downAimY = -190;
          _this.barTopAimY = 640;
          _this.barDownAimY = -432;
          return _this;
        }
        var _proto = iceAndFireBg.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.mod = EMOD.N;
          iceAndFire.bg = this;
        };
        _proto.startRollEffect = function startRollEffect() {
          if (this.mod == EMOD.N) {
            this.light.play();
          }
        };
        /**普通模式到财富模式过场 */
        _proto.cutScenes = function cutScenes() {
          this.clearScene();
          this.scheduleOnce(this.doCutScenes, 0.5);
        };
        _proto.clearScene = function clearScene() {
          this.infoLoop.active = false;
          iceAndFire.infoBoard.node.active = false;
          this.reelTop.opacity = 0;
          this.reelDown.opacity = 0;
          this.reelContent.opacity = 255;
          find("boom", this.reelContent).active = true;
          this.redLight.scale = new Vec3(1, 3);
          find("bornFrame", this.reelDown).active = true;
          find("bornFrame", this.reelDown).active = true;
          find("frame", this.reelDown).active = false;
          find("frame", this.reelDown).active = false;
        };
        _proto.doCutScenes = function doCutScenes() {
          var _this2 = this;
          iceAndFire.infoBoard.node.active = true;
          iceAndFire.infoBoard.node.opacity = 0;
          this.waysBarTop.active = true;
          this.waysBarTop.opacity = 0;
          this.waysBarTop.y = iceAndFire.infoBoard.node.y;
          this.waysBarDown.active = true;
          this.waysBarDown.opacity = 0;
          this.waysBarDown.y = iceAndFire.infoBoard.node.y;
          iceAndFire.topReel.bornLoop();
          iceAndFire.downReel.bornLoop();
          tween(this.reelContent).to(0.6, {
            opacity: 0
          }).call(function () {
            find("boom", _this2.reelContent).active = false;
          }).start();
          this.reelTop.y = this.startY;
          this.reelDown.y = this.startY;
          tween(this.reelDown).to(0.6, {
            opacity: 255
          }).call(function () {
            find("bornTop", _this2.reelDown).active = true;
            find("bornDown", _this2.reelDown).active = true;
            find("bornTop", _this2.reelTop).active = true;
            _this2.reelTop.opacity = 255;
            tween(_this2.reelDown).to(2, {
              y: _this2.downAimY
            }).call(function () {
              _this2.bornEndAni.play();
            }).start();
            tween(_this2.reelTop).to(2, {
              y: _this2.topAimY
            }).start();
            _this2.waysBarTop.opacity = 255;
            _this2.waysBarTopLab.string = 2304 + "";
            _this2.waysBarDown.opacity = 255;
            _this2.waysBarDownLab.string = 576 + "";
            tween(_this2.waysBarDownLab).to(1, {
              string: 2304 + ""
            }).call(function () {
              tween(_this2.waysBarTop).to(1, {
                y: _this2.barTopAimY
              }).start();
              tween(_this2.waysBarDown).to(1, {
                y: _this2.barDownAimY
              }).start();
              tween(iceAndFire.infoBoard.node).to(1, {
                opacity: 255
              }).start();
            }).start();
          }).start();
          this.redLight.active = true;
          this.bornEffect.active = true;
          tween(this.redLight).to(0.4, {
            scale: new Vec3(6, 6)
          }).to(0.1, {
            opacity: 0
          }).call(function () {
            _this2.redLight.active = false;
            _this2.bornEffect.active = false;
            _this2.redLight.opacity = 200;
          }).start();
          this.scheduleOnce(function () {
            find("frame", _this2.reelDown).active = true;
            find("frame", _this2.reelDown).active = true;
            _this2.tweenHide(find("bornFrame", _this2.reelTop));
            _this2.tweenHide(find("bornFrame", _this2.reelDown));
            _this2.tweenHide(find("bornTop", _this2.reelDown));
            _this2.tweenHide(find("bornDown", _this2.reelDown));
            _this2.tweenHide(find("bornTop", _this2.reelTop));
            _this2.infoLoop.active = true;
            _this2.schedule(function () {
              _this2.infoLoop.children[0].active = !_this2.infoLoop.children[0].active;
              _this2.infoLoop.children[1].active = !_this2.infoLoop.children[1].active;
            }, 3, macro.REPEAT_FOREVER);
          }, 2.5);
          this.scheduleOnce(function () {
            iceAndFire.main.doNext();
          }, 4);
        };
        _proto.tweenHide = function tweenHide(node) {
          tween(node).to(0.5, {
            opacity: 0
          }).call(function () {
            node.active = false;
            node.opacity = 255;
          }).start();
        };
        _createClass(iceAndFireBg, [{
          key: "mod",
          get: function get() {
            return this._mod;
          },
          set: function set(v) {
            if (v == EMOD.N) this.unscheduleAllCallbacks();
            this._mod = v;
            if (v == EMOD.N) {
              iceAndFire.audio.playBgm(0);
            } else {
              iceAndFire.audio.playBgm(1);
            }
            this.normal.active = v == EMOD.N;
            this.fortune.active = v == EMOD.F;
            this.reelContent.opacity = v == EMOD.N ? 255 : 0;
            this.redLight.active = false;
            this.bornEffect.active = false;
            if (iceAndFire.slotCtrl && iceAndFire.slotCtrl.node) {
              iceAndFire.slotCtrl.rollPanel.active = v == EMOD.N;
              iceAndFire.slotCtrl.dataPanel.y = v == EMOD.N ? -396 : -632;
              iceAndFire.slotCtrl.free.active = v != EMOD.N;
            }
            if (iceAndFire.infoBoard) iceAndFire.infoBoard.mod = v;
          }
        }, {
          key: "light",
          get: function get() {
            return find("light", this.reelContent).getComponent(Animation);
          }
        }, {
          key: "waysBarTop",
          get: function get() {
            return find("waysBarTop", this.fortune);
          }
        }, {
          key: "waysBarDown",
          get: function get() {
            return find("waysBarDown", this.fortune);
          }
        }, {
          key: "waysBarTopLab",
          get: function get() {
            return find("Label", this.waysBarTop).getComponent(Label);
          }
        }, {
          key: "waysBarDownLab",
          get: function get() {
            return find("Label", this.waysBarDown).getComponent(Label);
          }
        }, {
          key: "bornEndAni",
          get: function get() {
            return find("bornEnd", this.fortune).getComponent(Animation);
          }
        }, {
          key: "infoLoop",
          get: function get() {
            return find("infoLoop", this.fortune);
          }
        }]);
        return iceAndFireBg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinNumPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mulNumPb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fortune", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "reelContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "reelTop", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "reelDown", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "redLight", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bornEffect", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var EMOD = exports('EMOD', /*#__PURE__*/function (EMOD) {
        EMOD[EMOD["N"] = 0] = "N";
        EMOD[EMOD["F"] = 1] = "F";
        return EMOD;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/iceAndFireBigwin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageSprite.ts', './labNumShow.ts', './cIceAndFire.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, tween, Tween, Vec3, Component, LanguageSprite, labNumShow, iceAndFire;
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
      tween = module.tween;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      LanguageSprite = module.LanguageSprite;
    }, function (module) {
      labNumShow = module.labNumShow;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6f508okv29G/JgRvR6a+C0a", "iceAndFireBigwin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var iceAndFireBigwin = exports('iceAndFireBigwin', (_dec = ccclass('iceAndFireBigwin'), _dec2 = property({
        type: labNumShow,
        tooltip: "coin"
      }), _dec3 = property({
        type: LanguageSprite,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(iceAndFireBigwin, _Component);
        function iceAndFireBigwin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinNum", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinBw", _descriptor2, _assertThisInitialized(_this));
          _this.config = [15, 35];
          _this._lev = 1;
          _this.aim = void 0;
          _this.playOverBn = false;
          return _this;
        }
        var _proto = iceAndFireBigwin.prototype;
        _proto.onLoad = function onLoad() {
          this.coinNum.setRealNum(0);
        };
        _proto.update = function update(dt) {
          var cur = this.coinNum.getRealNum();
          if (cur >= 15 && cur < 35) {
            this.lev = 2;
          } else if (cur >= 35) {
            this.lev = 3;
          }
        };
        _proto.playBigWin = function playBigWin(aim) {
          var _this2 = this;
          iceAndFire.audio.playBigwin();
          this.aim = aim;
          var t = 3;
          if (aim >= 15 && aim < 35) {
            t = 6;
          } else if (aim >= 35) {
            t = 9;
          }
          this.playOverBn = false;
          tween(this.coinNum).to(t, {
            num: aim * 100
          }).call(function () {
            iceAndFire.audio.playBigwinEnd();
            _this2.playOverBn = true;
            _this2.scheduleOnce(_this2.closeBigWin, 1);
          }).start();
        };
        /**点击响应 */
        _proto.onFastBigWin = function onFastBigWin(e) {
          if (this.playOverBn) {
            this.closeBigWin();
          } else {
            this.playCoinOver();
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          this.unschedule(this.closeBigWin);
          iceAndFire.audio.stopBigwinEnd();
          iceAndFire.main.closeBigWin();
          this.node.destroy();
        };
        _proto.playCoinOver = function playCoinOver() {
          Tween.stopAllByTarget(this.coinNum);
          this.coinNum.setRealNum(this.aim);
          iceAndFire.audio.playBigwinEnd();
          this.playOverBn = true;
          this.scheduleOnce(this.closeBigWin, 1);
        };
        _createClass(iceAndFireBigwin, [{
          key: "lev",
          get: function get() {
            return this._lev;
          },
          set: function set(v) {
            if (this._lev != v) {
              if (v == 2) {
                this.bigWinBw.dataID = "mw";
              } else if (v == 3) {
                this.bigWinBw.dataID = "smw";
              }
              tween(this.bigWinBw.node).to(0.5, {
                scale: new Vec3(1.2, 1.2)
              }).to(0.2, {
                scale: new Vec3(1, 1)
              }).start();
            }
            this._lev = v;
          }
        }]);
        return iceAndFireBigwin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bigWinBw", [_dec3], {
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

System.register("chunks:///_virtual/iceAndFireDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './cIceAndFire.ts', './iceAndFireSymbol.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, ESHOWTYPE, iceAndFire, iceAndFireSymbol, ESYMBOLID;
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
    }, function (module) {
      ESHOWTYPE = module.ESHOWTYPE;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }, function (module) {
      iceAndFireSymbol = module.iceAndFireSymbol;
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "f22f0LvUPJFhpQlfrssATdX", "iceAndFireDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [["5", "10", "20", "30", "40"], ["5", "10", "20", "30", "40"], ["6", "15", "30", "40", "50"], ["6", "15", "30", "40", "50"], ["20", "30", "40", "50", "80"], ["20", "40", "50", "80", "100"], ["30", "50", "60", "90", "150"], ["40", "60", "80", "100", "200"]];
      var iceAndFireDetail = exports('iceAndFireDetail', (_dec = ccclass('iceAndFireDetail'), _dec2 = property({
        type: Node,
        tooltip: "背景板"
      }), _dec3 = property({
        type: iceAndFireSymbol,
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
        _inheritsLoose(iceAndFireDetail, _Component);
        function iceAndFireDetail() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "symbol", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nums", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "specialNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = iceAndFireDetail.prototype;
        _proto.init = function init(symbol) {
          var _this2 = this;
          var symbolId = symbol.symbolId;
          var reelIndex = symbol.reelDate.index;
          var idx = symbolId - 1;
          this.symbol.onClick = function () {
            _this2.onClick();
          };
          this.symbol.symbolId = symbolId;
          this.symbol.showType = ESHOWTYPE.ske;
          this.symbol.winIdle();
          if (symbolId == ESYMBOLID.wild || symbolId == ESYMBOLID.scatter) {
            this.bg.children[0].active = true;
            this.numNode.active = false;
            this.specialNode.active = true;
            this.specialNode.children[0].active = symbolId == ESYMBOLID.scatter;
            this.specialNode.children[1].active = !this.specialNode.children[0].active;
          } else {
            this.bg.children[0].active = false;
            this.numNode.active = true;
            this.specialNode.active = false;
            var strs = GAME_COMBINATIONS[idx];
            for (var i = 0; i < strs.length; i++) {
              this.nums[i].string = strs[i];
            }
          }
          if (reelIndex <= 2) {
            this.bg.x = -78;
            this.bg.scale_x = 1;
            this.numNode.x = 94;
            this.specialNode.x = 200;
          } else {
            this.bg.x = 78;
            this.bg.scale_x = -1;
            this.numNode.x = -190;
            this.specialNode.x = -200;
          }
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
          var symbols = iceAndFire.normalReel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
          }
        };
        return iceAndFireDetail;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbol", [_dec3], {
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

System.register("chunks:///_virtual/iceAndFireFortuneReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './baseSymbol.ts', './cIceAndFire.ts', './iceAndFireReel.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodePool, Vec3, ETYPE, baseSymbol, iceAndFire, iceAndFireReel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      Vec3 = module.Vec3;
    }, function (module) {
      ETYPE = module.ETYPE;
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }, function (module) {
      iceAndFireReel = module.iceAndFireReel;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c7601T0W1ZNZJ2jz62YpdXM", "iceAndFireFortuneReel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var iceAndFireFortuneReel = exports('iceAndFireFortuneReel', (_dec = ccclass('iceAndFireFortuneReel'), _dec(_class = /*#__PURE__*/function (_iceAndFireReel) {
        _inheritsLoose(iceAndFireFortuneReel, _iceAndFireReel);
        function iceAndFireFortuneReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _iceAndFireReel.call.apply(_iceAndFireReel, [this].concat(args)) || this;
          _this.disTime = 0.1;
          return _this;
        }
        var _proto = iceAndFireFortuneReel.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.radomIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          this.setReelDate();
          // this.scheduleOnce(this.loop, 1);
        }

        /**设置滚轴排布数据 */;
        _proto.setReelDate = function setReelDate() {
          this.reelDates = [{
            index: 0,
            type: ETYPE.V,
            num: 2,
            pool: new NodePool(baseSymbol),
            size: 104.55,
            headPos: new Vec3(-313.65, -104.55),
            vector: 294.1,
            symbols: [],
            "switch": false
          }, {
            index: 1,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 104.55,
            headPos: new Vec3(-209.1, -156.825),
            vector: 398.65,
            symbols: [],
            "switch": false
          }, {
            index: 2,
            type: ETYPE.V,
            num: 4,
            pool: new NodePool(baseSymbol),
            size: 104.55,
            headPos: new Vec3(-104.55, -209.1),
            vector: 503.2,
            symbols: [],
            "switch": false
          }, {
            index: 3,
            type: ETYPE.V,
            num: 4,
            pool: new NodePool(baseSymbol),
            size: 104.55,
            headPos: new Vec3(0, -209.1),
            vector: 503.2,
            symbols: [],
            "switch": false
          }, {
            index: 4,
            type: ETYPE.V,
            num: 4,
            pool: new NodePool(baseSymbol),
            size: 104.55,
            headPos: new Vec3(104.55, -209.1),
            vector: 503.2,
            symbols: [],
            "switch": false
          }, {
            index: 5,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 104.55,
            headPos: new Vec3(209.1, -156.825),
            vector: 398.65,
            symbols: [],
            "switch": false
          }, {
            index: 6,
            type: ETYPE.V,
            num: 2,
            pool: new NodePool(baseSymbol),
            size: 104.55,
            headPos: new Vec3(313.65, -104.55),
            vector: 294.1,
            symbols: [],
            "switch": false
          }];
        };
        _proto.bornLoop = function bornLoop() {
          for (var i = 0; i < this.reelDates.length; i++) {
            this.moveOne(this.reelDates[i]);
          }
        };
        /**启动循环播放 */
        _proto.loop = function loop() {
          var _this2 = this;
          iceAndFire.audio.playReelLoop();
          if (iceAndFire.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          var disTime = iceAndFire.slotCtrl.isSpeed ? 0 : this.disTime;
          var _loop = function _loop(i) {
            _this2.scheduleOnce(function () {
              _this2.moveOne(_this2.reelDates[i]);
            }, disTime * i);
          };
          for (var i = 0; i < this.reelDates.length; i++) {
            _loop(i);
          }
        }

        /**停止循环展示结果 */;
        _proto.loopEnd = function loopEnd(arr, callback) {
          var _this3 = this;
          if (iceAndFire.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          if (iceAndFire.slotCtrl.isSpeed == false) {
            var _loop2 = function _loop2() {
              var r = _this3.reelDates[i];
              var disTime = _this3.disTime * i;
              _this3.scheduleOnce(function () {
                _this3.bindResultOne(r, arr, function () {
                  var cb = function cb() {
                    iceAndFire.main.rollCallBack();
                    iceAndFire.audio.playReelEnd(false);
                  };
                  _this3.rebound(r, false, cb);
                });
              }, disTime);
            };
            for (var i = 0; i < this.reelDates.length; i++) {
              _loop2();
            }
          } else {
            this.bindResult(arr, function () {
              iceAndFire.main.rollCallBack();
              iceAndFire.audio.playReelEnd(true);
            });
          }
        };
        return iceAndFireFortuneReel;
      }(iceAndFireReel)) || _class));
      var EREELTYPE = exports('EREELTYPE', /*#__PURE__*/function (EREELTYPE) {
        EREELTYPE[EREELTYPE["top"] = 0] = "top";
        EREELTYPE[EREELTYPE["down"] = 1] = "down";
        return EREELTYPE;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/iceAndFireInfoBoard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cIceAndFire.ts', './iceAndFireBg.ts', './lampUI.ts', './labNumShow.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, SpriteFrame, Node, tween, find, Component, iceAndFire, EMOD, lampUI, labNumShow;
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
      Node = module.Node;
      tween = module.tween;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }, function (module) {
      EMOD = module.EMOD;
    }, function (module) {
      lampUI = module.lampUI;
    }, function (module) {
      labNumShow = module.labNumShow;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b52577XSoNMS6ReEjSAOaDg", "iceAndFireInfoBoard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var iceAndFireInfoBoard = exports('iceAndFireInfoBoard', (_dec = ccclass('iceAndFireInfoBoard'), _dec2 = property({
        type: Sprite,
        tooltip: "背景"
      }), _dec3 = property({
        type: [SpriteFrame],
        tooltip: "普通模式背景"
      }), _dec4 = property({
        type: [SpriteFrame],
        tooltip: "财富模式背景"
      }), _dec5 = property({
        type: Node,
        tooltip: "消息"
      }), _dec6 = property({
        type: Node,
        tooltip: "中奖金额"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(iceAndFireInfoBoard, _Component);
        function iceAndFireInfoBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nBgs", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fBgs", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infos", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win", _descriptor5, _assertThisInitialized(_this));
          _this._winLev = EWinLev.a;
          /**当前模式 */
          _this._mod = void 0;
          _this._state = EState.info;
          return _this;
        }
        var _proto = iceAndFireInfoBoard.prototype;
        _proto.start = function start() {
          this.mod = EMOD.N;
          this.winLev = EWinLev.a;
          this.state = EState.info;
          iceAndFire.infoBoard = this;
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
          this.bindLev(coin);
          this.curWin.active = !twBn;
          this.twWin.active = twBn;
          tween(this.lab).to(t, {
            num: coin * 100
          }).start();
        }
        /**显示消息 */;
        _proto.showInfo = function showInfo() {
          this.state = EState.info;
        };
        /**获奖金额对应不同背景板 */
        _proto.bindLev = function bindLev(coin) {
          if (coin > iceAndFire.betSum * 3 && coin < iceAndFire.betSum * 5) {
            this.winLev = EWinLev.b;
          } else if (coin >= iceAndFire.betSum * 5) {
            this.winLev = EWinLev.c;
          } else {
            this.winLev = EWinLev.a;
          }
        };
        _createClass(iceAndFireInfoBoard, [{
          key: "lab",
          get: function get() {
            return find("Label", this.win).getComponent(labNumShow);
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
            this.bg.spriteFrame = this.mod == EMOD.N ? this.nBgs[this.winLev] : this.fBgs[this.winLev];
          }
        }, {
          key: "mod",
          get: function get() {
            return this._mod;
          },
          set: function set(v) {
            var _this$infos$getCompon;
            if (this._mod == v) return;
            this._mod = v;
            if (this.node) this.node.y = v == EMOD.F ? 134 : -290;
            var arr = [];
            switch (v) {
              case EMOD.N:
                arr = [7, 8, 9];
                break;
              case EMOD.F:
                arr = [0, 1, 2, 3, 4, 5, 6];
                break;
            }
            if (this.infos) (_this$infos$getCompon = this.infos.getComponent(lampUI)) == null || _this$infos$getCompon.setHideMessage(arr);
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
              this.lab.num = 0;
              this.winLev = EWinLev.a;
            }
          }
        }]);
        return iceAndFireInfoBoard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nBgs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fBgs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "infos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec6], {
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

System.register("chunks:///_virtual/iceAndFireMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cIceAndFire.ts', './RoomMgr.ts', './iceAndFireNormalReel.ts', './iceAndFireFortuneReel.ts', './NetGameServer.ts', './SubGameDef.ts', './UIHelp.ts', './dataChange4.ts', './iceAndFireBigwin.ts', './bezierMove.ts', './LanguageData.ts', './iceAndFireDetail.ts', './iceAndFireAudio.ts', './labNumShow.ts', './iceAndFireInfoBoard.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Label, Vec3, tween, instantiate, Button, Component, iceAndFire, ESTATE, RoomMgr, iceAndFireNormalReel, iceAndFireFortuneReel, gameNet, SubGameDef, UIHelp, UIhelpParam, dataChange, iceAndFireBigwin, bezierMove, LanguageData, iceAndFireDetail, iceAndFireAudio, labNumShow, EState, Num;
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
      Label = module.Label;
      Vec3 = module.Vec3;
      tween = module.tween;
      instantiate = module.instantiate;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      iceAndFire = module.iceAndFire;
      ESTATE = module.ESTATE;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      iceAndFireNormalReel = module.iceAndFireNormalReel;
    }, function (module) {
      iceAndFireFortuneReel = module.iceAndFireFortuneReel;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }, function (module) {
      dataChange = module.dataChange;
    }, function (module) {
      iceAndFireBigwin = module.iceAndFireBigwin;
    }, function (module) {
      bezierMove = module.bezierMove;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      iceAndFireDetail = module.iceAndFireDetail;
    }, function (module) {
      iceAndFireAudio = module.iceAndFireAudio;
    }, function (module) {
      labNumShow = module.labNumShow;
    }, function (module) {
      EState = module.EState;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "f92caDNoXxGk6UY08B6NU7K", "iceAndFireMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var iceAndFireMain = exports('iceAndFireMain', (_dec = ccclass('iceAndFireMain'), _dec2 = property({
        type: Prefab,
        tooltip: ""
      }), _dec3 = property({
        type: Prefab,
        tooltip: ""
      }), _dec4 = property({
        type: iceAndFireNormalReel,
        tooltip: ""
      }), _dec5 = property({
        type: iceAndFireFortuneReel,
        tooltip: ""
      }), _dec6 = property({
        type: iceAndFireFortuneReel,
        tooltip: ""
      }), _dec7 = property({
        type: Prefab,
        tooltip: ""
      }), _dec8 = property({
        type: Prefab,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(iceAndFireMain, _Component);
        function iceAndFireMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "detailPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinNumPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalReel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topReel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "downReel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwinPb", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulPb", _descriptor7, _assertThisInitialized(_this));
          _this.delayClick = false;
          _this.rollCallBackBn = false;
          _this.showStartBn = false;
          /**结算 */
          _this.settlementBn = false;
          return _this;
        }
        var _proto = iceAndFireMain.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          iceAndFire.main = this;
          iceAndFire.audio = this.getComponent(iceAndFireAudio);
          iceAndFire.normalReel = this.normalReel;
          iceAndFire.topReel = this.topReel;
          iceAndFire.downReel = this.downReel;
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
              iceAndFire.lastmoneyPanel.showPanel();
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
                    iceAndFire.clear();
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
          if (this.delayClick || iceAndFire.rollEnable == false) {
            return;
          }
          if (!iceAndFire.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this2.delayClick = false;
            }, 1);
            if (iceAndFire.status == ESTATE.stop) {
              iceAndFire.status = ESTATE.start;
              this.sendRoll();
            } else if (iceAndFire.status == ESTATE.run) {
              iceAndFire.slotCtrl.setSpinAnim(3);
              this.stopImmediately(iceAndFire.roundData.reelInfo[0].symbols, function () {
                _this2.rollCallBack();
              });
            }
          }
        };
        _proto.add = function add() {
          if (iceAndFire.auto) {
            return;
          }
          iceAndFire.sumIdx += 1;
          iceAndFire.sumIdx = iceAndFire.slotCtrl.updateBet(iceAndFire.sumIdx) == 0 ? iceAndFire.sumIdx - 1 : iceAndFire.sumIdx;
        };
        _proto.dec = function dec() {
          if (iceAndFire.auto) {
            return;
          }
          iceAndFire.sumIdx -= 1;
          iceAndFire.sumIdx = iceAndFire.slotCtrl.updateBet(iceAndFire.sumIdx) == 0 ? iceAndFire.sumIdx + 1 : iceAndFire.sumIdx;
        };
        _proto.startAuto = function startAuto(n) {
          if (this.delayClick) {
            return;
          }
          if (iceAndFire.status == ESTATE.stop) {
            iceAndFire.auto = true;
            iceAndFire.autoTimes = n;
            iceAndFire.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            // (((iceAndFire.slotCtrl.Btn_stopAuto as Node).children[1] as Node).getComponent(Label) as Label).string = n + "";
            if (n > 999) {
              iceAndFire.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
              iceAndFire.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              iceAndFire.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
              iceAndFire.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              iceAndFire.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
              iceAndFire.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(1, 1, 1);
            }
            iceAndFire.slotCtrl.Btn_stopAuto.active = iceAndFire.auto;
            iceAndFire.slotCtrl.Btn_start.active = !iceAndFire.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1.5);
          }
        };
        _proto.stopAuto = function stopAuto() {
          iceAndFire.auto = false;
          iceAndFire.autoTimes = 0;
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
          if (iceAndFire.roundIndex == 0) {
            iceAndFire.normalReel.removeRadom();
          } else {
            iceAndFire.topReel.removeRadom();
            iceAndFire.downReel.removeRadom();
          }
          if (iceAndFire.roundWin > 0) {
            iceAndFire.slotCtrl.setSpinAnim(3);
          } else {
            iceAndFire.slotCtrl.setSpinAnim(2);
          }
          this.scheduleOnce(function () {
            _this3.rollCallBackNext();
          }, 0.3);
        }

        /**滚动完成后操作 */;
        _proto.rollCallBackNext = function rollCallBackNext() {
          var _this4 = this;
          var t = 0.5;
          if (iceAndFire.isWinning) {
            var currentMoney = iceAndFire.money;
            var targetMoney = iceAndFire.lotteryRes.userscore;
            var moneyObj = {
              value: currentMoney
            };
            iceAndFire.moneyTween = tween(moneyObj).to(0.5, {
              value: targetMoney
            }, {
              onUpdate: function onUpdate() {
                // 实时更新数据
                iceAndFire.money = moneyObj.value;
                iceAndFire.slotCtrl.moneyLab.string = Num.exchangeToThousands(iceAndFire.exchangeRate, moneyObj.value);
              }
            }).start();
          }
          if (iceAndFire.roundIndex == 0) {
            var _reelInfo = iceAndFire.roundData.reelInfo[0];
            if (_reelInfo.removeItems.length > 0) {
              t += 2;
            }
            iceAndFire.normalReel.showWin(_reelInfo.removeItems);
            var mul = _reelInfo.multiplier ? _reelInfo.multiplier : 1;
            if (_reelInfo.payout > 0) iceAndFire.infoBoard.playWinAni(_reelInfo.payout / mul);
            if (mul > 1) {
              t += 1;
              iceAndFire.normalReel.showWinWildEffecct();
              var mulNode = instantiate(this.mulPb);
              mulNode.getComponent(Label).string = "X2";
              mulNode.scale = new Vec3(1.5, 1.5);
              mulNode.parent = this.node;
              mulNode.opacity = 0;
              mulNode.position = iceAndFire.normalReel.node.position;
              var bz = mulNode.getComponent(bezierMove);
              var p0 = mulNode.position;
              var p3 = iceAndFire.infoBoard.node.position;
              var p1 = new Vec3(250, (p0.y + p3.y) / 4);
              var p2 = new Vec3(250, p3.y);
              bz.pArr = [p0, p1, p2, p3];
              tween(mulNode).to(0.5, {
                opacity: 255,
                scale: new Vec3(1, 1)
              }).delay(0.1).call(function () {
                iceAndFire.audio.playFly();
                tween(bz).to(0.5, {
                  t: 1
                }).call(function () {
                  mulNode.destroy();
                  _this4.settlement();
                }).start();
              }).start();
            }
          } else {
            var topReelInfo = iceAndFire.roundData.reelInfo[0];
            var downReelInfo = iceAndFire.roundData.reelInfo[1];
            if (topReelInfo.removeItems.length > 0 || downReelInfo.removeItems.length > 0) {
              t += 2;
            }
            iceAndFire.topReel.showWin(iceAndFire.roundData.reelInfo[0].removeItems);
            iceAndFire.downReel.showWin(iceAndFire.roundData.reelInfo[1].removeItems);
            this.playMul(true);
            this.playMul(false);
          }
          this.scheduleOnce(this.doNext, t);
        };
        _proto.playMul = function playMul(topBn) {
          var _this5 = this;
          var reelInfo;
          var reel;
          if (topBn) {
            reelInfo = iceAndFire.roundData.reelInfo[0];
            reel = iceAndFire.topReel;
          } else {
            reelInfo = iceAndFire.roundData.reelInfo[1];
            reel = iceAndFire.downReel;
          }
          var reelPos = reel.node.parent.parent.position;
          var mul = reelInfo.multiplier ? reelInfo.multiplier : 1;
          var moveX = topBn ? -250 : 250;
          var coinNum;
          if (reelInfo.payout) {
            reel.showWinWildEffecct();
            coinNum = instantiate(this.coinNumPb).getComponent(labNumShow);
            coinNum.node.parent = this.node;
            coinNum.node.setSiblingIndex(this.node.children.length - 2);
            coinNum.node.position = reelPos;
            coinNum.setRealNum(reelInfo.payout / mul);
          }
          if (mul == 1) {
            if (reelInfo.payout) this.coinTween(coinNum, reelInfo.payout, moveX);
            return;
          }
          if (mul == 2) {
            this.scheduleOnce(function () {
              var mulNode = instantiate(_this5.mulPb);
              mulNode.getComponent(Label).string = "X2";
              mulNode.scale = new Vec3(1.2, 1.2);
              mulNode.parent = _this5.node;
              mulNode.setSiblingIndex(_this5.node.children.length - 2);
              mulNode.opacity = 0;
              mulNode.position = reelPos;
              tween(mulNode).to(0.5, {
                opacity: 255,
                scale: new Vec3(1, 1)
              }).call(function () {
                _this5.coinTween(coinNum, reelInfo.payout, moveX);
              }).to(0.3, {
                opacity: 0
              }).call(function () {
                mulNode.destroy();
              }).start();
            }, 0.5);
          }
          if (mul == 5) {
            this.scheduleOnce(function () {
              var mulNode = instantiate(_this5.mulPb);
              mulNode.getComponent(Label).string = "X5";
              mulNode.parent = _this5.node;
              mulNode.setSiblingIndex(_this5.node.children.length - 2);
              mulNode.position = iceAndFire.infoBoard.node.position;
              var bz = mulNode.getComponent(bezierMove);
              var p0 = mulNode.position;
              var p3 = reelPos;
              var p1 = new Vec3(moveX, p0.y);
              var p2 = new Vec3(moveX, p3.y);
              bz.pArr = [p0, p1, p2, p3];
              tween(bz).to(0.5, {
                t: 1
              }).call(function () {
                _this5.coinTween(coinNum, reelInfo.payout, moveX);
                tween(mulNode).to(0.3, {
                  opacity: 0
                }).call(function () {
                  mulNode.destroy();
                }).start();
              }).start();
            }, 0.5);
          }
          if (mul == 10) {
            this.scheduleOnce(function () {
              var mulNode = instantiate(_this5.mulPb);
              mulNode.getComponent(Label).string = "X5";
              mulNode.parent = _this5.node;
              mulNode.setSiblingIndex(_this5.node.children.length - 2);
              mulNode.position = iceAndFire.infoBoard.node.position;
              var bz = mulNode.getComponent(bezierMove);
              var p0 = mulNode.position;
              var p3 = reelPos;
              var p1 = new Vec3(moveX, p0.y);
              var p2 = new Vec3(moveX, p3.y);
              bz.pArr = [p0, p1, p2, p3];
              tween(bz).to(0.5, {
                t: 1
              }).delay(0.3).call(function () {
                mulNode.destroy();
                mulNode = instantiate(_this5.mulPb);
                mulNode.getComponent(Label).string = "X10";
                mulNode.scale = new Vec3(1.2, 1.2);
                mulNode.parent = _this5.node;
                mulNode.setSiblingIndex(_this5.node.children.length - 2);
                mulNode.opacity = 0;
                mulNode.position = reelPos;
                tween(mulNode).to(0.5, {
                  opacity: 255,
                  scale: new Vec3(1, 1)
                }).call(function () {
                  _this5.coinTween(coinNum, reelInfo.payout, moveX);
                }).to(0.3, {
                  opacity: 0
                }).call(function () {
                  mulNode.destroy();
                }).start();
              }).start();
            }, 0.5);
          }
        };
        _proto.coinTween = function coinTween(coinNum, payout, moveX) {
          var _this6 = this;
          tween(coinNum).to(0.5, {
            num: payout * 100
          }).call(function () {
            _this6.moveToInfoBoard(coinNum.node.getComponent(bezierMove), moveX);
          }).start();
        };
        _proto.moveToInfoBoard = function moveToInfoBoard(bz, moveX) {
          var _this7 = this;
          var p0 = bz.node.position;
          var p3 = iceAndFire.infoBoard.node.position;
          var p1 = new Vec3(moveX, p0.y);
          var p2 = new Vec3(moveX, p3.y);
          bz.pArr = [p0, p1, p2, p3];
          tween(bz).to(0.5, {
            t: 1
          }).call(function () {
            _this7.settlement();
            bz.node.destroy();
          }).start();
        };
        _proto.doNext = function doNext() {
          this.unschedule(this.doNext);
          iceAndFire.topReel.unscheduleAllCallbacks();
          iceAndFire.downReel.unscheduleAllCallbacks();
          if (iceAndFire.freeBn && iceAndFire.roundIndex == 0 && this.showStartBn == false) {
            this.showStartBn = true;
            iceAndFire.slotCtrl.showFortuneStart();
            return;
          }
          iceAndFire.roundIndex++;
          iceAndFire.infoBoard.state = EState.info;
          var len = iceAndFire.lotteryRes.rounds.length;
          if (iceAndFire.roundIndex < len) {
            iceAndFire.slotCtrl.lastNum = iceAndFire.roundData.leftFreeCount - 1;
            iceAndFire.topReel.loop();
            iceAndFire.downReel.loop();
            this.scheduleOnce(function () {
              iceAndFire.topReel.loopEnd(iceAndFire.roundData.reelInfo[0].symbols);
              iceAndFire.downReel.loopEnd(iceAndFire.roundData.reelInfo[1].symbols);
            }, 1.5);
          } else {
            if (iceAndFire.freeBn) {
              iceAndFire.slotCtrl.showFortuneEnd(len - 1, iceAndFire.lotteryRes.winscore);
            } else {
              this.playRollOver();
            }
          }
        };
        _proto.settlement = function settlement() {
          var _this8 = this;
          if (this.settlementBn) return;
          this.settlementBn = true;
          this.scheduleOnce(function () {
            _this8.settlementBn = false;
          }, 5);
          this.unschedule(this.doNext);
          if (iceAndFire.roundWin > iceAndFire.betSum * 5) {
            var bigwin = instantiate(this.bigwinPb).getComponent(iceAndFireBigwin);
            bigwin.node.parent = this.node;
            bigwin.playBigWin(iceAndFire.roundWin);
          } else {
            iceAndFire.infoBoard.playWinAni(iceAndFire.roundWin, 1);
            this.scheduleOnce(function () {
              _this8.doNext();
            }, 1);
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          iceAndFire.infoBoard.playWinAni(iceAndFire.roundWin);
          this.scheduleOnce(this.doNext, 1);
        }

        /**单次滚动完成结算 */;
        _proto.playRollOver = function playRollOver() {
          this.rollComplete();
          this.doAuto();
        };
        _proto.doAuto = function doAuto() {
          if (iceAndFire.auto && iceAndFire.autoTimes > 0) {
            this.sendRoll();
          }
        }
        /**滚动完成 */;
        _proto.rollComplete = function rollComplete() {
          iceAndFire.status = ESTATE.stop;
          iceAndFire.slotCtrl.setSpinAnim(0);
          this.addDetailListener();
        };
        _proto.roll = function roll(list) {
          var _this9 = this;
          if (!iceAndFire.auto) {
            iceAndFire.rollEnable = true;
          }
          iceAndFire.status = ESTATE.run;
          this.scheduleOnce(function () {
            iceAndFire.normalReel.loopEnd(list, function () {
              _this9.rollCallBack();
            });
          }, 0.5);
        };
        _proto.sendRoll = function sendRoll() {
          this.initRoll();
          iceAndFire.autoTimes = iceAndFire.autoTimes > 0 ? iceAndFire.autoTimes - 1 : 0;
          if (iceAndFire.autoTimes == 0) {
            iceAndFire.auto = false;
          }
          iceAndFire.slotCtrl.setSpinAnim(1);
          var autoTimesLab = iceAndFire.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = iceAndFire.autoTimes + "";
          // this.audio.playclickstart();
          if (iceAndFire.autoTimes > 999) {
            iceAndFire.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
          } else if (iceAndFire.autoTimes > 99) {
            iceAndFire.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
          } else {
            iceAndFire.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
          }
          iceAndFire.normalReel.loop();
          this.sendLottery();
        };
        _proto.firstSymbolOver = function firstSymbolOver() {
          iceAndFire.normalReel.spawn();
          this.addDetailListener();
        };
        _proto.addDetailListener = function addDetailListener() {
          var symbols = iceAndFire.normalReel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.node.getComponent(Button).interactable = true;
          }
        };
        _proto.removeDetailListener = function removeDetailListener() {
          var symbols = iceAndFire.normalReel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
            symbol.node.getComponent(Button).interactable = false;
          }
          var detail = iceAndFire.detail;
          if (detail) detail.node.active = false;
        };
        _proto.addDetail = function addDetail(s) {
          var detail = iceAndFire.detail;
          if (!detail) {
            detail = instantiate(this.detailPb).getComponent(iceAndFireDetail);
            detail.node.parent = s.node.parent.parent.parent;
            iceAndFire.detail = detail;
          }
          detail.node.active = true;
          var symbols = iceAndFire.normalReel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            if (symbol.poolId != s.poolId) {
              symbol.darkBn = true;
            }
          }
          detail.node.position = s.node.position;
          detail.init(s);
        }

        /**每次滚动初始化场景 */;
        _proto.initRoll = function initRoll() {
          this.showStartBn = false;
          iceAndFire.normalReel.unscheduleAllCallbacks();
          iceAndFire.topReel.unscheduleAllCallbacks();
          iceAndFire.downReel.unscheduleAllCallbacks();
          iceAndFire.infoBoard.showInfo();
          this.removeDetailListener();
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  console.log("sendLottery");
                  _context2.next = 3;
                  return gameNet.PlayMatch3(SubGameDef.SLOTS_ICEANDFIRE, iceAndFire.betSum + "");
                case 3:
                  retSpin = _context2.sent;
                  // if(retSpin.res)
                  console.log(retSpin);
                  this.lotteryBack(retSpin);
                case 6:
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
        _proto.lotteryBack = function lotteryBack(data) {
          var _this10 = this;
          if (data && data.isSucc) {
            this.exchange(data.res);
            if (iceAndFire.slotCtrl.isSpeed) {
              iceAndFire.roundIndex = 0;
              this.roll(iceAndFire.roundData.reelInfo[0].symbols);
            } else {
              this.scheduleOnce(function () {
                iceAndFire.roundIndex = 0;
                _this10.roll(iceAndFire.roundData.reelInfo[0].symbols);
              }, 1);
            }
          }
        };
        _proto.exchange = function exchange(data) {
          var res = dataChange.change(data);
          iceAndFire.lotteryRes = res;
        };
        _proto.stopImmediately = function stopImmediately(arr, callBack) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          if (!iceAndFire.auto) {
            iceAndFire.normalReel.stopImmediately(arr, callBack);
          }
        };
        return iceAndFireMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "detailPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinNumPb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalReel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "topReel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "downReel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bigwinPb", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mulPb", [_dec8], {
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

System.register("chunks:///_virtual/iceAndFireNormalReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './baseSymbol.ts', './cIceAndFire.ts', './iceAndFireReel.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodePool, Vec3, ETYPE, baseSymbol, iceAndFire, iceAndFireReel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      Vec3 = module.Vec3;
    }, function (module) {
      ETYPE = module.ETYPE;
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }, function (module) {
      iceAndFireReel = module.iceAndFireReel;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8434aDrKqJG3LYkGMcUGIPK", "iceAndFireNormalReel", undefined);
      var ccclass = _decorator.ccclass;
      var FIRSTSYMBOL = [6, 4, 3, 9, 5, 7, 10, 1, 8, 8, 1, 10, 7, 5, 9, 3, 4, 6];
      var iceAndFireNormalReel = exports('iceAndFireNormalReel', (_dec = ccclass('iceAndFireNormalReel'), _dec(_class = /*#__PURE__*/function (_iceAndFireReel) {
        _inheritsLoose(iceAndFireNormalReel, _iceAndFireReel);
        function iceAndFireNormalReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _iceAndFireReel.call.apply(_iceAndFireReel, [this].concat(args)) || this;
          _this.disTime = 0.1;
          return _this;
        }
        var _proto = iceAndFireNormalReel.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.radomIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            num: 2,
            pool: new NodePool(baseSymbol),
            size: 123,
            headPos: new Vec3(-307.5, -123),
            vector: 346,
            symbols: [],
            "switch": false
          }, {
            index: 1,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 123,
            headPos: new Vec3(-184.5, -184.5),
            vector: 469,
            symbols: [],
            "switch": false
          }, {
            index: 2,
            type: ETYPE.V,
            num: 4,
            pool: new NodePool(baseSymbol),
            size: 123,
            headPos: new Vec3(-61.5, -246),
            vector: 592,
            symbols: [],
            "switch": false
          }, {
            index: 3,
            type: ETYPE.V,
            num: 4,
            pool: new NodePool(baseSymbol),
            size: 123,
            headPos: new Vec3(61.5, -246),
            vector: 592,
            symbols: [],
            "switch": false
          }, {
            index: 4,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 123,
            headPos: new Vec3(184.5, -184.5),
            vector: 469,
            symbols: [],
            "switch": false
          }, {
            index: 5,
            type: ETYPE.V,
            num: 2,
            pool: new NodePool(baseSymbol),
            size: 123,
            headPos: new Vec3(307.5, -123),
            vector: 346,
            symbols: [],
            "switch": false
          }];
          this.bindResult(FIRSTSYMBOL);
          iceAndFire.main.firstSymbolOver();
        };
        /**启动循环播放 */
        _proto.loop = function loop() {
          var _this2 = this;
          iceAndFire.audio.playReelLoop();
          if (iceAndFire.slotCtrl.isSpeed) {
            this.v = 80;
          } else {
            this.v = 40;
          }
          var disTime = iceAndFire.slotCtrl.isSpeed ? 0 : this.disTime;
          this.reboundT = iceAndFire.slotCtrl.isSpeed ? 0 : 0.2;
          var _loop = function _loop(i) {
            _this2.scheduleOnce(function () {
              _this2.reboundMove(_this2.reelDates[i]);
            }, disTime * i);
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
          if (iceAndFire.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          if (iceAndFire.slotCtrl.isSpeed == false) {
            var _loop2 = function _loop2() {
              var r = _this4.reelDates[i];
              var disTime = _this4.disTime * i;
              _this4.scheduleOnce(function () {
                _this4.bindResultOne(r, arr, function () {
                  var cb = function cb() {
                    callback();
                    iceAndFire.audio.playReelEnd(false);
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
              iceAndFire.audio.playReelEnd(true);
            });
          }
        };
        _proto.spawn = function spawn() {
          var symbols = this.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.wildSpawn();
          }
        };
        return iceAndFireNormalReel;
      }(iceAndFireReel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/iceAndFireReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './baseSymbol.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, instantiate, tween, Vec3, macro, baseReel, baseSymbol;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      tween = module.tween;
      Vec3 = module.Vec3;
      macro = module.macro;
    }, function (module) {
      baseReel = module.baseReel;
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5b76bTfEj5EkZwRFufyjmlf", "iceAndFireReel", undefined);
      var ccclass = _decorator.ccclass;
      var iceAndFireReel = exports('iceAndFireReel', (_dec = ccclass('iceAndFireReel'), _dec(_class = /*#__PURE__*/function (_baseReel) {
        _inheritsLoose(iceAndFireReel, _baseReel);
        function iceAndFireReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseReel.call.apply(_baseReel, [this].concat(args)) || this;
          _this.showCount = 0;
          _this.rs = void 0;
          return _this;
        }
        var _proto = iceAndFireReel.prototype;
        /**wild effect 相关 */
        _proto.getWildEffect = function getWildEffect() {
          var symbol;
          var pbNode = instantiate(this.symbolPb);
          symbol = pbNode.getComponent(baseSymbol);
          symbol.poolId = this.getPoolId();
          return symbol;
        }

        /**X2wild表现 */;
        _proto.showWinWildEffecct = function showWinWildEffecct() {
          for (var i = 0; i < this.reelDates.length; i++) {
            var r = this.reelDates[i];
            for (var j = r.symbols.length - 1; j >= 0; j--) {
              var symbol = r.symbols[j];
              this.addWinWildEffecct(symbol);
            }
          }
        };
        _proto.addWinWildEffecct = function addWinWildEffecct(s) {
          if (s.winBn && s.wildBn) {
            var symbol = this.getWildEffect();
            symbol.node.parent = s.node.parent.parent.parent;
            symbol.node.position = s.node.position;
            symbol.node.scale = s.node.scale;
            symbol.symbolId = s.symbolId;
            symbol.winBn = true;
            // let scale: number = symbol.node.scale.x;
            tween(symbol.node).to(0.4, {
              scale: new Vec3(1, 1)
            }).call(function () {
              symbol.playWildWinEffect();
            }).delay(1).to(0.4, {
              scale: new Vec3(0.7, 0.7)
            }).call(function () {
              symbol.node.destroy();
            }).start();
          }
        }

        /**中奖表现 */;
        _proto.showWin = function showWin(rs) {
          this.removeUnuseAll();
          this.showCount = 0;
          this.rs = rs;
          this.doShow();
          this.schedule(this.doShow, 3, macro.REPEAT_FOREVER);
        };
        _proto.doShow = function doShow() {
          this.hideWin();
          var r = this.rs[this.showCount];
          var indexs = r.indexs;
          var symbols = this.getSymbols;
          for (var i = 0; i < indexs.length; i++) {
            var symbol = symbols[indexs[i]];
            symbol.winBn = true;
            if (r.winCoin && i == 0) {
              symbol.showWin(r.winCoin);
            }
          }
          if (this.showCount < this.rs.length - 1) {
            this.showCount++;
          } else {
            this.showCount = 0;
          }
        };
        _proto.hideWin = function hideWin() {
          var symbols = this.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.winBn = false;
            symbol.winLab.node.active = false;
          }
        };
        _proto.clear = function clear() {
          this.unscheduleAllCallbacks();
          _baseReel.prototype.clear.call(this);
        };
        return iceAndFireReel;
      }(baseReel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/iceAndFireSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './LanguageData.ts', './cIceAndFire.ts', './fortuneStart.ts', './fortuneEnd.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Prefab, Animation, Sprite, tween, find, Vec3, Button, Color, Label, instantiate, Component, Num, LanguageData, iceAndFire, fortuneStart, fortuneEnd, UserMgr;
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
      Prefab = module.Prefab;
      Animation = module.Animation;
      Sprite = module.Sprite;
      tween = module.tween;
      find = module.find;
      Vec3 = module.Vec3;
      Button = module.Button;
      Color = module.Color;
      Label = module.Label;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }, function (module) {
      fortuneStart = module.fortuneStart;
    }, function (module) {
      fortuneEnd = module.fortuneEnd;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "a4d41wtNINDhazoZhZDuYRF", "iceAndFireSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var iceAndFireSlotCtrl = exports('iceAndFireSlotCtrl', (_dec = ccclass('iceAndFireSlotCtrl'), _dec2 = property({
        type: Node,
        tooltip: "开始按钮"
      }), _dec3 = property({
        type: SpriteFrame,
        tooltip: "旋转图片"
      }), _dec4 = property({
        type: Node,
        tooltip: "自动次数按钮"
      }), _dec5 = property({
        type: Node,
        tooltip: "免费"
      }), _dec6 = property({
        type: Node,
        tooltip: "自动面板"
      }), _dec7 = property({
        type: Node,
        tooltip: "设置"
      }), _dec8 = property({
        type: Node,
        tooltip: "滚动面板"
      }), _dec9 = property({
        type: Node,
        tooltip: "设置面板"
      }), _dec10 = property({
        type: Node,
        tooltip: "数据面板"
      }), _dec11 = property({
        type: Node,
        tooltip: "提示文字"
      }), _dec12 = property({
        type: SpriteFrame,
        tooltip: "sp_settingControl"
      }), _dec13 = property({
        type: SpriteFrame,
        tooltip: "sp_speed"
      }), _dec14 = property({
        type: SpriteFrame,
        tooltip: "sp2_speed"
      }), _dec15 = property({
        type: Prefab,
        tooltip: "财富模式开始"
      }), _dec16 = property({
        type: Prefab,
        tooltip: "财富模式结束"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(iceAndFireSlotCtrl, _Component);
        function iceAndFireSlotCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Btn_start", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spin_Sp", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_stopAuto", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_auto", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_set", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rollPanel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "setPanel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dataPanel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_settingControl", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_speed", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp2_speed", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fortuneStart", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fortuneEnd", _descriptor15, _assertThisInitialized(_this));
          _this.isPanelAnim = false;
          _this.isSpeed = false;
          _this.bFastBigWin = false;
          _this.control = iceAndFire;
          _this.sumList = [];
          _this.curBetTween = null;
          //创建提示文字
          _this.tipTween = null;
          _this._lastNum = 0;
          return _this;
        }
        var _proto = iceAndFireSlotCtrl.prototype;
        _proto.onLoad = function onLoad() {
          iceAndFire.money = UserMgr.inst.coin;
          this.initBetContent(iceAndFire.BETNUM, iceAndFire.BET, iceAndFire.LINES);
          this.updateBet(iceAndFire.sumIdx);
        };
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
          iceAndFire.slotCtrl = this;
        };
        _proto.btnRollTouchStart = function btnRollTouchStart() {
          if (!iceAndFire.rollEnable) {
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
          if (!iceAndFire.rollEnable) {
            return;
          }
          iceAndFire.main.onCLick(e, 'roll');
        };
        _proto.btnStopRollTouchStart = function btnStopRollTouchStart() {
          if (this.stopRollClickAni) {
            this.stopRollClickAni.active = true;
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
          iceAndFire.main.stopAuto();
        };
        _proto.init = function init() {
          this.soundNode.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.setPanel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winLab.string = Num.exchangeToThousands(iceAndFire.exchangeRate, 0);
          this.moneyLab.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.money);
        };
        _proto.update = function update() {
          this.initTip();
        }

        /**玩家金币变更 */;
        _proto.playMoneyAni = function playMoneyAni(coin, t) {
          if (t === void 0) {
            t = 0;
          }
          var str = Num.exchangeToThousands(iceAndFire.exchangeRate, coin);
          tween(this.moneyLab).to(t, {
            string: str
          }).start();
        }
        /**玩家赢得金币变更 */;
        _proto.playWinAni = function playWinAni(coin, t) {
          if (t === void 0) {
            t = 0;
          }
          var str = Num.exchangeToThousands(iceAndFire.exchangeRate, coin);
          tween(this.winLab).to(t, {
            string: str
          }).start();
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
          if (!iceAndFire.betNum) {
            iceAndFire.sumIdx = 0;
            iceAndFire.betNum = this.sumList[iceAndFire.sumIdx];
          } else {
            iceAndFire.sumIdx = this.sumList.indexOf(iceAndFire.betNum);
          }
        };
        _proto.settingControlButtonClick_Function = function settingControlButtonClick_Function() {
          if (tgx.AudioMgr.inst["switch"] == true) {
            tgx.AudioMgr.inst["switch"] = false;
            this.soundNode.getComponent(Sprite).spriteFrame = this.sp_settingControl[0];
          } else {
            tgx.AudioMgr.inst["switch"] = true;
            this.soundNode.getComponent(Sprite).spriteFrame = this.sp_settingControl[1];
          }
        }

        //相关点击
        ;

        _proto.onCLick = function onCLick(event, args) {
          iceAndFire.main.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          iceAndFire.autoPanel.showPanel();
        }

        //打开设置界面
        ;

        _proto.onCLickShowsetPanel = function onCLickShowsetPanel(event) {
          // dragonhatch.main.audio.playclickopen();
          if (this.rollPanel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", iceAndFire.main.node);
          if (footer) {
            footer.active = false;
          }
          this.Btn_start.active = false;
          tween(this.rollPanel).to(0.2, {
            position: new Vec3(0, -803, 0),
            opacity: 0
          }).start();
          tween(this.setPanel).to(0.2, {
            position: new Vec3(0, -560, 0),
            opacity: 255
          }).start();
        }

        //打开设置界面
        ;

        _proto.onCLickHidesetPanel = function onCLickHidesetPanel(event) {
          if (this.setPanel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", iceAndFire.main.node);
          if (footer) {
            footer.active = true;
          }
          this.Btn_start.active = true;
          tween(this.rollPanel).to(0.2, {
            position: new Vec3(0, -623, 0),
            opacity: 255
          }).start();
          tween(this.setPanel).to(0.2, {
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
            iceAndFire.betPanel.hidePanel();
          } else {
            iceAndFire.betPanel.showPanel();
            iceAndFire.betPanel.bindBet();
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
        //设置极速模式
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
          iceAndFire.sumIdx = this.sumList.indexOf(iceAndFire.betSum);
          this.updateBet(iceAndFire.sumIdx);
        };
        //更新下注值
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
          if (iceAndFire.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (iceAndFire.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (iceAndFire.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (iceAndFire.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          iceAndFire.betSum = this.sumList[idx];
          this.betLab.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.betSum);
          this.curBetAni();
          return 1;
        };
        _proto.curBetAni = function curBetAni() {
          var _this$curBetTween, _this$curBetTween2;
          (_this$curBetTween = this.curBetTween) == null || _this$curBetTween.stop();
          (_this$curBetTween2 = this.curBetTween) == null || _this$curBetTween2.destroySelf();
          this.curBetTween = tween(this.betLab.node).to(0.1, {
            scale: new Vec3(1.6, 1.6, 1.6)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }

        /**winNode label */;
        _proto.playAnimWin = function playAnimWin(aim, t, callBack) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          var aimStr = Num.exchangeToThousands(iceAndFire.exchangeRate, aim);
          tween(this.winLab).to(t, {
            string: aim
          }).call(function () {
            callBack();
          }).start();
        };
        //设置当前旋转动画
        _proto.setSpinAnim = function setSpinAnim(type) {
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              iceAndFire.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !iceAndFire.auto && this.setButtonState(true);
              if (iceAndFire.lotteryRes && iceAndFire.lotteryRes.winscore == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              iceAndFire.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winLab.string = Num.exchangeToThousands(iceAndFire.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              iceAndFire.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              iceAndFire.rollEnable = false;
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
          this.betLab.node.parent.getComponent(Button).interactable = state;
        }

        /** 0:白色 other：绿色*/;
        _proto.changeLabColor = function changeLabColor(type) {
          if (type == 0) {
            this.moneyLab.node.color = new Color(255, 255, 255);
            this.betLab.node.color = new Color(255, 255, 255);
            this.winLab.node.color = new Color(255, 255, 255);
          } else {
            this.moneyLab.node.color = new Color(123, 233, 246);
            this.betLab.node.color = new Color(123, 233, 246);
            this.winLab.node.color = new Color(123, 233, 246);
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
        _proto.showFortuneStart = function showFortuneStart() {
          var start = instantiate(this.fortuneStart).getComponent(fortuneStart);
          start.node.parent = this.node;
          start.node.setSiblingIndex(this.node.children.length - 2);
          start.show();
        };
        _proto.showFortuneEnd = function showFortuneEnd(count, coin) {
          iceAndFire.topReel.clear();
          iceAndFire.downReel.clear();
          var end = instantiate(this.fortuneEnd).getComponent(fortuneEnd);
          end.node.parent = this.node;
          end.node.setSiblingIndex(this.node.children.length - 2);
          end.show(count, coin);
        };
        _createClass(iceAndFireSlotCtrl, [{
          key: "rollClickAni",
          get: function get() {
            return find("clickRoll", this.Btn_start);
          }
        }, {
          key: "stopRollClickAni",
          get: function get() {
            return find("clickRollStop", this.Btn_stopAuto);
          }
        }, {
          key: "moneyLab",
          get: function get() {
            return find("money/txt", this.dataPanel).getComponent(Label);
          }
        }, {
          key: "betLab",
          get: function get() {
            return find("bet/txt", this.dataPanel).getComponent(Label);
          }
        }, {
          key: "winLab",
          get: function get() {
            return find("win/txt", this.dataPanel).getComponent(Label);
          }
        }, {
          key: "soundNode",
          get: function get() {
            return find("btn_sound", this.setPanel);
          }
        }, {
          key: "speedBtn",
          get: function get() {
            return find("btn_speed", this.rollPanel);
          }
        }, {
          key: "Btn_add",
          get: function get() {
            return find("add", this.rollPanel);
          }
        }, {
          key: "Btn_sub",
          get: function get() {
            return find("sub", this.rollPanel);
          }
        }, {
          key: "spin_AnimNode",
          get: function get() {
            return find("arrow", this.Btn_start);
          }
        }, {
          key: "lastNum",
          get: function get() {
            return this._lastNum;
          },
          set: function set(v) {
            this._lastNum = v;
            this.free.children[0].active = v > 0;
            this.free.children[1].active = !this.free.children[0].active;
            if (this.free.children[0].active) {
              this.free.children[0].getComponent(Label).string = v + "";
            }
          }
        }]);
        return iceAndFireSlotCtrl;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Btn_stopAuto", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "free", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Btn_auto", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Btn_set", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rollPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "setPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "dataPanel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sp_settingControl", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_speed", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sp2_speed", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "fortuneStart", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "fortuneEnd", [_dec16], {
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

System.register("chunks:///_virtual/iceAndFireSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './winAni.ts', './Num.ts', './cIceAndFire.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Label, ESHOWTYPE, baseSymbol, winAni, Num, iceAndFire;
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
      Label = module.Label;
    }, function (module) {
      ESHOWTYPE = module.ESHOWTYPE;
      baseSymbol = module.baseSymbol;
    }, function (module) {
      winAni = module.winAni;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      iceAndFire = module.iceAndFire;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "caf5bIPdQtIDKhT6INmsmsC", "iceAndFireSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var iceAndFireSymbol = exports('iceAndFireSymbol', (_dec = ccclass('iceAndFireSymbol'), _dec2 = property({
        type: Animation,
        tooltip: ""
      }), _dec3 = property({
        type: Animation,
        tooltip: ""
      }), _dec4 = property({
        type: Label,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_baseSymbol) {
        _inheritsLoose(iceAndFireSymbol, _baseSymbol);
        function iceAndFireSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseSymbol.call.apply(_baseSymbol, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "winAni", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildWinEffectAni", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLab", _descriptor3, _assertThisInitialized(_this));
          _this._winBn = false;
          return _this;
        }
        var _proto = iceAndFireSymbol.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var _this2 = this;
          this.winAni.node.getComponent(winAni).callBack = function () {
            _this2.onWinAni();
          };
        };
        _proto.unuse = function unuse() {
          _baseSymbol.prototype.unuse.call(this);
          this.winBn = false;
          this.winAni.node.active = false;
          this.wildWinEffectAni.node.active = false;
          this.winLab.node.active = false;
        };
        _proto.onWinAni = function onWinAni() {
          this.playAni(EROLEANI.win, false);
          this.addAni(EROLEANI.winidle, true);
        };
        _proto.winIdle = function winIdle() {
          this.playAni(EROLEANI.winidle, true);
        };
        /**wild 入场动画 */
        _proto.wildSpawn = function wildSpawn() {
          if (this.symbolId != ESYMBOLID.wild) return;
          this.showType = ESHOWTYPE.ske;
          this.playAni(EROLEANI.spawn, false);
          this.addAni(EROLEANI.idle, true);
        }

        /**scatter 入场动画 */;
        _proto.scatterSpawn = function scatterSpawn() {
          if (this.symbolId != ESYMBOLID.scatter) return;
          if (this.showType != ESHOWTYPE.ske) this.showType = ESHOWTYPE.ske;
          this.playAni(EROLEANI.spawn, false);
          this.addAni(EROLEANI.idle, true);
        }

        /**wild中奖红色烟雾 在任何主游戏旋转期间，任何赢奖涉及了1个或更多的百搭符号时，所有赢奖都将乘以2 */;
        _proto.playWildWinEffect = function playWildWinEffect() {
          var _this3 = this;
          if (this.wildWinEffectAni.node.active || this.symbolId != ESYMBOLID.wild) return;
          this.wildWinEffectAni.node.active = true;
          this.wildWinEffectAni.on("finished", function () {
            _this3.wildWinEffectAni.node.active = false;
          });
          this.wildWinEffectAni.play();
        }

        /**展示中奖金额 */;
        _proto.showWin = function showWin(coin) {
          this.winLab.node.active = true;
          this.winLab.string = Num.exchangeToThousands(iceAndFire.exchangeRate, coin);
        };
        _proto.onClick = function onClick(e) {
          iceAndFire.main.addDetail(this);
        };
        _createClass(iceAndFireSymbol, [{
          key: "winBn",
          get: function get() {
            return this._winBn;
          },
          set: function set(v) {
            this._winBn = v;
            this.winAni.node.active = v;
            if (v) {
              if (this.showType != ESHOWTYPE.ske) this.showType = ESHOWTYPE.ske;
              this.winAni.play();
            } else {
              this.winAni.stop();
            }
          }
        }, {
          key: "wildBn",
          get: function get() {
            return this.symbolId == ESYMBOLID.wild;
          }
        }]);
        return iceAndFireSymbol;
      }(baseSymbol), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winAni", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wildWinEffectAni", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winLab", [_dec4], {
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
        ESYMBOLID[ESYMBOLID["clover"] = 5] = "clover";
        ESYMBOLID[ESYMBOLID["horseShoe"] = 6] = "horseShoe";
        ESYMBOLID[ESYMBOLID["coinjar"] = 7] = "coinjar";
        ESYMBOLID[ESYMBOLID["chest"] = 8] = "chest";
        ESYMBOLID[ESYMBOLID["scatter"] = 9] = "scatter";
        ESYMBOLID[ESYMBOLID["wild"] = 10] = "wild";
        return ESYMBOLID;
      }({}));
      var EROLEANI = exports('EROLEANI', /*#__PURE__*/function (EROLEANI) {
        EROLEANI["win"] = "win";
        EROLEANI["winidle"] = "win_idle";
        EROLEANI["idle"] = "idle";
        EROLEANI["spawn"] = "spawn";
        EROLEANI["fastspinExit"] = "fastspin_exit";
        EROLEANI["fastspinIdle"] = "fastspin_idle";
        EROLEANI["fastspinStart"] = "fastspin_start";
        return EROLEANI;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cIceAndFire.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, Num, iceAndFire;
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
      iceAndFire = module.iceAndFire;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d3a22RAywhMpr3QOFfGvRVa", "lastmoneyPanel", undefined);
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
          iceAndFire.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(iceAndFire.exchangeRate, iceAndFire.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // iceAndFire.main.audio.playclickopen();
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
          // iceAndFire.main.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_iceandfire", ['./SlotsIceAndFireGameMgr.ts', './autoPanel4.ts', './betNum5.ts', './betPanel5.ts', './cIceAndFire.ts', './dataChange4.ts', './fortuneEnd.ts', './fortuneStart.ts', './iceAndFireAudio.ts', './iceAndFireBg.ts', './iceAndFireBigwin.ts', './iceAndFireDetail.ts', './iceAndFireFortuneReel.ts', './iceAndFireInfoBoard.ts', './iceAndFireMain.ts', './iceAndFireNormalReel.ts', './iceAndFireReel.ts', './iceAndFireSlotCtrl.ts', './iceAndFireSymbol.ts', './lastmoneyPanel5.ts', './winAni.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotsIceAndFireGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "31ffcFr9cBEIpxadM1T/DK2", "SlotsIceAndFireGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsIceAndFireGameMgr = exports('SlotsIceAndFireGameMgr', (_dec = ccclass('SlotsIceAndFireGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsIceAndFireGameMgr, _GameMgr);
        function SlotsIceAndFireGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_ICEANDFIRE;
          _this.mainName = "iceAndFireMain";
          _this._gameType = SubGameDef.SLOTS_ICEANDFIRE;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_iceandfire',
            bundle: ModuleDef.SLOTS_ICEANDFIRE
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsIceAndFireGameMgr.prototype;
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
        _createClass(SlotsIceAndFireGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsIceAndFireGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsIceAndFireGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsIceAndFireGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/winAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "72aacjuWbxFOZ5MKnufSlt/", "winAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var winAni = exports('winAni', (_dec = ccclass('winAni'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(winAni, _Component);
        function winAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.callBack = function () {};
          return _this;
        }
        var _proto = winAni.prototype;
        _proto.onFrame = function onFrame() {
          this.callBack();
        };
        return winAni;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_iceandfire', 'chunks:///_virtual/module_slots_iceandfire'); 
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