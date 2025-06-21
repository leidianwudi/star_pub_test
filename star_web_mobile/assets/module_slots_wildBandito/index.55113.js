System.register("chunks:///_virtual/autoPanel12.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, Num, wildbandito;
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
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "bf73cSxTA1HxJbUxmrMn8cf", "autoPanel", undefined);
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
          wildbandito.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.money);
          this.lblCurBet.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.betSum);
          this.winCoin_lab.string = wildbandito.slotCtrl.winCoin_lab.string;
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
            wildbandito.main.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // wildbandito.main.audio.playclickopen();
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
          // wildbandito.main.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum13.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "5c3b9EecExPX5thklm/QjFw", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel13.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './betNum13.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, Num, betNum, wildbandito;
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
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "b1c01iKB8BIYbfXAty1wpWL", "betPanel", undefined);
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
          wildbandito.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = wildbandito.BETNUM;
          this.betList = wildbandito.BET;
          this.line = wildbandito.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.money);
          this.lblCurBet.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.betSum);
          this.winCoin_lab.string = wildbandito.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(wildbandito.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(wildbandito.exchangeRate, sumList[_i3]);
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
          wildbandito.betNum = this.tempi;
          wildbandito.bet = this.tempj;
          wildbandito.sumIdx = this.tempindex;
          wildbandito.betSum = this.sumList[wildbandito.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.betSum);
          wildbandito.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(wildbandito.sumIdx);
          this.val3 = wildbandito.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // wildbandito.main.audio.playclickopen();
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
          // wildbandito.main.audio.playclickclose();
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

System.register("chunks:///_virtual/cWildbandito.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange12.ts'], function (exports) {
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
      cclegacy._RF.push({}, "e7507F/905MR6WjsdoNq+sS", "cWildbandito", undefined);
      var cWildbandito = /*#__PURE__*/function () {
        function cWildbandito() {
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          this.detail = null;
          this.main = null;
          this.slotCtrl = null;
          this.infoBoard = null;
          this.reel = void 0;
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
          /**bigwin*/
          this.bigwin = null;
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
          /**摇奖次数index */
          this._resultIndex = 0;
          /**回合index */
          this._roundIndex = 0;
          this.removeCount = void 0;
        }
        _createClass(cWildbandito, [{
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
          key: "resultIndex",
          get: function get() {
            return this._resultIndex;
          },
          set: function set(v) {
            this._resultIndex = v;
          }
        }, {
          key: "roundIndex",
          get: function get() {
            return this._roundIndex;
          },
          set: function set(v) {
            this._roundIndex = v;
          }
          /**摇奖次数数据 */
        }, {
          key: "result",
          get: function get() {
            return this.lotteryRes.results[this.resultIndex];
          }
          /**回合数据 */
        }, {
          key: "round",
          get: function get() {
            return this.result.rounds[this.roundIndex];
          }
          /**播放结束 */
        }, {
          key: "playOverBn",
          get: function get() {
            return this.resultIndex > this.lotteryRes.results.length - 1;
          }
          /**是否展示免费模式滚动开始动画 */
        }, {
          key: "showFreeLoopAni",
          get: function get() {
            if (this.resultIndex == 1) return true;
            if (this.resultIndex > 1 && this.lotteryRes.results[this.resultIndex - 1].winCoin > 0) return true;
            return false;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cWildbandito();
            }
            return this._instance;
          }
        }]);
        return cWildbandito;
      }();
      cWildbandito._instance = null;
      var wildbandito = exports('wildbandito', cWildbandito.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange12.ts", ['cc', './wildbanditoSymbol.ts'], function (exports) {
  var cclegacy, ESYMBOLID;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5a21f7mBTZEtIqF+Jywiest", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.curCoin = Number(data.coins);
          res.winCoin = Number(data.payout);
          res.results = [];
          var results = data.results;
          for (var i = 0; i < results.length; i++) {
            var tempResult = {};
            var result = results[i];
            res.results.push(tempResult);
            tempResult.leftFreeCount = result.leftFreeCount;
            tempResult.winCoin = 0;
            tempResult.rounds = [];
            for (var j = 0; j < result.rounds.length; j++) {
              var tempRound = {};
              var round = result.rounds[j];
              var next = j + 1 < result.rounds.length ? result.rounds[j + 1] : undefined;
              tempResult.rounds.push(tempRound);
              tempRound.winCoin = Number(round.payout);
              tempResult.winCoin += tempRound.winCoin;
              tempRound.mul = round.multipliers ? Number(round.multipliers[0]) : 1;
              tempRound.freeCount = Number(round.freeCount);
              tempRound.symbols = this.symbolsChange(round.symbols);
              tempRound.golds = this.goldsChange(round.symbols);
              tempRound.removeItems = this.removeChange(round.paySymbols);
              if (next) {
                tempRound.addItems = this.addItemChange(next.newSymbols);
              } else {
                tempRound.addItems = [];
              }
            }
          }
          return res;
        };
        dataChange.symbolsChange = function symbolsChange(symbols) {
          var res = [];
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var id = this.transformId(symbol.id);
            if (id != 0) {
              var index = this.posToIndex(symbol.coordinate);
              res[index] = id;
            }
          }
          return res;
        };
        dataChange.goldsChange = function goldsChange(symbols) {
          var res = [];
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var gold = symbol.isGoldFrame ? 1 : 0;
            var index = this.posToIndex(symbol.coordinate);
            res[index] = gold;
          }
          return res;
        };
        dataChange.removeChange = function removeChange(paySymbols) {
          var res = [];
          for (var j = 0; j < paySymbols.length; j++) {
            var paySymbol = paySymbols[j];
            var indexs = [];
            for (var k = 0; k < paySymbol.points.length; k++) {
              var point = paySymbol.points[k];
              var index = this.posToIndex(point);
              indexs.push(index);
            }
            res = [].concat(res, indexs);
          }
          res = Array.from(new Set(res));
          return res;
        };
        dataChange.addItemChange = function addItemChange(newSymbols) {
          var res = [];
          for (var j = 0; j < newSymbols.length; j++) {
            var tempAddItem = {};
            res.push(tempAddItem);
            var newSymbol = newSymbols[j];
            tempAddItem.rindex = newSymbol.coordinate.reel - 1;
            tempAddItem.id = this.transformId(newSymbol.id);
            tempAddItem.gold = newSymbol.isGoldFrame ? 1 : 0;
          }
          return res;
        }
        /**
         * [4,9,14,19,24,
         *  3,8,13,18,23,
         *  2,7,12,17,22,
         *  1,6,11,16,21,
         *  0,5,10,15,20]
         */;
        dataChange.posToIndex = function posToIndex(pos) {
          return (pos.reel - 1) * 5 + pos.row - 1;
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            10: ESYMBOLID.ten,
            J: ESYMBOLID.J,
            Q: ESYMBOLID.Q,
            K: ESYMBOLID.K,
            A: ESYMBOLID.A,
            stick: ESYMBOLID.maraca,
            water: ESYMBOLID.tea,
            guitar: ESYMBOLID.guitar,
            skeleton: ESYMBOLID.man,
            scatter: ESYMBOLID.scatter,
            wildcard: ESYMBOLID.wild
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
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel13.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, Num, wildbandito;
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
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3a9d4KnvilOs7aIxd9FXqJi", "lastmoneyPanel", undefined);
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
          wildbandito.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // wildbandito.main.audio.playclickopen();
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
          // wildbandito.main.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_wildBandito", ['./SlotsWildbanditoGameMgr.ts', './autoPanel12.ts', './betNum13.ts', './betPanel13.ts', './cWildbandito.ts', './dataChange12.ts', './lastmoneyPanel13.ts', './wildbanditoAudio.ts', './wildbanditoBg.ts', './wildbanditoBigwin.ts', './wildbanditoDetail.ts', './wildbanditoFreeEnd.ts', './wildbanditoFreeStart.ts', './wildbanditoGun.ts', './wildbanditoGunNum.ts', './wildbanditoInfoBoard.ts', './wildbanditoMain.ts', './wildbanditoReel.ts', './wildbanditoSlotCtrl.ts', './wildbanditoSymbol.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotsWildbanditoGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "54404daitFOVacms7DYOUQO", "SlotsWildbanditoGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsWildbanditoGameMgr = exports('SlotsWildbanditoGameMgr', (_dec = ccclass('SlotsWildbanditoGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsWildbanditoGameMgr, _GameMgr);
        function SlotsWildbanditoGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_WILDBANDITO;
          _this.mainName = "wildbanditoMain";
          _this._gameType = SubGameDef.SLOTS_WILDBANDITO;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_wildbandito',
            bundle: ModuleDef.SLOTS_WILDBANDITO
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsWildbanditoGameMgr.prototype;
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
        _createClass(SlotsWildbanditoGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsWildbanditoGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsWildbanditoGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsWildbanditoGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/wildbanditoAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "c04de2YBtJPFqp7Hx4c+NK7", "wildbanditoAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoAudio = exports('wildbanditoAudio', (_dec = ccclass('wildbanditoAudio'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoAudio, _Component);
        function wildbanditoAudio() {
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
        var _proto = wildbanditoAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.playBgm = function playBgm(index) {
          if (this.bgmIndex == index) return;
          this.bgmIndex = index;
          tgx.AudioMgr.inst.audio.stopMusic();
          tgx.AudioMgr.inst.audio.playMusicLoop(this.urlArr[index], ModuleDef.SLOTS_WILDBANDITO);
        }

        /**滚动开始 */;
        _proto.playReelLoop = function playReelLoop(speedBn) {
          if (speedBn) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinBtn, ModuleDef.SLOTS_WILDBANDITO);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelActiveLoop, ModuleDef.SLOTS_WILDBANDITO);
          }
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
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelStopQuick, ModuleDef.SLOTS_WILDBANDITO);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelStopNormal, ModuleDef.SLOTS_WILDBANDITO);
          }
        }
        /**spawn wild */;
        _proto.playSpawnWild = function playSpawnWild() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symWild, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**spawn Scatter */;
        _proto.playSpawnScatter = function playSpawnScatter() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symScatter, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**夺宝等待动画 */;
        _proto.playFastspin = function playFastspin() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.fastspin, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**夺宝达成 */;
        _proto.playFsFswon = function playFsFswon() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.fsFswon, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**幸运模式界面按钮点击 */;
        _proto.playFswonIncrease = function playFswonIncrease() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.fsFswonIncrease, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**幸运模式开始界面 */;
        _proto.playFsLoadingVox = function playFsLoadingVox() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.fsLoadingVox, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**幸运模式开始滚动 */;
        _proto.playFsReelTransform = function playFsReelTransform() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.fsReelTransform, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**小奖 */;
        _proto.playPrizeSmallwin = function playPrizeSmallwin() {
          var arr = ["", "01", "02", "03", "04", "05", "06", "07"];
          var index = Math.floor(Math.random() * arr.length);
          index = index > arr.length - 1 ? arr.length - 1 : index;
          var str = EEFFECT.prizeSmallwin + arr[index];
          tgx.AudioMgr.inst.audio.playEffect(str, ModuleDef.SLOTS_WILDBANDITO);
        }
        /**中等奖励 */;
        _proto.playPrizeMedwinCounting = function playPrizeMedwinCounting() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeMedwinCounting, ModuleDef.SLOTS_WILDBANDITO, function () {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeMedwinEnd, ModuleDef.SLOTS_WILDBANDITO);
          });
        }
        /**幸运模式开始滚动 */;
        _proto.prizeMulti = function prizeMulti(index) {
          var arr = ["01", "02", "03", "04", "05"];
          index = index ? index : 0;
          index = index < 0 ? 0 : index;
          index = index > arr.length - 1 ? arr.length - 1 : index;
          var str = EEFFECT.prizeMulti + arr[index];
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeMultiGunSwitch, ModuleDef.SLOTS_WILDBANDITO, function () {
            tgx.AudioMgr.inst.audio.playEffect(str, ModuleDef.SLOTS_WILDBANDITO);
          });
        };
        _proto.playBigwin = function playBigwin() {
          var _this3 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_WILDBANDITO).then(function (value) {
            _this3.bigwinId = value;
          });
        };
        _proto.playBigwinEnd = function playBigwinEnd() {
          var _this4 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinId, EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_WILDBANDITO);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_end, ModuleDef.SLOTS_WILDBANDITO).then(function (value) {
            _this4.bigwinEndId = value;
          });
        };
        _proto.stopBigwinEnd = function stopBigwinEnd() {
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinEndId, EEFFECT.bgm_bigwin_end, ModuleDef.SLOTS_WILDBANDITO);
        };
        _proto.playTotalwin = function playTotalwin() {
          var _this5 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.prizeTotalwinInfobar, ModuleDef.SLOTS_WILDBANDITO, function () {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_totalwin_main, ModuleDef.SLOTS_WILDBANDITO).then(function (value) {
              _this5.totalId = value;
            });
          });
        };
        _proto.playTotalwinEnd = function playTotalwinEnd() {
          var _this6 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.totalId, EEFFECT.bgm_totalwin_main, ModuleDef.SLOTS_WILDBANDITO);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_totalwin_end, ModuleDef.SLOTS_WILDBANDITO).then(function (value) {
            _this6.totalEndId = value;
          });
        };
        _proto.stopTotalwinEnd = function stopTotalwinEnd() {
          tgx.AudioMgr.inst.audio.stopEffect(this.totalEndId, EEFFECT.bgm_totalwin_end, ModuleDef.SLOTS_WILDBANDITO);
        };
        return wildbanditoAudio;
      }(Component)) || _class));
      var EEFFECT = exports('EEFFECT', /*#__PURE__*/function (EEFFECT) {
        EEFFECT["fastspin"] = "sound/general_extract/fastspin";
        EEFFECT["fsFswon"] = "sound/general_extract/fsFswon";
        EEFFECT["fsFswonIncrease"] = "sound/general_extract/fsFswonIncrease";
        EEFFECT["fsLoadingVox"] = "sound/general_extract/fsLoadingVox";
        EEFFECT["fsReelTransform"] = "sound/general_extract/fsReelTransform";
        EEFFECT["prizeSmallwin"] = "sound/general_extract/prizeSmallwinVox";
        EEFFECT["prizeMedwinCounting"] = "sound/general_extract/prizeMedwinCounting";
        EEFFECT["prizeMedwinEnd"] = "sound/general_extract/prizeMedwinEnd";
        EEFFECT["prizeMulti"] = "sound/general_extract/prizeMulti";
        EEFFECT["prizeMultiGunSwitch"] = "sound/general_extract/prizeMultiGunSwitch";
        EEFFECT["prizeTotalwinInfobar"] = "sound/general_extract/prizeTotalwinInfobar";
        EEFFECT["reelActiveLoop"] = "sound/general_extract/reelActiveLoop";
        EEFFECT["spinBtn"] = "sound/general_extract/spinBtn";
        EEFFECT["reelStopNormal"] = "sound/general_extract/reelStopNormal";
        EEFFECT["reelStopQuick"] = "sound/general_extract/reelStopQuick";
        EEFFECT["symWild"] = "sound/general_extract/symWild";
        EEFFECT["symScatter"] = "sound/general_extract/symScatter";
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

System.register("chunks:///_virtual/wildbanditoBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './wildbanditoGun.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, SpriteFrame, Node, Prefab, macro, instantiate, Color, Vec3, tween, Label, Component, wildbanditoGun, wildbandito;
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
      Prefab = module.Prefab;
      macro = module.macro;
      instantiate = module.instantiate;
      Color = module.Color;
      Vec3 = module.Vec3;
      tween = module.tween;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      wildbanditoGun = module.wildbanditoGun;
    }, function (module) {
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "6a46fojFHRMoawmlZdMHB4z", "wildbanditoBg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoBg = exports('wildbanditoBg', (_dec = ccclass('wildbanditoBg'), _dec2 = property({
        type: Sprite,
        tooltip: "顶部背景"
      }), _dec3 = property({
        type: [SpriteFrame],
        tooltip: "顶部背景"
      }), _dec4 = property({
        type: Sprite,
        tooltip: "桌面背景"
      }), _dec5 = property({
        type: [SpriteFrame],
        tooltip: "桌面背景"
      }), _dec6 = property({
        type: wildbanditoGun,
        tooltip: "手枪"
      }), _dec7 = property({
        type: Node,
        tooltip: "蜡烛"
      }), _dec8 = property({
        type: Sprite,
        tooltip: "底部背景"
      }), _dec9 = property({
        type: [SpriteFrame],
        tooltip: "底部背景"
      }), _dec10 = property({
        type: Prefab,
        tooltip: "彩带"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoBg, _Component);
        function wildbanditoBg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "top", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tops", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "desk", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "desks", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gun", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "candle", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "downBg", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "downBgs", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ambient", _descriptor9, _assertThisInitialized(_this));
          /**辛运模式 */
          _this._fortune = void 0;
          _this._freeTimes = void 0;
          _this.colors = ["#fcfc4d", "#e859de", "#eb2c4c", "#f244e1"];
          return _this;
        }
        var _proto = wildbanditoBg.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.createAmbient();
        };
        _proto.init = function init() {};
        _proto.createAmbient = function createAmbient() {
          this.schedule(this.ambientFactory, 0.5, macro.REPEAT_FOREVER);
        };
        /**彩带工厂 自产自销*/
        _proto.ambientFactory = function ambientFactory() {
          var sp = instantiate(this.ambient).getComponent(Sprite);
          sp.node.parent = this.node.parent;
          sp.node.setSiblingIndex(sp.node.parent.children.length - 2);
          var index = Math.floor(this.colors.length * Math.random());
          if (index == this.colors.length) {
            index = this.colors.length - 1;
          }
          sp.color = new Color(this.colors[index]);
          sp.node.angle = 360 * Math.random();
          var startPos = new Vec3();
          startPos.x = -600 + Math.random() * 900;
          startPos.y = 900;
          var endPos = new Vec3();
          endPos.x = startPos.x + 500 + 200 * Math.random();
          endPos.y = -900;
          sp.node.position = startPos;
          tween(sp.node).to(3 + 5 * Math.random(), {
            position: endPos
          }).call(function () {
            sp.node.destroy();
          }).start();
        };
        _createClass(wildbanditoBg, [{
          key: "fortune",
          get: function get() {
            return this._fortune;
          },
          set: function set(v) {
            if (v) {
              wildbandito.main.audio.playBgm(1);
            } else {
              wildbandito.main.audio.playBgm(0);
            }
            this._fortune = v;
            this.gun.fortune = v;
            if (v) {
              this.top.node.y = 250;
              this.top.spriteFrame = this.tops[1];
              this.desk.spriteFrame = this.desks[1];
              this.downBg.spriteFrame = this.downBgs[1];
              wildbandito.slotCtrl.coin_panel.y = -644;
            } else {
              this.top.node.y = 325;
              this.top.spriteFrame = this.tops[0];
              this.desk.spriteFrame = this.desks[0];
              this.downBg.spriteFrame = this.downBgs[0];
              wildbandito.slotCtrl.coin_panel.y = -402;
            }
            this.candle.active = v;
            wildbandito.slotCtrl.betting_panel.active = !v;
          }
        }, {
          key: "freeTimes",
          get: function get() {
            return this._freeTimes;
          },
          set: function set(v) {
            this._freeTimes = v;
            var freeNode = this.downBg.node.getChildByName("free");
            freeNode.active = v >= 0;
            var numNode = freeNode.getChildByName("num");
            numNode.active = v > 0;
            numNode.getComponent(Label).string = v + "";
            var lastNode = freeNode.getChildByName("last");
            lastNode.active = v == 0;
          }
        }]);
        return wildbanditoBg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tops", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "desk", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "desks", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gun", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "candle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "downBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "downBgs", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ambient", [_dec10], {
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

