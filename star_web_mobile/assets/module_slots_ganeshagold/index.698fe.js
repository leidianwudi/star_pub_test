System.register("chunks:///_virtual/autoPanel3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cGaneshagold.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, Num, ganeshagold;
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
      ganeshagold = module.ganeshagold;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "dca72xD+7ZMQ5p1LOszN+mq", "autoPanel", undefined);
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
          ganeshagold.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.money);
          this.lblCurBet.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.betSum);
          this.winCoin_lab.string = ganeshagold.slotCtrl.winLab.string;
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
            ganeshagold.main.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // ganeshagold.main.audio.playclickopen();
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
          // ganeshagold.main.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "d2ab8ZdvgtE36aEeySLTo2s", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './betNum4.ts', './cGaneshagold.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, Num, betNum, ganeshagold;
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
      ganeshagold = module.ganeshagold;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "7b2f9lB75FOqoeS8ockjrdF", "betPanel", undefined);
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
          ganeshagold.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = ganeshagold.BETNUM;
          this.betList = ganeshagold.BET;
          this.line = ganeshagold.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.money);
          this.lblCurBet.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.betSum);
          this.winCoin_lab.string = ganeshagold.slotCtrl.winLab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(ganeshagold.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(ganeshagold.exchangeRate, sumList[_i3]);
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
          ganeshagold.betNum = this.tempi;
          ganeshagold.bet = this.tempj;
          ganeshagold.sumIdx = this.tempindex;
          ganeshagold.betSum = this.sumList[ganeshagold.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.betSum);
          ganeshagold.slotCtrl.betLab.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(ganeshagold.sumIdx);
          this.val3 = ganeshagold.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // ganeshagold.main.audio.playclickopen();
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
          // ganeshagold.main.audio.playclickclose();
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

System.register("chunks:///_virtual/cGaneshagold.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange3.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b9652MVNYpCUJ+K4kUBh1vS", "cGaneshagold", undefined);
      var cGaneshagold = /*#__PURE__*/function () {
        function cGaneshagold() {
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          this.main = null;
          this.audio = null;
          this.slotCtrl = null;
          this.detail = null;
          this.bet = 0;
          this.betNum = 0;
          this.sumIdx = 0;
          this.freeStart = null;
          this.freeEnd = null;
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
          this.bg = null;
          this.reel = null;
          this.infoBoard = null;
          this.bigwin = null;
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
          /**摇奖次数index */
          this._resultIndex = 0;
          this._fortuneBn = false;
        }
        var _proto = cGaneshagold.prototype;
        _proto.clear = function clear() {
          this.main.node.destroy();
          this.rollEnable = true;
          this.status = ESTATE.stop;
          this.slotCtrl = undefined;
          this.reel = undefined;
          this.bg = undefined;
          this.infoBoard = undefined;
          this.bigwin = undefined;
          this.detail = undefined;
        };
        _createClass(cGaneshagold, [{
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
          /**摇奖次数数据 */
        }, {
          key: "result",
          get: function get() {
            return this.lotteryRes.results[this.resultIndex];
          }
        }, {
          key: "fortuneBn",
          get: function get() {
            return this.resultIndex > 0;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cGaneshagold();
            }
            return this._instance;
          }
        }]);
        return cGaneshagold;
      }();
      cGaneshagold._instance = null;
      var ganeshagold = exports('ganeshagold', cGaneshagold.instance);
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

