System.register("chunks:///_virtual/autoPanel9.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, rabbit, Num;
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
      rabbit = module.rabbit;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "f98919p31pOAKv0SSu/PAj2", "autoPanel", undefined);
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
          rabbit.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.money);
          this.lblCurBet.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.betSum);
          this.winCoin_lab.string = rabbit.slotCtrl.winCoin_lab.string;
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
            rabbit.node.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          rabbit.node.audio.playclickopen();
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
          rabbit.node.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum10.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "94316P+e7dGtJVbbryLTvvT", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel10.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts', './Num.ts', './betNum10.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, rabbit, Num, betNum;
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
      rabbit = module.rabbit;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      betNum = module.betNum;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "3040bb2b6VLkpwmALhT5C+s", "betPanel", undefined);
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
          rabbit.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = rabbit.BETNUM;
          this.betList = rabbit.BET;
          this.line = rabbit.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.money);
          this.lblCurBet.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.betSum);
          this.winCoin_lab.string = rabbit.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(rabbit.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(rabbit.exchangeRate, sumList[_i3]);
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
          rabbit.betNum = this.tempi;
          rabbit.bet = this.tempj;
          rabbit.sumIdx = this.tempindex;
          rabbit.betSum = this.sumList[rabbit.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.betSum);
          rabbit.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(rabbit.sumIdx);
          this.val3 = rabbit.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          rabbit.node.audio.playclickopen();
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
          rabbit.node.audio.playclickclose();
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

System.register("chunks:///_virtual/cRabbit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange9.ts'], function (exports) {
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
      cclegacy._RF.push({}, "ef9dcBumolBAJDkCNvTI5WL", "cRabbit", undefined);
      var cRabbit = /*#__PURE__*/function () {
        function cRabbit() {
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
          /**规则界面 */
          this.rulePanel = null;
          /**赔付表界面 */
          this.payPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
        }
        _createClass(cRabbit, [{
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
              this._betSum = Number(localStorage.getItem(SubGameDef.SLOTS_RABBIT + "betSum"));
            }
            return this._betSum;
          },
          set: function set(v) {
            if (this._betSum != v) {
              localStorage.setItem(SubGameDef.SLOTS_RABBIT + "betSum", v + "");
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
          key: "inBigWin",
          get: function get() {
            return this.lotteryRes.getBigWin.res_list.length > 1;
          }
        }, {
          key: "bigWinBn",
          get: function get() {
            return rabbit.lotteryRes.winscore > rabbit.betSum * 20;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cRabbit();
            }
            return this._instance;
          }
        }]);
        return cRabbit;
      }();
      cRabbit._instance = null;
      var rabbit = exports('rabbit', cRabbit.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange9.ts", ['cc', './Num.ts'], function (exports) {
  var cclegacy, Num;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0e31cHypI9AEqRsgkWYsgX5", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.code = 0; //代表issuse 成功
          res.err_msg = "";
          res.nBet = 15; //下注倍数
          res.nHandCards = []; //展示的牌型
          res.goldList = [];
          res.getBigWin = {};
          res.getFreeTime = {};
          res.getBigWin.res_list = [];
          res.userscore = Num.parse(data.coins); //用户游戏后剩余金币
          res.winscore = Num.parse(data.payout); //用户当局赚取金币
          for (var i = 0; i < data.results.length; i++) {
            var temp = data.results[i]; //结果
            var nHandCards = [];
            var goldList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var nWinLines = [];
            var nWinLinesDetail = [];
            var nWinDetail = [];
            var nWinCards = [false, false, false, false, false, false, false, false, false];
            for (var j = 0; j < temp.symbols.length; j++) {
              var cur = temp.symbols[j]; //
              var index = dataChange.posToIndex(cur.coordinate);
              nHandCards[index] = this.transformId(cur.id);
              if (nHandCards[index] == 8) {
                goldList[index] = this.specialNums[this.specials.indexOf(cur.id)];
                nWinCards[index] = true;
              }
            }
            for (var _j = 0; _j < temp.paylines.length; _j++) {
              var _cur = temp.paylines[_j];
              nWinLines.push(Number(_cur.id) - 1);
              nWinDetail.push(_cur.payout);
              nWinLinesDetail[i] = [];
              for (var k = 0; k < _cur.points.length; k++) {
                var point = _cur.points[k];
                var _temp = dataChange.posToIndex(point);
                nWinLinesDetail[i].push(_temp);
                nWinCards[_temp] = true;
              }
            }
            if (i == data.results.length - 1) {
              res.nHandCards = nHandCards;
              res.goldList = goldList;
              res.nWinLines = nWinLines;
              res.nWinLinesDetail = nWinLinesDetail;
              res.nWinDetail = nWinDetail;
              res.nWinCards = nWinCards;
            }
            res.getBigWin.bFlag = data.results.length > 1;
            res.getBigWin.isStart = data.results.length > 1;
            res.getFreeTime.bFlag = data.results.length > 1;
            res.getFreeTime.nFreeTime = data.results.length;
            var _resList = {};
            _resList.nHandCards = nHandCards;
            _resList.goldList = goldList;
            _resList.nWinLines = nWinLines;
            _resList.nWinLinesDetail = nWinLinesDetail;
            _resList.nWinDetail = nWinDetail;
            _resList.nWinCards = nWinCards;
            _resList.winscore = Number(temp.payout);
            res.getBigWin.res_list.push(_resList);
          }
          return res;
        }

        //例子，左下角1,1开始，收到服务器数据[4,1  4,2  4,3]                                [3.1   4.2  3.3]                                     [ 0  1  2 ]
        //                                [3,1  3,2  3,3]                                [2.1    3.2   2.3]     才符合服务器中奖连线逻辑  下标为 [3   4   5]
        //                                [2,1  2,2  2,3]             转成                [1.1    2.2   1.3]                                   [6   7   8 ]  客户端无视 9和11位，服务端无视 （41）（43）位置
        //                                [1,1  1,2  1,3]                                 [4.1    1.2   4.3]                                   [9   10  11]
        ;

        dataChange.posToIndex = function posToIndex(pos) {
          if (pos.reel == 2) {
            var index = (4 - pos.row) * 3 + (pos.reel - 1);
            return index;
          } else if (pos.reel == 1 && pos.row == 4) {
            var _index = 9;
            return _index;
          } else if (pos.reel == 3 && pos.row == 4) {
            var _index2 = 11;
            return _index2;
          } else {
            var _index3 = (3 - pos.row) * 3 + (pos.reel - 1);
            return _index3;
          }
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            rabbit: 7,
            rabbit_yuanbao: 6,
            blessing_bag: 5,
            red_envelope: 4,
            copper_coin: 3,
            rocket: 2,
            carrot: 1
          };
          var index = this.specials.indexOf(curid);
          if (index != -1) {
            return 8;
          }
          return (_idMap$curid = idMap[curid]) != null ? _idMap$curid : 10;
        };
        return dataChange;
      }());

      //old
      dataChange.BETNUM = [0.03, 0.10, 0.30, 0.90];
      //单注值
      dataChange.LINES = 10;
      //线数
      dataChange.BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      dataChange.specials = ["0.5倍", "1倍", "2倍", "5倍", "10倍", "50倍", "100倍", "500倍"];
      dataChange.specialNums = [0.5, 1, 2, 5, 10, 50, 100, 500];
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

