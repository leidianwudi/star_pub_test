System.register("chunks:///_virtual/MultTextures.ts", ['cc'], function (exports) {
  var cclegacy, game, Game, UIRenderer, VERSION, Sprite, director, Director, StencilManager, assert, resources, Material, renderer, TiledLayer, MotionStreak, ParticleSystem2D;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      Game = module.Game;
      UIRenderer = module.UIRenderer;
      VERSION = module.VERSION;
      Sprite = module.Sprite;
      director = module.director;
      Director = module.Director;
      StencilManager = module.StencilManager;
      assert = module.assert;
      resources = module.resources;
      Material = module.Material;
      renderer = module.renderer;
      TiledLayer = module.TiledLayer;
      MotionStreak = module.MotionStreak;
      ParticleSystem2D = module.ParticleSystem2D;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd7e7vtojdMUJODlbuIb/Yi", "MultTextures", undefined);
      var MultBatch2D = exports('MultBatch2D', {
        enable: false,
        parent: null,
        textures: [],
        hash: 0,
        reset: function reset() {
          this.textures.length = 0;
        }
      });
      var loadMultTextures = function loadMultTextures() {
        MultBatch2D.enable = false; //提前加载多纹理材质
        resources.load("multTextures/Mult-material", Material, function (err, material) {
          if (!err) {
            var mat = cclegacy.builtinResMgr.get('ui-sprite-material');
            if (mat) {
              MultBatch2D.hash = Material.getHash(mat);
              MultBatch2D.parent = material;
              MultBatch2D.enable = true;
              material.addRef();
            }
          }
        });
      };
      var _cacheUseCount = 0;
      var _cacheMaterials = [];
      var getMultMaterial = function getMultMaterial(oldMat) {
        MultBatch2D.reset();
        if (!MultBatch2D.enable || !oldMat || !oldMat.isMultTextures) {
          return oldMat;
        }
        if (!MultBatch2D.parent || !MultBatch2D.parent.isValid) {
          loadMultTextures();
          return oldMat;
        }

        //if (!MultBatch2D.enable) return null;
        var newMat = _cacheMaterials[_cacheUseCount++];
        if (!newMat || !newMat.isValid) {
          var material = {
            parent: MultBatch2D.parent
          };
          newMat = new renderer.MaterialInstance(material);
          _cacheMaterials[_cacheUseCount - 1] = newMat;
          newMat['isMultTextures'] = true;
          newMat['cacheTextures'] = [-1];
          newMat.addRef();
        }
        return newMat;
      };

      //如果有异常组件，或者自定义组件，
      //在这进行添加排除,不参与多纹理合批
      var excludeMaterial = function excludeMaterial(uir, material) {
        if (!material) return;
        var enable = true;
        if (enable && TiledLayer) {
          enable = !(uir instanceof TiledLayer);
        }
        if (enable && MotionStreak) {
          enable = !(uir instanceof MotionStreak);
        }
        if (enable && ParticleSystem2D) {
          enable = !(uir instanceof ParticleSystem2D);
        }
        material['isMultTextures'] = false;
        if (enable && MultBatch2D.hash == material.hash) {
          material['isMultTextures'] = true;
        }
      };
      game.once(Game.EVENT_GAME_INITED, function () {
        loadMultTextures();
        var UIR = UIRenderer.prototype;
        var updateMaterial = UIR.updateMaterial;
        UIR.updateMaterial = function () {
          updateMaterial.call(this); //this.getSharedMaterial(0);
          excludeMaterial(this, this.customMaterial || this.material);
        };
      });
      game.once(Game.EVENT_ENGINE_INITED, function () {
        cclegacy.UI.RenderData.prototype.texID = -1;
        cclegacy.UI.RenderData.prototype.isSpr = false;
        cclegacy.UI.RenderData.prototype.texDirty = true;
        cclegacy.UI.RenderData.prototype.dataDirty = 0x0;
        Object.defineProperty(cclegacy.UI.RenderData.prototype, "vertDirty", {
          get: function get() {
            return this._vertDirty;
          },
          set: function set(val) {
            this._vertDirty = val;
            if (val === true && !this.isSpr) {
              this.dataDirty |= 1;
            }
            if (this._renderDrawInfo && val) {
              this._renderDrawInfo.setVertDirty(val);
            }
          }
        });
        Object.defineProperty(cclegacy.UI.RenderData.prototype, "textureDirty", {
          get: function get() {
            return this.texDirty;
          },
          set: function set(val) {
            this.texDirty = val;
            if (val === true) {
              this.texID = -1;
            }
          }
        });
        var str = VERSION.concat();
        str = str.replace('.', '').replace('.', '');
        if (parseInt(str) < 384) {
          //修复 renderManager 刷新 bug

          var UIR = UIRenderer.prototype;
          var markForUpdateRenderData = UIR.markForUpdateRenderData;
          UIR.markForUpdateRenderData = function (enable) {
            if (enable === void 0) {
              enable = true;
            }
            markForUpdateRenderData.call(this, enable);
            if (enable && this.renderData) {
              if (!this.renderData.isSpr) this.renderData.dataDirty |= 2;
            }
          };
          var updateRenderer = UIR.updateRenderer;
          UIR.updateRenderer = function () {
            updateRenderer.call(this);
            if (this.renderData) {
              if (!this.renderData.isSpr) this.renderData.dataDirty &= ~2;
            }
          };
        }
        var SPRA = cclegacy.UI.spriteAssembler;
        if (SPRA) {
          var spriteAssembler = SPRA.getAssembler;
          SPRA.getAssembler = function (sprite) {
            var spr = spriteAssembler.call(this, sprite);
            if (spr.changeUV == undefined) {
              spr.changeUV = function (s) {
                var rd = s.renderData;
                if (rd) {
                  rd.dataDirty = 1;
                  rd.isSpr = true;
                }
              };
              var UVs = spr.updateUVs;
              if (UVs) {
                if (sprite.type == Sprite.Type.FILLED && sprite.fillType != Sprite.FillType.RADIAL) {
                  spr.updateUVs = function (s, f0, f1) {
                    UVs.call(this, s, f0, f1);
                    this.changeUV(s);
                  };
                } else {
                  spr.updateUVs = function (s) {
                    UVs.call(this, s);
                    this.changeUV(s);
                  };
                }
              }
              var verUV = spr.updateWorldVertexAndUVData;
              if (verUV) {
                spr.updateWorldVertexAndUVData = function (s, c) {
                  verUV.call(this, s, c);
                  this.changeUV(s);
                };
              }
            }
            return spr;
          };
        }
        cclegacy.internal.Batcher2D.prototype.cacheTextures = [];
        cclegacy.internal.Batcher2D.prototype.currMaterial = null;
        cclegacy.internal.Batcher2D.prototype.isMultTextures = false;
        Object.defineProperty(cclegacy.internal.Batcher2D.prototype, "_currMaterial", {
          get: function get() {
            return this.currMaterial;
          },
          set: function set(metrial) {
            if (this.currMaterial === metrial) return;
            this.currMaterial = getMultMaterial(metrial);
            if (MultBatch2D.enable) {
              this.isMultTextures = false;
              if (this.currMaterial && this.currMaterial.isMultTextures) {
                this.cacheTextures = this.currMaterial.cacheTextures;
                this.isMultTextures = true;
              }
            }
          }
        });
        director.on(Director.EVENT_AFTER_DRAW, function (dt) {
          cclegacy.internal.Batcher2D.isMultTextures = false;
          cclegacy.internal.Batcher2D._rdHash = -1;
          MultBatch2D.reset();
          _cacheUseCount = 0;
        });
        var MAX_TEX = 8;
        var _texture = {
          texture: new cclegacy.SimpleTexture(),
          defalut: new cclegacy.SimpleTexture(),
          setFrame: function setFrame(frame) {
            this.texture['_gfxSampler'] = frame.getGFXSampler();
            this.texture['_gfxTextureView'] = frame.getGFXTexture();
          }
        };
        var Stage_ENTER_LEVEL = 2;
        var Stage_ENTER_LEVEL_INVERTED = 6;
        cclegacy.internal.Batcher2D.prototype._rdHash = -1;
        //@ts-ignore

        cclegacy.internal.Batcher2D.prototype.commitComp = function (comp, renderData, frame, assembler, transform) {
          var rdHash = -1;
          var dataHash = 0;
          var mat;
          var bufferID = -1;
          if (renderData && renderData.chunk) {
            if (!renderData.isValid()) return;
            dataHash = renderData.dataHash;
            mat = renderData.material;
            bufferID = renderData.chunk.bufferId;
            // as RenderData;
            var rd = renderData;
            rdHash = bufferID << 16 | rd.layer;
          }

          // Notice: A little hack, if it is for mask, not need update here, while control by stencilManger
          if (comp.stencilStage === Stage_ENTER_LEVEL || comp.stencilStage === Stage_ENTER_LEVEL_INVERTED) {
            this._insertMaskBatch(comp);
          } else {
            comp.stencilStage = StencilManager.sharedManager.stage;
          }
          var depthStencilStateStage = comp.stencilStage;
          var texID = -1;
          var texture = null;
          var MB = MultBatch2D;
          var flushBatch = false;
          var isMultTextures = false;
          var textures = MultBatch2D.textures;
          if (MB.enable && mat && mat.isMultTextures) {
            if (frame && frame.isValid) texture = frame.getGFXTexture();
            if (texture) {
              texID = textures.indexOf(texture);
              isMultTextures = true;
              if (texID < 0) {
                if (textures.length == MAX_TEX) {
                  flushBatch = true;
                }
              }
              if (this.isMultTextures) {
                mat = this._currMaterial;
                dataHash = this._currHash;
                if (this._rdHash != rdHash) {
                  flushBatch = true;
                  texID = -1;
                }
              }
            }
          }
          if (flushBatch || this._currHash !== dataHash || dataHash === 0 || this._currMaterial !== mat || this._currDepthStencilStateStage !== depthStencilStateStage) {
            // Merge all previous data to a render batch, and update buffer for next render data
            this.autoMergeBatches(this._currComponent);
            if (renderData && !renderData._isMeshBuffer) {
              this.updateBuffer(renderData.vertexFormat, bufferID);
            }
            this._rdHash = rdHash;
            this._currRenderData = renderData;
            this._currHash = renderData ? renderData.dataHash : 0;
            this._currComponent = comp;
            this._currTransform = transform;
            this._currMaterial = comp.getRenderMaterial(0);
            this._currDepthStencilStateStage = depthStencilStateStage;
            this._currLayer = comp.node.layer;
            if (frame) {
              {
                assert(frame.isValid, 'frame should not be invalid, it may have been released');
              }
              this._currTexture = frame.getGFXTexture();
              this._currSampler = frame.getGFXSampler();
              this._currTextureHash = frame.getHash();
              this._currSamplerHash = this._currSampler.hash;
            } else {
              this._currTexture = null;
              this._currSampler = null;
              this._currTextureHash = 0;
              this._currSamplerHash = 0;
            }
          }
          assembler.fillBuffers(comp, this);
          if (isMultTextures) {
            if (texID < 0) {
              texID = textures.length;
              textures.push(texture);
              if (texID > 0) {
                //@ts-ignore
                var id = texture.objectID;
                var caches = this.cacheTextures;
                if (caches[texID] !== id) {
                  caches[texID] = id;
                  _texture.setFrame(frame);
                  var name = "texture" + texID;
                  this._currMaterial.setProperty(name, _texture.texture);
                }
              }
            }
            this._fillDatas(renderData, texID);
          }
        };
        cclegacy.internal.Batcher2D.prototype["_fillDatas"] = function (renderData, texID) {
          if (!renderData) return;
          var uvX = 0;
          var vbuf = renderData.chunk.vb;
          if (renderData.dataDirty == 1) {
            for (var i = 0, length = vbuf.length; i < length; i += 9) {
              uvX = ~~(vbuf[i + 3] * 100000);
              vbuf[i + 3] = uvX * 10 + texID;
            }
          } else {
            if (renderData.texID != texID) {
              for (var _i = 0, _length = vbuf.length; _i < _length; _i += 9) {
                uvX = ~~(vbuf[_i + 3] * 0.1);
                vbuf[_i + 3] = uvX * 10 + texID;
              }
            }
          }
          renderData.dataDirty = 0;
          renderData.texID = texID;
        };
      });

      //*/
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resources", ['./MultTextures.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
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