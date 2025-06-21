System.register("chunks:///_virtual/autoPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, dragon, Num;
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
      dragon = module.dragon;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "9eebceMIG1Ikq6cq+9ZGf5j", "autoPanel", undefined);
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
          dragon.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.money);
          this.lblCurBet.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.betSum);
          this.winCoin_lab.string = dragon.slotCtrl.winCoin_lab.string;
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
            dragon.node.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          dragon.node.audio.playclickopen();
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
          dragon.node.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "3cdf3bcQD1MmLR7Rxt8+IQw", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts', './Num.ts', './betNum2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, dragon, Num, betNum;
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
      dragon = module.dragon;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      betNum = module.betNum;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "69a56nvjftK+bsfVLoOsk7T", "betPanel", undefined);
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
          dragon.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = dragon.BETNUM;
          this.betList = dragon.BET;
          this.line = dragon.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.money);
          this.lblCurBet.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.betSum);
          this.winCoin_lab.string = dragon.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(dragon.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(dragon.exchangeRate, sumList[_i3]);
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
          dragon.betNum = this.tempi;
          dragon.bet = this.tempj;
          dragon.sumIdx = this.tempindex;
          dragon.betSum = this.sumList[dragon.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.betSum);
          dragon.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(dragon.sumIdx);
          this.val3 = dragon.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          dragon.node.audio.playclickopen();
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
          dragon.node.audio.playclickclose();
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

System.register("chunks:///_virtual/cDragon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange.ts'], function (exports) {
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
      cclegacy._RF.push({}, "ec2c8uINT1LPbTxbTw5tzDD", "cDragon", undefined);
      var cDragon = /*#__PURE__*/function () {
        function cDragon() {
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          /**声音开关 0：关 1：开 */
          this._musicControl = null;
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
          this.rollEnable = true;
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
        }
        _createClass(cDragon, [{
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
          key: "musicControl",
          get: function get() {
            return this._musicControl;
          },
          set: function set(num) {
            this._musicControl = num;
            // AudioMgr.inst.musicControl = num;
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
              this._betSum = Number(localStorage.getItem(SubGameDef.SLOTS_DRAGON + "betSum"));
            }
            return this._betSum;
          },
          set: function set(v) {
            if (this._betSum != v) {
              localStorage.setItem(SubGameDef.SLOTS_DRAGON + "betSum", v + "");
            }
            this._betSum = v;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cDragon();
            }
            return this._instance;
          }
        }]);
        return cDragon;
      }();
      cDragon._instance = null;
      var dragon = exports('dragon', cDragon.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange.ts", ['cc', './Num.ts'], function (exports) {
  var cclegacy, Num;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa3befjCvlATLUmDJ758s84", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.code = 0; //代表issuse 成功
          res.userscore = Num.parse(data.coins); //用户游戏后剩余金币
          res.winscore = Num.parse(data.payout); //用户当局赚取金币
          res.getBigWin = {};
          res.getFreeTime = {};
          res.getBigWin.res_list = [];
          for (var n = 0; n < data.results.length; n++) {
            var temp = data.results[n]; //结果
            var nHandCards = []; //展示的牌型
            var nWinLines = [];
            var nWinLinesDetail = [];
            var nWinDetail = [];
            var nWinCards = [false, false, false, false, false, false, false, false, false];
            var fMultiple = void 0;
            var winscore = Number(temp.payout);
            for (var i = 0; i < temp.symbols.length; i++) {
              var cur = temp.symbols[i]; //
              var index = dataChange.posToIndex(cur.coordinate);
              // res.nHandCards[index] = Number(cur.id);
              nHandCards[index] = this.transformId(cur.id);
            }
            for (var _i = 0; _i < temp.paylines.length; _i++) {
              var _cur = temp.paylines[_i];
              nWinLines.push(Number(_cur.id) - 1);
              nWinDetail.push(_cur.payout);
              nWinLinesDetail[_i] = [];
              for (var j = 0; j < _cur.points.length; j++) {
                var point = _cur.points[j];
                var _temp = dataChange.posToIndex(point);
                nWinLinesDetail[_i].push(_temp);
                nWinCards[_temp] = true;
              }
            }
            if (n == 0) {
              res.getBigWin.bFlag = temp.bigEvents;
              res.getBigWin.isStart = temp.bigEvents;
              res.getFreeTime.bFlag = temp.bigEvents;
              res.getFreeTime.nFreeTime = 8;
            }
            if (res.getBigWin.bFlag && winscore <= 0) {
              fMultiple = [];
            } else {
              fMultiple = this.exchangeMul(temp.multipliers);
            }
            if (n == data.results.length - 1) {
              res.nHandCards = nHandCards;
              res.nWinLines = nWinLines;
              res.nWinLinesDetail = nWinLinesDetail;
              res.nWinDetail = nWinDetail;
              res.nWinCards = nWinCards;
              res.fMultiple = fMultiple ? fMultiple : 1;
            }
            var _resList = {};
            _resList.nHandCards = nHandCards;
            _resList.nWinLines = nWinLines;
            _resList.nWinLinesDetail = nWinLinesDetail;
            _resList.nWinDetail = nWinDetail;
            _resList.nWinCards = nWinCards;
            _resList.winscore = winscore;
            _resList.fMultiple = fMultiple;
            res.getBigWin.res_list.push(_resList);
          }
          return res;
        };
        dataChange.exchangeMul = function exchangeMul(muls) {
          if (muls == undefined) {
            return 0;
          }
          if (muls.length == 1) {
            return muls[0].multiple == 1 ? 0 : muls[0].multiple;
          } else {
            var nums = [];
            for (var i = 0; i < muls.length; i++) {
              if (muls[i].multiple != 1) {
                nums.push(muls[i].multiple);
              }
            }
            return nums;
          }
        };
        dataChange.posToIndex = function posToIndex(pos) {
          var index = (3 - pos.row) * 3 + (pos.reel - 1);
          return index;
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            dragon: 7,
            yuanbao: 6,
            red_envelope: 5,
            lantern: 4,
            firework: 3,
            chinese_knot: 2,
            copper_coin: 1
          };
          return (_idMap$curid = idMap[curid]) != null ? _idMap$curid : 0;
        };
        return dataChange;
      }());

      //old
      dataChange.BETNUM = [0.03, 0.1, 0.3, 0.9];
      //单注值
      dataChange.LINES = 30;
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

System.register("chunks:///_virtual/discoNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, ccenum, SpriteFrame, Sprite, math, Component;
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
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "61f66lmUbVKwI2uQ18bCdKC", "discoNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Type = /*#__PURE__*/function (Type) {
        Type[Type["one"] = 2] = "one";
        Type[Type["two"] = 5] = "two";
        Type[Type["three"] = 10] = "three";
        return Type;
      }(Type || {});
      ccenum(Type);
      var discoNum = exports('discoNum', (_dec = ccclass('discoNum'), _dec2 = property({
        type: [SpriteFrame],
        tooltip: "数字皮肤"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "数字"
      }), _dec4 = property({
        type: Type,
        tooltip: "默认设置"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(discoNum, _Component);
        function discoNum() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spArr", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numSp", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultNum", _descriptor3, _assertThisInitialized(_this));
          _this.numArr = [2, 5, 10];
          _this._num = 0;
          return _this;
        }
        var _proto = discoNum.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          if (!this.num) {
            this.num = this.defaultNum;
          }
        };
        _proto.radomNum = function radomNum() {
          var index = this.getRandomInt(0, this.numArr.length, 1);
          this.num = this.numArr[index];
        };
        _proto.getRandomInt = function getRandomInt(min, max, type) {
          if (type === void 0) {
            type = 2;
          }
          min = Math.ceil(min);
          max = Math.floor(max);
          switch (type) {
            case 1:
              // [min,max) 得到一个两数之间的随机整数,这个值不小于min（如果min不是整数的话，得到一个向上取整的 min），并且小于（但不等于）max  
              return Math.floor(math.random() * (max - min)) + min;
            case 2:
              // [min,max] 得到一个两数之间的随机整数，包括两个数在内,这个值比min大（如果min不是整数，那就不小于比min大的整数），但小于（但不等于）max
              return Math.floor(math.random() * (max - min + 1)) + min;
            case 3:
              // (min,max) 得到一个两数之间的随机整数
              return Math.floor(math.random() * (max - min - 1)) + min + 1;
          }
          return 0;
        };
        _createClass(discoNum, [{
          key: "num",
          get: function get() {
            return this._num;
          },
          set: function set(v) {
            this._num = v;
            var index = this.numArr.indexOf(this.num);
            if (index == -1) {
              console.error("Error:discoNum num");
            }
            this.numSp.spriteFrame = this.spArr[index];
          }
        }]);
        return discoNum;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spArr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numSp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defaultNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type.one;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/discoRoll.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './discoNum.ts', './cDragon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Vec3, Tween, Layout, tween, instantiate, Component, discoNum, dragon;
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
      Vec3 = module.Vec3;
      Tween = module.Tween;
      Layout = module.Layout;
      tween = module.tween;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      discoNum = module.discoNum;
    }, function (module) {
      dragon = module.dragon;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b0a60XFJQBA1o0wD9/oQMIO", "discoRoll", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var discoRoll = exports('discoRoll', (_dec = ccclass('discoRoll'), _dec2 = property({
        type: Prefab,
        tooltip: "数字皮肤"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(discoRoll, _Component);
        function discoRoll() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pb", _descriptor, _assertThisInitialized(_this));
          _this.MaxSize = 1;
          _this.MainSize = 0.7;
          _this.rollTime = 1;
          _this.radomNum = 10;
          _this.startX = -114;
          _this.showRange = 83;
          _this.aimDis = 145;
          _this.rollBn = false;
          _this.aimNum = 0;
          _this.pool = [];
          _this._isSpeed = false;
          return _this;
        }
        var _proto = discoRoll.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.startX = this.node.x;
          this.rollBn = false;
        };
        _proto.update = function update(dt) {
          if (!this.rollBn) {
            return;
          }
          this.updateSize();
        };
        _proto.showBn = function showBn(item) {
          var bn = false;
          var parent = item.parent;
          var relativePos = new Vec3(item.position.x + parent.position.x, item.position.y + parent.position.y);
          var boundaryL = relativePos.x - item.w / 2;
          var boundaryR = relativePos.x + item.w / 2;
          if (boundaryL < this.showRange && boundaryR > -this.showRange) {
            bn = true;
          }
          return bn;
        };
        _proto.showSize = function showSize(item) {
          var size = 0;
          var parent = item.parent;
          var relativePos = new Vec3(item.position.x + parent.position.x, item.position.y + parent.position.y);
          var disx = this.showRange - Math.abs(relativePos.x);
          if (disx < 0) {
            size = this.MainSize;
          } else {
            var dis = this.MaxSize - this.MainSize;
            var a = Math.acos(Math.abs(relativePos.x) / this.showRange);
            size = this.MainSize + dis * Math.sin(a);
          }
          return size;
        };
        _proto.startRoll = function startRoll() {
          this.rollBn = true;
          this.rollLoop();
        };
        _proto.endRoll = function endRoll(num) {
          if (num === void 0) {
            num = 0;
          }
          this.aimNum = num;
          Tween.stopAllByTarget(this.node);
          this.rollEnd();
        };
        _proto.radomAdd = function radomAdd() {
          this.updateSize(true);
          var addnum = this.radomNum - this.node.children.length;
          this.create(addnum);
          this.node.getComponent(Layout).updateLayout();
        };
        _proto.updateSize = function updateSize(isRecycle) {
          if (isRecycle === void 0) {
            isRecycle = false;
          }
          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var item = this.node.children[i];
            var showBn = this.showBn(item);
            if (showBn) {
              var size = this.showSize(item);
              item.scale = new Vec3(size, size);
              item.opacity = 255;
            } else {
              isRecycle && this.recycle(item);
            }
          }
        };
        _proto.rollLoop = function rollLoop() {
          var _this2 = this;
          this.radomAdd();
          this.node.x = this.startX; //滚轮启动位移距离 
          var timer = this.rollTime;
          tween(this.node).to(timer, {
            x: this.startX - this.node.w + 230
          }) //, { easing: 'quadInOut' }) 
          .call(function () {
            _this2.rollLoop();
          }).start();
        };
        _proto.rollEnd = function rollEnd() {
          var _this3 = this;
          this.radomAdd();
          var aim = 0;
          if (this.aimNum != 0) {
            var last = this.node.children[this.node.children.length - 1].getComponent(discoNum);
            last.num = this.aimNum;
            aim = this.startX - this.node.w + this.aimDis;
          } else {
            aim = this.startX - this.node.w + 230;
          }
          this.node.x = this.startX; //滚轮启动位移距离 
          var timer = this.rollTime;
          tween(this.node).to(timer, {
            x: aim
          }) //, { easing: 'quadInOut' }) 
          .call(function () {
            _this3.endComplete();
          }).start();
        };
        _proto.endComplete = function endComplete() {
          this.rollBn = false;
          if (this.aimNum != 0) {
            var node = this.node.children[this.node.children.length - 1];
            tween(node).to(0.3, {
              y: node.y + 8,
              scale: new Vec3(0.8, 0.8)
            }).delay(0.2).to(0.2, {
              y: node.y,
              scale: new Vec3(0.7, 0.7)
            }).start();
            dragon.node.discoNumFly(this.node.children[this.node.children.length - 1], this.pb);
          }
        };
        _proto.flyUp = function flyUp(callBack) {
          var _this4 = this;
          var item = this.node.children[this.node.children.length - 1];
          if (!item) return;
          tween(item).to(0.5, {
            y: item.position.y + 50
          }).call(function () {
            callBack();
            _this4.flyDown();
          }).start();
        };
        _proto.flyDown = function flyDown() {
          var item = this.node.children[this.node.children.length - 1];
          if (!item) return;
          tween(item).to(0.5, {
            y: item.position.y - 50,
            opacity: 100
          }).start();
        };
        _proto.aimBack = function aimBack() {
          var item = this.node.children[this.node.children.length - 1];
          if (!item) return;
          item.opacity = 255;
        };
        _proto.create = function create(num) {
          for (var i = 0; i < num; i++) {
            this.createOne();
          }
        };
        _proto.createOne = function createOne() {
          var item = this.itemFactory().getComponent(discoNum);
          item.node.scale = new Vec3(this.MainSize, this.MainSize);
          item.radomNum();
          this.node.addChild(item.node);
        };
        _proto.itemFactory = function itemFactory() {
          if (this.pool.length > 0) {
            return this.pool.shift();
          } else {
            return instantiate(this.pb);
          }
        };
        _proto.recycle = function recycle(item) {
          item.parent = null;
          this.pool.push(item);
        };
        _createClass(discoRoll, [{
          key: "isSpeed",
          get: function get() {
            return this._isSpeed;
          },
          set: function set(v) {
            this._isSpeed = v;
            if (this.isSpeed) {
              this.radomNum = 5;
            } else {
              this.radomNum = 10;
            }
          }
        }]);
        return discoRoll;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pb", [_dec2], {
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

