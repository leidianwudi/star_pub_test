System.register("chunks:///_virtual/autoPanel7.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, mouse, Num;
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
      mouse = module.mouse;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "de421sU5t9NQpdVDi/Wdxph", "autoPanel", undefined);
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
          mouse.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.money);
          this.lblCurBet.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.betSum);
          this.winCoin_lab.string = mouse.slotCtrl.winCoin_lab.string;
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
            mouse.node.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          mouse.node.audio.playclickopen();
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
          mouse.node.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum8.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "2ae07LfWuZH7ZYa6G1e/bVn", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel8.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts', './Num.ts', './betNum8.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, mouse, Num, betNum;
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
      mouse = module.mouse;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      betNum = module.betNum;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "c1c84i2nJdGI5PbjSDv3pr9", "betPanel", undefined);
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
          mouse.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = mouse.BETNUM;
          this.betList = mouse.BET;
          this.line = mouse.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.money);
          this.lblCurBet.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.betSum);
          this.winCoin_lab.string = mouse.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(mouse.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(mouse.exchangeRate, sumList[_i3]);
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
          mouse.betNum = this.tempi;
          mouse.bet = this.tempj;
          mouse.sumIdx = this.tempindex;
          mouse.betSum = this.sumList[mouse.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.betSum);
          mouse.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(mouse.sumIdx);
          this.val3 = mouse.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          mouse.node.audio.playclickopen();
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
          mouse.node.audio.playclickclose();
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

System.register("chunks:///_virtual/cMouse.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './dataChange7.ts'], function (exports) {
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
      cclegacy._RF.push({}, "18f2c//lspGkpXP6qgjKaDK", "cMouse", undefined);
      var cMouse = /*#__PURE__*/function () {
        function cMouse() {
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
          /**余额界面 */
          this.lastmoneyPanel = null;
        }
        _createClass(cMouse, [{
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
              this._betSum = Number(localStorage.getItem(SubGameDef.SLOTS_MOUSE + "betSum"));
            }
            return this._betSum;
          },
          set: function set(v) {
            if (this._betSum != v) {
              localStorage.setItem(SubGameDef.SLOTS_MOUSE + "betSum", v + "");
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
              this._instance = new cMouse();
            }
            return this._instance;
          }
        }]);
        return cMouse;
      }();
      cMouse._instance = null;
      var mouse = exports('mouse', cMouse.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/coinParticle2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "52484AyippBp4KyWbVOtqXf", "coinParticle", undefined);
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
              coin.parent = null;
            }
          }).to(this.flyTime, {
            scale: new Vec3(this.endScale, this.endScale),
            position: aimPos
          }).call(function () {
            if (_this2.node) {
              _this2.recycle(coin);
            } else {
              Tween.stopAllByTarget(coin);
              coin.parent = null;
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

System.register("chunks:///_virtual/dataChange7.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9da86nlpgBHFoG4AqMb4dse", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.getBigWin = {};
          res.getBigWin.res_list = [];
          for (var i = 0; i < data.results.length; i++) {
            var temp = data.results[i];
            var nHandCards = [];
            var nWinLines = [];
            var nWinLinesDetail = [];
            var nWinDetail = [];
            var nWinCards = [];
            for (var _i = 0; _i < temp.symbols.length; _i++) {
              var cur = temp.symbols[_i];
              var index = dataChange.posToIndex(cur.coordinate);
              nHandCards[index] = dataChange.getIndexById(cur.id) + 1;
            }
            nWinCards = [false, false, false, false, false, false, false, false, false];
            for (var _i2 = 0; _i2 < temp.paylines.length; _i2++) {
              var _cur = temp.paylines[_i2];
              nWinLines.push(Number(_cur.id) - 1);
              nWinDetail.push(100);
              nWinLinesDetail[_i2] = [];
              for (var j = 0; j < _cur.points.length; j++) {
                var point = _cur.points[j];
                var _temp = dataChange.posToIndex(point);
                nWinLinesDetail[_i2].push(_temp);
                nWinCards[_temp] = true;
              }
            }
            if (i == 0) {
              res.nHandCards = nHandCards;
              res.nWinLines = nWinLines;
              res.nWinLinesDetail = nWinLinesDetail;
              res.nWinDetail = nWinDetail;
              res.nWinCards = nWinCards;
              res.userscore = Number(data.coins);
              res.winscore = Number(data.payout);
              res.getBigWin.isStart = data.results[0].bigEvents;
              res.getBigWin.bFlag = res.getBigWin.isStart;
            }
            var _resList = {};
            _resList.nHandCards = nHandCards;
            _resList.nWinLines = nWinLines;
            _resList.nWinLinesDetail = nWinLinesDetail;
            _resList.nWinDetail = nWinDetail;
            _resList.nWinCards = nWinCards;
            _resList.winscore = Number(temp.payout);
            res.getBigWin.res_list.push(_resList);
          }

          // res.getBigWin.res_list = [
          //     {
          //         "nHandCards": [
          //             1,
          //             7,
          //             5,
          //             5,
          //             7,
          //             2,
          //             1,
          //             7,
          //             4
          //         ],
          //         "nWinLines": [],
          //         "nWinLinesDetail": [],
          //         "nWinDetail": [],
          //         "nWinCards": [
          //             false,
          //             false,
          //             false,
          //             false,
          //             false,
          //             false,
          //             false,
          //             false,
          //             false
          //         ],
          //         "winscore": 0,
          //     },
          //     {
          //         "nHandCards": [
          //             7,
          //             7,
          //             3,
          //             5,
          //             7,
          //             4,
          //             2,
          //             7,
          //             1
          //         ],
          //         "nWinLines": [
          //             1,
          //             3
          //         ],
          //         "nWinLinesDetail": [
          //             [
          //                 0,
          //                 1,
          //                 2
          //             ],
          //             [
          //                 0,
          //                 4,
          //                 8
          //             ]
          //         ],
          //         "nWinDetail": [
          //             75,
          //             30
          //         ],
          //         "nWinCards": [
          //             true,
          //             true,
          //             true,
          //             false,
          //             true,
          //             false,
          //             false,
          //             false,
          //             true
          //         ],

          //         "winscore": 30,

          //     }
          // ]
          return res;
        };
        dataChange.posToIndex = function posToIndex(pos) {
          var index = (3 - pos.row) * 3 + (pos.reel - 1);
          return index;
        };
        dataChange.getIndexById = function getIndexById(id) {
          return config.indexOf(id);
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

      // export interface PlaySlotRound {
      //     symbols: PlaySlotSymbol[];
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
      //     bigEvents: boolean; //播放特效事件
      //     multiplier?: { id: string, multiple: number };//本次游戏奖金触发的乘数id

      //     //触发幸运线会生成多轮结果， 首轮中间一列全部为万能符(幸运老鼠)， 中间结果都未中奖，最后一轮是中奖结果
      //     rounds: PlaySlotRound[];
      // }

      // export interface ResPlaySlots {
      //     //包括免费赠送的结果
      //     results: PlaySlotsResult[];
      //     //赢取的总金币数
      //     payout: string;
      //     //用户的金币余额
      //     coins: string;
      // }
      var config = exports('config', ["peanut", "orange", "firework", "blessing_bag", "red_envelope", "spring_festival_couplets", "mouse"]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel8.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, mouse, Num;
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
      mouse = module.mouse;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d2ad3G8F3pGbqrxZerGbKyP", "lastmoneyPanel", undefined);
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
          mouse.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          mouse.node.audio.playclickopen();
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
          mouse.node.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_mouse", ['./SlotsMouseGameMgr.ts', './SlotsMouseLobbyScene.ts', './autoPanel7.ts', './betNum8.ts', './betPanel8.ts', './cMouse.ts', './coinParticle2.ts', './dataChange7.ts', './lastmoneyPanel8.ts', './mouseAudio.ts', './mouseDetail.ts', './mouseMain.ts', './mouseSlotCtrl.ts', './mouseWheel.ts', './payPanel3.ts', './rulePanel3.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/mouseAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "13ab1YQB5JNfaQaED2y/ly8", "mouseAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mouseAudio = exports('mouseAudio', (_dec = ccclass('mouseAudio'), _dec2 = property([AudioClip]), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mouseAudio, _Component);
        function mouseAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgmAudio", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopWheel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinEf", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickstart", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickOpen", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickClose", _descriptor6, _assertThisInitialized(_this));
          _this.url = "sound/bgm_mg";
          _this.BWurl = "sound/GeneralAudio";
          return _this;
        }
        var _proto = mouseAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.playBgm();
        };
        _proto.stopbigwinmain = function stopbigwinmain() {
          this.playBgm();
        };
        _proto.stopAudio = function stopAudio() {
          tgx.AudioMgr.inst.audio.stopAll();
        };
        _proto.playBgm = function playBgm() {
          tgx.AudioMgr.inst.audio.playMusicLoop(this.url, ModuleDef.SLOTS_MOUSE);
        };
        _proto.playStopWheel = function playStopWheel() {
          this.playEf(this.stopWheel);
        };
        _proto.playBW = function playBW() {
          // tgx.AudioMgr.inst.audio.playMusic(this.BWurl,()=>{},ModuleDef.SLOTS_MOUSE);
        };
        _proto.playEf = function playEf(clip) {
          tgx.AudioMgr.inst.audio.playEffect(clip);
        };
        _proto.playclickstart = function playclickstart() {
          this.playEf(this.clickstart);
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
        return mouseAudio;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clickstart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clickOpen", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "clickClose", [_dec7], {
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

System.register("chunks:///_virtual/mouseDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, mouse;
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
      mouse = module.mouse;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a5e80vtNftAZLcV8+66QUBM", "mouseDetail", undefined);
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
        3: 300
      },
      // hand cards no fix line 6
      {
        3: 0
      } // hand cards no fix line 7
      ];

      var mouseDetail = exports('mouseDetail', (_dec = ccclass('mouseDetail'), _dec2 = property({
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
        _inheritsLoose(mouseDetail, _Component);
        function mouseDetail() {
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
        var _proto = mouseDetail.prototype;
        _proto.init = function init(idx, isLeft) {
          if (mouse.detail) {
            mouse.detail.node.active = false;
          }
          mouse.detail = this;
          var id = idx;
          this.roleSpriteNode.children[idx - 1].active = true;
          for (var i in GAME_COMBINATIONS[id - 1]) {
            this.numNode.getChildByName(i).children[0].getComponent(Label).string = GAME_COMBINATIONS[idx - 1][i];
          }
          //位于右边的时候需要切换显示位置
          if (!isLeft) {
            this.BGNode.active = false;
            this.BGNode2.active = true;
            this.numNode.x = -250;
            this.specialNode.x = -340;
          }
        };
        _proto.node_onclick = function node_onclick() {
          mouse.node.deskMask.active = false;
          this.node.destroy();
          mouse.detail = null;
        };
        return mouseDetail;
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

System.register("chunks:///_virtual/mouseMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts', './mouseSlotCtrl.ts', './NetGameServer.ts', './SubGameDef.ts', './dataChange7.ts', './UserMgr.ts', './Num.ts', './RoomMgr.ts', './UIHelp.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, Sprite, SpriteFrame, Animation, macro, sp, find, Vec3, tween, Label, Component, instantiate, UITransform, mouse, mouseSlotCtrl, gameNet, SubGameDef, dataChange, UserMgr, Num, RoomMgr, UIHelp, UIhelpParam, LanguageData;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Animation = module.Animation;
      macro = module.macro;
      sp = module.sp;
      find = module.find;
      Vec3 = module.Vec3;
      tween = module.tween;
      Label = module.Label;
      Component = module.Component;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
    }, function (module) {
      mouse = module.mouse;
    }, function (module) {
      mouseSlotCtrl = module.mouseSlotCtrl;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      dataChange = module.dataChange;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30;
      cclegacy._RF.push({}, "37bf1GIMy5C16k1hSrSSid4", "mouseMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mouseMain = exports('mouseMain', (_dec = ccclass('mouseMain'), _dec2 = property({
        type: Prefab,
        tooltip: "滚轮角色Pb"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "角色详情Pb"
      }), _dec4 = property({
        type: Node,
        tooltip: "中奖线特效"
      }), _dec5 = property({
        type: Node,
        tooltip: "中奖数字特效中"
      }), _dec6 = property({
        type: Node,
        tooltip: "中奖数字特效不中"
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
        tooltip: "滚屏提示"
      }), _dec13 = property({
        type: Node,
        tooltip: "滚屏提示"
      }), _dec14 = property({
        type: Node,
        tooltip: "中奖提示"
      }), _dec15 = property({
        type: Node,
        tooltip: "爆金币"
      }), _dec16 = property({
        type: Node,
        tooltip: "爆金币"
      }), _dec17 = property({
        type: Node,
        tooltip: "金币背景"
      }), _dec18 = property({
        type: Node,
        tooltip: "老鼠动画"
      }), _dec19 = property({
        type: Node,
        tooltip: "顶部老鼠动画"
      }), _dec20 = property({
        type: [Node],
        tooltip: "事件wild"
      }), _dec21 = property({
        type: Node,
        tooltip: "事件向上粒子"
      }), _dec22 = property({
        type: Sprite,
        tooltip: "deskBg"
      }), _dec23 = property({
        type: SpriteFrame,
        tooltip: "deskBgArr"
      }), _dec24 = property({
        type: Animation,
        tooltip: "eventShineArr"
      }), _dec25 = property({
        type: Node,
        tooltip: "detailMask"
      }), _dec26 = property({
        type: Node,
        tooltip: "desk"
      }), _dec27 = property({
        type: Node,
        tooltip: "slotCtrl"
      }), _dec28 = property({
        type: Node,
        tooltip: "花"
      }), _dec29 = property({
        type: Node,
        tooltip: "树"
      }), _dec30 = property({
        type: Node,
        tooltip: "钱"
      }), _dec31 = property({
        type: Prefab,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mouseMain, _Component);
        function mouseMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rolePb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectNumGrey", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLight", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectSpinLight", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulListNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipNode2", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinBoomEffect", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinBoomEffect2", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBG", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mouseAnim", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topMouseAnim", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildArr", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyParticle", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deskBg", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deskBgArr", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventShineArr", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deskMask", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "desk", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flowerArr", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "treeArr", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldArr", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particle_wild", _descriptor30, _assertThisInitialized(_this));
          /**延迟点击 */
          _this.delayClick = false;
          _this.audio = null;
          _this.slotCtrl = null;
          _this.bIsFreeGame = false;
          _this.jumpDownBn = false;
          _this.lookAimLBn = true;
          /**顶部老鼠动画是否结束 */
          _this.topExitBn = false;
          _this.stateCallBackBn = false;
          _this.animIndex = 0;
          return _this;
        }
        var _proto = mouseMain.prototype;
        _proto.onLoad = function onLoad() {
          mouse.node = this;
          this.slotCtrl = this.slotCtrlNode.getComponent(mouseSlotCtrl);
          this.slotCtrl.initBetContent(mouse.BETNUM, mouse.BET, mouse.LINES);
          this.audio = this.node.getComponent('mouseAudio');
          mouse.wheelList = [];
          mouse.auto = false;
          mouse.autoTimes = 0;
          mouse.status = 0;
          mouse.rollIndex = 0;
          mouse.lotteryRes = null;
          this.bIsFreeGame = false;
          this.delayClick = false;
          mouse.money = UserMgr.inst.coin;
          this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.money);
          this.topMouseAnim.active = false;
          this.flyParticle.active = false;
          this.deskBg.spriteFrame = this.deskBgArr[0];
        };
        _proto.initWheel = function initWheel() {
          for (var i = 0; i < mouse.wheelList.length; i++) {
            mouse.wheelList[i].initWheel();
          }
        };
        _proto.start = function start() {
          this.initWheel();
          this.slotCtrl.setSpinAnim(0);
          this.slotCtrl.bindBet();
          this.addAniListen();
          this.schedule(this.playAniLoop, 15, macro.REPEAT_FOREVER);
          this.hideWilds();
        };
        _proto.addAniListen = function addAniListen() {
          var _this2 = this;
          //监听老鼠动画播放
          var ani = this.mouseAnim.getComponent(sp.Skeleton);
          ani.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case "enter":
                _this2.jumpDownBn = false;
                _this2.schedule(_this2.playAniLoop, 15, macro.REPEAT_FOREVER);
                ani.setAnimation(0, "idle", true);
                _this2.slotCtrl.setSpinAnim(0);
                if (mouse.auto && mouse.autoTimes > 0) {
                  _this2.scheduleOnce(_this2.sendRoll, 1.5);
                }
                break;
              case "idle2":
                ani.setAnimation(0, "idle", true);
                break;
              case "idle3":
                ani.setAnimation(0, "idle", true);
                break;
              case "idle4":
                ani.setAnimation(0, "idle", true);
                break;
              case "small_win":
                ani.setAnimation(0, "idle", true);
                break;
              case "medium_win":
                ani.setAnimation(0, "idle", true);
                break;
              case "exit":
                _this2.maskNode.active = false;
                _this2.deskBg.spriteFrame = _this2.deskBgArr[1];
                ani.node.active = false;
                _this2.showEventTitle();
                _this2.unschedule(_this2.playAniLoop);
                var _topAni = _this2.topMouseAnim.getComponent(sp.Skeleton);
                _topAni.node.active = true;
                _topAni.setAnimation(0, "top_enter", false);
                break;
            }
          });
          var topAni = this.topMouseAnim.getComponent(sp.Skeleton);
          topAni.setCompleteListener(function (event) {
            switch (event.animation.name) {
              case "top_enter":
                if (_this2.jumpDownBn) {
                  return;
                }
                topAni.setAnimation(0, "top_excite_start", false);
                break;
              case "top_excite_start":
                if (_this2.jumpDownBn) {
                  return;
                }
                _this2.lookAimLBn = true;
                topAni.setAnimation(0, "top_excite_lookL", true);
                _this2.schedule(_this2.lookLoop, 1, macro.REPEAT_FOREVER);
                break;
              case "top_excite_turnL":
                if (_this2.jumpDownBn) {
                  return;
                }
                topAni.setAnimation(0, "top_excite_lookL", true);
                break;
              case "top_excite_turnR":
                if (_this2.jumpDownBn) {
                  return;
                }
                if (_this2.topExitBn) {
                  _this2.unschedule(_this2.lookLoop);
                  topAni.setAnimation(0, "top_winoverlay", false);
                } else {
                  topAni.setAnimation(0, "top_excite_lookR", true);
                }
                break;
              case "top_winoverlay":
                if (_this2.jumpDownBn) {
                  return;
                }
                topAni.setAnimation(0, "top_idle", true);
                break;
              case "top_exit":
                _this2.hideEventTitle();
                topAni.node.active = false;
                var _ani = _this2.mouseAnim.getComponent(sp.Skeleton);
                _ani.node.active = true;
                _ani.setAnimation(0, "enter", false);
                break;
            }
          });
        };
        _proto.mouseJumpDown = function mouseJumpDown() {
          var topAni = this.topMouseAnim.getComponent(sp.Skeleton);
          if (topAni.node.active) {
            this.unschedule(this.lookLoop);
            this.jumpDownBn = true;
            topAni.setAnimation(0, "top_exit", false);
          } else {
            this.slotCtrl.setSpinAnim(0);
            if (mouse.auto && mouse.autoTimes > 0) {
              this.scheduleOnce(this.sendRoll, 1.5);
            }
          }
        };
        _proto.showEventTitle = function showEventTitle() {
          var title = find("bg/eventTitle", this.node);
          title.scale = new Vec3(0.5, 0.5);
          title.opacity = 255;
          title.active = true;
          tween(title).to(0.5, {
            scale: new Vec3(1, 1)
          }).start();
        };
        _proto.hideEventTitle = function hideEventTitle() {
          var title = find("bg/eventTitle", this.node);
          tween(title).to(0.5, {
            opacity: 0
          }).start();
        };
        _proto.showWilds = function showWilds() {
          var _this3 = this;
          mouse.wheelList[1].node.opacity = 0.1;
          var _loop = function _loop() {
            var wild = _this3.wildArr[i];
            wild.scale = new Vec3(0.8, 0.8);
            tween(wild).delay(i * 0.3).call(function () {
              wild.active = true;
            }).to(0.4, {
              scale: new Vec3(0.9, 0.9)
            }).to(0.1, {
              scale: new Vec3(0.7, 0.7)
            }).start();
          };
          for (var i = 0; i < this.wildArr.length; i++) {
            _loop();
          }
          this.scheduleOnce(function () {
            for (var _i = 0; _i < _this3.wildArr.length; _i++) {
              var wildAni = _this3.wildArr[_i].getComponent(sp.Skeleton);
              wildAni.setAnimation(0, "idle_respin", true);
            }
          }, 1);
          this.playEventShine();
        };
        _proto.showFlyParticle = function showFlyParticle() {
          var _this4 = this;
          this.flyParticle.y = -100;
          this.flyParticle.opacity = 255;
          tween(this.flyParticle).delay(0.1).call(function () {
            _this4.flyParticle.active = true;
          }).to(1, {
            y: 700
          }).to(0.1, {
            opacity: 0
          }).call(function () {
            _this4.flyParticle.active = false;
            _this4.flyParticle.y = -100;
          }).start();
        };
        _proto.hideWilds = function hideWilds() {
          mouse.wheelList[1].node.opacity = 255;
          for (var i = 0; i < this.wildArr.length; i++) {
            var wild = this.wildArr[i];
            wild.active = false;
          }
        };
        _proto.playEventShine = function playEventShine() {
          this.eventShineArr[0].play();
          this.eventShineArr[1].play();
        };
        _proto.lookLoop = function lookLoop() {
          var topAni = this.topMouseAnim.getComponent(sp.Skeleton);
          if (this.lookAimLBn) {
            this.lookAimLBn = false;
            topAni.setAnimation(0, "top_excite_turnR", false);
          } else {
            this.lookAimLBn = true;
            topAni.setAnimation(0, "top_excite_turnL", false);
          }
        };
        _proto.playAniLoop = function playAniLoop() {
          var ani = this.mouseAnim.getComponent(sp.Skeleton);
          if (this.bIsFreeGame || this.delayClick) {
            return;
          }
          var r = Math.random();
          if (r < 0.4) {
            ani.setAnimation(0, "idle2", false);
          } else if (r < 0.7) {
            ani.setAnimation(0, "idle3", false);
          } else {
            ani.setAnimation(0, "idle4", false);
          }
        };
        _proto.aniEventStart = function aniEventStart() {
          this.maskNode.active = true;
          this.topExitBn = false;
          var ani = this.mouseAnim.getComponent(sp.Skeleton);
          ani.setAnimation(0, "exit", false);
          this.scheduleOnce(this.showWilds, 0.8);
          this.scheduleOnce(this.showFlyParticle, 0.5);
        };
        _proto.aniEventEnd = function aniEventEnd() {
          this.topExitBn = true;
          this.hideWilds();
        };
        _proto.deskChange = function deskChange() {
          var ani = this.mouseAnim.getComponent(sp.Skeleton);
          ani.setAnimation(0, "zoom_idle", true);
          var time = 2;
          tween(this.flowerArr[0]).to(time, {
            x: -500
          }).start();
          tween(this.flowerArr[1]).to(time, {
            x: 510
          }).start();
          tween(this.treeArr[0]).to(time, {
            x: -348,
            y: -394
          }).start();
          tween(this.treeArr[1]).to(time, {
            x: 334,
            y: -398
          }).start();
          tween(this.goldArr[0]).to(time, {
            x: -210,
            y: -424
          }).start();
          tween(this.goldArr[1]).to(time, {
            x: 217,
            y: -422
          }).start();
          tween(this.desk).to(time, {
            position: new Vec3(0, -75),
            scale: new Vec3(0.9, 0.9)
          }).start();
          if (mouse.lotteryRes.getBigWin.res_list.length > 0) {
            this.scheduleOnce(this.aniEventStart, time);
          }
        };
        _proto.deskBack = function deskBack() {
          var time = 0.8;
          tween(this.flowerArr[0]).to(time, {
            x: -266
          }).start();
          tween(this.flowerArr[1]).to(time, {
            x: 252
          }).start();
          tween(this.treeArr[0]).to(time, {
            x: -405,
            y: -298
          }).start();
          tween(this.treeArr[1]).to(time, {
            x: 405,
            y: -298
          }).start();
          tween(this.goldArr[0]).to(time, {
            x: -474,
            y: -448
          }).start();
          tween(this.goldArr[1]).to(time, {
            x: 474,
            y: -448
          }).start();
          tween(this.desk).to(time, {
            position: new Vec3(0, 0),
            scale: new Vec3(1, 1)
          }).start();
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
            case "help":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
              break;
            case "pay":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
              break;
            case "lastmoney":
              mouse.lastmoneyPanel.showPanel();
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
                    mouse.node.close();
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
          var _this5 = this;
          if (this.delayClick || mouse.rollEnable == false) {
            return;
          }
          if (!mouse.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this5.delayClick = false;
            }, 1);
            if (mouse.status == 0) {
              mouse.status = 2;
              this.sendRoll();
            } else if (mouse.status == 1) {
              this.slotCtrl.setSpinAnim(3);
              this.stopImmediately();
            }
          }
        };
        _proto.add = function add() {
          if (mouse.auto) {
            return;
          }
          mouse.sumIdx += 1;
          mouse.sumIdx = this.slotCtrl.updateBet(mouse.sumIdx) == 0 ? mouse.sumIdx - 1 : mouse.sumIdx;
          tween(this.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.dec = function dec() {
          if (mouse.auto) {
            return;
          }
          mouse.sumIdx -= 1;
          mouse.sumIdx = this.slotCtrl.updateBet(mouse.sumIdx) == 0 ? mouse.sumIdx + 1 : mouse.sumIdx;
          tween(this.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.startAuto = function startAuto(n) {
          if (this.bIsFreeGame || this.delayClick) {
            return;
          }
          if (mouse.status == 0) {
            mouse.auto = true;
            mouse.autoTimes = n;
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
            this.slotCtrl.Btn_stopAuto.active = mouse.auto;
            this.slotCtrl.Btn_start.active = !this.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1.5);
          }
        };
        _proto.stopAuto = function stopAuto() {
          mouse.auto = false;
          mouse.autoTimes = 0;
        };
        _proto.stateCallBack = function stateCallBack() {
          var _this6 = this;
          var st = 0;
          for (var i in mouse.wheelList) {
            if (mouse.wheelList[i].status) {
              st = 1;
              break;
            }
          }
          mouse.status = st;
          if (mouse.status == 0) {
            if (this.stateCallBackBn) {
              return;
            }
            this.stateCallBackBn = true;
            this.scheduleOnce(function () {
              _this6.stateCallBackBn = false;
            }, 1);
            if (mouse.lotteryRes.winscore > 0) {
              this.slotCtrl.setSpinAnim(3);
            } else {
              this.slotCtrl.setSpinAnim(2);
            }
            var rIndex = mouse.lotteryRes.getBigWin.res_list.length;
            if (!mouse.lotteryRes.getBigWin.isStart) {
              var _loop2 = function _loop2() {
                  node = mouse.wheelList[_i2 % 3].rolePbList[Math.floor(_i2 / 3) + 1];
                  if (node.name == "007") {
                    var effect = _this6.effectCard.children[_i2 % 3 * 3 + Math.floor(_i2 / 3)].children[6];
                    effect.active = true;
                    var effectAni = effect.getComponent(sp.Skeleton);
                    effectAni.setCompleteListener(function (event) {
                      if (event.animation.name == "spawn") {
                        effect.active = false;
                      }
                    });
                    effectAni.setAnimation(0, "spawn", false);
                    par = instantiate(_this6.particle_wild);
                    var transForm = node.getComponent(UITransform);
                    pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
                    transForm = _this6.node.getComponent(UITransform);
                    var p = transForm.convertToNodeSpaceAR(pos);
                    par.position = p;
                    par.parent = find("particle", _this6.node);
                    tarpos = new Vec3(-40, -328);
                    tween(par).to(0.6, {
                      position: tarpos
                    }).call(function () {
                      par.parent = null;
                    }).start();
                  }
                },
                node,
                par,
                pos,
                tarpos;
              for (var _i2 = 0; _i2 < 9; _i2++) {
                _loop2();
              }
              this.scheduleOnce(function () {
                find("particle", _this6.node).removeAllChildren();
              }, 0.6);
            }
            this.scheduleOnce(function () {
              if (rIndex == mouse.rollIndex || rIndex == 1 && mouse.rollIndex == 0) {
                _this6.aniEventEnd();
                _this6.playWinAnim();
              } else {
                _this6.roll(mouse.lotteryRes.getBigWin.res_list[mouse.rollIndex].nHandCards);
                mouse.rollIndex++;
              }
            }, 1);
          }
        };
        _proto.playWinAnim = function playWinAnim() {
          var _this7 = this;
          if (mouse.lotteryRes.winscore > 0) {
            if (mouse.lotteryRes.winscore > mouse.betSum * 5) {
              this.slotCtrl.playBigWinCoin(mouse.lotteryRes.winscore);
              this.audio.playBW();
            } else {
              this.showTipNode();
              this.mouseJumpDown();
              this.deskBack();
              if (mouse.lotteryRes.winscore < mouse.betSum * 3) {
                var _this$mouseAnim$getCo;
                (_this$mouseAnim$getCo = this.mouseAnim.getComponent(sp.Skeleton)) == null || _this$mouseAnim$getCo.setAnimation(0, "small_win", false);
              } else {
                var _this$mouseAnim$getCo2;
                (_this$mouseAnim$getCo2 = this.mouseAnim.getComponent(sp.Skeleton)) == null || _this$mouseAnim$getCo2.setAnimation(0, "medium_win", false);
              }
              this.slotCtrl.playAnimWin(0, mouse.lotteryRes.winscore);
              this.slotCtrl.setSpinAnim(0);
              if (mouse.auto && mouse.autoTimes > 0) {
                this.scheduleOnce(this.sendRoll, 1.5);
              }
            }
          } else {
            this.slotCtrl.setSpinAnim(0);
            this.scheduleOnce(function () {
              _this7.slotCtrl.setSpinAnim(0);
              if (mouse.auto && mouse.autoTimes > 0) {
                _this7.scheduleOnce(_this7.sendRoll, 1.5);
              }
            }, 1);
          }
          this.animIndex = 0;
          this.schedule(this.playLineEffect, 3, macro.REPEAT_FOREVER, 0.01);
        };
        _proto.showTipNode = function showTipNode() {
          this.tipNode.active = false;
          this.tipNode2.active = false;
          this.winNode.active = true;
          this.winNode.children[1].active = true;
          this.winNode.children[2].active = false;
          if (mouse.lotteryRes.winscore < mouse.betSum * 3) {
            var _this$coinBoomEffect$;
            (_this$coinBoomEffect$ = this.coinBoomEffect.getComponent(Animation)) == null || _this$coinBoomEffect$.play();
          } else if (mouse.lotteryRes.winscore >= mouse.betSum * 3 && mouse.lotteryRes.winscore < mouse.betSum * 5) {
            var _this$coinBoomEffect;
            this.winBG.active = true;
            (_this$coinBoomEffect = this.coinBoomEffect2.getComponent(Animation)) == null || _this$coinBoomEffect.play();
          }
        };
        _proto.playLineEffect = function playLineEffect() {
          var allLine = [];
          var lotteryRes;
          if (mouse.lotteryRes.getBigWin.res_list.length > 0) {
            lotteryRes = mouse.lotteryRes.getBigWin.res_list[mouse.lotteryRes.getBigWin.res_list.length - 1];
          } else {
            lotteryRes = mouse.lotteryRes;
          }
          for (var i in lotteryRes.nWinCards) {
            if (lotteryRes.nWinCards[i]) {
              allLine.push(Number(i));
            }
          }
          var lines = lotteryRes.nWinLinesDetail;
          var list = [allLine].concat(lines);
          var rIndex = mouse.lotteryRes.getBigWin.res_list.length;
          if (rIndex == mouse.rollIndex || rIndex == 1) {
            this.closeShine();
            for (var _i3 = 0; _i3 < 9; _i3++) {
              this.closeAnim(_i3 % 3, parseInt(_i3 / 3 + ""));
            }
            if (!!!list[this.animIndex] || list[this.animIndex].length == 0) {
              return;
            }
            this.maskNode.active = true;
            for (var j in list[this.animIndex]) {
              this.showAnim(list[this.animIndex][j] % 3, parseInt(list[this.animIndex][j] / 3 + ""));
            }
            this.effectNumGrey.active = true;
            if (this.animIndex == 0) {
              for (var _i4 = 0; _i4 < lotteryRes.nWinLines.length; _i4++) {
                this.effectLine.children[lotteryRes.nWinLines[_i4]].active = true;
                this.effectNum.children[lotteryRes.nWinLines[_i4]].active = true;
              }
            } else {
              this.effectLine.children[lotteryRes.nWinLines[this.animIndex - 1]].active = true;
              this.effectNum.children[lotteryRes.nWinLines[this.animIndex - 1]].active = true;
            }
            this.animIndex = this.animIndex + 1 > list.length - 1 ? 0 : this.animIndex + 1;
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          this.showTipNode();
          this.slotCtrl.playAnimWin(-1, mouse.lotteryRes.winscore);
          this.mouseJumpDown();
          this.deskBack();
        };
        _proto.showAnim = function showAnim(cols, index) {
          var targetIdx = index + 1;
          mouse.wheelList[cols].rolePbList[targetIdx].children[0].active = false;
          var nodeList = this.effectLight.children;
          var light = nodeList[cols * 3 + index];
          light.active = true;
          var lightAni = light.getComponent(Animation);
          lightAni.play();
          var nodeList2 = this.effectCard.children;
          var _loop3 = function _loop3() {
            var item = nodeList2[cols * 3 + index].children[i];
            if (i == mouse.wheelList[cols].roleIdList[targetIdx] - 1) {
              item.active = true;
              var ani = item.getComponent(sp.Skeleton);
              ani.setCompleteListener(function (event) {
                switch (event.animation.name) {
                  case "win":
                    ani.setAnimation(0, "win_idle", true);
                    break;
                }
              });
              ani.setAnimation(0, "win", false);
            } else {
              item.active = false;
            }
          };
          for (var i = 0; i < nodeList2[cols * 3 + index].children.length; i++) {
            _loop3();
          }
        };
        _proto.closeAnim = function closeAnim(cols, index) {
          var targetIdx = index + 1;
          mouse.wheelList[cols].rolePbList[targetIdx].children[0].active = true;
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
          if (!mouse.auto) {
            mouse.rollEnable = true;
          }
          mouse.status = 1;
          var line = [];
          for (var i = 0; i < 3; i++) {
            line[i] = [];
          }
          for (var _i5 in list) {
            var index = Number(_i5);
            line[index % 3][2 - Math.floor(index / 3)] = list[_i5];
          }
          for (var _i6 in mouse.wheelList) {
            if (mouse.rollIndex == 0) {
              var _mouse$wheelList$_i;
              (_mouse$wheelList$_i = mouse.wheelList[_i6]).startRoll.apply(_mouse$wheelList$_i, line[_i6]);
            } else {
              var _mouse$wheelList$_i2;
              (_mouse$wheelList$_i2 = mouse.wheelList[_i6]).FreeRoll.apply(_mouse$wheelList$_i2, line[_i6]);
            }
          }
          for (var _i7 = 0; _i7 < this.effectSpinLight.length; _i7++) {
            var _this$effectSpinLight;
            (_this$effectSpinLight = this.effectSpinLight[_i7].getComponent(Animation)) == null || _this$effectSpinLight.play();
          }
        };
        _proto.closeShine = function closeShine() {
          for (var i = 0; i < this.effectLine.children.length; i++) {
            this.effectLine.children[i].active = false;
          }
          this.effectNumGrey.active = false;
          for (var _i8 = 0; _i8 < this.effectNum.children.length; _i8++) {
            this.effectNum.children[_i8].active = false;
          }
          for (var _i9 = 0; _i9 < this.effectLight.children.length; _i9++) {
            this.effectLight.children[_i9].active = false;
          }
          for (var _i10 = 0; _i10 < this.effectCard.children.length; _i10++) {
            for (var j = 0; j < this.effectCard.children[_i10].children.length; j++) {
              this.effectCard.children[_i10].children[j].active = false;
            }
          }
          for (var _i11 = 0; _i11 < mouse.wheelList.length; _i11++) {
            for (var _j = 0; _j < mouse.wheelList[_i11].rolePbList.length; _j++) {
              mouse.wheelList[_i11].rolePbList[_j].children[0].active = true;
              mouse.wheelList[_i11].rolePbList[_j].children[1].active = false;
            }
          }
          this.maskNode.active = false;
        };
        _proto.sendRoll = function sendRoll() {
          mouse.rollIndex = 0;
          this.unschedule(this.playLineEffect);
          this.deskBg.spriteFrame = this.deskBgArr[0];
          if (mouse.detail) {
            if (this.deskMask) {
              this.deskMask.active = false;
            }
            mouse.detail.node.active = false;
            mouse.detail = null;
          }
          find("particle", this.node).removeAllChildren();
          this.closeShine();
          this.winBG.active = false;
          this.slotCtrl.unscheduleAllCallbacks();
          this.tipNode.active = true;
          this.tipNode2.active = false;
          this.winNode.active = false;
          mouse.autoTimes = mouse.autoTimes > 0 ? mouse.autoTimes - 1 : 0;
          if (mouse.autoTimes == 0) {
            mouse.auto = false;
          }
          this.slotCtrl.Btn_stopAuto.active = mouse.auto;
          this.slotCtrl.Btn_start.active = !this.slotCtrl.Btn_stopAuto.active;
          this.slotCtrl.setSpinAnim(1);
          this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = mouse.autoTimes + "";
          this.audio.playclickstart();
          if (mouse.autoTimes > 999) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.76, 0.76, 0.76);
          } else if (mouse.autoTimes > 99) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(0.9, 0.9, 0.9);
          } else {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
            this.slotCtrl.Btn_stopAuto.children[1].scale = new Vec3(1, 1, 1);
          }
          if (!this.bIsFreeGame) {
            for (var i in mouse.wheelList) {
              mouse.wheelList[i].rollLoop();
            }
          }
          this.sendLottery();
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.playSlots(SubGameDef.SLOTS_MOUSE, mouse.betSum + "");
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
          var _this8 = this;
          console.log('lotteryResult:', data);
          if (data && data.isSucc == true) {
            this.exchange(data.res);
            mouse.money = Number(data.res.coins) - Number(data.res.payout);
            this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.money);
            if (mouse.lotteryRes.getBigWin.isStart) {
              this.deskChange();
              tween(this.node).delay(5).call(function () {
                _this8.roll(mouse.lotteryRes.getBigWin.res_list[0].nHandCards);
                mouse.rollIndex++;
              }).start();
            } else {
              tween(this.node).delay(0.4).call(function () {
                _this8.roll(mouse.lotteryRes.nHandCards);
              }).start();
            }
          }
        };
        _proto.stopImmediately = function stopImmediately() {
          if (!mouse.auto) {
            for (var i in mouse.wheelList) {
              mouse.wheelList[i].stopImmediately();
            }
          }
        };
        _proto.exchange = function exchange(data) {
          var res = dataChange.change(data);
          mouse.lotteryRes = res;
        };
        _proto.close = function close() {
          this.audio.clearAll();
        };
        return mouseMain;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectLine", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "effectNumGrey", [_dec6], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "effectSpinLight", [_dec8], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "mulListNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "tipNode2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "winNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "coinBoomEffect", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "coinBoomEffect2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "winBG", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "mouseAnim", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "topMouseAnim", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "wildArr", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "flyParticle", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "deskBg", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "deskBgArr", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "eventShineArr", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "deskMask", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "desk", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "flowerArr", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "treeArr", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "goldArr", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "particle_wild", [_dec31], {
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

System.register("chunks:///_virtual/mouseSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts', './Num.ts', './LanguageData.ts', './LanguageSprite.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, mouse, Num, LanguageData, LanguageSprite;
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
      mouse = module.mouse;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      LanguageSprite = module.LanguageSprite;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "274a3XWr5hEhrdqG55F6pnz", "mouseSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var mouseSlotCtrl = exports('mouseSlotCtrl', (_dec = ccclass('mouseSlotCtrl'), _dec2 = property({
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
        _inheritsLoose(mouseSlotCtrl, _Component);
        function mouseSlotCtrl() {
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
          _this.isPanelAnim = false;
          _this.isSpeed = false;
          _this.bFastBigWin = false;
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
        var _proto = mouseSlotCtrl.prototype;
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
          if (!mouse.rollEnable) {
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
          if (!mouse.rollEnable) {
            return;
          }
          mouse.node.onCLick(e, 'roll');
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
          mouse.node.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(mouse.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.money);
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
          if (!mouse.betNum) {
            mouse.sumIdx = 0;
            mouse.betNum = this.sumList[mouse.sumIdx];
          } else {
            mouse.sumIdx = this.sumList.indexOf(mouse.betNum);
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
          mouse.node.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          mouse.autoPanel.showPanel();
        };
        //打开设置界面
        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          mouse.node.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", mouse.node.node);
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
          var footer = find("ui_footer/ui_footer_a", mouse.node.node);
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
            mouse.betPanel.hidePanel();
          } else {
            mouse.betPanel.showPanel();
            mouse.betPanel.bindBet();
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
          mouse.node.audio.playclickopen();
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
          mouse.sumIdx = this.sumList.indexOf(mouse.betSum);
          if (mouse.sumIdx == -1) {
            mouse.sumIdx = 0;
          }
          this.updateBet(mouse.sumIdx);
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
          if (mouse.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (mouse.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (mouse.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (mouse.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          mouse.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.betSum);
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
          mouse.node.winNode.children[0].getComponent(Label).string = Num.exchangeToThousands(mouse.exchangeRate, coin);
          this.winCoin_lab.string = Num.exchangeToThousands(mouse.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(mouse.exchangeRate, mouse.lotteryRes.userscore - mouse.lotteryRes.winscore + coin);
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
          var node = mouse.node.winNode;
          tween(node).to(0.5, {
            scale: new Vec3(1.2, 1.2)
          }).to(0.2, {
            scale: new Vec3(1, 1)
          }).start();
        };
        _proto.playBigWinCoin = function playBigWinCoin(coin) {
          mouse.node.unschedule(mouse.node.sendRoll);
          this.bigWinNode.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(mouse.exchangeRate, this.addcoin);
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
            this.bigWinCoin_lab.string = Num.exchangeToThousands(mouse.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(mouse.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 5);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= mouse.betSum * 35 && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= mouse.betSum * 15 && coin < mouse.betSum * 35 && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (coin >= mouse.betSum * 5 && this.bigBn == false) {
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
        };
        //大奖BigWin动画
        _proto.playAnim_BigWin = function playAnim_BigWin(coin) {
          var _this$bigWin$getCompo;
          this.bigWinNode.active = true;
          this.bigWinBg.scale = new Vec3(1, 1);
          this.bigWinPoint.active = false;
          this.bigWinCoinParticle.active = false;
          this.bigWinBw.dataID = "bw";
          (_this$bigWin$getCompo = this.bigWin.getComponent(Animation)) == null || _this$bigWin$getCompo.play();
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin(coin) {
          var _this$bigWin$getCompo2;
          this.bigWinNode.active = true;
          tween(this.bigWinBg).to(0.5, {
            scale: new Vec3(1.5, 1.5)
          }).to(0.1, {
            scale: new Vec3(1.4, 1.4)
          }).start();
          this.bigWinPoint.active = true;
          this.bigWinCoinParticle.active = false;
          this.bigWinBw.dataID = "mw";
          (_this$bigWin$getCompo2 = this.bigWin.getComponent(Animation)) == null || _this$bigWin$getCompo2.play();
        }

        //大奖MegaWin动画
        ;

        _proto.playAnim_MegaWin = function playAnim_MegaWin(coin) {
          var _this$bigWin$getCompo3;
          this.bigWinNode.active = true;
          tween(this.bigWinBg).to(0.5, {
            scale: new Vec3(1.9, 1.9)
          }).to(0.1, {
            scale: new Vec3(1.8, 1.8)
          }).start();
          this.bigWinPoint.active = true;
          this.bigWinCoinParticle.active = true;
          this.bigWinBw.dataID = "smw";
          (_this$bigWin$getCompo3 = this.bigWin.getComponent(Animation)) == null || _this$bigWin$getCompo3.play();
        };
        _proto.initBigWin = function initBigWin() {
          this.bigWinBg.scale = new Vec3(1, 1);
          this.bigWinPoint.active = false;
          this.bigWinCoinParticle.active = false;
          this.bigWinBw.dataID = "bw";
        };
        _proto.closeBigWin = function closeBigWin() {
          this.unschedule(this.closeBigWin);
          if (this.bigWinNode.active) {
            this.initBigWin();
            this.bigWinNode.active = false;
            mouse.node.audio.stopbigwinmain();
          }
          mouse.node.closeBigWin();
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              mouse.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !mouse.auto && this.setButtonState(true);
              if (mouse.lotteryRes && mouse.lotteryRes.winscore == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              mouse.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(mouse.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              mouse.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              mouse.rollEnable = false;
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
          this.lblCurBet.node.parent.getComponent(Button).interactable = state;
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
        _createClass(mouseSlotCtrl, [{
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
        }, {
          key: "bigWinBg",
          get: function get() {
            return this.bigWinNode.getChildByName("bg");
          }
        }, {
          key: "bigWinPoint",
          get: function get() {
            return this.bigWinNode.getChildByName("point");
          }
        }, {
          key: "bigWinCoinParticle",
          get: function get() {
            return this.bigWinNode.getChildByName("coinParticle");
          }
        }, {
          key: "bigWin",
          get: function get() {
            return this.bigWinNode.getChildByName("win");
          }
        }, {
          key: "bigWinBw",
          get: function get() {
            return this.bigWin.getChildByName("bw").getComponent(LanguageSprite);
          }
        }]);
        return mouseSlotCtrl;
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

System.register("chunks:///_virtual/mouseWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, tween, Layout, instantiate, Component, Button, UITransform, Vec3, mouse;
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
      Layout = module.Layout;
      instantiate = module.instantiate;
      Component = module.Component;
      Button = module.Button;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
    }, function (module) {
      mouse = module.mouse;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "5fd105UrJVNd4zV1gs5eUtS", "mouseWheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ROLENUM = 30; //每一轮的角色数量
      var TIMEMIN = 1; //第一轮摇奖时间
      var H_Item = 200;
      var FIRSTROLE = [
      //进入游戏时每列的角色
      [6, 6, 6, 6, 6], [7, 7, 7, 7, 7], [5, 5, 5, 5, 5]];
      var mouseWheel = exports('mouseWheel', (_dec = ccclass('mouseWheel'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mouseWheel, _Component);
        function mouseWheel() {
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
          return _this;
        }
        var _proto = mouseWheel.prototype;
        _proto.onLoad = function onLoad() {
          mouse.wheelList[this.wheelId] = this;
          this.status = 0; //0停止 1转  
          this.lastResult = [0, 0, 0, 0, 0]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样  
          this.nextCb = null; //下一步需要执行的回调 
          this.rolePbList = []; //roles 
          this.roleIdList = []; //role ID 
        };

        _proto.start = function start() {
          this.initWheel();
        };
        _proto.removeAllChildren = function removeAllChildren() {
          for (var i = this.node.children.length - 1; i >= 0; i--) {
            this.node.children[i].destroy();
          }
        };
        _proto.initWheel = function initWheel() {
          if (mouse.isNewUser) {
            this.lastResult = FIRSTROLE[this.wheelId]; //中间三位是上一局结果 首位末尾是为了防止露出部分转起来不一样 
          } else {
            this.lastResult = [0, 0, 0, 0, 0];
          }
          this.rolePbList = [];
          this.roleIdList = [];
          this.removeAllChildren();
          for (var i in this.lastResult) {
            if (mouse.isNewUser) {
              this.addRole(this.lastResult[i]);
            } else {
              this.lastResult[i] = this.getRandomId();
              this.addRole(this.lastResult[i]);
            }
          }
          this.addRole(this.getRandomId());
          this.node.y = 0;
          mouse.rollIndex++;
          mouse.node.closeShine();
          this.lastResult = this.roleIdList.slice(-5);
        };
        _proto.startRoll = function startRoll() {
          var _this2 = this;
          for (var i = 0; i < arguments.length; i++) {
            this.addRole(i < 0 || arguments.length <= i ? undefined : arguments[i], 0);
          }
          this.addRole(this.getRandomId(), 0);
          if (mouse.slotCtrl.isSpeed) {
            setTimeout(function () {
              _this2.stopImmediately();
            }, 300);
          }
          var cb = function cb() {
            _this2.setBlur(false);
            tween(_this2.node).to(0.1, {
              y: -_this2.node.h + H_Item * 4 - 50
            }).to(0.1, {
              y: -_this2.node.h + H_Item * 4
            }).call(function () {
              _this2.rollCallBack();
            }).start();
          };
          this.nextCb = cb;
        };
        _proto.FreeRoll = function FreeRoll() {
          var _this3 = this;
          this.status = 1;
          var mul = 4;
          // this.removeAllChildren();
          // for (let i in this.lastResult) {
          //     this.addRole(this.lastResult[i]);
          // }
          for (var i = 0; i < ROLENUM * (mul - 1); i++) {
            this.addRole(this.getRandomId(), 0);
          }
          for (var _i = 0; _i < arguments.length; _i++) {
            this.addRole(_i < 0 || arguments.length <= _i ? undefined : arguments[_i], 0);
          }
          this.addRole(this.getRandomId(), 0);
          setTimeout(function () {
            var timer = 0.6 * mul;
            var delay = 0;
            if (!mouse.slotCtrl.isSpeed) {
              delay = _this3.wheelId * 0.2;
            }
            tween(_this3.node).delay(delay).to(timer, {
              y: -_this3.node.h + H_Item * 4 - 50
            }).to(0.1, {
              y: -_this3.node.h + H_Item * 4
            }).call(function () {
              _this3.rollCallBack();
            }).start();
          }, 1000);
        };
        _proto.rollLoop = function rollLoop() {
          var _this4 = this;
          this.status = 1;
          this.rolePbList = [];
          this.roleIdList = [];
          this.removeAllChildren();
          this.node.y = 0; //滚轮启动位移距离 
          for (var i = 0; i < this.lastResult.length; i++) {
            this.lastResult[i] = this.lastResult[i] == 0 ? this.getRandomId() : this.lastResult[i];
            this.addRole(this.lastResult[i]);
          }
          for (var _i2 = 0; _i2 < ROLENUM - 10; _i2++) {
            this.addRole(this.getRandomId(), 0);
          }
          var delay = 0;
          if (!mouse.slotCtrl.isSpeed) {
            delay = this.wheelId * 0.2;
          }
          var loopCb = function loopCb() {
            _this4.node.y = 0; //滚轮启动位移距
            _this4.setBlur(true);
            tween(_this4.node).to(TIMEMIN, {
              y: -_this4.node.h + H_Item * 4
            }).call(function () {
              _this4.nextCb();
            }).start();
          };
          this.node.getComponent(Layout).updateLayout();
          tween(this.node).delay(delay).to(0.16, {
            y: 30
          }).call(function () {
            _this4.setBlur(true);
          }).to(TIMEMIN, {
            y: -this.node.h + H_Item * 4
          }).call(function () {
            loopCb();
          }).start();
          this.nextCb = loopCb;
        };
        _proto.getRandomId = function getRandomId() {
          var randomId = 0;
          while (randomId == 0) {
            randomId = Math.floor(Math.random() * (mouse.node.rolePb.length - 1) + 1);
            randomId = randomId == this.excludeId ? 0 : randomId;
          }
          return randomId;
        };
        _proto.addRole = function addRole(id, posId) {
          if (posId === void 0) {
            posId = undefined;
          }
          var pb = instantiate(mouse.node.rolePb[id]);
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
        _proto.rollCallBack = function rollCallBack() {
          mouse.node.audio.playStopWheel();
          this.node.children[0].opacity = 0;
          this.node.children[4].opacity = 0;
          this.lastResult = this.roleIdList.slice(0, 5);
          this.status = 0;
          mouse.node.stateCallBack();
        };
        _proto.stopImmediately = function stopImmediately() {
          var _this5 = this;
          this.lastResult = this.roleIdList.slice(0, 5);
          setTimeout(function () {
            _this5.setBlur(false);
            _this5.node.y = -_this5.node.h + H_Item * 4;
          }, 50);
          this.status = 0;
          mouse.node.stateCallBack();
        };
        _proto.addClickEvent = function addClickEvent(node, idx) {
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点 
          clickEventHandler.component = "mouseWheel"; // 这个是代码文件名 
          clickEventHandler.handler = "roleClick";
          clickEventHandler.customEventData = idx + "";
          var button = node.getComponent(Button);
          button.clickEvents.push(clickEventHandler);
        };
        _proto.roleClick = function roleClick(event, customEventData) {
          if (mouse.detail) {
            mouse.node.deskMask.active = false;
            mouse.detail.node.parent = null;
            mouse.detail = null;
            return;
          }
          var newNode = instantiate(mouse.node.detailPb);
          var transForm = event.target.getComponent(UITransform);
          var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
          transForm = mouse.node.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(newVec3);
          newNode.position = p;
          newNode.x -= 50;
          var isLeft = newNode.x < 10;
          newNode.getComponent("mouseDetail").init(Number(customEventData), isLeft);
          mouse.node.node.addChild(newNode);
          mouse.node.deskMask.active = true;
        };
        _proto.setBlur = function setBlur(state) {
          for (var i in this.rolePbList) {
            this.rolePbList[i].children[0].active = !state; //实图 
            this.rolePbList[i].children[1].active = state; //虚图 
          }
        };

        return mouseWheel;
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

System.register("chunks:///_virtual/payPanel3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, mouse;
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
      mouse = module.mouse;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c8f28FBNXlOwamp6S886rSP", "payPanel", undefined);
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
          mouse.payPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          mouse.node.audio.playclickopen();
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
          mouse.node.audio.playclickclose();
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

System.register("chunks:///_virtual/rulePanel3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMouse.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, mouse;
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
      mouse = module.mouse;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1aa6ekJQmZMnLhyXgWhZW03", "rulePanel", undefined);
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
          mouse.rulePanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          mouse.node.audio.playclickopen();
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
          mouse.node.audio.playclickclose();
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

System.register("chunks:///_virtual/SlotsMouseGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "060e69wn7hIaqVnFPwnLMYM", "SlotsMouseGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsMouseGameMgr = exports('SlotsMouseGameMgr', (_dec = ccclass('SlotsMouseGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsMouseGameMgr, _GameMgr);
        function SlotsMouseGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_MOUSE;
          _this.mainName = "mouseMain";
          _this._gameType = SubGameDef.SLOTS_MOUSE;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_mouse',
            bundle: ModuleDef.SLOTS_MOUSE
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsMouseGameMgr.prototype;
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
        _createClass(SlotsMouseGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsMouseGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsMouseGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsMouseGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsMouseLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './SlotsMouseGameMgr.ts', './SubGameDef.ts', './SubGameMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, SlotsMouseGameMgr, SubGameDef, SubGameMgr;
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
      SlotsMouseGameMgr = module.SlotsMouseGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ab7fdGncW9H/K2353HFzsxZ", "SlotsMouseLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsMouseLobbyScene = exports('SlotsMouseLobbyScene', (_dec = ccclass('SlotsMouseLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsMouseLobbyScene, _Component);
        function SlotsMouseLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsMouseLobbyScene.prototype;
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
                  SlotsMouseGameMgr.inst.initSoloMode();
                  SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_MOUSE, true);
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
        return SlotsMouseLobbyScene;
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
  r('virtual:///prerequisite-imports/module_slots_mouse', 'chunks:///_virtual/module_slots_mouse'); 
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