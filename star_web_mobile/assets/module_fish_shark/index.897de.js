System.register("chunks:///_virtual/AdapterHelper.ts", ['cc', './DialogBase.ts'], function (exports) {
  var cclegacy, _decorator, log;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
    }, null],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "d2b64QxM8JPoYOwDs4OCjXi", "AdapterHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AdapterHelper = exports('default', (_dec = ccclass('AdapterHelper'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function AdapterHelper() {}
        AdapterHelper.fixApdater = function fixApdater() {
          log("v3.6没找到接口修改 fitHeight、fitWidth, 先在项目里写死fitHeight=true");
          return;
        };
        return AdapterHelper;
      }(), _class2.winSizeWidth = void 0, _class2.winSizeHeiht = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Astar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "2e03afqWKlLu53MZgsJPqkY", "Astar", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AstarGridType = exports('AstarGridType', /*#__PURE__*/function (AstarGridType) {
        AstarGridType[AstarGridType["Hider"] = 0] = "Hider";
        AstarGridType[AstarGridType["Normal"] = 1] = "Normal";
        AstarGridType[AstarGridType["End"] = 2] = "End";
        return AstarGridType;
      }({}));
      var AstarGrid = exports('AstarGrid', (_dec = ccclass('Astar'), _dec(_class = function AstarGrid() {
        this.x = 0;
        this.y = 0;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.type = 0;
        this.parent = null;
      }) || _class));
      var Astar = exports('Astar', /*#__PURE__*/function (_Component) {
        _inheritsLoose(Astar, _Component);
        function Astar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.mapW = 24;
          // 横向格子数量
          _this.mapH = 13;
          // 纵向格子数量
          _this.is8dir = false;
          // 是否8方向寻路   //4方向:代表只能走上下左右 8方向:代表可以走上下左右，左上，右上，左下，右下
          _this.openList = [];
          _this.closeList = [];
          _this.path = [];
          _this.gridsList = [];
          return _this;
        }
        var _proto = Astar.prototype;
        _proto.onLoad = function onLoad() {}

        /**
         * @param mapW 宽格子数
         * @param mapH 高格子数
         * @param is8dir 是8方向(上，下，左，右，左上，右上，左下，右下)寻路还是4方向(上，下，左，右)
         */;
        _proto.init = function init(mapW, mapH, is8dir) {
          if (is8dir === void 0) {
            is8dir = false;
          }
          this.mapW = mapW;
          this.mapH = mapH;
          this.is8dir = is8dir;
          this.initMap();
        }

        /**
         * 初始化map的格子
         */;
        _proto.initMap = function initMap() {
          this.openList = [];
          this.closeList = [];
          this.path = [];
          // 初始化格子二维数组
          this.gridsList = new Array(this.mapW + 1);
          for (var col = 0; col < this.gridsList.length; col++) {
            this.gridsList[col] = new Array(this.mapH + 1);
          }
          for (var _col = 0; _col <= this.mapW; _col++) {
            for (var row = 0; row <= this.mapH; row++) {
              this.addGrid(_col, row, AstarGridType.Normal);
            }
          }
        }

        /**
         * 创建一个格子到地图
         * @param x 
         * @param y 
         * @param type 
         */;
        _proto.addGrid = function addGrid(x, y, type) {
          if (type === void 0) {
            type = AstarGridType.Hider;
          }
          var grid = new AstarGrid();
          grid.x = x;
          grid.y = y;
          grid.type = type;
          this.gridsList[x][y] = grid;
        }

        /**
         * 设置格子类型
         * @param x 
         * @param y 
         * @param type 
         */;
        _proto.setGridType = function setGridType(x, y, type) {
          var curGrid = this.gridsList[x][y];
          curGrid.type = type;
        }

        /**
         * 开始搜索路径
         * @param startPos  
         * @param endPos 
         */;
        _proto.findPath = function findPath(startPos, endPos, callback) {
          if (callback === void 0) {
            callback = null;
          }
          var startGrid = this.gridsList[startPos.x][startPos.y];
          this.openList.push(startGrid);
          var curGrid = this.openList[0];
          while (this.openList.length > 0 && curGrid.type != AstarGridType.End) {
            // 每次都取出f值最小的节点进行查找
            curGrid = this.openList[0];
            if (curGrid.type == AstarGridType.End) {
              // Logger.log(this,"find path success.");
              this.generatePath(curGrid);
              if (callback) {
                callback(this.path);
              }
              return;
            }
            for (var i = -1; i <= 1; i++) {
              for (var j = -1; j <= 1; j++) {
                if (i != 0 || j != 0) {
                  var col = curGrid.x + i;
                  var row = curGrid.y + j;
                  if (col >= 0 && row >= 0 && col <= this.mapW && row <= this.mapH && this.gridsList[col][row].type != AstarGridType.Hider && this.closeList.indexOf(this.gridsList[col][row]) < 0) {
                    if (this.is8dir) {
                      // 8方向 斜向走动时要考虑相邻的是不是障碍物
                      if (this.gridsList[col - i][row].type == AstarGridType.Hider || this.gridsList[col][row - j].type == AstarGridType.Hider) {
                        continue;
                      }
                    } else {
                      // 四方形行走
                      if (Math.abs(i) == Math.abs(j)) {
                        continue;
                      }
                    }
                    // 计算g值
                    var g = curGrid.g + Math.floor(Math.sqrt(Math.pow(i * 10, 2)) + Math.pow(j * 10, 2));
                    if (this.gridsList[col][row].g == 0 || this.gridsList[col][row].g > g) {
                      this.gridsList[col][row].g = g;
                      // 更新父节点
                      this.gridsList[col][row].parent = curGrid;
                    }
                    // 计算h值 manhattan估算法
                    this.gridsList[col][row].h = Math.abs(endPos.x - col) + Math.abs(endPos.y - row);
                    // 更新f值
                    this.gridsList[col][row].f = this.gridsList[col][row].g + this.gridsList[col][row].h;
                    // 如果不在开放列表里则添加到开放列表里
                    if (this.openList.indexOf(this.gridsList[col][row]) < 0) {
                      this.openList.push(this.gridsList[col][row]);
                    }
                    // // 重新按照f值排序（升序排列)
                  }
                }
              }
            }
            // 遍历完四周节点后把当前节点加入关闭列表
            this.closeList.push(curGrid);
            // 从开放列表把当前节点移除
            this.openList.splice(this.openList.indexOf(curGrid), 1);
            if (this.openList.length <= 0) {
              // Logger.log(this,"find path failed.");
              this.path = [];
              if (callback) {
                callback(this.path);
              }
              break;
            }
            // 重新按照f值排序（升序排列)
            this.openList.sort(function (x, y) {
              return x.f - y.f;
            });
          }
        }

        /**
         * 生成路径
         * @param grid 
         */;
        _proto.generatePath = function generatePath(grid) {
          this.path.push(grid);
          while (grid.parent) {
            grid = grid.parent;
            this.path.push(grid);
          }
          return this.path;
        };
        _proto.onDestroy = function onDestroy() {};
        return Astar;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BitUtil.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8a5aa2Nwc9Oaru+vA7wtNBf", "BitUtil", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BitUtil = exports('default', (_dec = ccclass('BitUtil'), _dec(_class = /*#__PURE__*/function () {
        function BitUtil() {}
        //index是二进制从右到左
        BitUtil.isBitSet = function isBitSet(value, index) {
          var str = value.toString(2);
          if (parseInt(str[str.length - 1 - index]) == 1) {
            return true;
          }
          return false;
        }

        //从右到左计算
        ;

        BitUtil.setBitValue = function setBitValue(value, index) {
          var newValue = value;
          var str = value.toString(2);
          var newStr = "";
          var maxIndex = Math.max(str.length - 1, index);
          for (var i = 0; i <= maxIndex; i++) {
            if (index == i) {
              newStr = "1" + newStr;
            } else {
              if (str[i] == undefined) {
                newStr = "0" + newStr;
              } else {
                newStr = str[i] + newStr;
              }
            }
          }
          newValue = parseInt(newStr, 2);
          return newValue;
        };
        BitUtil.clearBitValue = function clearBitValue(value, index) {
          var newValue = value;
          var str = value.toString(2);
          var newStr = "";
          for (var i = str.length - 1; i >= 0; i--) {
            if (index == str.length - 1 - i) {
              newStr = "0" + newStr;
            } else {
              newStr = str[i] + newStr;
            }
          }
          newValue = parseInt(newStr, 2);
          return newValue;
        };
        return BitUtil;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BulletManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishBulletBase.ts', './MathUtils.ts', './CannonManager.ts', './MoveHelper.ts', './GameMusicHelper.ts', './FishUI.ts', './CommonTips.ts', './NetGameServer.ts', './SubGameMgr.ts', './FishSharkGameMgr.ts', './Logger.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Vec3, Vec2, Node, UITransform, instantiate, sys, NodePool, Component, FishBulletBase, MathUtils, CannonManager, MoveHelper, GameMusicHelper, FishUI, CommonTips, gameNet, SubGameMgr, FishSharkGameMgr, Logger, LanguageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Node = module.Node;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      sys = module.sys;
      NodePool = module.NodePool;
      Component = module.Component;
    }, function (module) {
      FishBulletBase = module.default;
    }, function (module) {
      MathUtils = module.default;
    }, function (module) {
      CannonManager = module.default;
    }, function (module) {
      MoveHelper = module.MoveHelper;
    }, function (module) {
      GameMusicHelper = module.default;
    }, function (module) {
      FishUI = module.default;
    }, function (module) {
      CommonTips = module.default;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      FishSharkGameMgr = module.FishSharkGameMgr;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _class2, _class3, _descriptor, _class4;
      cclegacy._RF.push({}, "bd0650LC2BJga6gddLyCbfq", "BulletManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var waitBackBullet = exports('waitBackBullet', function waitBackBullet(bulletID, bulletLevel, startPos, endPos) {
        this.bulletID = void 0;
        this.bulletLevel = void 0;
        this.startPos = void 0;
        this.endPos = void 0;
        // 将传入的参数赋值给类的属性
        this.bulletID = bulletID;
        this.bulletLevel = bulletLevel;
        this.startPos = startPos;
        this.endPos = endPos;
      });
      var BulletManager = exports('default', (_dec = ccclass('BulletManager'), _dec2 = property({
        type: [Prefab]
      }), _dec(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BulletManager, _Component);
        function BulletManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bulletPrefabList", _descriptor, _assertThisInitialized(_this));
          _this.bulletPool = [];
          _this.bulletList = [];
          _this.bulletMoveSpeed = 30;
          _this.bulletMoveSpeed1 = 800;
          _this._vec3Cache = void 0;
          _this._vec2Cache = void 0;
          _this._fireTime = 0;
          _this._fireTimeNew = void 0;
          _this._bulletID = 0;
          _this._waitBackBulletMap = new Map();
          return _this;
        }
        var _proto = BulletManager.prototype;
        _proto.onLoad = function onLoad() {
          this._vec3Cache = new Vec3();
          this._vec2Cache = new Vec2();
          BulletManager.instance = this;
          this.node.on(Node.EventType.TOUCH_START, this.onShootBullet, this);
        };
        _proto.start = function start() {
          if (SubGameMgr.gameMgr) {
            var initData = SubGameMgr.gameMgr.getInitData();
            var lastBulletId = initData[3];
            this._bulletID = lastBulletId;
          }
          gameNet.listenMsg("fish/FireResult", this.onNet_FireResult, this);
        };
        _proto.update = function update(deltaTime) {
          this.checkMoveBulletNew(deltaTime);
        };
        _proto.checkMoveBulletNew = function checkMoveBulletNew(deltaTime) {
          for (var i = this.bulletList.length - 1; i >= 0; i--) {
            var bullet = this.bulletList[i];
            var isMoving = MoveHelper.moveNodeNew(bullet.node, this.bulletMoveSpeed1, deltaTime);
            if (!isMoving) {
              this.bulletList.splice(i, 1);
              this.destroyBullet(bullet);
            }
          }
        };
        _proto.onShootBullet = function onShootBullet(event) {
          var needCoin = FishSharkGameMgr.inst.getBulletCoin(CannonManager.instance.cannonType);
          if (needCoin == -1) {
            Logger.trace("等待配置返回");
            return;
          }
          //TOUCH_START 在Editor上，连续触发2次，导致发2次炮弹bug
          // if(sys.platform == "EDITOR_PAGE"){
          this._fireTimeNew = new Date().getTime();
          if (this._fireTimeNew - this._fireTime < 100) {
            return;
          }
          this._fireTime = this._fireTimeNew;
          // }

          var tran = this.node.getComponent(UITransform);
          var location = event.getUILocation();
          this._vec3Cache.x = location.x;
          this._vec3Cache.y = location.y;
          this._vec3Cache.z = 0;
          tran.convertToNodeSpaceAR(this._vec3Cache, this._vec3Cache);
          var localP = new Vec2(this._vec3Cache.x, this._vec3Cache.y);
          FishUI.instance.playClickEffect(localP);

          //判断金钱是否足够

          if (FishUI.instance.score >= needCoin) {
            var bulletID = this.generateBulletID();
            this.sendFire(CannonManager.instance.cannonType, bulletID);
            this._vec3Cache = CannonManager.instance.getCannonPosition();
            this._waitBackBulletMap.set(bulletID, new waitBackBullet(bulletID, CannonManager.instance.cannonType, new Vec3(this._vec3Cache.x, this._vec3Cache.y, 0), new Vec3(localP.x, localP.y, 0)));
            //旋转炮台
            CannonManager.instance.rotateCannon(location);
          } else {
            CommonTips.showMsg(LanguageData.getLangByID("fish_shark_1"));
          }
        };
        _proto.createBullet = function createBullet(data) {
          var rad = MathUtils.p2pRad(new Vec2(this._vec3Cache.x, this._vec3Cache.y), new Vec2(data.endPos.x, data.endPos.y));
          var rot = MathUtils.radiansToDegrees(rad);
          var bullet = this.createBulletNode(CannonManager.instance.cannonType, data.bulletID);
          bullet.targetP = new Vec2(data.endPos.x, data.endPos.y);
          this.node.addChild(bullet.node);
          bullet.node.setPosition(CannonManager.instance.getCannonPosition());
          this._vec3Cache.x = 1;
          this._vec3Cache.y = 1;
          this._vec3Cache.y = 1;
          Vec3.multiplyScalar(this._vec3Cache, this._vec3Cache, 2);
          bullet.node.setScale(this._vec3Cache);
          bullet.node.angle = rot;
          bullet.moveAngle = rot;
          this.bulletList.push(bullet);
          GameMusicHelper.playFire();
        };
        _proto.createBulletNode = function createBulletNode(bulletType, bulletID) {
          var bulletNode;
          if (this.bulletPool[bulletType] && this.bulletPool[bulletType].size() > 0) {
            bulletNode = this.bulletPool[bulletType].get();
          } else {
            bulletNode = instantiate(this.bulletPrefabList[bulletType - 1]);
          }
          bulletNode.getComponent(FishBulletBase).bulletType = bulletType;
          bulletNode.getComponent(FishBulletBase).bulletId = bulletID;
          return bulletNode.getComponent(FishBulletBase);
        };
        _proto.killBullet = function killBullet(bullet) {
          var index = this.bulletList.indexOf(bullet);
          if (index >= 0) {
            this.bulletList.splice(index, 1);
            this.destroyBullet(bullet);
          }
        }
        //生成子弹ID
        ;

        _proto.generateBulletID = function generateBulletID() {
          this._bulletID++;
          return this._bulletID;
        }
        /**发射子弹 */;
        _proto.sendFire = function sendFire(bulletLevel, bulletId) {
          var msg = {};
          msg.bulletLevel = bulletLevel;
          msg.bulletId = bulletId.toString();
          gameNet.sendMsg('fish/Fire', msg);
        }
        /**打中鱼 */;
        _proto.sendHitFish = function sendHitFish(fishId, bulletId, bulletLevel) {
          var msg = {};
          msg.fishId = fishId.toString();
          msg.bulletId = bulletId.toString();
          msg.bulletLevel = bulletLevel;
          gameNet.sendMsg('fish/HitFish', msg);
        };
        _proto.destroyBullet = function destroyBullet(bullet) {
          //临时代码，因为回收在内存卡顿。后面在优化 2023-2-10
          if (sys.platform == "EDITOR_PAGE") {
            bullet.node.destroy();
            return;
          }
          if (!this.bulletPool[bullet.bulletType]) {
            this.bulletPool[bullet.bulletType] = new NodePool();
          }
          this.bulletPool[bullet.bulletType].put(bullet.node);
        };
        _proto.onNet_FireResult = function onNet_FireResult(msg) {
          if (msg.isSuccess) {
            console.log("FireResult bulletId:" + msg.bulletId);
            FishUI.instance.score = Number(msg.coins);
            FishUI.instance.refreshScore();
            if (this._waitBackBulletMap.has(Number(msg.bulletId))) {
              this.createBullet(this._waitBackBulletMap.get(Number(msg.bulletId)));
            } else {
              Logger.error("FireResult not found:" + msg.bulletId);
            }
          } else {
            Logger.error("FireResult:" + msg.reason);
          }
          this._waitBackBulletMap["delete"](Number(msg.bulletId));
        };
        _proto.onDestroy = function onDestroy() {
          BulletManager.instance = null;
          gameNet.unlistenMsgAllByThis(this);
        };
        return BulletManager;
      }(Component), _class4.instance = null, _class4), _descriptor = _applyDecoratedDescriptor(_class3.prototype, "bulletPrefabList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CannonManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MathUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Vec3, UITransform, Vec2, Sprite, Component, MathUtils;
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
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      MathUtils = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "d03d3+gnyNBBr4FnRBr2PjI", "CannonManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CannonManager = exports('default', (_dec = ccclass('CannonManager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: [SpriteFrame]
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CannonManager, _Component);
        function CannonManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "view", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cannonSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          _this.cannonType = 1;
          _this._vec3Cache = void 0;
          return _this;
        }
        var _proto = CannonManager.prototype;
        _proto.onLoad = function onLoad() {
          this._vec3Cache = new Vec3();
          CannonManager.instance = this;
          this.node.parent.on(Node.EventType.MOUSE_MOVE, this.onMeMove.bind(this));
          this.refreshCannon();
        };
        _proto.onMeMove = function onMeMove(event) {
          this.rotateCannon(event.getUILocation());
        };
        _proto.rotateCannon = function rotateCannon(uilocation) {
          var location = uilocation;
          this._vec3Cache.x = location.x;
          this._vec3Cache.y = location.y;
          this._vec3Cache.z = 0;
          var tran = this.node.getComponent(UITransform);
          tran.convertToNodeSpaceAR(this._vec3Cache, this._vec3Cache);
          var localTouch = new Vec2(this._vec3Cache.x, this._vec3Cache.y);
          this.view.getPosition(this._vec3Cache);
          var rad = MathUtils.p2pRad(new Vec2(this._vec3Cache.x, this._vec3Cache.y), localTouch);
          var rot = MathUtils.radiansToDegrees(rad);
          this.view.angle = rot - 90;
        };
        _proto.refreshCannon = function refreshCannon() {
          this.view.getComponent(Sprite).spriteFrame = this.cannonSpriteFrame[this.cannonType - 1];
        };
        _proto.getCannonPosition = function getCannonPosition() {
          return this.view.getPosition();
        };
        _proto.onDestroy = function onDestroy() {
          CannonManager.instance = null;
        };
        return CannonManager;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cannonSpriteFrame", [_dec3], {
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

System.register("chunks:///_virtual/ColorHelper.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d1bc6VuqShCEqK0QItz7w7J", "ColorHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ColorHelper = exports('default', (_dec = ccclass('ColorHelper'), _dec(_class = /*#__PURE__*/function () {
        function ColorHelper() {}
        ColorHelper.getColor = function getColor(hexStr) {
          var color = Color.BLACK;
          return color.fromHEX(hexStr);
        };
        return ColorHelper;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CommonEvent.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "76f96Ul5FVKJJ0rJ6DLL9/S", "CommonEvent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CommonEvent = exports('default', (_dec = ccclass('CommonEvent'), _dec(_class = (_class2 = function CommonEvent() {}, _class2.Event_FrameUpdate = "Event_FrameUpdate", _class2.Event_ConnectTimeOut = "Event_ConnectTimeOut", _class2.Event_ResourceLoader = "Event_ResourceLoader", _class2.Event_CheckUpdate = "Event_CheckUpdate", _class2.Event_Scene_Switch = "Event_Scene_Switch", _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CommonTips.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PrefabLoader.ts', './GameConfig.ts', './DialogBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, tween, Vec3, instantiate, Component, PrefabLoader, GameConfig, DialogBase;
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
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      DialogBase = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "4524fDvMZpPIJ1i/jWbvLxx", "CommonTips", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CommonTips = exports('default', (_dec = ccclass('CommonTips'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CommonTips, _Component);
        function CommonTips() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txtContent", _descriptor, _assertThisInitialized(_this));
          _this.tips = "";
          return _this;
        }
        var _proto = CommonTips.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var _this2 = this;
          tween(this.node).by(1.5, {
            position: new Vec3(0, 100, 0)
          }).to(0.2, {
            /* opacity: 0*/scale: Vec3.ZERO
          }).call(function () {
            _this2.node.destroy();
          }).start();
        };
        _proto.onDestroy = function onDestroy() {
          var index = CommonTips.showingNameList.indexOf(this.tips);
          CommonTips.showingNameList.splice(index, 1);
          this.unscheduleAllCallbacks();
        };
        CommonTips.showMsg = function showMsg(msg, parentNode) {
          if (parentNode === void 0) {
            parentNode = null;
          }
          PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "share/uicomponent/CommonTips", function (loadedResource) {
            if (!parentNode) {
              parentNode = DialogBase.GetRootCanvas();
            }
            if (CommonTips.showingNameList.indexOf(msg) != -1) {
              return;
            } else {
              CommonTips.showingNameList.push(msg);
            }
            var dialogNode = instantiate(loadedResource);
            dialogNode.setPosition(0, 0);
            var dialogScript = dialogNode.getComponent(CommonTips);
            dialogScript.tips = msg;
            dialogScript.txtContent.string = msg;
            parentNode.insertChild(dialogNode, CommonTips.TipsZorderIndex);
          });
        };
        return CommonTips;
      }(Component), _class3.TipsZorderIndex = 999, _class3.showingNameList = [], _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtContent", [_dec2], {
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