System.register("chunks:///_virtual/dragonAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a957e5At2JILrpQeK8CruvI", "dragonAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragonAudio = exports('dragonAudio', (_dec = ccclass('dragonAudio'), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonAudio, _Component);
        function dragonAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "stopWheel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinEf", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickstart", _descriptor3, _assertThisInitialized(_this));
          _this.urlArr = ["sound/bgm_mg_loop", "sound/bgm_fs_loop", "sound/bgm_bigwin"];
          _this.url = "audio/bgm_mg_loop";
          return _this;
        }
        var _proto = dragonAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.playBgm(0);
        };
        _proto.stopbigwinmain = function stopbigwinmain() {
          this.playBgm(0);
        };
        _proto.stopAudio = function stopAudio() {
          tgx.AudioMgr.inst.audio.stopAll();
        };
        _proto.playBgm = function playBgm(index) {
          // AudioMgr.inst.stop();
          // AudioMgr.inst.playMusicLoop(this.urlArr[index],EGameName.dragon);
          tgx.AudioMgr.inst.audio.playMusicLoop(this.url, ModuleDef.SLOTS_DRAGON);
        };
        _proto.playclickopen = function playclickopen() {};
        _proto.playclickclose = function playclickclose() {};
        _proto.playStopWheel = function playStopWheel() {
          this.playEf(this.stopWheel);
        };
        _proto.playBW = function playBW() {
          this.playEf(this.bigWinEf);
        };
        _proto.playEf = function playEf(clip) {
          // AudioMgr.inst.playEffect(clip);
          tgx.AudioMgr.inst.audio.playEffect(clip);
        };
        _proto.playclickstart = function playclickstart() {
          this.playEf(this.clickstart);
        };
        _proto.clearAll = function clearAll() {
          tgx.AudioMgr.inst.audio.clearAll();
        };
        return dragonAudio;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stopWheel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bigWinEf", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "clickstart", [_dec4], {
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