System.register("chunks:///_virtual/dataChange3.ts", ['cc', './ganeshagoldSymbol.ts'], function (exports) {
  var cclegacy, ESYMBOLID;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d92a9a3EZVHHY0dEn0Ls20f", "dataChange", undefined);
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
            var round = result.rounds[0];
            tempResult.winCoin = Number(round.payout);
            tempResult.mul = round.multipliers && round.multipliers.length == 2 ? Number(round.multipliers[0]) : 1;
            tempResult.mulProgress = round.multipliers && round.multipliers.length == 2 ? Number(round.multipliers[1]) : 1;
            tempResult.freeCount = Number(round.freeCount);
            tempResult.symbols = this.symbolsChange(round.symbols);
            tempResult.removeItems = this.removeChange(round.paySymbols);
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
        }

        /**
         *  2,5,8,11,14,
         *  1,4,7,10,13,
         *  0,3,6,9,12]
         */;
        dataChange.posToIndex = function posToIndex(pos) {
          return (pos.reel - 1) * 3 + pos.row - 1;
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            J: ESYMBOLID.J,
            Q: ESYMBOLID.Q,
            K: ESYMBOLID.K,
            A: ESYMBOLID.A,
            rice: ESYMBOLID.powder,
            basket: ESYMBOLID.flower,
            light: ESYMBOLID.diya,
            woman: ESYMBOLID.lady,
            scatter: ESYMBOLID.scatter,
            wildcard: ESYMBOLID.wild
          };
          return (_idMap$curid = idMap[curid]) != null ? _idMap$curid : ESYMBOLID["null"];
        };
        return dataChange;
      }());

      //clientRes
      dataChange.BETNUM = [1, 4, 20];
      //单注值
      dataChange.LINES = 30;
      //线数
      dataChange.BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ganeshagoldAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8c99bqxbPdMCrYGH1feTRqr", "ganeshagoldAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldAudio = exports('ganeshagoldAudio', (_dec = ccclass('ganeshagoldAudio'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldAudio, _Component);
        function ganeshagoldAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.urlArr = ["sound/bgm_mg", "sound/bgm_fs_main"];
          _this.fortuneBn = void 0;
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
        var _proto = ganeshagoldAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.playBgm = function playBgm(fortuneBn) {
          var _this2 = this;
          if (this.fortuneBn == fortuneBn) return;
          this.fortuneBn = fortuneBn;
          tgx.AudioMgr.inst.audio.stopMusic();
          if (fortuneBn) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_fs_intro, ModuleDef.SLOTS_GANESHAGOLD, function () {
              tgx.AudioMgr.inst.audio.playMusicLoop(_this2.urlArr[1], ModuleDef.SLOTS_GANESHAGOLD);
            });
          } else {
            tgx.AudioMgr.inst.audio.playMusicLoop(this.urlArr[0], ModuleDef.SLOTS_GANESHAGOLD);
          }
        }

        /**滚动开始 */;
        _proto.playReelLoop = function playReelLoop() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinBtn, ModuleDef.SLOTS_GANESHAGOLD);
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
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinStopQuick, ModuleDef.SLOTS_GANESHAGOLD);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.spinStop, ModuleDef.SLOTS_GANESHAGOLD);
          }
        }
        /**spawn wild */;
        _proto.playSpawnWild = function playSpawnWild() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symWild, ModuleDef.SLOTS_GANESHAGOLD);
        }
        /**spawn Scatter */;
        _proto.playSpawnScatter = function playSpawnScatter() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symScatter, ModuleDef.SLOTS_GANESHAGOLD);
        };
        _proto.playBigwin = function playBigwin() {
          var _this4 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_GANESHAGOLD).then(function (value) {
            _this4.bigwinId = value;
          });
        };
        _proto.playBigwinEnd = function playBigwinEnd() {
          var _this5 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinId, EEFFECT.bgm_bigwin_main, ModuleDef.SLOTS_GANESHAGOLD);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_end, ModuleDef.SLOTS_GANESHAGOLD).then(function (value) {
            _this5.bigwinEndId = value;
          });
        };
        _proto.stopBigwinEnd = function stopBigwinEnd() {
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinEndId, EEFFECT.bgm_bigwin_end, ModuleDef.SLOTS_GANESHAGOLD);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_bigwin_out, ModuleDef.SLOTS_GANESHAGOLD);
        };
        _proto.playTotalwin = function playTotalwin() {
          var _this6 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_totalwin_main, ModuleDef.SLOTS_GANESHAGOLD).then(function (value) {
            _this6.totalId = value;
          });
        };
        _proto.playTotalwinEnd = function playTotalwinEnd() {
          var _this7 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.totalId, EEFFECT.bgm_totalwin_main, ModuleDef.SLOTS_GANESHAGOLD);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgm_totalwin_end, ModuleDef.SLOTS_GANESHAGOLD).then(function (value) {
            _this7.totalEndId = value;
          });
        };
        _proto.stopTotalwinEnd = function stopTotalwinEnd() {
          tgx.AudioMgr.inst.audio.stopEffect(this.totalEndId, EEFFECT.bgm_totalwin_end, ModuleDef.SLOTS_GANESHAGOLD);
        };
        return ganeshagoldAudio;
      }(Component)) || _class));
      var EEFFECT = exports('EEFFECT', /*#__PURE__*/function (EEFFECT) {
        EEFFECT["bgm_fs_intro"] = "sound/bgm_fs_intro";
        EEFFECT["fastspinStart"] = "sound/sfxGame_extract/fastspinStart";
        EEFFECT["spinBtn"] = "sound/sfxGame_extract/spinBtn";
        EEFFECT["spinStop"] = "sound/sfxGame_extract/spinStop";
        EEFFECT["spinStopQuick"] = "sound/sfxGame_extract/spinStopQuick";
        EEFFECT["symWild"] = "sound/sfxGame_extract/symWild";
        EEFFECT["symScatter"] = "sound/sfxGame_extract/symScatter";
        EEFFECT["bgm_bigwin_main"] = "sound/bgm_bigwin_main";
        EEFFECT["bgm_bigwin_end"] = "sound/bgm_bigwin_end";
        EEFFECT["bgm_bigwin_out"] = "sound/bgm_bigwin_out";
        EEFFECT["bgm_totalwin_main"] = "sound/bgm_totalwin_main";
        EEFFECT["bgm_totalwin_end"] = "sound/bgm_totalwin_end";
        return EEFFECT;
      }({})); //共赢得结束
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ganeshagoldBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cGaneshagold.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, SpriteFrame, Node, sp, Animation, ProgressBar, Label, Font, macro, find, tween, Component, ganeshagold;
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
      sp = module.sp;
      Animation = module.Animation;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Font = module.Font;
      macro = module.macro;
      find = module.find;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "ab514vTgvZMh4Z8og0weAY5", "ganeshagoldBg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldBg = exports('ganeshagoldBg', (_dec = ccclass('ganeshagoldBg'), _dec2 = property({
        type: Sprite,
        tooltip: "背景sprite"
      }), _dec3 = property({
        type: [SpriteFrame],
        tooltip: ""
      }), _dec4 = property({
        type: Node,
        tooltip: "背光"
      }), _dec5 = property({
        type: sp.Skeleton,
        tooltip: "象财神动画"
      }), _dec6 = property({
        type: Animation,
        tooltip: "象财神动画"
      }), _dec7 = property({
        type: Node,
        tooltip: ""
      }), _dec8 = property({
        type: ProgressBar,
        tooltip: ""
      }), _dec9 = property({
        type: Node,
        tooltip: ""
      }), _dec10 = property({
        type: Label,
        tooltip: ""
      }), _dec11 = property({
        type: Node,
        tooltip: ""
      }), _dec12 = property({
        type: Node,
        tooltip: ""
      }), _dec13 = property({
        type: Label,
        tooltip: ""
      }), _dec14 = property({
        type: [Font],
        tooltip: "1为灰态"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldBg, _Component);
        function ganeshagoldBg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgs", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Backlight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ganesha", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ganeshaAni", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fortuneMul", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progress", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "barEffect", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mul", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulAimNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulAimLight", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulAim", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulFont", _descriptor13, _assertThisInitialized(_this));
          /**当前模式 */
          _this._mod = void 0;
          _this.curMul = 0;
          _this.progressMax = 3;
          _this._progressIndex = 0;
          _this.aimMul = void 0;
          _this.mulProgress = void 0;
          _this.bindMulBn = false;
          _this.k = void 0;
          return _this;
        }
        var _proto = ganeshagoldBg.prototype;
        _proto.update = function update(dt) {
          if (this.barEffect) this.barEffect.active = this.progress.progress == 0 || this.progress.progress == 1 ? false : true;
        };
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var _this2 = this;
          this.mod = EMOD.N;
          this.ganeshaAni.on("finished", function () {
            _this2.ganeshaAni.node.active = false;
            _this2.ganeshaIdle();
          });
          this.addListener();
          ganeshagold.bg = this;
        };
        _proto.addListener = function addListener() {
          var _this3 = this;
          this.ganesha.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case EGANESHAANI.win:
              case EGANESHAANI.win2:
              case EGANESHAANI.fastspinExit:
                _this3.ganeshaIdle();
                break;
              case EGANESHAANI.fastspinStart:
                _this3.playAni(EGANESHAANI.fastspinIdle);
                break;
            }
          });
        };
        _proto.ganeshaIdle = function ganeshaIdle() {
          this.unscheduleAllCallbacks();
          this.ganesha.node.active = true;
          if (this.mod == EMOD.N) {
            this.schedule(this.radomNormalIdle, 10, macro.REPEAT_FOREVER);
          } else {
            this.schedule(this.radomFortuneIdle, 10, macro.REPEAT_FOREVER);
          }
        };
        _proto.initFortuneMul = function initFortuneMul() {
          this.progress.progress = 0;
          this.curMul = 0;
          this.mul.string = "X" + (this.curMul + 2);
          this.mulAimNode.active = false;
          this.mulAim.string = "X" + 0;
          this.mul.string = "X" + 2;
        };
        _proto.bindMul = function bindMul(mul, mulProgress) {
          var _this4 = this;
          if (this.bindMulBn) return;
          this.bindMulBn = true;
          this.scheduleOnce(function () {
            _this4.bindMulBn = false;
          }, 1);
          this.aimMul = mul;
          this.mulProgress = mulProgress;
          this.doMul();
        };
        _proto.doMul = function doMul() {
          var str = this.mulAim.string;
          str = str.substring(1);
          var curMul = Number(str);
          if (curMul == this.aimMul) {
            this.progressIndex = this.mulProgress;
          } else {
            this.progressIndex = 3;
          }
        }

        /**随机待机动画 */;
        _proto.radomNormalIdle = function radomNormalIdle() {
          var id = Math.ceil(Math.random() * 4);
          if (id == 0) id = 1;
          if (id == 1) {
            this.playAni(EGANESHAANI.idle);
          } else {
            this.playAni(EGANESHAANI.idle + id);
          }
        }

        /**随机待机动画 */;
        _proto.radomFortuneIdle = function radomFortuneIdle() {
          var id = Math.ceil(Math.random() * 2);
          if (id == 0) id = 1;
          if (id == 1) {
            this.playAni(EGANESHAANI.bonusIdle);
          } else {
            this.playAni(EGANESHAANI.bonusIdle + id);
          }
        }

        /**随机赢钱动画 显示赢得金币时展示*/;
        _proto.radomWin = function radomWin() {
          var id = Math.ceil(Math.random() * 2);
          if (id == 0) id = 1;
          if (id == 1) {
            this.playAni(EGANESHAANI.win, false);
          } else {
            this.playAni(EGANESHAANI.win + id, false);
          }
        };
        _proto.fastspinStart = function fastspinStart() {
          this.playAni(EGANESHAANI.fastspinStart, false);
        };
        _proto.fastspinEnd = function fastspinEnd() {
          this.playAni(EGANESHAANI.fastspinExit, false);
        }

        /**播放   freeStart = "ganeshaFreeStart",
        freeMul = "ganeshaFreeMul",
        superWin = "ganeshaSuperWin",
        magaWin = "ganeshaMagaWin",
        bigwinBack = "ganeshaBigwinBack"*/;
        _proto.playGaneshaAni = function playGaneshaAni(str) {
          this.unscheduleAllCallbacks();
          this.ganesha.node.active = false;
          this.ganeshaAni.node.active = true;
          this.ganeshaAni.play(str);
        }

        /**播放动画 */;
        _proto.playAni = function playAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          this.ganesha.setAnimation(0, aimStr, loopBn);
        }
        /**添加动画 */;
        _proto.addAni = function addAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          this.ganesha.addAnimation(0, aimStr, loopBn);
        };
        _createClass(ganeshagoldBg, [{
          key: "mod",
          get: function get() {
            return this._mod;
          },
          set: function set(v) {
            this._mod = v;
            ganeshagold.audio.playBgm(v == EMOD.F);
            this.fortuneMul.active = v == EMOD.F;
            if (this.fortuneMul.active) {
              this.initFortuneMul();
            }
            this.bg.spriteFrame = this.bgs[v];
            find("reel_n", this.node).active = v == EMOD.N;
            find("reel_f", this.node).active = v == EMOD.F;
            this.ganeshaIdle();
            this.Backlight.active = v == EMOD.F;
            if (ganeshagold.slotCtrl) ganeshagold.slotCtrl.rollPanel.active = v == EMOD.N;
          }
        }, {
          key: "progressIndex",
          get: function get() {
            return this._progressIndex;
          },
          set: function set(v) {
            var _this5 = this;
            this._progressIndex = v;
            if (this._progressIndex > 3) {
              this._progressIndex = 0;
              //倍数变更
            }

            tween(this.progress).to(this._progressIndex * 0.3, {
              progress: 1 / this.progressMax * this._progressIndex
            }).delay(0.2).call(function () {
              _this5.scheduleOnce(function () {
                if (!_this5.mulAimNode.active) _this5.mulAimNode.active = true;
                var str;
                if (_this5.progressIndex == 3) {
                  _this5.progress.progress = 0;
                  str = _this5.mulAim.string;
                  str = str.substring(1);
                  _this5.mulAim.string = "X" + (Number(str) + 2);
                  str = _this5.mul.string;
                  str = str.substring(1);
                  _this5.mul.string = "X" + (Number(str) + 2);
                  _this5.scheduleOnce(function () {
                    _this5.doMul();
                  }, 0.3);
                } else {
                  ganeshagold.main.flyBack();
                }
              }, 0.3);
            }).start();
          }
        }]);
        return ganeshagoldBg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Backlight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ganesha", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ganeshaAni", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fortuneMul", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "barEffect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "mul", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "mulAimNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "mulAimLight", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "mulAim", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "mulFont", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      var EGANESHAANI = exports('EGANESHAANI', /*#__PURE__*/function (EGANESHAANI) {
        EGANESHAANI["idle"] = "idle";
        EGANESHAANI["idle2"] = "idle2";
        EGANESHAANI["idle3"] = "idle3";
        EGANESHAANI["idle4"] = "idle4";
        EGANESHAANI["win"] = "win";
        EGANESHAANI["win2"] = "win2";
        EGANESHAANI["bonusIdle"] = "bonus_idle";
        EGANESHAANI["bonusIdle2"] = "bonus_idle2";
        EGANESHAANI["bonusWin"] = "bonus_win";
        EGANESHAANI["bonusWin2"] = "bonus_win2";
        EGANESHAANI["fastspinExit"] = "fastspin_exit";
        EGANESHAANI["fastspinIdle"] = "fastspin_idle";
        EGANESHAANI["fastspinStart"] = "fastspin_start";
        EGANESHAANI["freeStart"] = "ganeshaFreeStart";
        EGANESHAANI["freeMul"] = "ganeshaFreeMul";
        EGANESHAANI["superWin"] = "ganeshaSuperWin";
        EGANESHAANI["magaWin"] = "ganeshaMagaWin";
        EGANESHAANI["bigwinBack"] = "ganeshaBigwinBack";
        return EGANESHAANI;
      }({}));
      var EMOD = exports('EMOD', /*#__PURE__*/function (EMOD) {
        EMOD[EMOD["N"] = 0] = "N";
        EMOD[EMOD["F"] = 1] = "F";
        return EMOD;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ganeshagoldBigwin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './LanguageSprite.ts', './cGaneshagold.ts', './bezierMove.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, Label, Vec3, macro, tween, instantiate, NodePool, Component, Num, LanguageSprite, ganeshagold, bezierMove;
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
      Label = module.Label;
      Vec3 = module.Vec3;
      macro = module.macro;
      tween = module.tween;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageSprite = module.LanguageSprite;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }, function (module) {
      bezierMove = module.bezierMove;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "cfb6cjUMVtEaaVL4AbstenI", "ganeshagoldBigwin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldBigwin = exports('ganeshagoldBigwin', (_dec = ccclass('ganeshagoldBigwin'), _dec2 = property({
        type: Prefab,
        tooltip: ""
      }), _dec3 = property({
        type: Node,
        tooltip: ""
      }), _dec4 = property({
        type: Node,
        tooltip: ""
      }), _dec5 = property({
        type: Node,
        tooltip: ""
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec7 = property({
        type: Node,
        tooltip: ""
      }), _dec8 = property({
        type: Label,
        tooltip: "coin label"
      }), _dec9 = property({
        type: LanguageSprite,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldBigwin, _Component);
        function ganeshagoldBigwin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coins", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flower1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flower2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flower3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinBw", _descriptor8, _assertThisInitialized(_this));
          //大奖数字滚动动画
          _this.aimCoin = 0;
          _this.addcoin = 0;
          _this.addOnce = 0;
          _this._playOverBn = true;
          _this._coin = 0;
          _this.bigBn = false;
          _this.superBn = false;
          _this.megaBn = false;
          _this.maxNum = 50;
          _this.disTime = 0.5;
          _this._pool = void 0;
          return _this;
        }
        var _proto = ganeshagoldBigwin.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          ganeshagold.bigwin = this;
          this.init();
        };
        _proto.init = function init() {
          this.coin = 0;
          this.coinLabel.string = "0";
          this.node.active = false;
          this.light.scale = new Vec3(1, 1);
        };
        _proto.bigwincoin = function bigwincoin(coin) {
          ganeshagold.audio.playBigwin();
          this.node.active = true;
          this.coin = coin;
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
          this.coinLabel.string = Num.exchangeToThousands(ganeshagold.exchangeRate, this.addcoin);
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
            this.coinLabel.string = Num.exchangeToThousands(ganeshagold.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.doCreate);
          this.unschedule(this.coinOneChange);
          ganeshagold.audio.playBigwinEnd();
          this.playOverBn = true;
          this.coinLabel.string = Num.exchangeToThousands(ganeshagold.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 5);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= ganeshagold.betSum * 35 && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= ganeshagold.betSum * 15 && coin < ganeshagold.betSum * 35 && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (coin < ganeshagold.betSum * 15 && this.bigBn == false) {
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
          this.bigWinBw.dataID = "win_bigwin";
          this.flower1.active = true;
          this.flower2.active = false;
          this.flower3.active = false;
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin(coin) {
          this.bigWinBw.dataID = "win_megawin";
          this.flower1.active = false;
          this.flower2.active = true;
          this.flower3.active = false;
        }

        //大奖MegaWin动画
        ;

        _proto.playAnim_MegaWin = function playAnim_MegaWin(coin) {
          this.bigWinBw.dataID = "win_superwin";
          this.createCoin();
          this.light.scale = new Vec3(1.2, 1.2);
          this.flower1.active = false;
          this.flower2.active = true;
          this.flower3.active = true;
        };
        _proto.createCoin = function createCoin() {
          this.schedule(this.doCreate, this.disTime, macro.REPEAT_FOREVER);
        };
        _proto.doCreate = function doCreate() {
          var _this2 = this;
          var num = Math.ceil(Math.random() * this.maxNum);
          var _loop = function _loop() {
            var coin = _this2.factory();
            coin.position = new Vec3(0, 0);
            coin.parent = _this2.coins;
            _this2.scheduleOnce(function () {
              _this2.coinMove(coin);
            }, Math.random() * _this2.disTime);
          };
          for (var i = 0; i < num; i++) {
            _loop();
          }
        };
        _proto.coinMove = function coinMove(coin) {
          var _this3 = this;
          var radomSize = 1 + Math.random() * 0.6;
          var radomAngle = Math.random() * 360;
          coin.angle = radomAngle;
          coin.scale = new Vec3(radomSize, radomSize);
          var endSize = Math.random() * 0.4;
          var b = coin.getComponent(bezierMove);
          if (!b) b = coin.addComponent(bezierMove);
          var radomA = Math.random() * Math.PI * 2;
          var p = new Vec3(1000 * Math.cos(radomA), 1000 * Math.sin(radomA));
          tween(coin).to(2, {
            scale: new Vec3(endSize, endSize),
            position: p
          }).call(function () {
            _this3.recover(b.node);
          }).start();
        };
        /**生产金币 */
        _proto.factory = function factory() {
          var coin = this.pool.get();
          if (!coin) {
            coin = instantiate(this.coinPb);
          }
          return coin;
        }

        /**回收 */;
        _proto.recover = function recover(coin) {
          this.pool.put(coin);
        }

        /**回收金币容器中的金币 */;
        _proto.clearCoins = function clearCoins() {
          for (var i = this.coins.children.length - 1; i >= 0; i--) {
            var coin = this.coins.children[i];
            this.recover(coin);
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          this.unschedule(this.closeBigWin);
          ganeshagold.audio.stopBigwinEnd();
          ganeshagold.main.closeBigWin();
          if (this.node.active) {
            // ganeshagold.main.audio.stopbigwinmain();
            this.init();
          }
        };
        _createClass(ganeshagoldBigwin, [{
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
        }, {
          key: "pool",
          get: function get() {
            if (!this._pool) this._pool = new NodePool();
            return this._pool;
          }
        }]);
        return ganeshagoldBigwin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coins", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flower1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "flower2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "flower3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bigWinBw", [_dec9], {
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

System.register("chunks:///_virtual/ganeshagoldDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './ganeshagoldSymbol.ts', './cGaneshagold.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, ESHOWTYPE, ganeshagoldSymbol, ESYMBOLID, ganeshagold;
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
      ganeshagoldSymbol = module.ganeshagoldSymbol;
      ESYMBOLID = module.ESYMBOLID;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "d562eYAmVFH64U0l7kmX0zF", "ganeshagoldDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [["5", "8", "15"], ["5", "8", "15"], ["8", "10", "30"], ["8", "10", "30"], ["10", "15", "45"], ["15", "30", "60"], ["20", "45", "90"], ["30", "60", "150"]];
      var ganeshagoldDetail = exports('ganeshagoldDetail', (_dec = ccclass('ganeshagoldDetail'), _dec2 = property({
        type: Node,
        tooltip: "背景板"
      }), _dec3 = property({
        type: ganeshagoldSymbol,
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
        _inheritsLoose(ganeshagoldDetail, _Component);
        function ganeshagoldDetail() {
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
        var _proto = ganeshagoldDetail.prototype;
        _proto.init = function init(symbol) {
          var symbolId = symbol.symbolId;
          var reelIndex = symbol.reelDate.index;
          var idx = symbolId - 1;
          this.symbol.symbolId = symbolId;
          this.symbol.showType = ESHOWTYPE.ske;
          this.symbol.playDetail();
          if (symbolId == ESYMBOLID.wild || symbolId == ESYMBOLID.scatter) {
            this.bg.w = 465;
            this.numNode.active = false;
            this.specialNode.active = true;
            this.specialNode.children[0].active = symbolId == ESYMBOLID.scatter;
            this.specialNode.children[1].active = !this.specialNode.children[0].active;
          } else {
            this.bg.w = 350;
            this.numNode.active = true;
            this.specialNode.active = false;
            var strs = GAME_COMBINATIONS[idx];
            for (var i = 0; i < strs.length; i++) {
              this.nums[i].string = strs[i];
            }
          }
          if (reelIndex <= 2) {
            this.bg.x = -85;
            this.bg.scale_x = 1;
            this.numNode.x = 120;
            this.specialNode.x = 220;
          } else {
            this.bg.x = 85;
            this.bg.scale_x = -1;
            this.numNode.x = -210;
            this.specialNode.x = -220;
          }
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
          ganeshagold.reel.dark.active = false;
        };
        return ganeshagoldDetail;
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

System.register("chunks:///_virtual/ganeshagoldFreeEnd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cGaneshagold.ts', './labNumShow.ts', './bezierMove.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, tween, Vec3, macro, instantiate, NodePool, Component, ganeshagold, labNumShow, bezierMove;
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
      tween = module.tween;
      Vec3 = module.Vec3;
      macro = module.macro;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      Component = module.Component;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }, function (module) {
      labNumShow = module.labNumShow;
    }, function (module) {
      bezierMove = module.bezierMove;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "76e94ahbntAAbApYRsX2a2z", "ganeshagoldFreeEnd", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldFreeEnd = exports('ganeshagoldFreeEnd', (_dec = ccclass('ganeshagoldFreeEnd'), _dec2 = property({
        type: Prefab,
        tooltip: ""
      }), _dec3 = property({
        type: Node,
        tooltip: ""
      }), _dec4 = property({
        type: labNumShow,
        tooltip: ""
      }), _dec5 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldFreeEnd, _Component);
        function ganeshagoldFreeEnd() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coins", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor4, _assertThisInitialized(_this));
          _this.aim = void 0;
          _this.maxNum = 20;
          _this.disTime = 1;
          _this._pool = void 0;
          _this.showBtnBn = false;
          return _this;
        }
        var _proto = ganeshagoldFreeEnd.prototype;
        _proto.start = function start() {
          this.node.active = false;
          ganeshagold.freeEnd = this;
          this.node.opacity = 0;
        };
        _proto.show = function show(coin) {
          ganeshagold.audio.playTotalwin();
          this.node.active = true;
          this.createCoin();
          this.aim = coin;
          this.showBtnBn = false;
          this.btn.opacity = 0;
          tween(this.node).to(0.2, {
            opacity: 255
          }).call(this.doShow, this).start();
        };
        _proto.doShow = function doShow() {
          var _this2 = this;
          this.lab.setRealNum(0);
          tween(this.lab).to(5, {
            num: this.aim * 100
          }).call(function () {
            _this2.unschedule(_this2.doCreate);
            ganeshagold.audio.playTotalwinEnd();
            tween(_this2.btn).to(0.4, {
              opacity: 255,
              scale: new Vec3(1.2, 1.2)
            }).to(0.2, {
              scale: new Vec3(1, 1)
            }).call(function () {
              _this2.showBtnBn = true;
              _this2.scheduleOnce(_this2.hide, 5);
            }).start();
          }).start();
        };
        _proto.createCoin = function createCoin() {
          this.schedule(this.doCreate, this.disTime, macro.REPEAT_FOREVER);
        };
        _proto.doCreate = function doCreate() {
          var _this3 = this;
          var num = Math.ceil(Math.random() * this.maxNum);
          var _loop = function _loop() {
            var coin = _this3.factory();
            coin.position = new Vec3(0, 0);
            coin.parent = _this3.coins;
            _this3.scheduleOnce(function () {
              _this3.coinMove(coin);
            }, Math.random() * _this3.disTime);
          };
          for (var i = 0; i < num; i++) {
            _loop();
          }
        };
        _proto.coinMove = function coinMove(coin) {
          var _this4 = this;
          var radomSize = 0.4 + Math.random() * 0.6;
          var radomAngle = Math.random() * 360;
          coin.angle = radomAngle;
          coin.scale = new Vec3(radomSize, radomSize);
          var b = coin.getComponent(bezierMove);
          if (!b) b = coin.addComponent(bezierMove);
          var topNum = 500 + 200 * Math.random();
          var p0 = coin.position;
          var p3 = new Vec3(-600 + 1200 * Math.random(), -1000);
          var p1 = new Vec3(p3.x / 4, topNum);
          var p2 = new Vec3(p3.x, topNum);
          b.pArr = [p0, p1, p2, p3];
          b.t = 0;
          tween(b).to(5, {
            t: 1
          }, {
            easing: 'quartInOut'
          }).call(function () {
            _this4.recover(b.node);
          }).start();
        };
        /**生产金币 */
        _proto.factory = function factory() {
          var coin = this.pool.get();
          if (!coin) {
            coin = instantiate(this.coinPb);
          }
          return coin;
        }

        /**回收 */;
        _proto.recover = function recover(coin) {
          this.pool.put(coin);
        }

        /**回收金币容器中的金币 */;
        _proto.clearCoins = function clearCoins() {
          for (var i = this.coins.children.length - 1; i >= 0; i--) {
            var coin = this.coins.children[i];
            this.recover(coin);
          }
        };
        _proto.hide = function hide() {
          var _this5 = this;
          this.unschedule(this.hide);
          tween(this.node).to(0.2, {
            opacity: 0
          }).call(function () {
            _this5.clearCoins();
            ganeshagold.main.freeEndBack();
            _this5.node.active = false;
          }).start();
        };
        _proto.onHide = function onHide() {
          if (this.showBtnBn) {
            this.hide();
          }
        };
        _createClass(ganeshagoldFreeEnd, [{
          key: "pool",
          get: function get() {
            if (!this._pool) this._pool = new NodePool();
            return this._pool;
          }
        }]);
        return ganeshagoldFreeEnd;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coins", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec5], {
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

System.register("chunks:///_virtual/ganeshagoldFreeStart.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cGaneshagold.ts', './ganeshagoldBg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, tween, Label, Component, ganeshagold, EMOD;
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
      tween = module.tween;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }, function (module) {
      EMOD = module.EMOD;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3a121gDeMlC5LhScDPKL9ke", "ganeshagoldFreeStart", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldFreeStart = exports('ganeshagoldFreeStart', (_dec = ccclass('ganeshagoldFreeStart'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec3 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldFreeStart, _Component);
        function ganeshagoldFreeStart() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progress", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor2, _assertThisInitialized(_this));
          _this.showBtnBn = false;
          return _this;
        }
        var _proto = ganeshagoldFreeStart.prototype;
        _proto.start = function start() {
          this.node.active = false;
          ganeshagold.freeStart = this;
          this.node.opacity = 0;
        };
        _proto.show = function show() {
          this.node.active = true;
          this.showBtnBn = false;
          this.progress.opacity = 255;
          this.btn.opacity = 0;
          tween(this.node).to(0.2, {
            opacity: 255
          }).call(this.doShow, this).start();
        };
        _proto.doShow = function doShow() {
          var _this2 = this;
          ganeshagold.bg.mod = EMOD.F;
          var lab = this.progressLab;
          lab.string = 0 + "";
          tween(lab).to(0.5, {
            string: "100"
          }).call(function () {
            tween(_this2.progress).to(0.3, {
              opacity: 0
            }).start();
            tween(_this2.btn).to(0.3, {
              opacity: 255
            }).call(function () {
              _this2.showBtnBn = true;
              _this2.scheduleOnce(_this2.hide, 5);
            }).start();
          }).start();
        };
        _proto.hide = function hide() {
          var _this3 = this;
          this.unschedule(this.hide);
          tween(this.node).to(0.2, {
            opacity: 0
          }).call(function () {
            _this3.node.active = false;
            ganeshagold.main.freeStartBack();
          }).start();
        };
        _proto.onHide = function onHide() {
          if (this.showBtnBn) {
            this.hide();
          }
        };
        _createClass(ganeshagoldFreeStart, [{
          key: "progressLab",
          get: function get() {
            return this.progress.getChildByName("lab").getComponent(Label);
          }
        }]);
        return ganeshagoldFreeStart;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec2], {
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ganeshagoldInfoBoard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cGaneshagold.ts', './labNumShow.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, tween, Component, ganeshagold, labNumShow;
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
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }, function (module) {
      labNumShow = module.labNumShow;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "2d860mweQRMh7s0n50lJtfi", "ganeshagoldInfoBoard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldInfoBoard = exports('ganeshagoldInfoBoard', (_dec = ccclass('ganeshagoldInfoBoard'), _dec2 = property({
        type: [Node],
        tooltip: "底板背景"
      }), _dec3 = property({
        type: Node,
        tooltip: "消息跑马灯"
      }), _dec4 = property({
        type: Node,
        tooltip: "赢钱信息"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldInfoBoard, _Component);
        function ganeshagoldInfoBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infos", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoWin", _descriptor3, _assertThisInitialized(_this));
          _this._lev = 0;
          /**是否显示跑马灯 */
          _this._showInfosBn = false;
          /**是否显示共赢得 */
          _this._showTwBn = false;
          return _this;
        }
        var _proto = ganeshagoldInfoBoard.prototype;
        _proto.onLoad = function onLoad() {
          ganeshagold.infoBoard = this;
        };
        _proto.start = function start() {};
        /**winNode label */
        _proto.playAnimWin = function playAnimWin(coin, playBn, showTwBn) {
          if (playBn === void 0) {
            playBn = false;
          }
          if (showTwBn === void 0) {
            showTwBn = false;
          }
          this.showInfosBn = false;
          this.showTwBn = showTwBn;
          if (coin >= ganeshagold.betSum * 5) {
            this.lev = 1;
          } else {
            this.lev = 0;
          }
          if (playBn) {
            this.winLab.setRealNum(0);
            tween(this.winLab).to(0.5, {
              num: coin * 100
            }).start();
          } else {
            this.winLab.setRealNum(coin);
          }
        };
        _createClass(ganeshagoldInfoBoard, [{
          key: "lev",
          get: function get() {
            return this._lev;
          },
          set: function set(v) {
            this._lev = v;
            this.bgs[0].active = v == 0;
            this.bgs[1].active = v == 1;
          }
        }, {
          key: "showInfosBn",
          get: function get() {
            return this._showInfosBn;
          },
          set: function set(v) {
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
            this.infoWin.getChildByName("win_info").active = !v;
            this.infoWin.getChildByName("totalwin_info").active = v;
          }
        }, {
          key: "winLab",
          get: function get() {
            return this.infoWin.getChildByName("lab").getComponent(labNumShow);
          }
        }]);
        return ganeshagoldInfoBoard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "infos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "infoWin", [_dec4], {
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

System.register("chunks:///_virtual/ganeshagoldMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cGaneshagold.ts', './RoomMgr.ts', './UIHelp.ts', './NetGameServer.ts', './SubGameDef.ts', './LanguageData.ts', './dataChange3.ts', './ganeshagoldBg.ts', './ganeshagoldDetail.ts', './bezierMove.ts', './ganeshagoldAudio.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Label, Vec3, instantiate, tween, Button, Component, ganeshagold, ESTATE, RoomMgr, UIHelp, UIhelpParam, gameNet, SubGameDef, LanguageData, dataChange, EGANESHAANI, EMOD, ganeshagoldDetail, bezierMove, ganeshagoldAudio;
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
      instantiate = module.instantiate;
      tween = module.tween;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      ganeshagold = module.ganeshagold;
      ESTATE = module.ESTATE;
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
      EGANESHAANI = module.EGANESHAANI;
      EMOD = module.EMOD;
    }, function (module) {
      ganeshagoldDetail = module.ganeshagoldDetail;
    }, function (module) {
      bezierMove = module.bezierMove;
    }, function (module) {
      ganeshagoldAudio = module.ganeshagoldAudio;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c6302BuZ8NHFKA8p5CnUtkp", "ganeshagoldMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldMain = exports('ganeshagoldMain', (_dec = ccclass('ganeshagoldMain'), _dec2 = property({
        type: Prefab,
        tooltip: ""
      }), _dec3 = property({
        type: Prefab,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldMain, _Component);
        function ganeshagoldMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "detailPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildPb", _descriptor2, _assertThisInitialized(_this));
          _this.delayClick = false;
          _this.rollCallBackBn = false;
          return _this;
        }
        var _proto = ganeshagoldMain.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          ganeshagold.main = this;
          ganeshagold.audio = this.node.getComponent(ganeshagoldAudio);
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
              ganeshagold.lastmoneyPanel.showPanel();
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
                    ganeshagold.clear();
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
          if (this.delayClick || ganeshagold.rollEnable == false) {
            return;
          }
          if (!ganeshagold.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this2.delayClick = false;
            }, 1);
            if (ganeshagold.status == ESTATE.stop) {
              ganeshagold.status = ESTATE.start;
              this.sendRoll();
            } else if (ganeshagold.status == ESTATE.run) {
              ganeshagold.slotCtrl.setSpinAnim(3);
              this.stopImmediately(ganeshagold.result.symbols, function () {
                _this2.rollCallBack();
              });
            }
          }
        };
        _proto.add = function add() {
          if (ganeshagold.auto) {
            return;
          }
          ganeshagold.sumIdx += 1;
          ganeshagold.sumIdx = ganeshagold.slotCtrl.updateBet(ganeshagold.sumIdx) == 0 ? ganeshagold.sumIdx - 1 : ganeshagold.sumIdx;
        };
        _proto.dec = function dec() {
          if (ganeshagold.auto) {
            return;
          }
          ganeshagold.sumIdx -= 1;
          ganeshagold.sumIdx = ganeshagold.slotCtrl.updateBet(ganeshagold.sumIdx) == 0 ? ganeshagold.sumIdx + 1 : ganeshagold.sumIdx;
        };
        _proto.startAuto = function startAuto(n) {
          if (this.delayClick) {
            return;
          }
          if (ganeshagold.status == ESTATE.stop) {
            ganeshagold.auto = true;
            ganeshagold.autoTimes = n;
            // (((ganeshagold.slotCtrl.Btn_stopAuto as Node).children[0] as Node).getComponent(Label) as Label).string = n + "";
            ganeshagold.slotCtrl.Btn_stopAuto.children[1].getComponent(Label).string = n + "";
            if (n > 999) {
              ganeshagold.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
              ganeshagold.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              ganeshagold.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
              ganeshagold.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              ganeshagold.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
              ganeshagold.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(1, 1, 1);
            }
            ganeshagold.slotCtrl.Btn_stopAuto.active = ganeshagold.auto;
            ganeshagold.slotCtrl.Btn_start.active = !ganeshagold.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1.5);
          }
        };
        _proto.stopAuto = function stopAuto() {
          ganeshagold.auto = false;
          ganeshagold.autoTimes = 0;
        };
        _proto.rollCallBack = function rollCallBack() {
          var _this3 = this;
          ganeshagold.status = 0;
          if (ganeshagold.status == 0) {
            if (this.rollCallBackBn) {
              return;
            }
            this.rollCallBackBn = true;
            this.scheduleOnce(function () {
              _this3.rollCallBackBn = false;
            }, 1);
            ganeshagold.reel.removeRadom();
            if (ganeshagold.result.winCoin > 0) {
              ganeshagold.slotCtrl.setSpinAnim(3);
            } else {
              ganeshagold.slotCtrl.setSpinAnim(2);
            }
            this.scheduleOnce(function () {
              _this3.rollCallBackNext();
            }, 0.3);
          }
        }

        /**滚动完成后操作 */;
        _proto.rollCallBackNext = function rollCallBackNext() {
          if (ganeshagold.result.removeItems.length > 0) {
            this.showWin();
          } else {
            if (ganeshagold.fortuneBn) {
              var num = ganeshagold.reel.flyWild();
              if (num == 0) {
                this.doNext();
              }
            } else {
              this.doNext();
            }
          }
        };
        _proto.showWin = function showWin() {
          ganeshagold.reel.removeUnuseAll();
          var symbols = ganeshagold.reel.getSymbols;
          var removes = ganeshagold.result.removeItems;
          for (var i = 0; i < removes.length; i++) {
            var removeIndex = removes[i];
            symbols[removeIndex].playWin();
          }
          if (ganeshagold.fortuneBn) {
            var num = ganeshagold.reel.flyWild();
            if (num == 0) {
              this.flyBack();
            } else {
              if (ganeshagold.result.winCoin > 0) ganeshagold.infoBoard.playAnimWin(ganeshagold.result.winCoin / ganeshagold.result.mul);
            }
          } else {
            this.scheduleOnce(this.settlement, 1);
          }
        };
        _proto.flyBack = function flyBack() {
          var _this4 = this;
          if (ganeshagold.result.winCoin > 0) {
            var flyMul = instantiate(ganeshagold.bg.mulAim.node);
            flyMul.parent = this.node;
            flyMul.setSiblingIndex(this.node.children.length - 2);
            flyMul.position = ganeshagold.bg.mulAim.node.position;
            flyMul.y += ganeshagold.bg.mulAim.node.parent.y + ganeshagold.bg.mulAim.node.parent.parent.y;
            var bz = flyMul.addComponent(bezierMove);
            var p0 = bz.node.position;
            var p3 = ganeshagold.infoBoard.node.position;
            var p1 = new Vec3(-100, p0.y);
            var p2 = new Vec3(-100, p3.y);
            bz.pArr = [p0, p1, p2, p3];
            tween(bz).to(0.3, {
              t: 1
            }).call(function () {
              bz.node.destroy();
              _this4.settlement();
            }).start();
          } else {
            this.doNext();
          }
        };
        _proto.settlement = function settlement() {
          if (ganeshagold.result.winCoin > 0) {
            if (ganeshagold.result.winCoin < 5 * ganeshagold.betSum) {
              ganeshagold.infoBoard.playAnimWin(ganeshagold.result.winCoin, true);
              this.scheduleOnce(this.doNext, 2);
            } else {
              ganeshagold.bigwin.bigwincoin(ganeshagold.result.winCoin);
            }
          } else {
            this.doNext();
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          ganeshagold.infoBoard.playAnimWin(ganeshagold.result.winCoin);
          this.doNext();
        };
        _proto.doNext = function doNext() {
          if (ganeshagold.resultIndex == 0 && ganeshagold.lotteryRes.results.length > 1) {
            ganeshagold.freeStart.show();
          } else {
            this.addResultIndex();
          }
        };
        _proto.addResultIndex = function addResultIndex() {
          var _this5 = this;
          ganeshagold.resultIndex++;
          if (ganeshagold.resultIndex < ganeshagold.lotteryRes.results.length) {
            ganeshagold.slotCtrl.freeTimes = ganeshagold.result.leftFreeCount - 1;
            this.scheduleOnce(function () {
              ganeshagold.infoBoard.showInfosBn = true;
              ganeshagold.reel.loop();
              _this5.scheduleOnce(function () {
                ganeshagold.reel.loopEnd(ganeshagold.result.symbols, function () {
                  _this5.rollCallBack();
                });
              }, 1);
            }, 0.5);
          } else {
            if (ganeshagold.lotteryRes.results.length > 1) {
              ganeshagold.freeEnd.show(ganeshagold.lotteryRes.winCoin);
            } else {
              this.playRollOver();
            }
          }
        };
        _proto.freeStartBack = function freeStartBack() {
          ganeshagold.bg.playGaneshaAni(EGANESHAANI.freeStart);
          ganeshagold.bg.progressIndex = 3;
          this.addResultIndex();
        };
        _proto.freeEndBack = function freeEndBack() {
          ganeshagold.bg.mod = EMOD.N;
          ganeshagold.slotCtrl.freeTimes = -1;
          this.playRollOver();
        };
        _proto.roll = function roll(list) {
          var _this6 = this;
          if (!ganeshagold.auto) {
            ganeshagold.rollEnable = true;
          }
          ganeshagold.status = 1;
          this.scheduleOnce(function () {
            ganeshagold.reel.loopEnd(list, function () {
              _this6.rollCallBack();
            });
          }, 0.5);
        };
        _proto.sendRoll = function sendRoll() {
          this.initRoll();
          ganeshagold.autoTimes = ganeshagold.autoTimes > 0 ? ganeshagold.autoTimes - 1 : 0;
          if (ganeshagold.autoTimes == 0) {
            ganeshagold.auto = false;
          }
          ganeshagold.slotCtrl.setSpinAnim(1);
          var autoTimesLab = ganeshagold.slotCtrl.Btn_stopAuto.children[1].getComponent(Label);
          autoTimesLab.string = ganeshagold.autoTimes + "";
          if (ganeshagold.autoTimes > 999) {
            ganeshagold.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
          } else if (ganeshagold.autoTimes > 99) {
            ganeshagold.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
          } else {
            ganeshagold.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
          }
          ganeshagold.reel.loop();
          this.sendLottery();
        };
        _proto.firstSymbolOver = function firstSymbolOver() {
          ganeshagold.reel.spawn();
          this.addDetailListener();
        };
        _proto.addDetailListener = function addDetailListener() {
          var symbols = ganeshagold.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.node.getComponent(Button).interactable = true;
          }
        };
        _proto.removeDetailListener = function removeDetailListener() {
          var symbols = ganeshagold.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.node.getComponent(Button).interactable = false;
          }
          ganeshagold.reel.dark.active = false;
          var detail = ganeshagold.detail;
          if (detail) detail.node.active = false;
        };
        _proto.addDetail = function addDetail(s) {
          var detail = ganeshagold.detail;
          if (!detail) {
            detail = instantiate(this.detailPb).getComponent(ganeshagoldDetail);
            detail.node.parent = s.node.parent.parent;
            ganeshagold.detail = detail;
          }
          detail.node.active = true;
          detail.node.position = s.node.position;
          detail.init(s);
          ganeshagold.reel.dark.active = true;
        }

        /**每次滚动初始化场景 */;
        _proto.initRoll = function initRoll() {
          this.removeDetailListener();
          ganeshagold.infoBoard.showInfosBn = true;
        }

        /**单次滚动完成结算 */;
        _proto.playRollOver = function playRollOver() {
          this.rollComplete();
          this.doAuto();
        };
        _proto.doAuto = function doAuto() {
          if (ganeshagold.auto && ganeshagold.autoTimes > 0) {
            this.sendRoll();
          }
        }
        /**滚动完成 */;
        _proto.rollComplete = function rollComplete() {
          ganeshagold.status = 0;
          ganeshagold.slotCtrl.setSpinAnim(0);
          ganeshagold.reel.spawn();
          this.addDetailListener();
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.PlayMatch3(SubGameDef.SLOTS_GANESHAGOLD, ganeshagold.betSum + "");
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
          var _this7 = this;
          if (data && data.isSucc) {
            console.log(data.res);
            this.exchange(data.res);
            console.log(ganeshagold.lotteryRes);
            ganeshagold.resultIndex = 0;
            if (ganeshagold.slotCtrl.isSpeed) {
              this.roll(ganeshagold.result.symbols);
            } else {
              this.scheduleOnce(function () {
                _this7.roll(ganeshagold.result.symbols);
              }, 1);
            }
          }
        };
        _proto.exchange = function exchange(data) {
          var res = dataChange.change(data);
          ganeshagold.lotteryRes = res;
        };
        _proto.stopImmediately = function stopImmediately(arr, callBack) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          if (!ganeshagold.auto) {
            ganeshagold.reel.stopImmediately(arr, callBack);
          }
        };
        return ganeshagoldMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "detailPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wildPb", [_dec3], {
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

System.register("chunks:///_virtual/ganeshagoldReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './baseSymbol.ts', './cGaneshagold.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, NodePool, Vec3, ETYPE, baseReel, baseSymbol, ganeshagold;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      Vec3 = module.Vec3;
    }, function (module) {
      ETYPE = module.ETYPE;
      baseReel = module.baseReel;
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "27014m+XzFGC6ILcvKiTifV", "ganeshagoldReel", undefined);
      var ccclass = _decorator.ccclass;
      var FIRSTSYMBOL = [5, 9, 8, 7, 7, 6, 3, 1, 10, 4, 2, 2, 4, 7, 3];
      var ganeshagoldReel = exports('ganeshagoldReel', (_dec = ccclass('ganeshagoldReel'), _dec(_class = /*#__PURE__*/function (_baseReel) {
        _inheritsLoose(ganeshagoldReel, _baseReel);
        function ganeshagoldReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseReel.call.apply(_baseReel, [this].concat(args)) || this;
          _this.disTime = 0.1;
          return _this;
        }
        var _proto = ganeshagoldReel.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          ganeshagold.reel = this;
          this.radomIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(-300, -250),
            vector: 600,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 1,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(-150, -250),
            vector: 600,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 2,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(0, -250),
            vector: 600,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 3,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(150, -250),
            vector: 600,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 4,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 150,
            headPos: new Vec3(300, -250),
            vector: 600,
            symbols: [],
            "switch": false,
            hierarchy: true
          }];
          this.bindResult(FIRSTSYMBOL);
          ganeshagold.main.firstSymbolOver();
        };
        /**启动循环播放 */
        _proto.loop = function loop() {
          var _this2 = this;
          ganeshagold.audio.playReelLoop();
          var _loop = function _loop(i) {
            _this2.scheduleOnce(function () {
              _this2.reboundMove(_this2.reelDates[i]);
            }, _this2.disTime * i);
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
          if (ganeshagold.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          if (ganeshagold.slotCtrl.isSpeed == false) {
            var _loop2 = function _loop2() {
              var r = _this4.reelDates[i];
              var disTime = _this4.disTime * i;
              _this4.scheduleOnce(function () {
                _this4.bindResultOne(r, arr, function () {
                  var cb = function cb() {
                    callback();
                    ganeshagold.audio.playReelEnd(false);
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
              ganeshagold.audio.playReelEnd(true);
            });
          }
        };
        _proto.spawn = function spawn() {
          var symbols = this.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.idle();
          }
        };
        _proto.flyWild = function flyWild() {
          var res = 0;
          var symbols = this.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            res += symbol.flyWild();
          }
          return res;
        };
        _createClass(ganeshagoldReel, [{
          key: "dark",
          get: function get() {
            return this.node.parent.getChildByName("dark");
          }
        }]);
        return ganeshagoldReel;
      }(baseReel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ganeshagoldSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './LanguageData.ts', './cGaneshagold.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Animation, Sprite, tween, find, Vec3, Button, Color, Label, Component, Num, LanguageData, ganeshagold, UserMgr;
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
      Animation = module.Animation;
      Sprite = module.Sprite;
      tween = module.tween;
      find = module.find;
      Vec3 = module.Vec3;
      Button = module.Button;
      Color = module.Color;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "40f18BWO9NLUoRArCsm3VpD", "ganeshagoldSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var ganeshagoldSlotCtrl = exports('ganeshagoldSlotCtrl', (_dec = ccclass('ganeshagoldSlotCtrl'), _dec2 = property({
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ganeshagoldSlotCtrl, _Component);
        function ganeshagoldSlotCtrl() {
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
          _this.isPanelAnim = false;
          _this.isSpeed = false;
          _this.bFastBigWin = false;
          _this.sumList = [];
          _this.curBetTween = null;
          //创建提示文字
          _this.tipTween = null;
          _this._freeTimes = void 0;
          return _this;
        }
        var _proto = ganeshagoldSlotCtrl.prototype;
        _proto.onLoad = function onLoad() {
          ganeshagold.money = UserMgr.inst.coin;
          this.initBetContent(ganeshagold.BETNUM, ganeshagold.BET, ganeshagold.LINES);
          this.updateBet(ganeshagold.sumIdx);
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
          ganeshagold.slotCtrl = this;
        };
        _proto.btnRollTouchStart = function btnRollTouchStart() {
          if (!ganeshagold.rollEnable) {
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
          if (!ganeshagold.rollEnable) {
            return;
          }
          ganeshagold.main.onCLick(e, 'roll');
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
          ganeshagold.main.stopAuto();
        };
        _proto.init = function init() {
          this.soundNode.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.setPanel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winLab.string = Num.exchangeToThousands(ganeshagold.exchangeRate, 0);
          this.moneyLab.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.money);
          this.freeTimes = -1;
        };
        _proto.update = function update() {
          this.initTip();
        }

        /**玩家金币变更 */;
        _proto.playMoneyAni = function playMoneyAni(coin, t) {
          if (t === void 0) {
            t = 0;
          }
          var str = Num.exchangeToThousands(ganeshagold.exchangeRate, coin);
          tween(this.moneyLab).to(t, {
            string: str
          }).start();
        }
        /**玩家赢得金币变更 */;
        _proto.playWinAni = function playWinAni(coin, t) {
          if (t === void 0) {
            t = 0;
          }
          var str = Num.exchangeToThousands(ganeshagold.exchangeRate, coin);
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
          if (!ganeshagold.betNum) {
            ganeshagold.sumIdx = 0;
            ganeshagold.betNum = this.sumList[ganeshagold.sumIdx];
          } else {
            ganeshagold.sumIdx = this.sumList.indexOf(ganeshagold.betNum);
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
          ganeshagold.main.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          ganeshagold.autoPanel.showPanel();
        }

        //打开设置界面
        ;

        _proto.onCLickShowsetPanel = function onCLickShowsetPanel(event) {
          // ganeshagold.main.audio.playclickopen();
          if (this.rollPanel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", ganeshagold.main.node);
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
          var footer = find("ui_footer/ui_footer_a", ganeshagold.main.node);
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
            ganeshagold.betPanel.hidePanel();
          } else {
            ganeshagold.betPanel.showPanel();
            ganeshagold.betPanel.bindBet();
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
          // ganeshagold.main.audio.playclickopen();
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
          ganeshagold.sumIdx = this.sumList.indexOf(ganeshagold.betSum);
          this.updateBet(ganeshagold.sumIdx);
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
          if (ganeshagold.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (ganeshagold.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (ganeshagold.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (ganeshagold.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          ganeshagold.betSum = this.sumList[idx];
          this.betLab.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.betSum);
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
          var aimStr = Num.exchangeToThousands(ganeshagold.exchangeRate, aim);
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
              ganeshagold.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !ganeshagold.auto && this.setButtonState(true);
              if (ganeshagold.lotteryRes && ganeshagold.lotteryRes.winCoin == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              ganeshagold.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winLab.string = Num.exchangeToThousands(ganeshagold.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              ganeshagold.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              ganeshagold.rollEnable = false;
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
        _createClass(ganeshagoldSlotCtrl, [{
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
          key: "freeTimes",
          get: function get() {
            return this._freeTimes;
          },
          set: function set(v) {
            this._freeTimes = v;
            var freeNode = this.free;
            freeNode.active = v >= 0;
            var numNode = freeNode.getChildByName("num");
            numNode.active = v > 0;
            numNode.getComponent(Label).string = v + "";
            var lastNode = freeNode.getChildByName("last");
            lastNode.active = v == 0;
          }
        }]);
        return ganeshagoldSlotCtrl;
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ganeshagoldSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './cGaneshagold.ts', './bezierMove.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, instantiate, Vec3, tween, ESHOWTYPE, baseSymbol, ganeshagold, bezierMove;
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
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      ESHOWTYPE = module.ESHOWTYPE;
      baseSymbol = module.baseSymbol;
    }, function (module) {
      ganeshagold = module.ganeshagold;
    }, function (module) {
      bezierMove = module.bezierMove;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e7992yeNrpOL4SRwYpLde0H", "ganeshagoldSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ganeshagoldSymbol = exports('ganeshagoldSymbol', (_dec = ccclass('ganeshagoldSymbol'), _dec2 = property({
        type: Node,
        tooltip: "选中态"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_baseSymbol) {
        _inheritsLoose(ganeshagoldSymbol, _baseSymbol);
        function ganeshagoldSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseSymbol.call.apply(_baseSymbol, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "select", _descriptor, _assertThisInitialized(_this));
          _this._selectBn = false;
          return _this;
        }
        var _proto = ganeshagoldSymbol.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.selectBn = false;
        };
        /**滚动停止调用 播放wild出场动画*/
        _proto.idle = function idle() {
          var ske = this.skes[this.symbolId - 1];
          if (!ske) return;
          this.showType = ESHOWTYPE.ske;
          this.playAni(ESYMBOLANI.idle, true);
        };
        _proto.flyWild = function flyWild() {
          if (this.symbolId == ESYMBOLID.wild) {
            var bz = instantiate(ganeshagold.main.wildPb).getComponent(bezierMove);
            bz.node.parent = ganeshagold.main.node;
            bz.node.setSiblingIndex(ganeshagold.main.node.children.length - 2);
            bz.node.position = this.node.position;
            bz.node.y += this.node.parent.parent.y;
            var p0 = bz.node.position;
            var p1 = new Vec3(0, p0.y);
            var p2 = ganeshagold.infoBoard.node.position;
            bz.pArr = [p0, p1, p2];
            tween(bz).to(0.3, {
              t: 1
            }).call(function () {
              bz.node.destroy();
              ganeshagold.bg.bindMul(ganeshagold.result.mul, ganeshagold.result.mulProgress);
            }).start();
            return 1;
          }
          return 0;
        }
        /**播放中奖 */;
        _proto.playWin = function playWin() {
          if (this.skes[this.symbolId - 1]) {
            this.showType = ESHOWTYPE.ske;
            this.playAni(ESYMBOLANI.win, true);
          } else {
            this.showType = ESHOWTYPE.normal;
          }
          this.selectBn = true;
        };
        _proto.playDetail = function playDetail() {
          if (this.skes[this.symbolId - 1]) {
            this.showType = ESHOWTYPE.ske;
            if (this.symbolId != ESYMBOLID.wild && this.symbolId != ESYMBOLID.scatter) {
              this.playAni(ESYMBOLANI.win, true);
            } else {
              this.playAni(ESYMBOLANI.idle, true);
            }
          } else {
            this.showType = ESHOWTYPE.normal;
          }
        };
        _proto.onClick = function onClick(e) {
          ganeshagold.main.addDetail(this);
        };
        _createClass(ganeshagoldSymbol, [{
          key: "selectBn",
          get: function get() {
            return this._selectBn;
          },
          set: function set(v) {
            this._selectBn = v;
            this.select.active = v;
          }
        }]);
        return ganeshagoldSymbol;
      }(baseSymbol), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      var ESYMBOLID = exports('ESYMBOLID', /*#__PURE__*/function (ESYMBOLID) {
        ESYMBOLID[ESYMBOLID["null"] = 0] = "null";
        ESYMBOLID[ESYMBOLID["J"] = 1] = "J";
        ESYMBOLID[ESYMBOLID["Q"] = 2] = "Q";
        ESYMBOLID[ESYMBOLID["K"] = 3] = "K";
        ESYMBOLID[ESYMBOLID["A"] = 4] = "A";
        ESYMBOLID[ESYMBOLID["powder"] = 5] = "powder";
        ESYMBOLID[ESYMBOLID["flower"] = 6] = "flower";
        ESYMBOLID[ESYMBOLID["diya"] = 7] = "diya";
        ESYMBOLID[ESYMBOLID["lady"] = 8] = "lady";
        ESYMBOLID[ESYMBOLID["scatter"] = 9] = "scatter";
        ESYMBOLID[ESYMBOLID["wild"] = 10] = "wild";
        return ESYMBOLID;
      }({}));
      var ESYMBOLANI = exports('ESYMBOLANI', /*#__PURE__*/function (ESYMBOLANI) {
        ESYMBOLANI["win"] = "win";
        ESYMBOLANI["idle"] = "idle";
        ESYMBOLANI["idleFastpin"] = "idle_fastpin";
        return ESYMBOLANI;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cGaneshagold.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, Num, ganeshagold;
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
      ganeshagold = module.ganeshagold;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d8e98b+BnVJxqn1UXTAjkYT", "lastmoneyPanel", undefined);
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
          ganeshagold.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(ganeshagold.exchangeRate, ganeshagold.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // ganeshagold.main.audio.playclickopen();
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
          // ganeshagold.main.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_ganeshagold", ['./SlotsGaneshagoldGameMgr.ts', './autoPanel3.ts', './betNum4.ts', './betPanel4.ts', './cGaneshagold.ts', './dataChange3.ts', './ganeshagoldAudio.ts', './ganeshagoldBg.ts', './ganeshagoldBigwin.ts', './ganeshagoldDetail.ts', './ganeshagoldFreeEnd.ts', './ganeshagoldFreeStart.ts', './ganeshagoldInfoBoard.ts', './ganeshagoldMain.ts', './ganeshagoldReel.ts', './ganeshagoldSlotCtrl.ts', './ganeshagoldSymbol.ts', './lastmoneyPanel4.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotsGaneshagoldGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "60784La3OdIIrEjeOYIPp3j", "SlotsGaneshagoldGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsGaneshagoldGameMgr = exports('SlotsGaneshagoldGameMgr', (_dec = ccclass('SlotsGaneshagoldGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsGaneshagoldGameMgr, _GameMgr);
        function SlotsGaneshagoldGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_GANESHAGOLD;
          _this.mainName = "ganeshagoldMain";
          _this._gameType = SubGameDef.SLOTS_GANESHAGOLD;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_ganeshagold',
            bundle: ModuleDef.SLOTS_GANESHAGOLD
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsGaneshagoldGameMgr.prototype;
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
        _createClass(SlotsGaneshagoldGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsGaneshagoldGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsGaneshagoldGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsGaneshagoldGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_ganeshagold', 'chunks:///_virtual/module_slots_ganeshagold'); 
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