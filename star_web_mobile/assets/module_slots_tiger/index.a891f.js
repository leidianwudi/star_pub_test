System.register("chunks:///_virtual/autoPanel11.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, tiger, Num;
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
      tiger = module.tiger;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b2aa99CEZFOYJKu/nnCbsst", "autoPanel", undefined);
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
          tiger.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.money);
          this.lblCurBet.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.betSum);
          this.winCoin_lab.string = tiger.slotCtrl.winCoin_lab.string;
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
            tiger.node.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          tiger.node.audio.playclickopen();
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
          tiger.node.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum12.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "54329Jvh6RH0pfhBychMZxd", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel12.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts', './Num.ts', './betNum12.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, tiger, Num, betNum;
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
      tiger = module.tiger;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      betNum = module.betNum;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "bfb8dQHSsdGapHPdvwKYxDS", "betPanel", undefined);
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
          tiger.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = tiger.BETNUM;
          this.betList = tiger.BET;
          this.line = tiger.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.money);
          this.lblCurBet.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.betSum);
          this.winCoin_lab.string = tiger.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, sumList[_i3]);
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
          tiger.betNum = this.tempi;
          tiger.bet = this.tempj;
          tiger.sumIdx = this.tempindex;
          tiger.betSum = this.sumList[tiger.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.betSum);
          tiger.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(tiger.sumIdx);
          this.val3 = tiger.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          tiger.node.audio.playclickopen();
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
          tiger.node.audio.playclickclose();
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

System.register("chunks:///_virtual/cTiger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange11.ts'], function (exports) {
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
      cclegacy._RF.push({}, "a903cFjcYRHG5UMIHVegVbr", "cTiger", undefined);
      var cTiger = /*#__PURE__*/function () {
        function cTiger() {
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
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          //     /**规则界面 */
          this.rulePanel = null;
          /**赔付表界面 */
          this.payPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
        }
        _createClass(cTiger, [{
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
              this._betSum = Number(localStorage.getItem(SubGameDef.SLOTS_TIGER + "betSum"));
            }
            return this._betSum;
          },
          set: function set(v) {
            if (this._betSum != v) {
              localStorage.setItem(SubGameDef.SLOTS_TIGER + "betSum", v + "");
            }
            this._betSum = v;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cTiger();
            }
            return this._instance;
          }
        }]);
        return cTiger;
      }();
      cTiger._instance = null;
      var tiger = exports('tiger', cTiger.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange11.ts", ['cc', './Num.ts'], function (exports) {
  var cclegacy, Num;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3a65e60mWlB07zaxb+RIZnP", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.code = 0;
          res.userscore = Num.parse(data.coins); //用户游戏后剩余金币
          res.winscore = Num.parse(data.payout); //用户当局赚取金币
          var result = data.results[0]; //结果
          res.getBigWin = {};
          //清一色
          if (result.allTheSame) {
            res.isAllWin = true;
            res.getBigWin.card = this.transformId(result.allTheSame.id);
          } else {
            res.isAllWin = false;
            res.getBigWin.card = this.transformId(result.chosenSymbolId); //达成清一色card
          }

          res.getBigWin.res_list = [];
          res.getBigWin.list = [];
          res.getBigWin.isStart = result.bigEvents;
          res.getBigWin.bFlag = result.bigEvents;
          res.getFreeTime = {};
          res.getFreeTime.bFlag = false;
          res.getFreeTime.nFreeTime = 0;
          var tempList = [8, 8, 8, 8, 8, 8, 8, 8, 8];
          for (var i = 0; i < result.rounds.length; i++) {
            var temp = result.rounds[i];
            var nHandCards = [];
            var nWinLines = [];
            var nWinLinesDetail = [];
            var nWinDetail = [];
            var nWinCards = [false, false, false, false, false, false, false, false, false];
            var curList = [].concat(tempList);
            var tempNewSymbols = temp.newSymbols ? temp.newSymbols : [];
            if (i == 0) {
              tempNewSymbols = temp.symbols;
            }
            for (var j = 0; j < tempNewSymbols.length; j++) {
              var cur = tempNewSymbols[j]; //
              var index = dataChange.posToIndex(cur.coordinate);
              curList[index] = this.transformId(cur.id);
            }
            tempList = curList;
            var tempIndexs = [];
            for (var _j = 0; _j < tempList.length; _j++) {
              if (tempList[_j] != 8) {
                tempIndexs.push(_j);
              }
            }
            res.getBigWin.list.push(tempIndexs);
            for (var _j2 = 0; _j2 < temp.symbols.length; _j2++) {
              var _cur = temp.symbols[_j2]; //
              var _index = dataChange.posToIndex(_cur.coordinate);
              nHandCards[_index] = this.transformId(_cur.id);
            }
            for (var _j3 = 0; _j3 < temp.paylines.length; _j3++) {
              var _cur2 = temp.paylines[_j3];
              nWinLines.push(Number(_cur2.id) - 1);
              nWinDetail.push(_cur2.payout);
              nWinLinesDetail[_j3] = [];
              for (var k = 0; k < _cur2.points.length; k++) {
                var point = _cur2.points[k];
                var tempIndex = dataChange.posToIndex(point);
                nWinLinesDetail[_j3].push(tempIndex);
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
          return res;
        };
        dataChange.posToIndex = function posToIndex(pos) {
          var index = (3 - pos.row) * 3 + (pos.reel - 1);
          return index;
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            tiger: 7,
            yuanbao: 6,
            jade_pendant: 5,
            blessing_bag: 4,
            red_envelope: 3,
            firework: 2,
            orange: 1
          };
          return (_idMap$curid = idMap[curid]) != null ? _idMap$curid : 8;
        };
        return dataChange;
      }());

      //old
      dataChange.BETNUM = [0.03, 0.1, 0.3, 0.9];
      //单注值
      dataChange.LINES = 5;
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

System.register("chunks:///_virtual/flyNum2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8d47dz0z/FF2a95aWXOfD2N", "flyNum", undefined);
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

System.register("chunks:///_virtual/lastmoneyPanel12.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, tiger, Num;
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
      tiger = module.tiger;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "21c16xbGfJAvr8TnW+7iVgM", "lastmoneyPanel", undefined);
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
          tiger.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          tiger.node.audio.playclickopen();
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
          tiger.node.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_tiger", ['./SlotsTigerGameMgr.ts', './SlotsTigerLobbyScene.ts', './autoPanel11.ts', './betNum12.ts', './betPanel12.ts', './cTiger.ts', './dataChange11.ts', './flyNum2.ts', './lastmoneyPanel12.ts', './payPanel6.ts', './rulePanel6.ts', './tigerAudio.ts', './tigerDetail.ts', './tigerMain.ts', './tigerSlotCtrl.ts', './tigerWheel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/payPanel6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, tiger;
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
      tiger = module.tiger;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "8951aX3n3tJm7m1vhbBIA9K", "payPanel", undefined);
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
          tiger.payPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          tiger.node.audio.playclickopen();
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
          tiger.node.audio.playclickclose();
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

System.register("chunks:///_virtual/rulePanel6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, tiger;
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
      tiger = module.tiger;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "37a89szJ/xMqo82KkKbbIBc", "rulePanel", undefined);
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
          tiger.rulePanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          tiger.node.audio.playclickopen();
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
          tiger.node.audio.playclickclose();
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