System.register("chunks:///_virtual/DarkLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PrefabLoader.ts', './GameConfig.ts', './DialogBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Widget, instantiate, Component, PrefabLoader, GameConfig, DialogBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      DialogBase = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "4fa81G9nNVKxq2H1o9KQdzf", "DarkLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DarkLayer = exports('default', (_dec = ccclass('DarkLayer'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DarkLayer, _Component);
        function DarkLayer() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = DarkLayer.prototype;
        _proto.onLoad = function onLoad() {
          this.getComponent(Widget).target = DialogBase.GetRootCanvas();
        };
        _proto.start = function start() {};
        DarkLayer.preLoad = function preLoad() {
          return new Promise(function (resolve, reject) {
            PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "share/uicomponent/DarkLayer", function (loadedResource) {
              DarkLayer.prefab = loadedResource;
              resolve();
            });
          });
        };
        DarkLayer.getDarkLayer = function getDarkLayer() {
          var dialogNode = instantiate(DarkLayer.prefab);
          return dialogNode;
        };
        return DarkLayer;
      }(Component), _class2.prefab = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DateUtil.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b42f7ePyj5Jgr2EyKVNOc7U", "DateUtil", undefined);
      var DateUtil = exports('default', /*#__PURE__*/function () {
        function DateUtil() {}
        DateUtil.formatNumStr = function formatNumStr(num) {
          var str = "" + num;
          if (num < 10) {
            str = "0" + num;
          }
          return str;
        };
        DateUtil.formateYearMonthDayStr = function formateYearMonthDayStr(timestamp) {
          var date = new Date(timestamp);
          return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        };
        DateUtil.formateMonthDayStr = function formateMonthDayStr(timestamp) {
          var date = new Date(timestamp);
          return date.getMonth() + 1 + "月" + date.getDate() + "日";
        }

        //  timestamp:1453094034000  2018-1-31 19:53:44
        //根据时间戳返回 2018-1-31 19:53:44 
        ;

        DateUtil.formatDateStr = function formatDateStr(timestamp) {
          var date = new Date(timestamp);
          return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + this.formatNumStr(date.getHours()) + ":" + this.formatNumStr(date.getMinutes()) + ":" + this.formatNumStr(date.getSeconds());
        }

        //  timestamp:1453094034000  2018-1-31-19-53-44 
        //根据时间戳返回 2018-1-31-19-53-44 
        ;

        DateUtil.formatDateStr2 = function formatDateStr2(timestamp) {
          var date = new Date(timestamp);
          return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + this.formatNumStr(date.getHours()) + "-" + this.formatNumStr(date.getMinutes()) + "-" + this.formatNumStr(date.getSeconds());
        }

        //  timestamp:1453094034000  2018-1-31
        //根据时间戳返回 2018-1-31
        ;

        DateUtil.formatDateStr3 = function formatDateStr3(timestamp) {
          var date = new Date(timestamp);
          return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }

        //  timestamp:1453094034000  
        //根据时间戳返回 19:53
        ;

        DateUtil.formatHourMinStr = function formatHourMinStr(timestamp) {
          var date = new Date(timestamp);
          return this.formatNumStr(date.getHours()) + ":" + this.formatNumStr(date.getMinutes());
        }

        //  timestamp:1453094034000  
        //根据时间戳返回 19:53:11
        ;

        DateUtil.formatHourMinSecondStr = function formatHourMinSecondStr(timestamp) {
          var date = new Date(timestamp);
          return this.formatNumStr(date.getHours()) + ":" + this.formatNumStr(date.getMinutes()) + ":" + this.formatNumStr(date.getSeconds());
        };
        DateUtil.now = function now() {
          var date = new Date();
          return date.getTime();
        };
        DateUtil.betweenTime = function betweenTime(startTime, endTime) {
          var date = new Date();
          if (date.getTime() >= startTime && date.getTime() <= endTime) {
            return true;
          }
          return false;
        }

        //根据时间戳返回 1天19:53:11
        ;

        DateUtil.formatLeftTime = function formatLeftTime(timestamp) {
          var result = "";
          var day = Math.floor(timestamp / (1000 * 60 * 60 * 24));
          var hour = Math.floor(timestamp / (1000 * 60 * 60)) % 24;
          var min = Math.floor(timestamp / (1000 * 60)) % 60;
          var second = Math.floor(timestamp / 1000) % 60;
          result = day + "天" + this.formatNumStr(hour) + ":" + this.formatNumStr(min) + ":" + this.formatNumStr(second);
          return result;
        };
        DateUtil.isToday = function isToday(dateTime) {
          var nowDate = new Date();
          var checkDate = new Date(dateTime);
          if (checkDate.getFullYear() == nowDate.getFullYear() && checkDate.getMonth() == nowDate.getMonth() && checkDate.getDate() == nowDate.getDate()) {
            return true;
          }
          return false;
        };
        return DateUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DialogBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DarkLayer.ts', './UIRoot.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Widget, Component, DarkLayer, UIRoot;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
      Component = module.Component;
    }, function (module) {
      DarkLayer = module.default;
    }, function (module) {
      UIRoot = module.UIRoot;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "1fc7c8IdcJOxLTAbyfrSDIQ", "DialogBase", undefined);
      var ccclass = _decorator.ccclass;
      var DialogBase = exports('default', (_dec = ccclass('DialogBase'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DialogBase, _Component);
        function DialogBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.darkLayer = null;
          return _this;
        }
        //private static _canvas: Node;
        DialogBase.GetRootCanvas = function GetRootCanvas() {
          //if(DialogBase._canvas == null)
          //    DialogBase._canvas = director.getScene().getChildByName('Canvas');
          //return DialogBase._canvas;
          return UIRoot.Instance.node;
        };
        var _proto = DialogBase.prototype;
        _proto.onLoad = function onLoad() {
          DialogBase.LocalZOrder += 1;
          var closeLayer = this.node.getChildByName("closeLayer");
          if (closeLayer) {
            var closeLayerWidget = closeLayer.getComponent(Widget);
            if (closeLayerWidget) {
              closeLayerWidget.target = DialogBase.GetRootCanvas();
              closeLayerWidget.left = 0;
              closeLayerWidget.right = 0;
              closeLayerWidget.top = 0;
              closeLayerWidget.bottom = 0;
            }
          }
          this.onLoadMe();
        };
        _proto.onLoadMe = function onLoadMe() {};
        _proto.start = function start(isPlayMv) {
          if (isPlayMv === void 0) {
            isPlayMv = false;
          }
          this.darkLayer = DarkLayer.getDarkLayer();
          this.node.insertChild(this.darkLayer, 0); //this.node.addChild(this.darkLayer, -1);
          if (isPlayMv) {
            this.node.setScale(0, 0);
          } else {
            this.onStartMe();
          }
        };
        _proto.onStartMe = function onStartMe() {};
        _proto.onClickClose = function onClickClose() {
          this.node.destroy();
        };
        _proto.update = function update(dt) {
          this.onUpdateMe(dt);
        };
        _proto.onUpdateMe = function onUpdateMe(dt) {};
        _proto.onDestroy = function onDestroy() {
          DialogBase.LocalZOrder -= 1;
          this.onDestroyMe();
        };
        _proto.onDestroyMe = function onDestroyMe() {};
        return DialogBase;
      }(Component), _class2.LocalZOrder = 5, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager2.ts", ['cc', './ColorHelper.ts'], function (exports) {
  var cclegacy, Button, Component, Slider, ColorHelper;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
      Component = module.Component;
      Slider = module.Slider;
    }, function (module) {
      ColorHelper = module.default;
    }],
    execute: function () {
      var _class2;
      cclegacy._RF.push({}, "b7dbdKjGtFFuIyuU8Qx4IeJ", "EventManager", undefined);
      var HaoEvent = exports('HaoEvent', function HaoEvent(callback, caller) {
        this.callback = void 0;
        this.caller = void 0;
        this.isStop = void 0;
        this.callback = callback;
        this.caller = caller;
        this.isStop = false;
      });
      var EventManager = exports('default', /*#__PURE__*/function () {
        function EventManager() {
          this.callbackList = {};
        }

        //注册事件
        var _proto = EventManager.prototype;
        _proto.addListener = function addListener(eventName, callback, caller) {
          if (this.callbackList[eventName]) {
            var eventList = this.callbackList[eventName];
            //不同元件才放入,相同元件覆蓋
            var add = true;
            for (var i = 0; i < eventList.length; i++) {
              var event = eventList[i];
              if (caller === event.caller) {
                add = false;
              }
            }
            if (add) {
              eventList.push(new HaoEvent(callback, caller));
              this.callbackList[eventName] = eventList;
            }
          } else {
            // this.callbackList[eventName] = [[callback, caller]];
            this.callbackList[eventName] = [new HaoEvent(callback, caller)];
          }
        };
        _proto.removeListener = function removeListener(eventName, callback) {
          if (this.callbackList[eventName]) {
            for (var i = this.callbackList[eventName].length - 1; i >= 0; i--) {
              var event = this.callbackList[eventName][i];
              if (event.callback == callback) {
                this.callbackList[eventName].splice(i, 1);
                break;
              }
            }
          }
        };
        _proto.dispatchEvent = function dispatchEvent(eventName, parameter) {
          var eventList = this.callbackList[eventName];
          if (eventList) {
            for (var _len = arguments.length, restOfName = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              restOfName[_key - 2] = arguments[_key];
            }
            for (var i = eventList.length - 1; i >= 0; i--) {
              var _event$callback;
              var event = eventList[i];
              (_event$callback = event.callback).call.apply(_event$callback, [event.caller, event, parameter].concat(restOfName));
              if (event.isStop) {
                break;
              }
            }
            for (var _i = eventList.length - 1; _i >= 0; _i--) {
              var _event = eventList[_i];
              _event.isStop = false;
            }
          }
        };
        _proto.addBtnEvent = function addBtnEvent(parentNode, objectNode, scriptName, eventName, data) {
          if (data === void 0) {
            data = null;
          }
          var btn = objectNode.addComponent(Button);
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = parentNode; //这个 node 节点是你的事件处理代码组件所属的节点
          clickEventHandler.component = scriptName; //这个是代码文件名
          clickEventHandler.handler = eventName;
          clickEventHandler.customEventData = data;
          btn.clickEvents.push(clickEventHandler);
          this.addBtnEffect(objectNode);
        };
        _proto.removeBtnEvent = function removeBtnEvent(objectNode) {
          objectNode.removeComponent(Button);
        };
        _proto.removeBtnEffect = function removeBtnEffect(objectNode) {
          var b = objectNode.getComponent(Button);
          b.transition = Button.Transition.NONE;
        };
        _proto.addBtnEffect = function addBtnEffect(objectNode, scale) {
          if (scale === void 0) {
            scale = 1.1;
          }
          var b = objectNode.getComponent(Button);
          b.transition = Button.Transition.SCALE;
          b.zoomScale = scale;
        };
        _proto.addBtnEffect_color = function addBtnEffect_color(objectNode, normalC, pressC) {
          if (normalC === void 0) {
            normalC = ColorHelper.getColor("#FFFFFF");
          }
          if (pressC === void 0) {
            pressC = ColorHelper.getColor("#C0C0C0");
          }
          var b = objectNode.getComponent(Button);
          b.transition = Button.Transition.COLOR;
          b.normalColor = normalC;
          b.pressedColor = pressC;
        };
        _proto.addSliderEvent = function addSliderEvent(parentNode, objectNode, EventName, data) {
          var b = objectNode.getComponent(Slider);
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = parentNode; //这个 node 节点是你的事件处理代码组件所属的节点
          clickEventHandler.component = parentNode.name; //这个是代码文件名
          clickEventHandler.handler = EventName;
          clickEventHandler.customEventData = data;
          b.slideEvents.push(clickEventHandler);
        };
        return EventManager;
      }());
      _class2 = EventManager;
      EventManager.instance = new _class2();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, Tween, Component, FishManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      FishManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ce1d8SdoYxBMoB8LPTW6b6l", "FishBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishBase = exports('default', (_dec = ccclass('FishBase'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishBase, _Component);
        function FishBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.fishInfo = void 0;
          _this.fishType = 1;
          // public blood:number = 1;
          _this.fishPathInfo = void 0;
          _this.isDead = void 0;
          _this.id = void 0;
          _this.isFishGroup = false;
          return _this;
        }
        var _proto = FishBase.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.playDeadMv = function playDeadMv() {
          var _this2 = this;
          this.isDead = true;
          this.scheduleOnce(function () {
            FishManager.instance.killFish(_this2);
          }, 1.5);
          tween(this.node).repeatForever(tween().by(0.6, {
            angle: -360
          })).start();
        };
        _proto.onDisable = function onDisable() {
          //this.node.stopAllActions();
          Tween.stopAllByTarget(this.node);
          this.unscheduleAllCallbacks();
        };
        return FishBase;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishBulletBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishBase.ts', './FishNetManager.ts', './BulletManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, error, Vec2, Vec3, Component, FishBase, FishNetManager, BulletManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      error = module.error;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      FishBase = module.default;
    }, function (module) {
      FishNetManager = module.default;
    }, function (module) {
      BulletManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "80535zFgvFMOaSCQV08EmiR", "FishBulletBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishBulletBase = exports('default', (_dec = ccclass('FishBulletBase'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishBulletBase, _Component);
        function FishBulletBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.bulletType = 0;
          _this.bulletId = 0;
          _this.targetP = void 0;
          _this.moveAngle = 0;
          _this._cacheVec2 = new Vec2();
          _this._cacheVec3 = new Vec3();
          _this._collider = void 0;
          return _this;
        }
        var _proto = FishBulletBase.prototype;
        _proto.onLoad = function onLoad() {
          this._collider = this.getComponent(Collider2D);
          this._collider.sensor = true;
          //this._collider.on(Contact2DType.PRE_SOLVE, this.onBeginContact, this);
          // PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        };

        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this._collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          //this._collider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);
        };

        _proto.onDisable = function onDisable() {
          this._collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          //this._collider.off(Contact2DType.END_CONTACT, this.onBeginContact, this);
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, other, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          if (other) {
            var fish = other.getComponent(FishBase);
            if (fish && !fish.isDead) {
              this.node.getPosition(this._cacheVec3);
              this._cacheVec2.x = this._cacheVec3.x;
              this._cacheVec2.y = this._cacheVec3.y;
              FishNetManager.instance.addFishNet(this.bulletType, this._cacheVec2);
              BulletManager.instance.killBullet(this);
              BulletManager.instance.sendHitFish(fish.id, this.bulletId, this.bulletType);
            }
          }
        }

        //v2.4代码
        ;

        _proto.onCollisionEnter = function onCollisionEnter(other, self) {
          error("onCollisionEnter=FishBulletBase=", other, self);
          if (other) {
            var fish = other.getComponent(FishBase);
            if (fish && !fish.isDead) {
              this.node.getPosition(this._cacheVec3);
              this._cacheVec2.x = this._cacheVec3.x;
              this._cacheVec2.y = this._cacheVec3.y;
              FishNetManager.instance.addFishNet(this.bulletType, this._cacheVec2);
              BulletManager.instance.killBullet(this);
              BulletManager.instance.sendHitFish(fish.id, this.bulletId, this.bulletType);
            }
          }
        };
        return FishBulletBase;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishConfig.ts", ['cc', './FishInfo.ts'], function (exports) {
  var cclegacy, FishInfo;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      FishInfo = module.FishInfo;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c7516I3frJHZ4zHfOCy1UhO", "FishConfig", undefined);
      var FishConfig = exports('FishConfig', /*#__PURE__*/function () {
        function FishConfig() {}
        FishConfig.getFishInfoByType = function getFishInfoByType(fishType) {
          for (var i = 0; i < this.config.length; i++) {
            var fishInfo = this.config[i];
            if (fishInfo.fishType == fishType) {
              return fishInfo;
            }
          }
        };
        return FishConfig;
      }());
      FishConfig.config = [new FishInfo(1, 2, 2), new FishInfo(2, 2, 1), new FishInfo(3, 2, 2), new FishInfo(4, 2, 2), new FishInfo(5, 2, 2), new FishInfo(6, 2, 2), new FishInfo(7, 3, 1.2), new FishInfo(8, 3, 2), new FishInfo(9, 3, 1.2), new FishInfo(10, 4, 1), new FishInfo(11, 4, 1.2), new FishInfo(12, 4, 1.2), new FishInfo(13, 5, 0.6), new FishInfo(14, 5, 2), new FishInfo(15, 6, 0.5), new FishInfo(16, 6, 0.5), new FishInfo(17, 6, 0.5), new FishInfo(18, 6, 1.2), new FishInfo(19, 7, 0.5), new FishInfo(20, 7, 0.5), new FishInfo(21, 7, 0.6), new FishInfo(22, 8, 0.4), new FishInfo(23, 8, 0.7), new FishInfo(24, 8, 0.5), new FishInfo(25, 8, 0.5), new FishInfo(26, 14, 0.4), new FishInfo(27, 14, 0.3), new FishInfo(28, 10, 0.5), new FishInfo(29, 3, 0.8)];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneBase.ts', './TextureMgr.ts', './RandomUtil.ts', './FishMover.ts', './FishPathConfig.ts', './Logger2.ts', './FishWiki.ts', './GameMusicHelper.ts', './ResourcePreload.ts', './RoomMgr.ts', './FishSharkGameMgr.ts', './WebsocketClient.ts', './LanguageData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Prefab, PhysicsSystem2D, director, instantiate, Vec3, Tween, SceneBase, TextureMgr, RandomUtil, FishMover, FishPathConfig, Logger, FishWiki, GameMusicHelper, ResourcePreload, RoomMgr, FishSharkGameMgr, WebsocketClient, LanguageData;
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
      Prefab = module.Prefab;
      PhysicsSystem2D = module.PhysicsSystem2D;
      director = module.director;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Tween = module.Tween;
    }, function (module) {
      SceneBase = module.default;
    }, function (module) {
      TextureMgr = module.default;
    }, function (module) {
      RandomUtil = module.default;
    }, function (module) {
      FishMover = module.default;
    }, function (module) {
      FishPathConfig = module.FishPathConfig;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      FishWiki = module.default;
    }, function (module) {
      GameMusicHelper = module.default;
    }, function (module) {
      ResourcePreload = module.default;
    }, function (module) {
      RoomMgr = module.RoomMgr;
    }, function (module) {
      FishSharkGameMgr = module.FishSharkGameMgr;
    }, function (module) {
      WebsocketClient = module.WebsocketClient;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ebb8dQ39kJKkZosbZuHQ9fX", "FishGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishGameScene = exports('default', (_dec = ccclass('FishGameScene'), _dec2 = property(Sprite), _dec3 = property({
        type: [Prefab]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SceneBase) {
        _inheritsLoose(FishGameScene, _SceneBase);
        function FishGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SceneBase.call.apply(_SceneBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fishPrefabList", _descriptor2, _assertThisInitialized(_this));
          _this.showNode = null;
          return _this;
        }
        var _proto = FishGameScene.prototype;
        _proto.onLoadMe = function onLoadMe() {
          GameMusicHelper.playBg();
          FishPathConfig.init();
          this.initBg();
          // this.testPathPlay()
          tgx.UIMgr.inst.closeAll();
          PhysicsSystem2D.instance.enable = true;
        };
        _proto.onStartMe = function onStartMe() {
          RoomMgr.inst.rpc_ClientReady();
          RoomMgr.inst.rpc_Ready();
          FishSharkGameMgr.inst.requestFishConfig();
          director.on(WebsocketClient.EVENT_CONNECTED, this.onReConnect, this); //断线重连
        };

        _proto.onReConnect = function onReConnect() {
          RoomMgr.inst.rpc_ClientReady();
        };
        _proto.initBg = function initBg() {
          var textureMgr = this.bg.getComponent(TextureMgr);
          this.bg.spriteFrame = textureMgr.Spriteset[RandomUtil.nextInt(0, textureMgr.Spriteset.length - 1)];
        };
        _proto.initShowNode = function initShowNode() {
          if (this.showNode) {
            this.showNode.destroy();
            this.showNode = null;
          }
          var fishType = 29;
          this.showNode = instantiate(this.fishPrefabList[fishType - 1]);
          this.showNode.getComponent(FishMover).speed = 2;
          this.showNode.getComponent(FishMover).node.setScale(new Vec3(2, 2, 1));
          this.node.addChild(this.showNode);
        };
        _proto.testPathPlay = function testPathPlay() {
          this.initShowNode();
          var pathInfo = FishPathConfig.getPathInfo(3);
          Logger.log("testPathPlay=pathInfo=", pathInfo);
          var params = pathInfo.path;
          var param0 = params[0];
          Logger.log("testPathPlay=11=", param0);
          this.showNode.setPosition(new Vec3(param0.x, param0.y, 0));
          this.showNode.getComponent(FishMover).bezierPList = params;
          this.showNode.getComponent(FishMover).startMove();
        };
        _proto.onClickWiki = function onClickWiki() {
          FishWiki.show();
        };
        _proto.onDestroyMe = function onDestroyMe() {
          this.unscheduleAllCallbacks();
          //this.node.stopAllActions();
          Tween.stopAllByTarget(this.node);
          director.off(WebsocketClient.EVENT_CONNECTED, this.onReConnect, this); //断线重连
        };

        _proto.goBackLobby = function goBackLobby() {
          // this.node.getChildByName('Machine').getComponent(AudioSource).stop();
          tgx.UIAlert.show(LanguageData.getLangByID("exit_game"), true).onClick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ok) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ok) {
                    ResourcePreload.instance.clearRes();
                    RoomMgr.inst.exitRoom();
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        return FishGameScene;
      }(SceneBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fishPrefabList", [_dec3], {
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

System.register("chunks:///_virtual/FishInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts'], function (exports) {
  var _createClass, cclegacy, LanguageData;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LanguageData = module.LanguageData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "03f14kjbWdNkZetqBv08VUf", "FishInfo", undefined);
      var FishInfo = exports('FishInfo', /*#__PURE__*/function () {
        function FishInfo(fishType, blood, wikiScale) {
          this.fishType = void 0;
          this.blood = void 0;
          this.wikiScale = void 0;
          this.fishType = fishType;
          this.blood = blood;
          this.wikiScale = wikiScale;
        }
        _createClass(FishInfo, [{
          key: "name",
          get: function get() {
            return LanguageData.getLangByID("fish_shark_type_" + this.fishType);
          }
        }]);
        return FishInfo;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishBase.ts', './FishPathConfig.ts', './FishMover.ts', './Logger2.ts', './FishConfig.ts', './GameMusicHelper.ts', './ScoreManager.ts', './FishUI.ts', './TimeHelper.ts', './NetGameServer.ts', './SubGameMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Prefab, game, Vec3, instantiate, Animation, NodePool, Vec2, Component, FishBase, FishPathConfig, FishMover, Logger, FishConfig, GameMusicHelper, ScoreManager, FishUI, TimeHelper, gameNet, SubGameMgr;
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
      Node = module.Node;
      Prefab = module.Prefab;
      game = module.game;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Animation = module.Animation;
      NodePool = module.NodePool;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      FishBase = module.default;
    }, function (module) {
      FishPathConfig = module.FishPathConfig;
    }, function (module) {
      FishMover = module.default;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      FishConfig = module.FishConfig;
    }, function (module) {
      GameMusicHelper = module.default;
    }, function (module) {
      ScoreManager = module.default;
    }, function (module) {
      FishUI = module.default;
    }, function (module) {
      TimeHelper = module.default;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2, _class4;
      cclegacy._RF.push({}, "b2060mpWhtBGZ+xOZtFFVqr", "FishManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishLive = exports('FishLive', function FishLive(fish, cliveTimestamp) {
        this.fish = void 0;
        this.cliveTimestamp = void 0;
        // 将传入的参数赋值给类的属性
        this.fish = fish;
        this.cliveTimestamp = cliveTimestamp;
      });
      var FishManager = exports('default', (_dec = ccclass('FishManager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: [Prefab]
      }), _dec(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishManager, _Component);
        function FishManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fishContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fishPrefabList", _descriptor2, _assertThisInitialized(_this));
          _this.fishPool = [];
          _this.nextRandomFishTime = 0;
          _this.minRandomTime = 2 * game.getFrameRate();
          _this.maxRandomTime = 5 * game.getFrameRate();
          _this.mapCount = 0;
          _this.minMapCount = 30 * game.getFrameRate();
          _this.maxMapCount = 60 * game.getFrameRate();
          //    // private minMapCount: number = 2 * cc.game.getFrameRate();
          //    // private maxMapCount: number = 5 * cc.game.getFrameRate();
          _this._fishPosCache = void 0;
          _this._fishList = void 0;
          return _this;
        }
        var _proto = FishManager.prototype;
        //鱼 生成时间map
        _proto.onLoad = function onLoad() {
          FishManager.instance = this;
          this._fishPosCache = new Vec3();
          Logger.log("maxRandomTime=", this.minRandomTime, this.maxRandomTime, game.getFrameRate());
        };
        _proto.start = function start() {
          //this.randomFish();
          this._fishList = new Map();
          this.initNetMsgHandlers();
          if (SubGameMgr.gameMgr) {
            var initData = SubGameMgr.gameMgr.getInitData();
            var fishList = initData[0];
            for (var i = 0; i < fishList.length; i++) {
              this.onNet_NewFish(fishList[i]);
            }
          }
        };
        _proto.update = function update() {
          // this.checkRandomFish();
          //计算鱼是否要从map里删除 依赖服务器生存时间
          //this._updateUserLevelUI();

          this.checkFishMoveEnd();
          //this.checkFishMap();
        };

        _proto.initNetMsgHandlers = function initNetMsgHandlers() {
          gameNet.listenMsg("fish/NewFish", this.onNet_NewFish, this);
          gameNet.listenMsg("fish/FishDead", this.onNet_FishDead, this);
          gameNet.listenMsg("fish/RoomFish", this.onNet_RoomFish, this);
          gameNet.listenMsg("fish/FishWave", this.onNet_FishWave, this);
          gameNet.listenMsg("fish/NewFishGroup", this.onNet_FishGroup, this);
          // gameNet.listenMsg("Pong",
        };

        _proto.checkFishMoveEnd = function checkFishMoveEnd() {
          var keysToDelete = [];
          for (var _iterator = _createForOfIteratorHelperLoose(this._fishList.keys()), _step; !(_step = _iterator()).done;) {
            var _key2 = _step.value;
            if (gameNet.serverTimestamp > 0) {
              if (this._fishList.get(_key2).cliveTimestamp < gameNet.serverTimestamp) {
                keysToDelete.push(_key2);
                continue;
              }
            }
            var fish = this._fishList.get(_key2).fish;
            if (fish && !fish.isDead) {
              if (fish.isFishGroup) {
                fish.node.getPosition(this._fishPosCache);
                this._fishPosCache.x -= 2;
                fish.node.setPosition(this._fishPosCache);
                if (this._fishPosCache.x <= -screen.width / 2) {
                  //winSize.width
                  keysToDelete.push(_key2);
                }
              } else {
                if (!fish.getComponent(FishMover).isMoving) {
                  keysToDelete.push(_key2);
                }
              }
            }
          }
          for (var _i = 0, _keysToDelete = keysToDelete; _i < _keysToDelete.length; _i++) {
            var key = _keysToDelete[_i];
            if (this._fishList.get(key).fish) {
              this.destroyFish(this._fishList.get(key).fish);
            }
            this._fishList["delete"](key);
          }
        };
        _proto.createFishByType = function createFishByType(fishType, id, isFishGroup) {
          if (isFishGroup === void 0) {
            isFishGroup = false;
          }
          var fishNode;
          if (this.fishPool[fishType - 1] && this.fishPool[fishType - 1].size() > 0) {
            fishNode = this.fishPool[fishType - 1].get();
          } else {
            fishNode = instantiate(this.fishPrefabList[fishType - 1]);
          }
          //fishNode.getComponent(Animation).play() //v3 当前帧 不能播放
          TimeHelper.exeNextFrame(fishNode, function () {
            return fishNode.getComponent(Animation).play();
          });
          var fishInfo = FishConfig.getFishInfoByType(fishType);
          fishNode.getComponent(FishBase).fishInfo = fishInfo;
          fishNode.getComponent(FishBase).fishType = fishType;
          // fishNode.getComponent(FishBase).blood = fishInfo.blood;
          fishNode.getComponent(FishBase).isDead = false;
          fishNode.getComponent(FishBase).id = id;
          fishNode.getComponent(FishBase).isFishGroup = isFishGroup;
          return fishNode.getComponent(FishBase);
        };
        _proto.killFish = function killFish(fish) {
          var fishItemComp = this._fishList.get(fish.id);
          if (fishItemComp && fishItemComp.fish) {
            GameMusicHelper.playFishDead(fish.fishType);
            this.destroyFish(fish);
            fishItemComp.fish = null;
          }
        };
        _proto.destroyFish = function destroyFish(fish) {
          if (!this.fishPool[fish.fishType - 1]) {
            this.fishPool[fish.fishType - 1] = new NodePool();
          }
          fish.node.removeFromParent();
          fish.node.parent = null;
          this.fishPool[fish.fishType - 1].put(fish.node);
        };
        _proto.startFishMap = function startFishMap() {
          // this.playFishMap();
          // this.fishList = [];

          // let map: FishMap = FishPathConfig.randomFishMap();
          // let fishMapInfoList: Array<FishMapInfo> = map.fishMapInfoList;
          // Logger.log("startFishMap==", this.isFishMap, this.fishList, map)
          // for (let i = 0; i < fishMapInfoList.length; i++) {
          //     let fishMapInfo: FishMapInfo = fishMapInfoList[i];
          //     let fish: FishBase = this.createFishByType(fishMapInfo.fishType)
          //     fish.node.angle = 0;
          //     // fish.node.setScale(fishMapInfo.scale);
          //     this.fishContainer.addChild(fish.node);
          //     fish.node.setPosition(fishMapInfo.x + screen.width, fishMapInfo.y);
          //     this.fishList.push(fish);
          // }
        };
        _proto.onDestroy = function onDestroy() {
          FishManager.instance = null;
          gameNet.unlistenMsgAllByThis(this);
        };
        _proto.onNet_NewFish = function onNet_NewFish(msg) {
          var fish = this.createFishByType(msg.type, Number(msg.id));
          fish.fishPathInfo = FishPathConfig.randomPathInfo();
          this._fishPosCache.z = 0;
          this._fishPosCache.x = fish.fishPathInfo.path[0].x;
          this._fishPosCache.y = fish.fishPathInfo.path[0].y;
          fish.node.setPosition(this._fishPosCache);
          fish.getComponent(FishMover).bezierPList = fish.fishPathInfo.path;
          fish.getComponent(FishMover).startMove();
          this.fishContainer.addChild(fish.node);
          this._fishList.set(fish.id, new FishLive(fish, msg.liveTimestamp));
        };
        _proto.onNet_FishDead = function onNet_FishDead(msg) {
          var fishItemComp = this._fishList.get(Number(msg.id));
          if (fishItemComp) {
            if (fishItemComp.fish) {
              FishUI.instance.score = msg.coins;
              FishUI.instance.refreshScore();
              fishItemComp.fish.playDeadMv();
              fishItemComp.fish.node.getPosition(this._fishPosCache);
              var vec2 = new Vec2(this._fishPosCache.x, this._fishPosCache.y);
              ScoreManager.instance.addScore(msg.incrementCoins, vec2);
            }
          }
        };
        _proto.onNet_RoomFish = function onNet_RoomFish(msg) {
          for (var i = 0; i < msg.fishes.length; i++) {
            if (this._fishList.get(Number(msg.fishes[i].id))) {
              continue;
            }
            this.onNet_NewFish(msg.fishes[i]);
          }
        }
        //鱼潮
        ;

        _proto.onNet_FishWave = function onNet_FishWave() {
          FishUI.instance.playWaveEffect();
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._fishList.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var key = _step2.value;
            var fish = this._fishList.get(key).fish;
            if (fish) {
              this.destroyFish(fish);
            }
          }
          this._fishList.clear();
        };
        _proto.onNet_FishGroup = function onNet_FishGroup(msg) {
          var map = FishPathConfig.getFishMapByIndex(Number(msg.groupId));
          var fishMapInfoList = map.fishMapInfoList;
          Logger.log("startFishMap==", msg.startId);
          var startFishId = Number(msg.startId);
          for (var i = 0; i < fishMapInfoList.length; i++) {
            if (i >= msg.fishCount) {
              break;
            }
            var fishMapInfo = fishMapInfoList[i];
            var fish = this.createFishByType(fishMapInfo.fishType, startFishId, true);
            this.fishContainer.addChild(fish.node);
            fish.node.setPosition(fishMapInfo.x + screen.width, fishMapInfo.y);
            this._fishList.set(fish.id, new FishLive(fish, msg.liveTimestamp));
            startFishId++;
          }
        };
        return FishManager;
      }(Component), _class4.instance = null, _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "fishContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "fishPrefabList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishMap.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f84cePjjEdD/6b0fNpMMg/P", "FishMap", undefined);
      var FishMap = exports('FishMap', function FishMap(mapId, list) {
        this.mapId = void 0;
        this.fishMapInfoList = void 0;
        this.mapId = mapId;
        this.fishMapInfoList = list;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishMapInfo.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f3dfMKRndPnJep6A/LW4KV", "FishMapInfo", undefined);
      var FishMapInfo = exports('FishMapInfo', function FishMapInfo(fishType, scale, side, x, y) {
        this.fishType = void 0;
        this.scale = void 0;
        this.side = void 0;
        //1: -1:
        this.x = void 0;
        this.y = void 0;
        this.fishType = fishType;
        this.scale = scale;
        this.side = side;
        this.x = x;
        this.y = y;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishMover.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishBase.ts', './MathUtils.ts', './Logger2.ts', './TimeHelper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, CCFloat, Vec3, Animation, Vec2, Component, FishBase, MathUtils, Logger, TimeHelper;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      CCFloat = module.CCFloat;
      Vec3 = module.Vec3;
      Animation = module.Animation;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      FishBase = module.default;
    }, function (module) {
      MathUtils = module.default;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      TimeHelper = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bcf7fDIJDhKnaxGPja2YnSj", "FishMover", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishMover = exports('default', (_dec = ccclass('FishMover'), _dec2 = property({
        type: CCInteger
      }), _dec3 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishMover, _Component);
        function FishMover() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //鱼类型
          _initializerDefineProperty(_this, "fishType", _descriptor, _assertThisInitialized(_this));
          //    //鱼移动速度
          _initializerDefineProperty(_this, "speed", _descriptor2, _assertThisInitialized(_this));
          //    //下个位置移动点
          _this.targetMoveIndex = 0;
          //    //鱼移动位置
          _this.movePList = [];
          //    //贝萨尔曲线
          _this.bezierPList = [];
          _this.isMoving = false;
          _this.minSpeed = 0.1;
          _this.moveCount = 1;
          _this.totalTimes = 60 * 2;
          _this._vec3Cahce = new Vec3();
          return _this;
        }
        var _proto = FishMover.prototype;
        _proto.startMove = function startMove() {
          var _this2 = this;
          this.targetMoveIndex = 0;
          this.isMoving = true;
          //this.node.getComponent(Animation).play()//v3 当前帧 不能播放
          TimeHelper.exeNextFrame(this.node, function () {
            return _this2.node.getComponent(Animation).play();
          });
        };
        _proto.update = function update(dt) {
          // this.moveFish();
          this.checkMoveBezier();
        };
        _proto.checkMoveBezier = function checkMoveBezier() {
          if (this.isMoving && !this.getComponent(FishBase).isDead) {
            this.moveCount++;
            if (this.moveCount >= this.totalTimes) {
              this.moveCount = this.totalTimes;
            }
            this.moveBezier();
          }
        };
        _proto.moveBezier = function moveBezier() {
          // [warn]  [[-632,-230],[-444,-117],[-264,-242]]
          // let p0: cc.Vec2 = cc.v2(-632, -230)
          // let p1: cc.Vec2 = cc.v2(-444, -117)
          // let p2: cc.Vec2 = cc.v2(-264, -242)
          if (this.bezierPList.length > this.targetMoveIndex + 2) {
            var p0 = this.bezierPList[this.targetMoveIndex];
            var p1 = this.bezierPList[this.targetMoveIndex + 1];
            var p2 = this.bezierPList[this.targetMoveIndex + 2];
            var t = this.moveCount / this.totalTimes;
            var mx = Math.pow(1 - t, 2) * p0.x + 2 * t * (1 - t) * p1.x + Math.pow(t, 2) * p2.x;
            var my = Math.pow(1 - t, 2) * p0.y + 2 * t * (1 - t) * p1.y + Math.pow(t, 2) * p2.y;
            this.node.getPosition(this._vec3Cahce);
            var rad = MathUtils.p2pRad(new Vec2(this._vec3Cahce.x, this._vec3Cahce.y), new Vec2(mx, my));
            var rot111 = MathUtils.radiansToDegrees(rad);
            var rot = MathUtils.rotation2Fish(rot111);
            if (this.fishType == 7 || this.fishType == 27 || this.fishType == 29) {
              if (rot > 90 || rot < -90) {
                this.node.getScale(this._vec3Cahce);
                if (this._vec3Cahce.x > 0) {
                  this._vec3Cahce.x = -1 * this._vec3Cahce.x;
                  this.node.setScale(this._vec3Cahce);
                }
              } else {
                this.node.getScale(this._vec3Cahce);
                if (this._vec3Cahce.x < 0) {
                  this._vec3Cahce.x = -1 * this._vec3Cahce.x;
                  this.node.setScale(this._vec3Cahce);
                }
              }
            } else if (this.fishType == 9 || this.fishType == 10 || this.fishType == 21 || this.fishType == 28) ;else {
              // this.node.rotation = rot; //过时
              this.node.angle = -rot;
            }
            // Logger.log("moveBezier====", rad, rot111, this.fishType, rot)
            var moveTimes = Math.round(this.speed / this.minSpeed);
            for (var i = 0; i < moveTimes; i++) {
              var speedX = this.minSpeed * Math.cos(rad);
              var speedY = this.minSpeed * Math.sin(rad);
              this.node.getPosition(this._vec3Cahce);
              this._vec3Cahce.x += speedX;
              this._vec3Cahce.y += speedY;
              this.node.setPosition(this._vec3Cahce);
              if (MathUtils.distance(this._vec3Cahce.x, this._vec3Cahce.y, mx, my) <= this.minSpeed) {
                this.node.setPosition(mx, my);
                break;
              }
              if (MathUtils.distance(this._vec3Cahce.x, this._vec3Cahce.y, p2.x, p2.y) <= this.minSpeed * 2) {
                this.node.setPosition(p2.x, p2.y);
                this.targetMoveIndex += 2;
                this.moveCount = 0;
                break;
              }
            }
          } else {
            this.isMoving = false;
          }
        };
        _proto.onDisable = function onDisable() {
          this.isMoving = false;
        };
        _proto.exportBezierConfig = function exportBezierConfig() {
          Logger.warn("exportBezierConfig=");
          var tempConfig = [];
          for (var i = 0; i < this.bezierPList.length; i++) {
            tempConfig[i] = [];
            tempConfig[i].push(Math.floor(this.bezierPList[i].x));
            tempConfig[i].push(Math.floor(this.bezierPList[i].y));
          }
          Logger.warn("fishtype", this.fishType);
          Logger.warn("speed", this.speed);
          Logger.warn("scale", this.node.scale);
          Logger.warn(JSON.stringify(tempConfig));
        };
        return FishMover;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fishType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishNetBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishNetManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec3, tween, Component, FishNetManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      FishNetManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "f6fc6f54XNLlalHZTaY/km2", "FishNetBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishNetBase = exports('default', (_dec = ccclass('FishNetBase'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishNetBase, _Component);
        function FishNetBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.netType = 0;
          _this.tween = void 0;
          return _this;
        }
        var _proto = FishNetBase.prototype;
        _proto.playMv = function playMv() {
          var _this2 = this;
          this.node.setScale(Vec3.ZERO);
          this.tween = tween(this.node).to(0.2, {
            scale: FishNetBase.vec3
          }).delay(0.3).call(function () {
            FishNetManager.instance.destroyFishNet(_this2);
          }).start();
        };
        _proto.onDestroy = function onDestroy() {
          if (this.tween) {
            this.tween.stop();
          }
        };
        return FishNetBase;
      }(Component), _class2.vec3 = new Vec3(2, 2, 1), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishNetManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishNetBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Vec3, instantiate, NodePool, Component, FishNetBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      Component = module.Component;
    }, function (module) {
      FishNetBase = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "fec49GwT29KF5KNpO48K7Vn", "FishNetManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishNetManager = exports('default', (_dec = ccclass('FishNetManager'), _dec2 = property({
        type: [Prefab]
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishNetManager, _Component);
        function FishNetManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "netPrefabList", _descriptor, _assertThisInitialized(_this));
          _this.fishNetPool = [];
          return _this;
        }
        var _proto = FishNetManager.prototype;
        _proto.onLoad = function onLoad() {
          FishNetManager.instance = this;
        };
        _proto.addFishNet = function addFishNet(netType, p) {
          var fishNet = this.createFishNet(netType - 1);
          this.node.addChild(fishNet.node);
          fishNet.node.setPosition(new Vec3(p.x, p.y, 0));
          fishNet.playMv();
        };
        _proto.createFishNet = function createFishNet(netType) {
          var fishNetNode;
          if (this.fishNetPool[netType] && this.fishNetPool[netType].size() > 0) {
            fishNetNode = this.fishNetPool[netType].get();
          } else {
            fishNetNode = instantiate(this.netPrefabList[netType]);
          }
          fishNetNode.getComponent(FishNetBase).netType = netType;
          return fishNetNode.getComponent(FishNetBase);
        };
        _proto.destroyFishNet = function destroyFishNet(fishNet) {
          if (!this.fishNetPool[fishNet.netType]) {
            this.fishNetPool[fishNet.netType] = new NodePool();
          }
          this.fishNetPool[fishNet.netType].put(fishNet.node);
        };
        _proto.onDestroy = function onDestroy() {
          FishNetManager.instance = null;
        };
        return FishNetManager;
      }(Component), _class3.instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "netPrefabList", [_dec2], {
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

System.register("chunks:///_virtual/FishPathConfig.ts", ['cc', './FishPathInfo.ts', './RandomUtil.ts', './FishMapInfo.ts', './FishMap.ts'], function (exports) {
  var cclegacy, Vec2, FishPathInfo, RandomUtil, FishMapInfo, FishMap;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }, function (module) {
      FishPathInfo = module.FishPathInfo;
    }, function (module) {
      RandomUtil = module.default;
    }, function (module) {
      FishMapInfo = module.FishMapInfo;
    }, function (module) {
      FishMap = module.FishMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "704e1ezD3tHiorRHLL12JqP", "FishPathConfig", undefined);
      var FishPathConfig = exports('FishPathConfig', /*#__PURE__*/function () {
        function FishPathConfig() {}
        FishPathConfig.init = function init() {
          this.initNormalConfig();
          this.initMapConfig();
        };
        FishPathConfig.initMapConfig = function initMapConfig() {
          this.formatMapConfig = [];
          for (var i = 0; i < this.mapConfig.length; i++) {
            var arr = this.mapConfig[i];
            var fishMapInfoList = [];
            for (var j = 0; j < arr.length; j++) {
              var temp = arr[j];
              var fishMapInfo = new FishMapInfo(temp[0], temp[1], temp[2], temp[3], temp[4]);
              fishMapInfoList.push(fishMapInfo);
            }
            var fishMap = new FishMap(i, fishMapInfoList);
            this.formatMapConfig.push(fishMap);
          }
        };
        FishPathConfig.randomFishMap = function randomFishMap() {
          var randomIndex = RandomUtil.nextInt(0, this.formatMapConfig.length - 1);
          var map = this.formatMapConfig[randomIndex];
          return map;
        };
        FishPathConfig.getFishMapByIndex = function getFishMapByIndex(index) {
          if (index > 0 && index <= this.formatMapConfig.length) {
            return this.formatMapConfig[index - 1];
          }
          return null;
        };
        FishPathConfig.initNormalConfig = function initNormalConfig() {
          this.formatConfig = [];
          var pathId = 1;
          for (var i = 0; i < this.config.length; i++) {
            var path = [];
            var flipXPath = [];
            var flipYPath = [];
            for (var j = 0; j < this.config[i].length; j++) {
              var p = new Vec2(this.config[i][j][0], this.config[i][j][1]);
              path.push(p);
              var flipXP = new Vec2(-p.x, p.y);
              var flipYP = new Vec2(p.x, -p.y);
              flipXPath.push(flipXP);
              flipYPath.push(flipYP);
            }
            this.formatConfig.push(new FishPathInfo(pathId++, path));
            this.formatConfig.push(new FishPathInfo(pathId++, flipXPath));
            this.formatConfig.push(new FishPathInfo(pathId++, flipYPath));
          }
        };
        FishPathConfig.getPathInfo = function getPathInfo(pathId) {
          for (var i = 0; i < this.formatConfig.length; i++) {
            var pathInfo = this.formatConfig[i];
            if (pathInfo.pathId == pathId) {
              return pathInfo;
            }
          }
        };
        FishPathConfig.randomPathInfo = function randomPathInfo() {
          var randomIndex = RandomUtil.nextInt(0, this.formatConfig.length - 1);
          // let randomIndex: number = 0
          var pathInfo = this.formatConfig[randomIndex];
          return pathInfo;
        };
        return FishPathConfig;
      }());
      FishPathConfig.mapConfig = [[[1, 1, 1, -425, 387], [1, 1, 1, -487, 352], [1, 1, 1, -541, 307], [1, 1, 1, -589, 263], [1, 1, 1, -623, 232], [1, 1, 1, -654, 172], [1, 1, 1, -671, 134], [1, 1, 1, -693, 92], [1, 1, 1, -697, 35], [1, 1, 1, -706, -19], [1, 1, 1, -707, -92], [1, 1, 1, -701, -136], [1, 1, 1, -702, -177], [1, 1, 1, -686, -230], [1, 1, 1, -637, -257], [1, 1, 1, -559, -272], [1, 1, 1, -471, -278], [1, 1, 1, -408, -259], [1, 1, 1, -337, -226], [1, 1, 1, -325, -170], [1, 1, 1, -322, -99], [1, 1, 1, -336, -39], [1, 1, 1, -370, 7], [1, 1, 1, -412, 59], [1, 1, 1, -532, 69], [1, 1, 1, -613, 82], [1, 1, 1, -470, 63], [1, 1, 1, 241, 402], [1, 1, 1, 184, 357], [1, 1, 1, 143, 335], [1, 1, 1, 81, 285], [1, 1, 1, 27, 229], [1, 1, 1, -9, 167], [1, 1, 1, -39, 126], [1, 1, 1, -47, 57], [1, 1, 1, -74, -10], [1, 1, 1, -62, -66], [1, 1, 1, -74, -118], [1, 1, 1, -85, -201], [1, 1, 1, -30, -240], [1, 1, 1, 10, -271], [1, 1, 1, 135, -273], [1, 1, 1, 79, -280], [1, 1, 1, 202, -280], [1, 1, 1, 266, -276], [1, 1, 1, 276, -274], [1, 1, 1, 307, -259], [1, 1, 1, 316, -244], [1, 1, 1, 327, -226], [1, 1, 1, 335, -195], [1, 1, 1, 337, -142], [1, 1, 1, 321, -53], [1, 1, 1, 271, -13], [1, 1, 1, 188, 27], [1, 1, 1, 123, 46], [1, 1, 1, 59, 57], [1, 1, 1, 17, 60], [1, 1, 1, 323, -101], [1, 1, 1, 732, 329], [1, 1, 1, 669, 283], [1, 1, 1, 613, 218], [1, 1, 1, 567, 185], [1, 1, 1, 558, 163], [1, 1, 1, 507, 95], [1, 1, 1, 468, 35], [1, 1, 1, 456, -18], [1, 1, 1, 451, -80], [1, 1, 1, 447, -164], [1, 1, 1, 458, -234], [1, 1, 1, 505, -267], [1, 1, 1, 578, -281], [1, 1, 1, 657, -291], [1, 1, 1, 708, -291], [1, 1, 1, 769, -291], [1, 1, 1, 812, -290], [1, 1, 1, 847, -275], [1, 1, 1, 860, -236], [1, 1, 1, 853, -160], [1, 1, 1, 826, -95], [1, 1, 1, 794, -46], [1, 1, 1, 754, -7], [1, 1, 1, 671, 26], [1, 1, 1, 630, 59], [1, 1, 1, 584, 80]], [[2, 1, 1, -784, 353], [2, 1, 1, -693, 356], [2, 1, 1, -614, 354], [2, 1, 1, -510, 354], [2, 1, 1, -422, 354], [2, 1, 1, -456, 287], [2, 1, 1, -510, 199], [2, 1, 1, -562, 139], [2, 1, 1, -600, 82], [2, 1, 1, -636, 38], [2, 1, 1, -688, -17], [2, 1, 1, -745, -92], [2, 1, 1, -764, -152], [2, 1, 1, -815, -216], [2, 1, 1, -166, 341], [2, 1, 1, -17, 343], [2, 1, 1, 89, 343], [2, 1, 1, 246, 331], [2, 1, 1, 326, 348], [2, 1, 1, -180, 310], [2, 1, 1, -144, 209], [2, 1, 1, -112, 151], [2, 1, 1, -74, 55], [2, 1, 1, -48, 0], [2, 1, 1, 4, -91], [2, 1, 1, 40, -153], [2, 1, 1, 85, -201], [2, 1, 1, 102, -247], [3, 1, 1, 595, 319], [3, 1, 1, 664, 322], [3, 1, 1, 799, 318], [3, 1, 1, 968, 319], [3, 1, 1, 963, 107], [3, 1, 1, 955, -21], [3, 1, 1, 948, -157], [3, 1, 1, 940, -231], [3, 1, 1, 795, -245], [3, 1, 1, 685, -248], [3, 1, 1, 610, -252], [3, 1, 1, 523, -253], [3, 1, 1, 172, 128], [3, 1, 1, -357, 30], [3, 1, 1, 582, 23]], [[5, 1, 1, -888, 405], [5, 1, 1, -806, 410], [5, 1, 1, -718, 404], [5, 1, 1, -658, 406], [5, 1, 1, -661, 286], [5, 1, 1, -661, 224], [5, 1, 1, -664, 142], [5, 1, 1, -688, -2], [5, 1, 1, -687, -69], [5, 1, 1, -697, -120], [5, 1, 1, -981, 410], [5, 1, 1, -503, 150], [5, 1, 1, -432, 146], [5, 1, 1, -362, 149], [5, 1, 1, -259, 148], [5, 1, 1, -192, 149], [5, 1, 1, -341, 359], [5, 1, 1, -353, 256], [5, 1, 1, -354, 203], [5, 1, 1, -361, 72], [5, 1, 1, -371, -23], [5, 1, 1, -387, -79], [5, 1, 1, 18, 277], [5, 1, 1, 7, 159], [5, 1, 1, -7, 94], [5, 1, 1, -19, -3], [5, 1, 1, -27, -80], [5, 1, 1, 177, 164], [5, 1, 1, 248, 172], [5, 1, 1, 355, 170], [5, 1, 1, 153, 29], [5, 1, 1, 230, 30], [5, 1, 1, 327, 32], [6, 1, 1, 548, 371], [6, 1, 1, 682, 374], [6, 1, 1, 833, 373], [6, 1, 1, 942, 374], [6, 1, 1, 935, 289], [6, 1, 1, 924, 143], [6, 1, 1, 903, 65], [6, 1, 1, 887, -44], [6, 1, 1, 857, -157], [6, 1, 1, 526, 109], [6, 1, 1, 612, 108], [6, 1, 1, 761, 94], [6, 1, 1, 710, 260], [6, 1, 1, 673, 177], [6, 1, 1, 661, 10], [6, 1, 1, 634, -61], [6, 1, 1, 617, -138], [7, 1, 1, 340, -259], [7, 1, 1, 485, -254], [7, 1, 1, 622, -254], [7, 1, 1, 816, -251]], [[9, 1, 1, -513, 150], [9, 1, 1, -636, 237], [9, 1, 1, -811, 250], [9, 1, 1, -860, 145], [9, 1, 1, -850, -54], [9, 1, 1, -801, -154], [9, 1, 1, -673, -268], [9, 1, 1, -498, -294], [9, 1, 1, -358, -223], [9, 1, 1, -207, -127], [9, 1, 1, -72, 15], [9, 1, 1, -88, 196], [9, 1, 1, -240, 285], [9, 1, 1, -334, 185], [9, 1, 1, 466, 151], [9, 1, 1, 310, 202], [9, 1, 1, 213, 246], [9, 1, 1, 106, 83], [9, 1, 1, 141, -54], [9, 1, 1, 241, -252], [9, 1, 1, 388, -285], [9, 1, 1, 605, -295], [9, 1, 1, 771, -226], [9, 1, 1, 846, -125], [9, 1, 1, 893, 51], [9, 1, 1, 865, 195], [9, 1, 1, 665, 207], [17, 1, 1, -461, 2], [17, 1, 1, 515, -49]], [[19, 1, 1, -785, 31], [19, 1, 1, 905, 16], [20, 1, 1, -242, 34], [20, 1, 1, 228, 12], [20, 1, 1, -30, 303], [20, 1, 1, -109, -292], [20, 1, 1, 425, -301], [20, 1, 1, 537, 265], [20, 1, 1, -604, 317], [20, 1, 1, -634, -285]], [[21, 1, 1, -757, 94], [21, 1, 1, 646, 55], [21, 1, 1, -41, 376], [21, 1, 1, -102, -315], [21, 1, 1, -76, 83], [21, 1, 1, -437, 300], [21, 1, 1, -434, -155], [21, 1, 1, 314, -154], [21, 1, 1, 435, 249]], [[22, 1, 1, -548, 65], [22, 1, 1, 747, 61], [22, 1, 1, 95, 63]], [[23, 1, 1, -431, 384], [23, 1, 1, -766, 89], [23, 1, 1, -415, -232], [23, 1, 1, -72, 135], [23, 1, 1, 721, 414], [23, 1, 1, 328, 77], [23, 1, 1, 1025, 60], [23, 1, 1, 677, -247], [23, 1, 1, 104, 390], [23, 1, 1, 84, -265]], [[24, 1, 1, -429, 353], [24, 1, 1, 241, 323], [24, 1, 1, -472, 46], [24, 1, 1, -27, 35], [24, 1, 1, 563, 39], [24, 1, 1, -268, -245], [24, 1, 1, 172, -260]], [[25, 1, 1, -595, 276], [25, 1, 1, 115, 291], [25, 1, 1, -192, -64], [25, 1, 1, 464, -46], [25, 1, 1, 191, -280], [25, 1, 1, 884, -319]], [[26, 1, 1, -681, 441], [26, 1, 1, 685, 426], [26, 1, 1, -46, 140], [26, 1, 1, -494, -207], [26, 1, 1, 497, -238]], [[27, 1, 1, -431, 345], [27, 1, 1, 569, 311], [27, 1, 1, 112, -12], [27, 1, 1, -298, -271], [27, 1, 1, 678, -244]], [[28, 1, 1, -454, 8], [28, 1, 1, 597, 1], [28, 1, 1, 46, 431], [28, 1, 1, 44, -227]], [[2, 1, 1, -557, 409], [2, 1, 1, -648, 382], [2, 1, 1, -732, 338], [2, 1, 1, -809, 236], [2, 1, 1, -861, 157], [2, 1, 1, -865, 18], [2, 1, 1, -835, -37], [2, 1, 1, -787, -86], [2, 1, 1, -746, -115], [2, 1, 1, -683, -181], [2, 1, 1, -575, -206], [2, 1, 1, -494, -204], [2, 1, 1, -442, -157], [2, 1, 1, -403, -111], [2, 1, 1, -387, 11], [2, 1, 1, -356, 94], [2, 1, 1, -472, 330], [2, 1, 1, -407, 260], [2, 1, 1, -395, 195], [2, 1, 1, -214, 51], [2, 1, 1, -139, 52], [2, 1, 1, -77, 51], [2, 1, 1, -21, 51], [2, 1, 1, 67, 50], [2, 1, 1, 107, 50], [2, 1, 1, -40, 332], [2, 1, 1, -43, 207], [2, 1, 1, -60, 154], [2, 1, 1, -60, 5], [2, 1, 1, -82, -71], [2, 1, 1, -77, -195], [5, 1, 1, 427, 311], [5, 1, 1, 578, 314], [5, 1, 1, 779, 315], [5, 1, 1, 862, 315], [5, 1, 1, 884, 123], [5, 1, 1, 879, -108], [5, 1, 1, 778, -183], [5, 1, 1, 672, -181], [5, 1, 1, 564, -179], [5, 1, 1, 407, -178], [5, 1, 1, 297, 8], [5, 1, 1, 625, 48], [5, 1, 1, 379, 92]]];
      FishPathConfig.formatMapConfig = [];
      FishPathConfig.config = [
      //        // 左边开始
      [[-1309, 528], [-1144, 438], [-1081, 411], [-947, 327], [-801, 241], [-683, 154], [-539, 69], [-394, -23], [-230, -115], [-115, -207], [45, -280], [247, -364], [497, -457], [627, -511], [762, -578], [885, -667], [1068, -773]], [[-1295, 534], [-1144, 438], [-1081, 411], [-906, 326], [-696, 274], [-462, 223], [-213, 198], [-1, 172], [156, 178], [396, 194], [576, 216], [753, 233], [936, 279], [1182, 350], [1314, 418]], [[-1295, 534], [-1144, 438], [-1081, 411], [-906, 326], [-696, 274], [-462, 223], [-213, 198], [-1, 172], [199, 150], [417, 111], [635, 10], [827, -42], [1020, -131], [1189, -170], [1309, -198]], [[-1295, 534], [-1111, 514], [-1015, 454], [-864, 403], [-671, 387], [-450, 354], [-219, 311], [11, 274], [213, 270], [471, 212], [642, 172], [835, 88], [1013, -2], [1212, -99], [1309, -198]], [[-1275, -118], [-1129, -19], [-1024, 42], [-858, 129], [-677, 225], [-448, 277], [-219, 311], [11, 274], [213, 270], [510, 320], [596, 350], [772, 391], [887, 426], [1066, 513], [1164, 710]], [[-1299, -618], [-1143, -521], [-1033, -496], [-726, -425], [-489, -360], [-245, -293], [-8, -210], [212, -134], [385, -65], [552, 7], [705, 96], [904, 176], [1090, 273], [1208, 355], [1308, 435]], [[-1275, -118], [-1060, -69], [-938, -85], [-729, -59], [-551, -48], [-397, -2], [-203, -1], [46, 61], [228, 105], [506, 159], [630, 208], [784, 266], [935, 228], [1157, 174], [1329, 163]], [[-1288, -220], [-1113, -194], [-945, -195], [-709, -162], [-502, -200], [-313, -211], [-144, -186], [128, -135], [314, 14], [571, 56], [727, 132], [851, 203], [1050, 141], [1255, 58], [1326, 20]], [[-1288, -220], [-1113, -194], [-945, -195], [-709, -162], [-502, -200], [-313, -211], [-144, -186], [132, -144], [406, -196], [644, -272], [884, -272], [993, -283], [1090, -319], [1242, -341], [1329, -396]], [[-1288, -220], [-1113, -194], [-916, -213], [-710, -238], [-501, -273], [-297, -289], [-101, -312], [173, -324], [419, -339], [653, -362], [889, -390], [1011, -407], [1095, -418], [1238, -539], [1317, -663]], [[-1314, -508], [-1123, -480], [-917, -443], [-708, -379], [-514, -361], [-300, -319], [-101, -307], [155, -256], [398, -248], [645, -219], [787, -178], [980, -165], [1086, -103], [1093, 280], [1026, 371], [868, 631], [648, 787]], [[-1314, -508], [-1130, -281], [-898, -160], [-693, -141], [-561, -91], [-384, -43], [-187, 48], [119, 32], [298, -95], [519, -135], [744, -156], [868, -97], [1033, 55], [1093, 280], [1026, 371], [868, 631], [648, 787]], [[-1314, -508], [-1130, -281], [-898, -160], [-693, -141], [-561, -91], [-384, -43], [-187, 48], [119, 32], [298, -95], [519, -135], [744, -156], [872, -200], [1060, -391], [1150, -492], [1301, -461]],
      //        //右边开始
      [[1286, -293], [1149, -184], [952, -147], [795, -130], [536, -45], [476, 57], [467, 300], [408, 500], [405, 701]], [[1345, 34], [1189, -69], [978, -94], [820, -115], [443, -66], [267, -29], [66, -79], [-219, -287], [-271, -693]], [[1345, 34], [1189, -69], [978, -94], [820, -115], [443, -66], [267, -29], [66, -79], [-215, -156], [-444, -100], [-725, -92], [-963, -68], [-1169, -46], [-1325, -40]], [[1345, 34], [1189, -69], [978, -94], [820, -115], [443, -66], [267, -29], [66, -79], [-215, -156], [-454, -156], [-719, -199], [-981, -264], [-1180, -291], [-1320, -367]], [[1345, 34], [1189, -69], [978, -94], [820, -115], [413, -128], [258, -147], [60, -161], [-254, -250], [-493, -278], [-707, -320], [-961, -408], [-1160, -449], [-1309, -524]], [[1345, 34], [1189, -69], [978, -94], [820, -115], [439, -173], [267, -185], [109, -251], [-211, -307], [-428, -408], [-596, -448], [-847, -604], [-1019, -589], [-1241, -695]], [[1345, 34], [1189, -69], [951, -68], [512, -86], [159, -142], [-56, -144], [-362, -160], [-569, -143], [-772, -35], [-898, 66], [-1070, 219], [-1181, 292], [-1289, 558]], [[1345, 34], [1189, -69], [951, -68], [512, -86], [159, -142], [-56, -144], [-310, -118], [-530, -84], [-654, -2], [-806, 84], [-905, 246], [-1008, 375], [-1021, 750]], [[1297, 542], [1181, 330], [1041, 250], [676, 110], [429, -12], [5, -105], [-310, -118], [-530, -84], [-654, -2], [-806, 84], [-905, 246], [-1008, 375], [-1021, 750]], [[1297, 542], [1181, 330], [1041, 250], [676, 110], [429, -12], [7, -105], [-310, -118], [-530, -84], [-655, -18], [-806, 84], [-927, 189], [-1073, 291], [-1318, 474]], [[1297, 542], [1181, 330], [1041, 250], [676, 110], [429, -12], [7, -105], [-310, -118], [-530, -84], [-631, -85], [-775, -77], [-923, -28], [-1133, -46], [-1294, -10]], [[1297, 542], [1181, 330], [1041, 250], [676, 110], [429, -12], [243, -126], [-141, -203], [-340, -201], [-500, -218], [-616, -254], [-854, -240], [-1115, -272], [-1312, -336]], [[1297, 542], [1181, 330], [1041, 250], [676, 110], [429, -12], [243, -126], [-141, -203], [-307, -229], [-398, -281], [-562, -321], [-647, -446], [-930, -540], [-1073, -726]], [[1293, -558], [1192, -467], [1069, -395], [948, -305], [733, -245], [243, -126], [-141, -203], [-307, -229], [-398, -281], [-562, -321], [-647, -446], [-930, -540], [-1073, -726]], [[1293, -558], [1192, -467], [1069, -395], [948, -305], [733, -245], [243, -126], [-141, -203], [-307, -229], [-398, -281], [-568, -262], [-857, -301], [-1055, -406], [-1353, -380]], [[1293, -558], [1192, -467], [1069, -395], [948, -305], [733, -245], [243, -126], [-141, -203], [-307, -229], [-426, -197], [-590, -195], [-905, -120], [-1100, -72], [-1300, 225]], [[1293, -558], [1192, -467], [1069, -395], [948, -305], [733, -245], [243, -126], [-141, -203], [-307, -229], [-497, -179], [-633, -130], [-917, 33], [-1079, 184], [-1220, 412]], [[1293, -558], [1192, -467], [1069, -395], [948, -305], [733, -245], [243, -126], [-141, -203], [-307, -229], [-461, -55], [-602, -25], [-857, 181], [-921, 416], [-909, 805]],
      //        //下往上
      [[-279, -786], [-92, -667], [45, -582], [618, -388], [436, -239], [176, -173], [-141, -203], [-307, -229], [-461, -55], [-602, -25], [-857, 181], [-921, 416], [-909, 805]], [[-279, -786], [-92, -667], [45, -582], [618, -388], [436, -239], [176, -173], [126, -95], [-26, -92], [-157, 40], [-362, 152], [-543, 358], [-721, 502], [-401, 770]], [[-279, -786], [-78, -718], [133, -652], [618, -388], [436, -239], [392, -130], [254, -77], [194, -49], [79, 44], [60, 214], [-85, 418], [-140, 630], [-401, 770]], [[-279, -786], [-78, -718], [133, -652], [618, -388], [459, -232], [392, -130], [304, -80], [267, -2], [222, 130], [253, 319], [330, 465], [544, 684], [858, 803]], [[841, -837], [683, -745], [672, -600], [618, -388], [459, -232], [392, -130], [304, -80], [267, -2], [222, 130], [253, 319], [330, 465], [544, 684], [858, 803]]];
      FishPathConfig.formatConfig = [];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishPathInfo.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "01cc7inmGJFtK0J67ksAd5Y", "FishPathInfo", undefined);
      var FishPathInfo = exports('FishPathInfo', function FishPathInfo(pathId, path) {
        this.pathId = void 0;
        this.path = [];
        this.pathId = pathId;
        this.path = path;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishSetting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager2.ts', './DialogBase.ts', './MusicPrefab.ts', './SoundPrefab.ts', './PrefabLoader.ts', './GameConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Slider, instantiate, EventManager, DialogBase, MusicPrefab, SoundPrefab, PrefabLoader, GameConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Slider = module.Slider;
      instantiate = module.instantiate;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      DialogBase = module.default;
    }, function (module) {
      MusicPrefab = module.default;
    }, function (module) {
      SoundPrefab = module.default;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ce79eTdH+FF/bKc/I8Hc7+h", "FishSetting", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishSetting = exports('default', (_dec = ccclass('FishSetting'), _dec2 = property({
        type: Slider
      }), _dec3 = property({
        type: Slider
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_DialogBase) {
        _inheritsLoose(FishSetting, _DialogBase);
        function FishSetting() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _DialogBase.call.apply(_DialogBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "musicSlider", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundSlider", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FishSetting.prototype;
        _proto.onLoadMe = function onLoadMe() {
          EventManager.instance.addSliderEvent(this.node, this.musicSlider.node, "onMusicSlider", 0);
          EventManager.instance.addSliderEvent(this.node, this.soundSlider.node, "onSoundSlider", 0);
          this.refresh();
        };
        _proto.onMusicSlider = function onMusicSlider(slider, customEventData) {
          var percent = Number(slider.progress.toFixed(3));
          // let maxMoney: number = Math.max(UserInfoModel.userScore - 10, 0)
          // this.nowExchangeNum = Math.floor(maxMoney * this.nowPercent);
          // this.refresh();
          MusicPrefab.changeVolumn(percent);
          this.refresh();
        };
        _proto.onSoundSlider = function onSoundSlider(slider, customEventData) {
          var percent = Number(slider.progress.toFixed(3));
          SoundPrefab.changeVolumn(percent);
          this.refresh();
        };
        _proto.refresh = function refresh() {
          this.musicSlider.progress = MusicPrefab.musicVolumn;
          this.soundSlider.progress = SoundPrefab.soundVolumn;
        };
        FishSetting.show = function show(parentNode) {
          if (parentNode === void 0) {
            parentNode = null;
          }
          PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "game/dialog/FishSetting", function (loadedResource) {
            if (!parentNode) {
              parentNode = DialogBase.GetRootCanvas();
            }
            var node = instantiate(loadedResource);
            parentNode.addChild(node);
            node.setPosition(0, 0);
          });
        };
        return FishSetting;
      }(DialogBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicSlider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundSlider", [_dec3], {
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

System.register("chunks:///_virtual/FishSharkGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './SubGameDef.ts', './SubGameMgr.ts', './ModuleDef.ts', './NetGameServer.ts', './ResourcePreload.ts', './MusicConfig.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, GameMgr, SubGameDef, SubGameMgr, ModuleDef, gameNet, ResourcePreload, MusicConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameMgr = module.GameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      gameNet = module.gameNet;
    }, function (module) {
      ResourcePreload = module.default;
    }, function (module) {
      MusicConfig = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "96ab0lK1PZIjbfUJAR7MjnN", "FishSharkGameMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishSharkGameMgr = exports('FishSharkGameMgr', (_dec = ccclass('FishSharkGameMgr'), _dec(_class = (_class2 = /*#__PURE__*/function (_GameMgr) {
        _inheritsLoose(FishSharkGameMgr, _GameMgr);
        function FishSharkGameMgr() {
          var _this;
          _this = _GameMgr.call(this) || this;
          _this._fishList = void 0;
          //鱼
          _this._fishGroup = void 0;
          _this._getData = void 0;
          _this._bulletList = void 0;
          _this._lastBulletId = void 0;
          //从服务器获取的配置信息
          _this.fishConfig = void 0;
          _this._gameType = SubGameDef.FISH_SHARK;
          _this._entryScene = null;
          _this._gameScene = {
            name: 'game_fish_shark',
            bundle: ModuleDef.FISH_SHARK
          };
          _this._loadingScene = {
            name: 'subgame_loading',
            bundle: ModuleDef.BASIC
          };
          return _this;
        }
        var _proto = FishSharkGameMgr.prototype;
        _proto.init = function init() {
          this._fishList = [];
          this._bulletList = [];
          this._lastBulletId = 0;
          gameNet.listenMsg("fish/NewFish", this.onNet_NewFish, this);
          gameNet.listenMsg("fish/RoomFish", this.onNet_RoomFish, this);
          gameNet.listenMsg("fish/FishWave", this.onNet_FishWave, this);
          gameNet.listenMsg("fish/NewFishGroup", this.onNet_FishGroup, this);
        };
        _proto.uinit = function uinit() {
          this._getData = false;
          gameNet.unlistenMsgAllByThis(this);
        }
        /**获取数据 获取过数据后 清空 为了场景没加载好，漏掉消息*/;
        _proto.getInitData = function getInitData() {
          this._getData = true;
          var result = [this._fishList, this._fishGroup, this._bulletList, this._lastBulletId];
          return result;
        };
        _proto.onNet_NewFish = function onNet_NewFish(msg) {
          if (this._getData) {
            return;
          }
          this._fishList.push(msg);
        };
        _proto.onNet_RoomFish = function onNet_RoomFish(msg) {
          if (this._getData) {
            return;
          }
          for (var i = 0; i < msg.fishes.length; i++) {
            this.onNet_NewFish(msg.fishes[i]);
          }
          if (msg.bullets) {
            for (var j = 0; j < msg.bullets.length; j++) {
              this._bulletList.push(msg.bullets[j]);
            }
          }
          if (msg.lastBulletId) {
            this._lastBulletId = Number(msg.lastBulletId);
          }
        };
        _proto.onNet_FishWave = function onNet_FishWave(msg) {
          if (this._getData) {
            return;
          }
          this._fishGroup = null;
          this._fishList = [];
        };
        _proto.onNet_FishGroup = function onNet_FishGroup(msg) {
          if (this._getData) {
            return;
          }
          this._fishGroup = msg;
        }
        /**
         * 加载资源
         */;
        _proto.preLoadRes = /*#__PURE__*/
        function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(processFun) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  MusicConfig.init();
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    ResourcePreload.instance.preLoad(function () {
                      resolve(true);
                    }, processFun);
                    return true;
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function preLoadRes(_x) {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }()
        /**
        * 请求服务器配置
        * @returns 
        */;

        _proto.requestFishConfig = /*#__PURE__*/
        function () {
          var _requestFishConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var cfg;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return gameNet.callApi("fish/FishConfig", {});
                case 2:
                  cfg = _context2.sent;
                  this.fishConfig = cfg.isSucc ? cfg.res : null;
                  return _context2.abrupt("return", true);
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function requestFishConfig() {
            return _requestFishConfig.apply(this, arguments);
          }
          return requestFishConfig;
        }()
        /** 
         * 获取子弹的金币消耗
        */;

        _proto.getBulletCoin = function getBulletCoin(bulletLev) {
          if (this.fishConfig) {
            for (var i = 0; i < this.fishConfig.bullets.length; i++) {
              if (this.fishConfig.bullets[i].bulletLevel == bulletLev) {
                return this.fishConfig.bullets[i].needGolds;
              }
            }
          }
          return -1;
        };
        _createClass(FishSharkGameMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new FishSharkGameMgr();
            }
            return this._inst;
          }
        }]);
        return FishSharkGameMgr;
      }(GameMgr), _class2._inst = void 0, _class2)) || _class));
      SubGameMgr.inst.registerGameMgr(FishSharkGameMgr.inst);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishSetting.ts', './FishManager.ts', './CannonManager.ts', './UserMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Animation, Node, Vec3, tween, Tween, Component, FishSetting, FishManager, CannonManager, UserMgr;
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
      Animation = module.Animation;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      FishSetting = module.default;
    }, function (module) {
      FishManager = module.default;
    }, function (module) {
      CannonManager = module.default;
    }, function (module) {
      UserMgr = module.UserMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "47604c854NMlIvb9bkfIwNK", "FishUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishUI = exports('default', (_dec = ccclass('FishUI'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Animation
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishUI, _Component);
        function FishUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txtScore", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveEffect", _descriptor3, _assertThisInitialized(_this));
          _this.score = 0;
          _this._vec3Cache = void 0;
          return _this;
        }
        var _proto = FishUI.prototype;
        _proto.onLoad = function onLoad() {
          FishUI.instance = this;
          this._vec3Cache = new Vec3();
          this.clickEffect.node.active = false;
          this.waveEffect.active = false;
          this.score = UserMgr.inst.coin;
        };
        _proto.start = function start() {
          this.refreshScore();
        };
        _proto.playClickEffect = function playClickEffect(p) {
          this._vec3Cache.x = p.x;
          this._vec3Cache.y = p.y;
          this._vec3Cache.z = 0;
          this.clickEffect.node.setPosition(this._vec3Cache);
          this.clickEffect.node.active = true;
          this.clickEffect.play();
        };
        _proto.playWaveEffect = function playWaveEffect() {
          var _this2 = this;
          this.waveEffect.active = true;
          this.waveEffect.setPosition(1292.703, 0);
          tween(this.waveEffect).to(2, {
            position: new Vec3(-1319.969, 0, 0)
          }).call(function () {
            _this2.waveEffect.active = false;
            FishManager.instance.startFishMap();
          }).start();
        };
        _proto.onClickPre = function onClickPre() {
          if (CannonManager.instance.cannonType > 1) {
            CannonManager.instance.cannonType--;
            CannonManager.instance.refreshCannon();
          }
        };
        _proto.onClickNext = function onClickNext() {
          if (CannonManager.instance.cannonType < 7) {
            CannonManager.instance.cannonType++;
            CannonManager.instance.refreshCannon();
          }
        };
        _proto.refreshScore = function refreshScore() {
          this.txtScore.string = this.score + "";
        };
        _proto.onClickSetting = function onClickSetting() {
          FishSetting.show();
        };
        _proto.onDestroy = function onDestroy() {
          FishUI.instance = null;
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.node);
          //this.node.stopAllActions();
        };

        return FishUI;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "waveEffect", [_dec4], {
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

System.register("chunks:///_virtual/FishWiki.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DialogBase.ts', './FishConfig.ts', './FishManager.ts', './PrefabLoader.ts', './GameConfig.ts', './TimeHelper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ScrollView, Prefab, Vec3, instantiate, Label, Animation, DialogBase, FishConfig, FishManager, PrefabLoader, GameConfig, TimeHelper;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Label = module.Label;
      Animation = module.Animation;
    }, function (module) {
      DialogBase = module.default;
    }, function (module) {
      FishConfig = module.FishConfig;
    }, function (module) {
      FishManager = module.default;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      TimeHelper = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1d85aRnV69ArJ0LTxKzip6l", "FishWiki", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishWiki = exports('default', (_dec = ccclass('FishWiki'), _dec2 = property({
        type: ScrollView
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_DialogBase) {
        _inheritsLoose(FishWiki, _DialogBase);
        function FishWiki() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _DialogBase.call.apply(_DialogBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wikiItemPrefab", _descriptor2, _assertThisInitialized(_this));
          _this._vec3Cache = void 0;
          return _this;
        }
        var _proto = FishWiki.prototype;
        _proto.onLoadMe = function onLoadMe() {
          this._vec3Cache = new Vec3(1, 1, 1);
          this.init();
        };
        _proto.init = function init() {
          this.scrollView.content.removeAllChildren();
          this.initOne(0);
        };
        _proto.initOne = function initOne(index) {
          var _this2 = this;
          if (index < FishConfig.config.length) {
            var itemNode = instantiate(this.wikiItemPrefab);
            this.scrollView.content.addChild(itemNode);
            var fishInfo = FishConfig.config[index];
            var txtName = itemNode.getChildByName("txtName").getComponent(Label);
            txtName.string = fishInfo.name;
            var txtLife = itemNode.getChildByName("txtLife").getComponent(Label);
            txtLife.string = "life:" + fishInfo.blood + "" + "type:" + fishInfo.fishType;
            var view = itemNode.getChildByName("view");
            view.removeAllChildren();
            var fish = FishManager.instance.createFishByType(fishInfo.fishType, 0);
            view.addChild(fish.node);
            fish.node.setPosition(0, 0);

            //缩放有bug
            //Vec3.multiplyScalar(this._vec3Cache, this._vec3Cache, fishInfo.wikiScale);
            //fish.node.setScale(this._vec3Cache);

            //fish.node.getComponent(Animation).play(); //v3 当前帧 不能播放
            TimeHelper.exeNextFrame(this.node, function () {
              return fish.node.getComponent(Animation).play();
            });
            this.scheduleOnce(function () {
              _this2.initOne(index + 1);
            }, 0.05);
          }
        };
        FishWiki.show = function show(parentNode) {
          if (parentNode === void 0) {
            parentNode = null;
          }
          PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "game/dialog/FishWiki", function (loadedResource) {
            if (!parentNode) {
              parentNode = DialogBase.GetRootCanvas();
            }
            var node = instantiate(loadedResource);
            parentNode.addChild(node);
            node.setPosition(0, 0);
          });
        };
        return FishWiki;
      }(DialogBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wikiItemPrefab", [_dec3], {
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

System.register("chunks:///_virtual/GameConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8b274NEC0xKxaKJL4zXpVlr", "GameConfig", undefined);
      var GameConfig = exports('GameConfig', function GameConfig() {});
      GameConfig.GameName = "resources/FishSingle";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEvent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "71a46REGoBDX7AuD+as9xFV", "GameEvent", undefined);
      var GameEvent = exports('default', function GameEvent() {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMusicHelper.ts", ['cc', './SoundPrefab.ts', './MusicPrefab.ts', './RandomUtil.ts'], function (exports) {
  var cclegacy, SoundPrefab, MusicPrefab, RandomUtil;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SoundPrefab = module.default;
    }, function (module) {
      MusicPrefab = module.default;
    }, function (module) {
      RandomUtil = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5515f8Z5X9FlJmwLlQ5E29B", "GameMusicHelper", undefined);
      var GameMusicHelper = exports('default', /*#__PURE__*/function () {
        function GameMusicHelper() {}
        GameMusicHelper.playBg = function playBg() {
          var randomIndex = RandomUtil.nextInt(1, 3);
          MusicPrefab.play("background-" + randomIndex);
        };
        GameMusicHelper.playFishDead = function playFishDead(fishType) {
          SoundPrefab.play("deadfish_" + fishType);
        };
        GameMusicHelper.playFire = function playFire() {
          SoundPrefab.play("fire");
        };
        return GameMusicHelper;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Grid.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "696c7BCwzJKGqf4qJjmOzW0", "Grid", undefined);
      var Grid = exports('default', /*#__PURE__*/function () {
        function Grid(row, col) {
          this.row = void 0;
          this.col = void 0;
          this.row = row;
          this.col = col;
        }
        Grid.init = function init(row, col) {
          return new Grid(row, col);
        };
        return Grid;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HaoEncrypt.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "87a63JYO5NI9pRdW/2ZWbtw", "HaoEncrypt", undefined);
      var HaoEncrypt = exports('default', /*#__PURE__*/function () {
        function HaoEncrypt() {}
        HaoEncrypt.encode = function encode(str) {
          var result = "";
          for (var i = 0; i < str.length; i++) {
            //遍历字符串
            var code = str.charCodeAt(i); // //逐个提取每个字符，并获取Unicode编码值
            if (i % 2 == 0) {
              code += 2;
            } else {
              code += 1;
            }
            result += String.fromCharCode(code);
          }
          return result;
        };
        HaoEncrypt.decode = function decode(str) {
          var result = "";
          for (var i = 0; i < str.length; i++) {
            //遍历字符串
            var code = str.charCodeAt(i); // //逐个提取每个字符，并获取Unicode编码值
            if (i % 2 == 0) {
              code -= 2;
            } else {
              code -= 1;
            }
            result += String.fromCharCode(code);
          }
          return result;
        };
        return HaoEncrypt;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HotUpdate2.ts", ['cc', './Logger2.ts', './EventManager2.ts', './VersionManager.ts', './ManifestConfig.ts', './ResourcePreload.ts', './CommonTips.ts'], function (exports) {
  var cclegacy, sys, Logger, EventManager, VersionManager, ManifestConfig, CommonTips;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      VersionManager = module.default;
    }, function (module) {
      ManifestConfig = module.default;
    }, null, function (module) {
      CommonTips = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a0006vTd9xJrpked6pacPSm", "HotUpdate", undefined);
      var HotUpdate = exports('default', /*#__PURE__*/function () {
        function HotUpdate() {
          this._am = void 0;
          this._checkListener = void 0;
          this.storagePath = void 0;
          this.manifestUrl = void 0;
          this.localBigVersion = void 0;
          this.remoteBigVersion = void 0;
          this.needUpdate = false;
          this.isUpdating = void 0;
          this.isFinishUpdate = void 0;
          this.isCheck = void 0;
          this.key = void 0;
          this.hotupdateIndex = void 0;
        }
        var _proto = HotUpdate.prototype;
        _proto.init = function init(index, key, manifestUrl) {
          if (key === void 0) {
            key = "Code-remote-asset";
          }
          if (sys.isNative) {
            this.hotupdateIndex = index;
            this.key = key;
            this.manifestUrl = manifestUrl;
            {
              this.storagePath = "获取this.storagePath报错了";
            }
            Logger.log(this, "init removeDirectory=", this.storagePath + "_temp");
          }
          this.needUpdate = false;
          this.isUpdating = false;
          this.isFinishUpdate = false;
          this.isCheck = false;
        };
        _proto.jumpToPack = function jumpToPack() {
          var url;
          if (sys.isNative) {
            if (sys.os == sys.OS.ANDROID) {
              url = VersionManager.instance.apkStoreUrl;
            } else if (sys.os == sys.OS.IOS) {
              url = VersionManager.instance.iosStoreUrl;
            }
          }
          Logger.info(this, "jumpToPack==androidurl===", VersionManager.instance.apkStoreUrl);
          Logger.info(this, "jumpToPack==iosStoreUrl===", VersionManager.instance.iosStoreUrl);
          Logger.info(this, "jumpToPack=====", url);
          sys.openURL(url);
          // cc.game.end();
        }

        //显示强制更新，即更细包面板
        ;

        _proto.showPackUpdateDialog = function showPackUpdateDialog() {
          CommonTips.showMsg("有新的版本需要更新，下载后请先卸载，以前的版本，再安装！");
          this.jumpToPack();
          this.showPackUpdateDialog();
        };
        _proto.checkCb = function checkCb(event) {
          Logger.log(this, 'checkCb Code: =================' + event.getEventCode());
          switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              Logger.info(this, "No local manifest file found, hot update skipped.");
              this.failUpdate();
              break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
              Logger.info(this, "Fail to download manifest file, hot update skipped.");
              this.failUpdate();
              break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
              Logger.info(this, "Already up to date with the latest remote version.");
              this.alreadyUpToDate();
              break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
              Logger.info(this, "new version found, please try to update.", this.localBigVersion, this.remoteBigVersion);
              if (this.key == VersionManager.Config_Key[0] && this.localBigVersion < this.remoteBigVersion) {
                //更新大版本
                Logger.info(this, "new version found, please try to update======packupdate=", this.localBigVersion, this.remoteBigVersion);
                this.showPackUpdateDialog();
              } else {
                Logger.info(this, "new version found, please try to update======hotupdate=", this.localBigVersion, this.remoteBigVersion);
                // this._am.update();
                this.needUpdate = true;
                EventManager.instance.dispatchEvent(HotUpdate.Event_On_NeedUpdate, this.key);
              }
              break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
              // var currentPercent = event.getPercent();
              // var totalPercent = event.getPercentByFile();
              // var fileprocess = event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
              // var byteprocess = event.getDownloadedBytes() + ' / ' + event.getTotalBytes();
              Logger.info(this, "UPDATE_PROGRESSION2222==========", this.key, event.getDownloadedBytes(), event.getTotalBytes());
              if (event.getTotalBytes() > 0) {
                EventManager.instance.dispatchEvent(HotUpdate.Event_On_Progress, event.getDownloadedBytes(), event.getTotalBytes(), this.key);
              }
              break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
              Logger.info(this, "UPDATE_FINISHED==============");
              this.finishUpdate(true);
              break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
              Logger.warn(this, "Update failed==========", event.getMessage());
              this.failUpdate();
              break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
              var fullFilePath = this.storagePath + "/" + event.getAssetId();
              var tempFilePath = this.storagePath + "_temp/" + event.getAssetId();
              Logger.warn(this, "fullFilePath====", fullFilePath);
              Logger.warn(this, "tempFilePath====", tempFilePath);
              // jsb.fileUtils.removeFile(tempFilePath);
              Logger.warn(this, "ERROR_UPDATING=============", event.getAssetId(), event.getMessage());
              this.failUpdate();
              break;
            default:
              // this.failUpdate();
              return;
          }
        };
        _proto.checkUpdate = function checkUpdate() {
          if (this.isUpdating || this.isCheck) {
            Logger.log(this, "Checking or updating ...");
            return;
          }
          var hotupdateUrlKey = VersionManager.Config_Url_Key[this.hotupdateIndex];
          Logger.log(this, "checkoutUpdate=====", this.manifestUrl, hotupdateUrlKey);
          if (!this._am) {
            this._am = new jsb.AssetsManager('', this.storagePath, this.versionCompareHandle.bind(this));
          }
          // this._am.setMaxConcurrentTask(1);
          var manifestStr = ManifestConfig.getManifestStr(hotupdateUrlKey);
          Logger.log(this, "checkUpdate=======manifestStr=======", manifestStr);
          var manifest = new jsb.Manifest(manifestStr, this.storagePath);
          this._am.setVerifyCallback(function (filePath, asset) {
            return true;
            // var md5 = calculateMD5(filePath);
            // if (md5 === asset.md5)
            //     return true;
            // else
            //     return false;
          });

          this._am.setEventCallback(this.checkCb.bind(this));
          // 设置事件回调
          this.isCheck = true;
          this._am.loadLocalManifest(manifest, this.storagePath);
          this._am.checkUpdate();
        }

        /**
         * @param versionA 本地版本 1.0.0
         * @param versionB 服务器版本 1.0.1
         * @param return -1需要更新 不用更新
         */;
        _proto.versionCompareHandle = function versionCompareHandle(versionA, versionB) {
          var vA = versionA.split('.');
          var vB = versionB.split('.');
          Logger.log(this, "versionCompareHandle======", this.key, VersionManager.Config_Key[0]);
          if (this.key == VersionManager.Config_Key[0]) {
            Logger.log(this, "versionCompareHandle22===", versionA, versionB);
            VersionManager.instance.nowVersion = versionA;
            VersionManager.instance.targetVersion = versionB;
          }
          this.localBigVersion = parseInt(vA[0]);
          this.remoteBigVersion = parseInt(vB[0]);
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) {
              continue;
            } else {
              return a - b;
            }
          }
          if (vB.length > vA.length) {
            return -1;
          } else {
            return 0;
          }
        };
        _proto.startUpdate = function startUpdate() {
          if (this.isUpdating) return;
          var localManifest = this._am.getLocalManifest();
          var remoteManifest = this._am.getRemoteManifest();
          Logger.log(this, "startUpdate111===", localManifest.getVersionFileUrl());
          Logger.log(this, "startUpdate2222===", localManifest.getManifestFileUrl());
          Logger.log(this, "startUpdate3333===", remoteManifest.getVersionFileUrl());
          Logger.log(this, "startUpdate4444===", remoteManifest.getManifestFileUrl());
          this.isUpdating = true;
          EventManager.instance.dispatchEvent(HotUpdate.Event_On_Progress, 0, 100, this.key);
          this._am.update();
        };
        _proto.disposeUpdate = function disposeUpdate() {
          if (this._am) {
            this._am.setVerifyCallback(null);
            this._am.setEventCallback(null);
          }
          this._am = null;
          this._checkListener = null;
          this.isUpdating = false;
          this.needUpdate = false;
        };
        _proto.failUpdate = function failUpdate() {
          this.disposeUpdate();
          this.isCheck = false;
          EventManager.instance.dispatchEvent(HotUpdate.Event_On_Fail_Update, this.key);
        };
        _proto.alreadyUpToDate = function alreadyUpToDate() {
          this.disposeUpdate();
          this.isFinishUpdate = true;
          EventManager.instance.dispatchEvent(HotUpdate.Event_On_ALREADY_UP_TO_DATE, this.key);
        };
        _proto.finishUpdate = function finishUpdate(needRestart) {
          Logger.info(this, "更新完成=====", needRestart);
          this.disposeUpdate();
          this.isFinishUpdate = true;
          EventManager.instance.dispatchEvent(HotUpdate.Event_Finish_Update, this.key, needRestart);
        };
        return HotUpdate;
      }());
      HotUpdate.Event_CheckUpdate = "Event_CheckUpdate";
      HotUpdate.Event_On_Progress = "HotUpdate_Event_On_Progress";
      HotUpdate.Event_On_NeedUpdate = "HotUpdate_Event_On_NeedUpdate";
      HotUpdate.Event_Finish_Update = "HotUpdate_Event_Finish";
      HotUpdate.Event_On_ALREADY_UP_TO_DATE = "HotUpdate_Event_On_ALREADY_UP_TO_DATE";
      HotUpdate.Event_On_Fail_Update = "HotUpdate_Event_On_Fail_Update";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpClient.ts", ['cc', './Logger2.ts'], function (exports) {
  var cclegacy, _decorator, Logger;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "97dbaajoLdC75q83neei9Ig", "HttpClient", undefined);
      var ccclass = _decorator.ccclass;
      var HttpClient = exports('default', (_dec = ccclass('HttpClient'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function HttpClient() {
          //= new HttpClient();
          //example
          // HttpClient.instance.request("http://localhost:8080/haohttp/test", ()=>{
          //     console.log("http 请求 end=============");
          // }, {"nickName":"jhao", "hh":1, "id":9527});
          this.methodType = "GET";
          this.responseType = "json";
          this.xhr = void 0;
        }
        var _proto = HttpClient.prototype;
        // --GET  or  POST
        _proto.setMethod = function setMethod(method) {
          if (method === void 0) {
            method = "GET";
          }
          this.methodType = method;
        };
        _proto.setParams = function setParams(paramsObj) {
          var resParams = "";
          var nowIndex = 1;
          for (var key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
              if (nowIndex == 1) {
                resParams += key + "=" + paramsObj[key];
              } else {
                resParams += "&" + key + "=" + paramsObj[key];
              }
              nowIndex += 1;
            }
          }
          Logger.log(this, "resParam===============", resParams);
          return resParams;
        };
        _proto.setResponseType = function setResponseType(responseType) {
          this.responseType = responseType;
        };
        _proto.setContentType = function setContentType() {};
        _proto.request = function request(url, callback, params, timeOut) {
          var _this = this;
          if (params === void 0) {
            params = null;
          }
          if (timeOut === void 0) {
            timeOut = 5 * 1000;
          }
          if (params && this.methodType == "GET") {
            var getParams = this.setParams(params);
            // getParams = StringUtil:encodeURI(params)
            getParams = encodeURI(getParams);
            url += "?" + getParams;
          }
          this.xhr = new XMLHttpRequest(); // http请求  fget    
          //this.xhr = cc.loader.getXMLHttpRequest();
          var xhr = this.xhr;
          xhr.responseType = this.responseType;
          xhr.timeout = timeOut;
          // xhr.setRequestHeader("Content-Type", "text/plain");
          xhr.onreadystatechange = function () {
            Logger.log(_this, "status======", xhr.status, xhr.readyState, xhr.statusText);
            // if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
            if (xhr.readyState == 4 && xhr.status == 200) {
              var response = xhr.response;
              Logger.log(_this, "http response1============", xhr);
              try {
                var testJson = JSON.stringify(response);
                Logger.log(_this, "http response json============", testJson);
                if (callback) {
                  callback(true, response);
                  callback = null;
                }
              } catch (error) {
                Logger.error(_this, "http response json=====error=======", error);
                if (callback) {
                  callback(false);
                  callback = null;
                }
              }
            } else if (xhr.readyState == 4 && xhr.status == 301) {
              //域名转移
              Logger.log(_this, "http response222============", xhr.getResponseHeader("Location"));
              // console.log("http response333============", xhr.getAllResponseHeaders());
              if (HttpClient.instance == null) HttpClient.instance = new HttpClient();
              HttpClient.instance.request(xhr.getResponseHeader("Location"), callback);
            } else if (xhr.readyState == 4 && xhr.status == 404) {
              Logger.log(_this, "http onError============");
              if (callback) {
                callback(false);
                callback = null;
              }
            } else {
              Logger.log(_this, "onreadystatechange else====", xhr.status, xhr.readyState, xhr.response);
              if (xhr.readyState == 4) {
                Logger.log(_this, "http onError else============");
                if (callback) {
                  callback(false);
                  callback = null;
                }
              }
            }
          };
          xhr.onprogress = function () {
            Logger.log(_this, "http onprogress===", xhr.status, xhr.readyState, xhr.response);
          };
          xhr.onerror = function () {
            Logger.log(_this, "http onError============");
            if (callback) {
              callback(false);
              callback = null;
            }
          };
          xhr.ontimeout = function () {
            Logger.log(_this, "http ontimeout============");
            if (callback) {
              callback(false);
              callback = null;
            }
          };
          Logger.log(this, "http request==============", url);
          Logger.log(this, "http request======method========", this.methodType);
          Logger.log(this, "http request======params========", params);
          xhr.open(this.methodType, url, true);
          xhr.setRequestHeader("content-type", "text/plain;charset=UTF-8");
          xhr.send(params);
        };
        _proto.getInfo = function getInfo(callback) {};
        return HttpClient;
      }(), _class2.instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PrefabLoader.ts', './GameConfig.ts', './DialogBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Quat, Vec3, instantiate, Component, PrefabLoader, GameConfig, DialogBase;
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
      Quat = module.Quat;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      DialogBase = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "17255n0balMXaC0r59RFvAh", "LoadingPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingPrefab = exports('default', (_dec = ccclass('LoadingPrefab'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingPrefab, _Component);
        function LoadingPrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingSp", _descriptor, _assertThisInitialized(_this));
          _this._quatCache = void 0;
          _this._vec3Cache = void 0;
          return _this;
        }
        var _proto = LoadingPrefab.prototype;
        _proto.onLoad = function onLoad() {
          this._quatCache = new Quat();
          this._vec3Cache = new Vec3();
        };
        _proto.start = function start() {};
        LoadingPrefab.close = function close() {
          if (!LoadingPrefab.instance) {
            return;
          }
          LoadingPrefab.instance.removeFromParent();
          LoadingPrefab.instance.destroy();
          LoadingPrefab.instance = null;
        };
        LoadingPrefab.preLoad = function preLoad() {
          return new Promise(function (resolve, reject) {
            PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "share/uicomponent/LoadingPrefab", function (loadedResource) {
              LoadingPrefab.prefab = loadedResource;
              resolve();
            });
          });
        };
        LoadingPrefab.createLoadingPrefab = function createLoadingPrefab(parentNode) {
          if (parentNode === void 0) {
            parentNode = null;
          }
          var dialogNode = instantiate(LoadingPrefab.prefab);
          LoadingPrefab.instance = dialogNode;
          if (!parentNode) {
            parentNode = DialogBase.GetRootCanvas();
          }
          parentNode.insertChild(dialogNode, LoadingPrefab.LoadingZorderIndex);
          dialogNode.setPosition(0, 0);
        };
        LoadingPrefab.show = /*#__PURE__*/function () {
          var _show = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parentNode) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (parentNode === void 0) {
                    parentNode = null;
                  }
                  if (!LoadingPrefab.instance) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  if (LoadingPrefab.prefab) {
                    _context.next = 6;
                    break;
                  }
                  _context.next = 6;
                  return LoadingPrefab.preLoad();
                case 6:
                  this.createLoadingPrefab(parentNode);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function show(_x) {
            return _show.apply(this, arguments);
          }
          return show;
        }();
        _proto.update = function update(dt) {
          this.loadingSp.getRotation(this._quatCache);
          Quat.toEuler(this._vec3Cache, this._quatCache);
          this._vec3Cache.z += 10;
          this.loadingSp.setRotationFromEuler(this._vec3Cache);
          if (this._vec3Cache.z >= 360) {
            this.loadingSp.getRotation(Quat.IDENTITY);
          }
        };
        LoadingPrefab.clear = function clear() {
          LoadingPrefab.instance = null;
          LoadingPrefab.prefab = null;
        };
        return LoadingPrefab;
      }(Component), _class3.instance = void 0, _class3.prefab = void 0, _class3.LoadingZorderIndex = 99, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingSp", [_dec2], {
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