System.register("chunks:///_virtual/dragonDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, dragon;
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
      dragon = module.dragon;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "f545bfQPNpK/ZAC3gVQ10zg", "dragonDetail", undefined);
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
        3: 25
      },
      // hand cards no fix line 4
      {
        3: 50
      },
      // hand cards no fix line 5
      {
        3: 100
      },
      // hand cards no fix line 6
      {
        3: 0
      } // hand cards no fix line 7
      ];

      var dragonDetail = exports('dragonDetail', (_dec = ccclass('dragonDetail'), _dec2 = property({
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
        _inheritsLoose(dragonDetail, _Component);
        function dragonDetail() {
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
        var _proto = dragonDetail.prototype;
        _proto.init = function init(idx, isLeft) {
          if (dragon.detail) {
            dragon.detail.node.active = false;
          }
          dragon.detail = this;
          var id = idx;
          this.roleSpriteNode.children[idx - 1].active = true;
          for (var i in GAME_COMBINATIONS[id - 1]) {
            this.numNode.children[1].getComponent(Label).string = GAME_COMBINATIONS[idx - 1][i];
          }
          if (idx == 7) {
            this.BGNode.w = 540;
            this.BGNode2.w = 540;
            this.BGNode.h = 280;
            this.BGNode2.h = 280;
            if (!isLeft) {
              this.BGNode.active = false;
              this.BGNode2.active = true;
              this.BGNode.x = -85;
              this.BGNode2.x = -340;
              this.numNode.x = -250;
              this.specialNode.x = -340;
              this.roleSpriteNode.x = -40;
            } else {
              this.BGNode.x = -130;
              this.BGNode2.x = -270;
              this.numNode.x = 230;
              this.specialNode.x = 100;
              this.roleSpriteNode.x = -21;
            }
          } else {
            this.BGNode.w = 428;
            this.BGNode2.w = 428;
            this.BGNode.h = 238;
            this.BGNode2.h = 238;
            if (!isLeft) {
              this.BGNode.x = -105;
              this.BGNode2.x = -260;
              this.BGNode.active = false;
              this.BGNode2.active = true;
              this.numNode.x = -180;
              this.specialNode.x = -340;
              this.roleSpriteNode.x = -40;
            } else {
              this.BGNode.x = -110;
              this.BGNode2.x = -280;
              this.numNode.x = 160;
              this.specialNode.x = 100;
              this.roleSpriteNode.x = -21;
            }
          }
        };
        _proto.node_onclick = function node_onclick() {
          dragon.node.deskMask.active = false;
          this.node.destroy();
          dragon.detail = null;
        };
        return dragonDetail;
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

System.register("chunks:///_virtual/dragonMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts', './dragonSlotCtrl.ts', './discoRoll.ts', './topRoll.ts', './discoNum.ts', './Num.ts', './NetGameServer.ts', './SubGameDef.ts', './dataChange.ts', './UserMgr.ts', './RoomMgr.ts', './UIHelp.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, Animation, sp, Vec3, find, Label, macro, tween, instantiate, UITransform, Tween, Component, dragon, dragonSlotCtrl, discoRoll, topRoll, discoNum, Num, gameNet, SubGameDef, dataChange, UserMgr, RoomMgr, UIHelp, UIhelpParam, LanguageData;
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
      Animation = module.Animation;
      sp = module.sp;
      Vec3 = module.Vec3;
      find = module.find;
      Label = module.Label;
      macro = module.macro;
      tween = module.tween;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      dragon = module.dragon;
    }, function (module) {
      dragonSlotCtrl = module.dragonSlotCtrl;
    }, function (module) {
      discoRoll = module.discoRoll;
    }, function (module) {
      topRoll = module.topRoll;
    }, function (module) {
      discoNum = module.discoNum;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "e794502Li9B7LHl/ESI2NAC", "dragonMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var animIndex = 0;
      var dragonMain = exports('dragonMain', (_dec = ccclass('dragonMain'), _dec2 = property({
        type: [Prefab],
        tooltip: "滚轮角色Pb"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "角色详情Pb"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "顶部金色数字"
      }), _dec5 = property({
        type: Node,
        tooltip: "中奖线特效"
      }), _dec6 = property({
        type: Node,
        tooltip: "中奖数字特效"
      }), _dec7 = property({
        type: Node,
        tooltip: "中奖光特效"
      }), _dec8 = property({
        type: [Node],
        tooltip: "旋转光特效"
      }), _dec9 = property({
        type: Node,
        tooltip: "中奖牌特效"
      }), _dec10 = property({
        type: Node,
        tooltip: "中奖图层遮罩"
      }), _dec11 = property({
        type: Node,
        tooltip: "游戏背景节点"
      }), _dec12 = property({
        type: Node,
        tooltip: "免费摇奖背景节点"
      }), _dec13 = property({
        type: Node,
        tooltip: "开始免费摇奖节点"
      }), _dec14 = property({
        type: Node,
        tooltip: "结束免费摇奖节点"
      }), _dec15 = property({
        type: Node,
        tooltip: "滚屏提示"
      }), _dec16 = property({
        type: Node,
        tooltip: "中奖提示"
      }), _dec17 = property({
        type: Node,
        tooltip: "中奖背景1"
      }), _dec18 = property({
        type: Node,
        tooltip: "中奖背景2"
      }), _dec19 = property({
        type: Node,
        tooltip: "中奖背景3"
      }), _dec20 = property({
        type: Node,
        tooltip: "爆金币"
      }), _dec21 = property({
        type: Node,
        tooltip: "金龙动画"
      }), _dec22 = property({
        type: Animation,
        tooltip: ""
      }), _dec23 = property({
        type: discoRoll,
        tooltip: "discoRoll"
      }), _dec24 = property({
        type: topRoll,
        tooltip: "topRoll"
      }), _dec25 = property({
        type: Prefab,
        tooltip: ""
      }), _dec26 = property({
        type: sp.Skeleton,
        tooltip: ""
      }), _dec27 = property({
        type: Node,
        tooltip: ""
      }), _dec28 = property({
        type: Node,
        tooltip: "slotCtrl"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonMain, _Component);
        function dragonMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rolePb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventNumPb", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNum", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLight", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectSpinLightArr", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BgNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBgNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBeginNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeEndNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win1BG", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win2BG", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win3BG", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinBoomEffect", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragonAnim", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballAnime", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "discoRoll", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topRoll", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particle_wild", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragonFlySke", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deskMask", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor27, _assertThisInitialized(_this));
          /**延迟点击 */
          _this.delayClick = false;
          _this.audio = null;
          _this.slotCtrl = null;
          _this.freeGameCoin = 0;
          _this.bIsFreeGame = false;
          _this.singleLineWinNum = null;
          _this.particle_node = null;
          _this.scaleBox1 = null;
          _this.scaleBox2 = null;
          _this.gameMain = null;
          _this.gameLineBg = null;
          _this.ani = null;
          _this.stateCallBackBn = false;
          _this.discoNumAimP = new Vec3(0, -65);
          _this.reAimCoin = 0;
          _this.reAddCoin = 0;
          _this.reAddOnce = 0;
          _this.bigBn = false;
          _this.superBn = false;
          _this.megaBn = false;
          _this.topNumPos = new Vec3(0, 473);
          _this.aimNumArr = [];
          _this.completeBn = false;
          _this.static_list = void 0;
          return _this;
        }
        var _proto = dragonMain.prototype;
        _proto.onLoad = function onLoad() {
          dragon.node = this;
          // dragon.musicControl = AudioMgr.inst.musicControl;
          this.slotCtrl = this.slotCtrlNode.getComponent(dragonSlotCtrl);
          this.slotCtrl.initBetContent(dragon.BETNUM, dragon.BET, dragon.LINES);
          this.audio = this.node.getComponent('dragonAudio');
          dragon.auto = false;
          dragon.autoTimes = 0;
          dragon.status = 0;
          dragon.rollIndex = 0;
          dragon.lotteryRes = null;
          dragon.money = UserMgr.inst.coin;
          this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.money);
          this.freeGameCoin = 0;
          this.bIsFreeGame = false;
          this.singleLineWinNum = find("singleLineWinNum", this.node).getComponent(Label);
          this.particle_node = find("particle_node", this.node);
          this.scaleBox1 = find("Scale_box", this.BgNode);
          this.scaleBox2 = find("Scale_box", this.freeBgNode);
          this.gameMain = find("Game_main", this.node);
          this.gameLineBg = find("game_line_bg", this.node);
        };
        _proto.start = function start() {
          var _this2 = this;
          this.initWheel();
          this.slotCtrl.setSpinAnim(0);
          this.slotCtrl.bindBet();
          //监听龙动画播放
          this.ani = this.dragonAnim.getComponent(sp.Skeleton);
          this.ani.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case "idle2":
                _this2.ani.setAnimation(0, "idle", true);
                break;
              case "idle3":
                _this2.ani.setAnimation(0, "idle", true);
                break;
              case "idle4":
                _this2.ani.setAnimation(0, "idle", true);
                break;
              case "win_med":
                _this2.ani.setAnimation(0, "idle", true);
                break;
              case "win_big":
                _this2.ani.setAnimation(0, "idle", true);
                break;
              case "tease_start":
                _this2.dragonAnim.active = false;
                _this2.ani.clearTrack(0);
                _this2.ani.setToSetupPose();
                _this2.ani.setAnimation(0, "idle", true);
                break;
            }
          });
          this.schedule(this.playAniLoop, 15, macro.REPEAT_FOREVER);
        };
        _proto.playAniLoop = function playAniLoop() {
          if (this.bIsFreeGame || this.delayClick) {
            return;
          }
          var r = Math.random();
          if (r < 0.4) {
            this.ani.setAnimation(0, "idle2", false);
          } else if (r < 0.7) {
            this.ani.setAnimation(0, "idle3", false);
          } else {
            this.ani.setAnimation(0, "idle4", false);
          }
        };
        _proto.update = function update() {
          this.scaleBox1.y = this.gameMain.y;
          this.scaleBox2.y = this.gameMain.y;
          this.gameLineBg.y = this.gameMain.y;
          this.effectCard.y = this.gameMain.y;
          this.effectLine.y = this.gameMain.y;
          this.effectLight.y = this.gameMain.y;
          this.scaleBox1.scale = this.gameMain.scale;
          this.scaleBox2.scale = this.gameMain.scale;
          this.gameLineBg.scale = this.gameMain.scale;
          this.effectCard.scale = this.gameMain.scale;
          this.effectLine.scale = this.gameMain.scale;
          this.effectLight.scale = this.gameMain.scale;
        };
        _proto.initWheel = function initWheel() {
          for (var i = 0; i < dragon.wheelList.length; i++) {
            dragon.wheelList[i].initWheel();
          }
        };
        _proto.onCLick = function onCLick(event, args) {
          var _this3 = this;
          switch (args) {
            case "roll":
              if (this.bIsFreeGame || this.delayClick || dragon.rollEnable == false) {
                return;
              }
              if (!dragon.auto) {
                this.delayClick = true;
                this.scheduleOnce(function () {
                  _this3.delayClick = false;
                }, 0.5);
                if (dragon.status == 0) {
                  dragon.status = 2;
                  this.sendRoll();
                } else if (dragon.status == 1) {
                  this.slotCtrl.setSpinAnim(3);
                  this.stopImmediately();
                }
              }
              break;
            case "add":
              if (dragon.auto) {
                return;
              }
              dragon.sumIdx += 1;
              dragon.sumIdx = this.slotCtrl.updateBet(dragon.sumIdx) == 0 ? dragon.sumIdx - 1 : dragon.sumIdx;
              tween(this.slotCtrl.lblCurBet.node).to(0.1, {
                scale: new Vec3(1.2, 1.2)
              }).to(0.1, {
                scale: new Vec3(1, 1)
              }).start();
              break;
            case "dec":
              if (dragon.auto) {
                return;
              }
              dragon.sumIdx -= 1;
              dragon.sumIdx = this.slotCtrl.updateBet(dragon.sumIdx) == 0 ? dragon.sumIdx + 1 : dragon.sumIdx;
              tween(this.slotCtrl.lblCurBet.node).to(0.1, {
                scale: new Vec3(1.2, 1.2)
              }).to(0.1, {
                scale: new Vec3(1, 1)
              }).start();
              break;
            case "closeBigWin":
              this.audio.playBgm(0);
              break;
            case "exitGame":
              this.onBtnExitClicked();
              break;
            case "lastmoney":
              dragon.lastmoneyPanel.showPanel();
              break;
            // case "help":
            //     dragon.rulePanel.showPanel();
            //     break;
            // case "pay":
            //     dragon.payPanel.showPanel();
            //     break;
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
                    dragon.node.close();
                    RoomMgr.inst.exitRoom();
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.startAuto = function startAuto(n) {
          if (this.bIsFreeGame || this.delayClick) {
            return;
          }
          if (dragon.status == 0) {
            dragon.auto = true;
            dragon.autoTimes = n;
            this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            if (n > 999) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
            } else if (n > 99) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
            } else {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
            }
            this.slotCtrl.Btn_stopAuto.active = dragon.auto;
            this.slotCtrl.Btn_start.active = !this.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1);
          }
        };
        _proto.stopAuto = function stopAuto() {
          dragon.auto = false;
          dragon.autoTimes = 0;
        };
        _proto.stateCallBack = function stateCallBack() {
          var _this4 = this;
          var st = 0;
          for (var i in dragon.wheelList) {
            if (dragon.wheelList[i].status) {
              st = 1;
              break;
            }
          }
          dragon.status = st;
          if (dragon.status == 0) {
            if (this.stateCallBackBn) {
              return;
            }
            this.stateCallBackBn = true;
            this.scheduleOnce(function () {
              _this4.stateCallBackBn = false;
            }, 1);
            if (dragon.lotteryRes.winscore > 0) {
              this.slotCtrl.setSpinAnim(3);
            } else {
              this.slotCtrl.setSpinAnim(2);
              for (var _i = 0; _i < 9; _i++) {
                this.showAnim(_i % 3, parseInt(_i / 3 + ""), "nowin");
              }
            }
            for (var _i2 = 0; _i2 < 9; _i2++) {
              var node = dragon.wheelList[_i2 % 3].rolePbList[Math.floor(_i2 / 3) + 1];
              if (node.name == "007") {
                var par = instantiate(this.particle_wild);
                var transForm = node.getComponent(UITransform);
                var pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
                transForm = this.particle_node.getComponent(UITransform);
                var p = transForm.convertToNodeSpaceAR(pos);
                par.position = p;
                par.parent = this.particle_node;
                var tarpos;
                if (this.bIsFreeGame) {
                  var _this$topRoll$node$pa;
                  transForm = (_this$topRoll$node$pa = this.topRoll.node.parent) == null ? void 0 : _this$topRoll$node$pa.getComponent(UITransform);
                  pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
                  transForm = this.particle_node.getComponent(UITransform);
                  tarpos = transForm.convertToNodeSpaceAR(pos);
                } else {
                  transForm = this.ballAnime.node.parent.getChildByName("ui_discoball_mask_00").getComponent(UITransform);
                  pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
                  transForm = this.particle_node.getComponent(UITransform);
                  tarpos = transForm.convertToNodeSpaceAR(pos);
                }
                tween(par).to(0.6, {
                  position: tarpos
                }).call(function () {
                  par.parent = null;
                  par.destroy();
                  var ball = _this4.ballAnime.node.getChildByName("ui_discoball");
                  tween(ball).to(0.1, {
                    scale: new Vec3(1.1, 1.1)
                  }).to(0.1, {
                    scale: new Vec3(1, 1)
                  }).start();
                }).start();
              }
            }
            // if (this.bIsFreeGame) {
            //     this.freeGameCoin += dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].winscore;
            // }
            this.scheduleOnce(function () {
              _this4.playWinAnim();
            }, 1);
          }
        };
        _proto.playWinAnim = function playWinAnim() {
          var allLine = [];
          var nWinCards;
          var lines;
          var win = 0;
          var mul = 0;
          if (this.bIsFreeGame) {
            nWinCards = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].nWinCards;
            lines = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].nWinLinesDetail;
            win = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].winscore;
            var fMultiple = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].fMultiple;
            if (fMultiple && fMultiple.length > 0) {
              for (var i = 0; i < fMultiple.length; i++) {
                mul += fMultiple[i];
              }
            }
          } else {
            nWinCards = dragon.lotteryRes.nWinCards;
            lines = dragon.lotteryRes.nWinLinesDetail;
            win = dragon.lotteryRes.winscore;
            mul = dragon.lotteryRes.fMultiple;
          }
          if (win <= 0) {
            this.rollNext();
          }
          for (var _i3 in nWinCards) {
            if (nWinCards[_i3]) {
              allLine.push(_i3);
            }
          }
          var list = [allLine].concat(lines);
          var animIndex = 0;
          if (!!!list[animIndex] || list[animIndex].length == 0) ;else {
            if (dragon.auto && dragon.autoTimes > 0) {
              this.static_list = list;
              this.schedule(this.repeatLine, 2, list.length, 0.01);
            } else {
              this.static_list = list;
              this.schedule(this.repeatLine, 2, macro.REPEAT_FOREVER, 0.01);
            }
          }
        };
        _proto.discoNumFly = function discoNumFly(node, pb) {
          var _this5 = this;
          this.aimNumArr = [];
          var transForm = node.getComponent(UITransform);
          var pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
          transForm = this.node.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(pos);
          var item = instantiate(pb);
          item.parent = this.node;
          item.scale = node.scale;
          item.position = p;
          item.getComponent(discoNum).num = node.getComponent(discoNum).num;
          tween(item).to(0.3, {
            y: item.y + 8,
            scale: new Vec3(0.8, 0.8)
          }).delay(0.2).to(0.3, {
            position: this.discoNumAimP,
            scale: new Vec3(0, 0)
          }).call(function () {
            item.parent = null;
            _this5.createAim(item, _this5.discoNumAimP);
          }).start();
        };
        _proto.playAnimWinOver = function playAnimWinOver() {
          var _this6 = this;
          this.scheduleOnce(function () {
            _this6.rollNext();
          }, 2);
        };
        _proto.rollNext = function rollNext() {
          var _this7 = this;
          if (this.bIsFreeGame) {
            var resArr = dragon.lotteryRes.getBigWin.res_list;
            dragon.rollIndex++;
            var lastNum = resArr.length - 1 - dragon.rollIndex;
            if (lastNum >= 0) {
              this.topRoll.startRoll();
              if (lastNum > 0) {
                this.slotCtrl.Btn_free.getChildByName('auto_lab').getComponent(Label).string = lastNum + "";
              } else {
                this.slotCtrl.Btn_free.getChildByName('auto_lab').active = false;
                this.slotCtrl.Btn_free.getChildByName('last_fs').active = true;
              }
              this.initRoll();
              for (var i in dragon.wheelList) {
                dragon.wheelList[i].rollLoop();
              }
              var loopT = 0;
              if (this.slotCtrl.isSpeed) {
                loopT = 0;
              } else {
                loopT = 0.6;
              }
              this.scheduleOnce(function () {
                _this7.roll(dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].nHandCards);
              }, loopT);
            } else {
              this.showResult();
            }
          } else {
            this.rollComplete();
          }
        };
        _proto.showResult = function showResult() {
          var end = find("slots_bg_fs_end", this.node);
          end.active = true;
          var ani = end.getChildByName("title").getComponent(Animation);
          ani.play("result");
          this.playResultCoin(dragon.lotteryRes.winscore);
        };
        _proto.hideResult = function hideResult() {
          var end = find("slots_bg_fs_end", this.node);
          end.active = false;
          this.slotCtrl.betting_panel.active = true;
          this.slotCtrl.Btn_free.active = false;
          this.bgBack();
          find("top_line", this.freeBgNode).active = false;
          find("com_dragonanddiscball", this.node).active = true;
          this.BgNode.active = true;
          var state = this.ballAnime.getState("ui_discoball_3");
          state.time = 0;
          state.sample();
          this.stopWin1BG();
          this.dragonFlySke.node.active = false;
          var ballm = this.ballAnime.node.parent.getChildByName("ui_discoball_mask_00");
          ballm.active = true;
          this.dragonAnim.active = true;
          this.ani.setAnimation(0, "idle", true);
          this.hideWinNode();
          this.rollComplete();
        };
        _proto.playResultCoin = function playResultCoin(coin) {
          this.reAimCoin = coin;
          this.reAddCoin = 0;
          this.reAddOnce = this.reAimCoin / 100;
          var end = find("slots_bg_fs_end", this.node);
          var label = find("lbl_coin", end).getComponent(Label);
          label.string = Num.exchangeToThousands(dragon.exchangeRate, this.reAddCoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
        };
        _proto.coinOneChange = function coinOneChange() {
          this.reAddCoin += this.reAddOnce;
          if (this.reAddCoin >= this.reAimCoin) {
            this.playCoinOver();
          } else {
            var end = find("slots_bg_fs_end", this.node);
            var label = find("lbl_coin", end).getComponent(Label);
            label.string = Num.exchangeToThousands(dragon.exchangeRate, this.reAddCoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          var end = find("slots_bg_fs_end", this.node);
          var label = find("lbl_coin", end).getComponent(Label);
          label.string = Num.exchangeToThousands(dragon.exchangeRate, this.reAimCoin);
          var ani = end.getChildByName("title").getComponent(Animation);
          ani.play("resultEnd");
          var boom = end.getChildByName("boom").getComponent(Animation);
          boom.play();
          var btn = end.getChildByName("tw_button");
          btn.active = true;
          this.scheduleOnce(this.onClickResult, 5);
        };
        _proto.onClickResult = function onClickResult() {
          this.bIsFreeGame = false;
          this.hideResult();
        };
        _proto.showWin = function showWin() {
          var lotteryRes;
          if (this.bIsFreeGame) {
            lotteryRes = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex];
          } else {
            lotteryRes = dragon.lotteryRes;
          }
          if (lotteryRes.winscore > 0) {
            this.audio.playBW();
            this.showTotalWinNode();
            if (lotteryRes.winscore >= dragon.betSum * 5) {
              this.slotCtrl.playBigWinCoin(lotteryRes.winscore);
            } else {
              this.slotCtrl.playAnimWin(0, lotteryRes.winscore);
              this.totalEffect();
              // this.rollComplete();
            }
          }
        };

        _proto.totalEffect = function totalEffect() {
          var _this$coinBoomEffect$;
          (_this$coinBoomEffect$ = this.coinBoomEffect.getComponent(Animation)) == null || _this$coinBoomEffect$.play();
          if (dragon.lotteryRes.winscore < dragon.betSum * 3) {
            this.ani.setAnimation(0, "win_med", false);
            if (this.bIsFreeGame) {
              this.dragonFlySke.clearTrack(0);
              this.dragonFlySke.setToSetupPose();
              this.dragonFlySke.setAnimation(0, "win2", false);
              this.dragonFlySke.addAnimation(0, "idle", true);
            }
          } else {
            this.ani.setAnimation(0, "win_big", false);
            if (this.bIsFreeGame) {
              this.dragonFlySke.clearTrack(0);
              this.dragonFlySke.setToSetupPose();
              this.dragonFlySke.setAnimation(0, "win3", false);
              this.dragonFlySke.addAnimation(0, "idle", true);
            }
          }
        };
        _proto.showWinNode = function showWinNode() {
          this.tipNode.active = false;
          this.winNode.active = true;
          this.winNode.children[1].active = true;
          this.winNode.children[2].active = false;
        };
        _proto.showTotalWinNode = function showTotalWinNode() {
          this.tipNode.active = false;
          this.winNode.active = true;
          this.winNode.children[1].active = false;
          this.winNode.children[2].active = true;
        };
        _proto.hideWinNode = function hideWinNode() {
          this.tipNode.active = true;
          this.winNode.active = false;
          this.win2BG.active = false;
          this.win3BG.active = false;
        };
        _proto.playWin1BG = function playWin1BG() {
          var ani = this.win1BG.getComponent(Animation);
          ani.play();
        };
        _proto.stopWin1BG = function stopWin1BG() {
          var ani = this.win1BG.getComponent(Animation);
          var state = ani.getState("winBg1");
          state.time = 0;
          state.sample();
        };
        _proto.showWinTotal = function showWinTotal() {
          this.winNode.children[1].active = false;
          this.winNode.children[2].active = true;
        }

        /**显示winbg，只有计算共赢得时才展示 */;
        _proto.showWinBg = function showWinBg(winNum) {
          if (winNum > dragon.betSum * 3 && winNum < dragon.betSum * 5) {
            this.win2BG.active = true;
            this.win2BG.opacity = 0;
            tween(this.win2BG).to(1, {
              opacity: 255
            }).start();
          } else if (winNum >= dragon.betSum * 5) {
            this.win3BG.active = true;
            this.win3BG.opacity = 0;
            tween(this.win3BG).to(1, {
              opacity: 255
            }).start();
          } else {
            this.playWin1BG();
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          var _this8 = this;
          this.showTotalWinNode();
          var lotteryRes;
          if (this.bIsFreeGame) {
            lotteryRes = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex];
          } else {
            lotteryRes = dragon.lotteryRes;
          }
          this.showWinBg(lotteryRes.winscore);
          this.slotCtrl.playAnimWin(-1, lotteryRes.winscore);
          this.scheduleOnce(function () {
            _this8.rollNext();
          }, 2);
        };
        _proto.showAnim = function showAnim(cols, index, skeConfig) {
          var targetIdx = index + 1;
          dragon.wheelList[cols].rolePbList[targetIdx].opacity = 0;
          if (!skeConfig || skeConfig == "win") {
            var nodeList = this.effectLight.children;
            nodeList[cols * 3 + index].active = true;
          }
          var nodeList2 = this.effectCard.children;
          var _loop = function _loop(i) {
              node = nodeList2[cols * 3 + index].children[i];
              node.active = i == dragon.wheelList[cols].roleIdList[targetIdx] - 1;
              if (node.active) {
                ani = node.getComponent(sp.Skeleton);
                ani.setCompleteListener(function (event) {
                  switch (event.animation.name) {
                    case "win":
                      if (i == 6) {
                        ani.setAnimation(0, "idle", true);
                      } else {
                        ani.setAnimation(0, "win_idle", true);
                      }
                      break;
                  }
                });
                ani.setAnimation(0, "win", false);
              }
            },
            node,
            ani;
          for (var i = 0; i < nodeList2[cols * 3 + index].children.length; i++) {
            _loop(i);
          }
        };
        _proto.closeAnim = function closeAnim(cols, index) {
          var targetIdx = index + 1;
          dragon.wheelList[cols].rolePbList[targetIdx].opacity = 255;
          var nodeList = this.effectLight.children;
          nodeList[cols * 3 + index].active = false;
          var nodeList2 = this.effectCard.children;
          for (var i = 0; i < nodeList2[cols * 3 + index].children.length; i++) {
            nodeList2[cols * 3 + index].children[i].active = false;
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
          var _this9 = this;
          if (!dragon.auto) {
            dragon.rollEnable = true;
          }
          dragon.status = 1;
          var line = [];
          for (var i = 0; i < 3; i++) {
            line[i] = [];
          }
          for (var _i4 in list) {
            var index = Number(_i4);
            line[index % 3][2 - Math.floor(index / 3)] = list[_i4];
          }
          this.scheduleOnce(function () {
            var _this9$effectSpinLigh;
            (_this9$effectSpinLigh = _this9.effectSpinLightArr[0].getComponent(Animation)) == null || _this9$effectSpinLigh.play();
          }, 0);
          this.scheduleOnce(function () {
            var _this9$effectSpinLigh2;
            (_this9$effectSpinLigh2 = _this9.effectSpinLightArr[1].getComponent(Animation)) == null || _this9$effectSpinLigh2.play();
          }, 0.2);
          this.scheduleOnce(function () {
            var _this9$effectSpinLigh3;
            (_this9$effectSpinLigh3 = _this9.effectSpinLightArr[2].getComponent(Animation)) == null || _this9$effectSpinLigh3.play();
          }, 0.4);
          if (dragon.lotteryRes.getBigWin.bFlag) {
            this.topRoll.isSpeed = this.slotCtrl.isSpeed;
            var lotteryRes = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex];
            var mul = 0;
            for (var _i5 = 0; _i5 < lotteryRes.fMultiple.length; _i5++) {
              mul += lotteryRes.fMultiple[_i5];
            }
            if (dragon.rollIndex == 0) {
              this.bgChange();
              this.scheduleOnce(function () {
                _this9.eventStartRoll(line);
                if (lotteryRes.winscore > 0) {
                  _this9.slotCtrl.playAnimWin(-1, lotteryRes.winscore / mul);
                  _this9.showWinNode();
                }
              }, 6);
            } else {
              this.eventStartRoll(line);
              if (lotteryRes.winscore > 0) {
                this.slotCtrl.playAnimWin(-1, lotteryRes.winscore / mul);
                this.showWinNode();
              }
            }
          } else {
            for (var _i6 in dragon.wheelList) {
              var _dragon$wheelList$_i;
              (_dragon$wheelList$_i = dragon.wheelList[_i6]).startRoll.apply(_dragon$wheelList$_i, line[_i6]);
            }
            this.discoRoll.isSpeed = this.slotCtrl.isSpeed;
            this.discoRoll.endRoll(dragon.lotteryRes.fMultiple);
            if (dragon.lotteryRes.winscore > 0) {
              this.slotCtrl.playAnimWin(-1, dragon.lotteryRes.winscore / dragon.lotteryRes.fMultiple);
              this.showWinNode();
            }
          }
        };
        _proto.eventStartRoll = function eventStartRoll(line) {
          for (var i in dragon.wheelList) {
            var _dragon$wheelList$i;
            (_dragon$wheelList$i = dragon.wheelList[i]).startRoll.apply(_dragon$wheelList$i, line[i]);
          }
          this.topRoll.endRoll(dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].fMultiple);
        };
        _proto.topNumFly = function topNumFly(nodeArr, pb) {
          var _this10 = this;
          this.aimNumArr = [];
          var _loop2 = function _loop2() {
              var node = nodeArr[i];
              var transForm = node.getComponent(UITransform);
              pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
              transForm = _this10.node.getComponent(UITransform);
              var p = transForm.convertToNodeSpaceAR(pos);
              var item = instantiate(pb);
              item.parent = _this10.node;
              item.scale = node.scale;
              item.position = p;
              item.getComponent(discoNum).num = node.getComponent(discoNum).num;
              tween(item).to(0.3, {
                y: item.y + 20,
                scale: new Vec3(0.8, 0.8)
              }).delay(0.2 + i * 0.1).to(0.5, {
                position: _this10.topNumPos,
                scale: new Vec3(0, 0)
              }).call(function () {
                item.parent = null;
                _this10.createAim(item, _this10.topNumPos);
              }).start();
            },
            pos;
          for (var i = 0; i < nodeArr.length; i++) {
            _loop2();
          }
        };
        _proto.createAim = function createAim(node, sPos) {
          var _this11 = this;
          var aimNumLight = find("aimNumLight", this.node);
          aimNumLight.active = true;
          aimNumLight.position = sPos;
          var aimNumLightAni = aimNumLight.children[0].getComponent(Animation);
          aimNumLightAni.play();
          var aim = instantiate(this.eventNumPb);
          var num = node.getComponent(discoNum).num;
          if (this.aimNumArr.length > 0) {
            var pre = this.aimNumArr[this.aimNumArr.length - 1];
            var str = pre.getComponent(Label).string;
            num += Number(str.split("x")[1]);
            Tween.stopAllByTarget(pre);
            tween(pre).to(0.3, {
              scale: new Vec3(6, 6),
              opacity: 0
            }).start();
          }
          this.aimNumArr.push(aim);
          aim.parent = this.node;
          aim.scale = new Vec3(0, 0);
          aim.position = sPos;
          var lab = aim.getComponent(Label);
          lab.string = "x" + num;
          var transForm = this.winNode.getComponent(UITransform);
          var pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
          transForm = this.node.getComponent(UITransform);
          var aimP = transForm.convertToNodeSpaceAR(pos);
          if (this.bIsFreeGame) {
            dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex];
          } else {
            dragon.lotteryRes;
          }
          tween(aim).to(0.3, {
            scale: new Vec3(6, 6)
          }).delay(1).call(function () {
            aimNumLight.active = false;
          }).to(0.5, {
            scale: new Vec3(4, 4),
            opacity: 100,
            position: aimP
          }).call(function () {
            aim.parent = null;
            _this11.showWin();
          }).start();
        };
        _proto.bgChange = function bgChange() {
          var _this12 = this;
          this.ani.clearTrack(0);
          this.ani.setToSetupPose();
          this.ani.setAnimation(0, "tease_start", false);
          this.scheduleOnce(function () {
            _this12.ballAnime.on("finished", function () {
              _this12.showLight();
              _this12.playDragonFlyAni();
            });
            _this12.ballAnime.play("ui_discoball_3");
            var ballm = _this12.ballAnime.node.parent.getChildByName("ui_discoball_mask_00");
            ballm.active = false;
          }, 0.1);
          tween(find("Game_main", this.node)).to(1, {
            scale: new Vec3(0.9, 0.9)
          }).delay(0.4).call(function () {
            _this12.freeBgNode.active = true;
            // (find("bns_discoball_00", this.freeBgNode) as Node).active = false;
            _this12.dragonFlySke.node.active = false;
            find("top_line", _this12.freeBgNode).active = false;
          }).delay(1.2).to(1, {
            y: -250
          }).call(function () {
            _this12.dragonFly();
          }).start();
        };
        _proto.bgBack = function bgBack() {
          var gameMain = find("Game_main", this.node);
          gameMain.y = 0;
          gameMain.scale = new Vec3(1, 1);
        };
        _proto.ballAnimePlay = function ballAnimePlay() {
          this.ballAnime.play("ui_discoball_00");
        };
        _proto.ballAnimeStop = function ballAnimeStop() {
          this.ballAnime.stop();
        };
        _proto.closeShine = function closeShine() {
          for (var i = 0; i < this.effectLine.children.length; i++) {
            this.effectLine.children[i].active = false;
          }
          for (var _i7 = 0; _i7 < this.effectNum.children.length; _i7++) {
            this.effectNum.children[_i7].active = false;
          }
          for (var _i8 = 0; _i8 < this.effectLight.children.length; _i8++) {
            this.effectLight.children[_i8].active = false;
          }
          this.singleLineWinNum.string = "";
          this.maskNode.active = false;
        };
        _proto.sendRoll = function sendRoll() {
          this.discoRoll.startRoll();
          if (dragon.detail) {
            this.deskMask.active = false;
            dragon.detail.node.active = false;
            dragon.detail = null;
          }
          this.initRoll();
          dragon.autoTimes = dragon.autoTimes > 0 ? dragon.autoTimes - 1 : 0;
          if (dragon.autoTimes == 0) {
            dragon.auto = false;
          }
          this.slotCtrl.setSpinAnim(1);
          var autoTimesLab = this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = dragon.autoTimes + "";
          this.audio.playclickstart();
          if (dragon.autoTimes > 999) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
          } else if (dragon.autoTimes > 99) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
          } else {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
          }
          for (var i in dragon.wheelList) {
            dragon.wheelList[i].rollLoop();
          }
          this.sendLottery();
          // (this.linObj.getComponent("dragonLineObj") as dragonLineObj).setPara(-16, 0, 0);
          // (this.linObj2.getComponent("dragonLineObj") as dragonLineObj).setPara(-16, 0, 0);
        };

        _proto.initRoll = function initRoll() {
          var _this$win1BG$getCompo;
          (_this$win1BG$getCompo = this.win1BG.getComponent(Animation)) == null || _this$win1BG$getCompo.stop();
          this.win2BG.active = false;
          this.win3BG.active = false;
          this.particle_node.removeAllChildren();
          for (var i = 0; i < this.effectCard.children.length; i++) {
            for (var j = 0; j < this.effectCard.children[i].children.length; j++) {
              this.effectCard.children[i].children[j].active = false;
            }
          }
          for (var _i9 = 0; _i9 < dragon.wheelList.length; _i9++) {
            for (var _j = 0; _j < dragon.wheelList[_i9].rolePbList.length; _j++) {
              var node = dragon.wheelList[_i9].rolePbList[_j];
              node.opacity = 255;
            }
          }
          this.singleLineWinNum.string = "";
          this.tipNode.active = true;
          this.winNode.active = false;
          this.unschedule(this.repeatLine);
          this.closeShine();
          this.slotCtrl.unscheduleAllCallbacks();
          this.stopWin1BG();
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.playSlots(SubGameDef.SLOTS_DRAGON, dragon.betSum.toString());
                case 2:
                  retSpin = _context2.sent;
                  console.log('retSpin is:', retSpin);
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
        _proto.lotteryBack = function lotteryBack(data) {
          var _this13 = this;
          // data = {
          //     "code": 0,
          //     "err_msg": "",
          //     "userscore": 10482274,
          //     "winscore": 5,
          //     "nBet": 15,
          //     "isAllWin": false,
          //     "nHandCards": [
          //         5,
          //         7,
          //         7,
          //         3,
          //         5,
          //         6,
          //         6,
          //         3,
          //         3
          //     ],
          //     "nWinLines": [
          //         1
          //     ],
          //     "nWinLinesDetail": [
          //         [
          //             0,
          //             1,
          //             2
          //         ]
          //     ],
          //     "nWinDetail": [
          //         750
          //     ],
          //     "nWinCards": [
          //         true,
          //         true,
          //         true,
          //         false,
          //         false,
          //         false,
          //         false,
          //         false,
          //         false
          //     ],
          //     "goldList": [],
          //     "getBigWin": {
          //         "bFlag": false,
          //         "isStart": false,
          //         "list": [],
          //         "card": 0,
          //         "res_list": []
          //     },
          //     "getFreeTime": {
          //         "bFlag": false,
          //         "nFreeTime": 0
          //     },
          //     "fMultiple": 10
          // }
          if (data && data.isSucc == true) {
            this.exchange(data.res);
            dragon.money = Num.parse(data.res.coins); //用户当前金币余额
            this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(dragon.exchangeRate, Num.parse(data.res.coins) - Num.parse(data.res.payout));
            this.slotCtrl.winCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, Num.parse(data.res.payout));
            tween(this.node).delay(0.4).call(function () {
              if (dragon.lotteryRes.getBigWin.res_list.length > 1) {
                _this13.freeGameCoin = 0;
                dragon.rollIndex = 0;
                _this13.bIsFreeGame = true;
                _this13.roll(dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex].nHandCards);
              } else {
                _this13.roll(dragon.lotteryRes.nHandCards);
              }
            }).start();
            // if (dragon.lotteryRes.getBigWin.isStart) {
            //     // this.deskChange();
            //     tween(this.node)
            //         .delay(5)
            //         .call(() => {
            //             this.roll(dragon.lotteryRes.getBigWin.res_list[0].nHandCards);
            //             dragon.rollIndex++;
            //         })
            //         .start()
            // } else {
            //     tween(this.node)
            //         .delay(0.4)
            //         .call(() => {
            //             this.roll(dragon.lotteryRes.nHandCards);
            //         })
            //         .start()
            // }
          }
        };

        _proto.exchange = function exchange(data) {
          var res = dataChange.change(data);
          dragon.lotteryRes = res;
        };
        _proto.rollComplete = function rollComplete() {
          var _this14 = this;
          if (this.completeBn) return;
          this.completeBn = true;
          this.scheduleOnce(function () {
            _this14.completeBn = false;
          }, 3);
          this.scheduleOnce(function () {
            _this14.slotCtrl.setSpinAnim(0);
            if (dragon.auto && dragon.autoTimes > 0) {
              _this14.scheduleOnce(_this14.sendRoll, 1);
            }
          }, 2);
        };
        _proto.stopImmediately = function stopImmediately() {
          if (!dragon.auto) {
            for (var i in dragon.wheelList) {
              dragon.wheelList[i].stopImmediately();
            }
          }
        };
        _proto.setBlur = function setBlur(node, flag) {
          if (flag) {
            node.children[0].active = false;
            node.children[1].active = true;
          } else {
            node.children[0].active = true;
            node.children[1].active = false;
          }
        };
        _proto.repeatLine = function repeatLine() {
          var list = this.static_list;
          this.closeShine();
          this.maskNode.active = true;
          var lotteryRes;
          if (dragon.lotteryRes.getBigWin.res_list.length > 1) {
            if (dragon.rollIndex == dragon.lotteryRes.getBigWin.res_list.length) {
              lotteryRes = dragon.lotteryRes.getBigWin.res_list[dragon.lotteryRes.getBigWin.res_list.length - 1];
            } else {
              lotteryRes = dragon.lotteryRes.getBigWin.res_list[dragon.rollIndex];
            }
          } else {
            lotteryRes = dragon.lotteryRes;
          }
          if (animIndex > lotteryRes.nWinLines.length) {
            animIndex = 0;
          }
          for (var _i10 = 0; _i10 < 9; _i10++) {
            this.closeAnim(_i10 % 3, parseInt(_i10 / 3 + ""));
          }
          if (!list[animIndex]) {
            for (var j in list[0]) {
              this.showAnim(list[0][j] % 3, parseInt(list[0][j] / 3 + ""), "win");
            }
          } else {
            for (var _j2 in list[animIndex]) {
              this.showAnim(list[animIndex][_j2] % 3, parseInt(list[animIndex][_j2] / 3 + ""), "win");
            }
          }
          for (var i in this.effectLine.children) {
            this.effectLine.children[i].active = false;
          }
          for (var i in this.effectNum.children) {
            this.effectNum.children[i].active = false;
          }
          if (animIndex == 0) {
            for (var _i11 = 0; _i11 < lotteryRes.nWinLines.length; _i11++) {
              this.effectLine.children[lotteryRes.nWinLines[_i11]].active = true;
              this.effectNum.children[lotteryRes.nWinLines[_i11]].active = true;
            }
            this.singleLineWinNum.string = Num.exchangeToThousands(dragon.exchangeRate, lotteryRes.winscore / lotteryRes.fMultiple);
          } else {
            this.effectLine.children[lotteryRes.nWinLines[animIndex - 1]].active = true;
            this.effectNum.children[lotteryRes.nWinLines[animIndex - 1]].active = true;
            this.singleLineWinNum.string = Num.exchangeToThousands(dragon.exchangeRate, lotteryRes.nWinDetail[animIndex - 1]);
          }
          if (this.bIsFreeGame) {
            this.singleLineWinNum.string = '';
          } else {
            for (var k in this.effectNum.children) {
              var nd = this.effectNum.children[k];
              var numK = Number(k);
              if (nd.active) {
                if (numK == 0 || numK == 4 || numK == 3) {
                  this.singleLineWinNum.node.y = 217;
                } else if (numK == 1) {
                  this.singleLineWinNum.node.y = 396;
                } else if (numK == 2) {
                  this.singleLineWinNum.node.y = 0;
                }
              }
            }
          }
          if (dragon.auto || this.bIsFreeGame) {
            animIndex = 0;
          } else {
            animIndex = animIndex + 1 > list.length - 1 ? 0 : animIndex + 1;
          }
        };
        _proto.dragonFly = function dragonFly() {
          var _this15 = this;
          this.discoRoll.endRoll();
          this.slotCtrl.betting_panel.active = false;
          this.slotCtrl.Btn_free.active = true;
          this.slotCtrl.Btn_free.children[0].active = true;
          this.slotCtrl.Btn_free.children[1].active = false;
          this.slotCtrl.Btn_free.getChildByName('auto_lab').getComponent(Label).string = 8 + "";
          this.scheduleOnce(function () {
            _this15.slotCtrl.Btn_free.getChildByName('auto_lab').getComponent(Label).string = 7 + "";
          }, 1);
          this.topRollStart();
        };
        _proto.topRollStart = function topRollStart() {
          this.BgNode.active = false;
          find("top_line", this.freeBgNode).active = true;
          var topBg = find("topBG", this.freeBgNode);
          topBg.setSiblingIndex(6);
          this.scheduleOnce(function () {
            topBg.setSiblingIndex(4);
          }, 2.2);
          this.topRoll.startRoll();
        };
        _proto.showLight = function showLight() {
          var lightEnter = find("bg/s_bkg_FS/goldLightEnter", this.node);
          lightEnter.active = true;
          var enterAni = lightEnter.getComponent(Animation);
          enterAni.on("finished", this.lightLoop, this);
          enterAni.play();
        };
        _proto.lightLoop = function lightLoop() {
          var lightEnter = find("bg/s_bkg_FS/goldLightEnter", this.node);
          lightEnter.active = false;
          var goldDisco = find("bg/s_bkg_FS/goldDisco", this.node);
          goldDisco.active = true;
          var goldLightLoop = find("bg/s_bkg_FS/goldLightLoop", this.node);
          goldLightLoop.active = true;
        };
        _proto.playDragonFlyAni = function playDragonFlyAni() {
          var _this16 = this;
          var effect = find("bg/s_bkg_FS/dragonFlyEffect", this.node).getComponent(Animation);
          effect.node.setSiblingIndex(10);
          this.scheduleOnce(function () {
            effect.node.setSiblingIndex(6);
          }, 0.5);
          effect.play();
          var scaleBox = find("bg/s_bkg_FS/Scale_box", this.node);
          scaleBox.setSiblingIndex(5);
          this.scheduleOnce(function () {
            scaleBox.setSiblingIndex(7);
          }, 0.5);
          this.dragonFlySke.node.active = true;
          this.dragonFlySke.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case "_seq":
                _this16.dragonFlySke.addAnimation(0, "idle", true);
                break;
            }
          });
          this.dragonFlySke.setAnimation(0, "_seq", false);
        };
        _proto.close = function close() {
          this.audio.clearAll();
        };
        return dragonMain;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "eventNumPb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "effectLine", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "effectNum", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "effectLight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "effectSpinLightArr", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effectCard", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec10], {
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "freeBeginNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "freeEndNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "winNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "win1BG", [_dec17], {
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
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "coinBoomEffect", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "dragonAnim", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "ballAnime", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "discoRoll", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "topRoll", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "particle_wild", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "dragonFlySke", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "deskMask", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec28], {
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

System.register("chunks:///_virtual/dragonSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts', './Num.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, dragon, Num, LanguageData;
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
      dragon = module.dragon;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "d941cSbCYpNWrCDVcLI+ieo", "dragonSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var dragonSlotCtrl = exports('dragonSlotCtrl', (_dec = ccclass('dragonSlotCtrl'), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property([SpriteFrame]), _dec25 = property(Node), _dec26 = property([SpriteFrame]), _dec27 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonSlotCtrl, _Component);
        function dragonSlotCtrl() {
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
          //界面用户金币
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
        var _proto = dragonSlotCtrl.prototype;
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
          if (!dragon.rollEnable) {
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
          if (!dragon.rollEnable) {
            return;
          }
          dragon.node.onCLick(e, 'roll');
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
          dragon.node.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.money);
        };
        _proto.update = function update() {
          this.initTip();
          // if (this.watchLabel) {
          //     // this.bigWinCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, this.inumObj.inum);
          //     this.watchLabel.string = Num.exchangeToThousands(dragon.exchangeRate, this.inumObj.inum);
          // }
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
          if (!dragon.betNum) {
            dragon.sumIdx = 0;
            dragon.betNum = this.sumList[dragon.sumIdx];
          } else {
            dragon.sumIdx = this.sumList.indexOf(dragon.betNum);
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
          // AudioMgr.inst.musicControl = dragon.musicControl;
        }

        //相关点击
        ;

        _proto.onCLick = function onCLick(event, args) {
          dragon.node.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          dragon.autoPanel.showPanel();
        }

        //关闭自动弹板
        ;

        _proto.onCLick_closeAutoPanel = function onCLick_closeAutoPanel() {
          dragon.node.audio.playclickclose();
          // this.Auto_panel.getComponent('autoPanel').hidePanel();
        };
        //打开设置界面
        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          dragon.node.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", dragon.node.node);
          if (footer) {
            footer.active = false;
          }
          this.Btn_start.active = false;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, -180, 0),
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
          var footer = find("ui_footer/ui_footer_a", dragon.node.node);
          if (footer) {
            footer.active = true;
          }
          this.Btn_start.active = true;
          tween(this.btnContent).to(0.2, {
            position: new Vec3(0, 0, 0),
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
            dragon.betPanel.hidePanel();
          } else {
            dragon.betPanel.showPanel();
            dragon.betPanel.bindBet();
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
          dragon.node.audio.playclickopen();
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
          dragon.sumIdx = this.sumList.indexOf(dragon.betSum);
          if (dragon.sumIdx == -1) {
            dragon.sumIdx = 0;
          }
          this.updateBet(dragon.sumIdx);
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
          if (dragon.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (dragon.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (dragon.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (dragon.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          dragon.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(dragon.exchangeRate, this.sumList[idx]);
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
          dragon.node.winNode.children[0].getComponent(Label).string = Num.exchangeToThousands(dragon.exchangeRate, coin);
          this.winCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.lotteryRes.userscore - dragon.lotteryRes.winscore + coin);
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
          dragon.node.playAnimWinOver();
        };
        _proto.playBigWinCoin = function playBigWinCoin(coin) {
          if (this.bigWinNode.active) return;
          dragon.node.unschedule(dragon.node.sendRoll);
          this.bigWinNode.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, this.addcoin);
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
            this.bigWinCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 2);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= dragon.betSum * 35 && !this.bigWinNode.children[2].active && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= dragon.betSum * 15 && coin < dragon.betSum * 35 && !this.bigWinNode.children[1].active && this.superBn == false) {
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
            dragon.node.audio.stopbigwinmain();
            this.setSpinAnim(0);
          }
          dragon.node.closeBigWin();
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          var _this$Btn_start$getCh;
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              dragon.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !dragon.auto && this.setButtonState(true);
              if (dragon.lotteryRes && dragon.lotteryRes.winscore == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              dragon.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              var VFX2Ani = (_this$Btn_start$getCh = this.Btn_start.getChildByName("VFX")) == null ? void 0 : _this$Btn_start$getCh.getComponent(Animation);
              VFX2Ani.play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(dragon.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              dragon.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              dragon.rollEnable = false;
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
        _createClass(dragonSlotCtrl, [{
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
        return dragonSlotCtrl;
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

System.register("chunks:///_virtual/dragonWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, tween, instantiate, Animation, TweenSystem, Component, Button, UITransform, Vec3, Layout, dragon;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      instantiate = module.instantiate;
      Animation = module.Animation;
      TweenSystem = module.TweenSystem;
      Component = module.Component;
      Button = module.Button;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Layout = module.Layout;
    }, function (module) {
      dragon = module.dragon;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "15a01gfQ/RH95NfeeSeTV8b", "dragonWheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ROLENUM = 20; //每一轮的角色数量
      var TIMEMIN = 1; //第一轮摇奖时间
      var W_INTERVAL = 0.1;
      var FIRSTROLE = [
      //进入游戏时每列的角色
      [1, 1, 6, 6, 3], [1, 1, 7, 7, 7], [1, 1, 2, 5, 5]];
      var dragonWheel = exports('dragonWheel', (_dec = ccclass('dragonWheel'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragonWheel, _Component);
        function dragonWheel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "wheelId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "excludeId", _descriptor2, _assertThisInitialized(_this));
          _this.status = 0;
          _this.nextCb = void 0;
          _this.rolePbList = [];
          _this.roleIdList = [];
          _this.lastResult = [];
          _this.isBlur = false;
          return _this;
        }
        var _proto = dragonWheel.prototype;
        _proto.onLoad = function onLoad() {
          dragon.wheelList[this.wheelId] = this;
          this.status = 0; //0停止 1转  
          this.lastResult = [0, 0, 0]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样  
          this.nextCb = null; //下一步需要执行的回调 
          this.rolePbList = []; //roles 
          this.roleIdList = []; //role ID 
          this.isBlur = false;
        };
        _proto.start = function start() {
          this.initWheel();
        };
        _proto.initWheel = function initWheel() {
          if (dragon.isNewUser) {
            this.lastResult = FIRSTROLE[this.wheelId]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样  
          } else {
            this.lastResult = [0, 0, 0, 0, 0];
          }
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          for (var i in this.lastResult) {
            if (dragon.isNewUser) {
              this.addRole(this.lastResult[i]);
            } else {
              this.lastResult[i] = this.getRandomId();
              this.addRole(this.lastResult[i]);
            }
          }
          this.node.y = 0;
          dragon.rollIndex++;
          dragon.node.closeShine();
        };
        _proto.startRoll = function startRoll() {
          var _this2 = this;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          for (var i = 0; i < args.length; i++) {
            this.addRole(args[i], 0);
          }
          this.addRole(this.getRandomId(), 0);
          if (dragon.slotCtrl.isSpeed) {
            setTimeout(function () {
              _this2.stopImmediately();
            }, TIMEMIN * 3 / 4 * 1000);
          }
          var cb = function cb() {
            _this2.addRole(_this2.getRandomId());
            var timeNum = TIMEMIN * 0.68;
            if (_this2.wheelId == 1) {
              _this2.addRole(_this2.getRandomId());
              _this2.addRole(_this2.getRandomId());
              _this2.addRole(_this2.getRandomId());
              timeNum += 0.2;
            }
            if (_this2.wheelId == 2) {
              _this2.addRole(_this2.getRandomId());
              _this2.addRole(_this2.getRandomId());
              _this2.addRole(_this2.getRandomId());
              _this2.addRole(_this2.getRandomId());
              _this2.addRole(_this2.getRandomId());
              _this2.addRole(_this2.getRandomId());
              timeNum += 0.4;
            }
            for (var _i in args) {
              _this2.addRole(args[_i]);
            }
            _this2.addRole(_this2.getRandomId());
            _this2.node.getComponent(Layout).updateLayout();
            tween(_this2.node).to(timeNum, {
              y: -_this2.node.size.height + 750
            }) //, { easing: 'quadOut' }
            .call(function () {
              _this2.isBlur = false;
              _this2.setBlur();
            }).to(0.3, {
              y: -_this2.node.size.height + 800
            }).call(function () {
              _this2.rollCallBack();
            }).start();
          };
          this.nextCb = cb;
        };
        _proto.rollLoop = function rollLoop() {
          var _this3 = this;
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          this.node.removeAllChildren();
          this.node.y = 0; //滚轮启动位移距离 
          for (var i = 0; i < this.lastResult.length; i++) {
            this.lastResult[i] = this.lastResult[i] == 0 ? this.getRandomId() : this.lastResult[i];
            this.addRole(this.lastResult[i]);
          }
          for (var _i2 = 0; _i2 < ROLENUM - 6; _i2++) {
            this.addRole(this.getRandomId());
          }
          for (var _i3 = 0; _i3 < this.lastResult.length; _i3++) {
            this.lastResult[_i3] = this.lastResult[_i3] == 0 ? this.getRandomId() : this.lastResult[_i3];
            this.addRole(this.lastResult[_i3]);
          }
          var loopCb = function loopCb() {
            _this3.node.y = 0; //滚轮启动位移距离 
            var timer = TIMEMIN + _this3.wheelId * 0.2;
            if (dragon.slotCtrl.isSpeed) {
              tween(_this3.node).call(function () {
                _this3.isBlur = true;
                _this3.setBlur();
              }).to(TIMEMIN, {
                y: -_this3.node.h + 800
              }) //, { easing: 'quadInOut' }) 
              .call(function () {
                _this3.nextCb();
              }).start();
            } else {
              tween(_this3.node).call(function () {
                _this3.isBlur = true;
                _this3.setBlur();
              }).to(timer, {
                y: -_this3.node.h + 800
              }) //, { easing: 'quadInOut' }) 
              .call(function () {
                _this3.nextCb();
              }).start();
            }
          };
          setTimeout(function () {
            _this3.isBlur = true;
            _this3.setBlur();
            var timer = TIMEMIN + _this3.wheelId * 0.2;
            if (dragon.slotCtrl.isSpeed) {
              tween(_this3.node).to(0.16, {
                y: 30
              }).call(function () {
                _this3.isBlur = true;
                _this3.setBlur();
              }).to(TIMEMIN * 3 / 4, {
                y: -_this3.node.h + 800
              }).call(function () {
                _this3.nextCb();
              }).start();
            } else {
              tween(_this3.node).delay(_this3.wheelId * W_INTERVAL).to(0.16, {
                y: 30
              }).call(function () {
                _this3.isBlur = true;
                _this3.setBlur();
              }).to(TIMEMIN, {
                y: -_this3.node.h + 800
              }).call(function () {
                _this3.nextCb();
              }).start();
            }
          }, 100);
          this.nextCb = loopCb;
        };
        _proto.getRandomId = function getRandomId() {
          var randomId = 0;
          while (randomId == 0) {
            randomId = Math.floor(Math.random() * (dragon.node.rolePb.length - 1) + 1);
            randomId = randomId == this.excludeId ? 0 : randomId;
          }
          return randomId;
        };
        _proto.addRole = function addRole(id, posId) {
          if (posId === void 0) {
            posId = undefined;
          }
          var pb = instantiate(dragon.node.rolePb[id]);
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
          this.setBlur(pb);
        };
        _proto.rollCallBack = function rollCallBack() {
          this.isBlur = false;
          this.node.children[0].opacity = 0;
          this.node.children[4].opacity = 0;
          this.setBlur();
          dragon.node.audio.playStopWheel();
          this.lastResult = this.roleIdList.slice(1, 4);
          this.status = 0;
          dragon.node.stateCallBack();
          for (var i = 0; i < dragon.node.effectSpinLightArr.length; i++) {
            var _dragon$node$effectSp;
            (_dragon$node$effectSp = dragon.node.effectSpinLightArr[i].getComponent(Animation)) == null || _dragon$node$effectSp.stop();
            dragon.node.effectSpinLightArr[i].opacity = 0;
          }
        };
        _proto.stopImmediately = function stopImmediately() {
          var _this4 = this;
          this.isBlur = false;
          this.setBlur();
          this.lastResult = this.roleIdList.slice(1, 4);
          TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this.node);
          setTimeout(function () {
            _this4.node.y = -_this4.node.h + 800;
          }, 50);
          this.status = 0;
          dragon.node.stateCallBack();
          for (var i = 0; i < dragon.node.effectSpinLightArr.length; i++) {
            var _dragon$node$effectSp2;
            (_dragon$node$effectSp2 = dragon.node.effectSpinLightArr[i].getComponent(Animation)) == null || _dragon$node$effectSp2.stop();
            dragon.node.effectSpinLightArr[i].opacity = 0;
          }
        };
        _proto.addClickEvent = function addClickEvent(node, idx) {
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
          clickEventHandler.component = "dragonWheel"; // 这个是代码文件名 
          clickEventHandler.handler = "roleClick";
          clickEventHandler.customEventData = idx;
          var button = node.getComponent(Button);
          button.clickEvents.push(clickEventHandler);
        };
        _proto.roleClick = function roleClick(event, customEventData) {
          var newNode = instantiate(dragon.node.detailPb);
          var transForm = event.target.getComponent(UITransform);
          var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
          transForm = dragon.node.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(newVec3);
          newNode.position = p;
          newNode.x -= 30;
          var isLeft = newNode.x < 10;
          newNode.getComponent("dragonDetail").init(customEventData, isLeft);
          dragon.node.node.addChild(newNode);
          dragon.node.deskMask.active = true;
        };
        _proto.setBlur = function setBlur(node) {
          var _this5 = this;
          if (node === void 0) {
            node = undefined;
          }
          return function (node) {
            if (node) {
              _this5.setNodeBlur(node);
            } else {
              for (var i in _this5.rolePbList) {
                var node = _this5.rolePbList[i];
                _this5.setNodeBlur(node);
              }
            }
          }(node);
        };
        _proto.setNodeBlur = function setNodeBlur(node) {
          if (this.isBlur) {
            node.children[0].active = false;
            node.children[1].active = true;
          } else {
            node.children[0].active = true;
            node.children[1].active = false;
          }
        };
        return dragonWheel;
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

System.register("chunks:///_virtual/lastmoneyPanel2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, dragon, Num;
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
      dragon = module.dragon;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e8250ee9MlDEa9Ipzpqax7Y", "lastmoneyPanel", undefined);
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
          dragon.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(dragon.exchangeRate, dragon.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          dragon.node.audio.playclickopen();
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
          dragon.node.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_dragon", ['./SlotsDragonGameMgr.ts', './SlotsDragonLobbyScene.ts', './autoPanel.ts', './betNum2.ts', './betPanel2.ts', './cDragon.ts', './dataChange.ts', './discoNum.ts', './discoRoll.ts', './dragonAudio.ts', './dragonDetail.ts', './dragonMain.ts', './dragonSlotCtrl.ts', './dragonWheel.ts', './lastmoneyPanel2.ts', './payPanel2.ts', './rulePanel2.ts', './topRoll.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/payPanel2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, dragon;
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
      dragon = module.dragon;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "486c6PrneVJl5nraE9tI90O", "payPanel", undefined);
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
          dragon.payPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          dragon.node.audio.playclickopen();
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
          dragon.node.audio.playclickclose();
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

System.register("chunks:///_virtual/rulePanel2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDragon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, dragon;
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
      dragon = module.dragon;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3a9e9SlYwZKsZRaJumIzJ4L", "rulePanel", undefined);
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
          dragon.rulePanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          dragon.node.audio.playclickopen();
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
          dragon.node.audio.playclickclose();
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

System.register("chunks:///_virtual/SlotsDragonGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "97497WF70VEAJcQHQT0yoUd", "SlotsDragonGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsDragonGameMgr = exports('SlotsDragonGameMgr', (_dec = ccclass('SlotsDragonGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsDragonGameMgr, _GameMgr);
        function SlotsDragonGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_DRAGON;
          _this.mainName = "dragonMain";
          _this._gameType = SubGameDef.SLOTS_DRAGON;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_dragon',
            bundle: ModuleDef.SLOTS_DRAGON
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsDragonGameMgr.prototype;
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
        _createClass(SlotsDragonGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsDragonGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsDragonGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsDragonGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsDragonLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './SlotsDragonGameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, SlotsDragonGameMgr, SubGameMgr, SubGameDef;
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
      SlotsDragonGameMgr = module.SlotsDragonGameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "976f3+CRU5FPaybKr0jgp/Y", "SlotsDragonLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsDragonLobbyScene = exports('SlotsDragonLobbyScene', (_dec = ccclass('SlotsDragonLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsDragonLobbyScene, _Component);
        function SlotsDragonLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsDragonLobbyScene.prototype;
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
          SlotsDragonGameMgr.inst.initSoloMode();
          SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_DRAGON, true);
        };
        return SlotsDragonLobbyScene;
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

System.register("chunks:///_virtual/topRoll.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './discoNum.ts', './cDragon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, Vec3, Tween, Layout, tween, instantiate, Component, discoNum, dragon;
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
      Vec3 = module.Vec3;
      Tween = module.Tween;
      Layout = module.Layout;
      tween = module.tween;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      discoNum = module.discoNum;
    }, function (module) {
      dragon = module.dragon;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "123e1MuX8lAzoe2hHG/RNYU", "topRoll", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var topRoll = exports('topRoll', (_dec = ccclass('topRoll'), _dec2 = property({
        type: Prefab,
        tooltip: "数字皮肤"
      }), _dec3 = property({
        type: Node,
        tooltip: "光效"
      }), _dec4 = property({
        type: Node,
        tooltip: "黑色半透明"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(topRoll, _Component);
        function topRoll() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lightEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "black", _descriptor3, _assertThisInitialized(_this));
          _this.rollTime = 1;
          _this.radomNum = 10;
          _this.startX = -230;
          _this.showRange = 206;
          _this.aimDis = 125;
          _this.rollBn = false;
          _this.aimNumArr = [];
          _this.flyNumArr = [];
          _this.pool = [];
          _this._isSpeed = false;
          return _this;
        }
        var _proto = topRoll.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.startX = this.node.x;
          this.rollBn = false;
          this.black.active = false;
        };
        _proto.showBn = function showBn(item) {
          var bn = false;
          var parent = item.parent;
          var relativePos = new Vec3(item.position.x + parent.position.x, item.position.y + parent.position.y);
          var boundaryL = relativePos.x - item.w / 2;
          var boundaryR = relativePos.x + item.w / 2;
          if (boundaryL < this.showRange && boundaryR > -this.showRange) {
            bn = true;
          }
          return bn;
        };
        _proto.startRoll = function startRoll() {
          this.rollBn = true;
          this.black.active = false;
          this.rollLoop();
        };
        _proto.endRoll = function endRoll(numArr) {
          if (numArr === void 0) {
            numArr = [];
          }
          if (!numArr) {
            this.aimNumArr = [];
          } else {
            this.aimNumArr = numArr;
          }
          Tween.stopAllByTarget(this.node);
          this.rollEnd();
        };
        _proto.radomAdd = function radomAdd() {
          this.updateRecycle(true);
          var addnum = this.radomNum - this.node.children.length;
          this.create(addnum);
          this.node.getComponent(Layout).updateLayout();
        };
        _proto.updateRecycle = function updateRecycle(isRecycle) {
          if (isRecycle === void 0) {
            isRecycle = false;
          }
          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var item = this.node.children[i];
            var showBn = this.showBn(item);
            if (!showBn) {
              isRecycle && this.recycle(item);
            }
          }
        };
        _proto.rollLoop = function rollLoop() {
          var _this2 = this;
          this.radomAdd();
          this.node.x = this.startX; //滚轮启动位移距离 
          var timer = this.rollTime;
          tween(this.node).to(timer, {
            x: this.startX - this.node.w + 230
          }) //, { easing: 'quadInOut' }) 
          .call(function () {
            _this2.rollLoop();
          }).start();
        };
        _proto.rollEnd = function rollEnd() {
          var _this3 = this;
          this.radomAdd();
          var aim = 0;
          if (this.aimNumArr.length == 3) {
            aim = this.startX - this.node.w + 3 * this.aimDis + 10;
            this.node.children[this.node.children.length - 1].getComponent(discoNum).num = this.aimNumArr[2];
            this.node.children[this.node.children.length - 2].getComponent(discoNum).num = this.aimNumArr[1];
            this.node.children[this.node.children.length - 3].getComponent(discoNum).num = this.aimNumArr[0];
            this.flyNumArr = [this.node.children[this.node.children.length - 3], this.node.children[this.node.children.length - 2], this.node.children[this.node.children.length - 1]];
          } else if (this.aimNumArr.length == 2) {
            aim = this.startX - this.node.w + 460;
            this.node.children[this.node.children.length - 2].getComponent(discoNum).num = this.aimNumArr[1];
            this.node.children[this.node.children.length - 3].getComponent(discoNum).num = this.aimNumArr[0];
            this.flyNumArr = [this.node.children[this.node.children.length - 3], this.node.children[this.node.children.length - 2]];
          } else {
            console.log("aimNumArr Error");
            return;
          }
          this.node.x = this.startX; //滚轮启动位移距离 
          var timer = this.rollTime;
          tween(this.node).to(timer, {
            x: aim
          }) //, { easing: 'quadInOut' }) 
          .call(function () {
            _this3.endComplete();
          }).start();
        };
        _proto.endComplete = function endComplete() {
          this.rollBn = false;
          this.black.active = true;
          this.lightEffect.active = true;
          this.lightEffect.opacity = 255;
          tween(this.lightEffect).delay(0.5).to(0.3, {
            opacity: 0
          }).start();
          dragon.node.topNumFly(this.flyNumArr, this.pb);
          for (var i = 0; i < this.flyNumArr.length; i++) {
            var node = this.flyNumArr[i];
            tween(node).to(0.3, {
              y: node.y + 20,
              scale: new Vec3(0.8, 0.8)
            }).delay(0.2 + i * 0.1).to(0.2, {
              y: node.y,
              scale: new Vec3(0.7, 0.7)
            }).start();
          }
        }

        // flyUp(callBack:Function){
        //     let item:Node = this.node.children[this.node.children.length-1];
        //     if(!item) return;
        //     tween(item)
        //         .to(0.5,{y:item.position.y+50})
        //         .call(()=>{
        //             callBack();
        //             this.flyDown();
        //         })
        //         .start();
        // }

        // flyDown(){
        //     let item:Node = this.node.children[this.node.children.length-1];
        //     if(!item) return;
        //     tween(item)
        //         .to(0.5,{y:item.position.y-50,opacity:100})
        //         .start();
        // }
        ;

        _proto.aimBack = function aimBack() {
          var item = this.node.children[this.node.children.length - 1];
          if (!item) return;
          item.opacity = 255;
        };
        _proto.create = function create(num) {
          for (var i = 0; i < num; i++) {
            this.createOne();
          }
        };
        _proto.createOne = function createOne() {
          var item = this.itemFactory().getComponent(discoNum);
          item.node.scale = new Vec3(0.7, 0.7);
          item.radomNum();
          this.node.addChild(item.node);
        };
        _proto.itemFactory = function itemFactory() {
          if (this.pool.length > 0) {
            return this.pool.shift();
          } else {
            return instantiate(this.pb);
          }
        };
        _proto.recycle = function recycle(item) {
          item.parent = null;
          this.pool.push(item);
        };
        _createClass(topRoll, [{
          key: "isSpeed",
          get: function get() {
            return this._isSpeed;
          },
          set: function set(v) {
            this._isSpeed = v;
            if (this.isSpeed) {
              this.radomNum = 5;
            } else {
              this.radomNum = 10;
            }
          }
        }]);
        return topRoll;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lightEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "black", [_dec4], {
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

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_dragon', 'chunks:///_virtual/module_slots_dragon'); 
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