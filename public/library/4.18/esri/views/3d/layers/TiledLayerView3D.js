// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../core/watchUtils ../terrain/terrainUtils ./support/layerViewUpdatingProperties".split(" "),
function(n,p,d,y,z,A,e,B,t,l,C,D,E,u,v,w,q){n.TiledLayerView3D=c=>{c=function(r){function m(){return r.apply(this,arguments)||this}p._inheritsLoose(m,r);var f=m.prototype;f.getTileUrl=function(a,b,g){return this.layer.getTileUrl(a,b,g)};f._addTilingSchemeMatchPromise=function(){var a=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);a?this.addResolvingPromise(u.reject(a)):(a=v.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(()=>{const b=this._getTileInfoCompatibilityError(this.tileInfo,
this.view.basemapTerrain.tilingScheme);if(b)throw b;}),this.addResolvingPromise(a))};f._getTileInfoSupportError=function(a,b){if(a=w.checkIfTileInfoSupportedForView(a,b,this.view.spatialReference,this.view.basemapTerrain.manifold)){b={layer:this.layer,error:a};switch(a.name){case "tilingscheme:local-gcs-not-supported":a=new l("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",b);break;case "tilingscheme:spatial-reference-mismatch":case "tilingscheme:global-unsupported-spatial-reference":a=
new l("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",b);break;default:a=new l("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",b)}return a}return null};f._getTileInfoCompatibilityError=function(a,b){return b.compatibleWith(a)?null:new l("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")};f.levelRangeFromScaleRange=
function(a,b){const g={minLevel:0,maxLevel:Infinity};var h=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!h)return g;const x=h.levels[0];h=k=>{k=Math.log(x.scale/k)/Math.LN2;return 1E-9>.5-Math.abs(.5-k%1)?Math.round(k):Math.ceil(k)};null!=a&&0<a&&(g.minLevel=Math.max(0,h(a)));null!=b&&0<b&&(g.maxLevel=Math.max(0,h(b)));return g};f.isUpdating=function(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)};p._createClass(m,[{key:"imageFormatIsOpaque",
get:function(){return!1}},{key:"isOpaque",get:function(){return 1<=this.fullOpacity&&this.imageFormatIsOpaque}},{key:"dataLevelRange",get:function(){const a=this.tileInfo.lods;return this.levelRangeFromScaleRange(a[0].scale,a[a.length-1].scale)}},{key:"displayLevelRange",get:function(){var a=this.tileInfo.lods;a=this.levelRangeFromScaleRange(this.layer.minScale||a[0].scale,this.layer.maxScale||a[a.length-1].scale);this.layer.maxScale&&a.maxLevel++;return a}}]);return m}(c);d.__decorate([e.property({readOnly:!0})],
c.prototype,"imageFormatIsOpaque",null);d.__decorate([e.property({readOnly:!0,dependsOn:["view.basemapTerrain.updating"]})],c.prototype,"updating",void 0);d.__decorate([e.property(q.updatingProgress)],c.prototype,"updatingProgress",void 0);d.__decorate([e.property(q.updatingProgressValue)],c.prototype,"updatingProgressValue",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"fullExtent",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],c.prototype,
"isOpaque",null);d.__decorate([e.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme"]})],c.prototype,"dataLevelRange",null);d.__decorate([e.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.minScale","layer.maxScale"]})],c.prototype,"displayLevelRange",null);d.__decorate([e.property()],c.prototype,"layer",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"tileInfo",void 0);return c=d.__decorate([t.subclass("esri.views.3d.layers.TiledLayerView3D")],
c)};Object.defineProperty(n,"__esModule",{value:!0})});