System.register("chunks:///_virtual/LoadingScene2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MusicConfig.ts', './Logger2.ts', './ResourcePreload.ts', './SceneBase.ts', './SubGameMgr.ts', './SubGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, profiler, PhysicsSystem2D, dynamicAtlasManager, MusicConfig, Logger, ResourcePreload, SceneBase, SubGameMgr, SubGameDef;
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
      profiler = module.profiler;
      PhysicsSystem2D = module.PhysicsSystem2D;
      dynamicAtlasManager = module.dynamicAtlasManager;
    }, function (module) {
      MusicConfig = module.default;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      ResourcePreload = module.default;
    }, function (module) {
      SceneBase = module.default;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }, function (module) {
      SubGameDef = module.SubGameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "ba7869nNLVPpqvFaaPvcL/T", "LoadingScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingScene = exports('default', (_dec = ccclass('LoadingScene'), _dec2 = property({
        type: Node
      }), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_SceneBase) {
        _inheritsLoose(LoadingScene, _SceneBase);
        function LoadingScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SceneBase.call.apply(_SceneBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startGameBtnNode", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LoadingScene.prototype;
        _proto.onLoadMe = function onLoadMe() {
          this.baseInit();
          this.progressNode.active = false;
          tgx.UIMgr.inst.closeAll();
        };
        _proto.baseInit = function baseInit() {
          profiler.hideStats(); //showStats
          PhysicsSystem2D.instance.enable = true;
          if (dynamicAtlasManager) {
            dynamicAtlasManager.enabled = false;
          }
          MusicConfig.init();
        };
        _proto.preLoadRes = /*#__PURE__*/function () {
          var _preLoadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  ResourcePreload.instance.preLoad(function () {
                    _this2.startGame();
                  }, null);
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function preLoadRes() {
            return _preLoadRes.apply(this, arguments);
          }
          return preLoadRes;
        }();
        _proto.startGame = function startGame() {
          Logger.info(this, "startGame");
          SubGameMgr.inst.CreateRoom(SubGameDef.FISH_SHARK, true);
          //SceneManager.instance.sceneSwitch("game_fish_shark", true);
        }
        /**
         * @Description: 点击开始按钮
         */;
        _proto.onClickStartGameBtnEvent = function onClickStartGameBtnEvent() {
          this.preLoadRes();
          this.startGameBtnNode.active = false;
        };
        return LoadingScene;
      }(SceneBase), _class3.scriptName = "LoadingScene", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startGameBtnNode", [_dec3], {
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

System.register("chunks:///_virtual/LocalStorage.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6ac37fN36NJKK5prmANmqux", "LocalStorage", undefined);
      var LocalStorage = exports('default', /*#__PURE__*/function () {
        function LocalStorage() {}
        LocalStorage.setItem = function setItem(key, value) {
          sys.localStorage.setItem(LocalStorage.GamePreFlag + key, value);
        };
        LocalStorage.getItem = function getItem(key) {
          return sys.localStorage.getItem(LocalStorage.GamePreFlag + key);
        };
        LocalStorage.removeItem = function removeItem(key) {
          sys.localStorage.removeItem(LocalStorage.GamePreFlag + key);
        };
        LocalStorage.getInt = function getInt(key) {
          var tempValue = LocalStorage.getItem(key);
          var result = 0;
          if (tempValue) {
            result = parseInt(tempValue);
          }
          return result;
        };
        LocalStorage.setInt = function setInt(key, value) {
          LocalStorage.setItem(key, value.toString());
        };
        LocalStorage.getFloat = function getFloat(key) {
          var tempValue = LocalStorage.getItem(key);
          var result = 0;
          if (tempValue) {
            result = parseFloat(tempValue);
          }
          return result;
        };
        LocalStorage.setFloat = function setFloat(key, value) {
          LocalStorage.setItem(key, value.toString());
        };
        LocalStorage.getBoolean = function getBoolean(key) {
          var temp = LocalStorage.getInt(key);
          if (temp == 1) {
            return true;
          }
          return false;
        };
        LocalStorage.setBoolean = function setBoolean(key, value) {
          if (value) {
            LocalStorage.setInt(key, 1);
          } else {
            LocalStorage.setInt(key, 0);
          }
        };
        LocalStorage.clear = function clear() {
          sys.localStorage.clear();
        };
        return LocalStorage;
      }());
      LocalStorage.GamePreFlag = "fengshen-game-HaoLocalStorage";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Logger2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "64f5dkQG0BCGqV+MVM1/Xsz", "Logger", undefined);
      var LOG_LEVEL_TYPES = function LOG_LEVEL_TYPES() {};
      LOG_LEVEL_TYPES.DEBUG = 0;
      LOG_LEVEL_TYPES.LOG = 1;
      LOG_LEVEL_TYPES.INFO = 2;
      LOG_LEVEL_TYPES.WARN = 3;
      LOG_LEVEL_TYPES.ERROR = 4;
      var Log_Level_Names = ["debug", "log", "info", "warn", "error"];
      var Logger = exports('Logger', /*#__PURE__*/function () {
        function Logger() {}
        Logger.formatNow = function formatNow() {
          var date = new Date(); //后端返回的时间戳是秒
          return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
        };
        Logger.getLogPreKey = function getLogPreKey(nowLevel) {
          var str = "[" + Logger.formatNow() + "] " + Logger.tag + " [" + Log_Level_Names[nowLevel] + "] ";
          return str;
        };
        Logger.debug = function debug() {
          if (Logger.LEVEL > LOG_LEVEL_TYPES.DEBUG) {
            return;
          }
          var str = this.getLogPreKey(LOG_LEVEL_TYPES.DEBUG);
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }
          var fileStr = str + params.join(" ");
          // LogErrorFileUtil.debug(fileStr);
          if (this.Terminal_Log) {
            var _console;
            (_console = console).log.apply(_console, ["%c" + str, this.Log_Color_Config[LOG_LEVEL_TYPES.DEBUG]].concat(params));
          } else {
            console.info(fileStr);
          }
        };
        Logger.log = function log() {
          if (Logger.LEVEL > LOG_LEVEL_TYPES.LOG) {
            return;
          }
          var str = this.getLogPreKey(LOG_LEVEL_TYPES.LOG);
          for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
          }
          var fileStr = str + params.join(" ");
          // LogErrorFileUtil.log(fileStr);
          if (this.Terminal_Log) {
            var _console2;
            (_console2 = console).log.apply(_console2, ["%c" + str, this.Log_Color_Config[LOG_LEVEL_TYPES.DEBUG]].concat(params));
          } else {
            console.info(fileStr); //console.log(str, ...params)
          }
        };

        Logger.info = function info() {
          if (Logger.LEVEL > LOG_LEVEL_TYPES.INFO) {
            return;
          }
          var str = this.getLogPreKey(LOG_LEVEL_TYPES.INFO);
          for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            params[_key3] = arguments[_key3];
          }
          var fileStr = str + params.join(" ");
          if (this.Terminal_Log) {
            var _console3;
            (_console3 = console).info.apply(_console3, ["%c" + str, this.Log_Color_Config[LOG_LEVEL_TYPES.DEBUG]].concat(params));
          } else {
            console.info(fileStr);
          }
        };
        Logger.warn = function warn() {
          if (Logger.LEVEL > LOG_LEVEL_TYPES.WARN) {
            return;
          }
          var str = this.getLogPreKey(LOG_LEVEL_TYPES.WARN);
          for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            params[_key4] = arguments[_key4];
          }
          var fileStr = str + params.join(" ");
          if (this.Terminal_Log) {
            var _console4;
            (_console4 = console).warn.apply(_console4, ["%c" + str, this.Log_Color_Config[LOG_LEVEL_TYPES.DEBUG]].concat(params));
          } else {
            console.warn(fileStr);
          }
        };
        Logger.error = function error() {
          if (Logger.LEVEL > LOG_LEVEL_TYPES.ERROR) {
            return;
          }
          var str = this.getLogPreKey(LOG_LEVEL_TYPES.ERROR);
          for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            params[_key5] = arguments[_key5];
          }
          var fileStr = str + params.join(" ");
          if (this.Terminal_Log) {
            var _console5;
            (_console5 = console).error.apply(_console5, ["%c" + str, this.Log_Color_Config[LOG_LEVEL_TYPES.DEBUG]].concat(params));
          } else {
            console.error(fileStr);
          }
        };
        return Logger;
      }());
      Logger.tag = "[HaoJslog]";
      //可以设置当前游戏的前缀
      Logger.LEVEL = LOG_LEVEL_TYPES.WARN;
      //当前Logger等级
      Logger.Log_Color_Config = ["color:#890;font-size:10px;", "color:#000;font-size:11px;", "color:#09f;font-size:12px;", "color:#f90;font-size:13px;", "color:#f00;font-size:15px;"];
      Logger.Terminal_Log = false;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ManifestConfig.ts", ['cc', './DateUtil.ts', './NetConfig.ts'], function (exports) {
  var cclegacy, DateUtil, NetConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DateUtil = module.default;
    }, function (module) {
      NetConfig = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "711d7JAZJ9MtJ0NBuE5eeuY", "ManifestConfig", undefined);
      var ManifestConfig = exports('default', /*#__PURE__*/function () {
        function ManifestConfig() {}
        ManifestConfig.getManifestStr = function getManifestStr(key) {
          var obj = {};
          obj["packageUrl"] = NetConfig.hotupdateUrl + "/hotupdate/" + key + "/";
          obj["remoteManifestUrl"] = NetConfig.hotupdateUrl + "/hotupdate/" + key + "/project.manifest?t=" + DateUtil.now();
          obj["remoteVersionUrl"] = NetConfig.hotupdateUrl + "/hotupdate/" + key + "/version.manifest?t=" + DateUtil.now();
          obj["version"] = ManifestConfig.version;
          obj["assets"] = {};
          obj["searchPaths"] = [];
          return JSON.stringify(obj);
        };
        return ManifestConfig;
      }());
      ManifestConfig.packageUrl = "";
      ManifestConfig.remoteManifestUrl = "";
      ManifestConfig.remoteVersionUrl = "";
      ManifestConfig.version = "1.0.0";
      //更新包要更新这里
      ManifestConfig.assets = {};
      ManifestConfig.searchPaths = [];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MathUtils.ts", ['cc'], function (exports) {
  var cclegacy, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93c7euZThxDQ5AXuFETiBZq", "MathUtils", undefined);
      var MathUtils = exports('default', /*#__PURE__*/function () {
        function MathUtils() {}
        /**
             * 2个点之前的直线距离
             * @param p1 
             * @param p2 
             */
        MathUtils.distance = function distance(x1, y1, x2, y2) {
          // 设两点A（X1,Y1）,B（X2,Y2）
          // 距离D=（X2-X1）的平方+（Y2-Y1）平方的和开平方
          return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        }

        /**
         * 2点间的向量
         * @param p1 
         * @param p2 
         */;
        MathUtils.sub = function sub(p1, p2) {
          return new Vec2(p1.x - p2.x, p1.y - p2.y);
        }

        /**
         * 弧度转角度 
         * @param radians 
         */;
        MathUtils.radiansToDegrees = function radiansToDegrees(radians) {
          return 180 / Math.PI * radians;
        }

        /**
         * 角度转弧度 
         * @param degrees 
         */;
        MathUtils.degreesToRadians = function degreesToRadians(degrees) {
          return Math.PI * degrees / 180;
        }

        /**
         * 返回2点间的弧度
         * @param startP 
         * @param endP 
         */;
        MathUtils.p2pRad = function p2pRad(startP, endP) {
          var rad = Math.atan2(endP.y - startP.y, endP.x - startP.x);
          return rad;
        }

        /**
         * 针对捕鱼鱼的方向特定实现的鱼方向转换
         * @param rot 
         */;
        MathUtils.rotation2Fish = function rotation2Fish(rot) {
          if (rot >= 0 && rot <= 180) {
            rot = 180 - rot;
          } else {
            rot = -180 - rot;
          }
          return rot;
        };
        return MathUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/module_fish_shark", ['./FishSharkGameMgr.ts', './FishBase.ts', './FishBulletBase.ts', './FishMover.ts', './FishNetBase.ts', './FishSetting.ts', './FishUI.ts', './FishWiki.ts', './CommonEvent.ts', './ManifestConfig.ts', './MusicConfig.ts', './NetConfig.ts', './CommonTips.ts', './DarkLayer.ts', './DialogBase.ts', './LoadingPrefab.ts', './MusicPrefab.ts', './SoundPrefab.ts', './TextureMgr.ts', './AdapterHelper.ts', './BitUtil.ts', './ColorHelper.ts', './DateUtil.ts', './EventManager2.ts', './Grid.ts', './HaoEncrypt.ts', './HotUpdate2.ts', './HttpClient.ts', './LocalStorage.ts', './Logger2.ts', './MathUtils.ts', './MoveHelper.ts', './PrefabLoader.ts', './RandomUtil.ts', './ShaderHelper.ts', './VersionManager.ts', './FishConfig.ts', './FishInfo.ts', './FishMap.ts', './FishMapInfo.ts', './FishPathConfig.ts', './FishPathInfo.ts', './GameConfig.ts', './GameEvent.ts', './BulletManager.ts', './CannonManager.ts', './FishManager.ts', './FishNetManager.ts', './ScoreManager.ts', './ResourcePrefab.ts', './ScorePrefab.ts', './ShaderMaterialPrefab.ts', './FishGameScene.ts', './LoadingScene2.ts', './SceneBase.ts', './SceneManager.ts', './StartScene.ts', './Astar.ts', './GameMusicHelper.ts', './ResourcePreload.ts', './TimeHelper.ts', './UIRoot.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MoveHelper.ts", ['cc'], function (exports) {
  var cclegacy, Vec3, Vec2, Size;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Size = module.Size;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4304f0FywNG2qam90L+vlNe", "MoveHelper", undefined);
      var MoveHelper = exports('MoveHelper', /*#__PURE__*/function () {
        function MoveHelper() {}
        MoveHelper.moveNodeNew = function moveNodeNew(node, speed, dt) {
          if (!node) {
            return false;
          }
          var posX = node.position.x;
          var posY = node.position.y;
          posX += dt * speed * Math.cos(node.angle * Math.PI / 180);
          posY += dt * speed * Math.sin(node.angle * Math.PI / 180);
          node.setPosition(new Vec3(posX, posY));
          if (posX > MoveHelper._visibleSize.width / 2 + 100 || posX < -MoveHelper._visibleSize.width / 2 - 100 || posY > MoveHelper._visibleSize.height / 2 + 100 || posY < -MoveHelper._visibleSize.height / 2 - 100) {
            return false;
          }
          return true;
        }

        // /**
        //      * @Description: 更新子弹位置
        //      * @Date: 2024-06-13 08:12:20
        //      * @Author: GFanStudio-LeeSir-JYJ add
        //      * @return {*}
        //      */
        //     private _updateBulletPos(dt: number) {
        //         if (!this.node) {
        //             return;
        //         }
        //         let posX = this.node.position.x;
        //         let posY = this.node.position.y;
        //         posX += (dt * this._shotMoveSpeed * Math.sin(-this.node.angle * Math.PI / 180));
        //         posY += (dt * this._shotMoveSpeed * Math.cos(-this.node.angle * Math.PI / 180));
        //         this.node.setPosition(new Vec3(posX, posY));
        //         if (posX > this._visibleSize.width / 2 + 100 ||
        //             posX < -this._visibleSize.width / 2 - 100 ||
        //             posY > this._visibleSize.height / 2 + 100 ||
        //             posY < -this._visibleSize.height / 2 - 100) {

        //             Tween.stopAllByTarget(this.node);
        //             this.node.active = false;
        //             this.node.removeFromParent();
        //             this.node.parent = null;
        //             // this.node.destroy();
        //             BulletNodePool.put(this.node);
        //         }
        //     }
        ;

        return MoveHelper;
      }());
      MoveHelper._vec3 = new Vec3();
      MoveHelper._vec2_0 = new Vec2();
      MoveHelper._vec2_1 = new Vec2();
      MoveHelper._visibleSize = new Size(2208, 1242);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MusicConfig.ts", ['cc', './GameConfig.ts'], function (exports) {
  var cclegacy, GameConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "92bd7+gyX5Lb7UY0dTXPAP1", "MusicConfig", undefined);
      var MusicConfig = exports('default', /*#__PURE__*/function () {
        function MusicConfig() {}
        //资源加载后cache路径
        MusicConfig.init = function init() {
          // //音乐要预加载的配置
          MusicConfig.musicKey2Path.set("background-1", GameConfig.GameName + "/" + "music/background-1");
          MusicConfig.musicKey2Path.set("background-2", GameConfig.GameName + "/" + "music/background-2");
          MusicConfig.musicKey2Path.set("background-3", GameConfig.GameName + "/" + "music/background-3");
          MusicConfig.musicKey2Path.set("deadfish_1", GameConfig.GameName + "/" + "music/deadfish_1");
          MusicConfig.musicKey2Path.set("deadfish_2", GameConfig.GameName + "/" + "music/deadfish_2");
          MusicConfig.musicKey2Path.set("deadfish_3", GameConfig.GameName + "/" + "music/deadfish_3");
          MusicConfig.musicKey2Path.set("deadfish_4", GameConfig.GameName + "/" + "music/deadfish_4");
          MusicConfig.musicKey2Path.set("deadfish_5", GameConfig.GameName + "/" + "music/deadfish_5");
          MusicConfig.musicKey2Path.set("deadfish_6", GameConfig.GameName + "/" + "music/deadfish_6");
          MusicConfig.musicKey2Path.set("deadfish_7", GameConfig.GameName + "/" + "music/deadfish_7");
          MusicConfig.musicKey2Path.set("deadfish_8", GameConfig.GameName + "/" + "music/deadfish_8");
          MusicConfig.musicKey2Path.set("deadfish_9", GameConfig.GameName + "/" + "music/deadfish_9");
          MusicConfig.musicKey2Path.set("deadfish_10", GameConfig.GameName + "/" + "music/deadfish_10");
          MusicConfig.musicKey2Path.set("deadfish_11", GameConfig.GameName + "/" + "music/deadfish_11");
          MusicConfig.musicKey2Path.set("deadfish_12", GameConfig.GameName + "/" + "music/deadfish_12");
          MusicConfig.musicKey2Path.set("deadfish_13", GameConfig.GameName + "/" + "music/deadfish_13");
          MusicConfig.musicKey2Path.set("deadfish_14", GameConfig.GameName + "/" + "music/deadfish_14");
          MusicConfig.musicKey2Path.set("deadfish_15", GameConfig.GameName + "/" + "music/deadfish_15");
          MusicConfig.musicKey2Path.set("deadfish_16", GameConfig.GameName + "/" + "music/deadfish_16");
          MusicConfig.musicKey2Path.set("deadfish_17", GameConfig.GameName + "/" + "music/deadfish_17");
          MusicConfig.musicKey2Path.set("deadfish_18", GameConfig.GameName + "/" + "music/deadfish_18");
          MusicConfig.musicKey2Path.set("deadfish_19", GameConfig.GameName + "/" + "music/deadfish_19");
          MusicConfig.musicKey2Path.set("deadfish_20", GameConfig.GameName + "/" + "music/deadfish_20");
          MusicConfig.musicKey2Path.set("deadfish_21", GameConfig.GameName + "/" + "music/deadfish_21");
          MusicConfig.musicKey2Path.set("deadfish_22", GameConfig.GameName + "/" + "music/deadfish_22");
          MusicConfig.musicKey2Path.set("deadfish_23", GameConfig.GameName + "/" + "music/deadfish_23");
          MusicConfig.musicKey2Path.set("deadfish_24", GameConfig.GameName + "/" + "music/deadfish_24");
          MusicConfig.musicKey2Path.set("deadfish_25", GameConfig.GameName + "/" + "music/deadfish_25");
          MusicConfig.musicKey2Path.set("deadfish_26", GameConfig.GameName + "/" + "music/deadfish_26");
          MusicConfig.musicKey2Path.set("deadfish_27", GameConfig.GameName + "/" + "music/deadfish_27");
          MusicConfig.musicKey2Path.set("deadfish_28", GameConfig.GameName + "/" + "music/deadfish_28");
          MusicConfig.musicKey2Path.set("deadfish_29", GameConfig.GameName + "/" + "music/deadfish_29");
          MusicConfig.musicKey2Path.set("fire", GameConfig.GameName + "/" + "music/fire");
        };
        return MusicConfig;
      }());
      MusicConfig.musicKey2Path = new Map();
      //资源预加载路径
      MusicConfig.musicKey2Cache = new Map();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MusicPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger2.ts', './PrefabLoader.ts', './LocalStorage.ts', './MusicConfig.ts', './GameConfig.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, AudioClip, AudioSource, instantiate, Component, Logger, PrefabLoader, LocalStorage, MusicConfig, GameConfig, ResourceMgr, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      LocalStorage = module.default;
    }, function (module) {
      MusicConfig = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "e947e8HuVhEcbWl8KzX4pnS", "MusicPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // /**
      //  * 背景音乐
      //  */
      var MusicPrefab = exports('default', (_dec = ccclass('MusicPrefab'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MusicPrefab, _Component);
        function MusicPrefab() {
          return _Component.apply(this, arguments) || this;
        }
        MusicPrefab.play = function play(key) {
          var _this = this;
          var url = MusicConfig.musicKey2Path.get(key);
          if (url) {
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.FISH_SHARK, url, AudioClip, function (error, clip) {
              if (error) {
                Logger.warn("load music error===", error.message);
              } else {
                if (clip) {
                  _this.instance.node.getComponent(AudioSource).clip = clip;
                  _this.instance.node.getComponent(AudioSource).volume = _this.musicVolumn;
                  _this.instance.node.getComponent(AudioSource).play();
                  _this.instance.node.getComponent(AudioSource).loop = true;
                }
              }
            });
          } else {
            Logger.warn("播放不存在的music=", key);
          }
        };
        MusicPrefab.changeVolumn = function changeVolumn(nowVolumn) {
          this.musicVolumn = nowVolumn;
          this.instance.node.getComponent(AudioSource).volume = nowVolumn;
          LocalStorage.setItem(MusicPrefab.MUSIC_VOLUMN_KEY, this.musicVolumn.toString());
        };
        MusicPrefab.preInit = function preInit() {
          this.musicVolumn = parseFloat(LocalStorage.getItem(MusicPrefab.MUSIC_VOLUMN_KEY));
          if (isNaN(this.musicVolumn)) {
            this.musicVolumn = 1;
          }
        };
        MusicPrefab.preLoad = function preLoad() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "share/uicomponent/MusicPrefab", function (loadedResource) {
              MusicPrefab.instance = instantiate(loadedResource).getComponent(MusicPrefab);
              _this2.preInit();
              resolve();
            });
          });
        };
        MusicPrefab.destory = function destory() {
          if (MusicPrefab.instance) {
            MusicPrefab.instance.getComponent(AudioSource).stop();
            MusicPrefab.instance.destroy();
          }
          MusicPrefab.instance = null;
        };
        return MusicPrefab;
      }(Component), _class2.instance = void 0, _class2.MUSIC_VOLUMN_KEY = "musicVolumn", _class2.musicVolumn = 1, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4e758w8QeJP56DqQ/5r6bOB", "NetConfig", undefined);
      var NetConfig = exports('default', function NetConfig() {});
      NetConfig.hotupdateUrl = "http://localhost:33/hotupdate";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrefabLoader.ts", ['cc', './Logger2.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var cclegacy, _decorator, Prefab, Logger, ResourceMgr, ModuleDef;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "10db6c2ElVKKJGh/kxBMS0p", "PrefabLoader", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PrefabLoader = exports('default', (_dec = ccclass('PrefabLoader'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function PrefabLoader() {}
        PrefabLoader.loadPrefab = function loadPrefab(url, callback) {
          var _this = this;
          if (this.isLoading) return;
          this.isLoading = true;
          ResourceMgr.inst.loadResByModuleBundle(ModuleDef.FISH_SHARK, url, Prefab, function (error, loadedResource) {
            if (error) {
              Logger.warn(_this, '载入Prefab失败, 原因:', url, error.message);
              return;
            }
            if (!(loadedResource instanceof Prefab)) {
              Logger.warn(_this, '你载入的不是Prefab, 你做了什么事?');
              return;
            }
            callback(loadedResource);
            _this.isLoading = false;
          });
        };
        return PrefabLoader;
      }(), _class2.isLoading = false, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RandomUtil.ts", ['cc'], function (exports) {
  var cclegacy, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09813GFxURHmYjNMTSqTaAR", "RandomUtil", undefined);
      var RandomUtil = exports('default', /*#__PURE__*/function () {
        function RandomUtil() {}
        //随机minNum到maxNum的数字 （包含maxNum）
        RandomUtil.nextInt = function nextInt(minNum, maxNum) {
          return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
        };
        RandomUtil.nextNumber = function nextNumber(minNum, maxNum) {
          return Math.random() * (maxNum - minNum) + minNum;
        };
        RandomUtil.nextSign = function nextSign() {
          var temp = Math.random();
          if (temp < 0.5) {
            return 1;
          }
          return -1;
        };
        RandomUtil.nextBoolean = function nextBoolean() {
          var temp = Math.random();
          if (temp < 0.5) {
            return true;
          }
          return false;
        };
        RandomUtil.randomArr = function randomArr(nowArr, needNum) {
          var tempArr = nowArr.concat();
          var resultArr = [];
          for (var index = 0; index < needNum; index++) {
            if (tempArr.length <= 0) {
              break;
            }
            var randomIndex = RandomUtil.nextInt(0, tempArr.length - 1);
            resultArr.push(tempArr.splice(randomIndex, 1)[0]);
          }
          return resultArr;
        };
        RandomUtil.randomItem = function randomItem(nowArr) {
          return this.randomArr(nowArr, 1)[0];
        };
        RandomUtil.randomP = function randomP(left, right, up, down) {
          var randomX = RandomUtil.nextNumber(left, right);
          var randomY = RandomUtil.nextNumber(up, down);
          return new Vec2(randomX, randomY);
        };
        return RandomUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcePrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PrefabLoader.ts', './GameConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, PrefabLoader, GameConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "e0c99n+VjVMqow70WeThIMg", "ResourcePrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResourcePrefab = exports('default', (_dec = ccclass('ResourcePrefab'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResourcePrefab, _Component);
        function ResourcePrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scorePrefab", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        ResourcePrefab.preLoad = function preLoad() {
          return new Promise(function (resolve, reject) {
            PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "game/prefab/ResourcePrefab", function (loadedResource) {
              ResourcePrefab.prefab = loadedResource;
              ResourcePrefab.instance = instantiate(loadedResource);
              resolve();
            });
          });
        };
        ResourcePrefab.clear = function clear() {
          ResourcePrefab.instance = null;
          ResourcePrefab.prefab = null;
        };
        ResourcePrefab.getScorePrefab = function getScorePrefab() {
          return ResourcePrefab.instance.getComponent(ResourcePrefab).scorePrefab;
        };
        return ResourcePrefab;
      }(Component), _class3.prefab = null, _class3.instance = void 0, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scorePrefab", [_dec2], {
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