System.register("chunks:///_virtual/SlotsTigerGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "eee3exU/zxNHJLnVrypOxPH", "SlotsTigerGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsTigerGameMgr = exports('SlotsTigerGameMgr', (_dec = ccclass('SlotsTigerGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsTigerGameMgr, _GameMgr);
        function SlotsTigerGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_TIGER;
          _this.mainName = "tigerMain";
          _this._gameType = SubGameDef.SLOTS_TIGER;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_tiger',
            bundle: ModuleDef.SLOTS_TIGER
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsTigerGameMgr.prototype;
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
        _createClass(SlotsTigerGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsTigerGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsTigerGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsTigerGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsTigerLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './SlotsTigerGameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, SlotsTigerGameMgr, SubGameMgr, SubGameDef;
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
      SlotsTigerGameMgr = module.SlotsTigerGameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cda70FP6UBDN7d+mGBcusfj", "SlotsTigerLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsTigerLobbyScene = exports('SlotsTigerLobbyScene', (_dec = ccclass('SlotsTigerLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsTigerLobbyScene, _Component);
        function SlotsTigerLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsTigerLobbyScene.prototype;
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
          SlotsTigerGameMgr.inst.initSoloMode();
          SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_TIGER, true);
        };
        return SlotsTigerLobbyScene;
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

System.register("chunks:///_virtual/tigerAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "057955ny41DKr+lx2SaXMeq", "tigerAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var tigerAudio = exports('tigerAudio', (_dec = ccclass('tigerAudio'), _dec2 = property({
        type: AudioClip,
        tooltip: "滚轮旋转"
      }), _dec3 = property({
        type: AudioClip,
        tooltip: "滚轮停止"
      }), _dec4 = property({
        type: AudioClip,
        tooltip: "普通中奖"
      }), _dec5 = property({
        type: AudioClip,
        tooltip: "粒子触发"
      }), _dec6 = property({
        type: AudioClip,
        tooltip: "粒子结束"
      }), _dec7 = property({
        type: AudioClip,
        tooltip: "bigwin金币"
      }), _dec8 = property({
        type: AudioClip,
        tooltip: "bigwin烟花"
      }), _dec9 = property({
        type: AudioClip,
        tooltip: "bigwin结束"
      }), _dec10 = property({
        type: AudioClip,
        tooltip: "老虎动画win"
      }), _dec11 = property({
        type: AudioClip,
        tooltip: "老虎动画win2"
      }), _dec12 = property({
        type: AudioClip,
        tooltip: "老虎动画zoexit"
      }), _dec13 = property({
        type: AudioClip,
        tooltip: "老虎动画idle2"
      }), _dec14 = property({
        type: AudioClip,
        tooltip: "老虎动画idle4"
      }), _dec15 = property({
        type: AudioClip,
        tooltip: "点击旋转"
      }), _dec16 = property({
        type: AudioClip,
        tooltip: "背景缩小音效"
      }), _dec17 = property({
        type: AudioClip,
        tooltip: "红包音效"
      }), _dec18 = property({
        type: AudioClip,
        tooltip: "倍率出现音效"
      }), _dec19 = property({
        type: AudioClip,
        tooltip: "点击打开"
      }), _dec20 = property({
        type: AudioClip,
        tooltip: "点击关闭"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tigerAudio, _Component);
        function tigerAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "wheelspin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopWheel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinEf", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildstart", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildend", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwincoins", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwinfirework", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwinend", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarwin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarwin2", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarzoexit", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avataridle2", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avataridle4", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickstart", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgChangeSmallEf", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hongbaoEf", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulAppearEf", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickOpen", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickClose", _descriptor19, _assertThisInitialized(_this));
          _this.url = "sound/bgm_mg";
          _this.BWurl = "sound/bgm_bigwin_main";
          return _this;
        }
        var _proto = tigerAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.playBgm();
        };
        _proto.stopbigwinmain = function stopbigwinmain() {
          this.playBgm();
        };
        _proto.playBgm = function playBgm() {
          // AudioMgr.inst.stop();
          // AudioMgr.inst.playMusicLoop(this.url,EGameName.tiger)
          tgx.AudioMgr.inst.audio.playMusicLoop(this.url, ModuleDef.SLOTS_TIGER);
        };
        _proto.playawildstart = function playawildstart() {
          //转轴内wild粒子触发
          this.playEf(this.wildstart);
        };
        _proto.playwildend = function playwildend() {
          //转轴内wild粒子飞向左上角触发动画\
          this.playEf(this.wildend);
        };
        _proto.playclickstart = function playclickstart() {
          //点击旋转时候触发音效
          this.playEf(this.clickstart);
        };
        _proto.playwheelspin = function playwheelspin() {
          //滚轴旋转的时候，不间断快速播放
          this.playEf(this.wheelspin);
        };
        _proto.playStopWheel = function playStopWheel() {
          //转轴停止
          this.playEf(this.stopWheel);
        };
        _proto.playbigwinmain = function playbigwinmain() {//触发bigwin特效
          // AudioMgr.inst.playMusic(this.BWurl,EGameName.tiger);
        };
        _proto.playbigwincoins = function playbigwincoins() {
          //bigwin金币音效
          this.playEf(this.bigwincoins);
        };
        _proto.playbigwinfirework = function playbigwinfirework() {
          //bigwin烟花动画音效
          this.playEf(this.bigwinfirework);
        };
        _proto.playbigwinend = function playbigwinend() {
          //bigwin结束音效
          this.playEf(this.bigwinend);
        };
        _proto.playavatarwin = function playavatarwin() {
          //老虎动画win
          this.playEf(this.avatarwin);
        };
        _proto.playavatarwin2 = function playavatarwin2() {
          //老虎动画win2
          this.playEf(this.avatarwin2);
        };
        _proto.playavatarzoexit = function playavatarzoexit() {
          //老虎动画zo_exit
          this.playEf(this.avatarzoexit);
        };
        _proto.playavataridle2 = function playavataridle2() {
          //老虎动画idle2
          this.playEf(this.avataridle2);
        };
        _proto.playavataridle4 = function playavataridle4() {
          //老虎动画idle4
          this.playEf(this.avataridle4);
        };
        _proto.playBW = function playBW() {
          this.playEf(this.bigWinEf);
        };
        _proto.playBgChangeSmall = function playBgChangeSmall() {
          this.playEf(this.bgChangeSmallEf);
        };
        _proto.playHongbaoEf = function playHongbaoEf() {
          this.playEf(this.hongbaoEf);
        };
        _proto.playMulAppearEf = function playMulAppearEf() {
          this.playEf(this.mulAppearEf);
        };
        _proto.playEf = function playEf(clip) {
          // AudioMgr.inst.playEffect(clip);
          tgx.AudioMgr.inst.audio.playEffect(clip);
        };
        _proto.playclickopen = function playclickopen() {
          //点击打开
          this.playEf(this.clickOpen);
        };
        _proto.playclickclose = function playclickclose() {
          //点击关闭
          this.playEf(this.clickClose);
        };
        _proto.clearAll = function clearAll() {
          tgx.AudioMgr.inst.audio.clearAll();
        };
        return tigerAudio;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wheelspin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stopWheel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bigWinEf", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wildstart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wildend", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bigwincoins", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bigwinfirework", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bigwinend", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "avatarwin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "avatarwin2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "avatarzoexit", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "avataridle2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "avataridle4", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "clickstart", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "bgChangeSmallEf", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "hongbaoEf", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "mulAppearEf", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "clickOpen", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "clickClose", [_dec20], {
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

System.register("chunks:///_virtual/tigerDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, tiger;
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
      tiger = module.tiger;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "eb9b43pNSBLwozNaBKfA86n", "tigerDetail", undefined);
      var GAME_COMBINATIONS = [{
        3: 3
      },
      // hand cards no fix line 0
      {
        3: 5
      },
      // hand cards no fix line 1
      {
        3: 8
      },
      // hand cards no fix line 2
      {
        3: 10
      },
      // hand cards no fix line 3
      {
        3: 25
      },
      // hand cards no fix line 4
      {
        3: 100
      },
      // hand cards no fix line 5
      {
        3: 250
      },
      // hand cards no fix line 6
      {
        3: 0
      } // hand cards no fix line 7
      ];

      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var tigerDetail = exports('tigerDetail', (_dec = ccclass('tigerDetail'), _dec2 = property({
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
        _inheritsLoose(tigerDetail, _Component);
        function tigerDetail() {
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
        var _proto = tigerDetail.prototype;
        _proto.init = function init(idx, isLeft) {
          if (tiger.detail) {
            tiger.detail.node.active = false;
          }
          tiger.detail = this;
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
          tiger.node.deskMask.active = false;
          this.node.destroy();
          tiger.detail = null;
        };
        return tigerDetail;
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

System.register("chunks:///_virtual/tigerMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tigerSlotCtrl.ts', './cTiger.ts', './Num.ts', './flyNum2.ts', './NetGameServer.ts', './SubGameDef.ts', './dataChange11.ts', './UserMgr.ts', './RoomMgr.ts', './UIHelp.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, find, sp, instantiate, v3, tween, Label, Vec3, Animation, macro, UITransform, math, Component, tigerSlotCtrl, tiger, Num, flyNum, gameNet, SubGameDef, dataChange, UserMgr, RoomMgr, UIHelp, UIhelpParam, LanguageData;
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
      find = module.find;
      sp = module.sp;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
      Label = module.Label;
      Vec3 = module.Vec3;
      Animation = module.Animation;
      macro = module.macro;
      UITransform = module.UITransform;
      math = module.math;
      Component = module.Component;
    }, function (module) {
      tigerSlotCtrl = module.tigerSlotCtrl;
    }, function (module) {
      tiger = module.tiger;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      flyNum = module.flyNum;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;
      cclegacy._RF.push({}, "2eff6km7cVNVrgG5TUw3Pih", "tigerMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var tigerMain = exports('tigerMain', (_dec = ccclass('tigerMain'), _dec2 = property({
        type: Prefab,
        tooltip: "滚轮角色Pb"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "空角色Pb"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "角色详情Pb"
      }), _dec5 = property({
        type: Prefab,
        tooltip: "万能特效Pb"
      }), _dec6 = property({
        type: Node,
        tooltip: "万能结束光效"
      }), _dec7 = property({
        type: Node,
        tooltip: "卡牌光效"
      }), _dec8 = property({
        type: Node,
        tooltip: "中奖线特效"
      }), _dec9 = property({
        type: Node,
        tooltip: "中奖数字特效"
      }), _dec10 = property({
        type: Node,
        tooltip: "中奖光特效"
      }), _dec11 = property({
        type: Node,
        tooltip: "大奖光特效"
      }), _dec12 = property({
        type: Node,
        tooltip: "中奖牌特效"
      }), _dec13 = property({
        type: Node,
        tooltip: "全屏牌特效"
      }), _dec14 = property({
        type: Node,
        tooltip: "中奖图层遮罩"
      }), _dec15 = property({
        type: Node,
        tooltip: "游戏背景节点"
      }), _dec16 = property({
        type: Node,
        tooltip: "免费摇奖背景节点"
      }), _dec17 = property({
        type: Node,
        tooltip: "开始免费摇奖节点"
      }), _dec18 = property({
        type: Node,
        tooltip: "结束免费摇奖节点"
      }), _dec19 = property({
        type: Node,
        tooltip: "中奖背景2"
      }), _dec20 = property({
        type: Node,
        tooltip: "中奖背景3"
      }), _dec21 = property({
        type: Node,
        tooltip: "滚屏提示"
      }), _dec22 = property({
        type: Node,
        tooltip: "滚屏提示"
      }), _dec23 = property({
        type: Node,
        tooltip: "中奖提示"
      }), _dec24 = property({
        type: Node,
        tooltip: "跑马灯放大"
      }), _dec25 = property({
        type: Node,
        tooltip: "爆金币"
      }), _dec26 = property({
        type: Node,
        tooltip: "单线中奖金币"
      }), _dec27 = property({
        type: Node,
        tooltip: "老虎动画"
      }), _dec28 = property({
        type: Node,
        tooltip: "花瓣存放空间"
      }), _dec29 = property({
        type: Prefab,
        tooltip: "花瓣预制体"
      }), _dec30 = property({
        type: Node,
        tooltip: "红包特效"
      }), _dec31 = property({
        type: Node,
        tooltip: "x10特效"
      }), _dec32 = property({
        type: Node,
        tooltip: "普通x10特效"
      }), _dec33 = property({
        type: Node,
        tooltip: "detailMask"
      }), _dec34 = property({
        type: Node,
        tooltip: "slotCtrl"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tigerMain, _Component);
        function tigerMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rolePb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nullPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildEffectPb", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildEndEffect", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardEffect", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNum", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLight", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectBigWinLight", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectAllCard", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulListNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBgNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBeginNode", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeEndNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win2BG", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win3BG", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode2", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNode", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoboard", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinBoomEffect", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinLineLab", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tigerAnim", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leafNode", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leafPb", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "RedBagEffect", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X10Effect", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X10EffectNor", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deskMask", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor33, _assertThisInitialized(_this));
          /**延迟点击 */
          _this.delayClick = false;
          _this.audio = null;
          _this.slotCtrl = null;
          /**动画回调 */
          _this.anim_cb = null;
          _this.stateCallBackBn = false;
          _this.hideEffectAllCardTween = null;
          return _this;
        }
        var _proto = tigerMain.prototype;
        _proto.onLoad = function onLoad() {
          tiger.node = this;
          this.slotCtrl = this.slotCtrlNode.getComponent(tigerSlotCtrl);
          this.slotCtrl.initBetContent(tiger.BETNUM, tiger.BET, tiger.LINES);
          this.audio = this.node.getComponent('tigerAudio');
          tiger.auto = false;
          tiger.autoTimes = 0;
          tiger.status = 0;
          tiger.winLinePos = [0, 200, -170, 0, 0];
          tiger.bigWinNum = 0;
          tiger.rollIndex = 0;
          tiger.money = UserMgr.inst.coin;
          this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.money);
          this.delayClick = false;
          this.maskNode.active = false;
          find('bg/s_bkg_normal/respin_vfx_k_add', this.node).active = false;
          tiger.money = tiger.money;
        };
        _proto.start = function start() {
          this.initWheel();
          this.slotCtrl.setSpinAnim(0);
          this.slotCtrl.bindBet();
          this.anim_cb = null;
          //监听老虎动画播放
          var ani = this.tigerAnim.getComponent(sp.Skeleton);
          ani.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case "idle2":
                ani.setAnimation(0, "idle", true);
                break;
              case "idle3":
                ani.setAnimation(0, "idle", true);
                break;
              case "idle4":
                ani.setAnimation(0, "idle", true);
                break;
              case "idle5":
                ani.setAnimation(0, "idle", true);
                break;
              case "win":
                ani.setAnimation(0, "idle", true);
                break;
              case "win2":
                ani.setAnimation(0, "idle", true);
                break;
              case "wild_collect":
                ani.setAnimation(0, "idle", true);
                break;
              case "zo_start":
                ani.setAnimation(0, "zo_idle", true);
                break;
              case "zo_exit":
                ani.setAnimation(0, "idle", true);
                break;
              case "rs_win":
                ani.setAnimation(0, "rs_win_idle", true);
                break;
              case "rs_win_exit":
                ani.setAnimation(0, "idle", true);
                break;
            }
          });
          this.createLeafs();
          this.radomTigerAni();
          console.log("加载完成");
        };
        _proto.createLeafs = function createLeafs() {
          var _this2 = this;
          //定期生成花瓣
          this.schedule(function () {
            _this2.playLeafAnim();
          }, 0.3);
        }

        //创建花瓣
        ;

        _proto.playLeafAnim = function playLeafAnim() {
          var rx = -100 + Math.floor(Math.random() * 800 - 300);
          var ry = 770 + Math.floor(Math.random() * 100 - 50);
          var tx = 410;
          var ty = Math.floor(Math.random() * 600 - 300);
          var rScale = Math.floor(Math.random() * 3 + 5) / 12;
          var rRotation = Math.floor(Math.random() * 360);
          var newNode = instantiate(this.leafPb);
          newNode.position = v3(rx, ry);
          newNode.scale = v3(rScale, rScale);
          newNode.angle = rRotation;
          this.leafNode.addChild(newNode);
          var aimPos = v3(tx, ty);
          tween(newNode).to(4, {
            position: aimPos
          }).call(function () {
            newNode.destroy();
          }).start();
        };
        _proto.radomTigerAni = function radomTigerAni() {
          var _this3 = this;
          //定期切换静止动画
          this.schedule(function () {
            if (_this3.delayClick) {
              return;
            }
            if (tiger.lotteryRes && tiger.lotteryRes.winscore > 0) {
              //循环播放中奖动画时老虎默认待机
              return;
            }
            var r = Math.random();
            if (r < 0.5) {
              var _this3$tigerAnim$getC;
              (_this3$tigerAnim$getC = _this3.tigerAnim.getComponent(sp.Skeleton)) == null || _this3$tigerAnim$getC.setAnimation(0, "idle4", false);
              _this3.audio.playavataridle4();
            } else {
              var _this3$tigerAnim$getC2;
              (_this3$tigerAnim$getC2 = _this3.tigerAnim.getComponent(sp.Skeleton)) == null || _this3$tigerAnim$getC2.setAnimation(0, "idle5", false);
            }
          }, 5);
        };
        _proto.initWheel = function initWheel() {
          for (var i = 0; i < tiger.wheelList.length; i++) {
            tiger.wheelList[i].initWheel();
          }
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
            case "lastmoney":
              tiger.lastmoneyPanel.showPanel();
              break;
            // case "help":
            //     tiger.rulePanel.showPanel();
            //     break;
            // case "pay":
            //     tiger.payPanel.showPanel();
            //     break;
            case "help":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
              break;
            case "pay":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
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
                    tiger.node.close();
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
          var _this4 = this;
          if (this.delayClick) {
            return;
          }
          if (!tiger.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this4.delayClick = false;
            }, 1);
            if (tiger.status == 0) {
              tiger.status = 2;
              this.sendRoll();
            } else if (tiger.status == 1) {
              this.slotCtrl.setSpinAnim(3);
              this.stopImmediately();
            }
          }
        };
        _proto.add = function add() {
          if (tiger.auto) {
            return;
          }
          tiger.sumIdx += 1;
          tiger.sumIdx = this.slotCtrl.updateBet(tiger.sumIdx) == 0 ? tiger.sumIdx - 1 : tiger.sumIdx;
        };
        _proto.dec = function dec() {
          if (tiger.auto) {
            return;
          }
          tiger.sumIdx -= 1;
          tiger.sumIdx = this.slotCtrl.updateBet(tiger.sumIdx) == 0 ? tiger.sumIdx + 1 : tiger.sumIdx;
        };
        _proto.startAuto = function startAuto(n) {
          if (this.delayClick) {
            return;
          }
          if (tiger.status == 0) {
            tiger.auto = true;
            tiger.autoTimes = n;
            this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            if (n > 999) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
            }
            this.slotCtrl.Btn_stopAuto.active = tiger.auto;
            this.slotCtrl.Btn_start.active = !this.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1);
          }
        };
        _proto.stopAuto = function stopAuto() {
          tiger.auto = false;
          tiger.autoTimes = 0;
        };
        _proto.stateCallBack = function stateCallBack() {
          var _this5 = this;
          var st = 0;
          for (var i in tiger.wheelList) {
            if (tiger.wheelList[i].status) {
              st = 1;
              break;
            }
          }
          tiger.status = st;
          if (tiger.status == 0) {
            if (this.stateCallBackBn) {
              return;
            }
            this.stateCallBackBn = true;
            this.scheduleOnce(function () {
              _this5.stateCallBackBn = false;
            }, 1);
            if (!tiger.lotteryRes) {
              return;
            }
            //进入大奖模式
            if (tiger.lotteryRes.getBigWin.isStart) {
              this.showBigWin();
              return;
            }
            //结束当前轮盘
            if (tiger.lotteryRes.winscore > 0) {
              this.slotCtrl.setSpinAnim(3);
            } else {
              this.slotCtrl.setSpinAnim(2);
            }
            //延迟一点让立即结束落位
            this.scheduleOnce(function () {
              //万能牌特效
              for (var _i in tiger.wheelList) {
                var length = tiger.wheelList[_i].roleIdList.length;
                var _loop = function _loop() {
                  if (tiger.wheelList[_i].roleIdList[length - j] == 7) {
                    tiger.wheelList[_i].rolePbList[length - j].children[0].getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    var pb = instantiate(_this5.wildEffectPb);
                    var transForm = tiger.wheelList[_i].rolePbList[length - j].getComponent(UITransform);
                    var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
                    transForm = _this5.node.getComponent(UITransform);
                    var p = transForm.convertToNodeSpaceAR(newVec3);
                    pb.position = p;
                    _this5.node.addChild(pb);
                    tween(pb).call(function () {
                      pb.children[0].getComponent(Animation).play();
                      _this5.audio.playawildstart();
                    }).delay(0.1).call(function () {
                      var _this5$tigerAnim$getC;
                      pb.children[0].active = false;
                      (_this5$tigerAnim$getC = _this5.tigerAnim.getComponent(sp.Skeleton)) == null || _this5$tigerAnim$getC.setAnimation(0, "wild_collect", false);
                    }).to(0.3, {
                      position: new Vec3(-167, 542, 0)
                    }).call(function () {
                      var _this5$wildEndEffect$;
                      pb.active = false;
                      _this5.wildEndEffect.active = true;
                      (_this5$wildEndEffect$ = _this5.wildEndEffect.getComponent(Animation)) == null || _this5$wildEndEffect$.play();
                      _this5.audio.playwildend();
                      tween(_this5.wildEndEffect).delay(1.2).call(function () {
                        _this5.wildEndEffect.active = false;
                      }).start();
                    }).start();
                  }
                };
                for (var j = 2; j <= 4; j++) {
                  _loop();
                }
              }
            }, 0.1);
            var rIndex = tiger.lotteryRes.getBigWin.res_list.length;
            // let freeFlag = tiger.lotteryRes.viewarray.getFreeTime.bFlag;
            var playWinAnimTime = 0.1;
            for (var _i2 in tiger.wheelList) {
              var length = tiger.wheelList[_i2].roleIdList.length;
              for (var j = 2; j <= 4; j++) {
                if (tiger.wheelList[_i2].roleIdList[length - j] == 7) {
                  playWinAnimTime = 0.5;
                }
              }
            }
            this.scheduleOnce(function () {
              if (rIndex == tiger.bigWinNum || rIndex == 1) {
                if (tiger.lotteryRes.isAllWin) {
                  _this5.playNormalAllWin();
                } else {
                  _this5.playWinAnim();
                }
              }
            }, playWinAnimTime);
          }
        };
        _proto.playWinAnim = function playWinAnim() {
          var _this6 = this;
          //动画结束后自动roll 
          var hasWinBool = 0;
          var lines = tiger.lotteryRes.nWinLinesDetail;
          var rIndex = tiger.lotteryRes.getBigWin.res_list.length;
          var list = [].concat(lines);
          this.allDetail(list);
          hasWinBool = list.length - 1;
          if (tiger.lotteryRes.winscore > 0) {
            var _this$coinBoomEffect$, _this$infoboard$getCo;
            //判断播放金币掉落动画
            if (tiger.lotteryRes.winscore >= tiger.betSum * 20) {
              if (tiger.lotteryRes.getBigWin.res_list.length > 1) {
                if (tiger.bigWinNum == tiger.lotteryRes.getBigWin.res_list.length - 1) {
                  this.slotCtrl.playBigWinCoin(tiger.lotteryRes.winscore);
                }
              } else {
                this.slotCtrl.playBigWinCoin(tiger.lotteryRes.winscore);
              }
              this.audio.playbigwinmain();
            } else if (tiger.lotteryRes.winscore < tiger.betSum * 5) {
              this.slotCtrl.playAnimWin(-1, tiger.lotteryRes.winscore);
              this.scheduleOnce(this.rollComplete, 1.5);
            } else {
              this.slotCtrl.playAnimWin(0, tiger.lotteryRes.winscore);
              this.scheduleOnce(this.rollComplete, 1.5);
            }
            this.tipNode.active = false;
            this.tipNode2.active = false;
            this.winNode.active = true;
            this.winNode.children[1].active = true;
            this.winNode.children[2].active = false;
            this.infoboard.getChildByName("ib_vfx_e").active = true;
            (_this$coinBoomEffect$ = this.coinBoomEffect.getComponent(Animation)) == null || _this$coinBoomEffect$.play();
            (_this$infoboard$getCo = this.infoboard.getComponent(Animation)) == null || _this$infoboard$getCo.play();
            this.win2BG.active = tiger.lotteryRes.winscore >= tiger.betSum * 20 && tiger.lotteryRes.winscore < tiger.betSum * 50;
            this.win3BG.active = tiger.lotteryRes.winscore >= tiger.betSum * 50;
            // if (!this.bIsFreeGame) {
            /** */
            if (tiger.lotteryRes.winscore < tiger.betSum * 20) {
              var _this$tigerAnim$getCo;
              (_this$tigerAnim$getCo = this.tigerAnim.getComponent(sp.Skeleton)) == null || _this$tigerAnim$getCo.setAnimation(0, "win", false);
              this.audio.playavatarwin();
            } else {
              var _this$tigerAnim$getCo2;
              (_this$tigerAnim$getCo2 = this.tigerAnim.getComponent(sp.Skeleton)) == null || _this$tigerAnim$getCo2.setAnimation(0, "win2", false);
              this.audio.playavatarwin2();
            }
            // }
          } else {
            this.rollComplete();
          }
          var animIndex = 0;
          this.anim_cb = function () {
            if (rIndex == tiger.bigWinNum || rIndex == 1) {
              _this6.closeShine();
              for (var i = 0; i < 9; i++) {
                _this6.closeAnim(i % 3, Math.floor(i / 3));
              }
              if (!!!list[animIndex] || list[animIndex].length == 0) {
                return;
              }
              _this6.maskNode.active = true;
              for (var j in list[animIndex]) {
                _this6.showAnim(list[animIndex][j] % 3, Math.floor(list[animIndex][j] / 3));
              }
              if (animIndex == 0) {
                _this6.audio.playBW();
                for (var _i3 = 0; _i3 < tiger.lotteryRes.nWinLines.length; _i3++) {
                  _this6.effectLine.children[tiger.lotteryRes.nWinLines[_i3]].active = true;
                  _this6.effectNum.children[tiger.lotteryRes.nWinLines[_i3]].active = true;
                }
              } else {
                //中奖数字和位置
                _this6.coinLineLab.active = _this6.effectLight.opacity == 255;
                _this6.coinLineLab.y = tiger.winLinePos[tiger.lotteryRes.nWinLines[animIndex - 1]];
                _this6.coinLineLab.children[0].getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, tiger.lotteryRes.nWinDetail[animIndex - 1]);
                _this6.effectLine.children[tiger.lotteryRes.nWinLines[animIndex - 1]].active = true;
                _this6.effectNum.children[tiger.lotteryRes.nWinLines[animIndex - 1]].active = true;
              }
              animIndex = animIndex + 1 > list.length - 1 ? 0 : animIndex + 1;
            }
          };
          if (tiger.auto) {
            this.schedule(this.anim_cb, 2, 1, 0.01);
          } else {
            this.schedule(this.anim_cb, 2, macro.REPEAT_FOREVER, 0.01);
          }
          var t = 3;
          if (tiger.auto) {
            if (tiger.lotteryRes.winscore > 0) {
              t = 1;
            } else {
              t = 0.5;
            }
          } else {
            if (tiger.lotteryRes.winscore > 0) {
              t = 3;
            } else {
              t = 1;
            }
          }
          if (!tiger.auto) {
            this.slotCtrl.Btn_stopAuto.active = false;
            this.slotCtrl.Btn_start.active = true;
          }
          this.scheduleOnce(function () {
            if (rIndex == tiger.bigWinNum) {
              if (tiger.auto && tiger.autoTimes > 0) {
                _this6.scheduleOnce(_this6.sendRoll, 1);
              }
            }
          }, hasWinBool > 0 ? hasWinBool * t : t);
        };
        _proto.rollComplete = function rollComplete() {
          var _this7 = this;
          this.slotCtrl.setSpinAnim(0);
          this.scheduleOnce(function () {
            if (tiger.auto && tiger.autoTimes > 0) {
              _this7.scheduleOnce(_this7.sendRoll, 1.5);
            }
          }, 1);
        };
        _proto.allDetail = function allDetail(list) {
          var arr = [];
          for (var i = 0; i < list.length; i++) {
            arr = [].concat(arr, list[i]);
          }
          arr = Array.from(new Set(arr));
          list.unshift(arr);
        }

        //0-5 0-2
        ;

        _proto.showAnim = function showAnim(cols, index) {
          var _itemNode$children$0$, _itemNode$children$0$2;
          var length = tiger.wheelList[cols].roleIdList.length;
          for (var i in tiger.wheelList[cols].rolePbList[length - 2 - index].children) {
            tiger.wheelList[cols].rolePbList[length - 2 - index].children[i].active = false;
          }
          // this.wheelList[cols].rolePbList[length - 2 - index].getComponent("TempAnimation").playAnim();

          //添加结束
          var nodeList = this.effectLight.children;
          var itemNode = nodeList[cols * 3 + index];
          itemNode.active = true;
          (_itemNode$children$0$ = itemNode.children[0].getComponent(Animation)) == null || _itemNode$children$0$.stop();
          (_itemNode$children$0$2 = itemNode.children[0].getComponent(Animation)) == null || _itemNode$children$0$2.play();
          itemNode.children[0].scale = new Vec3(0.74, 0.74, 0.74);
          tween(itemNode.children[0]).to(0.2, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).start();
          var nodeList2 = this.effectCard.children;
          var _loop2 = function _loop2(_i4) {
            var item = nodeList2[cols * 3 + index].children[_i4];
            if (_i4 == tiger.wheelList[cols].roleIdList[length - 2 - index] - 1) {
              item.active = true;
              var ani = item.getComponent(sp.Skeleton);
              ani.setCompleteListener(function (event) {
                switch (event.animation.name) {
                  case "win":
                    if (_i4 == 6) {
                      ani.setAnimation(0, "idle", true);
                    } else {
                      ani.setAnimation(0, "win_idle", true);
                    }
                    break;
                }
              });
              ani.setAnimation(0, "win", false);
            } else {
              item.active = false;
            }
          };
          for (var _i4 = 0; _i4 < nodeList2[cols * 3 + index].children.length; _i4++) {
            _loop2(_i4);
          }
          // nodeList2[cols * 3 + index].active = true;
        };

        _proto.closeAnim = function closeAnim(cols, index) {
          var length = tiger.wheelList[cols].roleIdList.length;
          for (var i in tiger.wheelList[cols].rolePbList[length - 2 - index].children) {
            tiger.wheelList[cols].rolePbList[length - 2 - index].children[i].active = true;
          }
          // this.wheelList[cols].rolePbList[length - 2 - index].getComponent("TempAnimation").stopAnim();

          //添加结束
          var nodeList = this.effectLight.children;
          nodeList[cols * 3 + index].active = false;
          var nodeList2 = this.effectCard.children;
          for (var _i5 = 0; _i5 < nodeList2[cols * 3 + index].children.length; _i5++) {
            nodeList2[cols * 3 + index].children[_i5].active = false;
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
        }

        //根据服务端返回结果滚动
        ;

        _proto.roll = function roll(list) {
          if (!tiger.auto) {
            this.slotCtrl.rollEnable = true;
          }
          tiger.status = 1;
          var line = [];
          for (var i = 0; i < 3; i++) {
            line[i] = [];
          }
          for (var _i6 in list) {
            var index = Number(_i6);
            line[index % 3][2 - Math.floor(index / 3)] = list[_i6];
          }
          if (tiger.lotteryRes.getBigWin.bFlag) {
            this.startBigWin();
            var bigWinResult = tiger.lotteryRes.getBigWin;
            if (!bigWinResult.isStart) {
              for (var _i7 in tiger.wheelList) {
                var _tiger$wheelList$_i;
                (_tiger$wheelList$_i = tiger.wheelList[_i7]).startRoll.apply(_tiger$wheelList$_i, line[_i7]);
              }
            }
          } else {
            //没有触发大奖
            for (var _i8 in tiger.wheelList) {
              var _tiger$wheelList$_i2;
              (_tiger$wheelList$_i2 = tiger.wheelList[_i8]).startRoll.apply(_tiger$wheelList$_i2, line[_i8]);
            }
          }
        };
        _proto.showBigWin = function showBigWin() {
          var _this8 = this;
          this.slotCtrl.setSpinAnim(3);
          var bigWinResult = tiger.lotteryRes.getBigWin;
          var list = bigWinResult.list[tiger.bigWinNum];
          for (var j in list) {
            var cols = list[j] % 3;
            var index = Math.floor(list[j] / 3);
            var effectCardList = this.effectCard.children;
            var length = tiger.wheelList[cols].roleIdList.length;
            if (tiger.wheelList[cols].roleIdList[length - 2 - index] == bigWinResult.card) {
              for (var i = 0; i < effectCardList[cols * 3 + index].children.length; i++) {
                if (i == bigWinResult.card - 1) {
                  effectCardList[cols * 3 + index].children[i].active = true;
                  if (tiger.bigWinNum >= bigWinResult.list.length - 1) {
                    var _effectCardList$child, _effectCardList$child2;
                    (_effectCardList$child = effectCardList[cols * 3 + index].children[i].getComponent(sp.Skeleton)) == null || _effectCardList$child.setAnimation(0, "win", false);
                    (_effectCardList$child2 = effectCardList[cols * 3 + index].children[i].getComponent(sp.Skeleton)) == null || _effectCardList$child2.addAnimation(0, "win_idle", true);
                  } else {
                    var _effectCardList$child3, _effectCardList$child4;
                    (_effectCardList$child3 = effectCardList[cols * 3 + index].children[i].getComponent(sp.Skeleton)) == null || _effectCardList$child3.clearTracks();
                    (_effectCardList$child4 = effectCardList[cols * 3 + index].children[i].getComponent(sp.Skeleton)) == null || _effectCardList$child4.setToSetupPose();
                  }
                } else {
                  effectCardList[cols * 3 + index].children[i].active = false;
                }
              }
            } else if (tiger.wheelList[cols].roleIdList[length - 2 - index] == 7) {
              for (var _i9 = 0; _i9 < effectCardList[cols * 3 + index].children.length; _i9++) {
                if (_i9 == 6) {
                  effectCardList[cols * 3 + index].children[_i9].active = true;
                  if (tiger.bigWinNum >= bigWinResult.list.length - 1) {
                    var _effectCardList$child5, _effectCardList$child6;
                    (_effectCardList$child5 = effectCardList[cols * 3 + index].children[_i9].getComponent(sp.Skeleton)) == null || _effectCardList$child5.setAnimation(0, "win", false);
                    (_effectCardList$child6 = effectCardList[cols * 3 + index].children[_i9].getComponent(sp.Skeleton)) == null || _effectCardList$child6.addAnimation(0, "idle", true);
                  } else {
                    var _effectCardList$child7, _effectCardList$child8;
                    (_effectCardList$child7 = effectCardList[cols * 3 + index].children[_i9].getComponent(sp.Skeleton)) == null || _effectCardList$child7.clearTracks();
                    (_effectCardList$child8 = effectCardList[cols * 3 + index].children[_i9].getComponent(sp.Skeleton)) == null || _effectCardList$child8.setToSetupPose();
                  }
                } else {
                  effectCardList[cols * 3 + index].children[_i9].active = false;
                }
              }
            }
          }
          //中奖显示
          for (var _i10 = 0; _i10 < bigWinResult.res_list[tiger.bigWinNum].nWinLines.length; _i10++) {
            this.effectLine.children[bigWinResult.res_list[tiger.bigWinNum].nWinLines[_i10]].active = true;
            this.effectNum.children[bigWinResult.res_list[tiger.bigWinNum].nWinLines[_i10]].active = true;
          }
          var allLine = [];
          for (var _i11 = 0; _i11 < bigWinResult.res_list[tiger.bigWinNum].nWinCards.length; _i11++) {
            if (bigWinResult.res_list[tiger.bigWinNum].nWinCards[_i11]) {
              allLine.push(_i11);
            }
          }
          // log(allLine);
          for (var _i12 in allLine) {
            var _cols = allLine[_i12] % 3;
            var _index = Math.floor(allLine[_i12] / 3);
            //添加结束
            var effectLightList = this.effectBigWinLight.children;
            effectLightList[_cols * 3 + _index].active = true;
          }
          this.audio.playBW();
          tiger.bigWinNum++;
          if (tiger.bigWinNum <= bigWinResult.res_list.length - 1) {
            var bigWinData = bigWinResult.res_list[tiger.bigWinNum];
            var line = [];
            for (var _i13 = 0; _i13 < 3; _i13++) {
              line[_i13] = [];
            }
            for (var _i14 in bigWinData.nHandCards) {
              var _index2 = Number(_i14);
              line[_index2 % 3][2 - Math.floor(_index2 / 3)] = bigWinData.nHandCards[_index2];
            }
            //免费模式是开场随意转
            for (var _i15 in tiger.wheelList) {
              tiger.wheelList[_i15].FreeRoll_again(line[_i15]);
            }
            return;
          }
          var rIndex = tiger.lotteryRes.getBigWin.res_list.length;
          this.maskNode.active = true;

          //中奖动画
          this.scheduleOnce(function () {
            if (tiger.lotteryRes.winscore > 0) {
              var _this8$tigerAnim$getC;
              (_this8$tigerAnim$getC = _this8.tigerAnim.getComponent(sp.Skeleton)) == null || _this8$tigerAnim$getC.setAnimation(0, "rs_win", false);
              //判断播放金币掉落动画
              if (tiger.lotteryRes.winscore >= tiger.betSum * 20) {
                if (tiger.lotteryRes.isAllWin) {
                  _this8.scheduleOnce(_this8.playAllWin, 0.5);
                } else {
                  _this8.slotCtrl.playBigWinCoin(tiger.lotteryRes.winscore);
                }
              } else if (tiger.lotteryRes.winscore < tiger.betSum * 5) {
                _this8.slotCtrl.playAnimWin(-1, tiger.lotteryRes.winscore);
                _this8.showWinNode();
              } else {
                _this8.slotCtrl.playAnimWin(0, tiger.lotteryRes.winscore);
                _this8.showWinNode();
              }
            } else {
              var _this8$tigerAnim$getC2;
              (_this8$tigerAnim$getC2 = _this8.tigerAnim.getComponent(sp.Skeleton)) == null || _this8$tigerAnim$getC2.setAnimation(0, "zo_exit", false);
            }
            var lines = tiger.lotteryRes.nWinLinesDetail;
            var list = [allLine].concat(lines);
            var animIndex = 0;
            _this8.anim_cb = function () {
              if (rIndex == tiger.bigWinNum) {
                _this8.closeShine();
                for (var _i16 = 0; _i16 < 9; _i16++) {
                  var _cols2 = _i16 % 3;
                  var _index3 = Math.floor(_i16 / 3);

                  //隐藏9个卡槽的光效
                  var nodeList = _this8.effectLight.children;
                  nodeList[_cols2 * 3 + _index3].active = false;

                  //隐藏9个卡槽内部动画
                  var nodeList2 = _this8.effectCard.children;
                  for (var _j = 0; _j < nodeList2[_cols2 * 3 + _index3].children.length; _j++) {
                    nodeList2[_cols2 * 3 + _index3].children[_j].active = false;
                  }
                }
                if (!!!list[animIndex] || list[animIndex].length == 0) {
                  return;
                }
                _this8.maskNode.active = true;
                for (var _j2 in list[animIndex]) {
                  _this8.showAnim(list[animIndex][_j2] % 3, Math.floor(list[animIndex][_j2] / 3));
                }
                if (animIndex == 0) {
                  for (var _i17 = 0; _i17 < tiger.lotteryRes.nWinLines.length; _i17++) {
                    _this8.effectLine.children[tiger.lotteryRes.nWinLines[_i17]].active = true;
                    _this8.effectNum.children[tiger.lotteryRes.nWinLines[_i17]].active = true;
                  }
                } else {
                  //中奖数字和位置
                  _this8.coinLineLab.active = _this8.effectLight.opacity == 255;
                  _this8.coinLineLab.y = tiger.winLinePos[tiger.lotteryRes.nWinLines[animIndex - 1]];
                  _this8.coinLineLab.children[0].getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, tiger.lotteryRes.nWinDetail[animIndex - 1]);
                  _this8.effectLine.children[tiger.lotteryRes.nWinLines[animIndex - 1]].active = true;
                  _this8.effectNum.children[tiger.lotteryRes.nWinLines[animIndex - 1]].active = true;
                }
                animIndex = animIndex + 1 > list.length - 1 ? 0 : animIndex + 1;
              }
            };
            if (tiger.auto) {
              _this8.schedule(_this8.anim_cb, 2, 1, 0.01);
            } else {
              _this8.schedule(_this8.anim_cb, 2, macro.REPEAT_FOREVER, 0.01);
            }
            //还原界面
            if (tiger.lotteryRes.winscore <= tiger.betSum * 20) {
              _this8.scheduleOnce(_this8.bgBack, 2);
            }
          }, 0.1);
        };
        _proto.playNormalAllWin = function playNormalAllWin() {
          var _this$coinBoomEffect$2,
            _this$infoboard$getCo2,
            _this$X10EffectNor$ge,
            _this9 = this;
          var bigWinResult = tiger.lotteryRes.getBigWin;
          this.tipNode.active = false;
          this.tipNode2.active = false;
          this.winNode.active = true;
          this.infoboard.getChildByName("ib_vfx_e").active = true;
          (_this$coinBoomEffect$2 = this.coinBoomEffect.getComponent(Animation)) == null || _this$coinBoomEffect$2.play();
          (_this$infoboard$getCo2 = this.infoboard.getComponent(Animation)) == null || _this$infoboard$getCo2.play();
          this.winNode.children[0].getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, Number(tiger.lotteryRes.winscore) / 10);
          this.winNode.children[1].active = true;
          this.winNode.children[2].active = false;
          find('bg/Game_main', this.node).opacity = 0;
          this.effectLight.opacity = 0;
          this.effectLine.opacity = 0;
          this.effectBigWinLight.opacity = 0;
          this.effectCard.opacity = 0;
          this.effectNum.opacity = 0;
          var iconNode = this.effectAllCard.children[1];
          this.effectAllCard.active = true;
          this.effectAllCard.y = 0;
          this.effectAllCard.scale = new Vec3(1, 1);
          for (var i = 0; i < iconNode.children.length; i++) {
            iconNode.children[i].active = i == bigWinResult.card - 1;
          }
          iconNode.scale = new Vec3(1.3, 1.3);
          tween(iconNode).to(0.3, {
            scale: new Vec3(1, 1)
          }).start();
          this.X10EffectNor.active = true;
          this.X10EffectNor.position = this.cardEffect.position;
          var transForm = this.winNode.getComponent(UITransform);
          var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
          transForm = this.node.getComponent(UITransform);
          var endPos = transForm.convertToNodeSpaceAR(newVec3);
          (_this$X10EffectNor$ge = this.X10EffectNor.getComponent(Animation)) == null || _this$X10EffectNor$ge.play();
          var fly = this.X10EffectNor.getComponent(flyNum);
          fly.p0 = this.X10EffectNor.position;
          fly.p1 = new Vec3(fly.p0.x / 3 - 10 + 20 * math.random(), fly.p0.y);
          fly.p2 = new Vec3(endPos.x, fly.p0.y + (endPos.y - fly.p0.y) * 4 / 5);
          fly.p3 = new Vec3(endPos.x, endPos.y);
          fly.t = 0;
          tween(fly).delay(0.5).delay(0.3).to(0.6, {
            t: 1
          }).call(function () {
            _this9.X10EffectNor.active = false;
          }).delay(0.5).call(function () {
            _this9.slotCtrl.playBigWinCoin(tiger.lotteryRes.winscore);
          }).start();
        };
        _proto.playAllWin = function playAllWin() {
          var _this$coinBoomEffect$3,
            _this$infoboard$getCo3,
            _this10 = this;
          var bigWinResult = tiger.lotteryRes.getBigWin;
          this.tipNode.active = false;
          this.tipNode2.active = false;
          this.winNode.active = true;
          this.infoboard.getChildByName("ib_vfx_e").active = true;
          (_this$coinBoomEffect$3 = this.coinBoomEffect.getComponent(Animation)) == null || _this$coinBoomEffect$3.play();
          (_this$infoboard$getCo3 = this.infoboard.getComponent(Animation)) == null || _this$infoboard$getCo3.play();
          this.winNode.children[0].getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, Number(tiger.lotteryRes.winscore) / 10);
          this.winNode.children[1].active = true;
          this.winNode.children[2].active = false;
          find('bg/Game_main', this.node).opacity = 0;
          this.effectLight.opacity = 0;
          this.effectLine.opacity = 0;
          this.effectBigWinLight.opacity = 0;
          this.effectCard.opacity = 0;
          this.effectNum.opacity = 0;
          var iconNode = this.effectAllCard.children[1];
          this.effectAllCard.active = true;
          this.effectAllCard.y = -25;
          this.effectAllCard.scale = new Vec3(0.9, 0.9);
          for (var i = 0; i < iconNode.children.length; i++) {
            iconNode.children[i].active = i == bigWinResult.card - 1;
          }
          iconNode.scale = new Vec3(1.3, 1.3);
          tween(iconNode).to(0.3, {
            scale: new Vec3(1, 1)
          }).start();
          this.X10Effect.active = true;
          tween(this.X10Effect).to(0.2, {
            position: new Vec3(0, 410, 0)
          }).to(0.05, {
            position: new Vec3(16, 410, 0)
          }).to(0.05, {
            position: new Vec3(-4, 410, 0)
          }).to(0.05, {
            position: new Vec3(16, 410, 0)
          }).to(0.05, {
            position: new Vec3(-4, 410, 0)
          }).to(0.05, {
            position: new Vec3(16, 410, 0)
          }).to(0.05, {
            position: new Vec3(-4, 410, 0)
          }).to(0.1, {
            position: new Vec3(6, 450, 0),
            scale: new Vec3(2.5, 2.5, 2.5)
          }).to(0.1, {
            scale: new Vec3(2, 2, 2)
          }).delay(1).call(function () {
            _this10.X10Effect.parent = _this10.node;
          }).to(0.5, {
            position: new Vec3(0, -300, 0),
            scale: new Vec3(3, 3, 3)
          }).call(function () {
            _this10.X10Effect.active = false;
            _this10.X10Effect.parent = find("bg/s_bkg_normal/X10_area", _this10.node);
            _this10.X10Effect.y = 410;
            _this10.X10Effect.scale = new Vec3(1.5, 1.5, 1.5);
            _this10.slotCtrl.playBigWinCoin(tiger.lotteryRes.winscore);
          }).start();
        };
        _proto.showWinNode = function showWinNode() {
          var _this$coinBoomEffect$4, _this$infoboard$getCo4;
          this.tipNode.active = false;
          this.tipNode2.active = false;
          this.winNode.active = true;
          this.winNode.children[1].active = true;
          this.winNode.children[2].active = false;
          this.infoboard.getChildByName("ib_vfx_e").active = true;
          (_this$coinBoomEffect$4 = this.coinBoomEffect.getComponent(Animation)) == null || _this$coinBoomEffect$4.play();
          (_this$infoboard$getCo4 = this.infoboard.getComponent(Animation)) == null || _this$infoboard$getCo4.play();
          this.win2BG.active = tiger.lotteryRes.winscore > tiger.betSum * 3 && tiger.lotteryRes.winscore < tiger.betSum * 5;
          this.win3BG.active = tiger.lotteryRes.winscore >= tiger.betSum * 5;
        };
        _proto.bgChange = function bgChange() {
          var _this11 = this;
          var bigWinResult = tiger.lotteryRes.getBigWin;
          var bg = find("bg", this.node);
          tween(bg).delay(0.3).call(function () {
            var _this11$RedBagEffect$;
            _this11.RedBagEffect.active = true;
            _this11.RedBagEffect.opacity = 255;
            _this11.audio.playHongbaoEf();
            var pb = find("pb", _this11.RedBagEffect);
            for (var i = 0; i < pb.children.length; i++) {
              pb.children[i].active = i == bigWinResult.card - 1;
            }
            (_this11$RedBagEffect$ = _this11.RedBagEffect.getComponent(Animation)) == null || _this11$RedBagEffect$.play();
            _this11.mulListNode.getChildByName("respin_vfx").active = true;
            _this11.mulListNode.getChildByName("respin_vfx3").active = true;
            tween(_this11.node).delay(1).call(function () {
              _this11.cardEffect.active = false;
            }).start();
          }).to(0.5, {
            position: new Vec3(0, -25, 0),
            scale: new Vec3(0.9, 0.9, 0.9)
          }).delay(0.4).call(function () {
            _this11.tipNode2.active = true;
            _this11.tipNode.active = false;
            var base = find('2/icon', _this11.tipNode2);
            for (var n = 0; n < base.children.length; n++) {
              base.children[n].active = n + 1 == bigWinResult.card;
            }
          }).delay(1).call(function () {
            var _this11$tigerAnim$get, _getComponent;
            _this11.audio.playMulAppearEf();
            _this11.RedBagEffect.active = false;
            _this11.X10Effect.active = true;
            (_this11$tigerAnim$get = _this11.tigerAnim.getComponent(sp.Skeleton)) == null || _this11$tigerAnim$get.setAnimation(0, "rs_idle", true);
            _this11.mulListNode.getChildByName("respin_vfx2").active = true;
            (_getComponent = _this11.mulListNode.getChildByName("respin_vfx2").getComponent(Animation)) == null || _getComponent.play();
            tween(_this11.X10Effect).to(0.2, {
              position: new Vec3(0, 410, 0)
            }).start();
          }).start();
          var effectNode = find("effectNode", this.node);
          tween(effectNode).delay(0.3).to(0.5, {
            position: new Vec3(0, -25, 0),
            scale: new Vec3(0.9, 0.9, 0.9)
          }).start();
        };
        _proto.bgBack = function bgBack() {
          var _this12 = this;
          var bg = find("bg", this.node);
          var gameMain = find('bg/Game_main', this.node);
          if (gameMain.opacity == 0) {
            gameMain.opacity = 1;
          }
          tween(bg).delay(0.5).to(0.5, {
            position: new Vec3(0, 0, 0),
            scale: new Vec3(1, 1, 1)
          }).call(function () {
            var _this12$tigerAnim$get;
            find('bg/s_bkg_normal/respin_vfx_k_add', _this12.node).active = false;
            (_this12$tigerAnim$get = _this12.tigerAnim.getComponent(sp.Skeleton)) == null || _this12$tigerAnim$get.setAnimation(0, "rs_win_exit", false);
            // this.bIsFreeGame = false;
            _this12.slotCtrl.setSpinAnim(0);
            _this12.mulListNode.getChildByName("respin_vfx").active = false;
            _this12.mulListNode.getChildByName("respin_vfx2").active = false;
            _this12.mulListNode.getChildByName("respin_vfx3").active = false;
            _this12.cardEffect.active = true;
            console.log("还原界面");
            tiger.auto && tiger.autoTimes > 0 && _this12.sendRoll();
          }).start();
          var effectNode = find("effectNode", this.node);
          tween(effectNode).delay(0.5).to(0.5, {
            position: new Vec3(0, 0, 0),
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.startBigWin = function startBigWin() {
          var _this13 = this;
          var bigWinResult = tiger.lotteryRes.getBigWin;
          this.scheduleOnce(function () {
            var _this13$tigerAnim$get;
            (_this13$tigerAnim$get = _this13.tigerAnim.getComponent(sp.Skeleton)) == null || _this13$tigerAnim$get.setAnimation(0, "zo_start", false);
            _this13.audio.playBgChangeSmall();
            if (bigWinResult.isStart) {
              _this13.bgChange();
            }
          }, 0.5);
          if (bigWinResult.isStart) {
            var bigWinData = bigWinResult.res_list[tiger.bigWinNum];
            var line = [];
            for (var i = 0; i < 3; i++) {
              line[i] = [];
            }
            for (var _i18 in bigWinData.nHandCards) {
              var index = Number(_i18);
              line[index % 3][2 - Math.floor(index / 3)] = bigWinData.nHandCards[index];
            }
            //免费模式是开场随意转
            for (var _i19 in tiger.wheelList) {
              var _tiger$wheelList$_i3;
              (_tiger$wheelList$_i3 = tiger.wheelList[_i19]).startFreeRoll.apply(_tiger$wheelList$_i3, line[_i19]);
            }
          }
        };
        _proto.closeShine = function closeShine() {
          for (var i = 0; i < this.effectLine.children.length; i++) {
            this.effectLine.children[i].active = false;
          }
          for (var _i20 = 0; _i20 < this.effectNum.children.length; _i20++) {
            this.effectNum.children[_i20].active = false;
          }
          for (var _i21 = 0; _i21 < this.effectLight.children.length; _i21++) {
            this.effectLight.children[_i21].active = false;
          }
          for (var _i22 = 0; _i22 < this.effectBigWinLight.children.length; _i22++) {
            this.effectBigWinLight.children[_i22].active = false;
          }
          for (var _i23 = 0; _i23 < this.effectCard.children.length; _i23++) {
            for (var j = 0; j < this.effectCard.children[_i23].children.length; j++) {
              this.effectCard.children[_i23].children[j].active = false;
            }
          }
          for (var _i24 = 0; _i24 < tiger.wheelList.length; _i24++) {
            for (var _j3 = 0; _j3 < tiger.wheelList[_i24].rolePbList.length; _j3++) {
              for (var k = 0; k < tiger.wheelList[_i24].rolePbList[_j3].children.length; k++) {
                tiger.wheelList[_i24].rolePbList[_j3].children[k].active = true;
              }
            }
          }
          this.maskNode.active = false;
          this.coinLineLab.active = false;
        };
        _proto.closeBigWin = function closeBigWin() {
          this.winNode.children[0].getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, tiger.lotteryRes.winscore);
          if (tiger.lotteryRes.getBigWin.isStart) {
            this.bgBack();
            this.scheduleOnce(this.hideEffectAllCard, 1);
          } else {
            if (!tiger.auto) {
              this.slotCtrl.Btn_stopAuto.active = false;
              this.slotCtrl.Btn_start.active = true;
            }
            if (tiger.auto && tiger.autoTimes > 0) {
              this.scheduleOnce(this.sendRoll, 1);
            }
          }
          this.showWinNode();
        }

        //提交滚动
        ;

        _proto.sendRoll = function sendRoll() {
          var _this14 = this;
          if (this.slotCtrl.playOverBn == false) {
            return;
          }
          tiger.bigWinNum = 0;
          if (tiger.detail) {
            this.deskMask.active = false;
            tiger.detail.node.active = false;
            tiger.detail = null;
          }
          if (this.winNode.active) {
            this.tipNode.active = true;
          }
          this.win2BG.active = false;
          this.win3BG.active = false;
          tiger.rollIndex++;
          //前置动作清除
          this.closeShine();
          this.slotCtrl.unscheduleAllCallbacks();
          if (this.effectAllCard.active) {
            this.closeBigIconAnim();
          }
          if (this.hideEffectAllCardTween) {
            this.hideEffectAllCardTween.stop();
            this.hideEffectAllCardTween.destroySelf();
            this.hideEffectAllCardTween = null;
          }
          this.tipNode.active = true;
          this.tipNode2.active = false;
          this.winNode.active = false;
          this.infoboard.getChildByName("ib_vfx_e").active = false;
          this.win2BG.active = false;
          this.win3BG.active = false;
          //自动次数-1
          tiger.autoTimes = tiger.autoTimes > 0 ? tiger.autoTimes - 1 : 0;
          this.anim_cb && this.unschedule(this.anim_cb);
          if (tiger.autoTimes == 0) {
            tiger.auto = false;
          }
          // this.slotCtrl.Btn_stopAuto.active = (this.auto && this.freeTimes == 0);
          tween(this.node).delay(0.1).call(function () {
            _this14.slotCtrl.setSpinAnim(1);
          }).start();
          var autoTimesLab = this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = tiger.autoTimes + "";
          this.audio.playclickstart();
          if (tiger.autoTimes > 999) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.76, 0.76, 0.76);
          } else if (tiger.autoTimes > 99) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.9, 0.9, 0.9);
          } else {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(1, 1, 1);
          }
          for (var i in tiger.wheelList) {
            tiger.wheelList[i].rollLoop();
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
                  return gameNet.playSlots(SubGameDef.SLOTS_TIGER, tiger.betSum.toString());
                case 2:
                  retSpin = _context2.sent;
                  console.log('retSpin is', retSpin);
                  data = this.exchange(retSpin.res);
                  this.lotteryBack(data);
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
          var _this15 = this;
          if (data && data.code == 0) {
            tiger.lotteryRes = data;
            tiger.money = data.userscore;
            this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(tiger.exchangeRate, data.userscore - data.winscore);
            this.slotCtrl.winCoin_lab.string = Num.exchangeToThousands(tiger.exchangeRate, data.winscore);
            tween(this.node).delay(0.4).call(function () {
              _this15.roll(data.nHandCards);
            }).start();
          }
        };
        _proto.exchange = function exchange(data) {
          console.log("data is", data);
          var res = dataChange.change(data);
          // tiger.lotteryRes = res;
          var mydata = res;
          console.log("mydata", mydata);
          return mydata;
        };
        _proto.stopImmediately = function stopImmediately() {
          if (!tiger.auto) {
            for (var i in tiger.wheelList) {
              tiger.wheelList[i].stopImmediately();
            }
          }
        };
        _proto.hideEffectAllCard = function hideEffectAllCard() {
          var _this16 = this;
          this.hideEffectAllCardTween = tween(this.effectAllCard).to(1, {
            opacity: 0
          }).call(function () {
            _this16.initEffectAllCard();
          }).start();
        };
        _proto.initEffectAllCard = function initEffectAllCard() {
          this.effectAllCard.opacity = 255;
          this.effectAllCard.active = false;
          this.closeBigIconAnim();
        }

        //大奖还原动画
        ;

        _proto.closeBigIconAnim = function closeBigIconAnim() {
          this.effectAllCard.active = false;
          find('bg/Game_main', this.node).opacity = 255;
          this.effectLight.opacity = 255;
          this.effectLine.opacity = 255;
          this.effectBigWinLight.opacity = 255;
          this.effectCard.opacity = 255;
          this.effectNum.opacity = 255;
          this.X10Effect.active = false;
          this.X10Effect.parent = find("bg/s_bkg_normal/X10_area", this.node);
          this.X10Effect.y = 410;
          this.X10Effect.scale = new Vec3(1.5, 1.5, 1.5);
        };
        _proto.close = function close() {
          this.audio.clearAll();
        };
        return tigerMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rolePb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nullPb", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wildEffectPb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wildEndEffect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cardEffect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "effectLine", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effectNum", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "effectLight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "effectBigWinLight", [_dec11], {
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "effectAllCard", [_dec13], {
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
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "mulListNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "freeBgNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "freeBeginNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "freeEndNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "win2BG", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "win3BG", [_dec20], {
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
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "tipNode2", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "winNode", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "infoboard", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "coinBoomEffect", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "coinLineLab", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "tigerAnim", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "leafNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "leafPb", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "RedBagEffect", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "X10Effect", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "X10EffectNor", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "deskMask", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec34], {
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

System.register("chunks:///_virtual/tigerSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts', './Num.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, tiger, Num, LanguageData;
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
      tiger = module.tiger;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28;
      cclegacy._RF.push({}, "531e7ehvItKdYp8kiECDp1P", "tigerSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var tigerSlotCtrl = exports('tigerSlotCtrl', (_dec = ccclass('tigerSlotCtrl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property([SpriteFrame]), _dec26 = property(Node), _dec27 = property([SpriteFrame]), _dec28 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tigerSlotCtrl, _Component);
        function tigerSlotCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rollEnable", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Roll_light", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_start", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spin_Sp", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spin_AnimNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rollClickAni", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_stopAuto", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopRollClickAni", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_free", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_add", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_sub", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_auto", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_set", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betting_panel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Setting_panel", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin_panel", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserCoin", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurBet", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winCoin_lab", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinCoin_lab", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stateNode", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinNode", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicBtn", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_settingControl", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedBtn", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_speed", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp2_speed", _descriptor28, _assertThisInitialized(_this));
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
        var _proto = tigerSlotCtrl.prototype;
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
          if (!this.rollEnable) {
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
          if (!this.rollEnable) {
            return;
          }
          tiger.node.onCLick(e, 'roll');
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
          tiger.node.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(tiger.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.money);
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
          if (!tiger.betNum) {
            tiger.sumIdx = 0;
            tiger.betNum = this.sumList[tiger.sumIdx];
          } else {
            tiger.sumIdx = this.sumList.indexOf(tiger.betNum);
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
          tiger.node.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          tiger.autoPanel.showPanel();
        }

        //关闭自动弹板
        ;

        _proto.onCLick_closeAutoPanel = function onCLick_closeAutoPanel() {
          tiger.node.audio.playclickclose();
          // this.Auto_panel.getComponent('autoPanel').hidePanel();
        };
        //打开设置界面
        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          tiger.node.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", tiger.node.node);
          if (footer) {
            footer.active = false;
          }
          this.Btn_start.active = false;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, -81, 0),
            opacity: 0
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, 50, 0),
            opacity: 255
          }).start();
        }

        //打开设置界面
        ;

        _proto.onCLickHideSettingPanel = function onCLickHideSettingPanel(event) {
          if (this.Setting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", tiger.node.node);
          if (footer) {
            footer.active = true;
          }
          this.Btn_start.active = true;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, 89, 0),
            opacity: 255
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, -120, 0),
            opacity: 0
          }).start();
        }

        // 下注弹板开关
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
            tiger.betPanel.hidePanel();
          } else {
            tiger.betPanel.showPanel();
            tiger.betPanel.bindBet();
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
          tiger.node.audio.playclickopen();
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
          tiger.sumIdx = this.sumList.indexOf(tiger.betSum);
          if (tiger.sumIdx == -1) {
            tiger.sumIdx = 0;
          }
          this.updateBet(tiger.sumIdx);
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
          if (tiger.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (tiger.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (tiger.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (tiger.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          tiger.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(tiger.exchangeRate, this.sumList[idx]);
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
          tiger.node.winNode.children[0].getComponent(Label).string = Num.exchangeToThousands(tiger.exchangeRate, coin);
          this.winCoin_lab.string = Num.exchangeToThousands(tiger.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(tiger.exchangeRate, tiger.lotteryRes.userscore - tiger.lotteryRes.winscore + coin);
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
          if (this.bigWinNode.active) return;
          tiger.node.unschedule(tiger.node.sendRoll);
          this.bigWinNode.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(tiger.exchangeRate, this.addcoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.closeBigWin, 8);
        };
        _proto.coinOneChange = function coinOneChange() {
          this.addcoin += this.addOnce;
          if (this.addcoin >= this.aimCoin) {
            this.playBigWin(this.aimCoin);
            this.playCoinOver();
          } else {
            this.playBigWin(this.addcoin);
            this.bigWinCoin_lab.string = Num.exchangeToThousands(tiger.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(tiger.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 2);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= tiger.betSum * 50 && !this.bigWinNode.children[2].active && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= tiger.betSum * 35 && coin < tiger.betSum * 50 && !this.bigWinNode.children[1].active && this.superBn == false) {
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
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin() {
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

        _proto.playAnim_MegaWin = function playAnim_MegaWin() {
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
            // tiger.node.hideEffectAllCard();
            tiger.node.audio.stopbigwinmain();
            this.setSpinAnim(0);
          }
          // if (this.watchLabel) {
          //     this.inumObj.inum = 0
          //     this.watchLabel = null
          // }
          if (this.bigWinCoin_lab) {
            this.bigWinCoin_lab.string = "0";
          }
          tiger.node.closeBigWin();
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          var _this$Btn_start$getCh;
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              this.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !tiger.auto && this.setButtonState(true);
              if (tiger.lotteryRes && tiger.lotteryRes.winscore == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              this.rollEnable = false;
              if (this.Roll_light) {
                this.Roll_light.getComponent(Animation).play();
              }
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              var VFX2Ani = (_this$Btn_start$getCh = this.Btn_start.getChildByName("VFX2")) == null ? void 0 : _this$Btn_start$getCh.getComponent(Animation);
              VFX2Ani.play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(tiger.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              this.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              this.rollEnable = false;
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
        _createClass(tigerSlotCtrl, [{
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
        return tigerSlotCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rollEnable", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Roll_light", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Btn_start", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spin_Sp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spin_AnimNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rollClickAni", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Btn_stopAuto", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stopRollClickAni", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Btn_free", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Btn_add", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Btn_sub", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Btn_auto", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Btn_set", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "betting_panel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Setting_panel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "coin_panel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lblUserCoin", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lblCurBet", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "winCoin_lab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bigWinCoin_lab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "stateNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bigWinNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "musicBtn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "sp_settingControl", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "speedBtn", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "sp_speed", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "sp2_speed", [_dec28], {
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

System.register("chunks:///_virtual/tigerWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cTiger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, sp, Layout, TweenSystem, Vec3, tween, instantiate, Component, Button, UITransform, tiger;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Layout = module.Layout;
      TweenSystem = module.TweenSystem;
      Vec3 = module.Vec3;
      tween = module.tween;
      instantiate = module.instantiate;
      Component = module.Component;
      Button = module.Button;
      UITransform = module.UITransform;
    }, function (module) {
      tiger = module.tiger;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4c3b2iPfKlHfbZ+bhOGJ1sQ", "tigerWheel", undefined);
      var ROLENUM = 15; //每一轮的角色数量
      var TIMEMIN = 0.7; //第一轮摇奖时间
      var W_INTERVAL = 0.1;
      var FIRSTROLE = [
      //进入游戏时每列的角色
      [5, 3, 6, 6, 3], [4, 7, 7, 7, 2], [3, 5, 5, 2, 1]];
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var tigerWheel = exports('tigerWheel', (_dec = ccclass('tigerWheel'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tigerWheel, _Component);
        function tigerWheel() {
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
          _this.isBlur = false;
          return _this;
        }
        var _proto = tigerWheel.prototype;
        _proto.onLoad = function onLoad() {
          // this.audio = cc.director.getScene().getChildByName('Canvas').getComponent('fortunetigerAudio');
          tiger.wheelList[this.wheelId] = this;
          this.status = 0;
          this.nextCb = null; //下一步需要执行的回调
          this.rolePbList = []; //roles
          this.roleIdList = []; //role ID
        };

        _proto.start = function start() {}

        //初始化场景role
        ;

        _proto.initWheel = function initWheel() {
          var _this2 = this;
          if (tiger.isNewUser) {
            this.lastResult = FIRSTROLE[this.wheelId]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样 
          } else {
            this.lastResult = [0, 0, 0, 0, 0];
          }
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          for (var i in this.lastResult) {
            if (tiger.isNewUser) {
              this.addRole(this.lastResult[i]);
            } else {
              this.lastResult[i] = this.getRandomId();
              this.addRole(this.lastResult[i]);
            }
          }
          setTimeout(function () {
            for (var _i in _this2.rolePbList) {
              if (_this2.roleIdList[_i] == 7) {
                _this2.rolePbList[_i].children[0].getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              }
            }
          }, 100);
          this.addRole(this.getRandomId());
          this.node.y = 0;
          tiger.rollIndex++;
          tiger.node.closeShine();
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
          var delay = 0;
          this.scheduleOnce(function () {
            if (tiger.slotCtrl.isSpeed) {
              for (var i in args) {
                _this3.addRole(args[i]);
              }
              _this3.addRole(_this3.getRandomId());
              _this3.node.getComponent(Layout).updateLayout();
              setTimeout(function () {
                _this3.stopImmediately();
              }, TIMEMIN / 3 * 1000);
            }
            var cb = function cb() {
              _this3.addRole(_this3.getRandomId());
              var timeNum = TIMEMIN * 0.68;
              if (_this3.wheelId == 1) {
                _this3.addRole(_this3.getRandomId());
                _this3.addRole(_this3.getRandomId());
                _this3.addRole(_this3.getRandomId());
                timeNum += 0.2;
              }
              if (_this3.wheelId == 2) {
                _this3.addRole(_this3.getRandomId());
                _this3.addRole(_this3.getRandomId());
                _this3.addRole(_this3.getRandomId());
                _this3.addRole(_this3.getRandomId());
                _this3.addRole(_this3.getRandomId());
                _this3.addRole(_this3.getRandomId());
                timeNum += 0.4;
              }
              for (var _i2 in args) {
                _this3.addRole(args[_i2]);
              }
              _this3.addRole(_this3.getRandomId());
              _this3.node.getComponent(Layout).updateLayout();
              tween(_this3.node).to(timeNum, {
                y: -_this3.node.size.height + 842 - 30
              }) //, { easing: 'quadOut' }
              .call(function () {
                _this3.isBlur = false;
                _this3.setBlur();
              }).to(0.3, {
                y: -_this3.node.size.height + 842
              }).call(function () {
                _this3.rollCallBack();
              }).start();
            };
            _this3.nextCb = cb;
            TweenSystem.instance.ActionManager.removeAllActionsFromTarget(_this3.node);
            _this3.nextCb();
          }, delay);
        };
        _proto.startFreeRoll = function startFreeRoll() {
          var _this4 = this;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          var cb = function cb() {
            _this4.status = 1;
            _this4.rolePbList = [];
            _this4.roleIdList = [];
            _this4.node.removeAllChildren();
            _this4.node.y = 0; //滚轮启动位移距离
            for (var i in _this4.lastResult) {
              _this4.lastResult[i] = _this4.lastResult[i] == 0 ? _this4.getRandomId() : _this4.lastResult[i];
              _this4.addRole(_this4.lastResult[i]);
            }
            for (var _i3 = 0; _i3 < (ROLENUM - 5) * 3; _i3++) {
              _this4.addRole(_this4.getRandomId());
            }
            _this4.node.getComponent(Layout).updateLayout();
            var timer = TIMEMIN * 3; // + this.wheelId * 0.2;
            tween(_this4.node).to(timer, {
              position: new Vec3(_this4.node.x, -_this4.node.size.height + 842, 0)
            }).call(function () {
              _this4.FreeRoll_again(args, true);
              _this4.isBlur = false;
              _this4.setBlur();
            }).start();
          };
          this.nextCb = cb;
        };
        _proto.FreeRoll_again = function FreeRoll_again(args, isFirst) {
          var _this5 = this;
          if (isFirst === void 0) {
            isFirst = false;
          }
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          this.node.y = 0; //滚轮启动位移距离
          for (var i in this.lastResult) {
            if (!isFirst && parseInt(i) < 4) {
              this.addRole(8).scale = new Vec3(0.85, 0.85, 0.85);
              continue;
            }
            this.lastResult[i] = this.lastResult[i] == 0 ? this.getRandomId() : this.lastResult[i];
            this.addRole(this.lastResult[i]).scale = new Vec3(0.85, 0.85, 0.85);
          }
          var chooseNum = tiger.lotteryRes.getBigWin.card;
          for (var _i4 = 0; _i4 < ROLENUM; _i4++) {
            var a = this.getRandomId();
            if (a == chooseNum || a == 7) {
              this.addRole(a).scale = new Vec3(0.85, 0.85, 0.85);
            } else {
              this.addRole(8).scale = new Vec3(0.85, 0.85, 0.85);
            }
          }
          for (var _i5 in args) {
            var obj = this.addRole(args[_i5]);
            obj.scale = new Vec3(0.85, 0.85, 0.85);
            if (!isFirst) {
              if (args[_i5] == this.lastResult[parseInt(_i5) + 1]) {
                obj.opacity = 0;
                continue;
              }
            }
          }
          this.addRole(this.getRandomId()).scale = new Vec3(0.85, 0.85, 0.85);
          this.node.getComponent(Layout).updateLayout();
          var delay = isFirst ? 0 : 2;
          var timer = TIMEMIN * 1.9;
          tween(this.node).delay(delay).call(function () {
            _this5.isBlur = true;
            _this5.setBlur();
          }).to(timer, {
            position: new Vec3(this.node.x, -this.node.size.height + 842)
          }, {
            easing: 'quadOut'
          }).delay(0.8).call(function () {
            _this5.rollCallBack_Free();
          }).start();
          tween(this.node).delay(delay + timer * 2 / 3).call(function () {
            _this5.isBlur = false;
            _this5.setBlur();
          }).start();
        };
        _proto.rollLoop = function rollLoop() {
          var _this6 = this;
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          this.node.y = 0; //滚轮启动位移距离
          for (var i in this.lastResult) {
            this.lastResult[i] = this.lastResult[i] == 0 ? this.getRandomId() : this.lastResult[i];
            this.addRole(this.lastResult[i]);
          }
          for (var _i6 = 0; _i6 < ROLENUM - 10; _i6++) {
            this.addRole(this.getRandomId());
          }
          for (var _i7 in this.lastResult) {
            this.lastResult[_i7] = this.lastResult[_i7] == 0 ? this.getRandomId() : this.lastResult[_i7];
            this.addRole(this.lastResult[_i7]);
          }
          var loopCb = function loopCb() {
            _this6.node.y = 0; //滚轮启动位移距离
            if (tiger.slotCtrl.isSpeed) {
              tween(_this6.node).call(function () {
                _this6.isBlur = true;
                _this6.setBlur();
              }).to(TIMEMIN / 3, {
                y: -_this6.node.size.height + 842
              }) //, { easing: 'quadInOut' })
              .call(function () {
                _this6.nextCb();
              }).start();
            } else {
              tween(_this6.node).call(function () {
                _this6.isBlur = true;
                _this6.setBlur();
              }).to(TIMEMIN, {
                y: -_this6.node.size.height + 842
              }) //, { easing: 'quadInOut' })
              .call(function () {
                _this6.nextCb();
              }).start();
            }

            // this.node.runAction(cc.repeat(
            //     cc.sequence(
            //         cc.delayTime(0.1),
            //         cc.callFunc(() => {
            //             this.audio.playwheelspin();
            //         })
            //     ), TIMEMIN / 40));
          };

          this.node.getComponent(Layout).updateLayout();

          // this.node.runAction(cc.repeat(
          //     cc.sequence(
          //         cc.delayTime(0.1),
          //         cc.callFunc(() => {
          //             this.audio.playwheelspin();
          //         })
          //     ), TIMEMIN / 0.1));

          if (tiger.slotCtrl.isSpeed) {
            tween(this.node).to(0.16, {
              y: 30
            }).call(function () {
              _this6.isBlur = true;
              _this6.setBlur();
            }).to(TIMEMIN * 3 / 4, {
              y: -this.node.size.height + 842
            }).call(function () {
              _this6.nextCb();
            }).start();
          } else {
            tween(this.node).delay(this.wheelId * W_INTERVAL).to(0.16, {
              y: 30
            }).call(function () {
              _this6.isBlur = true;
              _this6.setBlur();
            }).to(TIMEMIN, {
              y: -this.node.size.height + 842
            }).call(function () {
              _this6.nextCb();
            }).start();
          }

          // this.node.runAction(cc.repeat(
          //     cc.sequence(
          //         cc.delayTime(0.1),
          //         cc.callFunc(() => {
          //             this.audio.playwheelspin();
          //         })
          //     ), TIMEMIN / 0.1));
          this.nextCb = loopCb;
        };
        _proto.getRandomId = function getRandomId() {
          var randomId = 0;
          while (randomId == 0) {
            randomId = Math.floor(Math.random() * (tiger.node.rolePb.length - 1) + 1);
            randomId = randomId == this.excludeId ? 0 : randomId;
          }
          return randomId;
        };
        _proto.addRole = function addRole(id) {
          if (id == 8) {
            return this.addNullRole(id);
          }
          var pb = instantiate(tiger.node.rolePb[id]);
          this.rolePbList.push(pb);
          this.roleIdList.push(id);
          this.addClickEvent(pb, id);
          this.node.addChild(pb);
          this.setBlur(pb);
          return pb;
        };
        _proto.addNullRole = function addNullRole(id) {
          var pb = instantiate(tiger.node.nullPb);
          this.rolePbList.push(pb);
          this.roleIdList.push(id);
          this.node.addChild(pb);
          return pb;
        };
        _proto.rollCallBack = function rollCallBack() {
          this.isBlur = false;
          this.setBlur();
          // this.audio.playStopWheel();
          this.lastResult = this.roleIdList.slice(-5);
          this.status = 0;
          tiger.node.stateCallBack();
        };
        _proto.rollCallBack_Free = function rollCallBack_Free() {
          var _this7 = this;
          for (var _iterator = _createForOfIteratorHelperLoose(this.node.children), _step; !(_step = _iterator()).done;) {
            var obj = _step.value;
            obj.opacity = 255;
            tween(obj).delay(0.6 - W_INTERVAL * this.wheelId).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }
          this.isBlur = false;
          this.setBlur();
          // this.audio.playStopWheel();
          this.lastResult = this.roleIdList.slice(-5);
          this.scheduleOnce(function () {
            _this7.status = 0;
            tiger.node.stateCallBack();
          }, 0.15);
        };
        _proto.stopImmediately = function stopImmediately() {
          this.isBlur = false;
          this.setBlur();
          this.lastResult = this.roleIdList.slice(-5);
          TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this.node);
          tween(this.node).to(0.05, {
            y: -this.node.size.height + 842
          }).start();
          this.status = 0;
          tiger.node.stateCallBack();
        };
        _proto.addClickEvent = function addClickEvent(node, idx) {
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
          clickEventHandler.component = "tigerWheel"; // 这个是代码文件名
          clickEventHandler.handler = "roleClick";
          clickEventHandler.customEventData = idx + "";
          var button = node.getComponent(Button);
          button.clickEvents.push(clickEventHandler);
        };
        _proto.roleClick = function roleClick(event, customEventData) {
          if (tiger.node.effectAllCard.active) {
            return;
          }
          if (tiger.detail) {
            tiger.node.deskMask.active = false;
            tiger.detail.node.parent = null;
            tiger.detail = null;
            return;
          }
          var newNode = instantiate(tiger.node.detailPb);
          var transForm = event.target.getComponent(UITransform);
          var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
          transForm = tiger.node.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(newVec3);
          newNode.position = p;
          newNode.x -= 50;
          var isLeft = newNode.x < 10;
          newNode.getComponent("tigerDetail").init(Number(customEventData), isLeft);
          tiger.node.node.addChild(newNode);
          tiger.node.deskMask.active = true;
          // cc.log(newNode.position);
        };

        _proto.setBlur = function setBlur(node) {
          if (node === void 0) {
            node = null;
          }
          // if (this.isBlur) {
          //     return;
          // }
          if (node) {
            this.setNodeBlur(node);
          } else {
            for (var i in this.node.children) {
              var _node = this.node.children[i];
              this.setNodeBlur(_node);
            }
          }
        };
        _proto.setNodeBlur = function setNodeBlur(node) {
          try {
            node.children[0].active = true;
            node.children[1].active = true;
            if (this.isBlur) {
              node.children[0].opacity = 0;
              node.children[1].opacity = 255;
            } else {
              node.children[0].opacity = 255;
              node.children[1].opacity = 0;
            }
          } catch (e) {
            //console.log(e)
          }
        };
        return tigerWheel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wheelId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "excludeId", [property], {
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

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_tiger', 'chunks:///_virtual/module_slots_tiger'); 
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