System.register("chunks:///_virtual/flyNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCFloat, Vec3, Component, Num;
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
      CCFloat = module.CCFloat;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "076ebI6pq1MeJZ75Kn1wZ8m", "flyNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var flyNum = exports('flyNum', (_dec = ccclass('flyNum'), _dec2 = property({
        type: CCFloat,
        tooltip: "飞行进度"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(flyNum, _Component);
        function flyNum() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_t", _descriptor, _assertThisInitialized(_this));
          _this.p0 = new Vec3();
          _this.p1 = new Vec3();
          _this.p2 = new Vec3();
          _this.p3 = new Vec3();
          return _this;
        }
        _createClass(flyNum, [{
          key: "t",
          get: function get() {
            return this._t;
          },
          set: function set(v) {
            this._t = v;
            var temp = Num.threeBezier(this.p0, this.p1, this.p2, this.p3, this._t);
            this.node.position = temp;
          }
        }]);
        return flyNum;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_t", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel10.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, rabbit, Num;
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
      rabbit = module.rabbit;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "54ae9dlHrdJhp+LGDovZB/l", "lastmoneyPanel", undefined);
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
          rabbit.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          rabbit.node.audio.playclickopen();
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
          rabbit.node.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_rabbit", ['./SlotsRabbitGameMgr.ts', './SlotsRabbitLobbyScene.ts', './autoPanel9.ts', './betNum10.ts', './betPanel10.ts', './cRabbit.ts', './dataChange9.ts', './flyNum.ts', './lastmoneyPanel10.ts', './nodeSizeJump.ts', './payPanel5.ts', './pbCardNum.ts', './rabbitAudio.ts', './rabbitDetail.ts', './rabbitMain.ts', './rabbitSlotCtrl.ts', './rabbitWheel.ts', './rulePanel5.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/nodeSizeJump.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, tween, Vec3, Component;
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
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "71ccdpUhdZH34n2mdcNeXBw", "nodeSizeJump", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var nodeSizeJump = exports('nodeSizeJump', (_dec = ccclass('nodeSizeJump'), _dec2 = property({
        type: CCFloat,
        tooltip: "scale"
      }), _dec3 = property({
        type: CCFloat,
        tooltip: "时间间隔"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(nodeSizeJump, _Component);
        function nodeSizeJump() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scale", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dis", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = nodeSizeJump.prototype;
        _proto.play = function play() {
          tween(this.node).to(this.dis, {
            scale: new Vec3(this.scale, this.scale)
          }).to(this.dis, {
            scale: new Vec3(1, 1)
          }).start();
        };
        return nodeSizeJump;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dis", [_dec3], {
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

System.register("chunks:///_virtual/payPanel5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, rabbit;
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
      rabbit = module.rabbit;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1d27fptZsNOwLwiWFWbUgVx", "payPanel", undefined);
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
          rabbit.payPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          rabbit.node.audio.playclickopen();
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
          rabbit.node.audio.playclickclose();
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

System.register("chunks:///_virtual/pbCardNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8873b2QWPdIn59RBM8lVvy5", "pbCardNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var pbCardNum = exports('pbCardNum', (_dec = ccclass('pbCardNum'), _dec2 = property({
        type: CCFloat,
        tooltip: "showNodeNum"
      }), _dec3 = property({
        type: CCFloat,
        tooltip: "val"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(pbCardNum, _Component);
        function pbCardNum() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "showNodeNum", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "val", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        return pbCardNum;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showNodeNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "val", [_dec3], {
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

System.register("chunks:///_virtual/rabbitAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "c3186r3i9pJ6r4kGN8sdsBl", "rabbitAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var rabbitAudio = exports('rabbitAudio', (_dec = ccclass('rabbitAudio'), _dec2 = property({
        type: [AudioClip],
        tooltip: "bgmAudio"
      }), _dec3 = property({
        type: AudioClip,
        tooltip: "滚轮旋转"
      }), _dec4 = property({
        type: AudioClip,
        tooltip: "滚轮停止"
      }), _dec5 = property({
        type: AudioClip,
        tooltip: "粒子触发"
      }), _dec6 = property({
        type: AudioClip,
        tooltip: "粒子结束"
      }), _dec7 = property({
        type: AudioClip,
        tooltip: "语音_1_兔来运转"
      }), _dec8 = property({
        type: AudioClip,
        tooltip: "语音_2_福到财到"
      }), _dec9 = property({
        type: AudioClip,
        tooltip: "语音_3_啊哈啊哈"
      }), _dec10 = property({
        type: AudioClip,
        tooltip: "语音_4_嗯哼"
      }), _dec11 = property({
        type: AudioClip,
        tooltip: "语音_5_恭喜恭喜"
      }), _dec12 = property({
        type: AudioClip,
        tooltip: "语音_6_厉害"
      }), _dec13 = property({
        type: AudioClip,
        tooltip: "语音_7_真好"
      }), _dec14 = property({
        type: AudioClip,
        tooltip: "语音_8_啊哈"
      }), _dec15 = property({
        type: AudioClip,
        tooltip: "语音_9_嘿嘿"
      }), _dec16 = property({
        type: AudioClip,
        tooltip: "语音_10_好"
      }), _dec17 = property({
        type: AudioClip,
        tooltip: "语音_11_耶"
      }), _dec18 = property({
        type: AudioClip,
        tooltip: "bigWinEf"
      }), _dec19 = property({
        type: AudioClip,
        tooltip: "中奖首次音效"
      }), _dec20 = property({
        type: AudioClip,
        tooltip: "中奖循环音效"
      }), _dec21 = property({
        type: AudioClip,
        tooltip: "点击旋转"
      }), _dec22 = property({
        type: AudioClip,
        tooltip: "点击打开"
      }), _dec23 = property({
        type: AudioClip,
        tooltip: "点击关闭"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rabbitAudio, _Component);
        function rabbitAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgmAudio", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelspin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopWheel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particalStart", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particalEnd", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_01", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_02", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_03", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_04", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_05", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_06", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_07", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_08", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_09", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_10", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbit_11", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinEf", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinFirstEf", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinLoopEf", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickstart", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickOpen", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickClose", _descriptor22, _assertThisInitialized(_this));
          _this.url = "sound/bgm";
          _this.BWurl = "sound/bigwin";
          return _this;
        }
        var _proto = rabbitAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.playBgm();
        };
        _proto.stopAudio = function stopAudio() {
          // AudioMgr.inst.stop();
        };
        _proto.stopbigwinmain = function stopbigwinmain() {
          this.playBgm();
        };
        _proto.playBgm = function playBgm() {
          // AudioMgr.inst.stop();
          // AudioMgr.inst.playMusicLoop(this.url,EGameName.rabbit)
          tgx.AudioMgr.inst.audio.playMusicLoop(this.url, ModuleDef.SLOTS_RABBIT);
        };
        _proto.playbigwinmain = function playbigwinmain() {
          // AudioMgr.inst.playMusic(this.BWurl,EGameName.rabbit);
        };
        _proto.playStopWheel = function playStopWheel() {
          this.playEf(this.stopWheel);
        };
        _proto.playwheelspin = function playwheelspin() {
          this.playEf(this.wheelspin);
        };
        _proto.playParticalStart = function playParticalStart() {
          this.playEf(this.particalStart);
        };
        _proto.playclickstart = function playclickstart() {
          this.playEf(this.clickstart);
        };
        _proto.playParticalEnd = function playParticalEnd() {
          this.playEf(this.particalEnd);
        };
        _proto.playrabbit_01 = function playrabbit_01() {
          this.playEf(this.rabbit_01);
        };
        _proto.playrabbit_02 = function playrabbit_02() {
          this.playEf(this.rabbit_02);
        };
        _proto.playBWCome = function playBWCome() {
          var idx = Math.floor(Math.random());
          if (idx == 0) {
            this.playEf(this.rabbit_03); //语音_3_啊哈啊哈 
          } else {
            this.playEf(this.rabbit_04); //语音_4_嗯哼 
          }
        };

        _proto.playWinLow = function playWinLow() {
          var auList = [this.rabbit_08, this.rabbit_09, this.rabbit_10, this.rabbit_11];
          var idx = Math.floor(Math.random() * auList.length);
          this.playEf(auList[idx]);
        };
        _proto.playWinHigh = function playWinHigh() {
          var auList = [this.rabbit_05, this.rabbit_06, this.rabbit_07];
          var idx = Math.floor(Math.random() * auList.length);
          this.playEf(auList[idx]);
        };
        _proto.playWinFirst = function playWinFirst() {
          this.playEf(this.WinFirstEf);
        };
        _proto.playWinLoop = function playWinLoop() {
          this.playEf(this.WinLoopEf);
        };
        _proto.playBW = function playBW() {
          this.playEf(this.bigWinEf);
        };
        _proto.playEf = function playEf(clip) {
          // AudioMgr.inst.playEffect(clip);
          tgx.AudioMgr.inst.audio.playEffect(clip);
        };
        _proto.playclickopen = function playclickopen() {};
        _proto.playclickclose = function playclickclose() {};
        _proto.clearAll = function clearAll() {
          tgx.AudioMgr.inst.audio.clearAll();
        };
        return rabbitAudio;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wheelspin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stopWheel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "particalStart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "particalEnd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_01", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_02", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_03", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_04", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_05", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_06", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_07", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_08", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_09", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_10", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "rabbit_11", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bigWinEf", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "WinFirstEf", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "WinLoopEf", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "clickstart", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "clickOpen", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "clickClose", [_dec23], {
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

System.register("chunks:///_virtual/rabbitDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts', './pbCardNum.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, rabbit, pbCardNum;
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
      rabbit = module.rabbit;
    }, function (module) {
      pbCardNum = module.pbCardNum;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "4061fGO1QRLlbkh9pbFwMAL", "rabbitDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [{
        3: 2
      },
      // hand cards no fix line 0
      {
        3: 3
      },
      // hand cards no fix line 1
      {
        3: 5
      },
      // hand cards no fix line 2
      {
        3: 10
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

      var rabbitDetail = exports('rabbitDetail', (_dec = ccclass('rabbitDetail'), _dec2 = property({
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
      }), _dec7 = property({
        type: Node,
        tooltip: "其他牌"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rabbitDetail, _Component);
        function rabbitDetail() {
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
          _initializerDefineProperty(_this, "otherNode", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = rabbitDetail.prototype;
        _proto.init = function init(idx, isLeft, target) {
          if (target === void 0) {
            target = undefined;
          }
          if (rabbit.detail) {
            rabbit.detail.node.active = false;
          }
          rabbit.detail = this;
          var id = idx;
          this.roleSpriteNode.children[idx - 1].active = true;
          if (idx == 8) {
            this.BGNode.w = 685;
            this.BGNode2.w = 685;
            this.otherNode.active = true;
            this.numNode.active = false;
            var nd = this.roleSpriteNode.children[idx - 1];
            var cardNumItem = target.getComponent(pbCardNum);
            nd.getChildByName("001").active = false;
            nd.getChildByName("002").active = false;
            nd.getChildByName("003").active = false;
            var labNode = nd.getChildByName("00" + cardNumItem.showNodeNum);
            labNode.active = true;
            labNode.getComponent(Label).string = cardNumItem.val + "";
          } else {
            this.BGNode.w = 542;
            this.BGNode2.w = 542;
            this.otherNode.active = false;
            this.numNode.active = true;
            for (var i in GAME_COMBINATIONS[id - 1]) {
              this.numNode.getChildByName(i).children[0].getComponent(Label).string = GAME_COMBINATIONS[idx - 1][i];
            }
          }
          if (idx == 7) {
            this.BGNode.h = 367;
            this.BGNode2.h = 367;
          } else {
            this.BGNode.h = 281;
            this.BGNode2.h = 281;
          }

          //位于右边的时候需要切换显示位置
          if (!isLeft) {
            this.BGNode.active = false;
            this.BGNode2.active = true;
            this.numNode.x = -180;
            this.specialNode.x = -340;
            this.otherNode.x = -430;
          }
        };
        _proto.node_onclick = function node_onclick(e) {
          rabbit.node.deskMask.active = false;
          this.node.destroy();
          rabbit.detail = null;
        };
        return rabbitDetail;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "otherNode", [_dec7], {
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

System.register("chunks:///_virtual/rabbitMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './rabbitSlotCtrl.ts', './cRabbit.ts', './pbCardNum.ts', './flyNum.ts', './Num.ts', './nodeSizeJump.ts', './NetGameServer.ts', './SubGameDef.ts', './dataChange9.ts', './UserMgr.ts', './RoomMgr.ts', './UIHelp.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, Label, sp, tween, Vec3, Animation, macro, find, instantiate, Component, UITransform, math, rabbitSlotCtrl, rabbit, pbCardNum, flyNum, Num, nodeSizeJump, gameNet, SubGameDef, dataChange, UserMgr, RoomMgr, UIHelp, UIhelpParam, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      sp = module.sp;
      tween = module.tween;
      Vec3 = module.Vec3;
      Animation = module.Animation;
      macro = module.macro;
      find = module.find;
      instantiate = module.instantiate;
      Component = module.Component;
      UITransform = module.UITransform;
      math = module.math;
    }, function (module) {
      rabbitSlotCtrl = module.rabbitSlotCtrl;
    }, function (module) {
      rabbit = module.rabbit;
    }, function (module) {
      pbCardNum = module.pbCardNum;
    }, function (module) {
      flyNum = module.flyNum;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      nodeSizeJump = module.nodeSizeJump;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "f0813esnjBAPLrb3O/JN8fu", "rabbitMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var rabbitMain = exports('rabbitMain', (_dec = ccclass('rabbitMain'), _dec2 = property({
        type: [Prefab],
        tooltip: "滚轮角色Pb"
      }), _dec3 = property({
        type: [Prefab],
        tooltip: "滚轮角色动画Pb"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "滚轮免费模式空角色Pb"
      }), _dec5 = property({
        type: Prefab,
        tooltip: "角色详情Pb"
      }), _dec6 = property({
        type: Prefab,
        tooltip: "万能特效Pb"
      }), _dec7 = property({
        type: Node,
        tooltip: "摇奖普通特效1"
      }), _dec8 = property({
        type: Node,
        tooltip: "摇奖普通特效2"
      }), _dec9 = property({
        type: Node,
        tooltip: "摇奖极速特效"
      }), _dec10 = property({
        type: Node,
        tooltip: "中奖数字特效"
      }), _dec11 = property({
        type: Node,
        tooltip: "中奖光特效"
      }), _dec12 = property({
        type: Node,
        tooltip: "中奖牌特效"
      }), _dec13 = property({
        type: Node,
        tooltip: "中奖图标底部光影"
      }), _dec14 = property({
        type: Node,
        tooltip: "中奖图层遮罩"
      }), _dec15 = property({
        type: Node,
        tooltip: "中奖特效"
      }), _dec16 = property({
        type: Node,
        tooltip: "游戏背景节点"
      }), _dec17 = property({
        type: Node,
        tooltip: "免费摇奖背景节点"
      }), _dec18 = property({
        type: Node,
        tooltip: "免费摇奖提示节点"
      }), _dec19 = property({
        type: Node,
        tooltip: "免费模式提示2"
      }), _dec20 = property({
        type: Node,
        tooltip: "免费模式没中特效"
      }), _dec21 = property({
        type: Node,
        tooltip: "免费模式中奖特效"
      }), _dec22 = property({
        type: Node,
        tooltip: "中奖背景2"
      }), _dec23 = property({
        type: Node,
        tooltip: "中奖背景3"
      }), _dec24 = property({
        type: Node,
        tooltip: "滚屏提示"
      }), _dec25 = property({
        type: Node,
        tooltip: "中奖提示"
      }), _dec26 = property({
        type: Node,
        tooltip: "爆金币"
      }), _dec27 = property({
        type: Node,
        tooltip: "金币跳跃"
      }), _dec28 = property({
        type: Node,
        tooltip: "跑光"
      }), _dec29 = property({
        type: Label,
        tooltip: "单线中奖金币"
      }), _dec30 = property({
        type: Node,
        tooltip: "兔子动画"
      }), _dec31 = property({
        type: Node,
        tooltip: "deskMask"
      }), _dec32 = property({
        type: Node,
        tooltip: "免费模式假开始特效"
      }), _dec33 = property({
        type: Node,
        tooltip: "免费模式开始特效"
      }), _dec34 = property({
        type: Node,
        tooltip: "免费模式摇奖特效"
      }), _dec35 = property({
        type: Node,
        tooltip: "slotCtrl"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rabbitMain, _Component);
        function rabbitMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rolePb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roleAnimPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roleNullPb", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildEffectPb", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectSlot1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectSlot2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectFastSlot1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNum", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLight", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectpsvfx", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BgNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBgNode", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeTipNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeTipNode2", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectFreeNo", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectFree", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win2BG", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win3BG", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNode", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinBoomEffect", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinJumpEffect", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runLight", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinLineLab", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rabbitAnim", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deskMask", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeModeFakeStartEffect", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeModeStartEffect", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeModeRollEffect", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor34, _assertThisInitialized(_this));
          /**延迟点击 */
          _this.delayClick = false;
          _this.audio = null;
          _this.slotCtrl = null;
          _this.bIsFreeGame = false;
          _this.freeTimes = 0;
          _this.bigWinBoo = false;
          _this.stopFree = false;
          _this.freeGameCoin = 0;
          _this.lineAni = null;
          _this.goldAni = null;
          _this.stateCallBackBn = false;
          _this.completeBn = false;
          _this.playWinAnimOverBn = false;
          _this.closeBigWinBn = false;
          _this.flyIndex = 0;
          return _this;
        }
        var _proto = rabbitMain.prototype;
        _proto.onLoad = function onLoad() {
          rabbit.node = this;
          this.slotCtrl = this.slotCtrlNode.getComponent(rabbitSlotCtrl);
          this.slotCtrl.initBetContent(rabbit.BETNUM, rabbit.BET, rabbit.LINES);
          this.audio = this.node.getComponent('rabbitAudio');
          rabbit.wheelList = [];
          rabbit.auto = false;
          rabbit.autoTimes = 0;
          rabbit.status = 0;
          rabbit.winLinePos = [300, 100, 100, 100, 100, -50, -50, -50, -50, -200];
          rabbit.rollIndex = 0;
          rabbit.lotteryRes = null;
          rabbit.money = UserMgr.inst.coin;
          this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.money);
          this.freeTimes = 0;
          this.stopFree = false;
          this.freeGameCoin = 0;
          this.bIsFreeGame = false;
          this.delayClick = false;
          this.lineAni = null;
          this.goldAni = null;
          this.coinBoomEffect.active = false;
          this.coinJumpEffect.active = false;
          this.runLight.active = false;
          this.winNode.active = false;
          this.win2BG.active = false;
          this.win3BG.active = false;
          rabbit.money = rabbit.money;
        };
        _proto.initWheel = function initWheel() {
          for (var i = 0; i < rabbit.wheelList.length; i++) {
            rabbit.wheelList[i].initWheel();
          }
        };
        _proto.start = function start() {
          this.initWheel();
          this.slotCtrl.bindBet();
          var ani = this.rabbitAnim.getComponent(sp.Skeleton);
          ani.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case "idle2":
                ani.setAnimation(0, "idle", true);
                break;
              case "idle3":
                ani.setAnimation(0, "idle", true);
                break;
              case "win":
                ani.setAnimation(0, "idle", true);
                break;
              case "win2":
                ani.setAnimation(0, "idle", true);
                break;
              case "tease_exit":
                ani.setAnimation(0, "idle", true);
                break;
              case "tease_start":
                ani.setAnimation(0, "tease_idle", true);
                break;
              case "respawn":
                ani.setAnimation(0, "idle", true);
                break;
            }
          });
          this.closeShine();
        };
        _proto.update = function update() {};
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
            case "exitGame":
              this.onBtnExitClicked();
              break;
            case "lastmoney":
              rabbit.lastmoneyPanel.showPanel();
              break;
            case "help":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
              break;
            case "pay":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
              break;
          }
        };
        _proto.onBtnExitClicked = function onBtnExitClicked() {
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ok) {
                    rabbit.node.close();
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
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || this.bIsFreeGame || this.delayClick || rabbit.rollEnable == false) {
            return;
          }
          if (!rabbit.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this2.delayClick = false;
            }, 1);
            if (rabbit.status == 0) {
              rabbit.status = 2;
              this.sendRoll();
            } else if (rabbit.status == 1) {
              this.slotCtrl.setSpinAnim(3);
              this.stopImmediately();
            }
          }
        };
        _proto.add = function add() {
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || rabbit.auto) {
            return;
          }
          rabbit.sumIdx += 1;
          rabbit.sumIdx = this.slotCtrl.updateBet(rabbit.sumIdx) == 0 ? rabbit.sumIdx - 1 : rabbit.sumIdx;
          tween(this.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.dec = function dec() {
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || rabbit.auto) {
            return;
          }
          rabbit.sumIdx -= 1;
          rabbit.sumIdx = this.slotCtrl.updateBet(rabbit.sumIdx) == 0 ? rabbit.sumIdx + 1 : rabbit.sumIdx;
          tween(this.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.startAuto = function startAuto(n) {
          var _this3 = this;
          if (this.freeTimes > 0 || this.bigWinBoo || this.stopFree || this.bIsFreeGame || this.delayClick) {
            return;
          }
          if (rabbit.status == 0) {
            rabbit.auto = true;
            rabbit.autoTimes = n;
            this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            if (n > 999) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
            }
            this.slotCtrl.Btn_stopAuto.active = rabbit.auto;
            this.slotCtrl.Btn_start.active = !this.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(function () {
              _this3.sendRoll();
            }, 1);
          }
        };
        _proto.stopAuto = function stopAuto() {
          rabbit.auto = false;
          rabbit.autoTimes = 0;
        };
        _proto.stateCallBack = function stateCallBack() {
          var _this4 = this;
          var st = 0;
          for (var i in rabbit.wheelList) {
            if (rabbit.wheelList[i].status) {
              st = 1;
              break;
            }
          }
          rabbit.status = st;
          if (rabbit.status == 0) {
            if (this.stateCallBackBn) {
              return;
            }
            this.stateCallBackBn = true;
            this.scheduleOnce(function () {
              _this4.stateCallBackBn = false;
            }, 1);
            if (rabbit.lotteryRes.winscore > 0) {
              this.slotCtrl.setSpinAnim(3);
              rabbit.rollEnable = false;
            } else {
              this.slotCtrl.setSpinAnim(2);
            }
            var rIndex = rabbit.lotteryRes.getBigWin.res_list.length;
            this.scheduleOnce(function () {
              if (rIndex > 1 && rIndex != rabbit.rollIndex) {
                return;
              }
              for (var _i in rabbit.wheelList) {
                // let length = rabbit.wheelList[i].roleIdList.length;
                var n = 4;
                if (Number(_i) == 1) {
                  n = 5;
                }
                var _loop = function _loop() {
                  if (rabbit.wheelList[_i].roleIdList[j + 1] == 8) {
                    var pb = instantiate(_this4.wildEffectPb);
                    var transForm = rabbit.wheelList[_i].rolePbList[j + 1].getComponent(UITransform);
                    var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
                    transForm = _this4.node.getComponent(UITransform);
                    var p = transForm.convertToNodeSpaceAR(newVec3);
                    pb.position = p;
                    _this4.node.addChild(pb);
                    tween(pb).call(function () {
                      var _getComponent;
                      (_getComponent = _this4.rabbitAnim.getComponent(sp.Skeleton)) == null || _getComponent.setAnimation(0, "idle2", false);
                      _this4.audio.playParticalStart();
                    }).delay(0.1).to(0.3, {
                      position: new Vec3(-155, 520, 0)
                    }).call(function () {
                      _this4.audio.playParticalEnd();
                      pb.parent = null;
                    }).start();
                  } else if (rabbit.wheelList[_i].roleIdList[j + 1] == 7) {
                    var _newAnim$getComponent;
                    var newAnim = instantiate(_this4.roleAnimPb[7]);
                    rabbit.wheelList[_i].rolePbList[j + 1].children[1].active = false;
                    rabbit.wheelList[_i].rolePbList[j + 1].addChild(newAnim);
                    (_newAnim$getComponent = newAnim.getComponent(sp.Skeleton)) == null || _newAnim$getComponent.setAnimation(0, "idle", true);
                  } else if (rabbit.wheelList[_i].roleIdList[j + 1] < 9) {
                    var _newAnim$getComponent2;
                    var _newAnim = instantiate(_this4.roleAnimPb[rabbit.wheelList[_i].roleIdList[j + 1]]);
                    rabbit.wheelList[_i].rolePbList[j + 1].children[1].active = false;
                    rabbit.wheelList[_i].rolePbList[j + 1].addChild(_newAnim);
                    (_newAnim$getComponent2 = _newAnim.getComponent(sp.Skeleton)) == null || _newAnim$getComponent2.setAnimation(0, "spawn", false);
                  }
                };
                for (var j = 0; j <= n - 2; j++) {
                  _loop();
                }
              }
            }, 0.1);
            if (this.bIsFreeGame) {
              this.freeGameCoin += rabbit.lotteryRes.winscore;
            }
            var _flyNum = 0;
            var goldArr;
            if (rabbit.lotteryRes.getBigWin.res_list.length > 1) {
              goldArr = rabbit.lotteryRes.getBigWin.res_list[rabbit.rollIndex].goldList;
            } else {
              goldArr = rabbit.lotteryRes.goldList;
            }
            for (var _i2 = 0; _i2 < goldArr.length; _i2++) {
              if (goldArr[_i2]) {
                _flyNum++;
              }
            }
            rabbit.rollIndex++;
            if (rabbit.lotteryRes.getBigWin.isStart && rabbit.lotteryRes.getBigWin.bFlag && rabbit.lotteryRes.getBigWin.res_list.length > 1) {
              if (rIndex == rabbit.rollIndex || rIndex == 1) {
                this.playWinAnim(_flyNum * 0.2 + 0.2);
                this.stopFreeTimes(_flyNum * 0.2 + 0.2);
              } else {
                this.playWinAnim();
                tween(this.node.getChildByName("node")).delay(_flyNum * 0.2 + 0.2).call(function () {
                  _this4.closeShine();
                  _this4.roll(rabbit.lotteryRes.getBigWin.res_list[rabbit.rollIndex].nHandCards);
                }).start();
              }
            } else {
              this.playWinAnim();
            }
          }
        };
        _proto.playWinAnim = function playWinAnim(flyTime) {
          var _this5 = this;
          var allLine = [];
          var rindex = rabbit.lotteryRes.getBigWin.res_list.length;
          var nWinCards;
          if (rindex > 1) {
            nWinCards = rabbit.lotteryRes.getBigWin.res_list[rabbit.rollIndex - 1].nWinCards;
          } else {
            nWinCards = rabbit.lotteryRes.nWinCards;
          }
          for (var i in nWinCards) {
            if (nWinCards[i]) {
              allLine.push(i);
            }
          }
          var lines = rabbit.lotteryRes.nWinLinesDetail;
          var rIndex = rabbit.lotteryRes.getBigWin.res_list.length;
          var list = this.freeTimes > 0 || this.stopFree ? [allLine] : [allLine].concat(lines);
          //幸运模式最后一次或普通第一次
          if (rabbit.lotteryRes.winscore > 0 && (rIndex == rabbit.rollIndex || rIndex == 1)) {
            var wl = this.winNode.getChildByName("lab").getComponent(Label);
            // if (!this.bIsFreeGame) {
            if (rabbit.bigWinBn) {
              this.slotCtrl.playAnim_BigWin(rabbit.lotteryRes.winscore);
              wl.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.lotteryRes.winscore);
              // this.slotCtrl.playAnimWin(1, rabbit.lotteryRes.winscore, wl);
              this.audio.playbigwinmain();
            } else {
              var _this$coinBoomEffect$;
              this.coinBoomEffect.active = true;
              (_this$coinBoomEffect$ = this.coinBoomEffect.getComponent(Animation)) == null || _this$coinBoomEffect$.play();
              if (rabbit.auto) {
                wl.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.lotteryRes.winscore);
              } else {
                this.slotCtrl.playAnimWin(0, rabbit.lotteryRes.winscore, wl);
              }
              this.rollComplete();
            }
            this.tipNode.active = false;
            this.winNode.active = true;
            this.winNode.children[2].active = true;
            this.winNode.children[3].active = false;
            if (rabbit.lotteryRes.winscore < rabbit.betSum * 3) {
              var _this$rabbitAnim$getC;
              if (rabbit.lotteryRes.winscore < rabbit.betSum) {
                this.audio.playWinLow();
              } else if (rabbit.lotteryRes.winscore < rabbit.betSum * 3) {
                this.audio.playWinHigh();
              }
              (_this$rabbitAnim$getC = this.rabbitAnim.getComponent(sp.Skeleton)) == null || _this$rabbitAnim$getC.setAnimation(0, "win", false);
            } else {
              var _this$rabbitAnim$getC2;
              this.audio.playrabbit_02();
              (_this$rabbitAnim$getC2 = this.rabbitAnim.getComponent(sp.Skeleton)) == null || _this$rabbitAnim$getC2.setAnimation(0, "win2", false);
            }
            if (rabbit.lotteryRes.winscore < rabbit.betSum) {
              this.audio.playWinLow();
            } else if (rabbit.lotteryRes.winscore < rabbit.betSum * 3) {
              this.audio.playWinLow();
            } else if (rabbit.lotteryRes.winscore < rabbit.betSum * 5) ;else ;
            // } else {
            //     if (rIndex == rabbit.rollIndex) {
            //           tween(this.node.getChildByName("node"))
            //             .delay(flyTime)
            //             .call(() => {
            //                 this.freeGameCoin = rabbit.lotteryRes.winscore;
            //                 this.win2BG.active = (this.freeGameCoin > rabbit.betSum * 3 && this.freeGameCoin < rabbit.betSum * 5);
            //                 this.win3BG.active = this.freeGameCoin >= rabbit.betSum * 5;
            //                 this.freeTipNode2.active = false;
            //                 this.winNode.active = true;
            //                 this.winNode.children[2].active = false;
            //                 this.winNode.children[3].active = true;
            //                 if (this.freeGameCoin > rabbit.betSum * 20) {
            //                     this.slotCtrl.playAnim_BigWin(this.freeGameCoin);
            //                     this.slotCtrl.playAnimWin(1, this.freeGameCoin, wl);
            //                     this.audio.playbigwinmain();
            //                 } else {
            //                     this.slotCtrl.playAnimWin(0, this.freeGameCoin, wl);
            //                 }
            //             })
            //             .start();
            //     }
            // }
          } else {
            if (rIndex == rabbit.rollIndex || rIndex == 1) this.rollComplete();
          }
          var animIndex = 0;
          this.goldAni = function () {
            var posArr = [];
            for (var j in list[animIndex]) {
              posArr.push([list[animIndex][j] % 3, parseInt(list[animIndex][j] / 3 + "")]);
            }
            posArr.sort(function (a, b) {
              return a[0] - b[0];
            });
            var _loop2 = function _loop2(_i3) {
              _this5.scheduleOnce(function () {
                _this5.showAnim(posArr[_i3][0], posArr[_i3][1]);
              }, posArr[_i3][0] * 0.1);
            };
            for (var _i3 = 0; _i3 < posArr.length; _i3++) {
              _loop2(_i3);
            }
          };
          if (rabbit.inBigWin) {
            this.scheduleOnce(this.goldAni, 0.01);
          } else {
            if (rabbit.auto) {
              this.scheduleOnce(this.goldAni, 0.01);
            } else {
              this.schedule(this.goldAni, 2, macro.REPEAT_FOREVER, 0.01);
            }
          }
          this.lineAni = function () {
            if (rIndex == rabbit.rollIndex || rIndex == 1) {
              _this5.closeShine();
              for (var _i4 = 0; _i4 < 12; _i4++) {
                _this5.closeAnim(_i4 % 3, parseInt(_i4 / 3 + ""));
              }
              if (!!!list[animIndex] || list[animIndex].length == 0) {
                return;
              }
              if (list[animIndex].length != 0) {
                _this5.maskNode.active = true;
              }
              if (rabbit.auto) {
                animIndex = list[animIndex].length;
                if (rabbit.lotteryRes.nWinLines.length > 0) {
                  _this5.audio.playWinFirst();
                }
                for (var _i5 = 0; _i5 < rabbit.lotteryRes.nWinLines.length; _i5++) {
                  var _this5$effectLine$chi;
                  _this5.effectLine.children[rabbit.lotteryRes.nWinLines[_i5]].active = true;
                  (_this5$effectLine$chi = _this5.effectLine.children[rabbit.lotteryRes.nWinLines[_i5]].getComponent(Animation)) == null || _this5$effectLine$chi.play();
                  _this5.effectNum.children[rabbit.lotteryRes.nWinLines[_i5]].active = true;
                }
                return;
              }
              if (animIndex == 0) {
                if (rabbit.lotteryRes.nWinLines.length > 0) {
                  _this5.audio.playWinFirst();
                }
                for (var _i6 = 0; _i6 < rabbit.lotteryRes.nWinLines.length; _i6++) {
                  var _this5$effectLine$chi2;
                  _this5.effectLine.children[rabbit.lotteryRes.nWinLines[_i6]].active = true;
                  (_this5$effectLine$chi2 = _this5.effectLine.children[rabbit.lotteryRes.nWinLines[_i6]].getComponent(Animation)) == null || _this5$effectLine$chi2.play();
                  _this5.effectNum.children[rabbit.lotteryRes.nWinLines[_i6]].active = true;
                }
              } else {
                _this5.audio.playWinLoop();
                if (rabbit.lotteryRes.nWinLines.length > 0) {
                  var _this5$effectLine$chi3;
                  _this5.coinLineLab.node.active = true;
                  _this5.coinLineLab.node.y = rabbit.winLinePos[rabbit.lotteryRes.nWinLines[animIndex - 1]];
                  _this5.coinLineLab.string = Num.fixNum(rabbit.exchangeRate, rabbit.lotteryRes.nWinDetail[animIndex - 1]);
                  _this5.effectLine.children[rabbit.lotteryRes.nWinLines[animIndex - 1]].active = true;
                  (_this5$effectLine$chi3 = _this5.effectLine.children[rabbit.lotteryRes.nWinLines[animIndex - 1]].getComponent(Animation)) == null || _this5$effectLine$chi3.play();
                  _this5.effectNum.children[rabbit.lotteryRes.nWinLines[animIndex - 1]].active = true;
                }
              }
              animIndex++;
              if (animIndex == rabbit.lotteryRes.nWinLines.length + 1) {
                animIndex = 0;
              }
            }
          };
          if (rabbit.auto) {
            this.scheduleOnce(this.lineAni, 0.01);
          } else {
            this.schedule(this.lineAni, 2, macro.REPEAT_FOREVER, 0.01);
          }
          this.flyIndex = 0;
          if (!rabbit.auto) {
            this.slotCtrl.Btn_stopAuto.active = false;
            this.slotCtrl.Btn_start.active = true;
          }
          this.playWinAnimOverBn = true;
          if (rabbit.lotteryRes.winscore <= rabbit.betSum * 20) {
            this.scheduleOnce(this.playWinAnimOver, 1);
          }
        };
        _proto.rollComplete = function rollComplete() {
          var _this6 = this;
          if (this.completeBn) return;
          this.completeBn = true;
          this.scheduleOnce(function () {
            _this6.completeBn = false;
          }, 3);
          this.scheduleOnce(function () {
            _this6.slotCtrl.setSpinAnim(0);
            if (rabbit.auto && rabbit.autoTimes > 0) {
              _this6.scheduleOnce(_this6.sendRoll, 1);
            }
          }, 1);
        };
        _proto.playWinAnimOver = function playWinAnimOver() {
          if (!this.playWinAnimOverBn) return;
          this.playWinAnimOverBn = false;
          if (this.winNode.active) {
            this.scheduleOnce(this.winShowBack, 1);
          }
          // this.stopFreeTimes(0);
          this.closeShine();
          var lastNum = rabbit.lotteryRes.getBigWin.res_list.length - rabbit.rollIndex - 1;
          if (lastNum == 0) {
            this.slotCtrl.Btn_free.children[0].active = false;
            this.slotCtrl.Btn_free.children[1].active = true;
          } else {
            this.slotCtrl.Btn_free.children[0].active = true;
            this.slotCtrl.Btn_free.children[1].active = false;
            this.slotCtrl.Btn_free.getChildByName('auto_lab').getComponent(Label).string = lastNum + "";
          }
        };
        _proto.winShowBack = function winShowBack() {
          this.tipNode.active = true;
          this.winNode.active = false;
          this.win2BG.active = false;
          this.win3BG.active = false;
          this.stopFree = false;
          this.coinBoomEffect.active = false;
          this.coinJumpEffect.active = false;
          this.runLight.active = false;
        };
        _proto.closeBigWin = function closeBigWin() {
          var _this7 = this;
          if (this.closeBigWinBn) {
            return;
          }
          this.closeBigWinBn = true;
          this.scheduleOnce(function () {
            _this7.closeBigWinBn = false;
            _this7.rollComplete();
          }, 1);
          this.slotCtrl.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.lotteryRes.winscore);
          tween(this.node.getChildByName("node")).delay(0.5).call(function () {
            if (_this7.playWinAnimOverBn) {
              if (rabbit.lotteryRes.winscore > rabbit.betSum * 3 && rabbit.lotteryRes.winscore < rabbit.betSum * 5) {
                _this7.win2BG.active = true;
                _this7.win2BG.opacity = 0;
                tween(_this7.win2BG).to(1, {
                  opacity: 255
                }).start();
              }
              if (rabbit.lotteryRes.winscore >= rabbit.betSum * 5) {
                _this7.win3BG.active = true;
                _this7.win3BG.opacity = 0;
                tween(_this7.win3BG).to(1, {
                  opacity: 255
                }).start();
              }
              if (_this7.winNode.active) {
                var _this7$coinBoomEffect, _this7$coinJumpEffect, _this7$runLight$getCo;
                _this7.coinBoomEffect.active = true;
                (_this7$coinBoomEffect = _this7.coinBoomEffect.getComponent(Animation)) == null || _this7$coinBoomEffect.play();
                _this7.coinJumpEffect.active = true;
                (_this7$coinJumpEffect = _this7.coinJumpEffect.getComponent(Animation)) == null || _this7$coinJumpEffect.play();
                _this7.runLight.active = true;
                (_this7$runLight$getCo = _this7.runLight.getComponent(Animation)) == null || _this7$runLight$getCo.play();
              }
            }
          }).delay(3).call(function () {
            _this7.playWinAnimOver();
          }).start();
        };
        _proto.stopFreeTimes = function stopFreeTimes(flyTime) {
          var _getComponent2,
            _this$rabbitAnim$getC3,
            _this8 = this;
          this.audio.playBgm();
          // this.isFreeEnd = false;
          (_getComponent2 = find('node/bg/s_bkg_normal/bg_logo_vfx', this.node).getComponent(Animation)) == null || _getComponent2.play('gxfc');
          tween(this.node.getChildByName("node")).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }).start();
          this.rabbitAnim.active = true;
          (_this$rabbitAnim$getC3 = this.rabbitAnim.getComponent(sp.Skeleton)) == null || _this$rabbitAnim$getC3.setAnimation(0, "respawn", false);
          this.slotCtrl.Btn_free.active = false;
          this.scheduleOnce(function () {
            // if (!this.isFreeEnd) {
            // this.slotCtrl.setFreeGameUI(false, 220, 220);
            _this8.tipNode.active = true;
            _this8.freeTipNode.active = false;
            _this8.freeTipNode2.active = false;
            _this8.bIsFreeGame = false;
            _this8.winNode.active = false;
            _this8.win2BG.active = false;
            _this8.win3BG.active = false;
            _this8.slotCtrl.betting_panel.active = true;
            // }
          }, flyTime + 1);
        };
        //飞宝箱金币
        _proto.showAnim = function showAnim(cols, index) {
          var _nodeList$getComponen,
            _this9 = this;
          this.flyIndex++;
          var targetIdx = index + 1;
          var targetNode = rabbit.wheelList[cols].rolePbList[targetIdx]; //卷轴上的节点 
          var nodeNum = targetNode.getComponent(pbCardNum);
          for (var i in targetNode.children) {
            targetNode.children[i].active = false;
          }
          var nodeList = this.effectLight.children;
          nodeList[cols * 4 + index].active = true;
          (_nodeList$getComponen = nodeList[cols * 4 + index].getComponent(Animation)) == null || _nodeList$getComponen.play();
          var nodeList2 = this.effectCard.children;
          var _loop3 = function _loop3() {
            var effectNode = nodeList2[cols * 4 + index].children[_i7];
            effectNode.active = _i7 == rabbit.wheelList[cols].roleIdList[targetIdx] - 1;
            if (rabbit.wheelList[cols].roleIdList[targetIdx] == 8 && _i7 == 7) {
              effectNode.getChildByName("001").active = false;
              effectNode.getChildByName("002").active = false;
              effectNode.getChildByName("003").active = false;
              effectNode.getChildByName("00" + nodeNum.showNodeNum).active = true;
              var numStr = Num.exchangeToThousands2(rabbit.exchangeRate, nodeNum.val * rabbit.exchangeRate);
              effectNode.children[1].getComponent(Label).string = numStr;
              effectNode.children[2].getComponent(Label).string = numStr;
              effectNode.children[3].getComponent(Label).string = numStr;
              if (rabbit.lotteryRes.getBigWin.isStart && rabbit.lotteryRes.getBigWin.bFlag) {
                var newNode = instantiate(effectNode.children[nodeNum.showNodeNum]);
                var transForm = effectNode.children[nodeNum.showNodeNum].getComponent(UITransform);
                var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
                transForm = _this9.node.getComponent(UITransform);
                var p = transForm.convertToNodeSpaceAR(newVec3);
                newNode.position = new Vec3(p.x / 0.9, p.y / 0.9);
                var createArea = find("node/createArea", _this9.node);
                createArea.addChild(newNode);
                var flyNumItem = newNode.addComponent(flyNum);
                flyNumItem.p0 = newNode.position;
                flyNumItem.p1 = new Vec3(flyNumItem.p0.x / 3 - 10 + 20 * math.random(), flyNumItem.p0.y);
                flyNumItem.p2 = new Vec3(0, -310);
                flyNumItem.p3 = new Vec3(22, -310);
                flyNumItem.t = 0;
                tween(flyNumItem).delay(_this9.flyIndex * 0.2).call(function () {
                  effectNode.children[nodeNum.showNodeNum].opacity = 170;
                }).to(0.4, {
                  t: 1
                }, {
                  easing: 'cubicIn'
                }).call(function () {
                  _this9.showWin(nodeNum.val);
                  newNode.parent = null;
                }).start();
              }
            }
          };
          for (var _i7 = 0; _i7 < nodeList2[cols * 4 + index].children.length; _i7++) {
            _loop3();
          }
          var nodeList3 = this.effectpsvfx.children;
          for (var _i8 = 0; _i8 < nodeList3[cols * 4 + index].children.length; _i8++) {
            nodeList3[cols * 4 + index].children[_i8].active = _i8 == rabbit.wheelList[cols].roleIdList[targetIdx] - 1;
          }
        };
        _proto.showWin = function showWin(num) {
          var _wl$getComponent, _this$winNode$childre;
          var wl = this.winNode.getChildByName("lab").getComponent(Label);
          if (this.winNode.active) {
            wl.string = Num.exchangeToThousands(rabbit.exchangeRate, Num.toThousandsBack(wl.string) + num);
          } else {
            wl.string = Num.exchangeToThousands(rabbit.exchangeRate, num);
          }
          this.freeTipNode2.active = false;
          this.winNode.active = true;
          this.winNode.children[2].active = true;
          this.winNode.children[3].active = false;
          var aniNode = this.winNode.children[0].children[1];
          var ani = aniNode.getComponent(Animation);
          ani.play();
          (_wl$getComponent = wl.getComponent(nodeSizeJump)) == null || _wl$getComponent.play();
          (_this$winNode$childre = this.winNode.children[2].getComponent(nodeSizeJump)) == null || _this$winNode$childre.play();
        };
        _proto.closeAnim = function closeAnim(cols, index) {
          var targetIdx = index + 1;
          var targetNode = rabbit.wheelList[cols].rolePbList[targetIdx]; //卷轴上的节点 
          var nodeNum = targetNode.getComponent(pbCardNum);
          if (rabbit.wheelList[cols].roleIdList[targetIdx] == 8) {
            targetNode.children[0].active = true;
            targetNode.getChildByName("001").active = false;
            targetNode.getChildByName("002").active = false;
            targetNode.getChildByName("003").active = false;
            targetNode.getChildByName("00" + nodeNum.showNodeNum).active = true;
          } else if (rabbit.wheelList[cols].roleIdList[targetIdx] != 7) {
            targetNode.children[1].active = true;
          } else {
            if (targetNode.children[2]) {
              targetNode.children[2].active = true;
            } else {
              targetNode.children[1].active = true;
            }
          }
          var nodeList = this.effectLight.children;
          nodeList[cols * 4 + index].active = false;
          var nodeList2 = this.effectCard.children;
          for (var i = 0; i < nodeList2[cols * 4 + index].children.length; i++) {
            nodeList2[cols * 4 + index].children[i].active = false;
          }
          var nodeList3 = this.effectpsvfx.children;
          for (var _i9 = 0; _i9 < nodeList3[cols * 4 + index].children.length; _i9++) {
            nodeList3[cols * 4 + index].children[_i9].active = false;
          }
        };
        _proto.checkRollData = function checkRollData(list) {
          for (var _iterator = _createForOfIteratorHelperLoose(list), _step; !(_step = _iterator()).done;) {
            var iterator = _step.value;
            if (iterator >= this.rolePb.length) {
              return false;
            }
          }
          return true;
        };
        _proto.roll = function roll(list) {
          var _this10 = this;
          this.closeShine();
          if (this.lineAni) {
            this.unschedule(this.lineAni);
            this.lineAni = null;
          }
          if (this.goldAni) {
            this.unschedule(this.goldAni);
            this.goldAni = null;
          }
          if (!rabbit.auto) {
            rabbit.rollEnable = true;
          }
          rabbit.status = 1;
          var line = [];
          for (var i = 0; i < 3; i++) {
            line[i] = [];
          }
          for (var _i10 in list) {
            line[Number(_i10) % 3][3 - parseInt(Number(_i10) / 3 + "")] = list[_i10];
          }
          var nd_gxfc = find('node/bg/s_bkg_normal/bg_logo_vfx', this.node);
          nd_gxfc.active = false;
          if (rabbit.lotteryRes.getBigWin.bFlag && rabbit.rollIndex == 0) {
            var bigWinResult = rabbit.lotteryRes.getBigWin;
            this.bIsFreeGame = true;
            this.scheduleOnce(function () {
              var _this10$rabbitAnim$ge;
              _this10.audio.playBWCome();
              _this10.audio.playBW();
              (_this10$rabbitAnim$ge = _this10.rabbitAnim.getComponent(sp.Skeleton)) == null || _this10$rabbitAnim$ge.setAnimation(0, "tease_start", false);
              if (bigWinResult.isStart) {
                var _this10$freeModeStart, _this10$effectFree$ge;
                _this10.slotCtrl.betting_panel.active = false;
                tween(_this10.freeBgNode).to(2, {
                  opacity: 255
                }).start();
                tween(_this10.node.getChildByName("node")).to(3, {
                  scale: new Vec3(0.9, 0.9, 0.9)
                }).call(function () {
                  var _this10$rabbitAnim$ge2;
                  _this10.audio.playrabbit_01();
                  (_this10$rabbitAnim$ge2 = _this10.rabbitAnim.getComponent(sp.Skeleton)) == null || _this10$rabbitAnim$ge2.setAnimation(0, "freespin", false);
                }).start();
                (_this10$freeModeStart = _this10.freeModeStartEffect.getComponent(Animation)) == null || _this10$freeModeStart.play();
                _this10.effectFree.active = true;
                (_this10$effectFree$ge = _this10.effectFree.getComponent(Animation)) == null || _this10$effectFree$ge.play();
                tween(_this10.effectFree).to(4, {
                  scale: new Vec3(0.98, 0.98, 0.98)
                }).call(function () {
                  var light = find("node/createArea/light", _this10.node);
                  tween(light).call(function () {
                    light.active = true;
                  }).delay(3).call(function () {
                    light.active = false;
                  }).start();
                }).delay(2).call(function () {
                  var _nd_gxfc$getComponent;
                  _this10.freeBgNode.active = true;
                  _this10.slotCtrl.Btn_free.active = true;
                  var lastNum = rabbit.lotteryRes.getBigWin.res_list.length - rabbit.rollIndex - 1;
                  if (lastNum == 0) {
                    _this10.slotCtrl.Btn_free.children[0].active = false;
                    _this10.slotCtrl.Btn_free.children[1].active = true;
                  } else {
                    _this10.slotCtrl.Btn_free.children[0].active = true;
                    _this10.slotCtrl.Btn_free.children[1].active = false;
                    _this10.slotCtrl.Btn_free.getChildByName('auto_lab').getComponent(Label).string = lastNum + "";
                  }
                  nd_gxfc.active = true;
                  (_nd_gxfc$getComponent = nd_gxfc.getComponent(Animation)) == null || _nd_gxfc$getComponent.play('gxfc1');
                  _this10.effectFree.active = false;
                  _this10.freeTipNode.active = true;
                  _this10.rabbitAnim.active = false;
                  _this10.tipNode.active = false;
                  _this10.freeTipNode.active = true;
                  _this10.freeTipNode2.active = true;
                  _this10.winNode.active = false;
                  // this.slotCtrl.setFreeGameUI(true, 220, 220);
                  var idx = 0;
                  var numList = [2, 2, 2, 2, 2, 1];
                  var aniCb = function aniCb() {
                    var n = Math.floor(Math.random() * numList.length);
                    var add = numList[n];
                    numList.splice(n, 1);
                    for (var _i11 = 0; _i11 < add; _i11++) {
                      var w = Math.floor(Math.random() * 3);
                      var x = -215 + 215 * w;
                      var y = Math.random() * 400 - 200;
                      _this10.createFreeAnimation(new Vec3(x, y), w);
                    }
                    idx += add;
                    if (idx >= 11) {
                      _this10.unschedule(aniCb);
                    }
                  };
                  _this10.schedule(aniCb, 0.3);
                }).start();
              } else {
                var _this10$freeModeFakeS, _this10$effectFreeNo$;
                tween(_this10.freeBgNode).to(2, {
                  opacity: 255
                }).delay(2).to(0.3, {
                  opacity: 0
                }).start();
                tween(_this10.node.getChildByName("node")).to(4, {
                  scale: new Vec3(0.9, 0.9, 0.9)
                }).call(function () {
                  var _this10$rabbitAnim$ge3;
                  (_this10$rabbitAnim$ge3 = _this10.rabbitAnim.getComponent(sp.Skeleton)) == null || _this10$rabbitAnim$ge3.setAnimation(0, "tease_exit", false);
                  find('node/bg/s_bkg_normal/bg_logo_vfx', _this10.node).active = false;
                }).to(0.5, {
                  scale: new Vec3(1, 1, 1)
                }).call(function () {
                  _this10.bIsFreeGame = false;
                }).start();
                (_this10$freeModeFakeS = _this10.freeModeFakeStartEffect.getComponent(Animation)) == null || _this10$freeModeFakeS.play();
                _this10.effectFreeNo.active = true;
                (_this10$effectFreeNo$ = _this10.effectFreeNo.getComponent(Animation)) == null || _this10$effectFreeNo$.play();
                tween(_this10.effectFreeNo).to(4, {
                  scale: new Vec3(0.98, 0.98, 0.98)
                }).to(0.5, {
                  scale: new Vec3(1, 1, 1)
                }).call(function () {
                  _this10.effectFreeNo.active = false;
                }).start();
              }
            }, 0.5);
            for (var _i12 in rabbit.wheelList) {
              var _rabbit$wheelList$_i;
              (_rabbit$wheelList$_i = rabbit.wheelList[_i12]).startFreeRoll.apply(_rabbit$wheelList$_i, line[_i12]);
            }
          } else {
            var lastNum = rabbit.lotteryRes.getBigWin.res_list.length - rabbit.rollIndex - 1;
            if (lastNum == 0) {
              this.slotCtrl.Btn_free.children[0].active = false;
              this.slotCtrl.Btn_free.children[1].active = true;
            } else {
              this.slotCtrl.Btn_free.children[0].active = true;
              this.slotCtrl.Btn_free.children[1].active = false;
              this.slotCtrl.Btn_free.getChildByName('auto_lab').getComponent(Label).string = lastNum + "";
            }
            if (!this.bIsFreeGame) {
              for (var _i13 in rabbit.wheelList) {
                var _rabbit$wheelList$_i2;
                (_rabbit$wheelList$_i2 = rabbit.wheelList[_i13]).startRoll.apply(_rabbit$wheelList$_i2, line[_i13]);
              }
            } else {
              var _nd_gxfc$getComponent2;
              var _nd_gxfc = find('node/bg/s_bkg_normal/bg_logo_vfx', this.node);
              _nd_gxfc.active = true;
              (_nd_gxfc$getComponent2 = _nd_gxfc.getComponent(Animation)) == null || _nd_gxfc$getComponent2.play('gxfc1');
              for (var _i14 in rabbit.wheelList) {
                var _rabbit$wheelList$_i3;
                (_rabbit$wheelList$_i3 = rabbit.wheelList[_i14]).FreeRoll.apply(_rabbit$wheelList$_i3, line[_i14]);
              }
            }
          }
        };
        _proto.closeShine = function closeShine() {
          for (var i = 0; i < this.effectLine.children.length; i++) {
            this.effectLine.children[i].active = false;
          }
          for (var _i15 = 0; _i15 < this.effectNum.children.length; _i15++) {
            this.effectNum.children[_i15].active = false;
          }
          for (var _i16 = 0; _i16 < this.effectLight.children.length; _i16++) {
            this.effectLight.children[_i16].active = false;
          }
          for (var _i17 = 0; _i17 < this.effectpsvfx.children.length; _i17++) {
            for (var j = 0; j < this.effectpsvfx.children[_i17].children.length; j++) {
              this.effectpsvfx.children[_i17].children[j].active = false;
            }
          }
          for (var _i18 = 0; _i18 < this.effectCard.children.length; _i18++) {
            for (var _j = 0; _j < this.effectCard.children[_i18].children.length; _j++) {
              this.effectCard.children[_i18].children[_j].active = false;
            }
          }
          for (var _i19 = 0; _i19 < rabbit.wheelList.length; _i19++) {
            for (var _j2 = 0; _j2 < rabbit.wheelList[_i19].rolePbList.length; _j2++) {
              if (rabbit.wheelList[_i19].roleIdList[_j2] == 7) {
                rabbit.wheelList[_i19].rolePbList[_j2].children[0].active = false;
                rabbit.wheelList[_i19].rolePbList[_j2].children[1].active = true;
                rabbit.wheelList[_i19].rolePbList[_j2].children[2] && (rabbit.wheelList[_i19].rolePbList[_j2].children[2].active = true, rabbit.wheelList[_i19].rolePbList[_j2].children[1].active = false);
              } else if (rabbit.wheelList[_i19].roleIdList[_j2] != 8) {
                rabbit.wheelList[_i19].rolePbList[_j2].children[0].active = false;
                rabbit.wheelList[_i19].rolePbList[_j2].children[1].active = true;
                rabbit.wheelList[_i19].rolePbList[_j2].children[2] && (rabbit.wheelList[_i19].rolePbList[_j2].children[2].active = false);
              }
            }
          }
          this.maskNode.active = false;
          this.coinLineLab.node.active = false;
        };
        _proto.sendRoll = function sendRoll() {
          var _this$effectSlot2$get,
            _this11 = this;
          if (rabbit.detail) {
            this.deskMask.active = false;
            rabbit.detail.node.active = false;
            rabbit.detail = null;
          }
          this.unschedule(this.winShowBack);
          this.winShowBack();
          this.closeShine();
          this.slotCtrl.unscheduleAllCallbacks();
          rabbit.autoTimes = rabbit.autoTimes > 0 ? rabbit.autoTimes - 1 : 0;
          if (rabbit.autoTimes == 0) {
            rabbit.auto = false;
          }
          if (!this.bIsFreeGame) {
            this.freeBgNode.opacity = 0;
          }
          (_this$effectSlot2$get = this.effectSlot2.getComponent(Animation)) == null || _this$effectSlot2$get.play();
          if (this.bIsFreeGame) {
            var _this$freeModeRollEff;
            (_this$freeModeRollEff = this.freeModeRollEffect.getComponent(Animation)) == null || _this$freeModeRollEff.play();
          } else {
            if (this.slotCtrl.isSpeed) {
              var _this$effectFastSlot;
              (_this$effectFastSlot = this.effectFastSlot1.getComponent(Animation)) == null || _this$effectFastSlot.play();
            } else {
              var _this$effectSlot1$get;
              (_this$effectSlot1$get = this.effectSlot1.getComponent(Animation)) == null || _this$effectSlot1$get.play();
            }
          }
          tween(this.node.getChildByName("node")).delay(0.1).call(function () {
            _this11.slotCtrl.setSpinAnim(1);
          }).start();
          this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = rabbit.autoTimes + "";
          this.audio.playclickstart();
          if (rabbit.autoTimes > 999) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.76, 0.76, 0.76);
          } else if (rabbit.autoTimes > 99) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.9, 0.9, 0.9);
          } else {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(1, 1, 1);
          }
          if (!this.bIsFreeGame) {
            for (var i in rabbit.wheelList) {
              rabbit.wheelList[i].rollLoop();
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
                  return gameNet.playSlots(SubGameDef.SLOTS_RABBIT, rabbit.betSum.toString());
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
          // rabbit.lotteryRes = res;
          var mydata = res;
          return mydata;
        };
        _proto.lotteryBack = function lotteryBack(data) {
          var _this12 = this;
          console.log('lotteryResult:', data);
          if (data && data.code == 0) {
            rabbit.lotteryRes = data;
            rabbit.rollIndex = 0;
            rabbit.money = data.userscore;
            this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, data.userscore - data.winscore);
            tween(this.node.getChildByName("node")).delay(0.4).call(function () {
              if (rabbit.lotteryRes.getBigWin.isStart && rabbit.lotteryRes.getBigWin.bFlag && rabbit.lotteryRes.getBigWin.res_list.length > 1) {
                _this12.roll(rabbit.lotteryRes.getBigWin.res_list[rabbit.rollIndex].nHandCards);
                _this12.slotCtrl.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, 0);
              } else {
                _this12.roll(data.nHandCards);
                _this12.slotCtrl.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, data.winscore);
              }
            }).start();
          }
        };
        _proto.stopImmediately = function stopImmediately() {
          if (!rabbit.auto) {
            for (var i in rabbit.wheelList) {
              rabbit.wheelList[i].stopImmediately();
            }
          }
        };
        _proto.createFreeAnimation = function createFreeAnimation(pos, wheel) {
          var m = [0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 50, 50, 50, 100, 100, 500];
          var a = Math.floor(Math.random() * m.length);
          var pb = instantiate(this.rolePb[8]);
          pb.y = 200;
          if (m[a] <= 10) {
            pb.children[1].active = true;
            pb.getComponent(pbCardNum).showNodeNum = 1;
          } else if (m[a] <= 100) {
            pb.children[2].active = true;
            pb.getComponent(pbCardNum).showNodeNum = 2;
          } else if (m[a] <= 1000) {
            pb.children[3].active = true;
            pb.getComponent(pbCardNum).showNodeNum = 3;
          }
          pb.children[1].getComponent(Label).string = Num.exchangeToThousands(rabbit.exchangeRate, m[a] * rabbit.lotteryRes.nBet);
          pb.children[2].getComponent(Label).string = Num.exchangeToThousands(rabbit.exchangeRate, m[a] * rabbit.lotteryRes.nBet);
          pb.children[3].getComponent(Label).string = Num.exchangeToThousands(rabbit.exchangeRate, m[a] * rabbit.lotteryRes.nBet);
          var createArea = find("node/createArea", this.node);
          createArea.addChild(pb);
          tween(pb).to(0.3, {
            position: new Vec3(pos, 100)
          }).call(function () {
            pb.parent = rabbit.wheelList[wheel].node.parent;
          }).to(0.8, {
            position: new Vec3(pb.x, pb.y - 800)
          }).call(function () {
            pb.parent = null;
          }).start();
        };
        _proto.close = function close() {
          this.audio.clearAll();
        };
        return rabbitMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rolePb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roleAnimPb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roleNullPb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "detailPb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wildEffectPb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "effectSlot1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "effectSlot2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effectFastSlot1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "effectNum", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "effectLight", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "effectCard", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "effectpsvfx", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "effectLine", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "BgNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "freeBgNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "freeTipNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "freeTipNode2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "effectFreeNo", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "effectFree", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "win2BG", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "win3BG", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "winNode", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "coinBoomEffect", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "coinJumpEffect", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "runLight", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "coinLineLab", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "rabbitAnim", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "deskMask", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "freeModeFakeStartEffect", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "freeModeStartEffect", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "freeModeRollEffect", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec35], {
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