System.register("chunks:///_virtual/ResourcePreload.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DarkLayer.ts', './LoadingPrefab.ts', './MusicPrefab.ts', './SoundPrefab.ts', './ResourcePrefab.ts', './ShaderMaterialPrefab.ts', './ModuleDef.ts', './SubGameMgr.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, game, assetManager, DarkLayer, LoadingPrefab, MusicPrefab, SoundPrefab, ResourcePrefab, ShaderMaterialPrefab, ModuleDef, SubGameMgr;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      assetManager = module.assetManager;
    }, function (module) {
      DarkLayer = module.default;
    }, function (module) {
      LoadingPrefab = module.default;
    }, function (module) {
      MusicPrefab = module.default;
    }, function (module) {
      SoundPrefab = module.default;
    }, function (module) {
      ResourcePrefab = module.default;
    }, function (module) {
      ShaderMaterialPrefab = module.default;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }, function (module) {
      SubGameMgr = module.SubGameMgr;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "c49b7IurNNND5aFt3PVlqWz", "ResourcePreload", undefined);
      var ResourcePreload = exports('default', /*#__PURE__*/function () {
        function ResourcePreload() {
          this.isPreloaded = false;
          this.totalNum = 7;
          this.nowIndex = 0;
          this._porcessFun = void 0;
        }
        var _proto = ResourcePreload.prototype;
        _proto.preLoad = /*#__PURE__*/function () {
          var _preLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback, porcessFun) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.nowIndex = 0;
                  // if (this.isPreloaded) {
                  //     callback();
                  //     return;
                  // }
                  this.isPreloaded = true;
                  this._porcessFun = porcessFun;
                  if (porcessFun) porcessFun(this.nowIndex / this.totalNum);
                  _context.next = 6;
                  return LoadingPrefab.preLoad();
                case 6:
                  //1
                  this.finishOneItemLoad();
                  _context.next = 9;
                  return DarkLayer.preLoad();
                case 9:
                  //2
                  this.finishOneItemLoad();
                  _context.next = 12;
                  return MusicPrefab.preLoad();
                case 12:
                  //3
                  this.finishOneItemLoad();
                  _context.next = 15;
                  return SoundPrefab.preLoad();
                case 15:
                  //4
                  this.finishOneItemLoad();
                  _context.next = 18;
                  return ResourcePrefab.preLoad();
                case 18:
                  //5
                  this.finishOneItemLoad();
                  _context.next = 21;
                  return ShaderMaterialPrefab.preLoad();
                case 21:
                  //6
                  this.finishOneItemLoad(); //
                  _context.next = 24;
                  return this.preLoadGameScene();
                case 24:
                  this.finishOneItemLoad();
                  callback();
                case 26:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function preLoad(_x, _x2) {
            return _preLoad.apply(this, arguments);
          }
          return preLoad;
        }();
        _proto.finishOneItemLoad = function finishOneItemLoad() {
          this.nowIndex++;
          if (this._porcessFun) {
            this._porcessFun(this.nowIndex / this.totalNum);
          }
        };
        _proto.preLoadGameScene = /*#__PURE__*/function () {
          var _preLoadGameScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    var bundle = assetManager.getBundle(ModuleDef.FISH_SHARK);
                    if (bundle) {
                      bundle.preloadScene(SubGameMgr.gameMgr.gameScene.name, null, function () {
                        resolve(true);
                      }.bind(_this)); //7
                    } else {
                      resolve(false);
                    }
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function preLoadGameScene() {
            return _preLoadGameScene.apply(this, arguments);
          }
          return preLoadGameScene;
        }();
        _proto.clearRes = function clearRes() {
          this.isPreloaded = false;
          LoadingPrefab.clear();
          MusicPrefab.destory();
          SoundPrefab.destory();
          ResourcePrefab.clear();
        };
        _proto.restartGame = function restartGame() {
          this.clearRes();
          game.restart();
        };
        return ResourcePreload;
      }());
      _class = ResourcePreload;
      ResourcePreload.instance = new _class();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdapterHelper.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, AdapterHelper;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AdapterHelper = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "54425PqiqBDSZ1s77l4Qdl2", "SceneBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneBase = exports('default', (_dec = ccclass('SceneBase'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SceneBase, _Component);
        function SceneBase() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SceneBase.prototype;
        _proto.onLoad = function onLoad() {
          AdapterHelper.fixApdater();
          this.onLoadMe();
        };
        _proto.onLoadMe = function onLoadMe() {};
        _proto.start = function start() {
          this.onStartMe();
        };
        _proto.onStartMe = function onStartMe() {};
        _proto.onDestroy = function onDestroy() {
          this.onDestroyMe();
        };
        _proto.onDestroyMe = function onDestroyMe() {};
        return SceneBase;
      }(Component), _class2.scriptName = "SceneBase", _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneManager.ts", ['cc'], function (exports) {
  var cclegacy, sys, director;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      director = module.director;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "b636dW4cj5FdoYbXPwxUeRq", "SceneManager", undefined);
      var SceneManager = exports('default', /*#__PURE__*/function () {
        function SceneManager() {
          this.loadingSceneName = void 0;
          this.currentSceneName = void 0;
        }
        var _proto = SceneManager.prototype;
        _proto.initFullScreenPrefab = function initFullScreenPrefab(isShow) {
          if (sys.isBrowser && !sys.isMobile) ;
        };
        _proto.preloadScene = function preloadScene(sceneName, onProgressCallback, onLoadedCallback) {
          if (onProgressCallback === void 0) {
            onProgressCallback = null;
          }
          if (onLoadedCallback === void 0) {
            onLoadedCallback = null;
          }
          director.preloadScene(sceneName, onProgressCallback, onLoadedCallback);
        };
        return SceneManager;
      }());
      _class = SceneManager;
      SceneManager.instance = new _class();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScoreManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ScorePrefab.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodePool, Vec3, Vec2, instantiate, Component, ScorePrefab;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodePool = module.NodePool;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ScorePrefab = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "ff2de++nIVGMrFqAhVn2hvd", "ScoreManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScoreManager = exports('default', (_dec = ccclass('ScoreManager'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScoreManager, _Component);
        function ScoreManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrorePrefab", _descriptor, _assertThisInitialized(_this));
          _this.scorePool = void 0;
          return _this;
        }
        var _proto = ScoreManager.prototype;
        _proto.onLoad = function onLoad() {
          ScoreManager.instance = this;
          this.scorePool = new NodePool();
        };
        _proto.addScore = function addScore(score, p) {
          var _this2 = this;
          var scorePrefab = this.createScore(score);
          this.node.addChild(scorePrefab.node);
          scorePrefab.node.setPosition(new Vec3(p.x, p.y, 0));
          scorePrefab.init(score);
          scorePrefab.playMoveEffect(new Vec2(-472.398, -547.481), function () {
            _this2.destroyScore(scorePrefab);
          });
        };
        _proto.createScore = function createScore(score) {
          var scoreNode;
          if (this.scorePool && this.scorePool.size() > 0) {
            scoreNode = this.scorePool.get();
          } else {
            scoreNode = instantiate(this.scrorePrefab);
          }
          return scoreNode.getComponent(ScorePrefab);
        };
        _proto.destroyScore = function destroyScore(scorePrefab) {
          this.scorePool.put(scorePrefab.node);
        };
        _proto.onDisable = function onDisable() {};
        _proto.onDestroy = function onDestroy() {
          ScoreManager.instance = null;
        };
        return ScoreManager;
      }(Component), _class3.instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrorePrefab", [_dec2], {
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

