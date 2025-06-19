System.register("chunks:///_virtual/autoPanel8.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, ox, Num;
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
      ox = module.ox;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "91508AmIEZFgLSyItC/slD8", "autoPanel", undefined);
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
          ox.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(ox.exchangeRate, ox.money);
          this.lblCurBet.string = Num.exchangeToThousands(ox.exchangeRate, ox.betSum);
          this.winCoin_lab.string = ox.slotCtrl.winCoin_lab.string;
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
            ox.node.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          ox.node.audio.playclickopen();
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
          ox.node.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum9.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "e9679lLrs5HzqV+du6YBmaM", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel9.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts', './Num.ts', './betNum9.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, ox, Num, betNum;
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
      ox = module.ox;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      betNum = module.betNum;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "b10cck7kUtHUafnfWjSqDLd", "betPanel", undefined);
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
          ox.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = ox.BETNUM;
          this.betList = ox.BET;
          this.line = ox.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(ox.exchangeRate, ox.money);
          this.lblCurBet.string = Num.exchangeToThousands(ox.exchangeRate, ox.betSum);
          this.winCoin_lab.string = ox.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(ox.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(ox.exchangeRate, sumList[_i3]);
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
          ox.betNum = this.tempi;
          ox.bet = this.tempj;
          ox.sumIdx = this.tempindex;
          ox.betSum = this.sumList[ox.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(ox.exchangeRate, ox.betSum);
          ox.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(ox.sumIdx);
          this.val3 = ox.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          ox.node.audio.playclickopen();
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
          ox.node.audio.playclickclose();
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

System.register("chunks:///_virtual/cOx.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange8.ts'], function (exports) {
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
      cclegacy._RF.push({}, "ce0e8qF2ylJv4QmkZnHOsQh", "cOx", undefined);
      var cOx = /*#__PURE__*/function () {
        function cOx() {
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          this.detail = null;
          this.node = null;
          this.wheelList = [];
          this.bet = 0;
          this.betNum = 0;
          this.sumIdx = 0;
          /**累计下注计算 */
          this._betSum = 0;
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
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          // /**规则界面 */
          this.rulePanel = null;
          /**赔付表界面 */
          this.payPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
        }
        _createClass(cOx, [{
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
            return this.node.slotCtrl;
          }
        }, {
          key: "betSum",
          get: function get() {
            if (!this._betSum) {
              this._betSum = Number(localStorage.getItem(SubGameDef.SLOTS_OX + "betSum"));
            }
            return this._betSum;
          },
          set: function set(v) {
            if (this._betSum != v) {
              localStorage.setItem(SubGameDef.SLOTS_OX + "betSum", v + "");
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
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cOx();
            }
            return this._instance;
          }
        }]);
        return cOx;
      }();
      cOx._instance = null;
      var ox = exports('ox', cOx.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange8.ts", ['cc', './Num.ts'], function (exports) {
  var cclegacy, Num;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0e632XRpYVPEI0yaIdEXqv6", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.code = 0;
          res.userscore = Num.parse(data.coins); //用户游戏后剩余金币
          res.winscore = Num.parse(data.payout); //用户当局赚取金币
          var result = data.results[0]; //结果
          if (result.allTheSame) {
            res.isAllWin = true;
            res.getBigWin.card = this.transformId(result.allTheSame.id);
          } else {
            res.isAllWin = false;
          }
          res.getBigWin = {};
          res.getBigWin.res_list = [];
          for (var i = 0; i < result.rounds.length; i++) {
            var temp = result.rounds[i];
            var nHandCards = [];
            var nWinLines = [];
            var nWinLinesDetail = [];
            var nWinDetail = [];
            var nWinCards = [false, false, false, false, false, false, false, false, false];
            for (var _i = 0; _i < temp.symbols.length; _i++) {
              var cur = temp.symbols[_i]; //
              var index = dataChange.posToIndex(cur.coordinate);
              nHandCards[index] = this.transformId(cur.id);
            }
            for (var _i2 = 0; _i2 < temp.paylines.length; _i2++) {
              var _cur = temp.paylines[_i2];
              nWinLines.push(Number(_cur.id) - 1);
              nWinDetail.push(_cur.payout);
              nWinLinesDetail[_i2] = [];
              for (var j = 0; j < _cur.points.length; j++) {
                var point = _cur.points[j];
                var tempIndex = dataChange.posToIndex(point);
                nWinLinesDetail[_i2].push(tempIndex);
                nWinCards[tempIndex] = true;
              }
            }
            if (i == result.rounds.length - 1) {
              res.nHandCards = nHandCards;
              res.nWinLines = nWinLines;
              res.nWinLinesDetail = nWinLinesDetail;
              res.nWinDetail = nWinDetail;
              res.nWinCards = nWinCards;
            }
            var _resList = {};
            _resList.nHandCards = nHandCards;
            _resList.nWinLines = nWinLines;
            _resList.nWinLinesDetail = nWinLinesDetail;
            _resList.nWinDetail = nWinDetail;
            _resList.nWinCards = nWinCards;
            if (i == result.rounds.length - 1) {
              _resList.winscore = res.winscore;
            } else {
              _resList.winscore = 0;
            }
            res.getBigWin.res_list.push(_resList);
          }
          res.getFreeTime = {};
          res.getBigWin.bFlag = result.bigEvents;
          res.getBigWin.isStart = result.bigEvents;
          res.getFreeTime.bFlag = false;
          res.getFreeTime.nFreeTime = 0;

          // res.fMultiple = 1;
          // if(temp.multiplier && temp.multiplier.multiple){
          //     res.fMultiple = temp.multiplier.multiple;
          // }
          return res;
        }

        //例子，左下角1,1开始，收到服务器数据[4,1  4,2  4,3]                                [4.1   4.2  4.3]                                     [ 0  1  2 ]
        //                                [3,1  3,2  3,3]                                [3.1    3.2   3.3]     才符合服务器中奖连线逻辑  下标为 [3   4   5]
        //                                [2,1  2,2  2,3]             转成                [2.1    2.2   2.3]                                   [6   7   8 ]  客户端无视 9和11位，服务端无视 （41）（43）位置
        //                                [1,1  1,2  1,3]                                 [1.1    1.2   1.3]                                   [9   10  11]
        ;

        dataChange.posToIndex = function posToIndex(pos) {
          if (pos.row == 1 && pos.reel == 1) {
            return 6;
          }
          if (pos.row == 2 && pos.reel == 1) {
            return 3;
          }
          if (pos.row == 3 && pos.reel == 1) {
            return 0;
          }
          if (pos.row == 4 && pos.reel == 1) {
            return 9;
          }
          if (pos.row == 1 && pos.reel == 2) {
            return 10;
          }
          if (pos.row == 2 && pos.reel == 2) {
            return 7;
          }
          if (pos.row == 3 && pos.reel == 2) {
            return 4;
          }
          if (pos.row == 4 && pos.reel == 2) {
            return 1;
          }
          if (pos.row == 1 && pos.reel == 3) {
            return 8;
          }
          if (pos.row == 2 && pos.reel == 3) {
            return 5;
          }
          if (pos.row == 3 && pos.reel == 3) {
            return 2;
          }
          if (pos.row == 4 && pos.reel == 3) {
            return 11;
          }
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            ox: 7,
            yuanbao: 6,
            copper_coin: 5,
            blessing_bag: 4,
            red_envelope: 3,
            orange: 2,
            firework: 1
          };
          return (_idMap$curid = idMap[curid]) != null ? _idMap$curid : 0;
        };
        return dataChange;
      }());

      //old
      dataChange.BETNUM = [0.03, 0.1, 0.3, 0.9];
      //单注值
      dataChange.LINES = 10;
      //线数
      dataChange.BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //now
      // //中奖线
      // export interface PlaySlotPayline {
      //     //payline id
      //     id: string;
      //     //payline 所包含的每个点的坐标
      //     points: PlaySlotCoordinate[];
      //     //payline 赢取的钱
      //     payout: string;
      // }
      // //左下角点的坐标为（1， 1）
      // export interface PlaySlotCoordinate {
      //     //行号， 从1开始
      //     row: number;
      //     //轴号（列号）从1开始
      //     reel: number;
      // }
      // export interface PlaySlotSymbol {
      //     //符号id
      //     id: string;
      //     //符号出现的位置
      //     coordinate: PlaySlotCoordinate;
      // }
      // //单次游戏的结果
      // export interface PlaySlotsResult {
      //     winning: boolean;
      //     //界面上每个位置停止后最终包含的符号
      //     symbols: PlaySlotSymbol[];
      //     //所有的中奖线
      //     paylines: PlaySlotPayline[];
      //     payout: string;//赢取的钱
      //     freeCount: number;//获得的免费游戏次数
      //     multiplier?: { id: string, multiple: number };//本次游戏奖金触发的乘数id
      // }
      // export interface ResPlaySlots {
      //     //包括免费赠送的结果
      //     results: PlaySlotsResult[];
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel9.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, ox, Num;
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
      ox = module.ox;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "af103Md7fJKq573nHTtm9pB", "lastmoneyPanel", undefined);
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
          ox.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(ox.exchangeRate, ox.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          ox.node.audio.playclickopen();
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
          ox.node.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_ox", ['./SlotsOxGameMgr.ts', './SlotsOxLobbyScene.ts', './autoPanel8.ts', './betNum9.ts', './betPanel9.ts', './cOx.ts', './dataChange8.ts', './lastmoneyPanel9.ts', './oxAudio.ts', './oxDetail.ts', './oxMain.ts', './oxSlotCtrl.ts', './oxWheel.ts', './payPanel4.ts', './rulePanel4.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/oxAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Component, ModuleDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;
      cclegacy._RF.push({}, "b7ab2x5ETRGDZSuvYwYwYgp", "oxAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var oxAudio = exports('oxAudio', (_dec = ccclass('oxAudio'), _dec2 = property([AudioClip]), _dec3 = property({
        type: AudioClip,
        tooltip: "粒子触发"
      }), _dec4 = property({
        type: AudioClip,
        tooltip: "粒子结束"
      }), _dec5 = property({
        type: [AudioClip],
        tooltip: "普通中奖牛语音"
      }), _dec6 = property({
        type: [AudioClip],
        tooltip: "高倍中奖牛语音"
      }), _dec7 = property({
        type: AudioClip,
        tooltip: "出现wild牛语音"
      }), _dec8 = property({
        type: AudioClip,
        tooltip: "牛跳起语音"
      }), _dec9 = property({
        type: AudioClip,
        tooltip: "大奖进入语音"
      }), _dec10 = property({
        type: AudioClip,
        tooltip: "大奖中奖语音"
      }), _dec11 = property({
        type: AudioClip,
        tooltip: "大奖退出音效"
      }), _dec12 = property({
        type: AudioClip,
        tooltip: "大奖标题出现音效"
      }), _dec13 = property({
        type: AudioClip,
        tooltip: "大奖加速旋转音效"
      }), _dec14 = property({
        type: AudioClip,
        tooltip: "旋转按钮按下音效"
      }), _dec15 = property({
        type: AudioClip,
        tooltip: "滚轮旋转"
      }), _dec16 = property({
        type: AudioClip,
        tooltip: "stopWheel"
      }), _dec17 = property({
        type: AudioClip,
        tooltip: "bigWinEf"
      }), _dec18 = property({
        type: AudioClip,
        tooltip: "中奖首次音效"
      }), _dec19 = property({
        type: AudioClip,
        tooltip: "中奖循环音效"
      }), _dec20 = property({
        type: AudioClip,
        tooltip: "点击旋转"
      }), _dec21 = property({
        type: AudioClip,
        tooltip: "点击打开"
      }), _dec22 = property({
        type: AudioClip,
        tooltip: "点击关闭"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(oxAudio, _Component);
        function oxAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgmAudio", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particalStart", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particalEnd", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oxWinEf", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oxMegaWinEf", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oxWildEf", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oxJumpEf", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oxBigWinInEf", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oxBigWinEf", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BigWinExitEf", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BigWinTitleEf", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BigWinFastSpinEf", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spinEf", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelspin", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopWheel", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinEf", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinFirstEf", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinLoopEf", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickstart", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickOpen", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickClose", _descriptor21, _assertThisInitialized(_this));
          _this.BWurl = "sound/bgm_bigwin_main";
          _this.url = "sound/bgm_mg";
          return _this;
        }
        var _proto = oxAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.playBgm();
        };
        _proto.stopAudio = function stopAudio() {
          // AudioMgr.inst.stop(); 
        };
        _proto.playbigwinmain = function playbigwinmain() {
          // AudioMgr.inst.playMusic(this.BWurl,EGameName.ox);
        };
        _proto.stopbigwinmain = function stopbigwinmain() {
          this.playBgm();
        };
        _proto.playBgm = function playBgm() {
          // AudioMgr.inst.stop();
          // AudioMgr.inst.playMusicLoop(this.url,EGameName.ox)
          tgx.AudioMgr.inst.audio.playMusicLoop(this.url, ModuleDef.SLOTS_OX);
        };
        _proto.playSpin = function playSpin() {
          this.playEf(this.spinEf);
        };
        _proto.playwheelspin = function playwheelspin() {
          this.playEf(this.wheelspin);
        };
        _proto.playParticalStart = function playParticalStart() {
          this.playEf(this.particalStart);
        };
        _proto.playParticalEnd = function playParticalEnd() {
          this.playEf(this.particalEnd);
        };
        _proto.playWinOx = function playWinOx() {
          var idx = Math.floor(Math.random() * this.oxWinEf.length);
          this.playEf(this.oxWinEf[idx]);
        };
        _proto.playMegaWinOx = function playMegaWinOx() {
          var idx = Math.floor(Math.random() * this.oxMegaWinEf.length);
          this.playEf(this.oxMegaWinEf[idx]);
        };
        _proto.playWildOx = function playWildOx() {
          this.playEf(this.oxWildEf);
        };
        _proto.playJumpOx = function playJumpOx() {
          this.playEf(this.oxJumpEf);
        };
        _proto.playBigWinInOx = function playBigWinInOx() {
          this.playEf(this.oxBigWinInEf);
        };
        _proto.playBigWinOx = function playBigWinOx() {
          this.playEf(this.oxBigWinEf);
        };
        _proto.playBigWinExitOx = function playBigWinExitOx() {
          this.playEf(this.BigWinExitEf);
        };
        _proto.playBigWinTitle = function playBigWinTitle() {
          this.playEf(this.BigWinTitleEf);
        };
        _proto.playBigWinFastSpin = function playBigWinFastSpin() {
          this.playEf(this.BigWinFastSpinEf);
        };
        _proto.playStopWheel = function playStopWheel() {
          this.playEf(this.stopWheel);
        };
        _proto.playBW = function playBW() {
          this.playEf(this.bigWinEf);
        };
        _proto.playWinFirst = function playWinFirst() {
          this.playEf(this.WinFirstEf);
        };
        _proto.playWinLoop = function playWinLoop() {
          this.playEf(this.WinLoopEf);
        };
        _proto.playclickstart = function playclickstart() {
          this.playEf(this.clickstart);
        };
        _proto.playEf = function playEf(clip) {
          // AudioMgr.inst.playEffect(clip);
          tgx.AudioMgr.inst.audio.playEffect(clip);
        };
        _proto.playclickopen = function playclickopen() {
          this.playEf(this.clickOpen);
        };
        _proto.playclickclose = function playclickclose() {
          this.playEf(this.clickClose);
        };
        _proto.clearAll = function clearAll() {
          tgx.AudioMgr.inst.audio.clearAll();
        };
        return oxAudio;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particalStart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "particalEnd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "oxWinEf", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "oxMegaWinEf", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "oxWildEf", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "oxJumpEf", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "oxBigWinInEf", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "oxBigWinEf", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "BigWinExitEf", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "BigWinTitleEf", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "BigWinFastSpinEf", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spinEf", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "wheelspin", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "stopWheel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bigWinEf", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "WinFirstEf", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "WinLoopEf", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "clickstart", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "clickOpen", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "clickClose", [_dec22], {
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

System.register("chunks:///_virtual/oxDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, ox;
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
      ox = module.ox;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "afa68PwwV5Hja/sTUu3uJtP", "oxDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [{
        3: 3
      },
      // hand cards no fix line 0
      {
        3: 5
      },
      // hand cards no fix line 1
      {
        3: 10
      },
      // hand cards no fix line 2
      {
        3: 20
      },
      // hand cards no fix line 3
      {
        3: 50
      },
      // hand cards no fix line 4
      {
        3: 100
      },
      // hand cards no fix line 5
      {
        3: 200
      },
      // hand cards no fix line 6
      {
        3: 0
      } // hand cards no fix line 7
      ];

      var oxDetail = exports('oxDetail', (_dec = ccclass('oxDetail'), _dec2 = property({
        type: Node,
        tooltip: "图片"
      }), _dec3 = property({
        type: Node,
        tooltip: "背景板"
      }), _dec4 = property({
        type: Node,
        tooltip: "反向背景板"
      }), _dec5 = property({
        type: Node,
        tooltip: "中奖分数"
      }), _dec6 = property({
        type: Node,
        tooltip: "特殊牌"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(oxDetail, _Component);
        function oxDetail() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roleSpriteNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BGNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BGNode2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "specialNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = oxDetail.prototype;
        _proto.init = function init(idx, isLeft) {
          if (ox.detail) {
            ox.detail.node.active = false;
          }
          ox.detail = this;
          var id = idx;
          this.roleSpriteNode.children[idx - 1].active = true;
          for (var i in GAME_COMBINATIONS[id - 1]) {
            this.numNode.getChildByName(i).children[0].getComponent(Label).string = GAME_COMBINATIONS[idx - 1][i];
          }
          //位于右边的时候需要切换显示位置
          if (!isLeft) {
            this.BGNode.active = false;
            this.BGNode2.active = true;
            this.numNode.x = -155;
            this.specialNode.x = -340;
          }
        };
        _proto.node_onclick = function node_onclick(e) {
          ox.node.deskMask.active = false;
          this.node.destroy();
          ox.detail = null;
        };
        return oxDetail;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roleSpriteNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BGNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BGNode2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
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

System.register("chunks:///_virtual/oxMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './oxSlotCtrl.ts', './cOx.ts', './Num.ts', './NetGameServer.ts', './SubGameDef.ts', './dataChange8.ts', './UserMgr.ts', './RoomMgr.ts', './UIHelp.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Label, sp, Vec3, macro, instantiate, tween, find, Animation, Component, UITransform, oxSlotCtrl, ox, Num, gameNet, SubGameDef, dataChange, UserMgr, RoomMgr, UIHelp, UIhelpParam, LanguageData;
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
      Label = module.Label;
      sp = module.sp;
      Vec3 = module.Vec3;
      macro = module.macro;
      instantiate = module.instantiate;
      tween = module.tween;
      find = module.find;
      Animation = module.Animation;
      Component = module.Component;
      UITransform = module.UITransform;
    }, function (module) {
      oxSlotCtrl = module.oxSlotCtrl;
    }, function (module) {
      ox = module.ox;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      dataChange = module.dataChange;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "702c25MctdCQqutoTDRPSMn", "oxMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var oxMain = exports('oxMain', (_dec = ccclass('oxMain'), _dec2 = property({
        type: Prefab,
        tooltip: "滚轮角色Pb"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "角色详情Pb"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "万能特效Pb"
      }), _dec5 = property({
        type: Node,
        tooltip: "中奖数字特效"
      }), _dec6 = property({
        type: Node,
        tooltip: "中奖光特效"
      }), _dec7 = property({
        type: Node,
        tooltip: "中奖牌特效"
      }), _dec8 = property({
        type: Node,
        tooltip: "中奖图层遮罩"
      }), _dec9 = property({
        type: Node,
        tooltip: "中奖图层遮罩2"
      }), _dec10 = property({
        type: Node,
        tooltip: "中奖特效"
      }), _dec11 = property({
        type: Node,
        tooltip: "游戏背景节点"
      }), _dec12 = property({
        type: Node,
        tooltip: "免费摇奖背景节点"
      }), _dec13 = property({
        type: Node,
        tooltip: "免费特效节点"
      }), _dec14 = property({
        type: Node,
        tooltip: "免费元宝特效"
      }), _dec15 = property({
        type: Node,
        tooltip: "金牛灯光背景"
      }), _dec16 = property({
        type: Node,
        tooltip: "免费灯光特效"
      }), _dec17 = property({
        type: Node,
        tooltip: "x10特效"
      }), _dec18 = property({
        type: Node,
        tooltip: "中奖背景2"
      }), _dec19 = property({
        type: Node,
        tooltip: "中奖背景3"
      }), _dec20 = property({
        type: Node,
        tooltip: "滚屏提示"
      }), _dec21 = property({
        type: Node,
        tooltip: "中奖提示"
      }), _dec22 = property({
        type: Node,
        tooltip: "爆金币"
      }), _dec23 = property({
        type: Label,
        tooltip: "单线中奖金币"
      }), _dec24 = property({
        type: Node,
        tooltip: "公牛动画"
      }), _dec25 = property({
        type: Node,
        tooltip: "detailMask"
      }), _dec26 = property({
        type: Node,
        tooltip: "slotCtrl"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(oxMain, _Component);
        function oxMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rolePb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildEffectPb", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLight", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode2", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BgNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBgNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeEffectNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeCoinEffect", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeLightNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeWheelLightEffect", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_X10Effect", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win2BG", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win3BG", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNode", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinBoomEffect", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinLineLab", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bullAnim", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deskMask", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor25, _assertThisInitialized(_this));
          /**延迟点击 */
          _this.delayClick = false;
          _this.audio = null;
          _this.slotCtrl = null;
          _this.bIsFreeGame = false;
          _this.freeTimes = 0;
          _this.bigWinBoo = false;
          _this.stopFree = false;
          _this.freeGameCoin = 0;
          _this.stateCallBackBn = false;
          _this.showLine = null;
          return _this;
        }
        var _proto = oxMain.prototype;
        _proto.onLoad = function onLoad() {
          ox.node = this;
          this.slotCtrl = this.slotCtrlNode.getComponent(oxSlotCtrl);
          this.slotCtrl.initBetContent(ox.BETNUM, ox.BET, ox.LINES);
          this.audio = this.node.getComponent('oxAudio');
          ox.wheelList = [];
          ox.auto = false;
          ox.autoTimes = 0;
          ox.status = 0;
          ox.winLinePos = [480, 380, 380, 380, 380, 180, 180, 180, 180, 20];
          ox.rollIndex = 0;
          ox.lotteryRes = null;
          ox.rollEnable = true;
          ox.money = UserMgr.inst.coin;
          this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(ox.exchangeRate, ox.money);
          this.delayClick = false;
          this.bIsFreeGame = false;
          this.bigWinBoo = false;
          this.freeTimes = 0;
          this.stopFree = false;
          this.freeGameCoin = 0;
          ox.money = ox.money;
        };
        _proto.initWheel = function initWheel() {
          for (var i = 0; i < ox.wheelList.length; i++) {
            ox.wheelList[i].initWheel();
          }
        };
        _proto.start = function start() {
          this.initWheel();
          this.slotCtrl.setSpinAnim(0);
          this.slotCtrl.bindBet();
          //监听老牛动画播放
          var ani = this.bullAnim.getComponent(sp.Skeleton);
          ani.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case "idle2":
                ani.setAnimation(0, "idle", true);
                break;
              case "wild_collect":
                ani.setAnimation(0, "idle", true);
                break;
              case "win":
                ani.setAnimation(0, "idle", true);
                break;
              case "win2":
                ani.setAnimation(0, "idle", true);
                break;
              case "win3":
                ani.setAnimation(0, "rsg_win_exit", false);
                break;
              case "rs_start":
                ani.setAnimation(0, "rs_idle", true);
                break;
              case "dup":
                ani.setAnimation(0, "rs_idle", true);
                break;
              case "rs_exit":
                ani.setAnimation(0, "idle", true);
                break;
              case "rsg_win_exit":
                ani.setAnimation(0, "idle", true);
                break;
              case "rs_win":
                ani.setAnimation(0, "rsg_win_idle", true);
                break;
            }
          });
        };
        _proto.update = function update() {};
        _proto.onCLick = function onCLick(event, args) {
          switch (args) {
            case "roll":
              this.startRoll();
              break;
            case "add":
              // this.add();
              this.add();
              break;
            case "dec":
              this.dec();
              break;
            case "lastmoney":
              ox.lastmoneyPanel.showPanel();
              break;
            case "help":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
              // ox.rulePanel.showPanel();
              break;
            case "pay":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
              // ox.payPanel.showPanel();
              break;
            case "exitGame":
              this.onBtnExitClicked();
              break;
          }
        };
        _proto.onBtnExitClicked = function onBtnExitClicked() {
          //this.node.getParent().getChildByName('Machine').getComponent(AudioSource).stop();
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ok) {
                    ox.node.close();
                    RoomMgr.inst.exitRoom();
                    //tgx.SceneUtil.loadScene(Slots4GameMgr.inst.entryScene);
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
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || this.bIsFreeGame || this.delayClick || ox.rollEnable == false) {
            return;
          }
          if (!ox.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this2.delayClick = false;
            }, 1);
            if (ox.status == 0) {
              ox.status = 2;
              this.sendRoll();
            } else if (ox.status == 1) {
              this.slotCtrl.setSpinAnim(3);
              this.stopImmediately();
            }
          }
        };
        _proto.add = function add() {
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || ox.auto) {
            return;
          }
          ox.sumIdx += 1;
          ox.sumIdx = this.slotCtrl.updateBet(ox.sumIdx) == 0 ? ox.sumIdx - 1 : ox.sumIdx;
        };
        _proto.dec = function dec() {
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || ox.auto) {
            return;
          }
          ox.sumIdx -= 1;
          ox.sumIdx = this.slotCtrl.updateBet(ox.sumIdx) == 0 ? ox.sumIdx + 1 : ox.sumIdx;
        };
        _proto.startAuto = function startAuto(n) {
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || this.bIsFreeGame || this.delayClick) {
            return;
          }
          if (ox.status == 0) {
            ox.auto = true;
            ox.autoTimes = n;
            this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            if (n > 999) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
            }
            this.slotCtrl.Btn_stopAuto.active = ox.auto;
            this.slotCtrl.Btn_start.active = !this.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1);
          }
        };
        _proto.stopAuto = function stopAuto() {
          ox.auto = false;
          ox.autoTimes = 0;
        };
        _proto.stateCallBack = function stateCallBack() {
          var _this3 = this;
          var st = 0;
          for (var i in ox.wheelList) {
            if (ox.wheelList[i].status) {
              st = 1;
              break;
            }
          }
          ox.status = st;
          if (ox.status == 0) {
            if (this.stateCallBackBn) {
              return;
            }
            this.stateCallBackBn = true;
            this.scheduleOnce(function () {
              _this3.stateCallBackBn = false;
            }, 1);
            //结束当前轮盘
            if (ox.lotteryRes.winscore > 0) {
              this.slotCtrl.setSpinAnim(3);
            } else {
              this.slotCtrl.setSpinAnim(2);
            }
            if (!this.bIsFreeGame) {
              //延迟一点让立即结束落位
              this.scheduleOnce(function () {
                //万能牌特效
                for (var _i in ox.wheelList) {
                  var n = 4;
                  if (Number(_i) == 1) {
                    n = 5;
                  }
                  var _loop = function _loop() {
                    if (ox.wheelList[_i].roleIdList[j + 1] == 7) {
                      ox.wheelList[_i].rolePbList[j + 1].children[0].getComponent(sp.Skeleton).setAnimation(0, "spawn", true);
                      var pb = instantiate(_this3.wildEffectPb);
                      var transForm = ox.wheelList[_i].rolePbList[j + 1].getComponent(UITransform);
                      var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
                      transForm = _this3.node.getComponent(UITransform);
                      var p = transForm.convertToNodeSpaceAR(newVec3);
                      pb.position = p;
                      _this3.node.addChild(pb);
                      tween(pb).delay(0.5).call(function () {
                        var _getComponent;
                        _this3.audio.playParticalStart();
                        (_getComponent = _this3.bullAnim.getComponent(sp.Skeleton)) == null || _getComponent.setAnimation(0, "wild_collect", false);
                      }).to(0.3, {
                        position: new Vec3(202, -202, 0)
                      }).call(function () {
                        _this3.audio.playWildOx();
                        _this3.audio.playParticalEnd();
                        pb.parent = null;
                      }).start();
                    }
                  };
                  for (var j = 0; j <= n - 2; j++) {
                    _loop();
                  }
                }
              }, 0.1);
            } else {
              ox.rollIndex++;
              if (ox.rollIndex < ox.lotteryRes.getBigWin.res_list.length) {
                this.bigWinRollNext(ox.lotteryRes.getBigWin.res_list[ox.rollIndex].nHandCards);
              }
            }
            var rIndex = ox.lotteryRes.getBigWin.res_list.length;
            if (this.bIsFreeGame) {
              this.freeGameCoin += ox.lotteryRes.winscore;
            }
            var freeFlag = ox.lotteryRes.getFreeTime.bFlag;
            this.scheduleOnce(function () {
              if (rIndex == ox.rollIndex || rIndex == 1) {
                _this3.playWinAnim(freeFlag);
              }
              if (!ox.auto) ;
            }, 1);
            if (ox.lotteryRes.getFreeTime.bFlag) {
              if (this.freeTimes == 0) {
                ox.auto = false;
                this.freeTimes = ox.lotteryRes.getFreeTime.nFreeTime;
                this.freeTimes--;
                this.scheduleOnce(function () {
                  _this3.closeShine();
                  _this3.startFreeGame();
                }, 2);
              } else {
                this.freeTimes = ox.lotteryRes.getFreeTime.nFreeTime;
                this.stopFree = false;
              }
            }
          }
        }

        //免费次数有关
        ;

        _proto.startFreeGame = function startFreeGame() {
          console.log("startFreeGame");
          this.audio.playBgm();
          this.freeGameCoin = 0;
          this.bIsFreeGame = true;
          this.freeBgNode.active = true;
          ox.auto = true;
          this.sendRoll();
        };
        _proto.stopFreeTimes = function stopFreeTimes() {
          var _this4 = this;
          console.log("stopFreeTimes freeGameCoin : ", this.freeGameCoin);
          this.audio.playBgm();
          ox.auto = false;
          this.scheduleOnce(function () {
            _this4.freeBgNode.active = false;
            _this4.bIsFreeGame = false;
          }, 2);
        };
        _proto.playWinAnim = function playWinAnim(freeTimeFlag) {
          var _this5 = this;
          //动画结束后自动roll
          var hasWinBool = 0;
          var allLine = [];
          for (var i in ox.lotteryRes.nWinCards) {
            if (ox.lotteryRes.nWinCards[i]) {
              allLine.push(i);
            }
          }
          var lines = ox.lotteryRes.nWinLinesDetail;
          var rIndex = ox.rollIndex;
          var list = this.freeTimes > 0 || this.stopFree ? [allLine] : [allLine].concat(lines);
          hasWinBool = list.length - 1;
          if (ox.lotteryRes.winscore > 0) {
            if (ox.lotteryRes.isAllWin) {
              this.showAllWin();
            } else {
              this.showWin();
            }
          } else {
            this.slotCtrl.setSpinAnim(0);
            this.scheduleOnce(function () {
              _this5.slotCtrl.setSpinAnim(0);
              if (ox.auto && ox.autoTimes > 0) {
                _this5.scheduleOnce(_this5.sendRoll, 1.5);
              }
            }, 1);
          }
          var animIndex = 0;
          this.showLine = function () {
            if (rIndex == ox.rollIndex) {
              this.closeShine();
              for (var _i2 = 0; _i2 < 12; _i2++) {
                this.closeAnim(_i2 % 3, parseInt(_i2 / 3 + ""));
              }
              if (!!!list[animIndex] || list[animIndex].length == 0) {
                return;
              }
              this.maskNode.active = true;
              for (var j in list[animIndex]) {
                this.showAnim(list[animIndex][j] % 3, parseInt(list[animIndex][j] / 3 + ""));
              }
              if (animIndex == 0) {
                this.audio.playWinFirst();
                for (var _i3 = 0; _i3 < ox.lotteryRes.nWinLines.length; _i3++) {
                  this.effectLine.children[ox.lotteryRes.nWinLines[_i3]].active = true;
                  this.effectNum.children[ox.lotteryRes.nWinLines[_i3]].active = true;
                }
              } else {
                this.audio.playWinLoop();
                //中奖数字和位置
                if (ox.lotteryRes.nWinLines.length > 0) {
                  this.coinLineLab.node.active = true;
                  this.coinLineLab.node.y = ox.winLinePos[ox.lotteryRes.nWinLines[animIndex - 1]];
                  this.coinLineLab.string = Num.fixNum(ox.exchangeRate, ox.lotteryRes.nWinDetail[animIndex - 1]);
                  this.effectLine.children[ox.lotteryRes.nWinLines[animIndex - 1]].active = true;
                  this.effectNum.children[ox.lotteryRes.nWinLines[animIndex - 1]].active = true;
                }
              }
              animIndex++;
              if (animIndex == ox.lotteryRes.nWinLines.length + 1) {
                animIndex = 0;
              }
            }
          };
          if (ox.auto) {
            this.schedule(this.showLine, 3, 1, 0.01);
          } else {
            this.schedule(this.showLine, 3, macro.REPEAT_FOREVER, 0.01);
          }
          if (ox.lotteryRes.winscore <= ox.betSum * 20) {
            this.slotCtrl.setSpinAnim(0);
          }
          this.scheduleOnce(function () {
            _this5.tipNode.active = true;
            _this5.winNode.active = false;
            _this5.win2BG.active = false;
            _this5.win3BG.active = false;
            if (_this5.stopFree) {
              _this5.stopFree = false;
              _this5.stopFreeTimes();
              _this5.closeShine();
            }
            if (_this5.freeTimes > 0 && !freeTimeFlag) {
              _this5.freeTimes--;
              // ((((this.slotCtrl as oxSlotCtrl).Btn_free as Node).getChildByName('auto_lab') as Node).getComponent(Label) as Label).string = this.freeTimes;
              if (_this5.freeTimes == 0) {
                _this5.stopFree = true;
              }
            }
          }, hasWinBool > 0 ? hasWinBool * 3 : 1);
        };
        _proto.showAllWin = function showAllWin() {
          var _this6 = this;
          var coin = ox.lotteryRes.winscore / 10;
          this.slotCtrl.playAnimWin(-1, coin);
          this.showWinNode(coin);
          var x10 = instantiate(this.free_X10Effect);
          x10.active = true;
          x10.parent = this.winNode.parent;
          x10.y = x10.y + 200;
          x10.scale = new Vec3(0.1, 0.1);
          x10.opacity = 255;
          tween(x10).to(0.6, {
            scale: new Vec3(1, 1),
            y: 313
          }).delay(0.3).to(0.6, {
            scale: new Vec3(0, 0),
            y: this.winNode.y
          }).call(function () {
            _this6.winNodeJump();
          }).delay(1).call(function () {
            x10.parent = null;
            _this6.showWin();
          }).start();
        };
        _proto.winNodeJump = function winNodeJump() {
          var _jump$getComponent;
          var jump = find("infoboard_a/jump", this.node);
          jump.active = true;
          (_jump$getComponent = jump.getComponent(Animation)) == null || _jump$getComponent.play();
          tween(this.winNode).to(0.3, {
            scale: new Vec3(1.3, 1.3)
          }).to(0.3, {
            scale: new Vec3(1, 1)
          }).delay(0.4).call(function () {
            jump.active = false;
          }).start();
        };
        _proto.showWinNode = function showWinNode(coin) {
          this.tipNode.active = false;
          this.winNode.active = true;
          this.winNode.children[1].active = true;
          this.winNode.children[2].active = false;
          if (coin < ox.betSum * 5) {
            var _this$win2BG$children;
            this.audio.playWinOx();
            this.win2BG.active = true;
            (_this$win2BG$children = this.win2BG.children[2].getComponent(Animation)) == null || _this$win2BG$children.play();
            this.win3BG.active = false;
          } else {
            var _this$win3BG$children;
            this.audio.playMegaWinOx();
            this.win2BG.active = false;
            this.win3BG.active = true;
            (_this$win3BG$children = this.win3BG.children[2].getComponent(Animation)) == null || _this$win3BG$children.play();
          }
        };
        _proto.showWin = function showWin() {
          if (!this.bIsFreeGame) {
            this.audio.playBW();
            //判断播放金币掉落动画
            if (ox.lotteryRes.winscore > ox.betSum * 20) {
              this.slotCtrl.playBigWinCoin(ox.lotteryRes.winscore);
              // this.slotCtrl.playAnimWin(1, ox.lotteryRes.winscore);
              //播放大奖声音
              this.audio.playbigwinmain();
            } else if (ox.lotteryRes.winscore > ox.betSum * 5) {
              this.slotCtrl.playAnimWin(0, ox.lotteryRes.winscore);
            } else {
              this.slotCtrl.playAnimWin(-1, ox.lotteryRes.winscore);
            }
            this.showWinNode(ox.lotteryRes.winscore);
            if (ox.lotteryRes.winscore < ox.betSum * 3) {
              var _this$bullAnim$getCom;
              (_this$bullAnim$getCom = this.bullAnim.getComponent(sp.Skeleton)) == null || _this$bullAnim$getCom.setAnimation(0, "win", false);
            } else {
              var _this$bullAnim$getCom2;
              (_this$bullAnim$getCom2 = this.bullAnim.getComponent(sp.Skeleton)) == null || _this$bullAnim$getCom2.setAnimation(0, "win2", false);
            }
          } else {
            //判断播放金币掉落动画
            if (ox.lotteryRes.winscore > ox.betSum * 20) {
              this.slotCtrl.playBigWinCoin(ox.lotteryRes.winscore);
              // this.slotCtrl.playAnimWin(1, ox.lotteryRes.winscore);
              //播放大奖声音
            } else if (ox.lotteryRes.winscore > ox.betSum * 5) {
              this.slotCtrl.playAnimWin(0, ox.lotteryRes.winscore);
            } else {
              this.slotCtrl.playAnimWin(-1, ox.lotteryRes.winscore);
            }
            this.audio.playBigWinOx();
            this.showWinNode(ox.lotteryRes.winscore);
            if (ox.lotteryRes.winscore < ox.betSum * 3) {
              var _getComponent2;
              (_getComponent2 = this.bullAnim.getComponent(sp.Skeleton)) == null || _getComponent2.setAnimation(0, "win3", false);
              this.exitBigWin(false);
            } else {
              var _getComponent3;
              (_getComponent3 = this.bullAnim.getComponent(sp.Skeleton)) == null || _getComponent3.setAnimation(0, "rs_win", false);
              this.exitBigWin(true);
            }
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          this.slotCtrl.playAnimWin(-1, ox.lotteryRes.winscore);
          this.showWinNode(ox.lotteryRes.winscore);
          if (ox.auto && ox.autoTimes > 0) {
            this.scheduleOnce(this.sendRoll, 1);
          }
        }

        //退出大奖模式
        ;

        _proto.exitBigWin = function exitBigWin(isBigWin) {
          var _this7 = this;
          var bg = find("bg", this.node);
          tween(bg).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }).call(function () {
            _this7.audio.playBigWinExitOx();
            _this7.freeLightNode.active = false;
            _this7.freeWheelLightEffect.active = false;
            _this7.bIsFreeGame = false;
            _this7.freeEffectNode.getChildByName("MF_txt").active = false;
            _this7.freeBgNode.active = false;
            _this7.freeEffectNode.getChildByName("MF_fastspin").active = false;
            _this7.maskNode2.active = false;
            if (isBigWin) {
              var _getComponent4;
              (_getComponent4 = _this7.bullAnim.getComponent(sp.Skeleton)) == null || _getComponent4.setAnimation(0, "rsg_win_exit", false);
            }
          }).start();
          var effectNode = find("effectNode", this.node);
          tween(effectNode).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }).call(function () {
            _this7.audio.playBgm();
          }).start();
        }

        //0-5 0-2
        ;

        _proto.showAnim = function showAnim(cols, index) {
          var targetIdx = index + 1;
          for (var i in ox.wheelList[cols].rolePbList[targetIdx].children) {
            ox.wheelList[cols].rolePbList[targetIdx].children[i].active = false;
          }

          //添加结束
          var nodeList = this.effectLight.children;
          var posIndex = cols * 4 + index;
          nodeList[posIndex].active = true;
          var nodeList2 = this.effectCard.children;
          var _loop2 = function _loop2() {
            var item = nodeList2[posIndex].children[_i4];
            if (_i4 == ox.wheelList[cols].roleIdList[targetIdx] - 1) {
              item.active = true;
              var ani = item.getComponent(sp.Skeleton);
              ani.setCompleteListener(function (event) {
                switch (event.animation.name) {
                  case "win":
                    ani.setAnimation(0, "win_bg", true);
                    break;
                }
              });
              ani.setAnimation(0, "win", false);
            } else {
              item.active = false;
            }
          };
          for (var _i4 = 0; _i4 < nodeList2[posIndex].children.length; _i4++) {
            _loop2();
          }
        };
        _proto.closeAnim = function closeAnim(cols, index) {
          var targetIdx = index + 1;
          // for (let i in ox.wheelList[cols].rolePbList[targetIdx].children) {
          //     ox.wheelList[cols].rolePbList[targetIdx].children[i].active = true;
          // }
          ox.wheelList[cols].rolePbList[targetIdx].children[0].active = true;

          //添加结束
          var nodeList = this.effectLight.children;
          nodeList[cols * 4 + index].active = false;
          var nodeList2 = this.effectCard.children;
          for (var i = 0; i < nodeList2[cols * 4 + index].children.length; i++) {
            nodeList2[cols * 4 + index].children[i].active = false;
          }
        };
        _proto.roll = function roll(list) {
          var _this8 = this;
          ox.status = 1;
          var line = [];
          for (var i = 0; i < 3; i++) {
            line[i] = [];
          }
          for (var _i5 in list) {
            line[Number(_i5) % 3][3 - parseInt(Number(_i5) / 3 + "")] = list[_i5];
          }

          //判断是否进大奖
          if (ox.lotteryRes.getBigWin.bFlag) {
            var bigWinResult = ox.lotteryRes.getBigWin;
            this.bIsFreeGame = true;
            this.scheduleOnce(function () {
              var _this8$bullAnim$getCo;
              (_this8$bullAnim$getCo = _this8.bullAnim.getComponent(sp.Skeleton)) == null || _this8$bullAnim$getCo.setAnimation(0, "rs_start", false);
              _this8.audio.playBigWinInOx();
              if (bigWinResult.isStart) {
                var _this8$freeCoinEffect;
                //成功触发大奖
                (_this8$freeCoinEffect = _this8.freeCoinEffect.getComponent(Animation)) == null || _this8$freeCoinEffect.play("mf_coin2");
                var bg = find("bg", _this8.node);
                tween(bg).to(1, {
                  scale: new Vec3(0.9, 0.9, 0.9)
                }).call(function () {
                  var _getComponent5, _getComponent6;
                  _this8.audio.playJumpOx();
                  (_getComponent5 = _this8.bullAnim.getComponent(sp.Skeleton)) == null || _getComponent5.setAnimation(0, "dup", false);
                  _this8.freeLightNode.active = true;
                  _this8.freeWheelLightEffect.active = true;
                  (_getComponent6 = _this8.freeWheelLightEffect.getComponent(Animation)) == null || _getComponent6.play();
                }).delay(0.7).call(function () {
                  var _getComponent7;
                  _this8.audio.playBgm();
                  _this8.audio.playBigWinTitle();
                  _this8.freeEffectNode.getChildByName("MF_txt").active = true;
                  (_getComponent7 = _this8.freeEffectNode.getChildByName("MF_txt").getComponent(Animation)) == null || _getComponent7.play("MF_txt_in");
                }).delay(0.42).call(function () {
                  var _getComponent8;
                  (_getComponent8 = _this8.freeEffectNode.getChildByName("MF_txt").getComponent(Animation)) == null || _getComponent8.play("MF_txt_loop");
                }).delay(1.2).call(function () {
                  _this8.freeBgNode.active = true;
                }).start();
                var effectNode = find("effectNode", _this8.node);
                tween(effectNode).delay(0.3).to(0.5, {
                  position: new Vec3(0, -25, 0),
                  scale: new Vec3(0.9, 0.9, 0.9)
                }).start();
              } else {
                var _this8$freeCoinEffect2;
                //失败退出
                (_this8$freeCoinEffect2 = _this8.freeCoinEffect.getComponent(Animation)) == null || _this8$freeCoinEffect2.play("mf_coin");
                var _bg = find("bg", _this8.node);
                tween(_bg).delay(0.3).to(1, {
                  scale: new Vec3(0.95, 0.95, 0.95)
                }).call(function () {
                  var _getComponent9;
                  (_getComponent9 = _this8.bullAnim.getComponent(sp.Skeleton)) == null || _getComponent9.setAnimation(0, "rs_exit", false);
                }).to(0.5, {
                  scale: new Vec3(1, 1, 1)
                }).call(function () {
                  _this8.bIsFreeGame = false;
                }).start();
                var _effectNode = find("effectNode", _this8.node);
                tween(_effectNode).to(1, {
                  scale: new Vec3(0.95, 0.95, 0.95)
                }).to(0.5, {
                  scale: new Vec3(1, 1, 1)
                }).call(function () {
                  _this8.audio.playBgm();
                }).start();
              }
            }, 0.5);
            if (!ox.lotteryRes.getBigWin.isStart) {
              for (var _i6 = 0; _i6 < ox.wheelList.length; _i6++) {
                var _ox$wheelList$_i;
                (_ox$wheelList$_i = ox.wheelList[_i6]).startFreeRoll.apply(_ox$wheelList$_i, line[_i6]);
              }
            } else {
              for (var _i7 = 0; _i7 < ox.wheelList.length; _i7++) {
                var _ox$wheelList$_i2;
                (_ox$wheelList$_i2 = ox.wheelList[_i7]).FreeRoll.apply(_ox$wheelList$_i2, line[_i7]);
              }
              setTimeout(function () {
                _this8.play_middleWheelAnim();
              }, 1000);
            }
          } else {
            if (!this.bIsFreeGame) {
              for (var _i8 = 0; _i8 < ox.wheelList.length; _i8++) {
                var _ox$wheelList$_i3;
                (_ox$wheelList$_i3 = ox.wheelList[_i8]).startRoll.apply(_ox$wheelList$_i3, line[_i8]);
              }
            } else {
              for (var _i9 = 0; _i9 < ox.wheelList.length; _i9++) {
                var _ox$wheelList$_i4;
                (_ox$wheelList$_i4 = ox.wheelList[_i9]).FreeRoll.apply(_ox$wheelList$_i4, line[_i9]);
              }
              setTimeout(function () {
                _this8.play_middleWheelAnim();
              }, 1000);
            }
          }
        };
        _proto.bigWinRollNext = function bigWinRollNext(list) {
          var _this9 = this;
          ox.status = 1;
          var line = [];
          for (var i = 0; i < 3; i++) {
            line[i] = [];
          }
          for (var _i10 in list) {
            line[Number(_i10) % 3][3 - parseInt(Number(_i10) / 3 + "")] = list[_i10];
          }
          for (var _i11 = 0; _i11 < ox.wheelList.length; _i11++) {
            var _ox$wheelList$_i5;
            (_ox$wheelList$_i5 = ox.wheelList[_i11]).FreeRoll.apply(_ox$wheelList$_i5, line[_i11]);
          }
          setTimeout(function () {
            _this9.play_middleWheelAnim();
          }, 1000);
        };
        _proto.closeShine = function closeShine() {
          for (var i = 0; i < this.effectLine.children.length; i++) {
            this.effectLine.children[i].active = false;
          }
          for (var _i12 = 0; _i12 < this.effectNum.children.length; _i12++) {
            this.effectNum.children[_i12].active = false;
          }
          for (var _i13 = 0; _i13 < this.effectLight.children.length; _i13++) {
            this.effectLight.children[_i13].active = false;
          }
          for (var _i14 = 0; _i14 < this.effectCard.children.length; _i14++) {
            for (var j = 0; j < this.effectCard.children[_i14].children.length; j++) {
              this.effectCard.children[_i14].children[j].active = false;
            }
          }
          for (var _i15 = 0; _i15 < ox.wheelList.length; _i15++) {
            for (var _j = 0; _j < ox.wheelList[_i15].rolePbList.length; _j++) {
              if (ox.wheelList[_i15].roleIdList[_j] != 7) {
                ox.wheelList[_i15].rolePbList[_j].children[0].active = true;
              }
            }
          }
          this.maskNode.active = false;
          this.maskNode2.active = false;
          this.coinLineLab.node.active = false;
        };
        _proto.sendRoll = function sendRoll() {
          var _this10 = this;
          if (this.slotCtrl.playOverBn == false) {
            return;
          }
          this.stateCallBackBn = false;
          this.unschedule(this.showLine);
          if (ox.detail) {
            if (this.deskMask) {
              this.deskMask.active = false;
            }
            ox.detail.node.active = false;
            ox.detail = null;
          }
          if (this.winNode.active) {
            this.tipNode.active = true;
          }
          this.winNode.active = false;
          this.win2BG.active = false;
          this.win3BG.active = false;
          ox.rollIndex++;
          this.closeShine();
          this.slotCtrl.unscheduleAllCallbacks();
          this.tipNode.active = true;
          this.winNode.active = false;
          this.win2BG.active = false;
          this.win3BG.active = false;
          this.slotCtrl.unscheduleAllCallbacks();
          ox.autoTimes = ox.autoTimes > 0 ? ox.autoTimes - 1 : 0;
          if (ox.autoTimes == 0) {
            ox.auto = false;
            ox.rollEnable = true;
          }
          // this.slotCtrl.Btn_stopAuto.active = (this.auto && this.freeTimes == 0);
          tween(this.node).delay(0.1).call(function () {
            _this10.slotCtrl.setSpinAnim(1);
          }).start();
          var autoTimesLab = this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = ox.autoTimes + "";
          this.audio.playclickstart();
          if (ox.autoTimes > 999) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
          } else if (ox.autoTimes > 99) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
          } else {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
          }
          if (!this.bIsFreeGame) {
            for (var i in ox.wheelList) {
              ox.wheelList[i].rollLoop();
            }
          }
          this.sendLottery();
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin, data;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.playSlots(SubGameDef.SLOTS_OX, ox.betSum.toString());
                case 2:
                  retSpin = _context2.sent;
                  console.log('retSpin is', retSpin);
                  data = this.exchange(retSpin.res);
                  console.log("data is ", data);
                  this.lotteryBack(data);
                case 7:
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
          // ox.lotteryRes = res;
          var mydata = res;
          return mydata;
        };
        _proto.lotteryBack = function lotteryBack(data) {
          var _this11 = this;
          console.log('lotteryResult:', data);
          if (data && data.code == 0) {
            ox.lotteryRes = data;
            ox.rollIndex = 0;
            ox.money = data.userscore;
            this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(ox.exchangeRate, ox.money - data.winscore);
            // this.slotCtrl.winCoin_lab.string = Num.exchangeToThousands(ox.exchangeRate, data.winscore);
            tween(this.node).delay(0.4).call(function () {
              if (ox.lotteryRes.getBigWin.bFlag) {
                _this11.roll(ox.lotteryRes.getBigWin.res_list[ox.rollIndex].nHandCards);
              } else {
                _this11.roll(data.nHandCards);
              }
            }).start();
          }
        };
        _proto.stopImmediately = function stopImmediately() {
          if (!ox.auto) {
            for (var i in ox.wheelList) {
              ox.wheelList[i].stopImmediately();
            }
          }
        }

        //免费模式点亮中间转轴
        ;

        _proto.play_middleWheelAnim = function play_middleWheelAnim() {
          var _this12 = this;
          this.scheduleOnce(function () {
            var _getComponent10, _getComponent11;
            _this12.audio.playBigWinFastSpin();
            _this12.freeEffectNode.getChildByName("MF_fastspin").active = true;
            (_getComponent10 = _this12.freeEffectNode.getChildByName("MF_fastspin").getComponent(Animation)) == null || _getComponent10.play();
            _this12.maskNode2.active = true;
            _this12.playX10();
            (_getComponent11 = _this12.free_X10Effect.getComponent(Animation)) == null || _getComponent11.play();
            var rx = Math.random() * 16 - 8;
            var ry = Math.random() * 16 - 8;
            tween(_this12.node).to(0.06, {
              position: new Vec3(rx, ry, 0)
            }).to(0.06, {
              position: new Vec3(-rx, -ry, 0)
            }).union().repeat(20).start();
          }, 5);
        };
        _proto.playX10 = function playX10() {
          var _this13 = this;
          this.free_X10Effect.active = true;
          if (this.isX10()) ;else {
            this.scheduleOnce(function () {
              _this13.free_X10Effect.active = false;
            }, 3.5);
          }
        };
        _proto.isX10 = function isX10() {
          var nHandCards;
          if (ox.lotteryRes.getBigWin.res_list.length > 1) {
            nHandCards = ox.lotteryRes.getBigWin.res_list[ox.rollIndex].nHandCards;
          } else {
            nHandCards = ox.lotteryRes.nHandCards;
          }
          var x10Num = 7;
          for (var i = 0; i < nHandCards.length; i++) {
            var num = nHandCards[i];
            if (num != 7) {
              if (x10Num == 7) {
                x10Num = num;
              } else {
                if (x10Num != num) {
                  return false;
                }
              }
            }
          }
          return true;
        };
        _proto.close = function close() {
          this.audio.clearAll();
        };
        return oxMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rolePb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "detailPb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wildEffectPb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "effectNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "effectLight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "effectCard", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maskNode2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "effectLine", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "BgNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "freeBgNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "freeEffectNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "freeCoinEffect", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "freeLightNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "freeWheelLightEffect", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "free_X10Effect", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "win2BG", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "win3BG", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "winNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "coinBoomEffect", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "coinLineLab", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bullAnim", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "deskMask", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec26], {
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

