System.register("chunks:///_virtual/AnnouncementMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UIOpacity, UITransform, Vec3, tween, Component;
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
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "90c66yd7ppDk54x+tLHtmmx", "AnnouncementMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AnnouncementMgr = exports('AnnouncementMgr', (_dec = ccclass('AnnouncementMgr'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AnnouncementMgr, _Component);
        function AnnouncementMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "announcementPos", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AnnouncementMgr.prototype;
        _proto.start = function start() {
          this.Loop();
        };
        _proto.Loop = function Loop() {
          var _this2 = this;
          var uiOpacity = this.content.getComponent(UIOpacity) || this.content.addComponent(UIOpacity);
          uiOpacity.opacity = 0;
          var contentBox = this.content.getComponent(UITransform).getBoundingBox();
          var anPos = this.announcementPos.getComponent(UITransform).getBoundingBox();
          this.content.position = new Vec3(anPos.x + anPos.width, 0, 0);
          tween(uiOpacity).to(1, {
            opacity: 255
          }) // 0.5 秒淡入
          .start();
          tween(this.content).to(3, {
            position: new Vec3(anPos.x - contentBox.width, 0, 0)
          }).call(function () {
            // 移动结束后开始淡出
            tween(uiOpacity).to(0.5, {
              opacity: 0
            }) // 0.5 秒淡出
            .call(function () {
              // 淡出后可以再次执行 Loop
              _this2.Loop();
            }).start();
          }).start();
        };
        _proto.update = function update(deltaTime) {};
        return AnnouncementMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "announcementPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppStart.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, game, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f1ed8klVUtAi6vbZC2CCwXN", "AppStart", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AppStart = exports('AppStart', (_dec = ccclass('AppStart'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AppStart, _Component);
        function AppStart() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = AppStart.prototype;
        _proto.start = function start() {
          game.frameRate = 28 + Math.floor(Math.random() * 30);
        };
        return AppStart;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/base.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "25f94VnjF5HebyW+rwMMVNX", "base", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/baseReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseSymbol.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, instantiate, Component, baseSymbol;
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
      Component = module.Component;
    }, function (module) {
      baseSymbol = module.baseSymbol;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "eff805r5P1MgJQ3ymh4w5kp", "baseReel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var baseReel = exports('baseReel', (_dec = ccclass('baseReel'), _dec2 = property({
        type: Prefab,
        tooltip: "symbol预制体"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(baseReel, _Component);
        function baseReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "symbolPb", _descriptor, _assertThisInitialized(_this));
          /**滚轴排布数据 */
          _this._reelDates = [];
          /**滚轴排布数据读取数组起始位置，可用于循环滚动接结果 */
          _this._arrIndex = void 0;
          _this.radomIds = [];
          //随机的符号id
          _this.excludeId = [];
          _this.count = 0;
          _this.MAXSYMBOL = 500;
          _this._poolId = 0;
          /**速度 */
          _this.v = 20;
          /**回弹动画
            * startBn：是否为开始的回弹否则为结束
            */
          _this.reboundDis = 20;
          //回弹距离
          _this.reboundT = 0.2;
          return _this;
        }
        var _proto = baseReel.prototype;
        /**立即停止 */
        _proto.stopImmediately = function stopImmediately(arr, callBack) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          this.unscheduleAllCallbacks();
          for (var i = 0; i < this.reelDates.length; i++) {
            var r = this.reelDates[i];
            r["switch"] = false;
            var symbols = r.symbols;
            //移除旧symbol
            for (var j = symbols.length - 1; j >= 0; j--) {
              symbols[j].recover();
              symbols.splice(j, 1);
            }
          }
          this.bindResult(arr);
          callBack();
        }

        /**滚轴位置 对应 */;
        _proto.oneReelPos = function oneReelPos(r) {
          return r.headPos;
        };
        _proto.oneReelSize = function oneReelSize(r) {
          return r.size * r.num;
        };
        /**单个滚轮结果 */
        _proto.reelArr = function reelArr(arr, rIndex) {
          var temp = [].concat(arr);
          return temp.splice(this.arrIndex[rIndex], this.reelDates[rIndex].num);
        };
        _proto.bindResult = function bindResult(arr, callBack, func) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          if (func === void 0) {
            func = function func() {};
          }
          for (var i = 0; i < this.reelDates.length; i++) {
            var r = this.reelDates[i];
            var num = r.num;
            for (var j = 0; j < num; j++) {
              var index = this.arrIndex[i] + j;
              var id = arr[index];
              var symbol = this.getSymbol(r);
              symbol.aimBn = true;
              symbol.bind(id, r, this.node, true);
              symbol.doReachAimCallBack = callBack;
              func(symbol, index);
            }
          }
        }

        /**处理单个滚轴 */;
        _proto.bindResultOne = function bindResultOne(r, arr, callBack) {
          if (callBack === void 0) {
            callBack = function callBack() {};
          }
          var num = r.num;
          var symbols = [];
          for (var j = 0; j < num; j++) {
            var id = arr[this.arrIndex[r.index] + j];
            var symbol = this.getSymbol(r);
            symbols.push(symbol);
            symbol.aimBn = true;
            symbol.bind(id, r, this.node, true);
            if (j == 0) symbol.doReachAimCallBack = callBack;
          }
          return symbols;
        }

        /**控制滚轴状态 */;
        _proto.update = function update(dt) {
          for (var i = 0; i < this.reelDates.length; i++) {
            if (this.reelDates[i]["switch"]) {
              this.removeUnuse(this.reelDates[i].symbols);
            }
            this.updateReel(this.reelDates[i]);
            this.doMove(this.reelDates[i]);
          }
        }

        /**移出所有无用symbol */;
        _proto.removeUnuseAll = function removeUnuseAll() {
          for (var i = 0; i < this.reelDates.length; i++) {
            this.removeUnuse(this.reelDates[i].symbols);
          }
        }
        /** 剔除回收的symbol*/;
        _proto.removeUnuse = function removeUnuse(symbols) {
          var temp = [];
          for (var i = symbols.length - 1; i >= 0; i--) {
            var symbol = symbols[i];
            if (!symbol.node.parent) {
              symbols.splice(i, 1);
            } else {
              if (temp.indexOf(symbol.poolId) == -1) {
                temp.push(symbol.poolId);
              } else {
                symbols.splice(i, 1);
              }
            }
          }
        }

        /**保持可见范围symbol是满的 */;
        _proto.updateReel = function updateReel(d) {
          if (d["switch"]) {
            this.addS(d);
            this.addE(d);
          }
        }

        /**头添加 */;
        _proto.addS = function addS(d) {
          var dir = d.vector > 0 ? 1 : -1;
          var symbols = d.symbols;
          var type = d.type;
          var symbol = symbols[0];
          if (!symbol) {
            this.unshiftSymbol(d);
            return;
          }
          if (type == ETYPE.H) {
            if (dir == 1) {
              if (symbol.node.x - symbol.fitW / 2 > d.headPos.x) {
                this.unshiftSymbol(d);
                this.addS(d);
              }
            } else {
              if (symbol.node.x + symbol.fitW / 2 < d.headPos.x) {
                this.unshiftSymbol(d);
                this.addS(d);
              }
            }
          } else {
            if (dir == 1) {
              if (symbol.node.y - symbol.fitH / 2 > d.headPos.y) {
                this.unshiftSymbol(d);
                this.addS(d);
              }
            } else {
              if (symbol.node.y + symbol.fitH / 2 < d.headPos.y) {
                this.unshiftSymbol(d);
                this.addS(d);
              }
            }
          }
        };
        _proto.unshiftSymbol = function unshiftSymbol(d, id, setPosBn) {
          if (id === void 0) {
            id = null;
          }
          if (setPosBn === void 0) {
            setPosBn = true;
          }
          var symbol = this.getSymbol(d);
          id = id == null ? this.radomId() : id;
          symbol.bind(id, d, this.node, false, setPosBn);
          return symbol;
        }

        /**尾添加 */;
        _proto.addE = function addE(d) {
          var dir = d.vector > 0 ? 1 : -1;
          var symbols = d.symbols;
          var type = d.type;
          var symbol = symbols[symbols.length - 1];
          if (type == ETYPE.H) {
            if (dir == 1) {
              if (symbol.node.x + symbol.fitW / 2 < d.headPos.x + d.vector) {
                this.pushSymbol(d);
                this.addE(d);
              }
            } else {
              if (symbol.node.x - symbol.fitW / 2 > d.headPos.x + d.vector) {
                this.pushSymbol(d);
                this.addE(d);
              }
            }
          } else {
            if (dir == 1) {
              if (symbol.node.y + symbol.fitH / 2 < d.headPos.y + d.vector) {
                this.pushSymbol(d);
                this.addE(d);
              }
            } else {
              if (symbol.node.y - symbol.fitH / 2 > d.headPos.y + d.vector) {
                this.pushSymbol(d);
                this.addE(d);
              }
            }
          }
        };
        _proto.pushSymbol = function pushSymbol(d, id, setPosBn) {
          if (id === void 0) {
            id = null;
          }
          if (setPosBn === void 0) {
            setPosBn = true;
          }
          var symbol = this.getSymbol(d);
          id = id == null ? this.radomId() : id;
          symbol.bind(id, d, this.node, true, setPosBn);
          return symbol;
        };
        // excludeId：排除的符号id
        /**随机符号id*/
        _proto.radomId = function radomId() {
          var tempIds = [].concat(this.radomIds);
          var excludeId = [].concat(this.excludeId);
          for (var i = 0; i < excludeId.length; i++) {
            tempIds.splice(tempIds.indexOf(excludeId[i]), 1);
          }
          var index = Math.floor(Math.random() * tempIds.length);
          if (index == tempIds.length) {
            index = tempIds.length - 1;
          }
          var id = tempIds[index];
          return id;
        };
        _proto.getSymbol = function getSymbol(d) {
          var pbNode = d.pool.get();
          var symbol;
          if (!pbNode) {
            pbNode = instantiate(this.symbolPb);
            symbol = pbNode.getComponent(baseSymbol);
            symbol.poolId = this.getPoolId();
            this.count++;
            // Logger.error("生成symbol总个数：" + this.count);
          } else {
            symbol = pbNode.getComponent(baseSymbol);
          }
          return symbol;
        };
        /** 获取请求唯一编号 */
        _proto.getPoolId = function getPoolId() {
          if (this._poolId == this.MAXSYMBOL) this._poolId = 1;
          this._poolId++;
          return this._poolId;
        };
        /**所有滚轴一起转 */
        _proto.move = function move() {
          for (var i = 0; i < this.reelDates.length; i++) {
            var r = this.reelDates[i];
            var symbols = r.symbols;
            for (var _i = 0; _i < symbols.length; _i++) {
              var symbol = r.symbols[_i];
              symbol.aimBn = false;
            }
            r["switch"] = true;
          }
        }

        /**转动单个滚轴 */;
        _proto.moveOne = function moveOne(r) {
          var symbols = r.symbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = r.symbols[i];
            symbol.aimBn = false;
          }
          r["switch"] = true;
        };
        _proto.doMove = function doMove(r) {
          if (r["switch"] == false) return;
          var moveDir = r.vector > 0 ? -1 : 1;
          var symbols = r.symbols;
          for (var i = 0; i < symbols.length; i++) {
            var symbol = r.symbols[i];
            if (r.type == ETYPE.H) {
              symbol.node.x += moveDir * this.v;
            } else {
              symbol.node.y += moveDir * this.v;
            }
          }
        }

        /**滚动完成移除所有随机产生的symbol */;
        _proto.removeRadom = function removeRadom() {
          for (var i = 0; i < this.reelDates.length; i++) {
            var r = this.reelDates[i];
            var symbols = r.symbols;
            for (var j = symbols.length - 1; j >= 0; j--) {
              var symbol = symbols[j];
              if (symbol.aimBn == false) {
                symbol.recover();
                symbols.splice(j, 1);
              }
            }
          }
        };
        //回弹时间
        _proto.rebound = function rebound(r, startBn, callback) {
          if (callback === void 0) {
            callback = function callback() {};
          }
          var dir = r.vector > 0 ? 1 : -1;
          var dis = this.reboundDis;
          var t = this.reboundT;
          var addSymbol;
          if (startBn) {
            addSymbol = this.unshiftSymbol(r);
          } else {
            addSymbol = this.pushSymbol(r);
          }
          var symbols = r.symbols;
          for (var j = 0; j < symbols.length; j++) {
            var symbol = symbols[j];
            symbol.rebound(startBn, this.reboundT, this.reboundDis);
          }
          this.scheduleOnce(function () {
            addSymbol.recover();
            callback();
          }, 2 * this.reboundT);
        };
        _proto.getSymbolByIndex = function getSymbolByIndex(index) {
          var arr = this.getSymbols;
          return arr[index];
        };
        _proto.clear = function clear() {
          for (var i = 0; i < this.reelDates.length; i++) {
            var r = this.reelDates[i];
            var symbols = r.symbols;
            for (var j = 0; j < symbols.length; j++) {
              symbols[j].recover();
            }
            r.pool.clear();
            r.symbols = [];
          }
        };
        _createClass(baseReel, [{
          key: "reelDates",
          get: function get() {
            return this._reelDates;
          },
          set: function set(v) {
            this._reelDates = v;
          }
        }, {
          key: "arrIndex",
          get: function get() {
            if (!this._arrIndex) {
              this._arrIndex = [];
              if (this.reelDates && this.reelDates.length > 0) {
                for (var i = 0; i < this.reelDates.length; i++) {
                  if (i == 0) {
                    this._arrIndex[i] = 0;
                  } else {
                    this._arrIndex[i] = this._arrIndex[i - 1] + this.reelDates[i - 1].num;
                  }
                }
              }
            }
            return this._arrIndex;
          }
        }, {
          key: "getSymbols",
          get: function get() {
            var arr = [];
            for (var i = 0; i < this.reelDates.length; i++) {
              var r = this.reelDates[i];
              for (var j = 0; j < r.num; j++) {
                var symbol = r.symbols[j];
                if (symbol && symbol.aimBn) arr.push(symbol);
              }
            }
            return arr;
          }
        }]);
        return baseReel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolPb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      var ETYPE = exports('ETYPE', /*#__PURE__*/function (ETYPE) {
        ETYPE[ETYPE["H"] = 0] = "H";
        ETYPE[ETYPE["V"] = 1] = "V";
        return ETYPE;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseSlotLayer.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, SpriteAtlas, Font, SpriteFrame, Material, randomRangeInt, Component, Vec3, BaseSlotLayer, Num;
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
      BaseSlotLayer = module.BaseSlotLayer;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "95f1dXDgHZAzrfsxDzb8FsU", "BaseSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotStopType = exports('SlotStopType', /*#__PURE__*/function (SlotStopType) {
        SlotStopType[SlotStopType["\u7ACB\u5373\u505C\u6B62"] = 0] = "\u7ACB\u5373\u505C\u6B62";
        SlotStopType[SlotStopType["\u9646\u7EED\u505C\u6B62"] = 1] = "\u9646\u7EED\u505C\u6B62";
        SlotStopType[SlotStopType["\u7ACB\u5373\u9646\u7EED"] = 2] = "\u7ACB\u5373\u9646\u7EED";
        return SlotStopType;
      }({}));
      Enum(SlotStopType);
      var SlotRankType = exports('SlotRankType', /*#__PURE__*/function (SlotRankType) {
        SlotRankType[SlotRankType["\u7AD6\u6392"] = 0] = "\u7AD6\u6392";
        SlotRankType[SlotRankType["\u6A2A\u6392"] = 1] = "\u6A2A\u6392";
        return SlotRankType;
      }({}));
      Enum(SlotRankType);
      var SlotEaseType = exports('SlotEaseType', /*#__PURE__*/function (SlotEaseType) {
        SlotEaseType[SlotEaseType["Linear"] = 0] = "Linear";
        SlotEaseType[SlotEaseType["Back"] = 1] = "Back";
        SlotEaseType[SlotEaseType["Bounce"] = 2] = "Bounce";
        SlotEaseType[SlotEaseType["Circ"] = 3] = "Circ";
        SlotEaseType[SlotEaseType["Cubic"] = 4] = "Cubic";
        SlotEaseType[SlotEaseType["Elastic"] = 5] = "Elastic";
        SlotEaseType[SlotEaseType["Expo"] = 6] = "Expo";
        SlotEaseType[SlotEaseType["Quad"] = 7] = "Quad";
        SlotEaseType[SlotEaseType["Quart"] = 8] = "Quart";
        SlotEaseType[SlotEaseType["Quint"] = 9] = "Quint";
        SlotEaseType[SlotEaseType["Sine"] = 10] = "Sine";
        return SlotEaseType;
      }({}));
      Enum(SlotEaseType);
      var BaseSlot = exports('BaseSlot', (_dec = ccclass('BaseSlot'), _dec2 = menu('扩展类/Slot/基础Slot'), _dec3 = property({
        type: [SpriteAtlas],
        displayName: "图片库"
      }), _dec4 = property({
        displayName: "自动高度"
      }), _dec5 = property({
        type: SlotStopType,
        displayName: "停止类型"
      }), _dec6 = property({
        displayName: "间隔时间",
        visible: function visible() {
          return this.stopType == SlotStopType.陆续停止 || this.stopType == SlotStopType.立即陆续;
        }
      }), _dec7 = property({
        displayName: "速度"
      }), _dec8 = property({
        type: SlotEaseType,
        displayName: "缓入类型"
      }), _dec9 = property({
        type: SlotEaseType,
        displayName: "缓出类型"
      }), _dec10 = property({
        displayName: "文本位置"
      }), _dec11 = property({
        type: Font,
        displayName: "字体"
      }), _dec12 = property({
        displayName: "字体大小"
      }), _dec13 = property({
        displayName: "运动模糊"
      }), _dec14 = property({
        tooltip: '是否使用背景'
      }), _dec15 = property({
        type: SpriteFrame,
        displayName: "背景图片",
        visible: function visible() {
          return this.isUseBg;
        }
      }), _dec16 = property({
        type: SlotRankType
      }), _dec17 = property({
        type: Material,
        visible: function visible() {
          return this.isBlur;
        }
      }), _dec18 = property({
        displayName: "运行",
        group: {
          id: "1",
          name: "渲染面板"
        }
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseSlot, _Component);
        function BaseSlot() {
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
        var _proto = BaseSlot.prototype;
        //roll点
        _proto.roll = function roll(arr, callback, callbackColumn) {
          var _this2 = this;
          var now = 0;
          this._layers.forEach(function (v, i) {
            var interval = i * (_this2.stopType == SlotStopType.立即停止 || _this2.stopType == SlotStopType.立即陆续 ? 0 : _this2.interval);
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
          // console.log("rollVirtually,", this._layers);
          this._layers.forEach(function (v, i) {
            //顺序延时开始
            var interval = i * (_this3.stopType == SlotStopType.立即停止 ? 0 : _this3.interval);
            _this3.scheduleOnce(function () {
              v.rollVirtually(txtSkins);
              callback && callback(i);
            }, interval);
          });
        }
        //停止转动
        ;

        _proto.stop = function stop() {
          if (this.stopType == SlotStopType.立即停止) {
            this._layers.forEach(function (v, i) {
              v.stop();
            });
          } else {
            this.stepStop(0);
          }
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
          });
        };
        _proto.stepStop = function stepStop(i) {
          var _this4 = this;
          this.scheduleOnce(function () {
            _this4._layers[i].stop(function () {
              if (i + 1 == _this4._layers.length) return;
              _this4.scheduleOnce(function () {
                _this4.stepStop(i + 1);
              }, _this4.interval);
            });
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
                text: Num.exchangeToThousands(1, cardScore)
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
                    some = this.node.children[i];
                    layer = some.getComponent(BaseSlotLayer);
                    layer.index = i;
                    layer.rank = this.rank;
                    layer.easingIn = SlotEaseType[this.easingIn];
                    layer.easingOut = SlotEaseType[this.easingOut];
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
        _createClass(BaseSlot, [{
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
              layer.easingIn = SlotEaseType[this.easingIn];
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
              layer.easingOut = SlotEaseType[this.easingOut];
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
        return BaseSlot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "libs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stopType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlotStopType.立即停止;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec6], {
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
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_easingIn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlotEaseType.Back;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "easingIn", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "easingIn"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_easingOut", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlotEaseType.Back;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "easingOut", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "easingOut"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fontVec", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "font", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "isBlur", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "isUseBg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bgFrame", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "rank", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlotRankType.竖排;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "go", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "go"), _class2.prototype)), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseSlotItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, NodeEventType, Sprite, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "21f06o0iJBKK7CzdrvfKFuJ", "BaseSlotItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      /**
       * 基础Slot元素类
       */
      var BaseSlotItem = exports('BaseSlotItem', (_dec = ccclass('BaseSlotItem'), _dec2 = menu('扩展类/Slot/元素'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseSlotItem, _Component);
        function BaseSlotItem() {
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
        var _proto = BaseSlotItem.prototype;
        _proto.setSharedMaterial = function setSharedMaterial(v, i) {
          this._st.setSharedMaterial(v, i);
        };
        _proto.start = function start() {
          var _this2 = this;
          this.node.on(NodeEventType.TOUCH_END, function () {
            var info = {
              layer: _this2.layer,
              column: _this2.column,
              sprite: _this2._st
            };
            _this2.node.emit("click", info);
            // console.log(info);
          });
        };

        _createClass(BaseSlotItem, [{
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
        return BaseSlotItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseSlotLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseSlotItem.ts', './SlotTweenFun.ts', './BaseSlot.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteAtlas, Node, v3, Mask, UITransform, Label, tween, easing, Vec3, Component, BaseSlotItem, SlotTweenFun, SlotRankType;
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
      BaseSlotItem = module.BaseSlotItem;
    }, function (module) {
      SlotTweenFun = module.SlotTweenFun;
    }, function (module) {
      SlotRankType = module.SlotRankType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b20bfkE7mdAlJjRBY+r40CG", "BaseSlotLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BaseSlotLayer = exports('BaseSlotLayer', (_dec = ccclass('BaseSlotLayer'), _dec2 = menu('扩展类/Slot/层layer'), _dec3 = property({
        displayName: "宽度"
      }), _dec4 = property({
        displayName: "高度"
      }), _dec5 = property({
        displayName: "间隔"
      }), _dec6 = property({
        displayName: "显示数量"
      }), _dec7 = property({
        type: [SpriteAtlas],
        displayName: "图片库",
        visible: false
      }), _dec8 = property({
        displayName: "运行",
        group: {
          id: "1",
          name: "渲染面板"
        }
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseSlotLayer, _Component);
        function BaseSlotLayer() {
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
          _this.rank = SlotRankType.竖排;
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
          _this._easingIn = SlotTweenFun.Quad.easeIn;
          _this._easingOut = "backOut";
          _this.index = void 0;
          return _this;
        }
        var _proto = BaseSlotLayer.prototype;
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
          var count = this.count + 1;
          var height = 0;
          var isShu = this.rank == SlotRankType.竖排;
          var target = isShu ? this.height : this.width;
          this._h = target / 2 + this.space;
          for (var i = 0; i < count; i++) {
            var stf = this.getRndSftByArr(arr);
            var node = new Node();
            node.layer = this.node.layer;
            node.name = "item";
            var st = node.addComponent(BaseSlotItem);
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
        };
        _proto.childInit = function childInit() {
          var isShu = this.rank == SlotRankType.竖排;
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
            var isShu = this.rank == SlotRankType.竖排;
            var one = this._childs[i];
            if (this._isSlow) {
              var index = (this._slowInfo.pos + i) % this._childs.length - 1;
              var y = -(index * this._h + this.height / 2);
              one.node.setPosition(v3(0, y, 0));
            } else {
              this.updateFast(one, i);
            }
            var ty = isShu ? one.node.position.y <= this._tolY : one.node.position.x >= this._tolY;
            if (ty) {
              var ly = Math.abs(this._tolY - (isShu ? one.node.position.y : one.node.position.x));
              var j = isShu ? this.space - ly : -this.space;
              var rpos = v3(isShu ? 0 : j, isShu ? j : 0, 0);
              one.node.setPosition(rpos);
              if (this._isStop) {
                if (i == this.count - 1) {
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
          var isShu = this.rank == SlotRankType.竖排;
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
            one.node.setPosition(v3(isShu ? 0 : one.node.position.x + this._juli, isShu ? one.node.position.y - this._juli : -this.height / 2, 0));
            if (this._resets[i]) {
              var cha = Vec3.distance(this._points[i], one.node.position);
              if (cha <= this._juli * 2 && this._moves[i]) {
                one.setSharedMaterial(this._normalMaterial, 0);
                this._moves[i] = false;
                tween(one.node).to(this._outStr == "Linear" ? 1 / 100 : this.speed / 130, {
                  position: this._points[i]
                }, {
                  easing: this._outStr == "Back" ? SlotTweenFun.Back.easeOut : this._easingOut
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
            var st = list[Math.floor(Math.random() * list.length)];
            return st;
          }
        };
        _proto.getRndSftByArr = function getRndSftByArr(arr) {
          var st = arr[Math.floor(Math.random() * arr.length)];
          return this.lib[this.libCount].getSpriteFrame(st);
        };
        _createClass(BaseSlotLayer, [{
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
            this._easingIn = v == "Linear" ? SlotTweenFun.Linear : SlotTweenFun[v].easeIn;
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
        return BaseSlotLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "space", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lib", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "go", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "go"), _class2.prototype)), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/baseSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseReel.ts', './Logger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, sp, Sprite, SpriteFrame, Node, Vec3, tween, Button, Component, ETYPE, Logger;
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
      sp = module.sp;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      ETYPE = module.ETYPE;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "3b529KyaJ1PYo4Jr4nzoX32", "baseSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var baseSymbol = exports('baseSymbol', (_dec = ccclass('baseSymbol'), _dec2 = property({
        type: sp.Skeleton,
        tooltip: "龙骨"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "icon"
      }), _dec4 = property({
        type: Sprite,
        tooltip: "模糊"
      }), _dec5 = property({
        type: [sp.SkeletonData],
        tooltip: "龙骨[]"
      }), _dec6 = property({
        type: [SpriteFrame],
        tooltip: "icon[]"
      }), _dec7 = property({
        type: [SpriteFrame],
        tooltip: "模糊[]"
      }), _dec8 = property({
        type: Node,
        tooltip: "暗"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(baseSymbol, _Component);
        function baseSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ske", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blur", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skes", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icons", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blurs", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dark", _descriptor7, _assertThisInitialized(_this));
          _this.reelDate = void 0;
          _this._poolId = 0;
          /**是否存在目标，目标为headPos */
          _this._aimBn = false;
          _this.fitScale = void 0;
          _this.doReachAimCallBack = function () {};
          _this._darkBn = false;
          _this._blurBn = false;
          _this._showType = ESHOWTYPE.normal;
          _this._symbolId = 0;
          return _this;
        }
        var _proto = baseSymbol.prototype;
        /**绑定pool */
        _proto.bind = function bind(id, r, parent, pushBn, setPosBn) {
          if (setPosBn === void 0) {
            setPosBn = true;
          }
          this.symbolId = id;
          this.reelDate = r;
          this.node.parent = parent;
          this.fitSize();
          if (pushBn) {
            r.symbols.push(this);
            if (r.hierarchy) {
              this.node.setSiblingIndex(0);
            }
          } else {
            r.symbols.unshift(this);
            var symbols = this.reelDate.symbols;
            var index = this.index;
            var next = index == symbols.length - 1 ? null : symbols[index + 1]; //后继
            if (next && !r.hierarchy) {
              this.node.setSiblingIndex(next.node.getSiblingIndex());
            }
          }
          if (setPosBn) this.setPostion();
        };
        /**回收 */
        _proto.recover = function recover() {
          if (!this.pool) {
            Logger.error("未绑定pool");
            return;
          }
          this.pool.put(this.node);
        };
        _proto.unuse = function unuse() {
          this.bindAimPos(this.reelDate.num);
          this.aimBn = false;
          this.doReachAimCallBack = function () {};
        };
        _proto.reuse = function reuse() {
          this.symbolId = 0;
        };
        /**适配大小*/
        _proto.fitSize = function fitSize() {
          var nodeSize = this.reelType == ETYPE.H ? this.node.h : this.node.w;
          this.fitScale = this.reelSize / nodeSize;
          // this.node.scale = new Vec3(this.fitScale, this.fitScale);
          this.node.w = this.node.w * this.fitScale;
          this.node.h = this.node.h * this.fitScale;
          for (var i = 0; i < this.node.children.length; i++) {
            var child = this.node.children[i];
            child.scale = new Vec3(child.scale.x * this.fitScale, child.scale.y * this.fitScale);
          }
        };
        /**设置位置 */
        _proto.setPostion = function setPostion() {
          var symbols = this.reelDate.symbols;
          var index = this.index;
          var pre = this.pre; //前驱
          var next = index == symbols.length - 1 ? null : symbols[index + 1]; //后继
          var dir = this.reelDate.vector > 0 ? 1 : -1;
          if (pre) {
            if (this.reelType == ETYPE.H) {
              this.node.position = new Vec3(pre.node.x + (pre.fitW + this.fitW) / 2 * dir, this.reelDate.headPos.y);
            } else {
              this.node.position = new Vec3(this.reelDate.headPos.x, pre.node.y + (pre.fitH + this.fitH) / 2 * dir);
            }
          } else {
            if (next) {
              if (this.reelType == ETYPE.H) {
                this.node.position = new Vec3(next.node.x - (next.fitW + this.fitW) / 2 * dir, this.reelDate.headPos.y);
              } else {
                this.node.position = new Vec3(this.reelDate.headPos.x, next.node.y - (next.fitH + this.fitH) / 2 * dir);
              }
            } else {
              if (this.reelType == ETYPE.H) {
                this.node.position = new Vec3(this.reelDate.headPos.x + this.fitW / 2 * dir, this.reelDate.headPos.y);
              } else {
                this.node.position = new Vec3(this.reelDate.headPos.x, this.reelDate.headPos.y + this.fitH / 2 * dir);
              }
            }
          }
        };
        _proto.update = function update(dt) {
          if (!this.reelDate) return;
          if (this.reelDate) {
            this.blurBn = this.reelDate["switch"];
          }
          if (this.reelDate["switch"] == false) return;
          this.removeUnShow();
          this.reachAim();
        }

        /**超出显示范围则移出并回收 */;
        _proto.removeUnShow = function removeUnShow() {
          if (!this.node.parent || this.aimBn) return;
          var showBn = this.showBn();
          if (showBn == false) {
            this.recover();
          }
        }

        /**可见边界 */;
        /**判断是否可见 */
        _proto.showBn = function showBn() {
          var borders = this.reelDate.vector > 0 ? [this.borderOne, this.borderTwo] : [this.borderTwo, this.borderOne];
          if (this.reelType == ETYPE.H) {
            if (this.node.x + this.fitW / 2 >= borders[0] && this.node.x - this.fitW / 2 <= borders[1]) {
              return true;
            }
          } else {
            if (this.node.y + this.fitH / 2 >= borders[0] && this.node.y - this.fitH / 2 <= borders[1]) {
              return true;
            }
          }
          return false;
        }

        /**有目标则判断是否达成 */;
        _proto.reachAim = function reachAim() {
          if (this.aimBn == false) return;
          var dir = this.reelDate.vector > 0 ? 1 : -1;
          var r = this.reelDate;
          if (this.reelDate.type == ETYPE.H) {
            if (dir == 1) {
              if (this.node.x - this.fitW / 2 <= r.headPos.x) {
                this.doReachAim();
              }
            } else {
              if (this.node.x + this.fitW / 2 >= r.headPos.x) {
                this.doReachAim();
              }
            }
          } else {
            if (dir == 1) {
              if (this.node.y - this.fitH / 2 <= r.headPos.y) {
                this.doReachAim();
              }
            } else {
              if (this.node.y + this.fitH / 2 >= r.headPos.y) {
                this.doReachAim();
              }
            }
          }
        };
        _proto.bindAimPos = function bindAimPos(index) {
          var dir = this.reelDate.vector > 0 ? 1 : -1;
          var r = this.reelDate;
          if (this.reelDate.type == ETYPE.H) {
            this.node.x = r.headPos.x + (this.fitW / 2 + this.fitW * index) * dir;
          } else {
            this.node.y = r.headPos.y + (this.fitH / 2 + this.fitH * index) * dir;
          }
        };
        _proto.doReachAim = function doReachAim() {
          this.reelDate["switch"] = false;
          var symbols = this.reelDate.symbols;
          var count = 0;
          for (var i = 0; i < symbols.length; i++) {
            if (symbols[i].aimBn == false) {
              symbols[i].recover();
            } else {
              symbols[i].bindAimPos(count);
              count++;
            }
          }
          this.doReachAimCallBack();
        };
        _proto.rebound = function rebound(startBn, t, dis) {
          var node = this.node;
          var r = this.reelDate;
          var dir = r.vector > 0 ? 1 : -1;
          if (r.type == ETYPE.H) {
            if (startBn) {
              tween(node).by(t, {
                x: dis * dir
              }, {
                easing: 'quartOut'
              }).by(t, {
                x: -dis * dir
              }, {
                easing: 'quartIn'
              }).start();
            } else {
              tween(node).by(t, {
                x: -dis * dir
              }, {
                easing: 'quartOut'
              }).by(t, {
                x: dis * dir
              }, {
                easing: 'quartIn'
              }).start();
            }
          } else {
            if (startBn) {
              tween(node).by(t, {
                y: dis * dir
              }, {
                easing: 'quartOut'
              }).by(t, {
                y: -dis * dir
              }, {
                easing: 'quartIn'
              }).start();
            } else {
              tween(node).by(t, {
                y: -dis * dir
              }, {
                easing: 'quartOut'
              }).by(t, {
                y: dis * dir
              }, {
                easing: 'quartIn'
              }).start();
            }
          }
        };
        _proto.init = function init() {
          this.showType = ESHOWTYPE.normal;
          this.blurBn = false;
          this.darkBn = false;
          if (this.node.getComponent(Button)) this.node.getComponent(Button).interactable = false;
        };
        /**播放动画 */
        _proto.playAni = function playAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          if (this.showType != ESHOWTYPE.ske) return;
          this.ske.setAnimation(0, aimStr, loopBn);
        }
        /**添加动画 */;
        _proto.addAni = function addAni(aimStr, loopBn) {
          if (loopBn === void 0) {
            loopBn = true;
          }
          if (this.showType != ESHOWTYPE.ske) return;
          this.ske.addAnimation(0, aimStr, loopBn);
        };
        _createClass(baseSymbol, [{
          key: "pool",
          get: function get() {
            if (!this.reelDate) {
              Logger.error("未绑定reelDate");
              return;
            }
            return this.reelDate.pool;
          }
        }, {
          key: "poolId",
          get: function get() {
            return this._poolId;
          },
          set: function set(v) {
            this._poolId = v;
          }
        }, {
          key: "aimBn",
          get: function get() {
            return this._aimBn;
          },
          set: function set(v) {
            this._aimBn = v;
          }
        }, {
          key: "index",
          get: function get() {
            if (!this.reelDate) {
              Logger.error("未绑定reelDate");
              return;
            }
            var symbols = this.reelDate.symbols;
            for (var i = 0; i < symbols.length; i++) {
              var symbol = symbols[i];
              if (symbol.poolId == this.poolId) {
                return i;
              }
            }
            return -1;
          }
        }, {
          key: "reelType",
          get: function get() {
            return this.reelDate.type;
          }
        }, {
          key: "reelSize",
          get: function get() {
            return this.reelDate.size;
          }
        }, {
          key: "fitW",
          get: function get() {
            // return this.node.w * this.fitScale;
            return this.node.w;
          }
        }, {
          key: "fitH",
          get: function get() {
            // return this.node.h * this.fitScale;
            return this.node.h;
          }
        }, {
          key: "pre",
          get: function get() {
            var symbols = this.reelDate.symbols;
            var index = this.index;
            for (var i = index - 1; i >= 0; i--) {
              var symbol = symbols[i];
              if (symbol.node.parent) {
                return symbol;
              }
            }
            return null;
          }
        }, {
          key: "borderOne",
          get: function get() {
            return this.reelType == ETYPE.H ? this.reelDate.headPos.x : this.reelDate.headPos.y;
          }
        }, {
          key: "borderTwo",
          get: function get() {
            return this.reelType == ETYPE.H ? this.reelDate.headPos.x + this.reelDate.vector : this.reelDate.headPos.y + this.reelDate.vector;
          }
        }, {
          key: "aimPos",
          get: function get() {
            var dir = this.reelDate.vector > 0 ? 1 : -1;
            var r = this.reelDate;
            if (this.reelDate.type == ETYPE.H) {
              return r.headPos.x + (this.fitW / 2 + this.fitW * this.index) * dir;
            } else {
              return r.headPos.y + (this.fitH / 2 + this.fitH * this.index) * dir;
            }
          }
        }, {
          key: "darkBn",
          get: function get() {
            return this._darkBn;
          },
          set: function set(v) {
            this._darkBn = v;
            if (this.dark) this.dark.active = v;
          }
        }, {
          key: "blurBn",
          get: function get() {
            return this._blurBn;
          },
          set: function set(v) {
            this._blurBn = v;
            if (this.blur) this.blur.node.active = v;
            if (v) {
              this.icon.node.active = false;
              this.ske.node.active = false;
            } else {
              if (this.showType == ESHOWTYPE.normal) {
                this.icon.node.active = true;
              } else {
                this.ske.node.active = true;
              }
            }
          }
        }, {
          key: "showType",
          get: function get() {
            return this._showType;
          },
          set: function set(v) {
            this._showType = v;
            this.ske.node.active = v == ESHOWTYPE.ske;
            this.icon.node.active = v == ESHOWTYPE.normal;
          }
        }, {
          key: "symbolId",
          get: function get() {
            return this._symbolId;
          },
          set: function set(v) {
            this._symbolId = v;
            var index = v - 1;
            if (v == 0) {
              this.ske.skeletonData = undefined;
              this.icon.spriteFrame = undefined;
              if (this.blur) this.blur.spriteFrame = undefined;
              for (var i = 0; i < this.node.children.length; i++) {
                this.node.children[i].active = false;
              }
            } else {
              this.ske.skeletonData = this.skes[index];
              this.icon.spriteFrame = this.icons[index];
              if (this.blur) this.blur.spriteFrame = this.blurs[index];
            }
            this.init();
          }
        }]);
        return baseSymbol;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ske", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blur", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skes", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "icons", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "blurs", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "dark", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ESHOWTYPE = exports('ESHOWTYPE', /*#__PURE__*/function (ESHOWTYPE) {
        ESHOWTYPE[ESHOWTYPE["normal"] = 0] = "normal";
        ESHOWTYPE[ESHOWTYPE["ske"] = 1] = "ske";
        return ESHOWTYPE;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasicConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "89db5S1JnRGhLaQrFjUBMto", "BasicConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasicManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Start.ts', './Language.ts', './ConfigMgr.ts', './GameConst.ts'], function (exports) {
  var _createClass, cclegacy, assetManager, Prefab, Start, LanguageManager, ConfigMgr, GameConst;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
    }, function (module) {
      Start = module.Start;
    }, function (module) {
      LanguageManager = module.LanguageManager;
    }, function (module) {
      ConfigMgr = module.ConfigMgr;
    }, function (module) {
      GameConst = module.GameConst;
    }],
    execute: function () {
      cclegacy._RF.push({}, "402ffhzz4VEirOH8JSuc6S+", "BasicManger", undefined);
      var BasicManger = exports('BasicManger', /*#__PURE__*/function () {
        function BasicManger() {}
        var _proto = BasicManger.prototype;
        _proto.init = function init() {
          LanguageManager.ins["default"] = GameConst.defaultLanguage;
        };
        _proto.preloadRes = function preloadRes(res, callbackFun) {
          var onComplete = function onComplete() {
            callbackFun();
          };
          var bundle = assetManager.getBundle(res.bundle);
          if (bundle) {
            if (res.type == 'prefab') {
              bundle.preload(res.url, Prefab, onComplete);
            } else if (res.type == 'language')
              //加载多语言
              {
                // 初始化
                LanguageManager.ins.addBundle(bundle.name, onComplete);
              } else if (res.type == 'scene') {
              bundle.preloadScene(res.url, onComplete);
            } else if (res.type == 'config') {
              ConfigMgr.inst.loadConfig(bundle.name, res.url, onComplete);
            } else if (res.type == 'areaConfig') {
              ConfigMgr.inst.loadAreaConfig(bundle.name, res.url, onComplete);
            }
          }
        };
        _createClass(BasicManger, null, [{
          key: "inst",
          get: function get() {
            if (!this._instance) {
              this._instance = new BasicManger();
            }
            return this._instance;
          }
        }]);
        return BasicManger;
      }());
      BasicManger._instance = void 0;
      Start.basicPreloadRes = BasicManger.inst.preloadRes.bind(BasicManger.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bezierMove.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, Num;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "800b4Mn0yFEW5EiWhRSj8A9", "bezierMove", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var bezierMove = exports('bezierMove', (_dec = ccclass('bezierMove'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(bezierMove, _Component);
        function bezierMove() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**贝塞尔节点数组 */
          _this.pArr = [];
          /**tween t 0-1 实现曲线运动*/
          _this._t = 0;
          return _this;
        }
        _createClass(bezierMove, [{
          key: "t",
          get: function get() {
            return this._t;
          },
          set: function set(v) {
            this._t = v;
            var temp;
            if (this.pArr.length == 4) {
              temp = Num.threeBezier(this.pArr[0], this.pArr[1], this.pArr[2], this.pArr[3], this._t);
            }
            if (this.pArr.length == 3) {
              temp = Num.twoBezier(this.pArr[0], this.pArr[1], this.pArr[2], this._t);
            }
            this.node.position = temp;
          }
        }]);
        return bezierMove;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BilliardsTypeDef.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d010bs/pC5BCoKNxcsT+znz", "BilliardsTypeDef", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/card.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1aa5ed1EmhJN4r7WfINeb46", "card", undefined);
      // 牌色
      var e_card_color = exports('e_card_color', /*#__PURE__*/function (e_card_color) {
        e_card_color[e_card_color["Normal"] = 0] = "Normal";
        e_card_color[e_card_color["fangkuai1"] = 1] = "fangkuai1";
        e_card_color[e_card_color["meihua2"] = 2] = "meihua2";
        e_card_color[e_card_color["hongtao3"] = 3] = "hongtao3";
        e_card_color[e_card_color["heitao4"] = 4] = "heitao4";
        return e_card_color;
      }({})); //黑桃

      // 牌值
      var e_card_score = exports('e_card_score', /*#__PURE__*/function (e_card_score) {
        e_card_score[e_card_score["none"] = 0] = "none";
        e_card_score[e_card_score["c3"] = 3] = "c3";
        e_card_score[e_card_score["c4"] = 4] = "c4";
        e_card_score[e_card_score["c5"] = 5] = "c5";
        e_card_score[e_card_score["c6"] = 6] = "c6";
        e_card_score[e_card_score["c7"] = 7] = "c7";
        e_card_score[e_card_score["c8"] = 8] = "c8";
        e_card_score[e_card_score["c9"] = 9] = "c9";
        e_card_score[e_card_score["c10"] = 10] = "c10";
        e_card_score[e_card_score["J"] = 11] = "J";
        e_card_score[e_card_score["Q"] = 12] = "Q";
        e_card_score[e_card_score["K"] = 13] = "K";
        e_card_score[e_card_score["A"] = 14] = "A";
        e_card_score[e_card_score["c2"] = 16] = "c2";
        e_card_score[e_card_score["little_king"] = 18] = "little_king";
        e_card_score[e_card_score["big_king"] = 19] = "big_king";
        return e_card_score;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts'], function (exports) {
  var _createClass, cclegacy, JsonAsset, ResourceMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1b2bc1YyU1H35ynMtD2ywhr", "ConfigMgr", undefined);
      var ConfigMgr = exports('ConfigMgr', /*#__PURE__*/function () {
        function ConfigMgr() {
          this._ruleConfig = {};
          this._headConfig = {};
          this._roomConfig = {};
          this._shopConfig = {};
        }
        var _proto = ConfigMgr.prototype;
        /**游戏规则配置 */
        _proto.getRuleConfig = function getRuleConfig() {
          return this._ruleConfig;
        }
        /**头像配置 */;
        _proto.getHeadConfig = function getHeadConfig() {
          return this._headConfig;
        }
        /**房间配置 */;
        _proto.getRoomConfig = function getRoomConfig() {
          return this._roomConfig;
        }
        /**商城配置 */;
        _proto.getShopConfig = function getShopConfig() {
          return this._shopConfig;
        }
        /**加载配置 */;
        _proto.loadConfig = function loadConfig(bundle, url, callback) {
          var _this = this;
          ResourceMgr.inst.loadResByModuleBundle(bundle, url, JsonAsset, function (err, jsonAsset) {
            if (err) {
              console.log("load config error", err);
              callback(err);
              return;
            }
            switch (url) {
              case "config/ruleconfig":
                _this._ruleConfig = jsonAsset.json;
                break;
              case "config/headconfig":
                _this._headConfig = jsonAsset.json;
                break;
            }
            callback();
          });
        }

        /**加载地区配置 */;
        _proto.loadAreaConfig = function loadAreaConfig(bundle, url, callback) {
          var _this2 = this;
          ResourceMgr.inst.loadAreaConfigByModuleBundle(bundle, url, JsonAsset, function (err, jsonAsset) {
            if (err) {
              console.log("load config error", err);
              callback(err);
              return;
            }
            switch (url) {
              case "roomconfig":
                _this2._roomConfig = jsonAsset.json;
                break;
              case "shopconfig":
                _this2._shopConfig = jsonAsset.json;
                break;
            }
            callback();
          });
        }

        /**获取头像url */;
        _proto.getHeadUrl = function getHeadUrl(headID) {
          for (var i = 0; i < this._headConfig.length; i++) {
            var headData = this._headConfig[i];
            if (headData.id == headID) {
              return headData.res;
            }
          }
          return this._headConfig[0].res;
        }
        /**通过gamekey获取房间列表 */;
        _proto.getRoomListByGameKey = function getRoomListByGameKey(gamekey) {
          if (this._roomConfig[gamekey]) {
            return this._roomConfig[gamekey];
          }
          return null;
        };
        _createClass(ConfigMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._instance) {
              this._instance = new ConfigMgr();
            }
            return this._instance;
          }
        }]);
        return ConfigMgr;
      }());
      ConfigMgr._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Constants.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "57e1bm0VtBH3J07/YmwXz+B", "Constants", undefined);
      var LOBBY_USE_HTTP = exports('LOBBY_USE_HTTP', false);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CreateRoleScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneDef.ts', './LobbyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EditBox, Node, Component, SceneDef, LobbyMgr;
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
      EditBox = module.EditBox;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1fc96VMCyFBg6DuGfOQaUjN", "CreateRoleScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Predefined variables
       * Name = Index
       * DateTime = Tue Nov 29 2022 20:05:39 GMT+0800 (China Standard Time)
       * Author = mykylin
       * FileBasename = Index.ts
       * FileBasenameNoExtension = Index
       * URL = db://assets/scripts/Index.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      var LAST_NAMES = ['赵', '李', '张', '王', '姜', '刘', '孙', '吴', '上官', '欧阳', '百里', '武', '西门', '陈', '潘', '东方', '唐'];
      var GIVEN_NAMES = ['天涯', '雪梨', '天天', '盼盼', '谋谋', '子轩', '童话', '子修', '婉儿', '松韵', '邱泽', '晨晨', '阳阳', '莎莎', '小小', '舞桐'];
      var CreateRoleScene = exports('CreateRoleScene', (_dec = ccclass('CreateRoleScene'), _dec2 = property(EditBox), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CreateRoleScene, _Component);
        function CreateRoleScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "edtName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selector", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icons", _descriptor3, _assertThisInitialized(_this));
          _this._iconIndex = 0;
          return _this;
        }
        var _proto = CreateRoleScene.prototype;
        _proto.start = function start() {
          tgx.UIMgr.inst.closeAll();
          this._iconIndex = Math.floor(Math.random() * this.icons.children.length);
          var icon = this.icons.children[this._iconIndex];
          this.selector.setWorldPosition(icon.worldPosition);
          this.onBtnRandomName();
        };
        _proto.onBtnRandomName = function onBtnRandomName() {
          var lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
          var givenName = GIVEN_NAMES[Math.floor(Math.random() * GIVEN_NAMES.length)];
          this.edtName.string = lastName + givenName;
        };
        _proto.onIconSelected = function onIconSelected(event) {
          for (var i = 0; i < this.icons.children.length; ++i) {
            if (this.icons.children[i] == event.currentTarget) {
              this._iconIndex = i;
              var icon = this.icons.children[this._iconIndex];
              this.selector.setWorldPosition(icon.worldPosition);
            }
          }
        };
        _proto.onBtnStart = /*#__PURE__*/function () {
          var _onBtnStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var visualId, name, ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  visualId = this._iconIndex;
                  name = this.edtName.string;
                  _context.next = 4;
                  return LobbyMgr.inst.rpc_CreateRole(name, visualId);
                case 4:
                  ret = _context.sent;
                  if (ret.isSucc) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return");
                case 7:
                  //create role successfully, enter meta world
                  //角色创建成功，进入大厅
                  tgx.SceneUtil.loadScene(SceneDef.LOBBY);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onBtnStart() {
            return _onBtnStart.apply(this, arguments);
          }
          return onBtnStart;
        }();
        return CreateRoleScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "edtName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selector", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icons", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Error.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d11bq/yLxF0ZTmidj3/+JN", "Error", undefined);
      //用户未登录
      var ERR_NOT_LOGIN = exports('ERR_NOT_LOGIN', 10000);
      //下注金额错误
      var ERR_BET = exports('ERR_BET', 10001);
      //金币不足
      var ERR_NO_ENOUGH_COINS = exports('ERR_NO_ENOUGH_COINS', 10002);
      //游戏配置不存在
      var ERR_NO_GAME_CONFIG = exports('ERR_NO_GAME_CONFIG', 10003);

      //玩家还在游戏中， 无法匹配新游戏
      var ERR_IS_IN_GAME = exports('ERR_IS_IN_GAME', 10004);

      //没有可用的房间服务器
      var ERR_NO_GAME_SERVER = exports('ERR_NO_GAME_SERVER', 10005);

      //用户金币超过限制
      var ERR_COINS_OVERFLOW = exports('ERR_COINS_OVERFLOW', 10006);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "169efyFJFxJepjtUxq5kyuG", "EventDef", undefined);
      var BasicEventDef = exports('BasicEventDef', function BasicEventDef() {});
      BasicEventDef.EVENT_USER_INFO_MODIFIED = 'EVENT_USER_INFO_MODIFIED';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Fish.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "af0e9jVHwJLI6m2RBX+wJzx", "Fish", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FrontConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9b31dlbR/dAGpwz5c1j8I2g", "FrontConfig", undefined);
      /**
       * @en load server list from remote file, if configured, will use it first
       * @zh 从远程文件加载服务器列表，如果配置了值，则会优先使用
      */
      /**
       * json file format example
       * json 文件格式示例
       * ["ws://127.0.0.1:3001", "ws://192.168.0.9"]
      */
      var GameServerListFileURL = exports('GameServerListFileURL', ''); //'http://192.168.0.104:7456/web-mobile/web-mobile/server-list.json';

      /**
       * @en server list, randomly select one connection
       * @zh 服务器列表，随机选择一个连接
      */
      var GameServerURLs = exports('GameServerURLs', [
      //'http://127.0.0.1:3001',
      // 'http://8.216.89.33',
      'http://192.168.5.103:3001' //内网
      ]);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameMgr.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, SubGameMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f9fc0XnkEhKIbIzXsuQ4zMI", "GameMgr", undefined);
      var GameMode = exports('GameMode', function GameMode() {});
      GameMode.SOLO = 'solo';
      GameMode.AI = 'ai';
      GameMode.ONLINE = 'online';
      var GameMgr = exports('GameMgr', /*#__PURE__*/function () {
        function GameMgr() {
          this._gameType = void 0;
          this._entryScene = void 0;
          // 游戏入口场景 不设置的话 直接进入游戏场景
          this._gameScene = void 0;
          this._loadingScene = void 0;
          this._subType = void 0;
        }
        var _proto = GameMgr.prototype;
        /**
         * @en reset game data
         * @zh 重置游戏数据
        */
        _proto.reset = function reset() {};
        _proto.init = function init() {};
        _proto.uinit = function uinit() {}
        // 进入游戏
        ;

        _proto.enterGame = /*#__PURE__*/
        function () {
          var _enterGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  SubGameMgr.inst.CreateRoom(this.gameType, true);
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function enterGame() {
            return _enterGame.apply(this, arguments);
          }
          return enterGame;
        }()
        /**
         * 加载资源
         * porcessFun 有2个参数 process(0-1), msg: string ="游戏加载中，请稍后..."
         */;

        _proto.preLoadRes = /*#__PURE__*/
        function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(process) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", true);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function preLoadRes(_x) {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }();
        _createClass(GameMgr, [{
          key: "gameType",
          get:
          // 子游戏类型 初级房高级房等
          /**
           * @en type of subgame
           * @zh 子游戏类型
          */
          function get() {
            return this._gameType;
          }
          /**
           * @en 子游戏类型 初级房高级房等
           * @zh subType
          */
        }, {
          key: "subType",
          get: function get() {
            return this._subType;
          }
          /**
           * @en 子游戏类型 初级房高级房等
           * @zh subType
          */,
          set: function set(id) {
            this._subType = id;
          }
          /**
           * 子游戏的加载场景
           */
        }, {
          key: "loadingScene",
          get: function get() {
            return this._loadingScene;
          }
          /**
           * @en entry scene of subgame,e.g. lobby
           * @zh 子游戏的入口场景，比如 大厅
          */
        }, {
          key: "entryScene",
          get: function get() {
            return this._entryScene;
          }

          /**
           * @en gameplay scene of subgame
           * @zh 子游戏的游戏玩法场景
          */
        }, {
          key: "gameScene",
          get: function get() {
            return this._gameScene;
          }
        }]);
        return GameMgr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GamePlayerInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserMgr.ts', './UIUserInfo.ts', './RoomMgr.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, Node, director, Component, UserMgr, UIUserInfo, RoomEvent, RoomMgr, GameMode, LanguageData;
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
      Label = module.Label;
      Sprite = module.Sprite;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      UIUserInfo = module.UIUserInfo;
    }, function (module) {
      RoomEvent = module.RoomEvent;
      RoomMgr = module.RoomMgr;
      GameMode = module.GameMode;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "658ea8wyoVG0pwC7nLkZowG", "GamePlayerInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var aiLevelStr = ['初级', '中级', '高级'];
      var GamePlayerInfo = exports('GamePlayerInfo', (_dec = ccclass('GamePlayerInfo'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GamePlayerInfo, _Component);
        function GamePlayerInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "readyState", _descriptor3, _assertThisInitialized(_this));
          _this._defaultIcon = void 0;
          _this._userId = void 0;
          return _this;
        }
        var _proto = GamePlayerInfo.prototype;
        _proto.onLoad = function onLoad() {
          this._defaultIcon = this.icon.spriteFrame;
        };
        _proto.start = function start() {
          director.on(RoomEvent.NEW_USER_COMES, this.onUserDataChanged, this);
          director.on(RoomEvent.USER_DATA_CHANGED, this.onUserDataChanged, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(RoomEvent.NEW_USER_COMES, this.onUserDataChanged, this);
          director.off(RoomEvent.USER_DATA_CHANGED, this.onUserDataChanged, this);
        };
        _proto.onUserDataChanged = function onUserDataChanged(msg) {
          if (msg.uid != this._userId) {
            return;
          }
          if (msg.isOnline !== undefined && !msg.isOnline) {
            this.readyState.active = true;
            this.readyState.getComponent(Label).string = '离线';
          } else {
            this.readyState.active = !RoomMgr.inst.isPlaying && RoomMgr.inst.getUser(this._userId).ready;
          }
        };
        _proto.setAILevel = function setAILevel(level) {
          this.userId.string = '电脑-' + (aiLevelStr[level] || aiLevelStr[0]);
          this.icon.spriteFrame = this._defaultIcon;
          this.readyState.active = false;
        };
        _proto.setUserId = function setUserId(userId) {
          this._userId = userId;
          if (!userId) {
            this.userId.string = '等待加入...';
            this.icon.spriteFrame = this._defaultIcon;
            this.readyState.active = false;
            if (RoomMgr.inst.isWatcher) {
              this.readyState.active = true;
              this.readyState.getComponent(Label).string = '加入';
            }
          } else {
            UserMgr.inst.setUserIconAndName(userId, this.icon, this.userId);
            this.readyState.active = false;
            if (RoomMgr.inst.isOnline) {
              this.readyState.active = !RoomMgr.inst.isPlaying && RoomMgr.inst.getUser(userId).ready;
              if (this.readyState.active) {
                this.readyState.getComponent(Label).string = '准备';
              }
            }
          }
        };
        _proto.onClicked = /*#__PURE__*/function () {
          var _onClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var info, ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(RoomMgr.inst.gameMode != GameMode.ONLINE)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  if (!this._userId) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 5;
                  return UserMgr.inst.rpc_GetUserInfo(this._userId);
                case 5:
                  info = _context.sent;
                  if (!info) {
                    _context.next = 9;
                    break;
                  }
                  tgx.UIMgr.inst.showUI(UIUserInfo, null, null, info);
                  return _context.abrupt("return");
                case 9:
                  if (!RoomMgr.inst.isPlayer) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return");
                case 11:
                  // 提示“加入游戏”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message0"));
                  _context.next = 14;
                  return RoomMgr.inst.rpc_JoinGame();
                case 14:
                  ret = _context.sent;
                  if (ret.isSucc) {
                    _context.next = 19;
                    break;
                  }
                  tgx.UIWaiting.hide();
                  //提示“无法加入”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message0"));
                  return _context.abrupt("return");
                case 19:
                  _context.next = 21;
                  return RoomMgr.inst.rpc_Ready();
                case 21:
                  tgx.UIWaiting.hide();
                  _context.next = 24;
                  return tgx.SceneUtil.reloadScene();
                case 24:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClicked() {
            return _onClicked.apply(this, arguments);
          }
          return onClicked;
        }();
        _proto.update = function update(deltaTime) {};
        return GamePlayerInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "readyState", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameServerAuthParams.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "84a8bXTCc9J+q1xivUwmKg6", "GameServerAuthParams", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GenderIcon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1c0964YQKNFfqR8FsssyM0o", "GenderIcon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GenderIcon = exports('GenderIcon', (_dec = ccclass('GenderIcon'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GenderIcon, _Component);
        function GenderIcon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "male", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "female", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GenderIcon.prototype;
        _proto.setGender = function setGender(gneder) {
          this.male.active = gneder == 1;
          this.female.active = gneder == 2;
        };
        return GenderIcon;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "male", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "female", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GomokuBoardMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "73f16YqoRFL97BKBgetnOKF", "GomokuBoardMgr", undefined);
      var GRID_SIZE = 1.25;
      var UINT_BITS = 32;
      var BITS_PER_GRID = 2;
      var GRID_PER_UNIT = Math.floor(UINT_BITS / BITS_PER_GRID);
      var tmpV2_0 = {
        x: 0,
        y: 0
      };
      var tmpV2_1 = {
        x: 0,
        y: 0
      };
      var tmpV2_2 = {
        x: 0,
        y: 0
      };
      var GomokuBoardMgr = exports('GomokuBoardMgr', /*#__PURE__*/function () {
        function GomokuBoardMgr() {
          this._sizeInGrid = 64;
          this._size = this._sizeInGrid * GRID_SIZE;
          this._halfSize = this._size / 2;
          /**
           * @en 1 means black, 2 means white  2bits a grid
           * @zh 格子数据，1 表示黑 2表示白 每个格子占2个比特位
          */
          this._gridData = new Uint32Array(this._sizeInGrid * this._sizeInGrid * BITS_PER_GRID / UINT_BITS);
          /**
           * 
           * 
           * 分数排行：五子 ·100，活四 80，活三 70，冲四 60，死三 50，活二 40，死二 30，单子 0
           * **/
          this._scoreMap = {
            '5': 100,
            '4': 80,
            '3': 70,
            'B4': 60,
            'B3': 50,
            '2': 40,
            'B2': 30
          };
        }
        var _proto = GomokuBoardMgr.prototype;
        _proto.getGridData = function getGridData(gridX, gridY) {
          if (gridX < 0 || gridX >= this._sizeInGrid || gridY < 0 || gridY >= this._sizeInGrid) {
            return -1;
          }
          var index = gridY * this._sizeInGrid + gridX;
          var uintIndex = Math.floor(index / GRID_PER_UNIT);
          var bitsIndex = index % GRID_PER_UNIT * BITS_PER_GRID;
          var data = this._gridData[uintIndex];
          if (!data) {
            return 0;
          }
          return data >>> bitsIndex & 0x3;
        };
        _proto.getGridDataByPos = function getGridDataByPos(x, y) {
          var grid = this.posToGrid(x, y);
          return this.getGridData(grid.x, grid.y);
        };
        _proto.setGrid = function setGrid(gridX, gridY, v) {
          if (!(v == 0 || v == 1 || v == 2)) {
            throw Error('only can be 0, 1 or 2.');
          }
          if (this.getGridData(gridX, gridY) != 0) {
            throw Error('adfsaf');
          }
          var index = gridY * this._sizeInGrid + gridX;
          var uintIndex = Math.floor(index / GRID_PER_UNIT);
          var bitsIndex = index % GRID_PER_UNIT * BITS_PER_GRID;
          var data = this._gridData[uintIndex] || 0;
          data = data | v << bitsIndex;
          this._gridData[uintIndex] = data;
        };
        _proto.getNearestGridCenter = function getNearestGridCenter(x, y) {
          tmpV2_0.x = Math.floor(x / GRID_SIZE + 0.5) * GRID_SIZE;
          tmpV2_0.y = Math.floor(y / GRID_SIZE + 0.5) * GRID_SIZE;
          return tmpV2_0;
        };
        _proto.gridToPos = function gridToPos(gridX, gridY) {
          tmpV2_1.x = gridX * GRID_SIZE - this._halfSize;
          tmpV2_1.y = gridY * GRID_SIZE - this._halfSize;
          return tmpV2_1;
        };
        _proto.posToGrid = function posToGrid(x, y) {
          tmpV2_2.x = Math.floor((x + this._halfSize) / GRID_SIZE + 0.5);
          tmpV2_2.y = Math.floor((y + this._halfSize) / GRID_SIZE + 0.5);
          return tmpV2_2;
        };
        _proto.reset = function reset() {
          this._gridData.fill(0, 0);
        }

        /**
         * @en check whether there is 5 in a line in every direction from the given grid.
         * @zh 从当前格子开始，检查各个方向是否有5子连珠。
         * 
        **/;
        _proto.checkWin = function checkWin(gridX, gridY, v) {
          var _this = this;
          //check line.
          var fnCheck = function fnCheck(dirX, dirY) {
            var countInLine = 0;
            for (var i = -4; i <= 4; ++i) {
              var tv = _this.getGridData(gridX + i * dirX, gridY + i * dirY);
              if (tv != v) {
                countInLine = 0;
              } else {
                countInLine++;
                if (countInLine >= 5) {
                  return true;
                }
              }
            }
            return false;
          };

          //horizontal
          if (fnCheck(1, 0)) {
            return true;
          }

          //vertical
          if (fnCheck(0, 1)) {
            return true;
          }

          //corner 1
          if (fnCheck(1, 1)) {
            return true;
          }

          //corner 2
          if (fnCheck(1, -1)) {
            return true;
          }
          return false;
        };
        _proto.getBestPlaceGrid = function getBestPlaceGrid(v) {
          var _this2 = this;
          var fnCheck = function fnCheck(gridX, gridY, dirX, dirY) {
            var num = 1;
            for (var i = 1; i < 5; ++i) {
              var tv = _this2.getGridData(gridX + i * dirX, gridY + i * dirY);
              if (tv == v) {
                num++;
                if (num == 5) {
                  return _this2._scoreMap['5'];
                }
              } else {
                var type = '' + num;
                if (tv != 0) {
                  type = 'B' + type;
                }
                return _this2._scoreMap[type] || 0;
              }
            }
            return 0;
          };
          var score = 0;
          var gridX = -1;
          var gridY = -1;
          for (var i = 0; i < this._sizeInGrid; ++i) {
            for (var j = 0; j < this._sizeInGrid; ++j) {
              if (!this.getGridData(i, j)) {
                for (var m = -1; m <= 1; ++m) {
                  for (var n = -1; n <= 1; ++n) {
                    if (!(m == 0 && n == 0)) {
                      var t = fnCheck(i, j, m, n);
                      if (t > score) {
                        score = t;
                        gridX = i;
                        gridY = j;
                      }
                    }
                  }
                }
              }
            }
          }
          return {
            score: score,
            gridX: gridX,
            gridY: gridY
          };
        };
        _createClass(GomokuBoardMgr, [{
          key: "sizeInGrid",
          get: function get() {
            return this._sizeInGrid;
          }
        }, {
          key: "gridData",
          get: function get() {
            return this._gridData;
          },
          set: function set(v) {
            this._gridData = v;
          }
        }]);
        return GomokuBoardMgr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GomokuTypeDef.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "61387Yup2hPOrg0rEWrfAFl", "GomokuTypeDef", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/headItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './ModuleDef.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, SpriteFrame, Node, director, Component, ResourceMgr, ModuleDef, UserMgr;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1b780tXJzxI1ZJds6EHCjfR", "headItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HeadItem = exports('HeadItem', (_dec = ccclass('HeadItem'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeadItem, _Component);
        function HeadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._data = void 0;
          _initializerDefineProperty(_this, "headImg", _descriptor, _assertThisInitialized(_this));
          _this._resObj = void 0;
          _this._isdestory = void 0;
          return _this;
        }
        var _proto = HeadItem.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
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
        _proto.initData = function initData(data) {
          var _this2 = this;
          this._isdestory = false;
          this._data = data;
          this.node.getChildByName("img_select").active = false;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, data.res + "/spriteFrame", SpriteFrame, function (error, resObj) {
            if (!error) {
              if (_this2._isdestory) return;
              _this2.headImg.spriteFrame = resObj;
              _this2._resObj = resObj;
              resObj.addRef();
            }
          });
          this.updateSeclet(UserMgr.inst.visualId);
          this.node.on(Node.EventType.TOUCH_END, this.onHeadClicked, this);
        };
        _proto.updateSeclet = function updateSeclet(visualId) {
          if (visualId == this._data.id) {
            this.node.getChildByName("img_select").active = true;
          } else {
            this.node.getChildByName("img_select").active = false;
          }
        };
        _proto.onDestroy = function onDestroy() {
          this._isdestory = true;
          this.headImg.spriteFrame = null;
          if (this._resObj) {
            this._resObj.decRef();
            this._resObj = null;
          }
        };
        _proto.onHeadClicked = function onHeadClicked() {
          director.emit("onHeadClicked", this._data);
        };
        return HeadItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "headImg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/holdem.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d6a2o8AVpPRLuDxWYyR9kN", "holdem", undefined);
      var e_role_status = exports('e_role_status', {
        Normal: 0,
        Match: 1,
        Play: 2,
        HOSTING: 3
      });

      /** 房间状态 */
      var e_room_status = exports('e_room_status', {
        Normal: 0,
        Waiting: 1,
        Ready: 2,
        Play: 3,
        Settle: 4,
        SettleFinish: 5
      });

      /** 玩家信息 */

      /** 重连游戏下发结构 */

      /** 下发给客户端的数据结构 */
      /** 开始游戏下发结构 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InfoMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0da8faFzO5IEYrvYvKShVn7", "InfoMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InfoMgr = exports('InfoMgr', (_dec = ccclass('InfoMgr'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InfoMgr, _Component);
        function InfoMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "giftTime", _descriptor, _assertThisInitialized(_this));
          _this.totalSeconds = 3660;
          // 总倒计时秒数
          _this.currentSeconds = void 0;
          return _this;
        }
        var _proto = InfoMgr.prototype;
        _proto.start = function start() {
          this.currentSeconds = this.totalSeconds;
          this.updateLabel(); // 初始化显示
          this.startCountdown();
        };
        _proto.startCountdown = function startCountdown() {
          var _this2 = this;
          // 每秒调用一次更新函数
          this.schedule(function () {
            _this2.currentSeconds--;
            _this2.updateLabel();
            if (_this2.currentSeconds <= 0) {
              _this2.unschedule(_this2.startCountdown); // 倒计时结束后停止调度
              _this2.giftTime.string = '时间到！';
            }
          }, 1, this.totalSeconds, 0);
        };
        _proto.updateLabel = function updateLabel() {
          // 格式化时间为 MM:SS 格式
          var minutes = Math.floor(this.currentSeconds % 3600 / 60);
          var seconds = this.currentSeconds % 60;
          var hours = Math.floor(this.totalSeconds / 3600);
          var formattedHours = hours < 10 ? '0' + hours : hours.toString();
          var formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
          var formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();
          this.giftTime.string = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
        };
        _proto.resetCountdown = function resetCountdown(seconds) {
          this.totalSeconds = seconds;
          this.currentSeconds = seconds;
          this.unschedule(this.startCountdown);
          this.updateLabel();
          this.startCountdown();
        };
        _proto.update = function update(deltaTime) {};
        return InfoMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "giftTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/labNumShow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Label, Component, Num;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1ca91a1d5JOpZj1gqV8zFEE", "labNumShow", undefined);
      var ccclass = _decorator.ccclass;
      var labNumShow = exports('labNumShow', (_dec = ccclass('labNumShow'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(labNumShow, _Component);
        function labNumShow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**小数点后几位展示 100为展示小数点后两位 */
          _this.pointNum = 100;
          /**输入值需*100 */
          _this._num = void 0;
          return _this;
        }
        var _proto = labNumShow.prototype;
        _proto.onLoad = function onLoad() {};
        /**输入目标值 */
        _proto.setRealNum = function setRealNum(v) {
          this.num = v * this.pointNum;
        }

        /**当前真实值 */;
        _proto.getRealNum = function getRealNum() {
          return Number(this.node.getComponent(Label).string);
        };
        _createClass(labNumShow, [{
          key: "num",
          get: function get() {
            return this._num;
          },
          set: function set(v) {
            this._num = v;
            this.node.getComponent(Label).string = Num.exchangeToThousands(1, v / 100);
          }
        }]);
        return labNumShow;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lampUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "862c67v3V1M/ZSm18GjN7R5", "lampUI", undefined);
      var ccclass = _decorator.ccclass;
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
          if (!this.hideArr) this.hideArr = [];
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
              var w = node.w * node.scale_x;
              if (w < this.node.w - 60) {
                node.x = 0;
                tween(node).delay(5).call(function () {
                  _this2.idx++;
                  _this2.showLine();
                }).start();
              } else {
                node.x = (w - this.node.w + 60) / 2;
                tween(node).delay(3).to(8, {
                  x: -(w + this.node.w) / 2
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

System.register("chunks:///_virtual/Language.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts', './LanguagePack.ts', './Singleton.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, sys, LanguageData, LanguagePack, Singleton, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      LanguagePack = module.LanguagePack;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3757cxZqLZObIdvP/gQ6Yuj", "Language", undefined);
      var KEY_Language = 'ui:language';

      /** 多语言管理器 */
      var LanguageManager = exports('LanguageManager', /*#__PURE__*/function (_Singleton) {
        _inheritsLoose(LanguageManager, _Singleton);
        // 默认语言

        function LanguageManager() {
          var _this;
          _this = _Singleton.call(this) || this;
          _this._languages = [sys.Language.CHINESE, sys.Language.ENGLISH];
          // 支持的语言
          _this._languagePack = new LanguagePack();
          // 语言包
          _this._defaultLanguage = sys.Language.CHINESE;
          LanguageData.current = localStorage.getItem(KEY_Language) || sys.Language.CHINESE;
          return _this;
        }
        //取单例
        var _proto = LanguageManager.prototype;
        _proto.addBundle = function addBundle(bundleName, callback) {
          LanguageData.bundle = bundleName;
          LanguageManager.ins.setLanguage(this.current, callback);
        };
        _proto.delBundle = function delBundle(bundleName, callback) {
          LanguageData.json = {};
          LanguageData.bundle = ModuleDef.BASIC;
          callback && callback(true);
        }

        /** 支持的多种语言列表 */;
        /**
         * 是否存在指定语言
         * @param lang  语言名
         * @returns 存在返回true,则否false
         */
        _proto.isExist = function isExist(lang) {
          return this.languages.indexOf(lang) > -1;
        }

        /** 获取下一个语种 */;
        _proto.getNextLang = function getNextLang() {
          var supportLangs = this.languages;
          var index = supportLangs.indexOf(LanguageData.current);
          return supportLangs[(index + 1) % supportLangs.length];
        };
        _proto.setLanguageByIndex = function setLanguageByIndex(index, callback) {
          var lan = this.languages[index];
          this.setLanguage(lan, callback);
        }

        /**
         * 改变语种，会自动下载对应的语种
         * @param language 语言名
         * @param callback 多语言资源数据加载完成回调
         */;
        _proto.setLanguage = function setLanguage(language, callback) {
          var _this2 = this;
          if (language == null || language == "") {
            language = this._defaultLanguage;
          } else {
            language = language.toLowerCase();
          }
          var index = this.languages.indexOf(language);
          if (index < 0) {
            console.log("\u5F53\u524D\u4E0D\u652F\u6301\u3010" + language + "\u3011\u8BED\u8A00\uFF0C\u5C06\u81EA\u52A8\u5207\u6362\u5230\u3010" + this._defaultLanguage + "\u3011\u8BED\u8A00");
            language = this._defaultLanguage;
          }

          // if (language === LanguageData.current) {
          //     callback && callback(false);
          //     return;
          // }

          this.loadLanguageAssets(language, function (lang) {
            LanguageData.current = language;
            localStorage.setItem(KEY_Language, language);
            _this2._languagePack.updateLanguage(language);
            callback && callback(true);
          });
        }

        /**
         * 根据data获取对应语种的字符
         * @param labId 
         * @param arr 
         */;
        _proto.getTextByTid = function getTextByTid(key) {
          return LanguageData.getLangByID(key);
        }

        /**
         * 下载语言包素材资源
         * 包括语言json配置和语言纹理包
         * @param lang 
         * @param callback 
         */;
        _proto.loadLanguageAssets = function loadLanguageAssets(lang, callback) {
          lang = lang.toLowerCase();
          return this._languagePack.loadLanguageAssets(lang, callback);
        }

        /**
         * 释放不需要的语言包资源
         * @param lang 
         */;
        _proto.releaseLanguageAssets = function releaseLanguageAssets(lang) {
          lang = lang.toLowerCase();
          // this._languagePack.releaseLanguageAssets(lang);
        };

        _createClass(LanguageManager, [{
          key: "languages",
          get: function get() {
            return this._languages;
          },
          set: function set(languages) {
            this._languages = languages;
          }

          /** 设置的当前语言列表中没有配置时，使用默认语言 */
        }, {
          key: "default",
          set: function set(lang) {
            this._defaultLanguage = lang || sys.Language.CHINESE;
          }

          /** 获取当前语种 */
        }, {
          key: "current",
          get: function get() {
            return LanguageData.current;
          }
        }, {
          key: "index",
          get: function get() {
            return this.languages.indexOf(LanguageData.current);
          }

          /** 语言包 */
        }, {
          key: "pack",
          get: function get() {
            return this._languagePack;
          }
        }], [{
          key: "ins",
          get: function get() {
            return LanguageManager.inst(LanguageManager);
          }
        }]);
        return LanguageManager;
      }(Singleton));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguageData.ts", ['cc', './Str.ts'], function (exports) {
  var cclegacy, Str;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Str = module.Str;
    }],
    execute: function () {
      cclegacy._RF.push({}, "27fb3sjD81JlIP2KFTSWUp4", "LanguageData", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-02-11 09:31:52
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-22 16:37:40
       */

      var LanguageData = exports('LanguageData', /*#__PURE__*/function () {
        function LanguageData() {}
        /** 
         * 通过多语言关键字获取语言文本 
         * 
         * 注：
         * 
         * 1、先获取language/json中的配置数据，如果没有到 则去basic下获取
         */
        LanguageData.getLangByID = function getLangByID(key) {
          var valueStr = key;
          if (this.json.hasOwnProperty(key)) {
            valueStr = this.json[key];
          } else {
            if (this.basicJson.hasOwnProperty(key)) {
              valueStr = this.basicJson[key];
            }
          }
          for (var _len = arguments.length, paramArr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            paramArr[_key - 1] = arguments[_key];
          }
          valueStr = Str.format.apply(Str, [valueStr].concat(paramArr));
          return valueStr;
        };
        return LanguageData;
      }());
      /** bundle */
      LanguageData.bundle = "";
      /** JSON资源目录 */
      LanguageData.path_json = "language/json";
      /** 纹理资源目录 */
      LanguageData.path_texture = "language/texture";
      /** SPINE资源目录 */
      LanguageData.path_spine = "language/spine";
      /** 当前语言 */
      LanguageData.current = "";
      /** 语言JSON配置数据 */
      LanguageData.json = {};
      /** 公用语言JSON配置数据 */
      LanguageData.basicJson = {};
      /** 语言EXCEL配置数据 */
      LanguageData.excel = null;
      /** TTF字体 */
      LanguageData.font = null;
      var LanguageType = exports('LanguageType', ['LanguageLabel', 'LanguageSprite']);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguageLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, CCString, Label, RichText, warn, Component, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      Label = module.Label;
      RichText = module.RichText;
      warn = module.warn;
      Component = module.Component;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class4, _class5, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "110c8vEd5NEPL/N9meGQnaX", "LanguageLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LangLabelParamsItem = exports('LangLabelParamsItem', (_dec = ccclass("LangLabelParamsItem"), _dec(_class = (_class2 = function LangLabelParamsItem() {
        _initializerDefineProperty(this, "key", _descriptor, this);
        _initializerDefineProperty(this, "value", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      /** 文本多语言 */
      var LanguageLabel = exports('LanguageLabel', (_dec2 = ccclass("LanguageLabel"), _dec3 = menu('OopsFramework/Language/LanguageLabel （文本多语言）'), _dec4 = property({
        type: LangLabelParamsItem,
        displayName: "params"
      }), _dec5 = property({
        type: LangLabelParamsItem,
        displayName: "params"
      }), _dec6 = property({
        serializable: true
      }), _dec7 = property({
        type: CCString,
        serializable: true
      }), _dec2(_class4 = _dec3(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LanguageLabel, _Component);
        function LanguageLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_params", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_dataID", _descriptor4, _assertThisInitialized(_this));
          /** 初始字体尺寸 */
          _this.initFontSize = 0;
          _this._needUpdate = false;
          return _this;
        }
        var _proto = LanguageLabel.prototype;
        /** 更新语言 */
        _proto.language = function language() {
          this._needUpdate = true;
        };
        _proto.onLoad = function onLoad() {
          this._needUpdate = true;
        }

        /**
         * 修改多语言参数，采用惰性求值策略
         * @param key 对于i18n表里面的key值
         * @param value 替换的文本
         */;
        _proto.setVars = function setVars(key, value) {
          var haskey = false;
          for (var i = 0; i < this._params.length; i++) {
            var element = this._params[i];
            if (element.key === key) {
              element.value = value;
              haskey = true;
            }
          }
          if (!haskey) {
            var ii = new LangLabelParamsItem();
            ii.key = key;
            ii.value = value;
            this._params.push(ii);
          }
          this._needUpdate = true;
        };
        _proto.update = function update() {
          if (this._needUpdate) {
            this.updateContent();
            this._needUpdate = false;
          }
        };
        _proto.updateContent = function updateContent() {
          var label = this.getComponent(Label);
          var richtext = this.getComponent(RichText);
          var font = LanguageData.font;
          if (label) {
            if (font) {
              label.font = font;
            }
            label.string = this.string;
            this.initFontSize = label.fontSize;
          } else if (richtext) {
            if (font) {
              richtext.font = font;
            }
            richtext.string = this.string;
            this.initFontSize = richtext.fontSize;
          } else {
            warn("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件");
          }
        };
        _createClass(LanguageLabel, [{
          key: "params",
          get: function get() {
            return this._params || [];
          },
          set: function set(value) {
            this._params = value;
            {
              this._needUpdate = true;
            }
          }
        }, {
          key: "dataID",
          get: function get() {
            return this._dataID || "";
          },
          set: function set(value) {
            this._dataID = value;
            {
              this._needUpdate = true;
            }
          }
        }, {
          key: "string",
          get: function get() {
            var _string = LanguageData.getLangByID(this._dataID);
            return _string;
          }
        }]);
        return LanguageLabel;
      }(Component), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_params", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "params", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "params"), _class5.prototype), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_dataID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "dataID", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "dataID"), _class5.prototype)), _class5)) || _class4) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguagePack.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts', './ModuleDef.ts', './ResLoader.ts', './Logger.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, director, JsonAsset, LanguageType, LanguageData, ModuleDef, resLoader, Logger;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      LanguageType = module.LanguageType;
      LanguageData = module.LanguageData;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      resLoader = module.resLoader;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2ffebyj59xIc4v4BZty8SDm", "LanguagePack", undefined);
      var LanguagePack = exports('LanguagePack', /*#__PURE__*/function () {
        function LanguagePack() {}
        var _proto = LanguagePack.prototype;
        /**
         * 刷新语言文字
         * @param lang 
         */
        _proto.updateLanguage = function updateLanguage(lang) {
          var rootNodes = director.getScene().children;
          var _loop = function _loop(i) {
            LanguageType.forEach(function (type) {
              var comps = rootNodes[i].getComponentsInChildren(type);
              for (var j = 0; j < comps.length; j++) {
                comps[j].language();
              }
            });
          };
          for (var i = 0; i < rootNodes.length; ++i) {
            _loop(i);
          }
        }

        /**
         * 下载对应语言包资源
         * @param lang 语言标识
         * @param callback 下载完成回调
         */;
        _proto.loadLanguageAssets = /*#__PURE__*/
        function () {
          var _loadLanguageAssets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(lang, callback) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.loadJson(lang);
                case 2:
                  callback(lang);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadLanguageAssets(_x, _x2) {
            return _loadLanguageAssets.apply(this, arguments);
          }
          return loadLanguageAssets;
        }() /** Json格式多语言资源 */;
        _proto.loadJson = function loadJson(lang) {
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
            var path, jsonAsset;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  path = LanguageData.path_json + "/" + lang;
                  _context2.next = 3;
                  return resLoader.loadAsync(LanguageData.bundle, path, JsonAsset);
                case 3:
                  jsonAsset = _context2.sent;
                  if (!jsonAsset) {
                    _context2.next = 10;
                    break;
                  }
                  if (LanguageData.bundle == ModuleDef.BASIC) {
                    //公用库
                    LanguageData.basicJson = jsonAsset.json;
                  } else {
                    LanguageData.json = jsonAsset.json;
                  }
                  Logger.logConfig(path, "下载语言包 json 资源");
                  resolve(null);
                  _context2.next = 12;
                  break;
                case 10:
                  resolve(null);
                  return _context2.abrupt("return");
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        };
        return LanguagePack;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguageSprite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts', './SubGameMgr.ts', './ModuleDef.ts', './ResourceMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCString, SpriteAtlas, Sprite, UITransform, SpriteFrame, Component, LanguageData, SubGameMgr, ModuleDef, ResourceMgr;
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
      CCString = module.CCString;
      SpriteAtlas = module.SpriteAtlas;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "11b96k/RIZF57Loehxyl6Hs", "LanguageSprite", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      /** 图片多语言 */
      var LanguageSprite = exports('LanguageSprite', (_dec = ccclass("LanguageSprite"), _dec2 = menu('OopsFramework/Language/LanguageSprite （图片多语言）'), _dec3 = property({
        tooltip: "是否为图集"
      }), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        type: CCString,
        serializable: true,
        tooltip: "图集名"
      }), _dec6 = property({
        serializable: true
      }), _dec7 = property({
        type: CCString,
        serializable: true,
        tooltip: "图片名"
      }), _dec8 = property({
        tooltip: "是否设置为图片原始资源大小"
      }), _dec9 = property({
        tooltip: "是否是公共包的资源"
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LanguageSprite, _Component);
        function LanguageSprite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isAtlas", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_spAtlasName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_dataID", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isRawSize", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isBasic", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LanguageSprite.prototype;
        _proto.start = function start() {
          this.updateSprite();
        }

        /** 更新语言 */;
        _proto.language = function language() {
          this.updateSprite();
        };
        _proto.updateSprite = function updateSprite() {
          var _this2 = this;
          var bundle = ModuleDef.BASIC;
          if (!this.isBasic && SubGameMgr.gameMgr && SubGameMgr.gameMgr.gameScene) {
            bundle = SubGameMgr.gameMgr.gameScene.bundle;
          }
          // 获取语言标记
          var path = "";
          if (this.isAtlas) {
            if (this.spAtlasName == "") {
              return;
            }
            path = "language/texture/" + LanguageData.current + "/" + this.spAtlasName;
            ResourceMgr.inst.loadResByModuleBundle(bundle, path, SpriteAtlas, function (err, data) {
              if (err) {
                console.error("[LanguageSprite] 资源不存在 " + path + "," + bundle);
              } else {
                var spcomp = _this2.getComponent(Sprite);
                spcomp.spriteFrame = data.getSpriteFrame(_this2.dataID);
                /** 修改节点为原始图片资源大小 */
                if (_this2.isRawSize) {
                  var _spcomp$getComponent;
                  //@ts-ignore
                  var rawSize = res._originalSize;
                  (_spcomp$getComponent = spcomp.getComponent(UITransform)) == null || _spcomp$getComponent.setContentSize(rawSize);
                }
              }
            });
          } else {
            if (this.dataID == "") {
              return;
            }
            path = "language/texture/" + LanguageData.current + "/" + this.dataID + "/spriteFrame";
            ResourceMgr.inst.loadResByModuleBundle(bundle, path, SpriteFrame, function (err, data) {
              if (err) {
                console.error("[LanguageSprite] 资源不存在 " + path + "," + bundle);
              } else {
                var spcomp = _this2.getComponent(Sprite);
                spcomp.spriteFrame = data;
                /** 修改节点为原始图片资源大小 */
                if (_this2.isRawSize) {
                  var _spcomp$getComponent2;
                  //@ts-ignore
                  var rawSize = data._originalSize;
                  (_spcomp$getComponent2 = spcomp.getComponent(UITransform)) == null || _spcomp$getComponent2.setContentSize(rawSize);
                }
              }
            });
          }
        };
        _createClass(LanguageSprite, [{
          key: "spAtlasName",
          get: function get() {
            return this._spAtlasName || "";
          },
          set: function set(value) {
            this._spAtlasName = value;
            {
              this.updateSprite();
            }
          }
        }, {
          key: "dataID",
          get: function get() {
            return this._dataID || "";
          },
          set: function set(value) {
            this._dataID = value;
            {
              this.updateSprite();
            }
          }
        }]);
        return LanguageSprite;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isAtlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_spAtlasName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spAtlasName", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "spAtlasName"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_dataID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dataID", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "dataID"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isRawSize", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isBasic", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Latency.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetGameServer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, Label, UIRenderer, Component, gameNet;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Label = module.Label;
      UIRenderer = module.UIRenderer;
      Component = module.Component;
    }, function (module) {
      gameNet = module.gameNet;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1af69tFXF1OSpK1tnOzhEIT", "Latency", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var COLORS = [new Color(0, 255, 0), new Color(255, 255, 0), new Color(255, 0, 0)];
      var Latency = exports('Latency', (_dec = ccclass('Latency'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Latency, _Component);
        function Latency() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblLatency", _descriptor, _assertThisInitialized(_this));
          _this._lastLatency = -1;
          return _this;
        }
        var _proto = Latency.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {
          if (this._lastLatency != gameNet.latency) {
            this._lastLatency = gameNet.latency;
            this.lblLatency.string = this._lastLatency + "ms";
            var colorIndex = 0;
            if (this._lastLatency <= 200) {
              colorIndex = 0;
            } else if (this._lastLatency <= 500) {
              colorIndex = 1;
            } else {
              colorIndex = 2;
            }
            var color = COLORS[colorIndex];
            this.node.children.forEach(function (child) {
              var uirenerer = child.getComponent(UIRenderer);
              uirenerer.color = color;
            });
          }
        };
        return Latency;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblLatency", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_SearchingRival.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "af08b+B8MFBcZUuQuLx/Ugz", "Layout_SearchingRival", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_SearchingRival = exports('Layout_SearchingRival', (_dec = ccclass('Layout_SearchingRival'), _dec2 = property(Label), _dec3 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_SearchingRival, _Component);
        function Layout_SearchingRival() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblTime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnCancel", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_SearchingRival;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnCancel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIAboutQLZ.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "36ba4T3I01EHI7usK7SASzr", "Layout_UIAboutQLZ", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIAboutQLZ = exports('Layout_UIAboutQLZ', (_dec = ccclass('Layout_UIAboutQLZ'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIAboutQLZ, _Component);
        function Layout_UIAboutQLZ() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIAboutQLZ;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIAnnouncement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Material, Component;
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
      Material = module.Material;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a39f0yN22BLCpFaUkjK7OYJ", "Layout_UIAnnouncement", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIAnnouncement = exports('Layout_UIAnnouncement', (_dec = ccclass('Layout_UIAnnouncement'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Material), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIAnnouncement, _Component);
        function Layout_UIAnnouncement() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maskNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "matAnnouncement", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIAnnouncement;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "matAnnouncement", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIChat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EditBox, Node, Prefab, Button, Component;
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
      EditBox = module.EditBox;
      Node = module.Node;
      Prefab = module.Prefab;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "4ce0eSz8SNHCK57T5JJNwDr", "Layout_UIChat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIChat = exports('Layout_UIChat', (_dec = ccclass('Layout_UIChat'), _dec2 = property(EditBox), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIChat, _Component);
        function Layout_UIChat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "inputChat", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatBar", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefabChatMsgItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatMsgs", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnExpand", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnFold", _descriptor6, _assertThisInitialized(_this));
          _this.cbInputChatReturn = void 0;
          _this.cbBtnSendChat = void 0;
          return _this;
        }
        var _proto = Layout_UIChat.prototype;
        _proto.onInputChatReturn = /*#__PURE__*/function () {
          var _onInputChatReturn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.cbInputChatReturn) {
                    this.cbInputChatReturn();
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onInputChatReturn() {
            return _onInputChatReturn.apply(this, arguments);
          }
          return onInputChatReturn;
        }();
        _proto.onBtnSendChat = /*#__PURE__*/function () {
          var _onBtnSendChat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.cbBtnSendChat) {
                    _context2.next = 3;
                    break;
                  }
                  _context2.next = 3;
                  return this.cbBtnSendChat();
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onBtnSendChat() {
            return _onBtnSendChat.apply(this, arguments);
          }
          return onBtnSendChat;
        }();
        return Layout_UIChat;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "inputChat", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chatBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabChatMsgItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chatMsgs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnExpand", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnFold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UICreateRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, EditBox, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      EditBox = module.EditBox;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b78fdfOmYlAK5enRdoHy/W8", "Layout_UICreateRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UICreateRoom = exports('Layout_UICreateRoom', (_dec = ccclass('Layout_UICreateRoom'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(EditBox), _dec5 = property(EditBox), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UICreateRoom, _Component);
        function Layout_UICreateRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnCreate", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edtName", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edtPassword", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UICreateRoom;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnCreate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edtName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "edtPassword", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIdailycheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIdailycheck.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, SpriteFrame, Label, Sprite, tween, ProgressBar, Component, UIdailycheck;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Sprite = module.Sprite;
      tween = module.tween;
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }, function (module) {
      UIdailycheck = module.UIdailycheck;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "ff1ceFXQbBMrbg9RFy8Rqem", "Layout_UIdailycheck", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIdailycheck = exports('Layout_UIdailycheck', (_dec = ccclass('Layout_UIdailycheck'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(Node), _dec6 = property({
        type: [Button],
        tooltip: '7天签到按钮数组'
      }), _dec7 = property(Node), _dec8 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIdailycheck, _Component);
        function Layout_UIdailycheck() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coins", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "days", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dailyButtons", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "processbar", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dailyCheckLabel", _descriptor7, _assertThisInitialized(_this));
          //每日签到
          _this.dailyCheck = void 0;
          _this.vip = true;
          return _this;
        }
        var _proto = Layout_UIdailycheck.prototype;
        _proto.start = function start() {
          this.dailyCheck = UIdailycheck.getInstance();
          for (var j = 0; j < this.dailyCheck.dailyData.checked_days.length; j++) {
            var temp = this.dailyCheck.dailyData.checked_days[j];
            this.days.children[temp - 1].getChildByName("mask").active = true;
            this.days.children[temp - 1].getChildByName("tick").active = true;
          }
          this.days.children[this.dailyCheck.dailyData.Now_week - 1].getChildByName("choosen").active = true;
        };
        _proto.dailyCheckBtn = function dailyCheckBtn(event, args) {
          // switch(args){
          //     case"1":
          var index = Number(args); // 将 args 转换为数字
          if (this.dailyCheck.dailyData.Now_statu == false) {
            console.log("today check");
            this.dailyCheck.dailyData.Now_statu = true;
            this.dailyCheck.dailyData.consecutiveDaysText = this.dailyCheck.dailyData.consecutiveDaysText + 1;
            if (this.vip) {
              this.bg.getChildByName("daily_rewards").children[0].getChildByName("vip").getChildByName("coins").getComponent(Sprite).spriteFrame = this.coins[index - 1];
              this.bg.getChildByName("daily_rewards").active = true;
              this.bg.getChildByName("daily_rewards").children[0].getChildByName("vip").active = true;
            } else {
              this.bg.getChildByName("daily_rewards").children[0].getChildByName("coins").getComponent(Sprite).spriteFrame = this.coins[index - 1];
              this.bg.getChildByName("daily_rewards").active = true;
              this.bg.getChildByName("daily_rewards").children[0].getChildByName("light").active = true;
              this.bg.getChildByName("daily_rewards").children[0].getChildByName("coins").active = true;
            }
            // tween(this.processbar.children[0]).by(0.5,{position: new Vec3(100,0,0)}).start();
            tween(this.processbar.getComponent(ProgressBar)).by(0.5, {
              progress: 1 / 30
            }).start();
            this.dailyButtons[index - 1].interactable = false;
            this.days.children[index - 1].getChildByName("choosen").active = false;
            this.days.children[index - 1].getChildByName("mask").active = true;
            this.days.children[index - 1].getChildByName("tick").active = true;
          }
          //     break;
          // }
        };

        _proto.closeReward = function closeReward() {
          this.bg.getChildByName("daily_rewards").active = false;
        };
        _proto.update = function update(deltaTime) {};
        return Layout_UIdailycheck;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coins", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "days", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dailyButtons", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "processbar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "dailyCheckLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIEnterRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, EditBox, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      EditBox = module.EditBox;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "1bd2bA//8VDkJwlh5ihEMza", "Layout_UIEnterRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIEnterRoom = exports('Layout_UIEnterRoom', (_dec = ccclass('Layout_UIEnterRoom'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(EditBox), _dec5 = property(EditBox), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIEnterRoom, _Component);
        function Layout_UIEnterRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnEnter", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edtId", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edtPassword", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIEnterRoom;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnEnter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edtId", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "edtPassword", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "a8590TDuu5Oi54nkih1D27u", "Layout_UIHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIHelp = exports('Layout_UIHelp', (_dec = ccclass('Layout_UIHelp'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIHelp, _Component);
        function Layout_UIHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btn_back", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "img_help", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_page", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "list_page", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "portraitNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIHelp;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn_back", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "img_help", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_page", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "list_page", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "portraitNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_title", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Prefab, Label, ScrollView, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "cc5efBZmD1IjJPDvfzhtHHM", "Layout_UIHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIHistory = exports('Layout_UIHistory', (_dec = ccclass('Layout_UIHistory'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(ScrollView), _dec24 = property(Node), _dec25 = property(Prefab), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIHistory, _Component);
        function Layout_UIHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "norecords", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "records", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_records_layout", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_page", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordItem", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_pre", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_next", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_page", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_cishu", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_touru", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jiesuan", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSelectClass", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSelectGame", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSelectDate", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_selectClass", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_selectGame", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_selectDate", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_dropdownselect", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_options_layout", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_options_layout_scrollview", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_mask_dropdownselect", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionitem", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_dropdownselectPosClass", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_dropdownselectPosGame", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_dropdownselectPosDate", _descriptor27, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIHistory;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "norecords", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "records", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_records_layout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_page", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "recordItem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btn_pre", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn_next", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_page", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_cishu", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_touru", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "txt_jiesuan", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnSelectClass", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnSelectGame", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnSelectDate", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_selectClass", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "txt_selectGame", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_selectDate", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "node_dropdownselect", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_options_layout", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_options_layout_scrollview", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_mask_dropdownselect", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "optionitem", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "node_dropdownselectPosClass", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "node_dropdownselectPosGame", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_dropdownselectPosDate", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIHistoryDetails.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Node, Prefab, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Node = module.Node;
      Prefab = module.Prefab;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "b494fRxxJNHx7+0obHdLp4B", "Layout_UIHistoryDetails", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIHistoryDetails = exports('Layout_UIHistoryDetails', (_dec = ccclass('Layout_UIHistoryDetails'), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIHistoryDetails, _Component);
        function Layout_UIHistoryDetails() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_date", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_records_layout", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_page", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordItem", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_pre", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_next", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_page", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIHistoryDetails;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_date", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_records_layout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_page", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "recordItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn_pre", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btn_next", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_page", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIHistoryDetailsItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "fb907zJqOBHb5/zOg1Wn3TW", "Layout_UIHistoryDetailsItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIHistoryDetailsItem = exports('Layout_UIHistoryDetailsItem', (_dec = ccclass('Layout_UIHistoryDetailsItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIHistoryDetailsItem, _Component);
        function Layout_UIHistoryDetailsItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_time", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_touru", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jiesuan", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_game", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_order", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bg", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Layout_UIHistoryDetailsItem.prototype;
        _proto.start = function start() {};
        _proto.init = function init(data) {
          this.txt_time.string = data.create_at;
          this.txt_touru.string = data.spend;
          this.txt_win.string = data.win;
          this.txt_jiesuan.string = data["final"];
          this.txt_game.string = data.game;
          this.txt_order.string = data.sn;
        }
        /**设置背景是否可见 */;
        _proto.setBgShow = function setBgShow(value) {
          this.node_bg.active = value;
        };
        return Layout_UIHistoryDetailsItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_touru", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_jiesuan", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_game", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_order", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_bg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIHistoryItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIHistoryDetails.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Node, Component, UIHistoryDetails;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      UIHistoryDetails = module.UIHistoryDetails;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "cba33gvgkxIN4869nk6Rasw", "Layout_UIHistoryItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIHistoryItem = exports('Layout_UIHistoryItem', (_dec = ccclass('Layout_UIHistoryItem'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIHistoryItem, _Component);
        function Layout_UIHistoryItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btn_go", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_date", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_cishu", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_touru", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jiesuan", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bg", _descriptor7, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = Layout_UIHistoryItem.prototype;
        _proto.start = function start() {
          this.btn_go.node.on(Node.EventType.TOUCH_END, this.onItemClick, this);
        };
        _proto.init = function init(data) {
          this._data = data;
          this.txt_date.string = data.create_at;
          this.txt_cishu.string = data.cishu;
          this.txt_touru.string = data.spend;
          this.txt_win.string = data.win;
          this.txt_jiesuan.string = data["final"];
        }
        /**设置背景是否可见 */;
        _proto.setBgShow = function setBgShow(value) {
          this.node_bg.active = value;
        }
        /**点击明细 */;
        _proto.onItemClick = function onItemClick() {
          tgx.UIMgr.inst.showUI(UIHistoryDetails, null, this, this._data);
        };
        return Layout_UIHistoryItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn_go", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_date", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_cishu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_touru", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_jiesuan", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_bg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIHistoryOptionItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0cf30uOIq9LJL2lbfeKX5wj", "Layout_UIHistoryOptionItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIHistoryOptionItem = exports('Layout_UIHistoryOptionItem', (_dec = ccclass('Layout_UIHistoryOptionItem'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIHistoryOptionItem, _Component);
        function Layout_UIHistoryOptionItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_title", _descriptor, _assertThisInitialized(_this));
          _this._data = void 0;
          _this._cb = void 0;
          _this._type = void 0;
          return _this;
        }
        var _proto = Layout_UIHistoryOptionItem.prototype;
        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_END, this.onItemClick, this);
        };
        _proto.init = function init(data, type, cb) {
          this._data = data;
          if (type == 3) {
            this.txt_title.string = data.name;
          } else if (type == 1) {
            this.txt_title.string = LanguageData.getLangByID(data.type);
          } else if (type == 2) {
            this.txt_title.string = LanguageData.getLangByID(data.language);
          }
          this._cb = cb;
          this._type = type;
        };
        _proto.onItemClick = function onItemClick() {
          if (this._cb) {
            this._cb(this._data, this._type);
          }
        };
        return Layout_UIHistoryOptionItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UILanguage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, ToggleContainer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      ToggleContainer = module.ToggleContainer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "8237fYlTclCuKCgxD6B2hfu", "Layout_UILanguage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UILanguage = exports('Layout_UILanguage', (_dec = ccclass('Layout_UILanguage'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(ToggleContainer), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UILanguage, _Component);
        function Layout_UILanguage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnMaskBg", _descriptor, _assertThisInitialized(_this));
          //背景遮罩
          _initializerDefineProperty(_this, "btnClose", _descriptor2, _assertThisInitialized(_this));
          //关闭按钮
          _initializerDefineProperty(_this, "toggleLanguage", _descriptor3, _assertThisInitialized(_this));
          //语言单选框
          _initializerDefineProperty(_this, "btnLanguage", _descriptor4, _assertThisInitialized(_this));
          //选择语言按钮
          _initializerDefineProperty(_this, "btnCancel", _descriptor5, _assertThisInitialized(_this));
          return _this;
        } //取消
        return Layout_UILanguage;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnMaskBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggleLanguage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnLanguage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnCancel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UILogin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "af72drZCRFLQbk6NkZcf26t", "Layout_UILogin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UILogin = exports('Layout_UILogin', (_dec = ccclass('Layout_UILogin'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UILogin, _Component);
        function Layout_UILogin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "edtAccount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edtPassword", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRegister", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnLogin", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UILogin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "edtAccount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "edtPassword", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnRegister", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnLogin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIMail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "70204GcKJxJIq+jjpt3aLx6", "Layout_UIMail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIMail = exports('Layout_UIMail', (_dec = ccclass('Layout_UIMail'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIMail, _Component);
        function Layout_UIMail() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMarkAllAsRead", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnDelete", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClearAll", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptyTips", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mailRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblContent", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "titleLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detail", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Read", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIMail;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnMarkAllAsRead", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnDelete", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnClearAll", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "emptyTips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mailRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "detail", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Read", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UINotice.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ToggleContainer, Label, Sprite, Button, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ToggleContainer = module.ToggleContainer;
      Label = module.Label;
      Sprite = module.Sprite;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "4975980UjFJY4ZFgb6KMMeB", "Layout_UINotice", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UINotice = exports('Layout_UINotice', (_dec = ccclass('Layout_UINotice'), _dec2 = property(ToggleContainer), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Button), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UINotice, _Component);
        function Layout_UINotice() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprContent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptyTips", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UINotice;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "emptyTips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UIRegister.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "8ad57fnTTJLc4z/Xbn/Vm6F", "Layout_UIRegister", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIRegister = exports('Layout_UIRegister', (_dec = ccclass('Layout_UIRegister'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(EditBox), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIRegister, _Component);
        function Layout_UIRegister() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "edtAccount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edtPassword", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edtPasswordConfirm", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRegister", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBackToLogin", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIRegister;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "edtAccount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "edtPassword", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edtPasswordConfirm", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnRegister", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnBackToLogin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Layout_UISettings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Language.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, ProgressBar, Slider, Toggle, Node, Label, Component, LanguageManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      ProgressBar = module.ProgressBar;
      Slider = module.Slider;
      Toggle = module.Toggle;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      LanguageManager = module.LanguageManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "b1f86h+cLZP6LEvgvQXSe45", "Layout_UISettings", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UISettings = exports('Layout_UISettings', (_dec = ccclass('Layout_UISettings'), _dec2 = property(Button), _dec3 = property(ProgressBar), _dec4 = property(ProgressBar), _dec5 = property(Slider), _dec6 = property(Slider), _dec7 = property(Toggle), _dec8 = property(Button), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property([Label]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UISettings, _Component);
        function Layout_UISettings() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBarMusic", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBarEffect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sliderMusic", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sliderEffect", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chkFPS", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSelectLanguage", _descriptor7, _assertThisInitialized(_this));
          //选择语言按钮
          _initializerDefineProperty(_this, "btnSelect", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nowLanguage", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nowLanguageCopy", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choosenLanguages", _descriptor11, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Layout_UISettings.prototype;
        _proto.activeBtnSelect = function activeBtnSelect() {
          this.btnSelect.active = true;
          this.nowLanguageCopy.string = this.nowLanguage.string;
          for (var i = 0; i < LanguageManager.ins.languages.length; i++) {
            if (LanguageManager.ins.languages[i] == "zh") {
              this.choosenLanguages[i].string = "中文";
            } else if (LanguageManager.ins.languages[i] == "en") {
              this.choosenLanguages[i].string = "  English";
            }
          }
        };
        _proto.start = function start() {
          var cur_language = LanguageManager.ins.current;
          if (cur_language == "zh") {
            this.nowLanguage.string = "中文";
          }
          if (cur_language == "en") {
            this.nowLanguage.string = "English";
          }
          console.log(LanguageManager.ins.languages);
          // this.progressBarMusic.node.on('progress-changed', this.onProgressChanged, this);
          // this.schedule(() => {
          //     this.progressBarMusic.progress = Math.random();
          //     }, 1);
        };

        _proto.chooseLanguage = function chooseLanguage(event, args) {
          LanguageManager.ins.setLanguageByIndex(args);
          if (args == "0") {
            this.nowLanguage.string = "中文";
            this.nowLanguageCopy.string = "中文";
          }
          if (args == "1") {
            this.nowLanguage.string = "English";
            this.nowLanguageCopy.string = "English";
          }
          this.btnSelect.active = false;
        };
        _proto.back = function back() {
          this.btnSelect.active = false;
        };
        return Layout_UISettings;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBarMusic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressBarEffect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sliderMusic", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sliderEffect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chkFPS", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnSelectLanguage", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnSelect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nowLanguage", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nowLanguageCopy", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "choosenLanguages", [_dec12], {
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

System.register("chunks:///_virtual/Layout_UIShop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Prefab, Label, Color, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      Color = module.Color;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "d3a10/N6+NFRI3UnQLsXh+y", "Layout_UIShop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIShop = exports('Layout_UIShop', (_dec = ccclass('Layout_UIShop'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property({
        type: [Node],
        tooltip: '左侧按钮数组'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIShop, _Component);
        function Layout_UIShop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnClose", _descriptor, _assertThisInitialized(_this));
          //关闭窗口按钮
          _initializerDefineProperty(_this, "right", _descriptor2, _assertThisInitialized(_this));
          //原先挂载商品的节点（目前不需要）
          _initializerDefineProperty(_this, "bginfo", _descriptor3, _assertThisInitialized(_this));
          //挂载界面的空节点
          _initializerDefineProperty(_this, "merchandise", _descriptor4, _assertThisInitialized(_this));
          //商品预制体 (目前不需要)
          _initializerDefineProperty(_this, "recommend", _descriptor5, _assertThisInitialized(_this));
          //推荐
          _initializerDefineProperty(_this, "chongzhi", _descriptor6, _assertThisInitialized(_this));
          //充值
          _initializerDefineProperty(_this, "gift", _descriptor7, _assertThisInitialized(_this));
          //礼品
          _initializerDefineProperty(_this, "leichong", _descriptor8, _assertThisInitialized(_this));
          //累充
          _initializerDefineProperty(_this, "leftButtons", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Layout_UIShop.prototype;
        _proto.choosebtn = function choosebtn(event, args) {
          switch (args) {
            //存在冗余代码 后续修改
            case "1":
              for (var i = 0; i < this.bginfo.children.length; i++) {
                this.bginfo.children[i].destroy(); //先清空挂预制体节点的所有子节点
              }

              for (var _i = 0; _i < this.leftButtons.length; _i++) {
                if (_i == 0) {
                  //设置商店左侧按钮交互；大小；字体颜色
                  this.leftButtons[_i].getComponent(Button).interactable = false;
                  this.leftButtons[_i].setScale(1.2, 1.2);
                  this.leftButtons[_i].getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255);
                } else {
                  this.leftButtons[_i].getComponent(Button).interactable = true;
                  this.leftButtons[_i].setScale(1, 1);
                  this.leftButtons[_i].getChildByName("Label").getComponent(Label).color = new Color(118, 118, 118);
                }
              }
              this.bginfo.addChild(instantiate(this.recommend));
              break;
            case "2":
              //与上同一逻辑
              for (var _i2 = 0; _i2 < this.bginfo.children.length; _i2++) {
                this.bginfo.children[_i2].destroy();
              }
              for (var _i3 = 0; _i3 < this.leftButtons.length; _i3++) {
                if (_i3 == 1) {
                  this.leftButtons[_i3].getComponent(Button).interactable = false;
                  this.leftButtons[_i3].setScale(1.2, 1.2);
                  this.leftButtons[_i3].getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255);
                } else {
                  this.leftButtons[_i3].getComponent(Button).interactable = true;
                  this.leftButtons[_i3].setScale(1, 1);
                  this.leftButtons[_i3].getChildByName("Label").getComponent(Label).color = new Color(118, 118, 118);
                }
              }
              this.bginfo.addChild(instantiate(this.chongzhi));
              break;
            case "3":
              for (var _i4 = 0; _i4 < this.bginfo.children.length; _i4++) {
                this.bginfo.children[_i4].destroy();
              }
              for (var _i5 = 0; _i5 < this.leftButtons.length; _i5++) {
                if (_i5 == 2) {
                  this.leftButtons[_i5].getComponent(Button).interactable = false;
                  this.leftButtons[_i5].setScale(1.2, 1.2);
                  this.leftButtons[_i5].getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255);
                } else {
                  this.leftButtons[_i5].getComponent(Button).interactable = true;
                  this.leftButtons[_i5].setScale(1, 1);
                  this.leftButtons[_i5].getChildByName("Label").getComponent(Label).color = new Color(118, 118, 118);
                }
              }
              this.bginfo.addChild(instantiate(this.gift));
              break;
            case "4":
              for (var _i6 = 0; _i6 < this.bginfo.children.length; _i6++) {
                this.bginfo.children[_i6].destroy();
              }
              for (var _i7 = 0; _i7 < this.leftButtons.length; _i7++) {
                if (_i7 == 3) {
                  this.leftButtons[_i7].getComponent(Button).interactable = false;
                  this.leftButtons[_i7].setScale(1.2, 1.2);
                  this.leftButtons[_i7].getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255);
                } else {
                  this.leftButtons[_i7].getComponent(Button).interactable = true;
                  this.leftButtons[_i7].setScale(1, 1);
                  this.leftButtons[_i7].getChildByName("Label").getComponent(Label).color = new Color(118, 118, 118);
                }
              }
              this.bginfo.addChild(instantiate(this.leichong));
              break;
          }
        };
        _proto.update = function update(deltaTime) {};
        return Layout_UIShop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bginfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "merchandise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "recommend", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chongzhi", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gift", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "leichong", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "leftButtons", [_dec10], {
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

System.register("chunks:///_virtual/Layout_UITask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ToggleContainer, Node, Button, Prefab, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ToggleContainer = module.ToggleContainer;
      Node = module.Node;
      Button = module.Button;
      Prefab = module.Prefab;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "e630e+mzoFBxriwCtGX2sxQ", "Layout_UITask", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UITask = exports('Layout_UITask', (_dec = ccclass('Layout_UITask'), _dec2 = property(ToggleContainer), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property([Prefab]), _dec8 = property([Prefab]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UITask, _Component);
        function Layout_UITask() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvas", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHelp", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frameList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvasList", _descriptor7, _assertThisInitialized(_this));
          return _this;
        } // @property(Prefab)
        // btnClose: Button;
        return Layout_UITask;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnHelp", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "frameList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "canvasList", [_dec8], {
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

System.register("chunks:///_virtual/Layout_UIUserInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Sprite, Label, ToggleContainer, Node, Prefab, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Sprite = module.Sprite;
      Label = module.Label;
      ToggleContainer = module.ToggleContainer;
      Node = module.Node;
      Prefab = module.Prefab;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "a406b0iN1pF/aoNHHbjyjkk", "Layout_UIUserInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Layout_UIUserInfo = exports('Layout_UIUserInfo', (_dec = ccclass('Layout_UIUserInfo'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(ToggleContainer), _dec9 = property(Node), _dec10 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIUserInfo, _Component);
        function Layout_UIUserInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnMaskBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprHeadImg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblId", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGender", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleGenderOptions", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "heads", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headItem", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIUserInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnMaskBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprHeadImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblId", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblGender", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "toggleGenderOptions", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "heads", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "headItem", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/leichongMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Node, Label, SpriteFrame, Sprite, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "e7709tzEM9B3bM9fJALJQtR", "leichongMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 累充活动数据接口
       */

      var leichongMgr = exports('leichongMgr', (_dec = ccclass('leichongMgr'), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(leichongMgr, _Component);
        function leichongMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressbar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPos", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moneyNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tag", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftstate", _descriptor5, _assertThisInitialized(_this));
          _this.progress = void 0;
          _this.rechargeData = void 0;
          return _this;
        }
        var _proto = leichongMgr.prototype;
        _proto.start = function start() {
          this.rechargeData = {
            currentAmount: 7788,
            //累充金额
            claimedTargetIds: 3,
            //当前领取进度
            next: 4,
            //下一个领取进度
            status: 1 //活动状态 目前没有代码对此读取或修改
          };

          this.progress = (this.rechargeData.claimedTargetIds - 1) / 6; //除 6 是因为进度条分成6段 可以看商店累充界面  -1是因为数组下标从0开始
          this.progressbar.progress = this.progress;
          this.tag[this.rechargeData.next - 1].getComponent(Sprite).spriteFrame = this.giftstate[0]; //奖励图标切换
          this.tag[this.rechargeData.next - 1].getChildByName("top").active = true;
          for (var i = 0; i < this.rechargeData.claimedTargetIds; i++) {
            this.tag[i].getChildByName("done").active = true;
          }
          this.moneyNum.string = this.rechargeData.currentAmount.toString();
          this.playerPos.position = this.tag[this.rechargeData.claimedTargetIds - 1].position;
        };
        _proto.claimReward = function claimReward() {
          var _this2 = this;
          //领取奖励函数
          tween(this.playerPos) //领取动画
          .to(3, {
            position: this.tag[this.rechargeData.next - 1].position
          }).call(function () {
            //领取回调，图标从可领取变成不可领取等
            _this2.tag[_this2.rechargeData.next - 1].getChildByName("top").active = false;
            _this2.tag[_this2.rechargeData.next - 1].getComponent(Sprite).spriteFrame = _this2.giftstate[1];
            _this2.tag[_this2.rechargeData.next - 1].getChildByName("done").active = true;
          }).start();
          tween(this.progressbar).to(3, {
            progress: this.rechargeData.claimedTargetIds / 6
          }).start();
        };
        _proto.update = function update(deltaTime) {};
        return leichongMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressbar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moneyNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tag", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "giftstate", [_dec6], {
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

System.register("chunks:///_virtual/ListLayout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, CCFloat, ScrollView, instantiate, Vec3, Component, Node;
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
      CCFloat = module.CCFloat;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
      Node = module.Node;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "79d62cosJ5GybTTah0zv2pi", "ListLayout", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ListLayout = exports('default', (_dec = ccclass('ListLayout'), _dec2 = property({
        type: CCFloat,
        displayName: "Top Padding"
      }), _dec3 = property(ScrollView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListLayout, _Component);
        function ListLayout() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "PaddingTop", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CellWidth", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CellHeight", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SpaceX", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SpaceY", _descriptor6, _assertThisInitialized(_this));
          _this._cellPrefab = void 0;
          _this._dataCount = 0;
          _this._onInitializeItem = void 0;
          _this._cellItems = void 0;
          _this._unusedCellItems = void 0;
          _this._uiTrans = void 0;
          _this._scrollViewHeight = void 0;
          _this._scrollViewWidth = void 0;
          _this._getHowMuchOutOfBoundaryOld = void 0;
          _this._autoMoveToIndex = void 0;
          _this._isAutoMove = void 0;
          _this._isAutoMoveUp = void 0;
          _this._speed = 10;
          _this._isScrollingToBottom = false;
          return _this;
        }
        var _proto = ListLayout.prototype;
        _proto.Init = /*#__PURE__*/function () {
          var _Init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cellPrefab, onInitializeItem) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.ScrollView.node.on(ScrollView.EventType.SCROLLING, this.OnScrolling, this);
                  this.ScrollView.node.on(ScrollView.EventType.SCROLL_ENDED, this.OnScrollEnd, this);
                  this.ScrollView.node.on(Node.EventType.TOUCH_START, this.OnTouchBegan, this);
                  this.ScrollView.node.on(Node.EventType.SIZE_CHANGED, this.OnNodeSizeChanged, this, true);
                  this._getHowMuchOutOfBoundaryOld = this.ScrollView["_getHowMuchOutOfBoundary"];
                  this.ScrollView["_getHowMuchOutOfBoundary"] = this._getHowMuchOutOfBoundaryNew.bind(this);
                  this._cellPrefab = cellPrefab;
                  this._onInitializeItem = onInitializeItem;
                  this._cellItems = [];
                  this._unusedCellItems = [];
                  this._scrollViewHeight = this.ScrollView.node._uiProps.uiTransformComp.height;
                  this._scrollViewWidth = this.ScrollView.node._uiProps.uiTransformComp.width;
                  this._uiTrans = this.node._uiProps.uiTransformComp;
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function Init(_x, _x2) {
            return _Init.apply(this, arguments);
          }
          return Init;
        }();
        _proto._getHowMuchOutOfBoundaryNew = function _getHowMuchOutOfBoundaryNew() {
          var outOfBoundary = this._getHowMuchOutOfBoundaryOld.call(this.ScrollView);
          if (outOfBoundary.y > 0) {
            if (!this._cellItems[0] || this._cellItems[0].DataIndex != 0) {
              outOfBoundary.y = 0;
            }
          } else if (outOfBoundary.y < 0) {
            var lastCellItem = this._cellItems[this._cellItems.length - 1];
            if (!lastCellItem || lastCellItem.DataIndex != this._dataCount - 1) {
              outOfBoundary.y = 0;
            }
          }
          return outOfBoundary;
        }

        /**
         * 
         * @param dataCount 数据长度
         * @param scrollToIndex 行号从0开始
         */;
        _proto.Render = function Render(dataCount, scrollToIndex) {
          if (scrollToIndex === void 0) {
            scrollToIndex = 0;
          }
          this.ScrollView.stopAutoScroll();
          this._dataCount = dataCount;
          this.ResetAssets();
          this.CalculateCellItems(scrollToIndex);
        };
        _proto.CalculateCellItems = function CalculateCellItems(scrollToIndex) {
          scrollToIndex = Math.min(scrollToIndex, this._dataCount - 1);
          scrollToIndex = Math.max(scrollToIndex, 0);
          this.node.setPosition(0, 0, 0);
          this._uiTrans.anchorY = 0.5;
          var viewEndY = -this._scrollViewHeight;
          var dataIndex = scrollToIndex;
          var viewStartY = this.GetAnchorTopHeight(this.node.parent);
          viewEndY = -this.GetAnchorBottomHeight(this.node.parent);

          //从上到下
          var cellItem;
          var itemMinY = viewStartY;
          while (dataIndex < this._dataCount && itemMinY > viewEndY) {
            cellItem = this.CreateVirtualCellItem();
            this._cellItems.push(cellItem);
            cellItem.DataIndex = dataIndex++;
            this.UpdateItem(cellItem);
            var tempSpaceY = 0;
            this.SetItemPosBehind(cellItem, itemMinY + tempSpaceY);
            itemMinY = this.GetItemBottomY(cellItem.Node);
          }
          var itemMaxY = viewStartY;

          //从下到上
          dataIndex = scrollToIndex;
          var needScrollToBottom = false;
          while (dataIndex > 0 && itemMaxY - itemMinY < this._scrollViewHeight) {
            cellItem = this.CreateVirtualCellItem();
            this._cellItems.unshift(cellItem);
            cellItem.DataIndex = --dataIndex;
            this.UpdateItem(cellItem);
            this.SetItemPosBefore(cellItem, itemMaxY + this.SpaceY);
            itemMaxY = this.GetItemTopY(cellItem.Node);
            cellItem.Node.name = cellItem.Y.toString();
            needScrollToBottom = true;
          }
          this.SetLayoutHeight(itemMinY, itemMaxY);
          if (needScrollToBottom && this._uiTrans.height >= this.ScrollView.node._uiProps.uiTransformComp.height) {
            this.ScrollView.scrollToBottom();
          }
        };
        _proto.OnTouchBegan = function OnTouchBegan() {
          this._isAutoMove = false;
        };
        _proto.OnNodeSizeChanged = function OnNodeSizeChanged() {
          // this.ScrollView.enabled = false;
          // for (let index = 0; index < this.ScrollWidgets.length; index++) {
          // 	this.ScrollWidgets[index].updateAlignment();
          // }
          // this.calculateScollViewBoundary();
          // this.ListLayout.OnSizeChange();
          // this.ScrollView.enabled = true;
        };
        _proto.OnSizeChange = function OnSizeChange() {
          this._scrollViewHeight = this.ScrollView.node._uiProps.uiTransformComp.height;
          this._scrollViewWidth = this.ScrollView.node._uiProps.uiTransformComp.width;
          this.OnScrolling();
        };
        _proto.OnScrolling = function OnScrolling() {
          var offsetY = this.ScrollView.getScrollOffset().y;
          var viewStartY = this.GetAnchorTopHeight(this.node) - offsetY;
          var viewEndY = viewStartY - this._scrollViewHeight;
          var firstDataIndex = 0;
          var lastDataIndex = 0;
          var itemMinY = 0;
          var itemMaxY = 0;
          var needFillTop = true;
          var needFillBottom = true;
          var canRemoveTopCount = 0;
          var canRemoveBottomCount = 0;
          var needRefreshHeight = false;
          for (var index = 0; index < this._cellItems.length; index++) {
            var element = this._cellItems[index];
            itemMinY = this.GetItemBottomY(element.Node);
            if (itemMinY > viewStartY) {
              if (index == 0) {
                itemMaxY = this.GetItemTopY(element.Node);
              }
              canRemoveTopCount++;
              needFillTop = false;
            } else if (needFillTop) {
              itemMaxY = this.GetItemTopY(element.Node);
              needFillTop = itemMaxY + this.SpaceY < viewStartY;
              firstDataIndex = element.DataIndex;
              break;
            } else {
              break;
            }
          }
          for (var _index = this._cellItems.length - 1; _index >= 0; _index--) {
            var _element = this._cellItems[_index];
            var topY = this.GetItemTopY(_element.Node);
            if (topY < viewEndY) {
              if (_index == this._cellItems.length - 1) {
                itemMinY = this.GetItemBottomY(_element.Node);
              }
              canRemoveBottomCount++;
              needFillBottom = false;
            } else if (needFillBottom) {
              itemMinY = this.GetItemBottomY(_element.Node);
              needFillBottom = itemMinY - this.SpaceY > viewEndY;
              lastDataIndex = _element.DataIndex;
              break;
            } else {
              break;
            }
          }
          if (needFillBottom) {
            while (lastDataIndex < this._dataCount - 1 && itemMinY - this.SpaceY > viewEndY) {
              needRefreshHeight = true;
              var cellItem = void 0;
              if (canRemoveTopCount > 0) {
                cellItem = this._cellItems.shift();
                itemMaxY = itemMaxY - cellItem.Node._uiProps.uiTransformComp.height - this.SpaceY;
                canRemoveTopCount--;
                this._cellItems.push(cellItem);
              } else {
                cellItem = this.CreateVirtualCellItem();
                this._cellItems.push(cellItem);
              }
              cellItem.DataIndex = ++lastDataIndex;
              this.UpdateItem(cellItem);
              var tempSpaceY = cellItem.DataIndex == 0 ? 0 : this.SpaceY;
              this.SetItemPosBehind(cellItem, itemMinY - tempSpaceY);
              itemMinY = this.GetItemBottomY(cellItem.Node);
            }
          }
          if (needFillTop) {
            while (firstDataIndex > 0 && itemMaxY + this.SpaceY < viewStartY) {
              needRefreshHeight = true;
              var _cellItem = void 0;
              if (canRemoveBottomCount > 0) {
                _cellItem = this._cellItems.pop();
                itemMinY += _cellItem.Node._uiProps.uiTransformComp.height + this.SpaceY;
                canRemoveTopCount--;
                this._cellItems.unshift(_cellItem);
              } else {
                _cellItem = this.CreateVirtualCellItem();
                this._cellItems.unshift(_cellItem);
              }
              _cellItem.DataIndex = --firstDataIndex;
              this.UpdateItem(_cellItem);
              this.SetItemPosBefore(_cellItem, itemMaxY + this.SpaceY);
              itemMaxY = this.GetItemTopY(_cellItem.Node);
            }
          }
          if (needRefreshHeight) {
            this.SetLayoutHeight(itemMinY, itemMaxY);
          }
        };
        _proto.SetLayoutHeight = function SetLayoutHeight(itemMinY, itemMaxY) {
          itemMinY -= this.SpaceY - 1;
          var height = itemMaxY - itemMinY;
          this._uiTrans.anchorY = -itemMinY / height;
          this._uiTrans.height = height;
        };
        _proto.CreateVirtualCellItem = function CreateVirtualCellItem() {
          if (this._unusedCellItems.length > 0) {
            var cellItem = this._unusedCellItems.pop();
            if (cellItem.Node) {
              cellItem.Node.active = true;
            }
            return cellItem;
          } else {
            var _cellItem2 = {
              IsInit: false,
              DataIndex: 0,
              NodeIndex: this.node.children.length,
              X: 0,
              Y: 0,
              Node: instantiate(this._cellPrefab)
            };
            _cellItem2.Node.parent = this.node;
            _cellItem2.Node.active = true;
            return _cellItem2;
          }
        };
        _proto.RecyclVirtualCellItem = function RecyclVirtualCellItem(item) {
          this._unusedCellItems.push(item);
          item.IsInit = false;
          if (item.Node) {
            item.Node.active = false;
          }
        };
        _proto.AddDataCount = function AddDataCount(count) {
          this._dataCount += count;
        }

        //**在开始位置插入数据 */
        ;

        _proto.InsertAtBeginning = function InsertAtBeginning(count) {
          this._dataCount += count;
          for (var index = 0; index < this._cellItems.length; index++) {
            var element = this._cellItems[index];
            element.DataIndex += count;
          }
        };
        _proto.GetLastDataIndex = function GetLastDataIndex() {
          if (this._cellItems[this._cellItems.length - 1]) {
            return this._cellItems[this._cellItems.length - 1].DataIndex;
          }
          return 0;
        };
        _proto.ScrollToIndex = function ScrollToIndex(dataIndex, speed) {
          if (speed === void 0) {
            speed = 50;
          }
          this.ScrollView.stopAutoScroll();
          this._isScrollingToBottom = false;
          this._speed = speed;
          var startIndex = 0;
          if (this._cellItems[0]) {
            startIndex = this._cellItems[0].DataIndex;
          }
          if (dataIndex < startIndex) {
            this._isAutoMove = true;
            this._isAutoMoveUp = false;
            this._autoMoveToIndex = dataIndex;
            dataIndex = Math.min(dataIndex, 0);
            return;
          }
          var endIndex = 0;
          if (this._cellItems[this._cellItems.length - 1]) {
            endIndex = this._cellItems[this._cellItems.length - 1].DataIndex;
          }
          if (dataIndex > endIndex) {
            this._isAutoMove = true;
            this._isAutoMoveUp = true;
            this._isScrollingToBottom = true;
            dataIndex = Math.min(dataIndex, this._dataCount - 1);
            this._autoMoveToIndex = dataIndex;
            return;
          }
        };
        _proto.ProcessAutoScrolling = function ProcessAutoScrolling() {
          if (this._isAutoMoveUp) {
            var endIndex = 0;
            if (this._cellItems[this._cellItems.length - 1]) {
              endIndex = this._cellItems[this._cellItems.length - 1].DataIndex;
            }
            if (endIndex >= this._autoMoveToIndex) {
              this._isAutoMove = false;
              this.ScrollView.scrollToBottom(0.5);
            } else {
              this.ScrollView["_moveContent"](new Vec3(0, this._speed, 0), this.ScrollView["isOutOfBoundaryNew"]);
              this.OnScrolling();
            }
          } else {
            var startIndex = 0;
            if (this._cellItems[0]) {
              startIndex = this._cellItems[0].DataIndex;
            }
            if (startIndex <= this._autoMoveToIndex) {
              this._isAutoMove = false;
              this.ScrollView.scrollToTop(0.5);
            } else {
              this.ScrollView["_moveContent"](new Vec3(0, -this._speed, 0), this.ScrollView["isOutOfBoundaryNew"]);
              this.OnScrolling();
            }
          }
        };
        _proto.OnScrollEnd = function OnScrollEnd() {
          this._isScrollingToBottom = false;
        };
        _proto.update = function update(dt) {
          if (this._isAutoMove) {
            this.ProcessAutoScrolling();
          }
        };
        _proto.IsScrollViewInBottom = function IsScrollViewInBottom(tolerance) {
          if (tolerance === void 0) {
            tolerance = 0.1;
          }
          var lastCell = this._cellItems[this._cellItems.length - 1];
          if (!lastCell) {
            return false;
          }
          if (lastCell.DataIndex < this._dataCount - 1) {
            return false;
          }
          var offsetY = this.ScrollView.getScrollOffset().y;
          if (offsetY + this.ScrollView.node._uiProps.uiTransformComp.height + tolerance >= this._uiTrans.height) {
            return true;
          } else {
            return false;
          }
        };
        _proto.IsAutoScrollingToBottom = function IsAutoScrollingToBottom() {
          return this._isScrollingToBottom;
        };
        _proto.IsScrollViewInTop = function IsScrollViewInTop(tolerance) {
          if (tolerance === void 0) {
            tolerance = 0.1;
          }
          var firstCell = this._cellItems[0];
          if (!firstCell) {
            return true;
          }
          if (firstCell.DataIndex > 0) {
            return false;
          }
          var offsetY = this.ScrollView.getScrollOffset().y;
          if (offsetY <= tolerance) {
            return true;
          } else {
            return false;
          }
        };
        _proto.IsExceedsScrollView = function IsExceedsScrollView() {
          return this._uiTrans.height > this.ScrollView.node._uiProps.uiTransformComp.height;
        };
        _proto.UpdateItem = function UpdateItem(cellItem) {
          if (this._onInitializeItem != null) {
            this._onInitializeItem(cellItem.Node, cellItem.DataIndex, cellItem.NodeIndex);
          }
        };
        _proto.ResetAssets = function ResetAssets() {
          for (var index = this._cellItems.length - 1; index >= 0; index--) {
            var element = this._cellItems[index];
            this.RecyclVirtualCellItem(element);
          }
          this._cellItems = [];
        };
        _proto.ReRender = function ReRender() {
          for (var index = 0; index < this._cellItems.length; index++) {
            var element = this._cellItems[index];
            if (element.IsInit) {
              this.UpdateItem(element);
            }
          }
        };
        _proto.GetAnchorTopHeight = function GetAnchorTopHeight(node) {
          return (1 - node._uiProps.uiTransformComp.anchorY) * node._uiProps.uiTransformComp.height;
        };
        _proto.GetAnchorBottomHeight = function GetAnchorBottomHeight(node) {
          return node._uiProps.uiTransformComp.anchorY * node._uiProps.uiTransformComp.height;
        };
        _proto.GetItemTopY = function GetItemTopY(node) {
          return node.position.y + this.GetAnchorTopHeight(node);
        };
        _proto.GetItemBottomY = function GetItemBottomY(node) {
          return node.position.y - this.GetAnchorBottomHeight(node);
        };
        _proto.SetItemPosBehind = function SetItemPosBehind(cellItem, behindY) {
          cellItem.Y = behindY - (1 - cellItem.Node._uiProps.uiTransformComp.anchorY) * cellItem.Node._uiProps.uiTransformComp.height;
          cellItem.Node.setPosition(cellItem.X, cellItem.Y);
        };
        _proto.SetItemPosBefore = function SetItemPosBefore(cellItem, beforeY) {
          cellItem.Y = beforeY + cellItem.Node._uiProps.uiTransformComp.anchorY * cellItem.Node._uiProps.uiTransformComp.height;
          cellItem.Node.setPosition(cellItem.X, cellItem.Y);
        };
        return ListLayout;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PaddingTop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "CellWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "CellHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "SpaceX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "SpaceY", [property], {
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

System.register("chunks:///_virtual/LoadingScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameMgr.ts', './Progress.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, SubGameMgr, Progress;
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
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      Progress = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7ddc9yupvVHgJ/T3mCgadxH", "LoadingScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingScene = exports('default', (_dec = ccclass('LoadingScene'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingScene, _Component);
        function LoadingScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressNode", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LoadingScene.prototype;
        _proto.onLoad = function onLoad() {
          this.progressNode.active = true;
          tgx.UIMgr.inst.closeAll();
        };
        _proto.start = function start() {};
        _proto.preLoadRes = /*#__PURE__*/function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var progressScript, processFun;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  progressScript = this.progressNode.getComponent(Progress);
                  processFun = progressScript.updateProgress.bind(progressScript);
                  processFun(0);
                  _context.next = 5;
                  return SubGameMgr.gameMgr.preLoadRes(processFun);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function preLoadRes() {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }();
        return LoadingScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressNode", [_dec2], {
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

System.register("chunks:///_virtual/LobbyMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneDef.ts', './NetGameServer.ts', './UserMgr.ts', './NetUtil.ts', './SubGameMgr.ts', './LanguageData.ts', './Constants.ts', './RoomMgr.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, SceneDef, lobbyNet, apiNet, loginNet, UserMgr, NetUtil, SubGameMgr, LanguageData, RoomMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      lobbyNet = module.lobbyNet;
      apiNet = module.apiNet;
      loginNet = module.loginNet;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      NetUtil = module.NetUtil;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, null, function (module) {
      RoomMgr = module.RoomMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4c68a0//zpIdLK/mArOEeuR", "LobbyMgr", undefined);
      var LobbyMgr = exports('LobbyMgr', /*#__PURE__*/function () {
        function LobbyMgr() {
          if (lobbyNet.type == 'http') {
            lobbyNet.addErrorFilter('INVALID_TOKEN', function () {
              // 提示“TOKEN 过期，请重新登录”
              tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message5")).onClick(function () {
                tgx.SceneUtil.loadScene(SceneDef.LOGIN);
              });
            });
            lobbyNet.addErrorFilter('UNKNOWN_ERROR', function () {
              // 提示“系统错误，请重新登录”
              tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message6")).onClick(function () {
                tgx.SceneUtil.loadScene(SceneDef.LOGIN);
              });
            });
          }
        }
        var _proto = LobbyMgr.prototype;
        _proto.doLogin = /*#__PURE__*/function () {
          var _doLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(account, password) {
            var serverList, ret, authRet;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return NetUtil.getGameServerList();
                case 2:
                  serverList = _context.sent;
                  loginNet.createConnection(serverList);
                  _context.next = 6;
                  return loginNet.callApi('login/Login', {
                    account: account,
                    password: password
                  });
                case 6:
                  ret = _context.sent;
                  if (!ret.isSucc) {
                    _context.next = 18;
                    break;
                  }
                  lobbyNet.authParams = ret.res;
                  apiNet.authParams = ret.res;
                  apiNet.createConnection(serverList);
                  _context.next = 13;
                  return this.doAuth();
                case 13:
                  authRet = _context.sent;
                  if (authRet.isSucc) {
                    _context.next = 16;
                    break;
                  }
                  return _context.abrupt("return", authRet);
                case 16:
                  _context.next = 19;
                  break;
                case 18:
                  if (ret.err.message == 'USER_NOT_EXISTS' || ret.err.message == 'PASSWORD_WRONG') {
                    // 提示“用户名或者密码错误！”
                    tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message7"));
                  } else {
                    tgx.UIAlert.show(ret.err.message);
                  }
                case 19:
                  return _context.abrupt("return", ret);
                case 20:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doLogin(_x, _x2) {
            return _doLogin.apply(this, arguments);
          }
          return doLogin;
        }();
        _proto.backToLobby = /*#__PURE__*/function () {
          var _backToLobby = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(subLobbyScene) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(director.getScene().name == subLobbyScene.name)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.next = 4;
                  return this.doAuth(subLobbyScene);
                case 4:
                  ret = _context2.sent;
                  if (!ret.isSucc) {
                    // 提示“网络异常，请重新登录”
                    tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message8")).onClick(function () {
                      tgx.SceneUtil.loadScene(SceneDef.START);
                    });
                  }
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function backToLobby(_x3) {
            return _backToLobby.apply(this, arguments);
          }
          return backToLobby;
        }()
        /**
         * @en If it needs to back to SubGame's Lobby, pass in subLobbyScene.
         * @zh 如果需要返回到子游戏大厅，则传入 subLobbyScene。
        */;

        _proto.doAuth = /*#__PURE__*/
        function () {
          var _doAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(subLobbyScene) {
            var net, ret2, ret, _ret;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (subLobbyScene === void 0) {
                    subLobbyScene = SceneDef.LOBBY;
                  }
                  if (lobbyNet.authParams) {
                    _context3.next = 3;
                    break;
                  }
                  return _context3.abrupt("return", {
                    isSucc: false
                  });
                case 3:
                  lobbyNet.createConnection([lobbyNet.authParams.lobbyUrl]);
                  apiNet.createConnection([lobbyNet.authParams.apiUrl]);
                  if (!(lobbyNet.type != 'http')) {
                    _context3.next = 13;
                    break;
                  }
                  net = lobbyNet;
                  _context3.next = 9;
                  return net.ensureConnected();
                case 9:
                  ret2 = _context3.sent;
                  if (ret2.isSucc) {
                    _context3.next = 13;
                    break;
                  }
                  tgx.UIAlert.show(ret2.err.message);
                  return _context3.abrupt("return", ret2);
                case 13:
                  _context3.next = 15;
                  return lobbyNet.callApi('lobby/Auth', lobbyNet.authParams);
                case 15:
                  ret = _context3.sent;
                  if (ret.isSucc) {
                    _context3.next = 19;
                    break;
                  }
                  tgx.UIAlert.show(ret.err.message);
                  return _context3.abrupt("return", ret);
                case 19:
                  UserMgr.inst.setUserInfo(ret.res.userInfo);

                  //没有名字，表示还未创建角色，则进入角色创建流程
                  if (UserMgr.inst.name) {
                    _context3.next = 26;
                    break;
                  }
                  // 提示“角色准备中”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message1"));
                  _context3.next = 24;
                  return tgx.SceneUtil.loadScene(SceneDef.CREATE_ROLE);
                case 24:
                  _context3.next = 43;
                  break;
                case 26:
                  if (!ret.res.roomId) {
                    _context3.next = 40;
                    break;
                  }
                  _context3.next = 29;
                  return this.doTryEnterRoom(ret.res.roomId);
                case 29:
                  _ret = _context3.sent;
                  if (!(_ret.isSucc == false)) {
                    _context3.next = 38;
                    break;
                  }
                  if (!subLobbyScene) {
                    _context3.next = 38;
                    break;
                  }
                  if (!!lobbyNet.isConnected) {
                    _context3.next = 36;
                    break;
                  }
                  RoomMgr.inst.exitRoom();
                  _context3.next = 38;
                  break;
                case 36:
                  _context3.next = 38;
                  return tgx.SceneUtil.loadScene(subLobbyScene);
                case 38:
                  _context3.next = 43;
                  break;
                case 40:
                  if (!subLobbyScene) {
                    _context3.next = 43;
                    break;
                  }
                  _context3.next = 43;
                  return tgx.SceneUtil.loadScene(subLobbyScene);
                case 43:
                  return _context3.abrupt("return", {
                    isSucc: true
                  });
                case 44:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doAuth(_x4) {
            return _doAuth.apply(this, arguments);
          }
          return doAuth;
        }();
        _proto.rpc_CreateRole = /*#__PURE__*/function () {
          var _rpc_CreateRole = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, visualId) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return lobbyNet.callApi('lobby/CreateRole', {
                    name: name,
                    visualId: visualId
                  });
                case 2:
                  ret = _context4.sent;
                  if (ret.isSucc) {
                    UserMgr.inst.setUserInfo({
                      name: ret.res.name,
                      visualId: ret.res.visualId
                    });
                  }
                  return _context4.abrupt("return", ret);
                case 5:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function rpc_CreateRole(_x5, _x6) {
            return _rpc_CreateRole.apply(this, arguments);
          }
          return rpc_CreateRole;
        }();
        _proto.doTryEnterRoom = /*#__PURE__*/function () {
          var _doTryEnterRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, password) {
            var ret, params;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  // 提示“进入世界”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message2"));
                  _context5.next = 3;
                  return lobbyNet.callApi('lobby/TryEnterRoom', {
                    id: id,
                    password: password
                  }, {
                    timeout: 10000
                  });
                case 3:
                  ret = _context5.sent;
                  tgx.UIWaiting.hide();
                  if (!ret.isSucc) {
                    _context5.next = 13;
                    break;
                  }
                  params = ret.res; // 提示“进入世界”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message2"));
                  _context5.next = 10;
                  return SubGameMgr.inst.loginJumpEnterSubGameRoom(params);
                case 10:
                  return _context5.abrupt("return", _context5.sent);
                case 13:
                  tgx.UIAlert.show(ret.err.message);
                case 14:
                  return _context5.abrupt("return", ret);
                case 15:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function doTryEnterRoom(_x7, _x8) {
            return _doTryEnterRoom.apply(this, arguments);
          }
          return doTryEnterRoom;
        }();
        _proto.rpc_QuickPlay = /*#__PURE__*/function () {
          var _rpc_QuickPlay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(type, immediate) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return lobbyNet.callApi("lobby/StartMatch", {
                    type: type,
                    immediate: immediate
                  });
                case 2:
                  ret = _context6.sent;
                  return _context6.abrupt("return", ret);
                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function rpc_QuickPlay(_x9, _x10) {
            return _rpc_QuickPlay.apply(this, arguments);
          }
          return rpc_QuickPlay;
        }();
        _proto.rpc_QuickPlayCancel = /*#__PURE__*/function () {
          var _rpc_QuickPlayCancel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return lobbyNet.callApi("lobby/CancelMatch", {});
                case 2:
                  ret = _context7.sent;
                  return _context7.abrupt("return", ret);
                case 4:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          function rpc_QuickPlayCancel() {
            return _rpc_QuickPlayCancel.apply(this, arguments);
          }
          return rpc_QuickPlayCancel;
        }();
        _proto.rpc_CreateRoom = /*#__PURE__*/function () {
          var _rpc_CreateRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(type, name, password, subType) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (subType === void 0) {
                    subType = null;
                  }
                  _context8.next = 3;
                  return lobbyNet.callApi("lobby/CreateRoom", {
                    roomName: name,
                    gameType: type,
                    password: password,
                    subType: subType
                  });
                case 3:
                  ret = _context8.sent;
                  return _context8.abrupt("return", ret);
                case 5:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          function rpc_CreateRoom(_x11, _x12, _x13, _x14) {
            return _rpc_CreateRoom.apply(this, arguments);
          }
          return rpc_CreateRoom;
        }() /**匹配 */;
        _proto.rpc_MatchRoom = /*#__PURE__*/
        function () {
          var _rpc_MatchRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(type, subType) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (subType === void 0) {
                    subType = null;
                  }
                  _context9.next = 3;
                  return lobbyNet.callApi("lobby/StartMatch", {
                    type: type,
                    subType: subType
                  });
                case 3:
                  ret = _context9.sent;
                  return _context9.abrupt("return", ret);
                case 5:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
          function rpc_MatchRoom(_x15, _x16) {
            return _rpc_MatchRoom.apply(this, arguments);
          }
          return rpc_MatchRoom;
        }();
        _proto.rpc_GetAnnouncement = /*#__PURE__*/function () {
          var _rpc_GetAnnouncement = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(type) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return lobbyNet.callApi("lobby/GetAnnouncement", {
                    type: type
                  });
                case 2:
                  ret = _context10.sent;
                  return _context10.abrupt("return", ret);
                case 4:
                case "end":
                  return _context10.stop();
              }
            }, _callee10);
          }));
          function rpc_GetAnnouncement(_x17) {
            return _rpc_GetAnnouncement.apply(this, arguments);
          }
          return rpc_GetAnnouncement;
        }();
        _proto.rpc_GetNotice = /*#__PURE__*/function () {
          var _rpc_GetNotice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return lobbyNet.callApi("lobby/GetNotice", {});
                case 2:
                  ret = _context11.sent;
                  return _context11.abrupt("return", ret);
                case 4:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          }));
          function rpc_GetNotice() {
            return _rpc_GetNotice.apply(this, arguments);
          }
          return rpc_GetNotice;
        }();
        _proto.rpc_GetRoomList = /*#__PURE__*/function () {
          var _rpc_GetRoomList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(gameType, curPage, pageItemNum) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return lobbyNet.callApi("lobby/GetRoomList", {
                    type: gameType,
                    curPage: curPage,
                    pageItemNum: pageItemNum
                  });
                case 2:
                  ret = _context12.sent;
                  return _context12.abrupt("return", ret);
                case 4:
                case "end":
                  return _context12.stop();
              }
            }, _callee12);
          }));
          function rpc_GetRoomList(_x18, _x19, _x20) {
            return _rpc_GetRoomList.apply(this, arguments);
          }
          return rpc_GetRoomList;
        }();
        _createClass(LobbyMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new LobbyMgr();
            }
            return this._inst;
          }
        }]);
        return LobbyMgr;
      }());
      LobbyMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneDef.ts', './UserMgr.ts', './SubGameMgr.ts', './UIChat.ts', './UIAboutQLZ.ts', './NetGameServer.ts', './SubGameDef.ts', './ModuleDef.ts', './SubGame.ts', './SubGameMessage.ts', './UIHistory.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, ScrollView, Prefab, Vec2, director, instantiate, sys, Component, SceneDef, UserMgr, SubGameMgr, UIChat, UIAboutQLZ, lobbyNet, subGameConf, SubGameType, ModuleDef, SubGame, SubGameMessage, UIHistory;
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
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      Vec2 = module.Vec2;
      director = module.director;
      instantiate = module.instantiate;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      UIChat = module.UIChat;
    }, function (module) {
      UIAboutQLZ = module.UIAboutQLZ;
    }, function (module) {
      lobbyNet = module.lobbyNet;
    }, function (module) {
      subGameConf = module.subGameConf;
      SubGameType = module.SubGameType;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      SubGame = module.SubGame;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }, function (module) {
      UIHistory = module.UIHistory;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "1f64dpTLCFBQ6OgkTknhEdc", "LobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LobbyScene = exports('LobbyScene', (_dec = ccclass('LobbyScene'), _dec2 = property(Node), _dec3 = property(ScrollView), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LobbyScene, _Component);
        function LobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "announcementPos", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subgames", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnGamee", _descriptor4, _assertThisInitialized(_this));
          _this.prefabInstances = [];
          return _this;
        }
        var _proto = LobbyScene.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgx.AudioMgr.inst.audio.playMusicLoop("sound/bg", ModuleDef.BASIC);
                  if (UserMgr.inst.uid) {
                    _context.next = 4;
                    break;
                  }
                  tgx.SceneUtil.loadScene(SceneDef.START);
                  return _context.abrupt("return");
                case 4:
                  SubGameMgr.inst.exitSubGame();
                  tgx.UIMgr.inst.closeAll();

                  // tgx.UIMgr.inst.showUI(UIAnnouncement, (ui: UIAnnouncement) => {
                  //     ui.setPosition(this.announcementPos.position.x, this.announcementPos.position.y);
                  // })

                  if (lobbyNet.type != 'http') {
                    tgx.UIMgr.inst.showUI(UIChat, null, null, lobbyNet);
                  }
                  this.initSubGames();
                  setTimeout(function () {
                    _this2.restoreScrollPosition();
                  }, 0);
                  director.on(SubGameMessage.EnterSubGame, this.onSubGameIconClicked, this);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.onDestroy = function onDestroy() {
          tgx.AudioMgr.inst.audio.clearAll();
          for (var key in SubGame.subGameHotUpdateCtrls) {
            if (SubGame.subGameHotUpdateCtrls.hasOwnProperty(key)) {
              var hotUpdateCtrl = SubGame.subGameHotUpdateCtrls[key];
              hotUpdateCtrl.destory();
            }
          }
          SubGame.subGameHotUpdateCtrls = {};
          SubGame.subGameHotUpdateStatusMap = {};
          director.off(SubGameMessage.EnterSubGame, this.onSubGameIconClicked, this);
          // SubGame.waitEnterSubGame = "";
        };

        _proto.initSubGames = function initSubGames() {
          for (var i = 0; i < subGameConf.length; i++) {
            if (!subGameConf[i].show) {
              continue;
            }
            var prefabInstance = instantiate(this.btnGamee);
            prefabInstance.getComponent(SubGame).initData(subGameConf[i]);
            this.prefabInstances.push(prefabInstance);
            // 将实例化的节点添加到容器中
            // this.subgames.addChild(prefabInstance);
          }

          for (var _iterator = _createForOfIteratorHelperLoose(this.prefabInstances), _step; !(_step = _iterator()).done;) {
            var instance = _step.value;
            this.subgames.addChild(instance);
          }
        };
        _proto.onSubGameIconClicked = function onSubGameIconClicked(gameType) {
          console.log("onSubGameIconClicked:" + gameType);
          this.enterSubGame(gameType);
        };
        _proto.enterSubGame = function enterSubGame(gameType) {
          SubGameMgr.inst.enterSubGame(gameType);
          this.saveScrollPosition();
        };
        _proto.onBtnClicked = function onBtnClicked(event, strParam) {
          if (strParam == 'author') {
            tgx.UIMgr.inst.showUI(UIAboutQLZ);
          } else if (strParam == '.') {
            tgx.UIAlert.show('我只是一个占位符！');
          } else if (strParam == 'cocos') {
            tgx.UIAlert.show("此框架客户端基于 Cocos Creator 3.8.x 开发\n可发布 iOS、Android、H5与小游戏\n前往 Cocos 引擎官网.", true).onClick(function (bTrue) {
              if (bTrue) {
                sys.openURL('https://www.cocos.com/');
              }
            });
          } else if (strParam == 'tsrpc') {
            tgx.UIAlert.show("此框架服务端基于 TSRPC 构建\n前往 TSRPC 官网.", true).onClick(function (bTrue) {
              if (bTrue) {
                sys.openURL('https://tsrpc.cn/');
              }
            });
          } else if (strParam == 'tgx') {
            tgx.UIAlert.show("前往 OpenTGX 主页查看更多案例.", true).onClick(function (bTrue) {
              if (bTrue) {
                sys.openURL('https://github.com/qilinshuyuan/OpenTGX/blob/main/README-CN.md');
              }
            });
          } else if (strParam == 'shuyuan') {
            tgx.UIAlert.show("\"麒麟书院\"是一个游戏开发者进化营,\n目标是陪伴大家终身学习、不断成长。\n欢迎大家加入 麒麟书院-内院 知识星球!\n欢迎大家使用 TGX 做出优秀的游戏。");
          } else {
            tgx.UIAlert.show("研发团队加班中，敬请期待!");
          }
        }

        // 保存滚动位置
        ;

        _proto.saveScrollPosition = function saveScrollPosition() {
          if (this.scrollView) {
            LobbyScene.scrollOffset = this.scrollView.getScrollOffset();
          }
        }

        // 恢复滚动位置
        ;

        _proto.restoreScrollPosition = function restoreScrollPosition() {
          if (this.scrollView) {
            //有个坑：this.scrollView.getScrollOffset()返回的跟设置的值是相反的  所以需要取个负数
            this.scrollView.scrollToOffset(new Vec2(-LobbyScene.scrollOffset.x, 0), 0);
          }
        };
        _proto.onClickAll = function onClickAll() {
          this.subgames.removeAllChildren();
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.prefabInstances), _step2; !(_step2 = _iterator2()).done;) {
            var instance = _step2.value;
            this.subgames.addChild(instance);
          }
        };
        _proto.onClickMultiplayer = function onClickMultiplayer() {
          this.subgames.removeAllChildren();
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.prefabInstances), _step3; !(_step3 = _iterator3()).done;) {
            var instance = _step3.value;
            if (instance.getComponent(SubGame).gameType == SubGameType.LEISURE) {
              this.subgames.addChild(instance);
            }
          }
        };
        _proto.onClickSkill = function onClickSkill() {
          this.subgames.removeAllChildren();
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.prefabInstances), _step4; !(_step4 = _iterator4()).done;) {
            var instance = _step4.value;
            if (instance.getComponent(SubGame).gameType == SubGameType.SKILL) {
              this.subgames.addChild(instance);
            }
          }
        };
        _proto.onClickSlot = function onClickSlot() {
          this.subgames.removeAllChildren();
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.prefabInstances), _step5; !(_step5 = _iterator5()).done;) {
            var instance = _step5.value;
            if (instance.getComponent(SubGame).gameType == SubGameType.SLOT) {
              this.subgames.addChild(instance);
            }
          }
        };
        _proto.onClickSport = function onClickSport() {
          this.subgames.removeAllChildren();
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.prefabInstances), _step6; !(_step6 = _iterator6()).done;) {
            var instance = _step6.value;
            if (instance.getComponent(SubGame).gameType == SubGameType.FISH) {
              this.subgames.addChild(instance);
            }
          }
        };
        _proto.update = function update(deltaTime) {};
        _proto.onClickHistory = function onClickHistory() {
          tgx.UIMgr.inst.showUI(UIHistory);
        };
        return LobbyScene;
      }(Component), _class3.scrollOffset = new Vec2(0, 0), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "announcementPos", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "subgames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnGamee", [_dec5], {
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

System.register("chunks:///_virtual/LoginScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UILogin.ts', './LobbyMgr.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, sys, UILogin, LobbyMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      sys = module.sys;
    }, function (module) {
      UILogin = module.UILogin;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c3307SlBUpPEI+jIEufcoxs", "LoginScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoginScene = exports('LoginScene', (_dec = ccclass('LoginScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginScene, _Component);
        function LoginScene() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = LoginScene.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _window$location, params, account, password, ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgx.UIMgr.inst.closeAll();
                  if (!sys.isBrowser) {
                    _context.next = 11;
                    break;
                  }
                  params = tgx.URLUtils.urlParse((_window$location = window.location) == null ? void 0 : _window$location.href);
                  account = params['a'];
                  password = params['p'];
                  if (!(account && password)) {
                    _context.next = 11;
                    break;
                  }
                  _context.next = 8;
                  return LobbyMgr.inst.doLogin(account, password);
                case 8:
                  ret = _context.sent;
                  if (!ret.isSucc) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return");
                case 11:
                  tgx.UIMgr.inst.closeAll();
                  tgx.UIMgr.inst.showUI(UILogin);
                case 13:
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
        _proto.onDestroy = function onDestroy() {};
        _proto.update = function update(deltaTime) {};
        return LoginScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MailItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "6d5f0wSCjBLs4S2+oU3VuU9", "MailItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MailItem = exports('MailItem', (_dec = ccclass('MailItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MailItem, _Component);
        function MailItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblTime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblFrom", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTitle", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hasRead", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentFlag", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftTag", _descriptor6, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = MailItem.prototype;
        _proto.setData = function setData(data) {
          this._data = data;
          var date = new Date(this._data.time);
          var str = '' + date.getFullYear();
          str += '-' + date.getMonth();
          str += '-' + date.getDate();
          str += ' ' + date.getHours();
          str += ':' + date.getMinutes();
          this.lblTime.string = str;
          this.lblTitle.string = this._data.title;
          this.hasRead.active = !!this._data.state;
        };
        _createClass(MailItem, [{
          key: "data",
          get: function get() {
            return this._data;
          }
        }, {
          key: "selected",
          set: function set(v) {
            this.currentFlag.active = v;
          }
        }]);
        return MailItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblFrom", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTitle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hasRead", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currentFlag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "giftTag", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Match3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "827e1KoqIBCUouzHeGEeKx0", "Match3", undefined); //中奖符号
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MathUtil.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6fde6fFDQlDiYxRm1e86H7h", "MathUtil", undefined);
      var MathUtil = exports('MathUtil', /*#__PURE__*/function () {
        function MathUtil() {}
        MathUtil.limit = function limit(src, min, max) {
          return Math.min(max, Math.max(min, src));
        };
        return MathUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuBar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneDef.ts', './UISettings.ts', './UINotice.ts', './UIMail.ts', './UIEnterRoom.ts', './UITask.ts', './UIdailycheck.ts', './UI_Shop.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, tween, ProgressBar, Component, SceneDef, UISettings, UINotice, UIMail, UIEnterRoom, UITask, UIdailycheck, UIShop;
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
      tween = module.tween;
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      UISettings = module.UISettings;
    }, function (module) {
      UINotice = module.UINotice;
    }, function (module) {
      UIMail = module.UIMail;
    }, function (module) {
      UIEnterRoom = module.UIEnterRoom;
    }, function (module) {
      UITask = module.UITask;
    }, function (module) {
      UIdailycheck = module.UIdailycheck;
    }, function (module) {
      UIShop = module.UIShop;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "46916PuvmFE+YCHzGXz7zD/", "MenuBar", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MenuBar = exports('MenuBar', (_dec = ccclass('MenuBar'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MenuBar, _Component);
        function MenuBar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "MoreBtn", _descriptor, _assertThisInitialized(_this));
          _this.moreFlag = false;
          return _this;
        }
        var _proto = MenuBar.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.onBtnSettingsClicked = function onBtnSettingsClicked() {
          tgx.UIMgr.inst.showUI(UISettings);
        };
        _proto.onBtnNoticeClicked = function onBtnNoticeClicked() {
          tgx.UIMgr.inst.showUI(UINotice);
        };
        _proto.onBtnMailClicked = function onBtnMailClicked() {
          tgx.UIMgr.inst.showUI(UIMail);
        };
        _proto.onBtnTaskClicked = function onBtnTaskClicked() {
          tgx.UIMgr.inst.showUI(UITask);
        };
        _proto.onBtnLuckyClicked = function onBtnLuckyClicked() {
          tgx.UIMgr.inst.showUI(UITask);
        };
        _proto.onBtnShopClicked = function onBtnShopClicked() {
          tgx.UIMgr.inst.showUI(UIShop);
        };
        _proto.onBtnCoinClicked = function onBtnCoinClicked() {
          tgx.UIMgr.inst.showUI(UIShop);
        };
        _proto.onBtnDailyClicked = function onBtnDailyClicked() {
          tgx.UIMgr.inst.showUI(UIdailycheck);
        };
        _proto.onBtnEnterRoomClicked = function onBtnEnterRoomClicked() {
          tgx.UIMgr.inst.showUI(UIEnterRoom);
        };
        _proto.onBtnBackClicked = function onBtnBackClicked() {
          tgx.SceneUtil.loadScene(SceneDef.LOBBY);
        };
        _proto.onBtnMoreClicked = function onBtnMoreClicked() {
          var _this2 = this;
          if (this.moreFlag == false) {
            this.MoreBtn.active = true;
            tween(this.MoreBtn.getComponent(ProgressBar)).by(0.2, {
              progress: 1
            }).start();
            this.moreFlag = true;
          } else {
            tween(this.MoreBtn.getComponent(ProgressBar)).by(0.2, {
              progress: 0.5
            }).call(function () {
              _this2.MoreBtn.getComponent(ProgressBar).progress = 0;
              _this2.MoreBtn.active = false;
              _this2.moreFlag = false;
            }).start();
          }
        };
        return MenuBar;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "MoreBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_basic", ['./Layout_UIHistory.ts', './Layout_UIHistoryDetails.ts', './Layout_UIHistoryDetailsItem.ts', './Layout_UIHistoryItem.ts', './Layout_UIHistoryOptionItem.ts', './UIHistory.ts', './UIHistoryDetails.ts', './leichongMgr.ts', './shopGiftMgr.ts', './shopMgr.ts', './shopRecommendMgr.ts', './LoginScene.ts', './AppStart.ts', './BasicManger.ts', './ConfigMgr.ts', './CreateRoleScene.ts', './EventDef.ts', './FrontConfig.ts', './GameMgr.ts', './GamePlayerInfo.ts', './GenderIcon.ts', './InfoMgr.ts', './Latency.ts', './ListLayout.ts', './LoadingScene.ts', './LobbyMgr.ts', './LobbyScene.ts', './MathUtil.ts', './MenuBar.ts', './NetGameServer.ts', './NetUtil.ts', './NetworkReconnector.ts', './Progress.ts', './RoomList.ts', './RoomListItem.ts', './RoomMgr.ts', './Select.ts', './SkyboxRotating.ts', './SubGame.ts', './SubGameDef.ts', './SubGameMessage.ts', './SubGameMgr.ts', './UserHead.ts', './UserLocalCache.ts', './UserMgr.ts', './WebsocketClient.ts', './Language.ts', './LanguageData.ts', './LanguageLabel.ts', './LanguagePack.ts', './LanguageSprite.ts', './PokerDefine.ts', './PokerManager.ts', './RoomContent.ts', './RoomItem.ts', './GomokuBoardMgr.ts', './BasicConfig.ts', './Constants.ts', './Error.ts', './base.ts', './MsgPing.ts', './MsgPong.ts', './BilliardsTypeDef.ts', './MsgAdjustCue.ts', './MsgBallsDataSync.ts', './MsgGameBeginPush2.ts', './MsgGameDataChangedPush3.ts', './MsgGameDataSyncPush.ts', './MsgGameOverPush.ts', './MsgHitBall.ts', './MsgHitBallComplete.ts', './MsgPlayerComesPush2.ts', './MsgPlayerDataChangedPush2.ts', './MsgPlayerLeavesPush3.ts', './MsgChat.ts', './PtlSendChat.ts', './Fish.ts', './MsgFire.ts', './MsgFireResult.ts', './MsgFishDead.ts', './MsgFishWave.ts', './MsgHitFish.ts', './MsgNewFish.ts', './MsgNewFishGroup.ts', './MsgRoomFish.ts', './PtlFishConfig.ts', './MsgPush.ts', './PtlAuthClient.ts', './GomokuTypeDef.ts', './MsgGameBeginPush.ts', './MsgGameDataChangedPush.ts', './MsgGameDataSyncPush3.ts', './MsgGameOverPush3.ts', './MsgPlacePiecePush.ts', './MsgPlayerComesPush3.ts', './MsgPlayerDataChangedPush.ts', './MsgPlayerLeavesPush.ts', './PtlPlacePiece.ts', './MsgAction.ts', './MsgDeal.ts', './MsgGameOver.ts', './MsgGameStart3.ts', './MsgPlay2.ts', './MsgPlayResult.ts', './MsgResume.ts', './MsgRoomHoldem.ts', './holdem.ts', './PtlAuth.ts', './PtlCancelMatch.ts', './PtlCreateRole.ts', './PtlCreateRoom.ts', './PtlGetAnnouncement.ts', './PtlGetBasicConfig.ts', './PtlGetNotice.ts', './PtlGetRoomList.ts', './PtlGetUserInfo.ts', './PtlModifyUserInfo.ts', './PtlStartMatch.ts', './PtlTryEnterRoom.ts', './PtlUpdateUserInfo.ts', './PtlClearAllMails.ts', './PtlDeleteMail.ts', './PtlGetMails.ts', './PtlMarkAllAsRead.ts', './PtlMarkAsRead.ts', './PtlLogin.ts', './PtlRegister.ts', './MsgGameOver2.ts', './MsgGameStart2.ts', './MsgGo.ts', './MsgPlay3.ts', './MsgPlayerQiangZhuang.ts', './MsgPlayerTanPai.ts', './MsgQiangZhuang.ts', './MsgRandomZhuang.ts', './MsgReset.ts', './MsgResume2.ts', './MsgRoomNiuNiu.ts', './MsgShowdown.ts', './MsgTanPai.ts', './MsgUserXiaZhu.ts', './MsgXiaZhu.ts', './card.ts', './niuniu.ts', './MsgClientReady.ts', './MsgRoomClosed.ts', './MsgRoomDataChangedPush.ts', './MsgRoomDataSyncPush.ts', './MsgRoomDismissedPush.ts', './MsgUserComesToRoomPush.ts', './MsgUserDataChangedPush.ts', './MsgUserInfoChangedPush.ts', './MsgUserJoin.ts', './MsgUserLeavesFromRoomPush.ts', './MsgUserReady.ts', './PtlExitRoom.ts', './PtlJoinGame.ts', './PtlReady.ts', './Match3.ts', './PtlPlayMatch3.ts', './PtlPlaySlots.ts', './Slots.ts', './SlotsDragon.ts', './SlotsDragonHatch.ts', './SlotsLoong.ts', './SlotsMouse.ts', './SlotsOx.ts', './SlotsPanda.ts', './SlotsRabbit.ts', './SlotsTiger.ts', './MsgGameBeginPush3.ts', './MsgGameDataChangedPush2.ts', './MsgGameDataSyncPush2.ts', './MsgGameOverPush2.ts', './MsgPlayerComesPush.ts', './MsgPlayerDataChangedPush3.ts', './MsgPlayerLeavesPush2.ts', './MsgTankAttack.ts', './MsgTankDataChange.ts', './MsgTankShoot.ts', './TankTypeDef.ts', './MsgBombScore.ts', './MsgGameEnd.ts', './MsgGameStart.ts', './MsgPass.ts', './MsgPassPlayer.ts', './MsgPlay.ts', './MsgRoomInfo.ts', './MsgRoomScore.ts', './MsgTrusteeship.ts', './MsgTrusteeshipStatus.ts', './MsgTurnPlayer.ts', './serviceProto_public.ts', './GameServerAuthParams.ts', './RoomData.ts', './ServerDef.ts', './UserInfo.ts', './Layout_UIAboutQLZ.ts', './UIAboutQLZ.ts', './UI_Alert_Impl.ts', './AnnouncementMgr.ts', './Layout_UIAnnouncement.ts', './UIAnnouncement.ts', './Layout_UIChat.ts', './UIChat.ts', './Layout_UICreateRoom.ts', './UICreateRoom.ts', './Layout_UIdailycheck.ts', './UIdailycheck.ts', './Layout_UIEnterRoom.ts', './UIEnterRoom.ts', './Layout_UIHelp.ts', './UIHelp.ts', './Layout_UILanguage.ts', './UILanguage.ts', './Layout_UILogin.ts', './UILogin.ts', './Layout_UIMail.ts', './MailItem.ts', './UIMail.ts', './Layout_UINotice.ts', './UINotice.ts', './Layout_UIRegister.ts', './UIRegister.ts', './UIRoomList.ts', './Layout_SearchingRival.ts', './UI_SearchingRival.ts', './Layout_UISettings.ts', './UISettings.ts', './Layout_UIShop.ts', './UI_Shop.ts', './BaseSlot.ts', './BaseSlotItem.ts', './BaseSlotLayer.ts', './SlotShowPanelMgr.ts', './SlotTweenFun.ts', './SlotAutoPanel.ts', './SlotBetNum.ts', './SlotBetPanel.ts', './SlotLastMoneyPanel.ts', './baseReel.ts', './baseSymbol.ts', './Layout_UITask.ts', './UITask.ts', './UITipPanel.ts', './Layout_UIUserInfo.ts', './UIUserInfo.ts', './headItem.ts', './UI_Waiting_Impl.ts', './Utils.ts', './bezierMove.ts', './labNumShow.ts', './lampUI.ts', './nodePosCenter.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MsgAction.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5d8c1VFrtNL/7nS6IzMR/N2", "MsgAction", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgAdjustCue.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "99a9ciNmrpJn7Y7XVj3X3j4", "MsgAdjustCue", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgBallsDataSync.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "493f43R5oNC3bXyDhks2hs5", "MsgBallsDataSync", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgBombScore.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "45955kSvyFMpq3c8/NXFi1L", "MsgBombScore", undefined); //server  -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgChat.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "56b77EhmJlMI7aHe7VAklqM", "MsgChat", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgClientReady.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "65a221WGVJESpDvtQyi81Tq", "MsgClientReady", undefined); //client -> server, 表示此时客户端可以接受并处理消息
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgDeal.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d0e36f7Q5NLfoQu8DclqhSj", "MsgDeal", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgFire.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17907m7CLlPmreyAHQTNwQF", "MsgFire", undefined); //client -> server
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgFireResult.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff9d1PXOotLTqWLSD6Brrub", "MsgFireResult", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgFishDead.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f2eb6237HBFzL64T/nbY8PH", "MsgFishDead", undefined); //server->client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgFishWave.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18424tvDb5L2JUsD50i20/g", "MsgFishWave", undefined); //server -> client
      // 通知鱼潮 自行删除场内所有鱼, 3秒后，会生成新的鱼群
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameBeginPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "11667FJxotHL4Fkq3xKW+uG", "MsgGameBeginPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameBeginPush2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b9fc3I3PxhDOKxIGfSGynkg", "MsgGameBeginPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameBeginPush3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f12b1ulyJ1DX4ntaah7mirV", "MsgGameBeginPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameDataChangedPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a7babZWlGtCFo6+N2R08iyi", "MsgGameDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameDataChangedPush2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d89f5F6sTBI645+i2qFGNAK", "MsgGameDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameDataChangedPush3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e25d5qQjUZMp6V6RbIbPLfD", "MsgGameDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameDataSyncPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "12b1ezI8TpPaLWwcoxr9Bz0", "MsgGameDataSyncPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameDataSyncPush2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6c3ea+YwClB2oNBkjI4E8jD", "MsgGameDataSyncPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameDataSyncPush3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e0e88KkvAhB7aA9COmVBmKz", "MsgGameDataSyncPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameEnd.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5af94BFZXZAZYEyKFwr3rmF", "MsgGameEnd", undefined); //server -> client
      //游戏一局结束
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameOver.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0c1cwi5KpOVZWPGOUHfdzt", "MsgGameOver", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameOver2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f9ac2NI5/BBBqvzlWMm6Duj", "MsgGameOver", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameOverPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a5e13AHLgVF3aEBGdOk776B", "MsgGameOverPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameOverPush2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "deda293z7JELrm9YBnmTuAD", "MsgGameOverPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameOverPush3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9bd66npNwdJt79pQ9uy+wKe", "MsgGameOverPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameStart.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6996051ehVLdpPHWoE3eoGE", "MsgGameStart", undefined); //server -> client
      //服务端发牌
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameStart2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f583rul3VGPaJT9hdFOulH", "MsgGameStart", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGameStart3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "92b97DMMKVL3YnP5o2JHPFF", "MsgGameStart", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgGo.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a2909ru/49PDp2rkoJCsiix", "MsgGo", undefined); //开始倒计时
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgHitBall.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6489crNMohOcIekxrxmP6dO", "MsgHitBall", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgHitBallComplete.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9ccf3S4KTBPmr/RcxDzM7wR", "MsgHitBallComplete", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgHitFish.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c227DaLEZNNI3SKuukFEDy", "MsgHitFish", undefined); //鱼被子弹打中的消息, client-> server
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgNewFish.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eca059uh7RJOp8wr6JkzW5+", "MsgNewFish", undefined); //import { Fish } from "./MsgRoomFish";
      //服务端生成新的鱼，server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgNewFishGroup.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c7c316z6BRMIqHEP4GU2dkt", "MsgNewFishGroup", undefined); //server->client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPass.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d5072EhyAJELYC8WQwOWGeu", "MsgPass", undefined); //client -> server
      //玩家跳过, 变更出牌人
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPassPlayer.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c873dinKnhMhrc9RO+m26f6", "MsgPassPlayer", undefined); //server -> client
      //跳过当前玩家
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPing.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7fdccjULhtItqPQtH3AjU8m", "MsgPing", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlacePiecePush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bbcd5G+JK1LbbutHbXo8ape", "MsgPlacePiecePush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlay.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1b342fUKuVNQpoyBeZEDEDr", "MsgPlay", undefined); // client -> server
      //玩家出牌
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlay2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "644efLJktNLlqCRpRZ+zojd", "MsgPlay", undefined); //client -> server
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlay3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bfbafTEmE1Odo4OCxxFNC7q", "MsgPlay", undefined); //client -> server  
      //下注
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerComesPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "304789Rt0ZK4Y3KFI9H59A9", "MsgPlayerComesPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerComesPush2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5cfd3GSDzhOmZGIqn9NqZOL", "MsgPlayerComesPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerComesPush3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a9ff1T7HilKOpsGAmxNMYzf", "MsgPlayerComesPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerDataChangedPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1f64f+41AhBt7/g4rblsd6o", "MsgPlayerDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerDataChangedPush2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3bdc8BZOgJHx5r8/RW0jcU5", "MsgPlayerDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerDataChangedPush3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "db5a2o1TqVLa7ldO0glectu", "MsgPlayerDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerLeavesPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "992ecXcHBpHJp+U1l9QIVsI", "MsgPlayerLeavesPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerLeavesPush2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a74c7s0ArBKgJKprJGPS2tl", "MsgPlayerLeavesPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerLeavesPush3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b211bbvUwhK2Ivoux9SYkBS", "MsgPlayerLeavesPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerQiangZhuang.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "545f1e3FIpGKaWxZgWN2UQk", "MsgPlayerQiangZhuang", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayerTanPai.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a17aErkqtKHrETum8HQp5n", "MsgPlayerTanPai", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPlayResult.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3e7d9VZD0pOHbfZPUOPrhF6", "MsgPlayResult", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPong.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9bb33dUHGdI5IXMnRgxSzuN", "MsgPong", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "50958Wt/09N/KXGHz/auzFZ", "MsgPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgQiangZhuang.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3cab63HVp1K2bnKkSjIqQzx", "MsgQiangZhuang", undefined); //client -> server
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRandomZhuang.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2a2b21/HAJFcK2zK34qBtyA", "MsgRandomZhuang", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgReset.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0dc15EwZQZE+qGzdSSV05p8", "MsgReset", undefined); //取消开始
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgResume.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09ff9qS7RVO5JhFJoEH1NdH", "MsgResume", undefined); //server -> client
      //玩家在游戏中断线重连
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgResume2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17dffdvG+hLi6/NCioRhaiB", "MsgResume", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomClosed.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "39d08z5GL9BL4iSH8P/5Fu8", "MsgRoomClosed", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomDataChangedPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "74935bSFVdH/JRDdAdtuaBC", "MsgRoomDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomDataSyncPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05743cERZNOFYxkTiUKs+ub", "MsgRoomDataSyncPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomDismissedPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0282bdQ7QFMM5uJD3NqYRSU", "MsgRoomDismissedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomFish.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e4ed5p/IeNK6LHaPztvLBbo", "MsgRoomFish", undefined); //server -> client
      //当前游戏房间内所有的鱼
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomHoldem.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9953835xKxPPbiPLNbwwf7i", "MsgRoomHoldem", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomInfo.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1bea38epA9DR6FsUVLdx5EA", "MsgRoomInfo", undefined);
      var GameStatus = exports('GameStatus', /*#__PURE__*/function (GameStatus) {
        GameStatus[GameStatus["GAME_STATUS_FREE"] = 0] = "GAME_STATUS_FREE";
        GameStatus[GameStatus["GAME_STATUS_PLAY"] = 100] = "GAME_STATUS_PLAY";
        GameStatus[GameStatus["GAME_STATUS_WAIT"] = 200] = "GAME_STATUS_WAIT";
        GameStatus[GameStatus["GAME_STATUS_END"] = 300] = "GAME_STATUS_END";
        return GameStatus;
      }({}));

      //房间信息， 用户进入房间后（并且收到来自客户端的MsgClientReady消息），服务端发送此消息
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomNiuNiu.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f928+3ychCr7mch+iNPolp", "MsgRoomNiuNiu", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgRoomScore.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4b1e5bxlHFC1ZZl5Rh2uAD3", "MsgRoomScore", undefined); //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgShowdown.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "73fd2OVfSVKgIhTUdbOArpt", "MsgShowdown", undefined); //client -> server
      //摊牌请求
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgTankAttack.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b31d2fr/8dHDq/Xfn7KmYlp", "MsgTankAttack", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgTankDataChange.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "65654OAieZNf6SPsKwc+wip", "MsgTankDataChange", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgTankShoot.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c71951hVgBFtLi8SW/awZ6M", "MsgTankShoot", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgTanPai.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fd341k0WO9JGZS0Y9+KiPd9", "MsgTanPai", undefined);

      //server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgTrusteeship.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "85e40gJtwVN7IwR1ApZDcuW", "MsgTrusteeship", undefined); //client  -> server
      //托管请求
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgTrusteeshipStatus.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ca2a7f+kIZAObmRk+Sdwj0D", "MsgTrusteeshipStatus", undefined); //server -> client
      //玩家托管状态变更
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgTurnPlayer.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "56f54rrgUdBo5RIajdo8PtV", "MsgTurnPlayer", undefined); //server -> client, 更换出牌人
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgUserComesToRoomPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d871bZjdBJJ3aVGQTbqIEg3", "MsgUserComesToRoomPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgUserDataChangedPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "374ab52IuBMDpKJFIIolo31", "MsgUserDataChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgUserInfoChangedPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a5608XE3nFKeat/KdhZIr/K", "MsgUserInfoChangedPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgUserJoin.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f43ff2WL+RDnacWNV8i2MEz", "MsgUserJoin", undefined); //广播消息 server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgUserLeavesFromRoomPush.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "059b7U0WAhN2rLIch9IJDb8", "MsgUserLeavesFromRoomPush", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgUserReady.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4c9c0x5IiVEK6PZsbr/nPLi", "MsgUserReady", undefined); //广播消息 server -> client
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgUserXiaZhu.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8e23d1QENhIBZTVH8juPrh6", "MsgUserXiaZhu", undefined); //server -> client
      ////玩家下注通知
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MsgXiaZhu.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44be6CmVp5J86wjQKmnAfO+", "MsgXiaZhu", undefined); //server -> client
      ////玩家下注阶段
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetGameServer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WebsocketClient.ts', './UserLocalCache.ts', './NetUtil.ts', './Constants.ts', './GameConst.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, WebsocketClient, UserLocalCache, NetUtil, GameConst, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      WebsocketClient = module.WebsocketClient;
    }, function (module) {
      UserLocalCache = module.UserLocalCache;
    }, function (module) {
      NetUtil = module.NetUtil;
    }, null, function (module) {
      GameConst = module.GameConst;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dc1d2yEAuhMFIwPuTZ4p0+v", "NetGameServer", undefined);
      var NetLobbyServer = exports('NetLobbyServer', /*#__PURE__*/function (_WebsocketClient) {
        _inheritsLoose(NetLobbyServer, _WebsocketClient);
        function NetLobbyServer() {
          var _this;
          _this = _WebsocketClient.call(this, "lobby") || this;
          _this.authParams = void 0;
          console.log('Lobby Connection created as Websocket');
          return _this;
        }
        return NetLobbyServer;
      }(WebsocketClient));
      var HttpLobbyServer = exports('HttpLobbyServer', /*#__PURE__*/function () {
        var _proto = HttpLobbyServer.prototype;
        _proto.addErrorFilter = function addErrorFilter(error, cb, target) {
          this._globalErrorFilters[error] = {
            cb: cb,
            target: target
          };
        };
        function HttpLobbyServer() {
          this._globalErrorFilters = {};
          this._http = void 0;
          this._serverUrl = '';
          this.authParams = void 0;
          console.log('Lobby Connection created as HTTP');
        }
        _proto.createConnection = function createConnection(serverUrls) {
          var index = Math.floor(serverUrls.length * Math.random());
          var serverUrl = serverUrls[index];
          if (serverUrl == null || serverUrl == '') {
            return;
          }
          this._serverUrl = serverUrl;
          this._http = NetUtil.createHttpClient(this._serverUrl);
        };
        _proto.callApi = /*#__PURE__*/function () {
          var _callApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(apiName, req, options) {
            var _this$_http;
            var ret, filter;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.authParams) {
                    req['token'] = this.authParams.token;
                  }
                  if (GameConst.openNetworkLog) {
                    console.log(Logger.getDateString() + '[callApi]:', apiName + "," + JSON.stringify(req));
                  }
                  _context.next = 4;
                  return (_this$_http = this._http) == null ? void 0 : _this$_http.callApi(apiName, req, options);
                case 4:
                  ret = _context.sent;
                  if (GameConst.openNetworkLog) {
                    console.log(Logger.getDateString() + '[ApiRes]:', apiName + "," + JSON.stringify(ret));
                  }
                  if (!ret.isSucc) {
                    filter = this._globalErrorFilters[ret.err.message];
                    if (filter) {
                      filter.cb.call(filter.target, ret.err);
                    }
                  }
                  return _context.abrupt("return", ret);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function callApi(_x, _x2, _x3) {
            return _callApi.apply(this, arguments);
          }
          return callApi;
        }();
        _createClass(HttpLobbyServer, [{
          key: "type",
          get: function get() {
            return 'http';
          }
        }, {
          key: "serverUrl",
          get: function get() {
            return this._serverUrl;
          }
        }]);
        return HttpLobbyServer;
      }());
      var HttpApiServer = exports('HttpApiServer', /*#__PURE__*/function () {
        var _proto2 = HttpApiServer.prototype;
        _proto2.addErrorFilter = function addErrorFilter(error, cb, target) {
          this._globalErrorFilters[error] = {
            cb: cb,
            target: target
          };
        };
        function HttpApiServer() {
          this._globalErrorFilters = {};
          this._http = void 0;
          this._serverUrl = '';
          this.authParams = void 0;
          console.log('Lobby Connection created as HTTP');
        }
        _proto2.createConnection = function createConnection(serverUrls) {
          var index = Math.floor(serverUrls.length * Math.random());
          var serverUrl = serverUrls[index];
          if (serverUrl == null || serverUrl == '') {
            return;
          }
          this._serverUrl = serverUrl;
        };
        _proto2.callApi = /*#__PURE__*/function () {
          var _callApi2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(apiName, req) {
            var xhr, ret;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (GameConst.openNetworkLog) {
                    console.log(Logger.getDateString() + '[callApi]:', apiName + "," + JSON.stringify(req));
                  }
                  xhr = new XMLHttpRequest();
                  xhr.open('POST', this._serverUrl, true);
                  xhr.setRequestHeader('Content-Type', 'application/json');
                  if (this.authParams && this.authParams.apiToken) {
                    xhr.setRequestHeader('Authorization', "Basic " + this.authParams.apiToken); // 添加token到请求头
                  }

                  _context2.next = 7;
                  return this.sendPost(apiName, req);
                case 7:
                  ret = _context2.sent;
                  if (GameConst.openNetworkLog) {
                    console.log(Logger.getDateString() + '[ApiRes]:', apiName + "," + JSON.stringify(ret));
                  }
                  return _context2.abrupt("return", ret);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function callApi(_x4, _x5) {
            return _callApi2.apply(this, arguments);
          }
          return callApi;
        }();
        _proto2.sendPost = /*#__PURE__*/function () {
          var _sendPost = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(apiName, req) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', _this2._serverUrl + "/" + apiName, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    if (_this2.authParams && _this2.authParams.apiToken) {
                      xhr.setRequestHeader('Authorization', "Basic " + _this2.authParams.apiToken);
                    }
                    xhr.onreadystatechange = function () {
                      if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                          try {
                            var response = JSON.parse(xhr.responseText);
                            resolve(response);
                          } catch (e) {
                            reject({
                              code: 5001,
                              message: 'JSON解析失败'
                            });
                          }
                        } else {
                          reject({
                            code: xhr.status,
                            message: "HTTP\u9519\u8BEF: " + xhr.status
                          });
                        }
                      }
                    };
                    xhr.onerror = function () {
                      reject({
                        code: 5002,
                        message: '网络错误'
                      });
                    };
                    xhr.ontimeout = function () {
                      reject({
                        code: 5003,
                        message: '请求超时'
                      });
                    };
                    xhr.send(JSON.stringify(req));
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function sendPost(_x6, _x7) {
            return _sendPost.apply(this, arguments);
          }
          return sendPost;
        }();
        _createClass(HttpApiServer, [{
          key: "type",
          get: function get() {
            return 'http';
          }
        }, {
          key: "serverUrl",
          get: function get() {
            return this._serverUrl;
          }
        }]);
        return HttpApiServer;
      }());
      var NetGameServer = exports('NetGameServer', /*#__PURE__*/function (_WebsocketClient2) {
        _inheritsLoose(NetGameServer, _WebsocketClient2);
        function NetGameServer() {
          var _this3;
          _this3 = _WebsocketClient2.call(this, "game") || this;
          _this3.authParams = void 0;
          return _this3;
        }
        var _proto3 = NetGameServer.prototype;
        _proto3.connectToRoomServer = /*#__PURE__*/function () {
          var _connectToRoomServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(params) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.authParams = params;
                  this.createConnection([params.serverUrl]);
                  return _context4.abrupt("return", true);
                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function connectToRoomServer(_x8) {
            return _connectToRoomServer.apply(this, arguments);
          }
          return connectToRoomServer;
        }();
        _proto3.joinRoomServer = /*#__PURE__*/function () {
          var _joinRoomServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(uid) {
            var retJoin;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.callApi('game/AuthClient', {
                    sign: this.authParams.token,
                    uid: uid,
                    time: this.authParams.time,
                    roomId: this.authParams.roomId,
                    gameType: this.authParams.gameType,
                    subType: this.authParams.subType,
                    roleName: UserLocalCache.inst.getRoleName(uid)
                    // roleName:"_dangerous_test_",//将 roleName:"_dangerous_test_" 就会触发服务端的幸运状态， 这只是方便客户端测试幸运状态效果用
                  });

                case 2:
                  retJoin = _context5.sent;
                  return _context5.abrupt("return", retJoin);
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function joinRoomServer(_x9) {
            return _joinRoomServer.apply(this, arguments);
          }
          return joinRoomServer;
        }();
        _proto3.playSlots = /*#__PURE__*/function () {
          var _playSlots = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(gamekey, bet) {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.callApi('slots/PlaySlots', {
                    gameId: gamekey,
                    bet: bet
                  });
                case 2:
                  retSpin = _context6.sent;
                  return _context6.abrupt("return", retSpin);
                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function playSlots(_x10, _x11) {
            return _playSlots.apply(this, arguments);
          }
          return playSlots;
        }();
        _proto3.PlayMatch3 = /*#__PURE__*/function () {
          var _PlayMatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(gamekey, bet) {
            var retSpin;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.callApi('slots/PlayMatch3', {
                    gameId: gamekey,
                    bet: bet
                  });
                case 2:
                  retSpin = _context7.sent;
                  return _context7.abrupt("return", retSpin);
                case 4:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function PlayMatch3(_x12, _x13) {
            return _PlayMatch.apply(this, arguments);
          }
          return PlayMatch3;
        }();
        return NetGameServer;
      }(WebsocketClient));
      var loginNet = exports('loginNet', new HttpLobbyServer());
      var lobbyNet = exports('lobbyNet', new NetLobbyServer());
      var gameNet = exports('gameNet', new NetGameServer());
      var apiNet = exports('apiNet', new HttpApiServer());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs', './index2.mjs', './serviceProto_public.ts', './FrontConfig.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, HttpClient, WsClient, serviceProto, GameServerURLs;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      HttpClient = module.HttpClient;
      WsClient = module.WsClient;
    }, null, function (module) {
      serviceProto = module.serviceProto;
    }, function (module) {
      GameServerURLs = module.GameServerURLs;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fd370Me9EdDB6FIiP2nYNCS", "NetUtil", undefined);

      /** 网络请求相关 */
      var NetUtil = exports('NetUtil', /*#__PURE__*/function () {
        function NetUtil() {}
        NetUtil.createHttpClient = function createHttpClient(serverUrl) {
          return new HttpClient(serviceProto, {
            server: serverUrl,
            json: true,
            logger: console
          });
        };
        /** World Server */
        NetUtil.createWebsocketClient = function createWebsocketClient(serverUrl) {
          NetUtil.count++;
          var client = new WsClient(serviceProto, {
            server: serverUrl,
            heartbeat: {
              interval: 5000,
              timeout: 5000
            },
            json: true,
            logger: console,
            logMsg: false,
            logApi: false
          });

          // FLOWS
          // TODO

          return client;
        };
        NetUtil.getGameServerList = /*#__PURE__*/function () {
          var _getGameServerList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  {
                    _context.next = 2;
                    break;
                  }
                case 2:
                  return _context.abrupt("return", GameServerURLs);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function getGameServerList() {
            return _getGameServerList.apply(this, arguments);
          }
          return getGameServerList;
        }();
        return NetUtil;
      }());
      NetUtil.count = 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkReconnector.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetGameServer.ts', './WebsocketClient.ts', './SceneDef.ts', './RoomMgr.ts', './LobbyMgr.ts', './SubGameMgr.ts', './LanguageData.ts', './GameMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, director, Director, Node, Component, gameNet, lobbyNet, WebsocketClient, SceneDef, RoomMgr, LobbyMgr, SubGameMgr, LanguageData, GameMode;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Director = module.Director;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      gameNet = module.gameNet;
      lobbyNet = module.lobbyNet;
    }, function (module) {
      WebsocketClient = module.WebsocketClient;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      GameMode = module.GameMode;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3bb82Jyas5KEpugsB2U5BtL", "NetworkReconnector", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //主动添加到所有场景。
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        {
          if (director.getScene().getChildByName('NetworkReconnector')) {
            throw new Error('NetworkReconnector can only be added by code, please remove from scene:.' + director.getScene().name);
          }
          var node = new Node('NetworkReconnector');
          node.addComponent(NetworkReconnector);
          director.getScene().addChild(node);
        }
      });
      var NetworkReconnector = exports('NetworkReconnector', (_dec = ccclass('NetworkReconnector'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetworkReconnector, _Component);
        function NetworkReconnector() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._tryTimes = 0;
          _this._isReconnecting = false;
          return _this;
        }
        var _proto = NetworkReconnector.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.schedule(function () {
            _this2.checkNetwork();
          }, 1.0);
          gameNet.on(WebsocketClient.EVENT_DISCONNECTED, this.onGameDisconnected, this);
          gameNet.on(WebsocketClient.EVENT_CONNECTED, this.onconnected, this);
          if (lobbyNet.type != 'http') {
            var net = lobbyNet;
            net.on(WebsocketClient.EVENT_DISCONNECTED, this.onLobbyDisconnected, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          gameNet.off(WebsocketClient.EVENT_DISCONNECTED, this.onGameDisconnected, this);
          gameNet.off(WebsocketClient.EVENT_CONNECTED, this.onconnected, this);
          if (lobbyNet.type != 'http') {
            var net = lobbyNet;
            net.off(WebsocketClient.EVENT_DISCONNECTED, this.onLobbyDisconnected, this);
          }
        };
        _proto.onconnected = function onconnected() {
          director.emit(WebsocketClient.EVENT_CONNECTED);
        };
        _proto.onGameDisconnected = function onGameDisconnected(v) {
          console.log('onGameDisconnected:' + JSON.stringify(v));
          this.onDisconnected(v);
        };
        _proto.onLobbyDisconnected = function onLobbyDisconnected(v) {
          console.log('onLobbyDisconnected:' + JSON.stringify(v));
          this.onDisconnected(v);
        };
        _proto.onDisconnected = function onDisconnected(v) {
          if (v.reason == 'login_to_other') {
            this.enabled = false;
            RoomMgr.inst.gameMode = GameMode.SOLO;
            tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message28")).onClick(function () {
              tgx.SceneUtil.loadScene(SceneDef.LOGIN);
            });
          } else if (v.reason == "room_closed") {
            this.enabled = false;
            RoomMgr.inst.gameMode = GameMode.SOLO;
            tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message29")).onClick(function () {
              RoomMgr.inst.exitRoom();
            });
          } else if (v.reason == 'prepare_timeout') {
            this.enabled = false;
            RoomMgr.inst.gameMode = GameMode.SOLO;
            tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message30")).onClick(function () {
              RoomMgr.inst.exitRoom();
            });
          }
        };
        _proto.needReconnect = function needReconnect(v) {
          if (!v) {
            return true;
          }
          if (v.reason == 'login_to_other') {
            return false;
          }
          if (v.reason == 'normal' || v.reason == 'room_closed') {
            return false;
          }
          if (v.isManual) {
            return false;
          }
          return true;
        };
        _proto.checkNetwork = function checkNetwork() {
          if (this.isInGame) {
            //额外判断一个是否在连接中，不然会导致一个bug，刚去连接这里就去检测 重连
            if (gameNet.conn && !this._isReconnecting && !gameNet.conn.isConnected && !gameNet.conn["_connecting"]) {
              if (this.needReconnect(gameNet.lastDisconnectReason)) {
                this._isReconnecting = true;
                this.enabled = false;
                this.tryReconnect(gameNet);
              }
            }
          } else {
            if (lobbyNet.type != 'http') {
              var net = lobbyNet;
              //额外判断一个是否在连接中，不然会导致一个bug，刚去连接这里就去检测 重连
              if (net.conn && !this._isReconnecting && !net.conn.isConnected && !net.conn["_connecting"]) {
                if (this.needReconnect(net.lastDisconnectReason)) {
                  this._isReconnecting = true;
                  this.enabled = false;
                  this.tryReconnect(net);
                }
              }
            }
          }
        };
        _proto.tryReconnect = /*#__PURE__*/function () {
          var _tryReconnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(net) {
            var _this3 = this;
            var isSucc, ret, _ret, ret1;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._tryTimes++;
                  if (!(this._tryTimes > 10)) {
                    _context.next = 6;
                    break;
                  }
                  tgx.UIWaiting.hide();
                  this.enabled = false;
                  // 提示“网络异常，请重新登录”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message8")).onClick(function () {
                    tgx.SceneUtil.loadScene(SceneDef.LOGIN);
                  });
                  return _context.abrupt("return");
                case 6:
                  isSucc = false;
                  if (!this.isInGame) {
                    _context.next = 23;
                    break;
                  }
                  if (!(net == gameNet)) {
                    _context.next = 21;
                    break;
                  }
                  console.log('game reconnecting.');
                  // 提示“正在重连”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message3"));
                  //todo
                  _context.next = 13;
                  return SubGameMgr.inst.enterSubGameRoom(gameNet.authParams);
                case 13:
                  ret = _context.sent;
                  if (!ret.isSucc) {
                    _context.next = 18;
                    break;
                  }
                  isSucc = true;
                  _context.next = 21;
                  break;
                case 18:
                  if (!(ret.err.code == 'ROOM_NOT_EXISTS')) {
                    _context.next = 21;
                    break;
                  }
                  RoomMgr.inst.exitRoom();
                  return _context.abrupt("return");
                case 21:
                  _context.next = 38;
                  break;
                case 23:
                  console.log('lobby reconnecting.');
                  // 提示“正在重连”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message3"));
                  _context.next = 27;
                  return net.ensureConnected();
                case 27:
                  _ret = _context.sent;
                  isSucc = _ret.isSucc;
                  /**
                   * @en if already login success, need to verify again
                   * @zh 如果已经登录成功，则需要再次验证
                  */
                  if (!_ret.isSucc) {
                    _context.next = 38;
                    break;
                  }
                  _context.next = 32;
                  return LobbyMgr.inst.doAuth();
                case 32:
                  ret1 = _context.sent;
                  if (ret1.isSucc) {
                    _context.next = 38;
                    break;
                  }
                  tgx.UIWaiting.hide();
                  this.enabled = false;
                  // 提示“网络异常，请重新登录”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message8")).onClick(function (bOK) {
                    tgx.SceneUtil.loadScene(SceneDef.LOGIN);
                  });
                  return _context.abrupt("return");
                case 38:
                  /**
                   * @en if re-connect failed, try again after 3s
                   * @zh 如果没有重连成功，则一定时间后再次尝试
                  */
                  if (!isSucc) {
                    setTimeout(function () {
                      _this3.tryReconnect(net);
                    }, 3000);
                  }
                case 39:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function tryReconnect(_x) {
            return _tryReconnect.apply(this, arguments);
          }
          return tryReconnect;
        }();
        _createClass(NetworkReconnector, [{
          key: "isInGame",
          get: function get() {
            var _SubGameMgr$gameMgr$g;
            return SubGameMgr.gameMgr && director.getScene().name == ((_SubGameMgr$gameMgr$g = SubGameMgr.gameMgr.gameScene) == null ? void 0 : _SubGameMgr$gameMgr$g.name);
          }
        }]);
        return NetworkReconnector;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/niuniu.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2cec9ciFM1GPZNmQKEu2+FE", "niuniu", undefined);
      /** 房间状态 */
      var e_room_status = exports('e_room_status', /*#__PURE__*/function (e_room_status) {
        e_room_status[e_room_status["Normal"] = 0] = "Normal";
        e_room_status[e_room_status["DengDai"] = 1] = "DengDai";
        e_room_status[e_room_status["Ready"] = 2] = "Ready";
        e_room_status[e_room_status["QiangZhuang"] = 3] = "QiangZhuang";
        e_room_status[e_room_status["ShowRandomZhuang"] = 4] = "ShowRandomZhuang";
        e_room_status[e_room_status["XiaZhu"] = 5] = "XiaZhu";
        e_room_status[e_room_status["TanPai"] = 6] = "TanPai";
        e_room_status[e_room_status["JieSuan"] = 7] = "JieSuan";
        return e_room_status;
      }({}));

      /** 下发给客户端的数据结构 */

      /** 抢庄下发数据结构 */

      /** interface gameover */

      /** 结算的时候输赢枚举 */
      var e_win_fail = exports('e_win_fail', {
        Normal: 0,
        fail: 1,
        win: 2
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/nodePosCenter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, ccenum, _decorator, Node, CCFloat, Component;
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
      Node = module.Node;
      CCFloat = module.CCFloat;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4e26eVWP/5OdqRucpR7Nbky", "nodePosCenter", undefined);

      /**
       * @en Layout type.
       *
       * @zh 布局类型。
       */
      var Type = /*#__PURE__*/function (Type) {
        Type[Type["HORIZONTAL"] = 1] = "HORIZONTAL";
        Type[Type["VERTICAL"] = 2] = "VERTICAL";
        return Type;
      }(Type || {});
      ccenum(Type);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // 视图层实体是空的
      var nodePosCenter = exports('nodePosCenter', (_dec = ccclass('nodePosCenter'), _dec2 = property({
        type: [Node],
        tooltip: "子节点数组"
      }), _dec3 = property({
        type: CCFloat,
        tooltip: "间隔"
      }), _dec4 = property({
        type: Type,
        tooltip: "对其类型"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(nodePosCenter, _Component);
        function nodePosCenter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nodeArr", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dis", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "type", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = nodePosCenter.prototype;
        _proto.update = function update() {
          if (this.type == Type.HORIZONTAL) {
            var allWidth = 0;
            var showNodeArr = [];
            for (var i = 0; i < this.nodeArr.length; i++) {
              var temp = this.nodeArr[i];
              if (temp.active) {
                showNodeArr.push(temp);
                allWidth += temp.w + this.dis;
                if (showNodeArr.length > 1) {
                  temp.x = showNodeArr[showNodeArr.length - 2].x + showNodeArr[showNodeArr.length - 2].w / 2 + temp.w / 2 + this.dis;
                } else {
                  temp.x = 0;
                }
              }
            }
            for (var _i = 0; _i < showNodeArr.length; _i++) {
              showNodeArr[_i].x = showNodeArr[_i].x - (allWidth / 2 - showNodeArr[0].w / 2);
            }
          } else {
            var allHeight = 0;
            var _showNodeArr = [];
            for (var _i2 = 0; _i2 < this.nodeArr.length; _i2++) {
              var _temp = this.nodeArr[_i2];
              if (_temp.active) {
                _showNodeArr.push(_temp);
                allHeight += _temp.h + this.dis;
                if (_showNodeArr.length > 1) {
                  _temp.y = this.nodeArr[_i2 - 1].y + this.nodeArr[_i2 - 1].h / 2 + _temp.h / 2 + this.dis;
                } else {
                  _temp.y = 0;
                }
              }
            }
            for (var _i3 = 0; _i3 < _showNodeArr.length; _i3++) {
              _showNodeArr[_i3].y = _showNodeArr[_i3].y - (allHeight / 2 - _showNodeArr[0].h / 2);
            }
          }
        };
        return nodePosCenter;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeArr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dis", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type.HORIZONTAL;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerDefine.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e4a5eeMMVZCqbtcnzYkn5K7", "PokerDefine", undefined);
      var ROOM_STATUS = exports('ROOM_STATUS', /*#__PURE__*/function (ROOM_STATUS) {
        ROOM_STATUS[ROOM_STATUS["IDLE"] = 0] = "IDLE";
        ROOM_STATUS[ROOM_STATUS["WAITING"] = 1] = "WAITING";
        ROOM_STATUS[ROOM_STATUS["PLAYING"] = 2] = "PLAYING";
        return ROOM_STATUS;
      }({})); //游戏中
      var PokerEventMessage = exports('PokerEventMessage', function PokerEventMessage() {});
      //玩家离开房间
      PokerEventMessage.POKER_USER_LEAVE_ROOM = 'POKER_USER_LEAVE_ROOM';
      //玩家进入房间
      PokerEventMessage.POKER_USER_ENTER_ROOM = 'POKER_USER_ENTER_ROOM';
      //玩家状态变更
      PokerEventMessage.POKER_USER_STATUS_CHANGE = 'POKER_USER_STATUS_CHANGE';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoomMgr.ts', './NetGameServer.ts', './PokerDefine.ts', './Logger.ts', './UserMgr.ts', './LanguageData.ts'], function (exports) {
  var _createClass, cclegacy, _decorator, director, RoomEvent, RoomMgr, gameNet, ROOM_STATUS, PokerEventMessage, Logger, UserMgr, LanguageData;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
    }, function (module) {
      RoomEvent = module.RoomEvent;
      RoomMgr = module.RoomMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      ROOM_STATUS = module.ROOM_STATUS;
      PokerEventMessage = module.PokerEventMessage;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a5d4b1c9bpCbLSX0He1URNw", "PokerManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerManager = exports('PokerManager', /*#__PURE__*/function () {
        function PokerManager() {
          this._roomData = void 0;
          this._myChairID = void 0;
        }
        var _proto = PokerManager.prototype;
        //获取对应位置的玩家信息
        _proto.getTableUserItem = function getTableUserItem(chairID) {
          for (var i = 0; i < this._roomData.userList.length; i++) {
            if (this._roomData.userList[i].chairID == chairID) {
              return this._roomData.userList[i];
            }
          }
          return null;
        };
        _proto.init = function init() {};
        _proto.uinit = function uinit() {
          this.end();
        }
        /**
         * 开始
         */;
        _proto.start = function start() {
          //注册各种消息  
          director.on(RoomEvent.ROOM_DATA_SYNC, this.onRoomBackByRoomMgr, this);
          director.on(RoomEvent.USER_LEAVES, this.onUserLevelRoom, this);
          director.on(RoomEvent.NEW_USER_COMES, this.onUserEnterRoom, this);
          director.on(RoomEvent.USER_DATA_CHANGED, this.onUserDataChange, this);
          gameNet.listenMsg("room/UserJoin", this.onUserJoin, this);
          console.log("rpc_ClientReady");
          RoomMgr.inst.rpc_ClientReady();
        }
        /**
         * 结束
         */;
        _proto.end = function end() {
          //移除消息
          gameNet.unlistenMsgAllByThis(this);
          director.off(RoomEvent.ROOM_DATA_SYNC, this.onRoomBackByRoomMgr, this);
          director.off(RoomEvent.USER_LEAVES, this.onUserLevelRoom, this);
          director.off(RoomEvent.NEW_USER_COMES, this.onUserEnterRoom, this);
          director.off(RoomEvent.USER_DATA_CHANGED, this.onUserDataChange, this);
        }
        //准备
        ;

        _proto.onReady = function onReady() {
          RoomMgr.inst.rpc_Ready();
        }
        //取消准备
        ;

        _proto.onCancelReady = function onCancelReady() {
          //gameNet.sendMsg('fish/Fire', msg);
        }

        /**通过玩家id 获取玩家数据 */;
        _proto.getUserInfoByID = function getUserInfoByID(userID) {
          for (var i = 0; i < this._roomData.userList.length; i++) {
            if (this._roomData.userList[i].userID == userID) {
              return this._roomData.userList[i];
            }
          }
          return null;
        }

        /**通过玩家座号 获取玩家数据 */;
        _proto.getUserInfoByChairID = function getUserInfoByChairID(chairID) {
          for (var i = 0; i < this._roomData.userList.length; i++) {
            if (this._roomData.userList[i].chairID == chairID) {
              return this._roomData.userList[i];
            }
          }
          return null;
        }

        //框架的房间信息
        ;

        _proto.onRoomBackByRoomMgr = function onRoomBackByRoomMgr() {
          this._roomData = new RoomData();
          this._roomData.roomID = RoomMgr.inst.data.id;
          this._roomData.playerCount = RoomMgr.inst.data.maxPlayerNum;
          this._roomData.roomName = RoomMgr.inst.data.name;
          if (RoomMgr.inst.data.isPlaying) {
            this._roomData.roomStatus = ROOM_STATUS.PLAYING;
          } else {
            this._roomData.roomStatus = ROOM_STATUS.IDLE;
          }
          for (var i = 0; i < RoomMgr.inst.data.userList.length; i++) {
            var element = RoomMgr.inst.data.userList[i];
            var userInfo = new UserInfo();
            userInfo.userID = element.uid;
            userInfo.nickname = element.name;
            userInfo.gender = element.gender;
            userInfo.gold = element.coin;
            userInfo.isReady = element.ready ? element.ready : false;
            if (element.chairId !== undefined) {
              userInfo.chairID = element.chairId;
              if (userInfo.userID == UserMgr.inst.uid) {
                this._myChairID = userInfo.chairID;
              }
            }
            this._roomData.userList.push(userInfo);
          }
          if (RoomMgr.inst.data.isEnd) {
            //结束
            tgx.UIAlert.show(LanguageData.getLangByID("game_over")).onClick(function () {
              //退到平台
              tgx.AudioMgr.inst.audio.clearAll();
              RoomMgr.inst.exitRoom();
            });
          }
        }
        //玩家离开房间
        ;

        _proto.onUserLevelRoom = function onUserLevelRoom(data) {
          for (var i = 0; i < this._roomData.userList.length; i++) {
            if (this._roomData.userList[i].userID == data.uid) {
              var user = this._roomData.userList[i];
              this._roomData.userList.splice(i, 1);
              director.emit(PokerEventMessage.POKER_USER_LEAVE_ROOM, user);
              return;
            }
          }
          Logger.error("onUserStatusChange not find id:" + 111);
        }
        //玩家进入房间
        ;

        _proto.onUserEnterRoom = function onUserEnterRoom(element) {
          var userInfo = new UserInfo();
          userInfo.userID = element.uid;
          if (element.chairId !== undefined) {
            userInfo.chairID = element.chairId;
          }
          userInfo.nickname = element.name;
          userInfo.gender = element.gender;
          userInfo.gold = element.coin;
          userInfo.isReady = false;
          this._roomData.userList.push(userInfo);
          //这里没有座位号 不推送玩家新增给，等收到userjson再推
        };

        _proto.onUserDataChange = function onUserDataChange(msg) {
          var userInfo = this.getUserInfoByID(msg.uid);
          if (userInfo == null) {
            return;
          }
          if (msg.chairId !== undefined) {
            userInfo.chairID = msg.chairId;
            if (userInfo.userID == UserMgr.inst.uid) {
              this._myChairID = userInfo.chairID;
            }
          }
          if (msg.ready !== undefined) {
            userInfo.isReady = msg.ready;
            director.emit(PokerEventMessage.POKER_USER_STATUS_CHANGE, userInfo);
          }
        }
        //玩家加入
        ;

        _proto.onUserJoin = function onUserJoin(msg) {
          var userInfo = this.getUserInfoByID(msg.uid);
          director.emit(PokerEventMessage.POKER_USER_ENTER_ROOM, userInfo);
        };
        _createClass(PokerManager, [{
          key: "roomData",
          get: function get() {
            return this._roomData;
          }
        }, {
          key: "myChairID",
          get: function get() {
            return this._myChairID;
          }
        }, {
          key: "myUserID",
          get: function get() {
            return UserMgr.inst.uid;
          }
        }], [{
          key: "inst",
          get:
          //自己的位置
          function get() {
            if (!this._inst) {
              this._inst = new PokerManager();
            }
            return this._inst;
          }
        }]);
        return PokerManager;
      }());
      PokerManager._inst = void 0;
      var RoomData = exports('RoomData',
      //玩家信息列表
      function RoomData() {
        this.roomID = void 0;
        //房间id
        this.roomName = void 0;
        this.roomStatus = void 0;
        this.serialNumber = void 0;
        //底分
        this.playerCount = void 0;
        //人数（不同游戏 不同玩法 人数不一样）
        this.userList = void 0;
        this.userList = [];
      });
      var UserInfo = exports('UserInfo',
      //是否托管
      function UserInfo() {
        this.userID = void 0;
        // 玩家id
        this.chairID = void 0;
        // 座位
        this.gold = void 0;
        //金币
        this.head = void 0;
        //头像
        this.nickname = void 0;
        // 名字
        this.gender = void 0;
        this.isReady = void 0;
        //是否准备
        this.trusteeship = void 0;
        this.chairID = -1;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Progress.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, ParticleSystem2D, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      ParticleSystem2D = module.ParticleSystem2D;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f9a14b5L0RMo62U29OFPlG0", "Progress", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Progress = exports('default', (_dec = ccclass('Progress'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec4 = property(ParticleSystem2D), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Progress, _Component);
        function Progress() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "percentLable", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bar", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particleSystem", _descriptor3, _assertThisInitialized(_this));
          _this._dotCount = 0;
          _this._dotTime = 1;
          _this._msg = "";
          return _this;
        }
        var _proto = Progress.prototype;
        _proto.onLoad = function onLoad() {
          this.bar.node.active = false;
          this.bar.progress = 0;
        };
        _proto.start = function start() {
          this.particleSystem.node.active = false;
          this.setMsg(0);
        };
        _proto.updatePercent = function updatePercent(current, filePercent) {
          //this.percentLable.string =  filePercent.toFixed(2);
        };
        _proto.updatefileTotal = function updatefileTotal(current, filePercent) {
          if (!this.bar.node.active) this.bar.node.active = true;
          var nowPercent = Math.round(current / filePercent * 100);
          var curMB = this.getMB(current);
          var totalMB = this.getMB(filePercent);
          // this.percentLable.string = "正在更新 " + nowPercent + "%" + " ( " + curMB + " / "+totalMB +" MB)";
          nowPercent = Math.min(nowPercent, 100);
          this.percentLable.string = "正在更新 " + nowPercent + "%";
          var percent = current / filePercent;
          this.bar.progress = percent;
        };
        _proto.updateProgress = function updateProgress(process, msg) {
          if (msg === void 0) {
            msg = "";
          }
          if (process <= 0.05) {
            process = 0.05;
          }
          this.bar.node.active = true;
          this._msg = msg;
          // this.setMsg(msg+ current + "/" + total);
          this.setMsg(process);
          this.bar.progress = process;
          // this.particleSystem.node.active = (this.bar.progress == 0 || this.bar.progress == 1) ? false : true;
          this.particleSystem.node.active = true;
        };
        _proto.update = function update(dt) {
          // this._dotTime += dt;
          // if (this._dotTime < .5) return;
          // else this._dotTime = 0;
          // this._dotCount = (this._dotCount % 3) + 1;
          // this.setMsg(this._msg.replace(/\./g, '') + '.'.repeat(this._dotCount));
        };
        _proto.getMB = function getMB(bytes) {
          bytes /= 1024;
          bytes /= 1024;
          return bytes.toFixed(2);
        };
        _proto.setMsg = function setMsg(process) {
          this.percentLable.string = Math.floor(process * 100) + '%';
        };
        return Progress;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "percentLable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "particleSystem", [_dec4], {
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

System.register("chunks:///_virtual/PtlAuth.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ad796MusMNJH7BlquhcAGV5", "PtlAuth", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlAuthClient.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b45b5kNwUxOwKQUBHRRBVch", "PtlAuthClient", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlCancelMatch.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fe21cuFYfRODY8LwZXio48R", "PtlCancelMatch", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlClearAllMails.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "47d0cnf8idBCpKaCOhl2+RC", "PtlClearAllMails", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlCreateRole.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5df41D6FTxBB4NZQePnBcyj", "PtlCreateRole", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlCreateRoom.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09fdcRcms1DwI2o+5o3/yrd", "PtlCreateRoom", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlDeleteMail.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e35c2jAB1VMjqqv797+Awry", "PtlDeleteMail", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlExitRoom.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4b10aGmnC5Og6PTGXY3TbqN", "PtlExitRoom", undefined);
      var conf = exports('conf', {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlFishConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "78944kgwPhBXaGqGcrD/eUa", "PtlFishConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlGetAnnouncement.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "47c30bP33hFYZG6kVO6bRIg", "PtlGetAnnouncement", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlGetBasicConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd38eFrj6xHVpr9Pr8aRLqh", "PtlGetBasicConfig", undefined);
      var conf = exports('conf', {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlGetMails.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "635c046vHNLV4eMUGtKVxV+", "PtlGetMails", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlGetNotice.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ae855gFz55OoYJ1ybxtwjQo", "PtlGetNotice", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlGetRoomList.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "54246SZbN1G+ZdiFCd/MfxS", "PtlGetRoomList", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlGetUserInfo.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bc8e23qgwJI8KFSCpeJPF1L", "PtlGetUserInfo", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlJoinGame.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4da7b6WVQ5LiJBA6Ni2gUA7", "PtlJoinGame", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlLogin.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fefe4yY0NBJbal1X4yR8r5s", "PtlLogin", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlMarkAllAsRead.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8d883mv29ZOAb3ZlB/McZYg", "PtlMarkAllAsRead", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlMarkAsRead.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "95033VCHdhEt6nNfyKFpZ4Q", "PtlMarkAsRead", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlModifyUserInfo.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fb8e1ZO+9ZFNqjkIOW1/0dv", "PtlModifyUserInfo", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlPlacePiece.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b3c5dXl7uBG6qCriDNAgf6o", "PtlPlacePiece", undefined);
      var conf = exports('conf', {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlPlayMatch3.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2e762BNkL9IWZmQa4E400ub", "PtlPlayMatch3", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlPlaySlots.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "57582aKRodHDoSuhRA6LA0L", "PtlPlaySlots", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlReady.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2039cxpaUdBFoLOWWZGf/kD", "PtlReady", undefined);
      var conf = exports('conf', {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlRegister.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3b55coltktNsZ7QHz+6iSrE", "PtlRegister", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlSendChat.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5e5b4GgrMFKyqkQj54oY3TW", "PtlSendChat", undefined);
      var conf = exports('conf', {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlStartMatch.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ebcdbgoRfpFjLl25dDTjM2C", "PtlStartMatch", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlTryEnterRoom.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "39e14ZOgcVFCLygBwV8C7yE", "PtlTryEnterRoom", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PtlUpdateUserInfo.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0e021AsZ0BOxruZJ17zvHqj", "PtlUpdateUserInfo", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomContent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigMgr.ts', './SubGameMgr.ts', './RoomItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, Vec3, UITransform, Layout, Component, ConfigMgr, SubGameMgr, RoomItem;
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
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Layout = module.Layout;
      Component = module.Component;
    }, function (module) {
      ConfigMgr = module.ConfigMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      RoomItem = module.RoomItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "10ccfvwqtdOPqlHdjiF5GME", "RoomContent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoomContent = exports('RoomContent', (_dec = ccclass('RoomContent'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomContent, _Component);
        function RoomContent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roomItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomContent", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RoomContent.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.updateRoomList();
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.updateRoomList = function updateRoomList() {
          var roomList = ConfigMgr.inst.getRoomListByGameKey(SubGameMgr.gameMgr.gameType);
          if (roomList == null) return;
          this.roomContent.removeAllChildren();
          var itemWidth = 0;
          for (var index = 0; index < roomList.length; index++) {
            var item = instantiate(this.roomItem);
            item.setParent(this.roomContent);
            item.setPosition(new Vec3(0));
            item.active = true;
            var roomItemScript = item.getComponent(RoomItem);
            roomItemScript.setData(roomList[index]);
            var uiTransform = item.getComponent(UITransform);
            itemWidth = uiTransform.contentSize.width;
          }
          var layout = this.roomContent.getComponent(Layout);
          this.roomContent.getComponent(UITransform).width = layout.paddingLeft + layout.paddingRight + itemWidth * roomList.length + (roomList.length - 1) * layout.spacingX;
        };
        return RoomContent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roomContent", [_dec3], {
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

System.register("chunks:///_virtual/RoomData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "351eekPXzFD+4PX+fwI6y86", "RoomData", undefined); //public - 公共场景，仅存一份，不销毁
      //private - 私有场景，由用户或者系统为专门的用途创建，会根据情况销毁
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts', './SubGameMgr.ts', './UserMgr.ts', './ResourceMgr.ts', './ModuleDef.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, sp, SpriteFrame, Component, LanguageData, SubGameMgr, UserMgr, ResourceMgr, ModuleDef, SubGameDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "72bbfPZpvBMGYsmZZlNw6GI", "RoomItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoomItem = exports('RoomItem', (_dec = ccclass('RoomItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomItem, _Component);
        function RoomItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "titleLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "limitLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "img_bg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bg", _descriptor5, _assertThisInitialized(_this));
          _this._data = null;
          return _this;
        }
        var _proto = RoomItem.prototype;
        _proto.start = function start() {};
        _proto.setData = function setData(data) {
          var _this2 = this;
          this._data = data;
          this.titleLabel.string = LanguageData.getLangByID(this._data.name);
          this.betLabel.string = LanguageData.getLangByID("room_tip1", this._data.bet);
          var min = Number(data.minGold);
          var max = Number(data.maxGold);
          // if (max == -1) {
          //     this.limitLabel.string = "" + min + "-∞";
          // } else {
          //     this.limitLabel.string = "" + min + "-" + max;
          // }
          this.limitLabel.string = LanguageData.getLangByID("room_tip2", min);
          if (SubGameMgr.gameMgr.gameType == SubGameDef.POKER_DEZHOU) {
            this.betLabel.string = LanguageData.getLangByID("room_tip3", this._data.bet / 2, this._data.bet);
          }
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, this._data.bg + "/spriteFrame", SpriteFrame, function (error, resObj) {
            if (!error) {
              _this2.img_bg.spriteFrame = resObj;
            }
          });
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, this._data.spine, sp.SkeletonData, function (error, resObj) {
            if (!error) {
              _this2.spine_bg.skeletonData = resObj;
              _this2.spine_bg.setAnimation(0, 'animation', true);
            }
          });
        };
        _proto.onItemClick = function onItemClick() {
          if (!this._data) return;
          if (UserMgr.inst.coin < this._data.minGold) {
            //金币不如
            tgx.UIAlert.show(LanguageData.getLangByID("gold_notenough")).onClick(function () {});
            return;
          }
          if (this._data.maxGold != -1 && UserMgr.inst.coin > this._data.maxGold) {
            //金币超出
            tgx.UIAlert.show(LanguageData.getLangByID("gold_exceed")).onClick(function () {});
            return;
          }
          SubGameMgr.inst.MatchRoom(SubGameMgr.gameMgr.gameType, true, String(this._data.id));
        };
        return RoomItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "limitLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "betLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "img_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec6], {
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

System.register("chunks:///_virtual/RoomList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubGameMgr.ts', './RoomListItem.ts', './LobbyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Component, instantiate, SubGameMgr, RoomListItem, LobbyMgr;
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
      Label = module.Label;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      RoomListItem = module.RoomListItem;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b80d7TzQSFMRZAqbuHZMHkv", "RoomList", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PAGE_ITEM_NUM = 7;
      var PAGE_REFRESH_TIME = 3;
      var RoomList = exports('RoomList', (_dec = ccclass('RoomList'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomList, _Component);
        function RoomList() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tips", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPage", _descriptor3, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._pageNum = 1;
          _this._itemPrefab = void 0;
          _this._waitingData = false;
          _this._lastClickTime = Date.now();
          return _this;
        }
        var _proto = RoomList.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.contentRoot.active = false;
                  this.tips.active = true;
                  this._itemPrefab = this.contentRoot.children[0];
                  this._itemPrefab.removeFromParent();
                  this.updatePageLabelView();
                  this.refreshRoomList(this._curPage, PAGE_ITEM_NUM);
                  this.schedule(function () {
                    _this2.refreshRoomList(_this2._curPage, PAGE_ITEM_NUM);
                  }, PAGE_REFRESH_TIME);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.refreshRoomList = /*#__PURE__*/function () {
          var _refreshRoomList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(curPage, pageItemNum) {
            var ret, rooms, i, node, cache, item, maxSpectatorNum, spectatorNum;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this._waitingData == true)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this._waitingData = true;
                  _context2.next = 5;
                  return LobbyMgr.inst.rpc_GetRoomList(SubGameMgr.curGameType, curPage, pageItemNum);
                case 5:
                  ret = _context2.sent;
                  this._waitingData = false;
                  if (ret.isSucc) {
                    _context2.next = 9;
                    break;
                  }
                  return _context2.abrupt("return");
                case 9:
                  if (this.isValid) {
                    _context2.next = 11;
                    break;
                  }
                  return _context2.abrupt("return");
                case 11:
                  this._curPage = ret.res.curPage;
                  this._pageNum = ret.res.pageNum;
                  this.updatePageLabelView();
                  rooms = ret.res.rooms;
                  if (rooms) {
                    this.contentRoot.children.forEach(function (v) {
                      v.active = false;
                    });
                    this.tips.active = false;
                    this.contentRoot.active = true;
                    for (i = 0; i < rooms.length; ++i) {
                      node = this.contentRoot.children[i];
                      if (!node) {
                        node = instantiate(this._itemPrefab);
                        this.contentRoot.addChild(node);
                      }
                      node.active = true;
                      cache = rooms[i];
                      item = node.getComponent(RoomListItem);
                      item.lblRoomId.string = cache.displayId;
                      item.lblName.string = cache.name;
                      item.lblPlayerNum.string = cache.playerNum + '/' + cache.maxPlayerNum;
                      maxSpectatorNum = cache.maxUserNum - cache.maxPlayerNum;
                      spectatorNum = cache.userNum - cache.playerNum;
                      item.lblSpectatorNum.string = spectatorNum + '/' + maxSpectatorNum;
                      item.needPassword = cache.needPassword;
                    }
                  }
                case 16:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function refreshRoomList(_x, _x2) {
            return _refreshRoomList.apply(this, arguments);
          }
          return refreshRoomList;
        }();
        _proto.update = function update(deltaTime) {};
        _proto.updatePageLabelView = function updatePageLabelView() {
          if (this._pageNum == 0) {
            this.lblPage.string = '0/0';
          } else {
            this.lblPage.string = this._curPage + 1 + '/' + this._pageNum;
          }
        };
        _proto.onBtnPrePage = function onBtnPrePage() {
          if (this._waitingData || Date.now() - this._lastClickTime < 1000) {
            return;
          }
          this._lastClickTime = Date.now();
          this._curPage--;
          if (this._curPage < 0) {
            this._curPage = 0;
          }
          this.refreshRoomList(this._curPage, PAGE_ITEM_NUM);
        };
        _proto.onBtnNextPage = function onBtnNextPage() {
          if (this._waitingData || Date.now() - this._lastClickTime < 1000) {
            return;
          }
          this._lastClickTime = Date.now();
          this._curPage++;
          if (this._curPage >= this._pageNum) {
            this._curPage = this._pageNum - 1;
          }
          this.refreshRoomList(this._curPage, PAGE_ITEM_NUM);
        };
        return RoomList;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomListItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIEnterRoom.ts', './LobbyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Component, UIEnterRoom, LobbyMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      UIEnterRoom = module.UIEnterRoom;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "3397edZltxOkLc2zoOqrGQC", "RoomListItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoomListItem = exports('RoomListItem', (_dec = ccclass('RoomListItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomListItem, _Component);
        function RoomListItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRoomId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPlayerNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSpectatorNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnEnter", _descriptor5, _assertThisInitialized(_this));
          _this.needPassword = void 0;
          return _this;
        }
        var _proto = RoomListItem.prototype;
        _proto.start = function start() {};
        _proto.onBtnEnterClicked = function onBtnEnterClicked() {
          var _this2 = this;
          if (this.needPassword) {
            tgx.UIMgr.inst.showUI(UIEnterRoom, function (ui) {
              ui.setFixedId(_this2.lblRoomId.string);
            });
          } else {
            LobbyMgr.inst.doTryEnterRoom(this.lblRoomId.string);
          }
        };
        _proto.update = function update(deltaTime) {};
        return RoomListItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblRoomId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblPlayerNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblSpectatorNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnEnter", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneDef.ts', './UserMgr.ts', './NetGameServer.ts', './LobbyMgr.ts', './Logger.ts', './SubGameMgr.ts', './SubGameDef.ts', './LanguageData.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, SceneDef, UserMgr, gameNet, LobbyMgr, Logger, SubGameMgr, getSubGameConf, SubGameType, LanguageData;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      getSubGameConf = module.getSubGameConf;
      SubGameType = module.SubGameType;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2d586/mrrJAf7NddALs7R03", "RoomMgr", undefined);
      var GameMode = exports('GameMode', function GameMode() {});
      GameMode.SOLO = 'solo';
      GameMode.AI = 'ai';
      GameMode.ONLINE = 'online';
      var RoomEvent = exports('RoomEvent', function RoomEvent() {});
      /**
       * @en PN is used for notifying data changed, then the client can get the new data from the master server.
       * @zh 用于通知客户端哪些数据变动，方便从 Master 获取最新数据
       * 
      */
      RoomEvent.PN = 'RoomEvent.PN';
      RoomEvent.NEW_USER_COMES = 'RoomEvent.NEW_USER_IN_TABLE';
      RoomEvent.WATCHER_LIST_CHANGED = 'RoomEvent.WATCHER_LIST_CHANGED';
      RoomEvent.USER_LEAVES = 'RoomEvent.USER_LEAVES';
      RoomEvent.USER_DATA_CHANGED = 'RoomEvent.USER_DATA_CHANGED';
      RoomEvent.ROOM_DATA_CHANGED = 'RoomEvent.ROOM_DATA_CHANGED';
      RoomEvent.ROOM_DATA_SYNC = 'RoomEvent.ROOM_DATA_SYNC';
      var RoomMgr = exports('RoomMgr', /*#__PURE__*/function () {
        function RoomMgr() {
          this._data = void 0;
          this._gameMode = GameMode.SOLO;
          this.initNetMsgHandlers();
        }
        var _proto = RoomMgr.prototype;
        _proto.init = function init() {};
        _proto.initAIMode = function initAIMode(gameType, userList) {
          this._gameMode = GameMode.AI;
          this._data = {
            id: 'ai-vs',
            gameType: gameType,
            displayId: 'ai-vs',
            name: 'ai-bs',
            maxUser: userList.length,
            userList: userList,
            maxPlayerNum: userList.length,
            playerNum: userList.length,
            isPlaying: true,
            messages: []
          };
        };
        _proto.reset = function reset() {
          console.log('--- RoomMgr.reset ---');
          this._gameMode = GameMode.SOLO;
          this._data = null;
        };
        _proto.rpc_Ready = /*#__PURE__*/function () {
          var _rpc_Ready = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return gameNet.callApi("room/Ready", {});
                case 2:
                  ret = _context.sent;
                  return _context.abrupt("return", ret);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function rpc_Ready() {
            return _rpc_Ready.apply(this, arguments);
          }
          return rpc_Ready;
        }() /**客户端准备就绪，场景加载好了 */;
        _proto.rpc_ClientReady = /*#__PURE__*/
        function () {
          var _rpc_ClientReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.sendMsg("room/ClientReady", {});
                case 2:
                  ret = _context2.sent;
                  return _context2.abrupt("return", ret);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function rpc_ClientReady() {
            return _rpc_ClientReady.apply(this, arguments);
          }
          return rpc_ClientReady;
        }();
        _proto.rpc_JoinGame = /*#__PURE__*/function () {
          var _rpc_JoinGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return gameNet.callApi("room/JoinGame", {});
                case 2:
                  ret = _context3.sent;
                  return _context3.abrupt("return", ret);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function rpc_JoinGame() {
            return _rpc_JoinGame.apply(this, arguments);
          }
          return rpc_JoinGame;
        }();
        _proto.rpc_LeaveRoom = /*#__PURE__*/function () {
          var _rpc_LeaveRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return gameNet.callApi("room/ExitRoom", {});
                case 2:
                  ret = _context4.sent;
                  return _context4.abrupt("return", ret);
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function rpc_LeaveRoom() {
            return _rpc_LeaveRoom.apply(this, arguments);
          }
          return rpc_LeaveRoom;
        }() //退出房间
        ;

        _proto.exitRoom = /*#__PURE__*/
        function () {
          var _exitRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(silence) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (silence === void 0) {
                    silence = false;
                  }
                  if (!this.isOnline) {
                    _context5.next = 18;
                    break;
                  }
                  _context5.next = 4;
                  return this.rpc_LeaveRoom();
                case 4:
                  ret = _context5.sent;
                  if (!ret.isSucc) {
                    _context5.next = 14;
                    break;
                  }
                  tgx.AudioMgr.inst.audio.clearAll();
                  gameNet.disconnect(3000, 'normal');
                  this.reset();
                  if (!silence) {
                    // 提示“正在返回大厅”
                    tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message4"));
                  }
                  _context5.next = 12;
                  return this.exitRoomToLobby(silence);
                case 12:
                  _context5.next = 16;
                  break;
                case 14:
                  tgx.UIAlert.show(ret.err.message);
                  return _context5.abrupt("return", {
                    isSucc: false,
                    err: ret.err
                  });
                case 16:
                  _context5.next = 21;
                  break;
                case 18:
                  gameNet.disconnect(3000, 'normal');
                  _context5.next = 21;
                  return this.exitRoomToLobby(silence);
                case 21:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function exitRoom(_x) {
            return _exitRoom.apply(this, arguments);
          }
          return exitRoom;
        }() /**退出房间 为了再次玩  不要退到平台 */;
        _proto.exitRoomToPlayAgain = /*#__PURE__*/
        function () {
          var _exitRoomToPlayAgain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!this.isOnline) {
                    _context6.next = 14;
                    break;
                  }
                  _context6.next = 3;
                  return this.rpc_LeaveRoom();
                case 3:
                  ret = _context6.sent;
                  if (!ret.isSucc) {
                    _context6.next = 10;
                    break;
                  }
                  gameNet.disconnect(3000, 'normal');
                  this.reset();
                  return _context6.abrupt("return", {
                    isSucc: true
                  });
                case 10:
                  tgx.UIAlert.show(ret.err.message);
                  return _context6.abrupt("return", {
                    isSucc: false
                  });
                case 12:
                  _context6.next = 15;
                  break;
                case 14:
                  return _context6.abrupt("return", {
                    isSucc: true
                  });
                case 15:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function exitRoomToPlayAgain() {
            return _exitRoomToPlayAgain.apply(this, arguments);
          }
          return exitRoomToPlayAgain;
        }();
        _proto.exitRoomToLobby = /*#__PURE__*/function () {
          var _exitRoomToLobby = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(silence) {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (silence === void 0) {
                    silence = false;
                  }
                  if (!silence) {
                    // 提示“正在返回大厅”
                    tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message4"));
                  }
                  if (!SubGameMgr.gameMgr.entryScene) {
                    _context7.next = 7;
                    break;
                  }
                  _context7.next = 5;
                  return LobbyMgr.inst.backToLobby(SubGameMgr.gameMgr.entryScene);
                case 5:
                  _context7.next = 10;
                  break;
                case 7:
                  if (SubGameMgr.gameMgr) SubGameMgr.gameMgr.uinit();
                  _context7.next = 10;
                  return LobbyMgr.inst.backToLobby(SceneDef.LOBBY);
                case 10:
                  if (!silence) {
                    tgx.UIWaiting.hide();
                  }
                case 11:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          function exitRoomToLobby(_x2) {
            return _exitRoomToLobby.apply(this, arguments);
          }
          return exitRoomToLobby;
        }();
        _proto.backToLogin = function backToLogin() {
          var _this = this;
          // 提示“网络链接断开，请重新登录”
          tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message10")).onClick(function () {
            _this.reset();
            tgx.SceneUtil.loadScene(SceneDef.LOGIN);
          });
        };
        _proto.getUser = function getUser(uid) {
          for (var i = 0; i < this._data.userList.length; ++i) {
            var u = this._data.userList[i];
            if (u.uid == uid) {
              return u;
            }
          }
        };
        _proto.enterRoom = /*#__PURE__*/function () {
          var _enterRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(params) {
            var ret, ret2, ret3, conf;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return gameNet.ensureConnected();
                case 2:
                  ret = _context8.sent;
                  if (ret.isSucc) {
                    _context8.next = 5;
                    break;
                  }
                  return _context8.abrupt("return", ret);
                case 5:
                  _context8.next = 7;
                  return gameNet.joinRoomServer(UserMgr.inst.uid);
                case 7:
                  ret2 = _context8.sent;
                  if (!ret2.isSucc) {
                    _context8.next = 12;
                    break;
                  }
                  this.gameMode = GameMode.ONLINE;
                  _context8.next = 14;
                  break;
                case 12:
                  Logger.error("enterRoom:" + ret2.err.message);
                  return _context8.abrupt("return", ret2);
                case 14:
                  _context8.next = 16;
                  return RoomMgr.inst.rpc_JoinGame();
                case 16:
                  ret3 = _context8.sent;
                  conf = getSubGameConf(params.gameType);
                  if (conf.gametype == SubGameType.SLOT) {
                    RoomMgr.inst.rpc_Ready();
                  }
                  return _context8.abrupt("return", ret3);
                case 20:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function enterRoom(_x3) {
            return _enterRoom.apply(this, arguments);
          }
          return enterRoom;
        }();
        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg('room/RoomDataSyncPush', this.onNet_RoomDataSyncPush, this);
          gameNet.listenMsg('room/RoomDataChangedPush', this.onNet_RoomDataChangedPush, this);
          gameNet.listenMsg('room/UserComesToRoomPush', this.onNet_UserComesToRoomPush, this);
          gameNet.listenMsg('room/UserDataChangedPush', this.onNet_UserDataChangedPush, this);
          gameNet.listenMsg('room/UserLeavesFromRoomPush', this.onNet_UserLeavesFromRoomPush, this);
          gameNet.listenMsg('room/RoomClosed', this.onNet_RoomClosed, this);
        }

        //==========================
        ;

        _proto.onNet_RoomDismissedPush = function onNet_RoomDismissedPush(msg) {};
        _proto.onNet_RoomDataSyncPush = function onNet_RoomDataSyncPush(msg) {
          this._data = msg.data;
          console.log('room data sync', msg.data);
          director.emit(RoomEvent.ROOM_DATA_SYNC, msg);
        };
        _proto.onNet_RoomDataChangedPush = function onNet_RoomDataChangedPush(msg) {
          if (!this._data) {
            return;
          }
          if (msg.isPlaying !== undefined) {
            this._data.isPlaying = msg.isPlaying;
          }
          if (msg.numPlayer !== undefined) {
            this._data.playerNum = msg.numPlayer;
          }

          //使用 director.getScene 发送 ROOM_DATA_CHANGED 事件
          director.emit(RoomEvent.ROOM_DATA_CHANGED, msg);
        };
        _proto.onNet_UserComesToRoomPush = function onNet_UserComesToRoomPush(msg) {
          if (!this._data) {
            return;
          }
          var user = this.getUser(msg.uid);
          if (!user) {
            this._data.userList.push(msg);
          }
          director.emit(RoomEvent.NEW_USER_COMES, msg);
        };
        _proto.onNet_UserDataChangedPush = function onNet_UserDataChangedPush(msg) {
          if (!this._data) {
            return;
          }
          var userId = msg.uid;
          var u = this.getUser(userId);
          if (!u) {
            return;
          }
          if (msg.ready !== undefined) {
            u.ready = msg.ready;
          }
          if (msg.playerId !== undefined) {
            u.playerId = msg.playerId;
          }
          if (msg.isOnline !== undefined) {
            u.isOnline = msg.isOnline;
          }
          director.emit(RoomEvent.USER_DATA_CHANGED, msg);
        };
        _proto.onNet_UserLeavesFromRoomPush = function onNet_UserLeavesFromRoomPush(msg) {
          if (!this._data) {
            return;
          }
          var isPlayer = false;
          for (var i = 0; i < this._data.userList.length; ++i) {
            var p = this._data.userList[i];
            if (p.uid == msg.uid) {
              this._data.userList.splice(i, 1);
              isPlayer = !!p.playerId;
              break;
            }
          }
          director.emit(RoomEvent.USER_LEAVES, {
            uid: msg.uid,
            isPlayer: isPlayer
          });
        };
        _proto.onNet_RoomClosed = function onNet_RoomClosed(msg) {
          if (!this._data || this._data.id != msg.roomId || this._data.gameType != msg.gameType) {
            return;
          }
          //tgx.UIAlert.show('房间已关闭').onClick(()=>{
          //    this.backToLobby();
          //});
        }
        /**获取对应玩家的信息 */;
        _proto.getPlayData = function getPlayData(uid) {
          if (!this._data) return null;
          for (var i = 0; i < this._data.userList.length; i++) {
            if (this._data.userList[i].uid == uid) {
              return this._data.userList[i];
            }
          }
          return null;
        };
        _createClass(RoomMgr, [{
          key: "data",
          get: function get() {
            return this._data;
          }
        }, {
          key: "gameMode",
          get: function get() {
            return this._gameMode;
          },
          set: function set(v) {
            this._gameMode = v;
          }
        }, {
          key: "isOnline",
          get: function get() {
            return this.gameMode == GameMode.ONLINE;
          }
        }, {
          key: "worldId",
          get: function get() {
            if (!this._data) {
              return '';
            }
            return this._data.id;
          }
        }, {
          key: "isPlayer",
          get: function get() {
            if (!this._data) {
              return false;
            }
            var user = this.getUser(UserMgr.inst.uid);
            return user ? !!user.playerId : false;
          }
        }, {
          key: "isPlaying",
          get: function get() {
            if (!this._data) {
              return false;
            }
            return this._data.isPlaying;
          }
        }, {
          key: "isWatcher",
          get: function get() {
            if (!this._data) {
              return false;
            }
            var user = this.getUser(UserMgr.inst.uid);
            return user ? !user.playerId : false;
          }
        }, {
          key: "selfUser",
          get: function get() {
            return this.getUser(UserMgr.inst.uid);
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new RoomMgr();
            }
            return this._inst;
          }
        }]);
        return RoomMgr;
      }());
      RoomMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Select.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, Component;
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
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "b204b72QKVKjp/LVsGGeHXP", "Select", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var highlight = exports('highlight', (_dec = ccclass('select'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(highlight, _Component);
        function highlight() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 声明子节点属性
          _initializerDefineProperty(_this, "all", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multiplayer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skill", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slots", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sports", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highlight", _descriptor6, _assertThisInitialized(_this));
          _this.targetPos = null;
          return _this;
        }
        var _proto = highlight.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {
          if (this.highlight && this.targetPos) {
            var currentPos = this.highlight.position;
            var newPos = Vec3.lerp(new Vec3(), currentPos, this.targetPos, 0.1);
            this.highlight.setPosition(newPos);

            // 当接近目标位置时停止移动
            if (Vec3.distance(newPos, this.targetPos) < 0.1) {
              this.targetPos = null;
            }
          }
        };
        _proto.select_click = function select_click(event, args) {
          console.log(this.highlight.getPosition());
          switch (args) {
            case "all":
              this.targetPos = new Vec3(-460, 0, 0);
              break;
            case "multiplayer":
              this.targetPos = new Vec3(-220, 0, 0);
              break;
            case "skill":
              this.targetPos = new Vec3(220, 0, 0);
              break;
            case "slots":
              this.targetPos = new Vec3(0, 0, 0);
              break;
            case "sports":
              this.targetPos = new Vec3(460, 0, 0);
              break;
          }
        };
        return highlight;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "all", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "multiplayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skill", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "slots", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sports", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "highlight", [_dec7], {
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

System.register("chunks:///_virtual/ServerDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b60b5LYJ5pBM74wZ//xtojw", "ServerDef", undefined);
      var ServerType = exports('ServerType', /*#__PURE__*/function (ServerType) {
        ServerType[ServerType["Master"] = 0] = "Master";
        ServerType[ServerType["Match"] = 1] = "Match";
        ServerType[ServerType["Lobby"] = 2] = "Lobby";
        ServerType[ServerType["Game"] = 3] = "Game";
        return ServerType;
      }({}));
      /**
       * @en server info, for cluster load balance and server list display
       * @zh 服务器信息，用于集群负载均衡，以及服务器列表显示
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/serviceProto_public.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2ae67UaeuRDxppgPhZ2WWrX", "serviceProto_public", undefined);
      var serviceProto = exports('serviceProto', {
        "version": 119,
        "services": [{
          "id": 0,
          "name": "billiards/AdjustCue",
          "type": "msg"
        }, {
          "id": 1,
          "name": "billiards/BallsDataSync",
          "type": "msg"
        }, {
          "id": 2,
          "name": "billiards/GameBeginPush",
          "type": "msg"
        }, {
          "id": 3,
          "name": "billiards/GameDataChangedPush",
          "type": "msg"
        }, {
          "id": 4,
          "name": "billiards/GameDataSyncPush",
          "type": "msg"
        }, {
          "id": 5,
          "name": "billiards/GameOverPush",
          "type": "msg"
        }, {
          "id": 6,
          "name": "billiards/HitBall",
          "type": "msg"
        }, {
          "id": 7,
          "name": "billiards/HitBallComplete",
          "type": "msg"
        }, {
          "id": 8,
          "name": "billiards/PlayerComesPush",
          "type": "msg"
        }, {
          "id": 9,
          "name": "billiards/PlayerDataChangedPush",
          "type": "msg"
        }, {
          "id": 10,
          "name": "billiards/PlayerLeavesPush",
          "type": "msg"
        }, {
          "id": 11,
          "name": "chat/Chat",
          "type": "msg"
        }, {
          "id": 12,
          "name": "chat/SendChat",
          "type": "api",
          "conf": {}
        }, {
          "id": 101,
          "name": "fish/Fire",
          "type": "msg"
        }, {
          "id": 104,
          "name": "fish/FireResult",
          "type": "msg"
        }, {
          "id": 95,
          "name": "fish/FishDead",
          "type": "msg"
        }, {
          "id": 102,
          "name": "fish/FishWave",
          "type": "msg"
        }, {
          "id": 96,
          "name": "fish/HitFish",
          "type": "msg"
        }, {
          "id": 97,
          "name": "fish/NewFish",
          "type": "msg"
        }, {
          "id": 103,
          "name": "fish/NewFishGroup",
          "type": "msg"
        }, {
          "id": 99,
          "name": "fish/RoomFish",
          "type": "msg"
        }, {
          "id": 105,
          "name": "fish/FishConfig",
          "type": "api"
        }, {
          "id": 92,
          "name": "game/Push",
          "type": "msg"
        }, {
          "id": 89,
          "name": "game/AuthClient",
          "type": "api"
        }, {
          "id": 13,
          "name": "gomoku/GameBeginPush",
          "type": "msg"
        }, {
          "id": 14,
          "name": "gomoku/GameDataChangedPush",
          "type": "msg"
        }, {
          "id": 15,
          "name": "gomoku/GameDataSyncPush",
          "type": "msg"
        }, {
          "id": 16,
          "name": "gomoku/GameOverPush",
          "type": "msg"
        }, {
          "id": 17,
          "name": "gomoku/PlacePiecePush",
          "type": "msg"
        }, {
          "id": 18,
          "name": "gomoku/PlayerComesPush",
          "type": "msg"
        }, {
          "id": 19,
          "name": "gomoku/PlayerDataChangedPush",
          "type": "msg"
        }, {
          "id": 20,
          "name": "gomoku/PlayerLeavesPush",
          "type": "msg"
        }, {
          "id": 21,
          "name": "gomoku/PlacePiece",
          "type": "api",
          "conf": {}
        }, {
          "id": 122,
          "name": "holdem/Action",
          "type": "msg"
        }, {
          "id": 123,
          "name": "holdem/Deal",
          "type": "msg"
        }, {
          "id": 126,
          "name": "holdem/GameOver",
          "type": "msg"
        }, {
          "id": 129,
          "name": "holdem/GameStart",
          "type": "msg"
        }, {
          "id": 127,
          "name": "holdem/Play",
          "type": "msg"
        }, {
          "id": 131,
          "name": "holdem/PlayResult",
          "type": "msg"
        }, {
          "id": 130,
          "name": "holdem/Resume",
          "type": "msg"
        }, {
          "id": 128,
          "name": "holdem/RoomHoldem",
          "type": "msg"
        }, {
          "id": 22,
          "name": "lobby/mail/ClearAllMails",
          "type": "api"
        }, {
          "id": 23,
          "name": "lobby/mail/DeleteMail",
          "type": "api"
        }, {
          "id": 24,
          "name": "lobby/mail/GetMails",
          "type": "api"
        }, {
          "id": 25,
          "name": "lobby/mail/MarkAllAsRead",
          "type": "api"
        }, {
          "id": 26,
          "name": "lobby/mail/MarkAsRead",
          "type": "api"
        }, {
          "id": 75,
          "name": "lobby/Auth",
          "type": "api"
        }, {
          "id": 28,
          "name": "lobby/CancelMatch",
          "type": "api"
        }, {
          "id": 76,
          "name": "lobby/CreateRole",
          "type": "api"
        }, {
          "id": 65,
          "name": "lobby/CreateRoom",
          "type": "api"
        }, {
          "id": 31,
          "name": "lobby/GetAnnouncement",
          "type": "api"
        }, {
          "id": 77,
          "name": "lobby/GetBasicConfig",
          "type": "api",
          "conf": {}
        }, {
          "id": 32,
          "name": "lobby/GetNotice",
          "type": "api"
        }, {
          "id": 66,
          "name": "lobby/GetRoomList",
          "type": "api"
        }, {
          "id": 33,
          "name": "lobby/GetUserInfo",
          "type": "api"
        }, {
          "id": 36,
          "name": "lobby/ModifyUserInfo",
          "type": "api"
        }, {
          "id": 37,
          "name": "lobby/StartMatch",
          "type": "api"
        }, {
          "id": 72,
          "name": "lobby/TryEnterRoom",
          "type": "api"
        }, {
          "id": 148,
          "name": "lobby/UpdateUserInfo",
          "type": "api"
        }, {
          "id": 39,
          "name": "login/Login",
          "type": "api"
        }, {
          "id": 40,
          "name": "login/Register",
          "type": "api"
        }, {
          "id": 62,
          "name": "Ping",
          "type": "msg"
        }, {
          "id": 78,
          "name": "Pong",
          "type": "msg"
        }, {
          "id": 132,
          "name": "niuniu/GameOver",
          "type": "msg"
        }, {
          "id": 141,
          "name": "niuniu/GameStart",
          "type": "msg"
        }, {
          "id": 146,
          "name": "niuniu/Go",
          "type": "msg"
        }, {
          "id": 133,
          "name": "niuniu/Play",
          "type": "msg"
        }, {
          "id": 144,
          "name": "niuniu/PlayerQiangZhuang",
          "type": "msg"
        }, {
          "id": 142,
          "name": "niuniu/PlayerTanPai",
          "type": "msg"
        }, {
          "id": 134,
          "name": "niuniu/QiangZhuang",
          "type": "msg"
        }, {
          "id": 135,
          "name": "niuniu/RandomZhuang",
          "type": "msg"
        }, {
          "id": 147,
          "name": "niuniu/Reset",
          "type": "msg"
        }, {
          "id": 136,
          "name": "niuniu/Resume",
          "type": "msg"
        }, {
          "id": 143,
          "name": "niuniu/RoomNiuNiu",
          "type": "msg"
        }, {
          "id": 145,
          "name": "niuniu/Showdown",
          "type": "msg"
        }, {
          "id": 137,
          "name": "niuniu/TanPai",
          "type": "msg"
        }, {
          "id": 139,
          "name": "niuniu/UserXiaZhu",
          "type": "msg"
        }, {
          "id": 140,
          "name": "niuniu/XiaZhu",
          "type": "msg"
        }, {
          "id": 120,
          "name": "room/ClientReady",
          "type": "msg"
        }, {
          "id": 79,
          "name": "room/RoomClosed",
          "type": "msg"
        }, {
          "id": 80,
          "name": "room/RoomDataChangedPush",
          "type": "msg"
        }, {
          "id": 81,
          "name": "room/RoomDataSyncPush",
          "type": "msg"
        }, {
          "id": 82,
          "name": "room/RoomDismissedPush",
          "type": "msg"
        }, {
          "id": 83,
          "name": "room/UserComesToRoomPush",
          "type": "msg"
        }, {
          "id": 84,
          "name": "room/UserDataChangedPush",
          "type": "msg"
        }, {
          "id": 85,
          "name": "room/UserInfoChangedPush",
          "type": "msg"
        }, {
          "id": 118,
          "name": "room/UserJoin",
          "type": "msg"
        }, {
          "id": 86,
          "name": "room/UserLeavesFromRoomPush",
          "type": "msg"
        }, {
          "id": 119,
          "name": "room/UserReady",
          "type": "msg"
        }, {
          "id": 87,
          "name": "room/ExitRoom",
          "type": "api",
          "conf": {}
        }, {
          "id": 91,
          "name": "room/JoinGame",
          "type": "api"
        }, {
          "id": 88,
          "name": "room/Ready",
          "type": "api",
          "conf": {}
        }, {
          "id": 121,
          "name": "slots/PlayMatch3",
          "type": "api"
        }, {
          "id": 93,
          "name": "slots/PlaySlots",
          "type": "api"
        }, {
          "id": 51,
          "name": "tank/GameBeginPush",
          "type": "msg"
        }, {
          "id": 52,
          "name": "tank/GameDataChangedPush",
          "type": "msg"
        }, {
          "id": 53,
          "name": "tank/GameDataSyncPush",
          "type": "msg"
        }, {
          "id": 54,
          "name": "tank/GameOverPush",
          "type": "msg"
        }, {
          "id": 55,
          "name": "tank/PlayerComesPush",
          "type": "msg"
        }, {
          "id": 56,
          "name": "tank/PlayerDataChangedPush",
          "type": "msg"
        }, {
          "id": 57,
          "name": "tank/PlayerLeavesPush",
          "type": "msg"
        }, {
          "id": 58,
          "name": "tank/TankAttack",
          "type": "msg"
        }, {
          "id": 59,
          "name": "tank/TankDataChange",
          "type": "msg"
        }, {
          "id": 60,
          "name": "tank/TankShoot",
          "type": "msg"
        }, {
          "id": 116,
          "name": "tienlen/BombScore",
          "type": "msg"
        }, {
          "id": 114,
          "name": "tienlen/GameEnd",
          "type": "msg"
        }, {
          "id": 113,
          "name": "tienlen/GameStart",
          "type": "msg"
        }, {
          "id": 111,
          "name": "tienlen/Pass",
          "type": "msg"
        }, {
          "id": 112,
          "name": "tienlen/PassPlayer",
          "type": "msg"
        }, {
          "id": 107,
          "name": "tienlen/Play",
          "type": "msg"
        }, {
          "id": 115,
          "name": "tienlen/RoomInfo",
          "type": "msg"
        }, {
          "id": 117,
          "name": "tienlen/RoomScore",
          "type": "msg"
        }, {
          "id": 108,
          "name": "tienlen/Trusteeship",
          "type": "msg"
        }, {
          "id": 109,
          "name": "tienlen/TrusteeshipStatus",
          "type": "msg"
        }, {
          "id": 110,
          "name": "tienlen/TurnPlayer",
          "type": "msg"
        }],
        "types": {
          "billiards/MsgAdjustCue/MsgAdjustCue": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "power",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "x",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "name": "y",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 2,
                  "name": "z",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }, {
              "id": 1,
              "name": "direction",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "x",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "name": "y",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 2,
                  "name": "z",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }]
          },
          "billiards/MsgBallsDataSync/MsgBallsDataSync": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "ballsData",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "ballsPosData",
                  "type": {
                    "type": "Array",
                    "elementType": {
                      "type": "Number"
                    }
                  }
                }, {
                  "id": 1,
                  "name": "ballsQuatData",
                  "type": {
                    "type": "Array",
                    "elementType": {
                      "type": "Number"
                    }
                  }
                }]
              },
              "optional": true
            }, {
              "id": 1,
              "name": "newPocketedBalls",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              },
              "optional": true
            }, {
              "id": 2,
              "name": "gameOver",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "billiards/MsgGameBeginPush/MsgGameBeginPush": {
            "type": "Interface"
          },
          "billiards/MsgGameDataChangedPush/MsgGameDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "currentPlayer",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "ballsData",
              "type": {
                "type": "Reference",
                "target": "billiards/BilliardsTypeDef/IBilliardsBallsData"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "order",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "cueDir",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "x",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "name": "y",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 2,
                  "name": "z",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }]
          },
          "billiards/BilliardsTypeDef/IBilliardsBallsData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "ballsPosData",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 1,
              "name": "ballsQuatData",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }]
          },
          "billiards/MsgGameDataSyncPush/MsgGameDataSyncPush": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "billiards/BilliardsTypeDef/IBilliardsGameData"
              }
            }]
          },
          "billiards/BilliardsTypeDef/IBilliardsGameData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "billiards/BilliardsTypeDef/IBilliardsPlayer"
                }
              }
            }, {
              "id": 1,
              "name": "currentPlayer",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "ballsData",
              "type": {
                "type": "Reference",
                "target": "billiards/BilliardsTypeDef/IBilliardsBallsData"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "curDirection",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "x",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "name": "y",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 2,
                  "name": "z",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }]
          },
          "billiards/BilliardsTypeDef/IBilliardsPlayer": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "pocketedBalls",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }]
          },
          "billiards/MsgGameOverPush/MsgGameOverPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "winner",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "reason",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "billiards/MsgHitBall/MsgHitBall": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "ballsData",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "ballsPosData",
                  "type": {
                    "type": "Array",
                    "elementType": {
                      "type": "Number"
                    }
                  }
                }, {
                  "id": 1,
                  "name": "ballsQuatData",
                  "type": {
                    "type": "Array",
                    "elementType": {
                      "type": "Number"
                    }
                  }
                }]
              },
              "optional": true
            }, {
              "id": 1,
              "name": "hitImpulse",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "x",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "name": "y",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 2,
                  "name": "z",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }, {
              "id": 2,
              "name": "order",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "billiards/MsgHitBallComplete/MsgHitBallComplete": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "ballsData",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "ballsPosData",
                  "type": {
                    "type": "Array",
                    "elementType": {
                      "type": "Number"
                    }
                  }
                }, {
                  "id": 1,
                  "name": "ballsQuatData",
                  "type": {
                    "type": "Array",
                    "elementType": {
                      "type": "Number"
                    }
                  }
                }]
              }
            }, {
              "id": 1,
              "name": "hitImpulse",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "order",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "nextPlayer",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "gameOver",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "billiards/MsgPlayerComesPush/MsgPlayerComesPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "player",
              "type": {
                "type": "Reference",
                "target": "billiards/BilliardsTypeDef/IBilliardsPlayer"
              }
            }]
          },
          "billiards/MsgPlayerDataChangedPush/MsgPlayerDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "pocketedBalls",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              },
              "optional": true
            }]
          },
          "billiards/MsgPlayerLeavesPush/MsgPlayerLeavesPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }]
          },
          "chat/MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "time",
              "type": {
                "type": "Date"
              }
            }, {
              "id": 1,
              "name": "user",
              "type": {
                "type": "Reference",
                "target": "../../types/UserInfo/UserInfo"
              }
            }, {
              "id": 2,
              "name": "channel",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "content",
              "type": {
                "type": "String"
              }
            }]
          },
          "../../types/UserInfo/UserInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "name",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "visualId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "gender",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "introduction",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "coin",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "chat/PtlSendChat/ReqSendChat": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseRequest"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "channel",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "content",
              "type": {
                "type": "String"
              }
            }]
          },
          "../base/BaseRequest": {
            "type": "Interface"
          },
          "chat/PtlSendChat/ResSendChat": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseResponse"
              }
            }]
          },
          "../base/BaseResponse": {
            "type": "Interface"
          },
          "fish/MsgFire/MsgFire": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "bulletId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "bulletLevel",
              "type": {
                "type": "Number"
              }
            }]
          },
          "fish/MsgFireResult/MsgFireResult": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "bulletId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "bulletLevel",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "isSuccess",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 4,
              "name": "coins",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "spentCoins",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "reason",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "fish/MsgFishDead/MsgFishDead": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "coins",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "incrementCoins",
              "type": {
                "type": "Number"
              }
            }]
          },
          "fish/MsgFishWave/MsgFishWave": {
            "type": "Interface"
          },
          "fish/MsgHitFish/MsgHitFish": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "fishId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "bulletId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "bulletLevel",
              "type": {
                "type": "Number"
              }
            }]
          },
          "fish/MsgNewFish/MsgNewFish": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "liveTimestamp",
              "type": {
                "type": "Number"
              }
            }]
          },
          "fish/MsgNewFishGroup/MsgNewFishGroup": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "groupId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "startId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "fishCount",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "liveTimestamp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "fishes",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "fish/Fish/Fish"
                }
              }
            }]
          },
          "fish/Fish/Fish": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "liveTimestamp",
              "type": {
                "type": "Number"
              }
            }]
          },
          "fish/MsgRoomFish/MsgRoomFish": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "fishes",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "fish/Fish/Fish"
                }
              }
            }, {
              "id": 1,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "bullets",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "fish/Fish/Bullet"
                }
              },
              "optional": true
            }, {
              "id": 3,
              "name": "lastBulletId",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "fish/Fish/Bullet": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "bulletLevel",
              "type": {
                "type": "Number"
              }
            }]
          },
          "fish/PtlFishConfig/ReqFishConfig": {
            "type": "Interface"
          },
          "fish/PtlFishConfig/ResFishConfig": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "bullets",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "fish/PtlFishConfig/BulletConfig"
                }
              }
            }]
          },
          "fish/PtlFishConfig/BulletConfig": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "bulletLevel",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "needGolds",
              "type": {
                "type": "Number"
              }
            }]
          },
          "game/MsgPush/MsgPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "content",
              "type": {
                "type": "String"
              }
            }]
          },
          "game/PtlAuthClient/ReqAuthClient": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseRequest"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "sign",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "gameType",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "roleName",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 6,
              "name": "subType",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "game/PtlAuthClient/ResAuthClient": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseResponse"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "user",
              "type": {
                "type": "Reference",
                "target": "../../types/UserInfo/UserInfo"
              }
            }]
          },
          "gomoku/MsgGameBeginPush/MsgGameBeginPush": {
            "type": "Interface"
          },
          "gomoku/MsgGameDataChangedPush/MsgGameDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "currentPlayer",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "isPlaying",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "boardData",
              "type": {
                "type": "Buffer",
                "arrayType": "Uint32Array"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "gridData",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "gridX",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "name": "gridY",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 2,
                  "name": "value",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }]
          },
          "gomoku/MsgGameDataSyncPush/MsgGameDataSyncPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "data",
              "type": {
                "type": "Reference",
                "target": "gomoku/GomokuTypeDef/IGomokuGameData"
              }
            }]
          },
          "gomoku/GomokuTypeDef/IGomokuGameData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "gomoku/GomokuTypeDef/IGomokuPlayer"
                }
              }
            }, {
              "id": 1,
              "name": "currentPlayer",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "boardData",
              "type": {
                "type": "Buffer",
                "arrayType": "Uint32Array"
              },
              "optional": true
            }]
          },
          "gomoku/GomokuTypeDef/IGomokuPlayer": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "color",
              "type": {
                "type": "String"
              }
            }]
          },
          "gomoku/MsgGameOverPush/MsgGameOverPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "winner",
              "type": {
                "type": "String"
              }
            }]
          },
          "gomoku/MsgPlacePiecePush/MsgPlacePiecePush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "gridX",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "gridY",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "value",
              "type": {
                "type": "Number"
              }
            }]
          },
          "gomoku/MsgPlayerComesPush/MsgPlayerComesPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "player",
              "type": {
                "type": "Reference",
                "target": "gomoku/GomokuTypeDef/IGomokuPlayer"
              }
            }]
          },
          "gomoku/MsgPlayerDataChangedPush/MsgPlayerDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "color",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "gomoku/MsgPlayerLeavesPush/MsgPlayerLeavesPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }]
          },
          "gomoku/PtlPlacePiece/ReqPlacePiece": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseRequest"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "gridX",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "gridY",
              "type": {
                "type": "Number"
              }
            }]
          },
          "gomoku/PtlPlacePiece/ResPlacePiece": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseResponse"
              }
            }]
          },
          "holdem/MsgAction/MsgAction": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "round",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "pot",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "action",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "round_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "game_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "hand_card",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              },
              "optional": true
            }, {
              "id": 8,
              "name": "cur_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "can_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 14,
              "name": "min_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 10,
              "name": "can_check",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 15,
              "name": "can_call",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 11,
              "name": "call",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 16,
              "name": "can_raise",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 12,
              "name": "min_raise",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 13,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 17,
              "name": "desc",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "holdem/MsgDeal/MsgDeal": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "card_ids",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 1,
              "name": "type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "card_type",
              "type": {
                "type": "Number"
              }
            }]
          },
          "holdem/MsgGameOver/MsgGameOver": {
            "type": "Interface",
            "properties": [{
              "id": 1,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "cur_gold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 0,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "holdem/MsgGameOver/Player"
                }
              }
            }, {
              "id": 3,
              "name": "comm_ids",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }]
          },
          "holdem/MsgGameOver/Player": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "nickname",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "head",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "gold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "hand_card",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 6,
              "name": "maxCardPlayers",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 7,
              "name": "settlement_card",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 8,
              "name": "card_type",
              "type": {
                "type": "Union",
                "members": [{
                  "id": 0,
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "type": {
                    "type": "Literal"
                  }
                }]
              }
            }]
          },
          "holdem/MsgGameStart/MsgGameStart": {
            "type": "Reference",
            "target": "holdem/holdem/i_sg"
          },
          "holdem/holdem/i_sg": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "room_status",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "licensing_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "action_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "allin_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "button_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "sb_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "bb_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "sb_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "bb_bet",
              "type": {
                "type": "Number"
              }
            }]
          },
          "holdem/MsgPlay/MsgPlay": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "action",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "bet",
              "type": {
                "type": "Number"
              }
            }]
          },
          "holdem/MsgPlayResult/MsgPlayResult": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "isSuccess",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 2,
              "name": "error",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "holdem/MsgResume/MsgResume": {
            "type": "Reference",
            "target": "holdem/holdem/i_resume"
          },
          "holdem/holdem/i_resume": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "room_status",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "round_status",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "comm_ids",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 4,
              "name": "hand_ids",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 5,
              "name": "card_type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "main_pot",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "holdem/holdem/i_player"
                }
              }
            }, {
              "id": 8,
              "name": "op_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 10,
              "name": "round_bets",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 11,
              "name": "bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 12,
              "name": "can_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 16,
              "name": "min_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 13,
              "name": "can_check",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 17,
              "name": "can_call",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 14,
              "name": "call",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 18,
              "name": "can_raise",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 15,
              "name": "min_raise",
              "type": {
                "type": "Number"
              }
            }]
          },
          "holdem/holdem/i_player": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "gold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "seat_type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "nickname",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "head",
              "type": {
                "type": "String"
              }
            }, {
              "id": 6,
              "name": "pic",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 12,
              "name": "round_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 13,
              "name": "last_action",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 8,
              "name": "status",
              "type": {
                "type": "Reference",
                "target": "holdem/holdem/e_role_status"
              }
            }, {
              "id": 9,
              "name": "hand_ids",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 10,
              "name": "card_type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 11,
              "name": "allin_round",
              "type": {
                "type": "Number"
              }
            }]
          },
          "holdem/holdem/e_role_status": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }, {
              "id": 2,
              "value": 2
            }, {
              "id": 3,
              "value": 3
            }]
          },
          "holdem/MsgRoomHoldem/MsgRoomHoldem": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "room_status",
              "type": {
                "type": "Reference",
                "target": "holdem/holdem/e_room_status"
              }
            }, {
              "id": 3,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "holdem/MsgRoomHoldem/i_player_simple"
                }
              }
            }, {
              "id": 5,
              "name": "sb_bet",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "bb_bet",
              "type": {
                "type": "Number"
              }
            }]
          },
          "holdem/holdem/e_room_status": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }, {
              "id": 2,
              "value": 2
            }, {
              "id": 3,
              "value": 3
            }, {
              "id": 4,
              "value": 4
            }, {
              "id": 5,
              "value": 5
            }]
          },
          "holdem/MsgRoomHoldem/i_player_simple": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "gold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "nickname",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "head",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/mail/PtlClearAllMails/ReqClearAllMails": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/mail/PtlClearAllMails/ResClearAllMails": {
            "type": "Interface"
          },
          "lobby/mail/PtlDeleteMail/ReqDeleteMail": {
            "type": "Interface",
            "properties": [{
              "id": 2,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "mailId",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/mail/PtlDeleteMail/ResDeleteMail": {
            "type": "Interface"
          },
          "lobby/mail/PtlGetMails/ReqGetMails": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/mail/PtlGetMails/ResGetMails": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "mails",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Interface",
                  "properties": [{
                    "id": 0,
                    "name": "mailId",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 1,
                    "name": "uid",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 2,
                    "name": "from",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 3,
                    "name": "time",
                    "type": {
                      "type": "Number"
                    }
                  }, {
                    "id": 4,
                    "name": "title",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 5,
                    "name": "content",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 6,
                    "name": "state",
                    "type": {
                      "type": "String"
                    }
                  }]
                }
              }
            }]
          },
          "lobby/mail/PtlMarkAllAsRead/ReqMarkAllAsRead": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/mail/PtlMarkAllAsRead/ResMarkAllAsRead": {
            "type": "Interface"
          },
          "lobby/mail/PtlMarkAsRead/ReqMarkAsRead": {
            "type": "Interface",
            "properties": [{
              "id": 2,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "mailId",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/mail/PtlMarkAsRead/ResMarkAsRead": {
            "type": "Interface"
          },
          "lobby/PtlAuth/ReqAuth": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "sign",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/PtlAuth/ResAuth": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userInfo",
              "type": {
                "type": "Reference",
                "target": "../../types/UserInfo/UserInfo"
              }
            }, {
              "id": 1,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/PtlCancelMatch/ReqCancelMatch": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlCancelMatch/ResCancelMatch": {
            "type": "Interface"
          },
          "lobby/PtlCreateRole/ReqCreateRole": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "name",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "visualId",
              "type": {
                "type": "Number"
              }
            }]
          },
          "lobby/PtlCreateRole/ResCreateRole": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "name",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "visualId",
              "type": {
                "type": "Number"
              }
            }]
          },
          "lobby/PtlCreateRoom/ReqCreateRoom": {
            "type": "Interface",
            "properties": [{
              "id": 6,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "roomName",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "gameType",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "password",
              "type": {
                "type": "String"
              }
            }, {
              "id": 7,
              "name": "subType",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlCreateRoom/ResCreateRoom": {
            "type": "Interface",
            "properties": [{
              "id": 3,
              "name": "enterRoomParams",
              "type": {
                "type": "Reference",
                "target": "../../types/GameServerAuthParams/GameServerAuthParams"
              }
            }]
          },
          "../../types/GameServerAuthParams/GameServerAuthParams": {
            "type": "Interface",
            "properties": [{
              "id": 5,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 6,
              "name": "gameType",
              "type": {
                "type": "String"
              }
            }, {
              "id": 7,
              "name": "subType",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "token",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "serverUrl",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/PtlGetAnnouncement/ReqGetAnnouncement": {
            "type": "Interface",
            "properties": [{
              "id": 2,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "type",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/PtlGetAnnouncement/ResGetAnnouncement": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "content",
              "type": {
                "type": "String"
              }
            }]
          },
          "lobby/PtlGetBasicConfig/ReqGetBasicConfig": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseRequest"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlGetBasicConfig/ResGetBasicConfig": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../configs/BasicConfig/BasicConfig"
              }
            }]
          },
          "../../configs/BasicConfig/BasicConfig": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userInfoModifyCost",
              "type": {
                "type": "Number"
              }
            }]
          },
          "lobby/PtlGetNotice/ReqGetNotice": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlGetNotice/ResGetNotice": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "noticeList",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Interface",
                  "properties": [{
                    "id": 0,
                    "name": "title",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 1,
                    "name": "content",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 2,
                    "name": "contentType",
                    "type": {
                      "type": "String"
                    }
                  }]
                }
              }
            }]
          },
          "lobby/PtlGetRoomList/ReqGetRoomList": {
            "type": "Interface",
            "properties": [{
              "id": 4,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "type",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "curPage",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "pageItemNum",
              "type": {
                "type": "Number"
              }
            }]
          },
          "lobby/PtlGetRoomList/ResGetRoomList": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "curPage",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "pageNum",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "rooms",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "lobby/PtlGetRoomList/IRoomInfoBrief"
                }
              }
            }]
          },
          "lobby/PtlGetRoomList/IRoomInfoBrief": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "displayId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "gameType",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "name",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "userNum",
              "type": {
                "type": "Number",
                "scalarType": "uint"
              }
            }, {
              "id": 5,
              "name": "maxUserNum",
              "type": {
                "type": "Number",
                "scalarType": "uint"
              }
            }, {
              "id": 6,
              "name": "playerNum",
              "type": {
                "type": "Number",
                "scalarType": "uint"
              }
            }, {
              "id": 7,
              "name": "maxPlayerNum",
              "type": {
                "type": "Number",
                "scalarType": "uint"
              }
            }, {
              "id": 8,
              "name": "needPassword",
              "type": {
                "type": "Boolean"
              }
            }]
          },
          "lobby/PtlGetUserInfo/ReqGetUserInfo": {
            "type": "Interface",
            "properties": [{
              "id": 3,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "uid",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "uids",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "String"
                }
              },
              "optional": true
            }]
          },
          "lobby/PtlGetUserInfo/ResGetUserInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "infos",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../types/UserInfo/UserInfo"
                }
              }
            }]
          },
          "lobby/PtlModifyUserInfo/ReqModifyUserInfo": {
            "type": "Interface",
            "properties": [{
              "id": 3,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "gender",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "introduction",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlModifyUserInfo/ResModifyUserInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "gender",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "introduction",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlStartMatch/ReqStartMatch": {
            "type": "Interface",
            "properties": [{
              "id": 3,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "type",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "subType",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "immediate",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "lobby/PtlStartMatch/ResStartMatch": {
            "type": "Interface",
            "extends": [{
              "id": 1,
              "type": {
                "type": "Reference",
                "target": "../../types/GameServerAuthParams/GameServerAuthParams"
              }
            }]
          },
          "lobby/PtlTryEnterRoom/ReqTryEnterRoom": {
            "type": "Interface",
            "properties": [{
              "id": 2,
              "name": "token",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "password",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlTryEnterRoom/ResTryEnterRoom": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../types/GameServerAuthParams/GameServerAuthParams"
              }
            }]
          },
          "lobby/PtlUpdateUserInfo/ReqUpdateUserInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "name",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "visualId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "gender",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "introduction",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "lobby/PtlUpdateUserInfo/ResUpdateUserInfo": {
            "type": "Interface"
          },
          "login/PtlLogin/ReqLogin": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "account",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "password",
              "type": {
                "type": "String"
              }
            }]
          },
          "login/PtlLogin/ResLogin": {
            "type": "Interface",
            "properties": [{
              "id": 4,
              "name": "token",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 6,
              "name": "time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "sign",
              "type": {
                "type": "String"
              }
            }, {
              "id": 8,
              "name": "lobbyUrl",
              "type": {
                "type": "String"
              }
            }, {
              "id": 9,
              "name": "apiUrl",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 10,
              "name": "apiToken",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "login/PtlRegister/ReqRegister": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "account",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "password",
              "type": {
                "type": "String"
              }
            }]
          },
          "login/PtlRegister/ResRegister": {
            "type": "Interface"
          },
          "MsgPing/MsgPing": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }]
          },
          "MsgPong/MsgPong": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "serverTimestamp",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgGameOver/MsgGameOver": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "zhuang_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "zhuang_scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "awards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "niuniu/niuniu/i_gov"
                }
              }
            }, {
              "id": 4,
              "name": "z_uid",
              "type": {
                "type": "String"
              }
            }]
          },
          "niuniu/niuniu/i_gov": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "gold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "is_win",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "win_gold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "user_scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "card",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "niuniu/card/I_card"
                }
              }
            }]
          },
          "niuniu/card/I_card": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "color",
              "type": {
                "type": "Reference",
                "target": "niuniu/card/e_card_color"
              }
            }, {
              "id": 2,
              "name": "score",
              "type": {
                "type": "Reference",
                "target": "niuniu/card/e_card_score"
              }
            }]
          },
          "niuniu/card/e_card_color": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }, {
              "id": 2,
              "value": 2
            }, {
              "id": 3,
              "value": 3
            }, {
              "id": 4,
              "value": 4
            }]
          },
          "niuniu/card/e_card_score": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 3
            }, {
              "id": 2,
              "value": 4
            }, {
              "id": 3,
              "value": 5
            }, {
              "id": 4,
              "value": 6
            }, {
              "id": 5,
              "value": 7
            }, {
              "id": 6,
              "value": 8
            }, {
              "id": 7,
              "value": 9
            }, {
              "id": 8,
              "value": 10
            }, {
              "id": 9,
              "value": 11
            }, {
              "id": 10,
              "value": 12
            }, {
              "id": 11,
              "value": 13
            }, {
              "id": 12,
              "value": 14
            }, {
              "id": 13,
              "value": 16
            }, {
              "id": 14,
              "value": 18
            }, {
              "id": 15,
              "value": 19
            }]
          },
          "niuniu/MsgGameStart/MsgGameStart": {
            "type": "Reference",
            "target": "niuniu/niuniu/i_sg"
          },
          "niuniu/niuniu/i_sg": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "op_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "used_zhuang",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 2,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "room_status",
              "type": {
                "type": "Reference",
                "target": "niuniu/niuniu/e_room_status"
              }
            }, {
              "id": 5,
              "name": "bet_list",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 6,
              "name": "z_list",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 7,
              "name": "z_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "niuniu/niuniu/i_player"
                }
              }
            }, {
              "id": 9,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 10,
              "name": "z_scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 11,
              "name": "cards",
              "type": {
                "type": "Any"
              }
            }, {
              "id": 12,
              "name": "room_scale",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "niuniu/niuniu/e_room_status": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }, {
              "id": 2,
              "value": 2
            }, {
              "id": 3,
              "value": 3
            }, {
              "id": 4,
              "value": 4
            }, {
              "id": 5,
              "value": 5
            }, {
              "id": 6,
              "value": 6
            }, {
              "id": 7,
              "value": 7
            }]
          },
          "niuniu/niuniu/i_player": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "gold",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "nickname",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "head",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "pic",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgGo/MsgGo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "time",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgPlay/MsgPlay": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "bet_scale_val",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "user_seat",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgPlayerQiangZhuang/MsgPlayerQiangZhuang": {
            "type": "Reference",
            "target": "niuniu/niuniu/i_qz"
          },
          "niuniu/niuniu/i_qz": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 10,
              "name": "isGiveUp",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 2,
              "name": "op_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "qiangzhuangArr",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Interface",
                  "properties": [{
                    "id": 0,
                    "name": "uid",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 1,
                    "name": "seat",
                    "type": {
                      "type": "Number"
                    }
                  }, {
                    "id": 2,
                    "name": "scale",
                    "type": {
                      "type": "Number"
                    }
                  }, {
                    "id": 3,
                    "name": "isGiveUp",
                    "type": {
                      "type": "Boolean"
                    }
                  }]
                }
              }
            }, {
              "id": 5,
              "name": "room_status",
              "type": {
                "type": "Reference",
                "target": "niuniu/niuniu/e_room_status"
              }
            }, {
              "id": 6,
              "name": "used_zhuang",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 7,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "z_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "z_scale",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgPlayerTanPai/MsgPlayerTanPai": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgQiangZhuang/MsgQiangZhuang": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "user_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "scale_val",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgRandomZhuang/MsgRandomZhuang": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "zhuangScale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "ramdomZhuangArr",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 3,
              "name": "room_status",
              "type": {
                "type": "Reference",
                "target": "niuniu/niuniu/e_room_status"
              }
            }, {
              "id": 4,
              "name": "play_multiple",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "play_zhuang",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "quan_shu",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "show_zhuang_time",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgReset/MsgReset": {
            "type": "Interface"
          },
          "niuniu/MsgResume/MsgResume": {
            "type": "Reference",
            "target": "niuniu/niuniu/i_sg"
          },
          "niuniu/MsgRoomNiuNiu/MsgRoomNiuNiu": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "room_scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "room_status",
              "type": {
                "type": "Reference",
                "target": "niuniu/niuniu/e_room_status"
              }
            }, {
              "id": 2,
              "name": "waitTime",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgShowdown/MsgShowdown": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "room_id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "user_seat",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgTanPai/MsgTanPai": {
            "type": "Interface",
            "properties": [{
              "id": 1,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "room_status",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "cards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "niuniu/MsgTanPai/UserCard"
                }
              }
            }, {
              "id": 4,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgTanPai/UserCard": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "cards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "niuniu/card/I_card"
                }
              }
            }]
          },
          "niuniu/MsgUserXiaZhu/MsgUserXiaZhu": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "op_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "scale",
              "type": {
                "type": "Number"
              }
            }]
          },
          "niuniu/MsgXiaZhu/MsgXiaZhu": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "bet_list",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Any"
                }
              }
            }, {
              "id": 1,
              "name": "z_scale",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "z_seat",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "op_time",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "room_status",
              "type": {
                "type": "Reference",
                "target": "niuniu/niuniu/e_room_status"
              }
            }, {
              "id": 5,
              "name": "timestamp",
              "type": {
                "type": "Number"
              }
            }]
          },
          "room/MsgClientReady/MsgClientReady": {
            "type": "Interface"
          },
          "room/MsgRoomClosed/MsgRoomClosed": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "gameType",
              "type": {
                "type": "String"
              }
            }]
          },
          "room/MsgRoomDataChangedPush/MsgRoomDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "name",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "maxUser",
              "type": {
                "type": "Number",
                "scalarType": "uint"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "userList",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../types/RoomData/IUserData"
                }
              },
              "optional": true
            }, {
              "id": 3,
              "name": "maxPlayer",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "numPlayer",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "isPlaying",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "../../types/RoomData/IUserData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "name",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "visualId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "gender",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "ready",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "playerId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "isOnline",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 7,
              "name": "chairId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 8,
              "name": "coin",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 9,
              "name": "disconnectTime",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 11,
              "name": "joinTime",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 10,
              "name": "isAI",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "room/MsgRoomDataSyncPush/MsgRoomDataSyncPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "data",
              "type": {
                "type": "Reference",
                "target": "../../types/RoomData/IRoomData"
              }
            }]
          },
          "../../types/RoomData/IRoomData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "displayId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 9,
              "name": "gameType",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "name",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "maxUser",
              "type": {
                "type": "Number",
                "scalarType": "uint"
              }
            }, {
              "id": 4,
              "name": "userList",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../types/RoomData/IUserData"
                }
              }
            }, {
              "id": 5,
              "name": "maxPlayerNum",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "playerNum",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "isPlaying",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 11,
              "name": "isReady",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 10,
              "name": "isEnd",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 8,
              "name": "messages",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Interface",
                  "properties": [{
                    "id": 0,
                    "name": "channel",
                    "type": {
                      "type": "String"
                    },
                    "optional": true
                  }, {
                    "id": 1,
                    "name": "user",
                    "type": {
                      "type": "Reference",
                      "target": "../../types/UserInfo/UserInfo"
                    }
                  }, {
                    "id": 2,
                    "name": "time",
                    "type": {
                      "type": "Date"
                    }
                  }, {
                    "id": 3,
                    "name": "content",
                    "type": {
                      "type": "String"
                    }
                  }]
                }
              }
            }]
          },
          "room/MsgRoomDismissedPush/MsgRoomDismissedPush": {
            "type": "Interface"
          },
          "room/MsgUserComesToRoomPush/MsgUserComesToRoomPush": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../types/RoomData/IUserData"
              }
            }]
          },
          "room/MsgUserDataChangedPush/MsgUserDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "ready",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "playerId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "chairId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "isOnline",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "room/MsgUserInfoChangedPush/MsgUserInfoChangedPush": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../types/UserInfo/UserInfo"
              }
            }]
          },
          "room/MsgUserJoin/MsgUserJoin": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }]
          },
          "room/MsgUserLeavesFromRoomPush/MsgUserLeavesFromRoomPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }]
          },
          "room/MsgUserReady/MsgUserReady": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }]
          },
          "room/PtlExitRoom/ReqExitRoom": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseRequest"
              }
            }]
          },
          "room/PtlExitRoom/ResExitRoom": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseResponse"
              }
            }]
          },
          "room/PtlJoinGame/ReqJoinGame": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseRequest"
              }
            }]
          },
          "room/PtlJoinGame/ResJoinGame": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseResponse"
              }
            }]
          },
          "room/PtlReady/ReqReady": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseRequest"
              }
            }]
          },
          "room/PtlReady/ResReady": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../base/BaseResponse"
              }
            }]
          },
          "slots/PtlPlayMatch3/ReqPlayMatch3": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "gameId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "bet",
              "type": {
                "type": "String"
              }
            }]
          },
          "slots/PtlPlayMatch3/ResPlayMatch3": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "results",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/PtlPlayMatch3/PlayMatch3Result"
                }
              }
            }, {
              "id": 1,
              "name": "payout",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "coins",
              "type": {
                "type": "String"
              }
            }]
          },
          "slots/PtlPlayMatch3/PlayMatch3Result": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "rounds",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/PtlPlayMatch3/PlaySlotRound"
                }
              }
            }, {
              "id": 1,
              "name": "leftFreeCount",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "virtualBigEvents",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "slots/PtlPlayMatch3/PlaySlotRound": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsDragonHatch/DragonHatchRound"
              }
            }]
          },
          "slots/SlotsDragonHatch/DragonHatchRound": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Match3/PlaySlotRound"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "dragons",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/SlotsDragonHatch/Dragon"
                }
              }
            }, {
              "id": 1,
              "name": "addDragon",
              "type": {
                "type": "Reference",
                "target": "slots/SlotsDragonHatch/Dragon"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "usedDragon",
              "type": {
                "type": "Reference",
                "target": "slots/SlotsDragonHatch/Dragon"
              },
              "optional": true
            }]
          },
          "slots/Match3/PlaySlotRound": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "symbols",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotSymbol"
                }
              }
            }, {
              "id": 6,
              "name": "deleteSymbols",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotSymbol"
                }
              },
              "optional": true
            }, {
              "id": 1,
              "name": "newSymbols",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotSymbol"
                }
              },
              "optional": true
            }, {
              "id": 2,
              "name": "payout",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "freeCount",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "paySymbols",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Match3/PlayPaySymbol"
                }
              }
            }, {
              "id": 5,
              "name": "multipliers",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }]
          },
          "slots/Slots/PlaySlotSymbol": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "coordinate",
              "type": {
                "type": "Reference",
                "target": "slots/Slots/PlaySlotCoordinate"
              }
            }, {
              "id": 3,
              "name": "payout",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "isGoldFrame",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "slots/Slots/PlaySlotCoordinate": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "row",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "reel",
              "type": {
                "type": "Number"
              }
            }]
          },
          "slots/Match3/PlayPaySymbol": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "points",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotCoordinate"
                }
              }
            }, {
              "id": 2,
              "name": "payout",
              "type": {
                "type": "String"
              }
            }]
          },
          "slots/SlotsDragonHatch/Dragon": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }, {
              "id": 2,
              "value": 2
            }, {
              "id": 3,
              "value": 3
            }]
          },
          "slots/PtlPlaySlots/ReqPlaySlots": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "gameId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "bet",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "sureWin",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "slots/PtlPlaySlots/ResPlaySlots": {
            "type": "Interface",
            "properties": [{
              "id": 5,
              "name": "results",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/PtlPlaySlots/PlaySlotsResult"
                }
              }
            }, {
              "id": 6,
              "name": "payout",
              "type": {
                "type": "String"
              }
            }, {
              "id": 7,
              "name": "coins",
              "type": {
                "type": "String"
              }
            }]
          },
          "slots/PtlPlaySlots/PlaySlotsResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsMouse/SlotsMouseResult"
              }
            }, {
              "id": 1,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsDragon/SlotsDragonResult"
              }
            }, {
              "id": 2,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsTiger/SlotsTigerResult"
              }
            }, {
              "id": 3,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsOx/SlotsOxResult"
              }
            }, {
              "id": 4,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsRabbit/SlotsRabbitResult"
              }
            }, {
              "id": 5,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsLoong/SlotsLoongResult"
              }
            }, {
              "id": 6,
              "type": {
                "type": "Reference",
                "target": "slots/SlotsPanda/SlotsPandaResult"
              }
            }]
          },
          "slots/SlotsMouse/SlotsMouseResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Slots/LineSlotsResult"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "freeCount",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "bigEvents",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 2,
              "name": "multiplier",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "id",
                  "type": {
                    "type": "String"
                  }
                }, {
                  "id": 1,
                  "name": "multiple",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }, {
              "id": 3,
              "name": "rounds",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotRound"
                }
              }
            }]
          },
          "slots/Slots/LineSlotsResult": {
            "type": "Interface",
            "properties": [{
              "id": 1,
              "name": "winning",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 2,
              "name": "symbols",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotSymbol"
                }
              }
            }, {
              "id": 3,
              "name": "payout",
              "type": {
                "type": "String"
              }
            }, {
              "id": 0,
              "name": "paylines",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotPayline"
                }
              }
            }, {
              "id": 4,
              "name": "leftFreeCount",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "virtualBigEvents",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "slots/Slots/PlaySlotPayline": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "points",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotCoordinate"
                }
              }
            }, {
              "id": 2,
              "name": "payout",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "activePoints",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotCoordinate"
                }
              },
              "optional": true
            }]
          },
          "slots/Slots/PlaySlotRound": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "symbols",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotSymbol"
                }
              }
            }, {
              "id": 1,
              "name": "paylines",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotPayline"
                }
              }
            }, {
              "id": 2,
              "name": "newSymbols",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotSymbol"
                }
              },
              "optional": true
            }]
          },
          "slots/SlotsDragon/SlotsDragonResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Slots/LineSlotsResult"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "freeCount",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "bigEvents",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 2,
              "name": "multipliers",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Interface",
                  "properties": [{
                    "id": 0,
                    "name": "id",
                    "type": {
                      "type": "String"
                    }
                  }, {
                    "id": 1,
                    "name": "multiple",
                    "type": {
                      "type": "Number"
                    }
                  }]
                }
              },
              "optional": true
            }]
          },
          "slots/SlotsTiger/SlotsTigerResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Slots/LineSlotsResult"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "bigEvents",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 1,
              "name": "multiplier",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "id",
                  "type": {
                    "type": "String"
                  }
                }, {
                  "id": 1,
                  "name": "multiple",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }, {
              "id": 2,
              "name": "allTheSame",
              "type": {
                "type": "Reference",
                "target": "slots/Slots/AllTheSame"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "rounds",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotRound"
                }
              }
            }, {
              "id": 4,
              "name": "chosenSymbolId",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "slots/Slots/AllTheSame": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "isTheSame",
              "type": {
                "type": "Boolean"
              }
            }]
          },
          "slots/SlotsOx/SlotsOxResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Slots/LineSlotsResult"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "bigEvents",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 1,
              "name": "freeCount",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "allTheSame",
              "type": {
                "type": "Reference",
                "target": "slots/Slots/AllTheSame"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "rounds",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "slots/Slots/PlaySlotRound"
                }
              }
            }]
          },
          "slots/SlotsRabbit/SlotsRabbitResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Slots/LineSlotsResult"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "bigEvents",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 1,
              "name": "freeCount",
              "type": {
                "type": "Number"
              }
            }]
          },
          "slots/SlotsLoong/SlotsLoongResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Slots/LineSlotsResult"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "pinball",
              "type": {
                "type": "Reference",
                "target": "slots/SlotsLoong/Pinball"
              },
              "optional": true
            }]
          },
          "slots/SlotsLoong/Pinball": {
            "type": "Interface",
            "properties": [{
              "id": 3,
              "name": "data",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "zipData",
              "type": {
                "type": "Buffer",
                "arrayType": "Uint8Array"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "multiple",
              "type": {
                "type": "Number"
              }
            }]
          },
          "slots/SlotsPanda/SlotsPandaResult": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "slots/Slots/LineSlotsResult"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "roulette",
              "type": {
                "type": "Reference",
                "target": "slots/SlotsPanda/Roulette"
              },
              "optional": true
            }]
          },
          "slots/SlotsPanda/Roulette": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "multiple",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tank/MsgGameBeginPush/MsgGameBeginPush": {
            "type": "Interface"
          },
          "tank/MsgGameDataChangedPush/MsgGameDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "isPlaying",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "tank/MsgGameDataSyncPush/MsgGameDataSyncPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "data",
              "type": {
                "type": "Reference",
                "target": "tank/TankTypeDef/ITankGameData"
              }
            }]
          },
          "tank/TankTypeDef/ITankGameData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tank/TankTypeDef/ITankPlayer"
                }
              }
            }]
          },
          "tank/TankTypeDef/ITankPlayer": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "color",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "playerId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "x",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "y",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "z",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "rotation",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "hp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "maxHp",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "score",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 10,
              "name": "reviveTime",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tank/MsgGameOverPush/MsgGameOverPush": {
            "type": "Interface"
          },
          "tank/MsgPlayerComesPush/MsgPlayerComesPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "player",
              "type": {
                "type": "Reference",
                "target": "tank/TankTypeDef/ITankPlayer"
              }
            }]
          },
          "tank/MsgPlayerDataChangedPush/MsgPlayerDataChangedPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "playerId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "hp",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "maxHp",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "reviveTime",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "score",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "tank/MsgPlayerLeavesPush/MsgPlayerLeavesPush": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }]
          },
          "tank/MsgTankAttack/MsgTankAttack": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "attackerId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "targetId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "damage",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "deltaHp",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "attackPoint",
              "type": {
                "type": "Interface",
                "properties": [{
                  "id": 0,
                  "name": "x",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 1,
                  "name": "y",
                  "type": {
                    "type": "Number"
                  }
                }, {
                  "id": 2,
                  "name": "z",
                  "type": {
                    "type": "Number"
                  }
                }]
              },
              "optional": true
            }]
          },
          "tank/MsgTankDataChange/MsgTankDataChange": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "playerId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "x",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "y",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "z",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "rotation",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "forceSync",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }]
          },
          "tank/MsgTankShoot/MsgTankShoot": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "playerId",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "x",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "y",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "z",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "rx",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "ry",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 6,
              "name": "rz",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "speed",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "lifeTime",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgBombScore/MsgBombScore": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "scoreRecords",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tienlen/MsgBombScore/ScoreRecord"
                }
              }
            }]
          },
          "tienlen/MsgBombScore/ScoreRecord": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userID",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "chairID",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "score",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgGameEnd/MsgGameEnd": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "bigWin",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 1,
              "name": "tongPai",
              "type": {
                "type": "Reference",
                "target": "tienlen/MsgGameEnd/TongPai"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "userData",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tienlen/MsgGameEnd/UserData"
                }
              }
            }, {
              "id": 3,
              "name": "bigData",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tienlen/MsgGameEnd/UserBigData"
                }
              },
              "optional": true
            }, {
              "id": 4,
              "name": "reason",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgGameEnd/TongPai": {
            "type": "Interface",
            "properties": [{
              "id": 3,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "cards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }]
          },
          "tienlen/MsgGameEnd/UserData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "userCard",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 3,
              "name": "playRecords",
              "type": {
                "type": "Any"
              }
            }, {
              "id": 4,
              "name": "score",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "bombScore",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "badScore",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "allScore",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "allGold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "frozen",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 10,
              "name": "isWinner",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 11,
              "name": "isCreator",
              "type": {
                "type": "Boolean"
              }
            }]
          },
          "tienlen/MsgGameEnd/UserBigData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "score",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "gold",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "winCnt",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "bombCnt",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "successiveWinCnt",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgGameStart/MsgGameStart": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "bankUser",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "userCard",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Array",
                  "elementType": {
                    "type": "Number"
                  }
                }
              }
            }, {
              "id": 2,
              "name": "round",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "currentUser",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "userCards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tienlen/MsgGameStart/UserCard"
                }
              }
            }]
          },
          "tienlen/MsgGameStart/UserCard": {
            "type": "Interface",
            "properties": [{
              "id": 3,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 4,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 1,
              "name": "cards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 2,
              "name": "cardCount",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgPass/MsgPass": {
            "type": "Interface"
          },
          "tienlen/MsgPassPlayer/MsgPassPlayer": {
            "type": "Interface",
            "properties": [{
              "id": 2,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgPlay/MsgPlay": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "cards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }]
          },
          "tienlen/MsgRoomInfo/MsgRoomInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "gameStatus",
              "type": {
                "type": "Reference",
                "target": "tienlen/MsgRoomInfo/GameStatus"
              }
            }, {
              "id": 2,
              "name": "serialNumber",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "playerCount",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "userCards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tienlen/MsgGameStart/UserCard"
                }
              },
              "optional": true
            }, {
              "id": 10,
              "name": "handRound",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "players",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tienlen/MsgRoomInfo/Player"
                }
              }
            }, {
              "id": 4,
              "name": "prevCards",
              "type": {
                "type": "Reference",
                "target": "tienlen/MsgTurnPlayer/CARD_TYPE_INFO"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "currentUserId",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 6,
              "name": "currentUser",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 7,
              "name": "currentLeftTime",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "tienlen/MsgRoomInfo/GameStatus": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 100
            }, {
              "id": 2,
              "value": 200
            }, {
              "id": 3,
              "value": 300
            }]
          },
          "tienlen/MsgRoomInfo/Player": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "uid",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "name",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "visualId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgTurnPlayer/CARD_TYPE_INFO": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userID",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "chairID",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "type",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "cards",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Number"
                }
              }
            }, {
              "id": 4,
              "name": "leftCardCount",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgRoomScore/MsgRoomScore": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userData",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "tienlen/MsgRoomScore/UserData"
                }
              }
            }]
          },
          "tienlen/MsgRoomScore/UserData": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 2,
              "name": "score",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "gold",
              "type": {
                "type": "Number"
              }
            }]
          },
          "tienlen/MsgTrusteeship/MsgTrusteeship": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "status",
              "type": {
                "type": "Boolean"
              }
            }]
          },
          "tienlen/MsgTrusteeshipStatus/MsgTrusteeshipStatus": {
            "type": "Interface",
            "properties": [{
              "id": 2,
              "name": "chairId",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "status",
              "type": {
                "type": "Boolean"
              }
            }]
          },
          "tienlen/MsgTurnPlayer/MsgTurnPlayer": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "currentUser",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "userId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "prevCards",
              "type": {
                "type": "Reference",
                "target": "tienlen/MsgTurnPlayer/CARD_TYPE_INFO"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "handRound",
              "type": {
                "type": "Number"
              }
            }]
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/shopGiftMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './ConfigMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, SpriteFrame, Label, Prefab, Component, instantiate, Num, ConfigMgr;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Prefab = module.Prefab;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      ConfigMgr = module.ConfigMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "f5487roiAlEQKnJLZXsB1FG", "shopGiftMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var shopGiftMgr = exports('shopGiftMgr', (_dec = ccclass('shopGiftMgr'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(shopGiftMgr, _Component);
        function shopGiftMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popUp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coins", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgdata", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "purchaseNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftnode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftpb", _descriptor6, _assertThisInitialized(_this));
          _this.spealist = true;
          return _this;
        }
        var _proto = shopGiftMgr.prototype;
        _proto.start = function start() {
          var _this2 = this;
          var res = ConfigMgr.inst.getShopConfig();
          var giftlist = res.gift;
          var _loop = function _loop(i) {
            var temp = instantiate(_this2.giftpb);
            if (temp.getChildByName("gift")) {
              temp.getChildByName("gift").getComponent(Sprite).spriteFrame = _this2.imgdata[giftlist[i].img];
            }
            if (temp.getChildByName("buy_btn")) {
              temp.getChildByName("buy_btn").getChildByName("num").getComponent(Label).string = giftlist[i].moneyNum;
            }
            // if(this.spealist){
            //     temp.children[1].active = true;
            //     this.spealist = false;
            // }
            temp.on(Node.EventType.TOUCH_END, function () {
              _this2.onclickCard(giftlist[i].id);
            });
            // 获取按钮组件
            // const btn = temp.getComponent(Button);

            // // 创建点击事件处理器
            // const clickEvent = new EventHandler();
            // clickEvent.target = this.node; // 当前脚本绑定的节点
            // clickEvent.component = "shopMgr"; // 👈 换成你这个脚本类的类名（不是文件名）
            // clickEvent.handler = "onclickCard";
            // clickEvent.customEventData = String(i + 1); // 传递 "1" ~ "6"

            // btn.clickEvents.push(clickEvent);
            _this2.giftnode.addChild(temp);
          };
          for (var i = 0; i < giftlist.length; i++) {
            _loop(i);
          }
        };
        _proto.onclickCard = function onclickCard(args) {
          switch (args) {
            case "1":
              this.coins.spriteFrame = this.imgdata[0];
              this.openpopUp();
              break;
            case "2":
              this.coins.spriteFrame = this.imgdata[1];
              this.openpopUp();
              break;
            case "3":
              this.coins.spriteFrame = this.imgdata[2];
              this.openpopUp();
              break;
            case "4":
              this.coins.spriteFrame = this.imgdata[3];
              this.openpopUp();
              break;
            case "5":
              this.coins.spriteFrame = this.imgdata[4];
              this.openpopUp();
              break;
            case "6":
              this.coins.spriteFrame = this.imgdata[5];
              this.openpopUp();
              break;
            case "7":
              this.coins.spriteFrame = this.imgdata[6];
              this.openpopUp();
              break;
          }
        };
        _proto.openpopUp = function openpopUp() {
          this.popUp.active = true;
        };
        _proto.closepopUp = function closepopUp() {
          this.popUp.active = false;
        };
        _proto.add = function add() {
          var temp = Num.parse(this.purchaseNum.string) + 1;
          this.purchaseNum.string = temp.toString();
        };
        _proto.sub = function sub() {
          if (this.purchaseNum.string == "1") ;else {
            var temp = Num.parse(this.purchaseNum.string) - 1;
            this.purchaseNum.string = temp.toString();
          }
        };
        _proto.update = function update(deltaTime) {};
        return shopGiftMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popUp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coins", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgdata", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "purchaseNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "giftnode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "giftpb", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/shopMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts', './ConfigMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, SpriteFrame, Label, Prefab, Component, instantiate, Num, ConfigMgr;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Prefab = module.Prefab;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      Num = module.Num;
    }, function (module) {
      ConfigMgr = module.ConfigMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "ee906M2gDhK/7NkSXZ0Bd/z", "shopMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var shopMgr = exports('shopMgr', (_dec = ccclass('shopMgr'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(shopMgr, _Component);
        function shopMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popUp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coins", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgdata", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "purchaseNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topcharge", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chongzhipb", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = shopMgr.prototype;
        _proto.start = function start() {
          var _this2 = this;
          var res = ConfigMgr.inst.getShopConfig();
          var chongzhiif = res.chongzhi;
          var _loop = function _loop(i) {
            var temp = instantiate(_this2.chongzhipb);
            if (temp.getChildByName("coins")) {
              temp.getChildByName("coins").getComponent(Sprite).spriteFrame = _this2.imgdata[chongzhiif[i].img];
            }
            if (temp.getChildByName("num")) {
              temp.getChildByName("num").getChildByName("Label").getComponent(Label).string = chongzhiif[i].moneyNum;
            }
            temp.on(Node.EventType.TOUCH_END, function () {
              _this2.onclickCard(chongzhiif[i].id);
            });
            // 获取按钮组件
            // const btn = temp.getComponent(Button);

            // // 创建点击事件处理器
            // const clickEvent = new EventHandler();
            // clickEvent.target = this.node; // 当前脚本绑定的节点
            // clickEvent.component = "shopMgr"; // 👈 换成你这个脚本类的类名（不是文件名）
            // clickEvent.handler = "onclickCard";
            // clickEvent.customEventData = String(i + 1); // 传递 "1" ~ "6"

            // btn.clickEvents.push(clickEvent);
            _this2.topcharge.addChild(temp);
          };
          for (var i = 0; i < chongzhiif.length; i++) {
            _loop(i);
          }
        };
        _proto.onclickCard = function onclickCard(args) {
          switch (args) {
            case "1":
              this.coins.spriteFrame = this.imgdata[0];
              this.openpopUp();
              break;
            case "2":
              this.coins.spriteFrame = this.imgdata[1];
              this.openpopUp();
              break;
            case "3":
              this.coins.spriteFrame = this.imgdata[2];
              this.openpopUp();
              break;
            case "4":
              this.coins.spriteFrame = this.imgdata[3];
              this.openpopUp();
              break;
            case "5":
              this.coins.spriteFrame = this.imgdata[4];
              this.openpopUp();
              break;
            case "6":
              this.coins.spriteFrame = this.imgdata[5];
              this.openpopUp();
              break;
          }
        };
        _proto.openpopUp = function openpopUp() {
          this.popUp.active = true;
        };
        _proto.closepopUp = function closepopUp() {
          this.popUp.active = false;
        };
        _proto.add = function add() {
          var temp = Num.parse(this.purchaseNum.string) + 1;
          this.purchaseNum.string = temp.toString();
        };
        _proto.sub = function sub() {
          if (this.purchaseNum.string == "1") ;else {
            var temp = Num.parse(this.purchaseNum.string) - 1;
            this.purchaseNum.string = temp.toString();
          }
        };
        _proto.update = function update(deltaTime) {};
        return shopMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popUp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coins", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgdata", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "purchaseNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "topcharge", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chongzhipb", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/shopRecommendMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d10c8EJuTNEY4TP8oqo0EEh", "shopRecommendMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var shopRecommendMgr = exports('shopRecommendMgr', (_dec = ccclass('shopMgr'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(shopRecommendMgr, _Component);
        function shopRecommendMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popUp", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = shopRecommendMgr.prototype;
        _proto.start = function start() {};
        _proto.openpopUp = function openpopUp() {
          this.popUp.active = true;
        };
        _proto.closepopUp = function closepopUp() {
          this.popUp.active = false;
        };
        _proto.update = function update(deltaTime) {};
        return shopRecommendMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "popUp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkyboxRotating.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "40e25CcOCdLgatMGX1WAibS", "SkyboxRotating", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SkyboxRotating = exports('SkyboxRotating', (_dec = ccclass('SkyboxRotating'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkyboxRotating, _Component);
        function SkyboxRotating() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rotationSpeed", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SkyboxRotating.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {
          var skybox = director.getScene().globals.skybox;
          var angle = skybox._resource.getRotationAngle() + deltaTime * this.rotationSpeed;
          skybox._resource.setRotationAngle(angle);
        };
        return SkyboxRotating;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotationSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotAutoPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Color, tween, Component, Num;
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
      Label = module.Label;
      Color = module.Color;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "c8f99X3mnZLEqncyVFPbIrG", "SlotAutoPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotAutoPanel = exports('SlotAutoPanel', (_dec = ccclass('SlotAutoPanel'), _dec2 = property({
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
        _inheritsLoose(SlotAutoPanel, _Component);
        function SlotAutoPanel() {
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
          _this._money = 0;
          _this._callback = null;
          //汇率
          _this._exchangeRate = 0;
          /**累计下注 */
          _this._betSum = 0;
          _this.autoChooseColor = [243, 168, 85];
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = SlotAutoPanel.prototype;
        _proto.onLoad = function onLoad() {
          // const v = view.getVisibleSize();
          // const s = v.height / 1334;
          // this.node.scale = new Vec3(s,s,1);
        };
        _proto.update = function update(dt) {
          // this.lblUserCoin.string = Num.exchangeToThousands(this.exchangeRate, this._money);
          this.lblCurBet.string = Num.exchangeToThousands(this.exchangeRate, this.betSum);
          // this.winCoin_lab.string = mouse.slotCtrl.winCoin_lab.string;
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
            // mouse.node.startAuto(this.autoNum);
            this._callback && this._callback(this.autoNum);
          }
        };
        _proto.showPanel = function showPanel(money, betSum, callback) {
          var _this2 = this;
          // mouse.node.audio.playclickopen();

          this._money = money;
          this._betSum = betSum;
          this._callback = callback;
          this.lblUserCoin.string = Num.exchangeToThousands(this.exchangeRate, this._money);
          this.winCoin_lab.string = "0";
          this.node.active = true;
          this.showPos = (this.panel.h - this.node.parent.h) / 2;
          // this.hidePos = -this.panel.h / 2;
          this.panel.y = this.showPos - this.panel.h;
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
            y: this.showPos - this.panel.h
          }).call(function () {
            _this3.node.active = false;
          }).start();
        };
        _proto.onClose = function onClose() {
          // mouse.node.audio.playclickclose();
          this.hidePanel();
        };
        _createClass(SlotAutoPanel, [{
          key: "exchangeRate",
          get: function get() {
            this._exchangeRate = 1;
            return this._exchangeRate;
          }
        }, {
          key: "betSum",
          get: function get() {
            return this._betSum;
          },
          set: function set(v) {
            this._betSum = v;
          }
        }]);
        return SlotAutoPanel;
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

System.register("chunks:///_virtual/SlotBetNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "8f1e11yc6ZHdqk2GJgs7UJC", "SlotBetNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotBetNum = exports('SlotBetNum', (_dec = ccclass('SlotBetNum'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotBetNum, _Component);
        function SlotBetNum() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.valNum = 0;
          return _this;
        }
        return SlotBetNum;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotBetPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotBetNum.ts', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Prefab, PageView, Label, instantiate, tween, Component, SlotBetNum, Num;
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
      Prefab = module.Prefab;
      PageView = module.PageView;
      Label = module.Label;
      instantiate = module.instantiate;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      SlotBetNum = module.SlotBetNum;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "b4e5eKAg8ZHiaRrcFLZDVWo", "SlotBetPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotBetPanel = exports('SlotBetPanel', (_dec = ccclass('SlotBetPanel'), _dec2 = property({
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
        _inheritsLoose(SlotBetPanel, _Component);
        function SlotBetPanel() {
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
          _this._money = 0;
          //汇率
          _this._exchangeRate = 0;
          /**累计下注 */
          _this._betSum = 0;
          _this._callback = null;
          _this.numList = [];
          _this.betList = [];
          _this.line = 0;
          _this.val1 = 0;
          _this.val2 = 0;
          _this.val3 = 0;
          _this.tempi = 0;
          //投注大小下标位
          _this.tempj = 0;
          //投注倍数下标位
          _this.tempindex = 0;
          //投注总额下标位
          _this.sumList = [];
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = SlotBetPanel.prototype;
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(this.exchangeRate, this.money);
          this.lblCurBet.string = Num.exchangeToThousands(this.exchangeRate, this.betSum);
          // this.winCoin_lab.string = mouse.slotCtrl.winCoin_lab.string;
        };
        //投注总额组
        _proto.onLoad = function onLoad() {
          // const v = view.getVisibleSize();
          // const s = v.height / 1334;
          // this.node.scale = new Vec3(s, s, 1);
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
            newNode.getComponent(Label).string = Num.exchangeToThousands(this.exchangeRate, this.numList[i]);
            newNode.getComponent(SlotBetNum).valNum = this.numList[i];
            this.chooseBet_list1.addPage(newNode);
          }
          this.chooseBet_list2.removeAllPages();
          for (var _i = 0; _i < this.betList.length; _i++) {
            var _newNode = instantiate(this.chooseBet_pb);
            _newNode.children[0].active = false;
            _newNode.children[1].active = false;
            _newNode.getComponent(Label).string = this.betList[_i] + "";
            _newNode.getComponent(SlotBetNum).valNum = this.betList[_i];
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
            _newNode2.getComponent(Label).string = Num.exchangeToThousands(this.exchangeRate, sumList[_i3]);
            _newNode2.getComponent(SlotBetNum).valNum = sumList[_i3];
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
            if (this.chooseBet_list3.getPages()[i].getComponent(SlotBetNum).valNum == this.val1 * 1000 * this.val2 * this.line / 1000) {
              this.chooseBet_list3.setCurrentPageIndex(i);
              this.val3 = this.chooseBet_list3.getPages()[i].getComponent(SlotBetNum).valNum;
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
            if (this.chooseBet_list3.getPages()[i].getComponent(SlotBetNum).valNum == this.val1 * 1000 * this.val2 * this.line / 1000) {
              this.chooseBet_list3.setCurrentPageIndex(i);
              this.val3 = this.chooseBet_list3.getPages()[i].getComponent(SlotBetNum).valNum;
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
              if (this.val3 == this.chooseBet_list1.getPages()[i].getComponent(SlotBetNum).valNum * 1000 * this.chooseBet_list2.getPages()[j].getComponent(SlotBetNum).valNum * this.line / 1000) {
                this.chooseBet_list1.setCurrentPageIndex(i);
                this.chooseBet_list2.setCurrentPageIndex(j);
                this.val1 = this.chooseBet_list1.getPages()[i].getComponent(SlotBetNum).valNum;
                this.val2 = this.chooseBet_list2.getPages()[j].getComponent(SlotBetNum).valNum;
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
              if (this.val3 == this.chooseBet_list1.getPages()[i].getComponent(SlotBetNum).valNum * 1000 * this.chooseBet_list2.getPages()[j].getComponent(SlotBetNum).valNum * this.line / 1000) {
                this.chooseBet_list1.setCurrentPageIndex(i);
                this.chooseBet_list2.setCurrentPageIndex(j);
                this.val1 = this.chooseBet_list1.getPages()[i].getComponent(SlotBetNum).valNum;
                this.val2 = this.chooseBet_list2.getPages()[i].getComponent(SlotBetNum).valNum;
                this.tempi = i;
                this.tempj = j;
                break;
              }
            }
          }
        };
        _proto.onConfirm = function onConfirm() {
          this.betSum = this.sumList[this.tempindex];
          this.lblCurBet.string = Num.exchangeToThousands(this.exchangeRate, this.betSum);
          // mouse.slotCtrl.lblCurBet.string = this.lblCurBet.string;
          this._callback && this._callback(this.tempi, this.tempj, this.tempindex, this.sumList[this.tempindex], this.lblCurBet.string);
          this.onClose();
        };
        _proto.bindBet = function bindBet(index) {
          this.chooseBet_list3.setCurrentPageIndex(index);
          this.val3 = this.betSum;
          this.cb_pt3(this.chooseBet_list3);
        };
        /**
         * 
         * @param betNum 单注值
         * @param bet 
         * @param lines 线数
         * @param args 0:单注值  1：下注倍数  2：线数  3：持有金币 4:下注额  5：回调
         */
        _proto.showPanel = function showPanel() {
          var _ref,
            _ref2,
            _this2 = this;
          // mouse.node.audio.playclickopen();

          this.numList = arguments.length <= 0 ? undefined : arguments[0];
          this.betList = arguments.length <= 1 ? undefined : arguments[1];
          this.line = arguments.length <= 2 ? undefined : arguments[2];
          this.money = arguments.length <= 3 ? undefined : arguments[3];
          this._betSum = arguments.length <= 4 ? undefined : arguments[4];
          this._callback = (_ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]) instanceof Function ? (_ref2 = arguments.length - 1, _ref2 < 0 || arguments.length <= _ref2 ? undefined : arguments[_ref2]) : null;
          this.winCoin_lab.string = "0";
          this.node.active = true;
          this.showPos = (this.panel.h - this.node.parent.h) / 2;
          // this.hidePos = -this.panel.h / 2;
          this.panel.y = this.showPos - this.panel.h;
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
            y: this.showPos - this.panel.h
          }).call(function () {
            _this3.node.active = false;
          }).start();
        };
        _proto.onClose = function onClose() {
          // mouse.node.audio.playclickclose();
          this.hidePanel();
        };
        _createClass(SlotBetPanel, [{
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
            return this._betSum;
          },
          set: function set(v) {
            this._betSum = v;
          }
        }]);
        return SlotBetPanel;
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

System.register("chunks:///_virtual/SlotLastMoneyPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Num.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, tween, Component, Num;
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
      Label = module.Label;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Num = module.Num;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "64869NqRwtB5IwVsmnlZQiK", "SlotLastMoneyPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotLastMoneyPanel = exports('SlotLastMoneyPanel', (_dec = ccclass('SlotLastMoneyPanel'), _dec2 = property({
        type: Node,
        tooltip: ""
      }), _dec3 = property({
        type: Label,
        tooltip: ""
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotLastMoneyPanel, _Component);
        function SlotLastMoneyPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserCoin", _descriptor2, _assertThisInitialized(_this));
          _this._money = 0;
          //汇率
          _this._exchangeRate = 0;
          _this.showPos = void 0;
          _this.hidePos = void 0;
          return _this;
        }
        var _proto = SlotLastMoneyPanel.prototype;
        _proto.update = function update(dt) {
          this.lblUserCoin.string = Num.exchangeToThousands(this.exchangeRate, this._money);
        };
        _proto.onLoad = function onLoad() {
          // const v = view.getVisibleSize();
          // const s = v.height / 1334;
          // this.node.scale = new Vec3(s, s, 1);
        };
        _proto.showPanel = function showPanel(money) {
          var _this2 = this;
          // mouse.node.audio.playclickopen();
          this._money = money;
          this.node.active = true;
          this.showPos = (this.panel.h - this.node.parent.h) / 2;
          // this.hidePos = -this.panel.h / 2;

          this.panel.y = this.showPos - this.panel.h;
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
            y: this.showPos - this.panel.h
          }).call(function () {
            _this3.node.active = false;
          }).start();
        };
        _proto.onClose = function onClose() {
          // mouse.node.audio.playclickclose();
          this.hidePanel();
        };
        _createClass(SlotLastMoneyPanel, [{
          key: "exchangeRate",
          get: function get() {
            this._exchangeRate = 1;
            return this._exchangeRate;
          }
        }]);
        return SlotLastMoneyPanel;
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

System.register("chunks:///_virtual/Slots.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17df0eE2hxFv59hCQcadfrT", "Slots", undefined); //中奖线
      //左下角点的坐标为（1， 1）
      //青一色，全部颜色相同
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsDragon.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fc2cdTLrdBPJ7TuhWsVJ5Tc", "SlotsDragon", undefined); //幸运龙
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsDragonHatch.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05c7eCo8qpCBZNvk17pDEGn", "SlotsDragonHatch", undefined);
      var Dragon = exports('Dragon', /*#__PURE__*/function (Dragon) {
        Dragon[Dragon["EARTH"] = 0] = "EARTH";
        Dragon[Dragon["WATER"] = 1] = "WATER";
        Dragon[Dragon["FIRE"] = 2] = "FIRE";
        Dragon[Dragon["DRAGON"] = 3] = "DRAGON";
        return Dragon;
      }({})); //巨龙， 70个

      //寻龙探宝
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotShowPanelMgr.ts", ['cc', './ResourceMgr.ts', './ModuleDef.ts', './SlotBetPanel.ts', './SlotAutoPanel.ts', './SlotLastMoneyPanel.ts'], function (exports) {
  var cclegacy, find, Prefab, instantiate, ResourceMgr, ModuleDef, SlotBetPanel, SlotAutoPanel, SlotLastMoneyPanel;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      SlotBetPanel = module.SlotBetPanel;
    }, function (module) {
      SlotAutoPanel = module.SlotAutoPanel;
    }, function (module) {
      SlotLastMoneyPanel = module.SlotLastMoneyPanel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fbf0biVNjtFbatqowIIIG6o", "SlotShowPanelMgr", undefined); //展示slot界面专用
      var betPanel = null;
      /**
       * 展示slot下注界面
       * @abstract 需要定位上次的位置则使用返回值调用bindBet（index）;
       * @param node 界面的父节点
       * @param args 传参顺序  下注大小->下注倍数->线数->持有金币->下注额->回调函数？
       * @returns 
       */
      var showSlotBetPanel = exports('showSlotBetPanel', function showSlotBetPanel(node) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return new Promise(function (resolve, reject) {
          var panelNode = find('SlotBetPanel', node);
          // const viewHeight = view.getVisibleSize().height;
          // node.getComponent(UITransform).height = viewHeight;
          // node.position = new Vec3(0, -viewHeight / 2);
          if (panelNode) {
            betPanel = panelNode.getComponent(SlotBetPanel);
            betPanel.showPanel(args[0], args[1], args[2], args[3], args[4], args[5]);
            return resolve(betPanel);
          }
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, 'ui_slot/bet/SlotBetPanel', Prefab, function (err, prefab) {
            var panel = instantiate(prefab);
            panel.parent = node;
            panel.name = 'SlotBetPanel';
            betPanel = panel.getComponent(SlotBetPanel);
            betPanel.showPanel(args[0], args[1], args[2], args[3], args[4], args[5]);
            return resolve(betPanel);
          });
        });
      });
      var autoPenel = null;
      /**
       * 展示slot自动游戏次数选择界面
       * @param node 界面的父节点
       * @param money 持有金币
       * @param callback 回调函数？
       */
      var showSlotAutoPenel = exports('showSlotAutoPenel', function showSlotAutoPenel(node, money, betSum, callback) {
        return new Promise(function (resolve, reject) {
          var panelNode = find('SlotAutoPanel', node);
          // const viewHeight = view.getVisibleSize().height;
          // node.getComponent(UITransform).height = viewHeight;
          // node.position = new Vec3(0, -viewHeight / 2);
          if (panelNode) {
            autoPenel = panelNode.getComponent(SlotAutoPanel);
            autoPenel.showPanel(money, betSum, callback);
            return resolve(autoPenel);
          }
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, 'ui_slot/auto/SlotAutoPanel', Prefab, function (err, prefab) {
            var panel = instantiate(prefab);
            panel.parent = node;
            panel.name = 'SlotAutoPanel';
            autoPenel = panel.getComponent(SlotAutoPanel);
            autoPenel.showPanel(money, betSum, callback);
            return resolve(autoPenel);
          });
        });
      });
      var lastMoneyPenel = null;
      /**
       * 展示slot钱包界面
       * @param node 界面的父节点
       * @param money 持有金币
       * @param callback 回调函数？
       */
      var showSlotLastMoneyPenel = exports('showSlotLastMoneyPenel', function showSlotLastMoneyPenel(node, money, callback) {
        return new Promise(function (resolve, reject) {
          var panelNode = find('SlotLastMoneyPanel', node);
          // const viewHeight = view.getVisibleSize().height;
          // node.getComponent(UITransform).height = viewHeight;
          // node.position = new Vec3(0, -viewHeight / 2);
          if (panelNode) {
            lastMoneyPenel = panelNode.getComponent(SlotLastMoneyPanel);
            lastMoneyPenel.showPanel(money);
            return resolve(lastMoneyPenel);
          }
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, 'ui_slot/lastMoney/SlotLastMoneyPanel', Prefab, function (err, prefab) {
            var panel = instantiate(prefab);
            panel.parent = node;
            panel.name = 'SlotLastMoneyPanel';
            lastMoneyPenel = panel.getComponent(SlotLastMoneyPanel);
            lastMoneyPenel.showPanel(money);
            return resolve(lastMoneyPenel);
          });
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsLoong.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6278bHFWtHgJwEHdKGOOAZ", "SlotsLoong", undefined); //弹珠游戏
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsMouse.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e7f8MdTBVOyaQJUwHNPAVe", "SlotsMouse", undefined); //幸运鼠
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsOx.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bfcafeSXjJA06pw4mrkdO77", "SlotsOx", undefined); //幸运牛
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsPanda.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ae35fi7mw5DHI2paMMxJo9y", "SlotsPanda", undefined); //轮盘游戏
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsRabbit.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2a0caMNmKJKnZXhMsdVHOu2", "SlotsRabbit", undefined); //幸运兔
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotsTiger.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "77c839/YQ9G+4F38OKsW80L", "SlotsTiger", undefined); //幸运虎
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotTweenFun.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd498vyLxxDOZUmoNM3Q3TB", "SlotTweenFun", undefined);
      /*
       * TweenFun.js
       * t: current time（当前时间）
       * b: beginning value（初始值）
       * c: change in value（变化量）
       * d: duration（持续时间）
      */

      var SlotTweenFun = exports('SlotTweenFun', {
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
            return c - SlotTweenFun.Bounce.easeOut(d - t, 0, c, d) + b;
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
              return SlotTweenFun.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
              return SlotTweenFun.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
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

System.register("chunks:///_virtual/SubGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceMgr.ts', './ModuleDef.ts', './SubGameMessage.ts', './HotUpdateCtrl.ts', './HotUpdateEvent.ts', './GameConst.ts', './LanguageData.ts', './LanguageLabel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Label, instantiate, SpriteFrame, Sprite, director, Component, ResourceMgr, ModuleDef, SubGameMessage, HotUpdateCtrl, HotUpdateEvent, LanguageData, LanguageLabel;
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
      instantiate = module.instantiate;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }, function (module) {
      HotUpdateCtrl = module.HotUpdateCtrl;
    }, function (module) {
      HotUpdateEvent = module.HotUpdateEvent;
    }, null, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      LanguageLabel = module.LanguageLabel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "1985c7APIJGkYpGnUlBfsKn", "SubGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SubGameHotUpdateStatus = exports('SubGameHotUpdateStatus', /*#__PURE__*/function (SubGameHotUpdateStatus) {
        SubGameHotUpdateStatus[SubGameHotUpdateStatus["updateRate"] = 0] = "updateRate";
        SubGameHotUpdateStatus[SubGameHotUpdateStatus["updateFinfish"] = 1] = "updateFinfish";
        SubGameHotUpdateStatus[SubGameHotUpdateStatus["updateHighVersion"] = 2] = "updateHighVersion";
        return SubGameHotUpdateStatus;
      }({}));
      var SubGame = exports('SubGame', (_dec = ccclass('SubGame'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SubGame, _Component);
        function SubGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameName = void 0;
          _this.gameType = void 0;
          _initializerDefineProperty(_this, "gametaghot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gametagfun", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gametagnew", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingNode", _descriptor4, _assertThisInitialized(_this));
          _this._bundle = void 0;
          return _this;
        }
        var _proto = SubGame.prototype;
        //能否下载完后自动进入，1个子游戏下载完成自动进入，多个下载的话不触发自动进入
        _proto.start = /*#__PURE__*/
        function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.loadingNode.active = false;
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.initData = function initData(data) {
          var _this2 = this;
          this.gameName = data.id;
          this.gameType = data.gametype;
          this._bundle = data.bundle;
          var txt_title = this.node.children[0].getChildByName("txt_title");
          var tag = this.node.getChildByName("tag");
          if (txt_title) {
            txt_title.getComponent(Label).string = data.name;
            txt_title.getComponent(LanguageLabel).dataID = data.language;
          }
          if (data.tag == "null") ;
          if (data.tag == "hot") {
            var prefabInstance = instantiate(this.gametaghot);
            tag.addChild(prefabInstance);
          }
          if (data.tag == "new") {
            var _prefabInstance = instantiate(this.gametagnew);
            tag.addChild(_prefabInstance);
          }
          if (data.tag == "fun") {
            var _prefabInstance2 = instantiate(this.gametagfun);
            tag.addChild(_prefabInstance2);
          }
          if (!data.showTitle) {
            txt_title.active = false;
          }
          var newNode = new Node();
          this.node.addChild(newNode);
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, data.icon + "/spriteFrame", SpriteFrame, function (error, resObj) {
            _this2.node.getComponent(Sprite).spriteFrame = resObj;
          });
          // prefabInstance.getComponent(Sprite).spriteFrame=
          this.node.on(Node.EventType.TOUCH_END, this.onSubGameIconClicked, this);
          director.on(HotUpdateEvent.HotUpdateRate, this.onHotUpdateRate, this);
          director.on(HotUpdateEvent.HotUpdateFinish, this.onHotUpdateFinish, this);
          director.on(HotUpdateEvent.CheckVersionResult, this.onCheckVersionResult, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(HotUpdateEvent.HotUpdateRate, this.onHotUpdateRate, this);
          director.off(HotUpdateEvent.HotUpdateFinish, this.onHotUpdateFinish, this);
          director.off(HotUpdateEvent.CheckVersionResult, this.onCheckVersionResult, this);
        };
        _proto.onSubGameIconClicked = function onSubGameIconClicked() {
          {
            director.emit(SubGameMessage.EnterSubGame, this.gameName);
            return;
          }
        };
        _proto.checkSubGameUpdate = /*#__PURE__*/function () {
          var _checkSubGameUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(gameName) {
            var status, ctrl;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (SubGame.subGameHotUpdateStatusMap.hasOwnProperty(gameName)) {
                    _context2.next = 4;
                    break;
                  }
                  SubGame.subGameHotUpdateStatusMap[gameName] = SubGameHotUpdateStatus.updateRate;
                  _context2.next = 13;
                  break;
                case 4:
                  status = SubGame.subGameHotUpdateStatusMap[gameName];
                  if (!(status == SubGameHotUpdateStatus.updateFinfish)) {
                    _context2.next = 10;
                    break;
                  }
                  this.enterSubGame();
                  return _context2.abrupt("return");
                case 10:
                  if (!(status == SubGameHotUpdateStatus.updateHighVersion)) {
                    _context2.next = 13;
                    break;
                  }
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_hotupdateVersion"));
                  return _context2.abrupt("return");
                case 13:
                  _context2.next = 15;
                  return this.getSubGameHotUpdateCtrl(this.gameName);
                case 15:
                  ctrl = _context2.sent;
                  ctrl.checkUpdate();
                case 17:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function checkSubGameUpdate(_x) {
            return _checkSubGameUpdate.apply(this, arguments);
          }
          return checkSubGameUpdate;
        }();
        _proto.getSubGameHotUpdateCtrl = /*#__PURE__*/function () {
          var _getSubGameHotUpdateCtrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(subGameName) {
            var ctrl;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  ctrl = SubGame.subGameHotUpdateCtrls[subGameName];
                  if (ctrl) {
                    _context3.next = 6;
                    break;
                  }
                  ctrl = new HotUpdateCtrl();
                  SubGame.subGameHotUpdateCtrls[subGameName] = ctrl;
                  _context3.next = 6;
                  return ctrl.init(this._bundle);
                case 6:
                  return _context3.abrupt("return", ctrl);
                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function getSubGameHotUpdateCtrl(_x2) {
            return _getSubGameHotUpdateCtrl.apply(this, arguments);
          }
          return getSubGameHotUpdateCtrl;
        }()
        /**
         * 热更新版本检查结果
         */;

        _proto.onCheckVersionResult = /*#__PURE__*/
        function () {
          var _onCheckVersionResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(subGameName, newVersionFoud) {
            var _ctrl, ctrl;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(this._bundle != subGameName)) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  // this.loadingSubGame = "";
                  console.log('-------CheckVersionResult-------', subGameName, newVersionFoud);
                  if (!newVersionFoud) {
                    _context4.next = 24;
                    break;
                  }
                  if (!SubGame.subGameHotUpdateCtrls.hasOwnProperty(this.gameName)) {
                    _context4.next = 15;
                    break;
                  }
                  _ctrl = SubGame.subGameHotUpdateCtrls[this.gameName];
                  console.log(this._bundle + "subgameLocalVersion:" + _ctrl.getLocalManifestVersion() + " |subgameReteVersion:" + _ctrl.getReteManifestVersion() + "> mainVersion:" + HotUpdateCtrl.mainVersion);
                  if (!(_ctrl.getReteManifestVersion() > HotUpdateCtrl.mainVersion)) {
                    _context4.next = 15;
                    break;
                  }
                  if (!(_ctrl.getLocalManifestVersion() > 0)) {
                    _context4.next = 11;
                    break;
                  }
                  this.enterSubGame();
                  return _context4.abrupt("return");
                case 11:
                  SubGame.subGameHotUpdateStatusMap[this.gameName] = SubGameHotUpdateStatus.updateHighVersion;
                  if (SubGame.subGameHotUpdateCtrls.hasOwnProperty(this.gameName)) {
                    delete SubGame.subGameHotUpdateCtrls[this.gameName];
                  }
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_hotupdateVersion"));
                  return _context4.abrupt("return");
                case 15:
                  this.loadingNode.active = true;
                  _context4.next = 18;
                  return this.getSubGameHotUpdateCtrl(this.gameName);
                case 18:
                  ctrl = _context4.sent;
                  ctrl.hotUpdate();
                  //1个子游戏下载完成自动进入，多个下载的话不触发自动进入,清除waitEnterSubGame

                  if (SubGame.downSubGame == "") {
                    SubGame.canEnterSubGame = true;
                  } else {
                    console.log("other subgame is updating:" + SubGame.downSubGame);
                    SubGame.canEnterSubGame = false;
                  }
                  SubGame.downSubGame = this.gameName;
                  _context4.next = 25;
                  break;
                case 24:
                  this.enterSubGame();
                case 25:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function onCheckVersionResult(_x3, _x4) {
            return _onCheckVersionResult.apply(this, arguments);
          }
          return onCheckVersionResult;
        }()
        /**
         * 热更进度回调
         */;

        _proto.onHotUpdateRate = function onHotUpdateRate(subGameName, rate) {
          if (this._bundle != subGameName) {
            return;
          }
          this.loadingNode.getComponentInChildren(Label).string = Math.floor(rate * 100) + "%";
        }

        /**
         * 更新完成
         */;
        _proto.onHotUpdateFinish = function onHotUpdateFinish(subGameName, result) {
          if (this._bundle != subGameName) {
            return;
          }
          this.loadingNode.active = false;
          if (!result) {
            tgx.UIAlert.show(LanguageData.getLangByID("tid_hotupdatefail"));
            return;
          }
          this.enterSubGame();
        };
        _proto.enterSubGame = function enterSubGame() {
          SubGame.subGameHotUpdateStatusMap[this.gameName] = SubGameHotUpdateStatus.updateFinfish;
          if (SubGame.subGameHotUpdateCtrls.hasOwnProperty(this.gameName)) {
            delete SubGame.subGameHotUpdateCtrls[this.gameName];
          }
          //如果有其他的子游戏在更新 不进入
          if (Object.keys(SubGame.subGameHotUpdateCtrls).length > 0) {
            console.log("other subgame is updating");
            return;
          }
          if (!SubGame.canEnterSubGame) {
            if (Object.keys(SubGame.subGameHotUpdateCtrls).length == 0) {
              //都下载完后 重置
              SubGame.canEnterSubGame = true;
              SubGame.downSubGame = "";
            }
            return;
          }
          console.log("enterSubGame:" + this.gameName);
          director.emit(SubGameMessage.EnterSubGame, this.gameName);
        };
        return SubGame;
      }(Component), _class3.subGameHotUpdateCtrls = {}, _class3.subGameHotUpdateStatusMap = {}, _class3.downSubGame = "", _class3.canEnterSubGame = true, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gametaghot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gametagfun", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gametagnew", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SubGameDef.ts", ['cc', './ModuleDef.ts'], function (exports) {
  var cclegacy, ModuleDef;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      exports('getSubGameConf', getSubGameConf);
      cclegacy._RF.push({}, "7abb4SlJA5Fc5EfSP1i7EH6", "SubGameDef", undefined);
      var IGameSceneInfo = exports('IGameSceneInfo', function IGameSceneInfo() {
        this.id = void 0;
        this.name = void 0;
        this.bundle = void 0;
        this.icon = void 0;
        this.show = void 0;
        //是否显示
        this.showTitle = void 0;
        //是否显示标题
        this.tag = void 0;
        // hot new  fun
        this.gametype = void 0;
        //fish sport slots
        this.language = void 0;
      });
      var SubGameType = exports('SubGameType', /*#__PURE__*/function (SubGameType) {
        SubGameType["LEISURE"] = "leisure";
        SubGameType["SKILL"] = "skill";
        SubGameType["SLOT"] = "slot";
        SubGameType["FISH"] = "fish";
        return SubGameType;
      }({}));
      var SubGameDef = exports('SubGameDef', function SubGameDef() {});
      SubGameDef.BILLIARDS = 'billiards';
      SubGameDef.GOMOKU = 'gomoku';
      SubGameDef.TANK = 'tank';
      SubGameDef.SLOTS1 = 'slots1';
      SubGameDef.SLOTS2 = 'slots2';
      SubGameDef.SLOTS3 = 'slots3';
      SubGameDef.SLOTS4 = 'slots4';
      SubGameDef.SLOTS5 = 'slots5';
      SubGameDef.SLOTS_SEA = 'seaking';
      SubGameDef.TYT = 'tyt';
      SubGameDef.SLOTS_WATER_MARGIN = 'slots_water_margin';
      SubGameDef.TEST = 'test';
      SubGameDef.FISH_MASTER = 'fish_master';
      SubGameDef.FISH_SHARK = 'fish_shark';
      SubGameDef.FISH_WHALE = 'fish_whale';
      SubGameDef.SLOTS_MOUSE = 'slots_mouse';
      //鼠
      SubGameDef.SLOTS_OX = 'slots_ox';
      //牛
      SubGameDef.SLOTS_TIGER = 'slots_tiger';
      //虎
      SubGameDef.SLOTS_RABBIT = 'slots_rabbit';
      //兔
      SubGameDef.SLOTS_DRAGON = 'slots_dragon';
      //龙
      SubGameDef.SLOTS_SONGKRAN = 'slots_songkran';
      //泼水节
      SubGameDef.SLOTS_DRAGONHATCH = 'slots_dragonhatch';
      //寻龙探宝
      SubGameDef.SLOTS_WILDBANDITO = 'slots_wildBandito';
      //亡灵大盗
      SubGameDef.SLOTS_ICEANDFIRE = 'slots_iceandfire';
      //冰火双娇
      SubGameDef.SLOTS_DOUBLE_HAPPY = 'slots_double_happy';
      //双喜临门
      SubGameDef.SLOTS_GANESHAGOLD = 'slots_ganeshagold';
      //象财神
      SubGameDef.SLOTS_MJWAYS = 'slots_mjways';
      //麻将
      SubGameDef.SLOTS_MJWAYS2 = 'slots_mjways2';
      //麻将
      SubGameDef.POKER_NIUNIU = 'poker_niuniu';
      //牛牛
      SubGameDef.POKER_PDK_YUENAN = 'poker_tienlen_yn';
      //越南跑得快
      SubGameDef.POKER_DEZHOU = 'poker_holdem';
      //德州扑克
      SubGameDef.BINGO_FROG = 'bingo_frog';
      //bingo 青蛙
      SubGameDef.SLOTS_KYLIN = 'slots_kylin';
      //slot 麒麟
      SubGameDef.SLOTS_UNICORN = 'slots_unicorn';
      //slot 独角兽
      SubGameDef.SLOTS_PANDA = 'slots_panda';
      //slot 熊猫
      SubGameDef.SLOTS_LOONG = 'slots_loong';
      var subGameConf = exports('subGameConf', [{
        id: SubGameDef.BILLIARDS,
        name: '台球',
        bundle: ModuleDef.BILLIARDS,
        icon: 'buttons/taiqiu',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.LEISURE,
        language: "billiards"
      }, {
        id: SubGameDef.TANK,
        name: '坦克',
        bundle: ModuleDef.TANK,
        icon: 'buttons/tank',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.LEISURE,
        language: "tank"
      }, {
        id: SubGameDef.TYT,
        name: '跳一跳',
        bundle: ModuleDef.TYT,
        icon: 'buttons/tyt',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.LEISURE,
        language: "tyt"
      }, {
        id: SubGameDef.GOMOKU,
        name: '五子棋',
        bundle: ModuleDef.GOMOKU,
        icon: 'buttons/wuziqi',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.LEISURE,
        language: "gomoku"
      }, {
        id: SubGameDef.SLOTS_MOUSE,
        name: 'Mouse Slots',
        bundle: ModuleDef.SLOTS_MOUSE,
        icon: 'buttons/mouse',
        show: true,
        showTitle: true,
        tag: "hot",
        gametype: SubGameType.SLOT,
        language: "slot_mouse"
      }, {
        id: SubGameDef.SLOTS_OX,
        name: 'Ox Slots',
        bundle: ModuleDef.SLOTS_OX,
        icon: 'buttons/ox',
        show: true,
        showTitle: true,
        tag: "hot",
        gametype: SubGameType.SLOT,
        language: "slot_ox"
      }, {
        id: SubGameDef.SLOTS_TIGER,
        name: 'Tiger Slots',
        bundle: ModuleDef.SLOTS_TIGER,
        icon: 'buttons/tiger',
        show: true,
        showTitle: true,
        tag: "fun",
        gametype: SubGameType.SLOT,
        language: "slot_tiger"
      }, {
        id: SubGameDef.SLOTS_RABBIT,
        name: 'Rabbit Slots',
        bundle: ModuleDef.SLOTS_RABBIT,
        icon: 'buttons/rabbit',
        show: true,
        showTitle: true,
        tag: "new",
        gametype: SubGameType.SLOT,
        language: "slot_rabbit"
      }, {
        id: SubGameDef.SLOTS_DRAGON,
        name: 'Dragon Slots',
        bundle: ModuleDef.SLOTS_DRAGON,
        icon: 'buttons/dragon',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_dragon"
      }, {
        id: SubGameDef.SLOTS_SONGKRAN,
        name: 'Songkran Slots',
        bundle: ModuleDef.SLOTS_SONGKRAN,
        icon: 'buttons/songkran',
        show: true,
        showTitle: true,
        tag: "fun",
        gametype: SubGameType.SLOT,
        language: "slot_songkran"
      }, {
        id: SubGameDef.SLOTS_DRAGONHATCH,
        //寻龙探宝
        name: '未调通',
        bundle: ModuleDef.SLOTS_DRAGONHATCH,
        icon: 'buttons/dragonhatch',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_dragonhatch"
      }, {
        id: SubGameDef.SLOTS_WILDBANDITO,
        //亡灵大盗  WildBandito Slots
        name: '未调通',
        bundle: ModuleDef.SLOTS_WILDBANDITO,
        icon: 'buttons/wldd',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_wildbandito"
      }, {
        id: SubGameDef.SLOTS_ICEANDFIRE,
        //冰火双娇
        name: '未调通',
        bundle: ModuleDef.SLOTS_ICEANDFIRE,
        icon: 'buttons/iceandfire',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_iceandfire"
      }, {
        id: SubGameDef.SLOTS_DOUBLE_HAPPY,
        //双喜临门
        name: '未调通',
        bundle: ModuleDef.SLOTS_DOUBLE_HAPPY,
        icon: 'buttons/slots_double_happy',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_doublehappy"
      }, {
        id: SubGameDef.SLOTS_GANESHAGOLD,
        //象财神
        name: '未调通',
        bundle: ModuleDef.SLOTS_GANESHAGOLD,
        icon: 'buttons/ganeshagold',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_ganeshagold"
      }, {
        id: SubGameDef.SLOTS_MJWAYS,
        //麻将
        name: '未调通',
        bundle: ModuleDef.SLOTS_MJWAYS,
        icon: 'buttons/mjways',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: "slot",
        language: "slot_mjways"
      }, {
        id: SubGameDef.SLOTS_MJWAYS2,
        //麻将2
        name: '未调通',
        bundle: ModuleDef.SLOTS_MJWAYS2,
        icon: 'buttons/mjways2',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: "slot",
        language: "slot_mjways2"
      }, {
        id: SubGameDef.SLOTS_KYLIN,
        //Slot麒麟
        name: 'slots麒麟',
        bundle: ModuleDef.SLOTS_KYLIN,
        icon: 'buttons/kylin',
        //最后图片名字改成 kylin
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_kylin"
      }, {
        id: SubGameDef.SLOTS_UNICORN,
        //Slot独角兽
        name: 'slots独角兽',
        bundle: ModuleDef.SLOTS_UNICORN,
        icon: 'buttons/unicorn',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_unicorn"
      }, {
        id: SubGameDef.SLOTS_PANDA,
        //Slot熊猫
        name: 'slots熊猫',
        bundle: ModuleDef.SLOTS_PANDA,
        icon: 'buttons/panda',
        //最后图片名字改成 kylin
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_panda"
      }, {
        id: SubGameDef.SLOTS_LOONG,
        //Slot小龙
        name: 'slots小龙',
        bundle: ModuleDef.SLOTS_LOONG,
        icon: 'buttons/loong',
        //最后图片名字改成
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SLOT,
        language: "slot_loong"
      },
      // {
      //     id: SubGameDef.SLOTS1,
      //     name: '水果老虎机',
      //     bundle: ModuleDef.SLOTS1,
      //     icon: 'buttons/slots1',
      //     show: false,
      //     showTitle:true,
      // },
      // {
      //     id: SubGameDef.SLOTS2,
      //     name: '动物老虎机',
      //     bundle: ModuleDef.SLOTS2,
      //     icon: 'buttons/slots2',
      //     show: false,
      //     showTitle:true,
      // },
      // {
      //     id: SubGameDef.SLOTS3,
      //     name: '天空老虎机',
      //     bundle: ModuleDef.SLOTS3,
      //     icon: 'buttons/slots3',
      //     show: false,
      //     showTitle:true,
      // },
      // {
      //     id: SubGameDef.SLOTS5,
      //     name: 'Car Slots',
      //     bundle: ModuleDef.SLOTS5,
      //     icon: 'buttons/fish',
      //     show: false,
      //     showTitle: true,
      // },
      // {
      //     id: SubGameDef.SLOTS_SEA,
      //     name: 'Sea Slots',
      //     bundle: ModuleDef.SLOTS_SEA,
      //     icon: 'buttons/slots_sea',
      //     show: true,
      //     showTitle: false,
      // },
      // {
      //     id: SubGameDef.SLOTS4,
      //     name: 'Tiger Blessings',
      //     bundle: ModuleDef.SLOTS4,
      //     icon: 'buttons/slots4',
      //     show: true,
      //     showTitle: true,
      // },
      // {
      //     id: SubGameDef.SLOTS_WATER_MARGIN,
      //     name: '水浒传',
      //     bundle: ModuleDef.SLOTS_WATER_MARGIN,
      //     icon: 'buttons/slots_water_margin',
      //     show: true,
      //     showTitle: true,
      // },
      {
        id: SubGameDef.TEST,
        name: 'test',
        bundle: ModuleDef.TEST,
        icon: 'buttons/fish',
        show: false,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.FISH,
        language: "test"
      }, {
        id: SubGameDef.FISH_MASTER,
        name: '捕鱼',
        bundle: ModuleDef.FISH,
        icon: 'buttons/fish',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.FISH,
        language: "fishmaster"
      }, {
        id: SubGameDef.FISH_SHARK,
        name: '捕鱼_鲨鱼',
        bundle: ModuleDef.FISH_SHARK,
        icon: 'buttons/shark',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.FISH,
        language: "fishshark"
      }, {
        id: SubGameDef.FISH_WHALE,
        name: '捕鱼_鲸鱼',
        bundle: ModuleDef.FISH_WHALE,
        icon: 'buttons/jinyu',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.FISH,
        language: "fishwhale"
      }, {
        id: SubGameDef.POKER_NIUNIU,
        //牛牛
        name: '牛牛(优化中)',
        bundle: ModuleDef.POKER_NIUNIU,
        icon: 'buttons/niuniu',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SKILL,
        language: "niuniu"
      }, {
        id: SubGameDef.POKER_PDK_YUENAN,
        name: '越南斗地主',
        bundle: ModuleDef.POKER_PDK_YUENAN,
        icon: 'buttons/ynddz',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SKILL,
        language: "yuenan"
      },
      // {
      //     id: SubGameDef.BINGO_FROG, //Bingo青蛙
      //     name: '(开发中)',
      //     bundle: ModuleDef.BINGO_FROG,
      //     icon: 'buttons/bingo',
      //     show: true,
      //     showTitle: true,
      //     tag: "null",
      //     gametype:"slot",
      // },
      {
        id: SubGameDef.POKER_DEZHOU,
        //德州
        name: '德州(优化中)',
        bundle: ModuleDef.POKER_DEZHOU,
        icon: 'buttons/dzpk',
        show: true,
        showTitle: true,
        tag: "null",
        gametype: SubGameType.SKILL,
        language: "dezhou"
      }]);
      function getSubGameConf(subgameId) {
        for (var i = 0; i < subGameConf.length; ++i) {
          var conf = subGameConf[i];
          if (conf.id == subgameId) {
            return conf;
          }
        }
        return null;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SubGameMessage.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a8cb7ZfuXpM3Za/IQL7MuPZ", "SubGameMessage", undefined);
      var SubGameMessage = exports('SubGameMessage', function SubGameMessage() {});
      SubGameMessage.EnterSubGame = 'EnterSubGame';
      //开始进入子游戏
      SubGameMessage.EnterSubGameRoomSuccess = 'EnterSubGameRoomSuccess';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SubGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneUtils.ts', './RoomMgr.ts', './NetGameServer.ts', './SubGameDef.ts', './LobbyMgr.ts', './LoadingScene.ts', './SubGameMessage.ts', './SceneDef.ts', './LanguageData.ts', './Language.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, SceneUtil, RoomMgr, gameNet, lobbyNet, getSubGameConf, LobbyMgr, LoadingScene, SubGameMessage, SceneDef, LanguageData, LanguageManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      SceneUtil = module.SceneUtil;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      gameNet = module.gameNet;
      lobbyNet = module.lobbyNet;
    }, function (module) {
      getSubGameConf = module.getSubGameConf;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      LoadingScene = module.default;
    }, function (module) {
      SubGameMessage = module.SubGameMessage;
    }, function (module) {
      SceneDef = module.SceneDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      LanguageManager = module.LanguageManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "69327JqiC1NpJbIIsElh2Rw", "SubGameMgr", undefined);
      var SubGameMgr = exports('SubGameMgr', /*#__PURE__*/function () {
        function SubGameMgr() {
          this._gameMgrMap = {};
        }
        var _proto = SubGameMgr.prototype;
        _proto.registerGameMgr = function registerGameMgr(gameMgr) {
          this._gameMgrMap[gameMgr.gameType] = gameMgr;
        };
        /**
         * 进入子游戏
         */
        _proto.enterSubGame = /*#__PURE__*/
        function () {
          var _enterSubGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(gameType) {
            var conf;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  conf = getSubGameConf(gameType);
                  if (conf) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  // 提示“正在加载”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message5"));
                  _context.next = 6;
                  return tgx.SceneUtil.loadBundleSync(conf.bundle);
                case 6:
                  _context.next = 8;
                  return this.loadBunleLanguage(conf.bundle);
                case 8:
                  SubGameMgr.gameMgr = this._gameMgrMap[gameType];
                  SubGameMgr.gameMgr.init();
                  if (!SubGameMgr.gameMgr.loadingScene) {
                    _context.next = 18;
                    break;
                  }
                  _context.next = 13;
                  return this.subGameLoad();
                case 13:
                  _context.next = 15;
                  return this.subGameLoadCompelte();
                case 15:
                  tgx.UIWaiting.hide();
                  _context.next = 26;
                  break;
                case 18:
                  if (!SubGameMgr.gameMgr.entryScene) {
                    _context.next = 24;
                    break;
                  }
                  _context.next = 21;
                  return SceneUtil.loadScene(SubGameMgr.gameMgr.entryScene);
                case 21:
                  tgx.UIWaiting.hide();
                  _context.next = 26;
                  break;
                case 24:
                  //如果没有直接进入子游戏的游戏场景
                  SubGameMgr.gameMgr.enterGame();
                  tgx.UIWaiting.hide();
                case 26:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function enterSubGame(_x) {
            return _enterSubGame.apply(this, arguments);
          }
          return enterSubGame;
        }() /**加载子场景 */;
        _proto.subGameLoad = /*#__PURE__*/
        function () {
          var _subGameLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var currentScene, nodesWithScript, loadingSceneScript;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!SubGameMgr.gameMgr.loadingScene) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 3;
                  return SceneUtil.loadScene(SubGameMgr.gameMgr.loadingScene);
                case 3:
                  currentScene = director.getScene();
                  if (!currentScene) {
                    _context2.next = 10;
                    break;
                  }
                  nodesWithScript = currentScene.getComponentsInChildren(LoadingScene);
                  if (!(nodesWithScript.length > 0)) {
                    _context2.next = 10;
                    break;
                  }
                  loadingSceneScript = nodesWithScript[0];
                  _context2.next = 10;
                  return loadingSceneScript.preLoadRes();
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function subGameLoad() {
            return _subGameLoad.apply(this, arguments);
          }
          return subGameLoad;
        }() /**子游戏加载完成 */;
        _proto.subGameLoadCompelte = /*#__PURE__*/
        function () {
          var _subGameLoadCompelte = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!SubGameMgr.gameMgr.entryScene) {
                    _context3.next = 6;
                    break;
                  }
                  _context3.next = 3;
                  return SceneUtil.loadScene(SubGameMgr.gameMgr.entryScene);
                case 3:
                  tgx.UIWaiting.hide();
                  _context3.next = 8;
                  break;
                case 6:
                  //如果没有直接进入子游戏的游戏场景
                  SubGameMgr.gameMgr.enterGame();
                  tgx.UIWaiting.hide();
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function subGameLoadCompelte() {
            return _subGameLoadCompelte.apply(this, arguments);
          }
          return subGameLoadCompelte;
        }()
        /**
         * 创建房间
         * @param gameType 游戏类型
         * @param enterSubGame  是否进入子游戏
         * @param subType 子类型 比如房间id等（初级房 中级房 高级房）---
         * @returns 
         */;

        _proto.CreateRoom = /*#__PURE__*/
        function () {
          var _CreateRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(gameType, enterSubGame, subType) {
            var result, ret, params, _ret;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (enterSubGame === void 0) {
                    enterSubGame = true;
                  }
                  if (subType === void 0) {
                    subType = null;
                  }
                  tgx.UIWaiting.show();
                  result = false;
                  _context4.next = 6;
                  return LobbyMgr.inst.rpc_CreateRoom(gameType, "placeholder", "", subType);
                case 6:
                  ret = _context4.sent;
                  result = ret.isSucc;
                  if (!result) {
                    _context4.next = 20;
                    break;
                  }
                  if (!ret.isSucc) {
                    _context4.next = 18;
                    break;
                  }
                  params = ret.res.enterRoomParams;
                  if (!enterSubGame) {
                    _context4.next = 16;
                    break;
                  }
                  _context4.next = 14;
                  return SubGameMgr.inst.enterSubGameRoom(params, true);
                case 14:
                  _ret = _context4.sent;
                  result = _ret.isSucc;
                case 16:
                  tgx.UIWaiting.hide();
                  return _context4.abrupt("return", {
                    isSucc: result,
                    roomParams: params
                  });
                case 18:
                  _context4.next = 22;
                  break;
                case 20:
                  // 提示“创建失败”
                  console.error("create room failer!");
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message13")).onClick(function () {
                    //退到平台
                    tgx.SceneUtil.loadScene(SceneDef.LOBBY);
                  });
                case 22:
                  tgx.UIWaiting.hide();
                  return _context4.abrupt("return", {
                    isSucc: false
                  });
                case 24:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function CreateRoom(_x2, _x3, _x4) {
            return _CreateRoom.apply(this, arguments);
          }
          return CreateRoom;
        }() /**在游戏中 再次匹配 */;
        _proto.MatchGameAgain = /*#__PURE__*/
        function () {
          var _MatchGameAgain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(gameType, subType) {
            var leaveRoomRet, autoRet, matchRoomRet;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (subType === void 0) {
                    subType = null;
                  }
                  tgx.UIWaiting.show();
                  _context5.next = 4;
                  return RoomMgr.inst.exitRoomToPlayAgain();
                case 4:
                  leaveRoomRet = _context5.sent;
                  if (!leaveRoomRet.isSucc) {
                    _context5.next = 31;
                    break;
                  }
                  gameNet.disconnect(3000, 'normal');
                  _context5.next = 9;
                  return LobbyMgr.inst.doAuth(null);
                case 9:
                  autoRet = _context5.sent;
                  if (!autoRet.isSucc) {
                    _context5.next = 26;
                    break;
                  }
                  _context5.next = 13;
                  return this.MatchRoom(gameType, true, subType);
                case 13:
                  matchRoomRet = _context5.sent;
                  if (!matchRoomRet.isSucc) {
                    _context5.next = 20;
                    break;
                  }
                  tgx.UIWaiting.hide();
                  director.emit("");
                  return _context5.abrupt("return", {
                    isSucc: true
                  });
                case 20:
                  // 提示“创建失败”
                  console.error("create room failer!");
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message13"));
                  tgx.UIWaiting.hide();
                  return _context5.abrupt("return", {
                    isSucc: false
                  });
                case 24:
                  _context5.next = 29;
                  break;
                case 26:
                  tgx.UIAlert.show(autoRet.err.message);
                  tgx.UIWaiting.hide();
                  return _context5.abrupt("return", {
                    isSucc: false
                  });
                case 29:
                  _context5.next = 33;
                  break;
                case 31:
                  tgx.UIWaiting.hide();
                  return _context5.abrupt("return", {
                    isSucc: false
                  });
                case 33:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function MatchGameAgain(_x5, _x6) {
            return _MatchGameAgain.apply(this, arguments);
          }
          return MatchGameAgain;
        }()
        /**
         * 匹配
         * @param gameType 游戏类型
         * @param enterSubGame  是否进入子游戏
         * @returns 
         */;

        _proto.MatchRoom = /*#__PURE__*/
        function () {
          var _MatchRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(gameType, enterSubGame, subType) {
            var result, ret, params, enterret, tips;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (enterSubGame === void 0) {
                    enterSubGame = true;
                  }
                  if (subType === void 0) {
                    subType = null;
                  }
                  tgx.UIWaiting.show();
                  result = false;
                  _context6.next = 6;
                  return LobbyMgr.inst.rpc_MatchRoom(gameType, subType);
                case 6:
                  ret = _context6.sent;
                  result = ret.isSucc;
                  if (!result) {
                    _context6.next = 20;
                    break;
                  }
                  if (!ret.isSucc) {
                    _context6.next = 18;
                    break;
                  }
                  params = ret.res;
                  if (!enterSubGame) {
                    _context6.next = 16;
                    break;
                  }
                  _context6.next = 14;
                  return SubGameMgr.inst.enterSubGameRoom(params, true);
                case 14:
                  enterret = _context6.sent;
                  result = enterret.isSucc;
                case 16:
                  tgx.UIWaiting.hide();
                  return _context6.abrupt("return", {
                    isSucc: result,
                    roomParams: params
                  });
                case 18:
                  _context6.next = 24;
                  break;
                case 20:
                  tips = "";
                  if (ret.err && ret.err.code && ret.err.code == 10004) {
                    //玩家还在游戏中， 无法匹配新游戏
                    tips = LanguageData.getLangByID("tid_basic_alert_message131");
                  } else {
                    tips = LanguageData.getLangByID("tid_basic_alert_message132");
                  }
                  console.error("match room failer!");
                  // 提示“创建失败”
                  tgx.UIAlert.show(LanguageData.getLangByID(tips)).onClick(function () {
                    //退到平台
                    RoomMgr.inst.exitRoomToLobby();
                  });
                case 24:
                  tgx.UIWaiting.hide();
                  return _context6.abrupt("return", {
                    isSucc: false
                  });
                case 26:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function MatchRoom(_x7, _x8, _x9) {
            return _MatchRoom.apply(this, arguments);
          }
          return MatchRoom;
        }() // 登录跳转进入子游戏
        ;

        _proto.loginJumpEnterSubGameRoom = /*#__PURE__*/
        function () {
          var _loginJumpEnterSubGameRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(params) {
            var conf, loadBundleResult;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  conf = getSubGameConf(params.gameType);
                  if (conf) {
                    _context7.next = 3;
                    break;
                  }
                  return _context7.abrupt("return", {
                    isSucc: false
                  });
                case 3:
                  // 提示“正在加载”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message5"));
                  _context7.next = 6;
                  return tgx.SceneUtil.loadBundleSync(conf.bundle);
                case 6:
                  loadBundleResult = _context7.sent;
                  if (loadBundleResult) {
                    _context7.next = 9;
                    break;
                  }
                  return _context7.abrupt("return", {
                    isSucc: false
                  });
                case 9:
                  _context7.next = 11;
                  return this.loadBunleLanguage(conf.bundle);
                case 11:
                  SubGameMgr.gameMgr = this._gameMgrMap[params.gameType];
                  SubGameMgr.gameMgr.init();
                  if (!SubGameMgr.gameMgr.loadingScene) {
                    _context7.next = 16;
                    break;
                  }
                  _context7.next = 16;
                  return this.subGameLoad();
                case 16:
                  _context7.next = 18;
                  return this.enterSubGameRoom(params, true);
                case 18:
                  return _context7.abrupt("return", _context7.sent);
                case 19:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function loginJumpEnterSubGameRoom(_x10) {
            return _loginJumpEnterSubGameRoom.apply(this, arguments);
          }
          return loginJumpEnterSubGameRoom;
        }()
        /**
         * 进入真正子游戏（不是子游戏大厅）
         * @param params  服务器参数
         * @param isReconnect 是否是登录跳转进来的
         * @param silence 是否隐藏加载UI
         * @returns
         */;

        _proto.enterSubGameRoom = /*#__PURE__*/
        function () {
          var _enterSubGameRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(params, silence) {
            var conf, ret, currentScene, loadRet;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (silence === void 0) {
                    silence = false;
                  }
                  if (!silence) {
                    // 提示“正在加载”
                    tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message5"));
                  }
                  conf = getSubGameConf(params.gameType);
                  if (conf) {
                    _context8.next = 6;
                    break;
                  }
                  if (!silence) {
                    tgx.UIWaiting.hide();
                  }
                  return _context8.abrupt("return", {
                    isSucc: false,
                    err: {
                      code: '1',
                      message: 'gameType is not found'
                    }
                  });
                case 6:
                  RoomMgr.inst.reset();
                  SubGameMgr.gameMgr.reset();
                  SubGameMgr.gameMgr.subType = params.subType;
                  _context8.next = 11;
                  return gameNet.connectToRoomServer(params);
                case 11:
                  _context8.next = 13;
                  return RoomMgr.inst.enterRoom(params);
                case 13:
                  ret = _context8.sent;
                  if (!ret.isSucc) {
                    _context8.next = 28;
                    break;
                  }
                  director.emit(SubGameMessage.EnterSubGameRoomSuccess);
                  currentScene = director.getScene();
                  if (!(currentScene && currentScene.name == SubGameMgr.gameMgr.gameScene.name)) {
                    _context8.next = 20;
                    break;
                  }
                  _context8.next = 24;
                  break;
                case 20:
                  _context8.next = 22;
                  return tgx.SceneUtil.loadScene(SubGameMgr.gameMgr.gameScene);
                case 22:
                  loadRet = _context8.sent;
                  if (loadRet && lobbyNet.type != 'http') {
                    lobbyNet.disconnect(3000, 'normal');
                  }
                case 24:
                  if (!silence) {
                    tgx.UIWaiting.hide();
                  }
                  return _context8.abrupt("return", {
                    isSucc: true
                  });
                case 28:
                  if (ret.err.message == 'INVALID_CALL' || ret.err.message == 'not_login') {
                    RoomMgr.inst.exitRoom();
                  }
                  if (!silence) {
                    tgx.UIWaiting.hide();
                  }
                  return _context8.abrupt("return", {
                    isSucc: false,
                    err: {
                      code: ret.err.code ? ret.err.code.toString() : "1",
                      message: ret.err.message
                    }
                  });
                case 31:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          function enterSubGameRoom(_x11, _x12) {
            return _enterSubGameRoom.apply(this, arguments);
          }
          return enterSubGameRoom;
        }() //返回中央大厅（不是子游戏大厅）
        ;

        _proto.exitSubGame = function exitSubGame() {
          if (SubGameMgr.gameMgr) SubGameMgr.gameMgr.uinit();
          if (SubGameMgr.curGameType) {
            var conf = getSubGameConf(SubGameMgr.curGameType);
            if (!conf) {
              return;
            }
            tgx.SceneUtil.unloadBundle(conf.bundle);
            this.delBundleLanguage(conf.bundle);
            SubGameMgr.gameMgr = null;
          }
        };
        _proto.loadBunleLanguage = /*#__PURE__*/function () {
          var _loadBunleLanguage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(bundleName) {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  return _context9.abrupt("return", new Promise(function (resolve, reject) {
                    LanguageManager.ins.addBundle(bundleName, function () {
                      return resolve(true);
                    });
                  }));
                case 1:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
          function loadBunleLanguage(_x13) {
            return _loadBunleLanguage.apply(this, arguments);
          }
          return loadBunleLanguage;
        }();
        _proto.delBundleLanguage = function delBundleLanguage(bundleName) {
          LanguageManager.ins.delBundle(bundleName);
        };
        _createClass(SubGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new SubGameMgr();
            }
            return this._inst;
          }
        }, {
          key: "curGameType",
          get: function get() {
            var _this$gameMgr;
            return (_this$gameMgr = this.gameMgr) == null ? void 0 : _this$gameMgr.gameType;
          }

          /**
           * @en gameMgr will be assigned in [sub]GameMgr
           * @zh gameMgr 会在具体的子游戏中被赋值
          */
        }]);

        return SubGameMgr;
      }());
      SubGameMgr._inst = void 0;
      SubGameMgr.gameMgr = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TankTypeDef.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c47caAL2w1I05mLMLBoMuP5", "TankTypeDef", undefined);
      /**
       * @en player data of tank game
       * @zh 坦克游戏玩家数据
      */
      /**
       * @en game data of tank
       * @zh 坦克游戏数据
      */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_Alert_Impl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameUILayers, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "279a6kba+dDnLuXBr6OXobk", "UI_Alert_Impl", undefined);
      var UIAlert_Impl = exports('UIAlert_Impl', (_dec = tgx_class(ModuleDef.BASIC, tgx.UIAlert), _dec(_class = /*#__PURE__*/function (_tgx$UIAlert) {
        _inheritsLoose(UIAlert_Impl, _tgx$UIAlert);
        function UIAlert_Impl() {
          return _tgx$UIAlert.call(this, 'ui_alert/UI_Alert', GameUILayers.ALERT, tgx.Layout_UIAlert, false) || this;
        }
        return UIAlert_Impl;
      }(tgx.UIAlert)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_SearchingRival.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './LanguageData.ts', './LobbyMgr.ts', './SubGameMgr.ts', './Layout_SearchingRival.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GameUILayers, ModuleDef, LanguageData, LobbyMgr, SubGameMgr, Layout_SearchingRival;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      Layout_SearchingRival = module.Layout_SearchingRival;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f1e9cFqm/1NEIolbFhnczql", "UI_SearchingRival", undefined);
      var UI_SearchingRival = exports('UI_SearchingRival', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UI_SearchingRival, _tgx$UIController);
        function UI_SearchingRival() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_searching_rival/ui_searching_rival', GameUILayers.POPUP, Layout_SearchingRival) || this;
          _this._startTime = Date.now();
          _this._state = '';
          return _this;
        }
        var _proto = UI_SearchingRival.prototype;
        _proto.onCreated = function onCreated() {
          var _this2 = this;
          var layout = this._layout;
          this.onButtonEvent(layout.btnCancel, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this2._state == 'matching')) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 3;
                  return LobbyMgr.inst.rpc_QuickPlayCancel();
                case 3:
                  ret = _context.sent;
                  if (ret.isSucc) {
                    _this2._state = 'cancelled';
                    _this2.close();
                  }
                  _context.next = 9;
                  break;
                case 7:
                  _this2._state = 'cancelled';
                  _this2.close();
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.onUpdate = function onUpdate(dt) {
          var layout = this._layout;
          var elapsedTime = Math.floor((Date.now() - this._startTime) / 1000);
          if (elapsedTime < 60) {
            layout.lblTime.string = elapsedTime + 's';
          } else {
            var s = elapsedTime % 60;
            var m = Math.floor(elapsedTime / 60);
            layout.lblTime.string = m + 'm' + s + 's';
          }
        };
        _proto.startMatch = /*#__PURE__*/function () {
          var _startMatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(type) {
            var ret, params;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this._state) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this._state = 'matching';
                  _context2.next = 5;
                  return LobbyMgr.inst.rpc_QuickPlay(type);
                case 5:
                  ret = _context2.sent;
                  this.close();
                  if (ret.isSucc) {
                    _context2.next = 11;
                    break;
                  }
                  // 提示“未找到合适的对手”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message4"));
                  _context2.next = 15;
                  break;
                case 11:
                  params = ret.res;
                  _context2.next = 14;
                  return SubGameMgr.inst.enterSubGameRoom(params);
                case 14:
                  return _context2.abrupt("return", _context2.sent);
                case 15:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function startMatch(_x) {
            return _startMatch.apply(this, arguments);
          }
          return startMatch;
        }();
        return UI_SearchingRival;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_Shop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './Layout_UIShop.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, Button, Label, Color, instantiate, GameUILayers, ModuleDef, Layout_UIShop;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
      Label = module.Label;
      Color = module.Color;
      instantiate = module.instantiate;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Layout_UIShop = module.Layout_UIShop;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "6ab11pE+yVL1LZqucizv9VN", "UI_Shop", undefined);
      var UIShop = exports('UIShop', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = (_class2 = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIShop, _tgx$UIController);
        function UIShop() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_shop/ui_shop', GameUILayers.POPUP, Layout_UIShop) || this;
          _this.shopData = void 0;
          _this.defaultTab = 'shop';
          UIShop._instance = _assertThisInitialized(_this); // 初始化时保存实例
          return _this;
        }
        UIShop.getInstance = function getInstance() {
          return this._instance;
        };
        var _proto = UIShop.prototype;
        _proto.onCreated = function onCreated() {
          var _this2 = this;
          //创建时的回调函数
          var layout = this._layout;
          this.onButtonEvent(layout.btnClose, function () {
            _this2.close(); //绑定关闭按钮
          });

          for (var i = 0; i < layout.leftButtons.length; i++) {
            //初始化按钮
            layout.leftButtons[i].getComponent(Button).interactable = true;
            layout.leftButtons[i].setScale(1, 1);
            layout.leftButtons[i].getChildByName("Label").getComponent(Label).color = new Color(118, 118, 118);
          }

          // 默认进入推荐页或充值页
          if (this.defaultTab === 'chongzhi') {
            this.turnChongzhi();
          } else {
            layout.leftButtons[0].getComponent(Button).interactable = false;
            layout.leftButtons[0].setScale(1.2, 1.2);
            layout.leftButtons[0].getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255);
            layout.bginfo.addChild(instantiate(layout.recommend));
          }
        };
        _proto.turnChongzhi = function turnChongzhi() {
          var layout = this._layout;
          layout.leftButtons[1].getComponent(Button).interactable = false;
          layout.leftButtons[1].setScale(1.2, 1.2);
          layout.leftButtons[1].getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255);
          layout.leftButtons[0].getComponent(Button).interactable = true;
          layout.leftButtons[0].setScale(1, 1);
          layout.leftButtons[0].getChildByName("Label").getComponent(Label).color = new Color(118, 118, 118);
          for (var i = 0; i < layout.bginfo.children.length; i++) {
            layout.bginfo.children[i].destroy();
          }
          layout.bginfo.addChild(instantiate(layout.chongzhi));
        };
        return UIShop;
      }(tgx.UIController), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_Waiting_Impl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameUILayers, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0f225BQCHtD2Z1AvkxeFlyk", "UI_Waiting_Impl", undefined);
      var UIWaiting_Impl = exports('UIWaiting_Impl', (_dec = tgx_class(ModuleDef.BASIC, tgx.UIWaiting), _dec(_class = /*#__PURE__*/function (_tgx$UIWaiting) {
        _inheritsLoose(UIWaiting_Impl, _tgx$UIWaiting);
        function UIWaiting_Impl() {
          return _tgx$UIWaiting.call(this, 'ui_waiting/UI_Waiting', GameUILayers.LOADING, tgx.Layout_UIWaiting, false) || this;
        }
        return UIWaiting_Impl;
      }(tgx.UIWaiting)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIAboutQLZ.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UIAboutQLZ.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameUILayers, Layout_UIAboutQLZ, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UIAboutQLZ = module.Layout_UIAboutQLZ;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "29cearboQVKL4McWENaH9CI", "UIAboutQLZ", undefined);
      var UIAboutQLZ = exports('UIAboutQLZ', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIAboutQLZ, _tgx$UIController);
        function UIAboutQLZ() {
          return _tgx$UIController.call(this, 'ui_about_qlz/ui_about_qlz', GameUILayers.POPUP, Layout_UIAboutQLZ) || this;
        }
        var _proto = UIAboutQLZ.prototype;
        _proto.onCreated = function onCreated() {
          var _this = this;
          var layout = this._layout;
          this.onButtonEvent(layout.btnClose, function () {
            _this.close();
          });
        };
        return UIAboutQLZ;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIAnnouncement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UIAnnouncement.ts', './ModuleDef.ts', './LobbyMgr.ts', './SubGameMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, UITransform, isValid, GameUILayers, Layout_UIAnnouncement, ModuleDef, LobbyMgr, SubGameMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      isValid = module.isValid;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UIAnnouncement = module.Layout_UIAnnouncement;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7d946fmKmlFi4/mT1H9epKC", "UIAnnouncement", undefined);
      var UIAnnouncement = exports('UIAnnouncement', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIAnnouncement, _tgx$UIController);
        function UIAnnouncement() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_announcement/ui_announcement', GameUILayers.HUD, Layout_UIAnnouncement) || this;
          _this._maskWidth = 0;
          _this._contentWidth = 0;
          _this._fadeOutStart = 0.1;
          _this._fadeOutRange = 0.05;
          return _this;
        }
        var _proto = UIAnnouncement.prototype;
        _proto.onCreated = /*#__PURE__*/function () {
          var _onCreated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ret, pos;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return LobbyMgr.inst.rpc_GetAnnouncement(SubGameMgr.curGameType || 'lobby');
                case 2:
                  ret = _context.sent;
                  if (isValid(this.node)) {
                    _context.next = 5;
                    break;
                  }
                  return _context.abrupt("return");
                case 5:
                  pos = this.layout.maskNode.position;
                  this._maskWidth = this.layout.maskNode.getComponent(UITransform).width;
                  this.layout.lblContent.node.setPosition(this._maskWidth / 2, pos.y, pos.z);
                  if (ret.isSucc) {
                    this.layout.lblContent.string = ret.res.content;
                  } else {
                    this.layout.lblContent.string = '获取公告失败，请联系管理员';
                  }
                  this.layout.lblContent.updateRenderData();
                  this._contentWidth = this.layout.lblContent.getComponent(UITransform).width;
                  this.setMaterialParams();
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onCreated() {
            return _onCreated.apply(this, arguments);
          }
          return onCreated;
        }();
        _proto.setMaterialParams = function setMaterialParams() {
          this.layout.matAnnouncement.setProperty('fadeOutStart', this._fadeOutStart);
          this.layout.matAnnouncement.setProperty('fadeOutEnd', this._fadeOutStart + this._fadeOutRange);
        };
        _proto.setPosition = function setPosition(x, y, fadeOutStart, fadeOutRange) {
          this.node.setPosition(x, y, 0);
          this._fadeOutStart = fadeOutStart || this._fadeOutStart;
          this._fadeOutRange = fadeOutRange || this._fadeOutRange;
          this.setMaterialParams();
        };
        _proto.onUpdate = function onUpdate(dt) {
          if (this.layout) {
            var pos = this.layout.lblContent.node.position;
            if (this._contentWidth && pos.x + this._contentWidth < -this._maskWidth / 2) {
              this.layout.lblContent.node.setPosition(this._maskWidth / 2, pos.y, pos.z);
            } else {
              this.layout.lblContent.node.setPosition(pos.x - dt * 200, pos.y, pos.z);
            }
          }
        };
        _createClass(UIAnnouncement, [{
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }]);
        return UIAnnouncement;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIChat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UIChat.ts', './RoomMgr.ts', './SubGameDef.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, instantiate, director, Widget, RichText, GameUILayers, Layout_UIChat, RoomEvent, RoomMgr, getSubGameConf, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      director = module.director;
      Widget = module.Widget;
      RichText = module.RichText;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UIChat = module.Layout_UIChat;
    }, function (module) {
      RoomEvent = module.RoomEvent;
      RoomMgr = module.RoomMgr;
    }, function (module) {
      getSubGameConf = module.getSubGameConf;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "b6c26caO99A0qo2qSz722zT", "UIChat", undefined);
      var UIChat = exports('UIChat', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = (_class2 = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIChat, _tgx$UIController);
        var _proto = UIChat.prototype;
        _proto.getFromPool = function getFromPool() {
          var layout = this._layout;
          var item = UIChat._chatItemPool.shift();
          if (!item) {
            item = instantiate(layout.prefabChatMsgItem);
          }
          layout.chatMsgs.addChild(item);
          return item;
        };
        _proto.putToPool = function putToPool(item) {
          item.removeFromParent();
          UIChat._chatItemPool.push(item);
        };
        function UIChat() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_chat/ui_chat', GameUILayers.HUD, Layout_UIChat) || this;
          _this._isFolded = true;
          _this._chatNet = void 0;
          return _this;
        }
        _proto.onCreated = function onCreated(net) {
          var _this2 = this;
          this._chatNet = net;
          this._chatNet.listenMsg('chat/Chat', this.addChatMsg, this);
          director.on(RoomEvent.NEW_USER_COMES, this.onUserComes, this);
          director.on(RoomEvent.USER_LEAVES, this.onUserLeaves, this);
          var layout = this._layout;
          layout.cbInputChatReturn = this.onInputChatReturn.bind(this);
          layout.cbBtnSendChat = this.onBtnSendChat.bind(this);
          layout.btnExpand.node.active = true;
          layout.btnFold.node.active = false;
          var w = layout.chatMsgs.getComponent(Widget);
          w.bottom = 15;
          w.left = 10;
          layout.chatBar.active = false;
          this._isFolded = true;
          this.onButtonEvent(layout.btnExpand, function () {
            _this2._isFolded = false;
            layout.btnExpand.node.active = false;
            layout.btnFold.node.active = true;
            layout.chatBar.active = true;
            var w = layout.chatMsgs.getComponent(Widget);
            w.bottom = 110;
            w.left = 10;
          });
          this.onButtonEvent(layout.btnFold, function () {
            _this2._isFolded = true;
            layout.btnExpand.node.active = true;
            layout.btnFold.node.active = false;
            layout.chatBar.active = false;
            var w = layout.chatMsgs.getComponent(Widget);
            w.bottom = 15;
            w.left = 10;
          });
        };
        _proto.onUserComes = /*#__PURE__*/function () {
          var _onUserComes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(v) {
            var info;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  info = RoomMgr.inst.getUser(v.uid);
                  this._pushChatMsg("<outline width=1 color=#0><color=#33A8E9>" + (info == null ? void 0 : info.name) + "(" + (info == null ? void 0 : info.uid) + ")</color> <color=#999999>\u52A0\u5165\u4E86\u623F\u95F4</color></o>");
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onUserComes(_x) {
            return _onUserComes.apply(this, arguments);
          }
          return onUserComes;
        }();
        _proto.onUserLeaves = /*#__PURE__*/function () {
          var _onUserLeaves = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(v) {
            var info;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  info = RoomMgr.inst.getUser(v.uid);
                  this._pushChatMsg("<outline width=1 color=#0><color=#33A8E9>" + (info == null ? void 0 : info.name) + "(" + (info == null ? void 0 : info.uid) + ")</color> <color=#999999>\u79BB\u5F00\u4E86\u623F\u95F4</color></o>");
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onUserLeaves(_x2) {
            return _onUserLeaves.apply(this, arguments);
          }
          return onUserLeaves;
        }();
        _proto.addChatMsg = function addChatMsg(msg) {
          var str = '';
          if (msg.channel == 'global') {
            str = '[全部]';
          } else if (msg.channel) {
            str = "[" + (getSubGameConf(msg.channel).name || '') + "]";
          }
          this._pushChatMsg("<outline width=1 color=#0><color=#33A8E9>" + str + msg.user.name + "(" + msg.user.uid + ")</color> <color=#FFFFFF>" + msg.content + "</color></o>");
        };
        _proto.onDispose = function onDispose() {
          this._chatNet.unlistenMsg('chat/Chat', this.addChatMsg, this);
          director.off(RoomEvent.NEW_USER_COMES, this.onUserComes, this);
          director.off(RoomEvent.USER_LEAVES, this.onUserLeaves, this);
        };
        _proto.onBtnSendChat = /*#__PURE__*/function () {
          var _onBtnSendChat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var layout, content, channel, index, headStr, ret;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  layout = this._layout;
                  if (layout.inputChat.string) {
                    _context3.next = 3;
                    break;
                  }
                  return _context3.abrupt("return");
                case 3:
                  content = layout.inputChat.string;
                  channel = undefined;
                  index = content.indexOf(' ');
                  if (index != -1) {
                    headStr = content.substring(0, index);
                    if (headStr == '@全部' || headStr == '@g') {
                      channel = 'global';
                    }
                    content = content.substring(index + 1);
                  }
                  if (!channel && director.getScene().name.indexOf('lobby') == 0) {
                    channel = 'lobby';
                  }
                  layout.inputChat.string = '';
                  _context3.next = 11;
                  return this._chatNet.callApi('chat/SendChat', {
                    channel: channel,
                    content: content
                  });
                case 11:
                  ret = _context3.sent;
                  layout.inputChat.string = '';
                  if (ret.isSucc) {
                    _context3.next = 17;
                    break;
                  }
                  this._pushChatMsg("<color=#999999>\u6D88\u606F\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5!</color></o>");
                  layout.inputChat.string = content;
                  return _context3.abrupt("return");
                case 17:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onBtnSendChat() {
            return _onBtnSendChat.apply(this, arguments);
          }
          return onBtnSendChat;
        }();
        _proto.onInputChatReturn = /*#__PURE__*/function () {
          var _onInputChatReturn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var layout;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  layout = this._layout;
                  _context4.next = 3;
                  return this.onBtnSendChat();
                case 3:
                  layout.inputChat.focus();
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function onInputChatReturn() {
            return _onInputChatReturn.apply(this, arguments);
          }
          return onInputChatReturn;
        }();
        _proto._pushChatMsg = function _pushChatMsg(richText) {
          if (this._destroyed) {
            console.log('UIChat._pushChatMsg: destroyed');
            return;
          }
          var layout = this._layout;
          var maxLen = this._isFolded ? 2 : 7;
          // 最多保留 7 条记录
          while (layout.chatMsgs.children.length >= maxLen) {
            this.putToPool(layout.chatMsgs.children[0]);
          }
          var node = this.getFromPool();
          node.getComponent(RichText).string = richText;
        };
        return UIChat;
      }(tgx.UIController), _class2._chatItemPool = [], _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UICreateRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './LobbyMgr.ts', './UserMgr.ts', './Layout_UICreateRoom.ts', './SubGameMgr.ts', './LanguageData.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GameUILayers, ModuleDef, LobbyMgr, UserMgr, Layout_UICreateRoom, SubGameMgr, LanguageData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      Layout_UICreateRoom = module.Layout_UICreateRoom;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e71bfPzlJFKSKEUt4aNEe7e", "UICreateRoom", undefined);
      var UICreateRoom = exports('UICreateRoom', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UICreateRoom, _tgx$UIController);
        function UICreateRoom() {
          return _tgx$UIController.call(this, 'ui_create_room/ui_create_room', GameUILayers.POPUP, Layout_UICreateRoom) || this;
        }
        var _proto = UICreateRoom.prototype;
        _proto.onCreated = function onCreated() {
          var _this = this;
          var layout = this._layout;
          this.onButtonEvent(layout.btnClose, function () {
            _this.close();
          });
          this.onButtonEvent(layout.btnCreate, this.onBtnCreateClicked, this);
          layout.edtName.string = this.getDefaultRoomName();
        };
        _proto.getDefaultRoomName = function getDefaultRoomName() {
          return UserMgr.inst.name + '的好友局';
        };
        _proto.onBtnCreateClicked = /*#__PURE__*/function () {
          var _onBtnCreateClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var layout, ret, params;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  layout = this._layout;
                  if (layout.edtName.string) {
                    _context.next = 4;
                    break;
                  }
                  layout.edtName.string = this.getDefaultRoomName();
                  return _context.abrupt("return");
                case 4:
                  if (!(layout.edtName.string.length > 14)) {
                    _context.next = 7;
                    break;
                  }
                  // 提示“名称最多14个汉字”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message11"));
                  return _context.abrupt("return");
                case 7:
                  if (!(layout.edtPassword.string.length > 16)) {
                    _context.next = 10;
                    break;
                  }
                  // 提示“密码最多16个字符”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message12"));
                  return _context.abrupt("return");
                case 10:
                  tgx.UIWaiting.show();
                  _context.next = 13;
                  return LobbyMgr.inst.rpc_CreateRoom(SubGameMgr.curGameType, layout.edtName.string, layout.edtPassword.string);
                case 13:
                  ret = _context.sent;
                  tgx.UIWaiting.hide();
                  if (!ret.isSucc) {
                    _context.next = 28;
                    break;
                  }
                  layout.edtPassword.string;
                  if (!ret.isSucc) {
                    _context.next = 24;
                    break;
                  }
                  params = ret.res.enterRoomParams;
                  _context.next = 21;
                  return SubGameMgr.inst.enterSubGameRoom(params);
                case 21:
                  return _context.abrupt("return", _context.sent);
                case 24:
                  // 提示“创建失败”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message13"));
                case 25:
                  this.close();
                  _context.next = 29;
                  break;
                case 28:
                  tgx.UIAlert.show(ret.err.message);
                case 29:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onBtnCreateClicked() {
            return _onBtnCreateClicked.apply(this, arguments);
          }
          return onBtnCreateClicked;
        }();
        return UICreateRoom;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIdailycheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './Layout_UIdailycheck.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, ProgressBar, GameUILayers, ModuleDef, Layout_UIdailycheck;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      ProgressBar = module.ProgressBar;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      Layout_UIdailycheck = module.Layout_UIdailycheck;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "e951dwWu+pNOKtVIZz/UZK9", "UIdailycheck", undefined);
      var UIdailycheck = exports('UIdailycheck', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = (_class2 = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIdailycheck, _tgx$UIController);
        function UIdailycheck() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_dailycheck/ui_dailycheck', GameUILayers.POPUP, Layout_UIdailycheck) || this;
          _this.dailyData = void 0;
          UIdailycheck._instance = _assertThisInitialized(_this); // 初始化时保存实例
          _this.dailyData = {
            Now_week: 3,
            Now_statu: false,
            signStatusText: "",
            consecutiveDaysText: 13,
            checkTag: 4,
            rewardDescription: "",
            checked_days: [1, 2],
            signButtonEnabled: false,
            claimButtonEnabled: false,
            missedSignButtonEnabled: false,
            rewardIcon: "",
            daysProgress: 0,
            nextRewardDate: "",
            onSign: function onSign() {},
            onClaim: function onClaim() {},
            onMissedSign: function onMissedSign() {}
          };
          return _this;
        }
        UIdailycheck.getInstance = function getInstance() {
          return this._instance;
        };
        var _proto = UIdailycheck.prototype;
        _proto.onCreated = function onCreated() {
          var _this2 = this;
          var layout = this._layout;
          this.onButtonEvent(layout.btnClose, function () {
            _this2.close(); //绑定关闭按钮
          });

          for (var i = 0; i < 7; i++) {
            layout.dailyButtons[i].interactable = false; // 7天签到按钮初始化（默认交互关闭）
          }

          layout.dailyButtons[this.dailyData.Now_week - 1].interactable = true; //使当天签到按钮可交互
          var posx = this.dailyData.consecutiveDaysText / 30; //初始化进度长度，等于连续签到日期除以当月总日期
          layout.processbar.getComponent(ProgressBar).progress = posx; //进度条初始化

          // this.onButtonEvent(layout.btnCreate, this.onBtnCreateClicked, this);

          // layout.edtName.string = this.getDefaultRoomName();
        };

        _proto.initDailyCheckBtn = function initDailyCheckBtn() {};
        return UIdailycheck;
      }(tgx.UIController), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIEnterRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './LanguageData.ts', './LobbyMgr.ts', './Layout_UIEnterRoom.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GameUILayers, ModuleDef, LanguageData, LobbyMgr, Layout_UIEnterRoom;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      Layout_UIEnterRoom = module.Layout_UIEnterRoom;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "022f2kK0CJPC4W1a1YjCYBL", "UIEnterRoom", undefined);
      var UIEnterRoom = exports('UIEnterRoom', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIEnterRoom, _tgx$UIController);
        function UIEnterRoom() {
          return _tgx$UIController.call(this, 'ui_enter_room/ui_enter_room', GameUILayers.POPUP, Layout_UIEnterRoom) || this;
        }
        var _proto = UIEnterRoom.prototype;
        _proto.onCreated = function onCreated() {
          var _this = this;
          var layout = this._layout;
          this.onButtonEvent(layout.btnClose, function () {
            _this.close();
          });
          this.onButtonEvent(layout.btnEnter, this.onBtnCreateClicked, this);
        };
        _proto.onBtnCreateClicked = /*#__PURE__*/function () {
          var _onBtnCreateClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var layout, roomId, password, ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  layout = this._layout;
                  if (!(layout.edtId.string.length > 8)) {
                    _context.next = 4;
                    break;
                  }
                  // 提示“ID 最多8 数字”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message14"));
                  return _context.abrupt("return");
                case 4:
                  if (!(layout.edtPassword.string.length > 16)) {
                    _context.next = 7;
                    break;
                  }
                  // 提示“密码最多16个字符”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message15"));
                  return _context.abrupt("return");
                case 7:
                  tgx.UIWaiting.show();
                  roomId = layout.edtId.string;
                  password = layout.edtPassword.string;
                  _context.next = 12;
                  return LobbyMgr.inst.doTryEnterRoom(roomId, password);
                case 12:
                  ret = _context.sent;
                  tgx.UIWaiting.hide();
                  if (!ret.isSucc) {
                    // 提示“进入失败”
                    tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message16"));
                  }
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onBtnCreateClicked() {
            return _onBtnCreateClicked.apply(this, arguments);
          }
          return onBtnCreateClicked;
        }();
        _proto.setFixedId = function setFixedId(id) {
          var layout = this._layout;
          layout.edtId.string = id;
          layout.edtId.enabled = false;
        };
        return UIEnterRoom;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './GameUILayers.ts', './Layout_UIHelp.ts', './ResourceMgr.ts', './SubGameMgr.ts', './SubGameDef.ts', './LanguageData.ts', './ConfigMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, instantiate, NodeEventType, Vec2, SpriteFrame, Sprite, math, ModuleDef, GameUILayers, Layout_UIHelp, ResourceMgr, SubGameMgr, getSubGameConf, LanguageData, ConfigMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      NodeEventType = module.NodeEventType;
      Vec2 = module.Vec2;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      math = module.math;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UIHelp = module.Layout_UIHelp;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      getSubGameConf = module.getSubGameConf;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      ConfigMgr = module.ConfigMgr;
    }],
    execute: function () {
      var _dec, _class2;
      cclegacy._RF.push({}, "9fd94hJaBVCaaUgXzEvw6p0", "UIHelp", undefined);

      //帮助参数
      var UIhelpParam = exports('UIhelpParam', function UIhelpParam(type, gamekey) {
        if (gamekey === void 0) {
          gamekey = "";
        }
        /**可以不填，不填的话 默认读取当前游戏的gamekey */
        this.gameKey = "";
        this.type = void 0;
        this.gameKey = gamekey;
        this.type = type;
      });
      var UIHelp = exports('UIHelp', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class2 = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIHelp, _tgx$UIController);
        function UIHelp() {
          var _this;
          _this = _tgx$UIController.call(this, 'ui_help/HelpPrefabPortrait', GameUILayers.POPUP2, Layout_UIHelp) || this;
          _this._helpImgs = [];
          _this._helpIndex = 0;
          // 触摸起始位置
          _this.startPos = new Vec2();
          _this._pageList = void 0;
          return _this;
        }
        var _proto = UIHelp.prototype;
        _proto.onCreated = function onCreated(params) {
          var _this2 = this;
          var gameKey = params.gameKey;
          if (gameKey == "") {
            gameKey = SubGameMgr.curGameType;
          }
          var layout = this._layout;
          this.onButtonEvent(layout.btn_back, function () {
            _this2.close();
          });
          var ruleConfig = ConfigMgr.inst.getRuleConfig();
          if (!ruleConfig) return;
          var gameConfig = ruleConfig[gameKey];
          if (!gameConfig) return;
          var helpConfig = gameConfig[params.type];
          if (!helpConfig) return;
          var languageHelp = helpConfig[LanguageData.current];
          if (!languageHelp) {
            return;
          }
          var imgPath = helpConfig[LanguageData.current].path;
          var count = helpConfig[LanguageData.current].count;
          this._helpImgs = [];
          for (var i = 0; i < count; i++) {
            this._helpImgs.push(imgPath + Number(i + 1));
          }
          if (!this._helpImgs) return;
          this._pageList = [];
          for (var i = 0; i < this._helpImgs.length; i++) {
            var prefabInstance = instantiate(layout.node_page);
            prefabInstance.active = true;
            layout.list_page.addChild(prefabInstance);
            this._pageList.push(prefabInstance);
          }
          layout.txt_title.string = LanguageData.getLangByID(params.type);
          this._helpIndex = 0;
          this.showImage();
          // 监听触摸开始事件
          this._layout.portraitNode.on(NodeEventType.TOUCH_START, this.onTouchStart, this);
          // 监听触摸结束事件
          this._layout.portraitNode.on(NodeEventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.onDispose = function onDispose() {
          // 监听触摸开始事件
          this._layout.portraitNode.off(NodeEventType.TOUCH_START, this.onTouchStart, this);
          // 监听触摸结束事件
          this._layout.portraitNode.off(NodeEventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          // 获取触摸开始时的世界坐标
          var worldStartPos = event.getLocation();
          // 将世界坐标转换到当前节点的本地坐标
          this.startPos = this.worldToLocal(worldStartPos);
        };
        _proto.onTouchEnd = function onTouchEnd(event) {
          // 获取触摸结束时的世界坐标
          var worldEndPos = event.getLocation();
          // 将世界坐标转换到当前节点的本地坐标
          var endPos = this.worldToLocal(worldEndPos);
          var deltaX = endPos.x - this.startPos.x;

          // 判断滑动方向
          if (deltaX > 30) {
            // 向右滑动，显示上一张图片
            this.prevImage();
          } else if (deltaX < -30) {
            // 向左滑动，显示下一张图片
            this.nextImage();
          }
        };
        _proto.worldToLocal = function worldToLocal(worldPos) {
          var node = this._layout.node;
          // 获取节点的世界变换矩阵的逆矩阵
          var inverseWorldMatrix = node.worldMatrix.clone().invert();
          var a = inverseWorldMatrix.m00;
          var b = inverseWorldMatrix.m01;
          var c = inverseWorldMatrix.m04;
          var d = inverseWorldMatrix.m05;
          var tx = inverseWorldMatrix.m12;
          var ty = inverseWorldMatrix.m13;

          // 手动计算二维向量的变换
          var localX = a * worldPos.x + c * worldPos.y + tx;
          var localY = b * worldPos.x + d * worldPos.y + ty;
          return new Vec2(localX, localY);
        };
        _proto.prevImage = function prevImage() {
          this._helpIndex--;
          if (this._helpIndex >= 0) {
            this.showImage();
          } else {
            this._helpIndex = 0;
          }
        };
        _proto.nextImage = function nextImage() {
          this._helpIndex++;
          if (this._helpIndex < this._helpImgs.length) {
            this.showImage();
          } else {
            this._helpIndex = this._helpImgs.length - 1;
          }
        };
        _proto.showImage = function showImage() {
          var _this3 = this;
          var conf = getSubGameConf(SubGameMgr.gameMgr.gameType);
          if (!conf) {
            return;
          }
          if (this._helpIndex >= this._helpImgs.length) {
            return;
          }
          ResourceMgr.inst.loadResByModuleBundle(conf.bundle, this._helpImgs[this._helpIndex] + "/spriteFrame", SpriteFrame, function (error, resObj) {
            var layout = _this3._layout;
            layout.img_help.getComponent(Sprite).spriteFrame = resObj;
          });
          for (var i = 0; i < this._pageList.length; i++) {
            this._pageList[i].scale = new math.Vec3(1, 1, 1);
          }
          var pageNode = this._pageList[this._helpIndex];
          pageNode.scale = new math.Vec3(1.6, 1.6, 1);
        };
        return UIHelp;
      }(tgx.UIController)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UIHistory.ts', './Layout_UIHistoryItem.ts', './Layout_UIHistoryOptionItem.ts', './SubGameDef.ts', './ModuleDef.ts', './LanguageData.ts', './NetGameServer.ts', './Utils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Sprite, instantiate, Vec3, Button, NodeEventType, GameUILayers, Layout_UIHistory, Layout_UIHistoryItem, Layout_UIHistoryOptionItem, subGameConf, SubGameType, ModuleDef, LanguageData, apiNet, Utils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Button = module.Button;
      NodeEventType = module.NodeEventType;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UIHistory = module.Layout_UIHistory;
    }, function (module) {
      Layout_UIHistoryItem = module.Layout_UIHistoryItem;
    }, function (module) {
      Layout_UIHistoryOptionItem = module.Layout_UIHistoryOptionItem;
    }, function (module) {
      subGameConf = module.subGameConf;
      SubGameType = module.SubGameType;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      apiNet = module.apiNet;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "be3d4Kfqj9PUbu4Z3GKGOju", "UIHistory", undefined);
      var UIHistory = exports('UIHistory', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIHistory, _tgx$UIController);
        function UIHistory() {
          var _this;
          _this = _tgx$UIController.call(this, "prefabs/history/historyview", GameUILayers.POPUP, Layout_UIHistory) || this;
          _this._data = void 0;
          _this._totalPage = 0;
          _this._curPage = 1;
          _this._pageSize = 10;
          _this._classList = [{
            "id": 1,
            "type": "all"
          }, {
            "id": 2,
            "type": SubGameType.LEISURE
          }, {
            "id": 3,
            "type": SubGameType.SLOT
          }, {
            "id": 4,
            "type": SubGameType.SKILL
          }, {
            "id": 5,
            "type": SubGameType.FISH
          }];
          _this._gameList = [];
          _this._dateList = [{
            "id": 1,
            "name": "今日"
          }, {
            "id": 2,
            "name": "昨日"
          }, {
            "id": 3,
            "name": "一周内"
          }, {
            "id": 4,
            "name": "最近30天"
          }];
          _this._selectDate = 1;
          _this._selectClass = "all";
          _this._selectGame = 1;
          _this._utc = void 0;
          _this._startDay = void 0;
          _this._endDay = void 0;
          return _this;
        }
        var _proto = UIHistory.prototype;
        _proto.onCreated = /*#__PURE__*/function () {
          var _onCreated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var layout;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._utc = new Date().getTimezoneOffset();
                  this.onBindGameData("all");
                  this.onBindData(null);
                  layout = this._layout;
                  layout.btnClose.node.on(Button.EventType.CLICK, this.onClickClose, this);
                  layout.btn_pre.node.on(Button.EventType.CLICK, this.onClickPrePage, this);
                  layout.btn_next.node.on(Button.EventType.CLICK, this.onClickNextPage, this);
                  layout.btnSelectClass.node.on(Button.EventType.CLICK, this.onClickSelectClass, this);
                  layout.btnSelectGame.node.on(Button.EventType.CLICK, this.onClickSelectGame, this);
                  layout.btnSelectDate.node.on(Button.EventType.CLICK, this.onClickSelectDate, this);
                  layout.node_mask_dropdownselect.on(Button.EventType.CLICK, this.onClickMaskDropdownselect, this);
                  layout.node_mask_dropdownselect.on(NodeEventType.TOUCH_START, this.onTouch_preventSwallow, this);
                  layout.node_mask_dropdownselect.on(NodeEventType.TOUCH_END, this.onTouch_preventSwallow, this);
                  layout.node_mask_dropdownselect.on(NodeEventType.TOUCH_MOVE, this.onTouch_preventSwallow, this);
                  layout.node_mask_dropdownselect.on(NodeEventType.TOUCH_END, this.onTouch_preventSwallow, this);
                  layout.node_mask_dropdownselect.on(NodeEventType.TOUCH_CANCEL, this.onTouch_preventSwallow, this);
                  this.onInitOption();
                  this.updateDateRange();
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onCreated() {
            return _onCreated.apply(this, arguments);
          }
          return onCreated;
        }();
        _proto.onBindGameData = function onBindGameData(gameType) {
          this._gameList.push({
            "id": 1,
            "name": "全部",
            "icon": "",
            "language": "all"
          });
          for (var i = 0; i < subGameConf.length; i++) {
            if (!subGameConf[i].show) {
              continue;
            }
            if (gameType != "all" && subGameConf[i].gametype != gameType) {
              continue;
            }
            this._gameList.push(subGameConf[i]);
          }
        };
        _proto.onDispose = function onDispose() {};
        _proto.onBindData = function onBindData(data) {
          this._data = data;
          var layout = this._layout;
          if (this._data == null) {
            layout.norecords.active = false;
            layout.records.active = false;
            layout.node_page.active = false;
            return;
          }
          if (this._data.list.length == 0) {
            layout.norecords.active = true;
            layout.records.active = true;
            layout.node_page.active = false;
            return;
          }
          layout.norecords.active = false;
          layout.records.active = true;
          layout.node_page.active = true;
          layout.txt_cishu.string = LanguageData.getLangByID("history_1", data.cishu);
          layout.txt_touru.string = LanguageData.getLangByID("history_2", data.touru);
          layout.txt_win.string = LanguageData.getLangByID("history_3", data.win);
          layout.txt_jiesuan.string = LanguageData.getLangByID("history_3", data.jiesuan);
          this._totalPage = this._data.totalPages;
          this.onUpdateHistory();
        };
        _proto.onClickClose = function onClickClose() {
          this.close();
        };
        _proto.onClickPrePage = function onClickPrePage() {
          if (this._curPage <= 1) {
            return;
          }
          this._curPage -= 1;
          this.onUpdateHistory();
        };
        _proto.onClickNextPage = function onClickNextPage() {
          if (this._curPage >= this._totalPage) {
            return;
          }
          this._curPage += 1;
          this.onUpdateHistory();
        };
        _proto.onUpdateHistory = function onUpdateHistory() {
          var layout = this._layout;
          layout.btn_pre.node.getComponent(Sprite).grayscale = false;
          layout.btn_next.node.getComponent(Sprite).grayscale = false;
          layout.btn_pre.enabled = true;
          layout.btn_next.enabled = true;
          if (this._curPage == 1) {
            layout.btn_pre.node.getComponent(Sprite).grayscale = true;
            layout.btn_pre.enabled = false;
          }
          if (this._curPage == this._totalPage) {
            layout.btn_next.node.getComponent(Sprite).grayscale = true;
            layout.btn_next.enabled = false;
          }
          layout.txt_page.string = this._curPage + "/" + this._totalPage;
          layout.node_records_layout.removeAllChildren();
          for (var i = 0; i < this._data.list.length; i++) {
            var item = instantiate(layout.recordItem);
            item.setParent(layout.node_records_layout);
            item.setPosition(new Vec3(0));
            item.active = true;
            item.getComponent(Layout_UIHistoryItem).init(this._data.list[i]);
            if (i % 2 == 0) {
              item.getComponent(Layout_UIHistoryItem).setBgShow(false);
            } else {
              item.getComponent(Layout_UIHistoryItem).setBgShow(true);
            }
          }
        }
        /**选择类型 */;
        _proto.onClickSelectClass = function onClickSelectClass() {
          this.onShowDropdownSelect(1);
        }
        /**选择游戏 */;
        _proto.onClickSelectGame = function onClickSelectGame() {
          this.onShowDropdownSelect(2);
        }
        /**选择日期 */;
        _proto.onClickSelectDate = function onClickSelectDate() {
          this.onShowDropdownSelect(3);
        };
        _proto.onShowDropdownSelect = function onShowDropdownSelect(type) {
          var layout = this._layout;
          layout.node_dropdownselect.active = true;
          var contentList = [];
          switch (type) {
            case 1:
              layout.node_dropdownselect.position = layout.node_dropdownselectPosClass.position;
              contentList = this._classList;
              break;
            case 2:
              layout.node_dropdownselect.position = layout.node_dropdownselectPosGame.position;
              this.onBindGameData(this._selectClass);
              contentList = this._gameList;
              break;
            case 3:
              layout.node_dropdownselect.position = layout.node_dropdownselectPosDate.position;
              contentList = this._dateList;
              break;
          }
          layout.node_options_layout.removeAllChildren();
          for (var i = 0; i < contentList.length; i++) {
            var item = instantiate(layout.optionitem);
            item.setParent(layout.node_options_layout);
            item.setPosition(new Vec3(0));
            item.active = true;
            item.getComponent(Layout_UIHistoryOptionItem).init(contentList[i], type, this.onClickOptionItem.bind(this));
          }
        };
        _proto.onInitOption = function onInitOption() {
          this.onClickOptionItem(this._classList[0], 1, false);
          this.onClickOptionItem(this._gameList[0], 2, false);
          this.onClickOptionItem(this._dateList[0], 3, false);
          this.requestHistoryList();
        };
        _proto.onClickOptionItem = function onClickOptionItem(data, type, requestData) {
          if (requestData === void 0) {
            requestData = true;
          }
          var layout = this._layout;
          switch (type) {
            case 1:
              layout.txt_selectClass.string = LanguageData.getLangByID(data.type);
              this._selectClass = data.id;
              break;
            case 2:
              layout.txt_selectGame.string = LanguageData.getLangByID(data.language);
              this._selectGame = data.id;
            case 3:
              layout.txt_selectDate.string = data.name;
              this._selectDate = data.id;
              this.updateDateRange();
              break;
          }
          this.onClickMaskDropdownselect();
          if (requestData) {
            this._curPage = 1;
            this.requestHistoryList();
          }
        }
        //点击 下拉框遮罩，关闭下拉框
        ;

        _proto.onClickMaskDropdownselect = function onClickMaskDropdownselect(event) {
          if (event === void 0) {
            event = null;
          }
          if (event) event.preventSwallow = true;
          var layout = this._layout;
          layout.node_dropdownselect.active = false;
        };
        _proto.onTouch_preventSwallow = function onTouch_preventSwallow(event) {
          event.preventSwallow = true;
        };
        _proto.updateDateRange = function updateDateRange() {
          var nowDate = new Date();
          switch (this._selectDate) {
            case 1:
              // 今日
              this._endDay = this._startDay = Utils.formatDate(nowDate);
              this._endDay = Utils.formatDate(nowDate);
              break;
            case 2:
              // 昨日
              nowDate.setDate(nowDate.getDate() - 1);
              this._endDay = this._startDay = Utils.formatDate(nowDate);
              break;
            case 3:
              // 一周内
              this._endDay = Utils.formatDate(nowDate);
              nowDate.setDate(nowDate.getDate() - 7);
              this._startDay = Utils.formatDate(nowDate);
              break;
            case 4:
              // 最近30天
              this._endDay = Utils.formatDate(nowDate);
              nowDate.setDate(nowDate.getDate() - 30);
              this._startDay = Utils.formatDate(nowDate);
              break;
          }
        };
        _proto.requestHistoryList = function requestHistoryList() {
          var _this2 = this;
          if (this._selectClass != "all") {
            this._selectClass;
          }
          this._utc;
          this._curPage;
          this._pageSize;
          this._startDay;
          this._endDay;
          apiNet.callApi('ReportDayPersonController/selectByUtc', {}).then(function (res) {
            _this2.onBindData(res.data);
          });
        };
        return UIHistory;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIHistoryDetails.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UIHistoryDetails.ts', './Layout_UIHistoryDetailsItem.ts', './NetGameServer.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Button, Sprite, instantiate, Vec3, GameUILayers, Layout_UIHistoryDetails, Layout_UIHistoryDetailsItem, apiNet;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UIHistoryDetails = module.Layout_UIHistoryDetails;
    }, function (module) {
      Layout_UIHistoryDetailsItem = module.Layout_UIHistoryDetailsItem;
    }, function (module) {
      apiNet = module.apiNet;
    }],
    execute: function () {
      cclegacy._RF.push({}, "397desck1xM8pi/L+Al2ljw", "UIHistoryDetails", undefined);
      var UIHistoryDetails = exports('UIHistoryDetails', /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIHistoryDetails, _tgx$UIController);
        function UIHistoryDetails() {
          var _this;
          _this = _tgx$UIController.call(this, "prefabs/history/historydetailsview", GameUILayers.POPUP, Layout_UIHistoryDetails) || this;
          _this._data = void 0;
          _this._totalPage = 0;
          _this._curPage = 0;
          _this._pageSize = 10;
          _this._resourceData = void 0;
          _this._utc = void 0;
          return _this;
        }
        var _proto = UIHistoryDetails.prototype;
        _proto.onCreated = function onCreated(params) {
          this._utc = new Date().getTimezoneOffset();
          this._resourceData = params;
          this.onBindData(null);
          var layout = this._layout;
          layout.btnClose.node.on(Button.EventType.CLICK, this.onClickClose, this);
          layout.btn_pre.node.on(Button.EventType.CLICK, this.onClickPrePage, this);
          layout.btn_next.node.on(Button.EventType.CLICK, this.onClickNextPage, this);
          this.requestHistoryList();
        };
        _proto.onDispose = function onDispose() {};
        _proto.onBindData = function onBindData(data) {
          this._data = data;
          var layout = this._layout;
          if (this._data == null) {
            layout.txt_date.string = this._resourceData.create_at;
            layout.node_records_layout.active = false;
            layout.node_page.active = false;
            return;
          }
          if (this._data.list.length == 0) {
            layout.node_records_layout.active = false;
            layout.node_page.active = false;
            return;
          }
          layout.node_records_layout.active = false;
          layout.node_page.active = true;
          this._curPage = 1;
          this._totalPage = this._data.totalPages;
          this.onUpdateHistory();
        };
        _proto.onClickClose = function onClickClose() {
          this.close();
        };
        _proto.onClickPrePage = function onClickPrePage() {
          if (this._curPage <= 1) {
            return;
          }
          this._curPage -= 1;
          this.requestHistoryList();
        };
        _proto.onClickNextPage = function onClickNextPage() {
          if (this._curPage >= this._totalPage) {
            return;
          }
          this._curPage += 1;
          this.requestHistoryList();
        };
        _proto.onUpdateHistory = function onUpdateHistory() {
          var layout = this._layout;
          layout.btn_pre.node.getComponent(Sprite).grayscale = false;
          layout.btn_next.node.getComponent(Sprite).grayscale = false;
          layout.btn_pre.enabled = true;
          layout.btn_next.enabled = true;
          if (this._curPage == 1) {
            layout.btn_pre.node.getComponent(Sprite).grayscale = true;
            layout.btn_pre.enabled = false;
          }
          if (this._curPage == this._totalPage) {
            layout.btn_next.node.getComponent(Sprite).grayscale = true;
            layout.btn_next.enabled = false;
          }
          layout.txt_page.string = this._curPage + "/" + this._totalPage;
          layout.node_records_layout.removeAllChildren();
          for (var i = 0; i < this._data.records.length; i++) {
            var item = instantiate(layout.recordItem);
            item.setParent(layout.node_records_layout);
            item.setPosition(new Vec3(0));
            item.active = true;
            item.getComponent(Layout_UIHistoryDetailsItem).init(this._data.records[i]);
            if (i % 2 == 0) {
              item.getComponent(Layout_UIHistoryDetailsItem).setBgShow(false);
            } else {
              item.getComponent(Layout_UIHistoryDetailsItem).setBgShow(true);
            }
          }
        };
        _proto.requestHistoryList = function requestHistoryList() {
          var _this2 = this;
          this._resourceData.game_code;
          this._utc;
          this._curPage;
          this._pageSize;
          this._resourceData.create_at;
          this._resourceData.create_at;
          apiNet.callApi('ReportDayPersonController/selectByDay', {}).then(function (res) {
            _this2.onBindData(res.data);
          });
        };
        return UIHistoryDetails;
      }(tgx.UIController));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UILanguage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UILanguage.ts', './ModuleDef.ts', './Language.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, log, GameUILayers, Layout_UILanguage, ModuleDef, LanguageManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UILanguage = module.Layout_UILanguage;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageManager = module.LanguageManager;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7f803I3hvFLQ5PO2Z6dB3D7", "UILanguage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //设置语言界面
      var UILanguage = exports('UILanguage', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UILanguage, _tgx$UIController);
        //当前是第几个语言 

        function UILanguage() {
          var _this;
          _this = _tgx$UIController.call(this, "ui_language/ui_language", GameUILayers.POPUP, Layout_UILanguage) || this;
          _this.languageIndex = 0;
          return _this;
        }
        var _proto = UILanguage.prototype;
        _proto.onCreated = function onCreated() {
          var _this2 = this;
          var layout = this._layout;

          //关闭按钮
          this.onButtonEvent(layout.btnClose, function () {
            _this2.close();
          });

          //取消按钮
          this.onButtonEvent(layout.btnCancel, function () {
            _this2.close();
          });

          //选中某种语言
          this.onToggleEvent(layout.toggleLanguage, function (v) {
            //选中第几个语言
            _this2.languageIndex = layout.toggleLanguage.toggleItems.indexOf(v);
          });

          //选择语言确定按钮
          this.onButtonEvent(layout.btnLanguage, function () {
            log(_this2.languageIndex);
            //切换语言
            LanguageManager.ins.setLanguageByIndex(_this2.languageIndex);
            _this2.close();
          });

          //显示当前使用的语言
          this.languageIndex = LanguageManager.ins.index;
          layout.toggleLanguage.toggleItems[this.languageIndex].isChecked = true;
        };
        return UILanguage;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UILogin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './LanguageData.ts', './LobbyMgr.ts', './UserLocalCache.ts', './Layout_UILogin.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GameUILayers, ModuleDef, LanguageData, LobbyMgr, UserLocalCache, Layout_UILogin;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      UserLocalCache = module.UserLocalCache;
    }, function (module) {
      Layout_UILogin = module.Layout_UILogin;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "deb116IjzhLzakkTbeSSpMk", "UILogin", undefined);
      var UIRegister = exports('UIRegister', /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIRegister, _tgx$UIController);
        function UIRegister() {
          return _tgx$UIController.apply(this, arguments) || this;
        }
        return UIRegister;
      }(tgx.UIController));
      var UILogin = exports('UILogin', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController2) {
        _inheritsLoose(UILogin, _tgx$UIController2);
        function UILogin() {
          var _this;
          _this = _tgx$UIController2.call(this, 'ui_login/ui_login', GameUILayers.POPUP, Layout_UILogin) || this;
          _this._oldAccount = '';
          _this._oldPassword = '';
          _this._timeOut = void 0;
          return _this;
        }
        var _proto = UILogin.prototype;
        _proto.onCreated = function onCreated() {
          var _this2 = this,
            _window$location;
          var layout = this._layout;
          this.onButtonEvent(layout.btnLogin, function () {
            var newAccount = layout.edtAccount.string;
            var newPassword = layout.edtPassword.string;
            if (newAccount != _this2._oldAccount || newPassword != _this2._oldPassword) {
              //if account or password has been changed, alert to store.
              // 提示“是否保存账号和密码？”
              tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message1"), true).onClick(function (ok) {
                if (ok) {
                  UserLocalCache.inst.storeAccount(layout.edtAccount.string);
                  UserLocalCache.inst.storePassword(layout.edtPassword.string);
                }
                _this2.doLogin(newAccount, newPassword);
              });
            } else {
              _this2.doLogin(newAccount, newPassword);
            }
          });
          this.onButtonEvent(layout.btnRegister, function () {
            _this2.close();
            tgx.UIMgr.inst.showUI(UIRegister);
          });
          var params = tgx.URLUtils.urlParse((_window$location = window.location) == null ? void 0 : _window$location.href);
          var cachedAccount = params['a'] || UserLocalCache.inst.account;
          if (cachedAccount) {
            layout.edtAccount.string = cachedAccount;
          }
          var cachedPassword = params['p'] || UserLocalCache.inst.password;
          if (cachedPassword) {
            layout.edtPassword.string = cachedPassword;
          }

          //store them for later comparison.
          this._oldAccount = layout.edtAccount.string;
          this._oldPassword = layout.edtPassword.string;
        };
        _proto.autoFill = function autoFill(account, password) {
          var layout = this._layout;
          layout.edtAccount.string = account;
          layout.edtPassword.string = password;
        };
        _proto.close = function close() {
          _tgx$UIController2.prototype.close.call(this);
          clearTimeout(this._timeOut);
        };
        _proto.doLogin = /*#__PURE__*/function () {
          var _doLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(account, password) {
            var layout, ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  layout = this._layout;
                  layout.btnLogin.enabled = false;
                  this._timeOut = setTimeout(function () {
                    layout.btnLogin.enabled = true;
                  }, 1000);
                  // 提示“正在登录”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message6"));
                  _context.next = 6;
                  return LobbyMgr.inst.doLogin(account, password);
                case 6:
                  ret = _context.sent;
                  if (!ret.isSucc) {
                    tgx.UIWaiting.hide();
                  }
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doLogin(_x, _x2) {
            return _doLogin.apply(this, arguments);
          }
          return doLogin;
        }();
        return UILogin;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UIMail.ts', './MailItem.ts', './NetGameServer.ts', './ModuleDef.ts', './LanguageData.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, instantiate, GameUILayers, Layout_UIMail, MailItem, lobbyNet, ModuleDef, LanguageData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UIMail = module.Layout_UIMail;
    }, function (module) {
      MailItem = module.MailItem;
    }, function (module) {
      lobbyNet = module.lobbyNet;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3b20cIctDpOjongbzFcqexf", "UIMail", undefined);

      // 声明为 tgx 框架的一个模块（BASIC）
      var UIMail = exports('UIMail', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIMail, _tgx$UIController);
        function UIMail() {
          var _this;
          // 初始化 UI 控制器：指定资源路径、UI 层级和布局类
          _this = _tgx$UIController.call(this, "ui_mail/ui_mail", GameUILayers.POPUP, Layout_UIMail) || this;
          _this.firsttime = true;
          _this._itemPrefab = null;
          // 邮件项预制体
          _this._lastSelected = null;
          return _this;
        }
        var _proto = UIMail.prototype;
        // 上一个选中的邮件项
        // 创建 UI 时的回调
        _proto.onCreated = function onCreated() {
          var _this2 = this;
          var layout = this._layout;

          // 获取邮件项预制体，并从界面上移除所有已有子项
          this._itemPrefab = layout.mailRoot.children[0];
          layout.mailRoot.removeAllChildren();

          // 关闭按钮点击事件
          this.onButtonEvent(layout.btnClose, function () {
            _this2.close(); // 关闭当前 UI
          });

          this.onButtonEvent(layout.Read, function () {
            layout.lblContent.node.active = false;
            layout.detail.active = false;
          });

          // “全部标记为已读”按钮点击事件
          this.onButtonEvent(layout.btnMarkAllAsRead, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return lobbyNet.callApi('lobby/mail/MarkAllAsRead', {});
                case 2:
                  ret = _context.sent;
                  if (ret.isSucc) {
                    _this2.onMarkAllAsRead(); // 标记本地 UI 状态
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));

          // “清空全部邮件”按钮点击事件
          this.onButtonEvent(layout.btnClearAll, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // 弹出提示确认框
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message3"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(b) {
                    var ret;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!b) {
                            _context2.next = 6;
                            break;
                          }
                          _context2.next = 3;
                          return lobbyNet.callApi('lobby/mail/ClearAllMails', {});
                        case 3:
                          ret = _context2.sent;
                          console.log(ret);
                          if (ret.isSucc) {
                            layout.mailRoot.removeAllChildren(); // 清空 UI
                            layout.lblContent.node.active = false; // 隐藏邮件内容
                            layout.detail.active = false;
                            layout.emptyTips.active = true; // 显示无邮件提示
                            _this2._lastSelected = null;
                          }
                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  })));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));

          // “删除当前邮件”按钮点击事件
          this.onButtonEvent(layout.btnDelete, function () {
            tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message2"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(b) {
              var deleteItem, ret;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!b) {
                      _context4.next = 6;
                      break;
                    }
                    deleteItem = _this2._lastSelected;
                    _context4.next = 4;
                    return lobbyNet.callApi('lobby/mail/DeleteMail', {
                      mailId: _this2._lastSelected.data.mailId
                    });
                  case 4:
                    ret = _context4.sent;
                    if (ret.isSucc) {
                      deleteItem.node.removeFromParent(); // 移除邮件项节点
                      if (!layout.mailRoot.children.length) {
                        // 如果没有邮件了，清空内容区域并显示提示
                        layout.lblContent.node.active = false;
                        layout.detail.active = false;
                        layout.emptyTips.active = true;
                        _this2._lastSelected = null;
                      } else {
                        // 自动选中第一封邮件
                        _this2.setAsSelected(layout.mailRoot.children[0].getComponent(MailItem));
                      }
                    }
                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            })));
          });
          this.initMailList(); // 初始化邮件列表
        }

        // 将所有邮件设置为已读状态（本地 UI 表示）
        ;

        _proto.onMarkAllAsRead = function onMarkAllAsRead() {
          var _this3 = this;
          var layout = this._layout;
          layout.mailRoot.children.forEach(function (v) {
            var comp = v.getComponent(MailItem);
            comp.hasRead.active = false;
            comp.data.state = 'read';
            _this3._lastSelected.hasRead.active = false;
          });
        }

        // 初始化邮件列表（从服务器获取邮件）
        ;

        _proto.initMailList = /*#__PURE__*/
        function () {
          var _initMailList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this4 = this;
            var layout, ret;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  layout = this._layout;
                  _context6.next = 3;
                  return lobbyNet.callApi('lobby/mail/GetMails', {});
                case 3:
                  ret = _context6.sent;
                  ret = {
                    "isSucc": true,
                    "res": {
                      "mails": [{
                        "mailId": "21809",
                        "uid": "33",
                        "from": "system",
                        "time": 1749622571,
                        "title": "欢迎登录",
                        "content": "张盼盼，你好！\n这封邮件会在你每次登录的时候收到。",
                        "state": "unread"
                      }, {
                        "mailId": "21781",
                        "uid": "33",
                        "from": "system",
                        "time": 1749610067,
                        "title": "欢迎登录",
                        "content": "张盼盼，你好！\n这封邮件会在你每次登录的时候收到。",
                        "state": "readed"
                      }, {
                        "mailId": "5747",
                        "uid": "33",
                        "from": "system",
                        "time": 1742350802,
                        "title": "欢迎登录",
                        "content": "张盼盼，你好！\n这封邮件会在你每次登录的时候收到。",
                        "state": "unread"
                      }, {
                        "mailId": "5746",
                        "uid": "33",
                        "from": "system",
                        "time": 1742350751,
                        "title": "欢迎登录",
                        "content": "张盼盼，你好！\n这封邮件会在你每次登录的时候收到。",
                        "state": "unread"
                      }]
                    }
                  };
                  if (ret.isSucc) {
                    _context6.next = 8;
                    break;
                  }
                  layout.emptyTips.active = true;
                  return _context6.abrupt("return");
                case 8:
                  layout.emptyTips.active = false;
                  if (ret.res.mails.length) {
                    _context6.next = 12;
                    break;
                  }
                  layout.emptyTips.active = true;
                  return _context6.abrupt("return");
                case 12:
                  // 邮件按时间倒序排列
                  ret.res.mails.sort(function (a, b) {
                    return b.time - a.time;
                  });
                  ret.res.mails.slice(0, 10).forEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(v) {
                    var item, comp;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          item = instantiate(_this4._itemPrefab); // 实例化邮件项
                          layout.mailRoot.addChild(item);
                          comp = item.getComponent(MailItem);
                          comp.setData(v); // 设置数据时间

                          // 邮件点击事件：设置为选中状态
                          _this4.onButtonEvent(item, function () {
                            if (_this4._lastSelected != comp) {
                              _this4.setAsSelected(comp);
                            }
                          });
                          if (v.state == "readed") {
                            comp.hasRead.active = false;
                          }
                          comp.selected = false;
                        case 8:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5);
                  })));
                case 15:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function initMailList() {
            return _initMailList.apply(this, arguments);
          }
          return initMailList;
        }() // 设置某封邮件为选中状态
        ;

        _proto.setAsSelected = /*#__PURE__*/
        function () {
          var _setAsSelected = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(comp) {
            var layout, ret;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  layout = this._layout;
                  layout.lblContent.node.active = true;
                  layout.detail.active = true;
                  layout.lblContent.string = comp.data.content + '\n' + new Date(comp.data.time).toString();
                  layout.titleLabel.string = comp.data.title;
                  comp.selected = true;

                  // 取消上一个选中的状态
                  if (this.firsttime == false) {
                    this._lastSelected.selected = false;
                  } else {
                    this.firsttime = false;
                  }
                  this._lastSelected = comp;
                  // 如果当前邮件还未读，则向服务器标记为已读
                  if (!(comp.data.state == "unread")) {
                    _context7.next = 13;
                    break;
                  }
                  _context7.next = 11;
                  return lobbyNet.callApi('lobby/mail/MarkAsRead', {
                    mailId: comp.data.mailId
                  });
                case 11:
                  ret = _context7.sent;
                  if (ret.isSucc) {
                    comp.data.state = 'read';
                    comp.hasRead.active = false;
                    console.log();
                  }
                case 13:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function setAsSelected(_x4) {
            return _setAsSelected.apply(this, arguments);
          }
          return setAsSelected;
        }();
        return UIMail;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UINotice.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './Layout_UINotice.ts', './ModuleDef.ts', './LobbyMgr.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, assetManager, ImageAsset, Texture2D, SpriteFrame, instantiate, Label, GameUILayers, Layout_UINotice, ModuleDef, LobbyMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Label = module.Label;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      Layout_UINotice = module.Layout_UINotice;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f77daLD8x1NZru6DcTUAOP/", "UINotice", undefined);

      // 使用tgx框架注册为基础模块
      var UINotice = exports('UINotice', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UINotice, _tgx$UIController);
        function UINotice() {
          return _tgx$UIController.call(this, "ui_notice/ui_notice", GameUILayers.POPUP, Layout_UINotice) || this;
        }
        var _proto = UINotice.prototype;
        _proto.onCreated = /*#__PURE__*/function () {
          var _onCreated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;
            var layout, tab, ret, i, notice, newTab;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  layout = this._layout;
                  this.onButtonEvent(layout.btnClose, function () {
                    _this.close();
                  });

                  // 获取标签页模板并清空原有标签
                  tab = layout.tabs.node.children[0];
                  layout.tabs.node.removeAllChildren();

                  // 初始化界面显示状态
                  layout.emptyTips.active = false; // 显示空提示
                  layout.lblContent.node.parent.active = false; // 隐藏文本内容区域
                  layout.sprContent.node.active = false; // 隐藏图片内容区域
                  layout.sprContent.spriteFrame = null; // 清空图片帧

                  // 调用大厅管理器获取公告数据
                  _context.next = 10;
                  return LobbyMgr.inst.rpc_GetNotice();
                case 10:
                  ret = _context.sent;
                  console.log(ret);
                  if (ret.isSucc && ret.res.noticeList.length) {
                    layout.emptyTips.active = false; // 有公告时隐藏空提示

                    // 遍历公告列表生成标签页
                    for (i = 0; i < ret.res.noticeList.length; ++i) {
                      notice = ret.res.noticeList[i];
                      newTab = instantiate(tab); // 实例化标签模板
                      layout.tabs.node.addChild(newTab); // 添加到标签容器
                      // 设置标签文本为公告标题
                      newTab.getChildByName('Label').getComponent(Label).string = notice.title;
                    }

                    // 刷新显示第一条公告内容
                    this.refreshContent(ret.res.noticeList[0]);
                  }

                  // 标签页切换事件监听
                  this.onToggleEvent(layout.tabs, function (checkedItem) {
                    // 获取选中标签的索引
                    var index = layout.tabs.toggleItems.indexOf(checkedItem);
                    if (index != -1) {
                      // 先隐藏所有内容区域
                      layout.lblContent.node.parent.active = false;
                      layout.sprContent.node.active = false;
                      // 获取对应索引的公告并刷新内容
                      var _notice = ret.res.noticeList[index];
                      _this.refreshContent(_notice);
                    }
                  });
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onCreated() {
            return _onCreated.apply(this, arguments);
          }
          return onCreated;
        }() // 刷新公告内容显示
        ;

        _proto.refreshContent = function refreshContent(notice) {
          var layout = this._layout;

          // 根据公告内容类型显示不同内容
          if (notice.contentType == 'text') {
            layout.lblContent.node.parent.active = true;
            // 正式环境应使用公告实际内容
            layout.lblContent.string = notice.content;
            // layout.lblContent.string = "欢迎新玩家test";  // 临时测试文本
          } else if (notice.contentType == 'image') {
            layout.sprContent.node.active = true;
            // 加载远程图片资源
            assetManager.loadRemote(notice.content, ImageAsset, function (err, img) {
              if (!err) {
                // 创建纹理和精灵帧并设置给图片组件
                var texture = new Texture2D();
                texture.image = img;
                var spriteFrame = new SpriteFrame();
                spriteFrame.texture = texture;
                layout.sprContent.spriteFrame = spriteFrame;
              }
            });
          }
        };
        return UINotice;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIRegister.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './ModuleDef.ts', './LanguageData.ts', './NetGameServer.ts', './NetUtil.ts', './UILogin.ts', './Layout_UIRegister.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GameUILayers, ModuleDef, LanguageData, loginNet, NetUtil, UIRegister, UILogin, Layout_UIRegister;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      loginNet = module.loginNet;
    }, function (module) {
      NetUtil = module.NetUtil;
    }, function (module) {
      UIRegister = module.UIRegister;
      UILogin = module.UILogin;
    }, function (module) {
      Layout_UIRegister = module.Layout_UIRegister;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7192dYJRKdCApOsVQ9u3G3f", "UIRegister", undefined);
      var UIRegister_Impl = exports('UIRegister_Impl', (_dec = tgx_class(ModuleDef.BASIC, UIRegister), _dec(_class = /*#__PURE__*/function (_UIRegister) {
        _inheritsLoose(UIRegister_Impl, _UIRegister);
        function UIRegister_Impl() {
          return _UIRegister.call(this, 'ui_register/ui_register', GameUILayers.POPUP, Layout_UIRegister) || this;
        }
        var _proto = UIRegister_Impl.prototype;
        _proto.onCreated = function onCreated() {
          var _this = this;
          var layout = this._layout;
          this.onButtonEvent(layout.btnBackToLogin, function () {
            _this.close();
            tgx.UIMgr.inst.showUI(UILogin);
          });
          this.onButtonEvent(layout.btnRegister, function () {
            if (layout.edtAccount.string.length < 4) {
              // 提示“用户名至少需要 4 个字符！”
              tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message17"));
              return;
            }
            if (layout.edtPassword.string.length < 6) {
              // 提示“密码至少需要 6 个字符！”
              tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message18"));
              return;
            }
            if (layout.edtPassword.string != layout.edtPasswordConfirm.string) {
              // 提示“两次密码不一样！”
              tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message19"));
              return;
            }
            _this.doRegister(layout.edtAccount.string, layout.edtPassword.string);
          });
        };
        _proto.doRegister = /*#__PURE__*/function () {
          var _doRegister = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(account, password) {
            var _this2 = this;
            var serverList, ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // 提示“注册中”
                  tgx.UIWaiting.show(LanguageData.getLangByID("tid_basic_wait_message7"));
                  _context.next = 3;
                  return NetUtil.getGameServerList();
                case 3:
                  serverList = _context.sent;
                  loginNet.createConnection(serverList);
                  _context.next = 7;
                  return loginNet.callApi('login/Register', {
                    account: account,
                    password: password
                  });
                case 7:
                  ret = _context.sent;
                  tgx.UIWaiting.hide();
                  if (ret.isSucc) {
                    _context.next = 12;
                    break;
                  }
                  if (ret.err.message == 'USER_HAS_BEEN_EXIST') {
                    // 提示“用户名已被使用！”
                    tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message20"));
                  }
                  return _context.abrupt("return");
                case 12:
                  // 提示“注册成功，返回登录”
                  tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message21")).onClick(function () {
                    _this2.close();
                    tgx.UIMgr.inst.showUI(UILogin, function (ui) {
                      ui.autoFill(account, password);
                    });
                  });
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function doRegister(_x, _x2) {
            return _doRegister.apply(this, arguments);
          }
          return doRegister;
        }();
        return UIRegister_Impl;
      }(UIRegister)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIRoomList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './GameUILayers.ts', './LobbyMgr.ts', './RoomListItem.ts', './SubGameMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Button, Component, instantiate, isValid, ModuleDef, GameUILayers, LobbyMgr, RoomListItem, SubGameMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
      instantiate = module.instantiate;
      isValid = module.isValid;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      LobbyMgr = module.LobbyMgr;
    }, function (module) {
      RoomListItem = module.RoomListItem;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec6, _class4;
      cclegacy._RF.push({}, "c4c771b7E5Jz5dO4uF23lMH", "UIRoomList", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PAGE_ITEM_NUM = 7;
      var PAGE_REFRESH_TIME = 3;
      var Layout_UIRoomList = exports('Layout_UIRoomList', (_dec = ccclass('Layout_UIRoomList'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Layout_UIRoomList, _Component);
        function Layout_UIRoomList() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tips", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPage", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        return Layout_UIRoomList;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var UIRoomList = exports('UIRoomList', (_dec6 = tgx_class(ModuleDef.BASIC), _dec6(_class4 = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIRoomList, _tgx$UIController);
        function UIRoomList() {
          var _this2;
          _this2 = _tgx$UIController.call(this, "ui_room_list/ui_room_list", GameUILayers.POPUP, Layout_UIRoomList) || this;
          _this2._curPage = 0;
          _this2._pageNum = 1;
          _this2._itemPrefab = void 0;
          _this2._waitingData = false;
          _this2._lastClickTime = Date.now();
          return _this2;
        }
        var _proto = UIRoomList.prototype;
        _proto.onCreated = function onCreated(params) {
          var _this3 = this;
          this.onButtonEvent(this.layout.btnClose, function () {
            _this3.close();
          });
          this.layout.contentRoot.active = false;
          this.layout.tips.active = true;
          this._itemPrefab = this.layout.contentRoot.children[0];
          this._itemPrefab.removeFromParent();
          this.updatePageLabelView();
          this.refreshRoomList(this._curPage, PAGE_ITEM_NUM);
          this.layout.schedule(function () {
            _this3.refreshRoomList(_this3._curPage, PAGE_ITEM_NUM);
          }, PAGE_REFRESH_TIME);
        };
        _proto.refreshRoomList = /*#__PURE__*/function () {
          var _refreshRoomList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(curPage, pageItemNum) {
            var ret, rooms, i, node, cache, item, maxSpectatorNum, spectatorNum;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this._waitingData == true)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  this._waitingData = true;
                  _context.next = 5;
                  return LobbyMgr.inst.rpc_GetRoomList(SubGameMgr.curGameType, curPage, pageItemNum);
                case 5:
                  ret = _context.sent;
                  this._waitingData = false;
                  if (ret.isSucc) {
                    _context.next = 9;
                    break;
                  }
                  return _context.abrupt("return");
                case 9:
                  if (isValid(this.node)) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return");
                case 11:
                  this._curPage = ret.res.curPage;
                  this._pageNum = ret.res.pageNum;
                  this.updatePageLabelView();
                  rooms = ret.res.rooms;
                  if (rooms) {
                    this.layout.contentRoot.children.forEach(function (v) {
                      v.active = false;
                    });
                    this.layout.tips.active = false;
                    this.layout.contentRoot.active = true;
                    for (i = 0; i < rooms.length; ++i) {
                      node = this.layout.contentRoot.children[i];
                      if (!node) {
                        node = instantiate(this._itemPrefab);
                        this.layout.contentRoot.addChild(node);
                      }
                      node.active = true;
                      cache = rooms[i];
                      item = node.getComponent(RoomListItem);
                      item.lblRoomId.string = cache.displayId;
                      item.lblName.string = cache.name;
                      item.lblPlayerNum.string = cache.playerNum + '/' + cache.maxPlayerNum;
                      maxSpectatorNum = cache.maxUserNum - cache.maxPlayerNum;
                      spectatorNum = cache.userNum - cache.playerNum;
                      item.lblSpectatorNum.string = spectatorNum + '/' + maxSpectatorNum;
                      item.needPassword = cache.needPassword;
                    }
                  }
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function refreshRoomList(_x, _x2) {
            return _refreshRoomList.apply(this, arguments);
          }
          return refreshRoomList;
        }();
        _proto.updatePageLabelView = function updatePageLabelView() {
          if (this._pageNum == 0) {
            this.layout.lblPage.string = '0/0';
          } else {
            this.layout.lblPage.string = this._curPage + 1 + '/' + this._pageNum;
          }
        };
        _proto.onBtnPrePage = function onBtnPrePage() {
          if (this._waitingData || Date.now() - this._lastClickTime < 1000) {
            return;
          }
          this._lastClickTime = Date.now();
          this._curPage--;
          if (this._curPage < 0) {
            this._curPage = 0;
          }
          this.refreshRoomList(this._curPage, PAGE_ITEM_NUM);
        };
        _proto.onBtnNextPage = function onBtnNextPage() {
          if (this._waitingData || Date.now() - this._lastClickTime < 1000) {
            return;
          }
          this._lastClickTime = Date.now();
          this._curPage++;
          if (this._curPage >= this._pageNum) {
            this._curPage = this._pageNum - 1;
          }
          this.refreshRoomList(this._curPage, PAGE_ITEM_NUM);
        };
        _createClass(UIRoomList, [{
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }]);
        return UIRoomList;
      }(tgx.UIController)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UISettings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './UserLocalCache.ts', './Layout_UISettings.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, profiler, GameUILayers, UserLocalCache, Layout_UISettings, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      profiler = module.profiler;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      UserLocalCache = module.UserLocalCache;
    }, function (module) {
      Layout_UISettings = module.Layout_UISettings;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "90beemTPcpAeabTBoyrZV7B", "UISettings", undefined);
      var UISettings = exports('UISettings', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UISettings, _tgx$UIController);
        function UISettings() {
          return _tgx$UIController.call(this, "ui_settings/ui_settings", GameUILayers.POPUP, Layout_UISettings) || this;
        }
        var _proto = UISettings.prototype;
        _proto.onCreated = function onCreated() {
          var _this = this;
          var layout = this._layout;
          layout.sliderMusic.progress = UserLocalCache.inst.musicVolume;
          layout.sliderEffect.progress = UserLocalCache.inst.effectVolume;
          layout.progressBarEffect.progress = layout.sliderEffect.progress;
          layout.progressBarMusic.progress = layout.sliderMusic.progress;
          this.onButtonEvent(layout.btnClose, function () {
            _this.close();
          });
          this.onSlideEvent(layout.sliderMusic, function () {
            //修改音量
            UserLocalCache.inst.musicVolume = layout.sliderMusic.progress;
            tgx.AudioMgr.inst.volumeMusic = UserLocalCache.inst.musicVolume;
            layout.progressBarMusic.progress = layout.sliderMusic.progress;
          });
          this.onSlideEvent(layout.sliderEffect, function () {
            //修改音效
            UserLocalCache.inst.effectVolume = layout.sliderEffect.progress;
            tgx.AudioMgr.inst.volumeEffect = UserLocalCache.inst.effectVolume;
            layout.progressBarEffect.progress = layout.sliderEffect.progress;
          });
          layout.chkFPS.isChecked = profiler.isShowingStats();
          this.onToggleEvent(layout.chkFPS, function () {
            if (layout.chkFPS.isChecked) {
              profiler.showStats();
            } else {
              profiler.hideStats();
            }
          });
        };
        return UISettings;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Layout_UITask.ts', './ModuleDef.ts', './GameUILayers.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, instantiate, Layout_UITask, ModuleDef, GameUILayers;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      Layout_UITask = module.Layout_UITask;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "289eeDdNfBEA6SrGqJC+Ea0", "UITask", undefined);
      var UITask = exports('UITask', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UITask, _tgx$UIController);
        function UITask() {
          var _this;
          _this = _tgx$UIController.call(this, "ui_task/ui_task", GameUILayers.POPUP, Layout_UITask) || this;
          _this.index = 0;
          return _this;
        }
        var _proto = UITask.prototype;
        _proto.onCreated = /*#__PURE__*/function () {
          var _onCreated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var layout, node;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  layout = this._layout;
                  this.onButtonEvent(layout.btnClose, function () {
                    _this2.close();
                  });
                  node = instantiate(layout.frameList[this.index]);
                  layout.frame.addChild(node);
                  this.onButtonEvent(layout.btnHelp, function () {
                    var node = instantiate(layout.canvasList[_this2.index]);
                    layout.canvas.addChild(node);
                  });
                  this.onToggleEvent(layout.tabs, function (checkedItem) {
                    _this2.index = layout.tabs.toggleItems.indexOf(checkedItem);
                    if (_this2.index != -1) {
                      layout.frame.removeAllChildren();
                      var _node = instantiate(layout.frameList[_this2.index]);
                      layout.frame.addChild(_node);
                    }
                  });
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onCreated() {
            return _onCreated.apply(this, arguments);
          }
          return onCreated;
        }();
        return UITask;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITipPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Vec3, find, UITransform, view, UIOpacity, tween, Tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Vec3 = module.Vec3;
      find = module.find;
      UITransform = module.UITransform;
      view = module.view;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ed42dWQeHNFnrS/uL1t/xgg", "UITipPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UITipPanel = exports('UITipPanel', (_dec = ccclass('UITipPanel'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UITipPanel, _Component);
        function UITipPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _this._transform = null;
          _this._opacity = null;
          _this._timer = -1;
          //定时器
          _this.isMove = false;
          _this.isQueue = false;
          _this.tipStr = '';
          _this._scale = new Vec3();
          return _this;
        }
        var _proto = UITipPanel.prototype;
        _proto.onEnable = function onEnable() {
          var _find;
          var canvasTran = (_find = find("Canvas")) == null ? void 0 : _find.getComponent(UITransform);
          var v = view.getVisibleSize();
          var s = v.height / canvasTran.width;
          this.node.scale = new Vec3(s, s, s);
          this._scale = new Vec3(s, s, s);
        };
        _proto.init = function init() {
          this._transform = this.node.getComponent(UITransform);
          this._opacity = this.node.getComponent(UIOpacity);
        };
        _proto.move = function move(delay) {
          var _this2 = this;
          if (delay === void 0) {
            delay = 1.5;
          }
          this._opacity.opacity = 0;
          this.isMove = true;
          this.isQueue = false;
          return tween(this.node).by(0, {
            scale: Vec3.ZERO
          }).to(.2, {
            scale: this._scale.clone().multiplyScalar(1.1)
          }, {
            onUpdate: function onUpdate(_, ratio) {
              _this2._opacity.opacity = ratio * 255;
            }
          }).to(.2, {
            scale: this._scale,
            position: Vec3.ZERO
          }, {
            onComplete: function onComplete() {
              _this2.isQueue = true;
              _this2.node.emit('queue');
            }
          }).delay(delay).to(.8, {
            position: new Vec3(0, this.node.position.y + 500, 0)
          }, {
            onUpdate: this.onFade.bind(this),
            onComplete: function onComplete() {
              _this2.isMove = false;
              _this2.isQueue = false;
              _this2.node.emit('over');
            }
          });
        };
        _proto.tip = function tip(text, delay) {
          var _this3 = this;
          if (delay === void 0) {
            delay = 1.5;
          }
          this._opacity.opacity = 0;
          this.node.position = new Vec3(0, -55);
          this.label.string = text;
          this._timer = setTimeout(function () {
            _this3._transform.width = _this3.label.getComponent(UITransform).width + 20;
          }, 16);
          tween(this.node).then(this.move(delay)).start();
        };
        _proto.reset = function reset(pos, delay) {
          if (delay === void 0) {
            delay = 1.5;
          }
          clearTimeout(this._timer);
          Tween.stopAllByTarget(this.node);
          this._opacity.opacity = 255;
          tween(this.node).to(.5, {
            position: pos
          }).then(this.move(delay)).start();
        };
        _proto.onDestroy = function onDestroy() {
          clearTimeout(this._timer);
        };
        _proto.onFade = function onFade(_, ratio) {
          this._opacity.opacity = 255 - 255 * ratio;
        };
        return UITipPanel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
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

System.register("chunks:///_virtual/UIUserInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUILayers.ts', './UserMgr.ts', './Layout_UIUserInfo.ts', './ModuleDef.ts', './LanguageData.ts', './ConfigMgr.ts', './headItem.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, instantiate, GameUILayers, UserMgr, Layout_UIUserInfo, ModuleDef, LanguageData, ConfigMgr, HeadItem;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      instantiate = module.instantiate;
    }, function (module) {
      GameUILayers = module.GameUILayers;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      Layout_UIUserInfo = module.Layout_UIUserInfo;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      LanguageData = module.LanguageData;
    }, function (module) {
      ConfigMgr = module.ConfigMgr;
    }, function (module) {
      HeadItem = module.HeadItem;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b74fbTboptEtood0Wzp+PQq", "UIUserInfo", undefined);
      var UIUserInfo = exports('UIUserInfo', (_dec = tgx_class(ModuleDef.BASIC), _dec(_class = /*#__PURE__*/function (_tgx$UIController) {
        _inheritsLoose(UIUserInfo, _tgx$UIController);
        function UIUserInfo() {
          var _this;
          _this = _tgx$UIController.call(this, "ui_user_info/ui_user_info", GameUILayers.POPUP, Layout_UIUserInfo) || this;
          _this._userInfo = void 0;
          _this._gender = undefined;
          _this._introduction = undefined;
          _this._visualId = undefined;
          return _this;
        }
        var _proto = UIUserInfo.prototype;
        _proto.onCreated = /*#__PURE__*/function () {
          var _onCreated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userInfo) {
            var _this2 = this;
            var layout;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this._userInfo = userInfo;

                  // let config = await UserMgr.inst.getBasicConfig();
                  // if (!config) {
                  //     // 提示“获取匹配失败，请稍后再试”
                  //     tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message22"));
                  //     this.close();
                  //     return;
                  // }
                  layout = this._layout;
                  this.onButtonEvent(layout.btnClose, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var ret;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!(_this2._gender != undefined || _this2._introduction != undefined || _this2._visualId != undefined)) {
                            _context.next = 7;
                            break;
                          }
                          _context.next = 3;
                          return UserMgr.inst.rpc_ModifyUserInfo(_this2._gender, _this2._introduction, _this2._visualId);
                        case 3:
                          ret = _context.sent;
                          if (ret.isSucc) {
                            // 提示“用户信息修改成功！”
                            tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message26"));
                          } else {
                            // 提示“用户信息修改失败！”
                            tgx.UIAlert.show(LanguageData.getLangByID("tid_basic_alert_message27"));
                          }
                          _context.next = 8;
                          break;
                        case 7:
                          _this2.close();
                        case 8:
                          _this2.close();
                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));
                  this.onToggleEvent(layout.toggleGenderOptions, function (v) {
                    var index = layout.toggleGenderOptions.toggleItems.indexOf(v);
                    if (index != _this2._userInfo.gender) {
                      _this2._gender = index;
                    }
                  });
                  this.initData();
                  director.on("onHeadClicked", this.onHeadClicked, this);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onCreated(_x) {
            return _onCreated.apply(this, arguments);
          }
          return onCreated;
        }();
        _proto.onDispose = function onDispose() {
          var layout = this._layout;
          director.off("onHeadClicked", this.onHeadClicked, this);
          UserMgr.inst.releaseHeadIcon(layout.sprHeadImg);
        };
        _proto.initData = function initData() {
          if (!this.node) {
            return;
          }
          var layout = this._layout;
          var bShow = !!this._userInfo;
          layout.lblName.node.active = bShow;
          layout.lblId.node.active = bShow;
          layout.lblGender.node.active = bShow;
          layout.toggleGenderOptions.node.active = bShow;
          if (!this._userInfo) {
            return;
          }
          UserMgr.inst.setUserIconAndName(this._userInfo.uid, layout.sprHeadImg);
          layout.lblName.string = this._userInfo.name; // 昵称
          layout.lblId.string = this._userInfo.uid; // ID
          //layout.lblGender.string = '性别：';
          var gender = this._userInfo.gender || 0;
          layout.toggleGenderOptions.toggleItems[gender].isChecked = true;
          this.initHead();
        };
        _proto.initHead = function initHead() {
          var headConfig = ConfigMgr.inst.getHeadConfig();
          var layout = this._layout;
          for (var i = 0; i < headConfig.length; i++) {
            var headData = headConfig[i];
            var prefabInstance = instantiate(layout.headItem);
            prefabInstance.getComponent(HeadItem).initData(headData);
            layout.heads.addChild(prefabInstance);
          }
        };
        _proto.onHeadClicked = /*#__PURE__*/function () {
          var _onHeadClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
            var layout, headNodes, i;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (data.id != this._userInfo.visualId) {
                    this._visualId = data.id;
                  }
                  layout = this._layout;
                  headNodes = layout.heads.children;
                  for (i = 0; i < headNodes.length; i++) {
                    headNodes[i].getComponent(HeadItem).updateSeclet(data.id);
                  }
                  UserMgr.inst.loadHeadIcon(data.id, layout.sprHeadImg);
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onHeadClicked(_x2) {
            return _onHeadClicked.apply(this, arguments);
          }
          return onHeadClicked;
        }();
        return UIUserInfo;
      }(tgx.UIController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserHead.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModuleDef.ts', './UserMgr.ts', './UIUserInfo.ts', './EventDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, director, Component, ModuleDef, UserMgr, UIUserInfo, BasicEventDef;
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
      Label = module.Label;
      Sprite = module.Sprite;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      UserMgr = module.UserMgr;
    }, function (module) {
      UIUserInfo = module.UIUserInfo;
    }, function (module) {
      BasicEventDef = module.BasicEventDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7569bDgeq9ANbPI3bFPvhFs", "UserHead", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UserHead = exports('UserHead', (_dec = ccclass('UserHead'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserHead, _Component);
        function UserHead() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblUserName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headImg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCoin", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UserHead.prototype;
        _proto.start = function start() {
          this.userInfoModified();
          director.on(BasicEventDef.EVENT_USER_INFO_MODIFIED, this.userInfoModified, this);
        };
        _proto.onDestroy = function onDestroy() {
          director.off(BasicEventDef.EVENT_USER_INFO_MODIFIED, this.userInfoModified, this);
        };
        _proto.onHeadImgClicked = /*#__PURE__*/function () {
          var _onHeadImgClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var info;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return UserMgr.inst.rpc_GetUserInfo(UserMgr.inst.uid);
                case 2:
                  info = _context.sent;
                  tgx.UIMgr.inst.showUI(UIUserInfo, null, null, info);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onHeadImgClicked() {
            return _onHeadImgClicked.apply(this, arguments);
          }
          return onHeadImgClicked;
        }();
        _proto.update = function update(deltaTime) {};
        _proto.onDisable = function onDisable() {
          UserMgr.inst.releaseHeadIcon(this.headImg);
        };
        _proto.userInfoModified = function userInfoModified() {
          UserMgr.inst.setUserIconAndName(UserMgr.inst.uid, this.headImg, this.lblUserName, ModuleDef.BASIC);
          if (this.lblUserId) this.lblUserId.string = UserMgr.inst.uid;
          if (this.lblCoin) this.lblCoin.string = UserMgr.inst.coin.toString();
        };
        return UserHead;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblUserName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblUserId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblCoin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserInfo.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d766f7lWRNMq4LITOE6ack+", "UserInfo", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserLocalCache.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f9112/lsP5MCbaVprYiC17V", "UserLocalCache", undefined);
      var KEY_ACCOUNT = 'user:account';
      var KEY_PASSWORD = 'user:password';
      var KEY_VOLUME_MUSIC = 'user:music_volume'; //背景音量
      var KEY_VOLUME_EFFECT = 'user:sound_volume'; //音效音量

      var KEY_ROLE_NAME = 'user:role_name:';
      var UserLocalCache = exports('UserLocalCache', /*#__PURE__*/function () {
        function UserLocalCache() {}
        var _proto = UserLocalCache.prototype;
        _proto.getRoleName = function getRoleName(uid) {
          return localStorage.getItem(KEY_ROLE_NAME + uid);
        };
        _proto.storeAccount = function storeAccount(account) {
          localStorage.setItem(KEY_ACCOUNT, account);
        };
        _proto.storePassword = function storePassword(password) {
          localStorage.setItem(KEY_PASSWORD, password);
        };
        _proto.storeRoleName = function storeRoleName(uid, name) {
          localStorage.setItem(KEY_ROLE_NAME + uid, name);
        };
        _createClass(UserLocalCache, [{
          key: "account",
          get: function get() {
            return localStorage.getItem(KEY_ACCOUNT);
          }
        }, {
          key: "password",
          get: function get() {
            return localStorage.getItem(KEY_PASSWORD);
          }
        }, {
          key: "musicVolume",
          get: function get() {
            return Number(localStorage.getItem(KEY_VOLUME_MUSIC) || '1.0');
          },
          set: function set(v) {
            localStorage.setItem(KEY_VOLUME_MUSIC, v.toString());
          }
        }, {
          key: "effectVolume",
          get: function get() {
            return Number(localStorage.getItem(KEY_VOLUME_EFFECT) || '1.0');
          },
          set: function set(v) {
            localStorage.setItem(KEY_VOLUME_EFFECT, v.toString());
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new UserLocalCache();
            }
            return this._inst;
          }
        }]);
        return UserLocalCache;
      }());
      UserLocalCache._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetGameServer.ts', './UserLocalCache.ts', './ConfigMgr.ts', './ResourceMgr.ts', './ModuleDef.ts', './EventDef.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, SpriteFrame, director, lobbyNet, UserLocalCache, ConfigMgr, ResourceMgr, ModuleDef, BasicEventDef;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteFrame = module.SpriteFrame;
      director = module.director;
    }, function (module) {
      lobbyNet = module.lobbyNet;
    }, function (module) {
      UserLocalCache = module.UserLocalCache;
    }, function (module) {
      ConfigMgr = module.ConfigMgr;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      BasicEventDef = module.BasicEventDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59ca1oX5UJCFb06mBeLn3RK", "UserMgr", undefined);
      var NAMES_PREFIX = ["神秘的", "勇敢的", "活泼的", "机智的", "冷静的", "优雅的", "狂野的", "聪明的", "忠诚的", "奔放的", "威严的", "敏捷的", "热情的", "坚定的", "宁静的", "强大的", "好奇的", "温和的", "活泼的", "无畏的"];
      var NAMES = ["晨风", "星辰", "云起", "月影", "风行", "寒霜", "炎舞", "秋叶", "碧落", "雷鸣", "流光", "雪见", "岩松", "梦露", "灵溪", "林风语", "寒江雪", "碧水寒", "烈焰行", "星辰变", "风中翼", "月下影", "雷霆怒", "梦无痕", "秋水寒", "流云飞", "雪中舞", "岩谷风", "梦境花", "灵山月"];
      var UserMgr = exports('UserMgr', /*#__PURE__*/function () {
        function UserMgr() {
          this._basicConfig = void 0;
          this._userInfo = {
            uid: '',
            name: '',
            visualId: 0,
            gender: 0,
            introduction: ''
          };
          this._roomId = void 0;
          this._userInfoMap = {};
        }

        /**
        * @en get basic config
        * @zh 获取基础配置
        */
        var _proto = UserMgr.prototype;
        _proto.getBasicConfig = /*#__PURE__*/
        function () {
          var _getBasicConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this._basicConfig) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return lobbyNet.callApi("lobby/GetBasicConfig", {});
                case 3:
                  ret = _context.sent;
                  if (ret.isSucc) {
                    this._basicConfig = ret.res;
                  }
                case 5:
                  return _context.abrupt("return", this._basicConfig);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function getBasicConfig() {
            return _getBasicConfig.apply(this, arguments);
          }
          return getBasicConfig;
        }();
        _proto.getRandomName = function getRandomName(randomNew) {
          if (randomNew === void 0) {
            randomNew = false;
          }
          if (!randomNew) {
            return UserLocalCache.inst.getRoleName(this.uid) || this.getRandomName(true);
          }
          var pre = NAMES_PREFIX[Math.floor(Math.random() * NAMES_PREFIX.length)];
          var name = pre + NAMES[Math.floor(Math.random() * NAMES.length)];
          UserLocalCache.inst.storeRoleName(this.uid, name);
          return name;
        };
        _proto.setUserInfo = function setUserInfo(info) {
          for (var _key in info) {
            this._userInfo[_key] = info[_key];
          }
          this._userInfoMap[this._userInfo.uid] = this._userInfo;
        };
        _proto.setUserIconAndName = /*#__PURE__*/function () {
          var _setUserIconAndName = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userId, sprIcon, lblName, bundleName) {
            var info;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!sprIcon && !lblName)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.next = 4;
                  return this.rpc_GetUserInfo(userId);
                case 4:
                  info = _context2.sent;
                  if (info) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.abrupt("return");
                case 7:
                  if (lblName && lblName.isValid) {
                    lblName.string = info.name || 'User_' + userId;
                  }
                  if (sprIcon && sprIcon.isValid) {
                    this.loadHeadIcon(info.visualId, sprIcon);
                  }
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function setUserIconAndName(_x, _x2, _x3, _x4) {
            return _setUserIconAndName.apply(this, arguments);
          }
          return setUserIconAndName;
        }();
        _proto.loadHeadIcon = function loadHeadIcon(visualId, headIcon) {
          if (!headIcon) {
            return;
          }
          var headUrl = ConfigMgr.inst.getHeadUrl(visualId);
          this.releaseHeadIcon(headIcon);
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.BASIC, headUrl + "/spriteFrame", SpriteFrame, function (error, resObj) {
            if (!error) {
              headIcon.spriteFrame = resObj;
              headIcon["isLoaded"] = true;
              resObj.addRef();
            }
          });
        };
        _proto.releaseHeadIcon = function releaseHeadIcon(headIcon) {
          if (!headIcon) {
            return;
          }
          if (!headIcon["isLoaded"]) {
            return;
          }
          if (headIcon.spriteFrame) {
            headIcon.spriteFrame.decRef();
            headIcon.spriteFrame = null;
          }
        };
        _proto.rpc_GetUserInfo = /*#__PURE__*/function () {
          var _rpc_GetUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(userId) {
            var info, ret;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  info = this._userInfoMap[userId];
                  if (!info) {
                    _context3.next = 3;
                    break;
                  }
                  return _context3.abrupt("return", info);
                case 3:
                  if (userId) {
                    _context3.next = 5;
                    break;
                  }
                  return _context3.abrupt("return", null);
                case 5:
                  _context3.next = 7;
                  return lobbyNet.callApi('lobby/GetUserInfo', {
                    uid: userId
                  });
                case 7:
                  ret = _context3.sent;
                  if (!(!ret.isSucc || !ret.res.infos.length)) {
                    _context3.next = 10;
                    break;
                  }
                  return _context3.abrupt("return", null);
                case 10:
                  info = ret.res.infos[0];
                  this._userInfoMap[info.uid] = info;
                  return _context3.abrupt("return", info);
                case 13:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function rpc_GetUserInfo(_x5) {
            return _rpc_GetUserInfo.apply(this, arguments);
          }
          return rpc_GetUserInfo;
        }();
        _proto.rpc_GetUserInfos = /*#__PURE__*/function () {
          var _rpc_GetUserInfos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userIds) {
            var uncachedIds, i, userId, ret, _i, info;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  uncachedIds = [];
                  for (i = 0; i < userIds.length; ++i) {
                    userId = userIds[i];
                    if (!this._userInfoMap[userId]) {
                      uncachedIds.push(userId);
                    }
                  }
                  if (!(uncachedIds.length == 0)) {
                    _context4.next = 4;
                    break;
                  }
                  return _context4.abrupt("return", this._userInfoMap);
                case 4:
                  _context4.next = 6;
                  return lobbyNet.callApi('lobby/GetUserInfo', {
                    uids: uncachedIds
                  });
                case 6:
                  ret = _context4.sent;
                  if (!(!ret.isSucc || !ret.res.infos.length)) {
                    _context4.next = 9;
                    break;
                  }
                  return _context4.abrupt("return", null);
                case 9:
                  for (_i = 0; _i < ret.res.infos.length; ++_i) {
                    info = ret.res.infos[_i];
                    this._userInfoMap[info.uid] = info;
                  }
                  return _context4.abrupt("return", this._userInfoMap);
                case 11:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function rpc_GetUserInfos(_x6) {
            return _rpc_GetUserInfos.apply(this, arguments);
          }
          return rpc_GetUserInfos;
        }();
        _proto.rpc_ModifyUserInfo = /*#__PURE__*/function () {
          var _rpc_ModifyUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(gender, introduction, visualId) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return lobbyNet.callApi("lobby/UpdateUserInfo", {
                    gender: gender,
                    introduction: introduction,
                    visualId: visualId
                  });
                case 2:
                  ret = _context5.sent;
                  if (ret.isSucc) {
                    if (gender != undefined) {
                      this._userInfo.gender = gender;
                    }
                    if (introduction != undefined) {
                      this._userInfo.introduction = introduction;
                    }
                    if (visualId != undefined) {
                      this._userInfo.visualId = visualId;
                    }
                    director.emit(BasicEventDef.EVENT_USER_INFO_MODIFIED);
                  }
                  return _context5.abrupt("return", ret);
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function rpc_ModifyUserInfo(_x7, _x8, _x9) {
            return _rpc_ModifyUserInfo.apply(this, arguments);
          }
          return rpc_ModifyUserInfo;
        }();
        _createClass(UserMgr, [{
          key: "uid",
          get: function get() {
            return this._userInfo.uid;
          }
        }, {
          key: "name",
          get: function get() {
            return this._userInfo.name;
          }
        }, {
          key: "visualId",
          get: function get() {
            return this._userInfo.visualId;
          }
        }, {
          key: "roomId",
          get: function get() {
            return this._roomId;
          }
        }, {
          key: "coin",
          get: function get() {
            return this._userInfo.coin || 0;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new UserMgr();
            }
            return this._inst;
          }
        }]);
        return UserMgr;
      }());
      UserMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0396a0lJ8FEwZcJpEbhEXCd", "Utils", undefined);
      var Utils = exports('Utils', /*#__PURE__*/function () {
        function Utils() {}
        Utils.formatDate = function formatDate(date) {
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          return year + "-" + Utils.formatNumber(month) + "-" + Utils.formatNumber(day);
        }

        // 手动补零替代padStart
        ;

        return Utils;
      }());
      Utils.formatNumber = function (num) {
        return num < 10 ? '0' + num : num.toString();
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebsocketClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs', './NetUtil.ts', './GameConst.ts', './Logger.ts', './index5.mjs'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, NetUtil, GameConst, Logger, TsrpcError;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      NetUtil = module.NetUtil;
    }, function (module) {
      GameConst = module.GameConst;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      TsrpcError = module.TsrpcError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "67da7zEqPJFxawvSdyc0u7L", "WebsocketClient", undefined);
      var WebsocketClient = exports('WebsocketClient', /*#__PURE__*/function () {
        function WebsocketClient(name) {
          var _this = this;
          this._conn = null;
          this._serverUrl = '';
          this._eventHandlers = {};
          this._handlers = [];
          this._latencyCache = [];
          this._sortedLatencyCache = [];
          this._beginLatencyIndex = 0;
          this._serverTimestamp = 0;
          //服务器时间戳
          // latency in ms
          this._latency = 0;
          this._name = "";
          this._lastDisconnectReason = void 0;
          this._internal = -1;
          this._tickInterval = -1;
          this._name = name;
          this.listenMsg("Pong", function (msg) {
            _this._serverTimestamp = msg.serverTimestamp;
            var len = _this._latencyCache.length;
            var latency = Math.ceil((Date.now() - msg.timestamp) / 2);
            if (_this._latencyCache.length == 12) {
              _this._latencyCache[_this._beginLatencyIndex] = latency;
              _this._beginLatencyIndex = _this._beginLatencyIndex++ % 12;
            } else {
              _this._latencyCache.push(latency);
            }
            if (len < 3) {
              _this._latencyCache.push(latency);
              _this._latency = latency;
            } else {
              var _this$_sortedLatencyC;
              var totalLatency = 0;
              _this._sortedLatencyCache.length = 0;
              (_this$_sortedLatencyC = _this._sortedLatencyCache).push.apply(_this$_sortedLatencyC, _this._latencyCache);
              _this._sortedLatencyCache.sort(function (a, b) {
                return a - b;
              });
              //去除头尾（最高和最低，消除振荡）
              for (var i = 1; i < _this._sortedLatencyCache.length - 1; ++i) {
                totalLatency += _this._sortedLatencyCache[i];
              }
              _this._latency = Math.ceil(totalLatency / (_this._sortedLatencyCache.length - 2));
            }
            _this.startTickServerTime();
          });
        }
        var _proto = WebsocketClient.prototype;
        _proto.createConnection = function createConnection(serverUrls) {
          var _this2 = this;
          if (this._conn) {
            this._conn.disconnect(1000, 'switch_server');
          }
          var index = Math.floor(serverUrls.length * Math.random());
          var serverUrl = serverUrls[index];
          this._serverUrl = serverUrl;
          this._conn = NetUtil.createWebsocketClient(this._serverUrl);
          this._conn.flows.postDisconnectFlow.push(function (v) {
            _this2._lastDisconnectReason = v;
            _this2._dispatchEvent(WebsocketClient.EVENT_DISCONNECTED, [v, _this2]);
            return v;
          });
          this._conn.flows.postConnectFlow.push(function (v) {
            _this2._dispatchEvent(WebsocketClient.EVENT_CONNECTED, [v, _this2]);
            _this2.startPing();
            return v;
          });

          /*
          //for message debug.
          this._conn.flows.preRecvMsgFlow.push( v => {
              if(v.msgName.indexOf("game/") != 0){
                  console.log(v);   
              }
              return v;
          });
          */

          for (var i = 0; i < this._handlers.length; ++i) {
            this._conn.listenMsg(this._handlers[i].msg, this._handlers[i].handler);
          }
          this.startPing();
        };
        _proto.on = function on(event, func, thisArg) {
          if (thisArg) {
            func.bind(thisArg);
          }
          var handlers = this._eventHandlers[event] || [];
          handlers.push({
            event: event,
            func: func,
            thisArg: thisArg
          });
          this._eventHandlers[event] = handlers;
        };
        _proto.off = function off(event, func, thisArg) {
          var handlers = this._eventHandlers[event];
          if (handlers) {
            for (var i = 0; i < handlers.length; ++i) {
              var item = handlers[i];
              if (item.func === func && item.thisArg == thisArg) {
                handlers.splice(i, 1);
                return;
              }
            }
          }
        };
        _proto._dispatchEvent = function _dispatchEvent(event, args) {
          var handlers = this._eventHandlers[event];
          if (handlers) {
            for (var i = 0; i < handlers.length; ++i) {
              var item = handlers[i];
              item.func.apply(item.thisArg, args);
            }
          }
        };
        _proto.startPing = function startPing() {
          var _this3 = this;
          this.sendMsg('Ping', {
            timestamp: Date.now()
          });
          clearInterval(this._internal);
          this._internal = setInterval(function () {
            if (_this3._conn.isConnected) {
              //console.log('ping');
              _this3.sendMsg('Ping', {
                timestamp: Date.now()
              });
            }
          }, 5000);
        };
        _proto.startTickServerTime = function startTickServerTime() {
          var _this4 = this;
          clearInterval(this._tickInterval);
          this._tickInterval = setInterval(function () {
            _this4._serverTimestamp += 1000;
          }, 1000);
        };
        _proto.listenMsg = function listenMsg(msgName, func, thisArg) {
          var _this$_conn;
          var handler = func;
          if (thisArg) {
            handler = func.bind(thisArg);
          }
          // 添加日志装饰
          var logHandler = this.withLog(msgName, handler);
          this._handlers.push({
            msg: msgName,
            func: func,
            handler: handler,
            thisArg: thisArg
          });
          (_this$_conn = this._conn) == null || _this$_conn.listenMsg(msgName, logHandler);
        };
        _proto.withLog = function withLog(msgName, handler) {
          return function () {
            for (var _len = arguments.length, msgs = new Array(_len), _key = 0; _key < _len; _key++) {
              msgs[_key] = arguments[_key];
            }
            if (GameConst.openNetworkLog && msgName != "Pong") {
              console.log(Logger.getDateString() + '[recvMsg]:', JSON.stringify(msgs));
            }
            return handler.apply(0, msgs);
          };
        };
        _proto.unlistenMsg = function unlistenMsg(msgName, func, thisArg) {
          for (var i = 0; i < this._handlers.length; ++i) {
            var item = this._handlers[i];
            if (item.msg === msgName && item.func === func || item.thisArg == thisArg) {
              var _this$_conn2;
              this._handlers.splice(i, 1);
              (_this$_conn2 = this._conn) == null || _this$_conn2.unlistenMsg(msgName, item.handler);
              return;
            }
          }
        };
        _proto.unlistenMsgAll = function unlistenMsgAll(msgName) {
          var _this$_conn3;
          for (var i = this._handlers.length - 1; i >= 0; --i) {
            var item = this._handlers[i];
            if (item.msg === msgName) {
              this._handlers.splice(i, 1);
            }
          }
          (_this$_conn3 = this._conn) == null || _this$_conn3.unlistenMsgAll(msgName);
        };
        _proto.unlistenMsgAllByThis = function unlistenMsgAllByThis(thisArg) {
          for (var i = 0; i < this._handlers.length; ++i) {
            var item = this._handlers[i];
            if (item.thisArg == thisArg) {
              var _this$_conn4;
              this._handlers.splice(i, 1);
              var msgKey = item.msg;
              (_this$_conn4 = this._conn) == null || _this$_conn4.unlistenMsg(msgKey, item.handler);
              i--;
            }
          }
        };
        _proto.callApi = /*#__PURE__*/function () {
          var _callApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(apiName, req, options) {
            var _this$_conn5;
            var _this$_conn6, callApiReturn;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!((_this$_conn5 = this._conn) != null && _this$_conn5.isConnected)) {
                    _context.next = 7;
                    break;
                  }
                  if (GameConst.openNetworkLog) {
                    console.log(Logger.getDateString() + '[callApi]:', apiName + "," + JSON.stringify(req));
                  }
                  _context.next = 4;
                  return (_this$_conn6 = this._conn) == null ? void 0 : _this$_conn6.callApi(apiName, req, options);
                case 4:
                  callApiReturn = _context.sent;
                  if (callApiReturn) {
                    if (GameConst.openNetworkLog) {
                      console.log(Logger.getDateString() + '[ApiRes]:', apiName + "," + JSON.stringify(callApiReturn));
                    }
                  }
                  return _context.abrupt("return", callApiReturn);
                case 7:
                  return _context.abrupt("return", {
                    isSucc: false,
                    err: new TsrpcError('Not connected', {
                      code: 'NotConnected'
                    })
                  });
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function callApi(_x, _x2, _x3) {
            return _callApi.apply(this, arguments);
          }
          return callApi;
        }();
        _proto.sendMsg = function sendMsg(msgName, msg, options) {
          var _this$_conn7;
          if ((_this$_conn7 = this._conn) != null && _this$_conn7.isConnected) {
            var _this$_conn8;
            if (GameConst.openNetworkLog && msgName != "Ping") {
              console.log(Logger.getDateString() + '[sendMsg]:', msgName + "," + JSON.stringify(msg));
            }
            return (_this$_conn8 = this._conn) == null ? void 0 : _this$_conn8.sendMsg(msgName, msg, options);
          }
          return {
            isSucc: false,
            err: new TsrpcError('Not connected', {
              code: 'NotConnected'
            })
          };
        };
        _proto.ensureConnected = /*#__PURE__*/function () {
          var _ensureConnected = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._connect();
                case 2:
                  ret = _context2.sent;
                  return _context2.abrupt("return", ret);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function ensureConnected() {
            return _ensureConnected.apply(this, arguments);
          }
          return ensureConnected;
        }();
        _proto.disconnect = function disconnect(code, reason) {
          var _this$_conn9;
          console.log("disconnect " + this._name + "|code=" + code + "|reason=" + reason);
          this._lastDisconnectReason = {
            code: code,
            reason: reason
          };
          (_this$_conn9 = this._conn) == null || _this$_conn9.disconnect(code, reason);
          clearInterval(this._internal);
          clearInterval(this._tickInterval);
          this._internal = -1;
          this._tickInterval = -1;
          this._dispatchEvent(WebsocketClient.EVENT_DISCONNECTED, [this._lastDisconnectReason, this]);
        };
        _proto._connect = /*#__PURE__*/function () {
          var _connect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this$_conn10;
            var resConnect;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // Connect
                  console.log("connect " + this._name);
                  _context3.next = 3;
                  return (_this$_conn10 = this._conn) == null ? void 0 : _this$_conn10.connect();
                case 3:
                  resConnect = _context3.sent;
                  if (resConnect.isSucc) {
                    _context3.next = 6;
                    break;
                  }
                  return _context3.abrupt("return", {
                    isSucc: false,
                    err: {
                      message: resConnect.errMsg
                    }
                  });
                case 6:
                  return _context3.abrupt("return", {
                    isSucc: true
                  });
                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function _connect() {
            return _connect2.apply(this, arguments);
          }
          return _connect;
        }();
        _createClass(WebsocketClient, [{
          key: "conn",
          get: function get() {
            return this._conn;
          }
        }, {
          key: "latency",
          get: function get() {
            return this._latency;
          }
        }, {
          key: "lastDisconnectReason",
          get: function get() {
            return this._lastDisconnectReason;
          }
        }, {
          key: "type",
          get: function get() {
            return 'websocket';
          }
        }, {
          key: "serverTimestamp",
          get: function get() {
            return this._serverTimestamp;
          }
        }, {
          key: "isConnected",
          get: function get() {
            if (!this._conn) {
              return false;
            }
            return this._conn.isConnected;
          }
        }, {
          key: "serverUrl",
          get: function get() {
            return this._serverUrl;
          }
        }]);
        return WebsocketClient;
      }());
      WebsocketClient.EVENT_DISCONNECTED = 'WebsocketClient.EVENT_DISCONNECTED';
      WebsocketClient.EVENT_CONNECTED = 'WebsocketClient.EVENT_CONNECTED';
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_basic', 'chunks:///_virtual/module_basic'); 
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