System.register("chunks:///_virtual/ScorePrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, tween, Vec3, Tween, Component;
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
      tween = module.tween;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "465f6PMtv5OqZoQeSVPvmfM", "ScorePrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScorePrefab = exports('default', (_dec = ccclass('ScorePrefab'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScorePrefab, _Component);
        function ScorePrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txtScore", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ScorePrefab.prototype;
        _proto.init = function init(score) {
          if (score <= 0) {
            this.txtScore.string = "Miss";
          } else {
            this.txtScore.string = score + "";
          }
        };
        _proto.playMoveEffect = function playMoveEffect(p, callback) {
          if (callback === void 0) {
            callback = null;
          }
          tween(this.node).to(0.5, {
            scale: new Vec3(3, 3, 3),
            position: new Vec3(p.x, p.y, 0)
          }).call(function () {
            if (callback) {
              callback();
            }
          }).start();
        };
        _proto.onDisable = function onDisable() {
          Tween.stopAllByTarget(this.node);
        };
        return ScorePrefab;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec2], {
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

System.register("chunks:///_virtual/ShaderHelper.ts", ['cc', './ShaderMaterialPrefab.ts'], function (exports) {
  var cclegacy, UIRenderer, Color, UITransform, Vec2, ShaderMaterialPrefab;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      UIRenderer = module.UIRenderer;
      Color = module.Color;
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
    }, function (module) {
      ShaderMaterialPrefab = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "347c6uw2ohOGLJhkpjm3Kp6", "ShaderHelper", undefined);
      var ShaderHelper = exports('default', /*#__PURE__*/function () {
        function ShaderHelper() {}
        /**
            * 清除所有shader
            * @param showNode 
            * @param material 
            */
        ShaderHelper.clearAllEffect = function clearAllEffect(showNode, material) {
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab)["default"];
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
         * 设置图片灰白程度
         * @param showNode 
         * @param material 
         * @param grayLevel  [0.0, 1.0]
         */;
        ShaderHelper.setGrayEffect = function setGrayEffect(showNode, grayLevel, material) {
          if (grayLevel === void 0) {
            grayLevel = 1;
          }
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).grayMaterial;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            material.setProperty("grayLevel", grayLevel);
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              material.setProperty("grayLevel", grayLevel);
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
         * 播放变灰过程动画
         */;
        ShaderHelper.showGrayMv = function showGrayMv(showNode) {
          var grayValue = 0.5;
          var intervalId = setInterval(function () {
            grayValue += 0.01;
            if (grayValue >= 1) {
              grayValue = 1;
              clearInterval(intervalId);
            }
            if (showNode) {
              ShaderHelper.setGrayEffect(showNode, grayValue);
            }
          }, 1);
        }

        /**
         * 设置图片老化
         * @param showNode 
         * @param grayLevel  [0.0, 1.0]
         * @param material 
         */;
        ShaderHelper.setOldPhotoEffect = function setOldPhotoEffect(showNode, grayLevel, material) {
          if (grayLevel === void 0) {
            grayLevel = 1;
          }
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).oldPhoto;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            material.setProperty("oldLevel", grayLevel);
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              material.setProperty("oldLevel", grayLevel);
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
         * 播放变灰过程动画
         */;
        ShaderHelper.showOldPhotoMv = function showOldPhotoMv(showNode) {
          var grayValue = 0;
          var intervalId = setInterval(function () {
            grayValue += 0.01;
            if (grayValue >= 1) {
              grayValue = 1;
              clearInterval(intervalId);
            }
            if (showNode) {
              ShaderHelper.setOldPhotoEffect(showNode, grayValue);
            }
          }, 1);
        }

        /**
        * 增加内发光特效
        * showNode:要增加特效的节点或者他的子节点
        * material:发光特效材质 
        * materialParam: {}
        * materialParam.glowColor:cc.v4(r,g,b,a)  颜色rbga值的结构体
        * materialParam.glowColorSize:这里为约束一下值发光宽度值在 [0.0, 0.1] 因为 0.1+ 之后的效果可能不明显，也可以自己尝试修改,个人测试感觉0.01效果最佳
        * materialParam.glowThreshold:这里为约束一下值发光阈值值在 [0.0, 0.5] 因为 0.5+ 之后的效果可能就是其他效果，个人感觉0.1效果最佳
        */;
        ShaderHelper.setGlowInner = function setGlowInner(showNode, materialParam, material) {
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).glowInner;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            material.setProperty("glowColor", materialParam.glowColor);
            material.setProperty("glowColorSize", materialParam.glowColorSize);
            material.setProperty("glowThreshold", materialParam.glowThreshold);
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              material.setProperty("glowColor", materialParam.glowColor);
              material.setProperty("glowColorSize", materialParam.glowColorSize);
              material.setProperty("glowThreshold", materialParam.glowThreshold);
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
         * 设置不同颜色的发光
         * @param showNode 
         * @param color 
         */;
        ShaderHelper.setCommonGlowInner = function setCommonGlowInner(showNode, color) {
          if (color === void 0) {
            color = Color.WHITE;
          }
          this.setGlowInner(showNode, {
            "glowColor": color,
            "glowColorSize": 0.015,
            "glowThreshold": 0.1
          });
        }

        /**
         * 播放被攻击闪烁过程动画
         */;
        ShaderHelper.showFlash = function showFlash(showNode, totalFlashTimes) {
          var _this = this;
          if (totalFlashTimes === void 0) {
            totalFlashTimes = 1;
          }
          var timeCount = 0;
          var color = Color.WHITE;
          var flashTimes = 0;
          var intervalId = setInterval(function () {
            timeCount += 1;
            if (timeCount % 50 == 0) {
              var tempCount = timeCount / 50;
              if (tempCount % 2 == 0) {
                color.a = 100;
                _this.setGlowInner(showNode, {
                  "glowColor": color,
                  "glowColorSize": 0.1,
                  "glowThreshold": 0
                });
              } else {
                flashTimes++;
                _this.setGlowInner(showNode, {
                  "glowColor": color,
                  "glowColorSize": 0,
                  "glowThreshold": 0
                });
                if (flashTimes > totalFlashTimes) {
                  clearInterval(intervalId);
                }
              }
            }
          }, 1);
        }

        /**
         * 马赛克
         * @param showNode 
         * @param materialParam 
         * @param material 
         */;
        ShaderHelper.setMosaic = function setMosaic(showNode, materialParam, material) {
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).mosaic;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            material.setProperty("xBlockCount", materialParam.xBlockCount);
            material.setProperty("yBlockCount", materialParam.yBlockCount);
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              material.setProperty("xBlockCount", materialParam.xBlockCount);
              material.setProperty("yBlockCount", materialParam.yBlockCount);
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
        * 播放被攻击闪烁过程动画
        */;
        ShaderHelper.showMosaicMv = function showMosaicMv(showNode, callback) {
          var _this2 = this;
          if (callback === void 0) {
            callback = null;
          }
          var masaicTimes = 500;
          var intervalId = setInterval(function () {
            masaicTimes -= 2;
            _this2.setMosaic(showNode, {
              "xBlockCount": masaicTimes,
              "yBlockCount": masaicTimes
            });
            if (masaicTimes <= 30) {
              clearInterval(intervalId);
              if (callback) {
                callback();
              }
            }
          }, 1);
        }

        /**
         * 设置圆角剪切
         * @param showNode 
         * @param roundCornerRadius [0, 1] 
         */;
        ShaderHelper.setRoundCornerCrop = function setRoundCornerCrop(showNode, roundCornerRadius, material) {
          if (roundCornerRadius === void 0) {
            roundCornerRadius = 0.1;
          }
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).roundCornerCrop;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            // material.setProperty("roundCornerRadius", roundCornerRadius);
            material.setProperty("xRadius", roundCornerRadius);
            material.setProperty("yRadius", roundCornerRadius);
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              // material.setProperty("roundCornerRadius", roundCornerRadius);
              material.setProperty("xRadius", roundCornerRadius);
              material.setProperty("yRadius", roundCornerRadius);
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
         * 设置闪光
         * @param showNode 
         * @param lightColor  光颜色
         * @param lightWidth 光的宽度
         * @param lightAngle 光的角度
         * @param enableGradient 
         * @param cropAlpha 
         * @param enableFog 
         * @param material 
         */;
        ShaderHelper.setFlashLight = function setFlashLight(showNode, lightColor, lightWidth, lightAngle, enableGradient, cropAlpha, enableFog, material) {
          if (lightAngle === void 0) {
            lightAngle = 0;
          }
          if (enableGradient === void 0) {
            enableGradient = true;
          }
          if (cropAlpha === void 0) {
            cropAlpha = true;
          }
          if (enableFog === void 0) {
            enableFog = false;
          }
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).flashLight;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            material.setProperty("lightColor", lightColor);
            material.setProperty("lightWidth", lightWidth);
            material.setProperty("lightAngle", lightAngle);
            material.setProperty("enableGradient", enableGradient ? 1 : 0);
            material.setProperty("cropAlpha", cropAlpha ? 1 : 0);
            material.setProperty("enableFog", enableFog ? 1 : 0);
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              material.setProperty("lightColor", lightColor);
              material.setProperty("lightWidth", lightWidth);
              material.setProperty("lightAngle", lightAngle);
              material.setProperty("enableGradient", enableGradient ? 1 : 0);
              material.setProperty("cropAlpha", cropAlpha ? 1 : 0);
              material.setProperty("enableFog", enableFog ? 1 : 0);
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
         * 玩家升级shader动画
         * @param showNode 
         * @param callback 
         */;
        ShaderHelper.showFlashLightMv = function showFlashLightMv(showNode, callback) {
          var _this3 = this;
          if (callback === void 0) {
            callback = null;
          }
          var nowClor = new Color(0, 0, 0, 255);
          var colorIndex = 0;
          var lightAngle = 0;
          var intervalId = setInterval(function () {
            if (colorIndex == 0) {
              nowClor.r = nowClor.r + 2;
              if (nowClor.r >= 255) {
                colorIndex += 1;
              }
            } else if (colorIndex == 1) {
              nowClor.g = nowClor.g + 2;
              if (nowClor.g >= 255) {
                colorIndex += 1;
              }
            } else {
              nowClor.b = nowClor.b + 2;
              if (nowClor.b >= 255) {
                clearInterval(intervalId);
                ShaderHelper.clearAllEffect(showNode);
                if (callback) {
                  callback();
                }
                return;
              }
            }
            lightAngle += 1;
            _this3.setFlashLight(showNode, nowClor, 1, lightAngle);
          }, 1);
        };
        ShaderHelper.setFlag = function setFlag(showNode, material) {
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).flag;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              renderComponent.setMaterial(material, 0);
            });
          });
        }

        /**
         * 设置高斯模糊
         * @param showNode 
         * @param material 
         */;
        ShaderHelper.setGaussian = function setGaussian(showNode, material) {
          if (material === void 0) {
            material = ShaderMaterialPrefab.instance.getComponent(ShaderMaterialPrefab).gaussian;
          }
          showNode.getComponents(UIRenderer).forEach(function (renderComponent) {
            var tran = renderComponent.node.getComponent(UITransform);
            material.setProperty("textureSize", new Vec2(tran.contentSize.width, tran.contentSize.height));
            renderComponent.setMaterial(material, 0);
          });
          showNode.children.forEach(function (childNode) {
            childNode.getComponents(UIRenderer).forEach(function (renderComponent) {
              var tran = renderComponent.node.getComponent(UITransform);
              material.setProperty("textureSize", new Vec2(tran.contentSize.width, tran.contentSize.height));
              // material.setProperty("textureSize", cc.v2(showNode.width, showNode.height));
              renderComponent.setMaterial(material, 0);
            });
          });
        };
        return ShaderHelper;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShaderMaterialPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PrefabLoader.ts', './GameConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Material, instantiate, Component, PrefabLoader, GameConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3;
      cclegacy._RF.push({}, "7c56cZwawZM8aYGevYiajy2", "ShaderMaterialPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShaderMaterialPrefab = exports('default', (_dec = ccclass('ShaderMaterialPrefab'), _dec2 = property({
        type: Material
      }), _dec3 = property({
        type: Material
      }), _dec4 = property({
        type: Material
      }), _dec5 = property({
        type: Material
      }), _dec6 = property({
        type: Material
      }), _dec7 = property({
        type: Material
      }), _dec8 = property({
        type: Material
      }), _dec9 = property({
        type: Material
      }), _dec10 = property({
        type: Material
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShaderMaterialPrefab, _Component);
        function ShaderMaterialPrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "default", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "grayMaterial", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oldPhoto", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "glowInner", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mosaic", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundCornerCrop", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flashLight", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flag", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gaussian", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        ShaderMaterialPrefab.preLoad = function preLoad() {
          return new Promise(function (resolve, reject) {
            PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "game/prefab/ShaderMaterialPrefab", function (loadedResource) {
              ShaderMaterialPrefab.instance = instantiate(loadedResource);
              resolve();
            });
          });
        };
        return ShaderMaterialPrefab;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "default", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "grayMaterial", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "oldPhoto", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "glowInner", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mosaic", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "roundCornerCrop", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "flashLight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "flag", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gaussian", [_dec10], {
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