System.register("chunks:///_virtual/rabbitSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts', './Num.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Component, Color, rabbit, Num, LanguageData;
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
      Component = module.Component;
      Color = module.Color;
    }, function (module) {
      rabbit = module.rabbit;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "f47248adP5K4p0DLlTgdX5i", "rabbitSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var rabbitSlotCtrl = exports('rabbitSlotCtrl', (_dec = ccclass('rabbitSlotCtrl'), _dec2 = property({
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rabbitSlotCtrl, _Component);
        function rabbitSlotCtrl() {
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
          _this.autoNum = 0;
          _this.isPanelAnim = false;
          _this.isSpeed = false;
          _this.sumList = [];
          _this._btnContent = null;
          _this.curBetTween = null;
          //大奖数字滚动动画
          _this.aimCoin = 0;
          _this.addcoin = 0;
          _this.addOnce = 0;
          _this.playOverBn = false;
          _this.init_big_click = false;
          _this.watchLabel = null;
          _this.inumObj = {
            inum: 0
          };
          _this.score_bigwin = 0;
          _this.tween = null;
          //创建提示文字
          _this.tipTween = null;
          return _this;
        }
        var _proto = rabbitSlotCtrl.prototype;
        _proto.start = function start() {
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
          if (!rabbit.rollEnable) {
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
          if (!rabbit.rollEnable) {
            return;
          }
          rabbit.node.onCLick(e, 'roll');
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
          rabbit.node.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.money);
        };
        _proto.update = function update() {
          // if (!this.lblUserCoin3) {
          //     return;
          // }
          // this.lblUserCoin3.string = this.lblUserCoin.string;
          // this.lblCurBet3.string = this.lblCurBet.string;
          // this.winCoin_lab3.string = this.winCoin_lab.string;
          this.initTip();
          if (this.watchLabel) {
            this.bigWinCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, this.inumObj.inum);
            this.watchLabel.string = Num.exchangeToThousands(rabbit.exchangeRate, this.inumObj.inum);
          }
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
          if (!rabbit.betNum) {
            rabbit.sumIdx = 0;
            rabbit.betNum = this.sumList[rabbit.sumIdx];
          } else {
            rabbit.sumIdx = this.sumList.indexOf(rabbit.betNum);
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
          rabbit.node.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          rabbit.autoPanel.showPanel();
        }

        //关闭自动弹板
        ;

        _proto.onCLick_closeAutoPanel = function onCLick_closeAutoPanel() {
          rabbit.node.audio.playclickclose();
          // this.Auto_panel.getComponent('autoPanel').hidePanel();
        };
        //打开设置界面
        _proto.onClickShowSettingPanel = function onClickShowSettingPanel(event) {
          rabbit.node.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", rabbit.node.node);
          if (footer) {
            footer.active = false;
          }
          this.Btn_start.active = false;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, -180, 0),
            opacity: 0
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, -530, 0),
            opacity: 255
          }).start();
        }

        //打开设置界面
        ;

        _proto.onClickHideSettingPanel = function onClickHideSettingPanel(event) {
          if (this.Setting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", rabbit.node.node);
          if (footer) {
            footer.active = true;
          }
          this.Btn_start.active = true;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, 0, 0),
            opacity: 255
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, -710, 0),
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
            rabbit.betPanel.hidePanel();
          } else {
            rabbit.betPanel.showPanel();
            rabbit.betPanel.bindBet();
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
          rabbit.node.audio.playclickopen();
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
          rabbit.sumIdx = this.sumList.indexOf(rabbit.betSum);
          if (rabbit.sumIdx == -1) {
            rabbit.sumIdx = 0;
          }
          this.updateBet(rabbit.sumIdx);
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
          if (rabbit.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (rabbit.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (rabbit.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (rabbit.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          rabbit.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(rabbit.exchangeRate, this.sumList[idx]);
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
        _proto.playAnimWin = function playAnimWin(type, coin, labNode) {
          var _this3 = this;
          var t = (type + 1) * 30; //变化次数
          if (t == 0) {
            labNode.string = Num.exchangeToThousands(rabbit.exchangeRate, coin);
            this.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, coin);
            this.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.money);
            return;
          }
          var list = []; //变化数组
          for (var i = 0; i < t; i++) {
            var A1 = coin / 100;
            var An = A1 + 2 * i * (coin - t * A1) / (t * (t - 1));
            list.push(An);
          }
          var x = t - 1;
          var addcoin = 0;
          labNode.string = Num.exchangeToThousands(rabbit.exchangeRate, addcoin);
          this.schedule(function () {
            addcoin += list[x];
            if (x == 0) {
              addcoin = coin;
            }
            labNode.string = Num.exchangeToThousands(rabbit.exchangeRate, addcoin);
            x--;
          }, 0.05, t - 1);
          var x_ = t - 1;
          this.schedule(function () {
            if (x_ == 0) {
              _this3.changeLabColor(1);
            }
            _this3.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, addcoin);
            _this3.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.lotteryRes.userscore - rabbit.lotteryRes.winscore + addcoin);
            x_--;
          }, 0.1, t - 1, 0.1 * (t + 3));
        };
        _proto.playBigWinCoin = function playBigWinCoin(coin) {
          if (this.bigWinNode.active) return;
          this.bigWinNode.active = true;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, this.addcoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.closeBigWin, 8);
        };
        _proto.coinOneChange = function coinOneChange() {
          this.addcoin += this.addOnce;
          if (this.addcoin >= this.aimCoin) {
            this.playCoinOver();
          } else {
            if (this.addcoin >= rabbit.betSum * 50 && !this.bigWinNode.children[2].active) {
              this.playAnim_MegaWin();
            } else if (this.addcoin >= rabbit.betSum * 35 && this.addcoin < rabbit.betSum * 50 && !this.bigWinNode.children[1].active) {
              this.playAnim_SuperWin();
            }
            this.bigWinCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          if (this.aimCoin >= rabbit.betSum * 50 && !this.bigWinNode.children[2].active) {
            this.playAnim_MegaWin();
          } else if (this.aimCoin >= rabbit.betSum * 35 && this.aimCoin < rabbit.betSum * 50 && !this.bigWinNode.children[1].active) {
            this.playAnim_SuperWin();
          }
          this.bigWinCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 2);
        };
        _proto.onFastBigWin = function onFastBigWin(e) {
          if (this.playOverBn) {
            this.closeBigWin();
          } else {
            this.playCoinOver();
          }
        };
        _proto.playAnim_BigWin_ByRateLv = function playAnim_BigWin_ByRateLv(score, label) {
          if (!this.init_big_click) {
            this.init_big_click = true;
            var btn = this.bigWinNode.addComponent(Button);
            var clickEventHandler = new Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "tigerSlotCtrl";
            clickEventHandler.handler = "onBigWinClick";
            btn.clickEvents.push(clickEventHandler);
          }
          //var rate = score / tiger.betSum
          this.watchLabel = label;
          this.inumObj.inum = 0;
          this.score_bigwin = score;
          this.showBigWinByRate();
          this.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.lotteryRes.winscore);
          this.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.money);
        };
        _proto.getNextTargetNum_bigWin = function getNextTargetNum_bigWin() {
          var tar = this.score_bigwin;
          if (this.watchLabel && this.watchLabel.node && this.inumObj.inum < rabbit.betSum * 35) {
            tar = rabbit.betSum * 35;
          } else if (this.watchLabel && this.watchLabel.node && this.inumObj.inum < rabbit.betSum * 50) {
            tar = rabbit.betSum * 50;
          }
          if (tar > this.score_bigwin) tar = this.score_bigwin;
          return tar;
        };
        _proto.showBigWinByRate = function showBigWinByRate() {
          var _this4 = this;
          this.bigWinNode.active = true;
          if (this.watchLabel && this.watchLabel.node && this.inumObj.inum >= rabbit.betSum * 50) {
            this.playAnim_MegaWin();
          } else if (this.watchLabel && this.watchLabel.node && this.inumObj.inum >= rabbit.betSum * 35) {
            this.playAnim_SuperWin();
          } else {
            this.playAnim_BigWin(-1);
          }
          var targetNum = this.getNextTargetNum_bigWin();
          if (this.watchLabel && this.watchLabel.node) {
            var _this$tween, _this$tween2;
            var t = (targetNum - this.inumObj.inum) / (rabbit.betSum * 20) * 4;
            (_this$tween = this.tween) == null || _this$tween.stop();
            (_this$tween2 = this.tween) == null || _this$tween2.destroySelf();
            this.tween = tween(this.inumObj).to(t, {
              inum: targetNum
            }).call(function () {
              if (_this4.watchLabel && _this4.watchLabel.node) {
                if (_this4.inumObj.inum >= _this4.score_bigwin) {
                  _this4.scheduleOnce(_this4.closeBigWin, 4);
                } else {
                  _this4.showBigWinByRate();
                }
              }
            }).start();
          }
        }

        //大奖BigWin动画
        ;

        _proto.playAnim_BigWin = function playAnim_BigWin(coin) {
          this.bigWinNode.children[0].active = true;
          this.bigWinNode.children[1].active = false;
          this.bigWinNode.children[2].active = false;
          this.bigWinNode.children[0].getComponent(Animation).play();
          if (coin != -1) {
            this.playBigWinCoin(coin);
          }
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin(coin) {
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
            rabbit.node.audio.stopbigwinmain();
          }
          if (this.watchLabel) {
            this.inumObj.inum = 0;
            this.watchLabel = null;
          }
          if (this.bigWinCoin_lab) {
            this.bigWinCoin_lab.string = "0";
          }
          rabbit.node.closeBigWin();
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              rabbit.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !rabbit.auto && this.setButtonState(true);
              if (rabbit.lotteryRes && rabbit.lotteryRes.winscore == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              rabbit.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              rabbit.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              rabbit.rollEnable = false;
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
            _this5 = this;
          (_this$tipTween = this.tipTween) == null || _this$tipTween.stop();
          (_this$tipTween2 = this.tipTween) == null || _this$tipTween2.destroySelf();
          this.tipNode.opacity = 0;
          this.tipNode.scale = new Vec3(1, 1, 1);
          this.tipNode.getChildByName("lab").getComponent(Label).string = word;
          this.tipTween = tween(this.tipNode).call(function () {
            _this5.tipNode.opacity = 255;
          }).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).delay(2).to(0.2, {
            opacity: 0
          }).start();
        }

        //大奖动画3
        ;

        _proto.playAnimWinWithStart = function playAnimWinWithStart(type, startCoin, endCoin, labNode) {
          var _this6 = this;
          var coin = endCoin - startCoin;
          var t = (type + 1) * 30; //变化次数
          var list = []; //变化数组
          for (var i = 0; i < t; i++) {
            var A1 = coin / 100;
            var An = A1 + 2 * i * (coin - t * A1) / (t * (t - 1));
            list.push(An);
          }
          var x = t - 1;
          var addcoin = 0;
          this.schedule(function () {
            addcoin += list[x];
            if (x == 0) {
              addcoin = coin;
            }
            if (labNode) {
              labNode.string = Num.exchangeToThousands(rabbit.exchangeRate, addcoin + startCoin);
            }
            x--;
          }, 0.05, t - 1);
          var x_ = t - 1;
          var addcoin2 = 0;
          this.schedule(function () {
            addcoin2 += list[x_];
            if (x_ == 0) {
              addcoin2 = coin;
              _this6.changeLabColor(1);
            }
            _this6.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, addcoin2 + startCoin);
            _this6.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.lotteryRes.userscore - rabbit.lotteryRes.winscore + addcoin2 + startCoin);
            x_--;
          }, 0.05, t - 1, 0.05 * (t + 3));
        };
        _proto.playAnimWinWithStart_aw = function playAnimWinWithStart_aw(type, startCoin, endCoin, labNode) {
          var _this7 = this;
          var coin = endCoin - startCoin;
          var t = (type + 1) * 30; //变化次数
          var list = []; //变化数组
          for (var i = 0; i < t; i++) {
            var A1 = coin / 100;
            var An = A1 + 2 * i * (coin - t * A1) / (t * (t - 1));
            list.push(An);
          }
          var x = t - 1;
          var addcoin = 0;
          this.schedule(function () {
            addcoin += list[x];
            if (x == 0) {
              addcoin = coin;
            }
            if (labNode) {
              labNode.string = Num.exchangeToThousands(rabbit.exchangeRate, addcoin + startCoin);
            }
            x--;
          }, 0.05, t - 1);
          var x_ = t - 1;
          var addcoin2 = 0;
          this.schedule(function () {
            addcoin2 += list[x_];
            if (x_ == 0) {
              addcoin2 = coin;
              _this7.changeLabColor(1);
            }
            _this7.winCoin_lab.string = Num.exchangeToThousands(rabbit.exchangeRate, addcoin2 + startCoin);
            _this7.lblUserCoin.string = Num.exchangeToThousands(rabbit.exchangeRate, rabbit.lotteryRes.userscore - rabbit.lotteryRes.viewarray.aw + addcoin2 + startCoin);
            x_--;
          }, 0.05, t - 1, 0.05 * (t + 3));
        };
        _createClass(rabbitSlotCtrl, [{
          key: "btnContent",
          get: function get() {
            if (!this._btnContent) {
              this._btnContent = find('btnContent', this.betting_panel);
            }
            return this._btnContent;
          }
        }]);
        return rabbitSlotCtrl;
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rabbitWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts', './pbCardNum.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, Tween, tween, Vec3, instantiate, Label, Component, Button, UITransform, rabbit, pbCardNum, Num;
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
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      Button = module.Button;
      UITransform = module.UITransform;
    }, function (module) {
      rabbit = module.rabbit;
    }, function (module) {
      pbCardNum = module.pbCardNum;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ac0abcjl4JMZJOiUz6IrKdO", "rabbitWheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ROLENUM = 20; //每一轮的角色数量
      var TIMEMIN = 1.2; //第一轮摇奖时间
      var FIRSTROLE = [
      //进入游戏时每列的角色
      [1, 6, 6, 7, 1], [8, 8, 8, 8, 8], [1, 6, 6, 7, 1]];
      var rabbitWheel = exports('rabbitWheel', (_dec = ccclass('rabbitWheel'), _dec2 = property({
        type: CCFloat,
        tooltip: "不会出现的数字id"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rabbitWheel, _Component);
        function rabbitWheel() {
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
          return _this;
        }
        var _proto = rabbitWheel.prototype;
        _proto.onLoad = function onLoad() {
          rabbit.wheelList[this.wheelId] = this;
          this.status = 0; //0停止 1转  
          this.lastResult = [0, 0, 0, 0, 0]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样  
          this.nextCb = null; //下一步需要执行的回调 
          this.rolePbList = []; //roles 
          this.roleIdList = []; //role ID 
          this.lastResultNum = [0, 0, 0, 0, 0];
        };
        _proto.start = function start() {};
        _proto.initWheel = function initWheel() {
          if (rabbit.isNewUser) {
            this.lastResult = FIRSTROLE[this.wheelId]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样  
          } else {
            this.lastResult = [0, 0, 0, 0, 0];
          }
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          for (var i in this.lastResult) {
            if (rabbit.isNewUser) {
              if (this.lastResult[i] == 8) {
                var list = [0, 2500, 100, 25, 2.5];
                this.initAddRole(this.lastResult[i], list[i]);
              } else {
                this.addRole(this.lastResult[i]);
              }
            } else {
              this.lastResult[i] = this.getRandomId();
              this.addRole(this.lastResult[i]);
            }
          }
          this.p = 0;
          if (this.wheelId == 1) {
            this.p = 170;
          }
          this.node.y = this.p;
          rabbit.rollIndex++;
          rabbit.node.closeShine();
          this.lastResult = this.roleIdList.slice(-5);
        };
        _proto.startRoll = function startRoll() {
          var _this2 = this;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          for (var i = 0; i < args.length; i++) {
            if (args[i] == 9) {
              this.addRole(this.getRandomId(), false, 0);
            } else if (args[i] == 8) {
              var list = rabbit.lotteryRes.goldList;
              this.addRole(args[i], list[this.wheelId + 3 * (3 - i)], 0);
            } else {
              this.addRole(args[i], false, 0);
            }
          }
          this.addRole(this.getRandomId(), false, 0);
          var cb = function cb() {
            _this2.setBlur(false);
            if (!rabbit.slotCtrl.isSpeed) {
              tween(_this2.node).to(0.3, {
                position: new Vec3(_this2.node.x, -_this2.node.h + 660 + _this2.p)
              }).to(0.1, {
                position: new Vec3(_this2.node.x, -_this2.node.h + 692 + _this2.p)
              }).call(function () {
                _this2.rollCallBack();
              }).start();
            } else {
              tween(_this2.node).to(0.1, {
                position: new Vec3(_this2.node.x, -_this2.node.h + 692 + _this2.p)
              }).call(function () {
                _this2.stopImmediately();
                _this2.rollCallBack();
              }).start();
            }
          };
          this.nextCb = cb;
        };
        _proto.startFreeRoll = function startFreeRoll() {
          var _this3 = this;
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          this.node.y = this.p; //滚轮启动位移距离 
          this.addRole(this.getRandomId());
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          for (var i = args.length - 1; i >= 0; i--) {
            if (args[i] == 9) {
              this.addRole(this.getRandomId());
            } else if (args[i] == 8) {
              var list = rabbit.lotteryRes.getBigWin.res_list[rabbit.rollIndex].goldList;
              this.addRole(args[i], list[this.wheelId + 3 * (3 - i)]);
            } else {
              this.addRole(args[i]);
            }
          }
          var mul = 6;
          for (var _i = 0; _i < ROLENUM * 2; _i++) {
            this.addRole(10);
          }
          for (var _i2 = 0; _i2 < ROLENUM * 4; _i2++) {
            this.addRole(this.getRandomId());
          }
          for (var _i3 = 0; _i3 < this.lastResult.length; _i3++) {
            this.lastResult[_i3] = this.lastResult[_i3] == 0 ? this.getRandomId() : this.lastResult[_i3];
            if (this.lastResult[_i3] != 0 && this.lastResultNum[_i3] != 0) {
              this.addRole(this.lastResult[_i3], this.lastResultNum[_i3] / parseFloat(Num.fixNum(rabbit.exchangeRate, rabbit.betSum)));
            } else {
              this.addRole(this.lastResult[_i3]);
            }
          }
          setTimeout(function () {
            Tween.stopAllByTarget(_this3.node);
            var timer = TIMEMIN * mul * 1.4 + _this3.wheelId * 0.2;
            tween(_this3.node).to(timer, {
              position: new Vec3(_this3.node.x, -_this3.node.h + 692 + _this3.p)
            }).call(function () {
              _this3.setBlur(false);
            }).to(0.3, {
              position: new Vec3(_this3.node.x, -_this3.node.h + 660 + _this3.p)
            }).to(0.1, {
              position: new Vec3(_this3.node.x, -_this3.node.h + 692 + _this3.p)
            }).call(function () {
              _this3.rollCallBack();
            }).start();
            var temp = tween(_this3.node).delay(0.1 + timer / 0.1).call(function () {
              rabbit.node.audio.playwheelspin();
            }).union().repeatForever();
            temp.start();
          }, 100);
        };
        _proto.FreeRoll = function FreeRoll() {
          var _this4 = this;
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          Tween.stopAllByTarget(this.node);
          this.node.removeAllChildren();
          this.node.y = this.p; //滚轮启动位移距离 
          this.addRole(10);
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          for (var i = args.length - 1; i >= 0; i--) {
            if (args[i] == 9) {
              this.addRole(10);
            } else if (args[i] == 8) {
              var list = rabbit.lotteryRes.getBigWin.res_list[rabbit.rollIndex].goldList;
              this.addRole(args[i], list[this.wheelId + 3 * (3 - i)]);
            } else {
              this.addRole(args[i]);
            }
          }
          for (var _i4 = 0; _i4 < ROLENUM; _i4++) {
            var m = [0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 50, 50, 50, 100, 100, 500];
            var a = Math.floor(Math.random() * m.length);
            var b = Math.floor(Math.random() * 4);
            if (b == 0) {
              this.addRole(8, a);
            } else {
              this.addRole(10);
            }
          }
          for (var _i5 = 0; _i5 < this.lastResult.length; _i5++) {
            this.lastResult[_i5] = this.lastResult[_i5] == 0 ? this.getRandomId() : this.lastResult[_i5];
            if (this.lastResult[_i5] != 0 && this.lastResultNum[_i5] != 0) {
              this.addRole(this.lastResult[_i5], this.lastResultNum[_i5] / parseFloat(Num.fixNum(rabbit.exchangeRate, rabbit.betSum)));
            } else {
              this.addRole(this.lastResult[_i5]);
              // this.addRole(10);
            }
          }

          setTimeout(function () {
            Tween.stopAllByTarget(_this4.node);
            var timer = TIMEMIN * 1.5 + _this4.wheelId * 0.2;
            tween(_this4.node).delay(0.2).to(timer, {
              position: new Vec3(_this4.node.x, -_this4.node.h + 692 + _this4.p)
            }).call(function () {
              _this4.setBlur(false);
            }).to(0.1, {
              position: new Vec3(_this4.node.x, -_this4.node.h + 692 + _this4.p)
            }).call(function () {
              _this4.rollCallBack();
            }).start();
            var temp = tween(_this4.node).delay(0.1 + timer / 0.1).call(function () {
              rabbit.node.audio.playwheelspin();
            }).union().repeatForever();
            temp.start();
          }, 100);
        };
        _proto.rollLoop = function rollLoop() {
          var _this5 = this;
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          this.node.y = this.p; //滚轮启动位移距离 
          for (var i = 0; i < this.lastResult.length; i++) {
            this.lastResult[i] = this.lastResult[i] == 0 ? this.getRandomId() : this.lastResult[i];
            if (this.lastResult[i] != 0 && this.lastResultNum[i] != 0) {
              this.addRole(this.lastResult[i], this.lastResultNum[i] / parseFloat(Num.fixNum(rabbit.exchangeRate, rabbit.betSum)));
            } else {
              this.addRole(this.lastResult[i]);
            }
          }
          for (var _i6 = 0; _i6 < ROLENUM - 6; _i6++) {
            this.addRole(this.getRandomId());
          }
          for (var _i7 = 0; _i7 < this.lastResult.length; _i7++) {
            this.lastResult[_i7] = this.lastResult[_i7] == 0 ? this.getRandomId() : this.lastResult[_i7];
            if (this.lastResult[_i7] != 0 && this.lastResultNum[_i7] != 0) {
              this.addRole(this.lastResult[_i7], this.lastResultNum[_i7] / parseFloat(Num.fixNum(rabbit.exchangeRate, rabbit.betSum)));
            } else {
              this.addRole(this.lastResult[_i7]);
            }
          }
          var loopCb = function loopCb() {
            _this5.node.y = _this5.p; //滚轮启动位移距离 
            Tween.stopAllByTarget(_this5.node);
            var timer = TIMEMIN + _this5.wheelId * 0.2;
            _this5.setBlur(true);
            if (rabbit.slotCtrl.isSpeed) {
              tween(_this5.node).call(function () {
                _this5.setBlur(true);
              }).to(timer / 3, {
                y: -_this5.node.h + 692 + _this5.p
              }) //, { easing: 'quadInOut' }) 
              .call(function () {
                _this5.nextCb();
              }).start();
            } else {
              tween(_this5.node).call(function () {
                _this5.setBlur(true);
              }).to(timer, {
                y: -_this5.node.h + 692 + _this5.p
              }) //, { easing: 'quadInOut' }) 
              .call(function () {
                _this5.nextCb();
              }).start();
            }
            var temp = tween(_this5.node).delay(0.1 + timer / 0.1).call(function () {
              rabbit.node.audio.playwheelspin();
            }).union().repeatForever();
            temp.start();
          };
          var timeNum = 0;
          if (!rabbit.slotCtrl.isSpeed) {
            if (this.wheelId == 1) {
              timeNum += 0.1;
            }
            if (this.wheelId == 2) {
              timeNum += 0.4;
            }
          }
          setTimeout(function () {
            _this5.node.y = _this5.p; //滚轮启动位移距离 
            var timer = TIMEMIN;
            if (rabbit.slotCtrl.isSpeed) {
              timer = timer / 2;
            } else {
              timer = TIMEMIN + _this5.wheelId * 0.2;
            }
            tween(_this5.node).delay(timeNum).to(timer, {
              position: new Vec3(_this5.node.x, -_this5.node.h + 672 + _this5.p)
            }).call(function () {
              loopCb();
            }).start();
            var temp = tween(_this5.node).delay(0.1 + timer / 0.1).call(function () {
              rabbit.node.audio.playwheelspin();
            }).union().repeatForever();
            temp.start();
          }, 100);
          this.nextCb = loopCb;
        };
        _proto.getRandomId = function getRandomId() {
          var randomId = 0;
          while (randomId == 0) {
            randomId = Math.floor(Math.random() * (rabbit.node.rolePb.length - 1) + 1);
            if (randomId > 8 || randomId == 7) {
              randomId = 0;
            }
            randomId = randomId == this.excludeId ? 0 : randomId;
          }
          return randomId;
        };
        _proto.addRole = function addRole(id, num, posId) {
          if (num === void 0) {
            num = 0;
          }
          if (posId === void 0) {
            posId = undefined;
          }
          if (id == 10) {
            this.addNullRole(10);
            return;
          }
          var pb = instantiate(rabbit.node.rolePb[id]);
          var pbNum = pb.getComponent(pbCardNum);
          if (num) {
            pbNum.val = num * rabbit.betSum / rabbit.exchangeRate;
            if (num <= 10) {
              pb.children[1].active = true;
              pbNum.showNodeNum = 1;
            } else if (num <= 100) {
              pb.children[2].active = true;
              pbNum.showNodeNum = 2;
            } else if (num <= 5000) {
              pb.children[3].active = true;
              pbNum.showNodeNum = 3;
            }
            pb.getChildByName("001").getComponent(Label).string = Num.exchangeToThousands2(rabbit.exchangeRate, num * rabbit.betSum);
            pb.getChildByName("002").getComponent(Label).string = Num.exchangeToThousands2(rabbit.exchangeRate, num * rabbit.betSum);
            pb.getChildByName("003").getComponent(Label).string = Num.exchangeToThousands2(rabbit.exchangeRate, num * rabbit.betSum);
          }
          if (posId !== undefined) {
            this.rolePbList.unshift(pb);
            this.roleIdList.unshift(id);
          } else {
            this.rolePbList.push(pb);
            this.roleIdList.push(id);
          }
          this.addClickEvent(pb, id);
          this.node.addChild(pb);
          if (posId !== undefined) {
            pb.setSiblingIndex(posId);
          }
        };
        _proto.initAddRole = function initAddRole(id, num, posId) {
          if (posId === void 0) {
            posId = undefined;
          }
          if (id == 10) {
            this.addNullRole(10);
            return;
          }
          var pb = instantiate(rabbit.node.rolePb[id]);
          var pbNum = pb.getComponent(pbCardNum);
          if (num) {
            pbNum.val = num / rabbit.exchangeRate;
            if (num <= 25) {
              pb.children[1].active = true;
              pbNum.showNodeNum = 1;
            } else if (num <= 100) {
              pb.children[2].active = true;
              pbNum.showNodeNum = 2;
            } else if (num <= 2500) {
              pb.children[3].active = true;
              pbNum.showNodeNum = 3;
            }
            pb.children[1].getComponent(Label).string = this.initFormatNum(num)(pb.children[2].getComponent(Label)).string = this.initFormatNum(num)(pb.children[3].getComponent(Label)).string = this.initFormatNum(num);
          }
          if (posId !== undefined) {
            this.rolePbList.unshift(pb);
            this.roleIdList.unshift(id);
          } else {
            this.rolePbList.push(pb);
            this.roleIdList.push(id);
          }
          this.addClickEvent(pb, id);
          this.node.addChild(pb);
          if (posId !== undefined) {
            pb.setSiblingIndex(posId);
          }
        };
        _proto.initFormatNum = function initFormatNum(num) {
          if (Number.isInteger(num)) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          } else {
            return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          }
        };
        _proto.addNullRole = function addNullRole(id) {
          var pb = instantiate(rabbit.node.roleNullPb);
          this.rolePbList.push(pb);
          this.roleIdList.push(id);
          this.node.addChild(pb);
        };
        _proto.rollCallBack = function rollCallBack() {
          rabbit.node.audio.playStopWheel();
          this.lastResult = this.roleIdList.slice(0, 5);
          for (var i = 0; i < this.lastResult.length; i++) {
            if (this.lastResult[i] == 8) {
              var pbNum = this.rolePbList[i].getComponent(pbCardNum);
              this.lastResultNum[i] = parseFloat(pbNum.val + "");
            } else {
              this.lastResultNum[i] = 0;
            }
          }
          this.status = 0;
          rabbit.node.stateCallBack();
        };
        _proto.stopImmediately = function stopImmediately() {
          var _this6 = this;
          Tween.stopAllByTarget(this.node);
          this.lastResult = this.roleIdList.slice(0, 5);
          for (var i = 0; i < this.lastResult.length; i++) {
            if (this.lastResult[i] == 8) {
              this.lastResultNum[i] = parseFloat(this.rolePbList[i].children[1].getComponent(Label).string);
            } else {
              this.lastResultNum[i] = 0;
            }
          }
          setTimeout(function () {
            _this6.setBlur(false);
            _this6.node.y = -_this6.node.h + 692 + _this6.p;
          }, 50);
          this.status = 0;
          rabbit.node.stateCallBack();
        };
        _proto.addClickEvent = function addClickEvent(node, idx) {
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点 
          clickEventHandler.component = "rabbitWheel"; // 这个是代码文件名 
          clickEventHandler.handler = "roleClick";
          clickEventHandler.customEventData = idx;
          var button = node.getComponent(Button);
          button.clickEvents.push(clickEventHandler);
        };
        _proto.roleClick = function roleClick(event, customEventData) {
          if (rabbit.detail) {
            rabbit.node.deskMask.active = false;
            rabbit.detail.node.parent = null;
            rabbit.detail = null;
            return;
          }
          var newNode = instantiate(rabbit.node.detailPb);
          var transForm = event.target.getComponent(UITransform);
          var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
          transForm = rabbit.node.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(newVec3);
          newNode.position = p;
          newNode.x -= 50;
          var isLeft = newNode.x < 10;
          newNode.getComponent("rabbitDetail").init(Number(customEventData), isLeft, event.target);
          rabbit.node.node.addChild(newNode);
          rabbit.node.deskMask.active = true;
        };
        _proto.setBlur = function setBlur(state) {
          for (var i in this.rolePbList) {
            if (this.roleIdList[i] != 8) {
              this.rolePbList[i].children[0].active = state; //虚图 
              this.rolePbList[i].children[1].active = !state; //实图 
            }
          }
        };

        return rabbitWheel;
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

System.register("chunks:///_virtual/rulePanel5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cRabbit.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, rabbit;
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
      rabbit = module.rabbit;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "031fb+zcF5NOqZgMHHLyleo", "rulePanel", undefined);
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
          rabbit.rulePanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          rabbit.node.audio.playclickopen();
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
          rabbit.node.audio.playclickclose();
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

System.register("chunks:///_virtual/SlotsRabbitGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "bce52PZFwhAmrordsGRe/Pf", "SlotsRabbitGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsRabbitGameMgr = exports('SlotsRabbitGameMgr', (_dec = ccclass('SlotsRabbitGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsRabbitGameMgr, _GameMgr);
        function SlotsRabbitGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_RABBIT;
          _this.mainName = "rabbitMain";
          _this._gameType = SubGameDef.SLOTS_RABBIT;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_rabbit',
            bundle: ModuleDef.SLOTS_RABBIT
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsRabbitGameMgr.prototype;
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
        _createClass(SlotsRabbitGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsRabbitGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsRabbitGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsRabbitGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsRabbitLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './SlotsRabbitGameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, SlotsRabbitGameMgr, SubGameMgr, SubGameDef;
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
      SlotsRabbitGameMgr = module.SlotsRabbitGameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c553du7MXlJd5PC0GNwD/sV", "SlotsRabbitLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsRabbitLobbyScene = exports('SlotsRabbitLobbyScene', (_dec = ccclass('SlotsRabbitLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsRabbitLobbyScene, _Component);
        function SlotsRabbitLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsRabbitLobbyScene.prototype;
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
          SlotsRabbitGameMgr.inst.initSoloMode();
          SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_RABBIT, true);
        };
        return SlotsRabbitLobbyScene;
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
  r('virtual:///prerequisite-imports/module_slots_rabbit', 'chunks:///_virtual/module_slots_rabbit'); 
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