System.register("chunks:///_virtual/wildbanditoBigwin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './LanguageSprite.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, SpriteFrame, Node, Animation, Label, Vec3, macro, tween, Component, Num, LanguageSprite, wildbandito;
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
      Animation = module.Animation;
      Label = module.Label;
      Vec3 = module.Vec3;
      macro = module.macro;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageSprite = module.LanguageSprite;
    }, function (module) {
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "699b9fHe0JJv6F2EmEDSbiC", "wildbanditoBigwin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoBigwin = exports('wildbanditoBigwin', (_dec = ccclass('wildbanditoBigwin'), _dec2 = property({
        type: Sprite,
        tooltip: ""
      }), _dec3 = property({
        type: Sprite,
        tooltip: ""
      }), _dec4 = property({
        type: [SpriteFrame],
        tooltip: ""
      }), _dec5 = property({
        type: [SpriteFrame],
        tooltip: ""
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec7 = property({
        type: Animation,
        tooltip: ""
      }), _dec8 = property({
        type: Animation,
        tooltip: ""
      }), _dec9 = property({
        type: Label,
        tooltip: "coin label"
      }), _dec10 = property({
        type: LanguageSprite,
        tooltip: ""
      }), _dec11 = property({
        type: Animation,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoBigwin, _Component);
        function wildbanditoBigwin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "man", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwinBoard", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mans", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwinBoards", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trim", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ambientL", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ambientR", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinBw", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "screenIn", _descriptor10, _assertThisInitialized(_this));
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
        var _proto = wildbanditoBigwin.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          wildbandito.bigwin = this;
          this.init();
        };
        _proto.init = function init() {
          this.coin = 0;
          this.coinLabel.string = "0";
          this.node.active = false;
          this.bigWinBw.dataID = "bw";
          this.bigWinBw.node.scale = new Vec3(1, 1);
        };
        _proto.bigwincoin = function bigwincoin(coin) {
          wildbandito.main.audio.playBigwin();
          this.node.active = true;
          this.coin = coin;
          this.screenIn.play();
          this.playBigWinCoin();
        };
        _proto.playBigWinCoin = function playBigWinCoin() {
          var coin = this.coin;
          this.node.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.coinLabel.string = Num.exchangeToThousands(wildbandito.exchangeRate, this.addcoin);
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
            this.coinLabel.string = Num.exchangeToThousands(wildbandito.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          wildbandito.main.audio.playBigwinEnd();
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          this.coinLabel.string = Num.exchangeToThousands(wildbandito.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 5);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= wildbandito.betSum * 35 && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= wildbandito.betSum * 15 && coin < wildbandito.betSum * 35 && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (coin < wildbandito.betSum * 15 && this.bigBn == false) {
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
          this.bigWinBw.dataID = "bw";
          this.ambientL.play();
          this.ambientR.play();
          this.trim.children[0].active = true;
          this.trim.children[1].active = false;
          this.trim.children[2].active = false;
          this.bigwinBoard.spriteFrame = this.bigwinBoards[0];
          this.man.node.scale = new Vec3(1, 1);
          this.man.spriteFrame = this.mans[0];
          tween(this.man.node).to(20, {
            scale: new Vec3(1.5, 1.5)
          }).start();
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin(coin) {
          this.bigWinBw.dataID = "mw";
          this.ambientL.play();
          this.ambientR.play();
          this.trim.children[0].active = false;
          this.trim.children[1].active = true;
          this.trim.children[2].active = false;
          this.bigwinBoard.spriteFrame = this.bigwinBoards[1];
          this.man.node.scale = new Vec3(1, 1);
          this.man.spriteFrame = this.mans[1];
          tween(this.man.node).to(20, {
            scale: new Vec3(1.5, 1.5)
          }).start();
        }

        //大奖MegaWin动画
        ;

        _proto.playAnim_MegaWin = function playAnim_MegaWin(coin) {
          this.bigWinBw.dataID = "smw";
          this.ambientL.play();
          this.ambientR.play();
          this.trim.children[0].active = false;
          this.trim.children[1].active = false;
          this.trim.children[2].active = true;
          this.bigwinBoard.spriteFrame = this.bigwinBoards[2];
          this.man.node.scale = new Vec3(1, 1);
          this.man.spriteFrame = this.mans[2];
          tween(this.man.node).to(20, {
            scale: new Vec3(1.5, 1.5)
          }).start();
        };
        _proto.closeBigWin = function closeBigWin() {
          this.unschedule(this.closeBigWin);
          wildbandito.main.audio.stopBigwinEnd();
          wildbandito.main.closeBigWin();
          if (this.node.active) {
            // wildbandito.main.audio.stopbigwinmain();
            this.node.active = false;
            this.init();
          }
        };
        _createClass(wildbanditoBigwin, [{
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
        return wildbanditoBigwin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "man", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bigwinBoard", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mans", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bigwinBoards", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "trim", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ambientL", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ambientR", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bigWinBw", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "screenIn", [_dec11], {
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

System.register("chunks:///_virtual/wildbanditoDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './wildbanditoSymbol.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, ESHOWTYPE, wildbanditoSymbol, ESYMBOLID, wildbandito;
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
      wildbanditoSymbol = module.wildbanditoSymbol;
      ESYMBOLID = module.ESYMBOLID;
    }, function (module) {
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "c0910YH7UxC8rqNhnza39zC", "wildbanditoDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [["1", "3", "6"], ["1", "3", "6"], ["2", "4", "10"], ["3", "5", "12"], ["3", "5", "12"], ["5", "10", "15"], ["6", "15", "30"], ["8", "20", "40"], ["10", "25", "50"]];
      var wildbanditoDetail = exports('wildbanditoDetail', (_dec = ccclass('wildbanditoDetail'), _dec2 = property({
        type: Node,
        tooltip: "背景板"
      }), _dec3 = property({
        type: wildbanditoSymbol,
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
        _inheritsLoose(wildbanditoDetail, _Component);
        function wildbanditoDetail() {
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
        var _proto = wildbanditoDetail.prototype;
        _proto.init = function init(symbol) {
          var _this2 = this;
          var symbolId = symbol.symbolId;
          var reelIndex = symbol.reelDate.index;
          this.symbol.goldBn = symbol.goldBn;
          var idx = symbolId - 1;
          this.symbol.onClick = function () {
            _this2.onClick();
          };
          this.symbol.symbolId = symbolId;
          this.symbol.showType = ESHOWTYPE.ske;
          this.symbol.spawn();
          if (symbolId == ESYMBOLID.wild || symbolId == ESYMBOLID.scatter) {
            this.bg.w = 380;
            this.numNode.active = false;
            this.specialNode.active = true;
            this.specialNode.children[0].active = symbolId == ESYMBOLID.scatter;
            this.specialNode.children[1].active = !this.specialNode.children[0].active;
          } else {
            this.bg.w = 330;
            this.numNode.active = true;
            this.specialNode.active = false;
            var strs = GAME_COMBINATIONS[idx];
            for (var i = 0; i < strs.length; i++) {
              this.nums[i].string = strs[i];
            }
          }
          if (reelIndex <= 2) {
            this.bg.x = -90;
            this.bg.scale_x = 1;
            this.numNode.x = 130;
            this.specialNode.x = 170;
          } else {
            this.bg.x = 90;
            this.bg.scale_x = -1;
            this.numNode.x = -150;
            this.specialNode.x = -170;
          }
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
          var symbols = wildbandito.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
          }
        };
        return wildbanditoDetail;
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

System.register("chunks:///_virtual/wildbanditoFreeEnd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cWildbandito.ts', './labNumShow.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Label, Node, Vec3, tween, macro, instantiate, Component, wildbandito, labNumShow;
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
      Label = module.Label;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      macro = module.macro;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      wildbandito = module.wildbandito;
    }, function (module) {
      labNumShow = module.labNumShow;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "c1296Vmz7FJjomK+B5+isP+", "wildbanditoFreeEnd", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoFreeEnd = exports('wildbanditoFreeEnd', (_dec = ccclass('wildbanditoFreeEnd'), _dec2 = property({
        type: Prefab,
        tooltip: "金币预制体"
      }), _dec3 = property({
        type: Label,
        tooltip: "免费次数"
      }), _dec4 = property({
        type: Node,
        tooltip: "金额"
      }), _dec5 = property({
        type: Node,
        tooltip: "入场光效"
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoFreeEnd, _Component);
        function wildbanditoFreeEnd() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "count", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor5, _assertThisInitialized(_this));
          /**金币工厂 自产自销*/
          _this.coinNum = 0;
          return _this;
        }
        var _proto = wildbanditoFreeEnd.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.setParent = function setParent(coin) {
          var _this2 = this;
          wildbandito.main.audio.playTotalwin();
          this.node.parent = wildbandito.slotCtrl.node;
          this.createCoins();
          this.coin.parent.scale = new Vec3(0.1, 0.1);
          var coinNum = this.coin.getComponent(labNumShow);
          coinNum.num = 0;
          this.light.active = true;
          this.light.opacity = 255;
          tween(this.light).to(0.4, {
            opacity: 0
          }).start();
          this.btn.active = false;
          tween(this.coin.parent).delay(0.4).call(function () {
            _this2.bindCoin(coin);
          }).to(1, {
            scale: new Vec3(1, 1)
          }).start();
        };
        _proto.bindCoin = function bindCoin(coin) {
          var coinNum = this.coin.getComponent(labNumShow);
          tween(coinNum).to(4, {
            num: coin * 100
          }).call(this.showBtn, this).start();
        };
        _proto.showBtn = function showBtn() {
          wildbandito.main.audio.playTotalwinEnd();
          this.btn.active = true;
          this.btn.scale = new Vec3(0.1, 0.1);
          tween(this.btn).to(0.5, {
            scale: new Vec3(1.3, 1.3)
          }).start();
          this.scheduleOnce(this.close, 5);
        };
        _proto.createCoins = function createCoins() {
          this.schedule(this.coinFactory, 0.2, macro.REPEAT_FOREVER);
        };
        _proto.coinFactory = function coinFactory() {
          var _this3 = this;
          var node = instantiate(this.coinPb);
          node.parent = this.node;
          this.coinNum++;
          node.setSiblingIndex(Math.random() > 0.5 ? this.coinNum + 1 : 0 + Math.floor(2 * Math.random()));
          var startPos = new Vec3();
          startPos.x = -500 + Math.random() * 1000;
          startPos.y = 1000;
          var endPos = new Vec3();
          endPos.x = startPos.x;
          endPos.y = -1000;
          node.position = startPos;
          tween(node).to(5, {
            position: endPos
          }).call(function () {
            node.parent = null;
            _this3.coinNum--;
          }).start();
        };
        _proto.close = function close() {
          this.node.parent = null;
          wildbandito.main.bg.freeTimes = -1;
          wildbandito.main.bg.fortune = false;
          wildbandito.main.bg.gun.curNum = 1;
          wildbandito.main.playRollOver();
        };
        _proto.onClose = function onClose() {
          if (this.btn.active) {
            this.close();
            wildbandito.main.audio.playFswonIncrease();
            wildbandito.main.audio.stopTotalwinEnd();
          }
        };
        return wildbanditoFreeEnd;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec6], {
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

System.register("chunks:///_virtual/wildbanditoFreeStart.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, tween, Vec3, Component, wildbandito;
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
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "67f90TKRehFC77P+RMQGobD", "wildbanditoFreeStart", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoFreeStart = exports('wildbanditoFreeStart', (_dec = ccclass('wildbanditoFreeStart'), _dec2 = property({
        type: Label,
        tooltip: "免费次数"
      }), _dec3 = property({
        type: Node,
        tooltip: "免费次数"
      }), _dec4 = property({
        type: Node,
        tooltip: "黄光"
      }), _dec5 = property({
        type: Label,
        tooltip: ""
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoFreeStart, _Component);
        function wildbanditoFreeStart() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "count", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "man", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yellowLight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progress", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor5, _assertThisInitialized(_this));
          /**是否显示按钮 */
          _this._showBtnBn = false;
          return _this;
        }
        var _proto = wildbanditoFreeStart.prototype;
        _proto.onLoad = function onLoad() {
          this.showBtnBn = false;
          this.progress.string = "0";
        };
        _proto.start = function start() {};
        _proto.doProgress = function doProgress() {
          var _this2 = this;
          tween(this.progress).to(1, {
            string: "100"
          }).call(function () {
            _this2.showBtnBn = true;
          }).start();
        };
        _proto.setParent = function setParent() {
          wildbandito.main.audio.playFsLoadingVox();
          this.node.parent = wildbandito.slotCtrl.node;
          this.node.setSiblingIndex(this.node.parent.children.length - 2);
          this.doProgress();
          var initManx = this.man.x;
          this.man.x -= 100;
          this.man.opacity = 0;
          tween(this.man).to(0.5, {
            opacity: 255,
            x: initManx
          }).by(5, {
            scale: new Vec3(0.2, 0.2),
            position: new Vec3(20, 20)
          }).start();
          this.yellowLight.active = true;
          tween(this.yellowLight).to(0.5, {
            opacity: 0
          }).start();
          this.scheduleOnce(this.close, 5);
          this.count.string = 12 + "";
          wildbandito.main.bg.fortune = true;
          wildbandito.main.bg.freeTimes = wildbandito.round.freeCount;
        };
        _proto.close = function close() {
          this.node.parent = null;
          wildbandito.main.freeStartBack();
        };
        _proto.onClose = function onClose() {
          if (this.showBtnBn) {
            this.close();
            wildbandito.main.audio.playFswonIncrease();
          }
        };
        _createClass(wildbanditoFreeStart, [{
          key: "showBtnBn",
          get: function get() {
            return this._showBtnBn;
          },
          set: function set(v) {
            if (v && v != this._showBtnBn) {
              this.btn.active = true;
              this.btn.scale = new Vec3(0, 0);
              tween(this.btn).to(0.5, {
                scale: new Vec3(1.3, 1.3)
              }).start();
            }
            this._showBtnBn = v;
            this.progress.node.active = !v;
            this.btn.active = v;
            if (v && this.node.parent) {
              this.node.setSiblingIndex(this.node.parent.children.length - 1);
            }
          }
        }]);
        return wildbanditoFreeStart;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "man", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yellowLight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec6], {
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

System.register("chunks:///_virtual/wildbanditoGun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './wildbanditoGunNum.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Sprite, SpriteFrame, instantiate, Vec3, tween, Component, wildbanditoGunNum, wildbandito;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      wildbanditoGunNum = module.wildbanditoGunNum;
    }, function (module) {
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "9b8cdPbnRtH5IlWbuNtdj3s", "wildbanditoGun", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoGun = exports('wildbanditoGun', (_dec = ccclass('wildbanditoGun'), _dec2 = property({
        type: Prefab,
        tooltip: "子弹数字"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "滚轮光效"
      }), _dec4 = property({
        type: [SpriteFrame],
        tooltip: "滚轮光效"
      }), _dec5 = property({
        type: Sprite,
        tooltip: "滚轮"
      }), _dec6 = property({
        type: [SpriteFrame],
        tooltip: "滚轮"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoGun, _Component);
        function wildbanditoGun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gunNum", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lights", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunScroll", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunScrolls", _descriptor5, _assertThisInitialized(_this));
          _this.oneAngle = 60;
          /**模糊态 */
          _this._blurBn = false;
          /**辛运模式 */
          _this._fortune = false;
          /**滚轮数字 */
          _this.gunNums = [];
          _this.gunNumsLen = 6;
          _this._curNum = 1;
          return _this;
        }
        var _proto = wildbanditoGun.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.createGunNum();
        };
        _proto.createGunNum = function createGunNum() {
          for (var i = 0; i < this.gunNumsLen; i++) {
            var gunNum = instantiate(this.gunNum).getComponent(wildbanditoGunNum);
            gunNum.numId = i;
            gunNum.gunScroll = this.gunScroll.node;
            gunNum.node.parent = this.node;
          }
        };
        _createClass(wildbanditoGun, [{
          key: "blurBn",
          get: function get() {
            return this._blurBn;
          },
          set: function set(v) {
            if (this.fortune || this._blurBn == v) return;
            this._blurBn = v;
            if (v) {
              this.gunScroll.spriteFrame = this.gunScrolls[0];
              this.gunScroll.node.scale = new Vec3(1.75, 1.75);
            } else {
              this.gunScroll.spriteFrame = this.gunScrolls[1];
              this.gunScroll.node.scale = new Vec3(1, 1);
            }
          }
        }, {
          key: "fortune",
          get: function get() {
            return this._fortune;
          },
          set: function set(v) {
            this._fortune = v;
            if (v) {
              this.gunScroll.spriteFrame = this.gunScrolls[2];
              this.light.spriteFrame = this.lights[1];
            } else {
              this.gunScroll.spriteFrame = this.gunScrolls[1];
              this.light.spriteFrame = this.lights[0];
            }
          }
        }, {
          key: "curNum",
          get: function get() {
            return this._curNum;
          },
          set: function set(v) {
            var _this2 = this;
            wildbandito.main.audio.prizeMulti(v - 1);
            this.blurBn = Math.abs(v - this._curNum) > 1;
            this._curNum = v;
            tween(this.gunScroll.node).to(1, {
              angle: (this._curNum - 1) * this.oneAngle
            }).call(function () {
              _this2.blurBn = false;
            }).start();
          }
        }]);
        return wildbanditoGun;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gunNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lights", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gunScroll", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gunScrolls", [_dec6], {
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

System.register("chunks:///_virtual/wildbanditoGunNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Label, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9868bZ1DYlMjLRWaJvg1lmu", "wildbanditoGunNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoGunNum = exports('wildbanditoGunNum', (_dec = ccclass('wildbanditoGunNum'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoGunNum, _Component);
        function wildbanditoGunNum() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.numId = 0;
          _this.gunScroll = null;
          /**偏移角度，提早60度做数字变更 */
          _this.offsetA = 60;
          /**位置半径 */
          _this.R = 160;
          _this._curAngle = 0;
          _this._num = 0;
          return _this;
        }
        var _proto = wildbanditoGunNum.prototype;
        /**
         *              1(90)
         *      0（150）         2（30）
         * 
         *      5（-150）        3（-30）
         *              4（-90）
         */
        _proto.getAngle = function getAngle() {
          return 30 * (5 - 2 * this.numId) + this.gunScroll.angle;
        }

        /**角度转弧度 */;
        _proto.changeRadian = function changeRadian(v) {
          return v / 180 * Math.PI;
        };
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          if (!this.gunScroll) return;
          this.curAngle = this.getAngle();
        };
        _createClass(wildbanditoGunNum, [{
          key: "curAngle",
          get: function get() {
            return this._curAngle;
          },
          set: function set(v) {
            this._curAngle = v;
            this.node.x = Math.cos(this.changeRadian(v)) * this.R;
            this.node.y = Math.sin(this.changeRadian(v)) * this.R;
            this.num = Math.floor((v + this.offsetA) / 360) * 6 + this.numId;
          }
        }, {
          key: "label",
          get: function get() {
            return this.node.getComponent(Label);
          }
        }, {
          key: "num",
          get: function get() {
            return this._num;
          },
          set: function set(v) {
            this._num = v;
            if (v) {
              this.label.string = "x" + v;
            } else {
              this.label.string = "∞";
            }
          }
        }]);
        return wildbanditoGunNum;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/wildbanditoInfoBoard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cWildbandito.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Animation, tween, Vec3, Label, Component, wildbandito, Num;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      wildbandito = module.wildbandito;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "1f41d00lXVC16XBhy/zigas", "wildbanditoInfoBoard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoInfoBoard = exports('wildbanditoInfoBoard', (_dec = ccclass('wildbanditoInfoBoard'), _dec2 = property({
        type: [Node],
        tooltip: "底板背景"
      }), _dec3 = property({
        type: [Node],
        tooltip: "左挡板"
      }), _dec4 = property({
        type: [Node],
        tooltip: "右挡板"
      }), _dec5 = property({
        type: Node,
        tooltip: "消息跑马灯"
      }), _dec6 = property({
        type: Node,
        tooltip: "赢钱信息"
      }), _dec7 = property({
        type: Animation,
        tooltip: "彩带动画A"
      }), _dec8 = property({
        type: Animation,
        tooltip: "彩带动画B"
      }), _dec9 = property({
        type: Node,
        tooltip: "光"
      }), _dec10 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoInfoBoard, _Component);
        function wildbanditoInfoBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LMasks", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "RMasks", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infos", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoWin", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ambientA", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ambientB", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgBGun", _descriptor9, _assertThisInitialized(_this));
          _this._lev = 0;
          /**是否显示跑马灯 */
          _this._showInfosBn = false;
          /**是否显示共赢得 */
          _this._showTwBn = false;
          return _this;
        }
        var _proto = wildbanditoInfoBoard.prototype;
        _proto.onLoad = function onLoad() {
          wildbandito.infoBoard = this;
        };
        _proto.start = function start() {
          this.light.active = false;
        };
        /**winNode label */
        _proto.playAnimWin = function playAnimWin(coin, showTwBn, playBn) {
          if (showTwBn === void 0) {
            showTwBn = false;
          }
          if (playBn === void 0) {
            playBn = true;
          }
          if (coin == 0) return;
          this.showInfosBn = false;
          this.showTwBn = showTwBn;
          if (coin > wildbandito.betSum * 3 && coin < wildbandito.betSum * 5) {
            this.lev = 1;
          } else if (coin >= wildbandito.betSum * 5) {
            this.lev = 2;
          } else {
            this.lev = 0;
          }
          this.getWinLab().string = Num.exchangeToThousands(wildbandito.exchangeRate, coin);
          if (playBn) {
            this.playAni();
          }
        };
        _proto.playAni = function playAni() {
          var _this2 = this;
          if (this.lev == 2) return;
          this.light.active = true;
          this.scheduleOnce(function () {
            tween(_this2.light).to(0.5, {
              scale: new Vec3(0.1, 0.1),
              opacity: 0
            }).call(function () {
              _this2.light.active = false;
              _this2.light.opacity = 255;
              _this2.light.scale = new Vec3(1, 1);
            }).start();
          }, 0.5);
          tween(this.infoWin).to(0.2, {
            scale: new Vec3(1.2, 1.2)
          }).to(0.2, {
            scale: new Vec3(1, 1)
          }).start();
          if (this.lev == 0) {
            this.bgs[0].getChildByName("eyeL").active = true;
            this.bgs[0].getChildByName("eyeR").active = true;
            this.scheduleOnce(function () {
              tween(_this2.bgs[0].getChildByName("eyeL")).to(0.5, {
                opacity: 0
              }).call(function () {
                _this2.bgs[0].getChildByName("eyeL").active = false;
                _this2.bgs[0].getChildByName("eyeL").opacity = 255;
              }).start();
              tween(_this2.bgs[0].getChildByName("eyeR")).to(0.5, {
                opacity: 0
              }).call(function () {
                _this2.bgs[0].getChildByName("eyeR").active = false;
                _this2.bgs[0].getChildByName("eyeR").opacity = 255;
              }).start();
            }, 1);
            this.ambientA.play();
          }
          if (this.lev == 1) {
            this.bgs[1].getChildByName("eyeL").active = true;
            this.bgs[1].getChildByName("eyeR").active = true;
            this.scheduleOnce(function () {
              tween(_this2.bgs[1].getChildByName("eyeL")).to(0.5, {
                opacity: 0
              }).call(function () {
                _this2.bgs[1].getChildByName("eyeL").active = false;
                _this2.bgs[1].getChildByName("eyeL").opacity = 255;
              }).start();
              tween(_this2.bgs[1].getChildByName("eyeR")).to(0.5, {
                opacity: 0
              }).call(function () {
                _this2.bgs[1].getChildByName("eyeR").active = false;
                _this2.bgs[1].getChildByName("eyeR").opacity = 255;
              }).start();
            }, 1);
            this.ambientB.play();
            tween(this.bgBGun.children[0]).to(0.2, {
              angle: 10
            }).to(0.2, {
              angle: 0
            }).start();
            tween(this.bgBGun.children[1]).to(0.2, {
              angle: -10
            }).to(0.2, {
              angle: 0
            }).start();
          }
        };
        _proto.getWinLab = function getWinLab() {
          return this.infoWin.getChildByName("Label").getComponent(Label);
        };
        _createClass(wildbanditoInfoBoard, [{
          key: "lev",
          get: function get() {
            return this._lev;
          },
          set: function set(v) {
            this._lev = v;
            this.bgs[0].active = v == 0;
            this.bgs[1].active = v == 1;
            this.bgs[2].active = v == 2;
            this.LMasks[0].active = v == 0;
            this.LMasks[1].active = v == 1;
            this.LMasks[2].active = v == 2;
            this.RMasks[0].active = v == 0;
            this.RMasks[1].active = v == 1;
            this.RMasks[2].active = v == 2;
            this.bgs[0].getChildByName("eyeL").active = false;
            this.bgs[0].getChildByName("eyeR").active = false;
            this.bgs[1].getChildByName("eyeL").active = false;
            this.bgs[1].getChildByName("eyeR").active = false;
            this.bgBGun.active = this.bgs[1].active;
          }
        }, {
          key: "showInfosBn",
          get: function get() {
            return this._showInfosBn;
          },
          set: function set(v) {
            if (this._showInfosBn != v && v) {
              this.lev = 0;
            }
            this._showInfosBn = v;
            this.infos.active = v;
            this.infoWin.active = !v;
          }
        }, {
          key: "showTwBn",
          get: function get() {
            return this._showTwBn;
          },
          set: function set(v) {
            this._showTwBn = v;
            this.infoWin.getChildByName("info_win").active = !v;
            this.infoWin.getChildByName("info_tw").active = v;
          }
        }]);
        return wildbanditoInfoBoard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "LMasks", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "RMasks", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "infoWin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ambientA", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ambientB", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bgBGun", [_dec10], {
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

System.register("chunks:///_virtual/wildbanditoMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cWildbandito.ts', './wildbanditoBg.ts', './wildbanditoFreeStart.ts', './wildbanditoFreeEnd.ts', './RoomMgr.ts', './UIHelp.ts', './NetGameServer.ts', './SubGameDef.ts', './LanguageData.ts', './dataChange12.ts', './wildbanditoDetail.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, tween, Vec3, Label, instantiate, Button, Component, wildbandito, wildbanditoBg, wildbanditoFreeStart, wildbanditoFreeEnd, RoomMgr, UIHelp, UIhelpParam, gameNet, SubGameDef, LanguageData, dataChange, wildbanditoDetail;
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
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
      Label = module.Label;
      instantiate = module.instantiate;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      wildbandito = module.wildbandito;
    }, function (module) {
      wildbanditoBg = module.wildbanditoBg;
    }, function (module) {
      wildbanditoFreeStart = module.wildbanditoFreeStart;
    }, function (module) {
      wildbanditoFreeEnd = module.wildbanditoFreeEnd;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      dataChange = module.dataChange;
    }, function (module) {
      wildbanditoDetail = module.wildbanditoDetail;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "39d4fAxytxH9a1thGjVuLa7", "wildbanditoMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoMain = exports('wildbanditoMain', (_dec = ccclass('wildbanditoMain'), _dec2 = property({
        type: Prefab,
        tooltip: "免费开始"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "免费结束"
      }), _dec4 = property({
        type: Prefab,
        tooltip: ""
      }), _dec5 = property({
        type: wildbanditoBg,
        tooltip: "背景"
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoMain, _Component);
        function wildbanditoMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "freeStart", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeEnd", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor5, _assertThisInitialized(_this));
          _this.audio = null;
          _this.delayClick = false;
          /**滚轮回调，所有滚轮滚动完毕触发 */
          _this.rollCallBackBn = false;
          return _this;
        }
        var _proto = wildbanditoMain.prototype;
        _proto.onLoad = function onLoad() {
          wildbandito.main = this;
          this.audio = this.node.getComponent('wildbanditoAudio');
        };
        _proto.start = function start() {
          this.bg.fortune = false;
          wildbandito.infoBoard.lev = 0;
          wildbandito.infoBoard.showInfosBn = true;
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
              wildbandito.lastmoneyPanel.showPanel();
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
                    wildbandito.main.close();
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
          if (this.delayClick || wildbandito.rollEnable == false) {
            return;
          }
          if (!wildbandito.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this2.delayClick = false;
            }, 1);
            if (wildbandito.status == 0) {
              wildbandito.status = 2;
              this.sendRoll();
            } else if (wildbandito.status == 1) {
              wildbandito.slotCtrl.setSpinAnim(3);
              this.stopImmediately(wildbandito.result.rounds[0].symbols, function () {
                _this2.rollCallBack();
              });
            }
          }
        };
        _proto.add = function add() {
          if (wildbandito.auto) {
            return;
          }
          wildbandito.sumIdx += 1;
          wildbandito.sumIdx = wildbandito.slotCtrl.updateBet(wildbandito.sumIdx) == 0 ? wildbandito.sumIdx - 1 : wildbandito.sumIdx;
          tween(wildbandito.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.dec = function dec() {
          if (wildbandito.auto) {
            return;
          }
          wildbandito.sumIdx -= 1;
          wildbandito.sumIdx = wildbandito.slotCtrl.updateBet(wildbandito.sumIdx) == 0 ? wildbandito.sumIdx + 1 : wildbandito.sumIdx;
          tween(wildbandito.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.startAuto = function startAuto(n) {
          if (this.delayClick) {
            return;
          }
          if (wildbandito.status == 0) {
            wildbandito.auto = true;
            wildbandito.autoTimes = n;
            wildbandito.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            // (((wildbandito.slotCtrl.Btn_stopAuto as Node).children[1] as Node).getComponent(Label) as Label).string = n + "";
            if (n > 999) {
              wildbandito.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
              wildbandito.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              wildbandito.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
              wildbandito.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              wildbandito.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
              wildbandito.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(1, 1, 1);
            }
            wildbandito.slotCtrl.Btn_stopAuto.active = wildbandito.auto;
            wildbandito.slotCtrl.Btn_start.active = !wildbandito.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1.5);
          }
        };
        _proto.stopAuto = function stopAuto() {
          wildbandito.auto = false;
          wildbandito.autoTimes = 0;
        };
        _proto.rollCallBack = function rollCallBack() {
          var _this3 = this;
          if (this.rollCallBackBn) {
            return;
          }
          wildbandito.status = 0;
          this.rollCallBackBn = true;
          this.scheduleOnce(function () {
            _this3.rollCallBackBn = false;
          }, 1);
          wildbandito.reel.removeRadom();
          if (wildbandito.result.winCoin > 0) {
            wildbandito.slotCtrl.setSpinAnim(3);
          } else {
            wildbandito.slotCtrl.setSpinAnim(2);
          }
          this.scheduleOnce(function () {
            var arr = wildbandito.reel.getSymbols;
            for (var i = 0; i < arr.length; i++) {
              arr[i].spawn();
            }
            _this3.roundShow();
          }, 1);
        };
        _proto.roundShow = function roundShow() {
          var round = wildbandito.round;
          if (round.removeItems.length > 0) {
            this.showRemove();
          } else {
            this.settlement();
          }
        };
        _proto.showRemove = function showRemove() {
          var remove = wildbandito.round.removeItems;
          if (remove.length > 1) {
            var arr = wildbandito.reel.getSymbols;
            for (var i = 0; i < remove.length; i++) {
              var index = remove[i];
              arr[index].playWin();
            }
            if (wildbandito.round.winCoin > 0) {
              wildbandito.infoBoard.playAnimWin(wildbandito.round.winCoin, false);
            }
            this.scheduleOnce(this.doRemove, 3);
          } else {
            this.settlement();
          }
        };
        _proto.doRemove = function doRemove() {
          this.bg.gun.curNum = wildbandito.round.mul;
          wildbandito.reel.drop();
        };
        _proto.dropBack = function dropBack() {
          this.doNext();
        };
        _proto.settlement = function settlement() {
          this.roundSM();
        };
        _proto.roundSM = function roundSM() {
          if (wildbandito.round.winCoin > 0) {
            wildbandito.infoBoard.playAnimWin(wildbandito.round.winCoin, false);
            this.scheduleOnce(this.roundSMNext, 3);
          } else {
            this.roundSMNext();
          }
        };
        _proto.roundSMNext = function roundSMNext() {
          if (wildbandito.roundIndex >= wildbandito.result.rounds.length - 1) {
            if (wildbandito.result.winCoin > 0) {
              if (wildbandito.result.winCoin < 5 * wildbandito.betSum) {
                if (wildbandito.result.winCoin <= 3 * wildbandito.betSum) {
                  wildbandito.main.audio.playPrizeSmallwin();
                } else {
                  wildbandito.main.audio.playPrizeMedwinCounting();
                }
                wildbandito.infoBoard.playAnimWin(wildbandito.round.winCoin, true);
                this.scheduleOnce(this.doRoundSMNext, 2);
              } else {
                wildbandito.bigwin.bigwincoin(wildbandito.result.winCoin);
              }
            } else {
              this.doRoundSMNext();
            }
          }
        };
        _proto.doRoundSMNext = function doRoundSMNext() {
          if (wildbandito.resultIndex == 0 && wildbandito.roundIndex == wildbandito.result.rounds.length - 1 && wildbandito.lotteryRes.results.length > 1) {
            var freeStart = instantiate(this.freeStart).getComponent(wildbanditoFreeStart);
            freeStart.setParent();
          } else {
            if (wildbandito.round.addItems.length == 0) {
              this.doNext();
            }
          }
        };
        _proto.freeStartBack = function freeStartBack() {
          this.doNext();
        };
        _proto.doNext = function doNext() {
          if (wildbandito.roundIndex < wildbandito.result.rounds.length - 1) {
            this.doNextRound();
          } else {
            this.doNextResult();
          }
        }

        //继续下回合表现
        ;

        _proto.doNextRound = function doNextRound() {
          wildbandito.roundIndex++;
          this.roundShow();
        }

        //当前次数回合数据表现完毕，进入下一次摇奖表现
        ;

        _proto.doNextResult = function doNextResult() {
          var _this4 = this;
          wildbandito.infoBoard.showInfosBn = true;
          wildbandito.roundIndex = 0;
          wildbandito.resultIndex++;
          if (wildbandito.playOverBn) {
            if (wildbandito.lotteryRes.results.length == 1) {
              this.playRollOver();
            } else {
              var free = instantiate(this.freeEnd).getComponent(wildbanditoFreeEnd);
              free.setParent(wildbandito.lotteryRes.winCoin);
            }
            return;
          }
          wildbandito.main.bg.freeTimes = wildbandito.result.leftFreeCount - 1;
          wildbandito.reel.loop();
          var delay = 0;
          if (wildbandito.showFreeLoopAni) {
            delay = 3;
          } else {
            delay = 1;
          }
          this.scheduleOnce(function () {
            wildbandito.reel.loopEnd(wildbandito.round.symbols, wildbandito.round.golds, function () {
              _this4.rollCallBack();
            });
          }, delay);
        };
        _proto.closeBigWin = function closeBigWin() {
          if (wildbandito.resultIndex == 0 && wildbandito.roundIndex == wildbandito.result.rounds.length - 1 && wildbandito.lotteryRes.results.length > 1) {
            var freeStart = instantiate(this.freeStart).getComponent(wildbanditoFreeStart);
            freeStart.setParent();
          } else {
            this.doNext();
          }
        }

        /**单次滚动完成结算 */;
        _proto.playRollOver = function playRollOver() {
          this.rollComplete();
          this.doAuto();
        };
        _proto.doAuto = function doAuto() {
          if (wildbandito.auto && wildbandito.autoTimes > 0) {
            this.sendRoll();
          }
        }
        /**滚动完成 */;
        _proto.rollComplete = function rollComplete() {
          wildbandito.status = 0;
          wildbandito.slotCtrl.setSpinAnim(0);
          this.addDetailListener();
        };
        _proto.roll = function roll(list, golds) {
          var _this5 = this;
          if (!wildbandito.auto) {
            wildbandito.rollEnable = true;
          }
          wildbandito.status = 1;
          this.scheduleOnce(function () {
            wildbandito.reel.loopEnd(list, golds, function () {
              _this5.rollCallBack();
            });
          }, 0.5);
        };
        _proto.sendRoll = function sendRoll() {
          this.initRoll();
          wildbandito.autoTimes = wildbandito.autoTimes > 0 ? wildbandito.autoTimes - 1 : 0;
          if (wildbandito.autoTimes == 0) {
            wildbandito.auto = false;
          }
          wildbandito.slotCtrl.setSpinAnim(1);
          var autoTimesLab = wildbandito.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = wildbandito.autoTimes + "";
          // this.audio.playclickstart();
          if (wildbandito.autoTimes > 999) {
            wildbandito.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
          } else if (wildbandito.autoTimes > 99) {
            wildbandito.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
          } else {
            wildbandito.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
          }
          wildbandito.reel.loop();
          this.sendLottery();
        };
        _proto.firstSymbolOver = function firstSymbolOver() {
          wildbandito.reel.spawn();
          this.addDetailListener();
        };
        _proto.addDetailListener = function addDetailListener() {
          var symbols = wildbandito.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.node.getComponent(Button).interactable = true;
          }
        };
        _proto.removeDetailListener = function removeDetailListener() {
          var symbols = wildbandito.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
            symbol.node.getComponent(Button).interactable = false;
          }
          var detail = wildbandito.detail;
          if (detail) detail.node.active = false;
        };
        _proto.addDetail = function addDetail(s) {
          if (!wildbandito.rollEnable) return;
          var detail = wildbandito.detail;
          if (!detail) {
            detail = instantiate(this.detailPb).getComponent(wildbanditoDetail);
            detail.node.parent = this.node;
            wildbandito.detail = detail;
          }
          detail.node.active = true;
          var symbols = wildbandito.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            if (symbol.poolId != s.poolId) {
              symbol.darkBn = true;
            }
          }
          detail.node.position = s.node.position;
          detail.node.y += wildbandito.reel.node.parent.parent.y;
          detail.init(s);
        }

        /**每次滚动初始化场景 */;
        _proto.initRoll = function initRoll() {
          this.removeDetailListener();
          wildbandito.infoBoard.showInfosBn = true;
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.PlayMatch3(SubGameDef.SLOTS_WILDBANDITO, wildbandito.betSum + "");
                case 2:
                  retSpin = _context2.sent;
                  this.lotteryBack(retSpin);
                case 4:
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
          var _this6 = this;
          if (data && data.isSucc) {
            console.log(data.res);
            this.exchange(data.res);
            console.log(wildbandito.lotteryRes);
            wildbandito.resultIndex = 0;
            wildbandito.roundIndex = 0;
            if (wildbandito.slotCtrl.isSpeed) {
              this.roll(wildbandito.round.symbols, wildbandito.round.golds);
            } else {
              this.scheduleOnce(function () {
                _this6.roll(wildbandito.round.symbols, wildbandito.round.golds);
              }, 1);
            }
          }
        };
        _proto.exchange = function exchange(data) {
          var res = dataChange.change(data);
          wildbandito.lotteryRes = res;
        };
        _proto.stopImmediately = function stopImmediately(arr, callBack) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          if (!wildbandito.auto) {
            wildbandito.reel.stopImmediately(arr, callBack);
          }
        };
        _proto.close = function close() {};
        return wildbanditoMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "freeStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "freeEnd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "detailPb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec6], {
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

System.register("chunks:///_virtual/wildbanditoReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cWildbandito.ts', './baseReel.ts', './baseSymbol.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodePool, Vec3, tween, wildbandito, ETYPE, baseReel, baseSymbol, Logger;
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
      wildbandito = module.wildbandito;
    }, function (module) {
      ETYPE = module.ETYPE;
      baseReel = module.baseReel;
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bc50ef+tNRM/5NuPOvQJ+G5", "wildbanditoReel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // const FIRSTITEM: number[] = [
      //     1, 7, 3, 2, 6,
      //     8, 9, 8, 11, 5,
      //     2, 10, 3, 7, 10,
      //     8, 9, 11, 8, 5,
      //     1, 7, 3, 2, 6
      // ];
      var FIRSTITEM = [1, 8, 2, 8, 1, 7, 9, 10, 9, 7, 3, 11, 3, 8, 3, 2, 8, 7, 11, 2, 6, 5, 10, 5, 6];
      var FIRSTITEMBG = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
      var wildbanditoReel = exports('wildbanditoReel', (_dec = ccclass('wildbanditoReel'), _dec(_class = /*#__PURE__*/function (_baseReel) {
        _inheritsLoose(wildbanditoReel, _baseReel);
        function wildbanditoReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseReel.call.apply(_baseReel, [this].concat(args)) || this;
          _this.disTime = 0.1;
          return _this;
        }
        var _proto = wildbanditoReel.prototype;
        _proto.start = function start() {
          wildbandito.reel = this;
          this.radomIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9];
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
            headPos: new Vec3(-300, -300),
            vector: 700,
            symbols: [],
            "switch": false
          }, {
            index: 1,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(-150, -300),
            vector: 700,
            symbols: [],
            "switch": false
          }, {
            index: 2,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(0, -300),
            vector: 700,
            symbols: [],
            "switch": false
          }, {
            index: 3,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(150, -300),
            vector: 700,
            symbols: [],
            "switch": false
          }, {
            index: 4,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(300, -300),
            vector: 700,
            symbols: [],
            "switch": false
          }];
          this.bindResult(FIRSTITEM);
          var arr = this.getSymbols;
          for (var i = 0; i < FIRSTITEMBG.length; i++) {
            var bn = FIRSTITEMBG[i] == 1;
            arr[i].goldBn = bn;
          }
          wildbandito.main.firstSymbolOver();
        };
        /**启动循环播放 */
        _proto.loop = function loop() {
          var _this2 = this;
          wildbandito.main.audio.playReelLoop(wildbandito.slotCtrl.isSpeed);
          var _loop = function _loop(i) {
            var r = _this2.reelDates[i];
            var disTime = wildbandito.slotCtrl.isSpeed ? 0 : _this2.disTime * i;
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
        _proto.loopEnd = function loopEnd(arr, golds, callback) {
          var _this4 = this;
          if (callback === void 0) {
            callback = function callback() {};
          }
          if (wildbandito.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          if (wildbandito.slotCtrl.isSpeed == false) {
            var _loop2 = function _loop2() {
              var r = _this4.reelDates[i];
              var disTime = _this4.disTime * i;
              _this4.scheduleOnce(function () {
                var symbols = _this4.bindResultOne(r, arr, function () {
                  var cb = function cb() {
                    callback();
                    wildbandito.main.audio.playReelEnd(false);
                  };
                  _this4.rebound(r, false, cb);
                });
                _this4.addGold(r, symbols, golds);
              }, disTime);
            };
            for (var i = 0; i < this.reelDates.length; i++) {
              _loop2();
            }
          } else {
            this.bindResult(arr, function () {
              callback();
              wildbandito.main.audio.playReelEnd(true);
            }, function (symbol, index) {
              symbol.goldBn = golds[index] == 1;
            });
          }
        };
        _proto.addGold = function addGold(r, symbols, golds) {
          var num = r.num;
          for (var j = 0; j < num; j++) {
            var gold = golds[this.arrIndex[r.index] + j];
            var symbol = symbols[j];
            symbol.goldBn = gold == 1;
          }
        }

        /**消除中奖之后执行下落 */;
        _proto.drop = function drop() {
          var removes = wildbandito.round.removeItems;
          var symbols = this.getSymbols;
          if (removes.length > 0) {
            wildbandito.removeCount = 0;
            for (var i = 0; i < removes.length; i++) {
              var remove = removes[i];
              var symbol = symbols[remove];
              if (symbol) {
                symbol.playBoom();
              } else {
                Logger.error("消除位置不存在roundIndex：" + wildbandito.roundIndex + "index:" + remove);
              }
            }
          }
        };
        _proto.doAdd = function doAdd() {
          wildbandito.removeCount = undefined;
          this.addItems();
        };
        _proto.addItems = function addItems() {
          this.removeUnuseAll();
          var arr = [5, 5, 5, 5, 5];
          var addItems = wildbandito.round.addItems;
          for (var i = 0; i < addItems.length; i++) {
            var addItem = addItems[i];
            var r = this.reelDates[addItem.rindex];
            var symbol = this.pushSymbol(r, addItem.id);
            symbol.aimBn = true;
            symbol.bindAimPos(arr[addItem.rindex]);
            symbol.goldBn = addItem.gold == 1;
            arr[addItem.rindex]++;
          }
          this.scheduleOnce(this.playDrop, 1);
        };
        _proto.playDrop = function playDrop() {
          for (var i = 0; i < this.reelDates.length; i++) {
            var r = this.reelDates[i];
            for (var j = 0; j < r.symbols.length; j++) {
              var symbol = r.symbols[j];
              this.dropAim(symbol);
            }
          }
          this.scheduleOnce(function () {
            wildbandito.main.dropBack();
          }, 1);
        };
        _proto.dropAim = function dropAim(symbol) {
          if (Math.abs(symbol.aimPos - symbol.node.y) > 1) {
            tween(symbol.node).to(0.2, {
              y: symbol.aimPos
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
        _proto.spawn = function spawn() {
          var symbols = this.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.spawn();
          }
        };
        return wildbanditoReel;
      }(baseReel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/wildbanditoSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './LanguageData.ts', './cWildbandito.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, Num, LanguageData, wildbandito, UserMgr;
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
      LanguageData = module.LanguageData;
    }, function (module) {
      wildbandito = module.wildbandito;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;
      cclegacy._RF.push({}, "ecea3Xgvx1KjLXaf//epOpC", "wildbanditoSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var wildbanditoSlotCtrl = exports('wildbanditoSlotCtrl', (_dec = ccclass('wildbanditoSlotCtrl'), _dec2 = property({
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
        type: Node,
        tooltip: "状态节点"
      }), _dec19 = property({
        type: Node,
        tooltip: "提示文字"
      }), _dec20 = property({
        type: Node,
        tooltip: "音乐"
      }), _dec21 = property({
        type: SpriteFrame,
        tooltip: "sp_settingControl"
      }), _dec22 = property({
        type: Node,
        tooltip: "极速"
      }), _dec23 = property({
        type: SpriteFrame,
        tooltip: "sp_speed"
      }), _dec24 = property({
        type: SpriteFrame,
        tooltip: "sp2_speed"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wildbanditoSlotCtrl, _Component);
        function wildbanditoSlotCtrl() {
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
          _initializerDefineProperty(_this, "stateNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicBtn", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_settingControl", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedBtn", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_speed", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp2_speed", _descriptor23, _assertThisInitialized(_this));
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
        var _proto = wildbanditoSlotCtrl.prototype;
        _proto.onLoad = function onLoad() {
          wildbandito.slotCtrl = this;
          wildbandito.money = UserMgr.inst.coin;
          this.initBetContent(wildbandito.BETNUM, wildbandito.BET, wildbandito.LINES);
          this.updateBet(wildbandito.sumIdx);
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
        };
        _proto.btnRollTouchStart = function btnRollTouchStart() {
          if (!wildbandito.rollEnable) {
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
          if (!wildbandito.rollEnable) {
            return;
          }
          wildbandito.main.onCLick(e, 'roll');
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
          wildbandito.main.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(wildbandito.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.money);
          this.initBetContent(wildbandito.BETNUM, wildbandito.BET, wildbandito.LINES);
          this.bindBet();
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
          if (!wildbandito.betNum) {
            wildbandito.sumIdx = 0;
            wildbandito.betNum = this.sumList[wildbandito.sumIdx];
          } else {
            wildbandito.sumIdx = this.sumList.indexOf(wildbandito.betNum);
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
          wildbandito.main.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          wildbandito.autoPanel.showPanel();
        }

        //打开设置界面
        ;

        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          // wildbandito.main.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", wildbandito.main.node);
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
          var footer = find("ui_footer/ui_footer_a", wildbandito.main.node);
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
            wildbandito.betPanel.hidePanel();
          } else {
            wildbandito.betPanel.showPanel();
            wildbandito.betPanel.bindBet();
          }
        }

        //声音选项
        ;

        _proto.onCLick_sound = function onCLick_sound(event) {
          this.settingControlButtonClick_Function();
        }

        //选择自动次数
        ;

        _proto.onCLick_chooseAutoNum = function onCLick_chooseAutoNum(event, args) {}

        //设置极速模式
        ;

        _proto.onCLick_speed = function onCLick_speed() {
          // wildbandito.main.audio.playclickopen();
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
          wildbandito.sumIdx = this.sumList.indexOf(wildbandito.betSum);
          this.updateBet(wildbandito.sumIdx);
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
          if (wildbandito.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (wildbandito.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (wildbandito.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (wildbandito.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          wildbandito.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.betSum);
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
          // (wildbandito.main.winNode.children[0].getComponent(Label) as Label).string = Num.exchangeToThousands(wildbandito.exchangeRate, coin);
          this.winCoin_lab.string = Num.exchangeToThousands(wildbandito.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(wildbandito.exchangeRate, wildbandito.lotteryRes.winCoin - wildbandito.lotteryRes.winCoin + coin);
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
          // let node: Node = wildbandito.main.winNode;
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
              wildbandito.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !wildbandito.auto && this.setButtonState(true);
              if (wildbandito.lotteryRes && wildbandito.lotteryRes.winCoin == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              wildbandito.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(wildbandito.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              wildbandito.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              wildbandito.rollEnable = false;
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
        _createClass(wildbanditoSlotCtrl, [{
          key: "winPlayOverBn",
          get: function get() {
            return this._winPlayOverBn;
          },
          set: function set(v) {
            this._winPlayOverBn = v;
          }
        }]);
        return wildbanditoSlotCtrl;
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
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "stateNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "musicBtn", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "sp_settingControl", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "speedBtn", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "sp_speed", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "sp2_speed", [_dec24], {
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

System.register("chunks:///_virtual/wildbanditoSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './cWildbandito.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, instantiate, Animation, ESHOWTYPE, baseSymbol, wildbandito;
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
      instantiate = module.instantiate;
      Animation = module.Animation;
    }, function (module) {
      ESHOWTYPE = module.ESHOWTYPE;
      baseSymbol = module.baseSymbol;
    }, function (module) {
      wildbandito = module.wildbandito;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "065bdsucDRCRJE6dUPHXqXY", "wildbanditoSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wildbanditoSymbol = exports('wildbanditoSymbol', (_dec = ccclass('wildbanditoSymbol'), _dec2 = property({
        type: Prefab,
        tooltip: "爆炸消失动画"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "爆炸消失动画"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "枪刷光"
      }), _dec5 = property({
        type: Node,
        tooltip: "选中态"
      }), _dec6 = property({
        type: Node,
        tooltip: "金框符号"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_baseSymbol) {
        _inheritsLoose(wildbanditoSymbol, _baseSymbol);
        function wildbanditoSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseSymbol.call.apply(_baseSymbol, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boom", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildboom", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunLight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "select", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor5, _assertThisInitialized(_this));
          /**是否显示金框符号*/
          _this._goldBn = false;
          _this._selectBn = false;
          return _this;
        }
        var _proto = wildbanditoSymbol.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.unuse = function unuse() {
          this.goldBn = false;
          this.selectBn = false;
          _baseSymbol.prototype.unuse.call(this);
        };
        /**消除行为 */
        _proto.playBoom = function playBoom() {
          var _this2 = this;
          if (this.selectBn == false) return;
          var ani;
          if (this.changeBn()) {
            this.goldBn = false;
            this.symbolId = ESYMBOLID.wild;
            this.showType = ESHOWTYPE.ske;
            this.playAni(ESYMBOLANI.spawn, false);
            this.addAni(ESYMBOLANI.idle, true);
            ani = instantiate(this.wildboom).getComponent(Animation);
            ani.node.parent = this.node.parent.parent;
            ani.node.x = this.node.parent.x;
            ani.node.y = this.node.y;
            var gunAni = instantiate(this.gunLight).getComponent(Animation);
            gunAni.node.parent = this.node.parent.parent;
            gunAni.node.x = this.node.parent.x;
            gunAni.node.y = this.node.y;
            gunAni.on("finished", function () {
              ani.node.parent = null;
              gunAni.node.parent = null;
            });
          } else {
            ani = instantiate(this.boom).getComponent(Animation);
            ani.node.parent = this.node.parent;
            ani.node.x = this.node.x;
            ani.node.y = this.node.y;
            ani.on("finished", function () {
              _this2.recover();
              wildbandito.removeCount++;
              if (wildbandito.removeCount >= wildbandito.round.addItems.length) _this2.scheduleOnce(function () {
                wildbandito.reel.doAdd();
              }, 0.1);
            }, this);
          }
          ani.play();
        }

        /**判断是否可以变更为wild */;
        _proto.changeBn = function changeBn() {
          return this.goldBn && this.symbolId != ESYMBOLID.wild;
        }

        /**滚动停止调用 播放wild出场动画*/;
        _proto.spawn = function spawn() {
          if (this.symbolId != ESYMBOLID.wild && this.symbolId != ESYMBOLID.scatter) return;
          this.showType = ESHOWTYPE.ske;
          this.playAni(ESYMBOLANI.spawn, false);
          this.addAni(ESYMBOLANI.idle, true);
          if (this.symbolId == ESYMBOLID.wild) {
            wildbandito.main.audio.playSpawnWild();
          }
          if (this.symbolId == ESYMBOLID.scatter) {
            wildbandito.main.audio.playSpawnScatter();
          }
        }
        /**播放中奖 */;
        _proto.playWin = function playWin() {
          this.showType = ESHOWTYPE.ske;
          this.playAni(ESYMBOLANI.win, true);
          this.selectBn = true;
        };
        _proto.onClick = function onClick(e) {
          wildbandito.main.addDetail(this);
        };
        _createClass(wildbanditoSymbol, [{
          key: "goldBn",
          get: function get() {
            return this._goldBn;
          },
          set: function set(v) {
            this._goldBn = v;
            this.gold.active = v;
          }
        }, {
          key: "selectBn",
          get: function get() {
            return this._selectBn;
          },
          set: function set(v) {
            this._selectBn = v;
            this.select.active = v;
          }
        }]);
        return wildbanditoSymbol;
      }(baseSymbol), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wildboom", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gunLight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ESYMBOLID = exports('ESYMBOLID', /*#__PURE__*/function (ESYMBOLID) {
        ESYMBOLID[ESYMBOLID["null"] = 0] = "null";
        ESYMBOLID[ESYMBOLID["ten"] = 1] = "ten";
        ESYMBOLID[ESYMBOLID["J"] = 2] = "J";
        ESYMBOLID[ESYMBOLID["Q"] = 3] = "Q";
        ESYMBOLID[ESYMBOLID["K"] = 4] = "K";
        ESYMBOLID[ESYMBOLID["A"] = 5] = "A";
        ESYMBOLID[ESYMBOLID["maraca"] = 6] = "maraca";
        ESYMBOLID[ESYMBOLID["tea"] = 7] = "tea";
        ESYMBOLID[ESYMBOLID["guitar"] = 8] = "guitar";
        ESYMBOLID[ESYMBOLID["man"] = 9] = "man";
        ESYMBOLID[ESYMBOLID["wild"] = 10] = "wild";
        ESYMBOLID[ESYMBOLID["scatter"] = 11] = "scatter";
        return ESYMBOLID;
      }({}));
      var ESYMBOLANI = exports('ESYMBOLANI', /*#__PURE__*/function (ESYMBOLANI) {
        ESYMBOLANI["win"] = "win";
        ESYMBOLANI["idle"] = "idle";
        ESYMBOLANI["spawn"] = "spawn";
        return ESYMBOLANI;
      }({})); //wild 入场动画
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_wildBandito', 'chunks:///_virtual/module_slots_wildBandito'); 
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