System.register("chunks:///_virtual/oxSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts', './Num.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, sp, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, ox, Num, LanguageData;
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
      sp = module.sp;
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
      ox = module.ox;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "aaf969H+BJKK6K35kjlICZN", "oxSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var oxSlotCtrl = exports('oxSlotCtrl', (_dec = ccclass('oxSlotCtrl'), _dec2 = property({
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
        tooltip: "免费按钮"
      }), _dec9 = property({
        type: Node,
        tooltip: "加注"
      }), _dec10 = property({
        type: Node,
        tooltip: "减注"
      }), _dec11 = property({
        type: Node,
        tooltip: "自动面板"
      }), _dec12 = property({
        type: Node,
        tooltip: "设置"
      }), _dec13 = property({
        type: Node,
        tooltip: "下注面板"
      }), _dec14 = property({
        type: Node,
        tooltip: "设置面板"
      }), _dec15 = property({
        type: Node,
        tooltip: "金币面板"
      }), _dec16 = property({
        type: Label,
        tooltip: "用户金币"
      }), _dec17 = property({
        type: Label,
        tooltip: "本局总注"
      }), _dec18 = property({
        type: Label,
        tooltip: "赢钱金额"
      }), _dec19 = property({
        type: Label,
        tooltip: "大奖赢钱金额"
      }), _dec20 = property({
        type: Node,
        tooltip: "状态节点"
      }), _dec21 = property({
        type: Node,
        tooltip: "大奖节点"
      }), _dec22 = property({
        type: Node,
        tooltip: "提示文字"
      }), _dec23 = property({
        type: Node,
        tooltip: "音乐"
      }), _dec24 = property({
        type: SpriteFrame,
        tooltip: "sp_settingControl"
      }), _dec25 = property({
        type: Node,
        tooltip: "极速"
      }), _dec26 = property({
        type: SpriteFrame,
        tooltip: "sp_speed"
      }), _dec27 = property({
        type: SpriteFrame,
        tooltip: "sp2_speed"
      }), _dec28 = property({
        type: sp.Skeleton,
        tooltip: "avatar"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(oxSlotCtrl, _Component);
        function oxSlotCtrl() {
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
          _initializerDefineProperty(_this, "Btn_free", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_add", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_sub", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_auto", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_set", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betting_panel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Setting_panel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin_panel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserCoin", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurBet", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCoin_lab", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinCoin_lab", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stateNode", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinNode", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicBtn", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_settingControl", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedBtn", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_speed", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp2_speed", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatar", _descriptor27, _assertThisInitialized(_this));
          _this.autoNum = 0;
          _this.isPanelAnim = false;
          _this.isSpeed = false;
          _this.sumList = [];
          _this._btnContent = null;
          _this.curBetTween = null;
          /**winNode label */
          _this.winAimCoin = 0;
          _this.winAddcoin = 0;
          _this.winAddOnce = 0;
          _this._winPlayOverBn = false;
          //大奖数字滚动动画
          _this.aimCoin = 0;
          _this.addcoin = 0;
          _this.addOnce = 0;
          _this._playOverBn = true;
          _this.bigBn = false;
          _this.superBn = false;
          _this.megaBn = false;
          //创建提示文字
          _this.tipTween = null;
          return _this;
        }
        var _proto = oxSlotCtrl.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.avatar.setCompleteListener(function (event) {
            if (event.animation.name == "rsg_spawn") {
              _this2.avatar.setAnimation(0, "rsg_win_idle2", true);
            }
          });
          this.Btn_start.on(Node.EventType.MOUSE_ENTER, this.btnRollTouchStart, this);
          this.Btn_start.on(Node.EventType.MOUSE_LEAVE, this.btnRollTouchEnd, this);
          this.Btn_start.on(Node.EventType.TOUCH_START, this.btnRollClick, this);
          this.Btn_stopAuto.on(Node.EventType.MOUSE_ENTER, this.btnStopRollTouchStart, this);
          this.Btn_stopAuto.on(Node.EventType.MOUSE_LEAVE, this.btnStopRollTouchEnd, this);
          this.Btn_stopAuto.on(Node.EventType.TOUCH_START, this.btnStopRollClick, this);
          this.autoNum = 0; //自动次数
          this.isPanelAnim = false;
          this.isSpeed = false;
          // this.settingInit_Function();
          // this.initCarlender();
          this.init();
        };
        _proto.btnRollTouchStart = function btnRollTouchStart() {
          if (!ox.rollEnable) {
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
          if (!ox.rollEnable) {
            return;
          }
          ox.node.onCLick(e, 'roll');
        };
        _proto.btnStopRollTouchStart = function btnStopRollTouchStart() {
          if (this.stopRollClickAni) {
            this.stopRollClickAni.active = true;
            this.stopRollClickAni.getComponent(Animation).play();
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

        //开始自动
        ;

        _proto.onCLick_startAuto = function onCLick_startAuto() {
          if (this.autoNum > 0) ;
        }

        //停止自动
        ;

        _proto.onCLick_stopAuto = function onCLick_stopAuto() {
          this.Btn_stopAuto.active = false;
          this.Btn_start.active = true;
          ox.node.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(ox.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(ox.exchangeRate, ox.money);
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
          if (!ox.betNum) {
            ox.sumIdx = 0;
            ox.betNum = this.sumList[ox.sumIdx];
          } else {
            ox.sumIdx = this.sumList.indexOf(ox.betNum);
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
          ox.node.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          ox.autoPanel.showPanel();
        }

        //关闭自动弹板
        ;

        _proto.onCLick_closeAutoPanel = function onCLick_closeAutoPanel() {
          ox.node.audio.playclickclose();
          // this.Auto_panel.getComponent('autoPanel').hidePanel();
        };
        //打开设置界面
        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          ox.node.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", ox.node.node);
          if (footer) {
            footer.active = false;
          }
          this.Btn_start.active = false;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, -180, 0),
            opacity: 0
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, 60, 0),
            opacity: 255
          }).start();
        }

        //打开设置界面
        ;

        _proto.onCLickHideSettingPanel = function onCLickHideSettingPanel(event) {
          if (this.Setting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", ox.node.node);
          if (footer) {
            footer.active = true;
          }
          this.Btn_start.active = true;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, 0, 0),
            opacity: 255
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, -120, 0),
            opacity: 0
          }).start();
        }

        //下注弹板开关
        ;

        _proto.onCLick_betPanel = function onCLick_betPanel(event, args) {
          var _this3 = this;
          var type = parseInt(args);
          if (this.isPanelAnim) {
            return;
          }
          this.isPanelAnim = true;
          this.scheduleOnce(function () {
            _this3.isPanelAnim = false;
          }, 0.5);
          if (type == 0) {
            ox.betPanel.hidePanel();
          } else {
            ox.betPanel.showPanel();
            ox.betPanel.bindBet();
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
          ox.node.audio.playclickopen();
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
          ox.sumIdx = this.sumList.indexOf(ox.betSum);
          if (ox.sumIdx == -1) {
            ox.sumIdx = 0;
          }
          this.updateBet(ox.sumIdx);
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
          if (ox.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (ox.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (ox.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (ox.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          ox.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(ox.exchangeRate, this.sumList[idx]);
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
          var t = (type + 1) * 30; //变化次数
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
          ox.node.winNode.children[0].getComponent(Label).string = Num.exchangeToThousands(ox.exchangeRate, coin);
          this.winCoin_lab.string = Num.exchangeToThousands(ox.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(ox.exchangeRate, ox.lotteryRes.userscore - ox.lotteryRes.winscore + coin);
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
          this.unschedule(this.winOneChange);
          this.winPlayOverBn = true;
        };
        _proto.playBigWinCoin = function playBigWinCoin(coin) {
          ox.node.unschedule(ox.node.sendRoll);
          this.bigWinNode.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(ox.exchangeRate, this.addcoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
        };
        _proto.coinOneChange = function coinOneChange() {
          this.addcoin += this.addOnce;
          if (this.addcoin >= this.aimCoin) {
            this.playBigWin(this.aimCoin);
            this.playCoinOver();
          } else {
            this.playBigWin(this.addcoin);
            this.bigWinCoin_lab.string = Num.exchangeToThousands(ox.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.avatar.setAnimation(0, "rs_idle2", true);
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(ox.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 2);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= ox.betSum * 50 && !this.bigWinNode.children[2].active && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= ox.betSum * 35 && coin < ox.betSum * 50 && !this.bigWinNode.children[1].active && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (this.bigBn == false) {
            this.playAnim_BigWin(-1);
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

        _proto.playAnim_BigWin = function playAnim_BigWin(coin) {
          this.bigWinNode.active = true;
          this.bigWinNode.children[0].active = true;
          this.bigWinNode.children[1].active = false;
          this.bigWinNode.children[2].active = false;
          this.bigWinNode.children[0].getComponent(Animation).play();
          this.avatar.setAnimation(0, "rsg_spawn", false);
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin(coin) {
          this.bigWinNode.active = true;
          this.bigWinNode.children[0].active = false;
          this.bigWinNode.children[1].active = true;
          this.bigWinNode.children[2].active = false;
          try {
            this.bigWinNode.children[1].getComponent(Animation).play();
          } catch (e) {
            console.log(e);
          }
        }

        //大奖MegaWin动画
        ;

        _proto.playAnim_MegaWin = function playAnim_MegaWin(coin) {
          this.bigWinNode.active = true;
          this.bigWinNode.children[0].active = false;
          this.bigWinNode.children[1].active = false;
          this.bigWinNode.children[2].active = true;
          try {
            this.bigWinNode.children[2].getComponent(Animation).play();
          } catch (e) {
            console.log(e);
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          this.unschedule(this.closeBigWin);
          this.unschedule(this.coinOneChange);
          if (this.bigWinNode.active) {
            this.bigWinNode.active = false;
            ox.node.audio.stopbigwinmain();
            this.setSpinAnim(0);
          }
          if (this.bigWinCoin_lab) {
            this.bigWinCoin_lab.string = "0";
          }
          ox.node.closeBigWin();
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              ox.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !ox.auto && this.setButtonState(true);
              if (ox.lotteryRes && ox.lotteryRes.winscore == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              ox.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(ox.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              ox.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              ox.rollEnable = false;
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
            _this4 = this;
          (_this$tipTween = this.tipTween) == null || _this$tipTween.stop();
          (_this$tipTween2 = this.tipTween) == null || _this$tipTween2.destroySelf();
          this.tipNode.opacity = 0;
          this.tipNode.scale = new Vec3(1, 1, 1);
          this.tipNode.getChildByName("lab").getComponent(Label).string = word;
          this.tipTween = tween(this.tipNode).call(function () {
            _this4.tipNode.opacity = 255;
          }).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).delay(2).to(0.2, {
            opacity: 0
          }).start();
        };
        _createClass(oxSlotCtrl, [{
          key: "btnContent",
          get: function get() {
            if (!this._btnContent) {
              this._btnContent = find('btnContent', this.betting_panel);
            }
            return this._btnContent;
          }
        }, {
          key: "winPlayOverBn",
          get: function get() {
            return this._winPlayOverBn;
          },
          set: function set(v) {
            this._winPlayOverBn = v;
          }
        }, {
          key: "playOverBn",
          get: function get() {
            return this._playOverBn;
          },
          set: function set(v) {
            this._playOverBn = v;
          }
        }]);
        return oxSlotCtrl;
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Btn_free", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Btn_add", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Btn_sub", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Btn_auto", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Btn_set", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "betting_panel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Setting_panel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "coin_panel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblUserCoin", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lblCurBet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "winCoin_lab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "bigWinCoin_lab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "stateNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bigWinNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "musicBtn", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "sp_settingControl", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "speedBtn", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "sp_speed", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "sp2_speed", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec28], {
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

System.register("chunks:///_virtual/oxWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, sp, tween, Vec3, instantiate, Label, Component, Button, UITransform, ox;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      sp = module.sp;
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      Button = module.Button;
      UITransform = module.UITransform;
    }, function (module) {
      ox = module.ox;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d13d7zja6hImb4xgQwzOgLu", "oxWheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ROLENUM = 30; //每一轮的角色数量
      var TIMEMIN = 1.6; //第一轮摇奖时间
      var FIRSTROLE = [
      //进入游戏时每列的角色
      [6, 6, 6, 6, 6], [7, 7, 7, 7, 7], [5, 5, 5, 5, 5]];
      var oxWheel = exports('oxWheel', (_dec = ccclass('oxWheel'), _dec2 = property({
        type: CCFloat,
        tooltip: "不会出现的数字id"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(oxWheel, _Component);
        function oxWheel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "wheelId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "excludeId", _descriptor2, _assertThisInitialized(_this));
          /**0停止 1转 */
          _this.status = 0;
          _this.nextCb = void 0;
          _this.rolePbList = [];
          _this.roleIdList = [];
          _this.lastResult = [];
          _this.lastResultNum = [];
          _this.p = 0;
          _this.nodeTween = null;
          return _this;
        }
        var _proto = oxWheel.prototype;
        _proto.onLoad = function onLoad() {
          ox.wheelList[this.wheelId] = this;
          this.status = 0; //0停止 1转 
          this.nextCb = null; //下一步需要执行的回调
          this.lastResult = [0, 0, 0, 0, 0]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样 
          this.rolePbList = []; //roles
          this.roleIdList = []; //role ID
          this.lastResultNum = [0, 0, 0, 0, 0];
        };
        _proto.start = function start() {};
        _proto.initWheel = function initWheel() {
          var _this2 = this;
          if (ox.isNewUser) {
            this.lastResult = FIRSTROLE[this.wheelId]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样 
          } else {
            this.lastResult = [0, 0, 0, 0, 0];
          }
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          for (var i in this.lastResult) {
            if (ox.isNewUser) {
              this.addRole(this.lastResult[i]);
            } else {
              this.lastResult[i] = this.getRandomId();
              this.addRole(this.lastResult[i]);
            }
          }
          setTimeout(function () {
            for (var _i in _this2.rolePbList) {
              if (_this2.roleIdList[_i] == 7) {
                _this2.rolePbList[_i].children[0].getComponent(sp.Skeleton).setAnimation(0, "spawn", true);
              }
            }
          }, 100);
          // this.addRole(this.getRandomId());
          this.p = 0;
          if (this.wheelId == 1) {
            this.p = 160;
          }
          this.node.y = this.p;
          ox.rollIndex++;
          ox.node.closeShine();
          this.lastResult = this.roleIdList.slice(-5);
        }

        //清空卷轴
        ;

        _proto.removeWheel = function removeWheel() {
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          this.node.y = 0;
        };
        _proto.startRoll = function startRoll() {
          var _this3 = this;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          for (var i = 0; i < args.length; i++) {
            if (args[i] == 8) {
              this.addRole(this.getRandomId(), 0);
            } else {
              this.addRole(args[i], 0);
            }
          }
          this.addRole(this.getRandomId(), 0);
          if (ox.slotCtrl.isSpeed) {
            setTimeout(function () {
              _this3.stopImmediately();
            }, TIMEMIN / 2 * 1000);
          }
          var cb = function cb() {
            var _this3$nodeTween, _this3$nodeTween2;
            (_this3$nodeTween = _this3.nodeTween) == null || _this3$nodeTween.stop();
            (_this3$nodeTween2 = _this3.nodeTween) == null || _this3$nodeTween2.destroySelf();
            _this3.setBlur(false);
            _this3.nodeTween = tween(_this3.node).to(0.1, {
              position: new Vec3(_this3.node.x, -_this3.node.h + 620 + _this3.p)
            }).to(0.1, {
              position: new Vec3(_this3.node.x, -_this3.node.h + 672 + _this3.p)
            }).call(function () {
              _this3.rollCallBack();
            }).start();
          };
          this.nextCb = cb;
        };
        _proto.startFreeRoll = function startFreeRoll() {
          var _this4 = this;
          for (var i = 0; i < ROLENUM * 2; i++) {
            this.addRole(this.getRandomId(), 0);
          }
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          for (var _i2 = 0; _i2 < args.length; _i2++) {
            if (args[_i2] == 8) {
              this.addRole(this.getRandomId(), 0);
            } else {
              this.addRole(args[_i2], 0);
            }
          }
          this.addRole(this.getRandomId(), 0);
          var cb = function cb() {
            var _this4$nodeTween, _this4$nodeTween2;
            _this4.status = 1;
            (_this4$nodeTween = _this4.nodeTween) == null || _this4$nodeTween.stop();
            (_this4$nodeTween2 = _this4.nodeTween) == null || _this4$nodeTween2.destroySelf();
            _this4.setBlur(false);
            _this4.nodeTween = tween(_this4.node).to(0.1, {
              position: new Vec3(_this4.node.x, -_this4.node.h + 620 + _this4.p)
            }).to(0.1, {
              position: new Vec3(_this4.node.x, -_this4.node.h + 672 + _this4.p)
            }).call(function () {
              _this4.rollCallBack();
            }).start();
          };
          this.nextCb = cb;
        }

        // private audioTween: Tween<Node> | null = null;
        ;

        _proto.FreeRoll = function FreeRoll() {
          var _this5 = this;
          this.status = 1;
          var mul = 4;
          if (this.wheelId == 1) {
            mul = 12;
          }
          for (var i = 0; i < ROLENUM * (mul - 1); i++) {
            this.addRole(this.getRandomId(), 0);
          }
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          for (var _i3 = 0; _i3 < args.length; _i3++) {
            if (args[_i3] == 8) {
              this.addRole(this.getRandomId(), 0);
            } else {
              this.addRole(args[_i3], 0);
            }
          }
          this.addRole(this.getRandomId(), 0);
          setTimeout(function () {
            var _this5$nodeTween, _this5$nodeTween2;
            (_this5$nodeTween = _this5.nodeTween) == null || _this5$nodeTween.stop();
            (_this5$nodeTween2 = _this5.nodeTween) == null || _this5$nodeTween2.destroySelf();
            _this5.node.y = _this5.p; //滚轮启动位移距离
            var timer = 0.4 * mul;
            _this5.nodeTween = tween(_this5.node).to(timer, {
              position: new Vec3(_this5.node.x, -_this5.node.h + 672 + _this5.p)
            }).call(function () {
              _this5.setBlur(false);
            }).to(0.1, {
              position: new Vec3(_this5.node.x, -_this5.node.h + 620 + _this5.p)
            }).to(0.1, {
              position: new Vec3(_this5.node.x, -_this5.node.h + 672 + _this5.p)
            }).call(function () {
              _this5.rollCallBack();
            }).start();
            // this.audioTween = tween(this.node)
            //     .delay(0.1 + timer / 0.1)
            //     .call(() => {
            //         ox.node.audio.playwheelspin();
            //     })
            //     .union()
            //     .repeatForever();
            // this.audioTween.start();
          }, 3000);
        };
        _proto.rollLoop = function rollLoop() {
          var _this6 = this;
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          this.node.y = this.p; //滚轮启动位移距离
          for (var i = 0; i < this.lastResult.length; i++) {
            this.lastResult[i] = this.lastResult[i] == 0 ? this.getRandomId() : this.lastResult[i];
            this.addRole(this.lastResult[i]);
          }
          for (var _i4 = 0; _i4 < ROLENUM - 10; _i4++) {
            this.addRole(this.getRandomId());
          }
          for (var _i5 = 0; _i5 < this.lastResult.length; _i5++) {
            this.lastResult[_i5] = this.lastResult[_i5] == 0 ? this.getRandomId() : this.lastResult[_i5];
            this.addRole(this.lastResult[_i5]);
          }
          var loopCb = function loopCb() {
            _this6.node.y = _this6.p; //滚轮启动位移距离
            // this.node.stopAllActions();
            // let timer = TIMEMIN + this.wheelId * 0.2;
            // this.setBlur(true);
            // this.node.runAction(
            //     cc.sequence(
            //         cc.moveTo(TIMEMIN / 3, cc.v2(this.node.x, -this.node.height + 672 + this.p)),
            //         cc.callFunc(() => {
            //             this.nextCb();
            //         })
            //     )
            // );
            if (ox.slotCtrl.isSpeed) {
              _this6.nodeTween = tween(_this6.node).call(function () {
                _this6.setBlur(true);
              }).to(TIMEMIN / 2, {
                y: -_this6.node.h + 672 + _this6.p
              }) //, { easing: 'quadInOut' })
              .call(function () {
                _this6.nextCb();
              }).start();
            } else {
              _this6.nodeTween = tween(_this6.node).call(function () {
                _this6.setBlur(true);
              }).to(TIMEMIN, {
                y: -_this6.node.h + 672 + _this6.p
              }) //, { easing: 'quadInOut' })
              .call(function () {
                _this6.nextCb();
              }).start();
            }
            // this.audioTween = tween(this.node)
            //     .delay(0.1 + TIMEMIN / 40)
            //     .call(() => {
            //         ox.node.audio.playwheelspin();
            //     })
            //     .union()
            //     .repeatForever();
            // this.audioTween.start();
          };

          var timeNum = 0;
          if (this.wheelId == 1) {
            timeNum += 0.1;
          }
          if (this.wheelId == 2) {
            timeNum += 0.2;
          }
          setTimeout(function () {
            var timer = TIMEMIN;
            if (ox.slotCtrl.isSpeed) {
              timer = timer / 2;
            } else {
              timer = TIMEMIN + _this6.wheelId * 0.2;
            }
            _this6.nodeTween = tween(_this6.node).delay(timeNum).to(timer, {
              position: new Vec3(_this6.node.x, -_this6.node.h + 672 + _this6.p)
            }).call(function () {
              loopCb();
            }).start();
            // this.audioTween = tween(this.node)
            //     .delay(0.1 + timer / 0.1)
            //     .call(() => {
            //         ox.node.audio.playwheelspin();
            //     })
            //     .union()
            //     .repeatForever();
            // this.audioTween.start();
          }, 100);
          this.nextCb = loopCb;
        };
        _proto.getRandomId = function getRandomId() {
          var randomId = 0;
          while (randomId == 0) {
            randomId = Math.floor(Math.random() * (ox.node.rolePb.length - 1) + 1);
            randomId = randomId == this.excludeId ? 0 : randomId;
          }
          return randomId;
        };
        _proto.addRole = function addRole(id, posId) {
          if (posId === void 0) {
            posId = null;
          }
          var pb = instantiate(ox.node.rolePb[id]);
          if (posId !== undefined) {
            this.rolePbList.unshift(pb);
            this.roleIdList.unshift(id);
          } else {
            this.rolePbList.push(pb);
            this.roleIdList.push(id);
          }
          this.addClickEvent(pb, id);
          this.node.addChild(pb);
          if (posId !== null) {
            pb.setSiblingIndex(posId);
          }
        };
        _proto.rollCallBack = function rollCallBack() {
          ox.node.audio.playStopWheel();
          this.lastResult = this.roleIdList.slice(0, 5);
          for (var i = 0; i < this.lastResult.length; i++) {
            if (this.lastResult[i] == 8) {
              this.lastResultNum[i] = this.rolePbList[i].children[1].getComponent(Label).string;
            } else {
              this.lastResultNum[i] = 0;
            }
          }
          this.status = 0;
          ox.node.stateCallBack();
        };
        _proto.stopImmediately = function stopImmediately() {
          var _this7 = this;
          this.lastResult = this.roleIdList.slice(0, 5);
          for (var i = 0; i < this.lastResult.length; i++) {
            if (this.lastResult[i] == 8) {
              this.lastResultNum[i] = this.rolePbList[i].children[1].getComponent(Label).string;
            } else {
              this.lastResultNum[i] = 0;
            }
          }
          // this.audioTween?.stop();
          // this.audioTween?.destroySelf();
          setTimeout(function () {
            _this7.setBlur(false);
            _this7.node.y = -_this7.node.h + 672 + _this7.p;
          }, 50);
          this.status = 0;
          ox.node.stateCallBack();
        };
        _proto.addClickEvent = function addClickEvent(node, idx) {
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
          clickEventHandler.component = "oxWheel"; // 这个是代码文件名
          clickEventHandler.handler = "roleClick";
          clickEventHandler.customEventData = idx + "";
          var button = node.getComponent(Button);
          button.clickEvents.push(clickEventHandler);
        };
        _proto.roleClick = function roleClick(event, customEventData) {
          if (ox.detail) {
            ox.node.deskMask.active = false;
            ox.detail.node.parent = null;
            ox.detail = null;
            return;
          }
          var newNode = instantiate(ox.node.detailPb);
          var transForm = event.target.getComponent(UITransform);
          var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
          transForm = ox.node.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(newVec3);
          newNode.position = p;
          newNode.x -= 50;
          var isLeft = newNode.x < 10;
          newNode.getComponent("oxDetail").init(Number(customEventData), isLeft);
          ox.node.node.addChild(newNode);
          ox.node.deskMask.active = true;
        }
        //设置虚化
        ;

        _proto.setBlur = function setBlur(state) {
          for (var i in this.rolePbList) {
            this.rolePbList[i].children[0].active = !state; //实图
            this.rolePbList[i].children[1].active = state; //虚图
          }
        };

        return oxWheel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wheelId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "excludeId", [_dec2], {
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

System.register("chunks:///_virtual/payPanel4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, ox;
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
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ox = module.ox;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "8c380JtkjxMjaYcFFcTGWKm", "payPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var payPanel = exports('payPanel', (_dec = ccclass('payPanel'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(payPanel, _Component);
        function payPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = payPanel.prototype;
        _proto.init = function init() {
          ox.payPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          ox.node.audio.playclickopen();
          this.node.parent.children[0].active = true;
          this.node.active = true;
          this.panel.w = this.node.w;
          this.panel.h = this.node.h;
          var widgets = this.panel.getComponentsInChildren(Widget);
          for (var i = 0; i < widgets.length; i++) {
            widgets[i].updateAlignment();
          }
          this.showPos = 0;
          this.hidePos = -this.panel.h;
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
          ox.node.audio.playclickclose();
          this.hidePanel();
        };
        return payPanel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
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

System.register("chunks:///_virtual/rulePanel4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cOx.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, ox;
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
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ox = module.ox;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1e486F7WkRLpIRccdi4gpGD", "rulePanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var rulePanel = exports('rulePanel', (_dec = ccclass('rulePanel'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rulePanel, _Component);
        function rulePanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = rulePanel.prototype;
        _proto.init = function init() {
          ox.rulePanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          ox.node.audio.playclickopen();
          this.node.parent.children[0].active = true;
          this.node.active = true;
          this.panel.w = this.node.w;
          this.panel.h = this.node.h;
          var widgets = this.panel.getComponentsInChildren(Widget);
          for (var i = 0; i < widgets.length; i++) {
            widgets[i].updateAlignment();
          }
          this.showPos = 0;
          this.hidePos = -this.panel.h;
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
          ox.node.audio.playclickclose();
          this.hidePanel();
        };
        return rulePanel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
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

System.register("chunks:///_virtual/SlotsOxGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "505a8w2oWVHL5WVpS7lSgI5", "SlotsOxGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsOxGameMgr = exports('SlotsOxGameMgr', (_dec = ccclass('SlotsOxGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsOxGameMgr, _GameMgr);
        function SlotsOxGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_OX;
          _this.mainName = "oxMain";
          _this._gameType = SubGameDef.SLOTS_OX;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_ox',
            bundle: ModuleDef.SLOTS_OX
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsOxGameMgr.prototype;
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
        _createClass(SlotsOxGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsOxGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsOxGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsOxGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsOxLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './SlotsOxGameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, SlotsOxGameMgr, SubGameMgr, SubGameDef;
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
      SlotsOxGameMgr = module.SlotsOxGameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "975021gNwhOmoVtO9zAU5g+", "SlotsOxLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsOxLobbyScene = exports('SlotsOxLobbyScene', (_dec = ccclass('SlotsOxLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsOxLobbyScene, _Component);
        function SlotsOxLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsOxLobbyScene.prototype;
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
        _proto.onBtnSoloModeClicked = function onBtnSoloModeClicked() {
          SlotsOxGameMgr.inst.initSoloMode();
          SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_OX, true);
        };
        return SlotsOxLobbyScene;
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
  r('virtual:///prerequisite-imports/module_slots_ox', 'chunks:///_virtual/module_slots_ox'); 
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