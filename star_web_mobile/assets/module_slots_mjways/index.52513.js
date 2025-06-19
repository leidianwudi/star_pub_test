System.register("chunks:///_virtual/autoPanel5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, Num, mjways;
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
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "83628r0A1xDRrL/LABp9Shy", "autoPanel", undefined);
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
          mjways.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.money);
          this.lblCurBet.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.betSum);
          this.winCoin_lab.string = mjways.slotCtrl.winCoin_lab.string;
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
            mjways.main.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // mjways.audio.playclickopen();
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
          // mjways.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "7c55fNvL9ZMmIs/83uwHU8K", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './betNum6.ts', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, Num, betNum, mjways;
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
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "6994cUniOFO8IZj3vxtpplQ", "betPanel", undefined);
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
          mjways.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = mjways.BETNUM;
          this.betList = mjways.BET;
          this.line = mjways.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.money);
          this.lblCurBet.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.betSum);
          this.winCoin_lab.string = mjways.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(mjways.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(mjways.exchangeRate, sumList[_i3]);
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
          mjways.betNum = this.tempi;
          mjways.bet = this.tempj;
          mjways.sumIdx = this.tempindex;
          mjways.betSum = this.sumList[mjways.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.betSum);
          mjways.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(mjways.sumIdx);
          this.val3 = mjways.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // mjways.main.audio.playclickopen();
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
          // mjways.main.audio.playclickclose();
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

System.register("chunks:///_virtual/cMjways.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts', './mjwaysBigwin.ts', './dataChange5.ts'], function (exports) {
  var _createClass, cclegacy, instantiate, SubGameDef, mjwaysBigwin, dataChange;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      mjwaysBigwin = module.mjwaysBigwin;
    }, function (module) {
      dataChange = module.dataChange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "300b1HKaV1F97yQHRZNPnUL", "cMjways", undefined);
      var cMjways = /*#__PURE__*/function () {
        function cMjways() {
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          this.main = null;
          this.audio = null;
          this.bg = null;
          this.slotCtrl = null;
          this.infoBoard = null;
          this.detail = null;
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
          this._bigwin = void 0;
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
          this.tempWin = 0;
        }
        _createClass(cMjways, [{
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
          key: "bigwin",
          get: function get() {
            if (!this._bigwin) {
              this._bigwin = instantiate(this.main.bigwin).getComponent(mjwaysBigwin);
            }
            return this._bigwin;
          },
          set: function set(v) {
            this._bigwin = v;
          }
        }, {
          key: "rollEnable",
          get: function get() {
            return this._rollEnable;
          },
          set: function set(v) {
            this._rollEnable = v;
            if (v) {
              this.main.playVoxRandom();
            } else {
              this.main.stopVoxRandom();
            }
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
          /**上次摇奖数据 */
        }, {
          key: "preResult",
          get: function get() {
            return this.lotteryRes.results[this.resultIndex - 1];
          }
          /**回合数据 */
        }, {
          key: "round",
          get: function get() {
            return this.result.rounds[this.roundIndex];
          }

          /**是否开启辛运时刻 */
        }, {
          key: "fortuneBn",
          get: function get() {
            if (!this.lotteryRes) return false;
            return this.lotteryRes.results.length > 1;
          }
        }, {
          key: "inFortune",
          get: function get() {
            if (!this.lotteryRes) return false;
            return this.lotteryRes.results.length > 1 && this.resultIndex > 0;
          }

          /**播放结束 */
        }, {
          key: "playOverBn",
          get: function get() {
            return this.resultIndex > this.lotteryRes.results.length - 1;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cMjways();
            }
            return this._instance;
          }
        }]);
        return cMjways;
      }();
      cMjways._instance = null;
      var mjways = exports('mjways', cMjways.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange5.ts", ['cc', './mjwaysSymbol.ts'], function (exports) {
  var cclegacy, ESYMBOLID;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d4eb3sjKxKlb0UncykLv3j", "dataChange", undefined);
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
              tempRound.removeType = this.removeTypeChange(round.paySymbols);
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
            if (index >= 0) res[index] = gold;
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
        dataChange.removeTypeChange = function removeTypeChange(paySymbols) {
          var res;
          if (paySymbols.length > 1) {
            res = 0;
          } else if (paySymbols.length == 1) {
            var paySymbol = paySymbols[0];
            var id = this.transformId(paySymbol.id);
            res = id;
          }
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
        };
        dataChange.posToIndex = function posToIndex(pos) {
          return (pos.reel - 1) * 6 + pos.row - 1;
        };
        dataChange.transformId = function transformId(curid) {
          var _idMap$curid;
          var idMap = {
            "11": ESYMBOLID.twoL,
            "00": ESYMBOLID.twoO,
            "11111": ESYMBOLID.fiveL,
            "00000": ESYMBOLID.fiveO,
            "cracks": ESYMBOLID.cracks,
            "square": ESYMBOLID.square,
            "red": ESYMBOLID.red,
            "green": ESYMBOLID.green,
            "scatter": ESYMBOLID.scatter,
            "wildcard": ESYMBOLID.wild
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

System.register("chunks:///_virtual/lastmoneyPanel6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, Num, mjways;
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
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f22ecpaJSFGzoYRrMjZvAvu", "lastmoneyPanel", undefined);
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
          mjways.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // mjways.main.audio.playclickopen();
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
          // mjways.main.audio.playclickclose();
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

System.register("chunks:///_virtual/mjwaysAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './cMjways.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, ModuleDef, mjways;
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
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8d346bve4JBF4nuv2hMMIBR", "mjwaysAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysAudio = exports('mjwaysAudio', (_dec = ccclass('mjwaysAudio'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysAudio, _Component);
        function mjwaysAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.urlArr = ["sound/bgm_mg", "sound/bgm_bonus_loop"];
          _this.bgmIndex = void 0;
          /**滚动结束 */
          _this.playReelEndBn = false;
          /**bigwin */
          _this.bigwinId = void 0;
          /**bigwin end */
          _this.bigwinEndId = void 0;
          return _this;
        }
        var _proto = mjwaysAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          mjways.audio = this;
        };
        _proto.playBgm = function playBgm(index) {
          if (this.bgmIndex == index) return;
          this.bgmIndex = index;
          tgx.AudioMgr.inst.audio.stopMusic();
          tgx.AudioMgr.inst.audio.playMusicLoop(this.urlArr[index], ModuleDef.SLOTS_MJWAYS);
        }

        /**倍数音效*/;
        _proto.playVoxMultiply = function playVoxMultiply(num) {
          var numArr = [2, 3, 4, 5, 6, 10];
          var index = numArr.indexOf(num);
          if (index == -1) return;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.voxMultiply + num + "x", ModuleDef.SLOTS_MJWAYS);
          this.scheduleOnce(function () {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.fsMultiplyRefresh, ModuleDef.SLOTS_MJWAYS);
          }, 0.5);
        }

        /**消除音效*/;
        _proto.playVoxPayout = function playVoxPayout(index) {
          var arr = ["2tiao", "2tong", "3tong", "5tiao", "5tong", "8wan", "Baiban", "Hongzhong", "Facai"];
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.voxPayout + arr[index], ModuleDef.SLOTS_MJWAYS);
        }

        /**全中 */;
        _proto.playVoxPayoutMultiSym = function playVoxPayoutMultiSym() {
          var arr = ["01", "02"];
          var index = Math.floor(Math.random() * arr.length);
          index = index == arr.length ? arr.length - 1 : index;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.voxPayoutMultiSym + arr[index], ModuleDef.SLOTS_MJWAYS);
        }

        /**待机音效 */;
        _proto.playVoxRandom = function playVoxRandom() {
          var arr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          var index = Math.floor(Math.random() * arr.length);
          index = index == arr.length ? arr.length - 1 : index;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.voxRandom + arr[index], ModuleDef.SLOTS_MJWAYS);
        }

        /**滚动开始 */;
        _proto.playReelLoop = function playReelLoop(speedBn) {
          if (speedBn) {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelQuickstop, ModuleDef.SLOTS_MJWAYS);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelLoop, ModuleDef.SLOTS_MJWAYS);
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
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelQuickstop, ModuleDef.SLOTS_MJWAYS);
          } else {
            tgx.AudioMgr.inst.audio.playEffect(EEFFECT.reelStopSingle, ModuleDef.SLOTS_MJWAYS);
          }
        };
        _proto.playFsDragonFly = function playFsDragonFly() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.fsDragonFly, ModuleDef.SLOTS_MJWAYS);
        }

        /**spawn wild */;
        _proto.playSpawnWild = function playSpawnWild() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symbolWild, ModuleDef.SLOTS_MJWAYS);
        }
        /**spawn Scatter */;
        _proto.playSpawnScatter = function playSpawnScatter() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symbolScatter, ModuleDef.SLOTS_MJWAYS);
        }

        /**消除 */;
        _proto.playSymbolShrink = function playSymbolShrink() {
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.symbolShrink, ModuleDef.SLOTS_MJWAYS);
        };
        _proto.playBigwin = function playBigwin() {
          var _this3 = this;
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgmBigwinMain, ModuleDef.SLOTS_MJWAYS).then(function (value) {
            _this3.bigwinId = value;
          });
        };
        _proto.playBigwinEnd = function playBigwinEnd() {
          var _this4 = this;
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinId, EEFFECT.bgmBigwinMain, ModuleDef.SLOTS_MJWAYS);
          tgx.AudioMgr.inst.audio.playEffect(EEFFECT.bgmBigwinEnd, ModuleDef.SLOTS_MJWAYS).then(function (value) {
            _this4.bigwinEndId = value;
          });
        };
        _proto.stopBigwinEnd = function stopBigwinEnd() {
          tgx.AudioMgr.inst.audio.stopEffect(this.bigwinEndId, EEFFECT.bgmBigwinEnd, ModuleDef.SLOTS_MJWAYS);
        };
        return mjwaysAudio;
      }(Component)) || _class));
      var EEFFECT = exports('EEFFECT', /*#__PURE__*/function (EEFFECT) {
        EEFFECT["voxMultiply"] = "sound/vox_extract/voxMultiply";
        EEFFECT["fsMultiplyRefresh"] = "sound/general_audio_extract/fsMultiplyRefresh";
        EEFFECT["voxPayout"] = "sound/vox_extract/voxPayout";
        EEFFECT["voxPayoutMultiSym"] = "sound/vox_extract/voxPayoutMultiSym";
        EEFFECT["voxRandom"] = "sound/vox_extract/voxRandom";
        EEFFECT["reelLoop"] = "sound/general_audio_extract/reelLoop";
        EEFFECT["reelQuickstop"] = "sound/general_audio_extract/reelQuickstop";
        EEFFECT["reelStopSingle"] = "sound/general_audio_extract/reelStopSingle";
        EEFFECT["bgmBigwinMain"] = "sound/general_audio_extract/bgmBigwinMain";
        EEFFECT["bgmBigwinEnd"] = "sound/general_audio_extract/bgmBigwinEnd";
        EEFFECT["fsDragonFly"] = "sound/general_audio_extract/fsDragonFly";
        EEFFECT["symbolScatter"] = "sound/general_audio_extract/symbolScatter";
        EEFFECT["symbolShrink"] = "sound/general_audio_extract/symbolShrink";
        EEFFECT["symbolWild"] = "sound/general_audio_extract/symbolWild";
        return EEFFECT;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mjwaysBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './mjwaysMul.ts', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component, mjwaysMul, mjways;
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
      Component = module.Component;
    }, function (module) {
      mjwaysMul = module.mjwaysMul;
    }, function (module) {
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8b5e8VCwX9G5ZeSA3q/1Eo7", "mjwaysBg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysBg = exports('mjwaysBg', (_dec = ccclass('mjwaysBg'), _dec2 = property({
        type: mjwaysMul,
        tooltip: "倍数"
      }), _dec3 = property({
        type: [Node],
        tooltip: "背景节点"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysBg, _Component);
        function mjwaysBg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mul", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodes", _descriptor2, _assertThisInitialized(_this));
          /**是否启用幸运模式 */
          _this._fortuneBn = false;
          return _this;
        }
        var _proto = mjwaysBg.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.init();
        };
        _proto.init = function init() {
          this.fortuneBn = false;
          mjways.bg = this;
        };
        _proto.doNodes = function doNodes(func) {
          for (var i = 0; i < this.nodes.length; i++) {
            func(this.nodes[i], i);
          }
        };
        _createClass(mjwaysBg, [{
          key: "fortuneBn",
          get: function get() {
            return this._fortuneBn;
          },
          set: function set(v) {
            this._fortuneBn = v;
            this.mul.fortuneBn = v;
            this.doNodes(function (node) {
              node.children[0].active = v;
            });
            if (v == false) mjways.slotCtrl.lastNum = -1;
            mjways.audio.playBgm(v ? 1 : 0);
          }
        }]);
        return mjwaysBg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mul", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodes", [_dec3], {
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

System.register("chunks:///_virtual/mjwaysBigwin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './LanguageSprite.ts', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, macro, instantiate, Vec3, tween, Component, Num, LanguageSprite, mjways;
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
      macro = module.macro;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageSprite = module.LanguageSprite;
    }, function (module) {
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9fd2bVovT9AKY2uPELmDkkj", "mjwaysBigwin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysBigwin = exports('mjwaysBigwin', (_dec = ccclass('mjwaysBigwin'), _dec2 = property({
        type: Label,
        tooltip: "coin label"
      }), _dec3 = property({
        type: LanguageSprite,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysBigwin, _Component);
        function mjwaysBigwin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinBw", _descriptor2, _assertThisInitialized(_this));
          //大奖数字滚动动画
          _this.aimCoin = 0;
          _this.addcoin = 0;
          _this.addOnce = 0;
          _this._playOverBn = true;
          _this._coin = 0;
          _this.bigBn = false;
          _this.superBn = false;
          _this.megaBn = false;
          /**金币工厂 自产自销*/
          _this.coinNum = 0;
          _this.pb = void 0;
          return _this;
        }
        var _proto = mjwaysBigwin.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.init();
        };
        _proto.init = function init() {
          this.coin = 0;
          this.coinLabel.string = "0";
        };
        _proto.bigwincoin = function bigwincoin(coin) {
          this.node.parent = mjways.main.node;
          mjways.audio.playBigwin();
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
          this.coinLabel.string = Num.exchangeToThousands(mjways.exchangeRate, this.addcoin);
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
            this.coinLabel.string = Num.exchangeToThousands(mjways.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          mjways.audio.playBigwinEnd();
          this.playOverBn = true;
          this.coinLabel.string = Num.exchangeToThousands(mjways.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 5);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= mjways.betSum * 35 && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= mjways.betSum * 15 && coin < mjways.betSum * 35 && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (coin < mjways.betSum * 15 && this.bigBn == false) {
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
          this.bigWinBw.dataID = "bw_text";
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin(coin) {
          this.bigWinBw.dataID = "mw_text";
        }

        //大奖MegaWin动画
        ;

        _proto.playAnim_MegaWin = function playAnim_MegaWin(coin) {
          this.bigWinBw.dataID = "smw_text";
        };
        _proto.createCoins = function createCoins() {
          this.schedule(this.coinFactory, 0.2, macro.REPEAT_FOREVER);
        };
        _proto.coinFactory = function coinFactory() {
          var _this2 = this;
          var node = instantiate(this.pb);
          node.parent = this.node;
          this.coinNum++;
          node.setSiblingIndex(Math.random() > 0.5 ? this.coinNum + 1 : 0 + Math.floor(2 * Math.random()));
          var startPos = new Vec3(0, 0);
          var endPos = new Vec3();
          endPos.x = startPos.x;
          endPos.y = -1000;
          node.position = startPos;
          tween(node).to(5, {
            position: endPos
          }).call(function () {
            node.parent = null;
            _this2.coinNum--;
          }).start();
        };
        _proto.closeBigWin = function closeBigWin() {
          this.unschedule(this.closeBigWin);
          mjways.audio.stopBigwinEnd();
          mjways.main.closeBigWin();
          this.node.destroy();
          mjways.bigwin = undefined;
        };
        _createClass(mjwaysBigwin, [{
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
        return mjwaysBigwin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec2], {
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

System.register("chunks:///_virtual/mjwaysDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMjways.ts', './mjwaysSymbol.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, Component, mjways, mjwaysSymbol, ESYMBOLID;
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
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      mjways = module.mjways;
    }, function (module) {
      mjwaysSymbol = module.mjwaysSymbol;
      ESYMBOLID = module.ESYMBOLID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "e5b3dQnc/ZE/oHWtQ5gHeLo", "mjwaysDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [["1", "3", "6"], ["1", "3", "6"], ["2", "4", "10"], ["3", "5", "12"], ["3", "5", "12"], ["5", "10", "15"], ["6", "15", "30"], ["8", "20", "40"], ["10", "25", "50"]];
      var mjwaysDetail = exports('mjwaysDetail', (_dec = ccclass('mjwaysDetail'), _dec2 = property({
        type: Node,
        tooltip: "背景板"
      }), _dec3 = property({
        type: mjwaysSymbol,
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
        _inheritsLoose(mjwaysDetail, _Component);
        function mjwaysDetail() {
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
        var _proto = mjwaysDetail.prototype;
        _proto.init = function init(symbol) {
          this.symbol.getComponent(Button).enabled = false;
          var symbolId = symbol.symbolId;
          var reelIndex = symbol.reelDate.index;
          this.symbol.goldBn = symbol.goldBn;
          var idx = symbolId - 1;
          this.symbol.symbolId = symbolId;
          this.symbol.spawn();
          if (symbolId == ESYMBOLID.wild || symbolId == ESYMBOLID.scatter) {
            this.bg.w = 450;
            this.numNode.active = false;
            this.specialNode.active = true;
            this.specialNode.children[0].active = symbolId == ESYMBOLID.scatter;
            this.specialNode.children[1].active = !this.specialNode.children[0].active;
          } else {
            this.bg.w = 310;
            this.numNode.active = true;
            this.specialNode.active = false;
            var strs = GAME_COMBINATIONS[idx];
            for (var i = 0; i < strs.length; i++) {
              this.nums[i].string = strs[i];
            }
          }
          if (reelIndex <= 2) {
            this.bg.x = -80;
            this.bg.scale_x = 1;
            this.numNode.x = 110;
            this.specialNode.x = 220;
          } else {
            this.bg.x = 80;
            this.bg.scale_x = -1;
            this.numNode.x = -160;
            this.specialNode.x = -220;
          }
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
          var symbols = mjways.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
          }
          mjways.main.dark.active = false;
        };
        return mjwaysDetail;
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

System.register("chunks:///_virtual/mjwaysFreeEnd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './labNumShow.ts', './bezierMove.ts', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, tween, Vec3, macro, instantiate, NodePool, Component, labNumShow, bezierMove, mjways;
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
      labNumShow = module.labNumShow;
    }, function (module) {
      bezierMove = module.bezierMove;
    }, function (module) {
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "3d105UXnRxMw5QL5YHyMzcE", "mjwaysFreeEnd", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysFreeEnd = exports('mjwaysFreeEnd', (_dec = ccclass('mjwaysFreeEnd'), _dec2 = property({
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
        _inheritsLoose(mjwaysFreeEnd, _Component);
        function mjwaysFreeEnd() {
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
        var _proto = mjwaysFreeEnd.prototype;
        _proto.start = function start() {
          this.node.active = false;
          this.node.opacity = 0;
        };
        _proto.setParent = function setParent(coin) {
          this.node.parent = mjways.slotCtrl.node;
          this.show(coin);
        };
        _proto.show = function show(coin) {
          // mjways.audio.playTotalwin();
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
            // mjways.audio.playTotalwinEnd();
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
            mjways.main.freeEndBack();
            _this5.node.destroy();
          }).start();
        };
        _proto.onHide = function onHide() {
          if (this.showBtnBn) {
            this.hide();
          }
        };
        _createClass(mjwaysFreeEnd, [{
          key: "pool",
          get: function get() {
            if (!this._pool) this._pool = new NodePool();
            return this._pool;
          }
        }]);
        return mjwaysFreeEnd;
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

System.register("chunks:///_virtual/mjwaysFreeStart.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, tween, Vec3, Sprite, Component, mjways;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "389bbaNFEZDJZ5D69BmYg6U", "mjwaysFreeStart", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysFreeStart = exports('mjwaysFreeStart', (_dec = ccclass('mjwaysFreeStart'), _dec2 = property({
        type: Label,
        tooltip: "免费次数"
      }), _dec3 = property({
        type: Label,
        tooltip: ""
      }), _dec4 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysFreeStart, _Component);
        function mjwaysFreeStart() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "count", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progress", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor3, _assertThisInitialized(_this));
          /**是否显示按钮 */
          _this._showBtnBn = false;
          _this._clickBn = void 0;
          return _this;
        }
        var _proto = mjwaysFreeStart.prototype;
        _proto.onLoad = function onLoad() {
          this.showBtnBn = false;
          this.progress.string = "0";
          this.clickBn = false;
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
          this.node.parent = mjways.slotCtrl.node;
          this.doProgress();
          this.scheduleOnce(this.close, 5);
          this.count.string = mjways.lotteryRes.results[1].leftFreeCount + "";
          mjways.slotCtrl.lastNum = mjways.lotteryRes.results[1].leftFreeCount;
          mjways.bg.fortuneBn = true;
        };
        _proto.close = function close() {
          this.node.destroy();
          mjways.main.freeStartBack();
        };
        _proto.onClose = function onClose() {
          var _this3 = this;
          if (this.showBtnBn) {
            this.clickBn = true;
            this.scheduleOnce(function () {
              _this3.close();
            }, 0.5);
          }
        };
        _createClass(mjwaysFreeStart, [{
          key: "showBtnBn",
          get: function get() {
            return this._showBtnBn;
          },
          set: function set(v) {
            if (v && v != this._showBtnBn) {
              this.btn.active = true;
              this.btn.scale = new Vec3(0, 0);
              tween(this.btn).to(0.5, {
                scale: new Vec3(0.8, .8)
              }).start();
            }
            this._showBtnBn = v;
            this.progress.node.parent.active = !v;
            this.btn.active = v;
            if (v && this.node.parent) {
              this.node.setSiblingIndex(this.node.parent.children.length - 1);
            }
          }
        }, {
          key: "clickBn",
          get: function get() {
            return this._clickBn;
          },
          set: function set(v) {
            this._clickBn = v;
            this.btn.children[0].getComponent(Sprite).enabled = !v;
            this.btn.children[0].children[0].active = v;
          }
        }]);
        return mjwaysFreeStart;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec4], {
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

System.register("chunks:///_virtual/mjwaysInfoBoard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMjways.ts', './labNumShow.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, tween, Component, mjways, labNumShow;
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
      mjways = module.mjways;
    }, function (module) {
      labNumShow = module.labNumShow;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b4bff0TTlJGE6KYuYN/klHG", "mjwaysInfoBoard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysInfoBoard = exports('mjwaysInfoBoard', (_dec = ccclass('mjwaysInfoBoard'), _dec2 = property({
        type: [Node],
        tooltip: "底板背景"
      }), _dec3 = property({
        type: Node,
        tooltip: "消息跑马灯"
      }), _dec4 = property({
        type: Node,
        tooltip: "赢钱信息"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysInfoBoard, _Component);
        function mjwaysInfoBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infos", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoWin", _descriptor3, _assertThisInitialized(_this));
          _this._lev = 0;
          /**winNode label */
          _this.playBn = false;
          /**是否显示跑马灯 */
          _this._showInfosBn = false;
          /**是否显示共赢得 */
          _this._showTwBn = false;
          return _this;
        }
        var _proto = mjwaysInfoBoard.prototype;
        _proto.onLoad = function onLoad() {
          mjways.infoBoard = this;
        };
        _proto.start = function start() {
          this.lev = 0;
          this.showInfosBn = true;
        };
        _proto.playAnimWin = function playAnimWin(coin, playBn, showTwBn) {
          if (playBn === void 0) {
            playBn = true;
          }
          if (showTwBn === void 0) {
            showTwBn = false;
          }
          this.playBn = playBn;
          this.showInfosBn = false;
          this.showTwBn = showTwBn;
          if (coin > mjways.betSum * 3 && coin < mjways.betSum * 5) {
            this.lev = 1;
          } else if (coin >= mjways.betSum * 5) {
            this.lev = 2;
          } else {
            this.lev = 0;
          }
          if (playBn) {
            tween(this.winLab).to(0.5, {
              num: coin * 100
            }).start();
          } else {
            this.winLab.setRealNum(coin);
          }
        };
        _createClass(mjwaysInfoBoard, [{
          key: "lev",
          get: function get() {
            return this._lev;
          },
          set: function set(v) {
            this._lev = v;
            this.bgs[0].active = v == 0;
            this.bgs[1].active = v == 1;
            this.bgs[2].active = v == 2;
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
            this.lev = 0;
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
        }, {
          key: "winLab",
          get: function get() {
            return this.infoWin.getChildByName("Label").getComponent(labNumShow);
          }
        }]);
        return mjwaysInfoBoard;
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

System.register("chunks:///_virtual/mjwaysMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoomMgr.ts', './UIHelp.ts', './NetGameServer.ts', './SubGameDef.ts', './cMjways.ts', './LanguageData.ts', './dataChange5.ts', './mjwaysFreeStart.ts', './mjwaysDetail.ts', './Num.ts', './mjwaysFreeEnd.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, tween, Vec3, Label, instantiate, Button, macro, Component, RoomMgr, UIHelp, UIhelpParam, gameNet, SubGameDef, mjways, LanguageData, dataChange, mjwaysFreeStart, mjwaysDetail, Num, mjwaysFreeEnd;
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
      macro = module.macro;
      Component = module.Component;
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
      mjways = module.mjways;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      dataChange = module.dataChange;
    }, function (module) {
      mjwaysFreeStart = module.mjwaysFreeStart;
    }, function (module) {
      mjwaysDetail = module.mjwaysDetail;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      mjwaysFreeEnd = module.mjwaysFreeEnd;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "a8f401f7uFLq45UmCxssd0d", "mjwaysMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysMain = exports('mjwaysMain', (_dec = ccclass('mjwaysMain'), _dec2 = property({
        type: Prefab,
        tooltip: "大奖"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "免费开始"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "免费结束"
      }), _dec5 = property({
        type: Prefab,
        tooltip: "角色详情Pb"
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec7 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysMain, _Component);
        function mjwaysMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bigwin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeStart", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeEnd", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dark", _descriptor6, _assertThisInitialized(_this));
          _this.delayClick = false;
          /**滚轮回调，所有滚轮滚动完毕触发 */
          _this.rollCallBackBn = false;
          return _this;
        }
        var _proto = mjwaysMain.prototype;
        _proto.onLoad = function onLoad() {
          mjways.main = this;
        };
        _proto.start = function start() {
          this.dark.active = false;
          mjways.rollEnable = true;
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
              mjways.lastmoneyPanel.showPanel();
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
                    mjways.main.close();
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
          if (this.delayClick || mjways.rollEnable == false) {
            return;
          }
          if (!mjways.auto) {
            this.delayClick = true;
            this.scheduleOnce(function () {
              _this2.delayClick = false;
            }, 1);
            if (mjways.status == 0) {
              mjways.status = 2;
              this.sendRoll();
            } else if (mjways.status == 1) {
              mjways.slotCtrl.setSpinAnim(3);
              this.stopImmediately();
            }
          }
        };
        _proto.add = function add() {
          if (mjways.auto) {
            return;
          }
          mjways.sumIdx += 1;
          mjways.sumIdx = mjways.slotCtrl.updateBet(mjways.sumIdx) == 0 ? mjways.sumIdx - 1 : mjways.sumIdx;
          tween(mjways.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.dec = function dec() {
          if (mjways.auto) {
            return;
          }
          mjways.sumIdx -= 1;
          mjways.sumIdx = mjways.slotCtrl.updateBet(mjways.sumIdx) == 0 ? mjways.sumIdx + 1 : mjways.sumIdx;
          tween(mjways.slotCtrl.lblCurBet.node).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.startAuto = function startAuto(n) {
          if (this.delayClick) {
            return;
          }
          if (mjways.status == 0) {
            mjways.auto = true;
            mjways.autoTimes = n;
            mjways.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            if (n > 999) {
              mjways.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.76, 0.76, 0.76);
              // ((mjways.slotCtrl.Btn_stopAuto as Node).children[1] as Node).scale = new Vec3(0.76, 0.76, 0.76);
            } else if (n > 99) {
              mjways.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.9, 0.9, 0.9);
              // ((mjways.slotCtrl.Btn_stopAuto as Node).children[1] as Node).scale = new Vec3(0.9, 0.9, 0.9);
            } else {
              mjways.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1, 1);
              // ((mjways.slotCtrl.Btn_stopAuto as Node).children[1] as Node).scale = new Vec3(1, 1, 1);
            }

            mjways.slotCtrl.Btn_stopAuto.active = mjways.auto;
            mjways.slotCtrl.Btn_start.active = !mjways.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1.5);
          }
        };
        _proto.stopAuto = function stopAuto() {
          mjways.auto = false;
          mjways.autoTimes = 0;
        };
        _proto.rollCallBack = function rollCallBack() {
          var _this3 = this;
          var st = 0;
          mjways.status = st;
          if (mjways.status == 0) {
            if (this.rollCallBackBn) {
              return;
            }
            this.rollCallBackBn = true;
            this.scheduleOnce(function () {
              _this3.rollCallBackBn = false;
            }, 1);
            mjways.reel.removeRadom();
            if (mjways.result.winCoin > 0) {
              mjways.slotCtrl.setSpinAnim(3);
            } else {
              mjways.slotCtrl.setSpinAnim(2);
            }
            this.scheduleOnce(function () {
              var arr = mjways.reel.getSymbols;
              for (var i = 0; i < arr.length; i++) {
                arr[i].spawn();
              }
              _this3.roundShow();
            }, 1);
          }
        };
        _proto.roundShow = function roundShow() {
          var round = mjways.round;
          if (round.removeItems.length > 0) {
            this.showRemove();
            if (round.removeType) {
              mjways.audio.playVoxPayout(round.removeType - 1);
            } else {
              mjways.audio.playVoxPayoutMultiSym();
            }
          } else {
            this.settlement();
          }
        };
        _proto.showRemove = function showRemove() {
          var remove = mjways.round.removeItems;
          if (remove.length > 1) {
            var arr = mjways.reel.getSymbols;
            for (var i = 0; i < remove.length; i++) {
              var index = remove[i];
              arr[index].playWin();
            }
            if (mjways.round.winCoin > 0) {
              mjways.infoBoard.playAnimWin(mjways.round.winCoin, false);
            }
            this.scheduleOnce(this.doRemove, 3);
          } else {
            this.settlement();
          }
        };
        _proto.doRemove = function doRemove() {
          mjways.reel.drop();
        };
        _proto.dropBack = function dropBack() {
          this.doNext();
        };
        _proto.settlement = function settlement() {
          this.roundSM();
        };
        _proto.roundSM = function roundSM() {
          if (mjways.round.winCoin > 0) {
            mjways.infoBoard.playAnimWin(mjways.round.winCoin, false);
            this.scheduleOnce(this.roundSMNext, 3);
          } else {
            this.roundSMNext();
          }
        };
        _proto.roundSMNext = function roundSMNext() {
          if (mjways.roundIndex >= mjways.result.rounds.length - 1) {
            if (mjways.result.winCoin > 0) {
              if (mjways.result.winCoin < 5 * mjways.betSum) {
                if (mjways.result.winCoin <= 3 * mjways.betSum) ;
                mjways.infoBoard.playAnimWin(mjways.result.winCoin, true, true);
                this.scheduleOnce(this.doRoundSMNext, 2);
              } else {
                mjways.bigwin.bigwincoin(mjways.result.winCoin);
              }
            } else {
              this.doRoundSMNext();
            }
          }
        };
        _proto.doRoundSMNext = function doRoundSMNext() {
          if (mjways.resultIndex == 0 && mjways.roundIndex == mjways.result.rounds.length - 1 && mjways.fortuneBn) {
            var freeStart = instantiate(this.freeStart).getComponent(mjwaysFreeStart);
            freeStart.setParent();
          } else {
            if (mjways.round.addItems.length == 0) {
              this.doNext();
            }
          }
        };
        _proto.freeStartBack = function freeStartBack() {
          mjways.bg.mul.playFortune();
        };
        _proto.playFortuneBack = function playFortuneBack() {
          this.doNext();
        };
        _proto.freeEndBack = function freeEndBack() {
          this.playRollOver();
        };
        _proto.doNext = function doNext() {
          if (mjways.roundIndex < mjways.result.rounds.length - 1) {
            this.doNextRound();
          } else {
            this.doNextResult();
          }
        }

        //继续下回合表现
        ;

        _proto.doNextRound = function doNextRound() {
          mjways.roundIndex++;
          this.roundShow();
        }

        //当前次数回合数据表现完毕，进入下一次摇奖表现
        ;

        _proto.doNextResult = function doNextResult() {
          var _this4 = this;
          mjways.infoBoard.showInfosBn = true;
          mjways.roundIndex = 0;
          mjways.resultIndex++;
          if (mjways.playOverBn) {
            if (mjways.lotteryRes.results.length == 1) {
              this.playRollOver();
            } else {
              var free = instantiate(this.freeEnd).getComponent(mjwaysFreeEnd);
              free.setParent(mjways.lotteryRes.winCoin);
            }
            return;
          }
          mjways.slotCtrl.lastNum = mjways.result.leftFreeCount - 1;
          mjways.reel.loop();
          var loopEnd = function loopEnd() {
            var delay = 1;
            _this4.scheduleOnce(function () {
              mjways.reel.loopEnd(mjways.round.symbols, mjways.round.golds, function () {
                _this4.rollCallBack();
              });
            }, delay);
          };
          loopEnd();
        };
        _proto.closeBigWin = function closeBigWin() {
          mjways.infoBoard.playAnimWin(mjways.result.winCoin, false, true);
          if (mjways.resultIndex == 0 && mjways.roundIndex == mjways.result.rounds.length - 1 && mjways.fortuneBn) {
            var freeStart = instantiate(this.freeStart).getComponent(mjwaysFreeStart);
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
          if (mjways.auto && mjways.autoTimes > 0) {
            this.sendRoll();
          }
        }
        /**滚动完成 */;
        _proto.rollComplete = function rollComplete() {
          mjways.status = 0;
          mjways.slotCtrl.setSpinAnim(0);
          this.addDetailListener();
        };
        _proto.roll = function roll(list, golds) {
          var _this5 = this;
          if (!mjways.auto) {
            mjways.rollEnable = true;
          }
          mjways.status = 1;
          mjways.reel.loopEnd(list, golds, function () {
            _this5.rollCallBack();
          });
        };
        _proto.sendRoll = function sendRoll() {
          this.initRoll();
          mjways.autoTimes = mjways.autoTimes > 0 ? mjways.autoTimes - 1 : 0;
          if (mjways.autoTimes == 0) {
            mjways.auto = false;
          }
          mjways.slotCtrl.setSpinAnim(1);
          var autoTimesLab = mjways.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = mjways.autoTimes + "";
          // this.audio.playclickstart();
          if (mjways.autoTimes > 999) {
            mjways.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
          } else if (mjways.autoTimes > 99) {
            mjways.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
          } else {
            mjways.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
          }
          mjways.reel.loop();
          this.sendLottery();
        };
        _proto.firstSymbolOver = function firstSymbolOver() {
          mjways.reel.spawn();
          this.addDetailListener();
        };
        _proto.addDetailListener = function addDetailListener() {
          var symbols = mjways.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.node.getComponent(Button).interactable = true;
          }
        };
        _proto.removeDetailListener = function removeDetailListener() {
          var symbols = mjways.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            symbol.darkBn = false;
            symbol.node.getComponent(Button).interactable = false;
          }
          this.dark.active = false;
          var detail = mjways.detail;
          if (detail) detail.node.active = false;
        };
        _proto.addDetail = function addDetail(s) {
          if (!mjways.rollEnable) return;
          var detail = mjways.detail;
          if (!detail) {
            detail = instantiate(this.detailPb).getComponent(mjwaysDetail);
            detail.node.parent = this.node;
            mjways.detail = detail;
          }
          detail.node.active = true;
          var symbols = mjways.reel.getSymbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            if (symbol.poolId != s.poolId) {
              symbol.darkBn = true;
            }
          }
          this.dark.active = true;
          detail.node.position = s.node.position;
          detail.node.y += mjways.reel.node.parent.y;
          detail.init(s);
        }

        /**每次滚动初始化场景 */;
        _proto.initRoll = function initRoll() {
          this.removeDetailListener();
          mjways.infoBoard.showInfosBn = true;
          mjways.tempWin = 0;
          mjways.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.money);
          mjways.slotCtrl.winCoin_lab.string = Num.exchangeToThousands(mjways.exchangeRate, 0);
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.PlayMatch3(SubGameDef.SLOTS_MJWAYS, mjways.betSum + "");
                case 2:
                  retSpin = _context2.sent;
                  console.log(retSpin);
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
          var _this6 = this;
          if (data && data.isSucc) {
            this.exchange(data.res);
            console.log(mjways.lotteryRes);
            mjways.money = mjways.lotteryRes.curCoin;
            mjways.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.lotteryRes.curCoin - mjways.lotteryRes.winCoin);
            mjways.resultIndex = 0;
            mjways.roundIndex = 0;
            if (mjways.slotCtrl.isSpeed) {
              this.roll(mjways.round.symbols, mjways.round.golds);
            } else {
              this.scheduleOnce(function () {
                _this6.roll(mjways.round.symbols, mjways.round.golds);
              }, 1);
            }
          }
        };
        _proto.exchange = function exchange(data) {
          var res = dataChange.change(data);
          mjways.lotteryRes = res;
        };
        _proto.playVoxRandom = function playVoxRandom() {
          this.schedule(this.doPlayVoxRandom, 10, macro.REPEAT_FOREVER);
        };
        _proto.doPlayVoxRandom = function doPlayVoxRandom() {
          // mjways.audio.playVoxRandom();
        };
        _proto.stopVoxRandom = function stopVoxRandom() {
          this.unschedule(this.doPlayVoxRandom);
        };
        _proto.stopImmediately = function stopImmediately() {};
        _proto.close = function close() {};
        return mjwaysMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bigwin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "freeStart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "freeEnd", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dark", [_dec7], {
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

System.register("chunks:///_virtual/mjwaysMul.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, macro, Sprite, Animation, Component, mjways;
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
      macro = module.macro;
      Sprite = module.Sprite;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b7168sA0/RIlaPLaujcz5Cx", "mjwaysMul", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysMul = exports('mjwaysMul', (_dec = ccclass('mjwaysMul'), _dec2 = property({
        type: [Node],
        tooltip: "倍数"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysMul, _Component);
        function mjwaysMul() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "muls", _descriptor, _assertThisInitialized(_this));
          /**是否启用幸运模式 */
          _this._fortuneBn = false;
          _this.playFortuneBn = false;
          /**当前倍率 */
          _this._curMul = void 0;
          return _this;
        }
        var _proto = mjwaysMul.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.init = function init() {
          if (this.fortuneBn) {
            this.playFortuneBn = true;
          }
          this.curMul = this.mulNums[0];
        };
        _proto.playFortune = function playFortune() {
          this.schedule(this.doFortune, 0.2, macro.REPEAT_FOREVER);
        };
        _proto.doFortune = function doFortune() {
          var _this2 = this;
          var index = this.mulNums.indexOf(this.curMul);
          index++;
          this.curMul = this.mulNums[index];
          if (this.curMul == this.mulNums[this.mulNums.length - 1]) {
            this.unschedule(this.doFortune);
            this.scheduleOnce(function () {
              _this2.playFortuneBn = false;
              _this2.curMul = _this2.mulNums[0];
              mjways.main.playFortuneBack();
            }, 0.2);
          }
        };
        _proto.doMuls = function doMuls(func) {
          for (var i = 0; i < this.muls.length; i++) {
            this.muls[i].active = true;
            func(this.muls[i], i);
          }
        };
        _proto.playMulAudio = function playMulAudio(num) {
          if (this.playFortuneBn == false) {
            mjways.audio.playVoxMultiply(num);
          }
        };
        _createClass(mjwaysMul, [{
          key: "fortuneBn",
          get: function get() {
            return this._fortuneBn;
          },
          set: function set(v) {
            this._fortuneBn = v;
            this.node.children[0].active = v;
            this.doMuls(function (node) {
              node.children[0].active = v;
              var on = node.getChildByName("on").getComponent(Sprite);
              on.enabled = !v;
              on.node.children[0].active = v;
              var num = node.getComponent(Sprite);
              num.enabled = !v;
              num.node.children[0].active = v;
            });
            this.init();
          }
        }, {
          key: "mulNums",
          get: function get() {
            if (this.fortuneBn) {
              return [2, 4, 6, 10];
            } else {
              return [1, 2, 3, 5];
            }
          }
        }, {
          key: "curMul",
          get: function get() {
            return this._curMul;
          },
          set: function set(v) {
            var _this3 = this;
            if (this._curMul != v) {
              this.playMulAudio(v);
            }
            this._curMul = v;
            var mulNums = this.mulNums;
            this.doMuls(function (node, i) {
              var selectBn = mulNums[i] == v;
              node.getChildByName("select").active = selectBn;
              node.getChildByName("on").active = selectBn;
              var light = node.getChildByName("light").getComponent(Animation);
              if (_this3.fortuneBn) {
                light.node.active = selectBn;
                if (selectBn) {
                  light.play();
                }
              } else {
                light.node.active = false;
              }
            });
          }
        }]);
        return mjwaysMul;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "muls", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mjwaysReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './baseSymbol.ts', './cMjways.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodePool, Vec3, tween, ETYPE, baseReel, baseSymbol, mjways, Logger;
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
      baseSymbol = module.baseSymbol;
    }, function (module) {
      mjways = module.mjways;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9f47fK5M31KmbAO8HSbQ3oe", "mjwaysReel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FIRSTITEM = [1, 7, 1, 2, 1, 3, 1, 8, 5, 6, 4, 5, 1, 8, 1, 3, 4, 6, 1, 3, 3, 6, 1, 2, 1, 2, 4, 7, 5, 2];
      var FIRSTITEMBG = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
      var mjwaysReel = exports('mjwaysReel', (_dec = ccclass('mjwaysReel'), _dec(_class = /*#__PURE__*/function (_baseReel) {
        _inheritsLoose(mjwaysReel, _baseReel);
        function mjwaysReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseReel.call.apply(_baseReel, [this].concat(args)) || this;
          _this.disTime = 0.1;
          _this.addBn = false;
          return _this;
        }
        var _proto = mjwaysReel.prototype;
        _proto.start = function start() {
          mjways.reel = this;
          this.radomIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 10];
          this.v = 40;
          this.setReelDate();
        }

        /**设置滚轴排布数据 */;
        _proto.setReelDate = function setReelDate() {
          this.reelDates = [{
            index: 0,
            type: ETYPE.V,
            num: 6,
            pool: new NodePool(baseSymbol),
            size: 140,
            headPos: new Vec3(-280, -485),
            vector: 830,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 1,
            type: ETYPE.V,
            num: 6,
            pool: new NodePool(baseSymbol),
            size: 140,
            headPos: new Vec3(-140, -485),
            vector: 830,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 2,
            type: ETYPE.V,
            num: 6,
            pool: new NodePool(baseSymbol),
            size: 140,
            headPos: new Vec3(0, -485),
            vector: 830,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 3,
            type: ETYPE.V,
            num: 6,
            pool: new NodePool(baseSymbol),
            size: 140,
            headPos: new Vec3(140, -485),
            vector: 830,
            symbols: [],
            "switch": false,
            hierarchy: true
          }, {
            index: 4,
            type: ETYPE.V,
            num: 6,
            pool: new NodePool(baseSymbol),
            size: 140,
            headPos: new Vec3(280, -485),
            vector: 830,
            symbols: [],
            "switch": false,
            hierarchy: true
          }];
          this.arrIndex = [0, 6, 12, 18, 24];
          this.bindResult(FIRSTITEM);
          var arr = this.getSymbols;
          for (var i = 0; i < FIRSTITEMBG.length; i++) {
            var bn = FIRSTITEMBG[i] == 1;
            arr[i].goldBn = bn;
          }
          mjways.main.firstSymbolOver();
        };
        /**启动循环播放 */
        _proto.loop = function loop() {
          var _this2 = this;
          mjways.audio.playReelLoop(mjways.slotCtrl.isSpeed);
          var _loop = function _loop(i) {
            var r = _this2.reelDates[i];
            var disTime = mjways.slotCtrl.isSpeed ? 0 : _this2.disTime * i;
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
          if (mjways.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          if (mjways.slotCtrl.isSpeed == false) {
            var _loop2 = function _loop2(i) {
              var r = _this4.reelDates[i];
              var disTime = _this4.disTime * i;
              _this4.scheduleOnce(function () {
                var symbols = _this4.bindResultOne(r, arr, function () {
                  var cb = function cb() {
                    if (i == _this4.reelDates.length - 1) callback();
                    mjways.audio.playReelEnd(false);
                  };
                  _this4.rebound(r, false, cb);
                });
                _this4.addGold(r, symbols, golds);
              }, disTime);
            };
            for (var i = 0; i < this.reelDates.length; i++) {
              _loop2(i);
            }
          } else {
            this.bindResult(arr, function () {
              callback();
              mjways.audio.playReelEnd(true);
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
          var removes = mjways.round.removeItems;
          var symbols = this.getSymbols;
          if (removes.length > 0) {
            mjways.removeCount = 0;
            for (var i = 0; i < removes.length; i++) {
              var remove = removes[i];
              var symbol = symbols[remove];
              if (symbol) {
                symbol.playBoom();
              } else {
                Logger.error("消除位置不存在roundIndex：" + mjways.roundIndex + "index:" + remove);
              }
            }
          }
        };
        _proto.doAdd = function doAdd() {
          var _this5 = this;
          if (this.addBn) return;
          this.addBn = true;
          this.scheduleOnce(function () {
            _this5.addBn = false;
          }, 2);
          mjways.removeCount = undefined;
          this.scheduleOnce(function () {
            _this5.addItems();
          }, 0.5);
        };
        _proto.addItems = function addItems() {
          this.removeUnuseAll();
          var arr = [7, 8, 8, 8, 7];
          var addItems = mjways.round.addItems;
          for (var i = 0; i < addItems.length; i++) {
            var addItem = addItems[i];
            var r = this.reelDates[addItem.rindex];
            var symbol = this.pushSymbol(r, addItem.id);
            symbol.node.active = false;
            symbol.aimBn = true;
            symbol.bindAimPos(arr[addItem.rindex]);
            symbol.node.active = true;
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
            mjways.main.dropBack();
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
        return mjwaysReel;
      }(baseReel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mjwaysSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './LanguageData.ts', './cMjways.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, Num, LanguageData, mjways, UserMgr;
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
      mjways = module.mjways;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24;
      cclegacy._RF.push({}, "78789MYXcNMsKFfp78Kvd22", "mjwaysSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var mjwaysSlotCtrl = exports('mjwaysSlotCtrl', (_dec = ccclass('mjwaysSlotCtrl'), _dec2 = property({
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
      }), _dec25 = property({
        type: Node,
        tooltip: "免费次数"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mjwaysSlotCtrl, _Component);
        function mjwaysSlotCtrl() {
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
          _initializerDefineProperty(_this, "free", _descriptor24, _assertThisInitialized(_this));
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
          _this._lastNum = 0;
          return _this;
        }
        var _proto = mjwaysSlotCtrl.prototype;
        _proto.onLoad = function onLoad() {
          mjways.slotCtrl = this;
          mjways.money = UserMgr.inst.coin;
          this.initBetContent(mjways.BETNUM, mjways.BET, mjways.LINES);
          this.updateBet(mjways.sumIdx);
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
          if (!mjways.rollEnable) {
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
          if (!mjways.rollEnable) {
            return;
          }
          mjways.main.onCLick(e, 'roll');
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
          mjways.main.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(mjways.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.money);
          this.initBetContent(mjways.BETNUM, mjways.BET, mjways.LINES);
          this.bindBet();
          this.lastNum = -1;
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
          if (!mjways.betNum) {
            mjways.sumIdx = 0;
            mjways.betNum = this.sumList[mjways.sumIdx];
          } else {
            mjways.sumIdx = this.sumList.indexOf(mjways.betNum);
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
          mjways.main.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          mjways.autoPanel.showPanel();
        }

        //打开设置界面
        ;

        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          // mjways.main.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", mjways.main.node);
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
          var footer = find("ui_footer/ui_footer_a", mjways.main.node);
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
            mjways.betPanel.hidePanel();
          } else {
            mjways.betPanel.showPanel();
            mjways.betPanel.bindBet();
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
          // mjways.main.audio.playclickopen();
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
          mjways.sumIdx = this.sumList.indexOf(mjways.betSum);
          this.updateBet(mjways.sumIdx);
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
          if (mjways.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (mjways.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (mjways.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (mjways.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          mjways.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.betSum);
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
          // (mjways.main.winNode.children[0].getComponent(Label) as Label).string = Num.exchangeToThousands(mjways.exchangeRate, coin);
          this.winCoin_lab.string = Num.exchangeToThousands(mjways.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(mjways.exchangeRate, mjways.lotteryRes.curCoin - mjways.lotteryRes.winCoin + coin);
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
          // let node: Node = mjways.main.winNode;
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
              mjways.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !mjways.auto && this.setButtonState(true);
              if (mjways.lotteryRes && mjways.lotteryRes.winCoin == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              mjways.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(mjways.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              mjways.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[1];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              mjways.rollEnable = false;
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
        _createClass(mjwaysSlotCtrl, [{
          key: "winPlayOverBn",
          get: function get() {
            return this._winPlayOverBn;
          },
          set: function set(v) {
            this._winPlayOverBn = v;
          }
        }, {
          key: "lastNum",
          get: function get() {
            return this._lastNum;
          },
          set: function set(v) {
            this.betting_panel.active = v == -1;
            this.free.active = !this.betting_panel.active;
            this.coin_panel.y = this.betting_panel.active ? -396 : -632;
            this._lastNum = v;
            this.free.children[0].active = v > 0;
            this.free.children[1].active = !this.free.children[0].active;
            if (this.free.children[0].active) {
              this.free.children[0].getComponent(Label).string = v + "";
            }
          }
        }]);
        return mjwaysSlotCtrl;
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
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "free", [_dec25], {
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

System.register("chunks:///_virtual/mjwaysSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './cMjways.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Node, baseSymbol, mjways;
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
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }, function (module) {
      mjways = module.mjways;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "2a2aeH/YpZDt7IqToyflJ4C", "mjwaysSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var mjwaysSymbol = exports('mjwaysSymbol', (_dec = ccclass('mjwaysSymbol'), _dec2 = property({
        type: Animation,
        tooltip: "爆炸消失动画"
      }), _dec3 = property({
        type: Node,
        tooltip: "选中态"
      }), _dec4 = property({
        type: Node,
        tooltip: "金框符号"
      }), _dec5 = property({
        type: Node,
        tooltip: ""
      }), _dec6 = property({
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_baseSymbol) {
        _inheritsLoose(mjwaysSymbol, _baseSymbol);
        function mjwaysSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseSymbol.call.apply(_baseSymbol, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boom", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "select", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldAni", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgAni", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor5, _assertThisInitialized(_this));
          /**是否显示金框符号*/
          _this._goldBn = false;
          _this._selectBn = false;
          return _this;
        }
        var _proto = mjwaysSymbol.prototype;
        _proto.start = function start() {};
        _proto.bind = function bind(id, r, parent, pushBn, setPosBn) {
          if (setPosBn === void 0) {
            setPosBn = true;
          }
          _baseSymbol.prototype.bind.call(this, id, r, parent, pushBn, setPosBn);
          if (mjways.inFortune && r.index == 2) {
            this.goldBn = true;
          }
        };
        _proto.init = function init() {
          _baseSymbol.prototype.init.call(this);
          this.bgAni.active = false;
          this.goldAni.active = false;
          this.selectBn = false;
          this.boom.node.active = false;
          this.icon.node.children[0].active = false;
          this.blur.node.children[0].active = false;
          this.icon.node.children[1].active = false;
          this.blur.node.children[1].active = false;
          if (_baseSymbol.prototype.symbolId) this.bg.active = !(_baseSymbol.prototype.symbolId == ESYMBOLID.wild || _baseSymbol.prototype.symbolId == ESYMBOLID.scatter || !_baseSymbol.prototype.symbolId);
        };
        _proto.unuse = function unuse() {
          _baseSymbol.prototype.unuse.call(this);
          this.init();
          this.goldBn = false;
        };
        _proto.removeOver = function removeOver() {
          if (this.changeBn()) ;else {
            var ani = this.node.getComponent(Animation);
            ani.stop();
          }
        }

        /**消除行为 */;
        _proto.playBoom = function playBoom() {
          var _this2 = this;
          if (this.selectBn == false) return;
          if (this.changeBn()) {
            this.goldAni.active = true;
            this.bg.active = false;
            // this.goldBn = false;
            // this.symbolId = ESYMBOLID.wild;
            // this.spawn();
          } else {
            mjways.audio.playSymbolShrink();
            this.bgAni.active = true;
            this.bg.active = false;
            this.boom.node.active = true;
            this.boom.on("finished", function () {
              _this2.icon.node.scale_x = 0.7;
              _this2.recover();
              mjways.removeCount++;
              if (mjways.removeCount >= mjways.round.addItems.length) mjways.reel.doAdd();
            }, this);
            this.boom.play();
          }
          this.selectBn = false;
          var ani = this.node.getComponent(Animation);
          ani.on("finished", function () {
            _this2.goldBn = false;
            _this2.symbolId = ESYMBOLID.wild;
            _this2.spawn();
            mjways.removeCount++;
            if (mjways.removeCount >= mjways.round.addItems.length) mjways.reel.doAdd();
          }, this);
          ani.play();
        };
        _proto.remove = function remove() {
          this.node.parent = null;
        }

        /**判断是否可以变更为wild */;
        _proto.changeBn = function changeBn() {
          return this.goldBn && this.symbolId != ESYMBOLID.wild;
        }

        /**滚动停止调用 播放wild出场动画*/;
        _proto.spawn = function spawn() {
          var _this3 = this;
          if (this.symbolId == ESYMBOLID.wild) {
            this.wildAni.play();
            mjways.audio.playSpawnWild();
          }
          if (this.symbolId == ESYMBOLID.scatter) {
            this.scatterAni.on("finished", function () {
              _this3.playScatterIdle();
            });
            this.scatterAni.play("scatterspawn");
            mjways.audio.playSpawnScatter();
          }
        };
        _proto.playScatterIdle = function playScatterIdle() {
          this.scatterAni.play("scatteridle");
        }

        /**播放中奖 */;
        _proto.playWin = function playWin() {
          this.selectBn = true;
        };
        _proto.onClick = function onClick(e) {
          mjways.main.addDetail(this);
        };
        _createClass(mjwaysSymbol, [{
          key: "symbolId",
          get: function get() {
            return _baseSymbol.prototype.symbolId;
          },
          set: function set(v) {
            this.symbolId = v;
            if (v == ESYMBOLID.wild) {
              this.icon.spriteFrame = undefined;
              this.icon.node.children[0].active = true;
              this.blur.spriteFrame = undefined;
              this.blur.node.children[0].active = true;
            }
            if (v == ESYMBOLID.scatter) {
              this.icon.spriteFrame = undefined;
              this.icon.node.children[1].active = true;
              this.blur.spriteFrame = undefined;
              this.blur.node.children[1].active = true;
            }
          }
        }, {
          key: "blurBn",
          get: function get() {
            return _baseSymbol.prototype.blurBn;
          },
          set: function set(v) {
            this.blurBn = v;
            this.bg.children[0].active = !v && !this.goldBn;
            this.bg.children[1].active = !v && this.goldBn;
            this.bg.children[2].active = v && !this.goldBn;
            this.bg.children[3].active = v && this.goldBn;
          }
        }, {
          key: "goldBn",
          get: function get() {
            return this._goldBn;
          },
          set: function set(v) {
            this._goldBn = v;
            this.blurBn = this.blurBn;
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
        }, {
          key: "wildAni",
          get: function get() {
            return this.icon.node.children[0].getComponent(Animation);
          }
        }, {
          key: "scatterAni",
          get: function get() {
            return this.icon.node.children[1].getComponent(Animation);
          }
        }]);
        return mjwaysSymbol;
      }(baseSymbol), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goldAni", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgAni", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ESYMBOLID = exports('ESYMBOLID', /*#__PURE__*/function (ESYMBOLID) {
        ESYMBOLID[ESYMBOLID["null"] = 0] = "null";
        ESYMBOLID[ESYMBOLID["twoL"] = 1] = "twoL";
        ESYMBOLID[ESYMBOLID["twoO"] = 2] = "twoO";
        ESYMBOLID[ESYMBOLID["fiveL"] = 3] = "fiveL";
        ESYMBOLID[ESYMBOLID["fiveO"] = 4] = "fiveO";
        ESYMBOLID[ESYMBOLID["cracks"] = 5] = "cracks";
        ESYMBOLID[ESYMBOLID["square"] = 6] = "square";
        ESYMBOLID[ESYMBOLID["red"] = 7] = "red";
        ESYMBOLID[ESYMBOLID["green"] = 8] = "green";
        ESYMBOLID[ESYMBOLID["wild"] = 9] = "wild";
        ESYMBOLID[ESYMBOLID["scatter"] = 10] = "scatter";
        return ESYMBOLID;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_slots_mjways", ['./SlotsMjwaysGameMgr.ts', './autoPanel5.ts', './betNum6.ts', './betPanel6.ts', './cMjways.ts', './dataChange5.ts', './lastmoneyPanel6.ts', './mjwaysAudio.ts', './mjwaysBg.ts', './mjwaysBigwin.ts', './mjwaysDetail.ts', './mjwaysFreeEnd.ts', './mjwaysFreeStart.ts', './mjwaysInfoBoard.ts', './mjwaysMain.ts', './mjwaysMul.ts', './mjwaysReel.ts', './mjwaysSlotCtrl.ts', './mjwaysSymbol.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotsMjwaysGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8b5b9fntUJIGqolDEGxOF2B", "SlotsMjwaysGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsmjwaysGameMgr = exports('SlotsmjwaysGameMgr', (_dec = ccclass('SlotsmjwaysGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsmjwaysGameMgr, _GameMgr);
        function SlotsmjwaysGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_MJWAYS;
          _this.mainName = "mjwaysMain";
          _this._gameType = SubGameDef.SLOTS_MJWAYS;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_mjways',
            bundle: ModuleDef.SLOTS_MJWAYS
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsmjwaysGameMgr.prototype;
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
        _createClass(SlotsmjwaysGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsmjwaysGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsmjwaysGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsmjwaysGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_mjways', 'chunks:///_virtual/module_slots_mjways'); 
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