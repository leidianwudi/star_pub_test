System.register("chunks:///_virtual/betNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "6d0d04V7BZIh5nfQ9iieJ03", "betNum", undefined);
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

System.register("chunks:///_virtual/betPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts', './Num.ts', './betNum.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, df, Num, betNum;
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
      df = module.df;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      betNum = module.betNum;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "6d5f7ivuQxMhq3b88d0Y8ti", "betPanel", undefined);
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
          df.betPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
          this.numList = df.BETNUM;
          this.betList = df.BET;
          this.line = df.LINES;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(df.exchangeRate, df.money);
          this.lblCurBet.string = Num.exchangeToThousands(df.exchangeRate, df.betSum);
          this.winCoin_lab.string = df.slotCtrl.winCoin_lab.string;
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(df.exchangeRate, this.numList[i]);
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(df.exchangeRate, sumList[_i3]);
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
          df.betNum = this.tempi;
          df.bet = this.tempj;
          df.sumIdx = this.tempindex;
          df.betSum = this.sumList[df.sumIdx];
          this.lblCurBet.string = Num.exchangeToThousands(df.exchangeRate, df.betSum);
          df.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this.onClose();
        };
        _proto.bindBet = function bindBet() {
          this.chooseBet_list3.setCurrentPageIndex(df.sumIdx);
          this.val3 = df.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          df.node.audio.playclickopen();
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
          df.node.audio.playclickclose();
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

System.register("chunks:///_virtual/cDf.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameDef.ts'], function (exports) {
  var _createClass, cclegacy, SubGameDef;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c7881jcZkZCioPCEdzxPQTC", "cDf", undefined);
      var cDf = /*#__PURE__*/function () {
        function cDf() {
          this.BETNUM = [0.03, 0.1, 0.3, 0.9];
          //单注值
          this.LINES = 30;
          //线数
          this.BET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          this.fastRoll = false;
          this.animspine = false;
          this.winstatu = 0;
          this._isNewUser = false;
          this._money = 0;
          this._exchangeRate = 0;
          /**声音开关 0：关 1：开 */
          this._musicControl = null;
          this.node = null;
          this.bet = 0;
          this.betNum = 0;
          this.sumIdx = 0;
          /**累计下注计算 */
          this._betSum = 0.3;
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
          /**规则界面 */
          this.rulePanel = null;
          /**赔付表界面 */
          this.payPanel = null;
          /**余额界面 */
          this.lastmoneyPanel = null;
        }
        _createClass(cDf, [{
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
              this._betSum = Number(localStorage.getItem(SubGameDef.SLOTS_DOUBLE_HAPPY + "betSum"));
            }
            return this._betSum;
          },
          set: function set(v) {
            if (this._betSum != v) {
              localStorage.setItem(SubGameDef.SLOTS_DOUBLE_HAPPY + "betSum", v + "");
            }
            this._betSum = v;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new cDf();
            }
            return this._instance;
          }
        }]);
        return cDf;
      }();
      cDf._instance = null;
      var df = exports('df', cDf.instance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckBox.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Component;
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
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "dc9e5hcegFBFpbh0CwUFw8V", "CheckBox", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CheckBox = exports('CheckBox', (_dec = ccclass('CheckBox'), _dec2 = property(Node), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CheckBox, _Component);
        function CheckBox() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "checkedSprite", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "checked", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CheckBox.prototype;
        _proto.onLoad = function onLoad() {
          // this.refresh(); 
        };
        _proto.onClicked = function onClicked() {
          // this.checked = !this.checked; 
          // this.refresh(); 
        };
        _proto.refresh = function refresh() {
          // var targetSprite = this.target.getComponent(cc.Sprite); 
          // if (this.checked) { 
          // targetSprite.spriteFrame = this.checkedSprite; 
          // } else { 
          // targetSprite.spriteFrame = this.sprite; 
          // } 
        };
        return CheckBox;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "checkedSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "checked", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /**
      //  * 购买正版源码请联系微信:jacksun1983,QQ:54893605
      //  */
      // cc.Class({
      //     extends: cc.Component,
      //     properties: {
      //         // foo: {
      //         //    default: null,
      //         //    url: cc.Texture2D,  // optional, default is typeof default
      //         //    serializable: true, // optional, default is true
      //         //    visible: true,      // optional, default is true
      //         //    displayName: 'Foo', // optional
      //         //    readonly: false,    // optional, default is false
      //         // },
      //         // ...
      //         target: cc.Node,
      //         sprite: cc.SpriteFrame,
      //         checkedSprite: cc.SpriteFrame,
      //         checked: false,
      //     },
      //     // use this for initialization
      //     onLoad: function() {
      //         this.refresh();
      //     },
      //     onClicked: function() {
      //         this.checked = !this.checked;
      //         this.refresh();
      //     },
      //     refresh: function() {
      //         var targetSprite = this.target.getComponent(cc.Sprite);
      //         if (this.checked) {
      //             targetSprite.spriteFrame = this.checkedSprite;
      //         } else {
      //             targetSprite.spriteFrame = this.sprite;
      //         }
      //     }
      //     // called every frame, uncomment this function to activate update callback
      //     // update: function (dt) {
      //     // },
      // });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dfMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts', './Slot.ts', './NetGameServer.ts', './SubGameDef.ts', './RollPbNodePoll.ts', './UserMgr.ts', './SlotShowPanelMgr.ts', './RoomMgr.ts', './Num.ts', './GameUtil.ts', './UIHelp.ts', './Str.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Animation, Label, Button, Sprite, instantiate, Component, sp, tween, Vec3, df, Slot, StopType, EaseType, gameNet, SubGameDef, ObjectPool, UserMgr, showSlotLastMoneyPenel, showSlotBetPanel, showSlotAutoPenel, RoomMgr, Num, GameUtil, UIHelp, UIhelpParam, Str, LanguageData;
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
      Animation = module.Animation;
      Label = module.Label;
      Button = module.Button;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Component = module.Component;
      sp = module.sp;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      df = module.df;
    }, function (module) {
      Slot = module.Slot;
      StopType = module.StopType;
      EaseType = module.EaseType;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      ObjectPool = module.ObjectPool;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      showSlotLastMoneyPenel = module.showSlotLastMoneyPenel;
      showSlotBetPanel = module.showSlotBetPanel;
      showSlotAutoPenel = module.showSlotAutoPenel;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      GameUtil = module.GameUtil;
    }, function (module) {
      UIHelp = module.UIHelp;
      UIhelpParam = module.UIhelpParam;
    }, function (module) {
      Str = module.Str;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56;
      cclegacy._RF.push({}, "9ae5edSfC1ELo9qX0jUwmiY", "dfMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dfMain = exports('dfMain', (_dec = ccclass('dfMain'), _dec2 = property({
        type: Prefab,
        tooltip: "滚轮角色Pb"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "卡片详细信息"
      }), _dec4 = property(Slot), _dec5 = property(Slot), _dec6 = property(Slot), _dec7 = property(Slot), _dec8 = property({
        type: Node,
        tooltip: "详细信息"
      }), _dec9 = property({
        type: Node,
        tooltip: "中奖线特效"
      }), _dec10 = property({
        type: Node,
        tooltip: "中奖线特效"
      }), _dec11 = property({
        type: Node,
        tooltip: "中奖线特效"
      }), _dec12 = property({
        type: Node,
        tooltip: "中奖框特效"
      }), _dec13 = property({
        type: Node,
        tooltip: "中奖框特效"
      }), _dec14 = property({
        type: Node,
        tooltip: "中奖框特效"
      }), _dec15 = property({
        type: Node,
        tooltip: "中奖线标头"
      }), _dec16 = property({
        type: Node,
        tooltip: "中奖线标头"
      }), _dec17 = property({
        type: Node,
        tooltip: "中奖线标头"
      }), _dec18 = property({
        type: Node,
        tooltip: "特殊事件"
      }), _dec19 = property({
        type: Node,
        tooltip: "特殊事件结束"
      }), _dec20 = property({
        type: Node,
        tooltip: "普通背景"
      }), _dec21 = property({
        type: Node,
        tooltip: "赔付线大小"
      }), _dec22 = property({
        type: Node,
        tooltip: "普通模式跑马灯"
      }), _dec23 = property({
        type: Node,
        tooltip: "普通模式跑马灯板块"
      }), _dec24 = property({
        type: Node,
        displayName: '跑马灯win'
      }), _dec25 = property({
        type: Node,
        displayName: '大奖跑马灯wintxt'
      }), _dec26 = property({
        type: Node,
        displayName: '大奖跑马灯板块'
      }), _dec27 = property({
        type: Node,
        displayName: '大奖跑马灯txt'
      }), _dec28 = property({
        type: Node,
        displayName: '剩余次数'
      }), _dec29 = property({
        type: Node,
        displayName: 'detailshow'
      }), _dec30 = property({
        type: Animation,
        tooltip: ""
      }), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Label), _dec39 = property(Label), _dec40 = property({
        type: Node,
        tooltip: "中奖图层遮罩"
      }), _dec41 = property({
        type: Node,
        tooltip: "中奖图层遮罩"
      }), _dec42 = property({
        type: Node,
        tooltip: "中奖图层遮罩"
      }), _dec43 = property({
        type: Node,
        tooltip: "fastspin光效"
      }), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Node), _dec50 = property({
        type: Label,
        displayName: '下注额'
      }), _dec51 = property({
        type: Label,
        displayName: '下注额copy'
      }), _dec52 = property(Node), _dec53 = property(Button), _dec54 = property(Button), _dec55 = property(Node), _dec56 = property(Node), _dec57 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dfMain, _Component);
        function dfMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rolePb", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardDetailPb", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "doubleFortuneSlotControl", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "doubleFortuneSlotControl_2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "doubleFortuneSlotControl_3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "doubleFortuneSlotControl_speacil", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detail", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine_2", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLine_3", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectbbox", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectbbox_2", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectbbox_3", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "payLinetag", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "payLinetag_2", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "payLinetag_3", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_fs_begin", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_fs_end", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normal", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectLineNum", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "info_text", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoboard", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winText", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwinText", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "biginfoboard", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwininfo_text", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lefttxt", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailshow", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeanim", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard_2", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectCard_3", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "result", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "result2", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "result3", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "poplayer", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNum", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winNum_copy", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode2", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskNode3", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windows", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winfake", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windows2", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windows3", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "usermoney", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "usermoney_copy", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betText", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betText_copy", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigwin", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAdd", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSub", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Setting_panel", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftAutoNum", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "AutoNum", _descriptor56, _assertThisInitialized(_this));
          _this.lightnode = [];
          //点亮节点特效数组
          _this.lightnode_2 = [];
          //点亮节点特效数组
          _this.lightnode_3 = [];
          //点亮节点特效数组
          _this.linetag = [];
          //亮线时的小节点
          _this.linetag_2 = [];
          //亮线时的小节点
          _this.linetag_3 = [];
          //亮线时的小节点
          _this.anim_cb = null;
          //动画回调
          _this.anim_cb_2 = null;
          //动画回调
          _this.anim_cb_3 = null;
          //动画回调
          _this.objectPool = new ObjectPool();
          _this.resultsymbols = [];
          _this.resultsymbols_2 = [];
          _this.resultsymbols_3 = [];
          _this.count = 0;
          _this.dhresult = void 0;
          _this.index = 0;
          _this._betScore = 0;
          _this.slotCtrl = null;
          _this.audio = null;
          _this.controler = null;
          _this.bIsFreeGame = false;
          _this.delayClick = false;
          _this._gearValueArr = [];
          _this.detailflag = false;
          _this.fake = false;
          _this.fakecb = false;
          return _this;
        }
        var _proto = dfMain.prototype;
        _proto.onLoad = function onLoad() {
          df.node = this;
          for (var i = 0; i < this.rolePb.length; i++) {
            this.objectPool.register(i, this.rolePb[i]);
          }
          //初始化参数
          this.slotinit(this.doubleFortuneSlotControl);
          this.slotinit(this.doubleFortuneSlotControl_speacil);
          var temp = [];
          for (var _i = 0; _i < this.doubleFortuneSlotControl.column.length; _i++) {
            temp[_i] = [];
            for (var j = 0; j < this.doubleFortuneSlotControl.column[_i].length; j++) {
              temp[_i][j] = this.doubleFortuneSlotControl.column[_i][j].getComponent(Sprite).spriteFrame.name;
            }
          }
          this.resultsymbols = temp.map(function (row) {
            return row.map(function (value) {
              return {
                name: value
              };
            });
          });
          this.slotinit(this.doubleFortuneSlotControl_2);
          this.slotinit(this.doubleFortuneSlotControl_3);
          this.usermoney.getComponent(Label).string = Num.exchangeToThousands(1, UserMgr.inst.coin);
          console.log(UserMgr.inst.coin);
          this._gearValueArr = GameUtil.GetBetRange();
          this.Setting_panel.opacity = 0;
          this.audio = this.node.getComponent('DhAudio'); //音频脚本
          this.controler = this.node.getComponent('DhControl'); //大部分控制和函数所在的脚本
          df.auto = false; //自动旋转状态
          df.autoTimes = 0; //自动旋转次数
          df.fastRoll = false; //快速旋转
          df.status = 0; //游戏状态
          this.controler.playRealResultFirst(this.result, this.resultsymbols); //初始化结果界面，方便点击查看具体的倍率
          this.controler.createLeafs(); //飘樱花动画
          // this.node.on(Node.EventType.TOUCH_END, (e) => {console.log(e)}, this)
        };

        _proto.slotinit = function slotinit(SlotControl) {
          var map = ['h_angpow', "h_angpow_double", 'h_biscuit', 'h_biscuit_double', 'h_bracelet', 'h_bracelet_double', 'h_heel', 'h_heel_double', 'l_a', 'l_a_double', 'l_j', 'l_j_double', 'l_k', 'l_k_double', 'l_q', 'l_q_double', 's_scatter', 's_wild', 's_wild_double']; //老林的初始化步骤
          SlotControl.setup(map); //滚轮初始化
        };

        _proto.fakeRollcb = /*#__PURE__*/function () {
          var _fakeRollcb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //假中奖代码
                  this.fakecb = true; //假中奖标识（目前还没用上）
                  if (!this.dhresult.res.results[0].bigEvents) {
                    _context.next = 13;
                    break;
                  }
                  this.controler.playRealResult(this.dhresult, 0, df.node.result, df.node.resultsymbols, df.node.maskNode);
                  df.node.maskNode.active = false;
                  this.controler.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'win_scatter', true);
                  df.node.audio.mgjump();
                  _context.next = 8;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 1000);
                  });
                case 8:
                  df.node.audio.startbigwin();
                  df.node.playbigwin(); //幸运时刻（8次免费摇奖）
                  df.status = 0;
                  _context.next = 17;
                  break;
                case 13:
                  this.controler.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                  this.light.active = false;
                  df.status = 0;
                  this.audio.playBgm(1);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function fakeRollcb() {
            return _fakeRollcb.apply(this, arguments);
          }
          return fakeRollcb;
        }();
        _proto.startroll = /*#__PURE__*/function () {
          var _startroll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(retSpin) {
            var _this2 = this;
            var i, _i2;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.controler.dataChange(retSpin); //把数据转换成林x的slot框架需要的格式
                  console.log(this.resultsymbols);
                  console.log("retSpin is", retSpin);
                  console.log("中了", retSpin.res.results[0].paylines.length, "根线");
                  if (!this.fake) {
                    _context3.next = 18;
                    break;
                  }
                  //如果假中奖了
                  this.doubleFortuneSlotControl.roll(this.resultsymbols, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _this2.controler.playRealResult(retSpin, 0, df.node.result, df.node.resultsymbols, df.node.maskNode); //回调是显示真正的中奖结果，用于特效展示等
                          df.node.maskNode.active = false;
                          _this2.doubleFortuneSlotControl_speacil.speed = 40;
                          _context2.next = 5;
                          return new Promise(function (resolve) {
                            return setTimeout(resolve, 300);
                          });
                        case 5:
                          _this2.doubleFortuneSlotControl_speacil.speed = 20;
                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  })), function () {});
                  this.scheduleOnce(function () {
                    _this2.doubleFortuneSlotControl.stop(function () {});
                  }, 1);
                  _context3.next = 9;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 2000);
                  });
                case 9:
                  this.light.active = true;
                  this.windows.children[3].active = false;
                  this.controler.playfake();
                  this.audio.playfake();
                  this.winfake.active = true;
                  this.doubleFortuneSlotControl_speacil.roll([this.resultsymbols[3]], function () {
                    return _this2.fakeRollcb;
                  }, function () {});
                  this.scheduleOnce(function () {
                    _this2.doubleFortuneSlotControl_speacil.stop(function () {});
                  }, 3);
                  _context3.next = 20;
                  break;
                case 18:
                  this.doubleFortuneSlotControl.roll(this.resultsymbols, function () {
                    return _this2.controler.RollCallBack(retSpin);
                  }, function () {}); //直接回调
                  this.scheduleOnce(function () {
                    _this2.doubleFortuneSlotControl.stop(function () {});
                  }, 0.1);
                //在下一帧调用停止
                case 20:
                  if (!df.fastRoll) {
                    _context3.next = 31;
                    break;
                  }
                  i = 0;
                case 22:
                  if (!(i < 5)) {
                    _context3.next = 29;
                    break;
                  }
                  _context3.next = 25;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 50);
                  });
                case 25:
                  this.audio.ReelStop();
                case 26:
                  i++;
                  _context3.next = 22;
                  break;
                case 29:
                  _context3.next = 41;
                  break;
                case 31:
                  _context3.next = 33;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 1000);
                  });
                case 33:
                  _i2 = 0;
                case 34:
                  if (!(_i2 < 5)) {
                    _context3.next = 41;
                    break;
                  }
                  _context3.next = 37;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 37:
                  this.audio.ReelStop();
                case 38:
                  _i2++;
                  _context3.next = 34;
                  break;
                case 41:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function startroll(_x) {
            return _startroll.apply(this, arguments);
          }
          return startroll;
        }();
        _proto.sendRoll = function sendRoll() {
          this.winfake.active = false;
          this.windows.children[3].active = true;
          this.controler.banAllBtn();
          this.count = 1; //用于记录第几次大奖
          this.controler.closespeacil();
          this.info_text.active = true; //跑马灯提示信息打开
          this.winText.active = false; //上一轮赢得金钱提示关闭
          this.effectLineNum.active = false; //每条中奖线赢得的钱显示关闭
          this.result.active = false; //把显示结果关闭
          this.windows.active = true; //激活slots滚轮
          this.maskNode.active = false; //关闭中奖后的遮罩
          this.controler.recycleResult(this.result); //回收结果节点进入节点池
          this.controler.closeRoleAnim(this.effectCard); //关闭上一次摇奖特效
          this.controler.closeLineEffect(this.lightnode, this.effectLine); //关闭中将线路特效
          this.controler.closeTag(this.linetag, this.payLinetag); //关闭每条线的标号
          this.controler.closebbox(this.effectbbox); //关闭每个特效格子边框特效
          this.unschedule(this.anim_cb); //结束回调动画
          if (df.fastRoll) {
            this.doubleFortuneSlotControl.stopType = StopType.立即停止;
            this.doubleFortuneSlotControl.speed = 80;
            this.doubleFortuneSlotControl._easingOut = EaseType.Linear;
            this.doubleFortuneSlotControl._easingIn = EaseType.Linear;
          } else {
            this.doubleFortuneSlotControl.stopType = StopType.立即陆续;
            this.doubleFortuneSlotControl.speed = 40;
            this.doubleFortuneSlotControl._easingOut = EaseType.Elastic;
            this.doubleFortuneSlotControl._easingIn = EaseType.Back;
          }
          this.AutoNum.string = df.autoTimes.toString();
          this.doubleFortuneSlotControl.rollVirtually(); //开始虚拟转动（无须等待服务器数据）
          this.sendLottery(); //发送数据请求
        };

        _proto.onCLick = function onCLick(event, args) {
          switch (args) {
            case "roll":
              if (df.status == 0) {
                df.status = 1;
                if (df.auto) {
                  this.stopAuto();
                  df.status = 0;
                } else {
                  this.audio.playroll();
                  this.sendRoll();
                }
              }
              break;
            case "stop":
              break;
            case "startbigwin":
              this.startbigwin();
              break;
            case "showmoney":
              this.showmoney();
              break;
            case "onbet":
              this.onBet();
              break;
            case "help":
              this.showRule();
              break;
            case "help2":
              this.showpayPanel();
              break;
            case "exitGame":
              this.onBtnExit();
              break;
            case "add":
              this.onBetAdd();
              break;
            case "sub":
              this.onBetSub();
              break;
            case "auto":
              this.onAuto();
              break;
            case "exitBigwin":
              this.exitBigWin();
              break;
          }
        };
        _proto.exitBigWin = function exitBigWin() {
          this.audio.bigwinToNormal();
          this.bg_fs_end.active = false;
          this.bigwin.active = false;
          this.normal.active = true;
          this.result.active = true;
          if (df.auto) {
            df.node.startAuto();
          }
        };
        _proto.showRule = function showRule() {
          tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("rule"));
        };
        _proto.showpayPanel = function showpayPanel() {
          tgx.UIMgr.inst.showUI(UIHelp, null, this, new UIhelpParam("payout"));
        };
        _proto.showmoney = function showmoney() {
          showSlotLastMoneyPenel(this.poplayer, UserMgr.inst.coin);
          LanguageData.getLangByID("BXINGAME_51");
        };
        _proto.onBet = function onBet() {
          var _this3 = this;
          var cb = function cb() {
            for (var _len2 = arguments.length, res = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              res[_key2] = arguments[_key2];
            }
            console.log("bet----", res);
            _this3.index = res[2];
            _this3._betScore = res[3];
            _this3.betText.string = res[4];
            localStorage.setItem(SubGameDef.SLOTS_DOUBLE_HAPPY + '_betScore', _this3._betScore.toString());
          };
          showSlotBetPanel(this.poplayer, [0.03, 0.1, 0.3, 0.9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, UserMgr.inst.coin, Number(this.betText.string), cb.bind(this)).then(function (value) {
            value.bindBet(_this3.index);
          });
        };
        _proto.onAuto = function onAuto() {
          var _this4 = this;
          console.log('%c ----自动-----', "color:#2ba914");
          // UIKylinAuto.instance.showPanel();
          var cb = function cb(autoNum) {
            df.autoTimes = autoNum;
            _this4.leftAutoNum.active = true;
            _this4.AutoNum.string = df.autoTimes.toString();
            _this4.controler.banAllBtn();
            _this4.startAuto();
          };
          showSlotAutoPenel(this.poplayer, UserMgr.inst.coin, Number(this.betText.string), cb.bind(this));
        };
        _proto.showWinMoney = function showWinMoney(payline) {
          //展示每条线赢得多少金额，显示位置为该线中奖的最后一个有效节点坐标
          this.effectLineNum.children[0].getComponent(Label).string = payline.payout;
          this.effectLineNum.active = true;
          var _this$controler$getSl = this.controler.getSlotPosition(payline.activePoints[payline.activePoints.length - 1].row, payline.activePoints[payline.activePoints.length - 1].reel),
            posX = _this$controler$getSl.posX,
            posY = _this$controler$getSl.posY;
          this.effectLineNum.setPosition(posX, posY - 150);
        };
        _proto.startAuto = function startAuto() {
          if (UserMgr.inst.coin < this._betScore) {
            //LanguageData.getLangByID('206')
            tgx.UITip.instance.show("金额不足");
            return;
          }
          df.auto = true;
          console.log(df.autoTimes);
          if (df.auto && df.autoTimes > 0) {
            this.scheduleOnce(this.sendRoll, 1.5);
            df.autoTimes--;
          } else {
            this.stopAuto();
          }
        };
        _proto.stopAuto = function stopAuto() {
          this.controler.freeAllBtn();
          this.leftAutoNum.active = false;
          df.auto = false;
          df.autoTimes = 0;
        };
        _proto.onBetSub = function onBetSub() {
          this.audio.playclick();
          this.index = Math.ceil(this.index - 1);
          if (this.index <= 0) {
            this.index = 0;
            this.btnSub.interactable = false;
          }
          this.btnAdd.interactable = true;
          this.betText.string = Num.exchangeToThousands(1, this._gearValueArr[this.index]);
          this._betScore = this._gearValueArr[this.index];
          localStorage.setItem(SubGameDef.SLOTS_DOUBLE_HAPPY + '_betScore', this._betScore.toString());
        };
        _proto.onBetAdd = function onBetAdd() {
          this.audio.playclick();
          this.index = Math.floor(this.index + 1);
          if (this.index >= this._gearValueArr.length - 1) {
            this.index = this._gearValueArr.length - 1;
            this.btnAdd.interactable = false;
          }
          this.btnSub.interactable = true;
          this.betText.string = Num.exchangeToThousands(1, this._gearValueArr[this.index]);
          this._betScore = this._gearValueArr[this.index];
          localStorage.setItem(SubGameDef.SLOTS_DOUBLE_HAPPY + '_betScore', this._betScore.toString());
        };
        _proto.sendLottery = /*#__PURE__*/function () {
          var _sendLottery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return gameNet.playSlots(SubGameDef.SLOTS_DOUBLE_HAPPY, this.betText.string);
                case 2:
                  retSpin = _context4.sent;
                  console.log("------bet", this.betText.string);
                  this.dhresult = retSpin;
                  console.log(UserMgr.inst.coin);
                  this.startroll(retSpin);
                case 7:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function sendLottery() {
            return _sendLottery.apply(this, arguments);
          }
          return sendLottery;
        }();
        _proto.playbigwin = function playbigwin() {
          var _this5 = this;
          this.bg_fs_begin.active = true; //开始播放关窗帘动画
          this.bg_fs_begin.getComponent(Animation).play();
          this.closeanim.on("finished", function () {
            //动画结束后关闭普通场景，打开大奖场景
            _this5.audio.normalToBigwin();
            _this5.normal.active = false;
            _this5.bigwin.active = true;
          });
        };
        _proto.startbigwin = /*#__PURE__*/function () {
          var _startbigwin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this6 = this;
            var begin, i, total, winTarget, sum, Now, target, NowNum, targetNum;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this.bg_fs_begin.active = false; //把窗帘动画关闭
                  this.betText_copy.string = this.betText.string;
                  this.usermoney_copy.getComponent(Label).string = this.usermoney.getComponent(Label).string;
                  begin = this.usermoney_copy.getComponent(Label).string;
                  this.normal.active = false;
                  this.bigwin.active = true;
                  this.lefttxt.getComponent(Label).string = this.dhresult.res.results[this.count].leftFreeCount;
                  _context5.next = 9;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 1000);
                  });
                case 9:
                  if (!(this.count < this.dhresult.res.results.length - 1)) {
                    _context5.next = 52;
                    break;
                  }
                  //用while循环遍历中奖数据，轮播每次结果
                  this.controler.dataChange_2(this.dhresult, this.count); //第二幅滚轮的数据转换
                  this.controler.dataChange_3(this.dhresult, this.count + 1); //第三幅滚轮的数据转换
                  this.lefttxt.getComponent(Label).string = this.dhresult.res.results[this.count].leftFreeCount; //剩余次数
                  this.unschedule(this.anim_cb_2); //关闭上一轮动画
                  this.unschedule(this.anim_cb_3);
                  this.controler.closeRoleAnim(this.effectCard_2); //关闭上一轮特效
                  this.controler.closeRoleAnim(this.effectCard_3);
                  this.windows2.active = true; //打开滚轮可见性
                  this.windows3.active = true;
                  this.maskNode2.active = false; //关闭遮罩
                  this.maskNode3.active = false;
                  this.controler.recycleResult(this.result2); //回收上一轮节点进节点池
                  this.controler.recycleResult(this.result3);
                  this.controler.closebbox(this.effectbbox_2); //关闭上一轮边框光效
                  this.controler.closebbox(this.effectbbox_3);
                  this.controler.closeLineEffect(this.lightnode_2, this.effectLine_2); //关闭上一轮中奖线路
                  this.controler.closeLineEffect(this.lightnode_3, this.effectLine_3);
                  this.controler.closeTag(this.linetag_2, this.payLinetag_2); //关闭线路标签
                  this.controler.closeTag(this.linetag_3, this.payLinetag_3);
                  // 启动动画
                  this.doubleFortuneSlotControl_2.roll(this.resultsymbols_2, this.controler.BigRollCallBack_2.bind(this.controler), function () {});
                  this.doubleFortuneSlotControl_3.roll(this.resultsymbols_3, this.controler.BigRollCallBack_3.bind(this.controler), function () {});
                  // 0.1 秒后停止动画
                  this.scheduleOnce(function () {
                    _this6.doubleFortuneSlotControl_2.stop(function () {});
                    _this6.doubleFortuneSlotControl_3.stop(function () {});
                  }, 0.1);
                  _context5.next = 34;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 1000);
                  });
                case 34:
                  i = 0;
                case 35:
                  if (!(i < 5)) {
                    _context5.next = 42;
                    break;
                  }
                  _context5.next = 38;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 38:
                  this.audio.ReelStop();
                case 39:
                  i++;
                  _context5.next = 35;
                  break;
                case 42:
                  _context5.next = 44;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 300);
                  });
                case 44:
                  if (this.dhresult.res.results[this.count].winning || this.dhresult.res.results[this.count + 1].winning) {
                    this.bigwininfo_text.active = false; //跑马灯播放中奖文本
                    this.bigwinText.active = true;
                    total = "0";
                    total = Str.add2(this.dhresult.res.results[this.count].payout, this.dhresult.res.results[this.count + 1].payout); //累加上下两层的中奖信息
                    this.bigwinText.children[0].getComponent(Label).string = total;
                    winTarget = Num.toThousandsBack(total);
                    this.controler.IncreaseNumber(df.node.winNum_copy.getComponent(Label), 0, winTarget).start();
                    console.log(df.node.usermoney_copy.getComponent(Label).string);
                    sum = total;
                    Now = df.node.usermoney_copy.getComponent(Label).string;
                    target = Str.add2(sum, Now);
                    NowNum = Num.toThousandsBack(Now);
                    targetNum = Num.toThousandsBack(target);
                    this.controler.IncreaseNumber(df.node.usermoney_copy.getComponent(Label), NowNum, targetNum).start();
                    tween(this.biginfoboard).to(0.25, {
                      scale: new Vec3(1.2, 1.2, 1.2)
                    }) // 放大
                    .to(0.25, {
                      scale: new Vec3(1, 1, 1)
                    }) // 缩回原来大小
                    .start();
                  } else {
                    df.node.winNum_copy.string = "0";
                  }
                  _context5.next = 47;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 3200);
                  });
                case 47:
                  this.bigwininfo_text.active = true;
                  this.bigwinText.active = false;
                  this.count += 2;
                  _context5.next = 9;
                  break;
                case 52:
                  this.bg_fs_end.active = true;
                  this.usermoney.getComponent(Label).string = this.usermoney_copy.getComponent(Label).string;
                  this.audio.bigWinEnd();
                  this.unschedule(this.anim_cb_2); //关闭上一轮动画
                  this.unschedule(this.anim_cb_3);
                  this.controler.closeRoleAnim(this.effectCard_2); //关闭上一轮特效
                  this.controler.closeRoleAnim(this.effectCard_3);
                  this.windows2.active = true; //打开滚轮可见性
                  this.windows3.active = true;
                  this.maskNode2.active = false; //关闭遮罩
                  this.maskNode3.active = false;
                  this.controler.recycleResult(this.result2); //回收上一轮节点进节点池
                  this.controler.recycleResult(this.result3);
                  this.controler.closebbox(this.effectbbox_2); //关闭上一轮边框光效
                  this.controler.closebbox(this.effectbbox_3);
                  this.controler.closeLineEffect(this.lightnode_2, this.effectLine_2); //关闭上一轮中奖线路
                  this.controler.closeLineEffect(this.lightnode_3, this.effectLine_3);
                  this.controler.closeTag(this.linetag_2, this.payLinetag_2); //关闭线路标签
                  this.controler.closeTag(this.linetag_3, this.payLinetag_3);
                  this.controler.countTotalWin(begin);
                case 72:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function startbigwin() {
            return _startbigwin.apply(this, arguments);
          }
          return startbigwin;
        }();
        _proto.onBtnExit = /*#__PURE__*/function () {
          var _onBtnExit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ok) {
                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!ok) {
                            _context6.next = 3;
                            break;
                          }
                          _context6.next = 3;
                          return RoomMgr.inst.exitRoom();
                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }, _callee6);
                  })));
                case 1:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          function onBtnExit() {
            return _onBtnExit.apply(this, arguments);
          }
          return onBtnExit;
        }()
        /**
         * 
         * @param args 传入的位置，范围为0 - 14 
         */;

        _proto.showDetail = function showDetail(event, args) {
          if (this.result.children[args].children[0] != null && this.detailflag == false) {
            var _card = instantiate(this.cardDetailPb); //实例化详细赔付
            var index = Number(this.result.children[args].children[0].name); //role索引
            _card.children[3].children[index - 1].active = true;
            this.controler.showDetailNum(index, _card);
            if (index == 19) {
              //幸运符号
              _card.children[4].active = false;
              _card.children[5].active = true;
              _card.children[5].children[0].active = true;
            } else if (index == 9 || index == 18) {
              //百搭符号
              _card.children[4].active = false;
              _card.children[5].active = true;
              _card.children[5].children[1].active = true;
            }
            if (args > 8) {
              //放在左边还是右边
              _card.children[1].active = false;
              _card.children[2].active = true;
              _card.children[3].setPosition(-240, 0, 0);
              _card.children[4].setPosition(-150, 0, 0);
              _card.children[5].setPosition(-150, 0, 0);
            } else {
              _card.children[1].active = true;
              _card.children[2].active = false;
              _card.children[3].setPosition(40, 0, 0);
              _card.children[4].setPosition(120, 0, 0);
            }
            var x = -290 + 145 * Math.floor(args / 3);
            var y = [132, -23, -178][args % 3];
            _card.setPosition(x, y, 0);
            this.detailshow.addChild(_card);
            this.detailflag = true;
          }
        };
        return dfMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rolePb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardDetailPb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "doubleFortuneSlotControl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "doubleFortuneSlotControl_2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "doubleFortuneSlotControl_3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "doubleFortuneSlotControl_speacil", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "detail", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effectLine", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "effectLine_2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "effectLine_3", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "effectbbox", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "effectbbox_2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "effectbbox_3", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "payLinetag", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "payLinetag_2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "payLinetag_3", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bg_fs_begin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "bg_fs_end", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "normal", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "effectLineNum", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "info_text", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "infoboard", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "winText", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bigwinText", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "biginfoboard", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "bigwininfo_text", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "lefttxt", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "detailshow", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "closeanim", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "effectCard", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "effectCard_2", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "effectCard_3", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "result2", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "result3", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "poplayer", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "winNum", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "winNum_copy", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "maskNode2", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "maskNode3", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "windows", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "winfake", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "windows2", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "windows3", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "usermoney", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "usermoney_copy", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "betText", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "betText_copy", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "bigwin", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "btnSub", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "Setting_panel", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "leftAutoNum", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "AutoNum", [_dec57], {
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

System.register("chunks:///_virtual/dfSlotControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts', './Num.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Label, Animation, Sprite, find, tween, Vec3, macro, Button, Color, Component, df, Num, LanguageData;
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
      df = module.df;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "df37cNR+e9De4tlCEJHkfqe", "dfSlotControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var dfSlotCtrl = exports('dfSlotCtrl', (_dec = ccclass('dfSlotCtrl'), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property([SpriteFrame]), _dec25 = property(Node), _dec26 = property([SpriteFrame]), _dec27 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dfSlotCtrl, _Component);
        function dfSlotCtrl() {
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
        var _proto = dfSlotCtrl.prototype;
        _proto.onload = function onload() {
          this.Setting_panel.opacity = 0;
        };
        _proto.start = function start() {
          // this.Btn_start.on(Node.EventType.MOUSE_ENTER, this.btnRollTouchStart, this);
          // this.Btn_start.on(Node.EventType.MOUSE_LEAVE, this.btnRollTouchEnd, this);
          // this.Btn_start.on(Node.EventType.TOUCH_START, this.btnRollClick, this);

          // this.Btn_stopAuto.on(Node.EventType.MOUSE_ENTER, this.btnStopRollTouchStart, this);
          // this.Btn_stopAuto.on(Node.EventType.MOUSE_LEAVE, this.btnStopRollTouchEnd, this);
          // this.Btn_stopAuto.on(Node.EventType.TOUCH_START, this.btnStopRollClick, this);

          // this.autoNum = 0;//自动次数
          // this.isPanelAnim = false;
          // this.isSpeed = false;
          // // this.settingInit_Function();
          // // this.initCarlender();
          // this.init();
        };
        _proto.btnRollTouchStart = function btnRollTouchStart() {
          if (!df.rollEnable) {
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
          if (!df.rollEnable) {
            return;
          }
          df.node.onCLick(e, 'roll');
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
          df.node.stopAuto();
        };
        _proto.init = function init() {
          // (this.musicBtn.getComponent(Sprite) as Sprite).spriteFrame = this.sp_settingControl[tgx.AudioMgr.inst.switch?1:0];
          // this.Setting_panel.opacity = 0;
          // this.tipNode.opacity = 0;
          // this.winCoin_lab.string = Num.exchangeToThousands(df.exchangeRate, 0);
          // this.lblUserCoin.string = Num.exchangeToThousands(df.exchangeRate, df.money);
        };
        _proto.update = function update() {
          // this.initTip();
          // if (this.watchLabel) {
          //     // this.bigWinCoin_lab.string = Num.exchangeToThousands(df.exchangeRate, this.inumObj.inum);
          //     this.watchLabel.string = Num.exchangeToThousands(df.exchangeRate, this.inumObj.inum);
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
          if (!df.betNum) {
            df.sumIdx = 0;
            df.betNum = this.sumList[df.sumIdx];
          } else {
            df.sumIdx = this.sumList.indexOf(df.betNum);
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
          // AudioMgr.inst.musicControl = df.musicControl;
        }

        //相关点击
        ;

        _proto.onCLick = function onCLick(event, args) {
          df.node.onCLick(event, args);
        }

        //关闭自动弹板
        ;

        _proto.onCLick_closeAutoPanel = function onCLick_closeAutoPanel() {
          df.node.audio.playclick();
          // this.Auto_panel.getComponent('autoPanel').hidePanel();
        };
        //打开设置界面
        _proto.onCLickShowSettingPanel = function onCLickShowSettingPanel(event) {
          df.node.audio.playclick();
          if (this.betting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", df.node.node);
          if (footer) {
            footer.active = false;
          }
          this.Btn_start.active = false;
          tween(this.betting_panel).to(0.2, {
            position: new Vec3(0, -450, 0),
            opacity: 0
          }).start();
          tween(this.Setting_panel).to(0.2, {
            position: new Vec3(0, -560, 0),
            opacity: 255
          }).start();
        }

        //关闭设置界面
        ;

        _proto.onCLickHideSettingPanel = function onCLickHideSettingPanel(event) {
          df.node.audio.playclick();
          if (this.Setting_panel.opacity == 0) {
            return;
          }
          var footer = find("ui_footer/ui_footer_a", df.node.node);
          if (footer) {
            footer.active = true;
          }
          this.Btn_start.active = true;
          tween(this.betting_panel).to(0.2, {
            position: new Vec3(0, -623.576, 0),
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
            df.betPanel.hidePanel();
          } else {
            df.betPanel.showPanel();
            df.betPanel.bindBet();
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
          df.node.audio.playclick();
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
          df.sumIdx = this.sumList.indexOf(df.betSum);
          if (df.sumIdx == -1) {
            df.sumIdx = 0;
          }
          this.updateBet(df.sumIdx);
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
          if (df.sumIdx > 0) {
            this.Btn_sub.opacity = 255;
          }
          if (df.sumIdx < this.sumList.length - 1) {
            this.Btn_add.opacity = 255;
          }
          if (df.sumIdx == 0) {
            this.Btn_sub.opacity = 100;
          }
          if (df.sumIdx == this.sumList.length - 1) {
            this.Btn_add.opacity = 100;
          }
          df.betSum = this.sumList[idx];
          this.lblCurBet.string = Num.exchangeToThousands(df.exchangeRate, this.sumList[idx]);
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
          df.node.unschedule(df.node.sendRoll);
          this.bigWinNode.active = true;
          this.bigBn = false;
          this.superBn = false;
          this.megaBn = false;
          this.aimCoin = coin;
          this.addcoin = 0;
          this.addOnce = this.aimCoin / 100;
          this.playOverBn = false;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(df.exchangeRate, this.addcoin);
          this.schedule(this.coinOneChange, 0.05, macro.REPEAT_FOREVER);
        };
        _proto.coinOneChange = function coinOneChange() {
          this.addcoin += this.addOnce;
          if (this.addcoin >= this.aimCoin) {
            this.playBigWin(this.aimCoin);
            this.playCoinOver();
          } else {
            this.playBigWin(this.addcoin);
            this.bigWinCoin_lab.string = Num.exchangeToThousands(df.exchangeRate, this.addcoin);
          }
        };
        _proto.playCoinOver = function playCoinOver() {
          this.unschedule(this.coinOneChange);
          this.playOverBn = true;
          this.bigWinCoin_lab.string = Num.exchangeToThousands(df.exchangeRate, this.aimCoin);
        };
        _proto.playBigWin = function playBigWin(coin) {
          if (coin >= df.betSum * 35 && !this.bigWinNode.children[2].active && this.megaBn == false) {
            this.playAnim_MegaWin();
            this.megaBn = true;
          } else if (coin >= df.betSum * 15 && coin < df.betSum * 35 && !this.bigWinNode.children[1].active && this.superBn == false) {
            this.playAnim_SuperWin();
            this.superBn = true;
          } else if (this.bigBn == false) {
            this.playAnim_BigWin(-1);
            this.bigBn = true;
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
        }

        //设置当前旋转动画
        ;

        _proto.setSpinAnim = function setSpinAnim(type) {
          var _this$Btn_start$getCh;
          //0-默认旋转  1-加速旋转   2-加速置灰旋转   3-置灰停止旋转
          switch (type) {
            case 0:
              // this.Btn_start.getComponent(cc.Button).interactable = true;
              df.rollEnable = true;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              !df.auto && this.setButtonState(true);
              if (df.lotteryRes && df.lotteryRes.winscore == 0) {
                this.changeLabColor(1);
              }
              break;
            case 1:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              df.rollEnable = false;
              this.Btn_start.getChildByName("VFX").getComponent(Animation).play();
              var VFX2Ani = (_this$Btn_start$getCh = this.Btn_start.getChildByName("VFX")) == null ? void 0 : _this$Btn_start$getCh.getComponent(Animation);
              VFX2Ani.play();
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[2];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 10;
              this.winCoin_lab.string = Num.exchangeToThousands(df.exchangeRate, 0);
              this.setButtonState(false);
              this.changeLabColor(0);
              break;
            case 2:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              df.rollEnable = false;
              this.spin_AnimNode.getComponent(Sprite).spriteFrame = this.spin_Sp[0];
              this.spin_AnimNode.getComponent(Animation).getState("xuanzhuan").speed = 1;
              break;
            case 3:
              // this.Btn_start.getComponent(cc.Button).interactable = false;
              df.rollEnable = false;
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
        _createClass(dfSlotCtrl, [{
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
        return dfSlotCtrl;
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

System.register("chunks:///_virtual/DhAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioClip, Component, ModuleDef;
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
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c9d0aDKLZtPm6HcZlKDgaUh", "DhAudio", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DhAudio = exports('DhAudio', (_dec = ccclass('DhAudio'), _dec2 = property([AudioClip]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DhAudio, _Component);
        function DhAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgmAudio", _descriptor, _assertThisInitialized(_this));
          _this.urlArr = ["sound/bgm_mg_loop", "sound/bgm_fs_loop", "sound/bgm_bigwin"];
          _this.url = "audio/bgm_mg";
          _this.bigwinurl = "audio/bgm_bonus";
          _this.roll = "audio/GeneralAudio/spinBtn";
          _this.click = "audio/Click";
          _this.ReelStopNormal = "audio/GeneralAudio/spinReelStopNormal";
          _this.NormalWinBgm = "audio/GeneralAudio/prizeMgSmallwin";
          _this.startbw = "audio/GeneralAudio/mgCurtainTrans";
          _this.cpjump = "audio/GeneralAudio/voxJumpNormal";
          _this.Totalmain = "audio/BonusAudio/bgmTotalMain";
          _this.TotalEnd = "audio/BonusAudio/bgmTotalEnd";
          _this.laughMalevoice = "audio/GeneralAudio/voxLoveMale";
          _this.laughFemalevoice = "audio/GeneralAudio/voxLoveFemale";
          _this.push = "audio/GeneralAudio/voxTeasePush";
          _this.shy = "audio/GeneralAudio/voxTeaseShy";
          _this.mgsymscatter = "audio/GeneralAudio/mgSymScatter";
          _this.bigwmain = "audio/GeneralAudio/bgmBigwinMain";
          _this.bigwend = "audio/GeneralAudio/bgmBigwinEnd";
          _this.bigwendfire = "audio/GeneralAudio/bgmBigwinEndFirework";
          _this.playfakemusic = "audio/GeneralAudio/mgFastspin";
          return _this;
        }
        var _proto = DhAudio.prototype;
        _proto.start = function start() {
          this.playBgm(1);
        };
        _proto.playBgm = function playBgm(index) {
          tgx.AudioMgr.inst.audio.stopAll();
          tgx.AudioMgr.inst.audio.playMusicLoop(this.url, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.stopall = function stopall() {
          tgx.AudioMgr.inst.audio.stopAll();
        };
        _proto.normalToBigwin = function normalToBigwin() {
          tgx.AudioMgr.inst.audio.stopAll();
          tgx.AudioMgr.inst.audio.playMusicLoop(this.bigwinurl, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.bigwinToNormal = function bigwinToNormal() {
          tgx.AudioMgr.inst.audio.stopAll();
          tgx.AudioMgr.inst.audio.playMusicLoop(this.url, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.playclick = function playclick() {
          tgx.AudioMgr.inst.audio.playEffect(this.click, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.bigwinmain = function bigwinmain() {
          tgx.AudioMgr.inst.audio.stopAll();
          tgx.AudioMgr.inst.audio.playEffect(this.bigwmain, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.bigwinend = /*#__PURE__*/function () {
          var _bigwinend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgx.AudioMgr.inst.audio.stopAll();
                  tgx.AudioMgr.inst.audio.playEffect(this.bigwend, ModuleDef.SLOTS_DOUBLE_HAPPY);
                  tgx.AudioMgr.inst.audio.playEffect(this.bigwendfire, ModuleDef.SLOTS_DOUBLE_HAPPY);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function bigwinend() {
            return _bigwinend.apply(this, arguments);
          }
          return bigwinend;
        }();
        _proto.playfake = function playfake() {
          tgx.AudioMgr.inst.audio.stopAll();
          tgx.AudioMgr.inst.audio.playEffect(this.playfakemusic, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.playroll = function playroll() {
          tgx.AudioMgr.inst.audio.playEffect(this.roll, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.ReelStop = function ReelStop() {
          tgx.AudioMgr.inst.audio.playEffect(this.ReelStopNormal, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.laughMale = function laughMale() {
          tgx.AudioMgr.inst.audio.playEffect(this.laughMalevoice, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.voicePush = function voicePush() {
          tgx.AudioMgr.inst.audio.playEffect(this.push, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.voiceShy = function voiceShy() {
          tgx.AudioMgr.inst.audio.playEffect(this.shy, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.mgscatter = function mgscatter() {
          tgx.AudioMgr.inst.audio.playEffect(this.mgsymscatter, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.laughFemale = function laughFemale() {
          tgx.AudioMgr.inst.audio.playEffect(this.laughFemalevoice, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.NormalWin = function NormalWin() {
          tgx.AudioMgr.inst.audio.playEffect(this.NormalWinBgm, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.startbigwin = function startbigwin() {
          tgx.AudioMgr.inst.audio.playEffect(this.startbw, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.mgjump = function mgjump() {
          tgx.AudioMgr.inst.audio.stopAll();
          tgx.AudioMgr.inst.audio.playEffect(this.cpjump, ModuleDef.SLOTS_DOUBLE_HAPPY);
        };
        _proto.bigWinEnd = /*#__PURE__*/function () {
          var _bigWinEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  tgx.AudioMgr.inst.audio.stopAll();
                  tgx.AudioMgr.inst.audio.playEffect(this.Totalmain, ModuleDef.SLOTS_DOUBLE_HAPPY);
                  _context2.next = 4;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 3000);
                  });
                case 4:
                  tgx.AudioMgr.inst.audio.playEffect(this.TotalEnd, ModuleDef.SLOTS_DOUBLE_HAPPY);
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function bigWinEnd() {
            return _bigWinEnd.apply(this, arguments);
          }
          return bigWinEnd;
        }();
        _proto.update = function update(deltaTime) {};
        return DhAudio;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmAudio", [_dec2], {
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

System.register("chunks:///_virtual/DhControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts', './Str.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Prefab, Label, SpriteFrame, Button, sp, instantiate, UIOpacity, easing, tween, AnimationComponent, Sprite, v3, Component, Vec3, macro, df, Str, Num;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      sp = module.sp;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      easing = module.easing;
      tween = module.tween;
      AnimationComponent = module.AnimationComponent;
      Sprite = module.Sprite;
      v3 = module.v3;
      Component = module.Component;
      Vec3 = module.Vec3;
      macro = module.macro;
    }, function (module) {
      df = module.df;
    }, function (module) {
      Str = module.Str;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "daacdcBW+NKNarAJ4FPeVwE", "DhControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DhControl = exports('DhControl', (_dec = ccclass('DhControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property([SpriteFrame]), _dec12 = property([SpriteFrame]), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DhControl, _Component);
        function DhControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.numberTween = null;
          _initializerDefineProperty(_this, "VFX", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win_effect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win_lab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flower", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "heart", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flowercontainer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mg_couple", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalwin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_speed", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_speed2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedBtn", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sound", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnOpacity", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAuto", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Btn_start", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "VFX2", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speacil", _descriptor19, _assertThisInitialized(_this));
          _this.idleAnimations = ['idle', 'idle2', 'idle3'];
          _this.currentIndex = 0;
          _this.winAnimations = ['win', 'win2', 'win3', 'win4'];
          _this.winIndex = 0;
          _this.firsttime = true;
          return _this;
        }
        var _proto = DhControl.prototype;
        _proto.onLoad = function onLoad() {
          this.Btn_start.on(Node.EventType.MOUSE_ENTER, this.btnRollTouchStart, this);
          this.Btn_start.on(Node.EventType.MOUSE_LEAVE, this.btnRollTouchEnd, this);
          this.Btn_start.on(Node.EventType.TOUCH_END, this.btnRollClick, this);
        };
        _proto.btnRollTouchStart = function btnRollTouchStart() {
          this.moveclickAnim();
        };
        _proto.btnRollTouchEnd = function btnRollTouchEnd() {};
        _proto.btnRollClick = function btnRollClick() {
          this.clickAnim();
        };
        _proto.start = function start() {
          this.addListener();
          this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
          df.animspine = true;
        };
        _proto.playCurrentIdle = function playCurrentIdle() {
          var animName = this.idleAnimations[this.currentIndex];
          this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, animName, true);
        };
        _proto.addListener = function addListener() {
          var _this2 = this;
          this.mg_couple.getComponent(sp.Skeleton).setCompleteListener(function (event) {
            switch (event.animation.name) {
              case 'idle':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle2', true);
                df.animspine = false;
                break;
              case 'idle2':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle3', true);
                df.animspine = false;
                break;
              case 'idle3':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
              case 'win':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
              case 'win2':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
              case 'win3':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
              case 'win4':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
              case 'win_scatter':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
              case 'win_countdown_start':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'win_countdown_idle', true);
                df.node.audio.bigwinmain();
                break;
              case 'win_countdown_idle':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'win_countdown_exit', true);
                break;
              case 'win_countdown_exit':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
              case 'fastspin_start':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'fastspin_idle', true);
                df.animspine = false;
                break;
              // case'fastspin_idle':
              //     this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'fastspin_exit', true);
              //     df.animspine = false;
              //     break;
              case 'fastspin_exit':
                _this2.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
                df.animspine = false;
                break;
            }
            // switch (event.animation.name) {
            //     case ESLEEP.collectActivate:
            //         this.state = ESTATE.collectIdle;
            //         break;
            //     case ESLEEP.collectExit:
            //         this.state = ESTATE.sleepIdle;
            //         break;
            //     case ESLEEP.collectToFeature:
            //         this.sleepBn = false;
            //         this.playAwakeAni(EAWAKE.featureActivate, false);
            //         break;
            // }
          });
        };

        _proto.playfake = function playfake() {
          this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'fastspin_start', true);
        };
        _proto.playbbox = function playbbox(payline, effectbbox) {
          for (var i = 0; i < payline.activePoints.length; i++) {
            var index = this.pointToIndex(payline.activePoints[i].row, payline.activePoints[i].reel);
            effectbbox.children[index].active = true;
          }
        };
        _proto.closebbox = function closebbox(effectbbox) {
          for (var i = 0; i < effectbbox.children.length; i++) {
            effectbbox.children[i].active = false;
          }
        };
        _proto.playLineTag = function playLineTag(payline, paylineNum, payLinetag, linetag) {
          var index = parseInt(payline) - 1;
          payline = index.toString();
          if (linetag.length < paylineNum) {
            linetag.push(payline);
          }
          payLinetag.children[0].children[payline].active = true;
        };
        _proto.closeTag = function closeTag(linetag, paylinetag) {
          while (linetag.length > 0) {
            this.closeTagSingle(linetag[0], paylinetag);
            linetag.shift();
          }
        };
        _proto.closeTagSingle = function closeTagSingle(line, paylinetag) {
          paylinetag.children[0].children[line].active = false;
        };
        _proto.closeRoleAnim = function closeRoleAnim(effect_card) {
          for (var i = 0; i < 15; i++) {
            var nodeList = effect_card.children;
            for (var j = 0; j < 19; j++) {
              nodeList[i].children[j].active = false;
            }
          }
        };
        _proto.closespeacil = function closespeacil() {
          this.speacil.children[0].active = false;
          this.speacil.children[1].active = false;
          this.speacil.children[2].active = false;
        };
        _proto.playRoleAnim = function playRoleAnim(playrole, retSpin, effect_card) {
          var lightNodes = effect_card.children;
          var symbolName;
          for (var i = 0; i < playrole.activePoints.length; i++) {
            var index = this.pointToIndex(playrole.activePoints[i].row, playrole.activePoints[i].reel);
            for (var _iterator = _createForOfIteratorHelperLoose(retSpin.res.results[0].rounds[0].symbols), _step; !(_step = _iterator()).done;) {
              var symbol = _step.value;
              if (playrole.activePoints[i].row === symbol.coordinate.row && playrole.activePoints[i].reel === symbol.coordinate.reel) {
                symbolName = symbol.id; // 直接使用当前 symbol 的 id
                break; // 找到后立即退出循环
              }
            }

            if (lightNodes[index]) {
              // 2.3 根据 name 激活对应的子节点
              var node = lightNodes[index];
              var childNode = node.getChildByName(symbolName); // 获取子节点（如 node.h_biscuit）

              if (childNode) {
                childNode.active = true; // 激活子节点
              } else {
                console.warn("\u8282\u70B9 " + index + " \u4E0B\u672A\u627E\u5230\u5B50\u8282\u70B9 " + symbolName);
              }
            } else {
              console.error("\u65E0\u6548\u7684\u7D22\u5F15: " + index);
            }
          }
        };
        _proto.playRoleAnim_2 = function playRoleAnim_2(playrole, retSpin, effect_card) {
          var lightNodes = effect_card.children;
          var symbolName;
          for (var i = 0; i < playrole.activePoints.length; i++) {
            var index = this.pointToIndex(playrole.activePoints[i].row, playrole.activePoints[i].reel);
            for (var _iterator2 = _createForOfIteratorHelperLoose(retSpin.res.results[df.node.count].rounds[0].symbols), _step2; !(_step2 = _iterator2()).done;) {
              var symbol = _step2.value;
              if (playrole.activePoints[i].row === symbol.coordinate.row && playrole.activePoints[i].reel === symbol.coordinate.reel) {
                symbolName = symbol.id; // 直接使用当前 symbol 的 id
                break; // 找到后立即退出循环
              }
            }

            if (lightNodes[index]) {
              // 2.3 根据 name 激活对应的子节点
              var node = lightNodes[index];
              var childNode = node.getChildByName(symbolName); // 获取子节点（如 node.h_biscuit）

              if (childNode) {
                childNode.active = true; // 激活子节点
              } else {
                console.warn("\u8282\u70B9 " + index + " \u4E0B\u672A\u627E\u5230\u5B50\u8282\u70B9 " + symbolName);
              }
            } else {
              console.error("\u65E0\u6548\u7684\u7D22\u5F15: " + index);
            }
          }
        };
        _proto.playRoleAnim_3 = function playRoleAnim_3(playrole, retSpin, effect_card) {
          var lightNodes = effect_card.children;
          var symbolName;
          for (var i = 0; i < playrole.activePoints.length; i++) {
            var index = this.pointToIndex(playrole.activePoints[i].row, playrole.activePoints[i].reel);
            for (var _iterator3 = _createForOfIteratorHelperLoose(retSpin.res.results[df.node.count + 1].rounds[0].symbols), _step3; !(_step3 = _iterator3()).done;) {
              var symbol = _step3.value;
              if (playrole.activePoints[i].row === symbol.coordinate.row && playrole.activePoints[i].reel === symbol.coordinate.reel) {
                symbolName = symbol.id; // 直接使用当前 symbol 的 id
                break; // 找到后立即退出循环
              }
            }

            if (lightNodes[index]) {
              // 2.3 根据 name 激活对应的子节点
              var node = lightNodes[index];
              var childNode = node.getChildByName(symbolName); // 获取子节点（如 node.h_biscuit）

              if (childNode) {
                childNode.active = true; // 激活子节点
              } else {
                console.warn("\u8282\u70B9 " + index + " \u4E0B\u672A\u627E\u5230\u5B50\u8282\u70B9 " + symbolName);
              }
            } else {
              console.error("\u65E0\u6548\u7684\u7D22\u5F15: " + index);
            }
          }
        };
        _proto.playbigwinend = /*#__PURE__*/function () {
          var _playbigwinend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.firsttime = false;
                  df.winstatu = 0;
                  df.node.audio.bigwinend();
                  _context.next = 5;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 3000);
                  });
                case 5:
                  this.maskall.active = false;
                  this.win_effect.active = false;
                  this.firsttime = true;
                // await new Promise(resolve => setTimeout(resolve, 2200));
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playbigwinend() {
            return _playbigwinend.apply(this, arguments);
          }
          return playbigwinend;
        }();
        _proto.soundchange = function soundchange() {
          if (this.sound.children[1].active) {
            this.sound.children[1].active = false;
            this.sound.children[2].active = true;
            df.node.audio.stopall();
          } else {
            this.sound.children[1].active = true;
            this.sound.children[2].active = false;
            df.node.audio.playBgm(1);
          }
        };
        _proto.RollCallBack = /*#__PURE__*/function () {
          var _RollCallBack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(retSpin) {
            var _this3 = this;
            var animIndex, resLenght, targetNum, NowNum, param, animName, _animName, _animName2, _animName3;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  // df.node.usermoney.getComponent(Label).string =  Str.decimal(retSpin.res.coins);
                  df.status = 0;
                  if (df.auto == false) {
                    this.freeAllBtn();
                  }
                  if (!retSpin.res.results[0].bigEvents) {
                    _context2.next = 11;
                    break;
                  }
                  this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'win_scatter', true);
                  df.node.audio.mgjump();
                  _context2.next = 7;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 800);
                  });
                case 7:
                  df.node.audio.startbigwin();
                  df.node.playbigwin(); //幸运时刻（8次免费摇奖）
                  _context2.next = 18;
                  break;
                case 11:
                  this.playRealResult(retSpin, 0, df.node.result, df.node.resultsymbols, df.node.maskNode); //覆盖真正的结果（用于后续特效修改方便）

                  df.node.windows.active = false; //关闭slots滚轮
                  df.node.result.active = true; //显示真正的结果
                  animIndex = 0;
                  resLenght = retSpin.res.results[0].paylines.length; //该参数为普通模式下中奖线路的数量
                  df.node.anim_cb = function () {
                    //回调动画开始前先关闭上一轮回调的动画
                    _this3.closeLineEffect(df.node.lightnode, df.node.effectLine); //关闭中奖线路
                    _this3.closeTag(df.node.linetag, df.node.payLinetag); //关闭每条线的标号
                    _this3.closebbox(df.node.effectbbox); //关闭边框光效
                    for (var i = 0; i < 15; i++) {
                      var nodeList = df.node.effectCard.children;
                      for (var j = 0; j < 19; j++) {
                        nodeList[i].children[j].active = false; //关闭所有节点特效
                      }
                    }

                    if (animIndex == 0) {
                      for (var _i = 0; _i < resLenght; _i++) {
                        //一开始把所有特效全部激活，在跑马灯上显示中奖金额
                        _this3.playLineEffect(retSpin.res.results[0].paylines[_i].id, resLenght, df.node.effectLine, df.node.lightnode);
                        _this3.playRoleAnim(retSpin.res.results[0].paylines[_i], retSpin, df.node.effectCard);
                        _this3.playLineTag(retSpin.res.results[0].paylines[_i].id, resLenght, df.node.payLinetag, df.node.linetag);
                        _this3.playbbox(retSpin.res.results[0].paylines[_i], df.node.effectbbox);
                        df.node.info_text.active = false;
                        df.node.winText.active = true;
                        df.node.winText.children[0].getComponent(Label).string = Str.decimal(retSpin.res.payout);
                        tween(df.node.infoboard).to(0.25, {
                          scale: new Vec3(1.2, 1.2, 1.2)
                        }) // 放大
                        .to(0.25, {
                          scale: new Vec3(1, 1, 1)
                        }) // 缩回原来大小
                        .start();
                      }
                    } else {
                      //轮播每条线路特效
                      _this3.playLineEffect(retSpin.res.results[0].paylines[animIndex - 1].id, resLenght, df.node.effectLine, df.node.lightnode);
                      _this3.playRoleAnim(retSpin.res.results[0].paylines[animIndex - 1], retSpin, df.node.effectCard);
                      _this3.playLineTag(retSpin.res.results[0].paylines[animIndex - 1].id, resLenght, df.node.payLinetag, df.node.linetag);
                      _this3.playbbox(retSpin.res.results[0].paylines[animIndex - 1], df.node.effectbbox);
                      df.node.showWinMoney(retSpin.res.results[0].paylines[animIndex - 1]);
                    }
                    animIndex = animIndex + 1 > resLenght ? 0 : animIndex + 1;
                  };
                  if (retSpin.res.results[0].winning) {
                    if (retSpin.res.payout >= parseFloat(df.node.betText.string) * 15 && df.auto == false) {
                      df.winstatu = 1;
                    }
                    targetNum = Num.toThousandsBack(retSpin.res.coins);
                    NowNum = Num.toThousandsBack(df.node.usermoney.getComponent(Label).string);
                    param = {
                      prefix: '',
                      //前缀
                      timer: 1,
                      //缓动时间，默认3秒
                      place: 2,
                      //小数位， 默认2位
                      easing: {
                        easing: easing.quintOut
                      },
                      tag: 1
                    };
                    this.IncreaseNumber(df.node.usermoney.getComponent(Label), NowNum, targetNum, param).start();
                    df.node.winNum.string = Str.decimal(df.node.dhresult.res.payout);
                    df.node.schedule(df.node.anim_cb, 2, macro.REPEAT_FOREVER, 0.01); //如果中奖了就回调这个动画
                    if (this.winIndex == 0 && df.winstatu == 0) {
                      animName = this.winAnimations[this.winIndex];
                      this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, animName, true);
                      df.node.audio.NormalWin();
                      df.node.audio.laughMale();
                    } else if (this.winIndex == 1 && df.winstatu == 0) {
                      _animName = this.winAnimations[this.winIndex];
                      this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, _animName, true);
                      df.node.audio.NormalWin();
                      df.node.audio.laughFemale();
                    } else if (this.winIndex == 2 && df.winstatu == 0) {
                      _animName2 = this.winAnimations[this.winIndex];
                      this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, _animName2, true);
                      df.node.audio.NormalWin();
                      df.node.audio.voicePush();
                    } else if (this.winIndex == 3 && df.winstatu == 0) {
                      _animName3 = this.winAnimations[this.winIndex];
                      this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, _animName3, true);
                      df.node.audio.NormalWin();
                      df.node.audio.voiceShy();
                    }
                    if (df.winstatu == 1) {
                      this.win_effect.active = true;
                      this.maskall.active = true;
                      this.mg_couple.getComponent(sp.Skeleton).setAnimation(0, 'win_countdown_start', true);
                      this.IncreaseNumber(this.win_lab.getComponent(Label), 0, retSpin.res.payout).call(this.playbigwinend.bind(this)).start();
                    }
                    this.winIndex = this.winIndex + 1 > 3 ? 0 : this.winIndex + 1;
                    df.node.startAuto();
                  } else {
                    df.node.startAuto();
                    df.node.winNum.string = Str.decimal('0');
                  }
                case 18:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function RollCallBack(_x) {
            return _RollCallBack.apply(this, arguments);
          }
          return RollCallBack;
        }();
        _proto.BigRollCallBack_2 = function BigRollCallBack_2() {
          var _this4 = this;
          this.playRealResult(df.node.dhresult, df.node.count, df.node.result2, df.node.resultsymbols_2, df.node.maskNode2);
          df.node.windows2.active = false;
          var resLenght = df.node.dhresult.res.results[df.node.count].paylines.length;
          df.node.anim_cb_2 = function () {
            for (var k = 0; k < resLenght; k++) {
              _this4.playRoleAnim_2(df.node.dhresult.res.results[df.node.count].paylines[k], df.node.dhresult, df.node.effectCard_2);
              _this4.playbbox(df.node.dhresult.res.results[df.node.count].paylines[k], df.node.effectbbox_2);
              _this4.playLineEffect(df.node.dhresult.res.results[df.node.count].paylines[k].id, resLenght, df.node.effectLine_2, df.node.lightnode_2);
              _this4.playLineTag(df.node.dhresult.res.results[df.node.count].paylines[k].id, resLenght, df.node.payLinetag_2, df.node.linetag_2);
            }
          };
          if (df.node.dhresult.res.results[df.node.count].winning) {
            df.node.audio.NormalWin();
            this.schedule(df.node.anim_cb_2, 2, 1, 0.01);
          }
        };
        _proto.BigRollCallBack_3 = function BigRollCallBack_3() {
          var _this5 = this;
          this.playRealResult(df.node.dhresult, df.node.count + 1, df.node.result3, df.node.resultsymbols_3, df.node.maskNode3);
          df.node.windows3.active = false;
          var resLenght = df.node.dhresult.res.results[df.node.count + 1].paylines.length;
          df.node.anim_cb_3 = function () {
            for (var k = 0; k < resLenght; k++) {
              _this5.playRoleAnim_3(df.node.dhresult.res.results[df.node.count + 1].paylines[k], df.node.dhresult, df.node.effectCard_3);
              _this5.playbbox(df.node.dhresult.res.results[df.node.count + 1].paylines[k], df.node.effectbbox_3);
              _this5.playLineEffect(df.node.dhresult.res.results[df.node.count + 1].paylines[k].id, resLenght, df.node.effectLine_3, df.node.lightnode_3);
              _this5.playLineTag(df.node.dhresult.res.results[df.node.count + 1].paylines[k].id, resLenght, df.node.payLinetag_3, df.node.linetag_3);
            }
          };
          if (df.node.dhresult.res.results[df.node.count + 1].winning) {
            df.node.audio.NormalWin();
            this.schedule(df.node.anim_cb_3, 2, 1, 0.01);
          }
        };
        _proto.dataChange = function dataChange(retSpin) {
          // 初始化 5 列，每列填好 3 个空元素（保证索引能直接赋值）
          df.node.resultsymbols = Array.from({
            length: 5
          }, function () {
            return Array.from({
              length: 3
            }, function () {
              return {
                name: ''
              };
            });
          });
          var symbols = retSpin.res.results[0].rounds[0].symbols;
          symbols.forEach(function (symbol) {
            var reelIndex = symbol.coordinate.reel - 1;
            var rowIndex = 3 - symbol.coordinate.row; // 反向映射：row 1 -> 2, row 3 -> 0
            df.node.resultsymbols[reelIndex][rowIndex] = {
              name: symbol.id
            };
          });
        };
        _proto.dataChange_2 = function dataChange_2(retSpin, i) {
          // 初始化 5 列，每列填好 3 个空元素（保证索引能直接赋值）
          df.node.resultsymbols_2 = Array.from({
            length: 5
          }, function () {
            return Array.from({
              length: 3
            }, function () {
              return {
                name: ''
              };
            });
          });
          var symbols = retSpin.res.results[i].rounds[0].symbols;
          symbols.forEach(function (symbol) {
            var reelIndex = symbol.coordinate.reel - 1;
            var rowIndex = 3 - symbol.coordinate.row; // 反向映射：row 1 -> 2, row 3 -> 0
            df.node.resultsymbols_2[reelIndex][rowIndex] = {
              name: symbol.id
            };
          });
        };
        _proto.dataChange_3 = function dataChange_3(retSpin, i) {
          // 初始化 5 列，每列填好 3 个空元素（保证索引能直接赋值）
          df.node.resultsymbols_3 = Array.from({
            length: 5
          }, function () {
            return Array.from({
              length: 3
            }, function () {
              return {
                name: ''
              };
            });
          });
          var symbols = retSpin.res.results[i].rounds[0].symbols;
          symbols.forEach(function (symbol) {
            var reelIndex = symbol.coordinate.reel - 1;
            var rowIndex = 3 - symbol.coordinate.row; // 反向映射：row 1 -> 2, row 3 -> 0
            df.node.resultsymbols_3[reelIndex][rowIndex] = {
              name: symbol.id
            };
          });
        };
        _proto.getSlotPosition = function getSlotPosition(row, reel) {
          //用于计算节点位置
          var baseX = -290;
          var baseY = -178;
          var stepX = 145;
          var stepY = 155;
          var posX = baseX + (reel - 1) * stepX;
          var posY = baseY + (row - 1) * stepY;
          return {
            posX: posX,
            posY: posY
          };
        };
        _proto.pointToIndex = function pointToIndex(row, reel) {
          return (reel - 1) * 3 + (3 - row); // 3 行 N 列布局
        };

        _proto.playRealResultFirst = function playRealResultFirst(result, resultsymbols) {
          var names = [];
          resultsymbols.forEach(function (reel) {
            reel.forEach(function (symbol) {
              names.push(symbol.name);
            });
          });
          // 建立索引（初始映射）
          var symbolIndexMap = {
            'l_j': 0,
            'l_q': 1,
            'l_k': 2,
            'l_a': 3,
            'h_biscuit': 4,
            'h_heel': 5,
            'h_angpow': 6,
            'h_bracelet': 7,
            's_wild': 8,
            'l_j_double': 9,
            'l_q_double': 10,
            'l_k_double': 11,
            'l_a_double': 12,
            'h_biscuit_double': 13,
            'h_heel_double': 14,
            'h_angpow_double': 15,
            'h_bracelet_double': 16,
            's_wild_double': 17,
            's_scatter': 18
          };
          // 输出示例索引
          var symbolIndices = names.map(function (name) {
            var _symbolIndexMap$name;
            return (_symbolIndexMap$name = symbolIndexMap[name]) != null ? _symbolIndexMap$name : -1;
          }); // 未知符号设为 -1
          for (var i = 0; i < symbolIndices.length; i++) {
            var index = symbolIndices[i];
            if (index !== -1) {
              var obj = df.node.objectPool.get(index);
              result.children[i].addChild(obj);
              obj.setPosition(0, 0, 0);
            }
          }
        };
        _proto.choosespecial = function choosespecial(index, temp) {
          if (index == 3 || index == 6 || index == 9) {
            this.speacil.children[temp].children[0].addChild(instantiate(this.heart));
          } else if (index == 4 || index == 7 || index == 10) {
            this.speacil.children[temp].children[1].addChild(instantiate(this.heart));
          } else if (index == 5 || index == 8 || index == 11) {
            this.speacil.children[temp].children[2].addChild(instantiate(this.heart));
          }
        };
        _proto.destoryspecial = function destoryspecial() {};
        _proto.playRealResult = function playRealResult(retSpin, now, result, resultsymbols, maskNode) {
          var names = [];
          resultsymbols.forEach(function (reel) {
            reel.forEach(function (symbol) {
              names.push(symbol.name);
            });
          });
          // 建立索引（初始映射）
          var symbolIndexMap = {
            'l_j': 0,
            'l_q': 1,
            'l_k': 2,
            'l_a': 3,
            'h_biscuit': 4,
            'h_heel': 5,
            'h_angpow': 6,
            'h_bracelet': 7,
            's_wild': 8,
            'l_j_double': 9,
            'l_q_double': 10,
            'l_k_double': 11,
            'l_a_double': 12,
            'h_biscuit_double': 13,
            'h_heel_double': 14,
            'h_angpow_double': 15,
            'h_bracelet_double': 16,
            's_wild_double': 17,
            's_scatter': 18
          };
          // 输出示例索引
          var symbolIndices = names.map(function (name) {
            var _symbolIndexMap$name2;
            return (_symbolIndexMap$name2 = symbolIndexMap[name]) != null ? _symbolIndexMap$name2 : -1;
          }); // 未知符号设为 -1
          for (var i = 0; i < symbolIndices.length; i++) {
            var index = symbolIndices[i];
            if (index == 18 && (i == 3 || i == 4 || i == 5)) {
              var temp = 0;
              this.speacil.children[temp].active = true;
              this.choosespecial(i, temp);
              df.node.effectCard.children[i].children[18].active = true;
              df.node.effectCard.children[i].children[18].getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
              df.node.audio.mgscatter();
            } else if (index == 18 && (i == 6 || i == 7 || i == 8)) {
              var _temp = 1;
              this.speacil.children[_temp].active = true;
              this.choosespecial(i, _temp);
              df.node.effectCard.children[i].children[18].active = true;
              df.node.effectCard.children[i].children[18].getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
              df.node.audio.mgscatter();
            } else if (index == 18 && (i == 9 || i == 10 || i == 11) && df.node.fakecb) {
              var _temp2 = 2;
              this.speacil.children[_temp2].active = true;
              this.choosespecial(i, _temp2);
              df.node.effectCard.children[i].children[18].active = true;
              df.node.effectCard.children[i].children[18].getComponent(sp.Skeleton).setAnimation(0, 'idle', true);
              df.node.audio.mgscatter();
            }
            if (index !== -1) {
              var obj = df.node.objectPool.get(index);
              result.children[i].addChild(obj);
              obj.setPosition(0, 0, 0);
              if (retSpin.res.results[now].winning) {
                obj.getComponent(UIOpacity).opacity = 100; //如果中奖就置灰
                maskNode.active = true; //这里是透明遮罩，可以让画面变暗突出中奖特效
              }
            }
          }
          // if (retSpin.res.results[0].winning) {
          //     const paylines = retSpin.res.results[0].paylines;
          //     // paylines.forEach((payline) => {
          //     //   console.log("Payline ID:", payline.id);
          //     // });
          // }
        };

        _proto.recycleResult = function recycleResult(result) {
          for (var i = 0; i <= 2; i++) {
            this.speacil.children[i].active = false;
          }
          // 建立索引映射表，和 playRealResult 中一致
          var symbolIndexMap = {
            '001': 0,
            '002': 1,
            '003': 2,
            '004': 3,
            '005': 4,
            '006': 5,
            '007': 6,
            '008': 7,
            '009': 8,
            '010': 9,
            '011': 10,
            '012': 11,
            '013': 12,
            '014': 13,
            '015': 14,
            '016': 15,
            '017': 16,
            '018': 17,
            '019': 18
          };
          // 遍历每一列
          for (var _i2 = 0; _i2 < result.children.length; _i2++) {
            var column = result.children[_i2];
            var symbols = column.children.slice(); // 拷贝一下，避免迭代中修改数组
            for (var j = 0; j < symbols.length; j++) {
              var _symbolIndexMap$name3;
              var symbolNode = symbols[j];
              symbolNode.getComponent(UIOpacity).opacity = 255;
              var name = symbolNode.name;
              var index = (_symbolIndexMap$name3 = symbolIndexMap[name]) != null ? _symbolIndexMap$name3 : -1;
              if (index !== -1) {
                df.node.objectPool.put(index, symbolNode); // 放回对象池
              } else {
                console.warn("\u672A\u8BC6\u522B\u7684\u7B26\u53F7\u540D: " + name + ", \u65E0\u6CD5\u56DE\u6536");
                symbolNode.destroy(); // 或者销毁它，防止泄露
              }
            }
          }
        };

        _proto.playLineEffect = function playLineEffect(payline, paylineNum, effectline, lightnode) {
          var index = parseInt(payline) - 1;
          payline = index.toString();
          if (lightnode.length < paylineNum) {
            lightnode.push(payline);
          }
          effectline.children[payline].active = true;
        };
        _proto.closeLineEffect = function closeLineEffect(lightnode, effectline) {
          while (lightnode.length > 0) {
            //如果上次中奖会存储中奖节点进lightnode，此时可以用其关闭中奖线
            effectline.children[lightnode[0]].active = false;
            lightnode.shift();
          }
        };
        _proto.countTotalWin = function countTotalWin(begin) {
          var NowNum = Num.toThousandsBack(begin);
          var targetNum = Num.toThousandsBack(df.node.usermoney_copy.getComponent(Label).string);
          var all = targetNum - NowNum;
          this.IncreaseNumber(this.totalwin, 0, all).start();
        }

        /**
         * 数字增长动画
         * @param startNum 开始值
         * @param endNum 目标值
         * @param textCom 文本组件
         * @param param 
         * 时间默认3秒
         * 小数位默认2位
         */;
        _proto.IncreaseNumber = function IncreaseNumber(textCom, startNum, endNum, param) {
          // this.numberTween && this.numberTween.stop();
          if (!param) {
            param = {
              prefix: '',
              //前缀
              timer: 5,
              //缓动时间，默认3秒
              place: 2,
              //小数位， 默认2位
              easing: {
                easing: easing.quintOut
              },
              tag: 1
            };
          }
          var place = param.place ? param.place : 2;
          var timer = param.timer ? param.timer : 3;
          var prefix = param.prefix ? param.prefix : '';
          var tags = param.tag ? param.tag : 1;
          var pEasing = param.easing ? param.easing : {
            easing: easing.quintOut
          };
          var dis = endNum - startNum;
          if (dis < 0) {
            // console.log("起始值比较小", startNum, '-', endNum);
            return this.ReceduNumber(textCom, startNum, endNum, param);
          }
          var length = dis * Math.pow(10, place);
          var obj = {
            number: 0
          };
          textCom.string = prefix + Num.exchangeToThousands(1, startNum);
          this.numberTween = tween(obj).to(timer, {
            number: Math.round(length)
          }, {
            progress: function progress(start, end, current, ratio) {
              textCom.string = prefix + Num.exchangeToThousands(1, (startNum * Math.pow(10, place) + Math.ceil(start + (end - start) * ratio)) / Math.pow(10, place));
              return (startNum * Math.pow(10, place) + start + (end - start) * ratio) / Math.pow(10, place);
            },
            easing: easing.linear
          }).call(function () {
            textCom.string = prefix + Num.exchangeToThousands(1, endNum);
            param.callback && param.callback();
          }).tag(tags);
          return this.numberTween;
        };
        _proto.endTweenImmediately = function endTweenImmediately() {
          if (this.firsttime) {
            if (this.numberTween) {
              this.numberTween.stop();
              this.win_lab.getComponent(Label).string = '' + Num.exchangeToThousands(1, df.node.dhresult.res.payout);
              df.node.audio.bigwinend();
              this.firsttime = false;
            }
          } else {
            this.maskall.active = false;
            this.win_effect.active = false;
            df.node.audio.playBgm(1);
            this.firsttime = true;
            df.winstatu = 0;
          }
        }

        /**
           * 数字减少动画
           * @param startNum 开始值
           * @param endNum 目标值
           * @param textCom 文本组件
           * @param param 
           * 时间默认2秒
           * 小数位默认2位
           */;
        _proto.ReceduNumber = function ReceduNumber(textCom, startNum, endNum, param) {
          this.numberTween && this.numberTween.stop();
          if (!param) {
            param = {
              prefix: '',
              //前缀
              timer: 2,
              //缓动时间，默认2秒
              place: 2 //小数位， 默认2位
            };
          }

          var place = param.place ? param.place : 2;
          var timer = param.timer ? param.timer : 2;
          var prefix = param.prefix ? param.prefix : '';
          var tag = param.tag ? param.tag : 2;
          var dis = Math.abs(endNum - startNum);
          // if (dis < 0) return console.error('结束值必须大于开始值');
          var length = dis * Math.pow(10, place);
          var obj = {
            number: 0
          };
          textCom.string = prefix + Num.exchangeToThousands(1, startNum);
          this.numberTween = tween(obj).to(timer, {
            number: length
          }, {
            progress: function progress(start, end, current, ratio) {
              textCom.string = prefix + Num.exchangeToThousands(1, (startNum * Math.pow(10, place) - Math.ceil(start + (end - start) * ratio)) / Math.pow(10, place));
              return (startNum * Math.pow(10, place) - start + (end - start) * ratio) / Math.pow(10, place);
            },
            easing: easing.quintOut
          }).call(function () {
            textCom.string = prefix + Num.exchangeToThousands(1, endNum);
            param.callback && param.callback();
          }).tag(tag);
          return this.numberTween;
        };
        _proto.clickAnim = function clickAnim() {
          var anim = this.VFX.getComponent(AnimationComponent);
          anim.play();
        };
        _proto.moveclickAnim = function moveclickAnim() {
          var anim = this.VFX2.getComponent(AnimationComponent);
          anim.play();
        };
        _proto.onClick_speed = function onClick_speed() {
          df.node.audio.playclick();
          if (df.fastRoll) {
            df.fastRoll = false;
            this.speedBtn.getComponent(Sprite).spriteFrame = this.sp_speed[1];
            this.speedBtn.children[0].getComponent("cc.Sprite").spriteFrame = this.sp_speed2[1];
            this.speedBtn.children[1].active = false;
          } else {
            df.fastRoll = true;
            this.speedBtn.getComponent(Sprite).spriteFrame = this.sp_speed[0];
            this.speedBtn.children[0].getComponent("cc.Sprite").spriteFrame = this.sp_speed2[0];
            this.speedBtn.children[1].active = true;
          }
        };
        _proto.banAllBtn = function banAllBtn() {
          df.node.btnAdd.interactable = false;
          df.node.btnSub.interactable = false;
          this.btnSet.interactable = false;
          this.btnAuto.interactable = false;
          this.btnOpacity.getComponent(UIOpacity).opacity = 100;
        };
        _proto.freeAllBtn = function freeAllBtn() {
          df.node.btnAdd.interactable = true;
          df.node.btnSub.interactable = true;
          this.btnSet.interactable = true;
          this.btnAuto.interactable = true;
          this.btnOpacity.getComponent(UIOpacity).opacity = 255;
        };
        _proto.createLeafs = function createLeafs() {
          var _this6 = this;
          //定期生成花瓣
          this.schedule(function () {
            _this6.dropFlower();
          }, 1.2);
        }
        /**
         * 掉落花朵效果：随机生成一朵花，从屏幕上方随机向左或向右飘落
         */;
        _proto.dropFlower = function dropFlower() {
          // 随机生成花朵的初始 x 坐标
          var rx = Math.floor(Math.random() * 401 - 200);
          // 随机生成花朵的初始 y 坐标（范围：720 ~ 820）
          var ry = 770 + Math.floor(Math.random() * 100 - 50);

          // 随机决定飘落方向（true=向右，false=向左）
          var isRight = Math.random() > 0.5;
          // 根据方向设置目标 x 坐标
          var tx = isRight ? 410 : -410; // 向右410，向左-410
          // 随机生成花朵的目标 y 坐标（范围：-300 ~ 300）
          var ty = Math.floor(Math.random() * 600 - 300);

          // 随机生成花朵的缩放比例（5/12 ~ 7/12）
          var rScale = Math.floor(Math.random() * 3 + 5) / 12;
          // 随机生成花朵的初始旋转角度（0° ~ 359°）
          var rRotation = Math.floor(Math.random() * 360);
          // 随机生成花朵的目标旋转角度（初始角度 + 随机增量）
          var targetRotation = rRotation + Math.floor(Math.random() * 360) + 180; // 至少旋转180度

          // 实例化花朵节点
          var newNode = instantiate(this.flower);
          // 设置花朵的初始位置、缩放和旋转
          newNode.position = v3(rx, ry);
          newNode.scale = v3(rScale, rScale);
          newNode.angle = rRotation;

          // 将花朵添加到容器中
          this.flowercontainer.addChild(newNode);

          // 设置花朵的目标位置
          var aimPos = v3(tx, ty);

          // 使用缓动动画让花朵在 2 秒内移动到目标位置并旋转，然后销毁
          tween(newNode).to(3, {
            position: aimPos,
            angle: targetRotation // 同时旋转到目标角度
          }).call(function () {
            newNode.destroy();
          }) // 动画完成后销毁花朵
          .start();
        };
        _proto.showDetailNum = function showDetailNum(index, _card) {
          switch (index) {
            case 1:
            case 2:
            case 10:
            case 11:
              _card.children[4].children[0].children[0].getComponent(Label).string = "5";
              _card.children[4].children[1].children[0].getComponent(Label).string = "8";
              _card.children[4].children[2].children[0].getComponent(Label).string = "15";
              _card.children[4].children[3].children[0].getComponent(Label).string = "300";
              break;
            case 3:
            case 4:
            case 12:
            case 13:
              _card.children[4].children[0].children[0].getComponent(Label).string = "5";
              _card.children[4].children[1].children[0].getComponent(Label).string = "10";
              _card.children[4].children[2].children[0].getComponent(Label).string = "30";
              _card.children[4].children[3].children[0].getComponent(Label).string = "500";
              break;
            case 5:
              _card.children[4].children[0].children[0].getComponent(Label).string = "10";
              _card.children[4].children[1].children[0].getComponent(Label).string = "15";
              _card.children[4].children[2].children[0].getComponent(Label).string = "50";
              _card.children[4].children[3].children[0].getComponent(Label).string = "800";
              break;
            case 6:
              _card.children[4].children[0].children[0].getComponent(Label).string = "12";
              _card.children[4].children[1].children[0].getComponent(Label).string = "20";
              _card.children[4].children[2].children[0].getComponent(Label).string = "60";
              _card.children[4].children[3].children[0].getComponent(Label).string = "1000";
              break;
            case 7:
              _card.children[4].children[0].children[0].getComponent(Label).string = "15";
              _card.children[4].children[1].children[0].getComponent(Label).string = "25";
              _card.children[4].children[2].children[0].getComponent(Label).string = "80";
              _card.children[4].children[3].children[0].getComponent(Label).string = "1200";
              break;
            case 8:
              _card.children[4].children[0].children[0].getComponent(Label).string = "20";
              _card.children[4].children[1].children[0].getComponent(Label).string = "30";
              _card.children[4].children[2].children[0].getComponent(Label).string = "100";
              _card.children[4].children[3].children[0].getComponent(Label).string = "1500";
              break;
            case 9:
            case 18:
              _card.children[4].children[0].children[0].getComponent(Label).string = "30";
              _card.children[4].children[1].children[0].getComponent(Label).string = "50";
              _card.children[4].children[2].children[0].getComponent(Label).string = "300";
              _card.children[4].children[3].children[0].getComponent(Label).string = "3000";
              break;
          }
        };
        _proto.update = function update() {};
        return DhControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "VFX", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskall", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "win_effect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "win_lab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "flower", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "heart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "flowercontainer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "mg_couple", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "totalwin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sp_speed", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sp_speed2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "speedBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnOpacity", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnSet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Btn_start", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "VFX2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "speacil", [_dec20], {
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

System.register("chunks:///_virtual/DhDetail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, df;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      df = module.df;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "73cb33LyetHjYajqqPtI5Xz", "DhDetail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DhDetail = exports('DhDetail', (_dec = ccclass('DhDetail'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DhDetail, _Component);
        function DhDetail() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_mainTs = void 0;
          return _this;
        }
        var _proto = DhDetail.prototype;
        _proto.start = function start() {
          this.m_mainTs = df.node;
        };
        _proto["return"] = function _return() {
          for (var i = 0; i < 15; i++) {
            if (df.node.detailshow.children[0]) {
              df.node.detailshow.children[0].destroy();
              df.node.detailflag = false;
            }
          }
        };
        _proto.update = function update(deltaTime) {};
        return DhDetail;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ImageLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "ed057Bgp8FHlJbGI+ljAN7d", "ImageLoader", undefined);
      var ccclass = _decorator.ccclass;
      var ImageLoader = exports('ImageLoader', (_dec = ccclass('ImageLoader'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ImageLoader, _Component);
        function ImageLoader() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = ImageLoader.prototype;
        _proto.onLoad = function onLoad() {
          // this.setupSpriteFrame(); 
        };
        _proto.setUserID = function setUserID(userid, ttype) {
          // if (!userid) { 
          // return; 
          // } 
          // if (cc.vv.images == null) { 
          // cc.vv.images = {}; 
          // } 
          // var self = this; 
          // if (ttype == 1) { 
          // var yaoqing = 'btmj' + cc.vv.userMgr.yaoqing_key; 
          // var roomid = cc.vv.userMgr.shareRoomId || cc.vv.gameNetMgr.roomId || "000000"; 
          // var url = 'http://mj.yajugame.com/manage1/?/member/user/qrcode_app/'; 
          // if (!yaoqing) { 
          // return 
          // } 
          // url = url + yaoqing + '/' + roomid + '.png'; 
          // loadImage(url, userid, function(err, spriteFrame) { 
          // self._spriteFrame = spriteFrame; 
          // self.setupSpriteFrame(); 
          // }); 
          // } else { 
          // getBaseInfo(userid, function(code, info) { 
          // if (info && info.url) { 
          // loadImage(info.url, userid, function(err, spriteFrame) { 
          // self._spriteFrame = spriteFrame; 
          // self.setupSpriteFrame(); 
          // }); 
          // } 
          // }); 
          // } 
        };
        _proto.setupSpriteFrame = function setupSpriteFrame() {
          // if (this._spriteFrame) { 
          // var spr = this.getComponent(cc.Sprite); 
          // if (spr) { 
          // spr.spriteFrame = this._spriteFrame; 
          // } 
          // } 
        };
        return ImageLoader;
      }(Component)) || _class));

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /**
      //  * 购买正版源码请联系微信:jacksun1983,QQ:54893605
      //  */
      // function loadImage(url, code, callback) {
      //     cc.loader.load(url, function(err, tex) {
      //         var spriteFrame = new cc.SpriteFrame(tex, cc.Rect(0, 0, tex.width, tex.height));
      //         callback(code, spriteFrame);
      //     });
      // };
      // 
      // function getBaseInfo(userid, callback) {
      //     if (cc.vv.baseInfoMap == null) {
      //         cc.vv.baseInfoMap = {};
      //     }
      //     if (cc.vv.baseInfoMap[userid] != null) {
      //         callback(userid, cc.vv.baseInfoMap[userid]);
      //     } else {
      //         cc.vv.http.sendRequest('/base_info', {
      //             userid: userid
      //         }, function(ret) {
      //             var url = null;
      //             if (ret.headimgurl) {
      //                 url = ret.headimgurl;
      //             }
      //             var info = {
      //                 name: ret.name,
      //                 sex: ret.sex,
      //                 url: url
      //             }
      //             cc.vv.baseInfoMap[userid] = info;
      //             callback(userid, info);
      //         }, cc.vv.http.master_url);
      //     }
      // };
      // cc.Class({
      //     extends: cc.Component,
      //     properties: {},
      //     // use this for initialization
      //     onLoad: function() {
      //         this.setupSpriteFrame();
      //     },
      //     setUserID: function(userid, ttype) {
      //         if (!userid) {
      //             return;
      //         }
      //         if (cc.vv.images == null) {
      //             cc.vv.images = {};
      //         }
      //         var self = this;
      //         // 如果指定类型为1表示显示二维码信息
      //         if (ttype == 1) {
      //             var yaoqing = 'btmj' + cc.vv.userMgr.yaoqing_key;
      //             var roomid = cc.vv.userMgr.shareRoomId || cc.vv.gameNetMgr.roomId || "000000";
      //             var url = 'http://mj.yajugame.com/manage1/?/member/user/qrcode_app/';
      //             if (!yaoqing) {
      //                 return
      //             }
      //             url = url + yaoqing + '/' + roomid + '.png';
      //             loadImage(url, userid, function(err, spriteFrame) {
      //                 self._spriteFrame = spriteFrame;
      //                 self.setupSpriteFrame();
      //             });
      //         } else {
      //             getBaseInfo(userid, function(code, info) {
      //                 if (info && info.url) {
      //                     loadImage(info.url, userid, function(err, spriteFrame) {
      //                         self._spriteFrame = spriteFrame;
      //                         self.setupSpriteFrame();
      //                     });
      //                 }
      //             });
      //         }
      //     },
      //     setupSpriteFrame: function() {
      //         if (this._spriteFrame) {
      //             var spr = this.getComponent(cc.Sprite);
      //             if (spr) {
      //                 spr.spriteFrame = this._spriteFrame;
      //             }
      //         }
      //     }
      // });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lampUI2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4796efyqP5Bz59VX0kxj1Ir", "lampUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var lampUI = exports('lampUI', (_dec = ccclass('lampUI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(lampUI, _Component);
        function lampUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.idx = 0;
          _this.hideArr = [];
          return _this;
        }
        var _proto = lampUI.prototype;
        _proto.onLoad = function onLoad() {
          this.idx = 0;
          this.hideArr = [];
        };
        _proto.init = function init() {
          this.unschedule(this.showLine);
          for (var i in this.node.children) {
            this.node.children[i].opacity = 0;
          }
          this.scheduleOnce(this.showLine, 1);
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.setHideMessage = function setHideMessage(arr) {
          this.hideArr = arr;
          this.init();
        };
        _proto.showLine = function showLine() {
          var _this2 = this;
          if (this.hideArr.length >= this.node.children.length) {
            return;
          }
          if (this.idx >= this.node.children.length) {
            this.idx = 0;
          }
          if (this.hideArr.indexOf(this.idx) != -1) {
            this.idx++;
            this.showLine();
            return;
          }
          for (var i in this.node.children) {
            if (i == this.idx + "") {
              var node = this.node.children[i];
              node.opacity = 255;
              var w = node.w;
              if (w < this.node.w - 30) {
                node.x = (this.node.w - w) / 2;
                tween(node).delay(5).call(function () {
                  _this2.idx++;
                  _this2.showLine();
                }).start();
              } else {
                node.x = 30;
                tween(node).delay(3).to(8, {
                  x: -w
                }).call(function () {
                  _this2.idx++;
                  _this2.showLine();
                }).start();
              }
            } else {
              this.node.children[i].opacity = 0;
            }
          }
        };
        return lampUI;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lastmoneyPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, Component, df, Num;
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
      df = module.df;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c952eXheOtCR7stmYTVx6Bv", "lastmoneyPanel", undefined);
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
          df.lastmoneyPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(df.exchangeRate, df.money);
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          df.node.audio.playclick();
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
          df.node.audio.playclick();
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

System.register("chunks:///_virtual/module_slots_double_happy", ['./CheckBox.ts', './ImageLoader.ts', './TempAnimation.ts', './DhAudio.ts', './DhControl.ts', './DhDetail.ts', './RollPbNodePoll.ts', './Slot.ts', './SlotItem.ts', './SlotLayer.ts', './SlotsDhGameHUD.ts', './SlotsDhGameMgr.ts', './SlotsDhLobbyScene.ts', './TweenFun.ts', './betNum.ts', './betPanel.ts', './cDf.ts', './dfMain.ts', './dfSlotControl.ts', './lampUI2.ts', './lastmoneyPanel.ts', './payPanel.ts', './rulePanel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/payPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, df;
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
      df = module.df;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e30ebA+97NCRZJP+k/CHQNW", "payPanel", undefined);
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
          df.payPanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // df.node.audio.playclickopen();
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
          // df.node.audio.playclickclose();
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

System.register("chunks:///_virtual/RollPbNodePoll.ts", ['cc'], function (exports) {
  var cclegacy, instantiate;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }],
    execute: function () {
      cclegacy._RF.push({}, "42c4a023DJMOYau9EnBmrYU", "RollPbNodePoll", undefined);

      /**
       * 对象池类，用于重复使用游戏对象（如图标、特效等），避免频繁创建和销毁，提高性能。
       */
      var ObjectPool = exports('ObjectPool', /*#__PURE__*/function () {
        function ObjectPool() {
          // 存储对象池，每个 index 对应一个 Node 数组（即对应 prefab 的缓存实例）
          this.pool = new Map();
          // 存储 index 与对应 Prefab 的映射关系
          this.prefabMap = new Map();
        }

        /**
         * 注册一个新的 prefab 到对象池中。
         * @param index 用于标识 prefab 的索引（通常是符号的枚举索引）
         * @param prefab 要注册的预制体
         */
        var _proto = ObjectPool.prototype;
        _proto.register = function register(index, prefab) {
          this.prefabMap.set(index, prefab);
          this.pool.set(index, []); // 初始化对应索引的对象池为空数组
        }

        /**
         * 从对象池中获取一个 Node。如果池中没有可用对象，则实例化一个新的。
         * @param index 需要获取对象的索引
         * @returns 一个 Node 实例（可能是复用的，也可能是新建的）
         */;
        _proto.get = function get(index) {
          var list = this.pool.get(index) || []; // 获取当前 index 对应的对象池列表
          if (list.length > 0) {
            var a = list.pop();
            return a;
          } else {
            var prefab = this.prefabMap.get(index); // 获取对应的 prefab
            if (!prefab) {
              throw new Error("Prefab not registered for index " + index);
            }
            return instantiate(prefab); // 没有可用对象时实例化一个新的
          }
        }

        /**
         * 将一个不再使用的 Node 放回对象池中，以便后续复用。
         * @param index 放回的对象所对应的索引
         * @param node 要放回池中的 Node
         */;
        _proto.put = function put(index, node) {
          var _this$pool$get;
          node.removeFromParent(); // 从场景树中移除（避免继续渲染）
          (_this$pool$get = this.pool.get(index)) == null || _this$pool$get.push(node); // 放回对象池对应的数组中
        }

        /**
         * 清空对象池以及所有 prefab 映射。
         */;
        _proto.clear = function clear() {
          this.pool.clear();
          this.prefabMap.clear();
        };
        return ObjectPool;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rulePanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cDf.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, tween, Component, df;
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
      df = module.df;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a920biFxzNPNLUd825zGRbU", "rulePanel", undefined);
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
          df.rulePanel = this;
          this.node.parent.children[0].active = false;
          this.node.active = false;
        };
        _proto.start = function start() {
          this.init();
        };
        _proto.showPanel = function showPanel() {
          var _this2 = this;
          // df.node.audio.playclickopen();
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
          // df.node.audio.playclickclose();
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

System.register("chunks:///_virtual/Slot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotLayer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, SpriteAtlas, Font, SpriteFrame, Material, randomRangeInt, Component, Vec3, SlotLayer;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      SpriteAtlas = module.SpriteAtlas;
      Font = module.Font;
      SpriteFrame = module.SpriteFrame;
      Material = module.Material;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
      Vec3 = module.Vec3;
    }, function (module) {
      SlotLayer = module.SlotLayer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "424ec5qJdhLe7NxcN89ftnL", "Slot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StopType = exports('StopType', /*#__PURE__*/function (StopType) {
        StopType[StopType["\u7ACB\u5373\u505C\u6B62"] = 0] = "\u7ACB\u5373\u505C\u6B62";
        StopType[StopType["\u9646\u7EED\u505C\u6B62"] = 1] = "\u9646\u7EED\u505C\u6B62";
        StopType[StopType["\u7ACB\u5373\u9646\u7EED"] = 2] = "\u7ACB\u5373\u9646\u7EED";
        return StopType;
      }({}));
      var RankType = exports('RankType', /*#__PURE__*/function (RankType) {
        RankType[RankType["\u7AD6\u6392"] = 0] = "\u7AD6\u6392";
        RankType[RankType["\u6A2A\u6392"] = 1] = "\u6A2A\u6392";
        return RankType;
      }({}));
      var EaseType = exports('EaseType', /*#__PURE__*/function (EaseType) {
        EaseType[EaseType["Linear"] = 0] = "Linear";
        EaseType[EaseType["Back"] = 1] = "Back";
        EaseType[EaseType["Bounce"] = 2] = "Bounce";
        EaseType[EaseType["Circ"] = 3] = "Circ";
        EaseType[EaseType["Cubic"] = 4] = "Cubic";
        EaseType[EaseType["Elastic"] = 5] = "Elastic";
        EaseType[EaseType["Expo"] = 6] = "Expo";
        EaseType[EaseType["Quad"] = 7] = "Quad";
        EaseType[EaseType["Quart"] = 8] = "Quart";
        EaseType[EaseType["Quint"] = 9] = "Quint";
        EaseType[EaseType["Sine"] = 10] = "Sine";
        return EaseType;
      }({}));
      Enum(StopType);
      Enum(EaseType);
      Enum(RankType);
      var Slot = exports('Slot', (_dec = ccclass('Slot'), _dec2 = property({
        type: [SpriteAtlas],
        displayName: "图片库"
      }), _dec3 = property({
        displayName: "自动高度"
      }), _dec4 = property({
        type: StopType,
        displayName: "停止类型"
      }), _dec5 = property({
        displayName: "间隔时间",
        visible: function visible() {
          return this.stopType == StopType.陆续停止 || this.stopType == StopType.立即陆续;
        }
      }), _dec6 = property({
        displayName: "速度"
      }), _dec7 = property({
        type: EaseType,
        displayName: "缓入类型"
      }), _dec8 = property({
        type: EaseType,
        displayName: "缓出类型"
      }), _dec9 = property({
        displayName: "文本位置"
      }), _dec10 = property({
        type: Font,
        displayName: "字体"
      }), _dec11 = property({
        displayName: "字体大小"
      }), _dec12 = property({
        displayName: "运动模糊"
      }), _dec13 = property({
        tooltip: '是否使用背景'
      }), _dec14 = property({
        type: SpriteFrame,
        displayName: "背景图片",
        visible: function visible() {
          return this.isUseBg;
        }
      }), _dec15 = property({
        type: RankType
      }), _dec16 = property({
        type: Material,
        visible: function visible() {
          return this.isBlur;
        }
      }), _dec17 = property({
        displayName: "运行",
        group: {
          id: "1",
          name: "渲染面板"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Slot, _Component);
        function Slot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "libs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoHeight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopType", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interval", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_speed", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_easingIn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_easingOut", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontVec", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "font", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "size", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isBlur", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isUseBg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgFrame", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rank", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "material", _descriptor15, _assertThisInitialized(_this));
          _this._layers = [];
          _this._elementIds = [];
          return _this;
        }
        var _proto = Slot.prototype;
        //roll点
        _proto.roll = function roll(arr, callback, callbackColumn) {
          var _this2 = this;
          var now = 0;
          this._layers.forEach(function (v, i) {
            var interval = i * (_this2.stopType == StopType.立即停止 || _this2.stopType == StopType.立即陆续 ? 0 : _this2.interval);
            _this2.scheduleOnce(function () {
              v.roll(arr[i], function () {
                now++;
                if (callbackColumn) callbackColumn(i);
                if (now == _this2._layers.length) {
                  callback && callback();
                }
              });
            }, interval);
          });
        };
        _proto.showAllLayer = function showAllLayer() {
          for (var i = 0; i < this.columnFlat.length; i++) {
            this.columnFlat[i].active = true;
          }
        }
        //虚拟roll，按钮点击后，无视网络马上开始
        ;

        _proto.rollVirtually = function rollVirtually(txtSkins, callback) {
          var _this3 = this;
          this._layers.forEach(function (v, i) {
            //顺序延时开始
            var interval = i * (_this3.stopType == StopType.立即停止 ? 0 : _this3.interval);
            _this3.scheduleOnce(function () {
              v.rollVirtually(txtSkins);
              callback && callback(i);
            }, interval);
          });
        }
        //停止转动
        ;

        _proto.stop = function stop(callback) {
          if (this.stopType == StopType.立即停止) {
            this._layers.forEach(function (v, i) {
              v.stop();
            });
          } else {
            // this._layers.forEach((v, i) => {
            //     console.log(this.speed%i)
            //     this.scheduleOnce(() => {
            //         v.stop();
            //     },i*this.interval);
            // });
            this.stepStop(0);
          }
          if (callback) callback();
        }

        //逐渐停止转动
        ;

        _proto.stopSlow = function stopSlow() {}
        //图库切换
        ;

        _proto.toggle = function toggle(num, arr) {
          this._layers.forEach(function (v) {
            v.txtSkins = arr;
            v.libCount = num;
            // console.log(arr,',,,,,,,,,,,,,,,')
          });
        };

        _proto.stepStop = function stepStop(i) {
          var _this4 = this;
          this.scheduleOnce(function () {
            // 调用当前索引对应的滚动层的 stop 方法，并传入一个回调函数
            if (!_this4._layers[i].node.activeInHierarchy) {
              if (i + 1 == _this4._layers.length) return;
              _this4.scheduleOnce(function () {
                _this4.stepStop(i + 1);
              }, _this4.interval);
            } else {
              _this4._layers[i].stop(function () {
                if (i + 1 == _this4._layers.length) return;
                _this4.scheduleOnce(function () {
                  _this4.stepStop(i + 1);
                }, _this4.interval);
              });
            }
          }, this.interval);
        }
        //获取点位,二维格式
        ;
        //设置预制wheel,libCount:第几套图库
        _proto.setWheels = function setWheels(wheels, libCount) {
          this._layers.forEach(function (v, i) {
            v.setWheel(wheels[i], libCount);
          });
        }

        /**获取随机元素
         * @param column 每列数量
        */;
        _proto.getRandomElementIds = function getRandomElementIds(column) {
          var rollInfo = [];
          column = column || [4, 4, 4];
          // const column = [4, 4, 4];
          var elementIds = [].concat(this._elementIds);
          for (var i = 0; i < 3; i++) {
            rollInfo.push([]);
            var randomElement = [];
            for (var k = 0; k < 2; k++) {
              var idIndex = randomRangeInt(0, elementIds.length);
              randomElement.push(elementIds[idIndex]);
              elementIds.splice(idIndex, 1);
            }
            for (var j = 0; j < column[i]; j++) {
              var ran = randomRangeInt(0, 2);
              var elementId = randomElement[ran];
              var cardScore = 0;
              rollInfo[i].push({
                name: elementId.toString(),
                text: cardScore.toString()
              });
            }
          }
          return rollInfo;
        };
        _proto.setup = /*#__PURE__*/function () {
          var _setup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(arr) {
            var i, some, layer;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._elementIds = arr;
                  for (i = 0; i < this.node.children.length; i++) {
                    console.log(this.node.children.length);
                    console.log(i);
                    some = this.node.children[i];
                    layer = some.getComponent(SlotLayer);
                    layer.index = i;
                    layer.rank = this.rank;
                    layer.easingIn = EaseType[this.easingIn];
                    layer.easingOut = EaseType[this.easingOut];
                    layer.isUseBg = this.isUseBg;
                    layer.bgFrame = this.bgFrame;
                    layer.material = this.material;
                    layer.font = this.font;
                    layer.size = this.size;
                    layer.fontVec = this.fontVec;
                    layer.lib = this.libs;
                    layer.speed = this.speed;
                    this._layers.push(layer);
                    layer.autoHeight = this.autoHeight;
                    layer.setup(arr);
                  }
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setup(_x) {
            return _setup.apply(this, arguments);
          }
          return setup;
        }();
        _createClass(Slot, [{
          key: "speed",
          get: function get() {
            return this._speed;
          },
          set: function set(v) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.layers), _step; !(_step = _iterator()).done;) {
              var layer = _step.value;
              layer.speed = v;
            }
            this._speed = v;
          }
        }, {
          key: "easingIn",
          get: function get() {
            return this._easingIn;
          },
          set: function set(v) {
            this._easingIn = v;
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.layers), _step2; !(_step2 = _iterator2()).done;) {
              var layer = _step2.value;
              layer.easingIn = EaseType[this.easingIn];
            }
          }
        }, {
          key: "easingOut",
          get: function get() {
            return this._easingOut;
          },
          set: function set(v) {
            this._easingOut = v;
            for (var _iterator3 = _createForOfIteratorHelperLoose(this.layers), _step3; !(_step3 = _iterator3()).done;) {
              var layer = _step3.value;
              layer.easingOut = EaseType[this.easingOut];
            }
          }
        }, {
          key: "go",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.setup(["101", "102", "103"]);
          }
        }, {
          key: "layers",
          get: function get() {
            return this._layers;
          }
        }, {
          key: "column",
          get: function get() {
            var res = [];
            this._layers.forEach(function (v) {
              res.push(v.column);
            });
            return res;
          }
          //获取点位，平铺格式
        }, {
          key: "columnFlat",
          get: function get() {
            var res = [];
            this._layers.forEach(function (v) {
              res.push.apply(res, v.column);
            });
            return res;
          }
        }]);
        return Slot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "libs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stopType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return StopType.立即停止;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_easingIn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EaseType.Back;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "easingIn", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "easingIn"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_easingOut", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EaseType.Back;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "easingOut", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "easingOut"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fontVec", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "font", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "isBlur", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "isUseBg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bgFrame", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "rank", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RankType.竖排;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "go", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "go"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Node, Sprite, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "43697hoN7BM17kKY/vzZtaE", "SlotItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotItem = exports('SlotItem', (_dec = ccclass('SlotItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotItem, _Component);
        function SlotItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._st = void 0;
          _this._bg = void 0;
          //当前slot中第几个元素
          _this.column = void 0;
          //当前第几个layer
          _this.layer = void 0;
          return _this;
        }
        var _proto = SlotItem.prototype;
        _proto.setSharedMaterial = function setSharedMaterial(v, i) {
          this._st.setSharedMaterial(v, i);
        };
        _proto.start = function start() {
          var _this2 = this;
          this.node.on(Node.EventType.TOUCH_END, function () {
            var info = {
              layer: _this2.layer,
              column: _this2.column,
              sprite: _this2._st
            };
            _this2.node.emit("click", info);
            console.log(info);
          });
        };
        _createClass(SlotItem, [{
          key: "spriteFrame",
          get: function get() {
            return this._st.spriteFrame;
          },
          set: function set(v) {
            if (!this._st) this._st = this.node.addComponent(Sprite);
            this._st.spriteFrame = v;
          }
        }, {
          key: "bgSpriteFrame",
          get: function get() {
            return this._bg.spriteFrame;
          },
          set: function set(v) {
            if (!this._bg) {
              this._bg = this.node.addComponent(Sprite);
              this._bg.name = "bg";
              this._bg.node.setSiblingIndex(0);
            }
            this._bg.spriteFrame = v;
          }
        }, {
          key: "sharedMaterial",
          get: function get() {
            return this._st.sharedMaterial;
          }
        }, {
          key: "material",
          get: function get() {
            return this._st.material;
          },
          set: function set(v) {
            this._st.material = v;
          }
        }]);
        return SlotItem;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TweenFun.ts', './Slot.ts', './SlotItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteAtlas, Node, v3, Mask, UITransform, Label, tween, easing, Vec3, Component, TweenFun, RankType, SlotItem;
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
      SpriteAtlas = module.SpriteAtlas;
      Node = module.Node;
      v3 = module.v3;
      Mask = module.Mask;
      UITransform = module.UITransform;
      Label = module.Label;
      tween = module.tween;
      easing = module.easing;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      TweenFun = module.TweenFun;
    }, function (module) {
      RankType = module.RankType;
    }, function (module) {
      SlotItem = module.SlotItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "57d89W42PRGg5xUe1Wey+Jj", "SlotLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotLayer = exports('SlotLayer', (_dec = ccclass('SlotLayer'), _dec2 = property({
        displayName: "宽度"
      }), _dec3 = property({
        displayName: "高度"
      }), _dec4 = property({
        displayName: "间隔"
      }), _dec5 = property({
        displayName: "显示数量"
      }), _dec6 = property({
        type: [SpriteAtlas],
        displayName: "图片库",
        visible: false
      }), _dec7 = property({
        displayName: "运行",
        group: {
          id: "1",
          name: "渲染面板"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotLayer, _Component);
        function SlotLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "width", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "height", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "space", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "count", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lib", _descriptor5, _assertThisInitialized(_this));
          _this.rank = RankType.竖排;
          _this._wheels = [];
          _this._wheelCopy = [];
          _this.isUseBg = false;
          _this.bgFrame = null;
          _this.material = void 0;
          _this.font = void 0;
          _this.size = void 0;
          _this.fontVec = void 0;
          _this.libCount = 0;
          _this.autoHeight = true;
          _this.speed = 20;
          _this._txtSkins = void 0;
          _this._normalMaterial = void 0;
          _this._isMove = false;
          _this._isStop = false;
          _this._isSlow = false;
          _this._slowInfo = {
            pos: 0
          };
          _this._isReset = false;
          _this._isVirtually = false;
          _this._childs = [];
          _this._tolHeight = 0;
          _this._tolY = 0;
          _this._time = 0;
          _this._h = void 0;
          _this._moves = [];
          _this._resets = [];
          _this._blurs = [];
          _this._points = [];
          _this._txts = [];
          _this._juli = 0;
          _this._over = 0;
          _this._rolls = void 0;
          _this._callback = void 0;
          _this._stopCall = void 0;
          _this._lin = void 0;
          _this._inStr = void 0;
          _this._outStr = void 0;
          _this._easingIn = TweenFun.Quad.easeIn;
          _this._easingOut = "backOut";
          _this.index = void 0;
          return _this;
        }
        var _proto = SlotLayer.prototype;
        _proto.setWheel = function setWheel(v, libCount) {
          this._wheels[libCount] = v;
          this.copyWheel();
        };
        _proto.copyWheel = function copyWheel() {
          this._wheelCopy = JSON.parse(JSON.stringify(this._wheels));
        };
        _proto.setup = function setup(arr) {
          if (!arr) {
            console.error("没有传入初始数组");
            return;
          }
          this._lin = arr;
          this.node.removeAllChildren();
          this._childs = [];
          if (this.lib == null) return;
          var count = this.count + 1; //展示的数量
          var height = 0;
          var isShu = this.rank == RankType.竖排;
          var target = isShu ? this.height : this.width;
          this._h = target / 2 + this.space;
          for (var i = 0; i < count; i++) {
            var stf = this.getRndSftByArr(arr);
            var node = new Node();
            // const l=node.addComponent(Label);
            // l.string=i.toString();
            node.layer = this.node.layer;
            node.name = "item";
            var st = node.addComponent(SlotItem);
            st.column = i;
            st.layer = this.index;
            st.spriteFrame = stf;
            this.node.addChild(node);
            if (this.isUseBg) {
              st.bgSpriteFrame = this.bgFrame;
            }
            var y = isShu ? -(i * this._h + target / 2) : i * this._h + target / 2;
            height += this._h;
            var pos = isShu ? v3(0, y, 0) : v3(y, -this.height / 2, 0);
            node.setPosition(pos);
            this._childs.push(st);
            this._points[i] = pos;
            this._moves[i] = true;
            this._normalMaterial = st.sharedMaterial;
            var txt = this.getTxt();
            txt.useSystemFont = false;
            txt.font = this.font;
            txt.fontSize = this.size;
            txt.node.layer = node.layer;
            txt.node.active = false;
            node.addChild(txt.node);
            this._txts[i] = txt;
          }
          this.getComponent(Mask) || this.addComponent(Mask);
          var ui = this.getComponent(UITransform);
          ui.anchorX = isShu ? 0.5 : 0;
          if (this.autoHeight) {
            if (isShu) {
              ui.width = this.width;
              ui.height = height - this._h;
            } else {
              ui.width = height - this._h;
              ui.height = this.height;
            }
          }
          ui.anchorY = 1;
          this._tolHeight = isShu ? ui.height : ui.width;
          this._tolY = isShu ? -(this._tolHeight + target / 2) : this._tolHeight + target / 2;
        };
        _proto.getTxt = function getTxt() {
          var node = new Node();
          var txt = node.addComponent(Label);
          txt.string = "0";
          node.position = this.fontVec;
          return txt;
        }
        //开始转动，传入roll数组
        ;

        _proto.roll = function roll(arr, callback) {
          if (this._isMove && !this._isVirtually) return;
          this._rolls = arr;
          if (!this._isVirtually) this.init();
          this._isVirtually = false;
          this._callback = callback;
        };
        _proto.onDisable = function onDisable() {
          this._callback && this._callback();
        }
        //虚拟转盘，传入slot名字集合和积分集合
        ;

        _proto.rollVirtually = function rollVirtually(txtSkins) {
          this._txtSkins = txtSkins;
          if (this._isMove) return;
          this._isVirtually = true;
          this.init();
        }
        //停止转动
        ;

        _proto.stop = function stop(stopCall) {
          this._isStop = true;
          this._stopCall = stopCall;
        }
        //逐渐停止转动
        ;

        _proto.stopSlow = function stopSlow(stopCall) {
          var _this2 = this;
          this._time = 0;
          this._juli = this.speed;
          this._isSlow = true;
          this._stopCall = stopCall;
          this._isMove = true;
          this._slowInfo.pos = 0;
          tween(this._slowInfo).to(2, {
            pos: this._childs.length * 2
          }, {
            easing: easing.circOut
          }).call(function () {
            _this2._isSlow = false;
            _this2._isMove = false;
            _this2._callback();
          }).start();
        }
        //获取当前点位列
        ;

        _proto.init = function init() {
          this._juli = 0;
          this._over = 0;
          this._isMove = true;
          this._isStop = false;
          this._isSlow = false;
          this._isReset = false;
          this._time = 0;
          this.childInit();
          // this._moves.forEach(v=>v=true);
        };

        _proto.childInit = function childInit() {
          var isShu = this.rank == RankType.竖排;
          var target = isShu ? this.height : this.width;
          for (var i = 0; i < this._moves.length; i++) {
            this._moves[i] = true;
            this._resets[i] = false;
            this._blurs[i] = false;
            var y = isShu ? -(i * this._h + target / 2) : i * this._h + target / 2;
            var pos = v3(isShu ? 0 : y, isShu ? y : 0, 0);
            this._childs[i].node.active = true;
            this._childs[i].node.setPosition(pos);
          }
        };
        _proto.update = function update() {
          if (!this._isMove) return;
          this._time += 1;
          for (var i = 0; i < this._childs.length; i++) {
            var isShu = this.rank == RankType.竖排;
            var one = this._childs[i];
            if (this._isSlow) {
              var index = (this._slowInfo.pos + i) % this._childs.length - 1;
              var y = -(index * this._h + this.height / 2);
              one.node.setPosition(v3(0, y, 0));
            } else {
              this.updateFast(one, i);
            }
            // 判断子元素是否超出了边界，竖排时判断 y 坐标，横排时判断 x 坐标
            var ty = isShu ? one.node.position.y <= this._tolY : one.node.position.x >= this._tolY;
            // 若子元素超出了边界
            if (ty) {
              var ly = Math.abs(this._tolY - (isShu ? one.node.position.y : one.node.position.x)); // 计算子元素超出边界的距离
              var j = isShu ? this.space - ly : -this.space; //根据排列方式和超出边界的距离，计算子元素重新定位的偏移量
              var rpos = v3(isShu ? 0 : j, isShu ? j : 0, 0); // 根据排列方式和偏移量，计算子元素重新定位的位置
              one.node.setPosition(rpos); // 将子元素节点的位置设置为重新定位后的位置

              if (this._isStop) {
                if (i == this.count - 1) {
                  //最下面那个
                  this._isReset = true;
                  this._resets[this._resets.length - 1] = true;
                  if (this._stopCall) this._stopCall();
                }
              }
              if (this._isReset) {
                this._resets[i] = true;
                one.node.position.add(v3(0, -this._juli, 0));
              }
              var isRe = this._isReset && i < this.count;
              if (isRe) {
                one.spriteFrame = this.lib[this.libCount].getSpriteFrame(this._rolls[i] ? this._rolls[i].name.toString() : "1102");
              } else {
                if (!this._isStop) one.spriteFrame = this.getRndSft();
              }
              var txt = isRe ? this._rolls[i].text : this.getRndTxt();
              this.setTxt(i, txt);
            }
          }
        };
        _proto.updateFast = function updateFast(one, i) {
          var _this3 = this;
          var isShu = this.rank == RankType.竖排;
          if (this._inStr == "Linear") {
            this._juli = this.speed;
          } else {
            this._juli = this._easingIn(this._time, 0, this.speed, 1, 1.2) * 0.2;
          }
          if (this._juli >= this.speed) {
            this._juli = this.speed;
          }
          if (this._moves[i]) {
            if (this.material) {
              if (this._juli > 20 && !this._blurs[i]) {
                this._blurs[i] = true;
                one.setSharedMaterial(this.material, 0);
              }
            }
            // this._isStop = true;
            one.node.setPosition(v3(isShu ? 0 : one.node.position.x + this._juli, isShu ? one.node.position.y - this._juli : -this.height / 2, 0));
            if (this._resets[i]) {
              var cha = Vec3.distance(this._points[i], one.node.position);
              if (cha <= this._juli * 2 && this._moves[i]) {
                one.setSharedMaterial(this._normalMaterial, 0);
                this._moves[i] = false;
                // one.node.setPosition(one.node["pos"]);
                tween(one.node).to(this._outStr == "Linear" ? 1 / 100 : this.speed / 130, {
                  position: this._points[i]
                }, {
                  easing: this._outStr == "Back" ? TweenFun.Back.easeOut : this._easingOut
                }).call(function () {
                  _this3.rollOver();
                }).start();
              }
            }
          }
        };
        _proto.rollOver = function rollOver() {
          this._over++;
          if (this._over == this.count + 1) {
            this._isMove = false;
            this._childs[this._childs.length - 1].node.active = false;
            this._callback();
          }
        };
        _proto.getRndTxt = function getRndTxt() {
          var rect = this._txtSkins;
          if (!rect) return '';
          return rect[Math.floor(Math.random() * rect.length)].text;
        };
        _proto.setTxt = function setTxt(i, txt) {
          var _this$_txtSkins,
            _this4 = this;
          var index = (_this$_txtSkins = this._txtSkins) == null ? void 0 : _this$_txtSkins.findIndex(function (v) {
            return v.name == _this4._childs[i].spriteFrame.name;
          });
          this._txts[i].node.active = index > -1;
          if (index > -1) {
            this._txts[i].string = txt;
          }
        };
        _proto.getRndSft = function getRndSft() {
          if (this._wheelCopy[this.libCount]) {
            if (this._wheelCopy[this.libCount].length == 0) {
              this.copyWheel();
            }
            return this.lib[this.libCount].getSpriteFrame(this._wheelCopy[this.libCount].shift().toString());
          } else {
            var list = this.lib[this.libCount].getSpriteFrames();
            // // 过滤掉名称为 "slot_symbol" 的精灵帧
            // const filteredList = list.filter(frame => frame.name!== "slot_symbol");
            // if (filteredList.length === 0) {
            //     // 如果过滤后列表为空，输出警告信息并根据实际情况处理，这里简单返回 null
            //     console.warn('过滤后精灵帧列表为空，可能图集中只有 "slot_symbol" 精灵帧');
            //     return null;
            // }
            // // 从过滤后的列表中随机选择一个精灵帧
            // const st = filteredList[Math.floor(Math.random() * filteredList.length)];
            // return st;
            // 过滤掉名称为 "slot_symbol" 的精灵帧
            var filteredList = list.filter(function (frame) {
              return frame.name !== "slot_symbol";
            });
            if (filteredList.length === 0) {
              // 如果过滤后列表为空，输出警告信息并根据实际情况处理，这里简单返回 null
              console.warn('过滤后精灵帧列表为空，可能图集中只有 "slot_symbol" 精灵帧');
              return null;
            }
            // 从过滤后的列表中随机选择一个精灵帧
            var st = filteredList[Math.floor(Math.random() * filteredList.length)];
            return st;
          }
          // const list = this.lib[this.libCount].getSpriteFrames();
          // const st = list[Math.floor(Math.random() * list.length)];
          // return st;
        };

        _proto.getRndSftByArr = function getRndSftByArr(arr) {
          var st = arr[Math.floor(Math.random() * arr.length)];
          return this.lib[this.libCount].getSpriteFrame(st);
        };
        _createClass(SlotLayer, [{
          key: "go",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.setup(this._lin);
          }
        }, {
          key: "txtSkins",
          set: function set(v) {
            this._txtSkins = v;
          }
        }, {
          key: "easingOut",
          set: function set(v) {
            this._outStr = v;
            this._easingOut = v == "Linear" ? "linear" : v.toLocaleLowerCase() + "Out";
          }
        }, {
          key: "easingIn",
          set: function set(v) {
            this._inStr = v;
            this._easingIn = v == "Linear" ? TweenFun.Linear : TweenFun[v].easeIn;
          }
        }, {
          key: "column",
          get: function get() {
            var res = [];
            for (var i = 0; i < this._childs.length - 1; i++) {
              res.push(this._childs[i].node);
            }
            return res;
          }
        }]);
        return SlotLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "space", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lib", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "go", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "go"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsDhGameHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './RoomMgr.ts', './LanguageData.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, UserMgr, SceneDef, RoomMgr, LanguageData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5a799lLQhFFvpNj7uE/Zoba", "SlotsDhGameHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsDhGameHUD = exports('SlotsDhGameHUD', (_dec = ccclass('SlotsDhGameHUD'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsDhGameHUD, _Component);
        function SlotsDhGameHUD() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SlotsDhGameHUD.prototype;
        _proto.start = function start() {
          if (!UserMgr.inst.uid) {
            tgx.SceneUtil.loadScene(SceneDef.START);
            return;
          }
          tgx.UIMgr.inst.closeAll();

          // if (RoomMgr.inst.isOnline) {
          //     tgx.UIMgr.inst.showUI(UIChat, null, null, gameNet);
          // }
        };

        _proto.update = function update(deltaTime) {};
        _proto.onBtnExit = /*#__PURE__*/function () {
          var _onBtnExit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //this.node.getParent().getChildByName('Machine').getComponent(AudioSource).stop();
                  tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!ok) {
                            _context.next = 3;
                            break;
                          }
                          _context.next = 3;
                          return RoomMgr.inst.exitRoom();
                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function onBtnExit() {
            return _onBtnExit.apply(this, arguments);
          }
          return onBtnExit;
        }();
        return SlotsDhGameHUD;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsDhGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './RoomMgr.ts', './ModuleDef.ts', './ResourceMgr.ts', './Logger.ts'], function (exports) {
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
      cclegacy._RF.push({}, "f5fe6U6fqtPz7fla2JOiQ3S", "SlotsDhGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsDhGameMgr = exports('SlotsDhGameMgr', (_dec = ccclass('SlotsDhGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(SlotsDhGameMgr, _GameMgr);
        function SlotsDhGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this.totalNum = 2;
          _this.nowIndex = 0;
          _this._porcessFun = void 0;
          _this.modName = ModuleDef.SLOTS_DOUBLE_HAPPY;
          _this.mainName = "dfmain";
          _this._gameType = SubGameDef.SLOTS_DOUBLE_HAPPY;
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          _this._gameScene = {
            name: 'game_slots_double_happy',
            bundle: ModuleDef.SLOTS_DOUBLE_HAPPY
          };
          _this.initNetMsgHandlers();
          return _this;
        }
        var _proto = SlotsDhGameMgr.prototype;
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
        _createClass(SlotsDhGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SlotsDhGameMgr();
            }
            return this._inst;
          }
        }]);
        return SlotsDhGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(SlotsDhGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsDhLobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './SceneDef.ts', './UIAnnouncement.ts', './SlotsDhGameMgr.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, UserMgr, SceneDef, UIAnnouncement, SlotsDhGameMgr, SubGameMgr, SubGameDef;
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
      SlotsDhGameMgr = module.SlotsDhGameMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a60f6NRJXVIMZ/rC0u3EG+T", "SlotsDhLobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotsDhLobbyScene = exports('SlotsDhLobbyScene', (_dec = ccclass('SlotsDhLobbyScene'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotsDhLobbyScene, _Component);
        function SlotsDhLobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPlacer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotsDhLobbyScene.prototype;
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
          SlotsDhGameMgr.inst.initSoloMode();
          SubGameMgr.inst.CreateRoom(SubGameDef.SLOTS_DOUBLE_HAPPY, true);
        };
        return SlotsDhLobbyScene;
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

System.register("chunks:///_virtual/TempAnimation.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // /**
      cclegacy._RF.push({}, "fe652tHEodEM6GZnsMzaFef", "TempAnimation", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TweenFun.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d1541XyGNdHd7xXsgazaNMD", "TweenFun", undefined);
      /*
       * TweenFun.js
       * t: current time（当前时间）
       * b: beginning value（初始值）
       * c: change in value（变化量）
       * d: duration（持续时间）
      */
      var TweenFun = exports('TweenFun', {
        Linear: function Linear(t, b, c, d) {
          return c * t / d + b;
        },
        Quad: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * (--t * (t - 2) - 1) + b;
          }
        },
        Cubic: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
          }
        },
        Quart: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
          }
        },
        Quint: {
          easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
          }
        },
        Sine: {
          easeIn: function easeIn(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
          }
        },
        Expo: {
          easeIn: function easeIn(t, b, c, d) {
            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
        },
        Circ: {
          easeIn: function easeIn(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
          }
        },
        Elastic: {
          easeIn: function easeIn(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
              s = p / 4;
              a = c;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
          },
          easeOut: function easeOut(x) {
            var c4 = 2 * Math.PI / 3;
            return x == 0 ? 0 : x == 1 ? 1 : Math.pow(3, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
          },
          easeOut2: function easeOut2(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
          },
          easeInOut: function easeInOut(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
          }
        },
        Back: {
          easeIn: function easeIn(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          },
          easeOut2: function easeOut2(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          },
          easeOut: function easeOut(time1) {
            var overshoot = 1.00158;
            time1 = time1 - 1;
            return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1;
          },
          easeInOut: function easeInOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
          }
        },
        Backcopy: {
          easeIn: function easeIn(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          },
          easeOut: function easeOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          },
          easeInOut: function easeInOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
          }
        },
        Bounce: {
          easeIn: function easeIn(t, b, c, d) {
            return c - TweenFun.Bounce.easeOut(d - t, 0, c, d) + b;
          },
          easeOut: function easeOut(t, b, c, d) {
            if ((t /= d) < 1 / 2.75) {
              return c * (7.5625 * t * t) + b;
            } else if (t < 2 / 2.75) {
              return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
            } else if (t < 2.5 / 2.75) {
              return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
            } else {
              return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
            }
          },
          easeInOut: function easeInOut(t, b, c, d) {
            if (t < d / 2) {
              return TweenFun.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
              return TweenFun.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
          }
        },
        Strong: {
          easeOut: function easeOut(t, b, c, d) {
            //减减速曲线
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_slots_double_happy', 'chunks:///_virtual/module_slots_double_happy'); 
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