System.register("chunks:///_virtual/autoPanel10.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cSongkran.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Color, tween, Component, Num, songkran;
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
      songkran = module.songkran;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "2b6322WIbRO84FNlsRCAj/d", "autoPanel", undefined);
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
          songkran.autoPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.money);
          this.lblCurBet.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.betSum);
          this.winCoin_lab.string = songkran.slotCtrl.winCoin_lab.string;
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
            songkran.main.startAuto(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          songkran.main.audio.playclickopen();
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
          songkran.main.audio.playclickclose();
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

System.register("chunks:///_virtual/betNum11.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "e4cbduSQpZDxIUk/CPcSqKU", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel11.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './betNum11.ts', './cSongkran.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, Num, betNum, songkran;
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
      songkran = module.songkran;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "519eadQHztAY5wl42IgyJ1U", "betPanel", undefined);
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
          songkran.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = songkran.BETNUM;
          this.betList = songkran.BET;
          this.line = songkran.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.money);
          this.lblCurBet.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.betSum);
          this.winCoin_lab.string = songkran.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(songkran.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(songkran.exchangeRate, sumList[_i3]);
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
          songkran.betNum = this.tempi;
          songkran.bet = this.tempj;
          songkran.sumIdx = this.tempindex;
          songkran.betSum = this.sumList[songkran.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.betSum);
          songkran.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(songkran.sumIdx);
          this.val3 = songkran.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          songkran.main.audio.playclickopen();
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
          songkran.main.audio.playclickclose();
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

System.register("chunks:///_virtual/bubleParticle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, ccenum, _decorator, Prefab, CCFloat, math, Vec3, tween, Tween, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      ccenum = module.ccenum;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      CCFloat = module.CCFloat;
      math = module.math;
      Vec3 = module.Vec3;
      tween = module.tween;
      Tween = module.Tween;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "1dd536ECZFKcpr0la1d+aiU", "bubleParticle", undefined);
      ccenum(Number);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var bubleParticle = exports('bubleParticle', (_dec = ccclass('bubleParticle'), _dec2 = property({
        type: Prefab,
        tooltip: "气泡"
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
        tooltip: "飞行时间"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(bubleParticle, _Component);
        function bubleParticle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Pb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxNum", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "createNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disTime", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyTime", _descriptor5, _assertThisInitialized(_this));
          _this.createTime = 0;
          _this.pool = [];
          return _this;
        }
        var _proto = bubleParticle.prototype;
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
            var item = this.node.children[i];
            this.recycle(item);
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
          var item = this.factory();
          var scale = 0.4 + math.random() * 4 / 10;
          item.scale = new Vec3(scale, scale);
          var startPos = new Vec3(-526, -700);
          item.position = startPos;
          var aimPos = new Vec3(526, -700 + math.random() * 1680);
          var delay = math.random();
          tween(item).delay(delay).call(function () {
            if (_this2.node) {
              _this2.node.addChild(item);
            } else {
              Tween.stopAllByTarget(item);
              item.destroy();
            }
          }).to(this.flyTime, {
            position: aimPos
          }).call(function () {
            if (_this2.node) {
              _this2.recycle(item);
            } else {
              Tween.stopAllByTarget(item);
              item.destroy();
            }
          }).start();
        };
        _proto.factory = function factory() {
          if (this.pool.length > 0) {
            return this.pool.shift();
          } else {
            return instantiate(this.Pb);
          }
        };
        _proto.recycle = function recycle(item) {
          item.parent = null;
          this.pool.push(item);
        };
        _proto.onDestroy = function onDestroy() {
          for (var i = 0; i < this.node.children.length; i++) {
            this.node.children[i].destroy();
          }
        };
        return bubleParticle;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Pb", [_dec2], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "flyTime", [_dec6], {
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

System.register("chunks:///_virtual/clearRow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, ccenum, _decorator, Animation, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      ccenum = module.ccenum;
      _decorator = module._decorator;
      Animation = module.Animation;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "fd034Em/29DhZR2Ql2SFXGk", "clearRow", undefined);
      ccenum(Number);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var clearRow = exports('clearRow', (_dec = ccclass('clearRow'), _dec2 = property({
        type: Animation
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(clearRow, _Component);
        function clearRow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ani", _descriptor, _assertThisInitialized(_this));
          _this.startTime = 0.16;
          _this.moveTime = 0.32;
          return _this;
        }
        var _proto = clearRow.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.play = function play(aimY, callBack) {
          var _this2 = this;
          this.ani.play();
          tween(this.node).delay(this.startTime).to(this.moveTime, {
            y: aimY
          }).call(function () {
            callBack();
            _this2.node.parent = null;
          }).start();
        };
        return clearRow;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ani", [_dec2], {
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

System.register("chunks:///_virtual/cSongkran.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dataChange10.ts'], function (exports) {
  var _createClass, cclegacy, dataChange;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      dataChange = module.dataChange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18ca32xvq1K2Lhi5NeF1z79", "cSongkran", undefined);
      var cSongkran = /*#__PURE__*/function () {
        function cSongkran() {
          this.BETNUM = dataChange.BETNUM;
          this.LINES = dataChange.LINES;
          this.BET = dataChange.BET;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          this.detail = null;
          this.main = null;
          /**下注界面 */
          this.betPanel = null;
          /**自动界面 */
          this.autoPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
          this.wheelList = [];
          this.bet = 0;
          this.betNum = 0;
          this.sumIdx = 0;
          /**累计下注计算 */
          this.betSum = 0;
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
          this.waveIndex = 0;
          this.rollEnable = true;
          this.LINENUM = [3, 4, 5, 4, 3];
          this._accumulative = 0;
        }
        _createClass(cSongkran, [{
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
          key: "rollData",
          get: function get() {
            return songkran.lotteryRes.rsts[songkran.rollIndex];
          }
        }, {
          key: "waveData",
          get: function get() {
            return this.rollData.waves[this.waveIndex];
          }
        }, {
          key: "bIsFreeGame",
          get: function get() {
            if (this.lotteryRes) {
              return this.lotteryRes.rsts.length > 1 && this.rollIndex < this.lotteryRes.rsts.length - 1;
            } else {
              return false;
            }
          }
        }, {
          key: "accumulative",
          get: /**赢钱累积 */
          function get() {
            return this._accumulative;
          },
          set: function set(v) {
            this.slotCtrl.playAnimWin(this._accumulative, v, 0);
            this._accumulative = v;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cSongkran();
            }
            return this._instance;
          }
        }]);
        return cSongkran;
      }();
      cSongkran._instance = null;
      var songkran = exports('songkran', cSongkran.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dataChange10.ts", ['cc', './Logger.ts'], function (exports) {
  var cclegacy, Logger;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "628b2Bp31BHDI3XXfjn+9Pt", "dataChange", undefined);
      var dataChange = exports('dataChange', /*#__PURE__*/function () {
        function dataChange() {}
        dataChange.change = function change(data) {
          var res = {};
          res.userscore = Number(data.coins);
          res.winscore = Number(data.payout);
          res.rsts = [];
          var results = data.results;
          for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var _rst = {};
            res.rsts.push(_rst);
            _rst.winscore = 0;
            _rst.waves = [];
            _rst.free = result.leftFreeCount;
            var rounds = result.rounds;
            for (var j = 0; j < rounds.length; j++) {
              var round = rounds[j];
              var _wave = {};
              _rst.waves.push(_wave);
              _wave.handCards = [];
              var symbols = round.symbols;
              for (var k = 0; k < symbols.length; k++) {
                var symbol = symbols[k];
                var id = this.getIndexById(symbol.id);
                if (id != 0) {
                  var index = this.posToIndex(symbol.coordinate);
                  _wave.handCards[index] = id;
                }
              }
              _wave.free = round.freeCount ? round.freeCount : 0;
              var nextIndex = j + 1;
              var next = nextIndex < rounds.length ? rounds[nextIndex] : null;
              if (round.multipliers) {
                _wave.multiplesL = round.multipliers;
                if (next) {
                  _wave.multiples = next.multipliers ? next.multipliers : [0, 0, 0];
                } else {
                  _wave.multiples = _wave.multiplesL;
                }
              } else {
                _wave.multiplesL = [0, 0, 0];
                if (next) {
                  _wave.multiples = next.multipliers ? next.multipliers : [0, 0, 0];
                } else {
                  _wave.multiples = _wave.multiplesL;
                }
              }
              _wave.winscore = Number(round.payout);
              _rst.winscore += _wave.winscore;
              _wave.winCards = [];
              var paySymbols = round.paySymbols;
              for (var _k = 0; _k < paySymbols.length; _k++) {
                var paySymbol = paySymbols[_k];
                var points = paySymbol.points;
                for (var l = 0; l < points.length; l++) {
                  var point = points[l];
                  var _index = this.posToIndex(point);
                  _wave.winCards.push(_index);
                }
              }
              _wave.winCards = Array.from(new Set(_wave.winCards));
              _wave.addCards = [];
              if (next) {
                var newSymbols = next.newSymbols ? next.newSymbols : [];
                for (var _k2 = 0; _k2 < newSymbols.length; _k2++) {
                  var newSymbol = newSymbols[_k2];
                  var _id = this.getIndexById(newSymbol.id);
                  _wave.addCards.push(_id);
                }
              }
            }
          }
          return res;
        };
        dataChange.posToIndex = function posToIndex(pos) {
          var numArr = [3, 4, 5, 4, 3];
          var count = 0;
          for (var i = 0; i < pos.reel - 1; i++) {
            count += numArr[i];
          }
          var temp = 5 - pos.row;
          if (temp < 0) {
            Logger.error("PlaySlotCoordinate empty");
          }
          var index = count + temp;
          return index;
        };
        dataChange.getIndexById = function getIndexById(id) {
          return config.indexOf(id);
        };
        return dataChange;
      }());

      //old
      dataChange.BETNUM = [1, 10, 50];
      //单注值
      dataChange.LINES = 20;
      //线数
      dataChange.BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var config = exports('config', ["the_empty", "9", "10", "J", "Q", "K", "A", "ball", "eyewear", "ladle", "horse", "girl", "man", "scatter", "wildcard"]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/infoBoard2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cSongkran.ts', './Num.ts', './lampUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Animation, tween, Vec3, macro, Label, Component, songkran, Num, lampUI;
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
      macro = module.macro;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      songkran = module.songkran;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      lampUI = module.lampUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "140e6smMpJIqINUsDeXnZ14", "infoBoard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var infoBoard = exports('infoBoard', (_dec = ccclass('infoBoard'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: [Node]
      }), _dec4 = property({
        type: [Animation],
        tooltip: "sprays"
      }), _dec5 = property({
        type: Animation,
        tooltip: "light"
      }), _dec6 = property({
        type: Animation,
        tooltip: "star"
      }), _dec7 = property({
        type: Node,
        tooltip: "infoText"
      }), _dec8 = property({
        type: Node,
        tooltip: "infoWin"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(infoBoard, _Component);
        function infoBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgEffects", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprays", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoText", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoWin", _descriptor7, _assertThisInitialized(_this));
          _this._showInfoTextBn = true;
          _this._infoTextType = -1;
          _this._type = EInfoBoardType.normal;
          _this._winLevel = EWinLev.one;
          _this._infoWinType = EWinType.num;
          /**winNode label */
          _this.winAimCoin = 0;
          _this.winAddcoin = 0;
          _this.winAddOnce = 0;
          _this._winPlayOverBn = false;
          return _this;
        }
        var _proto = infoBoard.prototype;
        _proto.bindBgEffect = function bindBgEffect() {
          for (var i = 0; i < this.bgEffects.length; i++) {
            this.bgEffects[i].active = i == this.winLevel;
          }
        };
        _proto.hideBgEffect = function hideBgEffect() {
          for (var i = 0; i < this.bgEffects.length; i++) {
            this.bgEffects[i].active = false;
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.type = EInfoBoardType.normal;
          this.showInfoTextBn = true;
          this.infoTextType = ETextType.normal;
          this.winLevel = EWinLev.one;
        };
        _proto.playSprays = function playSprays() {
          for (var i = 0; i < this.sprays.length; i++) {
            this.sprays[i].node.active = true;
            this.sprays[i].play();
          }
        }

        /**数字框动画 */;
        _proto.playLight = function playLight() {
          this.light.play();
        }

        /**数字落下后星形动画 */;
        _proto.playStar = function playStar() {
          this.star.play();
        };
        _proto.playInfoWin = function playInfoWin() {
          tween(this.infoWin).to(0.5, {
            scale: new Vec3(1.4, 1.4)
          }).to(0.5, {
            scale: new Vec3(1, 1)
          }).start();
        };
        _proto.playAnimWin = function playAnimWin(coin, type) {
          if (type === void 0) {
            type = -1;
          }
          if (coin > songkran.betSum * 3 && coin < songkran.betSum * 5) {
            this.winLevel = EWinLev.two;
          } else if (coin >= songkran.betSum * 5) {
            this.winLevel = EWinLev.three;
          }
          this.playInfoWin();
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
          var _this$infoWin$getChil;
          ((_this$infoWin$getChil = this.infoWin.getChildByName("Label")) == null ? void 0 : _this$infoWin$getChil.getComponent(Label)).string = Num.exchangeToThousands(songkran.exchangeRate, coin);
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
          // dragon.node.playAnimWinOver();
        };

        _createClass(infoBoard, [{
          key: "showInfoTextBn",
          get: function get() {
            return this._showInfoTextBn;
          },
          set: function set(v) {
            this._showInfoTextBn = v;
            this.infoText.active = v;
            this.infoWin.active = !this.infoText.active;
            if (this.infoText.active) {
              this.winLevel = EWinLev.one;
            }
            if (this.infoText.active) {
              this.hideBgEffect();
            }
          }
        }, {
          key: "infoTextType",
          get: function get() {
            return this._infoTextType;
          }
          /**设置广播类型 */,
          set: function set(v) {
            var _this$infoText$getCom;
            if (this._infoTextType == v) return;
            this._infoTextType = v;
            var arr = [];
            switch (this.infoTextType) {
              case ETextType.normal:
                arr = [4, 5, 6];
                break;
              case ETextType.free:
                arr = [0, 1, 2, 3, 5, 6];
                break;
              case ETextType.oneMore:
                arr = [0, 1, 2, 3, 4, 6];
                break;
              case ETextType.win:
                arr = [0, 1, 2, 3, 4, 5];
                break;
            }
            (_this$infoText$getCom = this.infoText.getComponent(lampUI)) == null || _this$infoText$getCom.setHideMessage(arr);
          }
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(v) {
            this._type = v;
            for (var i = 0; i < this.bgs.length; i++) {
              this.bgs[i].children[0].active = v == EInfoBoardType.free;
            }
          }
        }, {
          key: "winLevel",
          get: function get() {
            return this._winLevel;
          },
          set: function set(v) {
            if (this._winLevel == v) return;
            this._winLevel = v;
            for (var i = 0; i < this.bgs.length; i++) {
              var bg = this.bgs[i];
              if (v == i) {
                bg.active = true;
                if (v == EWinLev.two) {
                  var _bg$getComponent;
                  (_bg$getComponent = bg.getComponent(Animation)) == null || _bg$getComponent.play();
                  this.playLight();
                } else if (v == EWinLev.three) {
                  var _bg$getComponent2;
                  (_bg$getComponent2 = bg.getComponent(Animation)) == null || _bg$getComponent2.play();
                  this.playLight();
                }
              } else {
                bg.active = false;
              }
            }
          }
        }, {
          key: "infoWinType",
          get: /**赢得金币类型 */
          function get() {
            return this._infoWinType;
          },
          set: function set(v) {
            this._infoWinType = v;
            this.infoWin.getChildByName("info_win").active = v == EWinType.win;
            this.infoWin.getChildByName("info_tw").active = v == EWinType.total;
            this.infoWin.getChildByName("Label").active = true;
          }
        }, {
          key: "winPlayOverBn",
          get: function get() {
            return this._winPlayOverBn;
          },
          set: function set(v) {
            this._winPlayOverBn = v;
          }
        }]);
        return infoBoard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgEffects", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprays", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "infoText", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "infoWin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ETextType = exports('ETextType', /*#__PURE__*/function (ETextType) {
        ETextType[ETextType["normal"] = 0] = "normal";
        ETextType[ETextType["free"] = 1] = "free";
        ETextType[ETextType["oneMore"] = 2] = "oneMore";
        ETextType[ETextType["win"] = 3] = "win";
        return ETextType;
      }({}));
      var EWinType = exports('EWinType', /*#__PURE__*/function (EWinType) {
        EWinType[EWinType["num"] = 0] = "num";
        EWinType[EWinType["win"] = 1] = "win";
        EWinType[EWinType["total"] = 2] = "total";
        return EWinType;
      }({}));
      var EInfoBoardType = exports('EInfoBoardType', /*#__PURE__*/function (EInfoBoardType) {
        EInfoBoardType[EInfoBoardType["normal"] = 0] = "normal";
        EInfoBoardType[EInfoBoardType["free"] = 1] = "free";
        return EInfoBoardType;
      }({}));
      var EWinLev = exports('EWinLev', /*#__PURE__*/function (EWinLev) {
        EWinLev[EWinLev["one"] = 0] = "one";
        EWinLev[EWinLev["two"] = 1] = "two";
        EWinLev[EWinLev["three"] = 2] = "three";
        return EWinLev;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/itemParticle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, ccenum, CCFloat, _decorator, Prefab, math, Vec3, tween, instantiate, Component;
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
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c7bbdCHXSVDU456kz028m95", "itemParticle", undefined);
      ccenum(CCFloat);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var itemParticle = exports('itemParticle', (_dec = ccclass('itemParticle'), _dec2 = property({
        type: Prefab,
        tooltip: ""
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
        _inheritsLoose(itemParticle, _Component);
        function itemParticle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pb", _descriptor, _assertThisInitialized(_this));
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
        var _proto = itemParticle.prototype;
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
            var item = this.node.children[i];
            this.recycle(item);
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
          var item = this.factory();
          item.scale = new Vec3(this.startScale, this.startScale);
          item.x = 0;
          item.y = 0;
          item.angle = math.random() * 360;
          var r = 360 * math.random();
          var aimPos = new Vec3(this.wRange * Math.cos(r), this.hRange * Math.sin(r));
          var delay = math.random();
          tween(item).delay(delay).call(function () {
            _this2.node.addChild(item);
          }).to(this.flyTime, {
            scale: new Vec3(this.endScale, this.endScale),
            position: aimPos
          }).call(function () {
            _this2.recycle(item);
          }).start();
        };
        _proto.factory = function factory() {
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
        return itemParticle;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pb", [_dec2], {
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

System.register("chunks:///_virtual/lastmoneyPanel11.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './cSongkran.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, Num, songkran;
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
      songkran = module.songkran;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d9882JA/jhG+Y6tT4tkWtJW", "lastmoneyPanel", undefined);
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
          songkran.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          songkran.main.audio.playclickopen();
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
          songkran.main.audio.playclickclose();
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

System.register("chunks:///_virtual/module_slots_songkran", ['./SlotsSongkranGameMgr.ts', './SlotsSongkranLobbyScene.ts', './autoPanel10.ts', './betNum11.ts', './betPanel11.ts', './bubleParticle.ts', './cSongkran.ts', './clearRow.ts', './dataChange10.ts', './infoBoard2.ts', './itemParticle.ts', './lastmoneyPanel11.ts', './songkranAudio.ts', './songkranBg.ts', './songkranDetail.ts', './songkranFreeBegin.ts', './songkranFreeEnd.ts', './songkranMain.ts', './songkranReel.ts', './songkranSlotCtrl.ts', './songkranSymbol.ts', './songkranWheel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotsSongkranGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d9be3XOvg5B0pEes8Kfh6fQ", "SlotsSongkranGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsSongkranGameMgr = exports('SlotsSongkranGameMgr', (_dec = ccclass('SlotsSongkranGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsSongkranGameMgr, _GameMgr);
        function SlotsSongkranGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_SONGKRAN;
          _this._gameType = SubGameDef.SLOTS_SONGKRAN;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_songkran',
            bundle: ModuleDef.SLOTS_SONGKRAN
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsSongkranGameMgr.prototype;
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
            var url = "prefab/songkranMain";
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
        _createClass(SlotsSongkranGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsSongkranGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsSongkranGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsSongkranGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsSongkranLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './SlotsSongkranGameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, SlotsSongkranGameMgr, SubGameMgr, SubGameDef;
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
      SlotsSongkranGameMgr = module.SlotsSongkranGameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0801f3Q6hNN/rgGe36dp6D+", "SlotsSongkranLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsSongkranLobbyScene = exports('SlotsSongkranLobbyScene', (_dec = ccclass('SlotsSongkranLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsSongkranLobbyScene, _Component);
        function SlotsSongkranLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsSongkranLobbyScene.prototype;
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
          SlotsSongkranGameMgr.inst.initSoloMode();
          SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_SONGKRAN, true);
        };
        return SlotsSongkranLobbyScene;
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

System.register("chunks:///_virtual/songkranAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "378e0hGEadNI44k+El53ubW", "songkranAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var songkranAudio = exports('songkranAudio', (_dec = ccclass('songkranAudio'), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranAudio, _Component);
        function songkranAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "stopWheel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickstart", _descriptor2, _assertThisInitialized(_this));
          _this.urlArr = ["sound/bgNormal", "sound/bgFree", "sound/bigWin", "sound/win"];
          return _this;
        }
        var _proto = songkranAudio.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.playBgm = function playBgm(index) {
          tgx.AudioMgr.inst.audio.playMusicLoop(this.urlArr[index], ModuleDef.SLOTS_SONGKRAN);
        };
        _proto.playBgNormal = function playBgNormal() {
          this.playBgm(0);
        };
        _proto.playBgFree = function playBgFree() {
          this.playBgm(1);
        };
        _proto.playBigWin = function playBigWin() {
          this.playBgm(2);
        };
        _proto.playWin = function playWin() {
          this.playBgm(3);
        };
        _proto.playclickopen = function playclickopen() {};
        _proto.playclickclose = function playclickclose() {};
        _proto.playStopWheel = function playStopWheel() {
          this.playEf(this.stopWheel);
        };
        _proto.playEf = function playEf(clip) {
          tgx.AudioMgr.inst.audio.playEffect(clip);
        };
        _proto.playclickstart = function playclickstart() {
          this.playEf(this.clickstart);
        };
        _proto.clearAll = function clearAll() {
          tgx.AudioMgr.inst.audio.clearAll();
        };
        return songkranAudio;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stopWheel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickstart", [_dec3], {
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

System.register("chunks:///_virtual/songkranBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cSongkran.ts', './infoBoard2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Animation, Vec3, Tween, math, tween, Label, instantiate, UITransform, Component, songkran, EInfoBoardType, ETextType;
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
      Vec3 = module.Vec3;
      Tween = module.Tween;
      math = module.math;
      tween = module.tween;
      Label = module.Label;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      songkran = module.songkran;
    }, function (module) {
      EInfoBoardType = module.EInfoBoardType;
      ETextType = module.ETextType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "f2dfczPwdhLnZqnrdDBtlhr", "songkranBg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var songkranBg = exports('songkranBg', (_dec = ccclass('songkranBg'), _dec2 = property({
        type: Node,
        tooltip: "normalBg"
      }), _dec3 = property({
        type: Node,
        tooltip: "freeBg"
      }), _dec4 = property({
        type: [Node],
        tooltip: "flags"
      }), _dec5 = property({
        type: [Animation],
        tooltip: "水桶满水动画"
      }), _dec6 = property({
        type: [Node],
        tooltip: "倍数"
      }), _dec7 = property({
        type: Animation,
        tooltip: "倍数水花"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranBg, _Component);
        function songkranBg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "normalBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flags", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "faucetWinAni", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mulNums", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyNumBoomAni", _descriptor6, _assertThisInitialized(_this));
          _this._bgState = EBGType.normal;
          _this.fTime = 3;
          _this.rTime = 2;
          _this.rRotation = 10;
          _this.oneFlyAim = new Vec3(0, -20);
          _this.doFlyAim = new Vec3(0, -328);
          _this.jumpTime = 0.2;
          return _this;
        }
        var _proto = songkranBg.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.bgState = EBGType.normal;
          this.initMulNums();
          this.flyNumBoomAni.node.active = false;
        };
        _proto.floating = function floating(node, iRotation) {
          var _this2 = this;
          if (iRotation === void 0) {
            iRotation = 0;
          }
          Tween.stopAllByTarget(node);
          var aTime = this.fTime + this.rTime * math.random();
          var aRotation = this.rRotation * math.random() + iRotation - this.rRotation / 2;
          tween(node).to(aTime, {
            angle: aRotation
          }).call(function () {
            _this2.floating(node, iRotation);
          }).start();
        };
        _proto.playFloating = function playFloating() {
          for (var i = 0; i < this.flags.length; i++) {
            var flag = this.flags[i];
            if (i == 0) {
              this.floating(flag, -10);
            } else {
              this.floating(flag);
            }
          }
        }

        /**水桶动画 */;
        _proto.playFaucetWin = function playFaucetWin(i) {
          this.faucetWinAni[i].play();
        };
        _proto.initMulNums = function initMulNums() {
          for (var i = 0; i < this.mulNums.length; i++) {
            this.mulNums[i].opacity = 0;
            this.mulNums[i].getComponent(Label).string = "x" + "0";
          }
        }

        /**倍率结算飞数字 */;
        _proto.fly = function fly(multiplesL) {
          var _this3 = this;
          for (var i = 0; i < multiplesL.length; i++) {
            var aim = multiplesL[i];
            if (aim > 0) {
              var numNode = this.mulNums[i];
              numNode.getComponent(Label).string = "x" + aim;
              this.oneFly(numNode, i);
              numNode.opacity = 150;
            }
          }
          this.scheduleOnce(function () {
            _this3.doFly(multiplesL);
          }, 0.5);
        };
        _proto.oneFly = function oneFly(numNode, index) {
          var item = instantiate(numNode);
          item.parent = numNode.parent;
          var pos = new Vec3(0, 0, 0);
          switch (index) {
            case 0:
              pos.x = item.x - 20;
              pos.y = item.y;
              break;
            case 1:
              pos.x = item.x;
              pos.y = item.y + 20;
              break;
            case 2:
              pos.x = item.x + 20;
              pos.y = item.y;
              break;
          }
          tween(item).to(0.2, {
            position: pos
          }).to(0.4, {
            position: this.oneFlyAim
          }).call(function () {
            item.parent = null;
          }).start();
        };
        _proto.doFly = function doFly(multiplesL) {
          this.flyNumBoomAni.node.active = true;
          this.flyNumBoomAni.play();
          var item = instantiate(this.mulNums[1]);
          item.parent = this.mulNums[1].parent;
          item.getComponent(Label).string = "x" + (multiplesL[0] + multiplesL[1] + multiplesL[2]);
          item.scale = new Vec3(0, 0);
          item.position = this.oneFlyAim;
          item.opacity = 255;
          var transForm = item.getComponent(UITransform);
          var pos = transForm.convertToWorldSpaceAR(new Vec3(0, 0));
          transForm = this.node.parent.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(pos);
          item.position = p;
          item.parent = this.node.parent;
          tween(item).to(0.2, {
            scale: new Vec3(4, 4)
          }).delay(0.4).to(0.4, {
            scale: new Vec3(1, 1),
            position: this.doFlyAim
          }).call(function () {
            item.parent = null;
            songkran.main.flyNumBack();
          }).start();
          this.scheduleOnce(function () {
            songkran.main.dropBlue();
          }, 1);
        };
        /** */
        _proto.jump = function jump(multiples, i) {
          i -= 1;
          var aim = multiples[i];
          var numNode = this.mulNums[i];
          var count = aim - this.getNum(numNode);
          if (count > 0) {
            numNode.active = true;
            numNode.opacity = 255;
            this.playFaucetWin(i);
            var t = this.jumpTime / count;
            this.dojump(numNode, t, count);
          } else {
            if (songkran.rollIndex == 0) {
              numNode.active = false;
              numNode.opacity = 255;
              numNode.getComponent(Label).string = "x" + 0;
            } else {
              numNode.opacity = 255;
            }
          }
        };
        _proto.dojump = function dojump(node, t, count) {
          var _this4 = this;
          var aimY = node.y;
          if (count == 0) {
            return;
          }
          node.getComponent(Label).string = "x" + (this.getNum(node) + 1);
          count--;
          tween(node).to(t / 2, {
            y: aimY + 10
          }).to(t / 2, {
            y: aimY
          }).call(function () {
            _this4.dojump(node, t, count);
          }).start();
        };
        _proto.getNum = function getNum(item) {
          var str = item.getComponent(Label).string;
          var num = Number(str.split("x")[1]);
          return num;
        };
        _createClass(songkranBg, [{
          key: "bgState",
          get: function get() {
            return this._bgState;
          },
          set: function set(v) {
            this._bgState = v;
            this.normalBg.active = this.bgState == EBGType.normal;
            this.freeBg.active = this.bgState == EBGType.free;
            this.normalBg.active && this.playFloating();
            if (v == EBGType.free) {
              songkran.main.infoBoard.type = EInfoBoardType.free;
              songkran.main.infoBoard.infoTextType = ETextType.free;
            } else {
              songkran.main.infoBoard.type = EInfoBoardType.normal;
              songkran.main.infoBoard.infoTextType = ETextType.normal;
            }
            songkran.slotCtrl.bgState = v;
          }
        }]);
        return songkranBg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "freeBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flags", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "faucetWinAni", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mulNums", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "flyNumBoomAni", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var EBGType = exports('EBGType', /*#__PURE__*/function (EBGType) {
        EBGType[EBGType["normal"] = 0] = "normal";
        EBGType[EBGType["free"] = 1] = "free";
        return EBGType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/songkranDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cSongkran.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, songkran;
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
      songkran = module.songkran;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "6bd41GhgPNHjptEs5u+Addv", "songkranDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_COMBINATIONS = [[], [1, 3, 5], [1, 3, 5], [1, 3, 5], [1, 3, 5], [1, 3, 5], [1, 3, 5], [5, 10, 30], [5, 10, 30], [10, 20, 50], [10, 20, 50], [30, 50, 100], [50, 100, 200]];
      var songkranDetail = exports('songkranDetail', (_dec = ccclass('songkranDetail'), _dec2 = property({
        type: Node,
        tooltip: "图片"
      }), _dec3 = property({
        type: Node,
        tooltip: "背景板"
      }), _dec4 = property({
        type: Node,
        tooltip: "icons"
      }), _dec5 = property({
        type: Node,
        tooltip: "nums"
      }), _dec6 = property({
        type: Label,
        tooltip: "中奖分数"
      }), _dec7 = property({
        type: Label,
        tooltip: "中奖分数"
      }), _dec8 = property({
        type: Label,
        tooltip: "中奖分数"
      }), _dec9 = property({
        type: Node,
        tooltip: "specialNode"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranDetail, _Component);
        function songkranDetail() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roleSpriteNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BGNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotsNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "num1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "num2", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "num3", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "specialNode", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = songkranDetail.prototype;
        _proto.init = function init(id, wheelId) {
          if (songkran.detail) {
            songkran.detail.node.active = false;
          }
          songkran.detail = this;
          var config = GAME_COMBINATIONS[id];
          if (config) {
            this.num1.string = config[0];
            this.num2.string = config[1];
            this.num3.string = config[2];
          }
          if (id < 13) {
            this.numNode.active = true;
            this.specialNode.active = false;
            this.BGNode.w = 2 * 150;
          } else {
            this.numNode.active = false;
            this.specialNode.active = true;
            this.BGNode.w = 3 * 150;
            this.specialNode.children[0].active = id == 13;
            this.specialNode.children[1].active = id == 14;
          }
          var dis = 0;
          if (id < 7) {
            dis = 28;
          } else if (id < 11 && id >= 7) {
            dis = 14;
          }
          if (wheelId <= 2) {
            this.BGNode.anchor_x = 0;
            this.slotsNode.x = 76;
            this.numNode.x = 220 + dis;
            this.specialNode.x = 286;
          } else {
            this.BGNode.anchor_x = 1;
            this.slotsNode.x = -76;
            this.numNode.x = -220 + dis;
            this.specialNode.x = -286;
          }
          this.slotsNode.children[id - 1].active = true;
        };
        _proto.node_onclick = function node_onclick() {
          songkran.main.detailMask.active = false;
          this.node.destroy();
          songkran.detail = null;
        };
        return songkranDetail;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "slotsNode", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "num1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "num2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "num3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "specialNode", [_dec9], {
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

System.register("chunks:///_virtual/songkranFreeBegin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cSongkran.ts', './songkranBg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Vec3, tween, Component, songkran, EBGType;
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
      songkran = module.songkran;
    }, function (module) {
      EBGType = module.EBGType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "129b2I0dDxOJZ4Tf/jbo29x", "songkranFreeBegin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var songkranFreeBegin = exports('songkranFreeBegin', (_dec = ccclass('songkranFreeBegin'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec3 = property({
        type: Label,
        tooltip: "免费次数"
      }), _dec4 = property({
        type: Node,
        tooltip: "过场光效"
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
        type: Node,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranFreeBegin, _Component);
        function songkranFreeBegin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "times", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "girl", _descriptor7, _assertThisInitialized(_this));
          _this.playOverBn = false;
          return _this;
        }
        var _proto = songkranFreeBegin.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.freeShow = function freeShow(freeTimes) {
          var _this2 = this;
          this.playOverBn = false;
          this.node.active = true;
          this.times.string = freeTimes + "";
          this.bg.active = false;
          this.items.active = false;
          this.light.active = true;
          this.items.opacity = 100;
          this.girl.scale = new Vec3(0.5, 0.5);
          this.girl.y = -50;
          this.clock.children[0].angle = 0;
          this.clock.children[1].getComponent(Label).string = "0%";
          this.btn.scale = new Vec3(0, 0);
          this.btn.opacity = 0;
          tween(this.node).delay(0.02).call(function () {
            _this2.items.active = true;
            tween(_this2.items).to(0.5, {
              opacity: 255
            }).start();
            tween(_this2.girl).to(0.98, {
              y: 0,
              scale: new Vec3(1, 1)
            }).start();
          }).delay(0.1).call(function () {
            _this2.bg.active = true;
            songkran.main.bg.bgState = EBGType.free;
          }).delay(0.88).call(function () {
            _this2.showBtn();
          }).start();
        };
        _proto.showBtn = function showBtn() {
          var _this3 = this;
          var round = this.clock.children[0];
          this.btn.opacity = 255;
          tween(round).to(0.5, {
            angle: -90
          }).call(function () {
            tween(_this3.btn).to(0.5, {
              scale: new Vec3(1.2, 1.2)
            }).to(0.1, {
              scale: new Vec3(1, 1)
            }).call(function () {
              _this3.playOverBn = true;
              _this3.scheduleOnce(_this3.freeHide, 5);
              tween(_this3.girl).to(5, {
                scale: new Vec3(1.1, 1.1)
              }).start();
            }).start();
          }).start();
          this.scheduleOnce(function () {
            _this3.clock.children[1].getComponent(Label).string = "100%";
          }, 0.4);
        };
        _proto.freeHide = function freeHide() {
          if (this.playOverBn) {
            this.girl.scale = new Vec3(0.5, 0.5);
            this.girl.y = -50;
            this.node.active = false;
            songkran.main.freeBeginHide();
          }
        };
        return songkranFreeBegin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "times", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "girl", [_dec8], {
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

System.register("chunks:///_virtual/songkranFreeEnd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cSongkran.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, Vec3, macro, tween, Component, songkran, Num;
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
      Vec3 = module.Vec3;
      macro = module.macro;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      songkran = module.songkran;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "2bc0dAljQRAB5uWRI6q353G", "songkranFreeEnd", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var songkranFreeEnd = exports('songkranFreeEnd', (_dec = ccclass('songkranFreeEnd'), _dec2 = property({
        type: Label,
        tooltip: ""
      }), _dec3 = property({
        type: Node,
        tooltip: ""
      }), _dec4 = property({
        type: Label,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranFreeEnd, _Component);
        function songkranFreeEnd() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "freeTimes", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "num", _descriptor3, _assertThisInitialized(_this));
          //大奖数字滚动动画
          _this.aimCoin = 0;
          _this.addcoin = 0;
          _this.addOnce = 0;
          _this._playOverNumBn = true;
          _this.playOverBn = false;
          return _this;
        }
        var _proto = songkranFreeEnd.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.freeShow = function freeShow(freeTimes, coin) {
          this.node.active = true;
          this.freeTimes.string = freeTimes + "";
          this.btn.opacity = 0;
          this.btn.scale = new Vec3(0, 0);
          this.playCoin(coin);
        };
        _proto.playCoin = function playCoin(coin) {
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverNumBn = false;
          this.num.string = Num.exchangeToThousands(songkran.exchangeRate, this.addcoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.showBtn, 8);
        };
        _proto.coinOneChange = function coinOneChange() {
          this.addcoin += this.addOnce;
          if (this.addcoin >= this.aimCoin) {
            this.playCoinOver();
          } else {
            this.num.string = Num.exchangeToThousands(songkran.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          this.playOverNumBn = true;
          this.num.string = Num.exchangeToThousands(songkran.exchangeRate, this.aimCoin);
          this.unschedule(this.showBtn);
          this.showBtn();
        };
        _proto.showBtn = function showBtn() {
          var _this2 = this;
          this.btn.opacity = 255;
          tween(this.btn).to(0.5, {
            scale: new Vec3(1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1)
          }).call(function () {
            _this2.playOverBn = true;
            _this2.scheduleOnce(_this2.freeHide, 5);
          }).start();
        };
        _proto.freeHide = function freeHide() {
          if (this.playOverBn) {
            this.node.active = false;
            songkran.main.freeEndHide();
          }
        };
        _createClass(songkranFreeEnd, [{
          key: "playOverNumBn",
          get: function get() {
            return this._playOverNumBn;
          },
          set: function set(v) {
            this._playOverNumBn = v;
          }
        }]);
        return songkranFreeEnd;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "freeTimes", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "num", [_dec4], {
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

System.register("chunks:///_virtual/songkranMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './songkranSlotCtrl.ts', './cSongkran.ts', './infoBoard2.ts', './songkranBg.ts', './NetGameServer.ts', './SubGameDef.ts', './dataChange10.ts', './RoomMgr.ts', './UIHelp.ts', './LanguageData.ts', './UserMgr.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Vec3, Label, tween, instantiate, Animation, Tween, Component, songkranSlotCtrl, songkran, infoBoard, ETextType, EWinType, songkranBg, EBGType, gameNet, SubGameDef, dataChange, RoomMgr, UIHelp, UIhelpParam, LanguageData, UserMgr, Num;
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
      Vec3 = module.Vec3;
      Label = module.Label;
      tween = module.tween;
      instantiate = module.instantiate;
      Animation = module.Animation;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      songkranSlotCtrl = module.songkranSlotCtrl;
    }, function (module) {
      songkran = module.songkran;
    }, function (module) {
      infoBoard = module.infoBoard;
      ETextType = module.ETextType;
      EWinType = module.EWinType;
    }, function (module) {
      songkranBg = module.songkranBg;
      EBGType = module.EBGType;
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
      UserMgr = module.UserMgr;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "30f12X/HdpLWbh3olyrMVkt", "songkranMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var songkranMain = exports('songkranMain', (_dec = ccclass('songkranMain'), _dec2 = property({
        type: [Prefab],
        tooltip: "滚轮物品Pb"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "物品详情Pb"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "免费模式开场动画"
      }), _dec5 = property({
        type: Prefab,
        tooltip: "物品选中"
      }), _dec6 = property({
        type: Prefab,
        tooltip: "物品选中"
      }), _dec7 = property({
        type: Prefab,
        tooltip: "物品消失"
      }), _dec8 = property({
        type: Prefab,
        tooltip: "物品消失列"
      }), _dec9 = property({
        type: Node,
        tooltip: "物品详细"
      }), _dec10 = property({
        type: songkranBg,
        tooltip: "游戏背景"
      }), _dec11 = property({
        type: infoBoard,
        tooltip: "滚屏提示"
      }), _dec12 = property({
        type: Node,
        tooltip: "slotCtrl"
      }), _dec13 = property({
        type: Node,
        tooltip: "blueParticle"
      }), _dec14 = property({
        type: Node,
        tooltip: "泼水节首波等待"
      }), _dec15 = property({
        type: Prefab,
        tooltip: "泼水节等待"
      }), _dec16 = property({
        type: Prefab,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranMain, _Component);
        function songkranMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemPb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBegin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "select", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boom", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clear", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clearRow", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailMask", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoBoard", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotCtrlNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blueParticle", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wait", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waitLater", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeBoom", _descriptor15, _assertThisInitialized(_this));
          /**延迟点击 */
          _this.delayClick = false;
          _this.audio = null;
          _this.slotCtrl = null;
          _this.delayRollBn = false;
          _this.rollCallBackBn = false;
          _this.addItemArr = [];
          _this.removeArr = [];
          _this.closeBigWinBn = false;
          _this.sPos = new Vec3(0, 222);
          _this.ePos = new Vec3(0, -328);
          return _this;
        }
        var _proto = songkranMain.prototype;
        _proto.onLoad = function onLoad() {
          songkran.main = this;
          // songkran.musicControl = AudioMgr.inst.musicControl;
          this.slotCtrl = this.slotCtrlNode.getComponent(songkranSlotCtrl);
          this.slotCtrl.initBetContent(songkran.BETNUM, songkran.BET, songkran.LINES);
          this.audio = this.node.getComponent('songkranAudio');
          songkran.bet = 0;
          songkran.betNum = 0;
          songkran.sumIdx = 0;
          this.slotCtrl.updateBet(songkran.sumIdx);
          songkran.auto = false;
          songkran.autoTimes = 0;
          songkran.status = 0;
          songkran.rollIndex = 0;
          songkran.lotteryRes = null;
          this.detailMask.active = false;
          this.wait.active = false;
          songkran.money = UserMgr.inst.coin;
          this.slotCtrl.lblUserCoin.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.money);
        };
        _proto.start = function start() {
          this.blueParticle.active = false;
          this.audio.playBgNormal();
        };
        _proto.startAuto = function startAuto(n) {
          if (songkran.bIsFreeGame || this.delayClick) {
            return;
          }
          if (songkran.status == 0) {
            songkran.auto = true;
            songkran.autoTimes = n;
            this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label).string = n + "";
            if (n > 999) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
            } else if (n > 99) {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
            } else {
              this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
            }
            this.slotCtrl.Btn_stopAuto.active = songkran.auto;
            this.slotCtrl.rollBtn.active = !this.slotCtrl.Btn_stopAuto.active;
            this.scheduleOnce(this.sendRoll, 1);
          }
        };
        _proto.onCLick = function onCLick(event, args) {
          var _this2 = this;
          switch (args) {
            case "roll":
              if (this.delayRollBn || songkran.rollEnable == false) {
                return;
              }
              if (!songkran.auto) {
                this.delayClick = true;
                this.scheduleOnce(function () {
                  _this2.delayClick = false;
                }, 0.5);
                if (songkran.status == 0) {
                  songkran.status = 2;
                  this.sendRoll();
                } else if (songkran.status == 1) {
                  this.slotCtrl.setSpinAnim(3);
                  this.stopImmediately();
                }
              }
              break;
            case "add":
              if (songkran.auto) {
                return;
              }
              songkran.sumIdx += 1;
              songkran.sumIdx = this.slotCtrl.updateBet(songkran.sumIdx) == 0 ? songkran.sumIdx - 1 : songkran.sumIdx;
              tween(this.slotCtrl.lblCurBet.node).to(0.1, {
                scale: new Vec3(1.2, 1.2)
              }).to(0.1, {
                scale: new Vec3(1, 1)
              }).start();
              break;
            case "dec":
              if (songkran.auto) {
                return;
              }
              songkran.sumIdx -= 1;
              songkran.sumIdx = this.slotCtrl.updateBet(songkran.sumIdx) == 0 ? songkran.sumIdx + 1 : songkran.sumIdx;
              tween(this.slotCtrl.lblCurBet.node).to(0.1, {
                scale: new Vec3(1.2, 1.2)
              }).to(0.1, {
                scale: new Vec3(1, 1)
              }).start();
              break;
            case "exitGame":
              this.onBtnExitClicked();
              break;
            case "help":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
              break;
            case "pay":
              tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
              break;
            case "lastMoney":
              songkran.lastmoneyPanel.showPanel();
              break;
          }
        };
        _proto.onBtnExitClicked = function onBtnExitClicked() {
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ok) {
                    songkran.main.close();
                    RoomMgr.inst.exitRoom();
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.sendRoll = function sendRoll() {
          this.initRoll();
          songkran.autoTimes = songkran.autoTimes > 0 ? songkran.autoTimes - 1 : 0;
          if (songkran.autoTimes == 0) {
            songkran.auto = false;
          }
          this.slotCtrl.setSpinAnim(1);
          var autoTimesLab = this.slotCtrl.Btn_stopAuto.children[0].getComponent(Label);
          autoTimesLab.string = songkran.autoTimes + "";
          // this.audio.playclickstart();
          if (songkran.autoTimes > 999) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.5, 0.5);
          } else if (songkran.autoTimes > 99) {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(0.64, 0.64);
          } else {
            this.slotCtrl.Btn_stopAuto.children[0].scale = new Vec3(1, 1);
          }
          for (var i in songkran.wheelList) {
            songkran.wheelList[i].rollLoop();
          }
          this.sendLottery();
        };
        _proto.initRoll = function initRoll() {
          songkran.accumulative = 0;
          this.removeDetail();
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.conn.callApi('slots/PlayMatch3', {
                    gameId: SubGameDef.SLOTS_SONGKRAN,
                    bet: songkran.betSum.toString()
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
          songkran.lotteryRes = res;
        };
        _proto.lotteryBack = function lotteryBack(data) {
          var _this3 = this;
          if (data && data.isSucc) {
            this.exchange(data.res);
            this.scheduleOnce(function () {
              songkran.rollIndex = 0;
              songkran.waveIndex = 0;
              _this3.roll(songkran.waveData.handCards);
            }, 1);
          }
        };
        _proto.roll = function roll(list) {
          if (!songkran.auto) {
            songkran.rollEnable = true;
          }
          songkran.status = 1;
          this.wait.active = false;
          if (songkran.slotCtrl.isSpeed || songkran.rollIndex > 0) {
            for (var i in songkran.wheelList) {
              songkran.wheelList[i].startRoll(list);
            }
          } else {
            var count = 0;
            for (var _i = 0; _i < songkran.wheelList.length; _i++) {
              if (count >= 2) {
                this.infoBoard.infoTextType = ETextType.oneMore;
                var temp = songkran.wheelList[_i].node.parent;
                this.wait.position = temp.position;
                this.wait.children[0].h = temp.h;
                this.wait.children[1].h = temp.h;
                this.wait.active = true;
                songkran.wheelList[_i].startRoll(list, 1);
                return;
              }
              var arr = [].concat(list);
              var sum = 0;
              for (var j = 0; j <= _i; j++) {
                sum += songkran.LINENUM[j];
              }
              arr = arr.splice(0, sum);
              count = 0;
              arr.forEach(function (item) {
                if (item == 13) count++;
              });
              songkran.wheelList[_i].startRoll(list);
            }
          }
        };
        _proto.waitBack = function waitBack(t, wheelId, list) {
          if (wheelId < songkran.wheelList.length - 1) {
            var i = wheelId + 1;
            var temp = songkran.wheelList[i].node.parent;
            this.wait.position = temp.position;
            this.wait.children[0].h = temp.h;
            this.wait.children[1].h = temp.h;
            songkran.wheelList[i].startRoll(list, 1);
          } else {
            this.wait.active = false;
          }
        };
        _proto.rollCallBack = function rollCallBack() {
          var _this4 = this;
          var st = 0;
          for (var i in songkran.wheelList) {
            if (songkran.wheelList[i].status) {
              st = 1;
              break;
            }
          }
          songkran.status = st;
          if (songkran.status == 0) {
            if (this.rollCallBackBn) {
              return;
            }
            this.rollCallBackBn = true;
            this.scheduleOnce(function () {
              _this4.rollCallBackBn = false;
            }, 1);
            if (songkran.waveData.winscore > 0) {
              this.slotCtrl.setSpinAnim(3);
            } else {
              this.slotCtrl.setSpinAnim(2);
            }
            this.scheduleOnce(function () {
              _this4.playWinAnim();
            }, 0.5);
          }
        };
        _proto.playWinAnim = function playWinAnim() {
          if (songkran.waveIndex < songkran.rollData.waves.length - 1) {
            //选中要消除的item
            this.initAddItemArr();
            var items = [].concat(songkran.wheelList[0].items, songkran.wheelList[1].items, songkran.wheelList[2].items, songkran.wheelList[3].items, songkran.wheelList[4].items);
            var winCards = songkran.waveData.winCards;
            var addIndex = 0;
            this.removeArr = [];
            for (var i = 0; i < winCards.length; i++) {
              var _boom$getComponent;
              var index = winCards[i];
              this.addItemArr[this.getWheelByIndex(index)].push(songkran.waveData.addCards[addIndex]);
              addIndex++;
              var item = items[index];
              this.removeArr.push(item);
              var select = instantiate(this.select);
              select.name = "select";
              select.parent = item;
              select.setSiblingIndex(0);
              var boom = instantiate(this.boom);
              boom.parent = item;
              (_boom$getComponent = boom.getComponent(Animation)) == null || _boom$getComponent.play();
            }
            //判断有无倍率
            var multiplesL = songkran.waveData.multiplesL;
            if (multiplesL[0] + multiplesL[1] + multiplesL[2] == 0) {
              this.playWinCoin();
              this.scheduleOnce(this.removeItems, 0.3);
            } else {
              this.playNumCoin();
              this.bg.fly(songkran.waveData.multiplesL);
            }
          } else {
            this.scheduleOnce(this.doNext, 1);
          }
        };
        _proto.initAddItemArr = function initAddItemArr() {
          this.addItemArr = [[], [], [], [], []];
        };
        _proto.getWheelByIndex = function getWheelByIndex(index) {
          var lineNum = songkran.LINENUM;
          var sum = 0;
          for (var i = 0; i < lineNum.length; i++) {
            sum += lineNum[i];
            if (index < sum) {
              return i;
            }
          }
          console.log("getWheelByIndex index error:" + index);
          return -1;
        };
        _proto.removeItems = function removeItems() {
          var _this5 = this;
          var disTime = 0.2;
          var count = 0;
          var list = songkran.waveData.handCards;
          list.forEach(function (item) {
            if (item == 13) count++;
          });
          var _loop = function _loop(i) {
            //非极速模式下判断场上是否存在2个泼水节图标
            var type = 0;
            if (count >= 2) {
              _this5.infoBoard.infoTextType = ETextType.oneMore;
              type = 1;
            }
            _this5.scheduleOnce(function () {
              songkran.wheelList[i].removeItemsByArr(_this5.removeArr);
            }, disTime * i);
            if (type) {
              _this5.scheduleOnce(function () {
                songkran.wheelList[i].showWaitLater();
              }, disTime * songkran.wheelList.length + 1.3);
              _this5.scheduleOnce(function () {
                songkran.wheelList[i].hideWaitlater();
              }, disTime * songkran.wheelList.length + 3.3);
            }
            _this5.scheduleOnce(function () {
              songkran.wheelList[i].drop(type);
            }, disTime * songkran.wheelList.length + 1.2);
          };
          for (var i = 0; i < songkran.wheelList.length; i++) {
            _loop(i);
          }
          var multiplesL = songkran.waveData.multiplesL;
          if (multiplesL[0] + multiplesL[1] + multiplesL[2] == 0) {
            if (count >= 2) {
              this.scheduleOnce(this.doNext, 5);
            } else {
              this.scheduleOnce(this.doNext, 3);
            }
          } else {
            if (count >= 2) {
              this.scheduleOnce(this.doNext, 6);
            } else {
              this.scheduleOnce(this.doNext, 4);
            }
          }
        };
        _proto.flyNumBack = function flyNumBack() {
          this.playWinCoin();
          this.removeItems();
          this.infoBoard.playLight();
          this.infoBoard.playStar();
        };
        _proto.playNumCoin = function playNumCoin() {
          if (songkran.waveData.winscore == 0) return;
          this.infoBoard.showInfoTextBn = false;
          this.infoBoard.infoWinType = EWinType.num;
          var multiplesL = songkran.waveData.multiplesL;
          this.infoBoard.playAnimWin(songkran.waveData.winscore / (multiplesL[0] + multiplesL[1] + multiplesL[2]));
        };
        _proto.playWinCoin = function playWinCoin() {
          if (songkran.waveData.winscore == 0) return;
          this.infoBoard.showInfoTextBn = false;
          this.infoBoard.infoWinType = EWinType.win;
          this.infoBoard.playAnimWin(songkran.waveData.winscore);
          songkran.accumulative += songkran.waveData.winscore;
        };
        _proto.playTotalCoin = function playTotalCoin() {
          if (songkran.rollData.winscore == 0 || songkran.rollData.waves.length <= 1) return;
          this.infoBoard.showInfoTextBn = false;
          this.infoBoard.infoWinType = EWinType.total;
          this.infoBoard.playAnimWin(songkran.rollData.winscore);
        };
        _proto.playFreeBegin = function playFreeBegin() {
          this.audio.playBgFree();
          this.slotCtrl.freeBegin.freeShow(songkran.rollData.free);
        };
        _proto.freeBeginHide = function freeBeginHide() {
          var _freeBoom$getComponen,
            _this6 = this;
          this.infoBoard.infoTextType = ETextType.free;
          this.bg.initMulNums();
          var freeBoom = instantiate(this.freeBoom);
          freeBoom.parent = this.node;
          (_freeBoom$getComponen = freeBoom.getComponent(Animation)) == null || _freeBoom$getComponen.play();
          this.scheduleOnce(function () {
            freeBoom.parent = null;
          }, 2);
          this.slotCtrl.lastNum = songkran.rollData.free;
          this.scheduleOnce(function () {
            _this6.slotCtrl.lastNum = songkran.rollData.free - 1;
            _this6.roll(songkran.waveData.handCards);
            _this6.infoBoard.showInfoTextBn = true;
          }, 2.5);
        };
        _proto.playFreeEnd = function playFreeEnd() {
          this.audio.playWin();
          this.bg.bgState = EBGType.normal;
          this.infoBoard.infoTextType = ETextType.normal;
          this.slotCtrl.playAnimWin(songkran.lotteryRes.winscore, songkran.lotteryRes.winscore);
          this.slotCtrl.freeEnd.freeShow(songkran.lotteryRes.rsts.length - 1, songkran.lotteryRes.winscore);
        };
        _proto.freeEndHide = function freeEndHide() {
          this.audio.playBgNormal();
          this.doAuto();
          this.slotCtrl.setSpinAnim(0);
        };
        _proto.doNext = function doNext() {
          var _this7 = this;
          this.unschedule(this.doNext);
          songkran.waveIndex++;
          if (songkran.waveIndex > songkran.rollData.waves.length - 1) {
            if (songkran.rollData.winscore >= songkran.betSum * 5) {
              this.scheduleOnce(function () {
                _this7.slotCtrl.playBigWinCoin(songkran.rollData.winscore);
              }, 1);
            } else {
              Tween.stopAllByTarget(songkran.slotCtrl.bigWinNode);
              this.doCloseBigWin();
            }
          } else {
            this.playWinAnim();
          }
        };
        _proto.doAuto = function doAuto() {
          this.bg.initMulNums();
          this.addDetailEvent();
          if (songkran.auto && songkran.autoTimes > 0) {
            this.sendRoll();
          } else {
            this.slotCtrl.setSpinAnim(0);
            this.infoBoard.showInfoTextBn = true;
          }
        };
        _proto.stopImmediately = function stopImmediately() {
          if (!songkran.auto) {
            for (var i in songkran.wheelList) {
              songkran.wheelList[i].stopImmediately();
            }
          }
          this.wait.active = false;
        };
        _proto.stopAuto = function stopAuto() {
          songkran.auto = false;
          songkran.autoTimes = 0;
        };
        _proto.playAnimWinOver = function playAnimWinOver() {};
        _proto.closeBigWin = function closeBigWin() {
          var _this8 = this;
          if (this.closeBigWinBn) return;
          this.closeBigWinBn = true;
          this.scheduleOnce(function () {
            _this8.closeBigWinBn = false;
          }, 0.5);
          if (songkran.bIsFreeGame) {
            this.audio.playBgFree();
          } else {
            this.audio.playBgNormal();
          }
          Tween.stopAllByTarget(songkran.slotCtrl.bigWinNode);
          this.scheduleOnce(this.doCloseBigWin, 0.8);
        };
        _proto.doCloseBigWin = function doCloseBigWin() {
          var _this9 = this;
          this.unschedule(this.doCloseBigWin);
          this.playTotalCoin();
          songkran.waveIndex = 0;
          if (songkran.rollIndex < songkran.lotteryRes.rsts.length - 1) {
            songkran.rollIndex++;
            if (songkran.rollIndex == 1) {
              this.scheduleOnce(function () {
                _this9.infoBoard.infoTextType = ETextType.win;
                _this9.playFreeBegin();
              }, 0.6);
            } else {
              this.slotCtrl.lastNum = songkran.rollData.free;
              this.scheduleOnce(function () {
                _this9.infoBoard.infoTextType = ETextType.free;
                _this9.slotCtrl.lastNum = songkran.rollData.free - 1;
                songkran.waveIndex = 0;
                _this9.roll(songkran.waveData.handCards);
                _this9.infoBoard.showInfoTextBn = true;
              }, 0.5);
            }
          } else {
            if (songkran.lotteryRes.rsts.length > 1) {
              this.scheduleOnce(this.playFreeEnd, 0.5);
            } else {
              this.scheduleOnce(this.doAuto, 0.1);
            }
          }
        };
        _proto.dropBlue = function dropBlue() {
          var _this10 = this;
          this.blueParticle.position = this.sPos;
          this.blueParticle.active = true;
          tween(this.blueParticle).to(0.4, {
            position: this.ePos
          }, {
            easing: 'quadOut'
          }).call(function () {
            _this10.blueParticle.active = false;
          }).start();
        };
        _proto.removeDetail = function removeDetail() {
          if (songkran.detail) {
            songkran.detail.node_onclick();
          }
          for (var i = 0; i < songkran.wheelList.length; i++) {
            songkran.wheelList[i].interactableBn = false;
          }
        };
        _proto.addDetailEvent = function addDetailEvent() {
          for (var i = 0; i < songkran.wheelList.length; i++) {
            songkran.wheelList[i].interactableBn = true;
          }
        };
        _proto.close = function close() {
          this.audio.clearAll();
        };
        return songkranMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPb", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "freeBegin", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "boom", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "clear", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "clearRow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "detailMask", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "infoBoard", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "slotCtrlNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "blueParticle", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wait", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "waitLater", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "freeBoom", [_dec16], {
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

System.register("chunks:///_virtual/songkranReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './baseSymbol.ts', './Logger.ts', './cSongkran.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodePool, Vec3, tween, ETYPE, baseReel, baseSymbol, Logger, songkran;
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
      Logger = module.Logger;
    }, function (module) {
      songkran = module.songkran;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bd772W59NpLWZdAyzw/wzzA", "songkranReel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FIRSTITEM = [12, 2, 2, 11, 4, 13, 5, 9, 9, 14, 6, 7, 11, 4, 13, 5, 12, 2, 2];
      var songkranReel = exports('songkranReel', (_dec = ccclass('songkranReel'), _dec(_class = /*#__PURE__*/function (_baseReel) {
        _inheritsLoose(songkranReel, _baseReel);
        function songkranReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseReel.call.apply(_baseReel, [this].concat(args)) || this;
          _this.disTime = 0.1;
          return _this;
        }
        var _proto = songkranReel.prototype;
        _proto.start = function start() {
          songkran.reel = this;
          this.radomIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
          this.v = 40;
          this.setReelDate();
        }

        /**设置滚轴排布数据 */;
        _proto.setReelDate = function setReelDate() {
          this.reelDates = [{
            index: 0,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 147,
            headPos: new Vec3(-294, -185),
            vector: 735,
            symbols: [],
            "switch": false
          }, {
            index: 1,
            type: ETYPE.V,
            num: 4,
            pool: new NodePool(baseSymbol),
            size: 147,
            headPos: new Vec3(-147, -261),
            vector: 735,
            symbols: [],
            "switch": false
          }, {
            index: 2,
            type: ETYPE.V,
            num: 5,
            pool: new NodePool(baseSymbol),
            size: 147,
            headPos: new Vec3(0, -365),
            vector: 735,
            symbols: [],
            "switch": false
          }, {
            index: 3,
            type: ETYPE.V,
            num: 4,
            pool: new NodePool(baseSymbol),
            size: 147,
            headPos: new Vec3(147, -261),
            vector: 735,
            symbols: [],
            "switch": false
          }, {
            index: 4,
            type: ETYPE.V,
            num: 3,
            pool: new NodePool(baseSymbol),
            size: 147,
            headPos: new Vec3(294, -185),
            vector: 735,
            symbols: [],
            "switch": false
          }];
          this.arrIndex = [0, 3, 7, 12, 16];
          this.bindResult(FIRSTITEM);
          songkran.main.firstSymbolOver();
        };
        /**启动循环播放 */
        _proto.loop = function loop() {
          var _this2 = this;
          var _loop = function _loop(i) {
            var r = _this2.reelDates[i];
            var disTime = songkran.slotCtrl.isSpeed ? 0 : _this2.disTime * i;
            _this2.scheduleOnce(function () {
              _this2.reboundMove(_this2.reelDates[i]);
            }, disTime);
          };
          // songkran.main.audio.playReelLoop(songkran.slotCtrl.isSpeed);
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
          if (songkran.slotCtrl.isSpeed) {
            this.v = 60;
          } else {
            this.v = 40;
          }
          if (songkran.slotCtrl.isSpeed == false) {
            var _loop2 = function _loop2() {
              var r = _this4.reelDates[i];
              var disTime = _this4.disTime * i;
              _this4.scheduleOnce(function () {
                var symbols = _this4.bindResultOne(r, arr, function () {
                  var cb = function cb() {
                    callback();
                    // songkran.main.audio.playReelEnd(false);
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
              // songkran.main.audio.playReelEnd(true);
            });
          }
        }

        /**消除中奖之后执行下落 */;
        _proto.drop = function drop() {
          var removes = songkran.waveData.winCards;
          var symbols = this.getSymbols;
          if (removes.length > 0) {
            songkran.removeCount = 0;
            for (var i = 0; i < removes.length; i++) {
              var remove = removes[i];
              var symbol = symbols[remove];
              if (symbol) {
                symbol.playBoom();
              } else {
                Logger.error("消除位置不存在roundIndex：" + songkran.waveIndex + "index:" + remove);
              }
            }
          }
        };
        _proto.doAdd = function doAdd() {
          songkran.removeCount = undefined;
          this.addItems();
        };
        _proto.addItems = function addItems() {
          this.removeUnuseAll();
          var arr = [5, 5, 5, 5, 5];
          var addItems = songkran.waveData.addCards;
          for (var i = 0; i < addItems.length; i++) {
            var addItem = addItems[i];
            var r = this.reelDates[addItem.rindex];
            var symbol = this.pushSymbol(r, addItem.id);
            symbol.aimBn = true;
            symbol.bindAimPos(arr[addItem.rindex]);
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
          // this.scheduleOnce(() => { songkran.main.dropBack(); }, 1);
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
        return songkranReel;
      }(baseReel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/songkranSlotCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cSongkran.ts', './songkranBg.ts', './songkranFreeBegin.ts', './songkranFreeEnd.ts', './Num.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, songkran, EBGType, songkranFreeBegin, songkranFreeEnd, Num, LanguageData;
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
      songkran = module.songkran;
    }, function (module) {
      EBGType = module.EBGType;
    }, function (module) {
      songkranFreeBegin = module.songkranFreeBegin;
    }, function (module) {
      songkranFreeEnd = module.songkranFreeEnd;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28;
      cclegacy._RF.push({}, "1a96a4OaSlL/KuJRkhUYto/", "songkranSlotCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var songkranSlotCtrl = exports('songkranSlotCtrl', (_dec = ccclass('songkranSlotCtrl'), _dec2 = property({
        type: Node,
        tooltip: "摇奖按钮"
      }), _dec3 = property([SpriteFrame]), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property([SpriteFrame]), _dec25 = property(Node), _dec26 = property([SpriteFrame]), _dec27 = property([SpriteFrame]), _dec28 = property(songkranFreeBegin), _dec29 = property(songkranFreeEnd), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranSlotCtrl, _Component);
        function songkranSlotCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rollBtn", _descriptor, _assertThisInitialized(_this));
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
          _initializerDefineProperty(_this, "freeBegin", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeEnd", _descriptor28, _assertThisInitialized(_this));
          _this.autoNum = 0;
          _this.isPanelAnim = false;
          _this.isSpeed = false;
          _this._bgState = EBGType.normal;
          _this._lastNum = 0;
          _this.sumList = [];
          _this._btnContent = null;
          _this.curBetTween = null;
          //大奖数字滚动动画
          _this.aimCoin = 0;
          _this.addcoin = 0;
          _this.addOnce = 0;
          _this._playOverBn = true;
          _this.bigBn = false;
          _this.superBn = false;
          _this.megaBn = false;
          _this.fastBn = false;
          //创建提示文字
          _this.tipTween = null;
          /**winNode label */
          _this.winAimCoin = 0;
          _this.winAddcoin = 0;
          _this.winAddOnce = 0;
          _this._winPlayOverBn = false;
          return _this;
        }
        var _proto = songkranSlotCtrl.prototype;
        _proto.start = function start() {
          this.rollBtn.on(Node.EventType.MOUSE_ENTER, this.btnRollTouchStart, this);
          this.rollBtn.on(Node.EventType.MOUSE_LEAVE, this.btnRollTouchEnd, this);
          this.rollBtn.on(Node.EventType.TOUCH_START, this.btnRollClick, this);
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
          if (!songkran.rollEnable) {
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
          if (!songkran.rollEnable) {
            return;
          }
          songkran.main.onCLick(e, 'roll');
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
          this.rollBtn.active = true;
          songkran.main.stopAuto();
        };
        _proto.init = function init() {
          this.musicBtn.getComponent(Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst["switch"] ? 1 : 0];
          this.Setting_panel.opacity = 0;
          this.tipNode.opacity = 0;
          this.winCoin_lab.string = Num.exchangeToThousands(songkran.exchangeRate, 0);
          this.lblUserCoin.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.money);
          this.bigWinNode.active = false;
          this.bigWinNode.children[0].active = false;
          this.bigWinNode.children[1].active = false;
          this.bigWinNode.children[2].active = false;
          this.bigWinNode.children[3].active = false;
          this.setSpinAnim(0);
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
          songkran.main.onCLick(event, args);
        }

        //打开自动弹板
        ;

        _proto.onCLick_openAutoPanel = function onCLick_openAutoPanel() {
          songkran.autoPanel.showPanel();
        }

        //关闭自动弹板
        ;

        _proto.onCLick_closeAutoPanel = function onCLick_closeAutoPanel() {
          songkran.main.audio.playclickclose();
          // this.Auto_panel.getComponent('autoPanel').hidePanel();
        };
        //打开设置界面
        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          songkran.main.audio.playclickopen();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", songkran.main.node);
          if (footer) {
            footer.active = false;
          }
          this.rollBtn.active = false;
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
          var footer = find("ui_footer/ui_footer_a", songkran.main.node);
          if (footer) {
            footer.active = true;
          }
          this.rollBtn.active = true;
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
            songkran.betPanel.hidePanel();
          } else {
            songkran.betPanel.showPanel();
            songkran.betPanel.bindBet();
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
          songkran.main.audio.playclickopen();
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
          if (songkran.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (songkran.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (songkran.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (songkran.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          songkran.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.betSum);
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
        _proto.playBigWinCoin = function playBigWinCoin(coin) {
          this.fastBn = true;
          songkran.main.audio.playBigWin();
          songkran.main.unschedule(songkran.main.sendRoll);
          this.bigWinNode.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / this.changeNum(coin);
          this.playOverBn = false;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(songkran.exchangeRate, this.addcoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.closeBigWin, 10);
        };
        _proto.changeNum = function changeNum(coin) {
          if (coin >= songkran.betSum * 35) {
            return 160;
          } else if (coin >= songkran.betSum * 15 && coin < songkran.betSum * 35) {
            return 130;
          } else {
            return 100;
          }
        };
        _proto.coinOneChange = function coinOneChange() {
          this.addcoin += this.addOnce;
          if (this.addcoin >= this.aimCoin) {
            this.playBigWin(this.aimCoin);
            this.playCoinOver();
          } else {
            this.playBigWin(this.addcoin);
            this.bigWinCoin_lab.string = Num.exchangeToThousands(songkran.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          this.playBigWin(this.aimCoin);
          this.bigWinCoin_lab.string = Num.exchangeToThousands(songkran.exchangeRate, this.aimCoin);
          this.unschedule(this.closeBigWin);
          this.scheduleOnce(this.closeBigWin, 2);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= songkran.betSum * 35 && !this.bigWinNode.children[3].active && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= songkran.betSum * 15 && coin < songkran.betSum * 35 && !this.bigWinNode.children[2].active && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (this.bigBn == false) {
            this.playAnim_BigWin(-1);
            this.bigBn = true;
          }
        };
        _proto.onFastBigWin = function onFastBigWin(e) {
          if (this.fastBn == false) return;
          if (this.playOverBn) {
            this.unschedule(this.closeBigWin);
            this.doCloseBigWin();
            this.fastBn = false;
          } else {
            this.playCoinOver();
          }
        }

        //大奖BigWin动画
        ;

        _proto.playAnim_BigWin = function playAnim_BigWin(coin) {
          this.bigWinNode.active = true;
          this.bigWinNode.children[0].active = true;
          this.bigWinNode.children[0].getComponent(Animation).play();
          this.bigWinNode.children[1].active = true;
          this.bigWinNode.children[2].active = false;
          this.bigWinNode.children[3].active = false;
          this.bigWinNode.children[1].getComponent(Animation).play();
        }

        //大奖SuperWin动画
        ;

        _proto.playAnim_SuperWin = function playAnim_SuperWin() {
          this.bigWinNode.active = true;
          this.bigWinNode.children[0].active = true;
          this.bigWinNode.children[0].getComponent(Animation).play();
          this.bigWinNode.children[1].active = false;
          this.bigWinNode.children[2].active = true;
          this.bigWinNode.children[3].active = false;
          try {
            this.bigWinNode.children[2].getComponent(Animation).play();
          } catch (e) {
            console.log(e);
          }
        }

        //大奖MegaWin动画
        ;

        _proto.playAnim_MegaWin = function playAnim_MegaWin() {
          this.bigWinNode.active = true;
          this.bigWinNode.children[0].active = true;
          this.bigWinNode.children[0].getComponent(Animation).play();
          this.bigWinNode.children[1].active = false;
          this.bigWinNode.children[2].active = false;
          this.bigWinNode.children[3].active = true;
          try {
            this.bigWinNode.children[3].getComponent(Animation).play();
          } catch (e) {
            console.log(e);
          }
        };
        _proto.closeBigWin = function closeBigWin() {
          this.playCoinOver();
          this.unschedule(this.closeBigWin);
          this.unschedule(this.coinOneChange);
          this.scheduleOnce(this.doCloseBigWin, 5);
        };
        _proto.doCloseBigWin = function doCloseBigWin() {
          var _this3 = this;
          this.unschedule(this.doCloseBigWin);
          this.bigWinNode.children[0].active = false;
          this.bigWinNode.children[1].active = false;
          this.bigWinNode.children[2].active = false;
          this.bigWinNode.children[3].active = false;
          tween(this.bigWinNode).to(1, {
            opacity: 0
          }).call(function () {
            _this3.bigWinNode.active = false;
            _this3.bigWinNode.opacity = 255;
            songkran.main.closeBigWin();
          }).start();
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          var _this$rollBtn$getChil;
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              songkran.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !songkran.auto && this.setButtonState(true);
              // if (songkran.lotteryRes && songkran.lotteryRes.winscore == 0) {
              this.changeLabColor(1);
              // }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              songkran.rollEnable = false;
              this.rollBtn.getChildByName("VFX").getComponent(Animation).play();
              var VFX2Ani = (_this$rollBtn$getChil = this.rollBtn.getChildByName("VFX")) == null ? void 0 : _this$rollBtn$getChil.getComponent(Animation);
              VFX2Ani.play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(songkran.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              songkran.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              songkran.rollEnable = false;
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
        _proto.playAnimWin = function playAnimWin(sCoin, eCoin, type) {
          if (type === void 0) {
            type = -1;
          }
          if (eCoin == 0) {
            this.winCoin_lab.string = "0";
            return;
          }
          var t = (type + 1) * 30; //变化次数
          this.winAimCoin = eCoin;
          this.winAddcoin = sCoin;
          this.winAddOnce = (eCoin - sCoin) / t;
          this.winPlayOverBn = false;
          if (t == 0) {
            this.bindWinLab(eCoin);
            return;
          } else {
            this.bindWinLab(this.winAddcoin);
          }
          this.schedule(this.winOneChange, 0.05, macro.REPEAT_FOREVER);
        };
        _proto.bindWinLab = function bindWinLab(coin) {
          this.winCoin_lab.string = Num.exchangeToThousands(songkran.exchangeRate, coin);
          this.lblUserCoin.string = Num.exchangeToThousands(songkran.exchangeRate, songkran.lotteryRes.userscore - songkran.lotteryRes.winscore + coin);
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
        _createClass(songkranSlotCtrl, [{
          key: "bgState",
          get: function get() {
            return this._bgState;
          },
          set: function set(v) {
            this._bgState = v;
            this.betting_panel.active = this.bgState == EBGType.normal;
            this.Setting_panel.active = this.betting_panel.active;
            this.Btn_free.active = this.bgState == EBGType.free;
            if (v == EBGType.free) {
              this.coin_panel.y = -650;
            } else {
              this.coin_panel.y = -400;
            }
          }
        }, {
          key: "lastNum",
          get: function get() {
            return this._lastNum;
          },
          set: function set(v) {
            this._lastNum = v;
            this.Btn_free.children[0].active = v > 0;
            this.Btn_free.children[1].active = !this.Btn_free.children[0].active;
            if (this.Btn_free.children[0].active) {
              this.Btn_free.children[0].getComponent(Label).string = v + "";
            }
          }
        }, {
          key: "btnContent",
          get: function get() {
            if (!this._btnContent) {
              this._btnContent = find('btnContent', this.betting_panel);
            }
            return this._btnContent;
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
          key: "winPlayOverBn",
          get: function get() {
            return this._winPlayOverBn;
          },
          set: function set(v) {
            this._winPlayOverBn = v;
          }
        }]);
        return songkranSlotCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rollBtn", [_dec2], {
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
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "freeBegin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "freeEnd", [_dec29], {
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

System.register("chunks:///_virtual/songkranSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts', './cSongkran.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, instantiate, Animation, ESHOWTYPE, baseSymbol, songkran;
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
      instantiate = module.instantiate;
      Animation = module.Animation;
    }, function (module) {
      ESHOWTYPE = module.ESHOWTYPE;
      baseSymbol = module.baseSymbol;
    }, function (module) {
      songkran = module.songkran;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b518ae6IWxA36inWpmkeSDQ", "songkranSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var songkranSymbol = exports('songkranSymbol', (_dec = ccclass('songkranSymbol'), _dec2 = property({
        type: Prefab,
        tooltip: "爆炸消失动画"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "选中态"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_baseSymbol) {
        _inheritsLoose(songkranSymbol, _baseSymbol);
        function songkranSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseSymbol.call.apply(_baseSymbol, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boom", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "select", _descriptor2, _assertThisInitialized(_this));
          _this._selectBn = false;
          return _this;
        }
        var _proto = songkranSymbol.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.unuse = function unuse() {
          this.selectBn = false;
          _baseSymbol.prototype.unuse.call(this);
        };
        /**消除行为 */
        _proto.playBoom = function playBoom() {
          var _this2 = this;
          if (this.selectBn == false) return;
          var ani;
          ani = instantiate(this.boom).getComponent(Animation);
          ani.node.parent = this.node;
          ani.on("finished", function () {
            ani.node.destroy();
            _this2.recover();
            songkran.removeCount++;
            if (songkran.removeCount >= songkran.waveData.addCards.length) _this2.scheduleOnce(function () {
              // songkran.reel.doAdd();
            }, 0.1);
          }, this);
          ani.play();
        }

        /**滚动停止调用 播放wild出场动画*/;
        _proto.spawn = function spawn() {
          // if (this.symbolId != ESYMBOLID.wild && this.symbolId != ESYMBOLID.scatter) return;
          this.showType = ESHOWTYPE.ske;
          this.playAni(ESYMBOLANI.spawn, false);
          this.addAni(ESYMBOLANI.idle, true);
          if (this.symbolId == ESYMBOLID.wild) ;
          if (this.symbolId == ESYMBOLID.scatter) ;
        }
        /**播放中奖 */;
        _proto.playWin = function playWin() {
          this.showType = ESHOWTYPE.ske;
          this.playAni(ESYMBOLANI.win, true);
          this.selectBn = true;
        };
        _proto.onClick = function onClick(e) {
          songkran.main.addDetail(this);
        };
        _createClass(songkranSymbol, [{
          key: "selectBn",
          get: function get() {
            return this._selectBn;
          },
          set: function set(v) {
            this._selectBn = v;
            var name = "select";
            var node = this.node.getChildByName(name);
            if (v) {
              if (!node) {
                node = instantiate(this.select);
                node.name = name;
                node.parent = this.node;
                node.setSiblingIndex(0);
              }
            } else {
              if (node) {
                node.destroy();
              }
            }
          }
        }]);
        return songkranSymbol;
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
      })), _class2)) || _class));
      var ESYMBOLID = exports('ESYMBOLID', /*#__PURE__*/function (ESYMBOLID) {
        ESYMBOLID[ESYMBOLID["null"] = 0] = "null";
        ESYMBOLID[ESYMBOLID["nine"] = 1] = "nine";
        ESYMBOLID[ESYMBOLID["ten"] = 2] = "ten";
        ESYMBOLID[ESYMBOLID["J"] = 3] = "J";
        ESYMBOLID[ESYMBOLID["Q"] = 4] = "Q";
        ESYMBOLID[ESYMBOLID["K"] = 5] = "K";
        ESYMBOLID[ESYMBOLID["A"] = 6] = "A";
        ESYMBOLID[ESYMBOLID["ball"] = 7] = "ball";
        ESYMBOLID[ESYMBOLID["eyewear"] = 8] = "eyewear";
        ESYMBOLID[ESYMBOLID["ladle"] = 9] = "ladle";
        ESYMBOLID[ESYMBOLID["horse"] = 10] = "horse";
        ESYMBOLID[ESYMBOLID["girl"] = 11] = "girl";
        ESYMBOLID[ESYMBOLID["man"] = 12] = "man";
        ESYMBOLID[ESYMBOLID["wild"] = 13] = "wild";
        ESYMBOLID[ESYMBOLID["scatter"] = 14] = "scatter";
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

System.register("chunks:///_virtual/songkranWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cSongkran.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Tween, tween, instantiate, Vec3, Component, Button, UITransform, Animation, songkran;
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
      Tween = module.Tween;
      tween = module.tween;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
      Button = module.Button;
      UITransform = module.UITransform;
      Animation = module.Animation;
    }, function (module) {
      songkran = module.songkran;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "11214yPG4BJn6but9ApxPma", "songkranWheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ITEMNUM = 7; //每一轮的角色数量
      var TIME = 0.2; //第一轮摇奖时间
      var W_INTERVAL = 0.1; //wheel滚动时间间隔
      var H_ITEM = 146; //子节点高度

      var FIRSTITEM = [12, 2, 2, 11, 4, 13, 5, 9, 9, 14, 6, 7, 11, 4, 13, 5, 12, 2, 2];
      var songkranWheel = exports('songkranWheel', (_dec = ccclass('songkranWheel'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(songkranWheel, _Component);
        function songkranWheel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "wheelId", _descriptor, _assertThisInitialized(_this));
          /**0停止 1转   */
          _this.status = 0;
          _this._blurBn = false;
          _this.itemConfig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13, 13, 13, 14];
          _this._interactableBn = true;
          return _this;
        }
        var _proto = songkranWheel.prototype;
        _proto.hideGreys = function hideGreys() {
          for (var i = 0; i < this.greys.length; i++) {
            this.greys[i].active = false;
          }
        };
        _proto.onLoad = function onLoad() {
          songkran.wheelList[this.wheelId] = this;
          this.status = 0;
          this.blurBn = false;
        };
        _proto.start = function start() {
          // this.waitLater.active = false;
          this.hideGreys();
          this.initWheel();
        };
        _proto.initWheel = function initWheel() {
          this.addMapItems(this.readMap(FIRSTITEM));
          this.bindItems();
          this.node.y = 0;
        };
        _proto.readMap = function readMap(map) {
          var ids = [].concat(map);
          var sIndex = 0;
          for (var i = 0; i < songkran.LINENUM.length; i++) {
            if (i < this.wheelId) {
              sIndex += songkran.LINENUM[i];
            }
          }
          return ids.splice(sIndex, songkran.LINENUM[this.wheelId]);
        };
        _proto.addMapItems = function addMapItems(ids) {
          for (var i = ids.length - 1; i >= 0; i--) {
            this.addItem(ids[i]);
          }
        }

        /**滚动到结果 */;
        _proto.startRoll = function startRoll(map, time) {
          var _this2 = this;
          if (time === void 0) {
            time = 0;
          }
          this.removeUnShow();
          if (!songkran.slotCtrl.isSpeed) {
            var len = 3 * (this.wheelId + 1);
            for (var i = 0; i < len; i++) {
              this.addItem(this.getRandomId());
            }
            if (time > 0) {
              var _len2 = 20;
              _len2 = _len2 < 0 ? 0 : _len2;
              for (var _i = 0; _i < _len2; _i++) {
                this.addItem(this.getRandomId());
              }
            }
          }
          this.addMapItems(this.readMap(map));
          this.bindItems();
          var tempTime = (TIME + time) / ITEMNUM * this.node.children.length;
          Tween.stopAllByTarget(this.node);
          if (!songkran.slotCtrl.isSpeed) {
            if (time > 0) {
              tween(this.node).to(tempTime, {
                y: -this.node.h + this.showRange
              }, {
                easing: 'quadInOut'
              }).to(0.1, {
                y: -this.node.h + this.showRange - 20
              }).call(function () {
                _this2.blurBn = false;
              }).to(0.1, {
                y: -this.node.h + this.showRange
              }).call(function () {
                _this2.rollCallBack();
                songkran.main.waitBack(tempTime + 0.2, _this2.wheelId, map);
              }).start();
            } else {
              tween(this.node).to(tempTime, {
                y: -this.node.h + this.showRange
              }).to(0.1, {
                y: -this.node.h + this.showRange - 20
              }).call(function () {
                _this2.blurBn = false;
              }).to(0.1, {
                y: -this.node.h + this.showRange
              }).call(function () {
                _this2.rollCallBack();
              }).start();
            }
          } else {
            tween(this.node).to(tempTime, {
              y: -this.node.h + this.showRange
            }).call(function () {
              _this2.blurBn = false;
              _this2.rollCallBack();
            }).start();
          }
        }

        /**循环滚动 */;
        _proto.rollLoop = function rollLoop() {
          var _this3 = this;
          this.status = 1;
          this.completion();
          this.bindItems();
          this.node.y = 0;
          var disTime = songkran.slotCtrl.isSpeed ? 0 : W_INTERVAL * this.wheelId;
          tween(this.node).delay(disTime).to(0.1, {
            y: 20
          }).call(function () {
            _this3.blurBn = true;
          }).to(0.1, {
            y: 0
          }).call(this.loopCb, this).start();
        }

        /**补齐个数 */;
        _proto.completion = function completion() {
          var len = ITEMNUM - this.node.children.length;
          len = len < 0 ? 0 : len;
          for (var i = 0; i < len; i++) {
            this.addItem(this.getRandomId());
          }
        };
        _proto.loopCb = function loopCb() {
          this.removeUnShow();
          this.completion();
          this.bindItems();
          tween(this.node).to(TIME, {
            y: -this.node.h + this.showRange
          }).call(this.loopCb, this).start();
        };
        _proto.removeUnShow = function removeUnShow() {
          var count = 0;
          var countBn = true;
          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var item = this.node.children[i];
            var bn = this.showBn(item);
            if (bn) {
              countBn = false;
            } else {
              item.parent = null;
              if (countBn) {
                count++;
              }
            }
          }
          this.node.y += H_ITEM * count;
        }

        /**滚动完毕回调 */;
        _proto.rollCallBack = function rollCallBack() {
          this.blurBn = false;
          this.status = 0;
          this.removeUnShow();
          this.bindItems();
          songkran.main.rollCallBack();
        };
        _proto.stopImmediately = function stopImmediately() {
          var _this4 = this;
          this.scheduleOnce(function () {
            Tween.stopAllByTarget(_this4.node);
            _this4.node.removeAllChildren();
            _this4.addMapItems(_this4.readMap(songkran.waveData.handCards));
            _this4.bindItems();
            _this4.blurBn = false;
            _this4.node.y = -_this4.node.h + _this4.showRange;
            _this4.rollCallBack();
          }, 0.05);
        };
        _proto.getRandomId = function getRandomId() {
          var randomId = 0;
          while (randomId == 0) {
            randomId = Math.ceil(Math.random() * (this.itemConfig.length - 1));
            randomId = this.itemConfig[randomId];
            randomId = randomId == this.excludeId ? 0 : randomId;
          }
          return randomId;
        };
        _proto.addItemsByArr = function addItemsByArr(arr) {
          var ids = arr[this.wheelId];
          for (var i = ids.length - 1; i >= 0; i--) {
            this.addItem(ids[i]);
            this.items[0].y = this.node.h + H_ITEM / 2;
          }
          return ids.length;
        };
        _proto.removeItemsByArr = function removeItemsByArr(arr) {
          var _this5 = this;
          var temp = null;
          var _loop = function _loop() {
            var item = arr[i];
            var index = _this5.items.indexOf(item);
            if (index != -1) {
              var _clear$getComponent;
              temp = item;
              var clear = instantiate(songkran.main.clear);
              clear.name = "clear";
              clear.parent = item;
              (_clear$getComponent = clear.getComponent(Animation)) == null || _clear$getComponent.play();
              tween(item).delay(0.2).call(function () {
                item.getChildByName("skeleton").active = false;
                item.getChildByName("blur").active = false;
                item.getChildByName("select").active = false;
                item.getChildByName("boom").active = false;
              }).delay(0.8).call(function () {
                item.destroy();
              }).start();
            }
          };
          for (var i = 0; i < arr.length; i++) {
            _loop();
          }
          if (this.wheelId == 1 || this.wheelId == 2 || this.wheelId == 3) {
            if (temp) {
              var clearRow = instantiate(songkran.main.clearRow);
              clearRow.parent = this.node.parent;
              clearRow.y = temp.y - H_ITEM / 2;
              clearRow.getComponent("clearRow").play(this.node.h, function () {
                songkran.main.bg.jump(songkran.waveData.multiples, _this5.wheelId);
              });
            } else {
              this.scheduleOnce(function () {
                songkran.main.bg.jump(songkran.waveData.multiples, _this5.wheelId);
              }, 0.4);
            }
          }
        };
        _proto.drop = function drop(type) {
          if (type === void 0) {
            type = 0;
          }
          if (type == 0) {
            this.addItemsByArr(songkran.main.addItemArr);
            this.node.h = this.items.length * H_ITEM;
          } else {
            this.scheduleOnce(this.dropNext, 1 + 0.2 * this.wheelId);
          }
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var aimY = (this.items.length - i - 1) * H_ITEM + H_ITEM / 2;
            if (item.y != aimY) {
              tween(item).to(0.2, {
                y: aimY - 20
              }).to(0.1, {
                y: aimY
              }).start();
            }
          }
        };
        _proto.showWaitLater = function showWaitLater() {
          var ids = songkran.main.addItemArr[this.wheelId];
          if (ids.length > 0) {
            var waitLater = instantiate(songkran.main.waitLater);
            waitLater.parent = this.node.parent;
            waitLater.y = waitLater.parent.h;
            waitLater.setSiblingIndex(0);
            waitLater.h = H_ITEM * ids.length;
            waitLater.name = "waitLater";
          }
          var lineNum = songkran.LINENUM[this.wheelId];
          for (var i = 0; i < lineNum; i++) {
            this.greys[i].active = i < lineNum - ids.length;
          }
        };
        _proto.hideWaitlater = function hideWaitlater() {
          this.hideGreys();
          var waitLater = this.node.parent.getChildByName("waitLater");
          if (waitLater) waitLater.parent = null;
        };
        _proto.dropNext = function dropNext() {
          var num = this.addItemsByArr(songkran.main.addItemArr);
          this.node.h = this.items.length * H_ITEM;
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var aimY = (this.items.length - i - 1) * H_ITEM + H_ITEM / 2;
            if (item.y != aimY) {
              tween(item).to(0.2, {
                y: aimY - 20
              }).to(0.1, {
                y: aimY
              }).start();
            }
          }
        };
        _proto.addItem = function addItem(id) {
          var item = instantiate(songkran.main.itemPb[id]);
          item.parent = this.node;
          item.setSiblingIndex(0);
          this.addClickEvent(item);
        };
        _proto.bindItems = function bindItems() {
          var len = this.node.children.length;
          for (var i = 0; i < len; i++) {
            var item = this.node.children[i];
            item.x = 0;
            item.y = (len - i - 1) * H_ITEM + H_ITEM / 2;
          }
          this.node.h = len * H_ITEM;
        };
        _proto.showBn = function showBn(item) {
          var bn = false;
          var parent = item.parent;
          var relativePos = new Vec3(item.position.x + parent.position.x, item.position.y + parent.position.y);
          var boundaryD = relativePos.y - item.h / 2;
          var boundaryU = relativePos.y + item.h / 2;
          if (boundaryU < this.showRange + 1 && boundaryD > -1) {
            bn = true;
          }
          return bn;
        };
        _proto.addClickEvent = function addClickEvent(node) {
          var id = Number(node.name);
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
          clickEventHandler.component = "songkranWheel"; // 这个是代码文件名 
          clickEventHandler.handler = "roleClick";
          clickEventHandler.customEventData = id + "";
          var button = node.getComponent(Button);
          button.clickEvents.push(clickEventHandler);
          button.interactable = this.interactableBn;
        };
        _proto.removeClickEvents = function removeClickEvents() {
          for (var i = 0; i < this.items.length; i++) {
            var button = this.items[i].getComponent(Button);
            button.interactable = false;
          }
        };
        _proto.addClickEvents = function addClickEvents() {
          for (var i = 0; i < this.items.length; i++) {
            var button = this.items[i].getComponent(Button);
            button.interactable = true;
          }
        };
        _proto.roleClick = function roleClick(event, customEventData) {
          var newNode = instantiate(songkran.main.detailPb);
          var transForm = event.target.getComponent(UITransform);
          var newVec3 = transForm.convertToWorldSpaceAR(new Vec3(0, 0, 0));
          transForm = songkran.main.getComponent(UITransform);
          var p = transForm.convertToNodeSpaceAR(newVec3);
          newNode.position = p;
          if (this.wheelId <= 2) {
            newNode.x -= H_ITEM / 2;
          } else {
            newNode.x += H_ITEM / 2;
          }
          newNode.getComponent("songkranDetail").init(customEventData, this.wheelId);
          songkran.main.node.addChild(newNode);
          songkran.main.detailMask.active = true;
        };
        _createClass(songkranWheel, [{
          key: "blurBn",
          get: /**设置模糊态 */
          function get() {
            return this._blurBn;
          },
          set: function set(v) {
            this._blurBn = v;
            for (var i = 0; i < this.node.children.length; i++) {
              var item = this.node.children[i];
              var skeleton = item.getChildByName("skeleton");
              var blur = item.getChildByName("blur");
              skeleton.active = !this.blurBn;
              blur.active = this.blurBn;
            }
          }

          /**wheel显示item个数 */
        }, {
          key: "showNum",
          get: function get() {
            return songkran.LINENUM[this.wheelId];
          }
        }, {
          key: "showRange",
          get: function get() {
            return this.showNum * H_ITEM;
          }

          /**半透明蒙版 */
        }, {
          key: "greys",
          get: function get() {
            return this.node.parent.getChildByName("greys").children;
          }
        }, {
          key: "items",
          get: function get() {
            return this.node.children;
          }
        }, {
          key: "excludeId",
          get: function get() {
            if (songkran.bIsFreeGame) {
              return 13;
            }
            return 0;
          }
        }, {
          key: "interactableBn",
          get: function get() {
            return this._interactableBn;
          },
          set: function set(v) {
            this._interactableBn = v;
            if (v) {
              this.addClickEvents();
            } else {
              this.removeClickEvents();
            }
          }
        }]);
        return songkranWheel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "wheelId", [property], {
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

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_songkran', 'chunks:///_virtual/module_slots_songkran'); 
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