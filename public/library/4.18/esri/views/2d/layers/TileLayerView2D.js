// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/support/drapedUtils":function(){define("exports ../../core/maybe ../../geometry/Extent ../../geometry ../../core/unitUtils ../../renderers/support/clickToleranceUtils".split(" "),function(l,h,c,H,b,d){function g(f,x,p,y=new c){let q;if("2d"===p.type)q=x*p.resolution;else if("3d"===p.type){var m=p.overlayPixelSizeInMapUnits(f),k=p.basemapSpatialReference;q=h.isSome(k)&&!k.equals(p.spatialReference)?b.getMetersPerUnitForSR(k)/b.getMetersPerUnitForSR(p.spatialReference):x*
m}x=f.x-q;m=f.y-q;k=f.x+q;f=f.y+q;({spatialReference:p}=p);y.xmin=Math.min(x,k);y.ymin=Math.min(m,f);y.xmax=Math.max(x,k);y.ymax=Math.max(m,f);y.spatialReference=p;return y}const n=new c;l.createQueryGeometry=g;l.intersectsDrapedGeometry=function(f,x,p){f=p.toMap(f);if(h.isNone(f))return!1;const y=d.calculateTolerance();return g(f,y,p,n).intersects(x)};Object.defineProperty(l,"__esModule",{value:!0})})},"esri/renderers/support/clickToleranceUtils":function(){define(["exports"],function(l){function h(b,
d){return d?"xoffset"in d&&d.xoffset?Math.max(b,Math.abs(d.xoffset)):"yoffset"in d&&d.yoffset?Math.max(b,Math.abs(d.yoffset||0)):b:b}function c(b,d){if("number"===typeof b)return b;if(b&&b.stops&&b.stops.length){{b=b.stops;let g=d=0;for(let n=0;n<b.length;n++){const f=b[n].size;"number"===typeof f&&(d+=f,g++)}b=d/g}return b}return d}function H(b,d){if(!d)return b;d=d.filter(f=>"size"===f.type).map(f=>{const {maxSize:x,minSize:p}=f;return(c(x,b)+c(p,b))/2});let g=0;const n=d.length;if(0===n)return b;
for(let f=0;f<n;f++)g+=d[f];return Math.max(Math.floor(g/n),b)}l.calculateTolerance=function(b){const d=b&&b.renderer;b="touch"===(b&&b.event&&b.event.pointerType)?9:6;if(!d)return b;b="visualVariables"in d?H(b,d.visualVariables):b;if("simple"===d.type)return h(b,d.symbol);if("unique-value"===d.type){let g=b;d.uniqueValueInfos.forEach(n=>{g=h(g,n.symbol)});return g}if("class-breaks"===d.type){let g=b;d.classBreakInfos.forEach(n=>{g=h(g,n.symbol)});return g}return b};Object.defineProperty(l,"__esModule",
{value:!0})})},"esri/views/layers/TileLayerView":function(){define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../renderers/support/clickToleranceUtils".split(" "),
function(l,h,c,H,b,d,g,n,f,x,p,y,q,m,k,B){l.TileLayerView=z=>{z=function(J){function K(){return J.apply(this,arguments)||this}h._inheritsLoose(K,J);K.prototype.fetchPopupFeatures=async function(I,E){var {layer:u}=this;if(!I)return k.reject(new p("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:u}));if("tile"!==u.type)return k.reject(new p("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:u.type}));const F=this.get("view.scale");u=u.allSublayers.toArray().filter(w=>
{const A=0===w.minScale||F<=w.minScale,r=0===w.maxScale||F>=w.maxScale;return w.popupTemplate&&w.popupEnabled&&w.visible&&A&&r});return k.eachAlways(u.map(async w=>{const A=w.createQuery();var r=b.isSome(E)?E.event:null;r=B.calculateTolerance({renderer:w.renderer,event:r});A.geometry=this.createFetchPopupFeaturesQueryGeometry(I,r);A.outFields=await w.popupTemplate.getRequiredFields();return(await w.queryFeatures(A)).features})).then(w=>[].concat(...w.map(A=>A.value).filter(Boolean)))};return K}(z);
c.__decorate([n.property()],z.prototype,"layer",void 0);return z=c.__decorate([x.subclass("esri.layers.mixins.TileLayerView")],z)};Object.defineProperty(l,"__esModule",{value:!0})})},"esri/views/2d/layers/LayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Collection ../../../core/collectionUtils ../../../core/watchUtils ../../layers/support/ClipArea ../../layers/support/ClipRect ../engine/Container ../../layers/support/Geometry ../../layers/support/Path".split(" "),
function(l,h,c,H,b,d,g,n,f,x,p,y,q,m,k,B,z,J,K,I){const E=q.ofType({key:"type",base:B,typeMap:{rect:z,path:I,geometry:K}});l.LayerView2DMixin=u=>{u=function(F){function w(){var r=F.apply(this,arguments)||this;r.clips=new E;r.moving=!1;r.attached=!1;r.lastUpdateId=-1;r.updateRequested=!1;return r}h._inheritsLoose(w,F);var A=w.prototype;A.initialize=function(){var r;this.container||(this.container=new J.Container);this.container.fadeTransitionEnabled=!0;this.container.opacity=0;this.container.clips=
this.clips;this.handles.add([k.init(this,"suspended",t=>{this.container&&(this.container.visible=!t);this.view&&!t&&this.updateRequested&&this.view.requestUpdate()},!0),k.init(this,["layer.opacity","container"],()=>{if(this.container){var t,C;this.container.opacity=null!=(t=null==(C=this.layer)?void 0:C.opacity)?t:1}},!0),k.init(this,["layer.blendMode"],t=>{this.container&&(this.container.blendMode=t)},!0),k.init(this,["layer.effect"],t=>{this.container&&(this.container.effect=t)},!0),this.clips.on("change",
()=>{this.container.clips=this.clips;this.notifyChange("clips")})]);null!=(r=this.view)&&r.whenLayerView?this.view.whenLayerView(this.layer).then(t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})};A.destroy=function(){this.attached&&(this.detach(),this.attached=!1);this.handles.remove("initialize");this.updateRequested=!1};A.isVisibleAtScale=
function(r){var t=!0,C=this.layer;const v=C.minScale;C=C.maxScale;if(null!=v&&null!=C){t=!v;let a=!C;!t&&r<=v&&(t=!0);!a&&r>=C&&(a=!0);t=t&&a}return t};A.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};A.processUpdate=function(r){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",r),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(r)))};A.isUpdating=function(){return!1};
A.isRendering=function(){return!1};A.canResume=function(){return F.prototype.canResume.call(this)?this.isVisibleAtScale(this.view.scale):!1};h._createClass(w,[{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}}]);return w}(u);c.__decorate([g.property({type:E,set(F){F=m.referenceSetter(F,this._get("clips"),E);this._set("clips",F)}})],u.prototype,"clips",void 0);c.__decorate([g.property()],u.prototype,"moving",void 0);c.__decorate([g.property()],
u.prototype,"attached",void 0);c.__decorate([g.property()],u.prototype,"container",void 0);c.__decorate([g.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],u.prototype,"suspended",void 0);c.__decorate([g.property({readOnly:!0})],u.prototype,"updateParameters",void 0);c.__decorate([g.property()],u.prototype,"updateRequested",void 0);c.__decorate([g.property({dependsOn:["attached","updateRequested","suspended"]})],u.prototype,"updating",null);c.__decorate([g.property()],u.prototype,
"view",void 0);return u=c.__decorate([f.subclass("esri.views.2d.layers.LayerView2D")],u)};Object.defineProperty(l,"__esModule",{value:!0})})},"esri/views/layers/support/ClipArea":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/JSONSupport".split(" "),
function(l,h,c,H,b,d,g,n,f,x,p,y){c=function(q){function m(){return q.apply(this,arguments)||this}l._inheritsLoose(m,q);return m}(y.JSONSupport);return c=h.__decorate([n.subclass("esri.views.layers.support.ClipArea")],c)})},"esri/views/layers/support/ClipRect":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ./ClipArea".split(" "),
function(l,h,c,H,b,d,g,n,f,x,p,y){var q;c=q=function(m){function k(){var B=m.apply(this,arguments)||this;B.type="rect";B.left=null;B.right=null;B.top=null;B.bottom=null;return B}l._inheritsLoose(k,m);k.prototype.clone=function(){return new q({left:this.left,right:this.right,top:this.top,bottom:this.bottom})};l._createClass(k,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return k}(y);h.__decorate([d.property({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0);
h.__decorate([d.property({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0);h.__decorate([d.property({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0);h.__decorate([d.property({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0);h.__decorate([d.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],c.prototype,"version",null);return c=q=h.__decorate([n.subclass("esri.views.layers.support.ClipRect")],c)})},"esri/views/layers/support/Geometry":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../geometry/Geometry ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/support/jsonUtils ../../../geometry ./ClipArea".split(" "),
function(l,h,c,H,b,d,g,n,f,x,p,y,q,m,k,B,z){var J;c={base:y,key:"type",typeMap:{extent:q,polygon:m}};z=J=function(K){function I(){var E=K.apply(this,arguments)||this;E.type="geometry";E.geometry=null;return E}l._inheritsLoose(I,K);I.prototype.clone=function(){return new J({geometry:this.geometry.clone()})};l._createClass(I,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return I}(z);h.__decorate([d.property({types:c,json:{read:k.fromJSON,write:!0}})],z.prototype,"geometry",void 0);
h.__decorate([d.property({readOnly:!0,dependsOn:["geometry"]})],z.prototype,"version",null);return z=J=h.__decorate([n.subclass("esri.views.layers.support.Geometry")],z)})},"esri/views/layers/support/Path":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ./ClipArea".split(" "),
function(l,h,c,H,b,d,g,n,f,x,p,y){c=function(q){function m(){var k=q.apply(this,arguments)||this;k.type="path";k.path=[];return k}l._inheritsLoose(m,q);l._createClass(m,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return m}(y);h.__decorate([d.property({type:[[[Number]]],json:{write:!0}})],c.prototype,"path",void 0);h.__decorate([d.property({readOnly:!0,dependsOn:["path"]})],c.prototype,"version",null);return c=h.__decorate([n.subclass("esri.views.layers.support.Path")],c)})},
"esri/views/2d/layers/BitmapTileLayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../engine/BitmapTileContainer".split(" "),function(l,h,c,H,b,d,g,n,f,x,p,y,
q){l.BitmapTileLayerView2D=m=>{m=function(k){function B(){return k.apply(this,arguments)||this}h._inheritsLoose(B,k);var z=B.prototype;z.attach=function(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`);this._bitmapView=new q.BitmapTileContainer(this._tileInfoView);this.container.addChild(this._bitmapView)};z.detach=function(){this.container.removeChild(this._bitmapView);this._bitmapView.removeAllChildren()};return B}(m);return m=c.__decorate([f.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],
m)};Object.defineProperty(l,"__esModule",{value:!0})})},"*noref":1}});
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../layers/RefreshableLayerView ../tiling/TileKey ../tiling/TileInfoView ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../support/drapedUtils ../../layers/TileLayerView ./LayerView2D ./BitmapTileLayerView2D".split(" "),function(l,
h,c,H,b,d,g,n,f,x,p,y,q,m,k,B,z,J,K,I,E,u,F,w){const A=b.getLogger("esri.views.2d.layers.TileLayerView2D"),r=[0,0];c=function(t){function C(){var a=t.apply(this,arguments)||this;a._tileStrategy=null;a._fetchQueue=null;a.layer=null;return a}l._inheritsLoose(C,t);var v=C.prototype;v.initialize=function(){var a=this.layer.tileInfo;a=a&&a.spatialReference;let e;a||(e=new x("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));this.watch("resampling",()=>{this.refresh()});e&&this.addResolvingPromise(m.reject(e))};v.hitTest=function(){return null};v.update=function(a){this._fetchQueue.pause();this._fetchQueue.state=a.state;this._tileStrategy.update(a);this._fetchQueue.resume();this.notifyChange("updating")};v.attach=function(){const a="tileServers"in this.layer?this.layer.tileServers:
null;this._tileInfoView=new z(this.layer.tileInfo,this.layer.fullExtent);this._fetchQueue=new J({tileInfoView:this._tileInfoView,concurrency:a&&10*a.length||10,process:(e,M)=>this.fetchTile(e,M)});this._tileStrategy=new K({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView});this.requestUpdate();this.container.requestRender();t.prototype.attach.call(this)};v.detach=function(){t.prototype.detach.call(this);
this._tileStrategy.destroy();this._fetchQueue.clear();this.container.removeAllChildren();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};v.moveStart=function(){this.requestUpdate()};v.viewChange=function(){this.requestUpdate()};v.moveEnd=function(){this.requestUpdate()};v.createFetchPopupFeaturesQueryGeometry=function(a,e){return E.createQueryGeometry(a,e,this.view)};v.doRefresh=async function(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(a=>
this._enqueueTileFetch(a)),this.notifyChange("updating"))};v.isUpdating=function(){var a;return 0<(null==(a=this._fetchQueue)?void 0:a.length)};v.acquireTile=function(a){a=this._bitmapView.createTile(a);const e=a.bitmap;[e.x,e.y]=this._tileInfoView.getTileCoords(r,a.key);e.resolution=this._tileInfoView.getTileResolution(a.key);[e.width,e.height]=this._tileInfoView.tileInfo.size;this._enqueueTileFetch(a);this._bitmapView.addChild(a);this.requestUpdate();return a};v.releaseTile=function(a){this._fetchQueue.abort(a.key.id);
this._bitmapView.removeChild(a);a.once("detach",()=>a.destroy());this.requestUpdate()};v.fetchTile=async function(a,e){const M="tilemapCache"in this.layer?this.layer.tilemapCache:null;e=!H.isNone(e)&&e.signal;if(!M)try{return await this._fetchImage(a,e)}catch(G){if(!m.isAbortError(G)&&!this.resampling)return this._createBlankImage();throw G;}const L=new B(0,0,0,0);let D;try{await M.fetchAvailabilityUpsample(a.level,a.row,a.col,L,{signal:e});if(L.level!==a.level&&!this.resampling)return this._createBlankImage();
D=await this._fetchImage(L,e)}catch(G){if(m.isAbortError(G))throw G;D=await this._fetchImage(a,e)}const {level:N,row:P,col:O}=L;return this.resampling&&N!==a.level?this._resampleImage(D,N,P,O,a.level,a.row,a.col):D};v._enqueueTileFetch=async function(a){if(!this._fetchQueue.has(a.key.id)){try{const e=await this._fetchQueue.push(a.key);a.bitmap.source=e;a.bitmap.width=this._tileInfoView.tileInfo.size[0];a.bitmap.height=this._tileInfoView.tileInfo.size[1];a.once("attach",()=>this.requestUpdate())}catch(e){m.isAbortError(e)||
A.error(e)}this.requestUpdate()}};v._fetchImage=async function(a,e){return this.layer.fetchTile(a.level,a.row,a.col,{timestamp:this.refreshTimestamp,signal:e})};v._resampleImage=function(a,e,M,L,D,N,P){const O=this._tileInfoView.tileInfo.size;var G=this._tileInfoView.getTileResolution(e),Q=this._tileInfoView.getTileResolution(D);D=this._tileInfoView.getLODInfoAt(D);P=D.getXForColumn(P);N=D.getYForRow(N);D=this._tileInfoView.getLODInfoAt(e);e=D.getXForColumn(L);L=D.getYForRow(M);M=Math.round((P-e)/
G);e=Math.round(-(N-L)/G);L=Math.round(Q/G*O[0]);G=Math.round(Q/G*O[1]);Q=this._createBlankImage();Q.getContext("2d").drawImage(a,M,e,L,G,0,0,O[0],O[1]);return Q};v._createBlankImage=function(){const a=this._tileInfoView.tileInfo.size,e=document.createElement("canvas");[e.width,e.height]=a;return e};l._createClass(C,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}}]);return C}(u.TileLayerView(k.RefreshableLayerView(w.BitmapTileLayerView2D(F.LayerView2DMixin(I)))));
h.__decorate([g.property({dependsOn:["layer.resampling?"]})],c.prototype,"resampling",null);return c=h.__decorate([f.subclass("esri.views.2d.layers.TileLayerView2D")],c)});