System.register("chunks:///_virtual/SoundPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger2.ts', './PrefabLoader.ts', './LocalStorage.ts', './EventManager2.ts', './CommonEvent.ts', './MusicConfig.ts', './GameConfig.ts', './ResourceMgr.ts', './ModuleDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodePool, instantiate, AudioClip, AudioSource, Component, Logger, PrefabLoader, LocalStorage, EventManager, CommonEvent, MusicConfig, GameConfig, ResourceMgr, ModuleDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      PrefabLoader = module.default;
    }, function (module) {
      LocalStorage = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      CommonEvent = module.default;
    }, function (module) {
      MusicConfig = module.default;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      ResourceMgr = module.ResourceMgr;
    }, function (module) {
      ModuleDef = module.ModuleDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "d262fKyivZNubHkDAhJPvoQ", "SoundPrefab", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // /**
      //  * 音效
      //  * Ios暂时有bug，弃用
      //  */
      var SoundPrefab = exports('default', (_dec = ccclass('SoundPrefab'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundPrefab, _Component);
        function SoundPrefab() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.audioName = "";
          _this.audioUrl = "";
          return _this;
        }
        SoundPrefab.getAudioNode = function getAudioNode() {
          var node = null;
          // if (this.pool.size() > 0) {

          //     node = this.pool.get();
          // } else {
          node = instantiate(this.prefab);
          // }
          return node;
        };
        SoundPrefab.play = function play(key) {
          var _this2 = this;
          var url = MusicConfig.musicKey2Path.get(key);
          if (url) {
            ResourceMgr.inst.loadResByModuleBundle(ModuleDef.FISH_SHARK, url, AudioClip, function (error, clip) {
              if (error) {
                Logger.warn(_this2, "load sound error===", error.message);
              } else {
                if (clip) {
                  var audioNode = _this2.getAudioNode();
                  if (audioNode) {
                    audioNode.getComponent(AudioSource).clip = clip;
                    audioNode.getComponent(AudioSource).volume = SoundPrefab.soundVolumn;
                    audioNode.getComponent(AudioSource).loop = false;
                    audioNode.getComponent(AudioSource).currentTime = 0; //rewind();
                    audioNode.getComponent(AudioSource).play();
                    audioNode.getComponent(SoundPrefab).audioName = key;
                    audioNode.getComponent(SoundPrefab).audioUrl = url;
                    _this2.nowAudioNodeList.push(audioNode);
                  }
                }
              }
            });
          } else {
            Logger.warn(this, "播放不存在的music=", key);
          }
        };
        SoundPrefab.changeVolumn = function changeVolumn(nowVolumn) {
          this.soundVolumn = nowVolumn;
          for (var i = 0; i < this.nowAudioNodeList.length; i++) {
            var audioNode = this.nowAudioNodeList[i];
            var audioSource = audioNode.getComponent(AudioSource);
            if (audioSource.playing) {
              audioSource.volume = nowVolumn;
            }
          }
          LocalStorage.setItem(SoundPrefab.SOUND_VOLUMN_KEY, SoundPrefab.soundVolumn.toString());
        };
        SoundPrefab.preInit = function preInit() {
          EventManager.instance.addListener(CommonEvent.Event_FrameUpdate, this.updateFrame, this);
          SoundPrefab.soundVolumn = parseFloat(LocalStorage.getItem(SoundPrefab.SOUND_VOLUMN_KEY));
          if (isNaN(SoundPrefab.soundVolumn)) {
            SoundPrefab.soundVolumn = 1;
          }
        };
        SoundPrefab.updateFrame = function updateFrame() {
          for (var i = 0; i < this.nowAudioNodeList.length; i++) {
            var audioNode = this.nowAudioNodeList[i];
            var audioSource = audioNode.getComponent(AudioSource);
            if (!audioSource.playing) {
              SoundPrefab.nowAudioNodeList.splice(i, 1);
            }
          }
        };
        SoundPrefab.preLoad = function preLoad() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            PrefabLoader.loadPrefab(GameConfig.GameName + "/" + "share/uicomponent/SoundPrefab", function (loadedResource) {
              SoundPrefab.prefab = loadedResource;
              _this3.preInit();
              // for (let i = 0; i < this.Pool_Init_Num; i++) {
              //     let tempNode: cc.Node = cc.instantiate(loadedResource);
              //     this.pool.put(tempNode);
              // }
              resolve();
            });
          });
        };
        SoundPrefab.destory = function destory() {
          EventManager.instance.removeListener(CommonEvent.Event_FrameUpdate, this.updateFrame);
          for (var i = 0; i < this.nowAudioNodeList.length; i++) {
            var audioNode = this.nowAudioNodeList[i];
            audioNode.getComponent(AudioSource).stop();
            audioNode.getComponent(AudioSource).destroy();
          }
          this.nowAudioNodeList = [];
          this.pool.clear();
        };
        return SoundPrefab;
      }(Component), _class2.prefab = null, _class2.SOUND_VOLUMN_KEY = "soundVolumn", _class2.soundVolumn = 1, _class2.Pool_Init_Num = 30, _class2.pool = new NodePool(), _class2.nowAudioNodeList = [], _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, SceneBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SceneBase = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "65ad34B+LFBYKORxV1sjzZv", "StartScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StartScene = exports('default', (_dec = ccclass('StartScene'), _dec(_class = (_class2 = /*#__PURE__*/function (_SceneBase) {
        _inheritsLoose(StartScene, _SceneBase);
        function StartScene() {
          return _SceneBase.apply(this, arguments) || this;
        }
        var _proto = StartScene.prototype;
        _proto.onLoadMe = function onLoadMe() {};
        _proto.update = function update() {};
        _proto.onDestroyMe = function onDestroyMe() {};
        return StartScene;
      }(SceneBase), _class2.scriptName = "StartScene", _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TextureMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "1147cykL+lNgohQDZfLMxjV", "TextureMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TextureMgr = exports('default', (_dec = ccclass('TextureMgr'), _dec2 = property({
        type: [SpriteFrame]
      }), _dec3 = property({
        type: [SpriteFrame]
      }), _dec4 = property({
        type: [SpriteFrame]
      }), _dec5 = property({
        type: [SpriteFrame]
      }), _dec6 = property({
        type: [SpriteFrame]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TextureMgr, _Component);
        function TextureMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Spriteset", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Spriteset1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Spriteset2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Spriteset3", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Spriteset4", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TextureMgr.prototype;
        _proto.onLoad = function onLoad() {
          //        // init logic
        };
        return TextureMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Spriteset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Spriteset1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Spriteset2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Spriteset3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Spriteset4", [_dec6], {
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

System.register("chunks:///_virtual/TimeHelper.ts", ['cc'], function (exports) {
  var cclegacy, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "112776rQ3ZBmZJVTVydK55+", "TimeHelper", undefined);
      var TimeHelper = exports('default', /*#__PURE__*/function () {
        function TimeHelper() {}
        TimeHelper.exeNextFrame = function exeNextFrame(node, callback) {
          tween(node).delay(0.02).call(callback).start();
        };
        return TimeHelper;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "e0962y99b1MFbbYxAPQKoVP", "UIRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIRoot = exports('UIRoot', (_dec = ccclass('UIRoot'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIRoot, _Component);
        function UIRoot() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UIRoot.prototype;
        _proto.onLoad = function onLoad() {
          UIRoot.Instance = this;
        };
        _proto.onDestroy = function onDestroy() {
          UIRoot.Instance = null;
        };
        return UIRoot;
      }(Component), _class2.Instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VersionManager.ts", ['cc', './ManifestConfig.ts', './EventManager2.ts', './HotUpdate2.ts'], function (exports) {
  var cclegacy, sys, ManifestConfig, EventManager, HotUpdate;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      ManifestConfig = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      HotUpdate = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "c79a6Vx3C9HFaXWFRVC7vI4", "VersionManager", undefined);
      var VersionManager = exports('default', /*#__PURE__*/function () {
        function VersionManager() {
          this.iosStoreUrl = "";
          this.apkStoreUrl = "";
          this.nowVersion = ManifestConfig.version;
          //网页显示版本号，如果是热更会替换改值
          this.targetVersion = "1.0.0";
          this.isOpenHotUpdate = true;
          //是否打开热更
          this.hotUpdateList = [];
          this.noUpdateIndex = -1;
        }
        var _proto = VersionManager.prototype;
        //
        _proto.init = function init() {
          this.reInitAll();
        };
        _proto.reInitAll = function reInitAll() {
          this.releaseAll();
          for (var i = 0; i < VersionManager.Config_Key.length; i++) {
            this.reInit(i);
          }
        };
        _proto.releaseAll = function releaseAll() {
          for (var i = 0; i < VersionManager.Config_Key.length; i++) {
            if (this.hotUpdateList[i]) {
              this.hotUpdateList[i].disposeUpdate();
            }
          }
        };
        _proto.reInit = function reInit(index) {
          if (!this.hotUpdateList[index]) {
            this.hotUpdateList[index] = new HotUpdate();
          }
          this.hotUpdateList[index].init(index, VersionManager.Config_Key[index], VersionManager.Config_ManifestName);
          if (!this.isOpenHotUpdate) {
            this.hotUpdateList[index].isCheck = true;
            this.hotUpdateList[index].isFinishUpdate = true;
          }
        };
        _proto.checkUpdate = function checkUpdate(keyIndex) {
          if (keyIndex < this.hotUpdateList.length) {
            var hotUpdate = this.hotUpdateList[keyIndex];
            if (sys.isNative) {
              if (keyIndex == this.noUpdateIndex) {
                //在大厅热更，不用子游戏热更了
                hotUpdate.isCheck = true;
                hotUpdate.isFinishUpdate = true;
                EventManager.instance.dispatchEvent(HotUpdate.Event_On_ALREADY_UP_TO_DATE, VersionManager.Config_Key[keyIndex]);
              } else {
                hotUpdate.checkUpdate();
              }
            } else {
              hotUpdate.isCheck = true;
              hotUpdate.isFinishUpdate = true;
              EventManager.instance.dispatchEvent(HotUpdate.Event_On_ALREADY_UP_TO_DATE, VersionManager.Config_Key[keyIndex]);
            }
          } else {
            EventManager.instance.dispatchEvent(HotUpdate.Event_On_ALREADY_UP_TO_DATE, VersionManager.Config_Key[keyIndex]);
          }
        };
        _proto.startUpdate = function startUpdate(keyIndex) {
          var hotUpdate = this.hotUpdateList[keyIndex];
          hotUpdate.startUpdate();
        };
        _proto.isCheck = function isCheck(keyIndex) {
          if (keyIndex < this.hotUpdateList.length) {
            var hotUpdate = this.hotUpdateList[keyIndex];
            if (keyIndex == this.noUpdateIndex) {
              return true;
            }
            return hotUpdate.isCheck;
          }
          return true;
        };
        _proto.needUpdate = function needUpdate(keyIndex) {
          if (keyIndex < this.hotUpdateList.length) {
            var hotUpdate = this.hotUpdateList[keyIndex];
            if (keyIndex == this.noUpdateIndex) {
              return false;
            }
            return hotUpdate.needUpdate;
          }
          return false;
        };
        _proto.isUpdating = function isUpdating(keyIndex) {
          if (keyIndex < this.hotUpdateList.length) {
            var hotUpdate = this.hotUpdateList[keyIndex];
            return hotUpdate.isUpdating;
          }
          return false;
        };
        _proto.isFinishUpdate = function isFinishUpdate(keyIndex) {
          if (keyIndex < this.hotUpdateList.length) {
            var hotUpdate = this.hotUpdateList[keyIndex];
            if (keyIndex == this.noUpdateIndex) {
              return true;
            }
            return hotUpdate.isFinishUpdate;
          }
          return true;
        };
        return VersionManager;
      }());
      _class = VersionManager;
      VersionManager.instance = new _class();
      VersionManager.Config_Game_Name = ["游戏大厅"];
      //热更文件下载来后存放文件夹
      VersionManager.Config_Key = ["main-remote-asset"];
      VersionManager.Config_ManifestName = "project.manifest";
      VersionManager.Config_Url_Key = ["main"];
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/module_fish_shark', 'chunks:///_virtual/module_fish_shark'); 
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